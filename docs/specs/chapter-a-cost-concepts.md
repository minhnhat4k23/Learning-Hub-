# Chapter Spec — A. Cost Concepts & Classifications
> Handoff Claude → Codex. Codex chuyển spec này thành 1 object `Chapter` trong `content/chapters.ts` theo schema `content/types.ts`.
> Trạng thái học thuật: nội dung nền tảng, chuẩn mực và ổn định giữa các giáo trình. `[CẦN ĐỐI CHIẾU]` thuật ngữ/ví dụ với sách + slide của Chaliyah khi có.

- **slug:** `cost-concepts`
- **order:** 1
- **status:** `draft` (chuyển `ready` sau khi đối chiếu giáo trình)
- **source:** Khung Garrison/Noreen/Brewer — *Managerial Accounting*; chuẩn hoá theo giáo trình HCMUT khi có.

## bigIdea
> Không có một con số "chi phí" duy nhất. Tùy **mục đích** (lập báo cáo, dự đoán, hay ra quyết định) mà cùng một khoản chi được phân loại và sử dụng khác nhau — *"different costs for different purposes"*.

## learningObjectives
1. Giải thích vì sao chi phí được phân loại theo nhiều cách khác nhau.
2. Phân biệt **product cost** và **period cost**; xác định 3 thành phần product cost (DM, DL, MOH).
3. Phân biệt **cost behavior**: variable, fixed, mixed — và khái niệm **relevant range**.
4. Phân biệt chi phí theo khả năng truy nguyên: **direct** vs **indirect**.
5. Nhận diện chi phí cho ra quyết định: **differential, opportunity, sunk**.

## sections (lý thuyết — không sót mục)

### s1 — Vì sao phải phân loại chi phí?
Cùng một khoản chi phục vụ ba câu hỏi khác nhau: (a) *Định giá tồn kho & tính lợi nhuận* → cần product/period; (b) *Dự đoán chi phí khi sản lượng đổi* → cần cost behavior; (c) *Chọn phương án* → cần relevant cost. Một cách phân loại "đúng" cho mục đích này có thể "vô dụng" cho mục đích khác.

### s2 — Phân loại theo chức năng (cho báo cáo tài chính)
- **Product cost (inventoriable):** gắn vào sản phẩm, nằm trong tồn kho cho tới khi bán → khi đó thành COGS. Gồm:
  - **Direct Materials (DM)** — nguyên vật liệu truy nguyên trực tiếp.
  - **Direct Labor (DL)** — nhân công trực tiếp truy nguyên được.
  - **Manufacturing Overhead (MOH)** — mọi chi phí sản xuất gián tiếp (indirect materials, indirect labor, khấu hao nhà xưởng, điện xưởng…).
- **Period cost:** chi phí ngoài sản xuất (selling & administrative) → ghi nhận vào kỳ phát sinh, **không** qua tồn kho.
- **keyTerms:** Prime cost = DM + DL; Conversion cost = DL + MOH. (Lưu ý: DL nằm ở **cả hai** → bẫy kinh điển.)

### s3 — Phân loại theo hành vi (cost behavior)
- **Variable cost:** *tổng* thay đổi tỉ lệ với mức hoạt động; *đơn vị* không đổi.
- **Fixed cost:** *tổng* không đổi trong relevant range; *đơn vị* GIẢM khi sản lượng tăng (điểm hay gây nhầm).
- **Mixed (semi-variable) cost:** có cả phần cố định và biến đổi (vd hóa đơn điện có phí thuê bao + theo kWh).
- **relevant range:** khoảng hoạt động mà giả định về hành vi chi phí còn đúng.

### s4 — Phân loại theo khả năng truy nguyên
- **Direct cost:** truy nguyên được tới một đối tượng chi phí (cost object) một cách kinh tế.
- **Indirect cost:** không/khó truy nguyên trực tiếp → phải phân bổ. *Một chi phí là direct hay indirect tùy theo cost object đang xét.*

### s5 — Phân loại cho ra quyết định
- **Differential (incremental) cost:** chênh lệch chi phí giữa các phương án — thứ duy nhất đáng quan tâm khi chọn.
- **Opportunity cost:** lợi ích bị bỏ lỡ của phương án không chọn.
- **Sunk cost:** đã chi, không đổi → **luôn không thích hợp** (liên kết tới chương Relevant Costs).

## questions (bộ câu hỏi bẫy — mỗi đáp án có rationale)

### q1 — basic | conceptTested: product vs period cost
**Stem:** Lương nhân viên bán hàng tại showroom của một nhà máy nên được phân loại là:
- a) **Period cost (chi phí bán hàng).** ✅ — *Đúng.* Hoạt động bán hàng nằm ngoài quá trình sản xuất → ghi nhận ngay vào kỳ, không qua tồn kho.
- b) Product cost, vì công ty là nhà sản xuất. ❌ — *Bẫy "cứ là nhà máy thì là product cost".* Product cost chỉ gồm chi phí **sản xuất**; bán hàng/quản lý là period.
- c) Direct labor. ❌ — *Nhầm khái niệm.* DL là nhân công **trực tiếp làm ra sản phẩm**, không phải bán hàng.
- d) Manufacturing overhead. ❌ — MOH là chi phí **sản xuất** gián tiếp; lương bán hàng không thuộc khâu sản xuất.
- **takeaway:** Vị trí trong chuỗi giá trị (sản xuất vs bán/quản lý) quyết định product hay period — không phải "công ty thuộc ngành gì".

### q2 — intermediate | conceptTested: hành vi của fixed cost trên mỗi đơn vị
**Stem:** Khi sản lượng tăng trong relevant range, **chi phí cố định trên mỗi đơn vị** sẽ:
- a) **Giảm dần.** ✅ — *Đúng.* Tổng fixed không đổi, chia cho số đơn vị lớn hơn → đơn vị giảm.
- b) Không đổi, vì là chi phí cố định. ❌ — *Bẫy kinh điển.* "Cố định" đúng với **tổng**, không đúng với **đơn vị**. Trộn hai góc nhìn là lỗi phổ biến nhất.
- c) Tăng dần. ❌ — Ngược bản chất; chỉ variable cost *đơn vị* mới ổn định, không có khoản nào cố định mà đơn vị tăng theo sản lượng.
- d) Thay đổi tỉ lệ thuận với sản lượng. ❌ — Đó là mô tả của **variable cost tổng**, không phải fixed cost đơn vị.
- **takeaway:** Luôn hỏi "tổng hay đơn vị?" trước khi nói chi phí cố định/biến đổi.

### q3 — intermediate | conceptTested: prime vs conversion cost
**Stem:** Direct Labor (nhân công trực tiếp) thuộc nhóm nào?
- a) **Cả prime cost lẫn conversion cost.** ✅ — *Đúng.* Prime = DM + **DL**; Conversion = **DL** + MOH → DL nằm ở giao của hai nhóm.
- b) Chỉ prime cost. ❌ — *Bẫy nhớ máy móc.* Bỏ sót việc DL cũng là một phần của conversion cost.
- c) Chỉ conversion cost. ❌ — Bỏ sót việc DL nằm trong prime cost.
- d) Không thuộc nhóm nào, vì là period cost. ❌ — DL là **product cost** (chi phí sản xuất), không phải period.
- **takeaway:** DL là "cầu nối": prime nhấn nguyên liệu+nhân công, conversion nhấn công sức biến nguyên liệu thành sản phẩm — DL có mặt ở cả hai.

### q4 — intermediate | conceptTested: direct vs indirect phụ thuộc cost object
**Stem:** Lương quản đốc phân xưởng. Phát biểu nào đúng?
- a) **Là indirect cost đối với từng sản phẩm, nhưng direct cost đối với phân xưởng đó.** ✅ — *Đúng.* Tính direct/indirect luôn gắn với **cost object** đang xét.
- b) Luôn là indirect cost trong mọi trường hợp. ❌ — *Bẫy tuyệt đối hóa.* Đối với cost object "phân xưởng", lương này truy nguyên trực tiếp → direct.
- c) Luôn là direct cost. ❌ — Với cost object "một đơn vị sản phẩm", không thể truy nguyên kinh tế → indirect.
- d) Là period cost. ❌ — Quản đốc thuộc khâu **sản xuất** → là MOH (product cost).
- **takeaway:** "Direct hay indirect?" là câu hỏi vô nghĩa nếu chưa nói rõ đối tượng chi phí.

### q5 — advanced | conceptTested: relevant cost trong quyết định
**Stem:** Doanh nghiệp cân nhắc dùng một mặt bằng đang để trống (đã trả tiền thuê cả năm) cho dự án mới. Yếu tố nào **thích hợp** với quyết định?
- a) **Opportunity cost của mặt bằng (vd khoản cho thuê lại bị bỏ lỡ) nếu có.** ✅ — *Đúng.* Lợi ích thay thế bị mất là chi phí thực của việc dùng mặt bằng, dù không xuất hiện trên sổ.
- b) Tiền thuê cả năm đã trả. ❌ — *Bẫy "tiếc của".* Đó là **sunk cost**, không đổi dù chọn phương án nào → không thích hợp.
- c) Khấu hao đã trích của tài sản cũ trong kho. ❌ — Cũng là chi phí quá khứ, không khác biệt giữa các phương án.
- d) Giá gốc lịch sử của mặt bằng. ❌ — Số liệu quá khứ, không phải dòng tiền tương lai khác biệt.
- **takeaway:** Chi phí thích hợp = **tương lai + khác biệt giữa phương án**. Chi phí trên sổ (sunk, khấu hao quá khứ) thường bị loại; opportunity cost dù vô hình lại rất thích hợp.

## Gợi ý cho Codex khi implement
- Khối `bigIdea` render nổi bật đầu trang chương (đây là điểm chốt "hiểu bản chất").
- `keyTerms` ở s2/s3 nên hiển thị dạng định nghĩa nhỏ (tooltip hoặc list).
- Quiz: chọn sai vẫn bung rationale của **tất cả** đáp án + takeaway.
- Liên kết "sunk cost" ở s5 trỏ tới chương Relevant Costs sau này.
