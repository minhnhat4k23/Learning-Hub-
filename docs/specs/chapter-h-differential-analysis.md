# Spec — Chương 13: Differential Analysis — The Key to Decision Making

> Claude (đầu não) → Codex (executor). Nguồn: **Garrison/Noreen/Brewer 17e, Chapter 13** = slide `13. Differential Analysis.pdf` (92 trang) + Glossary sách (book.txt ~line 34199) + **Appendix 13A: Pricing Decisions** (book.txt ~line 35742). Bám sách; số VERIFIED ghi rõ.
> Chuẩn: Rich Teaching Mode + quy ước ngôn ngữ (diễn giải VI, term EN) + [[chuan-ly-thuyet-y-chang-sach]]. KHÔNG đổi `content/types.ts`. **Ch13 CÓ Appendix 13A** (cost-plus pricing & target costing) → bổ sung.

## Meta
- `slug`: `differential-analysis`
- `order`: `13`
- `title`: `"Chapter 13 — Differential Analysis: The Key to Decision Making"`
- `status`: `"draft"`
- `source`: `"Garrison, Noreen, Brewer — Managerial Accounting, 17e, Chapter 13 (slide '13. Differential Analysis')"`
- `bigIdea`: Ra quyết định đúng = chỉ nhìn **future costs & benefits KHÁC NHAU giữa các phương án** (differential analysis). **Sunk cost** và chi phí KHÔNG đổi giữa các phương án đều **irrelevant** → bỏ qua. Khung này áp vào 5 quyết định kinh điển: add/drop segment, make-or-buy, special order, constrained resource, sell-or-process-further.
- `learningObjectives`:
  - "LO1 — Nhận diện relevant vs irrelevant costs/benefits trong một quyết định."
  - "LO2 — Phân tích nên thêm hay bỏ một product line/segment."
  - "LO3 — Phân tích make-or-buy."
  - "LO4 — Phân tích có nên nhận special order."
  - "LO5 — Xác định cách dùng constrained resource sinh lời nhất."
  - "LO6 — Xác định giá trị của việc có thêm constrained resource."
  - "LO7 — Phân tích joint product nên bán tại split-off hay chế biến tiếp."
  - "LO8 (Appendix 13A) — Định giá bằng cost-plus pricing (absorption approach) & target costing."

## knowledgeMap (engine flow, layout tree, collapsible)
Root + 4 nhánh; mỗi node cấp 2 có `detail` + `sectionId`.
- root `diff` — "Differential Analysis" (concept) — detail: "Chỉ xét future cost/benefit khác nhau giữa các phương án." — sectionId s0
- `found` (concept) "Nền tảng" → `f-relevant` "Relevant vs irrelevant" (s0), `f-sunk` "Sunk & opportunity cost" (s0), `f-approach` "Total vs differential approach" (s1)
- `dec` (lo) "Quyết định" → `d-drop` "Add/drop segment" (s2), `d-make` "Make or buy" (s3), `d-special` "Special order" (s4), `d-joint` "Sell or process further" (s7)
- `con` (lo) "Constraint" → `c-use` "Constrained resource" (s5), `c-value` "Value of constraint" (s6), `c-manage` "Managing bottleneck" (s6)
- `price` (lo) "Appendix 13A Pricing" → `p-costplus` "Cost-plus pricing" (s8), `p-target` "Target costing" (s8)

---

## Bối cảnh số liệu (VERIFIED từ slide)

- **Six Key Concepts of Decision Making**: (1) mọi quyết định = chọn giữa ≥2 phương án → định nghĩa phương án; (2) xác định tiêu chí (relevant cost/benefit xét, irrelevant bỏ); (3) **differential analysis** = chỉ xét future cost/benefit KHÁC nhau (differential cost, differential revenue, incremental cost, avoidable cost); (4) **sunk cost luôn irrelevant**; (5) future cost/benefit KHÔNG đổi giữa các phương án = irrelevant; (6) **opportunity cost** phải được xét. (slide 13-3→13-6)
- **Cynthia (relevant cost)**: chi phí xe = sunk (irrelevant); bảo hiểm, phí gửi xe trường, kennel = không đổi → irrelevant; xăng, bảo trì/sửa (dài hạn theo số dặm), giảm giá trị bán lại, vé tàu, phí đỗ xe ở NY = relevant. (slide 13-9→13-12)
- **Lovell — add/drop digital watch (VERIFIED)**: Sales $500,000; variable $200,000 → **CM $300,000**. Fixed $400,000 = avoidable $260,000 (line manager salary $90,000 + advertising-direct $100,000 + rent-factory $70,000) + unavoidable $140,000 (general factory OH $60,000 + depreciation $50,000 sunk + general admin $30,000). Drop → mất CM $300,000 nhưng chỉ tránh được $260,000 → **giữ lời hơn $40,000**. (slide 13-21→13-30)
- **Essex — make or buy (VERIFIED)**: unit cost make $30; outside offer **$25/part × 20,000 = $500,000**; total avoidable cost to make = $340,000 (DM, DL, variable OH, supervisor salary); allocated general factory OH ($10) & depreciation ($2, sunk) **irrelevant** → **financial advantage of MAKING = $160,000** → tiếp tục làm. (slide 13-38→13-43)
- **Jet — special order (VERIFIED)**: giá thường $20; nước ngoài đặt **3,000 units @ $10**; còn dư công suất (đang 5,000/10,000). Incremental revenue 3,000×$10 = $30,000; incremental cost 3,000×$8 variable = $24,000 → **lợi nhuận tăng $6,000** → nhận. Fixed OH hiện hữu không đổi → irrelevant. (slide 13-47→13-49)
- **Northern Optical — special order min price (VERIFIED)**: variable production $10; phải mua máy in logo $50,000 (avoidable fixed); không tốn selling cost. Min price = ($10×10,000 + $50,000) ÷ 10,000 = **$15**. Fixed production $18 & variable selling $1 = irrelevant. (slide 13-50→13-52)
- **Ensign — constrained resource (VERIFIED)**: Machine A1 = bottleneck, 2,400 phút/tuần, chạy 100%. Product 1: CM $24/unit, 1.00 phút/unit → **$24/phút**. Product 2: CM $15/unit, 0.50 phút/unit → 2 units × $15 = **$30/phút**. → ưu tiên **Product 2** (dù CM/unit thấp hơn). Plan: 2,200 Product 2 + 1,300 Product 1 → total CM **$64,200**. (slide 13-57→13-68)
- **Value of constraint**: sẵn lòng trả thêm tối đa = CM/phút của sản phẩm dùng thêm công suất = **$24/phút** (Product 1). (slide 13-70/13-71)
- **Sawmill — sell or process further (VERIFIED)**: Lumber: sales tại split-off $140, sau chế biến $270 → incremental revenue $130, cost chế biến $50 → **lợi $80 → chế biến tiếp**. Sawdust: split-off $40, sau $50 → incremental revenue $10, cost $20 → **lỗ $(10) → bán tại split-off**. Joint cost = **irrelevant** (đã phát sinh tới split-off bất kể quyết định). (slide 13-85→13-89)
- **Appendix 13A — Ritter (cost-plus pricing, VERIFIED)**: đầu tư $100,000, 10,000 units, required ROI 20%; unit product cost (absorption) = **$20**. Markup % on absorption cost = [(20%×$100,000) + ($2×10,000 + $60,000)] ÷ ($20×10,000) = ($20,000+$80,000)/$200,000 = **50%**. Selling price = (1+50%)×$20 = **$30**. (sách p.656–657)

---

## Sections

### s0 — Relevant vs irrelevant: 6 key concepts (LO1)
- **prose**: Differential analysis = chỉ tập trung **future cost & benefit KHÁC nhau** giữa các phương án; mọi thứ khác bỏ qua. Differential cost (chênh chi phí tương lai), incremental cost (phần tăng), avoidable cost (tránh được khi chọn phương án khác). **Sunk cost** (đã phát sinh) và cost không đổi giữa các phương án = irrelevant. **Opportunity cost** (lợi ích bỏ lỡ) phải xét dù không ghi sổ. (slide 13-3→13-6)
- **comparison** "Cynthia: lái xe vs đi tàu" columns `["Khoản mục","Relevant?"]`; rows: Chi phí mua xe → "Irrelevant (sunk)"; Bảo hiểm năm → "Irrelevant (không đổi)"; Xăng → "Relevant"; Bảo trì/sửa (dài hạn) → "Relevant"; Giảm giá trị bán lại do thêm dặm → "Relevant"; Vé tàu → "Relevant"; Phí gửi xe trường / kennel → "Irrelevant (trả dù lái hay đi tàu)".
- keyTerms (y sách): Differential cost (p.571); Differential revenue (p.571); Incremental cost (p.571); Avoidable cost (p.571); Sunk cost (p.572); Opportunity cost (p.572); Relevant cost (p.571).

### s1 — Total vs differential cost approach
- **prose**: Có thể lập income statement đầy đủ cho từng phương án (total cost approach) hoặc chỉ liệt kê khoản KHÁC nhau (differential approach). Differential approach ưu việt vì: (1) hiếm khi đủ thông tin lập báo cáo đầy đủ; (2) trộn irrelevant với relevant gây rối, phân tán khỏi điều quan trọng. (slide 13-14→13-16)
- **note** callout: "Hai cách cho cùng kết luận; differential nhanh & ít gây nhiễu hơn."

### s2 — Add/drop segment (LO2) — Lovell
- **prose**: Quyết định bỏ segment chỉ dựa vào tác động tài chính: so **CM mất đi** nếu bỏ với **fixed cost tránh được** nếu bỏ. Bỏ chỉ khi lợi nhuận TĂNG (avoidable fixed > lost CM). (slide 13-18→13-20)
- **calc** "Lovell: giữ hay bỏ digital watch" steps:
  - "Bỏ → mất contribution margin" → "−$300,000"
  - "Bỏ → tránh được fixed (salary $90k + advertising $100k + rent $70k)" → "+$260,000"
  - result "Bỏ làm lợi nhuận GIẢM $40,000 → **GIỮ**"
  - meaning "CM mất ($300,000) lớn hơn fixed tránh được ($260,000)."
  - implication "General factory OH $60k, depreciation $50k (sunk), general admin $30k là unavoidable → irrelevant; chúng được phân bổ lại cho line khác khi bỏ." (slide 13-30, VERIFIED)
- **trap** callout "Beware allocated fixed costs": "Common fixed cost KHÔNG tránh được nhưng bị phân bổ vào segment làm nó trông lỗ. Bỏ segment KHÔNG xóa được chi phí này (chỉ chuyển sang line khác) → quyết định bỏ dựa trên số 'lỗ' đã phân bổ là sai." (slide 13-31→13-33)

### s3 — Make or buy (LO3) — Essex
- **prose**: **Vertical integration** = tự làm nhiều khâu trong value chain. Make-or-buy so **avoidable cost của việc tự làm** với **giá mua ngoài**. (slide 13-35→13-37)
- **calc** "Essex: làm hay mua part 4A" steps:
  - "Mua = 20,000 × $25" → "$500,000"
  - "Tự làm: tổng avoidable cost (DM, DL, variable OH, supervisor salary)" → "$340,000"
  - result "**Financial advantage of MAKING = $160,000** → tiếp tục tự làm"
  - meaning "Depreciation (sunk) & allocated general factory OH ($10/unit) KHÔNG tránh được → irrelevant."
  - implication "Nếu mặt bằng làm part 4A có thể dùng việc khác, opportunity cost của mặt bằng phải cộng vào chi phí tự làm." (slide 13-43/13-44, VERIFIED)

### s4 — Special order (LO4) — Jet & Northern
- **prose**: **Special order** = đơn một lần, ngoài hoạt động thường. Chỉ xét **incremental cost & benefit**; fixed OH hiện hữu không đổi → irrelevant (khi còn dư công suất). (slide 13-46)
- **calc** "Jet: nhận special order 3,000 @ $10?" steps:
  - "Incremental revenue = 3,000 × $10" → "$30,000"
  - "Incremental cost = 3,000 × $8 variable" → "$24,000"
  - result "**Lợi nhuận tăng $6,000 → NHẬN**"
  - meaning "Giá $10 < giá thường $20 vẫn đáng nhận vì chỉ cần phủ variable cost (đang dư công suất)."
  - implication "Nếu HẾT công suất, phải cộng opportunity cost của doanh số thường bị hi sinh." (slide 13-49, VERIFIED)
- **example** "Northern Optical: giá sàn": body "Variable production $10 × 10,000 + máy in logo $50,000 = $150,000; ÷ 10,000 = **$15/unit**."; meaning "Fixed production $18 & variable selling $1 irrelevant (đơn này không có selling cost, fixed production không đổi); máy in $50,000 là avoidable fixed của riêng đơn này."; implication "Giá sàn = relevant cost trung bình mỗi đơn vị; dưới mức này là lỗ." (slide 13-52, VERIFIED)

### s5 — Constrained resource (LO5) — Ensign
- **prose**: Khi nguồn lực giới hạn (constraint/bottleneck) chặn khả năng đáp ứng cầu, fixed cost thường không đổi → tối đa **total contribution margin**. KHÔNG ưu tiên sản phẩm có CM/unit cao nhất, mà ưu tiên sản phẩm có **CM trên mỗi đơn vị nguồn lực giới hạn** cao nhất. (slide 13-54→13-56)
- **calc** "Ensign: ưu tiên Product 1 hay 2?" steps:
  - "Product 1: CM $24/unit ÷ 1.00 phút" → "$24/phút"
  - "Product 2: CM $15/unit ÷ 0.50 phút" → "$30/phút"
  - result "**Ưu tiên Product 2** ($30/phút > $24/phút) dù CM/unit thấp hơn"
  - meaning "Bottleneck là phút máy A1; mỗi phút của Product 2 sinh nhiều CM hơn."
  - implication "Sản xuất Product 2 trước để đáp ứng cầu, công suất dư mới làm Product 1 → total CM $64,200." (slide 13-62→13-68, VERIFIED)
- **trap** callout: "Bẫy kinh điển: chọn sản phẩm CM/unit cao nhất. ĐÚNG phải là CM trên mỗi đơn vị NGUỒN LỰC GIỚI HẠN."

### s6 — Value of constraint & managing bottleneck (LO6)
- **prose**: Giá trị của thêm 1 đơn vị nguồn lực giới hạn = **CM/đơn vị nguồn lực của sản phẩm sẽ dùng phần thêm đó**. Ensign sẵn lòng trả thêm tối đa **$24/phút** (Product 1 dùng phần dư). (slide 13-70/13-71)
- **comparison** "Cách relaxing (elevating) the constraint" columns `["Cách nới bottleneck"]`; rows: "Tăng ca tại bottleneck"; "Thuê ngoài (subcontract) phần việc ở bottleneck"; "Đầu tư thêm máy tại bottleneck"; "Chuyển công nhân từ khâu không phải bottleneck sang"; "Cải tiến quy trình tại bottleneck"; "Giảm sản phẩm lỗi qua bottleneck". (slide 13-78)

### s7 — Sell or process further (LO7) — Sawmill
- **prose**: **Joint products** = nhiều sản phẩm từ một input chung; **split-off point** = nơi tách thành sản phẩm riêng; **joint cost** = chi phí tới split-off. Quyết định chế biến tiếp khi **incremental revenue > incremental processing cost**. **Joint cost IRRELEVANT** (đã phát sinh dù bán ngay hay chế tiếp). (slide 13-80→13-84)
- **calc** "Sawmill: bán tại split-off hay chế tiếp?" steps:
  - "Lumber: incremental revenue ($270−$140=$130) − cost chế biến $50" → "**+$80 → chế tiếp**"
  - "Sawdust: incremental revenue ($50−$40=$10) − cost chế biến $20" → "**−$10 → bán tại split-off**"
  - result "Lumber chế tiếp; sawdust bán ngay"
  - meaning "Chỉ so doanh thu THÊM với chi phí THÊM sau split-off; joint cost không tham gia."
  - implication "Phân bổ joint cost theo relative sales value chỉ để định giá tồn kho — RẤT NGUY HIỂM nếu dùng cho quyết định." (slide 13-89, VERIFIED)

### s8 — Appendix 13A: Cost-plus pricing & Target costing (LO8)
- **formula** `expression: "Selling price = (1 + Markup percentage) × Cost"`; legend: "Markup % on absorption cost" → "[(Required ROI × Investment) + S&A expenses] ÷ (Unit product cost × Unit sales)"; note "Absorption approach: cost base = unit product cost (DM+DL+var MOH+fixed MOH)."
- **calc** "Ritter: cost-plus pricing" steps:
  - "Unit product cost (absorption)" → "$20"
  - "Markup % = [(20%×$100,000) + ($2×10,000 + $60,000)] ÷ ($20×10,000) = ($20,000+$80,000)/$200,000" → "**50%**"
  - "Selling price = (1+50%) × $20" → "**$30**"
  - result "Giá $30 phủ unit cost $20 + $10 cho S&A và ROI"
  - meaning "Markup được thiết kế để phủ S&A + đạt required ROI ở mức sản lượng dự báo."
  - implication "Nhược điểm: giả định khách BẮT BUỘC mua ở giá đó. Nếu chỉ bán 7,000 (thay vì 10,000), unit cost lên $23 và LỖ $25,000 → bỏ qua cầu thị trường là sai." (sách p.656–658, VERIFIED)
- **note** callout "Target costing": "Ngược chiều cost-plus: bắt đầu từ giá thị trường chấp nhận − lợi nhuận mong muốn = **target cost** mà sản phẩm phải đạt. Dùng khi thị trường quyết định giá." (sách p.633)

---

## Quiz (bank ≥13 câu) — stem + options tiếng Việt, term EN; rationale Cơ chế→Bẫy→Khóa; takeaway VI
> Số VERIFIED từ slide 13-x.

1. q1 (basic) — Trong differential analysis, chi phí nào LUÔN irrelevant? → "**Sunk cost**." Bẫy: "opportunity cost", "differential cost", "avoidable cost".
2. q2 (basic) — Differential analysis tập trung vào? → "Future cost & benefit **KHÁC nhau** giữa các phương án." Bẫy: "mọi chi phí đã ghi sổ", "chi phí quá khứ", "chi phí trung bình mỗi đơn vị".
3. q3 (intermediate) — Lovell nên giữ hay bỏ digital watch? (CM mất $300k, fixed tránh $260k) → "**Giữ** (bỏ làm lợi nhuận giảm $40,000)." Bẫy: "Bỏ vì đang lỗ $100k", "Bỏ tiết kiệm $400k fixed", "Không xác định".
4. q4 (intermediate) — Essex: làm hay mua? (avoidable make $340k, buy $500k) → "**Tự làm**, lợi $160,000." Bẫy: "Mua, rẻ hơn", "Bằng nhau", "Mua vì unit cost $30 > $25".
5. q5 (intermediate) — Jet special order 3,000 @ $10 (variable $8), còn dư công suất → "**Nhận**, lợi nhuận tăng $6,000." Bẫy: "Từ chối vì $10 < giá thường $20", "Từ chối vì dưới full cost", "Bằng nhau".
6. q6 (advanced) — Northern Optical giá sàn (variable production $10, máy in $50,000/10,000 units, fixed production $18 & selling $1 irrelevant) → "**$15**." Bẫy: $10, $29, $50.
7. q7 (advanced) — Ensign: ưu tiên sản phẩm nào? (P1 $24/unit·1 phút; P2 $15/unit·0.5 phút) → "**Product 2** ($30/phút > $24/phút)." Bẫy: "Product 1 (CM/unit cao hơn)", "bằng nhau", "không xác định".
8. q8 (intermediate) — Khi có constraint, nên tối đa hóa cái gì? → "Total contribution margin, dựa trên **CM trên mỗi đơn vị nguồn lực giới hạn**." Bẫy: "CM trên mỗi đơn vị sản phẩm", "doanh thu", "lợi nhuận kế toán mỗi sản phẩm".
9. q9 (intermediate) — Sawmill: sawdust (incremental revenue $10, cost chế biến $20) → "**Bán tại split-off** (chế tiếp lỗ $10)." Bẫy: "Chế biến tiếp", "Bằng nhau", "Phụ thuộc joint cost".
10. q10 (intermediate) — Trong quyết định sell-or-process-further, joint cost (chi phí tới split-off) là? → "**Irrelevant** (đã phát sinh dù bán hay chế tiếp)." Bẫy: "Relevant, phải phân bổ", "Differential cost", "Opportunity cost".
11. q11 (basic) — Opportunity cost là? → "Lợi ích **bỏ lỡ** của phương án không chọn." Bẫy: "chi phí đã chi tiền mặt", "chi phí ghi sổ", "chi phí cố định phân bổ".
12. q12 (intermediate) — Vì sao common allocated fixed cost làm sai quyết định drop? → "Nó **không tránh được** nhưng bị phân bổ làm segment trông lỗ; bỏ segment không xóa được nó." Bẫy: "vì nó là biến phí", "vì nó là sunk cost", "vì nó luôn relevant".
13. q13 (advanced) — Appendix 13A: Ritter markup 50% trên unit cost $20 → selling price? → "(1+50%)×$20 = **$30**." Bẫy: $20, $25, $40.

> takeaway mỗi câu: 1 câu chốt VI.

---

## Lưu ý thực thi (Codex)
- KHÔNG đổi `content/types.ts`. So sánh phương án → `comparison`; lời giải số → `calc`; công thức cost-plus → `formula`; quyết định/relevant → `comparison`/`prose`; callout đúng kind.
- Số bám mốc VERIFIED (Lovell $300k/$260k/$40k; Essex $340k/$500k/$160k; Jet $30k/$24k/$6k; Northern $15; Ensign $24/$30/phút, $64,200; Sawmill +$80/−$10; Ritter 50%/$30). Số ngoài mốc mà chưa chắc → đọc lại slide/sách, KHÔNG tự điền.
- Mọi node knowledgeMap có `detail` + `sectionId`. Render qua `KnowledgeMapGrouped`.
- Ngôn ngữ: diễn giải VI, term EN (differential/incremental/avoidable/opportunity/sunk cost, relevant cost, add/drop segment, make or buy, vertical integration, special order, constraint/bottleneck, relaxing the constraint, joint products, split-off point, sell or process further, cost-plus pricing, markup percentage, target costing...).
- Đặt chapter mới vào `content/chapters.ts` theo pattern Ch1–10, `order: 13`, `status: "draft"`.
- Sau khi Codex đổ xong: Claude review đối chiếu slide/sách → chuyển `ready`.
