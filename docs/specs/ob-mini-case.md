# OB — Mini-case tổng hợp (Gap F rubric pedagogy, case method)

> **Nguồn gốc:** Gap F trong `danh-gia-pedagogy-ob.md` §3 — case method chuẩn HBS: một tình huống buộc dùng ≥2–3 khái niệm cùng lúc để phân tích; quan trọng cho môn định tính thi tự luận/tình huống.
> **Kiểm soát chất lượng (option C — Chaliyah chốt 2026-07-17):** tình huống là MÔ PHỎNG (tự biên theo 4 chuỗi khái niệm của Course Map, ghi rõ trên UI); motif mượn từ ví dụ thật trong sách được cite cấp chương; mọi khái niệm trong khung phân tích PASS **traceability check** về content đã audit sách (12/12 nhóm khái niệm, Claude 2026-07-17). Format case (3 câu hỏi + reveal + dòng Bẫy) đã duyệt qua case mẫu.
> **Ràng buộc chung:** `docs/specs/codex-handoff.md`. Cơ chế CHUNG mọi môn (giống `Subject.courseMap`/on-tap): môn nào có `miniCases` tự có trang. KHÔNG đụng QuizPlayer/CumulativeQuiz/component đang chạy.

## 1. Cơ chế — 2 file mới + 3 chỗ sửa

### 1.1 Types — thêm OPTIONAL vào `content/types.ts` (không đổi field đang có)

```ts
export type MiniCaseQuestion = {
  id: string;
  /** Câu hỏi phân tích (đề tự luận). */
  prompt: string;
  /** Khung phân tích chuyên gia — reveal sau khi tự nghĩ. */
  analysis: string;
  /** Bẫy thường gặp khi trả lời. */
  trap: string;
};

export type MiniCase = {
  id: string;
  title: string;
  /** Tên chuỗi khái niệm (thread) của Course Map mà case bám theo. */
  thread: string;
  /** Topic liên quan để render link. */
  topics: { slug: string; order: number }[];
  /** Tình huống (không nêu tên khái niệm). */
  scenario: string;
  /** Dòng nguồn hiển thị dưới tình huống. */
  sourceNote: string;
  questions: MiniCaseQuestion[];
};
```

Và trong `Subject`: `miniCases?: MiniCase[];`

### 1.2 File mới — `app/[subject]/mini-case/page.tsx` (server)

- `generateStaticParams` như `app/[subject]/on-tap/page.tsx`.
- `subject = getSubject(subjectId)`; nếu không có subject hoặc `!subject.miniCases?.length` → `notFound()`.
- Render (style đồng bộ trang on-tap: nền `bg-zinc-50 dark:bg-zinc-950`, container `max-w-3xl`):
  - Link `← {subject.title}` về `/${subject.id}`.
  - H1 `Mini-case tổng hợp`. Dòng phụ: "Mỗi case buộc dùng nhiều khái niệm từ nhiều topic cùng lúc — luyện đúng dạng đề tự luận/tình huống."
  - `<MiniCaseStudy subjectId={subject.id} cases={subject.miniCases} />`.

### 1.3 File mới — `app/components/MiniCaseStudy.tsx` (client)

Props: `{ subjectId: string; cases: MiniCase[] }`. Không dependency mới, không localStorage, không random.

- Danh sách case dạng card (`rounded-2xl border`, như card chương). Mỗi card:
  - Header: `title` (font-semibold) + badge pill thread (`bg-zinc-100`, text-xs) + hàng chip topic: mỗi topic là `<Link href={/${subjectId}/${slug}}>` label `T{order}` (pill nhỏ).
  - `scenario`: đoạn văn (leading-relaxed). Dưới nó `sourceNote` (text-xs italic zinc-500).
  - Callout nhỏ (amber nhạt) nhắc: "Tự viết phân tích ra giấy trước khi mở khung — đây là dạng đề tự luận."
  - Mỗi question: `prompt` (font-medium) + nút "Mở khung phân tích chuyên gia" (state `useState<Record<string, boolean>>` key `caseId:questionId`). Khi mở: hiện `analysis` (nền emerald nhạt, border emerald như rationale đúng của QuizPlayer) + dòng `trap` in nghiêng, prefix "Bẫy thường gặp: " (text-rose-700/dark:text-rose-300, text-sm). Nút đổi thành "Thu gọn".
- Mobile 375px không hscroll.

### 1.4 Sửa `content/organizational-behavior.ts` — thêm `miniCases` vào subject OB

Data 4 case ở §2 (VERBATIM). Đặt mảng `miniCases` cạnh `courseThreads` hiện có.

### 1.5 Sửa `app/[subject]/page.tsx` — card entry (DUY NHẤT chỗ này)

Dưới card "Ôn tập tổng hợp (interleaved)" (cùng khối): nếu `subject.miniCases?.length` → card link `/${subject.id}/mini-case`, tiêu đề "Mini-case tổng hợp (case method)", mô tả "{N} tình huống — mỗi case dùng nhiều khái niệm từ nhiều topic, luyện dạng đề tự luận." Style y hệt card on-tap.

## 2. Nội dung 4 case (VERBATIM — không viết lại)

### Case 1 — id `case-01`, thread "Từ nhận thức đến hành động", topics T1·T2·T5·T6

**title:** Nhân viên mới của phòng Kế hoạch

**scenario:** Hân vào phòng Kế hoạch của một công ty sản xuất được ba tháng. Ngày đầu đi làm, xe hỏng giữa đường khiến cô đến trễ 40 phút — trưởng phòng Tùng nhớ mãi chuyện đó. Hân ít nói trong các buổi họp đông người nhưng phần việc nào nhận cô cũng nộp đúng hạn, số liệu kỹ và sạch. Tùng thì quen đánh giá nhân viên qua sự sôi nổi khi họp; anh kết luận Hân "thiếu nhiệt huyết, không chủ động", và từ đó chỉ giao cho cô việc nhập liệu đơn giản, còn các phân tích quan trọng giao cho người khác dù Hân từng đề nghị được thử. Gần đây Hân bắt đầu thấy việc mình làm "chẳng để làm gì", thôi không đề nghị nữa, và âm thầm cập nhật CV.

**sourceNote:** Tình huống mô phỏng — khái niệm phân tích lấy từ nội dung T1/T2/T5/T6 đã đối chiếu sách.

- **q1 prompt:** Đánh giá "thiếu nhiệt huyết, không chủ động" của Tùng về Hân đang mắc những lỗi perception/attribution nào (T2)?
- **q1 analysis:** Ấn tượng đầu (đi trễ ngày đầu) chi phối đánh giá về sau — đúng bẫy employment interview/first impression của T2. Tùng quy hành vi đi trễ cho nguyên nhân internal (con người Hân) trong khi nguyên nhân là external (xe hỏng) — fundamental attribution error. Việc lấy "sôi nổi khi họp" làm thước đo duy nhất là selective perception + halo ngược: một đặc điểm (ít nói) phủ bóng lên toàn bộ năng lực; bằng chứng ngược (nộp đúng hạn, số liệu kỹ) bị bỏ qua.
- **q1 trap:** Chỉ gọi tên 1 lỗi rồi dừng — đề tự luận ăn điểm ở việc chỉ ra NHIỀU lỗi cùng vận hành và móc từng lỗi vào chi tiết cụ thể của tình huống.
- **q2 prompt:** Phân tích chuỗi từ perception của Tùng đến attitude và motivation của Hân (T5, T6): vì sao Hân từ "đề nghị được thử" chuyển sang "âm thầm cập nhật CV"?
- **q2 analysis:** Perception của Tùng thành quyết định giao việc → với Hân đó là chuỗi sự kiện tiêu cực lặp lại. Attitude của Hân đủ 3 thành phần: cognitive ("việc mình làm chẳng để làm gì"), affective (chán nản), behavioral (ngừng đề nghị, cập nhật CV). Theo expectancy theory (T6), mắt xích effort→performance→reward của Hân đứt: cô tin rằng cố gắng thêm cũng không được giao việc quan trọng, nên intensity giảm là hệ quả hợp lý, không phải "lười". Hành vi hiện tại của Hân nằm ở ô Neglect/chuẩn bị Exit trong khung EVLN (T5) — im lặng, rút lui thay vì lên tiếng.
- **q2 trap:** Đổ cho "Hân hết động lực" như một trạng thái tự nhiên — bỏ mất điểm mấu chốt: motivation là process bị bóp từ phía thiết kế công việc và đánh giá của sếp, không phải trait của Hân.
- **q3 prompt:** Personality của Hân có "sai" so với công việc không? Dùng T1 để đề xuất cách Tùng nên nhìn và giao việc lại.
- **q3 analysis:** Không có personality "sai" — chỉ có fit. Hân biểu hiện introversion + conscientiousness cao (nộp đúng hạn, số liệu kỹ) — đúng profile dự báo hiệu suất tốt cho việc phân tích. Personality chỉ bộc lộ tùy tình huống: họp đông người là tình huống bất lợi cho Hân, nhưng không đại diện cho năng lực phân tích. Tùng nên (1) tách kênh đánh giá khỏi biểu hiện khi họp, (2) giao thử một phân tích quan trọng có deadline và tiêu chí rõ, (3) tạo kênh đóng góp phù hợp (viết trước, họp nhóm nhỏ) — person-job fit là điều chỉnh việc và bối cảnh, không phải đòi Hân đổi tính.
- **q3 trap:** Kết luận "Hân hướng nội nên không hợp làm việc nhóm" — lặp lại đúng lỗi dán nhãn mà T1 cảnh báo.

### Case 2 — id `case-02`, thread "Từ cá nhân đến đội nhóm", topics T7·T8·T9

**title:** Nhóm đồ án bốn người

**scenario:** Nhóm đồ án môn Quản lý sản xuất có bốn thành viên: Vy (nhóm trưởng, học giỏi, quen làm hết phần khó), Khang (năng nổ phát biểu nhưng hay nộp trễ), Thảo (cẩn thận, ít nói), và Duy (mới chuyển lớp, chưa quen ai). Ba tuần đầu mọi thứ "êm": họp nhanh, không ai phản đối ai, Vy chia việc và tự gánh phần tổng hợp. Đến tuần thứ tư, Vy phát hiện phần của Khang làm sơ sài; cô sửa lại toàn bộ mà không nói với Khang. Khang biết được, cho rằng Vy "chơi trội", và bắt đầu chỉ trích các quyết định của Vy trong nhóm chat — kể cả những quyết định hợp lý. Thảo im lặng rút khỏi các buổi họp; Duy nói với bạn khác: "nhóm này 4 người nhưng thật ra chỉ có 2 người làm." Buổi họp gần nhất kết thúc bằng tranh cãi tay đôi Vy–Khang, ba người còn lại không ai lên tiếng.

**sourceNote:** Tình huống mô phỏng — khái niệm phân tích lấy từ nội dung T7/T8/T9 đã đối chiếu sách.

- **q1 prompt:** Ba tuần đầu nhóm "êm" có phải dấu hiệu nhóm đang vận hành tốt không? Dùng các khái niệm của T7 và T8 để đánh giá.
- **q1 analysis:** "Êm" ≠ tốt: nhóm chưa từng có functional conflict (T8 — nhóm quá êm có thể đang né tranh luận nhiệm vụ); câu nói của Duy là dấu hiệu social loafing (T7 — nhóm 4 người nhưng đóng góp không đều, không có accountability cá nhân); Vy "quen làm hết phần khó" là role tự gán chưa được nhóm thống nhất → xung đột vai trò ngầm.
- **q1 trap:** Trả lời "nhóm tốt vì không cãi nhau" — nhầm cohesiveness bề mặt với hiệu quả.
- **q2 prompt:** Xung đột Vy–Khang thuộc loại nào, và cách mỗi người đang xử lý rơi vào intention nào trong 5 kiểu? Cách nào phù hợp hơn cho tình huống này?
- **q2 analysis:** Khởi đầu là task conflict (chất lượng phần việc của Khang) nhưng đã chuyển hóa thành relationship conflict (chỉ trích cá nhân, "chơi trội") — điểm mấu chốt của T8: task conflict xử lý kém sẽ lây sang quan hệ. Vy đang avoiding (sửa bài không nói), Khang đang competing (công kích); tình huống cần collaborating — nói thẳng vấn đề chất lượng, tách người khỏi việc.
- **q2 trap:** Chỉ phân loại xung đột mà không nhận ra sự chuyển hóa task → relationship.
- **q3 prompt:** Nếu bạn là Vy, dùng khung của T9 (Team Effectiveness), bạn sẽ sửa nhóm này từ đâu?
- **q3 analysis:** Chẩn đoán theo đúng thứ tự model T9: Context (chưa có chuẩn đánh giá đóng góp cá nhân → sửa trước), Composition (vai trò chưa khớp năng lực từng người), Process (thiếu psychological safety — Thảo im lặng, Duy chỉ dám nói sau lưng; common purpose chưa được thống nhất lại).
- **q3 trap:** Nhảy ngay vào "họp giảng hòa" (Process) trong khi gốc nằm ở Context.

### Case 3 — id `case-03`, thread "Dẫn dắt", topics T10·T6·T8·T9

**title:** Kỹ sư giỏi nhất lên làm trưởng phòng

**scenario:** Minh là kỹ sư giỏi nhất phòng R&D của một công ty cơ khí và vừa được bổ nhiệm trưởng phòng. Tin rằng "mình giỏi nhất nên mình quyết là đúng", Minh duyệt từng bản vẽ, sửa từng chi tiết, yêu cầu mọi thứ làm theo cách của mình. Khi hai kỹ sư senior tranh luận gay gắt về hai hướng thiết kế cho sản phẩm mới, Minh cắt ngang: "Không cãi nữa, làm theo phương án A, tôi chịu trách nhiệm." Vài tháng sau, phòng yên ắng hẳn: không ai tranh luận, các bản thiết kế nộp lên đều "an toàn" và na ná nhau, hai kỹ sư trẻ được đánh giá tiềm năng nhất lần lượt xin chuyển bộ phận, một người nói thẳng khi phỏng vấn nghỉ: "Ở đây làm đúng ý sếp quan trọng hơn làm đúng."

**sourceNote:** Tình huống mô phỏng — khái niệm phân tích lấy từ nội dung T10/T6/T8/T9 đã đối chiếu sách.

- **q1 prompt:** Minh đang dựa vào những nguồn quyền lực nào, và vì sao "giỏi nhất phòng" không tự động biến Minh thành leader (T10)?
- **q1 analysis:** Minh dựa vào formal authority của chức vụ và expertise cá nhân — nhưng leadership = năng lực ẢNH HƯỞNG hướng tới tầm nhìn, không phải chức vụ. Chuyên môn giỏi tạo uy tín ban đầu, song cách dùng nó (duyệt từng chi tiết, áp cách của mình) triệt tiêu influence thật: người giỏi rời đi, người ở lại tuân thủ chứ không tin theo. Đây đúng bài học mở đầu T10: vị trí cho quyền ra lệnh, không cho được sự đi theo.
- **q1 trap:** Đồng nhất "leader giỏi chuyên môn" với "leader hiệu quả" — trait/năng lực chỉ là một phần, hiệu quả nằm ở hành vi và tình huống.
- **q2 prompt:** Soi phong cách của Minh bằng behavioral approach (initiating structure / consideration) và góc nhìn contingency (T10): lệch ở đâu, nên điều chỉnh thế nào?
- **q2 analysis:** Minh cực cao về initiating structure (kiểm soát quy trình, chuẩn hóa theo ý mình) và gần như bằng không về consideration (không lắng nghe, không tin cấp dưới) — mất cân bằng mà behavioral approach cảnh báo. Theo contingency, phong cách phải tùy tình huống: R&D gồm kỹ sư senior giàu kinh nghiệm là bối cảnh follower trưởng thành cao — càng cần trao quyền, giảm chỉ đạo chi tiết; micromanage chỉ phù hợp (nếu có) với nhân sự mới việc. Minh đang dùng một style cho mọi người, mọi việc.
- **q2 trap:** Kết luận "Minh nên bớt khó tính" chung chung — không dùng đúng cặp trục initiating structure/consideration và không gắn với đặc điểm tình huống R&D.
- **q3 prompt:** Lệnh "không cãi nữa" và sự yên ắng của phòng nói gì theo T8/T9? Minh cần làm gì để truyền lại động lực (T6)?
- **q3 analysis:** Tranh luận giữa hai senior về hướng thiết kế là functional (task) conflict — thứ nuôi sáng tạo của R&D; dập nó khiến phòng rơi vào trạng thái thiếu xung đột chức năng: bản vẽ "an toàn, na ná nhau". Câu nói lúc nghỉ việc ("làm đúng ý sếp quan trọng hơn làm đúng") là chỉ dấu psychological safety đã mất (T9). Về T6: expectancy đứt ở chỗ nỗ lực sáng tạo không dẫn tới ghi nhận (mọi thứ bị sửa theo ý sếp); Minh cần chuyển sang đặt goal rõ + feedback thay vì kiểm soát từng bước, khôi phục tranh luận kỹ thuật có cấu trúc (ví dụ chỉ định người phản biện), và gắn ghi nhận với chất lượng giải pháp, không phải mức độ giống ý mình.
- **q3 trap:** Xem "phòng yên ắng, không cãi nhau" là thành tích quản lý — chính là dysfunctional ở mức xung đột QUÁ THẤP trên đường cong U ngược.

### Case 4 — id `case-04`, thread "Tổ chức vận động", topics T11·T12·T4·T5

**title:** Công ty gia đình chuyển mình

**scenario:** Song Long là công ty logistics gia đình 25 năm tuổi. Văn hóa ở đây in đậm dấu ấn ông Long — nhà sáng lập: trung thành được trọng hơn hiệu suất, mọi quyết định lớn nhỏ đều "hỏi ý chú Long", nhân viên phần lớn do người quen giới thiệu và được dạy "cách của Song Long" từ ngày đầu. Khi con gái ông — Trang, du học về — lên CEO, cô triển khai hệ thống ERP, chuẩn hóa quy trình và tuyển giám đốc vận hành từ bên ngoài. Các trưởng bộ phận lâu năm phản ứng: người trì hoãn nhập liệu, người nói riêng với ông Long rằng "con bé làm mất chất Song Long". Trang đáp lại bằng cách siết deadline chuyển đổi. Ba tháng sau, đơn nghỉ ốm tăng vọt, hai quản lý kho lâu năm nộp đơn nghỉ, nhân viên trẻ thì than "mắc kẹt giữa hai phe".

**sourceNote:** Tình huống mô phỏng; motif "văn hóa mang dấu ấn nhà sáng lập" lấy từ ví dụ thật trong sách (Ch.16: văn hóa hình thành từ founder qua tuyển người cùng kiểu, socialization và hành vi làm gương — như Hyundai/Chung Ju-Yung, Microsoft/Bill Gates).

- **q1 prompt:** Văn hóa Song Long đã hình thành và được "giữ sống" bằng những cơ chế nào (T11)? Vì sao chính nó giờ thành lực cản?
- **q1 analysis:** Đúng ba cơ chế sách mô tả: văn hóa khởi từ founder (ông Long tuyển người nghĩ giống mình — người quen giới thiệu; socialization — dạy "cách của Song Long" từ ngày đầu; hành vi làm gương — mọi thứ "hỏi ý chú Long"). Nó được giữ sống qua selection, top management và socialization. Văn hóa từng là tài sản (gắn kết, bản sắc) nay thành liability: giá trị "trung thành > hiệu suất" và thói quen xin ý kiến một người khiến tổ chức không hấp thụ nổi quy trình chuẩn hóa — đúng ca "văn hóa thành rào cản thay đổi" của T11.
- **q1 trap:** Mô tả văn hóa như "không khí chung chung" — đề ăn điểm khi chỉ ra CƠ CHẾ cụ thể (selection/socialization/hành vi lãnh đạo) đang tái sản xuất văn hóa mỗi ngày.
- **q2 prompt:** Phân tích các nguồn kháng cự thay đổi ở Song Long và đề xuất cách vượt kháng cự có khung (T12: nguồn kháng cự, tactics, Lewin/Kotter).
- **q2 analysis:** Nguồn kháng cự đủ cả cá nhân lẫn tổ chức: habit (quy trình cũ 25 năm), sợ bất định (ERP xa lạ), đe dọa lợi ích và quan hệ quyền lực (trưởng bộ phận mất vị thế "cánh tay chú Long"), và kháng cự nhóm có tổ chức (nói riêng với founder). Trang mắc lỗi kinh điển: chỉ TĂNG lực đẩy (siết deadline) mà không GIẢM lực cản. Theo Lewin, cô chưa unfreeze — chưa tạo cảm nhận cần thay đổi — đã ép move. Tactics phù hợp: communication & education (vì sao ERP sống còn), participation (kéo trưởng bộ phận vào thiết kế quy trình), và quan trọng nhất — liên minh với ông Long làm người bảo trợ thay đổi (Kotter: dựng guiding coalition trước, tạo short-term wins thay vì áp đặt toàn diện).
- **q2 trap:** Liệt kê đủ 8 tactics như trả bài — đề tình huống đòi CHỌN tactics khớp với từng nguồn kháng cự cụ thể trong case.
- **q3 prompt:** Giải thích làn sóng nghỉ ốm/nghỉ việc bằng chuỗi change → stress → cá nhân (T12, T4, T5) và đề xuất hai hướng quản stress cho Song Long.
- **q3 analysis:** Thay đổi tổ chức là stressor lớn: mơ hồ vai trò ("mắc kẹt giữa hai phe"), tăng demand (deadline chuyển đổi) trong khi resources (đào tạo, hỗ trợ) không tăng — stress kiểu hindrance chiếm ưu thế. Stress dội về cá nhân đúng chuỗi Thread 4: affect tiêu cực (T4) → job attitudes xấu đi (T5) → hành vi withdrawal: nghỉ ốm (triệu chứng thể chất + absenteeism) và Exit (hai quản lý kho) theo khung EVLN. Hai hướng quản: organizational approach — truyền thông rõ lộ trình, đào tạo ERP, thiết kế lại vai trò để giảm mơ hồ, tăng participation; individual approach — hỗ trợ quản lý thời gian, mạng hỗ trợ xã hội trong giai đoạn chuyển đổi.
- **q3 trap:** Xử lý nghỉ việc như vấn đề nhân sự rời rạc ("tuyển bù") — bỏ qua việc nó là TRIỆU CHỨNG của chuỗi change→stress chưa được quản.

## 3. Verify (Codex tự làm trước khi báo xong)

- `npx tsc --noEmit` sạch.
- Báo diff: 2 file mới (`app/[subject]/mini-case/page.tsx`, `app/components/MiniCaseStudy.tsx`) + 3 chỗ sửa (`content/types.ts` thêm optional, `content/organizational-behavior.ts` thêm data, `app/[subject]/page.tsx` card entry). Xác nhận KHÔNG đụng QuizPlayer/CumulativeQuiz/môn khác.
- Grep nhanh: 4 case id `case-01…04`, mỗi case 3 questions.
- KHÔNG chạy render check (Claude làm ở khâu review: 3 breakpoint + walkthrough reveal từng câu + kiểm tra môn khác không hiện card).

## 4. Kết quả verify — ✅ PASS (Claude, 2026-07-17)

- [x] Lớp A: tsc sạch; render 375/768/1440 không hscroll/pageerror, đủ 4 title + 12 nút reveal + 15 topic link; reveal q1 hiện analysis (emerald) + "Bẫy thường gặp:" + nút Thu gọn, thu gọn hoạt động; OB có entry card, MA KHÔNG có card và `/managerial-accounting/mini-case` → 404; screenshot soi mắt OK.
- [x] Lớp B: verbatim 48/48 fragment khớp §2 (4×[title+scenario+sourceNote+3×(prompt/analysis/trap)]); 15 topic ref đều là slug thật; types chỉ thêm optional (diff types.ts +25); diff 2 file mới + 4 file sửa — file thứ 4 là `content/subjects.ts` (+2, wiring `miniCases` vào subject OB, đúng pattern courseMap/courseThreads; spec §1.4 ghi thiếu chỗ này — lỗi spec, không phải Codex vượt phạm vi).
