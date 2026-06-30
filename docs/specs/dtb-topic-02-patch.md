# Spec: DTB Topic 02 — Content Patch (audit fixes)

> **Loại:** Content patch — sửa lỗi accuracy + bổ sung nội dung còn thiếu theo slide.  
> **File cần sửa:** `content/dtb.ts` — chỉ trong object `topic02` (line ~1879 đến hết file).  
> **Executor:** đọc spec này, tìm đoạn code bằng heading/id tương ứng, patch surgical. Chạy `npx tsc --noEmit` sau khi xong.  
> **Nguồn verify:** `Topic 02-1 Hardware Software.pdf` + `Topic 02-2 Hardware Software.pdf` trong kho slide DTB.

---

## PATCH 1 — s9 flowBlock: sửa chiều mũi tên (CRITICAL — sai thực tế)

### Vấn đề
Section `s9` (heading "Computer language: ML → Assembly → HLL") có flowBlock với edges:
```ts
{ from: "s9_ml", to: "s9_asm", label: "assembler" },
{ from: "s9_asm", to: "s9_hll", label: "compiler/interp." },
```
Caption: "Chiều mũi tên = trừu tượng hoá tăng dần; cạnh ghi công cụ dịch."

Lỗi: label "assembler" trên mũi tên ML→Assembly ngụ ý assembler chuyển Machine Language thành Assembly — **sai ngược chiều**. Assembler thực tế dịch Assembly **xuống** Machine Language. Tương tự compiler dịch HLL **xuống**, không phải lên.

### Fix

**a) Đổi chiều edges:**

```ts
// OLD:
{ from: "s9_ml", to: "s9_asm", label: "assembler" },
{ from: "s9_asm", to: "s9_hll", label: "compiler/interp." },

// NEW:
{ from: "s9_oo", to: "s9_hll", label: "compiled →" },
{ from: "s9_hll", to: "s9_asm", label: "compiled →" },
{ from: "s9_asm", to: "s9_ml", label: "assembled →" },
```

**b) Thêm node s9_oo** vào mảng nodes (thêm TRƯỚC s9_ml):

```ts
{
  id: "s9_oo",
  label: "OO / Visual Languages",
  group: "concept",
  detail:
    "Tầng cao nhất: Object-Oriented (Java, C++, Python) và Visual (Visual Basic, Scratch); thêm khái niệm object, class, inheritance. Compiler dịch xuống Machine code.",
},
```

**c) Cập nhật caption:**

```ts
// OLD:
"Chiều mũi tên = trừu tượng hoá tăng dần; cạnh ghi công cụ dịch.",

// NEW:
"Mũi tên = hướng biên dịch (OO/HLL → Assembly → Machine Language). Abstraction tăng từ phải sang trái — ngôn ngữ càng cao cấp càng gần ngôn ngữ người.",
```

**d) Cập nhật heading section s9:**

```ts
// OLD:
heading: "Computer language: ML → Assembly → HLL",

// NEW:
heading: "Computer language: 4 tầng ngôn ngữ & biên dịch",
```

---

## PATCH 2 — s9 keyTerms: thêm compiler, assembler, OO language

Thêm vào cuối mảng `keyTerms` của section s9:

```ts
{
  term: "compiler",
  definition:
    "Chương trình dịch toàn bộ source code (HLL) → object code một lần trước khi chạy; output là file thực thi độc lập.",
},
{
  term: "assembler",
  definition:
    "Chương trình dịch Assembly language → Machine language; output phụ thuộc platform.",
},
{
  term: "OO language",
  definition:
    "Object-Oriented Language (Java, Python, C++) — tổ chức code xung quanh objects/classes; tái sử dụng cao hơn HLL truyền thống.",
},
```

---

## PATCH 3 — s12: thêm "4 ways" callout + F/OSS callout

Section s12 (heading "Programs & apps + phân phối software") hiện có 1 flowBlock + 1 callout "'Free' không miễn phí hoàn toàn". Thêm **trước** callout đó 2 block mới:

### 3a. Callout "4 cách để doanh nghiệp có software":

```ts
calloutBlock(
  "note",
  "4 cách để doanh nghiệp có software",
  "1. Tự viết (write in-house): kiểm soát tối đa, chi phí cao + thời gian dài. " +
  "2. Thuê người viết (hire/outsource): linh hoạt hơn, vẫn tốn kém. " +
  "3. Mua & tuỳ chỉnh (buy + tailor): mua phần mềm sẵn rồi chỉnh theo quy trình doanh nghiệp (ERP, CRM). " +
  "4. Mua dùng ngay (off-the-shelf): nhanh, rẻ nhất, nhưng ít linh hoạt. " +
  "Business manager phải cân nhắc cost–benefit–flexibility của từng lựa chọn trước khi ký hợp đồng.",
),
```

### 3b. Callout F/OSS movement:

```ts
calloutBlock(
  "insight",
  "F/OSS movement: open source thay đổi chi phí IT của doanh nghiệp",
  "Phong trào Free/Open Source Software (F/OSS) — Internet thúc đẩy cộng đồng toàn cầu cùng phát triển phần mềm. " +
  "Tác động business: giảm chi phí software đáng kể. Apache chạy ~70% web servers toàn cầu (miễn phí); " +
  "Linux là server OS phổ biến nhất; MySQL là database hàng đầu cho web apps; Firefox cạnh tranh với IE. " +
  "Doanh nghiệp biết tận dụng F/OSS tiết kiệm license cost và có source code để tuỳ chỉnh theo nhu cầu.",
),
```

---

## PATCH 4 — s13: thêm cột "Personal Interest" + workflow callout

### 4a. Sửa heading section s13:

```ts
// OLD:
heading: "Loại ứng dụng: productivity / graphics / communications",

// NEW:
heading: "Loại ứng dụng: 4 nhóm chính",
```

### 4b. Sửa comparisonBlock — thêm cột "Personal Interest":

```ts
// OLD columns:
["", "Productivity", "Graphics & Media", "Communications"],

// NEW columns (Personal Interest thêm vào vị trí 3, trước Communications):
["", "Productivity", "Graphics & Media", "Personal Interest", "Communications"],
```

Cập nhật **từng row** — thêm cell thứ 3 (Personal Interest) vào mỗi row:

Row "Ứng dụng tiêu biểu":
```ts
// Thêm cell giữa Graphics & Media và Communications:
"Lifestyle, Medical/health, Education, Entertainment, Convenience — ví dụ: app theo dõi sức khoẻ, tra cứu thuốc, học ngôn ngữ, navigation, recipe.",
```

Row "Mục đích":
```ts
// Thêm cell giữa Graphics & Media và Communications:
"Hỗ trợ sở thích và nhu cầu cá nhân trong cuộc sống hằng ngày.",
```

### 4c. Thêm keyTerm mới vào s13:

```ts
{
  term: "personal interest app",
  definition:
    "Ứng dụng phục vụ sở thích/nhu cầu cá nhân: lifestyle, medical, education, entertainment, convenience (navigation, recipe...).",
},
```

### 4d. Thêm callout workflow productivity (sau comparisonBlock):

```ts
calloutBlock(
  "note",
  "Workflow chuẩn của productivity apps",
  "Mọi productivity app đều hỗ trợ cùng một quy trình: Create → Edit → Format → Save → Distribute. " +
  "Hiểu workflow này giúp bạn chuyển từ app này sang app khác nhanh hơn — cùng concept, khác giao diện.",
),
```

---

## PATCH 5 — s10: thêm Sleep/Hibernate callout + Driver/PnP keyTerms

Trong section s10 (heading liên quan đến OS functions), thêm callout mới và keyTerms bổ sung.

### 5a. Thêm callout Sleep vs Hibernate (sau phần OS functions hiện tại):

```ts
calloutBlock(
  "note",
  "Sleep vs Hibernate — không phải như nhau",
  "Sleep: lưu trạng thái vào RAM, vẫn dùng điện mức thấp — resume rất nhanh (vài giây). " +
  "Hibernate: lưu trạng thái vào HDD/SSD rồi tắt nguồn hoàn toàn — an toàn khi mất điện, resume chậm hơn. " +
  "Business context: dùng Sleep khi nghỉ ngắn; Hibernate khi di chuyển xa hoặc pin yếu.",
),
```

### 5b. Thêm keyTerms vào s10:

```ts
{
  term: "device driver",
  definition:
    "Chương trình nhỏ cho OS biết cách giao tiếp với thiết bị ngoại vi cụ thể (printer, webcam, GPU).",
},
{
  term: "Plug and Play (PnP)",
  definition:
    "Tính năng OS tự động nhận diện và cấu hình thiết bị mới khi cắm vào — không cần cài driver thủ công.",
},
```

---

## PATCH 6 — s3: bổ sung HDD track/sector/cylinder

Tìm section s3 (heading liên quan secondary storage / HDD). Trong keyTerm "HDD" hoặc node detail mô tả HDD, bổ sung thêm nội dung về cấu trúc:

Nếu là keyTerm definition:
```ts
// Thêm vào sau câu mô tả hiện tại:
"Cấu trúc vật lý: platter quay → track (vòng đồng tâm trên platter) → sector (cung của track, 512 bytes hoặc 4 KB) → cylinder (tập hợp track cùng vị trí trên các platter). Thời gian truy cập = seek time + rotational latency + transfer rate."
```

Nếu là flowBlock node detail, thêm tương tự vào string `detail` của HDD node.

---

## PATCH 7 — bigIdea Topic 02

```ts
// OLD (line ~1884):
"Bạn — future business manager — không chế tạo máy tính, nhưng bạn quyết định mua/nâng cấp (câu hỏi $20,000 cho phòng ban)..."

// NEW:
"Moore's Law là xu hướng technology quan trọng nhất một business manager cần nhận ra: máy tính ngày càng nhanh hơn, nhỏ hơn, rẻ hơn — đều đặn theo chu kỳ. Đây không phải trivia kỹ thuật — nó lý giải tại sao cloud storage gần như miễn phí, tại sao AI đột nhiên khả thi với mọi startup, và tại sao thiết bị bạn mua hôm nay sẽ lỗi thời trong vài năm. Hardware + Software + Data là mặt Technology của five-component IS (Topic 01). Biết chúng vận hành thế nào giúp bạn ra quyết định đầu tư IT sáng suốt: cái gì nên mua ngay, cái gì nên chờ (giá sẽ giảm), cái gì nên thuê (cloud) thay vì sở hữu."
```

---

## Verify

```bash
npx tsc --noEmit
```

Phải pass. Báo lại Chaliyah kết quả trước khi commit.

---

## Ghi chú cho đầu não

- **q06 quiz** (stem nghi trùng topic01 q4): chưa fix trong spec này — cần đối chiếu quiz-digi.pdf QUIZ 2/3 xác nhận câu gốc trước.
- Topic 01 audit: đang chờ kết quả fork agent riêng.
- OS functions "control network" + "administer security": slide có nhưng dtb.ts đã ghi nhận trong node chung. Patch 5 chưa thêm riêng — Chaliyah quyết định có cần tách thành entry riêng không.
