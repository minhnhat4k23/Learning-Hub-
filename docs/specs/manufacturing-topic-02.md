# Spec: Manufacturing Topic 02 — Organization Planning in Factory

> **Loại:** Soạn mới một topic hoàn chỉnh (rich teaching mode), thay placeholder `topic-02`.
> **File cần sửa:** `content/manufacturing.ts` (helper đã có sẵn từ Topic 01).
> **Nguồn:** **slide `Chapter 2 Organization Planning in Factory.pdf`** (28 trang, mục 2.1→2.4) = **PRIMARY & nguồn hoàn chỉnh duy nhất.**
> **QUAN TRỌNG — nguồn:** Ebook **Groover KHÔNG cover** chương này (đã full-text search: Groover thuần công nghệ sản xuất; "organization" chỉ xuất hiện thoáng ở ISO 9000/DFM-A/ERP, không phải organizational design). ⇒ Topic 02 **chỉ bám slide**; Lớp B completeness đối chiếu slide 28 trang, KHÔNG thêm khái niệm ngoài slide.
> **Quy ước nội dung:** diễn giải tiếng Việt, giữ term tiếng Anh; quiz `stem`/`options` = tiếng Anh, `rationale`/`takeaway` = tiếng Việt (Cơ chế → Bẫy → Khóa); quiz **5 options A–E** (bám tư duy đề mẫu, xem Topic 01).
> **Verify:** `npx tsc --noEmit` phải pass; render-check (Codex); KHÔNG commit.

---

## 0. Wiring (BẮT BUỘC làm trước)

Helper (`flowBlock`, `calloutBlock`, `comparisonBlock`) đã có sẵn trong `manufacturing.ts` (Topic 01). Topic 02 **không dùng** `formulaBlock`/`calcBlock` (chương định tính).

1. Tạo `const topic02: Chapter = { ... }` (đặt ngay sau `topic01`).
2. Sửa assembly:

```ts
// OLD:
const order = index + 1;
if (order === 1) return topic01;
return createPlaceholderChapter(order);

// NEW:
const order = index + 1;
if (order === 1) return topic01;
if (order === 2) return topic02;
return createPlaceholderChapter(order);
```

**Renderer contract (nhắc lại):** `comparisonBlock` `columns.length === rows[i].cells.length + 1`; flow `edges.from/to` trỏ node có thật cùng block; node id dùng `_`; flow layout chỉ `horizontal`/`tree` (tree set `parent`); edge label NGẮN.

---

## 1. Khung Chapter

```ts
const topic02: Chapter = {
  slug: "topic-02",
  order: 2,
  title: "Topic 02 — Organization Planning in Factory",
  bigIdea:
    "Nhà máy không chỉ là máy móc — nó là một tổ chức con người phải được THIẾT KẾ. Slide nhấn một điều cốt lõi: KHÔNG tồn tại cấu trúc tổ chức 'lý tưởng cố định'; một tổ chức tốt là tổ chức 'RELEVANT' (phù hợp với thực tế) và DYNAMIC (luôn được cập nhật), phục vụ đúng một mục tiêu — tạo môi trường TEAM-WORK để hoàn thành các orders với chi phí THẤP NHẤT. Từ mục tiêu đó suy ra toàn bộ chương: tiến trình design (xác định functions → nhóm work-elements → mô tả jobs → gán người), các principles thiết kế (span of control 4–8, ít cấp quản lý, cách chia việc, phân biệt authority vs responsibility, tuyển dụng), và việc chọn structure phù hợp quy mô/dự án (direct → direct + consultation → matrix → informal). Cuối cùng, organization planning nhắc: tổ chức là động, phải liên tục điều chỉnh vì tự nó không đạt được target — con người (industrial engineers) mới phát triển các functions để đạt target. → Là future manager, bạn đọc hoặc thiết kế một organization chart bằng ba câu hỏi: Cấu trúc này có giảm conflict và tăng phối hợp không? Nó có đạt mục tiêu với chi phí thấp nhất không? Và nó có đủ linh hoạt để thay đổi khi thực tế thay đổi không?",
  learningObjectives: [
    "Giải thích mục tiêu của organization in factory (team-work đạt orders với lowest cost) và hai tính chất 'relevant' + 'dynamic'.",
    "Mô tả tiến trình organization design (functions → group work-elements → describe jobs → assign individuals) và 2 view-points (cân nhắc mọi yếu tố vs tập trung flexibility).",
    "Giải thích organization chart và các advantages của nó.",
    "Áp dụng span of control (4–8 subordinators) và 4 yếu tố quyết định số subordinators (managerial level, regular problems, ability, monitoring).",
    "Giải thích nguyên tắc managerial levels (nên ~4 cấp; subordinate principle ưu tiên).",
    "Phân biệt 6 cơ sở job division (functions, process, equipment, location, items, customers).",
    "Phân biệt responsibility vs authority; formal (appointed) vs informal authority.",
    "Giải thích recruitment (internal/external) và vai trò training.",
    "Phân biệt 4 loại organization structure: direct; direct + consultation (consultant/control/service/operations); matrix (light vs heavy); informal.",
    "Giải thích organization planning: 2 view-points (dynamic; functions do industrial engineers phát triển) và 5 advantages (continuity, internal promote, job description, long-term planning, stability).",
  ],
  knowledgeMap: { /* xem mục 2 */ },
  sections: [ /* xem mục 3 — s1..s14 */ ],
  questions: [ /* xem mục 4 — q01..q12 (5 options A–E) */ ],
  status: "ready",
  source:
    "Manufacturing Systems — slide 'Chapter 2 Organization Planning in Factory' (mục 2.1–2.4, 28 trang). Ebook Groover KHÔNG cover chủ đề organizational design (đã kiểm full-text); topic slide-only.",
};
```

---

## 2. knowledgeMap (cây 3 tầng = Lens A)

`engine: "flow"`, `layout: "tree"`, `collapsible: true`. Root → 3 nhóm (A/B/C) → leaf. Mỗi node có `detail` + `sectionId`.

```ts
knowledgeMap: {
  engine: "flow",
  layout: "tree",
  collapsible: true,
  caption:
    "3 câu hỏi khi đọc/thiết kế một tổ chức: (A) Tổ chức để làm gì? (B) Thiết kế theo nguyên tắc nào? (C) Chọn & giữ cấu trúc nào? Bấm node để mở chi tiết và nhảy tới phần học.",
  nodes: [
    { id: "org", label: "Organization in Factory", group: "concept", sectionId: "s1",
      detail: "Thiết kế tổ chức con người: relevant + dynamic, team-work đạt orders với chi phí thấp nhất." },

    { id: "g_why", label: "A. Tổ chức để làm gì?", group: "concept", parent: "org", sectionId: "s1",
      detail: "Mục tiêu team-work/lowest cost, tiến trình design, organization chart." },
    { id: "g_rules", label: "B. Thiết kế theo nguyên tắc nào?", group: "concept", parent: "org", sectionId: "s4",
      detail: "Span of control, managerial levels, job division, authority/responsibility, recruitment." },
    { id: "g_form", label: "C. Chọn & giữ cấu trúc nào?", group: "concept", parent: "org", sectionId: "s9",
      detail: "4 structures + organization planning (dynamic)." },

    // Nhóm A
    { id: "t_goal", label: "Mục tiêu & tính chất tổ chức", group: "term", parent: "g_why", sectionId: "s1",
      detail: "Team-work đạt orders lowest cost; 'relevant' + 'dynamic'; giảm conflict, tăng phối hợp." },
    { id: "t_design", label: "Organization design (4 bước)", group: "term", parent: "g_why", sectionId: "s2",
      detail: "Functions → group work-elements → describe jobs → assign; 2 view-points." },
    { id: "t_chart", label: "Organization chart", group: "term", parent: "g_why", sectionId: "s3",
      detail: "Sơ đồ tổ chức + advantages (quản lý trực tiếp, positions, training, quan hệ công việc)." },

    // Nhóm B
    { id: "t_span", label: "Span of control (4–8)", group: "term", parent: "g_rules", sectionId: "s4",
      detail: "Số subordinators/quản lý; 4 yếu tố: managerial level, regular problems, ability, monitoring." },
    { id: "t_levels", label: "Managerial levels (~4)", group: "term", parent: "g_rules", sectionId: "s5",
      detail: "Không cần nhiều cấp; subordinate principle ưu tiên." },
    { id: "t_jobdiv", label: "Job division (6 cơ sở)", group: "term", parent: "g_rules", sectionId: "s6",
      detail: "Functions, process, equipment, location, items, customers." },
    { id: "t_auth", label: "Authority vs Responsibility", group: "term", parent: "g_rules", sectionId: "s7",
      detail: "Responsibility = nghĩa vụ; authority = quyền; formal (appointed) vs informal." },
    { id: "t_recruit", label: "Recruitment & training", group: "term", parent: "g_rules", sectionId: "s8",
      detail: "Internal/external recruitment; training." },

    // Nhóm C
    { id: "t_struct", label: "4 organization structures", group: "term", parent: "g_form", sectionId: "s9",
      detail: "Direct → direct+consultation → matrix → informal." },
    { id: "t_consult", label: "Consultation groups", group: "term", parent: "g_form", sectionId: "s10",
      detail: "Consultant / control / service / operations group." },
    { id: "t_matrix", label: "Matrix (light vs heavy)", group: "term", parent: "g_form", sectionId: "s11",
      detail: "Functional × project; quyền lực nghiêng functional (light) hay project (heavy)." },
    { id: "t_informal", label: "Informal structure", group: "term", parent: "g_form", sectionId: "s12",
      detail: "Quan hệ phi chính thức, không hiện trên chart nhưng ảnh hưởng vận hành." },
    { id: "t_plan", label: "Organization planning", group: "term", parent: "g_form", sectionId: "s13",
      detail: "Dynamic, luôn cập nhật; 5 advantages." },
  ],
  edges: [
    { from: "org", to: "g_why" }, { from: "org", to: "g_rules" }, { from: "org", to: "g_form" },
    { from: "g_why", to: "t_goal" }, { from: "g_why", to: "t_design" }, { from: "g_why", to: "t_chart" },
    { from: "g_rules", to: "t_span" }, { from: "g_rules", to: "t_levels" }, { from: "g_rules", to: "t_jobdiv" },
    { from: "g_rules", to: "t_auth" }, { from: "g_rules", to: "t_recruit" },
    { from: "g_form", to: "t_struct" }, { from: "g_form", to: "t_consult" }, { from: "g_form", to: "t_matrix" },
    { from: "g_form", to: "t_informal" }, { from: "g_form", to: "t_plan" },
  ],
},
```

---

## 3. Sections (s1 → s14)

> Mỗi section: `id`, `heading`, `blocks[]`, `keyTerms[]`. Diễn giải tiếng Việt + term EN. Mỗi section ≥1 visual block. Ghi nguồn trang slide (X/28) trong callout khi có.

### TẦNG A — Tổ chức để làm gì?

#### s1 — Mục tiêu & tính chất của tổ chức (NEO LENS)
- **flowBlock** `s1` "Vì sao cần tổ chức" layout `horizontal`, nodes:
  - `s1_ind` "Cá nhân rời rạc" — "Nhiều người, nhiều máy trong workshop; nếu không tổ chức → conflict, chồng chéo, lãng phí."
  - `s1_team` "Team-work" — "Tổ chức để mọi individual link – share – co-operate, cùng hướng về goals công ty (slide 2/28)."
  - `s1_goal` "Đạt orders — lowest cost" — "Mục tiêu của organization in factory: thiết lập môi trường team-work để hoàn thành orders với chi phí THẤP NHẤT (slide 3–4/28)."
  - edges: `s1_ind→s1_team` label "tổ chức", `s1_team→s1_goal` label "hướng tới". caption: "Tổ chức không phải mục tiêu tự thân — nó tồn tại để team-work đạt orders với chi phí thấp nhất."
- **calloutBlock** `"key"` "'Relevant' + 'Dynamic' — linh hồn cả chương" — "Slide nhấn: KHÔNG có cấu trúc tổ chức 'lý tưởng cố định'. Tổ chức tốt là 'relevant' (phù hợp thực tế) và 'dynamic' (luôn cập nhật). Trend tổ chức tốt: (1) giảm 'arising troubles' trong quản lý; (2) có risk/kế hoạch dự phòng; (3) đáp ứng yêu cầu một cách 'relevant'; (4) giảm conflicts (khi ai cũng biết mình phải làm gì); (5) hỗ trợ teamwork & làm việc hiệu quả trong mức chi phí cho phép (slide 3/28)."
- **keyTerms:** organization in factory, team-work, relevant organization, dynamic organization, organization goals.

#### s2 — Organization design (tiến trình + 2 view-points)
- **flowBlock** `s2` "Tiến trình thiết kế tổ chức" layout `horizontal`, nodes:
  - `s2_func` "Determine functions" — "Xác định các functions cần có để đạt mọi goals của công ty (dựa trên strategy, mission, vision + org goals)."
  - `s2_group` "Group & integrate" — "Nhóm các work-elements, tích hợp functions thành bộ phận."
  - `s2_desc` "Describe jobs" — "Thiết kế & mô tả mọi job để giao cho nhân viên (job description)."
  - `s2_assign` "Assign individuals" — "Gán từng người vào job và xác định function tương ứng."
  - edges: `s2_func→s2_group` label "nhóm", `s2_group→s2_desc` label "mô tả", `s2_desc→s2_assign` label "gán người". caption: "Thiết kế tổ chức đi từ FUNCTIONS (việc cần làm) tới NGƯỜI cụ thể — không đi ngược (slide 5–6/28)."
- **comparisonBlock** "2 view-points trong organization design" — columns `["View-point", "Nội dung", "Đánh giá"]`; rows:
  - "Cân nhắc mọi yếu tố": cells `["Xem xét kỹ mọi impact factor khi thiết kế", "Lý tưởng nhưng KHÓ áp dụng trong thực tế"]`
  - "Tập trung flexibility": cells `["Chấp nhận cấu trúc non-stable, ưu tiên khả năng linh hoạt", "Thực tế hơn — mục tiêu là tổ chức 'relevant', tìm & train người phù hợp"]`
- **calloutBlock** `"note"` "Design đáp ứng 2 nhóm yêu cầu" — "Slide chia yêu cầu thiết kế thành: (1) organization requests — bám mission/vision & org goals của công ty; (2) operational requests — sau khi phân tích manufacturing requirements, để vận hành nhà máy hằng ngày/tuần/tháng (short–medium term). Cộng thêm các yếu tố khác: customers, products, wages… (slide 5/28)."
- **keyTerms:** organization design, functions, work-elements, job description, organization requests, operational requests.

#### s3 — Organization chart & advantages
- **comparisonBlock** "Advantages của organization chart" — columns `["#", "Lợi ích"]`; rows:
  - "1": cells `["Thể hiện trực tiếp cấp quản lý → kiểm tra nhanh functional responsibilities"]`
  - "2": cells `["Cung cấp thông tin về positions và số người phụ trách từng function"]`
  - "3": cells `["Dùng cho training programs và planning"]`
  - "4": cells `["Thể hiện mọi work relationship và xác nhận các managers (supervisors, technicians, production managers…)"]`
- **calloutBlock** `"note"` "Organization chart là gì" — "Sơ đồ trình bày cấu trúc tổ chức trong vận hành: cho thấy ai làm gì, mọi quan hệ giữa functions và/hoặc positions/individuals (slide 8/28)."
- **keyTerms:** organization chart, functional responsibilities, positions, work relationship.

### TẦNG B — Thiết kế theo nguyên tắc nào?

#### s4 — Span of control (subordinate)
- **calloutBlock** `"key"` "Span of control = số subordinators/quản lý" — "Nguyên tắc cơ bản của human resource: số người báo cáo cho CÙNG một manager nên trong khoảng **4 đến 8** (slide 10–11/28). Đây là 'subordinate principle'."
- **comparisonBlock** "4 yếu tố quyết định số subordinators" — columns `["Yếu tố", "Ảnh hưởng tới số subordinators"]`; rows:
  - "Managerial level": cells `["Cấp càng cao → càng ÍT người báo cáo; cấp thấp → nhiều hơn"]`
  - "Regular problems": cells `["Vấn đề lặp lại/phổ biến → nghiêng về cấp quản lý thấp (low level)"]`
  - "Ability of subordinators": cells `["Cấp dưới càng giỏi/tự chủ được việc → TĂNG số subordinators"]`
  - "Monitoring": cells `["Nếu giám sát quan trọng → GIẢM số subordinators (và ngược lại)"]`
- **keyTerms:** span of control, subordinate, subordinate principle.

#### s5 — Managerial levels
- **calloutBlock** `"insight"` "Ít cấp quản lý" — "Không cần nhiều managerial levels — nên khoảng **4 cấp** (slide 13/28). Khi cân nhắc, **subordinate principle được ưu tiên cao hơn** các nguyên tắc khác: thà điều chỉnh span of control còn hơn đẻ thêm tầng quản lý làm tổ chức chậm & cồng kềnh."
- **keyTerms:** managerial levels, flat organization.

#### s6 — Job division (6 cơ sở chia việc)
- **comparisonBlock** "6 cơ sở phân chia công việc" — columns `["Cơ sở", "Chia việc theo"]`; rows:
  - "Functions": cells `["Theo các chức năng cụ thể (sales, production, finance…)"]`
  - "Process": cells `["Theo process/teams/groups của các professional tasks → tăng productivity, dễ quản lý & control"]`
  - "Equipment": cells `["Theo thiết bị/process, dùng cell layout hoặc group technology layout"]`
  - "Location": cells `["Theo vị trí địa lý cụ thể"]`
  - "Items": cells `["Theo family of items (nhóm sản phẩm)"]`
  - "Customers": cells `["Theo khách hàng — nội địa (domestic) hay xuất khẩu (export)"]`
- **keyTerms:** job division, function-based division, process-based division, group technology layout, family of items.

#### s7 — Responsibility vs Authority
- **comparisonBlock** "Responsibility vs Authority" — columns `["Tiêu chí", "Responsibility", "Authority"]`; rows:
  - "Bản chất": cells `["Nghĩa vụ hoàn thành task/job được giao", "Quyền quyết định & điều hành để hoàn thành việc"]`
  - "Cách trao": cells `["Được ASSIGNED (giao)", "Được APPOINTED (bổ nhiệm)"]`
  - "Thuộc về": cells `["Thuộc về employees (cấp dưới)", "Gắn với vị trí quản lý; có hỗ trợ từ cấp dưới"]`
- **calloutBlock** `"note"` "Formal vs Informal authority" — "Authority có 2 dạng: **formal/appointed** (được bổ nhiệm chính thức) và **informal** (từ knowledge, kinh nghiệm, uy tín/goodwill). Ngoài ra có decision-making authority. Lưu ý: responsibility được giao, authority được bổ nhiệm — hai cái phải đi đôi thì việc mới chạy (slide 16–17/28)."
- **keyTerms:** responsibility, authority, formal (appointed) authority, informal authority, decision-making authority.

#### s8 — Recruitment & training
- **calloutBlock** `"note"` "Tuyển dụng & đào tạo" — "Recruitment có thể từ **internal** (nội bộ) và/hoặc **external** (bên ngoài). Đi kèm là **training** để người mới/được điều chuyển đủ năng lực đảm nhận job (slide 18/28)."
- **keyTerms:** recruitment, internal recruitment, external recruitment, training.

### TẦNG C — Chọn & giữ cấu trúc nào?

#### s9 — Bốn organization structures (tổng quan)
- **comparisonBlock** "4 loại organization structure" — columns `["Cấu trúc", "Đặc điểm", "Phù hợp"]`; rows:
  - "Direct": cells `["Đơn giản nhất, các đường quản lý dọc (vertical lines)", "Start-up/công ty nhỏ; nhưng cứng, khó thay đổi/linh hoạt"]`
  - "Direct + Consultation": cells `["Thêm các consultants (báo cáo lên top managers)", "Hầu hết công ty; là cấu trúc phổ biến hiện nay"]`
  - "Matrix": cells `["Song song functional manager + project manager; cross-function", "Dự án chạy chéo phòng ban (construction, software…)"]`
  - "Informal": cells `["Quan hệ phi chính thức, không hiện trên chart", "Luôn tồn tại song song; cần xét ảnh hưởng tới vận hành"]`
- **calloutBlock** `"insight"` "Tiến hóa cấu trúc" — "Đi từ direct (nhỏ, cứng) → thêm consultation (phổ biến, linh hoạt hơn) → matrix (khi có dự án chéo phòng ban). Informal KHÔNG phải một lựa chọn thay thế — nó tồn tại song song mọi cấu trúc chính thức."
- **keyTerms:** direct structure, direct structure with consultation, matrix structure, informal structure.

#### s10 — Consultation groups (trong direct + consultation)
- **flowBlock** `s10` "Top manager & 4 nhóm tư vấn" layout `horizontal`, nodes (hub `s10_top` → 4 nhánh):
  - `s10_top` "Top managers" — "Ra quyết định cuối; các consultation group hỗ trợ, báo cáo lên."
  - `s10_cons` "Consultant group" — "Ít quyền, gồm chuyên gia tư vấn decision-making cho top managers."
  - `s10_ctrl` "Control group" — "Personnel, credit, budget, accountant, audit — CÓ authority trong functions cụ thể của mình."
  - `s10_serv` "Service group" — "Lo các việc cụ thể: building, purchasing, transportation, maintenance, insurance, technical, research."
  - `s10_ops` "Operations group" — "Chuyên gia vận hành, góp ý cho production planning/activities → Operations Department."
  - edges: `s10_top→s10_cons` label "tư vấn", `s10_top→s10_ctrl` label "kiểm soát", `s10_top→s10_serv` label "dịch vụ", `s10_top→s10_ops` label "vận hành". caption: "4 nhóm tư vấn khác nhau ở QUYỀN: consultant chỉ tư vấn; control có authority trong function riêng (slide 21–22/28)."
- **keyTerms:** consultant group, control group, service group, operations group.

#### s11 — Matrix structure (light vs heavy)
- **flowBlock** `s11` "Matrix: hai chiều quản lý" layout `horizontal`, nodes:
  - `s11_func` "Functional manager" — "Quản lý theo chức năng/phòng ban (kỹ thuật, sản xuất…)."
  - `s11_emp` "Employee / work-element" — "Một người/việc chịu SỰ QUẢN LÝ KÉP: vừa theo function vừa theo project."
  - `s11_proj` "Project manager" — "Quản lý theo dự án, chạy chéo (cross) các functions."
  - edges: `s11_func→s11_emp` label "theo chức năng", `s11_proj→s11_emp` label "theo dự án". caption: "Đặc trưng matrix = cross-function, cross-responsibility, cross-management (slide 23/28)."
- **comparisonBlock** "Light vs Heavy matrix" — columns `["Loại matrix", "Quyền lực chính nằm ở", "Phù hợp"]`; rows:
  - "Light matrix": cells `["Functional manager", "Dự án nhỏ (functional-based)"]`
  - "Heavy matrix": cells `["Project manager", "Dự án lớn, trọng tâm là sản phẩm/dự án (project-based)"]`
- **keyTerms:** matrix structure, light matrix, heavy matrix, cross-function, project manager.

#### s12 — Informal structure
- **calloutBlock** `"key"` "Cấu trúc phi chính thức" — "Informal structure dựa trên **quan hệ trong công việc & quản lý**, KHÔNG hiện trên organization chart. Ở đây authority là informal (đối lập formal/appointed). Nó luôn tồn tại song song cấu trúc chính thức; nhà quản lý phải xét ảnh hưởng của nó tới operations & production activities (slide 24/28)."
- **keyTerms:** informal structure, informal authority.

#### s13 — Organization planning (2 view-points)
- **flowBlock** `s13` "Tổ chức là động" layout `horizontal`, nodes:
  - `s13_design` "Design structure" — "Thiết kế cấu trúc 'ideal'/'relevant' hoặc gần đúng."
  - `s13_impl` "Implement & update" — "Tổ chức là DYNAMIC — sau khi thiết kế phải triển khai thực tế và LIÊN TỤC cập nhật (slide 25/28)."
  - `s13_func` "Develop functions" — "Tổ chức KHÔNG tự đạt target — nhà máy phải phát triển các functions để đạt target; đây là trách nhiệm của industrial engineers (slide 26/28)."
  - edges: `s13_design→s13_impl` label "triển khai", `s13_impl→s13_func` label "phát triển". caption: "2 quan điểm: tổ chức là động & luôn cập nhật; và tổ chức chỉ là khung — con người phát triển functions mới đạt target."
- **calloutBlock** `"note"` "Mục đích planning" — "Organization planning nhằm: (1) thiết kế cấu trúc 'ideal'/'relevant' hoặc gần đúng; (2) điều hòa/harmonize các quan hệ công việc giữa các phòng ban để giảm xung đột."
- **keyTerms:** organization planning, dynamic structure, industrial engineers.

#### s14 — Advantages of organization planning (5)
- **comparisonBlock** "5 lợi ích của organization planning" — columns `["Lợi ích", "Ý nghĩa"]`; rows:
  - "Continuity": cells `["Dữ liệu tổ chức giúp manager lên kế hoạch thay thế nhân sự khi cần"]`
  - "Internal promote": cells `["Khi cấu trúc thay đổi, ưu tiên xét đề bạt nội bộ cho vị trí mới"]`
  - "Detailed job description": cells `["Nghiên cứu rõ jobs & responsibilities → đúng người hoàn thành đúng việc hiệu quả"]`
  - "Long-term planning": cells `["Cấu trúc nên được cập nhật theo kế hoạch dài hạn; chú ý các vấn đề nhân sự đặc thù"]`
  - "Stability": cells `["Sự ổn định của nhà máy phụ thuộc tính linh hoạt & động của tổ chức; planning tốt → an toàn cho tương lai"]`
- **calloutBlock** `"key"` "Chốt lens" — "Nghịch lý cốt lõi của chương: STABILITY của nhà máy lại đến từ tính DYNAMIC & flexible của tổ chức. Một org tốt không phải org 'đóng khung hoàn hảo' mà là org liên tục được cập nhật cho 'relevant' — đúng tinh thần Lens của Topic 02."
- **keyTerms:** continuity, internal promotion, long-term planning, organizational stability.

---

## 4. Quiz (12 câu — concept + application, 5 options A–E; bám tư duy đề mẫu)

> Chương định tính → không có câu calc. Nhưng theo tư duy đề mẫu: **5 options A–E**, distractor là **bẫy khái niệm cụ thể** (đảo định nghĩa, nhầm loại structure/nguyên tắc), và có câu **application** (cho tình huống công ty → chọn structure/nguyên tắc đúng). Mỗi câu: `id`, `stem` (EN), 5 `options` (id "a".."e", `rationale` Cơ chế→Bẫy→Khóa VI + term EN), `difficulty`, `conceptTested`, `takeaway` (VI). Không cố định đáp án đúng ở một vị trí.

1. **q01** (basic) — *Goal of organization in factory.* Đúng: thiết lập môi trường **team-work để hoàn thành orders với chi phí thấp nhất**. Bẫy: "tối đa hóa số cấp quản lý" / "loại bỏ hoàn toàn conflict" / "cố định cấu trúc mãi mãi" / "tăng số nhân viên".
2. **q02** (basic) — *'Relevant' & 'dynamic' organization.* Đúng: không có cấu trúc lý tưởng cố định; tổ chức tốt là relevant + luôn cập nhật (dynamic). Bẫy: "có một cấu trúc tối ưu vĩnh viễn" / "dynamic nghĩa là đổi người liên tục" / "relevant = phức tạp nhất" / "tổ chức tốt thì không bao giờ đổi".
3. **q03** (intermediate) — *Organization design sequence.* Đúng: **functions → group work-elements → describe jobs → assign individuals**. Bẫy: bắt đầu bằng "assign individuals" trước; đảo thứ tự jobs/functions; "mua thiết bị trước rồi mới xác định functions".
4. **q04** (intermediate) — *Two view-points in org design.* Đúng: (1) cân nhắc mọi yếu tố = lý tưởng nhưng khó áp dụng; (2) tập trung flexibility = thực tế hơn. Bẫy: cho rằng view-point "cân nhắc mọi yếu tố" là dễ áp dụng nhất; coi flexibility = thiếu kế hoạch.
5. **q05** (basic) — *Organization chart purpose.* Đúng: thể hiện cấu trúc + mọi quan hệ giữa functions/positions, dùng cho quản lý/training/planning. Bẫy: "chart để tính lương" / "chart thay thế job description" / "chart là bắt buộc pháp lý" / "chart chỉ liệt kê máy móc".
6. **q06** (basic) — *Span of control range.* Đúng: **4–8 subordinators** báo cáo cho cùng một manager. Bẫy: "1–2" / "10–20" / "không giới hạn" / "đúng bằng số managerial levels".
7. **q07** (intermediate) — *Factors affecting number of subordinators.* Đúng: cấp dưới càng giỏi (ability) → TĂNG số; giám sát càng quan trọng → GIẢM số; cấp quản lý càng cao → ít người báo cáo. Bẫy: đảo chiều (ability cao → giảm số); coi monitoring quan trọng → tăng số.
8. **q08** (intermediate) — *Bases of job division.* Đúng: chọn một cơ sở hợp lệ trong 6 (functions/process/equipment/location/items/customers) — vd chia theo **family of items** hoặc **customers (domestic/export)**. Bẫy: "chia theo màu sắc logo" / "chia theo thâm niên" — không nằm trong 6 cơ sở.
9. **q09** (intermediate) — *Responsibility vs Authority.* Đúng: responsibility = nghĩa vụ được **assigned** (thuộc cấp dưới); authority = quyền được **appointed**, có formal & informal. Bẫy: "responsibility được bổ nhiệm, authority được giao" (đảo); "chỉ có formal authority"; "authority luôn thuộc cấp dưới".
10. **q10** (intermediate, application) — *Chọn structure cho tình huống.* Stem: một start-up nhỏ, ít nhân sự, quan hệ báo cáo đơn giản → **direct structure**. Bẫy: chọn matrix (dành cho dự án chéo phòng ban) / informal (không phải lựa chọn thiết kế chính) / "direct + consultation" cho công ty siêu nhỏ (thừa).
11. **q11** (advanced) — *Light vs Heavy matrix.* Đúng: **light matrix** → quyền lực chính ở **functional manager** (dự án nhỏ); **heavy matrix** → quyền ở **project manager** (dự án lớn). Bẫy: đảo light/heavy; cho rằng matrix chỉ có một manager; coi matrix = không có functional manager.
12. **q12** (advanced, application) — *Organization planning & dynamic.* Đúng: tổ chức là dynamic, phải liên tục cập nhật; bản thân tổ chức không tự đạt target — cần phát triển functions (trách nhiệm industrial engineers); stability đến từ tính flexible. Bẫy: "thiết kế xong là cố định" / "tổ chức tự đạt target mà không cần functions" / "stability = không bao giờ thay đổi" / "informal structure phải bị loại bỏ hoàn toàn". takeaway: org tốt = relevant + dynamic (neo lens).

---

## 5. Lưu ý thực thi (Codex)

- KHÔNG sửa `content/types.ts`. Helper đã có sẵn; Topic 02 chỉ dùng `flowBlock`/`calloutBlock`/`comparisonBlock`.
- Quiz: mỗi câu **5 options** (id "a".."e"), đúng **1** `isCorrect: true`; đừng cố định đáp án đúng ở một vị trí.
- `comparisonBlock`: `cells.length === columns.length − 1` (bảng 3 cột: 2 view-points, 4 structures, responsibility/authority, matrix — mỗi row 2 cells; bảng 2 cột: chart advantages, span factors, job division, consultation, planning advantages — mỗi row 1 cell).
- Flow: id node dùng `_`; knowledgeMap `tree` set `parent`; các flow section dùng `horizontal`; edge label ngắn.
- Chỉ dùng nội dung slide; KHÔNG thêm khái niệm management ngoài slide.
- `status: "ready"` chỉ giữ sau khi Lớp A pass (mục 6).

---

## 6. Verify (Codex chạy)

```bash
npx tsc --noEmit
```
- Phải pass (0 error).
- `comparisonBlock` mọi row `cells.length === columns.length − 1`.
- Flow: mọi `edges.from/to` tồn tại trong nodes cùng block; node id dùng `_`; knowledgeMap `tree` có `parent` đủ.
- Quiz: mỗi câu 5 options, đúng 1 `isCorrect`.
- Sau khi tsc pass: render-check route `/manufacturing-systems/topic-02` (375/768/1440) — knowledgeMap + 14 section + 12 quiz hiển thị; không horizontal-scroll; nhãn cạnh không bị che. Báo Chaliyah. **KHÔNG commit.**

---

## 7. Coverage matrix (Lớp B — "KHÔNG SÓT kiến thức", đối chiếu slide 28 trang)

Trạng thái: ✅ Có · ⬜ Thiếu · ⚠️ Rút gọn.

| # | Mục slide | Trang | Section | TT |
|---|---|---|---|---|
| 1 | Organization needs (mọi cá nhân làm việc cùng nhau vì goals) | 2/28 | s1 | ✅ |
| 2 | Organization goals (team-work, lowest cost) + trend 5 điểm | 3–4/28 | s1 | ✅ |
| 3 | Organization design — 2 nhóm yêu cầu (organization/operational) + other | 5/28 | s2 | ✅ |
| 4 | Design process 4 bước (functions → group → describe → assign) | 6/28 | s2 | ✅ |
| 5 | 2 view-points trong design | 7/28 | s2 | ✅ |
| 6 | Organization chart + advantages (4) | 8–10/28 | s3 | ✅ |
| 7 | Span of control / subordinate (4–8) | 10–11/28 | s4 | ✅ |
| 8 | 4 yếu tố quyết định số subordinators | 11–12/28 | s4 | ✅ |
| 9 | Managerial levels (~4, subordinate ưu tiên) | 13/28 | s5 | ✅ |
| 10 | Job division — 6 cơ sở | 14–15/28 | s6 | ✅ |
| 11 | Responsibilities & authorities (formal/informal, decision-making) | 16–17/28 | s7 | ✅ |
| 12 | Recruitment (internal/external) + training | 18/28 | s8 | ✅ |
| 13 | Direct structure | 19/28 | s9 | ✅ |
| 14 | Direct + consultation | 20/28 | s9 | ✅ |
| 15 | Consultation styles — 4 nhóm (consultant/control/service/operations) | 21–22/28 | s10 | ✅ |
| 16 | Matrix structure (cross-function; light vs heavy) | 23–24/28 | s11 | ✅ |
| 17 | Informal structure | 24/28 | s12 | ✅ |
| 18 | Organization planning — 2 view-points (dynamic; IE develops functions) | 25–26/28 | s13 | ✅ |
| 19 | Organization planning — 5 advantages | 27–28/28 | s14 | ✅ |

> Toàn bộ 19 mục slide đã phủ. Không có sách Groover để đối chiếu (topic slide-only) — đây là ma trận completeness đầy đủ cho Topic 02.
