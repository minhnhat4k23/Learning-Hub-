# TASK: Vá gap lint check #4 — tiêu chí H1 trong docs/RUBRIC.md

Bật Plan Mode. Trình diff trước khi ghi file.

## Nguyên nhân gap (pre-existing, không do patch I)

H1 có 3 chiều: route ôn tập chạy được / độ phủ topic được trộn /
breakdown + retry. Nhưng bảng ngưỡng chỉ phủ 2 chiều — case "chạy
được, đủ breakdown + retry, nhưng trộn <100% topic có quiz" không
khớp ô nào: không đủ Đạt (đòi trộn 100%), không khớp Đạt một phần
(chỉ nêu thiếu breakdown hoặc retry), không phải Thiếu (route sống).

Đây là lỗi "ô ngưỡng viết theo liệt kê thay vì theo cấu trúc" —
chiều coverage chưa được cấp thang riêng.

## Yêu cầu sửa

Tách H1 thành sub-check theo đúng cấu trúc min(sub-check) hiện hành
của rubric:

- **H1a — route ôn tập tồn tại và chạy được.** Binary. Không có =
  Thiếu; theo luật "vắng mặt kiểm chứng được = Thiếu, Thiếu ghi đè
  UNCERTAIN" thì H1a Thiếu kéo cả tiêu chí H xuống Thiếu.
- **H1b — độ phủ.** Đếm số topic CÓ QUIZ nhưng KHÔNG được trộn vào
  phiên ôn tập. Đơn vị = topic; n = số topic có quiz. Ngưỡng T(n):
  Đạt = 0 topic bị bỏ sót; Đạt một phần ≤ T(n); Thiếu > T(n).
- **H1c — breakdown kết quả theo topic.** Đủ 3 bậc: có đầy đủ /
  có nhưng thiếu một phần / không có.
- **H1d — retry câu sai.** Đủ 3 bậc tương tự H1c.

Mức H1 = min(H1a, H1b, H1c, H1d).

Khai báo đơn vị đo + n điển hình cho TỪNG sub-check, theo đúng quy
tắc §2.

## Ranh giới

- KHÔNG sửa gì ngoài H1.
- KHÔNG đổi ngưỡng của bất kỳ tiêu chí nào khác.
- KHÔNG đụng H2 (đã xử lý ở vòng trước theo quyết định riêng).

## Sau khi sửa — bắt buộc

1. Chạy lại đủ 6 check lint trên TOÀN BỘ rubric (không chỉ H1),
   dán bảng kết quả. Nếu audit/rubric_lint tồn tại thì chạy nó và
   dán output; chưa có thì check tay và ghi chú script lint còn nợ.
2. Thêm 1 dòng §5 Changelog: "Vá gap H1 (lint check #4,
   pre-existing): tách H1a–H1d theo cấu trúc min, cấp thang riêng
   cho chiều coverage."
3. Nếu còn bất kỳ check nào FAIL sau khi vá: liệt kê, KHÔNG tự sửa.
