# Spec: OB Topic 07 — Group Properties (Basics of Group Behavior)

> **Loại:** Soạn mới topic hoàn chỉnh (rich teaching mode), thay placeholder `topic-07`. Helper đã port ở Topic 00-06.
> **Executor: Codex.** File `content/organizational-behavior.ts`. Đặt `const topic07` sau `topic06`; array thay `placeholder(7, "topic-07", ...)` (dòng ~7471) → `topic07`.
> **Nguồn (đã đọc đủ 2 file — SÁCH > slide):**
> - **Slide `OB-Topic 7-Group properties-Dr Lan Anh`** (40 trang): định nghĩa group; vì sao gia nhập group; formal vs informal + command/task/interest/friendship; social identity theory + social exchange; 5-stage model (forming→storming→norming→performing→adjourning); 6 group properties (roles, norms, status, size, cohesiveness, diversity); diversity levels (surface/deep); tổng quan group decision making.
> - **Reading `Chapter 10 - Basics of Group Behavior` (R&J, pp.182-199):** group def; social identity theory (ingroup favoritism, ingroup/outgroup); **punctuated-equilibrium model** (Exhibit 10-1) — book KHÔNG dùng 5-stage làm chính; 6 group properties chi tiết — Property 1 Roles (role perception, role expectation, psychological contract, role conflict; Zimbardo Stanford prison), Property 2 Norms (Hawthorne Studies, conformity + **Asch study** Exhibit 10-2, reference groups, deviant workplace behavior Exhibit 10-3), Property 3 Status (**status characteristics theory** 3 nguồn; status & norms; status & group interaction; status inequity; status & group diversity), Property 4 Size (**social loafing**, Ringelmann; 5 cách ngăn), Property 5 Cohesiveness (Exhibit 10-4 cohesiveness × performance norms; 7 cách tăng), Property 6 Diversity (surface/deep, faultlines); **Group Decision Making** (groups vs individuals strengths/weaknesses; effectiveness vs efficiency; **groupthink** — ví dụ Samsung Galaxy Note 7; **groupshift/group polarization**; techniques: interacting → brainstorming/production blocking → nominal group technique Exhibit 10-5).
> **Scope:** Topic định tính, trọng tâm 6 group properties + group decision making. Book-adds nhiều (thầy ra đề từ sách): **punctuated-equilibrium model, Asch conformity study, status characteristics theory (3 nguồn), Zimbardo prison, deviant workplace behavior, toàn bộ Group Decision Making**. Ngoại lệ per-topic: nội dung TEAMS (Ch.11 "From Groups to Teams") thuộc **Topic 09** → KHÔNG nhét vào đây (Ch.10 kết ở p199, p200 mới sang Ch.11).
> **Đặc thù định tính:** KHÔNG calc/formula block. Blocks: comparison + flow + callout.
> **Quy ước:** VI + term EN; quiz stem/options EN, rationale/takeaway VI (Cơ chế→Bẫy→Khóa); 5 options A-E đúng 1.
> **Contract:** comparison `columns.length === cells.length + 1` (cột đầu = header row-label); flow `horizontal`/`tree` (tree set parent); node id dùng `_`; edge label ngắn.
> **Verify:** `npx tsc --noEmit` + `node rendercheck.mjs organizational-behavior topic-07`. KHÔNG commit.

---

## 1. bigIdea (lens Chaliyah CHỐT 2026-07-03)
```ts
bigIdea:
  "Một group không phải phép cộng của các cá nhân — nó là một HỆ THỐNG XÃ HỘI trong đó sáu thuộc tính (roles, norms, status, size, cohesiveness, diversity) định hình và ràng buộc hành vi cá nhân, thường một cách vô hình nhưng mạnh mẽ (Robbins & Judge). Cùng một cơ chế 'sức ép nhóm' vừa là ĐỘNG CƠ năng suất (chuẩn mực, gắn kết) vừa là CÁI BẪY (conformity kiểu Asch, social loafing, groupthink). Hiểu OB ở cấp nhóm = biết đọc các thuộc tính này để khai thác mặt lợi và chặn mặt hại — và biết khi nào quyết định nhóm mạnh hơn hay tệ hơn quyết định cá nhân.",
bigIdeaPillars: [
  { label: "Nhóm là hệ thống, không phải tập hợp", body: "Group = 2+ người tương tác, phụ thuộc nhau, cùng đạt mục tiêu cụ thể (R&J p182). Người ta gia nhập vì identity (social identity theory — ingroup favoritism) và lợi ích trao đổi (social exchange). Có formal/informal & 4 loại (command/task/interest/friendship). Nhóm phát triển không tuyến tính: punctuated-equilibrium model (book) — trì trệ rồi bùng nổ thay đổi ở điểm giữa." },
  { label: "Sáu thuộc tính định hình hành vi", body: "Roles (role perception/expectation, psychological contract, role conflict; Zimbardo prison); Norms (Hawthorne, conformity — Asch study, deviant workplace behavior); Status (nguồn theo status characteristics theory; status & norms/interaction/inequity); Size (social loafing — Ringelmann); Cohesiveness (Exhibit 10-4 × performance norms); Diversity (surface/deep, faultlines). Đây là 'ngữ pháp' của hành vi nhóm." },
  { label: "Sức ép nhóm: con dao hai lưỡi", body: "Cùng cơ chế conformity/cohesiveness vừa tạo lợi (năng suất, cam kết, phối hợp) vừa tạo hại (social loafing, đè nén ý kiến, groupthink). Nhà quản lý phải chủ động: 5 cách ngăn social loafing, 7 cách tăng cohesiveness gắn với chuẩn mực năng suất cao — không để nhóm 'tự trôi'." },
  { label: "Ra quyết định nhóm: mạnh hơn hay tệ hơn?", body: "Group vs individual: nhóm cho thông tin đầy đủ hơn, đa dạng hơn, chấp nhận cao hơn nhưng tốn thời gian, chịu áp lực conformity, trách nhiệm mơ hồ (effectiveness vs efficiency). Bẫy: groupthink (Galaxy Note 7) & groupshift/polarization. Kỹ thuật hóa giải: interacting → brainstorming (production blocking) → nominal group technique." },
],
```

## 2. Wiring
`const topic07: Chapter = { slug:"topic-07", order:7, title:"Topic 07 — Group Properties", bigIdea, bigIdeaPillars, learningObjectives, knowledgeMap, sections, questions, status:"ready", source }`. Array: thay `placeholder(7, ...)` → `topic07`.

## 3. learningObjectives (10)
```ts
learningObjectives: [
  "Định nghĩa group; phân biệt formal vs informal group và 4 loại: command, task, interest, friendship (R&J p182).",
  "Giải thích vì sao người ta gia nhập group qua social identity theory (ingroup favoritism, ingroup/outgroup) và social exchange.",
  "Mô tả punctuated-equilibrium model of group development (book) và liên hệ với 5-stage model forming→storming→norming→performing→adjourning (slide).",
  "Giải thích Group Property 1 — Roles: role perception, role expectation, psychological contract, role conflict (minh họa Zimbardo prison study).",
  "Giải thích Group Property 2 — Norms: Hawthorne Studies, conformity và Asch study, reference groups, deviant workplace behavior.",
  "Giải thích Group Property 3 — Status: các nguồn status theo status characteristics theory; ảnh hưởng của status lên norms, group interaction, và hệ quả của status inequity.",
  "Giải thích Group Property 4 — Size (social loafing, Ringelmann effect) và 5 cách ngăn social loafing.",
  "Giải thích Group Property 5 — Cohesiveness: quan hệ cohesiveness × performance norms (Exhibit 10-4) và 7 cách tăng cohesiveness; và Property 6 — Diversity (surface/deep, faultlines).",
  "So sánh group vs individual decision making (strengths/weaknesses; effectiveness vs efficiency) và nhận diện groupthink, groupshift/group polarization.",
  "Phân biệt 3 kỹ thuật ra quyết định nhóm: interacting groups, brainstorming (production blocking), nominal group technique.",
],
```

## 4. knowledgeMap (flow, tree, collapsible)
Root `grp` → 4 nhóm A-D. caption: "Group behavior: (A) nhóm là hệ thống (định nghĩa, loại, phát triển), (B) sáu group properties định hình hành vi, (C) sức ép nhóm hai lưỡi, (D) ra quyết định nhóm & kỹ thuật."
```ts
nodes:
{ id:"grp", label:"Group Behavior", group:"concept", sectionId:"s1", detail:"Nhóm là hệ thống xã hội, không phải phép cộng cá nhân." },
{ id:"g_sys", label:"A. Nhóm là hệ thống", group:"concept", parent:"grp", sectionId:"s1", detail:"Định nghĩa, why join, loại nhóm, phát triển." },
{ id:"g_prop", label:"B. Sáu group properties", group:"concept", parent:"grp", sectionId:"s3", detail:"Roles, norms, status, size, cohesiveness, diversity." },
{ id:"g_press", label:"C. Sức ép nhóm hai lưỡi", group:"concept", parent:"grp", sectionId:"s7", detail:"Conformity/cohesiveness: lợi vs hại." },
{ id:"g_dec", label:"D. Ra quyết định nhóm", group:"concept", parent:"grp", sectionId:"s9", detail:"Group vs individual, groupthink, techniques." },
{ id:"t_def", label:"Định nghĩa + loại + why join", group:"term", parent:"g_sys", sectionId:"s1" },
{ id:"t_dev", label:"Punctuated-equilibrium / 5-stage", group:"term", parent:"g_sys", sectionId:"s2" },
{ id:"t_role", label:"Roles (Zimbardo)", group:"term", parent:"g_prop", sectionId:"s3" },
{ id:"t_norm", label:"Norms (Asch, deviant)", group:"term", parent:"g_prop", sectionId:"s4" },
{ id:"t_status", label:"Status (characteristics theory)", group:"term", parent:"g_prop", sectionId:"s5" },
{ id:"t_size", label:"Size (social loafing)", group:"term", parent:"g_prop", sectionId:"s6" },
{ id:"t_cohes", label:"Cohesiveness + Diversity", group:"term", parent:"g_press", sectionId:"s7" },
{ id:"t_gvi", label:"Group vs individual", group:"term", parent:"g_dec", sectionId:"s9" },
{ id:"t_think", label:"Groupthink / groupshift", group:"term", parent:"g_dec", sectionId:"s10" },
{ id:"t_tech", label:"Interacting / brainstorm / NGT", group:"term", parent:"g_dec", sectionId:"s11" },
edges: grp→g_sys,g_prop,g_press,g_dec ; g_sys→t_def,t_dev ; g_prop→t_role,t_norm,t_status,t_size ; g_press→t_cohes ; g_dec→t_gvi,t_think,t_tech
```
> Edge label ngắn (vd "hệ thống", "properties", "sức ép", "quyết định", "định nghĩa", "phát triển", "role", "norm", "status", "size", "cohesive", "vs cá nhân", "bẫy", "kỹ thuật"). node group: "concept"/"term" như topic05/06.

---

## 5. Sections (11: s1-s11)

### s1 — Nhóm là gì, vì sao gia nhập, các loại nhóm
- callout `key` "Group theo Robbins & Judge (p182)": *"Two or more individuals, interacting and interdependent, who have come together to achieve particular objectives."* Nhấn: tương tác + phụ thuộc lẫn nhau + mục tiêu chung — khác một đám đông ngẫu nhiên.
- comparison "Formal vs Informal & 4 loại nhóm (R&J p182; slide)" [3 cột → 2 cells]: Loại | Bản chất | Ví dụ
  - Formal group | Do tổ chức định nghĩa qua cơ cấu chính thức; nhiệm vụ được giao, hành vi hướng org goals. | Nhóm 6 thành viên của một tổ bay.
  - Informal group | Không được cơ cấu chính thức định nghĩa, hình thành tự nhiên từ nhu cầu tiếp xúc xã hội. | Ba nhân viên khác phòng hay ăn trưa cùng nhau.
  - Command group | (formal) Gồm các cá nhân báo cáo trực tiếp cho một quản lý. | Hiệu trưởng và các giáo viên.
  - Task / Interest / Friendship group | Task: cùng hoàn thành một công việc (có thể vượt quan hệ command). Interest: cùng một mối quan tâm cụ thể. Friendship: chung đặc điểm xã hội (tuổi, đội bóng, quan điểm). | Nhóm điều tra một vụ; nhân viên đòi đổi lịch nghỉ; nhóm cùng cổ vũ một CLB.
- callout `note` "Vì sao gia nhập group (slide)": an ninh (security), địa vị (status), lòng tự trọng (self-esteem), liên kết (affiliation), quyền lực (power), đạt mục tiêu (goal achievement).
- keyTerms: group, formal group, informal group, command group, task group, interest group, friendship group.

### s2 — Vì sao gia nhập (sâu): Social identity & social exchange + phát triển nhóm
- callout `key` "Social identity theory (R&J p182-183)": người ta cảm nhận cảm xúc gắn với thành công/thất bại của nhóm mình vì lòng tự trọng gắn với hiệu quả của nhóm → sinh ra **ingroup favoritism** (nhìn ingroup tốt hơn outgroup). Identity mạnh lên khi: similarity, distinctiveness, status (thích gắn với nhóm status cao), giảm uncertainty.
- comparison "Hai động lực gắn kết với nhóm (R&J p182-183; slide)" [2 cột → 1 cell]: Cơ chế | Nội dung
  - Social identity | Ta định nghĩa bản thân qua nhóm ta thuộc về; tự hào/đau buồn theo nhóm; phân biệt ingroup–outgroup; nền tảng của thiên vị nội nhóm.
  - Social exchange | Quan hệ nhóm được duy trì khi lợi ích nhận được (được giúp, được công nhận) xứng với chi phí bỏ ra — người ta ở lại nhóm khi "cán cân trao đổi" có lợi.
- flow "Punctuated-equilibrium model (Exhibit 10-1)" layout `horizontal`: nodes `phase1` "Phase 1: định hướng, ì" → `trans` "Transition (điểm giữa): bùng nổ thay đổi" → `phase2` "Phase 2: tăng tốc thực thi" → `done` "Completed". Caption: "Book KHÔNG dùng 5-stage làm chính: nhóm có thời hạn thường ì ở Phase 1, đến ĐIỂM GIỮA (halfway) mới bùng nổ thay đổi rồi tăng tốc ở Phase 2 — dòng chảy 'trì trệ → chuyển pha → tăng tốc'."
- comparison "5-stage model (slide) — để đối chiếu" [2 cột → 1 cell]: Giai đoạn | Nội dung
  - Forming | Bất định về mục đích, cơ cấu, lãnh đạo; thăm dò.
  - Storming | Xung đột nội bộ về ai kiểm soát, ai làm gì.
  - Norming | Hình thành quan hệ gần gũi, cohesiveness và chuẩn mực chung.
  - Performing | Cơ cấu ổn định, năng lượng dồn vào thực hiện nhiệm vụ.
  - Adjourning | (nhóm tạm thời) Kết thúc, chuẩn bị giải tán.
- callout `note` "Đừng hiểu 5-stage là luôn tuyến tính": nhiều nhóm không đi tuần tự; với nhóm có deadline, punctuated-equilibrium mô tả sát hơn thực tế.
- keyTerms: social identity theory, ingroup favoritism, social exchange, punctuated-equilibrium model, five-stage group-development model.

### s3 — Group Property 1: Roles
- callout `key` "Role (R&J p184)": *"A set of expected behavior patterns attributed to someone occupying a given position in a social unit."* Mỗi người đóng nhiều vai và điều chỉnh vai theo nhóm đang tham gia.
- comparison "Các khái niệm về Role (R&J p184-186)" [2 cột → 1 cell]: Khái niệm | Nội dung
  - Role perception | Cách một cá nhân hiểu mình PHẢI hành xử thế nào trong một tình huống; học qua quan sát (mentor, phim ảnh, sách).
  - Role expectation | Cách người KHÁC tin rằng bạn nên hành xử trong một vai trò cho trước.
  - Psychological contract | "Hợp đồng" bất thành văn về kỳ vọng hai chiều giữa nhân viên và người sử dụng lao động; vi phạm → giảm hài lòng, cam kết, hiệu suất.
  - Role conflict | Khi tuân theo một tập kỳ vọng vai trò lại khó tuân theo tập kỳ vọng khác; gây căng thẳng, bất mãn.
- callout `note` "Zimbardo Stanford prison study (R&J p184-185)": sinh viên bình thường được phân ngẫu nhiên vai "guard"/"prisoner" nhanh chóng hành xử theo vai đến mức thí nghiệm phải dừng sớm — minh chứng vai trò và bối cảnh có thể lấn át tính cách cá nhân.
- keyTerms: role, role perception, role expectation, psychological contract, role conflict.

### s4 — Group Property 2: Norms
- callout `key` "Norms (R&J p186)": *"Acceptable standards of behavior within a group that are shared by the group's members."* Chuẩn mực nói cho thành viên biết nên/không nên làm gì trong những hoàn cảnh nhất định.
- comparison "Norms — các khía cạnh chính (R&J p186-189)" [2 cột → 1 cell]: Khía cạnh | Nội dung
  - Hawthorne Studies | Thí nghiệm Western Electric (Mayo): hành vi và cảm xúc nhóm gắn chặt nhau; nhóm tự đặt chuẩn sản lượng và ép các thành viên tuân theo (không quá cao — "rate buster", không quá thấp — "chiseler"); áp lực nhóm mạnh hơn động cơ tiền bạc.
  - Conformity | Điều chỉnh hành vi để khớp chuẩn của nhóm mà mình muốn thuộc về (reference group — nhóm mà cá nhân coi trọng và muốn được chấp nhận).
  - Deviant workplace behavior | Hành vi cố ý vi phạm chuẩn mực tổ chức, đe dọa lợi ích tổ chức/thành viên (Exhibit 10-3: production, property, political, personal aggression); dễ lan trong nhóm.
- callout `key` "Asch conformity study (Exhibit 10-2) (R&J p187)": người tham gia so độ dài đường thẳng; khi các "đồng phạm" cố tình chọn sai đồng loạt, khoảng **1/3** số người ngả theo đáp án sai của nhóm dù mắt thấy rõ là sai — sức ép tuân thủ có thể lấn át bằng chứng hiển nhiên.
- keyTerms: norms, reference groups, conformity, deviant workplace behavior.

### s5 — Group Property 3: Status
- callout `key` "Status (R&J p189)": *"A socially defined position or rank given to groups or group members by others."* Status thấm vào mọi xã hội và ảnh hưởng mạnh đến hành vi.
- comparison "Nguồn của status — Status characteristics theory (R&J p189-190)" [2 cột → 1 cell]: Nguồn | Nội dung
  - Power over others | Người kiểm soát nguồn lực/kết quả của nhóm thường được nhìn nhận status cao.
  - Ability to contribute | Người đóng góp nhiều vào mục tiêu nhóm có status cao (thành tích, kỹ năng).
  - Personal characteristics | Đặc điểm cá nhân được nhóm đánh giá cao (ngoại hình, trí thông minh, tiền bạc, personality) tạo status.
- comparison "Status ảnh hưởng đến nhóm thế nào (R&J p190-191)" [2 cột → 1 cell]: Ảnh hưởng | Nội dung
  - Status & norms | Người status cao thường được tự do lệch chuẩn hơn (idiosyncrasy credit) và ít lo bị nhóm phạt.
  - Status & group interaction | Người status cao nói nhiều, quyết đoán hơn; chênh lệch status lớn có thể bóp nghẹt ý tưởng của thành viên status thấp → hại chất lượng thảo luận.
  - Status inequity | Khi thành viên cảm nhận status không tương xứng đóng góp → mất cân bằng, sinh bất mãn và hành vi điều chỉnh (giảm nỗ lực, xung đột).
- callout `note` "Status & group diversity (R&J p191)": nhóm đa dạng về status/văn hóa có thể khiến việc thiết lập thứ bậc status khó khăn hơn, ảnh hưởng cách nhóm phối hợp.
- keyTerms: status, status characteristics theory, status inequity.

### s6 — Group Property 4: Size (Social loafing)
- callout `key` "Size & social loafing (R&J p191-192)": kích thước nhóm ảnh hưởng hành vi. Nhóm nhỏ (~7) hoàn thành nhiệm vụ nhanh hơn; nhóm lớn (~12+) tốt hơn cho giải quyết vấn đề/thu thập đầu vào đa dạng. **Social loafing** = xu hướng cá nhân bỏ ít công sức hơn khi làm việc tập thể so với khi làm một mình.
- comparison "Social loafing — cơ chế & bối cảnh (R&J p191-192)" [2 cột → 1 cell]: Khía cạnh | Nội dung
  - Ringelmann effect | Ringelmann phát hiện năng suất theo đầu người GIẢM khi nhóm to ra (kéo dây): tổng lực nhóm < tổng lực từng cá nhân cộng lại.
  - Nguyên nhân | (1) Tin rằng người khác không cố hết sức nên mình cũng giảm để khỏi "thiệt"; (2) trách nhiệm bị phân tán (dispersion of responsibility) — đóng góp cá nhân khó đo.
  - Lưu ý văn hóa | Social loafing rõ ở nền văn hóa cá nhân chủ nghĩa (phương Tây); ở nền tập thể (collectivist) có thể ít hơn hoặc ngược lại.
- callout `note` "5 cách ngăn social loafing (R&J p192)": (1) đặt mục tiêu nhóm rõ ràng để có mục đích chung; (2) tăng cạnh tranh giữa các nhóm (hướng vào kết quả chung); (3) dùng đánh giá đồng cấp (peer evaluation); (4) chọn thành viên có động lực cao và thích làm nhóm; (5) gắn phần thưởng nhóm với đóng góp riêng của từng cá nhân (đo được đóng góp).
- keyTerms: social loafing, Ringelmann effect.

### s7 — Group Property 5: Cohesiveness & Property 6: Diversity
- callout `key` "Cohesiveness (R&J p192-193)": mức độ thành viên bị hút vào nhau và muốn ở lại nhóm. Cohesiveness quan hệ tới năng suất NHƯNG phụ thuộc **performance norms** của nhóm.
- comparison "Cohesiveness × Performance norms (Exhibit 10-4) (R&J p193)" [3 cột → 2 cells]: Điều kiện | Chuẩn năng suất CAO | Chuẩn năng suất THẤP
  - Cohesiveness cao | Năng suất cao nhất — nhóm gắn kết đẩy nhau đạt chuẩn cao. | Năng suất thấp nhất — gắn kết củng cố chuẩn thấp.
  - Cohesiveness thấp | Năng suất trung bình–cao (kém đồng đều). | Năng suất thấp đến trung bình.
- callout `note` "7 cách tăng cohesiveness (R&J p193)": (1) làm nhóm nhỏ lại; (2) khuyến khích đồng thuận về mục tiêu nhóm; (3) tăng thời gian thành viên ở bên nhau; (4) nâng status nhóm và độ khó để gia nhập; (5) kích thích cạnh tranh với nhóm khác; (6) thưởng cả nhóm thay vì cá nhân; (7) cô lập nhóm về mặt vật lý. **Chỉ nên tăng cohesiveness khi performance norms cao.**
- comparison "Diversity của nhóm (R&J p193-194; slide)" [2 cột → 1 cell]: Khía cạnh | Nội dung
  - Surface-level vs deep-level | Surface: đặc điểm dễ thấy (tuổi, giới, chủng tộc). Deep: giá trị, tính cách, thái độ — lộ ra theo thời gian.
  - Faultlines | "Đường nứt" chia nhóm thành các nhóm con theo đặc điểm chung (vd cùng tuổi + cùng phòng ban) → có thể sinh xung đột phe phái.
  - Tác động | Diversity thường TĂNG xung đột và giảm gắn kết ở giai đoạn đầu, nhưng nếu vượt qua được thì đem lại đa dạng góc nhìn, cải thiện chất lượng quyết định về lâu dài.
- keyTerms: cohesiveness, performance norms, surface-level diversity, deep-level diversity, faultlines.

### s8 — Chốt 6 properties (tổng hợp)
- comparison "Sáu group properties — bảng tra nhanh (R&J Ch.10)" [3 cột → 2 cells]: Property | Định hình hành vi thế nào | Điểm cần nhớ
  - 1. Roles | Vai trò quy định hành vi kỳ vọng theo vị trí. | Role perception/expectation, psychological contract, role conflict; Zimbardo.
  - 2. Norms | Chuẩn mực chung ép tuân thủ. | Hawthorne, conformity (Asch ~1/3), deviant workplace behavior.
  - 3. Status | Thứ bậc xã hội định ai được nghe. | Status characteristics theory; status inequity bóp méo thảo luận.
  - 4. Size | Số lượng đổi hiệu quả lấy đầu vào. | Social loafing (Ringelmann); nhỏ nhanh, lớn nhiều ý.
  - 5. Cohesiveness | Gắn kết khuếch đại chuẩn mực (tốt hoặc xấu). | Chỉ tốt cho năng suất khi performance norms cao (Exhibit 10-4).
  - 6. Diversity | Đa dạng tăng xung đột sớm, tăng chất lượng muộn. | Surface vs deep; faultlines.
- callout `key` "Thông điệp Pillar 2": hành vi cá nhân trong nhóm được LỌC qua sáu thuộc tính này — muốn thay đổi hành vi nhóm, chỉnh thuộc tính (giao vai rõ, đặt chuẩn cao, cân bằng status, giữ nhóm đủ nhỏ, gắn kết quanh chuẩn cao, quản lý faultlines) chứ không chỉ hô hào cá nhân.
- keyTerms: (không thêm mới — section tổng hợp).

### s9 — Group vs Individual decision making
- callout `key` "Nhóm quyết định — mạnh & yếu (R&J p194-196)": nhóm tạo thông tin và tri thức đầy đủ hơn nhưng chậm hơn và chịu áp lực xã hội. Câu hỏi thực dụng: **effectiveness** (chất lượng) hay **efficiency** (tốc độ/chi phí)?
- comparison "Group vs Individual decision making (R&J p194-195)" [3 cột → 2 cells]: Tiêu chí | Ưu của nhóm | Nhược của nhóm
  - Thông tin | Nhiều thông tin & tri thức đa dạng hơn cá nhân đơn lẻ. | Tốn nhiều thời gian hơn để đạt kết luận.
  - Chất lượng & chấp nhận | Đa dạng góc nhìn → giải pháp đa dạng, độ chính xác cao hơn; tăng chấp nhận & cam kết với quyết định. | Áp lực tuân thủ (conformity) đè nén ý kiến thiểu số.
  - Trách nhiệm | (thường) Tính chính danh cao hơn quyết định độc đoán. | Có thể bị một số ít chi phối; trách nhiệm mơ hồ (ambiguous responsibility).
- comparison "Effectiveness vs Efficiency (R&J p195-196)" [2 cột → 1 cell]: Chiều đo | Nội dung
  - Effectiveness (chất lượng) | Nhóm thường cho quyết định chính xác/sáng tạo hơn cá nhân TRUNG BÌNH, nhưng hiếm khi vượt cá nhân GIỎI nhất.
  - Efficiency (hiệu suất) | Cá nhân gần như luôn nhanh & rẻ hơn: nhóm ngốn giờ họp, phối hợp → chọn nhóm hay cá nhân là bài toán đánh đổi.
- keyTerms: (nhấn effectiveness, efficiency — giải thích trong callout/comparison).

### s10 — Groupthink & Groupshift/Group Polarization
- callout `key` "Groupthink (R&J p196-197)": hiện tượng nhóm coi trọng đồng thuận đến mức chuẩn mực đồng thuận lấn át việc đánh giá thực tế các phương án; thành viên tự kiểm duyệt, tạo ảo tưởng nhất trí, gây áp lực lên người phản biện → quyết định tồi. Ví dụ **Samsung Galaxy Note 7** (áp lực đồng thuận bỏ qua cảnh báo an toàn).
- comparison "Groupthink vs Groupshift (Group polarization) (R&J p196-198)" [2 cột → 1 cell]: Hiện tượng | Nội dung
  - Groupthink | Áp lực tuân thủ khiến nhóm không đánh giá phản biện các phương án bất thường/thiểu số; triệu chứng: hợp lý hóa, tự kiểm duyệt, ảo tưởng nhất trí, canh giữ "mindguard".
  - Groupshift / group polarization | Sau thảo luận, lập trường của nhóm dịch về phía CỰC HƠN so với vị trí ban đầu của các thành viên (thường về hướng đã nghiêng sẵn) — có thể là "risky shift" hoặc thận trọng hơn.
- callout `note` "Cách giảm groupthink (R&J p197)": giữ nhóm nhỏ; lãnh đạo không áp đặt quan điểm sớm; cử người phản biện (devil's advocate); khuyến khích nêu nghi ngờ; rà soát lại quyết định sau khi đã sơ bộ đồng thuận.
- keyTerms: groupthink, groupshift, group polarization.

### s11 — Kỹ thuật ra quyết định nhóm
- comparison "3 kỹ thuật ra quyết định nhóm (Exhibit 10-5) (R&J p198-199)" [4 cột → 3 cells]: Kỹ thuật | Cách làm | Mạnh | Yếu
  - Interacting groups | Thành viên gặp mặt trực tiếp, tương tác bằng lời & phi ngôn ngữ. | Quen thuộc, xây dựng gắn kết nhóm. | Dễ tạo áp lực tuân thủ, kiểm duyệt ý kiến (nguồn gốc groupthink).
  - Brainstorming | Ngồi quanh bàn, nêu càng nhiều ý càng tốt, KHÔNG phê phán trong lúc nêu. | Vượt sức ép tuân thủ, kích thích ý tưởng. | Kém hiệu suất — "production blocking" (mọi người nói cùng lúc chặn dòng suy nghĩ); cá nhân làm riêng lại ra nhiều ý hơn.
  - Nominal group technique (NGT) | Hạn chế thảo luận: mỗi người tự viết ý → lần lượt trình bày → nhóm thảo luận đánh giá → xếp hạng độc lập, điểm cao nhất thắng. | Cho phép họp chính thức mà KHÔNG bó buộc tư duy độc lập; thường vượt brainstorming. | Tốn công tổ chức; giới hạn một vấn đề mỗi lần.
- callout `key` "Chọn kỹ thuật theo tiêu chí (Exhibit 10-5)": interacting tốt cho cam kết với giải pháp; brainstorming phát triển gắn kết nhóm; NGT là cách rẻ để tạo nhiều ý tưởng. Không có kỹ thuật "tốt nhất" tuyệt đối — chọn theo mục tiêu và đánh đổi chi phí–lợi ích.
- callout `note` "Khép lại Topic 07": sáu thuộc tính + hiểu biết về ra quyết định nhóm cho ta bộ công cụ đọc và can thiệp hành vi nhóm. Chương tiếp theo (Ch.11) sẽ chuyển từ GROUP sang TEAM — thuộc Topic 09.
- keyTerms: interacting groups, brainstorming, nominal group technique, production blocking.

---

## 6. Questions (20 câu — q01…q20)
> Format: stem/options EN; đúng 1 trong 5 (A-E); mỗi option có rationale VI dạng "Cơ chế:… Bẫy:… Khóa:…" (option đúng ghi vì sao đúng + khóa nhận diện; option sai ghi vì sao sai). takeaway VI 1 câu. Phủ đều 11 sections & book-adds.

Phân bổ (mỗi câu ghi vùng kiến thức, Codex tự viết stem/options theo chuẩn):
1. **q01 — Định nghĩa group** (s1): chọn định nghĩa đúng "2+ interacting, interdependent, particular objectives"; bẫy: nhầm với đám đông/aggregate.
2. **q02 — Loại nhóm** (s1): phân biệt command vs task vs interest vs friendship qua tình huống.
3. **q03 — Social identity theory** (s2): ingroup favoritism / vì sao gắn cảm xúc với nhóm; bẫy nhầm social exchange.
4. **q04 — Punctuated-equilibrium** (s2): nhận diện "ì → bùng nổ ở điểm giữa → tăng tốc"; bẫy chọn 5-stage tuyến tính.
5. **q05 — 5-stage model** (s2): thứ tự forming→storming→norming→performing→adjourning; bẫy đảo storming/norming.
6. **q06 — Role perception vs expectation** (s3): phân biệt "mình hiểu vai" vs "người khác kỳ vọng".
7. **q07 — Psychological contract** (s3): nhận diện hợp đồng tâm lý bị vi phạm.
8. **q08 — Zimbardo prison** (s3): bài học vai trò/bối cảnh lấn át cá nhân.
9. **q09 — Hawthorne / norms** (s4): nhóm tự đặt chuẩn sản lượng, ép "rate buster"/"chiseler".
10. **q10 — Asch study** (s4): kết quả ~1/3 conform theo đáp án sai; ý nghĩa conformity.
11. **q11 — Deviant workplace behavior** (s4): nhận diện loại (production/property/political/personal aggression).
12. **q12 — Status characteristics theory** (s5): 3 nguồn status (power, contribution, personal characteristics).
13. **q13 — Status & interaction/inequity** (s5): status cao nói nhiều → bóp méo thảo luận; hệ quả inequity.
14. **q14 — Social loafing** (s6): định nghĩa + Ringelmann; bẫy nhầm free rider bối cảnh khác.
15. **q15 — Ngăn social loafing** (s6): chọn biện pháp ĐÚNG (gắn reward với đóng góp cá nhân / peer evaluation); bẫy "tăng size".
16. **q16 — Cohesiveness × performance norms** (s7): năng suất cao nhất = cohesiveness cao + norms cao; bẫy "cohesiveness luôn tốt".
17. **q17 — Diversity/faultlines** (s7): tác động 2 pha (xung đột sớm, chất lượng muộn); faultlines.
18. **q18 — Group vs individual** (s9): ưu (thông tin, chấp nhận) vs nhược (thời gian, conformity, trách nhiệm mơ hồ); effectiveness vs efficiency.
19. **q19 — Groupthink vs groupshift** (s10): phân biệt hai hiện tượng; nhận diện groupthink qua triệu chứng.
20. **q20 — Kỹ thuật quyết định** (s11): NGT vs brainstorming (production blocking) vs interacting — chọn mô tả đúng NGT.

takeaway mẫu (Codex viết đủ 20, VI): vd q10 "Asch cho thấy khoảng 1/3 người sẵn sàng phủ nhận bằng chứng của chính mắt mình để hòa theo nhóm — conformity là sức ép có thật, không phải chuyện của người yếu đuối."

---

## 7. source
```ts
source: "Robbins & Judge, Organizational Behavior — Chapter 10 'Basics of Group Behavior' (pp.182-199); Slide 'OB-Topic 7-Group properties' (Dr Lan Anh, IM2017, HCMUT).",
```

---

## 8. Coverage matrix (đối chiếu "không sót kiến thức") — 24 mục
Codex đảm bảo mỗi mục xuất hiện trong section/quiz tương ứng:
1. Định nghĩa group (2+ interacting/interdependent/objectives) — s1 ✓ q01
2. Formal vs informal — s1 ✓ q02
3. Command / task / interest / friendship groups — s1 ✓ q02
4. Vì sao gia nhập (security/status/self-esteem/affiliation/power/goal) — s1 (slide)
5. Social identity theory + ingroup favoritism — s2 ✓ q03
6. Social exchange — s2 ✓ q03(bẫy)
7. Punctuated-equilibrium model (Exhibit 10-1) **[book-add]** — s2 ✓ q04
8. 5-stage model (slide) — s2 ✓ q05
9. Role + role perception + role expectation — s3 ✓ q06
10. Psychological contract — s3 ✓ q07
11. Role conflict — s3
12. Zimbardo prison study **[book-add]** — s3 ✓ q08
13. Norms + Hawthorne Studies — s4 ✓ q09
14. Conformity + reference groups — s4
15. Asch study (Exhibit 10-2, ~1/3) **[book-add]** — s4 ✓ q10
16. Deviant workplace behavior (Exhibit 10-3) **[book-add]** — s4 ✓ q11
17. Status + status characteristics theory (3 nguồn) **[book-add]** — s5 ✓ q12
18. Status & norms / interaction / inequity — s5 ✓ q13
19. Size + social loafing + Ringelmann — s6 ✓ q14
20. 5 cách ngăn social loafing — s6 ✓ q15
21. Cohesiveness × performance norms (Exhibit 10-4) + 7 cách tăng — s7 ✓ q16
22. Diversity (surface/deep, faultlines) — s7 ✓ q17
23. Group vs individual + effectiveness/efficiency; groupthink (Note 7) + groupshift/polarization **[book-add]** — s9,s10 ✓ q18,q19
24. Techniques: interacting / brainstorming (production blocking) / NGT (Exhibit 10-5) **[book-add]** — s11 ✓ q20

## 9. Cấu trúc dự kiến (để verify Layer B)
- sections: **11** (s1-s11)
- questions: **20**
- learningObjectives: **10**
- comparison blocks: **~15** (s1:1, s2:2, s3:1, s4:1, s5:2, s6:1, s7:2, s8:1, s9:2, s11:1)
- flow blocks: **1** trong section (s2 punctuated-equilibrium horizontal) + knowledgeMap (tree, riêng)
- callout blocks: **~16**
- calc/formula blocks: **0** (định tính)
- status: "ready"
