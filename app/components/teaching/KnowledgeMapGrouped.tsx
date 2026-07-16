"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowDownRight } from "lucide-react";
import type { CourseMapDiagram, FlowNode } from "@/content/types";

type FlowDiagramData = CourseMapDiagram;

const groupClasses: Record<
  NonNullable<FlowNode["group"]>,
  {
    dot: string;
    header: string;
    accent: string;
    chip: string;
    chipActive: string;
  }
> = {
  purpose: {
    dot: "bg-indigo-500",
    header: "text-indigo-700 dark:text-indigo-300",
    accent: "border-indigo-300 dark:border-indigo-800",
    chip:
      "border-indigo-200 text-indigo-700 hover:border-indigo-300 hover:bg-indigo-50 dark:border-indigo-900 dark:text-indigo-300 dark:hover:border-indigo-700 dark:hover:bg-indigo-950/40",
    chipActive:
      "border-indigo-400 bg-indigo-50 text-indigo-800 dark:border-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-200",
  },
  lo: {
    dot: "bg-amber-500",
    header: "text-amber-700 dark:text-amber-300",
    accent: "border-amber-300 dark:border-amber-800",
    chip:
      "border-amber-200 text-amber-700 hover:border-amber-300 hover:bg-amber-50 dark:border-amber-900 dark:text-amber-300 dark:hover:border-amber-700 dark:hover:bg-amber-950/40",
    chipActive:
      "border-amber-400 bg-amber-50 text-amber-800 dark:border-amber-700 dark:bg-amber-950/50 dark:text-amber-200",
  },
  concept: {
    dot: "bg-zinc-500",
    header: "text-zinc-800 dark:text-zinc-200",
    accent: "border-zinc-300 dark:border-zinc-700",
    chip:
      "border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-900",
    chipActive:
      "border-zinc-400 bg-zinc-100 text-zinc-900 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100",
  },
  term: {
    dot: "bg-emerald-500",
    header: "text-emerald-700 dark:text-emerald-300",
    accent: "border-emerald-300 dark:border-emerald-800",
    chip:
      "border-emerald-200 text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50 dark:border-emerald-900 dark:text-emerald-300 dark:hover:border-emerald-700 dark:hover:bg-emerald-950/40",
    chipActive:
      "border-emerald-400 bg-emerald-50 text-emerald-800 dark:border-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-200",
  },
};

function getGroup(node: FlowNode): NonNullable<FlowNode["group"]> {
  return node.group ?? "concept";
}

export default function KnowledgeMapGrouped({
  diagram,
}: {
  diagram: FlowDiagramData;
}) {
  const [selectedChipId, setSelectedChipId] = useState<string | null>(null);

  const { root, childrenByParent, nodesById } = useMemo(() => {
    const nodesById = new Map(diagram.nodes.map((node) => [node.id, node]));
    const childrenByParent = new Map<string, FlowNode[]>();
    for (const node of diagram.nodes) {
      if (!node.parent) continue;
      childrenByParent.set(node.parent, [
        ...(childrenByParent.get(node.parent) ?? []),
        node,
      ]);
    }

    return {
      root: diagram.nodes.find((node) => !node.parent),
      childrenByParent,
      nodesById,
    };
  }, [diagram.nodes]);

  const topLevelNodes = root ? childrenByParent.get(root.id) ?? [] : [];
  const selectedChip = selectedChipId ? nodesById.get(selectedChipId) : undefined;

  return (
    <figure>
      {diagram.title && (
        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {diagram.title}
        </p>
      )}

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {topLevelNodes.map((groupNode) => {
          const children = childrenByParent.get(groupNode.id) ?? [];
          const groupStyle = groupClasses[getGroup(groupNode)];
          const openChild = children.find((child) => child.id === selectedChipId);

          return (
            <section
              key={groupNode.id}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className={`border-l-4 pl-3 ${groupStyle.accent}`}>
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${groupStyle.dot}`} />
                  <h3 className={`text-sm font-semibold ${groupStyle.header}`}>
                    {groupNode.label}
                  </h3>
                </div>
                {groupNode.detail && (
                  <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                    {groupNode.detail}
                  </p>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {children.map((child) => {
                  const childStyle = groupClasses[getGroup(child)];
                  const isOpen = selectedChipId === child.id;
                  const detailId = `knowledge-map-chip-${child.id}`;

                  return (
                    <button
                      key={child.id}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={detailId}
                      onClick={() =>
                        setSelectedChipId((current) =>
                          current === child.id ? null : child.id,
                        )
                      }
                      className={`rounded-lg border px-2.5 py-1 text-left text-sm font-medium transition-colors ${
                        isOpen ? childStyle.chipActive : childStyle.chip
                      }`}
                    >
                      {child.label}
                    </button>
                  );
                })}
              </div>

              {openChild && selectedChip && (
                <div
                  id={`knowledge-map-chip-${openChild.id}`}
                  className="mt-4 rounded-xl border border-zinc-200 bg-white p-3 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300"
                >
                  <p className="font-semibold text-zinc-950 dark:text-zinc-100">
                    {selectedChip.label}
                  </p>
                  {selectedChip.detail && (
                    <p className="mt-1 leading-6">{selectedChip.detail}</p>
                  )}
                  {selectedChip.href && (
                    <Link
                      href={selectedChip.href}
                      onClick={(event) => event.stopPropagation()}
                      className="mt-3 inline-flex h-7 items-center gap-1 rounded-md border border-sky-300 bg-sky-50 px-2.5 text-[11px] font-semibold text-sky-800 shadow-sm hover:border-sky-400 hover:bg-sky-100 dark:border-sky-700 dark:bg-sky-950/60 dark:text-sky-200 dark:hover:border-sky-500 dark:hover:bg-sky-900/70"
                    >
                      <ArrowDownRight aria-hidden className="h-3.5 w-3.5" />
                      Mở topic
                    </Link>
                  )}
                  {!selectedChip.href && selectedChip.sectionId && (
                    <a
                      href={`#${selectedChip.sectionId}`}
                      onClick={(event) => event.stopPropagation()}
                      className="mt-3 inline-flex h-7 items-center gap-1 rounded-md border border-sky-300 bg-sky-50 px-2.5 text-[11px] font-semibold text-sky-800 shadow-sm hover:border-sky-400 hover:bg-sky-100 dark:border-sky-700 dark:bg-sky-950/60 dark:text-sky-200 dark:hover:border-sky-500 dark:hover:bg-sky-900/70"
                    >
                      <ArrowDownRight aria-hidden className="h-3.5 w-3.5" />
                      Đến phần học
                    </a>
                  )}
                </div>
              )}
            </section>
          );
        })}
      </div>

      {diagram.caption && (
        <figcaption className="mt-3 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
          {diagram.caption}
        </figcaption>
      )}
    </figure>
  );
}
