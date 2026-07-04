# Spec: Managerial Accounting — thêm bigIdeaPillars cho 8 chương (bật BigIdeaModel)

> **Loại:** Chỉ THÊM field `bigIdeaPillars` vào 8 topic đã có sẵn trong `content/managerial.ts`. KHÔNG soạn lại nội dung, KHÔNG đổi `bigIdea`, sections, questions, source.
> **Executor: Codex.** File **DUY NHẤT**: `content/managerial.ts`.
> **NGUYÊN TẮC ĐỘC LẬP MÔN (Chaliyah nhấn 2026-07-04):** mỗi môn đi theo nội dung riêng theo file của nó. Pillars dưới đây rút từ CHÍNH bigIdea + LO của Managerial (Garrison 17e) — KHÔNG mượn/không tham chiếu OB hay môn khác. Tuyệt đối không sửa file môn khác.
> **Vì sao:** gate trong `app/[subject]/[slug]/page.tsx` đã theo điều kiện có-pillar (`chapter.bigIdeaPillars && chapter.bigIdeaPillars.length > 0` → BigIdeaModel; ngược lại block cũ). Thêm `bigIdeaPillars` là 8 chương MA TỰ ĐỘNG lên BigIdeaModel tương tác — KHÔNG cần sửa component/renderer.
> **Chèn ở đâu:** trong mỗi object chapter, chèn `bigIdeaPillars: [...],` NGAY SAU field `bigIdea: '...'` (hoặc `"..."`) và TRƯỚC `learningObjectives: [`. Giữ nguyên thụt lề & dấu phẩy như các field khác.
> **Vị trí `bigIdea` hiện tại (tham chiếu, có thể dịch dòng sau khi chèn):** cost-concepts ~L14, job-order-costing ~L1548, job-order-cost-flows ~L2749, cost-volume-profit ~L3831, master-budget ~L5343, flexible-budgets ~L6543, standard-costs ~L7449, differential-analysis ~L8555.
> **Ngôn ngữ:** diễn giải tiếng Việt, giữ term tiếng Anh (theo đúng phong cách bigIdea sẵn có của MA). 3-4 trụ mỗi chương.
> **Verify:** `npx tsc --noEmit` sạch (Codex). Render 8 trang MA do Claude chạy. KHÔNG commit.

---

## 1. cost-concepts (Chapter 1 — Managerial Accounting and Cost Concepts) — 4 trụ
```ts
bigIdeaPillars: [
  { label: "Gán chi phí cho đối tượng", body: "Mục đích 1 — cost assignment. Direct cost truy nguyên thẳng vào cost object; indirect cost & common cost phải phân bổ. Ba khoản mục chi phí sản xuất: Direct Materials, Direct Labor, Manufacturing Overhead. Prime cost = DM + DL; conversion cost = DL + MOH." },
  { label: "Lập báo cáo tài chính", body: "Mục đích 2 — financial reporting. Product cost (DM + DL + MOH) gắn vào sản phẩm & tồn kho, chỉ thành chi phí khi bán (COGS); period cost (selling & administrative) tính thẳng vào kỳ. Chi phí luân chuyển Raw Materials → Work in Process → Finished Goods → COGS." },
  { label: "Dự đoán theo sản lượng", body: "Mục đích 3 — cost behavior. Variable cost đổi theo activity base (cost driver); fixed cost không đổi trong relevant range (committed vs discretionary) nhưng per-unit thì biến thiên ngược; mixed cost tách bằng Y = a + bX (high-low method)." },
  { label: "Ra quyết định", body: "Mục đích 4 — decision making. Chỉ quan tâm differential cost/benefit (khác nhau giữa các phương án) và opportunity cost; bỏ qua sunk cost. Contribution format income statement (tách variable/fixed) phục vụ ra quyết định, khác traditional format (tách product/period)." },
],
```

## 2. job-order-costing (Chapter 2 — Calculating Unit Product Costs) — 3 trụ
```ts
bigIdeaPillars: [
  { label: "Truy-nguyên-được vs không", body: "Direct materials & direct labor trace thẳng vào từng job qua materials requisition & time ticket. Manufacturing overhead gián tiếp, phát sinh không đều theo thời gian → không thể trace, buộc phải phân bổ (allocate)." },
  { label: "POHR & normal costing", body: "Ước tính TRƯỚC predetermined overhead rate = estimated total MOH ÷ estimated total allocation base. Overhead applied = POHR × mức hoạt động THỰC của job (normal costing). Nhờ vậy biết chi phí job ngay khi hoàn thành, không phải chờ cuối kỳ." },
  { label: "Chọn base đúng mới ra số đúng", body: "Một plantwide POHR dễ bóp méo unit cost nếu các bộ phận tiêu hao overhead khác nhau → dùng nhiều departmental rate, hoặc activity-based costing (Appendix 2A) với nhiều cost pool. Allocation base phải là cost driver thật — thứ thực sự làm phát sinh overhead." },
],
```

## 3. job-order-cost-flows (Chapter 3 — Cost Flows and External Reporting) — 3 trụ
```ts
bigIdeaPillars: [
  { label: "Dòng chi phí qua tài khoản", body: "Ghi nhận bằng journal entries: mua/xuất Raw Materials → Work in Process (DM, DL, MOH applied) → Finished Goods → Cost of Goods Sold. Dùng T-account để biểu diễn trực quan chi phí chạy qua các tài khoản tồn kho." },
  { label: "Lập schedule & báo cáo", body: "Schedule of Cost of Goods Manufactured (tổng hợp DM + DL + MOH áp và điều chỉnh Work in Process) → Schedule of Cost of Goods Sold (điều chỉnh Finished Goods) → income statement cho bên ngoài." },
  { label: "Xử lý under/overapplied overhead", body: "Vì overhead áp bằng POHR ước tính nên lệch so với thực tế: underapplied (áp thiếu) hoặc overapplied (áp thừa). Đóng số dư Manufacturing Overhead vào COGS (hoặc phân bổ theo tỉ lệ) trước khi lập báo cáo ngoài." },
],
```

## 4. cost-volume-profit (Chapter 5 — CVP Relationships) — 3 trụ
```ts
bigIdeaPillars: [
  { label: "Contribution margin là động cơ", body: "CM = Sales − Variable expenses, phần còn lại bù fixed cost rồi mới thành lợi nhuận. CM ratio = CM ÷ Sales cho biết mỗi đồng doanh thu tăng thì net operating income tăng bao nhiêu. Profit = (P − V) × Q − Fixed." },
  { label: "Ba câu hỏi lớn", body: "Break-even (Q hòa vốn = Fixed ÷ CM per unit): bán bao nhiêu thì huề vốn; target profit: cần bao nhiêu để đạt lợi nhuận mục tiêu; margin of safety: doanh thu được phép sụt bao nhiêu trước khi lỗ." },
  { label: "Độ nhạy & cấu trúc chi phí", body: "What-if: đổi selling price / variable cost / fixed cost / volume tác động NOI thế nào. Operating leverage (= CM ÷ NOI) đo mức khuếch đại — cấu trúc nhiều fixed cost thì NOI nhạy hơn với thay đổi doanh thu. Sales mix ảnh hưởng break-even đa sản phẩm." },
],
```

## 5. master-budget (Chapter 8 — Master Budgeting) — 3 trụ
```ts
bigIdeaPillars: [
  { label: "Vì sao & quy trình lập budget", body: "Budget để plan (phối hợp nguồn lực, truyền thông mục tiêu, trả lời what-if) và control (làm chuẩn so với actual). Participative/self-imposed budget tăng cam kết. Toàn bộ khởi đầu từ sales forecast." },
  { label: "Chuỗi operating budgets liên kết", body: "Sales budget → production budget → direct materials, direct labor, manufacturing overhead budgets → ending finished goods inventory → selling & administrative budget. Đầu ra của budget này là đầu vào của budget kế tiếp — buộc phải nhất quán." },
  { label: "Kết tinh ở 3 báo cáo dự toán", body: "Cash budget (thu − chi + financing) → budgeted income statement (kết quả kinh doanh dự kiến) → budgeted balance sheet (tình hình tài chính cuối kỳ). Đây là sản phẩm cuối cùng của master budget." },
],
```

## 6. flexible-budgets (Chapter 9 — Flexible Budgets and Performance Analysis) — 3 trụ
```ts
bigIdeaPillars: [
  { label: "Vì sao static budget đánh giá sai", body: "Static (planning) budget cố định ở mức hoạt động KẾ HOẠCH. Khi mức hoạt động thực khác kế hoạch, so actual với static budget là so 'táo với cam' — lẫn lộn giữa 'làm nhiều/ít hơn dự kiến' và 'chi tiêu tốt/tệ'." },
  { label: "Flexible budget flex theo mức thực", body: "Flexible budget tính lại doanh thu & chi phí NÊN là bao nhiêu Ở MỨC HOẠT ĐỘNG THỰC (dựa cost driver). Đây mới là mốc so sánh công bằng với actual." },
  { label: "Tách variance đúng nguồn", body: "Activity variance = planning budget vs flexible budget (do mức hoạt động đổi — thường không phải lỗi kiểm soát). Revenue & spending variance = flexible budget vs actual (do kiểm soát giá bán/chi tiêu — thuộc trách nhiệm quản lý)." },
],
```

## 7. standard-costs (Chapter 10 — Standard Costs and Variances) — 3 trụ
```ts
bigIdeaPillars: [
  { label: "Standard = price × quantity", body: "Mỗi input có standard price (SP) và standard quantity allowed cho mức output thực (SQ). Standard cost = SP × SQ — mốc 'nên tốn bao nhiêu' để so với thực tế." },
  { label: "Khung 3 cột tách variance", body: "Cột (1) AQ × AP → (2) AQ × SP → (3) SQ × SP. Chênh (1) − (2) = price/rate variance (do GIÁ input); chênh (2) − (3) = quantity/efficiency variance (do LƯỢNG dùng). Tách để biết đúng nguyên nhân, không lẫn lộn." },
  { label: "Áp cho mọi input + quy trách nhiệm", body: "Direct materials (price & quantity), direct labor (rate & efficiency), variable overhead (rate & efficiency), fixed overhead budget & volume variance (Appendix 10A). Mỗi variance quy về đúng bộ phận chịu trách nhiệm (purchasing vs production...)." },
],
```

## 8. differential-analysis (Chapter 13 — Differential Analysis) — 3 trụ
```ts
bigIdeaPillars: [
  { label: "Nguyên tắc relevant cost", body: "Quyết định đúng chỉ nhìn future cost & benefit KHÁC NHAU giữa các phương án (differential/avoidable). Sunk cost và chi phí không đổi giữa các phương án đều irrelevant → bỏ qua. Opportunity cost thì PHẢI tính." },
  { label: "5 quyết định kinh điển", body: "Add/drop segment (so CM mất đi với fixed cost tránh được), make-or-buy (so avoidable cost với giá mua + opportunity cost), special order (chỉ tính incremental), constrained resource, sell-or-process-further (so incremental revenue với incremental cost sau split-off point)." },
  { label: "Bẫy hay mắc", body: "Allocated common/fixed cost bị coi nhầm là relevant; quên opportunity cost của nguồn lực đang dùng; với constrained resource phải xếp ưu tiên theo contribution margin trên mỗi ĐƠN VỊ NGUỒN LỰC KHAN HIẾM (không phải CM trên mỗi đơn vị sản phẩm)." },
],
```

---

## 9. Checklist verify (Layer B)
- Mỗi topic có đúng field `bigIdeaPillars` (Ch1 = 4 trụ; 7 chương còn lại = 3 trụ) → tổng **25 pillars**.
- `bigIdea` cũ giữ NGUYÊN văn (không sửa chữ).
- Không đụng field khác (sections/questions/source/status).
- `npx tsc --noEmit` sạch.
- (Claude) render 8 trang MA: khối "Bản chất chương" phải hiện BigIdeaModel (compass + modal bullet), không vỡ layout 375/768/1440.
