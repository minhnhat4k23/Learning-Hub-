# Spec: DTB — 2 cosmetic fixes (Topic 02)

> **Loại:** Surgical edit — chỉ sửa label/id, KHÔNG đổi logic, không thêm/bớt block.
> **File cần sửa:** `content/dtb.ts` — chỉ trong object `topic02`.
> **Executor:** đọc spec, tìm đúng dòng, sửa exact string. Chạy `npx tsc --noEmit` sau khi xong. Không commit.

---

## FIX 1 — s13 heading chưa nhắc cột "Personal Interest"

Section `s13` đã có cột Personal Interest trong comparisonBlock, nhưng heading vẫn liệt kê 3 nhóm cũ → lệch giữa tiêu đề và nội dung.

```ts
// OLD (khoảng line 3471):
heading: "Loại ứng dụng: productivity / graphics / communications",

// NEW:
heading: "Loại ứng dụng: 4 nhóm chính (productivity / graphics & media / communications / personal interest)",
```

---

## FIX 2 — node id `s9-oo` không đồng bộ style

Trong section `s9`, các node ngôn ngữ dùng gạch dưới (`s9_ml`, `s9_asm`, `s9_hll`) nhưng node OO dùng gạch ngang (`s9-oo`). Đổi cho nhất quán. **Phải sửa CẢ node id LẪN edge tham chiếu** — `s9-oo` xuất hiện đúng 2 chỗ; nếu sửa lệch sẽ vỡ flowchart.

```ts
// OLD (node, khoảng line 2910):
id: "s9-oo",

// NEW:
id: "s9_oo",
```

```ts
// OLD (edge, khoảng line 2920):
{ from: "s9_hll", to: "s9-oo", label: "cao hơn" },

// NEW:
{ from: "s9_hll", to: "s9_oo", label: "cao hơn" },
```

Kiểm tra: grep `s9-oo` trong toàn file phải còn **0 kết quả** sau khi sửa.

---

## Verify

```bash
npx tsc --noEmit
```

Phải pass. Báo lại Chaliyah; không commit, không đổi gì ngoài 2 fix trên.
