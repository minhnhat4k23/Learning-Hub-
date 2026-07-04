# Spec: OB Topic 06 — Motivation (Basic + Applied)

> **Loại:** Soạn mới topic hoàn chỉnh (rich teaching mode), thay placeholder `topic-06`. Helper đã port ở Topic 00-05.
> **Executor: Codex.** File `content/organizational-behavior.ts`. Đặt `const topic06` sau `topic05`; array thay `placeholder(6, "topic-06", ...)` → `topic06`.
> **Nguồn (đã đọc đủ 3 file — SÁCH > slide):**
> - **Slide `OB-Topic 6-Motivation-Dr Lan Anh`** (51 trang): định nghĩa motivation (intensity/direction/persistence), early need theories (McGregor X-Y, Maslow, Herzberg, McClelland, Alderfer ERG), roadmap contemporary theories, self-determination/cognitive evaluation, Thomas model of intrinsic motivation, JCM (Hackman & Oldham), SCARF, Drive (Pink), integration diagram (Exhibit 7-8), OB modification A-B-C, reinforcement, applications for managers, well-being.
> - **Reading `Chapter 7 - Basic Motivation` (R&J, p130-149):** motivation def; early theories (Maslow Exhibit 7-1, Herzberg two-factor + dual continuum Exhibit 7-2, McClelland nAch/nPow/nAff); contemporary (SDT, CET, self-concordance; goal-setting + MBO Exhibit 7-3; self-efficacy Bandura + Pygmalion Exhibit 7-4; reinforcement/operant/behaviorism/social-learning; equity Exhibit 7-5 + organizational justice 4 loại Exhibit 7-6; expectancy Vroom Exhibit 7-7; job engagement; integration Exhibit 7-8).
> - **Reading `Chapter 8 - Applied motivation` (R&J, p150-165):** JCM 5 core dims + Exhibit 8-1 + MPS; job rotation; relational job design; alternative work arrangements (flextime Exhibit 8-2, job sharing, telecommuting); EIP (participative management, representative participation, cultural EIP); rewards (variable pay: piece-rate, merit, bonus, profit-sharing, ESOP; pay secrecy); flexible benefits; employee recognition programs.
> **Scope:** Topic NẶNG (2 chương). Book-adds nhiều: các need theories chi tiết, self-concordance, MBO, Pygmalion, operant/behaviorism/social-learning, 4 loại organizational justice, expectancy 3 relationships, job engagement, toàn bộ Ch.8 applied. Ngoại lệ per-topic: nội dung Values/Hofstede thuộc Topic 03/11 → KHÔNG nhét vào đây; culture-bound chỉ nêu ở mức caveat.
> **Đặc thù định tính:** KHÔNG calc/formula block. MPS công thức để trong callout dạng text (không dùng calcBlock/formulaBlock). Blocks: comparison + flow + callout.
> **Quy ước:** VI + term EN; quiz stem/options EN, rationale/takeaway VI (Cơ chế→Bẫy→Khóa); 5 options A-E đúng 1.
> **Contract:** comparison `columns.length === cells.length + 1` (cột đầu = header row-label); flow `horizontal`/`tree` (tree set parent); node id dùng `_`; edge label ngắn.
> **Verify:** `npx tsc --noEmit` + `node rendercheck.mjs organizational-behavior topic-06`. KHÔNG commit.

---

## 1. bigIdea (lens Chaliyah CHỐT 2026-07-03)
```ts
bigIdea:
  "Motivation không phải một tính cách cố định mà là PROCESS gồm 3 yếu tố — intensity × direction × persistence — hướng tới organizational goals (R&J). Tư duy về động cơ tiến hóa từ early need theories (Maslow/Herzberg/McClelland/ERG — trực giác, dễ hiểu nhưng bằng chứng yếu) sang contemporary theories (self-determination, goal-setting, self-efficacy, reinforcement, equity/justice, expectancy — có bằng chứng, và BỔ SUNG nhau chứ không loại trừ, tích hợp trong Exhibit 7-8). Nhà quản lý biến lý thuyết thành hành động bằng cách thiết kế công việc (Job Characteristics Model) và thiết kế phần thưởng (pay/benefits/recognition) để kích hoạt các động cơ đó — và luôn nhớ động cơ mang tính culture-bound.",
bigIdeaPillars: [
  { label: "WHAT — motivation là một process", body: "Motivation = processes account cho intensity, direction, và persistence của effort hướng tới goal (R&J p130). Intensity = nỗ lực mạnh cỡ nào; Direction = hướng đúng organizational goals; Persistence = duy trì bao lâu. Không có direction thì intensity vô ích." },
  { label: "Early need theories (nền tảng, bằng chứng yếu)", body: "Maslow hierarchy 5 needs; Herzberg two-factor (hygiene ngăn dissatisfaction vs motivator tạo satisfaction — dual continuum); McClelland nAch/nPow/nAff; + Alderfer ERG & McGregor Theory X-Y (slide). Trực giác, được manager dùng nhiều nhưng research support hạn chế." },
  { label: "Contemporary theories (bổ sung nhau → tích hợp)", body: "Self-determination/cognitive evaluation/self-concordance; Goal-Setting (Locke: specific+difficult+feedback) → MBO; Self-Efficacy (Bandura 4 nguồn + Pygmalion); Reinforcement/operant/behaviorism/social-learning; Equity + 4 organizational justice; Expectancy (Vroom, 3 relationships). Tích hợp qua Exhibit 7-8; job engagement là mức commitment sâu." },
  { label: "Applied motivation — từ lý thuyết đến thực hành", body: "Thiết kế công việc: JCM (5 core dims + MPS), job rotation, relational job design. Alternative work arrangements: flextime, job sharing, telecommuting. EIP: participative & representative participation. Rewards: variable pay (piece-rate/merit/bonus/profit-sharing/ESOP), flexible benefits, employee recognition. Caveat: motivation culture-bound + well-being (slide)." },
],
```

## 2. Wiring
`const topic06: Chapter = { slug:"topic-06", order:6, title:"Topic 06 — Motivation", bigIdea, bigIdeaPillars, learningObjectives, knowledgeMap, sections, questions, status:"ready", source }`. Array: thay `placeholder(6, ...)` → `topic06`.

## 3. learningObjectives (11)
```ts
learningObjectives: [
  "Định nghĩa motivation và 3 yếu tố cốt lõi: intensity, direction, persistence (R&J p130).",
  "So sánh các early need theories: Maslow hierarchy, Herzberg two-factor (hygiene vs motivator), McClelland nAch/nPow/nAff, Alderfer ERG.",
  "Giải thích self-determination theory, cognitive evaluation theory và self-concordance; khi nào extrinsic reward làm giảm intrinsic motivation.",
  "Trình bày goal-setting theory (specific + difficult + feedback) và liên hệ với Management By Objectives (MBO).",
  "Mô tả self-efficacy theory (Bandura) và 4 nguồn tăng self-efficacy; giải thích Pygmalion effect.",
  "Phân biệt reinforcement theory, operant conditioning, behaviorism và social-learning theory; mô hình A-B-C của OB modification.",
  "Giải thích equity theory (ratio comparison, các phản ứng khi inequity) và 4 loại organizational justice (distributive, procedural, informational, interpersonal).",
  "Trình bày expectancy theory (Vroom) với 3 relationships và cách các contemporary theories tích hợp (Exhibit 7-8).",
  "Giải thích job engagement và ý nghĩa cho manager.",
  "Mô tả Job Characteristics Model (5 core dimensions, MPS) và các cách redesign job: job rotation, relational job design.",
  "Nêu các cách applied motivation: alternative work arrangements, EIP, variable pay, flexible benefits, employee recognition — và caveat culture-bound.",
],
```

## 4. knowledgeMap (flow, tree, collapsible)
Root `mot` → 4 nhóm A-D. caption: "Motivation: (A) process 3 yếu tố, (B) early need theories, (C) contemporary theories (tích hợp Exhibit 7-8), (D) applied motivation (job design & rewards)."
```ts
nodes:
{ id:"mot", label:"Motivation", group:"concept", sectionId:"s1", detail:"Process: intensity × direction × persistence hướng org goals." },
{ id:"g_proc", label:"A. Process (WHAT)", group:"concept", parent:"mot", sectionId:"s1", detail:"Intensity, direction, persistence." },
{ id:"g_early", label:"B. Early need theories", group:"concept", parent:"mot", sectionId:"s2", detail:"Maslow, Herzberg, McClelland, ERG." },
{ id:"g_contemp", label:"C. Contemporary theories", group:"concept", parent:"mot", sectionId:"s3", detail:"SDT, goal-setting, self-efficacy, reinforcement, equity, expectancy." },
{ id:"g_applied", label:"D. Applied motivation", group:"concept", parent:"mot", sectionId:"s10", detail:"Job design, work arrangements, rewards." },
{ id:"t_ipd", label:"Intensity/Direction/Persistence", group:"term", parent:"g_proc", sectionId:"s1" },
{ id:"t_need", label:"Maslow/Herzberg/McClelland/ERG", group:"term", parent:"g_early", sectionId:"s2" },
{ id:"t_sdt", label:"Self-determination & CET", group:"term", parent:"g_contemp", sectionId:"s3" },
{ id:"t_goal", label:"Goal-setting + MBO", group:"term", parent:"g_contemp", sectionId:"s4" },
{ id:"t_eff", label:"Self-efficacy (Bandura)", group:"term", parent:"g_contemp", sectionId:"s5" },
{ id:"t_reinf", label:"Reinforcement / OB Mod", group:"term", parent:"g_contemp", sectionId:"s6" },
{ id:"t_equity", label:"Equity + justice (4)", group:"term", parent:"g_contemp", sectionId:"s7" },
{ id:"t_expect", label:"Expectancy + integration", group:"term", parent:"g_contemp", sectionId:"s8" },
{ id:"t_jcm", label:"JCM + job redesign", group:"term", parent:"g_applied", sectionId:"s10" },
{ id:"t_reward", label:"Work arrangements / EIP / rewards", group:"term", parent:"g_applied", sectionId:"s11" },
edges: mot→g_proc,g_early,g_contemp,g_applied ; g_proc→t_ipd ; g_early→t_need ; g_contemp→t_sdt,t_goal,t_eff,t_reinf,t_equity,t_expect ; g_applied→t_jcm,t_reward
```
> Edge label ngắn (vd "3 yếu tố", "need", "SDT", "goal", "efficacy", "reinforce", "equity", "expect", "job", "reward"). node group: dùng "concept"/"term" như topic05.

---

## 5. Sections (12: s1-s12)

### s1 — WHAT: motivation là một process
- callout `key` "Motivation theo Robbins & Judge (p130)": *"The processes that account for an individual's intensity, direction, and persistence of effort toward attaining a goal."* Ở OB ta thu hẹp về organizational goals.
- comparison "3 yếu tố của motivation (R&J p130-131; slide 5)" [2 cột → 1 cell]: Yếu tố | Nội dung
  - Intensity | Nỗ lực mạnh cỡ nào — phần đa số người hay nghĩ tới. Nhưng intensity cao mà sai hướng thì không tạo kết quả tốt.
  - Direction | Hướng của effort — phải channel về hướng benefits the organization (quality of effort, không chỉ amount).
  - Persistence | Duy trì effort bao lâu — motivated individuals bám task đủ lâu để đạt goal.
- callout `note` "Motivation không phải trait cố định": levels of motivation thay đổi giữa người và trong cùng một người theo tình huống (ví dụ SV chật vật đọc textbook 20 phút nhưng ngốn Harry Potter cả ngày).
- keyTerms: motivation, intensity, direction, persistence.

### s2 — Early theories: need theories
- comparison "Early need theories (R&J p131-134; slide 6-8)" [3 cột → 2 cells]: Lý thuyết | Nội dung cốt lõi | Điểm cần nhớ
  - Maslow's hierarchy of needs | 5 nhu cầu theo thứ bậc: physiological → safety-security → social-belongingness → esteem → self-actualization (Exhibit 7-1). | Nhu cầu thỏa mãn tầng dưới thì tầng trên trở nên dominant; research support yếu, đặc biệt cross-culturally.
  - Herzberg's two-factor (motivation-hygiene) | Hygiene factors (supervision, pay, company policy, working conditions) ngăn dissatisfaction; motivators (achievement, recognition, responsibility, growth) tạo satisfaction. | Dual continuum: đối lập của "satisfaction" là "no satisfaction", đối lập của "dissatisfaction" là "no dissatisfaction" (Exhibit 7-2). Rất phổ biến ở châu Á.
  - McClelland's needs | nAch (drive to excel), nPow (make others behave), nAff (friendly close relationships). | High achievers thích probability thành công ~0.5, moderate risk, cần feedback; nAch không đảm bảo là good manager.
  - Alderfer's ERG (slide) | Gộp lại 3 nhóm: Existence, Relatedness, Growth. | Bản rút gọn hierarchy; cho phép nhiều need active cùng lúc (bổ sung từ slide).
- callout `note` "Thêm từ slide: McGregor Theory X-Y": Theory X (giả định nhân viên lười, cần kiểm soát) vs Theory Y (nhân viên tự giác, tìm trách nhiệm) — cách manager nhìn con người ảnh hưởng cách tạo động lực.
- keyTerms: hierarchy of needs theory, two-factor theory, hygiene factors, McClelland's theory of needs (nAch/nPow/nAff), ERG theory.

### s3 — Self-determination theory, CET & self-concordance
- callout `key` "Self-determination theory (SDT) (R&J p134)": người ta thích cảm giác có control over their actions; bất cứ điều gì biến một task từng được thích thành nghĩa vụ (obligation) sẽ undermine motivation. 3 nhu cầu tâm lý cơ bản (slide): autonomy, competence, relatedness.
- comparison "SDT và các nhánh (R&J p134-135)" [2 cột → 1 cell]: Khái niệm | Nội dung
  - Cognitive evaluation theory (CET) | Extrinsic rewards cho một task vốn intrinsic-interesting có thể GIẢM intrinsic interest — khi được trả tiền, việc "muốn làm" biến thành "phải làm".
  - Self-concordance | Mức độ lý do theo đuổi goal khớp với interests & core values của cá nhân; theo đuổi goal vì intrinsic reason → hài lòng & perform tốt hơn.
  - Hàm ý (implication) | Manager nên cung cấp cả intrinsic lẫn extrinsic incentives; làm work interesting, ghi nhận, hỗ trợ growth; tránh để reward biến thành controlling.
- callout `note` "Bẫy CET": không phải mọi reward đều hại — reward hại intrinsic motivation nhất khi task vốn đã thú vị và reward bị cảm nhận là controlling. Với task nhàm chán, extrinsic reward vẫn cần.
- keyTerms: self-determination theory, cognitive evaluation theory, self-concordance.

### s4 — Goal-setting theory & MBO
- callout `key` "Goal-setting theory (Locke) (R&J p135)": intentions to work toward a goal là nguồn motivation chính. Specific + difficult goals (khi accepted) + feedback → performance cao hơn "do your best".
- comparison "Điều kiện để goal thúc đẩy performance (R&J p135-137)" [2 cột → 1 cell]: Yếu tố | Nội dung
  - Specificity | Goal cụ thể tăng performance hơn goal mơ hồ ("do your best").
  - Difficulty | Goal khó (đã accepted) → performance cao hơn goal dễ.
  - Feedback | Feedback (đặc biệt self-generated) hướng dẫn behavior; mạnh hơn feedback từ bên ngoài.
  - Goal commitment | Cam kết cao nhất khi goal công khai, có internal locus of control, self-set, phù hợp năng lực.
  - Moderators khác | Task characteristics (đơn giản/quen thuộc/độc lập) và national culture ảnh hưởng quan hệ goal–performance.
- flow "MBO — cascading of objectives (Exhibit 7-3)" layout `tree`: node `co` "Overall organizational objectives" (root) → `div` "Divisional objectives" → `dept` "Departmental objectives" → `indiv` "Individual objectives". Caption: "MBO chuyển goal-setting thành hệ thống: mục tiêu tổ chức được cascade xuống division → department → individual."
- callout `note` "Mặt tối của goal khó": goal quá tham vọng gắn chặt reward có thể đẩy người ta cạnh tranh phi đạo đức / bỏ qua mastery. Participation trong set goal cho kết quả hỗn hợp.
- keyTerms: goal-setting theory, management by objectives (MBO), self-generated feedback.

### s5 — Self-efficacy theory
- callout `key` "Self-efficacy theory (Bandura) (R&J p137)": niềm tin của cá nhân rằng mình CÓ THỂ thực hiện một task (còn gọi social cognitive / social learning theory). Self-efficacy cao → cố gắng hơn, kiên trì hơn ở task khó; tạo positive spiral efficacy↑ → engagement↑ → performance↑.
- comparison "4 nguồn tăng self-efficacy (Bandura) (R&J p138)" [2 cột → 1 cell]: Nguồn | Nội dung
  - Enactive mastery | Nguồn mạnh nhất — trực tiếp có kinh nghiệm/thành công với task (training tương tác giúp cái này).
  - Vicarious modeling | Tự tin hơn khi thấy người khác (giống mình) làm được.
  - Verbal persuasion | Được thuyết phục rằng mình có kỹ năng cần thiết (motivational speakers).
  - Arousal | Trạng thái "psyched up" — với task cần năng lượng thì tốt, với task cần bình tĩnh thì hại.
- callout `note` "Pygmalion effect (self-fulfilling prophecy)": kỳ vọng của người khác có thể làm điều đó thành thật — GV tin HS thông minh sẽ dành nhiều thời gian hơn, kỳ vọng cao hơn → HS đạt tốt hơn. Cách mạnh nhất manager dùng verbal persuasion. Goal-setting & self-efficacy bổ sung nhau (Exhibit 7-4).
- keyTerms: self-efficacy theory, enactive mastery, vicarious modeling, Pygmalion effect.

### s6 — Reinforcement theory & OB modification
- callout `key` "Reinforcement theory (R&J p140)": behavior là function của consequences của nó; behavior được environmentally caused. Trái ngược với goal-setting (cognitive), reinforcement là quan điểm behavioristic — bỏ qua inner state, tập trung vào điều xảy ra khi hành động.
- comparison "Reinforcement và các khái niệm liên quan (R&J p140-141)" [2 cột → 1 cell]: Khái niệm | Nội dung
  - Operant conditioning | Người ta học behave theo cách để GET điều mình muốn hoặc AVOID điều không muốn; reinforcement củng cố behavior.
  - Behaviorism (Skinner) | Behavior theo stimuli một cách "unthinking"; radical behaviorism bác bỏ feelings/thoughts như nguyên nhân của behavior.
  - Social-learning theory | Học qua cả observation (xem models: cha mẹ, thầy cô, sếp) LẪN direct experience; người ta phản ứng theo consequences họ perceive, không phải objective consequences.
- flow "OB modification — mô hình A-B-C (slide 47)" layout `horizontal`: `ante` "Antecedents (điều xảy ra TRƯỚC behavior)" → `beh` "Behavior (điều người ta nói/làm)" → `cons` "Consequences (điều xảy ra SAU behavior)". Caption: "Shaping behavior (Skinner): reinforce từng bước tiến gần desired response; consequence quyết định behavior lặp lại hay không."
- keyTerms: reinforcement theory, operant conditioning, behaviorism, social-learning theory.

### s7 — Equity theory & organizational justice
- callout `key` "Equity theory (R&J p141)": nhân viên so sánh RATIO outcomes/inputs của mình với ratio của một referent (thường coworker/người làm việc tương tự). Bằng nhau → equity; lệch → tension thúc đẩy điều chỉnh.
- comparison "Ratio comparison & phản ứng khi inequity (Exhibit 7-5; R&J p141-142)" [2 cột → 1 cell]: Nội dung | Diễn giải
  - O/I(A) < O/I(B) | Under-rewarded inequity (mình nhận ít hơn so với công sức) → căng thẳng, bất mãn.
  - O/I(A) = O/I(B) | Equity — cảm thấy công bằng.
  - O/I(A) > O/I(B) | Over-rewarded inequity (nhận nhiều hơn) → có thể thấy guilt.
  - 6 phản ứng khi perceive inequity | (1) Change inputs; (2) Change outcomes; (3) Distort perceptions of self; (4) Distort perceptions of others; (5) Choose a different referent; (6) Leave the field (nghỉ việc).
- comparison "4 loại organizational justice (Exhibit 7-6; R&J p142-143)" [3 cột → 2 cells]: Loại | Định nghĩa | Câu hỏi cốt lõi
  - Distributive justice | Fairness của outcome/allocation (pay, recognition). | "Tôi có nhận được phần XỨNG ĐÁNG không?"
  - Procedural justice | Fairness của process dùng để quyết định phân bổ. | "Quy trình quyết định có công bằng, có cho tôi tiếng nói không?"
  - Informational justice | Mức độ manager cung cấp giải thích trung thực cho quyết định. | "Tôi có được giải thích rõ ràng, thành thật không?"
  - Interpersonal justice | Mức độ nhân viên được đối xử với dignity & respect. | "Tôi có được đối xử tôn trọng không?"
- callout `note` "Justice outcomes": khi thấy được đối xử công bằng, nhân viên tăng task performance & citizenship (OCB), giảm counterproductive behavior. Distributive & procedural gắn với performance; informational & interpersonal gắn với citizenship.
- keyTerms: equity theory, organizational justice, distributive justice, procedural justice, informational justice, interpersonal justice.

### s8 — Expectancy theory & integration
- callout `key` "Expectancy theory (Vroom) (R&J p145)": sức mạnh của xu hướng hành động phụ thuộc kỳ vọng rằng hành động sẽ dẫn tới một outcome và sức hấp dẫn của outcome đó. Giải thích vì sao nhiều người chỉ làm mức tối thiểu.
- comparison "3 relationships của expectancy theory (Exhibit 7-7; R&J p145-146)" [2 cột → 1 cell]: Relationship | Câu hỏi của nhân viên
  - Effort–performance | "Nếu tôi bỏ nỗ lực, liệu có dẫn tới performance được ghi nhận không?"
  - Performance–reward | "Nếu tôi perform tốt, liệu có được reward tương xứng không?"
  - Rewards–personal goals | "Reward đó có phải thứ tôi thực sự muốn / phục vụ mục tiêu cá nhân không?"
- flow "Integrating contemporary theories (Exhibit 7-8; R&J p147)" layout `horizontal`: `effort` "Individual effort" → `perf` "Individual performance" → `rewards` "Organizational rewards" → `goals` "Personal goals". Caption: "Nền là expectancy (7-7): opportunity/ability + objective evaluation nuôi effort; goals direct behavior; reinforcement & equity/justice tác động rewards; high nAch bỏ qua rewards đi thẳng tới personal goals. Các theory bổ sung nhau."
- callout `note` "Các theory KHÔNG loại trừ nhau": mỗi theory soi một mặt. Goal-setting giúp effort→performance; self-efficacy nuôi confidence; equity/justice + reinforcement định hình rewards; expectancy nối performance→reward→goals. Đề thi thích hỏi 'theory nào giải thích tình huống này'.
- keyTerms: expectancy theory.

### s9 — Job engagement
- callout `key` "Job engagement (R&J p146)": mức độ đầu tư physical, cognitive và emotional energies của nhân viên vào job performance (ví dụ y tá Joseph hoàn toàn hòa mình vào việc chăm bệnh nhân). Sâu hơn "thích việc".
- callout `note` "Vì sao engagement quan trọng & đến từ đâu": Gallup — tổ chức có nhiều engaged employees thì productivity cao hơn, ít tai nạn, turnover thấp; engagement gắn với task performance & OCB. Nguồn: cảm nhận công việc có ý nghĩa, đủ resources, match giá trị cá nhân–tổ chức, leadership truyền cảm hứng sứ mệnh.
- keyTerms: job engagement.

### s10 — Applied: job design (JCM) & job redesign
- callout `key` "Job Characteristics Model (JCM) — Hackman & Oldham (R&J p151)": job design (cách sắp xếp các element của công việc) ảnh hưởng effort. JCM mô tả job qua 5 core dimensions.
- flow "JCM: từ core dimensions đến outcomes (Exhibit 8-1)" layout `horizontal`: `dim` "Core job dimensions (5)" → `states` "Critical psychological states" → `out` "Personal & work outcomes". Caption: "Skill variety/task identity/task significance → experienced meaningfulness; autonomy → experienced responsibility; feedback → knowledge of results → high motivation/performance/satisfaction, low absenteeism. Moderator: employee growth-need strength."
- comparison "5 core job dimensions (R&J p151)" [2 cột → 1 cell]: Dimension | Nội dung
  - Skill variety | Mức độ job cần nhiều hoạt động & kỹ năng khác nhau.
  - Task identity | Mức độ job hoàn thành một mảng công việc trọn vẹn, nhận diện được.
  - Task significance | Mức độ job ảnh hưởng đến cuộc sống/công việc của người khác.
  - Autonomy | Mức độ job cho tự do, độc lập, quyết định cách làm.
  - Feedback | Mức độ thực hiện job tạo thông tin trực tiếp & rõ ràng về performance của chính mình.
- callout `note` "Motivating Potential Score (MPS)": kết hợp thành chỉ số: MPS = [(Skill variety + Task identity + Task significance) / 3] × Autonomy × Feedback. Job có MPS cao khi ít nhất một trong ba yếu tố meaningfulness cao VÀ cả autonomy lẫn feedback đều cao. (Đây là index khái niệm, không phải bài tính.)
- comparison "Hai cách redesign job (R&J p153-154)" [2 cột → 1 cell]: Cách | Nội dung
  - Job rotation | Luân chuyển nhân viên qua nhiều task cùng level (Singapore Airlines) → giảm boredom, tăng motivation & hiểu đóng góp; nhược điểm: tăng training cost, giảm productivity tạm thời.
  - Relational job design | Kết nối nhân viên với beneficiaries (khách hàng, bệnh nhân) để thấy prosocial impact công việc mình → tăng meaningfulness & commitment.
- keyTerms: job design, job characteristics model (JCM), motivating potential score (MPS), job rotation, relational job design.

### s11 — Applied: alternative work arrangements & EIP
- comparison "Alternative work arrangements (R&J p154-158)" [2 cột → 1 cell]: Hình thức | Nội dung
  - Flextime | Nhân viên làm đủ số giờ/tuần nhưng linh hoạt thời điểm quanh một common core (Exhibit 8-2) → giảm absenteeism, tăng productivity; hiệu quả nhất khi coi là work-life balance strategy. Không hợp mọi job.
  - Job sharing | Hai (hoặc nhiều) người chia nhau một full-time job → giữ được talent linh hoạt.
  - Telecommuting | Làm việc từ xa ≥2 ngày/tuần qua công nghệ → linh hoạt; rủi ro "out of sight, out of mind" (mất face time, ảnh hưởng promotion).
- comparison "Employee involvement & participation — EIP (R&J p157-159)" [2 cột → 1 cell]: Hình thức | Nội dung
  - Participative management | Cấp dưới chia sẻ đáng kể quyền ra quyết định với cấp trên trực tiếp; cần trust; kết quả với performance hỗn hợp nhưng tăng satisfaction/commitment.
  - Representative participation | Nhân viên tham gia ra quyết định qua một nhóm đại diện nhỏ: works councils & board representatives (phổ biến ở Tây Âu).
- callout `note` "Cultural EIP": EIP nên tailor theo chuẩn văn hóa; ở văn hóa power-distance cao (đề cao hierarchy) EIP ít được ưa; nghiên cứu ở Trung Quốc cho thấy nhân viên ít traditional hưởng lợi nhiều hơn từ participative management.
- keyTerms: flextime, job sharing, telecommuting, employee involvement and participation (EIP), participative management, representative participation.

### s12 — Applied: rewards, benefits, recognition & implications
- comparison "Các chương trình variable pay (R&J p160-163)" [2 cột → 1 cell]: Chương trình | Nội dung
  - Piece-rate pay plan | Trả một khoản cố định cho mỗi đơn vị sản phẩm; tạo productivity cao nhưng rủi ro tài chính cho worker, không hợp khi output do yếu tố ngoài kiểm soát.
  - Merit-based pay plan | Trả dựa trên performance appraisal ratings; high performers nhận raise lớn hơn; hạn chế: phụ thuộc appraisal chủ quan, pool ngân sách biến động.
  - Bonus | Thưởng cho performance GẦN ĐÂY (không cộng dồn như merit); incentive mạnh hơn nhưng khiến thu nhập dễ bị cắt khi khó khăn.
  - Profit-sharing plan | Phân bổ compensation theo một công thức dựa trên lợi nhuận công ty (cash hoặc stock options).
  - Employee stock ownership plan (ESOP) | Nhân viên sở hữu cổ phần (thường dưới giá thị trường); tăng satisfaction & innovation NHẤT khi họ cảm nhận được psychological ownership.
- callout `note` "Flexible benefits & pay secrecy": flexible benefits cho mỗi nhân viên tự thiết kế gói phúc lợi hợp nhu cầu (khớp expectancy theory) → cá nhân hóa reward. Pay secrecy (giấu lương) thường có hại: tăng cảm nhận pay là subjective, làm giảm động lực high performers.
- callout `key` "Employee recognition programs & intrinsic rewards": ghi nhận (lời khen, Employee of the Month) là intrinsic reward rẻ nhưng mạnh (ví dụ Laura ở fast-food gắn bó vì được sếp khen công khai). Cần công bằng để tránh bị xem là thiên vị.
- callout `note` "Implications for managers (R&J p165 + slide 49)": (1) Recognize individual differences — thiết kế job hợp nhu cầu từng người; (2) Use goals & feedback; (3) Cho nhân viên participate quyết định ảnh hưởng họ; (4) Link rewards to performance; (5) Check the system for equity. Và luôn nhớ motivation là culture-bound.
- keyTerms: variable-pay program, piece-rate pay plan, merit-based pay plan, bonus, profit-sharing plan, employee stock ownership plan (ESOP), flexible benefits, employee recognition program.

---

## 6. Quiz (20 câu q01-q20)
Format: stem/options EN, rationale/takeaway VI (Cơ chế→Bẫy→Khóa), 5 options A-E đúng 1 (mỗi câu đúng 1 `isCorrect: true`).

1. q01 Định nghĩa motivation (intensity/direction/persistence).
2. q02 Yếu tố nào bị bỏ qua khi chỉ nói "làm việc chăm chỉ" → direction (quality of effort).
3. q03 Maslow: nhu cầu nào trở nên dominant sau khi tầng dưới được thỏa mãn.
4. q04 Herzberg two-factor: phân biệt hygiene vs motivator / dual continuum.
5. q05 McClelland: high achiever thích probability ~0.5, moderate risk, feedback.
6. q06 Self-determination / cognitive evaluation: khi nào extrinsic reward làm giảm intrinsic.
7. q07 Self-concordance (theo đuổi goal vì intrinsic reason).
8. q08 Goal-setting: specific + difficult + feedback (không phải "do your best").
9. q09 MBO — cascading objectives / self-generated feedback mạnh hơn.
10. q10 Self-efficacy: nguồn mạnh nhất = enactive mastery.
11. q11 Pygmalion effect (self-fulfilling prophecy / verbal persuasion).
12. q12 Reinforcement vs cognitive; operant conditioning (get/avoid).
13. q13 Social-learning theory (học qua observation + direct experience).
14. q14 Equity theory: phân loại under/over-rewarded hoặc 6 phản ứng.
15. q15 Organizational justice: nhận diện distributive vs procedural vs interpersonal.
16. q16 Expectancy theory: nhận diện 1 trong 3 relationships (effort–performance / performance–reward / rewards–goals).
17. q17 Job engagement (đầu tư physical/cognitive/emotional energies).
18. q18 JCM: nhận diện 1 core dimension (vd task significance) hoặc MPS logic.
19. q19 Job rotation vs relational job design / alternative work arrangements (telecommuting "out of sight").
20. q20 Variable pay: phân biệt bonus vs merit vs ESOP / employee recognition intrinsic.

## 7. source
```ts
source:
  "Organizational Behavior (IM2017, Dr Truong Thi Lan Anh) — slide 'OB-Topic 6 - Motivation' + Reading 'Chapter 7 - Basic Motivation' (Robbins & Judge, p130-149) & 'Chapter 8 - Applied Motivation' (p150-165). Motivation = process (intensity/direction/persistence); early need theories (Maslow Exhibit 7-1, Herzberg two-factor Exhibit 7-2, McClelland nAch/nPow/nAff, Alderfer ERG + McGregor X-Y từ slide); contemporary theories (self-determination/cognitive evaluation/self-concordance, goal-setting + MBO Exhibit 7-3, self-efficacy Bandura + Pygmalion Exhibit 7-4, reinforcement/operant/behaviorism/social-learning + OB Mod A-B-C, equity Exhibit 7-5 + organizational justice 4 loại Exhibit 7-6, expectancy Vroom Exhibit 7-7, job engagement, integration Exhibit 7-8); applied motivation (JCM 5 dims + MPS Exhibit 8-1, job rotation, relational job design, flextime Exhibit 8-2/job sharing/telecommuting, EIP participative & representative, variable pay piece-rate/merit/bonus/profit-sharing/ESOP, flexible benefits, employee recognition). SCARF (David Rock), Drive (Daniel Pink) và well-being từ slide.",
```

## 8. Coverage matrix (Lớp B — slide + sách)
| # | Mục | Nguồn | Section |
|---|---|---|---|
| 1 | Định nghĩa motivation (intensity/direction/persistence) | slide 5 / sách p130 | s1 |
| 2 | Maslow hierarchy 5 needs | slide 6 / sách p131 (Exhibit 7-1) | s2 |
| 3 | Herzberg two-factor + dual continuum | slide 6 / **sách p132-133 (Exhibit 7-2)** | s2 |
| 4 | McClelland nAch/nPow/nAff | slide 6 / **sách p133-134** | s2 |
| 5 | Alderfer ERG + McGregor X-Y | slide 6 | s2 |
| 6 | Self-determination + cognitive evaluation | slide 24-25 / sách p134-135 | s3 |
| 7 | Self-concordance | **sách p135** | s3 |
| 8 | Goal-setting theory | **sách p135-137** | s4 |
| 9 | MBO (cascading objectives) | **sách p137 (Exhibit 7-3)** | s4 |
| 10 | Self-efficacy + 4 sources | slide 14 / **sách p137-139** | s5 |
| 11 | Pygmalion effect | **sách p139** | s5 |
| 12 | Reinforcement / operant / behaviorism / social-learning | slide 45-48 / **sách p140-141** | s6 |
| 13 | OB modification A-B-C | slide 47 | s6 |
| 14 | Equity theory + 6 responses | **sách p141-142 (Exhibit 7-5)** | s7 |
| 15 | Organizational justice (4 loại) | **sách p142-144 (Exhibit 7-6)** | s7 |
| 16 | Expectancy theory (3 relationships) | slide 14 / **sách p145-146 (Exhibit 7-7)** | s8 |
| 17 | Integration contemporary theories | slide 35 / **sách p146-148 (Exhibit 7-8)** | s8 |
| 18 | Job engagement | **sách p146** | s9 |
| 19 | JCM 5 dims + MPS | slide 32 / **sách p151-153 (Exhibit 8-1)** | s10 |
| 20 | Job rotation + relational job design | **sách p153-154** | s10 |
| 21 | Flextime / job sharing / telecommuting | slide 44 / **sách p154-157 (Exhibit 8-2)** | s11 |
| 22 | EIP (participative/representative/cultural) | **sách p157-159** | s11 |
| 23 | Variable pay (piece-rate/merit/bonus/profit-sharing/ESOP) | **sách p160-163** | s12 |
| 24 | Flexible benefits + employee recognition | slide 36 / **sách p163-165** | s12 |
| 25 | Implications for managers + culture-bound | slide 14,49 / sách p165 | s12 |

> Slide nghiêng applied + well-being (SCARF, Drive, Bain 30 elements, well-being — dùng làm minh họa, không phải mục lý thuyết cốt lõi). Book-adds lớn: toàn bộ chi tiết need theories, self-concordance, MBO, Pygmalion, operant/behaviorism/social-learning, 4 organizational justice, expectancy 3 relationships, job engagement, và toàn bộ Ch.8 applied. Values/Hofstede để Topic 03/11; culture-bound chỉ nêu caveat.
