# Handoff — Phiên làm việc Managerial Accounting Web App

> Bản bàn giao để chuyển sang phiên Claude mới. Copy nguyên file này vào ngữ cảnh là đủ tiếp tục.

## Bối cảnh & mô hình cộng tác
- **Claude = đầu não**: viết spec, pedagogy, Codex prompt — **không code** mặc định.
- **Codex = thực thi**. Ngoại lệ đã dùng: Chaliyah ủy quyền Claude làm executor cho vụ fix lỗi ResizeObserver (đã xong).
- Stack: vinext (Next.js App Router trên Vite), TypeScript, Tailwind v4, React 19, Cloudflare Workers + D1.
- Content-driven: nội dung ở `content/chapters.ts`, type ở `content/types.ts`, UI tự render.
- Nguồn học liệu: Garrison/Noreen/Brewer 17e.

## Đã hoàn thành

### 1. Spec Chương 2 — `docs/specs/chapter-b-job-order-costing.md`
- Slug `job-order-costing`, order 2, status draft. Sections s0–s11, 12 câu hỏi q1–q12.
- Số liệu slide đã VERIFIED: PearCo POHR = $4/DLH; Job A-143 Total $268 / unit $134; Quick Check WR53 = $730; Dickson Job 407 = $2,485, giá $4,348.75 (markup 75%).

### 2. Quy ước ngôn ngữ quiz — `docs/specs/quiz-language-conversion-ch1-ch2.md`
- **[CHỐT 2026-06-26]** `stem` + `options[].text` → **tiếng Anh**; `rationale` → **tiếng Việt + thuật ngữ tiếng Anh** theo khung **Cơ chế → Bẫy → Khóa**, đặt tên distractor theo khái niệm (không A/B/C/D). Xem memory `quy-uoc-ngon-ngu-noi-dung` (bản cuối).
- Title: "Chapter 1 — Managerial Accounting and Cost Concepts" / "Chapter 2 — Job-Order Costing: Calculating Unit Product Costs".

### 3. Rich Teaching Mode — `docs/specs/rich-teaching-mode.md` (spec chính, §A–§J)
- §A–E: schema Block, components `app/components/teaching/`, design tokens "Edu giàu màu", nội dung Ch1.
- §F (v2 giảm nhiễu): bỏ `body` khi có `blocks`, tối đa 1 visual + 1 callout/section, màu dịu, prose hẹp.
- §G (v3 graph tương tác): `Diagram` thành union, thêm `engine:"flow"` (React Flow) — pan/zoom/hover-highlight/click-popover/collapse.
- §H: nội dung `detail` cho các node knowledge-map Ch1.
- §I: `Example.meaning?` + `Example.implication?` → render "Ý nghĩa:" / "Dẫn tới:" cho Ch1.
- §J: kế hoạch block đầy đủ cho Chương 2 (y chang setting Ch1).

### 4. Fix lỗi ResizeObserver (Claude tự code — đã xong, build pass)
- `vite.config.ts`: plugin `ignoreResizeObserverDevOverlay()` patch overlay của vinext (đã verify chuỗi `.replace` khớp source; có comment cảnh báo kiểm tra lại nếu nâng cấp vinext).
- `app/components/ResizeObserverErrorGuard.tsx`: dev-only guard dọn console (mounted ở `app/layout.tsx`).
- Kết luận: lỗi vô hại (React Flow + fitView), chỉ bị dev overlay escalate thành đỏ.

## Đang chờ (việc của Chaliyah ở phiên mới)
Paste các Codex prompt đã tạo cho Codex thực thi:
1. Chuyển ngôn ngữ quiz Ch1 & Ch2.
2. Rich Teaching Mode v2/v3 cho Ch1: fix hover-jank FlowDiagram, fix fallback node, fill `detail` (§H), Example meaning/implication (§I).
3. Rich Teaching Mode Chương 2 (§J) — Codex fix component FlowDiagram trước rồi đổ nội dung Ch2 vào.

Sau khi Codex xong → Claude review đối chiếu spec rồi mới chuyển status sang `ready`.

## Ràng buộc cố định
- Gọi **Chaliyah**, trả lời **tiếng Việt** + giữ thuật ngữ English.
- KHÔNG xóa file / commit / push / đổi cấu trúc thư mục khi chưa xác nhận.
- KHÔNG bịa số liệu (đánh dấu `[CẦN NGUỒN]`, tag VERIFIED/UNCERTAIN, trích nguồn).
- Plan trước khi sửa code; Claude không code mặc định (trừ khi được ủy quyền).
- Chỉ làm chương mới khi Chaliyah yêu cầu — đã dừng sau Ch2 đúng cam kết.
