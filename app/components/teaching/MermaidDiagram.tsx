"use client";

import { useEffect, useId, useState } from "react";
import type { Diagram } from "@/content/types";

type MermaidTheme = "default" | "dark";
type MermaidDiagramData = Extract<Diagram, { engine: "mermaid" }>;

function getMermaidTheme(): MermaidTheme {
  if (typeof window === "undefined") return "default";

  const rootIsDark = document.documentElement.classList.contains("dark");
  const mediaIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return rootIsDark || mediaIsDark ? "dark" : "default";
}

export default function MermaidDiagram({ diagram }: { diagram: MermaidDiagramData }) {
  const rawId = useId();
  const id = `mermaid-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const [svg, setSvg] = useState("");
  const [theme, setTheme] = useState<MermaidTheme>("default");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const updateTheme = () => setTheme(getMermaidTheme());
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const observer = new MutationObserver(updateTheme);

    updateTheme();
    media.addEventListener("change", updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      media.removeEventListener("change", updateTheme);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function renderDiagram() {
      try {
        setError(null);
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme,
          fontFamily: "inherit",
        });

        const result = await mermaid.render(`${id}-${theme}`, diagram.code);
        if (!cancelled) setSvg(result.svg);
      } catch {
        if (!cancelled) {
          setSvg("");
          setError("Diagram could not be rendered.");
        }
      }
    }

    renderDiagram();

    return () => {
      cancelled = true;
    };
  }, [diagram.code, id, theme]);

  return (
    <figure className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
      {diagram.title && (
        <p className="mb-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {diagram.title}
        </p>
      )}
      <div className="overflow-x-auto rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">
        {error ? (
          <pre className="whitespace-pre-wrap text-xs text-rose-600 dark:text-rose-300">
            {error}
          </pre>
        ) : svg ? (
          <div
            className="min-w-full [&_svg]:mx-auto [&_svg]:max-w-full"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        ) : (
          <div className="h-28 animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
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
