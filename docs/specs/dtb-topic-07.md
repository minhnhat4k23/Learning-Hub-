# Spec: DTB Topic 07 — E-Commerce & Supply Chain Systems

> **Loại:** Soạn mới một topic hoàn chỉnh (rich teaching mode), thay placeholder `topic07`. **Topic cuối.**
> **File cần sửa:** `content/dtb.ts`.
> **Nguồn:** slide `Topic 07 E-com and SC.pdf` (chỉ bám phần IN chính thức; BỎ ghi chú viết tay của SV). KHÔNG thêm khái niệm ngoài slide.
> **Tính chất:** rộng (6 Study Questions). Block mix flow + comparison + callout. knowledgeMap gom 6 Q thành 3 nhánh.
> **Quy ước:** diễn giải tiếng Việt, term tiếng Anh; quiz stem/options tiếng Anh, rationale/takeaway tiếng Việt.
> **Verify:** `npx tsc --noEmit` pass; render-check (Codex). KHÔNG commit.

---

## 0. Wiring (làm trước)

1. Tạo `const topic07: Chapter = { ... }` (sau `topic06`, trước `createPlaceholderTopic`).
2. Thêm vào assembly: `if (order === 7) return topic07;` (sau dòng order===6).

Helper có sẵn: `flowBlock`, `calloutBlock`, `comparisonBlock`. **Renderer contract:** comparison `columns.length === cells.length + 1`; flow edges trỏ node có thật; node id dùng `_`.

---

## 1. Khung Chapter

```ts
const topic07: Chapter = {
  slug: "topic-07",
  order: 7,
  title: "Topic 07 — E-Commerce & Supply Chain Systems",
  bigIdea:
    "Digital channels đã thay đổi tận gốc cách doanh nghiệp mua, bán và hợp tác — không chỉ là 'bán hàng online'. E-commerce bao trùm cả quy trình: phát triển, marketing, bán, giao, chăm sóc và thanh toán trên một thị trường toàn cầu kết nối. Web 2.0 biến khách hàng từ người ĐỌC thụ động (Web 1.0) thành người THAM GIA — chia sẻ, cộng tác — nên cộng đồng và social network trở thành kênh marketing cốt lõi (Web 3.0 đẩy tiếp tới machine-to-machine, cá nhân hoá thông minh). Đồng thời, information systems làm cả supply chain (Supplier → Manufacturer → Distributor → Retailer → Customer) minh bạch và phối hợp: chia sẻ dữ liệu để giảm bullwhip effect, tích hợp SRM–CRM. Là future manager, bạn không còn bị giới hạn địa lý — nhưng phải chọn đúng business model (B2C/B2B/C2C, marketplace, subscription, freemium…) và hiểu hạ tầng (three-tier architecture, digital supply chain) để cạnh tranh thay vì bị bỏ lại.",
  learningObjectives: [
    "Giải thích e-commerce là cả quy trình online (không chỉ mua/bán); phân biệt e-commerce vs e-business.",
    "Phân biệt các category: B2C, B2B, C2C, B2G và cho ví dụ.",
    "Nêu các e-commerce success factors (customer value proposition, performance & service, look & feel, personal attention, community, security).",
    "Nhận diện các business model types (manufacturer, retailer, marketplace, subscription, freemium, aggregator, advertisement, crowdsourcing, blockchain…).",
    "Mô tả three-tier architecture của e-commerce (user / server / database tier).",
    "Phân biệt Web 1.0 / 2.0 / 3.0 và giải thích vì sao Web 2.0 quan trọng với business.",
    "Giải thích IS nâng cao supply chain performance (minh bạch, chia sẻ dữ liệu, giảm bullwhip effect).",
    "Nêu 3 IS trong supply chain management (SRM, inventory, CRM); vai trò MRP/ERP và tích hợp SRM–CRM.",
    "Giải thích nhu cầu interorganizational data exchange.",
    "Nêu các e-commerce trends và các process trong essential e-commerce process architecture (gồm electronic payment / EFT).",
  ],
  knowledgeMap: { /* mục 2 */ },
  sections: [ /* mục 3 — s1..s11 */ ],
  questions: [ /* mục 4 — q01..q08 */ ],
  status: "ready",
  source: "Digital Technology in Business — Topic 07 E-com and SC.pdf.",
};
```

---

## 2. knowledgeMap (root → 3 nhóm theo 6 Study Questions)

```ts
knowledgeMap: {
  engine: "flow",
  layout: "tree",
  collapsible: true,
  caption:
    "6 Study Questions gom 3 nhánh: thương mại điện tử (Q1–Q2), Web evolution (Q3), supply chain & data (Q4–Q6). Bấm node để mở chi tiết và nhảy tới phần học.",
  nodes: [
    { id: "ec", label: "E-Commerce & Supply Chain", group: "concept", sectionId: "s1",
      detail: "Digital channels đổi cách mua–bán–hợp tác; chọn đúng business model + hiểu hạ tầng." },

    { id: "g_ec", label: "A. Thương mại điện tử (Q1–Q2)", group: "concept", parent: "ec", sectionId: "s1",
      detail: "E-commerce, categories, success factors, business models, three-tier tech." },
    { id: "g_web", label: "B. Web evolution (Q3)", group: "concept", parent: "ec", sectionId: "s6",
      detail: "Web 1.0 → 2.0 → 3.0; vì sao Web 2.0 quan trọng." },
    { id: "g_sc", label: "C. Supply chain & data (Q4–Q6)", group: "concept", parent: "ec", sectionId: "s7",
      detail: "Supply chain + IS, SRM/CRM, data exchange, trends." },

    { id: "t_ecdef", label: "E-commerce là gì", group: "term", parent: "g_ec", sectionId: "s1",
      detail: "Cả quy trình online; e-commerce vs e-business." },
    { id: "t_cat", label: "Categories B2C/B2B/C2C", group: "term", parent: "g_ec", sectionId: "s2",
      detail: "Bên giao dịch + ví dụ." },
    { id: "t_succ", label: "Success factors", group: "term", parent: "g_ec", sectionId: "s3",
      detail: "Value proposition, service, community, security." },
    { id: "t_model", label: "Business models", group: "term", parent: "g_ec", sectionId: "s4",
      detail: "Retailer, marketplace, subscription, freemium…" },
    { id: "t_tier", label: "Three-tier architecture", group: "term", parent: "g_ec", sectionId: "s5",
      detail: "User → server → database tier." },

    { id: "t_web", label: "Web 1.0 / 2.0 / 3.0", group: "term", parent: "g_web", sectionId: "s6",
      detail: "Readable → writable → executable." },

    { id: "t_scperf", label: "Supply chain + IS", group: "term", parent: "g_sc", sectionId: "s7",
      detail: "Minh bạch, chia sẻ dữ liệu, bullwhip effect." },
    { id: "t_srm", label: "SRM / Inventory / CRM", group: "term", parent: "g_sc", sectionId: "s8",
      detail: "3 IS trong SCM; MRP/ERP; SRM–CRM integration." },
    { id: "t_exch", label: "Data exchange", group: "term", parent: "g_sc", sectionId: "s9",
      detail: "Interorganizational message exchange." },
    { id: "t_trend", label: "Trends & process", group: "term", parent: "g_sc", sectionId: "s10",
      detail: "Social/mobile; process architecture + payment." },
  ],
  edges: [
    { from: "ec", to: "g_ec" }, { from: "ec", to: "g_web" }, { from: "ec", to: "g_sc" },
    { from: "g_ec", to: "t_ecdef" }, { from: "g_ec", to: "t_cat" }, { from: "g_ec", to: "t_succ" },
    { from: "g_ec", to: "t_model" }, { from: "g_ec", to: "t_tier" },
    { from: "g_web", to: "t_web" },
    { from: "g_sc", to: "t_scperf" }, { from: "g_sc", to: "t_srm" }, { from: "g_sc", to: "t_exch" }, { from: "g_sc", to: "t_trend" },
  ],
},
```

---

## 3. Sections (s1 → s11)

### A — THƯƠNG MẠI ĐIỆN TỬ (Q1–Q2)

#### s1 — E-commerce là gì (neo lens)
- **calloutBlock** `"key"` "E-commerce > mua/bán": "Electronic commerce KHÔNG chỉ là bán/mua sản phẩm. Nó bao trùm CẢ quy trình online: developing, marketing, selling, delivering, servicing, và paying cho sản phẩm/dịch vụ — giao dịch trên internetworked global marketplace với mạng lưới đối tác toàn cầu."
- **calloutBlock** `"trap"` "E-commerce vs E-business": "E-commerce = bán/mua online (giao dịch với khách). E-business = làm MỌI thứ online: bán, mua, sản xuất, vận hành… E-business rộng hơn e-commerce."
- **keyTerms:** e-commerce, e-business, internetworked global marketplace.

#### s2 — Categories of e-commerce
- **comparisonBlock** "Các loại e-commerce" — columns `["Loại", "Bên giao dịch", "Ví dụ"]`; rows:
  - "B2C": `["Business → Consumer: doanh nghiệp bán cho người tiêu dùng", "Shopee, Tiki"]`
  - "B2B": `["Business ↔ Business: marketplace & link trực tiếp giữa các doanh nghiệp", "Intel bán chip cho Dell"]`
  - "C2C": `["Consumer ↔ Consumer: đấu giá/mua bán giữa người dùng", "eBay, Chợ Tốt"]`
  - "B2G": `["Business → Government", "Cung cấp phần mềm cho cơ quan nhà nước"]`
- **keyTerms:** B2C, B2B, C2C, B2G.

#### s3 — E-commerce success factors
- **calloutBlock** `"key"` "Yếu tố thành công của e-commerce": "Customer value proposition: Selection & Value (sản phẩm hấp dẫn, giá cạnh tranh, bảo đảm, hỗ trợ sau bán); Performance & Service (điều hướng/mua nhanh, giao hàng kịp); Look & Feel (giao diện đẹp, catalog đa phương tiện); Advertising & Incentives (quảng cáo/khuyến mãi nhắm đúng, affiliate); Personal Attention (recommendation cá nhân hoá); Community Relationships (social network/cộng đồng); Security & Reliability (bảo mật giao dịch, giao hàng tin cậy)."
- **keyTerms:** customer value proposition, recommendation system, affiliate.

#### s4 — Business model types
- **comparisonBlock** "Các business model điển hình" — columns `["Mô hình", "Bản chất / ví dụ"]`; rows:
  - "Manufacturer": `["Nhà sản xuất bán trực tiếp (Ford, 3M, General Electric)"]`
  - "Distributor": `["Mua từ nhà sản xuất rồi phân phối (auto dealerships)"]`
  - "Retailer": `["Bán lẻ trực tiếp cho người dùng (Amazon)"]`
  - "Franchise": `["Nhượng quyền (McDonald's, Pizza Hut)"]`
  - "Brick-and-mortar": `["Cửa hàng truyền thống, giao dịch face-to-face"]`
  - "eCommerce": `["Web-store trên Internet"]`
  - "Freemium": `["Miễn phí cơ bản, trả phí nâng cao (Dropbox, YouTube)"]`
  - "Subscription": `["Thuê bao định kỳ (Netflix)"]`
  - "Aggregator": `["Gom nhà cung cấp dịch vụ vào một nền tảng (Uber, Airbnb)"]`
  - "Marketplace": `["Sàn để nhiều bên mua–bán (Amazon, Alibaba)"]`
  - "Advertisement": `["Nội dung miễn phí, kiếm tiền từ quảng cáo (YouTube, Forbes)"]`
  - "Crowdsourcing": `["Cộng đồng cùng đóng góp nội dung (Wikipedia, Duolingo)"]`
  - "Blockchain": `["Giao dịch minh bạch, không cần trung gian (ví dụ blockchain-based)"]`
- **keyTerms:** business model, freemium, subscription, aggregator, marketplace, crowdsourcing.

#### s5 — Three-tier architecture (Q2)
- **flowBlock** `s5` "Three-tier architecture" layout `horizontal`, nodes:
  - `s5_user` "User tier (client)" — "PC + browser; gửi & xử lý web page. Trang viết bằng HTML, truyền qua HTTP."
  - `s5_server` "Server tier" — "Web server + application programs quản lý HTTP traffic giữa web server và user; trung gian giữa client và database."
  - `s5_db` "Database tier" — "Máy chạy DBMS, xử lý SQL request để lấy & lưu dữ liệu."
  - edges `s5_user→s5_server→s5_db`, label "HTTP request", "SQL"; thêm edge `s5_db→s5_user` label "kết quả". caption: "Mỗi tier ứng với một lớp máy tính; tách bạch trình bày – xử lý – lưu trữ giúp hệ thống an toàn & dễ mở rộng."
- **keyTerms:** three-tier architecture, user tier, server tier, database tier, HTTP, HTML.

### B — WEB EVOLUTION (Q3)

#### s6 — Web 1.0 / 2.0 / 3.0
- **comparisonBlock** "Web 1.0 vs 2.0 vs 3.0" — columns `["Tiêu chí", "Web 1.0", "Web 2.0", "Web 3.0"]`; rows:
  - "Bản chất": `["'Readable' — flat data", "'Writable' — interactive data", "'Executable' — dynamic apps, machine-to-machine"]`
  - "Tương tác": `["Ít tương tác giữa site & user", "Tương tác user↔site; khuyến khích participation, collaboration, sharing", "Máy hiểu thông tin như người, tự sinh/phân phối nội dung cá nhân hoá"]`
  - "Trọng tâm": `["Company focus, read-only", "Community focus, read-write (blogs/wikis)", "Individual focus, smart applications (semantic web)"]`
  - "Ví dụ": `["Britannica Online, portals", "YouTube, Facebook, Wikipedia", "ChatGPT, Spotify recommendation"]`
- **calloutBlock** `"key"` "Vì sao Web 2.0 quan trọng với business": "Web 2.0 biến khách hàng thành người tham gia (tạo nội dung, chia sẻ, đánh giá) → social network trở thành nền tảng marketing cộng đồng, là kênh tiếp cận và xây lòng tin khách hàng."
- **keyTerms:** Web 1.0, Web 2.0, Web 3.0, semantic web.

### C — SUPPLY CHAIN & DATA (Q4–Q6)

#### s7 — Supply chain performance + IS (Q4)
- **flowBlock** `s7` "Networked supply chain" layout `horizontal`, nodes:
  - `s7_sup` "Supplier" — "Nhà cung cấp nguyên liệu."
  - `s7_man` "Manufacturer" — "Nhà sản xuất."
  - `s7_dist` "Distributor" — "Nhà phân phối."
  - `s7_ret` "Retailer" — "Nhà bán lẻ."
  - `s7_cus` "Customer" — "Khách hàng cuối."
  - edges nối liên tiếp `s7_sup→…→s7_cus`, label "hàng & dữ liệu". caption: "IS kết nối cả chuỗi: chia sẻ dữ liệu giúp minh bạch & phối hợp."
- **calloutBlock** `"key"` "IS nâng supply chain performance": "Information systems tăng minh bạch & độ chính xác qua chia sẻ dữ liệu, giúp lập kế hoạch/dự báo tốt hơn, giảm chi phí & lãng phí, và giảm **bullwhip effect** (dao động đơn hàng khuếch đại khi đi ngược chuỗi do thiếu thông tin chung)."
- **keyTerms:** supply chain, bullwhip effect.

#### s8 — SRM / Inventory / CRM (Q5)
- **comparisonBlock** "3 IS trong supply chain management" — columns `["Hệ thống", "Vai trò"]`; rows:
  - "Supplier Relationship Management (SRM)": `["Giúp làm việc hiệu quả với nhà cung cấp (đặt hàng, đàm phán), tìm nguồn cung"]`
  - "Inventory": `["Kiểm soát tồn kho, biết khi nào cần nhập thêm"]`
  - "Customer Relationship Management (CRM)": `["Chăm sóc khách hàng (với nhà phân phối/bán lẻ là khách)"]`
- **calloutBlock** `"key"` "ERP, MRP & tích hợp SRM–CRM": "MRP (Material Resource Planning) và ERP (Enterprise Resource Planning) hỗ trợ lập kế hoạch nguồn lực. Tích hợp SRM–CRM: nối CRM của mình với SRM của khách để tự động hoá mua lặp lại — SRM kiểm tra inventory, xác định món cần, và tạo order tự động."
- **keyTerms:** SRM, CRM, inventory system, MRP, ERP.

#### s9 — Interorganizational data exchange (Q6)
- **calloutBlock** `"key"` "Trao đổi dữ liệu giữa các tổ chức": "Doanh nghiệp phải giao tiếp với doanh nghiệp khác để mua nguyên liệu, bán sản phẩm, hay vận hành chung — nên cần interorganizational message exchange (trao đổi thông điệp/dữ liệu liên tổ chức) một cách chuẩn hoá và đáng tin."
- **keyTerms:** interorganizational message exchange.

#### s10 — E-commerce trends + process architecture
- **calloutBlock** `"realworld"` "E-commerce trends": "Ba hướng lớn: social network, mobile network, virtual world. Top trends: social media chi phối quyết định mua; thị trường quảng cáo đắt đỏ hơn; direct-to-consumer brands lên ngôi nhờ social media; video & rich media giúp khám phá sản phẩm; mobile shopping tăng tốc."
- **comparisonBlock** "Essential e-commerce process architecture" — columns `["Process", "Vai trò"]`; rows:
  - "Access control & security": `["Thiết lập tin cậy & truy cập an toàn: xác thực, phân quyền, bảo mật"]`
  - "Profiling & personalizing": `["Xây profile sở thích để cá nhân hoá nội dung/quảng cáo (one-to-one marketing)"]`
  - "Search management": `["Giúp khách tìm đúng sản phẩm/dịch vụ"]`
  - "Content & catalog management": `["Quản lý nội dung & catalog; hỗ trợ self-service & mass-customization (vd Dell)"]`
  - "Workflow management": `["Phối hợp công việc có cấu trúc giữa các nhân sự/bên"]`
  - "Event notification": `["E-commerce là event-driven; giám sát & thông báo sự kiện (truy cập, thanh toán, giao hàng)"]`
  - "Collaboration & trading": `["Hỗ trợ cộng tác & giao dịch giữa khách/nhà cung cấp/stakeholder"]`
  - "Electronic payment": `["Shopping cart, credit card, và Electronic Funds Transfer (EFT)"]`
- **keyTerms:** one-to-one marketing, mass customization, EFT (electronic funds transfer).

---

## 4. Quiz (8 câu — stem/options tiếng Anh, rationale/takeaway tiếng Việt)

Mỗi câu 4 option + rationale cho cả đúng & sai (bẫy có chủ đích). Gợi ý:

1. **q01** (basic) — *E-commerce vs e-business.* Đúng: e-commerce = bán/mua online (giao dịch với khách); e-business = mọi hoạt động online. Bẫy: coi hai cái như nhau; e-commerce chỉ là website.
2. **q02** (intermediate) — *Category matching.* Đúng: Intel bán chip cho Dell = B2B; Shopee bán cho người dùng = B2C; eBay đấu giá người dùng = C2C. Bẫy: đảo B2B/B2C.
3. **q03** (intermediate) — *Three-tier — database tier làm gì?* Đúng: chạy DBMS, xử lý SQL để lấy/lưu dữ liệu. Bẫy: gán việc đó cho user tier; cho rằng server tier chứa database.
4. **q04** (intermediate) — *Web 1.0 vs 2.0 vs 3.0.* Đúng: 1.0 readable (read-only), 2.0 writable (interactive/community), 3.0 executable (machine-to-machine). Bẫy: Web 2.0 = read-only; gán wiki cho Web 1.0.
5. **q05** (intermediate) — *Bullwhip effect / IS & supply chain.* Đúng: chia sẻ dữ liệu giúp giảm bullwhip effect & lãng phí. Bẫy: cho rằng IS làm tăng dao động; bullwhip là lỗi sản xuất.
6. **q06** (intermediate) — *3 IS trong SCM.* Đúng: SRM, inventory, CRM. Bẫy: gồm e-mail/word processing; chỉ có CRM.
7. **q07** (basic) — *Business model matching.* Đúng: Netflix = subscription; Uber/Airbnb = aggregator; Dropbox/YouTube = freemium. Bẫy: đảo subscription/freemium.
8. **q08** (basic) — *Electronic payment / EFT.* Đúng: EFT = chuyển tiền/credit giữa ngân hàng–doanh nghiệp–khách; shopping cart & credit card là web payment process. Bẫy: EFT là tiền mặt; shopping cart là kho hàng.

---

## 5. Verify (Codex chạy)

```bash
npx tsc --noEmit
```
- Pass 0 error.
- comparison: mọi row `cells.length === columns.length - 1` (chú ý bảng Web 1/2/3 có 4 cột → mỗi row 3 cells).
- flow: edges trỏ node có thật; node id dùng `_`.
- Render-check `/digital-technology-business/topic-07`: knowledgeMap + 11 section + 8 quiz hiển thị. Báo Chaliyah. **KHÔNG commit.**
