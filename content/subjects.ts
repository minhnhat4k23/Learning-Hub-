import { dtbChapters } from "./dtb";
import { managerialChapters } from "./managerial";
import { manufacturingChapters } from "./manufacturing";
import {
  organizationalBehaviorChapters,
  organizationalBehaviorCourseMap,
  organizationalBehaviorCourseThreads,
} from "./organizational-behavior";
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
  {
    id: "organizational-behavior",
    title: "Organizational Behavior",
    subtitle:
      "Hành vi con người trong tổ chức qua 3 cấp: cá nhân (personality, perception, values, emotions, attitudes, motivation), nhóm (groups, conflict, teams, leadership) và tổ chức (culture, change & stress).",
    chapters: organizationalBehaviorChapters,
    courseMap: organizationalBehaviorCourseMap,
    courseThreads: organizationalBehaviorCourseThreads,
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
