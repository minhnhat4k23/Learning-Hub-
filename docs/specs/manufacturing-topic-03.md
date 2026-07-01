# Spec: Manufacturing Topic 03 — Process Design & Planning

> **Loại:** Soạn mới một topic hoàn chỉnh (rich teaching mode), thay placeholder `topic-03`.
> **File cần sửa:** `content/manufacturing.ts` (helper đã có sẵn).
> **Nguồn (Chaliyah chốt — dùng CẢ hai):**
> - **Slide `Chapter 3 Process Design.pdf`** (mục 3.1–3.4) = khung tầng hệ thống + phân loại + processes in service.
> - **Ebook Groover Ch.24 "Process Planning and Concurrent Engineering"** (p.703–718) = tầng chi tiết (process planning cho part) + CAPP + concurrent engineering/DFM + advanced manufacturing planning.
> - Groover cũng dùng để **chuẩn hóa định nghĩa** các thuật ngữ automation slide liệt kê (NC/CNC/DNC/PLC/FMS/CAD/CAM).
> **Quy ước:** diễn giải tiếng Việt + term EN; quiz `stem`/`options` EN, `rationale`/`takeaway` VI (Cơ chế→Bẫy→Khóa); quiz **5 options A–E**; notation số dùng `× ÷ − ^( )` (KHÔNG `·`).
> **Verify:** `npx tsc --noEmit` pass; render-check; KHÔNG commit.

---

## 0. Wiring (BẮT BUỘC làm trước)

Helper (`flowBlock`, `calloutBlock`, `comparisonBlock`, `formulaBlock`, `calcBlock`) đã có sẵn. Topic 03 **có 1 câu calc** (make-or-buy) → dùng `calcBlock`.

1. Tạo `const topic03: Chapter = { ... }` (đặt ngay sau `topic02`).
2. Sửa assembly:

```ts
// thêm dòng:
if (order === 3) return topic03;
```

**Renderer contract (nhắc lại):** `comparisonBlock` `columns.length === rows[i].cells.length + 1`; flow `edges.from/to` trỏ node có thật cùng block; node id dùng `_`; flow layout chỉ `horizontal`/`tree` (tree set `parent`); edge label NGẮN; notation `× ÷ − ^( )`.

---

## 1. Khung Chapter

```ts
const topic03: Chapter = {
  slug: "topic-03",
  order: 3,
  title: "Topic 03 — Process Design & Planning",
  bigIdea:
    "Thiết kế/hoạch định quy trình trả lời một câu hỏi: 'làm ra sản phẩm BẰNG CÁCH NÀO?' — và nó có HAI TẦNG bổ sung cho nhau. (1) Tầng hệ thống (slide): chọn LOẠI process trên phổ manual → mechanized → automated cho phù hợp volume/quality/cost, qua các bước có thứ tự (financial feasibility → process selection → equipment → facilities layout → planning); tư duy này áp cả cho dịch vụ (distribution, warehousing, POS, banking). (2) Tầng chi tiết (Groover Ch.24): với một part cụ thể, lập process plan — trình tự operation (basic → secondary → property-enhancing → finishing), chọn máy/tooling, và quyết định make-or-buy, tất cả ghi trên route sheet. Cả hai tầng chạy theo cùng một logic: khớp năng lực sản xuất với yêu cầu sản phẩm ở tổng chi phí thấp nhất. Ngày nay ta còn tự động hóa CHÍNH việc lập kế hoạch (CAPP: retrieval vs generative) và phá 'bức tường' giữa design và manufacturing bằng concurrent engineering / DFM — vì ~70% chi phí vòng đời sản phẩm đã bị quyết ngay ở khâu thiết kế. → Future manager hiểu: chọn process không chỉ là 'mua máy nào', mà là thiết kế cả lộ trình biến input → output, ở tầm hệ thống lẫn từng chi tiết.",
  learningObjectives: [
    "Phân biệt production process = processing (value activity) vs support activities (non-value nhưng cần); nêu các thành phần của manufacturing system.",
    "Liệt kê 5 bước implementation của process design và 4 impact factors (volume, item structure/standardization, quality, equipment).",
    "Phân biệt 3 process styles: manual / mechanized / automated theo phổ đánh đổi flexibility ↔ productivity ↔ cost; định nghĩa các automation term (NC/CNC/DNC/PLC/FMS/CAD/CAM).",
    "Mô tả processes in service: distribution/transportation (containerization), warehousing, POS, banking (MICR, ATM, e-banking).",
    "Định nghĩa process planning và scope của nó; giải thích route sheet dùng để làm gì (Groover 24.1).",
    "Mô tả processing sequence chuẩn cho một part: basic → secondary → property-enhancing → finishing; phân biệt net shape / near net shape.",
    "Giải thích process planning cho assemblies (quy mô → phương pháp; precedence; line balancing).",
    "Áp dụng make-or-buy decision: nêu các yếu tố và tính chi phí ẩn khi mua gây idle equipment (Example 24.1).",
    "Phân biệt CAPP retrieval (variant) vs generative; nêu benefits của CAPP.",
    "Giải thích concurrent engineering (vs traditional 'wall') và các elements (DFM/A, design for quality/cost/life cycle); nêu vài DFM/A guidelines.",
    "Giải thích advanced manufacturing planning (corporate-level, planning cho future products 2–10 năm).",
  ],
  knowledgeMap: { /* xem mục 2 */ },
  sections: [ /* xem mục 3 — s1..s12 */ ],
  questions: [ /* xem mục 4 — q01..q12 (5 options A–E) */ ],
  status: "ready",
  source:
    "Manufacturing Systems — slide 'Chapter 3 Process Design' (mục 3.1–3.4) + ebook Groover, Automation, Production Systems & CIM 4e, Chapter 24 'Process Planning and Concurrent Engineering' (p.703–718). Định nghĩa automation term (NC/CNC/DNC/PLC/FMS/CAD/CAM) chuẩn hóa theo Groover.",
};
```

---

## 2. knowledgeMap (cây 3 tầng = lens 2 tầng + tự động hóa việc lập KH)

`engine: "flow"`, `layout: "tree"`, `collapsible: true`.

```ts
knowledgeMap: {
  engine: "flow",
  layout: "tree",
  collapsible: true,
  caption:
    "'Làm ra sản phẩm bằng cách nào?' ở 3 tầng: (A) chọn LOẠI process ở tầm hệ thống; (B) lập process plan cho từng part; (C) tự động hóa & tích hợp chính việc lập kế hoạch. Bấm node để mở chi tiết.",
  nodes: [
    { id: "proc", label: "Process Design & Planning", group: "concept", sectionId: "s1",
      detail: "Làm ra sản phẩm bằng cách nào — ở tầm hệ thống lẫn từng part; khớp năng lực với yêu cầu ở chi phí thấp nhất." },

    { id: "g_system", label: "A. Chọn LOẠI process (hệ thống)", group: "concept", parent: "proc", sectionId: "s1",
      detail: "Production process, 5 bước design, phân loại manual/mechanized/automated, processes in service." },
    { id: "g_part", label: "B. Lập process plan cho part", group: "concept", parent: "proc", sectionId: "s5",
      detail: "Process planning, route sheet, processing sequence, assemblies, make-or-buy." },
    { id: "g_auto", label: "C. Tự động hóa & tích hợp lập KH", group: "concept", parent: "proc", sectionId: "s9",
      detail: "CAPP, concurrent engineering/DFM, advanced manufacturing planning." },

    // Nhóm A
    { id: "t_prodproc", label: "Production process (value + support)", group: "term", parent: "g_system", sectionId: "s1",
      detail: "Processing = value; support activities = non-value nhưng cần." },
    { id: "t_steps", label: "5 bước design + impact factors", group: "term", parent: "g_system", sectionId: "s2",
      detail: "Feasibility → selection → equipment → layout → planning; volume/structure/quality/equipment." },
    { id: "t_class", label: "Manual / Mechanized / Automated", group: "term", parent: "g_system", sectionId: "s3",
      detail: "Phổ đánh đổi flexibility ↔ productivity ↔ cost; NC/CNC/DNC/PLC/FMS/CAD/CAM." },
    { id: "t_service", label: "Processes in service", group: "term", parent: "g_system", sectionId: "s4",
      detail: "Distribution, warehousing, POS, banking (MICR/ATM/e-banking)." },

    // Nhóm B
    { id: "t_planning", label: "Process planning + route sheet", group: "term", parent: "g_part", sectionId: "s5",
      detail: "Chọn process + sequence cho một part; ghi trên route sheet." },
    { id: "t_sequence", label: "Processing sequence", group: "term", parent: "g_part", sectionId: "s6",
      detail: "Basic → secondary → property-enhancing → finishing; net/near-net shape." },
    { id: "t_assembly", label: "Planning cho assemblies", group: "term", parent: "g_part", sectionId: "s7",
      detail: "Quy mô → phương pháp; precedence; line balancing." },
    { id: "t_makebuy", label: "Make-or-buy decision", group: "term", parent: "g_part", sectionId: "s8",
      detail: "Cost là yếu tố chính; coi chừng idle-equipment cost ẩn." },

    // Nhóm C
    { id: "t_capp", label: "CAPP (retrieval / generative)", group: "term", parent: "g_auto", sectionId: "s9",
      detail: "Tự động hóa lập route sheet; variant vs generative." },
    { id: "t_concurrent", label: "Concurrent engineering / DFM", group: "term", parent: "g_auto", sectionId: "s10",
      detail: "Phá 'bức tường' design–manufacturing; DFM/A, DFQ, DFC, DFLC." },
    { id: "t_advanced", label: "Advanced manufacturing planning", group: "term", parent: "g_auto", sectionId: "s12",
      detail: "Corporate-level, planning cho future products 2–10 năm." },
  ],
  edges: [
    { from: "proc", to: "g_system" }, { from: "proc", to: "g_part" }, { from: "proc", to: "g_auto" },
    { from: "g_system", to: "t_prodproc" }, { from: "g_system", to: "t_steps" }, { from: "g_system", to: "t_class" }, { from: "g_system", to: "t_service" },
    { from: "g_part", to: "t_planning" }, { from: "g_part", to: "t_sequence" }, { from: "g_part", to: "t_assembly" }, { from: "g_part", to: "t_makebuy" },
    { from: "g_auto", to: "t_capp" }, { from: "g_auto", to: "t_concurrent" }, { from: "g_auto", to: "t_advanced" },
  ],
},
```

---

## 3. Bối cảnh số liệu (VERIFIED — Groover Ch.24)

| Ví dụ | Dữ liệu | Kết quả | Nguồn |
|---|---|---|---|
| Make-or-buy (Example 24.1) | Quote mua = **$20/unit** (100 units). Làm in-house = **$28/unit** = raw $8 + direct labor $6 + labor overhead 150% ($9) + equipment fixed $5 | Nếu mua gây idle equipment → chi phí thực = $20 + $5 (fixed vẫn chịu) + $9 (overhead vẫn chịu) = **$34/unit** → buy KHÔNG lợi. Chỉ nên mua nếu máy đó dùng làm việc khác rẻ hơn ngoài quote. | Groover p.708–709 |
| DFM/A | ~**70%** life-cycle cost của sản phẩm bị quyết ở khâu product design | (định tính) | Groover p.713 |
| Modular design | Mỗi subassembly nên **5–15 parts** | (guideline) | Groover p.715 |

> Notation tiền tệ giữ `$`; phép tính dùng `+ − × ÷`.

---

## 4. Sections (s1 → s12)

> Mỗi section: `id`, `heading`, `blocks[]`, `keyTerms[]`. Diễn giải VI + term EN. Ghi nguồn (slide X/12 hoặc Groover p.XXX) trong callout.

### TẦNG A — Chọn LOẠI process (tầm hệ thống, slide)

#### s1 — Production process = Processing (value) + Support activities (NEO LENS)
- **flowBlock** `s1` "Manufacturing system & production process" layout `tree`, nodes (parent set):
  - `s1_sys` "Manufacturing system" (concept) — "Gồm: factory (layout, workshop); stages trong production process (processes, technologies, sequencing); production lines (machines, facilities); management & implementation (HMR)."
  - `s1_value` "Processing (value activity)" (parent `s1_sys`) — "Tạo hình/thân sản phẩm — thêm function cho sản phẩm. Đây là hoạt động TẠO GIÁ TRỊ."
  - `s1_support` "Support activities (non-value)" (parent `s1_sys`) — "Maintenance & corrective, quality control, power supply, tools control & supply, materials/components transportation. Cần nhưng KHÔNG trực tiếp tạo giá trị."
  - edges: `s1_sys→s1_value`, `s1_sys→s1_support`. caption: "Production process = mọi work elements; tách rõ phần TẠO GIÁ TRỊ (processing) và phần HỖ TRỢ (non-value-added nhưng cần)."
- **calloutBlock** `"key"` "Vì sao tách value/non-value" — "Đây là nền tư duy lean: chỉ processing mới thêm giá trị cho khách; support activities là chi phí cần thiết phải quản để không phình. Nhìn quy trình bằng lăng kính value/non-value giúp future manager biết chỗ nào tối ưu được (slide 3.1)."
- **keyTerms:** production process, processing, support activities, manufacturing system, value/non-value activity.

#### s2 — Process design: 5 bước + impact factors
- **flowBlock** `s2` "5 bước implementation của process design" layout `horizontal`, nodes:
  - `s2_fin` "Financial feasibility" — "Kiểm tra tính khả thi tài chính cho các items."
  - `s2_sel` "Process selection" — "Chọn process trong mức relevant cost."
  - `s2_equip` "Equipment/machine" — "Chọn & đầu tư thiết bị/máy."
  - `s2_layout` "Facilities layout" — "Bố trí mặt bằng trong nhà máy."
  - `s2_plan` "Planning" — "Lập kế hoạch inventory, máy móc, nhân lực."
  - edges nối liên tiếp `s2_fin→s2_sel` label "chọn", `s2_sel→s2_equip` label "đầu tư", `s2_equip→s2_layout` label "bố trí", `s2_layout→s2_plan` label "lập KH". caption: "Thiết kế quy trình đi theo thứ tự: khả thi tài chính trước, rồi mới chọn process, thiết bị, layout, và lập kế hoạch nguồn lực (slide 3.2)."
- **comparisonBlock** "4 impact factors khi thiết kế process" — columns `["Yếu tố", "Ảnh hưởng đến lựa chọn process"]`; rows:
  - "Quantity/volume": cells `["Volume lớn → nghiêng về mechanized/automated; volume nhỏ → manual"]`
  - "Item structure & standardization": cells `["Sản phẩm chuẩn hóa cao → dễ tự động hóa; đa dạng/tùy biến → manual linh hoạt"]`
  - "Quality of item": cells `["Yêu cầu chất lượng cao/ổn định → máy móc cho consistency"]`
  - "Equipment requirements": cells `["Quyết định năng suất, độ chính xác và chi phí đầu tư"]`
- **keyTerms:** process design, financial feasibility, process selection, facilities layout, impact factors.

#### s3 — Process classification: Manual / Mechanized / Automated
- **comparisonBlock** "3 process styles (phổ đánh đổi)" — columns `["Loại process", "Đặc điểm", "Ưu điểm", "Nhược điểm"]`; rows:
  - "Manual process": cells `["Dùng nhiều employees để sản xuất", "Linh hoạt cao (SX phức tạp/đa dạng, vd construction)", "Năng suất thấp, phụ thuộc worker"]`
  - "Mechanized process": cells `["Dùng advanced machines & tools thay workers", "Năng suất cao hơn", "Chi phí lớn, cần kỹ thuật"]`
  - "Automated process": cells `["Dùng automated equipment (Robotics, NC, PLC, FMS, CAD/CAM, CNC, DNC…)", "High volume & reliability", "Đầu tư rất lớn, cần chuẩn hóa"]`
- **calloutBlock** `"insight"` "Phổ đánh đổi flexibility ↔ productivity ↔ cost" — "Đi từ manual → mechanized → automated: năng suất & độ ổn định TĂNG, nhưng vốn đầu tư & yêu cầu chuẩn hóa cũng tăng, còn tính linh hoạt GIẢM. Không có mức 'tốt nhất' — chọn mức khớp volume/quality/cost (nối với Topic 01: fixed/programmable/flexible automation)."
- **comparisonBlock** "Định nghĩa các automation term (chuẩn Groover)" — columns `["Term", "Nghĩa"]`; rows:
  - "NC": cells `["Numerical Control — điều khiển máy bằng chương trình lệnh số hóa"]`
  - "CNC": cells `["Computer Numerical Control — NC dùng máy tính chuyên dụng gắn tại máy"]`
  - "DNC": cells `["Distributed/Direct Numerical Control — nhiều máy NC nối & điều khiển bởi máy tính trung tâm"]`
  - "PLC": cells `["Programmable Logic Controller — bộ điều khiển logic lập trình được (discrete control)"]`
  - "FMS": cells `["Flexible Manufacturing System — hệ thống tự động sản xuất nhiều loại part, đổi nhanh"]`
  - "CAD / CAM": cells `["Computer-Aided Design / Manufacturing — máy tính hỗ trợ thiết kế / hỗ trợ manufacturing engineering (process planning, NC programming)"]`
  - "Robotics": cells `["Industrial robots thực hiện processing/assembly/material handling"]`
- **keyTerms:** manual process, mechanized process, automated process, NC, CNC, DNC, PLC, FMS, CAD, CAM.

#### s4 — Processes in service
- **comparisonBlock** "Processes in service" — columns `["Hệ thống dịch vụ", "Đặc điểm"]`; rows:
  - "Distribution & transportation": cells `["Dùng containers (containerization) & reservation systems (vd đặt vé máy bay)"]`
  - "Warehousing": cells `["Hệ thống kho — lưu trữ hàng tạm trước khi phân phối"]`
  - "Point of sale (POS)": cells `["Hệ thống bán hàng tại điểm giao dịch; ngày càng phổ biến"]`
  - "Banking — check clearing": cells `["Dùng MICR (magnetic-ink character recognition) đọc mã tài khoản; quy trình nhận dạng phức tạp; hard-copy vẫn cần để quản lý"]`
  - "Banking — ATM / e-banking": cells `["Giao dịch tự động qua ATM card + password, không cần nhân viên; rút tiền/thanh toán mọi nơi; e-banking ngày càng phổ biến"]`
- **calloutBlock** `"note"` "Process design không chỉ cho manufacturing" — "Tư duy thiết kế quy trình (biến input → output hiệu quả) áp cho cả dịch vụ. Nhiều dịch vụ hiện đại (POS, ATM, e-banking) chính là process được tự động hóa để tăng tốc & giảm phụ thuộc con người (slide 3.4)."
- **keyTerms:** distribution & transportation, containerization, warehousing, point of sale (POS), MICR, ATM, e-banking.

### TẦNG B — Lập process plan cho part (Groover 24.1)

#### s5 — Process planning & route sheet
- **calloutBlock** `"key"` "Process planning là gì" — "Process planning = xác định các manufacturing/assembly process PHÙ HỢP NHẤT và TRÌNH TỰ thực hiện để làm ra một part/product theo đúng design specs. Do manufacturing engineers (còn gọi industrial/production/process engineers) làm, dựa trên năng lực thiết bị hiện có (Groover p.704)."
- **comparisonBlock** "Scope của process planning (các quyết định)" — columns `["Quyết định", "Nội dung"]`; rows:
  - "Interpretation of design drawings": cells `["Phân tích material, dimensions, tolerances, surface finish"]`
  - "Choice of processes & sequence": cells `["Chọn process nào & thứ tự; mô tả các bước"]`
  - "Choice of equipment": cells `["Ưu tiên thiết bị sẵn có; nếu không thì mua/đầu tư"]`
  - "Choice of tooling": cells `["Tools, dies, molds, fixtures, gages cho từng bước"]`
  - "Analysis of methods": cells `["Bố trí nơi làm việc, thao tác cho manual operations"]`
  - "Work standards": cells `["Đặt time standard cho từng operation"]`
  - "Cutting tools & conditions": cells `["Chọn dao cắt & thông số cho machining"]`
- **calloutBlock** `"note"` "Route sheet" — "Kết quả process planning ghi trên **route sheet** (operation sheet): liệt kê MỌI operation theo đúng thứ tự, mô tả ngắn, máy cụ thể, và tooling. Gọi 'route sheet' vì nó định nghĩa 'lộ trình' part phải đi qua trong nhà máy — là bản đối ứng của engineering drawing (một cho design, một cho manufacturing) (Groover p.705)."
- **keyTerms:** process planning, manufacturing engineer, route sheet, operation sheet, tooling.

#### s6 — Processing sequence chuẩn cho một part
- **flowBlock** `s6` "Trình tự gia công một part" layout `horizontal`, nodes:
  - `s6_basic` "Basic process" — "Tạo geometry ban đầu (casting, molding, rolling). Part thường tới nhà máy đã xong basic process."
  - `s6_sec` "Secondary processes" — "Biến geometry ban đầu → geometry cuối (vd machining sau casting; stamping sau rolling)."
  - `s6_prop` "Property-enhancing" — "Cải thiện tính chất cơ/lý, KHÔNG đổi geometry (vd heat treatment). KHÔNG phải part nào cũng cần."
  - `s6_fin` "Finishing" — "Phủ bề mặt (electroplating, painting) — đẹp/chống ăn mòn. Nhiều part không cần."
  - edges: `s6_basic→s6_sec` label "định hình", `s6_sec→s6_prop` label "tăng tính chất", `s6_prop→s6_fin` label "hoàn thiện". caption: "Trình tự điển hình. Property-enhancing & finishing là tùy chọn (nhiều part bỏ qua) (Groover Fig 24.2)."
- **calloutBlock** `"note"` "Net shape / Near net shape" — "Operation không cần gia công thứ cấp tiếp theo gọi **net shape** (vd plastic injection molding). Cần rất ít gia công thêm gọi **near net shape** (vd một số impression die forging). Càng gần net shape càng ít bước → rẻ hơn (Groover p.706)."
- **keyTerms:** basic process, secondary process, property-enhancing operation, finishing operation, net shape, near net shape.

#### s7 — Process planning cho assemblies
- **comparisonBlock** "Chọn phương pháp assembly theo quy mô" — columns `["Quy mô sản xuất", "Phương pháp assembly"]`; rows:
  - "Số lượng nhỏ": cells `["Assembly tại workstation đơn — 1 worker/team làm mọi task"]`
  - "Sản phẩm phức tạp, medium–high volume": cells `["Manual assembly lines (Chương 15)"]`
  - "Sản phẩm đơn giản (~chục components), volume lớn": cells `["Automated assembly systems"]`
- **calloutBlock** `"note"` "Precedence & line balancing" — "Assembly luôn có **precedence order** (thứ tự bắt buộc), biểu diễn bằng precedence diagram. Với assembly line, process planning = phân bổ work elements vào từng station — gọi là **line balancing** (sẽ học kỹ ở các chương sau) (Groover p.707)."
- **keyTerms:** assembly, precedence order, precedence diagram, line balancing, automated assembly system.

#### s8 — Make-or-buy decision
- **calloutBlock** `"key"` "Make hay Buy?" — "Câu hỏi cốt lõi trong process planning: part này TỰ LÀM hay MUA ngoài? Nếu công ty không có thiết bị/năng lực → phải mua. Nếu làm được cả hai thì **cost là yếu tố quan trọng nhất** — nhưng phải tính cả chi phí ẩn (Groover p.708)."
- **calcBlock** "Example 24.1 — bẫy chi phí ẩn khi mua" steps:
  - `{ label: "Quote mua ngoài", expr: "$20 / unit (100 units)" }`
  - `{ label: "Chi phí tự làm (in-house)", expr: "$28 = raw $8 + labor $6 + overhead $9 (150%) + equip fixed $5" }`
  - `{ label: "Nhìn thô", expr: "$20 < $28 → tưởng nên MUA" }`
  - `{ label: "Nhưng: fixed cost & overhead vẫn chịu dù máy idle", expr: "chi phí thực khi mua = $20 + $5 + $9 = $34" }`
  - result `"Chi phí mua thực ≈ $34 > $28 tự làm"`, meaning `"$5 equipment fixed + $9 overhead là chi phí đã cam kết, không biến mất khi part được mua ngoài."`, implication `"Chỉ nên MUA nếu máy đó dùng làm việc khác có lợi hơn quote; nếu không, mua gây idle → tốn hơn tự làm (Groover p.709)."` (VERIFIED)
- **comparisonBlock** "Các yếu tố make-or-buy" — columns `["Yếu tố", "Ảnh hưởng"]`; rows:
  - "Cost comparison": cells `["Quan trọng nhất — nhưng phải tính chi phí ẩn (idle)"]`
  - "Process có sẵn in-house?": cells `["Không có năng lực → phải mua"]`
  - "Production quantity & product life": cells `["Số lượng lớn & vòng đời dài → nghiêng MAKE; ít → BUY"]`
  - "Standard item?": cells `["Hàng tiêu chuẩn (bolts, screws) → mua từ nhà cung cấp chuyên"]`
  - "Supplier reliability / alternative source": cells `["Cần nguồn dự phòng & giao đúng hạn; peak demand có thể mua bổ sung"]`
- **keyTerms:** make-or-buy decision, in-house production, idle capacity cost, standard item.

### TẦNG C — Tự động hóa & tích hợp việc lập kế hoạch (Groover 24.2–24.4)

#### s9 — CAPP: Retrieval vs Generative
- **comparisonBlock** "Hai kiểu CAPP" — columns `["Kiểu CAPP", "Cách hoạt động", "Cơ sở"]`; rows:
  - "Retrieval (variant)": cells `["Lưu sẵn route sheet chuẩn theo mã part; part mới → lấy plan mẫu rồi SỬA", "Dựa group technology (GT) code + part families"]`
  - "Generative": cells `["TẠO MỚI process plan từ đầu bằng logic như người lập kế hoạch", "Expert system: knowledge base + inference engine"]`
- **calloutBlock** `"note"` "Vì sao cần CAPP & lợi ích" — "Lập kế hoạch thủ công phụ thuộc kinh nghiệm từng người → plan không nhất quán; thợ lành nghề dần nghỉ hưu. CAPP giúp: chuẩn hóa & hợp lý hóa plan, tăng năng suất người lập, giảm lead time, route sheet dễ đọc, tích hợp với chương trình khác (cost, work standards) (Groover p.709–710)."
- **keyTerms:** CAPP, retrieval (variant) CAPP, generative CAPP, group technology code, expert system, inference engine.

#### s10 — Concurrent Engineering & DFM
- **flowBlock** `s10` "Traditional 'wall' vs Concurrent engineering" layout `horizontal`, nodes:
  - `s10_trad` "Traditional (sequential)" — "Design engineering làm xong mới 'ném qua tường' cho manufacturing; ít cơ hội góp ý → thời gian ra thị trường dài."
  - `s10_wall` "'Bức tường'" — "Rào cản giữa design và manufacturing: thiết kế xong mới bắt đầu process planning."
  - `s10_conc` "Concurrent engineering" — "Manufacturing (và quality, vendors, khách) tham gia SỚM trong chu kỳ phát triển → rút ngắn thời gian ra thị trường."
  - edges: `s10_trad→s10_wall` label "tạo rào", `s10_wall→s10_conc` label "phá rào". caption: "Concurrent engineering phá 'bức tường' bằng cách tích hợp sớm design & manufacturing (Groover Fig 24.4)."
- **calloutBlock** `"key"` "Elements & vì sao quan trọng" — "Concurrent engineering gồm: (1) design for manufacturing & assembly (DFM/A), (2) design for quality, (3) design for cost (DFC), (4) design for life cycle (DFLC). Lý do cấp thiết: ~**70%** chi phí vòng đời sản phẩm bị quyết ngay ở khâu **product design** — quyết sai từ đầu thì manufacturing engineer khó cứu (Groover p.712–713)."
- **keyTerms:** concurrent engineering, design for manufacturing and assembly (DFM/A), design for quality, design for cost (DFC), design for life cycle.

#### s11 — DFM/A guidelines
- **comparisonBlock** "Một số DFM/A design guidelines" — columns `["Guideline", "Lợi ích"]`; rows:
  - "Minimize số parts": cells `["Ít part phải mua, giảm chi phí đặt hàng & lắp ráp"]`
  - "Dùng standard/commercial components": cells `["Giảm công thiết kế; kiểm soát tồn kho tốt hơn; chiết khấu số lượng"]`
  - "Dùng common parts across product lines": cells `["Áp group technology; phát triển manufacturing cells"]`
  - "Design for ease of fabrication": cells `["Dùng net/near-net shape; đơn giản geometry; tránh bề mặt mịn quá mức cần"]`
  - "Tolerances trong process capability": cells `["Tránh dung sai chặt hơn năng lực process → khỏi gia công thêm/scrap"]`
  - "Modular design": cells `["Mỗi subassembly 5–15 parts → dễ bảo trì, dễ lắp tự động, giảm tồn kho"]`
- **calloutBlock** `"note"` "Design for cost & life cycle" — "DFC mở rộng ra ngoài manufacturing: gồm cả inspection, purchasing, distribution, inventory, overhead. DFLC xét sản phẩm sau khi sản xuất: delivery, reliability, maintainability, serviceability, upgradeability — nhiều khách (vd chính phủ) tính cả life-cycle cost khi mua (Groover p.715–716)."
- **keyTerms:** DFM/A guidelines, modular design, standard components, process capability.

#### s12 — Advanced manufacturing planning
- **calloutBlock** `"key"` "Hoạch định cho tương lai" — "Advanced manufacturing planning = hoạt động ở **corporate-level**, khác process planning: nó lo cho các sản phẩm trong kế hoạch DÀI HẠN (tương lai 2–10 năm), chưa được thiết kế. Làm việc với sales/marketing/design để dự báo sản phẩm tương lai → xác định production resources/technologies/facilities cần có; so sánh thiết bị hiện tại với nhu cầu tương lai để quyết đầu tư công nghệ/nhà xưởng mới (Groover p.716)."
- **keyTerms:** advanced manufacturing planning, corporate-level planning, technology forecasting.

---

## 5. Quiz (12 câu — concept + application + 1 calc; 5 options A–E; bám tư duy đề mẫu)

> Mỗi câu: `id`, `stem` (EN), 5 `options` (id "a".."e", `rationale` Cơ chế→Bẫy→Khóa VI + term EN), `difficulty`, `conceptTested`, `takeaway` (VI). Không cố định đáp án đúng ở một vị trí. Câu calc dùng đúng số Example 24.1.

1. **q01** (basic) — *Value vs support activity.* Đúng: **processing** là value activity (tạo hình sản phẩm); maintenance/QC/transportation là **support** (non-value nhưng cần). Bẫy: coi transportation/QC là value-added; coi support là vô ích nên bỏ.
2. **q02** (intermediate) — *5 process design steps order.* Đúng: financial feasibility → process selection → equipment → facilities layout → planning. Bẫy: mua equipment trước feasibility; layout trước process selection.
3. **q03** (intermediate) — *Manual vs mechanized vs automated tradeoff.* Đúng: manual = linh hoạt nhưng năng suất thấp; automated = high volume/reliability nhưng đầu tư lớn & kém linh hoạt. Bẫy: automated luôn tốt nhất; manual không có ưu điểm.
4. **q04** (basic) — *Automation term definitions.* Đúng: CNC = Computer Numerical Control (NC dùng máy tính tại máy). Bẫy: đảo CNC/DNC; gán FMS = design software; PLC = design tool.
5. **q05** (intermediate) — *Processes in service / MICR.* Đúng: MICR (magnetic-ink character recognition) dùng trong banking check clearing. Bẫy: gán MICR cho warehousing/POS; coi ATM = check clearing.
6. **q06** (intermediate) — *Process planning definition / route sheet.* Đúng: process planning xác định process + sequence cho một part; kết quả ghi trên route sheet. Bẫy: coi route sheet = engineering drawing; coi process planning = corporate future planning.
7. **q07** (intermediate) — *Processing sequence order.* Đúng: basic → secondary → property-enhancing → finishing (property-enhancing & finishing là optional). Bẫy: finishing trước secondary; cho rằng mọi part đều cần cả 4.
8. **q08** (advanced, calc) — *Make-or-buy hidden cost.* Cho quote $20, in-house $28 (raw $8 + labor $6 + overhead $9 + fixed $5). Hỏi chi phí THỰC khi mua gây idle. Đúng: **$34** ($20 + $5 + $9). Bẫy: $20 (chỉ quote), $28, $25 ($20+$5), $29 ($20+$9). takeaway: fixed + overhead vẫn chịu khi máy idle → mua không rẻ như vẻ ngoài.
9. **q09** (intermediate) — *CAPP retrieval vs generative.* Đúng: retrieval/variant lấy route sheet mẫu theo GT code rồi sửa; generative tạo mới từ knowledge base. Bẫy: đảo hai loại; coi generative = chỉ copy.
10. **q10** (intermediate) — *Concurrent engineering vs traditional.* Đúng: concurrent = manufacturing tham gia sớm, phá 'wall' → giảm time-to-market. Bẫy: coi concurrent = làm design & manufacturing tuần tự nhanh hơn; coi 'wall' là tốt.
11. **q11** (advanced, application) — *DFM/A insight.* Đúng: ~70% life-cycle cost quyết ở product design → phải tích hợp DFM sớm; hoặc chọn guideline hợp lệ (modular 5–15 parts, net shape). Bẫy: cho rằng cost chủ yếu quyết ở khâu sản xuất; "làm bề mặt mịn nhất có thể" (sai — tránh mịn quá mức cần).
12. **q12** (intermediate) — *Advanced manufacturing planning.* Đúng: corporate-level, lo sản phẩm tương lai 2–10 năm, xác định technology/facilities cần đầu tư. Bẫy: nhầm với process planning (part hiện tại); nhầm với production planning (logistics ngắn hạn).

---

## 6. Lưu ý thực thi (Codex)

- KHÔNG sửa `content/types.ts`. Dùng `flowBlock`/`calloutBlock`/`comparisonBlock`/`calcBlock` (đã có sẵn).
- Quiz: mỗi câu **5 options** (id "a".."e"), đúng **1** `isCorrect: true`; đừng cố định đáp án đúng ở một vị trí. Câu q08 dùng đúng số $20/$28/$34.
- Notation tiền: giữ `$`; phép tính `+ − × ÷`, KHÔNG `·`.
- `comparisonBlock`: `cells.length === columns.length − 1` (bảng 4 cột s3 process styles ⇒ mỗi row 3 cells; bảng 2 cột s3-terms/s4/impact-factors ⇒ 1 cell; bảng 3 cột s9 CAPP ⇒ 2 cells).
- Flow: id node `_`; knowledgeMap + s1 `tree` set `parent`; s2/s6/s10 = `horizontal`; edge label ngắn.
- `status: "ready"` chỉ giữ sau khi Lớp A pass (mục 7).

---

## 7. Verify (Codex chạy)

```bash
npx tsc --noEmit
```
- Phải pass (0 error).
- `comparisonBlock` mọi row `cells.length === columns.length − 1` (đặc biệt bảng 4 cột s3 process styles ⇒ 3 cells).
- Flow: mọi `edges.from/to` tồn tại trong nodes cùng block; node id `_`; knowledgeMap + s1 (`tree`) có `parent` đủ.
- Quiz: mỗi câu 5 options, đúng 1 `isCorrect`; q08 khớp số Example 24.1.
- Sau khi tsc pass: render-check route `/manufacturing-systems/topic-03` (375/768/1440) — knowledgeMap + 12 section + 12 quiz hiển thị; không horizontal-scroll; nhãn cạnh không bị che. Báo Chaliyah. **KHÔNG commit.**

---

## 8. Coverage matrix (Lớp B — "KHÔNG SÓT kiến thức")

Đối chiếu slide Chapter 3 (3.1–3.4) + Groover Ch.24 (24.1–24.4). Trạng thái: ✅ Có · ⬜ Thiếu · ⚠️ Rút gọn.

| # | Mục | Nguồn | Section | TT |
|---|---|---|---|---|
| 1 | Manufacturing system components (factory/stages/lines/management) | slide 3.1 | s1 | ✅ |
| 2 | Production process = processing (value) + support activities | slide 3.1 | s1 | ✅ |
| 3 | 5 implementation steps của process design | slide 3.2 | s2 | ✅ |
| 4 | 4 impact factors (volume/structure/quality/equipment) | slide 3.2 | s2 | ✅ |
| 5 | Manual / mechanized / automated (pros/cons) | slide 3.3 | s3 | ✅ |
| 6 | Automation terms NC/CNC/DNC/PLC/FMS/CAD/CAM (định nghĩa) | slide 3.3 + Groover | s3 | ✅ |
| 7 | Processes in service: distribution/containerization, warehousing, POS, banking (MICR/ATM/e-banking) | slide 3.4 | s4 | ✅ |
| 8 | Process planning definition + scope (7 quyết định) | Groover 24.1 (p.704) | s5 | ✅ |
| 9 | Route sheet | Groover 24.1.1 (p.705) | s5 | ✅ |
| 10 | Processing sequence basic→secondary→enhance→finishing + net/near-net shape | Groover 24.1.1 (p.706) | s6 | ✅ |
| 11 | Process planning for assemblies (quy mô→method, precedence, line balancing) | Groover 24.1.2 (p.707) | s7 | ✅ |
| 12 | Make-or-buy decision + factors + Example 24.1 ($20/$28/$34) | Groover 24.1.3 (p.708–709) | s8 | ✅ |
| 13 | CAPP retrieval (variant) vs generative + benefits | Groover 24.2 (p.709–712) | s9 | ✅ |
| 14 | Concurrent engineering vs traditional 'wall' + elements | Groover 24.3 (p.712–713) | s10 | ✅ |
| 15 | DFM/A + ~70% life-cycle cost + guidelines (modular 5–15…) | Groover 24.3.1 (p.713–715) | s10, s11 | ✅ |
| 16 | Design for cost / life cycle | Groover 24.3.1 (p.715–716) | s11 | ✅ |
| 17 | Advanced manufacturing planning (corporate, future 2–10 năm) | Groover 24.4 (p.716) | s12 | ✅ |

> 17/17 mục phủ đủ (slide 3.1–3.4 + Groover Ch.24 24.1–24.4). Automation term định nghĩa chuẩn Groover; make-or-buy số VERIFIED Example 24.1.
