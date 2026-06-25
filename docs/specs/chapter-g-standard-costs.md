# Spec — Chương 10: Standard Costs and Variances

> Claude (đầu não) → Codex (executor). Nguồn: **Garrison/Noreen/Brewer 17e, Chapter 10** = slide `10. Standard Cost and Variance.pdf` (19 trang) + Glossary sách (book.txt ~line 26776) + **Appendix 10A** (book.txt ~line 27556). Bám sách; số VERIFIED ghi rõ.
> Chuẩn: Rich Teaching Mode + quy ước ngôn ngữ (diễn giải VI, term EN) + [[chuan-ly-thuyet-y-chang-sach]]. KHÔNG đổi `content/types.ts`. **Ch10 CÓ Appendix 10A** (fixed overhead budget & volume variance) → bổ sung.

## Meta
- `slug`: `standard-costs`
- `order`: `10`
- `title`: `"Chapter 10 — Standard Costs and Variances"`
- `status`: `"draft"`
- `source`: `"Garrison, Noreen, Brewer — Managerial Accounting, 17e, Chapter 10 (slide '10. Standard Cost and Variance')"`
- `bigIdea`: Standard cost là **chuẩn** cho từng input = **price standard × quantity standard**. So actual với standard (cho mức output thực) rồi tách spending variance thành **price variance** (do giá đầu vào) và **quantity variance** (do dùng nhiều/ít) → quy trách nhiệm đúng người (mua hàng vs sản xuất). Khung lõi: **(1) AQ×AP → (2) AQ×SP → (3) SQ×SP**.
- `learningObjectives`:
  - "LO1 — Tính direct materials price và quantity variances, giải thích ý nghĩa."
  - "LO2 — Tính direct labor rate và efficiency variances, giải thích ý nghĩa."
  - "LO3 — Tính variable manufacturing overhead rate và efficiency variances, giải thích ý nghĩa."
  - "LO4 (Appendix 10A) — Tính fixed overhead budget và volume variances."

## knowledgeMap (engine flow, layout tree, collapsible)
Root + 4 nhánh; mỗi node cấp 2 có `detail` + `sectionId`.
- root `std` — "Standard Costs & Variances" (concept) — detail: "So actual với standard, tách price vs quantity variance." — sectionId s1
- `found` (concept) "Nền tảng" → `f-std` "Quantity & Price standard" (s0), `f-card` "Standard cost card" (s0), `f-model` "General model 3 cột" (s1)
- `dm` (lo) "Materials" → `m-price` "Materials price variance" (s2), `m-qty` "Materials quantity variance" (s2)
- `dl` (lo) "Labor & VOH" → `l-rate` "Labor rate variance" (s3), `l-eff` "Labor efficiency variance" (s3), `v-rate` "VOH rate variance" (s4), `v-eff` "VOH efficiency variance" (s4)
- `eval` (concept) "Đánh giá & Appendix" → `e-resp` "Trách nhiệm & kiểm soát" (s6), `e-pro` "Ưu/nhược standard cost" (s7), `a-fixed` "Fixed OH budget & volume variance" (s8)

---

## Bối cảnh số liệu (VERIFIED từ slide)

### Khung 3 cột — General Model for Variance Analysis
| (1) AQ × AP | (2) AQ × SP | (3) SQ × SP |
- **Price variance** = (1) − (2) = **AQ(AP − SP)**
- **Quantity variance** = (2) − (3) = **SP(AQ − SQ)**
- **Spending variance** = (1) − (3)
- SQ = Standard Quantity allowed = (actual output × standard quantity per unit). (slide 10-15)

### Glacier Peak Outfitters — mountain parka (ví dụ chính, VERIFIED)
- **DM**: standard 0.1 kg/parka @ $5.00/kg; mua & dùng 210 kg/$1,029 cho 2,000 parka → AP=$4.90/kg; SQ=200 kg.
  - MPV = 210($4.90−$5.00) = **$21 F**; MQV = $5.00(210−200) = **$50 U** (slide 10-22/10-25).
- **DL**: standard 1.2 h/parka @ $10.00/h; thực 2,500 h/$26,250 → AR=$10.50; SH=2,400.
  - LRV = 2,500($10.50−$10.00) = **$1,250 U**; LEV = $10.00(2,500−2,400) = **$1,000 U** (slide 10-39/10-42).
- **Variable MOH**: standard 1.2 h/parka @ $4.00/h; thực 2,500 h/$10,500 → AR=$4.20; SH=2,400.
  - VMRV = 2,500($4.20−$4.00) = **$500 U**; VMEV = $4.00(2,500−2,400) = **$400 U** (slide 10-53/10-56).

### Hanson Inc. — Zippy (Quick Check, VERIFIED)
- DM 1.5 lb @ $4.00; 1,700 lb/$6,630, 1,000 Zippy → AP $3.90; SQ 1,500 → MQV **$800 U**, MPV **$170 F**.
- DL 1.5 h @ $12.00; 1,550 h/$18,910 → AR $12.20; SH 1,500 → LRV **$310 U**, LEV **$600 U**.
- VOH 1.5 h @ $3.00; 1,550 h/$5,115 → AR $3.30; SH 1,500 → VMRV **$465 U**, VMEV **$150 U**.

### Subtlety — purchased ≠ used (VERIFIED slide 10-63/10-65)
- Price variance tính trên **toàn bộ lượng MUA**; quantity variance tính trên **lượng DÙNG**. Glacier: mua 210, dùng 200 → MPV trên 210 = $21 F; MQV: dùng 200 vs SQ 200 → **$0**.

### Appendix 10A — Fixed overhead (VERIFIED, MicroDrive sách p.474)
- **Budget variance** = Actual fixed overhead − Budgeted fixed overhead. MicroDrive: $308,000 − $300,000 = **$8,000 U**.
- **Volume variance** = Budgeted fixed overhead − Fixed overhead **applied** (= SH allowed × predetermined fixed OH rate). MicroDrive: $300,000 − $240,000 (40,000 std MH × $6) = **$60,000 U**. Tổng = $68,000 U.
- (Martell case mở đầu slide: fixed OH actual 211,800 / budgeted 210,000 / applied 252,000 → budget variance 1,800 U, volume variance 42,000 F.)

---

## Sections

### s0 — Standards & Standard Cost Card (concept, LO khung)
- **prose**: **Standard** là benchmark đo hiệu quả. Hai loại: **quantity standard** (nên dùng bao nhiêu input cho 1 đơn vị) và **price standard** (nên trả bao nhiêu cho mỗi đơn vị input). **Standard cost card** liệt kê chuẩn lượng & giá của từng input cho 1 đơn vị sản phẩm. (slide 10-6/10-10, sách p.442–443)
- **comparison** "Quantity standard vs Price standard" columns `["", "Quantity standard","Price standard"]`; rows: Trả lời → "Dùng BAO NHIÊU input/đơn vị" | "Trả BAO NHIÊU cho mỗi đơn vị input"; DM → "Standard quantity per unit (gồm scrap bình thường)" | "Standard price per unit (giá giao tận nơi, net discount)"; DL → "Standard hours per unit" | "Standard rate per hour (gồm taxes & fringe)".
- keyTerms (y sách): Standard cost card (p.443); Standard quantity per unit (p.442); Standard price per unit (p.442); Standard hours per unit (p.442); Standard rate per hour (p.443); Standard quantity/hours allowed (p.446).

### s1 — General Model: khung 3 cột (LO khung)
- **prose**: Mọi variance (DM, DL, VOH) đều dùng chung khung 3 cột so sánh ba tích số. **Price variance** = chênh giữa (1) và (2) — chỉ do GIÁ đầu vào. **Quantity variance** = chênh giữa (2) và (3) — chỉ do LƯỢNG dùng. Tách riêng giá & lượng vì hai lý do: trách nhiệm khác nhau (mua hàng vs sản xuất) và thời điểm khác nhau (mua trước, dùng sau). (slide 10-13/10-15)
- **comparison** "Khung 3 cột" columns `["(1) AQ×AP","(2) AQ×SP","(3) SQ×SP"]`; rows: Ý nghĩa → "Thực mua/dùng ở giá thực" | "Thực dùng ở giá chuẩn" | "Lượng chuẩn cho output thực ở giá chuẩn"; Chênh → "Price = (1)−(2)" | "—" | "Quantity = (2)−(3)".
- **formula** `expression: "Price variance = AQ(AP − SP)  ·  Quantity variance = SP(AQ − SQ)"`; legend: "AQ/AP" → "actual quantity/price"; "SQ/SP" → "standard quantity allowed/standard price"; note "SQ = output thực × standard quantity per unit."

### s2 — Materials price & quantity variance (LO1) — Glacier
- **calc** "Glacier DM variances" steps:
  - "AQ×AP = $1,029 (210 kg × $4.90); AQ×SP = $1,050 (210 × $5); SQ×SP = $1,000 (200 × $5)" → "ba cột"
  - "MPV = AQ(AP−SP) = 210($4.90−$5.00)" → "**$21 F**"
  - "MQV = SP(AQ−SQ) = $5.00(210−200)" → "**$50 U**"
  - result "Price favorable $21, Quantity unfavorable $50"
  - meaning "Mua rẻ hơn chuẩn $0.10/kg (F) nhưng dùng dư 10 kg so với chuẩn (U)."
  - implication "Hai chiều ngược nhau → đừng nhìn tổng; phải tách để biết khâu nào tốt/xấu." (slide 10-25, VERIFIED)
- **callout** trap: "MPV Favorable đôi khi do mua NVL rẻ kém chất lượng → đẩy MQV Unfavorable ở khâu sản xuất. Favorable chưa chắc tốt."

### s3 — Labor rate & efficiency variance (LO2) — Glacier
- **calc** "Glacier DL variances" steps:
  - "AH×AR = $26,250 (2,500h × $10.50); AH×SR = $25,000; SH×SR = $24,000 (2,400h × $10)" → "ba cột"
  - "LRV = AH(AR−SR) = 2,500($10.50−$10.00)" → "**$1,250 U**"
  - "LEV = SR(AH−SH) = $10.00(2,500−2,400)" → "**$1,000 U**"
  - result "Rate U $1,250; Efficiency U $1,000"
  - meaning "Trả công cao hơn chuẩn $0.50/h (U) và làm dư 100 giờ (U)."
  - implication "Production manager thường chịu trách nhiệm labor variance vì điều phối kỹ năng/động lực/giám sát." (slide 10-42, VERIFIED)

### s4 — Variable MOH rate & efficiency variance (LO3) — Glacier
- **calc** "Glacier VOH variances" steps:
  - "AH×AR = $10,500 (2,500h × $4.20); AH×SR = $10,000; SH×SR = $9,600 (2,400h × $4)" → "ba cột"
  - "VMRV = AH(AR−SR) = 2,500($4.20−$4.00)" → "**$500 U**"
  - "VMEV = SR(AH−SH) = $4.00(2,500−2,400)" → "**$400 U**"
  - result "Rate U $500; Efficiency U $400"
  - meaning "VOH efficiency variance phản ánh dùng base (DLH) hiệu quả hay không, vì VOH áp theo DLH."
  - implication "VOH efficiency variance thực chất đo hiệu quả của ALLOCATION BASE (giờ), không phải bản thân overhead." (slide 10-56, VERIFIED)

### s5 — Subtlety quan trọng: mua ≠ dùng
- **prose**: Khi lượng MUA khác lượng DÙNG: **price variance tính trên toàn bộ lượng MUA** (để cô lập sớm trách nhiệm mua hàng), **quantity variance tính trên lượng DÙNG**. Glacier: mua 210 kg ($21 F trên 210), dùng đúng 200 kg = SQ 200 → **quantity variance $0**. (slide 10-63/10-65, VERIFIED)
- **callout** key: "Price variance → entire quantity PURCHASED. Quantity variance → quantity USED. Đây là bẫy hay nhầm khi mua ≠ dùng."

### s6 — Trách nhiệm & tính kiểm soát (responsibility & controllability)
- **comparison** "Ai chịu trách nhiệm?" columns `["Variance","Người chịu chính"]`; rows: Materials price → "Purchasing manager"; Materials quantity → "Production manager"; Labor rate/efficiency → "Production manager"; (dùng standard price để tính quantity variance → không bắt production manager gánh phần giá của purchasing).
- **callout** note: "Không phải lúc nào cũng do MỘT người: mua NVL kém chất lượng (purchasing) có thể gây MQV/LEV unfavorable cho production; bảo trì máy kém có thể gây LEV unfavorable." (slide 10-26/10-44)

### s7 — Ưu điểm & vấn đề của standard cost
- **comparison** "Standard cost: lợi & hại" columns `["Ưu điểm","Vấn đề tiềm ẩn"]`; rows:
  - "Cốt lõi của management by exception" | "Dùng variance như 'cây gậy' phạt nhân viên → giảm morale, quyết định lệch lạc"
  - "Benchmark thúc đẩy economy & efficiency; quy trách nhiệm" | "Báo cáo variance thường hàng tháng → thông tin có thể lỗi thời"
  - "Đơn giản hóa bookkeeping" | "Giả định labor-paced & labor là variable — sai trong môi trường tự động (labor là fixed)"
- **callout** trap: "Một variance 'Favorable' có khi tệ ngang hoặc tệ hơn Unfavorable; chỉ đạt chuẩn chưa đủ — cần continuous improvement." (slide 10-67/10-68)

### s8 — Appendix 10A: Fixed overhead budget & volume variance (LO4)
- **prose**: Với FIXED overhead, tách thành **budget variance** (chênh chi tiêu) và **volume variance** (do mức hoạt động thực khác denominator activity dùng để tính rate). (sách p.474–475)
- **formula** `expression: "Budget variance = Actual fixed OH − Budgeted fixed OH  ·  Volume variance = Budgeted fixed OH − Fixed OH applied"`; legend: "Fixed OH applied" → "SH allowed × predetermined fixed OH rate"; "Denominator activity" → "mức hoạt động dùng để tính predetermined rate"; note "Volume variance KHÔNG đo kiểm soát chi phí — chỉ do dùng nhiều/ít công suất so với denominator."
- **calc** "MicroDrive: fixed OH variances" steps:
  - "Budget variance = $308,000 − $300,000" → "**$8,000 U**"
  - "Volume variance = $300,000 − $240,000 (40,000 std MH × $6)" → "**$60,000 U**"
  - result "Tổng fixed OH variance = $68,000 U"
  - meaning "Budget variance = chi tiêu thực vs ngân sách; volume variance = công suất dùng vs denominator."
  - implication "Volume variance Unfavorable ≠ lãng phí — có thể chỉ vì sản xuất ít hơn mức denominator." (sách p.474, VERIFIED)

---

## Quiz (bank ≥13 câu) — stem + options tiếng Việt, term EN; rationale Cơ chế→Bẫy→Khóa; takeaway VI
> Số Hanson/Glacier VERIFIED từ slide 10-x.

1. q1 (basic) — Price variance = ? → "**AQ(AP − SP)**." Bẫy: "SP(AQ−SQ)" (đó là quantity variance), "AP(AQ−SQ)", "AQ(SP−SQ)".
2. q2 (basic) — Standard quantity allowed (SQ) tính thế nào? → "**Output thực × standard quantity per unit**." Bẫy: "lượng thực mua", "lượng thực dùng", "output kế hoạch × standard".
3. q3 (intermediate) — Hanson MQV (1,700 lb dùng, SQ 1,500, SP $4) → **$800 U**. Bẫy: $800 F, $170 U, $170 F.
4. q4 (intermediate) — Hanson MPV (1,700 lb, AP $3.90, SP $4) → **$170 F**. Bẫy: $170 U, $800 U, $800 F.
5. q5 (intermediate) — Hanson LRV (1,550h, AR $12.20, SR $12) → **$310 U**. Bẫy: $310 F, $600 U, $300 U.
6. q6 (intermediate) — Hanson LEV (SR $12, AH 1,550, SH 1,500) → **$600 U**. Bẫy: $600 F, $590 U, $310 U.
7. q7 (intermediate) — Hanson VMEV (SR $3, AH 1,550, SH 1,500) → **$150 U**. Bẫy: $150 F, $465 U, $435 U.
8. q8 (basic) — Ai chịu trách nhiệm chính cho materials PRICE variance? → "**Purchasing manager**." Bẫy: "Production manager", "Maintenance manager", "Sales manager".
9. q9 (intermediate) — Khi lượng MUA khác lượng DÙNG, price variance tính trên lượng nào? → "**Toàn bộ lượng MUA (purchased)**." Bẫy: "lượng dùng (used)", "standard quantity", "lượng nhỏ hơn".
10. q10 (basic) — Variance Favorable nghĩa actual so budget thế nào (chi phí)? → "Actual **THẤP hơn** standard/budget." Bẫy: "actual cao hơn", "actual bằng", "không xác định".
11. q11 (intermediate) — Vì sao tách price & quantity standard riêng? → "Trách nhiệm khác nhau (mua vs sản xuất) & thời điểm mua/dùng khác nhau." Bẫy: "để báo cáo đẹp hơn", "luật yêu cầu", "vì giá luôn đổi".
12. q12 (advanced) — Appendix 10A: Budget variance fixed OH = ? (actual $308,000, budgeted $300,000) → "$308,000 − $300,000 = **$8,000 U**." Bẫy: $8,000 F, $60,000 U, $68,000 U.
13. q13 (advanced) — Appendix 10A: Volume variance KHÔNG đo điều gì? → "**Không đo kiểm soát chi phí** — chỉ phản ánh mức hoạt động thực khác denominator." Bẫy: "đo lãng phí NVL", "đo hiệu quả lao động", "đo giá đầu vào".

> takeaway mỗi câu: 1 câu chốt VI.

---

## Lưu ý thực thi (Codex)
- KHÔNG đổi `content/types.ts`. Khung 3 cột → `comparison`; công thức variance → `formula`; lời giải số → `calc`; trách nhiệm/ưu-nhược → `comparison`.
- Số bám mốc VERIFIED (Glacier $21F/$50U/$1,250U/$1,000U/$500U/$400U; Hanson $800U/$170F/$310U/$600U/$465U/$150U; MicroDrive $8,000U/$60,000U). Số ngoài mốc mà chưa chắc → đọc lại slide, KHÔNG tự điền.
- Mọi node knowledgeMap có `detail` + `sectionId`. Render qua `KnowledgeMapGrouped`.
- Ngôn ngữ: diễn giải VI, term EN (standard cost card, quantity/price standard, materials price/quantity variance, labor rate/efficiency variance, variable overhead rate/efficiency variance, standard quantity allowed, favorable/unfavorable, budget variance, volume variance, denominator activity, management by exception...).
- Đặt chapter mới vào `content/chapters.ts` theo pattern Ch1–9, `order: 10`, `status: "draft"`.
- Sau khi Codex đổ xong: Claude review đối chiếu slide/sách → chuyển `ready`.
