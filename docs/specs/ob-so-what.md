# OB — "So what" cuối topic (Gap G rubric pedagogy)

> **Nguồn gốc:** Gap G trong `danh-gia-pedagogy-ob.md` §3 — tiêu chí Elaboration: mỗi topic phải đóng bằng "kiến thức này đổi hành động của bạn thế nào". Hiện chỉ T02/T12 có; 11 topic còn lại kết thúc "khô".
> **Kiểm soát chất lượng:** Chaliyah chốt CƠ CHẾ (2026-07-17); nội dung không duyệt tay (chưa học môn) mà bảo đảm bằng **traceability check** của Claude: mọi khái niệm trong 11 đoạn đều grep thấy trong content sẵn có của đúng topic (phần đã audit đối chiếu sách) — không đoạn nào đưa kiến thức mới. Kết quả check: 11/11 PASS (T00 đã viết lại 1 câu vì claim "interpersonal skills" không có trong content T00).
> **Ràng buộc chung:** `docs/specs/codex-handoff.md`. CHỈ sửa `content/organizational-behavior.ts`. KHÔNG đụng types/renderer/component/môn khác. KHÔNG sửa T02/T12 (đã có So what).

## 1. Cách chèn (giống nhau cho cả 11 topic)

Thêm 1 block vào **CUỐI mảng `blocks` của section CUỐI CÙNG** mỗi topic (không tạo section mới):

```ts
calloutBlock(
  "key",
  "So what — kiến thức này đổi hành động của bạn",
  "<nội dung verbatim ở §2>",
),
```

Section cuối của từng topic (anchor để tìm đúng chỗ):

| Topic | Section cuối (heading hiện có) |
|---|---|
| T00 | "Managers & systematic study" |
| T01 | "Personality attributes khác cho OB (sách)" |
| T03 | "Diversity management & implications" |
| T04 | "OB applications & implications for managers" |
| T05 | "Engagement vs satisfaction & implications for managers" |
| T06 | "Applied: rewards, benefits, recognition & implications" |
| T07 | "Kỹ thuật ra quyết định nhóm" |
| T08 | "Từ Conflict sang Collaboration (khung thực hành — slide)" |
| T09 | "Turning individuals into team players + When NOT to use teams" |
| T10 | "Challenges to leadership + Building leadership" |
| T11 | "Culture fit vs add + change" |

## 2. Nội dung 11 đoạn (chèn VERBATIM, không viết lại)

### T00
Mỗi khi bạn định kết luận kiểu "nhân viên nghỉ vì lương" hay "người vui thì làm tốt", dừng lại hỏi: đây là intuition hay có evidence? OB không bảo bỏ trực giác — nó bảo BỔ SUNG trực giác bằng systematic study (evidence-based management), vì môn này "few absolutes": cùng một khái niệm biểu hiện khác nhau tùy người và bối cảnh. Hành động: trước khi quy kết hành vi, đòi evidence và hỏi "trong bối cảnh nào?" (contingency) — đó là khác biệt giữa phán theo common sense và quản lý hiệu quả.

### T01
Personality khó đổi, nhưng nó chỉ bộc lộ tùy tình huống — nên đừng dùng framework để dán nhãn người khác. Hành động: dùng nó để chọn fit (Holland/P-O fit) cho chính mình khi chọn việc; nếu tuyển người, dựa Big Five (conscientiousness dự báo tốt) chứ không dùng MBTI làm công cụ tuyển; với đồng nghiệp "khó chịu" — hỏi xem tình huống nào kích hoạt trait đó trước khi kết luận con người họ.

### T03
Values chỉ lộ ra khi phải trade-off — nên muốn biết giá trị thật (của mình hay của tổ chức), nhìn vào lựa chọn lúc khó, không nhìn tuyên ngôn. Hành động: trước khi nhận việc, so value system của mình với tổ chức (P-O fit) thay vì chỉ so lương; trong team, chủ động tìm deep-level diversity thay vì dừng ở surface-level; nhận diện stereotype threat để nó không bóp méo hiệu suất của chính bạn hoặc cách bạn đánh giá người khác.

### T04
Cảm xúc không phải kẻ thù của lý trí — nó là dữ liệu. Hành động: đừng ra quyết định lớn lúc mood xấu; nếu công việc đòi emotional labor, tránh surface acting kéo dài (dẫn tới dissonance/burnout) — luyện deep acting/mindfulness; theo AET, job attitude là tích lũy của chuỗi sự kiện nhỏ hằng ngày → quản lý trải nghiệm nhỏ mỗi ngày thay vì chỉ sửa "chính sách lớn".

### T05
Con người khao khát consistency — khi bạn thấy mình đang "hợp lý hóa" một việc trái giá trị, đó là cognitive dissonance đang vận hành, hãy gọi tên nó. Hành động với vai trò quản lý: đừng đo satisfaction một lần rồi thôi — bất mãn diễn tiến theo EVLN, can thiệp ở Voice/Loyalty trước khi thành Exit/Neglect; và nhớ engagement ≠ satisfaction: người hài lòng chưa chắc dốc sức.

### T06
Motivation là process thiết kế được, không phải trait bẩm sinh của nhân viên. Hành động: gặp ca "thiếu động lực", chạy checklist 3 câu thay vì phán xét con người — (1) goal đã specific + difficult + có feedback chưa (goal-setting)? (2) phần thưởng có gắn performance và có công bằng không (expectancy + equity/justice)? (3) bản thân công việc có đủ 5 core dimensions chưa (JCM)? Hầu hết vấn đề động lực nằm ở một trong ba chỗ đó.

### T07
Khi một người "đổi tính" lúc vào nhóm, soi norms/roles/status trước khi quy cho tính cách — đây chính là fundamental attribution error (nối Topic 2) ở cấp nhóm. Hành động: nhóm đông thì thiết kế accountability cá nhân để chặn social loafing; nhóm quá cohesive + cô lập thì cảnh giác groupthink — chỉ định devil's advocate trước khi quyết định lớn.

### T08
Câu hỏi đúng không phải "có conflict không" mà "loại gì, mức nào". Hành động: gặp xung đột, phân loại task/relationship/process trước rồi mới chọn 1 trong 5 handling intentions một cách CÓ Ý THỨC (đừng auto-avoid); vào đàm phán, xác định BATNA và thử integrative trước khi chia bánh distributive; và đừng tự hào vì nhóm "êm" — quá êm có thể là thiếu functional conflict.

### T09
"Gọi là team" không tự tạo positive synergy. Hành động: trước khi lập team, hỏi "việc này có thật sự cần team không?" (đủ phức tạp? có common purpose? có interdependence?) — nếu không, để cá nhân làm nhanh hơn; khi team trục trặc, chẩn đoán theo đúng thứ tự model: Context → Composition → Process; và muốn người ta nói thật thì xây psychological safety trước khi đòi hỏi ý kiến thẳng.

### T10
Leadership = influence, không phải chức vụ — nên bạn không cần đợi bổ nhiệm mới bắt đầu lãnh đạo, và có chức chưa chắc đã lead. Hành động: phát triển mình theo đúng hành trình lý thuyết — biết trait mình có, luyện behavior (initiating structure + consideration), đọc tình huống trước khi chọn style (contingency); và làm một courageous follower — nửa còn lại của lãnh đạo là biết theo ai, theo thế nào.

### T11
Văn hóa vô hình nhưng lái hành vi mạnh hơn quy định formal. Hành động: vào tổ chức mới, đọc culture qua stories/rituals/symbols/language thay vì chỉ đọc handbook; trước khi nhận offer, cân culture fit vs culture add; nếu bạn là quản lý — văn hóa sống qua selection, top management, socialization, nghĩa là hành vi hằng ngày của chính bạn là "bài giảng văn hóa" mạnh nhất, không phải poster giá trị trên tường.

## 3. Verify (Codex tự làm trước khi báo xong)

- `npx tsc --noEmit` sạch.
- Grep `"So what — kiến thức này đổi hành động của bạn"` trong `content/organizational-behavior.ts` = **11 match**, đúng 11 topic ở bảng §1 (T02/T12 không thêm).
- Báo diff: CHỈ `content/organizational-behavior.ts`, 11 chỗ chèn, không sửa dòng nào khác.

## 4. Kết quả verify — ✅ PASS (Claude, 2026-07-17)

- [x] Lớp A: tsc sạch; render 11 topic đều có callout, không hscroll/pageerror; T02/T12 regression OK; screenshot T06 soi mắt — callout key (amber) nằm cuối section cuối, trước Glossary.
- [x] Lớp B: diff CHỈ `content/organizational-behavior.ts` (+55/-0); count = 11 đúng topics [0,1,3,4,5,6,7,8,9,10,11]; verbatim 11/11 khớp §2; callout nằm sau heading CUỐI CÙNG mỗi topic đúng anchor §1 (script `verify-sowhat.mjs`).
