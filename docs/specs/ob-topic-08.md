# Spec: OB Topic 08 — Conflict and Collaboration (Conflict in Organizations)

> **Loại:** Soạn mới topic hoàn chỉnh (rich teaching mode), thay placeholder `topic-08`. Helper đã port ở Topic 00-07.
> **Executor: Codex.** File `content/organizational-behavior.ts`. Đặt `const topic08` sau `topic07`; array thay `placeholder(8, "topic-08", ...)` (dòng ~8548) → `topic08`.
> **Nguồn (đã đọc đủ 2 file — SÁCH > slide):**
> - **Reading `Chapter 14 - Conflict in Organizations` (R&J, pp.256-273):** 7 LO; định nghĩa conflict; 3 **types** (task/relationship/process); 3 **loci** (dyadic/intragroup/intergroup); functional vs dysfunctional (Exhibit 14-1 inverted-U); **conflict process 5 stages** (Exhibit 14-2): Stage I potential opposition (communication/structure/personal variables), Stage II cognition & personalization (perceived vs felt conflict), Stage III **intentions — 5 conflict-handling styles** (competing/collaborating/avoiding/accommodating/compromising; trục assertiveness×cooperativeness), Stage IV behavior (Exhibit 14-3 dynamic escalation + conflict-intensity continuum), Stage V outcomes (functional/dysfunctional) + managing conflict + cultural influences; **NEGOTIATION**: distributive vs integrative bargaining (Exhibit 14-4), fixed pie/target point/resistance point/BATNA, **negotiation process 5 steps** (Exhibit 14-6: preparation & planning → ground rules → clarification & justification → bargaining & problem solving → closure & implementation), individual differences (personality/mood/culture/gender), social context (reputation, relationships), **third-party negotiations** (mediator/arbitrator/conciliator); implications for managers.
> - **Slide `OB-Topic 8-Conflict and Collaboration-Dr Lan Anh`** (45 trang): Causes of conflict (Myers-Briggs 2022: relational/organisational/managerial); Diversity & Inclusion → conflict/collaboration; **3 Transitions in Conflict Thought** (traditional → human relations → interactionist); inverted-U curve A/B/C; **SCARF model** (David Rock 2008); **4 Triggers Cause Majority of Team Conflicts** (HBR Laker & Pereira 2022) + 4 remedies; Johari Window (empathy); promote **healthy conflict**; **collaboration overload & "New Groupthink"**; super-facilitator; "conflict & collaboration = hai mặt đồng xu"; collaboration/listening model.
> **Scope:** Topic định tính. SÁCH lo phần conflict-process + negotiation (bám R&J). Slide bổ sung phần **collaboration & khung thực hành** (SCARF, 4 triggers, Johari, healthy conflict, collaboration overload/new groupthink) — đánh dấu source slide. Ngoại lệ per-topic: **team formation/effectiveness (Ch.11) thuộc Topic 09** → KHÔNG nhét team-building sâu vào đây; chỉ giữ phần collaboration gắn với hóa giải conflict.
> **Đặc thù định tính:** KHÔNG calc/formula block. Blocks: comparison + flow + callout.
> **Quy ước:** VI + term EN; quiz stem/options EN, rationale/takeaway VI (Cơ chế→Bẫy→Khóa); 5 options A-E đúng 1.
> **Contract:** comparison `columns.length === cells.length + 1` (cột đầu = header row-label); flow `horizontal`/`tree` (tree set parent); node id dùng `_`; edge label ngắn.
> **Verify:** `npx tsc --noEmit` + `node rendercheck.mjs organizational-behavior topic-08`. KHÔNG commit.

---

## 1. bigIdea (lens Chaliyah CHỐT 2026-07-03)
```ts
bigIdea:
  "Conflict không phải 'sự cố' cần dập tắt mà là một PROCESS tự nhiên trong mọi nhóm — và KHÔNG phải lúc nào cũng xấu. Đúng theo interactionist view (Robbins & Judge) và triết lý 'conflict & collaboration = hai mặt một đồng xu' (Dr Lan Anh): điều quyết định không phải CÓ conflict hay không, mà là LOẠI conflict (task vs relationship vs process), MỨC ĐỘ (đường cong U ngược — quá ít gây trì trệ, quá nhiều gây hỗn loạn, vừa đủ tạo performance), và CÁCH con người phản ứng. Nhà quản lý đọc conflict qua 5 giai đoạn, chọn conflict-handling intention phù hợp, dùng negotiation để giải quyết, và cuối cùng chuyển hóa conflict thành COLLABORATION — nơi khác biệt trở thành sáng tạo thay vì phá hoại.",
bigIdeaPillars: [
  { label: "Conflict là process, không phải lúc nào cũng xấu", body: "Conflict = process bắt đầu khi một bên perceives bên kia đã/ sắp negatively affect điều mình cares about (R&J p256). 3 types theo tác động: task (vừa phải → tốt), relationship (hầu như luôn dysfunctional), process (về delegation/roles). 3 loci: dyadic, intragroup, intergroup. Functional vs dysfunctional; inverted-U curve (A quá ít → trì trệ, B tối ưu → performance cao, C quá nhiều → hỗn loạn). Tư duy tiến hóa: traditional (né tránh) → human relations (tự nhiên) → interactionist (khuyến khích mức vừa đủ)." },
  { label: "Conflict Process — 5 giai đoạn, can thiệp ở intentions", body: "Stage I potential opposition (communication, structure, personal variables) → Stage II cognition & personalization (perceived conflict vs felt conflict; framing zero-sum vs win-win) → Stage III intentions = 5 conflict-handling styles trên trục assertiveness × cooperativeness (competing, collaborating, avoiding, accommodating, compromising) → Stage IV behavior (dynamic escalation, conflict-intensity continuum) → Stage V outcomes (functional/dysfunctional). Openness + collaborating gắn với performance cao; avoiding + competing gắn với performance thấp." },
  { label: "Negotiation — công cụ giải quyết", body: "Negotiation = process 2+ bên quyết định phân bổ nguồn lực khan hiếm (R&J p265). Distributive (win-lose, fixed pie, focus positions) vs Integrative (win-win, expand the pie, focus interests) — Exhibit 14-4. BATNA = Best Alternative To a Negotiated Agreement (ngưỡng thấp nhất chấp nhận). 5-step process: preparation & planning → ground rules → clarification & justification → bargaining & problem solving → closure & implementation. Bị ảnh hưởng bởi individual differences (personality/mood/culture/gender), reputation & relationships. Third parties: mediator, arbitrator, conciliator." },
  { label: "Từ Conflict sang Collaboration (thực hành)", body: "'Hai mặt đồng xu': quản trị để biến conflict thành collaboration (slide). Nhận diện causes of conflict (Myers-Briggs 2022). Khung thực hành: SCARF (Status/Certainty/Autonomy/Relatedness/Fairness — Away threat vs Toward reward, David Rock); 4 Triggers gây phần lớn team conflict (communication differences, opaque performance standards, unreasonable time constraints, unclear expectations) + 4 remedies (HBR); Johari Window cho empathy; promote healthy conflict; tránh cạm bẫy collaboration overload & 'New Groupthink'." },
],
```

## 2. Wiring
`const topic08: Chapter = { slug:"topic-08", order:8, title:"Topic 08 — Conflict and Collaboration", bigIdea, bigIdeaPillars, learningObjectives, knowledgeMap, sections, questions, status:"ready", source }`. Array: thay `placeholder(8, ...)` → `topic08`.

## 3. learningObjectives (11)
```ts
learningObjectives: [
  "Định nghĩa conflict và phân biệt functional vs dysfunctional conflict (R&J p256-257).",
  "Mô tả 3 types of conflict (task, relationship, process) và 3 loci of conflict (dyadic, intragroup, intergroup).",
  "Giải thích quan hệ conflict–performance qua đường cong U ngược (Exhibit 14-1) và 3 views (traditional/human relations/interactionist).",
  "Trình bày 5 giai đoạn của conflict process (Exhibit 14-2) và các nguồn ở Stage I (communication, structure, personal variables).",
  "Phân biệt perceived conflict vs felt conflict (Stage II) và vai trò của framing/emotions.",
  "So sánh 5 conflict-handling intentions (competing, collaborating, avoiding, accommodating, compromising) trên trục assertiveness × cooperativeness (Exhibit 14-3).",
  "Giải thích Stage IV behavior (dynamic escalation / conflict-intensity continuum), Stage V outcomes và cách managing conflict.",
  "Contrast distributive vs integrative bargaining (Exhibit 14-4) và giải thích fixed pie & BATNA.",
  "Áp dụng 5 bước của negotiation process (Exhibit 14-6) và nêu ảnh hưởng của individual differences + reputation/relationships.",
  "Đánh giá vai trò của 3 third-party roles: mediator, arbitrator, conciliator.",
  "Vận dụng các khung chuyển conflict → collaboration (SCARF, 4 triggers + remedies, Johari, healthy conflict; tránh collaboration overload/New Groupthink).",
],
```

## 4. knowledgeMap (flow, tree, collapsible)
Root `cf` → 4 nhóm A-D. caption: "Conflict & Collaboration: (A) bản chất conflict (types/loci/mức độ), (B) conflict process 5 giai đoạn, (C) negotiation giải quyết, (D) chuyển hóa sang collaboration."
```ts
nodes:
{ id:"cf", label:"Conflict & Collaboration", group:"concept", sectionId:"s1", detail:"Conflict là process; quản trị đúng → collaboration & performance." },
{ id:"g_nat", label:"A. Bản chất conflict", group:"concept", parent:"cf", sectionId:"s1", detail:"Types, loci, functional/dysfunctional, inverted-U, 3 views." },
{ id:"g_proc", label:"B. Conflict process (5 stages)", group:"concept", parent:"cf", sectionId:"s4", detail:"Potential opposition → cognition → intentions → behavior → outcomes." },
{ id:"g_neg", label:"C. Negotiation", group:"concept", parent:"cf", sectionId:"s8", detail:"Distributive/integrative, BATNA, 5 steps, third parties." },
{ id:"g_collab", label:"D. Sang collaboration", group:"concept", parent:"cf", sectionId:"s11", detail:"SCARF, 4 triggers, Johari, healthy conflict." },
{ id:"t_type", label:"Types + loci", group:"term", parent:"g_nat", sectionId:"s2" },
{ id:"t_level", label:"Inverted-U + 3 views", group:"term", parent:"g_nat", sectionId:"s3" },
{ id:"t_stage", label:"Stage I-II (opposition, cognition)", group:"term", parent:"g_proc", sectionId:"s4" },
{ id:"t_intent", label:"Stage III: 5 intentions", group:"term", parent:"g_proc", sectionId:"s6" },
{ id:"t_behav", label:"Stage IV-V (behavior, outcomes)", group:"term", parent:"g_proc", sectionId:"s7" },
{ id:"t_barg", label:"Distributive vs integrative", group:"term", parent:"g_neg", sectionId:"s8" },
{ id:"t_negproc", label:"5-step process + BATNA", group:"term", parent:"g_neg", sectionId:"s9" },
{ id:"t_third", label:"Mediator/arbitrator/conciliator", group:"term", parent:"g_neg", sectionId:"s10" },
{ id:"t_scarf", label:"SCARF + 4 triggers", group:"term", parent:"g_collab", sectionId:"s11" },
{ id:"t_health", label:"Healthy conflict / overload", group:"term", parent:"g_collab", sectionId:"s11" },
edges: cf→g_nat,g_proc,g_neg,g_collab ; g_nat→t_type,t_level ; g_proc→t_stage,t_intent,t_behav ; g_neg→t_barg,t_negproc,t_third ; g_collab→t_scarf,t_health
```
> Edge label ngắn (vd "bản chất", "process", "negotiation", "collaboration", "types", "mức độ", "stage I-II", "intentions", "behavior", "bargaining", "5 bước", "third party", "SCARF", "healthy"). node group: "concept"/"term".

---

## 5. Sections (11: s1-s11)

### s1 — Conflict là gì + 3 views (Transitions in Conflict Thought)
- callout `key` "Conflict theo Robbins & Judge (p256)": *"A process that begins when one party perceives that another party has negatively affected, or is about to negatively affect, something that the first party cares about."* Nhấn: conflict là PERCEPTION về khác biệt/đối lập — không ai nhận ra thì coi như không có.
- comparison "3 Transitions in Conflict Thought (slide 11; R&J bối cảnh)" [3 cột → 2 cells]: Quan điểm | Nội dung | Hàm ý
  - Traditional view | Conflict là có hại, phải tránh; là dấu hiệu trục trặc của nhóm. | Dập tắt mọi conflict → destructive khi bị nén.
  - Human relations view | Conflict tự nhiên & không thể tránh trong mọi nhóm; có thể functional hoặc dysfunctional. | Chấp nhận conflict như một phần tất yếu.
  - Interactionist view | Khuyến khích một mức conflict TỐI THIỂU để nhóm không trì trệ, tự phê, đổi mới. | Nhà quản lý chủ động duy trì conflict "vừa đủ" → constructive.
- callout `note` "Causes of conflict (slide 2 — Myers-Briggs 2022)": nhóm nguyên nhân: relational (~23%), organisational (roles/processes/org + poor communication + inadequate resources ≈ 44%), managerial (high workload, line management/top leadership). Conflict đến từ nhiều tầng, không chỉ "tính cách".
- keyTerms: conflict, traditional view of conflict, human relations view of conflict, interactionist view of conflict.

### s2 — Types & Loci of conflict
- comparison "3 types of conflict (R&J p258-259)" [3 cột → 2 cells]: Loại | Bản chất | Ghi chú performance
  - Task conflict | Bất đồng về nội dung & mục tiêu công việc. | Mức VỪA PHẢI có thể functional (kích thích thảo luận); quá cao thì hại.
  - Relationship conflict | Xung đột dựa trên quan hệ giữa các cá nhân (cảm xúc, cá nhân hóa). | Gần như LUÔN dysfunctional — giảm hiểu biết lẫn nhau, cản hoàn thành việc.
  - Process conflict | Bất đồng về CÁCH làm việc — delegation & roles (ai làm gì, phân công). | Dễ cá nhân hóa nhanh → chuyển thành relationship conflict.
- comparison "3 loci of conflict (R&J p259)" [2 cột → 1 cell]: Locus | Nội dung
  - Dyadic conflict | Conflict giữa HAI người.
  - Intragroup conflict | Conflict BÊN TRONG một nhóm/đội.
  - Intergroup conflict | Conflict GIỮA các nhóm/đội (dễ xảy ra khi các nhóm cạnh tranh "thắng").
- callout `note` "Kết hợp type × locus": hiểu một conflict cần biết cả LOẠI (task/relationship/process) lẫn NƠI xảy ra (dyadic/intragroup/intergroup) mới quản trị đúng.
- keyTerms: task conflict, relationship conflict, process conflict, dyadic conflict, intragroup conflict, intergroup conflict.

### s3 — Functional vs Dysfunctional + đường cong U ngược
- callout `key` "Functional vs Dysfunctional (R&J p257)": Functional conflict = hỗ trợ mục tiêu nhóm, cải thiện performance (constructive). Dysfunctional conflict = cản trở performance (destructive).
- comparison "Conflict & Unit Performance — inverted-U (Exhibit 14-1; slide 14)" [4 cột → 3 cells]: Tình huống | Mức conflict | Loại | Kết quả đơn vị
  - A | Thấp/không | Dysfunctional | Thờ ơ, trì trệ, không đổi mới, thiếu ý tưởng → performance THẤP.
  - B | Tối ưu | Functional | Sống động, tự phê, đổi mới → performance CAO.
  - C | Cao | Dysfunctional | Hỗn loạn, thiếu hợp tác, phá vỡ → performance THẤP.
- callout `note` "Thông điệp U ngược": mục tiêu KHÔNG phải triệt tiêu conflict mà giữ ở mức tối ưu (điểm B) — vừa đủ để chống trì trệ, chưa tới mức phá hoại.
- keyTerms: functional conflict, dysfunctional conflict.

### s4 — Conflict Process tổng quan + Stage I (Potential opposition)
- callout `key` "Conflict process 5 giai đoạn (Exhibit 14-2, R&J p259)": (I) potential opposition or incompatibility → (II) cognition & personalization → (III) intentions → (IV) behavior → (V) outcomes.
- flow "Conflict Process — 5 stages (Exhibit 14-2)" layout `horizontal`: nodes `s_i` "I. Potential opposition" → `s_ii` "II. Cognition & personalization" → `s_iii` "III. Intentions" → `s_iv` "IV. Behavior" → `s_v` "V. Outcomes". Caption: "Conflict diễn ra tuần tự qua 5 giai đoạn; nhà quản lý can thiệp mạnh nhất ở Stage III (chọn intention)."
- comparison "Stage I — 3 nguồn tạo potential opposition (R&J p260)" [2 cột → 1 cell]: Nguồn | Nội dung
  - Communication | Hiểu lầm, quá ít/quá nhiều thông tin, nhiễu ngữ nghĩa (semantic difficulties).
  - Structure | Quy mô nhóm, chuyên môn hóa, mơ hồ về trách nhiệm, tranh giành nguồn lực, phong cách lãnh đạo, hệ thống thưởng.
  - Personal variables | Khác biệt tính cách, cảm xúc, giá trị giữa các cá nhân.
- keyTerms: conflict process.

### s5 — Stage II: Cognition & Personalization
- comparison "Perceived vs Felt conflict (R&J p261)" [2 cột → 1 cell]: Khái niệm | Nội dung
  - Perceived conflict | NHẬN THỨC của một/nhiều bên rằng có điều kiện tạo cơ hội cho conflict — mới ở mức "biết có".
  - Felt conflict | CẢM XÚC liên đới: lo lắng, căng thẳng, bực bội, thù địch — khi conflict đã được cá nhân hóa.
- callout `note` "Framing & emotions quyết định": ở Stage II các bên định nghĩa conflict "về cái gì" → khoanh vùng giải pháp khả dĩ. Framing zero-sum (lương là chiếc bánh cố định) làm giảm hợp tác; framing win-win mở ra giải pháp. Cảm xúc tiêu cực → đơn giản hóa vấn đề, mất tin tưởng; cảm xúc tích cực → nhìn rộng, sáng tạo.
- keyTerms: perceived conflict, felt conflict.

### s6 — Stage III: Intentions — 5 conflict-handling styles
- callout `key` "Intentions (R&J p261)": quyết định hành động theo một cách nhất định; nằm giữa perception/emotion và behavior. Xác định qua 2 trục: **assertiveness** (mức thỏa mãn lợi ích của MÌNH) × **cooperativeness** (mức thỏa mãn lợi ích của NGƯỜI KHÁC).
- comparison "5 conflict-handling intentions (Exhibit 14-3, R&J p261-262)" [3 cột → 2 cells]: Style | Vị trí (assertive × cooperative) | Bản chất
  - Competing | Assertive + Uncooperative | Thỏa mãn lợi ích của mình bất kể tác động lên người khác; hay dùng khi nguồn lực khan hiếm.
  - Collaborating | Assertive + Cooperative | Muốn thỏa mãn ĐẦY ĐỦ lợi ích mọi bên; làm rõ khác biệt để tìm win-win.
  - Avoiding | Unassertive + Uncooperative | Rút lui/né tránh hoặc kìm nén conflict; lờ đi, tránh mặt.
  - Accommodating | Unassertive + Cooperative | Đặt lợi ích người khác trên lợi ích mình để xoa dịu, giữ quan hệ.
  - Compromising | Mid-range cả hai | Không ai thắng/thua; mỗi bên nhường một phần (ration the object).
- callout `note` "Bằng chứng (R&J p262)": openness + collaborating gắn với performance nhóm CAO; avoiding + competing gắn với performance THẤP — không chỉ loại/độ conflict mà CÁCH phản ứng quyết định.
- keyTerms: intentions, competing, collaborating, avoiding, accommodating, compromising.

### s7 — Stage IV Behavior + Stage V Outcomes + Managing conflict
- callout `key` "Stage IV Behavior (R&J p262-263)": conflict là quá trình tương tác động (demand → phản ứng → leo thang). Exhibit 14-3 dynamic escalation: differing perceptions → verbal disputes/negative moods/protective behaviors → overt attacks. Conflict-intensity continuum: từ no conflict → minor disagreements → overt questioning → … → annihilation (đỉnh cao gần như luôn dysfunctional).
- comparison "Stage V Outcomes — Functional vs Dysfunctional (R&J p263-264)" [2 cột → 1 cell]: Loại kết quả | Nội dung
  - Functional outcomes | Cải thiện chất lượng quyết định, kích thích sáng tạo, khơi tò mò, xả căng thẳng, tự đánh giá & đổi mới; là ANTIDOTE cho groupthink.
  - Dysfunctional outcomes | Giảm giao tiếp, giảm cohesiveness, giảm satisfaction & trust; cực đoan → tê liệt, đe dọa sự tồn tại của nhóm.
- callout `note` "Managing conflict + cultural influences (R&J p264-265)": (1) nhận ra khi nào thực sự bất đồng (nhiều "conflict" chỉ do khác từ ngữ — semantic); (2) thảo luận cởi mở tập trung interests không positions; (3) nhấn shared interests. Cultural: văn hóa collectivist thích collaboration/né đối đầu, individualist đối đầu trực tiếp.
- keyTerms: conflict management.

### s8 — Negotiation: Distributive vs Integrative bargaining
- callout `key` "Negotiation (R&J p265)": *"A process in which two or more parties exchange goods or services and attempt to agree on the exchange rate for them."* (negotiation = bargaining). Quyết định phân bổ nguồn lực khan hiếm.
- comparison "Distributive vs Integrative bargaining (Exhibit 14-4, R&J p266)" [3 cột → 2 cells]: Đặc điểm | Distributive | Integrative
  - Goal | Giành càng nhiều phần bánh càng tốt. | Mở rộng chiếc bánh để cả hai cùng thỏa mãn.
  - Motivation | Win-lose. | Win-win.
  - Focus | Positions ("Tôi không thể vượt quá điểm này"). | Interests ("Vì sao vấn đề này quan trọng với bạn?").
  - Interests | Đối lập nhau. | Tương thích (congruent).
  - Information sharing | Thấp (chia sẻ chỉ giúp đối phương lợi dụng). | Cao (giúp tìm cách thỏa mãn lợi ích hai bên).
  - Duration of relationship | Ngắn hạn. | Dài hạn.
- callout `note` "Fixed pie & ví dụ quả cam": distributive giả định fixed pie (zero-sum) với target point & resistance point, vùng chồng lấn = settlement zone. Ví dụ hai chị em tranh quả cam: nếu chỉ chia đôi (distributive) thì bỏ lỡ win-win — một người cần nước ép, người kia cần vỏ để làm bánh (integrative).
- keyTerms: negotiation, distributive bargaining, integrative bargaining, fixed pie.

### s9 — Negotiation process 5 bước + individual differences + social context
- flow "Negotiation Process — 5 steps (Exhibit 14-6)" layout `horizontal`: nodes `n1` "Preparation & planning" → `n2` "Definition of ground rules" → `n3` "Clarification & justification" → `n4` "Bargaining & problem solving" → `n5` "Closure & implementation". Caption: "5 bước đàm phán; chuẩn bị (gồm xác định BATNA) là bước quan trọng nhất."
- callout `key` "BATNA (R&J p268)": Best Alternative To a Negotiated Agreement — giá trị thấp nhất chấp nhận được cho một thỏa thuận; offer nào cao hơn BATNA đều tốt hơn bế tắc. Xác định & củng cố BATNA TRƯỚC khi vào đàm phán.
- comparison "Yếu tố ảnh hưởng hiệu quả đàm phán (R&J p269-272)" [2 cột → 1 cell]: Nhóm yếu tố | Nội dung
  - Individual differences | Personality (Big Five — vd tính dễ chịu thấp có thể lợi cho distributive), mood/emotions (giận dữ vs tích cực), culture, gender (khác biệt rõ khi điều khoản mơ hồ).
  - Reputation | Cách người khác nghĩ/nói về bạn; danh tiếng đáng tin (competence + integrity) mở ra chiến lược integrative.
  - Relationships | Đàm phán lặp lại xây trust → nghĩ cho cả đối tác & quan hệ → dễ integrative & mở rộng lựa chọn.
- keyTerms: BATNA.

### s10 — Third-party negotiations
- comparison "3 third-party roles (R&J p272-273)" [3 cột → 2 cells]: Vai trò | Quyền hạn | Đặc điểm
  - Mediator | Không có quyền áp đặt | Bên thứ ba TRUNG LẬP, dùng lý lẽ/thuyết phục/gợi ý phương án; hiệu quả khi conflict ở mức vừa & được xem là trung lập (vd EEOC ~72% hòa giải).
  - Arbitrator | CÓ quyền áp đặt thỏa thuận | Có thể tự nguyện hoặc bắt buộc; luôn dẫn tới một dàn xếp; nếu "nặng tay" khiến một bên thấy bị đè bẹp → conflict tái phát.
  - Conciliator | Không áp đặt | Bên thứ ba đáng tin tạo KÊNH liên lạc phi chính thức giữa hai bên; thường kèm fact-finding, diễn giải thông điệp, thuyết phục.
- callout `note` "Chọn third party": mediator giữ quyền quyết định ở hai bên; arbitrator đảm bảo có kết quả nhưng đánh đổi sự hài lòng; conciliator hữu ích khi hai bên còn khó ngồi lại trực tiếp.
- keyTerms: mediator, arbitrator, conciliator.

### s11 — Từ Conflict sang Collaboration (khung thực hành — slide)
- callout `key` "Hai mặt đồng xu (slide)": conflict & collaboration là hai mặt của cùng một đồng xu — mục tiêu quản trị là chuyển năng lượng conflict thành collaboration mang lại values & creativity cho nhóm.
- comparison "SCARF model (David Rock, 2008 — slide 22)" [2 cột → 1 cell]: Yếu tố | Nội dung (Away threat ↔ Toward reward)
  - Status | Vị thế tương đối; bị hạ thấp → phòng thủ.
  - Certainty | Khả năng dự đoán; mơ hồ → đe dọa.
  - Autonomy | Quyền tự chủ; bị kiểm soát → phản kháng.
  - Relatedness | Cảm giác thuộc về/an toàn với người khác.
  - Fairness | Cảm nhận công bằng; bất công → kích conflict.
- comparison "4 Triggers of team conflict + remedies (HBR, Laker & Pereira 2022 — slide 21)" [2 cột → 1 cell]: Trigger | Remedy
  - Communication differences | Thiết lập kênh giao tiếp rõ ràng.
  - Opaque performance standards | Minh bạch kỳ vọng về hiệu suất.
  - Unreasonable time constraints | Quản lý kỳ vọng về thời gian.
  - Unclear expectations | Làm rõ kỳ vọng về task & vai trò.
- callout `note` "Công cụ & cạm bẫy collaboration (slide 38-41)": Johari Window để tăng empathy ("seek first to understand" — Covey); promote healthy conflict (an toàn tâm lý, đa dạng góc nhìn, devil's advocate). CẠM BẪY: collaboration overload (quá nhiều họp/kênh → kiệt sức) và "New Groupthink" (hợp tác quá đà bóp nghẹt sáng tạo cá nhân) — hợp tác cần liều lượng, giống conflict.
- keyTerms: SCARF model, Johari Window, collaboration overload.

---

## 6. Questions (20 câu — q01…q20)
> Format: stem/options EN; đúng 1 trong 5 (A-E); rationale VI "Cơ chế:… Bẫy:… Khóa:…"; takeaway VI. Phủ đều 11 sections & book-adds.

Phân bổ:
1. **q01 — Định nghĩa conflict** (s1): chọn định nghĩa R&J (process, perceives, negatively affect, cares about); bẫy nhầm "mọi bất đồng".
2. **q02 — 3 views** (s1): nhận diện interactionist view (khuyến khích mức conflict tối thiểu) vs traditional/human relations.
3. **q03 — Types of conflict** (s2): phân biệt task vs relationship vs process qua tình huống; relationship hầu như luôn dysfunctional.
4. **q04 — Loci of conflict** (s2): dyadic/intragroup/intergroup.
5. **q05 — Inverted-U** (s3): điểm B tối ưu; A & C đều dysfunctional; bẫy "conflict càng ít càng tốt".
6. **q06 — Functional vs dysfunctional** (s3): nhận diện functional conflict.
7. **q07 — Conflict process order** (s4): thứ tự 5 stages; bẫy đảo intentions/behavior.
8. **q08 — Stage I sources** (s4): communication/structure/personal variables.
9. **q09 — Perceived vs felt** (s5): phân biệt "biết có" vs "cảm xúc liên đới".
10. **q10 — Framing/emotions** (s5): zero-sum framing giảm hợp tác.
11. **q11 — 5 intentions định vị** (s6): competing = assertive+uncooperative, collaborating = assertive+cooperative…
12. **q12 — Chọn intention theo tình huống** (s6): tình huống → style phù hợp; collaborating = win-win.
13. **q13 — Outcomes** (s7): functional (antidote groupthink) vs dysfunctional (giảm cohesiveness/trust).
14. **q14 — Managing conflict** (s7): nhận ra bất đồng do semantic; focus interests.
15. **q15 — Negotiation định nghĩa** (s8): allocate scarce resources.
16. **q16 — Distributive vs integrative** (s8): bảng đặc điểm (goal/motivation/focus/info/duration); bẫy đảo.
17. **q17 — BATNA** (s9): ngưỡng thấp nhất chấp nhận; offer > BATNA tốt hơn bế tắc.
18. **q18 — Negotiation process** (s9): thứ tự 5 bước; preparation quan trọng nhất.
19. **q19 — Third parties** (s10): phân biệt mediator vs arbitrator vs conciliator (ai có quyền áp đặt).
20. **q20 — Conflict → collaboration** (s11): SCARF / 4 triggers+remedies / collaboration overload / healthy conflict.

takeaway mẫu (Codex viết đủ 20, VI): vd q05 "Đường cong U ngược cho thấy mục tiêu không phải xóa sạch conflict mà giữ ở mức tối ưu — quá ít cũng tệ như quá nhiều."

---

## 7. source
```ts
source: "Robbins & Judge, Organizational Behavior — Chapter 14 'Conflict in Organizations' (pp.256-273); Slide 'OB-Topic 8-Conflict and Collaboration' (Dr Lan Anh, IM2017, HCMUT); bổ sung slide: Myers-Briggs (2022), SCARF (David Rock, 2008), HBR '4 Triggers Cause the Majority of Team Conflicts' (Laker & Pereira, 2022).",
```

---

## 8. Coverage matrix (đối chiếu "không sót kiến thức") — 24 mục
1. Định nghĩa conflict (process/perceives/negatively affect) — s1 ✓ q01
2. 3 views: traditional/human relations/interactionist **[slide + book]** — s1 ✓ q02
3. Causes of conflict (Myers-Briggs 2022) **[slide]** — s1
4. Task / relationship / process conflict — s2 ✓ q03
5. Dyadic / intragroup / intergroup loci — s2 ✓ q04
6. Functional vs dysfunctional — s3 ✓ q06
7. Inverted-U curve A/B/C (Exhibit 14-1) — s3 ✓ q05
8. Conflict process 5 stages (Exhibit 14-2) — s4 ✓ q07
9. Stage I sources: communication/structure/personal — s4 ✓ q08
10. Stage II perceived vs felt conflict — s5 ✓ q09
11. Framing zero-sum vs win-win + emotions — s5 ✓ q10
12. Stage III 5 intentions + trục assertiveness×cooperativeness (Exhibit 14-3) — s6 ✓ q11,q12
13. Bằng chứng openness/collaborating vs avoiding/competing — s6
14. Stage IV behavior (dynamic escalation, intensity continuum) — s7
15. Stage V outcomes functional/dysfunctional — s7 ✓ q13
16. Managing conflict + cultural influences — s7 ✓ q14
17. Negotiation định nghĩa — s8 ✓ q15
18. Distributive vs integrative (Exhibit 14-4) + fixed pie — s8 ✓ q16
19. BATNA — s9 ✓ q17
20. Negotiation process 5 steps (Exhibit 14-6) — s9 ✓ q18
21. Individual differences + reputation/relationships — s9
22. Third parties: mediator/arbitrator/conciliator — s10 ✓ q19
23. SCARF + 4 triggers+remedies **[slide]** — s11 ✓ q20
24. Johari, healthy conflict, collaboration overload/New Groupthink **[slide]** — s11

## 9. Cấu trúc dự kiến (để verify Layer B)
- sections: **11** (s1-s11)
- questions: **20**
- learningObjectives: **11**
- comparison blocks: **~14** (s1:1, s2:2, s3:1, s4:1, s5:1, s6:1, s7:1, s8:1, s9:1, s10:1, s11:2)
- flow blocks (trong section): **2** (s4 conflict process horizontal; s9 negotiation process horizontal) + knowledgeMap tree (riêng)
- callout blocks: **~13**
- calc/formula blocks: **0** (định tính)
- status: "ready"
