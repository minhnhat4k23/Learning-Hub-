# Spec — Course Map môn Managerial Accounting (data-only)

> **Trạng thái:** Chaliyah CHỐT lens 2026-07-19 (khung 4 nhóm Plan/Control/Decide + 4 chuỗi + 6 cross-ref). Đóng Gap 1/E của `danh-gia-pedagogy-ma.md` §4.
> **Phạm vi:** CHỈ THÊM DATA — cơ chế render course map/threads đã là cơ chế chung từ `ob-course-map.md` §2/§8 (KnowledgeMapGrouped + FlowDiagram + `subject.courseMap`/`courseThreads`, page subject-agnostic). KHÔNG sửa code component/page/types. KHÔNG đụng môn khác.
> **Executor: Codex.** Files: `content/managerial.ts` (courseMap + threads + 6 callout cross-ref), `content/subjects.ts` (wiring entry MA).
> **Đọc kèm:** `docs/specs/codex-handoff.md`; mẫu data OB trong `content/organizational-behavior.ts` (bắt chước shape).

## 1. Mục đích (pedagogy)

Trang `/managerial-accounting` hiện chỉ là danh sách 8 topic — 8 "ốc đảo" (cross-ref toàn môn ≈4 chỗ, đều ở Ch1). Course map bổ sung tầng liên kết trên-topic:

- **Khung môn (hard frame):** Plan – Control – Decide theo Garrison/Noreen/Brewer 17e Ch.1 — khung này ĐÃ có trong content Ch1 s0 (comparison "Mục đích: Plan / Control / Decide"), không phải kiến thức mới.
- **Chuỗi khái niệm (soft lens):** 4 chuỗi xuyên topic — góc nhìn liên hệ do người soạn tổng hợp, KHÔNG phải trích sách → caption phải ghi rõ (luật Hard theory vs Soft lens).

## 2. `managerialCourseMap` (khai báo trong `content/managerial.ts`, export)

Cây 3 tầng cho KnowledgeMapGrouped (`parent` đầy đủ, KHÔNG khai báo `edges`):

- **Root** `ma-root` — label "Managerial Accounting", group `purpose`, detail: "Kế toán phục vụ nhà quản trị BÊN TRONG để Plan – Control – Decide (Garrison 17e Ch.1). Mọi chương đều trả lời: cần con số chi phí nào, cho mục đích nào."
- **4 group node** (parent = `ma-root`):

| id | label | group | detail |
|---|---|---|---|
| `lv-lang` | Ngôn ngữ chi phí | `purpose` | "Different costs for different purposes" — cùng một khoản chi được phân loại khác nhau tùy mục đích. Nền của mọi chương sau (Ch1). |
| `lv-cost` | Đo giá thành (Costing) | `lo` | Một đơn hàng tốn bao nhiêu: truy nguyên DM/DL + áp MOH bằng POHR (Ch2), rồi theo dòng chi phí qua sổ tới COGS và báo cáo (Ch3). |
| `lv-plan` | Hoạch định (Planning) | `concept` | Mô hình hóa tương lai: CVP trả lời what-if lợi nhuận (Ch5); master budget kết nối kế hoạch bán → sản xuất → tiền mặt (Ch8). |
| `lv-ctrl` | Kiểm soát & Quyết định | `term` | So thực tế với chuẩn: flexible budget tách variance (Ch9), standard costs drill từng input (Ch10); differential analysis chọn phương án (Ch13). |

- **8 chip topic** (parent = group node tương ứng, group cùng màu cha):

| id | label | parent | href |
|---|---|---|---|
| `c01` | Ch1 · Cost Concepts | `lv-lang` | `/managerial-accounting/cost-concepts` |
| `c02` | Ch2 · Job-Order Costing | `lv-cost` | `/managerial-accounting/job-order-costing` |
| `c03` | Ch3 · Cost Flows & Reporting | `lv-cost` | `/managerial-accounting/job-order-cost-flows` |
| `c05` | Ch5 · CVP Relationships | `lv-plan` | `/managerial-accounting/cost-volume-profit` |
| `c08` | Ch8 · Master Budget | `lv-plan` | `/managerial-accounting/master-budget` |
| `c09` | Ch9 · Flexible Budgets | `lv-ctrl` | `/managerial-accounting/flexible-budgets` |
| `c10` | Ch10 · Standard Costs & Variances | `lv-ctrl` | `/managerial-accounting/standard-costs` |
| `c13` | Ch13 · Differential Analysis | `lv-ctrl` | `/managerial-accounting/differential-analysis` |

- **`detail` của mỗi chip = NGUYÊN VĂN `bigIdea` của chương** — CẤM viết mới/tóm tắt. `rawChapters` không có biến tên riêng cho từng chương → dùng helper (khai báo SAU `rawChapters`, TRƯỚC courseMap):

```ts
const big = (slug: string): string => {
  const ch = rawChapters.find((c) => c.slug === slug);
  if (!ch) throw new Error(`courseMap: missing chapter ${slug}`);
  return ch.bigIdea;
};
// ví dụ: detail: big("cost-concepts")
```

- `caption`: "Khung Plan – Control – Decide theo Garrison/Noreen/Brewer 17e Ch.1. Bấm chip để xem bản chất chương và mở trang topic."

## 3. `managerialCourseThreads` (4 chuỗi, soft lens, export)

Mọi diagram engine `flow`, layout chỉ `horizontal`/`tree`. Node `detail` viết ĐÚNG như dưới — Codex không sáng tác thêm ý.

### Thread 1 — "Từ chi phí đến giá thành đơn vị" (layout `horizontal`, 4 node)

`description`: "Góc nhìn liên hệ: Ch1 → Ch2 → Ch3 là một đường thẳng — từ phân loại chi phí tới con số lợi nhuận trên báo cáo."

| id | label | detail |
|---|---|---|
| `th1-classify` | Phân loại chi phí SX (Ch1) | DM + DL + MOH là product cost — gắn vào sản phẩm, chờ trong tồn kho tới khi bán (Ch1 LO2·LO3). |
| `th1-pohr` | POHR & áp overhead (Ch2) | DM/DL truy nguyên thẳng vào job; MOH không truy nguyên được → áp bằng POHR × mức hoạt động thực (normal costing) → unit product cost. |
| `th1-flow` | Dòng chi phí qua sổ (Ch3) | Chi phí job chảy Raw Materials → Work in Process → Finished Goods → COGS; job cost sheet là sổ chi tiết giải thích số dư. |
| `th1-adj` | Adjusted COGS & NOI (Ch3) | Overhead áp ≠ thực → under/overapplied điều chỉnh vào COGS trước khi lên income statement — khép vòng từ phân loại tới lợi nhuận. |

Edges: `th1-classify→th1-pohr` "vào job", `th1-pohr→th1-flow` "qua sổ", `th1-flow→th1-adj` "điều chỉnh".

### Thread 2 — "Hành vi chi phí là động cơ của lợi nhuận" (layout `horizontal`, 4 node)

`description`: "Góc nhìn liên hệ: variable/fixed học ở Ch1 không phải để thuộc lòng — nó là nhiên liệu của CVP và của mọi quyết định dùng contribution margin."

| id | label | detail |
|---|---|---|
| `th2-behavior` | Hành vi chi phí (Ch1) | Variable đổi theo cost driver, fixed phẳng trong relevant range, mixed = Y = a + bX (Ch1 LO4). |
| `th2-sep` | Tách mixed cost (Ch5 App 5A) | High-low / least-squares tách a và b — có a, b sạch mới chạy được mô hình CVP. |
| `th2-cvp` | CVP: CM là động cơ (Ch5) | CM = Sales − variable, phủ fixed rồi mới thành profit; break-even, target profit, MOS, DOL đều xoay quanh CM. |
| `th2-decide` | Quyết định dùng CM (Ch13) | Drop segment so CM mất với fixed tránh được; special order chỉ cần phủ variable; constraint xếp theo CM trên mỗi đơn vị nguồn lực khan hiếm. |

Edges: `th2-behavior→th2-sep` "tách a, b", `th2-sep→th2-cvp` "nạp mô hình", `th2-cvp→th2-decide` "áp vào quyết định".

### Thread 3 — "Vòng Plan → Control" (layout `horizontal`, 4 node)

`description`: "Góc nhìn liên hệ: Ch8 lập chuẩn, Ch9 so công bằng, Ch10 mổ xẻ nguyên nhân — một vòng khép của quản trị."

| id | label | detail |
|---|---|---|
| `th3-plan` | Master budget (Ch8) | Bộ kế hoạch liên kết khởi đầu từ sales forecast — chính là static planning budget mà kỳ sau sẽ đem so với thực tế. |
| `th3-flex` | Flexible budget (Ch9) | Flex theo mức hoạt động thực để tách activity variance khỏi revenue & spending variance — hết so "táo với cam". |
| `th3-std` | Standard costs (Ch10) | Drill spending variance xuống từng input: price/rate vs quantity/efficiency bằng khung AQ×AP → AQ×SP → SQ×SP. |
| `th3-mbe` | Management by exception | Variance lớn được đánh dấu để điều tra và quy trách nhiệm đúng người (purchasing vs production) — khép vòng plan → control. |

Edges: `th3-plan→th3-flex` "làm chuẩn", `th3-flex→th3-std` "drill từng input", `th3-std→th3-mbe` "quy trách nhiệm".

### Thread 4 — "Chi phí nào relevant cho quyết định?" (layout `tree`, hub 1 cha + 3 con, PHẢI set `parent`)

`description`: "Góc nhìn liên hệ: lăng kính relevant cost gieo ở Ch1 chạy xuyên môn — Ch13 là nơi nó thành khung đầy đủ."

| id | label | parent | detail |
|---|---|---|---|
| `th4-rel` | Lăng kính relevant cost (Ch1) | — | Chi phí thích hợp = TƯƠNG LAI + KHÁC BIỆT giữa phương án; sunk bỏ qua, opportunity cost phải tính (Ch1 LO5). |
| `th4-dec` | 5 quyết định (Ch13) | `th4-rel` | Add/drop, make-or-buy, special order, constrained resource, sell-or-process-further — tất cả chỉ là áp bộ lọc relevant vào 5 tình huống. |
| `th4-avg` | Bẫy average unit cost (Ch2) | `th4-rel` | Unit product cost là chi phí BÌNH QUÂN — không phải incremental cost của 1 đơn vị thêm; đừng dùng cho quyết định "làm thêm". |
| `th4-whatif` | Incremental what-if (Ch5) | `th4-rel` | 5 kịch bản CVP đều so phần CM tăng thêm với phần chi phí tăng thêm — cùng tư duy differential. |

Edges (BẮT BUỘC nhãn): `th4-rel→th4-dec` "áp khung", `th4-rel→th4-avg` "cảnh báo", `th4-rel→th4-whatif` "cùng tư duy".

### Caption chung cho threads

Mỗi diagram thread có `caption` bắt đầu bằng: "Góc nhìn liên hệ (lens) tổng hợp từ nội dung các topic — không phải trích nguyên văn sách."

## 4. 6 cross-ref "Mắt xích môn học" (chèn vào `content/managerial.ts`)

Mỗi chỗ = 1 callout **nối vào CUỐI mảng `blocks`** của section chỉ định. Shape: `{ type: "callout", callout: { kind: "note", title: "Mắt xích môn học", body: "..." } }`. Body ĐÚNG NGUYÊN VĂN dưới đây:

| # | Chương, section | body |
|---|---|---|
| 1 | Ch2 (`job-order-costing`), s9 | "Chương này mới NHẬN DIỆN under/overapplied. Chapter 3 sẽ theo trọn dòng bút toán RM → WIP → FG → COGS và đưa số điều chỉnh này vào Schedule of COGS (Exhibit 3-9)." |
| 2 | Ch3 (`job-order-cost-flows`), s0 | "Absorption costing, normal costing và POHR đã học ở Chapter 2 — chương này chỉ theo DÒNG của chúng qua sổ sách và báo cáo." |
| 3 | Ch5 (`cost-volume-profit`), s5 | "Tư duy incremental ở 5 kịch bản này chính là nền của differential analysis — Chapter 13 nâng nó thành khung quyết định đầy đủ." |
| 4 | Ch8 (`master-budget`), s10 | "Master budget lập ở mức hoạt động KẾ HOẠCH — nó chính là static planning budget mà Chapter 9 sẽ đem so với kết quả thực để tách variance." |
| 5 | Ch9 (`flexible-budgets`), s3 | "Spending variance ở đây mới là tổng của từng dòng chi phí. Chapter 10 sẽ drill nó xuống từng input (price vs quantity) bằng standard costs." |
| 6 | Ch13 (`differential-analysis`), s0 | "Differential, sunk và opportunity cost đã gieo ở Chapter 1 (LO5) — chương này biến lăng kính đó thành khung phân tích cho 5 quyết định kinh điển." |

## 5. Wiring `content/subjects.ts`

Entry `managerial-accounting`: import `managerialCourseMap`, `managerialCourseThreads` từ `./managerial` và gắn `courseMap` / `courseThreads` (y hệt pattern entry OB đang có). KHÔNG sửa subtitle hay field khác.

## 6. Ràng buộc thực thi (Codex)

- KHÔNG sửa nội dung 8 chương hiện có (sections/quiz/bigIdea/knowledgeMap) — chỉ THÊM 6 callout §4 (nối cuối `blocks`) + 2 export mới + helper `big()`.
- KHÔNG đụng code component/page/types (cơ chế đã chung). KHÔNG đụng môn khác.
- Type: `managerialCourseMap: CourseMapDiagram` (không `edges`); threads dùng `CourseThread[]`.
- Layout chỉ `horizontal`/`tree`; thread 4 dùng `tree` PHẢI set `parent` cho 3 node con.
- Không commit/push.

## 7. Verify 2 lớp (Claude chạy sau khi Codex xong)

- **Lớp A (render):** `npx tsc --noEmit` PASS; Playwright `/managerial-accounting` ở 375/768/1440: 2 khối "Bản đồ môn học" + "Chuỗi khái niệm" hiện trên danh sách topic, không hscroll, không pageerror; click 1 chip → detail (đúng bigIdea) + link "Mở topic" điều hướng đúng; `/organizational-behavior` và `/digital-technology-business` không đổi.
- **Lớp B (completeness + traceability):** đủ 8/8 chip, href khớp slug thật, detail chip = `big(slug)` (tham chiếu, không copy chuỗi); 4 thread + 6 cross-ref đúng nguyên văn spec, không ý mới; **traceability check**: mọi khái niệm trong thread/cross-ref grep thấy trong content đã audit (script check tự động).

## 8. Kết quả verify (2026-07-19, Claude)

| Hạng mục | Trạng thái |
|---|---|
| Diff ADD-only (346+/1−, dòng xóa duy nhất = mở rộng import type) | ✅ |
| `npx tsc --noEmit` | ✅ PASS |
| **Lớp B** — script `ma-verify-coursemap.mjs` (scratchpad 67d637e6): 13 node map (root + 4 group + 8 chip), parent/group/href đúng, detail chip === bigIdea nguyên văn (qua `big()`, grep 8 lần `detail: big(`), 4 thread đúng node/edge/nhãn/layout/caption disclaimer, 6 cross-ref nguyên văn + nằm CUỐI blocks + kind note, quiz 8 chương không đổi (120 câu), traceability 18 khái niệm | ✅ **129/129 PASS** |
| **Lớp A** — script `ma-render-coursemap.mjs`: 375/768/1440 không hscroll, 2 khối "Bản đồ môn học" + "Chuỗi khái niệm" hiện, đủ 4 thread title; click chip Ch1 → detail = bigIdea + link "Mở topic" → `/managerial-accounting/cost-concepts`; `/organizational-behavior` giữ nguyên map+threads; `/digital-technology-business` không có map; pageerror = 0 | ✅ **19/19 PASS** (screenshot `ma-coursemap-1440.png`, `ma-coursemap-chip.png`) |

Ghi chú vặt khi verify: heading khối render CSS uppercase → check text phải case-insensitive (đã ghi vào script cho lần sau).
