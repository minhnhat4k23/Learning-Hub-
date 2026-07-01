# Spec: Manufacturing Topic 08 — Production Costs Management & Control

> **Loại:** Soạn mới topic hoàn chỉnh (rich teaching mode), thay placeholder `topic-08`. Đây là chương CUỐI môn Manufacturing.
> **File cần sửa:** `content/manufacturing.ts` (helper đã có sẵn).
> **Nguồn (KHỚP MỘT PHẦN):**
> - **Slide `Chapter 8 Costs Management.pdf`** (lecturer Đặng Võ Hùng, 54 slide) = CỐT LÕI exam-facing: control system (4 elements), production & labour control, unit cost computing + overhead allocation, **weighted method**, **ratio method**, **WIP cost computing (3 cách)** — kèm worked examples (VND).
> - **Ebook Groover §3.2 "Manufacturing Costs"** (p.59–63) = nền phân loại chi phí: fixed/variable (TC = Cf + Cv×Q), direct labour/material/overhead (factory vs corporate), cơ sở phân bổ overhead. Phần này KHỚP với slide 8.2 → dùng sách + slide.
> - **Luật nguồn:** control loop + weighted/ratio method + WIP costing (8.1, 8.3, 8.4) là **slide-only** (Groover không có → chỉ dùng slide). Cost classification (8.2 + Groover §3.2) dùng cả hai. **KHÔNG có phần "kiến thức thêm" để mark** — toàn bộ là core.
> - **Bằng chứng neo lens (Claude chịu trách nhiệm đúng hướng — người học sắp học):**
>   - Compass "quản chi phí = vòng kiểm soát" ← tiêu đề slide "Production Costs Management & **CONTROL**" + slide 8.1 dựng control loop 4 bước (detailed planning → actual performance → comparison → adjustment).
>   - "phải tính đúng unit cost mới kiểm soát/định giá được" ← slide 8.2–8.4 toàn bộ là cách TÍNH giá thành + định giá.
> **Quy ước:** diễn giải VI + term EN; quiz `stem`/`options` EN, `rationale`/`takeaway` VI (Cơ chế→Bẫy→Khóa); quiz **5 options A–E**; notation `× ÷ − ^ ( )`; số tiền giữ dấu phẩy ngăn nghìn như slide (vd 28,980,000).
> **bigIdea format:** compass (1 câu) + `bigIdeaPillars` (4 trụ).
> **Verify:** `npx tsc --noEmit` pass; render-check; KHÔNG commit.

---

## 0. Wiring (BẮT BUỘC làm trước)

Helper đã có sẵn. Chương nặng tính toán → dùng `formulaBlock` + **nhiều** `calcBlock`.

1. Tạo `const topic08: Chapter = { ... }` (đặt ngay sau `topic07`).
2. Sửa assembly: thêm `if (order === 8) return topic08;`.

**Renderer contract:** `comparisonBlock` `columns.length === rows[i].cells.length + 1`; flow `edges.from/to` trỏ node có thật cùng block; node id `_`; flow layout chỉ `horizontal`/`tree` (tree set `parent`); edge label NGẮN.

---

## 1. Khung Chapter

```ts
const topic08: Chapter = {
  slug: "topic-08",
  order: 8,
  title: "Topic 08 — Production Costs Management & Control",
  bigIdea:
    "Quản chi phí sản xuất = một VÒNG KIỂM SOÁT (kế hoạch → thực tế → so sánh → điều chỉnh); muốn kiểm soát được thì phải TÍNH ĐÚNG giá thành mỗi đơn vị — gồm direct cost, overhead phân bổ, và cả phần dở dang (WIP).",
  bigIdeaPillars: [
    { label: "Vòng kiểm soát", body: "4 elements: detailed planning → actual performance → comparison → adjustment; yêu cầu simple/effective/flexible + data đúng & cập nhật." },
    { label: "Tính unit cost", body: "Direct material (từ BOM) + direct labour + overhead phân bổ (theo labour cost / working hours / machine hours). Nền phân loại: Groover §3.2." },
    { label: "Định giá đơn vị", body: "Weighted method (cùng nhóm → quy về standard item) vs ratio method (khác nhóm → actual ÷ planning)." },
    { label: "Định giá WIP", body: "3 cách: materials-only / percentage of completion (equivalent units) / theo stage." },
  ],
  learningObjectives: [
    "Giải thích cost control như một vòng kiểm soát 4 bước (detailed operation planning → actual performance → comparison → adjustment) và nêu yêu cầu của control process.",
    "Nêu các khía cạnh của production & labour control (lợi ích/sự cần thiết, triển khai, đào tạo, đánh giá + đãi ngộ) và các nguyên nhân khiến control thất bại.",
    "Phân loại chi phí sản xuất theo Groover §3.2: fixed vs variable (TC = Cf + Cv×Q); direct labour, material, overhead (factory vs corporate).",
    "Tính unit cost gồm direct cost (materials từ BOM + labour) và overhead phân bổ theo cơ sở hợp lý (working hours, machine hours, labour cost).",
    "Áp dụng weighted method (equivalent exchange) để định giá các item cùng nhóm.",
    "Áp dụng ratio method (actual ÷ planning) để định giá các item khác nhóm.",
    "Tính giá trị WIP và giá thành item theo 3 cách: materials consideration, percentage of completion, và actual stages consideration.",
  ],
  knowledgeMap: { /* xem mục 2 */ },
  sections: [ /* s1..s9 */ ],
  questions: [ /* q01..q12 (5 options A–E) */ ],
  status: "ready",
  source:
    "Manufacturing Systems — slide 'Chapter 8 Costs Management' (lecturer Đặng Võ Hùng, 54 slide) cho control system + production/labour control + weighted method + ratio method + WIP cost computing (3 cách) với worked examples + ebook Groover, Automation, Production Systems & CIM 4e, §3.2 'Manufacturing Costs' (p.59–63) cho phân loại chi phí (fixed/variable, direct labour/material/overhead, phân bổ overhead).",
};
```

---

## 2. knowledgeMap (cây 3 tầng — 4 nhóm)

`engine: "flow"`, `layout: "tree"`, `collapsible: true`.

```ts
knowledgeMap: {
  engine: "flow",
  layout: "tree",
  collapsible: true,
  caption:
    "Quản chi phí = vòng kiểm soát + tính đúng giá thành: (A) vòng kiểm soát, (B) tính unit cost, (C) định giá đơn vị, (D) định giá WIP. Bấm node để mở chi tiết.",
  nodes: [
    { id: "cost", label: "Costs Management & Control", group: "concept", sectionId: "s1",
      detail: "Vòng kiểm soát chi phí + cách tính giá thành đơn vị (kể cả WIP)." },

    { id: "g_ctrl", label: "A. Vòng kiểm soát", group: "concept", parent: "cost", sectionId: "s1",
      detail: "Control loop 4 bước + production/labour control." },
    { id: "g_unit", label: "B. Tính unit cost", group: "concept", parent: "cost", sectionId: "s3",
      detail: "Phân loại chi phí + overhead allocation." },
    { id: "g_price", label: "C. Định giá đơn vị", group: "concept", parent: "cost", sectionId: "s5",
      detail: "Weighted method vs ratio method." },
    { id: "g_wip", label: "D. Định giá WIP", group: "concept", parent: "cost", sectionId: "s7",
      detail: "3 cách tính giá trị dở dang." },

    // A
    { id: "t_loop", label: "Control loop 4 bước", group: "term", parent: "g_ctrl", sectionId: "s1",
      detail: "Planning → actual → comparison → adjustment." },
    { id: "t_ctrl", label: "Production & labour control", group: "term", parent: "g_ctrl", sectionId: "s2",
      detail: "Lợi ích, triển khai, đào tạo, đánh giá; nguyên nhân thất bại." },

    // B
    { id: "t_classify", label: "Phân loại chi phí (Groover §3.2)", group: "term", parent: "g_unit", sectionId: "s3",
      detail: "Fixed/variable (TC=Cf+Cv×Q); direct labour/material/overhead." },
    { id: "t_overhead", label: "Overhead allocation", group: "term", parent: "g_unit", sectionId: "s4",
      detail: "Phân bổ theo working hours / machine hours / labour cost." },

    // C
    { id: "t_weighted", label: "Weighted method", group: "term", parent: "g_price", sectionId: "s5",
      detail: "Cùng nhóm → quy về standard item (equivalent exchange)." },
    { id: "t_ratio", label: "Ratio method", group: "term", parent: "g_price", sectionId: "s6",
      detail: "Khác nhóm → actual ÷ planning." },

    // D
    { id: "t_wip_mat", label: "WIP — materials consideration", group: "term", parent: "g_wip", sectionId: "s7",
      detail: "WIP gánh materials; labour/overhead dồn cho items." },
    { id: "t_wip_pct", label: "WIP — percentage of completion", group: "term", parent: "g_wip", sectionId: "s8",
      detail: "Quy WIP về equivalent units; materials 100%, labour/oh theo % hoàn thành." },
    { id: "t_wip_stage", label: "WIP — actual stages", group: "term", parent: "g_wip", sectionId: "s9",
      detail: "WIP theo từng stage, chuyển cost stage trước sang sau." },
  ],
  edges: [
    { from: "cost", to: "g_ctrl" }, { from: "cost", to: "g_unit" }, { from: "cost", to: "g_price" }, { from: "cost", to: "g_wip" },
    { from: "g_ctrl", to: "t_loop" }, { from: "g_ctrl", to: "t_ctrl" },
    { from: "g_unit", to: "t_classify" }, { from: "g_unit", to: "t_overhead" },
    { from: "g_price", to: "t_weighted" }, { from: "g_price", to: "t_ratio" },
    { from: "g_wip", to: "t_wip_mat" }, { from: "g_wip", to: "t_wip_pct" }, { from: "g_wip", to: "t_wip_stage" },
  ],
},
```

---

## 3. Bối cảnh số liệu / worked examples (VERIFIED — hard theory, trích slide)

| # | Method | Dữ kiện | Kết quả | Nguồn |
|---|---|---|---|---|
| 1 | Overhead allocation | Overhead = $20,000; A = 400h, B = 600h (tổng 1,000h) | A = (400÷1,000)×20,000 = **$8,000**; B = **$12,000** | slide 18/54 |
| 2 | Weighted method | Total cost 28,980,000 VN; output A=2,000 (w1.0), B=1,500 (w1.2), C=1,000 (w1.5), D=2,000 (w0.8) → 6,900 standard units | Đơn giá standard = 28,980,000 ÷ 6,900 = **4,200 VN**; B=5,040; C=6,300; D=3,360 | slide 20–24/54 |
| 3 | Ratio method | Actual 8,640,000 VN; planning 9,000,000 VN | Ratio = 8,640,000 ÷ 9,000,000 = **96%**; A=2,250×96%=2,160; B=4,320; C=1,440 | slide 26–30/54 |
| 4 | WIP — materials | Total 7,400,000 (mat 5,000,000, lab 1,600,000, oh 800,000); 1,600 items + 400 WIP | Mat/unit = 5,000,000 ÷ (1,600+400) = 2,500; WIP = **1,000,000**; items = 6,400,000; price = **4,000 VN** | slide 32–36/54 |
| 5 | WIP — % completion | Total 10,600,000 (mat 6,400,000, lab 2,800,000, oh 1,400,000); 1,200 items + 400 WIP @50% | Mat/unit=6,400,000÷(1,200+400)=4,000; transfer 400×50%=200; lab/unit=2,800,000÷(1,200+200)=2,000; oh/unit=1,000; price=**7,000 VN**; WIP=5,500×400=**2,200,000** | slide 38–42/54 |
| 6 | WIP — stages | Stage costs/unit: S1=4,500, S2=5,400, S3=6,300; total actual 7,935,000; 900 items + 100 WIP@S1 + 150 WIP@S2 + 200 WIP@S3 | WIP = 375,000 + 675,000 + 1,080,000 = **2,130,000**; items = 7,935,000−2,130,000 = 5,805,000; price = **6,450 VN** | slide 50–54/54 |

> Groover §3.2: **TC = Cf + Cv×Q** (Eq 3.25); direct labour & material = variable; factory overhead = fixed; phân bổ overhead theo direct labour cost/hours, material cost, space (Groover p.60–62). Notation `× ÷ − ^ ( )`.

---

## 4. Sections (s1 → s9)

> Mỗi section: `id`, `heading`, `blocks[]`, `keyTerms[]`. Ghi nguồn (slide X/54 hoặc Groover p.XX). Mỗi section ≥1 bảng/flow/formula/calc.

### TẦNG A — Vòng kiểm soát

#### s1 — Vòng kiểm soát chi phí (NEO LENS)
- **flowBlock** `s1` "Control loop 4 bước" layout `horizontal`, nodes:
  - `s1_plan` "1. Detailed operation planning" — "Lập kế hoạch chi tiết: policies/rules, long-term (>5 năm), mid & short-term (<1 năm)."
  - `s1_actual` "2. Actual performance" — "Ghi nhận thực tế: actual output, actual cost; cập nhật cùng tham số với plan."
  - `s1_compare` "3. Comparison & evaluation" — "So sánh thực tế vs kế hoạch; đánh giá tính khả thi của phần còn lại."
  - `s1_adjust` "4. Adjustment" — "Điều chỉnh/cập nhật phần kế hoạch còn lại để đạt target & budget gốc."
  - edges: `s1_plan→s1_actual` label "thực thi", `s1_actual→s1_compare` label "đo", `s1_compare→s1_adjust` label "đánh giá", `s1_adjust→s1_plan` label "lặp". caption: "Slide 8.1: cost management là một vòng lặp plan–do–compare–adjust (slide 1–8/54)."
- **calloutBlock** `"key"` "4 essential elements của control system" — "(1) Detailed operation planning; (2) Actual/realistic performance; (3) Comparison & evaluation; (4) Adjustment. Đây là bộ khung của mọi control process — không riêng chi phí (slide 2–8/54)."
- **calloutBlock** `"note"` "Yêu cầu của control process" — "Control tốt phải: simple + effective + flexible; dùng data đúng & cập nhật; tập trung vào các factor/parameter trọng yếu; được lập kế hoạch & điều chỉnh (slide 9/54)."
- **keyTerms:** cost control, operation planning, actual performance, comparison and evaluation, adjustment, control process.

#### s2 — Production & labour control
- **comparisonBlock** "Các khía cạnh của production & labour control (slide 8.1.2)" — columns `["Khía cạnh", "Nội dung"]`; rows:
  - "Advantages & necessity": cells `["Xác nhận control process là cần thiết; nhắc & xác định human responsibility trong kiểm soát"]`
  - "Implementation": cells `["Hợp tác của toàn bộ nhân sự là chìa khóa để control thành công"]`
  - "Staff training": cells `["Chương trình đào tạo rất quan trọng & phải duy trì thường xuyên"]`
  - "Evaluation & compensation": cells `["Đánh giá kết quả & đãi ngộ cho control staff, lặp lại theo chu kỳ ngắn→dài hạn"]`
- **calloutBlock** `"note"` "Nguyên nhân control thất bại" — "(1) Operators: thiếu năng lực, sai thao tác; (2) Operations data: input data (costs, standard time, auditing data) không chính xác. → 'rác vào, rác ra': kiểm soát chỉ tốt khi dữ liệu & con người đáng tin (slide 15/54)."
- **keyTerms:** production control, labour control, human responsibility, staff training, results evaluation, compensation.

### TẦNG B — Tính unit cost

#### s3 — Phân loại chi phí (nền Groover §3.2)
- **comparisonBlock** "Fixed vs Variable cost (Groover §3.2.1)" — columns `["Loại", "Đặc điểm", "Ví dụ"]`; rows:
  - "Fixed cost": cells `["Không đổi theo mức sản lượng (tính theo năm)", "Nhà xưởng, thiết bị, bảo hiểm, thuế tài sản"]`
  - "Variable cost": cells `["Biến đổi tỷ lệ với sản lượng", "Direct labour, raw materials, điện chạy máy"]`
- **formulaBlock**
  - expression: `"TC = Cf + Cv × Q"`
  - legend: `[ {symbol:"TC", meaning:"total annual cost ($/yr)"}, {symbol:"Cf", meaning:"fixed annual cost ($/yr)"}, {symbol:"Cv", meaning:"variable cost ($/pc)"}, {symbol:"Q", meaning:"annual quantity (pc/yr)"} ]`
  - note: `"Groover Eq 3.25. Khi so manual vs automated: automation có Cf cao/Cv thấp → lợi ở sản lượng lớn; manual lợi ở sản lượng nhỏ. Giao nhau = break-even point (Groover p.60)."`
- **comparisonBlock** "Direct labour / Material / Overhead (Groover §3.2.2)" — columns `["Loại chi phí", "Nội dung"]`; rows:
  - "Direct labour": cells `["Lương + phúc lợi của công nhân vận hành & gia công/lắp ráp — variable cost"]`
  - "Material": cells `["Chi phí raw materials làm ra sản phẩm — variable cost"]`
  - "Factory overhead": cells `["Chi phí vận hành nhà máy ngoài direct labour/material (giám sát, bảo trì, khấu hao, điện…) — thường fixed"]`
  - "Corporate overhead": cells `["Chi phí không liên quan trực tiếp sản xuất (điều hành, sales/marketing, kế toán, R&D…)"]`
- **keyTerms:** fixed cost, variable cost, total cost, direct labour cost, material cost, factory overhead, corporate overhead.

#### s4 — Unit cost & overhead allocation
- **calloutBlock** `"key"` "Unit cost gồm gì" — "Giá thành đơn vị = direct cost + overhead phân bổ. Direct: materials (dựa Bill of Materials — BOM) + direct labour (công nhân liên quan). Overhead: tính cho TẤT CẢ item rồi PHÂN BỔ về từng loại theo một cơ sở hợp lý (slide 8.2)."
- **comparisonBlock** "Cơ sở phân bổ overhead (slide 17/54 + Groover p.62)" — columns `["Cơ sở", "Ghi chú"]`; rows:
  - "Involved working hours": cells `["Phân bổ theo giờ công liên quan — dùng trong ví dụ slide"]`
  - "Machine hours": cells `["Theo số giờ máy"]`
  - "Involved labour cost": cells `["Theo chi phí lao động — phổ biến nhất theo Groover"]`
  - "Number of staff / raw materials": cells `["Theo số nhân sự hoặc lượng nguyên liệu mỗi item"]`
- **calcBlock** "Ví dụ: phân bổ overhead theo working hours" steps:
  - `{ label: "Dữ kiện", expr: "Overhead tháng = $20,000; A cần 400h, B cần 600h → tổng 1,000h" }`
  - `{ label: "Overhead cho A", expr: "(400 ÷ 1,000) × 20,000 = $8,000" }`
  - `{ label: "Overhead cho B", expr: "(600 ÷ 1,000) × 20,000 = $12,000" }`
  - result `"A gánh $8,000; B gánh $12,000"`, meaning `"Overhead chia theo tỷ lệ giờ công mỗi item chiếm."`, implication `"Chọn cơ sở phân bổ khác (machine hours…) sẽ ra con số khác → phải chọn cơ sở phản ánh đúng mức tiêu thụ nguồn lực (slide 18/54)."` (VERIFIED)
- **keyTerms:** unit cost, bill of materials (BOM), overhead allocation, allocation base, working hours, machine hours.

### TẦNG C — Định giá đơn vị

#### s5 — Weighted method
- **calloutBlock** `"key"` "Khi nào dùng weighted method" — "Dùng cho các item CÙNG NHÓM, so sánh với nhau để gán WEIGHT (dựa kinh nghiệm hoặc mức đóng góp lợi ích). Chọn một item làm standard (weight = 1.0), quy tất cả về 'standard units' (equivalent exchange), rồi chia tổng chi phí (slide 8.3.1)."
- **calcBlock** "Ví dụ weighted method" steps:
  - `{ label: "Quy về standard units", expr: "A: 2,000×1.0=2,000 | B: 1,500×1.2=1,800 | C: 1,000×1.5=1,500 | D: 2,000×0.8=1,600 → tổng 6,900" }`
  - `{ label: "Đơn giá standard (item A)", expr: "28,980,000 ÷ 6,900 = 4,200 VN" }`
  - `{ label: "Giá từng item = 4,200 × weight", expr: "B=5,040 | C=6,300 | D=3,360" }`
  - `{ label: "Kiểm tra", expr: "A:4,200×2,000 + B:5,040×1,500 + C:6,300×1,000 + D:3,360×2,000 = 28,980,000 VN" }`
  - result `"Giá đơn vị: A=4,200, B=5,040, C=6,300, D=3,360 VN"`, meaning `"Weight biến các item khác nhau về cùng một 'chuẩn' để chia chi phí công bằng."`, implication `"Tổng khớp lại đúng chi phí gốc → phương pháp bảo toàn tổng (slide 20–24/54)."` (VERIFIED)
- **keyTerms:** weighted method, equivalent exchange, standard item, weight, unit price.

#### s6 — Ratio method
- **calloutBlock** `"key"` "Khi nào dùng ratio method" — "Dùng cho item KHÁC NHÓM (không xác định được weight chung). Dựa trên planning cost và actual cost để tìm RATIO, rồi nhân ratio với giá kế hoạch → giá thực tế mỗi item (slide 8.3.2)."
- **calcBlock** "Ví dụ ratio method" steps:
  - `{ label: "Tổng giá kế hoạch (planning)", expr: "A:2,250×1,200 + B:4,500×900 + C:1,500×1,500 = 9,000,000 VN" }`
  - `{ label: "Ratio = actual ÷ planning", expr: "8,640,000 ÷ 9,000,000 × 100% = 96%" }`
  - `{ label: "Giá thực tế = giá kế hoạch × 96%", expr: "A=2,160 | B=4,320 | C=1,440 VN" }`
  - result `"Ratio = 96%; giá thực tế A=2,160, B=4,320, C=1,440 VN"`, meaning `"Actual thấp hơn plan 4% → mọi giá co lại theo cùng tỷ lệ."`, implication `"Khác weighted: ratio không cần quy đổi standard, chỉ scale theo tỷ lệ actual/plan (slide 26–30/54)."` (VERIFIED)
- **keyTerms:** ratio method, planning cost, actual cost, ratio, actual selling price.

### TẦNG D — Định giá WIP

#### s7 — WIP: materials consideration
- **calloutBlock** `"key"` "Cách 1 — materials consideration" — "WIP được tính giá trị dựa trên MATERIALS đã dùng cho nó; còn labour cost & overhead cost thì dồn (allocate) cho FINISHED ITEMS. Tức WIP chỉ 'gánh' nguyên liệu (slide 8.4.1)."
- **calcBlock** "Ví dụ WIP materials consideration" steps:
  - `{ label: "Materials/unit (item + WIP)", expr: "5,000,000 ÷ (1,600 + 400) = 2,500 VN" }`
  - `{ label: "Giá trị WIP", expr: "2,500 × 400 = 1,000,000 VN" }`
  - `{ label: "Giá trị items", expr: "7,400,000 − 1,000,000 = 6,400,000 VN" }`
  - `{ label: "Giá thành item", expr: "6,400,000 ÷ 1,600 = 4,000 VN" }`
  - result `"WIP = 1,000,000 VN; giá thành item = 4,000 VN"`, meaning `"WIP nhẹ (chỉ materials) → giá items cao hơn."`, implication `"WIP giảm → giá items tăng → lợi nhuận thấp; WIP tăng → giá items giảm → lợi nhuận cao (slide 31/54)."` (VERIFIED)
- **keyTerms:** work-in-process (WIP), materials consideration, cost allocation, finished item, unit cost.

#### s8 — WIP: percentage of completion
- **calloutBlock** `"key"` "Cách 2 — percentage of completion" — "Quy WIP về EQUIVALENT final items theo % hoàn thành. Lưu ý: MATERIALS phân bổ 100% cho WIP (đã có đủ nguyên liệu), còn LABOUR & OVERHEAD chỉ tính theo % completion (slide 8.4.2)."
- **calcBlock** "Ví dụ WIP % completion (1,200 items + 400 WIP @50%)" steps:
  - `{ label: "Materials/unit (WIP tính đủ)", expr: "6,400,000 ÷ (1,200 + 400) = 4,000 VN" }`
  - `{ label: "Quy WIP về equivalent units", expr: "400 × 50% = 200 units (cho labour & overhead)" }`
  - `{ label: "Labour/unit", expr: "2,800,000 ÷ (1,200 + 200) = 2,000 VN" }`
  - `{ label: "Overhead/unit", expr: "1,400,000 ÷ (1,200 + 200) = 1,000 VN" }`
  - `{ label: "Giá thành item & WIP", expr: "item = 4,000+2,000+1,000 = 7,000 VN; WIP/unit = 4,000 + 2,000×50% + 1,000×50% = 5,500 → WIP = 5,500×400 = 2,200,000 VN" }`
  - result `"Giá item = 7,000 VN; WIP = 2,200,000 VN"`, meaning `"Materials đủ cho WIP, nhưng công & overhead chỉ tính nửa vì mới xong 50%."`, implication `"Đây là ý tưởng equivalent units của process costing — WIP dở dang không gánh đủ conversion cost (slide 38–42/54)."` (VERIFIED)
- **keyTerms:** percentage of completion, equivalent units, materials (100% allocated), conversion cost, WIP value.

#### s9 — WIP: actual stages consideration
- **calloutBlock** `"key"` "Cách 3 — actual stages consideration" — "Khi sản phẩm qua nhiều STAGE, tính giá trị WIP theo chi phí lũy kế đến stage mà nó đang nằm: WIP ở stage sau đã 'mang theo' (transfer) toàn bộ chi phí của stage trước. Tổng giá trị items = tổng actual cost − tổng WIP (slide 8.4.3)."
- **calcBlock** "Ví dụ WIP theo stage (3 stages)" steps:
  - `{ label: "Chi phí lũy kế mỗi unit", expr: "Stage 1 = 4,500 | Stage 2 = 5,400 | Stage 3 = 6,300 VN" }`
  - `{ label: "WIP mỗi stage", expr: "S1: 100×3,750=375,000 (chỉ materials) | S2: 150×4,500=675,000 | S3: 200×5,400=1,080,000" }`
  - `{ label: "Tổng WIP", expr: "375,000 + 675,000 + 1,080,000 = 2,130,000 VN" }`
  - `{ label: "Giá trị items & giá thành", expr: "items = 7,935,000 − 2,130,000 = 5,805,000; giá thành = 5,805,000 ÷ 900 = 6,450 VN" }`
  - result `"Tổng WIP = 2,130,000 VN; giá thành item = 6,450 VN"`, meaning `"WIP càng ở stage sau càng đắt vì cộng dồn chi phí stage trước (transfer cost)."`, implication `"Cách này sát thực tế dòng gia công nhiều công đoạn; WIP ở s9 dùng chi phí lũy kế của stage NGAY TRƯỚC (slide 50–54/54)."` (VERIFIED)
- **keyTerms:** stage, transfer cost, cumulative cost, work-in-process value, cost of finished items.

---

## 5. Quiz (12 câu — concept + application; 5 options A–E)

> Mỗi câu: `id`, `stem` (EN), 5 `options` (id "a".."e", `rationale` Cơ chế→Bẫy→Khóa VI + term EN), `difficulty`, `conceptTested`, `takeaway` (VI). Không cố định đáp án đúng ở một vị trí. Có ~5 câu calc (overhead, weighted, ratio, WIP materials, WIP %completion).

1. **q01** (basic) — *Control loop 4 elements.* Đúng: detailed planning → actual performance → comparison → adjustment (vòng lặp). Bẫy: đảo thứ tự; bỏ adjustment.
2. **q02** (intermediate) — *Control process requirements / failure.* Đúng: control phải simple/effective/flexible + data đúng; thất bại do operators kém & input data sai. Bẫy: coi control chỉ cần phần mềm tốt; bỏ yếu tố con người/dữ liệu.
3. **q03** (intermediate) — *Fixed vs variable (Groover).* Đúng: fixed không đổi theo output (nhà xưởng, thiết bị); variable tỷ lệ output (direct labour, materials); TC = Cf + Cv×Q. Bẫy: coi direct labour là fixed; đảo hai.
4. **q04** (intermediate) — *Direct vs overhead.* Đúng: direct labour + material = variable; factory overhead (giám sát, khấu hao) = fixed; corporate overhead không liên quan trực tiếp sản xuất. Bẫy: gộp corporate vào factory; coi overhead là direct.
5. **q05** (advanced, calc) — *Overhead allocation.* Overhead $20,000, A=400h, B=600h. Đúng: A = (400÷1,000)×20,000 = $8,000; B = $12,000. Bẫy: chia đều 10,000/10,000; đảo A/B.
6. **q06** (intermediate) — *Weighted vs ratio (khi nào dùng).* Đúng: weighted cho item cùng nhóm (gán weight, quy standard); ratio cho item khác nhóm (actual÷planning). Bẫy: đảo hai; coi ratio cần weight.
7. **q07** (advanced, calc) — *Weighted method.* Total 28,980,000, standard units 6,900. Đúng: đơn giá standard = 28,980,000 ÷ 6,900 = 4,200 VN; B = 4,200×1.2 = 5,040. Bẫy: chia cho tổng output thô (6,500) thay vì standard units.
8. **q08** (advanced, calc) — *Ratio method.* Actual 8,640,000, planning 9,000,000. Đúng: ratio = 96%; A = 2,250×96% = 2,160 VN. Bẫy: lấy planning÷actual; quên nhân ratio.
9. **q09** (advanced, calc) — *WIP materials consideration.* Mat 5,000,000, 1,600 items + 400 WIP. Đúng: mat/unit = 2,500; WIP = 1,000,000; item price = 6,400,000÷1,600 = 4,000 VN. Bẫy: cho WIP gánh cả labour/overhead.
10. **q10** (advanced, calc/concept) — *WIP percentage of completion.* Đúng: materials phân bổ 100% cho WIP; labour & overhead quy theo % completion (400×50%=200 equivalent units) → item = 7,000 VN. Bẫy: quy materials theo % completion; quên equivalent units.
11. **q11** (intermediate) — *WIP stages consideration.* Đúng: WIP ở stage sau mang theo transfer cost của stage trước; tổng items = tổng actual − tổng WIP. Bẫy: coi mọi WIP cùng chi phí; bỏ transfer cost.
12. **q12** (intermediate) — *Ý nghĩa quản trị của WIP costing.* Đúng: WIP tăng → giá items giảm → lợi nhuận (báo cáo) cao & ngược lại; nên phải chọn phương pháp WIP nhất quán. Bẫy: coi cách tính WIP không ảnh hưởng giá thành/lợi nhuận.

---

## 6. Lưu ý thực thi (Codex)

- KHÔNG sửa `content/types.ts`. Dùng helper có sẵn (dùng `formulaBlock` + nhiều `calcBlock`).
- **bigIdea format mới:** compass 1 câu + `bigIdeaPillars` 4 trụ như mục 1.
- **KHÔNG có phần "kiến thức thêm"** ở topic này — toàn bộ là core (khác Topic 6/7).
- **Mọi số trong calcBlock là VERIFIED từ slide** (mục 3) — giữ đúng con số, đúng dấu phẩy ngăn nghìn (28,980,000). KHÔNG tự chế số mới.
- Quiz: mỗi câu **5 options** (a–e), đúng **1** `isCorrect`; đáp án rải. Câu calc: q05=8,000/12,000; q07=4,200; q08=96%/2,160; q09=4,000; q10=7,000.
- Notation `× ÷ − ^ ( )`; `comparisonBlock` `cells = columns − 1`: bảng 3 cột (s3 fixed/variable → 2 cells); bảng 2 cột (s2, s3-direct/overhead, s4 → 1 cell).
- Flow: knowledgeMap `tree` set `parent` (4 nhóm concept con); s1 = `horizontal` (control loop, có edge `s1_adjust→s1_plan` label "lặp"); node id `_`; edge label ngắn.
- `status: "ready"` chỉ giữ sau khi Lớp A pass (mục 7).

---

## 7. Verify (Codex chạy)

```bash
npx tsc --noEmit
```
- Phải pass (0 error).
- `comparisonBlock` mọi row `cells.length === columns.length − 1`.
- Flow: mọi `edges.from/to` tồn tại; node id `_`; knowledgeMap (`tree`) set `parent`.
- Quiz: mỗi câu 5 options, đúng 1 `isCorrect`; số calc khớp mục 3.
- Sau tsc pass: render-check `/manufacturing-systems/topic-08` (375/768/1440) — bigIdea compass+pillars + knowledgeMap + 9 section + 12 quiz; không horizontal-scroll. Báo Chaliyah. **KHÔNG commit.**

---

## 8. Coverage matrix (Lớp B — "KHÔNG SÓT kiến thức")

Đối chiếu slide Chapter 8 (54 slide) + Groover §3.2. ✅ Có · ⬜ Thiếu · ⚠️ Rút gọn.

| # | Mục | Nguồn | Section | TT |
|---|---|---|---|---|
| 1 | Control system — 4 essential elements | slide 8.1 (2–8/54) | s1 | ✅ |
| 2 | Control process requirements | slide 9/54 | s1 | ✅ |
| 3 | Production & labour control (4 khía cạnh) | slide 10–14/54 | s2 | ✅ |
| 4 | Unsuccessful causes | slide 15/54 | s2 | ✅ |
| 5 | Fixed vs variable cost (TC = Cf + Cv×Q) | Groover §3.2.1 | s3 | ✅ |
| 6 | Direct labour/material/overhead (factory vs corporate) | Groover §3.2.2 | s3 | ✅ |
| 7 | Unit cost: materials (BOM) + direct labour | slide 8.2 (16/54) | s4 | ✅ |
| 8 | Overhead allocation + bases + ví dụ $20,000 | slide 17–18/54 + Groover p.62 | s4 | ✅ |
| 9 | Weighted method + worked example | slide 8.3.1 (19–24/54) | s5 | ✅ |
| 10 | Ratio method + worked example | slide 8.3.2 (25–30/54) | s6 | ✅ |
| 11 | WIP materials consideration + example | slide 8.4.1 (31–36/54) | s7 | ✅ |
| 12 | WIP percentage of completion + example | slide 8.4.2 (37–48/54) | s8 | ✅ (ví dụ 2/2015 so sánh gộp thành ghi chú — Chaliyah chốt phương án a) |
| 13 | WIP actual stages consideration + example | slide 8.4.3 (49–54/54) | s9 | ✅ |

> 13/13 mục phủ đủ. Ví dụ so sánh 1/2015 vs 2/2015 (slide 42–48) được gộp làm ghi chú trong s8 theo lựa chọn "1 ví dụ/method" của Chaliyah. Mọi số VERIFIED từ slide.
