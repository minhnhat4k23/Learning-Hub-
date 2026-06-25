# Spec — Chương 8: Master Budgeting

> Claude (đầu não) → Codex (executor). Nguồn: **Garrison/Noreen/Brewer 17e, Chapter 8** = slide `8. Master Budget (1).pdf` (25 trang) + Glossary sách (book.txt ~line 22329). Bám sách; số VERIFIED ghi rõ.
> Chuẩn: Rich Teaching Mode + quy ước ngôn ngữ (diễn giải VI, term EN) + [[chuan-ly-thuyet-y-chang-sach]]. KHÔNG đổi `content/types.ts`. **Ch8 KHÔNG có Appendix** (đã kiểm).

## Meta
- `slug`: `master-budget`
- `order`: `8` (giữ đúng số chương Garrison; nav sort theo `order`)
- `title`: `"Chapter 8 — Master Budgeting"`
- `status`: `"draft"`
- `source`: `"Garrison, Noreen, Brewer — Managerial Accounting, 17e, Chapter 8 (slide '8. Master Budget')"`
- `bigIdea`: Master budget là **bộ kế hoạch định lượng liên kết** — khởi đầu từ **sales forecast**, chạy qua các budget sản xuất/chi phí/tiền mặt, kết tinh ở **3 báo cáo dự toán** (cash budget, budgeted income statement, budgeted balance sheet). Vừa để **plan** (phối hợp nguồn lực, trả lời "what-if") vừa làm chuẩn để **control** (so actual với budget).
- `learningObjectives`:
  - "LO1 — Hiểu vì sao tổ chức lập budget và quy trình lập."
  - "LO2 — Lập sales budget kèm schedule of expected cash collections."
  - "LO3 — Lập production budget."
  - "LO4 — Lập direct materials budget kèm schedule of cash disbursements cho mua NVL."
  - "LO5 — Lập direct labor budget."
  - "LO6 — Lập manufacturing overhead budget."
  - "LO7 — Lập selling and administrative expense budget."
  - "LO8 — Lập cash budget."
  - "LO9 — Lập budgeted income statement."
  - "LO10 — Lập budgeted balance sheet."

## knowledgeMap (engine flow, layout tree, collapsible)
Root + 3 nhánh; mỗi node cấp 2 có `detail` + `sectionId`.
- root `master` — "Master Budget" (concept) — detail: "Bộ kế hoạch định lượng liên kết, từ sales tới 3 báo cáo dự toán." — sectionId s1
- `found` (concept) "Nền tảng" → `f-budget` "Budget & Planning/Control" (s0), `f-self` "Self-imposed budget" (s0), `f-cont` "Continuous budget" (s0)
- `oper` (lo) "Operating budgets" → `o-sales` "Sales + cash collections" (s2), `o-prod` "Production" (s3), `o-dm` "Direct materials" (s4), `o-dl` "Direct labor" (s5), `o-moh` "Manufacturing overhead" (s6), `o-fg` "Ending finished goods" (s7), `o-sa` "Selling & admin" (s8)
- `fin` (lo) "Financial budgets" → `n-cash` "Cash budget" (s9), `n-is` "Budgeted income statement" (s10), `n-bs` "Budgeted balance sheet" (s10)

---

## Bối cảnh số liệu — Royal Company, quý kết thúc 30/6 (VERIFIED từ slide)
- **Sales budget**: budgeted sales Apr 20,000 · May 50,000 · Jun 30,000 · Jul 25,000 · Aug 15,000 units; giá **$10/unit** → quý (Apr+May+Jun) = 100,000 units = **$1,000,000** (slide 8-21/8-22).
- **Cash collections**: 70% thu trong tháng bán, 30% tháng kế; AR 31/3 = $30,000 thu hết trong April → **tổng thu quý = $940,000** (Quick Check 1, VERIFIED) (slide 8-23/8-27).
- **Production**: desired ending inventory = 20% sales tháng sau; tồn đầu 31/3 = 4,000 units → **production May = 46,000 units** (Quick Check 2, VERIFIED) (slide 8-31/8-35).
- **Direct materials**: 5 pounds/unit; ending materials = 10% nhu cầu sản xuất tháng sau; tồn 31/3 = 13,000 lb; giá **$0.40/lb** → **mua trong May = 221,500 lb** (Quick Check 3, VERIFIED) (slide 8-42/8-46).
- **Cash disbursement NVL**: 50% trả tháng mua, 50% tháng sau; AP 31/3 = $12,000; AP 30/6 = $56,800×50% = $28,400 (slide 8-50/8-55).
- **Direct labor**: 0.05 giờ (3 phút)/unit; **$10/giờ** (slide 8-57).
- **Manufacturing overhead**: variable rate **$20/DLH**; fixed **$50,000/tháng** (gồm $20,000 noncash = depreciation); tổng MOH quý $251,000 / 5,050 DLH = **$49.70/giờ** (slide 8-62/8-64).
- **Selling & administrative**: variable **$0.50/unit bán**; fixed **$70,000/tháng** (gồm $10,000 noncash) (slide 8-72).
- **Cash budget — info thêm**: line of credit 16%, hạn mức $75,000; min cash balance $30,000; vay đầu tháng/trả cuối tháng; chia cổ tức $49,000 (April); mua thiết bị $143,700 (May) + $48,300 (June); cash đầu kỳ 1/4 = $40,000 → phải **vay $48,000**, lãi = $48,000×16%×3/12 = **$1,920** (slide 8-79/8-87).
- **Balance sheet info**: Land $50,000; Common stock $150,000; Retained earnings (1/4) $248,650; Equipment $175,000 (slide 8-92).

---

## Sections

### s0 — Vì sao lập budget? Planning, Control & Self-imposed budget (LO1)
- **prose**: **Budget** = kế hoạch chi tiết cho tương lai, thường ở dạng định lượng, để acquiring & using nguồn lực trong một kỳ. Hai mục đích: **Planning** (đặt mục tiêu + lập các budget để đạt) và **Control** (so budget với actual để giữ đúng hướng). (slide 8-4/8-6, sách p.355)
- **comparison** "Planning vs Control" columns `["", "Planning","Control"]`; rows: Bản chất → "Đặt mục tiêu & cách đạt" | "Thu thập feedback, so actual vs budget"; Thời điểm → "Trước kỳ" | "Trong & sau kỳ".
- **callout** insight "Self-imposed (participative) budget": "Budget do chính manager các cấp lập rồi cấp trên review. Ưu điểm: ước tính sát thực tế hơn, tạo động lực & cam kết, quy trách nhiệm. Rủi ro: **budgetary slack** (cố tình đặt mục tiêu dễ) → cần management review." (slide 8-12/8-14, sách p.356)
- keyTerms (y sách): Budget (p.355); Planning (p.355); Control (p.355); Self-imposed/Participative budget (p.356); Continuous/Perpetual budget ("budget 12 tháng cuộn liên tục", p.355).

### s1 — Master budget: 10 schedule & trình tự liên kết (LO khung)
- **prose**: **Master budget** = nhiều budget riêng nhưng PHỤ THUỘC nhau, trình bày mục tiêu sales/sản xuất/tài chính, kết tinh ở cash budget + budgeted income statement + budgeted balance sheet. Điểm KHỞI ĐẦU luôn là **sales budget** (sales forecast). (sách p.356)
- **diagram** flow horizontal — trình tự master budget (group concept, detail + sectionId):
  - `SALES` "Sales budget" → `PROD` "Production budget" → (`DM` "Direct materials", `DL` "Direct labor", `MOH` "Mfg overhead") → `FG` "Ending finished goods" ; `SALES`→`SA` "Selling & admin"; tất cả dòng tiền → `CASH` "Cash budget" → `IS` "Budgeted income statement" → `BS` "Budgeted balance sheet". (edges animated theo dòng chảy) (slide 8-15)
- **note** callout: "10 schedule trả lời 10 câu hỏi: bán bao nhiêu, thu bao nhiêu tiền, mua bao nhiêu NVL, tốn bao nhiêu chi phí sản xuất, trả bao nhiêu tiền, COGS bao nhiêu, S&A bao nhiêu, vay/trả bao nhiêu, lãi hoạt động bao nhiêu, balance sheet cuối kỳ ra sao." (slide 8-17)

### s2 — Sales budget + cash collections (LO2)
- **prose**: Sales budget = unit × giá. Schedule of expected cash collections tách doanh thu thành dòng tiền theo collection pattern. (slide 8-21/8-23)
- **calc** "Royal: thu tiền quý" steps:
  - "April: AR $30,000 + 70%×$200,000" → "= $170,000"
  - "May: 30%×$200,000 + 70%×$500,000" → "= $410,000"
  - "June: 30%×$500,000 + 70%×$300,000" → "= $360,000"
  - result "**Tổng thu quý = $940,000**"
  - meaning "Doanh thu ghi nhận ≠ tiền thực thu trong kỳ; collection pattern quyết định dòng tiền."
  - implication "Bán nhiều mà thu chậm vẫn có thể thiếu tiền mặt → phải lập cash collections riêng." (slide 8-27, VERIFIED)

### s3 — Production budget (LO3)
- **formula** `expression: "Required production = Budgeted sales + Desired ending inventory − Beginning inventory"`; legend: "Royal" → "ending = 20% sales tháng sau"; note "Doanh nghiệp thương mại thì lập **merchandise purchases budget** thay vì production budget."
- **calc** "Royal: production May" steps:
  - "Sales May 50,000 + ending (20%×June 30,000 = 6,000)" → "= 56,000"
  - "− beginning (20%×May 50,000 = 10,000)" → "= 46,000"
  - result "**Production May = 46,000 units**"
  - meaning "Sản xuất phải đủ cho sales VÀ tồn kho cuối kỳ mong muốn."
  - implication "Quên cộng ending hoặc trừ beginning inventory → kế hoạch sản xuất sai." (slide 8-35, VERIFIED)

### s4 — Direct materials budget + cash disbursements (LO4)
- **formula** `expression: "Required purchases = (Production × usage/unit) + Desired ending materials − Beginning materials"`; legend: "Royal" → "5 lb/unit, ending = 10% nhu cầu SX tháng sau, $0.40/lb".
- **calc** "Royal: NVL mua trong May" steps:
  - "Nhu cầu SX May = 46,000 × 5 lb" → "= 230,000 lb"
  - "+ ending (10% × nhu cầu June) − beginning (10% × 230,000 = 23,000)" → "230,000 + 14,500 − 23,000"
  - result "**Mua May = 221,500 lb**"
  - meaning "Cùng logic 'cho nhu cầu + tồn cuối − tồn đầu' như production budget, nhưng tính theo NVL."
  - implication "Cash disbursements cho NVL còn phụ thuộc lịch trả (Royal: 50% tháng mua, 50% tháng sau)." (slide 8-46, VERIFIED)

### s5 — Direct labor budget (LO5)
- **prose**: DL budget = production × giờ công/unit × đơn giá giờ. Royal: 0.05 giờ/unit × $10/giờ. Giúp doanh nghiệp dự liệu nhân lực (tuyển/giãn). (slide 8-57)
- **note** callout: "DL budget bắt nguồn từ production budget — lại một minh chứng các budget phụ thuộc nhau."

### s6 — Manufacturing overhead budget (LO6)
- **calc** "Royal: MOH & predetermined rate" steps:
  - "Variable MOH = $20/DLH × tổng DLH" → "(tách biến phí)"
  - "Fixed MOH = $50,000/tháng (gồm $20,000 depreciation noncash)" → "(định phí)"
  - "Predetermined rate = tổng MOH quý $251,000 ÷ 5,050 DLH" → "= $49.70/giờ"
  - result "MOH gồm phần variable theo DLH + fixed cố định/tháng"
  - meaning "Phần noncash (depreciation) PHẢI trừ ra khi tính cash disbursement cho MOH."
  - implication "Đừng tính khấu hao vào dòng tiền chi — đó là noncash." (slide 8-62/8-64, VERIFIED)

### s7 — Ending finished goods inventory budget
- **prose**: Tính **unit product cost** (DM + DL + MOH áp) rồi nhân số đơn vị tồn cuối kỳ → giá trị finished goods trên budgeted balance sheet. Royal: tồn cuối 5,000 units ở đơn giá ≈ $4.99. (slide 8-66/8-70)
- **key** callout: "Đây là cầu nối: gắn chi phí sản xuất vào tồn kho trên balance sheet và COGS trên income statement."

### s8 — Selling & administrative expense budget (LO7)
- **prose**: S&A tách **variable** ($0.50/unit bán) + **fixed** ($70,000/tháng, gồm $10,000 noncash). Cash disbursement cho S&A = tổng S&A − phần noncash. (slide 8-72)

### s9 — Cash budget (LO8)
- **prose**: Cash budget gom mọi dòng tiền. **4 phần**: (1) Cash receipts (loại trừ tiền từ financing); (2) Cash disbursements (loại trừ trả gốc & lãi); (3) Cash excess/deficiency (đối chiếu min cash → cần vay hay trả được); (4) Financing (vay & trả). (slide 8-78/8-79, sách p.357)
- **calc** "Royal: cần vay bao nhiêu?" steps:
  - "Royal giữ min cash $30,000; cash khả dụng < min" → "thiếu hụt"
  - "Vay đầu tháng trên line of credit 16%" → "**vay $48,000**"
  - "Lãi = $48,000 × 16% × 3/12" → "= $1,920"
  - result "Vay $48,000, lãi $1,920 (vay 1/4, trả 30/6)"
  - meaning "Cash budget cho biết KHI NÀO thiếu/dư tiền để chủ động vay/đầu tư."
  - implication "Lợi nhuận dương vẫn có thể cạn tiền mặt — cash budget mới lộ ra điều đó." (slide 8-82/8-87, VERIFIED)
- **comparison** "4 phần của Cash Budget" columns `["Phần","Nội dung"]`; rows: Receipts → "Mọi dòng thu (trừ financing)"; Disbursements → "Mọi dòng chi (trừ trả gốc/lãi)"; Excess/Deficiency → "Đối chiếu min cash → vay hay trả"; Financing → "Chi tiết vay & trả".

### s10 — Budgeted income statement & balance sheet (LO9, LO10)
- **prose**: Sau khi có lãi vay từ cash budget → lập **budgeted income statement** (Sales $1,000,000 − COGS − S&A − interest $1,920 = net income). Cuối cùng **budgeted balance sheet** dùng số dư từ các budget + thông tin đầu kỳ (Land $50,000, Common stock $150,000, Retained earnings $248,650, Equipment $175,000). (slide 8-88/8-94)
- **key** callout: "Budgeted income statement & balance sheet là ĐÍCH của master budget — mọi schedule trước đó đổ số vào hai báo cáo này. Đây là 'what-if' tài chính trước khi kỳ thật diễn ra."

---

## Quiz (bank ≥12 câu) — stem + options tiếng Việt, term EN; rationale Cơ chế→Bẫy→Khóa; takeaway VI
> Số Quick Check VERIFIED từ slide 8-x.

1. q1 (basic) — Điểm KHỞI ĐẦU của master budget? → "**Sales budget** (sales forecast)." Bẫy: "Production budget", "Cash budget", "Budgeted balance sheet".
2. q2 (basic) — Budget phục vụ 2 mục đích nào? → "**Planning & Control**." Bẫy: "Planning & Pricing", "Control & Taxation", "Forecasting & Auditing".
3. q3 (intermediate) — Royal: tổng cash collections quý? (70%/30%, AR $30,000) → **$940,000**. Bẫy: $700,000, $220,000, $190,000.
4. q4 (intermediate) — Royal: production cho May? (ending 20% tháng sau, đầu kỳ tính được) → **46,000 units**. Bẫy: 56,000 (quên trừ beginning), 62,000, 52,000.
5. q5 (advanced) — Royal: NVL mua trong May? (5 lb/unit, ending 10% tháng sau) → **221,500 lb**. Bẫy: 230,000 (chỉ nhu cầu SX), 240,000, 211,500.
6. q6 (intermediate) — Công thức production budget? → "Sales + **desired ending inventory** − beginning inventory." Bẫy: "Sales − ending + beginning" (sai dấu), "Sales only", "Sales + beginning − ending".
7. q7 (basic) — Doanh nghiệp THƯƠNG MẠI lập gì thay cho production budget? → "**Merchandise purchases budget**." Bẫy: "Sales budget", "Cash budget", "không cần budget nào".
8. q8 (intermediate) — Cash budget gồm mấy phần, là gì? → "**4**: receipts, disbursements, excess/deficiency, financing." Bẫy: "3 phần", "2 phần (thu/chi)", "5 phần gồm cả thuế".
9. q9 (intermediate) — Khi tính cash disbursement cho MOH (hoặc S&A), xử lý depreciation thế nào? → "**Trừ ra** vì là noncash." Bẫy: "Cộng vào", "Giữ nguyên", "Nhân đôi".
10. q10 (basic) — Budgetary slack là gì? → "Cố tình đặt mục tiêu budget **dễ đạt** để bản thân trông tốt." Bẫy: "phần budget chưa dùng", "sai số dự báo", "khoản dự phòng tiền mặt".
11. q11 (basic) — Continuous (perpetual) budget? → "Budget **12 tháng cuộn liên tục**, thêm 1 tháng/quý khi tháng/quý hiện tại kết thúc." Bẫy: "budget cố định 1 năm", "budget không bao giờ sửa", "budget chỉ cho tiền mặt".
12. q12 (intermediate) — Ưu điểm chính của self-imposed budget? → "Ước tính sát hơn + tạo động lực/cam kết do người trực tiếp lập." Bẫy: "luôn nhanh hơn", "loại bỏ hoàn toàn slack", "không cần cấp trên duyệt".
13. q13 (advanced) — Royal vay $48,000 ở line of credit 16%, vay 1/4 trả 30/6; lãi? → "$48,000 × 16% × 3/12 = **$1,920**." Bẫy: $7,680 (cả năm), $960, $2,560.

> takeaway mỗi câu: 1 câu chốt VI.

---

## Lưu ý thực thi (Codex)
- KHÔNG đổi `content/types.ts`. Công thức → `formula`; lời giải số → `calc`; đối chiếu → `comparison`; sơ đồ trình tự master budget → `diagram` flow horizontal.
- Số liệu các schedule chi tiết: bám slide Royal (đã VERIFIED các mốc $940,000 / 46,000 / 221,500 / vay $48,000 / lãi $1,920). Số nào ngoài các mốc này mà chưa chắc → đọc lại slide, KHÔNG tự điền.
- Mọi node knowledgeMap có `detail` + `sectionId`. Render qua `KnowledgeMapGrouped`.
- Ngôn ngữ: diễn giải VI, term EN (master budget, sales/production/direct materials/direct labor/manufacturing overhead/selling & administrative/cash budget, budgeted income statement/balance sheet, self-imposed/participative budget, budgetary slack, continuous/perpetual budget, responsibility accounting...).
- Đặt chapter mới vào `content/chapters.ts` theo pattern Ch1–5, `order: 8`, `status: "draft"`.
- Sau khi Codex đổ xong: Claude review đối chiếu slide/sách → chuyển `ready`.
