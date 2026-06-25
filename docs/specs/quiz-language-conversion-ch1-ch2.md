# Handoff — Chuẩn hóa ngôn ngữ Quiz (Chương 1 & 2)

> ⛔ **SUPERSEDED (2026-06-25).** Chaliyah đã đổi nguyên tắc ngôn ngữ cho TOÀN BỘ kiến thức trong chương:
> **diễn giải = tiếng Việt; thuật ngữ (term) = giữ tiếng Anh.** Điều này ĐẢO NGƯỢC mục #2 dưới đây
> (stem + options KHÔNG còn dịch sang tiếng Anh — phải để tiếng Việt, chỉ term giữ EN).
> - Mục **#1 (Title format "Chapter N — <tên EN>")** vẫn còn hiệu lực (title là tên chương gốc).
> - Mục **#3, #4 (rationale/takeaway tiếng Việt theo khung Cơ chế→Bẫy→Khóa)** vẫn đúng hướng.
> - Mục **#2 bị thay thế.** Nguyên tắc mới áp cho cả quiz lẫn block/detail/example/keyTerms.
> Xem prompt thực thi mới ("Prompt B — Ngôn ngữ toàn chương") và memory `quy-uoc-ngon-ngu-noi-dung`.

> Claude (đầu não) → Codex (executor). Áp **QUY ƯỚC NGÔN NGỮ** (`docs/quy-uoc-ngon-ngu-quiz.md`) vào 2 chương đã có trong `content/chapters.ts`. KHÔNG sửa `content/types.ts`.

## Phạm vi thay đổi
1. **Title** đổi sang format gốc của sách `"Chapter N — <tên tiếng Anh>"`:
   - `cost-concepts` → **"Chapter 1 — Managerial Accounting and Cost Concepts"**
   - `job-order-costing` → **"Chapter 2 — Job-Order Costing: Calculating Unit Product Costs"**
2. **Mọi `stem` và `options[].text`** → **tiếng Anh** (bám wording Garrison/Noreen/Brewer 17e). Dùng đúng bản dưới đây.
3. **Mọi `options[].rationale`** → **tiếng Việt**, giữ thuật ngữ English, theo khung **Cơ chế → Bẫy → Khóa**:
   - Đáp án đúng: **Cơ chế** (vì sao đúng) + **Khóa** (mẹo nhận diện).
   - Đáp án sai: **Bẫy (loại)** (gọi tên hiểu lầm — *sai phạm trù / ngược chiều / khái niệm gần / đảo ưu-nhược*) + **Cơ chế** (nguyên lý đúng).
   - **KHÔNG gọi đáp án theo chữ cái A/B/C/D** (app xáo trộn thứ tự) — gọi theo TÊN khái niệm.
4. Giữ nguyên `id`, `difficulty`, `conceptTested`, `isCorrect`, và `takeaway` (takeaway đóng vai "Khóa/Mẹo" tổng — giữ tiếng Việt + English terms). Giữ số liệu y nguyên.

---

# CHƯƠNG 1 — `cost-concepts` (q1–q13)

### q1 — Product cost vs period cost
**stem (EN):** "How should the salary of a salesperson working at a manufacturer's showroom be classified?"
- ✅ "A period cost (a selling cost)." — *Cơ chế:* hoạt động bán hàng nằm ngoài quá trình sản xuất → period cost, ghi thẳng vào kỳ, không qua inventory. *Khóa:* hỏi "phát sinh ở khâu sản xuất hay bán/quản lý?".
- ❌ "A product cost, because the company is a manufacturer." — *Bẫy (sai phạm trù):* "cứ là nhà máy thì product cost". *Cơ chế:* product cost chỉ gồm DM + DL + MOH; bán/quản lý là period.
- ❌ "Direct labor." — *Bẫy (khái niệm gần):* DL là nhân công trực tiếp LÀM RA sản phẩm, không phải bán hàng.
- ❌ "Manufacturing overhead." — *Bẫy (sai phạm trù):* MOH là chi phí SẢN XUẤT gián tiếp; lương bán hàng không thuộc khâu sản xuất.

### q2 — Period vs product (Quick Check)
**stem (EN):** "Which of the following is a period cost (not a product cost) in a manufacturing company?"
- ❌ "Depreciation on manufacturing equipment." — *Bẫy (khái niệm gần):* gắn vận hành nhà máy → MOH → product. *Cơ chế:* khấu hao thiết bị SX là product cost.
- ✅ "Property taxes on the corporate headquarters." — *Cơ chế:* trụ sở là khâu quản lý, không phải nhà máy → administrative → period. *Khóa:* cùng "property tax" nhưng ở factory = MOH, ở headquarters = period.
- ❌ "Direct materials cost." — *Bẫy (sai phạm trù):* DM → product cost.
- ❌ "Electricity to light the production area." — *Bẫy (khái niệm gần):* điện phục vụ sản xuất → MOH → product.

### q3 — Fixed cost per unit
**stem (EN):** "As the activity level increases within the relevant range, fixed cost PER UNIT will:"
- ✅ "Decrease." — *Cơ chế:* tổng fixed không đổi, chia cho số đơn vị lớn hơn → đơn vị giảm (biến thiên nghịch). *Khóa:* luôn hỏi "tổng hay đơn vị?".
- ❌ "Remain constant, because it is a fixed cost." — *Bẫy (sai phạm trù tổng/đơn vị):* "cố định" đúng với TỔNG, không đúng với ĐƠN VỊ.
- ❌ "Increase." — *Bẫy (ngược chiều):* định phí đơn vị giảm chứ không tăng khi sản lượng tăng.
- ❌ "Change in proportion to activity." — *Bẫy (khái niệm gần):* đó là mô tả variable cost TỔNG, không phải fixed cost đơn vị.

### q4 — Variable cost theo activity base (Quick Check)
**stem (EN):** "Which cost VARIES with the number of ice cream cones sold at a Baskin & Robbins store?"
- ✅ "The cost of the ice cream and the napkins given to customers." — *Cơ chế:* bán càng nhiều cone thì tổng tiền kem + giấy ăn càng tăng tỉ lệ thuận → variable theo activity base "số cone". *Khóa:* biến phí gắn trực tiếp với đơn vị hoạt động.
- ❌ "Electricity to light the store." — *Bẫy (khái niệm gần):* gần như cố định trong kỳ, không tỉ lệ số cone → fixed/mixed.
- ❌ "The store manager's salary." — *Bẫy (sai phạm trù):* cố định, không phụ thuộc số cone → fixed.
- ❌ "Rent for the store space." — *Bẫy (sai phạm trù):* committed fixed cost, không đổi theo số cone.

### q5 — Prime vs conversion
**stem (EN):** "Direct labor is part of which cost grouping?"
- ✅ "Both prime cost and conversion cost." — *Cơ chế:* Prime = DM + DL; Conversion = DL + MOH → DL nằm ở giao của hai nhóm. *Khóa:* DL là "cầu nối" hai cách nhóm.
- ❌ "Prime cost only." — *Bẫy (khái niệm gần):* nhớ máy móc, bỏ sót DL cũng thuộc conversion.
- ❌ "Conversion cost only." — *Bẫy (khái niệm gần):* bỏ sót DL nằm trong prime.
- ❌ "Neither, because it is a period cost." — *Bẫy (sai phạm trù):* DL là product cost, không phải period.

### q6 — Direct/indirect phụ thuộc cost object
**stem (EN):** "Consider the salary of a factory supervisor. Which statement is correct?"
- ✅ "It is an indirect cost of each individual product, but a direct cost of the production department." — *Cơ chế:* tính direct/indirect luôn gắn với COST OBJECT đang xét. *Khóa:* "direct hay indirect?" vô nghĩa nếu chưa nói rõ cost object.
- ❌ "It is always an indirect cost in every case." — *Bẫy (tuyệt đối hóa):* với cost object "department", lương này truy nguyên trực tiếp → direct.
- ❌ "It is always a direct cost." — *Bẫy (tuyệt đối hóa):* với cost object "một đơn vị sản phẩm", không truy nguyên kinh tế được → indirect.
- ❌ "It is a period cost." — *Bẫy (sai phạm trù):* quản đốc thuộc khâu sản xuất → indirect labor → MOH → product.

### q7 — Common cost
**stem (EN):** "Rent on a building shared by the production, selling, and accounting departments is, with respect to each department, best described as a:"
- ✅ "Common cost (an indirect cost serving several cost objects at once)." — *Cơ chế:* phát sinh để phục vụ nhiều bộ phận cùng lúc, không tách riêng → common cost. *Khóa:* common cost không gán riêng cho ai nếu không phân bổ.
- ❌ "A direct cost of each department." — *Bẫy (khái niệm gần):* không truy nguyên kinh tế riêng từng bộ phận → không direct.
- ❌ "A differential cost." — *Bẫy (sai phạm trù):* nhầm sang nhóm chi phí cho RA QUYẾT ĐỊNH; câu này hỏi khả năng truy nguyên.
- ❌ "A sunk cost." — *Bẫy (sai phạm trù):* sunk là chi phí quá khứ không đổi; tiền thuê tương lai không phải sunk.

### q8 — Mixed cost Y = a + bX
**stem (EN):** "An electricity bill has a fixed monthly charge of 40 and a variable rate of 0.03 per kWh. If 2,000 kWh are used in a month, what is the total bill?"
- ✅ "100 (= 40 + 0.03 × 2,000)." — *Cơ chế:* Y = a + bX = 40 + 60 = 100; tách đúng phần cố định và biến đổi. *Khóa:* mixed cost = a (định phí) + bX (biến phí).
- ❌ "60 (= 0.03 × 2,000)." — *Bẫy (khái niệm gần):* bỏ sót phần định phí a = 40.
- ❌ "40." — *Bẫy (khái niệm gần):* chỉ tính định phí, bỏ phần biến đổi 60.
- ❌ "80 (= 0.04 × 2,000)." — *Bẫy (đảo/gộp sai):* gộp định phí vào đơn giá biến đổi; phải tách a và b riêng.

### q9 — Sunk cost vs current sale value (Quick Check)
**stem (EN):** "Your car could currently be sold for 5,000. Is this 5,000 a sunk cost?"
- ✅ "No — this is not a sunk cost." — *Cơ chế:* 5,000 là giá bán TƯƠNG LAI có thể nhận → opportunity cost/dòng tiền tương lai, thích hợp với quyết định. Sunk là khoản đã chi mua xe trong quá khứ. *Khóa:* sunk = quá khứ, không đổi được.
- ❌ "Yes — because it relates to the car you already bought." — *Bẫy (sai phạm trù):* gán nhãn theo tài sản; sunk gắn với chi phí ĐÃ phát sinh, không phải giá trị thu tương lai.
- ❌ "Yes — because the car is used." — *Bẫy (khái niệm gần):* tình trạng xe không quyết định sunk; bản chất là dòng tiền tương lai có khác biệt giữa phương án.
- ❌ "It cannot be determined without the original purchase price." — *Bẫy (khái niệm gần):* giá mua ban đầu mới là sunk và KHÔNG cần để trả lời; 5,000 là giá trị tương lai nên đã đủ kết luận.

### q10 — Opportunity cost (case Phở)
**stem (EN):** "A pho shop owner uses her own house as the premises (which could be rented out for 15m VND/month) and runs the shop herself (she could earn 10m VND/month working elsewhere). When judging whether the shop is truly profitable, the 15m and 10m should be treated as:"
- ✅ "Opportunity costs — they must be deducted, even though they never appear in the books." — *Cơ chế:* lợi ích bị bỏ lỡ khi chọn mở quán; bỏ qua sẽ đánh giá lợi nhuận cao hơn thực chất. *Khóa:* hỏi "chọn cái này thì bỏ lỡ cái gì?".
- ❌ "Ignored, because no cash is paid out / there is no invoice." — *Bẫy (sai phạm trù):* "không chi tiền thì không phải chi phí"; opportunity cost không trên sổ nhưng vẫn relevant.
- ❌ "Sunk costs." — *Bẫy (khái niệm gần):* đây là lợi ích tương lai bị bỏ lỡ, không phải chi phí quá khứ.
- ❌ "Product costs of a bowl of pho." — *Bẫy (sai phạm trù):* không gắn vào quá trình làm ra tô phở; là chi phí cơ hội cấp quyết định.

### q11 — Gross margin vs contribution margin
**stem (EN):** "Sales are 100,000; COGS is 70,000 (including 60,000 of variable costs); selling & administrative expenses are 20,000 (all fixed). What is the contribution margin?"
- ✅ "40,000 (= Sales − total variable expenses of 60,000)." — *Cơ chế:* contribution margin = Sales − VARIABLE expenses, bất kể chi phí đó ở COGS hay S&A. *Khóa:* CM trừ theo HÀNH VI (biến/định).
- ❌ "30,000 (= Sales − COGS)." — *Bẫy (khái niệm gần):* đó là GROSS margin (traditional format), gom theo CHỨC NĂNG, không phải CM.
- ❌ "10,000 (= net operating income)." — *Bẫy (khái niệm gần):* là lãi thuần sau khi trừ cả fixed, không phải CM.
- ❌ "80,000 (= Sales − fixed costs of 20,000)." — *Bẫy (đảo biến/định):* trừ nhầm fixed thay vì variable; CM trừ VARIABLE expenses.

### q12 — Committed vs discretionary
**stem (EN):** "Which of the following fixed costs is DISCRETIONARY (can be cut in the short run by management decision)?"
- ✅ "This year's advertising budget." — *Cơ chế:* quảng cáo có thể tăng/giảm/hoãn trong ngắn hạn tùy quyết định → discretionary. *Khóa:* discretionary = quyết định ngắn hạn linh hoạt.
- ❌ "Depreciation on a factory already built." — *Bẫy (khái niệm gần):* đã cam kết dài hạn → committed.
- ❌ "Rent under a 10-year lease." — *Bẫy (khái niệm gần):* cam kết dài hạn → committed.
- ❌ "Property taxes on the factory." — *Bẫy (khái niệm gần):* gắn tài sản dài hạn đã sở hữu → committed.

### q13 — Relevant cost (train ticket Quick Check)
**stem (EN):** "You are considering taking the train instead of driving for a trip. How should the train ticket be treated in this decision?"
- ✅ "A relevant/differential cost, if it is incurred only when the train option is chosen." — *Cơ chế:* vé tàu là chi phí tương lai và khác biệt giữa hai phương án → thỏa relevant cost. *Khóa:* relevant = tương lai + khác biệt.
- ❌ "Not relevant, because the ticket has not been bought and so is not in the records yet." — *Bẫy (sai phạm trù):* "chưa ghi sổ thì không phải chi phí"; relevant cost không phụ thuộc chứng từ.
- ❌ "A sunk cost, because the trip was planned earlier." — *Bẫy (khái niệm gần):* gắn sunk với ý định quá khứ; sunk là khoản đã phát sinh không đổi được, vé chưa mua là dòng tiền tương lai.
- ❌ "Always irrelevant, because travel is a personal cost, not a manufacturing cost." — *Bẫy (sai phạm trù):* kéo nhầm product/period vào quyết định; câu hỏi về relevant cost.

---

# CHƯƠNG 2 — `job-order-costing` (q1–q12)

### q1 — Khi nào dùng job-order costing
**stem (EN):** "Which business is the LEAST suitable for job-order costing?"
- ❌ "A shipyard building vessels to order." — *Bẫy (đảo ưu-nhược):* đúng "gu" job-order (sản phẩm độc nhất, làm theo đơn).
- ❌ "A film studio producing individual movies." — *Bẫy (khái niệm gần):* ví dụ slide (Walt Disney) — hợp job-order.
- ✅ "An oil refinery producing homogeneous gasoline continuously." — *Cơ chế:* sản phẩm đồng nhất, sản xuất hàng loạt → process costing, không phải job-order. *Khóa:* job-order = sản phẩm KHÁC nhau, làm theo đơn.
- ❌ "A construction company building large projects." — *Bẫy (khái niệm gần):* ví dụ slide (Bechtel) — hợp job-order.

### q2 — Traced vs allocated
**stem (EN):** "In job-order costing, which cost must be ALLOCATED rather than traced directly to a job?"
- ❌ "Direct materials." — *Bẫy (khái niệm gần):* traced qua materials requisition form.
- ❌ "Direct labor." — *Bẫy (khái niệm gần):* traced qua time ticket.
- ✅ "Manufacturing overhead." — *Cơ chế:* không truy nguyên được tới từng job → phân bổ qua POHR. *Khóa:* DM & DL = traced; MOH = allocated.
- ❌ "Both direct materials and direct labor." — *Bẫy (đảo ưu-nhược):* cả hai đều traced — đó là điểm mạnh của job-order.

### q3 — POHR xác định khi nào
**stem (EN):** "When is the predetermined overhead rate established?"
- ✅ "Before the period begins, using estimated data." — *Cơ chế:* để tính giá job ngay trong kỳ và tránh dao động mùa vụ. *Khóa:* "predetermined" = chốt trước kỳ.
- ❌ "At the end of the period, once actual overhead is known." — *Bẫy (ngược chiều):* chờ số thực thì không định giá job trong kỳ được — chính là lý do cần POHR.
- ❌ "Each time a job is completed." — *Bẫy (khái niệm gần):* rate sẽ nhảy loạn; "predetermined" nghĩa là cố định trước.
- ❌ "When the annual financial statements are prepared." — *Bẫy (sai phạm trù):* nhầm với bước điều chỉnh under/overapplied cuối kỳ.

### q4 — Tính POHR bằng Y=a+bX
**stem (EN):** "Estimates: 160,000 DLH; fixed MOH 200,000; variable MOH 2.75 per DLH. What is the POHR per DLH?"
- ✅ "4.00 per DLH." — *Cơ chế:* Y = 200,000 + 2.75×160,000 = 640,000; POHR = 640,000 ÷ 160,000 = 4.00. *Khóa:* POHR gộp cả fixed lẫn variable rồi mới chia cho base.
- ❌ "1.25 per DLH." — *Bẫy (khái niệm gần):* chỉ lấy fixed 200,000 ÷ 160,000; bỏ variable.
- ❌ "2.75 per DLH." — *Bẫy (khái niệm gần):* chỉ lấy variable/đơn vị, quên fixed phân bổ vào rate.
- ❌ "4,640,000." — *Bẫy (sai phạm trù):* nhầm tổng MOH với rate; chưa chia cho base.

### q5 — Áp overhead (normal costing)
**stem (EN):** "The POHR is 4 per DLH. Job A-143 used 8 actual DLH. How much overhead is applied to the job?"
- ✅ "32." — *Cơ chế:* áp = POHR × hoạt động THỰC của job = 4 × 8. *Khóa:* DM/DL dùng số thực, MOH dùng số áp.
- ❌ "640,000." — *Bẫy (sai phạm trù):* đó là tổng MOH ước tính của cả kỳ, không phải của một job.
- ❌ "The actual overhead the job caused." — *Bẫy (khái niệm gần):* normal costing dùng số ÁP (POHR × giờ), không dùng MOH thực từng job (không đo được).
- ❌ "4." — *Bẫy (khái niệm gần):* mới là rate, chưa nhân số giờ.

### q6 — Tổng chi phí một job (Quick Check 1)
**stem (EN):** "Job WR53 required 200 of direct materials and 10 direct labor-hours at 15 per hour. Estimated total overhead for the year was 760,000 and estimated direct labor-hours were 20,000. What would be recorded as the cost of Job WR53?"
- ✅ "730." — *Cơ chế:* POHR = 760,000 ÷ 20,000 = 38/DLH; DM 200 + DL 150 + MOH (38×10=380) = 730. *Khóa:* Total job cost = DM + DL + MOH áp.
- ❌ "200." — *Bẫy (khái niệm gần):* chỉ mới DM, bỏ DL và MOH áp.
- ❌ "350." — *Bẫy (khái niệm gần):* mới DM + DL (200 + 150), quên áp overhead.
- ❌ "380." — *Bẫy (khái niệm gần):* chỉ mỗi MOH áp (38×10), bỏ DM và DL.

### q7 — Unit product cost
**stem (EN):** "Job A-143 has a total cost of 268 and 2 completed units. What is the unit product cost?"
- ✅ "134." — *Cơ chế:* 268 ÷ 2. *Khóa:* unit product cost = total job cost ÷ số đơn vị hoàn thành.
- ❌ "268." — *Bẫy (khái niệm gần):* đó là TỔNG job, chưa chia số đơn vị.
- ❌ "536." — *Bẫy (ngược chiều):* nhân thay vì chia.
- ❌ "Cannot be determined without the selling price." — *Bẫy (sai phạm trù):* unit cost độc lập với giá bán/markup.

### q8 — Cost driver & allocation base
**stem (EN):** "Why should the ideal allocation base be a cost driver?"
- ✅ "Because a cost driver is what causes overhead, so allocating by it makes job costs accurate." — *Cơ chế:* base phải drive được overhead thì giá job mới đúng. *Khóa:* base sai → giá job sai → quyết định sai.
- ❌ "Because direct labor-hours is always the only cost driver of overhead." — *Bẫy (tuyệt đối hóa):* slide nói giả định này "quá đơn giản và sai".
- ❌ "Because any base gives the same result." — *Bẫy (khái niệm gần):* đổi base làm đổi cả total cost lẫn giá bán (plantwide vs departmental).
- ❌ "So that overhead need not be estimated." — *Bẫy (sai phạm trù):* vẫn phải ước tính MOH; base không thay thế việc đó.

### q9 — Plantwide vs multiple/departmental rate
**stem (EN):** "Why are multiple (departmental) predetermined overhead rates usually more accurate than a single plantwide rate?"
- ✅ "Because each department has a different cost driver (e.g., Milling runs on machine-hours, Assembly on labor-hours), so a separate rate reflects how jobs actually use overhead." — *Cơ chế:* mỗi bộ phận theo driver của nó → job đi qua nhiều bộ phận được tính đúng hơn. *Khóa:* một rate giả định cả nhà máy chung một driver.
- ❌ "Because they always produce a lower total cost." — *Bẫy (đảo ưu-nhược):* cho con số CHÍNH XÁC hơn, không phải THẤP hơn.
- ❌ "Because a plantwide rate cannot compute a unit cost." — *Bẫy (khái niệm gần):* vẫn tính được, chỉ kém chính xác.
- ❌ "Because multiple rates remove the need to estimate in advance." — *Bẫy (sai phạm trù):* vẫn predetermined cho từng bộ phận.

### q10 — Cost-plus pricing với multiple rate (Dickson Job 407)
**stem (EN):** "Job 407: total direct materials 1,170 and total direct labor 350; overhead applied is Milling 90 MH × 8.50 and Assembly 20 DLH × 10. With a 75% markup on total cost, what is the selling price?"
- ✅ "4,348.75." — *Cơ chế:* MOH = 765 + 200 = 965; total = 1,170 + 350 + 965 = 2,485; price = 2,485 × 1.75. *Khóa:* selling price = total cost + total cost × markup, và áp ĐÚNG base từng bộ phận.
- ❌ "1,863.75." — *Bẫy (khái niệm gần):* đó mới là PHẦN markup (2,485 × 75%), chưa cộng vào total cost.
- ❌ "2,485." — *Bẫy (khái niệm gần):* total cost, chưa cộng markup.
- ❌ "4,243.75." — *Bẫy (đảo/gộp sai):* dùng nhầm base (Assembly theo MH thay vì DLH) → sai overhead áp.

### q11 — Under/overapplied overhead
**stem (EN):** "At year-end, applied overhead is less than the actual overhead incurred. What is the result?"
- ✅ "Overhead is underapplied → increase COGS, decrease net operating income." — *Cơ chế:* áp thiếu nghĩa là chi phí ghi chưa đủ → phải tăng COGS. *Khóa:* áp < thực = underapplied → tăng COGS, giảm NOI.
- ❌ "Overhead is overapplied → decrease COGS." — *Bẫy (ngược chiều):* overapplied là áp NHIỀU hơn thực; ở đây ngược lại.
- ❌ "No effect on COGS, because a POHR was used." — *Bẫy (khái niệm gần):* chính vì POHR là ước tính nên cuối kỳ phải điều chỉnh chênh lệch.
- ❌ "Underapplied → decrease COGS, increase NOI." — *Bẫy (ngược chiều):* sai chiều điều chỉnh — áp thiếu phải TĂNG COGS.

### q12 — Job cost sheet ↔ tồn kho/BCTC
**stem (EN):** "A job has been completed but not yet sold. Where is its cost reported?"
- ✅ "Finished Goods (on the balance sheet)." — *Cơ chế:* hoàn thành mà chưa bán → tồn kho thành phẩm. *Khóa:* đang làm → WIP; xong chưa bán → Finished Goods; đã bán → COGS.
- ❌ "Work in Process." — *Bẫy (khái niệm gần):* WIP là job ĐANG làm dở, chưa hoàn thành.
- ❌ "Cost of Goods Sold." — *Bẫy (ngược chiều):* chỉ khi ĐÃ bán mới chuyển sang COGS.
- ❌ "A period expense in the current period." — *Bẫy (sai phạm trù):* chi phí sản xuất là product cost, nằm chờ trong tồn kho tới khi bán.

---

## Lưu ý đồng bộ
- Sau khi sửa, cập nhật `docs/specs/chapter-a-cost-concepts.md` và `chapter-b-job-order-costing.md`: ghi chú stem/options dùng tiếng Anh + rationale theo khung Cơ chế→Bẫy→Khóa (đồng bộ với `docs/quy-uoc-ngon-ngu-quiz.md`).
- Mọi chương MỚI từ đây mặc định theo quy ước này ngay từ spec.
