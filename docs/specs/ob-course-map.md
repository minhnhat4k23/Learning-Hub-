# Spec — Course Map cấp-môn (cơ chế chung) + nội dung OB

> **Trạng thái:** Chaliyah đã CHỐT lens (khung 3 cấp + 4 chuỗi) ngày 2026-07-13.
> **Phạm vi:** (1) cơ chế render course map dùng chung mọi môn; (2) nội dung course map cho môn **Organizational Behavior** (13 topic). KHÔNG đụng nội dung 13 topic đã soạn, KHÔNG thêm course map cho môn khác trong task này.
> **Đọc kèm:** `docs/specs/codex-handoff.md` (hợp đồng executor), `docs/specs/workflow-soan-mon-moi.md` §4 (luật visual).

## 1. Mục đích (pedagogy)

Trang môn `/{subject}` hiện chỉ là danh sách topic — 13 topic OB đang là 13 "ốc đảo". Course map bổ sung tầng liên kết trên-topic để người học nắm **khung của cả môn** trước khi/trong khi học từng topic:

- **Khung môn (hard frame)**: 3 cấp phân tích Individual → Group → Organizational theo **Basic OB Model, Robbins & Judge (2019)** — khung này đã có trong Topic 00 của content, không phải kiến thức mới.
- **Chuỗi khái niệm (soft lens)**: 4 chuỗi xuyên topic cho thấy kiến thức "chảy" giữa các topic. Đây là **góc nhìn liên hệ do người soạn tổng hợp**, KHÔNG phải trích sách → caption phải ghi rõ điều này (luật Hard theory vs Soft lens).

## 2. Cơ chế (code) — 3 thay đổi

### 2.1 `content/types.ts` — mở rộng schema (chỉ thêm field optional)

```ts
export type CourseThread = {
  title: string;
  description?: string;
  diagram: Diagram; // engine "flow"
};

export type Subject = {
  // ... giữ nguyên các field hiện có
  courseMap?: Diagram;          // render bằng KnowledgeMapGrouped
  courseThreads?: CourseThread[]; // mỗi thread render bằng FlowDiagram
};

export type FlowNode = {
  // ... giữ nguyên
  href?: string; // link sang trang khác (vd "/organizational-behavior/topic-01")
};
```

Không đổi/di chuyển field nào khác. Môn không có `courseMap` → mọi trang render y như cũ.

### 2.2 `app/components/teaching/KnowledgeMapGrouped.tsx` — hỗ trợ `href`

Trong detail panel của chip (chỗ đang render nút "Đến phần học" khi có `sectionId`):

- Nếu node có `href` → render link (Next `<Link>`) nhãn **"Mở topic"**, style giống nút "Đến phần học" hiện có.
- Nếu chỉ có `sectionId` → giữ nguyên behavior anchor `#sectionId` như hiện tại.
- `href` ưu tiên hơn `sectionId` nếu cả hai cùng có (course map chỉ dùng `href`).

### 2.3 `app/[subject]/page.tsx` — render 2 khối mới TRÊN danh sách topic

Thứ tự trang: header môn → **"Bản đồ môn học"** (nếu `subject.courseMap`) → **"Chuỗi khái niệm"** (nếu `subject.courseThreads`) → danh sách topic như cũ.

- Khối "Bản đồ môn học": heading nhỏ uppercase (giống style heading "Knowledge map" trong `KnowledgeMap.tsx`) + `<KnowledgeMapGrouped diagram={subject.courseMap} />`.
- Khối "Chuỗi khái niệm": heading tương tự; mỗi thread render `title` (font-semibold nhỏ) + `description` (text-xs zinc-500) + `<FlowDiagram diagram={thread.diagram} />`.
- Trang hiện là server component, `KnowledgeMapGrouped`/`FlowDiagram` là client component — import trực tiếp là được, không cần wrapper.
- Container: danh sách topic đang nằm trong `max-w-3xl`; 2 khối mới dùng container rộng hơn (`max-w-5xl`) để map/diagram không bị bóp — giữ danh sách topic ở `max-w-3xl` như cũ.

## 3. Nội dung OB — `courseMap` (đặt trong `content/organizational-behavior.ts`)

Khai báo cạnh chỗ export subject OB (file này sở hữu nội dung; môn khác không đụng).

Cấu trúc cây 3 tầng (KnowledgeMapGrouped cần `parent` đầy đủ):

- **Root** `ob-root` — label "Organizational Behavior", group `purpose`, detail: "Nghiên cứu HỆ THỐNG hành vi con người ở 3 cấp — cá nhân → nhóm → tổ chức — để cải thiện organizational effectiveness (Robbins & Judge, 2019)."
- **4 group node** (parent = `ob-root`), mỗi nhóm 1 màu:
  | id | label | group | detail |
  |---|---|---|---|
  | `lv-found` | Nền tảng | `purpose` | Khung của cả môn: OB là gì, Basic OB Model (Inputs → Processes → Outcomes), 4 objectives |
  | `lv-ind` | Individual level | `lo` | Con người mang gì vào tổ chức và nó thành hành vi thế nào (T1–T6) |
  | `lv-grp` | Group level | `concept` | Khi cá nhân làm việc cùng nhau: nhóm, xung đột, team, dẫn dắt (T7–T10) |
  | `lv-org` | Organizational level | `term` | Tầng tổ chức: văn hóa và thay đổi (T11–T12) |
- **13 chip topic** (parent = group node tương ứng), group cùng màu với group node cha:
  | id | label | parent | href |
  |---|---|---|---|
  | `t00` | T0 · Introduction to OB | `lv-found` | `/organizational-behavior/topic-00` |
  | `t01` | T1 · Personality & Learning Styles | `lv-ind` | `/organizational-behavior/topic-01` |
  | `t02` | T2 · Perception & Common Biases | `lv-ind` | `/organizational-behavior/topic-02` |
  | `t03` | T3 · Personal Values & Valuing Diversity | `lv-ind` | `/organizational-behavior/topic-03` |
  | `t04` | T4 · Emotions & Moods | `lv-ind` | `/organizational-behavior/topic-04` |
  | `t05` | T5 · Attitudes & Issues of Dissonance | `lv-ind` | `/organizational-behavior/topic-05` |
  | `t06` | T6 · Motivation | `lv-ind` | `/organizational-behavior/topic-06` |
  | `t07` | T7 · Group Properties | `lv-grp` | `/organizational-behavior/topic-07` |
  | `t08` | T8 · Conflict and Collaboration | `lv-grp` | `/organizational-behavior/topic-08` |
  | `t09` | T9 · Team Lifecycle and Team Effectiveness | `lv-grp` | `/organizational-behavior/topic-09` |
  | `t10` | T10 · Leadership and Followership | `lv-grp` | `/organizational-behavior/topic-10` |
  | `t11` | T11 · Organizational Culture | `lv-org` | `/organizational-behavior/topic-11` |
  | `t12` | T12 · Organizational Change and Work Stress | `lv-org` | `/organizational-behavior/topic-12` |
- **`detail` của mỗi chip = NGUYÊN VĂN string `bigIdea` của topic đó** (copy từ chính file này — cấm viết mới/tóm tắt lại, tránh méo nghĩa). Tham chiếu bằng biến (vd `topic01.bigIdea`) thay vì copy chuỗi, để không lệch khi bigIdea được sửa.
- `caption`: "Khung 3 cấp theo Basic OB Model (Robbins & Judge, 2019). Bấm chip để xem bản chất topic và mở trang topic."
- KHÔNG khai báo `edges` (KnowledgeMapGrouped không dùng edges).

## 4. Nội dung OB — `courseThreads` (4 chuỗi, soft lens)

Mọi diagram: engine `flow`. Nhãn cạnh NGẮN (luật §4 workflow). Node `detail` viết đúng như spec dưới — Codex KHÔNG tự sáng tác thêm ý mới.

### Thread 1 — "Từ nhận thức đến hành động" (layout `horizontal`, chuỗi 5 node)

`description`: "Góc nhìn liên hệ: vì sao học T1→T6 theo thứ tự đó — mỗi topic là một mắt xích từ 'con người mang gì vào' đến hành vi."

| id | label | detail |
|---|---|---|
| `th1-input` | Cá nhân mang gì vào (T1·T3·T4) | Personality (T1), values (T3), emotions & moods (T4) là input cá nhân — chúng định hình cách ta nhìn và phản ứng. |
| `th1-perc` | Perception (T2) | Ta hành xử theo thực tại-được-diễn-giải, không phải thực tại — input cá nhân đi qua bộ lọc perception. |
| `th1-att` | Attitudes (T5) | Perception nuôi cognitive component của attitude; attitude là đánh giá +/− về đối tượng. |
| `th1-mot` | Motivation (T6) | Attitude và nhu cầu chuyển thành intensity–direction–persistence của nỗ lực. |
| `th1-beh` | Behavior & Performance | Đầu ra ở cấp cá nhân trong Basic OB Model: task performance, OCB, withdrawal. |

Edges: `th1-input→th1-perc` "định hình", `th1-perc→th1-att` "nuôi", `th1-att→th1-mot` "chuyển thành nỗ lực", `th1-mot→th1-beh` "thúc đẩy".

### Thread 2 — "Từ cá nhân đến đội nhóm" (layout `horizontal`, chuỗi 4 node)

`description`: "Góc nhìn liên hệ: khác biệt cá nhân không mất đi khi vào nhóm — chúng trở thành động lực học của nhóm."

| id | label | detail |
|---|---|---|
| `th2-diff` | Khác biệt cá nhân (T1·T3) | Personality + values = deep-level diversity mà mỗi người mang vào nhóm. |
| `th2-grp` | Group Properties (T7) | Vào nhóm, khác biệt bị ràng bởi roles, norms, status, size, cohesiveness. |
| `th2-conf` | Conflict & Collaboration (T8) | Khác biệt + tương tác sinh perceived incompatibility; xử lý xung đột quyết định nhóm vỡ hay lớn. |
| `th2-team` | Team Effectiveness (T9) | Nhóm xử lý tốt khác biệt & xung đột mới thành team hiệu quả qua lifecycle. |

Edges: `th2-diff→th2-grp` "gia nhập", `th2-grp→th2-conf` "va chạm", `th2-conf→th2-team` "xử lý tốt →".

### Thread 3 — "Dẫn dắt" (layout `tree`, hub 1 cha + 3 con, PHẢI set `parent`)

`description`: "Góc nhìn liên hệ: leadership (T10) không đứng riêng — nó là đòn bẩy tác động vào ba topic đã học."

| id | label | parent | detail |
|---|---|---|---|
| `th3-lead` | Leadership & Followership (T10) | — | Ảnh hưởng người khác hướng về mục tiêu; hiệu quả tùy contingency + followership. |
| `th3-mot` | Motivation (T6) | `th3-lead` | Leader tác động intensity–direction–persistence của nỗ lực người theo. |
| `th3-conf` | Conflict (T8) | `th3-lead` | Leader điều phối xung đột: giữ functional, chặn dysfunctional. |
| `th3-team` | Team (T9) | `th3-lead` | Leader dựng điều kiện team hiệu quả: context, composition, process. |

Edges (cạnh quan hệ → BẮT BUỘC nhãn): `th3-lead→th3-mot` "truyền động lực", `th3-lead→th3-conf` "điều phối", `th3-lead→th3-team` "tạo điều kiện".

### Thread 4 — "Tổ chức vận động" (layout `horizontal`, chuỗi 4 node)

`description`: "Góc nhìn liên hệ: vòng khép của môn — tầng tổ chức dội ngược về cảm xúc & thái độ của từng cá nhân."

| id | label | detail |
|---|---|---|
| `th4-cult` | Culture (T11) | Hệ giá trị chung định hình hành vi — vừa là chất keo vừa là quán tính của tổ chức. |
| `th4-chg` | Change (T12) | Thay đổi tổ chức phải vượt qua quán tính văn hóa và resistance. |
| `th4-str` | Work Stress (T12) | Thay đổi là nguồn stressor lớn với cá nhân. |
| `th4-ind` | Emotions & Attitudes (T4·T5) | Stress dội về affect và job attitudes — vòng quay lại cấp cá nhân. |

Edges: `th4-cult→th4-chg` "quán tính", `th4-chg→th4-str` "gây", `th4-str→th4-ind` "dội về cá nhân".

### Caption chung cho khối threads

Mỗi diagram thread thêm `caption` bắt đầu bằng: "Góc nhìn liên hệ (lens) tổng hợp từ nội dung các topic — không phải trích nguyên văn sách." (có thể nối thêm cách đọc riêng của thread).

## 5. Ràng buộc thực thi (Codex)

- KHÔNG sửa nội dung 13 topic (sections/quiz/bigIdea) — chỉ THÊM `courseMap` + `courseThreads` vào subject OB.
- KHÔNG thêm courseMap cho môn khác; môn khác phải render y như cũ (kiểm tra lại 1 trang môn khác sau khi sửa page).
- Layout flow chỉ `horizontal`/`tree` (KHÔNG `radial`); thread 3 dùng `tree` PHẢI set `parent` cho 3 node con.
- Không đổi field nào đang có trong `types.ts`, chỉ thêm optional như §2.1.
- Không commit/push.

## 6. Verify 2 lớp

- **Lớp A**: `npx tsc --noEmit` PASS; Playwright render check trang `/organizational-behavior` ở 375/768/1440 (không horizontal scroll, không pageerror, nhãn cạnh không bị node che); click 1 chip → detail mở + link "Mở topic" điều hướng đúng; kiểm 1 trang môn khác (vd `/managerial-accounting`) không đổi.
- **Lớp B (completeness của map)**: đủ 13/13 topic, mỗi topic đúng 1 chip, `href` khớp slug thật, `detail` chip tham chiếu đúng `bigIdea` (dùng biến, không copy chuỗi); 4 thread đúng node/edge/nhãn như §4, không có ý mới ngoài spec.

## 7. Coverage matrix (verify 2026-07-13, Claude)

| Hạng mục | Trạng thái |
|---|---|
| 13 chip topic + href đúng slug | ✅ Có (t00–t12, href khớp slug topic-00…topic-12) |
| Detail chip = bigIdea (tham chiếu biến) | ✅ Có (`topicNN.bigIdea`, không copy chuỗi) |
| 4 threads đúng spec §4 | ✅ Có (node/edge/nhãn/caption khớp 100%; thread 3 tree có parent) |
| Lớp A tsc + render 3 breakpoint | ✅ PASS (`tsc --noEmit` sạch; 375/768/1440 không hscroll, không pageerror; chip T2 mở detail + link "Mở topic" → `/organizational-behavior/topic-02`) |
| Môn khác render như cũ | ✅ `/managerial-accounting` không đổi (screenshot 3 breakpoint) |

**Lệch spec còn tồn (chờ xử lý):** §2.3 yêu cầu page đọc `subject.courseMap`, nhưng Codex KHÔNG gắn field vào subject OB trong `content/subjects.ts` mà hardcode import + fallback `subject.id === "organizational-behavior"` trong `app/[subject]/page.tsx`. Hoạt động đúng nhưng sai cơ chế (page phải subject-agnostic). → Xử lý ở §8.

## 8. Fix follow-up (Chaliyah duyệt 2026-07-13) — 2 việc, gộp 1 lần giao Codex

### 8.1 Sửa lệch cơ chế: page phải subject-agnostic

- `content/subjects.ts`: import `organizationalBehaviorCourseMap`, `organizationalBehaviorCourseThreads` từ `./organizational-behavior`; gắn vào entry OB:
  ```ts
  {
    id: "organizational-behavior",
    // ...các field hiện có
    courseMap: organizationalBehaviorCourseMap,
    courseThreads: organizationalBehaviorCourseThreads,
  }
  ```
- `app/[subject]/page.tsx`: XOÁ import 2 biến OB + xoá 2 khối fallback `subject.id === "organizational-behavior"`; chỉ còn `const courseMap = subject.courseMap;` và `const courseThreads = subject.courseThreads;` (hoặc dùng trực tiếp). Phần JSX render giữ nguyên.

### 8.2 Sửa subtitle OB lỗi thời

`content/subjects.ts`, entry OB — thay subtitle placeholder bằng ĐÚNG chuỗi sau (không tự viết lại):

```
"Hành vi con người trong tổ chức qua 3 cấp: cá nhân (personality, perception, values, emotions, attitudes, motivation), nhóm (groups, conflict, teams, leadership) và tổ chức (culture, change & stress)."
```

KHÔNG đụng subtitle các môn khác trong task này.

### 8.3 Verify sau fix

- `npx tsc --noEmit` PASS.
- `/organizational-behavior` render đủ 2 khối map + threads như trước; subtitle mới hiển thị; `/managerial-accounting` không đổi.

| Hạng mục fix | Trạng thái (verify 2026-07-14, Claude) |
|---|---|
| subjects.ts gắn courseMap/courseThreads, page hết hardcode | ✅ (page chỉ đọc `subject.courseMap`/`courseThreads`, hết import biến OB + fallback id) |
| Subtitle OB đúng chuỗi §8.2 | ✅ (khớp nguyên văn, hiển thị đúng trên trang) |
| tsc + render lại 2 trang | ✅ (`tsc --noEmit` PASS; OB + Managerial 375/768/1440 không hscroll, không pageerror; chip T2 → link đúng) |
