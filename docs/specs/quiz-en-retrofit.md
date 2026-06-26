# Spec — Retrofit quiz sang tiếng Anh (Claude → Codex)

> Chốt 2026-06-26. Áp quy ước ngôn ngữ bản cuối: **quiz stem + options = tiếng Anh**, **rationale/giải thích = tiếng Việt + thuật ngữ tiếng Anh**, lý thuyết giữ nguyên (diễn giải VI + term EN).
> Lý do: Chaliyah học chương trình nước ngoài, đề thi và bài học trên trường đều bằng tiếng Anh → quiz cần sát đề thật.

## Bối cảnh
Content hiện tại trong `content/chapters.ts` đang để `stem` + `options[].text` bằng **tiếng Việt** (vd "Khoản nào sau đây là period cost..."). Cần retrofit toàn bộ chương đã có sang tiếng Anh.

## Yêu cầu cho Codex
Với **mọi** object `Chapter` trong `content/chapters.ts`, sửa từng `question`:
- Dịch `stem` sang **tiếng Anh** học thuật (giọng Garrison/Noreen/Brewer 17e), giữ nguyên ý và **mọi con số/đơn vị** y hệt.
- Dịch mỗi `options[].text` sang **tiếng Anh**.
- **GIỮ NGUYÊN tiếng Việt**: `rationale`, `conceptTested`, `takeaway`; và toàn bộ phần lý thuyết (`sections`, `blocks`, `examples`, `keyTerms`).
- Thuật ngữ bám glossary chuẩn (period/product cost, contribution margin, sunk/opportunity cost, POHR, WIP/FG/COGS, variable/fixed/mixed cost...).
- KHÔNG đổi số, KHÔNG đổi đáp án đúng/sai (`isCorrect`), KHÔNG thêm/bớt câu hỏi.

## Verify (bắt buộc trước khi coi là xong)
- `npx tsc --noEmit` → PASS.
- Render check ít nhất 1 chương (Playwright bundled chromium) → không lỗi, không vỡ layout.

## Sau khi Codex xong
Claude review đối chiếu nghĩa EN ↔ ý gốc + số liệu, rồi mới coi là đạt.
