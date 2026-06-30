# Spec: DTB Topic 05 — cải thiện trình bày công thức (dùng FormulaBlock)

> **Loại:** Patch trình bày — tách công thức toán ra khỏi text callout, đưa vào **formula block** (monospace + legend). KHÔNG đổi nội dung kiến thức, KHÔNG bịa đáp án số.
> **File:** `content/dtb.ts` — section s9, s10, s11 của `topic05` (và thêm 1 helper).
> **Lý do:** trong callout text, dấu `·` vừa là dấu nhân vừa là dấu thập phân trong số mũ (`r⁻¹·⁵`) → khó đọc. FormulaBlock đã có sẵn (`app/components/teaching/FormulaBlock.tsx`), render monospace + legend grid; `managerial.ts` đã dùng convention `×` `÷` `−`.
> **Verify:** `npx tsc --noEmit` pass; render-check s10.

---

## 1. Thêm helper `formulaBlock` (cạnh các helper khác, đầu file)

Hiện `dtb.ts` mới có `flowBlock`, `calloutBlock`, `comparisonBlock`. Thêm:

```ts
const formulaBlock = (
  expression: string,
  legend?: { symbol: string; meaning: string }[],
  note?: string,
): Block => ({
  type: "formula",
  formula: { expression, legend, note },
});
```

(`Block`/`Formula` type đã sẵn trong `./types`; `BlockRenderer` đã dispatch `type:"formula"` → `FormulaBlock`.)

---

## 2. Convention notation (áp cho MỌI công thức Topic 05)

- Dấu nhân: **`×`** (không dùng `·`).
- Dấu trừ/âm: **`−`** (U+2212, không dùng hyphen `-`).
- Số mũ: **`^(...)`** với chấm thập phân thường — vd `r^(−1.5)`, `A^(0.1)`. KHÔNG dùng superscript unicode cho số mũ thập phân.
- Chia: **`÷`**.

---

## 3. Patch từng section

### s9 — Khung mô hình chung
Trong callout "Biến bài toán kinh doanh thành spreadsheet", BỎ công thức `P = R − C = (r − v)·X − F` khỏi câu chữ (giữ phần narrative), rồi THÊM ngay sau callout:

```ts
formulaBlock(
  "P = R − C = (r − v) × X − F",
  [
    { symbol: "P", meaning: "Profit — lợi nhuận (output thường cần phân tích/tối ưu)" },
    { symbol: "R", meaning: "Revenue — doanh thu" },
    { symbol: "C", meaning: "Total cost — tổng chi phí" },
    { symbol: "r", meaning: "Unit price; v = variable unit cost; F = fixed cost" },
  ],
),
```

### s10 — Solver / Optimization (Problem 1)
Trong callout "Solver — tìm cấu hình tối ưu", BỎ 2 công thức cramped khỏi text (giữ narrative: "Solver tìm r, A, S để (a)…(b)…(c)…"), rồi THÊM 2 formula block:

```ts
formulaBlock(
  "X = 200000 × r^(−1.5) × A^(0.1) × S^(0.3)",
  [
    { symbol: "X", meaning: "Demand — số sản phẩm bán được" },
    { symbol: "r", meaning: "Unit price — đơn giá" },
    { symbol: "A", meaning: "Advertising cost — chi phí quảng cáo" },
    { symbol: "S", meaning: "Salesforce cost — chi phí bán hàng" },
  ],
  "Các số mũ −1.5, 0.1, 0.3 là elasticities của từng biến.",
),
formulaBlock(
  "P = (r − 25) × X − 80000 − A − S",
  [
    { symbol: "P", meaning: "Profit — lợi nhuận (cần tối đa hoá)" },
    { symbol: "25", meaning: "Variable unit cost — chi phí biến đổi/đơn vị ($25)" },
    { symbol: "80000", meaning: "Fixed cost — định phí ($80,000)" },
  ],
  "Solver tìm r, A, S để: (a) tối đa P; (b) đạt P = $2,000,000; (c) tìm A khi cố định S = $1,050,000 và r = $75. Lý thuyết tương đương: Lagrange multiplier cho hàm 3 biến.",
),
```

Giữ callout "Solver làm gì" (kèm câu *không điền đáp án số*) như cũ.

### s11 — What-if & Sensitivity (Problem 2)
Trong callout "Mô hình demand tuyến tính", BỎ công thức khỏi text, THÊM 3 formula block:

```ts
formulaBlock(
  "q = 500 − 10p",
  [
    { symbol: "q", meaning: "Demand — số sản phẩm bán" },
    { symbol: "p", meaning: "Unit price — đơn giá" },
  ],
),
formulaBlock(
  "C = F + v × q",
  [
    { symbol: "C", meaning: "Total cost — tổng chi phí" },
    { symbol: "F", meaning: "Fixed cost = 2000" },
    { symbol: "v", meaning: "Unit cost = 10 / sản phẩm" },
  ],
),
formulaBlock(
  "P = TR − C",
  [
    { symbol: "TR", meaning: "Total revenue = p × q" },
    { symbol: "P", meaning: "Profit — lợi nhuận" },
  ],
  "Câu hỏi: (b) p nào để breakeven (P = 0)? (c) p nào để P = 1000?",
),
```

Giữ callout "Sensitivity analysis" như cũ (P/p, P/F, P/v).

---

## 4. Phạm vi & lưu ý
- CHỈ đụng s9, s10, s11 + thêm helper. Các section khác giữ nguyên.
- s8 (array formula: `=TRANSPOSE(...)`, `=SUMPRODUCT(...)`) là **cú pháp hàm Excel**, không phải công thức toán — GIỮ trong callout (đã rõ ràng), không cần formula block.
- "2²⁰ hàng × 2¹⁴ cột" ở s1 giữ nguyên (superscript nguyên đã rõ).
- KHÔNG thêm đáp án số.

---

## 5. Verify (Codex)
```bash
npx tsc --noEmit
```
- Pass 0 error.
- Render-check `/digital-technology-business/topic-05` s10: 2 công thức hiện dạng monospace lớn + legend grid; dấu `×` và `^(−1.5)` rõ ràng, không còn nhập nhằng với dấu nhân. Báo Chaliyah. KHÔNG commit.
