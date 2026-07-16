# Spec: MA Topic 5 (master-budget) — bổ sung cho ĐỦ sách Garrison Ch.8

> **Loại:** CHỈ THÊM block/quiz vào chapter `master-budget` trong `content/managerial.ts`. **KHÔNG rewrite** phần đã có; KHÔNG đụng chương/môn khác.
> **Executor: Codex.** File DUY NHẤT: `content/managerial.ts`.
> **Nguồn:** Garrison/Noreen/Brewer 17e, **Chapter 8** "Master Budgeting" (book p.353–380, ví dụ Hampton Freeze / Larry Giano). Web hiện dùng số **Royal (slide)**; bổ sung dưới đây là **khái niệm định tính (LO8-1)**, không đụng số → không lệ thuộc ví dụ nào.
> **Ngôn ngữ:** diễn giải VI + giữ term EN. Quiz `stem`/`options` EN; `rationale` VI+EN (Cơ chế→Bẫy→Khóa), distractor đặt tên khái niệm.
> **Lý do:** LUẬT global SÁCH>slide (`workflow-soan-mon-moi.md` §0). Audit Lớp B đã đọc trọn Ch.8 (intro LO8-1, Exhibit 8-1/8-2, Schedules 1-10 Hampton Freeze, Glossary 16 term, Review Problem, Questions 8-1…8-10).
> **Đã ĐỦ (không đụng):** s0 (budget/planning/control/self-imposed/continuous — cơ bản), s1 (master budget + Exhibit 8-1 diagram + 10 câu hỏi), s2 sales+collections, s3 production, s4 DM+disbursements, s5 DL, s6 MOH+rate, s7 ending FG, s8 S&A, s9 cash budget (4 phần), s10 budgeted IS+BS. Glossary 16 term đều có. Chỉ bổ sung phần dưới.
> **Style block:** comparison = `{title, columns, rows:[{label,cells}]}`; callout = `{kind,title?,body}`. Bám shape THỰC tế trong managerial.ts (đối chiếu block quanh s0).

---

## Bối cảnh gap

Sách Ch.8 dành hẳn phần đầu (LO8-1) cho **hai khối khái niệm** mà slide (Royal) rút gọn nên web s0 mỏng:
1. **Vì sao lập budget** — liệt kê 5 công dụng planning + 2 công dụng control (sách p.355).
2. **Cách lập budget** — Top-down vs Self-imposed, với 4 ưu điểm + 2 hạn chế của self-imposed budget (sách p.356). **Question 8-8 của sách hỏi đích danh** "major advantages of self-imposed budgets? what caution must be exercised?".

Web s0 hiện chỉ có định nghĩa planning/control chung + callout self-imposed + budgetary slack. Bổ sung 3 block vào s0 + 2 quiz.

---

## A. Section `s0` — thêm 3 block (nối vào `blocks`, sau các block đã có)

### A1. Comparison — 5 công dụng planning + 2 công dụng control (sách p.355)
```ts
{
  type: "comparison",
  table: {
    title: "Vì sao tổ chức lập budget? (5 planning + 2 control)",
    columns: ["Góc độ", "Công dụng cụ thể"],
    rows: [
      { label: "Planning (1)", cells: ["Buộc manager NGHĨ về và LẬP KẾ HOẠCH cho tương lai."] },
      { label: "Planning (2)", cells: ["TRUYỀN THÔNG mục tiêu tài chính khắp tổ chức."] },
      { label: "Planning (3)", cells: ["PHÂN BỔ nguồn lực tới nơi dùng hiệu quả nhất."] },
      { label: "Planning (4)", cells: ["PHỐI HỢP kế hoạch & hoạt động của các phòng ban."] },
      { label: "Planning (5)", cells: ["Phát hiện trước BOTTLENECK (nút thắt) trước khi xảy ra."] },
      { label: "Control (1)", cells: ["Cải thiện HIỆU QUẢ & hiệu suất vận hành (so actual vs budget)."] },
      { label: "Control (2)", cells: ["ĐÁNH GIÁ & khen thưởng nhân viên."] },
    ],
  },
},
```

### A2. Comparison — Top-down vs Self-imposed (sách p.356)
```ts
{
  type: "comparison",
  table: {
    title: "Hai cách lập budget",
    columns: ["", "Top-down budget", "Self-imposed / Participative budget"],
    rows: [
      { label: "Ai đặt mục tiêu", cells: ["Cấp trên áp target xuống", "Chính manager các cấp lập, cấp trên review"] },
      { label: "Rủi ro", cells: ["Bỏ qua kiến thức cấp dưới → mất động lực, target phi thực tế", "Budgetary slack nếu gắn với thưởng → cần review"] },
      { label: "Tinh thần", cells: ["Dễ sinh resentment nếu bị phạt vì không đạt", "Tạo cam kết & ownership khi được tham gia"] },
    ],
  },
},
```

### A3. Callout — 4 ưu điểm + 2 hạn chế của self-imposed budget (sách p.356)
```ts
{
  type: "callout",
  callout: {
    kind: "key",
    title: "Self-imposed budget: 4 ưu điểm & 2 hạn chế",
    body: "4 ưu điểm: (1) tôn trọng ý kiến người trực tiếp làm; (2) ước tính SÁT hơn vì họ hiểu vận hành hằng ngày; (3) tăng động lực đạt mục tiêu do CHÍNH họ đặt; (4) trao ownership & trách nhiệm giải trình cho sai lệch. 2 hạn chế: (1) có thể suboptimal nếu cấp dưới thiếu tầm chiến lược; (2) sinh budgetary slack nếu budget dùng để thưởng → vì vậy cấp trên PHẢI review. Chốt: nên đặt mục tiêu 'highly achievable' (thách thức nhưng đạt được), và cấp trên KHÔNG ép cấp dưới 'meet the budget' bằng mọi giá — ép sẽ sinh thù địch thay vì cải tiến (sách p.356)."
  },
},
```

---

## B. Quiz bổ sung `q14`–`q15` (master-budget hiện có tới q13)

Thêm vào CUỐI mảng `questions`.

```ts
{
  id: "q14",
  difficulty: "basic",
  conceptTested: "Advantages of self-imposed budgets",
  stem: "Which is a major ADVANTAGE of a self-imposed (participative) budget?",
  options: [
    { id: "a", text: "Estimates are often more accurate because front-line managers know day-to-day operations.", isCorrect: true, rationale: "Cơ chế: người trực tiếp vận hành hiểu chi tiết hơn nên ước tính sát thực tế. Bẫy: nghĩ cấp trên luôn ước tính tốt hơn. Khóa: self-imposed tận dụng kiến thức cấp dưới." },
    { id: "b", text: "It guarantees the elimination of budgetary slack.", isCorrect: false, rationale: "Cơ chế: self-imposed budget lại DỄ sinh budgetary slack hơn nếu gắn với thưởng. Bẫy: đảo ngược nhược điểm thành ưu điểm. Khóa: chính vì slack nên vẫn cần cấp trên review." },
    { id: "c", text: "It lets top managers impose targets without input.", isCorrect: false, rationale: "Cơ chế: áp target không lấy ý kiến là top-down, ngược với self-imposed. Bẫy: nhầm hai cách lập budget. Khóa: self-imposed = có sự tham gia của cấp dưới." },
    { id: "d", text: "It removes the need for any management review.", isCorrect: false, rationale: "Cơ chế: self-imposed budget VẪN cần review để chặn slack và giữ đúng chiến lược. Bẫy: tưởng tham gia thì khỏi kiểm soát. Khóa: luôn cần higher-level review." },
  ],
  takeaway: "Ưu điểm cốt lõi của self-imposed budget: ước tính sát hơn nhờ kiến thức vận hành; nhưng vẫn cần review vì rủi ro budgetary slack.",
},
{
  id: "q15",
  difficulty: "basic",
  conceptTested: "Purposes of budgeting (planning vs control)",
  stem: "Uncovering potential bottlenecks before they occur is an example of budgeting used for:",
  options: [
    { id: "a", text: "Planning.", isCorrect: true, rationale: "Cơ chế: phát hiện trước nút thắt là nhìn về tương lai để chuẩn bị → planning. Bẫy: nhầm với control (so actual). Khóa: planning xảy ra TRƯỚC kỳ." },
    { id: "b", text: "Control.", isCorrect: false, rationale: "Cơ chế: control là so actual với budget để điều chỉnh, diễn ra trong/sau kỳ. Bẫy: gộp mọi công dụng vào control. Khóa: uncover bottleneck là công dụng planning." },
    { id: "c", text: "Evaluating and rewarding employees.", isCorrect: false, rationale: "Cơ chế: đánh giá/khen thưởng là công dụng CONTROL, không phải phát hiện bottleneck. Bẫy: chọn một công dụng control bất kỳ. Khóa: bottleneck thuộc planning." },
    { id: "d", text: "Auditing financial statements.", isCorrect: false, rationale: "Cơ chế: auditing không phải công dụng của master budget. Bẫy: từ nghe gần quản trị tài chính. Khóa: budget phục vụ planning & control nội bộ." },
  ],
  takeaway: "5 công dụng planning gồm phát hiện bottleneck; 2 công dụng control gồm đánh giá/khen thưởng.",
},
```

---

## C. Coverage matrix sau bổ sung (lưu vết Lớp B)

| Kiến thức sách Ch.8 | Web trước | Sau spec |
|---|---|---|
| Budget, perpetual budget | s0 | ✓ |
| **5 công dụng planning + 2 control** | ❌ chung chung | **s0 A1 ✓** |
| **Top-down vs Self-imposed** | ❌ thiếu top-down | **s0 A2 ✓** |
| **4 ưu điểm + 2 hạn chế self-imposed + highly-achievable** | ❌ chỉ có slack | **s0 A3 ✓** |
| Master budget + Exhibit 8-1 + 10 câu hỏi | s1 | ✓ |
| Sales/production/DM/DL/MOH/FG/S&A budgets | s2-s8 | ✓ |
| Cash budget 4 phần + financing | s9 | ✓ |
| Budgeted IS + BS | s10 | ✓ |
| Glossary 16 term | keyTerms | ✓ |

**Không đưa vào (có lý do):** Exhibit 8-2 "Estimates & Assumptions tab" — khung meta Excel, web s1 đã có 10-questions tương đương mục đích; ưu tiên thấp. Schedules Hampton Freeze (số khác Royal) — web đã dùng Royal nhất quán + phủ đủ cơ chế 10 schedule; thêm số Hampton là trùng lặp, không phải kiến thức mới. Merchandise purchases budget — web s3 formula note đã nêu.
