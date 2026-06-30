# Spec: DTB Topic 03 — Computer Network, Internet & Web

> **Loại:** Soạn mới một topic hoàn chỉnh (rich teaching mode), thay placeholder `topic03`.
> **File cần sửa:** `content/dtb.ts`.
> **Nguồn:** slide `Topic 03 Network Internet WWW.pdf` (92 trang, 2 phần 3.1 & 3.2). KHÔNG thêm khái niệm ngoài slide.
> **Quy ước nội dung:** diễn giải tiếng Việt, giữ nguyên term tiếng Anh; quiz stem/options = tiếng Anh, rationale/takeaway = tiếng Việt.
> **Verify:** `npx tsc --noEmit` phải pass; sau đó báo Chaliyah render-check (Codex chạy), KHÔNG commit.

---

## 0. Wiring (BẮT BUỘC làm trước)

Hiện `topic03` đang là placeholder sinh bởi `createPlaceholderTopic(3)`. Thay bằng object thật:

1. Tạo `const topic03: Chapter = { ... }` (đặt ngay sau object `topic02`, trước `createPlaceholderTopic`).
2. Sửa mảng assembly (khoảng line 4309):

```ts
// OLD:
if (order === 2) return topic02;
return createPlaceholderTopic(order);

// NEW:
if (order === 2) return topic02;
if (order === 3) return topic03;
return createPlaceholderTopic(order);
```

Helper đã có sẵn trong file: `flowBlock(sectionId, title, layout, nodes, edges, caption?)`, `calloutBlock(kind, title, body)`, `comparisonBlock(title, columns, rows)`.
**Lưu ý renderer contract (đừng vi phạm):** trong `comparisonBlock`, `columns.length === rows[i].cells.length + 1` (cột đầu là header của cột nhãn). Mọi flow `edges.from/to` phải trỏ tới `id` node có thật trong cùng block. Dùng `_` (gạch dưới) cho mọi node id, không dùng gạch ngang.

---

## 1. Khung Chapter

```ts
const topic03: Chapter = {
  slug: "topic-03",
  order: 3,
  title: "Topic 03 — Computer Network, Internet & Web",
  bigIdea:
    "Trước đây, muốn dùng máy tính bạn phải đến tận nơi — Internet và networks đã xóa ràng buộc khoảng cách đó: thông tin và năng lực tính toán giờ chạm tới được từ bất cứ đâu. Ngay từ ARPANET (1969), mục tiêu đã rất 'business': cho người ở các vị trí khác nhau chia sẻ thông tin và làm việc chung. Một network mang lại các lợi ích sách nêu rõ — facilitate communications, share hardware/data/software, transfer funds — đó là lý do mọi doanh nghiệp đều nối mạng. Nhưng sự tiện lợi ấy nằm trên hạ tầng nhiều tầng: kiểu kết nối (cable/DSL/fiber/wireless), loại network (LAN→WAN), chuẩn giao tiếp (TCP/IP, Wi-Fi) và transmission media. Hiểu các tầng này, bạn — future manager — chọn đúng giải pháp kết nối và cân được bandwidth–chi phí–độ tin cậy thay vì phó mặc cho IT.",
  learningObjectives: [
    "Thuật lại evolution của Internet: vấn đề khoảng cách → modem (analog↔digital) → ARPANET 1969 (2 mục tiêu) → hàng triệu host ngày nay.",
    "Phân biệt các broadband connection: wired (cable / DSL / FTTP) vs wireless (Wi-Fi / mobile broadband / fixed wireless / satellite); giải thích ISP, bandwidth, hot spot.",
    "Giải thích quan hệ IP address ↔ domain name và vai trò DNS server.",
    "Mô tả WWW (webpage / website / web server / Web 2.0), phát minh của Tim Berners-Lee và nguyên lý client-server + http/html; nhận diện thành phần URL.",
    "Phân biệt browser / web app / cloud storage; soạn search text hiệu quả (search engine vs subject directory, search operators).",
    "Nêu các loại website và quy trình web publishing 5 bước.",
    "Giải thích web dùng graphics / animation / audio / video / VR; nhận diện media formats và plug-in.",
    "Giải thích cách email / email list / IM / chat / online discussion / VoIP / FTP hoạt động; nêu netiquette.",
    "Mô tả mô hình communications (sending → media → receiving) và 5 advantages của một network.",
    "Phân biệt LAN / WLAN / MAN / WAN / PAN và client-server vs peer-to-peer; vai trò communications software.",
    "Phân biệt các network standards/protocols, communications lines, communications devices, và physical vs wireless transmission media (kèm bandwidth & latency).",
  ],
  knowledgeMap: { /* xem mục 2 */ },
  sections: [ /* xem mục 3 — s1..s17 */ ],
  questions: [ /* xem mục 4 — q01..q08 */ ],
  status: "ready",
  source:
    "Digital Technology in Business — Topic 03 Network Internet WWW.pdf (Part 3.1 & 3.2).",
};
```

---

## 2. knowledgeMap (cây 3 nhánh = 3 tầng của lens)

Dùng `engine: "flow"`, `layout: "tree"`, `collapsible: true`. Root → 3 group (A/B/C) → leaf terms. Mỗi node có `sectionId` để nhảy tới phần học.

```ts
knowledgeMap: {
  engine: "flow",
  layout: "tree",
  collapsible: true,
  caption:
    "3 tầng: (A) chạm tới từ bất cứ đâu, (B) vì sao nối mạng, (C) hạ tầng để chọn giải pháp. Bấm từng node để mở chi tiết và nhảy tới phần học.",
  nodes: [
    { id: "net", label: "Network, Internet & Web", group: "concept", sectionId: "s1",
      detail: "Internet/networks xóa ràng buộc khoảng cách; manager chọn đúng hạ tầng kết nối." },

    // 3 nhóm
    { id: "g_reach", label: "A. Chạm tới từ bất cứ đâu", group: "concept", parent: "net", sectionId: "s1",
      detail: "Internet & Web — tầng người dùng tiếp cận: connect, web, media, services." },
    { id: "g_why", label: "B. Vì sao nối mạng", group: "concept", parent: "net", sectionId: "s10",
      detail: "Mô hình truyền tin + 5 advantages của network + loại network." },
    { id: "g_infra", label: "C. Hạ tầng nhiều tầng", group: "concept", parent: "net", sectionId: "s14",
      detail: "Standards, lines, devices, transmission media — manager chọn giải pháp." },

    // Leaf nhóm A
    { id: "t_evo", label: "Evolution & ARPANET", group: "term", parent: "g_reach", sectionId: "s1",
      detail: "Khoảng cách → modem → ARPANET 1969 (share + resilient) → triệu host." },
    { id: "t_connect", label: "Connecting & bandwidth", group: "term", parent: "g_reach", sectionId: "s2",
      detail: "Wired vs wireless, ISP, hot spot, Mbps/Gbps." },
    { id: "t_addr", label: "IP / domain / DNS", group: "term", parent: "g_reach", sectionId: "s3",
      detail: "IP định danh, domain dạng chữ, DNS dịch domain → IP." },
    { id: "t_web", label: "WWW & browser", group: "term", parent: "g_reach", sectionId: "s4",
      detail: "Berners-Lee 1990, client-server, http/html, URL, web app." },
    { id: "t_sites", label: "Website & media", group: "term", parent: "g_reach", sectionId: "s6",
      detail: "Loại website, web publishing, graphics/audio/video/VR." },
    { id: "t_services", label: "Internet services & netiquette", group: "term", parent: "g_reach", sectionId: "s8",
      detail: "Email/IM/chat/VoIP/FTP + code ứng xử mạng." },

    // Leaf nhóm B
    { id: "t_model", label: "Mô hình truyền + advantages", group: "term", parent: "g_why", sectionId: "s10",
      detail: "sending→media→receiving; 5 lợi ích network." },
    { id: "t_types", label: "LAN / MAN / WAN / PAN", group: "term", parent: "g_why", sectionId: "s11",
      detail: "Phân loại network theo phạm vi địa lý." },
    { id: "t_arch", label: "Client/server vs P2P", group: "term", parent: "g_why", sectionId: "s12",
      detail: "2 kiểu network architecture." },

    // Leaf nhóm C
    { id: "t_std", label: "Standards & protocols", group: "term", parent: "g_infra", sectionId: "s14",
      detail: "Ethernet, TCP/IP, Wi-Fi, Bluetooth, RFID/NFC…" },
    { id: "t_lines", label: "Communications lines", group: "term", parent: "g_infra", sectionId: "s15",
      detail: "Dedicated, cable, DSL/ADSL, ISDN, FTTP, T-carrier, ATM." },
    { id: "t_dev", label: "Communications devices", group: "term", parent: "g_infra", sectionId: "s16",
      detail: "Modem, WAP, router, network card, hub/switch." },
    { id: "t_media", label: "Transmission media", group: "term", parent: "g_infra", sectionId: "s17",
      detail: "Physical (twisted/coax/fiber) + wireless (radio/microwave/satellite/GPS)." },
  ],
  edges: [
    { from: "net", to: "g_reach" }, { from: "net", to: "g_why" }, { from: "net", to: "g_infra" },
    { from: "g_reach", to: "t_evo" }, { from: "g_reach", to: "t_connect" }, { from: "g_reach", to: "t_addr" },
    { from: "g_reach", to: "t_web" }, { from: "g_reach", to: "t_sites" }, { from: "g_reach", to: "t_services" },
    { from: "g_why", to: "t_model" }, { from: "g_why", to: "t_types" }, { from: "g_why", to: "t_arch" },
    { from: "g_infra", to: "t_std" }, { from: "g_infra", to: "t_lines" }, { from: "g_infra", to: "t_dev" },
    { from: "g_infra", to: "t_media" },
  ],
},
```

---

## 3. Sections (s1 → s17)

> Mỗi section: `id`, `heading`, `blocks[]` (flow/comparison/callout), `keyTerms[]`. Diễn giải tiếng Việt, term tiếng Anh. Dưới đây nêu **nội dung bắt buộc + block type + code cho phần khó (flow/comparison)**; callout viết theo gợi ý.

### PART 3.1 — Internet, connecting & communicating online

#### s1 — Evolution: từ "phải đến tận máy" → ARPANET → today
- **flowBlock** `s1` "Vì sao có Internet" layout `horizontal`, nodes (group `concept`, detail bắt buộc):
  - `s1_far` "Phải đến tận máy" — "50 năm trước (trước 1969): mọi mainframe buộc input/output đặt sát máy (cùng phòng). Bất tiện → cần dùng máy từ xa."
  - `s1_phone` "Mạng điện thoại analog" — "Đã có sẵn telephone network nhưng là analog, chỉ tải tín hiệu thoại. Ý tưởng: dùng mạng analog này để truyền dữ liệu (digital)?"
  - `s1_modem` "Modem" — "Modulator/demodulator: chuyển digital ↔ analog để gửi qua đường điện thoại. Modulation (digital→analog) khi gửi, demodulation khi nhận."
  - `s1_arpa` "ARPANET 1969" — "Mạng đầu tiên hoạt động. 2 mục tiêu: (1) nhà khoa học ở các vị trí khác nhau chia sẻ thông tin & làm việc chung; (2) vẫn chạy kể cả khi một phần mạng bị phá hủy."
  - `s1_today` "Today" — "1984: >1.000 host; nay: hàng triệu host kết nối — Internet = tập hợp toàn cầu các network nối doanh nghiệp, chính phủ, trường học, cá nhân."
  - edges nối liên tiếp `s1_far→s1_phone→s1_modem→s1_arpa→s1_today`, label lần lượt: "bất tiện", "cần modem", "ra đời", "phát triển". caption: "Internet sinh ra để giải bài toán khoảng cách — và 2 mục tiêu gốc của ARPANET vẫn định nghĩa nó hôm nay."
- **calloutBlock** `"note"` "Analog vs Digital — và vai trò modem": "Analog: liên tục theo thời gian & giá trị (như kim đồng hồ quét). Digital: rời rạc (đồng hồ số). Modem bắc cầu giữa máy tính (digital) và đường truyền analog cũ."
- **keyTerms:** Internet, ARPANET, modem (modulation/demodulation).

#### s2 — Connecting to the Internet
- **comparisonBlock** "Wired vs Wireless connection" — columns `["Tiêu chí", "Wired", "Wireless"]`; rows:
  - "Ví dụ dịch vụ": cells `["Cable Internet, DSL (digital subscriber line), Fiber to the Premises (FTTP)", "Wi-Fi (802.11), mobile broadband, fixed wireless, satellite Internet"]`
  - "Cách nối": cells `["Cáp/dây nối vật lý vào communications device", "Dùng wireless modem / thiết bị thu phát; không cần dây"]`
  - "Đặc điểm": cells `["Ổn định, thường nhanh & rẻ trên mỗi Mbps", "Cơ động, phủ nơi khó kéo cáp; phụ thuộc sóng/khoảng cách"]`
- **calloutBlock** `"key"` "ISP, hot spot & bandwidth": "ISP (Internet service provider): doanh nghiệp bán quyền truy cập Internet (miễn phí hoặc trả phí). Hot spot: mạng không dây cấp Internet cho thiết bị di động. Bandwidth: lượng dữ liệu chạy qua mạng — đo bằng Mbps (triệu bit/s) hoặc Gbps (tỷ bit/s)."
- **keyTerms:** ISP, bandwidth, hot spot, DSL, FTTP.

#### s3 — IP → domain → DNS
- **flowBlock** `s3` "Phân giải tên miền" layout `horizontal`, nodes:
  - `s3_domain` "Domain name" — "Tên dạng chữ dễ nhớ (vd hcmut.edu.vn) tương ứng một IP address."
  - `s3_dns` "DNS server" — "Dịch domain name → IP address tương ứng."
  - `s3_ip` "IP address" — "Dãy số định danh duy nhất mỗi máy/thiết bị nối Internet; máy dùng số này để tìm nhau."
  - edges: `s3_domain→s3_dns` label "tra cứu", `s3_dns→s3_ip` label "trả về IP". caption: "Người nhớ tên chữ; máy định tuyến bằng số — DNS là cầu nối giữa hai thế giới."
- **keyTerms:** IP address, domain name, DNS server.

#### s4 — WWW & phát minh (Berners-Lee)
- **flowBlock** `s4` "Web hoạt động: client-server" layout `horizontal`, nodes:
  - `s4_browser` "Web browser (client)" — "Chương trình client chính; gửi request và hiển thị trang theo mã html nhận về."
  - `s4_req` "HTTP request" — "Trình duyệt yêu cầu một webpage qua giao thức http (hypertext transport protocol)."
  - `s4_server` "Web server" — "Máy tính 'phục vụ' webpage để đáp ứng request từ browser."
  - `s4_page` "Webpage (html)" — "Tài liệu điện tử viết bằng html; có hypertext (link nhúng nối các tài liệu) + multimedia."
  - edges: `s4_browser→s4_req→s4_server→s4_page`, label "gửi", "phục vụ", "trả html"; thêm edge `s4_page→s4_browser` label "hiển thị". caption: "Tim Berners-Lee phát minh WWW năm 1990 tại CERN — dựa trên client-server, hypertext, multimedia và các chuẩn http/html."
- **calloutBlock** `"insight"` "WWW ≠ Internet": "Internet là hạ tầng mạng vật lý toàn cầu; WWW là tập hợp các tài liệu điện tử (webpage) chạy TRÊN Internet. Web 2.0 = các website cho phép người dùng chia sẻ thông tin cá nhân, sửa nội dung, và chạy app qua trình duyệt."
- **keyTerms:** World Wide Web (WWW), website, web server, Web 2.0, hypertext, HTML, HTTP.

#### s5 — Browser, URL, web app & cloud storage
- **comparisonBlock** "Trình duyệt & ứng dụng web" — columns `["Khái niệm", "Là gì", "Ghi chú"]`; rows:
  - "Browser": `["Ứng dụng truy cập & xem webpage", "Hỗ trợ tabbed browsing; home page = trang đầu website hiển thị"]`
  - "Web address (URL)": `["Địa chỉ duy nhất của một webpage", "Gồm protocol + domain + đường dẫn"]`
  - "Web app": `["Ứng dụng lưu trên web server, truy cập qua browser", "Nhà cung cấp thường cho cloud storage để lưu dữ liệu người dùng"]`
- **keyTerms:** browser, home page, URL (web address), web app, cloud storage.

#### s6 — Types of websites + web publishing
- **flowBlock** `s6` "Web publishing — 5 bước" layout `horizontal`, nodes (mỗi node 1 bước, detail ngắn): `s6_plan` "Plan", `s6_design` "Design", `s6_create` "Create", `s6_host` "Host", `s6_maintain` "Maintain"; edges nối liên tiếp. caption: "Quy trình tạo & duy trì website."
- **calloutBlock** `"note"` "Tìm kiếm & các loại website": "Search engine: phần mềm tìm website/ảnh/video/tin/bản đồ theo chủ đề. Subject directory: phân loại webpage theo nhóm (sports, shopping…). Search operators giúp tinh chỉnh truy vấn. Các loại website tiêu biểu: search engine, online social network, informational/research, media sharing, bookmarking, news/mass media, educational, business/gov/org, wiki & collaboration, health & fitness, blog, science, entertainment, banking/finance, travel, mapping, retail/auction, careers, e-commerce, portal, content aggregation, website creation/management."
- **keyTerms:** search engine, subject directory, search operator, online social network, e-commerce website, portal.

#### s7 — Digital media on the web
- **comparisonBlock** "Các dạng digital media" — columns `["Loại media", "Mô tả", "Định dạng / ghi chú"]`; rows:
  - "Graphic": `["Biểu diễn trực quan thông tin phi văn bản", "BMP, GIF, JPEG, PNG, TIFF"]`
  - "Infographic": `["Trình bày dữ liệu/thông tin để truyền đạt nhanh, đơn giản hóa khái niệm", "Dạng đặc biệt của graphic"]`
  - "Animation": `["Tạo cảm giác chuyển động bằng chuỗi ảnh tĩnh nối tiếp", "—"]`
  - "Audio": `["Nhạc, giọng nói, âm thanh", "Nén để giảm dung lượng; nghe qua media player"]`
  - "Video / VR": `["Video = ảnh hiển thị chuyển động; VR mô phỏng môi trường 3D", "Cần băng thông cao"]`
- **calloutBlock** `"note"` "Plug-in / add-on": "Chương trình mở rộng khả năng của trình duyệt (vd phát một định dạng media đặc thù)."
- **keyTerms:** multimedia, graphic, infographic, animation, virtual reality (VR), plug-in (add-on), media player.

#### s8 — Other Internet services
- **comparisonBlock** "Dịch vụ Internet ngoài Web" — columns `["Dịch vụ", "Chức năng"]`; rows:
  - "Email": `["Gửi/nhận tin nhắn & file qua mạng; email program: tạo, gửi, nhận, chuyển tiếp, lưu, in, xóa"]`
  - "Email list": `["Nhóm địa chỉ email để gửi hàng loạt một thông điệp"]`
  - "Instant messaging (IM)": `["Báo khi liên hệ online, rồi trao đổi tin/file hoặc vào phòng chat riêng"]`
  - "Chat / chat room": `["Hội thoại gõ phím real-time với nhiều người; chat room = nơi cho phép chat đồng thời"]`
  - "Online discussion": `["Khu vực thảo luận viết về một chủ đề"]`
  - "VoIP": `["Voice over IP — nói chuyện với người khác qua kết nối Internet"]`
  - "FTP": `["File Transfer Protocol — chuẩn cho upload/download file giữa các máy; FTP server cho phép up/download"]`
- **keyTerms:** email, email list, instant messaging, chat room, VoIP, FTP, FTP server.

#### s9 — Netiquette
- **calloutBlock** `"key"` "Netiquette = code of acceptable Internet behavior": "Bộ quy tắc ứng xử được chấp nhận khi giao tiếp trên Internet — lịch sự, tôn trọng, không spam/quấy rối. Trong môi trường business, netiquette kém làm tổn hại uy tín cá nhân và tổ chức."
- **keyTerms:** netiquette.

### PART 3.2 — Communicating digital content

#### s10 — Mô hình truyền tin + Advantages of a network (NEO LENS)
- **flowBlock** `s10` "Mô hình truyền dữ liệu" layout `horizontal`, nodes:
  - `s10_send` "Sending device" — "Thiết bị khởi tạo và gửi data/instructions/information."
  - `s10_media` "Transmission media" — "Đường truyền mang tín hiệu giữa hai đầu."
  - `s10_recv` "Receiving device" — "Thiết bị nhận dữ liệu ở đầu kia."
  - edges `s10_send→s10_media→s10_recv`, label "tín hiệu", "tới đích". caption: "Digital communications = quá trình ≥2 máy/thiết bị truyền data, instructions, information."
- **calloutBlock** `"key"` "5 advantages của một network (vì sao doanh nghiệp nối mạng)": "Sách liệt kê thẳng 5 lợi ích: (1) Facilitate communications — trao đổi nhanh; (2) Share hardware — dùng chung máy in, ổ lưu trữ; (3) Share data & information — truy cập dữ liệu chung; (4) Share software — cài/dùng chung phần mềm; (5) Transfer funds — chuyển tiền điện tử. Đây chính là 'business why' của toàn bộ Part 3.2."
- **keyTerms:** digital communications, network, transmission media (sending/receiving device).

#### s11 — LAN / MAN / WAN / PAN
- **comparisonBlock** "Phân loại network theo phạm vi" — columns `["Loại", "Phạm vi", "Ghi chú"]`; rows:
  - "LAN": `["Khu vực địa lý giới hạn (1 tòa nhà/văn phòng)", "WLAN = LAN không dùng dây vật lý"]`
  - "MAN": `["Quy mô đô thị", "Nối nhiều LAN trong một thành phố"]`
  - "WAN": `["Khu vực địa lý rộng lớn", "Có thể trải nhiều thành phố/quốc gia"]`
  - "PAN": `["Không gian làm việc cá nhân", "Nối thiết bị quanh một người, có dây & không dây"]`
- **keyTerms:** LAN, WLAN, MAN, WAN, PAN.

#### s12 — Client/server vs Peer-to-peer
- **comparisonBlock** "Network architecture" — columns `["Tiêu chí", "Client/server", "Peer-to-peer (P2P)"]`; rows:
  - "Vai trò máy": `["Có server trung tâm phục vụ các client", "Các máy ngang hàng, vừa cấp vừa dùng tài nguyên"]`
  - "Quản lý": `["Tập trung, dễ kiểm soát & bảo mật", "Phân tán, đơn giản, ít chi phí server"]`
  - "Phù hợp": `["Tổ chức cần kiểm soát, dữ liệu chung lớn", "Nhóm nhỏ, chia sẻ trực tiếp"]`
- **keyTerms:** client/server network, peer-to-peer network, network architecture.

#### s13 — Communications software
- **calloutBlock** `"note"` "3 việc của communications software": "Programs/apps giúp: (1) thiết lập kết nối tới máy/thiết bị/mạng khác; (2) quản lý việc truyền data, instructions, information; (3) cung cấp giao diện để người dùng giao tiếp với nhau."
- **keyTerms:** communications software.

#### s14 — Network communications standards & protocols
- **comparisonBlock** "Chuẩn & giao thức mạng" — columns `["Standard/Protocol", "Đặc trưng"]`; rows:
  - "Ethernet": `["Không có máy trung tâm điều khiển; mỗi node tự quyết khi nào truyền"]`
  - "Token ring": `["Các máy chia sẻ/chuyền một tín hiệu đặc biệt (token) để được phép truyền"]`
  - "TCP/IP": `["Định nghĩa cách định tuyến message (data) từ đầu này tới đầu kia của mạng"]`
  - "Wi-Fi": `["Mọi mạng theo chuẩn 802.11 — quy định 2 thiết bị không dây giao tiếp qua sóng"]`
  - "LTE": `["Chuẩn truyền tế bào tốc độ cao bằng broadcast radio cho mobile"]`
  - "Bluetooth / UWB": `["Sóng radio tầm ngắn truyền dữ liệu giữa thiết bị; UWB tốc độ cao hơn"]`
  - "IrDA / RFID / NFC": `["IrDA: hồng ngoại. RFID: sóng radio đọc tag gắn vật/người/động vật. NFC: dựa trên RFID, tầm rất gần"]`
- **keyTerms:** Ethernet, TCP/IP, Wi-Fi (802.11), Bluetooth, RFID, NFC.

#### s15 — Communications lines
- **comparisonBlock** "Communications lines" — columns `["Đường truyền", "Đặc điểm"]`; rows:
  - "Dedicated line": `["Kết nối luôn-bật giữa hai điểm cố định"]`
  - "Cable / FTTP": `["Cable Internet qua mạng cáp; FTTP = cáp quang tới tận nơi"]`
  - "DSL / ADSL": `["DSL trên đường điện thoại; ADSL có tốc độ tải xuống nhanh hơn tải lên"]`
  - "ISDN": `["Đường số truyền thoại+dữ liệu trên dây điện thoại đồng"]`
  - "T-carrier / ATM": `["T-carrier: đường thuê tốc độ cao; ATM: chuẩn chuyển mạch gói tốc độ cao"]`
- **keyTerms:** dedicated line, DSL, ADSL, ISDN, T-carrier, ATM.

#### s16 — Communications devices
- **flowBlock** `s16` "Thiết bị nối mạng tại gia/văn phòng" layout `horizontal`, nodes:
  - `s16_modem` "Broadband modem" — "Gửi/nhận dữ liệu tới đường số (cable modem / DSL modem); wireless modem dùng mạng nhà mạng để nối Internet không dây."
  - `s16_router` "Router" — "Nối nhiều máy/router và truyền dữ liệu tới đúng đích trên mạng; biến thể: wireless/broadband router."
  - `s16_wap` "Wireless access point (WAP)" — "Điểm trung tâm cho thiết bị truyền dữ liệu không dây với nhau hoặc tới mạng có dây."
  - `s16_switch` "Hub / Switch" — "Điểm tập trung cáp trong mạng."
  - `s16_nic` "Network card" — "Cho máy/thiết bị chưa có sẵn năng lực mạng truy cập được mạng."
  - edges: `s16_modem→s16_router` label "vào mạng", `s16_router→s16_wap` label "phát Wi-Fi", `s16_router→s16_switch` label "nối có dây", `s16_switch→s16_nic` label "tới máy". caption: "Đường đi điển hình: Internet → modem → router → (WAP không dây / switch có dây) → thiết bị."
- **keyTerms:** broadband modem, wireless modem, wireless access point (WAP), router, network card, hub/switch.

#### s17 — Transmission media (physical + wireless)
- **calloutBlock** `"key"` "Bandwidth & Latency": "Transmission media mang ≥1 tín hiệu; broadband media truyền nhiều tín hiệu cùng lúc. Bandwidth = lượng dữ liệu truyền được. Latency = thời gian tín hiệu đi từ điểm này tới điểm khác — độ trễ, càng thấp càng tốt."
- **comparisonBlock** "Physical transmission media" — columns `["Loại cáp", "Đặc điểm"]`; rows:
  - "Twisted-pair": `["Cặp dây đồng xoắn; rẻ, phổ biến (điện thoại, Ethernet)"]`
  - "Coaxial": `["Dây đồng có lớp chắn; chống nhiễu tốt hơn twisted-pair"]`
  - "Fiber-optic": `["Sợi thủy tinh truyền ánh sáng; băng thông rất cao, chống nhiễu, đường dài"]`
- **comparisonBlock** "Wireless transmission media" — columns `["Loại", "Đặc điểm"]`; rows:
  - "Broadcast radio": `["Phát tín hiệu radio qua không khí trên khoảng cách dài"]`
  - "Cellular radio": `["Dạng broadcast radio cho mobile communications"]`
  - "Microwave": `["Sóng radio truyền tốc độ cao theo đường thẳng (line-of-sight)"]`
  - "Communications satellite": `["Trạm vũ trụ nhận sóng microwave từ trạm mặt đất, khuếch đại & phát lại trên vùng rộng"]`
  - "GPS": `["Hệ định vị: receiver mặt đất phân tích tín hiệu vệ tinh để xác định vị trí địa lý"]`
- **keyTerms:** bandwidth, latency, twisted-pair cable, coaxial cable, fiber-optic cable, microwave, communications satellite, GPS.

---

## 4. Quiz (8 câu — stem/options tiếng Anh, rationale/takeaway tiếng Việt)

Mỗi câu: `id`, `stem`, 4 `options` (mỗi option có `rationale` cho cả đúng & sai — bẫy có chủ đích), `difficulty`, `conceptTested`, `takeaway`. Gợi ý concept (Codex soạn đủ 4 option + rationale):

1. **q01** (basic) — *ARPANET's two original goals.* conceptTested: "Mục tiêu gốc của ARPANET". Đáp án đúng: share information across locations **+** keep functioning if part of the network is destroyed. Bẫy: chọn chỉ 1 mục tiêu, hoặc "to create the World Wide Web" (WWW ra đời 1990, sau).
2. **q02** (basic) — *IP vs domain vs DNS.* Đúng: "A DNS server translates a domain name into its IP address." Bẫy: đảo vai trò IP↔domain; cho rằng browser tự dịch.
3. **q03** (intermediate) — *WWW vs Internet.* Đúng: WWW là tập hợp webpage chạy trên Internet; Internet là hạ tầng mạng. Bẫy: coi hai cái là một; gán phát minh Internet cho Berners-Lee (ông phát minh WWW 1990).
4. **q04** (intermediate) — *Advantages of a network.* Chọn lợi ích KHÔNG nằm trong 5 cái sách nêu (vd "eliminating the need for software" sai) / hoặc chọn đúng "transfer funds". Bẫy bám đúng danh sách 5 advantages.
5. **q05** (intermediate) — *LAN vs MAN vs WAN vs PAN.* Đúng: WAN phủ vùng địa lý rộng; LAN giới hạn. Bẫy: đổi chỗ MAN/WAN; coi WLAN là loại riêng về phạm vi (WLAN chỉ là LAN không dây).
6. **q06** (intermediate) — *Ethernet vs TCP/IP.* Đúng: Ethernet = chuẩn không có máy trung tâm điều khiển truy cập; TCP/IP = giao thức định tuyến message. Bẫy: gán định tuyến cho Ethernet.
7. **q07** (basic) — *Router vs hub/switch vs modem.* Đúng: router truyền dữ liệu tới đúng đích trên mạng / nối nhiều mạng; bẫy: nhầm với modem (digital↔đường số) hoặc hub/switch (điểm tập trung cáp).
8. **q08** (advanced) — *Chọn transmission media / connection cho tình huống business.* Vd: doanh nghiệp cần băng thông cao, đường dài, chống nhiễu → fiber-optic. Bẫy: twisted-pair (rẻ nhưng băng thông thấp), satellite (trễ cao). takeaway nhấn cân bandwidth–chi phí–độ tin cậy (đúng lens).

---

## 5. Verify (Codex chạy)

```bash
npx tsc --noEmit
```
- Phải pass (0 error).
- Kiểm `comparisonBlock`: mọi row `cells.length === columns.length - 1`.
- Kiểm flow: mọi `edges.from/to` tồn tại trong nodes của cùng block; mọi node id dùng `_`.
- Sau khi tsc pass: render-check route `/digital-technology-business/topic-03` (Codex), xác nhận knowledgeMap + 17 section + quiz hiển thị; báo Chaliyah. **KHÔNG commit.**
