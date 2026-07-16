# Spec: MA Topic 1 (cost-concepts) — bổ sung cho ĐỦ sách Garrison Ch.1

> **Loại:** CHỈ THÊM khối/keyTerm/quiz vào chapter `cost-concepts` trong `content/managerial.ts`. **KHÔNG rewrite** section/bigIdea/knowledgeMap đã có; KHÔNG đụng chương khác; KHÔNG sửa môn khác.
> **Executor: Codex.** File DUY NHẤT: `content/managerial.ts`.
> **Nguồn:** Garrison/Noreen/Brewer, *Managerial Accounting* 17e, **Chapter 1** (book p.27–46). Mọi số dưới đây **VERIFIED** từ sách (trích trang). Diễn giải tiếng Việt + giữ term tiếng Anh (đúng style MA sẵn có). Quiz `stem`/`options` = tiếng Anh; `rationale` = VI+EN theo khung **Cơ chế → Bẫy → Khóa** (đặt tên distractor theo khái niệm, không A/B/C/D).
> **Lý do:** LUẬT global SÁCH>slide (`docs/specs/workflow-soan-mon-moi.md` §0) — kiến thức sách không có trên slide PHẢI thêm; đề thi ra từ sách. Audit Lớp B đã đối chiếu trọn Ch.1 (Glossary 39 term + 7 Exhibit + 2 Review Problem).
> **Cách chèn:** giữ nguyên style block hiện có (`type:"prose"/"comparison"/"formula"/"calc"/"callout"/"diagram"`, `keyTerms`, `examples`). Thêm keyTerm = nối vào mảng `keyTerms` của section tương ứng. Thêm block = nối vào `blocks`. Thêm quiz = nối vào `questions`.

---

## A. NHÓM 1 — Glossary term còn thiếu

### A1. Section `s11` (LO5 decision) — thêm keyTerms
Nối vào `keyTerms` của `s11`:
```ts
{ term: "Incremental cost", definition: "Phần chi phí TĂNG THÊM giữa hai phương án (sách p.39). 'Differential cost' là từ bao trùm; incremental = phần tăng, decremental = phần giảm." },
{ term: "Decremental cost", definition: "Phần chi phí GIẢM ĐI giữa hai phương án (sách p.39) — mặt còn lại của incremental cost." },
{ term: "Relevant benefit", definition: "Lợi ích tương lai KHÁC NHAU giữa các phương án — cần cân nhắc khi ra quyết định (sách p.39). Differential revenue là một ví dụ của relevant benefit." },
```
Và thêm 1 `callout` (kind `insight`) vào `blocks` của `s11`:
```ts
{ type: "callout", callout: { kind: "insight", title: "Differential = incremental + decremental", body: "Về kỹ thuật, incremental cost chỉ phần chi phí TĂNG, decremental cost chỉ phần GIẢM. 'Differential cost' là thuật ngữ rộng gồm cả hai. Nhà kinh tế học gọi song song là marginal cost / marginal revenue (chi phí/doanh thu của MỘT đơn vị tăng thêm) — cùng bản chất differential áp cho 1 đơn vị." } },
```

### A2. Section `s5` (LO3 product vs period) — thêm term Inventoriable + Matching
Nối vào `keyTerms` của `s5`:
```ts
{ term: "Inventoriable costs", definition: "Từ ĐỒNG NGHĨA của product cost (sách p.31) — vì ban đầu chi phí này 'nằm' trong hàng tồn kho (inventory) rồi mới thành COGS khi bán." },
{ term: "Matching principle", definition: "Dựa trên accrual concept: chi phí tạo ra một khoản doanh thu phải được ghi nhận CÙNG KỲ với doanh thu đó (sách p.30-31). Là nền để phân biệt product cost (ghi khi bán) vs period cost (ghi ngay trong kỳ)." },
```
Thêm 1 `callout` (kind `key`) vào `blocks` của `s5`:
```ts
{ type: "callout", callout: { kind: "key", title: "Vì sao product ≠ period: matching principle", body: "Theo matching principle (accrual), chi phí phải khớp kỳ với doanh thu nó tạo ra. Product cost gắn với sản phẩm nên 'chờ' trong tồn kho tới khi sản phẩm được BÁN mới thành chi phí (COGS). Period cost (selling & administrative) không tạo ra một doanh thu cụ thể nào → ghi thẳng vào kỳ phát sinh." } },
```

### A3. Section `s7` hoặc `s8` (cost behavior) — thêm term Cost structure
Nối vào `keyTerms` của `s7`:
```ts
{ term: "Cost structure", definition: "Tỷ trọng TƯƠNG ĐỐI của các loại chi phí fixed / variable / mixed trong một tổ chức (sách p.33). Vd doanh nghiệp nhiều fixed cost thì cost structure khác với doanh nghiệp nhiều variable cost — ảnh hưởng mức nhạy của lợi nhuận (nền cho operating leverage ở Ch.5)." },
```

---

## B. NHÓM 2 — khái niệm sách nhắc trong thân bài

### B1. Section `s4` (Nonmanufacturing) — SG&A + order-getting/filling
Nối vào `keyTerms` của `s4` (nếu chưa có mảng keyTerms thì tạo):
```ts
{ term: "SG&A", definition: "Selling, General & Administrative — cách gọi gộp nonmanufacturing costs (selling + administrative) (sách p.30)." },
{ term: "Order-getting / order-filling costs", definition: "Hai nhóm của selling cost: order-getting = chi phí để CÓ đơn (quảng cáo, sales); order-filling = chi phí để GIAO hàng tới khách (vận chuyển, kho thành phẩm) (sách p.30)." },
```

### B2. Section `s9` (Relevant range/step) — step-variable cost
Nối vào `keyTerms` của `s9`:
```ts
{ term: "Step-variable cost", definition: "Chi phí nhảy BẬC theo những khoảng hoạt động HẸP (vd lương công nhân theo ca, guide du lịch: 1 guide cho mỗi 5 khách) (sách p.36). Bậc hẹp → thực tế coi gần như variable. Khác step-fixed (bậc RỘNG như thuê thêm nhà xưởng → coi là fixed trong relevant range)." },
```
Thêm 1 `callout` (kind `trap`) vào `blocks` của `s9`:
```ts
{ type: "callout", callout: { kind: "trap", title: "Step-variable ≠ step-fixed", body: "Cả hai đều nhảy bậc, nhưng BỀ RỘNG bậc quyết định cách xử lý: step-variable (bậc hẹp, vd nhân công thời vụ) → coi như variable; step-fixed (bậc rộng, vd mỗi 1.000 sq ft thuê +$30.000/năm, hay máy Mayo Clinic $20.000 mỗi 3.000 test) → coi như fixed trong relevant range." } },
```

### B3. Section `s11` — controllable/uncontrollable + value-added/non-value-added
Thêm 1 block `comparison` vào `blocks` của `s11`:
```ts
{ type: "comparison", table: {
  title: "Hai cách phân loại chi phí khác cho quản trị (sách p.40)",
  columns: ["Cặp phân loại", "Nghĩa", "Dùng để"],
  rows: [
    { label: "Controllable / Uncontrollable", cells: ["Controllable = nhà quản lý ĐANG bị đánh giá có thể tác động; Uncontrollable = không thể tác động", "Đánh giá thành quả quản lý (performance evaluation)"] },
    { label: "Value-added / Non-value-added", cells: ["Value-added = làm tăng giá trị cho stakeholder; Non-value-added = không tạo thêm lợi ích", "Cải tiến quy trình (process improvement)"] },
  ],
} },
```
Nối vào `keyTerms` của `s11`:
```ts
{ term: "Controllable cost", definition: "Chi phí mà nhà quản lý đang được đánh giá CÓ THỂ tác động; ngược lại là uncontrollable cost (sách p.40)." },
{ term: "Value-added cost", definition: "Chi phí làm TĂNG giá trị sản phẩm/dịch vụ cho stakeholder; ngược lại là non-value-added cost (sách p.40)." },
{ term: "Marginal cost / Marginal revenue", definition: "Thuật ngữ kinh tế học: chi phí/doanh thu của MỘT đơn vị sản phẩm tăng thêm (sách p.39) — bản chất là differential cost/revenue áp cho một đơn vị output." },
```

---

## C. NHÓM 3 — graph/model/bảng kế toán tính toán

### C1. NEW SECTION `s10b` — "Cost Terminology — A Closer Look" (chèn NGAY SAU `s10`, TRƯỚC `s11`)
Bảng tổng hợp mọi cost term trên cùng một bộ số (sách p.38). Tất cả số **VERIFIED p.38**.
```ts
{
  id: "s10b",
  heading: "Tổng hợp: Cost Terminology — A Closer Look",
  blocks: [
    { type: "prose", body: "Một công ty báo cáo chi phí tháng gần nhất như bên dưới. Cùng bộ số này có thể được gom theo NHIỀU cách phân loại khác nhau — minh hoạ 'different costs for different purposes' (sách p.38)." },
    { type: "comparison", table: {
      title: "Chi phí trong tháng (sách p.38)",
      columns: ["Khoản mục", "Số tiền"],
      rows: [
        { label: "Direct materials", cells: ["$69,000"] },
        { label: "Direct labor", cells: ["$35,000"] },
        { label: "Variable manufacturing overhead", cells: ["$15,000"] },
        { label: "Fixed manufacturing overhead", cells: ["$28,000"] },
        { label: "Total manufacturing overhead", cells: ["$43,000"] },
        { label: "Variable selling expense", cells: ["$12,000"] },
        { label: "Fixed selling expense", cells: ["$18,000"] },
        { label: "Total selling expense", cells: ["$30,000"] },
        { label: "Variable administrative expense", cells: ["$4,000"] },
        { label: "Fixed administrative expense", cells: ["$25,000"] },
        { label: "Total administrative expense", cells: ["$29,000"] },
      ],
    } },
    { type: "calc", calc: {
      title: "Gom theo 6 cách phân loại",
      steps: [
        { label: "Product cost", expression: "DM + DL + MOH = 69,000 + 35,000 + 43,000", result: "$147,000" },
        { label: "Period cost", expression: "Selling + Administrative = 30,000 + 29,000", result: "$59,000" },
        { label: "Conversion cost", expression: "DL + MOH = 35,000 + 43,000", result: "$78,000" },
        { label: "Prime cost", expression: "DM + DL = 69,000 + 35,000", result: "$104,000" },
        { label: "Variable manufacturing cost", expression: "DM + DL + variable MOH = 69,000 + 35,000 + 15,000", result: "$119,000" },
        { label: "Total fixed cost", expression: "fixed MOH + fixed selling + fixed admin = 28,000 + 18,000 + 25,000", result: "$71,000" },
      ],
    } },
    { type: "callout", callout: { kind: "key", title: "Một bộ số — nhiều lăng kính", body: "Cùng DM/DL/MOH/selling/admin, tùy MỤC ĐÍCH mà gom thành product, period, conversion, prime, variable-mfg hay total-fixed. Đây là bài tổng hợp toàn chương." } },
  ],
},
```
> **Lưu ý kỹ thuật:** nếu helper `calc` trong MA yêu cầu shape khác (kiểm tra 1 block `type:"calc"` sẵn có trong `managerial.ts`, vd chương CVP), Codex chỉnh cho khớp shape thực tế; giữ nguyên 6 dòng số trên.

### C2. Section `s11` — bảng differential Natural Cosmetics (sách p.39)
Thêm 1 block `comparison` vào `blocks` của `s11` (số **VERIFIED p.39**):
```ts
{ type: "comparison", table: {
  title: "Ví dụ differential analysis — Natural Cosmetics (sách p.39)",
  columns: ["Khoản mục", "Retailer (hiện tại)", "Sales Rep (đề xuất)", "Differential"],
  rows: [
    { label: "Sales (variable)", cells: ["$700,000", "$800,000", "$100,000"] },
    { label: "Cost of goods sold (variable)", cells: ["350,000", "400,000", "50,000"] },
    { label: "Advertising (fixed)", cells: ["80,000", "45,000", "(35,000)"] },
    { label: "Commissions (variable)", cells: ["0", "40,000", "40,000"] },
    { label: "Warehouse depreciation (fixed)", cells: ["50,000", "80,000", "30,000"] },
    { label: "Other expenses (fixed)", cells: ["60,000", "60,000", "0"] },
    { label: "Total expenses", cells: ["540,000", "625,000", "85,000"] },
    { label: "Net operating income", cells: ["$160,000", "$175,000", "$15,000"] },
  ],
} },
```
Kèm 1 `callout` (kind `insight`):
```ts
{ type: "callout", callout: { kind: "insight", title: "Chỉ nhìn cột Differential", body: "Differential revenue = $100,000, differential cost = $85,000 → chênh net operating income +$15,000 nghiêng về Sales Rep. 'Other expenses' $60,000 giống nhau ở hai phương án → irrelevant, bỏ đi vẫn ra cùng kết luận (sách p.39-40)." } },
```

### C3. Section `s12` (Traditional vs Contribution) — công thức COGS merchandiser + CM/đơn vị
Thêm 1 block `formula` vào `blocks` của `s12` (số **VERIFIED p.42**):
```ts
{ type: "formula", formula: {
  expression: "COGS = Beginning merchandise inventory + Purchases − Ending merchandise inventory",
  legend: [
    { symbol: "Beginning", meaning: "Tồn kho hàng hoá đầu kỳ" },
    { symbol: "Purchases", meaning: "Mua thêm trong kỳ" },
    { symbol: "Ending", meaning: "Tồn kho hàng hoá cuối kỳ" },
  ],
  note: "Ví dụ sách p.42: 7,000 + 3,000 − 4,000 = 6,000. Áp cho MERCHANDISER (mua đi bán lại). Với nhà sản xuất, COGS phức tạp hơn (đưa vào chương sau).",
} },
```
Nối vào `keyTerms` của `s12`:
```ts
{ term: "Contribution margin per unit", definition: "Contribution margin chia cho số đơn vị bán ra (sách p.42, vd $5,000 ÷ 500 = $10/đơn vị) — phần mỗi đơn vị đóng góp để bù fixed cost rồi tạo lãi; nền cho CVP (Ch.5)." },
```

### C4. Section `s6` (cost flow) — thêm nhánh period cost (Exhibit 1-2 đầy đủ)
Trong `diagram` của `s6`, thêm 2 node + 2 edge để phản ánh ĐÚNG Exhibit 1-2 (product cost qua tồn kho, period cost đi thẳng vào Income Statement):
- Thêm node: `{ id: "SA", label: "Selling & Administrative", group: "term", detail: "Period cost — KHÔNG qua tồn kho.", sectionId: "s6" }`
- Thêm node: `{ id: "IS", label: "Income Statement", group: "concept", detail: "COGS (product, khi bán) và S&A expense (period, ngay trong kỳ) cùng xuất hiện ở đây.", sectionId: "s6" }`
- Thêm edge: `{ from: "COGS", to: "IS" }` và `{ from: "SA", to: "IS", label: "period" }`
> Giữ layout `horizontal`; nếu graph chật, để `caption` giải thích thay vì nhồi. Nếu Codex thấy dễ vỡ, đánh dấu phần này **optional** và ưu tiên C1–C3.

### C5. (Optional) Section `s0` — bảng Exhibit 1-1 "Summary of Cost Classifications"
knowledgeMap đã phủ 5 mục đích; nếu muốn có bảng chủ giống sách, thêm 1 `comparison` vào `s0` (sách p.27, Exhibit 1-1):
```ts
{ type: "comparison", table: {
  title: "Exhibit 1-1 — Summary of Cost Classifications (sách p.27)",
  columns: ["Mục đích phân loại", "Các loại chi phí"],
  rows: [
    { label: "Assigning costs to cost objects", cells: ["Direct cost / Indirect cost"] },
    { label: "Accounting for costs (manufacturing)", cells: ["Manufacturing: DM, DL, MOH / Nonmanufacturing: selling, administrative"] },
    { label: "Preparing financial statements", cells: ["Product cost (inventoriable) / Period cost (expensed)"] },
    { label: "Predicting cost behavior", cells: ["Variable / Fixed / Mixed"] },
    { label: "Making decisions", cells: ["Relevant (differential) / Irrelevant"] },
  ],
} },
```

---

## D. Quiz bổ sung (nối vào `questions`) — stem/options EN, rationale VI+EN (Cơ chế→Bẫy→Khóa)

Thêm các câu sau (id nối tiếp `q14`…). Đáp án đúng đánh dấu; distractor đặt tên theo khái niệm.

- **q14 — Incremental vs differential** (basic/intermediate): *"A company is choosing between Plan A and Plan B. A cost that is $12,000 higher under Plan B than under Plan A is best described as a(n):"* → đúng: **"Incremental (differential) cost — relevant to the decision."**; distractor: "Sunk cost" (đã phát sinh, sai), "Common cost" (khả năng truy nguyên, sai phạm trù), "Opportunity cost" (lợi ích bỏ lỡ, khác).
- **q15 — Cost structure** (basic): *"The relative proportion of fixed, variable, and mixed costs in an organization is called its:"* → đúng: **"Cost structure."**; distractor: "Cost object", "Relevant range", "Contribution margin".
- **q16 — Controllable cost** (intermediate): *"For evaluating a department manager's performance, a cost the manager can influence is classified as:"* → đúng: **"Controllable cost."**; distractor: "Uncontrollable cost", "Sunk cost", "Period cost".
- **q17 — Value-added** (basic): *"A cost incurred for an activity that increases the value of a product to customers is a(n):"* → đúng: **"Value-added cost."**; distractor: "Non-value-added cost", "Opportunity cost", "Conversion cost".
- **q18 — Merchandiser COGS** (intermediate): *"A merchandiser had beginning inventory $7,000, purchases $3,000, and ending inventory $4,000. Cost of goods sold is:"* → đúng: **"$6,000 (= 7,000 + 3,000 − 4,000)."**; distractor: "$10,000 (7,000 + 3,000)" (quên trừ ending), "$14,000" (cộng hết), "$4,000" (chỉ ending).

> Rationale viết theo style câu q1–q13 hiện có. `conceptTested` đặt tên khái niệm; `takeaway` 1 câu.

---

## E. Verify (sau khi Codex xong — Claude chạy)
- `npx tsc --noEmit` → PASS (Codex chạy trước).
- (Claude) render `/managerial-accounting/cost-concepts` ở 375/768/1440: các block mới (comparison/calc/formula/callout) hiện đúng, không hscroll, không pageerror; graph s6 (nếu thêm nhánh period) không đè nhãn.
- (Claude) đối chiếu lại: 4 glossary term + nhóm 2 + 3 bảng/công thức nhóm 3 đã xuất hiện.
- Số khớp: Product 147k / Period 59k / Conversion 78k / Prime 104k / Variable-mfg 119k / Total-fixed 71k; Natural Cosmetics NOI diff +15k; COGS 6k.

## F. Coverage matrix (Lớp B — lưu cố định)
| Mục sách Ch.1 | Trang | Trạng thái trước | Xử lý |
|---|---|---|---|
| Incremental/decremental cost | 39 | Thiếu | A1 |
| Relevant benefit | 39 | Thiếu | A1 |
| Inventoriable costs (term) | 31 | Thiếu | A2 |
| Matching principle / accrual | 30-31 | Thiếu | A2 |
| Cost structure | 33 | Thiếu | A3 |
| SG&A; order-getting/filling | 30 | Thiếu | B1 |
| Step-variable cost | 36 | Thiếu | B2 |
| Controllable/uncontrollable | 40 | Thiếu | B3 |
| Value-added/non-value-added | 40 | Thiếu | B3 |
| Marginal cost/revenue | 39 | Thiếu | B3 |
| Cost Terminology closer-look (bảng tính) | 38 | Thiếu | C1 |
| Natural Cosmetics differential (bảng) | 39 | Thiếu | C2 |
| COGS merchandiser (công thức) | 42 | Thiếu | C3 |
| Contribution margin/đơn vị | 42 | Thiếu | C3 |
| Exhibit 1-2 nhánh period | 32 | Một phần | C4 (optional) |
| Exhibit 1-1 bảng chủ | 27 | knowledgeMap phủ | C5 (optional) |
| Glossary term còn lại (35) | — | Đã có | — |
| Exhibit 1-3/1-4/1-5/1-6/1-7 | — | Đã có concept | — |
