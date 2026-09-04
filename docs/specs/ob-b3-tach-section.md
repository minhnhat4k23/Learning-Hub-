# Spec: OB B3 Phase 2 — tách 6 catalog section quá tải

**File:** `content/organizational-behavior.ts` · **Nguồn:** `danh-gia-pedagogy-ob.md` §6 (B3: 6 section >4 keyTerm mới là quá tải thật) · **Ràng buộc cố định:** `docs/specs/codex-handoff.md`.

## Nguyên tắc chung (BẮT BUỘC)

1. **KHÔNG đổi id section cũ** — toàn môn có ~1043 tham chiếu `sectionId` (knowledgeMap, diagram node). Section cũ GIỮ id, section mới dùng id dạng `<idcũ>b` / `<idcũ>c` (vd `s6b`, `s12c`), chèn NGAY SAU section gốc trong mảng.
2. **Không viết lại nội dung** — chỉ DI CHUYỂN block/keyTerm/hàng bảng sang section mới + đặt heading mới. Không thêm/bớt/sửa chữ trong block (trừ tách 1 bảng thành 2 bảng thì được chép lại title cho khớp phạm vi).
3. **knowledgeMap retarget:** với MỖI keyTerm bị chuyển sang section mới, tìm node knowledgeMap (và diagram node nếu có) của topic đó đang trỏ `sectionId` cũ cho khái niệm ấy → đổi sang id mới. Khái niệm ở lại thì giữ nguyên.
4. Sau tách, MỌI section phải có ≤4 keyTerm (mục tiêu của phase này — không chừa ngoại lệ).
5. So-what/Mắt xích không được rời vị trí chuẩn: So-what luôn là block CUỐI của section CUỐI topic (T6 lưu ý mục 5 dưới).

---

## 1. T2 s6 "Shortcuts trong judging others" (7 kt → 4+3)

- **s6 (giữ id), heading mới:** "Shortcuts kinh điển khi judging others (R&J)"
  - Blocks giữ: callout "Vì sao shortcut sinh bias" + bảng "Common shortcuts" CHỈ CÒN các hàng: selective perception, halo effect, contrast effect, stereotyping.
  - keyTerms (4): selective perception, halo effect, contrast effect, stereotyping.
- **s6b (MỚI), heading:** "Shortcut bổ sung từ slide: similarity & thứ tự thông tin"
  - Blocks: bảng mới chứa các hàng còn lại của bảng cũ: similar-to-me effect, recency effect, primacy effect (title bảng: "Shortcut bổ sung (slide 32-35)").
  - keyTerms (3): similar-to-me effect, recency effect, primacy effect.

## 2. T2 s8 "Common biases & errors in decision making" (8 kt → 4+4)

- **s8 (giữ id), heading mới:** "Biases khi xử lý thông tin (R&J p102-104)"
  - Blocks: bảng "8 biases" chỉ còn hàng: overconfidence, anchoring, confirmation, availability.
  - keyTerms (4): overconfidence bias, anchoring bias, confirmation bias, availability bias.
- **s8b (MỚI), heading:** "Biases khi cam kết & nhìn lại + cách giảm bias"
  - Blocks: bảng mới với các hàng: escalation of commitment, randomness error, risk aversion, hindsight bias + callout "Giảm bias" + bảng "Exhibit 5-3 — Reducing Biases and Errors (sách, p102)" (2 block sau chuyển NGUYÊN VẸN).
  - keyTerms (4): escalation of commitment, randomness error, risk aversion, hindsight bias.

## 3. T5 s4 "Major job attitudes" (6 kt → 3+3)

- **s4 (giữ id), heading mới:** "Job attitudes hướng CÔNG VIỆC: satisfaction, involvement, empowerment"
  - Blocks: bảng "6 major job attitudes" chỉ còn 3 hàng tương ứng.
  - keyTerms (3): Job satisfaction, Job involvement, Psychological empowerment.
- **s4b (MỚI), heading:** "Job attitudes hướng TỔ CHỨC: commitment, POS, engagement"
  - Blocks: bảng mới với 3 hàng còn lại + callout "Slide extras: job embeddedness & OCB" (chuyển nguyên vẹn).
  - keyTerms (3): Organizational commitment, Perceived organizational support (POS), Employee engagement.

## 4. T6 s11 "Applied: alternative work arrangements & EIP" (6 kt → 3+3)

- **s11 (giữ id), heading mới:** "Applied: alternative work arrangements"
  - Blocks: bảng "Alternative work arrangements (R&J p154-158)".
  - keyTerms (3): Flextime, Job sharing, Telecommuting.
- **s11b (MỚI), heading:** "Applied: employee involvement & participation (EIP)"
  - Blocks: bảng "Employee involvement & participation — EIP (R&J p157-159)" + callout "Cultural EIP" (chuyển nguyên vẹn).
  - keyTerms (3): Employee involvement and participation (EIP), Participative management, Representative participation.

## 5. T6 s12 "Applied: rewards, benefits, recognition & implications" (10 kt, 6 block → chẻ BA: 2+4+4)

- **s12 (giữ id), heading mới:** "Applied: what to pay — pay structure (sách)"
  - Blocks: callout "What to pay: pay structure trước khi bàn variable-pay (sách, p159)".
  - keyTerms (2): Internal equity, External equity.
- **s12b (MỚI), heading:** "Applied: variable-pay cấp CÁ NHÂN"
  - Blocks: bảng "Các chương trình variable pay (R&J p160-163)" tách phần hàng cá nhân: piece-rate, merit-based, bonus (title: "Variable pay cấp cá nhân (R&J p160-162)").
  - keyTerms (4): Variable-pay program, Piece-rate pay plan, Merit-based pay plan, Bonus.
- **s12c (MỚI), heading:** "Applied: variable-pay cấp TỔ CHỨC, benefits, recognition & implications"
  - Blocks theo thứ tự: bảng mới hàng profit-sharing + ESOP (title: "Variable pay cấp tổ chức (R&J p162-163)") → callout "Flexible benefits & pay secrecy" → callout "Employee recognition programs & intrinsic rewards" → callout "Implications for managers (R&J p165 + slide 49)" → callout **"So what — kiến thức này đổi hành động của bạn" (PHẢI là block cuối cùng — giữ G1)**.
  - keyTerms (4): Profit-sharing plan, Employee stock ownership plan (ESOP), Flexible benefits, Employee recognition program.

## 6. T7 s1 "Nhóm là gì, vì sao gia nhập, các loại nhóm" (7 kt → 3+4)

- **s1 (giữ id), heading mới:** "Nhóm là gì & vì sao gia nhập"
  - Blocks giữ: callout "Group theo Robbins & Judge (p182)" + callout "Vì sao gia nhập group (slide)" — callout này chứa câu "→ Mắt xích môn học…", GIỮ NGUYÊN (E3).
  - keyTerms (3): Group, Formal group, Informal group.
- **s1b (MỚI), heading:** "4 loại nhóm formal/informal"
  - Blocks: bảng "Formal vs Informal & 4 loại nhóm (R&J p182; slide)" (chuyển nguyên vẹn — bảng vẫn nhắc formal/informal, chấp nhận vì keyTerm gốc nằm ở s1 ngay trước).
  - keyTerms (4): Command group, Task group, Interest group, Friendship group.

---

## Verify (2 lớp)

1. `tsc --noEmit` sạch; bundle `content/subjects.ts` OK.
2. Đo trên bundle:
   - **B3 metric = 0 flag:** chạy thuật toán NEW-keyterm (first-appearance toàn môn) → KHÔNG section nào của OB có >4 keyTerm mới. (Trước: 6 section flag thật.)
   - Section count: T2 10→12, T5 9→10, T6 12→14, T7 11→12 (các topic khác giữ nguyên).
   - Tổng keyTerms toàn môn KHÔNG đổi (chỉ di chuyển, không thêm/xóa).
   - G1: So-what T6 vẫn ở block cuối của section cuối (s12c); 13/13 topic giữ So-what-at-end.
   - E3: 13/13 topic vẫn có ≥1 cross-ref (câu Mắt xích T7 còn trong s1).
   - knowledgeMap: không còn node nào trỏ sectionId không tồn tại; các concept đã chuyển trỏ đúng id mới (spot-check: halo→s6, recency→s6b, hindsight→s8b, engagement→s4b, telecommuting→s11, EIP→s11b, ESOP→s12c, friendship group→s1b).
   - Render: `node rendercheck.mjs organizational-behavior topic-02` (và topic-05/06/07) PASS.
