# Spec: MA Topic 3 (job-order-cost-flows) — bổ sung cho ĐỦ sách Garrison Ch.3

> **Loại:** CHỈ THÊM section/block/quiz vào chapter `job-order-cost-flows` trong `content/managerial.ts`. **KHÔNG rewrite** phần đã có (kể cả s7/s8 generic — GIỮ NGUYÊN làm bài luyện thêm); KHÔNG đụng chương/môn khác.
> **Executor: Codex.** File DUY NHẤT: `content/managerial.ts`.
> **Nguồn:** Garrison/Noreen/Brewer 17e, **Chapter 3** "Job-Order Costing: Cost Flows and External Reporting" (book p.107–125, ví dụ Ruger Corporation tháng 4). Mọi số VERIFIED + trích Exhibit.
> **Ngôn ngữ:** diễn giải VI + giữ term EN. Quiz `stem`/`options` EN; `rationale` VI+EN (Cơ chế→Bẫy→Khóa), distractor đặt tên khái niệm.
> **Lý do:** LUẬT global SÁCH>slide (`workflow-soan-mon-moi.md` §0). Audit Lớp B đã đối chiếu trọn Ch.3 (Exhibit 3-1…3-13, 14 journal entries Ruger, Glossary 16 term, 2 Review Problem).
> **Đã ĐỦ (không đụng):** s0 vocab/absorption, s1 cost flow Ruger, s2 bút toán NVL (1-2), s3 labor+MOH (3-7), s4 T-account, s5 nonmanufacturing (8-10), s6 hoàn thành & bán (11-13, $158 × 750 = $118,500), s9 under/overapplied (PearCo/Tiger), s10 disposition (2 cách + phân bổ tỉ lệ). Chỉ bổ sung phần dưới.
> **Style block:** calc = `{title, steps:[{label,expr}], result, meaning?, implication?}`; comparison = `{title, columns, rows:[{label,cells}]}`; callout = `{kind,title?,body}`. Bám shape THỰC tế trong managerial.ts (đối chiếu block quanh s7/s8).

---

## Bối cảnh gap

Web s1–s6 dùng **số Ruger thật**, nhưng s7 (Schedule COGM) và s8 (Schedule COGS) lại **bịa dataset khác** (COGM 760k, COGS 740k) và **dừng ở unadjusted COGS**, KHÔNG có: (1) bước trừ indirect materials để ra direct materials used; (2) adjusted COGS = unadjusted ± under/overapplied; (3) income statement thật. Kết quả: web **chưa từng trình bày Exhibit 3-8/3-9/3-10 của Ruger** — trọng tâm LO3.

**Cách vá (ADD-only):** thêm **section mới `s11`** trình bày trọn báo cáo Ruger (Ex 3-8→3-10). Vá cùng lúc 3 gap + khôi phục tính nhất quán với s1–s6. Giữ s7/s8 generic nguyên vẹn.

---

## A. Section MỚI `s11` — Báo cáo đầy đủ của Ruger (Exhibit 3-8 → 3-10)

Thêm 1 **section mới** vào mảng `sections`, đặt **ngay sau `s8`** (liền mạch với schedule generic; trước s9 under/overapplied). Nếu thứ tự sections theo vị trí mảng thì chèn sau object `s8`. Mọi số **VERIFIED sách Exhibit 3-8/3-9/3-10 (Ruger, p.114–116)**.

```ts
{
  id: "s11",
  heading: "Ruger đầy đủ: COGM → COGS điều chỉnh → Income Statement (Exhibit 3-8/3-9/3-10)",
  blocks: [
    {
      type: "callout",
      callout: {
        kind: "note",
        title: "Nối lại mạch Ruger",
        body: "s7/s8 ở trên minh hoạ schedule bằng bộ số luyện tập. Mục này dựng ĐÚNG ba báo cáo của Ruger (case xuyên suốt s1–s6) như Exhibit 3-8, 3-9, 3-10 trong sách — để thấy trọn dòng từ chi phí sản xuất → hàng bán → lợi nhuận.",
      },
    },
    {
      type: "calc",
      calc: {
        title: "Exhibit 3-8 — Schedule of Cost of Goods Manufactured (Ruger)",
        steps: [
          { label: "Raw materials used in production", expr: "Beg RM 7,000 + Purchases 60,000 = 67,000 available − End RM 15,000 = 52,000" },
          { label: "TRỪ indirect materials → Direct materials used", expr: "RM used 52,000 − Indirect materials 2,000 = DM used 50,000" },
          { label: "Total manufacturing costs added", expr: "DM used 50,000 + DL 60,000 + MOH applied 90,000 = 200,000" },
          { label: "Điều chỉnh WIP đầu/cuối kỳ", expr: "Beg WIP 30,000 + 200,000 = 230,000 to account for − End WIP 72,000" },
        ],
        result: "Cost of goods manufactured = $158,000",
        meaning:
          "Chú ý bước 2: 'raw materials used' KHÁC 'direct materials used' — phải trừ indirect materials $2,000 (đã đi qua Manufacturing Overhead) ra khỏi RM đã xuất mới ra direct materials thật vào job.",
        implication:
          "Bỏ bước trừ indirect materials là bẫy: DM used bị thổi lên $2,000 và bị đếm hai lần (một lần ở DM, một lần trong MOH applied).",
      },
    },
    {
      type: "calc",
      calc: {
        title: "Exhibit 3-9 — Schedule of Cost of Goods Sold (Ruger)",
        steps: [
          { label: "Goods available for sale", expr: "Beg FG 0 + COGM 158,000 = 158,000" },
          { label: "Trừ End Finished Goods", expr: "158,000 − End FG 39,500 = Unadjusted COGS 118,500" },
          { label: "Cộng underapplied overhead (điều chỉnh)", expr: "Unadjusted COGS 118,500 + Underapplied 5,000" },
        ],
        result: "Adjusted cost of goods sold = $123,500",
        meaning:
          "Unadjusted COGS dựa trên MOH ÁP (applied), chưa phản ánh MOH thực. Underapplied $5,000 nghĩa là áp THIẾU → COGS đang bị hụt → CỘNG vào để ra adjusted COGS. Nếu overapplied thì TRỪ.",
        implication:
          "Đây chính là mắt xích LO4 → LO3: số under/overapplied ở s9/s10 được đưa vào ĐÂY để điều chỉnh COGS trước khi lên income statement.",
      },
    },
    {
      type: "comparison",
      table: {
        title: "Exhibit 3-10 — Income Statement (Ruger, tháng 4)",
        columns: ["Khoản mục", "Số tiền ($)"],
        rows: [
          { label: "Sales", cells: ["225,000"] },
          { label: "Cost of goods sold (adjusted)", cells: ["123,500"] },
          { label: "Gross margin", cells: ["101,500"] },
          { label: "Selling & administrative (30,000 + 7,000 + 42,000 + 8,000)", cells: ["87,000"] },
          { label: "Net operating income", cells: ["14,500"] },
        ],
      },
    },
    {
      type: "callout",
      callout: {
        kind: "key",
        title: "Ba báo cáo nối nhau",
        body: "COGM $158,000 (Ex 3-8) → chảy vào Schedule of COGS ra adjusted COGS $123,500 (Ex 3-9) → chảy vào Income Statement, trừ S&A $87,000 để ra NOI $14,500 (Ex 3-10). S&A KHÔNG chạy qua schedule COGM/COGS — ghi thẳng period expense.",
      },
    },
  ],
},
```

**Số End FG $39,500** = 250 đơn vị chưa bán × $158 = $39,500 (khớp T-account Finished Goods: Bal 0 + 158,000 − 118,500 = 39,500). VERIFIED Exhibit 3-7.

---

## B. Section `s10` — Bổ sung so sánh ĐỊNH LƯỢNG hai cách disposition

Thêm 1 `callout` (kind `insight`) vào `blocks` của `s10` (nối sau callout "Chiều ảnh hưởng" đã có). Số VERIFIED sách p.121 (Ruger, underapplied $5,000).

```ts
{ type: "callout", callout: { kind: "insight", title: "Hai cách lệch nhau bao nhiêu? (Ruger)", body: "Ruger underapplied $5,000. Đóng thẳng vào COGS: cả $5,000 dồn vào Cost of Goods Sold. Phân bổ tỉ lệ: chỉ $2,500 vào COGS (phần còn lại $1.666,50 vào WIP, $833,50 vào FG). ⇒ Cách đơn giản làm COGS CAO hơn $2,500 và NOI THẤP hơn $2,500 so với phân bổ tỉ lệ. Chênh này càng lớn khi tồn kho WIP/FG càng nhiều (sách p.121)." } },
```

---

## C. Quiz bổ sung `q12`–`q14`

Thêm vào CUỐI mảng `questions` (sau `q11`). Test đúng 3 concept mới: indirect-materials deduction, adjusted COGS, income statement NOI.

```ts
{
  id: "q12",
  difficulty: "intermediate",
  conceptTested: "Raw materials used vs direct materials used",
  stem: "Ruger: RM used in production = $52,000, in which indirect materials = $2,000. Direct materials used added to Work in Process is:",
  options: [
    { id: "a", text: "$50,000.", isCorrect: true, rationale: "Cơ chế: direct materials used = raw materials used $52,000 − indirect materials $2,000 = $50,000. Bẫy: dùng luôn raw materials used làm direct materials. Khóa: indirect materials đã đi qua Manufacturing Overhead nên phải trừ ra." },
    { id: "b", text: "$52,000.", isCorrect: false, rationale: "Cơ chế: $52,000 là raw materials used (gồm cả indirect). Bẫy: không tách indirect materials. Khóa: chỉ direct materials mới vào WIP trực tiếp." },
    { id: "c", text: "$54,000.", isCorrect: false, rationale: "Cơ chế: cộng thay vì trừ indirect materials. Bẫy: sai dấu. Khóa: indirect materials phải TRỪ khỏi RM used." },
    { id: "d", text: "$2,000.", isCorrect: false, rationale: "Cơ chế: $2,000 chỉ là indirect materials. Bẫy: lấy nhầm phần indirect. Khóa: direct = tổng RM used − indirect." },
  ],
  takeaway: "Direct materials used = raw materials used − indirect materials = $52,000 − $2,000 = $50,000.",
},
{
  id: "q13",
  difficulty: "intermediate",
  conceptTested: "Adjusted cost of goods sold",
  stem: "Ruger: unadjusted COGS = $118,500 and manufacturing overhead is underapplied by $5,000. Adjusted cost of goods sold is:",
  options: [
    { id: "a", text: "$123,500.", isCorrect: true, rationale: "Cơ chế: underapplied nghĩa là áp thiếu → COGS bị hụt → CỘNG $5,000: 118,500 + 5,000 = 123,500. Bẫy: trừ thay vì cộng. Khóa: underapplied → tăng COGS." },
    { id: "b", text: "$113,500.", isCorrect: false, rationale: "Cơ chế: đây là chiều của OVERapplied (trừ). Bẫy: đảo chiều điều chỉnh. Khóa: underapplied cộng vào COGS." },
    { id: "c", text: "$118,500.", isCorrect: false, rationale: "Cơ chế: đó là unadjusted COGS, chưa điều chỉnh. Bẫy: quên đưa under/overapplied vào. Khóa: phải điều chỉnh trước khi lên income statement." },
    { id: "d", text: "$5,000.", isCorrect: false, rationale: "Cơ chế: $5,000 chỉ là số underapplied. Bẫy: nhầm phần điều chỉnh với tổng. Khóa: adjusted = unadjusted ± chênh lệch." },
  ],
  takeaway: "Underapplied → adjusted COGS = unadjusted COGS + underapplied = $118,500 + $5,000 = $123,500.",
},
{
  id: "q14",
  difficulty: "intermediate",
  conceptTested: "Net operating income từ income statement",
  stem: "Ruger: Sales $225,000; adjusted COGS $123,500; selling & administrative expenses $87,000. Net operating income is:",
  options: [
    { id: "a", text: "$14,500.", isCorrect: true, rationale: "Cơ chế: gross margin = 225,000 − 123,500 = 101,500; NOI = 101,500 − 87,000 = 14,500. Bẫy: quên trừ S&A. Khóa: NOI = gross margin − S&A." },
    { id: "b", text: "$101,500.", isCorrect: false, rationale: "Cơ chế: $101,500 là gross margin, chưa trừ S&A. Bẫy: dừng ở gross margin. Khóa: S&A là period expense phải trừ tiếp." },
    { id: "c", text: "$102,500.", isCorrect: false, rationale: "Cơ chế: sai số học khi trừ. Bẫy: tính nhầm. Khóa: 101,500 − 87,000 = 14,500." },
    { id: "d", text: "$137,500.", isCorrect: false, rationale: "Cơ chế: cộng S&A vào thay vì trừ. Bẫy: sai dấu S&A. Khóa: S&A làm GIẢM lợi nhuận." },
  ],
  takeaway: "NOI = Sales − adjusted COGS − S&A = 225,000 − 123,500 − 87,000 = $14,500.",
},
```

---

## D. (Optional) knowledgeMap — trỏ node `s-is` sang s11

Node `s-is` (Income statement) hiện `sectionId: "s8"` nhưng s8 không dựng income statement. **Đổi `sectionId` của node `s-is` sang `"s11"`** (nơi có income statement thật). Chỉ sửa đúng field đó, không đụng node khác.

---

## E. Coverage matrix sau bổ sung (lưu vết Lớp B)

| Kiến thức sách Ch.3 | Exhibit | Web trước | Sau spec |
|---|---|---|---|
| Vocab / absorption / normal / POHR | 3-1, Glossary | s0 | s0 ✓ |
| Cost flow RM→WIP→FG→COGS | 3-2/3-13 | s1, s4 | ✓ |
| Journal entries (1)-(13) | 3-3/3-4/3-5/3-6 | s2, s3, s5, s6 | ✓ |
| T-account cost flow | 3-7 | s4 | ✓ |
| **Raw vs direct materials used (trừ indirect)** | 3-8 | ❌ thiếu | **s11 ✓** |
| Schedule COGM (Ruger $158,000) | 3-8 | s7 (generic) | **s11 ✓ (số thật)** |
| **Adjusted COGS (unadj + under/over)** | 3-9 | ❌ thiếu | **s11 ✓** |
| **Income Statement (NOI $14,500)** | 3-10 | ❌ thiếu | **s11 ✓** |
| Under/overapplied — cách tính | 3-11 | s9 | ✓ |
| Disposition 2 cách + phân bổ tỉ lệ | (14), 3-12 | s10 | ✓ |
| **So sánh định lượng 2 cách ($2,500)** | p.121 | ❌ thiếu | **s10 callout ✓** |
| Glossary 16 term | — | rải rác | ✓ |

**Không đưa vào (có lý do):** Turbo Crafters/Black & Howell 2-base example (p.117-118) — cùng concept "applied vs actual" đã có ở s9 qua PearCo/Tiger, chỉ khác allocation base là dollars (đã dạy ở Ch.2 job-order-costing s6); không phải kiến thức mới. Appendix 3A (Excel) — thuần kỹ thuật bảng tính, đã có callout ghi chú ở s10.
