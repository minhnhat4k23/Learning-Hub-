# Spec: Manufacturing Topic 05 — Mass Production System

> **Loại:** Soạn mới topic hoàn chỉnh (rich teaching mode), thay placeholder `topic-05`. **Topic nặng calc đầu tiên** (line balancing) → dùng `formulaBlock` + `calcBlock`.
> **File cần sửa:** `content/manufacturing.ts` (helper đã có sẵn).
> **Nguồn (Chaliyah chốt — KHỚP NHIỀU, dùng tối đa sách + slide):**
> - **Ebook Groover** §2.3.3 (quantity vs flow-line, product layout, single/mixed-model) + **Ch.15 Manual Assembly Lines** (line balancing: Tc, Nmin, balance efficiency/delay, thuật toán) + Fig 2.7 = **chuẩn định nghĩa + công thức**.
> - **Slide `Chapter 5 MasProduction.pdf`** (Dr. Le Phuoc Luong, 81 slide) = **exam-facing**: notation slide (Tc=T÷Q, L% balance loss), worked example Kilbridge–Wester (21 elements, TC=36, L%=0.69%), mass history, 4 nguyên tắc flow-line, prerequisites, classification, vị trí quality inspection.
> - **Ranh giới hard/soft (workflow §0):** công thức/số/định nghĩa = hard theory bám nguồn + trích trang; bigIdea/compass/pillars/callout `insight` = soft lens, không mạo danh sách.
> **Quy ước:** diễn giải VI + term EN; quiz `stem`/`options` EN, `rationale`/`takeaway` VI (Cơ chế→Bẫy→Khóa); quiz **5 options A–E**; notation dùng `× ÷ − ^ ( )` (KHÔNG `·`).
> **bigIdea format mới:** compass (1 câu) + `bigIdeaPillars` (2–4 trụ).
> **Verify:** `npx tsc --noEmit` pass; render-check; KHÔNG commit.

---

## 0. Wiring (BẮT BUỘC làm trước)

Helper (`flowBlock`, `calloutBlock`, `comparisonBlock`, `formulaBlock`, `calcBlock`) đã có sẵn.

1. Tạo `const topic05: Chapter = { ... }` (đặt ngay sau `topic04`).
2. Sửa assembly: thêm `if (order === 5) return topic05;`.

**Renderer contract:** `comparisonBlock` `columns.length === rows[i].cells.length + 1`; flow `edges.from/to` trỏ node có thật cùng block; node id `_`; flow layout chỉ `horizontal`/`tree` (tree set `parent`); edge label NGẮN. `formulaBlock(expression, legend?, note?)` với `legend: {symbol, meaning}[]`. `calcBlock(title, steps:{label,expr,note?}[], result?, meaning?, implication?)`.

---

## 1. Khung Chapter

```ts
const topic05: Chapter = {
  slug: "topic-05",
  order: 5,
  title: "Topic 05 — Mass Production System",
  bigIdea:
    "Mass = CÂN BẰNG CHUYỀN, không điều phối đơn: trạm chậm nhất (bottleneck) quyết định nhịp của cả dây chuyền.",
  bigIdeaPillars: [
    { label: "Định vị", body: "High volume / low variety; dedicated equipment; flow-line (product) layout; single-model → mixed-model." },
    { label: "Nền tảng", body: "Interchangeable parts + division of labor + standardization → economies of scale." },
    { label: "Bài toán", body: "Line balancing: Tc = T ÷ Q, Nmin = Σti ÷ Tc, balance loss L% = (N×Tc − Σti) ÷ (N×Tc)." },
    { label: "Điều kiện", body: "Mass demand + demand stability — thiếu cầu lớn & ổn định thì dây chuyền dedicated là canh bạc." },
  ],
  learningObjectives: [
    "Định vị mass production ở đầu high-volume/low-variety; phân biệt quantity production vs flow-line production và product layout (Groover §2.3.3).",
    "Giải thích 3 nền tảng lịch sử: division of labor (Adam Smith), interchangeable parts, standardization → economies of scale.",
    "Nêu 4 nguyên tắc flow-line production: workflow, interchangeable parts, minimum distance moved, division of operation.",
    "Nêu prerequisites của mass & flow-line production: mass demand + demand stability (+ line balancing, equipment reliability, materials handling, product design).",
    "Phân loại production line: transfer/assembly lines; single-model, multi-model, mixed-model (Table 5.1).",
    "Định nghĩa các thuật ngữ line balancing: total work content, cycle time Tc, service time, bottleneck, balance delay/loss.",
    "Áp dụng công thức line balancing: Tc = T ÷ Q, Nmin = Σti ÷ Tc, TTB, dj, balance loss L%; và bản Groover đầy đủ (Ts = Tc − Tr, Eb = Twc ÷ (w×Ts), Eb + d = 1).",
    "Phân biệt 2 loại bài toán line balancing (given Tc → min stations; given N → min Tc).",
    "Áp dụng heuristic Kilbridge–Wester để cân chuyền và tính balance loss (worked example 21 elements, L% = 0.69%).",
    "Phân biệt ranked positional weights & largest candidate rule; giải thích cycle time modification.",
    "Nêu improvement/support techniques cho LB và các quy tắc bố trí quality inspection trên flow line.",
  ],
  knowledgeMap: { /* xem mục 2 */ },
  sections: [ /* s1..s12 */ ],
  questions: [ /* q01..q12 (5 options A–E) */ ],
  status: "ready",
  source:
    "Manufacturing Systems — slide 'Chapter 5 Mass Production' (Dr. Le Phuoc Luong, 81 slide) cho notation exam-facing + worked example + history/principles/QI + ebook Groover, Automation, Production Systems & CIM 4e, §2.3.3 (p.36–37, Fig 2.7) và Ch.15 'Manual Assembly Lines' (p.398–407, Eq 15.2/15.7/15.11/15.14/15.15) cho định nghĩa & công thức line balancing chuẩn.",
};
```

---

## 2. knowledgeMap (cây 3 tầng)

`engine: "flow"`, `layout: "tree"`, `collapsible: true`.

```ts
knowledgeMap: {
  engine: "flow",
  layout: "tree",
  collapsible: true,
  caption:
    "Mass = cân bằng chuyền: (A) định vị & nền tảng (vì sao mass rẻ), (B) line balancing cơ bản (công thức), (C) thuật toán & worked example. Bấm node để mở chi tiết.",
  nodes: [
    { id: "mass", label: "Mass Production", group: "concept", sectionId: "s1",
      detail: "High volume/low variety; lợi thế đến từ chuẩn hóa + cân bằng chuyền." },

    { id: "g_base", label: "A. Định vị & nền tảng", group: "concept", parent: "mass", sectionId: "s1",
      detail: "Quantity vs flow-line, history, 4 nguyên tắc, prerequisites, classification." },
    { id: "g_lb", label: "B. Line balancing cơ bản", group: "concept", parent: "mass", sectionId: "s6",
      detail: "Terminologies + công thức Tc/Nmin/L% + 2 loại bài toán." },
    { id: "g_algo", label: "C. Thuật toán & worked example", group: "concept", parent: "mass", sectionId: "s9",
      detail: "Kilbridge–Wester, RPW, largest candidate, QI location." },

    // Nhóm A
    { id: "t_pos", label: "Định vị: quantity vs flow-line", group: "term", parent: "g_base", sectionId: "s1",
      detail: "High volume/low variety; single/mixed-model; product layout." },
    { id: "t_history", label: "Nền tảng lịch sử", group: "term", parent: "g_base", sectionId: "s2",
      detail: "Division of labor + interchangeable parts + standardization → economies of scale." },
    { id: "t_principles", label: "4 nguyên tắc flow-line", group: "term", parent: "g_base", sectionId: "s3",
      detail: "Workflow, interchangeable, min distance, division of operation." },
    { id: "t_prereq", label: "Prerequisites", group: "term", parent: "g_base", sectionId: "s4",
      detail: "Mass demand + demand stability + reliability/handling/design." },
    { id: "t_class", label: "Classification (Table 5.1)", group: "term", parent: "g_base", sectionId: "s5",
      detail: "Transfer/assembly; single/multi/mixed-model." },

    // Nhóm B
    { id: "t_terms", label: "Terminologies LB", group: "term", parent: "g_lb", sectionId: "s6",
      detail: "Total work content, cycle time, service time, bottleneck, balance loss." },
    { id: "t_formula", label: "Công thức cốt lõi", group: "term", parent: "g_lb", sectionId: "s7",
      detail: "Tc = T÷Q, Nmin = Σti÷Tc, L% = (N×Tc−Σti)÷(N×Tc)." },
    { id: "t_two", label: "2 loại bài toán LB", group: "term", parent: "g_lb", sectionId: "s8",
      detail: "Given Tc → min stations; given N → min Tc." },

    // Nhóm C
    { id: "t_kw", label: "Kilbridge–Wester", group: "term", parent: "g_algo", sectionId: "s9",
      detail: "Heuristic cột; worked example 21 elements, L% = 0.69%." },
    { id: "t_rpw", label: "RPW & largest candidate", group: "term", parent: "g_algo", sectionId: "s10",
      detail: "Ranked positional weights; largest candidate; cycle time modification." },
    { id: "t_improve", label: "Improvement & QI location", group: "term", parent: "g_algo", sectionId: "s11",
      detail: "Kỹ thuật cải thiện LB + vị trí quality inspection." },
  ],
  edges: [
    { from: "mass", to: "g_base" }, { from: "mass", to: "g_lb" }, { from: "mass", to: "g_algo" },
    { from: "g_base", to: "t_pos" }, { from: "g_base", to: "t_history" }, { from: "g_base", to: "t_principles" }, { from: "g_base", to: "t_prereq" }, { from: "g_base", to: "t_class" },
    { from: "g_lb", to: "t_terms" }, { from: "g_lb", to: "t_formula" }, { from: "g_lb", to: "t_two" },
    { from: "g_algo", to: "t_kw" }, { from: "g_algo", to: "t_rpw" }, { from: "g_algo", to: "t_improve" },
  ],
},
```

> Lưu ý: s12 (QI location) gộp vào node `t_improve` (s11) để cây gọn; s12 vẫn là section riêng trong `sections`.

---

## 3. Bối cảnh số liệu (VERIFIED — hard theory, trích nguồn)

| Dữ kiện | Giá trị | Nguồn | Tag |
|---|---|---|---|
| Adam Smith — division of labor (kim) | Thợ có huấn luyện & làm chung: **48.000 kim/ngày**; làm riêng, không huấn luyện: **< 20 kim/ngày** | slide 11–12/81 | VERIFIED (ví dụ slide) |
| North pistol contract (1813) | **20.000** súng, mọi component interchangeable | slide 13/81 | VERIFIED (ví dụ slide) |
| Eli Terry — American system (đồng hồ) | Đạt **10.000 units/năm** → giá **$15/chiếc** (trước đó $50–$60) | slide 14/81 | VERIFIED (ví dụ slide) |
| Kilbridge–Wester worked example | 21 work elements; TC = **36**; Σti = **143**; N = **4** trạm; **L% = (4×36 − 143) ÷ (4×36) × 100 = 0.69%** | slide 35–48/81 | VERIFIED |
| RPW / largest candidate example | TC = **0.55**; Σ = 1.97; N = 4; **L = 10.4%** | slide 55–63/81 | VERIFIED |
| Cycle time modification | Giảm TC còn **0.53** (WS chậm nhất) → **L = 7%** | slide 74/81 | VERIFIED |
| Groover Example 15.1 (minh họa công thức đầy đủ) | Demand 100.000/năm, 50 wk × 5 shift × 7.5 hr; Twc = **4.0 min**; Rp = **53.33 units/hr**; uptime E = 0.96 → Tc = **1.08 min**; Tr = 0.08 → Ts = **1.00 min**; w* = 4.0÷1.08 = 3.7 → **4 workers** | Groover p.403–404 | VERIFIED |

> Notation: `× ÷ − ^ ( )`; dấu nghìn dạng `10.000`/`48.000` như slide; thời gian giữ `min`.

---

## 4. Sections (s1 → s12)

> Mỗi section: `id`, `heading`, `blocks[]`, `keyTerms[]`. Ghi nguồn (slide X/81 hoặc Groover p.XX) trong callout. Mỗi section có ≥1 bảng/flow/formula/calc.

### TẦNG A — Định vị & nền tảng

#### s1 — Mass = high volume/low variety (NEO LENS)
- **comparisonBlock** "Hai dạng mass production (Groover §2.3.3)" — columns `["Dạng", "Cách làm", "Ví dụ / layout"]`; rows:
  - "Quantity production": cells `["Mass production một loại part trên máy đơn (stamping press + special tooling)", "Process layout hoặc máy chuyên; part rời"]`
  - "Flow-line production": cells `["Nhiều workstation nối tiếp; part di chuyển qua chuỗi để hoàn thành", "Product layout (dây chuyền) — vd assembly line ô tô, đồ gia dụng"]`
- **calloutBlock** `"key"` "Định vị mass" — "Mass ngồi ở đầu CAO của phổ variety↔quantity (Q > 10.000, variety thấp): thiết bị dedicated, demand rate cao (Groover Fig 2.7). Pure flow-line = single-model line (mọi sản phẩm giống hệt); thêm biến thể option/trim = mixed-model line (soft variety — vd ô tô hiện đại) (Groover p.36–37)."
- **keyTerms:** mass production, quantity production, flow-line production, product layout, single-model / mixed-model line.

#### s2 — Nền tảng lịch sử: vì sao mass rẻ
- **comparisonBlock** "Ba trụ làm nên mass production" — columns `["Trụ", "Nội dung", "Bằng chứng lịch sử"]`; rows:
  - "Division of labor": cells `["Chia nhỏ việc, mỗi người làm một tác vụ chuyên biệt (Adam Smith, 'Wealth of Nations', 1746)", "Thợ chung + huấn luyện: 48.000 kim/ngày; làm riêng, không huấn luyện: < 20 kim/ngày"]`
  - "Interchangeable parts": cells `["Component chuẩn hóa, độ tin cậy cao → lắp lẫn nhau được", "North (1813): hợp đồng 20.000 súng, mọi part interchangeable"]`
  - "Standardization → economies of scale": cells `["Chuẩn hóa + volume lớn → chi phí/đơn vị giảm mạnh", "American system: Eli Terry đạt 10.000 đồng hồ/năm → $15/chiếc (trước $50–60)"]`
- **calloutBlock** `"insight"` "Móc nối Topic 4" — "$50–60 → $15 chính là ví dụ đồng hồ ở Topic 4: đây là mặt định lượng của 'economies of scale'. Interchangeable parts là điều kiện KỸ THUẬT để cân bằng chuyền — không lắp lẫn được thì không chia việc thành trạm được (slide 11–15/81)."
- **keyTerms:** division of labor, interchangeable parts, standardization, economies of scale, American system of manufacture.

#### s3 — 4 nguyên tắc flow-line production
- **comparisonBlock** "4 nguyên tắc flow-line (slide 5.2)" — columns `["Nguyên tắc", "Nội dung"]`; rows:
  - "1. Principle of workflow": cells `["Workflow/materials/WIP chảy mượt & liên tục; giảm non-operative motions; các operation diễn ra song song — phụ thuộc line balancing"]`
  - "2. Interchangeable parts": cells `["Component chuẩn (standard set specifications) để lắp lẫn — nền của bài toán line balancing"]`
  - "3. Minimum distance moved": cells `["Cắt giảm di chuyển; tối đa hóa dùng không gian/layout; tập trung vào vị trí giữa các workstation liên tiếp"]`
  - "4. Division of operation": cells `["Chia process thành các work element; không bắt buộc nhưng là yếu tố quan trọng khi thiết kế chuyền; phụ thuộc technology & cấu trúc item"]`
- **keyTerms:** workflow, interchangeable parts, minimum distance moved, division of operation.

#### s4 — Prerequisites của mass & flow-line
- **flowBlock** `s4` "Điều kiện tiên quyết để chọn mass" layout `tree`, nodes (parent set):
  - `s4_root` "Prerequisites" (concept) — "Điều kiện để áp dụng mass & flow-line production."
  - `s4_demand` "Mass demand" (parent `s4_root`) — "Phải có nhu cầu lớn — nền của high volume."
  - `s4_stable` "Demand stability" (parent `s4_root`) — "Nhu cầu ổn định — dây chuyền dedicated không chịu được cầu dao động mạnh."
  - `s4_other` "Điều kiện khác" (parent `s4_root`) — "Line balancing (phát hiện bottleneck), equipment reliability, materials handling, product design."
  - edges: `s4_root→s4_demand`, `s4_root→s4_stable`, `s4_root→s4_other`. caption: "Hai điều kiện quyết định là mass demand + demand stability; phần còn lại là điều kiện hỗ trợ (slide 5.3)."
- **calloutBlock** `"note"` "Vì sao stability quan trọng" — "Bất kỳ trì hoãn nào trong chuyển giao materials/WIP đều làm gián đoạn cả chuyền. Line balancing là yếu tố quan trọng để phát hiện bottleneck; chọn loại chuyền phụ thuộc loại item, tính khả thi sản xuất & kinh tế (slide 9/81)."
- **keyTerms:** mass demand, demand stability, equipment reliability, materials handling, bottleneck.

#### s5 — Classification of production lines (Table 5.1)
- **comparisonBlock** "Phân loại chuyền (Table 5.1)" — columns `["Loại chuyền", "Item", "Volume/Work flow", "Equipment & jobs assignment"]`; rows:
  - "Automation — single item": cells `["Single item (1)", "None changing / regular work flow", "Unchanged"]`
  - "Automation — multi item": cells `["Multi-item (>1)", "Batch changing / batch work flow", "Batch"]`
  - "Manual assembly — single item": cells `["Single item (1)", "None / job characteristics", "Unchanged"]`
  - "Manual assembly — multi item": cells `["Multi-item (>1)", "Batch / job characteristics", "Batch"]`
  - "Manual assembly — mixed item": cells `["Mixed-item (>1)", "Continuous", "Batch"]`
- **calloutBlock** `"note"` "Single/Multi/Mixed-model" — "Single-model: chỉ 1 item. Multi-model: nhiều item tương tự, mỗi loại làm theo lô (lô lớn ≈ single-model, lô nhỏ ≈ mixed-model). Mixed-model: nhiều loại item chạy đồng thời trên cùng chuyền (slide 16/81)."
- **keyTerms:** transfer line, assembly line, single-model line, multi-model line, mixed-model line.

### TẦNG B — Line balancing cơ bản (định lượng)

#### s6 — Terminologies của line balancing
- **comparisonBlock** "Thuật ngữ line balancing" — columns `["Thuật ngữ", "Nghĩa"]`; rows:
  - "Total work content (Twc)": cells `["Tổng công việc của sản phẩm = productive work + non-productive work; = Σ thời gian các work element (Groover Eq 15.11)"]`
  - "Work element (ti / Tek)": cells `["Đơn vị công việc nhỏ nhất hợp lý, không chia nhỏ hơn được (minimum rational work element)"]`
  - "Service/processing time (Tsi)": cells `["Thời gian một workstation hoàn thành các job được gán cho nó"]`
  - "Cycle time (Tc)": cells `["Thời gian tối đa cho phép ở BẤT KỲ workstation nào — nhịp của chuyền"]`
  - "Bottleneck": cells `["Trạm có service time lớn nhất (Max Tsi) → quyết định cycle time của cả chuyền"]`
  - "Balance delay / balance loss": cells `["Chênh giữa tổng thời gian thực tế và cycle time ở các trạm — phần thời gian mất do cân chuyền không hoàn hảo"]`
- **calloutBlock** `"key"` "Bottleneck = nhịp chuyền" — "Vì mọi trạm chạy đồng bộ theo cùng cycle time, trạm chậm nhất (bottleneck) áp đặt nhịp cho cả chuyền; các trạm nhanh hơn sẽ có idle time. Mục tiêu line design: làm service time các trạm gần bằng nhau (Groover p.401)."
- **keyTerms:** total work content, minimum rational work element, service time, cycle time, bottleneck, balance delay.

#### s7 — Công thức cốt lõi (formula)
- **formulaBlock** `"Tc = T ÷ Q"` legend `[{symbol:"Tc", meaning:"cycle time (nhịp chuyền)"},{symbol:"T", meaning:"tổng thời gian cần để sản xuất Q đơn vị"},{symbol:"Q", meaning:"số đơn vị (sản lượng mục tiêu)"}]` note `"Notation slide (exam-facing). Bản Groover đầy đủ: Tc = 60 × E ÷ Rp (E = uptime efficiency, Rp = production rate)."`
- **formulaBlock** `"Nmin = Σti ÷ Tc  (làm tròn LÊN)"` legend `[{symbol:"Nmin", meaning:"số workstation lý thuyết tối thiểu"},{symbol:"Σti", meaning:"total work content = tổng thời gian work element"}]` note `"Groover Eq 15.7: w* = MinInt ≥ Twc ÷ Ts. Luôn làm tròn LÊN vì không thể có nửa trạm."`
- **formulaBlock** `"L% = (N × Tc − Σti) ÷ (N × Tc) × 100"` legend `[{symbol:"L%", meaning:"balance loss (% thời gian mất do cân chuyền)"},{symbol:"N", meaning:"số workstation thực tế"},{symbol:"D = N×Tc − Σti", meaning:"total balance delay"}]` note `"Tương đương balance delay Groover Eq 15.15: d = (w×Ts − Twc) ÷ (w×Ts); và Eb + d = 1 (Eb = balance efficiency). Slide bỏ repositioning time nên Ts = Tc."`
- **calcBlock** "Groover Example 15.1 — đọc công thức qua số thật" steps:
  - `{ label: "Total work content", expr: "Twc = Σ Tek = 4.0 min" }`
  - `{ label: "Production rate (100.000 units/năm; 50 wk × 5 shift × 7.5 hr)", expr: "Rp = 100000 ÷ (50 × 5 × 7.5) = 53.33 units/hr" }`
  - `{ label: "Cycle time (uptime E = 0.96)", expr: "Tc = 60 × 0.96 ÷ 53.33 = 1.08 min" }`
  - `{ label: "Số trạm lý thuyết", expr: "w* = 4.0 ÷ 1.08 = 3.7 → làm tròn lên = 4 workers" }`
  - `{ label: "Service time cân chuyền (Tr = 0.08)", expr: "Ts = Tc − Tr = 1.08 − 0.08 = 1.00 min" }`
  - result `"Cần tối thiểu 4 trạm; cân chuyền về Ts = 1.00 min/trạm"`, meaning `"Nmin cho biết sàn số trạm; bottleneck ≤ Ts thì chuyền đạt Tc."`, implication `"Slide dùng phiên bản gọn Tc = T ÷ Q (bỏ E, Tr); Groover thêm uptime & repositioning cho sát thực tế (Groover p.403–404)."` (VERIFIED)
- **keyTerms:** cycle time (Tc), theoretical minimum stations, balance loss, balance efficiency (Eb), repositioning time (Tr).

#### s8 — Hai loại bài toán line balancing
- **comparisonBlock** "2 loại bài toán LB (slide 5.7)" — columns `["Loại", "Cho trước", "Mục tiêu"]`; rows:
  - "Loại 1": cells `["Cycle time TC", "Gán work elements để TỐI THIỂU số workstation & balance loss; phân bổ balance delay đều nhất có thể"]`
  - "Loại 2": cells `["Số workstation N", "Gán work elements để TỐI THIỂU cycle time (tối đa output/utilization máy)"]`
- **calloutBlock** `"note"` "Ràng buộc chung" — "Cả hai bài toán đều phải thỏa: (1) tổng thời gian work element gán cho một trạm ≤ Tc (Σ Tek ≤ Ts), và (2) tuân precedence constraints (thứ tự bắt buộc, biểu diễn bằng precedence diagram) (Groover Eq 15.18)."
- **keyTerms:** line balancing problem, precedence constraint, precedence diagram, utilization.

### TẦNG C — Thuật toán & worked example

#### s9 — Kilbridge–Wester method (+ worked example)
- **calloutBlock** `"key"` "Ý tưởng Kilbridge–Wester" — "Heuristic (Jackson 1956 / Kilbridge & Wester): xếp work element vào các CỘT theo precedence diagram, rồi lần lượt gán các job (ưu tiên job cột trước, dùng movable jobs) vào từng workstation sao cho tổng ≤ TC, tối thiểu số trạm. Áp cho bài toán nhỏ; bài lớn cần phần mềm (slide 30–34/81)."
- **calcBlock** "Worked example — cân chuyền 21 work elements (TC = 36)" steps:
  - `{ label: "Dữ liệu", expr: "21 work elements, tổng Σti = 143, cycle time cho trước TC = 36" }`
  - `{ label: "Gán theo cột (Kilbridge–Wester)", expr: "Station 1 = 35, Station 2 = 36, Station 3 = 36, Station 4 = 36 (phần còn lại)" }`
  - `{ label: "Số trạm đạt được", expr: "N = 4 workstations" }`
  - `{ label: "Balance loss", expr: "L% = (4 × 36 − 143) ÷ (4 × 36) × 100 = (144 − 143) ÷ 144 × 100" }`
  - result `"L% = 0.69%"`, meaning `"Chỉ 0.69% thời gian bị mất — cân chuyền gần như hoàn hảo với TC = 36."`, implication `"N nhỏ nhất + balance loss nhỏ nhất đi cùng nhau khi cho trước TC (slide 35–48/81)."` (VERIFIED)
- **keyTerms:** Kilbridge–Wester method, column, movable job, cumulative time.

#### s10 — Ranked positional weights & largest candidate rule
- **comparisonBlock** "Hai heuristic khác" — columns `["Heuristic", "Quy tắc gán", "Nguồn / ghi chú"]`; rows:
  - "Ranked positional weights (RPW)": cells `["Tính positional weight mỗi job = thời gian của nó + tổng thời gian các job đứng sau (theo precedence); gán theo weight giảm dần, thỏa precedence & ≤ Tc", "Helgeson & Birnie (1961), General Electric; nhanh & khá chính xác"]`
  - "Largest candidate rule": cells `["Bắt đầu WS1, luôn chọn job có processing time LỚN NHẤT trong tập job khả thi (thỏa precedence, ≤ remain time)", "Nhanh cho bài nhỏ; bài lớn dễ kẹt local optimum"]`
- **calcBlock** "Example — RPW/largest candidate (TC = 0.55)" steps:
  - `{ label: "Dữ liệu", expr: "11 work elements, Σ = 1.97, cycle time TC = 0.55" }`
  - `{ label: "Kết quả gán", expr: "N = 4 workstations" }`
  - `{ label: "Balance loss", expr: "L = 10.4%  (TC = 0.55)" }`
  - `{ label: "Cycle time modification", expr: "WS chậm nhất chỉ 0.53 → giảm TC còn 0.53 → L = 7%" }`
  - result `"L giảm 10.4% → 7% khi siết TC về 0.53"`, meaning `"Giảm cycle time về đúng bottleneck cắt bớt idle time."`, implication `"Giảm TC tiếp thì số workstation tăng — có giới hạn đánh đổi (slide 55–74/81)."` (VERIFIED)
- **keyTerms:** ranked positional weights, positional weight, largest candidate rule, cycle time modification.

#### s11 — Improvement & support techniques
- **comparisonBlock** "Kỹ thuật cải thiện & hỗ trợ LB (slide 5.7)" — columns `["Nhóm", "Kỹ thuật"]`; rows:
  - "Improvement": cells `["Improved work methods (giảm processing time); changed machining speeds (transfer lines); increased operator performance ở bottleneck; diversion of excess items; movement of workers"]`
  - "Support": cells `["Parallel workstations / thêm workers (overtime, thêm trạm giống nhau, thêm thợ ở bottleneck); xử lý khi cycle time < processing time; division of work elements (tách 1 element ra 2 trạm để giảm WS time)"]`
- **calloutBlock** `"note"` "Nguyên tắc đánh đổi" — "Số workstation tối thiểu ≈ balance loss tối thiểu. Muốn tăng output (giảm Tc) thường phải thêm trạm/thợ; muốn giảm chi phí thì siết balance loss. Longer-processing-time job nên gán trước job ngắn (job ngắn linh hoạt hơn khi cân) (slide 49–78/81)."
- **keyTerms:** parallel workstations, division of work elements, improved work methods, operator performance.

#### s12 — Location of quality inspection in flow lines
- **comparisonBlock** "Đặt quality inspection (QI) ở đâu trên chuyền" — columns `["Đặt QI", "Lý do"]`; rows:
  - "Trước WS có operational cost cao": cells `["Tránh dồn chi phí cao lên phôi lỗi"]`
  - "Trước chuỗi WS khó kiểm/khó control": cells `["Chặn lỗi trước khi khó phát hiện"]`
  - "Sau WS có tỷ lệ lỗi cao": cells `["Bắt lỗi ngay tại nguồn phát sinh"]`
  - "Trước WS mà lỗi trước đó khó phát hiện (painting/assembly)": cells `["Lỗi bị che sau khi sơn/lắp"]`
  - "Trước WS mà phôi lỗi không thể rework": cells `["Tránh mất trắng phôi"]`
  - "Trước điểm chuyển giao trách nhiệm sang stage sau": cells `["Chốt chất lượng trước khi bàn giao"]`
- **calloutBlock** `"insight"` "QI = chốt chặn dòng lỗi" — "Trên flow line, một phôi lỗi trôi xuống trạm sau sẽ cộng dồn chi phí. Đặt QI đúng chỗ (trước WS đắt, trước điểm khó kiểm, sau WS hay lỗi) là cách rẻ nhất để chặn lỗi lan — liên hệ tư duy 'chặn non-value sớm' (slide 79–81/81)."
- **keyTerms:** quality inspection, defective rate, rework, responsibility transfer.

---

## 5. Quiz (12 câu — concept + application + calc; 5 options A–E; bám tư duy đề mẫu)

> Mỗi câu: `id`, `stem` (EN), 5 `options` (id "a".."e", `rationale` Cơ chế→Bẫy→Khóa VI + term EN), `difficulty`, `conceptTested`, `takeaway` (VI). Không cố định đáp án đúng ở một vị trí. Câu calc dùng đúng số VERIFIED.

1. **q01** (intermediate) — *Quantity vs flow-line production.* Đúng: flow-line = nhiều WS nối tiếp, part di chuyển qua chuỗi (product layout, assembly line); quantity production = mass một part trên máy đơn. Bẫy: đảo hai; gán product layout cho quantity production.
2. **q02** (basic) — *Nền tảng mass.* Đúng: interchangeable parts + division of labor + standardization → economies of scale. Bẫy: coi mass rẻ chỉ nhờ máy nhanh; bỏ interchangeable parts.
3. **q03** (intermediate, application) — *Adam Smith needle.* Cho ví dụ 48.000 vs <20 kim/ngày. Đúng: minh họa division of labor + huấn luyện → năng suất nhảy vọt. Bẫy: gán cho interchangeable parts; nghĩ do máy móc.
4. **q04** (intermediate) — *4 nguyên tắc flow-line.* Đúng: workflow, interchangeable parts, minimum distance moved, division of operation. Bẫy: thêm "maximize inventory"; coi division of operation là bắt buộc tuyệt đối.
5. **q05** (intermediate) — *Prerequisites.* Đúng: mass demand + demand stability là điều kiện quyết định. Bẫy: coi high skill labor là prerequisite chính; bỏ demand stability.
6. **q06** (intermediate) — *Bottleneck & cycle time.* Đúng: trạm có service time lớn nhất (bottleneck) quyết định cycle time cả chuyền; trạm nhanh hơn có idle time. Bẫy: nghĩ cycle time = trung bình các trạm; coi bottleneck là trạm nhanh nhất.
7. **q07** (advanced, calc) — *Cycle time.* Cho T và Q (hoặc Groover: Rp, E). Đúng: Tc = T ÷ Q. Distractor: Q÷T, T×Q, T−Q, T÷(Q×N). takeaway: Tc là nhịp, không phải tổng thời gian.
8. **q08** (advanced, calc) — *Balance loss.* Cho N=4, TC=36, Σti=143. Đúng: L% = (4×36 − 143) ÷ (4×36) × 100 = **0.69%**. Distractor: 143÷144 (=99.3%), (144−143)=1, 143÷36, 4×36÷143. takeaway: balance loss = phần thời gian trạm bị "trống" so với N×Tc.
9. **q09** (advanced, calc) — *Theoretical minimum stations.* Cho Twc=4.0, Tc=1.08. Đúng: Nmin = 4.0 ÷ 1.08 = 3.7 → làm tròn LÊN = **4**. Distractor: 3 (làm tròn xuống), 3.7 (không tròn), 1.08÷4.0, 4×1.08. takeaway: luôn tròn lên.
10. **q10** (intermediate) — *2 loại bài toán LB.* Đúng: cho Tc → min số trạm; cho N → min Tc (max output). Bẫy: đảo mục tiêu; nghĩ cả hai đều tối thiểu Tc.
11. **q11** (intermediate) — *Heuristic LB.* Đúng: RPW gán theo positional weight (thời gian job + các job sau) giảm dần; largest candidate gán job dài nhất trước; cả hai thỏa precedence. Bẫy: coi RPW = chọn job ngắn nhất; bỏ precedence constraint.
12. **q12** (intermediate) — *QI location.* Đúng: đặt QI trước WS operational cost cao / trước điểm khó kiểm / sau WS tỷ lệ lỗi cao. Bẫy: đặt QI cuối chuyền cho mọi trường hợp; coi QI làm tăng balance loss nên bỏ.

---

## 6. Lưu ý thực thi (Codex)

- KHÔNG sửa `content/types.ts`. Dùng `flowBlock`/`calloutBlock`/`comparisonBlock`/`formulaBlock`/`calcBlock` (đã có sẵn).
- **bigIdea format mới:** `bigIdea` = compass 1 câu; thêm `bigIdeaPillars` (4 trụ) như mục 1.
- Quiz: mỗi câu **5 options** (id "a".."e"), đúng **1** `isCorrect`; đáp án rải vị trí. 3 câu calc (q07/q08/q09) dùng đúng số: Tc=T÷Q; L%=0.69% (N=4,TC=36,Σ=143); Nmin=3.7→4 (Twc=4.0,Tc=1.08).
- Notation: `× ÷ − ^ ( )` (KHÔNG `·`); dấu nghìn `10.000`/`48.000`; giữ `min`, `$`.
- `formulaBlock` legend dạng `{symbol, meaning}[]`; `calcBlock` steps `{label, expr}` (+ `note?`).
- `comparisonBlock` `cells = columns − 1`: s1/s2/s8/s10 = 3 cột → 2 cells; s3/s6/s11/s12 = 2 cột → 1 cell; s5 = 4 cột → 3 cells. Kiểm từng bảng.
- Flow: knowledgeMap + s4 = `tree` (set `parent`); node id `_`; edge label ngắn.
- `status: "ready"` chỉ giữ sau khi Lớp A pass (mục 7).

---

## 7. Verify (Codex chạy)

```bash
npx tsc --noEmit
```
- Phải pass (0 error).
- `comparisonBlock` mọi row `cells.length === columns.length − 1` (s5: 4 cột → 3 cells).
- `formulaBlock`/`calcBlock`: đúng signature; số khớp mục 3.
- Flow: mọi `edges.from/to` tồn tại; node id `_`; knowledgeMap + s4 (`tree`) set `parent`.
- Quiz: mỗi câu 5 options, đúng 1 `isCorrect`; q08 = 0.69%, q09 = 4, q07 = Tc=T÷Q.
- Sau tsc pass: render-check `/manufacturing-systems/topic-05` (375/768/1440) — bigIdea compass+pillars + knowledgeMap + 12 section (formula/calc render đúng) + 12 quiz; không horizontal-scroll. Báo Chaliyah. **KHÔNG commit.**

---

## 8. Coverage matrix (Lớp B — "KHÔNG SÓT kiến thức")

Đối chiếu slide Chapter 5 (81 slide) + Groover §2.3.3/Ch.15. ✅ Có · ⬜ Thiếu · ⚠️ Rút gọn.

| # | Mục | Nguồn | Section | TT |
|---|---|---|---|---|
| 1 | Mass = high volume/low variety; quantity vs flow-line; product layout; single/mixed-model | Groover §2.3.3 (p.36–37) + slide 5.1/5.6 | s1 | ✅ |
| 2 | Division of labor (Adam Smith needle 48.000 vs <20) | slide 11–12/81 | s2 | ✅ |
| 3 | Interchangeable parts (North pistol 20.000) | slide 13/81 | s2 | ✅ |
| 4 | Standardization → economies of scale (Eli Terry $50–60→$15) | slide 14/81 | s2 | ✅ |
| 5 | 4 nguyên tắc flow-line (workflow/interchangeable/min distance/division) | slide 5.2 | s3 | ✅ |
| 6 | Prerequisites (mass demand + stability + reliability/handling/design) | slide 5.3 | s4 | ✅ |
| 7 | Classification Table 5.1 (transfer/assembly; single/multi/mixed-model) | slide 5.4 | s5 | ✅ |
| 8 | Terminologies (total work content, cycle time, service time, bottleneck, balance delay) | slide 5.6 + Groover Ch.15 | s6 | ✅ |
| 9 | Công thức: Tc=T÷Q, Nmin=Σti÷Tc, TTB, dj, L% | slide 5.7 | s7 | ✅ |
| 10 | Bản Groover đầy đủ: Ts=Tc−Tr, Eb=Twc÷(w×Ts), Eb+d=1, Example 15.1 | Groover p.401–404 | s7 | ✅ |
| 11 | 2 loại bài toán LB + precedence constraint/diagram | slide 5.7 + Groover 15.2.3 | s8 | ✅ |
| 12 | Kilbridge–Wester + worked example (21 elements, TC=36, L%=0.69%) | slide 30–48/81 | s9 | ✅ |
| 13 | Ranked positional weights (Helgeson–Birnie 1961) | slide 52–63/81 | s10 | ✅ |
| 14 | Largest candidate rule + cycle time modification (TC=0.55→0.53, L 10.4%→7%) | slide 64–74/81 | s10 | ✅ |
| 15 | Improvement & support techniques + division of work elements | slide 75–78/81 | s11 | ✅ |
| 16 | Location of quality inspection (7 quy tắc) | slide 79–81/81 | s12 | ✅ |

> 16/16 mục phủ đủ. Groover cho định nghĩa + công thức chuẩn (Ch.15) + Example 15.1; slide cho notation exam-facing + worked example + history/principles/QI. Mọi số VERIFIED trích nguồn; công thức = hard theory bám nguồn, bigIdea/insight = soft lens.
