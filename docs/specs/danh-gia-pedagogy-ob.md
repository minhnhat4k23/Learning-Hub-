# Đánh giá pedagogy — môn OB + khung đánh giá tái sử dụng cho mọi môn

> **Nguồn gốc:** Chaliyah yêu cầu 2026-07-13, đánh giá lần đầu cùng ngày. File này là bản lưu bền của đánh giá đó + rubric để **session sau đánh giá kỹ hơn** (OB sâu hơn, và các môn khác theo cùng khung).
> **Trạng thái gap:** Gap 1 (Course Map) đã xong 2026-07-14 (xem `ob-course-map.md`). Gap 2–4 chưa làm.

## 1. Mục đích gốc của web (lời Chaliyah, 2026-07-13)

> "Biến những kiến thức quan trọng trong slide và sách thành 1 hệ thống kiến thức giảng dạy có cấu trúc, chuyên nghiệp, theo thứ tự, tổng hợp tất cả kiến thức và biến nó thành cách trình bày, diễn đạt + diễn giải có thứ tự, dễ hiểu, không bị rối, dễ nắm bắt khung kiến thức, khung hệ thống. Học theo phương pháp của sinh viên Harvard/Stanford."

Diễn dịch thành 2 trục đo: **(a)** khung kiến thức rõ, có thứ tự, không rối; **(b)** phương pháp học có bằng chứng khoa học (retrieval practice, spaced repetition, case method, elaboration, synthesis — Dunlosky et al. 2013; case method HBS).

## 2. Khung đánh giá (rubric 8 tiêu chí — dùng lại cho MỌI môn)

> **ĐÃ CHUYỂN (2026-07-19):** rubric giờ sống ở **`docs/RUBRIC.md`** — nguồn chân lý duy nhất, có ngưỡng lượng hóa Đạt / Đạt một phần / Thiếu cho từng tiêu chí + quy tắc chấm. Bảng tiêu chí cũ ở đây đã xóa để tránh hai bản lệch nhau. Mọi lần đánh giá phải nạp `@docs/RUBRIC.md` trước khi chấm.
>
> Tóm tắt để đọc file này liền mạch: A khung trong-topic · B trực quan · C active recall · D trung thực nguồn · E liên kết ngang · F case method · G "So what" · H spaced/interleaved. Kết quả OB ở §3/§3b dưới đây chấm theo đúng 8 tiêu chí đó.

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

## 6. Re-score theo rubric 2026-07-20 (ngưỡng T(n) + sub-check mới)

> **Dấu đóng tái lập:** ngày chấm 2026-07-20 · rubric bản 2026-07-20 (`docs/RUBRIC.md`) · content commit `1d9ed5a` (`content/organizational-behavior.ts`, working tree sạch) · đo tại HEAD `a6be7b3`.
> **Vì sao chấm lại:** rubric 2026-07-20 đổi ngưỡng % → **T(n)=max(1,ceil(n/8))** và thêm sub-check A2/E4/B3/C4/F2. OB có **n=13 topic → T(13)=2** (Đạt=0 hụt · Một phần 1–2 · Thiếu >2).
> **Phương pháp:** bundle `content/subjects.ts` bằng esbuild (`scratchpad/ob-stats.mjs`, `ob-stats2.mjs`) → duyệt object thật; C1/C2/G2/B2 dựa số liệu lần-2 đã ghi (content chưa đổi); A2/E4 chưa chạy script chuyên biệt.

### Bảng 8 tiêu chí

| TC | Mức | Bằng chứng số (tử/mẫu, n=13, T=2) |
|---|---|---|
| **A** | **Đạt** | A1: 0/13 topic thiếu tầng (48/48 slot đủ). A2 forward-ref nội-topic: 11/13 topic có candidate nhưng đọc tay ra toàn từ phổ thông/preview overview (behavior, ability, status, loyalty…), không phải dựa khái niệm chưa định nghĩa → Đạt (low-risk). |
| **B** | **Đạt một phần** | B1: 129/129 section có ≥1 visual (100%, Đạt). B3: metric thô 31/129 section >4 khái niệm mới (76%), NHƯNG rà tay: ~22/31 là **cụm 1-framework** (OCEAN, MBTI, RIASEC, EVLN, Tuckman, Lewin, 5 conflict styles…) phạt oan; chỉ **~6 catalog quá tải thật** (T2s6=7, T2s8=8, T5s4=6, T6s11=6, T6s12=8, T7s1=7) → ~123/129 ≈ 95% → **Đạt một phần** (tách 6 section này là xong). B2 (lệch loại): chưa rà lần này. |
| **C** | Đạt | C1: rationale lần-2 100% khung Cơ chế→Bẫy→Chốt (chưa re-sample lần này). C2: mọi topic ≥33% scenario (prior `ob-quiz-scenario-crossref.md`). C3: 235/235 câu có takeaway. C4: 100% quiz nằm ở `chapter.questions` render sau toàn bộ section (kiến trúc). |
| **D** | **Đạt** | D1: 13/13 topic có source (gate Đạt). **D4: 9/9 soft-lens có disclaimer = 100% → Đạt** (fix 2026-07-21, `ob-fix-rubric-2026-07-20.md`, verify `ob-verify-fix.mjs`). **D3: audit đợt 2 (`ob-audit-sach-lop-b-2.md`, ~33 gap) → supplements đợt 2 ĐÃ BỔ SUNG XONG 2026-07-21 (`ob-sach-supplements-2.md`, Codex thực thi +614 dòng, verify độc lập `ob-verify-sup2.mjs` + tsc PASS): marker "(sách" T00=4/T06=13/T07=2/T11=13/T12=12 (trước = 0 cả 5); +3 section mới (T00=8, T11=12, T12=12); 11/11 keyTerms mới; quiz 235→247, 1235/1235 options đủ Cơ chế/Bẫy/Khóa, 0 thiếu takeaway; B3 guard sạch → Đạt.** |
| **E** | **Đạt** | E1 courseMap ✓ · E2 4 courseThreads phản ánh quan hệ thật ✓. **E3: ~~5/13 topic không cross-ref → Thiếu~~ → FIX 2026-07-21: thêm 5 câu "→ Mắt xích môn học" vào So-what của T2/T3/T4/T5/T11 → 13/13 topic có ≥1 cross-ref = 0 hụt → Đạt** (verify `ob-verify-fix.mjs`; toàn môn 10 câu Mắt xích). E4 prerequisite giữa topic: 13 forward-ref multi-word nhưng chủ yếu ở T0 (Introduction preview cả môn) + mention ngắn, không có đảo prerequisite thật → **E4 Đạt**. |
| **F** | Đạt | F1: 4 mini-case phủ 4 chuỗi (1/chuỗi), mỗi case 3 câu **đều** có analysis + trap. F2 worked-example ladder = **N/A** (OB định tính). |
| **G** | **Đạt** | G1: ~~12/13 (T12 hụt)~~ → FIX 2026-07-21: thêm callout So-what sau block D>CS=SR ở section cuối T12 → **13/13 topic có So-what ở section CUỐI = 0 hụt → Đạt** (verify `ob-verify-fix.mjs`). G2 traceability: prior Đạt (`ob-so-what.md`). |
| **H** | Đạt | H1: `/on-tap` interleaved trộn topic + breakdown + retry câu sai (prior verify PASS). |

**Kết luận (cập nhật 2026-07-21 cuối ngày — sau Phase 1 fix + audit D3 đợt 2 + supplements đợt 2, đều verify PASS):** OB **0 Thiếu, 0 UNCERTAIN** — **7 Đạt (A, C, D, E, F, G, H)**, còn đúng **1 Đạt một phần: B** (B3 — tách 6 catalog section T2s6/T2s8/T5s4/T6s11/T6s12/T7s1, Phase 2). OB "đóng trọn A–H" khi xong B3.

> **So lần đo đầu (§6 bản 1):** nhẹ đi 1 bậc ở B (Thiếu→Đạt một phần, vì metric B3 phạt oan ~22/31 cụm-framework), A2 và E4 gỡ UNCERTAIN → Đạt (candidate toàn từ phổ thông/preview, không đảo prerequisite). D3 giữ UNCERTAIN vì thật sự chưa audit 5 topic.

### Bảng gap xếp ưu tiên (rẻ → nặng)

| # | TC | Việc cần làm | Trạng thái |
|---|---|---|---|
| 1 | D4 | Thêm disclaimer "không phải trích nguyên văn sách" vào `courseMap.caption` (1 dòng) → 9/9 = Đạt | ✅ xong 2026-07-21 (`ob-fix-rubric-2026-07-20.md`) |
| 2 | G1 | Dời/thêm khối So-what xuống section CUỐI của T12 → 0 hụt = Đạt | ✅ xong 2026-07-21 (nt) |
| 3 | E3 | Thêm cross-ref (câu "Mắt xích môn học" trong So-what) cho T2, T3, T4, T5, T11 → 0 hụt = Đạt | ✅ xong 2026-07-21 (nt) |
| 4 | D3 | Audit sách Lớp B cho T00, T06, T07, T11, T12 (5 topic) → gỡ UNCERTAIN | ✅ TRỌN GÓI xong 2026-07-21: audit (`ob-audit-sach-lop-b-2.md`) + vision-read 3 chương scan + supplements (`ob-sach-supplements-2.md`, Codex) + verify (`ob-verify-sup2.mjs`) → D Đạt |
| 5 | B3 | Tách 6 section catalog quá tải: T2s6 (7 shortcuts), T2s8 (8 biases), T5s4 (6 job attitudes), T6s11 (6 work arrangements), T6s12 (8 reward programs), T7s1 (7 group types) → mỗi cái chẻ 2 → B lên Đạt | chưa làm |
| 6 | A2, E4 | ✅ ĐÃ ĐO (`ob-stats3.mjs` + rà tay): A2 Đạt, E4 Đạt — không có forward-ref gây hại | xong |
