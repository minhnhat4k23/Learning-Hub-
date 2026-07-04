# Spec: OB Topic 10 — Leadership and Followership (Characteristics of Leaders)

> **Loại:** Soạn mới topic hoàn chỉnh (rich teaching mode), thay placeholder `topic-10`. Helper đã port ở Topic 00-09.
> **Executor: Codex.** File `content/organizational-behavior.ts`. Đặt `const topic10` sau `topic09`; array thay `placeholder(10, "topic-10", ...)` (dòng ~10609) → `topic10`.
> **Nguồn (đã đọc đủ 2 file — SÁCH > slide):**
> - **Reading `Chapter 12 - Characteristics of Leaders` (Robbins & Judge, pp.216-236):** 7 LO. **Trait theories** (leadership = ability to influence a group toward a vision; 2 kết luận: traits dự đoán EMERGENCE/appearance tốt hơn là phân biệt effective/ineffective; Big Five + EI). **Behavioral theories** (Ohio State: initiating structure vs consideration; Michigan: employee-/production-oriented). **Contingency**: Fiedler model (LPC, situational favorableness), Situational Leadership Theory (Hersey-Blanchard), Path-Goal theory, Leader-Participation model. **LMX** (Exhibit 12-2, ingroup/outgroup, self-fulfilling prophecy, tác hại khi phân biệt mạnh). **Contemporary**: Charismatic (House — vision/articulation/risk/sensitivity/unconventional; dark side), **Transactional vs Transformational (Exhibit 12-4)**, **Full-range model (Exhibit 12-5)**. **Ethical leadership** (không value-free; socialized charismatic leadership → OCB, giảm conflict). **Servant leadership** (vượt tư lợi; listening/empathizing/persuading/stewardship; neg-corr narcissism; East Asian prototype). **Trust** (trust propensity; trust & culture — paternalistic; role of time = integrity/benevolence/ability; regaining trust: ability-violation apologize được, integrity-violation & deception thì không). **Mentoring** (mentor/protégé; career + psychosocial functions; lợi ích chủ yếu tâm lý). **Challenges**: **Attribution theory of leadership**; **Substitutes & Neutralizers (Exhibit 12-7, Kerr & Jermier)**; online leadership; selecting/training leaders.
> - **Slide `OB-Topic 10-Leadership Followership-Dr Lan Anh`** (64 trang, tên "Leadership is Half the Story"): nature of leadership (Drucker/Grace Hopper/Maxwell "influence — nothing more, nothing less"; everyone can lead); leadership vs management (Phil Dourado); **evolution 4 approaches** (Trait 1900s / Behavioral 1950s / Contingency 1960s / Contemporary 1980s+); **Situational Leadership II (Blanchard): S1 Directing, S2 Coaching, S3 Supporting, S4 Delegating**; **Contemporary era-grouping** (Full-range 1970s / Value-based & role-model 1980s / Inspirational 1990s / Resilient 2000s+); Emotional leadership (Goleman EI); Gartner 3 components (Authentic/Empathetic/Adaptive); Authentic leadership (George 5 chars; CCL 5 steps); Agile leadership 5; **HBR 6 leadership styles** (Coercive/Authoritative/Pacesetting/Affiliative/Democratic/Coaching — Goleman); self-leadership (lead org→people→yourself; iceberg; **Fundamental 4**: self-awareness/communication/influence/learning agility); **6 bases of power + 7th relationship power** (Blanchard); 3 appeals (logical/emotional/cooperative); Aristotle (win mind with logic, heart with emotion, respect by knowledge); **what followers want** (trust/compassion/stability/hope); **Kelley 5 followership types**; Chaleff courage; Art of Followership; Zenger Folkman 10 inspiring behaviors; **synthesis slide 63: Leader-Follower Exchange→Benefits, Role Model→Inspiration, Influence→Power**.
> **Scope:** Topic định tính. SÁCH lo trục học thuật (4 approaches, LMX, transactional/transformational, ethical/servant/trust/mentoring/challenges). Slide bổ sung **followership half + power/influence frameworks + các biến thể contemporary (authentic/agile/emotional) + synthesis** — đánh dấu source slide. Ngoại lệ per-topic: power đã chạm ở Topic 07 (group) → ở đây khai thác góc *nguồn quyền lực của leader*; conflict ở Topic 08, team ở Topic 09 → chỉ liên hệ.
> **Đặc thù định tính:** KHÔNG calc/formula block. Blocks: comparison + flow + callout.
> **Quy ước:** VI + term EN; quiz stem/options EN, rationale/takeaway VI (Cơ chế→Bẫy→Khóa); 5 options A-E đúng 1.
> **Contract:** comparison `columns.length === cells.length + 1` (cột đầu = header row-label); flow `horizontal`/`tree` (tree set parent); node id dùng `_`; edge label ngắn.
> **Verify:** `npx tsc --noEmit` + `node rendercheck.mjs organizational-behavior topic-10`. KHÔNG commit.

---

## 1. bigIdea (lens Chaliyah CHỐT 2026-07-04)
```ts
bigIdea:
  "Lãnh đạo = năng lực ẢNH HƯỞNG một nhóm hướng tới tầm nhìn — không phải chức vụ, không phải quyền lực formal. Lịch sử tư tưởng lãnh đạo là hành trình dịch trọng tâm khỏi 'cá nhân anh hùng': từ leader CÓ tố chất gì (Trait) → LÀM hành vi gì (Behavioral) → hiệu quả TÙY tình huống nào (Contingency) → KIẾN TẠO ý nghĩa, giá trị, cảm hứng ra sao (Contemporary). Và vì ảnh hưởng là HAI CHIỀU, followership chính là 'nửa còn lại của câu chuyện' — không có follower giỏi thì không có leader giỏi. Leadership bền vững đứng trên đạo đức, niềm tin và sự làm gương.",
bigIdeaPillars: [
  { label: "Ảnh hưởng, không phải chức vụ", body: "Leadership là năng lực influence một nhóm hướng tới tầm nhìn (R&J p217) — khác management (quản trị trật tự & ổn định; Phil Dourado: hai mode khác nhau nhưng cùng cần cho tổ chức). 'Leadership is influence — nothing more, nothing less' (Maxwell). Nguồn quyền lực: institutional/formal (outside-in) vs personal/informal (inside-out); 6 bases (French & Raven: legitimate, reward, coercive, expert, referent, informational) + relationship power (Blanchard). Aristotle: chinh phục MIND bằng logic, HEART bằng emotion, RESPECT bằng knowledge." },
  { label: "4 lăng kính 'What makes a leader?'", body: "Trait (1900s — leader bẩm sinh; Great Man; nhưng traits chỉ dự đoán emergence tốt hơn là phân biệt effective/ineffective) → Behavioral (1950s — học được; Ohio: initiating structure & consideration; Michigan; Managerial Grid) → Contingency (1960s — tùy tình huống; Fiedler LPC, Situational Leadership Hersey-Blanchard/Blanchard S1-S4, Path-Goal) → Contemporary (1980s+ — kiến tạo ý nghĩa: Full-range Transactional↔Transformational 4 I's, Charismatic, Servant, Authentic, Emotional, Agile). Mỗi lăng kính bổ sung nhau; trọng tâm dịch từ 'con người leader' sang 'quan hệ + bối cảnh'." },
  { label: "Nửa còn lại: Followership", body: "Ảnh hưởng 2 chiều → follower KHÔNG thụ động (leader + follower cùng kiến tạo — 'Leadership is Half the Story'). LMX: leader phân ingroup/outgroup → self-fulfilling prophecy (R&J p222). Kelley 5 followership types (2 trục: chủ động–thụ động × tư duy phản biện–lệ thuộc): Sheep, Yes People, Alienated, Star/Effective, Pragmatist. Effective followership cần COURAGE (Chaleff). What followers want: trust, compassion, stability, hope. '≈90% thành công tổ chức đến từ follower.'" },
  { label: "Leader 'tốt': đạo đức – niềm tin – làm gương", body: "Leadership KHÔNG value-free (R&J p230): ethical leadership (socialized charismatic — other-centered, role-model đạo đức → nhiều OCB, ít conflict); servant leadership (vượt tư lợi, phục vụ để follower phát triển); authentic leadership (George: purpose/values/relationships/self-discipline/heart). TRUST là nền tảng: integrity + benevolence + ability; mất niềm tin do LỪA DỐI thì gần như không lấy lại. Mentoring nuôi leader kế cận. Thách thức: attribution theory (leadership đôi khi chỉ là quy gán) & substitutes/neutralizers (có lúc leadership bị thay thế/vô hiệu)." },
],
```

## 2. Wiring
`const topic10: Chapter = { slug:"topic-10", order:10, title:"Topic 10 — Leadership and Followership", bigIdea, bigIdeaPillars, learningObjectives, knowledgeMap, sections, questions, status:"ready", source }`. Array: thay `placeholder(10, ...)` → `topic10`.

## 3. learningObjectives (11)
```ts
learningObjectives: [
  "Định nghĩa leadership là năng lực ảnh hưởng nhóm hướng tới tầm nhìn và phân biệt leadership với management.",
  "Phân tích nguồn quyền lực của leader: 2 sources (formal/personal), 6 bases (French & Raven) và relationship power.",
  "Tóm tắt kết luận của trait theories và giới hạn của chúng (emergence vs effectiveness).",
  "Trình bày behavioral theories: initiating structure vs consideration (Ohio) và Michigan studies.",
  "So sánh các mô hình contingency: Fiedler, Situational Leadership (S1-S4), Path-Goal.",
  "Giải thích LMX theory (ingroup/outgroup, self-fulfilling prophecy) và tác động của nó.",
  "Phân biệt transactional và transformational leadership qua Full-range model (Exhibit 12-4, 12-5).",
  "Mô tả các dạng contemporary value-based: ethical, servant, authentic leadership.",
  "Vận dụng khung followership: Kelley 5 types, courage của follower (Chaleff), what followers want.",
  "Giải thích vai trò của trust (integrity/benevolence/ability, regaining trust) và mentoring.",
  "Nhận diện các thách thức với leadership: attribution theory và substitutes/neutralizers of leadership.",
],
```

## 4. knowledgeMap (flow, tree, collapsible)
Root `ld` → 4 nhóm A-D (bám 4 pillars). caption: "Leadership: (A) ảnh hưởng & quyền lực, (B) 4 lăng kính 'what makes a leader', (C) followership — nửa còn lại, (D) leader tốt: đạo đức/niềm tin + thách thức."
```ts
nodes:
{ id:"ld", label:"Leadership", group:"concept", sectionId:"s1", detail:"Ảnh hưởng nhóm tới tầm nhìn; leader & follower + bối cảnh kiến tạo lẫn nhau." },
{ id:"g_inf", label:"A. Ảnh hưởng & quyền lực", group:"concept", parent:"ld", sectionId:"s1", detail:"Leadership vs management; nguồn quyền lực." },
{ id:"g_lens", label:"B. 4 lăng kính leader", group:"concept", parent:"ld", sectionId:"s3", detail:"Trait → Behavioral → Contingency → Contemporary." },
{ id:"g_fol", label:"C. Followership", group:"concept", parent:"ld", sectionId:"s9", detail:"LMX, Kelley 5 types, courage, what followers want." },
{ id:"g_good", label:"D. Leader tốt & thách thức", group:"concept", parent:"ld", sectionId:"s8", detail:"Ethical/servant/authentic, trust, mentoring, challenges." },
{ id:"t_lvm", label:"Leadership vs management", group:"term", parent:"g_inf", sectionId:"s1" },
{ id:"t_power", label:"Power: 2 sources, 6 bases", group:"term", parent:"g_inf", sectionId:"s2" },
{ id:"t_trait", label:"Trait approach", group:"term", parent:"g_lens", sectionId:"s3" },
{ id:"t_behav", label:"Behavioral approach", group:"term", parent:"g_lens", sectionId:"s4" },
{ id:"t_cont", label:"Contingency approach", group:"term", parent:"g_lens", sectionId:"s5" },
{ id:"t_charis", label:"Charismatic + contemporary map", group:"term", parent:"g_lens", sectionId:"s6" },
{ id:"t_trans", label:"Transactional vs Transformational", group:"term", parent:"g_lens", sectionId:"s7" },
{ id:"t_lmx", label:"LMX ingroup/outgroup", group:"term", parent:"g_fol", sectionId:"s9" },
{ id:"t_kelley", label:"Kelley 5 followership types", group:"term", parent:"g_fol", sectionId:"s9" },
{ id:"t_esa", label:"Ethical/Servant/Authentic", group:"term", parent:"g_good", sectionId:"s8" },
{ id:"t_trust", label:"Trust & mentoring", group:"term", parent:"g_good", sectionId:"s10" },
{ id:"t_chal", label:"Attribution + substitutes/neutralizers", group:"term", parent:"g_good", sectionId:"s11" },
edges: ld→g_inf,g_lens,g_fol,g_good ; g_inf→t_lvm,t_power ; g_lens→t_trait,t_behav,t_cont,t_charis,t_trans ; g_fol→t_lmx,t_kelley ; g_good→t_esa,t_trust,t_chal
```
> Edge label ngắn (vd "ảnh hưởng", "lăng kính", "followership", "leader tốt", "vs management", "power", "trait", "behavioral", "contingency", "charismatic", "trans", "lmx", "kelley", "e/s/a", "trust", "challenges"). node group: "concept"/"term".

---

## 5. Sections (11: s1-s11)

### s1 — Nature of leadership: influence, not position
- callout `key` "Leadership là gì? (R&J p217)": Leadership = **năng lực ẢNH HƯỞNG một nhóm hướng tới đạt được tầm nhìn/tập mục tiêu**. Không phải chức danh: nonsanctioned leadership (ảnh hưởng nảy sinh NGOÀI cơ cấu formal) đôi khi quan trọng hơn ảnh hưởng formal. Bản chất = vision + influence + inspiration (bắt đầu từ chính mình — "leadership begins in you").
- comparison "Leadership vs Management (slide 9)" [3 cột → 2 cells]: Tiêu chí | Leadership | Management
  - Trọng tâm | Thay đổi, tầm nhìn, phát triển. | Trật tự, ổn định, vận hành đúng.
  - Cách làm | Truyền cảm hứng, tạo hướng đi, gắn kết con người. | Lập kế hoạch, tổ chức, kiểm soát, giải quyết vấn đề.
  - Câu hỏi | "Điều gì đúng nên làm?" (do the right things) | "Làm sao cho đúng?" (do things right)
  - Quan hệ | Hai chức năng bổ trợ — quản trị & lãnh đạo cùng cần cho thành công (Phil Dourado); một người có thể vừa manager vừa leader. | (—)
- callout `note` "Nature of leadership (slide 6-8)": các định nghĩa nền — Drucker (làm đúng việc & khiến người khác tin cậy); Grace Hopper ("leadership is a two-way street, loyalty up and loyalty down"); Maxwell ("leadership is influence — nothing more, nothing less"). Thông điệp slide: **ai cũng có thể là leader** ở vị trí của mình.
- keyTerms: leadership, nonsanctioned leadership, management.

### s2 — Power & influence: nguồn sức mạnh của leader (slide)
- callout `key` "Power = năng lực influence người khác & sự kiện (slide 42)": 2 nguồn — **Institutional/Formal power** (đến từ vị trí, *outside-in*) và **Personal/Informal power** (đến từ con người/quan hệ, *inside-out*). Leader mạnh dựa nhiều vào personal power.
- comparison "6 bases of power (French & Raven — slide 43)" [2 cột → 1 cell]: Base | Nội dung
  - Legitimate | Quyền lực từ vị trí/chức danh chính thức trong tổ chức.
  - Reward | Khả năng ban thưởng (lương, thăng tiến, khen).
  - Coercive | Khả năng trừng phạt/ép buộc (sợ hãi).
  - Expert | Uy tín từ chuyên môn, kỹ năng, tri thức.
  - Referent | Sức hút cá nhân, được ngưỡng mộ & muốn noi theo.
  - Informational | Kiểm soát thông tin mà người khác cần.
- callout `note` "Relationship power & 3 appeals (slide 44-45)": Blanchard bổ sung **relationship power** (quyền lực từ chất lượng mối quan hệ). Ba cách gây ảnh hưởng: **logical appeal** (lý lẽ), **emotional appeal** (cảm xúc/giá trị), **cooperative appeal** (cùng hợp tác). Aristotle: chinh phục MIND bằng LOGIC, HEART bằng EMOTION, RESPECT bằng KNOWLEDGE.
- keyTerms: formal power, personal power, referent power, expert power.

### s3 — Evolution of leadership thinking + Trait approach
- flow "4 lăng kính 'What makes a leader?' (slide 10-21)" layout `horizontal`: nodes `a1` "Trait (1900s)" → `a2` "Behavioral (1950s)" → `a3` "Contingency (1960s)" → `a4` "Contemporary (1980s+)". Caption: "Trọng tâm dịch dần từ tố chất cá nhân → hành vi → tình huống → kiến tạo ý nghĩa & quan hệ."
- callout `key` "Trait theories (R&J p217)": lý thuyết xét **phẩm chất & đặc điểm cá nhân** phân biệt leader với non-leader (Great Man Theory 1840s: sinh ra đã là/không là leader). Hai kết luận hiện đại: (1) **traits DỰ ĐOÁN leadership** — Big Five (extraversion mạnh nhất), EI; (2) traits dự đoán **sự XUẤT HIỆN (emergence)** & vẻ ngoài của leadership TỐT HƠN là phân biệt leader **hiệu quả vs không hiệu quả**. → có tố chất chưa đảm bảo lãnh đạo giỏi.
- callout `note` "Emotional leadership (slide 24)": nhánh trait hiện đại nhấn **EI** (Goleman): leader hiệu quả có self-awareness, self-regulation, motivation, empathy, social skills → kết nối đội, giữ bình tĩnh dưới áp lực, biến thách thức thành cơ hội.
- keyTerms: trait theories of leadership, leadership emergence, emotional intelligence.

### s4 — Behavioral approaches (leader có thể học)
- callout `key` "Behavioral theories (R&J p218)": nếu HÀNH VI phân biệt leader thì **có thể ĐÀO TẠO** ra leader (khác trait — bẩm sinh). Trọng tâm: leader LÀM GÌ.
- comparison "Ohio State & Michigan studies (R&J p218)" [3 cột → 2 cells]: Nghiên cứu | Chiều 1 | Chiều 2
  - Ohio State | Initiating structure — định hình vai trò & nhiệm vụ hướng tới mục tiêu (task-oriented). | Consideration — quan hệ dựa trên tin tưởng, tôn trọng cảm xúc nhân viên (people-oriented).
  - Michigan | Production-oriented — nhấn khía cạnh kỹ thuật/nhiệm vụ. | Employee-oriented — nhấn quan hệ liên cá nhân & nhu cầu nhân viên.
- callout `note` "Managerial Grid (Blake & Mouton — slide 13)": lưới 2 trục *concern for people* × *concern for production* → định vị phong cách (vd 9,9 = team management). Hàm ý: leader tốt cân cả hai mối quan tâm.
- keyTerms: initiating structure, consideration, managerial grid.

### s5 — Contingency approaches (tùy tình huống)
- callout `key` "Câu hỏi contingency (slide 14)": không có phong cách tốt nhất tuyệt đối — hiệu quả **TÙY tình huống**. "Đổi tổ chức cho hợp leader, hay đổi biến tình huống cho hợp leader hiện tại?" Ba yếu tố tương tác: **Leader × Followers × Situation** (situational flexibility).
- comparison "Các mô hình contingency (R&J p220-222)" [2 cột → 1 cell]: Mô hình | Nội dung
  - Fiedler model | Hiệu quả = khớp giữa **phong cách leader** (đo bằng LPC — least preferred coworker) và **situational favorableness** (leader-member relations, task structure, position power). Phong cách khá cố định → nên đổi tình huống cho hợp leader.
  - Situational Leadership (Hersey-Blanchard) | Điều chỉnh phong cách theo **readiness/độ trưởng thành của follower**. Blanchard SLII (slide 16): **S1 Directing, S2 Coaching, S3 Supporting, S4 Delegating** — dịch theo năng lực & cam kết của cấp dưới.
  - Path-Goal theory | Leader "dọn đường" tới mục tiêu: chọn hành vi (directive/supportive/participative/achievement) tùy đặc điểm follower & môi trường để tăng động lực.
- callout `note` "Summary: 3 nền tảng approach (slide 19)": **Trait** — leadership bẩm sinh, phải NHẬN DIỆN leader qua tố chất. **Behavioral** — leadership là kỹ năng, phải DẠY hành vi đúng. **Contingency** — leadership còn tùy MÔI TRƯỜNG leader tồn tại. Ba cách bổ sung nhau.
- keyTerms: Fiedler model, situational leadership, path-goal theory.

### s6 — Contemporary theories map + Charismatic leadership
- comparison "Contemporary leadership — nhóm theo era (slide 21)" [2 cột → 1 cell]: Nhóm (era) | Các dạng
  - Full-range (từ 1970s) | Charismatic, Transactional, Transformational.
  - Value-based & role-model (từ 1980s) | Servant, Value-based, Authentic.
  - Inspirational (từ 1990s) | Visionary, Emotional, Shared, Followership.
  - Resilient (từ 2000s, mạnh sau Covid) | Inclusive, Mindful, Agile.
- callout `key` "Charismatic leadership (House — R&J p224)": follower quy cho leader năng lực anh hùng khi quan sát hành vi. 4 đặc điểm: **vision & articulation** (tầm nhìn hấp dẫn & truyền đạt được), **personal risk** (dám hy sinh), **sensitivity to followers' needs**, **unconventional behavior**. Mặt tối: charisma có thể phục vụ mục đích tư lợi/độc hại → cần checks & balances.
- callout `note` "Authentic, Emotional, Agile (slide 26-30)": **Authentic** (George: hiểu purpose, sống theo values, quan hệ tin cậy, self-discipline, hành động từ trái tim). **Gartner 3 components**: Authentic + Empathetic + Adaptive. **Agile** (tạo môi trường cho self-managing team: customer focus, team ownership, learn faster, healthy habits, purpose & values). **HBR 6 styles** (Goleman): coercive, authoritative, pacesetting, affiliative, democratic, coaching — "situation matters".
- keyTerms: charismatic leadership, authentic leadership, visionary leadership.

### s7 — Transactional vs Transformational + Full-range model (SÁCH)
- callout `key` "Transactional vs Transformational (Exhibit 12-4, R&J p226)": **Transactional** dẫn dắt bằng trao đổi rõ vai trò & phần thưởng; **Transformational** truyền cảm hứng để follower **vượt lên tư lợi** vì lợi ích tổ chức, có tác động phi thường. "Transformational **builds on** transactional" — leader giỏi làm CẢ HAI; chỉ transactional → chỉ tầm trung.
- comparison "Transactional vs Transformational (Exhibit 12-4)" [3 cột → 2 cells]: Loại | Thành tố | Nội dung
  - Transactional | Contingent Reward | Trao đổi thưởng theo nỗ lực, ghi nhận thành tích.
  - Transactional | Management by Exception (active) | Theo dõi sai lệch, sửa ngay.
  - Transactional | Management by Exception (passive) | Chỉ can thiệp khi tiêu chuẩn không đạt.
  - Transactional | Laissez-faire | Buông bỏ trách nhiệm, né ra quyết định.
  - Transformational | Idealized Influence (Charisma) | Tạo tầm nhìn & sứ mệnh, gieo niềm tự hào, được tôn trọng & tin.
  - Transformational | Inspirational Motivation | Truyền kỳ vọng cao, dùng biểu tượng, diễn đạt mục đích giản dị.
  - Transformational | Intellectual Stimulation | Khuyến khích trí tuệ, tư duy lại vấn đề cũ.
  - Transformational | Individualized Consideration | Quan tâm từng cá nhân, kèm cặp, tư vấn.
- flow "Full-range leadership model (Exhibit 12-5)" layout `horizontal`: nodes `r1` "Laissez-faire" → `r2` "Mgmt by exception" → `r3` "Contingent reward" → `r4` "Transformational (4 I's)". Caption: "Từ passive/kém hiệu quả (laissez-faire) đến hiệu quả nhất (4 I's của transformational)."
- keyTerms: transactional leadership, transformational leadership, full-range leadership model.

### s8 — Value-based leadership: Ethical, Servant, Authentic (SÁCH nặng)
- callout `key` "Leadership KHÔNG value-free (R&J p230)": đánh giá leader phải xét cả **means** (cách đạt mục tiêu) lẫn **content** (mục tiêu). Top leader tạo *ethical culture* & kỳ vọng cấp dưới hành xử theo. **Socialized charismatic leadership** = truyền giá trị *other-centered* (không tư lợi) & làm gương đạo đức → nhiều OCB, giảm interpersonal conflict.
- comparison "Ba dạng value-based leadership (R&J p230-231)" [2 cột → 1 cell]: Dạng | Nội dung
  - Ethical leadership | Đặt chuẩn đạo đức cao, làm gương, thưởng cho liêm chính, tránh lạm quyền; giao thoa với authentic (đối xử công bằng, thông tin trung thực).
  - Servant leadership | Vượt tư lợi, tập trung cơ hội giúp follower phát triển; hành vi: listening, empathizing, persuading, accepting stewardship, developing potential; NEG-corr với narcissism; → commitment, self-efficacy, justice, OCB, team potency. East Asian prototype: leader "đứng sau" gom ý cả nhóm.
  - Authentic leadership | Biết mình là ai, sống theo giá trị công khai; George 5 đặc điểm: understand purpose, strong values, trusting relationships, self-discipline, act from the heart.
- keyTerms: ethical leadership, socialized charismatic leadership, servant leadership.

### s9 — Followership: the other half (SÁCH + slide)
- callout `key` "Followership — nửa còn lại (slide 54-55)": follower tồn tại chừng nào có leader; leadership được KIẾN TẠO bởi leader + follower cùng nhau. Followership = **năng lực của follower đưa tầm nhìn của leader vào thực tế** (R&J). "≈90% thành công tổ chức đến từ follower" (Kelley). Effective followership cần **COURAGE** (Chaleff: dám nhận trách nhiệm, phục vụ, thách thức, tham gia chuyển hóa, hành động đạo đức, dám rời đi).
- comparison "Kelley — 5 followership styles (slide 56-57)" [2 cột → 1 cell]: Kiểu (2 trục: chủ động–thụ động × tư duy độc lập/phản biện–lệ thuộc) | Nội dung
  - Sheep (Passive follower) | Thụ động + tư duy lệ thuộc/không phản biện; chờ được dẫn dắt.
  - Yes People (Conformist) | Chủ động NHƯNG lệ thuộc, không phản biện; luôn đồng ý cấp trên.
  - Alienated | Tư duy độc lập/phản biện NHƯNG thụ động; hoài nghi, hay chỉ trích ngoài lề.
  - Star / Effective (Exemplary) | Vừa chủ động vừa tư duy độc lập/phản biện; đóng góp & dám nói thật — lý tưởng.
  - Pragmatist | "Survivor" ở giữa, tùy tình thế mà nghiêng — giữ an toàn, ít cam kết rõ ràng.
- comparison "What followers want (slide 40) & LMX (R&J p222)" [3 cột → 2 cells]: Khía cạnh | Nội dung | Ghi chú
  - What followers want | Trust, Compassion, Stability, Hope. | Leader thất bại truyền HOPE/TRUST → follower lo sợ, kháng cự (slide 41).
  - LMX ingroup vs outgroup | Ingroup: được tin, nhiều thời gian & đặc quyền; Outgroup: ít chú ý. | Phân loại sớm & ổn định → self-fulfilling prophecy; phân biệt MẠNH gây bất công & phản ứng tiêu cực cả hai nhóm (R&J p223).
- keyTerms: followership, leader-member exchange (LMX), ingroup, outgroup.

### s10 — Trust & Mentoring (SÁCH nặng)
- callout `key` "Trust — nền tảng của lãnh đạo tích cực (R&J p231)": ta tin leader qua thời gian bằng cách quan sát hành vi. Ba yếu tố (dimensions): **integrity** (trung thực, nhất quán), **benevolence** (đặt lợi ích ta lên trước), **ability** (năng lực chuyên môn). **Trust propensity**: xu hướng tin người (gắn agreeableness; self-esteem thấp → ít tin).
- comparison "Regaining trust — theo loại vi phạm (R&J p233)" [2 cột → 1 cell]: Tình huống | Cách xử lý
  - Vi phạm về ABILITY (thiếu năng lực) | Xin lỗi & thừa nhận "lẽ ra phải làm tốt hơn" thường hiệu quả; niềm tin có thể khôi phục.
  - Vi phạm về INTEGRITY (liêm chính) | Xin lỗi ÍT tác dụng; cần chuỗi hành vi đáng tin nhất quán để phục hồi.
  - Dùng DECEPTION (lừa dối) | Niềm tin gần như KHÔNG BAO GIỜ trở lại — kể cả sau xin lỗi/hứa hẹn.
- callout `note` "Mentoring (R&J p233)": **mentor** = nhân sự kỳ cựu bảo trợ & hỗ trợ một **protégé**. Hai chức năng: **career functions** (huấn luyện, tạo cơ hội) & **psychosocial functions** (tư vấn, làm gương, tăng tự tin). Nghiên cứu: lợi ích chủ yếu **tâm lý** (tăng tự tin) hơn là thành tích khách quan → mentoring nuôi leader kế cận nhưng không phải điều kiện đủ cho thành công sự nghiệp.
- keyTerms: trust, trust propensity, mentor.

### s11 — Challenges to leadership + Building leadership (synthesis)
- callout `key` "Challenges: leadership có thể bị THỔI PHỒNG (R&J p233)": Jim Collins — thời xưa mọi điều không hiểu đều gán cho Chúa; nay gán cho "leadership". Nhiều thành/bại của tổ chức do yếu tố NGOÀI leader.
- comparison "Substitutes vs Neutralizers of leadership (Exhibit 12-7, Kerr & Jermier)" [3 cột → 2 cells]: Yếu tố | Substitute (thay thế nhu cầu leader) | Neutralizer (vô hiệu hóa hành vi leader)
  - Kinh nghiệm/đào tạo | Thay thế leadership định hướng nhiệm vụ. | (—)
  - Công việc có cấu trúc cao & tự phản hồi | Thay thế nhu cầu chỉ dẫn. | (—)
  - Công việc tự thân thỏa mãn (intrinsically satisfying) | Thay thế leadership quan hệ. | (—)
  - Thờ ơ với phần thưởng (indifference to rewards) | (—) | Vô hiệu cả task- lẫn relationship-oriented leadership.
- callout `note` "Attribution theory of leadership (R&J p233)": leadership phần nào là **quy gán** — ta gán cho leader trí tuệ, tính cách hướng ngoại, kỹ năng nói, quyết đoán... Perception của follower ảnh hưởng mạnh tới hiệu quả; đôi khi ta "lãng mạn hóa" (romanticize) leadership. → dáng vẻ (appearance) của leader cũng quan trọng như thành tích thật.
- callout `key` "Building LEADERSHIP is about… (synthesis, slide 63)": ba trục tổng kết — (1) **Leader–Follower Exchange → Benefits** (quan hệ trao đổi tạo lợi ích hữu hình/vô hình); (2) **Role Model → Inspiration** (làm gương tạo cảm hứng); (3) **Influence → Power** (ảnh hưởng tạo nên quyền lực thật sự). Bắt đầu từ **self-leadership** (Lead your organization → your people → **yourself**) & Fundamental 4: self-awareness, communication, influence, learning agility.
- keyTerms: attribution theory of leadership, substitutes for leadership, self-leadership.

---

## 6. Questions (20 câu — q01…q20)
> Format: stem/options EN; đúng 1 trong 5 (A-E); rationale VI "Cơ chế:… Bẫy:… Khóa:…"; takeaway VI. Phủ đều 11 sections & book/slide-adds.

Phân bổ:
1. **q01 — Leadership định nghĩa** (s1): ability to influence toward a vision; bẫy đồng nhất với chức danh formal.
2. **q02 — Leadership vs management** (s1): "do the right things" vs "do things right"; cả hai đều cần.
3. **q03 — 2 sources of power** (s2): formal/institutional (outside-in) vs personal (inside-out).
4. **q04 — 6 bases of power** (s2): nhận diện expert/referent/legitimate/coercive/reward/informational.
5. **q05 — Trait theories kết luận** (s3): traits dự đoán emergence tốt hơn effectiveness.
6. **q06 — Emotional intelligence** (s3): EI như trait hiện đại của leader.
7. **q07 — Behavioral: Ohio dimensions** (s4): initiating structure vs consideration.
8. **q08 — Managerial Grid / Michigan** (s4): concern for people × production.
9. **q09 — Contingency logic** (s5): hiệu quả tùy tình huống; "it depends".
10. **q10 — Fiedler / LPC** (s5): match style với situational favorableness; style khá cố định.
11. **q11 — Situational Leadership S1-S4** (s5): điều chỉnh theo readiness của follower (Directing/Coaching/Supporting/Delegating).
12. **q12 — Transactional vs transformational** (s7): 4 I's; transformational builds on transactional.
13. **q13 — Full-range / contingent reward vs laissez-faire** (s7): laissez-faire kém hiệu quả nhất.
14. **q14 — Charismatic leadership** (s6): 4 đặc điểm House; mặt tối tư lợi.
15. **q15 — Ethical / socialized charismatic** (s8): other-centered, role-model → OCB.
16. **q16 — Servant leadership** (s8): vượt tư lợi, phát triển follower; neg-corr narcissism.
17. **q17 — LMX ingroup/outgroup** (s9): self-fulfilling prophecy.
18. **q18 — Kelley 5 followership types** (s9): nhận diện Star/Alienated/Yes People/Sheep/Pragmatist theo 2 trục.
19. **q19 — Trust dimensions / regaining trust** (s10): integrity/benevolence/ability; deception → không lấy lại.
20. **q20 — Challenges: attribution / substitutes-neutralizers** (s11): substitute (experience/structured task) vs neutralizer (indifference to rewards).

takeaway mẫu (Codex viết đủ 20, VI): vd q18 "Follower lý tưởng (Star) vừa chủ động vừa dám tư duy phản biện — không phải người luôn 'dạ vâng' (Yes People)."

---

## 7. source
```ts
source: "Robbins & Judge, Organizational Behavior — Chapter 12 'Characteristics of Leaders' (pp.216-236); Slide 'OB-Topic 10-Leadership Followership' (Dr Lan Anh, IM2017, HCMUT); bổ sung slide: Hurwitz & Hurwitz 'Leadership is Half the Story', Ken Blanchard Situational Leadership II & relationship power, Robert Kelley 'In Praise of Followers' (5 followership types), Ira Chaleff 'The Courageous Follower', Bill George (authentic leadership), Daniel Goleman (EI & 6 leadership styles), Center for Creative Leadership (Fundamental 4).",
```

---

## 8. Coverage matrix (đối chiếu "không sót kiến thức") — 24 mục
1. Leadership định nghĩa (influence toward vision) + nonsanctioned — s1 ✓ q01
2. Leadership vs management — s1 ✓ q02
3. Nature of leadership (Drucker/Hopper/Maxwell; everyone can lead) **[slide]** — s1
4. Power: 2 sources (formal/personal) — s2 ✓ q03
5. 6 bases of power (French & Raven) — s2 ✓ q04
6. Relationship power + 3 appeals + Aristotle **[slide]** — s2
7. Evolution 4 approaches (map) **[slide]** — s3 (flow)
8. Trait theories + 2 kết luận (emergence vs effectiveness) — s3 ✓ q05
9. Emotional intelligence / emotional leadership — s3 ✓ q06
10. Behavioral: Ohio (initiating structure/consideration) + Michigan — s4 ✓ q07
11. Managerial Grid (Blake & Mouton) **[slide]** — s4 ✓ q08
12. Contingency logic + situational flexibility — s5 ✓ q09
13. Fiedler model (LPC) — s5 ✓ q10
14. Situational Leadership (Hersey-Blanchard, SLII S1-S4) **[slide]** — s5 ✓ q11
15. Path-Goal theory — s5
16. Contemporary map theo era **[slide]** — s6
17. Charismatic leadership (House) + dark side — s6 ✓ q14
18. Authentic/Gartner/Agile/HBR 6 styles **[slide]** — s6
19. Transactional vs Transformational (Exhibit 12-4) + Full-range (12-5) — s7 ✓ q12,q13
20. Ethical leadership + socialized charismatic — s8 ✓ q15
21. Servant + Authentic leadership — s8 ✓ q16
22. Followership: Kelley 5 types + courage (Chaleff) + what followers want **[slide]** — s9 ✓ q18
23. LMX ingroup/outgroup + self-fulfilling prophecy — s9 ✓ q17
24. Trust (dimensions, propensity, regaining) + Mentoring; Challenges (attribution, substitutes/neutralizers) + synthesis — s10,s11 ✓ q19,q20

## 9. Cấu trúc dự kiến (để verify Layer B)
- sections: **11** (s1-s11)
- questions: **20**
- learningObjectives: **11**
- comparison blocks: **~11** (s1:1, s2:1, s4:1, s5:1, s6:1, s7:1, s8:1, s9:2, s10:1, s11:1)
- flow blocks (trong section): **2** (s3 evolution horizontal; s7 full-range horizontal) + knowledgeMap tree (riêng)
- callout blocks: **~13**
- calc/formula blocks: **0** (định tính)
- status: "ready"
