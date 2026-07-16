# Spec: MA Topic 2 (job-order-costing) — bổ sung cho ĐỦ sách Garrison Ch.2

> **Loại:** CHỈ THÊM keyTerm/block/section/quiz vào chapter `job-order-costing` trong `content/managerial.ts`. **KHÔNG rewrite** phần đã có; KHÔNG đụng chương/môn khác.
> **Executor: Codex.** File DUY NHẤT: `content/managerial.ts`.
> **Nguồn:** Garrison/Noreen/Brewer 17e, **Chapter 2** (book p.60–101, gồm Appendix 2A p.89–92 + Appendix 2B p.96–99). Mọi số VERIFIED + trích trang.
> **Ngôn ngữ:** diễn giải VI + giữ term EN. Quiz `stem`/`options` EN; `rationale` VI+EN (Cơ chế→Bẫy→Khóa), distractor đặt tên khái niệm.
> **Lý do:** LUẬT global SÁCH>slide (`workflow-soan-mon-moi.md` §0). Audit Lớp B đã đối chiếu trọn Ch.2 (Glossary 14 term + Exhibit 2-1…2-5 + Appendix 2A/2B + 2 Review Problem).
> **Đã ĐỦ (không cần đụng):** s0–s11 phủ job-order costing, trace/allocate, job cost sheet + chứng từ, POHR + Y=a+bX, normal costing, plantwide, chọn allocation base, departmental (Dickson Job 407 5-bước + markup 75% → $4.348,75), ABC intro, **Appendix 2A (s12 Maxtar — đã verify khớp sách 100%)**, under/overapplied, subsidiary ledger, service companies. Chỉ bổ sung phần dưới.
> **Style block:** calc = `{title, steps:[{label,expr}], result, meaning?, implication?}`; formula = `{expression, legend:[{symbol,meaning}], note}`; comparison = `{title, columns, rows:[{label,cells}]}`; callout = `{kind,title?,body}`. Bám shape THỰC tế trong managerial.ts.

---

## A. Term nền còn thiếu (thêm vào keyTerms section tương ứng)

### A1. Section `s0` — Absorption costing
Nối vào `keyTerms` của `s0`, và thêm 1 `callout` (kind `key`) vào `blocks` của `s0`:
```ts
// keyTerms:
{ term: "Absorption costing", definition: "Phương pháp tính giá thành gán TẤT CẢ chi phí sản xuất — direct materials, direct labor, và cả biến phí LẪN định phí manufacturing overhead — vào giá thành đơn vị sản phẩm ('fully absorb'). Chi phí ngoài sản xuất (selling & administrative) là period cost, không gán vào sản phẩm (sách p.61). Job-order costing là một dạng absorption costing." },
// callout:
{ type: "callout", callout: { kind: "key", title: "Job-order costing = một dạng absorption costing", body: "Absorption costing gán đủ DM + DL + toàn bộ MOH (fixed & variable) vào sản phẩm; chi phí ngoài sản xuất là period cost. Đa số nước (gồm Mỹ) buộc dùng absorption costing cho báo cáo tài chính bên ngoài (sách p.61)." } },
```

### A2. Section `s4` — Overhead application + Normal cost system (định nghĩa term)
Nối vào `keyTerms` của `s4` (nếu s4 chưa có mảng keyTerms thì tạo):
```ts
{ term: "Overhead application", definition: "Quá trình gán (áp) manufacturing overhead vào từng job bằng predetermined overhead rate (sách p.66)." },
{ term: "Normal cost system", definition: "Hệ thống áp overhead vào job = POHR × mức allocation base THỰC TẾ job đó dùng (DM, DL dùng số thực; MOH dùng số áp) (sách p.67)." },
```

### A3. Section `s7` — Cost-plus pricing (định nghĩa term; concept đã có trong calc)
Nối vào `keyTerms` của `s7`:
```ts
{ term: "Cost-plus pricing", definition: "Phương pháp định giá: lấy một cost base (vd total manufacturing cost) rồi cộng một markup phần trăm định trước để ra target selling price (sách p.71). Vd Dickson: $2.485 × 175% = $4.348,75." },
```

---

## B. Mục khái niệm còn thiếu

### B1. Section `s3` (hoặc `s4`) — The Need for a Predetermined Rate
Thêm 1 `callout` (kind `insight`) vào `blocks`:
```ts
{ type: "callout", callout: { kind: "insight", title: "Vì sao POHR ước tính TRƯỚC, không dùng actual rate?", body: "Hai lý do (sách p.69): (1) Nếu tính overhead rate theo THÁNG/QUÝ bằng số thực, chi phí theo mùa (điện sưởi/làm mát cao vào đông–hè) làm rate dao động → hai job giống hệt nhau, một làm mùa đông một làm mùa xuân, lại gánh overhead khác nhau. (2) Nếu tính theo NĂM bằng số thực thì phải chờ hết năm mới biết chi phí job — trong khi job xong và giao trong tháng 3. POHR ước tính trước khắc phục cả hai: rate ổn định + biết giá job ngay khi hoàn thành." } },
```

### B2. Section `s5` — Unit product cost là AVERAGE cost (optional nhưng nên có)
Thêm 1 `callout` (kind `trap`) vào `blocks` của `s5`:
```ts
{ type: "callout", callout: { kind: "trap", title: "Unit product cost là chi phí BÌNH QUÂN", body: "Unit product cost (total ÷ số đơn vị) là chi phí TRUNG BÌNH, KHÔNG phải chi phí tăng thêm khi làm thêm 1 đơn vị. Incremental cost của 1 đơn vị nữa thường THẤP hơn unit cost bình quân vì phần lớn overhead cố định không đổi khi thêm 1 đơn vị (sách p.69). Đừng dùng average unit cost cho quyết định 'làm thêm 1 đơn vị'." } },
```

---

## C. Appendix 2B — Predetermined Overhead Rate and Capacity (LO2-6) — MỚI HOÀN TOÀN

Thêm 1 **section mới** vào CUỐI mảng `sections` (sau `s11`). Tất cả số **VERIFIED sách p.96–99** (ví dụ Prahad Corporation).
```ts
{
  id: "s13",
  heading: "Appendix 2B — POHR và Capacity (chi phí công suất không dùng)",
  blocks: [
    { type: "prose", body: "Mẫu số của POHR có thể dựa trên (1) mức hoạt động ƯỚC TÍNH/dự toán cho kỳ (cách dùng trong chương, phục vụ báo cáo ngoài) hoặc (2) mức hoạt động ở CÔNG SUẤT — capacity (phục vụ quản trị nội bộ). Appendix giả định: toàn bộ MOH là fixed; fixed MOH dự toán = thực tế (sách p.96)." },
    { type: "comparison", table: {
      title: "Dữ liệu Prahad Corporation (sách p.97)",
      columns: ["Khoản mục", "Giá trị"],
      rows: [
        { label: "Total MOH (đều là fixed)", cells: ["$180,000/năm"] },
        { label: "Allocation base — machine time/DVD", cells: ["10 seconds/DVD"] },
        { label: "Capacity", cells: ["900,000 DVDs/năm"] },
        { label: "Budgeted output năm tới", cells: ["600,000 DVDs"] },
      ],
    } },
    { type: "calc", calc: {
      title: "Hai cách tính POHR",
      steps: [
        { label: "Cách 1 — theo mức ước tính (budgeted)", expr: "$180,000 ÷ (600,000 DVDs × 10s) = $0.03/second → $0.30/DVD" },
        { label: "Cách 2 — theo capacity", expr: "$180,000 ÷ (900,000 DVDs × 10s) = $0.02/second → $0.20/DVD" },
      ],
      result: "Rate theo capacity ($0.20/DVD) THẤP hơn và KHÔNG đổi khi budget dao động; rate theo budget ($0.30/DVD) tăng khi budget giảm.",
      meaning: "Mẫu số lớn hơn (capacity 900,000 vs budget 600,000) → rate nhỏ hơn.",
      implication: "Hạn chế của cách 1: (a) unit cost dao động theo budget — nếu budget rớt còn 300,000 DVDs thì rate thành $0.60/DVD, chi phí 'có vẻ' tăng đúng lúc cầu giảm → dễ tăng giá sai thời điểm; (b) sản phẩm gánh luôn chi phí công suất KHÔNG dùng.",
    } },
    { type: "formula", formula: {
      expression: "Cost of unused capacity = (Allocation base tại capacity − Allocation base THỰC dùng) × POHR theo capacity",
      legend: [
        { symbol: "Base tại capacity", meaning: "900,000 DVDs × 10s = 9,000,000 giây" },
        { symbol: "Base thực dùng", meaning: "600,000 DVDs × 10s = 6,000,000 giây" },
        { symbol: "POHR capacity", meaning: "$0.02/giây" },
      ],
      note: "Prahad: (9,000,000 − 6,000,000) × $0.02 = $60,000 (sách p.98).",
    } },
    { type: "comparison", table: {
      title: "Exhibit 2B-1 — Prahad Income Statement ghi nhận cost of unused capacity (sách p.99)",
      columns: ["Dòng", "Số tiền"],
      rows: [
        { label: "Sales (600,000 CD × $2)", cells: ["$1,200,000"] },
        { label: "Cost of goods sold (unit cost $1.80, gồm $0.20 MOH)", cells: ["1,080,000"] },
        { label: "= Gross margin", cells: ["120,000"] },
        { label: "Cost of unused capacity (PERIOD expense)", cells: ["60,000"] },
        { label: "Selling & administrative expenses", cells: ["90,000"] },
        { label: "= Net operating income (loss)", cells: ["$(30,000)"] },
      ],
    } },
    { type: "callout", callout: { kind: "key", title: "Chi phí công suất không dùng = period expense, KHÔNG chôn vào COGS", body: "Cách capacity tách $60,000 cost of unused capacity ra RIÊNG dưới gross margin (period expense), thay vì chôn vào COGS như cách absorption. Nhờ hiện rõ, nhà quản lý buộc phải xử lý công suất dư: tìm thêm việc để lấp, hoặc cắt bớt công suất (sách p.99)." } },
  ],
  keyTerms: [
    { term: "Predetermined overhead rate based on capacity", definition: "POHR lấy mẫu số là allocation base ở mức CÔNG SUẤT (capacity) thay vì mức ước tính — rate ổn định, không dao động theo budget (sách p.97-98)." },
    { term: "Cost of unused capacity", definition: "Chi phí công suất KHÔNG được dùng = (base tại capacity − base thực dùng) × POHR theo capacity; báo cáo như PERIOD expense riêng, không gộp vào COGS (sách p.98-99)." },
  ],
},
```

---

## D. Quiz bổ sung (nối vào `questions`) — stem/options EN, rationale VI+EN

- **q19 — Absorption costing** (basic): *"Under absorption costing, which costs are assigned to units of product?"* → đúng: **"All manufacturing costs — direct materials, direct labor, and both variable and fixed manufacturing overhead."**; distractor: "Only variable manufacturing costs" (đó là variable costing), "Only direct materials and direct labor" (bỏ MOH), "All manufacturing costs plus selling & administrative" (S&A là period).
- **q20 — Need for predetermined rate** (intermediate): *"Why do most companies use a predetermined overhead rate rather than an actual overhead rate?"* → đúng: **"To avoid seasonal fluctuations in the rate and to know each job's cost as soon as it is completed."**; distractor: "Because actual overhead is always lower" (sai), "Because it is required by GAAP" (không), "To make direct labor a variable cost" (không liên quan).
- **q21 — Cost of unused capacity** (advanced): *"A company's capacity is 9,000,000 machine-seconds but it actually used 6,000,000 seconds. If the capacity-based predetermined overhead rate is $0.02 per second, the cost of unused capacity reported as a period expense is:"* → đúng: **"$60,000 (= (9,000,000 − 6,000,000) × $0.02)."**; distractor: "$120,000", "$180,000 (toàn bộ MOH)", "$0 (vì overhead đã áp hết)".

> Rationale theo style câu sẵn có; `conceptTested` đặt tên khái niệm; `takeaway` 1 câu.

---

## E. Verify (Claude chạy sau khi Codex xong)
- `npx tsc --noEmit` → PASS.
- Render `/managerial-accounting/job-order-costing` ở 375/768/1440: block mới (calc/formula/comparison/callout + section s13) hiện đúng, không hscroll, 0 error.
- Đối chiếu lại: absorption costing / overhead application / normal cost system / cost-plus pricing (term) + s13 Appendix 2B + q19–q21 đã xuất hiện.
- Số khớp: POHR budget $0.30/DVD vs capacity $0.20/DVD; cost of unused capacity $60,000; net operating loss $(30,000).

## F. Coverage matrix (Lớp B — durable)
| Mục sách Ch.2 | Trang | Trạng thái trước | Xử lý |
|---|---|---|---|
| Absorption costing (term) | 61 | Thiếu | A1 |
| Overhead application (term) | 66 | Thiếu | A2 |
| Normal cost system (term) | 67 | Concept có, term thiếu | A2 |
| Cost-plus pricing (term) | 71 | Concept có, term thiếu | A3 |
| The Need for a Predetermined Rate | 69 | Thiếu | B1 |
| Unit product cost = average | 69 | Thiếu | B2 |
| Appendix 2B — capacity POHR | 96-98 | Thiếu | C (s13) |
| Cost of unused capacity + Exhibit 2B-1 | 98-99 | Thiếu | C (s13) |
| Appendix 2A (Maxtar) | 89-92 | **Đã có (s12), verify khớp sách** | — |
| Bill of materials / mat. requisition / job cost sheet / time ticket | 63-64 | Đã có (s2) | — |
| POHR + Y=a+bX + 4 bước | 66 | Đã có (s3) | — |
| Plantwide vs departmental (Dickson 5-bước) | 70-73 | Đã có (s6,s7) | — |
| Multiple POHR / ABC intro | 71-73 | Đã có (s7,s8) | — |
| Under/overapplied (intro) | 74 | Đã có (s9) | — |
| Subsidiary ledger (Dixon) | 74 | Đã có (s10) | — |
| Service companies | 75 | Đã có (s11) | — |
| Glossary 14 term | 77 | Phần lớn đã có; bổ sung A1-A3 | — |
