# Learning Hub

> Học theo bản chất, không học thuộc rời rạc.

Learning Hub là nền tảng học tập tương tác dành cho các môn học tại HCMUT. Nội
dung được tổ chức theo từng môn và từng topic, kết hợp giải thích khái niệm,
knowledge map, ví dụ, câu hỏi trắc nghiệm và mini-case trong cùng một luồng học.

## Vì sao project này tồn tại?

Slide và textbook thường cung cấp nhiều khái niệm nhưng không luôn chỉ ra mối
liên hệ giữa chúng. Learning Hub chuyển nội dung môn học thành một hệ thống có
cấu trúc:

- bắt đầu bằng **big idea** để người học hiểu bản chất chương;
- nối các khái niệm bằng **course map** và **knowledge map**;
- giải thích cả đáp án đúng lẫn đáp án sai bằng **rationale**;
- trộn câu hỏi giữa nhiều chương bằng **interleaved review**;
- luyện vận dụng nhiều khái niệm cùng lúc qua **mini-case**.

Nguồn sách, slide và số trang được hiển thị trong từng topic khi dữ liệu nguồn
có sẵn.

## Nội dung hiện có

Snapshot nội dung hiện tại được lấy trực tiếp từ `content/`:

| Môn học | Nội dung hoàn thiện | Câu hỏi |
| --- | ---: | ---: |
| Managerial Accounting | 8/8 chương | 120 |
| Digital Technology in Business | 7/8 topic | 81 |
| Manufacturing Systems | 8/9 topic | 96 |
| Organizational Behavior | 13/13 topic | 247 |
| **Tổng cộng** | **36/38** | **544** |

`placeholder` được giữ lại để thể hiện rõ phần nội dung chưa hoàn thiện, thay vì
hiển thị dữ liệu giả.

## Trải nghiệm học tập

- Trang riêng cho từng môn, không trộn lẫn lộ trình.
- Chapter rail và mục lục để di chuyển nhanh giữa các topic.
- Big idea, learning objectives, key terms và ví dụ theo từng section.
- Flow diagram, Mermaid diagram, comparison table, formula và calculation
  walkthrough.
- Quiz theo độ khó với giải thích cho từng lựa chọn.
- Interleaved review tổng hợp câu hỏi từ nhiều chương.
- Mini-case theo case method cho nội dung phù hợp.
- Giao diện responsive và hỗ trợ dark mode.

## Tech Stack

- React 19 và TypeScript
- Vinext trên Vite 8
- Tailwind CSS 4
- Mermaid và XYFlow cho sơ đồ
- Cloudflare Vite plugin và Wrangler
- Drizzle ORM cho phần dữ liệu có thể mở rộng

## Quick Start

### Yêu cầu

- Node.js `>=22.13.0`
- npm

### Chạy local

```bash
git clone https://github.com/minhnhat4k23/Learning-Hub-.git
cd Learning-Hub-
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt.

### Quality checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Cấu trúc project

```text
app/            App Router pages và UI components
content/        Nội dung môn học, schema và subject registry
public/         Static assets
db/             Drizzle schema và database utilities
build/          Vite plugin phục vụ quy trình build
examples/       Ví dụ tích hợp tùy chọn
.openai/        Cấu hình hosting và resource bindings
```

UI và nội dung được tách riêng. Phần lớn việc thêm môn hoặc topic mới chỉ cần
thay đổi module trong `content/`, không cần viết lại giao diện.

## Thêm nội dung mới

1. Tạo hoặc cập nhật module môn học trong `content/` theo schema tại
   `content/types.ts`.
2. Đăng ký môn học trong `content/subjects.ts`.
3. Gắn trạng thái `placeholder`, `draft` hoặc `ready` cho từng chapter.
4. Thêm nguồn, learning objectives, sections và questions.
5. Chạy đầy đủ quality checks trước khi tạo Pull Request.

## Known Limitations

- Digital Technology in Business và Manufacturing Systems hiện còn mỗi môn một
  topic ở trạng thái `placeholder`.
- Trên môi trường Windows đã kiểm tra, `npm run start` với `vinext@0.0.50` có
  thể trả `404` cho `/assets/*` do cách xử lý path separator. Hãy dùng
  `npm run dev` để preview local cho đến khi Vinext được nâng cấp an toàn.

## Contributing

Issue và Pull Request đều được chào đón. Khi đóng góp nội dung học thuật:

- không tự tạo số liệu hoặc nguồn;
- giữ citation nhất quán với topic hiện có;
- giải thích rationale cho cả phương án đúng và sai;
- chỉ đánh dấu `ready` sau khi nội dung và câu hỏi đã được kiểm tra.

## License

Project hiện chưa khai báo open-source license. Việc repository được đặt Public
không đồng nghĩa với việc tự động cấp quyền sao chép, chỉnh sửa hoặc phân phối.
