# Spec: OB Topic 02 — Perception & Common Biases

> **Loại:** Soạn mới topic hoàn chỉnh (rich teaching mode), thay placeholder `topic-02` môn `organizational-behavior`. Helper (`flowBlock`/`calloutBlock`/`comparisonBlock`) đã port ở Topic 00/01.
> **Executor: Codex.** File: `content/organizational-behavior.ts`. Đặt `const topic02` sau `topic01`; trong array thay `placeholder(2, "topic-02", ...)` bằng `topic02`.
> **Nguồn (Slides + Reading Chapter, KHÔNG dùng Assignment):**
> - **Slide `OB-Topic 2-Perception and Common bias-Dr Lan Anh`** = khung giảng: perception, factors, Gestalt, perceptual process, attribution + errors, shortcuts, common biases, applications (Pygmalion), "bias vô thức hại hơn discrimination" (Nordell 2022).
> - **Reading `Chapter 5 - Perceptual Processes` (R&J, p94-110)** = chuẩn hóa + phần vượt slide. **Scope Chaliyah chốt: GỒM TRỌN nửa Decision Making** (rational model, bounded rationality, intuition, biases quyết định, individual differences, org constraints, ethics, creativity).
> **Quy tắc [[nguon-hoc-lieu-ob]]:** sách > slide — kiến thức sách không có trên slide PHẢI thêm. Định nghĩa margin lấy verbatim (dịch VI, giữ term EN, trích trang).
> **Đặc thù môn định tính:** KHÔNG calc/formula. Blocks: `comparison` + `flow (diagram)` + `callout`.
> **Quy ước:** diễn giải VI + term EN; quiz `stem`/`options` EN, `rationale`/`takeaway` VI (Cơ chế→Bẫy→Khóa); quiz **5 options A–E**, đúng 1.
> **Renderer contract:** `comparisonBlock` `columns.length === rows[i].cells.length + 1`; flow layout chỉ `horizontal`/`tree` (tree set `parent`); node id dùng `_`; edge label NGẮN.
> **Verify:** `npx tsc --noEmit` + `node rendercheck.mjs organizational-behavior topic-02` (375/768/1440, không hscroll). KHÔNG commit.

---

## 1. bigIdea (lens Chaliyah CHỐT 2026-07-02)

```ts
bigIdea:
  "Perception = quá trình ta tổ chức & diễn giải ấn tượng giác quan để gán nghĩa cho môi trường — 'ta không thấy thực tại; ta diễn giải rồi gọi đó là thực tại'; hành vi VÀ quyết định của ta dựa trên perception (đã bị shortcut/bias làm méo) chứ không dựa trên reality. Hiểu chuỗi perception → attribution → bias → decision để phán đoán, quyết định & đối xử công bằng hơn.",
bigIdeaPillars: [
  { label: "Perception ≠ reality", body: "Tổ chức & diễn giải sensory impressions để gán nghĩa. 'The world as it is perceived is the world that is behaviorally important' (R&J p96 = slide 14, 44)." },
  { label: "Vì sao méo", body: "Distortion nằm ở perceiver / target / situation; ta quy nhân internal↔external (Attribution Theory Kelley 1967 + distinctiveness/consensus/consistency). Sai lệch: FAE, self-serving, projection, blind-spot." },
  { label: "Shortcut → bias", body: "Selective perception, stereotype, halo, contrast, similar-to-me, recency/primacy + common biases (overconfidence, anchoring, confirmation, availability, escalation, hindsight…). Nhanh nhưng méo." },
  { label: "Từ perception đến decision", body: "Perception+bias làm méo quyết định: rational model (lý tưởng) vs bounded rationality & intuition (thực tế) + individual/org constraints; 3 ethical criteria; creativity 3-stage. Bias vô thức hại hơn phân biệt công khai (Nordell 2022)." },
],
```

## 2. Wiring

1. `const topic02: Chapter = { slug: "topic-02", order: 2, title: "Topic 02 — Perception & Common Biases", bigIdea, bigIdeaPillars, learningObjectives, knowledgeMap, sections, questions, status: "ready", source }`.
2. Array: thay `placeholder(2, "topic-02", ...)` → `topic02`.

## 3. learningObjectives (10)

```ts
learningObjectives: [
  "Định nghĩa perception (organize & interpret sensory impressions) và giải thích 'behavior dựa trên perception, không dựa trên reality'.",
  "Nêu 3 nhóm factors ảnh hưởng/gây méo perception: perceiver, target, situation.",
  "Mô tả perceptual process (observation → selection → organization → interpretation → response) và 3 nguyên lý Gestalt (figure-ground, proximity, common fate).",
  "Giải thích Attribution Theory (Kelley) và cách distinctiveness/consensus/consistency quyết định quy nhân internal vs external.",
  "Nhận diện các attribution/person-perception errors: FAE, self-serving bias, projection, blind-spot.",
  "Nhận diện các shortcuts trong judging others: selective perception, halo, contrast, stereotype, similar-to-me, recency, primacy.",
  "Giải thích link perception → decision making; so sánh rational model (6 bước) với bounded rationality (satisficing) & intuition.",
  "Nhận diện common biases & errors in decision making: overconfidence, anchoring, confirmation, availability, escalation of commitment, randomness, risk aversion, hindsight.",
  "Nêu individual differences (personality, gender, GMA, culture) + organizational constraints ảnh hưởng quyết định.",
  "Nêu 3 ethical decision criteria (utilitarianism, rights, justice) và three-stage model of creativity; giải thích vì sao unconscious bias hại hơn explicit discrimination.",
],
```

## 4. knowledgeMap (flow, tree, collapsible)

Cây 3 tầng. Root `perc` → 5 nhóm A-E → term nodes. `parent` + `sectionId` bắt buộc. `caption`: "Perception: (A) bản chất & factors, (B) attribution, (C) shortcut & bias, (D) từ perception đến decision, (E) ethics & creativity. Bấm node để mở."

```ts
nodes:
{ id:"perc", label:"Perception", group:"concept", sectionId:"s1", detail:"Tổ chức & diễn giải sensory impressions; behavior dựa trên perception, không trên reality." },
{ id:"g_basic", label:"A. Bản chất & factors", group:"concept", parent:"perc", sectionId:"s1" },
{ id:"g_attr", label:"B. Attribution", group:"concept", parent:"perc", sectionId:"s4" },
{ id:"g_short", label:"C. Shortcut & bias", group:"concept", parent:"perc", sectionId:"s6" },
{ id:"g_dec", label:"D. Perception → Decision", group:"concept", parent:"perc", sectionId:"s7" },
{ id:"g_eth", label:"E. Ethics & creativity", group:"concept", parent:"perc", sectionId:"s10" },
{ id:"t_def", label:"Định nghĩa & why", group:"term", parent:"g_basic", sectionId:"s1" },
{ id:"t_fac", label:"Factors + Gestalt + process", group:"term", parent:"g_basic", sectionId:"s2" },
{ id:"t_attr", label:"Attribution theory (3 factors)", group:"term", parent:"g_attr", sectionId:"s4" },
{ id:"t_err", label:"Attribution errors", group:"term", parent:"g_attr", sectionId:"s5" },
{ id:"t_short", label:"Shortcuts judging others", group:"term", parent:"g_short", sectionId:"s6" },
{ id:"t_rat", label:"Rational / bounded / intuition", group:"term", parent:"g_dec", sectionId:"s7" },
{ id:"t_dbias", label:"Biases in decision making", group:"term", parent:"g_dec", sectionId:"s8" },
{ id:"t_infl", label:"Individual & org influences", group:"term", parent:"g_dec", sectionId:"s9" },
{ id:"t_eth", label:"3 ethical criteria", group:"term", parent:"g_eth", sectionId:"s10" },
{ id:"t_cre", label:"Creativity 3-stage", group:"term", parent:"g_eth", sectionId:"s11" },
edges: perc→g_basic,g_attr,g_short,g_dec,g_eth ; g_basic→t_def,t_fac ; g_attr→t_attr,t_err ; g_short→t_short ; g_dec→t_rat,t_dbias,t_infl ; g_eth→t_eth,t_cre
```

---

## 5. Sections (11) — id: s1, s2, s4, s5, s6, s7, s8, s9, s10, s11 (BỎ QUA s3 để khớp knowledgeMap; id section = sectionId trong map)

### s1 — Perception là gì & vì sao quan trọng
- callout `key` "Định nghĩa perception": *"A process by which individuals organize and interpret their sensory impressions in order to give meaning to their environment"* (R&J 2019, sách p95, slide 14). "What we perceive can be substantially different from objective reality."
- callout `insight` "Perception ≠ reality — luận điểm trung tâm": *"People's behavior is based on their perception of what reality is, not on reality itself. The world as it is perceived is the world that is behaviorally important; our perception becomes the reality from which we act"* (sách p96 = slide 44 "We don't see reality. We interpret what we see and call it reality"). Different individuals "see" the same thing differently.
- keyTerms: perception.

### s2 — Factors gây méo + Gestalt + perceptual process
- comparison "3 nhóm factors ảnh hưởng perception (R&J p96-97; slide 15)" [3 cột → 2 cells]: Nhóm | Nội dung | Ví dụ
  - Perceiver | Attitudes, personality, motives, interests, past experiences, expectations — "we see what we want to see, because it conforms to our thinking" | Supervisor đi sớm → coi người đi sớm là high performer
  - Target | Đặc điểm của đối tượng; không nhìn target tách rời → quan hệ với background; nhóm gộp thứ gần/giống nhau | Người có "surface characteristics" giống nhau bị nhóm gộp
  - Situation/Context | Thời điểm, địa điểm, ánh sáng, nhiệt, yếu tố tình huống | Cùng một người "decked out" — thấy ở club tối thứ 7 vs lớp học sáng thứ 2
- flow "Perceptual process (slide 17)" layout horizontal: Observations (sensory) → Perceptual selection → Perceptual organization → Interpretation → Response. Caption: "Shortcut chèn vào giữa → bias & errors."
- comparison "3 nguyên lý Gestalt về visual perception (1920s; slide 19)" [2 cột → 1 cell]: Nguyên lý | Nội dung + ví dụ
  - Figure-Ground | Tổ chức perception bằng cách tách figure (đối tượng) khỏi background; không đánh giá người tách biệt. Ex. Contrast effect
  - Proximity | Các phần tử gần/chung nhau bị nhóm lại. Ex. Stereotype
  - Common Fate | Vật di chuyển cùng nhau bị coi là giống & liên quan. Ex. Recency effect
- keyTerms: perceiver, target, situation, Gestalt principles.

### s4 — Attribution: quy nhân internal vs external
- callout `key` "Attribution Theory (Kelley, 1967)": *"An attempt to determine whether an individual's behavior is internally or externally caused"* (sách margin p96). Internally caused = under personal control; externally caused = situation forced. Ex: đi trễ vì thức khuya (internal) vs kẹt xe (external). Ta interpret behavior & call it reality; attribution guides behavior bất kể đúng/sai (slide 24).
- comparison "3 yếu tố xác định internal/external (R&J p97-98, Exhibit 5-1)" [3 cột → 2 cells]: Yếu tố | Câu hỏi | Kết luận
  - Distinctiveness | Behavior này có KHÁC ở tình huống khác không (bất thường không)? | Cao (bất thường) → External; Thấp → Internal
  - Consensus | Người khác trong cùng tình huống có phản ứng GIỐNG không? | Cao (ai cũng vậy) → External; Thấp → Internal
  - Consistency | Người này có phản ứng NHẤT QUÁN theo thời gian không? | Cao → Internal; Thấp → External
- keyTerms: attribution theory, internal/external causation, distinctiveness, consensus, consistency.

### s5 — Attribution errors & person-perception biases
- comparison "4 sai lệch quy nhân (slide 25-28; R&J p98)" [2 cột → 1 cell]: Sai lệch | Nội dung
  - Fundamental Attribution Error (FAE) | Underestimate external, overestimate internal khi phán đoán người KHÁC ("đổ lỗi cá nhân trước, không phải tình huống")
  - Self-serving bias | Quy thành công của MÌNH cho internal, đổ thất bại cho external ("Success is mine, failure is someone else's")
  - Projection | Gán đặc điểm của mình cho người khác ("bạn cho rằng họ cũng thích cái mình thích")
  - Blind-spot bias | Thấy bias của người khác nhưng KHÔNG thấy của mình ("họ nên đổi, không phải tôi")
- keyTerms: FAE, self-serving bias, projection, blind-spot bias.

### s6 — Shortcuts trong judging others
- callout `note` "Vì sao shortcut sinh bias (R&J p99; slide 31)": shortcut giúp perceive nhanh & cho data hợp lệ để dự đoán, NHƯNG không foolproof — gây trouble khi tạo distortion đáng kể.
- comparison "Common shortcuts (slide 32-35; R&J p99)" [2 cột → 1 cell]: Shortcut | Nội dung (margin def sách khi có)
  - Selective perception | "Selectively interpret what one sees on the basis of one's interests, background, experience, and attitudes" — chỉ "thấy" cái mình muốn thấy
  - Halo effect | "Draw a general impression about an individual on the basis of a single characteristic"
  - Contrast effect | "Evaluation of a person's characteristics affected by comparisons with others recently encountered who rank higher/lower"
  - Stereotyping | "Judging someone on the basis of one's perception of the group to which that person belongs"
  - Similar-to-me effect | Vô thức thiên vị người giống mình (physically/professionally) — slide 34
  - Recency effect | Cái trình bày GẦN nhất được nhớ tốt nhất — slide 35
  - Primacy effect | Nhớ cái ĐẦU danh sách hơn ("first impression", "love at first sight") — slide 35
- keyTerms: selective perception, halo effect, contrast effect, stereotyping, recency effect, primacy effect.

### s7 — Perception → Decision making: rational, bounded, intuition
- callout `key` "Link perception ↔ decision (R&J p100)": **Decisions** = "choices made from among two or more alternatives"; **Problem** = "a discrepancy between the current state of affairs and some desired state". Quality of choices chịu ảnh hưởng của perception (data nào relevant?).
- flow "Rational Decision-Making Model — 6 bước (Exhibit 5-2, p101)" layout horizontal: Define the problem → Identify decision criteria → Allocate weights to criteria → Develop alternatives → Evaluate alternatives → Select best alternative.
- comparison "3 constructs ra quyết định (R&J p101-102)" [3 cột → 2 cells]: Construct | Định nghĩa (margin) | Thực tế
  - Rational decision-making model | "Describes how individuals SHOULD behave to maximize outcome" — complete info, unbiased, highest utility | Lý tưởng; ít ai theo trọn
  - Bounded rationality | "Making decisions by constructing simplified models that extract essential features without capturing all complexity" | Dẫn tới satisficing = chọn "good enough", không tối ưu
  - Intuitive decision making | "An unconscious process created out of distilled experience" — holistic, nhanh, affectively charged | Không rational nhưng không hẳn sai; bổ trợ rational
- keyTerms: decisions, problem, rational decision-making model, bounded rationality, satisficing, intuitive decision making.

### s8 — Common biases & errors in decision making
- comparison "8 biases/errors quyết định (R&J p102-104; slide 36-38)" [2 cột → 1 cell]: Bias | Nội dung (margin def)
  - Overconfidence bias | Quá tự tin về năng lực; người năng lực YẾU nhất hay overestimate nhất
  - Anchoring bias | "Fixate on initial information, fail to adequately adjust for subsequent information"
  - Confirmation bias | "Seek out information that reaffirms past choices; discount information that contradicts past judgments" (dạng selective perception)
  - Availability bias | "Base judgments on information that is readily available" (sợ bay > lái xe; sự kiện vivid/gần đây)
  - Escalation of commitment | "An increased commitment to a previous decision in spite of negative information" (khi thấy mình chịu trách nhiệm outcome)
  - Randomness error | "Believe that they can predict the outcome of random events" (mê tín, lucky T-shirt)
  - Risk aversion | "Prefer a sure gain of a moderate amount over a riskier outcome, even if riskier có expected payoff cao hơn"
  - Hindsight bias | "Believe falsely, after outcome is known, that one would have accurately predicted it"
- callout `note` "Giảm bias (Exhibit 5-3, p102)": Focus on goals; Look for information that disconfirms your beliefs; Don't create meaning out of random events; Increase your options.
- keyTerms: overconfidence bias, anchoring bias, confirmation bias, availability bias, escalation of commitment, randomness error, risk aversion, hindsight bias.

### s9 — Influences: individual differences & organizational constraints
- comparison "Individual differences (R&J p105-106)" [2 cột → 1 cell]: Yếu tố | Ảnh hưởng
  - Personality | Achievement striving → hay escalate commitment & susceptible hindsight; dutiful → ít escalate
  - Gender | Không stress: nam/nữ ngang nhau; stress: nam egocentric & risky hơn, nữ empathetic & quyết định tốt hơn
  - General Mental Ability (GMA) | Xử lý nhanh/chính xác hơn nhưng VẪN dính anchoring/overconfidence/escalation; được cảnh báo thì học tránh nhanh hơn
  - Cultural differences | Khác nhau ở time orientation, niềm tin giải quyết được vấn đề, ưa quyết định tập thể (Nhật consensus, US problem-solving)
- comparison "Organizational constraints (R&J p106-107)" [2 cột → 1 cell]: Ràng buộc | Nội dung
  - Performance evaluation systems | Manager bị chi phối bởi tiêu chí bị đánh giá
  - Reward systems | Gợi ý lựa chọn nào có payoff tốt hơn (thưởng risk-aversion → quyết định bảo thủ)
  - Formal regulations | Rules/policies giới hạn lựa chọn (ví dụ Taco Bell)
  - System-imposed time constraints | Deadline → khó gom đủ info
  - Historical precedents | Quyết định có context; budget năm nay ≈ năm ngoái
- keyTerms: (tuỳ chọn) escalation of commitment link.

### s10 — Ethics in decision making
- comparison "3 ethical decision criteria (R&J p107)" [2 cột → 1 cell]: Tiêu chí | Nội dung (margin)
  - Utilitarianism | "Decisions made to provide the greatest good for the greatest number" — thống trị business (efficiency/profit)
  - Rights | Tôn trọng & bảo vệ quyền cơ bản (privacy, free speech, due process); bảo vệ whistle-blowers
  - Justice | Áp & thực thi rules công bằng, phân phối benefits/costs đều (vd cùng lương 1 job; seniority khi layoff)
- callout `note` "Behavioral ethics & Lying (p108)": **Behavioral ethics** = "analyzing how people actually behave when confronted with ethical dilemmas" — ta không luôn theo chuẩn đã tuyên; ethical behavior đổi theo tình huống. Lying làm méo decision making (người ta chỉ phát hiện nói dối đúng ~47% — dưới cả đoán ngẫu nhiên).
- keyTerms: utilitarianism, rights, justice, whistle-blower, behavioral ethics.

### s11 — Creativity & applications + "So what"
- flow "Three-Stage Model of Creativity (Exhibit 5-4, p109)" layout tree (parent bắt buộc): Causes (Creative potential + Creative environment) → Creative behavior → Creative outcomes/Innovation (Novelty + Usefulness).
- comparison "Creative behavior — 4 bước (R&J p109)" [2 cột → 1 cell]: Bước | Nội dung (margin)
  - Problem formulation | Xác định vấn đề/cơ hội chưa được biết
  - Information gathering | Giải pháp khả dĩ "incubate" trong đầu
  - Idea generation | Phát triển giải pháp từ kiến thức liên quan
  - Idea evaluation | Đánh giá & chọn giải pháp tốt nhất
- callout `key` "Ứng dụng shortcut & bias trong tổ chức (slide 39) + SO WHAT": Employment interview (ấn tượng đầu chi phối); Performance expectations → **self-fulfilling prophecy / Pygmalion effect** (kỳ vọng biến thành hiện thực); Performance evaluation. **SO WHAT (Nordell 2022):** unconscious bias có thể hại hơn explicit discrimination — ngăn ta thấy rõ, hiểu đúng, tin nhau. Tóm: "We don't see reality. We interpret what we see and call it reality."
- keyTerms: creativity, three-stage model of creativity, self-fulfilling prophecy (Pygmalion effect).

---

## 6. Quiz (16 câu q01-q16)

Format: stem/options EN, rationale/takeaway VI (Cơ chế→Bẫy→Khóa), 5 options A-E đúng 1. Mỗi câu có `difficulty`, `conceptTested`, `takeaway`. Distractor bám các khái niệm cùng chương (dễ nhầm) — theo mẫu topic01.

1. **q01** Định nghĩa perception (organize & interpret sensory impressions).
2. **q02** "Behavior based on perception, not reality" — vì sao perception quan trọng.
3. **q03** 3 factors (perceiver/target/situation) — phân loại 1 ví dụ hoặc chọn cái KHÔNG phải.
4. **q04** Gestalt: match figure-ground/proximity/common-fate với ví dụ.
5. **q05** Attribution: distinctiveness cao → external (áp Exhibit 5-1).
6. **q06** Consensus/consistency → internal vs external (case).
7. **q07** Fundamental Attribution Error (overestimate internal, underestimate external về người khác).
8. **q08** Self-serving bias (success internal, failure external).
9. **q09** Shortcut: halo vs contrast vs stereotype (nhận diện từ tình huống).
10. **q10** Selective perception / confirmation bias phân biệt.
11. **q11** Rational model 6 bước — bước đầu (define the problem) / thứ tự.
12. **q12** Bounded rationality & satisficing ("good enough").
13. **q13** Intuition (unconscious, distilled experience).
14. **q14** Decision biases: anchoring / availability / escalation — nhận diện từ case (bám lương cũ = anchoring; bám quyết định sai = escalation).
15. **q15** Hindsight bias ("I knew it all along").
16. **q16** Ethics: utilitarianism vs rights vs justice — match, hoặc Pygmalion/self-fulfilling prophecy.

Đảm bảo mỗi câu đúng 1 `isCorrect: true`.

## 7. source

```ts
source:
  "Organizational Behavior (IM2017, Dr Truong Thi Lan Anh) — slide 'OB-Topic 2 - Perception and Common bias' + Reading 'Chapter 5 - Perceptual Processes' (Robbins & Judge, p94-110). Perception & attribution (R&J 2019); shortcuts & biases; decision making: rational model / bounded rationality / intuition; biases in decision; individual & organizational influences; 3 ethical criteria; three-stage model of creativity. Câu Nordell (The End of Bias, 2022) từ slide.",
```

## 8. Coverage matrix (Lớp B — slide + sách)

| # | Mục | Nguồn | Section | Ghi chú |
|---|---|---|---|---|
| 1 | Định nghĩa perception | slide 14 / sách p95 | s1 | |
| 2 | Perception ≠ reality (behavior dựa trên perception) | slide 44 / sách p96 | s1 | luận điểm trung tâm |
| 3 | 3 factors (perceiver/target/situation) | slide 15 / sách p96-97 | s2 | |
| 4 | Perceptual process | slide 17 | s2 | flow |
| 5 | Gestalt 3 nguyên lý | slide 19 | s2 | |
| 6 | Attribution theory + internal/external | slide 24 / sách p96-97 | s4 | |
| 7 | Distinctiveness/consensus/consistency (Exhibit 5-1) | **sách p97-98** | s4 | book-beyond-slide |
| 8 | FAE, self-serving, projection, blind-spot | slide 25-28 | s5 | |
| 9 | Shortcuts (selective/halo/contrast/stereotype/similar/recency/primacy) | slide 32-35 / sách p99 | s6 | |
| 10 | Link perception→decision (decisions, problem) | **sách p100** | s7 | book |
| 11 | Rational model 6 bước (Exhibit 5-2) | **sách p101** | s7 | book |
| 12 | Bounded rationality / satisficing / intuition | **sách p101-102** | s7 | book |
| 13 | 8 biases quyết định (+ Exhibit 5-3 reduce) | slide 36-38 / **sách p102-104** | s8 | book bổ sung availability/randomness/risk aversion |
| 14 | Individual differences (personality/gender/GMA/culture) | **sách p105-106** | s9 | book |
| 15 | Organizational constraints | **sách p106-107** | s9 | book |
| 16 | 3 ethical criteria + behavioral ethics + lying | **sách p107-108** | s10 | book |
| 17 | Creativity 3-stage + 4 bước creative behavior | **sách p108-110** | s11 | book |
| 18 | Applications (interview, Pygmalion, evaluation) + SO WHAT | slide 39, 46 | s11 | |

> Slide phủ perception/attribution/shortcut/bias/applications; sách bổ sung 3-factor attribution + TRỌN nửa decision making + ethics + creativity (Chaliyah chốt gồm trọn). Values/Culture của các chương khác KHÔNG thuộc đây.
