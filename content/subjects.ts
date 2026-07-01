import { dtbChapters } from "./dtb";
import { managerialChapters } from "./managerial";
import { manufacturingChapters } from "./manufacturing";
import type { Chapter, Subject } from "./types";

export const subjects: Subject[] = [
  {
    id: "managerial-accounting",
    title: "Managerial Accounting",
    subtitle:
      "Học quản trị chi phí theo bản chất: cost concepts, job-order costing, CVP, budgeting, variance analysis, and decisions.",
    chapters: managerialChapters,
  },
  {
    id: "digital-technology-business",
    title: "Digital Technology in Business",
    subtitle:
      "Topic 01-08 placeholder. Nội dung sẽ được soạn từ slide môn học và quiz-digi.pdf khi có spec chi tiết.",
    chapters: dtbChapters,
  },
  {
    id: "manufacturing-systems",
    title: "Manufacturing Systems",
    subtitle:
      "Topic 01-08 placeholder. Nội dung sẽ được soạn từ ebook Groover (Automation, Production Systems & CIM 4e) + slides Chapter 1-8 + test-exams.",
    chapters: manufacturingChapters,
  },
];

export function getAllSubjects(): Subject[] {
  return subjects;
}

export function getSubject(id: string): Subject | undefined {
  return subjects.find((subject) => subject.id === id);
}

export function getSubjectChapters(id: string): Chapter[] {
  return [...(getSubject(id)?.chapters ?? [])].sort((a, b) => a.order - b.order);
}

export function getChapter(subjectId: string, slug: string): Chapter | undefined {
  return getSubject(subjectId)?.chapters.find((chapter) => chapter.slug === slug);
}
