import type { Block } from "@/content/types";
import CalcWalkthrough from "./CalcWalkthrough";
import Callout from "./Callout";
import ComparisonTable from "./ComparisonTable";
import FigureBlock from "./Figure";
import FlowDiagram from "./FlowDiagram";
import FormulaBlock from "./FormulaBlock";
import MermaidDiagram from "./MermaidDiagram";

function Prose({ body }: { body: string }) {
  return (
    <>
      {body.split("\n\n").map((para, index) => (
        <p
          key={index}
            className="max-w-2xl leading-8 text-zinc-700 dark:text-zinc-300"
        >
          {para}
        </p>
      ))}
    </>
  );
}

export default function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "prose":
            return <Prose key={index} body={block.body} />;
          case "callout":
            return <Callout key={index} callout={block.callout} />;
          case "diagram":
            return block.diagram.engine === "flow" ? (
              <FlowDiagram key={index} diagram={block.diagram} />
            ) : (
              <MermaidDiagram key={index} diagram={block.diagram} />
            );
          case "comparison":
            return <ComparisonTable key={index} table={block.table} />;
          case "calc":
            return <CalcWalkthrough key={index} calc={block.calc} />;
          case "formula":
            return <FormulaBlock key={index} formula={block.formula} />;
          case "figure":
            return <FigureBlock key={index} figure={block.figure} />;
        }
      })}
    </div>
  );
}
