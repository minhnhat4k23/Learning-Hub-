# Spec: Manufacturing Topic 07 — Flexible Manufacturing Systems (FMS)

> **Loại:** Soạn mới topic hoàn chỉnh (rich teaching mode), thay placeholder `topic-07`.
> **File cần sửa:** `content/manufacturing.ts` (helper đã có sẵn).
> **Nguồn (KHỚP NHIỀU — dùng tối đa sách + slide phụ):**
> - **Ebook Groover Ch.19 "Flexible Manufacturing Cells and Systems"** (p.533–554) = chuẩn định nghĩa: FMS = highly automated GT cell; 4 tests of flexibility; types (single-machine cell / FMC / FMS; dedicated vs random-order); components; §19.4 bottleneck model.
> - **Slide `Chapter 7 Flexible manufacturing.pdf`** (lecturer Đặng Võ Hùng, 27 slide) = exam-facing: flexible automation/CNC/DNC, 3 FMS elements, 2 types (dedicated/random-order) + Chart 7.1, 5 functions handling, **5 layout configurations**, **8 computer functions**, **6 FMS data files** + system reports, **5 FMS benefits** (utilization 80% vs 50%).
> - **§19.4 (bottleneck model) = KIẾN THỨC THÊM TRONG SÁCH** (định lượng, slide KHÔNG có) → gồm nhưng **MARK rõ** như Topic 6 §18.4.
> - **Bằng chứng neo lens (BẮT BUỘC — người học sắp học, Claude chịu trách nhiệm đúng hướng):**
>   - Compass *"tự động hóa mà VẪN linh hoạt"* ← Groover p.533: *"A more appropriate term for FMS would be flexible **automated** manufacturing system"* ("flexible" phân biệt với transfer line tự-động-nhưng-cứng; "automated" phân biệt với manned GT cell linh-hoạt-nhưng-thủ-công) + slide 1/26 "flexible automation".
>   - Trụ "nền tảng = group technology" ← Groover p.533: *"An FMS relies on the principles of group technology"* + slide 6/26 "fundamental of FMS is group technology".
> **Quy ước:** diễn giải VI + term EN; quiz `stem`/`options` EN, `rationale`/`takeaway` VI (Cơ chế→Bẫy→Khóa); quiz **5 options A–E**; notation `× ÷ − ^ ( )`.
> **bigIdea format:** compass (1 câu) + `bigIdeaPillars` (4 trụ).
> **Verify:** `npx tsc --noEmit` pass; render-check; KHÔNG commit.

---

## 0. Wiring (BẮT BUỘC làm trước)

Helper đã có sẵn. Topic 07 có phần định lượng §19.4 → dùng `formulaBlock` + `calcBlock`.

1. Tạo `const topic07: Chapter = { ... }` (đặt ngay sau `topic06`).
2. Sửa assembly: thêm `if (order === 7) return topic07;`.

**Renderer contract:** `comparisonBlock` `columns.length === rows[i].cells.length + 1`; flow `edges.from/to` trỏ node có thật cùng block; node id `_`; flow layout chỉ `horizontal`/`tree` (tree set `parent`); edge label NGẮN.

---

## 1. Khung Chapter

```ts
const topic07: Chapter = {
  slug: "topic-07",
  order: 7,
  title: "Topic 07 — Flexible Manufacturing Systems (FMS)",
  bigIdea:
    "FMS = tự động hóa mà VẪN linh hoạt: gộp năng suất của mass với khả năng đổi sản phẩm của batch, nhờ CNC + material handling tự động + computer control trên nền group technology.",
  bigIdeaPillars: [
    { label: "Nền tảng", body: "FMS dựa trên group technology (part family) + CNC + DNC — 'FMS relies on the principles of group technology' (Groover p.533)." },
    { label: "3 thành phần", body: "Processing stations (CNC) · automated material handling & storage · distributed computer control system (+ human)." },
    { label: "Phổ linh hoạt", body: "Theo số máy: single-machine cell → FMC (2–3) → FMS (4+). Theo mức độ: dedicated ↔ random-order." },
    { label: "Điều khiển & lợi ích", body: "8 computer functions, 6 data files; utilization ↑ (tới 80% vs 50% batch), WIP ↓, MLT ↓." },
  ],
  learningObjectives: [
    "Định nghĩa FMS như một highly automated GT machine cell và giải thích vì sao gọi là 'flexible automated' (linh hoạt so với transfer line, tự động so với manned cell).",
    "Nêu 4 tests of flexibility (part-variety, schedule-change, error-recovery, new-part) và giải thích test nào quan trọng nhất.",
    "Liệt kê 3 thành phần của FMS: processing stations (CNC), automated material handling & storage, computer control system; và vai trò con người.",
    "Phân loại FMS theo số máy (single-machine cell / FMC 2–3 máy / FMS 4+ máy) và theo mức linh hoạt (dedicated vs random-order).",
    "Nêu 5 functions của handling system và 5 layout configurations (in-line, loop, ladder, open-field, robot-centered cell).",
    "Liệt kê 8 computer functions và 6 FMS data files; giải thích các system reports (utilization, production, status, tool).",
    "Nêu 5 benefits của FMS (utilization tới 80% vs 50% batch, giảm WIP, giảm MLT, linh hoạt scheduling, tăng labour productivity).",
    "(Nâng cao — Groover §19.4) Giải thích bottleneck model: workload WLi, bottleneck station (WLi/si lớn nhất), max production rate Rp* = s* ÷ WL*.",
  ],
  knowledgeMap: { /* xem mục 2 */ },
  sections: [ /* s1..s10 */ ],
  questions: [ /* q01..q12 (5 options A–E) */ ],
  status: "ready",
  source:
    "Manufacturing Systems — slide 'Chapter 7 Flexible manufacturing' (lecturer Đặng Võ Hùng, 27 slide) cho elements/types/handling/layouts/computer functions/data files/benefits + ebook Groover, Automation, Production Systems & CIM 4e, Chapter 19 'Flexible Manufacturing Cells and Systems' (p.533–554) cho định nghĩa chuẩn + 4 flexibility tests + single-machine cell/FMC/FMS + §19.4 bottleneck model (đánh dấu kiến thức nâng cao).",
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
    "FMS = tự động hóa mà vẫn linh hoạt: (A) định vị & thành phần, (B) material handling & 5 layout, (C) computer control & benefits; + node §19.4 bottleneck model là kiến thức THÊM trong sách. Bấm node để mở chi tiết.",
  nodes: [
    { id: "fms", label: "Flexible Manufacturing System", group: "concept", sectionId: "s1",
      detail: "Highly automated GT cell: CNC + material handling tự động + computer control; flexible + automated." },

    { id: "g_def", label: "A. Định vị & thành phần", group: "concept", parent: "fms", sectionId: "s1",
      detail: "Định nghĩa, 4 flexibility tests, 3 components, types." },
    { id: "g_mh", label: "B. Material handling & layout", group: "concept", parent: "fms", sectionId: "s5",
      detail: "5 functions + 5 layout configurations." },
    { id: "g_cc", label: "C. Computer control & benefits", group: "concept", parent: "fms", sectionId: "s7",
      detail: "8 functions, 6 data files, reports, benefits." },

    // Nhóm A
    { id: "t_def", label: "FMS là gì (flexible automated)", group: "term", parent: "g_def", sectionId: "s1",
      detail: "GT cell tự động; flexible vs transfer line, automated vs manned cell." },
    { id: "t_flex", label: "4 tests of flexibility", group: "term", parent: "g_def", sectionId: "s2",
      detail: "Part-variety / schedule-change / error-recovery / new-part." },
    { id: "t_comp", label: "3 components", group: "term", parent: "g_def", sectionId: "s3",
      detail: "Processing stations (CNC) / material handling / computer control." },
    { id: "t_types", label: "Types of FMS", group: "term", parent: "g_def", sectionId: "s4",
      detail: "Single-machine/FMC/FMS; dedicated vs random-order." },

    // Nhóm B
    { id: "t_func", label: "5 handling functions", group: "term", parent: "g_mh", sectionId: "s5",
      detail: "Independent movement, variety config, temporary storage, load/unload access, computer compatible." },
    { id: "t_layout", label: "5 layout configurations", group: "term", parent: "g_mh", sectionId: "s6",
      detail: "In-line / loop / ladder / open-field / robot-centered." },

    // Nhóm C
    { id: "t_cfunc", label: "8 computer functions", group: "term", parent: "g_cc", sectionId: "s7",
      detail: "Workstation/instruction/production/traffic/shuttle/monitoring/tool/reporting." },
    { id: "t_data", label: "6 data files + reports", group: "term", parent: "g_cc", sectionId: "s8",
      detail: "Part program/routing/production/pallet/tool files + utilization/production/status reports." },
    { id: "t_benefit", label: "5 FMS benefits", group: "term", parent: "g_cc", sectionId: "s9",
      detail: "Utilization ↑ (80% vs 50%), WIP ↓, MLT ↓, scheduling flexibility, labour productivity ↑." },

    { id: "t_bottleneck", label: "§19.4 Bottleneck model (THÊM)", group: "term", parent: "fms", sectionId: "s10",
      detail: "KIẾN THỨC THÊM TRONG SÁCH: WLi, bottleneck station, Rp* = s* ÷ WL*." },
  ],
  edges: [
    { from: "fms", to: "g_def" }, { from: "fms", to: "g_mh" }, { from: "fms", to: "g_cc" }, { from: "fms", to: "t_bottleneck" },
    { from: "g_def", to: "t_def" }, { from: "g_def", to: "t_flex" }, { from: "g_def", to: "t_comp" }, { from: "g_def", to: "t_types" },
    { from: "g_mh", to: "t_func" }, { from: "g_mh", to: "t_layout" },
    { from: "g_cc", to: "t_cfunc" }, { from: "g_cc", to: "t_data" }, { from: "g_cc", to: "t_benefit" },
  ],
},
```

---

## 3. Bối cảnh số liệu / công thức (VERIFIED — hard theory)

| Dữ kiện | Giá trị | Nguồn | Tag |
|---|---|---|---|
| Phân loại theo số máy | single-machine cell (1) · FMC = **2–3 máy** · FMS = **4+ máy** | Groover p.536–537 | VERIFIED |
| 4 tests of flexibility | part-variety · schedule-change · error-recovery · new-part; quan trọng nhất = (1) & (2) | Groover p.534–535 | VERIFIED |
| FMS benefit — utilization | tới **~80%** (FMS) vs **~50%** (batch production) | slide 26/27 (7.4) | VERIFIED |
| §19.4 workload | WLi = Σ (Tcijk × fijk × pj) [Eq 19.2] | Groover p.551 | VERIFIED (nâng cao) |
| §19.4 bottleneck & Rp* | bottleneck station = station có **WLi ÷ si** lớn nhất; Rp* = **s\* ÷ WL\*** [Eq 19.5]; Rpj* = pj × Rp*; Ui = (WLi÷si) × Rp* | Groover p.552–553 | VERIFIED (nâng cao) |

> Notation `× ÷ − ^ ( )`; giữ term EN.

---

## 4. Sections (s1 → s10)

> Mỗi section: `id`, `heading`, `blocks[]`, `keyTerms[]`. Ghi nguồn (slide X/27 hoặc Groover p.XX). Mỗi section ≥1 bảng/flow/formula/calc.

### TẦNG A — Định vị & thành phần

#### s1 — FMS là gì (NEO LENS)
- **flowBlock** `s1` "Vì sao FMS = 'flexible automated'" layout `horizontal`, nodes:
  - `s1_manual` "Manned GT cell" — "Linh hoạt (người điều chỉnh) NHƯNG không tự động."
  - `s1_transfer` "Transfer line" — "Tự động cao NHƯNG cứng (một loại sản phẩm)."
  - `s1_fms` "FMS" — "Vừa flexible vừa automated — chỗ giao của hai thế giới."
  - `s1_gt` "Group technology" — "Nền tảng: chỉ linh hoạt trong phạm vi một part family."
  - edges: `s1_manual→s1_fms` label "thêm automation", `s1_transfer→s1_fms` label "thêm flexibility", `s1_gt→s1_fms` label "nền tảng". caption: "Groover: 'a more appropriate term would be flexible AUTOMATED manufacturing system' (p.533)."
- **calloutBlock** `"key"` "Định nghĩa FMS" — "FMS = một highly automated group technology machine cell, gồm một/nhiều processing stations (thường là CNC machine tools), nối bởi automated material handling & storage system, điều khiển bởi distributed computer system. Gọi là 'flexible' vì xử lý được NHIỀU part styles CÙNG LÚC ở các workstation, và có thể điều chỉnh mix + quantity theo demand (Groover p.533). Lưu ý: không hệ nào flexible hoàn toàn — FMS chỉ linh hoạt trong một part family / limited range of families."
- **calloutBlock** `"insight"` "Góc nhìn future manager" — "Định vị FMS trên hành trình automation: nối Topic 1 (fixed → programmable → flexible automation) và Topic 6 (machine cell → FMS). Giá trị cốt lõi nằm ở HỆ ĐIỀU KHIỂN MÁY TÍNH điều phối cả máy lẫn dòng vật liệu — đó là thứ biến 'nhiều máy CNC rời' thành 'một hệ linh hoạt'."
- **keyTerms:** flexible manufacturing system (FMS), flexible automation, CNC, DNC (direct numerical control), distributed computer control, group technology.

#### s2 — 4 tests of flexibility
- **comparisonBlock** "4 tests of flexibility (Groover p.534–535)" — columns `["Test", "Câu hỏi kiểm tra", "Tên khác"]`; rows:
  - "1. Part-variety test": cells `["Hệ có xử lý được nhiều part/product styles ở chế độ mixed-model (không theo lô) không?", "machine/production flexibility"]`
  - "2. Schedule-change test": cells `["Hệ có dễ chấp nhận thay đổi lịch sản xuất (part mix / số lượng) không?", "mix/volume flexibility"]`
  - "3. Error-recovery test": cells `["Hệ có phục hồi 'mượt' khi máy hỏng, không dừng toàn bộ sản xuất không?", "routing flexibility"]`
  - "4. New-part test": cells `["Có dễ đưa part design mới vào part mix hiện có (nếu thuộc part family) không?", "product flexibility"]`
- **calloutBlock** `"note"` "Test nào quan trọng nhất" — "Quan trọng nhất là (1) & (2). Test (3) chỉ áp dụng cho hệ nhiều máy — với single-machine, máy hỏng là sản xuất dừng. Test (4) chỉ có nghĩa khi part mới nằm trong part family đã thiết kế (Groover p.535). → 'flexible' là một mức độ, không phải có/không tuyệt đối."
- **keyTerms:** part-variety test, schedule-change test, error-recovery test, new-part test, mixed-model.

#### s3 — 3 thành phần của FMS
- **flowBlock** `s3` "3 thành phần FMS" layout `horizontal`, nodes:
  - `s3_proc` "Processing stations" — "Thường là CNC: gia công, bảo trì, inspection, testing."
  - `s3_mh` "Material handling & storage" — "Tự động chuyển & lưu WIP giữa các trạm; pallets/fixtures."
  - `s3_cc` "Computer control system" — "Điều phối work elements ở mỗi trạm + material handling."
  - edges: `s3_proc→s3_mh` label "nối", `s3_mh→s3_cc` label "điều khiển". caption: "Groover: 4 components = workstations + handling + computer + con người (slide 7.1)."
- **calloutBlock** `"note"` "Vai trò con người trong FMS" — "Dù tự động hóa cao, con người vẫn cần cho: load/unload part, quản lý & giám sát hệ, xử lý sự cố, lập & sửa NC programs. Human = enabler of flexibility, không bị loại bỏ hoàn toàn (slide 5/26)."
- **keyTerms:** processing station, material handling and storage system, computer control system, pallet, fixture, human role.

#### s4 — Types of FMS
- **comparisonBlock** "Phân loại theo SỐ MÁY (Groover p.536–537)" — columns `["Loại", "Số máy", "Flexibility tests thỏa"]`; rows:
  - "Single-machine cell": cells `["1 CNC + parts-storage", "3/4 tests (thiếu error-recovery vì 1 máy hỏng là dừng)"]`
  - "Flexible manufacturing cell (FMC)": cells `["2–3 processing stations", "Cả 4 tests"]`
  - "Flexible manufacturing system (FMS)": cells `["4+ processing stations + trạm phụ trợ (wash, inspection)", "Cả 4 tests; computer control phức tạp hơn"]`
- **comparisonBlock** "Phân loại theo MỨC LINH HOẠT (slide 7/26)" — columns `["Loại", "Đặc điểm"]`; rows:
  - "Dedicated FMS": cells `["Tập trung ít item, máy xác định, ít thay đổi, hiệu quả cao — ít linh hoạt hơn"]`
  - "Random-order FMS": cells `["Nhiều part families, kế hoạch sản xuất đổi hằng ngày, cần computer control mạnh — LINH HOẠT hơn dedicated"]`
- **calloutBlock** `"insight"` "Đọc Chart 7.1" — "Trên trục flexibility × volume: NC machine → dedicated FMS → random-order FMS → automated manufacturing system. Càng lên cao volume, càng xuống thấp flexibility. FMS lấp khoảng giữa mà transfer line (high volume, low flexibility) và standalone CNC (low volume, high flexibility) bỏ trống (slide 8/26)."
- **keyTerms:** single-machine cell, flexible manufacturing cell (FMC), flexible manufacturing system (FMS), dedicated FMS, random-order FMS.

### TẦNG B — Material handling & layout

#### s5 — 5 functions của handling system
- **comparisonBlock** "5 functions của handling system (slide 7.2.1)" — columns `["Function", "Nội dung"]`; rows:
  - "Independent movement of workparts": cells `["Chuyển part giữa các WS độc lập, cho nhiều processing sequence (trạm bận thì đi trạm khác)"]`
  - "Handle a variety of workpart configurations": cells `["Dùng pallets/fixtures để xử lý nhiều loại/hình dạng part"]`
  - "Temporary storage (buffers)": cells `["Cho phép hàng chờ nhỏ trước mỗi trạm → giảm nghẽn"]`
  - "Convenient access for load/unload": cells `["Dễ nạp & tháo workpart — function chính của handling"]`
  - "Compatible with computer control": cells `["Handling phải khớp với hệ điều khiển máy tính của FMS"]`
- **keyTerms:** independent movement, workpart configuration, temporary storage, buffer, load/unload, computer compatibility.

#### s6 — 5 layout configurations
- **comparisonBlock** "5 layout configurations (slide 7.2.2 + Groover)" — columns `["Layout", "Bố trí", "Đặc điểm / đánh đổi"]`; rows:
  - "In-line": cells `["Máy & handling xếp thẳng hàng, part đi một chiều", "Đơn giản, dòng rõ; kém linh hoạt, dễ tạo bottleneck (có thể thêm bi-directional để tăng routing flexibility)"]`
  - "Loop": cells `["Trạm xếp thành vòng, part chạy quanh loop", "Linh hoạt hơn in-line (dừng & chuyển tới trạm bất kỳ); load/unload ở một đầu"]`
  - "Ladder": cells `["Loop có thêm 'rungs' (thanh ngang) đặt trạm", "Tăng số đường đi giữa các máy, giảm quãng đường & nghẽn, bỏ được secondary handling"]`
  - "Open-field": cells `["Nhiều loop + ladder + sidings kết hợp", "Cho part family lớn; phức tạp thiết kế & điều khiển"]`
  - "Robot-centered cell": cells `["1+ robot làm material handling trung tâm", "Đơn giản, robot cấp phôi cho máy quanh nó; giới hạn bởi tầm với robot"]`
- **keyTerms:** in-line layout, loop layout, ladder layout, open-field layout, robot-centered cell, routing flexibility.

### TẦNG C — Computer control & benefits

#### s7 — 8 computer functions
- **comparisonBlock** "8 computer functions (slide 7.3.1)" — columns `["Function", "Nội dung"]`; rows:
  - "Control of each workstation": cells `["CNC điều khiển từng trạm (fully automated FMS)"]`
  - "Distribution of control instructions": cells `["Tải chương trình từ central control xuống máy (DNC)"]`
  - "Production control": cells `["Quản lý rate of output & part mix mỗi batch"]`
  - "Traffic control": cells `["Điều phối dòng WIP giữa các workstation"]`
  - "Shuttle control": cells `["Điều tiết secondary part-handling tại mỗi máy, phối với primary handling"]`
  - "Work handling system monitoring": cells `["Giám sát vị trí xe/pallet vận chuyển"]`
  - "Tool control": cells `["Kiểm tool sẵn sàng cho WIP + theo dõi tool-life để thay"]`
  - "System performance monitoring & reporting": cells `["Xuất báo cáo hiệu năng phục vụ quản lý"]`
- **keyTerms:** workstation control, DNC distribution, production control, traffic control, shuttle control, tool control, tool-life monitoring.

#### s8 — 6 FMS data files + system reports
- **comparisonBlock** "6 FMS data files (slide 7.3.2)" — columns `["Data file", "Lưu gì"]`; rows:
  - "Part program files": cells `["Chương trình NC cho từng workpart xử lý trong hệ"]`
  - "Routing files": cells `["Trình tự công việc & danh sách WS mỗi part đi qua"]`
  - "Part production files": cells `["Thông số sản xuất để làm item (production control)"]`
  - "Pallet reference files": cells `["Thông tin pallet & item gắn với từng pallet (định danh duy nhất)"]`
  - "Station tool files": cells `["Thông tin máy & tool tại mỗi trạm"]`
  - "Tool life files": cells `["Thời gian dùng tool để thay khi vượt standard time"]`
- **comparisonBlock** "System reports (slide 7.3.3)" — columns `["Report", "Nội dung"]`; rows:
  - "Utilization reports": cells `["Utilization từng WS + trung bình toàn FMS"]`
  - "Production reports": cells `["Sản lượng part (ngày/tuần) + so actual vs plan"]`
  - "Status reports": cells `["Trạng thái hiện tại: số WIP, utilization, tool, attachment"]`
  - "Tool reports": cells `["Dữ liệu tool & attachment để chuẩn bị cho ca sau"]`
- **keyTerms:** part program file, routing file, pallet reference file, tool life file, utilization report, status report.

#### s9 — 5 FMS benefits
- **comparisonBlock** "5 benefits của FMS (slide 7.4)" — columns `["Benefit", "Cơ chế"]`; rows:
  - "Higher machine utilization": cells `["Computer-based control → utilization tới ~80% (vs ~50% batch)"]`
  - "Reduced work-in-process": cells `["Nhiều part chạy song song dưới điều khiển máy tính → ít WIP hơn batch"]`
  - "Lower manufacturing lead time (MLT)": cells `["Giảm WIP + CAM giảm processing time → giao hàng nhanh"]`
  - "Greater flexibility in scheduling": cells `["CAM + programs đổi kế hoạch nhanh → đáp ứng rush/special orders"]`
  - "Higher labour productivity": cells `["CAM + máy tự động → ít công nhân → năng suất lao động cao"]`
- **calloutBlock** `"insight"` "Vì sao utilization là con số 'bán' FMS" — "80% vs 50% là lập luận đầu tư điển hình: FMS đắt, nhưng nếu nâng utilization từ nửa lên bốn phần năm thì cùng số máy tạo ra nhiều output hơn hẳn — future manager dùng chính chỉ số này để justify capital cho FMS (slide 26/27). Đây là góc nhìn định hướng, con số 80%/50% là của slide."
- **keyTerms:** machine utilization, work-in-process (WIP), manufacturing lead time (MLT), production scheduling, labour productivity.

### TẦNG D — Kiến thức THÊM trong sách (Groover §19.4)

#### s10 — [NÂNG CAO] Bottleneck model
- **calloutBlock** `"note"` "⚠ Kiến thức THÊM trong sách — không có trong slide" — "Phần này thuộc Groover §19.4 (Analysis of FMS), KHÔNG có trong slide/đề chương này. Đưa vào để mở rộng; người học coi là tham khảo nâng cao, không bắt buộc thuộc."
- **calloutBlock** `"key"` "Bottleneck model giải gì" — "Bottleneck model (Solberg) là deterministic model cho ước lượng SỚM năng lực FMS. Ý tưởng: với product mix cố định, output của hệ bị chặn trên bởi TRẠM NGHẼN (bottleneck) — trạm có workload trên mỗi server cao nhất. Đơn giản, trực quan; nhưng vì bỏ qua queue nên thường ƯỚC LƯỢNG CAO hơn thực tế (Groover p.550–552)."
- **formulaBlock**
  - expression: `"WLi = Σ (Tcijk × fijk × pj)   |   bottleneck = max(WLi ÷ si)   |   Rp* = s* ÷ WL*"`
  - legend: `[ {symbol:"WLi", meaning:"workload trung bình trạm i (min/part)"}, {symbol:"Tcijk", meaning:"processing cycle time thao tác k, part j, trạm i"}, {symbol:"fijk", meaning:"operation frequency"}, {symbol:"pj", meaning:"part-mix fraction của part j (Σpj = 1)"}, {symbol:"si", meaning:"số server (máy giống nhau) tại trạm i"}, {symbol:"s* , WL*", meaning:"server & workload của bottleneck station"}, {symbol:"Rp*", meaning:"max production rate toàn hệ (pc/min)"} ]`
  - note: `"Rpj* = pj × Rp* (rate từng part); Ui = (WLi ÷ si) × Rp*; utilization của bottleneck = 100% (Groover p.552–553, Eq 19.2/19.5/19.7)."`
- **calcBlock** "Ví dụ minh họa cách tìm bottleneck (số minh họa)" steps:
  - `{ label: "Trạm 1 (load/unload, s1=1)", expr: "WL1 ÷ s1 = 6 ÷ 1 = 6 min/server", note: "số minh họa để hiểu công thức" }`
  - `{ label: "Trạm 2 (milling, s2=2)", expr: "WL2 ÷ s2 = 15 ÷ 2 = 7.5 min/server" }`
  - `{ label: "So sánh → chọn max", expr: "max(6, 7.5) = 7.5 → bottleneck = Trạm 2" }`
  - `{ label: "Max production rate", expr: "Rp* = s* ÷ WL* = 2 ÷ 15 ≈ 0.133 part/min" }`
  - result `"Bottleneck = Trạm 2; Rp* ≈ 0.133 part/min (≈ 8 part/giờ)"`, meaning `"Trạm có WL/server lớn nhất chặn throughput của cả hệ."`, implication `"Muốn tăng output: thêm server cho bottleneck hoặc giảm workload trạm đó. (Số ở đây là minh họa cho công thức, KHÔNG phải Example 19.4 của sách.)"`
- **keyTerms:** bottleneck model, workload (WL), server, part-mix fraction, maximum production rate (Rp*), bottleneck station.

---

## 5. Quiz (12 câu — concept + application; 5 options A–E)

> Mỗi câu: `id`, `stem` (EN), 5 `options` (id "a".."e", `rationale` Cơ chế→Bẫy→Khóa VI + term EN), `difficulty`, `conceptTested`, `takeaway` (VI). Không cố định đáp án đúng ở một vị trí. **10 câu core (slide+Groover) + 2 câu §19.4 nâng cao** (q11/q12) — conceptTested q11/q12 ghi "(nâng cao §19.4)".

1. **q01** (basic) — *FMS definition / 'flexible automated'.* Đúng: FMS = highly automated GT cell (CNC + automated handling + computer control), gọi flexible vì xử lý nhiều part style cùng lúc + đổi mix theo demand; "automated" phân biệt với manned cell, "flexible" phân biệt với transfer line. Bẫy: coi mọi hệ CNC là FMS; coi FMS linh hoạt vô hạn.
2. **q02** (intermediate) — *GT foundation.* Đúng: FMS dựa trên nguyên lý group technology, chỉ linh hoạt trong phạm vi một/vài part family. Bẫy: nghĩ FMS làm được mọi part bất kỳ.
3. **q03** (intermediate) — *4 flexibility tests.* Đúng: part-variety, schedule-change, error-recovery, new-part; quan trọng nhất (1)&(2). Bẫy: coi error-recovery quan trọng nhất; nghĩ single-machine thỏa cả 4.
4. **q04** (intermediate) — *3 components.* Đúng: processing stations (CNC) + automated material handling & storage + computer control (+ human). Bẫy: bỏ computer control; coi con người bị loại hoàn toàn.
5. **q05** (intermediate, application) — *FMC vs FMS by machine count.* Đúng: FMC = 2–3 máy, FMS = 4+ máy; single-machine cell = 1. Bẫy: đảo ngưỡng; coi FMC = FMS.
6. **q06** (intermediate) — *Dedicated vs random-order.* Đúng: random-order linh hoạt hơn dedicated (nhiều part family, kế hoạch đổi hằng ngày). Bẫy: đảo hai; coi dedicated linh hoạt hơn.
7. **q07** (intermediate) — *5 handling functions.* Đúng: independent movement / variety config (pallet-fixture) / temporary storage / load-unload access / computer compatible. Bẫy: coi handling chỉ để chuyển thẳng một chiều.
8. **q08** (intermediate, application) — *5 layout configurations.* Đúng: in-line / loop / ladder / open-field / robot-centered; ladder tăng đường đi & bỏ secondary handling. Bẫy: nhầm ladder với loop; coi in-line linh hoạt nhất.
9. **q09** (intermediate) — *Computer functions / data files.* Đúng: 8 functions gồm tool control (tool-life monitoring), traffic control; 6 data files gồm pallet reference, tool life. Bẫy: gộp production control với traffic control; bỏ tool-life.
10. **q10** (intermediate) — *FMS benefits.* Đúng: utilization tới ~80% vs ~50% batch, giảm WIP & MLT, linh hoạt scheduling, tăng labour productivity. Bẫy: đảo 80%/50%; coi FMS tăng WIP.
11. **q11** (advanced, §19.4 nâng cao) — *Bottleneck concept.* Đúng: bottleneck station = station có workload trên mỗi server (WLi ÷ si) lớn nhất, nó chặn max output; deterministic model → ước lượng cao. Bẫy: coi bottleneck là trạm có nhiều máy nhất; nghĩ mô hình cho kết quả chính xác tuyệt đối. conceptTested ghi "(nâng cao §19.4)".
12. **q12** (advanced, §19.4 nâng cao, application) — *Rp* formula.* Cho bottleneck s\*=2, WL\*=15 min. Đúng: Rp* = s* ÷ WL* = 2 ÷ 15 ≈ 0.133 part/min. Bẫy: tính WL* ÷ s*; quên đó là bottleneck station. conceptTested ghi "(nâng cao §19.4)".

---

## 6. Lưu ý thực thi (Codex)

- KHÔNG sửa `content/types.ts`. Dùng helper có sẵn (gồm `formulaBlock` + `calcBlock` cho s10).
- **bigIdea format mới:** compass 1 câu + `bigIdeaPillars` 4 trụ như mục 1.
- **§19.4 (s10 + q11/q12) MARK rõ là kiến thức THÊM trong sách:** callout `note` mở đầu s10 title "⚠ Kiến thức THÊM trong sách", node knowledgeMap `t_bottleneck` detail ghi rõ, conceptTested q11/q12 ghi "(nâng cao §19.4)".
- **Số minh họa ở s10 calcBlock** phải giữ ghi chú "số minh họa để hiểu công thức, KHÔNG phải Example 19.4 của sách" (academic honesty — không mạo danh số sách).
- Quiz: mỗi câu **5 options** (a–e), đúng **1** `isCorrect`; đáp án rải. q12 = 2 ÷ 15 ≈ 0.133.
- Notation `× ÷ − ^ ( )`; `comparisonBlock` `cells = columns − 1`: bảng 3 cột (s2, s4-số máy, s6 → 2 cells); bảng 2 cột (s4-mức linh hoạt, s5, s7, s8×2, s9 → 1 cell).
- Flow: knowledgeMap `tree` set `parent`; s1/s3 = `horizontal`; node id `_`; edge label ngắn.
- `status: "ready"` chỉ giữ sau khi Lớp A pass (mục 7).

---

## 7. Verify (Codex chạy)

```bash
npx tsc --noEmit
```
- Phải pass (0 error).
- `comparisonBlock` mọi row `cells.length === columns.length − 1`.
- Flow: mọi `edges.from/to` tồn tại; node id `_`; knowledgeMap (`tree`) set `parent`.
- Quiz: mỗi câu 5 options, đúng 1 `isCorrect`; q12 = 2 ÷ 15 ≈ 0.133.
- s10 có callout mark "kiến thức THÊM" + calcBlock ghi rõ "số minh họa".
- Sau tsc pass: render-check `/manufacturing-systems/topic-07` (375/768/1440) — bigIdea compass+pillars + knowledgeMap + 10 section + 12 quiz; không horizontal-scroll. Báo Chaliyah. **KHÔNG commit.**

---

## 8. Coverage matrix (Lớp B — "KHÔNG SÓT kiến thức")

Đối chiếu slide Chapter 7 (27 slide) + Groover Ch.19. ✅ Có · ⬜ Thiếu · ⚠️ Rút gọn.

| # | Mục | Nguồn | Section | TT |
|---|---|---|---|---|
| 1 | FMS definition (GT cell + CNC + handling + computer); flexible automated | slide 7.1 + Groover p.533 | s1 | ✅ |
| 2 | Flexible automation / CNC / DNC concepts | slide 1–3/26 | s1 | ✅ |
| 3 | 4 tests of flexibility | Groover p.534–535 | s2 | ✅ |
| 4 | 3 FMS elements (processing/handling/computer) + human | slide 7.1 | s3 | ✅ |
| 5 | Types by number of machines (single/FMC/FMS) | Groover p.536–537 | s4 | ✅ |
| 6 | Dedicated vs random-order + Chart 7.1 | slide 7/26–8/26 | s4 | ✅ |
| 7 | 5 handling functions | slide 7.2.1 | s5 | ✅ |
| 8 | 5 layout configurations (in-line/loop/ladder/open-field/robot-centered) | slide 7.2.2 + Groover | s6 | ✅ |
| 9 | 8 computer functions | slide 7.3.1 | s7 | ✅ |
| 10 | 6 FMS data files | slide 7.3.2 | s8 | ✅ |
| 11 | System reports (utilization/production/status/tool) | slide 7.3.3 | s8 | ✅ |
| 12 | 5 FMS benefits (80% vs 50%) | slide 7.4 | s9 | ✅ |
| 13 | (Nâng cao) Bottleneck model: WL, bottleneck, Rp* | Groover §19.4.1 | s10 | ✅ (mark THÊM) |

> 12/12 mục core phủ đủ + 1 mục nâng cao §19.4 (đánh dấu rõ). Số benefit 80%/50% VERIFIED slide; công thức bottleneck VERIFIED Groover; số trong calcBlock s10 là minh họa (ghi rõ).
