import { managerialChapters } from "./managerial";

export const chapters = managerialChapters;

export function getAllChapters() {
  return [...chapters].sort((a, b) => a.order - b.order);
}

export function getChapterBySlug(slug: string) {
  return chapters.find((chapter) => chapter.slug === slug);
}
