# TASK: Vá docs/RUBRIC.md — vòng 3: thêm tiêu chí I (Wayfinding)

Đọc @docs/RUBRIC.md và @docs/specs/ob-ux-walkthrough.md (báo cáo cold
walkthrough OB, nguồn phát sinh tiêu chí này).

Đây KHÔNG phải yêu cầu review — thay đổi đã được chẩn đoán và duyệt.
Việc của bạn là thực thi đúng phạm vi dưới đây.

Nguyên tắc bắt buộc:
- Bật Plan Mode. Trình diff dự kiến cho TỪNG mục trước khi ghi file.
- Thêm ĐÚNG MỘT tiêu chí I với 3 sub-check — KHÔNG tách thành nhiều
  tiêu chí, KHÔNG thêm sub-check ngoài danh sách.
- Tiêu chí I phải tuân thủ TOÀN BỘ cấu trúc hiện hành của §3:
  mỗi sub-check khai báo đơn vị đo + n điển hình, đủ 3 bậc
  Đạt / Đạt một phần / Thiếu, ngưỡng theo công thức T(n) ở §2,
  mức tiêu chí = min(các sub-check). Không tạo ngoại lệ.
- KHÔNG sửa nội dung tiêu chí A–H. KHÔNG đổi ngưỡng nào đang có.

---

## MỤC 1 — Thêm tiêu chí I vào §3

### I — Wayfinding (điều hướng cho người mới)

**Căn cứ:** cold walkthrough 2026-07-21 cho thấy 8/9 finding không có
chỗ đứng trong A–H. Toàn bộ đều đo được kiểu presence/count từ
artifact — tức NẰM TRONG giới hạn phạm vi §1 đã khai ("đo sự hiện
diện, cấu trúc, chất-lượng-hình-thức"), chỉ là vùng phạm vi chưa có
tiêu chí nào đứng. Đây không phải nới phạm vi.

**Nội dung 3 sub-check:**

**I1 — Điều hướng tuần tự.** Mỗi topic (trừ topic cuối) phải có
next-link ở CUỐI trang (sau quiz): trỏ đúng topic kế theo thứ tự,
render trên cả desktop lẫn mobile.
- Đơn vị đo: topic. n điển hình: ~13/môn. Ngưỡng: T(n).
- Cách đo: script kiểm sự tồn tại + đích đến của next-link trong
  layout topic; mobile kiểm bằng việc element không bị giới hạn
  trong component chỉ render đầu trang.

**I2 — Điểm vào và findability.** Hai vế:
(a) Trang môn có CTA "bắt đầu học" trỏ topic đầu tiên, đứng TRƯỚC
    các khối luyện tập (ôn tập tổng hợp, mini-case) trong thứ tự render.
(b) Từ trang môn, đường đến một KHÁI NIỆM CON bất kỳ (vd một keyTerm)
    tối đa 3 bước, không cần mở lần lượt từng topic để dò — tức phải
    tồn tại một bề mặt liệt kê khái niệm con ở mức môn (index/mục lục
    khái niệm), hoặc chip/map có detail liệt kê keyTerms của topic.
- Đơn vị đo: (a) binary theo môn; (b) đo trên sample 5 keyTerm
  chọn ngẫu nhiên trải đều các topic, đếm số keyTerm vượt 3 bước.
- Ngưỡng: (a) không có CTA = sub-check I2 tối đa Đạt một phần;
  (b) theo T(n) với n = 5 sample → T=1: Đạt = 0 keyTerm vượt,
  Đạt một phần = 1, Thiếu = ≥2. Mức I2 = min(a, b).

**I3 — Nhất quán label.** Ba vế đếm chung một đơn vị "xung đột":
(a) một đơn vị nội dung chỉ có MỘT tên trên cùng màn hình
    (vd không được vừa "Topic" vừa "Chương");
(b) UI một ngôn ngữ nhất quán — đếm label tiếng Anh lạc giữa UI
    tiếng Việt (trừ English technical terms của NỘI DUNG học,
    vd tên lý thuyết, thuật ngữ chuyên môn — chúng không tính);
(c) copy hướng người học — đếm đoạn copy dành cho developer/người
    soạn render ra màn hình user.
- Đơn vị đo: cặp xung đột / label lạc / đoạn copy sai đối tượng,
  đếm trên toàn bộ màn hình user-facing của môn. n điển hình:
  toàn môn. Ngưỡng: T(n) với n = tổng label được kiểm (báo kèm n).
- Cách đo: (a)(c) chấm tay có checklist; (b) script grep +
  rà tay loại trừ technical terms. Ghi rõ trong phần "Cách đo"
  rằng (a)(c) là chấm tay — chưa chấm tay → I3 = UNCERTAIN,
  không suy từ script.

**Giới hạn của I (ghi rõ trong tiêu chí):** I đo TÍN HIỆU điều hướng
tồn tại và nhất quán trong artifact. I KHÔNG đo hành vi thật của
người dùng (họ có nhìn thấy, có bấm không) — phần đó thuộc kiểm chứng
điều kiện đủ ngoài rubric (§1). Finding từ walkthrough mô phỏng chỉ
là nguồn phát sinh tiêu chí, không phải bằng chứng chấm điểm.

---

## MỤC 2 — KHÔNG đưa vào rubric (ghi backlog thay vì tiêu chí)

Thêm vào cuối file (hoặc backlog hiện có) mục ghi chú:
- Search toàn văn: là quyết định FEATURE tốn công build, chưa cam kết
  → không đưa vào rubric. Khi nào build xong mới cân nhắc thành
  sub-check của I2.
- Dead code phát hiện từ walkthrough (route app/chapters/*, helper
  placeholder không dùng): việc dọn dẹp, không phải tiêu chí.

---

## MỤC 3 — Cập nhật các phần liên quan

a) §1 giới hạn phạm vi: thêm MỘT câu xác nhận wayfinding thuộc phạm
   vi "sự hiện diện/cấu trúc" đã khai — để chặn tranh cãi về sau.
b) §4 đầu ra bắt buộc: bảng 8 tiêu chí → bảng 9 tiêu chí (A–I).
c) §5 Changelog: thêm dòng hôm nay — "Thêm tiêu chí I (Wayfinding),
   3 sub-check I1/I2/I3, phát sinh từ cold walkthrough OB 2026-07-21;
   8/9 finding nằm ngoài A–H. Search toàn văn để backlog."
d) Ghi rõ: các bản đánh giá cũ (nếu có) thành STALE theo quy tắc
   stamp phiên bản đã có.

---

## VIỆC CUỐI — regression check, không được bỏ

Chạy lại 6 check lint trên TOÀN BỘ rubric sau khi thêm I (không chỉ
trên tiêu chí mới), báo kết quả dạng bảng, KHÔNG tự sửa nếu FAIL:
1. Orphan sub-check (định nghĩa ở Nội dung mà không có ngưỡng) = 0
2. Mọi sub-check đủ 3 bậc = PASS
3. Ô ngưỡng ghép nhiều sub-check bằng "và"/"hoặc" = 0
   (lưu ý: I2 mức = min(a,b) là hợp lệ vì theo cấu trúc min;
   ghép trong MỘT Ô NGƯỠNG mới là vi phạm)
4. Bộ số liệu khiến 2 mức cùng fire hoặc không mức nào fire = 0
5. Mọi sub-check khai báo đơn vị đo + n điển hình = PASS
6. Phụ thuộc vòng chưa ghi cách xử lý khi dependency thiếu = 0
   (kiểm riêng: I2b tham chiếu keyTerms — thuộc tiêu chí A; ghi rõ
   topic thiếu keyTerms thì sample I2b xử lý thế nào)

Nếu file audit/rubric_lint tồn tại: chạy nó thay cho check tay và
dán output. Nếu chưa tồn tại: check tay như trên, và ghi chú cuối
báo cáo rằng script lint vẫn còn nợ.
