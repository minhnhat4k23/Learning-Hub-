# Spec: DTB Topic 05 — MS Excel (Data mastery + Decision modeling)

> **Loại:** Soạn mới một topic hoàn chỉnh (rich teaching mode), thay placeholder `topic05`.
> **File cần sửa:** `content/dtb.ts`.
> **Nguồn:** slide `Topic 05 MSExcel slides.pdf` (Part 5: Applications — MS Excel). KHÔNG thêm khái niệm/công thức ngoài slide. **KHÔNG bịa số liệu lời giải** — chỉ mô tả cách dựng mô hình + công cụ Excel nào giải, không tự điền đáp án.
> **Tính chất:** topic dày, 2 mảng (data list tools + business modeling) + nền tảng. Block mix flow + comparison + callout có menu/function. Function name + menu path giữ tiếng Anh đúng slide.
> **Quy ước:** diễn giải tiếng Việt, term/function/menu tiếng Anh; quiz stem/options tiếng Anh, rationale/takeaway tiếng Việt.
> **Verify:** `npx tsc --noEmit` pass; render-check (Codex). KHÔNG commit.

---

## 0. Wiring (làm trước)

1. Tạo `const topic05: Chapter = { ... }` (sau `topic04`, trước `createPlaceholderTopic`).
2. Thêm vào assembly: `if (order === 5) return topic05;` (sau dòng order===4).

Helper: `flowBlock`, `calloutBlock`, `comparisonBlock` (đã có). **Renderer contract:** comparison `columns.length === cells.length + 1`; flow edges trỏ node có thật; node id dùng `_`.

---

## 1. Khung Chapter

```ts
const topic05: Chapter = {
  slug: "topic-05",
  order: 5,
  title: "Topic 05 — MS Excel: Dữ liệu & Mô hình hoá quyết định",
  bigIdea:
    "Excel không phải bảng tính để 'điền số' — nó là công cụ mô hình hoá quyết định. Một workbook có thể chứa cả triệu dòng dữ liệu (2²⁰ hàng × 2¹⁴ cột), nhưng giá trị thật của Excel với business manager nằm ở hai việc: (1) tổ chức & tóm tắt dữ liệu thực — sort, filter, PivotTable, Vlookup, subtotal — để thấy bức tranh ẩn trong một danh sách; và (2) mô hình hoá một bài toán kinh doanh rồi đặt câu hỏi 'what-if': giá nào thì hoà vốn? cấu hình nào tối đa lợi nhuận (Solver)? lợi nhuận nhạy thế nào nếu chi phí tăng 10% (sensitivity analysis)? kịch bản lạc quan so với bi quan ra sao (scenario)? Kỹ năng biến số liệu thành quyết định này là thứ mọi vị trí quản lý đều cần — bạn thử nghiệm quyết định trên mô hình trước khi mạo hiểm tiền thật.",
  learningObjectives: [
    "Mô tả lịch sử & key features của Excel (workbook nhiều sheet; 2²⁰ hàng × 2¹⁴ cột; cell chứa text/number/date/time/function/formula; macro).",
    "Dùng các phím tắt navigation/selection & editing thông dụng để thao tác nhanh.",
    "Tổ chức multidimensional data trong một list: Freeze, Find/Replace, Sort, Filter, Advanced/Custom Filter, Conditional Formatting, Subtotals.",
    "Dùng PivotTable & PivotChart để tóm tắt dữ liệu theo nhiều chiều (rows/columns, sum/average, lọc theo điều kiện).",
    "Dùng Vlookup để tra cứu giá trị từ một bảng khác (vd tính cost sau discount).",
    "Dùng array formula (TRANSPOSE, SUMPRODUCT, SUM dạng mảng) và phím Ctrl+Shift+Enter; hiểu ràng buộc 'không xoá một ô lẻ trong mảng'.",
    "Mô hình hoá một bài toán kinh doanh thành spreadsheet (P = R − C) và chọn đúng công cụ phân tích.",
    "Dùng Solver để tối ưu (maximize profit / đạt mục tiêu) với bài toán nhiều biến.",
    "Dùng what-if analysis & sensitivity analysis để tìm breakeven, target profit, độ nhạy theo P/p, P/F, P/v.",
    "Dùng Scenario Manager để lưu các kịch bản (normal / favorite / unfavorite).",
    "Dùng financial functions (FV/PV) để mô hình hoá kế hoạch tiết kiệm/đầu tư.",
    "Bật Developer tab, tạo macro + command button, và lock/protect spreadsheet (chỉ chừa ô nhập liệu).",
  ],
  knowledgeMap: { /* mục 2 */ },
  sections: [ /* mục 3 — s1..s14 */ ],
  questions: [ /* mục 4 — q01..q08 */ ],
  status: "ready",
  source:
    "Digital Technology in Business — Topic 05 MSExcel slides.pdf (Part 5: Applications - MS Excel).",
};
```

---

## 2. knowledgeMap (root → 3 nhóm → leaf)

```ts
knowledgeMap: {
  engine: "flow",
  layout: "tree",
  collapsible: true,
  caption:
    "Excel = nền tảng → làm chủ dữ liệu (list) → mô hình hoá quyết định. Bấm node để mở chi tiết và nhảy tới phần học.",
  nodes: [
    { id: "xl", label: "MS Excel", group: "concept", sectionId: "s1",
      detail: "Công cụ mô hình hoá quyết định, không phải bảng điền số." },

    { id: "g_base", label: "A. Nền tảng & thao tác", group: "concept", parent: "xl", sectionId: "s1",
      detail: "Lịch sử, key features, shortcuts, array formula." },
    { id: "g_data", label: "B. Làm chủ dữ liệu (list)", group: "concept", parent: "xl", sectionId: "s3",
      detail: "Sort/Filter, Conditional Formatting, Subtotal, PivotTable, Vlookup." },
    { id: "g_model", label: "C. Mô hình hoá quyết định", group: "concept", parent: "xl", sectionId: "s9",
      detail: "Solver, what-if, sensitivity, scenario, financial functions, macro & protection." },

    { id: "t_feat", label: "History & features", group: "term", parent: "g_base", sectionId: "s1",
      detail: "Lotus→Excel; 2²⁰×2¹⁴; cell chứa gì." },
    { id: "t_short", label: "Shortcuts", group: "term", parent: "g_base", sectionId: "s2",
      detail: "Navigation/selection + editing." },
    { id: "t_array", label: "Array formula", group: "term", parent: "g_base", sectionId: "s8",
      detail: "TRANSPOSE, SUMPRODUCT, Ctrl+Shift+Enter." },

    { id: "t_sortfilter", label: "Sort & Filter", group: "term", parent: "g_data", sectionId: "s4",
      detail: "Sort, Filter, Advanced/Custom Filter." },
    { id: "t_cfsub", label: "Cond. Format & Subtotal", group: "term", parent: "g_data", sectionId: "s5",
      detail: "Tô màu theo điều kiện; subtotal (sort trước)." },
    { id: "t_pivot", label: "PivotTable & Chart", group: "term", parent: "g_data", sectionId: "s6",
      detail: "Tóm tắt theo rows/cols, sum/avg." },
    { id: "t_vlookup", label: "Vlookup", group: "term", parent: "g_data", sectionId: "s7",
      detail: "Tra cứu giá trị từ bảng khác." },

    { id: "t_solver", label: "Solver / Optimization", group: "term", parent: "g_model", sectionId: "s10",
      detail: "Tối đa profit, nhiều biến/ràng buộc." },
    { id: "t_whatif", label: "What-if & Sensitivity", group: "term", parent: "g_model", sectionId: "s11",
      detail: "Breakeven, target profit, độ nhạy." },
    { id: "t_scenario", label: "Scenario", group: "term", parent: "g_model", sectionId: "s12",
      detail: "Lưu normal/favorite/unfavorite." },
    { id: "t_fin", label: "Financial functions", group: "term", parent: "g_model", sectionId: "s13",
      detail: "FV/PV cho kế hoạch tiết kiệm." },
    { id: "t_macro", label: "Macro & Protection", group: "term", parent: "g_model", sectionId: "s14",
      detail: "Developer tab, command button, lock cells." },
  ],
  edges: [
    { from: "xl", to: "g_base" }, { from: "xl", to: "g_data" }, { from: "xl", to: "g_model" },
    { from: "g_base", to: "t_feat" }, { from: "g_base", to: "t_short" }, { from: "g_base", to: "t_array" },
    { from: "g_data", to: "t_sortfilter" }, { from: "g_data", to: "t_cfsub" }, { from: "g_data", to: "t_pivot" }, { from: "g_data", to: "t_vlookup" },
    { from: "g_model", to: "t_solver" }, { from: "g_model", to: "t_whatif" }, { from: "g_model", to: "t_scenario" }, { from: "g_model", to: "t_fin" }, { from: "g_model", to: "t_macro" },
  ],
},
```

---

## 3. Sections (s1 → s14)

### NỀN TẢNG

#### s1 — Excel là gì + lịch sử + key features (neo lens)
- **calloutBlock** `"key"` "Excel = công cụ mô hình hoá quyết định": "Không phải bảng để 'điền số'. Hai việc tạo giá trị: (1) tổ chức & tóm tắt dữ liệu thực trong một list; (2) mô hình hoá bài toán kinh doanh rồi hỏi 'what-if'. *(neo bigIdea)*"
- **flowBlock** `s1` "Lịch sử Excel" layout `horizontal`, nodes:
  - `s1_lotus` "~1982 Lotus 1-2-3" — "Trên hệ MS-DOS, tiền thân bảng tính phổ biến."
  - `s1_v2` "1987 Excel v2.0" — "Microsoft ra Excel cho Windows."
  - `s1_v5` "1993 Excel v5.0" — "Tích hợp VBA (Visual Basic for Applications) — nền tảng macro."
  - `s1_now` "Excel 2019 / 365 / 2021" — "Các phiên bản hiện hành."
  - edges nối liên tiếp. caption: "Từ Lotus tới Excel 365 — VBA (1993) mở đường cho automation/macro."
- **comparisonBlock** "Key features của một workbook" — columns `["Đặc điểm", "Chi tiết"]`; rows:
  - "Workbook & sheets": `["Một file (book) có nhiều sheet/tab (đặt màu được)"]`
  - "Kích thước mỗi sheet": `["1.048.576 hàng (2²⁰) × 16.384 cột (2¹⁴)"]`
  - "Nội dung một cell": `["Text, number, date, time, function, formula…"]`
  - "Khả năng": `["Modeling, tools, formatting; programming bằng Macro"]`
- **keyTerms:** workbook, worksheet, cell, VBA, macro.

#### s2 — Useful shortcuts
- **calloutBlock** `"note"` "Mẹo": "Slide liệt kê shortcut thông dụng (có thể tìm thêm trên Internet). Hai nhóm: di chuyển/chọn và chỉnh sửa."
- **comparisonBlock** "Shortcuts — Navigation & Selection" — columns `["Phím tắt", "Tác dụng"]`; rows (giữ đúng slide):
  - "Alt + Tab": `["Chuyển giữa các ứng dụng đang mở trên taskbar"]`
  - "Ctrl + Page Down / Page Up": `["Sang sheet phải / sheet trái"]`
  - "Alt + A / Alt + W / Alt + M": `["Vào tab Data / View / Formula"]`
  - "Ctrl + Arrow": `["Tới ô ngoài cùng (trái/phải/trên/dưới) của vùng"]`
  - "Ctrl + Shift + Arrow": `["Chọn cả hàng/cột từ ô hiện tại"]`
  - "Ctrl + Home / Ctrl + End": `["Về A1 / tới ô dưới-phải cùng của vùng"]`
  - "Shift + Space / Ctrl + Space": `["Chọn cả hàng / cả cột"]`
  - "Ctrl + A": `["Chọn tất cả các ô"]`
- **comparisonBlock** "Shortcuts — Editing" — columns `["Phím tắt", "Tác dụng"]`; rows:
  - "Alt + Enter": `["Xuống dòng mới trong một cell"]`
  - "Shift + Enter / Tab / Shift + Tab": `["Nhập xong và chuyển ô trên / phải / trái"]`
  - "Ctrl + Shift + Enter": `["Nhập array formula"]`
  - "F2 / F4": `["Sửa ô / lặp lại lệnh vừa làm"]`
  - "Shift + F2 / Shift + F10 + M": `["Thêm comment / xoá comment"]`
  - "Shift + F9": `["Tính lại worksheet hiện tại"]`
  - "Ctrl + H / Ctrl + Shift + L": `["Find & Replace / bật Filter"]`
  - "Ctrl + C, Ctrl + V / Alt + E + S (Paste Special)": `["Copy–paste / dán đặc biệt"]`
  - "` (apostrophe)": `["Nhập text bắt đầu bằng số 0"]`
- **keyTerms:** (không bắt buộc).

### MẢNG A — LÀM CHỦ DỮ LIỆU

#### s3 — Multidimensional data trong một list (tổng quan 9 công cụ)
- **calloutBlock** `"key"` "Dữ liệu nhiều chiều thường nằm trong một list": "Để 'đọc' được một danh sách lớn, Excel cho 9 công cụ: Freeze, Find & Replace, Sort, Filter, Advanced Filter, Conditional Formatting, Subtotals, PivotTable, Vlookup. Bài tập mẫu dùng file `Customer.xlsx`."
- **flowBlock** `s3` "Từ list thô → insight" layout `horizontal`, nodes:
  - `s3_freeze` "Freeze / Find" — "Cố định tiêu đề; tìm & thay thế nhanh."
  - `s3_sortfilter` "Sort / Filter" — "Sắp xếp & lọc theo điều kiện."
  - `s3_summ` "Conditional Format / Subtotal" — "Tô màu theo điều kiện; cộng/trung bình theo nhóm."
  - `s3_pivot` "PivotTable / Vlookup" — "Tóm tắt nhiều chiều; tra cứu chéo bảng."
  - edges nối liên tiếp, label "lọc", "tóm tắt", "tổng hợp". caption: "Chuỗi công cụ biến một list thô thành thông tin ra quyết định."
- **keyTerms:** list, Freeze Panes.

#### s4 — Sort, Filter, Advanced/Custom Filter
- **comparisonBlock** "3 cấp lọc dữ liệu" — columns `["Công cụ", "Dùng khi"]`; rows:
  - "Sort": `["Sắp xếp theo một/nhiều cột (vd State tăng dần, rồi City giảm dần)"]`
  - "Filter": `["Lọc nhanh theo giá trị một cột (vd khách ở New Jersey)"]`
  - "Custom Filter": `["Điều kiện AND/OR trên cùng cột (vd order date trước 31/12/1996 hoặc sau 15/02/1998)"]`
  - "Advanced Filter": `["Điều kiện phức hợp nhiều cột bằng criteria range (vd name chứa 'do' và ở Brooklyn, hoặc name chứa 'do' và cost > $60)"]`
- **keyTerms:** Sort, Filter, Custom Filter, Advanced Filter, criteria range.

#### s5 — Conditional Formatting + Subtotals
- **calloutBlock** `"key"` "Conditional Formatting": "Tự tô định dạng theo điều kiện — vd cột Cost ≥ $100 tô đỏ. Giúp 'nhìn' bất thường mà không cần đọc từng dòng."
- **calloutBlock** `"trap"` "Subtotal: phải SORT trước": "Subtotal cộng/trung bình theo từng nhóm (sum cost theo mỗi state, average cost theo mỗi city). BẮT BUỘC sort cột nhóm trước, nếu không nhóm bị vỡ và kết quả sai."
- **keyTerms:** Conditional Formatting, Subtotal.

#### s6 — PivotTable & PivotChart
- **calloutBlock** `"key"` "PivotTable — tóm tắt nhiều chiều": "Kéo–thả field vào rows/columns/values để tổng hợp (vd sum cost theo state×city: cột = states, hàng = cities). Đổi sum↔average dễ dàng; lọc theo điều kiện (vd chỉ orders năm 1998). PivotChart = biểu đồ sinh từ PivotTable."
- **keyTerms:** PivotTable, PivotChart.

#### s7 — Vlookup
- **calloutBlock** `"key"` "Vlookup — tra cứu chéo bảng": "Dò một giá trị (vd customer name) trong bảng khác để lấy thông tin tương ứng (vd discount), rồi tính cost sau discount. Dùng khi dữ liệu nằm rải ở nhiều sheet/bảng."
- **keyTerms:** Vlookup.

### MẢNG B — MÔ HÌNH HOÁ QUYẾT ĐỊNH

#### s8 — Array formula
- **calloutBlock** `"key"` "Array formula (Ctrl+Shift+Enter)": "Công thức tính trên cả một mảng. Ví dụ slide: `=TRANSPOSE(A1:B7)` để xoay vùng dọc thành ngang; tính tổng commission bằng `=SUMPRODUCT(A2:A7,B2:B7)` (ENTER) hoặc `=SUM(A2:A7*B2:B7)` rồi Ctrl+Shift+Enter."
- **calloutBlock** `"trap"` "Không xoá một ô lẻ trong mảng": "Một array calculation là một khối — không thể xoá riêng một cell, phải xoá cả mảng."
- **keyTerms:** array formula, TRANSPOSE, SUMPRODUCT.

#### s9 — Mô hình hoá một bài toán kinh doanh (khung chung)
- **calloutBlock** `"key"` "Biến bài toán kinh doanh thành spreadsheet": "Bước chung: đặt biến quyết định (vd giá r, chi phí ad A, salesforce S) → viết quan hệ (demand, revenue, cost) → công thức lợi nhuận P = R − C = (r − v)·X − F. Có mô hình rồi mới chọn công cụ: tối ưu → Solver; hỏi 'what-if/breakeven' → what-if & sensitivity; nhiều kịch bản → Scenario."
- **calloutBlock** `"note"` "3 application problem của slide": "(1) Solver tối ưu lợi nhuận với hàm cầu nhiều biến; (2) what-if + sensitivity + scenario cho bài demand q=500−10p; (3) financial functions + macro + protection cho bài kế hoạch tiết kiệm."
- **keyTerms:** business model, decision variable, profit (P = R − C).

#### s10 — Solver / Optimization (Problem 1)
- **calloutBlock** `"key"` "Solver — tìm cấu hình tối ưu": "Bài toán: cầu `X = 200000·r⁻¹·⁵·A⁰·¹·S⁰·³` (các số mũ −1.5, 0.1, 0.3 là elasticities); fixed cost $80.000, variable unit cost $25 → `P = (r − 25)·X − 80000 − A − S`. Solver tìm r, A, S để (a) tối đa profit, (b) đạt profit $2 triệu, (c) tìm A khi đã cố định S=$1.050.000 và r=$75. *Lý thuyết tương đương: Lagrange multiplier cho hàm 3 biến.*"
- **calloutBlock** `"note"` "Solver làm gì": "Đặt Target cell (profit), chọn maximize/value, khai báo changing cells (biến) + constraints (ràng buộc) → Solver dò nghiệm. *(Không điền đáp án số ở đây — sinh viên tự chạy Solver trên file.)*"
- **keyTerms:** Solver, objective/target cell, constraint, elasticity.

#### s11 — What-if & Sensitivity analysis (Problem 2)
- **calloutBlock** `"key"` "Mô hình demand tuyến tính": "`Demand q = 500 − 10p`; `Total cost C = F + v·q` với F=2000, v=10, p=25. Lập mô hình tính `P = TR − C`. Câu hỏi: (b) giá nào breakeven (P=0)? (c) giá nào để P=1000?"
- **calloutBlock** `"key"` "Sensitivity analysis": "Đo độ nhạy của lợi nhuận theo % thay đổi của: giá bán (P/p), fixed cost (P/F), unit cost (P/v) → biết yếu tố nào ảnh hưởng lợi nhuận mạnh nhất để ưu tiên kiểm soát."
- **keyTerms:** what-if analysis, sensitivity analysis, breakeven.

#### s12 — Scenario Manager (Problem 2 e–g)
- **calloutBlock** `"key"` "Scenario — lưu nhiều kịch bản": "Optimistic: p=30, F=1500, v=8. Pessimistic: p=20, F=2500, v=12. Dùng Scenario Manager lưu 3 tình huống và đặt tên `normal` / `favorite` / `unfavorite` để so sánh nhanh; vẽ graph TR–C–P theo p từ 0→60 (bước 10)."
- **keyTerms:** Scenario Manager, scenario.

#### s13 — Financial functions FV/PV (Problem 3 a–b)
- **calloutBlock** `"key"` "Financial functions — FV & PV": "Bài toán tiết kiệm: mỗi tháng trích một % lương (≤20%) gửi tiết kiệm để sau này rút. Lập mô hình tính future value (FV) và present value (PV) cho các kỳ 5, 10, 15, 20, 25, 30 năm; vẽ chart FV theo số năm."
- **keyTerms:** FV (future value), PV (present value), financial function.

#### s14 — Macro, Developer tab & Spreadsheet protection (Problem 3 c–d)
- **calloutBlock** `"note"` "Bật Developer tab & Macro (menu path đúng slide)": "Excel 2016/365: File > Excel Options > Customize Ribbon > tick Developer. Macro (Excel 2007): menu Tools > Macro hoặc View > Macro."
- **calloutBlock** `"key"` "Macro + command button + protection": "Tạo macro `\"Delete all data entry and do it again\"` để xoá dữ liệu trong B2:B4 rồi gắn vào một command button. Lock & protect mọi ô TRỪ ô nhập liệu B2:B4 (right-click > Format Cells… bỏ/đặt khoá, rồi Protect Sheet)."
- **keyTerms:** Developer tab, macro, command button, cell lock, Protect Sheet.

---

## 4. Quiz (8 câu — stem/options tiếng Anh, rationale/takeaway tiếng Việt)

Mỗi câu 4 option + rationale cho cả đúng & sai (bẫy có chủ đích). Gợi ý:

1. **q01** (basic) — *Worksheet capacity / cell content.* Đúng: mỗi sheet 1.048.576 hàng × 16.384 cột; cell chứa text/number/date/formula… Bẫy: số hàng/cột sai; cell chỉ chứa số.
2. **q02** (intermediate) — *Subtotal cần gì trước?* Đúng: phải SORT cột nhóm trước. Bẫy: filter trước; không cần sort.
3. **q03** (intermediate) — *PivotTable để làm gì?* Đúng: tóm tắt dữ liệu theo rows/columns (sum/average). Bẫy: nhầm với Vlookup (tra cứu) / Advanced Filter (lọc).
4. **q04** (intermediate) — *Vlookup.* Đúng: tra một giá trị từ bảng khác để lấy thông tin tương ứng. Bẫy: nhầm Vlookup là sắp xếp / tổng hợp.
5. **q05** (intermediate) — *Array formula commit.* Đúng: nhập bằng Ctrl+Shift+Enter; không xoá được một ô lẻ trong mảng. Bẫy: chỉ ENTER; xoá ô lẻ thoải mái.
6. **q06** (advanced) — *Công cụ nào để TỐI ƯU profit nhiều biến/ràng buộc?* Đúng: Solver. Bẫy: Scenario (chỉ lưu kịch bản), Conditional Formatting (định dạng), Filter.
7. **q07** (intermediate) — *Lưu 3 tình huống normal/optimistic/pessimistic để so sánh.* Đúng: Scenario Manager. Bẫy: Solver (tối ưu), Subtotal, Sensitivity (đo độ nhạy chứ không 'lưu kịch bản').
8. **q08** (intermediate) — *Bảo vệ spreadsheet nhưng vẫn cho nhập B2:B4.* Đúng: bỏ khoá B2:B4 rồi Protect Sheet (các ô khác vẫn khoá). Bẫy: khoá tất cả; protect mà không bỏ khoá ô nhập.

---

## 5. Verify (Codex chạy)

```bash
npx tsc --noEmit
```
- Pass 0 error.
- comparison: mọi row `cells.length === columns.length - 1`.
- flow: edges trỏ node có thật; node id dùng `_`.
- Render-check `/digital-technology-business/topic-05`: knowledgeMap + 14 section + 8 quiz hiển thị; function/menu đúng. Báo Chaliyah. **KHÔNG commit.**
- **Academic honesty:** không có đáp án số bịa trong các Application Problem — chỉ mô tả mô hình + công cụ giải.
