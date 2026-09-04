# Spec: OB fix theo rubric 2026-07-20 — Phase 1 (D4, G1, E3)

**Môn:** Organizational Behavior · **File:** `content/organizational-behavior.ts`
**Nguồn đánh giá:** `docs/specs/danh-gia-pedagogy-ob.md` §6 (re-score rubric 2026-07-20; n=13, T=2)
**Ràng buộc cố định:** theo `docs/specs/codex-handoff.md` (blueprint / quy ước ngôn ngữ / verify 2 lớp).
**Phạm vi Phase 1:** 3 gap rẻ — chỉ SỬA CHỮ, không đổi cấu trúc, không thêm/bớt section, không đụng quiz.

> Quy ước ngôn ngữ: diễn giải tiếng Việt, giữ nguyên term tiếng Anh. Câu "Mắt xích môn học" là **framing sư phạm của người soạn** (nối khái niệm đã dạy), KHÔNG phải trích sách — không được gắn trích dẫn trang sách vào các câu này.

---

## Fix D4 — courseMap caption thiếu disclaimer soft-lens

**Lý do:** rubric D4 yêu cầu mọi "soft-lens" (khung tự tổng hợp) phải có disclaimer. 8/9 soft-lens OB đã có ("…không phải trích nguyên văn sách"), riêng caption của `organizationalBehaviorCourseMap` thiếu → kéo D xuống Thiếu.

**Vị trí:** `export const organizationalBehaviorCourseMap` → field `caption` (khoảng dòng 13239-13240).

**BEFORE:**
```ts
  caption:
    "Khung 3 cấp theo Basic OB Model (Robbins & Judge, 2019). Bấm chip để xem bản chất topic và mở trang topic.",
```

**AFTER:**
```ts
  caption:
    "Khung 3 cấp theo Basic OB Model (Robbins & Judge, 2019) — sơ đồ do người soạn tổng hợp, không phải trích nguyên văn sách. Bấm chip để xem bản chất topic và mở trang topic.",
```

---

## Fix G1 — T12 thiếu callout "So what" ở section cuối

**Lý do:** rubric G yêu cầu mỗi topic đóng bằng "So what". 11/13 topic có callout `"So what — kiến thức này đổi hành động của bạn"` ở cuối; T12 KHÔNG có (thông điệp "So what" bị gộp trong block D>CS=SR ở section cuối, không phải callout riêng) → G chỉ Đạt một phần.

**Vị trí:** section cuối T12 `heading: "Quản trị từ chính mình: D>CS=SR + change–stress link"` (khoảng dòng 12933). Section này hiện chỉ có 1 block (calloutBlock "D > CS = SR (Thornton 2023, slide 30)", ~dòng 12935-12939).

**Thao tác:** CHÈN THÊM một `calloutBlock` NGAY SAU block D>CS=SR (giữ block cũ nguyên vẹn), để "So what" là block đóng của section — đồng bộ format 11 topic kia.

**AFTER (block D>CS=SR giữ nguyên, thêm block dưới):**
```ts
        calloutBlock(
          "key",
          "So what — kiến thức này đổi hành động của bạn",
          "Change và stress không phải hai chương rời: mọi thay đổi bạn khởi xướng đều bơm demands vào người khác, nên quản trị thay đổi giỏi cũng là quản trị stress. Hành động: khi đẩy một thay đổi, đọc trước 3 tầng kháng cự (Maurer) và giảm demands/tăng coping thay vì chỉ ép tiến độ; với chính mình, dùng D>CS=SR như bảng đèn — thấy demands vượt coping thì can thiệp sớm ở một trong ba đòn bẩy, biến áp lực thành eustress trước khi trượt sang distress/burnout.",
        ),
```

---

## Fix E3 — 5 topic thiếu cross-ref liên-topic

**Lý do:** rubric E3 đo cross-ref theo thread giữa các topic. 5/13 topic (T2, T3, T4, T5, T11) không có câu nối sang topic khác → 5 > T(2) → E Thiếu. 5 topic kia (T1, T6, T7, T10, T12) đã có câu `"→ Mắt xích môn học: …"`.

**Thao tác chung:** NỐI THÊM một câu vào CUỐI phần `body` (string thứ 3) của callout "So what" tương ứng — không tạo block mới, chỉ thêm câu vào cuối string. Câu bắt đầu bằng `" → Mắt xích môn học: "` (một dấu cách nối tiếp câu trước).

### E3-T2 — callout heading "Ứng dụng shortcut & bias trong tổ chức + SO WHAT" (~dòng 2987)
Nối vào cuối body hiện tại (kết thúc "…ngăn ta thấy rõ, hiểu đúng và tin nhau."):
```
 → Mắt xích môn học: perception & attribution là bộ lọc đầu vào cho attitudes (Topic 05) và motivation (Topic 06) — cách bạn "quy nhân" thành công/thất bại định hình kỳ vọng effort→performance; các bias như anchoring/overconfidence sẽ trở lại ở decision nhóm (Topic 07) và negotiation (Topic 08).
```

### E3-T3 — callout "So what…" values (~dòng 4072)
Nối vào cuối body (kết thúc "…hoặc cách bạn đánh giá người khác."):
```
 → Mắt xích môn học: values và deep-level diversity là "nguyên liệu cá nhân" mà nhóm (Topic 07) và team (Topic 09) lắp ráp; P-O Fit ở đây nối thẳng tới organizational culture — culture fit/add (Topic 11).
```

### E3-T4 — callout "So what…" emotions (~dòng 5031)
Nối vào cuối body (kết thúc "…thay vì chỉ sửa \"chính sách lớn\"."):
```
 → Mắt xích môn học: emotion là dữ liệu cảm xúc chảy vào attitudes (Topic 05, thành phần Affective của ABC) và, qua Emotional Intelligence, vào leadership (Topic 10) lẫn quản trị stress (Topic 12).
```

### E3-T5 — callout "So what…" attitudes (~dòng 5964)
Nối vào cuối body (kết thúc "…người hài lòng chưa chắc dốc sức."):
```
 → Mắt xích môn học: attitudes tổng hợp perception (Topic 02) và emotion (Topic 04) thành xu hướng hành vi; EVLN ở đây là bản lề sang motivation/engagement (Topic 06), và khi bất mãn lan ra nhóm thì thành conflict (Topic 08).
```

### E3-T11 — callout "So what…" culture (~dòng 12297)
Nối vào cuối body (kết thúc "…không phải poster giá trị trên tường."):
```
 → Mắt xích môn học: văn hóa là "phần mềm nền" mà leadership (Topic 10) viết ra và change management (Topic 12) phải viết lại — culture đổi chậm nhất chính là lý do đổi mới tổ chức khó nhất.
```

---

## Verify (2 lớp)
1. **Render/type:** `tsc --noEmit` sạch; bundle `content/subjects.ts` load không lỗi.
2. **Completeness (đo trên data thật đã bundle):**
   - D4: caption courseMap match `/không phải trích nguyên văn/` → soft-lens 9/9 = 100%.
   - G1: T12 (order 12) có block callout title chứa "So what" ở section cuối → 12/13 → so-what-at-end đủ.
   - E3: đo bằng regex `Topic\s*0?N` (N ≠ chính topic, N ≤ 12) trên sections đã bundle → 13/13 topic có ≥1 cross-ref (trước fix: T2/T3/T4/T5/T11 = 0 ref) → 0 topic hụt.

## KHÔNG làm ở Phase 1 (backlog)
- **B3 (Phase 2):** tách 6 catalog section quá tải: T2s6, T2s8, T5s4, T6s11, T6s12, T7s1 — cần spec cấu trúc riêng.
- **D3 (task riêng):** audit sách 5 topic chưa đối chiếu (T00/06/07/11/12) — đọc PDF, không thuộc phạm vi sửa chữ.
