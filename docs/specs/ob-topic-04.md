# Spec: OB Topic 04 — Emotions (& Moods)

> **Loại:** Soạn mới topic hoàn chỉnh (rich teaching mode), thay placeholder `topic-04`. Helper đã port ở Topic 00-03.
> **Executor: Codex.** File `content/organizational-behavior.ts`. Đặt `const topic04` sau `topic03`; array thay `placeholder(4, "topic-04", ...)` → `topic04`.
> **Nguồn:**
> - **Slide `OB-Topic 4-Emotions-Dr Lan Anh`** = affect/emotion/mood + 6 universal, positive/negative (ratio 3:1 Fredrickson & Losada), emotional labor (felt/displayed), emotional dissonance (surface/deep acting), EI (2 approaches + cascading), emotion regulation techniques, implications.
> - **Reading `Chapter 3 - Emotions` (R&J, p60-74)** = thêm: moral emotions, affective circumplex + positivity offset, 9 sources of emotions/moods, Affective Events Theory (AET), EI chi tiết (case for/against), emotion regulation ethics, OB applications (selection/decision/creativity/motivation/leadership/negotiation/customer service/job attitudes/deviance/safety).
> **Scope:** slide + book-adds (AET, sources, moral emotions, applications) — Ch.3 tự chứa, không có topic riêng nên gồm theo sách>slide [[nguon-hoc-lieu-ob]].
> **Đặc thù định tính:** KHÔNG calc/formula. Blocks: comparison + flow + callout.
> **Quy ước:** VI + term EN; quiz stem/options EN, rationale/takeaway VI (Cơ chế→Bẫy→Khóa); 5 options A-E đúng 1.
> **Contract:** comparison `columns === cells+1`; flow `horizontal`/`tree` (tree set parent); node id `_`; edge label ngắn.
> **Verify:** `npx tsc --noEmit` + `node rendercheck.mjs organizational-behavior topic-04`. KHÔNG commit.

---

## 1. bigIdea (lens Chaliyah CHỐT 2026-07-02)
```ts
bigIdea:
  "Emotions & moods (affect) là phần TỰ NHIÊN, không thể tách khỏi nơi làm việc — không phải kẻ thù của lý trí. Hiểu WHAT (emotion vs mood, positive/negative), nguồn gốc, WHY tại chỗ làm (emotional labor → dissonance, qua Affective Events Theory), và HOW quản (emotional intelligence + emotion regulation) để làm việc, lãnh đạo & phục vụ tốt hơn.",
bigIdeaPillars: [
  { label: "WHAT — affect/emotion/mood", body: "Affect = dải cảm xúc rộng; Emotion (intense, có object, action-oriented, ngắn) vs Mood (ít intense, không rõ nguyên nhân, kéo dài; positive & negative affect) (R&J Exhibit 3-1). 6 universal emotions + moral emotions." },
  { label: "Nguồn & tại nơi làm", body: "9 sources (personality/affect intensity, time of day, day of week, weather, stress, sleep, exercise, age, sex); tại nơi làm → Emotional labor (felt vs displayed) → Emotional dissonance (lệch → burnout); surface vs deep acting." },
  { label: "Affective Events Theory", body: "Sự kiện tại nơi làm → phản ứng cảm xúc (điều tiết bởi personality/mood) → ảnh hưởng attitudes & behaviors (OCB, commitment, effort, intention to quit, deviance)." },
  { label: "HOW — quản lý", body: "Emotional Intelligence (perceive → understand → regulate; 2 approaches attributes/competencies) + emotion regulation (surface/deep acting, suppression, cognitive reappraisal, social sharing, mindfulness). Good management ≠ emotion-free; positive emotions → creativity & customer service." },
],
```

## 2. Wiring
`const topic04: Chapter = { slug:"topic-04", order:4, title:"Topic 04 — Emotions & Moods", bigIdea, bigIdeaPillars, learningObjectives, knowledgeMap, sections, questions, status:"ready", source }`. Array: thay `placeholder(4, ...)` → `topic04`.

## 3. learningObjectives (9)
```ts
learningObjectives: [
  "Phân biệt affect, emotion, mood (Exhibit 3-1) và nêu 6 universal emotions + moral emotions.",
  "Giải thích positive affect vs negative affect (affective circumplex) và positivity offset.",
  "Nêu các nguồn của emotions & moods: personality (affect intensity), time of day, day of week, weather (illusory correlation), stress, sleep, exercise, age, sex.",
  "Giải thích emotional labor và phân biệt felt vs displayed emotions, surface acting vs deep acting.",
  "Định nghĩa emotional dissonance và vai trò mindfulness trong việc giảm emotional exhaustion.",
  "Mô tả Affective Events Theory (AET): work events → emotional reactions → attitudes & behaviors.",
  "Giải thích Emotional Intelligence (3 khả năng perceive/understand/regulate; 2 approaches: attributes vs competencies) và tranh luận về EI.",
  "Nêu emotion regulation và các techniques (surface/deep acting, emotional suppression, cognitive reappraisal, social sharing, mindfulness) + vấn đề đạo đức.",
  "Áp dụng emotions/moods vào các OB issues (selection, decision making, creativity, motivation, leadership, negotiation, customer service, deviance, safety) và implications for managers.",
],
```

## 4. knowledgeMap (flow, tree, collapsible)
Root `emo` → 5 nhóm A-E. caption: "Emotions: (A) affect/emotion/mood, (B) nguồn, (C) tại nơi làm (labor/AET), (D) quản lý (EI/regulation), (E) OB applications."
```ts
{ id:"emo", label:"Emotions & moods", group:"concept", sectionId:"s1", detail:"Affect tự nhiên tại nơi làm; không phải kẻ thù lý trí." },
{ id:"g_what", label:"A. Affect/emotion/mood", group:"concept", parent:"emo", sectionId:"s1" },
{ id:"g_src", label:"B. Nguồn", group:"concept", parent:"emo", sectionId:"s3" },
{ id:"g_work", label:"C. Tại nơi làm", group:"concept", parent:"emo", sectionId:"s4" },
{ id:"g_mng", label:"D. Quản lý (EI/regulation)", group:"concept", parent:"emo", sectionId:"s7" },
{ id:"g_app", label:"E. OB applications", group:"concept", parent:"emo", sectionId:"s9" },
{ id:"t_aff", label:"Affect/emotion/mood + universal", group:"term", parent:"g_what", sectionId:"s1" },
{ id:"t_pn", label:"Positive/negative affect", group:"term", parent:"g_what", sectionId:"s2" },
{ id:"t_src", label:"9 sources", group:"term", parent:"g_src", sectionId:"s3" },
{ id:"t_lab", label:"Emotional labor (felt/displayed)", group:"term", parent:"g_work", sectionId:"s4" },
{ id:"t_dis", label:"Dissonance & mindfulness", group:"term", parent:"g_work", sectionId:"s5" },
{ id:"t_aet", label:"Affective Events Theory", group:"term", parent:"g_work", sectionId:"s6" },
{ id:"t_ei", label:"Emotional intelligence", group:"term", parent:"g_mng", sectionId:"s7" },
{ id:"t_reg", label:"Emotion regulation", group:"term", parent:"g_mng", sectionId:"s8" },
{ id:"t_app", label:"OB applications", group:"term", parent:"g_app", sectionId:"s9" },
edges: emo→g_what,g_src,g_work,g_mng,g_app ; g_what→t_aff,t_pn ; g_src→t_src ; g_work→t_lab,t_dis,t_aet ; g_mng→t_ei,t_reg ; g_app→t_app
```

---

## 5. Sections (9: s1-s9)

### s1 — WHAT: affect, emotion, mood + universal & moral emotions
- comparison "Affect / Emotion / Mood (R&J Exhibit 3-1, p60-61; slide 7)" [3 cột → 2 cells]: Khái niệm | Đặc điểm | Ghi chú
  - Affect | Dải cảm xúc rộng con người trải nghiệm | Bao trùm cả emotion & mood
  - Emotion | Intense, hướng vào object cụ thể, do sự kiện cụ thể, RẤT ngắn (giây/phút), có facial expression, action-oriented | 6 universal: anger, fear, sadness, happiness, disgust, surprise
  - Mood | Ít intense, nguyên nhân mơ hồ, kéo dài (giờ/ngày), gồm nhiều emotion, cognitive | 2 chiều: positive & negative affect
- callout `note` "Moral emotions (R&J p62)": *"Emotions có moral implications do phán xét tức thì về tình huống gây ra chúng"* — vd sympathy với người khổ, guilt về hành vi sai của mình, anger về bất công, contempt với người vô đạo đức; moral disgust khác disgust thường.
- keyTerms: affect, emotion, mood, moral emotions.

### s2 — Positive vs negative affect
- comparison "Positive affect vs Negative affect (R&J p62-63, Exhibit 3-2 Affective Circumplex)" [2 cột → 1 cell]: Chiều | Nội dung (margin)
  - Positive affect | Mood dimension: high = excitement/enthusiasm/elation; low = boredom/depression/fatigue
  - Negative affect | Mood dimension: high = nervousness/stress/anxiety; low = contentedness/calmness/serenity
- callout `insight` "Positivity offset & 3:1": **Positivity offset** = "xu hướng đa số người có mood hơi tích cực khi KHÔNG có gì đặc biệt xảy ra" (R&J p63). Emotions KHÔNG thể neutral. Slide: tỷ lệ positive:negative ~3:1 để thịnh vượng (Fredrickson & Losada).
- keyTerms: positive affect, negative affect, positivity offset.

### s3 — Nguồn của emotions & moods
- comparison "9 nguồn của emotion/mood (R&J p64-67)" [2 cột → 1 cell]: Nguồn | Điểm chính
  - Personality (affect intensity) | Affect intensity = khác biệt cá nhân về CƯỜNG ĐỘ trải nghiệm cảm xúc
  - Time of day | Positive affect thường đỉnh giữa ngày
  - Day of week | Positive affect cao nhất Fri/Sat/Sun, thấp nhất Monday
  - Weather | Thời tiết ít ảnh hưởng mood thật — do illusory correlation (liên hệ 2 việc vốn không liên quan)
  - Stress | Stress dồn tích → xấu mood, nhiều negative emotion
  - Sleep | Thiếu ngủ → dễ cáu, risk-prone, giảm job satisfaction & phán đoán đạo đức
  - Exercise | Tăng positive mood (mạnh nhất với người đang depressed)
  - Age | Positive mood TĂNG theo tuổi
  - Sex | Phụ nữ trải nghiệm cảm xúc mạnh & giữ lâu hơn, biểu lộ nhiều hơn (trừ anger)
- keyTerms: affect intensity, illusory correlation.

### s4 — Emotional labor: felt vs displayed
- callout `key` "Emotional Labor (R&J p68; slide 12)": *"Tình huống nhân viên biểu lộ organizationally desired emotions trong tương tác tại nơi làm"*. **Felt emotions** = cảm xúc THẬT; **Displayed emotions** = cảm xúc tổ chức YÊU CẦU/coi là phù hợp cho công việc (có thể lệch nhau).
- comparison "Surface acting vs Deep acting (R&J p68-69; slide 14)" [2 cột → 1 cell]: Cách | Nội dung & hệ quả
  - Surface acting | GIẤU cảm xúc bên trong & đổi biểu lộ theo display rules → emotional exhaustion, work-family conflict, insomnia, ít OCB, giảm satisfaction
  - Deep acting | ĐỔI cảm xúc bên trong thật theo display rules → ít tốn kém tâm lý hơn, gắn dương với satisfaction & performance (challenging hơn)
- keyTerms: emotional labor, felt emotions, displayed emotions, surface acting, deep acting.

### s5 — Emotional dissonance & mindfulness
- callout `key` "Emotional dissonance (R&J p69; slide 14)": *"Inconsistencies giữa cảm xúc người ta CẢM THẤY và cảm xúc họ THỂ HIỆN"* → dài hạn: emotional exhaustion → burnout, giảm performance & job satisfaction.
- callout `note` "Mindfulness đối phó": **Mindfulness** = "đánh giá tình huống cảm xúc một cách khách quan & có chủ đích ngay lúc đó" → tương quan ÂM với emotional exhaustion, DƯƠNG với satisfaction; giúp định hình phản ứng hành vi tốt hơn.
- keyTerms: emotional dissonance, mindfulness.

### s6 — Affective Events Theory (AET)
- flow "Affective Events Theory (R&J p69-70)" layout horizontal: Work events → Emotional reactions (điều tiết bởi personality & mood) → Attitudes & behaviors (job satisfaction, OCB, commitment, effort, intention to quit, deviance). Caption: "AET: cảm xúc là mắt xích giữa sự kiện & hành vi."
- callout `note` "2 thông điệp của AET": (1) cảm xúc cho biết cách work events ảnh hưởng performance & satisfaction; (2) đừng bỏ qua các sự kiện nhỏ vì chúng TÍCH LŨY.
- keyTerms: affective events theory (AET).

### s7 — Emotional Intelligence (EI)
- callout `key` "Emotional Intelligence (R&J p70; slide 16)": *"Khả năng phát hiện & quản lý emotional cues và thông tin"* — gồm 3 khả năng: (1) perceive emotions in self & others, (2) understand meaning of emotions, (3) regulate emotions accordingly (cascading model, Exhibit 3-4).
- comparison "2 approaches về EI (slide 16)" [2 cột → 1 cell]: Cách nhìn | Nội dung
  - As attributes (McShane & Von Glinow) | Ability perceive/express/assimilate/understand/regulate emotion; EQ tương quan IQ, đo được, tăng theo tuổi
  - As competencies (Goleman) | Bộ competencies HỌC được (qua coaching); trùng lặp với personality tests (Big Five)
- callout `note` "Tranh luận EI (R&J p71)": EI tương quan với job performance nhưng KHÔNG cao (phần lớn giải thích bởi emotional stability); khó đo (self-report). Dù vậy EI rất phổ biến & "here to stay".
- keyTerms: emotional intelligence (EI), cascading model of EI.

### s8 — Emotion regulation
- callout `key` "Emotion regulation (R&J p71)": *"Quá trình nhận diện & điều chỉnh cảm xúc mình cảm thấy"* — emotion management ability là predictor mạnh của task performance & OCB.
- comparison "Emotion regulation techniques (slide 20; R&J p71-72)" [2 cột → 1 cell]: Technique | Nội dung
  - Surface acting / Deep acting | (xem s4) đổi biểu lộ vs đổi cảm xúc thật
  - Emotional suppression | Chặn/lờ phản ứng cảm xúc ban đầu — hữu ích trong KHỦNG HOẢNG, nhưng dùng hằng ngày hại mental/health/relationships
  - Cognitive reappraisal | Đánh giá lại tình huống để đổi cảm xúc
  - Social sharing | Chia sẻ cảm xúc với người khác
  - Mindfulness | Quan sát cảm xúc không phán xét
- callout `insight` "Đạo đức của emotion regulation (R&J p72)": có tranh luận — kiểm soát cảm xúc có phải "acting" thiếu trung thực? "Fake it 'til you make it": giả vờ mood tốt có thể LÀM mood tốt thật (nghiên cứu Starbucks).
- keyTerms: emotion regulation, emotional suppression, cognitive reappraisal.

### s9 — OB applications & implications for managers
- comparison "OB applications of emotions & moods (R&J p72-74)" [2 cột → 1 cell]: Lĩnh vực | Vai trò cảm xúc/mood
  - Selection | Xét EI khi tuyển (việc cần social interaction cao)
  - Decision making | Positive emotions → quyết định tốt hơn; negative emotions ảnh hưởng khác nhau
  - Creativity | Mood tốt (activating) → sáng tạo hơn
  - Motivation | Mood tốt → nỗ lực & performance cao hơn
  - Leadership | Lãnh đạo truyền positive emotion → optimism/cooperation, task performance cao
  - Negotiation | Cảm xúc ảnh hưởng chiến lược & kết quả đàm phán
  - Customer service | Positive display → customer mood tốt hơn (emotional contagion) → chất lượng dịch vụ
  - Job attitudes & deviance / safety | Cảm xúc lan sang nhà & ngược lại; negative emotion → deviant behavior; mood xấu → tai nạn
- callout `key` "Implications for managers (slide 19)": Emotions là phần TỰ NHIÊN — good management KHÔNG phải tạo môi trường emotion-free. Positive emotions/moods → creativity; positive display → customer service tốt; emotional leadership (EI) → giải thích & dự đoán hành vi người khác → motivate & engage.
- keyTerms: emotional contagion.

---

## 6. Quiz (16 câu q01-q16)
Format: stem/options EN, rationale/takeaway VI (Cơ chế→Bẫy→Khóa), 5 options A-E đúng 1.

1. q01 Affect vs emotion vs mood (phân biệt).
2. q02 6 universal emotions.
3. q03 Emotion (object, ngắn) vs mood (không rõ nguyên nhân, kéo dài) — phân loại case.
4. q04 Positive vs negative affect / positivity offset.
5. q05 Sources: illusory correlation (weather) / affect intensity.
6. q06 Sources: day of week / sleep / age (nhận diện phát biểu đúng).
7. q07 Emotional labor: felt vs displayed emotions.
8. q08 Surface acting vs deep acting (phân biệt + hệ quả).
9. q09 Emotional dissonance (felt≠displayed → burnout).
10. q10 Mindfulness giảm emotional exhaustion.
11. q11 Affective Events Theory (work events → emotions → attitudes/behaviors).
12. q12 Emotional Intelligence — 3 khả năng / cascading.
13. q13 EI 2 approaches (attributes vs competencies) hoặc tranh luận EI.
14. q14 Emotion regulation: emotional suppression / cognitive reappraisal (nhận diện).
15. q15 OB application: customer service (emotional contagion) hoặc creativity.
16. q16 Implications for managers (emotions tự nhiên, không emotion-free; positive → creativity/service).

Mỗi câu đúng 1 `isCorrect: true`.

## 7. source
```ts
source:
  "Organizational Behavior (IM2017, Dr Truong Thi Lan Anh) — slide 'OB-Topic 4 - Emotions' + Reading 'Chapter 3 - Emotions' (Robbins & Judge, p60-74). Affect/emotion/mood (Exhibit 3-1), 6 universal + moral emotions, positive/negative affect (affective circumplex) + positivity offset, sources of emotions/moods, emotional labor (felt/displayed, surface/deep acting), emotional dissonance & mindfulness, Affective Events Theory, emotional intelligence (cascading model), emotion regulation, OB applications. Ratio 3:1 (Fredrickson & Losada) từ slide.",
```

## 8. Coverage matrix (Lớp B — slide + sách)
| # | Mục | Nguồn | Section |
|---|---|---|---|
| 1 | Affect/emotion/mood (Exhibit 3-1) | slide 7 / sách p60-61 | s1 |
| 2 | 6 universal emotions | slide 7 / sách p61 | s1 |
| 3 | Moral emotions | **sách p62** | s1 |
| 4 | Positive vs negative affect (circumplex) | **sách p62-63** | s2 |
| 5 | Positivity offset + ratio 3:1 | **sách p63** / slide 10 | s2 |
| 6 | 9 sources (affect intensity, time, day, weather, stress, sleep, exercise, age, sex) | **sách p64-67** | s3 |
| 7 | Emotional labor (felt/displayed) | slide 12 / sách p68 | s4 |
| 8 | Surface vs deep acting | slide 14 / sách p68-69 | s4 |
| 9 | Emotional dissonance + mindfulness | slide 14 / sách p69 | s5 |
| 10 | Affective Events Theory | **sách p69-70** | s6 |
| 11 | Emotional Intelligence (3 abilities, cascading, 2 approaches) | slide 16 / sách p70-71 | s7 |
| 12 | Emotion regulation techniques + ethics | slide 20 / sách p71-72 | s8 |
| 13 | OB applications (selection…safety) | **sách p72-74** | s9 |
| 14 | Implications for managers | slide 19 | s9 |

> Slide & sách khớp lớn; sách bổ sung moral emotions, circumplex/positivity offset, sources, AET, OB applications. Không có topic riêng nên gồm theo sách>slide.
