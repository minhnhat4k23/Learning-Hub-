import type { Chapter } from "./types";

// Organizational Behavior (IM2017 — Dr Lan Anh, HCMUT).
//
// Nguồn (chỉ dùng): Slides + Exercises (mỗi topic = 1 slide Dr Lan Anh + 1 Reading Chapter
// sách tương ứng) và Exam (Midterm/Final — xem để lấy tư duy ra đề). KHÔNG dùng Assignment/
// journal articles.
//
// 13 topic (Topic 0-12). Hiện là PLACEHOLDER — nội dung từng topic sẽ soạn theo GATE
// bigIdea + verify 2 lớp (xem docs/specs/workflow-soan-mon-moi.md), rồi chuyển "ready".

const placeholder = (
  order: number,
  slug: string,
  title: string,
  slideFile: string,
  readingChapter: string,
): Chapter => ({
  slug,
  order,
  title,
  bigIdea:
    "Placeholder — bigIdea (lens) sẽ soạn theo GATE từ slide + Reading Chapter, đợi Chaliyah chốt.",
  learningObjectives: [],
  sections: [],
  questions: [],
  status: "placeholder",
  source: `Slide '${slideFile}' (Dr Lan Anh, IM2017) + Reading '${readingChapter}'.`,
});

export const organizationalBehaviorChapters: Chapter[] = [
  placeholder(0, "topic-00", "Topic 00 — Introduction to OB", "OB-Topic 0-Introduction", "Chapter 1 - Welcome to the world of OB"),
  placeholder(1, "topic-01", "Topic 01 — Personality", "OB-Topic 1-Personality and Learning styles", "Chapter 4 - Personality Factors"),
  placeholder(2, "topic-02", "Topic 02 — Perception and Common Biases", "OB-Topic 2-Perception and Common bias", "Chapter 5 - Perceptual Processes"),
  placeholder(3, "topic-03", "Topic 03 — Personal Values", "OB-Topic 3-Personal values", "Chapter 6 - Valuing diversity"),
  placeholder(4, "topic-04", "Topic 04 — Emotions", "OB-Topic 4-Emotions", "Chapter 3 - Emotions"),
  placeholder(5, "topic-05", "Topic 05 — Attitude and Dissonance", "OB-Topic 5-Attitudes and Dissonance", "Chapter 2 - Attitudes"),
  placeholder(6, "topic-06", "Topic 06 — Motivation", "OB-Topic 6-Motivation", "Chapter 7 - Basic Motivation + Chapter 8 - Applied motivation"),
  placeholder(7, "topic-07", "Topic 07 — Group Properties", "OB-Topic 7-Group properties", "Chapter 10 - Basics of Group Behavior"),
  placeholder(8, "topic-08", "Topic 08 — Conflict and Collaboration", "OB-Topic 8-Conflict and Collaboration", "Chapter 14 - Conflict in Organizations"),
  placeholder(9, "topic-09", "Topic 09 — Team Lifecycle and Team Effectiveness", "OB-Topic 9-Team lifecycle and Team effectiveness", "Chapter 11 - From Groups to Teams"),
  placeholder(10, "topic-10", "Topic 10 — Leadership and Followership", "OB-Topic 10-Leadership Followership", "Chapter 12 - Characteristics of Leaders"),
  placeholder(11, "topic-11", "Topic 11 — Organizational Culture", "OB-Topic 11-Organizational culture", "Chapter 16 - Creating and Maintaining Organizational Culture"),
  placeholder(12, "topic-12", "Topic 12 — Organizational Change and Work Stress", "OB-Topic 12-Organizational Change and Workstress", "Chapter 17 - Organizational Change"),
];
