# Handoff — Phiên làm việc Learning Hub (AIM)

> Bản bàn giao cho phiên Claude mới. Copy file này vào ngữ cảnh là đủ tiếp tục.
> **Cập nhật: 2026-07-01.** (Bản cũ — phiên MA Ch1/Ch2 đầu tiên — đã hoàn thành & thay thế.)

## Bối cảnh & mô hình cộng tác
- **Claude = đầu não/architect** (viết spec, pedagogy, Codex prompt, verify) — không code mặc định, trừ khi Chaliyah ủy quyền từng việc.
- **Codex = executor** (đổ nội dung vào `content/<mon>.ts` theo spec).
- Content-driven: `content/<mon>.ts` + `content/types.ts` (schema) + `content/subjects.ts` (đăng ký môn); UI tự render.
- Bộ luật vận hành đầy đủ (đọc trước khi soạn): `docs/specs/workflow-soan-mon-moi.md` + memory (`MEMORY.md` index). Nguyên tắc **bigIdea = lens bắt buộc** (memory `bigidea-lens-bat-buoc` + workflow §5 GATE).

## Trạng thái 3 môn (cuối phiên 2026-07-01)

### 1. Managerial Accounting — ✅ DONE
- 8 chương `ready`. **Audit lại trong phiên này: sạch hoàn toàn** — 23 bảng comparison/78 rows 0 mismatch, công thức notation `× ÷ −` chuẩn (không dính `·` nhập nhằng), tsc 0 error, render đẹp. Không cần sửa. Coi như chốt.

### 2. Digital Technology in Business — ✅ DONE (đã commit)
- 7 topic (01–07) `ready` + Topic 00 placeholder. Rich teaching mode, bigIdea theo lens bắt buộc, knowledgeMap 3 tầng, quiz 10–16 câu/topic có rationale bẫy.
- Công thức Topic 05 dùng FormulaBlock (`×`, `^(−1.5)`). Spiral Web 2.0 (T03→T07).
- **Đã commit:** `1324d39` `feat(dtb): Topic 03-07 ready ...` (content/dtb.ts + 13 spec docs/specs/dtb-*.md). **Chưa push.**

### 3. Manufacturing Systems — 🟡 MỚI SCAFFOLD (chưa soạn nội dung)
- `content/manufacturing.ts` (8 placeholder `topic-01…08`, tên thật từ slide) + đăng ký trong `content/subjects.ts`. Route `/manufacturing-systems` chạy ("0/8 READY"). tsc 0 error. **CHƯA commit.**
- **Nguồn & chiến lược** (memory `nguon-hoc-lieu-manufacturing`): **ebook Groover (Automation, Production Systems & CIM 4e) = primary**, slide Chapter 1-8 hỗ trợ, sách kiểm completeness, test-exams cho quiz, **bigIdea từ cả slide + ebook**. Bỏ: Note MS, cthuc MS, assignments.
- Chương: 1 Introduction · 2 Organization in Factory · 3 Process Design · 4 Jobbing and Batch · 5 Mass Production · 6 Group Technology · 7 Flexible Manufacturing · 8 Costs Management.

## Việc tiếp theo (phiên sau)
**Soạn Manufacturing Topic 01 (Introduction)** theo GATE bigIdea:
1. Đọc slide Chapter 1 + phần Introduction trong ebook Groover (dò mục lục map chương).
2. Extract triết lý tác giả (slide + sách) → draft bigIdea → **trình Chaliyah duyệt lens, đợi chốt**.
3. Duyệt xong → viết full spec (có ma trận completeness đối chiếu sách) → Codex thực thi → verify 2 lớp → `ready`.

## Chưa commit / để ngoài
- Manufacturing scaffold (content/manufacturing.ts, subjects.ts) — chờ Chaliyah cho commit `feat(manufacturing): scaffold subject`.
- `.netlify/`, `netlify.toml`, `netlify/`, `dev-render-check.log` — Chaliyah chọn để nguyên, không track.

## Ràng buộc cố định
- Gọi **Chaliyah**, trả lời **tiếng Việt** + giữ thuật ngữ English.
- KHÔNG xóa file / commit / push / đổi cấu trúc thư mục khi chưa xác nhận.
- KHÔNG bịa số (đánh dấu `[CẦN NGUỒN]`, tag VERIFIED/UNCERTAIN, trích nguồn trang slide/sách).
- Plan trước khi sửa code; Claude không code mặc định.
- PDF path có dấu tiếng Việt → copy sang scratchpad ASCII bằng PowerShell `Copy-Item -LiteralPath` rồi `pdftotext` (Bash mangle path có dấu).
