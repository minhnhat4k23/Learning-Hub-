# Spec: OB Topic 09 — Team Lifecycle and Team Effectiveness (From Groups to Teams)

> **Loại:** Soạn mới topic hoàn chỉnh (rich teaching mode), thay placeholder `topic-09`. Helper đã port ở Topic 00-08.
> **Executor: Codex.** File `content/organizational-behavior.ts`. Đặt `const topic09` sau `topic08`; array thay `placeholder(9, "topic-09", ...)` (dòng ~9634) → `topic09`.
> **Nguồn (đã đọc đủ 2 file — SÁCH > slide):**
> - **Reading `Chapter 11 - From Groups to Teams` (R&J, pp.200-215):** 6 LO; vì sao teams phổ biến; **work group vs work team** (positive synergy); **5 types of teams** (problem-solving, self-managed work teams, cross-functional, virtual teams, multiteam systems); **Team Effectiveness Model (Exhibit 11-3)** = Context + Composition + Process; Context (adequate resources, leadership & structure, climate of trust, performance evaluation & reward systems); Composition (abilities, personality, **allocating 9 roles — Exhibit 11-4**, diversity/organizational demography, size — two-pizza rule, member preferences); Process (common plan & purpose/reflexivity, specific goals, team efficacy, team identity/cohesion/mental models, conflict levels, social loafing); turning individuals into team players (selecting/training/rewarding); **"Beware! Teams aren't always the answer" — 3 tests** (complexity & perspectives, common purpose, interdependence).
> - **Slide `OB-Topic 9-Team lifecycle and Team effectiveness-Dr Lan Anh`** (32 trang): 7 lý do người giỏi ở lại (Trần Bảng Việt 2025); "team of all stars vs all-star team"; **team lifecycle = Tuckman 5 stages** (forming/storming/norming/performing/adjourning); **GRPI**; 5 cách ngăn social loafing; **Lencioni 5 Dysfunctions of a Team**; **Google Aristotle project — 5 factors** (psychological safety, dependability, structure & clarity, meaning, impact); **4 Stages of Psychological Safety** (Tim R. Clark: inclusion→learner→contributor→challenger); Five C's of team member competencies; virtual teams (hi-touch/low-touch); **5 behaviors of a high-trust team**; **Jeff Bezos' 6 Meeting Rules**; implications for managers.
> **Scope:** Topic định tính. SÁCH lo phần cốt lõi (types, effectiveness model, team players, when-not). Slide bổ sung **lifecycle + trust/psychological-safety frameworks** — đánh dấu source slide. Ngoại lệ per-topic: group properties (Ch.10) đã ở Topic 07 → chỉ nhắc lại ở mức liên hệ; social loafing giải thích ngắn (đã sâu ở Topic 07).
> **Đặc thù định tính:** KHÔNG calc/formula block. Blocks: comparison + flow + callout.
> **Quy ước:** VI + term EN; quiz stem/options EN, rationale/takeaway VI (Cơ chế→Bẫy→Khóa); 5 options A-E đúng 1.
> **Contract:** comparison `columns.length === cells.length + 1` (cột đầu = header row-label); flow `horizontal`/`tree` (tree set parent); node id dùng `_`; edge label ngắn.
> **Verify:** `npx tsc --noEmit` + `node rendercheck.mjs organizational-behavior topic-09`. KHÔNG commit.

---

## 1. bigIdea (lens Chaliyah CHỐT 2026-07-03)
```ts
bigIdea:
  "Một team không phải chỉ là group đông người hơn — điểm khác biệt cốt lõi là POSITIVE SYNERGY: team tạo ra kết quả LỚN HƠN tổng đóng góp cá nhân nhờ phối hợp, trong khi work group chỉ là phép cộng (Robbins & Judge). Nhưng 'gọi là team' không tự động khiến nó hiệu quả: hiệu quả đến từ CONTEXT + COMPOSITION + PROCESS (mô hình R&J Exhibit 11-3), được vun đắp qua một VÒNG ĐỜI (forming → storming → norming → performing → adjourning), và đứng trên nền tảng TRUST & PSYCHOLOGICAL SAFETY. Nhà quản lý giỏi biết chọn đúng loại team, nuôi nó qua các giai đoạn, tối ưu ba nhóm yếu tố — và biết khi nào KHÔNG nên dùng team.",
bigIdeaPillars: [
  { label: "Team ≠ Group: synergy là điểm khác biệt", body: "Work group = chia sẻ thông tin, không có synergy, performance = tổng inputs. Work team = positive synergy qua phối hợp, performance > tổng (R&J p201). 5 types: problem-solving, self-managed work teams, cross-functional, virtual teams, multiteam systems. Và 3 tests 'khi nào KHÔNG dùng team': công việc có cần >1 người & nhiều góc nhìn không, có common purpose không, các thành viên có interdependent không." },
  { label: "Team Lifecycle — đội tiến hóa qua thời gian", body: "Tuckman 5 stages (slide): forming (định hướng, bất định) → storming (tranh giành status, xung đột kiểm soát) → norming (hình thành chuẩn chung & cohesion) → performing (cơ cấu ổn định, dồn sức thực thi) → adjourning (giải tán với nhóm tạm thời). GRPI (Goals-Roles-Processes-Interpersonal) làm khung chẩn đoán; 'team of all stars vs all-star team' — ngôi sao rời rạc chưa phải đội mạnh." },
  { label: "Team Effectiveness Model: Context + Composition + Process", body: "Mô hình R&J (Exhibit 11-3). CONTEXT: adequate resources, leadership & structure, climate of trust, performance evaluation & reward systems. COMPOSITION: abilities, personality (conscientiousness/openness/emotional stability, tránh disagreeable), allocating 9 roles (Exhibit 11-4), diversity (organizational demography), size (two-pizza, 5-9), member preferences. PROCESS: common purpose & reflexivity, specific goals, team efficacy, mental models, conflict levels (task tốt, relationship xấu), social loafing." },
  { label: "Nền tảng: Trust & Psychological Safety", body: "Team hiệu quả cao đứng trên niềm tin (slide). Google Aristotle project — 5 factors: psychological safety (#1), dependability, structure & clarity, meaning, impact. 4 Stages of Psychological Safety (Tim Clark): inclusion → learner → contributor → challenger. Lencioni 5 Dysfunctions: absence of trust → fear of conflict → lack of commitment → avoidance of accountability → inattention to results. 5 behaviors of high-trust team + Bezos' 6 Meeting Rules." },
],
```

## 2. Wiring
`const topic09: Chapter = { slug:"topic-09", order:9, title:"Topic 09 — Team Lifecycle and Team Effectiveness", bigIdea, bigIdeaPillars, learningObjectives, knowledgeMap, sections, questions, status:"ready", source }`. Array: thay `placeholder(9, ...)` → `topic09`.

## 3. learningObjectives (10)
```ts
learningObjectives: [
  "Phân biệt work group và work team qua khái niệm positive synergy (R&J p201).",
  "So sánh 5 types of teams: problem-solving, self-managed, cross-functional, virtual, multiteam systems.",
  "Mô tả team lifecycle theo Tuckman (forming/storming/norming/performing/adjourning) và khung GRPI.",
  "Trình bày Team Effectiveness Model (Exhibit 11-3): 3 nhóm Context, Composition, Process.",
  "Giải thích 4 yếu tố Context (adequate resources, leadership & structure, climate of trust, reward systems).",
  "Phân tích các yếu tố Composition: abilities, personality, allocating 9 roles (Exhibit 11-4), diversity, size (two-pizza), preferences.",
  "Giải thích các biến Process: common purpose, specific goals, team efficacy, mental models, conflict levels, social loafing.",
  "Vận dụng khung trust & psychological safety: Google Aristotle 5 factors, 4 Stages of Psychological Safety (Clark), Lencioni 5 Dysfunctions.",
  "Giải thích cách turning individuals into team players (selecting, training, rewarding) và các hành vi của high-trust team.",
  "Áp dụng 3 tests để quyết định khi nào KHÔNG nên dùng team (complexity, common purpose, interdependence).",
],
```

## 4. knowledgeMap (flow, tree, collapsible)
Root `tm` → 4 nhóm A-D. caption: "Teams: (A) team ≠ group (synergy, 5 types), (B) lifecycle Tuckman, (C) effectiveness model (context/composition/process), (D) nền tảng trust & psychological safety."
```ts
nodes:
{ id:"tm", label:"Teams", group:"concept", sectionId:"s1", detail:"Team = group + positive synergy; hiệu quả cần context/composition/process." },
{ id:"g_diff", label:"A. Team ≠ Group", group:"concept", parent:"tm", sectionId:"s1", detail:"Synergy, 5 types, when NOT teams." },
{ id:"g_life", label:"B. Team lifecycle", group:"concept", parent:"tm", sectionId:"s3", detail:"Tuckman 5 stages, GRPI." },
{ id:"g_eff", label:"C. Effectiveness model", group:"concept", parent:"tm", sectionId:"s4", detail:"Context + Composition + Process." },
{ id:"g_trust", label:"D. Trust & psychological safety", group:"concept", parent:"tm", sectionId:"s7", detail:"Aristotle 5, 4 stages, Lencioni." },
{ id:"t_synergy", label:"Work group vs team", group:"term", parent:"g_diff", sectionId:"s1" },
{ id:"t_types", label:"5 types of teams", group:"term", parent:"g_diff", sectionId:"s2" },
{ id:"t_tuckman", label:"Tuckman + GRPI", group:"term", parent:"g_life", sectionId:"s3" },
{ id:"t_ctx", label:"Context (4)", group:"term", parent:"g_eff", sectionId:"s4" },
{ id:"t_comp", label:"Composition (9 roles)", group:"term", parent:"g_eff", sectionId:"s5" },
{ id:"t_proc", label:"Process", group:"term", parent:"g_eff", sectionId:"s6" },
{ id:"t_safety", label:"Aristotle / 4 stages / Lencioni", group:"term", parent:"g_trust", sectionId:"s7" },
{ id:"t_htrust", label:"High-trust behaviors + Bezos rules", group:"term", parent:"g_trust", sectionId:"s8" },
{ id:"t_player", label:"Team players + when NOT teams", group:"term", parent:"g_diff", sectionId:"s9" },
edges: tm→g_diff,g_life,g_eff,g_trust ; g_diff→t_synergy,t_types,t_player ; g_life→t_tuckman ; g_eff→t_ctx,t_comp,t_proc ; g_trust→t_safety,t_htrust
```
> Edge label ngắn (vd "khác biệt", "lifecycle", "hiệu quả", "trust", "synergy", "types", "tuckman", "context", "composition", "process", "safety", "high-trust", "team player"). node group: "concept"/"term".

---

## 5. Sections (9: s1-s9)

### s1 — Team vs Group: positive synergy
- callout `key` "Work group vs Work team (R&J p201)": Work group = nhóm tương tác chủ yếu để CHIA SẺ thông tin & ra quyết định giúp mỗi thành viên làm tốt phần của mình; KHÔNG có positive synergy → performance = TỔNG đóng góp. Work team = phối hợp tạo POSITIVE SYNERGY → performance LỚN HƠN tổng inputs.
- comparison "Work Group vs Work Team (R&J p201)" [3 cột → 2 cells]: Tiêu chí | Work group | Work team
  - Mục tiêu | Chia sẻ thông tin. | Hiệu suất tập thể (collective performance).
  - Synergy | Trung tính / không có. | Dương (positive).
  - Trách nhiệm | Cá nhân. | Cá nhân + lẫn nhau (mutual).
  - Kỹ năng | Ngẫu nhiên/đa dạng. | Bổ trợ nhau (complementary).
- callout `note` "Vì sao teams phổ biến (R&J p200)": linh hoạt, phản ứng nhanh, dễ lắp ráp/giải tán, dân chủ hóa tổ chức, tăng involvement, tạo tư duy hợp tác. Nhưng team KHÔNG mặc nhiên hiệu quả — có thể sa vào fads & herd mentality.
- keyTerms: work group, work team, synergy.

### s2 — 5 types of teams
- comparison "5 types of teams (R&J p202-205)" [2 cột → 1 cell]: Loại | Nội dung
  - Problem-solving team | 5-12 người cùng phòng ban gặp gỡ vài giờ/tuần bàn cách cải thiện chất lượng/hiệu quả/môi trường; chỉ đề xuất, ít quyền thực thi.
  - Self-managed work team | 10-15 người tự đảm nhận nhiều việc của quản lý (lập kế hoạch, phân công, kiểm soát); tự chủ cao.
  - Cross-functional team | Thành viên cùng cấp nhưng khác lĩnh vực, cùng hoàn thành một nhiệm vụ; mạnh về đa dạng góc nhìn, nhưng tốn thời gian xây trust.
  - Virtual team | Dùng công nghệ để kết nối thành viên phân tán về địa lý; cần trust, giám sát tiến độ, công khai thành quả để không "vô hình".
  - Multiteam system | "Team của các team" — tập hợp nhiều team phụ thuộc nhau cùng superordinate goal (vd cấp cứu tai nạn); cần boundary spanners & lãnh đạo điều phối.
- keyTerms: problem-solving team, self-managed work team, cross-functional team, virtual team, multiteam system.

### s3 — Team Lifecycle: Tuckman 5 stages + GRPI (slide)
- flow "Team lifecycle — Tuckman 5 stages (slide 11)" layout `horizontal`: nodes `f1` "Forming" → `f2` "Storming" → `f3` "Norming" → `f4` "Performing" → `f5` "Adjourning". Caption: "Đội tiến hóa qua 5 giai đoạn; nhiều đội mắc kẹt ở storming nếu không xây được norms & trust."
- comparison "5 giai đoạn Tuckman (slide 11)" [2 cột → 1 cell]: Giai đoạn | Nội dung
  - Forming | Bất định về mục đích, cơ cấu, lãnh đạo; thành viên thăm dò.
  - Storming | Tranh giành status & kiểm soát, xung đột về định hướng nhóm.
  - Norming | Hình thành quan hệ gần gũi, chuẩn mực chung & cohesion.
  - Performing | Cơ cấu ổn định & được chấp nhận; năng lượng dồn vào hoàn thành nhiệm vụ.
  - Adjourning | (nhóm tạm thời) Kết thúc & chuẩn bị giải tán; chú trọng wrap-up.
- callout `note` "GRPI & 'all-star team' (slide)": khung chẩn đoán GRPI — Goals (mục tiêu rõ) → Roles (vai trò) → Processes (quy trình) → Interpersonal (quan hệ). Bài học: một "team of all stars" (các ngôi sao rời rạc) chưa chắc mạnh bằng "all-star team" (đội biết phối hợp).
- keyTerms: forming, storming, norming, performing, adjourning, GRPI model.

### s4 — Team Effectiveness Model + Context
- callout `key` "Team Effectiveness Model (Exhibit 11-3, R&J p205)": hiệu quả đội tổng hợp từ 3 nhóm yếu tố — **Context** (bối cảnh), **Composition** (thành phần), **Process** (quy trình vận hành).
- flow "Team Effectiveness Model (Exhibit 11-3)" layout `tree`: root `eff` "Team effectiveness" với 3 nhánh con `ctx` "Context", `comp` "Composition", `proc` "Process" (mỗi nhánh set parent="eff"). Caption: "Ba nhóm yếu tố cùng quyết định team effectiveness."
- comparison "Context — 4 yếu tố bối cảnh (R&J p206-207)" [2 cột → 1 cell]: Yếu tố | Nội dung
  - Adequate resources | Thông tin kịp thời, thiết bị, nhân sự đủ, khích lệ, hỗ trợ hành chính — thiếu nguồn lực trực tiếp giảm khả năng đội đạt mục tiêu.
  - Leadership & structure | Thống nhất ai làm gì, chia tải công bằng; self-managed team tự hấp thụ vai trò quản lý; multiteam cần leader-facilitator.
  - Climate of trust | Nền tảng: thành viên tin nhau & tin lãnh đạo → hợp tác, bớt giám sát, sẵn sàng chấp nhận rủi ro.
  - Performance evaluation & reward | Đánh giá & thưởng theo NHÓM (group-based appraisal, profit/gainsharing, small-group incentives) để phản ánh đóng góp tập thể.
- keyTerms: team effectiveness, climate of trust.

### s5 — Composition (thành phần đội)
- comparison "Composition — các yếu tố (R&J p207-210)" [2 cột → 1 cell]: Yếu tố | Nội dung
  - Abilities of members | Cần cân bằng: kỹ năng chuyên môn, giải quyết vấn đề & ra quyết định, kỹ năng liên cá nhân.
  - Personality | Conscientiousness & openness cao → đội tốt hơn; emotional stability giúp xử lý conflict; một thành viên rất disagreeable có thể kéo cả đội xuống.
  - Allocating roles | Đặt người giỏi/kinh nghiệm nhất vào vai trò cốt lõi; đội thành công phân đủ 9 vai (Exhibit 11-4).
  - Diversity | Organizational demography (tuổi/giới/chủng tộc/thâm niên): diversity bề mặt tác động hỗn hợp/ngắn hạn tiêu cực; diversity về chức năng/chuyên môn tích cực; khác biệt văn hóa cản trở ngắn hạn rồi dịu đi.
  - Size of teams | Nhỏ tốt hơn — "two-pizza rule" (Bezos); lý tưởng 5-9; đội quá lớn → social loafing, khó phối hợp.
  - Member preferences | Không phải ai cũng thích làm việc nhóm; ép người thích làm một mình vào đội → giảm tinh thần & sự hài lòng.
- comparison "9 Team Member Roles (Exhibit 11-4, R&J p209)" [2 cột → 1 cell]: Vai trò | Đóng góp
  - Creator | Khởi xướng ý tưởng sáng tạo.
  - Promoter | Cổ vũ ý tưởng sau khi được nêu.
  - Assessor | Phân tích sâu sắc các phương án.
  - Organizer | Cung cấp cấu trúc.
  - Producer | Định hướng & theo đến cùng (follow-through).
  - Controller | Xem xét chi tiết & thực thi quy tắc.
  - Maintainer | Bảo vệ đội trước "trận chiến" bên ngoài (fights external battles).
  - Adviser | Khuyến khích tìm thêm thông tin.
  - Linker | Điều phối & tích hợp (coordinates and integrates).
- keyTerms: organizational demography, team roles.

### s6 — Process (quy trình vận hành)
- comparison "Process — các biến (R&J p210-212)" [2 cột → 1 cell]: Biến | Nội dung
  - Common plan & purpose | Mục đích chung, có reflexivity (đội phản tư & điều chỉnh kế hoạch khi cần).
  - Specific goals | Mục tiêu cụ thể, khó, khả thi → nâng performance & truyền năng lượng.
  - Team efficacy | Niềm tin tập thể rằng đội CÓ THỂ thành công → nỗ lực & kiên trì cao hơn.
  - Team identity / cohesion / mental models | Cảm giác thuộc về đội; gắn kết; và shared mental models (hiểu chung về nhiệm vụ & cách phối hợp).
  - Conflict levels | Task conflict mức vừa → tốt cho đội; relationship conflict → gần như luôn hại (liên hệ Topic 08).
  - Social loafing | Đội hiệu quả buộc trách nhiệm cá nhân rõ ràng để chống "ăn theo" (liên hệ Topic 07).
- callout `note` "Process gắn với group properties": nhiều biến process (cohesion, norms, social loafing, conflict) đã học ở Topic 07-08 — ở cấp team chúng được chủ động thiết kế thay vì để tự phát.
- keyTerms: reflexivity, team efficacy, mental models.

### s7 — Trust & Psychological Safety (Aristotle, 4 stages, Lencioni) — slide
- callout `key` "Psychological safety là nền tảng (slide 18 — Google Aristotle)": dự án Aristotle của Google (nghiên cứu 180+ đội) tìm ra 5 yếu tố đội hiệu quả, trong đó **psychological safety** (an toàn để nêu ý kiến/mắc lỗi không sợ bị phạt) là quan trọng NHẤT.
- comparison "Google Aristotle — 5 factors (slide 18)" [2 cột → 1 cell]: Yếu tố | Nội dung
  - Psychological safety | An toàn để chấp nhận rủi ro, nêu ý kiến, thừa nhận sai sót mà không sợ bị đánh giá.
  - Dependability | Thành viên hoàn thành phần việc đúng chất lượng & đúng hạn.
  - Structure & clarity | Vai trò, kế hoạch, mục tiêu rõ ràng.
  - Meaning | Công việc có ý nghĩa cá nhân với thành viên.
  - Impact | Thành viên tin việc mình làm tạo ra thay đổi/ý nghĩa.
- comparison "4 Stages of Psychological Safety (Tim R. Clark — slide 19)" [2 cột → 1 cell]: Giai đoạn | Nội dung
  - Inclusion safety | An toàn để được chấp nhận & thuộc về nhóm.
  - Learner safety | An toàn để học hỏi, đặt câu hỏi, mắc lỗi.
  - Contributor safety | An toàn để đóng góp bằng năng lực của mình.
  - Challenger safety | An toàn để thách thức hiện trạng, đề xuất thay đổi.
- comparison "Lencioni — 5 Dysfunctions of a Team (slide 15)" [2 cột → 1 cell]: Rối loạn (từ đáy tháp) | Biểu hiện
  - Absence of trust | Không dám bộc lộ điểm yếu → thiếu nền tảng.
  - Fear of conflict | Né tránh tranh luận thẳng thắn → hòa khí giả tạo.
  - Lack of commitment | Thiếu cam kết vì không được tranh luận → mơ hồ.
  - Avoidance of accountability | Không dám nhắc nhau chịu trách nhiệm.
  - Inattention to results | Đặt cái tôi/lợi ích cá nhân trên kết quả chung.
- keyTerms: psychological safety, Lencioni's five dysfunctions.

### s8 — High-trust behaviors & Bezos' Meeting Rules (slide thực hành)
- comparison "5 behaviors of a high-trust team (slide 30)" [2 cột → 1 cell]: Hành vi | Nội dung
  - Consistent follow-through | Làm đúng điều đã nói → xây độ tin cậy.
  - Transparent communication | Rõ ràng, tôn trọng, trung thực; xây "rhythms" (daily huddles, weekly meetings, quarterly off-sites) tạo không gian đối thoại.
  - Ownership & accountability | Quan tâm, hỗ trợ, thẳng thắn khi có lỗi, chủ động, bám mục tiêu chung.
  - Constructive feedback | Phản hồi kịp thời giúp mọi người tiến bộ — "We can disagree well!".
  - Vulnerability | Dám thừa nhận sai & xin giúp ("It's my fault! And I need help!") → kết nối qua hỗ trợ hai chiều.
- callout `note` "Jeff Bezos' 6 Meeting Rules (slide 31)": (1) Two-pizza rule (đội nhỏ); (2) No PowerPoint — dùng narrative memo; (3) Start with silence (15-20' đọc memo); (4) Leave an empty chair (đại diện khách hàng); (5) Encourage disagreement, then commit; (6) End with clear ownership. → công cụ thực tế để họp hiệu quả & xây trust.
- keyTerms: high-trust team.

### s9 — Turning individuals into team players + When NOT to use teams
- comparison "Turning individuals into team players (R&J p212-213)" [2 cột → 1 cell]: Đòn bẩy | Nội dung
  - Selecting | Tuyển người có kỹ năng liên cá nhân để làm team player (không chỉ kỹ thuật).
  - Training | Đào tạo kỹ năng làm việc nhóm cho người quen làm cá nhân.
  - Rewarding | Thưởng cho nỗ lực HỢP TÁC thay vì chỉ thành tích cá nhân.
- callout `key` "Beware! Teams aren't always the answer — 3 tests (R&J p214)": teamwork tốn thời gian & nguồn lực hơn; chỉ dùng team khi lợi ích vượt chi phí. 3 câu hỏi: (1) công việc có làm TỐT HƠN bởi >1 người & cần nhiều góc nhìn không? (2) có tạo COMMON PURPOSE/goals vượt tổng mục tiêu cá nhân không? (3) các thành viên có INTERDEPENDENT không (thành công của mỗi người phụ thuộc người khác — bóng đá vs bơi lội)?
- callout `note` "Implications for managers (R&J p215)": đội hiệu quả có đủ nguồn lực + lãnh đạo + climate of trust + reward theo nhóm; nhỏ gọn, đúng vai; tin vào năng lực đội, chung kế hoạch & mental model. Đừng mặc định luôn cần team.
- keyTerms: team player.

---

## 6. Questions (18 câu — q01…q18)
> Format: stem/options EN; đúng 1 trong 5 (A-E); rationale VI "Cơ chế:… Bẫy:… Khóa:…"; takeaway VI. Phủ đều 9 sections & book/slide-adds.

Phân bổ:
1. **q01 — Work group vs work team** (s1): positive synergy là điểm khác biệt; performance > tổng inputs.
2. **q02 — Vì sao teams phổ biến / cảnh báo** (s1): linh hoạt nhưng không mặc nhiên hiệu quả.
3. **q03 — 5 types (định nghĩa)** (s2): self-managed vs problem-solving vs cross-functional.
4. **q04 — Multiteam / virtual** (s2): multiteam = "team của teams"; virtual cần trust/giám sát.
5. **q05 — Tuckman order** (s3): thứ tự forming→storming→norming→performing→adjourning; bẫy đảo storming/norming.
6. **q06 — Giai đoạn storming/performing** (s3): nhận diện đặc điểm giai đoạn.
7. **q07 — Effectiveness model 3 nhóm** (s4): Context/Composition/Process.
8. **q08 — Context factors** (s4): adequate resources/leadership/trust/reward; climate of trust là nền tảng.
9. **q09 — Reward theo nhóm** (s4): đánh giá & thưởng theo team phản ánh đóng góp tập thể.
10. **q10 — Composition personality/size** (s5): two-pizza rule; conscientiousness; disagreeable member.
11. **q11 — 9 team roles** (s5): nhận diện vai trò (linker/maintainer/creator...).
12. **q12 — Diversity** (s5): organizational demography; diversity chức năng tích cực, bề mặt hỗn hợp.
13. **q13 — Process variables** (s6): team efficacy / mental models / reflexivity.
14. **q14 — Conflict/social loafing trong process** (s6): task conflict tốt, relationship xấu.
15. **q15 — Psychological safety / Aristotle** (s7): psychological safety là #1 theo Google.
16. **q16 — 4 stages / Lencioni** (s7): thứ tự Lencioni (trust→conflict→commitment→accountability→results) hoặc 4 stages Clark.
17. **q17 — High-trust behaviors / Bezos rules** (s8): "disagree well"; two-pizza; empty chair.
18. **q18 — When NOT teams (3 tests)** (s9): interdependence/common purpose/complexity; bẫy "team luôn tốt hơn".

takeaway mẫu (Codex viết đủ 18, VI): vd q18 "Team không phải luôn là câu trả lời — nếu công việc không cần phụ thuộc lẫn nhau thì cá nhân làm có khi tốt & rẻ hơn."

---

## 7. source
```ts
source: "Robbins & Judge, Organizational Behavior — Chapter 11 'From Groups to Teams' (pp.200-215); Slide 'OB-Topic 9-Team lifecycle and Team effectiveness' (Dr Lan Anh, IM2017, HCMUT); bổ sung slide: Tuckman (team stages), Google re:Work Project Aristotle, Tim R. Clark '4 Stages of Psychological Safety', Patrick Lencioni 'The Five Dysfunctions of a Team', Jeff Bezos' meeting rules.",
```

---

## 8. Coverage matrix (đối chiếu "không sót kiến thức") — 22 mục
1. Work group vs work team + positive synergy — s1 ✓ q01
2. Vì sao teams phổ biến + cảnh báo fads/herd — s1 ✓ q02
3. 5 types of teams — s2 ✓ q03,q04
4. Team lifecycle Tuckman 5 stages **[slide]** — s3 ✓ q05,q06
5. GRPI + all-star team **[slide]** — s3
6. Team Effectiveness Model 3 nhóm (Exhibit 11-3) — s4 ✓ q07
7. Context: resources/leadership/trust/reward — s4 ✓ q08,q09
8. Composition: abilities/personality — s5 ✓ q10
9. 9 team roles (Exhibit 11-4) — s5 ✓ q11
10. Diversity / organizational demography — s5 ✓ q12
11. Size (two-pizza, 5-9) — s5 ✓ q10
12. Member preferences — s5
13. Process: common purpose/goals/efficacy/mental models — s6 ✓ q13
14. Conflict levels + social loafing trong team — s6 ✓ q14
15. Psychological safety + Google Aristotle 5 **[slide]** — s7 ✓ q15
16. 4 Stages of Psychological Safety (Clark) **[slide]** — s7 ✓ q16
17. Lencioni 5 Dysfunctions **[slide]** — s7 ✓ q16
18. 5 behaviors of high-trust team **[slide]** — s8 ✓ q17
19. Bezos' 6 Meeting Rules **[slide]** — s8 ✓ q17
20. Turning individuals into team players (select/train/reward) — s9
21. When NOT to use teams — 3 tests — s9 ✓ q18
22. Implications for managers — s9

## 9. Cấu trúc dự kiến (để verify Layer B)
- sections: **9** (s1-s9)
- questions: **18**
- learningObjectives: **10**
- comparison blocks: **~12** (s1:1, s2:1, s3:1, s4:1, s5:2, s6:1, s7:3, s8:1, s9:1)
- flow blocks (trong section): **2** (s3 Tuckman horizontal; s4 effectiveness model tree) + knowledgeMap tree (riêng)
- callout blocks: **~9**
- calc/formula blocks: **0** (định tính)
- status: "ready"
