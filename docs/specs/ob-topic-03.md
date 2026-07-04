# Spec: OB Topic 03 — Personal Values (& Valuing Diversity)

> **Loại:** Soạn mới topic hoàn chỉnh (rich teaching mode), thay placeholder `topic-03` môn `organizational-behavior`. Helper đã port ở Topic 00-02.
> **Executor: Codex.** File `content/organizational-behavior.ts`. Đặt `const topic03` sau `topic02`; array thay `placeholder(3, "topic-03", ...)` → `topic03`.
> **Nguồn (Slides + Reading Chapter):**
> - **Slide `OB-Topic 3-Personal values-Dr Lan Anh`** = nửa VALUES: định nghĩa + attributes (content/intensity), value system, Rokeach Value Survey, Schwartz, generational values, values development (Massey/S.E.E.), Person-Organization Fit (supplementary/complementary), VIA character strengths, culture fit/add.
> - **Reading `Chapter 6 - Valuing diversity` (R&J, p113-127)** = nửa DIVERSITY: surface/deep-level diversity, discrimination (Exhibit 6-1), stereotyping, stereotype threat, biographical characteristics, other differentiating characteristics, ability (intellectual+physical), diversity management.
> **Scope Chaliyah CHỐT: GỒM CẢ HAI** (values slide + diversity book Ch.6). Nối bằng: deep-level diversity = khác biệt về VALUES + personality.
> **Quy tắc [[nguon-hoc-lieu-ob]]:** sách > slide. Định nghĩa margin (sách) lấy verbatim, dịch VI, giữ term EN, trích trang. Lý thuyết values (Rokeach/Schwartz/generational/Massey) neo theo SLIDE (R&J-cited) vì Reading Ch.6 không chứa.
> **Đặc thù môn định tính:** KHÔNG calc/formula. Blocks: comparison + flow + callout.
> **Quy ước:** VI + term EN; quiz stem/options EN, rationale/takeaway VI (Cơ chế→Bẫy→Khóa); 5 options A-E đúng 1.
> **Renderer contract:** comparison `columns === cells+1`; flow layout `horizontal`/`tree` (tree set parent); node id `_`; edge label ngắn.
> **Verify:** `npx tsc --noEmit` + `node rendercheck.mjs organizational-behavior topic-03` (375/768/1440). KHÔNG commit.

---

## 1. bigIdea (lens Chaliyah CHỐT 2026-07-02)

```ts
bigIdea:
  "Personal values = niềm tin cơ bản về điều gì đúng/tốt/đáng mong muốn, xếp theo mức quan trọng (value system) — chúng giải thích emotion/motivation, định hình hành vi, và lộ ra khi ta phải trade-off. Vì values + personality chính là 'deep-level diversity', hiểu & tôn trọng khác biệt (thay vì để surface-level kích hoạt stereotype/discrimination) giúp đạt person-organization fit và quản trị đa dạng hiệu quả.",
bigIdeaPillars: [
  { label: "Values là gì", body: "'Basic convictions about what is right, good, or desirable' (R&J 2019). Content + intensity attribute; xếp hạng → value system; lộ ra trong trade-off. Rokeach Value Survey; Schwartz." },
  { label: "Values hình thành & đổi", body: "~90% set by age 10, lock-in ~20; đổi chỉ qua Significant Emotional Event (Massey); generational values (Veterans→Gen Z); VIA character strengths." },
  { label: "Surface vs deep-level diversity", body: "Surface (age/gender/race/ethnicity/disability → dễ kích hoạt stereotype) vs deep-level (values/personality/work preferences → quan trọng dần khi hiểu nhau) (sách p114); discrimination, stereotyping, stereotype threat." },
  { label: "Fit & quản trị đa dạng", body: "Person-Organization Fit = value congruence (supplementary + complementary, Kristof 1996); ability (intellectual+physical) match job; manage diversity effectively; culture fit vs culture add, unconscious bias." },
],
```

## 2. Wiring
`const topic03: Chapter = { slug:"topic-03", order:3, title:"Topic 03 — Personal Values & Valuing Diversity", bigIdea, bigIdeaPillars, learningObjectives, knowledgeMap, sections, questions, status:"ready", source }`. Array: thay `placeholder(3, ...)` → `topic03`.

## 3. learningObjectives (10)
```ts
learningObjectives: [
  "Định nghĩa values (basic convictions về right/good/desirable) và 2 attributes: content & intensity; giải thích value system & vai trò trong trade-off.",
  "Mô tả cách phân loại values: Rokeach Value Survey (terminal vs instrumental), Schwartz; và VIA character strengths.",
  "Giải thích generational values (Veterans → Gen Z) và cách personal values hình thành/đổi (Massey: ~90% by 10, lock-in ~20, Significant Emotional Event).",
  "Giải thích Person-Organization Fit = value congruence, phân biệt supplementary fit vs complementary fit (Kristof); culture fit vs culture add.",
  "Phân biệt surface-level vs deep-level diversity và giải thích vì sao deep-level (values/personality) quan trọng dần.",
  "Định nghĩa discrimination & stereotyping; nêu stereotype threat và 6 forms of discrimination in organizations (Exhibit 6-1).",
  "Nêu các biographical characteristics (age, gender, race/ethnicity, disability, hidden disabilities) và other differentiating characteristics (religion, sexual orientation & gender identity, cultural identity) liên quan OB.",
  "Phân biệt intellectual abilities (7 dimensions + GMA) và physical abilities (9 types) và ý nghĩa ability–job matching.",
  "Mô tả diversity management: positive diversity climate, diversity management, attract/select/develop/retain diverse employees.",
  "Giải thích implications for managers: chọn người vừa có ability vừa có value system khớp org; unconscious bias & 'right person, wrong place'.",
],
```

## 4. knowledgeMap (flow, tree, collapsible)
Root `val` → 5 nhóm A-E. `parent` + `sectionId` bắt buộc. caption: "Personal values → diversity: (A) values là gì, (B) phân loại & phát triển, (C) fit, (D) diversity & discrimination, (E) ability & quản trị đa dạng."
```ts
{ id:"val", label:"Personal values", group:"concept", sectionId:"s1", detail:"Niềm tin về right/good/desirable; deep-level diversity." },
{ id:"g_val", label:"A. Values là gì", group:"concept", parent:"val", sectionId:"s1" },
{ id:"g_cls", label:"B. Phân loại & phát triển", group:"concept", parent:"val", sectionId:"s2" },
{ id:"g_fit", label:"C. Person-Org Fit", group:"concept", parent:"val", sectionId:"s5" },
{ id:"g_div", label:"D. Diversity & discrimination", group:"concept", parent:"val", sectionId:"s6" },
{ id:"g_abl", label:"E. Ability & quản trị đa dạng", group:"concept", parent:"val", sectionId:"s9" },
{ id:"t_vdef", label:"Định nghĩa & attributes", group:"term", parent:"g_val", sectionId:"s1" },
{ id:"t_cls", label:"Rokeach/Schwartz/VIA", group:"term", parent:"g_cls", sectionId:"s2" },
{ id:"t_gen", label:"Generational values", group:"term", parent:"g_cls", sectionId:"s3" },
{ id:"t_dev", label:"Values development (Massey)", group:"term", parent:"g_cls", sectionId:"s4" },
{ id:"t_fit", label:"P-O Fit (supp/comp)", group:"term", parent:"g_fit", sectionId:"s5" },
{ id:"t_div", label:"Surface/deep + stereotype threat", group:"term", parent:"g_div", sectionId:"s6" },
{ id:"t_disc", label:"Forms of discrimination", group:"term", parent:"g_div", sectionId:"s7" },
{ id:"t_bio", label:"Biographical & other characteristics", group:"term", parent:"g_div", sectionId:"s8" },
{ id:"t_abl", label:"Intellectual & physical ability", group:"term", parent:"g_abl", sectionId:"s9" },
{ id:"t_mgt", label:"Diversity management", group:"term", parent:"g_abl", sectionId:"s10" },
edges: val→g_val,g_cls,g_fit,g_div,g_abl ; g_val→t_vdef ; g_cls→t_cls,t_gen,t_dev ; g_fit→t_fit ; g_div→t_div,t_disc,t_bio ; g_abl→t_abl,t_mgt
```

---

## 5. Sections (10: s1-s10)

### s1 — Values là gì
- callout `key` "Định nghĩa values": *"Basic convictions about what is right, good, or desirable"* (R&J 2019, slide 5). Schwartz (2009): beliefs, motivational construct, abstract goals ordered by importance — standards/criteria để đánh giá actions/people/events. Values **giải thích emotion & motivation, ảnh hưởng attitudes & behaviors** (slide 7).
- comparison "2 attributes của values (R&J 2019, slide 7)" [2 cột → 1 cell]: Attribute | Nội dung
  - Content attribute | Rằng một mode of conduct hoặc end-state là quan trọng
  - Intensity attribute | Nó quan trọng ĐẾN MỨC NÀO
- callout `insight` "Value system & trade-off": Xếp hạng các value theo intensity → **value system**. Value chỉ thực sự "hiện ra" khi ta ở **quyết định trade-off** — chọn cái này, hy sinh cái kia (slide 8). Hành vi khớp values → thường thấy tốt; lệch values → thấy low/unmotivated (slide 9-10).
- keyTerms: values, value system, content attribute, intensity attribute.

### s2 — Phân loại values: Rokeach, Schwartz, VIA
- comparison "Rokeach Value Survey (RVS, 1973)" [2 cột → 1 cell]: Loại | Nội dung
  - Terminal values | Các end-states mong muốn (mục tiêu đời người muốn đạt) — vd security, happiness, wisdom
  - Instrumental values | Các mode of conduct/means ưa thích để đạt terminal values — vd honesty, ambition, responsibility
- callout `note` "Values & VIA character strengths": Values & value systems đóng vai trò trung tâm trong motivation (Rokeach, 1973). **VIA (Values in Action) — Character Strengths**: biết & dùng character strengths → tăng happiness/well-being, meaning, relationships, quản stress, đạt goals (viacharacter.org, slide 11).
- keyTerms: Rokeach Value Survey, terminal values, instrumental values, VIA character strengths.

### s3 — Generational values
- comparison "Generational differences (dựa trên shared values; R&J 2017; Howe & Strauss)" [2 cột → 1 cell]: Thế hệ | Mốc năm sinh
  - Veterans | Before 1945
  - Baby boomers | 1945-1964
  - Gen X | 1965-1979
  - Gen Y (Millennials) | 1980-1999
  - Gen Z | 2000-2012
- callout `note` "Ý nghĩa": mỗi thế hệ mang shared values khác nhau → khác kỳ vọng công việc; hiểu để communicate/motivate liên thế hệ (slide 18).
- keyTerms: generational values.

### s4 — Values development (Massey)
- flow "Cách personal values phát triển (Morris Massey, 2005/2009)" layout horizontal: ~90% values set by age 10 → "lock in" ~age 20 → change only via Significant Emotional Event (S.E.E.). Caption: "Impact factors: culture, gender roles, ethnicity, age."
- callout `key` "Significant Emotional Event (S.E.E.)": *"Trải nghiệm đủ mạnh để khiến một người ĐỔI value này lấy value khác"* (Massey, 2005). Sau tuổi ~20, S.E.E. là cách duy nhất values thay đổi. S.E.E. → personal values gắn với emotions.
- keyTerms: Significant Emotional Event (S.E.E.).

### s5 — Person-Organization Fit (cầu nối values → diversity)
- callout `key` "Person-Organization Fit (P-O Fit)": *"Congruence giữa bộ work-related values của ứng viên và culture của tổ chức"* (R&J 2019, slide 30). Implication for managers: chọn ứng viên KHÔNG chỉ có ability/experience/motivation mà còn có **value system tương thích với organizational values** (slide 28). "Right person… wrong place!" khi values lệch.
- comparison "2 types of fit — value congruence (Kristof, 1996)" [2 cột → 1 cell]: Loại fit | Nội dung
  - Supplementary fit | Cá nhân có attributes GIỐNG với thành viên tổ chức
  - Complementary fit | Cá nhân mang thứ MỚI, lấp khoảng trống còn thiếu của tổ chức (hoặc ngược lại) — bổ trợ cho nhau
- callout `insight` "Culture fit vs Culture add": Culture FIT nhấn giống nhau (dễ rơi vào unconscious bias, tuyển bản sao); Culture ADD nhấn bổ sung khác biệt có giá trị — dẫn sang nửa DIVERSITY (slide 32).
- keyTerms: person-organization fit, supplementary fit, complementary fit, culture add.

### s6 — Diversity: surface vs deep-level + discrimination + stereotype threat
- comparison "Surface-level vs Deep-level diversity (R&J Ch.6, p114)" [2 cột → 1 cell]: Loại | Định nghĩa (margin)
  - Surface-level diversity | "Differences in easily perceived characteristics — gender, race, ethnicity, age, disability — that do not necessarily reflect how people think/feel but may activate stereotypes"
  - Deep-level diversity | "Differences in values, personality, and work preferences that become progressively more important for determining similarity as people get to know one another better"
- callout `key` "Discrimination, Stereotyping, Stereotype threat (p115-116)": **Discrimination** = "noting a difference between things; unfair discrimination = judging individuals based on stereotypes về nhóm demographic của họ". **Stereotyping** = "judging someone based on perception of the group they belong to". **Stereotype threat** = "mức độ ta NỘI TÂM đồng ý với định kiến tiêu cực về nhóm mình" → hạ performance/satisfaction, tăng absenteeism/turnover. Combat: đối xử như individual, không nhấn group difference.
- keyTerms: surface-level diversity, deep-level diversity, discrimination, stereotyping, stereotype threat.

### s7 — Forms of discrimination (Exhibit 6-1)
- comparison "6 forms of discrimination in organizations (R&J Exhibit 6-1, p116)" [3 cột → 2 cells]: Hình thức | Định nghĩa | Ví dụ
  - Discriminatory policies or practices | Hành động từ chối cơ hội/phần thưởng công bằng | Nhân viên lớn tuổi bị nhắm layoff vì lương cao
  - Sexual harassment | Advances/hành vi tình dục tạo môi trường thù địch | Đưa khách đến strip club, tin đồn tình dục
  - Intimidation | Đe dọa/bắt nạt công khai nhắm nhóm cụ thể | Treo dây thòng lọng gần chỗ nhân viên da đen
  - Mockery and insults | Đùa cợt/định kiến đi quá xa | Hỏi người Arab có mang bom không
  - Exclusion | Loại khỏi cơ hội/social event/mentoring (có thể vô ý) | Phụ nữ tài chính bị giao vai marginal
  - Incivility | Đối xử thiếu tôn trọng, ngắt lời, phớt lờ ý kiến | Luật sư nam cắt lời/không phản hồi đồng nghiệp nữ
- keyTerms: (tuỳ) sexual harassment, incivility.

### s8 — Biographical & other differentiating characteristics
- callout `note` "Biographical characteristics (margin, p117)": *"Personal characteristics — age, gender, race, length of tenure — objective & dễ lấy từ HR records; đại diện cho surface-level diversity"*. Quy tắc: nhiều biographical differences KHÔNG quan trọng với work outcomes; biến thiên TRONG nhóm > giữa các nhóm.
- comparison "Biographical & other characteristics — điểm OB (R&J p117-123)" [2 cột → 1 cell]: Đặc điểm | Điểm chính OB
  - Age | Đa số nghiên cứu: gần như KHÔNG có liên hệ giữa tuổi & job performance; stereotype "kém thích ứng" đang đổi
  - Gender | Ít khác biệt thật về performance; khác biệt chủ yếu ở treatment/opportunity
  - Race & ethnicity | Nhóm thiểu số báo cáo discrimination cao hơn (interview/rating/pay/promotion)
  - Disability | UN Convention 2006; kết quả trái chiều (dependable nhưng lower expectations, ít được tuyển)
  - Hidden (invisible) disabilities | ADHD, chronic illness, PTSD…; ADA Amendments 2008; disclose giúp accommodation nhưng sợ stigma
  - Religion | Cấm phân biệt tôn giáo; ví dụ hijab (Samantha Elauf/Abercrombie)
  - Sexual orientation & gender identity | LGBT: luật chưa đồng bộ; nhiều org tự có policy (IBM); Fortune 500 >90% có chính sách
  - Cultural identity | Gắn với văn hóa gia đình/tổ tiên, kéo dài cả đời; org cần tôn trọng & linh hoạt
- keyTerms: biographical characteristics, hidden disabilities.

### s9 — Ability: intellectual & physical
- callout `key` "Ability (margin, p123)": *"An individual's current capacity to perform the various tasks in a job"* — gồm 2 nhóm: intellectual & physical. **Intellectual abilities** = "capacity to do mental activities — thinking, reasoning, problem solving"; **General Mental Ability (GMA)** = "overall factor of intelligence từ positive correlations giữa các dimension".
- comparison "7 dimensions of intellectual ability (Exhibit 6-2, p124)" [3 cột → 2 cells]: Dimension | Mô tả | Job ví dụ
  - Number aptitude | Tính toán nhanh & chính xác | Accountant
  - Verbal comprehension | Hiểu điều đọc/nghe & quan hệ giữa các từ | Plant manager
  - Perceptual speed | Nhận diện tương đồng/khác biệt thị giác nhanh | Fire investigator
  - Inductive reasoning | Nhận ra chuỗi logic của vấn đề rồi giải | Market researcher
  - Deductive reasoning | Dùng logic đánh giá hàm ý của luận điểm | Supervisor
  - Spatial visualization | Hình dung vật thể khi đổi vị trí trong không gian | Interior decorator
  - Memory | Ghi nhớ & gợi lại trải nghiệm | Salesperson
- comparison "9 physical abilities (Exhibit 6-3, p126)" [2 cột → 1 cell]: Nhóm | Các ability
  - Strength factors | Dynamic strength, Trunk strength, Static strength, Explosive strength
  - Flexibility factors | Extent flexibility, Dynamic flexibility
  - Other factors | Body coordination, Balance, Stamina
- keyTerms: ability, intellectual abilities, general mental ability (GMA), physical abilities.

### s10 — Diversity management & implications
- callout `key` "Diversity management (margin, p126)": *"Process & programs qua đó managers làm mọi người ý thức & nhạy cảm hơn với nhu cầu & khác biệt của người khác"* — chương trình cho TẤT CẢ mọi người, không chỉ vài nhóm. **Positive diversity climate** = "môi trường inclusiveness & chấp nhận đa dạng" → giảm turnover, tăng sales/performance.
- callout `note` "Attract/Select/Develop/Retain diverse employees (p127)": target recruitment tới nhóm underrepresented; tạo diverse work groups tập trung mutual goals; managers cung cấp workplace flexibility để cân bằng org goals & individual needs.
- callout `insight` "Implication tổng — nối values & diversity": Chọn người vừa có **ability** vừa có **value system** khớp org (P-O fit) NHƯNG tránh unconscious bias/cloning — hướng tới **culture add** & positive diversity climate. Đa dạng thành công khi coi là "everyone's business".
- keyTerms: diversity management, positive diversity climate.

---

## 6. Quiz (16 câu q01-q16)
Format: stem/options EN, rationale/takeaway VI (Cơ chế→Bẫy→Khóa), 5 options A-E đúng 1. Distractor bám khái niệm cùng chương.

1. **q01** Định nghĩa values (basic convictions về right/good/desirable).
2. **q02** Content vs intensity attribute.
3. **q03** Rokeach: terminal vs instrumental (phân loại 1 ví dụ).
4. **q04** Generational values — match thế hệ/mốc năm hoặc đặc điểm.
5. **q05** Values development: S.E.E. là cách duy nhất đổi values sau ~20 (Massey).
6. **q06** Person-Organization Fit = value congruence (định nghĩa).
7. **q07** Supplementary vs complementary fit (Kristof) — phân biệt case.
8. **q08** Surface-level vs deep-level diversity (phân loại đặc điểm).
9. **q09** Stereotype threat (nội tâm đồng ý định kiến nhóm mình).
10. **q10** Forms of discrimination (Exhibit 6-1) — nhận diện exclusion/incivility/intimidation từ case.
11. **q11** Age & job performance (gần như không liên hệ).
12. **q12** Hidden disabilities / disclosure (ADA).
13. **q13** Intellectual ability dimension — match dimension với job (vd spatial visualization → interior decorator) hoặc GMA.
14. **q14** Physical abilities (strength/flexibility/other) — nhận diện.
15. **q15** Diversity management / positive diversity climate (định nghĩa).
16. **q16** Implication for managers: chọn ability + value fit; culture add vs culture fit / unconscious bias.

Mỗi câu đúng 1 `isCorrect: true`.

## 7. source
```ts
source:
  "Organizational Behavior (IM2017, Dr Truong Thi Lan Anh) — slide 'OB-Topic 3 - Personal values' + Reading 'Chapter 6 - Valuing diversity' (Robbins & Judge, p113-127). Values: định nghĩa & attributes, Rokeach Value Survey, Schwartz, generational values, values development (Massey/S.E.E.), Person-Organization Fit (Kristof supplementary/complementary), VIA character strengths. Diversity: surface/deep-level, discrimination (Exhibit 6-1), stereotype threat, biographical & other differentiating characteristics, ability (intellectual 7 dims + GMA; physical 9 — Exhibit 6-2/6-3), diversity management & positive diversity climate.",
```

## 8. Coverage matrix (Lớp B — slide + sách)
| # | Mục | Nguồn | Section |
|---|---|---|---|
| 1 | Định nghĩa values + content/intensity + value system + trade-off | slide 5,7,8 | s1 |
| 2 | Rokeach (terminal/instrumental) + Schwartz + VIA | slide 11,13-16 | s2 |
| 3 | Generational values (Veterans→Gen Z) | slide 18 | s3 |
| 4 | Values development (Massey ~90%/10, lock-in 20, S.E.E.) | slide 23-24 | s4 |
| 5 | Person-Organization Fit + supplementary/complementary (Kristof) | slide 28-31 | s5 |
| 6 | Culture fit vs culture add / unconscious bias | slide 32 | s5, s10 |
| 7 | Surface vs deep-level diversity | **sách p114** | s6 |
| 8 | Discrimination, stereotyping, stereotype threat | **sách p115-116** | s6 |
| 9 | 6 forms of discrimination (Exhibit 6-1) | **sách p116** | s7 |
| 10 | Biographical characteristics (age/gender/race/disability/hidden) | **sách p117-120** | s8 |
| 11 | Other differentiating (religion/sexual orientation/gender identity/cultural identity) | **sách p121-123** | s8 |
| 12 | Ability: intellectual (7 dims + GMA) | **sách p123-125** | s9 |
| 13 | Ability: physical (9 — Exhibit 6-3) | **sách p126** | s9 |
| 14 | Diversity management + positive diversity climate + attract/select/develop/retain | **sách p126-127** | s10 |

> Slide phủ nửa values; sách Ch.6 phủ nửa diversity (Chaliyah chốt gồm cả hai). Nối bằng deep-level diversity = values. Lý thuyết Rokeach/generational/Massey neo theo slide (R&J-cited) vì Reading Ch.6 không chứa.
