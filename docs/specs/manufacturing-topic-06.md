# Spec: Manufacturing Topic 06 — Group Technology

> **Loại:** Soạn mới topic hoàn chỉnh (rich teaching mode), thay placeholder `topic-06`.
> **File cần sửa:** `content/manufacturing.ts` (helper đã có sẵn).
> **Nguồn (Chaliyah chốt — KHỚP NHIỀU, dùng tối đa sách + slide phụ):**
> - **Ebook Groover Ch.18 "Group Technology and Cellular Manufacturing"** (p.503–516) = chuẩn định nghĩa: part families & machine groups, classification & coding, production flow analysis, composite part concept, 4 loại machine cell, và **§18.4 (rank-order clustering + Hollier)**.
> - **Slide `Chapter 6 Group technology.pdf`** (lecturer Đặng Võ Hùng, 31 slide) = exam-facing: **Opitz worked example (item → coding 15100)**, danh sách advantages/benefits, 3 loại cell (a/b/c), limitations.
> - **§18.4 (rank-order clustering, Hollier) = KIẾN THỨC THÊM TRONG SÁCH** (Chaliyah chốt lấy nhưng **MARK rõ** cho người học biết đây là phần nâng cao sách, KHÔNG có trong slide/đề).
> - **Ranh giới hard/soft (workflow §0):** định nghĩa/số/thuật toán = hard theory bám nguồn + trích trang; bigIdea/compass/pillars/callout `insight` = soft lens.
> **Quy ước:** diễn giải VI + term EN; quiz `stem`/`options` EN, `rationale`/`takeaway` VI (Cơ chế→Bẫy→Khóa); quiz **5 options A–E**; notation `× ÷ − ^ ( )`.
> **bigIdea format:** compass (1 câu) + `bigIdeaPillars` (3–4 trụ).
> **Verify:** `npx tsc --noEmit` pass; render-check; KHÔNG commit.

---

## 0. Wiring (BẮT BUỘC làm trước)

Helper đã có sẵn. Topic 06 **có 1 câu calc nhẹ** (Opitz coding) + §18.4 dùng `calcBlock` (binary reading) → dùng `calcBlock`.

1. Tạo `const topic06: Chapter = { ... }` (đặt ngay sau `topic05`).
2. Sửa assembly: thêm `if (order === 6) return topic06;`.

**Renderer contract:** `comparisonBlock` `columns.length === rows[i].cells.length + 1`; flow `edges.from/to` trỏ node có thật cùng block; node id `_`; flow layout chỉ `horizontal`/`tree` (tree set `parent`); edge label NGẮN.

---

## 1. Khung Chapter

```ts
const topic06: Chapter = {
  slug: "topic-06",
  order: 6,
  title: "Topic 06 — Group Technology",
  bigIdea:
    "Nhìn ra cái GIỐNG NHAU giữa các part → gom thành family → thiết kế & sản xuất một lần, hưởng lợi thế quy mô dù volume mỗi part thấp.",
  bigIdeaPillars: [
    { label: "Triết lý", body: "Gom part chia sẻ đặc điểm hình học/quy trình thành part family → tái dùng thiết kế & bố trí máy; economies of scale ngay ở medium production." },
    { label: "Nhận diện family", body: "Visual inspection / classification & coding (Opitz) / production flow analysis (PFA từ route sheets)." },
    { label: "Mã hóa", body: "Design vs manufacturing attributes; hierarchical (monocode) vs chain-type (polycode)." },
    { label: "Bố trí cell", body: "Composite part → machine cell (single / group-manual U-shaped / group semi-integrated); cầu nối batch → gần mass." },
  ],
  learningObjectives: [
    "Giải thích triết lý group technology: gom part thành family để tái dùng thiết kế & sản xuất, hưởng economies of scale dù volume mỗi part thấp.",
    "Phân biệt 2 kiểu part family (same shape/diff production; diff shape/same production) và 3 cách nhận diện: visual inspection, classification & coding, production flow analysis (PFA).",
    "Nêu lợi ích của classification & coding và 3 cơ sở coding (design / manufacturing / both attributes).",
    "Phân biệt 2 cấu trúc coding: hierarchical (monocode) vs chain-type (polycode); giải thích Opitz system (form code + supplementary code + extension).",
    "Áp dụng Opitz để mã hóa một part đơn giản (worked example → 15100).",
    "Giải thích composite part concept và cách một machine cell sản xuất cả family bằng cách bỏ operation cho feature không có.",
    "Phân biệt các loại machine cell (single-machine / group-machine manual / group semi-integrated; + Groover: flexible manufacturing cell → Topic 7).",
    "Nêu benefits & limitations của group technology.",
    "(Nâng cao — Groover §18.4) Giải thích rank-order clustering trên part-machine incidence matrix và ý tưởng Hollier method để sắp máy trong cell.",
  ],
  knowledgeMap: { /* xem mục 2 */ },
  sections: [ /* s1..s9 */ ],
  questions: [ /* q01..q12 (5 options A–E) */ ],
  status: "ready",
  source:
    "Manufacturing Systems — slide 'Chapter 6 Group technology' (lecturer Đặng Võ Hùng, 31 slide) cho Opitz worked example + advantages/benefits + cell types + ebook Groover, Automation, Production Systems & CIM 4e, Chapter 18 'Group Technology and Cellular Manufacturing' (p.503–516) cho định nghĩa chuẩn + composite part + §18.4 rank-order clustering/Hollier (đánh dấu kiến thức nâng cao).",
};
```

---

## 2. knowledgeMap (cây 3 tầng + node enrichment)

`engine: "flow"`, `layout: "tree"`, `collapsible: true`.

```ts
knowledgeMap: {
  engine: "flow",
  layout: "tree",
  collapsible: true,
  caption:
    "Group Technology = nhìn ra cái giống nhau để tái dùng: (A) triết lý & part family, (B) classification & coding (Opitz), (C) machine cell design; + node §18.4 là kiến thức THÊM trong sách. Bấm node để mở chi tiết.",
  nodes: [
    { id: "gt", label: "Group Technology", group: "concept", sectionId: "s1",
      detail: "Gom part thành family → tái dùng thiết kế & sản xuất; economies of scale dù volume thấp." },

    { id: "g_phil", label: "A. Triết lý & part family", group: "concept", parent: "gt", sectionId: "s1",
      detail: "Philosophy + 2 kiểu family + 3 cách nhận diện." },
    { id: "g_code", label: "B. Classification & coding", group: "concept", parent: "gt", sectionId: "s3",
      detail: "Advantages, attribute basis, cấu trúc coding, Opitz." },
    { id: "g_cell", label: "C. Machine cell design", group: "concept", parent: "gt", sectionId: "s6",
      detail: "Composite part, loại cell, benefits/limitations." },

    // Nhóm A
    { id: "t_phil", label: "Triết lý GT", group: "term", parent: "g_phil", sectionId: "s1",
      detail: "Part family → tái dùng; integrating design & manufacturing." },
    { id: "t_family", label: "Part family + 3 cách nhận diện", group: "term", parent: "g_phil", sectionId: "s2",
      detail: "Visual inspection / classification & coding / PFA." },

    // Nhóm B
    { id: "t_cc", label: "C&C advantages + attributes", group: "term", parent: "g_code", sectionId: "s3",
      detail: "Design / manufacturing / both attributes." },
    { id: "t_struct", label: "Coding structures", group: "term", parent: "g_code", sectionId: "s4",
      detail: "Hierarchical (monocode) vs chain-type (polycode); Opitz." },
    { id: "t_opitz", label: "Opitz worked example", group: "term", parent: "g_code", sectionId: "s5",
      detail: "Form code → 15100." },

    // Nhóm C
    { id: "t_composite", label: "Composite part concept", group: "term", parent: "g_cell", sectionId: "s6",
      detail: "Part giả định chứa mọi feature của family." },
    { id: "t_celltypes", label: "Types of machine cell", group: "term", parent: "g_cell", sectionId: "s7",
      detail: "Single / group-manual / group semi-integrated (+ FMS → Topic 7)." },
    { id: "t_benefit", label: "Benefits & limitations", group: "term", parent: "g_cell", sectionId: "s8",
      detail: "Lợi ích thiết kế/setup/utilization; hạn chế chi phí C&C & đổi hệ." },

    { id: "t_roc", label: "§18.4 Rank-order clustering (THÊM)", group: "term", parent: "gt", sectionId: "s9",
      detail: "KIẾN THỨC THÊM TRONG SÁCH: part-machine incidence matrix → diagonalized blocks; Hollier." },
  ],
  edges: [
    { from: "gt", to: "g_phil" }, { from: "gt", to: "g_code" }, { from: "gt", to: "g_cell" }, { from: "gt", to: "t_roc" },
    { from: "g_phil", to: "t_phil" }, { from: "g_phil", to: "t_family" },
    { from: "g_code", to: "t_cc" }, { from: "g_code", to: "t_struct" }, { from: "g_code", to: "t_opitz" },
    { from: "g_cell", to: "t_composite" }, { from: "g_cell", to: "t_celltypes" }, { from: "g_cell", to: "t_benefit" },
  ],
},
```

---

## 3. Bối cảnh số liệu / worked example (VERIFIED — hard theory)

| Dữ kiện | Giá trị | Nguồn | Tag |
|---|---|---|---|
| Opitz coding worked example | L/D ratio = 1.5 → vị trí 1 = **1**; both size processing & one size bolt → vị trí 2 = **5**; through hole → vị trí 3 = **1**; không gia công mặt → vị trí 4,5 = **0** ⇒ **Opitz code = 15100** | slide 17–20/31 | VERIFIED |
| Opitz cấu trúc | 12345 (form code, design info) · 6789 (supplementary code: dimension/material/accuracy) · ABCD (extension: process type & sequencing, tùy công ty) | slide 15–17/31 + Groover | VERIFIED |
| Composite part (Table 18.5) | Part giả định gồm **7 design features → 7 manufacturing operations** (turning, facing, grinding, drilling, counterboring, tapping…) | Groover p.507–508, Table 18.5 | VERIFIED |
| §18.4 rank-order clustering (THÊM) | Đọc mỗi hàng ma trận part-machine incidence thành số nhị phân; vd hàng `100100010` = 2^8 + 2^5 + 2^1 = 256 + 32 + 2 = **290**; lặp reorder hàng/cột → **3 part-machine groups** (diagonalized blocks) | Groover p.513–515, Example 18.1 | VERIFIED (nâng cao) |

> Notation `× ÷ − ^ ( )`; giữ term EN.

---

## 4. Sections (s1 → s9)

> Mỗi section: `id`, `heading`, `blocks[]`, `keyTerms[]`. Ghi nguồn (slide X/31 hoặc Groover p.XX). Mỗi section ≥1 bảng/flow/calc.

### TẦNG A — Triết lý & part family

#### s1 — Triết lý Group Technology (NEO LENS)
- **flowBlock** `s1` "Mạch tư duy GT" layout `horizontal`, nodes:
  - `s1_parts` "Nhiều part khác nhau" — "Nhu cầu thay đổi nhanh, nhiều part được thiết kế cùng lúc."
  - `s1_family` "Part family" — "Gom các part chia sẻ đặc điểm hình học/quy trình thành một họ."
  - `s1_composite` "Composite part" — "Part giả định đại diện mọi feature của family."
  - `s1_cell` "Machine cell" — "Bố trí máy để làm cả family → tái dùng."
  - `s1_scale` "Economies of scale" — "Hưởng lợi thế quy mô dù volume mỗi part thấp."
  - edges: `s1_parts→s1_family` label "gom", `s1_family→s1_composite` label "đại diện", `s1_composite→s1_cell` label "bố trí", `s1_cell→s1_scale` label "tái dùng". caption: "GT biến 'nhiều part rời' thành 'một họ tái dùng được' (slide 6.1)."
- **calloutBlock** `"key"` "Vì sao GT quan trọng" — "Triết lý (philosophy): xác định & gom các item cùng specifications thành family để lấy lợi thế trong DESIGN và PRODUCTION. GT tích hợp design & manufacturing; là cầu nối biến batch (Topic 4: volume vừa, variety cao) tiến gần hiệu quả mass, nhờ tái dùng thay vì làm lại từ đầu (slide 6.1, Groover §18.1)."
- **keyTerms:** group technology, part family, composite part, machine cell, economies of scale.

#### s2 — Part family & 3 cách nhận diện
- **comparisonBlock** "Hai kiểu part family" — columns `["Kiểu", "Ý nghĩa"]`; rows:
  - "Same shape, different production": cells `["Hình dạng giống nhau nhưng yêu cầu sản xuất khác (vd độ chính xác, vật liệu khác)"]`
  - "Different shape, same production": cells `["Hình dạng khác nhau nhưng cùng quy trình/nguồn lực sản xuất"]`
- **comparisonBlock** "3 cách nhận diện part family" — columns `["Cách", "Cách làm", "Đánh đổi"]`; rows:
  - "Visual inspection": cells `["Dùng phán đoán, nhìn part hoặc ảnh part để gom nhóm", "Dễ & nhanh, nhưng có thể thiếu chính xác"]`
  - "Classification & coding": cells `["Nhận diện điểm giống/khác rồi gán mã theo coding scheme", "Chính xác & hệ thống, nhưng tốn chi phí xây hệ mã"]`
  - "Production flow analysis (PFA)": cells `["Dùng thông tin trên route sheets để phân nhóm part theo dòng gia công", "Bám dữ liệu thực tế; không cần thiết kế mã"]`
- **keyTerms:** part family, visual inspection, classification and coding, production flow analysis (PFA), route sheet.

### TẦNG B — Classification & coding

#### s3 — Advantages & cơ sở coding
- **comparisonBlock** "Lợi ích của classification & coding" — columns `["Nhóm lợi ích", "Cụ thể"]`; rows:
  - "Thiết kế": cells `["Xác định part family & gom máy dễ; giảm việc thiết kế trùng; cải thiện & nhất quán specifications"]`
  - "Quy trình": cells `["Process design & planning nhanh; áp dụng NC programs dễ; hỗ trợ set-up → giảm setup time & flow time"]`
  - "Quản lý": cells `["Ước lượng equipment/work elements & production cost chính xác; scheduling tốt hơn; tăng utilization máy/tool/người"]`
- **comparisonBlock** "3 cơ sở coding" — columns `["Cơ sở", "Nội dung"]`; rows:
  - "Design attributes": cells `["Hình dạng, kích thước, dung sai, vật liệu…"]`
  - "Manufacturing attributes": cells `["Process, sequence, tooling, thời gian gia công…"]`
  - "Both": cells `["Kết hợp cả design & manufacturing — phổ biến nhất trong thực tế"]`
- **keyTerms:** design attributes, manufacturing attributes, setup time, flow time, utilization.

#### s4 — Cấu trúc coding + Opitz system
- **comparisonBlock** "2 cấu trúc mã (coding structures)" — columns `["Cấu trúc", "Cách hoạt động", "Đặc điểm"]`; rows:
  - "Hierarchical (monocode)": cells `["Giá trị mỗi vị trí PHỤ THUỘC vị trí đứng trước", "Nén nhiều thông tin trong ít ký tự; tập trung vào một đặc tính"]`
  - "Chain-type (polycode)": cells `["Mỗi vị trí CỐ ĐỊNH & độc lập, mang một nghĩa riêng", "Chứa nhiều thông tin hơn; dùng cho đa dạng shape"]`
  - "Mixed": cells `["Kết hợp cả hai", "Phổ biến trong thực tế"]`
- **flowBlock** `s4` "Cấu trúc Opitz code" layout `horizontal`, nodes:
  - `s4_form` "Form code (12345)" — "5 số đầu — design information (hình dạng, tỷ lệ, lỗ…)."
  - `s4_supp` "Supplementary code (6789)" — "4 số — dimension, material, accuracy…"
  - `s4_ext` "Extension (ABCD)" — "4 ký tự — process type & sequencing; tùy từng công ty."
  - edges: `s4_form→s4_supp` label "bổ sung", `s4_supp→s4_ext` label "mở rộng". caption: "Opitz (H. Opitz, Aachen) — một trong các hệ C&C đầu tiên & nổi tiếng. Ngoài ra có Multi-class (Organization for Industrial Research, tới 30 vị trí, cấu trúc hierarchical/tree) (slide 6.3.3–6.3.4)."
- **keyTerms:** hierarchical structure (monocode), chain-type structure (polycode), Opitz system, form code, supplementary code, extension, Multi-class.

#### s5 — Opitz worked example
- **calcBlock** "Mã hóa Opitz cho một part (form code)" steps:
  - `{ label: "Vị trí 1 — L/D ratio", expr: "L/D = 1.5 → positional number 1 = 1" }`
  - `{ label: "Vị trí 2 — gia công & bolt", expr: "both size processing & one size bolt → số 2 = 5" }`
  - `{ label: "Vị trí 3 — lỗ", expr: "through hole → số 3 = 1" }`
  - `{ label: "Vị trí 4, 5 — mặt", expr: "không gia công mặt (none-processing on face) → số 4 = 0, số 5 = 0" }`
  - result `"Opitz code = 15100"`, meaning `"Form code 5 số nắm gọn hình học chính của part."`, implication `"Part khác cùng family sẽ có code gần giống → dễ gom nhóm & tái dùng process plan (slide 17–20/31)."` (VERIFIED)
- **keyTerms:** Opitz coding, form code, length/diameter ratio, positional number.

### TẦNG C — Machine cell design

#### s6 — Composite part concept
- **calloutBlock** `"key"` "Composite part là gì" — "Composite part = một part GIẢ ĐỊNH (hypothetical) chứa TẤT CẢ design & manufacturing attributes của family. Mỗi part thật chỉ có một số feature; nhưng nếu thiết kế cell làm được composite part thì cell làm được MỌI thành viên family — chỉ cần BỎ operation ứng với feature part đó không có (Groover p.507)."
- **comparisonBlock** "Ví dụ composite part (Table 18.5) — feature → operation" — columns `["Design feature", "Manufacturing operation"]`; rows:
  - "External cylinder": cells `["Turning"]`
  - "Cylinder face": cells `["Facing"]`
  - "Cylindrical step / smooth surface": cells `["External cylindrical grinding"]`
  - "Axial hole": cells `["Drilling"]`
  - "Counterbore": cells `["Counterboring"]`
  - "Internal threads": cells `["Tapping"]`
- **calloutBlock** `"note"` "Từ composite part → cell" — "Production cell cho family = tập máy đủ làm composite part (7 operations ở ví dụ Groover Fig 18.5). Trong thực tế số attribute > 7 và phải chừa dung sai cho biến thể kích thước/hình dạng trong family (Groover p.508)."
- **keyTerms:** composite part, hypothetical part, design attribute, manufacturing operation, machine cell.

#### s7 — Types of machine cell
- **comparisonBlock** "Các loại machine cell" — columns `["Loại cell", "Đặc điểm", "Material handling"]`; rows:
  - "a. Single-machine cell": cells `["1 máy + fixtures/tooling; làm một (hoặc vài) family part; một loại process (turning, milling…)", "Setup đơn giản; năng suất thấp"]`
  - "b. Group-machine cell — manual handling": cells `["Nhiều máy phối hợp làm ≥1 family; thường layout chữ U", "Operator tự chuyển WIP; linh hoạt, rẻ, không cần conveyor"]`
  - "c. Group-machine cell — semi-integrated handling": cells `["Nhiều máy đặt hai bên conveyor", "Dùng conveyor chuyển material/WIP (semi-integrated)"]`
  - "d. Flexible manufacturing cell / FMS (Groover, → Topic 7)": cells `["Cell/hệ tự động linh hoạt", "Tự động hóa cao — học kỹ ở Topic 7"]`
- **calloutBlock** `"note"` "Assembly cell vs part cell + key machine" — "Groover phân biệt assembly cells (làm subassembly) vs part cells (gia công part). Layout chữ U ở group-machine manual cho phép worker đa năng di chuyển dễ, đổi model nhanh, kiểm soát WIP trực quan (Groover p.508–509). Loại (d) FMS thuộc Topic 7."
- **keyTerms:** single-machine cell, group-machine cell, manual handling, semi-integrated handling, U-shaped layout, key machine.

#### s8 — Benefits & limitations của GT
- **comparisonBlock** "Benefits của GT (slide 6.5.2)" — columns `["Khía cạnh", "Lợi ích"]`; rows:
  - "Product design": cells `["Sửa/tái dùng design attributes → giảm design job & time → giảm cost"]`
  - "Attachment/tooling": cells `["Attachment chuẩn hóa dùng cho cả family (vd đồ gá khoan lỗ) → nhanh & chính xác"]`
  - "Process planning": cells `["Áp automated process planning; product standardization → giảm operation cost"]`
  - "Employee satisfaction": cells `["Thợ dễ hoàn thành việc trên cùng nhóm attribute, biết rõ mình làm gì"]`
- **calloutBlock** `"note"` "Limitations (slide 6.5.1)" — "GT không miễn phí: (1) classification & coding thường xây riêng cho từng công ty; (2) chi phí C&C cao; (3) máy đã đặt cố định trong cell → khó xoay khi demand đổi; (4) rắc rối khi thay đổi hệ thống. → GT hợp khi có nhóm part ổn định, lặp lại (slide 29–31/31)."
- **keyTerms:** design standardization, standardized attachment, automated process planning, employee satisfaction, classification cost.

### TẦNG D — Kiến thức THÊM trong sách (Groover §18.4)

#### s9 — [NÂNG CAO] Rank-order clustering & Hollier method
- **calloutBlock** `"note"` "⚠ Kiến thức THÊM trong sách — không có trong slide" — "Phần này thuộc Groover §18.4 (Analysis of Cellular Manufacturing), KHÔNG có trong slide/đề chương này. Đưa vào để mở rộng; người học coi là tham khảo nâng cao, không bắt buộc thuộc."
- **calloutBlock** `"key"` "Rank-order clustering giải gì" — "Bài toán: với một part-machine incidence matrix (hàng = máy, cột = part, ô = 1 nếu part cần máy đó), làm sao gom máy & part thành các cell? Rank-order clustering (King) sắp lại hàng/cột để đưa các số 1 về các KHỐI CHÉO (diagonalized blocks) — mỗi khối = một part-machine group (một cell) (Groover p.513)."
- **calcBlock** "Cách đọc hàng thành số nhị phân (Example 18.1)" steps:
  - `{ label: "Đọc mỗi hàng trái→phải như số nhị phân", expr: "hàng 100100010" }`
  - `{ label: "Đổi ra thập phân", expr: "1×2^8 + 1×2^5 + 1×2^1 = 256 + 32 + 2 = 290" }`
  - `{ label: "Xếp hàng theo giá trị giảm dần, rồi làm tương tự cho cột; lặp tới khi ổn định", expr: "reorder rows ↓ → reorder columns ↓ → lặp" }`
  - result `"Ma trận gom về 3 part-machine groups (3 cell)"`, meaning `"Các số 1 dồn về khối chéo → mỗi khối là một family + nhóm máy tương ứng."`, implication `"Trường hợp lý tưởng: 3 nhóm tách rời hoàn toàn. Thực tế có part 'lạc' cần xử lý riêng (Groover p.513–515)."` (VERIFIED — nâng cao)
- **calloutBlock** `"note"` "Hollier method (sắp máy trong cell)" — "Sau khi có part-machine groups, Hollier method dùng from-to chart để sắp THỨ TỰ máy trong cell sao cho dòng chảy xuôi, ít backtracking nhất (Groover §18.4.2, Example 18.2). Cũng là kiến thức nâng cao."
- **keyTerms:** rank-order clustering, part-machine incidence matrix, diagonalized block, Hollier method, from-to chart.

---

## 5. Quiz (12 câu — concept + application + 1 calc; 5 options A–E)

> Mỗi câu: `id`, `stem` (EN), 5 `options` (id "a".."e", `rationale` Cơ chế→Bẫy→Khóa VI + term EN), `difficulty`, `conceptTested`, `takeaway` (VI). Không cố định đáp án đúng ở một vị trí. **10 câu core (slide) + 2 câu §18.4 nâng cao** (q11/q12) — với q11/q12 ghi rõ trong conceptTested là "(nâng cao §18.4)".

1. **q01** (basic) — *GT philosophy.* Đúng: gom part chia sẻ đặc điểm thành family để tái dùng thiết kế & sản xuất → economies of scale dù volume mỗi part thấp. Bẫy: coi GT = tăng volume; nghĩ GT chỉ cho mass.
2. **q02** (intermediate) — *Part family types.* Đúng: có kiểu same shape/different production và diff shape/same production. Bẫy: nghĩ family phải giống cả hình dạng lẫn quy trình.
3. **q03** (intermediate) — *3 cách nhận diện family.* Đúng: visual inspection / classification & coding / production flow analysis (PFA dùng route sheets). Bẫy: coi PFA dùng bản vẽ thiết kế; bỏ visual inspection.
4. **q04** (intermediate) — *Coding attributes.* Đúng: coding dựa design / manufacturing / both attributes. Bẫy: nghĩ coding chỉ theo hình dạng; coi both là bất khả thi.
5. **q05** (intermediate) — *Hierarchical vs chain-type.* Đúng: hierarchical (monocode) — vị trí phụ thuộc vị trí trước; chain-type (polycode) — vị trí cố định & độc lập. Bẫy: đảo hai; coi chain-type = phụ thuộc.
6. **q06** (intermediate) — *Opitz structure.* Đúng: 12345 form code (design), 6789 supplementary, ABCD extension (process). Bẫy: coi form code là process; gán extension cho design.
7. **q07** (advanced, application/calc) — *Opitz coding.* Cho L/D=1.5→1, processing/bolt→5, through hole→1, no face→0,0. Đúng: code = **15100**. Bẫy: đảo thứ tự vị trí; quên hai số 0 cuối.
8. **q08** (intermediate) — *Composite part.* Đúng: part giả định chứa mọi attribute của family; cell làm composite part thì làm được mọi thành viên bằng cách bỏ operation thừa. Bẫy: coi composite part là một part thật; nghĩ mỗi thành viên cần đủ mọi operation.
9. **q09** (intermediate) — *Machine cell types.* Đúng: single-machine / group-manual (U-shaped) / group semi-integrated (conveyor). Bẫy: coi single-machine cell = FMS; gán conveyor cho manual handling.
10. **q10** (intermediate) — *Benefits/limitations.* Đúng: GT giảm design job, chuẩn hóa attachment, automated process planning; nhưng chi phí C&C cao & máy trong cell khó xoay khi demand đổi. Bẫy: coi GT không có nhược điểm; nghĩ GT luôn rẻ.
11. **q11** (advanced, §18.4 nâng cao) — *Rank-order clustering.* Đúng: sắp lại hàng/cột của part-machine incidence matrix để đưa số 1 về khối chéo (diagonalized blocks) = part-machine groups. Bẫy: coi ROC gán mã part; nghĩ nó là Opitz. conceptTested ghi "(nâng cao §18.4)".
12. **q12** (advanced, §18.4 nâng cao) — *Binary reading / Hollier.* Đúng: đọc hàng 100100010 = 2^8+2^5+2^1 = 290; hoặc Hollier sắp thứ tự máy để ít backtracking. Bẫy: cộng sai lũy thừa; nhầm Hollier với line balancing. conceptTested ghi "(nâng cao §18.4)".

---

## 6. Lưu ý thực thi (Codex)

- KHÔNG sửa `content/types.ts`. Dùng helper có sẵn (gồm `calcBlock` cho s5 & s9).
- **bigIdea format mới:** compass 1 câu + `bigIdeaPillars` 4 trụ như mục 1.
- **§18.4 (s9 + q11/q12) MARK rõ là kiến thức THÊM trong sách:** callout `note` mở đầu s9 với title "⚠ Kiến thức THÊM trong sách", node knowledgeMap `t_roc` detail ghi rõ, conceptTested q11/q12 ghi "(nâng cao §18.4)".
- Quiz: mỗi câu **5 options** (a–e), đúng **1** `isCorrect`; đáp án rải. q07 = 15100; q12 binary 100100010 = 290.
- Notation `× ÷ − ^ ( )`; `comparisonBlock` `cells = columns − 1`: bảng 3 cột (s2-approaches, s4-structures, s7 → 2 cells); bảng 2 cột (s2-types, s3, s6, s8 → 1 cell).
- Flow: knowledgeMap `tree` set `parent`; s1/s4 = `horizontal`; node id `_`; edge label ngắn.
- `status: "ready"` chỉ giữ sau khi Lớp A pass (mục 7).

---

## 7. Verify (Codex chạy)

```bash
npx tsc --noEmit
```
- Phải pass (0 error).
- `comparisonBlock` mọi row `cells.length === columns.length − 1`.
- Flow: mọi `edges.from/to` tồn tại; node id `_`; knowledgeMap (`tree`) set `parent`.
- Quiz: mỗi câu 5 options, đúng 1 `isCorrect`; q07 = 15100.
- s9 có callout mark "kiến thức THÊM" rõ ràng.
- Sau tsc pass: render-check `/manufacturing-systems/topic-06` (375/768/1440) — bigIdea compass+pillars + knowledgeMap + 9 section + 12 quiz; không horizontal-scroll. Báo Chaliyah. **KHÔNG commit.**

---

## 8. Coverage matrix (Lớp B — "KHÔNG SÓT kiến thức")

Đối chiếu slide Chapter 6 (31 slide) + Groover Ch.18. ✅ Có · ⬜ Thiếu · ⚠️ Rút gọn.

| # | Mục | Nguồn | Section | TT |
|---|---|---|---|---|
| 1 | GT philosophy: gom part → family → economies of scale; integrating design & manufacturing | slide 6.1 + Groover §18.1 | s1 | ✅ |
| 2 | 2 kiểu part family (same shape/diff prod; diff shape/same prod) | slide 6.2 | s2 | ✅ |
| 3 | 3 cách nhận diện: visual inspection / C&C / PFA | slide 6.2 + Groover 18.1.4 | s2 | ✅ |
| 4 | Advantages của classification & coding (11 mục, gom nhóm) | slide 6.3.1 | s3 | ✅ |
| 5 | 3 cơ sở coding: design / manufacturing / both attributes | slide 6.3.2 | s3 | ✅ |
| 6 | Cấu trúc coding: hierarchical (monocode) vs chain-type (polycode) + mixed | slide 6.3.2 | s4 | ✅ |
| 7 | Opitz system (form code + supplementary + extension) | slide 6.3.3 + Groover | s4 | ✅ |
| 8 | Opitz worked example → 15100 | slide 17–20/31 | s5 | ✅ |
| 9 | Multi-class system | slide 6.3.4 | s4 (callout) | ✅ (nêu trong callout Opitz + keyTerm) |
| 10 | Composite part concept | slide 6.4.1 + Groover 18.2.1 | s6 | ✅ |
| 11 | Types of cell design (single / group-manual / group semi-integrated) | slide 6.4.2 + Groover 18.2.2 | s7 | ✅ |
| 12 | Benefits & limitations của GT | slide 6.5 | s8 | ✅ |
| 13 | (Nâng cao) Rank-order clustering + part-machine incidence matrix | Groover §18.4.1 | s9 | ✅ (mark THÊM) |
| 14 | (Nâng cao) Hollier method sắp máy trong cell | Groover §18.4.2 | s9 | ✅ (mark THÊM) |

> 12/12 mục core phủ đủ + 2 mục nâng cao §18.4 (đánh dấu rõ). Opitz worked example VERIFIED; §18.4 mark rõ là kiến thức thêm trong sách.
