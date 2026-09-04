# TASK: Cold walkthrough — mô phỏng người mới từ source code

Bối cảnh: đánh giá trải nghiệm NGƯỜI CHƯA TỪNG học Organizational Behavior, lần đầu mở site. Không có browser — tái dựng hành trình từ source. Bật Plan Mode.

## Quy tắc mô phỏng (quan trọng nhất)

- Tại mỗi "màn hình", chỉ được dùng thông tin RENDER RA CHO USER: text, label nút, heading, thứ tự xuất hiện trong JSX. CẤM dùng hiểu biết về cấu trúc route, tên file, tên component để tìm đường — user không nhìn thấy những thứ đó.
- Trước mỗi bước chuyển trang, ghi: "Trên màn hình có các lựa chọn [liệt kê đúng label]. Người mới sẽ chọn [X] vì [lý do từ label/vị trí]."
- Nếu bước nào phải dùng kiến thức NGOÀI màn hình mới quyết được → đánh dấu **ĐOÁN** — mỗi chỗ ĐOÁN là một lỗi wayfinding tiềm năng.
- Phân biệt rõ hai loại phán đoán trong report: điều CHẮC từ source (label này tồn tại, link này trỏ đâu) vs điều SUY DIỄN (user sẽ thấy cái này nổi bật) — suy diễn phải ghi rõ là suy diễn.

## Hành trình 1 — Học tuần tự

Từ route `/`: tái dựng từng màn hình đến khi "bắt đầu học topic đầu tiên của Organizational Behavior". Đếm số bước. Ghi mọi điểm ĐOÁN và mọi điểm BẾ TẮC (không có label nào dẫn tiếp).

## Hành trình 2 — Tìm theo nhu cầu

Tình huống: "Mai thi phần Motivation, chưa học gì, cần tìm đúng phần đó + chỗ luyện câu hỏi." Từ `/`, user tìm bằng gì? Có search hoặc mục lục ở mức khái niệm không, hay phải mở lần lượt từng topic để dò?

## Trả lời 5 câu

1. Mỗi hành trình mất mấy bước? Bước nào thừa hoặc vòng?
2. Trang topic có nói NÊN ĐỌC THEO THỨ TỰ NÀO không (số thứ tự, progress, nút "tiếp theo"), hay user tự đoán?
3. Element nào render ra mà label KHÔNG tự giải thích được nó làm gì với người chưa có ngữ cảnh? Liệt kê đúng label + file.
4. Học xong topic 1, tín hiệu nào dẫn user đi tiếp? Nằm ở đâu trong trang?
5. Hành trình 2: từ nhu cầu "Motivation" đến đúng nội dung mất mấy bước, có đường tắt không?

## Output

Bảng:

| Finding | Loại (ĐOÁN / BẾ TẮC / Label mơ hồ / Thiếu tín hiệu) | Bằng chứng (file + label nguyên văn) | Tiêu chí rubric liên quan (E1/A/H1/...) hoặc "RUBRIC KHÔNG COVER" |
|---|---|---|---|

Nhóm "RUBRIC KHÔNG COVER" tách riêng ở cuối bảng — đó là ứng viên tiêu chí mới cho backlog rubric.

KHÔNG sửa gì — chỉ báo cáo.
