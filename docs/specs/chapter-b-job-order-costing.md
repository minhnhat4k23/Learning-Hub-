# Chapter Spec — 2. Job-Order Costing: Calculating Unit Product Costs
> Handoff Claude (đầu não) → Codex (executor). Codex chuyển spec này thành object `Chapter` slug `job-order-costing` trong `content/chapters.ts` theo schema `content/types.ts`. KHÔNG sửa `content/types.ts`.
> Nguồn: **Garrison, Noreen & Brewer — Managerial Accounting, 17e, Chapter 2** (slide môn học "2. Job order costing a", 42 slide — đối chiếu `VERIFIED`). Mọi số liệu lấy đúng từ slide; phần tự suy ra được gắn nhãn rõ.

- **slug:** `job-order-costing`
- **order:** 2
- **status:** `draft` (→ `ready` sau khi Chaliyah duyệt độ "đủ đơn giản" + đối chiếu giáo trình HCMUT)
- **source:** Garrison/Noreen/Brewer 17e Ch.2 (slide môn học). PearCo / Dickson / NW Fab = ví dụ trong slide.
- **quiz language:** theo `docs/quy-uoc-ngon-ngu-quiz.md` — `stem` và `options[].text` dùng tiếng Anh; `options[].rationale` dùng tiếng Việt, giữ thuật ngữ English, theo khung Cơ chế → Bẫy → Khóa.

## bigIdea
> Direct materials và direct labor thì **truy nguyên** thẳng vào từng job được; nhưng manufacturing overhead thì không — nên ta **ước tính trước** một tỉ lệ phân bổ (POHR) rồi *áp* overhead vào job theo mức hoạt động thực tế. Toàn bộ chương là một câu hỏi: *"Một đơn hàng riêng lẻ tốn bao nhiêu?"* — và độ chính xác của câu trả lời phụ thuộc gần như hoàn toàn vào việc **chọn allocation base có thật sự là cost driver hay không**.

## learningObjectives
1. **LO1** — Tính predetermined overhead rate (POHR).
2. **LO2** — Áp overhead vào job bằng POHR (normal costing).
3. **LO3** — Tính total cost & unit product cost của một job bằng **một** plantwide POHR.
4. **LO4** — Tính total cost & unit product cost bằng **nhiều** POHR (departmental / ABC).
5. (Nền tảng) Hiểu khi nào dùng job-order costing, dòng chứng từ (job cost sheet, materials requisition, time ticket), và xử lý under/overapplied overhead khi lập BCTC.

## sections (lý thuyết — KHÔNG sót mục so với slide)

### s0 — Khi nào dùng job-order costing
Dùng khi: (1) mỗi kỳ sản xuất **nhiều sản phẩm khác nhau**, (2) sản phẩm **làm theo đơn** (manufactured to order), (3) tính chất riêng của mỗi đơn buộc phải **truy nguyên/phân bổ chi phí cho từng job** và giữ sổ riêng cho từng job. Quy trình: công ty đặt → ước tính chi phí cho đơn → nhận đơn. Ví dụ slide: làm 1.000 quần jeans boot-cut → cả lô 1.000 cái = **một job**.
- examples: **Công ty điển hình** — Boeing (máy bay), Bechtel International (xây dựng quy mô lớn), Walt Disney Studios (sản xuất phim).
- keyTerm: **Job** — một đơn hàng/lô riêng biệt được tập hợp chi phí riêng.
- keyTerm: **Job-order vs process costing** — job-order cho sản phẩm khác nhau làm theo đơn; process costing cho sản phẩm đồng nhất sản xuất hàng loạt (chương sau). *(Slide Ch.2 chỉ nêu job-order; process costing = chương riêng.)*

### s1 — Dòng chi phí: cái gì truy nguyên, cái gì phân bổ
**Direct materials** và **direct labor** được tính (charge) thẳng vào từng job khi công việc diễn ra → có con số riêng cho mỗi job. **Manufacturing overhead** (gồm indirect materials + indirect labor + khấu hao/điện/… nhà máy) **không** truy nguyên được tới từng job nên phải **phân bổ (allocate)** cho tất cả job. Đây là điểm gãy của chương: cái khó nằm ở overhead.

### s2 — Job cost sheet & chứng từ nguồn
**Job cost sheet** = bảng tập hợp chi phí của một job: ba cột DM / DL / MOH + phần Cost Summary (DM, DL, MOH, Total cost, Unit product cost).
- **Materials Requisition Form** (phiếu xuất kho NVL): ghi job, bộ phận, số lượng × đơn giá → ra DM cho job. Ví dụ slide (PearCo, job A-143): 12 thanh "2×4" @ $3 = $36; 20 thanh "1×6" @ $4 = $80 → **DM = $116**.
- **Employee Time Ticket** (phiếu công): ghi giờ công × đơn giá theo job. Ví dụ slide: 8 giờ × $15 = **DL $120** cho job A-143.
- Tất cả job cost sheet hợp lại = **subsidiary ledger** (sổ chi tiết) cho tài khoản Work in Process.

### s3 — LO1: Predetermined overhead rate (POHR)
**Vì sao cần allocation base:** (a) khó/không thể truy nguyên overhead tới từng job; (b) overhead gồm rất nhiều khoản (từ dầu bôi trơn máy tới lương quản đốc); (c) nhiều khoản overhead là **định phí** dù sản lượng dao động → nếu lấy overhead thực chia cho sản lượng từng tháng thì đơn giá nhảy loạn.

**POHR tính TRƯỚC khi kỳ bắt đầu** (predetermined):
> POHR = (Ước tính tổng MOH cho kỳ tới) ÷ (Ước tính tổng allocation base cho kỳ tới)

Quy trình 4 bước: (1) ước tính tổng allocation base (mẫu số); (2) ước tính tổng **định phí** MOH và **biến phí** MOH trên mỗi đơn vị base; (3) ước tính tổng MOH bằng **Y = a + bX** (a = tổng định phí MOH, b = biến phí MOH/đơn vị base, X = tổng base); (4) tính POHR.

**Vì sao dùng số ước tính (predetermined) thay vì overhead thực:** (1) overhead thực chỉ biết khi hết kỳ → không thể tính giá job *trong* kỳ; (2) overhead thực dao động theo mùa → dễ làm lệch quyết định. **Lý tưởng: allocation base phải là cost driver** — yếu tố *gây ra* overhead.

### s4 — LO2: Áp overhead vào job (normal costing)
Overhead áp cho job = **POHR × mức hoạt động thực tế của job**. Đây là *normal costing*: DM và DL lấy số **thực**, còn MOH lấy số **áp theo POHR** (không chờ số thực).
- examples: **PearCo POHR** — ước tính 160.000 DLH; định phí MOH $200.000; biến phí MOH $2,75/DLH. Y = 200.000 + 2,75×160.000 = $640.000. POHR = 640.000 ÷ 160.000 = **$4,00/DLH**. Job A-143 dùng 8 DLH → MOH áp = 8 × $4 = **$32**.

### s5 — LO3: Total cost & unit product cost (một plantwide rate)
Total cost của job = DM + DL + MOH áp. Unit product cost = Total cost ÷ số đơn vị hoàn thành.
- examples: **PearCo job A-143** — DM $116 + DL $120 + MOH $32 = **Total $268**; hoàn thành 2 đơn vị → **unit product cost = $134**.
- examples: **Quick Check 1 (NW Fab, job WR53)** — DM $200; DL 10 giờ × $15 = $150; POHR = $760.000 ÷ 20.000 DLH = $38/DLH → MOH = 38 × 10 = $380; **Total = $730**. *(Đáp án d trong slide.)*

### s6 — Góc nhìn quản trị: chọn allocation base
Job-order costing **truy nguyên chính xác** DM & DL, nhưng **thường phân bổ overhead sai** vì base không phản ánh đúng cách job tiêu thụ nguồn lực overhead. **Cost driver** = yếu tố gây ra overhead; base trong POHR phải *drive* được overhead thì giá job mới chính xác. Nhiều công ty dùng **một plantwide rate** theo direct labor-hours — (1) quá đơn giản & sai khi cho rằng DLH là cost driver overhead *duy nhất*; (2) nếu nhận diện được nhiều cost driver thì dùng **nhiều POHR** sẽ chính xác hơn.

### s7 — LO4: Nhiều POHR (departmental)
Mỗi bộ phận sản xuất một POHR riêng theo base phù hợp với bộ phận đó. Quy trình 5 bước (slide, Dickson Company, markup 75% trên total cost):
- Step 1 — Tổng MOH mỗi bộ phận: Milling = 390.000 + 2,00×60.000 MH = **$510.000**; Assembly = 500.000 + 3,75×80.000 DLH = **$800.000**.
- Step 2 — POHR: Milling = 510.000 ÷ 60.000 MH = **$8,50/MH**; Assembly = 800.000 ÷ 80.000 DLH = **$10,00/DLH**.
- Step 3 — MOH áp cho **Job 407**: Milling = 90 MH × 8,50 = **$765**; Assembly = 20 DLH × 10 = **$200** (tổng $965).
- Step 4 — Total cost Job 407: DM (800+370=1.170) + DL (70+280=350) + MOH (965) = **$2.485**.
- Step 5 — Selling price (markup 75%): 2.485 + 2.485×75% (=1.863,75) = **$4.348,75**.
> Chốt: cách departmental cho ra giá bán khác với plantwide → vì phản ánh đúng hơn chi phí job thật sự gây ra.

### s8 — Multiple POHR theo activity (ABC)
Khi xây overhead rate theo **các hoạt động** mà công ty thực hiện → đó là **activity-based costing (ABC)** — một cách phát triển nhiều POHR để đo chính xác hơn mức độ job/sản phẩm/khách hàng "đòi hỏi" nguồn lực overhead. *(Chi tiết ABC = chương riêng; ở đây chỉ giới thiệu.)*

### s9 — Lập BCTC cho bên ngoài: under/overapplied overhead
Tổng overhead **áp** trong kỳ ≠ overhead **thực** phát sinh. Áp **ít hơn** thực → **underapplied**; áp **nhiều hơn** thực → **overapplied**. Điều chỉnh COGS:
- Underapplied → **tăng COGS**, **giảm** net operating income.
- Overapplied → **giảm COGS**, **tăng** net operating income.

### s10 — Job cost sheet là sổ chi tiết của BCTC
Tập hợp job cost sheet giải thích con số trên báo cáo: các job **chưa hoàn thành** = **Work in Process**; **hoàn thành chưa bán** = **Finished Goods** (Balance Sheet); **đã bán** = **Cost of Goods Sold** (Income Statement).

### s11 — Job-order costing trong công ty dịch vụ
Không chỉ sản xuất: job-order costing còn dùng rộng rãi trong dịch vụ — **văn phòng luật, công ty kiểm toán, điều trị y tế** (mỗi vụ/khách hàng = một job).

## questions (≥12 câu — mỗi đáp án có rationale; gồm Quick Check 1 gốc của slide)

### q1 — basic | conceptTested: khi nào dùng job-order costing
**Stem:** Doanh nghiệp nào KHÓ phù hợp nhất với job-order costing?
- a) Xưởng đóng tàu theo đơn đặt hàng ❌ — đúng "gu" job-order (sản phẩm độc nhất, làm theo đơn).
- b) Hãng phim sản xuất từng bộ phim ❌ — đây chính là ví dụ slide (Walt Disney).
- c) **Nhà máy lọc dầu sản xuất xăng đồng nhất liên tục ✅** — sản phẩm đồng nhất, sản xuất hàng loạt → thuộc *process costing*, không phải job-order.
- d) Công ty xây dựng công trình lớn ❌ — ví dụ slide (Bechtel).
- **takeaway:** Job-order = sản phẩm KHÁC nhau, làm theo đơn; sản phẩm đồng nhất hàng loạt → process costing. *(Bẫy: thấy "nhà máy lớn" tưởng là job-order.)*

### q2 — basic | conceptTested: cái gì traced vs allocated
**Stem:** Trong job-order costing, khoản nào phải **phân bổ (allocate)** chứ không truy nguyên thẳng vào job?
- a) Direct materials ❌ — truy nguyên qua materials requisition form.
- b) Direct labor ❌ — truy nguyên qua time ticket.
- c) **Manufacturing overhead ✅** — không truy nguyên được tới từng job → phân bổ qua POHR.
- d) Cả DM và DL ❌ — cả hai đều *traced*, đó là điểm mạnh của job-order costing.
- **takeaway:** DM & DL = traced; MOH = allocated. Mọi rắc rối của chương nằm ở chữ "allocated".

### q3 — basic | conceptTested: POHR tính trước hay sau
**Stem:** Predetermined overhead rate được xác định khi nào?
- a) **Trước khi kỳ bắt đầu, dựa trên số ước tính ✅** — để tính được giá job *ngay trong kỳ* và tránh dao động mùa vụ.
- b) Cuối kỳ khi biết overhead thực ❌ — nếu chờ số thực thì không định giá job trong kỳ được; đó là lý do *cần* POHR.
- c) Mỗi lần hoàn thành một job ❌ — rate sẽ nhảy loạn theo sản lượng từng job; chữ "predetermined" nghĩa là cố định trước.
- d) Khi lập báo cáo tài chính cuối năm ❌ — nhầm với bước điều chỉnh under/overapplied.
- **takeaway:** "Predetermined" = chốt trước kỳ bằng số ước tính. *(Bẫy: lẫn POHR với overhead thực cuối kỳ.)*

### q4 — intermediate | conceptTested: tính POHR bằng Y=a+bX
**Stem:** Ước tính: 160.000 DLH; định phí MOH $200.000; biến phí MOH $2,75/DLH. POHR theo DLH là bao nhiêu?
- a) $1,25/DLH ❌ — chỉ lấy định phí 200.000 ÷ 160.000; bỏ mất biến phí.
- b) $2,75/DLH ❌ — chỉ lấy biến phí/đơn vị, quên định phí được phân bổ vào rate.
- c) **$4,00/DLH ✅** — Y = 200.000 + 2,75×160.000 = 640.000; POHR = 640.000 ÷ 160.000 = $4,00.
- d) $4.640.000 ❌ — nhầm tổng MOH với *rate*; chưa chia cho base.
- **takeaway:** POHR gộp cả định phí lẫn biến phí ước tính: tính tổng MOH bằng Y=a+bX rồi mới chia cho base. *(Bẫy: tách lẻ a hoặc b.)*

### q5 — intermediate | conceptTested: normal costing — áp overhead theo hoạt động thực
**Stem:** POHR = $4/DLH. Job A-143 dùng 8 DLH thực tế. MOH áp vào job?
- a) **$32 ✅** — áp = POHR × hoạt động *thực* của job = 4 × 8.
- b) $640.000 ❌ — đó là tổng MOH ước tính của *cả kỳ*, không phải của một job.
- c) Bằng MOH thực mà job đó gây ra ❌ — normal costing dùng số *áp* (POHR × giờ), không dùng MOH thực từng job (không đo được).
- d) $4 ❌ — mới là rate, chưa nhân số giờ.
- **takeaway:** Overhead áp = POHR (chốt trước) × mức hoạt động THỰC của job. DM/DL dùng số thực, MOH dùng số áp.

### q6 — intermediate | conceptTested: Quick Check 1 — tổng chi phí một job
**Stem:** (Quick Check 1, slide) Job WR53: DM $200; 10 DLH @ $15; overhead ước tính cả năm $760.000; DLH ước tính 20.000. Chi phí ghi nhận cho job WR53?
- a) $200 ❌ — chỉ mới DM, bỏ DL và MOH áp.
- b) $350 ❌ — mới DM + DL ($200 + $150), quên áp overhead.
- c) $380 ❌ — chỉ mỗi MOH áp (38 × 10), bỏ DM và DL.
- d) **$730 ✅** — POHR = 760.000 ÷ 20.000 = $38/DLH; DM $200 + DL $150 + MOH (38×10=$380) = $730.
- **takeaway:** Total job cost = DM + DL + MOH áp; thiếu một cấu phần là rơi vào đúng các bẫy a/b/c. *(POHR phải tự tính trước, không cho sẵn.)*

### q7 — intermediate | conceptTested: unit product cost
**Stem:** Job A-143 có total cost $268, hoàn thành 2 đơn vị. Unit product cost?
- a) $268 ❌ — đó là *tổng* job, chưa chia số đơn vị.
- b) **$134 ✅** — 268 ÷ 2.
- c) $536 ❌ — nhân thay vì chia.
- d) Không tính được nếu chưa biết giá bán ❌ — unit *cost* độc lập với giá bán/markup.
- **takeaway:** Unit product cost = total job cost ÷ số đơn vị hoàn thành; đừng lẫn với giá bán.

### q8 — intermediate | conceptTested: cost driver & lý do dùng allocation base
**Stem:** Vì sao "lý tưởng" allocation base nên là một cost driver?
- a) **Vì cost driver là yếu tố *gây ra* overhead → phân bổ theo nó thì chi phí job mới chính xác ✅**.
- b) Vì direct labor-hours luôn là cost driver duy nhất ❌ — slide nói rõ giả định này "quá đơn giản và sai".
- c) Vì base nào cũng cho kết quả như nhau ❌ — đổi base làm đổi cả total cost lẫn giá bán (so sánh plantwide vs departmental).
- d) Để khỏi cần ước tính overhead ❌ — vẫn phải ước tính; base không thay thế việc ước tính MOH.
- **takeaway:** Base tốt = cost driver thật. Chọn base sai → giá job sai → quyết định sai. *(Bẫy: mặc định DLH là cost driver duy nhất.)*

### q9 — advanced | conceptTested: plantwide vs multiple/departmental rate
**Stem:** Vì sao dùng **nhiều** predetermined overhead rate (theo bộ phận) thường chính xác hơn một plantwide rate?
- a) Vì luôn ra tổng chi phí thấp hơn ❌ — không nhất thiết; nó cho con số *chính xác hơn*, không phải *thấp hơn*.
- b) **Vì mỗi bộ phận có cost driver khác nhau (vd Milling chạy theo machine-hours, Assembly theo labor-hours) → rate riêng phản ánh đúng cách job dùng overhead ✅**.
- c) Vì plantwide rate không tính được unit cost ❌ — vẫn tính được, chỉ kém chính xác hơn.
- d) Vì nhiều rate thì khỏi cần ước tính trước ❌ — vẫn predetermined cho từng bộ phận.
- **takeaway:** Một rate giả định cả nhà máy chung một cost driver; nhiều rate cho phép mỗi bộ phận theo driver của nó → job đi qua các bộ phận khác nhau được tính đúng hơn.

### q10 — advanced | conceptTested: cost-plus pricing với multiple rate (Dickson Job 407)
**Stem:** (Dickson) Job 407: DM tổng $1.170, DL tổng $350; MOH áp Milling 90 MH × $8,50 và Assembly 20 DLH × $10. Markup 75% trên total cost. Giá bán?
- a) **$4.348,75 ✅** — MOH = 765 + 200 = 965; total = 1.170 + 350 + 965 = $2.485; giá = 2.485 × 1,75 = $4.348,75.
- b) $1.863,75 ❌ — đó mới là *phần markup* (2.485 × 75%), chưa cộng vào total cost.
- c) $2.485 ❌ — total cost, chưa cộng markup.
- d) $4.243,75 ❌ — bẫy dùng nhầm rate (áp Assembly theo MH 4 thay vì DLH 20, hoặc Milling theo DLH) → sai overhead áp.
- **takeaway:** Selling price (cost-plus) = total cost + total cost × markup; và phải áp **đúng base của từng bộ phận** (Milling theo MH, Assembly theo DLH). *(Bẫy: dừng ở phần markup, hoặc lẫn base giữa hai bộ phận.)*

### q11 — advanced | conceptTested: under/overapplied overhead & chiều điều chỉnh COGS
**Stem:** Cuối kỳ overhead **áp** nhỏ hơn overhead **thực** phát sinh. Hệ quả?
- a) **Overhead bị underapplied → tăng COGS, giảm net operating income ✅**.
- b) Overhead bị overapplied → giảm COGS ❌ — overapplied là khi áp *nhiều hơn* thực; ở đây ngược lại.
- c) Không ảnh hưởng COGS vì đã dùng POHR ❌ — chính vì POHR là ước tính nên cuối kỳ phải điều chỉnh chênh lệch.
- d) Underapplied → giảm COGS, tăng NOI ❌ — sai chiều: áp thiếu nghĩa là chi phí ghi *chưa đủ* → phải *tăng* COGS.
- **takeaway:** Áp < thực = underapplied → tăng COGS, giảm NOI. Áp > thực = overapplied → ngược lại. *(Bẫy: nhớ nhãn nhưng đảo chiều điều chỉnh.)*

### q12 — basic | conceptTested: job cost sheet ↔ tài khoản tồn kho/BCTC
**Stem:** Một job đã **hoàn thành nhưng chưa bán**, chi phí của nó nằm ở đâu?
- a) Work in Process ❌ — WIP là job *đang làm dở*, chưa hoàn thành.
- b) **Finished Goods (trên Balance Sheet) ✅** — hoàn thành mà chưa bán → tồn kho thành phẩm.
- c) Cost of Goods Sold ❌ — chỉ khi *đã bán* mới chuyển sang COGS.
- d) Period expense ngay trong kỳ ❌ — chi phí sản xuất là product cost, "nằm chờ" trong tồn kho tới khi bán.
- **takeaway:** Job cost sheet là sổ chi tiết: đang làm → WIP; xong chưa bán → Finished Goods; đã bán → COGS. *(Nối lại product vs period cost ở Chương 1.)*

> Có thể dày thêm: một câu so sánh **prime vs conversion** áp vào số liệu PearCo (nối Chương 1), và một câu về **job-order costing trong dịch vụ** (luật/kiểm toán/y tế) để chốt s11.

## Bài tập mở (để người học tự luyện — KHÔNG chốt đáp án cứng trong UI)
- **Problem 2-16 (Landen, slide 6–7):** inputs slide — DLH 140.000; MH 70.000; định phí MOH $784.000; biến phí $2,00/DLH và $4,00/MH; Job 550: DM $175, DL $225, 15 DLH, 5 MH; markup 200%.
  - *(Đáp số tự suy ra từ input slide, kiểm chứng được — dùng làm lời giải tham khảo, KHÔNG phải số in sẵn trong slide:)* Theo DLH: POHR = (784.000 + 2×140.000)/140.000 = **$7,60/DLH** → MOH 7,60×15 = $114 → total $514 → giá 514×3 = **$1.542**. Theo MH: POHR = (784.000 + 4×70.000)/70.000 = **$15,20/MH** → MOH 15,20×5 = $76 → total $476 → giá 476×3 = **$1.428**. Hàm ý (yêu cầu 3): nếu MH mới là driver đúng mà vẫn dùng DLH thì job dùng nhiều máy/ít công sẽ bị **định giá sai** → mất khả năng cạnh tranh hoặc bán dưới giá.

## Gợi ý cho Codex khi implement
- `bigIdea` render nổi bật đầu trang.
- Các ví dụ PearCo / Dickson nên trình bày dạng bảng từng bước (DM → DL → MOH → Total → Unit) cho dễ theo dõi; số liệu giữ nguyên từ slide.
- `keyTerms` cho s0 (job, job-order vs process), s3 (POHR, allocation base, cost driver), s9 (under/overapplied).
- Quiz: chọn sai vẫn bung rationale **tất cả** đáp án + takeaway.
- Liên kết: "product vs period / prime vs conversion" trỏ về Chương 1 (`cost-concepts`); "ABC" và "process costing" trỏ tới chương sau khi có.
- Giữ tiếng Việt + thuật ngữ tiếng Anh; KHÔNG sửa `content/types.ts`.
