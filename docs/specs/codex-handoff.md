# Codex Handoff — Quy ước thực thi cố định (dùng chung mọi spec)

> Đây là "hợp đồng" giữa Claude (đầu não) và Codex (executor). Mọi Codex prompt
> chỉ cần **trỏ tới file này** + nêu phần riêng của topic/chương. Không lặp lại
> các ràng buộc dưới đây trong từng prompt nữa.

## Vai trò
- **Claude** viết spec (`docs/specs/*.md`) — nguồn sự thật. **Codex** chuyển spec
  thành code, KHÔNG tự sáng tác nội dung ngoài spec.
- Sau khi Codex xong → **Claude review + verify** rồi mới chuyển `status: ready`.

## Đầu vào Codex luôn đọc trước
- File spec của topic/chương đang làm.
- `content/types.ts` — schema `Chapter/Section/Question/...`.
- File content đích (`content/dtb.ts` hoặc `content/managerial.ts`).
- Một object đã hoàn chỉnh trong file đích làm mẫu cách map spec → object.

## Ràng buộc cứng (áp dụng mọi lần, không cần nhắc lại)
- **KHÔNG sửa `content/types.ts`.** Nếu union type chặn (vd thêm option `e`),
  dùng cast tối thiểu tại chỗ (`"e" as AnswerOption["id"]`), không nới type.
- **Ngôn ngữ:** `stem` + `options[].text` = tiếng Anh; `rationale` + `body` +
  `keyTerms` + `examples` = tiếng Việt giữ thuật ngữ English, theo khung
  **Cơ chế → Bẫy → Khóa**. Distractor đặt tên theo khái niệm, không A/B/C/D.
- **Câu quiz gốc** (lấy từ đề của giảng viên) giữ NGUYÊN wording, không chỉnh chữ.
- **Giữ nguyên nội dung spec** — không tự rút gọn/diễn giải lại body, rationale.
- **KHÔNG bịa** số liệu/diagram/khái niệm. Số ngoài slide phải có timeframe/nguồn.
  Thiếu nguồn → giữ `[CẦN NGUỒN]`, không tự điền.
- **Rich teaching mode BẮT BUỘC mọi chương/mọi môn** (memory `uu-tien-truc-quan` + `docs/specs/rich-teaching-mode.md`): chương phải có `knowledgeMap`; section dùng `blocks` (diagram flow/mermaid, comparison, calc, formula, callout), KHÔNG prose đặc (bỏ `body` khi đã có `blocks`). Mỗi section ≤1 visual nặng + ≤1 callout (§F). Mọi node `flow` có `detail` + `sectionId`. **Edge label phải NGẮN GỌN** (vd "phân bổ", "khi bán") — nhãn dài hơn khoảng cách 2 node trong graph ngang sẽ bị node che 2 đầu; thuật ngữ đầy đủ để ở `caption`/prose, không nhồi vào edge label (node label dài thì OK, ô tự xuống dòng).
- **Flow layout: CHỈ `"horizontal"` hoặc `"tree"`, KHÔNG `"radial"`** (radial không được render → dồn 1 hàng chật, cạnh đè/khuất). Hub→nhiều nhánh (≥5) dùng `horizontal` (hub trái, nhánh thành cột phải); phân rã cha→ít con dùng `tree` + set `parent` cho node con. Cạnh quan hệ/cross-link (không phải phân rã hiển nhiên) BẮT BUỘC có nhãn ngắn. Chi tiết: `workflow-soan-mon-moi.md` §4.
- **Phạm vi tối thiểu:** chỉ thay object đang làm; các object/topic khác giữ nguyên.
- KHÔNG xóa file / commit / push / đổi cấu trúc thư mục khi chưa được xác nhận.
- `status` mặc định khi đổ xong = `draft`.

## Verify trước khi báo xong (bắt buộc)
- `npx tsc --noEmit` sạch lỗi.
- Trang của topic/chương render được sections + quiz (Playwright + bundled
  chromium theo quy ước repo).
- Báo lại ngắn gọn: số sections, số questions, kết quả tsc, kết quả render.

## Tham chiếu
- Pedagogy + template spec: `docs/specs/00-course-blueprint.md`.
- Quy ước ngôn ngữ chi tiết: `docs/specs/quiz-language-conversion-ch1-ch2.md`.
