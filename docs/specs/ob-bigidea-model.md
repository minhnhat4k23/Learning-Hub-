# Spec: BigIdeaModel — "Bản chất chương" tương tác (ROLLOUT: mọi chương có pillar)

> **Loại:** Component UI mới + gate renderer. KHÔNG sửa content file, KHÔNG sửa schema.
> **Executor: Codex.**
> **Mục tiêu:** Thay block tĩnh "Bản chất chương" (bigIdea đoạn dài + pillar bullet) bằng một **model tương tác dạng compass flow**: các ô gọn, click → **modal overlay** hiện chi tiết. Nền mờ, khóa cuộn, đóng bằng ✕ / click backdrop / Esc.
> **Phạm vi ROLLOUT (đã qua pilot topic-07 PASS):** áp cho **MỌI chương có `bigIdeaPillars` (length > 0)** — bất kể môn. Chương KHÔNG có pillar (Managerial, DTB, OB topic00, mfg topic00…) GIỮ NGUYÊN block cũ để không vỡ layout. Chương nào được thêm pillar về sau sẽ TỰ ĐỘNG bật model, không cần sửa renderer.
> **Verify:** `npx tsc --noEmit` + `node rendercheck.mjs <subject> <slug>` cho vài chương đại diện (OB topic-07 & topic-06 có pillar; 1 chương managerial không pillar). KHÔNG commit.

---

## 1. File tạo mới: `app/components/teaching/BigIdeaModel.tsx`
- `"use client"` (có state + modal + keyboard). Dùng `useState`, `useEffect`; icon từ `lucide-react` (`X`, `ArrowRight`, `ArrowDown`, `Sparkles` hoặc `Compass` cho ô cốt lõi).
- **Props:**
```ts
export default function BigIdeaModel({
  bigIdea,
  pillars,
}: {
  bigIdea: string;
  pillars: { label: string; body: string }[];
}) { ... }
```
- Bám palette/style hiện có: `rounded-2xl`, `border`, zinc scale, dark mode `dark:*`, `text-xs font-semibold uppercase tracking-wide` cho label section (giống page.tsx dòng 84).

### 1.1 Cấu trúc cards (5 ô = 1 lead + 4 pillar)
Gộp bigIdea + pillars thành 1 mảng card để render đồng nhất:
```ts
const cards = [
  { kind: "core", label: "Ý cốt lõi", body: bigIdea },
  ...pillars.map((p) => ({ kind: "pillar", label: p.label, body: p.body })),
];
```
- **Ô lead "Ý cốt lõi"** (kind=core): nổi bật hơn (nền đậm/gradient nhẹ, icon Compass/Sparkles), đặt TRÊN, canh giữa. Click → modal hiện full `bigIdea`.
- **4 ô pillar** (kind=pillar): xếp thành **hàng ngang** dưới ô lead, nối nhau bằng **mũi tên** (`ArrowRight`) thể hiện hướng đi tư duy; mỗi ô có **badge số ①②③④** (index+1) + label + **teaser 1 dòng**.
- **Teaser** = auto rút gọn từ body, KHÔNG soạn tay: lấy ~90 ký tự đầu, cắt ở ranh giới từ, thêm "…" nếu bị cắt. Helper:
```ts
const teaser = (s: string, n = 90) =>
  s.length <= n ? s : s.slice(0, s.lastIndexOf(" ", n)).trimEnd() + "…";
```
- Card là `<button>` (accessible, focusable), `aria-haspopup="dialog"`, hover đổi border/nền nhẹ (theo pattern chip trong KnowledgeMapGrouped).

### 1.2 Responsive
- Desktop (`sm:` trở lên): ô lead trên; 4 pillar `flex-row` cách nhau bởi `ArrowRight`. Nếu chật, cho `flex-wrap` hoặc `overflow-x-auto` container (KHÔNG để body scroll ngang — bọc trong `overflow-x-auto`).
- Mobile (`< sm`): 4 pillar `flex-col`, mũi tên đổi thành `ArrowDown` (dùng 2 icon, ẩn/hiện theo breakpoint `hidden sm:inline` / `sm:hidden`).

### 1.3 Modal overlay (yêu cầu cốt lõi của Chaliyah)
State: `const [active, setActive] = useState<number | null>(null)` (index card đang mở, null = đóng).
- Render modal khi `active !== null`:
  - **Backdrop**: `fixed inset-0 z-50 bg-black/60 backdrop-blur-sm` — click vào backdrop → `setActive(null)`.
  - **Panel**: canh giữa (`flex items-center justify-center p-4`), `max-w-xl w-full max-h-[80vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-900`, `role="dialog"` `aria-modal="true"` `aria-labelledby`. Click bên trong panel KHÔNG đóng (`stopPropagation`).
  - **Nút đóng ✕**: góc trên phải panel, icon `X`, `aria-label="Đóng"`, click → `setActive(null)`.
  - **Nội dung panel**: tiêu đề = label card (badge số nếu là pillar) + body.
    - **Body tách câu → bullet list** (yêu cầu Chaliyah: dễ đọc/lọc, không để 1 khối chữ liền). Tách body thành các câu rồi render `<ul>` gạch đầu dòng:
```ts
const toBullets = (s: string) =>
  s.split(/(?<=[.!?])\s+(?=[A-ZĐÀ-Ỹ"“(])/)  // tách sau . ! ? khi câu sau bắt đầu bằng chữ hoa / " / (
    .map((x) => x.trim())
    .filter(Boolean);
```
    Render: `<ul className="mt-3 space-y-2 list-disc pl-5">` mỗi câu là `<li className="leading-7 break-words text-zinc-700 dark:text-zinc-300">`. Nếu chỉ tách được 1 phần tử (body ngắn) vẫn hiển thị 1 bullet — chấp nhận.
    - Áp DỤNG CHO CẢ ô "Ý cốt lõi" (bigIdea) lẫn 4 pillar.
    - Lưu ý: split dựa trên dấu câu; nội dung OB không có "vs." nên rủi ro tách nhầm thấp — nếu về sau gặp abbreviation lạ thì tinh chỉnh regex, KHÔNG sửa content.
- **Khóa cuộn nền**: `useEffect` khi `active !== null` set `document.body.style.overflow = "hidden"`, cleanup trả lại `""`.
- **Đóng bằng Esc**: `useEffect` add `keydown` listener, `if (e.key === "Escape") setActive(null)`, remove khi cleanup.
- **Focus**: khi mở, focus nút ✕ (dùng `ref` + `useEffect`); tối thiểu đảm bảo Esc + click ngoài hoạt động. (Focus-trap đầy đủ optional — ưu tiên đúng 3 cách đóng trước.)
- **KHÔNG dùng `window.confirm/alert`** (tránh block).

### 1.4 Header block
Bọc toàn bộ trong khung giống cũ để đồng bộ: `mt-6 rounded-2xl border-l-4 border-zinc-900 bg-white p-6 dark:border-white dark:bg-zinc-900`, bên trong có label `Bản chất chương` (uppercase) rồi tới model cards. (Model THAY phần bigIdea `<p>` + `<ul>` pillar cũ — không còn đoạn văn dài lộ ra ngoài.)

---

## 2. Sửa `app/[subject]/[slug]/page.tsx` (gate theo điều kiện có-pillar)
- Import: `import BigIdeaModel from "@/app/components/teaching/BigIdeaModel";`
- **Gate = có pillar hay không** (bỏ điều kiện slug/subject cũ). Thay khối "Bản chất chương" hiện tại bằng nhánh điều kiện:
```tsx
{chapter.bigIdeaPillars && chapter.bigIdeaPillars.length > 0 ? (
  <div className="mt-6">
    <BigIdeaModel
      bigIdea={chapter.bigIdea}
      pillars={chapter.bigIdeaPillars}
    />
  </div>
) : (
  /* ——— GIỮ NGUYÊN block cũ (bigIdea <p> + pillars <ul>) cho chương KHÔNG có pillar ——— */
)}
```
- **Lưu ý:** nếu đang gate `topic-07` từ pilot trước → đổi điều kiện thành `chapter.bigIdeaPillars?.length` như trên (mở rộng, không thêm nhánh mới).
- Dòng `KnowledgeMap` và phần còn lại **GIỮ NGUYÊN** — knowledge map không đổi.

---

## 3. Ràng buộc & không làm
- KHÔNG sửa `content/organizational-behavior.ts`, KHÔNG sửa `content/types.ts` (schema giữ nguyên, dùng field sẵn có).
- KHÔNG đụng topic00–06 / môn khác (gate slug lo việc đó).
- KHÔNG commit, KHÔNG push.
- Style bám đúng Tailwind + dark mode hiện hành; không thêm thư viện ngoài `lucide-react` (đã có).

## 4. Acceptance (để verify)
1. `npx tsc --noEmit` → 0 error.
2. `rendercheck organizational-behavior topic-07` → 3 viewport hscroll=false, errors=0.
3. Trang topic-07: block "Bản chất chương" hiện 5 ô (1 Ý cốt lõi + 4 pillar có mũi tên), KHÔNG còn đoạn văn dài lộ sẵn.
4. Click 1 ô → modal nổi giữa màn, nền mờ, cuộn nền bị khóa; đóng được bằng ✕, click backdrop, và Esc.
4b. Body trong modal hiển thị dạng **bullet list tách câu** (không phải 1 khối chữ liền), áp cho cả "Ý cốt lõi" lẫn pillar.
5. Chương CÓ pillar (OB topic-01..07, Manufacturing topic-01..08) → hiện BigIdeaModel. Chương KHÔNG pillar (bất kỳ chương Managerial/DTB, OB topic00, mfg topic00) → vẫn block "Bản chất chương" CŨ (không vỡ).
6. Mobile 375px: 4 ô xếp dọc, mũi tên xuống, không tràn ngang.
