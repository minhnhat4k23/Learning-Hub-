"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Background,
  BaseEdge,
  Controls,
  Handle,
  Position,
  ReactFlow,
  getBezierPath,
  getSmoothStepPath,
  useReactFlow,
  type Edge,
  type EdgeProps,
  type EdgeTypes,
  type FitViewOptions,
  type Node,
  type NodeProps,
  type NodeTypes,
} from "@xyflow/react";
import { ArrowDownRight } from "lucide-react";
import type {
  Diagram,
  FlowEdge as ContentFlowEdge,
  FlowNode as ContentFlowNode,
} from "@/content/types";

type FlowDiagramData = Extract<Diagram, { engine: "flow" }>;

type TeachingNodeData = {
  label: string;
  group: NonNullable<ContentFlowNode["group"]>;
  detail?: string;
  sectionId?: string;
  canToggle: boolean;
  collapsed: boolean;
  sourcePosition: Position;
  targetPosition: Position;
};

type HoverState = {
  hoveredId: string | null;
  relatedIds: Set<string>;
};

const HoverContext = createContext<HoverState>({
  hoveredId: null,
  relatedIds: new Set<string>(),
});

const groupClasses: Record<
  TeachingNodeData["group"],
  {
    shell: string;
    dot: string;
  }
> = {
  purpose: {
    shell:
      "border-indigo-300 bg-white text-zinc-900 dark:border-indigo-800 dark:bg-zinc-950 dark:text-zinc-100",
    dot: "bg-indigo-500",
  },
  lo: {
    shell:
      "border-amber-300 bg-white text-zinc-900 dark:border-amber-800 dark:bg-zinc-950 dark:text-zinc-100",
    dot: "bg-amber-500",
  },
  concept: {
    shell:
      "border-zinc-300 bg-white text-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100",
    dot: "bg-zinc-500",
  },
  term: {
    shell:
      "border-emerald-300 bg-white text-zinc-900 dark:border-emerald-800 dark:bg-zinc-950 dark:text-zinc-100",
    dot: "bg-emerald-500",
  },
};

function TeachingNode({ id, data }: NodeProps<Node<TeachingNodeData>>) {
  const classes = groupClasses[data.group];
  const { hoveredId, relatedIds } = useContext(HoverContext);
  const highlight = Boolean(hoveredId && relatedIds.has(id));
  const dim = Boolean(hoveredId && !relatedIds.has(id));

  return (
    <div
      role="button"
      tabIndex={0}
      data-node-highlight={highlight ? "true" : "false"}
      data-node-dim={dim ? "true" : "false"}
      data-node-state={
        data.canToggle ? (data.collapsed ? "closed" : "open") : undefined
      }
      className={`min-w-44 max-w-[14rem] rounded-xl border px-4 py-3 text-sm transition-[opacity,box-shadow] duration-150 focus:outline-none focus:ring-2 focus:ring-zinc-400 ${
        classes.shell
      } ${highlight ? "ring-2 ring-zinc-400" : ""} ${
        dim ? "opacity-25" : "opacity-100"
      }`}
    >
      <Handle type="target" position={data.targetPosition} className="opacity-0" />
      <div className="flex items-start gap-2">
        <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${classes.dot}`} />
        <p className="min-w-0 flex-1 text-sm font-medium leading-5">
          {data.label}
        </p>
        {data.canToggle && (
          <span
            aria-label={data.collapsed ? "Nhánh đang đóng" : "Nhánh đang mở"}
            className={`ml-auto inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${
              data.collapsed
                ? "border-zinc-300 bg-zinc-100 text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                : "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300"
            }`}
          >
            {data.collapsed ? "+" : "−"}
          </span>
        )}
      </div>
      <Handle type="source" position={data.sourcePosition} className="opacity-0" />
    </div>
  );
}

function TeachingEdge({
  id,
  source,
  target,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  label,
  animated,
  markerEnd,
  markerStart,
  interactionWidth,
}: EdgeProps) {
  const { hoveredId, relatedIds } = useContext(HoverContext);
  const related = Boolean(
    hoveredId && (relatedIds.has(source) || relatedIds.has(target)),
  );
  const muted = Boolean(hoveredId && !related);
  const edgePathArgs = {
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  };
  const isHorizontalEdge =
    sourcePosition === Position.Right && targetPosition === Position.Left;
  const [edgePath, labelX, labelY] = isHorizontalEdge
    ? getBezierPath(edgePathArgs)
    : getSmoothStepPath(edgePathArgs);

  // Đẩy nhãn lệch về phía nguồn cho cạnh ngang: nhiều cạnh song song cùng
  // hành lang sẽ tách nhãn theo trục Y (mỗi nguồn ở một độ cao) → hết đè nhau.
  const labelPosX = isHorizontalEdge
    ? sourceX + (targetX - sourceX) * 0.32
    : labelX;
  const labelPosY = isHorizontalEdge
    ? sourceY + (targetY - sourceY) * 0.32
    : label
      ? labelY - 12
      : labelY;

  return (
    <BaseEdge
      id={id}
      path={edgePath}
      label={label}
      labelX={labelPosX}
      labelY={labelPosY}
      markerEnd={markerEnd}
      markerStart={markerStart}
      interactionWidth={interactionWidth}
      className={animated ? "animated" : undefined}
      style={{
        stroke: related ? "#52525b" : "#a1a1aa",
        strokeWidth: related ? 2 : 1,
        opacity: muted ? 0.2 : 1,
        transition: "opacity 150ms ease, stroke 150ms ease, stroke-width 150ms ease",
      }}
      labelStyle={{
        fill: "var(--flow-edge-label-text)",
        fontSize: 12,
        fontWeight: 600,
      }}
      labelBgStyle={{
        fill: "var(--flow-edge-label-bg)",
        stroke: "var(--flow-edge-label-border)",
        strokeWidth: 1,
      }}
      labelBgPadding={[6, 4]}
      labelBgBorderRadius={5}
    />
  );
}

const nodeTypes: NodeTypes = { teaching: TeachingNode };
const edgeTypes: EdgeTypes = { teaching: TeachingEdge };
const fitViewOptions: FitViewOptions = { padding: 0.15 };
const proOptions = { hideAttribution: true };
const defaultEdgeOptions = { type: "teaching" };

function buildChildren(nodes: ContentFlowNode[]) {
  const children = new Map<string, string[]>();
  for (const node of nodes) {
    if (!node.parent) continue;
    children.set(node.parent, [...(children.get(node.parent) ?? []), node.id]);
  }
  return children;
}

function getInitialCollapsed(nodes: ContentFlowNode[]) {
  const roots = new Set(nodes.filter((node) => !node.parent).map((node) => node.id));
  const parents = new Set<string>();
  for (const node of nodes) {
    if (node.parent) parents.add(node.parent);
  }
  return new Set(Array.from(parents).filter((id) => !roots.has(id)));
}

function getVisibleIds(
  nodes: ContentFlowNode[],
  children: Map<string, string[]>,
  collapsed: Set<string>,
) {
  const byId = new Map(nodes.map((node) => [node.id, node]));
  const roots = nodes.filter((node) => !node.parent).map((node) => node.id);
  const visible = new Set<string>();
  const queue = [...roots];

  while (queue.length > 0) {
    const id = queue.shift();
    if (!id || visible.has(id) || !byId.has(id)) continue;
    visible.add(id);
    if (collapsed.has(id)) continue;
    queue.push(...(children.get(id) ?? []));
  }

  return visible;
}

function getDepths(nodes: ContentFlowNode[]) {
  const byId = new Map(nodes.map((node) => [node.id, node]));
  const depths = new Map<string, number>();

  function depthFor(id: string): number {
    if (depths.has(id)) return depths.get(id) ?? 0;
    const node = byId.get(id);
    if (!node?.parent) {
      depths.set(id, 0);
      return 0;
    }
    const depth = depthFor(node.parent) + 1;
    depths.set(id, depth);
    return depth;
  }

  for (const node of nodes) depthFor(node.id);
  return depths;
}

function layoutNodes(
  diagram: FlowDiagramData,
  visibleNodes: ContentFlowNode[],
  children: Map<string, string[]>,
  collapsed: Set<string>,
) {
  const depths = getDepths(diagram.nodes);
  const grouped = new Map<number, ContentFlowNode[]>();
  for (const node of visibleNodes) {
    const depth = depths.get(node.id) ?? 0;
    grouped.set(depth, [...(grouped.get(depth) ?? []), node]);
  }

  const layout = diagram.layout ?? "tree";
  const horizontalPositions = new Map<string, { x: number; y: number }>();
  if (layout === "horizontal") {
    const visibleIds = new Set(visibleNodes.map((node) => node.id));
    const visibleEdges = diagram.edges.filter(
      (edge) => visibleIds.has(edge.from) && visibleIds.has(edge.to),
    );
    const targetIds = new Set(visibleEdges.map((edge) => edge.to));
    const incomingCounts = new Map(visibleNodes.map((node) => [node.id, 0]));
    const outgoingById = new Map(
      visibleNodes.map((node) => [node.id, [] as string[]]),
    );

    for (const edge of visibleEdges) {
      incomingCounts.set(edge.to, (incomingCounts.get(edge.to) ?? 0) + 1);
      outgoingById.get(edge.from)?.push(edge.to);
    }

    const ranks = new Map<string, number>();
    const queue = visibleNodes
      .filter((node) => !targetIds.has(node.id))
      .map((node) => node.id);
    for (const id of queue) ranks.set(id, 0);

    let processedCount = 0;
    while (queue.length > 0) {
      const id = queue.shift();
      if (id === undefined) break;
      processedCount += 1;
      const rank = ranks.get(id) ?? 0;

      for (const targetId of outgoingById.get(id) ?? []) {
        ranks.set(targetId, Math.max(ranks.get(targetId) ?? 0, rank + 1));
        const remainingIncoming = (incomingCounts.get(targetId) ?? 0) - 1;
        incomingCounts.set(targetId, remainingIncoming);
        if (remainingIncoming === 0) queue.push(targetId);
      }
    }

    if (processedCount !== visibleNodes.length) {
      for (const [index, node] of visibleNodes.entries()) {
        horizontalPositions.set(node.id, { x: index * 230, y: 130 });
      }
    } else {
      const columns = new Map<number, ContentFlowNode[]>();
      for (const node of visibleNodes) {
        const rank = ranks.get(node.id) ?? 0;
        columns.set(rank, [...(columns.get(rank) ?? []), node]);
      }

      for (const [rank, columnNodes] of columns) {
        for (const [index, node] of columnNodes.entries()) {
          horizontalPositions.set(node.id, {
            x: rank * 340,
            y: index * 120 - ((columnNodes.length - 1) * 120) / 2 + 170,
          });
        }
      }
    }
  }

  return visibleNodes.map((node, index): Node<TeachingNodeData> => {
    const depth = depths.get(node.id) ?? 0;
    const siblings = grouped.get(depth) ?? [];
    const siblingIndex = siblings.findIndex((item) => item.id === node.id);
    const horizontalPosition = horizontalPositions.get(node.id);
    const x =
      layout === "horizontal"
        ? (horizontalPosition?.x ?? index * 300)
        : siblingIndex * 240 - ((siblings.length - 1) * 240) / 2;
    const y =
      layout === "horizontal"
        ? (horizontalPosition?.y ?? 130)
        : depth * 130;
    const isHorizontal = layout === "horizontal";
    const sourcePosition = isHorizontal ? Position.Right : Position.Bottom;
    const targetPosition = isHorizontal ? Position.Left : Position.Top;

    return {
      id: node.id,
      type: "teaching",
      position: { x, y },
      sourcePosition,
      targetPosition,
      data: {
        label: node.label,
        group: node.group ?? "concept",
        detail: node.detail,
        sectionId: node.sectionId,
        canToggle: Boolean(diagram.collapsible && (children.get(node.id) ?? []).length),
        collapsed: collapsed.has(node.id),
        sourcePosition,
        targetPosition,
      },
    };
  });
}

function layoutEdges(
  edges: ContentFlowEdge[],
  visibleIds: Set<string>,
) {
  return edges
    .filter((edge) => visibleIds.has(edge.from) && visibleIds.has(edge.to))
    .map((edge): Edge => ({
      id: `${edge.from}-${edge.to}`,
      source: edge.from,
      target: edge.to,
      label: edge.label,
      animated: edge.animated,
      type: "teaching",
    }));
}

function getRelatedIds(edges: Edge[], hoveredId: string | null) {
  if (!hoveredId) return new Set<string>();
  const related = new Set([hoveredId]);
  for (const edge of edges) {
    if (edge.source === hoveredId) related.add(edge.target);
    if (edge.target === hoveredId) related.add(edge.source);
  }
  return related;
}

function FitViewOnCollapse({ collapsed }: { collapsed: Set<string> }) {
  const { fitView } = useReactFlow();
  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }

    const frame = requestAnimationFrame(() => {
      void fitView(fitViewOptions);
    });

    return () => cancelAnimationFrame(frame);
  }, [collapsed, fitView]);

  return null;
}

export default function FlowDiagram({ diagram }: { diagram: FlowDiagramData }) {
  const [isReady, setIsReady] = useState(false);
  const children = useMemo(() => buildChildren(diagram.nodes), [diagram.nodes]);
  const [collapsed, setCollapsed] = useState(() =>
    diagram.collapsible ? getInitialCollapsed(diagram.nodes) : new Set<string>(),
  );
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const visibleIds = useMemo(
    () => getVisibleIds(diagram.nodes, children, collapsed),
    [children, collapsed, diagram.nodes],
  );
  const visibleNodes = useMemo(
    () => diagram.nodes.filter((node) => visibleIds.has(node.id)),
    [diagram.nodes, visibleIds],
  );
  const nodes = useMemo(
    () => layoutNodes(diagram, visibleNodes, children, collapsed),
    [children, collapsed, diagram, visibleNodes],
  );
  const edges = useMemo(
    () => layoutEdges(diagram.edges, visibleIds),
    [diagram.edges, visibleIds],
  );
  const relatedIds = useMemo(
    () => getRelatedIds(edges, hoveredId),
    [edges, hoveredId],
  );
  const hoverValue = useMemo(
    () => ({ hoveredId, relatedIds }),
    [hoveredId, relatedIds],
  );
  const selected = diagram.nodes.find((node) => node.id === selectedId);
  const hasHiddenChildren = Array.from(collapsed).length > 0;

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const toggleNode = useCallback((id: string) => {
    if (!diagram.collapsible || !(children.get(id) ?? []).length) return;
    setCollapsed((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, [children, diagram.collapsible]);

  const toggleAll = useCallback(() => {
    if (!diagram.collapsible) return;
    setCollapsed((current) =>
      current.size > 0 ? new Set<string>() : getInitialCollapsed(diagram.nodes),
    );
  }, [diagram.collapsible, diagram.nodes]);

  const handleNodeMouseEnter = useCallback(
    (_: React.MouseEvent, node: Node) => setHoveredId(node.id),
    [],
  );
  const handleNodeMouseLeave = useCallback(() => setHoveredId(null), []);
  const handleNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      setSelectedId(node.id);
      toggleNode(node.id);
    },
    [toggleNode],
  );

  return (
    <figure className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex flex-wrap items-center justify-between gap-3">
        {diagram.title && (
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {diagram.title}
          </p>
        )}
        {diagram.collapsible && (
          <button
            type="button"
            onClick={toggleAll}
            className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            {hasHiddenChildren ? "Mở rộng" : "Thu gọn"}
          </button>
        )}
      </div>

      <div className="relative mt-3 h-[360px] min-w-0 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 md:h-[440px]">
        {isReady && (
          <HoverContext.Provider value={hoverValue}>
            <ReactFlow
              className="h-full w-full"
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              edgeTypes={edgeTypes}
              defaultEdgeOptions={defaultEdgeOptions}
              fitView
              fitViewOptions={fitViewOptions}
              minZoom={0.3}
              maxZoom={1.8}
              proOptions={proOptions}
              onNodeMouseEnter={handleNodeMouseEnter}
              onNodeMouseLeave={handleNodeMouseLeave}
              onNodeClick={handleNodeClick}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable
              onlyRenderVisibleElements
            >
              <FitViewOnCollapse collapsed={collapsed} />
              <Background color="#e4e4e7" gap={20} size={1} />
              <Controls
                showInteractive={false}
                position="bottom-right"
                className="!border-zinc-200 !shadow-none dark:!border-zinc-800"
              />
            </ReactFlow>
          </HoverContext.Provider>
        )}

        {selected && (
          <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-zinc-200 bg-white/95 p-3 text-sm text-zinc-700 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95 dark:text-zinc-300 md:left-auto md:w-80">
            <p className="font-semibold text-zinc-950 dark:text-zinc-100">
              {selected.label}
            </p>
            {selected.detail && (
              <p className="mt-1 leading-6">{selected.detail}</p>
            )}
            {selected.sectionId && (
              <a
                href={`#${selected.sectionId}`}
                aria-label={`Đến mục ${selected.label}`}
                onClick={(event) => event.stopPropagation()}
                className="nodrag nopan mt-3 inline-flex h-7 items-center gap-1 rounded-md border border-sky-300 bg-sky-50 px-2.5 text-[11px] font-semibold text-sky-800 shadow-sm hover:border-sky-400 hover:bg-sky-100 dark:border-sky-700 dark:bg-sky-950/60 dark:text-sky-200 dark:hover:border-sky-500 dark:hover:bg-sky-900/70"
              >
                <ArrowDownRight aria-hidden className="h-3.5 w-3.5" />
                Đến phần học
              </a>
            )}
          </div>
        )}
      </div>

      {diagram.caption && (
        <figcaption className="mt-3 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
          {diagram.caption}
        </figcaption>
      )}
    </figure>
  );
}
