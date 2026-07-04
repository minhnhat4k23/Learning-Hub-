# Spec: OB Topic 00 — Introduction to Organizational Behavior

> **Loại:** Soạn mới topic hoàn chỉnh (rich teaching mode), thay placeholder `topic-00` môn `organizational-behavior`. Đây là topic ĐẦU môn OB → **PORT helper block** vào `content/organizational-behavior.ts`.
> **File cần sửa:** `content/organizational-behavior.ts`.
> **Nguồn (chỉ dùng Slides + Exercises + Exam — KHỚP: slide + sách bổ trợ nhau):**
> - **Slide `OB-Topic 0-Introduction-Dr Lan Anh`** = khung chính: định nghĩa OB, what is behavior, what/why OB, 3 levels, Basic OB Model, objectives, disciplines, individual differences, workforce diversity, take-away.
> - **Reading `Chapter 1 - Welcome to the world of OB` (Robbins & Judge)** = chuẩn hóa: OB defined, effective vs successful managers, systematic study vs intuition, 4 disciplines (Exhibit 1-1), few absolutes/contingency, challenges & opportunities, Basic OB Model Inputs→Processes→Outcomes (Exhibit 1-3), outcomes gồm OCB/withdrawal.
> - **Exam (Midterm) — chỉ lấy TƯ DUY ra đề:** open-book, discussion + self-application, gắn L.O., liên kết khái niệm giữa topic → quiz nhắm HIỂU bản chất + phân biệt + áp dụng, KHÔNG học vẹt định nghĩa.
> - **Bằng chứng neo lens (Claude chịu trách nhiệm đúng hướng — người học sắp học):**
>   - Compass "systematic study, 3 cấp, describe→control" ← slide 31 (Robbins & Judge 2019 def) + slide 43 (Newstrom objectives) + sách "complementing intuition with systematic study" + "few absolutes in OB".
> **Đặc thù môn định tính:** KHÔNG có calc/formula. Blocks chủ lực = `comparison` + `diagram (flow)` + `callout`. Port helper: `flowBlock`, `calloutBlock`, `comparisonBlock` (KHÔNG cần calcBlock/formulaBlock).
> **Quy ước:** diễn giải VI + term EN; quiz `stem`/`options` EN, `rationale`/`takeaway` VI (Cơ chế→Bẫy→Khóa); quiz **5 options A–E**.
> **bigIdea format:** compass (1 câu) + `bigIdeaPillars` (4 trụ).
> **Verify:** `npx tsc --noEmit` pass; `node rendercheck.mjs organizational-behavior topic-00`; KHÔNG commit.

---

## 0. Wiring (BẮT BUỘC làm trước)

`content/organizational-behavior.ts` hiện chỉ có helper `placeholder()` + 13 chapter. Topic 00:

1. **Port helper block** (đặt đầu file, sau import — copy pattern từ `content/dtb.ts`):
   ```ts
   import type { Block, CalloutKind, Chapter, FlowEdge, FlowNode } from "./types";
   type FlowLayout = "tree" | "horizontal" | "radial";
   type SectionFlowNode = Omit<FlowNode, "sectionId"> & { detail: string };
   const flowBlock = (sectionId, title, layout, nodes, edges, caption?) => ({ type:"diagram", diagram:{ engine:"flow", title, layout, nodes: nodes.map(n=>({...n, sectionId})), edges, caption } });
   const calloutBlock = (kind, title, body) => ({ type:"callout", callout:{ kind, title, body } });
   const comparisonBlock = (title, columns, rows) => ({ type:"comparison", table:{ title, columns, rows } });
   ```
   (Giữ nguyên `placeholder()` cho 12 topic còn lại.)
2. Tạo `const topic00: Chapter = { ... }` (đặt trước array export).
3. Trong array `organizationalBehaviorChapters`, **thay** `placeholder(0, "topic-00", ...)` bằng `topic00`.

**Renderer contract:** `comparisonBlock` `columns.length === rows[i].cells.length + 1`; flow `edges.from/to` trỏ node có thật cùng block; node id `_`; flow layout chỉ `horizontal`/`tree` (tree set `parent`); edge label NGẮN.

---

## 1. Khung Chapter

```ts
const topic00: Chapter = {
  slug: "topic-00",
  order: 0,
  title: "Topic 00 — Introduction to Organizational Behavior",
  bigIdea:
    "OB = dùng nghiên cứu HỆ THỐNG (không phải cảm tính) về hành vi con người ở 3 cấp — cá nhân → nhóm → tổ chức — để mô tả, hiểu, dự đoán và điều chỉnh hành vi, nhằm cải thiện hiệu quả tổ chức.",
  bigIdeaPillars: [
    { label: "Định nghĩa", body: "OB = field of study về impact của individuals + groups + structure lên behavior trong tổ chức, để cải thiện effectiveness (Robbins & Judge, 2019)." },
    { label: "3 cấp độ", body: "Individual → Group (interpersonal) → Organizational (intergroup) — khung xuyên suốt 12 topic của môn." },
    { label: "4 mục tiêu", body: "Describe → Understand → Predict → Control hành vi (Newstrom, 2014)." },
    { label: "Systematic, not intuition", body: "Bổ sung trực giác bằng nghiên cứu hệ thống; 'few absolutes' → contingency (tùy bối cảnh); nền từ 4 behavioral science disciplines." },
  ],
  learningObjectives: [
    "Định nghĩa Organizational Behavior và giải thích 2 vế: 3 nguồn tác động (individuals, groups, structure) và mục đích (cải thiện organizational effectiveness).",
    "Giải thích 'behavior' là gì (action/reaction; conscious/unconscious, overt/covert, voluntary/involuntary) và vì sao OB 'few absolutes' → cách tiếp cận contingency.",
    "Nêu 4 mục tiêu của việc nghiên cứu OB: describe, understand, predict, control hành vi (Newstrom).",
    "Phân biệt 3 cấp độ phân tích của OB (individual, group/interpersonal, organizational/intergroup) và map vào cấu trúc 12 topic của môn.",
    "Giải thích Basic OB Model: Inputs → Processes → Outcomes; nhận diện các outcome (attitudes & stress, task performance, OCB, withdrawal behavior, group cohesion/functioning, productivity, survival).",
    "Nêu 4 behavioral science disciplines đóng góp cho OB (psychology, social psychology, sociology, anthropology) và đơn vị phân tích của mỗi ngành.",
    "Giải thích vì sao nên bổ sung intuition bằng systematic study (evidence-based management) và phân biệt effective vs successful managers.",
    "Nêu ý nghĩa của individual differences & workforce diversity (con dao hai lưỡi: discrimination/conflict vs creativity/synergy) đối với hiệu quả tổ chức.",
  ],
  knowledgeMap: { /* xem mục 2 */ },
  sections: [ /* s1..s7 */ ],
  questions: [ /* q01..q11 (5 options A–E) */ ],
  status: "ready",
  source:
    "Organizational Behavior (IM2017, Dr Truong Thi Lan Anh) — slide 'OB-Topic 0 - Introduction' + Reading 'Chapter 1 - Welcome to the world of OB' (Robbins & Judge). Định nghĩa OB (Robbins & Judge 2019 + Newstrom 2014); Basic OB Model (Robbins & Judge, Exhibit 1-3); 4 disciplines (Exhibit 1-1).",
};
```

---

## 2. knowledgeMap (cây 3 nhóm)

`engine: "flow"`, `layout: "tree"`, `collapsible: true`.

```ts
knowledgeMap: {
  engine: "flow",
  layout: "tree",
  collapsible: true,
  caption:
    "Introduction to OB: (A) OB là gì & để làm gì, (B) khung phân tích (3 cấp + Basic OB Model + disciplines), (C) ứng dụng (diversity + manager + take-away). Bấm node để mở chi tiết.",
  nodes: [
    { id: "ob", label: "Organizational Behavior", group: "concept", sectionId: "s1",
      detail: "Nghiên cứu hệ thống hành vi con người trong tổ chức để cải thiện effectiveness." },

    { id: "g_what", label: "A. OB là gì & để làm gì", group: "concept", parent: "ob", sectionId: "s1",
      detail: "Định nghĩa, behavior, 4 objectives." },
    { id: "g_frame", label: "B. Khung phân tích", group: "concept", parent: "ob", sectionId: "s3",
      detail: "3 cấp độ + Basic OB Model + disciplines." },
    { id: "g_apply", label: "C. Ứng dụng", group: "concept", parent: "ob", sectionId: "s6",
      detail: "Diversity, effective vs successful, take-away." },

    // A
    { id: "t_def", label: "Định nghĩa OB", group: "term", parent: "g_what", sectionId: "s1",
      detail: "Individuals + groups + structure → behavior → effectiveness (Robbins & Judge)." },
    { id: "t_behav", label: "Behavior & 4 objectives", group: "term", parent: "g_what", sectionId: "s2",
      detail: "Action/reaction; describe→understand→predict→control; few absolutes." },

    // B
    { id: "t_levels", label: "3 cấp độ phân tích", group: "term", parent: "g_frame", sectionId: "s3",
      detail: "Individual → group (interpersonal) → organizational (intergroup)." },
    { id: "t_model", label: "Basic OB Model", group: "term", parent: "g_frame", sectionId: "s4",
      detail: "Inputs → Processes → Outcomes." },
    { id: "t_disc", label: "Behavioral disciplines", group: "term", parent: "g_frame", sectionId: "s5",
      detail: "Psychology, social psychology, sociology, anthropology." },

    // C
    { id: "t_div", label: "Individual differences & diversity", group: "term", parent: "g_apply", sectionId: "s6",
      detail: "Con dao hai lưỡi: conflict vs creativity/synergy." },
    { id: "t_mgr", label: "Managers & systematic study", group: "term", parent: "g_apply", sectionId: "s7",
      detail: "Effective vs successful; intuition + evidence; inner vs outer game." },
  ],
  edges: [
    { from: "ob", to: "g_what" }, { from: "ob", to: "g_frame" }, { from: "ob", to: "g_apply" },
    { from: "g_what", to: "t_def" }, { from: "g_what", to: "t_behav" },
    { from: "g_frame", to: "t_levels" }, { from: "g_frame", to: "t_model" }, { from: "g_frame", to: "t_disc" },
    { from: "g_apply", to: "t_div" }, { from: "g_apply", to: "t_mgr" },
  ],
},
```

---

## 3. Bối cảnh nội dung (VERIFIED — hard theory, trích slide/sách)

| Mục | Nội dung | Nguồn |
|---|---|---|
| Định nghĩa OB | "A field of study that investigates the impact that individuals, groups, and structure have on behavior within organizations for the purpose of applying such knowledge toward improving an organization's effectiveness" | slide 31 (Robbins & Judge, 2019) |
| Định nghĩa OB (2) | "Systematic study and careful application of knowledge about how people—as individuals and groups—act within organizations" | slide 31 (Newstrom, 2014) |
| What is behavior | Action/reaction to situation/stimulus; conscious/unconscious, overt/covert, voluntary/involuntary; partially understood → sometimes unpredictable; no perfect solutions → always can be learned & improved | slide 32 (Newstrom) |
| 4 objectives | Describe → Understand → Predict → Control human behavior | slide 43 (Newstrom) |
| 3 levels | Individual (attitude/personality/motives → performance) → Group (formal/informal → interpersonal: teamwork, leadership, groupthink, conflict) → Organizational (structure/culture → intergroup) | slide 41 |
| Basic OB Model | Inputs → Processes → Outcomes; Outcomes: attitudes & stress, task performance, OCB (organizational citizenship behavior), withdrawal behavior, group cohesion, group functioning, productivity, survival | slide 42 + sách Exhibit 1-3 |
| 4 disciplines | Psychology (individual) · Social psychology (group/change) · Sociology (group/organization system) · Anthropology (culture/environment) | slide 46 + sách Exhibit 1-1 |
| Few absolutes | "There are few absolutes in OB" → contingency: hành vi tùy tình huống, không có công thức áp mọi nơi | sách Ch.1 |
| Effective vs Successful | Effective manager (Luthans): nhấn communication + HRM; Successful manager (thăng tiến nhanh): nhấn networking | sách Ch.1 |
| Workforce diversity | Gender, race, age, disability, religion, national origin, sub-culture, tenure… → hai mặt: Sources of Discrimination/Conflict/Dysfunction VS Sources of Creativity/Synergy/Effectiveness/Sustainability | slide 48 |

> Đây là môn định tính — KHÔNG có số/công thức. Mọi mục là định nghĩa/danh sách trích slide + sách. Giữ term EN.

---

## 4. Sections (s1 → s7)

> Mỗi section: `id`, `heading`, `blocks[]`, `keyTerms[]`. Ghi nguồn (slide X hoặc R&J Ch.1). Mỗi section ≥1 comparison/flow/callout.

### TẦNG A — OB là gì & để làm gì

#### s1 — OB là gì & vì sao học (NEO LENS)
- **calloutBlock** `"key"` "Định nghĩa OB" — "Organizational Behavior = một FIELD OF STUDY nghiên cứu tác động của **individuals, groups, và structure** lên hành vi trong tổ chức, nhằm **áp dụng để cải thiện organizational effectiveness** (Robbins & Judge, 2019). Newstrom (2014): 'systematic study and careful application of knowledge về cách con người — cá nhân & nhóm — hành xử trong tổ chức'. Hai vế cốt lõi: (1) 3 nguồn tác động, (2) mục đích ứng dụng."
- **flowBlock** `s1` "Vì sao OB đáng học" layout `horizontal`, nodes:
  - `s1_people` "People join organizations" — "Người ta gia nhập tổ chức…"
  - `s1_leave` "They leave people" — "…nhưng nghỉ việc thường vì SẾP, không phải công ty (Ken Blanchard; Gallup)."
  - `s1_mgr` "Look to managers" — "Turnover cao → soi lại quản lý → cần hiểu hành vi."
  - `s1_skill` "Employability skills" — "OB rèn: tư duy phản biện, ra quyết định tốt, communicate/collaborate, social responsibility."
  - edges: `s1_people→s1_leave` label "thực tế", `s1_leave→s1_mgr` label "hệ quả", `s1_mgr→s1_skill` label "cần OB". caption: "OB không phải lý thuyết suông — nó là employability skill (slide 33–36)."
- **keyTerms:** organizational behavior (OB), organizational effectiveness, employability skills, structure.

#### s2 — Behavior & 4 objectives
- **comparisonBlock** "Behavior có những mặt nào (Newstrom)" — columns `["Cặp đối lập", "Ý nghĩa"]`; rows:
  - "Conscious ↔ unconscious": cells `["Có ý thức hay vô thức"]`
  - "Overt ↔ covert": cells `["Biểu hiện ra ngoài hay ẩn bên trong"]`
  - "Voluntary ↔ involuntary": cells `["Tự nguyện hay không tự nguyện"]`
- **flowBlock** `s2` "4 mục tiêu nghiên cứu OB" layout `horizontal`, nodes:
  - `s2_desc` "Describe" — "Mô tả: con người hành xử thế nào trong các điều kiện khác nhau."
  - `s2_und` "Understand" — "Hiểu: VÌ SAO họ hành xử như vậy."
  - `s2_pred` "Predict" — "Dự đoán: hành vi tương lai."
  - `s2_ctrl` "Control" — "Điều chỉnh: hành vi con người tại nơi làm việc."
  - edges: `s2_desc→s2_und` label "sâu hơn", `s2_und→s2_pred` label "→", `s2_pred→s2_ctrl` label "→". caption: "Tiến trình describe → understand → predict → control (slide 43, Newstrom)."
- **calloutBlock** `"insight"` "Few absolutes — vì sao OB khó như thật" — "Behavior 'partially understood → sometimes unpredictable'; 'no perfect solutions to organizational problems'. Sách nhấn 'there are few absolutes in OB' → OB dùng cách tiếp cận **contingency**: một giải pháp đúng ở tình huống này có thể sai ở tình huống khác. Vì thế OB luôn 'can be learned and improved', không có công thức vạn năng."
- **keyTerms:** behavior, stimulus, contingency approach, few absolutes.

### TẦNG B — Khung phân tích

#### s3 — 3 cấp độ phân tích (map 12 topic)
- **flowBlock** `s3` "3 cấp độ phân tích của OB" layout `tree`, nodes (set `parent`):
  - `s3_ob` "OB — 3 levels" (root)
  - `s3_ind` "Individual level" parent `s3_ob` — "Personality, perception, values, emotions, attitudes, motivation → individual performance. (Topic 1–6)"
  - `s3_grp` "Group level (interpersonal)" parent `s3_ob` — "Formal/informal groups: teamwork, leadership, groupthink, conflict. (Topic 7–10)"
  - `s3_org` "Organizational level (intergroup)" parent `s3_ob` — "Structure, culture, change; phối hợp giữa các nhóm. (Topic 11–12)"
  - edges: `s3_ob→s3_ind`, `s3_ob→s3_grp`, `s3_ob→s3_org` (phân rã, không nhãn). caption: "OB đi từ cá nhân → nhóm → tổ chức; đây cũng là mạch 12 topic cả môn (slide 40–41)."
- **calloutBlock** `"note"` "Cấu trúc 12 topic" — "INDIVIDUAL: (1) Personality, (2) Perception, (3) Personal values, (4) Emotions, (5) Attitudes & Dissonance, (6) Motivation. GROUP: (7) Group properties, (8) Conflict & Collaboration, (9) Team, (10) Leadership & Followership. ORGANIZATIONAL: (11) Org Culture, (12) Org Change & Work stress (slide 40)."
- **keyTerms:** individual level, group level, interpersonal, organizational level, intergroup.

#### s4 — Basic OB Model
- **flowBlock** `s4` "Basic OB Model (Robbins & Judge)" layout `horizontal`, nodes:
  - `s4_in` "Inputs" — "Biến 'đầu vào' ở 3 cấp: individual (personality, values), group (structure, roles), org (culture)."
  - `s4_proc` "Processes" — "Hành động/quyết định do inputs dẫn tới: emotions, motivation, communication, leadership, conflict…"
  - `s4_out` "Outcomes" — "Kết quả then chốt (xem dưới)."
  - edges: `s4_in→s4_proc` label "dẫn tới", `s4_proc→s4_out` label "tạo ra". caption: "Khung Inputs → Processes → Outcomes tổ chức toàn bộ môn (Exhibit 1-3)."
- **comparisonBlock** "Outcomes của Basic OB Model (theo cấp)" — columns `["Cấp", "Outcomes"]`; rows:
  - "Individual": cells `["Attitudes & stress, task performance, OCB (organizational citizenship behavior), withdrawal behavior"]`
  - "Group": cells `["Group cohesion, group functioning"]`
  - "Organizational": cells `["Productivity, survival"]`
- **calloutBlock** `"key"` "OCB & withdrawal behavior là gì" — "OCB (organizational citizenship behavior) = hành vi tự nguyện ngoài mô tả công việc nhưng giúp tổ chức (giúp đồng nghiệp, phát biểu xây dựng). Withdrawal behavior = hành vi rút lui (đi trễ, vắng mặt, nghỉ việc). Hai outcome này cho thấy OB quan tâm cả mặt tích cực lẫn tiêu cực của hành vi (R&J Ch.1)."
- **keyTerms:** inputs, processes, outcomes, organizational citizenship behavior (OCB), withdrawal behavior, task performance.

### TẦNG C — Ứng dụng

#### s5 — Behavioral science disciplines
- **comparisonBlock** "4 disciplines đóng góp cho OB (Exhibit 1-1)" — columns `["Discipline", "Đơn vị phân tích", "Đóng góp chính cho OB"]`; rows:
  - "Psychology": cells `["Cá nhân", "Learning, motivation, personality, emotions, perception, attitudes, job satisfaction"]`
  - "Social psychology": cells `["Cá nhân trong nhóm / thay đổi", "Behavioral change, communication, group decision making"]`
  - "Sociology": cells `["Hệ thống xã hội / nhóm", "Group dynamics, teams, communication, power, conflict, organizational structure"]`
  - "Anthropology": cells `["Văn hóa / môi trường", "Organizational culture, cross-cultural comparison, values & environments"]`
- **calloutBlock** `"insight"` "OB là môn liên ngành" — "OB không tự phát minh — nó tổng hợp từ 4 behavioral science. Vì nhiều nguồn & nhiều bối cảnh nên 'few absolutes': cùng một khái niệm có thể biểu hiện khác nhau tùy người, nhóm, văn hóa → luôn cần systematic study, không suy diễn từ cảm tính (slide 46, Exhibit 1-1)."
- **keyTerms:** psychology, social psychology, sociology, anthropology, interdisciplinary.

#### s6 — Individual differences & Workforce diversity
- **calloutBlock** `"key"` "Individual differences" — "Điều làm mỗi người KHÁC nhau (U.S.P.): demographic factors (ethnic origin, gender, age…), early family experiences, social & cultural factors, personality, perception, personal values, emotions, attitudes, motivation. Đây chính là mạch các Topic 1–6 (slide 44)."
- **comparisonBlock** "Workforce diversity — con dao hai lưỡi" — columns `["Nếu quản lý KÉM", "Nếu quản lý TỐT"]`; rows:
  - "Kết quả": cells `["Sources of discrimination, conflict, dysfunction", "Sources of creativity, synergy, effectiveness, sustainability"]`
- **calloutBlock** `"note"` "Take-away cốt lõi của môn" — "Dr Lan Anh: dù quên hết, hãy nhớ 2 điều — **INDIVIDUAL DIFFERENCES** (mỗi người mỗi khác) và **SHARINGS** (điều ta chia sẻ với nhau). Inner game (identity: perception, values, emotions → behaviors) quyết định outer game (relationships, competencies trong team & tổ chức) (slide 50–51)."
- **keyTerms:** individual differences, unique selling point (U.S.P.), workforce diversity, synergy, inclusion.

#### s7 — Managers & systematic study
- **comparisonBlock** "Effective vs Successful managers (Luthans)" — columns `["Loại manager", "Hoạt động được nhấn mạnh"]`; rows:
  - "Effective manager": cells `["Communication + human resource management (làm việc tốt, nhân viên gắn kết)"]`
  - "Successful manager (thăng tiến nhanh)": cells `["Networking (quan hệ, chính trị nội bộ)"]`
- **calloutBlock** `"insight"` "Intuition + systematic study" — "OB khuyên bổ sung intuition (linh cảm) bằng **systematic study** — dựa trên evidence/data thay vì 'common sense'. Vì 'few absolutes', kết luận rút từ nghiên cứu có kiểm soát đáng tin hơn phán đoán vội. Đây là tinh thần evidence-based management (R&J Ch.1)."
- **calloutBlock** `"note"` "OB đồng hành nghề nghiệp" — "Trước khi thành MANAGER giỏi → phải là EMPLOYEE giỏi; trước khi quản người khác → quản chính mình; trước khi thành LEADER → làm FOLLOWER hiệu quả; trước khi đòi người khác CHANGE → tự thay đổi mình (slide 52). OB bắt đầu từ chính bạn."
- **keyTerms:** effective manager, successful manager, systematic study, evidence-based management, intuition.

---

## 5. Quiz (11 câu — concept + application; 5 options A–E)

> Mỗi câu: `id`, `stem` (EN), 5 `options` (id "a".."e", `rationale` Cơ chế→Bẫy→Khóa VI + term EN), `difficulty`, `conceptTested`, `takeaway` (VI). Không cố định đáp án đúng ở một vị trí. Bám tư duy đề: HIỂU + phân biệt + áp dụng, không học vẹt.

1. **q01** (basic) — *OB definition.* Đúng: OB nghiên cứu impact của individuals + groups + structure lên behavior trong tổ chức, để cải thiện effectiveness. Bẫy: coi OB chỉ về tâm lý cá nhân; bỏ mục đích effectiveness.
2. **q02** (intermediate) — *OB is systematic, not common sense.* Đúng: OB bổ sung intuition bằng systematic study (evidence-based); "few absolutes" → contingency. Bẫy: coi OB = common sense; nghĩ OB có công thức đúng mọi nơi.
3. **q03** (intermediate) — *What is behavior.* Đúng: action/reaction tới stimulus; conscious/unconscious, overt/covert, voluntary/involuntary; partially understood. Bẫy: coi behavior luôn có ý thức & quan sát được.
4. **q04** (intermediate) — *4 objectives.* Đúng: describe → understand → predict → control. Bẫy: đảo thứ tự; coi "control" = thao túng phi đạo đức (đó là limitation, không phải mục tiêu).
5. **q05** (intermediate) — *3 levels of analysis.* Đúng: individual → group (interpersonal) → organizational (intergroup). Bẫy: gộp group với organizational; đảo thứ tự cấp độ.
6. **q06** (advanced, application) — *Map topic to level.* Cho ví dụ (vd "conflict between two teams") → thuộc cấp nào? Đúng: intergroup/organizational-group level. Bẫy: xếp nhầm conflict cá nhân vs liên nhóm.
7. **q07** (intermediate) — *Basic OB Model.* Đúng: Inputs → Processes → Outcomes. Bẫy: đảo processes/outcomes; coi model chỉ 2 phần.
8. **q08** (intermediate) — *OCB / withdrawal behavior.* Đúng: OCB = hành vi tự nguyện ngoài job giúp tổ chức; withdrawal = rút lui (trễ, vắng, nghỉ). Bẫy: coi OCB là nhiệm vụ bắt buộc; nhầm withdrawal với low performance.
9. **q09** (intermediate) — *Disciplines contributing to OB.* Đúng: psychology (cá nhân), social psychology (nhóm/thay đổi), sociology (hệ thống/nhóm), anthropology (văn hóa). Bẫy: gán culture cho psychology; coi economics là nguồn chính.
10. **q10** (advanced, application) — *Workforce diversity double-edge.* Đúng: diversity quản tốt → creativity/synergy; quản kém → discrimination/conflict. Bẫy: coi diversity luôn tốt hoặc luôn xấu.
11. **q11** (intermediate) — *Effective vs successful managers.* Đúng: effective nhấn communication + HRM; successful (thăng tiến) nhấn networking. Bẫy: đảo hai; coi hai loại luôn trùng nhau.

---

## 6. Lưu ý thực thi (Codex)

- **PORT helper** `flowBlock`/`calloutBlock`/`comparisonBlock` vào `content/organizational-behavior.ts` (mục 0). KHÔNG cần calcBlock/formulaBlock (môn định tính). KHÔNG sửa `content/types.ts`. Giữ `placeholder()` cho 12 topic còn lại.
- **bigIdea format:** compass 1 câu + `bigIdeaPillars` 4 trụ như mục 1.
- **Ngôn ngữ:** lý thuyết VI + term EN; định nghĩa OB giữ nguyên câu tiếng Anh gốc trong callout (trích Robbins & Judge). Quiz stem/options EN; rationale VI Cơ chế→Bẫy→Khóa.
- Quiz: mỗi câu **5 options** (a–e), đúng **1** `isCorrect`; đáp án rải.
- `comparisonBlock` `cells = columns − 1`: bảng 3 cột (s5 → 2 cells); bảng 2 cột (s2, s4-outcomes, s6-diversity, s7 → 1 cell).
- Flow: knowledgeMap + s3 = `tree` (set `parent`); s1/s2/s4 = `horizontal`; node id `_`; edge label ngắn.
- `status: "ready"` chỉ giữ sau khi Lớp A pass (mục 7).

---

## 7. Verify (Codex chạy)

```bash
npx tsc --noEmit
```
- Phải pass (0 error).
- `comparisonBlock` mọi row `cells.length === columns.length − 1`.
- Flow: mọi `edges.from/to` tồn tại; node id `_`; knowledgeMap + s3 (`tree`) set `parent`.
- Quiz: mỗi câu 5 options, đúng 1 `isCorrect`.
- Sau tsc pass: `node rendercheck.mjs organizational-behavior topic-00` (375/768/1440) — bigIdea compass+pillars + knowledgeMap + 7 section + 11 quiz; không horizontal-scroll. Báo Chaliyah. **KHÔNG commit.**

---

## 8. Coverage matrix (Lớp B — "KHÔNG SÓT kiến thức")

Đối chiếu slide OB-Topic 0 + Reading Ch.1. ✅ Có · ⬜ Thiếu · ⚠️ Rút gọn.

| # | Mục | Nguồn | Section | TT |
|---|---|---|---|---|
| 1 | Định nghĩa OB (Robbins & Judge + Newstrom) | slide 31 | s1 | ✅ |
| 2 | Why OB (leave bosses, turnover→managers) + what OB for (employability) | slide 33–36 | s1 | ✅ |
| 3 | What is behavior (các cặp đối lập) | slide 32 | s2 | ✅ |
| 4 | 4 objectives (describe→understand→predict→control) | slide 43 | s2 | ✅ |
| 5 | Few absolutes / contingency | sách Ch.1 | s2 | ✅ |
| 6 | 3 levels of analysis + map 12 topic | slide 40–41 | s3 | ✅ |
| 7 | Basic OB Model (Inputs→Processes→Outcomes) + outcomes (OCB, withdrawal…) | slide 42 + Exhibit 1-3 | s4 | ✅ |
| 8 | 4 disciplines (Exhibit 1-1) | slide 46 | s5 | ✅ |
| 9 | Individual differences | slide 44 | s6 | ✅ |
| 10 | Workforce diversity (hai mặt) | slide 48 | s6 | ✅ |
| 11 | Effective vs successful managers | sách Ch.1 | s7 | ✅ |
| 12 | Systematic study vs intuition (evidence-based) | sách Ch.1 | s7 | ✅ |
| 13 | Take-away (individual differences + sharings; inner/outer game); OB in profession | slide 50–52 | s6–s7 | ✅ |
| 14 | Challenges & opportunities (globalization, social media, well-being, ethics) | sách Ch.1 | — | ⚠️ Rút gọn (đề cập trong callout diversity/systematic; không tách section riêng — Topic intro, tránh loãng) |

> 13/13 mục cốt lõi phủ đủ; mục #14 (challenges list của sách) rút gọn có chủ đích vì Topic 0 là intro, các challenge sẽ hiện lại ở topic chuyên sâu (culture, change, diversity). Không có số → không có mục "sai số". Mọi định nghĩa trích slide/sách + cite.
