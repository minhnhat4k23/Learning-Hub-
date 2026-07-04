# Spec: OB Topic 12 — Organizational Change and Work Stress

> **Loại:** Soạn mới topic hoàn chỉnh (rich teaching mode), thay placeholder `topic-12` (TOPIC CUỐI). Helper đã port ở Topic 00-11.
> **Executor: Codex.** File `content/organizational-behavior.ts`. Đặt `const topic12` sau `topic11`; array thay `placeholder(12, "topic-12", ...)` (dòng ~12326) → `topic12`.
> **Nguồn (đã đọc đủ 2 file — SÁCH > slide):**
> - **Reading `Chapter 17 - Organizational Change` (Robbins & Judge, pp.315-335):** 7 LO. **Forces for Change** (6 dimensions: changing nature of workforce, technology, economic shocks, competition, social trends, world politics); reactionary vs **planned change** (change agents). **Resistance to Change (Exhibit 17-1)**: Individual sources (habit, security, economic factors, fear of the unknown, selective information processing) + Organizational sources (structural inertia, limited focus of change, group inertia, threat to expertise, threat to established power relationships). **Overcoming Resistance — 8 tactics** (communication, participation, building support & commitment, developing positive relationships, implementing changes fairly, manipulation & cooptation, selecting people who accept change, coercion) + politics of change. **Approaches to Managing Change (4)**: **Lewin's 3-Step** (unfreezing → movement → refreezing; driving forces vs restraining forces — Exhibit 17-2/17-3), **Kotter's 8-Step Plan** (Exhibit 17-4), **Action research** (diagnosis → analysis → feedback → action → evaluation), **Organizational Development (OD)** (sensitivity training, survey feedback, process consultation, team building, intergroup development, appreciative inquiry AI: discovery/dreaming/design/destiny). **Creating a Culture for Change**: managing paradox (paradox theory), stimulating an innovative culture, creating a learning organization. **STRESS AT WORK — What Is Stress?** (dynamic condition, uncertain & important; positive purpose too); **Stressors: challenge vs hindrance**; **Demands–Resources model**. **Potential Sources of Stress**: environmental factors (economic/political/technological), organizational factors (task demands, role demands — role conflict/overload/ambiguity, interpersonal demands), personal factors (family, personal economic); **stressors are ADDITIVE**. Individual differences (perception, job experience, social support, self-efficacy/personality) + cultural differences. **Consequences (3 loại)**: physiological, psychological, behavioral symptoms. **Managing Stress**: individual approaches (time management, physical exercise, relaxation, social support) + organizational approaches (selection & placement, training, realistic goal-setting, job redesign, employee involvement, organizational communication, sabbaticals, wellness programs).
> - **Slide `OB-Topic 12-Organizational Change and Workstress-Dr Lan Anh`** (34 trang): "All Management Is Change Management" (Schaffer HBR 2017); attitude towards change (positive vs resistant); **Lewin's Three-Step Process**; change grief; **Resistance to change** ("More Pain, Less Change"); reasons for resistance; "Who Moved My Cheese?"; **Maurer 3 Levels of Resistance** (I don't get it → I don't like it → I don't like you); Overcoming Resistance to Change; **8 Change Readiness Factors** (Spectrum: confidence, optimism, tolerance for ambiguity, resourcefulness, passion, resilience, flexibility, willingness to take risks); **Advices: START FROM SELF** (before requiring someone to change, are you changing yourself? — nối Topic 10 self-leadership); comfort/fear/learning/growth zone; **STRESS definitions** (Cooper 2002; Lazarus & Folkman 1984); OB view: stress at work model; **Techno-stress** (techno-burden/insecurity/complexity/addiction/intrusion); **inverted-U curve** stress↔performance (R&J 2015); eustress vs distress (fatigue/exhaustion/burnout); Holistic Well-Being (MetLife: mental/financial/social/physical); **Solution D > CS = SR** (Thornton 2023: demands > coping skills = stress reaction → reduce demands / increase coping skills / monitor reactions).
> **Scope:** Topic định tính, 2 nửa (change + stress) gắn nhau (change gây stress). SÁCH lo trục học thuật (forces, resistance sources, 4 approaches Lewin/Kotter/action research/OD, stress model challenge-hindrance/demands-resources/sources/consequences/managing). Slide bổ sung **Maurer 3 levels, change readiness, start from self, inverted-U, technostress, D>CS=SR, holistic well-being** — đánh dấu source slide. Ngoại lệ per-topic: culture-change đã chạm ở Topic 11 (leadership challenge) → ở đây khai thác *cách quản trị change*; self-leadership ở Topic 10 → chỉ nhắc ở "start from self".
> **Đặc thù định tính:** KHÔNG calc/formula block (D>CS=SR là công thức KHÁI NIỆM, viết bằng callout/prose, KHÔNG dùng calcBlock/formulaBlock). Blocks: comparison + flow + callout.
> **Quy ước:** VI + term EN; quiz stem/options EN, rationale/takeaway VI (Cơ chế→Bẫy→Khóa); 5 options A-E đúng 1.
> **Contract:** comparison `columns.length === cells.length + 1` (cột đầu = header row-label); flow `horizontal`/`tree` (tree set parent); node id dùng `_`; edge label ngắn.
> **Verify:** `npx tsc --noEmit` + `node rendercheck.mjs organizational-behavior topic-12` (do Claude chạy). KHÔNG commit.

---

## 1. bigIdea (lens Chaliyah CHỐT 2026-07-04)
```ts
bigIdea:
  "Thay đổi và stress là HAI THỰC TẠI KHÔNG THỂ TRÁNH của đời sống tổ chức — và chúng gắn nhau: thay đổi gây stress. 'All management is change management.' Con người KHÁNG CỰ thay đổi là điều TỰ NHIÊN (thói quen, sợ bất định, đe dọa lợi ích), nên lãnh đạo thay đổi = vừa TĂNG lực đẩy vừa GIẢM lực cản (Lewin), qua quy trình bài bản (Kotter, action research, OD). Mặt còn lại là stress: bản thân stress không xấu — có challenge stressor (thúc đẩy) & hindrance stressor (cản trở), quan hệ stress–hiệu suất là chữ U ngược. Quản trị tốt biến distress thành eustress — biến áp lực thành bản lĩnh, và bắt đầu từ chính mình.",
bigIdeaPillars: [
  { label: "Vì sao thay đổi & vì sao kháng cự", body: "Forces for change — 6 dimensions (R&J p316): changing nature of workforce, technology, economic shocks, competition, social trends, world politics; 'change or die'. Change có thể reactionary hoặc PLANNED (qua change agents). Resistance là TỰ NHIÊN (Exhibit 17-1): individual sources (habit, security, economic factors, fear of the unknown, selective information processing) + organizational sources (structural inertia, limited focus of change, group inertia, threat to expertise, threat to established power). Maurer 3 levels (slide): I don't get it → I don't like it → I don't like you." },
  { label: "Lãnh đạo thay đổi: giảm lực cản, theo quy trình", body: "Overcoming resistance — 8 tactics (R&J p317): communication, participation, building support & commitment, developing positive relationships, implementing changes fairly, manipulation & cooptation, selecting people who accept change, coercion. 4 approaches to managing change: Lewin 3-step (unfreezing → movement → refreezing; tăng driving forces / giảm restraining forces), Kotter 8-step, action research (diagnosis→analysis→feedback→action→evaluation), OD (team building, intergroup development, appreciative inquiry). Creating a culture for change: managing paradox, innovative culture, learning organization." },
  { label: "Stress là con dao hai lưỡi", body: "Stress = dynamic condition khi cá nhân đối mặt opportunity/demand/resource mà kết quả vừa uncertain vừa important (R&J p327). Không phải luôn xấu: challenge stressors (workload, deadline — thúc đẩy) khác hindrance stressors (red tape, office politics — cản trở). Demands–resources model. Potential sources: environmental (kinh tế/chính trị/công nghệ), organizational (task/role/interpersonal demands — role conflict/overload/ambiguity), personal (family, economic) — stressors ADDITIVE. Quan hệ stress–performance là INVERTED-U (slide): quá ít = chán, tối ưu = đỉnh, quá nhiều = kiệt sức. Consequences: physiological, psychological, behavioral." },
  { label: "Quản trị stress & thay đổi — bắt đầu từ chính mình", body: "Individual approaches (R&J p332): time-management, physical exercise, relaxation techniques, social support networks. Organizational approaches: selection & placement, training, realistic goal-setting, redesign of jobs, employee involvement, organizational communication, sabbaticals, wellness programs. Slide D > CS = SR (Thornton): khi Demands vượt Coping Skills → Stress Reaction ⇒ 3 cách: REDUCE demands / INCREASE coping skills / MONITOR reactions. 'Start from self' — biến áp lực thành bản lĩnh (eustress)." },
],
```

## 2. Wiring
`const topic12: Chapter = { slug:"topic-12", order:12, title:"Topic 12 — Organizational Change and Work Stress", bigIdea, bigIdeaPillars, learningObjectives, knowledgeMap, sections, questions, status:"ready", source }`. Array: thay `placeholder(12, ...)` → `topic12`.

## 3. learningObjectives (11)
```ts
learningObjectives: [
  "Phân biệt forces for change (6 dimensions) và reactionary vs planned change.",
  "Nhận diện individual sources và organizational sources của resistance to change (Exhibit 17-1).",
  "Trình bày 8 tactics để overcome resistance to change.",
  "Giải thích Lewin's 3-step model (unfreezing/movement/refreezing) và driving vs restraining forces.",
  "Mô tả Kotter's 8-step plan và action research như các approach quản trị thay đổi.",
  "Giải thích các OD interventions và 3 cách creating a culture for change.",
  "Định nghĩa stress và phân biệt challenge vs hindrance stressors (demands–resources model).",
  "Phân loại potential sources of stress: environmental, organizational, personal (và tính additive).",
  "Giải thích quan hệ inverted-U giữa stress và performance (eustress vs distress).",
  "Nhận diện consequences của stress: physiological, psychological, behavioral symptoms.",
  "So sánh individual approaches và organizational approaches để managing stress (gồm D>CS=SR).",
],
```

## 4. knowledgeMap (flow, tree, collapsible)
Root `oc` → 4 nhóm A-D (bám 4 pillars). caption: "Change & Stress: (A) vì sao thay đổi & kháng cự, (B) lãnh đạo thay đổi (approaches), (C) stress con dao hai lưỡi, (D) quản trị stress & thay đổi từ chính mình."
```ts
nodes:
{ id:"oc", label:"Change & Work Stress", group:"concept", sectionId:"s1", detail:"Thay đổi & stress là 2 thực tại gắn nhau; thay đổi gây stress." },
{ id:"g_force", label:"A. Thay đổi & kháng cự", group:"concept", parent:"oc", sectionId:"s1", detail:"Forces for change; resistance là tự nhiên." },
{ id:"g_lead", label:"B. Lãnh đạo thay đổi", group:"concept", parent:"oc", sectionId:"s3", detail:"8 tactics; Lewin/Kotter/action research/OD." },
{ id:"g_stress", label:"C. Stress hai lưỡi", group:"concept", parent:"oc", sectionId:"s7", detail:"Challenge/hindrance; sources; inverted-U; consequences." },
{ id:"g_manage", label:"D. Quản trị từ chính mình", group:"concept", parent:"oc", sectionId:"s10", detail:"Individual & organizational approaches; D>CS=SR." },
{ id:"t_forces", label:"Forces for change (6)", group:"term", parent:"g_force", sectionId:"s1" },
{ id:"t_resist", label:"Resistance sources", group:"term", parent:"g_force", sectionId:"s2" },
{ id:"t_over", label:"Overcoming — 8 tactics", group:"term", parent:"g_lead", sectionId:"s3" },
{ id:"t_lewin", label:"Lewin 3-step", group:"term", parent:"g_lead", sectionId:"s4" },
{ id:"t_kotter", label:"Kotter 8-step + action research", group:"term", parent:"g_lead", sectionId:"s5" },
{ id:"t_od", label:"OD + culture for change", group:"term", parent:"g_lead", sectionId:"s6" },
{ id:"t_what", label:"What is stress (challenge/hindrance)", group:"term", parent:"g_stress", sectionId:"s7" },
{ id:"t_src", label:"Sources of stress", group:"term", parent:"g_stress", sectionId:"s8" },
{ id:"t_conseq", label:"Inverted-U + consequences", group:"term", parent:"g_stress", sectionId:"s9" },
{ id:"t_ind", label:"Individual + org approaches", group:"term", parent:"g_manage", sectionId:"s10" },
{ id:"t_self", label:"D>CS=SR + start from self", group:"term", parent:"g_manage", sectionId:"s11" },
edges: oc→g_force,g_lead,g_stress,g_manage ; g_force→t_forces,t_resist ; g_lead→t_over,t_lewin,t_kotter,t_od ; g_stress→t_what,t_src,t_conseq ; g_manage→t_ind,t_self
```
> Edge label ngắn (vd "thay đổi", "lãnh đạo", "stress", "quản trị", "forces", "resistance", "8 tactics", "lewin", "kotter", "od", "what", "sources", "consequences", "approaches", "self"). node group: "concept"/"term".

---

## 5. Sections (11: s1-s11)

### s1 — Forces for change + planned change
- callout `key` "'Change or die' (R&J p316)": thay đổi là hằng số. Change có thể **reactionary** (phản ứng bị động) hoặc **planned** (chủ động, có mục tiêu) — planned change do **change agents** dẫn dắt để cải thiện năng lực thích ứng & thay đổi hành vi nhân viên.
- comparison "6 Forces for Change (R&J p316)" [2 cột → 1 cell]: Lực | Nội dung
  - Changing nature of workforce | Đa văn hóa, thay đổi nhân khẩu, nhập cư, outsourcing.
  - Technology | Công nghệ liên tục thay đổi công việc & tổ chức (tự động hóa, AI).
  - Economic shocks | Cú sốc kinh tế (suy thoái, biến động thị trường tài chính).
  - Competition | Cạnh tranh toàn cầu → cần nhanh, linh hoạt, ra sản phẩm mới.
  - Social trends | Xu hướng xã hội thay đổi (tiêu dùng, mạng xã hội, lối sống).
  - World politics | Biến động chính trị thế giới (chiến tranh, chính sách, đại dịch).
- callout `note` "All management is change management (slide 2)": Schaffer (HBR 2017) — mọi mục tiêu quản trị (tăng doanh số, M&A, chính sách mới, giảm chi phí...) đều đòi thay đổi hành vi → quản trị chính là quản trị thay đổi.
- keyTerms: change, planned change, change agents.

### s2 — Resistance to change: sources (individual + organizational)
- callout `key` "Kháng cự là TỰ NHIÊN (Exhibit 17-1, R&J p318)": resistance = hành vi nhằm bôi xấu, trì hoãn, ngăn cản việc triển khai thay đổi. Không phải lúc nào cũng xấu — nó tạo ổn định & buộc thảo luận kỹ. Slide (Maurer 3 levels): "I don't get it" (không hiểu) → "I don't like it" (phản ứng cảm xúc) → "I don't like you" (thiếu tin tưởng).
- comparison "Sources of Resistance (Exhibit 17-1)" [3 cột → 2 cells]: Nguồn | Individual sources | Organizational sources
  - 1 | Habit — dựa vào thói quen/phản xạ quen thuộc. | Structural inertia — cơ chế tuyển chọn & quy định tạo ổn định, chống thay đổi.
  - 2 | Security — sợ mất cảm giác an toàn. | Limited focus of change — đổi một hệ con bị hệ lớn vô hiệu hóa.
  - 3 | Economic factors — sợ giảm thu nhập/không đáp ứng chuẩn mới. | Group inertia — chuẩn mực nhóm níu giữ dù cá nhân muốn đổi.
  - 4 | Fear of the unknown — bất định thay cho cái đã biết. | Threat to expertise — đe dọa chuyên môn của nhóm chuyên trách.
  - 5 | Selective information processing — chỉ nghe cái củng cố nhận thức cũ. | Threat to established power relationships — tái phân bổ quyền lực đe dọa quan hệ quyền lực cũ.
- keyTerms: resistance to change, structural inertia, selective information processing.

### s3 — Overcoming resistance: 8 tactics
- comparison "8 Tactics to Overcome Resistance (R&J p317-320)" [2 cột → 1 cell]: Tactic | Nội dung
  - Communication | Truyền đạt lý do & lợi ích thay đổi → giảm lo âu, tăng cam kết.
  - Participation | Cho người bị ảnh hưởng THAM GIA ra quyết định → khó kháng cự điều mình góp phần tạo ra.
  - Building support & commitment | Tư vấn, đào tạo kỹ năng mới, nghỉ phép ngắn → giảm sợ hãi, tăng cam kết cảm xúc.
  - Developing positive relationships | Nhân viên tin người quản lý & thấy được hỗ trợ → dễ chấp nhận thay đổi.
  - Implementing changes fairly | Triển khai CÔNG BẰNG (procedural justice) → giảm cảm giác bị đối xử bất công.
  - Manipulation & cooptation | Bóp méo thông tin/"mua chuộc" người dẫn đầu phản kháng — hiệu quả ngắn hạn, rủi ro mất niềm tin.
  - Selecting people who accept change | Tuyển người cởi mở với thay đổi (openness, self-efficacy cao).
  - Coercion | Ép buộc bằng đe dọa trực tiếp — chỉ dùng khi cấp bách, dễ phản tác dụng.
- keyTerms: participation, procedural justice, cooptation.

### s4 — Lewin's Three-Step Model
- flow "Lewin's Three-Step Model (Exhibit 17-2)" layout `horizontal`: nodes `l1` "Unfreezing" → `l2` "Movement" → `l3` "Refreezing". Caption: "Unfreezing (phá vỡ nguyên trạng) → movement (dịch tới trạng thái mới) → refreezing (cố định để bền vững)."
- callout `key` "Driving vs Restraining forces (Exhibit 17-3, R&J p320)": status quo là trạng thái cân bằng. Unfreezing đạt được bằng 1 trong 3 cách: (1) TĂNG **driving forces** (lực đẩy khỏi nguyên trạng), (2) GIẢM **restraining forces** (lực cản níu giữ), (3) kết hợp cả hai. Doanh nghiệp từng thành công thường có restraining forces mạnh (người ta hoài nghi nhu cầu đổi). Không refreezing → thay đổi ngắn ngủi, quay về cũ.
- keyTerms: unfreezing, movement, refreezing, driving forces, restraining forces.

### s5 — Kotter's 8-Step Plan + Action Research
- comparison "Kotter's 8-Step Plan (Exhibit 17-4)" [2 cột → 1 cell]: Bước | Nội dung
  - 1. Sense of urgency | Tạo lý do cấp bách, thuyết phục vì sao cần thay đổi.
  - 2. Coalition | Lập liên minh đủ quyền lực để dẫn dắt thay đổi.
  - 3. New vision | Tạo tầm nhìn mới & chiến lược đạt tầm nhìn.
  - 4. Communicate vision | Truyền tầm nhìn ra toàn tổ chức.
  - 5. Empower & remove barriers | Trao quyền hành động, gỡ rào cản, khuyến khích risk taking.
  - 6. Short-term wins | Tạo & tưởng thưởng "thắng lợi ngắn hạn" để duy trì động lực.
  - 7. Consolidate | Củng cố cải tiến, điều chỉnh, đẩy tiếp thay đổi lớn hơn.
  - 8. Reinforce (anchor) | Neo thay đổi vào văn hóa (gắn hành vi mới với thành công tổ chức).
- callout `note` "Kotter ↔ Lewin & Action Research (R&J p321-322)": Kotter chi tiết hóa Lewin (bước 1-4 = unfreezing, 5-7 = movement, 8 = refreezing). **Action research**: quy trình đổi dựa trên dữ liệu — **diagnosis → analysis → feedback → action → evaluation**; giảm resistance vì nhân viên tham gia & vấn đề được dữ liệu xác nhận.
- keyTerms: Kotter's eight-step plan, action research.

### s6 — Organizational Development + Creating a Culture for Change
- comparison "OD interventions (R&J p322-323)" [2 cột → 1 cell]: Kỹ thuật | Nội dung
  - Sensitivity training / survey feedback | Nâng nhận thức về hành vi bản thân; khảo sát thái độ rồi phản hồi để cải thiện.
  - Process consultation | Tư vấn giúp client tự "nhìn ra" & giải quyết vấn đề quy trình (chứ không làm hộ).
  - Team building | Tương tác cao trong nhóm để tăng trust & openness, cải thiện phối hợp.
  - Intergroup development | Đổi thái độ/định kiến/tri giác GIỮA các nhóm (giảm dysfunctional intergroup conflict).
  - Appreciative inquiry (AI) | Tập trung ĐIỂM MẠNH & thành công (không phải vấn đề); 4 bước: discovery → dreaming → design → destiny.
- callout `key` "Creating a culture for change (R&J p323)": không chỉ THÍCH ỨNG mà chủ động ÔM LẤY thay đổi qua 3 cách — **managing paradox** (paradox theory: không có trạng thái tối ưu cuối cùng, phải cân bằng động các căng thẳng), **stimulating an innovative culture** (khuyến khích thử nghiệm, chấp nhận thất bại), **creating a learning organization** (tổ chức học tập, sửa lỗi hệ thống).
- keyTerms: organizational development, appreciative inquiry, learning organization.

### s7 — What is stress? Challenge vs hindrance + demands-resources
- callout `key` "Định nghĩa stress (R&J p327)": stress = **dynamic condition** khi cá nhân đối mặt với opportunity/demand/resource liên quan điều mình mong muốn, mà kết quả vừa **uncertain vừa important**. Stress thường bị nhìn tiêu cực nhưng CÓ mặt tích cực (áp lực vừa phải thúc đẩy hiệu suất).
- comparison "Challenge vs Hindrance stressors (R&J p327)" [3 cột → 2 cells]: Loại | Bản chất | Tác động
  - Challenge stressors | Gắn với workload, áp lực hoàn thành, deadline. | Thúc đẩy — cải thiện hiệu suất trong môi trường có hỗ trợ; ít strain hơn.
  - Hindrance stressors | Red tape, office politics, mơ hồ trách nhiệm. | Cản trở mục tiêu — giảm hiệu suất ở mọi môi trường.
- callout `note` "Demands–Resources model (R&J p327)": **Demands** = trách nhiệm, áp lực, nghĩa vụ, bất định cá nhân đối mặt. **Resources** = những thứ trong tầm kiểm soát giúp giải quyết demands. Stress cao khi demands vượt resources.
- keyTerms: stress, challenge stressors, hindrance stressors, demands, resources.

### s8 — Potential sources of stress (model)
- flow "Potential Sources of Stress (R&J p328-330)" layout `tree`: root `src` "Potential sources" với 3 nhánh con `env` "Environmental factors", `org` "Organizational factors", `per` "Personal factors" (mỗi nhánh set parent="src"). Caption: "Ba nhóm nguồn stress; tác động cộng dồn (additive) qua individual differences → experienced stress."
- comparison "3 nhóm sources of stress (R&J p329-330)" [2 cột → 1 cell]: Nhóm | Nội dung
  - Environmental factors | Bất định về kinh tế (economic), chính trị (political), công nghệ (technological) — làm kỹ năng/kinh nghiệm lỗi thời nhanh.
  - Organizational factors | Task demands (thiết kế công việc, khối lượng, deadline), role demands (role conflict, role overload, role ambiguity), interpersonal demands (xung đột, bắt nạt, quấy rối).
  - Personal factors | Vấn đề gia đình (work–life conflict), khó khăn tài chính cá nhân.
- callout `note` "Stressors are ADDITIVE (R&J p330)": stress TÍCH LŨY — mỗi stressor cộng thêm vào mức nền; một stressor lẻ có thể nhỏ nhưng cộng vào nền cao thì "quá tải". Cần đánh giá TỔNG các nguồn, không chỉ từng cái. Technostress (slide): techno-burden/insecurity/complexity/addiction/intrusion.
- keyTerms: role conflict, role overload, role ambiguity, stressors are additive.

### s9 — Inverted-U + consequences of stress
- callout `key` "Inverted-U: stress ↔ performance (slide 26, R&J 2015)": quan hệ áp lực–hiệu suất là **chữ U ngược** — quá ÍT stress → chán/uể oải (boredom); vùng **optimum stress** → hiệu suất đỉnh (area of best performance); quá NHIỀU → lo âu, kiệt sức. Eustress (tích cực) vs distress (fatigue → exhaustion → burnout).
- comparison "Consequences of Stress — 3 nhóm symptom (Exhibit 17-7, R&J p331)" [2 cột → 1 cell]: Nhóm | Biểu hiện
  - Physiological | Thay đổi chuyển hóa, tăng nhịp tim/huyết áp, đau đầu, bệnh mạch vành (coronary heart disease), tăng sickness absence.
  - Psychological | Job dissatisfaction, căng thẳng, lo âu, cáu gắt, chán nản, trì hoãn (procrastination).
  - Behavioral | Giảm năng suất, tăng absence & turnover, thay đổi ăn uống/hút thuốc/rượu, nói nhanh, bồn chồn, rối loạn giấc ngủ.
- keyTerms: eustress, distress, burnout.

### s10 — Managing stress: individual + organizational approaches
- comparison "Managing Stress — 2 nhóm approach (R&J p332-333)" [3 cột → 2 cells]: Nhóm | Individual approaches | Organizational approaches
  - 1 | Time-management techniques (ưu tiên việc quan trọng, giảm trì hoãn). | Selection & placement + training (đặt đúng người, huấn luyện đối phó).
  - 2 | Physical exercise (aerobic — giảm phản ứng sinh lý của stress). | Realistic goal-setting (mục tiêu rõ, khả thi).
  - 3 | Relaxation techniques (thiền, thở, nghỉ ngơi). | Redesign of jobs (tăng autonomy, feedback, giảm quá tải).
  - 4 | Social support networks (bạn bè, đồng nghiệp, gia đình). | Employee involvement + communication + sabbaticals + wellness programs.
- keyTerms: time management, social support, wellness programs.

### s11 — Quản trị từ chính mình: D>CS=SR + change–stress link (synthesis)
- callout `key` "D > CS = SR (Thornton 2023, slide 30)": khi **Demands vượt Coping Skills → Stress Reaction**. Ba đòn bẩy quản trị stress: (1) **REDUCE demands** (giảm bớt yêu cầu), (2) **INCREASE coping skills** (nâng năng lực đối phó), (3) **MONITOR stress reactions** (theo dõi phản ứng của mình). Khớp demands–resources model của R&J.
- callout `note` "Change ↔ stress & start from self (slide 15, 18)": thay đổi tại nơi làm việc gắn với employee stress, distrust & intent to quit (APA) → quản trị thay đổi TỐT chính là giảm stress. Thông điệp khép môn: "trước khi đòi người khác thay đổi, bạn đã thay đổi chính mình chưa?" — quản trị thay đổi & stress bắt đầu từ self-leadership (nối Topic 10), biến áp lực thành bản lĩnh (eustress).
- keyTerms: coping skills, self-management, eustress.

---

## 6. Questions (20 câu — q01…q20)
> Format: stem/options EN; đúng 1 trong 5 (A-E); rationale VI "Cơ chế:… Bẫy:… Khóa:…"; takeaway VI. Phủ đều 11 sections & book/slide-adds.

Phân bổ:
1. **q01 — Forces for change** (s1): nhận diện 6 dimensions (technology/economic shocks/competition...).
2. **q02 — Planned vs reactionary change** (s1): planned change do change agents dẫn dắt.
3. **q03 — Individual sources of resistance** (s2): habit/security/fear of unknown/selective info processing.
4. **q04 — Organizational sources of resistance** (s2): structural inertia/group inertia/threat to power.
5. **q05 — Maurer 3 levels** (s2): I don't get it / I don't like it / I don't like you.
6. **q06 — Overcoming resistance: participation/communication** (s3): tham gia giảm kháng cự.
7. **q07 — Coercion / manipulation** (s3): rủi ro ngắn hạn, mất niềm tin.
8. **q08 — Lewin 3-step** (s4): unfreezing → movement → refreezing; thứ tự.
9. **q09 — Driving vs restraining forces** (s4): unfreeze = tăng driving / giảm restraining.
10. **q10 — Kotter 8-step** (s5): sense of urgency là bước đầu; anchor into culture là bước cuối.
11. **q11 — Action research** (s5): diagnosis→analysis→feedback→action→evaluation; data-driven.
12. **q12 — OD / appreciative inquiry** (s6): AI tập trung điểm mạnh (không phải vấn đề).
13. **q13 — Creating culture for change** (s6): learning organization / innovative culture / paradox.
14. **q14 — What is stress / challenge vs hindrance** (s7): challenge thúc đẩy, hindrance cản trở.
15. **q15 — Demands–resources model** (s7): resources trong tầm kiểm soát giải quyết demands.
16. **q16 — Sources of stress** (s8): environmental/organizational/personal; role ambiguity vs overload.
17. **q17 — Stressors additive** (s8): stress tích lũy cộng dồn.
18. **q18 — Inverted-U** (s9): optimum stress = hiệu suất đỉnh; quá nhiều/ít đều giảm.
19. **q19 — Consequences 3 nhóm** (s9): physiological/psychological/behavioral symptoms.
20. **q20 — Managing stress / D>CS=SR** (s10-s11): individual vs organizational; reduce demands/increase coping/monitor.

takeaway mẫu (Codex viết đủ 20, VI): vd q18 "Stress không phải càng ít càng tốt — quá ít gây chán, đúng mức (eustress) mới cho hiệu suất đỉnh; vượt ngưỡng mới thành distress."

---

## 7. source
```ts
source: "Robbins & Judge, Organizational Behavior — Chapter 17 'Organizational Change' (pp.315-335); Slide 'OB-Topic 12-Organizational Change and Workstress' (Dr Lan Anh, IM2017, HCMUT); bổ sung slide: Robert H. Schaffer 'All Management Is Change Management' (HBR 2017), Kurt Lewin (3-step), John Kotter (8-step), Rick Maurer '3 Levels of Resistance', Spencer Johnson 'Who Moved My Cheese?', Spectrum Assessments (8 change readiness factors), Cooper et al. (2002) & Lazarus & Folkman (1984) (stress), MetLife (holistic well-being), Simon Thornton 2023 (D>CS=SR).",
```

---

## 8. Coverage matrix (đối chiếu "không sót kiến thức") — 24 mục
1. Forces for change (6 dimensions) — s1 ✓ q01
2. Planned vs reactionary change + change agents — s1 ✓ q02
3. All management is change management **[slide]** — s1
4. Resistance — individual sources — s2 ✓ q03
5. Resistance — organizational sources — s2 ✓ q04
6. Maurer 3 levels **[slide]** — s2 ✓ q05
7. Overcoming resistance — 8 tactics — s3 ✓ q06,q07
8. Lewin 3-step (unfreezing/movement/refreezing) — s4 ✓ q08
9. Driving vs restraining forces — s4 ✓ q09
10. Kotter 8-step — s5 ✓ q10
11. Action research — s5 ✓ q11
12. OD interventions (team building, intergroup, AI) — s6 ✓ q12
13. Creating culture for change (paradox/innovative/learning org) — s6 ✓ q13
14. What is stress + challenge vs hindrance — s7 ✓ q14
15. Demands–resources model — s7 ✓ q15
16. Sources: environmental/organizational/personal — s8 ✓ q16
17. Role conflict/overload/ambiguity — s8 ✓ q16
18. Stressors additive + technostress **[slide]** — s8 ✓ q17
19. Inverted-U + eustress/distress **[slide]** — s9 ✓ q18
20. Consequences: physiological/psychological/behavioral — s9 ✓ q19
21. Managing stress — individual approaches — s10 ✓ q20
22. Managing stress — organizational approaches — s10 ✓ q20
23. D>CS=SR + start from self **[slide]** — s11 ✓ q20
24. Change ↔ stress link + change readiness **[slide]** — s11

## 9. Cấu trúc dự kiến (để verify Layer B)
- sections: **11** (s1-s11)
- questions: **20**
- learningObjectives: **11**
- comparison blocks: **~10** (s1:1, s2:1, s3:1, s5:1, s6:1, s7:1, s8:1, s9:2, s10:1 = 10)
- flow blocks (trong section): **2** (s4 Lewin horizontal; s8 sources tree — set parent="src") + knowledgeMap tree (riêng)
- callout blocks: **~11**
- calc/formula blocks: **0** (định tính — D>CS=SR viết bằng callout, KHÔNG calcBlock)
- status: "ready"
