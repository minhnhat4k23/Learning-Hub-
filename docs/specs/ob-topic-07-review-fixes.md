# OB Topic 07 — Review findings & fixes (2026-07-03)

Nguồn: chấm điểm trình bày bằng browser thật (desktop 1440px + mobile 375px, bundled chromium)
trên `http://localhost:3000/organizational-behavior/topic-07`. Vai người chấm: sinh viên IM lần đầu mở trang.

**Điểm tổng: 39/50** (Nắm nội dung 8.5 · Rõ ràng 7.5 · UX 7.0 · Dễ ôn 8.5 · Visual 7.5).
Kết luận: desktop đã dùng học được; **mobile chưa đạt** — fix mục 1 trước khi coi là hoàn chỉnh.

Nhiều lỗi nằm ở **renderer/layout dùng chung**, nên fix xong sẽ hưởng lợi cho mọi môn (Managerial, DTB, MFG, OB).

---

## Fix 1 — (NẶNG NHẤT) Mobile 375px tràn ngang, chữ bị cắt

**Hiện tượng** (viewport 375×812):
- Title `Topic 07 — Group Propert…` bị cắt mép phải.
- Card "Ý cốt lõi" (BigIdeaModel): text tràn khỏi card, cắt giữa chữ.
- Chip knowledge map bị cụt (`Norms (Asch…`).
- Bảng `Formal vs Informal & 4 loại nhóm`: mất hẳn cột "Ví dụ" — không cuộn ngang được trong khung bảng.

**Việc cần làm:**
- Rà container trang/section: tìm phần tử có `min-width` cứng hoặc nội dung không wrap gây horizontal overflow ở ≤ 375px.
- `ComparisonTable`: bọc bảng trong wrapper `overflow-x: auto` (bảng cuộn trong khung riêng, body không cuộn ngang).
- `BigIdeaModel`: card core idea + pillar card phải co theo viewport (không fixed width).
- **Acceptance:** ở viewport 375px, `document.documentElement.scrollWidth <= 375` trên toàn trang topic-07; không text nào bị clip.
- Thêm bước verify viewport 375px vào quy trình verify render (hiện chỉ check desktop) — cập nhật `docs/specs/workflow-soan-mon-moi.md` phần verify 2 lớp.

## Fix 2 — FlowDiagram: canvas trống thừa + node bị cắt chữ

**Hiện tượng:** diagram "Punctuated-equilibrium model (Exhibit 10-1)": canvas cao ~700px nền chấm bi
nhưng flow chỉ 1 hàng nhỏ nằm giữa → nhìn như lỗi render. Node đầu bị truncate: `Phase 1: định hướng, ì…`.

**Việc cần làm** (component `FlowDiagram`):
- Auto-fit chiều cao canvas theo bounding box của các node (padding hợp lý), bỏ khoảng trống chết.
- Node label wrap 2-3 dòng thay vì truncate bằng ellipsis.
- **Acceptance:** diagram Exhibit 10-1 topic-07 đọc được trọn label mọi node, canvas không dư > ~30% chiều cao.

## Fix 3 — Glossary lặp lại nội dung bảng ngay phía trên

**Hiện tượng:** sau mỗi bảng lại có danh sách term (Group/Formal/Informal/Command/Task/Interest/Friendship…)
định nghĩa gần y nguyên nội dung bảng vừa đọc → cảm giác đọc 2 lần, trang dài thêm đáng kể.

**Việc cần làm:**
- Thu glossary mỗi section thành khối gọn "Ôn nhanh thuật ngữ" (accordion đóng mặc định, hoặc grid 2 cột chữ nhỏ),
  HOẶC chỉ giữ term chưa xuất hiện trong bảng/callout của section đó.
- Giữ đủ coverage kiến thức (không xoá term khỏi trang — chỉ đổi cách trình bày).
- Nếu đổi renderer: áp dụng chung mọi môn; nếu chỉ đổi content: sửa `content/organizational-behavior.ts` topic-07.

## Fix 4 — Knowledge map lệch cân (nhóm C gần trống)

**Hiện tượng:** nhóm B có 4 chip, nhóm **C "Sức ép nhóm hai lưỡi" chỉ có 1 chip** (`Cohesiveness + Diversity`),
card gần như trống; hàng dưới nhóm D đứng lẻ 1 mình → grid lệch.

**Việc cần làm (content topic-07):**
- Bổ sung chip cho C — các khái niệm "sức ép nhóm" vốn có sẵn: `Conformity (Asch)`, `Social loafing`, `Groupthink/Groupshift`…
  hoặc gộp C vào B rồi cân lại thành layout 3 nhóm.
- **Acceptance:** không nhóm nào < 2 chip; không card nào trống quá nửa.

## Fix 5 — Card "Ý cốt lõi" truncate dở câu + quiz thiếu tổng kết

**5a.** Card core idea ngoài trang cắt cứng giữa danh sách: `…sáu thuộc tính (roles, norms, status, size, cohesiveness,…` —
đọc lần đầu thấy câu dở dang. → Trong content, viết riêng 1 câu tóm ≤ 2 dòng **trọn vẹn** cho mặt card
(modal giữ bản đầy đủ), thay vì truncate máy móc bản dài. Nếu schema `bigIdea` chưa có field tóm ngắn → cân nhắc thêm field optional (đổi renderer thì áp dụng mọi môn).

**5b.** Quiz 20 câu chỉ có "Next Question", không progress bar/điểm tổng cuối bài. →
Thêm progress + màn tổng kết (x/20 đúng, gợi ý section cần ôn lại). Renderer chung — hưởng lợi mọi môn.

---

## Điểm mạnh nên GIỮ NGUYÊN (không đụng khi fix)

1. **BigIdeaModel** compass → 4 trụ + modal bullet: mạch "nhìn 10 giây hiểu hướng chương" hoạt động tốt.
2. **Quiz feedback từng option** theo khung Cơ chế/Bẫy/Khóa + Takeaway — giá trị học cao nhất trang.
3. **Khung section nhất quán** (callout định nghĩa vàng có trang R&J → bảng → ví dụ) + chip map có "Đến phần học".

## Câu hỏi chờ Chaliyah chốt (KHÔNG tự ý sửa)

- Quiz stem/options topic-07 đang **100% tiếng Anh**, trong khi quy ước nội dung là "diễn giải tiếng Việt, giữ term tiếng Anh".
  Nếu chủ đích mô phỏng đề thi tiếng Anh của thầy → giữ và ghi rõ vào spec OB; nếu không → convert theo quy ước.
  Quyết định này áp dụng thống nhất cho cả 13 topic OB.

## Thứ tự ưu tiên thi công

1. Fix 1 (mobile overflow) — blocker.
2. Fix 2 (FlowDiagram) — lỗi visual đập vào mắt.
3. Fix 4 (knowledge map C) — sửa content nhanh.
4. Fix 3 (glossary) + Fix 5 — cải thiện, làm sau.

Ảnh bằng chứng mobile: chụp lại được bằng
`chrome.exe --headless=new --screenshot=out.png --window-size=375,4000 http://localhost:3000/organizational-behavior/topic-07`
(chromium trong `%LOCALAPPDATA%\ms-playwright\chromium-1228\chrome-win64`).
