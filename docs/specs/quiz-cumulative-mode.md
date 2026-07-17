# Quiz Cumulative Mode — Ôn tập tổng hợp interleaved (cơ chế chung mọi môn)

> **Nguồn gốc:** Gap H (spaced/interleaved practice) trong `danh-gia-pedagogy-ob.md` §3 — quiz hiện chỉ ôn theo từng topic; nghiên cứu học tập (Dunlosky et al. 2013) xếp interleaved practice vào nhóm hiệu quả cao. OB có 235 câu, Managerial ~8 chương quiz — chỉ cần CƠ CHẾ, không cần soạn nội dung mới.
> **Nguyên tắc:** cơ chế chung qua route + component, môn nào đủ điều kiện tự có (giống `Subject.courseMap`). KHÔNG sửa `content/types.ts`, KHÔNG sửa content môn nào, KHÔNG đụng `QuizPlayer.tsx` đang chạy.
> **Ràng buộc chung:** `docs/specs/codex-handoff.md`.

## 1. Mục đích pedagogy

- Người học đang ôn được từng topic (End-of-Chapter Questions) nhưng đề thi trộn MỌI topic — cần chế độ rút câu ngẫu nhiên xen kẽ topic để luyện "nhận diện khái niệm khi không biết nó thuộc chương nào".
- Kết quả phải chỉ ra **topic yếu** (breakdown per topic) và cho **làm lại ngay các câu sai** (retrieval lần 2 trong cùng phiên).

## 2. File mới 1 — `app/[subject]/on-tap/page.tsx` (server component)

- `generateStaticParams`: như `app/[subject]/page.tsx` (mọi subject).
- Lấy `subject = getSubject(subjectId)` (notFound nếu không có).
- Build danh sách topic đủ điều kiện từ `getSubjectChapters(subjectId)`:
  `chapter.status !== "placeholder" && chapter.questions.length > 0`
  → map thành `{ slug, order, title, questions }`.
- Nếu **< 2 topic** đủ điều kiện → `notFound()`.
- Render (style đồng bộ trang môn hiện tại: nền `bg-zinc-50 dark:bg-zinc-950`, container `max-w-3xl`):
  - Link `← {subject.title}` về `/${subject.id}`.
  - H1: `Ôn tập tổng hợp`. Dòng phụ: "Trộn câu hỏi từ N topic theo kiểu interleaved — luyện nhận diện khái niệm khi không biết nó thuộc topic nào."
  - `<CumulativeQuiz subjectId={subject.id} topics={topics} />`.

## 3. File mới 2 — `app/components/CumulativeQuiz.tsx` (client component)

Props: `{ subjectId: string; topics: { slug: string; order: number; title: string; questions: Question[] }[] }`.

Component TỰ CHỨA (không import QuizPlayer — id câu trùng giữa topic nên phải key theo `topicSlug + question.id`); style câu hỏi/option/rationale/takeaway COPY đúng pattern của `QuizPlayer.tsx` (card `rounded-2xl border`, option đúng emerald / sai rose, takeaway amber) để 2 chế độ nhìn đồng nhất.

### 3.1 Màn hình setup (state mặc định)

- Danh sách checkbox topic: label `Topic {order} — {title} ({số câu} câu)`; mặc định CHỌN TẤT CẢ. (Môn Managerial: label "Chương" thay "Topic" — dùng cùng điều kiện `subjectId === "managerial-accounting"` như trang môn.)
- Chọn cỡ phiên: 4 nút radio `10 / 20 / 40 / Tất cả` (mặc định 20). Nếu tổng câu khả dụng < cỡ phiên → dùng hết số khả dụng.
- Nút "Bắt đầu ôn" (disabled khi chưa chọn topic nào).

### 3.2 Thuật toán rút câu (chạy TRONG onClick "Bắt đầu ôn" — cấm chạy lúc render để tránh hydration mismatch)

1. Với mỗi topic được chọn: shuffle (Fisher–Yates) mảng câu của topic đó.
2. Rút **round-robin** vòng qua các topic (topic hết câu thì bỏ qua) cho đến khi đủ cỡ phiên → đảm bảo xen kẽ topic, phân bố ~đều.
3. Item của phiên: `{ question, topicSlug, topicOrder, topicTitle }`.

### 3.3 Màn hình làm bài

- Header: `Câu {i+1}/{tổng}` + badge difficulty (như QuizPlayer) + **badge nguồn**: `Topic {order}` là `<Link href={/${subjectId}/${topicSlug}}>` (style pill nhỏ `bg-zinc-100`).
- Luồng chọn đáp án / reveal rationale / takeaway / nút Next: y hệt QuizPlayer.
- Ghi lại kết quả từng item: đúng/sai.

### 3.4 Màn hình kết quả

- Điểm tổng `X/Y` to.
- **Bảng breakdown per topic**: mỗi topic đã xuất hiện — `Topic N — title: đúng/tổng (%)`; tô đỏ nhạt row < 60%.
- Danh sách câu SAI (nếu có): stem (rút gọn 1 dòng) + takeaway + link topic.
- 2 nút: **"Làm lại các câu sai"** (bắt đầu phiên mới CHỈ gồm các item sai, giữ round-robin) — chỉ hiện khi có câu sai; **"Phiên mới"** (quay về setup, giữ lựa chọn topic cũ).

## 4. Điểm vào — sửa `app/[subject]/page.tsx` (DUY NHẤT chỗ này trong file cũ)

- Trong container `max-w-3xl` phía dưới (trước `<ul>` danh sách chương, sau các section course map/threads): nếu subject có ≥2 chapter đủ điều kiện (status !== placeholder && questions.length > 0) → render card link tới `/${subject.id}/on-tap`:
  - Style như card chương (border, rounded-2xl, hover): tiêu đề "Ôn tập tổng hợp (interleaved)", mô tả nhỏ: "Trộn {tổng số câu} câu từ {số topic} topic — luyện như đề thi thật."
- KHÔNG sửa gì khác trong file.

## 5. Ràng buộc kỹ thuật

- Random chỉ trong event handler (không trong render/useState initializer) — tránh hydration mismatch SSR.
- Không localStorage/persistence ở v1 (giữ đơn giản; spaced dài hạn đã có Obsidian vault).
- Không thêm dependency mới.
- Mobile 375px: checkbox list + card câu hỏi không hscroll.
- Đặt tên file/component đúng như spec để review đối chiếu.

## 6. Verify (Codex tự làm trước khi báo xong)

- `npx tsc --noEmit` sạch.
- Báo: 2 file mới + 1 chỗ sửa `app/[subject]/page.tsx`; xác nhận KHÔNG đụng QuizPlayer/types/content.
- KHÔNG chạy render check (Claude làm ở khâu review — sẽ test cả `/organizational-behavior/on-tap` lẫn `/managerial-accounting/on-tap`, 3 breakpoint, đi trọn 1 phiên 10 câu).

## 7. Kết quả verify vòng 1 (Claude, 2026-07-17) — PASS + 1 fix cosmetic

**Lớp A:** tsc sạch; 2 môn × 375/768/1440 = 6/6 pass (không hscroll/pageerror; OB 13 checkbox, MA 8 checkbox; entry card hiện cả 2 môn). **Walkthrough trọn phiên 10 câu OB:** interleaving chuẩn — 10 câu đến từ 10 topic khác nhau; màn kết quả đủ điểm/breakdown (10 row, tô đỏ <60%)/danh sách câu sai + takeaway + link; nút "Làm lại các câu sai" khởi động đúng phiên retry. Screenshot đã soi mắt.

**Lớp B:** diff đúng phạm vi (2 file mới + 1 chỗ sửa page.tsx); QuizPlayer/types/content nguyên vẹn; random chỉ trong event handler; round-robin + Fisher–Yates đúng thuật toán §3.2.

### 7.1 Fix follow-up (lỗi SPEC, không phải lỗi Codex)

**Label lặp:** spec §3.1/§3.4 bảo hiển thị `{unitLabel} {order} — {title}` nhưng `chapter.title` vốn đã tự mô tả ("Topic 00 — Introduction…", "Chapter 1 — Managerial…") → UI hiện "Topic 0 — Topic 00 — Introduction…". Sửa trong `app/components/CumulativeQuiz.tsx`:
1. Checkbox label (màn setup): hiển thị `{topic.title}` THẲNG (giữ "({N} câu)" phía sau), bỏ prefix `{unitLabel} {order} — `.
2. Bảng breakdown (màn kết quả): cột Nguồn hiển thị `{row.title}` thẳng, bỏ prefix.
3. GIỮ NGUYÊN: badge pill `{unitLabel} {order}` trên câu hỏi và link "Mở {unitLabel} {order}" ở danh sách câu sai (ngắn gọn, không lặp).
4. Card entry ở `app/[subject]/page.tsx`: đổi chữ "topic" trong mô tả thành `{unitLabel}` viết thường (Managerial phải đọc là "từ 8 chương").

### 7.2 Checklist verify fix — ✅ PASS (Claude, 2026-07-17)
- [x] tsc sạch.
- [x] Setup + breakdown hiển thị title thẳng — grep SSR: "Topic [0-9] — Topic" = 0 match; label mới "Topic 00 — Introduction to Organizational Behavior" đúng.
- [x] Card entry: MA "Trộn 120 câu từ 8 chương", OB "Trộn 235 câu từ 13 topic".
- [x] Regression full walkthrough: 6/6 render pass 2 môn × 3 breakpoint; phiên 10 câu = 10 topic khác nhau; breakdown/retry-wrong hoạt động; không pageerror.
