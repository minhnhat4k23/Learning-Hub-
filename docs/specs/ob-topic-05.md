# Spec: OB Topic 05 — Attitudes & Issues of Dissonance

> **Loại:** Soạn mới topic hoàn chỉnh (rich teaching mode), thay placeholder `topic-05`. Helper đã port ở Topic 00-04.
> **Executor: Codex.** File `content/organizational-behavior.ts`. Đặt `const topic05` sau `topic04`; array thay `placeholder(5, "topic-05", ...)` → `topic05`.
> **Nguồn:**
> - **Slide `OB-Topic 5-Attitudes and Dissonance-Dr Lan Anh`** = định nghĩa attitude, 3 components (ABC), consistency + cognitive dissonance (Festinger, 3 factors), attitude-behavior model (Schafer & Tait), major job attitudes, factors of job satisfaction, satisfaction vs engagement.
> - **Reading `Chapter 2 - Attitudes` (R&J, p47-57)** = thêm: margin defs 3 components, moderators of attitude-behavior, 6 major job attitudes (margin), measuring JS (2 approaches), causes (job conditions/CSE/pay/CSR), outcomes (performance/OCB/customer/life satisfaction), impact of dissatisfaction (EVLN framework), CWB.
> **Scope:** slide + book-adds (EVLN, CWB, outcomes structured, measuring 2 approaches, CSE) — Ch.2 tự chứa, gồm theo sách>slide [[nguon-hoc-lieu-ob]].
> **Đặc thù định tính:** KHÔNG calc/formula. Blocks: comparison + flow + callout.
> **Quy ước:** VI + term EN; quiz stem/options EN, rationale/takeaway VI (Cơ chế→Bẫy→Khóa); 5 options A-E đúng 1.
> **Contract:** comparison `columns === cells+1`; flow `horizontal`/`tree` (tree set parent); node id `_`; edge label ngắn.
> **Verify:** `npx tsc --noEmit` + `node rendercheck.mjs organizational-behavior topic-05`. KHÔNG commit.

---

## 1. bigIdea (lens Chaliyah CHỐT 2026-07-02)
```ts
bigIdea:
  "Attitude = câu đánh giá (favorable/unfavorable) về object/người/sự kiện, gồm 3 thành phần gắn chặt (cognitive–affective–behavioral). Con người khao khát consistency giữa attitude & behavior — khi bất tương thích (cognitive dissonance) sẽ tìm cách giảm. Trong OB, các major job attitudes (nổi bật job satisfaction & engagement) DỰ BÁO hành vi quan trọng: performance, OCB, và cách phản ứng khi bất mãn (EVLN: exit/voice/loyalty/neglect).",
bigIdeaPillars: [
  { label: "WHAT — attitude & 3 components (ABC)", body: "Evaluative statements về object/người/sự kiện (R&J). Cognitive (belief/evaluation) + Affective (feeling) + Behavioral (tendency to act) — gắn chặt (Exhibit 2-1). Attitude→behavior mạnh hơn khi có direct experience." },
  { label: "Consistency & cognitive dissonance", body: "Người ta tìm consistency; Festinger cognitive dissonance = bất tương thích giữa các attitude hoặc attitude–behavior; mong muốn giảm phụ thuộc importance / control / rewards. Moderators: importance, correspondence, accessibility, social pressure, direct experience." },
  { label: "Major job attitudes", body: "Job satisfaction, job involvement, psychological empowerment, organizational commitment, POS, employee engagement (+ slide: job embeddedness, OCB). Đo satisfaction 2 approaches (single global rating / summation of facets); causes: job conditions, CSE, pay, CSR." },
  { label: "Outcomes & phản ứng khi bất mãn", body: "Outcomes of satisfaction: job performance, OCB, customer satisfaction, life satisfaction. Dissatisfaction → EVLN (exit/voice/loyalty/neglect, 2 chiều active-passive × constructive-destructive) + CWB. Engagement vs satisfaction." },
],
```

## 2. Wiring
`const topic05: Chapter = { slug:"topic-05", order:5, title:"Topic 05 — Attitudes & Issues of Dissonance", bigIdea, bigIdeaPillars, learningObjectives, knowledgeMap, sections, questions, status:"ready", source }`. Array: thay `placeholder(5, ...)` → `topic05`.

## 3. learningObjectives (9)
```ts
learningObjectives: [
  "Định nghĩa attitude (evaluative statements) và đối chiếu 3 thành phần: cognitive, affective, behavioral (ABC model, Exhibit 2-1).",
  "Giải thích quan hệ attitude–behavior và các moderators (importance, correspondence, accessibility, social pressure, direct experience).",
  "Mô tả cognitive dissonance theory (Festinger) và 3 yếu tố quyết định mong muốn giảm dissonance (importance, control, rewards).",
  "So sánh các major job attitudes: job satisfaction, job involvement, psychological empowerment, organizational commitment, POS, employee engagement.",
  "Nêu 2 approaches đo job satisfaction: single global rating vs summation of job facets.",
  "Tóm tắt các nguyên nhân chính của job satisfaction (job conditions, personality/CSE, pay, CSR).",
  "Nêu 3 outcomes của job satisfaction: job performance, OCB, customer satisfaction (+ life satisfaction).",
  "Nêu 4 phản ứng của nhân viên khi bất mãn (EVLN: exit/voice/loyalty/neglect) và mối liên hệ với CWB.",
  "Phân biệt job satisfaction vs employee engagement và rút implications for managers.",
],
```

## 4. knowledgeMap (flow, tree, collapsible)
Root `att` → 5 nhóm A-E. caption: "Attitudes: (A) 3 components, (B) behavior & dissonance, (C) job attitudes, (D) satisfaction (đo/causes/outcomes), (E) dissatisfaction & engagement."
```ts
{ id:"att", label:"Attitudes", group:"concept", sectionId:"s1", detail:"Evaluative statements; gắn với behavior qua consistency & dissonance." },
{ id:"g_abc", label:"A. 3 components (ABC)", group:"concept", parent:"att", sectionId:"s1" },
{ id:"g_beh", label:"B. Behavior & dissonance", group:"concept", parent:"att", sectionId:"s2" },
{ id:"g_ja", label:"C. Major job attitudes", group:"concept", parent:"att", sectionId:"s4" },
{ id:"g_js", label:"D. Job satisfaction", group:"concept", parent:"att", sectionId:"s6" },
{ id:"g_out", label:"E. Dissatisfaction & engagement", group:"concept", parent:"att", sectionId:"s8" },
{ id:"t_abc", label:"Cognitive/Affective/Behavioral", group:"term", parent:"g_abc", sectionId:"s1" },
{ id:"t_diss", label:"Cognitive dissonance (Festinger)", group:"term", parent:"g_beh", sectionId:"s2" },
{ id:"t_mod", label:"Moderators attitude→behavior", group:"term", parent:"g_beh", sectionId:"s3" },
{ id:"t_ja", label:"6 major job attitudes", group:"term", parent:"g_ja", sectionId:"s4" },
{ id:"t_meas", label:"Đo JS (2 approaches)", group:"term", parent:"g_ja", sectionId:"s5" },
{ id:"t_cause", label:"Causes of JS", group:"term", parent:"g_js", sectionId:"s6" },
{ id:"t_outcome", label:"Outcomes of JS", group:"term", parent:"g_js", sectionId:"s7" },
{ id:"t_evln", label:"EVLN + CWB", group:"term", parent:"g_out", sectionId:"s8" },
{ id:"t_eng", label:"Engagement vs satisfaction", group:"term", parent:"g_out", sectionId:"s9" },
edges: att→g_abc,g_beh,g_ja,g_js,g_out ; g_abc→t_abc ; g_beh→t_diss,t_mod ; g_ja→t_ja,t_meas ; g_js→t_cause,t_outcome ; g_out→t_evln,t_eng
```

---

## 5. Sections (9: s1-s9)

### s1 — WHAT: attitude & 3 components (ABC)
- callout `key` "Định nghĩa Attitude (R&J p47; slide 6)": *"Evaluative statements or judgments — favorable or unfavorable — về objects, people, or events"* — phản ánh ta CẢM THẤY thế nào về điều gì đó.
- comparison "3 thành phần của attitude — ABC model (R&J Exhibit 2-1, p48)" [3 cột → 2 cells]: Thành phần | Định nghĩa (margin) | Ví dụ "sếp bất công"
  - Cognitive (evaluation) | Opinion/belief segment của attitude | "Sếp thăng chức cho đồng nghiệp xứng đáng ít hơn tôi → sếp bất công"
  - Affective (feeling) | Emotional/feeling segment của attitude | "Tôi GHÉT sếp!"
  - Behavioral (action) | Ý định behave theo cách nào đó với object | "Tôi đang tìm việc khác; đã than phiền về sếp"
- callout `note` "3 thành phần gắn chặt": cognition, affect, behavior đan xen — ta thường nghĩ cognition → affect → behavior, nhưng thực tế khó tách rời. ABC: attitude–behavior mạnh hơn khi có DIRECT personal experience.
- keyTerms: attitude, cognitive component, affective component, behavioral component.

### s2 — Cognitive dissonance & consistency
- callout `key` "Cognitive dissonance theory (Festinger 1957; R&J p49; slide 13)": *"Bất kỳ incompatibility nào cá nhân cảm nhận giữa hai/nhiều attitudes hoặc giữa behavior và attitudes"*. Người ta tìm consistency; khi có inconsistency → alter attitude/behavior HOẶC rationalize discrepancy.
- comparison "3 yếu tố quyết định mong muốn giảm dissonance (R&J p49; slide 13)" [2 cột → 1 cell]: Yếu tố | Nội dung
  - Importance | Tầm quan trọng của các elements gây ra dissonance
  - Influence/Control | Mức độ cá nhân tin mình KIỂM SOÁT được các elements
  - Rewards | Phần thưởng đi kèm — reward cao làm dissonance bớt khó chịu
- callout `note` "Emotional vs cognitive dissonance (slide 11)": cognitive dissonance = mâu thuẫn niềm tin/hành vi; emotional dissonance (Topic 4) = lệch cảm xúc felt vs displayed. Cả hai đều thúc đẩy tìm consistency.
- keyTerms: cognitive dissonance, consistency.

### s3 — Attitude–behavior relationship (moderators)
- comparison "Moderators làm attitude DỰ BÁO behavior mạnh hơn (R&J p49-50)" [2 cột → 1 cell]: Moderator | Nội dung
  - Importance | Attitude phản ánh giá trị nền tảng/self-interest → gắn chặt behavior
  - Correspondence to behavior | Attitude càng CỤ THỂ khớp behavior → dự báo tốt hơn
  - Accessibility | Attitude dễ nhớ/thường bày tỏ → dự báo tốt hơn
  - Social pressures | Áp lực xã hội có thể làm behavior lệch attitude
  - Direct experience | Có trải nghiệm trực tiếp → quan hệ attitude–behavior mạnh hơn
- flow "Attitude → Behavior (Schafer & Tait 1986; slide 16)" layout horizontal: Beliefs/Values + Personal needs → Attitude → Behavior. Caption: "Intervening factors: habits, social norms, expected consequences of behavior."
- keyTerms: (không bắt buộc thêm).

### s4 — Major job attitudes
- comparison "6 major job attitudes (R&J p50-51, margin defs; slide 18)" [2 cột → 1 cell]: Job attitude | Định nghĩa
  - Job satisfaction | Positive feeling về công việc từ đánh giá đặc điểm của nó
  - Job involvement | Mức độ cá nhân IDENTIFY với công việc, tích cực tham gia, coi performance quan trọng với self-worth
  - Psychological empowerment | Niềm tin về mức độ mình ảnh hưởng work environment, competence, ý nghĩa công việc & autonomy
  - Organizational commitment | Mức độ identify với tổ chức & mục tiêu, muốn DUY TRÌ membership ("gold standard")
  - Perceived organizational support (POS) | Mức độ nhân viên tin tổ chức coi trọng đóng góp & quan tâm well-being của họ
  - Employee engagement | Involvement, satisfaction & enthusiasm với công việc
- callout `note` "Thêm từ slide": slide còn liệt kê job embeddedness và organizational citizenship (OCB) trong nhóm job attitudes. POS mạnh hơn ở nền văn hóa power distance thấp.
- keyTerms: job satisfaction, job involvement, psychological empowerment, organizational commitment, perceived organizational support (POS), employee engagement.

### s5 — Đo job satisfaction (2 approaches)
- comparison "2 approaches đo job satisfaction (R&J p52)" [2 cột → 1 cell]: Approach | Nội dung
  - Single global rating | 1 câu hỏi tổng: "All things considered, how satisfied are you with your job?" (thang 1-5)
  - Summation of job facets | Cộng điểm nhiều facet: type of work, supervision, present pay, promotion opportunities, coworkers… → điểm tổng
- callout `note` "So sánh": summation tinh vi hơn nhưng single global rating vẫn dự báo tốt vì công việc là "tổng phức tạp" nhiều yếu tố.
- keyTerms: (không bắt buộc).

### s6 — Causes of job satisfaction
- comparison "Nguyên nhân của job satisfaction (R&J p53-55; slide 19)" [2 cột → 1 cell]: Nguyên nhân | Điểm chính
  - Job conditions | Công việc thú vị (training, variety, independence, control), feedback, social support — bản chất công việc (work itself) là mạnh nhất
  - Personality (Core Self-Evaluation) | CSE = tin vào inner worth & basic competence; CSE cao → hài lòng hơn
  - Pay | Tương quan tới mức "sống thoải mái"; sau đó bão hòa
  - Corporate Social Responsibility (CSR) | Hành động tự nguyện vì xã hội/môi trường vượt luật; ↑ satisfaction (đặc biệt millennials) nếu quản tốt & chân thật
- keyTerms: core self-evaluation (CSE), corporate social responsibility (CSR).

### s7 — Outcomes of job satisfaction
- comparison "Outcomes của job satisfaction (R&J p55-56)" [2 cột → 1 cell]: Outcome | Nội dung
  - Job performance | Happy workers → productive workers; tương quan robust (review 300 nghiên cứu)
  - Organizational Citizenship Behavior (OCB) | JS tương quan vừa với OCB — lý do chính là TRUST
  - Customer satisfaction | Nhân viên hài lòng → customer satisfaction & loyalty (frontline)
  - Life satisfaction | JS tương quan DƯƠNG với life satisfaction — công việc là phần quan trọng của đời
- keyTerms: organizational citizenship behavior (OCB).

### s8 — Impact of dissatisfaction: EVLN + CWB
- comparison "Exit–Voice–Loyalty–Neglect framework (R&J p56-57)" [3 cột → 2 cells]: Phản ứng | Định nghĩa (margin) | 2 chiều
  - Exit | Bất mãn qua hành vi hướng RỜI tổ chức (tìm việc mới, nghỉ) | Active / Destructive
  - Voice | Bất mãn qua nỗ lực TÍCH CỰC & xây dựng cải thiện điều kiện | Active / Constructive
  - Loyalty | Bất mãn qua việc THỤ ĐỘNG chờ điều kiện cải thiện (lạc quan) | Passive / Constructive
  - Neglect | Bất mãn qua việc để điều kiện XẤU ĐI (đi trễ, giảm nỗ lực, sai sót) | Passive / Destructive
- callout `key` "Counterproductive Work Behavior (CWB) (R&J p57)": *"Hành vi CỐ Ý của nhân viên đi ngược lợi ích tổ chức"* — substance abuse, trộm cắp, gossip, absenteeism, tardiness. Job dissatisfaction dự báo CWB (Exit & Neglect gắn với productivity/absenteeism/turnover).
- keyTerms: exit, voice, loyalty, neglect, counterproductive work behavior (CWB).

### s9 — Engagement vs satisfaction & implications for managers
- comparison "Satisfied vs Engaged employees (slide 24)" [2 cột → 1 cell]: Nhóm | Hành vi đặc trưng
  - Satisfied employees | Low absenteeism, low turnover, low substance abuse
  - Engaged employees | Persistence ở việc khó, helping others, taking initiative, going beyond expectations (và cũng satisfied)
- callout `key` "Implications for managers": đo & theo dõi job attitudes (attitude survey); tăng job satisfaction qua work itself/support/fairness; nhận diện dissatisfaction sớm (EVLN) trước khi thành turnover/CWB; engagement > mere satisfaction. "The last of the human freedoms is to choose one's attitude" (Viktor Frankl, slide 33).
- keyTerms: (không bắt buộc).

---

## 6. Quiz (16 câu q01-q16)
Format: stem/options EN, rationale/takeaway VI (Cơ chế→Bẫy→Khóa), 5 options A-E đúng 1.

1. q01 Định nghĩa attitude (evaluative statements).
2. q02 3 components — phân loại 1 phát biểu vào cognitive/affective/behavioral.
3. q03 ABC: attitude–behavior mạnh hơn khi direct experience.
4. q04 Cognitive dissonance (Festinger) — định nghĩa.
5. q05 3 yếu tố giảm dissonance (importance/control/rewards).
6. q06 Moderators attitude→behavior (correspondence/accessibility/social pressure).
7. q07 Job satisfaction vs job involvement (phân biệt).
8. q08 Organizational commitment / POS (nhận diện định nghĩa).
9. q09 Psychological empowerment.
10. q10 Đo JS: single global rating vs summation of facets.
11. q11 Causes of JS: work itself mạnh nhất / CSE / pay plateau.
12. q12 CSR & job satisfaction.
13. q13 Outcomes of JS: performance / OCB (trust) / customer satisfaction.
14. q14 EVLN — phân loại 1 hành vi vào exit/voice/loyalty/neglect (2 chiều).
15. q15 Counterproductive Work Behavior (CWB).
16. q16 Engagement vs satisfaction (phân biệt hành vi) / implication.

Mỗi câu đúng 1 `isCorrect: true`.

## 7. source
```ts
source:
  "Organizational Behavior (IM2017, Dr Truong Thi Lan Anh) — slide 'OB-Topic 5 - Attitudes and Dissonance' + Reading 'Chapter 2 - Attitudes' (Robbins & Judge, p47-57). Attitude & 3 components (ABC, Exhibit 2-1), cognitive dissonance (Festinger) + moderators, major job attitudes (job satisfaction/involvement/psychological empowerment/organizational commitment/POS/engagement), measuring JS (single global rating vs summation of facets), causes (job conditions/CSE/pay/CSR), outcomes (performance/OCB/customer/life satisfaction), impact of dissatisfaction (EVLN framework) + CWB, engagement vs satisfaction. Attitude-behavior model (Schafer & Tait) + Viktor Frankl từ slide.",
```

## 8. Coverage matrix (Lớp B — slide + sách)
| # | Mục | Nguồn | Section |
|---|---|---|---|
| 1 | Định nghĩa attitude | slide 6 / sách p47 | s1 |
| 2 | 3 components (ABC, Exhibit 2-1) | slide 7 / sách p48 | s1 |
| 3 | Cognitive dissonance (Festinger) + 3 factors | slide 13 / sách p49 | s2 |
| 4 | Emotional vs cognitive dissonance | slide 11 | s2 |
| 5 | Moderators attitude→behavior | **sách p49-50** | s3 |
| 6 | Attitude→behavior model (Schafer & Tait) | slide 16 | s3 |
| 7 | 6 major job attitudes | slide 18 / sách p50-51 | s4 |
| 8 | Measuring JS (2 approaches) | **sách p52** | s5 |
| 9 | Causes of JS (job conditions/CSE/pay/CSR) | slide 19 / sách p53-55 | s6 |
| 10 | Outcomes of JS (performance/OCB/customer/life) | **sách p55-56** | s7 |
| 11 | EVLN framework | **sách p56-57** | s8 |
| 12 | CWB | **sách p57** | s8 |
| 13 | Satisfaction vs engagement | slide 24-25 | s9 |
| 14 | Implications for managers | slide 18-33 | s9 |

> Slide & sách khớp lớn; sách bổ sung moderators, measuring 2 approaches, CSE, outcomes có cấu trúc, EVLN & CWB. Không có topic riêng nên gồm theo sách>slide.
