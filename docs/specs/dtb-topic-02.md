# Spec chương — DTB Topic 02: Computer Hardware & Software

> **File luật áp dụng:** `docs/specs/workflow-soan-mon-moi.md` + `docs/specs/codex-handoff.md` + `docs/specs/rich-teaching-mode.md`.
> **Executor đọc trước:** 2 file luật trên + `content/types.ts` (chỉ đọc) + object `topic01` trong `content/dtb.ts` làm mẫu map spec → object.

---

## 1. Header — Nguồn

- **Slide nguồn (chuẩn lý thuyết, DTB không có sách giáo trình):**
  - `Topic 02-1 Hardware Software.pdf` (95 slide) — Part 2-01: Hardware.
  - `Topic 02-2 Hardware Software.pdf` (86 slide) — Part 2-02: Software.
  - Đường dẫn kho: `C:\Users\mnhaajt\OneDrive\Desktop\Năm học HCMUT\K261\Digital Technology in Business\` (memory `nguon-hoc-lieu-dtb`).
- **Quiz nguồn:** `quiz-digi.pdf` — QUIZ 2 (Software) + QUIZ 3 (Hardware). KHÔNG bịa câu/đáp án; giữ nguyên wording stem/options.
- **Chuẩn áp dụng:** ngôn ngữ VI + term EN (quiz stem/options = EN), rich teaching mode bắt buộc, flow layout chỉ `horizontal`/`tree`.

---

## 2. Meta

- `slug`: `"topic-02"` (thay placeholder order 2 hiện có).
- `order`: `2`.
- `title`: `"Topic 02 — Computer Hardware & Software"`.
- `status`: `"draft"` (executor để draft; đầu não chuyển `ready` sau verify 2 lớp).
- `bigIdea` (gợi ý, executor giữ nguyên ý — có thể tinh chỉnh chữ):
  > "Bạn — future business manager — không chế tạo máy tính, nhưng bạn **quyết định mua/nâng cấp** (câu hỏi $20,000 cho phòng ban). Hardware + Software + Data chính là **mặt Technology** của five-component IS ở Topic 01. Hiểu HW (Moore's Law: faster–cheaper–smaller–greater capacity) và SW (từ machine language → OS → applications, và các cách phân phối software) giúp bạn ra quyết định đầu tư IT tốt hơn: biết cái gì đáng tiền, cái gì sắp lỗi thời, cái gì 'free' mà vẫn có chi phí ẩn."

### learningObjectives (9)
1. Đặt Hardware/Software/Data trong **ICT framework** và nối lại với **five-component IS** (Topic 01).
2. Diễn giải **brief history** + **Moore's Law** và hệ quả kinh tế (faster, cheaper, smaller, greater capacity; cost of data processing → ~0).
3. Phân loại **secondary storage** (HDD / SSD / optical) theo các tiêu chí: capacity, cost, access speed, interface, media, portability, removability.
4. Mô tả **system unit**: CPU = control unit + ALU; machine cycle; **cache** (L1/L2/L3); bus — và 4 yếu tố quyết định performance.
5. Phân biệt **memory**: RAM vs ROM, volatile vs non-volatile, **EEPROM**; đơn vị lưu trữ (bit/byte, KB/MB/GB/TB).
6. Nhận diện **input / output / communications devices** chính.
7. Phân biệt **machine / assembly / high-level language**; **compiler vs interpreter**.
8. Giải thích **OS** là gì + các chức năng (UI: GUI vs CLI; manage programs; manage memory/virtual memory; coordinate tasks; tools) và **types of OS** (desktop / server / mobile).
9. Phân loại **programs & apps** + các **hình thức phân phối software** (retail / custom / freeware / shareware / open source / public domain / web app); nhận diện productivity, graphics/media, communications apps, security & system tools.

---

## 3. knowledgeMap

- `engine: "flow"`, `layout: "tree"`, `collapsible: true`.
- `caption`: "Hai phần lớn — Part A Hardware, Part B Software; bấm từng chip để mở ý con."
- **Root:** `hwsw` — label "Hardware & Software", group `concept`, sectionId `s0`, detail: "HW+SW+Data là mặt Technology của five-component IS; bạn ra quyết định đầu tư IT."
- **Nhánh cấp 1** (mỗi node `parent: "hwsw"`), gợi ý id + sectionId:
  - `hist` "History & Moore's Law" (group `concept`, s1) — detail: máy tính ~75 năm; ENIAC 1946; xu hướng faster/cheaper/smaller.
  - `storage` "Secondary storage" (concept, s3) — HDD/SSD/optical; 7 tiêu chí đánh giá.
  - `cpu` "System unit / CPU" (concept, s4) — control unit + ALU, machine cycle, cache.
  - `mem` "Memory" (term, s5) — RAM/ROM, volatile/non-volatile, EEPROM, bit/byte.
  - `io` "Input / Output / Comms" (concept, s7) — devices nhập/xuất/truyền.
  - `lang` "Computer language" (concept, s9 → mở s9 + s9b) — machine→assembly→HLL; compiler vs interpreter.
  - `os` "Operating systems" (concept, s10) — chức năng OS + types.
  - `apps` "Programs & apps" (concept, s12) — phân phối software + loại ứng dụng.
- (Tuỳ chọn) thêm node cấp 2 dưới `cpu`, `os`, `apps` nếu map còn thưa — nhưng giữ ≤ ~14 node tổng để không rối.

---

## 4. Bối cảnh số liệu (VERIFIED — trích slide)

> Mọi số dưới đây lấy trực tiếp từ slide Topic 02-1/02-2. Executor KHÔNG thêm số ngoài danh sách này; thiếu thì để `[CẦN NGUỒN]`.

- **ENIAC**: first electronic computer, first run **February 1946**; ~**17,000 vacuum tubes**; ~**1,800 square feet**; ~**30 tons**; **150 kW** power; **5,000 cycles/second**. (02-1 slide 8–9) `VERIFIED`
- **UNIVAC I**: first commercial computer, **cir. 1955**. (02-1 slide 10) `VERIFIED`
- **Eras**: Mainframe 1950s → Rise of PC 1960s → Client/Server 1990s → Hosted environment 2000s → Beyond 2010. (02-1 slide 11) `VERIFIED`
- **IBM mainframe 1957**. (02-1 slide 12) `VERIFIED`
- **Moore's Law**: số transistor trên chip **gấp đôi mỗi 24 tháng**. (02-1 slide 16) `VERIFIED`
- **Samsung (Jan 2019)**: tiến trình **3 nm** (giảm từ 7nm, 5nm, 4nm); Moore's Law chậm lại nhưng chưa chết. (02-1 slide 19) `VERIFIED`
- **Cache**: fetch từ **L3 lâu gấp ~10 lần** L1; L1 nhỏ nhất/nhanh nhất/gần core nhất. (02-1 slide ~39) `VERIFIED`
- **Đơn vị**: byte = nhóm **8 bit**; KB (thousands) / MB (millions) / GB (billions) / TB (trillions). RAM điển hình **4–8 GB**; HDD điển hình **500 GB – 4 TB**. (02-1 slide 43–44) `VERIFIED`
- **SSD vs HDD**: số liệu so giá tham chiếu **June 2018** (enterprisestorageforum.com). Executor chỉ nêu định tính (SSD nhanh hơn, không bộ phận chuyển động; HDD rẻ hơn/GB) trừ khi cần con số → `[CẦN NGUỒN]`. (02-1 slide 33)
- **UNIX**: phát triển **đầu thập niên 1970s**; Linux là UNIX-based. (02-2 slide 34) `VERIFIED`
- **Machine instruction set**: máy tính hiện đại có ~**100–200 loại instruction**. (02-2 slide 3) `VERIFIED`

---

## 5. Sections (s0 → s15)

> Quy ước: mỗi section nêu **LO**, **blocks** cụ thể (loại + nội dung), **keyTerms** (định nghĩa trích slide vì không có glossary sách). Rich teaching mode: mỗi section ≥1 visual block, ≤1 visual nặng + ≤1 callout; bỏ `body` prose đặc khi đã có blocks. Edge label NGẮN. Flow chỉ `horizontal`/`tree`.

### PART A — HARDWARE

**s0 — Đặt vấn đề: ICT framework & câu hỏi $20,000** (LO1)
- `comparisonBlock("ICT framework — 3 mảnh", ["Hardware","Software","Data"], rows)`: Hardware = "the iron" (thiết bị hữu hình: input/output/secondary storage); Software = "the code" (chỉ thị bảo hardware làm gì); Data = số/thông tin mà máy tác động lên (do software dẫn dắt). Thêm dòng "mảng communication": HW = thiết bị trao đổi (cable/modem/network card), SW = chỉ thị cho thiết bị truyền, Data = thông tin truyền giữa các máy.
- `calloutBlock("key", "Nối lại với Topic 01", "...")`: HW/SW/Data chính là mặt Technology của five-component IS; bạn ra quyết định mua sắm IT (câu hỏi $20,000 cho phòng ban) → cần hiểu HW/SW/data communications.
- keyTerms: Hardware, Software, Data, ICT framework. (02-1 slide 6)

**s1 — Brief history & Moore's Law** (LO2)
- `flowBlock("s1","Từ mainframe đến hậu-2010","horizontal", nodes, edges)`: chuỗi Mainframe (1950s) → Rise of PC (1960s) → Client/Server (1990s) → Hosted (2000s) → Beyond 2010. Mỗi node `detail` ngắn. Edge không cần nhãn (chuỗi thời gian hiển nhiên) — hoặc nhãn năm rất ngắn.
- `calloutBlock("insight","Moore's Law & ý nghĩa kinh tế", "...")`: transistor gấp đôi mỗi 24 tháng → faster/more powerful, greater capacity, smaller/efficient, cheaper; hệ quả business: **cost of data processing tiến gần 0**; giới hạn tương lai (kích thước nguyên tử, tản nhiệt). Nhắc Samsung 3nm (Jan 2019).
- keyTerms: ENIAC, Moore's Law, transistor. examples: ENIAC (1946, 30 tons, 17,000 vacuum tubes). (02-1 slide 8–19)

**s2 — Computer hardware: bức tranh tổng** (LO1, LO6)
- `flowBlock("s2","Sơ đồ phần cứng cơ bản","horizontal" HOẶC "tree", nodes, edges)`: System unit (CPU) ở trung tâm; Input → System unit → Output; Secondary storage gắn vào; Network. Dùng để định vị các section sau. Nếu là quan hệ luồng dữ liệu thì cạnh CÓ nhãn ngắn ("nhập", "xuất").
- keyTerms: system unit, peripheral. (02-1 slide 20)

**s3 — Secondary storage: HDD vs SSD vs Optical** (LO3)
- `comparisonBlock("So sánh thiết bị lưu trữ thứ cấp", ["HDD","SSD","Optical (CD/DVD/Blu-ray)"], rows)`: cơ chế (đĩa kim loại quay + đầu đọc từ / EEPROM flash không chuyển động / phản xạ ánh sáng laser), tốc độ (chậm/nhanh nhất/chậm), giá-trên-GB (rẻ/đắt hơn/rẻ), tính bền/nhiệt. Hàng tiêu chí đánh giá: capacity, cost, access speed, interface, media, portability, removability.
- `calloutBlock("note","EEPROM nền tảng SSD/USB","...")`: SSD/USB flash dùng EEPROM (xoá-ghi bằng điện); SSHD = SSD thay HDD.
- keyTerms: HDD, SSD, optical drive, EEPROM, SSHD. (02-1 slide 21–33)

**s4 — System unit: CPU, machine cycle, cache** (LO4)
- `flowBlock("s4","Machine cycle","horizontal", nodes, edges)`: Fetch → Decode → Execute → Store (chuỗi). Kèm 2 node phụ Control Unit (điều phối) + ALU (tính toán/so sánh) — nếu thêm thì dùng `tree` với parent CPU; nếu chỉ machine cycle thì `horizontal`. **Chọn 1 layout, không trộn.**
- `calloutBlock("key","Cache & độ trễ","...")`: cache = bộ nhớ nhanh nhỏ gần CPU; đa cấp L1/L2/L3; L1 nhỏ-nhanh-gần core nhất; fetch từ L3 lâu ~10× L1.
- keyTerms: CPU, control unit, ALU, machine cycle, cache, bus. (02-1 slide 34–39)

**s5 — Memory & đơn vị lưu trữ** (LO5)
- `comparisonBlock("Phân loại memory", ["RAM","ROM","EEPROM"], rows)`: rewriteable (có/không/có bằng điện), volatile vs non-volatile (RAM volatile=dynamic; ROM non-volatile=static), vai trò. Thêm note bits & bytes: byte = 8 bit; KB/MB/GB/TB; RAM 4–8 GB, HDD 500 GB–4 TB.
- `calloutBlock("trap","Static/Dynamic ≠ trực giác","...")`: Static = non-volatile (giữ khi mất điện), Dynamic = volatile (mất khi tắt) — dễ nhầm.
- keyTerms: RAM, ROM, volatile, non-volatile, virtual memory (đặt đầy đủ ở s10), bit, byte. (02-1 slide 40–44)

**s6 — Yếu tố quyết định performance** (LO4)
- `flowBlock("s6","4 yếu tố performance","horizontal", nodes hub→4 nhánh)`: hub "System performance" → Processor (clock) speed / RAM speed & capacity / Bus speed & width / Cache capacity & speed. Hub→nhánh ≥4 → dùng `horizontal` (hub trái, nhánh cột phải), không nhãn cạnh (phân rã).
- `calloutBlock("insight","Tradeoffs — 'other things are never equal'","...")`: các yếu tố tương tác; thiết kế máy tính là bài toán đánh đổi; hiểu tradeoff → mua máy thông minh hơn.
- keyTerms: clock speed, bus, cache. (02-1 slide 36, 49)

**s7 — Input devices** (LO6)
- `comparisonBlock` HOẶC `flowBlock` nhóm input: Keyboard (ergonomic), Pointing (mouse/touchpad/trackball), Touch screen, Pen input (stylus/graphics tablet), Motion/Voice/Video (gesture, speech recognition, webcam, videoconference), Scanners & reading devices (flatbed scanner, OCR, OMR, bar code/QR, RFID, magstripe, MICR, data collection). Nếu flow: hub "Input" → các nhóm (`horizontal`).
- keyTerms: input, OCR, OMR, RFID, MICR, voice recognition. (02-1 slide 50–76)

**s8 — Output & communications devices** (LO6)
- `comparisonBlock("Output & Communications", ["Output","Communications"], rows)` hoặc 2 nhóm:
  - Output: display/LCD (chất lượng: resolution, response time, refresh rate, contrast, brightness); printers (non-impact: ink-jet/photo/laser/all-in-one/plotter; impact).
  - Communications devices: broadband modem (cable/DSL), wireless modem, wireless access point (WAP), router (+ wireless/broadband router), network card, hub/switch.
- keyTerms: non-impact printer, modem, WAP, router, network card, hub, switch. (02-1 slide 77–92)
- *(Lưu ý: chi tiết network/Internet để dành Topic 03; ở đây chỉ giới thiệu thiết bị.)*

### PART B — SOFTWARE

**s9 — Computer language: ML → Assembly → HLL** (LO7)
- `flowBlock("s9","Các cấp ngôn ngữ & dịch","horizontal", nodes, edges)`: Machine language (bit) → Assembly (gần English, cần Assembler) → High-level language (cần Compiler hoặc Interpreter). Cạnh CÓ nhãn ngắn: "assembler", "compiler/interp.".
- keyTerms: machine language, instruction set, assembly language, HLL. (02-2 slide 3–6)

**s9b — Compiler vs Interpreter** (LO7) — *tách khỏi s9 ở bước verify để giữ ≤1 heavy visual/section (theo convention `s7b` của topic01).*
- `comparisonBlock("Compiler vs Interpreter", ["Compiler","Interpreter"], rows)`: dịch toàn bộ HLL → object code chạy độc lập / dịch & chạy từng dòng, cần interpreter ở runtime (Cơ chế · Output · Tốc độ · Ví dụ).
- `calloutBlock("key","Compiler hay interpreter — ảnh hưởng gì tới business?","...")`: compiled (C/C++/Go) nhanh + không lộ source; interpreted (Python/Ruby/JS) dễ sửa + đa nền tảng nhưng cần runtime. Chọn ngôn ngữ = đánh đổi tốc độ · bảo mật mã nguồn · tốc độ phát triển.
- keyTerms: compiler, interpreter, source code, object code. (02-2 slide 6–8)

**s10 — OS là gì & các chức năng** (LO8)
- `flowBlock("s10","Chức năng của OS","horizontal", nodes hub→nhánh)`: hub "Operating System" → Start/shutdown · User interface · Manage programs · Manage memory · Coordinate tasks · Configure devices · Monitor performance · Establish Internet · File management · Update. Hub→≥5 nhánh → `horizontal`, không nhãn.
- `calloutBlock("key","GUI vs CLI & virtual memory","...")`: UI điều khiển cách nhập/hiển thị — GUI (menu/hình ảnh) vs command-line (gõ lệnh/keyword); virtual memory = phần storage đóng vai RAM phụ; **paging** = swap items giữa memory ↔ storage; single/multi tasking, foreground/background, single/multi user.
- keyTerms: operating system, user interface, GUI, command-line interface, multitasking, virtual memory, paging, performance monitor, user account. (02-2 slide 12–28)

**s11 — Types of OS: desktop / server / mobile** (LO8)
- `comparisonBlock("Phân loại OS", ["Desktop","Server","Mobile"], rows)`: Desktop = Windows, Mac OS (OS X), UNIX, Linux, Chrome OS; Server = Windows/OS X Server, UNIX, Linux (multiuser, network admin); Mobile (trên firmware) = Android (open source, Linux-based, Google), iOS (proprietary, Apple), Windows Phone (proprietary, Microsoft).
- `calloutBlock("note","Mở vs đóng","...")`: Linux/Android = open source (xem/sửa/phân phối lại code); iOS/Windows Phone = proprietary.
- keyTerms: desktop OS, server OS, mobile OS, open source, proprietary, firmware. (02-2 slide 30–40)

**s12 — Programs & apps + phân phối software** (LO9)
- `flowBlock("s12","Các hình thức phân phối software","horizontal", nodes hub→nhánh)` HOẶC `comparison`: Retail, Custom, Web app, Mobile app/Mobile web app, Shareware, Freeware, Open source, Public domain. Nêu định nghĩa ngắn từng loại.
- `calloutBlock("insight","'Free' không miễn phí hoàn toàn","...")`: open source = không hạn chế sửa/phân phối lại (Linux); freeware = miễn phí dùng nhưng không cho sửa code; public domain = hiến tặng tự do. Phân biệt program vs application vs system software.
- keyTerms: program, application, system software, retail/custom/shareware/freeware/open source/public domain software, web app. (02-2 slide 45–51)

**s13 — Loại ứng dụng: productivity / graphics / communications** (LO9)
- `comparisonBlock` hoặc `flowBlock` nhóm:
  - Productivity: word processing, presentation, spreadsheet, database, note taking, calendar/contact, project management, accounting, personal finance, legal, tax, document management, enterprise computing.
  - Graphics & media: CAD, desktop publishing, paint/image editing, photo editing, video/audio editing, multimedia & website authoring, media player, disc burning.
  - Communications: email, browsing, chat, blog, VoIP/Internet phone, instant/mobile messaging, videoconference, web feeds, file transfer.
- keyTerms: productivity application, software suite, CAD, website authoring, project management, spreadsheet. (02-2 slide 52–72)

**s14 — Security & system tools** (LO9)
- `comparisonBlock("Công cụ", ["Security tools","File/Disk/System tools"], rows)`:
  - Security: personal firewall, antivirus, spyware + spyware remover, adware + adware remover, anti-spam, web filtering, phishing filter, pop-up/pop-under blocker.
  - File/disk/system: file manager, search tool, image viewer, uninstaller, disk cleanup, disk defragmenter, screen saver, file compression, PC maintenance, backup & restore.
- `calloutBlock("realworld","Spyware vs Adware","...")`: spyware lén thu thập thông tin gửi ra ngoài; adware hiện quảng cáo banner/pop-up.
- keyTerms: firewall, antivirus, spyware, adware, disk defragmenter, backup/restore tool. (02-2 slide 73–84)

**s15 — Tổng kết Part 2: quay lại câu hỏi $20,000** (LO1, LO9)
- `calloutBlock("realworld","'Upgrade problem' — quyết định của YOU","...")`: khi mua laptop/desktop cân nhắc brand, processor/RAM/HDD/cache, display, wifi/bluetooth/camera/fingerprint, input/output/network devices. Gộp HW (input/output/process/storage) + SW (OS + applications) + Network → business implication cho quyết định đầu tư IT.
- *(Section chốt, có thể 1 callout + 1 flow nhỏ tóm "HW + SW + Data + Network → IT decision". Không nhồi.)*
- keyTerms: upgrade problem, total cost of ownership (nếu slide có; nếu không → bỏ). (02-2 slide 86)

---

## 6. Quiz bank (16 câu — VERBATIM từ quiz-digi.pdf)

> **Giữ NGUYÊN stem + options tiếng Anh.** `rationale` mỗi option = tiếng Việt + term EN theo khung **Cơ chế → Bẫy → Khóa**; đặt tên distractor theo khái niệm. `conceptTested` + `takeaway` do executor viết bám slide. Dưới đây ghi **đáp án đúng** + **bẫy từng distractor** để executor không bịa.

### Hardware (QUIZ 3)
- **q01** (basic) — "Which of the following is a small piece of semiconducting material, usually silicon, on which integrated circuits are etched?" a) system unit · b) computer port · c) **computer chip ✓** · d) mainboard. Bẫy: system unit = cả khối vỏ; port = điểm cắm; mainboard = bo mạch chứa chip.
- **q02** (basic) — "Which of the following is the component of the processor that directs and coordinates most of the operations in the computer?" a) **control unit ✓** · b) concatenation unit · c) compression unit · d) micro unit. Bẫy: ALU mới là tính toán; b/c/d là tên bịa.
- **q03** (intermediate) — "...a type of nonvolatile memory that can be erased electronically and rewritten. What did your instructor call this memory?" a) perm-memory · b) firewire · c) EM-ROM · d) **flash memory ✓**. Bẫy: firewire = chuẩn cổng; perm/EM-ROM = tên bịa; bản chất flash = EEPROM.
- **q04** (intermediate) — "Which of the following is true of SSDs compared to traditional hard disks?" a) lower storage capacities · b) generate more heat · c) **faster transfer rates ✓** · d) shorter life. Bẫy: SSD không bộ phận chuyển động → mát hơn, bền hơn, nhanh hơn; điểm yếu thật là giá/GB cao hơn (không có trong options).
- **q05** (basic) — "When you use hardware, in which gesture do you quickly touch and release one finger one time?" a) **tap ✓** · b) stretch · c) swipe · d) slide. Bẫy: stretch = phóng to; swipe/slide = vuốt.
- **q06** (intermediate) — "Which one is the key point you can infer from Moore's Law as a future business professional?" a) You care how fast of a computer your company can buy for $1,000 · b) IT development is slow · c) **The cost of data processing is approaching zero ✓**. Bẫy: a đảo trục (Moore's Law nói cùng giá thì năng lực tăng → chi phí xử lý/đơn vị giảm, không phải "quan tâm tốc độ"); b sai chiều.

### Software (QUIZ 2)
- **q07** (intermediate) — "Which language needs an interpreter to be able to run on the computer?" a) Machine language · b) Compilers · c) **High level language ✓** · d) Assembly language. Bẫy: machine language chạy trực tiếp; assembly cần assembler; compiler là chương trình dịch chứ không phải "ngôn ngữ"; HLL cần compiler HOẶC interpreter.
- **q08** (intermediate) — "In virtual memory, what is the term for the process of swapping items between memory and storage?" a) **paging ✓** · b) spacing · c) writing · d) reading. Bẫy: b/c/d là thao tác chung; thuật ngữ chuẩn = paging.
- **q09** (basic) — "Which of the following kinds of operating systems allow only one user to run one program or app at a time?" a) single user/single indexing · b) **single user/single tasking ✓** · c) single user/single throttle · d) single user/single function. Bẫy: a/c/d là tên bịa; "một việc một lúc" = single tasking.
- **q10** (basic) — "Which of the following is NOT a desktop operating system?" a) Mac OS · b) MS Windows · c) Chrome OS · d) **Google Android ✓**. Bẫy: Android là mobile OS; Chrome OS vẫn là desktop (Linux-based).
- **q11** (basic) — "Linux is an operating system... code is provided for use, modification, and redistribution. What kind of software is this?" a) **open source ✓** · b) upgradable · c) client/server · d) multitasking. Bẫy: client/server = kiến trúc mạng; multitasking = tính năng OS; upgradable = chung chung.
- **q12** (basic) — "A spreadsheet program would be an example of:" a) personal interest application · b) firmware · c) **productivity application ✓** · d) system software. Bẫy: firmware = phần mềm nhúng phần cứng; system software = OS/tiện ích; personal interest = game/giải trí.
- **q13** (intermediate) — "Which of the following programs allow designers to rotate designs of 3-D objects to view them from any angle?" a) **CAD ✓** · b) DTP · c) DTM · d) CAM. Bẫy: DTP = desktop publishing; CAM = sản xuất; DTM = tên bịa.
- **q14** (intermediate) — "What kind of software helps users of all skill levels create web pages that include graphics, video, audio, animation, and other special effects?" a) website management · b) website publishing · c) website editing · d) **website authoring ✓**. Bẫy: phân biệt authoring (tạo trang) vs editing/publishing/management.
- **q15** (intermediate) — "Which type of software has no restrictions from the copyright holder regarding modifications of the software's internal instructions and its redistribution?" a) shareware · b) custom software · c) **open source software ✓** · d) system software. Bẫy: shareware = dùng thử có hạn; custom = đặt riêng; open source khác freeware ở chỗ cho SỬA code.
- **q16** (basic) — "Which of the following are you, as a marketing manager, most likely to use to schedule the processes required in a new advertising campaign you are running?" a) calendar management · b) personal finance · c) software suite · d) **project management ✓**. Bẫy: calendar chỉ lịch hẹn; project management = plan/schedule/track/analyze events-resources-costs.

> **Số câu mục tiêu tối thiểu:** 16 (toàn bộ verbatim). Nếu muốn đủ độ phủ LO, executor CÓ THỂ đề xuất thêm câu tự soạn — nhưng phải đánh dấu rõ "tự soạn" và bám slide, KHÔNG trộn lẫn vào phần verbatim. Mặc định: chỉ 16 câu verbatim.

---

## 7. Lưu ý thực thi (Executor)

- **KHÔNG sửa `content/types.ts`.** Block kind hợp lệ: `prose | callout | diagram | comparison | calc | formula | figure`. CalloutKind: `insight | trap | key | brainstorm | realworld | note`. FlowNode.group: `purpose | lo | concept | term`.
- **Flow layout:** chỉ `"horizontal"` hoặc `"tree"`. Hub→≥5 nhánh (s6 4 nhánh cũng được) → `horizontal`. Phân rã cha→ít con → `tree` + set `parent`. Cạnh quan hệ/luồng (s2 nhập/xuất, s9 assembler/compiler) BẮT BUỘC nhãn ngắn; cạnh phân rã hub→nhánh không cần nhãn.
- **Edge label NGẮN** (≤ ~2 từ): "assembler", "compiler", "nhập", "xuất". Thuật ngữ dài để ở caption/detail.
- **Mỗi section ≤1 visual nặng + ≤1 callout.** Bỏ `body` prose khi đã có blocks; mọi node flow có `detail` + `sectionId`.
- **Ngôn ngữ:** lý thuyết/keyTerms/rationale = VI + term EN; quiz stem + options = EN nguyên văn.
- **Số liệu:** chỉ dùng số trong §4 (VERIFIED). Thiếu → `[CẦN NGUỒN]`, không tự điền (đặc biệt số giá SSD/HDD).
- **status** để `"draft"`. KHÔNG tự chuyển `ready`, KHÔNG commit/push.
- Thay object placeholder `topic-02` hiện tại bằng chapter thật; các topic khác giữ nguyên.

---

## 8. Coverage matrix (Lớp B — "không sót kiến thức")

> Đối chiếu slide × section dự kiến. Khi executor xong, đầu não rà lại cột "Có/Thiếu" trực tiếp trên content + slide trước khi chuyển `ready`. (Cập nhật trạng thái ở cột cuối khi audit.)

| # | Khái niệm/ví dụ trong slide | Nguồn slide | Section | Trạng thái |
|---|---|---|---|---|
| 1 | ICT framework: Hardware/Software/Data (+ communication) | 02-1 s6 | s0 | ⏳ |
| 2 | Câu hỏi $20,000 / IT conveyor belt | 02-1 s4–5 | s0,s15 | ⏳ |
| 3 | Brief history: ENIAC 1946, UNIVAC 1955, IBM 1957 | 02-1 s8–12 | s1 | ⏳ |
| 4 | Eras: mainframe→PC→client/server→hosted→beyond | 02-1 s11 | s1 | ⏳ |
| 5 | Moore's Law (24 tháng) + Samsung 3nm | 02-1 s16–19 | s1 | ⏳ |
| 6 | Hệ quả: faster/cheaper/smaller/greater capacity | 02-1 s18 | s1 | ⏳ |
| 7 | Sơ đồ phần cứng cơ bản | 02-1 s20 | s2 | ⏳ |
| 8 | Secondary storage: 7 tiêu chí đánh giá | 02-1 s21 | s3 | ⏳ |
| 9 | HDD (đĩa kim loại, đầu đọc từ, binary polarity) | 02-1 s24 | s3 | ⏳ |
| 10 | Optical drives (CD/DVD/Blu-ray, read-only/write-once/rewriteable) | 02-1 s26–28 | s3 | ⏳ |
| 11 | SSD/EEPROM, USB flash, SSHD | 02-1 s30 | s3 | ⏳ |
| 12 | SSD vs HDD | 02-1 s32–33 | s3 | ⏳ |
| 13 | System unit: CPU + Main Memory | 02-1 s34 | s4 | ⏳ |
| 14 | Control unit + ALU; machine cycle | 02-1 s37–38 | s4 | ⏳ |
| 15 | Cache L1/L2/L3 (L3 ~10× L1) | 02-1 s39 | s4 | ⏳ |
| 16 | RAM vs ROM, static/dynamic, volatile/non-volatile, EEPROM | 02-1 s40–41 | s5 | ⏳ |
| 17 | Bits & bytes, KB/MB/GB/TB, RAM 4–8GB, HDD 500GB–4TB | 02-1 s43–44 | s5 | ⏳ |
| 18 | Ports | 02-1 s48 | s2/s5 | ⏳ |
| 19 | 4 yếu tố performance + tradeoffs | 02-1 s36,49 | s6 | ⏳ |
| 20 | Input: keyboard (ergonomic) | 02-1 s53–56 | s7 | ⏳ |
| 21 | Pointing: mouse/touchpad/trackball | 02-1 s57–59 | s7 | ⏳ |
| 22 | Touch screen, pen input, graphics tablet | 02-1 s60–62 | s7 | ⏳ |
| 23 | Motion/voice/video, webcam, videoconference | 02-1 s63–70 | s7 | ⏳ |
| 24 | Scanners: OCR/OMR/bar code/QR/RFID/magstripe/MICR | 02-1 s71–76 | s7 | ⏳ |
| 25 | Output: display (chất lượng), printers (impact/non-impact) | 02-1 s78–80 | s8 | ⏳ |
| 26 | Comms devices: modem/WAP/router/network card/hub/switch | 02-1 s81–92 | s8 | ⏳ |
| 27 | Upgrade problem (factors) | 02-1 s94 | s15 | ⏳ |
| 28 | Machine language, instruction set (100–200), software programme | 02-2 s3 | s9 | ⏳ |
| 29 | Assembly language, assembler, source/object code | 02-2 s4–5 | s9 + s9b | ⏳ |
| 30 | HLL, compiler vs interpreter | 02-2 s6–7 | s9b | ⏳ |
| 31 | OS định nghĩa + bảng chức năng | 02-2 s12 | s10 | ⏳ |
| 32 | Sleep vs hibernate; start/shutdown | 02-2 s14–15 | s10 | ⏳ |
| 33 | UI: GUI vs command-line | 02-2 s16–17 | s10 | ⏳ |
| 34 | Manage programs: single/multi tasking, fore/background, single/multi user | 02-2 s18 | s10 | ⏳ |
| 35 | Memory mgmt + virtual memory (paging) | 02-2 s20 | s10 | ⏳ |
| 36 | Coordinate tasks, performance monitor, Internet, update, tools | 02-2 s21–26 | s10 | ⏳ |
| 37 | Server OS + network admin; user account/username/password | 02-2 s27–28 | s10/s11 | ⏳ |
| 38 | Desktop OS: Windows/Mac(OS X)/UNIX/Linux/Chrome OS | 02-2 s30–35 | s11 | ⏳ |
| 39 | Server OS; Mobile OS: Android/iOS/Windows Phone (firmware) | 02-2 s36–40 | s11 | ⏳ |
| 40 | Program vs application vs system software | 02-2 s45 | s12 | ⏳ |
| 41 | Software distribution: retail/custom/web/mobile/shareware/freeware/open source/public domain | 02-2 s48 | s12 | ⏳ |
| 42 | Productivity apps (13 loại) + thao tác chung | 02-2 s52–66 | s13 | ⏳ |
| 43 | Graphics & media software (CAD/DTP/photo/video/authoring/media player/disc burning) | 02-2 s67–70 | s13 | ⏳ |
| 44 | Personal interest + Communications applications | 02-2 s71–72 | s13 | ⏳ |
| 45 | Security tools (firewall/antivirus/spyware/adware/anti-spam/phishing/pop-up) | 02-2 s73–77 | s14 | ⏳ |
| 46 | File/disk/system tools (file mgr/search/image viewer/uninstaller/cleanup/defrag/compression/PC maint/backup-restore) | 02-2 s78–84 | s14 | ⏳ |
| 47 | Part 2 summary: $20,000 + business implication | 02-2 s86 | s15 | ⏳ |

**Quiz coverage:** 16/16 câu verbatim (q01–q16) — Hardware 6 (chip, control unit, flash/EEPROM, SSD, tap, Moore's Law), Software 10 (interpreter, paging, single tasking, desktop OS, open source ×2, productivity, CAD, website authoring, project management).
