# Course Blueprint — Managerial Accounting

> Tài liệu định hướng (Claude = đầu não). Quy định **chuẩn pedagogy** + **template Chapter Spec** dùng chung cho TẤT CẢ chương.
> Codex đọc blueprint này một lần để hiểu "hợp đồng"; mỗi chương sau chỉ là một file spec theo template ở §4 → một object `Chapter` trong `content/chapters.ts`.

## 1. Mục tiêu sản phẩm (theo goal của Chaliyah)
- Người học **hiểu bản chất** từng chương, không học vẹt.
- **Không sót lý thuyết**: mỗi mục trong sách/slide phải có chỗ trong `sections`.
- Mỗi chương có **bộ câu hỏi bẫy hay**, mỗi đáp án giải thích **chuyên sâu nhưng đủ đơn giản**.

## 2. Nguyên tắc học thuật (HARD RULES)
- **Không bịa số liệu / thuật ngữ / cấu trúc chương.** Chưa có sách → đánh dấu `[CẦN NGUỒN]` hoặc `[CẦN ĐỐI CHIẾU]`, không tự điền.
- Mỗi chương ghi `source` (tác giả, năm, trang/slide) khi có tài liệu thật.
- Khung khái niệm chuẩn mực (vd Garrison/Noreen/Brewer) chỉ dùng làm **giàn giáo tạm**, phải đối chiếu giáo trình HCMUT của Chaliyah trước khi chuyển `status: ready`.

## 3. Chuẩn pedagogy (mọi chương phải đạt)

### 3.1 bigIdea — "bản chất chương"
- 1–2 câu, nói được **vì sao chương này tồn tại / giải quyết câu hỏi gì**.
- Không phải định nghĩa; là góc nhìn xuyên suốt (vd Chương A: *"different costs for different purposes"*).

### 3.2 sections — lý thuyết không sót
- Mỗi mục lớn của sách = 1 `Section`. Thứ tự `s1, s2, …` đi từ **vì sao → cái gì → phân biệt → vận dụng**.
- `keyTerms` cho thuật ngữ dễ nhầm; `examples` cho minh họa cụ thể (số liệu phải có nguồn hoặc ghi rõ là ví dụ giả định).
- Mỗi section nên kết bằng **một điểm dễ sai** để nối sang câu hỏi bẫy.

### 3.3 questions — thiết kế "bẫy có chủ đích"
Quy tắc bắt buộc cho mỗi câu:
1. **Đáp án sai = một hiểu lầm có thật**, không phải sai vu vơ. Mỗi `rationale` của đáp án sai phải **gọi tên đúng cái bẫy** ("bẫy tuyệt đối hóa", "trộn tổng với đơn vị"…).
2. **Đáp án đúng** giải thích *vì sao đúng* ở mức bản chất, không chỉ "vì định nghĩa nói thế".
3. Mỗi câu có `conceptTested` (bản chất đang kiểm tra) + `takeaway` (chốt 1 câu, dạng nguyên tắc tư duy chuyển được sang bài khác).
4. Độ khó rải đều: tối thiểu 1 `basic`, vài `intermediate`, ≥1 `advanced` mỗi chương.
5. Ưu tiên câu **buộc phân biệt hai khái niệm hay bị gộp** (product/period, tổng/đơn vị, direct/indirect theo cost object, sunk/relevant…).

### 3.4 Checklist "đạt chuẩn" trước khi `status: ready`
- [ ] Mọi mục lý thuyết của sách đã có section tương ứng.
- [ ] Mọi `source` đã điền (không còn `[CẦN NGUỒN]`).
- [ ] Mỗi câu hỏi: đáp án sai đều là hiểu lầm thật + có takeaway.
- [ ] Đã đối chiếu thuật ngữ với giáo trình HCMUT.

## 4. Template Chapter Spec (copy cho mỗi chương mới)

```markdown
# Chapter Spec — <Mã>. <Tên chương>
> Handoff Claude → Codex. Chuyển thành 1 object `Chapter` trong content/chapters.ts theo content/types.ts.

- slug: <kebab-case>
- order: <số>
- status: placeholder | draft | ready
- source: <tác giả, năm, trang/slide  |  [CẦN NGUỒN]>

## bigIdea
> <1–2 câu bản chất chương>

## learningObjectives
1. ...

## sections (không sót mục)
### s1 — <heading>
<body; \n\n để xuống đoạn>
- keyTerms: <term — definition> (nếu có)
- examples: <title — body> (nếu có; số liệu phải có nguồn)

## questions (mỗi đáp án có rationale)
### q1 — <basic|intermediate|advanced> | conceptTested: <...>
**Stem:** ...
- a) <text> ✅/❌ — <rationale: đúng→vì sao đúng; sai→gọi tên bẫy>
- b) ...
- **takeaway:** <chốt 1 câu>

## Gợi ý cho Codex khi implement
- <chỉ ghi khi có yêu cầu UI đặc thù ngoài layout chuẩn>
```

## 5. Quy trình mỗi chương (vòng lặp Claude ↔ Codex)
1. **Chaliyah** cung cấp sách/slide chương đó.
2. **Claude** viết `docs/specs/<chương>.md` theo template §4 (đầy lý thuyết + bộ câu hỏi bẫy), đánh dấu chỗ thiếu nguồn.
3. **Claude** rà checklist §3.4.
4. **Codex** đổ spec thành object `Chapter` (status `draft`).
5. **Chaliyah** duyệt nội dung & độ "đủ đơn giản" → Claude chỉnh → chuyển `ready`.

## 6. Trạng thái hiện tại
- Khung web (layout/nav/routing) + schema nội dung: **xong** (Milestone 1).
- Chương A `cost-concepts`: **draft**, chờ đối chiếu giáo trình HCMUT.
- Các chương còn lại: **placeholder**, chờ sách/slide của Chaliyah.
