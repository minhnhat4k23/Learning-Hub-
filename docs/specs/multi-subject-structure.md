# Spec — Tách module đa môn (Claude → Codex)

> Chốt 2026-06-26. Web đang là 1 môn (Managerial Accounting), giờ thêm môn **Digital Technology in Business (DTB)** và có thể thêm môn nữa. Chuyển sang kiến trúc **đa môn**: mỗi môn là một khối dữ liệu riêng, có màn chọn môn. KHÔNG đổ chung mọi chương vào một mảng.

## Mục tiêu
- Trang chủ = **chọn môn** (subject picker).
- Mỗi môn có danh sách chương/topic + route riêng, không lẫn giữa các môn.
- Thêm môn sau = thêm 1 module dữ liệu + 1 dòng đăng ký, KHÔNG sửa UI.

## 1. Data layer

### 1.1 `content/types.ts` — thêm type `Subject`
```ts
export type Subject = {
  id: string;        // kebab-case, dùng trong URL: "managerial-accounting" | "digital-technology-business"
  title: string;     // "Managerial Accounting"
  subtitle?: string; // mô tả ngắn cho card chọn môn
  chapters: Chapter[];
};
```
Giữ nguyên type `Chapter` và mọi type con.

### 1.2 Tách dữ liệu theo môn
- `content/managerial.ts`: chuyển toàn bộ `rawChapters` hiện có trong `content/chapters.ts` sang đây. **Giữ nguyên** cơ chế `applyEnglishQuizOverrides` (quiz EN) — import từ `./quizEnglish`. Export `export const managerialChapters: Chapter[] = applyEnglishQuizOverrides(rawChapters);`.
- `content/dtb.ts`: module mới cho DTB. Bắt đầu bằng các Topic ở dạng `placeholder` (chưa có nội dung). Export `export const dtbChapters: Chapter[] = [...]`. Nguồn nội dung: slide Topic 00–08 + `quiz-digi.pdf` (xem memory `nguon-hoc-lieu-dtb`).
- `content/subjects.ts`: đăng ký trung tâm
```ts
import { managerialChapters } from "./managerial";
import { dtbChapters } from "./dtb";
import type { Subject, Chapter } from "./types";

export const subjects: Subject[] = [
  { id: "managerial-accounting", title: "Managerial Accounting", subtitle: "...", chapters: managerialChapters },
  { id: "digital-technology-business", title: "Digital Technology in Business", subtitle: "...", chapters: dtbChapters },
];

export function getAllSubjects(): Subject[] { return subjects; }
export function getSubject(id: string): Subject | undefined { return subjects.find(s => s.id === id); }
export function getSubjectChapters(id: string): Chapter[] {
  return [...(getSubject(id)?.chapters ?? [])].sort((a, b) => a.order - b.order);
}
export function getChapter(subjectId: string, slug: string): Chapter | undefined {
  return getSubject(subjectId)?.chapters.find(c => c.slug === slug);
}
```
- `content/chapters.ts`: bỏ mảng cứng. Có thể giữ làm shim tương thích (`export const chapters = managerialChapters; getAllChapters = ...`) nếu còn import cũ, HOẶC xoá và cập nhật mọi caller sang `subjects.ts`. Ưu tiên cập nhật caller cho sạch.

## 2. Routing (Next.js App Router)
Đổi từ `/chapters/[slug]` sang lồng môn:
- `app/page.tsx` → **subject picker**: render card mỗi `Subject` (link `/{subject.id}`).
- `app/[subject]/page.tsx` → danh sách chương của môn đó (logic giống `app/chapters/page.tsx` cũ, lấy `getSubjectChapters(subject)`).
- `app/[subject]/[slug]/page.tsx` → chi tiết chương (logic giống `app/chapters/[slug]/page.tsx` cũ, dùng `getChapter(subject, slug)`). ChapterRail nhận `navChapters` của **cùng môn**, link `/{subject}/{slug}`.
- Xoá hoặc redirect `app/chapters/*` cũ.
- `SiteNav`/breadcrumb: hiển thị tên môn hiện tại, có lối quay về trang chọn môn.

## 3. Ràng buộc giữ nguyên
- Quy ước ngôn ngữ: lý thuyết diễn giải VI + term EN; quiz stem/options EN, rationale VI (áp cho cả 2 môn).
- Không bịa nội dung DTB — Topic mới để `placeholder` cho tới khi có spec nội dung.
- Pedagogy theo `00-course-blueprint.md`.

## 4. Verify (bắt buộc)
- `npx tsc --noEmit` → PASS.
- Render check: trang chủ hiện 2 môn; vào mỗi môn thấy đúng danh sách chương của môn đó (không lẫn); mở 1 chương Managerial thấy quiz EN + rationale VI còn nguyên; route `/{subject}/{slug}` hoạt động; không pageerror, không horizontal scroll ở 375/768/1440.

## 5. Sau khi Codex xong
Claude review cấu trúc + verify, rồi mới soạn nội dung DTB theo từng Topic (vòng lặp blueprint §5).
