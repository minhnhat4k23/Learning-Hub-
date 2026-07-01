// Content schema for the Managerial Accounting learning site.
//
// Triết lý: nội dung tách hoàn toàn khỏi UI. Khi có sách/slide, chỉ cần thêm
// một object Chapter vào content/chapters.ts là toàn bộ trang tự render.
//
// Điểm cốt lõi của pedagogy nằm ở Question/AnswerOption:
//  - mỗi đáp án (kể cả sai) đều có `rationale` giải thích vì sao đúng/sai
//    => biến mỗi câu hỏi thành một bài học, "bẫy" có chủ đích.

export type KeyTerm = {
  term: string;
  definition: string;
};

export type Example = {
  title: string;
  body: string;
  meaning?: string;
  implication?: string;
};

export type CalloutKind =
  | "insight"
  | "trap"
  | "key"
  | "brainstorm"
  | "realworld"
  | "note";

export type Callout = {
  kind: CalloutKind;
  title?: string;
  body: string;
};

export type FlowNode = {
  id: string;
  label: string;
  group?: "purpose" | "lo" | "concept" | "term";
  detail?: string;
  sectionId?: string;
  parent?: string;
};

export type FlowEdge = {
  from: string;
  to: string;
  label?: string;
  animated?: boolean;
};

export type Diagram =
  | {
      engine: "mermaid";
      title?: string;
      code: string;
      caption?: string;
    }
  | {
      engine: "flow";
      title?: string;
      layout?: "tree" | "horizontal" | "radial";
      nodes: FlowNode[];
      edges: FlowEdge[];
      collapsible?: boolean;
      caption?: string;
    };

export type ComparisonTable = {
  title?: string;
  columns: string[];
  rows: {
    label: string;
    cells: string[];
  }[];
};

export type CalcStep = {
  label: string;
  expr: string;
  note?: string;
};

export type CalcWalkthrough = {
  title?: string;
  steps: CalcStep[];
  result?: string;
  meaning?: string;
  implication?: string;
};

export type Formula = {
  expression: string;
  legend?: {
    symbol: string;
    meaning: string;
  }[];
  note?: string;
};

export type Figure = {
  caption: string;
  src?: string;
  placeholder?: boolean;
  alt?: string;
};

export type Block =
  | { type: "prose"; body: string }
  | { type: "callout"; callout: Callout }
  | { type: "diagram"; diagram: Diagram }
  | { type: "comparison"; table: ComparisonTable }
  | { type: "calc"; calc: CalcWalkthrough }
  | { type: "formula"; formula: Formula }
  | { type: "figure"; figure: Figure };

export type Section = {
  id: string;
  heading: string;
  /** Thân bài lý thuyết. Hỗ trợ xuống dòng bằng \n\n giữa các đoạn. */
  body?: string;
  blocks?: Block[];
  keyTerms?: KeyTerm[];
  examples?: Example[];
};

export type AnswerOption = {
  id: string; // "a" | "b" | "c" | "d"
  text: string;
  isCorrect: boolean;
  /** Đúng: giải thích sâu vì sao đúng. Sai: vạch ra hiểu lầm/bẫy thường gặp. */
  rationale: string;
};

export type Difficulty = "basic" | "intermediate" | "advanced";

export type Question = {
  id: string;
  stem: string;
  options: AnswerOption[];
  difficulty: Difficulty;
  /** Bản chất khái niệm câu hỏi đang kiểm tra. */
  conceptTested: string;
  /** Chốt kiến thức hiển thị sau khi người học trả lời. */
  takeaway?: string;
};

export type ChapterStatus = "placeholder" | "draft" | "ready";

export type Chapter = {
  slug: string;
  order: number;
  title: string;
  /** Bản chất chương gói trong 1 câu (compass / la bàn định hướng). */
  bigIdea: string;
  /** 2-4 trụ định hướng (soft lens) hiển thị dạng chip dưới compass. Optional. */
  bigIdeaPillars?: { label: string; body: string }[];
  learningObjectives: string[];
  sections: Section[];
  questions: Question[];
  status: ChapterStatus;
  /** Nguồn (sách/slide, tác giả, năm, trang) — điền khi có tài liệu. */
  source?: string;
  knowledgeMap?: Diagram;
};

export type Subject = {
  /** Kebab-case URL segment, such as "managerial-accounting". */
  id: string;
  title: string;
  subtitle?: string;
  chapters: Chapter[];
};
