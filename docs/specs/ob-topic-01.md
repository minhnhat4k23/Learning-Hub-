# Spec: OB Topic 01 — Personality & Learning Styles

> **Loại:** Soạn mới topic hoàn chỉnh (rich teaching mode), thay placeholder `topic-01` môn `organizational-behavior`. Helper đã port ở Topic 00.
> **File cần sửa:** `content/organizational-behavior.ts`.
> **Nguồn (chỉ dùng Slides + Exercises + Exam):**
> - **Slide `OB-Topic 1-Personality and Learning styles-Dr Lan Anh`** = khung chính: định nghĩa & determinants, Situation Strength Theory, Trait Activation Theory, Jung reaction mode, MBTI, Big Five (OCEAN), Holland RIASEC, Person-Job/Org Fit, learning styles, preference skill development.
> - **Reading `Chapter 4 - Personality Factors` (Robbins & Judge)** = chuẩn hóa định nghĩa/framework.
> - **Exam (Midterm HK251, Q Personality) — TƯ DUY ra đề:** MBTI của BẠN → strengths/weaknesses trong communication; "Your behaviors define you" (traits = preferable behaviors quan sát được); link Weak/Strong situations + bias; cách quản lý weakness → quiz nhắm HIỂU + phân biệt + áp dụng.
> - **Bằng chứng neo lens:** compass "personality tự nhiên & nhất quán, bộc lộ tùy tình huống" ← slide 6 (R&J def) + slide 8 (most comfortable/natural) + slide 9 (Situation Strength: traits predict better in weak situations) + slide 11 (Trait Activation).
> **Đặc thù môn định tính:** KHÔNG calc/formula. Blocks: `comparison` + `diagram (flow)` + `callout`.
> **Quy ước:** diễn giải VI + term EN; quiz `stem`/`options` EN, `rationale`/`takeaway` VI (Cơ chế→Bẫy→Khóa); quiz **5 options A–E**.
> **bigIdea format:** compass (1 câu) + `bigIdeaPillars` (4 trụ).
> **Verify:** `npx tsc --noEmit` pass; `node rendercheck.mjs organizational-behavior topic-01`; KHÔNG commit.

---

## 0. Wiring

Helper `flowBlock`/`calloutBlock`/`comparisonBlock` đã có (Topic 00). KHÔNG cần calc/formula.
1. Tạo `const topic01: Chapter = { ... }` (đặt sau `topic00`).
2. Trong array, **thay** `placeholder(1, "topic-01", ...)` bằng `topic01`.

**Renderer contract:** `comparisonBlock` `columns.length === rows[i].cells.length + 1`; flow `edges.from/to` trỏ node có thật; node id `_`; flow layout chỉ `horizontal`/`tree` (tree set `parent`); edge label NGẮN.

---

## 1. Khung Chapter

```ts
const topic01: Chapter = {
  slug: "topic-01",
  order: 1,
  title: "Topic 01 — Personality & Learning Styles",
  bigIdea:
    "Personality = khuynh hướng hành vi tự nhiên & nhất quán của một người (nature + nurture) — nhưng nó chỉ BỘC LỘ thành hành vi tùy tình huống; hiểu nó qua các framework (Big Five, MBTI, Holland) để đạt person-job/organization fit và phát triển chính mình.",
  bigIdeaPillars: [
    { label: "Bản chất", body: "Cách một người react & interact với người khác — most comfortable/natural behaviors, nhất quán. Determinants: heredity (nature) + environment/situation (nurture)." },
    { label: "Tùy tình huống", body: "Situation Strength Theory (traits dự đoán behavior tốt hơn ở weak situations) + Trait Activation Theory (tình huống phù hợp 'kích hoạt' trait)." },
    { label: "Đo bằng framework", body: "Big Five/OCEAN (khoa học nhất) · MBTI (16 types — self-awareness, KHÔNG dùng tuyển chọn) · Holland/RIASEC (career fit)." },
    { label: "Ứng dụng", body: "Person-Job Fit + Person-Organization Fit → satisfaction, giảm turnover; cần diversified teams, không cloning." },
  ],
  learningObjectives: [
    "Định nghĩa personality (sum of ways an individual reacts to & interacts with others) và 2 nhóm determinants: heredity (nature) vs environment/situation (nurture); nêu cái nào thay đổi được.",
    "Giải thích Situation Strength Theory (strong vs weak situations) và vì sao personality traits dự đoán behavior tốt hơn ở weak situations.",
    "Giải thích Trait Activation Theory: tình huống phù hợp 'kích hoạt' một trait, tăng khả năng personality dự đoán behavior.",
    "Nêu 5 dimensions của Big Five (OCEAN) và implications for managers (conscientiousness → performance; emotional stability → satisfaction; extraversion, openness, agreeableness).",
    "Mô tả MBTI: 4 axes (E/I, S/N, T/F, J/P) → 16 types; nêu đúng cách dùng (self-awareness/counseling, KHÔNG dùng làm tiêu chí tuyển chọn chính).",
    "Giải thích Holland's RIASEC và Person-Job Fit: fit giữa personality type và occupational environment → satisfaction, lower turnover.",
    "Phân biệt Person-Job Fit vs Person-Organization Fit và giải thích ý nghĩa của diversified (không cloning) teams.",
    "Liên hệ personality với learning styles (theo MBTI & Big Five) và các yếu tố phát triển personality (heredity, environment, experience, active learning, efforts to change).",
  ],
  knowledgeMap: { /* xem mục 2 */ },
  sections: [ /* s1..s6 */ ],
  questions: [ /* q01..q11 (5 options A–E) */ ],
  status: "ready",
  source:
    "Organizational Behavior (IM2017, Dr Truong Thi Lan Anh) — slide 'OB-Topic 1 - Personality and Learning styles' + Reading 'Chapter 4 - Personality Factors' (Robbins & Judge). Định nghĩa & frameworks (Robbins & Judge 2019); Situation Strength & Trait Activation Theory; Big Five (OCEAN); MBTI; Holland RIASEC; Jung reaction mode (adapted 1920).",
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
    "Personality: (A) bản chất & determinants, (B) bộc lộ tùy tình huống, (C) đo bằng framework & ứng dụng fit. Bấm node để mở chi tiết.",
  nodes: [
    { id: "pers", label: "Personality", group: "concept", sectionId: "s1",
      detail: "Khuynh hướng hành vi tự nhiên & nhất quán; nature + nurture." },

    { id: "g_nat", label: "A. Bản chất & determinants", group: "concept", parent: "pers", sectionId: "s1",
      detail: "Định nghĩa, heredity vs environment, practical view." },
    { id: "g_sit", label: "B. Bộc lộ tùy tình huống", group: "concept", parent: "pers", sectionId: "s2",
      detail: "Situation Strength + Trait Activation + Jung." },
    { id: "g_fw", label: "C. Framework & ứng dụng", group: "concept", parent: "pers", sectionId: "s3",
      detail: "Big Five, MBTI, Holland, Person-Job/Org Fit." },

    // A
    { id: "t_def", label: "Định nghĩa & determinants", group: "term", parent: "g_nat", sectionId: "s1",
      detail: "Sum of ways react/interact; heredity (nature) + environment (nurture)." },
    // B
    { id: "t_sit", label: "Situation Strength & Trait Activation", group: "term", parent: "g_sit", sectionId: "s2",
      detail: "Weak > strong cho dự đoán; tình huống kích hoạt trait." },
    // C
    { id: "t_big5", label: "Big Five (OCEAN)", group: "term", parent: "g_fw", sectionId: "s3",
      detail: "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism." },
    { id: "t_mbti", label: "MBTI (16 types)", group: "term", parent: "g_fw", sectionId: "s4",
      detail: "E/I, S/N, T/F, J/P — self-awareness, không tuyển chọn." },
    { id: "t_holland", label: "Holland RIASEC & fit", group: "term", parent: "g_fw", sectionId: "s5",
      detail: "Career choice; Person-Job & Person-Organization Fit." },
    { id: "t_learn", label: "Learning styles & development", group: "term", parent: "g_fw", sectionId: "s6",
      detail: "Learning styles theo MBTI/Big Five; yếu tố phát triển personality." },
  ],
  edges: [
    { from: "pers", to: "g_nat" }, { from: "pers", to: "g_sit" }, { from: "pers", to: "g_fw" },
    { from: "g_nat", to: "t_def" },
    { from: "g_sit", to: "t_sit" },
    { from: "g_fw", to: "t_big5" }, { from: "g_fw", to: "t_mbti" }, { from: "g_fw", to: "t_holland" }, { from: "g_fw", to: "t_learn" },
  ],
},
```

---

## 3. Bối cảnh nội dung (VERIFIED — hard theory, trích slide/sách)

| Mục | Nội dung | Nguồn |
|---|---|---|
| Định nghĩa personality | "The sum of ways in which an individual reacts to and interacts with others" | slide 6 (R&J 2019) |
| Determinants | (1) Heredity by genes → nature/traits (KHÔNG đổi); (2) Environment & situation → nurture (CÓ thể đổi) | slide 6 |
| Practical view | Personality = MOST COMFORTABLE / naturally preferred behaviors, nhất quán khi react với situation/environment | slide 8 |
| Situation Strength Theory | Situation strength = mức norms/cues/standards quy định hành vi đúng. Strong: cho biết & ép hành vi đúng. Weak: "anything goes". Traits dự đoán behavior TỐT HƠN ở weak situations | slide 9 (R&J) |
| Trait Activation Theory | Một số situations/events "activate" một trait hơn tình huống khác; khi tình huống phù hợp, personality dự đoán behavior mạnh hơn | slide 11 (R&J) |
| Jung reaction mode | Unconscious/natural/spontaneous behavior (self-image) ↔ Conscious/adjusted/work-role behavior (work mask) | slide 10 (Carl Jung, 1920) |
| MBTI | 4 axes → 16 types: E/I (Extroverted/Introverted), S/N (Sensing/Intuitive), T/F (Thinking/Feeling), J/P (Judging/Perceiving). Dùng cho self-awareness/counseling; KHÔNG làm tiêu chí tuyển chọn chính | slide 13, 16 (R&J) |
| Big Five (OCEAN) | Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism (đối cực = emotional stability) | slide 22 (R&J) |
| Big Five implications | Conscientious → more job knowledge/effort/performance; Emotional stability → job satisfaction; Extroverts → happier, good social skills; Open → creative, good leaders; Agreeable → good in social settings | slide 24 |
| Holland RIASEC | 6 types: Realistic, Investigative, Artistic, Social, Enterprising, Conventional → career choice & Person-Job Fit; congruent job → satisfaction, lower turnover | slide 25-26 |
| Fit | Person-Job Fit (personality type ↔ occupational environment → satisfaction/turnover, tiêu chí tuyển sơ bộ); Person-Organization Fit (người hợp values của tổ chức) | slide 27 |

> Môn định tính — KHÔNG số/công thức. Giữ term EN.

---

## 4. Sections (s1 → s6)

> Mỗi section ≥1 comparison/flow/callout. Ghi nguồn (slide X / R&J Ch.4).

#### s1 — Personality là gì & determinants (NEO LENS)
- **calloutBlock** `"key"` "Định nghĩa personality" — "Personality = 'the sum of ways in which an individual reacts to and interacts with others' (Robbins & Judge, 2019). Cách thực dụng (slide 8): personality là những hành vi BẠN thấy THOẢI MÁI NHẤT & tự nhiên nhất, nhất quán khi phản ứng với môi trường. Đo personality = đo cách bạn NATURALLY PREFER làm việc."
- **flowBlock** `s1` "2 nhóm determinants" layout `horizontal`, nodes:
  - `s1_hered` "Heredity (nature)" — "Do gene → traits bẩm sinh; KHÓ/không thay đổi."
  - `s1_env` "Environment & situation (nurture)" — "Do sống/làm việc/trải nghiệm → CÓ thể thay đổi."
  - `s1_pers` "Personality" — "Kết hợp cả hai → khuynh hướng hành vi."
  - edges: `s1_hered→s1_pers` label "nature", `s1_env→s1_pers` label "nurture". caption: "Personality = nature + nurture; phần nurture mới là phần bạn rèn được (slide 6)."
- **calloutBlock** `"note"` "Traits & frameworks" — "Personality trait = đặc điểm mô tả hành vi của một người. Có nhiều framework đo personality: Big Five (OCEAN), MBTI, DISC, Holland (RIASEC)… Topic này tập trung Big Five, MBTI, Holland (slide 6)."
- **keyTerms:** personality, personality trait, heredity (nature), environment (nurture), personality framework.

#### s2 — Personality bộc lộ tùy tình huống
- **comparisonBlock** "Situation Strength Theory" — columns `["Loại tình huống", "Đặc điểm & hệ quả"]`; rows:
  - "Strong situation": cells `["Norms/cues/standards rõ → cho biết hành vi đúng, ép thể hiện, chặn hành vi sai → personality KHÓ bộc lộ"]`
  - "Weak situation": cells `["'Anything goes' → tự do thể hiện personality → traits DỰ ĐOÁN behavior tốt hơn"]`
- **calloutBlock** `"key"` "Trait Activation Theory" — "Một số tình huống/sự kiện 'ACTIVATE' (kích hoạt) một trait hơn tình huống khác. Khi tình huống phù hợp với trait, sức mạnh của personality trong việc dự đoán behavior CÀNG CAO (Robbins & Judge, 2019). Kết hợp với Situation Strength: personality không tự động thành behavior — nó cần đúng bối cảnh để bộc lộ."
- **calloutBlock** `"insight"` "'Your behaviors define you' — nhưng coi chừng bias" — "Người khác chỉ QUAN SÁT behavior của bạn để định nghĩa bạn là ai. Điều đó đúng với personality thật ở WEAK situations, nhưng có thể SAI ở STRONG situations (khi bạn phải theo work-mask) — hoặc do bias của họ. Đây chính là mạch tư duy đề thi Topic 1 (Jung: self-image ↔ work-mask, slide 10)."
- **keyTerms:** situation strength theory, strong situation, weak situation, trait activation theory, self-image, work mask.

#### s3 — Big Five (OCEAN)
- **comparisonBlock** "Big Five — OCEAN (Robbins & Judge)" — columns `["Dimension", "Người điểm CAO", "Implication công việc"]`; rows:
  - "Openness to experience": cells `["Tò mò, sáng tạo, thích cái mới", "Sáng tạo hơn, có thể là good leaders"]`
  - "Conscientiousness": cells `["Kỷ luật, có tổ chức, đáng tin", "Nhiều job knowledge, nỗ lực & performance cao hơn"]`
  - "Extraversion": cells `["Hướng ngoại, hòa đồng, quyết đoán", "Hạnh phúc hơn trong công việc, social skills tốt"]`
  - "Agreeableness": cells `["Hợp tác, ấm áp, tin người", "Tốt trong tình huống xã hội / teamwork"]`
  - "Neuroticism": cells `["Dễ lo âu, bất ổn cảm xúc (đối cực = emotional stability)", "Emotional stability cao → job satisfaction"]`
- **calloutBlock** `"note"` "Vì sao Big Five 'khoa học' nhất" — "Big Five được nghiên cứu thực nghiệm nhiều nhất, dự đoán tốt các outcome công việc (performance, satisfaction). Đây là lý do OB ưu tiên Big Five hơn MBTI khi cần bằng chứng (slide 24)."
- **keyTerms:** Big Five (OCEAN), openness, conscientiousness, extraversion, agreeableness, neuroticism, emotional stability.

#### s4 — MBTI (16 types)
- **comparisonBlock** "MBTI — 4 axes" — columns `["Axis", "Cực 1", "Cực 2"]`; rows:
  - "Hướng năng lượng": cells `["Extroverted (E) — sociable, assertive", "Introverted (I) — quiet, reflective"]`
  - "Thu nhận thông tin": cells `["Sensing (S) — practical, orderly, facts", "Intuitive (N) — patterns, ý tưởng"]`
  - "Ra quyết định": cells `["Thinking (T) — reason & logic", "Feeling (F) — values & emotions"]`
  - "Lối sống": cells `["Judging (J) — order & structure", "Perceiving (P) — flexible, spontaneous"]`
- **calloutBlock** `"key"` "Dùng MBTI đúng cách" — "4 axes → 16 personality types. MBTI là công cụ TỐT cho self-awareness & counseling — hiểu mình & giao tiếp. NHƯNG không nên dùng làm tiêu chí tuyển chọn chính (key selection criterion) vì độ tin cậy/ổn định hạn chế (slide 13). Mỗi preference còn gợi vùng skill cần phát triển (vd E→listening, I→assertiveness, T→interpersonal relations, F→delegation…)."
- **keyTerms:** MBTI, extroverted/introverted, sensing/intuitive, thinking/feeling, judging/perceiving, self-awareness.

#### s5 — Holland RIASEC & Person-Fit
- **comparisonBlock** "Holland RIASEC — personality ↔ nghề" — columns `["Type", "Đặc điểm tính cách", "Nghề congruent"]`; rows:
  - "Realistic": cells `["Shy, genuine, persistent, stable, practical", "Mechanic, assembly-line worker, farmer"]`
  - "Investigative": cells `["Analytical, original, curious, independent", "Biologist, economist, mathematician, news reporter"]`
  - "Artistic": cells `["Imaginative, disorderly, idealistic, emotional", "Painter, musician, writer, interior decorator"]`
  - "Social": cells `["Sociable, friendly, cooperative, understanding", "Social worker, teacher, counselor"]`
  - "Enterprising": cells `["Self-confident, ambitious, energetic, domineering", "Lawyer, real estate agent, small-business manager"]`
  - "Conventional": cells `["Conforming, efficient, practical, inflexible", "Accountant, corporate manager, bank teller"]`
- **calloutBlock** `"key"` "Person-Job Fit vs Person-Organization Fit" — "Person-Job Fit = độ khớp giữa personality type & occupational environment → quyết định satisfaction & turnover → là điều kiện SƠ BỘ khi tuyển. Person-Organization Fit = người bị thu hút & được chọn bởi tổ chức khớp VALUES của họ. Holland: người làm nghề hợp tính cách → hài lòng hơn, turnover thấp hơn (slide 25-27)."
- **keyTerms:** Holland RIASEC, person-job fit, person-organization fit, congruent occupation, turnover.

#### s6 — Learning styles & phát triển personality
- **comparisonBlock** "Learning styles theo Big Five (Keka Varadwaj, 2017)" — columns `["Big Five dimension", "Learning style hiệu quả"]`; rows:
  - "Openness": cells `["Synthesis-analysis, elaborative processing, methodological study"]`
  - "Conscientiousness": cells `["Methodological study, synthesis-analysis, elaborative processing, fact retention"]`
  - "Extraversion": cells `["Elaborative processing"]`
  - "Agreeableness": cells `["Mọi style đều cần khi học nhóm (team)"]`
  - "Neuroticism (less)": cells `["Mọi style đều cần ÍT neuroticism"]`
- **calloutBlock** `"note"` "Personality có phát triển được không" — "Personality development = Heredity (gene) + Environments (sống/làm) + Experiences + Active learning + Efforts to change. Phần nature khó đổi, nhưng qua trải nghiệm & nỗ lực có ý thức, ta điều chỉnh được cách bộc lộ (slide 20)."
- **calloutBlock** `"insight"` "Vì sao cần diversified teams" — "Vì mỗi personality mạnh/yếu ở việc khác nhau, team nên ĐA DẠNG personality (diversified) chứ không 'cloning' (nhân bản một kiểu người). Hiểu personality người khác giúp giao tiếp & phối hợp tốt hơn — bù trừ điểm yếu cho nhau (slide 28-29)."
- **keyTerms:** learning style, personality development, active learning, diversified team, elaborative processing.

---

## 5. Quiz (11 câu — concept + application; 5 options A–E)

> stem/options EN; rationale VI Cơ chế→Bẫy→Khóa; 5 options; đáp án rải. Bám tư duy đề (hiểu + phân biệt + áp dụng vào bản thân).

1. **q01** (basic) — *Personality definition.* Đúng: sum of ways an individual reacts to & interacts with others; = most comfortable/natural behaviors, nhất quán. Bẫy: coi personality = hành vi nhất thời; = kỹ năng học được.
2. **q02** (intermediate) — *Determinants nature/nurture.* Đúng: heredity (nature, khó đổi) + environment/situation (nurture, đổi được). Bẫy: coi personality 100% bẩm sinh; coi cả hai đều đổi được như nhau.
3. **q03** (intermediate) — *Situation Strength.* Đúng: traits dự đoán behavior tốt hơn ở WEAK situations; strong situations ép hành vi. Bẫy: đảo (traits mạnh ở strong); coi tình huống không ảnh hưởng.
4. **q04** (intermediate) — *Trait Activation Theory.* Đúng: tình huống phù hợp 'kích hoạt' trait → personality dự đoán behavior mạnh hơn. Bẫy: coi trait luôn bộc lộ như nhau; nhầm với situation strength.
5. **q05** (intermediate) — *Big Five dimensions.* Đúng: OCEAN = openness, conscientiousness, extraversion, agreeableness, neuroticism. Bẫy: thêm/thiếu dimension; nhầm với MBTI axes.
6. **q06** (advanced, application) — *Big Five implications.* Cho tình huống (vd cần người kỷ luật, làm việc chắc) → trait nào? Đúng: conscientiousness → job knowledge/effort/performance. Bẫy: gán performance cho extraversion; nhầm openness với conscientiousness.
7. **q07** (intermediate) — *MBTI axes.* Đúng: E/I, S/N, T/F, J/P → 16 types. Bẫy: thêm trục thứ 5; nhầm S/N với T/F.
8. **q08** (intermediate) — *MBTI đúng cách dùng.* Đúng: self-awareness/counseling; KHÔNG dùng làm tiêu chí tuyển chọn chính. Bẫy: coi MBTI là công cụ tuyển dụng chuẩn.
9. **q09** (intermediate) — *Holland RIASEC / Person-Job Fit.* Đúng: fit personality type ↔ occupational environment → satisfaction, lower turnover. Bẫy: coi fit không ảnh hưởng turnover; nhầm RIASEC với Big Five.
10. **q10** (advanced, application) — *Person-Job vs Person-Organization Fit.* Cho tình huống (vd người hợp VALUES công ty) → loại fit nào? Đúng: Person-Organization Fit (values); Person-Job Fit là fit với công việc. Bẫy: đảo hai.
11. **q11** (intermediate) — *Diversified vs cloning teams.* Đúng: cần đội đa dạng personality để bù trừ điểm yếu, không nhân bản một kiểu. Bẫy: coi team đồng nhất personality là tối ưu.

---

## 6. Lưu ý thực thi (Codex)

- Dùng helper có sẵn (Topic 00 đã port). KHÔNG calc/formula. KHÔNG sửa `content/types.ts`. Giữ `placeholder()` cho topic 02–12.
- Tạo `topic01` + **thay** `placeholder(1, "topic-01", …)` bằng `topic01`.
- **bigIdea:** compass 1 câu + 4 pillars như mục 1.
- Ngôn ngữ: lý thuyết VI + term EN; định nghĩa personality giữ câu tiếng Anh gốc trong callout (trích R&J). Quiz stem/options EN; rationale VI.
- Quiz **5 options** (a–e), đúng 1 `isCorrect`, đáp án rải.
- `comparisonBlock` `cells = columns − 1`: bảng 3 cột (s3 Big Five, s4 MBTI, s5 Holland → 2 cells); bảng 2 cột (s2 situation, s6 learning → 1 cell).
- Flow: knowledgeMap = `tree` set `parent`; s1 = `horizontal`; node id `_`; edge label ngắn.
- `status: "ready"` chỉ sau khi Lớp A pass.

---

## 7. Verify (Codex chạy)

```bash
npx tsc --noEmit
```
- Pass (0 error); `comparisonBlock` `cells === columns − 1`; flow edges hợp lệ, node id `_`, knowledgeMap (`tree`) set `parent`; quiz mỗi câu 5 options đúng 1.
- Sau tsc: `node rendercheck.mjs organizational-behavior topic-01` (375/768/1440) — bigIdea + knowledgeMap + 6 section + 11 quiz; không hscroll. Báo Chaliyah. **KHÔNG commit.**

---

## 8. Coverage matrix (Lớp B — "KHÔNG SÓT kiến thức")

Đối chiếu slide OB-Topic 1 + Reading Ch.4. ✅ Có · ⬜ Thiếu · ⚠️ Rút gọn.

| # | Mục | Nguồn | Section | TT |
|---|---|---|---|---|
| 1 | Định nghĩa personality | slide 6 | s1 | ✅ |
| 2 | Determinants (heredity/nature vs environment/nurture) + cái nào đổi | slide 6 | s1 | ✅ |
| 3 | Practical view (most comfortable/natural, assessing) | slide 8 | s1 | ✅ |
| 4 | Situation Strength Theory (strong/weak) | slide 9 | s2 | ✅ |
| 5 | Trait Activation Theory | slide 11 | s2 | ✅ |
| 6 | Jung reaction mode (self-image / work-mask) | slide 10 | s2 | ✅ |
| 7 | MBTI (4 axes, 16 types) + đúng cách dùng | slide 13, 16 | s4 | ✅ |
| 8 | MBTI preference → skill development | slide 19 | s4 | ✅ (nêu trong callout) |
| 9 | Big Five (OCEAN) | slide 22 | s3 | ✅ |
| 10 | Big Five implications for managers | slide 24 | s3 | ✅ |
| 11 | Holland RIASEC + congruent occupations | slide 25-26 | s5 | ✅ |
| 12 | Person-Job Fit & Person-Organization Fit | slide 27 | s5 | ✅ |
| 13 | Learning styles (MBTI & Big Five) | slide 21, 23 | s6 | ✅ (Big Five bảng; MBTI nêu) |
| 14 | Personality development factors | slide 20 | s6 | ✅ |
| 15 | Diversified vs cloning teams | slide 28-29 | s6 | ✅ |

> 15/15 mục phủ đủ. Không số → không "sai số". Định nghĩa/framework trích slide + R&J, giữ term EN.

---

## 9. PATCH — bổ sung completeness (Lớp B re-check, Chaliyah chốt "vá cả 4")

> **Executor: Codex.** File: `content/organizational-behavior.ts`, trong `const topic01`. 4 chỗ. Sau khi vá: `npx tsc --noEmit` + `node rendercheck.mjs organizational-behavior topic-01`. KHÔNG commit.
> **Lý do:** re-check phát hiện 4 điểm slide bị rút gọn/thiếu; web là nơi học chính nên phải phủ đủ, không để "…".

### Patch 1 — s4: bảng đầy đủ 8 preference → skill development (slide 19)

Trong section `s4` (MBTI), **thêm block sau** vào cuối mảng `blocks` (sau callout "Dùng MBTI đúng cách"):

```ts
comparisonBlock(
  "MBTI preference → vùng kỹ năng nên phát triển (slide 19)",
  ["Preference", "Vùng kỹ năng nên phát triển"],
  [
    { label: "Extroverted (E)", cells: ["Listening to others"] },
    { label: "Introverted (I)", cells: ["Assertiveness, influence, power"] },
    { label: "Sensing (S)", cells: ["Creative problem solving, risk taking, visioning"] },
    { label: "Intuitive (N)", cells: ["Planning, management by objectives, situation diagnosis"] },
    { label: "Thinking (T)", cells: ["Interpersonal relations, empowerment, giving & receiving positive performance feedback"] },
    { label: "Feeling (F)", cells: ["Delegation, power, giving & receiving critical performance feedback"] },
    { label: "Judging (J)", cells: ["Stress management, negotiation strategies, change management"] },
    { label: "Perceiving (P)", cells: ["Time management, decision making, project planning"] },
  ],
),
```

**Đồng thời sửa** câu cuối callout "Dùng MBTI đúng cách" — bỏ list rút gọn có "…", đổi thành:
`... Mỗi preference còn gợi một vùng kỹ năng nên phát triển (xem bảng dưới).`

### Patch 2 — s6: bảng learning styles theo MBTI (slide 21)

Trong section `s6`, **thêm block sau NGAY TRƯỚC** bảng "Learning styles theo Big Five":

```ts
comparisonBlock(
  "Learning styles theo MBTI (The Myers-Briggs Company, myersbriggs.org — Type & Learning; link ở slide 21)",
  ["MBTI preference", "Cách học ưa thích (theo trang gốc)"],
  [
    { label: "Extraversion (E)", cells: ["Thích các hoạt động có nói chuyện với người khác & vận động, tương tác với môi trường"] },
    { label: "Introversion (I)", cells: ["Thích không gian riêng/yên tĩnh để suy ngẫm, xử lý suy nghĩ bên trong"] },
    { label: "Sensing (S)", cells: ["Thích hướng dẫn rõ ràng, chi tiết, cụ thể"] },
    { label: "Intuition (N)", cells: ["Thích một framework để tự làm phần việc sáng tạo, độc đáo của mình"] },
    { label: "Thinking (T)", cells: ["Lớp học tổ chức theo hệ thống logic giúp họ làm tốt hơn"] },
    { label: "Feeling (F)", cells: ["Học tốt nhất ở lớp ấm áp, thân thiện, giáo viên quan tâm nhu cầu cảm xúc"] },
    { label: "Judging (J)", cells: ["Cần kế hoạch rõ ràng & lớp học có tổ chức để làm tốt nhất"] },
    { label: "Perceiving (P)", cells: ["Thích linh hoạt để đi theo sự tò mò, khám phá nhiều mối quan tâm/trải nghiệm"] },
  ],
),
```

Thêm 1 callout `note` NGAY SAU bảng này:
```ts
calloutBlock(
  "note",
  "S/N đóng vai trò then chốt trong cách học",
  "Theo The Myers-Briggs Company, cặp Sensing–Intuition có vai trò then chốt trong learning vì nó phản ánh CÁCH ta chú ý tới trải nghiệm & tiếp nhận thông tin đang học (myersbriggs.org — Type & Learning).",
)
```

> ✅ **Honesty (VERIFIED, fetch 07/2026):** nội dung bảng lấy TRỰC TIẾP từ trang `myersbriggs.org/type-use-for-everyday-life/type-and-learning` mà slide 21 dẫn (The Myers-Briggs Company). Trang tổ chức theo **4 cặp dichotomy** (không phải whole-type), diễn giải VI giữ term EN. Attribution ghi trong title + callout — Codex giữ nguyên, KHÔNG rút gọn nguồn.

### Patch 3 — s5: caveat "flexibility" (slide 25)

Trong section `s5`, callout "Person-Job Fit vs Person-Organization Fit", **thêm vào cuối `body`**:

`... Lưu ý (slide 25): dù vậy, managers thường quan tâm FLEXIBILITY của ứng viên hơn khả năng làm một công việc CỤ THỂ — vì yêu cầu công việc thay đổi liên tục.`

### Patch 4 — s2: bảng Jung self-image ↔ work-mask (slide 10)

Trong section `s2`, **thêm block sau** NGAY SAU callout `insight` "'Your behaviors define you'":

```ts
comparisonBlock(
  "Jung: self-image (natural) ↔ work-mask (adjusted) — slide 10",
  ["Khía cạnh", "Self-image (natural)", "Work-mask (adjusted)"],
  [
    { label: "Mức ý thức", cells: ["Unconscious behavior", "Conscious behavior"] },
    { label: "Tính chất hành vi", cells: ["Spontaneous, natural, pressure behavior", "Work role, desired, adjusted behavior"] },
    { label: "Chuẩn tham chiếu", cells: ["Bản thân — less stressful", "Corporate culture"] },
    { label: "Năng lượng tiêu hao", cells: ["Less energy", "More energy"] },
  ],
),
```

Nguồn: *Adapted from Carl Jung, 1920* (giữ keyTerm "self-image / work mask" hiện có).

### Coverage matrix sau patch (cập nhật #6, #8, #13)

| # | Mục | Nguồn | Section | TT |
|---|---|---|---|---|
| 6 | Jung reaction mode (self-image / work-mask) | slide 10 | s2 | ✅ **comparison block** |
| 8 | MBTI preference → skill development | slide 19 | s4 | ✅ **bảng đủ 8** |
| 11 | Holland RIASEC + congruent + **flexibility caveat** | slide 25-26 | s5 | ✅ |
| 13 | Learning styles (MBTI & Big Five) | slide 21, 23 | s6 | ✅ **2 bảng** |

> Sau patch: 15/15 mục **phủ đủ độ sâu slide** (không còn "…"/"nêu trong callout"). Section s2/s4/s5/s6 mỗi cái +1 block; contract `columns = cells+1` đã đảm bảo (Patch 1/2 = 2 cột→1 cell; Patch 4 = 3 cột→2 cell).

---

## 10. PATCH-BOOK — bổ sung kiến thức SÁCH vượt slide (Chaliyah chốt 2026-07-02)

> **Nguyên tắc mới ([[nguon-hoc-lieu-ob]]):** sách (Reading Ch.4 — R&J *Personality Factors*, p77-94) = đọc thêm để nắm HẾT, **thầy cô ra đề dựa vào sách**. Kiến thức sách KHÔNG có trên slide → PHẢI thêm. Nguồn đã đọc trực tiếp (VERIFIED, vision-read PDF, có số trang).
> **Executor: Codex.** File `content/organizational-behavior.ts`, `const topic01`. Verify: `npx tsc --noEmit` + `node rendercheck.mjs organizational-behavior topic-01`. KHÔNG commit.
> **Loại trừ (thuộc topic khác — KHÔNG thêm vào Topic 1):** VALUES (Terminal/Instrumental, Generational) → Topic 03; Cultural Values (Hofstede, GLOBE) → Topic 11.
> **Định nghĩa margin lấy verbatim từ sách** (dịch VI, giữ term EN) — Codex giữ nguyên page cite.

### 10A. Enrich s1 — Assessing personality + determinants nuance

Thêm **2 block** vào cuối `blocks` của s1 (sau callout "Traits & frameworks"):

```ts
comparisonBlock(
  "Assessing personality — 2 cách đo (R&J Ch.4, p78)",
  ["Cách đo", "Đặc điểm & lưu ý"],
  [
    { label: "Self-report surveys", cells: ["Tự đánh giá bản thân trên loạt yếu tố. BIAS: khi biết điểm dùng để tuyển, người ta tự chấm cao hơn ~½ độ lệch chuẩn ở conscientiousness & emotional stability; tâm trạng xấu → điểm thiếu chính xác."] },
    { label: "Observer-ratings surveys", cells: ["Người khác (đồng nghiệp/quan sát viên) đánh giá độc lập. Dự đoán job success TỐT HƠN self-report; kết hợp CẢ HAI → dự đoán performance tốt nhất khi ra quyết định tuyển dụng."] },
  ],
),
calloutBlock(
  "note",
  "Culture & heredity — điều sách nhấn thêm (p78-79)",
  "Culture ảnh hưởng cách tự đánh giá: nước cá nhân chủ nghĩa (US, Úc) → self-enhancement; nước tập thể (Đài Loan, TQ, Hàn) → self-diminishment (p78). Về determinants: R&J nói personality là kết quả của CẢ heredity + environment, nhưng nghiên cứu nghiêng về TẦM QUAN TRỌNG CỦA HEREDITY hơn (heredity = yếu tố xác định lúc thụ thai). Dù vậy personality VẪN đổi: điểm dependability tăng theo tuổi, dễ đổi ở tuổi teen, ổn định hơn khi trưởng thành (p79).",
),
```
keyTerms thêm cho s1: `{ term: "observer-ratings survey", definition: "Khảo sát personality do người khác (đồng nghiệp/quan sát viên) đánh giá độc lập; dự đoán job success tốt hơn self-report (R&J Ch.4, p78)." }`

### 10B. Enrich s2 — Components of Situation Strength (p86)

Thêm block vào cuối `blocks` của s2 (sau bảng Jung):

```ts
comparisonBlock(
  "Components of Situation Strength — 4 yếu tố (R&J Ch.4, p86)",
  ["Thành phần", "Nghĩa", "Ví dụ tình huống MẠNH"],
  [
    { label: "Clarity", cells: ["Cues về nhiệm vụ/trách nhiệm rõ ràng & sẵn có", "Lao công (rõ) > bảo mẫu"] },
    { label: "Consistency", cells: ["Các cues tương thích, cùng chỉ về một behavior", "Y tá cấp cứu > quản lý"] },
    { label: "Constraints", cells: ["Tự do quyết định bị giới hạn bởi lực bên ngoài", "Thanh tra ngân hàng > kiểm lâm"] },
    { label: "Consequences", cells: ["Quyết định/hành động có hệ quả quan trọng cho tổ chức", "Bác sĩ phẫu thuật > giáo viên ngoại ngữ"] },
  ],
),
```

### 10C. Enrich s3 — Big Five "at work" (p81-82)

Thêm callout vào cuối `blocks` của s3:

```ts
calloutBlock(
  "note",
  "Big Five 'at work' — chi tiết sách (R&J Ch.4, p81-82)",
  "Conscientiousness → nhiều job knowledge, nỗ lực & performance cao. Emotional stability → life/job satisfaction, ít stress; cao → thích ứng thay đổi, thấp (neurotic) → burnout, work-family conflict. Extraversion → tốt ở việc nhiều tương tác, dự báo leadership emergence (nhưng impulsive hơn, dễ vắng mặt). Openness → dễ là leader hiệu quả, thoải mái với ambiguity, thích ứng thay đổi. Agreeableness → được yêu thích, tốt ở việc interpersonal, tuân thủ, ít tai nạn, đóng góp OCB; thấp → CWB, ít thành công về earnings.",
),
```

### 10D. Enrich s4 — MBTI weaknesses (p80)

Thêm callout vào cuối `blocks` của s4:

```ts
calloutBlock(
  "note",
  "MBTI — điểm yếu theo sách (R&J Ch.4, p80)",
  "4 vấn đề: (1) ép người vào MỘT type (introvert HOẶC extrovert, không có ở giữa); (2) reliability — làm lại test thường ra kết quả khác; (3) khó diễn giải (facet phức tạp, cần chuyên gia); (4) kết quả có xu hướng KHÔNG liên hệ job performance. → củng cố vì sao MBTI không dùng làm tiêu chí tuyển chọn chính.",
),
```

### 10E. NEW s7 — The Dark Triad & other dark traits (p82-84)

Thêm section MỚI **s7** (sau s6, trước mảng đóng của sections). knowledgeMap sẽ trỏ tới (10G):

```ts
{
  id: "s7",
  heading: "The Dark Triad & trait 'tối' (sách)",
  blocks: [
    comparisonBlock(
      "The Dark Triad — 3 trait socially undesirable (R&J Ch.4, p82-84)",
      ["Trait", "Định nghĩa (sách)", "Liên hệ OB"],
      [
        { label: "Machiavellianism", cells: ["Mức độ một người thực dụng, giữ khoảng cách cảm xúc, tin rằng cứu cánh biện minh phương tiện", "Thao túng & thắng nhiều hơn, ít bị thuyết phục; nhiều CWB; KHÔNG dự đoán job performance tổng thể; thắng ngắn hạn, mất dài hạn (không được ưa)"] },
        { label: "Narcissism", cells: ["Xu hướng kiêu ngạo, cảm giác vĩ đại về bản thân, cần được ngưỡng mộ quá mức, thấy mình có đặc quyền (entitlement)", "Ít liên hệ job effectiveness/OCB; predictor mạnh của CWB (ở văn hóa cá nhân chủ nghĩa); nhưng charismatic hơn, mức VỪA phải tương quan dương với leadership"] },
        { label: "Psychopathy", cells: ["Xu hướng thiếu quan tâm người khác & thiếu tội lỗi/hối hận khi hành động gây hại", "Dùng hard influence tactics (đe dọa, thao túng), bullying; literature CHƯA nhất quán về tầm quan trọng với job performance"] },
      ],
    ),
    calloutBlock(
      "note",
      "Dark Triad là gì & 'Other Traits' (p82, 84)",
      "Trừ neuroticism, các Big Five là socially DESIRABLE; Dark Triad = 3 trait socially UNDESIRABLE nhưng ai cũng có ở mức độ khác nhau — KHÔNG phải bệnh lý lâm sàng, bộc lộ mạnh khi stress, kéo dài → derail sự nghiệp. Sách còn nêu 5 'aberrant' trait dựa trên Big Five: antisocial, borderline, schizotypal, obsessive-compulsive, avoidant.",
    ),
  ],
  keyTerms: [
    { term: "Dark Triad", definition: "Chùm 3 trait tiêu cực: Machiavellianism, narcissism, psychopathy (R&J Ch.4, p82)." },
    { term: "Machiavellianism", definition: "Mức độ một người thực dụng, giữ khoảng cách cảm xúc, tin cứu cánh biện minh phương tiện (p83)." },
    { term: "narcissism", definition: "Xu hướng kiêu ngạo, cảm giác vĩ đại về bản thân, cần ngưỡng mộ quá mức, có sense of entitlement (p83)." },
    { term: "psychopathy", definition: "Xu hướng thiếu quan tâm người khác & thiếu tội lỗi/hối hận khi hành động gây hại (p84)." },
  ],
},
```

### 10F. NEW s8 — Other Personality Attributes Relevant to OB (p85)

Thêm section MỚI **s8** (sau s7):

```ts
{
  id: "s8",
  heading: "Personality attributes khác cho OB (sách)",
  blocks: [
    comparisonBlock(
      "3 thuộc tính personality quan trọng cho OB (R&J Ch.4, p85)",
      ["Thuộc tính", "Nội dung (sách)"],
      [
        { label: "Core Self-Evaluation (CSE)", cells: ["Kết luận nền tảng một người có về năng lực, sự thành thạo & giá trị bản thân. CSE dương → thấy mình hiệu quả & làm chủ môi trường; đặt mục tiêu tham vọng hơn, cam kết & kiên trì hơn, performance & customer service tốt hơn. CSE âm → tự ghét, nghi ngờ năng lực, thấy bất lực."] },
        { label: "Self-Monitoring", cells: ["Trait đo khả năng điều chỉnh hành vi theo yếu tố tình huống bên ngoài. High self-monitor: thích ứng cao, nhạy external cues, hành xử khác nhau tùy bối cảnh. Low self-monitor: bộc lộ bản chất thật ở mọi tình huống → nhất quán cao ('I'm true to myself')."] },
        { label: "Proactive Personality", cells: ["Người chủ động nhận diện cơ hội, thể hiện initiative, hành động & kiên trì đến khi tạo được thay đổi có ý nghĩa. Job performance cao hơn, cần ít giám sát, dễ đạt career success; team proactive → sáng tạo hơn."] },
      ],
    ),
  ],
  keyTerms: [
    { term: "core self-evaluation (CSE)", definition: "Kết luận nền tảng về năng lực, sự thành thạo & giá trị bản thân; CSE dương → performance & satisfaction cao hơn (R&J Ch.4, p85)." },
    { term: "self-monitoring", definition: "Trait đo khả năng điều chỉnh hành vi theo yếu tố tình huống bên ngoài; high → thích ứng, low → nhất quán (p85)." },
    { term: "proactive personality", definition: "Người chủ động nhận diện cơ hội, initiative, hành động & kiên trì tới khi có thay đổi có ý nghĩa (p85)." },
  ],
},
```

### 10G. knowledgeMap — thêm nhánh D (sách)

Thêm **3 node** + **3 edge** (nhóm mới "D. Trait nâng cao (sách)"):
```ts
// nodes (thêm vào mảng nodes):
{ id: "g_book", label: "D. Trait nâng cao (sách)", group: "concept", parent: "pers", sectionId: "s7", detail: "Dark Triad + CSE/Self-Monitoring/Proactive — phần sách vượt slide." },
{ id: "t_dark", label: "Dark Triad", group: "term", parent: "g_book", sectionId: "s7", detail: "Machiavellianism, narcissism, psychopathy + other aberrant traits." },
{ id: "t_attr", label: "CSE · Self-Monitoring · Proactive", group: "term", parent: "g_book", sectionId: "s8", detail: "3 personality attributes quan trọng cho OB." },
// edges (thêm vào mảng edges):
{ from: "pers", to: "g_book" },
{ from: "g_book", to: "t_dark" },
{ from: "g_book", to: "t_attr" },
```
Cập nhật `caption` knowledgeMap → thêm "(D) trait nâng cao từ sách".

### 10H. learningObjectives — thêm 4

```ts
"Phân biệt assessing personality: self-report vs observer-ratings và vì sao nên dùng CẢ HAI khi ra quyết định tuyển dụng (R&J Ch.4).",
"Nêu 4 components of situation strength: clarity, consistency, constraints, consequences (R&J Ch.4).",
"Nêu The Dark Triad (Machiavellianism, narcissism, psychopathy) và liên hệ với hành vi OB (CWB, leadership).",
"Giải thích Core Self-Evaluation, Self-Monitoring, Proactive Personality như các personality attributes quan trọng cho OB.",
```

### 10I. Quiz — thêm q12-q16 (5 câu, sách)

Format y chang q01-q11: stem/options EN, rationale/takeaway VI (Cơ chế→Bẫy→Khóa), 5 options đúng 1.

1. **q12** — conceptTested "Machiavellianism". Stem: *"An employee is pragmatic, keeps emotional distance, and believes the ends justify the means. Which Dark Triad trait is this?"* Đúng: **Machiavellianism**. Distractors: Narcissism / Psychopathy / Conscientiousness / Self-monitoring.
2. **q13** — conceptTested "Dark Triad members". Stem: *"Which set correctly lists the Dark Triad?"* Đúng: **Machiavellianism, narcissism, psychopathy**. Distractors trộn Big Five/Holland/CSE.
3. **q14** — conceptTested "Core Self-Evaluation". Stem: *"Bottom-line conclusions individuals hold about their capabilities, competence, and worth best define…"* Đúng: **Core self-evaluation (CSE)**. Distractors: Self-monitoring / Proactive personality / Narcissism / Emotional stability.
4. **q15** — conceptTested "Self-monitoring high vs low". Stem: *"Zoe says 'I'm true to myself, I don't remake myself to please others.' She is best described as…"* Đúng: **a low self-monitor (high behavioral consistency)**. Distractors: high self-monitor / high Machiavellian / proactive / high CSE.
5. **q16** — conceptTested "Components of situation strength". Stem: *"Which is NOT one of the four components of situation strength?"* Đúng (đáp án 'không thuộc'): **Congruence**. 4 thành phần đúng làm distractors: Clarity / Consistency / Constraints / Consequences.

Answer key mới: q12=Machiavellianism, q13=Mach/narc/psycho, q14=CSE, q15=low self-monitor, q16=Congruence (câu phủ định). Codex đặt `isCorrect: true` đúng option, viết rationale VI theo mẫu.

### 10J. status/source + coverage matrix

- Giữ `status: "ready"`.
- Cập nhật `source`: thêm "Bổ sung từ Reading Ch.4 (R&J Personality Factors, p77-94): assessing personality, MBTI weaknesses, Big Five at work, Dark Triad, CSE/Self-Monitoring/Proactive, components of situation strength."
- Coverage matrix mới (book):

| # | Mục sách | Trang | Section | TT |
|---|---|---|---|---|
| 16 | Assessing personality (self-report vs observer-ratings, culture) | p78 | s1 | ✅ |
| 17 | Heredity > environment + personality đổi theo tuổi | p79 | s1 | ✅ |
| 18 | MBTI weaknesses (4 vấn đề) | p80 | s4 | ✅ |
| 19 | Big Five at work (chi tiết từng trait) | p81-82 | s3 | ✅ |
| 20 | The Dark Triad (Mach/narc/psycho) + other aberrant | p82-84 | s7 | ✅ |
| 21 | CSE / Self-Monitoring / Proactive Personality | p85 | s8 | ✅ |
| 22 | Components of Situation Strength (4 yếu tố) | p86 | s2 | ✅ |

> Sau §10: Topic 1 phủ CẢ slide (15/15) LẪN sách (7 mục vượt slide). Values/Culture để Topic 03/11. Tổng: 8 sections (s1-s8), 16 quiz (q01-q16). Contract comparison: 10A/10F = 2 cột→1 cell; 10B/10E = 3 cột→2 cell — đã đảm bảo.
