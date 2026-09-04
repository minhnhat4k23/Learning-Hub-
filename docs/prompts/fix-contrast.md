# TASK: Đọc 2 Lighthouse report → xác nhận chẩn đoán → plan → sửa contrast

Bật Plan Mode. Trình tự bắt buộc: ĐỌC → XÁC NHẬN → PLAN → đợi duyệt diff → mới sửa.

## Bước 0 — Đọc dữ liệu, xác nhận chẩn đoán độc lập

Đọc `audit/lh-report.report.json` (trang chủ) và `audit/lh-topic.report.json` (trang topic OB-01).

Chẩn đoán dưới đây cần được xác nhận lại từ data, không tin sẵn:

1. TOÀN BỘ vi phạm `color-contrast` trên cả 2 trang (2 + 6 chỗ) đều là màu chữ `#6f7888` trên 3 nền: `#16181d` (ratio 3.98), `#1d2027` (3.66), `#2c313a` (2.93). Chuẩn cần: ≥4.5:1.
2. Selector `nav > a.text-sm > span.ml-2` xuất hiện ở CẢ HAI report → header là shared component → `#6f7888` là token dùng chung.
3. Ngoài `color-contrast` và `bf-cache` (bỏ qua — chuyện dev server), không còn binary audit nào fail trên cả 2 trang.
4. Performance: trang chủ 0.81, trang topic 0.42 — cả hai đo trên Vite dev mode (bằng chứng: request `@vite/client` trong `network-requests`) → số perf KHÔNG dùng để kết luận gì.

Nếu tìm thấy điều gì trong 2 JSON mâu thuẫn với 4 điểm trên: DỪNG và báo trước khi làm tiếp.

## Bước 1 — Truy nguồn token

Tìm nơi định nghĩa `#6f7888` theo thứ tự: CSS variables trong globals/theme → `tailwind.config` → hardcode trong component.

Báo cáo: token tên gì, định nghĩa ở file nào, bao nhiêu component đang dùng.

Nếu `#6f7888` xuất hiện ở NHIỀU token khác nhau → dừng lại, báo trước khi sửa.

## Bước 2 — Tính màu thay thế bằng công thức WCAG, không ước lượng

Viết script node tạm (dùng xong xóa) tính contrast ratio theo công thức WCAG relative luminance.

Yêu cầu với màu mới:

- Đạt ≥4.5:1 trên CẢ BA nền `#16181d` / `#1d2027` / `#2c313a` (nền quyết định = `#2c313a`, sáng nhất).
- Giữ hue xám-xanh của `#6f7888`, chỉ nâng lightness — vẫn phải đọc là "muted text", không lẫn với text chính.
- Xuất bảng: 2–3 ứng viên × 3 nền × ratio, để người dùng chọn.

Điểm khởi đầu để thử: `#9aa3b2` — verify bằng script, không tin số này.

## Bước 3 — Sửa đúng 1 chỗ (chỉ sau khi người dùng đã chọn màu)

Đổi giá trị token tại nguồn. KHÔNG sửa từng component, KHÔNG đổi màu nền/border, KHÔNG refactor gì thêm.

## Bước 4 — Kiểm sau sửa

a) Chạy lại script contrast trên màu đã chọn × 3 nền, dán kết quả.

b) Grep tên token, liệt kê MỌI vị trí đang dùng. Flag riêng: chỗ nào token này nằm trên nền SÁNG (contrast chiều ngược lại có thể hỏng).

c) KHÔNG tự chạy Lighthouse — người dùng sẽ chạy lại để xác nhận độc lập.

## Ranh giới

- Không đụng performance (sẽ đo lại trên `npm run build` + `preview`, việc khác).
- Không đụng `bf-cache`.
- Mọi thay đổi ngoài token màu này = ngoài phạm vi, không làm.
