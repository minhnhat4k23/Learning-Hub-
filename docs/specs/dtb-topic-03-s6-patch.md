# Spec: DTB Topic 03 — patch s6 (Types of websites → bảng 5 nhóm)

> **Loại:** Surgical patch một section. KHÔNG đụng section khác, không đổi quiz/knowledgeMap.
> **File:** `content/dtb.ts`, section `id: "s6"` trong `topic03` (khoảng line 4830).
> **Lý do:** danh sách 22 loại website hiện nằm chung 1 callout dạng liệt kê trần — chưa trực quan. Đổi sang comparisonBlock 5 nhóm cho đồng bộ rich teaching mode; tách riêng phần "cách tìm thông tin".
> **Verify:** `npx tsc --noEmit` pass; comparison cells = columns − 1.

---

## Trạng thái hiện tại của s6 (giữ / sửa)

`blocks` hiện có: `flowBlock` (web publishing 5 bước) + `calloutBlock("note", "Tìm kiếm & các loại website", …)`.

- **GIỮ nguyên** `flowBlock` web-publishing.
- **THAY** callout "Tìm kiếm & các loại website" bằng **2 block**: (1) callout gọn chỉ về search; (2) comparisonBlock 5 nhóm website.

---

## Block thay thế

### Block 1 — callout chỉ còn phần search (thu gọn)

```ts
calloutBlock(
  "note",
  "Cách tìm thông tin: search engine vs subject directory",
  "Search engine: phần mềm tìm website/ảnh/video/tin/bản đồ theo truy vấn. " +
    "Subject directory: phân loại webpage theo nhóm chủ đề (sports, shopping…). " +
    "Search operators giúp tinh chỉnh truy vấn để ra kết quả sát hơn.",
),
```

### Block 2 — comparisonBlock: 22 loại website gom 5 nhóm

> `columns.length` = 3 → mỗi row có **2 cells**.

```ts
comparisonBlock(
  "Các loại website (22 loại, gom 5 nhóm)",
  ["Nhóm", "Các loại website tiêu biểu", "Mục đích chính"],
  [
    {
      label: "Tìm & tổ chức thông tin",
      cells: [
        "Search engine, subject directory, portal, content aggregation, bookmarking",
        "Tìm, gom và tổ chức thông tin để truy cập nhanh",
      ],
    },
    {
      label: "Mạng xã hội & cộng tác",
      cells: [
        "Online social network, media sharing, wiki & collaboration, blog",
        "Kết nối, chia sẻ và cùng tạo nội dung",
      ],
    },
    {
      label: "Tin tức & tri thức",
      cells: [
        "Informational/research, news & mass media, educational, science, health & fitness",
        "Cung cấp thông tin, kiến thức, tin tức",
      ],
    },
    {
      label: "Kinh doanh & giao dịch",
      cells: [
        "Business/gov/org, e-commerce, retail & auctions, banking & finance, careers & employment",
        "Phục vụ hoạt động kinh doanh và giao dịch",
      ],
    },
    {
      label: "Tiện ích & giải trí",
      cells: [
        "Entertainment, travel & tourism, mapping, website creation & management",
        "Giải trí và hỗ trợ tiện ích đời sống",
      ],
    },
  ],
),
```

Thứ tự block sau patch: `flowBlock (web publishing)` → `calloutBlock (search)` → `comparisonBlock (5 nhóm)`.

`keyTerms` của s6 giữ nguyên (search engine, subject directory, search operator, online social network, e-commerce website, portal).

---

## Ghi chú nguồn

Slide Topic 03 (trang 30–33) chỉ **liệt kê tên** 22 loại website, không định nghĩa từng loại. Cách gom 5 nhóm + cột "Mục đích" là diễn giải theo nghĩa chuẩn của term để dạy trực quan — không thêm khái niệm ngoài slide.

---

## Verify (Codex)

```bash
npx tsc --noEmit
```
- Pass 0 error.
- comparison: mỗi row `cells.length === 2` (columns = 3).
- Render-check `/digital-technology-business/topic-03` mục s6: thấy bảng 5 nhóm thay cho danh sách trần. Báo Chaliyah. KHÔNG commit.
