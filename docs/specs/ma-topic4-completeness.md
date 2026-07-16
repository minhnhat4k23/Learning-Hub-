# Spec: MA Topic 4 (cost-volume-profit) — bổ sung cho ĐỦ sách Garrison Ch.5

> **Loại:** CHỈ THÊM section/block/quiz vào chapter `cost-volume-profit` trong `content/managerial.ts`. **KHÔNG rewrite** phần đã có; KHÔNG đụng chương/môn khác.
> **Executor: Codex.** File DUY NHẤT: `content/managerial.ts`.
> **Nguồn:** Garrison/Noreen/Brewer 17e, **Chapter 5** "Cost-Volume-Profit Relationships" (book p.191–217, ví dụ Acoustic Concepts). Web hiện dùng số **RBC (Racing Bicycle) từ SLIDE**; bổ sung dưới đây GIỮ số RBC để nhất quán toàn chương (P $500, V $300, Unit CM $200, Fixed $80,000, CM ratio 40%).
> **Ngôn ngữ:** diễn giải VI + giữ term EN. Quiz `stem`/`options` EN; `rationale` VI+EN (Cơ chế→Bẫy→Khóa), distractor đặt tên khái niệm.
> **Lý do:** LUẬT global SÁCH>slide (`workflow-soan-mon-moi.md` §0). Audit Lớp B đã đọc trọn Ch.5 (Ex 5-1…5-5, Acoustic Concepts + Bogside/Sterling + Virtual Journeys, Glossary 10 term, Review Problem).
> **Đã ĐỦ (không đụng):** s0 (CVP + giả định), s1 (CM), s2 (profit equation), s3 (CVP/profit graph), s4 (CM ratio + VE ratio), s5 (5 what-if), s6 (break-even formula), s7 (target profit formula), s8 (margin of safety), s9 (cost structure + operating leverage + DOL), s10 (sales mix + multiproduct BE + sales commission), s11 (Appendix 5A high-low + least-squares). Glossary 10 term đều có. Chỉ bổ sung phần dưới.
> **Style block:** formula = `{expression, legend:[{symbol,meaning}], note}`; calc = `{title, steps:[{label,expr}], result, meaning?, implication?}`; comparison = `{title, columns, rows:[{label,cells}]}`; callout = `{kind,title?,body}`. Bám shape THỰC tế trong managerial.ts (đối chiếu quanh s6/s7).

---

## Bối cảnh gap

Sách Ch.5 dạy **HAI cách song song, tương đương** để giải break-even và target profit:
- **The Equation Method** — giải phương trình `Profit = Unit CM × Q − Fixed` (đặt Profit = 0 cho break-even, = target cho target profit), rồi giải Q; với dollar sales dùng `Profit = CM ratio × Sales − Fixed`.
- **The Formula Method** — công thức tắt `Fixed ÷ Unit CM`, `(Target + Fixed) ÷ Unit CM`...

Web **chỉ có formula method** (s6/s7), chỉ ghi chú "suy ra từ..." chứ không dạy equation method như một kỹ thuật giải. Nhưng **Review Problem của chính sách (mục 2) yêu cầu rõ "Use the equation method"** và The Foundational 15 cũng dựa trên nó → đề thi ra từ sách sẽ hỏi cách này. Slide (RBC) bỏ qua → luật SÁCH>slide buộc thêm.

---

## A. Section MỚI `s7b` — Equation method (cách giải gốc)

Thêm 1 **section mới**, **chèn ngay sau object `s7`** (target profit), trước `s8` (margin of safety). Dùng số RBC cho nhất quán.

```ts
{
  id: "s7b",
  heading: "Equation method — cách giải gốc (LO5·6)",
  blocks: [
    {
      type: "callout",
      callout: {
        kind: "note",
        title: "Hai con đường, một đích",
        body: "s6/s7 dùng FORMULA METHOD (công thức tắt Fixed ÷ Unit CM). Sách dạy song song EQUATION METHOD: giải thẳng phương trình lợi nhuận. Hai cách luôn cho cùng kết quả — nhưng đề (và Review Problem của sách) có thể yêu cầu ĐÍCH DANH equation method.",
      },
    },
    {
      type: "calc",
      calc: {
        title: "Break-even bằng equation method (RBC)",
        steps: [
          { label: "Đặt Profit = 0 vào phương trình", expr: "0 = Unit CM × Q − Fixed = $200 × Q − $80,000" },
          { label: "Giải Q", expr: "$200 × Q = $80,000 → Q = $80,000 ÷ $200 = 400 đơn vị" },
          { label: "Theo dollar sales (dùng CM ratio)", expr: "0 = 0.40 × Sales − $80,000 → Sales = $80,000 ÷ 0.40 = $200,000" },
        ],
        result: "Break-even = 400 đơn vị / $200,000 — trùng khớp formula method",
        meaning:
          "Equation method chỉ là giải đại số phương trình Profit = Unit CM × Q − Fixed; formula method là bước rút gọn của chính nó.",
        implication:
          "Khi đề yêu cầu 'use the equation method', phải trình bày dòng đặt Profit = 0 rồi giải Q, không được nhảy thẳng công thức.",
      },
    },
    {
      type: "calc",
      calc: {
        title: "Target profit bằng equation method (RBC, target $100,000)",
        steps: [
          { label: "Đặt Profit = target", expr: "$100,000 = $200 × Q − $80,000" },
          { label: "Giải Q", expr: "$200 × Q = $100,000 + $80,000 = $180,000 → Q = 900 đơn vị" },
          { label: "Theo dollar sales", expr: "$100,000 = 0.40 × Sales − $80,000 → Sales = $180,000 ÷ 0.40 = $450,000" },
        ],
        result: "900 đơn vị / $450,000 để đạt lợi nhuận $100,000 — trùng khớp formula method",
        meaning:
          "Break-even chỉ là trường hợp đặc biệt target = $0; equation method dùng chung một phương trình cho cả hai.",
        implication:
          "Nhớ cộng fixed vào target ở vế phải trước khi chia Unit CM; bẫy hay gặp là chỉ chia target cho Unit CM.",
      },
    },
    {
      type: "comparison",
      table: {
        title: "Equation method vs Formula method",
        columns: ["", "Equation method", "Formula method"],
        rows: [
          { label: "Cách làm", cells: ["Giải phương trình Profit = Unit CM × Q − Fixed", "Thế thẳng vào công thức tắt Fixed ÷ Unit CM"] },
          { label: "Ưu điểm", cells: ["Minh bạch, thấy rõ gốc; đề có thể bắt buộc", "Nhanh, ít bước"] },
          { label: "Kết quả", cells: ["Luôn bằng nhau — hai con đường tới cùng một đích", "Luôn bằng nhau"] },
        ],
      },
    },
  ],
},
```

---

## B. Section `s4` — Bổ sung phương trình change-in-profit đầy đủ

Thêm 1 `formula` vào `blocks` của `s4` (sau formula CM ratio đã có). Sách p.199.

```ts
{ type: "formula", formula: { expression: "Change in profit = CM ratio × Change in sales − Change in fixed expenses", legend: [ { symbol: "ΔFixed = 0", meaning: "khi fixed không đổi → Δprofit = CM ratio × Δsales" } ], note: "Tổng quát hơn ΔCM = CM ratio × Δsales: cho phép fixed cũng thay đổi cùng lúc (sách p.199)." } },
```

---

## C. Quiz bổ sung `q18`–`q19`

Thêm vào CUỐI mảng `questions` (CVP hiện có tới q17). Test đích danh equation method.

```ts
{
  id: "q18",
  difficulty: "intermediate",
  conceptTested: "Break-even bằng equation method",
  stem: "RBC has Unit CM = $200 and fixed expenses = $80,000. Using the equation method (0 = Unit CM × Q − Fixed), the break-even quantity is:",
  options: [
    { id: "a", text: "400 units.", isCorrect: true, rationale: "Cơ chế: 0 = $200 × Q − $80,000 → Q = $80,000 ÷ $200 = 400. Bẫy: quên đặt Profit = 0. Khóa: equation method giải thẳng phương trình lợi nhuận." },
    { id: "b", text: "160 units.", isCorrect: false, rationale: "Cơ chế: chia fixed cho selling price $500 thay vì Unit CM. Bẫy: dùng nhầm mẫu số. Khóa: break-even chia cho Unit CM, không phải giá bán." },
    { id: "c", text: "267 units.", isCorrect: false, rationale: "Cơ chế: chia fixed cho variable cost $300. Bẫy: nhầm Unit CM với variable cost. Khóa: Unit CM = P − V = $200." },
    { id: "d", text: "800 units.", isCorrect: false, rationale: "Cơ chế: nhân đôi kết quả đúng. Bẫy: tính sai số học. Khóa: $80,000 ÷ $200 = 400." },
  ],
  takeaway: "Equation method: 0 = $200 × Q − $80,000 → Q = 400 đơn vị (bằng formula method).",
},
{
  id: "q19",
  difficulty: "intermediate",
  conceptTested: "Target profit bằng equation method",
  stem: "RBC (Unit CM $200, fixed $80,000) wants a target profit of $100,000. Using the equation method, how many units must be sold?",
  options: [
    { id: "a", text: "900 units.", isCorrect: true, rationale: "Cơ chế: $100,000 = $200 × Q − $80,000 → $200Q = $180,000 → Q = 900. Bẫy: quên cộng fixed vào target. Khóa: chuyển fixed sang vế phải trước khi chia Unit CM." },
    { id: "b", text: "500 units.", isCorrect: false, rationale: "Cơ chế: chỉ chia target $100,000 cho Unit CM, bỏ fixed. Bẫy: quên phủ fixed. Khóa: tử số là target + fixed." },
    { id: "c", text: "400 units.", isCorrect: false, rationale: "Cơ chế: 400 là break-even (target = 0). Bẫy: bỏ qua target profit. Khóa: target > 0 làm Q tăng trên break-even." },
    { id: "d", text: "1,300 units.", isCorrect: false, rationale: "Cơ chế: cộng nhầm hoặc chia sai. Bẫy: tính $180,000 ÷ $200 sai. Khóa: $180,000 ÷ $200 = 900." },
  ],
  takeaway: "Equation method: $100,000 = $200 × Q − $80,000 → Q = 900 đơn vị.",
},
```

---

## D. (Optional) knowledgeMap — thêm node equation method

Node `be` (LO5·6 Hòa vốn & mục tiêu) hiện trỏ s6. Có thể thêm 1 node con `b-eqn` "Equation method" (`group: "term"`, `parent: "be"`, `sectionId: "s7b"`) + edge `{ from: "be", to: "b-eqn" }`. Nếu thêm, giữ đúng schema node hiện có; nếu bỏ qua cũng không sao (không bắt buộc).

---

## E. Coverage matrix sau bổ sung (lưu vết Lớp B)

| Kiến thức sách Ch.5 | Web trước | Sau spec |
|---|---|---|
| CM, contribution income statement | s0, s1 | ✓ |
| Profit equation | s2 | ✓ |
| CVP/profit graph | s3 | ✓ |
| CM ratio + VE ratio | s4 | ✓ |
| **Change-in-profit = CM ratio × Δsales − Δfixed** | thiếu (chỉ ΔCM) | **s4 ✓** |
| 5 what-if examples | s5 | ✓ |
| Break-even **formula method** | s6 | ✓ |
| **Break-even equation method (unit + dollar)** | ❌ thiếu | **s7b ✓** |
| Target profit **formula method** | s7 | ✓ |
| **Target profit equation method** | ❌ thiếu | **s7b ✓** |
| Margin of safety | s8 | ✓ |
| Cost structure + operating leverage + DOL | s9 | ✓ |
| Sales mix + multiproduct BE + commission | s10 | ✓ |
| High-low + least-squares + scattergraph | s11 | ✓ |
| Glossary 10 term | rải rác | ✓ |

**Không đưa vào (có lý do):** ví dụ Acoustic Concepts của sách (số khác RBC) — web đã chọn RBC nhất quán toàn chương; đổi sang Acoustic sẽ là rewrite, không phải add. Concept giống hệt nên không thêm ví dụ trùng. DOL table "không hằng số" — web s9 đã nêu định tính "DOL giảm dần khi rời break-even".
