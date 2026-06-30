# Spec: DTB — cân số quiz (03–07) + spiral Web 2.0 (Topic 07)

> **Loại:** Bổ sung nội dung — thêm quiz vào topic 03–07 cho đồng đều (~10–11 câu/topic, ngang Topic 01) + 1 cross-ref Web 2.0. KHÔNG đổi section/bigIdea/knowledgeMap.
> **File:** `content/dtb.ts`.
> **Nguồn:** mọi câu hỏi mới phải bám kiến thức ĐÃ CÓ trong section của chính topic đó (không thêm khái niệm mới).
> **Quy ước:** stem/options tiếng Anh, rationale/takeaway tiếng Việt; mỗi câu 4 option, **rationale cho cả đúng & sai** (bẫy có chủ đích); có `difficulty`, `conceptTested`, `takeaway`.
> **Verify:** `npx tsc --noEmit` pass; render-check quiz mỗi topic.

---

## PHẦN 1 — Thêm quiz (append vào cuối mảng `questions` của từng topic, id nối tiếp)

### Topic 03 (hiện q01–q08) → thêm q09, q10, q11
- **q09** (basic) — *WWW invention / client-server (s4).* Đúng: Tim Berners-Lee phát minh **WWW** năm 1990 (CERN); web chạy client-server, browser=client, dùng http/html. Bẫy: gán phát minh **Internet** cho Berners-Lee (ông phát minh WWW, không phải Internet); coi http=html.
- **q10** (intermediate) — *Internet service matching (s8).* Đúng: **VoIP** = gọi thoại qua Internet; **FTP** = upload/download file; **email list** = gửi hàng loạt. Bẫy: đảo VoIP↔FTP; coi IM = FTP.
- **q11** (intermediate) — *Bandwidth vs Latency (s17).* Đúng: **bandwidth** = lượng dữ liệu truyền được; **latency** = thời gian/độ trễ tín hiệu đi từ điểm này tới điểm kia (càng thấp càng tốt). Bẫy: coi bandwidth = độ trễ; latency cao là tốt.

### Topic 04 (hiện q01–q06) → thêm q07, q08, q09, q10
- **q07** (basic) — *Multilevel headings (s5).* Đúng: headings (Home > Paragraph > Multilevel list) giúp tạo outline nhiều cấp & là cơ sở để sinh TOC. Bẫy: coi heading chỉ để in đậm; TOC không liên quan heading.
- **q08** (intermediate) — *Cập nhật TOC khi nội dung đổi (s6).* Đúng: chỉ cần **Update field**, không gõ lại tay. Bẫy: phải xoá & tạo lại; sửa số trang thủ công.
- **q09** (intermediate) — *Landscape page giữa portrait (s10).* Đúng: cần tách **section break** quanh trang đó rồi đổi orientation cho riêng section ấy. Bẫy: chỉ cần page break; đổi orientation áp cho cả file.
- **q10** (basic) — *Citations → Bibliography (s11).* Đúng: chèn in-text citation trước → Insert Bibliography sinh danh mục tham khảo từ các citation. Bẫy: bibliography gõ tay; mail merge sinh references.

### Topic 05 (hiện q01–q08) → thêm q09, q10, q11
- **q09** (basic) — *Conditional Formatting (s5).* Đúng: tự tô định dạng theo điều kiện (vd Cost ≥ $100 tô đỏ) để thấy bất thường nhanh. Bẫy: nhầm với Filter (lọc ẩn dòng) / Sort.
- **q10** (intermediate) — *TRANSPOSE / array (s8).* Đúng: `=TRANSPOSE(range)` xoay vùng dọc↔ngang, nhập bằng Ctrl+Shift+Enter. Bẫy: TRANSPOSE chỉ copy thường; ENTER là đủ cho array.
- **q11** (intermediate) — *Sensitivity vs Scenario vs Solver (s11/s12).* Đúng: **sensitivity analysis** đo % thay đổi lợi nhuận theo P/p, P/F, P/v (độ nhạy), KHÁC scenario (lưu kịch bản) và Solver (tối ưu). Bẫy: coi sensitivity = lưu kịch bản; = tối ưu.

### Topic 06 (hiện q01–q08) → thêm q09, q10, q11
- **q09** (basic) — *Advantages of database approach (s4).* Đúng: redundancy reduced, inconsistency avoided, shared data, security… Bẫy: cho rằng database làm tăng trùng lặp; database = chỉ để backup.
- **q10** (intermediate) — *Database application components (s8).* Đúng: **forms** đọc/chèn/sửa/xoá dữ liệu; **reports** trình bày có cấu trúc; **query forms** tìm câu trả lời nhanh. Bẫy: gán việc đọc/sửa dữ liệu cho report; coi form chỉ để in.
- **q11** (intermediate) — *Query by example (QBE) vs SQL (s9).* Đúng: **QBE** = giao diện đồ hoạ hỗ trợ lấy dữ liệu; **SQL** = câu lệnh kiểu tiếng Anh. Bẫy: coi QBE và SQL là một; QBE phải gõ lệnh.

### Topic 07 (hiện q01–q08) → thêm q09, q10, q11
- **q09** (intermediate) — *E-commerce success factors (s3).* Đúng: chọn một yếu tố ĐÚNG (vd performance & service, look & feel, security & reliability, personal attention). Bẫy: chọn yếu tố KHÔNG thuộc danh sách (vd "lowest possible price always").
- **q10** (intermediate) — *SRM–CRM integration (s8).* Đúng: nối CRM của mình với SRM của khách để **tự động hoá mua lặp lại** — SRM kiểm inventory, xác định món cần, tạo order. Bẫy: coi SRM-CRM integration chỉ để gửi email marketing.
- **q11** (basic) — *Profiling & personalizing / one-to-one marketing (s10).* Đúng: thu thập hành vi để xây profile → cá nhân hoá nội dung & quảng cáo (one-to-one marketing); mass customization (vd Dell). Bẫy: coi profiling = chặn truy cập; one-to-one = gửi cùng một quảng cáo cho tất cả.

> Sau khi thêm: Topic 03 = 11, 04 = 10, 05 = 11, 06 = 11, 07 = 11 câu (ngang Topic 01).

---

## PHẦN 2 — Spiral Web 2.0 (Topic 07, s6)

Trong section `s6` của topic07, callout "Vì sao Web 2.0 quan trọng với business" — **thêm 1 câu nối** vào CUỐI body (giữ nguyên phần còn lại):

```
… kênh tiếp cận và xây lòng tin khách hàng. (Web 2.0 đã gặp lần đầu ở Topic 03 — phần WWW; ở đây ta đặt nó trong mạch tiến hoá Web 1.0 → 2.0 → 3.0.)
```

Không đổi bảng Web 1/2/3, không đổi gì khác.

---

## Verify (Codex)
```bash
npx tsc --noEmit
```
- Pass 0 error.
- Mỗi câu quiz mới: đủ 4 option, đúng 1 `isCorrect: true`, rationale cho cả 4.
- Render-check quiz 5 topic (03–07) chạy được, hiển thị câu mới.
- Báo Chaliyah. KHÔNG commit.
