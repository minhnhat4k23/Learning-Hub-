# Spec: bigIdea → format "Compass + Pillars" (schema + renderer + retrofit Manufacturing)

> **Loại:** Thay đổi hạ tầng nhỏ — thêm field optional vào schema, cập nhật renderer, retrofit 4 topic Manufacturing.
> **File sửa:** `content/types.ts`, `app/[subject]/[slug]/page.tsx`, `content/manufacturing.ts`.
> **Lý do (Chaliyah chốt):** bigIdea hiện là 1 đoạn `<p>` dài → rối. Đổi sang **compass (1 câu la bàn) + 2–4 pillars (trụ định hướng)**, giữ knowledgeMap làm diagram tổng ngay dưới.
> **Ràng buộc:** field `bigIdeaPillars` **optional** → managerial/dtb chưa có vẫn render như cũ, KHÔNG vỡ. KHÔNG commit.

---

## Phần 2A — Schema (`content/types.ts`)

Trong interface `Chapter`, ngay dưới `bigIdea`, thêm field optional:

```ts
  /** Bản chất chương gói trong 1 câu (compass / la bàn định hướng). */
  bigIdea: string;
  /** 2–4 trụ định hướng (soft lens) hiển thị dạng chip dưới compass. Optional. */
  bigIdeaPillars?: { label: string; body: string }[];
```

- Chỉ THÊM field; không đổi `bigIdea` (vẫn `string`).
- Không đổi field khác.

---

## Phần 2B — Renderer (`app/[subject]/[slug]/page.tsx`)

Khối "Bản chất chương" hiện tại:

```tsx
<div className="mt-6 rounded-2xl border-l-4 border-zinc-900 bg-white p-6 dark:border-white dark:bg-zinc-900">
  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
    Bản chất chương
  </p>
  <p className="mt-3 text-lg leading-8 text-zinc-800 dark:text-zinc-200">
    {chapter.bigIdea}
  </p>
</div>
```

Thêm phần render pillars NGAY SAU `<p>` compass, TRONG cùng `<div>`:

```tsx
<div className="mt-6 rounded-2xl border-l-4 border-zinc-900 bg-white p-6 dark:border-white dark:bg-zinc-900">
  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
    Bản chất chương
  </p>
  <p className="mt-3 text-lg leading-8 text-zinc-800 dark:text-zinc-200">
    {chapter.bigIdea}
  </p>
  {chapter.bigIdeaPillars && chapter.bigIdeaPillars.length > 0 && (
    <ul className="mt-4 space-y-2 border-t border-zinc-100 pt-4 dark:border-zinc-800">
      {chapter.bigIdeaPillars.map((pillar) => (
        <li
          key={pillar.label}
          className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3"
        >
          <span className="inline-flex w-fit shrink-0 rounded-md bg-zinc-900 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-white dark:bg-white dark:text-zinc-900">
            {pillar.label}
          </span>
          <span className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
            {pillar.body}
          </span>
        </li>
      ))}
    </ul>
  )}
</div>
```

- Guard `chapter.bigIdeaPillars && ...length > 0` → topic không có pillars render y như cũ.
- KHÔNG đổi vị trí knowledgeMap (vẫn ngay sau `<div>` này).

---

## Phần 3 — Retrofit bigIdea 4 topic Manufacturing (`content/manufacturing.ts`)

Với mỗi topic: **thay** chuỗi `bigIdea` dài hiện tại bằng **compass ngắn**, và **thêm** `bigIdeaPillars` ngay sau `bigIdea`. Đặt `bigIdeaPillars` trước `learningObjectives`.

> Compass = soft lens (định hướng), KHÔNG phải lý thuyết cứng. Nội dung lý thuyết vẫn nằm nguyên ở sections/keyTerms — KHÔNG đụng.

### topic01 — Introduction to Manufacturing System
```ts
  bigIdea:
    "Đọc bất kỳ nhà máy nào qua 3 câu hỏi: nó là hệ thống KIỂU GÌ, KHỎE đến đâu, và tự động hóa Ở ĐÂU là đáng?",
  bigIdeaPillars: [
    { label: "Khung", body: "Production system = facilities (chạm sản phẩm) + support systems (điều phối thông tin) — Groover Fig 1.1." },
    { label: "Phân loại", body: "Ngành (manufacturing/service/process), loại sản xuất (jobbing/batch/mass), 5 functions + 4 info-processing functions." },
    { label: "Đo lường", body: "Sức khỏe hệ thống bằng chỉ số 1.7: MLT, Rp, Ca, U, WIP." },
    { label: "Automation có điều kiện", body: "USA Principle (Understand → Simplify trước); chọn fixed/programmable/flexible theo volume × variety." },
  ],
```

### topic02 — Organization Planning in Factory
```ts
  bigIdea:
    "Không có cấu trúc tổ chức lý tưởng cố định — tổ chức tốt là RELEVANT + DYNAMIC, tạo team-work để đạt orders với chi phí thấp nhất.",
  bigIdeaPillars: [
    { label: "Mục tiêu", body: "Tạo môi trường team-work hoàn thành orders ở lowest cost — không phải vẽ sơ đồ đẹp." },
    { label: "Tiến trình design", body: "Xác định functions → nhóm work-elements → mô tả jobs → gán người." },
    { label: "Principles", body: "Span of control 4–8, ít cấp quản lý, phân biệt authority vs responsibility." },
    { label: "Chọn structure", body: "Theo quy mô/dự án: direct → direct + consultation → matrix → informal." },
  ],
```

### topic03 — Process Design & Planning
```ts
  bigIdea:
    "Thiết kế quy trình = trả lời 'làm ra sản phẩm BẰNG CÁCH NÀO?' — ở tầm hệ thống lẫn từng chi tiết.",
  bigIdeaPillars: [
    { label: "Tầng hệ thống", body: "Chọn LOẠI process trên phổ manual → mechanized → automated theo volume/quality/cost." },
    { label: "Tầng chi tiết", body: "Lập process plan cho part: sequence (basic→secondary→enhance→finishing), route sheet, make-or-buy." },
    { label: "Tự động hóa lập KH", body: "CAPP — retrieval (variant) vs generative." },
    { label: "Tích hợp sớm", body: "Concurrent engineering / DFM — ~70% chi phí vòng đời quyết ở khâu design." },
  ],
```

### topic04 — Jobbing & Batch Production System
```ts
  bigIdea:
    "Volume thấp → quản DÒNG CHẢY, không quản máy: cân đối và điều phối công việc quan trọng hơn tăng tốc từng máy.",
  bigIdeaPillars: [
    { label: "Định vị", body: "Đầu thấp của phổ variety↔quantity: job shop (Q=1–100) & batch (100–10.000); plant layout tương ứng." },
    { label: "Vận hành", body: "Chu trình PPC: routing → scheduling → dispatching → (batch thêm) expediting." },
    { label: "Công cụ", body: "Progress review: block system, production clearance list (PCL), inventory status report." },
    { label: "Insight", body: "~95% thời gian của một part là chờ/di chuyển (Groover Fig 2.4) → dồn sức cắt non-value time." },
  ],
```

---

## Verify (Codex chạy)

```bash
npx tsc --noEmit
```
- Phải PASS (0 error) — đặc biệt kiểu `bigIdeaPillars?: { label: string; body: string }[]` khớp mọi chỗ dùng.
- Sau khi pass: render-check `/manufacturing-systems/topic-01` … `topic-04` (375/768/1440):
  - Khối "Bản chất chương" hiện compass ngắn + list pillars (chip label + body), không horizontal-scroll.
  - knowledgeMap vẫn ngay dưới.
  - Mở nhanh 1 route DTB hoặc Managerial để xác nhận topic KHÔNG có pillars vẫn render như cũ (không vỡ).
- Báo Chaliyah. **KHÔNG commit.**

---

## Lưu ý thực thi (Codex)
- Chỉ THÊM field optional vào `types.ts`; KHÔNG đổi field hiện có.
- Renderer: guard `bigIdeaPillars && length > 0`.
- Retrofit: chỉ đổi `bigIdea` + thêm `bigIdeaPillars` cho topic01–04; KHÔNG đụng sections/questions/knowledgeMap của các topic đó.
- KHÔNG retrofit managerial/dtb (giữ nguyên, field optional).
