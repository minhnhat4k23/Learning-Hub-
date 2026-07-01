# Spec: Manufacturing Topic 04 — Jobbing & Batch Production System

> **Loại:** Soạn mới một topic hoàn chỉnh (rich teaching mode), thay placeholder `topic-04`.
> **File cần sửa:** `content/manufacturing.ts` (helper đã có sẵn).
> **Nguồn (Chaliyah chốt — KHỚP MỘT PHẦN, dùng cả hai theo vai trò):**
> - **Ebook Groover §2.3 "Production Facilities" (p.33–36) + Fig 2.4 (p.32) = TẦNG ĐỊNH VỊ (dùng tối đa):** phổ variety↔quantity, dải production quantity (low/medium/high), job shop vs batch, plant layout types (fixed-position/process/cellular/product), setup/changeover time, insight ~95% thời gian là chờ/di chuyển.
> - **Slide `Chapter 4 Jobbing and Batch.pdf`** (lecturer Le Phuoc Luong, 39 slide) = **TẦNG VẬN HÀNH (Groover không cover):** chu trình PPC (routing → scheduling → dispatching → expediting → progress review), block system / PCL / inventory status report, MTO/MTS, ví dụ unit cost, liên hệ JIT.
> - **Không kéo** phần Groover trả lời câu hỏi khác (mass production để Topic 5; cellular/GT chi tiết để Topic 6).
> **Quy ước:** diễn giải tiếng Việt + term EN; quiz `stem`/`options` EN, `rationale`/`takeaway` VI (Cơ chế→Bẫy→Khóa); quiz **5 options A–E**; notation số dùng `× ÷ − ^( )` (KHÔNG `·`).
> **Verify:** `npx tsc --noEmit` pass; render-check; KHÔNG commit.

---

## 0. Wiring (BẮT BUỘC làm trước)

Helper (`flowBlock`, `calloutBlock`, `comparisonBlock`) đã có sẵn. Topic 04 **không có câu calc** → không cần `calcBlock`.

1. Tạo `const topic04: Chapter = { ... }` (đặt ngay sau `topic03`).
2. Sửa assembly:

```ts
// thêm dòng:
if (order === 4) return topic04;
```

**Renderer contract (nhắc lại):** `comparisonBlock` `columns.length === rows[i].cells.length + 1`; flow `edges.from/to` trỏ node có thật cùng block; node id dùng `_`; flow layout chỉ `horizontal`/`tree` (tree set `parent`); edge label NGẮN.

---

## 1. Khung Chapter

```ts
const topic04: Chapter = {
  slug: "topic-04",
  order: 4,
  title: "Topic 04 — Jobbing & Batch Production System",
  bigIdea:
    "Jobbing và Batch nằm ở đầu THẤP của phổ variety↔quantity — và bài học lớn là: ở volume thấp, quản lý KHÔNG nằm ở máy mà ở DÒNG CHẢY. (1) Tầng định vị (Groover §2.3): jobbing = job shop (Q=1–100, made-to-order, thiết bị general-purpose + thợ tay nghề cao, unit cost cao nhất, fixed-position/process layout); batch = medium (Q=100–10.000, sản xuất theo lô chuẩn hóa, chịu setup/changeover time, make-to-stock, process/cellular layout) — nhà quản lý chọn hệ thống theo variety & volume, biết rằng variety cao thì quantity thấp và ngược lại. (2) Nhưng Groover chỉ ra ~95% thời gian của một part là chờ/di chuyển, chỉ 5% trên máy (Fig 2.4) — nên tầng vận hành (slide) mới là trọng tâm: chu trình Production Planning & Control (routing → scheduling → dispatching → expediting → progress review) cùng công cụ kiểm soát (block system, production clearance list, inventory status report) để cắt non-value time và giao đúng hạn đơn khách. → Future manager hiểu: với jobbing/batch, lợi thế cạnh tranh đến từ ĐIỀU PHỐI dòng công việc & thông tin (giảm MLT, giảm bottleneck), không phải từ tự động hóa; và jobbing↔batch là một sự đánh đổi flexibility/customization ↔ efficiency/chuẩn hóa lô chọn theo thị trường.",
  learningObjectives: [
    "Định vị jobbing và batch trên phổ variety↔quantity (Groover Fig 2.5): quan hệ nghịch biến, hard vs soft variety.",
    "Nêu 3 dải production quantity (low 1–100 = job shop; medium 100–10.000 = batch; high >10.000 = mass) và loại plant tương ứng.",
    "Phân biệt 4 plant layout types (fixed-position, process, cellular, product) và layout nào hợp jobbing/batch.",
    "Giải thích insight 'dòng chảy': ~95% thời gian một part là chờ/di chuyển (Fig 2.4) → vì sao PPC là trọng tâm ở volume thấp; định nghĩa setup/changeover time.",
    "Mô tả đặc điểm jobbing/project: Q=1, non-standardised, make-to-order (MTO), low-cycle, long MLT (nhược điểm chính), unit cost cao, thiết bị multi-function + thợ tay nghề cao.",
    "Mô tả chu trình PPC của jobbing: routing → scheduling → dispatching; và progress review method (job shop).",
    "Mô tả đặc điểm batch: lô nhỏ chuẩn hóa, lặp lại theo demand, MLT nhỏ hơn jobbing, MTS/MTO, core in-line + phần còn lại outsource, compromise giữa jobbing & mass (liên hệ JIT).",
    "Mô tả chu trình PPC của batch: routing → scheduling → dispatching → expediting; công cụ SOP, bar chart/production control chart.",
    "Phân biệt các progress review methods của batch: block system, production clearance list (PCL), inventory status report, vai trò expediter.",
    "So sánh jobbing vs batch vs mass theo volume, variety, standardization, layout, unit cost, MLT, equipment.",
  ],
  knowledgeMap: { /* xem mục 2 */ },
  sections: [ /* xem mục 3 — s1..s11 */ ],
  questions: [ /* xem mục 4 — q01..q12 (5 options A–E) */ ],
  status: "ready",
  source:
    "Manufacturing Systems — slide 'Chapter 4 Jobbing and Batch' (lecturer Le Phuoc Luong, 39 slide) cho tầng vận hành PPC + ebook Groover, Automation, Production Systems & CIM 4e, §2.3 'Production Facilities' (p.33–36) và Fig 2.4 (p.32) cho tầng định vị (variety↔quantity, dải production quantity, plant layout, setup time).",
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
    "Volume thấp → quản DÒNG CHẢY, không quản máy: (A) định vị jobbing/batch trên phổ variety↔quantity; (B) vận hành jobbing (PPC); (C) vận hành batch (PPC + progress review). Bấm node để mở chi tiết.",
  nodes: [
    { id: "jb", label: "Jobbing & Batch Production", group: "concept", sectionId: "s1",
      detail: "Đầu thấp của phổ variety↔quantity; lợi thế đến từ điều phối dòng chảy, không phải tự động hóa." },

    { id: "g_pos", label: "A. Định vị (variety↔quantity)", group: "concept", parent: "jb", sectionId: "s1",
      detail: "Dải production quantity, plant layout, insight 95% thời gian chờ (Groover §2.3)." },
    { id: "g_job", label: "B. Jobbing/Project vận hành", group: "concept", parent: "jb", sectionId: "s4",
      detail: "Đặc điểm Q=1/MTO, MLT/cost, PPC, progress review (slide 4.1)." },
    { id: "g_batch", label: "C. Batch vận hành", group: "concept", parent: "jb", sectionId: "s8",
      detail: "Lô chuẩn hóa, PPC + expediting, progress review methods (slide 4.2)." },

    // Nhóm A
    { id: "t_spectrum", label: "Phổ variety↔quantity + 3 dải", group: "term", parent: "g_pos", sectionId: "s1",
      detail: "Low(1–100)=job shop, medium(100–10k)=batch, high(>10k)=mass; nghịch biến." },
    { id: "t_layout", label: "4 plant layout types", group: "term", parent: "g_pos", sectionId: "s2",
      detail: "Fixed-position / process / cellular / product." },
    { id: "t_flow", label: "Insight dòng chảy (95% chờ)", group: "term", parent: "g_pos", sectionId: "s3",
      detail: "~95% thời gian part là chờ/di chuyển; setup/changeover time." },

    // Nhóm B
    { id: "t_job_char", label: "Đặc điểm jobbing", group: "term", parent: "g_job", sectionId: "s4",
      detail: "Q=1, non-standard, MTO, low-cycle." },
    { id: "t_job_cost", label: "MLT, unit cost, equipment/skills", group: "term", parent: "g_job", sectionId: "s5",
      detail: "Long MLT = nhược điểm chính; unit cost cao; multi-function + thợ giỏi." },
    { id: "t_job_ppc", label: "PPC jobbing", group: "term", parent: "g_job", sectionId: "s6",
      detail: "Routing → scheduling → dispatching." },
    { id: "t_job_review", label: "Progress review (job shop)", group: "term", parent: "g_job", sectionId: "s7",
      detail: "Realistic vs planning, WIP, bottleneck, make-or-buy info." },

    // Nhóm C
    { id: "t_batch_char", label: "Đặc điểm batch", group: "term", parent: "g_batch", sectionId: "s8",
      detail: "Lô nhỏ chuẩn hóa, lặp lại, MTS/MTO, compromise jobbing↔mass, JIT." },
    { id: "t_batch_ppc", label: "PPC batch", group: "term", parent: "g_batch", sectionId: "s9",
      detail: "Routing → scheduling → dispatching → expediting; SOP." },
    { id: "t_batch_review", label: "Progress review methods", group: "term", parent: "g_batch", sectionId: "s10",
      detail: "Block system, PCL, inventory status report, expediter." },

    { id: "t_compare", label: "Jobbing vs Batch vs Mass", group: "term", parent: "jb", sectionId: "s11",
      detail: "So sánh tổng: volume, variety, layout, cost, MLT (cầu nối Topic 5)." },
  ],
  edges: [
    { from: "jb", to: "g_pos" }, { from: "jb", to: "g_job" }, { from: "jb", to: "g_batch" }, { from: "jb", to: "t_compare" },
    { from: "g_pos", to: "t_spectrum" }, { from: "g_pos", to: "t_layout" }, { from: "g_pos", to: "t_flow" },
    { from: "g_job", to: "t_job_char" }, { from: "g_job", to: "t_job_cost" }, { from: "g_job", to: "t_job_ppc" }, { from: "g_job", to: "t_job_review" },
    { from: "g_batch", to: "t_batch_char" }, { from: "g_batch", to: "t_batch_ppc" }, { from: "g_batch", to: "t_batch_review" },
  ],
},
```

---

## 3. Bối cảnh số liệu (VERIFIED / nguồn rõ)

| Dữ kiện | Giá trị | Nguồn | Tag |
|---|---|---|---|
| Dải production quantity | Low 1–100 · Medium 100–10.000 · High 10.000–hàng triệu units/năm | Groover p.33–34 | VERIFIED |
| Phân bổ thời gian của part (batch machine shop) | ~95% chờ/di chuyển · 5% trên máy; trong 5%: ~30% cutting (~1.5% tổng) + ~70% nonprocessing (~3.5% tổng) | Groover Fig 2.4, p.32 | VERIFIED |
| Ví dụ unit cost (đồng hồ) | Jobbing $50–$60/chiếc vs Mass $15/chiếc | slide 8/39 (ví dụ giảng viên) | nguồn slide |

> **Lưu ý inventory status report (slide 38/39):** bảng số trong slide bị nhòe khi OCR → spec dùng **ví dụ minh họa cấu trúc** (đánh dấu rõ "minh họa"), KHÔNG khẳng định là số gốc slide. Chỉ giữ đúng **cấu trúc 4 cột**: Supplied / Processing / Finished goods / WIP.

---

## 4. Sections (s1 → s11)

> Mỗi section: `id`, `heading`, `blocks[]`, `keyTerms[]`. Diễn giải VI + term EN. Ghi nguồn (Groover p.XX hoặc slide X/39) trong callout. Mỗi section có ≥1 bảng hoặc flow.

### TẦNG A — Định vị (Groover §2.3)

#### s1 — Phổ variety↔quantity & 3 dải production quantity (NEO LENS)
- **comparisonBlock** "3 dải production quantity → loại plant" — columns `["Dải", "Q / năm", "Loại plant", "Đặc trưng"]`; rows:
  - "Low production": cells `["1 – 100 units", "Job shop (≈ jobbing/project)", "Thiết bị general-purpose, thợ tay nghề cao, max flexibility"]`
  - "Medium production": cells `["100 – 10.000 units", "Batch production (hard variety) / cellular (soft variety)", "Chia sẻ thiết bị giữa nhiều sản phẩm; có setup time"]`
  - "High production": cells `["10.000 – hàng triệu units", "Mass production (Topic 5)", "Thiết bị dedicated, high demand rate"]`
- **calloutBlock** `"key"` "Nghịch biến variety ↔ quantity" — "Groover Fig 2.5: variety cao thì quantity thấp và ngược lại — nhà máy thường 'ngồi' trong dải chéo đó. Jobbing/batch nằm ở đầu variety cao / quantity thấp. Phân biệt hard variety (khác biệt lớn, ít common parts — vd xe hơi vs xe tải) và soft variety (khác biệt nhỏ, nhiều common parts — vd các model xe cùng dây chuyền) (Groover p.33–34)."
- **keyTerms:** production quantity, product variety, job shop, hard variety, soft variety.

#### s2 — Plant layout types
- **comparisonBlock** "4 plant layout types (Groover Fig 2.6)" — columns `["Layout", "Bố trí", "Hợp với"]`; rows:
  - "Fixed-position layout": cells `["Sản phẩm đứng yên một chỗ; đưa thợ & thiết bị tới sản phẩm", "Sản phẩm lớn/nặng: tàu, máy bay, đầu máy xe lửa (jobbing/project)"]`
  - "Process layout": cells `["Thiết bị nhóm theo chức năng (khu tiện, khu phay…); part đi qua các khu theo route riêng", "Job shop & batch — linh hoạt nhiều operation sequence"]`
  - "Cellular layout": cells `["Nhóm máy thành cell làm một họ part tương tự (group technology)", "Batch soft-variety (medium) — giảm changeover (Topic 6)"]`
  - "Product layout": cells `["Thiết bị xếp theo trình tự sản phẩm (dây chuyền)", "Mass production (Topic 5)"]`
- **calloutBlock** `"insight"` "Layout phản ánh vị trí trên phổ" — "Đi từ jobbing → batch → mass, layout dịch từ fixed-position/process (linh hoạt, in-process inventory cao) sang product (hiệu quả, dòng thẳng). Process layout linh hoạt nhưng phải di chuyển part nhiều → tồn kho trong chuyền cao (Groover p.34–35)."
- **keyTerms:** fixed-position layout, process layout, cellular layout, product layout.

#### s3 — Insight dòng chảy: 95% thời gian là chờ
- **comparisonBlock** "Một part 'tiêu' thời gian ở đâu (batch machine shop)" — columns `["Thành phần thời gian", "Tỷ lệ (Groover Fig 2.4)"]`; rows:
  - "Moving & waiting (chờ/di chuyển, tồn kho tạm)": cells `["~95% tổng thời gian trong nhà máy"]`
  - "Time on machine (trên máy)": cells `["~5% tổng thời gian"]`
  - "  — trong đó cutting (thực sự gia công)": cells `["~30% của 5% ≈ 1.5% tổng"]`
  - "  — trong đó loading/positioning/gaging (nonprocessing)": cells `["~70% của 5% ≈ 3.5% tổng"]`
- **calloutBlock** `"key"` "Vì sao PPC là trọng tâm ở volume thấp" — "Nếu chỉ ~1.5% thời gian là thực sự cắt gọt, thì đầu tư vào máy nhanh hơn giúp ích rất ít; nút thắt nằm ở dòng chảy — chờ đợi, di chuyển, xếp lịch. Đó là lý do jobbing/batch dồn sức vào Production Planning & Control để cắt non-value time, chứ không phải tự động hóa (Groover Fig 2.4, p.32)."
- **calloutBlock** `"note"` "Setup / changeover time" — "Trong batch, sau mỗi lô phải đổi tooling & lập trình lại máy cho lô kế — gọi setup time / changeover time. Đây là thời gian sản xuất bị mất, là nhược điểm của batch manufacturing (Groover p.35)."
- **keyTerms:** manufacturing lead time (MLT), non-value-added time, setup time, changeover time.

### TẦNG B — Jobbing/Project vận hành (slide 4.1)

#### s4 — Jobbing là gì & đặc điểm cốt lõi
- **comparisonBlock** "Đặc điểm jobbing/project" — columns `["Đặc điểm", "Nội dung"]`; rows:
  - "Volume": cells `["Rất thấp, Q = 1 (một sản phẩm/đơn) → đến mức 'project'; không áp cho hệ thống khác"]`
  - "Item": cells `["Non-standardised — làm theo yêu cầu riêng của khách (customization)"]`
  - "Order type": cells `["Make-to-order (MTO); low-cycle — lâu mới lặp lại đơn giống/tương tự"]`
  - "Ví dụ": cells `["Construction, nghiên cứu, sản xuất linh kiện sửa chữa, máy bay, thiết bị đài TV, trạm không lưu, thủy điện, lò phản ứng, máy đo địa chấn, trang sức đắt tiền, spare parts"]`
- **calloutBlock** `"key"` "Bản chất jobbing" — "Jobbing đáp ứng nhu cầu ĐẶC THÙ của một khách, mỗi đơn gần như một 'dự án' riêng. Vì thế hệ thống jobbing đòi hỏi con người (quản lý, thợ, phần mềm) chuyên nghiệp hơn hệ thống khác (slide 1–5/39)."
- **keyTerms:** jobbing, project production, make-to-order (MTO), non-standardised item, customization.

#### s5 — MLT, unit cost, equipment & skills
- **comparisonBlock** "Ba hệ quả của Q=1" — columns `["Khía cạnh", "Trong jobbing"]`; rows:
  - "Manufacturing lead time": cells `["MLT dài — nhược điểm CHÍNH; lập kế hoạch SX & vật tư theo từng đơn → cycle time dài. Quản lý phải cắt non-value time (vd cổng check-out sân bay mở/đóng theo nhu cầu để giảm chờ)"]`
  - "Unit cost": cells `["Rất cao (gồm cả opportunity cost). Ví dụ: đồng hồ $50–$60/chiếc trong jobbing so với $15 ở mass (slide 8/39)"]`
  - "Equipment & worker skills": cells `["Máy/dụng cụ multi-function (gắn thêm attachments); cần thợ tay nghề cao & am hiểu → đẩy unit cost lên"]`
- **calloutBlock** `"note"` "Đánh đổi cốt lõi" — "Jobbing đổi EFFICIENCY lấy FLEXIBILITY: linh hoạt tối đa để làm bất cứ gì khách cần, nhưng trả giá bằng MLT dài và unit cost cao (slide 6–9/39)."
- **keyTerms:** manufacturing lead time (MLT), unit cost, opportunity cost, multi-function equipment, skilled worker.

#### s6 — PPC của jobbing: Routing → Scheduling → Dispatching
- **flowBlock** `s6` "Chu trình PPC jobbing" layout `horizontal`, nodes:
  - `s6_route` "Routing" — "Xác định work flow của WIP theo yêu cầu work-element; tài liệu: bill of materials (BOM), job cards, process sheets, tools requisitions, specifications. Route có thể bị điều chỉnh bởi production manager nếu cần."
  - `s6_sched` "Scheduling" — "Dựa standard time ước lượng processing time cho mọi work element; gửi thời điểm bắt đầu tới từng workstation; quyết định số planned orders & thứ tự ưu tiên. Phải rõ ràng & cụ thể."
  - `s6_disp` "Dispatching" — "Người điều phối gửi job cards/process sheets tới workstation; gửi BOM, tools & equipment requisitions; điều vật tư/WIP từ kho tới workstation & gửi kế hoạch tới máy tương ứng."
  - edges: `s6_route→s6_sched` label "ước lịch", `s6_sched→s6_disp` label "điều phối". caption: "Ba bước lập & tung kế hoạch cho từng đơn jobbing (slide 10–16/39)."
- **keyTerms:** routing, scheduling, dispatching, bill of materials (BOM), job card, process sheet.

#### s7 — Progress review method (job shop)
- **comparisonBlock** "Thông tin theo dõi tiến độ (job shop)" — columns `["Thông tin review", "Ý nghĩa quản lý"]`; rows:
  - "Realistic vs production planning": cells `["So thực tế với kế hoạch để phát hiện lệch"]`
  - "WIP status & vị trí trong nhà máy": cells `["Biết bán thành phẩm đang ở đâu, tới đâu"]`
  - "Bottleneck positions": cells `["Chỉ ra nút thắt để can thiệp"]`
  - "WIP data tại mỗi máy & tools requisitions tại mỗi workstation": cells `["Chi tiết để điều tiết nguồn lực"]`
  - "Make-or-buy support": cells `["Cung cấp thông tin năng lực để quyết tự làm hay mua"]`
- **calloutBlock** `"note"` "Mục tiêu review" — "Progress review nhằm cải thiện chuyển giao thông tin trong quản lý, giảm paperwork & tránh delay thông tin, cung cấp thông tin năng lực nhà máy (slide 17–18/39)."
- **keyTerms:** progress review, work-in-process (WIP), bottleneck, make-or-buy decision.

### TẦNG C — Batch vận hành (slide 4.2)

#### s8 — Batch là gì & đặc điểm
- **comparisonBlock** "Đặc điểm batch production" — columns `["Đặc điểm", "Nội dung"]`; rows:
  - "Định vị": cells `["Compromise giữa jobbing & mass; nhắm small market segments (nhu cầu nhỏ nhưng ổn định); đáp ứng dao động cầu"]`
  - "Volume & lot": cells `["Low-volume theo lô nhỏ (small lot sizes), nhưng cao hơn jobbing; lặp lại theo demand & lot size"]`
  - "Standardization": cells `["Items chuẩn hóa cho từng lô; đổi ít giữa lô này–lô kia (high standardization batch-to-batch), vd đổi màu xe máy"]`
  - "MLT": cells `["Nhỏ hơn jobbing"]`
  - "Order type": cells `["MTS hoặc MTO tùy cách sản xuất; tăng/giảm số lô theo cầu thị trường (xe máy, quần áo, thực phẩm)"]`
  - "Sourcing": cells `["Sản xuất core components lô lớn (in-line, giảm chi phí vận hành); phần còn lại có thể order từ nhà cung cấp ngoài"]`
- **calloutBlock** `"insight"` "Batch = linh hoạt hơn mass, ổn định hơn jobbing" — "Batch làm 'đúng cái cần, đúng lượng cần' cho từng phân khúc → giảm rủi ro tồn kho/ế so với mass, mà vẫn rẻ hơn jobbing nhờ chuẩn hóa lô. Tư duy này là gốc của Just-in-time (JIT) kiểu Nhật (slide 19–22/39)."
- **keyTerms:** batch production, lot size, make-to-stock (MTS), standardization, just-in-time (JIT).

#### s9 — PPC của batch: Routing → Scheduling → Dispatching → Expediting
- **flowBlock** `s9` "Chu trình PPC batch" layout `horizontal`, nodes:
  - `s9_route` "Routing" — "Dựa yêu cầu khách và/hoặc thuộc tính item (như jobbing); core components làm trên production lines để giảm operational cost."
  - `s9_sched` "Scheduling" — "Chuẩn bị bảng cho từng lô; gửi kế hoạch (gồm processing time) theo standard operating procedure (SOP); work flow giữa các workstation được tự động hóa; job cards/process sheets sẵn ít nhất 1 ngày trước."
  - `s9_disp` "Dispatching" — "Nhận kế hoạch từ SOP; chuẩn bị tools & tài liệu, gửi BOM tới kho ≥1 ngày trước; đảm bảo đủ vật tư; workstation trước chuẩn bị WIP cho workstation sau; dùng màu phân loại vật tư theo ngày; kiểm bằng bar chart / production control chart."
  - `s9_exp` "Expediting" — "Hỗ trợ dispatcher rà tiến độ; nhắc supervisor việc bị quên; xử lý task trễ; lập lịch cho task khẩn bằng red tags; giao task khẩn tới đúng workstation."
  - edges: `s9_route→s9_sched` label "ước lịch", `s9_sched→s9_disp` label "điều phối", `s9_disp→s9_exp` label "thúc đẩy". caption: "Batch thêm bước Expediting (thúc đẩy) so với jobbing, để bám tiến độ nhiều lô song song (slide 23–32/39)."
- **keyTerms:** standard operating procedure (SOP), expediting, red tag, production control chart, bar chart.

#### s10 — Progress review methods của batch
- **comparisonBlock** "4 công cụ theo dõi tiến độ batch" — columns `["Phương pháp", "Cách hoạt động"]`; rows:
  - "a. Block system": cells `["Gộp job cards & specifications cùng ngày thành nhóm; mỗi nhóm một màu (7 màu cho 7 ngày, đỏ = khẩn); task khẩn do quản lý cấp cao giao, red-tag ưu tiên cao"]`
  - "b. Production clearance list (PCL)": cells `["Liệt kê mọi task cùng ngày, mỗi ngày một màu; worker gạch task khi xong; foreman kiểm PCL định kỳ, xóa task đã xong & trả về phòng SX; dispatcher đối chiếu với danh sách expediter"]`
  - "c. Inventory status report": cells `["Báo cáo tồn kho: số raw materials được cấp, số bán thành phẩm đang xử lý, số finished goods (FG), số WIP"]`
  - "d. Vai trò expediter": cells `["Hỗ trợ dispatcher quản & kiểm soát mọi task trong production process"]`
- **comparisonBlock** "Inventory status report — cấu trúc (ví dụ minh họa)" — columns `["Line", "Supplied", "Processing", "Finished goods", "WIP"]`; rows (đánh dấu minh họa, KHÔNG phải số gốc slide):
  - "A": cells `["1.000", "1.000", "1.500", "500"]`
  - "B": cells `["3.000", "0", "0", "0"]`
  - "C": cells `["2.000", "2.000", "4.000", "2.000"]`
  - "D": cells `["5.000", "3.000", "4.500", "1.500"]`
- **calloutBlock** `"note"` "Đọc bảng thế nào" — "Inventory status report cho quản lý thấy nhanh: bao nhiêu vật tư đã cấp, bao nhiêu đang chạy, bao nhiêu đã thành phẩm, bao nhiêu còn dở dang (WIP) theo từng line. Số trong bảng là **ví dụ minh họa cấu trúc**, không phải số gốc slide (slide 37–39/39)."
- **keyTerms:** block system, production clearance list (PCL), inventory status report, finished goods (FG), expediter.

### CẦU NỐI

#### s11 — Jobbing vs Batch vs Mass (định vị tổng)
- **comparisonBlock** "So sánh 3 hệ thống" — columns `["Tiêu chí", "Jobbing", "Batch", "Mass (Topic 5)"]`; rows:
  - "Production quantity": cells `["1 – 100 (Q=1/đơn)", "100 – 10.000 (theo lô)", "10.000 – hàng triệu"]`
  - "Product variety": cells `["Rất cao (hard)", "Trung bình", "Rất thấp"]`
  - "Standardization": cells `["Non-standardised", "Chuẩn hóa theo lô", "Chuẩn hóa cao"]`
  - "Plant layout": cells `["Fixed-position / process", "Process / cellular", "Product (dây chuyền)"]`
  - "Unit cost": cells `["Cao nhất", "Trung bình", "Thấp nhất"]`
  - "MLT": cells `["Dài nhất", "Ngắn hơn jobbing", "Ngắn nhất"]`
  - "Equipment": cells `["Multi-function + thợ giỏi", "Chia sẻ giữa lô, có setup", "Dedicated"]`
- **calloutBlock** `"key"` "Trục xuyên suốt" — "Ba hệ thống là ba điểm trên cùng một trục variety↔quantity. Chọn hệ thống = chọn điểm đánh đổi flexibility ↔ efficiency phù hợp thị trường. Topic 5 sẽ đi sâu đầu 'mass' của trục này (slide + Groover §2.3)."
- **keyTerms:** jobbing, batch production, mass production, flexibility–efficiency tradeoff.

---

## 5. Quiz (12 câu — concept + application; 5 options A–E; bám tư duy đề mẫu)

> Mỗi câu: `id`, `stem` (EN), 5 `options` (id "a".."e", `rationale` Cơ chế→Bẫy→Khóa VI + term EN), `difficulty`, `conceptTested`, `takeaway` (VI). Không cố định đáp án đúng ở một vị trí.

1. **q01** (intermediate) — *Variety↔quantity inverse.* Đúng: khi product variety cao thì production quantity thấp và ngược lại; jobbing = variety cao/volume thấp. Bẫy: nghĩ variety và volume cùng tăng; coi jobbing là high-volume.
2. **q02** (basic) — *Job shop = low production.* Đúng: job shop (1–100 units) dùng general-purpose equipment + thợ tay nghề cao, tối đa flexibility. Bẫy: gán dedicated equipment/low skill cho job shop; coi job shop là high volume.
3. **q03** (intermediate) — *Plant layout matching.* Đúng: fixed-position (sản phẩm lớn đứng yên, đưa thợ tới) hợp jobbing/project; process layout hợp job shop/batch. Bẫy: gán product layout cho jobbing; đảo fixed-position với product.
4. **q04** (advanced) — *95% waiting insight.* Đúng: ~95% thời gian part là chờ/di chuyển, chỉ ~5% trên máy → PPC/điều phối dòng chảy quan trọng hơn tăng tốc máy. Bẫy: nghĩ phần lớn thời gian là cutting; kết luận cần automation ngay.
5. **q05** (intermediate) — *Jobbing characteristics.* Đúng: Q=1, non-standardised, make-to-order, long MLT (nhược điểm chính), unit cost cao. Bẫy: coi jobbing là make-to-stock; cho rằng jobbing có MLT ngắn.
6. **q06** (intermediate, application) — *Unit cost tradeoff.* Cho ví dụ đồng hồ $50–60 jobbing vs $15 mass. Đúng: unit cost jobbing cao vì volume=1, thiết bị multi-function, thợ giỏi, opportunity cost. Bẫy: nghĩ jobbing rẻ hơn vì "không cần dây chuyền"; gán $15 cho jobbing.
7. **q07** (intermediate) — *Jobbing PPC sequence.* Đúng: routing → scheduling → dispatching. Bẫy: đảo dispatching lên trước scheduling; coi routing là bước cuối.
8. **q08** (intermediate) — *Batch = medium + setup time.* Đúng: batch (100–10.000) làm lô chuẩn hóa rồi changeover sang lô kế; setup/changeover time là thời gian mất = nhược điểm; thường make-to-stock. Bẫy: nghĩ batch không có setup time; coi batch = Q=1.
9. **q09** (intermediate) — *Batch vs jobbing.* Đúng: batch có MLT nhỏ hơn, item chuẩn hóa theo lô, lặp lại theo demand, là compromise jobbing↔mass. Bẫy: coi batch = jobbing; nghĩ batch kém linh hoạt hơn mass.
10. **q10** (intermediate) — *Batch PPC + expediting.* Đúng: batch thêm bước expediting; expediter dùng red tags cho task khẩn, hỗ trợ dispatcher rà tiến độ. Bẫy: gán expediting cho routing; coi red tag = inventory report.
11. **q11** (intermediate) — *Progress review methods.* Đúng: block system (nhóm job cards theo màu/ngày, đỏ=khẩn), PCL (liệt kê & gạch task xong), inventory status report (supplied/processing/FG/WIP). Bẫy: trộn lẫn định nghĩa; coi PCL = BOM.
12. **q12** (advanced, application) — *Classify a scenario.* Cho một tình huống (Q & variety) → phân loại jobbing/batch/mass. Đúng: khớp dải quantity + variety. Bẫy: chọn theo tên sản phẩm thay vì Q/variety; đặt Q=1 vào batch.

---

## 6. Lưu ý thực thi (Codex)

- KHÔNG sửa `content/types.ts`. Dùng `flowBlock`/`calloutBlock`/`comparisonBlock` (đã có sẵn). Không dùng calcBlock/formulaBlock (topic này không có phần định lượng).
- Quiz: mỗi câu **5 options** (id "a".."e"), đúng **1** `isCorrect: true`; đừng cố định đáp án đúng ở một vị trí.
- `comparisonBlock`: `cells.length === columns.length − 1` — chú ý bảng 4 cột (s1, s11 → 3 cells), bảng 5 cột (s10 inventory report → 4 cells), bảng 3 cột (s2 → 2 cells), bảng 2 cột (s3/s4/s5/s7/s8/s10-methods → 1 cell).
- Bảng inventory status report (s10): giữ nguyên nhãn "ví dụ minh họa", KHÔNG trình bày như số liệu gốc slide.
- Flow: id node `_`; knowledgeMap `tree` set `parent`; s6/s9 = `horizontal`; edge label ngắn.
- Notation số dùng `× ÷ − ^( )` nếu có; dấu phân cách nghìn giữ dạng `10.000` như slide.
- `status: "ready"` chỉ giữ sau khi Lớp A pass (mục 7).

---

## 7. Verify (Codex chạy)

```bash
npx tsc --noEmit
```
- Phải pass (0 error).
- `comparisonBlock` mọi row `cells.length === columns.length − 1` (đặc biệt s10 inventory report: 5 cột → 4 cells; s1/s11: 4 cột → 3 cells).
- Flow: mọi `edges.from/to` tồn tại trong nodes cùng block; node id `_`; knowledgeMap (`tree`) có `parent` đủ.
- Quiz: mỗi câu 5 options, đúng 1 `isCorrect`.
- Sau khi tsc pass: render-check route `/manufacturing-systems/topic-04` (375/768/1440) — knowledgeMap + 11 section + 12 quiz hiển thị; không horizontal-scroll; nhãn cạnh không bị che. Báo Chaliyah. **KHÔNG commit.**

---

## 8. Coverage matrix (Lớp B — "KHÔNG SÓT kiến thức")

Đối chiếu slide Chapter 4 (39 slide) + Groover §2.3/Fig 2.4. Trạng thái: ✅ Có · ⬜ Thiếu · ⚠️ Rút gọn.

| # | Mục | Nguồn | Section | TT |
|---|---|---|---|---|
| 1 | Phổ variety↔quantity nghịch biến + hard/soft variety | Groover p.33–34 | s1 | ✅ |
| 2 | 3 dải production quantity (low/medium/high) → job shop/batch/mass | Groover p.33–34 | s1, s11 | ✅ |
| 3 | 4 plant layout types (fixed-position/process/cellular/product) | Groover p.34–36, Fig 2.6 | s2 | ✅ |
| 4 | Insight 95% thời gian chờ/di chuyển | Groover Fig 2.4, p.32 | s3 | ✅ |
| 5 | Setup/changeover time (nhược điểm batch) | Groover p.35 | s3, s8 | ✅ |
| 6 | Jobbing: Q=1, non-standard, MTO, low-cycle, ví dụ | slide 1–5/39 | s4 | ✅ |
| 7 | Jobbing MLT dài (nhược điểm chính) + giảm non-value time | slide 6–7/39 | s5 | ✅ |
| 8 | Jobbing unit cost cao (ví dụ đồng hồ $50–60 vs $15) | slide 8/39 | s5 | ✅ |
| 9 | Jobbing equipment multi-function + thợ tay nghề cao | slide 9/39 | s5 | ✅ |
| 10 | Jobbing PPC: routing / scheduling / dispatching | slide 10–16/39 | s6 | ✅ |
| 11 | Jobbing progress review (job shop): realistic vs plan, WIP, bottleneck, make-or-buy | slide 17–18/39 | s7 | ✅ |
| 12 | Batch: compromise, small segments, low-volume lot, chuẩn hóa, MLT nhỏ hơn, MTS/MTO, core+outsource, JIT | slide 19–22/39 | s8 | ✅ |
| 13 | Batch PPC: routing / scheduling / dispatching / expediting + SOP + control chart | slide 23–32/39 | s9 | ✅ |
| 14 | Batch progress review: block system / PCL / inventory status report / expediter | slide 33–39/39 | s10 | ✅ |
| 15 | So sánh jobbing vs batch vs mass | slide + Groover §2.3 | s11 | ✅ |

> 15/15 mục phủ đủ. Groover cho định vị/layout/kinh tế (dùng tối đa), slide cho vận hành PPC. Số VERIFIED (dải quantity, 95% thời gian) trích trang Groover; bảng inventory report đánh dấu minh họa (không bịa số gốc slide).
