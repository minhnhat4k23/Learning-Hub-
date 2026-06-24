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
};

export type Section = {
  id: string;
  heading: string;
  /** Thân bài lý thuyết. Hỗ trợ xuống dòng bằng \n\n giữa các đoạn. */
  body: string;
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
  /** Bản chất chương gói trong 1-2 câu. */
  bigIdea: string;
  learningObjectives: string[];
  sections: Section[];
  questions: Question[];
  status: ChapterStatus;
  /** Nguồn (sách/slide, tác giả, năm, trang) — điền khi có tài liệu. */
  source?: string;
};
