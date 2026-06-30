# Spec: DTB Topic 04 — MS Word (Word Processing, tài liệu dài)

> **Loại:** Soạn mới một topic hoàn chỉnh (rich teaching mode), thay placeholder `topic04`.
> **File cần sửa:** `content/dtb.ts`.
> **Nguồn:** slide `Topic 04 MS Word.pdf` (16 trang, "Part 4-1: Applications (Word Processing)"). KHÔNG thêm thao tác/khái niệm ngoài slide.
> **Tính chất:** topic *how-to* (thao tác menu) → block thiên về **flow quy trình** + **comparison** + **callout có menu path**, knowledgeMap gọn. Menu path phải đúng y slide.
> **Quy ước nội dung:** diễn giải tiếng Việt, giữ term + menu tiếng Anh; quiz stem/options tiếng Anh, rationale/takeaway tiếng Việt.
> **Verify:** `npx tsc --noEmit` pass; sau đó render-check (Codex). KHÔNG commit.

---

## 0. Wiring (làm trước)

`topic04` đang là placeholder. Thay bằng object thật:

1. Tạo `const topic04: Chapter = { ... }` (đặt sau `topic03`, trước `createPlaceholderTopic`).
2. Sửa mảng assembly:

```ts
// thêm sau dòng if (order === 3) return topic03;
if (order === 4) return topic04;
```

Helper: `flowBlock(sectionId, title, layout, nodes, edges, caption?)`, `calloutBlock(kind, title, body)`, `comparisonBlock(title, columns, rows)`.
**Renderer contract:** comparison `columns.length === cells.length + 1`; flow `edges.from/to` trỏ node có thật; node id dùng `_`.

---

## 1. Khung Chapter

```ts
const topic04: Chapter = {
  slug: "topic-04",
  order: 4,
  title: "Topic 04 — MS Word: Tài liệu dài chuyên nghiệp",
  bigIdea:
    "Một tài liệu chuyên nghiệp dài — luận văn, báo cáo, đề án — không phải 'gõ chữ' mà là 'dựng cấu trúc'. Điều phân biệt tài liệu nghiệp dư với chuyên nghiệp là cấu trúc đó có được tự động hoá hay không: section breaks cho phép định dạng khác nhau giữa các phần; multilevel headings tự sinh Table of Contents; captions tự sinh List of Figures/Tables; header/footer và số trang (i, ii, iii… hay 1, 2, 3…) khác nhau theo từng section. Khi bạn để Word quản lý cấu trúc thay vì căn tay, tài liệu vừa đẹp – nhất quán – đáng tin, vừa sửa một chỗ là cập nhật toàn bộ. Đây là practical skill dùng suốt đời — từ bài tập, khoá luận tới mọi business report sau này; vì tài liệu kém làm lu mờ cả ý tưởng tốt.",
  learningObjectives: [
    "Nhận diện các cấu phần của một tài liệu dài (cover, sections/chapters, headings, TOC, list of figures/tables, references, appendices) và vì sao cần quản lý cấu trúc.",
    "Thuật lại 8 key steps để dựng một tài liệu dài chuyên nghiệp trong Word.",
    "Dùng section breaks (Layout > Breaks) để áp layout/format khác nhau cho từng phần tài liệu.",
    "Dùng multilevel list / heading (Home > Paragraph > Multilevel list) để tạo outline nhiều cấp.",
    "Tự sinh Table of Contents từ headings (References > Table of Contents) và cập nhật khi nội dung đổi.",
    "Tạo List of Figures/Tables theo 2 bước: chèn captions → sinh danh mục.",
    "Đặt header/footer khác nhau giữa các section; chèn số trang dạng i, ii, iii… hoặc 1, 2, 3… (Insert > Page Number > Format Page Numbers).",
    "Chèn trang landscape giữa các trang portrait; tạo in-text citations, bibliography và mail merge.",
  ],
  knowledgeMap: { /* mục 2 */ },
  sections: [ /* mục 3 — s1..s11 */ ],
  questions: [ /* mục 4 — q01..q06 */ ],
  status: "ready",
  source:
    "Digital Technology in Business — Topic 04 MS Word.pdf (Part 4-1: Word Processing).",
};
```

---

## 2. knowledgeMap (gọn: root → 3 nhóm → leaf)

```ts
knowledgeMap: {
  engine: "flow",
  layout: "tree",
  collapsible: true,
  caption:
    "Tài liệu dài chuyên nghiệp = dựng cấu trúc → tự sinh danh mục → trình bày & hoàn thiện. Bấm node để mở chi tiết và nhảy tới phần học.",
  nodes: [
    { id: "doc", label: "MS Word — tài liệu dài", group: "concept", sectionId: "s1",
      detail: "Tài liệu chuyên nghiệp = cấu trúc tự động hoá, không căn tay." },

    { id: "g_struct", label: "A. Dựng cấu trúc", group: "concept", parent: "doc", sectionId: "s3",
      detail: "Outline → section breaks → multilevel headings." },
    { id: "g_auto", label: "B. Tự sinh danh mục", group: "concept", parent: "doc", sectionId: "s6",
      detail: "Table of Contents + List of Figures/Tables tự cập nhật." },
    { id: "g_finish", label: "C. Trình bày & hoàn thiện", group: "concept", parent: "doc", sectionId: "s8",
      detail: "Header/footer theo section, số trang, landscape, citations & mail merge." },

    { id: "t_outline", label: "Outline", group: "term", parent: "g_struct", sectionId: "s3",
      detail: "Phác cấu trúc trước khi viết." },
    { id: "t_section", label: "Section breaks", group: "term", parent: "g_struct", sectionId: "s4",
      detail: "Layout > Breaks; format khác nhau theo phần." },
    { id: "t_heading", label: "Multilevel headings", group: "term", parent: "g_struct", sectionId: "s5",
      detail: "Home > Paragraph > Multilevel list; outline nhiều cấp." },

    { id: "t_toc", label: "Table of Contents", group: "term", parent: "g_auto", sectionId: "s6",
      detail: "References > TOC; sinh tự động từ headings." },
    { id: "t_figlist", label: "List of Figures/Tables", group: "term", parent: "g_auto", sectionId: "s7",
      detail: "Caption trước → sinh danh mục sau." },

    { id: "t_hf", label: "Headers/Footers theo section", group: "term", parent: "g_finish", sectionId: "s8",
      detail: "Insert > Header > Edit Header." },
    { id: "t_page", label: "Page numbering", group: "term", parent: "g_finish", sectionId: "s9",
      detail: "i, ii, iii… hoặc 1, 2, 3… (Format Page Numbers)." },
    { id: "t_land", label: "Landscape trong portrait", group: "term", parent: "g_finish", sectionId: "s10",
      detail: "Chèn trang ngang giữa trang dọc." },
    { id: "t_cite", label: "Citations & Mail merge", group: "term", parent: "g_finish", sectionId: "s11",
      detail: "In-text citation, bibliography, mail merge." },
  ],
  edges: [
    { from: "doc", to: "g_struct" }, { from: "doc", to: "g_auto" }, { from: "doc", to: "g_finish" },
    { from: "g_struct", to: "t_outline" }, { from: "g_struct", to: "t_section" }, { from: "g_struct", to: "t_heading" },
    { from: "g_auto", to: "t_toc" }, { from: "g_auto", to: "t_figlist" },
    { from: "g_finish", to: "t_hf" }, { from: "g_finish", to: "t_page" },
    { from: "g_finish", to: "t_land" }, { from: "g_finish", to: "t_cite" },
  ],
},
```

---

## 3. Sections (s1 → s11)

#### s1 — Tài liệu dài là gì + neo lens
- **calloutBlock** `"key"` "Nghiệp dư gõ chữ — chuyên nghiệp dựng cấu trúc": "Một tài liệu dài (bachelor thesis, assignment report, novel) khác bài viết ngắn ở chỗ nó có cấu trúc nhiều phần. Người chuyên nghiệp không căn tay từng dòng — họ để Word tự quản cấu trúc để sửa một chỗ là cập nhật toàn bộ. *(diễn giải sư phạm; slide nêu loại tài liệu + cấu phần.)*"
- **comparisonBlock** "Cấu phần của một tài liệu dài" — columns `["Cấu phần", "Vai trò"]`; rows:
  - "Cover page": `["Trang bìa: tiêu đề, tác giả, thông tin định danh"]`
  - "Sections / chapters": `["Chia tài liệu thành các phần/chương lớn"]`
  - "Headings / subheadings": `["Tiêu đề các cấp giúp người đọc quét nhanh nội dung"]`
  - "Table of Contents": `["Mục lục — dẫn đường tới từng phần"]`
  - "List of figures / tables": `["Danh mục hình/bảng kèm số trang"]`
  - "References": `["Tài liệu tham khảo / trích dẫn"]`
  - "Appendices": `["Phụ lục — nội dung bổ trợ"]`
- **keyTerms:** long document, section, appendix.

#### s2 — 8 Key steps to remember (xương sống quy trình)
- **flowBlock** `s2` "8 bước dựng tài liệu dài" layout `horizontal`, nodes (group `concept`, detail ngắn):
  - `s2_outline` "1. Prepare outline" — "Phác cấu trúc tài liệu trước khi viết."
  - `s2_section` "2. Section breaks" — "Tạo các section để format khác nhau từng phần."
  - `s2_heading` "3. Add headings" — "Gắn multilevel headings cho các cấp tiêu đề."
  - `s2_toc` "4. Build TOC" — "Sinh Table of Contents tự động từ headings."
  - `s2_figlist` "5. List of figures/tables" — "Sinh danh mục hình/bảng từ captions."
  - `s2_hf` "6. Headers/footers theo section" — "Đặt header/footer khác nhau giữa các section."
  - `s2_page` "7. Page numbers" — "Đánh số i, ii, iii… hoặc 1, 2, 3…"
  - `s2_land` "8. Landscape page" — "Chèn trang ngang giữa các trang dọc."
  - edges nối liên tiếp `s2_outline→…→s2_land`. caption: "Slide nhấn 8 bước này (lặp lại 2 lần) — đây là quy trình chuẩn của tài liệu dài."

#### s3 — Prepare the outline
- **calloutBlock** `"note"` "Bước 1 — Prepare the outline": "Phác trước cấu trúc (các phần/chương, thứ tự, ý chính) trước khi gõ nội dung. Outline tốt là bộ khung để gắn headings và sinh TOC về sau."
- **keyTerms:** outline.

#### s4 — Section breaks
- **calloutBlock** `"key"` "Bước 2 — Section breaks (Layout > Breaks > Section Breaks)": "Sections cho phép đặt page layout & formatting RIÊNG cho từng phần tài liệu (vd phần đầu đánh số i, ii, iii; phần thân 1, 2, 3; chèn một trang landscape). Không có section break thì mọi thay đổi định dạng sẽ áp cho cả tài liệu."
- **calloutBlock** `"trap"` "Section break ≠ Page break": "Page break chỉ sang trang mới nhưng vẫn CÙNG một section (cùng header/footer, cùng kiểu số trang). Muốn format khác nhau giữa các phần thì phải dùng SECTION break."
- **keyTerms:** section break, page break.

#### s5 — Add headings (multilevel list)
- **calloutBlock** `"key"` "Bước 3 — Add headings (Home > Paragraph > Multilevel list)": "Headings làm nội dung nổi bật và giúp người đọc quét tài liệu. Multilevel list tạo outline nhiều cấp (1 → 1.1 → 1.1.1). Có thể chọn mẫu sẵn hoặc 'Define New Multilevel List…'. *Quan trọng:* TOC và đánh số mục dựa vào heading styles này."
- **keyTerms:** multilevel list, heading style.

#### s6 — Table of Contents
- **flowBlock** `s6` "TOC sinh tự động từ headings" layout `horizontal`, nodes:
  - `s6_head` "Heading styles" — "Các tiêu đề đã gắn multilevel heading ở bước 3."
  - `s6_toc` "Table of Contents" — "References > Table of Contents > Custom Table of Contents… — Word quét headings và sinh mục lục kèm số trang."
  - `s6_update` "Update field" — "Khi nội dung/số trang đổi, chỉ cần Update field để TOC cập nhật, không sửa tay."
  - edges `s6_head→s6_toc→s6_update`, label "quét", "cập nhật". caption: "TOC là sản phẩm tự động của headings — đây là lý do phải gắn heading styles đúng."
- **keyTerms:** Table of Contents (TOC).

#### s7 — List of Figures / Tables
- **flowBlock** `s7` "List of Figures/Tables — 2 bước" layout `horizontal`, nodes:
  - `s7_caption` "1. Insert captions" — "Chèn caption cho TẤT CẢ hình/bảng trong tài liệu (References > Insert Caption)."
  - `s7_list` "2. Create list" — "Sinh danh mục hình/bảng từ các caption đã chèn."
  - edges `s7_caption→s7_list` label "rồi mới". caption: "Thứ tự bắt buộc: có caption trước → mới sinh được danh mục."
- **keyTerms:** caption, List of Figures, List of Tables.

#### s8 — Headers/footers differently between sections
- **calloutBlock** `"key"` "Bước 6 — Header/footer khác nhau theo section (Insert > Header > Edit Header)": "Mỗi section có thể có header/footer riêng — vd phần đầu để 'Lời mở đầu', phần thân để tên chương. Điều kiện: đã chia section breaks ở bước 2 (và bỏ liên kết 'Link to Previous' nếu muốn khác hẳn)."
- **keyTerms:** header, footer.

#### s9 — Page numbering (i, ii, iii / 1, 2, 3)
- **calloutBlock** `"note"` "Bước 7 — Page number (Insert > Page Number > Format Page Numbers)": "Chèn số trang ở bottom/top of page; vào 'Format Page Numbers' để chọn kiểu số."
- **comparisonBlock** "Hai kiểu đánh số trang" — columns `["Kiểu số", "Thường dùng cho"]`; rows:
  - "i, ii, iii… (La Mã thường)": `["Phần đầu tài liệu: mục lục, lời mở đầu, danh mục hình/bảng *(quy ước phổ biến)*"]`
  - "1, 2, 3… (Ả Rập)": `["Phần thân chính của tài liệu *(quy ước phổ biến)*"]`
- **calloutBlock** `"trap"` "Muốn 2 kiểu số trong cùng file → cần section break": "Đổi kiểu số trang giữa phần đầu và phần thân chỉ làm được khi hai phần nằm ở hai section khác nhau."
- **keyTerms:** page number format.

#### s10 — Landscape page trong portrait
- **calloutBlock** `"note"` "Bước 8 — Chèn trang landscape giữa các trang portrait": "Khi có bảng/hình rộng, chèn một trang xoay ngang (landscape) giữa các trang dọc (portrait). Thực hiện được nhờ tách section quanh trang đó rồi đổi orientation cho riêng section ấy."
- **keyTerms:** landscape orientation, portrait orientation.

#### s11 — Citations & Mail merge
- **calloutBlock** `"key"` "Citations & Mail merge": "(1) In-text citations: chèn trích dẫn trong bài (References > Insert Citation). (2) Insert Bibliography: sinh danh mục tài liệu tham khảo từ các citation. (3) Mail merge: trộn một mẫu văn bản với danh sách dữ liệu (vd gửi cùng một thư cho nhiều người, tự điền tên/địa chỉ khác nhau)."
- **keyTerms:** in-text citation, bibliography, mail merge.

---

## 4. Quiz (6 câu — stem/options tiếng Anh, rationale/takeaway tiếng Việt)

Mỗi câu: 4 option, rationale cho cả đúng & sai (bẫy có chủ đích). Gợi ý:

1. **q01** (basic) — *Section break vs Page break.* Đúng: section break cho phép format/layout khác nhau giữa các phần; page break chỉ sang trang, cùng section. Bẫy: cho rằng page break đổi được kiểu số trang.
2. **q02** (intermediate) — *TOC sinh từ đâu?* Đúng: từ heading styles (multilevel headings). Bẫy: gõ tay mục lục; từ page breaks.
3. **q03** (intermediate) — *List of Figures cần gì trước?* Đúng: phải Insert Caption cho hình/bảng TRƯỚC, rồi mới sinh danh mục. Bẫy: sinh danh mục trước rồi gắn caption sau.
4. **q04** (intermediate) — *Muốn phần đầu đánh i,ii,iii và phần thân 1,2,3 trong cùng file.* Đúng: phải chia section break giữa hai phần. Bẫy: chỉ cần page break; đổi trực tiếp không cần section.
5. **q05** (basic) — *Different headers/footers between sections.* Đúng: cần section break (+ bỏ Link to Previous). Bẫy: header/footer luôn giống nhau toàn file.
6. **q06** (basic) — *Mail merge để làm gì?* Đúng: trộn một mẫu văn bản với danh sách dữ liệu để tạo nhiều bản cá nhân hoá. Bẫy: nhầm với bibliography / chèn ảnh hàng loạt.

---

## 5. Verify (Codex chạy)

```bash
npx tsc --noEmit
```
- Pass 0 error.
- comparison: mọi row `cells.length === columns.length - 1`.
- flow: mọi `edges.from/to` tồn tại trong nodes cùng block; node id dùng `_`.
- Render-check `/digital-technology-business/topic-04`: knowledgeMap + 11 section + 6 quiz hiển thị; menu path đúng. Báo Chaliyah. **KHÔNG commit.**
