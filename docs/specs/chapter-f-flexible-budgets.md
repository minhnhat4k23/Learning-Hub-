# Spec — Chương 9: Flexible Budgets and Performance Analysis

> Claude (đầu não) → Codex (executor). Nguồn: **Garrison/Noreen/Brewer 17e, Chapter 9** = slide `chapter 9- flexible budget.pdf` (13 trang) + Glossary sách (book.txt ~line 24631). Bám sách; số VERIFIED ghi rõ.
> Chuẩn: Rich Teaching Mode + quy ước ngôn ngữ (diễn giải VI, term EN) + [[chuan-ly-thuyet-y-chang-sach]]. KHÔNG đổi `content/types.ts`. **Ch9 KHÔNG có Appendix** (đã kiểm).

## Meta
- `slug`: `flexible-budgets`
- `order`: `9`
- `title`: `"Chapter 9 — Flexible Budgets and Performance Analysis"`
- `status`: `"draft"`
- `source`: `"Garrison, Noreen, Brewer — Managerial Accounting, 17e, Chapter 9 (slide 'chapter 9- flexible budget')"`
- `bigIdea`: Static planning budget so sánh **"táo với cam"** khi mức hoạt động thực khác kế hoạch. **Flexible budget** "flex" theo mức hoạt động THỰC để tách chênh lệch thành hai nguồn: phần do **mức hoạt động đổi** (activity variance) và phần do **kiểm soát giá/chi tiêu** (revenue & spending variance) → đánh giá hiệu quả công bằng.
- `learningObjectives`:
  - "LO1 — Lập planning budget và flexible budget với một cost driver."
  - "LO2 — Tính và diễn giải activity variances."
  - "LO3 — Tính và diễn giải revenue và spending variances."
  - "LO4 — Lập performance report (một cost driver) kết hợp activity + revenue/spending variances."
  - "LO5 — Lập planning budget và flexible budget với nhiều cost driver."
  - "LO6 — Lập performance report với nhiều cost driver."

## knowledgeMap (engine flow, layout tree, collapsible)
Root + 3 nhánh; mỗi node cấp 2 có `detail` + `sectionId`.
- root `flex` — "Flexible Budget" (concept) — detail: "Flex budget theo activity thực để so sánh công bằng." — sectionId s1
- `found` (concept) "Nền tảng" → `f-static` "Static planning budget" (s0), `f-flex` "Flexible budget" (s1), `f-mbe` "Management by exception" (s0)
- `var` (lo) "Variances" → `v-act` "Activity variance" (s2), `v-rev` "Revenue variance" (s3), `v-spend` "Spending variance" (s3)
- `rep` (lo) "Performance report" → `r-combine` "Báo cáo kết hợp (1 driver)" (s4), `r-multi` "Nhiều cost driver" (s5), `r-center` "Cost center & non-profit" (s6)

---

## Bối cảnh số liệu — Larry's Lawn Service, tháng 6 (VERIFIED từ slide)
- Đo hoạt động bằng **số bãi cỏ cắt (lawns)**. Planning budget lập cho **500 lawns**; **actual = 550 lawns** (slide 9-8/9-18).
- Doanh thu: **$75/lawn** (flexible budget revenue = $75 × số lawns) (slide 9-18).
- Wages & salaries = **mixed cost: $5,000 fixed + $30/lawn** (slide 9-19).
  - Quick Check 1: flexible budget cho 600 lawns = $5,000 + ($30 × 600) = **$23,000** (VERIFIED) (slide 9-19/9-20).
- Activity tăng 10% (500→550) → revenue +10%, nhưng **net operating income tăng > 10%** do có fixed cost (slide 9-25).
- Revenue variance = **$1,750 Favorable** (actual revenue > flexible budget revenue) (slide 9-29).
- Performance report: activity variance dùng chênh 50 lawns (550−500) × đơn giá (vd 50 × $75; 50 × $30); một dòng "actual $43,000 − budget $41,250" (slide 9-34/9-35).

---

## Sections

### s0 — Static planning budget & vấn đề "táo với cam" (LO1 mở đầu)
- **prose**: **Static planning budget** lập cho MỘT mức hoạt động kế hoạch duy nhất. Khi actual khác kế hoạch (Larry: kế hoạch 500, thực 550 lawns), so trực tiếp actual với planning budget là so "táo với cam" — variable cost thực CHẮC CHẮN cao hơn do làm nhiều hơn, bất kể Larry quản lý giỏi hay dở. (slide 9-6/9-14, sách p.407)
- **callout** trap: "Variance từ static budget KHÔNG cho biết Larry kiểm soát chi phí tốt hay không, vì lẫn lộn 2 thứ: chênh do MỨC HOẠT ĐỘNG và chênh do KIỂM SOÁT. Phải tách ra." (slide 9-15)
- **callout** note "Management by exception": "Hệ thống so actual với budget, đánh dấu sai lệch LỚN để điều tra sâu — trọng tâm của variance analysis cycle." (sách p.406)
- keyTerms (y sách): Planning budget (p.407); Management by exception (p.406).

### s1 — Flexible budget: flex theo activity thực (LO1)
- **prose**: **Flexible budget** ước tính revenue & cost LẼ RA phải là bao nhiêu, GIVEN mức hoạt động THỰC. Để "flex": **total variable cost** đổi tỉ lệ thuận với activity; **total fixed cost** giữ nguyên trong relevant range → so sánh "apples to apples". (slide 9-16/9-17, sách p.407)
- **formula** `expression: "Flexible budget cost = Fixed cost + (Variable cost per unit × Actual activity)"`; legend: "Larry wages" → "$5,000 + $30 × số lawns thực"; note "Đây chính là dạng Y = a + bX áp cho từng dòng chi phí."
- **calc** "Larry: flexible budget wages cho 600 lawns" steps:
  - "Fixed $5,000 + variable $30 × 600" → "$5,000 + $18,000"
  - result "**$23,000**"
  - meaning "Flexible budget điều chỉnh phần variable theo activity thực, giữ fixed cố định."
  - implication "Có flexible budget mới so sánh công bằng được với actual ở cùng mức 600 lawns." (slide 9-20, VERIFIED)

### s2 — Activity variance (LO2)
- **prose**: **Activity variance** = chênh giữa flexible budget và static planning budget, phát sinh DUY NHẤT do mức hoạt động thực khác mức kế hoạch (không liên quan kiểm soát giá/chi tiêu). (sách p.412)
- **formula** `expression: "Activity variance = Flexible budget − Planning budget"`; note "Chênh này do activity, KHÔNG phải do quản lý tốt/dở."
- **callout** insight: "Larry: activity & revenue tăng 10% (500→550) nhưng NOI tăng > 10% — vì fixed cost không đổi nên phần tăng thêm của CM chảy thẳng vào lợi nhuận." (slide 9-25)

### s3 — Revenue & spending variance (LO3)
- **comparison** "Hai biến động so với flexible budget" columns `["Loại","Định nghĩa (y sách)"]`; rows:
  - Revenue variance → "Actual revenue − flexible budget revenue. F nếu revenue CAO hơn mức lẽ ra (given activity thực)."
  - Spending variance → "Actual cost − flexible budget cost. F nếu cost THẤP hơn mức lẽ ra (given activity thực)."
- **calc** "Larry: revenue variance" steps:
  - "Actual revenue − flexible budget revenue ($75 × 550)" → "chênh"
  - result "**$1,750 Favorable**"
  - meaning "Revenue cao hơn mức lẽ ra ở 550 lawns → favorable."
  - implication "Đây mới là biến động phản ánh GIÁ/KIỂM SOÁT, vì đã loại bỏ ảnh hưởng mức hoạt động." (slide 9-29, VERIFIED)
- **callout** key "Quy ước F/U": "Chi phí: actual < budget → **F** (Favorable); actual > budget → **U**. Doanh thu: actual > budget → **F**; actual < budget → **U**." (slide 9-12)

### s4 — Performance report kết hợp — khung 3 cột (LO4)
- **prose**: Báo cáo hiệu quả đặt 3 cột cạnh nhau: **Planning budget → Flexible budget → Actual results**. Chênh Planning↔Flexible = **activity variances**; chênh Flexible↔Actual = **revenue & spending variances**. (slide 9-32/9-35)
- **diagram** flow horizontal: `PLAN` "Planning budget (500 lawns)" → `FLEX` "Flexible budget (550 lawns)" → `ACT` "Actual results (550 lawns)"; edge PLAN→FLEX label "Activity variance" (animated); edge FLEX→ACT label "Revenue & Spending variance" (animated). Mỗi node group concept + detail + sectionId s4.
- **key** callout: "Tách 1 chênh lệch tổng thành 2 nguyên nhân: do LÀM NHIỀU/ÍT hơn (activity) và do GIÁ/CHI TIÊU (revenue & spending). Đây là tinh thần cốt lõi của cả chương."

### s5 — Nhiều cost driver (LO5)
- **prose**: Một cost driver đôi khi không giải thích đủ mọi chi phí. Cost formula của flexible budget có thể mở rộng để nhận **nhiều cost driver**. Larry thêm driver thứ hai (**giờ** edging & trimming) vì thời gian khác nhau giữa các lawn, đưa vào cả công thức doanh thu lẫn chi phí. (slide 9-39/9-42)
- **note** callout: "Mỗi dòng chi phí có thể flex theo driver phù hợp nhất với nó (số lawn, hoặc giờ làm) → ước tính sát hơn."

### s6 — Performance report ở cost center & tổ chức phi lợi nhuận (bối cảnh)
- **comparison** "Báo cáo hiệu quả theo loại đơn vị" columns `["Loại đơn vị","Đặc điểm báo cáo"]`; rows:
  - Cost center → "Dùng cùng nguyên tắc nhưng KHÔNG có revenue/net operating income variance (chỉ có spending variance)."
  - Tổ chức phi lợi nhuận → "Doanh thu có thể gồm cả phần FIXED và VARIABLE (tài trợ, học phí, hiến tặng...) → revenue cũng cần flex." (slide 9-36/9-37)

---

## Quiz (bank ≥11 câu) — stem + options tiếng Việt, term EN; rationale Cơ chế→Bẫy→Khóa; takeaway VI
> Số VERIFIED từ slide 9-x.

1. q1 (basic) — Static planning budget lập cho mấy mức hoạt động? → "**Một** mức hoạt động kế hoạch duy nhất." Bẫy: "mọi mức trong relevant range" (đó là flexible budget), "hai mức", "mức thực tế".
2. q2 (basic) — Flexible budget cho biết gì? → "Revenue & cost **lẽ ra** phải là bao nhiêu, given mức hoạt động THỰC." Bẫy: "doanh thu kế hoạch ban đầu", "chi phí thực tế đã phát sinh", "ngân sách tiền mặt".
3. q3 (intermediate) — Larry: flexible budget wages cho 600 lawns? ($5,000 fixed + $30/lawn) → **$23,000**. Bẫy: $18,000 (quên fixed), $20,000, $25,000.
4. q4 (intermediate) — Activity variance phát sinh do đâu? → "Chỉ do **mức hoạt động thực khác mức kế hoạch**." Bẫy: "do giá đầu vào đổi", "do kiểm soát chi phí kém", "do sai sót kế toán".
5. q5 (intermediate) — Activity variance = ? → "**Flexible budget − Planning budget**." Bẫy: "Actual − Planning budget", "Actual − Flexible budget", "Planning − Actual".
6. q6 (intermediate) — Spending variance = ? → "**Actual cost − Flexible budget cost**." Bẫy: "Actual − Planning budget" (đó là tổng, lẫn activity), "Flexible − Planning" (đó là activity variance), "Actual − giá chuẩn".
7. q7 (basic) — Chi phí có spending variance Favorable khi nào? → "Actual cost **THẤP hơn** flexible budget cost." Bẫy: "actual cao hơn", "actual bằng planning", "khi activity tăng".
8. q8 (intermediate) — Vì sao KHÔNG nên đánh giá kiểm soát chi phí bằng variance từ static budget khi activity thực ≠ kế hoạch? → "Vì nó **lẫn** chênh do mức hoạt động với chênh do kiểm soát." Bẫy: "vì static budget luôn sai", "vì thiếu doanh thu", "vì chưa tính thuế".
9. q9 (intermediate) — Khung performance report 3 cột: chênh Flexible ↔ Actual là loại variance gì? → "**Revenue & spending variance**." Bẫy: "Activity variance" (đó là Planning↔Flexible), "Sales mix variance", "Volume variance".
10. q10 (basic) — Báo cáo hiệu quả cho một **cost center** khác gì? → "KHÔNG có revenue/net operating income variance, chỉ có **spending variance**." Bẫy: "không có spending variance", "giống hệt profit center", "chỉ có activity variance".
11. q11 (advanced) — Larry: activity & revenue tăng 10%, vì sao NOI tăng > 10%? → "Vì **fixed cost không đổi** nên phần CM tăng thêm chảy thẳng vào lợi nhuận." Bẫy: "vì giá bán tăng", "vì variable cost giảm", "vì thuế giảm".

> takeaway mỗi câu: 1 câu chốt VI.

---

## Lưu ý thực thi (Codex)
- KHÔNG đổi `content/types.ts`. Công thức → `formula`; lời giải số → `calc`; đối chiếu → `comparison`; khung 3 cột Planning→Flexible→Actual → `diagram` flow horizontal.
- Số liệu bám slide Larry (mốc VERIFIED: $5,000+$30/lawn → $23,000; revenue variance $1,750 F; 500→550 lawns). Số ngoài mốc mà chưa chắc → đọc lại slide, KHÔNG tự điền.
- Mọi node knowledgeMap có `detail` + `sectionId`. Render qua `KnowledgeMapGrouped`.
- Ngôn ngữ: diễn giải VI, term EN (static planning budget, flexible budget, activity variance, revenue variance, spending variance, management by exception, cost driver, favorable/unfavorable, performance report, cost center...).
- Đặt chapter mới vào `content/chapters.ts` theo pattern Ch1–8, `order: 9`, `status: "draft"`.
- Sau khi Codex đổ xong: Claude review đối chiếu slide/sách → chuyển `ready`.
