# Đánh giá pedagogy — môn Managerial Accounting (rubric A–H)

> **Nguồn gốc:** Chaliyah chọn từ backlog 2026-07-18 (mục 5 của `danh-gia-pedagogy-ob.md` §4: áp rubric §2 cho các môn còn lại). §1–§4 là **đánh giá lần 1** (cấu trúc, script-based); **§3b là đánh giá lần 2 cùng ngày** (định tính: đọc sâu ruột nội dung như người học + chấm 40 câu quiz đủ chuẩn + walkthrough runtime) — làm theo yêu cầu Chaliyah: chấm cách TRÌNH BÀY nội dung lý thuyết có dễ học/dễ hiểu/có cấu trúc không, chuẩn học Harvard/Stanford.
> **Rubric chuẩn:** **`docs/RUBRIC.md`** (từ 2026-07-19 là nguồn chân lý duy nhất, có ngưỡng lượng hóa từng mức; trước đó rubric nằm ở `danh-gia-pedagogy-ob.md` §2). Ngưỡng application ratio môn định lượng ≥40%/topic — Chaliyah duyệt 2026-07-18.
> **Lưu ý khi đọc lại:** §3/§3b dưới đây chấm TRƯỚC khi rubric được lượng hóa (2026-07-19). Xem §6 để biết mức nào đổi khi đối chiếu ngưỡng số mới.
> **QC lần 2 bởi 2 subagent độc lập (2026-07-18):** fact-check 100% số liệu khớp; critique ra 10 findings (F1–F10) — các mục dưới đã vá theo đó.

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

### C — Active recall chất lượng: **Đạt (rationale, chấm đủ chuẩn lần 2) / Đạt một phần (application ratio)**

- **Rationale — chấm đủ chuẩn rubric ở lần 2 (vá F1):** 480/480 option có rationale (check cấu trúc bằng script) **+ chấm tay 40 câu = 5 câu/topic × 8** (sample trải đều index + difficulty, dump `ma-quiz-sample40.txt`): 40/40 đủ Cơ chế→Bẫy→Khóa THẬT, không câu nào distractor vô nghĩa. Xuất sắc nhất: Ch10 (mỗi distractor của câu công thức = công thức của variance KHÁC), Ch13 (bẫy full cost $30 vs $25 make-or-buy kinh điển), Ch1. Weakness nhỏ: ~7/160 distractor SỐ trong câu tính (Ch3 q4/q14, Ch5 q5/q15, Ch8 q4) rationale generic kiểu "tính sai/không khớp" thay vì chỉ đích lối sai — polish item, không hạ verdict.
- **Tỉ lệ application/tính toán-tình huống** (phân loại thủ công; ngưỡng môn định lượng ≥40%/topic — **Chaliyah duyệt 2026-07-18**, cao hơn mức ≥1/3 của môn định tính):

| Topic (order) | 1 | 2 | 3 | 5 | 8 | 9 | 10 | 13 |
|---|---|---|---|---|---|---|---|---|
| App/tổng | 13/18 | 8/16 | 8/14 | 11/19 | **4/15** | **3/12** | 6/13 | 7/13 |
| % | **72** | 50 | 57 | 58 | **27** | **25** | 46 | 54 |

Toàn môn ≈ 60/120 = **50%** — đạt tổng thể, nhưng lệch: **Ch8 master-budget (27%) và Ch9 flexible-budgets (25%)** phần lớn câu định nghĩa/khái niệm, trong khi đây là 2 chương thi tính toán schedule/variance. → Cần thêm ~3–4 câu tính toán mỗi chương (production budget, cash budget, activity/spending variance).

### D — Trung thực nguồn: **Đạt (Topic 1–5, kiểm chứng lần 2) / UNCERTAIN (Topic 6–8 chờ audit)**

- 8/8 chapter có `source` ghi rõ Garrison/Noreen/Brewer 17e + tên slide gốc; Appendix vào bài đúng luật (10A ở Ch10 — 2 câu quiz riêng, 13A ở Ch13, 2A/2B ở Ch2, 5A ở Ch5).
- Marker "(sách p.NN)" kèm trang: Ch1 = 18, Ch2 = 14; Ch3/Ch5/Ch8 = 1 mỗi chương; Ch9/Ch10/Ch13 = 0.
- **Kiểm chứng lần 2 (vá F3 — thay suy diễn bằng bằng chứng):** đối chiếu 5 file audit `ma-topic1..5-completeness.md` với nội dung thật → **toàn bộ supplement ĐÃ land**: Ch1 (s10b "6 lăng kính" + keyTerms s5/s11), Ch2 (Absorption costing s0 + Appendix 2B Prahad s13), Ch3 (**section s11 Ruger Exhibit 3-8/9/10** — đúng gap trọng tâm audit nêu), Ch5 (**section s7b equation method** — gap Review Problem sách), Ch8 (3 block s0: bảng 5 planning + 2 control, top-down vs self-imposed, callout 4 ưu điểm sách p.356). Ít marker ở Ch3/5/8 là vì supplement gói trong 1 section/vài block, không phải thiếu.
- **Spot-check Glossary (vá F2):** 3 keyTerm đối chiếu (Inventoriable costs p.31, Matching principle p.30-31, Absorption costing p.61) — định nghĩa trong content khớp NGUYÊN VĂN bản trong spec audit (đã VERIFIED từ sách kèm trang). PASS.
- **Ch9/10/13 = MA Topic 6–8 CHƯA audit sách** — task riêng theo luật SÁCH > slide (memory `sach-hon-slide-bat-buoc`; việc này nằm trong backlog dự án ở session note, KHÔNG có file backlog trong repo — vá F4). Gap 2 ở §4 là chỗ theo dõi chính thức từ nay. → UNCERTAIN cho 3 chương cuối tới khi audit.

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

- `/managerial-accounting/on-tap` hoạt động bằng cơ chế chung (round-robin interleaved + breakdown per topic + làm lại câu sai): route generic, MA có 8 topic "ready" × 120 câu, thỏa điều kiện ≥2 topic. Verify tiền lệ trong `quiz-cumulative-mode.md` (2026-07-17) **+ verify lại runtime lần 2: HTTP 200, screenshot hiện đủ 8 topic kèm số câu** (`ma-ontap.png`).
- Vế 2 của rubric H (cơ chế ôn qua Obsidian): vault theo memory `obsidian-on-tap-ra-soat` KHÔNG tìm thấy trên ổ F: tại thời điểm kiểm (path stale hoặc ổ chưa gắn) — UNCERTAIN, không ảnh hưởng verdict vì rubric dùng "hoặc" và vế web đã Đạt (vá F9).

## 3b. Kết quả đánh giá SÂU — lần 2 (2026-07-18, định tính "dễ học dễ hiểu")

**Phương pháp:** đọc TOÀN BỘ ruột nội dung 8 topic như người học (dump learner-view `ma-content-chN.txt` từ bundle: prose + block + keyTerms + examples, bỏ quiz đã chấm riêng); chấm 40 câu quiz (§3-C đã cập nhật); walkthrough runtime Playwright 1440×900 ba topic Ch1/Ch3/Ch8 + route check. Notes gốc: scratchpad `ma-danh-gia-lan2-notes.md`.

### Chất lượng trình bày lý thuyết — **Đạt, mức cao và ĐỀU**

- **Mỗi phép tính đều đóng bằng nghĩa:** pattern nhất quán toàn môn — prose 1–2 câu nêu bản chất → formula (legend + note) → calc walkthrough có "KQ → Ý nghĩa → Hàm ý". Không có "liệt kê trá hình": bảng nào cũng có cột nghĩa/hàm ý, không phải bullet chép slide.
- **Giải thích VÌ SAO ở đúng điểm mấu chốt:** matching principle (Ch1 s5), vì sao POHR ước tính trước — 2 lý do sách p.69 (Ch2 s4), unit cost bình quân ≠ incremental (Ch2 s5), mua ≠ dùng trong price variance (Ch10 s5), favorable chưa chắc tốt (Ch10 s2/s7), joint cost irrelevant (Ch13 s7).
- **Running example đúng sách/slide từng chương** (Phở, PearCo/Dickson/Maxtar/Prahad, Ruger + Exhibit 3-8/9/10, RBC/Coffee Klatch/Brentline, Royal, Larry, Glacier/Hanson/MicroDrive, Lovell/Essex/Jet/Ensign/Sawmill) — người học gặp lại đúng dữ liệu khi ôn đề.
- **Hai mục kiểu "Harvard synthesis":** Ch1 s10b "một bộ số — 6 lăng kính" và Ch5 s7b "equation vs formula method" — một tình huống nhiều cách nhìn, đúng trục (b) mục đích gốc.

### Learning flow runtime (Ch1/Ch3/Ch8) — **Đạt, 1 chỗ đứt mạch nhẹ**

- Mở trang: bigIdea compass → 3–4 pillars → knowledge map → Mục tiêu học → sections đúng thứ tự LO → End-of-Chapter Questions; sidebar 2 lớp (chương + mục lục). hscroll = false, pageerror = none. Scroll depth: Ch1 ≈21.4 màn (dài nhất toàn site, hơn OB max 20.5 — chấp nhận được nhờ điều hướng 2 lớp), Ch3 ≈12.8, Ch8 ≈11.9.
- **Đứt mạch nhẹ ở Ch3 (forward-reference):** thứ tự render s7→s8→**s11 (Ruger Exhibit 3-9 dùng adjusted COGS = unadjusted + underapplied $5,000)**→s9 (mới dạy under/overapplied)→s10. Người học gặp khái niệm under/overapplied TRƯỚC khi được dạy; callout trong s11 tự nhận "số under/overapplied ở s9/s10 được đưa vào ĐÂY". Vị trí này do spec `ma-topic3-completeness.md` chỉ định ("chèn sau s8") — đề xuất đảo s9/s10 lên trước s11.

### Điểm yếu RUỘT tìm thấy (mới so với lần 1)

1. **Ch8 s5/s7/s8 mỏng:** direct labor budget, ending FG budget, S&A budget chỉ tả bằng LỜI — 3/10 schedule của master budget không có bảng số minh họa, trong khi đề thi chương này là lập schedule. Cộng hưởng với C-ratio Ch8 thấp (27%).
2. **Ch9 s5/s6 mỏng:** LO5/LO6 (multiple cost drivers, performance report nhiều driver) không có ví dụ số nào — chỉ prose. Ch9 tổng thể ngắn nhất môn.
3. **Ch5 s3 lệch loại visual (B sâu — vá F5):** "CVP graph" vẽ bằng FLOW node-chain trong khi bản chất là đồ thị TỌA ĐỘ — người học không thấy dáng đồ thị (LO2 là "lập và ĐỌC CVP graph"). Các flow còn lại đều đúng loại: master budget sequence, T-account, khung 3 cột variance, relevant filter, Planning→Flexible→Actual.
4. Data quirks nhỏ: Ch2 s6 keyTerms chứa chuỗi "Vì sao plantwide rate kém chính xác" (không phải term); Ch13 s6 bảng "Cách relaxing constraint" có cells rỗng.
5. Xác nhận gap keyTerms lần 1 là gap học THẬT: Ch5 dạy ~10 công thức nhưng keyTerms = 0 → không có chỗ tra nhanh.

### QC độc lập (2 subagent, 2026-07-18)

- **Fact-check:** 100% số liệu lần 1 khớp khi kiểm độc lập (bảng §2, rationale 480/480, route 404/200, so-what 0/8, phân loại lại Ch8=4/15, Ch9=2–3/12).
- **Critique (F1–F10):** F1 sample size → đã chấm đủ 40 câu; F2 Glossary → spot-check PASS; F3 suy diễn D → thay bằng bằng chứng supplement đã land; F4 backlog ref → đã ghi rõ; F5 B sâu → đã làm; F6 thứ tự audit sách → Chaliyah duyệt đẩy lên (bảng §4 mới); F7 ngưỡng 40% → Chaliyah duyệt, ghi vào rubric; F8 Ch8 s8 → vào gap 5; F9 Obsidian → ghi UNCERTAIN ở H; F10 điểm cộng giữ làm mẫu cho DTB/Manufacturing.

## 4. Bảng gap + thứ tự làm (Chaliyah duyệt thứ tự 2026-07-18)

| Gap | Tiêu chí | Việc cần làm | Ước lượng | Trạng thái |
|---|---|---|---|---|
| 1 | E | Course map cấp-môn + chuỗi khái niệm MA (mạch: phân loại → tính giá → CVP → kế hoạch → kiểm soát → quyết định) + chèn cross-ref tại các mắt xích ruột (Ch2→3, Ch5→13, Ch9→10...) | Spec + Codex, giống `ob-course-map.md` | ✅ **XONG** — commit a6be7b3 (`ma-course-map.md`, verify Lớp B 129/129 + Lớp A 19/19 PASS 2026-07-19) |
| 2 | D | **Audit sách MA Topic 6–8 (Ch9/10/13)** — đẩy lên trước mini-case/So-what theo luật SÁCH > slide (kiến thức THI: variance, differential; Chaliyah duyệt 2026-07-18). Quy trình như `ma-topic1..5-completeness.md` | Audit Lớp B + spec bổ sung | Chưa làm |
| 3 | F | 3–4 mini-case integrated problem theo chuỗi khái niệm của course map (làm SAU gap 1 để case bám thread) | Spec + Codex, giống `ob-mini-case.md` | Chưa làm |
| 4 | G | 8 callout "So what" cuối topic | Spec nhỏ, giống `ob-so-what.md` | Chưa làm |
| 5 | C + A + B | Gói polish trong-topic: +3–4 câu tính toán Ch8 (production/cash budget) & Ch9 (activity/spending variance) → ≥40%/topic; keyTerms cho Ch5 (0)/Ch3 (2)/Ch9 (2); visual hóa Ch8 s5/s7/s8 + ví dụ số Ch9 s5/s6; sửa CVP graph Ch5 s3 đúng loại; đảo thứ tự Ch3 s9/s10 trước s11; dọn 2 data quirk; đặt tên lối sai cho ~7 distractor số generic | Spec nhỏ gộp 1 đợt | Chưa làm |

**Kết luận (sau lần 2):** Managerial là môn mạnh nhất tầng trong-topic của cả site — trình bày lý thuyết ĐẠT chuẩn "dễ học dễ hiểu có cấu trúc" (mỗi phép tính đóng bằng ý nghĩa quản trị, giải thích vì-sao ở điểm mấu chốt, running example khớp đề). Gap còn lại: tầng trên-topic (E/F/G — cơ chế render đã là cơ chế chung, chỉ cần soạn data + spec Codex), audit sách Topic 6–8 (ưu tiên cao theo luật SÁCH > slide), và một gói polish trong-topic (gap 5).

## 5. Việc còn mở cho lần sau

1. Chấm E sâu khảo sát ngược theo chuỗi khái niệm (sau khi có course map — gap 1).
2. Đối chiếu D lại sau audit sách Topic 6–8 (gap 2).
3. Kiểm nội dung 3 mermaid diagram Ch1 (s3/s7/s9) trên runtime — dump không đọc được code mermaid.
4. Xác minh lại vault Obsidian (path memory `obsidian-on-tap-ra-soat` stale?) và trạng thái sync MA.

## 6. Đối chiếu lại với ngưỡng lượng hóa của `docs/RUBRIC.md` (2026-07-19)

Chấm lại bằng script trên data thật sau khi rubric có ngưỡng số. Ba mức đổi so với §3:

| Tiêu chí | Số đo | Mức cũ (§3) | Mức theo ngưỡng mới | Ghi chú |
|---|---|---|---|---|
| A | 7/8 = 88% topic đủ 6 tầng (Ch5 thiếu keyTerms) | Đạt một phần | **Đạt một phần** | Không đổi |
| B | B1 89/90 = 98,9% ≥95%; B2 = 1 khối lệch loại (CVP graph Ch5 s3) ≤1 | Đạt | **Đạt** | Không đổi — nhưng sát trần: thêm 1 khối lệch loại nữa là rớt xuống Đạt một phần |
| C | C2: 6/8 = 75% topic đạt ≥40% | Đạt một phần | **Đạt một phần** | Không đổi |
| **D** | D3: 5/8 = **62,5%** topic đã audit sách (<70%) | Đạt (T1–5) / UNCERTAIN (T6–8) | **Thiếu** | ⚠️ **ĐỔI MỨC.** Cách chấm cũ tách riêng phần đã audit nên nhìn nhẹ hơn thực tế; ngưỡng số cho thấy môn chưa đạt trung thực nguồn ở cấp môn. Củng cố quyết định đẩy gap 2 (audit Topic 6–8) lên ưu tiên cao |
| **E** | E1 có, E2 = 4 thread, E3 = 7/8 = 88% topic có cross-ref | Thiếu | **Đạt** | ⚠️ **ĐỔI MỨC** — do gap 1 đã hoàn thành (commit a6be7b3), không phải do đổi ngưỡng |
| F | miniCases = 0 | Thiếu | **Thiếu** | Không đổi |
| G | 0/8 topic có So-what | Thiếu | **Thiếu** | Không đổi |
| H | Trang ôn tập trộn 8/8 topic, có breakdown + retry | Đạt | **Đạt** | Không đổi |

**Trạng thái hiện tại:** Đạt B · E · H — Đạt một phần A · C — Thiếu D · F · G.

**Phát hiện ngoài môn MA:** chấm lại OB bằng cùng script cho thấy E3 = 9/13 = **69%** topic có cross-ref, hụt ngưỡng 70% đúng một topic → theo rubric mới **OB-E là "Đạt một phần", không còn "đóng trọn A–H"** như ghi trước đây. Chênh nhỏ (thêm cross-ref cho 1 topic là đạt), nhưng phải ghi nhận thay vì bỏ qua — chờ Chaliyah quyết có bổ sung không.

## 7. Liên kết

- Rubric chuẩn + tiền lệ OB: `docs/specs/danh-gia-pedagogy-ob.md`
- Cơ chế dùng lại: `ob-course-map.md`, `ob-mini-case.md`, `ob-so-what.md`, `quiz-cumulative-mode.md`
- Luật soạn môn: `docs/specs/workflow-soan-mon-moi.md`; luật sách: memory `sach-hon-slide-bat-buoc`
