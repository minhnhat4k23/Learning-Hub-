# Spec: DTB Topic 06 — Database Management

> **Loại:** Soạn mới một topic hoàn chỉnh (rich teaching mode), thay placeholder `topic06`.
> **File cần sửa:** `content/dtb.ts`.
> **Nguồn:** slide `Topic 06 Database Mgt.pdf`. KHÔNG thêm khái niệm ngoài slide.
> **Tính chất:** concept-heavy, mạch "vấn đề (file rời rạc) → giải pháp (database)". Block mix flow + comparison + callout. knowledgeMap 3 nhánh.
> **Quy ước:** diễn giải tiếng Việt, term tiếng Anh; quiz stem/options tiếng Anh, rationale/takeaway tiếng Việt.
> **Verify:** `npx tsc --noEmit` pass; render-check (Codex). KHÔNG commit.

---

## 0. Wiring (làm trước)

1. Tạo `const topic06: Chapter = { ... }` (sau `topic05`, trước `createPlaceholderTopic`).
2. Thêm vào assembly: `if (order === 6) return topic06;` (sau dòng order===5).

Helper có sẵn: `flowBlock`, `calloutBlock`, `comparisonBlock`, `formulaBlock` (không cần formula ở topic này). **Renderer contract:** comparison `columns.length === cells.length + 1`; flow edges trỏ node có thật; node id dùng `_`.

---

## 1. Khung Chapter

```ts
const topic06: Chapter = {
  slug: "topic-06",
  order: 6,
  title: "Topic 06 — Database Management",
  bigIdea:
    "Dữ liệu rải rác trong các file riêng lẻ — mỗi chương trình một file — là cơn ác mộng của doanh nghiệp: cùng một thông tin bị lặp ở nhiều nơi (data redundancy) rồi mâu thuẫn nhau (inconsistency), không ai biết con số nào đúng. Database ra đời để giải đúng bài toán đó: tổ chức dữ liệu thành các bảng có quan hệ (relational model — primary key định danh, foreign key nối các bảng) kèm metadata mô tả cấu trúc, được một DBMS quản lý và truy cập qua forms / reports / queries / SQL. Kết quả: dữ liệu dùng chung, nhất quán, không trùng lặp — và chỉ khi đó 'data' mới trở thành 'information' đáng tin để ra quyết định. Là future manager, bạn không tự code database, nhưng hiểu cấu trúc này để đặt đúng yêu cầu với IT team và đọc được báo cáo sinh ra từ đâu.",
  learningObjectives: [
    "Phân biệt data / information / database; nêu vai trò biến data → information.",
    "Mô tả hierarchy of data: bit → byte → field (attribute) → record → file/table → database.",
    "Giải thích problems in the file environment: data redundancy & inconsistency, và vì sao cần database.",
    "Nêu các lợi ích của database approach (redundancy reduced, inconsistency avoided, shared data, security…).",
    "Giải thích một database gồm tables + relationships + metadata (không chỉ là nhóm bảng).",
    "Phân biệt primary key vs foreign key và cách relational model biểu diễn quan hệ giữa các bảng.",
    "Định nghĩa metadata và vai trò của nó.",
    "Mô tả database applications: forms, reports, query forms.",
    "Giải thích DBMS và các tool (query language, query by example, form, report writer); vai trò của SQL.",
    "Phân biệt personal vs enterprise DBMS; nhận diện các DBMS products (DB2, Access, SQL Server, Oracle, MySQL).",
    "Nêu trách nhiệm của database administration (DBA).",
  ],
  knowledgeMap: { /* mục 2 */ },
  sections: [ /* mục 3 — s1..s12 */ ],
  questions: [ /* mục 4 — q01..q08 */ ],
  status: "ready",
  source: "Digital Technology in Business — Topic 06 Database Mgt.pdf.",
};
```

---

## 2. knowledgeMap (root → 3 nhóm → leaf)

```ts
knowledgeMap: {
  engine: "flow",
  layout: "tree",
  collapsible: true,
  caption:
    "Nền tảng dữ liệu → vì sao cần database (file problem) → cấu trúc & vận hành. Bấm node để mở chi tiết và nhảy tới phần học.",
  nodes: [
    { id: "db", label: "Database Management", group: "concept", sectionId: "s1",
      detail: "File rời rạc gây trùng lặp/mâu thuẫn; database tổ chức dữ liệu có quan hệ để biến data → information." },

    { id: "g_found", label: "A. Nền tảng dữ liệu", group: "concept", parent: "db", sectionId: "s1",
      detail: "Data/Information/Database; hierarchy of data." },
    { id: "g_why", label: "B. Vì sao cần database", group: "concept", parent: "db", sectionId: "s3",
      detail: "File environment problems + lợi ích database approach." },
    { id: "g_struct", label: "C. Cấu trúc & vận hành", group: "concept", parent: "db", sectionId: "s5",
      detail: "Relational model, keys, metadata, DBMS, applications, admin." },

    { id: "t_dii", label: "Data / Info / Database", group: "term", parent: "g_found", sectionId: "s1",
      detail: "Data thô → information có ý nghĩa; database tổ chức để dùng." },
    { id: "t_hier", label: "Hierarchy of data", group: "term", parent: "g_found", sectionId: "s2",
      detail: "bit→byte→field→record→file→database." },

    { id: "t_fileprob", label: "File environment problems", group: "term", parent: "g_why", sectionId: "s3",
      detail: "Redundancy & inconsistency." },
    { id: "t_adv", label: "Advantages of database", group: "term", parent: "g_why", sectionId: "s4",
      detail: "Redundancy↓, inconsistency tránh, shared, security." },

    { id: "t_whatdb", label: "What is a database", group: "term", parent: "g_struct", sectionId: "s5",
      detail: "Tables + relationships + metadata." },
    { id: "t_keys", label: "Primary & Foreign key", group: "term", parent: "g_struct", sectionId: "s6",
      detail: "PK định danh; FK nối bảng (relational)." },
    { id: "t_meta", label: "Metadata", group: "term", parent: "g_struct", sectionId: "s7",
      detail: "Dữ liệu mô tả dữ liệu." },
    { id: "t_app", label: "Database applications", group: "term", parent: "g_struct", sectionId: "s8",
      detail: "Forms, reports, query forms." },
    { id: "t_dbms", label: "DBMS & SQL", group: "term", parent: "g_struct", sectionId: "s9",
      detail: "Query language, QBE, form, report writer; SQL." },
    { id: "t_type", label: "Personal vs Enterprise", group: "term", parent: "g_struct", sectionId: "s10",
      detail: "Access vs DB2/SQL Server/Oracle." },
    { id: "t_prod", label: "DBMS products", group: "term", parent: "g_struct", sectionId: "s11",
      detail: "DB2, Access, SQL Server, Oracle, MySQL." },
    { id: "t_dba", label: "Database administration", group: "term", parent: "g_struct", sectionId: "s12",
      detail: "Quản lý, bảo vệ, tối đa availability." },
  ],
  edges: [
    { from: "db", to: "g_found" }, { from: "db", to: "g_why" }, { from: "db", to: "g_struct" },
    { from: "g_found", to: "t_dii" }, { from: "g_found", to: "t_hier" },
    { from: "g_why", to: "t_fileprob" }, { from: "g_why", to: "t_adv" },
    { from: "g_struct", to: "t_whatdb" }, { from: "g_struct", to: "t_keys" }, { from: "g_struct", to: "t_meta" },
    { from: "g_struct", to: "t_app" }, { from: "g_struct", to: "t_dbms" }, { from: "g_struct", to: "t_type" },
    { from: "g_struct", to: "t_prod" }, { from: "g_struct", to: "t_dba" },
  ],
},
```

---

## 3. Sections (s1 → s12)

### A — NỀN TẢNG DỮ LIỆU

#### s1 — Data / Information / Database
- **comparisonBlock** "3 khái niệm nền" — columns `["Khái niệm", "Định nghĩa", "Đặc điểm / ví dụ"]`; rows:
  - "Data": `["Tập các mục CHƯA xử lý", "Text, numbers, images, audio, video"]`
  - "Information": `["Data đã xử lý", "Organized, meaningful, useful — dùng để ra quyết định"]`
  - "Database": `["Tập dữ liệu được tổ chức", "Cho phép access, retrieve, use dữ liệu đó"]`
- **calloutBlock** `"key"` "Data → Information": "Mục tiêu cuối là biến data thô thành information đáng tin. Database là cách tổ chức để bước biến đổi đó nhanh, nhất quán, chia sẻ được."
- **keyTerms:** data, information, database.

#### s2 — Hierarchy of data
- **flowBlock** `s2` "Hierarchy of data (nhỏ → lớn)" layout `horizontal`, nodes (group `concept`):
  - `s2_bit` "Bit" — "Đơn vị nhỏ nhất: 0/1."
  - `s2_byte` "Byte (character)" — "8 bit = 1 ký tự (vd 'A', 's', '6')."
  - `s2_field` "Field (attribute / column)" — "Nhóm byte mang một thuộc tính (vd LastName)."
  - `s2_record` "Record (row)" — "Nhóm field mô tả một entity (vd một employee)."
  - `s2_file` "File / Table" — "Nhóm record cùng loại (vd Employee Table)."
  - `s2_db` "Database" — "Nhiều file/bảng + quan hệ + metadata."
  - edges nối liên tiếp `s2_bit→…→s2_db`, label "8 bit", "nhóm byte", "nhóm field", "nhóm record", "+ quan hệ". caption: "Từ bit nhỏ nhất tới database lớn nhất — mỗi tầng gộp tầng dưới."
- **keyTerms:** bit, byte, field (attribute), record, file, key field, entity.

### B — VÌ SAO CẦN DATABASE

#### s3 — Problems in the file environment (NEO LENS)
- **flowBlock** `s3` "File rời rạc → trùng lặp & mâu thuẫn" layout `horizontal`, nodes:
  - `s3_files` "File riêng cho từng chương trình" — "Employees File, Customers File, Orders File — mỗi program quản một file riêng."
  - `s3_redundant` "Data redundancy" — "Cùng một thông tin (vd company name, employee name) bị lặp ở nhiều file."
  - `s3_incons` "Inconsistency" — "Sửa ở file này, quên file kia → các bản sao mâu thuẫn, không biết con số nào đúng."
  - `s3_dbms` "DBMS gom về 1 database" — "Tập trung dữ liệu, mỗi dữ kiện lưu một chỗ → các program dùng chung."
  - edges `s3_files→s3_redundant→s3_incons→s3_dbms`, label "lặp", "mâu thuẫn", "giải pháp". caption: "Đây là bài toán gốc database sinh ra để giải."
- **keyTerms:** file environment, data redundancy, data inconsistency.

#### s4 — Advantages of the database approach
- **calloutBlock** `"key"` "9 lợi ích của database (slide 'Importance of the Database')": "Compactness; Speed; Less drudgery (đỡ việc thủ công nhàm); Currency (dữ liệu cập nhật); Redundancy reduced; Inconsistency avoided; Shared data; Standardization; Security."
- **keyTerms:** shared data, standardization.

### C — CẤU TRÚC & VẬN HÀNH

#### s5 — What is a database
- **calloutBlock** `"key"` "Database ≠ chỉ là nhóm bảng": "Một database gồm: (1) tables/files, (2) relationships giữa các hàng trong bảng, và (3) metadata mô tả cấu trúc database. Thiếu quan hệ + metadata thì chỉ là tập bảng rời."
- **keyTerms:** relationship, metadata.

#### s6 — Relational model: Primary key & Foreign key
- **comparisonBlock** "Primary key vs Foreign key" — columns `["Tiêu chí", "Primary key", "Foreign key"]`; rows:
  - "Vai trò": `["Định danh DUY NHẤT một hàng trong bảng", "Tham chiếu tới primary key của bảng khác để nối quan hệ"]`
  - "Vị trí": `["Trong chính bảng đó", "Là cột 'common field' xuất hiện ở bảng liên quan"]`
  - "Ví dụ": `["EmployeeID trong Employees Table", "EmployeeID trong Orders Table (trỏ về Employees)"]`
- **flowBlock** `s6` "PK nối FK giữa hai bảng" layout `horizontal`, nodes:
  - `s6_pk` "Employees.EmployeeID (PK)" — "Primary key định danh mỗi nhân viên."
  - `s6_fk` "Orders.EmployeeID (FK)" — "Foreign key trong bảng Orders trỏ về Employees."
  - edges `s6_pk→s6_fk` label "common field". caption: "Relational database mang dữ liệu dạng bảng và dùng foreign key để biểu diễn quan hệ."
- **keyTerms:** relational database, primary key, foreign key, common field.

#### s7 — Metadata
- **calloutBlock** `"key"` "Metadata = data mô tả data": "Metadata làm database dễ dùng và LUÔN là một phần của database. Ví dụ: Field Name, Data Type, Description của mỗi cột (vd data type của CustomerID, OrderDate)."
- **keyTerms:** metadata, data type.

#### s8 — Database applications (forms, reports, queries)
- **comparisonBlock** "3 thành phần của database application" — columns `["Thành phần", "Công dụng"]`; rows:
  - "Forms (data entry forms)": `["Đọc, chèn, sửa, xoá dữ liệu (read/insert/modify/delete)"]`
  - "Reports": `["Trình bày dữ liệu trong ngữ cảnh có cấu trúc (vd Student Report)"]`
  - "Query forms": `["Giúp người dùng nhanh chóng tìm câu trả lời cho câu hỏi"]`
- **calloutBlock** `"note"` "Vì sao cần application": "Bản thân database chưa hữu ích — phải có forms/reports/queries/application programs để biến dữ liệu thành information cho người dùng."
- **keyTerms:** form, report, query form, database application.

#### s9 — DBMS & các tool (query language, QBE) + SQL
- **calloutBlock** `"key"` "DBMS cung cấp tool để truy xuất & bảo trì dữ liệu": "Query language; Query by example (QBE — giao diện đồ hoạ hỗ trợ tìm dữ liệu); Form; Report writer."
- **calloutBlock** `"key"` "Query & SQL": "Query = yêu cầu dữ liệu cụ thể từ database. Query language = các câu lệnh kiểu tiếng Anh để chỉ định dữ liệu cần display/print/store/update/delete. SQL (Structured Query Language) là query language phổ biến để quản lý, cập nhật, truy xuất dữ liệu."
- **keyTerms:** DBMS, query, query language, query by example (QBE), SQL, report writer.

#### s10 — Personal vs Enterprise DBMS
- **comparisonBlock** "Personal vs Enterprise DBMS" — columns `["Tiêu chí", "Personal DBMS", "Enterprise DBMS"]`; rows:
  - "Quy mô ứng dụng": `["Nhỏ, đơn giản; cá nhân/nhóm nhỏ", "Lớn, nhiều ứng dụng cho tổ chức/workgroup"]`
  - "Số user": `["< 100 user", "Hàng nghìn user"]`
  - "Vận hành": `["Đơn giản", "24/7"]`
  - "Sản phẩm tiêu biểu": `["Microsoft Access (vừa là DBMS vừa là công cụ phát triển app)", "DB2, SQL Server, Oracle"]`
- **keyTerms:** personal DBMS, enterprise DBMS.

#### s11 — DBMS products
- **comparisonBlock** "Một số DBMS phổ biến" — columns `["Sản phẩm", "Nhà cung cấp / đặc điểm"]`; rows:
  - "DB2": `["IBM"]`
  - "Access": `["Microsoft — cho personal computer"]`
  - "SQL Server": `["Microsoft — cho hệ thống lớn"]`
  - "Oracle": `["Oracle Corporation"]`
  - "MySQL": `["Open-source, license-free"]`
- **calloutBlock** `"trap"` "DBMS ≠ database": "DBMS là PHẦN MỀM dùng để tạo/xử lý/quản trị database; database là tập bảng + quan hệ + metadata. Hai khái niệm khác nhau, đừng lẫn."
- **keyTerms:** DBMS product, MySQL, open-source.

#### s12 — Database administration (DBA)
- **calloutBlock** `"key"` "Database administration": "Database là tài nguyên quan trọng; càng chạm nhiều chức năng business thì lợi ích lẫn rủi ro càng tăng. DBA quản lý việc phát triển, vận hành, bảo trì database; nhiệm vụ chính là BẢO VỆ database và TỐI ĐA availability cho người dùng được phép (authorized use)."
- **keyTerms:** database administration, DBA, authorized use.

---

## 4. Quiz (8 câu — stem/options tiếng Anh, rationale/takeaway tiếng Việt)

Mỗi câu 4 option + rationale cho cả đúng & sai (bẫy có chủ đích). Gợi ý:

1. **q01** (basic) — *Data vs Information.* Đúng: information = data đã xử lý (organized/meaningful/useful); data = mục chưa xử lý. Bẫy: đảo hai khái niệm.
2. **q02** (basic) — *Hierarchy of data order.* Đúng: bit < byte < field < record < file < database. Bẫy: đảo field/record; coi byte > field.
3. **q03** (intermediate) — *Problem chính của file environment.* Đúng: data redundancy & inconsistency. Bẫy: cho rằng file environment nhanh hơn database; thiếu security là vấn đề duy nhất.
4. **q04** (intermediate) — *A database includes…* Đúng: tables + relationships + metadata. Bẫy: chỉ là nhóm bảng; chỉ là phần mềm.
5. **q05** (intermediate) — *Primary key vs Foreign key.* Đúng: PK định danh duy nhất một hàng; PK của bảng này làm FK ở bảng khác để nối quan hệ. Bẫy: đảo vai trò PK/FK.
6. **q06** (basic) — *Metadata là gì?* Đúng: data mô tả data (field name, data type, description). Bẫy: nhầm metadata là dữ liệu chính/backup.
7. **q07** (intermediate) — *SQL / query language.* Đúng: query = yêu cầu dữ liệu cụ thể; SQL là query language để truy xuất/quản lý dữ liệu. Bẫy: SQL là một DBMS; SQL chỉ để vẽ form.
8. **q08** (intermediate) — *DBMS ≠ database / Personal vs Enterprise.* Đúng: DBMS là phần mềm quản trị; Access = personal, Oracle/DB2/SQL Server = enterprise. Bẫy: coi DBMS và database là một; Access cho hàng nghìn user.

---

## 5. Verify (Codex chạy)

```bash
npx tsc --noEmit
```
- Pass 0 error.
- comparison: mọi row `cells.length === columns.length - 1`.
- flow: edges trỏ node có thật; node id dùng `_`.
- Render-check `/digital-technology-business/topic-06`: knowledgeMap + 12 section + 8 quiz hiển thị. Báo Chaliyah. **KHÔNG commit.**
