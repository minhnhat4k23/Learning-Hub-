# Spec: Manufacturing Topic 01 — Introduction to Manufacturing System

> **Loại:** Soạn mới một topic hoàn chỉnh (rich teaching mode), thay placeholder `topic-01`.
> **File cần sửa:** `content/manufacturing.ts`.
> **Nguồn:** ebook **Groover** *Automation, Production Systems & CIM 4e*, **Chapter 1 Introduction** (sách p.1–18) = **primary/lens**; **slide `Chapter 1 Introduction.pdf`** (60 trang, mục 1.1→1.7) = **khung scope + ví dụ số**. Sách dùng kiểm completeness (Lớp B).
> **Quy ước nội dung:** diễn giải tiếng Việt, giữ nguyên term tiếng Anh; quiz `stem`/`options` = tiếng Anh, `rationale`/`takeaway` = tiếng Việt (Cơ chế → Bẫy → Khóa).
> **Notation công thức:** chỉ dùng `× ÷ − ^( )`, **KHÔNG dùng `·`**.
> **Verify:** `npx tsc --noEmit` phải pass; sau đó render-check (Codex chạy), KHÔNG commit.

---

## 0. Wiring (BẮT BUỘC làm trước)

Hiện 8 chương đều sinh bởi `createPlaceholderChapter(order)` qua `Array.from`. Thay placeholder `topic-01` bằng object thật:

1. Tạo `const topic01: Chapter = { ... }` (đặt trên `createPlaceholderChapter`).
2. Sửa assembly cuối file:

```ts
// OLD:
export const manufacturingChapters: Chapter[] = Array.from(
  { length: 8 },
  (_, index) => createPlaceholderChapter(index + 1),
);

// NEW:
export const manufacturingChapters: Chapter[] = Array.from(
  { length: 8 },
  (_, index) => {
    const order = index + 1;
    if (order === 1) return topic01;
    return createPlaceholderChapter(order);
  },
);
```

3. **Helper:** `manufacturing.ts` chưa có helper. Port y nguyên từ `content/dtb.ts` các helper sau (giữ cùng chữ ký): `flowBlock(sectionId, title, layout, nodes, edges, caption?)`, `calloutBlock(kind, title, body)`, `comparisonBlock(title, columns, rows)`. **Thêm 2 helper cho phần định lượng** (theo schema `types.ts`):

```ts
const formulaBlock = (
  expression: string,
  legend?: { symbol: string; meaning: string }[],
  note?: string,
): Block => ({ type: "formula", formula: { expression, legend, note } });

const calcBlock = (
  title: string,
  steps: { label: string; expr: string; note?: string }[],
  result?: string,
  meaning?: string,
  implication?: string,
): Block => ({ type: "calc", calc: { title, steps, result, meaning, implication } });
```

**Renderer contract (đừng vi phạm):**
- `comparisonBlock`: `columns.length === rows[i].cells.length + 1` (cột đầu là header của cột nhãn dòng).
- Flow: mọi `edges.from/to` phải trỏ tới `id` node có thật trong cùng block; node id dùng `_` (gạch dưới), không gạch ngang.
- Flow `layout` **chỉ** `"horizontal"` hoặc `"tree"` (KHÔNG `"radial"`). `tree` PHẢI set `parent` cho mọi node con.
- Edge label NGẮN; thuật ngữ dài để ở `caption`/prose.

---

## 1. Khung Chapter

```ts
const topic01: Chapter = {
  slug: "topic-01",
  order: 1,
  title: "Topic 01 — Introduction to Manufacturing System",
  bigIdea:
    "Đừng học chương này như một danh sách định nghĩa rời. Groover dựng một khung: một nhà máy là một production system = facilities (máy móc, layout — thứ CHẠM vào sản phẩm) + manufacturing support systems (business, product design, planning, control — thứ ĐIỀU PHỐI THÔNG TIN, không chạm sản phẩm). Mọi khái niệm trong slide — phân loại ngành (manufacturing/service/process; basic producer→converter→fabricator), loại hình sản xuất (jobbing/batch/mass), 5 functions, 4 information-processing functions — đều là các mảnh gắn vào cùng khung đó. Đã là hệ thống thì phải ĐO ĐƯỢC sức khỏe: đó là vai trò bộ chỉ số định lượng 1.7 — MLT (một lô mất bao lâu để xong), Rp (làm ra bao nhiêu mỗi giờ), Ca (công suất tối đa), U (dùng hết bao nhiêu phần công suất), WIP (bao nhiêu hàng đang dở). Và khi muốn cải tiến, automation KHÔNG phải mục tiêu tự thân mà là đòn bẩy CÓ ĐIỀU KIỆN: theo USA Principle phải Understand → Simplify trước (có khi đơn giản hóa đã đủ, chưa cần tự động hóa); chọn fixed / programmable / flexible automation theo volume × variety; và migrate dần manual → automated → integrated theo vòng đời sản phẩm, vì con người vẫn là thành phần thiết yếu. → Là future manager, bạn đọc được bất kỳ nhà máy nào qua 3 câu hỏi: Nó là hệ thống kiểu gì? Nó khỏe đến đâu? Tự động hóa ở đâu là đáng?",
  learningObjectives: [
    "Mô tả production system = facilities + manufacturing support systems (Groover Fig 1.1) và phân biệt phần 'chạm sản phẩm' vs phần 'điều phối thông tin'.",
    "Phân loại manufacturing industries: manufacturing vs service vs process industry; discrete vs continuous; và 3 lớp basic producer → converter → fabricator.",
    "Phân biệt 3 loại hình sản xuất jobbing / batch / mass theo volume, production rate, worker skills, equipment, plant layout và process-focus vs product-focus.",
    "Liệt kê 5 functions in manufacturing (processing với 4 nhánh, assembly, material handling, inspection & test, process control).",
    "Mô tả 4 information-processing functions (business functions với 3 kiểu hợp đồng, product design, production planning, production control) và nối chúng với manufacturing support systems của Groover.",
    "Phân biệt 3 categories of manufacturing systems theo mức tham gia của con người (manual / worker-machine / automated) và đối chiếu Humans vs Machines (Groover Table 1.1).",
    "Tính Manufacturing Lead Time (MLT) cho các trường hợp tổng quát, đồng nhất, jobbing, mass, flow line.",
    "Tính production rate (Rp), capacity (Ca) cho đơn/đa sản phẩm, utilization (U) và availability (A = (MTBF − MTTR)/MTBF).",
    "Tính WIP, số máy đang chạy thực (Nm), tỉ số WIPR và TIPR; giải thích ý nghĩa 'mỗi máy 1 WIP' là lý tưởng.",
    "Phân biệt fixed / programmable / flexible automation theo trục volume × variety (Groover Fig 1.5).",
    "Giải thích USA Principle (Understand → Simplify → Automate) và 10 strategies for automation & process improvement.",
    "Giải thích Automation Migration Strategy (3 phases) và nêu reasons for automating / advanced manufacturing characteristics; lập luận khi nào manual labor được ưu tiên hơn automation.",
  ],
  knowledgeMap: { /* xem mục 2 */ },
  sections: [ /* xem mục 4 — s1..s14 */ ],
  questions: [ /* xem mục 5 — q01..q12 (5 options A–E) */ ],
  status: "ready",
  source:
    "Manufacturing Systems — Groover, Automation, Production Systems & CIM, 4e (Pearson, 2015), Chapter 1 (p.1–18) + slide 'Chapter 1 Introduction' (mục 1.1–1.7).",
};
```

---

## 2. knowledgeMap (cây 3 tầng = Lens C)

`engine: "flow"`, `layout: "tree"`, `collapsible: true`. Root → 3 nhóm (A/B/C) → leaf. Mỗi node có `detail` + `sectionId`.

```ts
knowledgeMap: {
  engine: "flow",
  layout: "tree",
  collapsible: true,
  caption:
    "3 câu hỏi của một future manager: (A) Nó là hệ thống kiểu gì? (B) Nó khỏe đến đâu? (C) Tự động hóa ở đâu là đáng? Bấm node để mở chi tiết và nhảy tới phần học.",
  nodes: [
    { id: "ms", label: "Manufacturing System", group: "concept", sectionId: "s1",
      detail: "Production system = facilities + support; đo bằng chỉ số; cải tiến bằng automation có điều kiện." },

    { id: "g_what", label: "A. Hệ thống kiểu gì?", group: "concept", parent: "ms", sectionId: "s1",
      detail: "Khung production system + phân loại ngành, loại hình SX, functions, tổ chức thông tin, mức tự động hóa." },
    { id: "g_measure", label: "B. Khỏe đến đâu?", group: "concept", parent: "ms", sectionId: "s7",
      detail: "Bộ chỉ số định lượng 1.7: MLT, Rp, Ca, U, WIP." },
    { id: "g_improve", label: "C. Tự động hóa ở đâu là đáng?", group: "concept", parent: "ms", sectionId: "s12",
      detail: "fixed/programmable/flexible theo volume×variety; USA Principle; 10 strategies; migration; manual vẫn cần." },

    // Nhóm A
    { id: "t_prodsys", label: "Production system (facilities + support)", group: "term", parent: "g_what", sectionId: "s1",
      detail: "Facilities chạm sản phẩm; support systems điều phối thông tin (Groover Fig 1.1)." },
    { id: "t_industries", label: "Phân loại industries", group: "term", parent: "g_what", sectionId: "s2",
      detail: "Manufacturing vs service vs process; discrete vs continuous; basic producer→converter→fabricator." },
    { id: "t_types", label: "Jobbing / Batch / Mass", group: "term", parent: "g_what", sectionId: "s3",
      detail: "3 loại hình SX theo volume; process-focus vs product-focus." },
    { id: "t_funcs", label: "5 functions in manufacturing", group: "term", parent: "g_what", sectionId: "s4",
      detail: "Processing, assembly, material handling, inspection & test, process control." },
    { id: "t_info", label: "4 information-processing functions", group: "term", parent: "g_what", sectionId: "s5",
      detail: "Business functions, product design, production planning, production control." },
    { id: "t_human", label: "Mức tham gia của con người", group: "term", parent: "g_what", sectionId: "s6",
      detail: "Manual / worker-machine / automated + Humans vs Machines." },

    // Nhóm B
    { id: "t_mlt", label: "MLT — Manufacturing Lead Time", group: "term", parent: "g_measure", sectionId: "s7",
      detail: "Tổng thời gian một lô đi qua các work station." },
    { id: "t_rp", label: "Rp — Production rate", group: "term", parent: "g_measure", sectionId: "s8",
      detail: "Số sản phẩm/giờ; gắn defect rate q." },
    { id: "t_ca", label: "Ca — Capacity", group: "term", parent: "g_measure", sectionId: "s9",
      detail: "Ca = W×S×H×Rp; đơn & đa sản phẩm; cân với demand." },
    { id: "t_u", label: "U — Utilization & Availability", group: "term", parent: "g_measure", sectionId: "s10",
      detail: "U = output thực/capacity; A = (MTBF − MTTR)/MTBF." },
    { id: "t_wip", label: "WIP, Nm, WIPR, TIPR", group: "term", parent: "g_measure", sectionId: "s11",
      detail: "Hàng dở dang & tỉ số lý tưởng 1:1." },

    // Nhóm C
    { id: "t_auto3", label: "Fixed / Programmable / Flexible", group: "term", parent: "g_improve", sectionId: "s12",
      detail: "3 loại automation theo volume × variety (Groover Fig 1.5)." },
    { id: "t_usa", label: "USA Principle + 10 strategies", group: "term", parent: "g_improve", sectionId: "s13",
      detail: "Understand → Simplify → Automate; 10 chiến lược cải tiến." },
    { id: "t_migrate", label: "Migration + manual labor", group: "term", parent: "g_improve", sectionId: "s14",
      detail: "3 phases; reasons for automating; khi nào manual thắng." },
  ],
  edges: [
    { from: "ms", to: "g_what" }, { from: "ms", to: "g_measure" }, { from: "ms", to: "g_improve" },
    { from: "g_what", to: "t_prodsys" }, { from: "g_what", to: "t_industries" }, { from: "g_what", to: "t_types" },
    { from: "g_what", to: "t_funcs" }, { from: "g_what", to: "t_info" }, { from: "g_what", to: "t_human" },
    { from: "g_measure", to: "t_mlt" }, { from: "g_measure", to: "t_rp" }, { from: "g_measure", to: "t_ca" },
    { from: "g_measure", to: "t_u" }, { from: "g_measure", to: "t_wip" },
    { from: "g_improve", to: "t_auto3" }, { from: "g_improve", to: "t_usa" }, { from: "g_improve", to: "t_migrate" },
  ],
},
```

---

## 3. Bối cảnh số liệu (VERIFIED — trích slide)

Mọi con số tính toán bên dưới lấy thẳng từ worked example trong slide; ghi nguồn trang slide. Codex KHÔNG đổi số.

| Ví dụ | Dữ liệu | Kết quả | Nguồn |
|---|---|---|---|
| MLT order | n = 8 WS, Q = 50 items, Ts = 3 h, Tp = 6 min = 0.1 h, Tn = 7 h; 1 shift = 7 h/ngày | TMLT = 8 × (3 + 50 × 0.1 + 7) = **120 h**; số ngày = 120 ÷ 7 = **17.14 ngày** | slide 43/59 |
| Capacity 1 máy loại | W = 6 máy (lathe), S = 10 shift/tuần, H = 6.4 h/shift, Rp = 17 item/h | Ca = 6 × 10 × 6.4 × 17 = **6 528 item/tuần** | slide 50/59 |
| Capacity đa SP | item1: D=600, Rp=10 → 60 h; item2: D=1000, Rp=20 → 50 h; item3: D=2200, Rp=40 → 55 h; S×H = 10 × 6.5 = 65 h; N = 1 | Σ = 165 h; 165 ÷ 65 = 2.54 → **3 WS** | slide 55–56/59 |
| Utilization | Ca khả dụng: 65 h/tuần × 20 unit/h; sản lượng thực = 1 000 unit | Ca = **1 300 unit/tuần**; U = 1000 ÷ 1300 = **76.92 %**; TR = 1000 ÷ 20 = **50 h** | slide 58–59/59 |

> Đơn vị Tp ở ví dụ MLT: 6 min = 0.1 h ⇒ Q × Tp = 50 × 0.1 = 5 h. Giữ nguyên cách quy đổi này.

---

## 4. Sections (s1 → s14)

> Mỗi section: `id`, `heading`, `blocks[]`, `keyTerms[]`. Diễn giải tiếng Việt + term EN. Mỗi section ≥1 visual block. Dưới đây nêu nội dung bắt buộc + block type + code cho phần khó.

### TẦNG A — Hệ thống kiểu gì?

#### s1 — Production system = Facilities + Support (NEO LENS)
- **flowBlock** `s1` "Một nhà máy là một hệ thống" layout `tree`, nodes (set `parent`):
  - `s1_sys` "Production system" (group `concept`) — "Tập hợp người + thiết bị + thủ tục tổ chức để thực hiện manufacturing operations của doanh nghiệp (Groover §1.1)."
  - `s1_fac` "Facilities" (parent `s1_sys`) — "Phần vật lý: factory, máy & tooling, material handling, inspection equipment, plant layout. Các manufacturing systems trong facilities 'CHẠM' vào sản phẩm."
  - `s1_sup` "Manufacturing support systems" (parent `s1_sys`) — "Người + thủ tục để quản lý sản xuất, giải bài toán kỹ thuật & logistics; KHÔNG chạm sản phẩm mà plan & control tiến độ. Gồm product design + business functions."
  - edges: `s1_sys→s1_fac`, `s1_sys→s1_sup` (phân rã, không nhãn). caption: "Cả Topic 01 treo vào khung này: phần CHẠM sản phẩm (facilities) và phần ĐIỀU PHỐI THÔNG TIN (support)."
- **calloutBlock** `"key"` "Vì sao khung này quan trọng" — "Blue-collar (direct labor) vận hành facilities; white-collar (professional staff) lo support systems. Mỗi khái niệm phía sau (loại hình SX, functions, info-processing, chỉ số, automation) đều rơi vào một trong hai nhánh — nhớ khung thì không học vẹt."
- **keyTerms:** production system, facilities, manufacturing support systems, plant layout, manufacturing system.

#### s2 — Phân loại manufacturing industries
- **comparisonBlock** "Manufacturing vs Process industry" — columns `["Tiêu chí", "Manufacturing", "Process industry"]`; rows:
  - "Sản phẩm đầu ra": cells `["Discrete items — đếm được (cars, mobile, TV, clothes)", "Continuous items — liên tục (liquid, pure water, beverage, beer, milk)"]`
  - "Bản chất chế biến": cells `["Lắp ráp/gia công vật rời rạc", "Chế biến dòng vật chất liên tục (petro, paint processing)"]`
  - "Ví dụ công ty": cells `["General Motors, Toyota (car); Boeing (aerospace)", "Coca-Cola, Pepsi (beverage); Du Pont (chemicals)"]`
- **calloutBlock** `"note"` "Manufacturing vs Service" — "Khác biệt cốt lõi: manufacturing tạo outcome TANGIBLE (sờ được), service tạo outcome INTANGIBLE. Nhiều ngành lai (Foods vừa SX vừa dịch vụ). Cả hai đều tạo value cho khách hàng."
- **flowBlock** `s2` "3 lớp trong chuỗi sản xuất" layout `horizontal`, nodes:
  - `s2_basic` "Basic producer" — "Biến natural resources → raw materials cho các firm khác (vd Yarn Co.: input tằm tơ → output sợi)."
  - `s2_conv` "Converter" — "Mắt xích trung gian: tạo semi-products/components (vd Textile Co.: sợi → vải; Tire/Plastic Co.)."
  - `s2_fab` "Fabricator" — "Lắp ráp thành final products ra thị trường (vd Garment Co.: vải+nút+chỉ → áo; Honda: linh kiện → xe)."
  - edges: `s2_basic→s2_conv` label "raw → semi", `s2_conv→s2_fab` label "semi → final". caption: "Một sản phẩm cuối đi qua 3 lớp; một firm có thể đứng ở bất kỳ lớp nào."
- **keyTerms:** manufacturing industry, process industry, discrete vs continuous items, basic producer, converter, fabricator.

#### s3 — Types of production: Jobbing / Batch / Mass
- **comparisonBlock** "Ba loại hình sản xuất" — columns `["Tiêu chí", "Jobbing / Project", "Batch", "Mass"]`; rows:
  - "Volume/quantity": cells `["Rất nhỏ (very small)", "Nhỏ–vừa (small)", "Lớn (large)"]`
  - "Production rate": cells `["Thấp", "Trung bình", "Cao"]`
  - "Worker skills": cells `["Cao, multi-functional", "Trung bình", "Thấp, single-functional"]`
  - "Equipment": cells `["General-purpose, đa năng", "Linh hoạt, theo lô", "Special, single-functional cho từng việc"]`
  - "Special tools": cells `["Ít", "Vừa", "Nhiều, chuyên dụng"]`
  - "Plant layout — focus": cells `["Process focus (gom theo loại công đoạn)", "Trung gian", "Product focus (xếp theo dòng sản phẩm)"]`
  - "Ví dụ / demand": cells `["1 sản phẩm/lần — máy bay; demand rất thấp", "Mỗi lô số lượng định trước; demand theo đợt", "Mass customization; demand cao, đều"]`
- **calloutBlock** `"insight"` "Trục xuyên suốt" — "Đi từ jobbing → mass là đi theo trục VOLUME tăng dần: volume cao kéo theo rate cao, skill thấp đi, equipment chuyên dụng hơn, layout chuyển từ process-focus sang product-focus. Nhớ một trục, suy ra cả bảng."
- **keyTerms:** jobbing/project production, batch production, mass production, mass customization, process focus, product focus, plant layout.

#### s4 — Functions in manufacturing (5)
- **flowBlock** `s4` "5 functions: từ raw materials → items" layout `horizontal`, nodes (hub `s4_proc` ở trái → các nhánh):
  - `s4_proc` "1. Processing" — "Biến đổi vật liệu. 4 nhánh: (a) basic processes (raw → hình dạng ban đầu); (b) secondary processes (→ hình học cuối); (c) operations enhancing physical properties (tăng độ bền — value added); (d) finishing operations (làm nhẵn/đẹp, hấp dẫn khách)."
  - `s4_asm` "2. Assembly" — "Joining/combine các components thành final product."
  - `s4_mh` "3. Material handling" — "Di chuyển & lưu trữ vật liệu/linh kiện cho công đoạn kế; đảm bảo sẵn sàng cho production planning."
  - `s4_insp` "4. Inspection & test" — "Phần của quality control; xác nhận sản phẩm đạt chuẩn cho khách."
  - `s4_ctrl` "5. Process control" — "Điều tiết từng job & assembly, và quản lý hoạt động ở cấp nhà máy (plant-level)."
  - edges: `s4_proc→s4_asm` label "ghép", `s4_asm→s4_insp` label "kiểm"; thêm `s4_proc→s4_mh` label "phục vụ", `s4_proc→s4_ctrl` label "giám sát" để thể hiện 2 function này phục vụ toàn tuyến. caption: "Processing & assembly trực tiếp biến đổi sản phẩm; material handling, inspection, process control hỗ trợ và giám sát toàn tuyến."
- **keyTerms:** processing, basic/secondary processes, finishing operations, assembly, material handling, inspection and test, process control.

#### s5 — Organization & information processing (4) ↔ Groover support systems
- **flowBlock** `s5` "Dòng thông tin: order → product" layout `horizontal`, nodes:
  - `s5_biz` "1. Business functions" — "Giao tiếp với khách: sales/marketing, forecasting, order entry, billing. 3 kiểu hợp đồng: (a) make to order; (b) make to stock (đáp ứng từ tồn kho); (c) forecasting demand (SX theo dự báo)."
  - `s5_design` "2. Product design" — "Bản vẽ thiết kế, đặc tính sản phẩm & yêu cầu vật liệu; nếu khách cấp thiết kế thì phòng design không tham gia."
  - `s5_plan` "3. Production planning" — "Process planning, master schedule, MRP, capacity planning — dựa trên thiết kế cuối + yêu cầu công nghệ."
  - `s5_ctrl` "4. Production control" — "Shop floor control, inventory control, quality control — giám sát SX thực thi đúng kế hoạch."
  - edges: `s5_biz→s5_design` label "đơn hàng", `s5_design→s5_plan` label "thiết kế", `s5_plan→s5_ctrl` label "kế hoạch". caption: "Đây chính là 4 manufacturing support functions của Groover (Fig 1.3) — phần ĐIỀU PHỐI THÔNG TIN, không chạm sản phẩm."
- **calloutBlock** `"note"` "3 dạng production order" — "Mọi đơn sản xuất rơi vào 1 trong 3: làm theo spec của khách (make to order) / khách mua sản phẩm sẵn có của hãng (make to stock) / lệnh nội bộ dựa trên forecast. Phân biệt 3 cái này quyết định cách hoạch định."
- **keyTerms:** business functions, make to order, make to stock, forecasting, product design, production planning, master production schedule, material requirements planning (MRP), capacity planning, production control, shop floor control, inventory control, quality control.

#### s6 — 3 categories theo mức tham gia của con người
- **comparisonBlock** "Manual / Worker-machine / Automated" — columns `["Loại", "Con người làm gì", "Ví dụ"]`; rows:
  - "Manual work system": cells `["≥1 công nhân thao tác, KHÔNG có powered tool (chỉ hand tools)", "Thợ dũa cạnh chi tiết; inspector dùng micrometer"]`
  - "Worker-machine system": cells `["Công nhân vận hành powered equipment; kết hợp điểm mạnh người + máy", "Thợ tiện engine lathe; thợ + robot trong cell hàn"]`
  - "Automated system": cells `["Máy thực hiện process không cần con người trực tiếp; semi- vs fully-automated", "Máy ép nhựa chạy tự động, công nhân gom hàng định kỳ"]`
- **comparisonBlock** "Humans vs Machines — điểm mạnh (Groover Table 1.1)" — columns `["Bên", "Mạnh ở"]`; rows:
  - "Humans": cells `["Cảm nhận kích thích bất ngờ; nghĩ giải pháp mới; xử lý vấn đề trừu tượng; thích ứng thay đổi; học từ kinh nghiệm; quyết định với dữ liệu thiếu"]`
  - "Machines": cells `["Lặp lại nhất quán; lưu/truy hồi lượng lớn dữ liệu; làm nhiều việc song song; lực & công suất lớn; tính toán & quyết định thường quy nhanh"]`
- **calloutBlock** `"insight"` "Semi- vs fully-automated" — "Semiautomated: máy làm một phần chu kỳ dưới program control, công nhân lo phần còn lại (load/unload) mỗi chu kỳ. Fully automated: chạy dài hơn một chu kỳ mà KHÔNG cần người mỗi chu kỳ. Đây là cầu nối sang tầng C (mức tự động hóa)."
- **keyTerms:** manual work system, worker-machine system, automated system, semiautomated, fully automated.

### TẦNG B — Khỏe đến đâu? (chỉ số định lượng 1.7)

#### s7 — Manufacturing Lead Time (MLT)
- **prose** ngắn: MLT = tổng thời gian một work unit đi qua tất cả machine/work station, gồm setup + gia công + thời gian không vận hành.
- **formulaBlock** tổng quát:
  - expression `"TMLT = Σ (Ts + Q × Tp + Tn)i ,  i = 1 … m"`, legend: `m` = số máy sản phẩm đi qua, `Q` = số sản phẩm/lô (batch), `Ts` = setup time/máy, `Tp` = unit processing time, `Tn` = non-operating time. note: "Cộng dồn thời gian tại từng máy."
- **formulaBlock** các trường hợp đặc biệt (một block, dùng `note` để chú thích):
  - expression `"Đồng nhất: TMLT = n × (Ts + Q × Tp + Tn)   |   Jobbing (Q=1): TMLT = n × (Ts + Tp + Tn)   |   Mass (1 máy): TMLT = Q × Tp (hoặc Tp cho 1 item)   |   Flow line: TMLT = Q × (Tt + max[Tp]i)"`, note: "n = số work station. Flow line chọn WS có max unit processing time làm nút cổ chai; Tt = transfer time."
- **calcBlock** "Ví dụ: đơn 50 sản phẩm, 8 WS" steps:
  - `{ label: "Thay số (công thức đồng nhất)", expr: "TMLT = 8 × (3 + 50 × 0.1 + 7)", note: "Ts=3h, Q=50, Tp=6min=0.1h, Tn=7h" }`
  - `{ label: "Tính trong ngoặc", expr: "= 8 × (3 + 5 + 7) = 8 × 15" }`
  - `{ label: "Kết quả giờ", expr: "= 120 (giờ)" }`
  - `{ label: "Đổi ra ngày (1 shift = 7h/ngày)", expr: "120 ÷ 7 = 17.14 (ngày)" }`
  - result `"TMLT = 120 giờ ≈ 17.14 ngày"`, meaning `"Một lô 50 sản phẩm mất ~17 ngày để hoàn tất qua 8 trạm."`, implication `"MLT dài → vốn nằm trong hàng dở (WIP) lâu → giảm MLT là mục tiêu cải tiến (xem tầng C)."` (VERIFIED slide 43/59)
- **keyTerms:** manufacturing lead time (MLT), setup time (Ts), unit processing time (Tp), non-operating time (Tn), batch quantity (Q).

#### s8 — Production rate (Rp)
- **formulaBlock** "Rp & batch processing":
  - expression `"Batch: (Tb)k = (Ts + Q × Tp)k   →   (Tp) = (Tb)m ÷ Q   →   Rp = 1 ÷ (Tp) = Q ÷ (Tb)m"`, legend: `(Tb)` = thời gian xử lý cả lô tại 1 WS, `Rp` = số sản phẩm/giờ. note: "Có defect rate q: thay Q bằng Q ÷ (1 − q): (Tb)m = (Ts + Q × Tp ÷ (1 − q))m."
- **formulaBlock** "Jobbing & Mass":
  - expression `"Jobbing (Q=1): Rp = 1 ÷ (Ts + Tp)m   |   Mass: Rp = 1 ÷ Tp"`, note: "Mass production bỏ qua setup vì chạy liên tục một sản phẩm."
- **calloutBlock** `"note"` "Defect rate" — "Nếu tỉ lệ phế phẩm là q, muốn ra đủ Q sản phẩm tốt phải làm Q ÷ (1 − q) sản phẩm — kéo dài thời gian lô và giảm Rp thực."
- **keyTerms:** production rate (Rp), batch processing time (Tb), defect rate (q).

#### s9 — Capacity (Ca)
- **formulaBlock** "Capacity cơ bản & biến thể":
  - expression `"Ca = W × S × H × Rp   |   N máy/dòng: Ca = (W × S × H × Rp) ÷ N   |   Đa SP: Cai = (W ÷ N)i × S × H × Rpi"`, legend: `W` = số WS (máy) trong nhà máy, `S` = số shift trong kỳ, `H` = giờ/shift, `Rp` = productivity (sản phẩm/giờ), `N` = số máy/dòng. note: "(W ÷ N) = số dây chuyền trong nhà máy."
- **formulaBlock** "Cân capacity với demand":
  - expression `"W × S × H = D × N ÷ Rp"`, note: "3 yếu tố (W, S, H) quyết định khả năng đáp ứng demand D mỗi tuần. Đa SP: vế phải là tổng nhu cầu; mỗi SP i: Wi × S × H = Di × Ni ÷ Rpi."
- **calcBlock** "Ví dụ: 6 máy lathe" steps:
  - `{ label: "Thay số", expr: "Ca = 6 × 10 × 6.4 × 17", note: "W=6, S=10 shift/tuần, H=6.4h, Rp=17 item/h" }`
  - `{ label: "Kết quả", expr: "= 6 528 (item/tuần)" }`
  - result `"Ca = 6 528 item/tuần"`, meaning `"Công suất tối đa lý thuyết của nhà máy mỗi tuần."` (VERIFIED slide 50/59)
- **calcBlock** "Ví dụ đa SP: cần bao nhiêu WS?" steps:
  - `{ label: "Giờ cần cho từng item (D ÷ Rp)", expr: "item1: 600÷10=60h; item2: 1000÷20=50h; item3: 2200÷40=55h" }`
  - `{ label: "Tổng giờ cần", expr: "60 + 50 + 55 = 165 (h)" }`
  - `{ label: "Giờ khả dụng mỗi WS", expr: "S × H = 10 × 6.5 = 65 (h)" }`
  - `{ label: "Số WS tối thiểu", expr: "165 ÷ 65 = 2.54 → làm tròn lên 3" }`
  - result `"Cần tối thiểu 3 WS"`, meaning `"Làm tròn LÊN vì không thể có 2.54 trạm."`, implication `"Capacity planning trả lời câu hỏi đầu tư bao nhiêu máy/trạm để đủ đáp ứng demand."` (VERIFIED slide 55–56/59)
- **keyTerms:** capacity (Ca), number of work stations (W), shifts (S), hours per shift (H), number of lines (W ÷ N).

#### s10 — Utilization (U) & Availability (A)
- **formulaBlock** "Utilization":
  - expression `"U = [thời gian vận hành] ÷ [thời gian khả dụng] = [sản lượng thực] ÷ [capacity]"`, note: "U ∈ [0, 1]; cho biết dùng hết bao nhiêu phần công suất."
- **formulaBlock** "Availability (độ sẵn sàng máy)":
  - expression `"A = (MTBF − MTTR) ÷ MTBF  (%)"`, legend: `MTBF` = Mean Time Between Failures (thời gian trung bình giữa 2 lần hỏng), `MTTR` = Mean Time To Repair (thời gian sửa trung bình). note: "A cao = máy ít hỏng/sửa nhanh = đáng tin cậy."
- **calcBlock** "Ví dụ utilization một dây chuyền" steps:
  - `{ label: "Capacity", expr: "Ca = 65 × 20 = 1 300 (unit/tuần)", note: "65h/tuần, 20 unit/h" }`
  - `{ label: "Utilization", expr: "U = 1000 ÷ 1300 = 76.92 %", note: "tuần này chỉ làm 1 000 unit" }`
  - `{ label: "Thời gian vận hành thực", expr: "TR = 1000 ÷ 20 = 50 (h)" }`
  - result `"U = 76.92 %, TR = 50 h"`, meaning `"Dây chuyền chỉ dùng ~77% công suất; còn lại là idle time."`, implication `"U thấp → đang lãng phí công suất; là tín hiệu để cải tiến hoặc nhận thêm đơn."` (VERIFIED slide 58–59/59)
- **keyTerms:** utilization (U), availability (A), MTBF, MTTR, idle time.

#### s11 — WIP, Nm, WIPR, TIPR
- **formulaBlock** "Work-in-process & các tỉ số":
  - expression `"WIP = (Ca × U) × TMLT ÷ (S × H)   |   Nm = W × U × Q × Tp ÷ (Ts + Q × Tp)   |   WIPR = WIP ÷ Nm   |   TIPR = TMLT ÷ (N × Tp)"`, legend: `WIP` = số sản phẩm đang dở trong nhà máy, `Nm` = số máy đang chạy thực, `WIPR` = WIP ratio, `TIPR` = time-in-process ratio. note: "WIPR lý tưởng = 1:1 (mỗi máy 1 WIP một thời điểm); TIPR lý tưởng = 1 nhưng thực tế khó."
- **calloutBlock** `"key"` "Đọc các tỉ số" — "WIP cao + TMLT dài = vốn kẹt trong hàng dở. WIPR và TIPR đo mức 'lý tưởng' của dòng chảy: càng gần 1:1 càng tinh gọn. Đây là cầu nối tự nhiên sang tầng C — automation/strategies nhằm kéo WIP & MLT xuống."
- **keyTerms:** work-in-process (WIP), number of operating machines (Nm), WIP ratio (WIPR), time-in-process ratio (TIPR).

### TẦNG C — Tự động hóa ở đâu là đáng?

#### s12 — Fixed / Programmable / Flexible automation (volume × variety)
- **comparisonBlock** "3 loại automation" — columns `["Tiêu chí", "Fixed", "Programmable", "Flexible"]`; rows:
  - "Trình tự thao tác": cells `["Cố định bởi cấu hình thiết bị", "Đổi được bằng program", "Đổi gần như không mất thời gian"]`
  - "Đầu tư": cells `["Rất cao, custom-engineered", "Cao, general-purpose", "Rất cao, custom-engineered"]`
  - "Production rate": cells `["Cao", "Thấp hơn fixed", "Trung bình"]`
  - "Variety / linh hoạt": cells `["Thấp — không đổi sản phẩm", "Cao — theo lô (batch)", "Cao — chạy mix không cần đổi lô"]`
  - "Phù hợp": cells `["Volume rất lớn (transfer line)", "Low–medium volume, batch (NC, robot, PLC)", "Medium volume, mix sản phẩm (FMS)"]`
- **calloutBlock** `"insight"` "Trục volume × variety (Groover Fig 1.5)" — "Volume cao + variety thấp → fixed. Volume thấp–vừa + variety cao → programmable. Vùng giữa, cần mix liên tục → flexible. Chọn sai loại = đầu tư sai: fixed cho sản phẩm hay đổi sẽ chết cứng; programmable cho volume khổng lồ sẽ chậm."
- **keyTerms:** fixed automation, programmable automation, flexible automation, product variety, production quantity.

#### s13 — USA Principle + 10 strategies
- **flowBlock** `s13` "USA Principle" layout `horizontal`, nodes:
  - `s13_u` "Understand" — "Hiểu kỹ process hiện tại: input/output, từng bước, giá trị gia tăng, công đoạn trước–sau. Dùng operation chart / flow process chart."
  - `s13_s` "Simplify" — "Tìm cách đơn giản hóa: bước nào thừa? gộp/loại được không? Có khi tới đây đã đủ, KHÔNG cần automation."
  - `s13_a` "Automate" — "Chỉ sau khi đã đơn giản hóa mới cân nhắc tự động hóa, dùng 10 strategies / migration."
  - edges: `s13_u→s13_s` label "rồi mới", `s13_s→s13_a` label "rồi mới". caption: "Triết lý cốt lõi của Groover: tự động hóa là bước CUỐI, không phải phản xạ đầu tiên."
- **comparisonBlock** "10 strategies for automation & process improvement" — columns `["#", "Strategy", "Ý chính"]`; rows (10 dòng):
  - `["1", "Specialization of operations", "Thiết bị chuyên dụng làm 1 việc hiệu quả nhất"]`
  - `["2", "Combined operations", "Gộp nhiều công đoạn vào 1 máy → giảm số máy, setup, MLT"]`
  - `["3", "Simultaneous operations", "Làm nhiều thao tác cùng lúc trên 1 chi tiết"]`
  - `["4", "Integration of operations", "Liên kết nhiều WS thành 1 cơ cấu, tự chuyển chi tiết"]`
  - `["5", "Increased flexibility", "Dùng programmable/flexible automation để 1 thiết bị làm nhiều SP"]`
  - `["6", "Improved material handling & storage", "Tự động hóa vận chuyển/lưu kho → giảm WIP, MLT, labor"]`
  - `["7", "On-line inspection", "Kiểm tra ngay trong quá trình → sửa kịp, giảm scrap"]`
  - `["8", "Process control & optimization", "Điều khiển từng process chạy hiệu quả hơn"]`
  - `["9", "Plant operations control", "Điều phối toàn nhà máy; cần networking nội bộ"]`
  - `["10", "Computer-integrated manufacturing (CIM)", "Dùng computer/databases/networks tích hợp toàn doanh nghiệp"]`
- **calloutBlock** `"note"` "10 chiến lược không loại trừ nhau" — "Một dự án cải tiến thường áp nhiều chiến lược cùng lúc. Đây là checklist khi soi một nhà máy: chỗ nào gộp được? kiểm online được? tích hợp được? CIM (chiến lược 10) là mức cao nhất — dùng computer/CAD/CAM tích hợp toàn doanh nghiệp."
- **keyTerms:** USA Principle, understand/simplify/automate, ten strategies for automation, combined operations, integration of operations, on-line inspection, computer-integrated manufacturing (CIM), CAD, CAM.

#### s14 — Automation Migration Strategy + reasons + khi nào manual
- **flowBlock** `s14` "Automation Migration Strategy — 3 phases" layout `horizontal`, nodes:
  - `s14_p1` "Phase 1 — Manual" — "Single-station manned cells chạy độc lập. Tooling rẻ & nhanh → ra sản phẩm mới sớm khi demand chưa chắc."
  - `s14_p2` "Phase 2 — Automated cells" — "Khi demand tăng & justify được, tự động hóa từng trạm; vẫn chuyển hàng giữa trạm bằng tay."
  - `s14_p3` "Phase 3 — Integrated" — "Khi chắc chắn SX mass nhiều năm, tích hợp các trạm tự động + tự chuyển hàng → giảm labor, tăng rate."
  - edges: `s14_p1→s14_p2` label "demand tăng", `s14_p2→s14_p3` label "chắc chắn mass". caption: "Tăng dần mức tự động hóa theo vòng đời sản phẩm — tránh cam kết vốn lớn từ đầu khi demand còn rủi ro (Groover Fig 1.6)."
- **comparisonBlock** "Reasons for automating vs Khi nào manual thắng" — columns `["Khía cạnh", "Lý do nên automate", "Khi nào manual được ưu tiên"]`; rows:
  - "Năng suất & chi phí": cells `["Tăng labor productivity, giảm unit cost, bù labor shortage", "Khi thiếu vốn đầu tư; lương thấp khiến automation khó justify"]`
  - "Sản phẩm": cells `["Chất lượng đồng đều hơn; làm được việc bất khả thi bằng tay", "Sản phẩm tùy biến/độc nhất; vòng đời ngắn; cần linh hoạt"]`
  - "Vận hành": cells `["Giảm MLT & WIP; an toàn hơn; tránh 'chi phí của việc không tự động hóa'", "Demand lên/xuống thất thường; cần giảm rủi ro khi SP mới chưa chắc thành công"]`
- **calloutBlock** `"key"` "Chốt lens" — "Automation không phải lúc nào cũng là câu trả lời đúng (Groover §1.3). Con người vẫn thiết yếu: maintenance, programming, engineering, plant management. Future manager giỏi là người biết DỪNG ở Simplify khi đủ, chọn đúng loại automation theo volume × variety, và migrate đúng nhịp vòng đời."
- **keyTerms:** automation migration strategy, reasons for automating, advanced manufacturing characteristics, manual labor, USA Principle.

---

## 5. Quiz (12 câu — bám tư duy ra đề của bộ đề mẫu `test-exams`)

> **Phân tích tư duy ra đề** (rút từ `test-exams/btap endterm.pdf` + `cdn.fbsbx.com.pdf` — đề endterm mẫu):
> 1. **MCQ 5 lựa chọn (A–E)**, KHÔNG phải 4 — answer sheet ghi "A, B, C, D, or E". → Topic 01 dùng **5 options** mỗi câu (id "a".."e").
> 2. **Không hỏi định nghĩa rời.** Part 2 lấy MỘT tình huống nhà máy rồi hỏi chuỗi tiểu câu leo thang: chỉ số kỹ thuật (cycle time/MLT, % loss) → đòn bẩy vận hành (overtime) → **quyết định tài chính** (min selling price hòa vốn, profit, feasibility đầu tư). Tức bắt **DÙNG chỉ số để ra quyết định** — đúng Lens C.
> 3. **Distractor = kết quả của một lỗi phương pháp cụ thể** (quên nhân n, quên đổi phút→giờ, đảo tử/mẫu), KHÔNG phải số ngẫu nhiên. Đề mẫu cho đáp số rất cụ thể → sai một bước ra số "đẹp" khác.
> 4. **Làm tròn 2 chữ số thập phân; đơn vị rõ** (hours, days, %, units/week).
>
> Áp cho Topic 01: (1) mọi câu **5 options A–E**; (2) câu calc **distractor theo lỗi cụ thể** — số cho sẵn bên dưới, Codex dùng đúng, KHÔNG tự chế; (3) một **case cluster** (một nhà máy → 3 câu leo thang) mô phỏng cấu trúc Part 2; (4) câu **decision** nối chỉ số → hành động quản trị.

Mỗi câu: `id`, `stem` (EN), **5** `options` (id "a".."e"; mỗi option có `rationale` cho cả đúng & sai — Cơ chế → Bẫy → Khóa, VI + term EN), `difficulty`, `conceptTested`, `takeaway` (VI). Với câu calc, đặt các số distractor đúng như liệt kê; đáp án đúng trộn vị trí ngẫu nhiên (không cố định luôn ở "c").

### Nhóm A — Concept (5 options)
1. **q01** (basic) — *Production system components.* conceptTested: "Facilities vs support systems". Đúng: production system = **facilities + manufacturing support systems**, support systems KHÔNG chạm sản phẩm mà plan & control. 4 bẫy: product design thuộc facilities / support systems trực tiếp gia công / chỉ gồm facilities / thêm "customers" như một thành phần chính của hệ thống.
2. **q02** (basic) — *Basic producer / converter / fabricator.* Đúng: **fabricator** lắp ráp final products ra thị trường (Honda). Bẫy: gán vai trò cho basic producer (natural → raw materials) / converter (semi-products) / "chỉ phân phối bán sỉ" / "khai thác tài nguyên thô".
3. **q03** (intermediate) — *Jobbing vs Batch vs Mass.* Đúng: **mass** = volume lớn, worker skill thấp, single-functional equipment, product-focus layout. Bẫy: general-purpose multi-functional equipment cho mass (đó là jobbing) / process-focus cho mass / batch có rate cao nhất / jobbing volume lớn nhất.
4. **q04** (intermediate) — *Three categories by human participation.* Đúng: **fully automated** chạy dài hơn một work cycle mà không cần người mỗi chu kỳ. Bẫy: semiautomated = fully automated / worker-machine = automated / manual work system có powered tools / automated = không bao giờ cần người.
5. **q08** (intermediate) — *Three types of automation by volume × variety.* Đúng: **programmable** phù hợp low–medium volume, batch (NC machine, robot, PLC). Bẫy: transfer line (fixed) cho high variety / flexible ≡ programmable (không phân biệt) / fixed cho low volume / flexible cho mass một sản phẩm duy nhất.

### Nhóm B — Case cluster (một nhà máy, 3 câu leo thang — mô phỏng Part 2)
> **Tình huống chung** (dùng đúng số VERIFIED slide 43/59, ghi ngay trong stem): *"An order of 50 items is processed through 8 identical work stations. Per station: setup time Ts = 3 h, unit processing time Tp = 6 min, non-operating time Tn = 7 h. One shift = 7 h/day."*

6. **q05** (intermediate, calc) — *Compute the manufacturing lead time (MLT).* Đúng: **120 h**. 5 options (error-based):
   - `15` — chỉ tính trong ngoặc, quên nhân n (bỏ ×8).
   - `64` — quên Tn: 8 × (3 + 5) = 64.
   - `96` — quên Ts: 8 × (5 + 7) = 96.
   - **`120`** — đúng: 8 × (3 + 50 × 0.1 + 7) = 8 × 15.
   - `2480` — quên đổi 6 min → 0.1 h (dùng Tp = 6): 8 × (3 + 300 + 7).
   - takeaway: TMLT = n × (Ts + Q × Tp + Tn); nhớ đổi phút → giờ và nhân số work station.
7. **q06** (intermediate, calc) — *Given MLT = 120 h, convert to working days (1 shift = 7 h/day).* Đúng: **17.14 ngày**. options:
   - `5.00` — chia nhầm cho 24.
   - `8.57` — chia nhầm cho 14 (7 × 2).
   - **`17.14`** — đúng: 120 ÷ 7.
   - `120` — quên đổi (giữ nguyên giờ).
   - `840` — nhân thay vì chia: 120 × 7.
   - takeaway: quy đổi qua giờ làm việc/ngày; luôn kèm đơn vị.
8. **q07** (advanced, decision) — *This long MLT most directly increases…* Đúng: **work-in-process (WIP) inventory / vốn kẹt trong hàng dở** → giảm MLT là mục tiêu cải tiến (nối sang tầng C). Bẫy: tăng production rate / tăng capacity / giảm setup time / tự động tăng utilization.

### Nhóm C — Chỉ số + quyết định (5 options)
9. **q09** (intermediate, calc) — *Capacity.* Stem: *"A factory has 6 lathes; it runs 10 shifts/week at 6.4 h/shift; each machine's productivity is 17 items/h. Weekly capacity?"* Đúng: **6 528 items/week**. options:
   - `1020` — quên H: 6 × 10 × 17.
   - `652.8` — quên S: 6 × 6.4 × 17.
   - `1088` — quên W: 10 × 6.4 × 17.
   - **`6528`** — đúng: 6 × 10 × 6.4 × 17.
   - `6630` — dùng nhầm 6.5 h: 6 × 10 × 6.5 × 17.
   - (VERIFIED slide 50/59) takeaway: Ca = W × S × H × Rp — đủ 4 thừa số.
10. **q10** (intermediate, calc) — *Utilization.* Stem: *"A line's weekly capacity is 1 300 units; this week it produced 1 000 units. Utilization?"* Đúng: **76.92 %**. options:
    - `23.08%` — nhầm sang tỉ lệ idle (300 ÷ 1300).
    - **`76.92%`** — đúng: 1000 ÷ 1300.
    - `130%` — đảo tử/mẫu (1300 ÷ 1000).
    - `15.38%` — chia nhầm cho số giờ 65 (1000 ÷ 65).
    - `100%` — cho rằng luôn chạy hết công suất.
    - (VERIFIED slide 58–59/59) takeaway: U = sản lượng thực ÷ capacity, ∈ [0, 1].
11. **q11** (advanced, decision) — *U = 76.92% best indicates / managerial action.* Đúng: dây chuyền còn **~23% công suất nhàn rỗi** → có thể nhận thêm đơn / truy nguyên idle time; **chưa cần** đầu tư thêm máy. Bẫy: "vượt công suất, cần thêm máy" / "đã chạy full, phải overtime" / "availability thấp" (nhầm U với A) / "dữ liệu sai vì U phải = 100%".
12. **q12** (advanced, concept-decision) — *USA Principle / when NOT to automate.* Đúng: theo USA Principle phải **Understand → Simplify trước**, có khi simplify đã đủ (chưa cần automate); manual được ưu tiên khi SP tùy biến / vòng đời ngắn / demand thất thường / thiếu vốn. Bẫy: "automate là bước đầu tiên" / "automation luôn rẻ hơn manual" / "mọi task đều nên tự động hóa" / "manual labor luôn kém hiệu quả". takeaway: automation là đòn bẩy CÓ ĐIỀU KIỆN, không phải mục tiêu tự thân (neo lens).

→ **12 câu** = 5 concept + cluster 3 (một nhà máy) + 2 calc chỉ số + 2 decision. Tất cả **5 options A–E**; câu calc distractor theo lỗi cụ thể ở trên.

---

## 6. Lưu ý thực thi (Codex)

- KHÔNG sửa `content/types.ts`.
- Port helper từ `dtb.ts` + thêm `formulaBlock`, `calcBlock` (mục 0). Mọi block phải đúng union `Block` trong `types.ts` (`formula` dùng `formula.expression`/`legend`/`note`; `calc` dùng `calc.steps[].label/expr/note`, `result`, `meaning`, `implication`).
- Notation: chỉ `× ÷ − ^( )`, KHÔNG `·`. Trong code dùng dấu nhân `×` (U+00D7), dấu chia `÷` (U+00F7), dấu trừ `−` (U+2212).
- Số tính toán: dùng đúng mục 3, KHÔNG tự thêm ví dụ số mới.
- `comparisonBlock`: cells.length === columns.length − 1 cho mọi row.
- Flow: id node dùng `_`; layout `tree` (knowledgeMap + s1) set `parent`; các flow section khác dùng `horizontal`.
- **Quiz: MỖI câu 5 options** (id "a","b","c","d","e"). `AnswerOption.id` là `string` nên thêm "e" KHÔNG phá types (comment trong `types.ts` chỉ gợi ý a–d). Câu calc dùng đúng bộ số distractor ở mục 5, đừng tự chế; đừng cố định đáp án đúng luôn ở một vị trí.
- `status: "ready"` chỉ giữ sau khi Lớp A pass (mục 7).

---

## 7. Verify (Codex chạy)

```bash
npx tsc --noEmit
```
- Phải pass (0 error).
- Kiểm `comparisonBlock`: mọi row `cells.length === columns.length − 1` (đặc biệt bảng 4 cột Jobbing/Batch/Mass và Fixed/Programmable/Flexible: columns 4 ⇒ cells 3).
- Kiểm flow: mọi `edges.from/to` tồn tại trong nodes cùng block; node id dùng `_`; knowledgeMap + s1 (`tree`) có `parent` đủ.
- Kiểm quiz: mỗi câu có đúng **5 options**, đúng **1** option `isCorrect: true`; câu calc khớp bộ số distractor mục 5.
- Sau khi tsc pass: render-check route `/manufacturing-systems/topic-01` (Codex) ở 375/768/1440 — knowledgeMap + 14 section + 12 quiz hiển thị; không horizontal-scroll; nhãn cạnh không bị node che. Báo Chaliyah. **KHÔNG commit.**

---

## 8. Coverage matrix (Lớp B — "KHÔNG SÓT kiến thức")

Đối chiếu slide Chapter 1 (1.1–1.7) + Groover Ch.1. Trạng thái: ✅ Có · ⬜ Thiếu · ⚠️ Sai số.

| # | Mục slide / sách | Nguồn | Section | TT |
|---|---|---|---|---|
| 1 | Manufacturing vs Service (tangible/intangible) | slide 1.1 (10–11) | s2 | ✅ |
| 2 | Manufacturing vs Process industry; discrete vs continuous | slide 1.1 (12–16) | s2 | ✅ |
| 3 | Basic producer / Converter / Fabricator (+ví dụ Yarn/Textile/Garment, Honda) | slide 1.1 (17–19) | s2 | ✅ |
| 4 | Jobbing / Batch / Mass + bảng so sánh (volume, rate, skill, equipment, tools, layout, focus) | slide 1.2 (20–29) | s3 | ✅ |
| 5 | Mass customization | slide 1.2 (28) | s3 | ✅ |
| 6 | 5 functions: processing (a–d), assembly, material handling, inspection, process control | slide 1.3 (30–33) | s4 | ✅ |
| 7 | 4 info-processing functions (business + 3 contract types, design, planning, control) | slide 1.4 (34–36) | s5 | ✅ |
| 8 | Production system = facilities + support (Fig 1.1) | Groover §1.1 (p.2–3) | s1 | ✅ |
| 9 | 3 categories: manual / worker-machine / automated; semi vs fully | Groover §1.1.1 (p.3–5) | s6 | ✅ |
| 10 | Humans vs Machines (Table 1.1) | Groover Table 1.1 (p.4) | s6 | ✅ |
| 11 | MLT — công thức (1)–(5) + ví dụ 120h/17.14d | slide 1.7 (41–43) | s7 | ✅ |
| 12 | Production rate Rp (batch, defect q, jobbing, mass) | slide 1.7 (44–46) | s8 | ✅ |
| 13 | Capacity Ca (10)–(12'), ví dụ 6528 & 3 WS | slide 1.7 (47–56) | s9 | ✅ |
| 14 | Utilization U + Availability A (MTBF/MTTR), ví dụ 76.92% | slide 1.7 (57–61) | s10 | ✅ |
| 15 | WIP, Nm, WIPR, TIPR | slide 1.7 (62–66) | s11 | ✅ |
| 16 | 10 automation strategies | slide 1.5 (37–38) = Groover §1.4.2 | s13 | ✅ |
| 17 | Advanced manufacturing characteristics (9) | slide 1.6 (39–40) | s14 (callout reasons) | ✅ |
| 18 | Fixed / Programmable / Flexible (volume×variety, Fig 1.5) | Groover §1.2.1 (p.7–9) | s12 | ✅ |
| 19 | Reasons for automating (9) | Groover §1.2.3 (p.10) | s14 | ✅ |
| 20 | Manual labor preferred — 6 tình huống | Groover §1.3 (p.11–12) | s14 | ✅ |
| 21 | USA Principle (Understand/Simplify/Automate) | Groover §1.4.1 (p.13–14) | s13 | ✅ |
| 22 | Automation Migration Strategy (3 phases, Fig 1.6) | Groover §1.4.3 (p.16–17) | s14 | ✅ |
| 23 | CIM / CAD / CAM (computerized support) | Groover §1.2.2 (p.9) | s13 (strategy 10 + callout + keyTerms) | ⚠️ tối giản có chủ đích — Groover Ch.1 chỉ nêu sơ, đào sâu ở Part VI (ngoài scope Topic 01). |

> Mục 23 là chỗ duy nhất rút gọn có chủ đích (CAD/CAM/CIM được Groover khai triển ở Part VI). Đã nhắc CIM ở strategy 10 + callout + keyTerms; nếu Chaliyah muốn 1 callout riêng đào sâu CIM/CAD/CAM → bổ sung trước khi chốt `ready`. Mọi mục khác: đã phủ.
