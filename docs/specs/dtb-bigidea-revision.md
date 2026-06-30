# Spec: DTB bigIdea revision — Topic 01 & 02 + framework cho các topic tiếp

> **Loại:** Surgical edit — chỉ thay bigIdea, không thay đổi learningObjectives, sections, quiz.  
> **File cần sửa:** `content/dtb.ts`  
> **Executor:** đọc spec này + xem mẫu topic01/topic02 trong `content/dtb.ts` trước khi edit.

---

## 1. Lý do thay đổi

Course objectives DTB (Topic 00 slide p.2) có 3 layer:
1. **Sense the trends in digital age** và tác động lên business
2. **Make use of technology in business** — IT phục vụ business goals, không phải ngược lại
3. **Practical skills** cho personal work efficiency

bigIdea hiện tại của Topic 01 và 02 đã đúng hướng nhưng chưa làm nổi bật layer 1 ("sense trends"). bigIdea phải là **lens** — giúp người học đặt mọi lý thuyết sau đó vào đúng ngữ cảnh, thay vì để kiến thức nổi bềnh bềnh như định nghĩa rời.

**Pattern chuẩn cho mọi DTB bigIdea (áp cho cả các topic chưa soạn):**
```
[Xu hướng digital cần nhận ra] → [Tác động cụ thể lên business] → [Quyết định / kỹ năng người học có được]
```

---

## 2. Changes — `content/dtb.ts`

### 2a. Topic 01 — dòng `bigIdea` (khoảng line 51)

**Old:**
```
'IT/IS không phải mục tiêu — nó tồn tại để giúp doanh nghiệp đạt goals (profit, sustainable, competitive advantage). Một Information System là sự gắn kết của People + Organizations + Technology để biến data thành information phục vụ ra quyết định; IT chỉ là công cụ, còn giá trị thật nằm ở con người (YOU) và cách quản trị: "you can buy IT, but you cannot buy an IS".'
```

**New:**
```
'Trong digital age, mọi doanh nghiệp đang trở thành một information business — thắng hay thua phụ thuộc vào ai biến data thành quyết định tốt hơn, nhanh hơn. IS (Information System) không phải phần mềm hay máy móc — nó là sự kết hợp People + Organizations + Technology; IT chỉ là phần công cụ: "You can buy IT, but you cannot buy an IS." Hiểu framework này, bạn có được một chiếc kính để đọc bất kỳ xu hướng digital nào (AI, cloud, e-commerce…) đều xoay quanh cùng một câu hỏi: nó giúp doanh nghiệp xử lý thông tin và ra quyết định tốt hơn như thế nào?'
```

---

### 2b. Topic 02 — dòng `bigIdea` (khoảng line 1884)

**Old:**
```
"Bạn — future business manager — không chế tạo máy tính, nhưng bạn quyết định mua/nâng cấp (câu hỏi $20,000 cho phòng ban). Hardware + Software + Data chính là mặt Technology của five-component IS ở Topic 01. Hiểu HW (Moore's Law: faster–cheaper–smaller–greater capacity) và SW (từ machine language → OS → applications, và các cách phân phối software) giúp bạn ra quyết định đầu tư IT tốt hơn: biết cái gì đáng tiền, cái gì sắp lỗi thời, cái gì 'free' mà vẫn có chi phí ẩn."
```

**New:**
```
"Moore's Law là xu hướng technology quan trọng nhất một business manager cần nhận ra: máy tính ngày càng nhanh hơn, nhỏ hơn, rẻ hơn — đều đặn theo chu kỳ. Đây không phải trivia kỹ thuật — nó lý giải tại sao cloud storage gần như miễn phí, tại sao AI đột nhiên khả thi với mọi startup, và tại sao thiết bị bạn mua hôm nay sẽ lỗi thời trong vài năm. Hardware + Software + Data là mặt Technology của five-component IS (Topic 01). Biết chúng vận hành thế nào giúp bạn ra quyết định đầu tư IT sáng suốt: cái gì nên mua ngay, cái gì nên chờ (giá sẽ giảm), cái gì nên thuê (cloud) thay vì sở hữu."
```

---

## 3. Verify

Sau khi edit:
```
npx tsc --noEmit
```
Phải pass. Không cần Playwright cho thay đổi bigIdea (text-only, không ảnh hưởng logic render).

Nếu pass → báo lại cho Chaliyah để review text trên web, không tự commit.

---

## 4. Framework cho các topic chưa soạn (ghi chú cho đầu não)

Khi soạn spec các topic tiếp theo, bigIdea phải theo pattern trên:

| Topic | Trend cần nhận ra | Business impact | Quyết định/kỹ năng |
|---|---|---|---|
| 03 Network/Internet/WWW | Connectivity đã xóa địa lý trong kinh doanh | Mọi business giờ có thị trường toàn cầu — và cạnh tranh toàn cầu | Hiểu infrastructure mạng để chọn giải pháp kết nối đúng |
| 04 MS Word | Document là ngôn ngữ giao tiếp chuyên nghiệp | Tài liệu kém = uy tín kém, dù ý tưởng tốt | Soạn văn bản chuyên nghiệp đúng chuẩn |
| 05 MS Excel | Data-driven decision making là kỹ năng sống còn | Mọi vị trí quản lý đều cần làm việc với số | Phân tích dữ liệu, mô hình hóa business scenarios |
| 06 Database Mgt | Structured data là hạ tầng của mọi hệ thống digital | Database kém → app kém, báo cáo sai, quyết định sai | Hiểu thiết kế/truy vấn DB để đặt đúng yêu cầu với IT team |
| 07 E-commerce/SC/Web 2.0 | Digital channels đã thay đổi cơ bản cách mua/bán/hợp tác | Supply chain và customer reach không còn bị giới hạn vật lý | Đánh giá mô hình e-commerce, hiểu digital SC |
