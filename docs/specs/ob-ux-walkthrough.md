# Báo cáo Cold Walkthrough — OB, tái dựng từ source

> Task: `docs/prompts/ux-walkthrough.md` — mô phỏng người CHƯA TỪNG học Organizational Behavior, lần đầu mở site, tái dựng hành trình thuần từ source code (không browser). Chỉ báo cáo, không sửa.
>
> **Ngày chấm:** 2026-07-21 · **Rubric:** `docs/RUBRIC.md` (changelog mới nhất 2026-07-20) · **Phương pháp:** tái dựng màn hình từ JSX theo đúng thứ tự render, chỉ dùng label/text hiển thị cho user; grep xác nhận href/label; không bundle (walkthrough tĩnh, không đo số liệu content).

## Hành trình 1 — Học tuần tự (từ `/` đến bắt đầu Topic 0)

**Màn hình 1 — `/`.** Trên màn hình có các lựa chọn: nav trên cùng ["Learning Hub học theo bản chất", "Chọn môn", "Managerial"]; heading "Chọn môn học, rồi đi theo từng topic."; mục "Môn học (4)" với 4 card theo thứ tự *Managerial Accounting → Digital Technology in Business → Manufacturing Systems → **Organizational Behavior*** (OB nằm **cuối**), mỗi card có "x/y ready" + subtitle + "Open subject". Người mới sẽ chọn card **Organizational Behavior** vì title trùng đúng tên môn họ cần *(CHẮC: label tồn tại — `app/page.tsx:43`; SUY DIỄN: họ quét grid tới card cuối)*. → **Bước 1**.

**Màn hình 2 — trang môn OB.** Thứ tự render (`app/[subject]/page.tsx`): "← Chọn môn" → "13/13 ready" → H1 → subtitle → **"Bản đồ môn học"** (4 nhóm card, 13 chip T0–T12, caption cuối sơ đồ ghi "Bấm chip để xem bản chất topic và mở trang topic") → **"Chuỗi khái niệm"** (4 flow diagram) → card **"Ôn tập tổng hợp (interleaved)"** → card **"Mini-case tổng hợp (case method)"** → cuối cùng mới là **danh sách 13 topic** ("Topic 0 / Topic 00 — Introduction to Organizational Behavior / Hoàn thiện"…). Người mới muốn "bắt đầu học" phải cuộn qua bản đồ + 4 diagram + 2 card luyện tập rồi mới gặp danh sách topic; **không có CTA "Bắt đầu học"**. Hai đường vào Topic 0: chip "T0 · Introduction to OB" (2 click: chip → "Mở topic") hoặc item danh sách (1 click). Người mới sẽ chọn item **"Topic 00 — Introduction to Organizational Behavior"** vì có số 0 + chip "Hoàn thiện" *(SUY DIỄN: giữa 6 khối ngang hàng, không khối nào tự nhận là "điểm bắt đầu" — điểm rối, chưa tới mức ĐOÁN vì label Topic 00 tự giải thích)*. → **Bước 2**.

**Màn hình 3 — `/organizational-behavior/topic-00`.** Bắt đầu học được: "Bản chất chương" → knowledge map → "Mục tiêu học" → sections → "End-of-Chapter Questions".

**Kết quả: 2 bước chuyển trang, 0 BẾ TẮC, 0 ĐOÁN bắt buộc.** Điểm thừa: đường qua chip bản đồ tốn thêm 1 click so với danh sách; danh sách topic (thứ user tuần tự cần nhất) đứng SAU 5 khối khác.

## Hành trình 2 — "Mai thi Motivation"

Từ `/`: **không có ô search nào trong toàn app** (CHẮC: grep `type="search"`/`placeholder=` toàn `app/` = 0 match). Đường đi: OB card (bước 1) → trang môn: chữ "Motivation" xuất hiện 4 chỗ nhìn thấy được — subtitle môn, chip **"T6 · Motivation"** trong Bản đồ môn học, node "Motivation (T6)" trong chuỗi khái niệm, item **"Topic 06 — Motivation"** trong danh sách → vào topic-06 (bước 2). Luyện câu hỏi: (a) cuối topic-06 có "End-of-Chapter Questions" — 0 bước thêm nhưng phải cuộn hết trang; (b) quay lại trang môn → "Ôn tập tổng hợp" → màn hình **"Chọn nội dung ôn tập"** có checkbox từng topic → tick riêng "Topic 06 — Motivation" + "Cỡ phiên" → "Bắt đầu ôn" (2 bước thêm).

**Kết quả: 2 bước tới đúng nội dung — có đường tắt tốt (chip map + tên topic chứa đúng keyword).** Nhưng có **1 ĐOÁN thật**: card "Ôn tập tổng hợp (interleaved)" mô tả *"Trộn N câu từ 13 topic — luyện như đề thi thật"* — mô tả nói **ngược** nhu cầu "chỉ luyện Motivation"; khả năng tick 1 topic duy nhất chỉ lộ ra SAU khi đã click vào. Và mục lục chỉ tồn tại ở **mức topic**: keyword mức khái niệm con ("Maslow", "expectancy theory") không có đường nào ngoài mở từng topic để dò (chip map có detail = bigIdea, không liệt kê khái niệm con).

## Trả lời 5 câu

1. **Số bước:** cả 2 hành trình = 2 bước chuyển trang tới nội dung. Bước thừa: đường chip bản đồ tốn 2 click/1 topic; hành trình 2 nếu muốn luyện kiểu trộn phải vòng: topic → back trang môn → ôn tập (vòng 2 trang).
2. **Thứ tự đọc:** có số thứ tự ở 3 nơi (list "Topic 0–12", số trong rail "Các chương", nhãn "T0–T12" trong map) — đủ suy ra thứ tự. Nhưng **không có** progress tracking, không có nút "tiếp theo", không dòng nào nói "học từ Topic 0 trước" — user tự suy từ con số (suy diễn hợp lý nhưng là suy diễn).
3. **Label không tự giải thích** — xem bảng dưới (finding #1, #2, #4, #6, #7).
4. **Tín hiệu đi tiếp sau topic 1:** cuối trang topic chỉ có quiz → "Nguồn: …" → **hết, không có link "Topic tiếp theo"**. Tín hiệu duy nhất là ChapterRail sticky bên trái (desktop) với topic hiện tại highlight — user phải tự click số tiếp theo. Mobile tệ hơn: rail là nút "Chương & mục lục" nằm ở **đầu trang** — làm xong quiz ở cuối trang thì trong viewport không còn tín hiệu điều hướng nào.
5. **Hành trình 2:** 2 bước tới nội dung; đường tắt = chip "T6 · Motivation" trong bản đồ (caption có hướng dẫn bấm chip) hoặc quét danh sách topic. Tới chỗ luyện riêng Motivation: +2 bước và phải "khám phá ngầm" checkbox trong trang Ôn tập.

## Bảng finding

| # | Finding | Loại | Bằng chứng (file + label nguyên văn) | Rubric |
|---|---|---|---|---|
| 1 | Nav toàn cục ghim link "Managerial" — người mới không biết đó là gì; OB không có link tương đương dù là môn 13/13 ready | ĐOÁN | `app/components/SiteNav.tsx:15-17` — label "Managerial" | RUBRIC KHÔNG COVER |
| 2 | Hero trang chủ chứa copy dành cho developer, vô nghĩa với người học | Label mơ hồ | `app/page.tsx:18-19` — "Thêm môn mới chỉ cần thêm module dữ liệu và đăng ký vào subject registry." | RUBRIC KHÔNG COVER |
| 3 | Không có CTA "bắt đầu học"; danh sách topic đứng SAU bản đồ + 4 diagram + 2 card luyện tập — card hành động đầu tiên user gặp là quiz trộn (thứ người chưa học chưa dùng được) | Thiếu tín hiệu | `app/[subject]/page.tsx:46-163` — thứ tự JSX: "Bản đồ môn học" → "Chuỗi khái niệm" → "Ôn tập tổng hợp (interleaved)" → "Mini-case tổng hợp (case method)" → danh sách topic | RUBRIC KHÔNG COVER (E1 chỉ đo map *tồn tại*) |
| 4 | Card ôn tập mô tả ngược nhu cầu luyện-theo-topic; khả năng tick 1 topic bị giấu sau click | ĐOÁN | `app/[subject]/page.tsx:101-107` "Ôn tập tổng hợp (interleaved)" + "Trộn … câu từ … topic — luyện như đề thi thật." vs `app/components/CumulativeQuiz.tsx:385` "Chọn nội dung ôn tập" | RUBRIC KHÔNG COVER (H1 đo breakdown/retry, không đo discoverability) |
| 5 | Hết topic không có link "Topic tiếp theo"; mobile cuối trang không còn tín hiệu điều hướng nào | Thiếu tín hiệu | `app/[subject]/[slug]/page.tsx:207-218` — sau "End-of-Chapter Questions" chỉ còn "Nguồn: …"; `ChapterRail.tsx:103-110` nút "Chương & mục lục" chỉ render đầu trang | RUBRIC KHÔNG COVER |
| 6 | Cùng 1 đơn vị bị gọi 2 tên trên cùng màn hình: trang ghi "Topic N" nhưng rail ghi "Các chương"/"Chương & mục lục", khối bigIdea ghi "Bản chất chương" | Label mơ hồ | `app/[subject]/[slug]/page.tsx:78` "Topic {order}" vs `ChapterRail.tsx:45` "Các chương", `:109` "Chương & mục lục", `BigIdeaModel.tsx:72` "Bản chất chương" | RUBRIC KHÔNG COVER |
| 7 | Heading quiz tiếng Anh + dùng "Chapter" cho môn tính bằng Topic; tương tự "Open subject", "x/y ready" giữa UI tiếng Việt | Label mơ hồ | `app/[subject]/[slug]/page.tsx:209` "End-of-Chapter Questions"; `app/page.tsx:41,48` "ready", "Open subject" | RUBRIC KHÔNG COVER |
| 8 | Không có search / index khái niệm con — nhu cầu mức khái niệm ("Maslow") phải mở từng topic dò | Thiếu tín hiệu | grep toàn `app/`: không có `type="search"`/input tìm kiếm; mục lục section chỉ hiện trong rail SAU khi vào topic (`ChapterRail.tsx:80-95` "Mục lục") | RUBRIC KHÔNG COVER |
| 9 | Label trùng lặp trong list topic: "Topic 6" (dòng nhỏ) + "Topic 06 — Motivation" (heading) đọc thành "Topic 6 / Topic 06 — Motivation" | Label mơ hồ | `app/[subject]/page.tsx:140-142` + `content/organizational-behavior.ts:6374` | RUBRIC KHÔNG COVER |

## Nhóm RUBRIC KHÔNG COVER — ứng viên tiêu chí mới (backlog rubric)

8/9 finding không có chỗ đứng trong rubric A–H, vì §1 rubric tự giới hạn "đo sự hiện diện, cấu trúc, chất-lượng-hình-thức" của nội dung — toàn bộ **wayfinding** nằm ngoài. Cụm ứng viên:

- **(I) Điều hướng tuần tự** — mỗi topic có next-link + trang môn có CTA bắt đầu (finding 3, 5).
- **(II) Findability** — đường đến khái niệm con ≤ N bước, không cần mở từng topic (finding 4, 8).
- **(III) Nhất quán label** — 1 đơn vị 1 tên, 1 ngôn ngữ UI, copy hướng người học (finding 1, 2, 6, 7, 9).

## Điểm CHẮC đáng khen

Không có BẾ TẮC nào (mọi màn hình có đường lui); course map chip có href tới đủ 13 topic + caption tự hướng dẫn cách dùng; trang ôn tập có chọn topic + cỡ phiên đúng nhu cầu thi.

## Ghi chú ngoài phạm vi (không sửa)

- Route `app/chapters/*` vẫn tồn tại nhưng không còn label nào render trỏ tới (grep `/chapters` trong `app/` = 0 match) — dead code, không ảnh hưởng user vì không nhìn thấy.
- Helper `placeholder` trong `content/organizational-behavior.ts:63-80` không còn topic nào dùng.
