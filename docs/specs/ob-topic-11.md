# Spec: OB Topic 11 — Organizational Culture (Creating and Maintaining Organizational Culture)

> **Loại:** Soạn mới topic hoàn chỉnh (rich teaching mode), thay placeholder `topic-11`. Helper đã port ở Topic 00-10.
> **Executor: Codex.** File `content/organizational-behavior.ts`. Đặt `const topic11` sau `topic10`; array thay `placeholder(11, "topic-11", ...)` (dòng ~10610) → `topic11`.
> **Nguồn (đã đọc đủ 2 file — SÁCH > slide):**
> - **Reading `Chapter 16 - Creating and Maintaining Organizational Culture` (Robbins & Judge, pp.295-314):** 6 LO. **A Definition** (org culture = system of shared meaning distinguishing org khỏi org khác) + **7 primary characteristics** (innovation & risk taking, attention to detail, outcome orientation, people orientation, team orientation, aggressiveness, stability); culture is DESCRIPTIVE (khác job satisfaction). **Dominant culture, subcultures, core values**; **strong vs weak cultures**; **culture vs formalization**. **What Do Cultures Do?** → **The Functions of Culture (5)**: boundary-defining, sense of identity, commitment vượt tư lợi, enhances stability (social glue), sense-making & control. **Culture Creates Climate** (organizational climate = shared perceptions về org & work environment; dimensions: innovation/safety/justice/diversity/customer service...). **The Ethical Dimension** (ethical work climate EWC; ethical climate theory ECT & index ECI; 5/9 categories phổ biến: instrumental, caring, independence, law & code, rules). **Culture as an Asset** (ChildNet). **Culture as a Liability**: institutionalization, barriers to change, barriers to diversity, barriers to acquisitions & mergers, strengthening dysfunctions/toxicity. **Keeping a Culture Alive** = 3 forces: **Selection, Top management, Socialization** (Exhibit 16-2 Socialization Model 3 stages: **prearrival → encounter → metamorphosis → outcomes** productivity/commitment/turnover). **Summary — How Cultures Form** (Exhibit 16-4: founders' philosophy → selection → top mgmt + socialization → culture). **How Employees Learn Culture**: stories, rituals, material symbols, language. **Creating an Ethical Culture** (reward ethical/punish unethical, protective mechanisms, top-down). **A Positive Culture** (building on employee strengths, rewarding more than punishing, encouraging vitality & growth; recognizing outside context). **Spirituality and Organizational Culture** (workplace spirituality; characteristics of spiritual orgs).
> - **Slide `OB-Topic 11-Organizational culture-Dr Lan Anh`** (49 trang): "culture is about how people here believe and behave together"; toxic culture traits & cost of bad culture (SHRM 2022); VN context (Blue C 2021); roadmap (strong vs weak; **culture fit vs culture add**; how to build; why; components); iceberg **visible/hidden aspects**; Quantum "how we do things"; **Schein 3 Layers** (Observable Artifacts → Espoused Values → Basic Underlying Assumptions); values match vs mismatch (P-O fit, R&J p65); Big 9 Cultural Values (MIT Sloan); dominant culture vs subcultures; culture & employee engagement (Quantum 2022); how a culture begins (founders 3 ways); how employees learn (stories/rituals/symbols/language) → organizational climate; who shapes culture (leaders 83%, managers 75%...); **person-job fit vs person-organization fit**; **culture fit counter-point → culture ADD/diversity**; can culture be changed? (top mgmt + employees + training + value statements + rewards + stories); **First Law of Digital Innovation** (Westerman: tech đổi nhanh, org đổi chậm hơn, **org culture đổi CHẬM NHẤT** → NOT a technological but a LEADERSHIP challenge — bắc cầu Topic 12).
> **Scope:** Topic định tính. SÁCH lo trục học thuật (7 characteristics, functions, culture as liability, socialization 3 stages, ethical/positive/spiritual culture). Slide bổ sung **Schein 3 layers, culture fit vs culture add, P-O fit, who shapes, leadership challenge + ví dụ VN** — đánh dấu source slide. Ngoại lệ per-topic: values/P-O fit đã chạm ở Topic 03 (values) → ở đây khai thác góc *culture fit*; change bắc cầu Topic 12 (chỉ nhắc, không sa đà).
> **Đặc thù định tính:** KHÔNG calc/formula block. Blocks: comparison + flow + callout.
> **Quy ước:** VI + term EN; quiz stem/options EN, rationale/takeaway VI (Cơ chế→Bẫy→Khóa); 5 options A-E đúng 1.
> **Contract:** comparison `columns.length === cells.length + 1` (cột đầu = header row-label); flow `horizontal`/`tree` (tree set parent); node id dùng `_`; edge label ngắn.
> **Verify:** `npx tsc --noEmit` + `node rendercheck.mjs organizational-behavior topic-11` (do Claude chạy). KHÔNG commit.

---

## 1. bigIdea (lens Chaliyah CHỐT 2026-07-04)
```ts
bigIdea:
  "Văn hóa tổ chức là hệ Ý NGHĨA CHUNG (shared meaning) phân biệt tổ chức này với tổ chức khác — 'cách mọi người ở đây tin và hành xử cùng nhau'. Phần lớn nó VÔ HÌNH (giả định ngầm, giá trị) nhưng lại lái hành vi mạnh hơn cả quy định formal. Văn hóa vừa là TÀI SẢN (gắn kết, bản sắc, giảm turnover) vừa có thể là GÁNH NẶNG (cản trở thay đổi, đa dạng, M&A). Nó không tự nhiên mà có: bắt nguồn từ NHÀ SÁNG LẬP, được duy trì qua selection – top management – socialization, và truyền cho nhân viên qua stories/rituals/symbols/language. Vì văn hóa thay đổi CHẬM NHẤT, định hình nó (ethical/positive culture; culture ADD thay vì culture fit) là một thách thức LÃNH ĐẠO, không phải kỹ thuật.",
bigIdeaPillars: [
  { label: "Văn hóa = shared meaning, phần lớn vô hình", body: "Org culture = hệ ý nghĩa chung members nắm giữ, phân biệt org khỏi org khác (R&J p296). 7 primary characteristics: innovation & risk taking, attention to detail, outcome orientation, people orientation, team orientation, aggressiveness, stability. Văn hóa là thuật ngữ MÔ TẢ (descriptive), khác job satisfaction. Iceberg: visible aspects (strategies, structure, policies) vs hidden aspects (attitudes, norms, assumptions). Schein 3 layers (slide): Observable Artifacts → Espoused Values → Basic Underlying Assumptions (nguồn cội của giá trị & hành động). Dominant culture vs subcultures; strong vs weak (core values intensely held & widely shared)." },
  { label: "Văn hóa LÀM GÌ: tài sản & gánh nặng", body: "5 functions (R&J p298): (1) boundary-defining, (2) truyền bản sắc, (3) tạo commitment vượt tư lợi, (4) enhances stability — 'social glue', (5) sense-making & control định hình hành vi. Văn hóa tạo organizational climate (shared perceptions về org & môi trường) → gắn với job satisfaction, customer satisfaction, financial performance. Nhưng cũng là LIABILITY: institutionalization (org sống vì chính nó), barriers to change, barriers to diversity, barriers to M&A, toxicity. Ethical dimension: ethical work climate (EWC)." },
  { label: "Hình thành & duy trì thế nào", body: "Ultimate source = FOUNDERS (Exhibit 16-4: founders' philosophy → selection → top management + socialization → culture). Culture begins 3 cách: founders tuyển & giữ người cùng chí hướng, socialize/indoctrinate nhân viên, và làm role model. Keeping alive = 3 lực: Selection (tuyển người values khớp), Top management (lời nói & hành vi lãnh đạo), Socialization — 3 stages (Exhibit 16-2): prearrival → encounter → metamorphosis → outcomes (productivity/commitment/turnover). Nhân viên HỌC văn hóa qua: stories, rituals, material symbols, language." },
  { label: "Định hình 'văn hóa đúng' — thách thức lãnh đạo", body: "Creating ethical culture (visibly reward ethical/punish unethical, protective mechanisms — ethical counselors/ombudspeople, bắt đầu từ top). Positive culture: building on employee strengths, rewarding more than punishing ('catching employees doing something right'), encouraging vitality & growth. Spiritual culture (workplace spirituality). Culture FIT vs culture ADD: 'fit' dễ thành cloning → mất lợi thế diversity; nên hướng culture add. Person-job fit vs person-organization fit. Can culture be changed? Văn hóa đổi CHẬM NHẤT (Westerman) → là leadership challenge, không phải kỹ thuật (bắc cầu Topic 12)." },
],
```

## 2. Wiring
`const topic11: Chapter = { slug:"topic-11", order:11, title:"Topic 11 — Organizational Culture", bigIdea, bigIdeaPillars, learningObjectives, knowledgeMap, sections, questions, status:"ready", source }`. Array: thay `placeholder(11, ...)` → `topic11`.

## 3. learningObjectives (10)
```ts
learningObjectives: [
  "Định nghĩa organizational culture là hệ shared meaning và liệt kê 7 primary characteristics (R&J).",
  "Phân biệt các tầng văn hóa: visible/hidden aspects (iceberg) và Schein 3 layers (artifacts/espoused values/basic assumptions).",
  "Phân biệt dominant culture vs subcultures, strong vs weak cultures, và culture vs formalization.",
  "Trình bày 5 functions của văn hóa và cách văn hóa tạo organizational climate.",
  "Giải thích ethical dimension of culture (ethical work climate) và khi nào văn hóa là asset.",
  "Phân tích khi nào văn hóa là liability: institutionalization, barriers to change/diversity/M&A.",
  "Mô tả cách văn hóa hình thành từ founders (Exhibit 16-4) và 3 lực duy trì: selection, top management, socialization.",
  "Giải thích 3 stages of socialization (prearrival/encounter/metamorphosis) và cách nhân viên học văn hóa (stories/rituals/symbols/language).",
  "So sánh cách tạo ethical culture, positive culture và spiritual culture.",
  "Vận dụng culture fit vs culture add, P-O fit và lý do văn hóa đổi chậm nhất là thách thức lãnh đạo.",
],
```

## 4. knowledgeMap (flow, tree, collapsible)
Root `oc` → 4 nhóm A-D (bám 4 pillars). caption: "Organizational culture: (A) shared meaning & các tầng, (B) văn hóa làm gì (asset/liability), (C) hình thành & duy trì, (D) định hình văn hóa đúng — thách thức lãnh đạo."
```ts
nodes:
{ id:"oc", label:"Organizational culture", group:"concept", sectionId:"s1", detail:"Hệ shared meaning phân biệt org; phần lớn vô hình, lái hành vi mạnh hơn quy định formal." },
{ id:"g_what", label:"A. Shared meaning & tầng", group:"concept", parent:"oc", sectionId:"s1", detail:"7 characteristics; iceberg; Schein 3 layers; strong/weak." },
{ id:"g_do", label:"B. Văn hóa làm gì", group:"concept", parent:"oc", sectionId:"s4", detail:"5 functions, climate; asset vs liability." },
{ id:"g_form", label:"C. Hình thành & duy trì", group:"concept", parent:"oc", sectionId:"s7", detail:"Founders → selection/top mgmt/socialization; learn qua stories/rituals/symbols/language." },
{ id:"g_shape", label:"D. Định hình văn hóa đúng", group:"concept", parent:"oc", sectionId:"s10", detail:"Ethical/positive/spiritual; culture fit vs add; leadership challenge." },
{ id:"t_char", label:"7 characteristics", group:"term", parent:"g_what", sectionId:"s1" },
{ id:"t_layer", label:"Iceberg + Schein 3 layers", group:"term", parent:"g_what", sectionId:"s2" },
{ id:"t_strong", label:"Dominant/sub, strong/weak", group:"term", parent:"g_what", sectionId:"s3" },
{ id:"t_func", label:"5 functions + climate", group:"term", parent:"g_do", sectionId:"s4" },
{ id:"t_ethic", label:"Ethical dimension (EWC)", group:"term", parent:"g_do", sectionId:"s5" },
{ id:"t_liab", label:"Asset vs liability", group:"term", parent:"g_do", sectionId:"s6" },
{ id:"t_begin", label:"Founders + how cultures form", group:"term", parent:"g_form", sectionId:"s7" },
{ id:"t_alive", label:"Selection/top mgmt/socialization", group:"term", parent:"g_form", sectionId:"s8" },
{ id:"t_learn", label:"Stories/rituals/symbols/language", group:"term", parent:"g_form", sectionId:"s9" },
{ id:"t_eps", label:"Ethical/Positive/Spiritual culture", group:"term", parent:"g_shape", sectionId:"s10" },
{ id:"t_fit", label:"Culture fit vs add + change", group:"term", parent:"g_shape", sectionId:"s11" },
edges: oc→g_what,g_do,g_form,g_shape ; g_what→t_char,t_layer,t_strong ; g_do→t_func,t_ethic,t_liab ; g_form→t_begin,t_alive,t_learn ; g_shape→t_eps,t_fit
```
> Edge label ngắn (vd "shared meaning", "làm gì", "hình thành", "định hình", "characteristics", "tầng", "strong/weak", "functions", "ethical", "asset/liability", "founders", "duy trì", "học văn hóa", "e/p/s", "fit/add"). node group: "concept"/"term".

---

## 5. Sections (11: s1-s11)

### s1 — What is organizational culture? (shared meaning + 7 characteristics)
- callout `key` "Định nghĩa (R&J p296)": Organizational culture = **hệ ý nghĩa chung (system of shared meaning)** members nắm giữ, **phân biệt** tổ chức này với tổ chức khác. Là thuật ngữ **MÔ TẢ (descriptive)** — cách nhân viên NHÌN NHẬN văn hóa, khác job satisfaction (mức HÀI LÒNG). Slide: "culture is about how people here believe and behave together."
- comparison "7 Primary Characteristics of Culture (R&J p296)" [2 cột → 1 cell]: Đặc điểm | Nội dung
  - Innovation & risk taking | Mức độ khuyến khích nhân viên đổi mới & dám chấp nhận rủi ro.
  - Attention to detail | Mức độ kỳ vọng nhân viên tỉ mỉ, phân tích, chú ý chi tiết.
  - Outcome orientation | Quản lý tập trung vào KẾT QUẢ hơn là kỹ thuật/quy trình.
  - People orientation | Quyết định cân nhắc tác động lên CON NGƯỜI trong tổ chức.
  - Team orientation | Công việc tổ chức quanh ĐỘI NHÓM hơn cá nhân.
  - Aggressiveness | Mức độ nhân viên quyết liệt, cạnh tranh (thay vì dễ dãi).
  - Stability | Mức độ hoạt động nhấn giữ NGUYÊN TRẠNG hơn là tăng trưởng.
- keyTerms: organizational culture, culture as descriptive.

### s2 — Các tầng văn hóa: iceberg + Schein 3 layers
- callout `note` "Iceberg — visible vs hidden (slide 12)": Visible aspects (strategies, objectives, policies & procedures, structure, technology, formal authority, chains of command) chỉ là phần NỔI; phần CHÌM (hidden) — attitudes, perceptions, group norms, informal interactions, conflicts — mới quyết định phần lớn hành vi.
- flow "Schein — 3 Layers of Organizational Culture (slide 14)" layout `horizontal`: nodes `l1` "Observable Artifacts" → `l2` "Espoused Values" → `l3` "Basic Underlying Assumptions". Caption: "Từ bề mặt quan sát được (artifacts) → giá trị tuyên bố (espoused values) → giả định ngầm vô thức (nguồn cội của giá trị & hành động, Schein 2004)."
- comparison "3 Layers (Schein 2004)" [2 cột → 1 cell]: Tầng | Nội dung
  - Observable Artifacts | Cấu trúc & quy trình hữu hình, quan sát được nhưng KHÓ giải mã ý nghĩa.
  - Espoused Values | Chiến lược, mục tiêu, triết lý — lý lẽ tổ chức công khai tuyên bố.
  - Basic Underlying Assumptions | Niềm tin, tri giác, suy nghĩ, cảm xúc VÔ THỨC, mặc nhiên — nguồn cội tối hậu của giá trị & hành động.
- keyTerms: observable artifacts, espoused values, basic underlying assumptions.

### s3 — Dominant culture, subcultures, strong vs weak
- comparison "Dominant culture vs Subcultures (R&J p297)" [2 cột → 1 cell]: Khái niệm | Nội dung
  - Dominant culture | Hệ core values được ĐA SỐ thành viên chia sẻ — tạo "personality" chung của tổ chức.
  - Subcultures | Miniculture trong tổ chức lớn, hình thành theo phòng ban/vị trí địa lý; gồm core values chung + giá trị riêng của nhóm.
  - Core values | Giá trị chủ đạo được chấp nhận rộng khắp tổ chức.
- callout `key` "Strong vs Weak & Culture vs Formalization (R&J p298)": **Strong culture** = core values được nắm giữ MÃNH LIỆT (intensely held) & chia sẻ RỘNG RÃI (widely shared) → ảnh hưởng hành vi mạnh, tăng cohesiveness/loyalty/commitment, GIẢM turnover. **Culture vs formalization**: strong culture & high formalization là "hai con đường tới cùng đích" (predictability) — văn hóa mạnh thì càng ÍT cần quy định formal.
- keyTerms: dominant culture, subcultures, strong culture.

### s4 — What cultures do: 5 functions + climate
- comparison "5 Functions of Culture (R&J p298)" [2 cột → 1 cell]: Chức năng | Nội dung
  - Boundary-defining | Tạo ranh giới phân biệt tổ chức này với tổ chức khác.
  - Sense of identity | Truyền bản sắc chung cho thành viên.
  - Commitment | Tạo cam kết với điều gì đó LỚN HƠN tư lợi cá nhân.
  - Stability (social glue) | "Chất keo xã hội" giữ tổ chức gắn kết, cung cấp chuẩn nói & làm.
  - Sense-making & control | Cơ chế tạo nghĩa & kiểm soát định hình thái độ, hành vi nhân viên.
- callout `note` "Culture creates climate (R&J p299)": organizational climate = **shared perceptions** thành viên có về tổ chức & môi trường làm việc (như "team spirit" cấp tổ chức). Positive climate → gắn với job satisfaction, involvement, commitment, customer satisfaction & financial performance. Dimensions: innovation, safety, justice, diversity, customer service...
- keyTerms: functions of culture, organizational climate.

### s5 — Ethical dimension of culture (SÁCH)
- callout `key` "Ethical work climate — EWC (R&J p299)": văn hóa KHÔNG trung tính về đạo đức. **Ethical work climate (EWC)** = quan niệm chung về đúng/sai, phản ánh giá trị thật & định hình ra quyết định đạo đức của thành viên. Đo bằng **ethical climate theory (ECT)** & **ethical climate index (ECI)**.
- comparison "5 ethical climate categories phổ biến (R&J p300)" [2 cột → 1 cell]: Category | Nội dung
  - Instrumental | Ra quyết định dựa trên TƯ LỢI (egoistic); gắn với job satisfaction THẤP.
  - Caring | Vì lợi ích của SỐ ĐÔNG stakeholders (nhân viên, khách hàng, nhà cung cấp).
  - Independence | Mỗi cá nhân dựa vào chuẩn đạo đức CÁ NHÂN của mình.
  - Law & code | Tuân theo chuẩn đạo đức BÊN NGOÀI (bộ quy tắc nghề nghiệp, luật).
  - Rules | Tuân theo kỳ vọng NỘI BỘ chuẩn hóa (sổ tay/chính sách tổ chức).
- keyTerms: ethical work climate, ethical climate theory.

### s6 — Culture as asset vs liability (SÁCH)
- callout `key` "Asset vs Liability (R&J p301-302)": văn hóa mạnh là **TÀI SẢN** — tạo môi trường đạo đức tích cực, nuôi đổi mới, đóng góp bottom line (vd ChildNet lật ngược từ văn hóa "grim" thành agency top Florida). Nhưng cũng có thể là **GÁNH NẶNG** khi các khía cạnh dysfunctional lan xuống toàn tổ chức.
- comparison "Culture as a Liability — 4 rào cản (R&J p302-303)" [2 cột → 1 cell]: Rào cản | Nội dung
  - Institutionalization | Tổ chức "sống vì chính nó" (valued for itself), tách khỏi mục tiêu gốc → hành vi/thói quen không bị chất vấn → bóp nghẹt đổi mới.
  - Barriers to change | Khi shared values KHÔNG còn khớp với hiệu quả tổ chức (nhất là môi trường biến động nhanh) → tính nhất quán trở thành lực cản.
  - Barriers to diversity | Ép người mới ĐỒNG HÓA (assimilate) → triệt tiêu lợi thế đa dạng; văn hóa mạnh có thể dung túng định kiến.
  - Barriers to acquisitions & mergers | Xung khắc văn hóa (culture clash) là yếu tố hàng đầu khiến M&A thất bại, hơn cả tài chính/sản phẩm.
- keyTerms: institutionalization, culture as a liability.

### s7 — Cách văn hóa hình thành (founders — Exhibit 16-4)
- callout `key` "How a culture begins (R&J p304, slide 24)": nguồn cội tối hậu = **FOUNDERS**. Culture bắt đầu theo 3 cách: (1) founders tuyển & GIỮ người nghĩ/cảm giống mình; (2) INDOCTRINATE & socialize nhân viên theo cách của mình; (3) hành vi founders = ROLE MODEL khuyến khích nhân viên đồng nhất với họ.
- flow "How Organizational Cultures Form (Exhibit 16-4)" layout `horizontal`: nodes `f1` "Philosophy of founders" → `f2` "Selection criteria" → `f3` "Top management + Socialization" → `f4` "Organizational culture". Caption: "Triết lý sáng lập → chọn lọc → top management & socialization → văn hóa tổ chức."
- keyTerms: founders, culture formation.

### s8 — Keeping culture alive: selection, top management, socialization (SÁCH)
- callout `key` "3 lực duy trì văn hóa (R&J p304)": **Selection** (tuyển người có values khớp — 'two-way street': ứng viên thấy lệch cũng tự rút), **Top management** (lời nói & hành vi lãnh đạo lập chuẩn: risk taking, tự do, trang phục, thưởng phạt), **Socialization** (giúp người mới thích nghi văn hóa).
- flow "Socialization Model — 3 stages (Exhibit 16-2)" layout `horizontal`: nodes `s_pre` "Prearrival" → `s_enc` "Encounter" → `s_meta` "Metamorphosis" → `s_out` "Outcomes". Caption: "Prearrival (học trước khi gia nhập) → encounter (đối mặt kỳ vọng vs thực tế) → metamorphosis (biến đổi để hòa nhập) → outcomes: productivity, commitment, giảm turnover."
- comparison "3 stages of socialization (R&J p305)" [2 cột → 1 cell]: Giai đoạn | Nội dung
  - Prearrival stage | Kỳ học TRƯỚC khi gia nhập; mang sẵn values/thái độ/kỳ vọng (vd trường kinh doanh socialize sinh viên).
  - Encounter stage | Bước vào tổ chức, đối mặt khả năng kỳ vọng ≠ thực tế; nếu lệch nhiều có thể vỡ mộng & rời đi.
  - Metamorphosis stage | Biến đổi để hòa nhập: nắm vững kỹ năng/vai trò, điều chỉnh theo chuẩn & giá trị nhóm.
- keyTerms: socialization, prearrival stage, metamorphosis stage.

### s9 — How employees learn culture: stories, rituals, symbols, language
- comparison "4 kênh truyền văn hóa (R&J p307)" [2 cột → 1 cell]: Kênh | Nội dung
  - Stories | Chuyện kể (về founders, phá lệ, thành công từ tay trắng, ứng phó sai lầm) neo hiện tại vào quá khứ & hợp thức hóa thực hành hiện tại.
  - Rituals | Chuỗi hoạt động lặp lại thể hiện & củng cố giá trị cốt lõi — mục tiêu/con người nào quan trọng, cái nào có thể bỏ.
  - Material symbols | Biểu tượng vật chất (bố trí trụ sở, xe, kích thước phòng, perks, trang phục) → truyền tải mức bình đẳng, hành vi phù hợp (risk taking, formal/informal).
  - Language | Ngôn ngữ/thuật ngữ riêng, jargon, acronym → thành viên dùng để xác nhận mình thuộc về văn hóa.
- callout `note` "Từ văn hóa → organizational climate (slide 25)": qua 4 kênh này, nhân viên hình thành **shared perceptions** (organizational climate) về tổ chức & môi trường làm việc.
- keyTerms: stories, rituals, material symbols, language.

### s10 — Creating ethical / positive / spiritual culture (SÁCH)
- comparison "Ba loại văn hóa cần chủ động tạo (R&J p308-311)" [2 cột → 1 cell]: Loại | Cách tạo
  - Ethical culture | Lãnh đạo làm gương (top-down); visibly REWARD hành vi đạo đức & PUNISH vi phạm; đánh giá cả means lẫn ends; protective mechanisms (ethical counselors, ombudspeople, ethical officers) để báo cáo không sợ trả đũa.
  - Positive culture | Building on employee STRENGTHS (giúp nhân viên khai thác điểm mạnh); REWARDING more than punishing ("catching employees doing something right"); encouraging VITALITY & growth (job vs career). Lưu ý: nhận diện outside context — không phải cure-all, có giới hạn văn hóa.
  - Spiritual culture | Workplace spirituality: thừa nhận con người có đời sống nội tâm được nuôi dưỡng bởi công việc CÓ Ý NGHĨA trong cộng đồng; org tâm linh có benevolence, strong sense of purpose, trust & respect, open-mindedness.
- keyTerms: ethical culture, positive organizational culture, workplace spirituality.

### s11 — Định hình "văn hóa đúng": culture fit vs add + change (leadership challenge)
- comparison "Culture fit vs Culture add (slide 46)" [3 cột → 2 cells]: Khía cạnh | Culture fit | Culture add
  - Ý tưởng | Tuyển người "hợp gu" văn hóa hiện có. | Tuyển người MỞ RỘNG/bổ sung văn hóa.
  - Rủi ro/lợi ích | Dễ thành CLONING ("cô ấy giống tôi, nói như tôi, mặc đồng phục ta") → triệt tiêu diversity. | Kết nối đội đa dạng thành khối gắn kết → giải quyết vấn đề tốt hơn.
  - Liên hệ | Person-organization fit (values khớp) — hữu ích nhưng quá mức gây đồng nhất. | Ưu tiên khi cần đổi mới & đa dạng.
- callout `key` "Can culture be changed? — leadership challenge (slide 47-48)": đổi văn hóa cần role của top management (cam kết & hỗ trợ) + employees (thực thi) + training/mentoring + formulate value statements + reward hành vi + stories. Nhưng **First Law of Digital Innovation** (Westerman): công nghệ đổi nhanh, tổ chức đổi chậm hơn, **văn hóa tổ chức đổi CHẬM NHẤT** → đây KHÔNG phải thách thức công nghệ mà là thách thức **LÃNH ĐẠO** (bắc cầu Topic 12 — Organizational Change).
- keyTerms: culture fit, culture add, person-organization fit.

---

## 6. Questions (20 câu — q01…q20)
> Format: stem/options EN; đúng 1 trong 5 (A-E); rationale VI "Cơ chế:… Bẫy:… Khóa:…"; takeaway VI. Phủ đều 11 sections & book/slide-adds.

Phân bổ:
1. **q01 — Definition** (s1): shared meaning distinguishing org; văn hóa là descriptive không phải satisfaction.
2. **q02 — 7 characteristics** (s1): nhận diện outcome/people/team orientation, aggressiveness, stability.
3. **q03 — Iceberg visible/hidden** (s2): hidden aspects quyết định phần lớn hành vi.
4. **q04 — Schein 3 layers** (s2): basic underlying assumptions là tầng sâu nhất/nguồn cội.
5. **q05 — Dominant vs subculture** (s3): subculture theo phòng ban/địa lý.
6. **q06 — Strong culture / formalization** (s3): strong = intensely held + widely shared; giảm nhu cầu formal rules.
7. **q07 — Functions of culture** (s4): boundary-defining/identity/commitment/stability/control.
8. **q08 — Organizational climate** (s4): shared perceptions về org & môi trường.
9. **q09 — Ethical work climate** (s5): EWC; instrumental (self-interest) vs caring.
10. **q10 — Culture as asset** (s6): văn hóa mạnh nuôi đổi mới & đóng góp bottom line.
11. **q11 — Culture as liability: institutionalization** (s6): org sống vì chính nó → bóp nghẹt đổi mới.
12. **q12 — Barriers to diversity/change/M&A** (s6): ép assimilate triệt tiêu diversity; culture clash làm M&A thất bại.
13. **q13 — How a culture begins** (s7): ultimate source = founders (3 cách).
14. **q14 — How cultures form (Exhibit 16-4)** (s7): founders → selection → top mgmt/socialization → culture.
15. **q15 — Keeping culture alive: 3 forces** (s8): selection/top management/socialization.
16. **q16 — Socialization 3 stages** (s8): prearrival → encounter → metamorphosis; encounter = kỳ vọng vs thực tế.
17. **q17 — How employees learn culture** (s9): stories/rituals/material symbols/language — nhận diện material symbols.
18. **q18 — Positive culture** (s10): build on strengths, reward > punish.
19. **q19 — Ethical/Spiritual culture** (s10): protective mechanisms; workplace spirituality (meaningful work + community).
20. **q20 — Culture fit vs add / change** (s11): culture add giữ diversity; văn hóa đổi chậm nhất → leadership challenge.

takeaway mẫu (Codex viết đủ 20, VI): vd q20 "'Culture fit' quá mức biến tuyển dụng thành nhân bản — 'culture add' giữ được lợi thế đa dạng mà vẫn gắn kết."

---

## 7. source
```ts
source: "Robbins & Judge, Organizational Behavior — Chapter 16 'Creating and Maintaining Organizational Culture' (pp.295-314); Slide 'OB-Topic 11-Organizational culture' (Dr Lan Anh, IM2017, HCMUT); bổ sung slide: Edgar H. Schein 'Organizational Culture and Leadership' (3 layers), MIT Sloan 'Big 9 Cultural Values' & Toxic Culture, SHRM 2022 Global Culture Research, Blue C 2021 (khảo sát VHDN Việt Nam), Quantum Workplace 2022, George Westerman 'First Law of Digital Innovation' (MIT Sloan Management Review).",
```

---

## 8. Coverage matrix (đối chiếu "không sót kiến thức") — 24 mục
1. Definition shared meaning + descriptive — s1 ✓ q01
2. 7 primary characteristics — s1 ✓ q02
3. Iceberg visible/hidden **[slide]** — s2 ✓ q03
4. Schein 3 layers **[slide]** — s2 ✓ q04
5. Dominant culture vs subcultures + core values — s3 ✓ q05
6. Strong vs weak + culture vs formalization — s3 ✓ q06
7. 5 functions of culture — s4 ✓ q07
8. Organizational climate — s4 ✓ q08
9. Ethical dimension (EWC, ECT, 5 categories) — s5 ✓ q09
10. Culture as asset — s6 ✓ q10
11. Institutionalization — s6 ✓ q11
12. Barriers to change/diversity/M&A — s6 ✓ q12
13. How a culture begins (founders 3 ways) — s7 ✓ q13
14. How cultures form (Exhibit 16-4) — s7 ✓ q14
15. Keeping culture alive: selection/top mgmt/socialization — s8 ✓ q15
16. Socialization 3 stages (Exhibit 16-2) — s8 ✓ q16
17. How employees learn: stories/rituals/symbols/language — s9 ✓ q17
18. Creating ethical culture — s10 ✓ q19
19. Positive culture — s10 ✓ q18
20. Spiritual culture (workplace spirituality) — s10 ✓ q19
21. Culture fit vs culture add + P-O fit **[slide]** — s11 ✓ q20
22. Can culture be changed? + leadership challenge (Westerman) **[slide]** — s11 ✓ q20
23. Who shapes culture (leaders 83%...) **[slide]** — s7/s8 (nhắc trong callout)
24. Big 9 / toxic culture / cost of bad culture **[slide]** — s1/s6 (nhắc ngắn khi mở bài liability)

## 9. Cấu trúc dự kiến (để verify Layer B)
- sections: **11** (s1-s11)
- questions: **20**
- learningObjectives: **10**
- comparison blocks: **~11** (s1:1, s2:1, s3:1, s4:1, s5:1, s6:1, s8:1, s9:1, s10:1, s11:1 = 10, có thể +1)
- flow blocks (trong section): **2** (s2 Schein layers horizontal; s8 socialization horizontal) — LƯU Ý: s7 "how cultures form" cũng là flow horizontal → nếu Codex làm cả s7 thì thành 3 flow, chấp nhận được (đều horizontal). knowledgeMap tree riêng.
- callout blocks: **~10**
- calc/formula blocks: **0** (định tính)
- status: "ready"
