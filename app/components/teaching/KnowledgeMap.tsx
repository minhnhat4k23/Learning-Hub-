import type { Diagram } from "@/content/types";
import KnowledgeMapGrouped from "./KnowledgeMapGrouped";
import MermaidDiagram from "./MermaidDiagram";

export default function KnowledgeMap({ diagram }: { diagram: Diagram }) {
  return (
    <section className="mt-8" aria-labelledby="knowledge-map-heading">
      <h2 id="knowledge-map-heading" className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
        Knowledge map
      </h2>
      <div className="mt-3">
        {diagram.engine === "flow" ? (
          <KnowledgeMapGrouped diagram={diagram} />
        ) : (
          <MermaidDiagram diagram={diagram} />
        )}
      </div>
    </section>
  );
}
