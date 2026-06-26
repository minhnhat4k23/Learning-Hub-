import type { Chapter } from "./types";

const createPlaceholderTopic = (order: number): Chapter => {
  const topicNumber = String(order).padStart(2, "0");

  return {
    slug: `topic-${topicNumber}`,
    order,
    title: `Topic ${topicNumber}`,
    bigIdea:
      "Placeholder topic for Digital Technology in Business. Nội dung sẽ được soạn sau khi có spec chi tiết từ slide Topic 00-08 và quiz-digi.pdf.",
    learningObjectives: [],
    sections: [],
    questions: [],
    status: "placeholder",
    source: "Digital Technology in Business slides Topic 00-08 + quiz-digi.pdf",
  };
};

export const dtbChapters: Chapter[] = Array.from({ length: 9 }, (_, index) =>
  createPlaceholderTopic(index),
);
