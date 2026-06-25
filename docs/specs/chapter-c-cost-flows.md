# Spec — Chương 3: Job-Order Costing — Cost Flows & External Reporting

> Claude (đầu não) → Codex (executor). Nguồn: **Garrison/Noreen/Brewer 17e, Chapter 3** = slide `3. Job order costing b.pdf` (54 trang). Bám slide; mọi số liệu dưới đây **VERIFIED từ slide** (ghi mã slide `3-x`).
> Chuẩn áp dụng: **Rich Teaching Mode** (`rich-teaching-mode.md` §A–§J) + **quy ước ngôn ngữ** (memory `quy-uoc-ngon-ngu-noi-dung`): diễn giải tiếng Việt, term tiếng Anh. KHÔNG đổi `content/types.ts` (schema đủ dùng).

## Meta
- `slug`: `job-order-cost-flows`
- `order`: `3`
- `title`: `"Chapter 3 — Job-Order Costing: Cost Flows and External Reporting"`
- `status`: `"draft"` (Claude review xong mới chuyển `ready`)
- `source`: `"Garrison, Noreen, Brewer — Managerial Accounting, 17e, Chapter 3 (slide '3. Job order costing b')"`
- `bigIdea`: Sau khi tính được chi phí từng job (Ch.2), chương này theo **dòng chi phí chạy qua sổ sách**: từ bút toán mua/xuất NVL → WIP → Finished Goods → COGS, lập **schedule of COGM/COGS**, và xử lý **under/overapplied overhead** khi lên báo cáo cho bên ngoài.
- `learningObjectives`:
  - "LO1 — Hiểu dòng luân chuyển chi phí trong job-order costing và lập journal entries ghi nhận chi phí."
  - "LO2 — Dùng T-account để biểu diễn dòng chi phí."
  - "LO3 — Lập schedule of cost of goods manufactured, cost of goods sold và income statement."
  - "LO4 — Tính under/overapplied overhead và lập bút toán đóng số dư Manufacturing Overhead."

## knowledgeMap (engine flow, layout tree, collapsible) — y chuẩn Ch.1/Ch.2
Root + 4 nhánh cấp 1; mỗi node cấp 2 có `detail` (1 câu) + `sectionId`. Không để rơi fallback.
- root `flows` — "Cost Flows" (concept) — detail: "Theo dấu chi phí job chạy qua sổ sách tới báo cáo." — sectionId s1
- `vocab` (purpose) "Thuật ngữ" → `v-absorption` "Absorption costing", `v-normal` "Normal costing", `v-pohr` "POHR" (sectionId s0)
- `flow` (lo) "LO1·2 Dòng & bút toán" → `f-rm` "Mua/xuất NVL", `f-labor` "Lao động", `f-moh` "Overhead thực vs áp", `f-taccount` "T-account" (sectionId s2/s3/s4)
- `sched` (lo) "LO3 Schedule" → `s-cogm` "Cost of goods manufactured", `s-cogs` "Cost of goods sold", `s-is` "Income statement" (sectionId s7/s8)
- `adj` (lo) "LO4 Điều chỉnh" → `a-uoa` "Under/overapplied", `a-close` "Đóng vào COGS", `a-alloc` "Phân bổ WIP/FG/COGS" (sectionId s9/s10)
> Điền `detail` cho mọi node cấp 2 bám định nghĩa trong spec này.

---

## Bối cảnh số liệu — Ruger Corporation, tháng 4 (VERIFIED, dùng xuyên suốt s1–s6)
- Beg WIP = $30,000 (Job A, bắt đầu tháng 3, xong tháng 4) (slide 3-8).
- Job B bắt đầu tháng 4, chưa xong cuối kỳ → còn lại trong WIP $72,000 (slide 3-21).
- Beg Raw Materials = $7,000; mua thêm $60,000 (slide 3-10).
- Xuất kho NVL $52,000 = $50,000 direct + $2,000 indirect (slide 3-11).
- Time tickets: $60,000 direct labor + $15,000 indirect labor (slide 3-13).
- Actual MOH khác: utilities $21,000 + rent factory equip $16,000 + misc $3,000 = $40,000 (slide 3-15).
- POHR = $6/machine-hour; Job A 10,000 MH + Job B 5,000 MH = 15,000 MH → **applied MOH = $90,000** (slide 3-17).
- Nonmanufacturing: S&A salaries $30,000 (entry 6); depreciation office equipment $7,000 (entry 7); advertising $42,000 + other S&A $8,000 = $50,000 (entry 8) (slide 3-18/3-19).
- Job A hoàn thành → chuyển **Finished Goods $158,000** (entry 9, slide 3-21). 1,000 đơn vị → **unit product cost $158**.
- Bán 750/1,000 đơn vị, sales revenue $225,000 (entry 10/11, slide 3-23) → **COGS = 750 × $158 = $118,500**.

---

## Sections (blocks gọn theo §F: tối đa 1 visual + 1 callout/section; calc/example có meaning/implication)

### s0 — Ôn thuật ngữ & Absorption costing
- **comparison** columns `["Thuật ngữ","Nghĩa"]`; rows: Absorption costing → "Tính vào giá sản phẩm TẤT CẢ chi phí sản xuất: DM, DL, và cả variable lẫn fixed MOH."; Normal costing → "MOH áp = POHR × mức hoạt động THỰC của job."; POHR → "Estimated total MOH ÷ estimated allocation base."
- **note** callout: "Chương này không có công thức mới — trọng tâm là DÒNG chi phí chạy qua tài khoản và báo cáo." (slide 3-2→3-4)

### s1 — Bức tranh dòng chi phí (Ruger)
- **prose**: giới thiệu Ruger + 4 định nghĩa flow (raw materials, work in process, finished goods, **cost of goods manufactured** = chi phí sản xuất của hàng HOÀN THÀNH trong kỳ). (slide 3-6)
- **realworld** callout "Tình huống Ruger": Beg WIP $30,000 (Job A), Job B chưa xong.

### s2 — Bút toán: mua & xuất nguyên vật liệu
- **comparison** "Journal entries — NVL" columns `["Bút toán","Nợ (Dr)","Có (Cr)"]`; rows:
  - (1) Mua RM → "Raw Materials 60,000" | "Accounts Payable 60,000"
  - (2) Xuất kho → "Work in Process 50,000 / Manufacturing Overhead 2,000" | "Raw Materials 52,000"
- **example** "Đọc bút toán (2)": body "Indirect materials $2,000 KHÔNG vào WIP mà vào Manufacturing Overhead."; meaning "Chỉ direct materials truy nguyên thẳng vào job (WIP); indirect đi vòng qua MOH."; implication "Nếu nhét nhầm indirect vào WIP, chi phí job bị thổi phồng và MOH áp sẽ sai." (slide 3-10/3-11)

### s3 — Bút toán: lao động & overhead (thực vs áp)
- **comparison** columns `["Bút toán","Nợ (Dr)","Có (Cr)"]`; rows:
  - (3) Lao động → "Work in Process 60,000 / Manufacturing Overhead 15,000" | "Salaries & Wages Payable 75,000"
  - (4) MOH thực khác → "Manufacturing Overhead 40,000" | "Accounts Payable 40,000"
  - (5) Áp MOH → "Work in Process 90,000" | "Manufacturing Overhead 90,000"
- **trap** callout: "MOH có HAI vế: bên Nợ gom chi phí THỰC (indirect mat $2k + indirect labor $15k + khác $40k = $57k), bên Có là số ÁP ($90k). Hai số này hầu như không bằng nhau → sinh under/overapplied." (slide 3-13→3-17)

### s4 — T-account: dòng chảy chi phí (engine flow, layout horizontal)
- **diagram** flow horizontal — nodes (group concept, có detail + `sectionId:"s4"`):
  - `RM` "Raw Materials" (detail "Mua vào; xuất ra: direct → WIP, indirect → MOH.")
  - `MOH` "Manufacturing Overhead" (detail "Bên Nợ = chi phí thực; bên Có = số áp vào WIP.")
  - `WIP` "Work in Process" (detail "Nhận DM, DL, MOH áp; job xong chuyển sang FG.")
  - `FG` "Finished Goods" (detail "Job hoàn thành chờ bán.")
  - `COGS` "Cost of Goods Sold" (detail "Job đã bán → chi phí trên Income Statement.")
  - edges: RM→WIP, RM→MOH (label "indirect"), MOH→WIP (label "áp", animated), WIP→FG (animated), FG→COGS (label "khi bán", animated).
- **key** callout: "Sơ đồ này là khung xương của cả chương — mọi bút toán chỉ là một mũi tên trên đây." (slide 3-9→3-22)

### s5 — Chi phí ngoài sản xuất (nonmanufacturing)
- **note** callout: "S&A salaries $30,000, depreciation office $7,000, advertising $42,000 + other $8,000 — KHÔNG gán vào job, ghi thẳng period expense." (slide 3-18/3-19)

### s6 — Hoàn thành & bán job
- **calc** "Job A: hoàn thành & bán" steps:
  - "Chuyển WIP→FG khi xong → Finished Goods 158,000 (Cr Work in Process 158,000)"
  - "Unit product cost → 158,000 ÷ 1,000 đơn vị = $158"
  - "Bán 750 đơn vị → COGS = 750 × 158"
  - result "$118,500"
  - meaning "Chỉ phần ĐÃ BÁN (750/1,000) thành COGS; 250 đơn vị còn lại nằm trong Finished Goods."
  - implication "Sản xuất xong ≠ thành chi phí; chi phí chỉ rơi vào Income Statement đúng lúc bán." (slide 3-21/3-23)
- (tuỳ chọn) note: Job B chưa xong → WIP cuối kỳ $72,000 ở lại Balance Sheet.

### s7 — Schedule of Cost of Goods Manufactured (LO3)
- **calc** "Schedule of COGM" steps (số Quick Check slide 3-31→3-36, VERIFIED):
  - "Beg RM 32,000 + mua 276,000 = RM available 308,000"
  - "− End RM 28,000 = **Direct materials used 280,000**"
  - "+ Direct labor 375,000 + MOH applied 180,000 = **Total manufacturing cost 835,000**"
  - "+ Beg WIP 125,000 − End WIP 200,000"
  - result "**COGM = 760,000**"
  - meaning "COGM = chi phí sản xuất của hàng HOÀN THÀNH trong kỳ, không phải toàn bộ chi phí bỏ ra."
  - implication "Lẫn 'total manufacturing cost' với 'COGM' là bẫy kinh điển — phải cộng/trừ tồn kho WIP."
- **trap** callout: "Direct materials used = Beg RM + mua − End RM (KHÔNG bằng số mua)."

### s8 — Schedule of COGS & Income Statement (LO3)
- **calc** "Từ COGM tới COGS" steps:
  - "Beg Finished Goods 130,000 + COGM 760,000 = Goods available for sale 890,000"
  - "− End Finished Goods 150,000"
  - result "**COGS = 740,000**"
  - meaning "COGS chỉ tính phần thành phẩm ĐÃ BÁN; phần tồn FG cuối kỳ ở lại Balance Sheet."
  - implication "Cùng một COGM, COGS đổi theo tồn kho FG đầu/cuối kỳ → đừng đánh đồng hai con số." (slide 3-37/3-38)

### s9 — Under/overapplied overhead — cách tính (LO4)
- **calc** "PearCo: under hay over?" steps:
  - "Applied = POHR × actual DLH = $4,00 × 170,000 = 680,000"
  - "Actual overhead = 650,000"
  - result "**Overapplied 30,000** (áp 680k > thực 650k)"
  - meaning "Overapplied = đã áp NHIỀU hơn chi phí thực → trước đó tính giá job hơi cao."
  - implication "Phải điều chỉnh để báo cáo phản ánh chi phí thực." (slide 3-41/3-42)
- **example** "Quick Check — Tiger": body "Applied = $4,00 × 290,000 MH = 1,160,000; actual = 1,210,000."; meaning "Áp 1,160k < thực 1,210k → **underapplied 50,000**."; implication "Underapplied → thiếu chi phí trên sổ → phải TĂNG COGS, GIẢM net operating income." (slide 3-43/3-44)

### s10 — Disposition của under/overapplied (LO4)
- **comparison** "Hai cách đóng số dư MOH" columns `["", "Đóng vào COGS","Phân bổ tỉ lệ"]`; rows:
  - Cách làm → "Đóng toàn bộ số dư MOH vào Cost of Goods Sold" | "Chia theo overhead áp còn nằm trong WIP, FG, COGS"
  - Độ chính xác → "Đơn giản" | "Chính xác hơn, phức tạp hơn"
- **calc** "Phân bổ $30,000 overapplied (PearCo)" steps (slide 3-47→3-50, VERIFIED):
  - "Overhead áp trong: WIP 68,000 (10%) · FG 204,000 (30%) · COGS 408,000 (60%) — tổng 680,000"
  - "Phân bổ 30,000 theo %: WIP 3,000 · FG 9,000 · COGS 18,000"
  - result "Bút toán: Dr Manufacturing Overhead 30,000 / Cr WIP 3,000, FG 9,000, COGS 18,000"
  - meaning "Cách phân bổ trả overhead về đúng nơi nó đang 'đậu' (WIP/FG/COGS)."
  - implication "Đóng thẳng vào COGS nhanh nhưng kém chính xác khi tồn kho WIP/FG lớn."
- **key** callout: "Underapplied → TĂNG COGS, GIẢM NOI. Overapplied → GIẢM COGS, TĂNG NOI." (slide 3-37/3-52)

---

## Quiz (bank ≥10 câu) — stem + options tiếng Việt, term EN; rationale theo Cơ chế → Bẫy → Khóa; takeaway tiếng Việt
> Số liệu Quick Check VERIFIED từ slide 3-x. Gọi distractor theo TÊN khái niệm, không A/B/C/D.

1. q1 (basic) — Khi nào sinh under/overapplied overhead? → đúng: "Khi MOH áp (POHR × thực) khác MOH thực tế." Bẫy: "khi POHR tính sai", "khi quên áp overhead".
2. q2 (intermediate) — Direct materials used: Beg RM 32,000; mua 276,000; End RM 28,000 → **280,000**. Bẫy: 276,000 (lấy số mua), 308,000 (quên trừ End), 2,000 (chỉ lấy chênh tồn).
3. q3 (intermediate) — Total manufacturing cost: DM used 280,000 + DL 375,000 + MOH applied 180,000 → **835,000**. Bẫy: 555,000 (thiếu DM), 655,000 (thiếu DL).
4. q4 (intermediate) — COGM: Beg WIP 125,000 + total mfg 835,000 − End WIP 200,000 → **760,000**. Bẫy: 960,000 (quên trừ End WIP), 1,160,000.
5. q5 (intermediate) — COGS: Beg FG 130,000 + COGM 760,000 − End FG 150,000 → **740,000**. Bẫy: 760,000 (nhầm với COGM), 780,000 (sai dấu).
6. q6 (intermediate) — Tiger: actual MOH 1,210,000; POHR $4/MH; 290,000 MH → **50,000 underapplied**. Bẫy: 50,000 overapplied (đảo chiều), 60,000.
7. q7 (basic) — Overapplied overhead ảnh hưởng net operating income? → "Tăng" (giảm COGS). Bẫy: "Giảm", "Không đổi".
8. q8 (basic) — Xuất kho indirect materials ghi Nợ tài khoản nào? → "Manufacturing Overhead". Bẫy: "Work in Process" (đó là direct), "Raw Materials".
9. q9 (basic) — Job hoàn thành thì chuyển chi phí từ đâu sang đâu? → "Work in Process → Finished Goods". Bẫy: "WIP → COGS" (chưa bán), "FG → COGS".
10. q10 (basic) — Hai cách disposition under/overapplied? → "Đóng vào COGS HOẶC phân bổ cho WIP/FG/COGS". Bẫy: "chỉ đóng vào COGS", "ghi period expense".
11. q11 (basic) — Absorption costing gồm gì? → "DM + DL + cả variable lẫn fixed MOH." Bẫy: "chỉ variable cost", "DM + DL (prime cost)".

> takeaway mỗi câu: 1 câu chốt tiếng Việt (vai trò 'Khóa').

---

## Lưu ý thực thi
- KHÔNG đổi `content/types.ts`. Bút toán dùng `comparison` (cột Dr/Cr); schedule dùng `calc`; T-account dùng `diagram engine:"flow"` horizontal (component sẵn có).
- Mọi node `flow` có `detail` + `sectionId`. knowledgeMap render qua `KnowledgeMapGrouped` (tự động, không sửa component).
- Ngôn ngữ: diễn giải tiếng Việt, term tiếng Anh (job-order costing, work in process, finished goods, cost of goods manufactured/sold, manufacturing overhead, under/overapplied, normal/absorption costing, POHR...).
- Sau khi Codex đổ nội dung: Claude review đối chiếu slide → chuyển `status: "ready"`.
