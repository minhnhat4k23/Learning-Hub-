# RUBRIC — Tiêu chuẩn chấm pedagogy (nguồn chân lý duy nhất)

> **Cách dùng:** mọi lần đánh giá một môn, nạp file này (`@docs/RUBRIC.md`) TRƯỚC khi chấm. Không diễn giải lại tiêu chí từ trí nhớ hội thoại — tiêu chuẩn phải giống nhau giữa các lần chạy và giữa các môn.
> **Kết quả đánh giá** lưu ở `docs/specs/danh-gia-pedagogy-<mon>.md` (không ghi vào file này).
> **Sửa rubric:** chỉ khi Chaliyah duyệt; ghi ngày + lý do vào §5 Changelog. Sửa ngưỡng = phải chấm lại các môn đã chấm.

## 1. Mục tiêu gốc (căn cứ của mọi tiêu chí)

Lời Chaliyah, 2026-07-13:

> "Biến những kiến thức quan trọng trong slide và sách thành 1 hệ thống kiến thức giảng dạy có cấu trúc, chuyên nghiệp, theo thứ tự, tổng hợp tất cả kiến thức và biến nó thành cách trình bày, diễn đạt + diễn giải có thứ tự, dễ hiểu, không bị rối, dễ nắm bắt khung kiến thức, khung hệ thống. Học theo phương pháp của sinh viên Harvard/Stanford."

Hai trục đo: **(a)** khung kiến thức rõ, có thứ tự, không rối → tiêu chí A, B, E. **(b)** phương pháp học có bằng chứng khoa học (Dunlosky et al. 2013; case method HBS) → tiêu chí C, F, G, H. Tiêu chí **D** là điều kiện nền (academic honesty).

**Giới hạn phạm vi (rubric này KHÔNG đo gì):** rubric đo *sự hiện diện*, *cấu trúc* và *chất-lượng-hình-thức* của cách trình bày. Nó **không đo tính đúng của dữ kiện chuyên môn** — việc đó thuộc audit đối chiếu sách (tiêu chí D) cộng kiểm tra của người, không một script nào ở đây thay được. Nó **không đo độ dài** trực tiếp (một section dài chưa chắc xấu). Tải nhận thức thì **có** đo, nhưng bằng proxy "số khái niệm mới trên mỗi section" (B3), không đo qua độ dài. Wayfinding — tín hiệu điều hướng render ra cho người học (CTA bắt đầu, next-link, nhất quán label) — **thuộc** phạm vi "sự hiện diện/cấu trúc" này và đo bằng tiêu chí I; hành vi thật của người dùng (có nhìn thấy, có bấm không) vẫn nằm ngoài.

## 2. Quy tắc chấm (bắt buộc)

1. **Đơn vị đo mặc định = topic** (1 chương/topic của môn). Tỉ lệ luôn tính trên tổng số topic có `status !== "placeholder"`. Sub-check nào đo đơn vị khác phải khai báo (rule 8).
2. **Mọi kết luận phải kèm số đếm được** (vd "7/8 topic", "89/90 section") và **báo tử/mẫu thô** kèm theo — mẫu co lại (topic placeholder) không được âm thầm thổi tỉ lệ. Kết luận không có số = không hợp lệ.
3. **Đo trên DATA THẬT, không regex source thô.** Bundle `content/subjects.ts` bằng esbuild rồi duyệt object — vì có môn ghi đè runtime (Managerial: `applyEnglishQuizOverrides` thay stem/options), regex file nguồn sẽ ra số sai.
4. **Không đủ dữ liệu để kết luận → ghi `UNCERTAIN` + lý do**, không đoán, không chấm Đạt cho qua. UNCERTAIN không phải một mức điểm; nó là trạng thái "chưa chấm được", phải kèm việc cần làm để gỡ. **Vắng mặt kiểm chứng được (miniCases rỗng, route 404, field trống) ⟹ Thiếu; kết luận Thiếu GHI ĐÈ UNCERTAIN.** UNCERTAIN chỉ dùng khi CHƯA ĐO — tuyệt đối không dùng khi đã ĐO RA 0.
5. **Chấm tay phải đủ sample quy định** (tiêu chí C); check bằng script chỉ chứng minh *có trường*, không chứng minh *chất lượng*.
6. Mức của mỗi tiêu chí lấy theo **ngưỡng thấp nhất mà môn thỏa** trên toàn bộ sub-check của nó (một sub-check rơi xuống Thiếu → cả tiêu chí không thể là Đạt).
7. **Ngưỡng đếm T(n).** Với sub-check chấm bằng cách đếm số "hụt" trên một quần thể n đơn vị **ở tầng topic** (n điển hình 5–13):

   `T(n) = max(1, ceil(n / 8))`

   | Mức | Điều kiện |
   |---|---|
   | Đạt | 0 hụt |
   | Đạt một phần | 1 … T(n) hụt |
   | Thiếu | > T(n) hụt |

   Bảng tham chiếu: **n=5→T=1 · n=8→T=1 · n=13→T=2 · n=20→T=3**. Hệ số **1/8 là núm điều chỉnh độ gắt DUY NHẤT** — muốn nới thì đổi hệ số (vd `ceil(n/5)`), KHÔNG đổi cấu trúc công thức. T(n) luôn ra số nguyên → không tồn tại ngưỡng bất khả.
   **Ngoại lệ:** sub-check trên quần thể lớn (n > 15: section, option, khối) KHÔNG dùng T(n) — vì ceil(n/8) cho dung sai quá lỏng (T(89 section)=12, lỏng hơn ngưỡng 95% cũ). Các sub-check này dùng **band cố định riêng**, ghi ở cột **Luật** của §3. Sub-check trung thực nguồn cấp gate (D1) dùng band nhị phân.
8. **Khai báo đơn vị đo.** Mỗi sub-check ở §3 phải ghi `đơn vị đo` + `n điển hình` + `Luật` (T(n) / band %/ fixed / nhị phân / tồn tại). Luật chọn theo **n**, không theo tiêu chí. Sub-check dạng **gate/tồn tại** (D1 nhị phân, E1, E2, H1a, I2a) cố ý chỉ có 2 mức (ô "—" là không áp dụng) — đây là gate, KHÔNG phải thiếu bậc. Sub-check **band %** đọc theo khoảng không chồng lấn ghi trong bảng.
9. **Đếm tầng slot.** Sub-check có cấu trúc nhiều slot (A1: 6 tầng × topic; F1: mỗi case = {≥3 concept, analysis, trap}) đếm ở **tầng slot**, hai gate:

   | Mức | Điều kiện |
   |---|---|
   | Đạt | 0 topic/case hụt slot **và** 0 slot hụt |
   | Đạt một phần | tổng slot hụt ≤ T(n_slot) |
   | Thiếu | còn lại |

10. **Index dùng chung.** A2, E4, B3, C4 dựng trên một **concept-first-appearance index** (map `khái niệm → topic/section xuất hiện lần đầu`) trích từ bundle (rule 3). Không dựng được index ⟹ bốn sub-check đó = **UNCERTAIN (chưa đo)** kèm việc cần làm — KHÔNG mặc định Đạt, KHÔNG suy từ sub-check khác.

## 3. Chín tiêu chí + ngưỡng lượng hóa

> Mỗi sub-check một dòng ngưỡng riêng; mức tiêu chí = min các sub-check (rule 6). "hụt" định nghĩa ngay trong phần Nội dung của từng tiêu chí.

### A — Khung trong-topic nhất quán

**Nội dung:** (A1) mỗi topic đủ **6 tầng**: `bigIdea` → `bigIdeaPillars` → `knowledgeMap` → `sections` → `keyTerms` (≥1 term cấp topic) → `questions`. (A2) không **forward-reference nội-topic**: không section nào dùng khái niệm chỉ được định nghĩa ở section SAU trong cùng topic mà không chú thích. *hụt A1* = slot tầng trống; *hụt A2* = topic chứa ≥1 forward-ref nội bộ.

| Sub-check | Đơn vị (n điển hình) | Luật | Đạt | Đạt một phần | Thiếu |
|---|---|---|---|---|---|
| A1 | slot = 6 tầng × topic (~48) | Slot (rule 9) | 0 topic hụt tầng **và** 0 slot hụt | slot hụt ≤ T(n_slot) | còn lại |
| A2 | topic (~8) | T(n) | 0 topic có forward-ref | 1…T(n) topic | > T(n) |

### B — Trực quan (dual coding)

**Nội dung:** (B1) mỗi section có ≥1 khối trực quan (`diagram`/`comparison`/`callout`/`calc`/`formula`/`figure` — không phải `prose`). (B2) khối trực quan đúng loại với nội dung (flow cho quy trình, comparison cho đối chiếu, đồ thị tọa độ không vẽ bằng flow-chain). (B3 — segmenting) không section nào nhồi quá **4 khái niệm mới** (`keyTerms` xuất hiện lần đầu). *hụt B1* = section không có non-prose block; *hụt B2* = khối lệch loại; *hụt B3* = section > 4 khái niệm mới.

| Sub-check | Đơn vị (n điển hình) | Luật | Đạt | Đạt một phần | Thiếu |
|---|---|---|---|---|---|
| B1 | section (~89) | Band % | ≥95% section có non-prose | 80%–<95% | <80% |
| B2 | khối trực quan (~150) | Fixed | ≤1 khối lệch loại | 2–3 khối | ≥4 khối |
| B3 | section (~89) | Band % | ≥95% section ≤4 khái niệm mới | 80%–<95% | <80% |

### C — Active recall chất lượng

**Nội dung:** (C1) mọi phương án — kể cả sai — có `rationale` theo khung **Cơ chế → Bẫy → Chốt**, distractor là misconception thật (đặt tên được lối sai), không phải nhiễu vô nghĩa. (C2) tỉ lệ câu vận dụng (tình huống/tính toán) mỗi topic: môn định tính ≥1/3; **môn định lượng ≥40%**. (C3) mỗi câu có `takeaway`. (C4 — retrieval delay) quiz cấp topic nằm SAU toàn bộ section (không chèn ngay dưới đoạn liên quan), hoặc stem không lặp nguyên văn từ khóa của đoạn liền trước. *hụt C1* = topic có sample không đủ khung; *hụt C2* = topic dưới ngưỡng tỉ lệ; *hụt C3* = câu thiếu takeaway; *hụt C4* = câu chèn ngay dưới đoạn / lặp từ khóa liền trước.

| Sub-check | Đơn vị (n điển hình) | Luật | Đạt | Đạt một phần | Thiếu |
|---|---|---|---|---|---|
| C1 | topic (~8), chấm tay 5 câu/topic | T(n) | 0 topic hụt (≥95% option/sample đủ khung + distractor có lối sai đặt tên được) | 1…T(n) topic | > T(n) |
| C2 | topic (~8) | T(n) | 0 topic dưới ngưỡng | 1…T(n) topic | > T(n) |
| C3 | câu hỏi (~200) | Band % | 100% câu có takeaway | 95%–<100% | <95% |
| C4 | câu cấp topic (~120) | Band % | ≥95% câu thỏa delay | 80%–<95% | <80% |

> Chưa chấm tay đủ 5 câu/topic → C1 ghi `UNCERTAIN`, KHÔNG ghi Đạt dựa trên số liệu script.

### D — Trung thực nguồn

**Nội dung:** (D1) mỗi topic có `source` ghi rõ tài liệu + tác giả + năm + chương/slide gốc. (D2 — gộp vào D3) kiến thức lấy từ SÁCH mà slide không có phải đánh dấu `(sách p.NN)` kèm số trang; kiểm như một điều kiện của audit D3. (D3) topic đã qua audit đối chiếu sách (Lớp B): có file `<mon>-topicN-completeness.md`, supplement đã land vào content, và marker trang sách (D2) hiện diện. (D4) khối tổng hợp của người soạn (soft lens: course map, thread, mini-case) có caption "không phải trích nguyên văn sách". *hụt D1* = topic thiếu source đầy đủ; *hụt D3* = topic chưa audit (hoặc audit thiếu marker D2); *hụt D4* = khối soft lens thiếu disclaimer.

| Sub-check | Đơn vị (n điển hình) | Luật | Đạt | Đạt một phần | Thiếu |
|---|---|---|---|---|---|
| D1 | topic (~8) | Nhị phân (gate) | 100% topic có source đầy đủ | — | <100% |
| D3 | topic (~8) | T(n) | 0 topic chưa audit | 1…T(n) topic | > T(n) |
| D4 | khối soft lens (~40) | Band % | 100% khối có disclaimer | 90%–<100% | <90% |

> Topic chưa audit sách → ghi `UNCERTAIN` cho riêng topic đó kèm tên topic; không kết luận "coverage đủ" từ việc ít marker. (D1 là gate trung thực: bất kỳ topic nào thiếu source ⟹ D Thiếu, không có mức một phần.)

### E — Liên kết ngang (synthesis)

**Nội dung:** (E1) môn có **course map cấp-môn** (`subject.courseMap`) render được trên trang môn. (E2) có **chuỗi khái niệm** (`courseThreads`) phản ánh quan hệ thật giữa các topic. (E3) cross-reference trong nội dung: mỗi topic có ≥1 chỗ nối sang topic khác. (E4 — prerequisite integrity giữa topic) không topic nào dùng khái niệm mà một topic ĐỨNG SAU mới định nghĩa, trừ khi có chú thích forward. *hụt E3* = topic không cross-ref; *hụt E4* = một cross-topic reference trỏ tới khái niệm định nghĩa ở topic sau, không chú thích.

| Sub-check | Đơn vị (n điển hình) | Luật | Đạt | Đạt một phần | Thiếu |
|---|---|---|---|---|---|
| E1 | môn | Tồn tại | có course map render được | — | không có |
| E2 | môn | Tồn tại | có `courseThreads` phản ánh quan hệ thật | `courseThreads` thiếu/không phản ánh quan hệ | — |
| E3 | topic (~8) | T(n) | 0 topic thiếu cross-ref | 1…T(n) topic | > T(n) |
| E4 | cross-topic reference (~20) | T(n) | 0 forward-ref | 1…T(n) | > T(n) |

> E1 là gate: không có course map ⟹ E Thiếu.

### F — Application & procedural fluency

**Nội dung:** (F1 — case method) có mini-case buộc dùng đồng thời **≥3 khái niệm**; mỗi case có câu hỏi phân tích + khung phân tích chuyên gia (reveal sau khi tự nghĩ) + bẫy thường gặp; case bám chuỗi khái niệm course map. (F2 — worked-example ladder, **chỉ môn định lượng**) mỗi cụm kỹ năng tính toán có ≥1 **worked example đầy đủ bước** TRƯỚC khi xuất hiện câu tự giải (worked → faded → self-solve). *hụt F1* = case thiếu 1 slot {≥3 concept, analysis, trap}; *hụt F2* = cụm kỹ năng có câu tự giải mà không có worked example trước.

| Sub-check | Đơn vị (n điển hình) | Luật | Đạt | Đạt một phần | Thiếu |
|---|---|---|---|---|---|
| F1 | case (≥3/môn), slot {concept,analysis,trap} | Slot + tồn tại | ≥1 case/chuỗi (≥3 case/môn) **và** 0 slot hụt | 1–2 case, hoặc slot hụt ≤ T(n_slot) | `miniCases` rỗng (trang 404) |
| F2 | cụm kỹ năng tính toán (~6) | T(n) · **định lượng only** | 0 cụm thiếu worked example | 1…T(n) cụm | > T(n) |

> F2 chỉ áp môn định lượng (Managerial, Manufacturing). Môn định tính ghi **N/A** — N/A không phải UNCERTAIN, không ảnh hưởng mức F.

### G — Elaboration ("So what")

**Nội dung:** (G1) mỗi topic đóng lại bằng một khối "kiến thức này thay đổi hành động của bạn thế nào" ở CUỐI topic. (G2 — traceability) nội dung khối truy được về khái niệm đã dạy trong chính topic đó, không phải lời khuyên chung chung. *hụt G1* = topic thiếu khối So-what cuối; *hụt G2* = khối không truy được về khái niệm trong topic.

| Sub-check | Đơn vị (n điển hình) | Luật | Đạt | Đạt một phần | Thiếu |
|---|---|---|---|---|---|
| G1 | topic (~8) | T(n) | 0 topic thiếu khối | 1…T(n) topic | > T(n) |
| G2 | khối So-what (~8) | T(n) | 0 khối không truy được | 1…T(n) khối | > T(n) |

### H — Spaced / interleaved practice

**Nội dung:** (H1 — trang ôn tập tổng hợp trộn câu hỏi từ **≥2 topic** kiểu interleaved) tách 4 sub-check, mức H1 = min(H1a, H1b, H1c, H1d): (H1a) route ôn tập tồn tại và chạy được (HTTP 200) — gate nhị phân; vắng mặt kiểm chứng được ⟹ Thiếu (rule 4), kéo cả tiêu chí H xuống Thiếu; (H1b — độ phủ) đếm topic CÓ quiz nhưng KHÔNG được trộn vào phiên ôn tập; (H1c) breakdown kết quả theo topic; (H1d) cơ chế làm lại câu sai. *hụt H1b* = topic có quiz bị bỏ sót khỏi trộn. (H2 cũ — ôn ngoài web — đã bỏ khỏi rubric, xem backlog §6: không thuộc phạm vi đánh giá WEB.)

| Sub-check | Đơn vị (n điển hình) | Luật | Đạt | Đạt một phần | Thiếu |
|---|---|---|---|---|---|
| H1a | trang ôn tập / môn (1) | Nhị phân (gate) | route chạy được (HTTP 200) | — | route 404 / không có |
| H1b | topic có quiz (~8–13) | T(n) | 0 topic bị bỏ sót | 1…T(n) topic | > T(n) |
| H1c | trang ôn tập / môn (1) | Bậc chất lượng (fixed) | breakdown theo topic đầy đủ | có nhưng thiếu một phần | không có |
| H1d | trang ôn tập / môn (1) | Bậc chất lượng (fixed) | retry câu sai đầy đủ | có nhưng thiếu một phần | không có |

> Môn chưa đủ 2 topic có quiz ⟹ trang ôn tập không tồn tại theo thiết kế → H1a Thiếu theo rule 4 (nhất quán với F1 khi `miniCases` rỗng).

### I — Wayfinding (điều hướng cho người mới)

**Nội dung:** (I1 — điều hướng tuần tự) mỗi topic TRỪ topic cuối có next-link ở CUỐI trang (sau quiz), trỏ đúng topic kế theo thứ tự, render trên cả desktop lẫn mobile (element không bị giới hạn trong component chỉ render đầu trang). (I2 — điểm vào & findability) hai vế, mức I2 = min(I2a, I2b): (I2a) trang môn có CTA "bắt đầu học" trỏ topic đầu tiên, đứng TRƯỚC các khối luyện tập (ôn tập tổng hợp, mini-case) trong thứ tự render; (I2b) từ trang môn, đường đến một khái niệm con bất kỳ (keyTerm) tối đa 3 bước — tức tồn tại bề mặt liệt kê khái niệm con ở mức môn (index/mục lục khái niệm), hoặc chip/map có detail liệt kê keyTerms của topic. (I3 — nhất quán label) đếm "xung đột" trên toàn bộ màn hình user-facing của môn, ba dạng: (a) một đơn vị nội dung mang ≥2 tên trên cùng màn hình (vd vừa "Topic" vừa "Chương"); (b) label UI tiếng Anh lạc giữa UI tiếng Việt — English technical terms của NỘI DUNG học (tên lý thuyết, thuật ngữ chuyên môn) KHÔNG tính; (c) đoạn copy dành cho developer/người soạn render ra màn hình user. *hụt I1* = topic (trừ topic cuối) thiếu next-link, trỏ sai đích, hoặc không render đủ 2 nền tảng; *hụt I2b* = keyTerm trong sample cần >3 bước; *hụt I3* = một cặp xung đột tên / label lạc ngôn ngữ / đoạn copy sai đối tượng.

| Sub-check | Đơn vị (n điển hình) | Luật | Đạt | Đạt một phần | Thiếu |
|---|---|---|---|---|---|
| I1 | topic trừ topic cuối (~12) | T(n) | 0 topic hụt | 1…T(n) topic | > T(n) |
| I2a | môn | Tồn tại (gate trần, rule 8) | có CTA trước khối luyện tập | không có CTA | — |
| I2b | keyTerm sample (n=5, trải đều topic) | T(n) | 0 keyTerm vượt 3 bước | 1 keyTerm (=T(5)) | ≥2 keyTerm |
| I3 | xung đột, đếm trên tổng label kiểm (báo kèm n label) | Fixed (rule 7: n>15) | 0 xung đột | 1–3 xung đột | ≥4 xung đột |

> **Cách đo:** I1 — script kiểm sự tồn tại + đích đến của next-link trong layout topic; vế mobile kiểm bằng việc element không bị giới hạn trong component chỉ render đầu trang. I2b — sample 5 keyTerm chọn ngẫu nhiên trải đều các topic CÓ keyTerms; topic thiếu keyTerms không vào sample (slot hụt đó đã do A1 bắt); không dựng được đủ sample 5 ⟹ I2b = `UNCERTAIN` (chưa đo) kèm việc cần làm. I3 — vế (a)(c) chấm tay có checklist, vế (b) script grep + rà tay loại trừ technical terms; **chưa chấm tay ⟹ I3 = `UNCERTAIN`, không suy từ script.** I2a là gate trần (rule 8, cố ý 2 mức): không có CTA ⟹ I2 tối đa Đạt một phần.
>
> **Giới hạn của I:** I đo TÍN HIỆU điều hướng tồn tại và nhất quán trong artifact. I KHÔNG đo hành vi thật của người dùng (họ có nhìn thấy, có bấm không) — phần đó thuộc kiểm chứng điều kiện đủ ngoài rubric (§1). Finding từ walkthrough mô phỏng (vd `docs/specs/ob-ux-walkthrough.md`) chỉ là nguồn phát sinh tiêu chí, không phải bằng chứng chấm điểm.

## 4. Đầu ra bắt buộc của một lần đánh giá

1. Bảng 9 tiêu chí (A–I): mức + **bằng chứng số (tử/mẫu thô)** + (nếu có) `UNCERTAIN`/`N/A` kèm lý do.
2. **Bảng gap xếp thứ tự ưu tiên**, mỗi gap ghi: tiêu chí/sub-check, việc cần làm, trạng thái. Sub-check nhiều slot xếp ưu tiên theo **số slot hụt**, không theo số topic hụt.
3. Ghi rõ **phương pháp** đã dùng (script nào, sample bao nhiêu, có walkthrough runtime chưa) để lần sau lặp lại được.
4. Mọi finding phải có **đích đến**: hoặc vào bảng gap, hoặc vào backlog lần sau — không để finding rơi giữa các mục.
5. **Dấu đóng tái lập:** mỗi lần đánh giá ghi rõ **ngày chấm + phiên bản rubric (ngày dòng changelog mới nhất §5) + commit hash của content đã bundle**. Thiếu dấu này thì lần sau không biết đã chấm trên bản nào.

## 5. Changelog

| Ngày | Thay đổi | Lý do |
|---|---|---|
| 2026-07-13 | Lập rubric 8 tiêu chí A–H (ban đầu nằm ở `docs/specs/danh-gia-pedagogy-ob.md` §2) | Chaliyah yêu cầu đánh giá OB + cần khung tái dùng cho mọi môn |
| 2026-07-18 | Thêm ngưỡng application môn định lượng ≥40%/topic (tiêu chí C) | Áp từ đánh giá Managerial; môn thi tính toán cần tỉ lệ vận dụng cao hơn môn định tính |
| 2026-07-19 | Tách rubric ra file riêng `docs/RUBRIC.md` làm nguồn chân lý; lượng hóa ngưỡng Đạt / Đạt một phần / Thiếu cho cả 8 tiêu chí; thêm §2 quy tắc chấm và §4 đầu ra bắt buộc | Chaliyah: rubric để trong chat thì mỗi session diễn giải lại hơi khác → tiêu chuẩn trôi; không có ngưỡng số → chấm cảm tính quay lại |
| 2026-07-20 | **Vòng chỉnh lớn (9 nhóm).** (1) Thêm **A2** forward-ref nội-topic + **E4** prerequisite integrity giữa topic. (2) Thay ngưỡng % topic bằng công thức **T(n)=max(1,ceil(n/8))** cho sub-check tầng topic; quần thể lớn (n>15) dùng band %/fixed riêng. (3) Mỗi sub-check khai báo **đơn vị đo + n + Luật**; tách mọi ô ngưỡng ghép "và/hoặc" thành dòng riêng. (4) **Đếm tầng slot** cho A1, F1. (5) **Xóa H2** (ôn ngoài web) → backlog. (6) **Vắng mặt kiểm chứng được ⟹ Thiếu, ghi đè UNCERTAIN.** (7) Thêm **B3** segmenting (≤4 khái niệm mới/section) + đoạn giới hạn phạm vi (§1). (8) Thêm **C4** retrieval delay. (9) Đổi tên F → "Application & procedural fluency", thêm **F2** worked-example ladder (định lượng). Thêm §4.5 dấu đóng tái lập; §2 chống gaming mẫu số + index dùng chung. | Báo cáo phản biện 2 vòng: diệt sub-check chết, bỏ độ chính xác ảo của %, chặn lỗ lách UNCERTAIN, phủ tải nhận thức + retrieval delay + worked-example — các cơ chế hỏng của người mới mà rubric cũ không bắt |
| 2026-07-21 | Thêm tiêu chí **I — Wayfinding** (I1 điều hướng tuần tự, I2 điểm vào & findability, I3 nhất quán label); §1 thêm câu xác nhận wayfinding thuộc phạm vi "hiện diện/cấu trúc"; §2 rule 8 bổ sung I2a vào danh sách gate; §4 bảng A–I; thêm §6 Backlog. I3 dùng band cố định theo rule 7 (quần thể n>15) — Chaliyah chốt, lệch spec prompt gốc. Search toàn văn → backlog, không thành tiêu chí. **Bản đánh giá stamp trước ngày này chưa chấm I ⟹ STALE với rubric hiện hành (quy tắc dấu đóng §4.5).** | Cold walkthrough OB 2026-07-21 (`docs/specs/ob-ux-walkthrough.md`): 8/9 finding không có chỗ đứng trong A–H dù đo được kiểu presence/count từ artifact — vùng phạm vi đã khai ở §1 nhưng chưa có tiêu chí đứng |
| 2026-07-21 | Vá gap H1 (lint check #4, pre-existing): tách H1a–H1d theo cấu trúc min, cấp thang riêng cho chiều coverage. §2 rule 8: tham chiếu gate H1 → H1a. | Lint vòng v3 phát hiện case "chạy được + đủ breakdown/retry + trộn thiếu topic" không khớp ô nào — ô ngưỡng viết theo liệt kê thay vì theo cấu trúc |

## 6. Backlog (không phải tiêu chí)

- **Search toàn văn:** quyết định FEATURE tốn công build, chưa cam kết → không đưa vào rubric. Khi nào build xong mới cân nhắc thành sub-check của I2.
- **Dead code phát hiện từ walkthrough** (route `app/chapters/*` mồ côi, helper `placeholder` không dùng trong `content/organizational-behavior.ts`): việc dọn dẹp, không phải tiêu chí.
- **H2 cũ — ôn ngoài web** (bỏ khỏi rubric 2026-07-20): không thuộc phạm vi đánh giá WEB.
