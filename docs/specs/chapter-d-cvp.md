# Spec — Chương 5: Cost-Volume-Profit Relationships

> Claude (đầu não) → Codex (executor). Nguồn: **Garrison/Noreen/Brewer 17e, Chapter 5** = slide `5 CVP Analysis.pdf` (103 trang). Bám slide; mọi số liệu dưới đây **VERIFIED từ slide** (ghi mã slide `5-x`).
> Chuẩn áp dụng: **Rich Teaching Mode** (`rich-teaching-mode.md` §A–§J) + **quy ước ngôn ngữ** (memory `quy-uoc-ngon-ngu-noi-dung`): diễn giải tiếng Việt, term tiếng Anh. KHÔNG đổi `content/types.ts` (schema đủ dùng).
> Đây là chương **nặng công thức** → ưu tiên dùng block `formula` (có `legend`) cho mỗi công thức lõi, `calc` cho lời giải có số.

## Meta
- `slug`: `cost-volume-profit`
- `order`: `5` (giữ đúng số chương Garrison; nav sort theo `order`, lỗ hổng 3→5 vô hại. Nếu Chaliyah muốn liền mạch thì đổi `4`.)
- `title`: `"Chapter 5 — Cost-Volume-Profit Relationships"`
- `status`: `"draft"` (Claude review xong mới chuyển `ready`)
- `source`: `"Garrison, Noreen, Brewer — Managerial Accounting, 17e, Chapter 5 (slide '5 CVP Analysis')"`
- `bigIdea`: CVP là công cụ **"what-if"** của nhà quản trị: nắm mối quan hệ giữa **giá bán – chi phí (biến đổi/cố định) – sản lượng** để trả lời ba câu hỏi lớn — bán bao nhiêu thì **hòa vốn**, cần bao nhiêu để đạt **lợi nhuận mục tiêu**, và lợi nhuận **nhạy** thế nào khi một yếu tố thay đổi.
- `learningObjectives`:
  - "LO1 — Giải thích thay đổi sản lượng tác động đến contribution margin và net operating income thế nào."
  - "LO2 — Lập và đọc CVP graph và profit graph."
  - "LO3 — Dùng CM ratio để tính thay đổi của CM và NOI khi sales đổi."
  - "LO4 — Phân tích tác động lên NOI khi variable cost / fixed cost / selling price / sản lượng thay đổi."
  - "LO5 — Xác định break-even point (theo unit và theo dollar)."
  - "LO6 — Xác định mức sales cần để đạt target profit."
  - "LO7 — Tính margin of safety và ý nghĩa của nó."
  - "LO8 — Tính degree of operating leverage và dùng nó dự báo thay đổi NOI."
  - "LO9 — Tính break-even cho công ty multiproduct và giải thích ảnh hưởng của sales mix."

## knowledgeMap (engine flow, layout tree, collapsible) — y chuẩn Ch.1–3
Root + 5 nhánh cấp 1; mỗi node cấp 2 có `detail` (1 câu) + `sectionId`. Không để rơi fallback.
- root `cvp` — "Cost-Volume-Profit" (concept) — detail: "Quan hệ giá – chi phí – sản lượng để ra quyết định." — sectionId s0
- `found` (concept) "Nền tảng" → `f-cm` "Contribution margin" (s1), `f-eq` "Profit equation" (s2), `f-cmratio` "CM ratio" (s4), `f-veratio` "Variable expense ratio" (s4)
- `graph` (lo) "LO2 Đồ thị" → `g-cvp` "CVP graph" (s3), `g-profit` "Profit graph" (s3)
- `be` (lo) "LO5·6 Hòa vốn & mục tiêu" → `b-unit` "Break-even (unit/dollar)" (s6), `t-profit` "Target profit" (s7)
- `risk` (lo) "LO7·8 Rủi ro & đòn bẩy" → `r-mos` "Margin of safety" (s8), `r-struct` "Cost structure" (s9), `r-dol` "Operating leverage" (s9)
- `multi` (lo) "LO9 Multiproduct" → `m-mix` "Sales mix" (s10), `m-be` "BE hỗn hợp" (s10), `m-comm` "Sales commission" (s10)
> Điền `detail` cho mọi node cấp 2 bám định nghĩa trong spec này.

---

## Bối cảnh số liệu — Racing Bicycle Company (RBC), VERIFIED, dùng xuyên suốt s1–s9
- Selling price **P = $500/đơn vị**; variable expense **V = $300/đơn vị** → **Unit CM = $200** (slide 5-10/5-11).
- **Fixed expenses = $80,000/tháng** (slide 5-11).
- **CM ratio = 40%**; **variable expense ratio = 60%** (slide 5-31→5-33).
- Break-even = **400 đơn vị = $200,000** (slide 5-11/5-54/5-58).
- Tại 401 đơn vị → profit **$200** (slide 5-13/5-20); tại 430 → **$6,000** = 30 × $200 (slide 5-14).
- Tại 500 đơn vị → sales **$250,000**, profit **$20,000** (slide 5-38/5-78).
- Target profit **$100,000** → **900 đơn vị / $450,000 sales** (slide 5-66/5-71).
- Margin of safety (tại sales $250,000): **$50,000 = 20% = 100 xe** (slide 5-78→5-80).
- Operating leverage (tại sales $250,000): CM $100,000 ÷ NOI $20,000 = **5**; sales +10% → NOI +50% ($20k→$30k) (slide 5-87→5-89).

### Bối cảnh phụ — Coffee Klatch (dùng cho Quiz, VERIFIED slide 5-36→5-93)
- Giá $1.49/ly; variable $0.36/ly → Unit CM **$1.13**; fixed **$1,300/tháng**; bán 2,100 ly/tháng.
- CM ratio = $1.13 ÷ $1.49 = **0.758**; BE dollar = $1,300 ÷ 0.758 = **$1,715**; BE unit = $1,300 ÷ $1.13 = **1,150 ly**.
- Target profit $2,500 → unit = ($2,500+$1,300) ÷ $1.13 = **3,363 ly**; dollar = $3,800 ÷ 0.758 = **$5,013**.
- Margin of safety = 2,100 − 1,150 = **950 ly**.
- Operating leverage = CM $2,373 ÷ NOI $1,073 = **2.21**; sales +20% → NOI **+44.2%** (2.21 × 20%).

---

## Sections (theo §F: tối đa 1 visual + 1 callout/section; calc/example có meaning/implication)

### s0 — CVP là gì & các giả định
- **prose**: CVP soi quan hệ giá–chi phí–sản lượng; phân biệt **contribution income statement** (phân loại theo behavior: Sales − variable = CM − fixed = NOI) với **traditional income statement** (phân loại theo chức năng: Sales − COGS = gross margin − S&A = NOI). CVP nhấn mạnh **cost behavior**. (slide 5-8)
- **comparison** "Hai cách trình bày Income Statement" columns `["", "Traditional","Contribution"]`; rows: Phân loại → "Theo chức năng (product/period)" | "Theo behavior (variable/fixed)"; Dòng giữa → "Gross margin = Sales − COGS" | "CM = Sales − variable expenses"; Dùng cho → "Báo cáo ra ngoài" | "Ra quyết định nội bộ (CVP)".
- **trap** callout "Ba giả định CVP": "(1) Giá bán không đổi theo sản lượng; (2) chi phí tuyến tính, tách sạch thành variable (cố định/đơn vị) và fixed (cố định/tổng) trong relevant range; (3) multiproduct: sales mix không đổi. Ra ngoài relevant range thì CVP hết đúng." (slide 5-6)

### s1 — Contribution margin (LO1)
- **formula** `expression: "Contribution Margin (CM) = Sales − Variable expenses"`; legend: "Unit CM = P − V" → "phần mỗi đơn vị đóng góp"; note "CM dùng để PHỦ fixed expenses trước; phần dư mới thành net operating income." (slide 5-8/5-9)
- **calc** "RBC: CM hoạt động thế nào" steps (label → expr):
  - "Unit CM" → "$500 − $300 = $200"
  - "Bán 400 đơn vị → tổng CM" → "400 × $200 = $80,000"
  - "CM phủ fixed $80,000" → "$80,000 − $80,000 = $0 NOI"
  - result "Tại 400 đơn vị: hòa vốn (NOI = $0)"
  - meaning "CM lấp đầy fixed trước; mỗi đơn vị bán THÊM sau hòa vốn cộng thẳng $200 vào lợi nhuận."
  - implication "Vì sao bán đơn vị thứ 401 lời đúng $200, không cần lập lại income statement." (slide 5-11→5-14)

### s2 — Profit equation (LO1)
- **formula** `expression: "Profit = Unit CM × Q − Fixed expenses"`; legend: "Q" → "số đơn vị bán"; "Unit CM = P − V" → "lãi gộp biên mỗi đơn vị"; note "Suy ra từ Profit = (P×Q − V×Q) − Fixed; gom (P−V) = Unit CM." (slide 5-17→5-20)
- **example** "Kiểm chứng tại 401 đơn vị": body "Profit = $200 × 401 − $80,000 = $80,200 − $80,000 = $200."; meaning "Phương trình cho ngay lợi nhuận ở BẤT KỲ sản lượng nào mà không cần dựng cả báo cáo."; implication "Đây là động cơ của toàn chương: mọi câu hỏi BE/target/what-if đều giải từ một phương trình này." (slide 5-20)

### s3 — CVP graph & profit graph (LO2)
- **diagram** mermaid (hoặc figure placeholder nếu vẽ khó) mô tả CVP graph: trục X = sản lượng (units), trục Y = dollars; ba đường — Fixed expenses (ngang), Total expenses (dốc từ fixed), Sales (từ gốc 0); giao Sales × Total expenses = **break-even (400 đơn vị / $200,000)**; vùng dưới BE = Loss, trên BE = Profit. (slide 5-23→5-28)
- **note** callout: "Profit graph là bản rút gọn: vẽ thẳng đường Profit = Unit CM × Q − Fixed; cắt trục hoành (profit = 0) đúng tại BE = 400 đơn vị." (slide 5-28→5-29)

### s4 — CM ratio & variable expense ratio (LO3)
- **formula** `expression: "CM ratio = CM ÷ Sales = Unit CM ÷ P"`; legend: "RBC" → "$80,000 ÷ $200,000 = $200 ÷ $500 = 40%"; note "CM ratio = phần của mỗi $1 doanh thu còn lại để phủ fixed + tạo profit." (slide 5-31/5-32)
- **comparison** "CM ratio vs Variable expense ratio" columns `["", "CM ratio","Variable expense ratio"]`; rows: Công thức → "CM ÷ Sales" | "Variable expenses ÷ Sales"; RBC → "40%" | "60%"; Quan hệ → "CM ratio + VE ratio = 100%" | "hai tỉ lệ luôn bù nhau". (slide 5-33/5-34)
- **calc** "Ứng dụng CM ratio" steps:
  - "Sales tăng từ $200,000 → $250,000 (+$50,000)" → "ΔCM = $50,000 × 40% = $20,000"
  - "Profit (tại sales $250,000)" → "(40% × $250,000) − $80,000 = $20,000"
  - result "Mỗi $1 sales thêm → $0.40 CM thêm"
  - meaning "Biết CM ratio là tính ngay tác động lợi nhuận của thay đổi DOANH THU mà không cần biết số đơn vị."
  - implication "CM ratio tiện khi multiproduct / chỉ có số liệu doanh thu, không có số đơn vị." (slide 5-35/5-38)

### s5 — What-if: thay đổi variable / fixed / price / volume (LO4)
- **comparison** "5 kịch bản RBC (gốc: 500 đơn vị, NOI $20,000)" columns `["Kịch bản","Thay đổi","Kết quả NOI"]`; rows (VERIFIED slide 5-40→5-50):
  - "Ex1 — Fixed↑ & volume↑" → "+$10,000 quảng cáo, sales 500→540" → "Sales +$20,000 nhưng NOI −$2,000 (giảm)"
  - "Ex2 — Variable↑ & volume↑" → "+$10 VC/đơn vị, sales 500→580" → "Sales +$40,000, NOI +$10,200"
  - "Ex3 — Price↓, Fixed↑ & volume↑" → "giá −$20, +$15,000 QC, sales 500→650" → "Sales +$62,000, NOI +$2,000"
  - "Ex4 — Variable↑, Fixed↓ & volume↑" → "$15 hoa hồng thay $6,000 lương cứng, sales 500→575" → "Sales +$37,500, NOI +$12,375"
  - "Ex5 — Định giá đơn hàng đặc biệt" → "bán thêm 150 xe, muốn +$3,000 profit" → "Giá báo = $300 VC + ($3,000÷150) = $320/xe"
- **insight** callout: "Sales TĂNG chưa chắc lợi nhuận tăng (Ex1). Luôn so sánh phần CM TĂNG THÊM với phần fixed/variable TĂNG THÊM — đây là tư duy incremental analysis." (slide 5-41/5-42)

### s6 — Break-even analysis (LO5)
- **formula** `expression: "Unit sales to break even = Fixed expenses ÷ Unit CM"`; legend: "RBC" → "$80,000 ÷ $200 = 400 đơn vị"; note "Suy ra từ Profit = Unit CM × Q − Fixed, đặt Profit = 0." (slide 5-54/5-55)
- **formula** `expression: "Dollar sales to break even = Fixed expenses ÷ CM ratio"`; legend: "RBC" → "$80,000 ÷ 40% = $200,000"; note "Dùng khi muốn ra ngay doanh thu hòa vốn." (slide 5-57/5-58)
- **key** callout: "Break-even là mức sales mà profit = 0, tức tổng CM vừa đúng bằng tổng fixed expenses. Đây là gốc của target profit (chỉ thêm số dương vào tử)." (slide 5-11/5-54)

### s7 — Target profit (LO6)
- **formula** `expression: "Unit sales = (Target profit + Fixed expenses) ÷ Unit CM"`; legend: "RBC, target $100,000" → "($100,000 + $80,000) ÷ $200 = 900 đơn vị"; note "Break-even chỉ là trường hợp target = $0." (slide 5-66/5-68)
- **calc** "Target theo dollar sales" steps:
  - "Công thức" → "(Target + Fixed) ÷ CM ratio"
  - "RBC, target $100,000" → "($100,000 + $80,000) ÷ 40% = $450,000"
  - result "$450,000 doanh thu để đạt lợi nhuận $100,000"
  - meaning "Cùng một logic 'phủ fixed + cộng target' nhưng tính theo đồng doanh thu."
  - implication "Đừng quên CỘNG fixed vào target ở tử số — bẫy hay gặp là chỉ chia target cho CM." (slide 5-70/5-71)

### s8 — Margin of safety (LO7)
- **formula** `expression: "Margin of safety = Total sales − Break-even sales"`; legend: "RBC" → "$250,000 − $200,000 = $50,000"; "% = MOS ÷ Total sales" → "$50,000 ÷ $250,000 = 20%"; "Units = MOS$ ÷ P" → "$50,000 ÷ $500 = 100 xe"; note "Sales được phép tụt bao nhiêu trước khi lỗ." (slide 5-77→5-80)
- **realworld** callout: "Margin of safety cao = rủi ro thủng hòa vốn thấp. Cùng doanh thu, công ty fixed cost cao thường có BE cao hơn → margin of safety mỏng hơn → nối thẳng sang phần cost structure." (slide 5-77)

### s9 — Cost structure & operating leverage (LO8)
- **prose**: cost structure = tỉ lệ fixed vs variable. Fixed cao → năm tốt lời đậm, năm xấu lỗ nặng; fixed thấp (variable cao) → lợi nhuận ỔN ĐỊNH hơn qua chu kỳ. (slide 5-83/5-84)
- **formula** `expression: "Degree of operating leverage (DOL) = Contribution margin ÷ Net operating income"`; legend: "RBC tại sales $250,000" → "$100,000 ÷ $20,000 = 5"; note "%ΔNOI = DOL × %ΔSales." (slide 5-86/5-87)
- **calc** "Đòn bẩy khuếch đại lợi nhuận" steps:
  - "DOL = 5, sales tăng 10%" → "%ΔNOI = 5 × 10% = 50%"
  - "Kiểm chứng" → "NOI $20,000 → $30,000 (sales $250k → $275k)"
  - result "Sales +10% → NOI +50%"
  - meaning "DOL đo độ NHẠY của lợi nhuận với doanh thu tại một mức sales cho trước."
  - implication "DOL cao = con dao hai lưỡi: khuếch đại cả lời lẫn lỗ. DOL giảm dần khi sales rời xa break-even." (slide 5-88/5-89)

### s10 — Sales mix, multiproduct break-even & sales commission (LO9)
- **prose**: sales mix = tỉ trọng tương đối các sản phẩm bán ra. Multiproduct dùng **weighted-average CM ratio** để tính BE. (slide 5-99/5-100)
- **calc** "RBC bikes + carts" steps (VERIFIED slide 5-100/5-101):
  - "Tổng sales $550,000; tổng CM $265,000" → "CM ratio bình quân = $265,000 ÷ $550,000 = 48.2%"
  - "Fixed $170,000" → "BE dollar = $170,000 ÷ 48.2% = $352,697"
  - result "BE hỗn hợp = $352,697"
  - meaning "BE multiproduct phụ thuộc MIX: trọng số nghiêng về sản phẩm CM ratio cao thì BE thấp, và ngược lại."
  - implication "Khi mix dịch sang sản phẩm CM ratio thấp, weighted CM ratio giảm → BE TĂNG dù chưa đổi giá hay chi phí." (slide 5-101/5-102)
- **trap** callout "Cơ cấu hoa hồng": "Trả hoa hồng theo DOANH SỐ khiến sales đẩy sản phẩm giá cao dù CM thấp (vd Turbo $150 CM $18 vs XR7 $100 CM $25). Sửa: gắn hoa hồng theo CONTRIBUTION MARGIN để khớp lợi ích với lợi nhuận công ty." (slide 5-96→5-98)

---

## Quiz (bank ≥12 câu) — stem + options tiếng Việt, term EN; rationale theo Cơ chế → Bẫy → Khóa; takeaway tiếng Việt
> Số liệu Quick Check VERIFIED từ slide 5-x. Gọi distractor theo TÊN khái niệm/sai lầm, không A/B/C/D.

1. q1 (basic) — Contribution margin định nghĩa? → đúng: "Sales − variable expenses." Bẫy: "Sales − COGS" (đó là gross margin), "Sales − fixed expenses", "Sales − tất cả chi phí" (đó là NOI).
2. q2 (basic) — CM ratio 40% nghĩa là gì? → "Mỗi $1 doanh thu chừa $0.40 để phủ fixed + tạo profit." Bẫy: "$0.40 là lợi nhuận ròng", "$0.40 là variable cost", "40% doanh thu là fixed cost".
3. q3 (basic) — Break-even point là gì? → "Mức sales mà profit = 0 (tổng CM = tổng fixed)." Bẫy: "mức mà CM = 0", "mức mà sales = variable cost", "mức mà fixed = variable".
4. q4 (intermediate) — Coffee Klatch CM ratio: giá $1.49, VC $0.36 → ($1.49−$0.36)/$1.49 = **0.758**. Bẫy: 0.242 (đó là variable expense ratio), 1.319 (lấy nghịch đảo), 4.139.
5. q5 (intermediate) — Coffee Klatch BE dollar: fixed $1,300 ÷ CM ratio 0.758 = **$1,715**. Bẫy: $1,300 (lấy luôn fixed), $1,788, $3,129.
6. q6 (intermediate) — Coffee Klatch BE unit: $1,300 ÷ $1.13 = **1,150 ly**. Bẫy: 872, 1,200, 3,611.
7. q7 (intermediate) — Coffee Klatch target profit $2,500: ($2,500+$1,300) ÷ $1.13 = **3,363 ly**. Bẫy: 2,212 (quên cộng fixed), 1,150 (chỉ ra BE), 4,200.
8. q8 (intermediate) — Coffee Klatch margin of safety (units): 2,100 − 1,150 = **950 ly**. Bẫy: 3,250 (cộng thay vì trừ), 1,150 (đó là BE), 2,100 (đó là actual sales).
9. q9 (advanced) — Coffee Klatch operating leverage: CM $2,373 ÷ NOI $1,073 = **2.21**. Bẫy: 0.45 (nghịch đảo), 0.34, 2.92.
10. q10 (advanced) — Với DOL 2.21, sales +20% thì NOI tăng? → **44.2%** (2.21 × 20%). Bẫy: 20% (bỏ qua đòn bẩy), 22.1% (lấy 10%), 30%.
11. q11 (intermediate) — RBC tăng quảng cáo $10,000 để sales 500→540 (Unit CM $200): ΔCM = 40×$200 = $8,000; − $10,000 fixed → NOI **giảm $2,000**. Bẫy: tăng $8,000 (quên trừ fixed), tăng $10,000, không đổi.
12. q12 (intermediate) — Target profit theo công thức, tử số là gì? → "**Target profit + Fixed expenses**." Bẫy: "chỉ Target profit", "Target − Fixed", "chỉ Fixed (đó là break-even)".
13. q13 (advanced) — Khi sales mix dịch sang sản phẩm có CM ratio THẤP hơn (các yếu tố khác không đổi), break-even? → "**Tăng**" (weighted CM ratio giảm). Bẫy: "Giảm", "Không đổi", "Phụ thuộc fixed cost".
14. q14 (intermediate) — Vì sao nên trả hoa hồng theo contribution margin thay vì theo doanh số? → "Để sales không đẩy sản phẩm giá cao nhưng CM thấp; khớp lợi ích nhân viên với lợi nhuận công ty." Bẫy: "vì CM dễ tính hơn", "vì luật yêu cầu", "để giảm fixed cost".

> takeaway mỗi câu: 1 câu chốt tiếng Việt (vai trò 'Khóa').

---

## Lưu ý thực thi
- KHÔNG đổi `content/types.ts`. Công thức lõi dùng block `formula` (có `legend` + `note`); lời giải có số dùng `calc` (steps `{label, expr}` + `result` + `meaning` + `implication`); đối chiếu khái niệm dùng `comparison`; CVP graph dùng `diagram` mermaid hoặc `figure` placeholder (đừng bịa ảnh).
- Mọi node `flow` của knowledgeMap có `detail` + `sectionId`. knowledgeMap render qua `KnowledgeMapGrouped` (tự động, không sửa component).
- Ngôn ngữ: diễn giải tiếng Việt, term tiếng Anh (contribution margin, CM ratio, variable expense ratio, break-even point, target profit, margin of safety, cost structure, operating leverage, degree of operating leverage, sales mix, multiproduct, contribution/traditional income statement, relevant range...).
- Đặt chapter mới vào `content/chapters.ts` theo đúng pattern Ch.1–3 (cùng cấu trúc object `Chapter`), `order: 5`.
- Sau khi Codex đổ nội dung: Claude review đối chiếu slide → chuyển `status: "ready"`.
