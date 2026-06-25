# Spec — Bổ sung Appendix + sửa drift (Ch1, Ch2, Ch3, Ch5)

> Claude (đầu não) → Codex (executor). Phát sinh từ lượt **rà sâu đối chiếu web ↔ sách** (Garrison/Noreen/Brewer 17e). Chaliyah chốt: "lý thuyết cần biết phải y chang sách" + "thêm tất cả Appendix".
> Nguồn chuẩn: **sách `Managerial Accounting sách.pdf`** (KHÔNG phải slide). Mọi số VERIFIED ghi rõ; chỗ bản trích PDF mã hóa lệch → Codex **chép thẳng bảng từ sách**, KHÔNG tự đoán.
> Chuẩn áp dụng: Rich Teaching Mode + quy ước ngôn ngữ (diễn giải tiếng Việt, term tiếng Anh). KHÔNG đổi `content/types.ts`.

---

## PHẦN 1 — Sửa 4 drift nhỏ (đã phát hiện khi rà sâu)

### Fix 1 — Ch1, case Phở: nhãn "lợi nhuận kế toán"
- Vị trí: chapter `cost-concepts`, section `s-pho`, block `examples[0]`.
- Vấn đề: slide có dòng **Tax (20%)**; web gọi 79,9tr là "lợi nhuận kế toán" — thực ra đó là **Earning Before Tax (EBT)**.
- Sửa: đổi nhãn "lợi nhuận kế toán" → **"lợi nhuận trước thuế (EBT)"**, và thêm 1 dòng: "Sau thuế 20%: profit = (150 − 70,1) × 0,8 = **63,92tr**." Phần opportunity cost (−25tr) giữ nguyên để minh họa economic profit (ghi rõ là minh họa khái niệm cơ hội, tính trên EBT).

### Fix 2 — Ch2: thêm term `Bill of materials`
- Vị trí: chapter `job-order-costing`, section `s2` ("Job cost sheet & chứng từ nguồn"), thêm vào `keyTerms`.
- Định nghĩa (y sách, p.63): **Bill of materials** — "Chứng từ liệt kê số lượng từng loại direct material cần để làm ra một sản phẩm." (phân biệt với Materials Requisition Form = phiếu xuất kho thực tế cho một job).

### Fix 3 — Ch2: đổi tên `Base distortion` (term web tự đặt)
- Vị trí: chapter `job-order-costing`, section `s7` ("Plantwide vs multiple/departmental"), keyTerm `Base distortion`.
- Vấn đề: "Base distortion" KHÔNG có trong sách.
- Sửa: bỏ keyTerm tên lạ; diễn đạt lại bằng ngôn ngữ sách → đổi `term` thành mô tả: "Vì sao plantwide rate kém chính xác" (hoặc gộp vào prose). Nội dung: "Dùng một plantwide rate dựa trên một allocation base volume-driven khiến giá job lệch khi sản phẩm tiêu thụ overhead không theo tỉ lệ volume." (sách Ch2, mục Multiple Predetermined Overhead Rates, p.70–71)

### Fix 4 — Ch3: định nghĩa under/overapplied thiếu vế "tài khoản MOH"
- Vị trí: chapter `job-order-cost-flows`, section `s9`, keyTerms `Underapplied`/`Overapplied`.
- Sửa: bổ sung khung của sách (p.117):
  - **Underapplied overhead** — "Số dư **Nợ (debit)** trong tài khoản Manufacturing Overhead, xảy ra khi overhead ÁP vào Work in Process **nhỏ hơn** overhead thực phát sinh trong kỳ." (giữ thêm vế hệ quả: tăng COGS, giảm NOI)
  - **Overapplied overhead** — "Số dư **Có (credit)** trong tài khoản Manufacturing Overhead, xảy ra khi overhead ÁP **lớn hơn** overhead thực." (giảm COGS, tăng NOI)

---

## PHẦN 2 — Appendix 5A → thêm vào Ch5 (Cost-Volume-Profit)
**Analyzing Mixed Costs** (sách p.234–241). Phụ lục giàu lý thuyết nhất, hay dùng để tách mixed cost.

### Section mới s11 — "Appendix 5A — Tách mixed cost: high-low & least-squares"
Đặt SAU section s10 hiện có của Ch5. Nội dung (VERIFIED từ sách):

- **prose**: 5 phương pháp ước tính fixed/variable của mixed cost: **account analysis**, **engineering approach**, **high-low method**, **least-squares regression**. Bước đầu LUÔN là vẽ **scattergraph plot** để chẩn đoán cost có tuyến tính không (Y = total cost = dependent variable trên trục tung; X = activity = independent variable trên trục hoành).

- **comparison** "5 phương pháp ước tính mixed cost" columns `["Phương pháp","Cách làm"]`; rows:
  - Account analysis → "Phân loại từng tài khoản là variable hay fixed dựa trên hiểu biết về bản chất chi phí."
  - Engineering approach → "Phân tích kỹ thuật chi tiết chi phí NÊN là bao nhiêu (industrial engineer đánh giá)."
  - Scattergraph → "Vẽ điểm dữ liệu để chẩn đoán quan hệ có tuyến tính không (bước bắt buộc trước high-low/LSR)."
  - High-low → "Dùng 2 điểm: mức hoạt động CAO nhất và THẤP nhất."
  - Least-squares regression → "Dùng TẤT CẢ điểm dữ liệu, tối thiểu hóa tổng bình phương sai số."

- **formula** `expression: "Variable cost (b) = Δcost ÷ Δactivity = (Cost cao − Cost thấp) ÷ (Activity cao − Activity thấp)"`; legend: "High-low" → "lấy chênh lệch giữa kỳ activity cao nhất và thấp nhất"; note: "Luôn chọn theo mức ACTIVITY cao/thấp nhất, KHÔNG phải mức cost cao/thấp nhất."

- **calc** "High-low — Brentline Hospital" steps (VERIFIED sách p.236–237):
  - "High (June): 8,000 patient-days, $9,800 · Low (March): 5,000 patient-days, $7,400" → "Δ = 3,000 patient-days, $2,400"
  - "Variable cost b" → "$2,400 ÷ 3,000 = $0.80/patient-day"
  - "Fixed cost a (dùng điểm cao)" → "$9,800 − ($0.80 × 8,000) = $3,400"
  - result "**Y = $3,400 + $0.80X**"
  - meaning "High-low chỉ vẽ đường thẳng qua 2 điểm cực trị."
  - implication "Nhược điểm: chỉ dùng 2 điểm, mà 2 kỳ cực trị thường bất thường → dễ lệch so với hành vi chi phí bình thường."

- **calc** "Least-squares — cùng dữ liệu Brentline" steps (VERIFIED sách p.239–241):
  - "Dùng TẤT CẢ 7 điểm, Excel fit đường Y = bX + a" → "y = 0.7589x + 3,430.9"
  - "Variable cost b" → "$0.759/patient-day"
  - "Fixed cost a" → "≈ $3,431/tháng"
  - "R² (goodness of fit)" → "≈ 0.90 → 90% biến thiên của cost được giải thích bởi activity"
  - result "**Y ≈ $3,431 + $0.759X**, R² ≈ 0.90"
  - meaning "LSR dùng toàn bộ dữ liệu nên chính xác hơn high-low (fixed cao hơn $31, variable thấp hơn: $0.759 vs $0.80)."
  - implication "R² càng cao mô hình càng đáng tin; R² thấp → xem lại scattergraph, quan hệ có thể không tuyến tính."

- **trap** callout: "High-low LẤY THEO MỨC ACTIVITY cao/thấp nhất, không phải theo cost cao/thấp nhất — bẫy kinh điển." (sách p.237)

- Quiz Ch5 bổ sung:
  - q15 (intermediate) — High-low Brentline: VC = ($9,800−$7,400)/(8,000−5,000) = **$0.80/patient-day**. Bẫy: $1.225 (chia cost cao/activity cao), $0.75, $1.96.
  - q16 (basic) — High-low chọn 2 kỳ theo tiêu chí nào? → "Mức **activity** cao nhất và thấp nhất." Bẫy: "mức cost cao/thấp nhất", "2 kỳ gần nhất", "trung bình".
  - q17 (intermediate) — R² = 0.90 nghĩa? → "90% biến thiên của cost được giải thích bởi activity." Bẫy: "sai số 90%", "variable cost 90%", "đường thẳng đúng 90% số kỳ".

### knowledgeMap Ch5 — thêm node
Thêm vào nhánh `found` (hoặc tạo nhánh `appendix`): `a5-highlow` "High-low method" (sectionId s11), `a5-lsr` "Least-squares regression" (sectionId s11). Mỗi node có `detail`.

---

## PHẦN 3 — Appendix 2A → thêm vào Ch2 (Job-Order Costing)
**Activity-Based Absorption Costing** (sách p.89–92). Khác mục ABC khái niệm sẵn có (s10) — phụ lục này có VÍ DỤ SỐ đầy đủ (Maxtar Industries).

### Section mới — "Appendix 2A — Activity-Based Absorption Costing (ví dụ Maxtar)"
Đặt SAU section ABC khái niệm hiện có. Nội dung:

- **prose**: ABC gán toàn bộ MOH cho sản phẩm theo các **activity** (sự kiện tiêu thụ overhead). Khác traditional 2 điểm: (1) nhiều cost pool hơn; (2) gồm cả activity KHÔNG theo volume — như **batch-level** (làm mỗi lô, vd setup máy, đặt mua) và **product-level** (theo từng sản phẩm, vd thiết kế). Traditional chỉ dùng base theo volume (DLH).

- **comparison** "Thuật ngữ ABC" columns `["Thuật ngữ","Nghĩa (y sách)"]`; rows:
  - Activity → "Sự kiện làm tiêu thụ overhead resources."
  - Activity cost pool → "'Cái xô' gom chi phí của MỘT activity."
  - Activity measure → "Allocation base làm mẫu số cho một activity cost pool."
  - Activity rate → "Chi phí trong pool ÷ lượng activity measure; dùng để gán overhead cho sản phẩm."
  - Batch-level activity → "Làm mỗi khi xử lý một lô, bất kể lô có bao nhiêu đơn vị (vd setup máy)."
  - Product-level activity → "Liên quan từng sản phẩm cụ thể, bất kể số lô/đơn vị (vd thiết kế)."

- **calc** "Maxtar: Traditional vs ABC" (⚠️ Codex CHÉP THẲNG bảng Exhibit 2A-1 & 2A-2 từ sách p.89–91; dưới đây là mốc VERIFIED để đối chiếu):
  - Traditional plantwide POHR = $3.80/DLH → **UPC Premium $71.60 · Standard $53.70**.
  - ABC 3 pools: supporting direct labor (unit-level), setting up machines (batch-level, **$600/setup**), parts administration (product-level). Tổng overhead $1,520,000 = đúng bằng traditional.
  - Premium tổng ABC overhead $728,000 ÷ 50,000 units = **$14.56/unit**.
  - **UPC ABC: Premium $78.56 (↑ từ $71.60) · Standard $51.96 (↓ từ $53.70)**.
  - result "ABC dịch overhead từ sản phẩm HIGH-volume (Standard ↓) sang LOW-volume (Premium ↑)."
  - meaning "Vì ABC dùng batch-level & product-level measure thay vì chỉ DLH theo volume."
  - implication "Plantwide rate trợ giá chéo: sản phẩm low-volume bị tính thiếu overhead, high-volume bị tính thừa → ABC sửa điều đó."

- **key** callout: "ABC absorption costing vẫn là absorption costing (gán đủ DM+DL+ cả variable & fixed MOH) — chỉ khác CÁCH phân bổ MOH (theo activity, không theo một base volume duy nhất)."

- Quiz Ch2 bổ sung:
  - q13 (advanced) — Khi chuyển từ plantwide sang ABC (có batch/product-level), overhead dịch chuyển thế nào? → "Từ sản phẩm high-volume sang low-volume." Bẫy: "ngược lại", "không đổi", "chỉ đổi nếu tổng overhead đổi".

### knowledgeMap Ch2 — thêm node
Nhánh ABC: thêm `a2-abc-example` "ABC ví dụ Maxtar" (sectionId section mới), `a2-batch` "Batch/Product-level activity" (detail bám định nghĩa trên).

---

## PHẦN 4 — Appendix 3A → ghi nhận nhẹ trong Ch3
**Job-Order Costing: A Microsoft Excel-Based Approach** (sách p.126+). Phụ lục **kỹ thuật Excel** — KHÔNG có khái niệm kế toán mới, chỉ minh họa cách dựng hệ thống job-order costing trên Excel.

- Thêm 1 **note** callout vào cuối Ch3 (`job-order-cost-flows`):
  - kind `note`, title "Appendix 3A — Excel-based approach": "Sách có phụ lục hướng dẫn dựng job-order costing bằng Microsoft Excel. Thuần kỹ thuật bảng tính, KHÔNG thêm lý thuyết kế toán mới — logic vẫn là dòng chi phí RM→WIP→FG→COGS và POHR đã học. Khi cần thực hành, dựng workbook theo Exhibit 3A trong sách."
- KHÔNG dựng section/ví dụ số riêng cho 3A (tránh phình nội dung không giá trị lý thuyết). Nếu Chaliyah muốn bài thực hành Excel riêng thì làm sau.

---

## Lưu ý thực thi (Codex)
- KHÔNG đổi `content/types.ts`. Dùng block sẵn có: `formula`, `calc`, `comparison`, `callout`, `prose`.
- **Số liệu Maxtar (2A) & các bảng**: CHÉP TRỰC TIẾP từ sách PDF (`Managerial Accounting sách.pdf`, Exhibit 2A-1/2A-2 và 5A) — mốc trong spec này để ĐỐI CHIẾU, không thay cho việc đọc bảng gốc. Nếu số đọc được khác mốc → báo lại Claude, KHÔNG tự điền.
- Ngôn ngữ: diễn giải tiếng Việt, term tiếng Anh (mixed cost, high-low method, least-squares regression, scattergraph, R-squared, activity cost pool, activity rate, batch-level/product-level activity, activity-based absorption costing...).
- Section/quiz mới đánh id nối tiếp id hiện có của từng chương (không trùng).
- Sau khi Codex đổ xong: Claude review đối chiếu sách → giữ `status` Ch1/2/3 `ready` (chỉ thêm nội dung), Ch5 vẫn `draft` tới khi review tổng.
