# Luật Workflow — Soạn môn mới cho web học (AIM)

> **File luật chuẩn (source of truth).** Mở thêm môn mới (DTB, hoặc môn bất kỳ sau này) → tuân đúng file này. Quy trình đã được kiểm chứng thực tế ở môn **Managerial Accounting** (8 chương). File này áp cho **MỌI môn**: môn mới từ chương đầu tiên; môn đã soạn xong (Managerial/DTB/Manufacturing/OB) vẫn chịu luật §0 (SÁCH>slide) — **không còn miễn trừ "đã chốt, không rà lại"**; việc rà lại completeness đối chiếu sách là **task riêng** làm sau từng môn.
>
> Tài liệu liên quan (đọc kèm, không lặp lại đầy đủ ở đây):
> - Pedagogy & visual-first: `docs/specs/00-course-blueprint.md` (§3.2b)
> - Schema Block / component teaching: `docs/specs/rich-teaching-mode.md`
> - Hợp đồng executor: `docs/specs/codex-handoff.md`
> - Memory (ngoài git): `chuan-ly-thuyet-y-chang-sach`, `nguon-hoc-lieu-va-verify`, `nguon-hoc-lieu-dtb`, `quy-uoc-ngon-ngu-noi-dung`, `uu-tien-truc-quan`, `collaboration-model`, `codex-prompt-gon`.

---

## 0. Nguyên tắc bất biến
- **SÁCH > SLIDE (luật GLOBAL — MỌI môn).** Slide = subset thầy cô dùng để **giảng trên lớp**; **SÁCH (textbook / Reading Chapter) mới là nguồn ĐẦY ĐỦ, và đề thi THƯỜNG RA TỪ SÁCH**. Do đó: (a) định nghĩa/lý thuyết cốt lõi lấy từ **Glossary + Summary + body sách, gồm Appendix**; (b) **mọi kiến thức có trong sách mà slide KHÔNG có đều BẮT BUỘC thêm vào content** — cấm lấy "slide không nhắc" làm lý do bỏ. *Ngoại lệ per-topic:* mục sách rõ ràng thuộc topic khác trong map thì để topic đó (tránh giẫm). Luật này áp cho **cả môn đã soạn xong** (rà lại completeness là task riêng). Xem memory `sach-hon-slide-bat-buoc`.
- **No fabrication.** Số nào chưa chắc → đọc lại PDF, KHÔNG tự điền. Gắn nhãn `VERIFIED` / `UNCERTAIN` / `[CẦN NGUỒN]`.
- **Hard theory vs Soft lens (Chaliyah chốt).** **Hard theory** (definition/số/trình tự/phân loại/công thức) = bám NGUYÊN nghĩa nguồn + trích trang; chỉ dịch VI + giữ term EN, không đổi/thêm/bớt nội dung (đặt ở keyTerms/comparison/formula/calc/prose định nghĩa). **Soft lens** (bigIdea/compass/pillars, callout `insight`/`key`, `takeaway`) = diễn giải định hướng cách nghĩ, đặt block riêng, KHÔNG mạo danh là lời sách; khái niệm ngoài nguồn phải ghi rõ "liên hệ/góc nhìn". Gán nguồn chính xác (đúng trang, hoặc "định nghĩa chuẩn ngành"). Xem memory `bigidea-lens-bat-buoc`.
- **Visual-first.** Mọi chương ưu tiên graph/model thay vì chữ đặc (xem §4).
- **KHÔNG xoá file / commit / push / đổi cấu trúc thư mục khi chưa có xác nhận của Chaliyah.**

---

## 1. Mô hình cộng tác
- **Claude = đầu não/architect**: viết spec chương, pedagogy, Codex prompt; **review + verify**. Mặc định KHÔNG code (có thể được Chaliyah ủy quyền code theo từng việc).
- **Codex = executor**: đổ nội dung vào `content/<mon>.ts` theo spec, fix component khi spec yêu cầu.
- Vòng đời 1 chương: **Claude viết spec → Codex thực thi → Claude verify 2 lớp (§6) → đạt thì chuyển `status: "ready"`**.

---

## 2. Nguồn & cách xử lý nội dung
1. **Định vị nguồn** của môn (đường dẫn cố định ngoài repo — xem memory `nguon-hoc-lieu-*`). Mỗi chương: xác định **file sách (chương + Appendix tương ứng)** và **slide chương**.
2. **Gom slide** lấy khung LO + ví dụ số + thứ tự trình bày.
3. **Bám sách** để chuẩn hoá định nghĩa (Glossary), bổ sung phần slide lược bỏ (đặc biệt **Appendix**), và xác nhận mọi con số.
4. **Mọi con số gắn `VERIFIED` + nguồn** (vd "slide 13-30" hoặc "sách p.656"). Số lệch trong bản trích PDF → đọc bảng gốc, không đoán.
5. `keyTerms` mỗi section trích thẳng trang **Glossary sách**.

---

## 3. Quy ước ngôn ngữ (CHỐT)
- **Lý thuyết/diễn giải**: tiếng **Việt** + giữ **thuật ngữ tiếng Anh** (term EN nguyên bản).
- **Quiz `stem` + `options[].text`**: tiếng **Anh**.
- **Quiz `rationale`/giải thích**: tiếng **Việt + term EN**, theo khung **Cơ chế → Bẫy → Khóa**; đặt tên distractor theo khái niệm (không A/B/C/D).
- **Why**: Chaliyah học chương trình nước ngoài, đề thi & học trên trường bằng tiếng Anh.

---

## 4. Rich Teaching Mode (BẮT BUỘC — visual-first)
- **Mỗi chương BẮT BUỘC có `knowledgeMap`** (graph tổng quan LO + khái niệm; engine `flow`).
- **Section dùng `blocks` là chính, KHÔNG prose đặc.** Ưu tiên: `diagram` (engine `flow` = React Flow tương tác, hoặc `mermaid`), `comparison` (bảng so sánh), `calc` (walkthrough tính), `formula`, `callout` (insight/trap/key). Mỗi section nên có **≥1 visual block**.
- **Nhãn cạnh (edge label) phải NGẮN GỌN** (vd "price var.", "activity var.", "phân bổ"). Nhãn dài hơn khoảng cách 2 node trong graph ngang sẽ bị node che → đặt thuật ngữ đầy đủ ở `prose`/`caption`, KHÔNG nhồi vào edge label. Node label dài thì OK (ô tự xuống dòng nhờ `max-w`).
- **Layout flow — CHỈ dùng `"horizontal"` hoặc `"tree"`, TUYỆT ĐỐI KHÔNG `"radial"`.** Renderer (`FlowDiagram.tsx`) không hỗ trợ `radial` → nó rơi về một hàng ngang chật, các cạnh đè/khuất, nhãn bị node che (lỗi đã gặp & sửa ở Topic 01 DTB: s3/s5/s9/s12). Chọn layout theo hình quan hệ:
  - **`"horizontal"`** — chuỗi/tiến trình `A→B→C`, HOẶC hub→nhiều nhánh (≥5 con): renderer tự xếp hub bên trái, các nhánh thành cột dọc bên phải. Không cần `parent`.
  - **`"tree"`** — phân rã cha→ít con (≤4), cha ở trên / các con bên dưới. **PHẢI set `parent: "<id-cha>"` cho mỗi node con** (không thì cả cụm dồn về 1 hàng như `radial`).
- **Mỗi cạnh phải có nghĩa đọc được.** Cạnh phân rã cha→con (hub→nhánh) thì cấu trúc đã ngụ ý "gồm" → không cần nhãn. Nhưng **cạnh quan hệ/tương tác (cross-link, vòng lặp) BẮT BUỘC có nhãn ngắn** nói rõ quan hệ (vd "gồm", "công cụ cho", "định hướng"); cạnh không nhãn mà KHÔNG phải phân rã hiển nhiên = người học không hiểu ý. ĐỪNG vẽ vòng quan hệ nhiều-nhiều không nhãn (vd tam giác Tech↔People↔Org) — hoặc gán nhãn từng cạnh, hoặc đưa giải thích vào `caption`/callout và giữ graph ở dạng phân rã sạch. `caption` nên nói **cách đọc** graph khi quan hệ không hiển nhiên.
- KHÔNG sửa `content/types.ts` khi không cần.

---

## 5. Template spec mỗi chương (`docs/specs/<mon>-chapter-XX.md`)

> **GATE bigIdea (BẮT BUỘC trước khi viết spec này).** `bigIdea` là **lăng kính bắt buộc** bám triết lý tác giả (memory `bigidea-lens-bat-buoc`), KHÔNG phải câu mô tả chung. Quy trình: (1) đọc nguồn → (2) extract triết lý tác giả (dẫn chứng trang) → (3) draft bigIdea theo pattern `[trend tác giả nhấn] → [tác động] → [điều người học rút ra]` → (4) **Chaliyah duyệt lens, đợi "chốt"** → (5) mới viết full spec dưới đây. Bám triết lý TỪNG môn, không ép template chung giữa các môn.
>
> **Format bigIdea (compass + pillars).** KHÔNG viết đoạn dài rối. `bigIdea` (string) = **1 câu la bàn** cô đọng. `bigIdeaPillars?: { label: string; body: string }[]` = **2–4 trụ định hướng** (label ngắn "Định vị"/"Bài toán"/"Điều kiện" + body 1 dòng). Renderer render compass đậm + pillars dạng chip/list, trên knowledgeMap (đã là diagram tổng → không thêm diagram riêng cho bigIdea). Field `bigIdeaPillars` optional (managerial/dtb chưa có vẫn render như cũ).

Mẫu đã chạy tốt ở Managerial (xem `chapter-h-differential-analysis.md`):
1. **Header**: nguồn (sách chương + Appendix + slide), chuẩn áp dụng.
2. **Meta**: `slug`, `order`, `title`, `status: "draft"`, `source`, `bigIdea`, `learningObjectives` (LO1…LOn, gồm cả LO của Appendix).
3. **knowledgeMap**: cấu trúc node (root + nhánh), mỗi node có `detail` + `sectionId`.
4. **Bối cảnh số liệu (VERIFIED)**: liệt kê mọi ví dụ số kèm nguồn trang slide/sách.
5. **Sections s0…sn**: mỗi section ghi rõ LO, danh sách **blocks** cụ thể (loại + nội dung), `keyTerms` (trang Glossary).
6. **Quiz bank** (≥ số câu mục tiêu): stem+options EN, rationale Cơ chế→Bẫy→Khóa, số VERIFIED.
7. **Lưu ý thực thi (Codex)**: ràng buộc kind block, không đổi types, mốc số VERIFIED.
8. **Coverage matrix (Lớp B)**: bảng ma trận phủ `[LO/khái niệm/ví dụ × Có/Thiếu/Sai số]` (xem §6). Lưu **cố định ngay trong spec chương này** (mục cuối) — KHÔNG để riêng trong scratchpad (mất theo session). Đây là bằng chứng "không sót kiến thức" để mở lại khi audit.

---

## 6. Verify 2 LỚP — bắt buộc trước khi `ready`
> Bài học từ Managerial: trước đây chỉ chạy lớp A (render). Môn mới **phải chạy đủ cả 2 lớp**.

### Lớp A — Render / kỹ thuật
- `npx tsc --noEmit` → **PASS** (bắt buộc).
- Render check Playwright qua `playwright-core` + chromium bundled. Binary nằm ở `C:/Users/mnhaajt/AppData/Local/ms-playwright/chromium-*/chrome-win64/chrome.exe` — **số version (`chromium-1228`…) đổi mỗi lần update Playwright**, nên trỏ tới thư mục `chromium-*` mới nhất chứ đừng hardcode số cũ (script gãy nếu version lệch). Script `.mjs` trong scratchpad: sweep page × breakpoint (375/768/1440), check `scrollWidth>clientWidth` (horizontal scroll), `pageerror`, screenshot; graph không bị nhãn cạnh khuất/đè.

### Lớp B — Completeness ("KHÔNG SÓT kiến thức")
- Dựng **ma trận phủ**: `[mọi LO + mọi khái niệm/định nghĩa/ví dụ trong slide & sách (gồm Appendix)] × [đã có trong content chưa]`.
- **Đối chiếu CẢ sách LẪN slide, KHÔNG chỉ slide (luật §0).** Kiến thức có trong sách mà slide bỏ = mục **Thiếu** bắt buộc bổ sung — đây là nguồn sót hay gặp nhất (vd MA Ch.1: `controllable/uncontrollable`, `value-added/non-value-added` có trong sách, thiếu trên web).
- Mỗi dòng đánh dấu: **Có / Thiếu / Sai số**. Mọi mục **Thiếu** phải bổ sung hoặc Chaliyah duyệt bỏ.
- Đối chiếu trực tiếp PDF slide + sách ở đường dẫn nguồn (bản trích `.txt` trong scratchpad là tạm, mất theo session → trích lại khi cần).
- **Lưu ma trận phủ cuối cùng vào spec chương** (§5 mục 8), không để trong scratchpad — đó là bằng chứng durable cho cổng chốt.

#### Quy trình audit đối chiếu SÁCH (kiểm chứng ở MA Topic 1 — áp cho MỌI chương/môn)
> Dùng khi audit một chương ĐÃ soạn hoặc trước khi chốt chương mới. Đây là cách "biết chắc không sót" theo luật §0 (SÁCH>slide) + memory `sach-hon-slide-bat-buoc`.
1. **Đọc TRỌN chương sách bằng Playwright vision-read** (không chỉ slide/summary/bản tóm của Codex) — theo memory `read-scanned-pdf-playwright` (server node + wheel scroll + wait dài cho PDF lớn). Slide/summary chỉ để định vị, KHÔNG thay việc đọc sách.
2. **Lập inventory ĐẦY ĐỦ của chương**, tối thiểu: (a) **Glossary** — mọi term + trang; (b) **mọi Exhibit** (graph/model, sơ đồ, **bảng kế toán tính toán**); (c) **worked examples / Review Problems**; (d) mọi LO. Soi kỹ graph/model + bảng tính vì đây là chỗ web hay bỏ (Chaliyah nhấn).
3. **So từng mục inventory với content web** → đánh dấu **Có / Thiếu / Dư**. "Dư" (web tự thêm ngoài sách) cũng ghi ra để Chaliyah duyệt.
4. Mọi mục **Thiếu** (kể cả glossary term, bảng tính, exhibit) → viết **supplement spec** đặt tên `docs/specs/<mon>-topicN-completeness.md` cho Codex **CHỈ THÊM** (keyTerm/block/section/quiz nối vào mảng), KHÔNG rewrite phần đã có, KHÔNG đụng chương/môn khác. Mọi số VERIFIED + trích trang.
5. **Verify 2 lớp** (Lớp A tsc+render, Lớp B đối chiếu lại) rồi mới chốt.
6. **Lưu coverage matrix vào chính supplement spec** (mục cuối) = bằng chứng durable; xoá báo cáo/trích tạm sau khi đã đưa vào spec.

### Cổng chốt
- Đạt **cả Lớp A + Lớp B** → Claude chuyển `status: "draft" → "ready"`. Chưa đủ → giữ `draft`.

---

## 7. Ràng buộc cố định (nhắc lại)
- Gọi **Chaliyah**, trả lời **tiếng Việt** + giữ thuật ngữ English.
- KHÔNG xoá file / commit / push / đổi cấu trúc thư mục khi chưa xác nhận.
- KHÔNG bịa số (đánh dấu `[CẦN NGUỒN]`, tag VERIFIED/UNCERTAIN, trích nguồn).
- Plan trước khi sửa code; Claude không code mặc định (trừ khi được ủy quyền).
- Tên file/thư mục: unaccented Vietnamese hoặc English kebab-case.

---

## 8. Definition of Done — checklist 1 chương
- [ ] Spec chương đủ 7 mục (§5), mọi số `VERIFIED` + nguồn.
- [ ] Appendix (nếu có) đã đưa vào.
- [ ] `knowledgeMap` + section dùng blocks, ≥1 visual/section, edge label ngắn.
- [ ] Flow layout chỉ `horizontal`/`tree` (KHÔNG `radial`); cạnh quan hệ/cross-link đều có nhãn; `tree` đã set `parent` cho node con.
- [ ] Ngôn ngữ đúng §3 (lý thuyết VI+EN; quiz stem/options EN; rationale VI+EN).
- [ ] Lớp A verify PASS (tsc + render).
- [ ] Lớp B completeness: ma trận phủ không còn mục **Thiếu** chưa duyệt, và đã lưu vào spec chương (§5 mục 8).
- [ ] `status: "ready"`.
