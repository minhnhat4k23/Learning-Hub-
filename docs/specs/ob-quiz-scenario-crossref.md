# OB — Fix pedagogy vòng 2: quiz scenario + cross-ref chuỗi khái niệm + đồng nhất flow T07

> **Nguồn gốc:** kết quả đánh giá sâu 2026-07-16 (`danh-gia-pedagogy-ob.md` §3b).
> **File đích DUY NHẤT:** `content/organizational-behavior.ts`. KHÔNG sửa `content/types.ts`, KHÔNG đụng file khác.
> **Ràng buộc chung:** theo `docs/specs/codex-handoff.md` (ngôn ngữ, Cơ chế→Bẫy→Khóa, không bịa, tsc trước khi báo xong).

## Task 1 — Viết lại câu quiz định nghĩa → scenario (22 câu)

**Vấn đề:** tỉ lệ câu scenario/application toàn môn ~28%, mục tiêu ≥1/3 mỗi topic. Mẫu chuẩn để noi theo: T02 q03 ("A manager judges early-arriving employees as more committed because she personally values early starts...") và T07 q04 (punctuated-equilibrium case).

**Định nghĩa câu scenario:** stem đặt một tình huống công việc CỤ THỂ (nhân vật + hành vi + bối cảnh) buộc người học ÁP khái niệm để trả lời — không phải hỏi trực tiếp định nghĩa/liệt kê/thứ tự.

**Quota viết lại theo topic** (VIẾT LẠI TẠI CHỖ — giữ nguyên số câu, không thêm/bớt):

| Topic | Hiện tại | Viết lại | Sau khi sửa |
|---|---|---|---|
| topic00 | 2/11 | 2 câu | 4/11 ≈ 36% |
| topic01 | 4/16 | 2 câu | 6/16 ≈ 38% |
| topic03 | 3/16 | 3 câu | 6/16 ≈ 38% |
| topic04 | 5/16 | 1 câu | 6/16 ≈ 38% |
| topic05 | 5/16 | 1 câu | 6/16 ≈ 38% |
| topic06 | 6/20 | 1 câu | 7/20 = 35% |
| topic09 | 5/18 | 1 câu | 6/18 ≈ 33% |
| topic10 | 3/20 | 4 câu | 7/20 = 35% |
| topic11 | 5/20 | 2 câu | 7/20 = 35% |
| topic12 | 2/20 | 5 câu | 7/20 = 35% |

**KHÔNG đụng** quiz của topic02, topic07, topic08 (đã ≥33%).

**Cách chọn câu để viết lại:** ưu tiên các stem dạng thuần định nghĩa/liệt kê — ví dụ "Which statement best defines…", "Which set correctly lists…", "Which option is one of…", "…are examples of:", "X is best described as…" (khi không kèm tình huống). KHÔNG chọn các câu kiểm tra THỨ TỰ của model (Lewin, Kotter, 5-stage, action research, rational model…) — thứ tự là kiến thức thi hợp lệ, giữ nguyên.

**Quy tắc viết lại từng câu:**
- Giữ nguyên `id`, `conceptTested`, `difficulty`; khái niệm đúng của đáp án giữ nguyên (chỉ đổi CÁCH HỎI, không đổi kiến thức được test).
- `stem` + `options[].text` tiếng Anh; tình huống nơi làm việc thực tế, ngắn (≤3 câu), có thể dùng tên nhân vật trung tính (Lan, Minh, An, "a project manager"…).
- Distractor mới vẫn phải là misconception thật của CHÍNH topic đó (nhầm với khái niệm lân cận), đủ 5 options.
- `rationale` mỗi option viết lại khớp tình huống mới, đủ Cơ chế → Bẫy → Khóa (tiếng Việt, giữ term English).
- `takeaway` cập nhật nếu cần cho khớp.
- Nếu câu nào là câu đề gốc của giảng viên (wording lấy từ Midterm/Final) → KHÔNG đụng, chọn câu khác trong topic.

## Task 2 — Thêm cross-ref "mắt xích môn học" (5 chỗ)

**Vấn đề:** 4 chuỗi khái niệm ở course map chưa được nhắc lại trong nội dung topic — T01 và T06 hiện 0 cross-ref; T10 thiếu link tới T06/T08; T07 thiếu nền T01/T03; T12 thiếu link T04/T05.

**Cách chèn (áp dụng cho cả 5 chỗ):** nối đoạn cross-ref vào CUỐI `body` của calloutBlock đã có trong section đích (chọn callout cuối cùng của section). Nếu section đích không có calloutBlock nào thì thêm MỘT `calloutBlock("info", "Mắt xích môn học", …)` ở cuối `blocks`. Không tạo block nào khác, không sửa nội dung sẵn có.

Nội dung chèn (giữ nguyên văn, chỉ chỉnh nối câu cho mượt với callout sẵn có):

1. **topic01 s3 (Big Five):**
   "→ Mắt xích môn học: personality là INPUT đầu chuỗi cá nhân — trait định hình cách bạn nhìn nhận tình huống (perception, Topic 02), attitudes (Topic 05) và motivation (Topic 06); nền cá nhân này quay lại ở Topic 07 khi ghép người vào nhóm."

2. **topic06 s1 (WHAT: motivation là một process):**
   "→ Mắt xích môn học: motivation đứng CUỐI chuỗi cá nhân — nó bị chi phối bởi perception (thấy công bằng hay không là chuyện nhận thức, Topic 02) và job attitudes (Topic 05); đồng thời là đòn bẩy chính mà transformational leadership khai thác (Topic 10)."

3. **topic07 s1 (Nhóm là gì, vì sao gia nhập, các loại nhóm):**
   "→ Mắt xích môn học: từ đây môn chuyển sang cấp GROUP — nhưng thành phần nhóm chính là các input cá nhân đã học: personality (Topic 01) và values/deep-level diversity (Topic 03) quyết định nhóm vận hành thế nào."

4. **topic10 s7 (Transactional vs Transformational + Full-range model):**
   "→ Mắt xích môn học: transformational leadership tạo hiệu ứng THÔNG QUA motivation của cấp dưới — nâng self-efficacy và ý nghĩa mục tiêu (goal-setting, Topic 06); còn quản trị bất đồng trong nhóm khi dẫn dắt là kỹ năng của Topic 08 (conflict)."

5. **topic12 s7 (What is stress? Challenge vs hindrance + demands-resources):**
   "→ Mắt xích môn học: stress response về bản chất là emotion kéo dài (Topic 04) và nếu không quản trị sẽ bào mòn job attitudes/satisfaction (Topic 05) — vì thế quản trị change không tách rời quản trị cảm xúc và thái độ."

Đây là **góc nhìn liên hệ (lens)** nối các topic, không phải trích nguyên văn sách — giữ nguyên cách diễn đạt trên, không thêm citation giả.

## Task 3 — Đồng nhất visual: T07 five-stage model → flow

**Vấn đề:** topic07 s2 vẽ five-stage group-development model bằng `comparisonBlock` trong khi topic09 vẽ CÙNG model bằng flow — không nhất quán, và đây là nội dung tuần tự (flow đúng loại hơn).

- Thay `comparisonBlock` chứa các row Forming/Storming/Norming/Performing/Adjourning (topic07 s2, quanh dòng ~7775-7790) bằng `flowBlock("s2", …, "horizontal", …)`:
  - 5 node theo thứ tự Forming → Storming → Norming → Performing → Adjourning; `label` = tên stage, `detail` = đúng nội dung cell của bảng cũ (không viết lại).
  - Edge nối tuần tự, KHÔNG cần label (phân rã hiển nhiên).
  - `caption` giữ nguồn của bảng cũ (nếu bảng có title/nguồn thì chuyển vào title/caption của flow).
- Các block khác của s2 giữ nguyên.

## Verify (Codex tự làm trước khi báo xong)

- `npx tsc --noEmit` sạch.
- Báo: số câu đã viết lại theo từng topic (đúng quota bảng trên), 5 chỗ cross-ref đã chèn (topic+section), xác nhận T07 s2 đã thành flow.
- KHÔNG chạy render check (Claude làm ở khâu review).

## Kết quả verify (Claude, 2026-07-16) — ✅ PASS toàn bộ

**Lớp A:** `npx tsc --noEmit` sạch. Playwright 5 trang topic-01/06/07/10/12 × 375/768/1440 = 15/15 pass (không hscroll, không pageerror). T07: 5 node Forming→Storming→Norming→Performing→Adjourning render đúng React Flow horizontal, screenshot đã soi mắt.

**Lớp B (đối chiếu spec):**
- Task 1: đúng 22 câu viết lại, khớp quota từng topic (T00 q#1/#3; T01 #1/#14; T03 #1/#2/#9; T04 #4; T05 #1; T06 #1; T09 #1; T10 #1/#2/#3/#16; T11 #1/#8; T12 #1–#4/#14). Số câu mỗi topic KHÔNG đổi; T02/07/08 nguyên vẹn; các câu thứ tự model không bị đụng. Spot-check T12 q03/q04: rationale khớp tình huống mới, đủ Cơ chế→Bẫy→Khóa, `conceptTested`/`difficulty` giữ nguyên. Toàn file vẫn 1145/1145 rationale đủ cấu trúc, 229/229 takeaway.
- Task 2: 5/5 cross-ref đúng topic+section theo spec (topic01 s3, topic06 s1, topic07 s1, topic10 s7, topic12 s7), nguyên văn khớp 100%.
- Task 3: bảng five-stage cũ đã xóa, thay bằng flowBlock horizontal; T07 flowBlock 1→2.

**Scenario ratio sau sửa:** mọi topic ≥33% (T00 36%, T01 38%, T03 38%, T04 38%, T05 38%, T06 35%, T09 33%, T10 35%, T11 35%, T12 35%; T02 50%, T07 50%, T08 35% giữ nguyên) — toàn môn ≈ 87/229 ≈ 38%.
