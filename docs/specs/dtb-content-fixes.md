# Spec: DTB Content Fixes — Topic 01 & Topic 02

> **File gốc yêu cầu:** "hãy làm trước môn dtb đi, hãy check lại tất cả nội dung, lý thuyết nữa"  
> **Executor:** Codex — đọc spec này + `docs/specs/dtb-bigidea-revision.md` + `content/dtb.ts` trước khi edit.  
> **File cần sửa:** `content/dtb.ts` (duy nhất).  
> **Verify:** `npx tsc --noEmit` phải PASS; sau đó báo Chaliyah để review render.  
> **Không commit** khi chưa có lệnh của Chaliyah.

---

## 0. Thứ tự thực hiện

1. bigIdea Topic 01 (§1a)
2. bigIdea Topic 02 (§1b)
3. Topic 01 content fixes (§2)
4. Topic 02 content fixes (§3)
5. `npx tsc --noEmit` → phải PASS toàn bộ

---

## 1. bigIdea revision (SURGICAL — chỉ thay trường `bigIdea`)

Xem chi tiết old → new trong `docs/specs/dtb-bigidea-revision.md`. Tóm tắt nhanh:

### 1a. Topic 01 — line ~51

**New:**
```
'Trong digital age, mọi doanh nghiệp đang trở thành một information business — thắng hay thua phụ thuộc vào ai biến data thành quyết định tốt hơn, nhanh hơn. IS (Information System) không phải phần mềm hay máy móc — nó là sự kết hợp People + Organizations + Technology; IT chỉ là phần công cụ: "You can buy IT, but you cannot buy an IS." Hiểu framework này, bạn có được một chiếc kính để đọc bất kỳ xu hướng digital nào (AI, cloud, e-commerce…) đều xoay quanh cùng một câu hỏi: nó giúp doanh nghiệp xử lý thông tin và ra quyết định tốt hơn như thế nào?'
```

### 1b. Topic 02 — line ~1884

**New:**
```
"Moore's Law là xu hướng technology quan trọng nhất một business manager cần nhận ra: máy tính ngày càng nhanh hơn, nhỏ hơn, rẻ hơn — đều đặn theo chu kỳ. Đây không phải trivia kỹ thuật — nó lý giải tại sao cloud storage gần như miễn phí, tại sao AI đột nhiên khả thi với mọi startup, và tại sao thiết bị bạn mua hôm nay sẽ lỗi thời trong vài năm. Hardware + Software + Data là mặt Technology của five-component IS (Topic 01). Biết chúng vận hành thế nào giúp bạn ra quyết định đầu tư IT sáng suốt: cái gì nên mua ngay, cái gì nên chờ (giá sẽ giảm), cái gì nên thuê (cloud) thay vì sở hữu."
```

---

## 2. Topic 01 — Content fixes

### 2a. Fix: s2 — 7 resources naming

**Vấn đề:** `detail` node `s2-inputs` dùng tên gần đúng không khớp slide (Slide 7, Topic 01).  
**Slide gốc:** "Money, Manpower, Materials, Machinery/technology/infrastructure, Managerial skills, Time, Knowledge/information" (7 items).  
**Hiện tại:** "money, materials, machines, people, management, information và time"

**Fix — thay `detail` của node `id: "s2-inputs"` trong `flowBlock` của section `s2`:**

Old:
```
"Inputs gồm money, materials, machines, people, management, information và time."
```

New:
```
"7 inputs: Money, Manpower, Materials, Machinery/technology/infrastructure, Managerial skills, Time, Knowledge/information."
```

**Fix — thay `keyTerms` của section `s2`:**

Thêm key term:

```ts
{
  term: "7 resources of an organization",
  definition:
    "Money, Manpower, Materials, Machinery/technology/infrastructure, Managerial skills, Time, Knowledge/information — 7 inputs mà organization chuyển đổi thành outputs.",
},
```

---

### 2b. Fix: s8 — Thêm visual block cho 5-level information pyramid

**Vấn đề:** 5-level pyramid (data → information → intelligence → knowledge → wisdom) chỉ xuất hiện trong callout và knowledge map detail, chưa có visual block riêng.  
**Slide gốc:** Slide 16, Topic 01 — bức tranh hình tháp 5 tầng.

**Fix — Trong section `s8`, THÊM một `flowBlock` trước `calloutBlock` hiện có:**

```ts
flowBlock(
  "s8-pyramid",
  "5-level information pyramid",
  "horizontal",
  [
    {
      id: "s8p-data",
      label: "Data",
      group: "term",
      detail: "Raw facts chưa có context/meaning.",
    },
    {
      id: "s8p-info",
      label: "Information",
      group: "term",
      detail: "Data được xử lý hoặc đặt trong meaningful context.",
    },
    {
      id: "s8p-intel",
      label: "Intelligence",
      group: "term",
      detail: "Information được phân tích và diễn giải theo mục đích.",
    },
    {
      id: "s8p-know",
      label: "Knowledge",
      group: "term",
      detail: "Intelligence được hấp thụ và gắn vào kinh nghiệm người dùng.",
    },
    {
      id: "s8p-wis",
      label: "Wisdom",
      group: "term",
      detail: "Knowledge được vận dụng khôn ngoan trong quyết định.",
    },
  ],
  [
    { from: "s8p-data", to: "s8p-info" },
    { from: "s8p-info", to: "s8p-intel" },
    { from: "s8p-intel", to: "s8p-know" },
    { from: "s8p-know", to: "s8p-wis" },
  ],
  "Cùng một thứ có thể leo lên nhiều tầng khi có thêm context và người xử lý.",
),
```

---

### 2c. Fix: s11 — Moore's Law definition thêm "18-24 months" và enabled technologies

**Vấn đề:** keyTerms Moore's Law thiếu chu kỳ "18-24 months" và slide đề cập những technologies được kích hoạt bởi Moore's Law.  
**Slide gốc:** Slide 25, Topic 01.

**Fix 1 — `keyTerms` section s11, thay `definition` của Moore's Law:**

Old:
```
"Observation that transistor density on integrated circuits increases over time, driving cost/performance improvement."
```

New:
```
"Observation that the number of transistors on an integrated circuit doubles roughly every 18–24 months, driving cost/performance improvement. Hệ quả: enabled laser printers, GUI, cell phones, email, và Internet."
```

**Fix 2 — `calloutBlock` trong s11, thêm chi tiết vào body:**

Hiện tại callout nói "cost/performance của data processing giảm mạnh; the cost of data processing is approaching zero."

Thay `body` (hoặc `text` tùy helper signature) thành:
```
"Số transistor trên chip tăng gấp đôi mỗi 18–24 tháng → processing power tăng, cost giảm đều đặn. Đây là lực đẩy cho mọi làn sóng digital: laser printers, GUI, cell phones, email, Internet — đều chỉ khả thi khi Moore's Law hạ đủ chi phí. Điểm cần rút ra cho business: cost of data processing is approaching zero."
```

---

## 3. Topic 02 — Content fixes

Tham chiếu audit: 5 gaps hoàn toàn thiếu + 4 gaps thiếu một phần + 1 lỗi nhãn + 1 lỗi quiz.

---

### 3a. Gap: F/OSS movement (HOÀN TOÀN THIẾU)

**Vị trí thêm:** section `s12` (Programs & apps), sau calloutBlock hiện có, hoặc tạo section `s12b` riêng nếu s12 đã dài.  
**Nội dung slide:** Free/Open Source Software movement — FSF (Richard Stallman), GNU Project, GPL license; ý nghĩa kinh tế: source code công khai, ai cũng có thể sửa/phân phối.

**Thêm vào `blocks` của s12 (hoặc s12b):**

```ts
calloutBlock(
  "insight",
  "Free/Open Source Software (F/OSS) movement",
  "F/OSS = phần mềm có source code công khai; người dùng có thể dùng, sửa và phân phối. Phong trào bắt đầu với Richard Stallman (FSF) và GNU Project; GPL là license phổ biến nhất. Ý nghĩa business: Linux, MySQL, Firefox, LibreOffice đều là F/OSS; 'miễn phí' về tiền không có nghĩa là miễn phí về support/training chi phí.",
),
```

**Thêm `keyTerms`:**

```ts
{ term: "F/OSS", definition: "Free/Open Source Software — phần mềm có source code công khai, ai cũng có thể dùng, sửa, phân phối theo điều khoản license (vd. GPL)." },
{ term: "GPL", definition: "GNU General Public License — license F/OSS phổ biến nhất; yêu cầu derivative works cũng phải open source." },
```

---

### 3b. Gap: "4 ways to obtain software" framework (HOÀN TOÀN THIẾU)

**Vị trí thêm:** section `s12`, trước hoặc sau phần phân loại apps.  
**Nội dung slide:** 4 cách có software: (1) Prepackaged/commercial, (2) Custom-developed, (3) Open source, (4) Software as a Service (SaaS/cloud).

**Thêm `comparisonBlock` vào `blocks` của s12:**

```ts
comparisonBlock(
  "4 ways to obtain software",
  ["Cách", "Đặc điểm", "Ví dụ"],
  [
    {
      label: "Prepackaged / Retail",
      cells: [
        "Mua hộp / download; off-the-shelf; chi phí thấp nhưng ít tùy chỉnh",
        "Microsoft Office, Adobe Photoshop",
      ],
    },
    {
      label: "Custom-developed",
      cells: [
        "Thuê developer hoặc team nội bộ viết riêng; tốn kém + mất thời gian nhưng fit 100% nhu cầu",
        "Hệ thống ERP nội bộ của tập đoàn lớn",
      ],
    },
    {
      label: "Open source",
      cells: [
        "Miễn phí source code; tùy chỉnh được; cần kỹ năng kỹ thuật; chi phí ẩn = support/training",
        "Linux, LibreOffice, MySQL",
      ],
    },
    {
      label: "Software as a Service (SaaS)",
      cells: [
        "Thuê dùng qua cloud; trả theo tháng/năm; vendor lo cập nhật; cần Internet",
        "Google Workspace, Salesforce, Dropbox",
      ],
    },
  ],
),
```

**Thêm `keyTerms`:**

```ts
{ term: "SaaS (Software as a Service)", definition: "Mô hình dùng phần mềm qua cloud, trả phí định kỳ; vendor quản lý hạ tầng và cập nhật." },
```

---

### 3c. Gap: OO/Visual Language — 5th tier trên HLL (HOÀN TOÀN THIẾU)

**Vị trí:** section `s9` (Computer language), bổ sung vào flowBlock ngôn ngữ.  
**Nội dung slide:** Trên High-Level Language (HLL) còn có Object-Oriented (OO) / Visual language (4GL và 5GL); Python, Java, C++ là OO; Visual Basic, RAD tools là Visual.

**Fix — trong `flowBlock` của s9, THÊM node thứ 4:**

Hiện tại flowBlock s9 có 3 tầng: Machine language → Assembly → High-Level Language.

Thêm node thứ 4 sau HLL:

```ts
{
  id: "s9-oo",
  label: "OO / Visual Language",
  group: "term",
  detail:
    "Object-Oriented (OO) + Visual languages — tầng cao hơn HLL; OO: Python, Java, C++; Visual/4GL: Visual Basic, RAD tools; gần với tư duy người hơn, productivity cao hơn.",
},
```

Thêm edge:
```ts
{ from: "s9-hll", to: "s9-oo" },
```

**Thêm `keyTerms`:**

```ts
{ term: "Object-Oriented (OO) language", definition: "Ngôn ngữ lập trình tổ chức code theo objects và classes; ví dụ: Python, Java, C++." },
```

---

### 3d. Gap: Personal Interest apps category (HOÀN TOÀN THIẾU)

**Vị trí:** section `s12`, trong hoặc gần phần phân loại apps.  
**Nội dung slide:** Ngoài productivity/graphics/communications còn có nhóm "Personal Interest" — games, financial management, home design, travel software.

**Fix — trong phần liệt kê app categories của s12, bổ sung:**

Nếu s12 đang có comparisonBlock liệt kê app types, thêm row:

```ts
{
  label: "Personal Interest",
  cells: [
    "Games, quản lý tài chính cá nhân, thiết kế nhà, phần mềm du lịch",
  ],
},
```

Nếu không có comparisonBlock mà dùng callout, thêm:

```ts
calloutBlock(
  "note",
  "Personal Interest apps",
  "Ngoài nhóm business/productivity còn có nhóm Personal Interest: games, financial management, home design, travel software — thường dùng cho cá nhân thay vì tổ chức.",
),
```

---

### 3e. Gap: Create→Edit→Format→Save→Distribute workflow (HOÀN TOÀN THIẾU)

**Vị trí:** section `s12` hoặc `s0` (giới thiệu software).  
**Nội dung slide:** Workflow 5 bước chuẩn khi dùng software: Create → Edit → Format → Save → Distribute/Print.

**Thêm `flowBlock`:**

```ts
flowBlock(
  "s12-workflow",
  "Software workflow cơ bản",
  "horizontal",
  [
    { id: "wf-create", label: "Create", group: "concept", detail: "Tạo document/file mới." },
    { id: "wf-edit", label: "Edit", group: "concept", detail: "Sửa nội dung đã tạo." },
    { id: "wf-format", label: "Format", group: "concept", detail: "Định dạng: font, màu, layout." },
    { id: "wf-save", label: "Save", group: "concept", detail: "Lưu lên disk/cloud để tồn tại sau khi tắt máy." },
    { id: "wf-dist", label: "Distribute / Print", group: "concept", detail: "Chia sẻ qua email, cloud, in ấn." },
  ],
  [
    { from: "wf-create", to: "wf-edit" },
    { from: "wf-edit", to: "wf-format" },
    { from: "wf-format", to: "wf-save" },
    { from: "wf-save", to: "wf-dist" },
  ],
  "Workflow này áp dụng cho hầu hết mọi phần mềm: word processor, spreadsheet, presentation.",
),
```

---

### 3f. Fix partial: Sleep vs Hibernate distinction

**Vị trí:** section `s10` (OS) hoặc section có liên quan đến power management.  
**Vấn đề:** Hiện tại Sleep/Hibernate có thể bị gộp hoặc thiếu một.  
**Slide gốc:** Sleep = RAM vẫn giữ dữ liệu, điện thấp, resume nhanh; Hibernate = RAM dump ra disk, tắt điện hoàn toàn, resume chậm hơn nhưng không mất data khi hết pin.

**Nếu chưa có — thêm vào `keyTerms` s10:**

```ts
{ term: "Sleep", definition: "Chế độ năng lượng thấp: RAM giữ nguyên dữ liệu, máy tiêu thụ điện ít; resume rất nhanh nhưng cần điện liên tục." },
{ term: "Hibernate", definition: "Chế độ tắt hoàn toàn: RAM được dump ra disk trước khi tắt; không tiêu thụ điện; resume chậm hơn Sleep nhưng an toàn khi pin cạn." },
```

---

### 3g. Fix partial: Driver / Plug and Play

**Vị trí:** section `s10` (OS functions).  
**Vấn đề:** Driver và Plug and Play (PnP) có thể bị gộp trong "manage devices" mà không giải thích rõ.  
**Slide gốc:** Device driver = software giúp OS giao tiếp với hardware; Plug and Play = OS tự động detect và cài driver khi cắm thiết bị mới.

**Nếu chưa có — thêm `keyTerms`:**

```ts
{ term: "Device driver", definition: "Phần mềm dịch lệnh OS thành tín hiệu hardware cụ thể; mỗi thiết bị cần driver riêng." },
{ term: "Plug and Play (PnP)", definition: "Tính năng OS tự động nhận diện và cài driver khi người dùng cắm thiết bị mới vào máy." },
```

Và bổ sung vào `detail` của node `os` hoặc trong callout của s10:

> "OS còn quản lý devices thông qua device drivers; Plug and Play cho phép cắm-và-dùng ngay mà không cần cài thủ công."

---

### 3h. Fix partial: OS network/security functions

**Vị trí:** section `s10` (OS functions).  
**Vấn đề:** 5 OS functions trong slide (UI / Manage programs / Manage memory / Coordinate tasks / Provide tools) đã có, nhưng slide cũng đề cập OS quản lý networking và security — có thể bị bỏ qua.

**Nếu chưa có trong s10 callout — bổ sung vào body của calloutBlock OS functions:**

> "Ngoài 5 chức năng cốt lõi, OS còn quản lý network connections (thiết lập kết nối, chia sẻ file/printer) và security (user accounts, passwords, permissions, firewall cơ bản)."

---

### 3i. Fix partial: HDD track/sector/cylinder

**Vị trí:** section `s3` (Secondary storage).  
**Vấn đề:** Hiện tại s3 mô tả HDD cơ bản nhưng có thể thiếu cơ chế vật lý: track, sector, cylinder.  
**Slide gốc:** HDD gồm đĩa kim loại quay (platter), đầu đọc/ghi (read/write head); dữ liệu được sắp xếp theo track (vòng tròn đồng tâm) → sector (cung của track) → cylinder (tập hợp track cùng vị trí trên nhiều đĩa).

**Nếu chưa có — thêm `keyTerms` trong s3:**

```ts
{ term: "Track", definition: "Vòng tròn đồng tâm trên bề mặt đĩa HDD; dữ liệu được ghi theo từng track." },
{ term: "Sector", definition: "Đơn vị nhỏ nhất của track trên HDD; mỗi sector thường lưu 512 bytes hoặc 4 KB." },
{ term: "Cylinder", definition: "Tập hợp các track cùng vị trí bán kính trên tất cả các đĩa (platter); khái niệm dùng trong địa chỉ hóa dữ liệu HDD." },
```

---

### 3j. FIX ACCURACY: s9 flowBlock — nhãn cạnh compiler/assembler sai chiều

**Vấn đề:** Flowblock ngôn ngữ lập trình (s9) hiện đang có nhãn edge chú thích "assembler" và "compiler" nhưng chiều mũi tên đi từ LOW → HIGH (machine → assembly → HLL), trong khi assembler/compiler là công cụ dịch ngược chiều đó (HIGH → LOW).  
**Slide gốc:** Lập trình viên viết Assembly → **assembler** dịch xuống machine code; viết HLL → **compiler/interpreter** dịch xuống machine code. Mũi tên flow dạy học đi từ thấp → cao (tầng ngôn ngữ), nhưng tool label phải nằm ở chiều ngược.

**Fix — xóa nhãn sai trên cạnh LOW→HIGH, THÊM cạnh và nhãn mới để giải thích chiều dịch:**

Trong s9 flowBlock, thêm note riêng qua calloutBlock (đơn giản hơn là thêm edge ngược chiều trong flow):

```ts
calloutBlock(
  "note",
  "Assembler và Compiler dịch từ cao → thấp",
  "Flowchart trên thể hiện **tầng trừu tượng** (thấp → cao). Còn về **chiều thực thi**: Assembler dịch Assembly → machine code; Compiler dịch HLL → assembly hoặc machine code. Interpreter không tạo file riêng — nó đọc và chạy HLL trực tiếp từng dòng.",
),
```

Đồng thời, **xóa hoặc sửa nhãn** trên edge `{ from: "s9-ml", to: "s9-asm" }` nếu đang ghi `label: "assembler"` — vì assembler đi chiều ngược. Để edge không có nhãn hoặc nhãn là "tầng cao hơn".

---

### 3k. FIX QUIZ: q06 Topic 02 — stem trùng với Topic 01 q4 (Moore's Law)

**Vấn đề:** q06 trong topic02 hiện đang test Moore's Law giống hệt q4 trong topic01.  
**Fix:** Thay stem + options q06 topic02 thành một câu về **4 ways to obtain software** hoặc **OS functions** — hai concept quan trọng của Topic 02 chưa có quiz.

**Thay q06 topic02 bằng:**

```ts
{
  id: "q06",
  stem: "A small business needs accounting software but has limited IT staff. Which method of obtaining software offers the LOWEST upfront cost while avoiding the need to manage servers?",
  difficulty: "intermediate",
  conceptTested: "4 ways to obtain software — SaaS vs retail vs custom",
  takeaway:
    "SaaS = pay-as-you-go, không cần server riêng; retail/custom đòi upfront và infrastructure.",
  options: [
    {
      id: "a",
      text: "Purchase a prepackaged retail license",
      isCorrect: false,
      rationale:
        "Cơ chế: retail license trả một lần; có thể phù hợp nhưng vẫn cần cài đặt và maintain trên máy riêng. Bẫy: 'mua một lần' nghe có vẻ rẻ hơn. Khóa: SaaS không cần server/installation.",
    },
    {
      id: "b",
      text: "Commission custom-developed software",
      isCorrect: false,
      rationale:
        "Cơ chế: custom development là cách tốn kém nhất — cả thời gian lẫn tiền. Bẫy: 'đúng nhu cầu' nghe hấp dẫn. Khóa: small business với limited IT staff không phù hợp.",
    },
    {
      id: "c",
      text: "Subscribe to a cloud-based SaaS solution",
      isCorrect: true,
      rationale:
        "Cơ chế: SaaS = Software as a Service — trả phí định kỳ, vendor lo server/update/backup; upfront thấp, không cần IT infrastructure. Bẫy: 'thuê mãi' tưởng đắt về dài hạn. Khóa: lowest upfront + no server management = SaaS.",
    },
    {
      id: "d",
      text: "Download and deploy an open source package",
      isCorrect: false,
      rationale:
        "Cơ chế: open source miễn phí license nhưng cần kỹ năng cài đặt, configure và maintain — đòi IT staff. Bẫy: 'miễn phí' nghe như lowest cost. Khóa: limited IT staff không support được open source deployment.",
    },
  ],
},
```

---

## 4. Verify checklist

Sau khi thực hiện tất cả changes:

```
npx tsc --noEmit
```

Phải pass **0 errors**. Nếu có lỗi:
- `node id` trùng: đổi prefix (vd. `s8p-` cho pyramid, `wf-` cho workflow, `s9-oo`)
- String literal chưa escape: kiểm tra dấu nháy trong content tiếng Việt
- Missing helper argument: xem signature của `flowBlock`/`comparisonBlock`/`calloutBlock` trong `content/types.ts`

Không cần Playwright cho changes này (text + structure, không thay đổi logic render). Báo Chaliyah để review trên web sau khi tsc pass.

---

## 5. Scope rõ ràng — KHÔNG làm

- Không thêm sections mới không có trong slide
- Không thay đổi `learningObjectives` (đã phản ánh đúng slide)
- Không sửa `status` từ `"ready"` → `"draft"` (chỉ sửa nội dung)
- Không commit
- Không sửa file nào khác ngoài `content/dtb.ts`
