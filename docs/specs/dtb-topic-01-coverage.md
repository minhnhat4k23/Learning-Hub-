# Lớp B — Ma trận phủ: DTB Topic 01 (Introduction to CBIS)

> Bằng chứng "KHÔNG sót kiến thức" (workflow §6 Lớp B). Nguồn: slide `Topic 01 Introduction to CBIS.pdf` (41 trang) — môn DTB không có sách, slide là nguồn chuẩn duy nhất + `quiz-digi.pdf` cho quiz. Đối chiếu với object `topic01` trong `content/dtb.ts` (14 sections s1–s14, 11 quiz).
> Chạy ngày 2026-06-27. Cập nhật sau bổ sung (Codex đổ s7b + mở rộng s13): 2026-06-27.

## Ma trận phủ

| # | Mục slide (trang) | Section/khối trong content | Trạng thái |
|---|---|---|---|
| 1 | Why study computers/IT/IS — vital, expand/compete, achieve goals (s3) | s1 + knowledgeMap `why-*` | ✅ Có |
| 2 | What we learn — informed consumer, collaborate, wise decisions (s4) | s1 callout "Informed consumer" | ✅ Có |
| 3 | What is business/organization — conversion mechanism input→output (s5) | s2 | ✅ Có |
| 4 | Main goals — profit (sustainable/growing), competitive advantage (s6) | s2 "Goals: profit + advantage" | ✅ Có |
| 5 | 7 resources — Money/Manpower/Materials/Machinery/Managerial/Time/Knowledge (s7) | s2 "Inputs: 7 resources" | ✅ Có |
| 6 | 7 management tasks — Planning…Reporting (s8) | s3 (đủ 7 node) | ✅ Có |
| 7 | Role of IT/IS — efficiency, decisions, collaboration, strategy (s9) | s4 "3 uses" + strategy | ✅ Có |
| 8 | IS three critical pieces — Technology/People/Organizations (s10) | s5 | ✅ Có |
| 9 | Five Components of IS (s11–12) | s6 | ✅ Có |
| 10 | Most important component — YOU, mind/thinking (s13) | s6 People keyTerm + bigIdea "(YOU)" | ✅ Có |
| 11 | High-tech vs Low-tech IS (s14) | s7 comparison | ✅ Có |
| 12 | **Understanding NEW IS — dùng 5-component framework + 6 focus questions** (Hardware needs / Programs to license / Databases / Procedures / Network-System admin / Org impact) (s15) | **s7b** comparison "5 focus questions" + LO mới + knowledgeMap `comp-newis` | ✅ Có (bổ sung) |
| 13 | Information ladder — data→information→intelligence→knowledge→wisdom (s16) | s8 knowledgeMap "Information ladder" | ✅ Có |
| 14 | What is Information — Fig 1-4 "one user's information is another's data" (s17) | s8 "Relative to user" | ✅ Có |
| 15 | Characteristics of good info — Accurate/Timely/Relevant/Just sufficient/Worth cost (s18) | s9 (đủ 5) | ✅ Có |
| 16 | IT vs IS — IT = products/methods/inventions/standards; IT drives IS (s20–21) | s10 | ✅ Có |
| 17 | Development of IS — 5 eras (Mainframe→Cloud), Laudon (s22) | s11 "5 eras" | ✅ Có |
| 18 | Moore's Law — transistors double 18–24 tháng, price/perf ratio, enabled tech (s24–25) | s11 | ✅ Có |
| 19 | Technological issues today — 8 mục (Size…Rapid decline cost/perf) (s26) | s12 | ✅ Có |
| 20 | **Carr "Does IT matter?" (2005) — Yes args: ubiquitous, dominant capex, prerequisite survival, boost productivity; nhưng superior profitability?** (s27) | s13 flow "Carr's argument" node `carr-ubi`→`carr-mgmt` | ✅ Có (bổ sung) |
| 21 | Proprietary vs Infrastructural technology (s28) | s13 comparison | ✅ Có |
| 22 | **Carr "The future" — IT modular→innovate; ideal company sceptical (cheap/OTC/open-source/outsource); basic good management = future advantage** (s29) | s13 callout "Bẫy Carr & the future" | ✅ Có (bổ sung) |
| 23 | Computer — electronic device, instructions in memory; Input→Processing→Output (s31) | s14 flow "processing model" | ✅ Có |
| 24 | Computers & mobile devices — laptop/tablet/desktop, server/terminal, smartphone/wearable, game, embedded (s32–34) | s14 | ✅ Có |
| 25 | Terminal (limited power, POS/ATM), Supercomputer, Cloud computing (s34–36) | s14 keyTerms Terminal, Cloud computing | ✅ Có |
| 26 | Technology users — 5 nhóm (Home/SOHO/Mobile/Power/Enterprise), table 1-4 (s37–38) | s14 "5 user categories" + keyTerm Mobile user | ✅ Có |

## Kết luận (sau bổ sung)

- **26/26 mục Có**, không lệch số liệu (Moore's Law 18–24 tháng, 5 eras, 7 resources, 7 tasks, 5 components đều khớp slide).
- 2 gap trước đã đóng:
  - **GAP A (slide 15):** thêm section **s7b** "Using the framework to understand a new IS" (bảng 6 focus questions) + LO mới + node knowledgeMap `comp-newis`.
  - **GAP B (slide 27 + 29):** mở rộng **s13** — flow "Carr's argument (2005)" (ubiquitous → infrastructural → no lasting advantage → advantage from management) + callout "The future theo Carr" (modular/sceptical/outsource/good management).

## Cổng chốt
- **Lớp A PASS:** `tsc --noEmit` sạch; render Playwright 375/768/1440 → 0 pageerror, 0 console error, không horizontal scroll; desktop 60 node / 51 edge / 4 table.
- **Lớp B PASS:** ma trận phủ không còn mục Thiếu (26/26).
- ✅ **Đạt cả 2 lớp → đủ điều kiện `status: "ready"`.**
