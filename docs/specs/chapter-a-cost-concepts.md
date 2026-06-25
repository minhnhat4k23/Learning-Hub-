# Chapter Spec — 1. Managerial Accounting & Cost Concepts
> Handoff Claude (đầu não) → Codex (executor). Codex chuyển spec này thành object `Chapter` slug `cost-concepts` trong `content/chapters.ts` theo schema `content/types.ts`.
> Nguồn: **Garrison, Noreen & Brewer — Managerial Accounting, 17e, Chapter 1** (slide môn học, đối chiếu `VERIFIED`). Case study Phở = ví dụ của giảng viên trong slide.

- **slug:** `cost-concepts`
- **order:** 1
- **status:** `draft` (→ `ready` sau khi Chaliyah duyệt độ "đủ đơn giản")
- **source:** Garrison/Noreen/Brewer 17e Ch.1 (slide môn học) + case Phở của giảng viên.
- **quiz language:** theo `docs/quy-uoc-ngon-ngu-quiz.md` — `stem` và `options[].text` dùng tiếng Anh; `options[].rationale` dùng tiếng Việt, giữ thuật ngữ English, theo khung Cơ chế → Bẫy → Khóa.

## bigIdea
> Không có một con số "chi phí" duy nhất. Tùy **MỤC ĐÍCH** quản trị — gán cho cost object, lập báo cáo tài chính, dự đoán theo sản lượng, hay ra quyết định — mà cùng một khoản chi được phân loại và dùng khác nhau (*"different costs for different purposes"*). Biết mình đang phân loại để làm gì thì mới chọn đúng lăng kính.

## learningObjectives
1. Phân biệt managerial vs financial accounting (phục vụ ai, để làm gì).
2. **LO1** — Gán chi phí cho cost object: direct, indirect, common cost.
3. **LO2** — Ba khoản mục chi phí sản xuất: DM, DL, MOH.
4. **LO3** — Phân loại cho báo cáo tài chính: product vs period; dòng luân chuyển chi phí qua tồn kho.
5. **LO4** — Dự đoán hành vi chi phí: variable, fixed, mixed; relevant range; Y = a + bX.
6. **LO5** — Chi phí cho ra quyết định: differential, opportunity, sunk.
7. **LO6** — Báo cáo kết quả: traditional format vs contribution format.

## sections (lý thuyết — KHÔNG sót mục so với slide)

### s0 — Managerial vs Financial Accounting
Financial accounting: cho đối tượng **bên ngoài** (cổ đông, chủ nợ, cơ quan quản lý), theo chuẩn mực, hướng quá khứ. Managerial accounting: cho **nhà quản trị bên trong** để **plan / control / make decisions**, linh hoạt, hướng tương lai. Nêu **5 mục đích phân loại chi phí**: (1) gán cho cost object, (2) hạch toán chi phí sản xuất, (3) lập BCTC, (4) dự đoán hành vi chi phí, (5) ra quyết định.
- keyTerm: **Cost object** — bất kỳ thứ gì cần đo chi phí (sản phẩm, đơn hàng, phân xưởng, khách hàng).

### s-pho — Case study xuyên suốt: quán Phở
Bán 3.000 tô @ 50.000đ → doanh thu 150.000.000đ. Chi phí (slide): Thịt 30tr, Xương 3tr, Bánh phở 9tr, Rau 1,5tr, thực phẩm khác 0,6tr, Điện 5tr, Khấu hao 3tr, Lương đầu bếp 9tr, Lương phục vụ 6tr, Marketing 3tr. Hai khoản ngoài sổ: mặt bằng nhà chủ (cho thuê được 15tr/tháng) và công quản lý của chủ (đi làm nơi khác 10tr/tháng) → opportunity cost. Hai câu gài của slide: "Lợi nhuận khi bán 3.000 vs 4.000 tô?" và "Yếu tố nào làm chi phí mỗi tô đổi?" → dẫn nhập hành vi chi phí.
> **Lưu ý cho Codex & người soạn:** chỉ dùng đúng số liệu slide; KHÔNG tự chế số khác. Việc gán nhãn từng dòng cho mỗi cột (DM/DL/Indirect/Opportunity/Variable/Fixed/Mixed/Product/Period) là bài tập của giảng viên — nếu một dòng nhập nhằng (vd điện = mixed, lương phục vụ = selling) thì trình bày như tình huống "tùy mục đích/đối tượng", không khẳng định một đáp án cứng.

### s1 — LO1: direct / indirect / common
**Direct cost** truy nguyên dễ dàng & kinh tế tới cost object; **Indirect cost** không → phải phân bổ; **Common cost** = indirect phục vụ nhiều cost object cùng lúc, không tách riêng. Chốt: direct/indirect **phụ thuộc cost object đang xét**.

### s2 — LO2: DM, DL, MOH
**DM** (nguyên liệu thành một phần SP, truy nguyên trực tiếp), **DL** (nhân công truy nguyên tới đơn vị SP), **MOH** (mọi chi phí sản xuất trừ DM/DL: indirect materials, indirect labor, khấu hao/điện/thuế tài sản/bảo hiểm **nhà máy**). Ví dụ Phở: DM = thịt/xương/bánh/rau; DL = đầu bếp; MOH = điện bếp, khấu hao thiết bị.

### s3 — Prime & Conversion cost
Prime = DM + DL; Conversion = DL + MOH. **Bẫy:** DL nằm ở cả hai.

### s4 — Nonmanufacturing: Selling & Administrative
**Selling** (có đơn + giao hàng: quảng cáo, hoa hồng, vận chuyển). **Administrative** (điều hành, hành chính). Cả hai có thể direct hoặc indirect.

### s5 — LO3: Product vs Period cost
**Product (inventoriable)** = DM + DL + MOH; bám vào SP, nằm trong tồn kho tới khi bán → thành COGS. **Period** = selling + admin; tính thẳng vào kỳ. Ánh xạ: product chưa bán → Inventory (Balance Sheet); đã bán → COGS (Income Statement); period → Expense ngay.

### s6 — Dòng luân chuyển chi phí sản xuất
Raw Materials → (đưa vào SX) Work in Process → (+DL +MOH, hoàn thành) Finished Goods → (bán) Cost of Goods Sold. Ý nghĩa: product cost có thể "nằm chờ" nhiều kỳ, chỉ thành chi phí trên Income Statement đúng lúc bán.

### s7 — LO4: Variable cost & activity base
Variable: **tổng** tỉ lệ thuận hoạt động; **đơn vị** không đổi. **Activity base / cost driver**: units produced, machine hours, labor hours, miles driven. Một chi phí chỉ "biến đổi" khi xét theo một activity base cụ thể.

### s8 — Fixed cost: committed/discretionary + hành vi đơn vị
Fixed: **tổng** không đổi trong relevant range; **đơn vị** biến thiên **nghịch** (giảm khi sản lượng tăng). **Committed** (dài hạn, khó cắt: khấu hao, thuê dài hạn) vs **Discretionary** (ngắn hạn, linh hoạt: quảng cáo, đào tạo, R&D). Liên hệ Phở: khấu hao 3tr cố định → khấu hao/tô đổi theo sản lượng = lý do chi phí mỗi tô thay đổi.

### s9 — Relevant range & linearity assumption
Quan hệ thực tế là đường cong; kế toán xấp xỉ tuyến tính, chỉ đúng trong **relevant range**. Với fixed cost: khoảng mà đồ thị "nằm ngang"; vượt ra → nhảy bậc (step cost, vd thuê thêm 1.000 sqft).

### s10 — Mixed cost: Y = a + bX
Mixed = cố định + biến đổi (vd hóa đơn điện = thuê bao + theo kWh). Y = tổng; a = tổng định phí (tung độ gốc); b = biến phí/đơn vị (độ dốc); X = mức hoạt động. Ví dụ slide: a=40, b=0,03, X=2.000 → Y = 40 + 60 = **100**.

### s11 — LO5: differential / opportunity / sunk
**Differential (incremental)** cost & **differential revenue**: chênh lệch giữa hai phương án — luôn thích hợp (có thể là biến/định phí). **Opportunity**: lợi ích bị bỏ lỡ, không trên sổ nhưng phải cân nhắc (Phở: 15tr + 10tr). **Sunk**: đã phát sinh, không đổi → luôn không thích hợp. Chốt: chi phí thích hợp = **tương lai + khác biệt** giữa các phương án.

### s12 — LO6: Traditional vs Contribution format
**Traditional** (báo cáo ngoài, gom theo **chức năng**): Sales − COGS = Gross margin; − S&A = NOI. **Contribution** (quản trị nội bộ, gom theo **hành vi**): Sales − Variable = Contribution margin; − Fixed = NOI. Ví dụ slide: Sales 100.000 → (Traditional) COGS 70.000, GM 30.000, S&A 20.000, NOI 10.000; (Contribution) Variable 60.000, CM 40.000, Fixed 30.000, NOI 10.000. **Bẫy:** gross margin ≠ contribution margin. CM là nền cho CVP (Ch.5), segmented reporting, budgeting (Ch.8), special decisions (Ch.13).

## questions (≥12 câu — mỗi đáp án có rationale; bắt buộc gồm các Quick Check gốc của slide)
Thiết kế đầy đủ ở bản tham chiếu trong `content/chapters.ts` (q1–q12). Tóm tắt concept + bẫy:

1. **q1** (basic) product vs period — lương bán hàng nhà máy → period. *Bẫy: "cứ là nhà máy thì product".*
2. **q2** (basic, Quick Check 1) period vs product — thuế tài sản **trụ sở** là period; ở **nhà máy** mới là MOH.
3. **q3** (intermediate) fixed cost **đơn vị** giảm khi sản lượng tăng. *Bẫy: trộn tổng với đơn vị.*
4. **q4** (intermediate, Quick Check 2) biến phí theo activity base (Baskin & Robbins: kem + giấy ăn). *Bẫy: gọi điện/lương/thuê là biến phí.*
5. **q5** (intermediate) DL ở cả prime lẫn conversion. *Bẫy: nhớ máy móc một nhóm.*
6. **q6** (intermediate) direct/indirect phụ thuộc cost object (lương quản đốc). *Bẫy: tuyệt đối hóa.*
7. **q7** (intermediate) common cost (thuê tòa nhà dùng chung). *Bẫy: gọi là direct.*
8. **q8** (intermediate) mixed cost Y=a+bX → 100. *Bẫy: bỏ định phí / gộp định phí vào đơn giá.*
9. **q9** (advanced, Quick Check 5) xe bán được 5.000 KHÔNG phải sunk. *Bẫy: gán nhãn theo tài sản.*
10. **q10** (advanced, case Phở) 15tr + 10tr = opportunity cost. *Bẫy: "không chi tiền thì không phải chi phí".*
11. **q11** (advanced) gross margin ≠ contribution margin (CM = Sales − variable = 40.000). *Bẫy: lấy Sales − COGS.*
12. **q12** (intermediate) committed vs discretionary (quảng cáo = discretionary). *Bẫy: gọi khấu hao/thuê dài hạn là discretionary.*

> Yêu cầu chung mỗi câu: đáp án sai phải **gọi tên đúng cái bẫy**; mỗi câu có `conceptTested` + `takeaway` (nguyên tắc tư duy chuyển được sang bài khác). Bổ sung được Quick Check 3/4 (train ticket / licensing cost = relevant vs irrelevant) nếu muốn dày thêm phần LO5.

## Gợi ý cho Codex khi implement
- `bigIdea` render nổi bật đầu trang (điểm chốt "hiểu bản chất").
- `keyTerms` của s1/s2/s7/s8/s10/s12 hiển thị dạng định nghĩa nhỏ.
- Quiz: chọn sai vẫn bung rationale **tất cả** đáp án + takeaway.
- Liên kết "sunk/opportunity cost" (s11) và "contribution margin" (s12) trỏ tới chương Differential Analysis & CVP sau này.
- Giữ tiếng Việt + thuật ngữ tiếng Anh; KHÔNG sửa `content/types.ts`.
