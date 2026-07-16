# OB — Audit Lớp B "SÁCH > slide" cho 7 topic không có marker "(sách)"

> **Nguồn gốc:** `danh-gia-pedagogy-ob.md` §3b mục D (UNCERTAIN) — T02–05, T08–10 không có marker "(sách)" nào, cần kiểm xem kiến thức Reading Chapter ngoài slide đã được đưa vào content chưa (luật `sach-hon-slide-bat-buoc`).
> **Thực hiện:** 2026-07-16. **Phương pháp:** pdftotext lấy skeleton heading + số trang (Ch.5/6/3/2 là PDF heading-only; Ch.14/11/12 trích được FULL text); dựng concept inventory per chương; grep đối chiếu `content/organizational-behavior.ts`; vision-read (Playwright PDFium, recipe `read-scanned-pdf-playwright`) các vùng nghi vấn để xác nhận gap. Frame PDF còn ở scratchpad session `b3768165…02acbc33` (`ch5-NN.png`, `ch6-NN.png`, `ch2-NN.png`, `ch3-NN.png`).

## Kết luận tổng

**Coverage rất cao ở cả 7 topic** (33–42/35–46 khái niệm sách có mặt trong content) — vấn đề "(sách)" vắng mặt chủ yếu là **không đánh dấu marker**, KHÔNG phải thiếu kiến thức diện rộng. Tuy nhiên tìm được **15 gap thật** (sách có – content không), tập trung ở phần cuối các chương. T09 PASS gần tuyệt đối.

## Bảng gap theo topic

### topic02 — Ch.5 Perceptual Processes (4 gap)

| Gap | Trang sách | Nội dung sách (đã xác minh bằng mắt) |
|---|---|---|
| Exhibit 5-3 Reducing Biases and Errors | p102 | Hộp lời khuyên hành động: Focus on Goals; Look for Information That Disconfirms Your Beliefs; Don't Try to Create Meaning out of Random Events (+ mục sau trang, cần đọc tiếp khi soạn). Nguồn: Robbins, *Decide & Conquer* (2004). |
| Nudging | p106 | Tổ chức chủ động tác động perception/decision (quảng cáo là dạng nudge lộ liễu nhất; dùng tích cực trong CSR; mức độ dễ bị nudge khác nhau nhưng ai cũng bị). |
| Creative potential — chi tiết | p109–110 | Intelligence; personality (openness, proactive, self-confidence, risk taking, tolerance for ambiguity, perseverance; "mad genius" research); **Expertise = predictor QUAN TRỌNG NHẤT của creative potential** (ví dụ Tarantino); **Ethics KHÔNG tương quan với creativity** (người gian lận có thể sáng tạo hơn). |
| Creative environment — chi tiết | p110–111 | **Intrinsic motivation là yếu tố môi trường quan trọng nhất**; reward & recognize creative work; free flow of ideas, freedom from excessive rules; structural + psychological empowerment; climate "achievement at any cost" GIẾT creativity; team diversity chỉ tăng creativity khi có perspective taking + leader truyền cảm hứng; "ideas are useless unless used" (translate thành innovation cần networking + motivation). |

### topic03 — Ch.6 Valuing Diversity (1 gap chính)

| Gap | Trang sách | Nội dung sách |
|---|---|---|
| Implementing Diversity Management Strategies — 3 mảng | p126–128 | (1) **Attracting, selecting, developing, retaining diverse employees**: rà workforce xem nhóm nào underutilized, recruiting nhắm target, selection minh bạch, training cho người thiếu exposure; (2) **Diversity in groups**: leverage khác biệt qua common goals; (3) **Diversity programs** + tailored approach quốc tế (case TRANSCO Phần Lan p128 — đã đọc mắt). Content s10 hiện chỉ có định nghĩa diversity management + implications, chưa có 3 mảng này. |

Bỏ qua (màu sắc, không thi): Wonderlic test.

### topic04 — Ch.3 Emotions (3 gap nhỏ)

| Gap | Trang sách | Nội dung sách |
|---|---|---|
| Function of emotions: "Do emotions make us irrational? / ethical?" | p64 | Emotions cần thiết cho rational thinking (Damasio); moral emotions và phán đoán đạo đức. `[CẦN ĐỌC TRANG khi soạn — chưa vision-read p64]` |
| Day-of-week effects | p65–67 | Cùng cụm time-of-day (Exhibit 3-3 đã có time-of-day trong content, day-of-week chưa). |
| ~~Venting~~ → Emotion regulation influences & mặt trái | p71–72 | **Đã đọc mắt 2026-07-16:** Reading Chapter bản này KHÔNG có venting (gap hủy). Gap thật thay thế: influences (neuroticism, self-esteem, diversity effects) + downside (đổi cảm xúc tốn effort/có thể mạnh lên; né tiêu cực kém hơn tìm tích cực; suppression hằng ngày bào mòn). Đã đưa vào spec `ob-sach-supplements.md` Task 3c. |

### topic05 — Ch.2 Attitudes (2 gap)

| Gap | Trang sách | Nội dung sách |
|---|---|---|
| Absenteeism + Turnover (impact of dissatisfaction) | p57–58 | Section riêng trong sách (heading xác nhận); content có CWB + EVLN nhưng chưa có quan hệ satisfaction↔absenteeism / ↔turnover. `[CẦN ĐỌC TRANG khi soạn để lấy claim chính xác]` |
| Understanding the Impact | p58–59 (đã đọc mắt) | High-morale companies: stock +19.4% vs +10%; gap nhận thức manager (86% senior managers tin org đối xử tốt, chỉ 55% employees đồng ý); case KFC Houston khảo sát 3 tháng/lần — survey có tác dụng khi nhân viên "have a voice and be heard". |

### topic08 — Ch.14 Conflict in Organizations (3 gap; full text đã trích được)

| Gap | Vị trí sách | Nội dung sách |
|---|---|---|
| First offer + anchoring trong distributive bargaining | mục Distributive Bargaining | "Make the first offer, and make it an aggressive one" — first offer thể hiện power + tận dụng anchoring bias (nối được về T02). |
| Settlement range / bargaining zone đầy đủ | Exhibit 14-5 | Content đã có target point + resistance point nhưng thiếu khái niệm settlement range (vùng chồng lấn aspiration ranges). |
| Individual differences in negotiation: personality + moods/emotions | mục Individual Differences | Personality→outcome quan hệ YẾU (agreeableness không thiệt như tưởng); **self-efficacy dự đoán ổn định nhất**; anger chỉ có lợi khi có power ngang trở lên (anger giả = vô dụng, anger thật deep acting = có tác dụng); disappointment khiến đối phương nhượng bộ; anxiety → deception nhiều hơn, thoát đàm phán sớm, outcome kém; emotional unpredictability → moi được nhiều nhượng bộ. (Content đã có gender + reputation + relationships + 3 third-party roles.) |

### topic09 — Ch.11 From Groups to Teams — ✅ PASS

39/43 khái niệm có mặt (kể cả organizational demography, 9 team roles, reflexivity, mental models, boundary spanner, two-pizza). Chỉ thiếu 2 nuance không đáng thêm: cultural status research, "hive" freelancer teams. **Không cần fix.**

### topic10 — Ch.12 Characteristics of Leaders (3 gap; full text đã trích được)

| Gap | Vị trí sách | Nội dung sách |
|---|---|---|
| Leader-participation model | mục Contingency Theories | Contingency theory thứ 4 trong sách: cách leader RA QUYẾT ĐỊNH quan trọng ngang nội dung quyết định; điều chỉnh mức participation của cấp dưới theo task structure. Content có Fiedler + SLT + path-goal, thiếu model này. |
| GLOBE cultural differences (behavioral theories) | mục Cultural Differences | GLOBE 62 nước: Brazil chuộng consideration (không thích leader tự quyết); Pháp bureaucratic → initiating structure hợp hơn; Trung Quốc cần CẢ HAI (polite + high performance orientation). |
| Dark-Side traits mid-range optimal | mục Trait Theories | Điểm normative (giữa thang) trên Dark-Side traits là TỐI ƯU cho leadership; điểm thấp lẫn cao đều kém hiệu quả; self-awareness + self-regulation giúp kiểm soát. (Content có Dark Triad nhưng chưa có kết luận mid-range này.) |

## Bước kế tiếp

1. Viết spec fix `ob-sach-supplements.md` cho Codex: thêm 15 gap trên vào đúng section từng topic, **đánh dấu "(sách)" + trích trang**; các chỗ `[CẦN ĐỌC TRANG]` phải vision-read lấy nội dung y chang sách trước khi viết spec (luật `chuan-ly-thuyet-y-chang-sach`).
2. Sau khi bổ sung: cân nhắc thêm marker "(sách)" hồi tố cho kiến thức sách đã có sẵn trong 7 topic này (việc nhẹ, optional — content không sai, chỉ thiếu nhãn nguồn).
