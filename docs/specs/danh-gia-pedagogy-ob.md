# Đánh giá pedagogy — môn OB + khung đánh giá tái sử dụng cho mọi môn

> **Nguồn gốc:** Chaliyah yêu cầu 2026-07-13, đánh giá lần đầu cùng ngày. File này là bản lưu bền của đánh giá đó + rubric để **session sau đánh giá kỹ hơn** (OB sâu hơn, và các môn khác theo cùng khung).
> **Trạng thái gap:** Gap 1 (Course Map) đã xong 2026-07-14 (xem `ob-course-map.md`). Gap 2–4 chưa làm.

## 1. Mục đích gốc của web (lời Chaliyah, 2026-07-13)

> "Biến những kiến thức quan trọng trong slide và sách thành 1 hệ thống kiến thức giảng dạy có cấu trúc, chuyên nghiệp, theo thứ tự, tổng hợp tất cả kiến thức và biến nó thành cách trình bày, diễn đạt + diễn giải có thứ tự, dễ hiểu, không bị rối, dễ nắm bắt khung kiến thức, khung hệ thống. Học theo phương pháp của sinh viên Harvard/Stanford."

Diễn dịch thành 2 trục đo: **(a)** khung kiến thức rõ, có thứ tự, không rối; **(b)** phương pháp học có bằng chứng khoa học (retrieval practice, spaced repetition, case method, elaboration, synthesis — Dunlosky et al. 2013; case method HBS).

## 2. Khung đánh giá (rubric 8 tiêu chí — dùng lại cho MỌI môn)

Mỗi tiêu chí có **cách kiểm tra cụ thể** để lần đánh giá sau lặp lại được và đào sâu hơn:

| # | Tiêu chí | Cách kiểm tra |
|---|---|---|
| A | **Khung trong-topic nhất quán** | Mỗi topic đủ xương sống: bigIdea → pillars → knowledgeMap → sections → keyTerms → quiz? Đếm qua grep, soi topic thiếu thành phần. |
| B | **Trực quan (dual coding)** | Mỗi section ≥1 visual block (flow/comparison/callout), không prose đặc? Grep tỉ lệ block theo section. |
| C | **Active recall chất lượng** | Quiz: distractor là misconception thật (không phải nhiễu vô nghĩa)? Có câu scenario/application, không chỉ định nghĩa? Rationale theo Cơ chế→Bẫy→Khóa? Sample ≥5 câu/topic để chấm. Ngưỡng application: môn định tính ≥1/3; **môn định lượng ≥40%/topic** (Chaliyah duyệt 2026-07-18, áp từ đánh giá MA). |
| D | **Trung thực nguồn (hard/soft)** | Định nghĩa trích đúng nguồn+trang; kiến thức "(sách)" đánh dấu; lens không mạo danh lời sách? Đối chiếu ngẫu nhiên vài keyTerm với Glossary. |
| E | **Liên kết ngang (synthesis)** | Có course map cấp-môn? Có cross-reference giữa topic (grep "xem topic", "T\d")? Chuỗi khái niệm có phản ánh quan hệ thật của môn? |
| F | **Application (case method)** | Có mini-case buộc dùng ≥2–3 khái niệm cùng lúc để phân tích? (Chuẩn HBS — quan trọng với môn định tính thi tự luận/tình huống.) |
| G | **Elaboration ("So what")** | Mỗi topic đóng bằng "kiến thức này đổi hành động của bạn thế nào?" — grep các section cuối. |
| H | **Spaced / interleaved practice** | Có quiz cumulative trộn nhiều topic? Có cơ chế ôn lại (trong web hoặc qua Obsidian vault)? |

**Thang chấm gợi ý:** mỗi tiêu chí Đạt / Đạt một phần / Thiếu, kèm bằng chứng (số liệu grep, ví dụ cụ thể). KHÔNG chấm cảm tính.

## 3. Kết quả đánh giá OB — lần 1 (2026-07-13)

**Phương pháp lần 1:** đọc cấu trúc toàn bộ `content/organizational-behavior.ts` (13 topic), sample sâu Topic 00/01/02, grep thống kê section/quiz/block. *Chưa* đối chiếu ngược với sách/slide (đó là việc của audit completeness Lớp B, task riêng).

### Điểm MẠNH (A–D đều Đạt)

- **A Đạt:** 13/13 topic cùng xương sống bigIdea → 3–4 pillars → knowledgeMap tương tác → 7–11 sections → keyTerms → ~11–16 quiz. Người học luôn biết mình ở đâu trong khung.
- **B Đạt:** mọi section dựng bằng flow/comparison/callout, không prose đặc.
- **C Đạt (mức khá):** quiz tiếng Anh đúng ngôn ngữ thi, distractor là misconception thật, có câu scenario. *Lần sau cần chấm sâu hơn — xem §4.*
- **D Đạt:** trích Robbins & Judge 2019 / Newstrom 2014 / số slide; kiến thức sách-ngoài-slide đánh dấu "(sách)" (vd Dark Triad T1).

### GAP (E–H)

| Gap | Tiêu chí | Mô tả | Trạng thái |
|---|---|---|---|
| 1 | E | 13 topic là 13 "ốc đảo" — chỉ 1 cross-reference toàn file; thiếu bản đồ cấp-môn | ✅ **XONG** — Course Map + 4 chuỗi khái niệm (`ob-course-map.md`, verify PASS 2026-07-14) |
| 2 | F | Thiếu mini-case tổng hợp kiểu HBS (một tình huống → phân tích bằng nhiều khái niệm) | ✅ **XONG** — trang `/{môn}/mini-case`: 4 case theo 4 chuỗi khái niệm Course Map, mỗi case 3 câu phân tích + khung chuyên gia reveal + bẫy (`ob-mini-case.md`, option C: tình huống mô phỏng + motif sách cite chương + traceability check; verify PASS 2026-07-17) |
| 3 | G | Thiếu "So what" cuối topic (chỉ T2 có) | ✅ **XONG** — 11 callout "So what — kiến thức này đổi hành động của bạn" cuối T00/T01/T03–T11 (`ob-so-what.md`, traceability check + verify PASS 2026-07-17; T02/T12 có sẵn) |
| 4 | H | Quiz chỉ theo từng topic, chưa có mode cumulative/interleaving trong web (spaced hiện dựa Obsidian ngoài web) | ✅ **XONG** — trang "Ôn tập tổng hợp" `/{môn}/on-tap`, round-robin interleaved + breakdown per topic + làm lại câu sai (`quiz-cumulative-mode.md`, verify PASS 2026-07-17; cơ chế chung — Managerial cũng có) |

**Kết luận lần 1:** đạt ~80% mục tiêu "khung có cấu trúc"; phần thiếu là tầng trên-topic (E–H).

## 3b. Kết quả đánh giá SÂU — lần 2 (2026-07-16)

> **Cập nhật cùng ngày:** 3 điểm yếu C (scenario ratio), E (cross-ref thiếu), B (2 lệch loại visual) đã được FIX qua spec `ob-quiz-scenario-crossref.md` (Codex thực thi, Claude verify 2 lớp PASS — xem mục "Kết quả verify" trong spec đó). Sau fix: mọi topic ≥33% scenario (toàn môn ≈38%), 5 cross-ref "Mắt xích môn học" đã chèn, T07 five-stage đã thành flow. Mục D (audit "(sách)" Lớp B cho T02–05/T08–10) đã LÀM XONG cùng ngày — kết quả: coverage rất cao, không thiếu diện rộng, nhưng có **15 gap thật** tập trung cuối chương (chi tiết + trích trang: `ob-audit-sach-lop-b.md`); T09 PASS không cần fix. Việc kế: spec `ob-sach-supplements.md` cho Codex.

**Phương pháp:** script Node thống kê toàn bộ 13 topic (sections/blocks/quiz/keyTerms/cross-ref), dump + phân loại thủ công 229 quiz stems, đối chiếu flow titles với nội dung quy-trình, walkthrough runtime 3 topic (02/06/12) bằng Playwright 1440×900 (scroll depth, thứ tự heading, pageerror). Thực hiện các mục §4.1, 4.2, 4.3, 4.4, 4.6.

### C sâu (quiz) — Đạt về rationale, Đạt MỘT PHẦN về application ratio

- **Rationale:** 1145/1145 option-rationale (229 câu × 5 option) đều đủ cấu trúc Cơ chế→Bẫy→Khóa; 229/229 câu có takeaway. Spot-read (T00 q01–02, T07 status, T12 Kotter): distractor là nhầm lẫn THẬT giữa khái niệm lân cận (Lewin vs Kotter vs action research vs appreciative inquiry) — chất lượng cao.
- **Tỉ lệ câu scenario/application** (phân loại thủ công từ stem, mục tiêu ≥1/3):

| Topic | 00 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Scenario | 2/11 | 4/16 | **8/16** | 3/16 | 5/16 | 5/16 | 6/20 | **10/20** | 7/20 | 5/18 | 3/20 | 5/20 | 2/20 |
| % | 18 | 25 | 50 | 19 | 31 | 31 | 30 | 50 | 35 | 28 | 15 | 25 | **10** |

Tổng ≈ 65/229 ≈ **28%** (< mục tiêu 33%). Mẫu chuẩn: **T02, T07 (50%)**. Yếu nhất: **T12 (10%), T10 (15%), T03 (19%)** — phần lớn câu định nghĩa/thứ tự. → Việc cần làm: viết thêm ~2–4 câu scenario cho T10/T12/T03 (và T00/T01 nếu muốn đều).

### B sâu (visual đúng loại) — Đạt, 2 chỗ nên sửa

- 124/129 section có ≥1 flow/comparison; 5 section chỉ callout (nhỏ, chấp nhận được): T02 s1, T03 s10, T04 s5, T06 s9, T12 s11.
- 16 flow đều đúng chỗ quy trình (Perceptual process, AET, MBO cascade, Conflict/Negotiation 5 stages, Tuckman, Lewin...). **2 lệch loại:** (1) T07 five-stage group model vẽ bằng bảng trong khi T09 vẽ cùng model bằng flow — không nhất quán; (2) T12 Kotter 8-step là bảng dù quiz test sequence (8 node có thể rối — cân nhắc, không bắt buộc).

### E sâu (khảo sát ngược cross-ref vs 4 chuỗi khái niệm) — Đạt một phần

Cross-ref trong nội dung ("Topic N"): 24 chỗ, nhưng phân bố lệch. Đối chiếu 4 thread của course map:

| Thread | Mắt xích thiếu trong nội dung topic |
|---|---|
| 1. Nhận thức→hành động (T1·T3·T4→T2→T5→T6) | **T1 = 0 ref, T6 = 0 ref** (đầu & cuối chuỗi là ốc đảo); giữa chuỗi ổn (T2→1, T4→2·3, T5→4) |
| 2. Cá nhân→đội nhóm (T1·T3→T7→T8→T9) | T7↔T8↔T9 tốt; T7 không nhắc lại nền T1/T3 |
| 3. Dẫn dắt (T10→T6/T8/T9) | T10 chỉ ref T9 — **thiếu link tới T6 (motivation) & T8 (conflict)** |
| 4. Tổ chức vận động (T11→T12→stress→T4·T5) | T11↔T12 ✓; **T12 không ref T4/T5** (dù s11 có nói change–stress link) |

→ Việc cần làm (nếu muốn E Đạt trọn): thêm 5–6 câu cross-ref ngắn tại T1, T6, T7, T10, T12.

### §4.4 Learning flow + §4.6 chống-rối — Đạt

- Walkthrough T02/T06/T12: thứ tự section khớp 100% nhóm A→B→C→D của knowledgeMap; mở trang thấy bigIdea compass → pillars → knowledge map → sections → End-of-Chapter Questions — không chỗ nào đứt mạch.
- Scroll depth 1440×900: T12 ≈14.8 màn, T02 ≈16.5 màn, T06 ≈20.5 màn. DÀI, nhưng có điều hướng 2 lớp (sidebar Mục lục per-section + knowledgeMap anchor) nên không rối; không hscroll, không pageerror.

### D bổ sung — UNCERTAIN, cần audit riêng

Mọi topic có trích dẫn tác giả/năm (3–35 chỗ) và số slide (0–16 chỗ), nhưng marker "(sách)" chỉ xuất hiện ở T00/01/06/07/11/12 — **T02–05, T08–10 không có marker nào**. Chưa rõ là (a) chưa bổ sung kiến thức sách-ngoài-slide (vi phạm luật SÁCH > slide) hay (b) có nhưng không đánh dấu. → Cần audit completeness Lớp B đối chiếu sách (task riêng, như memory `sach-hon-slide-bat-buoc` ghi).

## 4. Hướng đánh giá KỸ HƠN cho lần sau (backlog)

Lần 1 mới đánh giá ở tầng cấu trúc + sample 3 topic. **Cập nhật 2026-07-16: mục 1, 2, 3, 4, 6 đã làm ở §3b.** **Cập nhật 2026-07-18: mục 5 — Managerial ĐÃ đánh giá trọn 2 lần (`danh-gia-pedagogy-ma.md`); còn DTB, Manufacturing.** Lần sau nên:

1. **Chấm C sâu:** sample 5 câu quiz/topic × 13 topic, chấm distractor + rationale theo Cơ chế→Bẫy→Khóa; đo tỉ lệ câu application vs định nghĩa (mục tiêu môn định tính: ≥1/3 scenario).
2. **Chấm B sâu:** đo tỉ lệ section có ≥1 visual thật sự đúng loại (flow cho quan hệ, comparison cho phân biệt) chứ không chỉ đếm block.
3. **Chấm E sâu (sau khi có course map):** khảo sát ngược — từ 4 chuỗi khái niệm, kiểm mỗi topic có nhắc lại mắt xích trước/sau trong nội dung không (cross-ref trong section).
4. **Đối chiếu learning flow thực tế:** đi 1 topic từ đầu tới cuối như người học (knowledgeMap → sections → quiz), ghi chỗ "bị rối/đứt mạch" — đúng trục (a) của mục đích gốc.
5. **Áp rubric §2 cho các môn còn lại** (Managerial, DTB, Manufacturing) — mỗi môn 1 bảng kết quả như §3, lưu thành `danh-gia-pedagogy-<mon>.md`.
6. **Kiểm chống-rối:** trang topic có quá dài không (đo scroll depth), thứ tự section có theo logic knowledgeMap không.

## 5. Liên kết

- Gap 1 đã thực thi: `docs/specs/ob-course-map.md`
- Luật soạn môn: `docs/specs/workflow-soan-mon-moi.md`
- Nguồn OB: memory `nguon-hoc-lieu-ob` (slide Dr Lan Anh + Reading Chapters; SÁCH > slide)
