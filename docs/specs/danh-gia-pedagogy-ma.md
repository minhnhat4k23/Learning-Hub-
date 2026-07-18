# Đánh giá pedagogy — môn Managerial Accounting (rubric A–H)

> **Nguồn gốc:** Chaliyah chọn từ backlog 2026-07-18 (mục 5 của `danh-gia-pedagogy-ob.md` §4: áp rubric §2 cho các môn còn lại). Đây là **đánh giá lần 1** của Managerial theo đúng khung 8 tiêu chí A–H.
> **Rubric chuẩn:** `docs/specs/danh-gia-pedagogy-ob.md` §2 (không lặp lại ở đây).

## 1. Phương pháp (2026-07-18)

- **Phân tích DATA THẬT, không regex source:** `content/managerial.ts` dùng object thuần + quiz bị `applyEnglishQuizOverrides` (quizEnglish.ts) ghi đè stem/options sang tiếng Anh → bundle `content/subjects.ts` bằng esbuild rồi import, thống kê trên object Chapter sau override (script `ma-stats.mjs`, scratchpad session 67d637e6).
- Đếm per-topic: sections / block theo loại (diagram, comparison, callout, calc, formula, prose) / keyTerms / questions / cross-ref / marker "(sách p.NN)" / So-what.
- Dump + **phân loại thủ công 120 quiz stems** (application/tính toán-tình huống vs định nghĩa/khái niệm).
- Spot-read 3 câu (Ch5 q13 sales mix, Ch9 q8 static budget, Ch13 q3 drop segment) chấm rationale theo Cơ chế→Bẫy→Khóa.
- Kiểm code route `app/[subject]/on-tap` + `app/[subject]/mini-case` + `app/[subject]/page.tsx` (điều kiện render cho MA).
- **Chưa làm ở lần 1:** walkthrough runtime Playwright (scroll depth, learning flow) — để lần 2, giống tiến trình OB.

## 2. Hiện trạng môn (8 topic, đánh số theo chương Garrison 17e)

| Order | Slug | Sections | diagram/comp/calc/formula | callout | keyTerms | Quiz | "(sách p.NN)" | Cross-ref |
|---|---|---|---|---|---|---|---|---|
| 1 | cost-concepts | 15 | 7/9/1/2 | 18 | **34** | 18 | 18 | →Ch5 (4 chỗ) |
| 2 | job-order-costing | 14 | 2/7/5/2 | 14 | **31** | 16 | 14 | 0 |
| 3 | job-order-cost-flows | 12 | 1/5/7/0 | 12 | **2** | 14 | 1 | 0 |
| 5 | cost-volume-profit | 13 | 1/5/9/10 | 8 | **0** | 19 | 1 | 0 |
| 8 | master-budget | 11 | 1/4/5/2 | 7 | 7 | 15 | 1 | 0 |
| 9 | flexible-budgets | 7 | 1/2/2/2 | 6 | **2** | 12 | 0 | 0 |
| 10 | standard-costs | 9 | 1/4/4/2 | 4 | 6 | 13 | 0 | 0 |
| 13 | differential-analysis | 9 | 1/2/7/1 | 4 | 7 | 13 | 0 | 0 |

Tổng: 90 sections, 120 câu quiz, tất cả status "ready", 8/8 có bigIdea + 3–4 pillars + knowledgeMap + source ghi rõ Garrison/Noreen/Brewer 17e + tên slide. Subject-level: **không** courseMap / courseThreads / miniCases.

## 3. Kết quả chấm A–H

### A — Khung trong-topic nhất quán: **Đạt một phần**

- Đạt: 8/8 topic cùng xương sống bigIdea → pillars → knowledgeMap → sections → quiz (12–19 câu, đều có takeaway).
- **Gap: keyTerms lệch nặng** — Ch1 (34) và Ch2 (31) đầy đủ, nhưng **Ch5 CVP = 0 keyTerm**, Ch3 = 2, Ch9 = 2 (bảng §2). Người học mất chỗ tra nhanh định nghĩa ở đúng các chương nặng công thức.

### B — Trực quan (dual coding): **Đạt**

- 89/90 section có ≥1 visual block; duy nhất **Ch8 s8 "Selling & administrative expense budget (LO7)"** chỉ có 1 block prose.
- Đúng đặc thù môn định lượng: 40 calc walkthrough + 21 formula block tập trung ở CVP/variance/differential; comparison dùng cho phân biệt (product vs period, traditional vs contribution...).

### C — Active recall chất lượng: **Đạt (rationale) / Đạt một phần (application ratio)**

- **Rationale:** 480/480 option có rationale đầy đủ; 120/120 câu có takeaway. Spot-read 3 câu: đủ cấu trúc Cơ chế→Bẫy→Khóa, distractor là misconception thật (vd Ch13 q3: "drop vì đang lỗ $100,000" = bẫy allocated common fixed cost; Ch9 q8: bẫy "static budget always wrong" = phủ định quá mức). Chất lượng cao.
- **Tỉ lệ application/tính toán-tình huống** (phân loại thủ công; môn định lượng đặt mục tiêu ≥40%, cao hơn mức ≥33% của môn định tính):

| Topic (order) | 1 | 2 | 3 | 5 | 8 | 9 | 10 | 13 |
|---|---|---|---|---|---|---|---|---|
| App/tổng | 13/18 | 8/16 | 8/14 | 11/19 | **4/15** | **3/12** | 6/13 | 7/13 |
| % | **72** | 50 | 57 | 58 | **27** | **25** | 46 | 54 |

Toàn môn ≈ 60/120 = **50%** — đạt tổng thể, nhưng lệch: **Ch8 master-budget (27%) và Ch9 flexible-budgets (25%)** phần lớn câu định nghĩa/khái niệm, trong khi đây là 2 chương thi tính toán schedule/variance. → Cần thêm ~3–4 câu tính toán mỗi chương (production budget, cash budget, activity/spending variance).

### D — Trung thực nguồn: **Đạt một phần (chờ audit Topic 6–8)**

- 8/8 chapter có `source` ghi rõ Garrison/Noreen/Brewer 17e + tên slide gốc; Appendix vào bài đúng luật (10A ở Ch10 — 2 câu quiz riêng, 13A ở Ch13, 3 chỗ ở Ch2).
- Marker "(sách p.NN)" kèm trang: Ch1 = 18, Ch2 = 14 (chuẩn mực); **Ch3/Ch5/Ch8 chỉ 1 marker mỗi chương; Ch9/Ch10/Ch13 = 0**.
- Diễn giải: Topic 1–5 (Ch1,2,3,5,8) đã qua audit sách; ít marker ở Ch3/5/8 có thể do audit kết luận coverage đủ (như OB T09). **Ch9/10/13 = MA Topic 6–8 CHƯA audit sách** — backlog #2 đã ghi nhận, là task riêng. → UNCERTAIN cho 3 chương cuối, không kết luận được thiếu hay đủ cho tới khi audit.

### E — Liên kết ngang (synthesis): **Thiếu** *(giống OB gap 1 trước khi fix)*

- **Không có course map cấp-môn** (subject.courseMap = undefined → trang môn không render bản đồ, không có chuỗi khái niệm).
- Cross-ref giữa topic trong nội dung: **~4 chỗ duy nhất, tất cả ở Ch1 (→Ch5)**; 7 topic còn lại là ốc đảo — kể cả các quan hệ ruột: Ch2→Ch3 (POHR → cost flows), Ch9→Ch10 (flexible budget → standard costs & variance), Ch5→Ch13 (CM → differential).
- Môn này có mạch tự nhiên rất rõ: **phân loại chi phí (1) → hệ thống tính giá (2–3) → hành vi chi phí & CVP (5) → kế hoạch (8) → kiểm soát (9–10) → quyết định (13)** — chính là thứ course map cần vẽ.

### F — Application (case method): **Thiếu**

- `miniCases = 0` → `/managerial-accounting/mini-case` trả 404 (page.tsx yêu cầu `subject.miniCases?.length`).
- Cơ chế + component MiniCaseStudy đã là chung (từ Gap F của OB) — chỉ cần soạn data. Với môn định lượng, case nên là **integrated problem**: một công ty, một bộ số liệu → buộc dùng chuỗi ≥2–3 công cụ (vd CVP → special order differential; budget → variance truy ngược nguyên nhân).

### G — Elaboration ("So what"): **Thiếu**

- 0/8 topic có callout "So what — kiến thức này đổi hành động của bạn" cuối topic (grep cả biến thể tiếng Việt: 0 kết quả).

### H — Spaced / interleaved practice: **Đạt**

- `/managerial-accounting/on-tap` hoạt động bằng cơ chế chung (round-robin interleaved + breakdown per topic + làm lại câu sai): route generic, MA có 8 topic "ready" × 120 câu, thỏa điều kiện ≥2 topic. Đã verify runtime PASS trong `quiz-cumulative-mode.md` (2026-07-17, cơ chế chung cả 2 môn).

## 4. Bảng gap + đề xuất thứ tự làm

| Gap | Tiêu chí | Việc cần làm | Ước lượng | Trạng thái |
|---|---|---|---|---|
| 1 | E | Course map cấp-môn + chuỗi khái niệm MA (mạch: phân loại → tính giá → CVP → kế hoạch → kiểm soát → quyết định) + chèn cross-ref tại các mắt xích ruột (Ch2→3, Ch5→13, Ch9→10...) | Spec + Codex, giống `ob-course-map.md` | Chưa làm |
| 2 | F | 3–4 mini-case integrated problem theo chuỗi khái niệm của course map (làm SAU gap 1 để case bám thread) | Spec + Codex, giống `ob-mini-case.md` | Chưa làm |
| 3 | G | 8 callout "So what" cuối topic | Spec nhỏ, giống `ob-so-what.md` | Chưa làm |
| 4 | C | +3–4 câu tính toán cho Ch8 (production/cash budget) & Ch9 (activity/spending variance) → mỗi chương ≥40% | Spec nhỏ | Chưa làm |
| 5 | A | Bổ sung keyTerms cho Ch5 (0), Ch3 (2), Ch9 (2) | Spec nhỏ (có thể gộp với gap 4) | Chưa làm |
| 6 | D | Audit sách MA Topic 6–8 (Ch9/10/13) — **đã nằm sẵn ở backlog #2**, task riêng theo luật SÁCH > slide | Quy trình audit Lớp B | Backlog #2 |

**Kết luận lần 1:** Managerial rất mạnh ở tầng trong-topic (B, C-rationale, H Đạt; A gần Đạt) — đúng như kỳ vọng vì đây là môn chuẩn gốc của rich teaching mode. Toàn bộ gap nằm ở **tầng trên-topic (E, F, G)**, lặp đúng pattern OB trước khi fix — và nay cơ chế render (course map, mini-case, so-what callout, on-tap) đều đã là cơ chế chung, nên chi phí đóng gap thấp hơn OB đáng kể: chủ yếu là soạn DATA + spec cho Codex.

## 5. Backlog đánh giá lần 2 (sau khi đóng gap)

1. Walkthrough runtime Playwright 2–3 topic (learning flow, scroll depth, pageerror) — như OB §3b.
2. Chấm E sâu khảo sát ngược theo chuỗi khái niệm (sau khi có course map).
3. Đối chiếu D lại sau audit sách Topic 6–8.

## 6. Liên kết

- Rubric chuẩn + tiền lệ OB: `docs/specs/danh-gia-pedagogy-ob.md`
- Cơ chế dùng lại: `ob-course-map.md`, `ob-mini-case.md`, `ob-so-what.md`, `quiz-cumulative-mode.md`
- Luật soạn môn: `docs/specs/workflow-soan-mon-moi.md`; luật sách: memory `sach-hon-slide-bat-buoc`
