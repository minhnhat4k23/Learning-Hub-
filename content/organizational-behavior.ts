import type {
  Block,
  CalloutKind,
  Chapter,
  CourseMapDiagram,
  CourseThread,
  FlowEdge,
  FlowNode,
  MiniCase,
} from "./types";

type FlowLayout = "tree" | "horizontal" | "radial";
type SectionFlowNode = Omit<FlowNode, "sectionId"> & {
  detail: string;
};

const flowBlock = (
  sectionId: string,
  title: string,
  layout: FlowLayout,
  nodes: SectionFlowNode[],
  edges: FlowEdge[],
  caption?: string,
): Block => ({
  type: "diagram",
  diagram: {
    engine: "flow",
    title,
    layout,
    nodes: nodes.map((node) => ({ ...node, sectionId })),
    edges,
    caption,
  },
});

const calloutBlock = (
  kind: CalloutKind,
  title: string,
  body: string,
): Block => ({
  type: "callout",
  callout: { kind, title, body },
});

const comparisonBlock = (
  title: string,
  columns: string[],
  rows: { label: string; cells: string[] }[],
): Block => ({
  type: "comparison",
  table: { title, columns, rows },
});

// Organizational Behavior (IM2017 — Dr Lan Anh, HCMUT).
//
// Nguồn (chỉ dùng): Slides + Exercises (mỗi topic = 1 slide Dr Lan Anh + 1 Reading Chapter
// sách tương ứng) và Exam (Midterm/Final — xem để lấy tư duy ra đề). KHÔNG dùng Assignment/
// journal articles.
//
// 13 topic (Topic 0-12). Hiện là PLACEHOLDER — nội dung từng topic sẽ soạn theo GATE
// bigIdea + verify 2 lớp (xem docs/specs/workflow-soan-mon-moi.md), rồi chuyển "ready".

const placeholder = (
  order: number,
  slug: string,
  title: string,
  slideFile: string,
  readingChapter: string,
): Chapter => ({
  slug,
  order,
  title,
  bigIdea:
    "Placeholder — bigIdea (lens) sẽ soạn theo GATE từ slide + Reading Chapter, đợi Chaliyah chốt.",
  learningObjectives: [],
  sections: [],
  questions: [],
  status: "placeholder",
  source: `Slide '${slideFile}' (Dr Lan Anh, IM2017) + Reading '${readingChapter}'.`,
});

const topic00: Chapter = {
  slug: "topic-00",
  order: 0,
  title: "Topic 00 — Introduction to Organizational Behavior",
  bigIdea:
    "OB = dùng nghiên cứu HỆ THỐNG (không phải cảm tính) về hành vi con người ở 3 cấp — cá nhân → nhóm → tổ chức — để mô tả, hiểu, dự đoán và điều chỉnh hành vi, nhằm cải thiện hiệu quả tổ chức.",
  bigIdeaPillars: [
    {
      label: "Định nghĩa",
      body: "OB = field of study về impact của individuals + groups + structure lên behavior trong tổ chức, để cải thiện effectiveness (Robbins & Judge, 2019).",
    },
    {
      label: "3 cấp độ",
      body: "Individual → Group (interpersonal) → Organizational (intergroup) — khung xuyên suốt 12 topic của môn.",
    },
    {
      label: "4 mục tiêu",
      body: "Describe → Understand → Predict → Control hành vi (Newstrom, 2014).",
    },
    {
      label: "Systematic, not intuition",
      body: "Bổ sung trực giác bằng nghiên cứu hệ thống; 'few absolutes' → contingency (tùy bối cảnh); nền từ 4 behavioral science disciplines.",
    },
  ],
  learningObjectives: [
    "Định nghĩa Organizational Behavior và giải thích 2 vế: 3 nguồn tác động (individuals, groups, structure) và mục đích (cải thiện organizational effectiveness).",
    "Giải thích 'behavior' là gì (action/reaction; conscious/unconscious, overt/covert, voluntary/involuntary) và vì sao OB 'few absolutes' → cách tiếp cận contingency.",
    "Nêu 4 mục tiêu của việc nghiên cứu OB: describe, understand, predict, control hành vi (Newstrom).",
    "Phân biệt 3 cấp độ phân tích của OB (individual, group/interpersonal, organizational/intergroup) và map vào cấu trúc 12 topic của môn.",
    "Giải thích Basic OB Model: Inputs → Processes → Outcomes; nhận diện các outcome (attitudes & stress, task performance, OCB, withdrawal behavior, group cohesion/functioning, productivity, survival).",
    "Nêu 4 behavioral science disciplines đóng góp cho OB (psychology, social psychology, sociology, anthropology) và đơn vị phân tích của mỗi ngành.",
    "Giải thích vì sao nên bổ sung intuition bằng systematic study (evidence-based management) và phân biệt effective vs successful managers.",
    "Nêu ý nghĩa của individual differences & workforce diversity (con dao hai lưỡi: discrimination/conflict vs creativity/synergy) đối với hiệu quả tổ chức.",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "Introduction to OB: (A) OB là gì & để làm gì, (B) khung phân tích (3 cấp + Basic OB Model + disciplines), (C) ứng dụng (diversity + manager + take-away). Bấm node để mở chi tiết.",
    nodes: [
      {
        id: "ob",
        label: "Organizational Behavior",
        group: "concept",
        sectionId: "s1",
        detail:
          "Nghiên cứu hệ thống hành vi con người trong tổ chức để cải thiện effectiveness.",
      },
      {
        id: "g_what",
        label: "A. OB là gì & để làm gì",
        group: "concept",
        parent: "ob",
        sectionId: "s1",
        detail: "Định nghĩa, behavior, 4 objectives.",
      },
      {
        id: "g_frame",
        label: "B. Khung phân tích",
        group: "concept",
        parent: "ob",
        sectionId: "s3",
        detail: "3 cấp độ + Basic OB Model + disciplines.",
      },
      {
        id: "g_apply",
        label: "C. Ứng dụng",
        group: "concept",
        parent: "ob",
        sectionId: "s6",
        detail: "Diversity, effective vs successful, take-away.",
      },
      {
        id: "t_def",
        label: "Định nghĩa OB",
        group: "term",
        parent: "g_what",
        sectionId: "s1",
        detail:
          "Individuals + groups + structure → behavior → effectiveness (Robbins & Judge).",
      },
      {
        id: "t_behav",
        label: "Behavior & 4 objectives",
        group: "term",
        parent: "g_what",
        sectionId: "s2",
        detail:
          "Action/reaction; describe→understand→predict→control; few absolutes.",
      },
      {
        id: "t_levels",
        label: "3 cấp độ phân tích",
        group: "term",
        parent: "g_frame",
        sectionId: "s3",
        detail:
          "Individual → group (interpersonal) → organizational (intergroup).",
      },
      {
        id: "t_model",
        label: "Basic OB Model",
        group: "term",
        parent: "g_frame",
        sectionId: "s4",
        detail: "Inputs → Processes → Outcomes.",
      },
      {
        id: "t_disc",
        label: "Behavioral disciplines",
        group: "term",
        parent: "g_frame",
        sectionId: "s5",
        detail:
          "Psychology, social psychology, sociology, anthropology.",
      },
      {
        id: "t_div",
        label: "Individual differences & diversity",
        group: "term",
        parent: "g_apply",
        sectionId: "s6",
        detail: "Con dao hai lưỡi: conflict vs creativity/synergy.",
      },
      {
        id: "t_mgr",
        label: "Managers & systematic study",
        group: "term",
        parent: "g_apply",
        sectionId: "s7",
        detail:
          "Effective vs successful; intuition + evidence; inner vs outer game.",
      },
    ],
    edges: [
      { from: "ob", to: "g_what" },
      { from: "ob", to: "g_frame" },
      { from: "ob", to: "g_apply" },
      { from: "g_what", to: "t_def" },
      { from: "g_what", to: "t_behav" },
      { from: "g_frame", to: "t_levels" },
      { from: "g_frame", to: "t_model" },
      { from: "g_frame", to: "t_disc" },
      { from: "g_apply", to: "t_div" },
      { from: "g_apply", to: "t_mgr" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "OB là gì & vì sao học",
      blocks: [
        calloutBlock(
          "key",
          "Định nghĩa OB",
          "Organizational Behavior = “A field of study that investigates the impact that individuals, groups, and structure have on behavior within organizations for the purpose of applying such knowledge toward improving an organization's effectiveness” (Robbins & Judge, 2019). Newstrom (2014): “systematic study and careful application of knowledge” về cách con người — cá nhân & nhóm — hành xử trong tổ chức. Hai vế cốt lõi: (1) 3 nguồn tác động, (2) mục đích ứng dụng.",
        ),
        flowBlock(
          "s1",
          "Vì sao OB đáng học",
          "horizontal",
          [
            {
              id: "s1_people",
              label: "People join organizations",
              group: "concept",
              detail: "Người ta gia nhập tổ chức...",
            },
            {
              id: "s1_leave",
              label: "They leave people",
              group: "concept",
              detail:
                "...nhưng nghỉ việc thường vì SẾP, không phải công ty (Ken Blanchard; Gallup).",
            },
            {
              id: "s1_mgr",
              label: "Look to managers",
              group: "concept",
              detail:
                "Turnover cao → soi lại quản lý → cần hiểu hành vi.",
            },
            {
              id: "s1_skill",
              label: "Employability skills",
              group: "concept",
              detail:
                "OB rèn: tư duy phản biện, ra quyết định tốt, communicate/collaborate, social responsibility.",
            },
          ],
          [
            { from: "s1_people", to: "s1_leave", label: "thực tế" },
            { from: "s1_leave", to: "s1_mgr", label: "hệ quả" },
            { from: "s1_mgr", to: "s1_skill", label: "cần OB" },
          ],
          "OB không phải lý thuyết suông — nó là employability skill (slide 33-36).",
        ),
      ],
      keyTerms: [
        {
          term: "organizational behavior (OB)",
          definition:
            "Field of study về tác động của individuals, groups và structure lên behavior trong organizations để cải thiện effectiveness.",
        },
        {
          term: "organizational effectiveness",
          definition:
            "Mức độ tổ chức đạt kết quả mong muốn nhờ ứng dụng hiểu biết về hành vi.",
        },
        {
          term: "employability skills",
          definition:
            "Nhóm kỹ năng giúp người học làm việc tốt hơn: critical thinking, decision making, communication, collaboration và social responsibility.",
        },
        {
          term: "structure",
          definition:
            "Cách tổ chức phân chia, phối hợp và định hình hành vi trong công việc.",
        },
      ],
    },
    {
      id: "s2",
      heading: "Behavior & 4 objectives",
      blocks: [
        comparisonBlock(
          "Behavior có những mặt nào (Newstrom)",
          ["Cặp đối lập", "Ý nghĩa"],
          [
            {
              label: "Conscious ↔ unconscious",
              cells: ["Có ý thức hay vô thức."],
            },
            {
              label: "Overt ↔ covert",
              cells: ["Biểu hiện ra ngoài hay ẩn bên trong."],
            },
            {
              label: "Voluntary ↔ involuntary",
              cells: ["Tự nguyện hay không tự nguyện."],
            },
          ],
        ),
        flowBlock(
          "s2",
          "4 mục tiêu nghiên cứu OB",
          "horizontal",
          [
            {
              id: "s2_desc",
              label: "Describe",
              group: "concept",
              detail:
                "Mô tả: con người hành xử thế nào trong các điều kiện khác nhau.",
            },
            {
              id: "s2_und",
              label: "Understand",
              group: "concept",
              detail: "Hiểu: VÌ SAO họ hành xử như vậy.",
            },
            {
              id: "s2_pred",
              label: "Predict",
              group: "concept",
              detail: "Dự đoán: hành vi tương lai.",
            },
            {
              id: "s2_ctrl",
              label: "Control",
              group: "concept",
              detail:
                "Điều chỉnh: hành vi con người tại nơi làm việc.",
            },
          ],
          [
            { from: "s2_desc", to: "s2_und", label: "sâu hơn" },
            { from: "s2_und", to: "s2_pred", label: "tiếp" },
            { from: "s2_pred", to: "s2_ctrl", label: "tiếp" },
          ],
          "Tiến trình describe → understand → predict → control (slide 43, Newstrom).",
        ),
        calloutBlock(
          "insight",
          "Few absolutes — vì sao OB khó như thật",
          "Behavior 'partially understood → sometimes unpredictable'; 'no perfect solutions to organizational problems'. Sách nhấn 'there are few absolutes in OB' → OB dùng cách tiếp cận contingency: một giải pháp đúng ở tình huống này có thể sai ở tình huống khác. Vì thế OB luôn 'can be learned and improved', không có công thức vạn năng.",
        ),
      ],
      keyTerms: [
        {
          term: "behavior",
          definition:
            "Action/reaction trước situation hoặc stimulus; có thể conscious/unconscious, overt/covert, voluntary/involuntary.",
        },
        {
          term: "stimulus",
          definition:
            "Tác nhân hoặc tình huống kích hoạt phản ứng hành vi.",
        },
        {
          term: "contingency approach",
          definition:
            "Cách tiếp cận tùy bối cảnh: hiệu quả của một hành động phụ thuộc tình huống cụ thể.",
        },
        {
          term: "few absolutes",
          definition:
            "Trong OB hiếm có quy luật đúng cho mọi người, mọi nhóm, mọi tổ chức.",
        },
      ],
    },
    {
      id: "s3",
      heading: "3 cấp độ phân tích",
      blocks: [
        flowBlock(
          "s3",
          "3 cấp độ phân tích của OB",
          "tree",
          [
            {
              id: "s3_ob",
              label: "OB — 3 levels",
              group: "concept",
              detail: "OB đi từ cá nhân → nhóm → tổ chức.",
            },
            {
              id: "s3_ind",
              label: "Individual level",
              group: "concept",
              parent: "s3_ob",
              detail:
                "Personality, perception, values, emotions, attitudes, motivation → individual performance. (Topic 1-6)",
            },
            {
              id: "s3_grp",
              label: "Group level (interpersonal)",
              group: "concept",
              parent: "s3_ob",
              detail:
                "Formal/informal groups: teamwork, leadership, groupthink, conflict. (Topic 7-10)",
            },
            {
              id: "s3_org",
              label: "Organizational level (intergroup)",
              group: "concept",
              parent: "s3_ob",
              detail:
                "Structure, culture, change; phối hợp giữa các nhóm. (Topic 11-12)",
            },
          ],
          [
            { from: "s3_ob", to: "s3_ind" },
            { from: "s3_ob", to: "s3_grp" },
            { from: "s3_ob", to: "s3_org" },
          ],
          "OB đi từ cá nhân → nhóm → tổ chức; đây cũng là mạch 12 topic cả môn (slide 40-41).",
        ),
        calloutBlock(
          "note",
          "Cấu trúc 12 topic",
          "INDIVIDUAL: (1) Personality, (2) Perception, (3) Personal values, (4) Emotions, (5) Attitudes & Dissonance, (6) Motivation. GROUP: (7) Group properties, (8) Conflict & Collaboration, (9) Team, (10) Leadership & Followership. ORGANIZATIONAL: (11) Org Culture, (12) Org Change & Work stress (slide 40).",
        ),
      ],
      keyTerms: [
        {
          term: "individual level",
          definition:
            "Cấp phân tích tập trung vào đặc điểm và hành vi của từng cá nhân.",
        },
        {
          term: "group level",
          definition:
            "Cấp phân tích tập trung vào tương tác trong nhóm và giữa người với người.",
        },
        {
          term: "interpersonal",
          definition:
            "Các quan hệ và tương tác giữa cá nhân trong nhóm.",
        },
        {
          term: "organizational level",
          definition:
            "Cấp phân tích tập trung vào structure, culture, change và phối hợp giữa các nhóm.",
        },
        {
          term: "intergroup",
          definition:
            "Tương tác giữa các nhóm hoặc đơn vị trong tổ chức.",
        },
      ],
    },
    {
      id: "s4",
      heading: "Basic OB Model",
      blocks: [
        flowBlock(
          "s4",
          "Basic OB Model (Robbins & Judge)",
          "horizontal",
          [
            {
              id: "s4_in",
              label: "Inputs",
              group: "concept",
              detail:
                "Biến 'đầu vào' ở 3 cấp: individual (personality, values), group (structure, roles), org (culture).",
            },
            {
              id: "s4_proc",
              label: "Processes",
              group: "concept",
              detail:
                "Hành động/quyết định do inputs dẫn tới: emotions, motivation, communication, leadership, conflict...",
            },
            {
              id: "s4_out",
              label: "Outcomes",
              group: "concept",
              detail: "Kết quả then chốt của mô hình OB.",
            },
          ],
          [
            { from: "s4_in", to: "s4_proc", label: "dẫn tới" },
            { from: "s4_proc", to: "s4_out", label: "tạo ra" },
          ],
          "Khung Inputs → Processes → Outcomes tổ chức toàn bộ môn (Exhibit 1-3).",
        ),
        comparisonBlock(
          "Outcomes của Basic OB Model (theo cấp)",
          ["Cấp", "Outcomes"],
          [
            {
              label: "Individual",
              cells: [
                "Attitudes & stress, task performance, OCB (organizational citizenship behavior), withdrawal behavior.",
              ],
            },
            {
              label: "Group",
              cells: ["Group cohesion, group functioning."],
            },
            {
              label: "Organizational",
              cells: ["Productivity, survival."],
            },
          ],
        ),
        calloutBlock(
          "key",
          "OCB & withdrawal behavior là gì",
          "OCB (organizational citizenship behavior) = hành vi tự nguyện ngoài mô tả công việc nhưng giúp tổ chức (giúp đồng nghiệp, phát biểu xây dựng). Withdrawal behavior = hành vi rút lui (đi trễ, vắng mặt, nghỉ việc). Hai outcome này cho thấy OB quan tâm cả mặt tích cực lẫn tiêu cực của hành vi (R&J Ch.1).",
        ),
      ],
      keyTerms: [
        {
          term: "inputs",
          definition:
            "Các biến đầu vào ở cấp individual, group và organization.",
        },
        {
          term: "processes",
          definition:
            "Các hành động/quyết định trung gian biến inputs thành outcomes.",
        },
        {
          term: "outcomes",
          definition:
            "Kết quả OB quan tâm: attitudes, stress, performance, OCB, withdrawal, cohesion, productivity, survival.",
        },
        {
          term: "organizational citizenship behavior (OCB)",
          definition:
            "Hành vi tự nguyện ngoài job description nhưng hỗ trợ tổ chức.",
        },
        {
          term: "withdrawal behavior",
          definition:
            "Hành vi rút lui khỏi công việc như đi trễ, vắng mặt hoặc nghỉ việc.",
        },
      ],
    },
    {
      id: "s5",
      heading: "Behavioral science disciplines",
      blocks: [
        comparisonBlock(
          "4 disciplines đóng góp cho OB (Exhibit 1-1)",
          ["Discipline", "Đơn vị phân tích", "Đóng góp chính cho OB"],
          [
            {
              label: "Psychology",
              cells: [
                "Cá nhân",
                "Learning, motivation, personality, emotions, perception, attitudes, job satisfaction.",
              ],
            },
            {
              label: "Social psychology",
              cells: [
                "Cá nhân trong nhóm / thay đổi",
                "Behavioral change, communication, group decision making.",
              ],
            },
            {
              label: "Sociology",
              cells: [
                "Hệ thống xã hội / nhóm",
                "Group dynamics, teams, communication, power, conflict, organizational structure.",
              ],
            },
            {
              label: "Anthropology",
              cells: [
                "Văn hóa / môi trường",
                "Organizational culture, cross-cultural comparison, values & environments.",
              ],
            },
          ],
        ),
        calloutBlock(
          "insight",
          "OB là môn liên ngành",
          "OB không tự phát minh — nó tổng hợp từ 4 behavioral science. Vì nhiều nguồn & nhiều bối cảnh nên 'few absolutes': cùng một khái niệm có thể biểu hiện khác nhau tùy người, nhóm, văn hóa → luôn cần systematic study, không suy diễn từ cảm tính (slide 46, Exhibit 1-1).",
        ),
      ],
      keyTerms: [
        {
          term: "psychology",
          definition:
            "Discipline tập trung vào individual behavior như learning, motivation, personality, emotion, perception.",
        },
        {
          term: "social psychology",
          definition:
            "Discipline nối cá nhân với nhóm, đặc biệt behavioral change, communication và group decision making.",
        },
        {
          term: "sociology",
          definition:
            "Discipline nghiên cứu hệ thống xã hội, group dynamics, power, conflict và organizational structure.",
        },
        {
          term: "anthropology",
          definition:
            "Discipline nhấn mạnh culture, values, environment và cross-cultural comparison.",
        },
      ],
    },
    {
      id: "s6",
      heading: "Individual differences & Workforce diversity",
      blocks: [
        calloutBlock(
          "key",
          "Individual differences",
          "Điều làm mỗi người KHÁC nhau (U.S.P.): demographic factors (ethnic origin, gender, age...), early family experiences, social & cultural factors, personality, perception, personal values, emotions, attitudes, motivation. Đây chính là mạch các Topic 1-6 (slide 44).",
        ),
        comparisonBlock(
          "Workforce diversity — con dao hai lưỡi",
          ["Cách quản lý", "Kết quả"],
          [
            {
              label: "Nếu quản lý KÉM",
              cells: ["Sources of discrimination, conflict, dysfunction."],
            },
            {
              label: "Nếu quản lý TỐT",
              cells: [
                "Sources of creativity, synergy, effectiveness, sustainability.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Take-away cốt lõi của môn",
          "Dr Lan Anh: dù quên hết, hãy nhớ 2 điều — INDIVIDUAL DIFFERENCES (mỗi người mỗi khác) và SHARINGS (điều ta chia sẻ với nhau). Inner game (identity: perception, values, emotions → behaviors) quyết định outer game (relationships, competencies trong team & tổ chức) (slide 50-51).",
        ),
      ],
      keyTerms: [
        {
          term: "individual differences",
          definition:
            "Các khác biệt cá nhân về demographic factors, family experiences, culture, personality, perception, values, emotions, attitudes và motivation.",
        },
        {
          term: "unique selling point (U.S.P.)",
          definition:
            "Điểm riêng làm mỗi cá nhân khác biệt trong tổ chức.",
        },
        {
          term: "workforce diversity",
          definition:
            "Sự đa dạng trong lực lượng lao động về gender, race, age, disability, religion, national origin, sub-culture, tenure...",
        },
        {
          term: "synergy",
          definition:
            "Hiệu ứng cộng hưởng khi khác biệt được quản lý tốt và tạo kết quả tốt hơn từng cá nhân riêng lẻ.",
        },
      ],
    },
    {
      id: "s6b",
      heading: "Challenges & Opportunities cho OB (sách Ch.1)",
      blocks: [
        comparisonBlock(
          "6 thách thức & cơ hội của OB hiện đại (sách, p38–42)",
          ["Thách thức", "Nội dung"],
          [
            {
              label: "Continuing globalization",
              cells: [
                "Tổ chức không còn bị biên giới ràng buộc (Samsung bán chủ yếu ra ngoài Hàn; McDonald's 118 nước; Apple thuê ngoài Mỹ nhiều gấp đôi trong Mỹ). 3 tình huống manager phải xử: làm việc ở nước ngoài (expatriate), làm với người khác văn hóa (điều motivate mình chưa chắc motivate họ — phải đổi management style), thích ứng chuẩn văn hóa + PHÁP LÝ từng nước (\"guest companies\" vi phạm là gánh hậu quả).",
              ],
            },
            {
              label: "Workforce demographics",
              cells: [
                "Longevity tăng ~6 năm từ 1990, birth rate giảm ở nước phát triển → workforce GIÀ đi, ảnh hưởng attitudes/culture/leadership/structure/communication; hậu khủng hoảng 2008: người thất nghiệp lâu rời workforce, ghép nhiều việc part-time, on-demand work.",
              ],
            },
            {
              label: "Social media",
              cells: [
                "HR có nên soi social media ứng viên? (case sa thải vì tweet/post trước ngày nhận việc); policy dùng social media tại chỗ làm; nghiên cứu: đang mood tốt mà lướt Facebook nhiều → mood XẤU đi; check Facebook thường xuyên 2 tuần → satisfaction với cuộc sống giảm.",
              ],
            },
            {
              label: "Employee well-being at work",
              cells: [
                "Virtual workplace = \"never get away\" — làm ở đâu cũng được nhưng dễ thấy không thuộc về team; 1/4 nhân viên có dấu hiệu burnout, 2/3 báo stress cao + fatigue; văn hóa \"always on\" qua email/text; single-parent & chăm sóc người phụ thuộc → work–life conflict.",
              ],
            },
            {
              label: "Positive work environment",
              cells: [
                "Dòng nghiên cứu positive organizational scholarship — xem chi tiết callout dưới.",
              ],
            },
            {
              label: "Ethical behavior",
              cells: [
                "Bối cảnh cắt giảm + cạnh tranh → nhân viên bị ép \"cut corners\"; ethical dilemmas (blow the whistle? theo lệnh mình không đồng ý? \"play politics\"?); ranh giới đúng-sai ngày càng mờ; manager phải tạo ethically healthy climate — giảm ambiguity về đúng/sai; ethics training hiệu quả khi làm LIÊN TỤC.",
              ],
            },
          ],
        ),
        calloutBlock(
          "insight",
          "Positive organizational scholarship — OB nhìn qua lens điểm mạnh (sách, p41–42)",
          "POS (còn gọi positive organizational behavior) nghiên cứu cách tổ chức phát triển human strengths, nuôi vitality & resilience, unlock potential; chủ đề chính: engagement, hope, optimism, resilience. Phê phán: OB truyền thống quá tập trung \"what's wrong\". POS không phủ nhận giá trị của negative feedback — nó thách thức researcher nhìn OB qua lens tích cực, dùng strengths thay vì dằn vặt limitations.",
        ),
      ],
      keyTerms: [
        {
          term: "Positive organizational scholarship (POS)",
          definition:
            "Lĩnh vực OB nghiên cứu cách tổ chức phát triển human strengths, nuôi vitality/resilience và unlock potential.",
        },
        {
          term: "Ethical dilemmas and ethical choices",
          definition:
            "Tình huống buộc cá nhân tự định nghĩa đúng-sai để hành động.",
        },
      ],
    },
    {
      id: "s7",
      heading: "Managers & systematic study",
      blocks: [
        comparisonBlock(
          "Effective vs Successful managers (Luthans)",
          ["Loại manager", "Hoạt động được nhấn mạnh"],
          [
            {
              label: "Effective manager",
              cells: [
                "Communication + human resource management (làm việc tốt, nhân viên gắn kết).",
              ],
            },
            {
              label: "Successful manager (thăng tiến nhanh)",
              cells: ["Networking (quan hệ, chính trị nội bộ)."],
            },
          ],
        ),
        calloutBlock(
          "insight",
          "Intuition + systematic study",
          "OB khuyên bổ sung intuition (linh cảm) bằng systematic study — dựa trên evidence/data thay vì 'common sense'. Vì 'few absolutes', kết luận rút từ nghiên cứu có kiểm soát đáng tin hơn phán đoán vội. Đây là tinh thần evidence-based management (R&J Ch.1).",
        ),
        comparisonBlock(
          "Big Data trong management (sách, p35–36)",
          ["Khía cạnh", "Nội dung"],
          [
            {
              label: "Current usage",
              cells: [
                "Lý do dùng data analytics: predicting events, detecting risk, preventing catastrophes.",
              ],
            },
            {
              label: "New trends",
              cells: [
                "Nghiên cứu 10.000 workers ở 5 nước: nhân viên kỳ vọng cách làm việc sắp tới thay đổi vì technological advancement hơn mọi yếu tố khác; data-driven management: define objectives → dựng theories of causality → test hoạt động nào relevant.",
              ],
            },
            {
              label: "Limitations",
              cells: [
                "Privacy khi thu thập bằng surveillance; nghiên cứu: nhân viên productive HƠN khi có tương tác xã hội → công ty đổi break policies; electronic performance monitoring tăng task performance + citizenship chỉ NGẮN HẠN (motif Taylor 1911: giám sát không thay được quản trị outcomes).",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "OB đồng hành nghề nghiệp",
          "Trước khi thành MANAGER giỏi → phải là EMPLOYEE giỏi; trước khi quản người khác → quản chính mình; trước khi thành LEADER → làm FOLLOWER hiệu quả; trước khi đòi người khác CHANGE → tự thay đổi mình (slide 52). OB bắt đầu từ chính bạn.",
        ),
        calloutBlock(
          "key",
          "So what — kiến thức này đổi hành động của bạn",
          "Mỗi khi bạn định kết luận kiểu \"nhân viên nghỉ vì lương\" hay \"người vui thì làm tốt\", dừng lại hỏi: đây là intuition hay có evidence? OB không bảo bỏ trực giác — nó bảo BỔ SUNG trực giác bằng systematic study (evidence-based management), vì môn này \"few absolutes\": cùng một khái niệm biểu hiện khác nhau tùy người và bối cảnh. Hành động: trước khi quy kết hành vi, đòi evidence và hỏi \"trong bối cảnh nào?\" (contingency) — đó là khác biệt giữa phán theo common sense và quản lý hiệu quả.",
        ),
      ],
      keyTerms: [
        {
          term: "effective manager",
          definition:
            "Manager đạt hiệu quả công việc, nhấn mạnh communication và human resource management.",
        },
        {
          term: "successful manager",
          definition:
            "Manager thăng tiến nhanh, trong nghiên cứu Luthans thường nhấn networking.",
        },
        {
          term: "systematic study",
          definition:
            "Nghiên cứu có hệ thống, dựa trên evidence/data để bổ sung intuition.",
        },
        {
          term: "evidence-based management",
          definition:
            "Quản trị dựa trên bằng chứng thay vì chỉ dựa vào common sense hoặc linh cảm.",
        },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "After medication errors rise, Lan examines how nurse fatigue, team handoffs, and the hospital's reporting structure shape behavior, then uses the findings to improve performance. Which description best matches her approach?",
      options: [
        {
          id: "a",
          text: "It is employee counseling focused only on individual happiness",
          isCorrect: false,
          rationale:
            "Cơ chế: Lan xem cả fatigue cá nhân, handoffs nhóm và reporting structure, không chỉ happiness. Bẫy: thấy yếu tố con người rồi thu hẹp thành counseling. Khóa: OB bao quát individual, group và structure.",
        },
        {
          id: "b",
          text: "It is OB because it studies individual, group, and structural effects on behavior and applies them to improve effectiveness",
          isCorrect: true,
          rationale:
            "Cơ chế: tình huống có đủ ba nguồn tác động và dùng kết quả để cải thiện hospital effectiveness. Bẫy: chỉ nhìn một biến như fatigue hoặc handoff. Khóa: OB = systematic study của individuals, groups, structure + application.",
        },
        {
          id: "c",
          text: "It is a universal prediction system that should produce the same answer in every hospital",
          isCorrect: false,
          rationale:
            "Cơ chế: kết quả hành vi còn phụ thuộc context của từng hospital. Bẫy: Lan dùng dữ liệu nên tưởng mô hình sẽ dự đoán tuyệt đối. Khóa: OB có few absolutes và cần contingency.",
        },
        {
          id: "d",
          text: "It is financial control because the goal is organizational performance",
          isCorrect: false,
          rationale:
            "Cơ chế: biến Lan phân tích đều là human behavior và social structure, không phải accounting controls. Bẫy: thấy mục tiêu performance rồi kéo sang tài chính. Khóa: object của OB là behavior trong tổ chức.",
        },
        {
          id: "e",
          text: "It is informal networking because staff members coordinate across roles",
          isCorrect: false,
          rationale:
            "Cơ chế: handoff coordination là group process, không đồng nghĩa networking để thăng tiến. Bẫy: thấy người ở nhiều vai trò tương tác rồi gắn nhãn network. Khóa: networking chỉ là một hành vi hẹp, không phải toàn bộ OB.",
        },
      ],
      difficulty: "basic",
      conceptTested: "OB definition",
      takeaway:
        "OB không chỉ là 'hiểu người'; nó nghiên cứu individuals, groups và structure để cải thiện organizational effectiveness.",
    },
    {
      id: "q02",
      stem: "Why does OB emphasize systematic study rather than relying only on common sense?",
      options: [
        {
          id: "a",
          text: "Because common sense is always wrong and should never be used",
          isCorrect: false,
          rationale:
            "Cơ chế: sách nói complement intuition, không xóa bỏ intuition. Bẫy: hiểu systematic study như phủ định hoàn toàn common sense. Khóa: OB bổ sung trực giác bằng evidence.",
        },
        {
          id: "b",
          text: "Because OB has one best formula that works for every culture and organization",
          isCorrect: false,
          rationale:
            "Cơ chế: few absolutes nghĩa là không có công thức đúng mọi nơi. Bẫy: nhầm systematic với universal formula. Khóa: systematic study phải đi kèm contingency.",
        },
        {
          id: "c",
          text: "Because systematic study uses evidence to complement intuition, while few absolutes in OB require contingency thinking",
          isCorrect: true,
          rationale:
            "Cơ chế: systematic study giúp kiểm chứng phán đoán; few absolutes buộc xem bối cảnh. Bẫy: coi OB là common sense hoặc công thức tuyệt đối. Khóa: evidence + contingency.",
        },
        {
          id: "d",
          text: "Because managers should ignore human differences to make decisions faster",
          isCorrect: false,
          rationale:
            "Cơ chế: OB bắt đầu từ individual differences, không bỏ qua khác biệt. Bẫy: tưởng nhanh là tốt hơn đúng. Khóa: evidence-based management cần nhìn dữ liệu và bối cảnh.",
        },
        {
          id: "e",
          text: "Because OB is only useful when employees behave predictably like machines",
          isCorrect: false,
          rationale:
            "Cơ chế: behavior partially understood và sometimes unpredictable. Bẫy: máy móc hóa con người. Khóa: chính vì khó đoán nên cần systematic study.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Systematic study vs intuition and contingency",
      takeaway:
        "OB không thay thế intuition; nó làm intuition bớt mù bằng evidence và contingency.",
    },
    {
      id: "q03",
      stem: "During a review meeting, Minh deliberately follows a checklist in public, unconsciously avoids eye contact, and privately suppresses a reaction after criticism. Which statement best explains why all these responses matter to OB?",
      options: [
        {
          id: "a",
          text: "Only the checklist behavior counts because behavior must be visible and conscious",
          isCorrect: false,
          rationale:
            "Cơ chế: checklist chỉ là phần overt/conscious; tránh eye contact và suppression vẫn là reactions. Bẫy: người quan sát dễ chỉ ghi nhận thứ nhìn thấy. Khóa: behavior có cả covert và unconscious.",
        },
        {
          id: "b",
          text: "Only Minh's stated attitude counts; his reactions to criticism are outside behavior",
          isCorrect: false,
          rationale:
            "Cơ chế: các phản ứng sau criticism chính là action/reaction trước stimulus. Bẫy: đợi Minh phát biểu mới công nhận có behavior. Khóa: stated attitude không bao trùm mọi phản ứng.",
        },
        {
          id: "c",
          text: "Behavior includes reactions that may be conscious or unconscious, overt or covert, and voluntary or involuntary",
          isCorrect: true,
          rationale:
            "Cơ chế: ba phản ứng của Minh minh họa đồng thời phần conscious/overt và unconscious/covert. Bẫy: chỉ chọn hành vi chủ ý. Khóa: Newstrom xem behavior rộng hơn hành động nhìn thấy.",
        },
        {
          id: "d",
          text: "Once these responses are observed, Minh's future behavior can be predicted perfectly",
          isCorrect: false,
          rationale:
            "Cơ chế: một meeting không loại bỏ contingency hay phần behavior chưa hiểu hết. Bẫy: pattern hiện tại tạo cảm giác chắc chắn. Khóa: behavior chỉ partially understood và sometimes unpredictable.",
        },
        {
          id: "e",
          text: "These responses matter only if they immediately change an organization-level policy",
          isCorrect: false,
          rationale:
            "Cơ chế: phản ứng của Minh đã là behavior ở individual level dù chưa đổi policy. Bẫy: chỉ coi outcome cấp tổ chức mới đáng học. Khóa: OB bắt đầu từ individual rồi mới nối lên group và organization.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Definition and scope of behavior",
      takeaway:
        "Behavior trong OB rộng hơn hành động nhìn thấy: có cả phần vô thức, ẩn và không tự nguyện.",
    },
    {
      id: "q04",
      stem: "What is the correct sequence of the four objectives of studying OB?",
      options: [
        {
          id: "a",
          text: "Predict → describe → control → understand",
          isCorrect: false,
          rationale:
            "Cơ chế: predict cần nền describe và understand trước. Bẫy: muốn nhảy ngay tới dự đoán. Khóa: phải mô tả và hiểu trước khi dự đoán.",
        },
        {
          id: "b",
          text: "Describe → understand → predict → control",
          isCorrect: true,
          rationale:
            "Cơ chế: Newstrom đặt chuỗi describe, understand, predict, control. Bẫy: đảo thứ tự hoặc hiểu control sai. Khóa: control là điều chỉnh hành vi trong công việc dựa trên hiểu biết.",
        },
        {
          id: "c",
          text: "Control → predict → understand → describe",
          isCorrect: false,
          rationale:
            "Cơ chế: control là bước sau khi đã hiểu và dự đoán. Bẫy: xem quản trị là bắt đầu bằng kiểm soát. Khóa: không thể điều chỉnh tốt nếu chưa hiểu hành vi.",
        },
        {
          id: "d",
          text: "Describe → control → ignore → predict",
          isCorrect: false,
          rationale:
            "Cơ chế: 'ignore' không phải objective của OB. Bẫy: chen một từ không thuộc khung. Khóa: bốn objective cố định là describe/understand/predict/control.",
        },
        {
          id: "e",
          text: "Understand → describe → control → predict",
          isCorrect: false,
          rationale:
            "Cơ chế: hiểu thường đi sau mô tả vì phải biết hiện tượng là gì trước. Bẫy: đổi thứ tự nghe hợp lý nhưng sai khung. Khóa: describe mở đầu chuỗi.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Four objectives of OB",
      takeaway:
        "Chuỗi mục tiêu OB: describe → understand → predict → control; control không có nghĩa thao túng phi đạo đức.",
    },
    {
      id: "q05",
      stem: "Which set correctly represents the three levels of analysis in OB?",
      options: [
        {
          id: "a",
          text: "Individual → group/interpersonal → organizational/intergroup",
          isCorrect: true,
          rationale:
            "Cơ chế: Topic 00 chia OB theo individual, group/interpersonal, organizational/intergroup. Bẫy: gộp group và organization. Khóa: 3 levels là xương sống của 12 topic.",
        },
        {
          id: "b",
          text: "Finance → marketing → operations",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là chức năng kinh doanh, không phải levels of analysis của OB. Bẫy: thấy môn quản trị rồi kéo sang business functions. Khóa: OB phân tích hành vi.",
        },
        {
          id: "c",
          text: "Personality → perception → motivation only",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là các topic thuộc individual level, chưa đủ group và organizational. Bẫy: lấy phần đầu môn thay toàn bộ khung. Khóa: cần đủ 3 cấp.",
        },
        {
          id: "d",
          text: "Organizational → individual → group, with group and organization treated as the same level",
          isCorrect: false,
          rationale:
            "Cơ chế: group và organizational là hai cấp khác nhau. Bẫy: đảo và gộp cấp độ. Khóa: individual → group → organizational.",
        },
        {
          id: "e",
          text: "Culture → accounting → legal compliance",
          isCorrect: false,
          rationale:
            "Cơ chế: culture liên quan OB nhưng accounting/legal compliance không phải level analysis. Bẫy: ghép các chủ đề tổ chức rời rạc. Khóa: levels nói về đơn vị phân tích.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Three levels of analysis",
      takeaway:
        "OB học từ cá nhân, lên nhóm, rồi lên tổ chức; đừng gộp group với organizational.",
    },
    {
      id: "q06",
      stem: "A case describes conflict between two departments that must coordinate a shared project. Which OB level is most directly involved?",
      options: [
        {
          id: "a",
          text: "Only individual level, because every conflict starts inside one person's personality",
          isCorrect: false,
          rationale:
            "Cơ chế: personality có thể ảnh hưởng, nhưng case nói conflict giữa hai departments. Bẫy: kéo mọi thứ về cá nhân. Khóa: đơn vị phân tích trực tiếp là intergroup/organizational.",
        },
        {
          id: "b",
          text: "Only job satisfaction, because conflict always means employees dislike their jobs",
          isCorrect: false,
          rationale:
            "Cơ chế: job satisfaction là outcome/attitude cá nhân, không mô tả conflict giữa departments. Bẫy: nhầm triệu chứng với level. Khóa: đọc đơn vị đang tương tác.",
        },
        {
          id: "c",
          text: "Intergroup or organizational level, because the issue is coordination between groups",
          isCorrect: true,
          rationale:
            "Cơ chế: hai departments là hai nhóm trong tổ chức; conflict và coordination giữa nhóm thuộc intergroup/organizational level. Bẫy: nhầm conflict với chuyện cá nhân. Khóa: nhìn actor chính trong case.",
        },
        {
          id: "d",
          text: "Anthropology only, because all conflict is cultural",
          isCorrect: false,
          rationale:
            "Cơ chế: culture có thể liên quan nhưng không phải mọi conflict đều là anthropology. Bẫy: tuyệt đối hóa một discipline. Khóa: question hỏi level, không hỏi discipline.",
        },
        {
          id: "e",
          text: "No OB level, because departments are formal structures rather than people",
          isCorrect: false,
          rationale:
            "Cơ chế: structure là một phần định nghĩa OB, và departments gồm người/nhóm tương tác. Bẫy: tách structure khỏi behavior. Khóa: OB nghiên cứu cả groups và structure.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "Applying OB levels to a case",
      takeaway:
        "Khi actor chính là hai nhóm hoặc departments, ưu tiên đọc case ở intergroup/organizational level.",
    },
    {
      id: "q07",
      stem: "What is the correct structure of the Basic OB Model?",
      options: [
        {
          id: "a",
          text: "Outcomes → inputs → processes",
          isCorrect: false,
          rationale:
            "Cơ chế: outcomes là kết quả, không phải điểm bắt đầu. Bẫy: đảo flow. Khóa: model bắt đầu từ inputs.",
        },
        {
          id: "b",
          text: "Inputs → processes → outcomes",
          isCorrect: true,
          rationale:
            "Cơ chế: Robbins & Judge Exhibit 1-3 tổ chức theo Inputs → Processes → Outcomes. Bẫy: bỏ processes hoặc đảo outcomes. Khóa: inputs tạo processes, processes tạo outcomes.",
        },
        {
          id: "c",
          text: "Processes → inputs → outcomes",
          isCorrect: false,
          rationale:
            "Cơ chế: processes phát sinh từ inputs. Bẫy: đặt hành động/quyết định trước điều kiện đầu vào. Khóa: personality, values, structure, culture là inputs.",
        },
        {
          id: "d",
          text: "Inputs → outcomes only",
          isCorrect: false,
          rationale:
            "Cơ chế: model có processes làm cầu nối. Bẫy: rút gọn thành hai phần. Khóa: motivation, communication, leadership, conflict... là processes quan trọng.",
        },
        {
          id: "e",
          text: "Disciplines → diversity → networking",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là các chủ đề trong topic, không phải cấu trúc Basic OB Model. Bẫy: gom từ khóa đúng nhưng sai quan hệ. Khóa: model là IPO: inputs/processes/outcomes.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Basic OB Model",
      takeaway:
        "Basic OB Model là khung IPO: Inputs → Processes → Outcomes.",
    },
    {
      id: "q08",
      stem: "Which pair correctly distinguishes OCB from withdrawal behavior?",
      options: [
        {
          id: "a",
          text: "OCB is voluntary extra-role behavior that helps the organization; withdrawal behavior includes lateness, absence, or quitting",
          isCorrect: true,
          rationale:
            "Cơ chế: OCB là hành vi tự nguyện ngoài job description; withdrawal là rút lui khỏi công việc. Bẫy: nhầm OCB với nhiệm vụ bắt buộc. Khóa: một bên tích cực extra-role, một bên rút lui.",
        },
        {
          id: "b",
          text: "OCB is required task performance; withdrawal behavior is high motivation",
          isCorrect: false,
          rationale:
            "Cơ chế: OCB không phải required task performance; withdrawal không phải high motivation. Bẫy: gán nhầm hai outcome. Khóa: OCB tự nguyện, withdrawal là rút lui.",
        },
        {
          id: "c",
          text: "OCB means an employee leaves the organization; withdrawal means helping coworkers",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là đảo nghĩa. Bẫy: chọn theo cảm giác từ chữ 'withdrawal' mà không đối chiếu OCB. Khóa: withdrawal mới là rút lui.",
        },
        {
          id: "d",
          text: "OCB and withdrawal behavior are both group cohesion outcomes only",
          isCorrect: false,
          rationale:
            "Cơ chế: OCB và withdrawal nằm ở individual outcomes trong model. Bẫy: nhầm mọi outcome với group. Khóa: group cohesion/functioning là nhóm outcome riêng.",
        },
        {
          id: "e",
          text: "OCB is unethical manipulation; withdrawal behavior is evidence-based management",
          isCorrect: false,
          rationale:
            "Cơ chế: cả hai định nghĩa đều sai. Bẫy: kéo thuật ngữ đạo đức/evidence vào outcome. Khóa: OCB và withdrawal là loại hành vi, không phải phương pháp quản trị.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "OCB and withdrawal behavior",
      takeaway:
        "OCB là tự nguyện giúp tổ chức; withdrawal là dấu hiệu rút lui như trễ, vắng, nghỉ.",
    },
    {
      id: "q09",
      stem: "Which mapping of behavioral science disciplines to OB contributions is most accurate?",
      options: [
        {
          id: "a",
          text: "Psychology mainly studies culture and cross-cultural environments",
          isCorrect: false,
          rationale:
            "Cơ chế: culture/cross-cultural comparison thuộc anthropology trong Exhibit 1-1. Bẫy: gán mọi thứ về psychology. Khóa: psychology tập trung cá nhân.",
        },
        {
          id: "b",
          text: "Anthropology mainly studies individual job satisfaction and perception",
          isCorrect: false,
          rationale:
            "Cơ chế: job satisfaction/perception gần psychology hơn. Bẫy: nhầm đơn vị phân tích. Khóa: anthropology nhấn culture/environment.",
        },
        {
          id: "c",
          text: "Economics is the only behavioral science discipline behind OB",
          isCorrect: false,
          rationale:
            "Cơ chế: Topic 00 nêu 4 behavioral science disciplines: psychology, social psychology, sociology, anthropology. Bẫy: kéo economics vào làm nguồn chính dù không trong list này. Khóa: bám Exhibit 1-1.",
        },
        {
          id: "d",
          text: "Psychology focuses on individuals; social psychology on group influence/change; sociology on social systems/groups; anthropology on culture and environments",
          isCorrect: true,
          rationale:
            "Cơ chế: mapping này đúng theo 4 disciplines và đơn vị phân tích. Bẫy: đảo culture sang psychology hoặc bỏ sociology. Khóa: mỗi discipline đóng góp một lens.",
        },
        {
          id: "e",
          text: "Sociology is only about individual learning and motivation",
          isCorrect: false,
          rationale:
            "Cơ chế: learning/motivation là psychology; sociology nghiên cứu group dynamics, social systems, power, conflict, structure. Bẫy: nhầm individual với social system. Khóa: sociology nhìn nhóm/hệ thống.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Disciplines contributing to OB",
      takeaway:
        "OB là liên ngành: psychology, social psychology, sociology và anthropology mỗi ngành đóng một lens khác nhau.",
    },
    {
      id: "q10",
      stem: "A team becomes more creative because members with different backgrounds are included and managed well. Which OB idea best explains this?",
      options: [
        {
          id: "a",
          text: "Diversity is always harmful because differences only create conflict",
          isCorrect: false,
          rationale:
            "Cơ chế: diversity quản kém có thể gây conflict, nhưng quản tốt tạo creativity/synergy. Bẫy: tuyệt đối hóa mặt xấu. Khóa: diversity là con dao hai lưỡi.",
        },
        {
          id: "b",
          text: "Diversity is always beneficial even without management",
          isCorrect: false,
          rationale:
            "Cơ chế: lợi ích diversity phụ thuộc cách quản lý. Bẫy: tuyệt đối hóa mặt tốt. Khóa: cần inclusion và quản trị tốt để tạo synergy.",
        },
        {
          id: "c",
          text: "Workforce diversity can become a source of creativity and synergy when managed well",
          isCorrect: true,
          rationale:
            "Cơ chế: slide 48 nêu diversity quản tốt → creativity, synergy, effectiveness, sustainability. Bẫy: quên điều kiện 'managed well'. Khóa: diversity không tự động tốt/xấu.",
        },
        {
          id: "d",
          text: "Individual differences should be eliminated to make the team more uniform",
          isCorrect: false,
          rationale:
            "Cơ chế: OB xem individual differences là thực tế cần hiểu, không phải xóa. Bẫy: đồng nhất uniformity với effectiveness. Khóa: khác biệt được quản tốt mới tạo value.",
        },
        {
          id: "e",
          text: "The case shows withdrawal behavior, because members have different backgrounds",
          isCorrect: false,
          rationale:
            "Cơ chế: withdrawal là rút lui như vắng mặt/nghỉ việc, không phải diversity. Bẫy: dùng sai outcome. Khóa: case nói creativity từ diversity.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "Workforce diversity as a double-edged sword",
      takeaway:
        "Diversity là con dao hai lưỡi: quản kém gây conflict, quản tốt tạo creativity và synergy.",
    },
    {
      id: "q11",
      stem: "According to Luthans' distinction discussed in OB, which statement is correct?",
      options: [
        {
          id: "a",
          text: "Effective managers emphasize communication and human resource management; successful managers who are promoted quickly emphasize networking",
          isCorrect: true,
          rationale:
            "Cơ chế: Luthans phân biệt effective manager và successful manager; effective nhấn communication/HRM, successful nhấn networking. Bẫy: tưởng thăng tiến nhanh luôn trùng với hiệu quả. Khóa: success career và effectiveness không luôn giống nhau.",
        },
        {
          id: "b",
          text: "Effective managers focus only on networking, while successful managers avoid networking",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là đảo mapping. Bẫy: thấy networking nổi bật rồi gán cho effective. Khóa: successful promotion nhanh mới nhấn networking.",
        },
        {
          id: "c",
          text: "Effective and successful managers are always exactly the same group",
          isCorrect: false,
          rationale:
            "Cơ chế: điểm của Luthans là hai khái niệm có thể khác nhau. Bẫy: đồng nhất career success với managerial effectiveness. Khóa: cần phân biệt tiêu chí đo.",
        },
        {
          id: "d",
          text: "Successful managers never use communication or HRM",
          isCorrect: false,
          rationale:
            "Cơ chế: distinction nói hoạt động được nhấn mạnh, không nói successful manager không dùng communication/HRM. Bẫy: đọc bảng thành phủ định tuyệt đối. Khóa: so sánh emphasis, không phải loại trừ.",
        },
        {
          id: "e",
          text: "The distinction is about accounting performance, not managerial behavior",
          isCorrect: false,
          rationale:
            "Cơ chế: Luthans discussion thuộc managerial activities/behavior trong OB. Bẫy: kéo sang accounting. Khóa: OB nhìn hành vi và hoạt động của manager.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Effective vs successful managers",
      takeaway:
        "OB giúp thấy thăng tiến nhanh và quản lý hiệu quả không phải lúc nào cũng là một chuyện.",
    },
    {
      id: "q12",
      stem: "A research team studies how organizations build employee hope, resilience, vitality, and strengths while still using negative feedback when it is useful. Which field best fits the study?",
      options: [
        { id: "a", text: "Positive organizational scholarship", isCorrect: true, rationale: "Cơ chế: field này nghiên cứu human strengths, vitality, resilience và potential trong tổ chức. Bẫy: chữ positive dễ bị hiểu thành chỉ nói điều dễ nghe. Khóa: POS vẫn thừa nhận giá trị của negative feedback." },
        { id: "b", text: "A policy of ignoring every weakness and failure", isCorrect: false, rationale: "Cơ chế: POS đổi lens sang strengths nhưng không phủ nhận weakness hay negative feedback. Bẫy: positive bị tuyệt đối hóa thành né mọi vấn đề. Khóa: strengths-based không đồng nghĩa blind optimism." },
        { id: "c", text: "Electronic performance monitoring", isCorrect: false, rationale: "Cơ chế: monitoring theo dõi hành vi/performance, không phải field nghiên cứu hope và resilience. Bẫy: cả hai đều có thể dùng workplace data. Khóa: surveillance khác positive scholarship." },
        { id: "d", text: "An instrumental ethical climate", isCorrect: false, rationale: "Cơ chế: instrumental climate ưu tiên self-interest trong quyết định đạo đức. Bẫy: vitality và strengths có thể cải thiện outcomes cá nhân. Khóa: POS không phải ethical-climate category." },
        { id: "e", text: "Workforce demographic analysis", isCorrect: false, rationale: "Cơ chế: demographics xem age, labor participation và workforce composition. Bẫy: resilience có thể khác theo nhóm nhân khẩu. Khóa: stem hỏi phát triển strengths, không hỏi composition." },
      ],
      difficulty: "intermediate",
      conceptTested: "Positive organizational scholarship",
      takeaway: "POS nhìn OB qua human strengths, vitality và resilience nhưng không biến positivity thành lý do bỏ qua feedback tiêu cực.",
    },
    {
      id: "q13",
      stem: "An employee must decide whether to report a supervisor's misconduct, even though reporting may damage her career. What is she facing?",
      options: [
        { id: "a", text: "An ethical dilemma requiring her to define right and wrong for action", isCorrect: true, rationale: "Cơ chế: tình huống buộc cá nhân cân nhắc đúng-sai trước một lựa chọn có hậu quả thật. Bẫy: có misconduct nên dễ gọi ngay là ethics training problem. Khóa: decision situation = ethical dilemma." },
        { id: "b", text: "An ethics training program", isCorrect: false, rationale: "Cơ chế: training là hoạt động tổ chức giúp chuẩn hóa nhận thức đạo đức, không phải lựa chọn đang xảy ra. Bẫy: training có thể giúp employee xử lý case. Khóa: program khác dilemma." },
        { id: "c", text: "An ethically healthy climate", isCorrect: false, rationale: "Cơ chế: climate là môi trường chung giảm ambiguity về đúng-sai. Bẫy: climate ảnh hưởng quyết định báo cáo. Khóa: stem mô tả lựa chọn cá nhân, không mô tả shared climate." },
        { id: "d", text: "A demographic trend", isCorrect: false, rationale: "Cơ chế: demographic trend là thay đổi cấu trúc workforce. Bẫy: career consequences có thể khác giữa nhóm nhân viên. Khóa: không có dữ kiện population change." },
        { id: "e", text: "Systematic study", isCorrect: false, rationale: "Cơ chế: systematic study dùng evidence để hiểu hành vi. Bẫy: employee có thể cần thu thập evidence trước khi report. Khóa: câu hỏi phân loại tình huống đúng-sai." },
      ],
      difficulty: "intermediate",
      conceptTested: "Ethical dilemmas and ethical choices",
      takeaway: "Ethical dilemma là lúc cá nhân phải tự xác định đúng-sai để hành động; ethical climate và training chỉ là bối cảnh hỗ trợ quyết định đó.",
    },
    {
      id: "q14",
      stem: "A company expands electronic monitoring and discovers that informal employee interaction predicts productivity. Which conclusion best reflects the limits of Big Data management?",
      options: [
        { id: "a", text: "Use the insight carefully because surveillance raises privacy concerns and monitoring gains may be short-lived", isCorrect: true, rationale: "Cơ chế: Big Data có thể phát hiện vai trò của social interaction nhưng surveillance gây privacy risk và monitoring chỉ nâng một số outcomes ngắn hạn. Bẫy: data chính xác dễ tạo niềm tin rằng theo dõi càng nhiều càng tốt. Khóa: insight hữu ích không xóa giới hạn quản trị." },
        { id: "b", text: "Continuous monitoring always raises long-term productivity and citizenship", isCorrect: false, rationale: "Cơ chế: evidence trong block chỉ cho hiệu ứng task performance và citizenship NGẮN HẠN. Bẫy: electronic data tạo cảm giác kiểm soát bền vững. Khóa: always + long-term trái với giới hạn nêu trong sách." },
        { id: "c", text: "Privacy is irrelevant whenever the data improve prediction", isCorrect: false, rationale: "Cơ chế: surveillance đặt ra privacy concern dù prediction hữu ích. Bẫy: outcome tốt bị dùng để hợp thức hóa mọi phương tiện. Khóa: data-driven management vẫn cần ethical governance." },
        { id: "d", text: "Social interaction should be eliminated to make work measurable", isCorrect: false, rationale: "Cơ chế: nghiên cứu cho thấy interaction có thể làm nhân viên productive hơn. Bẫy: informal time dễ bị coi là waste. Khóa: Big Data ở đây phát hiện giá trị của breaks và interaction." },
        { id: "e", text: "Data analytics cannot detect risk or predict events", isCorrect: false, rationale: "Cơ chế: predicting events và detecting risk là current uses của analytics. Bẫy: thấy limitations rồi phủ định toàn bộ công cụ. Khóa: giới hạn không đồng nghĩa vô dụng." },
      ],
      difficulty: "advanced",
      conceptTested: "Big Data limitations",
      takeaway: "Big Data hỗ trợ prediction và phát hiện pattern, nhưng surveillance cần giới hạn privacy và không thể thay quản trị outcomes dài hạn.",
    },
  ],
  status: "ready",
  source:
    "Organizational Behavior (IM2017, Dr Truong Thi Lan Anh) — slide 'OB-Topic 0 - Introduction' + Reading 'Chapter 1 - Welcome to the world of OB' (Robbins & Judge). Định nghĩa OB (Robbins & Judge 2019 + Newstrom 2014); Basic OB Model (Robbins & Judge, Exhibit 1-3); 4 disciplines (Exhibit 1-1).",
};

const topic01: Chapter = {
  slug: "topic-01",
  order: 1,
  title: "Topic 01 — Personality & Learning Styles",
  bigIdea:
    "Personality = khuynh hướng hành vi tự nhiên & nhất quán của một người (nature + nurture) — nhưng nó chỉ BỘC LỘ thành hành vi tùy tình huống; hiểu nó qua các framework (Big Five, MBTI, Holland) để đạt person-job/organization fit và phát triển chính mình.",
  bigIdeaPillars: [
    {
      label: "Bản chất",
      body: "Cách một người react & interact với người khác — most comfortable/natural behaviors, nhất quán. Determinants: heredity (nature) + environment/situation (nurture).",
    },
    {
      label: "Tùy tình huống",
      body: "Situation Strength Theory (traits dự đoán behavior tốt hơn ở weak situations) + Trait Activation Theory (tình huống phù hợp 'kích hoạt' trait).",
    },
    {
      label: "Đo bằng framework",
      body: "Big Five/OCEAN (khoa học nhất) · MBTI (16 types — self-awareness, KHÔNG dùng tuyển chọn) · Holland/RIASEC (career fit).",
    },
    {
      label: "Ứng dụng",
      body: "Person-Job Fit + Person-Organization Fit → satisfaction, giảm turnover; cần diversified teams, không cloning.",
    },
  ],
  learningObjectives: [
    "Định nghĩa personality (sum of ways an individual reacts to & interacts with others) và 2 nhóm determinants: heredity (nature) vs environment/situation (nurture); nêu cái nào thay đổi được.",
    "Giải thích Situation Strength Theory (strong vs weak situations) và vì sao personality traits dự đoán behavior tốt hơn ở weak situations.",
    "Giải thích Trait Activation Theory: tình huống phù hợp 'kích hoạt' một trait, tăng khả năng personality dự đoán behavior.",
    "Nêu 5 dimensions của Big Five (OCEAN) và implications for managers (conscientiousness → performance; emotional stability → satisfaction; extraversion, openness, agreeableness).",
    "Mô tả MBTI: 4 axes (E/I, S/N, T/F, J/P) → 16 types; nêu đúng cách dùng (self-awareness/counseling, KHÔNG dùng làm tiêu chí tuyển chọn chính).",
    "Giải thích Holland's RIASEC và Person-Job Fit: fit giữa personality type và occupational environment → satisfaction, lower turnover.",
    "Phân biệt Person-Job Fit vs Person-Organization Fit và giải thích ý nghĩa của diversified (không cloning) teams.",
    "Liên hệ personality với learning styles (theo MBTI & Big Five) và các yếu tố phát triển personality (heredity, environment, experience, active learning, efforts to change).",
    "Phân biệt assessing personality: self-report vs observer-ratings và vì sao nên dùng CẢ HAI khi ra quyết định tuyển dụng (R&J Ch.4).",
    "Nêu 4 components of situation strength: clarity, consistency, constraints, consequences (R&J Ch.4).",
    "Nêu The Dark Triad (Machiavellianism, narcissism, psychopathy) và liên hệ với hành vi OB (CWB, leadership).",
    "Giải thích Core Self-Evaluation, Self-Monitoring, Proactive Personality như các personality attributes quan trọng cho OB.",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "Personality: (A) bản chất & determinants, (B) bộc lộ tùy tình huống, (C) đo bằng framework & ứng dụng fit, (D) trait nâng cao từ sách. Bấm node để mở chi tiết.",
    nodes: [
      { id: "pers", label: "Personality", group: "concept", sectionId: "s1", detail: "Khuynh hướng hành vi tự nhiên & nhất quán; nature + nurture." },
      { id: "g_nat", label: "A. Bản chất & determinants", group: "concept", parent: "pers", sectionId: "s1", detail: "Định nghĩa, heredity vs environment, practical view." },
      { id: "g_sit", label: "B. Bộc lộ tùy tình huống", group: "concept", parent: "pers", sectionId: "s2", detail: "Situation Strength + Trait Activation + Jung." },
      { id: "g_fw", label: "C. Framework & ứng dụng", group: "concept", parent: "pers", sectionId: "s3", detail: "Big Five, MBTI, Holland, Person-Job/Org Fit." },
      { id: "t_def", label: "Định nghĩa & determinants", group: "term", parent: "g_nat", sectionId: "s1", detail: "Sum of ways react/interact; heredity (nature) + environment (nurture)." },
      { id: "t_sit", label: "Situation Strength & Trait Activation", group: "term", parent: "g_sit", sectionId: "s2", detail: "Weak > strong cho dự đoán; tình huống kích hoạt trait." },
      { id: "t_big5", label: "Big Five (OCEAN)", group: "term", parent: "g_fw", sectionId: "s3", detail: "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism." },
      { id: "t_mbti", label: "MBTI (16 types)", group: "term", parent: "g_fw", sectionId: "s4", detail: "E/I, S/N, T/F, J/P — self-awareness, không tuyển chọn." },
      { id: "t_holland", label: "Holland RIASEC & fit", group: "term", parent: "g_fw", sectionId: "s5", detail: "Career choice; Person-Job & Person-Organization Fit." },
      { id: "t_learn", label: "Learning styles & development", group: "term", parent: "g_fw", sectionId: "s6", detail: "Learning styles theo MBTI/Big Five; yếu tố phát triển personality." },
      { id: "g_book", label: "D. Trait nâng cao (sách)", group: "concept", parent: "pers", sectionId: "s7", detail: "Dark Triad + CSE/Self-Monitoring/Proactive — phần sách vượt slide." },
      { id: "t_dark", label: "Dark Triad", group: "term", parent: "g_book", sectionId: "s7", detail: "Machiavellianism, narcissism, psychopathy + other aberrant traits." },
      { id: "t_attr", label: "CSE · Self-Monitoring · Proactive", group: "term", parent: "g_book", sectionId: "s8", detail: "3 personality attributes quan trọng cho OB." },
    ],
    edges: [
      { from: "pers", to: "g_nat" },
      { from: "pers", to: "g_sit" },
      { from: "pers", to: "g_fw" },
      { from: "g_nat", to: "t_def" },
      { from: "g_sit", to: "t_sit" },
      { from: "g_fw", to: "t_big5" },
      { from: "g_fw", to: "t_mbti" },
      { from: "g_fw", to: "t_holland" },
      { from: "g_fw", to: "t_learn" },
      { from: "pers", to: "g_book" },
      { from: "g_book", to: "t_dark" },
      { from: "g_book", to: "t_attr" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "Personality là gì & determinants",
      blocks: [
        calloutBlock(
          "key",
          "Định nghĩa personality",
          "Personality = 'the sum of ways in which an individual reacts to and interacts with others' (Robbins & Judge, 2019). Cách thực dụng (slide 8): personality là những hành vi BẠN thấy THOẢI MÁI NHẤT & tự nhiên nhất, nhất quán khi phản ứng với môi trường. Đo personality = đo cách bạn NATURALLY PREFER làm việc.",
        ),
        flowBlock(
          "s1",
          "2 nhóm determinants",
          "horizontal",
          [
            { id: "s1_hered", label: "Heredity (nature)", detail: "Do gene → traits bẩm sinh; KHÓ/không thay đổi." },
            { id: "s1_env", label: "Environment & situation (nurture)", detail: "Do sống/làm việc/trải nghiệm → CÓ thể thay đổi." },
            { id: "s1_pers", label: "Personality", detail: "Kết hợp cả hai → khuynh hướng hành vi." },
          ],
          [
            { from: "s1_hered", to: "s1_pers", label: "nature" },
            { from: "s1_env", to: "s1_pers", label: "nurture" },
          ],
          "Personality = nature + nurture; phần nurture mới là phần bạn rèn được (slide 6).",
        ),
        calloutBlock(
          "note",
          "Traits & frameworks",
          "Personality trait = đặc điểm mô tả hành vi của một người. Có nhiều framework đo personality: Big Five (OCEAN), MBTI, DISC, Holland (RIASEC)… Topic này tập trung Big Five, MBTI, Holland (slide 6).",
        ),
        comparisonBlock(
          "Assessing personality — 2 cách đo (R&J Ch.4, p78)",
          ["Cách đo", "Đặc điểm & lưu ý"],
          [
            { label: "Self-report surveys", cells: ["Tự đánh giá bản thân trên loạt yếu tố. BIAS: khi biết điểm dùng để tuyển, người ta tự chấm cao hơn ~½ độ lệch chuẩn ở conscientiousness & emotional stability; tâm trạng xấu → điểm thiếu chính xác."] },
            { label: "Observer-ratings surveys", cells: ["Người khác (đồng nghiệp/quan sát viên) đánh giá độc lập. Dự đoán job success TỐT HƠN self-report; kết hợp CẢ HAI → dự đoán performance tốt nhất khi ra quyết định tuyển dụng."] },
          ],
        ),
        calloutBlock(
          "note",
          "Culture & heredity — điều sách nhấn thêm (p78-79)",
          "Culture ảnh hưởng cách tự đánh giá: nước cá nhân chủ nghĩa (US, Úc) → self-enhancement; nước tập thể (Đài Loan, TQ, Hàn) → self-diminishment (p78). Về determinants: R&J nói personality là kết quả của CẢ heredity + environment, nhưng nghiên cứu nghiêng về TẦM QUAN TRỌNG CỦA HEREDITY hơn (heredity = yếu tố xác định lúc thụ thai). Dù vậy personality VẪN đổi: điểm dependability tăng theo tuổi, dễ đổi ở tuổi teen, ổn định hơn khi trưởng thành (p79).",
        ),
      ],
      keyTerms: [
        { term: "personality", definition: "The sum of ways in which an individual reacts to and interacts with others (Robbins & Judge, 2019)." },
        { term: "personality trait", definition: "Đặc điểm bền vững mô tả hành vi của một cá nhân." },
        { term: "heredity (nature)", definition: "Yếu tố di truyền qua gene, quy định traits bẩm sinh; khó thay đổi." },
        { term: "environment (nurture)", definition: "Yếu tố môi trường/tình huống/trải nghiệm định hình personality; có thể thay đổi." },
        { term: "personality framework", definition: "Hệ thống phân loại/đo personality (Big Five, MBTI, Holland…)." },
        { term: "observer-ratings survey", definition: "Khảo sát personality do người khác (đồng nghiệp/quan sát viên) đánh giá độc lập; dự đoán job success tốt hơn self-report (R&J Ch.4, p78)." },
      ],
    },
    {
      id: "s2",
      heading: "Personality bộc lộ tùy tình huống",
      blocks: [
        comparisonBlock(
          "Situation Strength Theory",
          ["Loại tình huống", "Đặc điểm & hệ quả"],
          [
            { label: "Strong situation", cells: ["Norms/cues/standards rõ → cho biết hành vi đúng, ép thể hiện, chặn hành vi sai → personality KHÓ bộc lộ"] },
            { label: "Weak situation", cells: ["'Anything goes' → tự do thể hiện personality → traits DỰ ĐOÁN behavior tốt hơn"] },
          ],
        ),
        calloutBlock(
          "key",
          "Trait Activation Theory",
          "Một số tình huống/sự kiện 'ACTIVATE' (kích hoạt) một trait hơn tình huống khác. Khi tình huống phù hợp với trait, sức mạnh của personality trong việc dự đoán behavior CÀNG CAO (Robbins & Judge, 2019). Kết hợp với Situation Strength: personality không tự động thành behavior — nó cần đúng bối cảnh để bộc lộ.",
        ),
        calloutBlock(
          "insight",
          "'Your behaviors define you' — nhưng coi chừng bias",
          "Người khác chỉ QUAN SÁT behavior của bạn để định nghĩa bạn là ai. Điều đó đúng với personality thật ở WEAK situations, nhưng có thể SAI ở STRONG situations (khi bạn phải theo work-mask) — hoặc do bias của họ. Đây chính là mạch tư duy đề thi Topic 1 (Jung: self-image ↔ work-mask, slide 10).",
        ),
        comparisonBlock(
          "Jung: self-image (natural) ↔ work-mask (adjusted) — slide 10",
          ["Khía cạnh", "Self-image (natural)", "Work-mask (adjusted)"],
          [
            { label: "Mức ý thức", cells: ["Unconscious behavior", "Conscious behavior"] },
            { label: "Tính chất hành vi", cells: ["Spontaneous, natural, pressure behavior", "Work role, desired, adjusted behavior"] },
            { label: "Chuẩn tham chiếu", cells: ["Bản thân — less stressful", "Corporate culture"] },
            { label: "Năng lượng tiêu hao", cells: ["Less energy", "More energy"] },
          ],
        ),
        comparisonBlock(
          "Components of Situation Strength — 4 yếu tố (R&J Ch.4, p86)",
          ["Thành phần", "Nghĩa", "Ví dụ tình huống MẠNH"],
          [
            { label: "Clarity", cells: ["Cues về nhiệm vụ/trách nhiệm rõ ràng & sẵn có", "Lao công (rõ) > bảo mẫu"] },
            { label: "Consistency", cells: ["Các cues tương thích, cùng chỉ về một behavior", "Y tá cấp cứu > quản lý"] },
            { label: "Constraints", cells: ["Tự do quyết định bị giới hạn bởi lực bên ngoài", "Thanh tra ngân hàng > kiểm lâm"] },
            { label: "Consequences", cells: ["Quyết định/hành động có hệ quả quan trọng cho tổ chức", "Bác sĩ phẫu thuật > giáo viên ngoại ngữ"] },
          ],
        ),
      ],
      keyTerms: [
        { term: "situation strength theory", definition: "Cách personality chuyển thành behavior phụ thuộc mức độ mạnh/yếu của tình huống." },
        { term: "strong situation", definition: "Tình huống có norms/cues rõ ràng ép hành vi đúng → personality khó bộc lộ." },
        { term: "weak situation", definition: "Tình huống 'anything goes' → traits dự đoán behavior tốt hơn." },
        { term: "trait activation theory", definition: "Một số tình huống kích hoạt một trait, làm personality dự đoán behavior mạnh hơn." },
        { term: "self-image / work mask", definition: "Hành vi tự nhiên (vô thức) so với hành vi điều chỉnh theo vai trò công việc (có ý thức) — Carl Jung, 1920." },
      ],
    },
    {
      id: "s3",
      heading: "Big Five (OCEAN)",
      blocks: [
        comparisonBlock(
          "Big Five — OCEAN (Robbins & Judge)",
          ["Dimension", "Người điểm CAO", "Implication công việc"],
          [
            { label: "Openness to experience", cells: ["Tò mò, sáng tạo, thích cái mới", "Sáng tạo hơn, có thể là good leaders"] },
            { label: "Conscientiousness", cells: ["Kỷ luật, có tổ chức, đáng tin", "Nhiều job knowledge, nỗ lực & performance cao hơn"] },
            { label: "Extraversion", cells: ["Hướng ngoại, hòa đồng, quyết đoán", "Hạnh phúc hơn trong công việc, social skills tốt"] },
            { label: "Agreeableness", cells: ["Hợp tác, ấm áp, tin người", "Tốt trong tình huống xã hội / teamwork"] },
            { label: "Neuroticism", cells: ["Dễ lo âu, bất ổn cảm xúc (đối cực = emotional stability)", "Emotional stability cao → job satisfaction"] },
          ],
        ),
        calloutBlock(
          "note",
          "Vì sao Big Five 'khoa học' nhất",
          "Big Five được nghiên cứu thực nghiệm nhiều nhất, dự đoán tốt các outcome công việc (performance, satisfaction). Đây là lý do OB ưu tiên Big Five hơn MBTI khi cần bằng chứng (slide 24).",
        ),
        calloutBlock(
          "note",
          "Big Five 'at work' — chi tiết sách (R&J Ch.4, p81-82)",
          "Conscientiousness → nhiều job knowledge, nỗ lực & performance cao. Emotional stability → life/job satisfaction, ít stress; cao → thích ứng thay đổi, thấp (neurotic) → burnout, work-family conflict. Extraversion → tốt ở việc nhiều tương tác, dự báo leadership emergence (nhưng impulsive hơn, dễ vắng mặt). Openness → dễ là leader hiệu quả, thoải mái với ambiguity, thích ứng thay đổi. Agreeableness → được yêu thích, tốt ở việc interpersonal, tuân thủ, ít tai nạn, đóng góp OCB; thấp → CWB, ít thành công về earnings. → Mắt xích môn học: personality là INPUT đầu chuỗi cá nhân — trait định hình cách bạn nhìn nhận tình huống (perception, Topic 02), attitudes (Topic 05) và motivation (Topic 06); nền cá nhân này quay lại ở Topic 07 khi ghép người vào nhóm.",
        ),
      ],
      keyTerms: [
        { term: "Big Five (OCEAN)", definition: "Mô hình 5 dimensions: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism." },
        { term: "conscientiousness", definition: "Kỷ luật, có tổ chức; dự đoán mạnh nhất về job performance." },
        { term: "extraversion", definition: "Mức hướng ngoại, hòa đồng, quyết đoán." },
        { term: "agreeableness", definition: "Mức hợp tác, ấm áp, tin người." },
        { term: "emotional stability", definition: "Đối cực của neuroticism; cao → job satisfaction." },
      ],
    },
    {
      id: "s4",
      heading: "MBTI (16 types)",
      blocks: [
        comparisonBlock(
          "MBTI — 4 axes",
          ["Axis", "Cực 1", "Cực 2"],
          [
            { label: "Hướng năng lượng", cells: ["Extroverted (E) — sociable, assertive", "Introverted (I) — quiet, reflective"] },
            { label: "Thu nhận thông tin", cells: ["Sensing (S) — practical, orderly, facts", "Intuitive (N) — patterns, ý tưởng"] },
            { label: "Ra quyết định", cells: ["Thinking (T) — reason & logic", "Feeling (F) — values & emotions"] },
            { label: "Lối sống", cells: ["Judging (J) — order & structure", "Perceiving (P) — flexible, spontaneous"] },
          ],
        ),
        calloutBlock(
          "key",
          "Dùng MBTI đúng cách",
          "4 axes → 16 personality types. MBTI là công cụ TỐT cho self-awareness & counseling — hiểu mình & giao tiếp. NHƯNG không nên dùng làm tiêu chí tuyển chọn chính (key selection criterion) vì độ tin cậy/ổn định hạn chế (slide 13). Mỗi preference còn gợi một vùng kỹ năng nên phát triển (xem bảng dưới).",
        ),
        comparisonBlock(
          "MBTI preference → vùng kỹ năng nên phát triển (slide 19)",
          ["Preference", "Vùng kỹ năng nên phát triển"],
          [
            { label: "Extroverted (E)", cells: ["Listening to others"] },
            { label: "Introverted (I)", cells: ["Assertiveness, influence, power"] },
            { label: "Sensing (S)", cells: ["Creative problem solving, risk taking, visioning"] },
            { label: "Intuitive (N)", cells: ["Planning, management by objectives, situation diagnosis"] },
            { label: "Thinking (T)", cells: ["Interpersonal relations, empowerment, giving & receiving positive performance feedback"] },
            { label: "Feeling (F)", cells: ["Delegation, power, giving & receiving critical performance feedback"] },
            { label: "Judging (J)", cells: ["Stress management, negotiation strategies, change management"] },
            { label: "Perceiving (P)", cells: ["Time management, decision making, project planning"] },
          ],
        ),
        calloutBlock(
          "note",
          "MBTI — điểm yếu theo sách (R&J Ch.4, p80)",
          "4 vấn đề: (1) ép người vào MỘT type (introvert HOẶC extrovert, không có ở giữa); (2) reliability — làm lại test thường ra kết quả khác; (3) khó diễn giải (facet phức tạp, cần chuyên gia); (4) kết quả có xu hướng KHÔNG liên hệ job performance. → củng cố vì sao MBTI không dùng làm tiêu chí tuyển chọn chính.",
        ),
      ],
      keyTerms: [
        { term: "MBTI", definition: "Myers-Briggs Type Indicator: 4 axes → 16 personality types." },
        { term: "extroverted / introverted (E/I)", definition: "Hướng năng lượng ra ngoài hay vào trong." },
        { term: "sensing / intuitive (S/N)", definition: "Thu nhận thông tin qua sự kiện cụ thể hay qua pattern/ý tưởng." },
        { term: "thinking / feeling (T/F)", definition: "Ra quyết định bằng lý trí/logic hay bằng giá trị/cảm xúc." },
        { term: "judging / perceiving (J/P)", definition: "Sống theo trật tự/kế hoạch hay linh hoạt/tự phát." },
      ],
    },
    {
      id: "s5",
      heading: "Holland RIASEC & Person-Fit",
      blocks: [
        comparisonBlock(
          "Holland RIASEC — personality ↔ nghề",
          ["Type", "Đặc điểm tính cách", "Nghề congruent"],
          [
            { label: "Realistic", cells: ["Shy, genuine, persistent, stable, practical", "Mechanic, assembly-line worker, farmer"] },
            { label: "Investigative", cells: ["Analytical, original, curious, independent", "Biologist, economist, mathematician, news reporter"] },
            { label: "Artistic", cells: ["Imaginative, disorderly, idealistic, emotional", "Painter, musician, writer, interior decorator"] },
            { label: "Social", cells: ["Sociable, friendly, cooperative, understanding", "Social worker, teacher, counselor"] },
            { label: "Enterprising", cells: ["Self-confident, ambitious, energetic, domineering", "Lawyer, real estate agent, small-business manager"] },
            { label: "Conventional", cells: ["Conforming, efficient, practical, inflexible", "Accountant, corporate manager, bank teller"] },
          ],
        ),
        calloutBlock(
          "key",
          "Person-Job Fit vs Person-Organization Fit",
          "Person-Job Fit = độ khớp giữa personality type & occupational environment → quyết định satisfaction & turnover → là điều kiện SƠ BỘ khi tuyển. Person-Organization Fit = người bị thu hút & được chọn bởi tổ chức khớp VALUES của họ. Holland: người làm nghề hợp tính cách → hài lòng hơn, turnover thấp hơn (slide 25-27). Lưu ý (slide 25): dù vậy, managers thường quan tâm FLEXIBILITY của ứng viên hơn khả năng làm một công việc CỤ THỂ — vì yêu cầu công việc thay đổi liên tục.",
        ),
      ],
      keyTerms: [
        { term: "Holland RIASEC", definition: "6 personality types (Realistic, Investigative, Artistic, Social, Enterprising, Conventional) dùng cho career choice." },
        { term: "person-job fit", definition: "Độ khớp giữa personality type và occupational environment → satisfaction, turnover." },
        { term: "person-organization fit", definition: "Người hợp với VALUES của tổ chức → được thu hút & tuyển chọn." },
        { term: "congruent occupation", definition: "Nghề phù hợp với personality type → hài lòng hơn, turnover thấp hơn." },
        { term: "turnover", definition: "Tỷ lệ nhân viên rời tổ chức; giảm khi fit tốt." },
      ],
    },
    {
      id: "s6",
      heading: "Learning styles & phát triển personality",
      blocks: [
        comparisonBlock(
          "Learning styles theo MBTI (The Myers-Briggs Company, myersbriggs.org — Type & Learning; link ở slide 21)",
          ["MBTI preference", "Cách học ưa thích (theo trang gốc)"],
          [
            { label: "Extraversion (E)", cells: ["Thích các hoạt động có nói chuyện với người khác & vận động, tương tác với môi trường"] },
            { label: "Introversion (I)", cells: ["Thích không gian riêng/yên tĩnh để suy ngẫm, xử lý suy nghĩ bên trong"] },
            { label: "Sensing (S)", cells: ["Thích hướng dẫn rõ ràng, chi tiết, cụ thể"] },
            { label: "Intuition (N)", cells: ["Thích một framework để tự làm phần việc sáng tạo, độc đáo của mình"] },
            { label: "Thinking (T)", cells: ["Lớp học tổ chức theo hệ thống logic giúp họ làm tốt hơn"] },
            { label: "Feeling (F)", cells: ["Học tốt nhất ở lớp ấm áp, thân thiện, giáo viên quan tâm nhu cầu cảm xúc"] },
            { label: "Judging (J)", cells: ["Cần kế hoạch rõ ràng & lớp học có tổ chức để làm tốt nhất"] },
            { label: "Perceiving (P)", cells: ["Thích linh hoạt để đi theo sự tò mò, khám phá nhiều mối quan tâm/trải nghiệm"] },
          ],
        ),
        calloutBlock(
          "note",
          "S/N đóng vai trò then chốt trong cách học",
          "Theo The Myers-Briggs Company, cặp Sensing–Intuition có vai trò then chốt trong learning vì nó phản ánh CÁCH ta chú ý tới trải nghiệm & tiếp nhận thông tin đang học (myersbriggs.org — Type & Learning).",
        ),
        comparisonBlock(
          "Learning styles theo Big Five (Keka Varadwaj, 2017)",
          ["Big Five dimension", "Learning style hiệu quả"],
          [
            { label: "Openness", cells: ["Synthesis-analysis, elaborative processing, methodological study"] },
            { label: "Conscientiousness", cells: ["Methodological study, synthesis-analysis, elaborative processing, fact retention"] },
            { label: "Extraversion", cells: ["Elaborative processing"] },
            { label: "Agreeableness", cells: ["Mọi style đều cần khi học nhóm (team)"] },
            { label: "Neuroticism (less)", cells: ["Mọi style đều cần ÍT neuroticism"] },
          ],
        ),
        calloutBlock(
          "note",
          "Personality có phát triển được không",
          "Personality development = Heredity (gene) + Environments (sống/làm) + Experiences + Active learning + Efforts to change. Phần nature khó đổi, nhưng qua trải nghiệm & nỗ lực có ý thức, ta điều chỉnh được cách bộc lộ (slide 20).",
        ),
        calloutBlock(
          "insight",
          "Vì sao cần diversified teams",
          "Vì mỗi personality mạnh/yếu ở việc khác nhau, team nên ĐA DẠNG personality (diversified) chứ không 'cloning' (nhân bản một kiểu người). Hiểu personality người khác giúp giao tiếp & phối hợp tốt hơn — bù trừ điểm yếu cho nhau (slide 28-29).",
        ),
      ],
      keyTerms: [
        { term: "learning style", definition: "Cách một người tiếp thu & xử lý thông tin hiệu quả nhất, liên hệ với personality." },
        { term: "personality development", definition: "Heredity + environment + experiences + active learning + efforts to change." },
        { term: "active learning", definition: "Học chủ động qua trải nghiệm & nỗ lực có ý thức để điều chỉnh cách bộc lộ." },
        { term: "diversified team", definition: "Đội đa dạng personality để bù trừ điểm mạnh/yếu, không 'cloning'." },
        { term: "elaborative processing", definition: "Học bằng cách liên hệ, mở rộng thông tin với hiểu biết sẵn có." },
      ],
    },
    {
      id: "s7",
      heading: "The Dark Triad & trait 'tối' (sách)",
      blocks: [
        comparisonBlock(
          "The Dark Triad — 3 trait socially undesirable (R&J Ch.4, p82-84)",
          ["Trait", "Định nghĩa (sách)", "Liên hệ OB"],
          [
            {
              label: "Machiavellianism",
              cells: [
                "Mức độ một người thực dụng, giữ khoảng cách cảm xúc, tin rằng cứu cánh biện minh phương tiện",
                "Thao túng & thắng nhiều hơn, ít bị thuyết phục; nhiều CWB; KHÔNG dự đoán job performance tổng thể; thắng ngắn hạn, mất dài hạn (không được ưa)",
              ],
            },
            {
              label: "Narcissism",
              cells: [
                "Xu hướng kiêu ngạo, cảm giác vĩ đại về bản thân, cần được ngưỡng mộ quá mức, thấy mình có đặc quyền (entitlement)",
                "Ít liên hệ job effectiveness/OCB; predictor mạnh của CWB (ở văn hóa cá nhân chủ nghĩa); nhưng charismatic hơn, mức VỪA phải tương quan dương với leadership",
              ],
            },
            {
              label: "Psychopathy",
              cells: [
                "Xu hướng thiếu quan tâm người khác & thiếu tội lỗi/hối hận khi hành động gây hại",
                "Dùng hard influence tactics (đe dọa, thao túng), bullying; literature CHƯA nhất quán về tầm quan trọng với job performance",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Dark Triad là gì & 'Other Traits' (p82, 84)",
          "Trừ neuroticism, các Big Five là socially DESIRABLE; Dark Triad = 3 trait socially UNDESIRABLE nhưng ai cũng có ở mức độ khác nhau — KHÔNG phải bệnh lý lâm sàng, bộc lộ mạnh khi stress, kéo dài → derail sự nghiệp. Sách còn nêu 5 'aberrant' trait dựa trên Big Five: antisocial, borderline, schizotypal, obsessive-compulsive, avoidant.",
        ),
      ],
      keyTerms: [
        { term: "Dark Triad", definition: "Chùm 3 trait tiêu cực: Machiavellianism, narcissism, psychopathy (R&J Ch.4, p82)." },
        { term: "Machiavellianism", definition: "Mức độ một người thực dụng, giữ khoảng cách cảm xúc, tin cứu cánh biện minh phương tiện (p83)." },
        { term: "narcissism", definition: "Xu hướng kiêu ngạo, cảm giác vĩ đại về bản thân, cần ngưỡng mộ quá mức, có sense of entitlement (p83)." },
        { term: "psychopathy", definition: "Xu hướng thiếu quan tâm người khác & thiếu tội lỗi/hối hận khi hành động gây hại (p84)." },
      ],
    },
    {
      id: "s8",
      heading: "Personality attributes khác cho OB (sách)",
      blocks: [
        comparisonBlock(
          "3 thuộc tính personality quan trọng cho OB (R&J Ch.4, p85)",
          ["Thuộc tính", "Nội dung (sách)"],
          [
            {
              label: "Core Self-Evaluation (CSE)",
              cells: [
                "Kết luận nền tảng một người có về năng lực, sự thành thạo & giá trị bản thân. CSE dương → thấy mình hiệu quả & làm chủ môi trường; đặt mục tiêu tham vọng hơn, cam kết & kiên trì hơn, performance & customer service tốt hơn. CSE âm → tự ghét, nghi ngờ năng lực, thấy bất lực.",
              ],
            },
            {
              label: "Self-Monitoring",
              cells: [
                "Trait đo khả năng điều chỉnh hành vi theo yếu tố tình huống bên ngoài. High self-monitor: thích ứng cao, nhạy external cues, hành xử khác nhau tùy bối cảnh. Low self-monitor: bộc lộ bản chất thật ở mọi tình huống → nhất quán cao ('I'm true to myself').",
              ],
            },
            {
              label: "Proactive Personality",
              cells: [
                "Người chủ động nhận diện cơ hội, thể hiện initiative, hành động & kiên trì đến khi tạo được thay đổi có ý nghĩa. Job performance cao hơn, cần ít giám sát, dễ đạt career success; team proactive → sáng tạo hơn.",
              ],
            },
          ],
        ),
        calloutBlock(
          "key",
          "So what — kiến thức này đổi hành động của bạn",
          "Personality khó đổi, nhưng nó chỉ bộc lộ tùy tình huống — nên đừng dùng framework để dán nhãn người khác. Hành động: dùng nó để chọn fit (Holland/P-O fit) cho chính mình khi chọn việc; nếu tuyển người, dựa Big Five (conscientiousness dự báo tốt) chứ không dùng MBTI làm công cụ tuyển; với đồng nghiệp \"khó chịu\" — hỏi xem tình huống nào kích hoạt trait đó trước khi kết luận con người họ.",
        ),
      ],
      keyTerms: [
        { term: "core self-evaluation (CSE)", definition: "Kết luận nền tảng về năng lực, sự thành thạo & giá trị bản thân; CSE dương → performance & satisfaction cao hơn (R&J Ch.4, p85)." },
        { term: "self-monitoring", definition: "Trait đo khả năng điều chỉnh hành vi theo yếu tố tình huống bên ngoài; high → thích ứng, low → nhất quán (p85)." },
        { term: "proactive personality", definition: "Người chủ động nhận diện cơ hội, initiative, hành động & kiên trì tới khi có thay đổi có ý nghĩa (p85)." },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "Across projects and teams, Lan consistently prefers careful preparation and quiet interaction, even though her technical skills and daily moods vary. What is her manager primarily describing?",
      options: [
        { id: "a", text: "Her technical skill set, because preparation is a trained job competency", isCorrect: false, rationale: "Cơ chế: stem nói skills thay đổi nhưng pattern chuẩn bị và tương tác vẫn lặp lại. Bẫy: careful preparation có thể được huấn luyện. Khóa: skill là năng lực học được; personality là khuynh hướng react/interact nhất quán." },
        { id: "b", text: "Her personality, because it is her relatively consistent pattern of reacting and interacting", isCorrect: true, rationale: "Cơ chế: pattern xuất hiện qua nhiều project/team và phản ánh cách Lan thoải mái nhất khi react/interact. Bẫy: tưởng personality phải là một nhãn type. Khóa: consistency across situations là dấu hiệu chính." },
        { id: "c", text: "Her current mood, because quiet interaction is a short-lived emotional state", isCorrect: false, rationale: "Cơ chế: mood biến động theo ngày, còn stem nhấn pattern kéo dài qua nhiều bối cảnh. Bẫy: quiet có thể xuất hiện khi mood thấp. Khóa: temporary affect ≠ personality." },
        { id: "d", text: "Her formal role, because project assignments determine how she naturally behaves", isCorrect: false, rationale: "Cơ chế: role đặt kỳ vọng hành vi nhưng không phải khuynh hướng cá nhân ổn định. Bẫy: cùng hành vi xuất hiện trong công việc nên dễ quy cho role. Khóa: role thuộc vị trí; personality thuộc cá nhân." },
        { id: "e", text: "Her intelligence, because preparation directly reveals her IQ level", isCorrect: false, rationale: "Cơ chế: stem không đo reasoning hay cognitive ability. Bẫy: chuẩn bị kỹ thường bị gắn với thông minh. Khóa: IQ không định nghĩa cách react/interact." },
      ],
      difficulty: "basic",
      conceptTested: "Definition of personality",
      takeaway: "Personality là tổng hợp cách một người react & interact — hành vi tự nhiên, nhất quán; không phải kỹ năng, mood, chức danh hay IQ.",
    },
    {
      id: "q02",
      stem: "According to the two determinants of personality, which statement is correct?",
      options: [
        { id: "a", text: "Personality is 100% determined by genes and cannot change at all", isCorrect: false, rationale: "Cơ chế: ngoài heredity còn environment/nurture. Bẫy: tuyệt đối hóa nature. Khóa: nurture cho phép thay đổi phần nào." },
        { id: "b", text: "Personality comes only from the work environment", isCorrect: false, rationale: "Cơ chế: bỏ qua heredity (nature). Bẫy: tuyệt đối hóa nurture. Khóa: personality = nature + nurture." },
        { id: "c", text: "Personality has two determinants — heredity (nature) and environment/situation (nurture) — and the nurture part is the changeable one", isCorrect: true, rationale: "Cơ chế: đúng hai determinants; nurture là phần rèn được. Bẫy: (không có). Khóa: nature khó đổi, nurture đổi được." },
        { id: "d", text: "Both heredity and environment are equally easy to change", isCorrect: false, rationale: "Cơ chế: heredity (gene) khó đổi hơn environment. Bẫy: cào bằng hai nguồn. Khóa: chỉ phần nurture mới linh hoạt." },
        { id: "e", text: "Personality is determined only by the person's current job", isCorrect: false, rationale: "Cơ chế: job không phải determinant của personality. Bẫy: nhầm với person-job fit. Khóa: determinants = heredity + environment." },
      ],
      difficulty: "intermediate",
      conceptTested: "Personality determinants (nature vs nurture)",
      takeaway: "Personality do heredity (nature, khó đổi) + environment/situation (nurture, đổi được) hợp thành.",
    },
    {
      id: "q03",
      stem: "According to Situation Strength Theory, personality traits predict behavior best when...",
      options: [
        { id: "a", text: "the situation is strong, with clear norms and rules", isCorrect: false, rationale: "Cơ chế: strong situation ép hành vi → personality khó bộc lộ. Bẫy: đảo ngược lý thuyết. Khóa: strong situation làm giảm dự đoán từ traits." },
        { id: "b", text: "the situation is weak, where norms do not dictate the 'right' behavior", isCorrect: true, rationale: "Cơ chế: weak situation 'anything goes' → traits tự do bộc lộ. Bẫy: (không có). Khóa: traits dự đoán tốt hơn ở weak situations." },
        { id: "c", text: "the person is under strong external pressure", isCorrect: false, rationale: "Cơ chế: áp lực mạnh = strong situation → che personality. Bẫy: coi pressure làm lộ personality. Khóa: pressure ép work-mask, không phải self-image." },
        { id: "d", text: "everyone in the room behaves identically", isCorrect: false, rationale: "Cơ chế: hành vi đồng nhất = dấu hiệu strong situation. Bẫy: nhầm đồng nhất với bộc lộ cá tính. Khóa: đồng nhất → traits bị che." },
        { id: "e", text: "personality never affects behavior regardless of situation", isCorrect: false, rationale: "Cơ chế: personality CÓ ảnh hưởng, tùy tình huống. Bẫy: phủ nhận vai trò personality. Khóa: mức ảnh hưởng phụ thuộc situation strength." },
      ],
      difficulty: "intermediate",
      conceptTested: "Situation Strength Theory",
      takeaway: "Traits dự đoán behavior tốt hơn ở WEAK situations; strong situations ép hành vi và che personality.",
    },
    {
      id: "q04",
      stem: "What does Trait Activation Theory add to our understanding of personality?",
      options: [
        { id: "a", text: "Every trait shows up equally strongly in all situations", isCorrect: false, rationale: "Cơ chế: trait chỉ mạnh khi được tình huống kích hoạt. Bẫy: coi trait bất biến theo bối cảnh. Khóa: activation phụ thuộc tình huống." },
        { id: "b", text: "Certain situations 'activate' a trait, so personality predicts behavior more strongly when the situation fits the trait", isCorrect: true, rationale: "Cơ chế: đúng nội dung Trait Activation. Bẫy: (không có). Khóa: đúng bối cảnh → personality dự đoán mạnh hơn." },
        { id: "c", text: "Traits are activated only by genetics, never by situations", isCorrect: false, rationale: "Cơ chế: lý thuyết nói tình huống kích hoạt trait. Bẫy: quy về gene. Khóa: activation là hiệu ứng của situation." },
        { id: "d", text: "Trait activation means personality can never predict behavior", isCorrect: false, rationale: "Cơ chế: ngược lại — activation làm dự đoán MẠNH hơn. Bẫy: hiểu sai chiều. Khóa: đúng tình huống → dự đoán tốt hơn." },
        { id: "e", text: "It is exactly the same as Situation Strength Theory with no difference", isCorrect: false, rationale: "Cơ chế: hai lý thuyết bổ sung nhau nhưng khác góc nhìn (kích hoạt trait vs sức mạnh tình huống). Bẫy: đánh đồng. Khóa: activation nhấn 'tình huống hợp trait nào'." },
      ],
      difficulty: "intermediate",
      conceptTested: "Trait Activation Theory",
      takeaway: "Tình huống phù hợp 'kích hoạt' một trait, làm personality dự đoán behavior mạnh hơn.",
    },
    {
      id: "q05",
      stem: "Which set correctly lists the Big Five (OCEAN) dimensions?",
      options: [
        { id: "a", text: "Extroversion, Sensing, Thinking, Judging, Openness", isCorrect: false, rationale: "Cơ chế: trộn MBTI axes vào Big Five. Bẫy: nhầm hai framework. Khóa: Big Five ≠ MBTI." },
        { id: "b", text: "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism", isCorrect: true, rationale: "Cơ chế: đúng OCEAN. Bẫy: (không có). Khóa: 5 dimensions chuẩn của Big Five." },
        { id: "c", text: "Realistic, Investigative, Artistic, Social, Enterprising", isCorrect: false, rationale: "Cơ chế: đây là Holland RIASEC (thiếu Conventional). Bẫy: nhầm với Holland. Khóa: RIASEC là career types, không phải Big Five." },
        { id: "d", text: "Openness, Confidence, Empathy, Ambition, Neuroticism", isCorrect: false, rationale: "Cơ chế: Confidence/Empathy/Ambition không phải dimension Big Five. Bẫy: chế tên gần đúng. Khóa: phải là Conscientiousness, Extraversion, Agreeableness." },
        { id: "e", text: "Introversion, Intuition, Feeling, Perceiving, Conscientiousness", isCorrect: false, rationale: "Cơ chế: chủ yếu là cực MBTI. Bẫy: trộn framework. Khóa: Big Five dùng OCEAN." },
      ],
      difficulty: "intermediate",
      conceptTested: "Big Five (OCEAN) dimensions",
      takeaway: "Big Five = Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism (OCEAN).",
    },
    {
      id: "q06",
      stem: "A manager needs someone disciplined, organized, and consistently high-performing. Which Big Five trait best predicts this?",
      options: [
        { id: "a", text: "Extraversion", isCorrect: false, rationale: "Cơ chế: extraversion liên quan hòa đồng/hạnh phúc, không trực tiếp performance. Bẫy: coi hướng ngoại = làm giỏi. Khóa: performance gắn conscientiousness." },
        { id: "b", text: "Openness", isCorrect: false, rationale: "Cơ chế: openness → sáng tạo/leadership, không phải kỷ luật. Bẫy: nhầm sáng tạo với đáng tin. Khóa: kỷ luật = conscientiousness." },
        { id: "c", text: "Agreeableness", isCorrect: false, rationale: "Cơ chế: agreeableness → hợp tác xã hội, không phải performance. Bẫy: coi dễ chịu = năng suất. Khóa: performance = conscientiousness." },
        { id: "d", text: "Conscientiousness", isCorrect: true, rationale: "Cơ chế: conscientious → job knowledge, effort, performance cao (slide 24). Bẫy: (không có). Khóa: dimension dự đoán performance mạnh nhất." },
        { id: "e", text: "Neuroticism", isCorrect: false, rationale: "Cơ chế: neuroticism cao → bất ổn cảm xúc, hại performance. Bẫy: chọn ngược. Khóa: emotional stability (thấp neuroticism) mới tốt." },
      ],
      difficulty: "advanced",
      conceptTested: "Big Five implications (conscientiousness → performance)",
      takeaway: "Conscientiousness dự đoán mạnh nhất về job knowledge, nỗ lực và performance.",
    },
    {
      id: "q07",
      stem: "Which are the four axes of the MBTI?",
      options: [
        { id: "a", text: "Extroverted/Introverted, Sensing/Intuitive, Thinking/Feeling, Judging/Perceiving", isCorrect: true, rationale: "Cơ chế: đúng 4 axes → 16 types. Bẫy: (không có). Khóa: E/I, S/N, T/F, J/P." },
        { id: "b", text: "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism", isCorrect: false, rationale: "Cơ chế: đây là Big Five. Bẫy: nhầm framework. Khóa: MBTI có 4 axes, không phải 5 dimensions." },
        { id: "c", text: "Realistic, Investigative, Artistic, Social, Enterprising, Conventional", isCorrect: false, rationale: "Cơ chế: đây là Holland RIASEC. Bẫy: nhầm với career types. Khóa: MBTI ≠ Holland." },
        { id: "d", text: "E/I, S/N, T/F, J/P, plus a fifth stability axis", isCorrect: false, rationale: "Cơ chế: MBTI chỉ có 4 axes. Bẫy: thêm trục thứ 5 (giống Big Five). Khóa: đúng 4 axes → 16 types." },
        { id: "e", text: "Strong/Weak and Conscious/Unconscious", isCorrect: false, rationale: "Cơ chế: đây là situation strength & Jung, không phải MBTI. Bẫy: trộn khái niệm. Khóa: MBTI = E/I, S/N, T/F, J/P." },
      ],
      difficulty: "intermediate",
      conceptTested: "MBTI four axes",
      takeaway: "MBTI có 4 axes (E/I, S/N, T/F, J/P) tạo thành 16 personality types.",
    },
    {
      id: "q08",
      stem: "What is the correct managerial use of the MBTI?",
      options: [
        { id: "a", text: "It should be the main criterion for selecting job candidates", isCorrect: false, rationale: "Cơ chế: slide nói KHÔNG dùng MBTI làm tiêu chí tuyển chọn chính. Bẫy: lạm dụng MBTI tuyển dụng. Khóa: MBTI cho self-awareness, không cho selection." },
        { id: "b", text: "It is a good tool for self-awareness and counseling, but should not be the key selection criterion", isCorrect: true, rationale: "Cơ chế: đúng khuyến nghị Robbins & Judge. Bẫy: (không có). Khóa: self-awareness ✓, selection ✗." },
        { id: "c", text: "It precisely measures intelligence and predicts performance", isCorrect: false, rationale: "Cơ chế: MBTI không đo IQ/performance. Bẫy: gán quá nhiều cho MBTI. Khóa: MBTI đo preference, không đo năng lực." },
        { id: "d", text: "Its results are fixed and can never change", isCorrect: false, rationale: "Cơ chế: kết quả có thể đổi theo thời gian/bối cảnh. Bẫy: tuyệt đối hóa. Khóa: MBTI là preference, không cố định tuyệt đối." },
        { id: "e", text: "It replaces the Big Five because it is more scientific", isCorrect: false, rationale: "Cơ chế: Big Five khoa học hơn MBTI. Bẫy: đảo ngược. Khóa: khi cần bằng chứng, OB ưu tiên Big Five." },
      ],
      difficulty: "intermediate",
      conceptTested: "MBTI proper use",
      takeaway: "MBTI tốt cho self-awareness & counseling, nhưng KHÔNG dùng làm tiêu chí tuyển chọn chính.",
    },
    {
      id: "q09",
      stem: "According to Holland's theory and Person-Job Fit, congruence between personality and occupation...",
      options: [
        { id: "a", text: "raises job satisfaction and lowers turnover", isCorrect: true, rationale: "Cơ chế: người làm nghề hợp tính cách → hài lòng hơn, ít nghỉ việc. Bẫy: (không có). Khóa: fit → satisfaction ↑, turnover ↓." },
        { id: "b", text: "has no effect on turnover", isCorrect: false, rationale: "Cơ chế: fit ảnh hưởng trực tiếp turnover. Bẫy: phủ nhận liên hệ. Khóa: fit tốt giảm turnover." },
        { id: "c", text: "means RIASEC is another name for the Big Five", isCorrect: false, rationale: "Cơ chế: RIASEC (career types) khác Big Five. Bẫy: nhầm framework. Khóa: Holland ≠ Big Five." },
        { id: "d", text: "makes people most satisfied in jobs that conflict with their personality", isCorrect: false, rationale: "Cơ chế: conflict = kém fit → kém hài lòng. Bẫy: đảo ngược. Khóa: satisfaction đến từ congruence." },
        { id: "e", text: "is about group dynamics rather than careers", isCorrect: false, rationale: "Cơ chế: Holland về career choice, không phải group dynamics. Bẫy: lệch chủ đề. Khóa: RIASEC = person-job/career." },
      ],
      difficulty: "intermediate",
      conceptTested: "Holland RIASEC / Person-Job Fit",
      takeaway: "Fit giữa personality type và nghề → satisfaction cao hơn, turnover thấp hơn.",
    },
    {
      id: "q10",
      stem: "An applicant is drawn to a company mainly because its VALUES match hers. This best illustrates...",
      options: [
        { id: "a", text: "Person-Job Fit", isCorrect: false, rationale: "Cơ chế: person-job fit là khớp với CÔNG VIỆC, không phải values tổ chức. Bẫy: nhầm hai loại fit. Khóa: values → person-organization." },
        { id: "b", text: "Person-Organization Fit", isCorrect: true, rationale: "Cơ chế: hợp VALUES của tổ chức = person-organization fit. Bẫy: (không có). Khóa: values ↔ organization fit." },
        { id: "c", text: "Situation strength", isCorrect: false, rationale: "Cơ chế: situation strength về norms ép hành vi, không về values tuyển dụng. Bẫy: lệch khái niệm. Khóa: đây là vấn đề fit." },
        { id: "d", text: "Trait activation", isCorrect: false, rationale: "Cơ chế: trait activation về tình huống kích hoạt trait. Bẫy: lệch khái niệm. Khóa: values fit ≠ activation." },
        { id: "e", text: "Learning style fit", isCorrect: false, rationale: "Cơ chế: learning style về cách học, không về values tổ chức. Bẫy: lệch khái niệm. Khóa: values → organization fit." },
      ],
      difficulty: "advanced",
      conceptTested: "Person-Job vs Person-Organization Fit",
      takeaway: "Hợp VALUES tổ chức = Person-Organization Fit; hợp yêu cầu công việc = Person-Job Fit.",
    },
    {
      id: "q11",
      stem: "Why does OB recommend 'diversified' rather than 'cloning' teams?",
      options: [
        { id: "a", text: "Teams work best when everyone has the same personality", isCorrect: false, rationale: "Cơ chế: đồng nhất personality = cloning → thiếu bù trừ. Bẫy: coi đồng nhất là hòa hợp. Khóa: đa dạng mới bù điểm yếu." },
        { id: "b", text: "Personality diversity should be avoided to reduce conflict", isCorrect: false, rationale: "Cơ chế: né đa dạng làm mất synergy. Bẫy: sợ conflict nên cloning. Khóa: quản đa dạng tốt → sáng tạo/synergy." },
        { id: "c", text: "Different personalities offset each other's weaknesses, creating stronger teams", isCorrect: true, rationale: "Cơ chế: mỗi personality mạnh/yếu ở việc khác → bù trừ. Bẫy: (không có). Khóa: diversified team = bù điểm yếu cho nhau." },
        { id: "d", text: "Personality diversity has no effect on team performance", isCorrect: false, rationale: "Cơ chế: diversity ảnh hưởng rõ tới synergy/performance. Bẫy: phủ nhận. Khóa: đa dạng có giá trị nếu hiểu & phối hợp." },
        { id: "e", text: "Only extroverts should be placed on teams", isCorrect: false, rationale: "Cơ chế: chọn một kiểu = cloning, mất đa dạng. Bẫy: thiên vị một trait. Khóa: cần đủ loại personality." },
      ],
      difficulty: "intermediate",
      conceptTested: "Diversified vs cloning teams",
      takeaway: "Team nên đa dạng personality để bù trừ điểm yếu, không nhân bản một kiểu người.",
    },
    {
      id: "q12",
      stem: "An employee is pragmatic, keeps emotional distance, and believes the ends justify the means. Which Dark Triad trait is this?",
      options: [
        { id: "a", text: "Narcissism", isCorrect: false, rationale: "Cơ chế: narcissism là kiêu ngạo, cần ngưỡng mộ, sense of entitlement. Bẫy: thấy trait tối rồi chọn nhầm. Khóa: 'ends justify the means' là dấu hiệu Machiavellianism." },
        { id: "b", text: "Psychopathy", isCorrect: false, rationale: "Cơ chế: psychopathy nhấn thiếu quan tâm/tội lỗi khi gây hại. Bẫy: nhầm mọi thao túng với psychopathy. Khóa: pragmatic + emotional distance + ends/means = Machiavellianism." },
        { id: "c", text: "Machiavellianism", isCorrect: true, rationale: "Cơ chế: Machiavellianism = thực dụng, giữ khoảng cách cảm xúc, tin cứu cánh biện minh phương tiện. Bẫy: nhầm với narcissism vì đều thuộc Dark Triad. Khóa: câu stem mô tả đúng định nghĩa Machiavellianism." },
        { id: "d", text: "Conscientiousness", isCorrect: false, rationale: "Cơ chế: conscientiousness là kỷ luật, tổ chức, đáng tin trong Big Five. Bẫy: thấy pragmatic rồi tưởng làm việc hiệu quả. Khóa: conscientiousness là desirable trait, không thuộc Dark Triad." },
        { id: "e", text: "Self-monitoring", isCorrect: false, rationale: "Cơ chế: self-monitoring là khả năng điều chỉnh hành vi theo cues bên ngoài. Bẫy: nhầm giữ khoảng cách cảm xúc với thích ứng bối cảnh. Khóa: self-monitoring không hàm ý ends justify the means." },
      ],
      difficulty: "intermediate",
      conceptTested: "Machiavellianism",
      takeaway: "Machiavellianism nhận diện bằng tính thực dụng, emotional distance và niềm tin cứu cánh biện minh phương tiện.",
    },
    {
      id: "q13",
      stem: "Which set correctly lists the Dark Triad?",
      options: [
        { id: "a", text: "Openness, conscientiousness, extraversion", isCorrect: false, rationale: "Cơ chế: đây là một phần Big Five, không phải Dark Triad. Bẫy: nhớ nhầm framework. Khóa: Dark Triad chỉ gồm 3 trait tiêu cực." },
        { id: "b", text: "Realistic, investigative, artistic", isCorrect: false, rationale: "Cơ chế: đây là Holland RIASEC career types. Bẫy: thấy cũng là danh sách personality/career rồi chọn. Khóa: RIASEC không phải Dark Triad." },
        { id: "c", text: "Core self-evaluation, self-monitoring, proactive personality", isCorrect: false, rationale: "Cơ chế: đây là 3 personality attributes khác trong OB, không phải Dark Triad. Bẫy: chọn đúng số lượng 3 nhưng sai nhóm. Khóa: Dark Triad = Machiavellianism/narcissism/psychopathy." },
        { id: "d", text: "Machiavellianism, narcissism, psychopathy", isCorrect: true, rationale: "Cơ chế: đây là đúng chùm Dark Triad trong R&J Ch.4. Bẫy: trộn với Big Five hoặc CSE. Khóa: nhớ bộ ba trait socially undesirable." },
        { id: "e", text: "Clarity, consistency, constraints", isCorrect: false, rationale: "Cơ chế: đây là components của situation strength, thiếu consequences. Bẫy: nhầm 3 chữ C với Dark Triad. Khóa: situation strength là bối cảnh, không phải trait." },
      ],
      difficulty: "intermediate",
      conceptTested: "Dark Triad members",
      takeaway: "Dark Triad gồm Machiavellianism, narcissism và psychopathy; đừng trộn với Big Five, RIASEC hay CSE.",
    },
    {
      id: "q14",
      stem: "After losing a client pitch, Minh says, 'I still believe I am capable, competent, and worthy, and I can improve next time.' Which construct does this statement most directly reflect?",
      options: [
        { id: "a", text: "Self-monitoring", isCorrect: false, rationale: "Cơ chế: Minh đang đánh giá năng lực và worth, không mô tả việc đổi hành vi theo social cues. Bẫy: cả hai construct đều có chữ self. Khóa: adapting presentation = self-monitoring; bottom-line self-view = CSE." },
        { id: "b", text: "Core self-evaluation (CSE)", isCorrect: true, rationale: "Cơ chế: câu nói trực tiếp thể hiện kết luận nền tảng về capability, competence và worth sau thất bại. Bẫy: tự tin sau setback có thể bị đọc thành optimism chung. Khóa: bộ ba capable–competent–worthy chỉ CSE." },
        { id: "c", text: "Proactive personality", isCorrect: false, rationale: "Cơ chế: proactive personality cần hành vi nhận diện cơ hội và tạo thay đổi; stem mới chỉ cho self-view. Bẫy: 'improve next time' nghe chủ động. Khóa: intention cải thiện không đủ thay cho initiative thực tế." },
        { id: "d", text: "Narcissism", isCorrect: false, rationale: "Cơ chế: Minh không thể hiện entitlement hay nhu cầu được ngưỡng mộ. Bẫy: positive self-view dễ bị quy thành narcissism. Khóa: CSE tích cực không đồng nghĩa cái tôi phóng đại." },
        { id: "e", text: "Emotional stability", isCorrect: false, rationale: "Cơ chế: bình tĩnh sau thất bại có thể gợi emotional stability, nhưng lời nói tập trung vào competence/worth. Bẫy: resilience và CSE thường đi cùng nhau. Khóa: nội dung tự đánh giá quyết định construct." },
      ],
      difficulty: "intermediate",
      conceptTested: "Core Self-Evaluation",
      takeaway: "Core Self-Evaluation là kết luận nền tảng một người giữ về năng lực, competence và giá trị bản thân.",
    },
    {
      id: "q15",
      stem: "Zoe says, \"I'm true to myself, I don't remake myself to please others.\" She is best described as...",
      options: [
        { id: "a", text: "a high self-monitor", isCorrect: false, rationale: "Cơ chế: high self-monitor điều chỉnh hành vi mạnh theo cues bên ngoài. Bẫy: thấy social awareness rồi chọn high. Khóa: stem nói không remake self để làm vừa lòng người khác." },
        { id: "b", text: "high Machiavellian", isCorrect: false, rationale: "Cơ chế: high Machiavellian thao túng và giữ emotional distance vì mục tiêu. Bẫy: nhầm độc lập với thực dụng thao túng. Khóa: câu này là self-monitoring, không phải Dark Triad." },
        { id: "c", text: "proactive", isCorrect: false, rationale: "Cơ chế: proactive là chủ động tạo thay đổi có ý nghĩa. Bẫy: thấy mạnh mẽ/tự tin rồi chọn proactive. Khóa: stem nhấn consistency của hành vi, không nhấn initiative." },
        { id: "d", text: "high in core self-evaluation", isCorrect: false, rationale: "Cơ chế: CSE nói về đánh giá năng lực và worth bản thân. Bẫy: 'true to myself' nghe như self-worth. Khóa: đặc điểm không remake theo người khác là low self-monitor." },
        { id: "e", text: "a low self-monitor with high behavioral consistency", isCorrect: true, rationale: "Cơ chế: low self-monitor bộc lộ bản chất thật ở nhiều tình huống, behavioral consistency cao. Bẫy: tưởng thích ứng thấp là điểm yếu chung. Khóa: R&J mô tả low self-monitor là 'I'm true to myself'." },
      ],
      difficulty: "advanced",
      conceptTested: "Self-monitoring high vs low",
      takeaway: "High self-monitor thích ứng theo bối cảnh; low self-monitor nhất quán và ít remake bản thân để làm vừa lòng người khác.",
    },
    {
      id: "q16",
      stem: "Which is NOT one of the four components of situation strength?",
      options: [
        { id: "a", text: "Congruence", isCorrect: true, rationale: "Cơ chế: congruence là ý fit/congruent trong Holland/Person-Job Fit, không thuộc 4 components của situation strength. Bẫy: nghe giống consistency. Khóa: components đúng là clarity, consistency, constraints, consequences." },
        { id: "b", text: "Clarity", isCorrect: false, rationale: "Cơ chế: clarity là một component thật: cues về nhiệm vụ/trách nhiệm rõ ràng. Bẫy: câu hỏi hỏi NOT. Khóa: đừng chọn thành phần đúng." },
        { id: "c", text: "Consistency", isCorrect: false, rationale: "Cơ chế: consistency là component thật: cues tương thích, cùng chỉ về một behavior. Bẫy: thấy giống congruence rồi loại nhầm. Khóa: consistency thuộc situation strength." },
        { id: "d", text: "Constraints", isCorrect: false, rationale: "Cơ chế: constraints là component thật: tự do quyết định bị giới hạn bởi lực bên ngoài. Bẫy: câu phủ định dễ chọn nhầm. Khóa: constraints nằm trong bộ 4 C." },
        { id: "e", text: "Consequences", isCorrect: false, rationale: "Cơ chế: consequences là component thật: hành động có hệ quả quan trọng. Bẫy: nghĩ consequence là outcome riêng của OB Model. Khóa: trong situation strength, consequences vẫn là một component." },
      ],
      difficulty: "intermediate",
      conceptTested: "Components of situation strength",
      takeaway: "Situation strength có 4 components: clarity, consistency, constraints, consequences; congruence thuộc fit/Holland context.",
    },
  ],
  status: "ready",
  source:
    "Organizational Behavior (IM2017, Dr Truong Thi Lan Anh) — slide 'OB-Topic 1 - Personality and Learning styles' + Reading 'Chapter 4 - Personality Factors' (Robbins & Judge). Định nghĩa & frameworks (Robbins & Judge 2019); Situation Strength & Trait Activation Theory; Big Five (OCEAN); MBTI; Holland RIASEC; Jung reaction mode (adapted 1920). Bổ sung từ Reading Ch.4 (R&J Personality Factors, p77-94): assessing personality, MBTI weaknesses, Big Five at work, Dark Triad, CSE/Self-Monitoring/Proactive, components of situation strength.",
};

const topic02: Chapter = {
  slug: "topic-02",
  order: 2,
  title: "Topic 02 — Perception & Common Biases",
  bigIdea:
    "Perception = quá trình ta tổ chức & diễn giải ấn tượng giác quan để gán nghĩa cho môi trường — 'ta không thấy thực tại; ta diễn giải rồi gọi đó là thực tại'; hành vi VÀ quyết định của ta dựa trên perception (đã bị shortcut/bias làm méo) chứ không dựa trên reality. Hiểu chuỗi perception → attribution → bias → decision để phán đoán, quyết định & đối xử công bằng hơn.",
  bigIdeaPillars: [
    {
      label: "Perception ≠ reality",
      body: "Tổ chức & diễn giải sensory impressions để gán nghĩa. 'The world as it is perceived is the world that is behaviorally important' (R&J p96 = slide 14, 44).",
    },
    {
      label: "Vì sao méo",
      body: "Distortion nằm ở perceiver / target / situation; ta quy nhân internal↔external (Attribution Theory Kelley 1967 + distinctiveness/consensus/consistency). Sai lệch: FAE, self-serving, projection, blind-spot.",
    },
    {
      label: "Shortcut → bias",
      body: "Selective perception, stereotype, halo, contrast, similar-to-me, recency/primacy + common biases (overconfidence, anchoring, confirmation, availability, escalation, hindsight...). Nhanh nhưng méo.",
    },
    {
      label: "Từ perception đến decision",
      body: "Perception+bias làm méo quyết định: rational model (lý tưởng) vs bounded rationality & intuition (thực tế) + individual/org constraints; 3 ethical criteria; creativity 3-stage. Bias vô thức hại hơn phân biệt công khai (Nordell 2022).",
    },
  ],
  learningObjectives: [
    "Định nghĩa perception (organize & interpret sensory impressions) và giải thích 'behavior dựa trên perception, không dựa trên reality'.",
    "Nêu 3 nhóm factors ảnh hưởng/gây méo perception: perceiver, target, situation.",
    "Mô tả perceptual process (observation → selection → organization → interpretation → response) và 3 nguyên lý Gestalt (figure-ground, proximity, common fate).",
    "Giải thích Attribution Theory (Kelley) và cách distinctiveness/consensus/consistency quyết định quy nhân internal vs external.",
    "Nhận diện các attribution/person-perception errors: FAE, self-serving bias, projection, blind-spot.",
    "Nhận diện các shortcuts trong judging others: selective perception, halo, contrast, stereotype, similar-to-me, recency, primacy.",
    "Giải thích link perception → decision making; so sánh rational model (6 bước) với bounded rationality (satisficing) & intuition.",
    "Nhận diện common biases & errors in decision making: overconfidence, anchoring, confirmation, availability, escalation of commitment, randomness, risk aversion, hindsight.",
    "Nêu individual differences (personality, gender, GMA, culture) + organizational constraints ảnh hưởng quyết định.",
    "Nêu 3 ethical decision criteria (utilitarianism, rights, justice) và three-stage model of creativity; giải thích vì sao unconscious bias hại hơn explicit discrimination.",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "Perception: (A) bản chất & factors, (B) attribution, (C) shortcut & bias, (D) từ perception đến decision, (E) ethics & creativity. Bấm node để mở.",
    nodes: [
      {
        id: "perc",
        label: "Perception",
        group: "concept",
        sectionId: "s1",
        detail:
          "Tổ chức & diễn giải sensory impressions; behavior dựa trên perception, không trên reality.",
      },
      {
        id: "g_basic",
        label: "A. Bản chất & factors",
        group: "concept",
        parent: "perc",
        sectionId: "s1",
        detail:
          "Định nghĩa perception, factors gây méo, perceptual process và nguyên lý Gestalt.",
      },
      {
        id: "g_attr",
        label: "B. Attribution",
        group: "concept",
        parent: "perc",
        sectionId: "s4",
        detail:
          "Cách ta giải thích hành vi là do internal causes hay external causes.",
      },
      {
        id: "g_short",
        label: "C. Shortcut & bias",
        group: "concept",
        parent: "perc",
        sectionId: "s6",
        detail:
          "Các shortcut giúp phán đoán nhanh nhưng có thể tạo distortion đáng kể.",
      },
      {
        id: "g_dec",
        label: "D. Perception → Decision",
        group: "concept",
        parent: "perc",
        sectionId: "s7",
        detail:
          "Perception ảnh hưởng cách ta nhận ra problem, chọn criteria và ra quyết định.",
      },
      {
        id: "g_eth",
        label: "E. Ethics & creativity",
        group: "concept",
        parent: "perc",
        sectionId: "s10",
        detail:
          "Ethical criteria, behavioral ethics, creativity và ứng dụng bias trong tổ chức.",
      },
      {
        id: "t_def",
        label: "Định nghĩa & why",
        group: "term",
        parent: "g_basic",
        sectionId: "s1",
        detail:
          "Perception là quá trình organize and interpret sensory impressions to give meaning.",
      },
      {
        id: "t_fac",
        label: "Factors + Gestalt + process",
        group: "term",
        parent: "g_basic",
        sectionId: "s2",
        detail:
          "Perceiver, target, situation; observation → selection → organization → interpretation → response.",
      },
      {
        id: "t_attr",
        label: "Attribution theory (3 factors)",
        group: "term",
        parent: "g_attr",
        sectionId: "s4",
        detail:
          "Distinctiveness, consensus và consistency định hướng internal/external attribution.",
      },
      {
        id: "t_err",
        label: "Attribution errors",
        group: "term",
        parent: "g_attr",
        sectionId: "s5",
        detail:
          "FAE, self-serving bias, projection và blind-spot bias làm méo person perception.",
      },
      {
        id: "t_short",
        label: "Shortcuts judging others",
        group: "term",
        parent: "g_short",
        sectionId: "s6",
        detail:
          "Selective perception, halo, contrast, stereotyping, similar-to-me, recency, primacy.",
      },
      {
        id: "t_rat",
        label: "Rational / bounded / intuition",
        group: "term",
        parent: "g_dec",
        sectionId: "s7",
        detail:
          "Rational model là chuẩn lý tưởng; bounded rationality và intuition mô tả thực tế hơn.",
      },
      {
        id: "t_dbias",
        label: "Biases in decision making",
        group: "term",
        parent: "g_dec",
        sectionId: "s8",
        detail:
          "Overconfidence, anchoring, confirmation, availability, escalation, randomness, risk aversion, hindsight.",
      },
      {
        id: "t_infl",
        label: "Individual & org influences",
        group: "term",
        parent: "g_dec",
        sectionId: "s9",
        detail:
          "Personality, gender, GMA, culture và organizational constraints ảnh hưởng quyết định.",
      },
      {
        id: "t_eth",
        label: "3 ethical criteria",
        group: "term",
        parent: "g_eth",
        sectionId: "s10",
        detail:
          "Utilitarianism, rights và justice là 3 criteria phổ biến khi đánh giá decision ethics.",
      },
      {
        id: "t_cre",
        label: "Creativity 3-stage",
        group: "term",
        parent: "g_eth",
        sectionId: "s11",
        detail:
          "Creative potential + creative environment → creative behavior → creative outcomes/innovation.",
      },
    ],
    edges: [
      { from: "perc", to: "g_basic", label: "nền" },
      { from: "perc", to: "g_attr", label: "quy nhân" },
      { from: "perc", to: "g_short", label: "méo" },
      { from: "perc", to: "g_dec", label: "ra quyết định" },
      { from: "perc", to: "g_eth", label: "áp dụng" },
      { from: "g_basic", to: "t_def", label: "define" },
      { from: "g_basic", to: "t_fac", label: "factors" },
      { from: "g_attr", to: "t_attr", label: "3 cues" },
      { from: "g_attr", to: "t_err", label: "errors" },
      { from: "g_short", to: "t_short", label: "shortcuts" },
      { from: "g_dec", to: "t_rat", label: "models" },
      { from: "g_dec", to: "t_dbias", label: "biases" },
      { from: "g_dec", to: "t_infl", label: "constraints" },
      { from: "g_eth", to: "t_eth", label: "ethics" },
      { from: "g_eth", to: "t_cre", label: "creativity" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "Perception là gì & vì sao quan trọng",
      blocks: [
        calloutBlock(
          "key",
          "Định nghĩa perception",
          "A process by which individuals organize and interpret their sensory impressions in order to give meaning to their environment (R&J 2019, p95; slide 14). What we perceive can be substantially different from objective reality.",
        ),
        calloutBlock(
          "insight",
          "Perception ≠ reality — luận điểm trung tâm",
          "People's behavior is based on their perception of what reality is, not on reality itself. The world as it is perceived is the world that is behaviorally important; our perception becomes the reality from which we act. Vì vậy cùng một sự kiện, các cá nhân khác nhau có thể 'see' khác nhau và hành động khác nhau.",
        ),
      ],
      keyTerms: [
        {
          term: "perception",
          definition:
            "Process by which individuals organize and interpret sensory impressions to give meaning to their environment.",
        },
      ],
    },
    {
      id: "s2",
      heading: "Factors gây méo + Gestalt + perceptual process",
      blocks: [
        comparisonBlock(
          "3 nhóm factors ảnh hưởng perception (R&J p96-97; slide 15)",
          ["Nhóm", "Nội dung", "Ví dụ"],
          [
            {
              label: "Perceiver",
              cells: [
                "Attitudes, personality, motives, interests, past experiences, expectations — we see what we want to see because it conforms to our thinking.",
                "Supervisor đi sớm có thể coi người đi sớm là high performer.",
              ],
            },
            {
              label: "Target",
              cells: [
                "Đặc điểm của đối tượng; target không được nhìn tách rời khỏi background; các thứ gần/giống nhau dễ bị nhóm gộp.",
                "Người có surface characteristics giống nhau bị gộp vào cùng nhóm.",
              ],
            },
            {
              label: "Situation/Context",
              cells: [
                "Thời điểm, địa điểm, ánh sáng, nhiệt và các yếu tố tình huống làm thay đổi interpretation.",
                "Cùng một người dressed up: thấy ở club tối thứ 7 khác với trong lớp sáng thứ 2.",
              ],
            },
          ],
        ),
        flowBlock(
          "s2",
          "Perceptual process (slide 17)",
          "horizontal",
          [
            {
              id: "s2_observation",
              label: "Observations",
              group: "concept",
              detail:
                "Sensory data ban đầu đi vào nhận thức: ta nhìn, nghe hoặc cảm thấy một cue trong môi trường.",
            },
            {
              id: "s2_selection",
              label: "Selection",
              group: "concept",
              detail:
                "Ta chọn một phần thông tin để chú ý, thường chịu ảnh hưởng bởi interest, expectation và experience.",
            },
            {
              id: "s2_organization",
              label: "Organization",
              group: "concept",
              detail:
                "Thông tin được nhóm lại thành pattern; Gestalt principles thường chi phối bước này.",
            },
            {
              id: "s2_interpretation",
              label: "Interpretation",
              group: "concept",
              detail:
                "Ta gán nghĩa cho pattern đã tổ chức, rồi coi đó là reality để hành động.",
            },
            {
              id: "s2_response",
              label: "Response",
              group: "concept",
              detail:
                "Hành vi hoặc quyết định phát sinh từ perception đã được diễn giải.",
            },
          ],
          [
            { from: "s2_observation", to: "s2_selection", label: "chọn" },
            { from: "s2_selection", to: "s2_organization", label: "nhóm" },
            { from: "s2_organization", to: "s2_interpretation", label: "nghĩa" },
            { from: "s2_interpretation", to: "s2_response", label: "hành động" },
          ],
          "Shortcut chèn vào giữa quá trình này → bias & errors.",
        ),
        comparisonBlock(
          "3 nguyên lý Gestalt về visual perception (slide 19)",
          ["Nguyên lý", "Nội dung + ví dụ"],
          [
            {
              label: "Figure-Ground",
              cells: [
                "Tổ chức perception bằng cách tách figure khỏi background; không đánh giá người hoàn toàn tách biệt khỏi bối cảnh. Ví dụ: contrast effect.",
              ],
            },
            {
              label: "Proximity",
              cells: [
                "Các phần tử gần/chung nhau bị nhóm lại. Ví dụ: stereotype khi nhiều người gần nhau bị xem như cùng một nhóm.",
              ],
            },
            {
              label: "Common Fate",
              cells: [
                "Vật/người di chuyển hoặc thay đổi cùng hướng dễ bị xem là giống nhau và liên quan. Ví dụ: recency effect trong chuỗi thông tin.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "perceiver",
          definition:
            "Người quan sát; attitudes, motives, interests, experiences và expectations của họ làm shape perception.",
        },
        {
          term: "target",
          definition:
            "Đối tượng được quan sát; đặc điểm của target và quan hệ với background ảnh hưởng perception.",
        },
        {
          term: "situation",
          definition:
            "Context của perception như time, location, light, heat và social setting.",
        },
        {
          term: "Gestalt principles",
          definition:
            "Những nguyên lý tổ chức perception như figure-ground, proximity và common fate.",
        },
      ],
    },
    {
      id: "s4",
      heading: "Attribution: quy nhân internal vs external",
      blocks: [
        calloutBlock(
          "key",
          "Attribution Theory (Kelley, 1967)",
          "Attribution theory là attempt to determine whether an individual's behavior is internally or externally caused. Internally caused = under personal control; externally caused = situation forced. Ví dụ: đi trễ vì thức khuya là internal, đi trễ vì kẹt xe là external.",
        ),
        comparisonBlock(
          "3 yếu tố xác định internal/external (R&J p97-98, Exhibit 5-1)",
          ["Yếu tố", "Câu hỏi", "Kết luận"],
          [
            {
              label: "Distinctiveness",
              cells: [
                "Behavior này có khác ở tình huống khác không, tức có bất thường không?",
                "Cao (bất thường) → external; thấp → internal.",
              ],
            },
            {
              label: "Consensus",
              cells: [
                "Người khác trong cùng tình huống có phản ứng giống không?",
                "Cao (ai cũng vậy) → external; thấp → internal.",
              ],
            },
            {
              label: "Consistency",
              cells: [
                "Người này có phản ứng nhất quán theo thời gian không?",
                "Cao → internal; thấp → external.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "attribution theory",
          definition:
            "Attempt to determine whether an individual's behavior is internally or externally caused.",
        },
        {
          term: "internal causation",
          definition:
            "Attribution cho rằng behavior nằm dưới personal control của cá nhân.",
        },
        {
          term: "external causation",
          definition:
            "Attribution cho rằng behavior bị tình huống bên ngoài forced hoặc constrained.",
        },
        {
          term: "distinctiveness",
          definition:
            "Cue hỏi behavior có khác trong tình huống khác không; cao thường gợi external cause.",
        },
        {
          term: "consensus",
          definition:
            "Cue hỏi người khác trong cùng tình huống có phản ứng giống không; cao thường gợi external cause.",
        },
        {
          term: "consistency",
          definition:
            "Cue hỏi cùng người có phản ứng như vậy lặp lại theo thời gian không; cao thường gợi internal cause.",
        },
      ],
    },
    {
      id: "s5",
      heading: "Attribution errors & person-perception biases",
      blocks: [
        comparisonBlock(
          "4 sai lệch quy nhân (slide 25-28; R&J p98)",
          ["Sai lệch", "Nội dung"],
          [
            {
              label: "Fundamental Attribution Error (FAE)",
              cells: [
                "Underestimate external, overestimate internal khi phán đoán người khác: đổ lỗi cá nhân trước, chưa xét đủ tình huống.",
              ],
            },
            {
              label: "Self-serving bias",
              cells: [
                "Quy thành công của mình cho internal, đổ thất bại cho external: success is mine, failure is someone else's.",
              ],
            },
            {
              label: "Projection",
              cells: [
                "Gán đặc điểm, sở thích hoặc giả định của mình cho người khác: mình thích thì nghĩ người khác cũng thích.",
              ],
            },
            {
              label: "Blind-spot bias",
              cells: [
                "Thấy bias của người khác nhưng không thấy bias của mình: người khác cần đổi, còn mình thì 'khách quan'.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "fundamental attribution error",
          definition:
            "Tendency to underestimate external factors and overestimate internal factors when judging others.",
        },
        {
          term: "self-serving bias",
          definition:
            "Tendency to attribute one's success to internal factors and failure to external factors.",
        },
        {
          term: "projection",
          definition:
            "Gán đặc điểm, sở thích hoặc giả định của bản thân cho người khác.",
        },
        {
          term: "blind-spot bias",
          definition:
            "Thấy bias của người khác dễ hơn bias của chính mình.",
        },
      ],
    },
    {
      id: "s6",
      heading: "Shortcuts kinh điển khi judging others (R&J)",
      blocks: [
        calloutBlock(
          "note",
          "Vì sao shortcut sinh bias",
          "Shortcut giúp perceive nhanh và có thể cho data hợp lệ để dự đoán, nhưng không foolproof. Vấn đề xuất hiện khi shortcut tạo distortion đáng kể, làm ta phán đoán người khác bằng một mảnh thông tin hẹp.",
        ),
        comparisonBlock(
          "Common shortcuts (slide 32-35; R&J p99)",
          ["Shortcut", "Nội dung"],
          [
            {
              label: "Selective perception",
              cells: [
                "Selectively interpret what one sees on the basis of one's interests, background, experience, and attitudes — chỉ 'thấy' cái mình muốn thấy.",
              ],
            },
            {
              label: "Halo effect",
              cells: [
                "Draw a general impression about an individual on the basis of a single characteristic.",
              ],
            },
            {
              label: "Contrast effect",
              cells: [
                "Evaluation of a person's characteristics bị ảnh hưởng bởi comparison với người vừa gặp, cao hơn hoặc thấp hơn.",
              ],
            },
            {
              label: "Stereotyping",
              cells: [
                "Judging someone on the basis of one's perception of the group to which that person belongs.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "selective perception",
          definition:
            "Selectively interpret what one sees based on one's interests, background, experience and attitudes.",
        },
        {
          term: "halo effect",
          definition:
            "Draw a general impression about an individual based on a single characteristic.",
        },
        {
          term: "contrast effect",
          definition:
            "Evaluation affected by comparison with others recently encountered who rank higher or lower.",
        },
        {
          term: "stereotyping",
          definition:
            "Judging someone based on one's perception of the group to which that person belongs.",
        },
      ],
    },
    {
      id: "s6b",
      heading: "Shortcut bổ sung từ slide: similarity & thứ tự thông tin",
      blocks: [
        comparisonBlock(
          "Shortcut bổ sung (slide 32-35)",
          ["Shortcut", "Nội dung"],
          [
            {
              label: "Similar-to-me effect",
              cells: [
                "Vô thức thiên vị người giống mình về thể chất, nghề nghiệp, background hoặc identity cues.",
              ],
            },
            {
              label: "Recency effect",
              cells: [
                "Thông tin xuất hiện gần nhất được nhớ tốt và có thể nặng ký quá mức trong phán đoán.",
              ],
            },
            {
              label: "Primacy effect",
              cells: [
                "Thông tin đầu tiên tạo first impression mạnh, khiến những thông tin sau bị diễn giải quanh ấn tượng đầu.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "similar-to-me effect",
          definition:
            "Thiên vị người giống mình về physical, professional hoặc background cues.",
        },
        {
          term: "recency effect",
          definition:
            "Thông tin gần nhất được nhớ và được weigh mạnh quá mức.",
        },
        {
          term: "primacy effect",
          definition:
            "Thông tin đầu tiên tạo first impression chi phối interpretation về sau.",
        },
      ],
    },
    {
      id: "s7",
      heading: "Perception → Decision making: rational, bounded, intuition",
      blocks: [
        calloutBlock(
          "key",
          "Link perception ↔ decision",
          "Decisions = choices made from among two or more alternatives; Problem = a discrepancy between the current state of affairs and some desired state. Chất lượng decision chịu ảnh hưởng bởi perception: ta xem data nào là relevant, problem nào là thật, alternative nào đáng cân nhắc.",
        ),
        flowBlock(
          "s7",
          "Rational Decision-Making Model — 6 bước",
          "horizontal",
          [
            {
              id: "s7_define",
              label: "Define problem",
              group: "concept",
              detail:
                "Xác định discrepancy giữa current state và desired state.",
            },
            {
              id: "s7_criteria",
              label: "Identify criteria",
              group: "concept",
              detail:
                "Nêu các criteria quan trọng dùng để đánh giá alternatives.",
            },
            {
              id: "s7_weights",
              label: "Allocate weights",
              group: "concept",
              detail:
                "Gán trọng số để biết criteria nào quan trọng hơn.",
            },
            {
              id: "s7_alternatives",
              label: "Develop alternatives",
              group: "concept",
              detail:
                "Tạo các phương án có thể giải quyết problem.",
            },
            {
              id: "s7_evaluate",
              label: "Evaluate alternatives",
              group: "concept",
              detail:
                "So sánh alternatives theo criteria và weights.",
            },
            {
              id: "s7_select",
              label: "Select best",
              group: "concept",
              detail:
                "Chọn alternative tối đa hóa outcome theo model lý tưởng.",
            },
          ],
          [
            { from: "s7_define", to: "s7_criteria", label: "criteria" },
            { from: "s7_criteria", to: "s7_weights", label: "weight" },
            { from: "s7_weights", to: "s7_alternatives", label: "options" },
            { from: "s7_alternatives", to: "s7_evaluate", label: "score" },
            { from: "s7_evaluate", to: "s7_select", label: "choose" },
          ],
          "Rational model mô tả cách cá nhân SHOULD behave để maximize outcome.",
        ),
        comparisonBlock(
          "3 constructs ra quyết định (R&J p101-102)",
          ["Construct", "Định nghĩa", "Thực tế"],
          [
            {
              label: "Rational decision-making model",
              cells: [
                "Describes how individuals should behave to maximize outcome — complete info, unbiased, highest utility.",
                "Lý tưởng; ít người theo trọn trong môi trường phức tạp.",
              ],
            },
            {
              label: "Bounded rationality",
              cells: [
                "Making decisions by constructing simplified models that extract essential features without capturing all complexity.",
                "Dẫn tới satisficing: chọn phương án good enough, không tối ưu tuyệt đối.",
              ],
            },
            {
              label: "Intuitive decision making",
              cells: [
                "An unconscious process created out of distilled experience — holistic, nhanh, affectively charged.",
                "Không rational theo model nhưng không hẳn sai; có thể bổ trợ rational analysis.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "decisions",
          definition:
            "Choices made from among two or more alternatives.",
        },
        {
          term: "problem",
          definition:
            "A discrepancy between the current state of affairs and some desired state.",
        },
        {
          term: "rational decision-making model",
          definition:
            "Model describing how individuals should behave to maximize outcome.",
        },
        {
          term: "bounded rationality",
          definition:
            "Making decisions with simplified models that extract essential features without capturing all complexity.",
        },
        {
          term: "satisficing",
          definition:
            "Choosing a good-enough alternative rather than the optimal alternative.",
        },
        {
          term: "intuitive decision making",
          definition:
            "An unconscious process created out of distilled experience.",
        },
      ],
    },
    {
      id: "s8",
      heading: "Biases khi xử lý thông tin (R&J p102-104)",
      blocks: [
        comparisonBlock(
          "Biases khi xử lý thông tin (R&J p102-104; slide 36-38)",
          ["Bias", "Nội dung"],
          [
            {
              label: "Overconfidence bias",
              cells: [
                "Quá tự tin về năng lực hoặc độ chính xác của judgment; người năng lực yếu nhất thường overestimate mạnh nhất.",
              ],
            },
            {
              label: "Anchoring bias",
              cells: [
                "Fixate on initial information, fail to adequately adjust for subsequent information.",
              ],
            },
            {
              label: "Confirmation bias",
              cells: [
                "Seek out information that reaffirms past choices; discount information that contradicts past judgments.",
              ],
            },
            {
              label: "Availability bias",
              cells: [
                "Base judgments on information that is readily available, vivid hoặc recently encountered.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "overconfidence bias",
          definition:
            "Tendency to overestimate one's own ability or judgment accuracy.",
        },
        {
          term: "anchoring bias",
          definition:
            "Fixating on initial information and failing to adjust adequately later.",
        },
        {
          term: "confirmation bias",
          definition:
            "Seeking information that reaffirms past choices while discounting contradictory information.",
        },
        {
          term: "availability bias",
          definition:
            "Basing judgments on information that is readily available or vivid.",
        },
      ],
    },
    {
      id: "s8b",
      heading: "Biases khi cam kết & nhìn lại + cách giảm bias",
      blocks: [
        comparisonBlock(
          "Biases khi cam kết & nhìn lại (R&J p102-104; slide 36-38)",
          ["Bias", "Nội dung"],
          [
            {
              label: "Escalation of commitment",
              cells: [
                "Increased commitment to a previous decision in spite of negative information, nhất là khi thấy mình chịu trách nhiệm outcome.",
              ],
            },
            {
              label: "Randomness error",
              cells: [
                "Believe that they can predict the outcome of random events; tạo pattern từ may rủi.",
              ],
            },
            {
              label: "Risk aversion",
              cells: [
                "Prefer a sure gain of a moderate amount over a riskier outcome, even if riskier has higher expected payoff.",
              ],
            },
            {
              label: "Hindsight bias",
              cells: [
                "Believe falsely, after outcome is known, that one would have accurately predicted it.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Giảm bias",
          "Focus on goals; look for information that disconfirms your beliefs; don't create meaning out of random events; increase your options. Nguồn gốc exhibit — S. P. Robbins, *Decide & Conquer* (2004).",
        ),
        comparisonBlock(
          "Exhibit 5-3 — Reducing Biases and Errors (sách, p102)",
          ["Lời khuyên", "Nội dung"],
          [
            {
              label: "Focus on goals",
              cells: [
                "Không có goals rõ thì không biết information nào relevant, khó chọn giữa alternatives và dễ hối tiếc về lựa chọn; goals rõ giúp loại option nghịch với lợi ích của mình.",
              ],
            },
            {
              label: "Look for information that disconfirms your beliefs",
              cells: [
                "Cách hiệu quả nhất để chống overconfidence, confirmation và hindsight bias: chủ động tìm thông tin TRÁI với niềm tin/giả định của mình; cân nhắc công khai các cách mình có thể sai để thách thức xu hướng nghĩ mình thông minh hơn thực tế.",
              ],
            },
            {
              label: "Don't try to create meaning out of random events",
              cells: [
                "Não được huấn luyện tìm cause-effect; khi không tìm được lý do ta hay TỰ BỊA ra. Phải chấp nhận có những sự kiện ngoài kiểm soát; đừng gán ý nghĩa cho trùng hợp ngẫu nhiên.",
              ],
            },
            {
              label: "Increase your options",
              cells: [
                "Quyết định cuối chỉ tốt bằng option tốt nhất trong tập đã nghĩ ra; tăng SỐ LƯỢNG và ĐỘ ĐA DẠNG alternatives (kể cả bằng sáng tạo) thì cơ hội tìm được option xuất sắc tăng.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "escalation of commitment",
          definition:
            "Increasing commitment to a previous decision despite negative information.",
        },
        {
          term: "randomness error",
          definition:
            "Believing one can predict the outcome of random events.",
        },
        {
          term: "risk aversion",
          definition:
            "Preferring a sure moderate gain over a riskier outcome, even when the riskier option has higher expected payoff.",
        },
        {
          term: "hindsight bias",
          definition:
            "After an outcome is known, falsely believing one would have accurately predicted it.",
        },
      ],
    },
    {
      id: "s9",
      heading: "Influences: individual differences & organizational constraints",
      blocks: [
        comparisonBlock(
          "Individual differences (R&J p105-106)",
          ["Yếu tố", "Ảnh hưởng"],
          [
            {
              label: "Personality",
              cells: [
                "Achievement striving có thể liên quan escalation of commitment và hindsight; dutiful có xu hướng ít escalate hơn.",
              ],
            },
            {
              label: "Gender",
              cells: [
                "Không stress: nam/nữ ngang nhau; stress: nam có thể egocentric & risky hơn, nữ empathetic và quyết định tốt hơn.",
              ],
            },
            {
              label: "General Mental Ability (GMA)",
              cells: [
                "Xử lý nhanh/chính xác hơn nhưng vẫn có thể dính anchoring, overconfidence, escalation; khi được cảnh báo thì học tránh nhanh hơn.",
              ],
            },
            {
              label: "Cultural differences",
              cells: [
                "Khác nhau ở time orientation, niềm tin có thể giải quyết vấn đề và mức ưa quyết định tập thể.",
              ],
            },
          ],
        ),
        comparisonBlock(
          "Organizational constraints (R&J p106-107)",
          ["Ràng buộc", "Nội dung"],
          [
            {
              label: "Performance evaluation systems",
              cells: [
                "Manager bị chi phối bởi tiêu chí mà họ biết sẽ được dùng để đánh giá performance.",
              ],
            },
            {
              label: "Reward systems",
              cells: [
                "Gợi ý lựa chọn nào có payoff tốt hơn; nếu reward risk-aversion, decision có thể bảo thủ.",
              ],
            },
            {
              label: "Formal regulations",
              cells: [
                "Rules/policies giới hạn lựa chọn, tạo boundary cho decision.",
              ],
            },
            {
              label: "System-imposed time constraints",
              cells: [
                "Deadline làm khó gom đủ information và tăng reliance vào shortcut.",
              ],
            },
            {
              label: "Historical precedents",
              cells: [
                "Decision có context lịch sử; budget năm nay thường bị neo quanh budget năm ngoái.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Nudging",
          "**Nudging (sách, p106):** tổ chức chủ động 'hích' perception và decision của ta — quảng cáo là dạng nudge lộ liễu nhất (tác động perception về sản phẩm → decision mua). Nudging cũng được dùng tích cực, ví dụ trong CSR initiatives để đổi kỳ vọng của mọi người về tổ chức. Mức độ dễ bị nudge khác nhau theo người, nhưng gần như ai cũng chịu tác động của suggestion ở mức nào đó.",
        ),
      ],
      keyTerms: [
        {
          term: "individual differences",
          definition:
            "Các khác biệt cá nhân như personality, gender, GMA và culture ảnh hưởng decision making.",
        },
        {
          term: "organizational constraints",
          definition:
            "Ràng buộc từ performance evaluation, reward systems, regulations, time constraints và historical precedents.",
        },
        {
          term: "nudging",
          definition:
            "Tác động có chủ đích của tổ chức lên perception và decision của cá nhân qua suggestion (sách, p106).",
        },
      ],
    },
    {
      id: "s10",
      heading: "Ethics in decision making",
      blocks: [
        comparisonBlock(
          "3 ethical decision criteria (R&J p107)",
          ["Tiêu chí", "Nội dung"],
          [
            {
              label: "Utilitarianism",
              cells: [
                "Decisions made to provide the greatest good for the greatest number; thống trị business vì nhấn efficiency/profit.",
              ],
            },
            {
              label: "Rights",
              cells: [
                "Tôn trọng và bảo vệ quyền cơ bản như privacy, free speech, due process; bảo vệ whistle-blowers.",
              ],
            },
            {
              label: "Justice",
              cells: [
                "Áp và thực thi rules công bằng; phân phối benefits/costs đều, ví dụ same pay for same job hoặc seniority khi layoff.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Behavioral ethics & Lying",
          "Behavioral ethics = analyzing how people actually behave when confronted with ethical dilemmas. Ta không luôn theo chuẩn đã tuyên; ethical behavior đổi theo tình huống. Lying làm méo decision making vì người ta phát hiện nói dối chỉ khoảng 47%, dưới cả đoán ngẫu nhiên.",
        ),
      ],
      keyTerms: [
        {
          term: "utilitarianism",
          definition:
            "Ethical criterion: decisions made to provide the greatest good for the greatest number.",
        },
        {
          term: "rights",
          definition:
            "Ethical criterion protecting basic rights such as privacy, free speech and due process.",
        },
        {
          term: "justice",
          definition:
            "Ethical criterion emphasizing fair rules and fair distribution of benefits/costs.",
        },
        {
          term: "whistle-blower",
          definition:
            "Người báo cáo hành vi sai trái; rights criterion nhấn mạnh bảo vệ họ.",
        },
        {
          term: "behavioral ethics",
          definition:
            "Analyzing how people actually behave when confronted with ethical dilemmas.",
        },
      ],
    },
    {
      id: "s11",
      heading: "Creativity & applications + So what",
      blocks: [
        flowBlock(
          "s11",
          "Three-Stage Model of Creativity",
          "tree",
          [
            {
              id: "s11_creativity",
              label: "Creativity",
              group: "concept",
              detail:
                "Creativity trong tổ chức hướng tới creative outcomes/innovation: vừa novel vừa useful.",
            },
            {
              id: "s11_causes",
              label: "Causes",
              group: "concept",
              parent: "s11_creativity",
              detail:
                "Creative potential + creative environment tạo điều kiện cho creative behavior.",
            },
            {
              id: "s11_behavior",
              label: "Creative behavior",
              group: "concept",
              parent: "s11_creativity",
              detail:
                "Chuỗi hành vi gồm problem formulation, information gathering, idea generation, idea evaluation.",
            },
            {
              id: "s11_outcomes",
              label: "Creative outcomes",
              group: "concept",
              parent: "s11_creativity",
              detail:
                "Kết quả sáng tạo/innovation cần mới và hữu ích, không chỉ khác lạ.",
            },
          ],
          [
            { from: "s11_causes", to: "s11_behavior", label: "drives" },
            { from: "s11_behavior", to: "s11_outcomes", label: "creates" },
          ],
          "Causes (Creative potential + Creative environment) → Creative behavior → Creative outcomes/Innovation.",
        ),
        comparisonBlock(
          "Creative behavior — 4 bước (R&J p109)",
          ["Bước", "Nội dung"],
          [
            {
              label: "Problem formulation",
              cells: [
                "Xác định vấn đề/cơ hội chưa được biết hoặc chưa được framing đúng.",
              ],
            },
            {
              label: "Information gathering",
              cells: [
                "Giải pháp khả dĩ incubate trong đầu khi cá nhân thu thập và nối thông tin.",
              ],
            },
            {
              label: "Idea generation",
              cells: [
                "Phát triển giải pháp từ kiến thức liên quan và các kết nối mới.",
              ],
            },
            {
              label: "Idea evaluation",
              cells: [
                "Đánh giá và chọn giải pháp tốt nhất trước khi biến thành outcome.",
              ],
            },
          ],
        ),
        calloutBlock(
          "key",
          "Ứng dụng shortcut & bias trong tổ chức + SO WHAT",
          "Employment interview dễ bị ấn tượng đầu chi phối; performance expectations có thể tạo self-fulfilling prophecy / Pygmalion effect; performance evaluation cũng chịu bias. SO WHAT (Nordell 2022): unconscious bias có thể hại hơn explicit discrimination vì nó ngăn ta thấy rõ, hiểu đúng và tin nhau. → Mắt xích môn học: perception & attribution là bộ lọc đầu vào cho attitudes (Topic 05) và motivation (Topic 06) — cách bạn \"quy nhân\" thành công/thất bại định hình kỳ vọng effort→performance; các bias như anchoring/overconfidence sẽ trở lại ở decision nhóm (Topic 07) và negotiation (Topic 08).",
        ),
        comparisonBlock(
          "Causes of creative behavior — chi tiết sách (p109–111)",
          ["Nguồn", "Nội dung"],
          [
            {
              label: "Creative potential (p109–110)",
              cells: [
                "Intelligence (người thông minh sáng tạo hơn); personality: openness to experience, proactive, self-confidence, risk taking, tolerance for ambiguity, perseverance; hope/self-efficacy/positive affect cũng dự đoán creativity; nghiên cứu \"mad genius\" (một phần creativity gắn psychopathology — vd Van Gogh — nhưng chiều ngược lại KHÔNG đúng); expertise là nền của mọi creative work và là predictor QUAN TRỌNG NHẤT của creative potential (vd Tarantino tích lũy kiến thức phim từ video rental store); ethics KHÔNG tương quan với creativity — người gian lận có thể sáng tạo hơn người hành xử đạo đức (cả hai có thể cùng gốc rule-breaking desire).",
              ],
            },
            {
              label: "Creative environment (p110–111)",
              cells: [
                "Có potential chưa đủ, cần môi trường để hiện thực hóa: quan trọng nhất là motivation, đặc biệt intrinsic motivation (tương quan khá mạnh với creative outcomes); tổ chức nên reward & recognize creative work, cho ý tưởng chảy tự do, tự do khỏi rule thừa, structural + psychological empowerment; climate \"achievement at any cost\" GIẾT creativity; team: diversity chỉ tăng creativity khi có perspective taking và leader truyền cảm hứng + tạo confidence; creative outcomes cần \"used\" — \"ideas are useless unless used\" (translate ý tưởng thành innovation cần motivation + networking ability).",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "creativity",
          definition:
            "Capacity to generate novel and useful ideas or outcomes.",
        },
        {
          term: "three-stage model of creativity",
          definition:
            "Creative potential + creative environment → creative behavior → creative outcomes/innovation.",
        },
        {
          term: "self-fulfilling prophecy",
          definition:
            "A belief or expectation that helps bring about the expected outcome.",
        },
        {
          term: "Pygmalion effect",
          definition:
            "Performance expectations become reality because they shape behavior and evaluation.",
        },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "Which option best defines perception in organizational behavior?",
      options: [
        { id: "a", text: "A person's permanent personality pattern across situations", isCorrect: false, rationale: "Cơ chế: personality nói về pattern tương đối ổn định của cá nhân. Bẫy: cùng nói về individual differences nên dễ nhầm. Khóa: perception là quá trình organize and interpret sensory impressions." },
        { id: "b", text: "A process of organizing and interpreting sensory impressions to give meaning to the environment", isCorrect: true, rationale: "Cơ chế: đây là định nghĩa chuẩn của perception trong R&J. Bẫy: câu dài nên dễ bỏ qua hai động từ organize + interpret. Khóa: sensory impressions + meaning to environment là dấu hiệu đúng." },
        { id: "c", text: "A formal procedure for maximizing decision utility", isCorrect: false, rationale: "Cơ chế: maximizing utility thuộc rational decision-making model. Bẫy: perception ảnh hưởng decision nhưng không phải model ra quyết định. Khóa: hỏi definition của perception, không hỏi decision." },
        { id: "d", text: "The tendency to explain others' behavior as internally caused", isCorrect: false, rationale: "Cơ chế: đây gần với fundamental attribution error. Bẫy: attribution là một phần topic nhưng không đồng nghĩa perception. Khóa: perception rộng hơn attribution." },
        { id: "e", text: "The ethical rule of choosing the greatest good for the greatest number", isCorrect: false, rationale: "Cơ chế: đây là utilitarianism. Bẫy: cùng nằm trong chương decision making. Khóa: ethical criteria không phải perception." },
      ],
      difficulty: "basic",
      conceptTested: "Definition of perception",
      takeaway: "Perception = organize and interpret sensory impressions để gán nghĩa cho environment.",
    },
    {
      id: "q02",
      stem: "Why is perception behaviorally important in OB?",
      options: [
        { id: "a", text: "Because objective reality always determines behavior directly", isCorrect: false, rationale: "Cơ chế: OB nhấn mạnh behavior dựa trên perception, không trực tiếp trên reality. Bẫy: nghe khoa học nhưng trái luận điểm trung tâm. Khóa: reality chỉ ảnh hưởng qua cách nó được perceived." },
        { id: "b", text: "Because people perceive the same event in exactly the same way", isCorrect: false, rationale: "Cơ chế: different individuals can see the same thing differently. Bẫy: tưởng cùng stimulus thì cùng perception. Khóa: perceiver/target/situation làm perception khác nhau." },
        { id: "c", text: "Because perception removes the need for decision making", isCorrect: false, rationale: "Cơ chế: perception không loại bỏ decision; nó định hình problem và alternatives. Bẫy: thấy perception quan trọng rồi phóng đại. Khóa: perception ảnh hưởng decision, không thay thế decision." },
        { id: "d", text: "Because people act on their perception of reality, not on reality itself", isCorrect: true, rationale: "Cơ chế: hành vi dựa trên perceived reality. Bẫy: dễ chọn objective reality nếu bỏ qua câu 'behaviorally important'. Khóa: world as perceived is behaviorally important." },
        { id: "e", text: "Because perception is always accurate after enough information is gathered", isCorrect: false, rationale: "Cơ chế: nhiều information vẫn có thể bị selective perception, confirmation bias hoặc anchoring làm méo. Bẫy: tin thêm data tự động hết bias. Khóa: perception có thể substantially different from objective reality." },
      ],
      difficulty: "basic",
      conceptTested: "Perception versus reality",
      takeaway: "Trong OB, perceived reality mới là reality mà con người dùng để hành động.",
    },
    {
      id: "q03",
      stem: "A manager judges early-arriving employees as more committed because she personally values early starts. Which factor is shaping her perception?",
      options: [
        { id: "a", text: "Target", isCorrect: false, rationale: "Cơ chế: target là đặc điểm của đối tượng được quan sát. Bẫy: nhân viên đi sớm là target cue. Khóa: stem nhấn manager personally values early starts, tức perceiver." },
        { id: "b", text: "Situation", isCorrect: false, rationale: "Cơ chế: situation là context như time, place, light, social setting. Bẫy: early starts nghe như time context. Khóa: nguyên nhân trong stem là value của người quan sát." },
        { id: "c", text: "Perceiver", isCorrect: true, rationale: "Cơ chế: attitudes, motives, interests, past experiences và expectations của perceiver làm méo perception. Bẫy: có cue từ employee nhưng judgment xuất phát từ value của manager. Khóa: 'she personally values' là perceiver." },
        { id: "d", text: "Consensus", isCorrect: false, rationale: "Cơ chế: consensus thuộc attribution theory, hỏi người khác có phản ứng giống không. Bẫy: cùng chương nên dễ lẫn. Khóa: câu này phân loại factor ảnh hưởng perception." },
        { id: "e", text: "Justice", isCorrect: false, rationale: "Cơ chế: justice là ethical criterion về công bằng. Bẫy: đánh giá employee nghe liên quan fairness. Khóa: stem hỏi factor shaping perception, không ethical criterion." },
      ],
      difficulty: "intermediate",
      conceptTested: "Factors influencing perception",
      takeaway: "Perceiver factors là attitudes, expectations và motives của chính người quan sát.",
    },
    {
      id: "q04",
      stem: "Which example best illustrates the Gestalt principle of proximity?",
      options: [
        { id: "a", text: "Employees who sit together are perceived as belonging to the same subgroup", isCorrect: true, rationale: "Cơ chế: proximity khiến các phần tử gần nhau bị nhóm lại. Bẫy: có thể tưởng đây là stereotype vì có grouping. Khóa: clue chính là sit together/gần nhau." },
        { id: "b", text: "A supervisor separates a speaker from the noisy background", isCorrect: false, rationale: "Cơ chế: tách object khỏi background là figure-ground. Bẫy: đều là Gestalt. Khóa: proximity cần near together, không phải figure/background." },
        { id: "c", text: "A team moving in the same direction is seen as coordinated", isCorrect: false, rationale: "Cơ chế: moving together là common fate. Bẫy: cũng liên quan grouping. Khóa: common fate nhấn cùng chuyển động." },
        { id: "d", text: "A first impression dominates later information", isCorrect: false, rationale: "Cơ chế: đây là primacy effect. Bẫy: đều là shortcut/perception distortion. Khóa: primacy không phải Gestalt proximity." },
        { id: "e", text: "A recent mistake is weighted more than older performance", isCorrect: false, rationale: "Cơ chế: đây là recency effect. Bẫy: cùng nói về perceptual shortcut. Khóa: recency dựa vào thời điểm thông tin, không phải khoảng cách vật lý." },
      ],
      difficulty: "intermediate",
      conceptTested: "Gestalt principles",
      takeaway: "Proximity = gần nhau thì dễ bị perceive như cùng nhóm.",
    },
    {
      id: "q05",
      stem: "In attribution theory, high distinctiveness most strongly suggests that the behavior is...",
      options: [
        { id: "a", text: "internally caused because it happens in every situation", isCorrect: false, rationale: "Cơ chế: behavior xảy ra mọi tình huống là low distinctiveness. Bẫy: nhầm high với consistent everywhere. Khóa: distinctiveness cao nghĩa là hành vi bất thường theo tình huống." },
        { id: "b", text: "internally caused because the person has a stable personality", isCorrect: false, rationale: "Cơ chế: internal attribution có thể liên quan stable traits nhưng high distinctiveness không chỉ về trait. Bẫy: kéo kiến thức personality từ Topic 01. Khóa: high distinctiveness thường hướng external." },
        { id: "c", text: "unrelated to internal or external causation", isCorrect: false, rationale: "Cơ chế: distinctiveness là một trong ba cues của attribution theory. Bẫy: tưởng chỉ consensus/consistency mới quyết định attribution. Khóa: Exhibit 5-1 dùng distinctiveness trực tiếp." },
        { id: "d", text: "externally caused because it is unusual for that person across situations", isCorrect: true, rationale: "Cơ chế: distinctiveness cao = người này không cư xử như vậy trong nhiều tình huống khác. Bẫy: thấy 'that person' rồi chọn internal. Khóa: unusual across situations gợi external cause." },
        { id: "e", text: "a result of hindsight bias", isCorrect: false, rationale: "Cơ chế: hindsight bias là decision bias sau khi biết outcome. Bẫy: cùng là bias. Khóa: câu hỏi attribution theory, không decision-making bias." },
      ],
      difficulty: "intermediate",
      conceptTested: "Distinctiveness in attribution theory",
      takeaway: "Distinctiveness cao thường đẩy attribution về external cause.",
    },
    {
      id: "q06",
      stem: "Only one employee misses the deadline, and that employee has missed many deadlines before. Consensus is low and consistency is high. What attribution is most likely?",
      options: [
        { id: "a", text: "External attribution because everyone missed the deadline", isCorrect: false, rationale: "Cơ chế: everyone missed would be high consensus, nhưng stem nói only one employee. Bẫy: bỏ qua chữ only. Khóa: consensus thấp không ủng hộ external." },
        { id: "b", text: "Internal attribution because few others do it and this person does it repeatedly", isCorrect: true, rationale: "Cơ chế: low consensus + high consistency kéo về internal attribution. Bẫy: deadline có thể do external pressure, nhưng data trong case chỉ ngược lại. Khóa: one person + repeated behavior." },
        { id: "c", text: "External attribution because consistency is high", isCorrect: false, rationale: "Cơ chế: consistency cao thường củng cố internal attribution khi behavior lặp lại ở cùng người. Bẫy: nhầm consistency với situation consistency. Khóa: lặp nhiều lần bởi cùng cá nhân." },
        { id: "d", text: "No attribution is possible because distinctiveness is absent", isCorrect: false, rationale: "Cơ chế: thiếu một cue không có nghĩa không thể infer; consensus và consistency vẫn cho hướng mạnh. Bẫy: tưởng phải đủ cả ba mới nói được. Khóa: most likely hỏi attribution phù hợp nhất." },
        { id: "e", text: "Justice attribution because deadlines involve fairness", isCorrect: false, rationale: "Cơ chế: justice là ethical criterion, không phải attribution category. Bẫy: deadline/evaluation có thể gợi fairness. Khóa: internal vs external mới là trục ở đây." },
      ],
      difficulty: "advanced",
      conceptTested: "Consensus and consistency in attribution",
      takeaway: "Low consensus + high consistency thường khiến ta quy nhân internal.",
    },
    {
      id: "q07",
      stem: "Which statement best describes the fundamental attribution error?",
      options: [
        { id: "a", text: "Taking credit for success and blaming failure on outside forces", isCorrect: false, rationale: "Cơ chế: đây là self-serving bias. Bẫy: cả hai đều là attribution errors. Khóa: FAE nói về phán đoán người khác, self-serving nói về mình." },
        { id: "b", text: "Assuming others share one's own preferences", isCorrect: false, rationale: "Cơ chế: đây là projection. Bẫy: cũng là person-perception bias. Khóa: projection gán cái của mình cho người khác, không phải internal/external weighting." },
        { id: "c", text: "Seeing bias in others while failing to see one's own bias", isCorrect: false, rationale: "Cơ chế: đây là blind-spot bias. Bẫy: nghe giống error trong perception. Khóa: FAE là overestimate internal causes for others." },
        { id: "d", text: "Explaining random outcomes as predictable patterns", isCorrect: false, rationale: "Cơ chế: đây là randomness error trong decision making. Bẫy: cùng là error. Khóa: FAE thuộc attribution." },
        { id: "e", text: "Underestimating situational causes and overestimating personal causes when judging others", isCorrect: true, rationale: "Cơ chế: FAE là tendency đánh giá hành vi người khác bằng internal causes quá mạnh và external causes quá nhẹ. Bẫy: nếu stem không nói 'others', dễ nhầm self-serving. Khóa: others + internal over external." },
      ],
      difficulty: "basic",
      conceptTested: "Fundamental Attribution Error",
      takeaway: "FAE = khi phán đoán người khác, ta thường đổ lỗi cá nhân quá nhanh và xem nhẹ tình huống.",
    },
    {
      id: "q08",
      stem: "A student says, \"I scored high because I am smart, but I failed the last test because the room was too noisy.\" Which bias is this?",
      options: [
        { id: "a", text: "Fundamental attribution error", isCorrect: false, rationale: "Cơ chế: FAE là judging others, không phải giải thích thành công/thất bại của chính mình. Bẫy: đều dùng internal/external attribution. Khóa: my success internal, my failure external = self-serving." },
        { id: "b", text: "Projection", isCorrect: false, rationale: "Cơ chế: projection là gán đặc điểm của mình cho người khác. Bẫy: câu có self-talk nên dễ nhầm với projection. Khóa: không có gán sở thích/đặc điểm cho người khác." },
        { id: "c", text: "Self-serving bias", isCorrect: true, rationale: "Cơ chế: self-serving bias quy success của mình cho internal và failure cho external. Bẫy: bối cảnh test có thể khiến ta tranh luận room noise thật hay không. Khóa: pattern attribution mới quan trọng." },
        { id: "d", text: "Anchoring bias", isCorrect: false, rationale: "Cơ chế: anchoring là fixate on initial information. Bẫy: điểm số đầu có thể là anchor nhưng stem không nói update judgment. Khóa: đây là attribution về success/failure." },
        { id: "e", text: "Hindsight bias", isCorrect: false, rationale: "Cơ chế: hindsight là 'I knew it all along' sau outcome. Bẫy: có outcome test nên dễ nhầm. Khóa: stem không nói predicted outcome." },
      ],
      difficulty: "basic",
      conceptTested: "Self-serving bias",
      takeaway: "Self-serving bias bảo vệ cái tôi: thành công do mình, thất bại do bên ngoài.",
    },
    {
      id: "q09",
      stem: "An interviewer rates a candidate as highly competent because the candidate is exceptionally articulate. Which shortcut is most likely?",
      options: [
        { id: "a", text: "Contrast effect", isCorrect: false, rationale: "Cơ chế: contrast effect cần comparison với người vừa gặp. Bẫy: interview context hay có contrast. Khóa: stem chỉ nói một characteristic chi phối tổng impression." },
        { id: "b", text: "Halo effect", isCorrect: true, rationale: "Cơ chế: halo effect là general impression dựa trên một đặc điểm đơn lẻ. Bẫy: articulate có thể thật sự hữu ích, nhưng dùng nó để kết luận toàn bộ competence là halo. Khóa: one characteristic → overall impression." },
        { id: "c", text: "Stereotyping", isCorrect: false, rationale: "Cơ chế: stereotyping dựa trên perception về group membership. Bẫy: candidate có thể thuộc nhóm nào đó nhưng stem không nói group. Khóa: đây là single trait, không group." },
        { id: "d", text: "Recency effect", isCorrect: false, rationale: "Cơ chế: recency là thông tin gần nhất lấn át. Bẫy: interview diễn ra gần đây. Khóa: stem nhấn articulate, không nhấn timing." },
        { id: "e", text: "Similar-to-me effect", isCorrect: false, rationale: "Cơ chế: similar-to-me là thích người giống mình. Bẫy: interviewer có thể cũng articulate nhưng stem không nói similarity. Khóa: một đặc điểm nổi bật chi phối đánh giá là halo." },
      ],
      difficulty: "intermediate",
      conceptTested: "Halo effect",
      takeaway: "Halo effect biến một đặc điểm nổi bật thành đánh giá tổng quát về cả con người.",
    },
    {
      id: "q10",
      stem: "A manager reads only reports that support her previous hiring decision and ignores reports that challenge it. Which bias is most directly shown?",
      options: [
        { id: "a", text: "Availability bias", isCorrect: false, rationale: "Cơ chế: availability bias dựa trên thông tin dễ nhớ/dễ truy cập. Bẫy: reports available nghe hợp. Khóa: stem nhấn support previous decision và ignore contradictory evidence." },
        { id: "b", text: "Risk aversion", isCorrect: false, rationale: "Cơ chế: risk aversion là thích sure gain hơn riskier outcome. Bẫy: hiring có risk. Khóa: không có lựa chọn sure/risky ở stem." },
        { id: "c", text: "Randomness error", isCorrect: false, rationale: "Cơ chế: randomness error tạo pattern trong random events. Bẫy: reports có thể là data pattern. Khóa: vấn đề là chọn lọc evidence theo belief." },
        { id: "d", text: "Confirmation bias", isCorrect: true, rationale: "Cơ chế: confirmation bias tìm thông tin xác nhận lựa chọn cũ và hạ giá thông tin trái chiều. Bẫy: dễ gọi chung là selective perception. Khóa: previous decision + supporting reports là confirmation." },
        { id: "e", text: "Justice criterion", isCorrect: false, rationale: "Cơ chế: justice là ethical criterion về fairness. Bẫy: hiring liên quan công bằng. Khóa: câu hỏi về bias xử lý information." },
      ],
      difficulty: "intermediate",
      conceptTested: "Confirmation bias versus selective perception",
      takeaway: "Confirmation bias là dạng selective perception trong decision: chỉ tìm/ưu tiên evidence ủng hộ judgment cũ.",
    },
    {
      id: "q11",
      stem: "In the rational decision-making model, what is the first step?",
      options: [
        { id: "a", text: "Define the problem", isCorrect: true, rationale: "Cơ chế: rational model bắt đầu bằng define the problem. Bẫy: nhiều người nhảy ngay sang alternatives. Khóa: nếu problem sai, criteria và alternatives sau đó cũng sai." },
        { id: "b", text: "Allocate weights to criteria", isCorrect: false, rationale: "Cơ chế: allocate weights là bước sau identify criteria. Bẫy: weighting nghe rất rational. Khóa: trước khi weight, phải biết problem và criteria." },
        { id: "c", text: "Develop alternatives", isCorrect: false, rationale: "Cơ chế: develop alternatives là bước giữa model. Bẫy: thực tế hay brainstorm sớm. Khóa: rational model bắt đầu từ problem definition." },
        { id: "d", text: "Select the best alternative", isCorrect: false, rationale: "Cơ chế: select best là bước cuối. Bẫy: câu hỏi decision dễ khiến nghĩ đến chọn ngay. Khóa: model có 6 bước tuần tự." },
        { id: "e", text: "Evaluate alternatives", isCorrect: false, rationale: "Cơ chế: evaluate alternatives xảy ra sau khi alternatives đã được phát triển. Bẫy: evaluation là phần nổi bật của decision. Khóa: không thể evaluate khi chưa định nghĩa problem/criteria." },
      ],
      difficulty: "basic",
      conceptTested: "Rational decision-making model",
      takeaway: "Rational model mở đầu bằng define the problem, rồi mới tới criteria, weights, alternatives, evaluation, selection.",
    },
    {
      id: "q12",
      stem: "A manager chooses the first supplier that meets minimum requirements instead of searching for the optimal supplier. This is best described as...",
      options: [
        { id: "a", text: "maximizing under the rational model", isCorrect: false, rationale: "Cơ chế: maximizing đòi hỏi tìm alternative tối ưu theo full criteria. Bẫy: supplier meets requirements nghe hợp lý. Khóa: first good enough không phải optimal." },
        { id: "b", text: "utilitarian decision making", isCorrect: false, rationale: "Cơ chế: utilitarianism chọn greatest good for greatest number. Bẫy: decision nghe ethical. Khóa: câu không nói ethical outcomes." },
        { id: "c", text: "bounded rationality and satisficing", isCorrect: true, rationale: "Cơ chế: bounded rationality dùng simplified model và satisficing chọn good enough. Bẫy: good enough có vẻ thiếu chuyên nghiệp nhưng là mô tả thực tế ra quyết định. Khóa: minimum requirements + first supplier." },
        { id: "d", text: "hindsight bias", isCorrect: false, rationale: "Cơ chế: hindsight bias xảy ra sau outcome, 'I knew it'. Bẫy: supplier choice có outcome tương lai. Khóa: stem nói process chọn hiện tại." },
        { id: "e", text: "projection", isCorrect: false, rationale: "Cơ chế: projection là gán đặc điểm của mình cho người khác. Bẫy: manager tự áp standard của mình. Khóa: core concept là good enough." },
      ],
      difficulty: "intermediate",
      conceptTested: "Bounded rationality and satisficing",
      takeaway: "Bounded rationality dẫn tới satisficing: chọn phương án đủ tốt trong giới hạn thông tin/thời gian.",
    },
    {
      id: "q13",
      stem: "Which description best fits intuitive decision making in R&J?",
      options: [
        { id: "a", text: "A fully conscious calculation of all alternatives", isCorrect: false, rationale: "Cơ chế: full calculation thuộc rational model lý tưởng. Bẫy: intuition có thể đúng nên tưởng nó cũng đầy đủ rational. Khóa: intuitive là unconscious." },
        { id: "b", text: "A random choice made without experience", isCorrect: false, rationale: "Cơ chế: intuition không phải randomness; nó đến từ distilled experience. Bẫy: unconscious dễ bị hiểu là đoán mò. Khóa: experience là thành phần chính." },
        { id: "c", text: "A choice required by formal organizational rules", isCorrect: false, rationale: "Cơ chế: formal rules là organizational constraint. Bẫy: decision context có tổ chức. Khóa: intuition là process bên trong cá nhân." },
        { id: "d", text: "A decision based only on ethical justice", isCorrect: false, rationale: "Cơ chế: justice là ethical criterion. Bẫy: intuition đôi khi có moral feeling. Khóa: câu hỏi R&J về decision process, không ethical lens." },
        { id: "e", text: "An unconscious process created out of distilled experience", isCorrect: true, rationale: "Cơ chế: đây là định nghĩa intuitive decision making. Bẫy: unconscious không có nghĩa irrational or useless. Khóa: distilled experience phân biệt intuition với random guessing." },
      ],
      difficulty: "basic",
      conceptTested: "Intuitive decision making",
      takeaway: "Intuition trong OB là unconscious process từ kinh nghiệm cô đọng, có thể bổ trợ rational analysis.",
    },
    {
      id: "q14",
      stem: "A negotiator starts with last year's salary number and adjusts only slightly despite strong new market data. Which bias is most likely?",
      options: [
        { id: "a", text: "Availability bias", isCorrect: false, rationale: "Cơ chế: availability dựa trên thông tin dễ nhớ hoặc vivid. Bẫy: last year's number dễ nhớ. Khóa: vấn đề là initial number giữ vai trò anchor và adjustment không đủ." },
        { id: "b", text: "Anchoring bias", isCorrect: true, rationale: "Cơ chế: anchoring là fixate on initial information và fail to adjust adequately. Bẫy: có new market data nên tưởng confirmation. Khóa: starting number + slight adjustment = anchor." },
        { id: "c", text: "Escalation of commitment", isCorrect: false, rationale: "Cơ chế: escalation là tăng commitment với quyết định cũ dù có negative information. Bẫy: last year là decision cũ. Khóa: stem nhấn number ban đầu neo judgment, không nhấn tiếp tục dự án sai." },
        { id: "d", text: "Risk aversion", isCorrect: false, rationale: "Cơ chế: risk aversion là thích sure gain. Bẫy: salary negotiation có risk. Khóa: không có lựa chọn sure vs risky." },
        { id: "e", text: "Stereotyping", isCorrect: false, rationale: "Cơ chế: stereotyping dựa vào group membership. Bẫy: salary có thể có group bias nhưng stem không nói group. Khóa: đây là anchoring." },
      ],
      difficulty: "intermediate",
      conceptTested: "Anchoring bias",
      takeaway: "Anchoring bias xảy ra khi thông tin ban đầu giữ người ra quyết định ở quá gần điểm neo.",
    },
    {
      id: "q15",
      stem: "After a project fails, a manager says, \"I knew from the beginning this would happen.\" Which bias is this?",
      options: [
        { id: "a", text: "Confirmation bias", isCorrect: false, rationale: "Cơ chế: confirmation bias là tìm evidence xác nhận belief trước đó. Bẫy: manager nói như đã có belief. Khóa: câu xảy ra after outcome is known." },
        { id: "b", text: "Availability bias", isCorrect: false, rationale: "Cơ chế: availability dựa trên thông tin dễ nhớ. Bẫy: project failure rất vivid. Khóa: phrase 'I knew it' là hindsight." },
        { id: "c", text: "Randomness error", isCorrect: false, rationale: "Cơ chế: randomness error là predict random events bằng pattern giả. Bẫy: project outcome có thể bất định. Khóa: bias sau khi biết kết quả là hindsight." },
        { id: "d", text: "Hindsight bias", isCorrect: true, rationale: "Cơ chế: hindsight bias là tin sai rằng mình đã dự đoán đúng sau khi outcome đã rõ. Bẫy: nghe như confidence. Khóa: after failure + 'knew from the beginning'." },
        { id: "e", text: "Self-serving bias", isCorrect: false, rationale: "Cơ chế: self-serving bias đổ success cho mình, failure cho external. Bẫy: manager có thể đang tự bảo vệ. Khóa: stem không nói attribution cause, chỉ nói prediction after outcome." },
      ],
      difficulty: "basic",
      conceptTested: "Hindsight bias",
      takeaway: "Hindsight bias = sau khi biết kết quả, ta tưởng mình đã thấy trước từ đầu.",
    },
    {
      id: "q16",
      stem: "Which pairing is correct?",
      options: [
        { id: "a", text: "Utilitarianism — protects whistle-blowers' due process rights", isCorrect: false, rationale: "Cơ chế: due process/whistle-blower protection thuộc rights criterion. Bẫy: đều là ethical decision criteria. Khóa: utilitarianism là greatest good for greatest number." },
        { id: "b", text: "Rights — distributes benefits and costs equally by rules", isCorrect: false, rationale: "Cơ chế: phân phối benefits/costs công bằng thuộc justice. Bẫy: rights và justice đều nói fairness. Khóa: rights bảo vệ basic liberties." },
        { id: "c", text: "Pygmalion effect — expectations can become self-fulfilling prophecy", isCorrect: true, rationale: "Cơ chế: Pygmalion/self-fulfilling prophecy nghĩa là expectation ảnh hưởng behavior/outcome đến mức biến thành hiện thực. Bẫy: có thể nhầm với halo vì cũng là impression. Khóa: expectations become reality." },
        { id: "d", text: "Justice — greatest good for the greatest number", isCorrect: false, rationale: "Cơ chế: greatest good for greatest number là utilitarianism. Bẫy: nghe như công bằng xã hội. Khóa: justice nhấn fair rules và distribution." },
        { id: "e", text: "Behavioral ethics — a six-step rational model for maximizing utility", isCorrect: false, rationale: "Cơ chế: behavioral ethics phân tích cách người ta thật sự hành xử khi gặp ethical dilemmas. Bẫy: cùng nằm trong decision making. Khóa: six-step maximizing utility là rational decision-making model." },
      ],
      difficulty: "advanced",
      conceptTested: "Ethics and Pygmalion effect",
      takeaway: "Pygmalion effect là ứng dụng quan trọng của perception: kỳ vọng có thể tạo self-fulfilling prophecy.",
    },
    {
      id: "q17",
      stem: "A project manager is certain her plan cannot fail and dismisses early warning signs. According to Exhibit 5-3, which action would best reduce her overconfidence?",
      options: [
        { id: "a", text: "Actively seek information that could disconfirm her assumptions", isCorrect: true, rationale: "Cơ chế: chủ động tìm evidence trái niềm tin buộc manager kiểm tra cách mình có thể sai và chống overconfidence/confirmation bias. Bẫy: warning signs đã có nên dễ nghĩ chỉ cần xem lại dữ liệu ủng hộ plan. Khóa: disconfirming evidence thách thức confidence thay vì củng cố nó." },
        { id: "b", text: "Focus only on evidence that supports the original plan", isCorrect: false, rationale: "Cơ chế: chỉ tìm evidence thuận chiều làm confirmation bias và overconfidence mạnh hơn. Bẫy: consistency với plan tạo cảm giác quyết đoán. Khóa: giảm bias cần tìm thông tin TRÁI niềm tin." },
        { id: "c", text: "Treat every random setback as proof of a hidden causal pattern", isCorrect: false, rationale: "Cơ chế: gán cause-effect cho random events tạo randomness error, không sửa overconfidence. Bẫy: warning signs khiến manager muốn tìm một pattern giải thích nhanh. Khóa: Exhibit 5-3 yêu cầu không tự tạo meaning từ sự kiện ngẫu nhiên." },
        { id: "d", text: "Reduce the number and diversity of alternatives under review", isCorrect: false, rationale: "Cơ chế: thu hẹp alternatives làm decision bị giới hạn bởi option hiện có. Bẫy: ít option có vẻ giúp tập trung. Khóa: Exhibit 5-3 khuyên increase options, không giảm chúng." },
        { id: "e", text: "Keep the initial forecast as the main anchor and adjust only slightly", isCorrect: false, rationale: "Cơ chế: bám forecast đầu và điều chỉnh không đủ là anchoring bias. Bẫy: forecast ban đầu có thể dựa trên kinh nghiệm. Khóa: anchor không phải biện pháp chống overconfidence." },
      ],
      difficulty: "intermediate",
      conceptTested: "Exhibit 5-3: reducing overconfidence and confirmation bias",
      takeaway: "Muốn chống overconfidence, hãy chủ động tìm evidence có thể chứng minh mình sai thay vì chỉ thu thập điều xác nhận plan.",
    },
    {
      id: "q18",
      stem: "A company repeatedly advertises its recycling initiative so customers begin to expect the firm to act sustainably and become more likely to choose its products. Which concept best describes this deliberate influence?",
      options: [
        { id: "a", text: "Nudging", isCorrect: true, rationale: "Cơ chế: tổ chức dùng suggestion qua quảng cáo/CSR để 'hích' perception và decision của customers. Bẫy: quảng cáo cũng có thể frame thông tin. Khóa: deliberate organizational influence on expectations and choice = nudging." },
        { id: "b", text: "Anchoring bias", isCorrect: false, rationale: "Cơ chế: anchoring cần initial number/information làm điểm neo rồi adjustment không đủ; stem nhấn suggestion lặp lại định hình kỳ vọng. Bẫy: quảng cáo xuất hiện sớm có thể thành thông tin đầu. Khóa: không có anchor-and-adjustment pattern." },
        { id: "c", text: "Framing through selective perception", isCorrect: false, rationale: "Cơ chế: framing/selective perception mô tả cách presentation hoặc bộ lọc cá nhân làm nổi một phần thông tin. Bẫy: CSR message rõ ràng định khung hình ảnh công ty. Khóa: câu hỏi nhấn hành động chủ đích của tổ chức nhằm đổi decision, tức nudge." },
        { id: "d", text: "Confirmation bias", isCorrect: false, rationale: "Cơ chế: confirmation bias là người ra quyết định tìm/ưu tiên evidence xác nhận belief sẵn có. Bẫy: customers có thể chú ý quảng cáo hợp kỳ vọng xanh. Khóa: nguồn tác động trong stem là suggestion từ tổ chức, không phải search bias của customer." },
        { id: "e", text: "Contrast effect", isCorrect: false, rationale: "Cơ chế: contrast effect đánh giá một target bằng cách so với target vừa gặp trước đó. Bẫy: sản phẩm xanh có thể trông tốt hơn đối thủ. Khóa: stem không có comparison sequence; nó có nudge qua CSR advertising." },
      ],
      difficulty: "intermediate",
      conceptTested: "Nudging",
      takeaway: "Nudging là tổ chức chủ động dùng suggestion để định hình perception, expectation và decision; quảng cáo và CSR đều có thể tạo nudge.",
    },
  ],
  status: "ready",
  source:
    "Organizational Behavior (IM2017, Dr Truong Thi Lan Anh) — slide 'OB-Topic 2 - Perception and Common bias' + Reading 'Chapter 5 - Perceptual Processes' (Robbins & Judge, p94-110). Perception & attribution (R&J 2019); shortcuts & biases; decision making: rational model / bounded rationality / intuition; biases in decision; individual & organizational influences; 3 ethical criteria; three-stage model of creativity. Câu Nordell (The End of Bias, 2022) từ slide.",
};

const topic03: Chapter = {
  slug: "topic-03",
  order: 3,
  title: "Topic 03 — Personal Values & Valuing Diversity",
  bigIdea:
    "Personal values = niềm tin cơ bản về điều gì đúng/tốt/đáng mong muốn, xếp theo mức quan trọng (value system) — chúng giải thích emotion/motivation, định hình hành vi, và lộ ra khi ta phải trade-off. Vì values + personality chính là deep-level diversity, hiểu & tôn trọng khác biệt (thay vì để surface-level kích hoạt stereotype/discrimination) giúp đạt person-organization fit và quản trị đa dạng hiệu quả.",
  bigIdeaPillars: [
    {
      label: "Values là gì",
      body: "'Basic convictions about what is right, good, or desirable' (R&J 2019). Content + intensity attribute; xếp hạng → value system; lộ ra trong trade-off. Rokeach Value Survey; Schwartz.",
    },
    {
      label: "Values hình thành & đổi",
      body: "~90% set by age 10, lock-in ~20; đổi chỉ qua Significant Emotional Event (Massey); generational values (Veterans→Gen Z); VIA character strengths.",
    },
    {
      label: "Surface vs deep-level diversity",
      body: "Surface (age/gender/race/ethnicity/disability → dễ kích hoạt stereotype) vs deep-level (values/personality/work preferences → quan trọng dần khi hiểu nhau) (R&J p114); discrimination, stereotyping, stereotype threat.",
    },
    {
      label: "Fit & quản trị đa dạng",
      body: "Person-Organization Fit = value congruence (supplementary + complementary, Kristof 1996); ability (intellectual+physical) match job; manage diversity effectively; culture fit vs culture add, unconscious bias.",
    },
  ],
  learningObjectives: [
    "Định nghĩa values (basic convictions về right/good/desirable) và 2 attributes: content & intensity; giải thích value system & vai trò trong trade-off.",
    "Mô tả cách phân loại values: Rokeach Value Survey (terminal vs instrumental), Schwartz; và VIA character strengths.",
    "Giải thích generational values (Veterans → Gen Z) và cách personal values hình thành/đổi (Massey: ~90% by 10, lock-in ~20, Significant Emotional Event).",
    "Giải thích Person-Organization Fit = value congruence, phân biệt supplementary fit vs complementary fit (Kristof); culture fit vs culture add.",
    "Phân biệt surface-level vs deep-level diversity và giải thích vì sao deep-level (values/personality) quan trọng dần.",
    "Định nghĩa discrimination & stereotyping; nêu stereotype threat và 6 forms of discrimination in organizations (Exhibit 6-1).",
    "Nêu các biographical characteristics (age, gender, race/ethnicity, disability, hidden disabilities) và other differentiating characteristics (religion, sexual orientation & gender identity, cultural identity) liên quan OB.",
    "Phân biệt intellectual abilities (7 dimensions + GMA) và physical abilities (9 types) và ý nghĩa ability-job matching.",
    "Mô tả diversity management: positive diversity climate, diversity management, attract/select/develop/retain diverse employees.",
    "Giải thích implications for managers: chọn người vừa có ability vừa có value system khớp org; unconscious bias & 'right person, wrong place'.",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "Personal values → diversity: (A) values là gì, (B) phân loại & phát triển, (C) fit, (D) diversity & discrimination, (E) ability & quản trị đa dạng.",
    nodes: [
      {
        id: "val",
        label: "Personal values",
        group: "concept",
        sectionId: "s1",
        detail:
          "Niềm tin về right/good/desirable; nối trực tiếp với deep-level diversity.",
      },
      {
        id: "g_val",
        label: "A. Values là gì",
        group: "concept",
        parent: "val",
        sectionId: "s1",
        detail:
          "Định nghĩa values, content/intensity attribute, value system và trade-off.",
      },
      {
        id: "g_cls",
        label: "B. Phân loại & phát triển",
        group: "concept",
        parent: "val",
        sectionId: "s2",
        detail:
          "Rokeach, Schwartz, VIA, generational values và values development theo Massey.",
      },
      {
        id: "g_fit",
        label: "C. Person-Org Fit",
        group: "concept",
        parent: "val",
        sectionId: "s5",
        detail:
          "Value congruence giữa cá nhân và organization culture.",
      },
      {
        id: "g_div",
        label: "D. Diversity & discrimination",
        group: "concept",
        parent: "val",
        sectionId: "s6",
        detail:
          "Surface/deep-level diversity, discrimination, stereotyping và stereotype threat.",
      },
      {
        id: "g_abl",
        label: "E. Ability & quản trị đa dạng",
        group: "concept",
        parent: "val",
        sectionId: "s9",
        detail:
          "Ability-job match và diversity management để biến đa dạng thành performance.",
      },
      {
        id: "t_vdef",
        label: "Định nghĩa & attributes",
        group: "term",
        parent: "g_val",
        sectionId: "s1",
        detail:
          "Values có content attribute và intensity attribute; khi xếp hạng thành value system.",
      },
      {
        id: "t_cls",
        label: "Rokeach/Schwartz/VIA",
        group: "term",
        parent: "g_cls",
        sectionId: "s2",
        detail:
          "Terminal/instrumental values, Schwartz values và VIA character strengths.",
      },
      {
        id: "t_gen",
        label: "Generational values",
        group: "term",
        parent: "g_cls",
        sectionId: "s3",
        detail:
          "Veterans, Baby Boomers, Gen X, Gen Y/Millennials, Gen Z.",
      },
      {
        id: "t_dev",
        label: "Values development (Massey)",
        group: "term",
        parent: "g_cls",
        sectionId: "s4",
        detail:
          "~90% values set by age 10, lock-in around 20, later change via Significant Emotional Event.",
      },
      {
        id: "t_fit",
        label: "P-O Fit (supp/comp)",
        group: "term",
        parent: "g_fit",
        sectionId: "s5",
        detail:
          "Supplementary fit là giống tổ chức; complementary fit là bổ sung thứ tổ chức thiếu.",
      },
      {
        id: "t_div",
        label: "Surface/deep + threat",
        group: "term",
        parent: "g_div",
        sectionId: "s6",
        detail:
          "Surface-level dễ activate stereotypes; deep-level values/personality quan trọng dần.",
      },
      {
        id: "t_disc",
        label: "Forms of discrimination",
        group: "term",
        parent: "g_div",
        sectionId: "s7",
        detail:
          "Policies/practices, sexual harassment, intimidation, mockery, exclusion, incivility.",
      },
      {
        id: "t_bio",
        label: "Biographical & other",
        group: "term",
        parent: "g_div",
        sectionId: "s8",
        detail:
          "Age, gender, race/ethnicity, disability, religion, sexual orientation/gender identity, cultural identity.",
      },
      {
        id: "t_abl",
        label: "Intellectual & physical ability",
        group: "term",
        parent: "g_abl",
        sectionId: "s9",
        detail:
          "Ability là current capacity to perform job tasks: intellectual + physical.",
      },
      {
        id: "t_mgt",
        label: "Diversity management",
        group: "term",
        parent: "g_abl",
        sectionId: "s10",
        detail:
          "Programs/processes giúp mọi người nhạy cảm hơn với nhu cầu và khác biệt của người khác.",
      },
    ],
    edges: [
      { from: "val", to: "g_val", label: "nền" },
      { from: "val", to: "g_cls", label: "phân loại" },
      { from: "val", to: "g_fit", label: "fit" },
      { from: "val", to: "g_div", label: "diversity" },
      { from: "val", to: "g_abl", label: "quản trị" },
      { from: "g_val", to: "t_vdef", label: "define" },
      { from: "g_cls", to: "t_cls", label: "models" },
      { from: "g_cls", to: "t_gen", label: "cohort" },
      { from: "g_cls", to: "t_dev", label: "develop" },
      { from: "g_fit", to: "t_fit", label: "congruence" },
      { from: "g_div", to: "t_div", label: "levels" },
      { from: "g_div", to: "t_disc", label: "forms" },
      { from: "g_div", to: "t_bio", label: "chars" },
      { from: "g_abl", to: "t_abl", label: "ability" },
      { from: "g_abl", to: "t_mgt", label: "climate" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "Values là gì",
      blocks: [
        calloutBlock(
          "key",
          "Định nghĩa values",
          "Values là basic convictions about what is right, good, or desirable (R&J 2019, slide 5). Theo Schwartz (2009), values là beliefs, motivational construct, abstract goals ordered by importance, và là standards/criteria để đánh giá actions, people, events. Values giải thích emotion & motivation, ảnh hưởng attitudes & behaviors.",
        ),
        comparisonBlock(
          "2 attributes của values (R&J 2019, slide 7)",
          ["Attribute", "Nội dung"],
          [
            {
              label: "Content attribute",
              cells: [
                "Rằng một mode of conduct hoặc end-state là quan trọng.",
              ],
            },
            {
              label: "Intensity attribute",
              cells: [
                "Nó quan trọng đến mức nào; intensity giúp xếp hạng các values.",
              ],
            },
          ],
        ),
        calloutBlock(
          "insight",
          "Value system & trade-off",
          "Xếp hạng các value theo intensity tạo thành value system. Value chỉ thật sự hiện ra khi ta ở quyết định trade-off: chọn cái này và hy sinh cái kia. Hành vi khớp values thường tạo cảm giác tốt/motivated; hành vi lệch values dễ bị cảm nhận là low hoặc unmotivated.",
        ),
      ],
      keyTerms: [
        {
          term: "values",
          definition:
            "Basic convictions about what is right, good, or desirable.",
        },
        {
          term: "value system",
          definition:
            "Hierarchy of values ranked by intensity or importance.",
        },
        {
          term: "content attribute",
          definition:
            "Attribute cho biết một conduct hoặc end-state nào đó là important.",
        },
        {
          term: "intensity attribute",
          definition:
            "Attribute cho biết value đó quan trọng đến mức nào.",
        },
      ],
    },
    {
      id: "s2",
      heading: "Phân loại values: Rokeach, Schwartz, VIA",
      blocks: [
        comparisonBlock(
          "Rokeach Value Survey (RVS, 1973)",
          ["Loại", "Nội dung"],
          [
            {
              label: "Terminal values",
              cells: [
                "Các end-states mong muốn, tức mục tiêu đời người muốn đạt; ví dụ security, happiness, wisdom.",
              ],
            },
            {
              label: "Instrumental values",
              cells: [
                "Các mode of conduct hoặc means ưa thích để đạt terminal values; ví dụ honesty, ambition, responsibility.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Schwartz & VIA character strengths",
          "Schwartz xem values như abstract goals ordered by importance và dùng chúng làm standards/criteria. Values & value systems cũng đóng vai trò trung tâm trong motivation (Rokeach, 1973). VIA (Values in Action) — Character Strengths: biết & dùng character strengths có thể tăng happiness/well-being, meaning, relationships, quản stress và đạt goals.",
        ),
      ],
      keyTerms: [
        {
          term: "Rokeach Value Survey",
          definition:
            "Framework phân biệt terminal values và instrumental values.",
        },
        {
          term: "terminal values",
          definition:
            "Desired end-states or life goals a person wants to achieve.",
        },
        {
          term: "instrumental values",
          definition:
            "Preferred modes of conduct or means used to reach terminal values.",
        },
        {
          term: "VIA character strengths",
          definition:
            "Values in Action framework về character strengths gắn với well-being, meaning và goals.",
        },
      ],
    },
    {
      id: "s3",
      heading: "Generational values",
      blocks: [
        comparisonBlock(
          "Generational differences (R&J 2017; Howe & Strauss)",
          ["Thế hệ", "Mốc năm sinh"],
          [
            { label: "Veterans", cells: ["Before 1945"] },
            { label: "Baby boomers", cells: ["1945-1964"] },
            { label: "Gen X", cells: ["1965-1979"] },
            { label: "Gen Y (Millennials)", cells: ["1980-1999"] },
            { label: "Gen Z", cells: ["2000-2012"] },
          ],
        ),
        calloutBlock(
          "note",
          "Ý nghĩa",
          "Mỗi thế hệ mang shared values khác nhau nên kỳ vọng công việc, cách communicate và động lực có thể khác nhau. Mục tiêu không phải dán nhãn cá nhân theo cohort, mà là có ngôn ngữ để hiểu khác biệt liên thế hệ trong workplace.",
        ),
      ],
      keyTerms: [
        {
          term: "generational values",
          definition:
            "Shared values hình thành trong một thế hệ, có thể ảnh hưởng kỳ vọng và động lực công việc.",
        },
      ],
    },
    {
      id: "s4",
      heading: "Values development (Massey)",
      blocks: [
        flowBlock(
          "s4",
          "Cách personal values phát triển (Morris Massey)",
          "horizontal",
          [
            {
              id: "s4_age10",
              label: "~90% by age 10",
              group: "concept",
              detail:
                "Khoảng 90% values được set trước tuổi 10, chịu ảnh hưởng bởi culture, gender roles, ethnicity và age context.",
            },
            {
              id: "s4_lock",
              label: "Lock-in ~age 20",
              group: "concept",
              detail:
                "Đến khoảng tuổi 20, personal values tương đối lock-in và khó đổi bằng thông tin bình thường.",
            },
            {
              id: "s4_see",
              label: "S.E.E.",
              group: "concept",
              detail:
                "Sau lock-in, values chỉ đổi qua Significant Emotional Event đủ mạnh để thay một value bằng value khác.",
            },
          ],
          [
            { from: "s4_age10", to: "s4_lock", label: "ổn định" },
            { from: "s4_lock", to: "s4_see", label: "đổi khi" },
          ],
          "Impact factors: culture, gender roles, ethnicity, age. S.E.E. cho thấy values gắn mạnh với emotions.",
        ),
        calloutBlock(
          "key",
          "Significant Emotional Event (S.E.E.)",
          "S.E.E. là trải nghiệm đủ mạnh để khiến một người đổi value này lấy value khác (Massey, 2005). Sau tuổi khoảng 20, S.E.E. là cách values thay đổi; vì vậy personal values không chỉ là ý tưởng lý trí mà gắn với emotional experience.",
        ),
      ],
      keyTerms: [
        {
          term: "Significant Emotional Event (S.E.E.)",
          definition:
            "Trải nghiệm đủ mạnh để làm một người thay đổi value đã lock-in.",
        },
      ],
    },
    {
      id: "s5",
      heading: "Person-Organization Fit",
      blocks: [
        calloutBlock(
          "key",
          "Person-Organization Fit (P-O Fit)",
          "Person-Organization Fit là congruence giữa bộ work-related values của ứng viên và culture của tổ chức (R&J 2019, slide 30). Implication for managers: chọn ứng viên không chỉ có ability, experience, motivation mà còn có value system tương thích với organizational values. Khi lệch values, có thể thành right person, wrong place.",
        ),
        comparisonBlock(
          "2 types of fit — value congruence (Kristof, 1996)",
          ["Loại fit", "Nội dung"],
          [
            {
              label: "Supplementary fit",
              cells: [
                "Cá nhân có attributes giống với thành viên/tổ chức hiện tại.",
              ],
            },
            {
              label: "Complementary fit",
              cells: [
                "Cá nhân mang thứ mới, lấp khoảng trống còn thiếu của tổ chức hoặc được tổ chức bổ trợ lại.",
              ],
            },
          ],
        ),
        calloutBlock(
          "insight",
          "Culture fit vs Culture add",
          "Culture fit nhấn giống nhau, nên dễ trượt sang unconscious bias hoặc tuyển bản sao. Culture add nhấn bổ sung khác biệt có giá trị: vẫn quan tâm value congruence nhưng không đồng nhất 'phù hợp' với 'giống mình'. Đây là cầu nối sang diversity.",
        ),
      ],
      keyTerms: [
        {
          term: "person-organization fit",
          definition:
            "Congruence giữa work-related values của cá nhân và culture của tổ chức.",
        },
        {
          term: "supplementary fit",
          definition:
            "Fit do cá nhân giống hoặc chia sẻ attributes với tổ chức.",
        },
        {
          term: "complementary fit",
          definition:
            "Fit do cá nhân bổ sung thứ tổ chức thiếu hoặc được tổ chức bổ sung thứ cá nhân thiếu.",
        },
        {
          term: "culture add",
          definition:
            "Cách tuyển/đánh giá chú trọng khác biệt có giá trị, tránh cloning dưới nhãn culture fit.",
        },
      ],
    },
    {
      id: "s6",
      heading: "Diversity: surface vs deep-level + stereotype threat",
      blocks: [
        comparisonBlock(
          "Surface-level vs Deep-level diversity (R&J Ch.6, p114)",
          ["Loại", "Định nghĩa"],
          [
            {
              label: "Surface-level diversity",
              cells: [
                "Differences in easily perceived characteristics — gender, race, ethnicity, age, disability — that do not necessarily reflect how people think/feel but may activate stereotypes.",
              ],
            },
            {
              label: "Deep-level diversity",
              cells: [
                "Differences in values, personality, and work preferences that become progressively more important for determining similarity as people get to know one another better.",
              ],
            },
          ],
        ),
        calloutBlock(
          "key",
          "Discrimination, Stereotyping, Stereotype threat",
          "Discrimination về nghĩa trung tính là noting a difference between things; unfair discrimination là judging individuals based on stereotypes về demographic group của họ. Stereotyping = judging someone based on perception of the group they belong to. Stereotype threat là mức độ ta nội tâm đồng ý với định kiến tiêu cực về nhóm mình; nó có thể hạ performance/satisfaction và tăng absenteeism/turnover. Combat: đối xử như individual, không nhấn group difference.",
        ),
      ],
      keyTerms: [
        {
          term: "surface-level diversity",
          definition:
            "Easily perceived differences such as gender, race, ethnicity, age and disability.",
        },
        {
          term: "deep-level diversity",
          definition:
            "Differences in values, personality and work preferences that matter more as people know one another.",
        },
        {
          term: "discrimination",
          definition:
            "Noting a difference; unfair discrimination judges individuals based on group stereotypes.",
        },
        {
          term: "stereotyping",
          definition:
            "Judging someone based on perception of the group to which that person belongs.",
        },
        {
          term: "stereotype threat",
          definition:
            "Internalizing negative stereotypes about one's group, which can damage outcomes.",
        },
      ],
    },
    {
      id: "s7",
      heading: "Forms of discrimination",
      blocks: [
        comparisonBlock(
          "6 forms of discrimination in organizations (R&J Exhibit 6-1)",
          ["Hình thức", "Định nghĩa", "Ví dụ"],
          [
            {
              label: "Discriminatory policies or practices",
              cells: [
                "Hành động từ chối cơ hội/phần thưởng công bằng.",
                "Nhân viên lớn tuổi bị nhắm layoff vì lương cao.",
              ],
            },
            {
              label: "Sexual harassment",
              cells: [
                "Advances/hành vi tình dục tạo môi trường thù địch.",
                "Đưa khách đến strip club hoặc lan tin đồn tình dục.",
              ],
            },
            {
              label: "Intimidation",
              cells: [
                "Đe dọa/bắt nạt công khai nhắm nhóm cụ thể.",
                "Treo dây thòng lọng gần chỗ nhân viên da đen.",
              ],
            },
            {
              label: "Mockery and insults",
              cells: [
                "Đùa cợt/định kiến đi quá xa.",
                "Hỏi người Arab có mang bom không.",
              ],
            },
            {
              label: "Exclusion",
              cells: [
                "Loại khỏi cơ hội, social event hoặc mentoring, đôi khi vô ý.",
                "Phụ nữ tài chính bị giao vai marginal.",
              ],
            },
            {
              label: "Incivility",
              cells: [
                "Đối xử thiếu tôn trọng, ngắt lời hoặc phớt lờ ý kiến.",
                "Luật sư nam cắt lời/không phản hồi đồng nghiệp nữ.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "sexual harassment",
          definition:
            "Unwanted sexual advances or conduct that creates a hostile work environment.",
        },
        {
          term: "incivility",
          definition:
            "Disrespectful treatment such as interrupting, ignoring or demeaning others.",
        },
      ],
    },
    {
      id: "s8",
      heading: "Biographical & other differentiating characteristics",
      blocks: [
        calloutBlock(
          "note",
          "Biographical characteristics",
          "Biographical characteristics là personal characteristics — age, gender, race, length of tenure — objective và dễ lấy từ HR records; chúng đại diện cho surface-level diversity. Quy tắc đọc đúng: nhiều biographical differences không quan trọng với work outcomes; biến thiên trong nhóm thường lớn hơn giữa các nhóm.",
        ),
        comparisonBlock(
          "Biographical & other characteristics — điểm OB (R&J p117-123)",
          ["Đặc điểm", "Điểm chính OB"],
          [
            {
              label: "Age",
              cells: [
                "Đa số nghiên cứu: gần như không có liên hệ giữa tuổi và job performance; stereotype 'kém thích ứng' đang đổi.",
              ],
            },
            {
              label: "Gender",
              cells: [
                "Ít khác biệt thật về performance; khác biệt chủ yếu ở treatment/opportunity.",
              ],
            },
            {
              label: "Race & ethnicity",
              cells: [
                "Nhóm thiểu số báo cáo discrimination cao hơn trong interview, rating, pay và promotion.",
              ],
            },
            {
              label: "Disability",
              cells: [
                "UN Convention 2006; kết quả trái chiều: dependable nhưng lower expectations và ít được tuyển.",
              ],
            },
            {
              label: "Hidden disabilities",
              cells: [
                "ADHD, chronic illness, PTSD...; disclose có thể giúp accommodation nhưng sợ stigma.",
              ],
            },
            {
              label: "Religion",
              cells: [
                "Cấm phân biệt tôn giáo; ví dụ hijab trong case Samantha Elauf/Abercrombie.",
              ],
            },
            {
              label: "Sexual orientation & gender identity",
              cells: [
                "LGBT policy/legal protection không đồng bộ; nhiều organization tự có policy bảo vệ.",
              ],
            },
            {
              label: "Cultural identity",
              cells: [
                "Gắn với văn hóa gia đình/tổ tiên, kéo dài cả đời; organization cần tôn trọng và linh hoạt.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "biographical characteristics",
          definition:
            "Objective personal characteristics such as age, gender, race and tenure, often available in HR records.",
        },
        {
          term: "hidden disabilities",
          definition:
            "Invisible conditions such as ADHD, chronic illness or PTSD that may require accommodation but can carry stigma.",
        },
      ],
    },
    {
      id: "s9",
      heading: "Ability: intellectual & physical",
      blocks: [
        calloutBlock(
          "key",
          "Ability",
          "Ability = an individual's current capacity to perform the various tasks in a job. Ability gồm intellectual abilities và physical abilities. Intellectual abilities = capacity to do mental activities — thinking, reasoning, problem solving. General Mental Ability (GMA) = overall factor of intelligence từ positive correlations giữa các dimensions.",
        ),
        comparisonBlock(
          "7 dimensions of intellectual ability (Exhibit 6-2)",
          ["Dimension", "Mô tả", "Job ví dụ"],
          [
            {
              label: "Number aptitude",
              cells: ["Tính toán nhanh & chính xác.", "Accountant"],
            },
            {
              label: "Verbal comprehension",
              cells: ["Hiểu điều đọc/nghe & quan hệ giữa các từ.", "Plant manager"],
            },
            {
              label: "Perceptual speed",
              cells: ["Nhận diện tương đồng/khác biệt thị giác nhanh.", "Fire investigator"],
            },
            {
              label: "Inductive reasoning",
              cells: ["Nhận ra chuỗi logic của vấn đề rồi giải.", "Market researcher"],
            },
            {
              label: "Deductive reasoning",
              cells: ["Dùng logic đánh giá hàm ý của luận điểm.", "Supervisor"],
            },
            {
              label: "Spatial visualization",
              cells: ["Hình dung vật thể khi đổi vị trí trong không gian.", "Interior decorator"],
            },
            {
              label: "Memory",
              cells: ["Ghi nhớ & gợi lại trải nghiệm.", "Salesperson"],
            },
          ],
        ),
        comparisonBlock(
          "9 physical abilities (Exhibit 6-3)",
          ["Nhóm", "Các ability"],
          [
            {
              label: "Strength factors",
              cells: [
                "Dynamic strength, Trunk strength, Static strength, Explosive strength.",
              ],
            },
            {
              label: "Flexibility factors",
              cells: ["Extent flexibility, Dynamic flexibility."],
            },
            {
              label: "Other factors",
              cells: ["Body coordination, Balance, Stamina."],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "ability",
          definition:
            "An individual's current capacity to perform the various tasks in a job.",
        },
        {
          term: "intellectual abilities",
          definition:
            "Capacity to do mental activities such as thinking, reasoning and problem solving.",
        },
        {
          term: "general mental ability (GMA)",
          definition:
            "Overall intelligence factor derived from positive correlations among intellectual dimensions.",
        },
        {
          term: "physical abilities",
          definition:
            "Capacity needed for tasks requiring stamina, dexterity, strength or similar physical factors.",
        },
      ],
    },
    {
      id: "s10",
      heading: "Diversity management & implications",
      blocks: [
        calloutBlock(
          "key",
          "Diversity management",
          "Diversity management là process & programs qua đó managers làm mọi người ý thức và nhạy cảm hơn với nhu cầu & khác biệt của người khác. Đây là chương trình cho tất cả mọi người, không chỉ vài nhóm. Positive diversity climate = môi trường inclusiveness & chấp nhận đa dạng; nó có thể giảm turnover, tăng sales/performance.",
        ),
        calloutBlock(
          "note",
          "Attract/Select/Develop/Retain diverse employees",
          "Target recruitment tới nhóm underrepresented; tạo diverse work groups tập trung mutual goals; managers cung cấp workplace flexibility để cân bằng organization goals và individual needs.",
        ),
        calloutBlock(
          "insight",
          "Implication tổng — nối values & diversity",
          "Chọn người vừa có ability vừa có value system khớp organization (P-O fit) nhưng tránh unconscious bias/cloning. Hướng tốt hơn là culture add và positive diversity climate. Đa dạng thành công khi được coi là everyone's business.",
        ),
        comparisonBlock(
          "Implementing diversity management strategies (sách, p126–128)",
          ["Mảng", "Nội dung"],
          [
            {
              label: "Attract – select – develop – retain",
              cells: [
                "Rà workforce xem nhóm nào underutilized (không hiện diện tương xứng ở top management); recruiting nhắm target (vd Microsoft khuyến khích nữ theo technology; Etsy mở lớp engineering + grant cho nữ coder rồi tuyển người giỏi nhất; McKinsey/BCG/Goldman tuyển lại phụ nữ đã rời workforce bằng phase-in programs); quảng cáo tuyển dụng thiếu women/minorities ở vị trí lãnh đạo gửi thông điệp xấu về diversity climate; selection: khi có protocol rõ + ưu tiên nondiscrimination thì QUALIFICATIONS quan trọng hơn hẳn đặc điểm nhân khẩu; người khác biệt nhân khẩu với đồng nghiệp dễ giảm commitment và rời đi — positive diversity climate giúp retention.",
              ],
            },
            {
              label: "Diversity in groups",
              cells: [
                "Nhóm cần cách nhìn chung + cohesion; diversity có thể HẠI hay LỢI tùy đặc điểm: demographic diversity (gender/race/ethnicity) nhìn chung không giúp cũng không hại performance; diversity về intelligence/conscientiousness/hứng thú teamwork là XẤU (đừng trộn người thấp các biến này vào); diversity về expertise/education là SỨC MẠNH; nhóm toàn người assertive muốn lãnh đạo (hoặc toàn follower) kém hơn nhóm mix; bất kể composition: leverage khác biệt bằng cách nhấn mạnh điểm TƯƠNG ĐỒNG giữa thành viên + leader nhấn higher-order goals & values.",
              ],
            },
            {
              label: "Diversity programs",
              cells: [
                "Chương trình hiệu quả có 3 thành phần: (1) dạy manager khung PHÁP LÝ về equal employment opportunity + đối xử công bằng bất kể nhân khẩu; (2) dạy manager cách diverse workforce phục vụ diverse market (khách hàng đa dạng) tốt hơn; (3) personal development practices làm bật skills/abilities của MỌI người, nhìn khác biệt góc nhìn như tài sản chung. Quốc tế: cần tailored approach (case TRANSCO Phần Lan p128 — global philosophy nhất quán nhưng policy riêng theo khung pháp lý/văn hóa từng nước).",
              ],
            },
          ],
        ),
        calloutBlock(
          "key",
          "So what — kiến thức này đổi hành động của bạn",
          "Values chỉ lộ ra khi phải trade-off — nên muốn biết giá trị thật (của mình hay của tổ chức), nhìn vào lựa chọn lúc khó, không nhìn tuyên ngôn. Hành động: trước khi nhận việc, so value system của mình với tổ chức (P-O fit) thay vì chỉ so lương; trong team, chủ động tìm deep-level diversity thay vì dừng ở surface-level; nhận diện stereotype threat để nó không bóp méo hiệu suất của chính bạn hoặc cách bạn đánh giá người khác. → Mắt xích môn học: values và deep-level diversity là \"nguyên liệu cá nhân\" mà nhóm (Topic 07) và team (Topic 09) lắp ráp; P-O Fit ở đây nối thẳng tới organizational culture — culture fit/add (Topic 11).",
        ),
      ],
      keyTerms: [
        {
          term: "diversity management",
          definition:
            "Process and programs that make everyone more aware of and sensitive to others' needs and differences.",
        },
        {
          term: "positive diversity climate",
          definition:
            "Work environment of inclusiveness and acceptance of diversity.",
        },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "An refuses to misuse customer data even when doing so could raise revenue, saying, 'Protecting privacy is the right thing to do.' What does An's statement most directly reveal?",
      options: [
        { id: "a", text: "A temporary mood caused by the revenue discussion", isCorrect: false, rationale: "Cơ chế: An nêu nguyên tắc right/wrong tương đối bền, không chỉ cảm xúc nhất thời. Bẫy: tranh luận đạo đức có thể gây mood mạnh. Khóa: mood là affect; value là conviction." },
        { id: "b", text: "A personal value: a basic conviction about what is right, good, or desirable", isCorrect: true, rationale: "Cơ chế: ưu tiên privacy dù mất revenue thể hiện conviction về điều đúng và đáng mong muốn. Bẫy: tưởng đây chỉ là một preference kinh doanh. Khóa: 'right thing to do' là tín hiệu của value." },
        { id: "c", text: "An's current ability to perform the data-analysis task", isCorrect: false, rationale: "Cơ chế: stem không nói An có đủ capacity hay skill hay không. Bẫy: quyết định liên quan customer data nên dễ nghĩ tới technical ability. Khóa: can do = ability; should do = value." },
        { id: "d", text: "A surface-level diversity characteristic visible to coworkers", isCorrect: false, rationale: "Cơ chế: privacy conviction là deep-level attribute, không phải đặc điểm dễ nhìn. Bẫy: values thuộc diversity nên dễ chọn sai tầng. Khóa: visible demographic cue ≠ value." },
        { id: "e", text: "The rational decision-making model itself", isCorrect: false, rationale: "Cơ chế: An có thể dùng value trong decision nhưng stem không mô tả sáu bước rational model. Bẫy: có trade-off revenue nên nghe như decision analysis. Khóa: value là tiêu chuẩn đánh giá, không phải quy trình." },
      ],
      difficulty: "basic",
      conceptTested: "Definition of values",
      takeaway: "Values là basic convictions về what is right, good, or desirable.",
    },
    {
      id: "q02",
      stem: "Lan values both honesty and career advancement, but when they conflict she refuses to mislead a client because honesty matters more to her. Which part of the values framework explains this priority?",
      options: [
        { id: "a", text: "The intensity attribute, because it ranks how important honesty is relative to advancement", isCorrect: true, rationale: "Cơ chế: Lan ưu tiên một value khi hai value xung đột, đúng chức năng degree of importance. Bẫy: thấy hai nội dung cụ thể rồi chọn content. Khóa: ranking giữa values = intensity." },
        { id: "b", text: "The content attribute, because it alone explains why one value outranks another", isCorrect: false, rationale: "Cơ chế: content cho biết honesty và advancement là điều gì được coi trọng, không cho biết cái nào đứng trên. Bẫy: tên value xuất hiện rõ trong stem. Khóa: what = content; how much = intensity." },
        { id: "c", text: "Surface-level diversity, because coworkers can observe Lan's final choice", isCorrect: false, rationale: "Cơ chế: quan sát được choice không biến value nền thành surface-level. Bẫy: behavior biểu lộ ra ngoài nên dễ nhầm với đặc điểm bề mặt. Khóa: values vẫn là deep-level diversity." },
        { id: "d", text: "Legal protection, because honesty is always a protected personal value", isCorrect: false, rationale: "Cơ chế: protected characteristics không dùng để xếp mức quan trọng của values. Bẫy: client deception có thể liên quan pháp luật. Khóa: câu hỏi là psychological priority, không phải legal status." },
        { id: "e", text: "Physical job intensity, because refusing the request requires effort", isCorrect: false, rationale: "Cơ chế: effort thể chất không liên quan hệ thống value của Lan. Bẫy: chữ intensity gợi cường độ công việc. Khóa: value intensity = importance, không phải exertion." },
      ],
      difficulty: "basic",
      conceptTested: "Content vs intensity attributes",
      takeaway: "Content = value nói về cái gì; intensity = nó quan trọng đến mức nào.",
    },
    {
      id: "q03",
      stem: "In the Rokeach Value Survey, honesty is best classified as...",
      options: [
        { id: "a", text: "a terminal value", isCorrect: false, rationale: "Cơ chế: terminal values là desired end-states như security/happiness. Bẫy: honesty nghe đáng mong muốn nên tưởng end-state. Khóa: honesty là cách hành xử." },
        { id: "b", text: "a physical ability", isCorrect: false, rationale: "Cơ chế: physical ability là strength/flexibility/stamina. Bẫy: honesty có thể giúp job performance nhưng không phải ability. Khóa: Rokeach phân loại values." },
        { id: "c", text: "an instrumental value", isCorrect: true, rationale: "Cơ chế: instrumental values là preferred modes of conduct; honesty là conduct. Bẫy: nhầm với terminal nếu chỉ nghĩ 'honesty is good'. Khóa: mode of conduct = instrumental." },
        { id: "d", text: "a biographical characteristic", isCorrect: false, rationale: "Cơ chế: biographical characteristics là age, gender, race, tenure. Bẫy: cả hai đều mô tả cá nhân. Khóa: honesty không lấy từ HR records." },
        { id: "e", text: "a form of discrimination", isCorrect: false, rationale: "Cơ chế: forms of discrimination gồm exclusion/incivility/... Bẫy: honesty có thể liên quan ethics. Khóa: RVS không phải discrimination taxonomy." },
      ],
      difficulty: "intermediate",
      conceptTested: "Terminal versus instrumental values",
      takeaway: "Instrumental values là means/mode of conduct; terminal values là end-states.",
    },
    {
      id: "q04",
      stem: "According to the generational ranges in the slides, Gen X is born in which period?",
      options: [
        { id: "a", text: "Before 1945", isCorrect: false, rationale: "Cơ chế: before 1945 là Veterans. Bẫy: chọn cohort đầu bảng. Khóa: Gen X nằm sau Baby Boomers." },
        { id: "b", text: "1945-1964", isCorrect: false, rationale: "Cơ chế: 1945-1964 là Baby boomers. Bẫy: nhầm X với boomers vì cả hai là thế hệ trước millennials. Khóa: Gen X là 1965-1979." },
        { id: "c", text: "1965-1979", isCorrect: true, rationale: "Cơ chế: slide range cho Gen X là 1965-1979. Bẫy: đôi khi tài liệu ngoài dùng range hơi khác, nhưng ở đây bám slide. Khóa: đúng spec topic." },
        { id: "d", text: "1980-1999", isCorrect: false, rationale: "Cơ chế: 1980-1999 là Gen Y/Millennials. Bẫy: X/Y gần nhau nên dễ đảo. Khóa: Gen Y sau Gen X." },
        { id: "e", text: "2000-2012", isCorrect: false, rationale: "Cơ chế: 2000-2012 là Gen Z. Bẫy: chọn cohort trẻ nhất. Khóa: Gen X là cohort trước Gen Y." },
      ],
      difficulty: "basic",
      conceptTested: "Generational values",
      takeaway: "Theo slide, Gen X = 1965-1979; range dùng đúng theo nguồn môn học.",
    },
    {
      id: "q05",
      stem: "In Massey's values development view, what can change values after they are locked in around age 20?",
      options: [
        { id: "a", text: "A routine performance appraisal", isCorrect: false, rationale: "Cơ chế: thông tin thường ngày không đủ mạnh để đổi value đã lock-in. Bẫy: appraisal có thể tạo behavior change. Khóa: spec nói change via Significant Emotional Event." },
        { id: "b", text: "A Significant Emotional Event (S.E.E.)", isCorrect: true, rationale: "Cơ chế: S.E.E. là trải nghiệm đủ mạnh để thay value này bằng value khác. Bẫy: nghe quá cảm tính, nhưng chính Massey nhấn emotion. Khóa: after ~20, S.E.E. là cơ chế đổi." },
        { id: "c", text: "A new job title alone", isCorrect: false, rationale: "Cơ chế: job title có thể đổi role, không tự động đổi values. Bẫy: workplace context ảnh hưởng hành vi. Khóa: phải là emotional event đủ mạnh." },
        { id: "d", text: "A surface-level diversity cue", isCorrect: false, rationale: "Cơ chế: surface cue như age/gender/race có thể activate stereotype, không phải cơ chế đổi values. Bẫy: cùng topic diversity. Khóa: values development nằm ở Massey/S.E.E." },
        { id: "e", text: "General Mental Ability", isCorrect: false, rationale: "Cơ chế: GMA là intellectual ability factor. Bẫy: người GMA cao học nhanh hơn. Khóa: học nhanh không đồng nghĩa đổi values lock-in." },
      ],
      difficulty: "intermediate",
      conceptTested: "Significant Emotional Event",
      takeaway: "Sau giai đoạn lock-in, values đổi qua Significant Emotional Event đủ mạnh.",
    },
    {
      id: "q06",
      stem: "Person-Organization Fit is primarily about congruence between...",
      options: [
        { id: "a", text: "a candidate's work-related values and the organization's culture", isCorrect: true, rationale: "Cơ chế: P-O Fit là value congruence giữa cá nhân và organization culture. Bẫy: dễ chỉ nghĩ ability/experience. Khóa: work-related values + culture là định nghĩa." },
        { id: "b", text: "a candidate's age and the average age of employees", isCorrect: false, rationale: "Cơ chế: age là surface-level characteristic, không phải core của P-O Fit. Bẫy: chữ fit nghe giống demographic matching. Khóa: P-O Fit không phải matching tuổi." },
        { id: "c", text: "a candidate's physical strength and salary level", isCorrect: false, rationale: "Cơ chế: physical strength thuộc ability; salary không phải organization culture. Bẫy: fit với job demand có thể cần strength. Khóa: P-O Fit nhấn values/culture." },
        { id: "d", text: "a manager's decision biases and available information", isCorrect: false, rationale: "Cơ chế: đây là Topic 02 decision bias context. Bẫy: fit có thể bị bias khi tuyển. Khóa: định nghĩa P-O Fit không nói decision biases." },
        { id: "e", text: "a person's stereotypes and group identity only", isCorrect: false, rationale: "Cơ chế: stereotypes liên quan discrimination. Bẫy: diversity context. Khóa: P-O Fit là value congruence, không phải stereotype match." },
      ],
      difficulty: "basic",
      conceptTested: "Person-Organization Fit",
      takeaway: "P-O Fit = congruence giữa work-related values của cá nhân và culture của tổ chức.",
    },
    {
      id: "q07",
      stem: "A firm hires someone because she brings a missing skill and perspective the current team lacks. Which fit is emphasized?",
      options: [
        { id: "a", text: "Supplementary fit", isCorrect: false, rationale: "Cơ chế: supplementary fit là giống với organization/current members. Bẫy: vẫn là một loại value congruence. Khóa: stem nói brings a missing skill/perspective." },
        { id: "b", text: "Surface-level fit", isCorrect: false, rationale: "Cơ chế: surface-level không phải loại P-O Fit trong Kristof. Bẫy: diversity language. Khóa: bổ sung cái thiếu là complementary." },
        { id: "c", text: "Stereotype threat", isCorrect: false, rationale: "Cơ chế: stereotype threat là nội tâm hóa định kiến tiêu cực về nhóm mình. Bẫy: perspective khác biệt có thể bị stereotype. Khóa: stem hỏi loại fit khi bổ sung thứ thiếu." },
        { id: "d", text: "Complementary fit", isCorrect: true, rationale: "Cơ chế: complementary fit là cá nhân mang thứ tổ chức thiếu hoặc hai bên bổ trợ nhau. Bẫy: 'fit' không luôn nghĩa là giống nhau. Khóa: missing skill and perspective." },
        { id: "e", text: "Incivility", isCorrect: false, rationale: "Cơ chế: incivility là đối xử thiếu tôn trọng. Bẫy: team hiện tại thiếu góc nhìn có thể dẫn tới incivility nếu quản trị kém. Khóa: case tuyển bổ sung là complementary fit." },
      ],
      difficulty: "intermediate",
      conceptTested: "Supplementary versus complementary fit",
      takeaway: "Supplementary = giống; complementary = bổ sung thứ còn thiếu.",
    },
    {
      id: "q08",
      stem: "Which characteristic is an example of deep-level diversity?",
      options: [
        { id: "a", text: "Age", isCorrect: false, rationale: "Cơ chế: age là surface-level diversity vì dễ perceived. Bẫy: age có thể ảnh hưởng shared experiences. Khóa: deep-level trong spec là values/personality/work preferences." },
        { id: "b", text: "Gender", isCorrect: false, rationale: "Cơ chế: gender là surface-level diversity. Bẫy: gender stereotypes thường ảnh hưởng workplace. Khóa: visible/easily perceived không phải deep-level." },
        { id: "c", text: "Race", isCorrect: false, rationale: "Cơ chế: race là surface-level diversity và có thể activate stereotypes. Bẫy: race/ethnicity quan trọng trong diversity. Khóa: deep-level là cái lộ ra khi hiểu nhau hơn." },
        { id: "d", text: "Work values and personality", isCorrect: true, rationale: "Cơ chế: deep-level diversity gồm values, personality và work preferences. Bẫy: nó ít visible nên dễ quên. Khóa: values chính là cầu nối của Topic 03." },
        { id: "e", text: "Physical disability", isCorrect: false, rationale: "Cơ chế: disability trong definition surface-level khi dễ perceived. Bẫy: hidden disabilities có thể không visible. Khóa: option này không nói values/personality/work preferences." },
      ],
      difficulty: "basic",
      conceptTested: "Surface-level versus deep-level diversity",
      takeaway: "Deep-level diversity là khác biệt về values, personality và work preferences, quan trọng dần khi hiểu nhau.",
    },
    {
      id: "q09",
      stem: "Before a math-heavy promotion test, a capable female analyst worries that women are expected to perform worse; the fear consumes her attention and her score falls. Which concept best explains this pattern?",
      options: [
        { id: "a", text: "A discriminatory policy built into the promotion system", isCorrect: false, rationale: "Cơ chế: stem không nêu policy chặn cơ hội; performance giảm vì threat chiếm cognitive resources. Bẫy: kết quả bất lợi cho một demographic group dễ bị quy ngay thành policy discrimination. Khóa: policy là rào cản bên ngoài; stereotype threat là áp lực tâm lý." },
        { id: "b", text: "Stereotyping by the test evaluator", isCorrect: false, rationale: "Cơ chế: không có evaluator nào đánh giá analyst chỉ theo group trong stem. Bẫy: stereotype threat bắt nguồn từ stereotype xã hội. Khóa: stereotyping là phán xét của người khác; threat là nỗi lo xác nhận stereotype của nhóm mình." },
        { id: "c", text: "Stereotype threat", isCorrect: true, rationale: "Cơ chế: analyst ý thức stereotype tiêu cực về own group, lo xác nhận nó và mất attention nên performance giảm. Bẫy: năng lực thật vẫn cao nên dễ phủ nhận tác động. Khóa: own-group stereotype + performance pressure = stereotype threat." },
        { id: "d", text: "Surface-level diversity", isCorrect: false, rationale: "Cơ chế: gender là surface-level characteristic nhưng không tự giải thích cơ chế lo âu và giảm score. Bẫy: stem nêu rõ demographic category. Khóa: diversity mô tả khác biệt; threat mô tả tác động tâm lý của stereotype." },
        { id: "e", text: "Complementary fit", isCorrect: false, rationale: "Cơ chế: complementary fit là người mang skill/perspective còn thiếu vào tổ chức. Bẫy: đây là promotion context và analyst có năng lực. Khóa: fit không giải thích attention bị tiêu hao bởi stereotype." },
      ],
      difficulty: "intermediate",
      conceptTested: "Stereotype threat",
      takeaway: "Stereotype threat làm giảm outcomes vì cá nhân nội tâm hóa định kiến tiêu cực về nhóm của mình.",
    },
    {
      id: "q10",
      stem: "A senior analyst is repeatedly left out of informal mentoring lunches where key opportunities are discussed. Which form of discrimination is most directly shown?",
      options: [
        { id: "a", text: "Incivility", isCorrect: false, rationale: "Cơ chế: incivility là disrespect như interrupting/ignoring. Bẫy: being left out có thể cảm giác disrespect. Khóa: mất cơ hội mentoring/social event là exclusion." },
        { id: "b", text: "Exclusion", isCorrect: true, rationale: "Cơ chế: exclusion là loại khỏi cơ hội, social event hoặc mentoring, có thể vô ý. Bẫy: nếu chỉ nhìn thái độ thiếu lịch sự sẽ chọn incivility. Khóa: left out of mentoring lunches." },
        { id: "c", text: "Sexual harassment", isCorrect: false, rationale: "Cơ chế: sexual harassment cần unwanted sexual conduct/hostile environment. Bẫy: discrimination forms cùng bảng. Khóa: case không có sexual conduct." },
        { id: "d", text: "Intimidation", isCorrect: false, rationale: "Cơ chế: intimidation là đe dọa/bắt nạt công khai. Bẫy: exclusion có thể gây sợ bị bỏ rơi. Khóa: không có threat." },
        { id: "e", text: "Mockery and insults", isCorrect: false, rationale: "Cơ chế: mockery/insults là đùa cợt hoặc xúc phạm. Bẫy: bị bỏ rơi cũng đau nhưng không phải insult. Khóa: mentoring opportunity bị loại là exclusion." },
      ],
      difficulty: "intermediate",
      conceptTested: "Forms of discrimination",
      takeaway: "Exclusion có thể rất kín: bị loại khỏi mentoring, social events hoặc opportunities.",
    },
    {
      id: "q11",
      stem: "What is the main OB conclusion about age and job performance in the reading?",
      options: [
        { id: "a", text: "Age is strongly and consistently related to lower job performance", isCorrect: false, rationale: "Cơ chế: reading nói gần như không có liên hệ rõ giữa age và job performance. Bẫy: stereotype người lớn tuổi kém thích ứng. Khóa: không biến stereotype thành kết luận." },
        { id: "b", text: "Age has virtually no relationship with job performance in most research", isCorrect: true, rationale: "Cơ chế: đây là điểm OB chính: age không dự đoán performance mạnh như stereotype. Bẫy: vì age dễ thấy nên ta overuse nó. Khóa: biến thiên trong nhóm lớn hơn giữa nhóm." },
        { id: "c", text: "Only younger employees can adapt to change", isCorrect: false, rationale: "Cơ chế: đây là stereotype đang bị thách thức. Bẫy: nghe phổ biến trong workplace. Khóa: đọc theo evidence, không theo surface cue." },
        { id: "d", text: "Age is a deep-level diversity variable", isCorrect: false, rationale: "Cơ chế: age là surface-level diversity. Bẫy: cohort values có thể liên hệ tuổi. Khóa: dễ perceived = surface-level." },
        { id: "e", text: "Age determines a person's value system completely", isCorrect: false, rationale: "Cơ chế: generational values chỉ là shared tendencies, không quyết định hoàn toàn. Bẫy: quá khái quát cohort. Khóa: không dùng cohort để stereotyping." },
      ],
      difficulty: "intermediate",
      conceptTested: "Age and job performance",
      takeaway: "Age là surface-level cue yếu cho performance; đừng biến nó thành stereotype tuyển dụng/đánh giá.",
    },
    {
      id: "q12",
      stem: "Why can disclosure of a hidden disability be difficult for employees?",
      options: [
        { id: "a", text: "Because hidden disabilities are always unrelated to work", isCorrect: false, rationale: "Cơ chế: hidden disabilities có thể ảnh hưởng work và cần accommodation. Bẫy: invisible nên tưởng không liên quan. Khóa: không thấy không nghĩa là không tác động." },
        { id: "b", text: "Because disclosure may help accommodation but can also create stigma concerns", isCorrect: true, rationale: "Cơ chế: disclose có thể mở đường accommodation nhưng người lao động sợ stigma. Bẫy: chỉ nhìn một mặt benefit hoặc risk. Khóa: tension accommodation vs stigma." },
        { id: "c", text: "Because disclosure automatically creates complementary fit", isCorrect: false, rationale: "Cơ chế: complementary fit là bổ sung thứ tổ chức thiếu, không phải disclosure disability. Bẫy: cùng nói về khác biệt. Khóa: hidden disability liên quan accommodation/stigma." },
        { id: "d", text: "Because ADA removes all workplace concerns", isCorrect: false, rationale: "Cơ chế: law hỗ trợ protection/accommodation nhưng không xóa stigma thực tế. Bẫy: legal protection nghe như giải pháp hoàn toàn. Khóa: OB quan tâm treatment và perception." },
        { id: "e", text: "Because disclosure changes terminal values into instrumental values", isCorrect: false, rationale: "Cơ chế: terminal/instrumental là Rokeach values. Bẫy: cùng topic values/diversity. Khóa: không liên quan disability disclosure." },
      ],
      difficulty: "advanced",
      conceptTested: "Hidden disabilities and disclosure",
      takeaway: "Hidden disability disclosure có lợi cho accommodation nhưng rủi ro stigma làm quyết định này khó.",
    },
    {
      id: "q13",
      stem: "Which intellectual ability dimension is most directly required when an interior decorator visualizes how a room will look after furniture is rearranged?",
      options: [
        { id: "a", text: "Number aptitude", isCorrect: false, rationale: "Cơ chế: number aptitude là tính toán nhanh/chính xác. Bẫy: decorator cũng có thể tính kích thước. Khóa: case nhấn visualize objects after rearrangement." },
        { id: "b", text: "Verbal comprehension", isCorrect: false, rationale: "Cơ chế: verbal comprehension là hiểu words/relationships. Bẫy: decorator giao tiếp với khách hàng. Khóa: hình dung không gian là spatial." },
        { id: "c", text: "Spatial visualization", isCorrect: true, rationale: "Cơ chế: spatial visualization là hình dung vật thể khi đổi vị trí trong không gian. Bẫy: dễ chọn perceptual speed vì có visual. Khóa: rearranged room = spatial." },
        { id: "d", text: "Memory", isCorrect: false, rationale: "Cơ chế: memory là ghi nhớ và gợi lại trải nghiệm. Bẫy: cần nhớ layout cũ. Khóa: yêu cầu chính là visualize transformation." },
        { id: "e", text: "Deductive reasoning", isCorrect: false, rationale: "Cơ chế: deductive reasoning dùng logic đánh giá implications. Bẫy: design cũng có reasoning. Khóa: ví dụ trong Exhibit là spatial visualization." },
      ],
      difficulty: "intermediate",
      conceptTested: "Intellectual ability dimensions",
      takeaway: "Spatial visualization phù hợp khi công việc cần hình dung vật thể/không gian sau khi thay đổi vị trí.",
    },
    {
      id: "q14",
      stem: "Which set belongs to the physical ability category of flexibility factors?",
      options: [
        { id: "a", text: "Dynamic strength, trunk strength, static strength", isCorrect: false, rationale: "Cơ chế: đây là strength factors. Bẫy: đều là physical abilities. Khóa: flexibility gồm extent và dynamic flexibility." },
        { id: "b", text: "Extent flexibility and dynamic flexibility", isCorrect: true, rationale: "Cơ chế: physical ability Exhibit 6-3 phân flexibility factors thành extent flexibility và dynamic flexibility. Bẫy: dynamic xuất hiện cả dynamic strength nên dễ nhầm. Khóa: chữ flexibility đi với extent/dynamic." },
        { id: "c", text: "Body coordination, balance, stamina", isCorrect: false, rationale: "Cơ chế: đây là other factors. Bẫy: balance nghe linh hoạt. Khóa: other factors không phải flexibility factors." },
        { id: "d", text: "Number aptitude and memory", isCorrect: false, rationale: "Cơ chế: đây là intellectual abilities. Bẫy: cùng bảng ability. Khóa: physical ability không phải mental activity." },
        { id: "e", text: "Verbal comprehension and inductive reasoning", isCorrect: false, rationale: "Cơ chế: đây là intellectual dimensions. Bẫy: cũng thuộc ability. Khóa: hỏi physical flexibility factors." },
      ],
      difficulty: "basic",
      conceptTested: "Physical abilities",
      takeaway: "Physical ability có strength, flexibility và other factors; flexibility = extent + dynamic flexibility.",
    },
    {
      id: "q15",
      stem: "Which option best captures diversity management?",
      options: [
        { id: "a", text: "Programs that make everyone more aware of and sensitive to others' needs and differences", isCorrect: true, rationale: "Cơ chế: đây là definition của diversity management. Bẫy: nó không chỉ dành cho nhóm thiểu số. Khóa: everyone + awareness/sensitivity." },
        { id: "b", text: "Hiring only people who are similar to current employees", isCorrect: false, rationale: "Cơ chế: đó là cloning/culture fit cực đoan. Bẫy: có thể gọi là fit nhưng làm nghèo diversity. Khóa: diversity management không phải tuyển bản sao." },
        { id: "c", text: "Ignoring all demographic differences in every situation", isCorrect: false, rationale: "Cơ chế: treating as individuals không có nghĩa blind to needs/accommodation. Bẫy: muốn tránh stereotype nên bỏ qua hết khác biệt. Khóa: awareness and sensitivity, không phải phủ nhận khác biệt." },
        { id: "d", text: "Ranking personal values by intensity", isCorrect: false, rationale: "Cơ chế: ranking values tạo value system. Bẫy: values nối sang diversity. Khóa: diversity management là process/programs trong tổ chức." },
        { id: "e", text: "A threat caused by internalized negative stereotypes", isCorrect: false, rationale: "Cơ chế: đây là stereotype threat. Bẫy: cùng diversity chapter. Khóa: diversity management là can thiệp quản trị." },
      ],
      difficulty: "basic",
      conceptTested: "Diversity management",
      takeaway: "Diversity management là chương trình cho mọi người, giúp tăng awareness và sensitivity với khác biệt.",
    },
    {
      id: "q16",
      stem: "What is the best managerial implication from combining values and diversity?",
      options: [
        { id: "a", text: "Select only for technical ability; values and fit do not matter", isCorrect: false, rationale: "Cơ chế: spec nhấn chọn người vừa có ability vừa có value system phù hợp. Bẫy: ability quan trọng thật nhưng không đủ. Khóa: values định hình motivation/behavior." },
        { id: "b", text: "Use culture fit to hire people who feel exactly like current employees", isCorrect: false, rationale: "Cơ chế: đây là cloning dưới nhãn culture fit. Bẫy: P-O Fit cần value congruence. Khóa: fit không được biến thành unconscious bias." },
        { id: "c", text: "Avoid all deep-level differences because they always reduce similarity", isCorrect: false, rationale: "Cơ chế: deep-level differences trở nên quan trọng khi hiểu nhau nhưng không tự động xấu. Bẫy: confuse diversity with conflict. Khóa: quản trị tốt hướng tới culture add." },
        { id: "d", text: "Match ability and value system while avoiding unconscious bias and seeking culture add", isCorrect: true, rationale: "Cơ chế: đây là synthesis của topic: ability-job match + P-O Fit + positive diversity climate/culture add. Bẫy: nhiều người chọn một cực: chỉ ability hoặc chỉ giống văn hóa. Khóa: both ability and values, without cloning." },
        { id: "e", text: "Treat surface-level categories as reliable predictors of job performance", isCorrect: false, rationale: "Cơ chế: surface cues dễ kích hoạt stereotype và thường dự đoán kém. Bẫy: age/gender/race dễ thấy nên dễ overuse. Khóa: đánh giá cá nhân, ability và deep-level fit." },
      ],
      difficulty: "advanced",
      conceptTested: "Manager implications: ability, values and diversity",
      takeaway: "Manager cần cân bằng ability-job match, value congruence và culture add, đồng thời kiểm soát unconscious bias.",
    },
    {
      id: "q17",
      stem: "An HR director wants a diversity program that changes managerial practice rather than merely celebrating demographic differences. Which design best includes all three components of an effective program?",
      options: [
        { id: "a", text: "Teach equal-employment law and fair treatment, connect workforce diversity to serving diverse markets, and develop every employee's skills and abilities", isCorrect: true, rationale: "Cơ chế: phương án có đủ legal framework, business/market case và personal development cho MỌI người. Bẫy: mỗi thành phần riêng lẻ nghe đã giống một diversity program hoàn chỉnh. Khóa: effective program cần đủ cả ba." },
        { id: "b", text: "Teach legal compliance only and avoid discussing markets or employee development", isCorrect: false, rationale: "Cơ chế: legal framework là thành phần thứ nhất nhưng thiếu diverse-market logic và personal development. Bẫy: compliance là yêu cầu bắt buộc nên dễ bị coi là đủ. Khóa: nondiscrimination alone chưa tạo chương trình toàn diện." },
        { id: "c", text: "Focus only on marketing to diverse customers and leave internal practices unchanged", isCorrect: false, rationale: "Cơ chế: diverse market là thành phần thứ hai nhưng không có fair treatment hay phát triển employees. Bẫy: business case dễ thuyết phục lãnh đạo. Khóa: external market fit không thay thế internal inclusion." },
        { id: "d", text: "Offer development only to underrepresented groups and exclude everyone else", isCorrect: false, rationale: "Cơ chế: personal development phải làm bật skills/abilities của MỌI người. Bẫy: target support có thể cần thiết trong recruiting. Khóa: diversity management là chương trình cho toàn workforce, không chỉ một vài nhóm." },
        { id: "e", text: "Hire for demographic similarity so teams reach cohesion immediately", isCorrect: false, rationale: "Cơ chế: demographic cloning làm nghèo diversity và không thuộc ba thành phần chương trình. Bẫy: similarity có thể tăng cohesion ngắn hạn. Khóa: leverage diversity bằng fair systems, market understanding và development." },
      ],
      difficulty: "intermediate",
      conceptTested: "Three components of effective diversity programs",
      takeaway: "Diversity program hiệu quả kết hợp legal fairness, năng lực phục vụ diverse market và personal development cho mọi người.",
    },
  ],
  status: "ready",
  source:
    "Organizational Behavior (IM2017, Dr Truong Thi Lan Anh) — slide 'OB-Topic 3 - Personal values' + Reading 'Chapter 6 - Valuing diversity' (Robbins & Judge, p113-127). Values: định nghĩa & attributes, Rokeach Value Survey, Schwartz, generational values, values development (Massey/S.E.E.), Person-Organization Fit (Kristof supplementary/complementary), VIA character strengths. Diversity: surface/deep-level, discrimination (Exhibit 6-1), stereotype threat, biographical & other differentiating characteristics, ability (intellectual 7 dims + GMA; physical 9 — Exhibit 6-2/6-3), diversity management & positive diversity climate.",
};

const topic04: Chapter = {
  slug: "topic-04",
  order: 4,
  title: "Topic 04 — Emotions & Moods",
  bigIdea:
    "Emotions & moods (affect) là phần TỰ NHIÊN, không thể tách khỏi nơi làm việc — không phải kẻ thù của lý trí. Hiểu WHAT (emotion vs mood, positive/negative), nguồn gốc, WHY tại chỗ làm (emotional labor → dissonance, qua Affective Events Theory), và HOW quản (emotional intelligence + emotion regulation) để làm việc, lãnh đạo & phục vụ tốt hơn.",
  bigIdeaPillars: [
    {
      label: "WHAT — affect/emotion/mood",
      body: "Affect = dải cảm xúc rộng; Emotion (intense, có object, action-oriented, ngắn) vs Mood (ít intense, không rõ nguyên nhân, kéo dài; positive & negative affect) (R&J Exhibit 3-1). 6 universal emotions + moral emotions.",
    },
    {
      label: "Nguồn & tại nơi làm",
      body: "9 sources (personality/affect intensity, time of day, day of week, weather, stress, sleep, exercise, age, sex); tại nơi làm → Emotional labor (felt vs displayed) → Emotional dissonance (lệch → burnout); surface vs deep acting.",
    },
    {
      label: "Affective Events Theory",
      body: "Sự kiện tại nơi làm → phản ứng cảm xúc (điều tiết bởi personality/mood) → ảnh hưởng attitudes & behaviors (OCB, commitment, effort, intention to quit, deviance).",
    },
    {
      label: "HOW — quản lý",
      body: "Emotional Intelligence (perceive → understand → regulate; 2 approaches attributes/competencies) + emotion regulation (surface/deep acting, suppression, cognitive reappraisal, social sharing, mindfulness). Good management ≠ emotion-free; positive emotions → creativity & customer service.",
    },
  ],
  learningObjectives: [
    "Phân biệt affect, emotion, mood (Exhibit 3-1) và nêu 6 universal emotions + moral emotions.",
    "Giải thích positive affect vs negative affect (affective circumplex) và positivity offset.",
    "Nêu các nguồn của emotions & moods: personality (affect intensity), time of day, day of week, weather (illusory correlation), stress, sleep, exercise, age, sex.",
    "Giải thích emotional labor và phân biệt felt vs displayed emotions, surface acting vs deep acting.",
    "Định nghĩa emotional dissonance và vai trò mindfulness trong việc giảm emotional exhaustion.",
    "Mô tả Affective Events Theory (AET): work events → emotional reactions → attitudes & behaviors.",
    "Giải thích Emotional Intelligence (3 khả năng perceive/understand/regulate; 2 approaches: attributes vs competencies) và tranh luận về EI.",
    "Nêu emotion regulation và các techniques (surface/deep acting, emotional suppression, cognitive reappraisal, social sharing, mindfulness) + vấn đề đạo đức.",
    "Áp dụng emotions/moods vào các OB issues (selection, decision making, creativity, motivation, leadership, negotiation, customer service, deviance, safety) và implications for managers.",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "Emotions: (A) affect/emotion/mood, (B) nguồn, (C) tại nơi làm (labor/AET), (D) quản lý (EI/regulation), (E) OB applications.",
    nodes: [
      {
        id: "emo",
        label: "Emotions & moods",
        group: "concept",
        sectionId: "s1",
        detail:
          "Affect tự nhiên tại nơi làm; không phải kẻ thù lý trí.",
      },
      {
        id: "g_what",
        label: "A. Affect/emotion/mood",
        group: "concept",
        parent: "emo",
        sectionId: "s1",
        detail:
          "Phân biệt affect, emotion, mood; universal emotions và moral emotions.",
      },
      {
        id: "g_src",
        label: "B. Nguồn",
        group: "concept",
        parent: "emo",
        sectionId: "s3",
        detail:
          "Personality, time, day, weather, stress, sleep, exercise, age và sex.",
      },
      {
        id: "g_work",
        label: "C. Tại nơi làm",
        group: "concept",
        parent: "emo",
        sectionId: "s4",
        detail:
          "Emotional labor, dissonance và Affective Events Theory.",
      },
      {
        id: "g_mng",
        label: "D. Quản lý (EI/regulation)",
        group: "concept",
        parent: "emo",
        sectionId: "s7",
        detail:
          "Emotional intelligence và emotion regulation giúp quản cảm xúc đúng cách.",
      },
      {
        id: "g_app",
        label: "E. OB applications",
        group: "concept",
        parent: "emo",
        sectionId: "s9",
        detail:
          "Ứng dụng vào selection, decision, creativity, leadership, customer service và safety.",
      },
      {
        id: "t_aff",
        label: "Affect/emotion/mood + universal",
        group: "term",
        parent: "g_what",
        sectionId: "s1",
        detail:
          "Affect bao trùm emotion và mood; emotion intense/object-specific; mood kéo dài hơn.",
      },
      {
        id: "t_pn",
        label: "Positive/negative affect",
        group: "term",
        parent: "g_what",
        sectionId: "s2",
        detail:
          "Hai chiều mood trong affective circumplex; positivity offset là baseline hơi tích cực.",
      },
      {
        id: "t_src",
        label: "9 sources",
        group: "term",
        parent: "g_src",
        sectionId: "s3",
        detail:
          "Nguồn emotion/mood đến từ cá nhân, thời gian, stress, sleep, exercise, age, sex.",
      },
      {
        id: "t_lab",
        label: "Emotional labor (felt/displayed)",
        group: "term",
        parent: "g_work",
        sectionId: "s4",
        detail:
          "Displayed emotions có thể khác felt emotions theo display rules của organization.",
      },
      {
        id: "t_dis",
        label: "Dissonance & mindfulness",
        group: "term",
        parent: "g_work",
        sectionId: "s5",
        detail:
          "Lệch giữa felt và displayed emotions có thể gây emotional exhaustion; mindfulness giúp giảm.",
      },
      {
        id: "t_aet",
        label: "Affective Events Theory",
        group: "term",
        parent: "g_work",
        sectionId: "s6",
        detail:
          "Work events → emotional reactions → attitudes & behaviors.",
      },
      {
        id: "t_ei",
        label: "Emotional intelligence",
        group: "term",
        parent: "g_mng",
        sectionId: "s7",
        detail:
          "Perceive, understand và regulate emotions theo cascading model.",
      },
      {
        id: "t_reg",
        label: "Emotion regulation",
        group: "term",
        parent: "g_mng",
        sectionId: "s8",
        detail:
          "Nhận diện và điều chỉnh cảm xúc bằng suppression, reappraisal, sharing, mindfulness.",
      },
      {
        id: "t_app",
        label: "OB applications",
        group: "term",
        parent: "g_app",
        sectionId: "s9",
        detail:
          "Emotions ảnh hưởng selection, decision, creativity, motivation, leadership, negotiation, service, deviance và safety.",
      },
    ],
    edges: [
      { from: "emo", to: "g_what", label: "what" },
      { from: "emo", to: "g_src", label: "sources" },
      { from: "emo", to: "g_work", label: "work" },
      { from: "emo", to: "g_mng", label: "manage" },
      { from: "emo", to: "g_app", label: "apply" },
      { from: "g_what", to: "t_aff", label: "define" },
      { from: "g_what", to: "t_pn", label: "affect" },
      { from: "g_src", to: "t_src", label: "9 nguồn" },
      { from: "g_work", to: "t_lab", label: "labor" },
      { from: "g_work", to: "t_dis", label: "lệch" },
      { from: "g_work", to: "t_aet", label: "events" },
      { from: "g_mng", to: "t_ei", label: "EI" },
      { from: "g_mng", to: "t_reg", label: "regulate" },
      { from: "g_app", to: "t_app", label: "OB" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "WHAT: affect, emotion, mood + universal & moral emotions",
      blocks: [
        comparisonBlock(
          "Affect / Emotion / Mood (R&J Exhibit 3-1; slide 7)",
          ["Khái niệm", "Đặc điểm", "Ghi chú"],
          [
            {
              label: "Affect",
              cells: [
                "Dải cảm xúc rộng con người trải nghiệm.",
                "Bao trùm cả emotion và mood.",
              ],
            },
            {
              label: "Emotion",
              cells: [
                "Intense, hướng vào object cụ thể, do sự kiện cụ thể, rất ngắn, có facial expression, action-oriented.",
                "6 universal emotions: anger, fear, sadness, happiness, disgust, surprise.",
              ],
            },
            {
              label: "Mood",
              cells: [
                "Ít intense, nguyên nhân mơ hồ, kéo dài giờ/ngày, gồm nhiều emotion, cognitive hơn.",
                "Hai chiều: positive affect và negative affect.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Moral emotions",
          "Moral emotions là emotions có moral implications do phán xét tức thì về tình huống gây ra chúng. Ví dụ: sympathy với người khổ, guilt về hành vi sai của mình, anger về bất công, contempt với người vô đạo đức. Moral disgust khác disgust thường vì nó gắn với phán xét đạo đức. **Function of emotions (sách, p64):** emotions KHÔNG làm ta phi lý trí — nghiên cứu brain injury cho thấy PHẢI có khả năng trải nghiệm emotions thì mới rational được, vì emotions cung cấp bối cảnh để hiểu thế giới; người đang negative mood còn phân biệt thông tin thật/giả TỐT hơn người đang vui. Về đạo đức: moral judgments phần lớn dựa trên FEELINGS chứ không phải cognition (dù ta tưởng ranh giới đạo đức của mình là logic); cảm xúc chia sẻ trong nhóm dễ được coi là 'đúng', và ta phán xét out-group khắt khe hơn in-group với cùng vi phạm.",
        ),
      ],
      keyTerms: [
        {
          term: "affect",
          definition:
            "A broad range of feelings that people experience, including emotions and moods.",
        },
        {
          term: "emotion",
          definition:
            "Intense feeling directed at a specific object, short-lived and action-oriented.",
        },
        {
          term: "mood",
          definition:
            "Less intense feeling, often without a clear cause, lasting longer than an emotion.",
        },
        {
          term: "moral emotions",
          definition:
            "Emotions with moral implications because they arise from quick judgment about a situation.",
        },
      ],
    },
    {
      id: "s2",
      heading: "Positive vs negative affect",
      blocks: [
        comparisonBlock(
          "Positive affect vs Negative affect (Affective Circumplex)",
          ["Chiều", "Nội dung"],
          [
            {
              label: "Positive affect",
              cells: [
                "Mood dimension: high = excitement/enthusiasm/elation; low = boredom/depression/fatigue.",
              ],
            },
            {
              label: "Negative affect",
              cells: [
                "Mood dimension: high = nervousness/stress/anxiety; low = contentedness/calmness/serenity.",
              ],
            },
          ],
        ),
        calloutBlock(
          "insight",
          "Positivity offset & 3:1",
          "Positivity offset = xu hướng đa số người có mood hơi tích cực khi không có gì đặc biệt xảy ra. Emotions không thể hoàn toàn neutral. Slide thêm tỷ lệ positive:negative khoảng 3:1 để thriving (Fredrickson & Losada).",
        ),
      ],
      keyTerms: [
        {
          term: "positive affect",
          definition:
            "Mood dimension ranging from low boredom/depression/fatigue to high excitement/enthusiasm/elation.",
        },
        {
          term: "negative affect",
          definition:
            "Mood dimension ranging from low calmness/serenity to high nervousness/stress/anxiety.",
        },
        {
          term: "positivity offset",
          definition:
            "Tendency for most people to have a mildly positive mood when nothing special is happening.",
        },
      ],
    },
    {
      id: "s3",
      heading: "Nguồn của emotions & moods",
      blocks: [
        comparisonBlock(
          "9 nguồn của emotion/mood (R&J p64-67)",
          ["Nguồn", "Điểm chính"],
          [
            {
              label: "Personality (affect intensity)",
              cells: [
                "Affect intensity = khác biệt cá nhân về cường độ trải nghiệm cảm xúc.",
              ],
            },
            {
              label: "Time of day",
              cells: ["Positive affect thường đỉnh giữa ngày."],
            },
            {
              label: "Day of week",
              cells: [
                "Positive affect cao nhất Fri/Sat/Sun, thấp nhất Monday.",
              ],
            },
            {
              label: "Day of the week",
              cells: [
                "Day of the week: mood tích cực cao hơn về cuối tuần — Exhibit 3-3 so sánh Twitter mood theo giờ giữa Saturday/Monday/Thursday (sách, p66).",
              ],
            },
            {
              label: "Weather",
              cells: [
                "Thời tiết ít ảnh hưởng mood thật; ta thường rơi vào illusory correlation.",
              ],
            },
            {
              label: "Stress",
              cells: [
                "Stress dồn tích làm xấu mood và tăng negative emotion.",
              ],
            },
            {
              label: "Sleep",
              cells: [
                "Thiếu ngủ làm dễ cáu, risk-prone, giảm job satisfaction và phán đoán đạo đức.",
              ],
            },
            {
              label: "Exercise",
              cells: [
                "Tăng positive mood, mạnh nhất với người đang depressed.",
              ],
            },
            {
              label: "Age",
              cells: ["Positive mood tăng theo tuổi."],
            },
            {
              label: "Sex",
              cells: [
                "Phụ nữ trải nghiệm cảm xúc mạnh và giữ lâu hơn, biểu lộ nhiều hơn, trừ anger.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "affect intensity",
          definition:
            "Individual difference in the strength with which people experience emotions.",
        },
        {
          term: "illusory correlation",
          definition:
            "Perception of a relationship between two things when no real relationship exists.",
        },
      ],
    },
    {
      id: "s4",
      heading: "Emotional labor: felt vs displayed",
      blocks: [
        calloutBlock(
          "key",
          "Emotional Labor",
          "Emotional labor là tình huống nhân viên biểu lộ organizationally desired emotions trong tương tác tại nơi làm việc. Felt emotions = cảm xúc thật; Displayed emotions = cảm xúc tổ chức yêu cầu hoặc coi là phù hợp cho công việc. Hai lớp này có thể lệch nhau.",
        ),
        comparisonBlock(
          "Surface acting vs Deep acting",
          ["Cách", "Nội dung & hệ quả"],
          [
            {
              label: "Surface acting",
              cells: [
                "Giấu cảm xúc bên trong và đổi biểu lộ theo display rules; dễ dẫn đến emotional exhaustion, work-family conflict, insomnia, ít OCB và giảm satisfaction.",
              ],
            },
            {
              label: "Deep acting",
              cells: [
                "Đổi cảm xúc bên trong thật theo display rules; challenging hơn nhưng ít tốn kém tâm lý hơn, gắn dương với satisfaction & performance.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "emotional labor",
          definition:
            "Showing organizationally desired emotions during workplace interactions.",
        },
        {
          term: "felt emotions",
          definition:
            "Actual emotions a person experiences.",
        },
        {
          term: "displayed emotions",
          definition:
            "Emotions required by the organization and considered appropriate for a job.",
        },
        {
          term: "surface acting",
          definition:
            "Changing outward emotional display while hiding true internal feeling.",
        },
        {
          term: "deep acting",
          definition:
            "Trying to modify actual internal feelings to match required display rules.",
        },
      ],
    },
    {
      id: "s5",
      heading: "Emotional dissonance & mindfulness",
      blocks: [
        calloutBlock(
          "key",
          "Emotional dissonance",
          "Emotional dissonance là inconsistencies giữa cảm xúc người ta cảm thấy và cảm xúc họ thể hiện. Khi kéo dài, lệch này dẫn tới emotional exhaustion, burnout, giảm performance và job satisfaction.",
        ),
        calloutBlock(
          "note",
          "Mindfulness đối phó",
          "Mindfulness = đánh giá tình huống cảm xúc một cách khách quan và có chủ đích ngay lúc đó. Nó tương quan âm với emotional exhaustion và dương với satisfaction; quan trọng hơn, nó giúp người lao động định hình phản ứng hành vi tốt hơn thay vì phản ứng tự động.",
        ),
      ],
      keyTerms: [
        {
          term: "emotional dissonance",
          definition:
            "Inconsistency between the emotions people feel and the emotions they display.",
        },
        {
          term: "mindfulness",
          definition:
            "Purposeful, objective attention to an emotional situation in the present moment.",
        },
      ],
    },
    {
      id: "s6",
      heading: "Affective Events Theory (AET)",
      blocks: [
        flowBlock(
          "s6",
          "Affective Events Theory (R&J p69-70)",
          "horizontal",
          [
            {
              id: "s6_events",
              label: "Work events",
              group: "concept",
              detail:
                "Các sự kiện tại nơi làm việc, kể cả sự kiện nhỏ, là trigger ban đầu.",
            },
            {
              id: "s6_reactions",
              label: "Emotional reactions",
              group: "concept",
              detail:
                "Phản ứng cảm xúc được điều tiết bởi personality và current mood.",
            },
            {
              id: "s6_outcomes",
              label: "Attitudes & behaviors",
              group: "concept",
              detail:
                "Ảnh hưởng job satisfaction, OCB, commitment, effort, intention to quit và deviance.",
            },
          ],
          [
            { from: "s6_events", to: "s6_reactions", label: "trigger" },
            { from: "s6_reactions", to: "s6_outcomes", label: "shape" },
          ],
          "AET: cảm xúc là mắt xích giữa sự kiện và hành vi.",
        ),
        calloutBlock(
          "note",
          "2 thông điệp của AET",
          "Thứ nhất, cảm xúc cho biết cách work events ảnh hưởng performance và satisfaction. Thứ hai, đừng bỏ qua các sự kiện nhỏ: chúng tích lũy, rồi chuyển thành attitude và behavior.",
        ),
      ],
      keyTerms: [
        {
          term: "affective events theory (AET)",
          definition:
            "Model in which workplace events cause emotional reactions that influence attitudes and behaviors.",
        },
      ],
    },
    {
      id: "s7",
      heading: "Emotional Intelligence (EI)",
      blocks: [
        calloutBlock(
          "key",
          "Emotional Intelligence",
          "Emotional Intelligence là khả năng phát hiện và quản lý emotional cues và emotional information. Cascading model gồm 3 khả năng: perceive emotions in self & others, understand meaning of emotions, regulate emotions accordingly.",
        ),
        comparisonBlock(
          "2 approaches về EI",
          ["Cách nhìn", "Nội dung"],
          [
            {
              label: "As attributes",
              cells: [
                "Ability perceive/express/assimilate/understand/regulate emotion; EQ tương quan IQ, đo được và tăng theo tuổi.",
              ],
            },
            {
              label: "As competencies",
              cells: [
                "Bộ competencies học được qua coaching; có overlap với personality tests như Big Five.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Tranh luận EI",
          "EI tương quan với job performance nhưng không quá cao, vì nhiều phần được giải thích bởi emotional stability. Đo EI cũng khó, nhất là self-report. Dù vậy EI vẫn phổ biến và hữu ích vì nó đưa cảm xúc vào ngôn ngữ quản trị.",
        ),
      ],
      keyTerms: [
        {
          term: "emotional intelligence (EI)",
          definition:
            "Ability to detect and manage emotional cues and information.",
        },
        {
          term: "cascading model of EI",
          definition:
            "Model of EI: perceive emotions, understand emotions, then regulate emotions.",
        },
      ],
    },
    {
      id: "s8",
      heading: "Emotion regulation",
      blocks: [
        calloutBlock(
          "key",
          "Emotion regulation",
          "Emotion regulation là quá trình nhận diện và điều chỉnh cảm xúc mình cảm thấy. Emotion management ability là predictor mạnh của task performance và OCB, nhưng nó có chi phí nếu dùng sai kỹ thuật hoặc dùng quá nhiều.",
        ),
        comparisonBlock(
          "Emotion regulation techniques",
          ["Technique", "Nội dung"],
          [
            {
              label: "Surface acting / Deep acting",
              cells: [
                "Đổi biểu lộ bên ngoài hoặc đổi cảm xúc bên trong thật theo display rules.",
              ],
            },
            {
              label: "Emotional suppression",
              cells: [
                "Chặn/lờ phản ứng cảm xúc ban đầu; hữu ích trong khủng hoảng, nhưng dùng hằng ngày hại mental health và relationships.",
              ],
            },
            {
              label: "Cognitive reappraisal",
              cells: [
                "Đánh giá lại tình huống để đổi cảm xúc.",
              ],
            },
            {
              label: "Social sharing",
              cells: [
                "Chia sẻ cảm xúc với người khác để xử lý và điều chỉnh cảm xúc.",
              ],
            },
            {
              label: "Mindfulness",
              cells: [
                "Quan sát cảm xúc không phán xét và không phản ứng tự động.",
              ],
            },
          ],
        ),
        calloutBlock(
          "insight",
          "Đạo đức của emotion regulation",
          "Có tranh luận liệu kiểm soát cảm xúc có phải acting thiếu trung thực hay không. Nhưng 'fake it til you make it' cũng có mặt tích cực: giả vờ mood tốt có thể giúp mood tốt thật trong một số bối cảnh. Điểm mấu chốt là dùng regulation để làm việc lành mạnh, không để che giấu môi trường độc hại. **Influences & mặt trái (sách, p71–72):** không phải ai cũng regulate giỏi — người neuroticism cao khó kiểm soát mood; người self-esteem thấp ít cố sửa sad mood (thấy mình 'không xứng đáng vui'). Diversity trong nhóm làm người ta regulate NHIỀU hơn (trẻ hơn giữa nhóm già hơn; minority khi diversity thấp; majority race khi diversity cao) — một outcome có lợi của diversity. Mặt trái: đổi cảm xúc tốn effort và có thể làm cảm xúc MẠNH LÊN (cố tự thuyết phục hết sợ → tập trung vào cái sợ → sợ hơn); né trải nghiệm tiêu cực KÉM hiệu quả hơn chủ động tìm trải nghiệm tích cực. Suppression chỉ nên dùng khi khủng hoảng cấp tính; dùng hằng ngày bào mòn mental ability, emotional ability, health và relationships.",
        ),
      ],
      keyTerms: [
        {
          term: "emotion regulation",
          definition:
            "Process of identifying and modifying the emotions one feels.",
        },
        {
          term: "emotional suppression",
          definition:
            "Attempt to block or ignore an initial emotional response.",
        },
        {
          term: "cognitive reappraisal",
          definition:
            "Reframing a situation to change the emotional response to it.",
        },
      ],
    },
    {
      id: "s9",
      heading: "OB applications & implications for managers",
      blocks: [
        comparisonBlock(
          "OB applications of emotions & moods (R&J p72-74)",
          ["Lĩnh vực", "Vai trò cảm xúc/mood"],
          [
            {
              label: "Selection",
              cells: [
                "Xét EI khi tuyển cho việc cần social interaction cao.",
              ],
            },
            {
              label: "Decision making",
              cells: [
                "Positive emotions thường giúp quyết định tốt hơn; negative emotions ảnh hưởng tùy loại.",
              ],
            },
            {
              label: "Creativity",
              cells: [
                "Mood tốt, đặc biệt activating mood, thường tăng sáng tạo.",
              ],
            },
            {
              label: "Motivation",
              cells: [
                "Mood tốt có thể tăng nỗ lực và performance.",
              ],
            },
            {
              label: "Leadership",
              cells: [
                "Lãnh đạo truyền positive emotion giúp optimism, cooperation và task performance.",
              ],
            },
            {
              label: "Negotiation",
              cells: [
                "Cảm xúc ảnh hưởng chiến lược và kết quả đàm phán.",
              ],
            },
            {
              label: "Customer service",
              cells: [
                "Positive display cải thiện customer mood qua emotional contagion, từ đó nâng chất lượng dịch vụ.",
              ],
            },
            {
              label: "Job attitudes & deviance / safety",
              cells: [
                "Cảm xúc lan giữa nhà và việc; negative emotion tăng deviant behavior; mood xấu tăng tai nạn.",
              ],
            },
          ],
        ),
        calloutBlock(
          "key",
          "Implications for managers",
          "Emotions là phần tự nhiên của workplace; good management không phải tạo môi trường emotion-free. Positive emotions/moods hỗ trợ creativity; positive display cải thiện customer service; emotional leadership và EI giúp giải thích, dự đoán, motivate và engage người khác tốt hơn.",
        ),
        calloutBlock(
          "key",
          "So what — kiến thức này đổi hành động của bạn",
          "Cảm xúc không phải kẻ thù của lý trí — nó là dữ liệu. Hành động: đừng ra quyết định lớn lúc mood xấu; nếu công việc đòi emotional labor, tránh surface acting kéo dài (dẫn tới dissonance/burnout) — luyện deep acting/mindfulness; theo AET, job attitude là tích lũy của chuỗi sự kiện nhỏ hằng ngày → quản lý trải nghiệm nhỏ mỗi ngày thay vì chỉ sửa \"chính sách lớn\". → Mắt xích môn học: emotion là dữ liệu cảm xúc chảy vào attitudes (Topic 05, thành phần Affective của ABC) và, qua Emotional Intelligence, vào leadership (Topic 10) lẫn quản trị stress (Topic 12).",
        ),
      ],
      keyTerms: [
        {
          term: "emotional contagion",
          definition:
            "Process by which emotions transfer from one person to another.",
        },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "Which statement best distinguishes affect, emotions, and moods?",
      options: [
        { id: "a", text: "Affect is the broad category that includes emotions and moods", isCorrect: true, rationale: "Cơ chế: affect là dải cảm xúc rộng bao trùm emotion và mood. Bẫy: nhiều người dùng ba từ như synonyms. Khóa: affect là umbrella term." },
        { id: "b", text: "Moods are always more intense than emotions", isCorrect: false, rationale: "Cơ chế: emotions thường intense hơn moods. Bẫy: mood kéo dài nên tưởng mạnh hơn. Khóa: duration khác intensity." },
        { id: "c", text: "Emotions never have a specific object", isCorrect: false, rationale: "Cơ chế: emotions thường hướng vào object/sự kiện cụ thể. Bẫy: mood mới là trạng thái nguyên nhân mơ hồ. Khóa: object-specific là emotion." },
        { id: "d", text: "Affect refers only to positive feelings", isCorrect: false, rationale: "Cơ chế: affect bao gồm cả positive và negative feelings. Bẫy: affect nghe như affection/tích cực. Khóa: affective circumplex có cả negative affect." },
        { id: "e", text: "Emotions usually last for days, while moods last seconds", isCorrect: false, rationale: "Cơ chế: ngược lại: emotions ngắn hơn, moods kéo dài hơn. Bẫy: đảo duration. Khóa: emotion seconds/minutes; mood hours/days." },
      ],
      difficulty: "basic",
      conceptTested: "Affect versus emotion versus mood",
      takeaway: "Affect là umbrella; emotions intense/object-specific/ngắn; moods ít intense hơn, nguyên nhân mơ hồ và kéo dài hơn.",
    },
    {
      id: "q02",
      stem: "Which list contains the six universal emotions discussed in this topic?",
      options: [
        { id: "a", text: "Anger, fear, sadness, happiness, disgust, surprise", isCorrect: true, rationale: "Cơ chế: đây là bộ 6 universal emotions trong slide/R&J. Bẫy: các option khác trộn mood hoặc moral emotion. Khóa: anger-fear-sadness-happiness-disgust-surprise." },
        { id: "b", text: "Stress, anxiety, boredom, fatigue, calmness, serenity", isCorrect: false, rationale: "Cơ chế: đây chủ yếu là mood states trong positive/negative affect. Bẫy: đều là affective states. Khóa: universal emotions không phải affective circumplex labels." },
        { id: "c", text: "Guilt, sympathy, contempt, moral disgust, pride, shame", isCorrect: false, rationale: "Cơ chế: đây là moral-emotion style examples, không phải 6 universal emotions. Bẫy: moral emotions cũng ở s1. Khóa: universal list có surprise và happiness." },
        { id: "d", text: "Excitement, elation, enthusiasm, depression, fatigue, boredom", isCorrect: false, rationale: "Cơ chế: đây là positive affect high/low examples. Bẫy: có cảm xúc tích cực/tiêu cực thật. Khóa: không phải bộ 6 universal." },
        { id: "e", text: "Joy, trust, anticipation, submission, awe, remorse", isCorrect: false, rationale: "Cơ chế: đây không phải list được dùng trong spec/R&J slide. Bẫy: nghe giống taxonomy cảm xúc khác. Khóa: bám đúng nguồn môn học." },
      ],
      difficulty: "basic",
      conceptTested: "Six universal emotions",
      takeaway: "Bộ 6 universal emotions: anger, fear, sadness, happiness, disgust, surprise.",
    },
    {
      id: "q03",
      stem: "A worker feels irritated at a specific rude email for a few minutes. This is best classified as...",
      options: [
        { id: "a", text: "a mood because it is workplace related", isCorrect: false, rationale: "Cơ chế: workplace context không quyết định mood. Bẫy: nghĩ emotion chỉ là đời sống cá nhân. Khóa: object cụ thể + ngắn = emotion." },
        { id: "b", text: "an emotion because it has a specific object and is short-lived", isCorrect: true, rationale: "Cơ chế: rude email là object/sự kiện cụ thể; cảm xúc vài phút là short-lived. Bẫy: irritation có thể kéo dài thành mood nếu không còn object rõ. Khóa: specific object." },
        { id: "c", text: "positive affect because it is activating", isCorrect: false, rationale: "Cơ chế: irritation là negative, dù có activation. Bẫy: high activation không đồng nghĩa positive. Khóa: valence và activation khác nhau." },
        { id: "d", text: "emotional intelligence because it involves cues", isCorrect: false, rationale: "Cơ chế: EI là khả năng detect/manage cues, không phải cảm xúc hiện tại. Bẫy: email là emotional cue. Khóa: hỏi classification của feeling." },
        { id: "e", text: "positivity offset because nothing special happened", isCorrect: false, rationale: "Cơ chế: ở đây có sự kiện cụ thể: rude email. Bẫy: vài phút nghe baseline mood. Khóa: positivity offset là khi không có gì đặc biệt." },
      ],
      difficulty: "intermediate",
      conceptTested: "Emotion versus mood case",
      takeaway: "Specific object + short duration thường là emotion; mood ít object rõ và kéo dài hơn.",
    },
    {
      id: "q04",
      stem: "Nothing unusual has happened during a quiet morning, yet Lan reports feeling mildly upbeat rather than emotionally neutral. Which concept best explains her baseline mood?",
      options: [
        { id: "a", text: "Emotional labor, because Lan is displaying positivity required by her job", isCorrect: false, rationale: "Cơ chế: stem nói Lan thật sự feels upbeat và không nêu display rule. Bẫy: workplace positivity dễ bị đọc thành nụ cười nghề nghiệp. Khóa: emotional labor là quản trị display; positivity offset là baseline felt mood." },
        { id: "b", text: "Positivity offset, because people often feel mildly positive when nothing special is happening", isCorrect: true, rationale: "Cơ chế: quiet morning không có trigger nhưng baseline của Lan vẫn hơi positive. Bẫy: tưởng neutral phải bằng zero affect. Khóa: nothing special + mildly upbeat là positivity offset." },
        { id: "c", text: "Emotional dissonance, because Lan's felt and displayed emotions conflict", isCorrect: false, rationale: "Cơ chế: stem không có chênh lệch giữa felt và displayed emotion. Bẫy: 'rather than neutral' nghe như hai trạng thái xung đột. Khóa: dissonance cần felt-display mismatch." },
        { id: "d", text: "Affective Events Theory, because a positive workplace event caused the mood", isCorrect: false, rationale: "Cơ chế: không có event cụ thể nào trong stem. Bẫy: AET thường giải thích mood tại nơi làm việc. Khóa: absence of event là dấu hiệu của baseline offset." },
        { id: "e", text: "Illusory correlation, because Lan falsely links weather to her mood", isCorrect: false, rationale: "Cơ chế: stem không nêu weather hay một liên hệ tưởng tượng. Bẫy: quiet morning có thể gợi điều kiện môi trường. Khóa: positivity offset không cần external cause." },
      ],
      difficulty: "basic",
      conceptTested: "Positive affect and positivity offset",
      takeaway: "Positivity offset là baseline hơi tích cực khi không có sự kiện đặc biệt.",
    },
    {
      id: "q05",
      stem: "A manager insists rainy weather makes everyone unhappy, even though data show little real effect. Which concept is most relevant?",
      options: [
        { id: "a", text: "Affect intensity", isCorrect: false, rationale: "Cơ chế: affect intensity là khác biệt cá nhân về cường độ cảm xúc. Bẫy: manager nói cảm xúc mạnh. Khóa: case nói liên hệ thời tiết-mood không có bằng chứng." },
        { id: "b", text: "Illusory correlation", isCorrect: true, rationale: "Cơ chế: illusory correlation là thấy liên hệ giữa hai thứ vốn không liên quan. Bẫy: thời tiết được nghĩ là nguồn mood. Khóa: data show little effect." },
        { id: "c", text: "Deep acting", isCorrect: false, rationale: "Cơ chế: deep acting là đổi cảm xúc thật theo display rules. Bẫy: unhappy workers có thể phải acting. Khóa: không có display rule trong stem." },
        { id: "d", text: "Cognitive reappraisal", isCorrect: false, rationale: "Cơ chế: reappraisal là đánh giá lại situation để đổi emotion. Bẫy: manager cần reappraise, nhưng concept được hỏi là false weather link. Khóa: illusory correlation." },
        { id: "e", text: "Affective Events Theory", isCorrect: false, rationale: "Cơ chế: AET nói work events → emotions → behaviors. Bẫy: weather là event. Khóa: case nhấn belief sai về relation." },
      ],
      difficulty: "intermediate",
      conceptTested: "Sources of emotions: weather and illusory correlation",
      takeaway: "Weather thường bị over-attributed cho mood vì illusory correlation.",
    },
    {
      id: "q06",
      stem: "Which statement about sources of emotions and moods is most consistent with R&J?",
      options: [
        { id: "a", text: "Positive affect is usually lowest on Friday and highest on Monday", isCorrect: false, rationale: "Cơ chế: R&J nêu positive affect thường cao Fri/Sat/Sun và thấp Monday. Bẫy: đảo day-of-week effect. Khóa: Monday thấp, weekend cao." },
        { id: "b", text: "Sleep deprivation can increase irritability and impair ethical judgment", isCorrect: true, rationale: "Cơ chế: thiếu ngủ làm dễ cáu, risk-prone, giảm satisfaction và phán đoán đạo đức. Bẫy: nghĩ sleep chỉ ảnh hưởng năng lượng. Khóa: irritability + ethical judgment." },
        { id: "c", text: "Positive moods generally decrease with age", isCorrect: false, rationale: "Cơ chế: positive mood tăng theo tuổi. Bẫy: stereotype người già tiêu cực. Khóa: age source trong R&J nói tăng positive mood." },
        { id: "d", text: "Exercise has no relationship with positive mood", isCorrect: false, rationale: "Cơ chế: exercise tăng positive mood, đặc biệt với người depressed. Bẫy: nghĩ exercise chỉ là sức khỏe thể chất. Khóa: mood source." },
        { id: "e", text: "Sex differences imply one sex is always better at emotional labor", isCorrect: false, rationale: "Cơ chế: R&J nói khác biệt về intensity/duration/display, không kết luận always better. Bẫy: biến khác biệt thành stereotype. Khóa: tránh overgeneralization." },
      ],
      difficulty: "intermediate",
      conceptTested: "Sources of emotions and moods",
      takeaway: "Sleep, day-of-week, exercise, age và sex đều liên quan emotion/mood, nhưng cần đọc theo evidence, không stereotype.",
    },
    {
      id: "q07",
      stem: "A receptionist feels annoyed but smiles warmly because the job requires it. The smile is best described as...",
      options: [
        { id: "a", text: "a felt emotion", isCorrect: false, rationale: "Cơ chế: felt emotion là cảm xúc thật bên trong, ở đây là annoyance. Bẫy: smile là emotion expression. Khóa: job requires it = displayed." },
        { id: "b", text: "a displayed emotion", isCorrect: true, rationale: "Cơ chế: displayed emotions là cảm xúc organization yêu cầu hoặc coi là phù hợp. Bẫy: smile có thể thật trong case khác. Khóa: despite feeling annoyed + job requires." },
        { id: "c", text: "positivity offset", isCorrect: false, rationale: "Cơ chế: positivity offset là baseline mood hơi tích cực. Bẫy: smile positive. Khóa: đây là display rule trong emotional labor." },
        { id: "d", text: "affect intensity", isCorrect: false, rationale: "Cơ chế: affect intensity là độ mạnh trải nghiệm emotion. Bẫy: annoyed có thể mạnh/yếu. Khóa: câu hỏi phân biệt felt/displayed." },
        { id: "e", text: "moral disgust", isCorrect: false, rationale: "Cơ chế: moral disgust là moral emotion trước điều sai trái. Bẫy: annoyed có thể liên quan moral judgment. Khóa: smile theo yêu cầu công việc." },
      ],
      difficulty: "basic",
      conceptTested: "Emotional labor: felt versus displayed emotions",
      takeaway: "Displayed emotions là cảm xúc được thể hiện theo yêu cầu vai trò, dù felt emotions có thể khác.",
    },
    {
      id: "q08",
      stem: "Which example best illustrates deep acting?",
      options: [
        { id: "a", text: "Suppressing anger while still feeling angry inside", isCorrect: false, rationale: "Cơ chế: suppress/che biểu lộ khi cảm xúc trong vẫn giữ là surface acting/suppression. Bẫy: đều là regulation. Khóa: deep acting đổi cảm xúc bên trong." },
        { id: "b", text: "Trying to genuinely feel empathy for a difficult customer before responding", isCorrect: true, rationale: "Cơ chế: deep acting cố thay đổi felt emotion để match display rules. Bẫy: nghe như giả vờ nhưng là đổi bên trong thật. Khóa: genuinely feel empathy." },
        { id: "c", text: "Ignoring all emotional cues during a service encounter", isCorrect: false, rationale: "Cơ chế: bỏ qua cues không phải deep acting và có thể giảm service quality. Bẫy: tưởng không cảm xúc là professional. Khóa: deep acting vẫn dùng emotion." },
        { id: "d", text: "Showing a smile while privately resenting the customer", isCorrect: false, rationale: "Cơ chế: đây là surface acting. Bẫy: có displayed emotion phù hợp. Khóa: privately resenting = felt không đổi." },
        { id: "e", text: "Ranking emotions from positive to negative", isCorrect: false, rationale: "Cơ chế: đây giống affect taxonomy hơn acting. Bẫy: topic positive/negative affect. Khóa: deep acting là behavioral regulation." },
      ],
      difficulty: "intermediate",
      conceptTested: "Surface acting versus deep acting",
      takeaway: "Deep acting thay đổi cảm xúc bên trong; surface acting chủ yếu thay đổi biểu lộ bên ngoài.",
    },
    {
      id: "q09",
      stem: "Long-term inconsistency between felt emotions and displayed emotions is called...",
      options: [
        { id: "a", text: "emotional contagion", isCorrect: false, rationale: "Cơ chế: contagion là cảm xúc lan từ người này sang người khác. Bẫy: display emotion có thể lây. Khóa: inconsistency felt/displayed = dissonance." },
        { id: "b", text: "emotional dissonance", isCorrect: true, rationale: "Cơ chế: emotional dissonance là lệch giữa cảm xúc cảm thấy và cảm xúc thể hiện. Bẫy: nghe giống cognitive dissonance. Khóa: felt vs displayed." },
        { id: "c", text: "positivity offset", isCorrect: false, rationale: "Cơ chế: positivity offset là baseline mood hơi tích cực. Bẫy: cùng nói mood. Khóa: không liên quan felt/displayed mismatch." },
        { id: "d", text: "general mental ability", isCorrect: false, rationale: "Cơ chế: GMA thuộc Topic 03 ability. Bẫy: quản emotion cần cognition. Khóa: không phải ability construct." },
        { id: "e", text: "stereotype threat", isCorrect: false, rationale: "Cơ chế: stereotype threat là nội tâm hóa định kiến nhóm. Bẫy: cũng gây stress/exhaustion. Khóa: emotional labor mismatch." },
      ],
      difficulty: "basic",
      conceptTested: "Emotional dissonance",
      takeaway: "Emotional dissonance kéo dài có thể gây emotional exhaustion, burnout và giảm satisfaction.",
    },
    {
      id: "q10",
      stem: "How can mindfulness help with emotional labor?",
      options: [
        { id: "a", text: "By eliminating all workplace emotions", isCorrect: false, rationale: "Cơ chế: emotions là tự nhiên, không thể eliminate. Bẫy: muốn hết exhaustion nên nghĩ bỏ cảm xúc. Khóa: mindfulness là quan sát/đánh giá khách quan." },
        { id: "b", text: "By objectively attending to the emotional situation and shaping a better response", isCorrect: true, rationale: "Cơ chế: mindfulness giúp đánh giá tình huống cảm xúc có chủ đích, giảm automatic reaction. Bẫy: tưởng mindfulness là thụ động. Khóa: objective attention + better response." },
        { id: "c", text: "By forcing surface acting in every interaction", isCorrect: false, rationale: "Cơ chế: surface acting kéo dài gây exhaustion. Bẫy: mindfulness có thể giúp display tốt hơn. Khóa: không phải ép giả vờ." },
        { id: "d", text: "By proving weather controls mood", isCorrect: false, rationale: "Cơ chế: weather-mood thường là illusory correlation. Bẫy: cùng section nguồn. Khóa: không liên quan mindfulness." },
        { id: "e", text: "By replacing emotional intelligence entirely", isCorrect: false, rationale: "Cơ chế: mindfulness là một technique, không thay toàn bộ EI. Bẫy: đều thuộc quản lý emotion. Khóa: EI rộng hơn." },
      ],
      difficulty: "intermediate",
      conceptTested: "Mindfulness and emotional exhaustion",
      takeaway: "Mindfulness giúp nhìn cảm xúc rõ hơn và phản ứng có chủ đích hơn, từ đó giảm emotional exhaustion.",
    },
    {
      id: "q11",
      stem: "Which sequence best represents Affective Events Theory?",
      options: [
        { id: "a", text: "Personality → values → culture fit → diversity climate", isCorrect: false, rationale: "Cơ chế: đây là Topic 03 logic values/diversity. Bẫy: personality có vai trò trong AET nhưng không phải sequence chính. Khóa: AET bắt đầu từ work events." },
        { id: "b", text: "Work events → emotional reactions → attitudes and behaviors", isCorrect: true, rationale: "Cơ chế: AET nối work events với emotional reactions rồi attitudes/behaviors. Bẫy: bỏ qua cảm xúc và nhảy thẳng event → behavior. Khóa: emotion là mắt xích giữa." },
        { id: "c", text: "Displayed emotions → universal emotions → weather", isCorrect: false, rationale: "Cơ chế: đây là các mảnh khác nhau của topic. Bẫy: đều liên quan emotion. Khóa: AET có work events và outcomes." },
        { id: "d", text: "Cognitive reappraisal → positivity offset → six universal emotions", isCorrect: false, rationale: "Cơ chế: reappraisal là regulation technique, không phải AET sequence. Bẫy: nghe giống process. Khóa: AET là event-driven." },
        { id: "e", text: "EI → GMA → intellectual ability → job performance", isCorrect: false, rationale: "Cơ chế: GMA/intellectual ability thuộc Topic 03. Bẫy: EI có performance link. Khóa: không phải AET." },
      ],
      difficulty: "basic",
      conceptTested: "Affective Events Theory",
      takeaway: "AET nói work events tạo emotional reactions, rồi các reactions này ảnh hưởng attitudes và behaviors.",
    },
    {
      id: "q12",
      stem: "In the cascading model of Emotional Intelligence, which ability comes first?",
      options: [
        { id: "a", text: "Regulate emotions accordingly", isCorrect: false, rationale: "Cơ chế: regulate là bước sau khi perceive và understand. Bẫy: quản lý cảm xúc nghe như mục tiêu chính nên chọn đầu. Khóa: phải nhận diện trước khi regulate." },
        { id: "b", text: "Perceive emotions in self and others", isCorrect: true, rationale: "Cơ chế: cascading model bắt đầu bằng perceive emotions. Bẫy: nhiều người nhảy thẳng sang control. Khóa: EI cascade = perceive → understand → regulate." },
        { id: "c", text: "Suppress emotions in public", isCorrect: false, rationale: "Cơ chế: suppression là emotion regulation technique, không phải EI cascade first ability. Bẫy: workplace norms thường yêu cầu suppression. Khóa: EI không đồng nghĩa suppression." },
        { id: "d", text: "Display organizationally desired emotions", isCorrect: false, rationale: "Cơ chế: displayed emotions thuộc emotional labor. Bẫy: EI giúp display tốt hơn. Khóa: cascade bắt đầu từ perceiving cues." },
        { id: "e", text: "Create positive emotions in customers", isCorrect: false, rationale: "Cơ chế: đây là OB application/customer service. Bẫy: là kết quả có thể có. Khóa: EI ability đầu tiên là perceive." },
      ],
      difficulty: "basic",
      conceptTested: "Emotional Intelligence cascading model",
      takeaway: "EI cascade bắt đầu bằng perceive emotions, sau đó understand meaning, rồi regulate.",
    },
    {
      id: "q13",
      stem: "Which critique of Emotional Intelligence is mentioned in the reading?",
      options: [
        { id: "a", text: "EI has no relationship to job performance at all", isCorrect: false, rationale: "Cơ chế: EI có tương quan với performance, chỉ không quá cao. Bẫy: critique không phải phủ nhận hoàn toàn. Khóa: correlation exists but debated." },
        { id: "b", text: "EI is hard to measure, especially with self-report", isCorrect: true, rationale: "Cơ chế: một tranh luận về EI là khó đo, đặc biệt self-report. Bẫy: EI phổ biến nên tưởng đo đơn giản. Khóa: measurement problem." },
        { id: "c", text: "EI is identical to weather effects on mood", isCorrect: false, rationale: "Cơ chế: weather là source of mood, EI là ability. Bẫy: cả hai thuộc emotions chapter. Khóa: không liên quan." },
        { id: "d", text: "EI applies only to non-social jobs", isCorrect: false, rationale: "Cơ chế: EI đặc biệt liên quan jobs cần social interaction. Bẫy: selection application. Khóa: social jobs mới cần chú ý EI hơn." },
        { id: "e", text: "EI removes the need for emotion regulation", isCorrect: false, rationale: "Cơ chế: regulate emotions là một phần EI; không remove regulation. Bẫy: nếu có EI cao thì tưởng tự động. Khóa: EI và regulation gắn nhau." },
      ],
      difficulty: "intermediate",
      conceptTested: "EI approaches and debate",
      takeaway: "EI hữu ích nhưng vẫn bị tranh luận vì overlap với emotional stability và khó đo chính xác.",
    },
    {
      id: "q14",
      stem: "A nurse reframes a stressful patient interaction as a chance to provide comfort, which changes her emotional response. Which technique is this?",
      options: [
        { id: "a", text: "Emotional suppression", isCorrect: false, rationale: "Cơ chế: suppression là chặn/lờ phản ứng cảm xúc, không đổi cách hiểu situation. Bẫy: cả hai đều regulation. Khóa: reframe = reappraisal." },
        { id: "b", text: "Cognitive reappraisal", isCorrect: true, rationale: "Cơ chế: cognitive reappraisal đánh giá lại tình huống để đổi cảm xúc. Bẫy: có thể giống deep acting vì đổi cảm xúc thật. Khóa: reframes the interaction." },
        { id: "c", text: "Illusory correlation", isCorrect: false, rationale: "Cơ chế: illusory correlation là thấy relation giả. Bẫy: nurse tạo meaning mới. Khóa: không có false correlation." },
        { id: "d", text: "Surface acting", isCorrect: false, rationale: "Cơ chế: surface acting đổi biểu lộ bên ngoài, cảm xúc trong không đổi. Bẫy: nurse có thể vẫn phục vụ lịch sự. Khóa: stem nói changes her emotional response." },
        { id: "e", text: "Affective intensity", isCorrect: false, rationale: "Cơ chế: affect intensity là trait về cường độ cảm xúc. Bẫy: stressful interaction có intensity. Khóa: technique là cognitive reappraisal." },
      ],
      difficulty: "intermediate",
      conceptTested: "Emotion regulation techniques",
      takeaway: "Cognitive reappraisal đổi cách hiểu tình huống để đổi cảm xúc, khác suppression hay surface acting.",
    },
    {
      id: "q15",
      stem: "A service employee's genuine positive display improves a customer's mood, which improves the service experience. Which concept best explains this transfer?",
      options: [
        { id: "a", text: "Emotional contagion", isCorrect: true, rationale: "Cơ chế: emotional contagion là cảm xúc lan từ người này sang người khác. Bẫy: customer service cũng liên quan emotional labor. Khóa: improves customer's mood = transfer." },
        { id: "b", text: "Stereotype threat", isCorrect: false, rationale: "Cơ chế: stereotype threat là nội tâm hóa stereotype tiêu cực. Bẫy: customer service có thể có bias nhưng không trong stem. Khóa: mood transfer là contagion." },
        { id: "c", text: "Randomness error", isCorrect: false, rationale: "Cơ chế: randomness error là decision bias Topic 02. Bẫy: service outcome có thể ngẫu nhiên. Khóa: cảm xúc lan truyền." },
        { id: "d", text: "Complementary fit", isCorrect: false, rationale: "Cơ chế: complementary fit thuộc Topic 03 P-O fit. Bẫy: employee-customer fit nghe hợp. Khóa: không phải fit taxonomy." },
        { id: "e", text: "Moral disgust", isCorrect: false, rationale: "Cơ chế: moral disgust là emotion trước điều sai trái. Bẫy: customer mood là emotion. Khóa: positive transfer = contagion." },
      ],
      difficulty: "basic",
      conceptTested: "OB application: customer service and emotional contagion",
      takeaway: "Customer service chịu ảnh hưởng mạnh từ emotional contagion: cảm xúc của employee có thể lan sang customer.",
    },
    {
      id: "q16",
      stem: "Which managerial implication is most consistent with this topic?",
      options: [
        { id: "a", text: "Managers should create emotion-free workplaces", isCorrect: false, rationale: "Cơ chế: emotions là phần tự nhiên của workplace. Bẫy: tưởng professional là không cảm xúc. Khóa: good management không phải emotion-free." },
        { id: "b", text: "Managers should ignore emotions because rationality is enough", isCorrect: false, rationale: "Cơ chế: emotions ảnh hưởng decision, creativity, motivation, service và safety. Bẫy: lý trí quan trọng nhưng không đủ. Khóa: affect không phải kẻ thù của lý trí." },
        { id: "c", text: "Positive emotions and emotional leadership can support creativity, service, motivation, and engagement", isCorrect: true, rationale: "Cơ chế: đây là implication tổng: positive emotions/moods giúp creativity/service; emotional leadership/EI giúp motivate và engage. Bẫy: đừng biến thành 'luôn vui vẻ'. Khóa: support chứ không guarantee." },
        { id: "d", text: "Surface acting should be maximized in every customer-facing role", isCorrect: false, rationale: "Cơ chế: surface acting kéo dài gây exhaustion và giảm outcomes. Bẫy: customer-facing roles cần display positive emotions. Khóa: deep acting/healthy regulation tốt hơn." },
        { id: "e", text: "Negative emotions are always useless and should be punished", isCorrect: false, rationale: "Cơ chế: negative emotions cũng cung cấp thông tin và có moral implications. Bẫy: thấy positive tốt rồi phủ định negative. Khóa: quản lý không phải trừng phạt emotion." },
      ],
      difficulty: "advanced",
      conceptTested: "Implications for managers",
      takeaway: "Manager cần hiểu và quản emotions, không cố xóa chúng khỏi workplace.",
    },
  ],
  status: "ready",
  source:
    "Organizational Behavior (IM2017, Dr Truong Thi Lan Anh) — slide 'OB-Topic 4 - Emotions' + Reading 'Chapter 3 - Emotions' (Robbins & Judge, p60-74). Affect/emotion/mood (Exhibit 3-1), 6 universal + moral emotions, positive/negative affect (affective circumplex) + positivity offset, sources of emotions/moods, emotional labor (felt/displayed, surface/deep acting), emotional dissonance & mindfulness, Affective Events Theory, emotional intelligence (cascading model), emotion regulation, OB applications. Ratio 3:1 (Fredrickson & Losada) từ slide.",
};

const topic05: Chapter = {
  slug: "topic-05",
  order: 5,
  title: "Topic 05 — Attitudes & Issues of Dissonance",
  bigIdea:
    "Attitude = câu đánh giá (favorable/unfavorable) về object/người/sự kiện, gồm 3 thành phần gắn chặt (cognitive–affective–behavioral). Con người khao khát consistency giữa attitude & behavior — khi bất tương thích (cognitive dissonance) sẽ tìm cách giảm. Trong OB, các major job attitudes (nổi bật job satisfaction & engagement) DỰ BÁO hành vi quan trọng: performance, OCB, và cách phản ứng khi bất mãn (EVLN: exit/voice/loyalty/neglect).",
  bigIdeaPillars: [
    {
      label: "WHAT — attitude & 3 components (ABC)",
      body: "Evaluative statements về object/người/sự kiện (R&J). Cognitive (belief/evaluation) + Affective (feeling) + Behavioral (tendency to act) — gắn chặt (Exhibit 2-1). Attitude→behavior mạnh hơn khi có direct experience.",
    },
    {
      label: "Consistency & cognitive dissonance",
      body: "Người ta tìm consistency; Festinger cognitive dissonance = bất tương thích giữa các attitude hoặc attitude–behavior; mong muốn giảm phụ thuộc importance / control / rewards. Moderators: importance, correspondence, accessibility, social pressure, direct experience.",
    },
    {
      label: "Major job attitudes",
      body: "Job satisfaction, job involvement, psychological empowerment, organizational commitment, POS, employee engagement (+ slide: job embeddedness, OCB). Đo satisfaction 2 approaches (single global rating / summation of facets); causes: job conditions, CSE, pay, CSR.",
    },
    {
      label: "Outcomes & phản ứng khi bất mãn",
      body: "Outcomes of satisfaction: job performance, OCB, customer satisfaction, life satisfaction. Dissatisfaction → EVLN (exit/voice/loyalty/neglect, 2 chiều active-passive × constructive-destructive) + CWB. Engagement vs satisfaction.",
    },
  ],
  learningObjectives: [
    "Định nghĩa attitude (evaluative statements) và đối chiếu 3 thành phần: cognitive, affective, behavioral (ABC model, Exhibit 2-1).",
    "Giải thích quan hệ attitude–behavior và các moderators (importance, correspondence, accessibility, social pressure, direct experience).",
    "Mô tả cognitive dissonance theory (Festinger) và 3 yếu tố quyết định mong muốn giảm dissonance (importance, control, rewards).",
    "So sánh các major job attitudes: job satisfaction, job involvement, psychological empowerment, organizational commitment, POS, employee engagement.",
    "Nêu 2 approaches đo job satisfaction: single global rating vs summation of job facets.",
    "Tóm tắt các nguyên nhân chính của job satisfaction (job conditions, personality/CSE, pay, CSR).",
    "Nêu 3 outcomes của job satisfaction: job performance, OCB, customer satisfaction (+ life satisfaction).",
    "Nêu 4 phản ứng của nhân viên khi bất mãn (EVLN: exit/voice/loyalty/neglect) và mối liên hệ với CWB.",
    "Phân biệt job satisfaction vs employee engagement và rút implications for managers.",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "Attitudes: (A) 3 components, (B) behavior & dissonance, (C) job attitudes, (D) satisfaction (đo/causes/outcomes), (E) dissatisfaction & engagement.",
    nodes: [
      {
        id: "att",
        label: "Attitudes",
        group: "concept",
        sectionId: "s1",
        detail: "Evaluative statements; gắn với behavior qua consistency & dissonance.",
      },
      {
        id: "g_abc",
        label: "A. 3 components (ABC)",
        group: "concept",
        parent: "att",
        sectionId: "s1",
        detail: "Cognitive, affective, behavioral components.",
      },
      {
        id: "g_beh",
        label: "B. Behavior & dissonance",
        group: "concept",
        parent: "att",
        sectionId: "s2",
        detail: "Consistency, dissonance và moderators của attitude–behavior link.",
      },
      {
        id: "g_ja",
        label: "C. Major job attitudes",
        group: "concept",
        parent: "att",
        sectionId: "s4",
        detail: "Các job attitudes chính trong OB.",
      },
      {
        id: "g_js",
        label: "D. Job satisfaction",
        group: "concept",
        parent: "att",
        sectionId: "s6",
        detail: "Đo lường, nguyên nhân và outcomes của job satisfaction.",
      },
      {
        id: "g_out",
        label: "E. Dissatisfaction & engagement",
        group: "concept",
        parent: "att",
        sectionId: "s8",
        detail: "Phản ứng khi bất mãn và engagement.",
      },
      {
        id: "t_abc",
        label: "Cognitive/Affective/Behavioral",
        group: "term",
        parent: "g_abc",
        sectionId: "s1",
        detail: "ABC model: belief/evaluation, feeling, tendency to act.",
      },
      {
        id: "t_diss",
        label: "Cognitive dissonance (Festinger)",
        group: "term",
        parent: "g_beh",
        sectionId: "s2",
        detail: "Bất tương thích giữa attitudes hoặc attitude và behavior.",
      },
      {
        id: "t_mod",
        label: "Moderators attitude→behavior",
        group: "concept",
        parent: "g_beh",
        sectionId: "s3",
        detail: "Importance, correspondence, accessibility, social pressure, direct experience.",
      },
      {
        id: "t_ja",
        label: "6 major job attitudes",
        group: "concept",
        parent: "g_ja",
        sectionId: "s4",
        detail: "Job satisfaction, involvement, empowerment, commitment, POS, engagement.",
      },
      {
        id: "t_meas",
        label: "Đo JS (2 approaches)",
        group: "concept",
        parent: "g_ja",
        sectionId: "s5",
        detail: "Single global rating và summation of job facets.",
      },
      {
        id: "t_cause",
        label: "Causes of JS",
        group: "concept",
        parent: "g_js",
        sectionId: "s6",
        detail: "Job conditions, personality/CSE, pay và CSR.",
      },
      {
        id: "t_outcome",
        label: "Outcomes of JS",
        group: "concept",
        parent: "g_js",
        sectionId: "s7",
        detail: "Performance, OCB, customer satisfaction và life satisfaction.",
      },
      {
        id: "t_evln",
        label: "EVLN + CWB",
        group: "concept",
        parent: "g_out",
        sectionId: "s8",
        detail: "Exit, voice, loyalty, neglect và counterproductive work behavior.",
      },
      {
        id: "t_eng",
        label: "Engagement vs satisfaction",
        group: "concept",
        parent: "g_out",
        sectionId: "s9",
        detail: "Engagement là involvement, satisfaction và enthusiasm với work.",
      },
    ],
    edges: [
      { from: "att", to: "g_abc", label: "ABC" },
      { from: "att", to: "g_beh", label: "link" },
      { from: "att", to: "g_ja", label: "job" },
      { from: "att", to: "g_js", label: "JS" },
      { from: "att", to: "g_out", label: "impact" },
      { from: "g_abc", to: "t_abc", label: "3 phần" },
      { from: "g_beh", to: "t_diss", label: "gap" },
      { from: "g_beh", to: "t_mod", label: "mạnh/yếu" },
      { from: "g_ja", to: "t_ja", label: "types" },
      { from: "g_ja", to: "t_meas", label: "measure" },
      { from: "g_js", to: "t_cause", label: "why" },
      { from: "g_js", to: "t_outcome", label: "so what" },
      { from: "g_out", to: "t_evln", label: "react" },
      { from: "g_out", to: "t_eng", label: "energy" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "WHAT: attitude & 3 components (ABC)",
      blocks: [
        calloutBlock(
          "key",
          "Attitude theo Robbins & Judge",
          "Attitudes are evaluative statements — either favorable or unfavorable — about objects, people, or events. Trong OB, attitude không chỉ là cảm xúc thoáng qua; nó là một câu đánh giá có thể nối sang belief, feeling và tendency to act.",
        ),
        comparisonBlock(
          "ABC model of attitude (Exhibit 2-1)",
          ["Thành phần", "Định nghĩa", "Ví dụ \"sếp bất công\""],
          [
            {
              label: "Cognitive component",
              cells: [
                "Opinion/belief/evaluation: phần “tôi nghĩ/đánh giá rằng...”",
                "“Sếp đã cho đồng nghiệp được tăng lương nhiều hơn tôi; điều này không công bằng.”",
              ],
            },
            {
              label: "Affective component",
              cells: [
                "Feeling/emotion: phần cảm xúc gắn với object/người/sự kiện.",
                "“Tôi cảm thấy tức giận, bị xem nhẹ, khó chịu với sếp.”",
              ],
            },
            {
              label: "Behavioral component",
              cells: [
                "Intention/tendency to behave: khuynh hướng hành động dựa trên attitude.",
                "“Tôi sẽ tìm cách phàn nàn, giảm nỗ lực, hoặc cân nhắc nghỉ việc.”",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Đừng tách ABC như 3 hộp rời",
          "Ba thành phần gắn chặt: một belief có thể kích hoạt feeling, rồi đẩy thành behavioral intention. Bài thi thường bẫy bằng cách mô tả một câu nghe giống “attitude chung”, nhưng yêu cầu nhận diện cognitive/affective/behavioral.",
        ),
      ],
      keyTerms: [
        {
          term: "Attitude",
          definition:
            "Evaluative statement favorable/unfavorable về object, people hoặc events.",
        },
        {
          term: "Cognitive component",
          definition: "Phần belief/opinion/evaluation của một attitude.",
        },
        {
          term: "Affective component",
          definition: "Phần feeling/emotion của một attitude.",
        },
        {
          term: "Behavioral component",
          definition: "Phần intention/tendency to act của một attitude.",
        },
      ],
    },
    {
      id: "s2",
      heading: "Cognitive dissonance & consistency",
      blocks: [
        calloutBlock(
          "key",
          "Festinger: cognitive dissonance",
          "Cognitive dissonance là bất tương thích mà một người cảm nhận giữa hai hoặc nhiều attitudes, hoặc giữa attitude và behavior. Vì con người muốn consistency, họ có động lực giảm dissonance bằng cách đổi attitude, đổi behavior, hoặc hợp lý hóa tình huống.",
        ),
        comparisonBlock(
          "Điều gì làm người ta muốn giảm dissonance mạnh hơn?",
          ["Factor", "Logic trong dissonance"],
          [
            {
              label: "Importance",
              cells: [
                "Nếu vấn đề quan trọng với self-image/giá trị cá nhân, dissonance khó bỏ qua hơn.",
              ],
            },
            {
              label: "Influence/Control",
              cells: [
                "Nếu cá nhân thấy mình có quyền kiểm soát behavior/situation, họ cảm thấy trách nhiệm cao hơn và muốn giảm dissonance mạnh hơn.",
              ],
            },
            {
              label: "Rewards",
              cells: [
                "Rewards lớn có thể giúp rationalize inconsistency: “Tôi làm vậy vì phần thưởng đủ lớn.”",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Dissonance là cognitive, không chỉ emotional discomfort",
          "Người học dễ nhầm dissonance với “cảm thấy khó chịu”. Cảm xúc khó chịu có thể đi kèm, nhưng khái niệm cốt lõi là inconsistency trong cognition/attitude/behavior.",
        ),
      ],
      keyTerms: [
        {
          term: "Cognitive dissonance",
          definition:
            "Any incompatibility between two or more attitudes, or between behavior and attitudes.",
        },
        {
          term: "Consistency",
          definition:
            "Xu hướng muốn attitude và behavior của mình hợp nhau, giảm bất tương thích.",
        },
      ],
    },
    {
      id: "s3",
      heading: "Attitude–behavior relationship (moderators)",
      blocks: [
        comparisonBlock(
          "Khi nào attitude dự báo behavior mạnh hơn?",
          ["Moderator", "Tác dụng"],
          [
            {
              label: "Importance",
              cells: [
                "Attitude về vấn đề quan trọng với cá nhân thường có sức kéo hành vi mạnh hơn.",
              ],
            },
            {
              label: "Correspondence",
              cells: [
                "Attitude càng khớp cụ thể với behavior cần dự báo, prediction càng tốt.",
              ],
            },
            {
              label: "Accessibility",
              cells: [
                "Attitude dễ nhớ/dễ gọi ra trong trí nhớ có khả năng ảnh hưởng behavior cao hơn.",
              ],
            },
            {
              label: "Social pressure",
              cells: [
                "Áp lực xã hội mạnh có thể làm behavior lệch khỏi attitude thật.",
              ],
            },
            {
              label: "Direct experience",
              cells: [
                "Attitude hình thành từ trải nghiệm trực tiếp thường ổn định và dự báo behavior tốt hơn.",
              ],
            },
          ],
        ),
        flowBlock(
          "s3",
          "Attitude → Behavior (Schafer & Tait 1986; slide 16)",
          "horizontal",
          [
            {
              id: "s3_beliefs",
              label: "Beliefs",
              group: "concept",
              detail: "Cognitive beliefs/evaluations về object hoặc situation.",
            },
            {
              id: "s3_attitude",
              label: "Attitude",
              group: "concept",
              detail: "Evaluative statement được hình thành từ beliefs và affect.",
            },
            {
              id: "s3_behavior",
              label: "Behavior",
              group: "concept",
              detail: "Hành vi quan sát được, chịu tác động thêm bởi habits, norms và expected consequences.",
            },
          ],
          [
            { from: "s3_beliefs", to: "s3_attitude", label: "đánh giá" },
            { from: "s3_attitude", to: "s3_behavior", label: "dự báo" },
          ],
          "Attitude không tự động biến thành behavior: habits, social norms và expected consequences có thể can thiệp vào đoạn cuối.",
        ),
      ],
    },
    {
      id: "s4",
      heading: "Job attitudes hướng CÔNG VIỆC: satisfaction, involvement, empowerment",
      blocks: [
        comparisonBlock(
          "6 major job attitudes trong OB",
          ["Job attitude", "Meaning"],
          [
            {
              label: "Job satisfaction",
              cells: [
                "Positive feeling about a job resulting from an evaluation of its characteristics.",
              ],
            },
            {
              label: "Job involvement",
              cells: [
                "Mức độ một người psychological identifies with the job và coi performance level quan trọng với self-worth.",
              ],
            },
            {
              label: "Psychological empowerment",
              cells: [
                "Belief rằng mình có influence lên work environment, competence, meaningfulness và autonomy.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "Job satisfaction",
          definition:
            "Positive feeling about a job resulting from evaluating its characteristics.",
        },
        {
          term: "Job involvement",
          definition:
            "Degree of psychological identification with job and performance importance to self-worth.",
        },
        {
          term: "Psychological empowerment",
          definition:
            "Belief in influence, competence, meaningfulness and autonomy at work.",
        },
      ],
    },
    {
      id: "s4b",
      heading: "Job attitudes hướng TỔ CHỨC: commitment, POS, engagement",
      blocks: [
        comparisonBlock(
          "Job attitudes hướng TỔ CHỨC",
          ["Job attitude", "Meaning"],
          [
            {
              label: "Organizational commitment",
              cells: [
                "Identification với organization và goals, mong muốn duy trì membership.",
              ],
            },
            {
              label: "Perceived organizational support (POS)",
              cells: [
                "Niềm tin rằng organization values contribution và cares about well-being của nhân viên.",
              ],
            },
            {
              label: "Employee engagement",
              cells: [
                "Individual's involvement with, satisfaction with, and enthusiasm for the work.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Slide extras: job embeddedness & OCB",
          "Slide nhắc thêm job embeddedness (mức độ “mắc neo” của người lao động vào công việc/tổ chức/cộng đồng) và OCB như hành vi vượt vai trò. Với POS, power distance có thể làm phản ứng với support khác nhau giữa bối cảnh văn hóa.",
        ),
      ],
      keyTerms: [
        {
          term: "Organizational commitment",
          definition:
            "Identification with organization and desire to remain a member.",
        },
        {
          term: "Perceived organizational support (POS)",
          definition:
            "Belief that the organization values contribution and cares about well-being.",
        },
        {
          term: "Employee engagement",
          definition:
            "Involvement with, satisfaction with and enthusiasm for work.",
        },
      ],
    },
    {
      id: "s5",
      heading: "Đo job satisfaction (2 approaches)",
      blocks: [
        comparisonBlock(
          "Two approaches to measuring job satisfaction",
          ["Approach", "Cách làm & điểm mạnh"],
          [
            {
              label: "Single global rating",
              cells: [
                "Hỏi một câu tổng quát kiểu “All things considered, how satisfied are you with your job?” Nhanh, trực diện, thường đủ mạnh để nắm cảm nhận chung.",
              ],
            },
            {
              label: "Summation of job facets",
              cells: [
                "Tách job thành facets như nature of work, supervision, pay, promotion opportunities, coworkers; chấm từng phần rồi tổng hợp. Hữu ích khi cần biết nguồn cụ thể của satisfaction/dissatisfaction.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Đo tổng thể hay đo từng facet?",
          "Single global rating không “sơ sài” nếu mục tiêu là nắm overall satisfaction. Summation of facets phù hợp hơn khi manager cần biết cần sửa pay, supervision, promotion hay nature of work.",
        ),
      ],
    },
    {
      id: "s6",
      heading: "Causes of job satisfaction",
      blocks: [
        comparisonBlock(
          "Các nguyên nhân chính của job satisfaction",
          ["Cause", "Cơ chế"],
          [
            {
              label: "Job conditions",
              cells: [
                "Công việc thú vị, training, variety, independence, control và social support làm tăng satisfaction vì người lao động thấy work meaningful và được hỗ trợ.",
              ],
            },
            {
              label: "Personality / CSE",
              cells: [
                "Người có core self-evaluations tích cực thường đánh giá bản thân và khả năng kiểm soát tốt hơn, từ đó dễ thấy satisfaction cao hơn.",
              ],
            },
            {
              label: "Pay",
              cells: [
                "Pay quan trọng nhưng sau một mức đủ, tăng pay không tự động kéo satisfaction tăng mạnh; job conditions và fairness vẫn rất đáng kể.",
              ],
            },
            {
              label: "Corporate social responsibility (CSR)",
              cells: [
                "CSR có thể nâng satisfaction khi nhân viên thấy tổ chức phù hợp giá trị của mình; hiệu ứng mạnh hơn khi CSR được tin là chân thật.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "Core self-evaluations (CSE)",
          definition:
            "Kết luận nền tảng của cá nhân về giá trị, năng lực và khả năng kiểm soát của bản thân.",
        },
        {
          term: "Corporate social responsibility (CSR)",
          definition:
            "Hành động tự điều chỉnh của tổ chức nhằm tạo lợi ích xã hội hoặc môi trường, vượt mức tối thiểu pháp lý.",
        },
      ],
    },
    {
      id: "s7",
      heading: "Outcomes of job satisfaction",
      blocks: [
        comparisonBlock(
          "Job satisfaction dự báo gì?",
          ["Outcome", "Logic OB"],
          [
            {
              label: "Job performance",
              cells: [
                "Nhân viên hài lòng thường làm việc tốt hơn; ở cấp tổ chức, đơn vị có satisfaction cao thường có hiệu quả cao hơn.",
              ],
            },
            {
              label: "Organizational citizenship behavior (OCB)",
              cells: [
                "Satisfaction làm tăng khả năng giúp đỡ, hỗ trợ đồng nghiệp và làm vượt vai trò, đặc biệt khi có trust và fairness.",
              ],
            },
            {
              label: "Customer satisfaction",
              cells: [
                "Trong service settings, employee satisfaction có thể lan sang service quality, customer mood và loyalty.",
              ],
            },
            {
              label: "Life satisfaction",
              cells: [
                "Job là một phần lớn của đời sống; cảm nhận tích cực ở work có thể liên hệ với satisfaction tổng thể trong cuộc sống.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "Organizational citizenship behavior (OCB)",
          definition:
            "Discretionary behavior không bắt buộc chính thức nhưng hỗ trợ functioning của tổ chức.",
        },
      ],
    },
    {
      id: "s8",
      heading: "Impact of dissatisfaction: EVLN + CWB",
      blocks: [
        comparisonBlock(
          "EVLN: 4 phản ứng khi bất mãn",
          ["Phản ứng", "Định nghĩa", "2 chiều"],
          [
            {
              label: "Exit",
              cells: [
                "Rời tổ chức hoặc tìm cách rời khỏi tình huống bất mãn.",
                "Active + destructive.",
              ],
            },
            {
              label: "Voice",
              cells: [
                "Cố gắng cải thiện tình hình bằng góp ý, thảo luận, đề xuất thay đổi.",
                "Active + constructive.",
              ],
            },
            {
              label: "Loyalty",
              cells: [
                "Chờ đợi thụ động nhưng lạc quan rằng tình hình sẽ tốt hơn, tiếp tục ủng hộ tổ chức.",
                "Passive + constructive.",
              ],
            },
            {
              label: "Neglect",
              cells: [
                "Để tình hình xấu đi: giảm effort, đi trễ, vắng mặt, mắc lỗi, thiếu quan tâm.",
                "Passive + destructive.",
              ],
            },
          ],
        ),
        calloutBlock(
          "key",
          "CWB là phần tối của dissatisfaction",
          "Counterproductive work behavior (CWB) là các hành vi gây hại cho organization hoặc members, như sabotage, aggression, theft, withdrawal. EVLN giúp phân loại phản ứng rộng; CWB nhấn mạnh nhóm hành vi destructive.",
        ),
        comparisonBlock(
          "Dissatisfaction → Absenteeism & Turnover (sách, p57–58)",
          ["Outcome", "Quan hệ với (dis)satisfaction"],
          [
            {
              label: "Absenteeism",
              cells: [
                "Quan hệ negative NHẤT QUÁN nhưng chỉ moderate-to-weak. Điều kiện hóa bởi thị trường việc: nhiều job thay thế → dissatisfied nghỉ vặt nhiều; ít alternative → dissatisfied nghỉ THẤP như satisfied. Sick leave hào phóng khuyến khích TẤT CẢ (kể cả người rất hài lòng) nghỉ.",
              ],
            },
            {
              label: "Turnover",
              cells: [
                "Quan hệ MẠNH hơn absenteeism. Pattern satisfaction giảm dần là predictor tốt nhất của intent to leave; có hiệu ứng lây (contagion) — nên nhìn satisfaction/turnover của ĐỒNG NGHIỆP khi phân công người mới; bị điều tiết bởi job embeddedness (đã có trong content — nối mạch, không định nghĩa lại) và alternative prospects: nhận unsolicited offer → dissatisfaction ít dự đoán turnover (rời vì 'pull' chứ không vì 'push'); human capital cao (học vấn, ability) → dissatisfaction DỄ chuyển thành turnover vì nhiều lựa chọn.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "Exit",
          definition: "Active destructive response: leaving or trying to leave.",
        },
        {
          term: "Voice",
          definition:
            "Active constructive response: trying to improve conditions.",
        },
        {
          term: "Loyalty",
          definition:
            "Passive constructive response: waiting optimistically for improvement.",
        },
        {
          term: "Neglect",
          definition:
            "Passive destructive response: allowing conditions to worsen.",
        },
        {
          term: "Counterproductive work behavior (CWB)",
          definition:
            "Behavior that actively damages the organization or its members.",
        },
      ],
    },
    {
      id: "s9",
      heading: "Engagement vs satisfaction & implications for managers",
      blocks: [
        comparisonBlock(
          "Satisfied employees vs engaged employees",
          ["Lens", "Khác biệt cần nhớ"],
          [
            {
              label: "Satisfied employees",
              cells: [
                "Cảm thấy tích cực về job sau khi đánh giá các characteristics; có thể “ổn” nhưng chưa chắc có energy/enthusiasm cao.",
              ],
            },
            {
              label: "Engaged employees",
              cells: [
                "Có involvement, satisfaction và enthusiasm for work; thường gắn với energy, persistence và willingness to invest self vào công việc.",
              ],
            },
          ],
        ),
        calloutBlock(
          "key",
          "Implications for managers",
          "Manager không chỉ “mua” satisfaction bằng pay. Cần thiết kế job conditions tốt, fairness/trust, support, CSR đáng tin, và lắng nghe voice sớm để dissatisfaction không trượt sang neglect, exit hoặc CWB. Engagement cần meaningful work và điều kiện để nhân viên thật sự đầu tư năng lượng. **Understanding the impact (sách, p58–59):** satisfaction là chuyện bottom-line — công ty morale cao (>70% nhân viên hài lòng) có stock tăng 19.4% so với 10% của nhóm morale trung bình/thấp. Nguy hiểm là manager thường ẢO TƯỞNG: 86% senior managers tin tổ chức đối xử tốt với nhân viên, chỉ 55% nhân viên đồng ý; 55% managers nghĩ morale tốt, nhân viên chỉ 38%. Khảo sát ĐỀU ĐẶN thu hẹp gap này (case KFC Houston: survey mỗi 3 tháng, đổi lịch nghỉ theo ý nhân viên — 'they have a voice and they're heard').",
        ),
        calloutBlock(
          "key",
          "So what — kiến thức này đổi hành động của bạn",
          "Con người khao khát consistency — khi bạn thấy mình đang \"hợp lý hóa\" một việc trái giá trị, đó là cognitive dissonance đang vận hành, hãy gọi tên nó. Hành động với vai trò quản lý: đừng đo satisfaction một lần rồi thôi — bất mãn diễn tiến theo EVLN, can thiệp ở Voice/Loyalty trước khi thành Exit/Neglect; và nhớ engagement ≠ satisfaction: người hài lòng chưa chắc dốc sức. → Mắt xích môn học: attitudes tổng hợp perception (Topic 02) và emotion (Topic 04) thành xu hướng hành vi; EVLN ở đây là bản lề sang motivation/engagement (Topic 06), và khi bất mãn lan ra nhóm thì thành conflict (Topic 08).",
        ),
      ],
      keyTerms: [
        {
          term: "Job satisfaction",
          definition:
            "Positive feeling about a job resulting from evaluating its characteristics.",
        },
        {
          term: "Employee engagement",
          definition:
            "Involvement with, satisfaction with and enthusiasm for work.",
        },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "After a new remote-work policy is announced, Minh says, 'I think this policy is unfair, and I dislike it.' What is Minh expressing?",
      options: [
        { id: "a", text: "A mood, because Minh feels negative without evaluating any object", isCorrect: false, rationale: "Cơ chế: Minh nêu rõ object là remote-work policy và đánh giá nó unfair. Bẫy: từ 'dislike' làm câu giống mood tiêu cực. Khóa: mood thường không có object rõ; attitude có object." },
        { id: "b", text: "An attitude, because he makes an unfavorable evaluation of a specific policy", isCorrect: true, rationale: "Cơ chế: cognition 'unfair' và affect 'dislike' cùng tạo evaluative statement về policy. Bẫy: tách hai câu thành opinion và emotion rời. Khóa: favorable/unfavorable evaluation of an object = attitude." },
        { id: "c", text: "A job description, because the policy formally changes where he works", isCorrect: false, rationale: "Cơ chế: policy có thể đổi điều kiện việc làm nhưng lời Minh là psychological evaluation. Bẫy: object được tổ chức ban hành nên dễ nhầm với formal role. Khóa: document khác attitude toward document." },
        { id: "d", text: "A fixed personality trait, because resistance to remote work cannot change", isCorrect: false, rationale: "Cơ chế: attitude với một policy có thể đổi theo experience và persuasion. Bẫy: phản ứng mạnh dễ bị gán thành tính cách cố hữu. Khóa: attitude không phải immutable trait." },
        { id: "e", text: "A completed behavior, because Minh has already rejected the policy", isCorrect: false, rationale: "Cơ chế: Minh mới phát biểu evaluation; stem chưa cho thấy hành vi từ chối. Bẫy: verbal statement trông như action. Khóa: attitude có thể dẫn tới behavior nhưng không đồng nhất behavior." },
      ],
      difficulty: "basic",
      conceptTested: "Definition of attitude",
      takeaway: "Attitude là evaluative statement favorable/unfavorable về object, people hoặc events.",
    },
    {
      id: "q02",
      stem: "An employee says, “My supervisor gave my coworker a larger raise; that is unfair.” Which attitude component is most visible?",
      options: [
        { id: "a", text: "Affective component", isCorrect: false, rationale: "Cơ chế: affective component là feeling như anger/frustration. Bẫy: tình huống bất công thường gây cảm xúc. Khóa: câu stem nhấn mạnh belief/evaluation 'that is unfair'." },
        { id: "b", text: "Behavioral component", isCorrect: false, rationale: "Cơ chế: behavioral component là intention/action tendency. Bẫy: raise có thể dẫn tới complaint/quitting. Khóa: stem chưa nói người đó sẽ làm gì." },
        { id: "c", text: "Cognitive component", isCorrect: true, rationale: "Cơ chế: cognitive component là opinion/belief/evaluation về sự việc. Bẫy: ví dụ Exhibit 2-1 có cả ba phần. Khóa: “that is unfair” là judgment." },
        { id: "d", text: "Job involvement", isCorrect: false, rationale: "Cơ chế: job involvement là identification với job, không phải thành phần ABC. Bẫy: cả hai nằm trong attitudes topic. Khóa: câu hỏi đang hỏi component." },
        { id: "e", text: "Organizational commitment", isCorrect: false, rationale: "Cơ chế: commitment là attachment với organization. Bẫy: bất công có thể ảnh hưởng commitment. Khóa: không phải thành phần của attitude statement." },
      ],
      difficulty: "basic",
      conceptTested: "ABC model of attitudes",
      takeaway: "Cognitive = belief/evaluation; affective = feeling; behavioral = intention/tendency to act.",
    },
    {
      id: "q03",
      stem: "When is an attitude most likely to predict behavior strongly?",
      options: [
        { id: "a", text: "When it is based on direct personal experience", isCorrect: true, rationale: "Cơ chế: direct experience làm attitude cụ thể, accessible và ổn định hơn. Bẫy: người học hay chọn social pressure vì nó mạnh. Khóa: social pressure có thể làm behavior lệch khỏi attitude." },
        { id: "b", text: "When social pressure forces the opposite behavior", isCorrect: false, rationale: "Cơ chế: social pressure mạnh thường làm attitude–behavior link yếu đi. Bẫy: pressure nghe như dự báo behavior. Khóa: nó dự báo compliance, không dự báo attitude thật." },
        { id: "c", text: "When the attitude is vague and unrelated to the behavior", isCorrect: false, rationale: "Cơ chế: correspondence thấp làm prediction yếu. Bẫy: attitude chung nghe bao quát. Khóa: càng specific càng tốt." },
        { id: "d", text: "When the attitude is hard to recall", isCorrect: false, rationale: "Cơ chế: accessibility thấp làm attitude ít ảnh hưởng behavior. Bẫy: hidden attitude vẫn tồn tại. Khóa: dễ recall mới dễ điều khiển hành vi." },
        { id: "e", text: "When the issue is unimportant to the person", isCorrect: false, rationale: "Cơ chế: importance thấp làm attitude yếu. Bẫy: vấn đề nhỏ có thể dễ hành động. Khóa: attitude quan trọng mới kéo behavior mạnh." },
      ],
      difficulty: "intermediate",
      conceptTested: "Moderators of attitude–behavior relationship",
      takeaway: "Direct experience, importance, correspondence và accessibility thường làm attitude dự báo behavior tốt hơn.",
    },
    {
      id: "q04",
      stem: "Which situation best illustrates cognitive dissonance?",
      options: [
        { id: "a", text: "A person dislikes coffee and never drinks it", isCorrect: false, rationale: "Cơ chế: attitude và behavior nhất quán nên không có dissonance. Bẫy: có negative attitude. Khóa: dissonance cần incompatibility." },
        { id: "b", text: "A manager believes honesty matters but falsifies a report", isCorrect: true, rationale: "Cơ chế: belief về honesty xung đột với behavior falsifying report. Bẫy: có thể gọi là unethical behavior, nhưng concept cần bắt là attitude–behavior inconsistency. Khóa: cognitive dissonance." },
        { id: "c", text: "An employee feels happy after receiving praise", isCorrect: false, rationale: "Cơ chế: đây là affective reaction, không có inconsistency rõ. Bẫy: dissonance hay đi kèm discomfort. Khóa: stem không có conflict giữa cognitions." },
        { id: "d", text: "A team member learns a new software skill", isCorrect: false, rationale: "Cơ chế: learning skill không phải attitude conflict. Bẫy: cognition có nghĩa rộng là hiểu biết. Khóa: cognitive dissonance không phải mọi cognitive process." },
        { id: "e", text: "A customer compares two product prices", isCorrect: false, rationale: "Cơ chế: comparison không tự tạo inconsistency. Bẫy: có hai lựa chọn nên tưởng dissonance. Khóa: cần bất tương thích attitude/behavior." },
      ],
      difficulty: "basic",
      conceptTested: "Cognitive dissonance definition",
      takeaway: "Cognitive dissonance là incompatibility giữa attitudes hoặc giữa attitude và behavior.",
    },
    {
      id: "q05",
      stem: "According to dissonance theory, which factor can reduce the pressure a person feels to resolve an inconsistency?",
      options: [
        { id: "a", text: "High importance and high personal control", isCorrect: false, rationale: "Cơ chế: importance và control cao thường tăng áp lực giảm dissonance. Bẫy: nghe như “có động lực giải quyết”. Khóa: câu hỏi hỏi reduce pressure." },
        { id: "b", text: "A large reward that helps justify the inconsistent behavior", isCorrect: true, rationale: "Cơ chế: reward lớn giúp rationalize behavior, nên dissonance felt thấp hơn. Bẫy: reward không xóa inconsistency logic. Khóa: nó giảm pressure bằng justification." },
        { id: "c", text: "A clear belief that the issue is central to one's identity", isCorrect: false, rationale: "Cơ chế: nếu central to identity, dissonance quan trọng hơn. Bẫy: identity làm người ta muốn bảo vệ self. Khóa: áp lực thường tăng." },
        { id: "d", text: "A strong sense that one freely chose the behavior", isCorrect: false, rationale: "Cơ chế: perceived control cao làm trách nhiệm cao hơn. Bẫy: tự chọn nghe tích cực. Khóa: trách nhiệm cao tăng dissonance." },
        { id: "e", text: "A behavior that directly violates a strongly held attitude without compensation", isCorrect: false, rationale: "Cơ chế: đây là trường hợp dissonance mạnh. Bẫy: mô tả rõ nên dễ chọn. Khóa: không có reward/control excuse để giảm." },
      ],
      difficulty: "intermediate",
      conceptTested: "Dissonance pressure: importance, control, rewards",
      takeaway: "Mong muốn giảm dissonance phụ thuộc importance, perceived control và rewards.",
    },
    {
      id: "q06",
      stem: "Which set contains only moderators of the attitude–behavior relationship discussed in the reading?",
      options: [
        { id: "a", text: "Importance, correspondence, accessibility, social pressure, direct experience", isCorrect: true, rationale: "Cơ chế: đây là năm moderators chính trong reading. Bẫy: nhiều lựa chọn dùng thuật ngữ OB thật nhưng thuộc topic khác. Khóa: nhớ đủ bộ attitude–behavior." },
        { id: "b", text: "Pay, CSR, job conditions, core self-evaluations, supervision", isCorrect: false, rationale: "Cơ chế: đây là causes của job satisfaction, không phải moderators của attitude–behavior. Bẫy: cùng Topic 05 nên dễ lẫn. Khóa: causes JS khác moderators link." },
        { id: "c", text: "Exit, voice, loyalty, neglect, CWB", isCorrect: false, rationale: "Cơ chế: đây là reactions/outcomes của dissatisfaction. Bẫy: đều liên quan behavior. Khóa: không phải yếu tố làm link mạnh/yếu." },
        { id: "d", text: "Surface acting, deep acting, mindfulness, emotional labor, EI", isCorrect: false, rationale: "Cơ chế: đây là Topic 04 emotions. Bẫy: workplace affect gần thái độ. Khóa: sai topic." },
        { id: "e", text: "Agreeableness, conscientiousness, neuroticism, openness, extraversion", isCorrect: false, rationale: "Cơ chế: đây là Big Five personality traits. Bẫy: traits có thể ảnh hưởng behavior. Khóa: không phải moderator list của attitude–behavior." },
      ],
      difficulty: "intermediate",
      conceptTested: "Attitude–behavior moderators",
      takeaway: "Năm moderators cần nhớ: importance, correspondence, accessibility, social pressure, direct experience.",
    },
    {
      id: "q07",
      stem: "Which statement best distinguishes job satisfaction from job involvement?",
      options: [
        { id: "a", text: "Job satisfaction is a positive feeling about the job; job involvement is psychological identification with the job", isCorrect: true, rationale: "Cơ chế: satisfaction = positive evaluation; involvement = identify with job and link performance to self-worth. Bẫy: cả hai đều là job attitudes. Khóa: feeling/evaluation khác identification." },
        { id: "b", text: "Job satisfaction means identifying with the whole organization; job involvement means support from the organization", isCorrect: false, rationale: "Cơ chế: identifying with organization là organizational commitment; support là POS. Bẫy: đều là major job attitudes. Khóa: lẫn taxonomy." },
        { id: "c", text: "Job satisfaction is the belief that one has autonomy; job involvement is enthusiasm for work", isCorrect: false, rationale: "Cơ chế: autonomy/influence thuộc psychological empowerment; enthusiasm thuộc engagement. Bẫy: các định nghĩa gần nhau. Khóa: không phải JS vs involvement." },
        { id: "d", text: "Job satisfaction is an active destructive response; job involvement is passive constructive response", isCorrect: false, rationale: "Cơ chế: active destructive/passive constructive là EVLN dimensions. Bẫy: dissatisfaction reactions cũng trong topic. Khóa: không phải job attitudes." },
        { id: "e", text: "Job satisfaction is always stronger than job involvement in predicting behavior", isCorrect: false, rationale: "Cơ chế: reading không nêu quy luật “always stronger”. Bẫy: satisfaction được nhấn mạnh nhiều nên tưởng mạnh nhất. Khóa: tránh absolute." },
      ],
      difficulty: "basic",
      conceptTested: "Job satisfaction vs job involvement",
      takeaway: "Job satisfaction là positive feeling/evaluation; job involvement là psychological identification với job.",
    },
    {
      id: "q08",
      stem: "An employee believes, “My organization values my contribution and cares about my well-being.” Which job attitude is this?",
      options: [
        { id: "a", text: "Organizational commitment", isCorrect: false, rationale: "Cơ chế: commitment là employee identifies with organization and wants to remain. Bẫy: cả hai đều liên quan organization. Khóa: stem nói organization supports employee." },
        { id: "b", text: "Psychological empowerment", isCorrect: false, rationale: "Cơ chế: empowerment là influence, competence, meaning, autonomy. Bẫy: “values my contribution” nghe như competence. Khóa: trọng tâm là organization cares." },
        { id: "c", text: "Perceived organizational support", isCorrect: true, rationale: "Cơ chế: POS đúng là belief rằng organization values contribution and cares about well-being. Bẫy: commitment đi chiều ngược lại employee→organization. Khóa: support perceived từ organization." },
        { id: "d", text: "Job involvement", isCorrect: false, rationale: "Cơ chế: involvement là psychological identification with job. Bẫy: contribution có vẻ gắn performance. Khóa: stem không nói self-worth/job identity." },
        { id: "e", text: "Counterproductive work behavior", isCorrect: false, rationale: "Cơ chế: CWB là harmful behavior, không phải positive support belief. Bẫy: support thấp có thể dẫn đến CWB. Khóa: stem là attitude, không phải behavior." },
      ],
      difficulty: "basic",
      conceptTested: "Perceived organizational support and organizational commitment",
      takeaway: "POS là niềm tin organization values contribution và cares about well-being.",
    },
    {
      id: "q09",
      stem: "Which description best matches psychological empowerment?",
      options: [
        { id: "a", text: "A belief that one's work role has influence, competence, meaningfulness, and autonomy", isCorrect: true, rationale: "Cơ chế: đây là bốn ý chính của psychological empowerment. Bẫy: empowerment không chỉ là được trao quyền trên giấy. Khóa: cảm nhận tâm lý về influence/competence/meaning/autonomy." },
        { id: "b", text: "A decision to stay loyal while waiting passively for conditions to improve", isCorrect: false, rationale: "Cơ chế: đây là loyalty trong EVLN. Bẫy: cả hai có vẻ tích cực. Khóa: loyalty là response to dissatisfaction." },
        { id: "c", text: "A single overall rating of job satisfaction", isCorrect: false, rationale: "Cơ chế: đây là measurement approach cho JS. Bẫy: empowerment có thể ảnh hưởng satisfaction. Khóa: không phải đo lường." },
        { id: "d", text: "The belief that corporate social responsibility is sincere", isCorrect: false, rationale: "Cơ chế: CSR sincerity có thể tăng satisfaction. Bẫy: value fit nghe meaningful. Khóa: không phải empowerment definition." },
        { id: "e", text: "The tendency to perform harmful acts toward the organization", isCorrect: false, rationale: "Cơ chế: đó là CWB. Bẫy: low empowerment có thể dẫn đến negative outcomes. Khóa: empowerment là positive work attitude." },
      ],
      difficulty: "basic",
      conceptTested: "Psychological empowerment",
      takeaway: "Psychological empowerment xoay quanh influence, competence, meaningfulness và autonomy.",
    },
    {
      id: "q10",
      stem: "A survey asks employees to rate pay, supervision, promotion opportunities, coworkers, and the work itself, then combines the scores. Which approach is this?",
      options: [
        { id: "a", text: "Single global rating", isCorrect: false, rationale: "Cơ chế: single global rating dùng một câu tổng quát. Bẫy: vẫn đo satisfaction. Khóa: stem tách nhiều facets." },
        { id: "b", text: "Summation of job facets", isCorrect: true, rationale: "Cơ chế: cách này đo từng facet rồi tổng hợp. Bẫy: người học có thể nghĩ nhiều câu là “phức tạp hơn nên không chuẩn”. Khóa: facets = pay/supervision/promotion/coworkers/work itself." },
        { id: "c", text: "Cognitive dissonance assessment", isCorrect: false, rationale: "Cơ chế: dissonance đo inconsistency, không đo satisfaction facets. Bẫy: survey có thể hỏi attitudes. Khóa: không có conflict giữa attitude/behavior." },
        { id: "d", text: "EVLN diagnosis", isCorrect: false, rationale: "Cơ chế: EVLN phân loại reactions to dissatisfaction. Bẫy: dissatisfaction survey có thể dẫn đến EVLN. Khóa: stem hỏi đo job satisfaction." },
        { id: "e", text: "Affective Events Theory", isCorrect: false, rationale: "Cơ chế: AET là Topic 04 về work events → affect → attitudes/behavior. Bẫy: affect liên quan satisfaction. Khóa: không phải measurement method." },
      ],
      difficulty: "basic",
      conceptTested: "Measuring job satisfaction",
      takeaway: "Single global rating hỏi tổng thể; summation of facets tách pay, supervision, work itself... rồi tổng hợp.",
    },
    {
      id: "q11",
      stem: "Which statement about causes of job satisfaction is most consistent with the reading?",
      options: [
        { id: "a", text: "Pay is the only reliable cause of job satisfaction", isCorrect: false, rationale: "Cơ chế: pay matters, nhưng không phải duy nhất và hiệu ứng có plateau. Bẫy: compensation dễ thấy nhất. Khóa: job conditions/CSE/CSR cũng quan trọng." },
        { id: "b", text: "Job conditions such as interesting work, training, variety, independence, and social support can strongly affect satisfaction", isCorrect: true, rationale: "Cơ chế: reading nhấn mạnh job conditions tốt nâng satisfaction. Bẫy: nhiều người rút gọn satisfaction thành pay. Khóa: work itself và support rất quan trọng." },
        { id: "c", text: "Core self-evaluations have no relationship to job satisfaction", isCorrect: false, rationale: "Cơ chế: CSE tích cực thường liên quan satisfaction cao hơn. Bẫy: personality nghe xa workplace. Khóa: personality vẫn ảnh hưởng evaluation." },
        { id: "d", text: "After basic needs are met, every salary increase produces the same satisfaction gain", isCorrect: false, rationale: "Cơ chế: pay effect có xu hướng plateau; không tuyến tính mãi. Bẫy: more money sounds always better. Khóa: marginal satisfaction không cố định." },
        { id: "e", text: "Supervision and coworkers are irrelevant if the task is interesting", isCorrect: false, rationale: "Cơ chế: social support và supervision vẫn là job conditions quan trọng. Bẫy: interesting work rất mạnh. Khóa: không có “irrelevant”." },
      ],
      difficulty: "intermediate",
      conceptTested: "Causes of job satisfaction: job conditions, CSE, pay",
      takeaway: "Job satisfaction đến từ nhiều nguồn: job conditions, CSE/personality, pay và CSR.",
    },
    {
      id: "q12",
      stem: "How can corporate social responsibility (CSR) relate to job satisfaction?",
      options: [
        { id: "a", text: "CSR can increase satisfaction when employees see the organization as value-congruent and sincere", isCorrect: true, rationale: "Cơ chế: CSR tạo pride/value fit nếu nhân viên tin là chân thật. Bẫy: CSR không tự động hiệu quả nếu bị xem là symbolic. Khóa: sincerity matters." },
        { id: "b", text: "CSR affects customers only, never employees", isCorrect: false, rationale: "Cơ chế: reading nói CSR có thể ảnh hưởng employee satisfaction. Bẫy: CSR thường được truyền thông ra ngoài. Khóa: internal identity/value fit cũng quan trọng." },
        { id: "c", text: "CSR is the same as psychological empowerment", isCorrect: false, rationale: "Cơ chế: empowerment là influence/competence/meaning/autonomy. Bẫy: CSR có thể làm work meaningful. Khóa: khác khái niệm." },
        { id: "d", text: "CSR always replaces the need for fair pay", isCorrect: false, rationale: "Cơ chế: CSR không thay thế pay/fairness/job conditions. Bẫy: purpose nghe mạnh. Khóa: satisfaction đa nguyên nhân." },
        { id: "e", text: "CSR lowers satisfaction because it distracts from work", isCorrect: false, rationale: "Cơ chế: không phải kết luận của reading. Bẫy: có thể có CSR giả tạo hoặc irrelevant. Khóa: effect phụ thuộc perceived sincerity/fit." },
      ],
      difficulty: "intermediate",
      conceptTested: "CSR and job satisfaction",
      takeaway: "CSR có thể tăng satisfaction khi tạo value fit/pride và được tin là chân thật.",
    },
    {
      id: "q13",
      stem: "Which outcome is most directly associated with higher job satisfaction in the reading?",
      options: [
        { id: "a", text: "Lower organizational citizenship behavior", isCorrect: false, rationale: "Cơ chế: satisfaction thường liên quan OCB cao hơn, nhất là khi có fairness/trust. Bẫy: satisfied people might “relax”. Khóa: direction sai." },
        { id: "b", text: "Higher job performance and more OCB", isCorrect: true, rationale: "Cơ chế: job satisfaction liên hệ performance và OCB. Bẫy: không phải guarantee cá nhân nào cũng high performance. Khóa: association/prediction, không absolute." },
        { id: "c", text: "Less customer satisfaction in service jobs", isCorrect: false, rationale: "Cơ chế: employee satisfaction thường hỗ trợ customer satisfaction. Bẫy: happy employees could focus on themselves. Khóa: service climate link." },
        { id: "d", text: "More counterproductive work behavior", isCorrect: false, rationale: "Cơ chế: dissatisfaction mới liên hệ CWB nhiều hơn. Bẫy: outcome behavior chung. Khóa: direction ngược." },
        { id: "e", text: "No relationship with life satisfaction", isCorrect: false, rationale: "Cơ chế: job satisfaction có thể liên hệ life satisfaction vì work là phần lớn đời sống. Bẫy: work/life tách biệt. Khóa: spillover tồn tại." },
      ],
      difficulty: "basic",
      conceptTested: "Outcomes of job satisfaction",
      takeaway: "Job satisfaction liên hệ với performance, OCB, customer satisfaction và life satisfaction.",
    },
    {
      id: "q14",
      stem: "An unhappy employee suggests specific improvements to management instead of quitting. In the EVLN model, which response is this?",
      options: [
        { id: "a", text: "Exit: active and destructive", isCorrect: false, rationale: "Cơ chế: exit là rời đi hoặc cố rời đi. Bẫy: employee unhappy nên có thể quit. Khóa: stem nói suggest improvements." },
        { id: "b", text: "Voice: active and constructive", isCorrect: true, rationale: "Cơ chế: voice là active attempt to improve conditions. Bẫy: phàn nàn đôi khi nghe tiêu cực. Khóa: mục tiêu improve nên constructive." },
        { id: "c", text: "Loyalty: passive and constructive", isCorrect: false, rationale: "Cơ chế: loyalty là chờ đợi thụ động/lạc quan. Bẫy: vẫn ở lại tổ chức. Khóa: stem có hành động chủ động." },
        { id: "d", text: "Neglect: passive and destructive", isCorrect: false, rationale: "Cơ chế: neglect là để tình hình xấu đi. Bẫy: dissatisfaction có thể dẫn tới neglect. Khóa: stem có góp ý cải thiện." },
        { id: "e", text: "CWB: harmful and aggressive behavior", isCorrect: false, rationale: "Cơ chế: CWB gây hại; góp ý cải thiện không phải harmful. Bẫy: disagreement với management không đồng nghĩa CWB. Khóa: voice là constructive." },
      ],
      difficulty: "basic",
      conceptTested: "EVLN responses to dissatisfaction",
      takeaway: "Voice = active + constructive; exit = active + destructive; loyalty = passive + constructive; neglect = passive + destructive.",
    },
    {
      id: "q15",
      stem: "Which behavior is the clearest example of counterproductive work behavior (CWB)?",
      options: [
        { id: "a", text: "Helping a new coworker learn a task", isCorrect: false, rationale: "Cơ chế: đây là OCB/helping behavior, tích cực. Bẫy: ngoài role chính nên có thể lẫn với discretionary behavior. Khóa: CWB gây hại." },
        { id: "b", text: "Offering a suggestion to improve a flawed process", isCorrect: false, rationale: "Cơ chế: đây là voice, active constructive. Bẫy: xuất phát từ dissatisfaction. Khóa: không harmful." },
        { id: "c", text: "Waiting patiently for management to fix a problem", isCorrect: false, rationale: "Cơ chế: đây là loyalty, passive constructive. Bẫy: bất mãn vẫn tồn tại. Khóa: chưa gây hại." },
        { id: "d", text: "Sabotaging equipment after a conflict with a supervisor", isCorrect: true, rationale: "Cơ chế: sabotage gây hại trực tiếp cho organization, đúng CWB. Bẫy: conflict có thể được giải bằng voice. Khóa: harmful destructive behavior." },
        { id: "e", text: "Feeling less satisfied after a policy change", isCorrect: false, rationale: "Cơ chế: feeling là attitude/affect, chưa phải behavior. Bẫy: CWB có thể bắt đầu từ dissatisfaction. Khóa: cần hành vi gây hại." },
      ],
      difficulty: "basic",
      conceptTested: "Counterproductive work behavior",
      takeaway: "CWB là hành vi gây hại cho organization hoặc members, không chỉ cảm giác bất mãn.",
    },
    {
      id: "q16",
      stem: "Which implication best distinguishes employee engagement from job satisfaction for managers?",
      options: [
        { id: "a", text: "Managers should ignore satisfaction if engagement is high", isCorrect: false, rationale: "Cơ chế: engagement bao gồm satisfaction nhưng không thay thế việc quản lý satisfaction. Bẫy: engagement nghe “cao cấp hơn”. Khóa: cả hai vẫn quan trọng." },
        { id: "b", text: "Satisfaction is positive evaluation; engagement adds involvement and enthusiasm, so managers should design meaningful work and support energy investment", isCorrect: true, rationale: "Cơ chế: engagement = involvement + satisfaction + enthusiasm. Bẫy: nghĩ engagement chỉ là happy employees. Khóa: cần meaningful work/support để nhân viên đầu tư năng lượng." },
        { id: "c", text: "Engagement is only about pay satisfaction", isCorrect: false, rationale: "Cơ chế: pay chỉ là một cause của satisfaction; engagement rộng hơn nhiều. Bẫy: pay dễ đo và dễ quản. Khóa: engagement liên quan involvement/enthusiasm." },
        { id: "d", text: "Satisfied employees always show high engagement", isCorrect: false, rationale: "Cơ chế: người hài lòng có thể thấy công việc ổn nhưng chưa enthusiastic. Bẫy: hai khái niệm có overlap. Khóa: satisfaction không đảm bảo engagement." },
        { id: "e", text: "Engagement is a destructive response to dissatisfaction", isCorrect: false, rationale: "Cơ chế: destructive responses là exit/neglect/CWB, không phải engagement. Bẫy: cùng phần outcomes/reactions. Khóa: engagement là positive job attitude." },
      ],
      difficulty: "advanced",
      conceptTested: "Employee engagement vs job satisfaction and managerial implications",
      takeaway: "Engagement thêm involvement và enthusiasm vào nền satisfaction; manager cần tạo điều kiện để nhân viên đầu tư năng lượng thật sự.",
    },
    {
      id: "q17",
      stem: "A highly educated analyst becomes increasingly dissatisfied while competing firms are hiring aggressively and sending her unsolicited offers. Which outcome is most likely?",
      options: [
        { id: "a", text: "Her dissatisfaction is more likely to become turnover because high human capital and many alternatives make leaving easier", isCorrect: true, rationale: "Cơ chế: education/ability tăng human capital, còn active hiring/offers tăng alternative prospects nên dissatisfaction dễ chuyển thành exit. Bẫy: unsolicited offer có thể kéo cả satisfied employee đi. Khóa: nhiều lựa chọn làm turnover phản ứng mạnh hơn absenteeism." },
        { id: "b", text: "She will mainly become absent because turnover is always weakly related to dissatisfaction", isCorrect: false, rationale: "Cơ chế: turnover có quan hệ với dissatisfaction mạnh hơn absenteeism. Bẫy: vắng mặt là biểu hiện withdrawal dễ thấy trước khi nghỉ. Khóa: market alternatives + human capital làm leaving khả thi." },
        { id: "c", text: "She is unlikely to leave because education reduces access to alternative jobs", isCorrect: false, rationale: "Cơ chế: human capital cao thường mở rộng lựa chọn, không thu hẹp. Bẫy: chuyên môn cao có thể tạo job embeddedness trong firm hiện tại. Khóa: stem còn nêu firms đang chủ động tuyển và gửi offers." },
        { id: "d", text: "Generous sick leave would guarantee she stays with the organization", isCorrect: false, rationale: "Cơ chế: sick leave hào phóng có thể tăng absence ở cả satisfied lẫn dissatisfied employees, không bảo đảm retention. Bẫy: benefit tốt có thể tăng satisfaction. Khóa: leave policy khác alternative prospects driving turnover." },
        { id: "e", text: "Her coworkers' satisfaction cannot affect her intention to leave", isCorrect: false, rationale: "Cơ chế: turnover/satisfaction có contagion, nên đồng nghiệp có thể ảnh hưởng intent to leave. Bẫy: quyết định nghỉ việc có vẻ hoàn toàn cá nhân. Khóa: phải nhìn cả social context và alternatives." },
      ],
      difficulty: "intermediate",
      conceptTested: "Dissatisfaction, human capital, alternatives, and turnover",
      takeaway: "Dissatisfaction dễ thành turnover nhất khi nhân viên có human capital cao và thị trường cung cấp nhiều alternative prospects.",
    },
  ],
  status: "ready",
  source:
    "Organizational Behavior (IM2017, Dr Truong Thi Lan Anh) — slide 'OB-Topic 5 - Attitudes and Dissonance' + Reading 'Chapter 2 - Attitudes' (Robbins & Judge, p47-57). Attitude & 3 components (ABC, Exhibit 2-1), cognitive dissonance (Festinger) + moderators, major job attitudes (job satisfaction/involvement/psychological empowerment/organizational commitment/POS/engagement), measuring JS (single global rating vs summation of facets), causes (job conditions/CSE/pay/CSR), outcomes (performance/OCB/customer/life satisfaction), impact of dissatisfaction (EVLN framework) + CWB, engagement vs satisfaction. Attitude-behavior model (Schafer & Tait) + Viktor Frankl từ slide.",
};

const topic06: Chapter = {
  slug: "topic-06",
  order: 6,
  title: "Topic 06 — Motivation",
  bigIdea:
    "Motivation không phải một tính cách cố định mà là PROCESS gồm 3 yếu tố — intensity × direction × persistence — hướng tới organizational goals (R&J). Tư duy về động cơ tiến hóa từ early need theories (Maslow/Herzberg/McClelland/ERG — trực giác, dễ hiểu nhưng bằng chứng yếu) sang contemporary theories (self-determination, goal-setting, self-efficacy, reinforcement, equity/justice, expectancy — có bằng chứng, và BỔ SUNG nhau chứ không loại trừ, tích hợp trong Exhibit 7-8). Nhà quản lý biến lý thuyết thành hành động bằng cách thiết kế công việc (Job Characteristics Model) và thiết kế phần thưởng (pay/benefits/recognition) để kích hoạt các động cơ đó — và luôn nhớ động cơ mang tính culture-bound.",
  bigIdeaPillars: [
    {
      label: "WHAT — motivation là một process",
      body: "Motivation = processes account cho intensity, direction, và persistence của effort hướng tới goal (R&J p130). Intensity = nỗ lực mạnh cỡ nào; Direction = hướng đúng organizational goals; Persistence = duy trì bao lâu. Không có direction thì intensity vô ích.",
    },
    {
      label: "Early need theories (nền tảng, bằng chứng yếu)",
      body: "Maslow hierarchy 5 needs; Herzberg two-factor (hygiene ngăn dissatisfaction vs motivator tạo satisfaction — dual continuum); McClelland nAch/nPow/nAff; + Alderfer ERG & McGregor Theory X-Y (slide). Trực giác, được manager dùng nhiều nhưng research support hạn chế.",
    },
    {
      label: "Contemporary theories (bổ sung nhau → tích hợp)",
      body: "Self-determination/cognitive evaluation/self-concordance; Goal-Setting (Locke: specific+difficult+feedback) → MBO; Self-Efficacy (Bandura 4 nguồn + Pygmalion); Reinforcement/operant/behaviorism/social-learning; Equity + 4 organizational justice; Expectancy (Vroom, 3 relationships). Tích hợp qua Exhibit 7-8; job engagement là mức commitment sâu.",
    },
    {
      label: "Applied motivation — từ lý thuyết đến thực hành",
      body: "Thiết kế công việc: JCM (5 core dims + MPS), job rotation, relational job design. Alternative work arrangements: flextime, job sharing, telecommuting. EIP: participative & representative participation. Rewards: variable pay (piece-rate/merit/bonus/profit-sharing/ESOP), flexible benefits, employee recognition. Caveat: motivation culture-bound + well-being (slide).",
    },
  ],
  learningObjectives: [
    "Định nghĩa motivation và 3 yếu tố cốt lõi: intensity, direction, persistence (R&J p130).",
    "So sánh các early need theories: Maslow hierarchy, Herzberg two-factor (hygiene vs motivator), McClelland nAch/nPow/nAff, Alderfer ERG.",
    "Giải thích self-determination theory, cognitive evaluation theory và self-concordance; khi nào extrinsic reward làm giảm intrinsic motivation.",
    "Trình bày goal-setting theory (specific + difficult + feedback) và liên hệ với Management By Objectives (MBO).",
    "Mô tả self-efficacy theory (Bandura) và 4 nguồn tăng self-efficacy; giải thích Pygmalion effect.",
    "Phân biệt reinforcement theory, operant conditioning, behaviorism và social-learning theory; mô hình A-B-C của OB modification.",
    "Giải thích equity theory (ratio comparison, các phản ứng khi inequity) và 4 loại organizational justice (distributive, procedural, informational, interpersonal).",
    "Trình bày expectancy theory (Vroom) với 3 relationships và cách các contemporary theories tích hợp (Exhibit 7-8).",
    "Giải thích job engagement và ý nghĩa cho manager.",
    "Mô tả Job Characteristics Model (5 core dimensions, MPS) và các cách redesign job: job rotation, relational job design.",
    "Nêu các cách applied motivation: alternative work arrangements, EIP, variable pay, flexible benefits, employee recognition — và caveat culture-bound.",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "Motivation: (A) process 3 yếu tố, (B) early need theories, (C) contemporary theories (tích hợp Exhibit 7-8), (D) applied motivation (job design & rewards).",
    nodes: [
      {
        id: "mot",
        label: "Motivation",
        group: "concept",
        sectionId: "s1",
        detail: "Process: intensity × direction × persistence hướng org goals.",
      },
      {
        id: "g_proc",
        label: "A. Process (WHAT)",
        group: "concept",
        parent: "mot",
        sectionId: "s1",
        detail: "Intensity, direction, persistence.",
      },
      {
        id: "g_early",
        label: "B. Early need theories",
        group: "concept",
        parent: "mot",
        sectionId: "s2",
        detail: "Maslow, Herzberg, McClelland, ERG.",
      },
      {
        id: "g_contemp",
        label: "C. Contemporary theories",
        group: "concept",
        parent: "mot",
        sectionId: "s3",
        detail: "SDT, goal-setting, self-efficacy, reinforcement, equity, expectancy.",
      },
      {
        id: "g_applied",
        label: "D. Applied motivation",
        group: "concept",
        parent: "mot",
        sectionId: "s10",
        detail: "Job design, work arrangements, rewards.",
      },
      {
        id: "t_ipd",
        label: "Intensity/Direction/Persistence",
        group: "term",
        parent: "g_proc",
        sectionId: "s1",
        detail: "Ba yếu tố của motivation: mạnh cỡ nào, hướng nào, bền bao lâu.",
      },
      {
        id: "t_need",
        label: "Maslow/Herzberg/McClelland/ERG",
        group: "term",
        parent: "g_early",
        sectionId: "s2",
        detail: "Need theories nền tảng: trực giác, dễ nhớ, bằng chứng hạn chế.",
      },
      {
        id: "t_sdt",
        label: "Self-determination & CET",
        group: "term",
        parent: "g_contemp",
        sectionId: "s3",
        detail: "Autonomy/control; extrinsic reward có thể làm giảm intrinsic interest.",
      },
      {
        id: "t_goal",
        label: "Goal-setting + MBO",
        group: "term",
        parent: "g_contemp",
        sectionId: "s4",
        detail: "Specific + difficult + feedback; cascade objectives.",
      },
      {
        id: "t_eff",
        label: "Self-efficacy (Bandura)",
        group: "term",
        parent: "g_contemp",
        sectionId: "s5",
        detail: "Niềm tin có thể làm task; 4 nguồn tăng efficacy.",
      },
      {
        id: "t_reinf",
        label: "Reinforcement / OB Mod",
        group: "term",
        parent: "g_contemp",
        sectionId: "s6",
        detail: "Behavior là function của consequences; A-B-C model.",
      },
      {
        id: "t_equity",
        label: "Equity + justice (4)",
        group: "term",
        parent: "g_contemp",
        sectionId: "s7",
        detail: "Outcome/input ratio và 4 loại organizational justice.",
      },
      {
        id: "t_expect",
        label: "Expectancy + integration",
        group: "term",
        parent: "g_contemp",
        sectionId: "s8",
        detail: "Effort-performance, performance-reward, rewards-goals; Exhibit 7-8.",
      },
      {
        id: "t_jcm",
        label: "JCM + job redesign",
        group: "term",
        parent: "g_applied",
        sectionId: "s10",
        detail: "5 core dimensions, MPS, job rotation, relational job design.",
      },
      {
        id: "t_reward",
        label: "Work arrangements / EIP / rewards",
        group: "term",
        parent: "g_applied",
        sectionId: "s11",
        detail: "Flextime/job sharing/telecommuting, EIP, variable pay, benefits, recognition.",
      },
    ],
    edges: [
      { from: "mot", to: "g_proc", label: "3 yếu tố" },
      { from: "mot", to: "g_early", label: "need" },
      { from: "mot", to: "g_contemp", label: "modern" },
      { from: "mot", to: "g_applied", label: "apply" },
      { from: "g_proc", to: "t_ipd", label: "I-D-P" },
      { from: "g_early", to: "t_need", label: "need" },
      { from: "g_contemp", to: "t_sdt", label: "SDT" },
      { from: "g_contemp", to: "t_goal", label: "goal" },
      { from: "g_contemp", to: "t_eff", label: "efficacy" },
      { from: "g_contemp", to: "t_reinf", label: "reinforce" },
      { from: "g_contemp", to: "t_equity", label: "equity" },
      { from: "g_contemp", to: "t_expect", label: "expect" },
      { from: "g_applied", to: "t_jcm", label: "job" },
      { from: "g_applied", to: "t_reward", label: "reward" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "WHAT: motivation là một process",
      blocks: [
        calloutBlock(
          "key",
          "Motivation theo Robbins & Judge (p130)",
          "Motivation là “the processes that account for an individual's intensity, direction, and persistence of effort toward attaining a goal.” Trong OB, ta thu hẹp goal về organizational goals.",
        ),
        comparisonBlock(
          "3 yếu tố của motivation (R&J p130-131; slide 5)",
          ["Yếu tố", "Nội dung"],
          [
            {
              label: "Intensity",
              cells: [
                "Nỗ lực mạnh cỡ nào — phần đa số người hay nghĩ tới. Nhưng intensity cao mà sai hướng thì không tạo kết quả tốt.",
              ],
            },
            {
              label: "Direction",
              cells: [
                "Hướng của effort — phải channel về hướng benefits the organization (quality of effort, không chỉ amount).",
              ],
            },
            {
              label: "Persistence",
              cells: [
                "Duy trì effort bao lâu — motivated individuals bám task đủ lâu để đạt goal.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Motivation không phải trait cố định",
          "Levels of motivation thay đổi giữa người và trong cùng một người theo tình huống: một SV có thể chật vật đọc textbook 20 phút nhưng ngốn Harry Potter cả ngày. → Mắt xích môn học: motivation đứng CUỐI chuỗi cá nhân — nó bị chi phối bởi perception (thấy công bằng hay không là chuyện nhận thức, Topic 02) và job attitudes (Topic 05); đồng thời là đòn bẩy chính mà transformational leadership khai thác (Topic 10).",
        ),
      ],
      keyTerms: [
        {
          term: "Motivation",
          definition:
            "Processes account cho intensity, direction, và persistence của effort hướng tới goal.",
        },
        {
          term: "Intensity",
          definition: "Mức độ mạnh/yếu của effort.",
        },
        {
          term: "Direction",
          definition:
            "Hướng của effort; trong OB phải hướng tới organizational goals.",
        },
        {
          term: "Persistence",
          definition: "Mức độ duy trì effort theo thời gian.",
        },
      ],
    },
    {
      id: "s2",
      heading: "Early theories: need theories",
      blocks: [
        comparisonBlock(
          "Early need theories (R&J p131-134; slide 6-8)",
          ["Lý thuyết", "Nội dung cốt lõi", "Điểm cần nhớ"],
          [
            {
              label: "Maslow's hierarchy of needs",
              cells: [
                "5 nhu cầu theo thứ bậc: physiological → safety-security → social-belongingness → esteem → self-actualization (Exhibit 7-1).",
                "Nhu cầu thỏa mãn tầng dưới thì tầng trên trở nên dominant; research support yếu, đặc biệt cross-culturally.",
              ],
            },
            {
              label: "Herzberg's two-factor (motivation-hygiene)",
              cells: [
                "Hygiene factors (supervision, pay, company policy, working conditions) ngăn dissatisfaction; motivators (achievement, recognition, responsibility, growth) tạo satisfaction.",
                "Dual continuum: đối lập của satisfaction là no satisfaction; đối lập của dissatisfaction là no dissatisfaction (Exhibit 7-2). Rất phổ biến ở châu Á.",
              ],
            },
            {
              label: "McClelland's needs",
              cells: [
                "nAch (drive to excel), nPow (make others behave), nAff (friendly close relationships).",
                "High achievers thích probability thành công khoảng 0.5, moderate risk, cần feedback; nAch không đảm bảo là good manager.",
              ],
            },
            {
              label: "Alderfer's ERG (slide)",
              cells: [
                "Gộp lại 3 nhóm: Existence, Relatedness, Growth.",
                "Bản rút gọn hierarchy; cho phép nhiều need active cùng lúc (bổ sung từ slide).",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Thêm từ slide: McGregor Theory X-Y",
          "Theory X giả định nhân viên lười, cần kiểm soát; Theory Y giả định nhân viên tự giác, tìm trách nhiệm. Cách manager nhìn con người ảnh hưởng cách tạo động lực.",
        ),
        calloutBlock(
          "note",
          "Maslow — nuances & giới hạn (sách)",
          "Gần đây có đề xuất nhu cầu THỨ SÁU — intrinsic values — quy về Maslow nhưng chưa được chấp nhận rộng. Muốn motivate ai phải biết người đó đang Ở BẬC NÀO và thỏa mãn nhu cầu TẠI hoặc TRÊN bậc đó. Phần lớn research KHÔNG validate lý thuyết, nhất là khác văn hóa (ngoại lệ khả dĩ: physiological) — nhưng lý thuyết trực giác \"die hard\", vẫn phải biết vì mức phổ biến của nó.",
        ),
      ],
      keyTerms: [
        {
          term: "Hierarchy of needs theory",
          definition:
            "Maslow: physiological, safety-security, social-belongingness, esteem, self-actualization.",
        },
        {
          term: "Two-factor theory",
          definition:
            "Herzberg: hygiene factors ngăn dissatisfaction; motivators tạo satisfaction.",
        },
        {
          term: "Hygiene factors",
          definition:
            "Pay, supervision, policy, working conditions; thiếu thì dissatisfaction, có đủ thì no dissatisfaction.",
        },
        {
          term: "McClelland's theory of needs",
          definition: "nAch, nPow, nAff là ba needs chính.",
        },
        {
          term: "ERG theory",
          definition: "Alderfer: Existence, Relatedness, Growth.",
        },
      ],
    },
    {
      id: "s3",
      heading: "Self-determination theory, CET & self-concordance",
      blocks: [
        calloutBlock(
          "key",
          "Self-determination theory (SDT) (R&J p134)",
          "Con người thích cảm giác có control over their actions; bất cứ điều gì biến một task từng được thích thành nghĩa vụ (obligation) sẽ undermine motivation. 3 nhu cầu tâm lý cơ bản từ slide: autonomy, competence, relatedness.",
        ),
        comparisonBlock(
          "SDT và các nhánh (R&J p134-135)",
          ["Khái niệm", "Nội dung"],
          [
            {
              label: "Cognitive evaluation theory (CET)",
              cells: [
                "Extrinsic rewards cho một task vốn intrinsic-interesting có thể GIẢM intrinsic interest — khi được trả tiền, việc “muốn làm” biến thành “phải làm”.",
              ],
            },
            {
              label: "Self-concordance",
              cells: [
                "Mức độ lý do theo đuổi goal khớp với interests & core values của cá nhân; theo đuổi goal vì intrinsic reason → hài lòng & perform tốt hơn. (sách) Người làm vì cảm giác NGHĨA VỤ (không intrinsic) vẫn có thể perform acceptably, nhưng chịu strain cao hơn.",
              ],
            },
            {
              label: "Hàm ý (implication)",
              cells: [
                "Manager nên cung cấp cả intrinsic lẫn extrinsic incentives; làm work interesting, ghi nhận, hỗ trợ growth; tránh để reward biến thành controlling.",
              ],
            },
          ],
        ),
        calloutBlock(
          "key",
          "Intrinsic → chất lượng, incentive → số lượng (sách)",
          "Meta-analysis xác nhận intrinsic motivation đóng góp cho CHẤT LƯỢNG công việc, incentives đóng góp cho SỐ LƯỢNG; intrinsic motivation dự đoán performance yếu đi khi incentive gắn TRỰC TIẾP vào performance (bonus theo sản lượng).",
        ),
        calloutBlock(
          "note",
          "Bẫy CET",
          "Không phải mọi reward đều hại. Reward hại intrinsic motivation nhất khi task vốn đã thú vị và reward bị cảm nhận là controlling. Với task nhàm chán, extrinsic reward vẫn cần.",
        ),
      ],
      keyTerms: [
        {
          term: "Self-determination theory",
          definition:
            "Theory nhấn mạnh nhu cầu control/autonomy trong hành động của con người.",
        },
        {
          term: "Cognitive evaluation theory",
          definition:
            "Extrinsic rewards có thể làm giảm intrinsic interest khi task vốn thú vị và reward bị cảm nhận là controlling.",
        },
        {
          term: "Self-concordance",
          definition:
            "Mức độ goal phù hợp với interests và core values của cá nhân.",
        },
      ],
    },
    {
      id: "s4",
      heading: "Goal-setting theory & MBO",
      blocks: [
        calloutBlock(
          "key",
          "Goal-setting theory (Locke) (R&J p135)",
          "Intentions to work toward a goal là nguồn motivation chính. Specific + difficult goals (khi accepted) + feedback → performance cao hơn “do your best”.",
        ),
        comparisonBlock(
          "Điều kiện để goal thúc đẩy performance (R&J p135-137)",
          ["Yếu tố", "Nội dung"],
          [
            {
              label: "Specificity",
              cells: [
                "Goal cụ thể tăng performance hơn goal mơ hồ như “do your best”.",
              ],
            },
            {
              label: "Difficulty",
              cells: [
                "Goal khó (đã accepted) → performance cao hơn goal dễ.",
              ],
            },
            {
              label: "Feedback",
              cells: [
                "Feedback, đặc biệt self-generated feedback, hướng dẫn behavior và mạnh hơn feedback từ bên ngoài.",
              ],
            },
            {
              label: "Goal commitment",
              cells: [
                "Cam kết cao nhất khi goal công khai, có internal locus of control, self-set, phù hợp năng lực.",
              ],
            },
            {
              label: "Moderators khác",
              cells: [
                "Task characteristics (đơn giản/quen thuộc/độc lập) và national culture ảnh hưởng quan hệ goal-performance. (sách) Văn hóa collectivistic + high power-distance: moderate achievable goals motivate HƠN difficult goals; trên interdependent tasks thì group goals hiệu quả hơn.",
              ],
            },
          ],
        ),
        comparisonBlock(
          "Promotion focus vs Prevention focus — 2 chiến lược self-regulation (sách)",
          ["Focus", "Cơ chế", "Ví dụ ôn thi"],
          [
            {
              label: "Promotion focus",
              cells: [
                "Strive qua advancement & accomplishment; APPROACH điều kiện đưa mình lại gần goal.",
                "Đọc tài liệu.",
              ],
            },
            {
              label: "Prevention focus",
              cells: [
                "Strive qua fulfill duties/obligations; AVOID điều kéo mình xa goal.",
                "Nhịn chơi game khi ôn thi.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Dùng cả promotion lẫn prevention (sách)",
          "Lý tưởng là CÓ CẢ HAI; người prevention outlook bị failure ảnh hưởng satisfaction NẶNG hơn → với họ nên set achievable goals, remove distractions, provide structure.",
        ),
        flowBlock(
          "s4",
          "MBO — cascading of objectives (Exhibit 7-3)",
          "tree",
          [
            {
              id: "co",
              label: "Overall organizational objectives",
              group: "concept",
              detail: "Mục tiêu cấp tổ chức, định hướng toàn hệ thống.",
            },
            {
              id: "div",
              label: "Divisional objectives",
              group: "concept",
              parent: "co",
              detail: "Mục tiêu cấp division được cascade từ organizational objectives.",
            },
            {
              id: "dept",
              label: "Departmental objectives",
              group: "concept",
              parent: "div",
              detail: "Mục tiêu cấp department được cascade từ divisional objectives.",
            },
            {
              id: "indiv",
              label: "Individual objectives",
              group: "concept",
              parent: "dept",
              detail: "Mục tiêu cá nhân nối behavior mỗi người vào mục tiêu tổ chức.",
            },
          ],
          [
            { from: "co", to: "div", label: "cascade" },
            { from: "div", to: "dept", label: "cascade" },
            { from: "dept", to: "indiv", label: "cascade" },
          ],
          "MBO chuyển goal-setting thành hệ thống: mục tiêu tổ chức được cascade xuống division → department → individual. (sách) GE gọi mục tiêu hung hăng là 'stretch goals'; biến thể MBOR dùng >30 năm ở chính phủ Đan Mạch/Na Uy/Thụy Điển. Khi MBO thất bại, thủ phạm thường là: kỳ vọng phi thực tế, top management thiếu commitment, không (muốn) thưởng theo goal accomplishment.",
        ),
        calloutBlock(
          "note",
          "Mặt tối của goal khó",
          "Goal quá tham vọng gắn chặt reward có thể đẩy người ta cạnh tranh phi đạo đức hoặc bỏ qua mastery. Participation trong set goal cho kết quả hỗn hợp.",
        ),
      ],
      keyTerms: [
        {
          term: "Goal-setting theory",
          definition:
            "Specific, difficult goals with feedback can raise performance when accepted.",
        },
        {
          term: "Management by objectives (MBO)",
          definition:
            "Hệ thống cascade objectives từ tổ chức xuống cá nhân.",
        },
        {
          term: "Self-generated feedback",
          definition:
            "Feedback do chính cá nhân tự theo dõi/tạo ra; thường mạnh hơn feedback từ bên ngoài.",
        },
        {
          term: "Promotion focus",
          definition:
            "Strive qua advancement/accomplishment và approach điều kiện đưa mình gần goal.",
        },
        {
          term: "Prevention focus",
          definition:
            "Strive qua duties/obligations và avoid điều kéo mình xa goal.",
        },
      ],
    },
    {
      id: "s5",
      heading: "Self-efficacy theory",
      blocks: [
        calloutBlock(
          "key",
          "Self-efficacy theory (Bandura) (R&J p137)",
          "Self-efficacy là niềm tin của cá nhân rằng mình CÓ THỂ thực hiện một task (còn gọi social cognitive / social learning theory). Self-efficacy cao → cố gắng hơn, kiên trì hơn ở task khó; tạo positive spiral efficacy↑ → engagement↑ → performance↑.",
        ),
        comparisonBlock(
          "4 nguồn tăng self-efficacy (Bandura) (R&J p138)",
          ["Nguồn", "Nội dung"],
          [
            {
              label: "Enactive mastery",
              cells: [
                "Nguồn mạnh nhất — trực tiếp có kinh nghiệm/thành công với task; training tương tác giúp cái này.",
              ],
            },
            {
              label: "Vicarious modeling",
              cells: [
                "Tự tin hơn khi thấy người khác, đặc biệt người giống mình, làm được.",
              ],
            },
            {
              label: "Verbal persuasion",
              cells: [
                "Được thuyết phục rằng mình có kỹ năng cần thiết, như motivational speakers hoặc manager khích lệ.",
              ],
            },
            {
              label: "Arousal",
              cells: [
                "Trạng thái “psyched up”: tốt với task cần năng lượng, hại với task cần bình tĩnh.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Pygmalion effect (self-fulfilling prophecy)",
          "Kỳ vọng của người khác có thể làm điều đó thành thật: GV tin HS thông minh sẽ dành nhiều thời gian hơn, kỳ vọng cao hơn → HS đạt tốt hơn. Cách mạnh nhất manager dùng verbal persuasion. Goal-setting & self-efficacy bổ sung nhau (Exhibit 7-4).",
        ),
        calloutBlock(
          "note",
          "Phê phán self-efficacy (sách)",
          "Intelligence + conscientiousness + emotional stability làm tăng self-efficacy mạnh đến mức một số researcher cho rằng self-efficacy một phần là BY-PRODUCT của người thông minh, tự tin — không hẳn nguồn motivation độc lập.",
        ),
      ],
      keyTerms: [
        {
          term: "Self-efficacy theory",
          definition: "Niềm tin của cá nhân rằng mình có thể thực hiện một task.",
        },
        {
          term: "Enactive mastery",
          definition:
            "Nguồn self-efficacy mạnh nhất: kinh nghiệm thành công trực tiếp.",
        },
        {
          term: "Vicarious modeling",
          definition:
            "Tăng efficacy bằng cách quan sát người khác tương tự mình làm được.",
        },
        {
          term: "Pygmalion effect",
          definition:
            "Self-fulfilling prophecy: kỳ vọng cao từ người khác có thể nâng performance.",
        },
      ],
    },
    {
      id: "s6",
      heading: "Reinforcement theory & OB modification",
      blocks: [
        calloutBlock(
          "key",
          "Reinforcement theory (R&J p140)",
          "Behavior là function của consequences của nó; behavior được environmentally caused. Trái ngược với goal-setting (cognitive), reinforcement là quan điểm behavioristic — bỏ qua inner state, tập trung vào điều xảy ra khi hành động.",
        ),
        comparisonBlock(
          "Reinforcement và các khái niệm liên quan (R&J p140-141)",
          ["Khái niệm", "Nội dung"],
          [
            {
              label: "Operant conditioning",
              cells: [
                "Người ta học behave theo cách để GET điều mình muốn hoặc AVOID điều không muốn; reinforcement củng cố behavior.",
              ],
            },
            {
              label: "Behaviorism (Skinner)",
              cells: [
                "Behavior theo stimuli một cách “unthinking”; radical behaviorism bác bỏ feelings/thoughts như nguyên nhân của behavior.",
              ],
            },
            {
              label: "Social-learning theory",
              cells: [
                "Học qua cả observation (xem models: cha mẹ, thầy cô, sếp) LẪN direct experience; người ta phản ứng theo consequences họ perceive, không phải objective consequences.",
              ],
            },
          ],
        ),
        flowBlock(
          "s6",
          "OB modification — mô hình A-B-C (slide 47)",
          "horizontal",
          [
            {
              id: "ante",
              label: "Antecedents",
              group: "concept",
              detail: "Điều xảy ra TRƯỚC behavior.",
            },
            {
              id: "beh",
              label: "Behavior",
              group: "concept",
              detail: "Điều người ta nói hoặc làm.",
            },
            {
              id: "cons",
              label: "Consequences",
              group: "concept",
              detail: "Điều xảy ra SAU behavior.",
            },
          ],
          [
            { from: "ante", to: "beh", label: "trước" },
            { from: "beh", to: "cons", label: "sau" },
          ],
          "Shaping behavior (Skinner): reinforce từng bước tiến gần desired response; consequence quyết định behavior lặp lại hay không.",
        ),
      ],
      keyTerms: [
        {
          term: "Reinforcement theory",
          definition:
            "Behavior là function của consequences; tập trung vào external environment.",
        },
        {
          term: "Operant conditioning",
          definition:
            "Learning để get desired consequences hoặc avoid undesired consequences.",
        },
        {
          term: "Behaviorism",
          definition:
            "Quan điểm cho rằng behavior theo stimuli/consequences, không dựa vào inner states.",
        },
        {
          term: "Social-learning theory",
          definition:
            "Learning qua observation và direct experience; perception of consequences rất quan trọng.",
        },
      ],
    },
    {
      id: "s7",
      heading: "Equity theory & organizational justice",
      blocks: [
        calloutBlock(
          "key",
          "Equity theory (R&J p141)",
          "Nhân viên so sánh RATIO outcomes/inputs của mình với ratio của một referent (thường coworker/người làm việc tương tự). Bằng nhau → equity; lệch → tension thúc đẩy điều chỉnh.",
        ),
        comparisonBlock(
          "Ratio comparison & phản ứng khi inequity (Exhibit 7-5; R&J p141-142)",
          ["Nội dung", "Diễn giải"],
          [
            {
              label: "O/I(A) < O/I(B)",
              cells: [
                "Under-rewarded inequity: mình nhận ít hơn so với công sức → căng thẳng, bất mãn.",
              ],
            },
            {
              label: "O/I(A) = O/I(B)",
              cells: ["Equity — cảm thấy công bằng."],
            },
            {
              label: "O/I(A) > O/I(B)",
              cells: [
                "Over-rewarded inequity: nhận nhiều hơn so với referent → có thể thấy guilt.",
              ],
            },
            {
              label: "6 phản ứng khi perceive inequity",
              cells: [
                "(1) Change inputs; (2) Change outcomes; (3) Distort perceptions of self; (4) Distort perceptions of others; (5) Choose a different referent; (6) Leave the field (nghỉ việc).",
              ],
            },
          ],
        ),
        comparisonBlock(
          "4 loại organizational justice (Exhibit 7-6; R&J p142-143)",
          ["Loại", "Định nghĩa", "Câu hỏi cốt lõi"],
          [
            {
              label: "Distributive justice",
              cells: [
                "Fairness của outcome/allocation như pay, recognition.",
                "Tôi có nhận được phần XỨNG ĐÁNG không?",
              ],
            },
            {
              label: "Procedural justice",
              cells: [
                "Fairness của process dùng để quyết định phân bổ.",
                "Quy trình quyết định có công bằng, có cho tôi tiếng nói không?",
              ],
            },
            {
              label: "Informational justice",
              cells: [
                "Mức độ manager cung cấp giải thích trung thực cho quyết định. (sách) Khi báo tin xấu, excuse ('tôi biết điều này tệ, nhưng đó không phải quyết định của tôi') hiệu quả hơn justification ('tôi quyết vậy nhưng chuyện không lớn').",
                "Tôi có được giải thích rõ ràng, thành thật không?",
              ],
            },
            {
              label: "Interpersonal justice",
              cells: [
                "Mức độ nhân viên được đối xử với dignity & respect.",
                "Tôi có được đối xử tôn trọng không?",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Justice outcomes",
          "Khi thấy được đối xử công bằng, nhân viên tăng task performance & citizenship (OCB), giảm counterproductive behavior. Distributive & procedural gắn với performance; informational & interpersonal gắn với citizenship.",
        ),
        calloutBlock(
          "note",
          "Ensuring justice — 2 kiểu manager (sách)",
          "Manager 'tính' công bằng theo rule-adherence hành xử công bằng hơn khi NHIỀU rules/ít discretion; manager hành xử theo affect (positive affect cao) công bằng hơn khi NHIỀU discretion → guideline cứng không hiệu quả phổ quát.",
        ),
        comparisonBlock(
          "Culture & justice — nghiên cứu 32 nước (sách)",
          ["Giá trị văn hóa trội", "Chương trình justice phù hợp"],
          [
            {
              label: "Individualism cao (Úc/Mỹ)",
              cells: ["Competitive pay + thưởng cá nhân xuất sắc."],
            },
            {
              label: "Uncertainty avoidance (Pháp)",
              cells: ["Fixed pay + employee participation."],
            },
            {
              label: "Femininity (Thụy Điển)",
              cells: ["Work–life balance + social recognition."],
            },
            {
              label: "Low power-distance (Áo)",
              cells: [
                "Công khai justify chênh lệch leader–worker + biểu tượng ethical leadership.",
              ],
            },
            {
              label: "Justice perceptions",
              cells: [
                "Quan trọng NHẤT ở nước individualistic, feminine, uncertainty-avoidance, low power-distance.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "Equity theory",
          definition:
            "Nhân viên so sánh ratio outcomes/inputs với referent để đánh giá fairness.",
        },
        {
          term: "Organizational justice",
          definition:
            "Nhận thức tổng thể về fairness trong workplace.",
        },
        {
          term: "Distributive justice",
          definition: "Fairness của outcome/allocation.",
        },
        {
          term: "Procedural justice",
          definition: "Fairness của process ra quyết định.",
        },
        {
          term: "Informational justice",
          definition: "Fairness trong giải thích/thông tin về quyết định.",
        },
        {
          term: "Interpersonal justice",
          definition: "Fairness trong cách đối xử với dignity & respect.",
        },
      ],
    },
    {
      id: "s8",
      heading: "Expectancy theory & integration",
      blocks: [
        calloutBlock(
          "key",
          "Expectancy theory (Vroom) (R&J p145)",
          "Sức mạnh của xu hướng hành động phụ thuộc kỳ vọng rằng hành động sẽ dẫn tới một outcome và sức hấp dẫn của outcome đó. Lý thuyết này giải thích vì sao nhiều người chỉ làm mức tối thiểu.",
        ),
        comparisonBlock(
          "3 relationships của expectancy theory (Exhibit 7-7; R&J p145-146)",
          ["Relationship", "Câu hỏi của nhân viên"],
          [
            {
              label: "Effort-performance",
              cells: [
                "Nếu tôi bỏ nỗ lực, liệu có dẫn tới performance được ghi nhận không?",
              ],
            },
            {
              label: "Performance-reward",
              cells: [
                "Nếu tôi perform tốt, liệu có được reward tương xứng không?",
              ],
            },
            {
              label: "Rewards-personal goals",
              cells: [
                "Reward đó có phải thứ tôi thực sự muốn / phục vụ mục tiêu cá nhân không?",
              ],
            },
          ],
        ),
        flowBlock(
          "s8",
          "Integrating contemporary theories (Exhibit 7-8; R&J p147)",
          "horizontal",
          [
            {
              id: "effort",
              label: "Individual effort",
              group: "concept",
              detail: "Nỗ lực cá nhân chịu ảnh hưởng bởi ability, opportunity, goals và expectancy.",
            },
            {
              id: "perf",
              label: "Individual performance",
              group: "concept",
              detail: "Performance được objective evaluation ghi nhận hoặc bỏ sót.",
            },
            {
              id: "rewards",
              label: "Organizational rewards",
              group: "concept",
              detail: "Rewards chịu tác động bởi reinforcement và equity/justice.",
            },
            {
              id: "goals",
              label: "Personal goals",
              group: "concept",
              detail: "Reward có motivational force khi khớp personal goals.",
            },
          ],
          [
            { from: "effort", to: "perf", label: "perform" },
            { from: "perf", to: "rewards", label: "reward" },
            { from: "rewards", to: "goals", label: "goal" },
          ],
          "Nền là expectancy (7-7): opportunity/ability + objective evaluation nuôi effort; goals direct behavior; reinforcement & equity/justice tác động rewards; high nAch bỏ qua rewards đi thẳng tới personal goals. Các theory bổ sung nhau.",
        ),
        calloutBlock(
          "note",
          "Các theory KHÔNG loại trừ nhau",
          "Mỗi theory soi một mặt. Goal-setting giúp effort→performance; self-efficacy nuôi confidence; equity/justice + reinforcement định hình rewards; expectancy nối performance→reward→goals. Đề thi thích hỏi “theory nào giải thích tình huống này”.",
        ),
      ],
      keyTerms: [
        {
          term: "Expectancy theory",
          definition:
            "Motivation phụ thuộc expectancy, instrumentality và valence của outcome.",
        },
      ],
    },
    {
      id: "s9",
      heading: "Job engagement",
      blocks: [
        calloutBlock(
          "key",
          "Job engagement (R&J p146)",
          "Job engagement là mức độ đầu tư physical, cognitive và emotional energies của nhân viên vào job performance (ví dụ y tá Joseph hoàn toàn hòa mình vào việc chăm bệnh nhân). Sâu hơn “thích việc”.",
        ),
        calloutBlock(
          "note",
          "Vì sao engagement quan trọng & đến từ đâu",
          "Gallup: tổ chức có nhiều engaged employees thì productivity cao hơn, ít tai nạn, turnover thấp; engagement gắn với task performance & OCB. Nguồn: cảm nhận công việc có ý nghĩa, đủ resources, match giá trị cá nhân-tổ chức, leadership truyền cảm hứng sứ mệnh.",
        ),
      ],
      keyTerms: [
        {
          term: "Job engagement",
          definition:
            "Mức độ đầu tư physical, cognitive và emotional energies vào job performance.",
        },
      ],
    },
    {
      id: "s10",
      heading: "Applied: job design (JCM) & job redesign",
      blocks: [
        calloutBlock(
          "key",
          "Job Characteristics Model (JCM) — Hackman & Oldham (R&J p151)",
          "Job design (cách sắp xếp các element của công việc) ảnh hưởng effort. JCM mô tả job qua 5 core dimensions.",
        ),
        flowBlock(
          "s10",
          "JCM: từ core dimensions đến outcomes (Exhibit 8-1)",
          "horizontal",
          [
            {
              id: "dim",
              label: "Core job dimensions (5)",
              group: "concept",
              detail: "Skill variety, task identity, task significance, autonomy, feedback.",
            },
            {
              id: "states",
              label: "Critical psychological states",
              group: "concept",
              detail: "Experienced meaningfulness, responsibility, knowledge of results.",
            },
            {
              id: "out",
              label: "Personal & work outcomes",
              group: "concept",
              detail: "High motivation/performance/satisfaction, low absenteeism.",
            },
          ],
          [
            { from: "dim", to: "states", label: "states" },
            { from: "states", to: "out", label: "outcome" },
          ],
          "Skill variety/task identity/task significance → experienced meaningfulness; autonomy → experienced responsibility; feedback → knowledge of results → high motivation/performance/satisfaction, low absenteeism. Moderator: employee growth-need strength.",
        ),
        comparisonBlock(
          "5 core job dimensions (R&J p151)",
          ["Dimension", "Nội dung"],
          [
            {
              label: "Skill variety",
              cells: [
                "Mức độ job cần nhiều hoạt động & kỹ năng khác nhau.",
              ],
            },
            {
              label: "Task identity",
              cells: [
                "Mức độ job hoàn thành một mảng công việc trọn vẹn, nhận diện được.",
              ],
            },
            {
              label: "Task significance",
              cells: [
                "Mức độ job ảnh hưởng đến cuộc sống/công việc của người khác.",
              ],
            },
            {
              label: "Autonomy",
              cells: [
                "Mức độ job cho tự do, độc lập, quyết định cách làm.",
              ],
            },
            {
              label: "Feedback",
              cells: [
                "Mức độ thực hiện job tạo thông tin trực tiếp & rõ ràng về performance của chính mình.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Motivating Potential Score (MPS)",
          "MPS = [(Skill variety + Task identity + Task significance) / 3] × Autonomy × Feedback. Job có MPS cao khi ít nhất một trong ba yếu tố meaningfulness cao VÀ cả autonomy lẫn feedback đều cao. Đây là index khái niệm, không phải bài tính.",
        ),
        comparisonBlock(
          "Hai cách redesign job (R&J p153-154)",
          ["Cách", "Nội dung"],
          [
            {
              label: "Job rotation",
              cells: [
                "Luân chuyển nhân viên qua nhiều task cùng level (Singapore Airlines) → giảm boredom, tăng motivation & hiểu đóng góp; nhược điểm: tăng training cost, giảm productivity tạm thời.",
              ],
            },
            {
              label: "Relational job design",
              cells: [
                "Kết nối nhân viên với beneficiaries (khách hàng, bệnh nhân) để thấy prosocial impact công việc mình → tăng meaningfulness & commitment.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "JCM hiệu lực tới đâu? (sách, p152–153)",
          "Nhiều bằng chứng job characteristics → satisfaction + organizational commitment QUA increased motivation; nhân viên \"other oriented\" → quan hệ intrinsic characteristics↔satisfaction yếu hơn; psychological ownership tăng motivation (nhất là khi shared trong group); virtual work làm meaningfulness/responsibility/knowledge-of-results SUY GIẢM — manager bù bằng quan hệ cá nhân + tăng task significance/autonomy/feedback. JCM tương đối INDIVIDUALISTIC: Nigeria (collectivistic) correlations khác data nước individualistic; nhưng intrinsic motivators dự đoán satisfaction + involvement NHƯ NHAU ở Mỹ/Nhật/Hungary — cần thêm research.",
        ),
      ],
      keyTerms: [
        {
          term: "Job design",
          definition: "Cách các elements của một job được sắp xếp.",
        },
        {
          term: "Job characteristics model (JCM)",
          definition:
            "Model mô tả job qua 5 core dimensions và critical psychological states.",
        },
        {
          term: "Motivating potential score (MPS)",
          definition:
            "Index kết hợp skill variety, task identity, task significance, autonomy và feedback.",
        },
        {
          term: "Job rotation",
          definition: "Luân chuyển nhân viên qua nhiều task cùng level.",
        },
        {
          term: "Relational job design",
          definition:
            "Thiết kế job để nhân viên thấy tác động lên beneficiaries.",
        },
      ],
    },
    {
      id: "s11",
      heading: "Applied: alternative work arrangements",
      blocks: [
        comparisonBlock(
          "Alternative work arrangements (R&J p154-158)",
          ["Hình thức", "Nội dung"],
          [
            {
              label: "Flextime",
              cells: [
                "Nhân viên làm đủ số giờ/tuần nhưng linh hoạt thời điểm quanh một common core (Exhibit 8-2) → giảm absenteeism, tăng productivity; hiệu quả nhất khi coi là work-life balance strategy. Không hợp mọi job.",
              ],
            },
            {
              label: "Job sharing",
              cells: [
                "Hai hoặc nhiều người chia nhau một full-time job → giữ được talent linh hoạt.",
              ],
            },
            {
              label: "Telecommuting",
              cells: [
                "Làm việc từ xa ≥2 ngày/tuần qua công nghệ → linh hoạt; rủi ro “out of sight, out of mind” (mất face time, ảnh hưởng promotion).",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "Flextime",
          definition:
            "Arrangement cho phép linh hoạt thời điểm làm việc quanh common core.",
        },
        {
          term: "Job sharing",
          definition: "Hai hoặc nhiều người chia một full-time job.",
        },
        {
          term: "Telecommuting",
          definition: "Làm việc từ xa qua công nghệ ít nhất vài ngày/tuần.",
        },
      ],
    },
    {
      id: "s11b",
      heading: "Applied: employee involvement & participation (EIP)",
      blocks: [
        comparisonBlock(
          "Employee involvement & participation — EIP (R&J p157-159)",
          ["Hình thức", "Nội dung"],
          [
            {
              label: "Participative management",
              cells: [
                "Cấp dưới chia sẻ đáng kể quyền ra quyết định với cấp trên trực tiếp; cần trust; kết quả với performance hỗn hợp nhưng tăng satisfaction/commitment.",
              ],
            },
            {
              label: "Representative participation",
              cells: [
                "Nhân viên tham gia ra quyết định qua một nhóm đại diện nhỏ: works councils & board representatives (phổ biến ở Tây Âu).",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Cultural EIP",
          "EIP nên tailor theo chuẩn văn hóa; ở văn hóa power-distance cao (đề cao hierarchy) EIP ít được ưa. Nghiên cứu ở Trung Quốc cho thấy nhân viên ít traditional hưởng lợi nhiều hơn từ participative management.",
        ),
      ],
      keyTerms: [
        {
          term: "Employee involvement and participation (EIP)",
          definition:
            "Các chương trình tăng quyền tham gia/ảnh hưởng của nhân viên vào quyết định.",
        },
        {
          term: "Participative management",
          definition:
            "Cấp dưới chia sẻ đáng kể quyền ra quyết định với cấp trên trực tiếp.",
        },
        {
          term: "Representative participation",
          definition:
            "Nhân viên tham gia qua đại diện như works councils hoặc board representatives.",
        },
      ],
    },
    {
      id: "s12",
      heading: "Applied: what to pay — pay structure (sách)",
      blocks: [
        calloutBlock(
          "key",
          "What to pay: pay structure trước khi bàn variable-pay (sách, p159)",
          "Pay bị underestimate — 45% employers nghĩ pay là lý do mất top talent nhưng 71% TOP PERFORMERS nói đó là lý do hàng đầu. Set pay = cân bằng internal equity (giá trị công việc với tổ chức — job evaluation) và external equity (cạnh tranh với ngành — pay surveys); lead/match/lag thị trường là quyết định CHIẾN LƯỢC: trả cao → người giỏi hơn, morale/productivity/customer satisfaction cao hơn (study 126 tổ chức) nhưng pay là chi phí đơn lớn nhất (case Costco $45.000 tăng trưởng 8%/năm vs Walmart-Sam's Club $17.500 tăng trưởng 1%).",
        ),
      ],
      keyTerms: [
        {
          term: "Internal equity",
          definition:
            "Giá trị công việc đối với tổ chức, thường xác định bằng job evaluation.",
        },
        {
          term: "External equity",
          definition:
            "Mức cạnh tranh của pay với thị trường/ngành, thường xác định bằng pay surveys.",
        },
      ],
    },
    {
      id: "s12b",
      heading: "Applied: variable-pay cấp CÁ NHÂN",
      blocks: [
        comparisonBlock(
          "Variable pay cấp cá nhân (R&J p160-162)",
          ["Chương trình", "Nội dung"],
          [
            {
              label: "Piece-rate pay plan",
              cells: [
                "Trả một khoản cố định cho mỗi đơn vị sản phẩm; tạo productivity cao nhưng rủi ro tài chính cho worker, không hợp khi output do yếu tố ngoài kiểm soát.",
              ],
            },
            {
              label: "Merit-based pay plan",
              cells: [
                "Trả dựa trên performance appraisal ratings; high performers nhận raise lớn hơn; hạn chế: phụ thuộc appraisal chủ quan, pool ngân sách biến động.",
              ],
            },
            {
              label: "Bonus",
              cells: [
                "Thưởng cho performance GẦN ĐÂY (không cộng dồn như merit); incentive mạnh hơn nhưng khiến thu nhập dễ bị cắt khi khó khăn.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "Variable-pay program",
          definition:
            "Pay plan trong đó một phần compensation thay đổi theo performance hoặc kết quả.",
        },
        {
          term: "Piece-rate pay plan",
          definition: "Trả cố định cho mỗi đơn vị sản phẩm.",
        },
        {
          term: "Merit-based pay plan",
          definition: "Raise dựa trên performance appraisal ratings.",
        },
        {
          term: "Bonus",
          definition: "Thưởng cho recent performance, thường không cộng vào base pay.",
        },
      ],
    },
    {
      id: "s12c",
      heading: "Applied: variable-pay cấp TỔ CHỨC, benefits, recognition & implications",
      blocks: [
        comparisonBlock(
          "Variable pay cấp tổ chức (R&J p162-163)",
          ["Chương trình", "Nội dung"],
          [
            {
              label: "Profit-sharing plan",
              cells: [
                "Phân bổ compensation theo một công thức dựa trên lợi nhuận công ty (cash hoặc stock options).",
              ],
            },
            {
              label: "Employee stock ownership plan (ESOP)",
              cells: [
                "Nhân viên sở hữu cổ phần (thường dưới giá thị trường); tăng satisfaction & innovation NHẤT khi họ cảm nhận được psychological ownership.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Flexible benefits & pay secrecy",
          "Flexible benefits cho mỗi nhân viên tự thiết kế gói phúc lợi hợp nhu cầu (khớp expectancy theory) → cá nhân hóa reward. Pay secrecy (giấu lương) thường có hại: tăng cảm nhận pay là subjective, làm giảm động lực high performers.",
        ),
        calloutBlock(
          "key",
          "Employee recognition programs & intrinsic rewards",
          "Ghi nhận (lời khen, Employee of the Month) là intrinsic reward rẻ nhưng mạnh, ví dụ Laura ở fast-food gắn bó vì được sếp khen công khai. Cần công bằng để tránh bị xem là thiên vị.",
        ),
        calloutBlock(
          "note",
          "Implications for managers (R&J p165 + slide 49)",
          "(1) Recognize individual differences — thiết kế job hợp nhu cầu từng người; (2) Use goals & feedback; (3) Cho nhân viên participate quyết định ảnh hưởng họ; (4) Link rewards to performance; (5) Check the system for equity. Và luôn nhớ motivation là culture-bound.",
        ),
        calloutBlock(
          "key",
          "So what — kiến thức này đổi hành động của bạn",
          "Motivation là process thiết kế được, không phải trait bẩm sinh của nhân viên. Hành động: gặp ca \"thiếu động lực\", chạy checklist 3 câu thay vì phán xét con người — (1) goal đã specific + difficult + có feedback chưa (goal-setting)? (2) phần thưởng có gắn performance và có công bằng không (expectancy + equity/justice)? (3) bản thân công việc có đủ 5 core dimensions chưa (JCM)? Hầu hết vấn đề động lực nằm ở một trong ba chỗ đó.",
        ),
      ],
      keyTerms: [
        {
          term: "Profit-sharing plan",
          definition: "Compensation dựa trên lợi nhuận công ty theo công thức.",
        },
        {
          term: "Employee stock ownership plan (ESOP)",
          definition: "Plan cho nhân viên sở hữu cổ phần công ty.",
        },
        {
          term: "Flexible benefits",
          definition: "Benefit package cá nhân hóa theo nhu cầu từng nhân viên.",
        },
        {
          term: "Employee recognition program",
          definition: "Chương trình ghi nhận đóng góp như praise hoặc award.",
        },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "A salesperson works intensely, directs effort toward qualified leads, and sustains that effort for months to reach a target. Which process is illustrated?",
      options: [
        { id: "a", text: "A stable hardworking personality trait", isCorrect: false, rationale: "Cơ chế: stem mô tả effort hướng tới một target trong một giai đoạn, không chứng minh trait vĩnh viễn. Bẫy: làm việc bền bỉ dễ bị gọi là personality. Khóa: motivation là process thay đổi theo goal và tình huống." },
        { id: "b", text: "Motivation through intensity, direction, and persistence of effort toward a goal", isCorrect: true, rationale: "Cơ chế: works intensely = intensity, qualified leads = direction, for months = persistence, target = goal. Bẫy: chỉ chú ý cường độ. Khóa: đủ ba yếu tố mới mô tả motivation." },
        { id: "c", text: "An overtime reward, even though no reward is mentioned", isCorrect: false, rationale: "Cơ chế: reward có thể tác động motivation nhưng stem không nêu tiền hay overtime. Bẫy: salesperson và target gợi incentive pay. Khóa: reward là antecedent/outcome, không phải process đang quan sát." },
        { id: "d", text: "Strict managerial control over the salesperson", isCorrect: false, rationale: "Cơ chế: không có supervision hay coercion trong tình huống. Bẫy: sustained effort có thể do kiểm soát. Khóa: control là một tác động tiềm năng, không định nghĩa motivation." },
        { id: "e", text: "A positive emotion that guarantees high performance", isCorrect: false, rationale: "Cơ chế: stem không nêu emotion và motivation không bảo đảm performance nếu constraints khác tồn tại. Bẫy: effort tích cực dễ bị đồng nhất với good mood. Khóa: affect khác intensity-direction-persistence." },
      ],
      difficulty: "basic",
      conceptTested: "Motivation definition",
      takeaway: "Motivation = intensity + direction + persistence của effort hướng tới goal.",
    },
    {
      id: "q02",
      stem: "A supervisor says, “She works extremely hard, so she must be highly motivated,” but her effort is spent on tasks that do not help organizational goals. Which motivation element is being ignored?",
      options: [
        { id: "a", text: "Direction", isCorrect: true, rationale: "Cơ chế: direction hỏi effort có được channel đúng toward organizational goals không. Bẫy: hard work làm người học chỉ nhìn intensity. Khóa: effort mạnh nhưng sai hướng vẫn không tạo organizational value." },
        { id: "b", text: "Intensity", isCorrect: false, rationale: "Cơ chế: stem đã nói works extremely hard, tức intensity cao. Bẫy: intensity là yếu tố dễ thấy nhất. Khóa: vấn đề nằm ở hướng effort." },
        { id: "c", text: "Persistence", isCorrect: false, rationale: "Cơ chế: persistence là duy trì bao lâu. Bẫy: “extremely hard” có thể gợi làm lâu. Khóa: stem nhấn tasks không giúp organizational goals." },
        { id: "d", text: "Self-actualization", isCorrect: false, rationale: "Cơ chế: self-actualization là Maslow need, không phải 1 trong 3 yếu tố định nghĩa motivation. Bẫy: need theory cũng thuộc motivation. Khóa: câu hỏi hỏi element của process." },
        { id: "e", text: "Job rotation", isCorrect: false, rationale: "Cơ chế: job rotation là applied job redesign, không phải element motivation. Bẫy: task mismatch nghe như nên xoay việc. Khóa: thiếu direction." },
      ],
      difficulty: "basic",
      conceptTested: "Intensity, direction, persistence",
      takeaway: "Nói “chăm chỉ” mới chạm intensity; OB còn hỏi effort có đúng hướng organizational goals không.",
    },
    {
      id: "q03",
      stem: "In Maslow's hierarchy, what happens after a lower-level need is substantially satisfied?",
      options: [
        { id: "a", text: "The next higher-level need becomes dominant", isCorrect: true, rationale: "Cơ chế: Maslow giả định nhu cầu tầng dưới thỏa mãn thì tầng trên trở nên dominant. Bẫy: tưởng mọi need luôn equal. Khóa: hierarchy vận hành theo thứ bậc." },
        { id: "b", text: "All needs disappear permanently", isCorrect: false, rationale: "Cơ chế: satisfaction không làm mọi need biến mất. Bẫy: “satisfied” nghe như kết thúc động cơ. Khóa: một need khác trở nên nổi bật hơn." },
        { id: "c", text: "Only hygiene factors can motivate the person", isCorrect: false, rationale: "Cơ chế: hygiene factors thuộc Herzberg, không phải Maslow. Bẫy: cùng nhóm early theories. Khóa: phân biệt hierarchy với two-factor." },
        { id: "d", text: "The person automatically becomes a high achiever", isCorrect: false, rationale: "Cơ chế: high achiever thuộc McClelland nAch. Bẫy: achievement nghe giống tầng esteem/self-actualization. Khóa: Maslow không nói automatically high nAch." },
        { id: "e", text: "The person stops responding to organizational goals", isCorrect: false, rationale: "Cơ chế: Maslow không kết luận như vậy. Bẫy: self-actualization nghe cá nhân hóa. Khóa: dominant need chuyển tầng, không rời toàn bộ workplace." },
      ],
      difficulty: "basic",
      conceptTested: "Maslow hierarchy of needs",
      takeaway: "Maslow: lower need substantially satisfied → next higher need becomes dominant, dù research support hạn chế.",
    },
    {
      id: "q04",
      stem: "According to Herzberg's two-factor theory, which statement is most accurate?",
      options: [
        { id: "a", text: "Improving hygiene factors mainly removes dissatisfaction, while motivators create satisfaction", isCorrect: true, rationale: "Cơ chế: hygiene ngăn dissatisfaction; motivators tạo satisfaction. Bẫy: nghĩ pay/working conditions tự động motivate mạnh. Khóa: Herzberg dùng dual continuum." },
        { id: "b", text: "The opposite of satisfaction is dissatisfaction", isCorrect: false, rationale: "Cơ chế: Herzberg nói opposite of satisfaction là no satisfaction, còn opposite of dissatisfaction là no dissatisfaction. Bẫy: logic thường ngày kéo về một continuum. Khóa: dual continuum." },
        { id: "c", text: "Hygiene factors include achievement, recognition, responsibility, and growth", isCorrect: false, rationale: "Cơ chế: đó là motivators. Bẫy: recognition nghe như policy reward. Khóa: hygiene là supervision, pay, policy, working conditions." },
        { id: "d", text: "Motivators only prevent dissatisfaction but never create satisfaction", isCorrect: false, rationale: "Cơ chế: motivators chính là nguồn tạo satisfaction. Bẫy: đảo vai trò hygiene và motivator. Khóa: nhớ “motivator” tạo satisfaction." },
        { id: "e", text: "Herzberg's theory says employee needs are always activated in a strict hierarchy", isCorrect: false, rationale: "Cơ chế: strict hierarchy là Maslow, không phải Herzberg. Bẫy: đều là early need theories. Khóa: Herzberg = two-factor." },
      ],
      difficulty: "intermediate",
      conceptTested: "Herzberg two-factor theory",
      takeaway: "Herzberg: hygiene giúp no dissatisfaction; motivators giúp satisfaction.",
    },
    {
      id: "q05",
      stem: "Which profile best fits McClelland's high need for achievement (high nAch)?",
      options: [
        { id: "a", text: "Prefers moderately difficult tasks, roughly 50 percent success probability, personal responsibility, and feedback", isCorrect: true, rationale: "Cơ chế: high nAch thích moderate risk, xác suất thành công khoảng 0.5 và feedback rõ. Bẫy: tưởng achiever chọn risk cực cao. Khóa: thử thách vừa đủ để thấy thành tựu do mình tạo." },
        { id: "b", text: "Avoids feedback and chooses tasks that are either impossible or effortless", isCorrect: false, rationale: "Cơ chế: high nAch cần feedback và moderate difficulty. Bẫy: “impossible” nghe ambitious. Khóa: nAch không phải liều lĩnh cực đoan." },
        { id: "c", text: "Mainly wants friendly, close relationships and avoids responsibility", isCorrect: false, rationale: "Cơ chế: friendly relationships là nAff. Bẫy: need theory có nhiều needs. Khóa: nAch = excel/achievement." },
        { id: "d", text: "Mainly wants to make others behave in a way they would not otherwise behave", isCorrect: false, rationale: "Cơ chế: đó là nPow. Bẫy: managers hay cần power. Khóa: nAch khác nPow." },
        { id: "e", text: "Always becomes the best manager because achievement drive is enough", isCorrect: false, rationale: "Cơ chế: high nAch không đảm bảo good manager. Bẫy: achievement nghe giống managerial success. Khóa: quản lý còn cần làm việc qua người khác." },
      ],
      difficulty: "basic",
      conceptTested: "McClelland's nAch",
      takeaway: "High nAch thích challenge vừa phải, trách nhiệm cá nhân và feedback; không tự động là good manager.",
    },
    {
      id: "q06",
      stem: "When are extrinsic rewards most likely to reduce intrinsic motivation according to cognitive evaluation theory?",
      options: [
        { id: "a", text: "When the task was already intrinsically interesting and the reward feels controlling", isCorrect: true, rationale: "Cơ chế: CET nói reward có thể biến “muốn làm” thành “phải làm” khi task vốn thú vị và reward controlling. Bẫy: kết luận mọi reward đều xấu. Khóa: điều kiện là intrinsic-interesting + controlling." },
        { id: "b", text: "Whenever any employee receives any pay for any task", isCorrect: false, rationale: "Cơ chế: CET không nói mọi pay đều hại. Bẫy: rút gọn quá mức. Khóa: task nhàm chán vẫn cần extrinsic rewards." },
        { id: "c", text: "Only when rewards are flexible benefits chosen by employees", isCorrect: false, rationale: "Cơ chế: flexible benefits thường khớp nhu cầu cá nhân hơn. Bẫy: vẫn là extrinsic. Khóa: vấn đề là controlling perception." },
        { id: "d", text: "When a goal is specific, difficult, and accepted", isCorrect: false, rationale: "Cơ chế: đó là goal-setting theory. Bẫy: cùng contemporary theories. Khóa: CET tập trung intrinsic interest vs controlling rewards." },
        { id: "e", text: "When the employee has low need for affiliation", isCorrect: false, rationale: "Cơ chế: nAff thuộc McClelland, không phải CET condition. Bẫy: đều là motivation concepts. Khóa: nhớ autonomy/control." },
      ],
      difficulty: "intermediate",
      conceptTested: "Cognitive evaluation theory",
      takeaway: "CET không chống reward nói chung; bẫy nằm ở reward controlling trên task vốn đã thú vị.",
    },
    {
      id: "q07",
      stem: "Which statement best describes self-concordance?",
      options: [
        { id: "a", text: "The degree to which a person's reasons for pursuing a goal fit their interests and core values", isCorrect: true, rationale: "Cơ chế: self-concordance đo độ khớp giữa goal reasons với interests/core values. Bẫy: thấy goal là nghĩ goal-setting. Khóa: câu này hỏi lý do bên trong của goal." },
        { id: "b", text: "The tendency to compare one's outcome/input ratio with a referent", isCorrect: false, rationale: "Cơ chế: đó là equity theory. Bẫy: cả hai đều liên quan personal perception. Khóa: ratio comparison khác value-goal fit." },
        { id: "c", text: "A pay plan that gives employees stock ownership", isCorrect: false, rationale: "Cơ chế: đó là ESOP. Bẫy: ownership nghe như “core values”. Khóa: self-concordance không phải reward program." },
        { id: "d", text: "A manager's belief that employees are inherently lazy", isCorrect: false, rationale: "Cơ chế: đó là Theory X. Bẫy: đều thuộc motivation topic. Khóa: self-concordance là personal goal fit." },
        { id: "e", text: "The process of cascading organizational objectives to departments and individuals", isCorrect: false, rationale: "Cơ chế: đó là MBO. Bẫy: đều nói về goals. Khóa: MBO là hệ thống mục tiêu; self-concordance là intrinsic reason." },
      ],
      difficulty: "basic",
      conceptTested: "Self-concordance",
      takeaway: "Goal theo đuổi vì intrinsic reason và hợp core values thường bền và tạo satisfaction/performance tốt hơn.",
    },
    {
      id: "q08",
      stem: "Which goal is most consistent with goal-setting theory?",
      options: [
        { id: "a", text: "Do your best this semester", isCorrect: false, rationale: "Cơ chế: “do your best” mơ hồ nên yếu hơn goal specific. Bẫy: nghe tích cực. Khóa: goal-setting cần specificity." },
        { id: "b", text: "Improve sales by 12 percent this quarter, with weekly progress feedback", isCorrect: true, rationale: "Cơ chế: goal này specific, difficult có thể accepted, và có feedback. Bẫy: không phải chỉ cần khó. Khóa: specific + difficult + feedback." },
        { id: "c", text: "Avoid all difficult goals so employees never feel pressure", isCorrect: false, rationale: "Cơ chế: goal khó khi accepted thường tăng performance hơn goal dễ. Bẫy: sợ pressure. Khóa: difficulty cần đi cùng acceptance và feedback." },
        { id: "d", text: "Give employees no feedback so they stay independent", isCorrect: false, rationale: "Cơ chế: feedback hướng dẫn behavior. Bẫy: autonomy không đồng nghĩa thiếu feedback. Khóa: feedback là thành phần chính." },
        { id: "e", text: "Pay everyone the same bonus regardless of performance", isCorrect: false, rationale: "Cơ chế: đây là reward design, không phải goal-setting; còn làm yếu link reward-performance. Bẫy: công bằng bình quân nghe dễ chịu. Khóa: câu hỏi hỏi goal attributes." },
      ],
      difficulty: "basic",
      conceptTested: "Goal-setting theory",
      takeaway: "Goal-setting mạnh nhất khi goal specific, difficult nhưng accepted, và có feedback.",
    },
    {
      id: "q09",
      stem: "In Management by Objectives (MBO), what does “cascading objectives” mean?",
      options: [
        { id: "a", text: "Organizational goals are translated downward into divisional, departmental, and individual objectives", isCorrect: true, rationale: "Cơ chế: MBO cascade mục tiêu từ cấp tổ chức xuống cá nhân. Bẫy: nghĩ MBO chỉ là đánh giá cuối kỳ. Khóa: objective alignment theo tầng." },
        { id: "b", text: "Employees should receive only externally generated feedback", isCorrect: false, rationale: "Cơ chế: self-generated feedback thường mạnh hơn. Bẫy: manager trong MBO có vẻ là nguồn feedback chính. Khóa: câu hỏi hỏi cascading objectives." },
        { id: "c", text: "Every employee chooses unrelated personal goals without organizational input", isCorrect: false, rationale: "Cơ chế: MBO cần alignment với organizational objectives. Bẫy: self-set goals có thể tăng commitment. Khóa: không phải goals rời rạc." },
        { id: "d", text: "Rewards should be hidden to preserve pay secrecy", isCorrect: false, rationale: "Cơ chế: pay secrecy thuộc rewards, không phải MBO. Bẫy: objectives và rewards có thể liên kết. Khóa: cascading là cấu trúc mục tiêu." },
        { id: "e", text: "Difficult goals are unethical by definition", isCorrect: false, rationale: "Cơ chế: goal khó có mặt tối nếu gắn reward sai, nhưng không unethical by definition. Bẫy: spec có nhắc mặt tối của goal. Khóa: MBO không phủ định difficult goals." },
      ],
      difficulty: "intermediate",
      conceptTested: "Management by Objectives",
      takeaway: "MBO biến goal-setting thành hệ thống alignment: organization → division → department → individual.",
    },
    {
      id: "q10",
      stem: "Which source is usually the strongest way to build self-efficacy?",
      options: [
        { id: "a", text: "Enactive mastery", isCorrect: true, rationale: "Cơ chế: Bandura xem enactive mastery, tức kinh nghiệm thành công trực tiếp, là nguồn mạnh nhất. Bẫy: lời động viên nghe nhanh và rõ. Khóa: làm được thật tạo efficacy mạnh nhất." },
        { id: "b", text: "Pay secrecy", isCorrect: false, rationale: "Cơ chế: pay secrecy không phải nguồn self-efficacy, còn thường làm giảm motivation high performers. Bẫy: reward/pay liên quan motivation. Khóa: self-efficacy đến từ mastery/modeling/persuasion/arousal." },
        { id: "c", text: "Flexible benefits", isCorrect: false, rationale: "Cơ chế: flexible benefits là reward/benefit design. Bẫy: cá nhân hóa có thể tăng motivation. Khóa: không phải nguồn efficacy." },
        { id: "d", text: "Hygiene factors", isCorrect: false, rationale: "Cơ chế: hygiene thuộc Herzberg, ngăn dissatisfaction. Bẫy: working conditions tốt có thể hỗ trợ performance. Khóa: câu hỏi hỏi Bandura." },
        { id: "e", text: "Outcome/input comparison", isCorrect: false, rationale: "Cơ chế: đây là equity theory. Bẫy: so sánh fairness ảnh hưởng motivation. Khóa: efficacy là belief “I can do this task”." },
      ],
      difficulty: "basic",
      conceptTested: "Self-efficacy sources",
      takeaway: "Nguồn self-efficacy mạnh nhất là enactive mastery: trải nghiệm thành công trực tiếp với task.",
    },
    {
      id: "q11",
      stem: "A manager expects a new employee to succeed, gives more coaching, expresses confidence, and the employee performs better. Which concept best explains this?",
      options: [
        { id: "a", text: "Pygmalion effect", isCorrect: true, rationale: "Cơ chế: kỳ vọng cao tạo self-fulfilling prophecy qua coaching, confidence và verbal persuasion. Bẫy: tưởng chỉ là nice management. Khóa: expectation của người khác làm outcome thành thật." },
        { id: "b", text: "Over-rewarded inequity", isCorrect: false, rationale: "Cơ chế: over-rewarded inequity là ratio outcomes/inputs cao hơn referent. Bẫy: employee nhận nhiều coaching hơn. Khóa: stem nói expectation → performance." },
        { id: "c", text: "Piece-rate pay", isCorrect: false, rationale: "Cơ chế: piece-rate trả theo đơn vị output. Bẫy: performance tăng có thể gắn pay. Khóa: không có pay plan." },
        { id: "d", text: "Cognitive evaluation theory", isCorrect: false, rationale: "Cơ chế: CET nói reward controlling có thể giảm intrinsic motivation. Bẫy: confidence có thể ảnh hưởng intrinsic feeling. Khóa: đây là self-fulfilling prophecy." },
        { id: "e", text: "Representative participation", isCorrect: false, rationale: "Cơ chế: representative participation là nhân viên tham gia qua đại diện. Bẫy: manager-employee relationship nghe involvement. Khóa: không có council/representative." },
      ],
      difficulty: "intermediate",
      conceptTested: "Pygmalion effect",
      takeaway: "Pygmalion effect: expectation của người khác có thể nâng behavior/performance qua self-fulfilling prophecy.",
    },
    {
      id: "q12",
      stem: "Which statement best contrasts reinforcement theory with goal-setting theory?",
      options: [
        { id: "a", text: "Reinforcement theory focuses on consequences and external environment; goal-setting theory is cognitive and focuses on intentions toward goals", isCorrect: true, rationale: "Cơ chế: reinforcement là behavioristic, còn goal-setting là cognitive. Bẫy: cả hai đều giải thích behavior. Khóa: consequences vs intentions." },
        { id: "b", text: "Reinforcement theory requires no consequences, while goal-setting requires only pay", isCorrect: false, rationale: "Cơ chế: reinforcement chính là consequences. Bẫy: pay là một consequence. Khóa: đảo sai logic." },
        { id: "c", text: "Operant conditioning says people never try to get desired outcomes", isCorrect: false, rationale: "Cơ chế: operant conditioning nói người ta học để get desired outcomes hoặc avoid undesired outcomes. Bẫy: phủ định quá mức. Khóa: get/avoid là cốt lõi." },
        { id: "d", text: "Goal-setting theory rejects feedback, while reinforcement theory requires self-concordance", isCorrect: false, rationale: "Cơ chế: goal-setting cần feedback; self-concordance thuộc SDT nhánh khác. Bẫy: trộn contemporary theories. Khóa: giữ đúng cơ chế từng theory." },
        { id: "e", text: "Both theories are early need theories with weak research support", isCorrect: false, rationale: "Cơ chế: goal-setting và reinforcement là contemporary theories. Bẫy: cả hai nằm trong motivation topic. Khóa: early need theories là Maslow/Herzberg/McClelland/ERG." },
      ],
      difficulty: "intermediate",
      conceptTested: "Reinforcement theory and operant conditioning",
      takeaway: "Reinforcement nhìn behavior qua consequences; goal-setting nhìn intentions/goals và feedback.",
    },
    {
      id: "q13",
      stem: "Which example best illustrates social-learning theory?",
      options: [
        { id: "a", text: "An employee learns a safety routine by watching a respected coworker perform it and by practicing it directly", isCorrect: true, rationale: "Cơ chế: social-learning theory kết hợp observation of models và direct experience. Bẫy: chỉ nhìn practice mà quên observation. Khóa: học qua model + trải nghiệm." },
        { id: "b", text: "An employee's need for esteem becomes dominant after safety needs are satisfied", isCorrect: false, rationale: "Cơ chế: đó là Maslow. Bẫy: cùng chủ đề motivation. Khóa: social-learning không phải hierarchy." },
        { id: "c", text: "An employee receives a raise because of an appraisal rating", isCorrect: false, rationale: "Cơ chế: đó là merit-based pay. Bẫy: reward có thể reinforce behavior. Khóa: stem không nói learning by observation." },
        { id: "d", text: "A manager asks employees to vote through a works council", isCorrect: false, rationale: "Cơ chế: đó là representative participation. Bẫy: social nghe như group participation. Khóa: social-learning là observational learning." },
        { id: "e", text: "A job affects patients' lives, so the employee sees the task as significant", isCorrect: false, rationale: "Cơ chế: đó là task significance/JCM. Bẫy: learning from patient impact có thể xảy ra. Khóa: không có observation/direct learning model." },
      ],
      difficulty: "basic",
      conceptTested: "Social-learning theory",
      takeaway: "Social-learning theory: con người học qua observation của models lẫn direct experience, dựa trên consequences họ perceive.",
    },
    {
      id: "q14",
      stem: "An employee believes her outcome/input ratio is lower than a coworker's ratio. According to equity theory, what is she experiencing?",
      options: [
        { id: "a", text: "Under-rewarded inequity", isCorrect: true, rationale: "Cơ chế: O/I(A) < O/I(B) là under-rewarded inequity. Bẫy: chỉ nhìn outcome thấp mà quên ratio. Khóa: equity theory luôn so ratio outcomes/inputs với referent." },
        { id: "b", text: "Over-rewarded inequity", isCorrect: false, rationale: "Cơ chế: over-rewarded là O/I(A) > O/I(B). Bẫy: đều là inequity. Khóa: dấu so sánh ngược." },
        { id: "c", text: "Self-concordance", isCorrect: false, rationale: "Cơ chế: self-concordance là goal-value fit. Bẫy: cảm giác bất công có thể ảnh hưởng goals. Khóa: stem là ratio comparison." },
        { id: "d", text: "Distributive justice only if the process was respectful", isCorrect: false, rationale: "Cơ chế: distributive justice hỏi fairness của outcome; respectful treatment là interpersonal justice. Bẫy: fairness terms dễ lẫn. Khóa: câu hỏi hỏi equity ratio." },
        { id: "e", text: "Employee stock ownership", isCorrect: false, rationale: "Cơ chế: ESOP là variable pay/ownership plan. Bẫy: outcome có thể là stock. Khóa: không có ownership plan trong stem." },
      ],
      difficulty: "basic",
      conceptTested: "Equity theory",
      takeaway: "Equity theory đọc bằng ratio O/I: thấp hơn referent là under-rewarded inequity.",
    },
    {
      id: "q15",
      stem: "Employees accept a disappointing raise because the decision process used consistent criteria, allowed appeals, and gave them voice. Which type of justice is most central?",
      options: [
        { id: "a", text: "Procedural justice", isCorrect: true, rationale: "Cơ chế: procedural justice là fairness của process ra quyết định, gồm voice/appeal/consistency. Bẫy: raise là outcome nên dễ chọn distributive. Khóa: stem nhấn process." },
        { id: "b", text: "Distributive justice", isCorrect: false, rationale: "Cơ chế: distributive justice hỏi outcome/allocation có xứng đáng không. Bẫy: stem có raise. Khóa: disappointing raise nhưng process fair." },
        { id: "c", text: "Interpersonal justice", isCorrect: false, rationale: "Cơ chế: interpersonal justice là dignity/respect trong đối xử. Bẫy: allowed voice nghe respectful. Khóa: trọng tâm là process criteria/appeals." },
        { id: "d", text: "Informational justice", isCorrect: false, rationale: "Cơ chế: informational justice là giải thích trung thực, rõ ràng. Bẫy: process fair thường đi cùng explanation. Khóa: stem không nhấn quality of explanation." },
        { id: "e", text: "Job engagement", isCorrect: false, rationale: "Cơ chế: engagement là đầu tư physical/cognitive/emotional energies. Bẫy: justice có thể ảnh hưởng engagement. Khóa: câu hỏi phân loại justice." },
      ],
      difficulty: "intermediate",
      conceptTested: "Organizational justice",
      takeaway: "Outcome không như ý vẫn có thể được chấp nhận hơn nếu procedural justice cao.",
    },
    {
      id: "q16",
      stem: "In expectancy theory, the question “If I perform well, will I receive the reward I was promised?” refers to which relationship?",
      options: [
        { id: "a", text: "Performance-reward relationship", isCorrect: true, rationale: "Cơ chế: performance-reward hỏi performance tốt có dẫn tới reward không. Bẫy: có chữ perform nên dễ lẫn effort-performance. Khóa: điểm nối là từ performance sang reward." },
        { id: "b", text: "Effort-performance relationship", isCorrect: false, rationale: "Cơ chế: effort-performance hỏi nỗ lực có dẫn tới performance không. Bẫy: stem nhắc perform. Khóa: không hỏi “if I try hard”." },
        { id: "c", text: "Rewards-personal goals relationship", isCorrect: false, rationale: "Cơ chế: rewards-goals hỏi reward có hấp dẫn/khớp mục tiêu cá nhân không. Bẫy: reward xuất hiện trong stem. Khóa: stem hỏi có nhận reward không, chưa hỏi reward có đáng muốn không." },
        { id: "d", text: "Enactive mastery relationship", isCorrect: false, rationale: "Cơ chế: enactive mastery thuộc self-efficacy, không phải expectancy. Bẫy: performance success có thể tăng efficacy. Khóa: Vroom có 3 relationships riêng." },
        { id: "e", text: "Need-affiliation relationship", isCorrect: false, rationale: "Cơ chế: nAff thuộc McClelland. Bẫy: reward có thể là social approval. Khóa: câu hỏi là expectancy link." },
      ],
      difficulty: "basic",
      conceptTested: "Expectancy theory relationships",
      takeaway: "Expectancy theory có 3 links: effort→performance, performance→reward, rewards→personal goals.",
    },
    {
      id: "q17",
      stem: "Which description best matches job engagement?",
      options: [
        { id: "a", text: "Investing physical, cognitive, and emotional energies into job performance", isCorrect: true, rationale: "Cơ chế: đây là định nghĩa job engagement trong reading. Bẫy: engagement không chỉ là liking the job. Khóa: energy investment ở ba mặt." },
        { id: "b", text: "A brief positive mood after receiving praise", isCorrect: false, rationale: "Cơ chế: mood/emotion khác engagement. Bẫy: praise có thể hỗ trợ engagement. Khóa: engagement là investment vào performance, sâu hơn cảm xúc thoáng qua." },
        { id: "c", text: "A ratio of outcomes to inputs compared with a referent", isCorrect: false, rationale: "Cơ chế: đó là equity theory. Bẫy: fairness có thể ảnh hưởng engagement. Khóa: không phải ratio." },
        { id: "d", text: "The number of hours spent at the workplace regardless of focus", isCorrect: false, rationale: "Cơ chế: engagement không chỉ là presence/time. Bẫy: face time dễ bị nhầm với commitment. Khóa: cần physical/cognitive/emotional energies." },
        { id: "e", text: "A variable-pay plan based on company profits", isCorrect: false, rationale: "Cơ chế: đó là profit-sharing plan. Bẫy: reward có thể motivate. Khóa: engagement là psychological/work state." },
      ],
      difficulty: "basic",
      conceptTested: "Job engagement",
      takeaway: "Job engagement sâu hơn “thích việc”: đó là đầu tư năng lượng thể chất, nhận thức và cảm xúc vào performance.",
    },
    {
      id: "q18",
      stem: "A hospital cleaner realizes that careful cleaning directly protects patients' lives. In the Job Characteristics Model, which core dimension is most salient?",
      options: [
        { id: "a", text: "Task significance", isCorrect: true, rationale: "Cơ chế: task significance là mức độ job ảnh hưởng đến cuộc sống/công việc người khác. Bẫy: hospital story có thể gợi relational job design. Khóa: core dimension được hỏi là impact on others." },
        { id: "b", text: "Skill variety", isCorrect: false, rationale: "Cơ chế: skill variety là nhiều hoạt động/kỹ năng khác nhau. Bẫy: cleaning có thể có nhiều kỹ năng. Khóa: stem nhấn patient lives." },
        { id: "c", text: "Task identity", isCorrect: false, rationale: "Cơ chế: task identity là hoàn thành một whole identifiable piece of work. Bẫy: careful cleaning nghe trọn việc. Khóa: impact lên người khác mới là trọng tâm." },
        { id: "d", text: "Autonomy", isCorrect: false, rationale: "Cơ chế: autonomy là tự do quyết định cách làm. Bẫy: cleaner có thể tự chọn method. Khóa: stem không nói freedom." },
        { id: "e", text: "Feedback", isCorrect: false, rationale: "Cơ chế: feedback là thông tin trực tiếp/rõ ràng về performance. Bẫy: patient health có thể feedback gián tiếp. Khóa: core dimension nổi bật là significance." },
      ],
      difficulty: "intermediate",
      conceptTested: "Job Characteristics Model",
      takeaway: "Trong JCM, task significance tăng experienced meaningfulness bằng cách cho thấy work ảnh hưởng người khác.",
    },
    {
      id: "q19",
      stem: "Which statement best distinguishes job rotation, relational job design, and telecommuting?",
      options: [
        { id: "a", text: "Job rotation moves employees across same-level tasks; relational job design connects them to beneficiaries; telecommuting can create an “out of sight, out of mind” risk", isCorrect: true, rationale: "Cơ chế: đáp án này khớp cả ba khái niệm applied motivation. Bẫy: đều là job/work design nên dễ trộn. Khóa: rotation = task variety; relational = beneficiaries; telecommuting = remote + face-time risk." },
        { id: "b", text: "Job rotation means working from home at least two days per week", isCorrect: false, rationale: "Cơ chế: working from home là telecommuting. Bẫy: đều thay đổi cách làm việc. Khóa: job rotation là xoay qua task cùng level." },
        { id: "c", text: "Relational job design means hiding pay information to protect privacy", isCorrect: false, rationale: "Cơ chế: pay secrecy thuộc rewards và thường có hại. Bẫy: relational nghe liên quan quan hệ xã hội. Khóa: relational job design kết nối với beneficiaries." },
        { id: "d", text: "Telecommuting primarily increases motivation by giving employees stock ownership", isCorrect: false, rationale: "Cơ chế: stock ownership là ESOP. Bẫy: cả hai có thể là benefits/rewards. Khóa: telecommuting là work arrangement." },
        { id: "e", text: "All three are forms of representative participation", isCorrect: false, rationale: "Cơ chế: representative participation là EIP qua đại diện như works councils. Bẫy: all involve organization design. Khóa: không phải EIP representation." },
      ],
      difficulty: "advanced",
      conceptTested: "Job redesign and alternative work arrangements",
      takeaway: "Applied motivation cần phân biệt: rotation xoay task, relational tăng prosocial meaning, telecommuting tăng flexibility nhưng có face-time risk.",
    },
    {
      id: "q20",
      stem: "Which reward example best illustrates a bonus rather than merit pay, ESOP, or employee recognition?",
      options: [
        { id: "a", text: "A one-time payment for strong recent performance that does not permanently raise base salary", isCorrect: true, rationale: "Cơ chế: bonus thưởng recent performance và không cộng dồn vào base pay như merit raise. Bẫy: cả bonus và merit đều dựa performance. Khóa: one-time/recent/non-base." },
        { id: "b", text: "A permanent salary increase based on performance appraisal ratings", isCorrect: false, rationale: "Cơ chế: đó là merit-based pay. Bẫy: đều là performance pay. Khóa: merit thường thành raise/base pay." },
        { id: "c", text: "Employees buy company shares below market price and feel psychological ownership", isCorrect: false, rationale: "Cơ chế: đó là ESOP. Bẫy: vẫn là reward program. Khóa: stock ownership khác bonus cash." },
        { id: "d", text: "A public thank-you and Employee of the Month award", isCorrect: false, rationale: "Cơ chế: đó là employee recognition, intrinsic reward. Bẫy: award nghe như bonus. Khóa: không phải one-time monetary recent-performance payment." },
        { id: "e", text: "Employees choose benefits that fit their individual needs", isCorrect: false, rationale: "Cơ chế: đó là flexible benefits. Bẫy: benefit vẫn thuộc reward system. Khóa: bonus là cash/payment for recent performance." },
      ],
      difficulty: "intermediate",
      conceptTested: "Variable pay and recognition",
      takeaway: "Bonus = thưởng cho performance gần đây; merit pay = raise dựa appraisal; ESOP = stock ownership; recognition = intrinsic praise/award.",
    },
    {
      id: "q21",
      stem: "Minh prepares for an exam by reading the assigned material and by refusing to play games until the study session is complete. Which interpretation is most accurate?",
      options: [
        { id: "a", text: "Reading is promotion focus, while refusing games is prevention focus; both can be useful", isCorrect: true, rationale: "Cơ chế: reading approaches advancement/accomplishment, còn nhịn game avoids điều kéo xa goal. Bẫy: prevention nghe tiêu cực nên dễ bị coi là xấu. Khóa: lý tưởng là phối hợp cả promotion và prevention." },
        { id: "b", text: "Both actions are promotion focus because they support the same goal", isCorrect: false, rationale: "Cơ chế: cùng phục vụ goal nhưng strategy khác nhau: approach tài liệu và avoid distraction. Bẫy: phân loại theo kết quả thay vì cơ chế. Khóa: promotion tiến tới, prevention tránh xa rủi ro." },
        { id: "c", text: "Both actions are prevention focus because exams create obligations", isCorrect: false, rationale: "Cơ chế: đọc tài liệu trực tiếp tiến gần accomplishment nên là promotion. Bẫy: studying thường đi cùng duty. Khóa: nhìn hành động approach hay avoid, không chỉ nhìn bối cảnh." },
        { id: "d", text: "Promotion focus is always good and prevention focus is always harmful", isCorrect: false, rationale: "Cơ chế: hai focus đều có giá trị và lý tưởng là có cả hai. Bẫy: tên promotion/prevention gợi tốt/xấu. Khóa: chúng là strategies, không phải moral labels." },
        { id: "e", text: "The example concerns only extrinsic rewards, not self-regulation", isCorrect: false, rationale: "Cơ chế: không có reward bên ngoài; case mô tả cách tự điều chỉnh hành vi quanh goal. Bẫy: exam có thể gắn grades. Khóa: action pattern map trực tiếp vào regulatory focus." },
      ],
      difficulty: "intermediate",
      conceptTested: "Promotion versus prevention focus",
      takeaway: "Promotion focus tiến tới accomplishment; prevention focus tránh điều kéo mình xa goal. Hai chiến lược có thể bổ sung nhau.",
    },
    {
      id: "q22",
      stem: "A design team needs exceptional originality, while a packaging line needs more units completed. Which motivation pattern best matches the evidence?",
      options: [
        { id: "a", text: "Intrinsic motivation is especially useful for quality, while incentives are especially useful for quantity", isCorrect: true, rationale: "Cơ chế: meta-analysis nối intrinsic motivation với quality và incentives với quantity. Bẫy: reward thường được quảng bá như cải thiện mọi outcome. Khóa: quality và quantity có drivers nổi bật khác nhau." },
        { id: "b", text: "Intrinsic motivation mainly increases quantity, while incentives mainly increase quality", isCorrect: false, rationale: "Cơ chế: đáp án đảo mapping trong evidence. Bẫy: intrinsic persistence có thể làm nhiều hơn và bonus có thể tài trợ quality. Khóa: intrinsic→quality, incentive→quantity." },
        { id: "c", text: "Direct performance bonuses always strengthen intrinsic motivation", isCorrect: false, rationale: "Cơ chế: intrinsic motivation dự đoán performance yếu đi khi incentive gắn trực tiếp vào performance. Bẫy: bonus có thể nâng output quantity. Khóa: controlling/direct reward có CET risk." },
        { id: "d", text: "Neither intrinsic motivation nor incentives affect performance", isCorrect: false, rationale: "Cơ chế: cả hai đều đóng góp nhưng vào dimensions khác nhau. Bẫy: thấy mixed evidence rồi kết luận không có effect. Khóa: phân biệt loại performance outcome." },
        { id: "e", text: "Only Maslow's hierarchy can explain the two tasks", isCorrect: false, rationale: "Cơ chế: scenario hỏi evidence CET/intrinsic-incentive, không hỏi need hierarchy. Bẫy: Maslow là theory nổi tiếng nhất. Khóa: quality-versus-quantity là finding cụ thể." },
      ],
      difficulty: "intermediate",
      conceptTested: "CET quality versus quantity",
      takeaway: "Intrinsic motivation nổi bật ở chất lượng, incentives nổi bật ở số lượng; reward gắn trực tiếp performance còn có thể làm yếu intrinsic motivation.",
    },
    {
      id: "q23",
      stem: "A multinational is designing a justice program for a French unit characterized by high uncertainty avoidance. Which package best fits the cross-cultural evidence?",
      options: [
        { id: "a", text: "Fixed pay combined with employee participation", isCorrect: true, rationale: "Cơ chế: uncertainty avoidance cao được ghép với fixed pay và participation để tăng predictability và voice. Bẫy: competitive individual rewards là default quen thuộc ở nhiều firms. Khóa: France + uncertainty avoidance." },
        { id: "b", text: "Competitive pay and rewards only for individual stars in every country", isCorrect: false, rationale: "Cơ chế: package này khớp individualism cao hơn là one-size-fits-all. Bẫy: performance pay nghe universally motivating. Khóa: justice program phải tailor theo cultural values." },
        { id: "c", text: "Work-life balance and social recognition because France is defined here by femininity", isCorrect: false, rationale: "Cơ chế: work-life balance/social recognition được ghép với femininity trong bảng. Bẫy: package này vẫn là một cultural match hợp lệ. Khóa: stem chỉ định uncertainty avoidance." },
        { id: "d", text: "Publicly justify leader-worker differences because France is defined here by low power distance", isCorrect: false, rationale: "Cơ chế: public justification và ethical-leadership symbols ghép với low power-distance. Bẫy: explanation có vẻ tăng justice ở mọi nơi. Khóa: chọn đúng cultural dimension được nêu." },
        { id: "e", text: "Use no formal pay design because culture never affects justice perceptions", isCorrect: false, rationale: "Cơ chế: nghiên cứu 32 nước cho thấy cultural values định hình chương trình phù hợp. Bẫy: fairness có core phổ quát nên dễ bỏ qua context. Khóa: justice matters broadly nhưng implementation không one-size." },
      ],
      difficulty: "advanced",
      conceptTested: "Culture and justice tailoring",
      takeaway: "Justice không triển khai one-size-fits-all: uncertainty avoidance cao phù hợp fixed pay và employee participation hơn competitive individual rewards đơn thuần.",
    },
    {
      id: "q24",
      stem: "HR first evaluates the relative value of jobs inside the company, then checks salary levels across the industry. Which two equity tools are being used?",
      options: [
        { id: "a", text: "Internal equity through job evaluation, then external equity through pay surveys", isCorrect: true, rationale: "Cơ chế: job evaluation định giá công việc trong tổ chức; pay survey kiểm tra competitiveness với thị trường. Bẫy: cả hai đều liên quan pay fairness nên dễ đảo. Khóa: inside=internal, market=external." },
        { id: "b", text: "External equity through job evaluation, then internal equity through pay surveys", isCorrect: false, rationale: "Cơ chế: đáp án đảo đúng hai công cụ. Bẫy: job title bên ngoài cũng được dùng khi evaluation. Khóa: evaluation là relative job value nội bộ; survey là market benchmark." },
        { id: "c", text: "Equity theory using only each employee's outcome-input ratio", isCorrect: false, rationale: "Cơ chế: O/I ratio giải thích fairness perception cá nhân, không phải hai bước thiết kế pay structure. Bẫy: cùng dùng từ equity. Khóa: internal/external equity là pay-level architecture." },
        { id: "d", text: "Procedural justice followed by interpersonal justice", isCorrect: false, rationale: "Cơ chế: procedural/interpersonal là loại justice về process và respect. Bẫy: HR process cần công bằng. Khóa: tool names trong stem là job evaluation và pay survey." },
        { id: "e", text: "Merit pay followed by a one-time bonus", isCorrect: false, rationale: "Cơ chế: merit và bonus là variable-pay decisions sau khi base-pay structure được đặt. Bẫy: đều là compensation tools. Khóa: question asks what to pay before how to vary pay." },
      ],
      difficulty: "advanced",
      conceptTested: "Internal versus external equity",
      takeaway: "Internal equity dựa job evaluation; external equity dựa pay surveys. Hai khái niệm này khác equity theory về ratio O/I của cá nhân.",
    },
  ],
  status: "ready",
  source:
    "Organizational Behavior (IM2017, Dr Truong Thi Lan Anh) — slide 'OB-Topic 6 - Motivation' + Reading 'Chapter 7 - Basic Motivation' (Robbins & Judge, p130-149) & 'Chapter 8 - Applied Motivation' (p150-165). Motivation = process (intensity/direction/persistence); early need theories (Maslow Exhibit 7-1, Herzberg two-factor Exhibit 7-2, McClelland nAch/nPow/nAff, Alderfer ERG + McGregor X-Y từ slide); contemporary theories (self-determination/cognitive evaluation/self-concordance, goal-setting + MBO Exhibit 7-3, self-efficacy Bandura + Pygmalion Exhibit 7-4, reinforcement/operant/behaviorism/social-learning + OB Mod A-B-C, equity Exhibit 7-5 + organizational justice 4 loại Exhibit 7-6, expectancy Vroom Exhibit 7-7, job engagement, integration Exhibit 7-8); applied motivation (JCM 5 dims + MPS Exhibit 8-1, job rotation, relational job design, flextime Exhibit 8-2/job sharing/telecommuting, EIP participative & representative, variable pay piece-rate/merit/bonus/profit-sharing/ESOP, flexible benefits, employee recognition). SCARF (David Rock), Drive (Daniel Pink) và well-being từ slide.",
};

const topic07: Chapter = {
  slug: "topic-07",
  order: 7,
  title: "Topic 07 — Group Properties",
  bigIdea:
    "Một group không phải phép cộng của các cá nhân — nó là một HỆ THỐNG XÃ HỘI trong đó sáu thuộc tính (roles, norms, status, size, cohesiveness, diversity) định hình và ràng buộc hành vi cá nhân, thường một cách vô hình nhưng mạnh mẽ (Robbins & Judge). Cùng một cơ chế 'sức ép nhóm' vừa là ĐỘNG CƠ năng suất (chuẩn mực, gắn kết) vừa là CÁI BẪY (conformity kiểu Asch, social loafing, groupthink). Hiểu OB ở cấp nhóm = biết đọc các thuộc tính này để khai thác mặt lợi và chặn mặt hại — và biết khi nào quyết định nhóm mạnh hơn hay tệ hơn quyết định cá nhân.",
  bigIdeaPillars: [
    {
      label: "Nhóm là hệ thống, không phải tập hợp",
      body: "Group = 2+ người tương tác, phụ thuộc nhau, cùng đạt mục tiêu cụ thể (R&J p182). Người ta gia nhập vì identity (social identity theory — ingroup favoritism) và lợi ích trao đổi (social exchange). Có formal/informal & 4 loại (command/task/interest/friendship). Nhóm phát triển không tuyến tính: punctuated-equilibrium model (book) — trì trệ rồi bùng nổ thay đổi ở điểm giữa.",
    },
    {
      label: "Sáu thuộc tính định hình hành vi",
      body: "Roles (role perception/expectation, psychological contract, role conflict; Zimbardo prison); Norms (Hawthorne, conformity — Asch study, deviant workplace behavior); Status (nguồn theo status characteristics theory; status & norms/interaction/inequity); Size (social loafing — Ringelmann); Cohesiveness (Exhibit 10-4 × performance norms); Diversity (surface/deep, faultlines). Đây là 'ngữ pháp' của hành vi nhóm.",
    },
    {
      label: "Sức ép nhóm: con dao hai lưỡi",
      body: "Cùng cơ chế conformity/cohesiveness vừa tạo lợi (năng suất, cam kết, phối hợp) vừa tạo hại (social loafing, đè nén ý kiến, groupthink). Nhà quản lý phải chủ động: 5 cách ngăn social loafing, 7 cách tăng cohesiveness gắn với chuẩn mực năng suất cao — không để nhóm 'tự trôi'.",
    },
    {
      label: "Ra quyết định nhóm: mạnh hơn hay tệ hơn?",
      body: "Group vs individual: nhóm cho thông tin đầy đủ hơn, đa dạng hơn, chấp nhận cao hơn nhưng tốn thời gian, chịu áp lực conformity, trách nhiệm mơ hồ (effectiveness vs efficiency). Bẫy: groupthink (Galaxy Note 7) & groupshift/polarization. Kỹ thuật hóa giải: interacting → brainstorming (production blocking) → nominal group technique.",
    },
  ],
  learningObjectives: [
    "Định nghĩa group; phân biệt formal vs informal group và 4 loại: command, task, interest, friendship (R&J p182).",
    "Giải thích vì sao người ta gia nhập group qua social identity theory (ingroup favoritism, ingroup/outgroup) và social exchange.",
    "Mô tả punctuated-equilibrium model of group development (book) và liên hệ với 5-stage model forming→storming→norming→performing→adjourning (slide).",
    "Giải thích Group Property 1 — Roles: role perception, role expectation, psychological contract, role conflict (minh họa Zimbardo prison study).",
    "Giải thích Group Property 2 — Norms: Hawthorne Studies, conformity và Asch study, reference groups, deviant workplace behavior.",
    "Giải thích Group Property 3 — Status: các nguồn status theo status characteristics theory; ảnh hưởng của status lên norms, group interaction, và hệ quả của status inequity.",
    "Giải thích Group Property 4 — Size (social loafing, Ringelmann effect) và 5 cách ngăn social loafing.",
    "Giải thích Group Property 5 — Cohesiveness: quan hệ cohesiveness × performance norms (Exhibit 10-4) và 7 cách tăng cohesiveness; và Property 6 — Diversity (surface/deep, faultlines).",
    "So sánh group vs individual decision making (strengths/weaknesses; effectiveness vs efficiency) và nhận diện groupthink, groupshift/group polarization.",
    "Phân biệt 3 kỹ thuật ra quyết định nhóm: interacting groups, brainstorming (production blocking), nominal group technique.",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "Group behavior: (A) nhóm là hệ thống (định nghĩa, loại, phát triển), (B) sáu group properties định hình hành vi, (C) sức ép nhóm hai lưỡi, (D) ra quyết định nhóm & kỹ thuật.",
    nodes: [
      {
        id: "grp",
        label: "Group Behavior",
        group: "concept",
        sectionId: "s1",
        detail: "Nhóm là hệ thống xã hội, không phải phép cộng cá nhân.",
      },
      {
        id: "g_sys",
        label: "A. Nhóm là hệ thống",
        group: "concept",
        parent: "grp",
        sectionId: "s1",
        detail: "Định nghĩa, why join, loại nhóm, phát triển.",
      },
      {
        id: "g_prop",
        label: "B. Sáu group properties",
        group: "concept",
        parent: "grp",
        sectionId: "s3",
        detail: "Roles, norms, status, size, cohesiveness, diversity.",
      },
      {
        id: "g_press",
        label: "C. Sức ép nhóm hai lưỡi",
        group: "concept",
        parent: "grp",
        sectionId: "s7",
        detail: "Conformity/cohesiveness: lợi vs hại.",
      },
      {
        id: "g_dec",
        label: "D. Ra quyết định nhóm",
        group: "concept",
        parent: "grp",
        sectionId: "s9",
        detail: "Group vs individual, groupthink, techniques.",
      },
      {
        id: "t_def",
        label: "Định nghĩa + loại + why join",
        group: "term",
        parent: "g_sys",
        sectionId: "s1",
        detail: "Group definition, formal/informal, command/task/interest/friendship, why join.",
      },
      {
        id: "t_dev",
        label: "Punctuated-equilibrium / 5-stage",
        group: "term",
        parent: "g_sys",
        sectionId: "s2",
        detail: "Book nhấn punctuated-equilibrium; slide thêm 5-stage model.",
      },
      {
        id: "t_role",
        label: "Roles (Zimbardo)",
        group: "term",
        parent: "g_prop",
        sectionId: "s3",
        detail: "Role perception/expectation, psychological contract, role conflict.",
      },
      {
        id: "t_norm",
        label: "Norms (Asch, deviant)",
        group: "term",
        parent: "g_prop",
        sectionId: "s4",
        detail: "Hawthorne, conformity, Asch study, deviant workplace behavior.",
      },
      {
        id: "t_status",
        label: "Status (characteristics theory)",
        group: "term",
        parent: "g_prop",
        sectionId: "s5",
        detail: "Power, contribution, personal characteristics; status inequity.",
      },
      {
        id: "t_size",
        label: "Size (social loafing)",
        group: "term",
        parent: "g_prop",
        sectionId: "s6",
        detail: "Group size, Ringelmann effect, social loafing, 5 cách ngăn.",
      },
      {
        id: "t_cohes",
        label: "Cohesiveness + Diversity",
        group: "term",
        parent: "g_press",
        sectionId: "s7",
        detail: "Cohesiveness × performance norms, surface/deep diversity, faultlines.",
      },
      {
        id: "t_gvi",
        label: "Group vs individual",
        group: "term",
        parent: "g_dec",
        sectionId: "s9",
        detail: "Strengths/weaknesses, effectiveness vs efficiency.",
      },
      {
        id: "t_think",
        label: "Groupthink / groupshift",
        group: "term",
        parent: "g_dec",
        sectionId: "s10",
        detail: "Groupthink, groupshift/group polarization, cách giảm groupthink.",
      },
      {
        id: "t_tech",
        label: "Interacting / brainstorm / NGT",
        group: "term",
        parent: "g_dec",
        sectionId: "s11",
        detail: "Interacting groups, brainstorming, production blocking, nominal group technique.",
      },
    ],
    edges: [
      { from: "grp", to: "g_sys", label: "hệ thống" },
      { from: "grp", to: "g_prop", label: "properties" },
      { from: "grp", to: "g_press", label: "sức ép" },
      { from: "grp", to: "g_dec", label: "quyết định" },
      { from: "g_sys", to: "t_def", label: "định nghĩa" },
      { from: "g_sys", to: "t_dev", label: "phát triển" },
      { from: "g_prop", to: "t_role", label: "role" },
      { from: "g_prop", to: "t_norm", label: "norm" },
      { from: "g_prop", to: "t_status", label: "status" },
      { from: "g_prop", to: "t_size", label: "size" },
      { from: "g_press", to: "t_cohes", label: "cohesive" },
      { from: "g_dec", to: "t_gvi", label: "vs cá nhân" },
      { from: "g_dec", to: "t_think", label: "bẫy" },
      { from: "g_dec", to: "t_tech", label: "kỹ thuật" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "Nhóm là gì & vì sao gia nhập",
      blocks: [
        calloutBlock(
          "key",
          "Group theo Robbins & Judge (p182)",
          "Group là “two or more individuals, interacting and interdependent, who have come together to achieve particular objectives.” Nhấn: tương tác + phụ thuộc lẫn nhau + mục tiêu chung — khác một đám đông ngẫu nhiên.",
        ),
        calloutBlock(
          "note",
          "Vì sao gia nhập group (slide)",
          "An ninh (security), địa vị (status), lòng tự trọng (self-esteem), liên kết (affiliation), quyền lực (power), đạt mục tiêu (goal achievement). → Mắt xích môn học: từ đây môn chuyển sang cấp GROUP — nhưng thành phần nhóm chính là các input cá nhân đã học: personality (Topic 01) và values/deep-level diversity (Topic 03) quyết định nhóm vận hành thế nào.",
        ),
      ],
      keyTerms: [
        { term: "Group", definition: "Two or more individuals, interacting and interdependent, who have come together to achieve particular objectives." },
        { term: "Formal group", definition: "Group do tổ chức định nghĩa qua cơ cấu chính thức." },
        { term: "Informal group", definition: "Group hình thành tự nhiên từ nhu cầu tiếp xúc xã hội." },
      ],
    },
    {
      id: "s1b",
      heading: "4 loại nhóm formal/informal",
      blocks: [
        comparisonBlock(
          "Formal vs Informal & 4 loại nhóm (R&J p182; slide)",
          ["Loại", "Bản chất", "Ví dụ"],
          [
            {
              label: "Formal group",
              cells: [
                "Do tổ chức định nghĩa qua cơ cấu chính thức; nhiệm vụ được giao, hành vi hướng org goals.",
                "Nhóm 6 thành viên của một tổ bay.",
              ],
            },
            {
              label: "Informal group",
              cells: [
                "Không được cơ cấu chính thức định nghĩa, hình thành tự nhiên từ nhu cầu tiếp xúc xã hội.",
                "Ba nhân viên khác phòng hay ăn trưa cùng nhau.",
              ],
            },
            {
              label: "Command group",
              cells: [
                "(formal) Gồm các cá nhân báo cáo trực tiếp cho một quản lý.",
                "Hiệu trưởng và các giáo viên.",
              ],
            },
            {
              label: "Task / Interest / Friendship group",
              cells: [
                "Task: cùng hoàn thành một công việc (có thể vượt quan hệ command). Interest: cùng một mối quan tâm cụ thể. Friendship: chung đặc điểm xã hội (tuổi, đội bóng, quan điểm).",
                "Nhóm điều tra một vụ; nhân viên đòi đổi lịch nghỉ; nhóm cùng cổ vũ một CLB.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        { term: "Command group", definition: "Group gồm các cá nhân báo cáo trực tiếp cho một manager." },
        { term: "Task group", definition: "Group cùng hoàn thành một công việc hoặc nhiệm vụ cụ thể." },
        { term: "Interest group", definition: "Group tập hợp quanh một mối quan tâm cụ thể." },
        { term: "Friendship group", definition: "Group hình thành vì đặc điểm xã hội chung hoặc quan hệ thân hữu." },
      ],
    },
    {
      id: "s2",
      heading: "Social identity, social exchange & phát triển nhóm",
      blocks: [
        calloutBlock(
          "key",
          "Social identity theory (R&J p182-183)",
          "Người ta cảm nhận cảm xúc gắn với thành công/thất bại của nhóm mình vì lòng tự trọng gắn với hiệu quả của nhóm → sinh ra ingroup favoritism (nhìn ingroup tốt hơn outgroup). Identity mạnh lên khi: similarity, distinctiveness, status (thích gắn với nhóm status cao), giảm uncertainty.",
        ),
        comparisonBlock(
          "Hai động lực gắn kết với nhóm (R&J p182-183; slide)",
          ["Cơ chế", "Nội dung"],
          [
            {
              label: "Social identity",
              cells: [
                "Ta định nghĩa bản thân qua nhóm ta thuộc về; tự hào/đau buồn theo nhóm; phân biệt ingroup-outgroup; nền tảng của thiên vị nội nhóm.",
              ],
            },
            {
              label: "Social exchange",
              cells: [
                "Quan hệ nhóm được duy trì khi lợi ích nhận được (được giúp, được công nhận) xứng với chi phí bỏ ra — người ta ở lại nhóm khi cán cân trao đổi có lợi.",
              ],
            },
          ],
        ),
        flowBlock(
          "s2",
          "Punctuated-equilibrium model (Exhibit 10-1)",
          "horizontal",
          [
            {
              id: "phase1",
              label: "Phase 1: định hướng, ì",
              group: "concept",
              detail: "Nhóm đặt hướng ban đầu nhưng thường trì trệ trong nửa đầu thời hạn.",
            },
            {
              id: "trans",
              label: "Transition: điểm giữa",
              group: "concept",
              detail: "Halfway point tạo bùng nổ thay đổi, xem lại hướng đi và cách làm.",
            },
            {
              id: "phase2",
              label: "Phase 2: tăng tốc thực thi",
              group: "concept",
              detail: "Sau transition, nhóm tăng tốc và hành động theo định hướng mới.",
            },
            {
              id: "done",
              label: "Completed",
              group: "concept",
              detail: "Nhiệm vụ hoàn tất trước deadline.",
            },
          ],
          [
            { from: "phase1", to: "trans", label: "điểm giữa" },
            { from: "trans", to: "phase2", label: "chuyển pha" },
            { from: "phase2", to: "done", label: "hoàn tất" },
          ],
          "Book KHÔNG dùng 5-stage làm chính: nhóm có thời hạn thường ì ở Phase 1, đến ĐIỂM GIỮA (halfway) mới bùng nổ thay đổi rồi tăng tốc ở Phase 2 — dòng chảy 'trì trệ → chuyển pha → tăng tốc'.",
        ),
        flowBlock(
          "s2",
          "5-stage model (slide) — để đối chiếu",
          "horizontal",
          [
            { id: "stage_forming", label: "Forming", group: "concept", detail: "Bất định về mục đích, cơ cấu, lãnh đạo; thăm dò." },
            { id: "stage_storming", label: "Storming", group: "concept", detail: "Xung đột nội bộ về ai kiểm soát, ai làm gì." },
            { id: "stage_norming", label: "Norming", group: "concept", detail: "Hình thành quan hệ gần gũi, cohesiveness và chuẩn mực chung." },
            { id: "stage_performing", label: "Performing", group: "concept", detail: "Cơ cấu ổn định, năng lượng dồn vào thực hiện nhiệm vụ." },
            { id: "stage_adjourning", label: "Adjourning", group: "concept", detail: "Với nhóm tạm thời: kết thúc, chuẩn bị giải tán." },
          ],
          [
            { from: "stage_forming", to: "stage_storming" },
            { from: "stage_storming", to: "stage_norming" },
            { from: "stage_norming", to: "stage_performing" },
            { from: "stage_performing", to: "stage_adjourning" },
          ],
        ),
        calloutBlock(
          "note",
          "Đừng hiểu 5-stage là luôn tuyến tính",
          "Nhiều nhóm không đi tuần tự; với nhóm có deadline, punctuated-equilibrium mô tả sát hơn thực tế.",
        ),
      ],
      keyTerms: [
        { term: "Social identity theory", definition: "Quan điểm cho rằng người ta định nghĩa bản thân qua nhóm mình thuộc về." },
        { term: "Ingroup favoritism", definition: "Xu hướng nhìn ingroup tích cực hơn outgroup." },
        { term: "Social exchange", definition: "Quan hệ nhóm được duy trì khi lợi ích nhận được xứng với chi phí bỏ ra." },
        { term: "Punctuated-equilibrium model", definition: "Model phát triển nhóm có deadline: phase 1 trì trệ, transition ở điểm giữa, phase 2 tăng tốc." },
        { term: "Five-stage group-development model", definition: "Forming, storming, norming, performing, adjourning." },
      ],
    },
    {
      id: "s3",
      heading: "Group Property 1: Roles",
      blocks: [
        calloutBlock(
          "key",
          "Role (R&J p184)",
          "Role là “a set of expected behavior patterns attributed to someone occupying a given position in a social unit.” Mỗi người đóng nhiều vai và điều chỉnh vai theo nhóm đang tham gia.",
        ),
        comparisonBlock(
          "Các khái niệm về Role (R&J p184-186)",
          ["Khái niệm", "Nội dung"],
          [
            {
              label: "Role perception",
              cells: [
                "Cách một cá nhân hiểu mình PHẢI hành xử thế nào trong một tình huống; học qua quan sát (mentor, phim ảnh, sách).",
              ],
            },
            {
              label: "Role expectation",
              cells: [
                "Cách người KHÁC tin rằng bạn nên hành xử trong một vai trò cho trước.",
              ],
            },
            {
              label: "Psychological contract",
              cells: [
                "Hợp đồng bất thành văn về kỳ vọng hai chiều giữa nhân viên và người sử dụng lao động; vi phạm → giảm hài lòng, cam kết, hiệu suất.",
              ],
            },
            {
              label: "Role conflict",
              cells: [
                "Khi tuân theo một tập kỳ vọng vai trò lại khó tuân theo tập kỳ vọng khác; gây căng thẳng, bất mãn.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Zimbardo Stanford prison study (R&J p184-185)",
          "Sinh viên bình thường được phân ngẫu nhiên vai guard/prisoner nhanh chóng hành xử theo vai đến mức thí nghiệm phải dừng sớm — minh chứng vai trò và bối cảnh có thể lấn át tính cách cá nhân.",
        ),
      ],
      keyTerms: [
        { term: "Role", definition: "Set of expected behavior patterns attributed to a position in a social unit." },
        { term: "Role perception", definition: "Cách cá nhân hiểu mình nên hành xử trong một role." },
        { term: "Role expectation", definition: "Cách người khác tin một cá nhân nên hành xử trong role." },
        { term: "Psychological contract", definition: "Kỳ vọng bất thành văn hai chiều giữa employee và employer." },
        { term: "Role conflict", definition: "Xung đột giữa các kỳ vọng role khác nhau." },
      ],
    },
    {
      id: "s4",
      heading: "Group Property 2: Norms",
      blocks: [
        calloutBlock(
          "key",
          "Norms (R&J p186)",
          "Norms là “acceptable standards of behavior within a group that are shared by the group's members.” Chuẩn mực nói cho thành viên biết nên/không nên làm gì trong những hoàn cảnh nhất định.",
        ),
        comparisonBlock(
          "Norms — các khía cạnh chính (R&J p186-189)",
          ["Khía cạnh", "Nội dung"],
          [
            {
              label: "Hawthorne Studies",
              cells: [
                "Thí nghiệm Western Electric (Mayo): hành vi và cảm xúc nhóm gắn chặt nhau; nhóm tự đặt chuẩn sản lượng và ép các thành viên tuân theo (không quá cao — rate buster, không quá thấp — chiseler); áp lực nhóm mạnh hơn động cơ tiền bạc.",
              ],
            },
            {
              label: "Conformity",
              cells: [
                "Điều chỉnh hành vi để khớp chuẩn của nhóm mà mình muốn thuộc về (reference group — nhóm mà cá nhân coi trọng và muốn được chấp nhận).",
              ],
            },
            {
              label: "Deviant workplace behavior",
              cells: [
                "Hành vi cố ý vi phạm chuẩn mực tổ chức, đe dọa lợi ích tổ chức/thành viên (Exhibit 10-3: production, property, political, personal aggression); dễ lan trong nhóm.",
              ],
            },
          ],
        ),
        calloutBlock(
          "key",
          "Asch conformity study (Exhibit 10-2) (R&J p187)",
          "Người tham gia so độ dài đường thẳng; khi các đồng phạm cố tình chọn sai đồng loạt, khoảng 1/3 số người ngả theo đáp án sai của nhóm dù mắt thấy rõ là sai — sức ép tuân thủ có thể lấn át bằng chứng hiển nhiên.",
        ),
        calloutBlock(
          "insight",
          "Positive norms & PC norms — kết quả ngược trực giác (sách, p188–189)",
          "Quan niệm phổ biến: norm chặt bóp creativity → nên nới. NHƯNG nghiên cứu nhóm gender-diverse: strong political correctness (PC) norms TĂNG group creativity — kỳ vọng rõ về tương tác nam–nữ giảm uncertainty → thành viên tự do nêu ý tưởng mà không phải vật với stereotype norms. Positive norms chỉ sinh positive outcomes khi có yếu tố đi kèm (group extraversion cao → helping mạnh hơn KHI có positive cooperation norms); mức chịu ảnh hưởng khác nhau theo personality + social identity; nghiên cứu Đức: càng satisfied với nhóm càng theo sát norms.",
        ),
      ],
      keyTerms: [
        { term: "Norms", definition: "Acceptable standards of behavior within a group shared by members." },
        { term: "Reference groups", definition: "Nhóm cá nhân coi trọng và muốn được chấp nhận." },
        { term: "Conformity", definition: "Điều chỉnh hành vi để khớp chuẩn nhóm." },
        { term: "Deviant workplace behavior", definition: "Hành vi cố ý vi phạm norms của tổ chức, đe dọa tổ chức hoặc members." },
      ],
    },
    {
      id: "s5",
      heading: "Group Property 3: Status",
      blocks: [
        calloutBlock(
          "key",
          "Status (R&J p189)",
          "Status là “a socially defined position or rank given to groups or group members by others.” Status thấm vào mọi xã hội và ảnh hưởng mạnh đến hành vi.",
        ),
        comparisonBlock(
          "Nguồn của status — Status characteristics theory (R&J p189-190)",
          ["Nguồn", "Nội dung"],
          [
            { label: "Power over others", cells: ["Người kiểm soát nguồn lực/kết quả của nhóm thường được nhìn nhận status cao."] },
            { label: "Ability to contribute", cells: ["Người đóng góp nhiều vào mục tiêu nhóm có status cao (thành tích, kỹ năng)."] },
            { label: "Personal characteristics", cells: ["Đặc điểm cá nhân được nhóm đánh giá cao (ngoại hình, trí thông minh, tiền bạc, personality) tạo status."] },
          ],
        ),
        comparisonBlock(
          "Status ảnh hưởng đến nhóm thế nào (R&J p190-191)",
          ["Ảnh hưởng", "Nội dung"],
          [
            { label: "Status & norms", cells: ["Người status cao thường được tự do lệch chuẩn hơn (idiosyncrasy credit) và ít lo bị nhóm phạt."] },
            { label: "Status & group interaction", cells: ["Người status cao nói nhiều, quyết đoán hơn; chênh lệch status lớn có thể bóp nghẹt ý tưởng của thành viên status thấp → hại chất lượng thảo luận."] },
            { label: "Status inequity", cells: ["Khi thành viên cảm nhận status không tương xứng đóng góp → mất cân bằng, sinh bất mãn và hành vi điều chỉnh (giảm nỗ lực, xung đột)."] },
          ],
        ),
        calloutBlock(
          "note",
          "Status & group diversity (R&J p191)",
          "Nhóm đa dạng về status/văn hóa có thể khiến việc thiết lập thứ bậc status khó khăn hơn, ảnh hưởng cách nhóm phối hợp.",
        ),
        calloutBlock(
          "note",
          "Status lan truyền: stigma by association & group status (sách, p191–192)",
          "Status của người mình LIÊN KẾT cũng đổi cách người khác nhìn mình — người bị stigmatized có thể 'lây' stigma cho người đứng cạnh (\"stigma by association\"), dù association ngắn và thuần ngẫu nhiên. Ở cấp NHÓM: \"us and them\" — outgroup bị ingroup coi là status thấp; nhóm dominant được gán high status → discrimination; low-status groups leverage ingroup favoritism để cạnh tranh status, high-status groups đáp lại bằng bias — mỗi chu kỳ các nhóm càng POLARIZED.",
        ),
      ],
      keyTerms: [
        { term: "Status", definition: "Socially defined position or rank given to groups or group members by others." },
        { term: "Status characteristics theory", definition: "Status đến từ power over others, ability to contribute, và personal characteristics." },
        { term: "Status inequity", definition: "Cảm nhận thứ bậc status không tương xứng với đóng góp hoặc kỳ vọng." },
      ],
    },
    {
      id: "s6",
      heading: "Group Property 4: Size (Social loafing)",
      blocks: [
        calloutBlock(
          "key",
          "Size & social loafing (R&J p191-192)",
          "Kích thước nhóm ảnh hưởng hành vi. Nhóm nhỏ (~7) hoàn thành nhiệm vụ nhanh hơn; nhóm lớn (~12+) tốt hơn cho giải quyết vấn đề/thu thập đầu vào đa dạng. Social loafing = xu hướng cá nhân bỏ ít công sức hơn khi làm việc tập thể so với khi làm một mình.",
        ),
        comparisonBlock(
          "Social loafing — cơ chế & bối cảnh (R&J p191-192)",
          ["Khía cạnh", "Nội dung"],
          [
            {
              label: "Ringelmann effect",
              cells: [
                "Ringelmann phát hiện năng suất theo đầu người GIẢM khi nhóm to ra (kéo dây): tổng lực nhóm < tổng lực từng cá nhân cộng lại.",
              ],
            },
            {
              label: "Nguyên nhân",
              cells: [
                "(1) Tin rằng người khác không cố hết sức nên mình cũng giảm để khỏi thiệt; (2) trách nhiệm bị phân tán (dispersion of responsibility) — đóng góp cá nhân khó đo.",
              ],
            },
            {
              label: "Lưu ý văn hóa",
              cells: [
                "Social loafing rõ ở nền văn hóa cá nhân chủ nghĩa (phương Tây); ở nền tập thể (collectivist) có thể ít hơn hoặc ngược lại.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "5 cách ngăn social loafing (R&J p192)",
          "(1) Đặt mục tiêu nhóm rõ ràng để có mục đích chung; (2) tăng cạnh tranh giữa các nhóm (hướng vào kết quả chung); (3) dùng đánh giá đồng cấp (peer evaluation); (4) chọn thành viên có động lực cao và thích làm nhóm; (5) gắn phần thưởng nhóm với đóng góp riêng của từng cá nhân (đo được đóng góp).",
        ),
      ],
      keyTerms: [
        { term: "Social loafing", definition: "Xu hướng cá nhân bỏ ít công sức hơn khi làm việc tập thể so với khi làm một mình." },
        { term: "Ringelmann effect", definition: "Năng suất theo đầu người giảm khi quy mô nhóm tăng." },
      ],
    },
    {
      id: "s7",
      heading: "Group Property 5: Cohesiveness & Property 6: Diversity",
      blocks: [
        calloutBlock(
          "key",
          "Cohesiveness (R&J p192-193)",
          "Cohesiveness là mức độ thành viên bị hút vào nhau và muốn ở lại nhóm. Cohesiveness quan hệ tới năng suất NHƯNG phụ thuộc performance norms của nhóm.",
        ),
        comparisonBlock(
          "Cohesiveness × Performance norms (Exhibit 10-4) (R&J p193)",
          ["Điều kiện", "Chuẩn năng suất CAO", "Chuẩn năng suất THẤP"],
          [
            {
              label: "Cohesiveness cao",
              cells: [
                "Năng suất cao nhất — nhóm gắn kết đẩy nhau đạt chuẩn cao.",
                "Năng suất thấp nhất — gắn kết củng cố chuẩn thấp.",
              ],
            },
            {
              label: "Cohesiveness thấp",
              cells: [
                "Năng suất trung bình-cao (kém đồng đều).",
                "Năng suất thấp đến trung bình.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "7 cách tăng cohesiveness (R&J p193)",
          "(1) Làm nhóm nhỏ lại; (2) khuyến khích đồng thuận về mục tiêu nhóm; (3) tăng thời gian thành viên ở bên nhau; (4) nâng status nhóm và độ khó để gia nhập; (5) kích thích cạnh tranh với nhóm khác; (6) thưởng cả nhóm thay vì cá nhân; (7) cô lập nhóm về mặt vật lý. Chỉ nên tăng cohesiveness khi performance norms cao.",
        ),
        comparisonBlock(
          "Diversity của nhóm (R&J p193-194; slide)",
          ["Khía cạnh", "Nội dung"],
          [
            {
              label: "Surface-level vs deep-level",
              cells: [
                "Surface: đặc điểm dễ thấy (tuổi, giới, chủng tộc). Deep: giá trị, tính cách, thái độ — lộ ra theo thời gian.",
              ],
            },
            {
              label: "Faultlines",
              cells: [
                "Đường nứt chia nhóm thành các nhóm con theo đặc điểm chung (vd cùng tuổi + cùng phòng ban) → có thể sinh xung đột phe phái.",
              ],
            },
            {
              label: "Tác động",
              cells: [
                "Diversity thường TĂNG xung đột và giảm gắn kết ở giai đoạn đầu, nhưng nếu vượt qua được thì đem lại đa dạng góc nhìn, cải thiện chất lượng quyết định về lâu dài.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        { term: "Cohesiveness", definition: "Mức độ thành viên bị hút vào nhau và muốn ở lại nhóm." },
        { term: "Performance norms", definition: "Chuẩn mực nhóm về mức năng suất/hiệu suất được mong đợi." },
        { term: "Surface-level diversity", definition: "Diversity ở đặc điểm dễ thấy như tuổi, giới, chủng tộc." },
        { term: "Deep-level diversity", definition: "Diversity ở giá trị, tính cách, thái độ lộ ra theo thời gian." },
        { term: "Faultlines", definition: "Đường nứt chia nhóm thành các nhóm con dựa trên đặc điểm chung." },
      ],
    },
    {
      id: "s8",
      heading: "Chốt 6 properties (tổng hợp)",
      blocks: [
        comparisonBlock(
          "Sáu group properties — bảng tra nhanh (R&J Ch.10)",
          ["Property", "Định hình hành vi thế nào", "Điểm cần nhớ"],
          [
            {
              label: "1. Roles",
              cells: [
                "Vai trò quy định hành vi kỳ vọng theo vị trí.",
                "Role perception/expectation, psychological contract, role conflict; Zimbardo.",
              ],
            },
            {
              label: "2. Norms",
              cells: [
                "Chuẩn mực chung ép tuân thủ.",
                "Hawthorne, conformity (Asch ~1/3), deviant workplace behavior.",
              ],
            },
            {
              label: "3. Status",
              cells: [
                "Thứ bậc xã hội định ai được nghe.",
                "Status characteristics theory; status inequity bóp méo thảo luận.",
              ],
            },
            {
              label: "4. Size",
              cells: [
                "Số lượng đổi hiệu quả lấy đầu vào.",
                "Social loafing (Ringelmann); nhỏ nhanh, lớn nhiều ý.",
              ],
            },
            {
              label: "5. Cohesiveness",
              cells: [
                "Gắn kết khuếch đại chuẩn mực (tốt hoặc xấu).",
                "Chỉ tốt cho năng suất khi performance norms cao (Exhibit 10-4).",
              ],
            },
            {
              label: "6. Diversity",
              cells: [
                "Đa dạng tăng xung đột sớm, tăng chất lượng muộn.",
                "Surface vs deep; faultlines.",
              ],
            },
          ],
        ),
        calloutBlock(
          "key",
          "Thông điệp Pillar 2",
          "Hành vi cá nhân trong nhóm được LỌC qua sáu thuộc tính này — muốn thay đổi hành vi nhóm, chỉnh thuộc tính (giao vai rõ, đặt chuẩn cao, cân bằng status, giữ nhóm đủ nhỏ, gắn kết quanh chuẩn cao, quản lý faultlines) chứ không chỉ hô hào cá nhân.",
        ),
      ],
    },
    {
      id: "s9",
      heading: "Group vs Individual decision making",
      blocks: [
        calloutBlock(
          "key",
          "Nhóm quyết định — mạnh & yếu (R&J p194-196)",
          "Nhóm tạo thông tin và tri thức đầy đủ hơn nhưng chậm hơn và chịu áp lực xã hội. Câu hỏi thực dụng: effectiveness (chất lượng) hay efficiency (tốc độ/chi phí)?",
        ),
        comparisonBlock(
          "Group vs Individual decision making (R&J p194-195)",
          ["Tiêu chí", "Ưu của nhóm", "Nhược của nhóm"],
          [
            {
              label: "Thông tin",
              cells: [
                "Nhiều thông tin & tri thức đa dạng hơn cá nhân đơn lẻ.",
                "Tốn nhiều thời gian hơn để đạt kết luận.",
              ],
            },
            {
              label: "Chất lượng & chấp nhận",
              cells: [
                "Đa dạng góc nhìn → giải pháp đa dạng, độ chính xác cao hơn; tăng chấp nhận & cam kết với quyết định.",
                "Áp lực tuân thủ (conformity) đè nén ý kiến thiểu số.",
              ],
            },
            {
              label: "Trách nhiệm",
              cells: [
                "(thường) Tính chính danh cao hơn quyết định độc đoán.",
                "Có thể bị một số ít chi phối; trách nhiệm mơ hồ (ambiguous responsibility).",
              ],
            },
          ],
        ),
        comparisonBlock(
          "Effectiveness vs Efficiency (R&J p195-196)",
          ["Chiều đo", "Nội dung"],
          [
            {
              label: "Effectiveness (chất lượng)",
              cells: [
                "Nhóm thường cho quyết định chính xác/sáng tạo hơn cá nhân TRUNG BÌNH, nhưng hiếm khi vượt cá nhân GIỎI nhất.",
              ],
            },
            {
              label: "Efficiency (hiệu suất)",
              cells: [
                "Cá nhân gần như luôn nhanh & rẻ hơn: nhóm ngốn giờ họp, phối hợp → chọn nhóm hay cá nhân là bài toán đánh đổi.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        { term: "Effectiveness", definition: "Chất lượng/độ đúng/độ sáng tạo của quyết định." },
        { term: "Efficiency", definition: "Tốc độ và chi phí nguồn lực để đi tới quyết định." },
      ],
    },
    {
      id: "s10",
      heading: "Groupthink & Groupshift/Group Polarization",
      blocks: [
        calloutBlock(
          "key",
          "Groupthink (R&J p196-197)",
          "Groupthink là hiện tượng nhóm coi trọng đồng thuận đến mức chuẩn mực đồng thuận lấn át việc đánh giá thực tế các phương án; thành viên tự kiểm duyệt, tạo ảo tưởng nhất trí, gây áp lực lên người phản biện → quyết định tồi. Ví dụ Samsung Galaxy Note 7: áp lực đồng thuận bỏ qua cảnh báo an toàn.",
        ),
        comparisonBlock(
          "Groupthink vs Groupshift (Group polarization) (R&J p196-198)",
          ["Hiện tượng", "Nội dung"],
          [
            {
              label: "Groupthink",
              cells: [
                "Áp lực tuân thủ khiến nhóm không đánh giá phản biện các phương án bất thường/thiểu số; triệu chứng: hợp lý hóa, tự kiểm duyệt, ảo tưởng nhất trí, canh giữ mindguard.",
              ],
            },
            {
              label: "Groupshift / group polarization",
              cells: [
                "Sau thảo luận, lập trường của nhóm dịch về phía CỰC HƠN so với vị trí ban đầu của các thành viên (thường về hướng đã nghiêng sẵn) — có thể là risky shift hoặc thận trọng hơn.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Cách giảm groupthink (R&J p197)",
          "Giữ nhóm nhỏ; lãnh đạo không áp đặt quan điểm sớm; cử người phản biện (devil's advocate); khuyến khích nêu nghi ngờ; rà soát lại quyết định sau khi đã sơ bộ đồng thuận.",
        ),
      ],
      keyTerms: [
        { term: "Groupthink", definition: "Hiện tượng áp lực đồng thuận lấn át đánh giá thực tế các phương án." },
        { term: "Groupshift", definition: "Sự dịch chuyển quyết định nhóm về hướng cực đoan hơn sau thảo luận." },
        { term: "Group polarization", definition: "Khuynh hướng group discussion làm lập trường chung cực hơn hướng ban đầu." },
      ],
    },
    {
      id: "s11",
      heading: "Kỹ thuật ra quyết định nhóm",
      blocks: [
        comparisonBlock(
          "3 kỹ thuật ra quyết định nhóm (Exhibit 10-5) (R&J p198-199)",
          ["Kỹ thuật", "Cách làm", "Mạnh", "Yếu"],
          [
            {
              label: "Interacting groups",
              cells: [
                "Thành viên gặp mặt trực tiếp, tương tác bằng lời & phi ngôn ngữ.",
                "Quen thuộc, xây dựng gắn kết nhóm.",
                "Dễ tạo áp lực tuân thủ, kiểm duyệt ý kiến (nguồn gốc groupthink).",
              ],
            },
            {
              label: "Brainstorming",
              cells: [
                "Ngồi quanh bàn, nêu càng nhiều ý càng tốt, KHÔNG phê phán trong lúc nêu.",
                "Vượt sức ép tuân thủ, kích thích ý tưởng.",
                "Kém hiệu suất — production blocking (mọi người nói cùng lúc chặn dòng suy nghĩ); cá nhân làm riêng lại ra nhiều ý hơn.",
              ],
            },
            {
              label: "Nominal group technique (NGT)",
              cells: [
                "Hạn chế thảo luận: mỗi người tự viết ý → lần lượt trình bày → nhóm thảo luận đánh giá → xếp hạng độc lập, điểm cao nhất thắng.",
                "Cho phép họp chính thức mà KHÔNG bó buộc tư duy độc lập; thường vượt brainstorming.",
                "Tốn công tổ chức; giới hạn một vấn đề mỗi lần.",
              ],
            },
          ],
        ),
        calloutBlock(
          "key",
          "Chọn kỹ thuật theo tiêu chí (Exhibit 10-5)",
          "Interacting tốt cho cam kết với giải pháp; brainstorming phát triển gắn kết nhóm; NGT là cách rẻ để tạo nhiều ý tưởng. Không có kỹ thuật tốt nhất tuyệt đối — chọn theo mục tiêu và đánh đổi chi phí-lợi ích.",
        ),
        calloutBlock(
          "note",
          "Khép lại Topic 07",
          "Sáu thuộc tính + hiểu biết về ra quyết định nhóm cho ta bộ công cụ đọc và can thiệp hành vi nhóm. Chương tiếp theo (Ch.11) sẽ chuyển từ GROUP sang TEAM — thuộc Topic 09.",
        ),
        calloutBlock(
          "key",
          "So what — kiến thức này đổi hành động của bạn",
          "Khi một người \"đổi tính\" lúc vào nhóm, soi norms/roles/status trước khi quy cho tính cách — đây chính là fundamental attribution error (nối Topic 2) ở cấp nhóm. Hành động: nhóm đông thì thiết kế accountability cá nhân để chặn social loafing; nhóm quá cohesive + cô lập thì cảnh giác groupthink — chỉ định devil's advocate trước khi quyết định lớn.",
        ),
      ],
      keyTerms: [
        { term: "Interacting groups", definition: "Nhóm ra quyết định bằng tương tác trực tiếp bằng lời và phi ngôn ngữ." },
        { term: "Brainstorming", definition: "Kỹ thuật nêu nhiều ý tưởng, trì hoãn phê phán trong lúc nêu." },
        { term: "Nominal group technique", definition: "Kỹ thuật mỗi người tự viết ý, lần lượt trình bày, thảo luận và xếp hạng độc lập." },
        { term: "Production blocking", definition: "Hiện tượng người khác nói/chờ lượt nói chặn dòng suy nghĩ, làm brainstorming kém hiệu suất." },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "Which option best defines a group in Organizational Behavior?",
      options: [
        { id: "a", text: "Any collection of people standing near each other at the same time", isCorrect: false, rationale: "Cơ chế: một đám đông gần nhau chưa chắc tương tác, phụ thuộc nhau, hay có objectives chung. Bẫy: nhầm group với aggregate. Khóa: group cần interacting + interdependent + particular objectives." },
        { id: "b", text: "Two or more individuals who are interacting, interdependent, and have come together to achieve particular objectives", isCorrect: true, rationale: "Cơ chế: đây là định nghĩa group theo R&J. Bẫy: thiếu một trong ba mảnh sẽ thành crowd hoặc network lỏng. Khóa: 2+ người, interacting, interdependent, objectives." },
        { id: "c", text: "A set of employees who share the same job title but never coordinate work", isCorrect: false, rationale: "Cơ chế: cùng title không đủ nếu không tương tác/phụ thuộc. Bẫy: cùng phòng ban nghe giống formal group. Khóa: phải có interdependence và objectives chung." },
        { id: "d", text: "A temporary emotion shared by people after a company announcement", isCorrect: false, rationale: "Cơ chế: shared emotion không phải cấu trúc group. Bẫy: cảm xúc tập thể có thể xuất hiện trong group. Khóa: definition xoay quanh interaction/interdependence/objectives." },
        { id: "e", text: "A team with high trust and complementary skills", isCorrect: false, rationale: "Cơ chế: team thuộc Topic 09/Ch.11 và là dạng đặc biệt hơn group. Bẫy: mọi team là group nhưng không phải mọi group là team. Khóa: Topic 07 hỏi group basics." },
      ],
      difficulty: "basic",
      conceptTested: "Group definition",
      takeaway: "Group khác đám đông ở chỗ có tương tác, phụ thuộc lẫn nhau và mục tiêu cụ thể.",
    },
    {
      id: "q02",
      stem: "A principal and the teachers who report directly to her are best described as which type of group?",
      options: [
        { id: "a", text: "Command group", isCorrect: true, rationale: "Cơ chế: command group gồm các cá nhân báo cáo trực tiếp cho một manager. Bẫy: cùng làm giáo dục có thể gợi task group. Khóa: reporting line trực tiếp." },
        { id: "b", text: "Task group", isCorrect: false, rationale: "Cơ chế: task group cùng hoàn thành một nhiệm vụ cụ thể, có thể vượt command lines. Bẫy: trường học cũng có tasks. Khóa: stem nhấn report directly." },
        { id: "c", text: "Interest group", isCorrect: false, rationale: "Cơ chế: interest group tập hợp quanh mối quan tâm cụ thể. Bẫy: giáo viên có thể cùng quan tâm lịch học. Khóa: không phải shared interest mà là cấu trúc báo cáo." },
        { id: "d", text: "Friendship group", isCorrect: false, rationale: "Cơ chế: friendship group hình thành từ đặc điểm xã hội/chơi thân. Bẫy: làm cùng lâu có thể thân. Khóa: stem không nói friendship." },
        { id: "e", text: "Outgroup", isCorrect: false, rationale: "Cơ chế: outgroup là nhóm bên ngoài identity của mình trong social identity theory. Bẫy: cùng là phân loại group. Khóa: command/task/interest/friendship là taxonomy ở s1." },
      ],
      difficulty: "basic",
      conceptTested: "Types of groups",
      takeaway: "Command group được nhận diện bằng quan hệ báo cáo trực tiếp cho cùng một manager.",
    },
    {
      id: "q03",
      stem: "Employees feel proud when their department wins an award and begin to describe other departments as less competent. Which concept best explains this?",
      options: [
        { id: "a", text: "Social identity theory and ingroup favoritism", isCorrect: true, rationale: "Cơ chế: social identity gắn self-esteem với thành công nhóm, dẫn tới ingroup favoritism. Bẫy: tự hào nhóm nghe như simple morale. Khóa: proud with ingroup + đánh giá outgroup thấp hơn." },
        { id: "b", text: "Social exchange only", isCorrect: false, rationale: "Cơ chế: social exchange nói lợi ích-chi phí trong quan hệ nhóm. Bẫy: award có thể là benefit. Khóa: stem nhấn identity và ingroup/outgroup." },
        { id: "c", text: "Role conflict", isCorrect: false, rationale: "Cơ chế: role conflict là xung đột kỳ vọng vai trò. Bẫy: departments có thể đòi hỏi vai trò khác nhau. Khóa: không có conflict giữa roles." },
        { id: "d", text: "Production blocking", isCorrect: false, rationale: "Cơ chế: production blocking là yếu của brainstorming khi người khác nói chặn ý. Bẫy: cùng chủ đề group behavior. Khóa: không có ideation meeting." },
        { id: "e", text: "Status inequity", isCorrect: false, rationale: "Cơ chế: status inequity là cảm nhận thứ bậc không tương xứng. Bẫy: award nâng status. Khóa: hiện tượng chính là identity/favoritism." },
      ],
      difficulty: "intermediate",
      conceptTested: "Social identity theory",
      takeaway: "Social identity theory giải thích vì sao thành công nhóm chạm tới self-esteem và tạo ingroup favoritism.",
    },
    {
      id: "q04",
      stem: "A project group makes little progress during the first half of its deadline, then suddenly revises its strategy at the midpoint and accelerates. Which model fits best?",
      options: [
        { id: "a", text: "Punctuated-equilibrium model", isCorrect: true, rationale: "Cơ chế: model này mô tả phase 1 trì trệ, transition ở điểm giữa, rồi phase 2 tăng tốc. Bẫy: dễ chọn 5-stage vì cùng là group development. Khóa: midpoint burst/change." },
        { id: "b", text: "Five-stage model in strict order", isCorrect: false, rationale: "Cơ chế: 5-stage là forming-storming-norming-performing-adjourning, không nhấn midpoint transition. Bẫy: đều nói phát triển nhóm. Khóa: deadline halfway là dấu hiệu punctuated-equilibrium." },
        { id: "c", text: "Status characteristics theory", isCorrect: false, rationale: "Cơ chế: theory này giải thích nguồn status. Bẫy: strategy revision có thể do leader status cao. Khóa: stem hỏi pattern phát triển theo thời gian." },
        { id: "d", text: "Asch conformity model", isCorrect: false, rationale: "Cơ chế: Asch là conformity theo áp lực nhóm. Bẫy: nhóm cùng đổi hướng có thể nghe conformity. Khóa: không có line judgment/đáp án sai đồng loạt." },
        { id: "e", text: "Nominal group technique", isCorrect: false, rationale: "Cơ chế: NGT là kỹ thuật ra quyết định. Bẫy: revise strategy có thể dùng technique. Khóa: stem mô tả development trajectory." },
      ],
      difficulty: "basic",
      conceptTested: "Punctuated-equilibrium model",
      takeaway: "Punctuated-equilibrium: nhóm có deadline thường ì nửa đầu, bùng nổ ở điểm giữa, rồi tăng tốc.",
    },
    {
      id: "q05",
      stem: "Which sequence correctly states the five-stage group-development model?",
      options: [
        { id: "a", text: "Forming → storming → norming → performing → adjourning", isCorrect: true, rationale: "Cơ chế: đây là thứ tự 5-stage model. Bẫy: storming và norming hay bị đảo. Khóa: thăm dò trước, xung đột sau, rồi chuẩn hóa, thực hiện, kết thúc." },
        { id: "b", text: "Storming → forming → norming → performing → adjourning", isCorrect: false, rationale: "Cơ chế: storming không đứng trước forming. Bẫy: xung đột có thể xảy ra rất sớm. Khóa: forming là giai đoạn bất định ban đầu." },
        { id: "c", text: "Forming → norming → storming → performing → adjourning", isCorrect: false, rationale: "Cơ chế: norming thường sau storming. Bẫy: muốn nhóm có norms trước khi conflict. Khóa: conflict giúp định hình norms." },
        { id: "d", text: "Performing → storming → forming → norming → adjourning", isCorrect: false, rationale: "Cơ chế: performing không thể là điểm xuất phát của model. Bẫy: project urgency làm nhóm bắt tay làm ngay. Khóa: model vẫn bắt đầu bằng forming." },
        { id: "e", text: "Adjourning → forming → storming → norming → performing", isCorrect: false, rationale: "Cơ chế: adjourning là kết thúc với nhóm tạm thời. Bẫy: nhóm mới có thể kế thừa nhóm cũ. Khóa: adjourning nằm cuối." },
      ],
      difficulty: "basic",
      conceptTested: "Five-stage group-development model",
      takeaway: "5-stage model: forming → storming → norming → performing → adjourning.",
    },
    {
      id: "q06",
      stem: "An employee thinks, “As a project coordinator, I should challenge weak schedules,” while her teammates think coordinators should simply record decisions. Which contrast is shown?",
      options: [
        { id: "a", text: "Role perception versus role expectation", isCorrect: true, rationale: "Cơ chế: role perception là mình hiểu vai; role expectation là người khác kỳ vọng vai. Bẫy: thấy disagreement nên chọn role conflict ngay. Khóa: stem đối chiếu self-view với others' expectations." },
        { id: "b", text: "Status inequity versus social loafing", isCorrect: false, rationale: "Cơ chế: status inequity là bất cân bằng status; social loafing là giảm effort trong nhóm. Bẫy: coordinator có thể status thấp. Khóa: câu hỏi về kỳ vọng vai trò." },
        { id: "c", text: "Formal group versus informal group", isCorrect: false, rationale: "Cơ chế: formal/informal là nguồn hình thành nhóm. Bẫy: project group có thể formal. Khóa: stem không hỏi loại nhóm." },
        { id: "d", text: "Groupthink versus groupshift", isCorrect: false, rationale: "Cơ chế: groupthink là đồng thuận lấn át phản biện; groupshift là cực đoan hóa sau thảo luận. Bẫy: teammates cùng nghĩ một hướng. Khóa: không có decision bias." },
        { id: "e", text: "Surface-level versus deep-level diversity", isCorrect: false, rationale: "Cơ chế: diversity là khác biệt đặc điểm/giá trị. Bẫy: khác kỳ vọng có thể bắt nguồn từ deep values. Khóa: khái niệm trực tiếp là role." },
      ],
      difficulty: "intermediate",
      conceptTested: "Role perception and role expectation",
      takeaway: "Role perception = mình hiểu vai; role expectation = người khác kỳ vọng mình làm gì trong vai đó.",
    },
    {
      id: "q07",
      stem: "A firm quietly implies that employees who work late for six months will be promoted, but later says no such promise exists. Which concept is most directly violated?",
      options: [
        { id: "a", text: "Psychological contract", isCorrect: true, rationale: "Cơ chế: psychological contract là kỳ vọng bất thành văn hai chiều giữa employee và employer. Bẫy: không có hợp đồng pháp lý nên tưởng không có contract. Khóa: implied expectations bị phá vỡ." },
        { id: "b", text: "Reference group", isCorrect: false, rationale: "Cơ chế: reference group là nhóm cá nhân coi trọng và muốn được chấp nhận. Bẫy: employees có thể so nhau. Khóa: stem là employer-employee expectations." },
        { id: "c", text: "Punctuated-equilibrium", isCorrect: false, rationale: "Cơ chế: đây là model phát triển nhóm theo deadline. Bẫy: six months là mốc thời gian. Khóa: không có midpoint transition." },
        { id: "d", text: "Production blocking", isCorrect: false, rationale: "Cơ chế: production blocking là chặn dòng ý tưởng trong brainstorming. Bẫy: “work late” nghe production. Khóa: không phải ideation." },
        { id: "e", text: "Faultline", isCorrect: false, rationale: "Cơ chế: faultline chia nhóm thành subgroup. Bẫy: promoted/not promoted có thể chia phe. Khóa: khái niệm trực tiếp là psychological contract." },
      ],
      difficulty: "basic",
      conceptTested: "Psychological contract",
      takeaway: "Psychological contract không cần viết thành luật; vi phạm kỳ vọng bất thành văn vẫn làm giảm satisfaction, commitment, performance.",
    },
    {
      id: "q08",
      stem: "What is the main lesson of Zimbardo's Stanford prison study for role behavior?",
      options: [
        { id: "a", text: "Situational roles and context can strongly shape behavior, sometimes overwhelming individual personality", isCorrect: true, rationale: "Cơ chế: người được phân vai guard/prisoner nhanh chóng hành xử theo vai. Bẫy: nghĩ chỉ người xấu mới hành xử xấu. Khóa: role + context có lực rất mạnh." },
        { id: "b", text: "People never conform to role expectations", isCorrect: false, rationale: "Cơ chế: study cho thấy điều ngược lại. Bẫy: phản ứng chống vai trò có thể xảy ra. Khóa: kết luận chính là sức mạnh của role." },
        { id: "c", text: "Only formal rewards influence behavior in groups", isCorrect: false, rationale: "Cơ chế: study không dựa vào reward formal. Bẫy: rewards là động lực trong Topic 06. Khóa: vai trò/bối cảnh, không phải pay." },
        { id: "d", text: "Status has no impact on interaction", isCorrect: false, rationale: "Cơ chế: guard/prisoner roles tạo status/power khác nhau. Bẫy: status section riêng. Khóa: kết luận không phủ nhận status." },
        { id: "e", text: "Five-stage development is always linear", isCorrect: false, rationale: "Cơ chế: Zimbardo không kiểm tra 5-stage. Bẫy: cả hai thuộc group behavior. Khóa: study minh họa roles." },
      ],
      difficulty: "basic",
      conceptTested: "Zimbardo prison study",
      takeaway: "Zimbardo minh họa rằng role và context có thể lấn át cách ta tưởng về tính cách cá nhân.",
    },
    {
      id: "q09",
      stem: "In the Hawthorne Studies, a work group pressured members not to produce too much or too little. What concept does this best illustrate?",
      options: [
        { id: "a", text: "Group norms regulating behavior", isCorrect: true, rationale: "Cơ chế: nhóm tự đặt chuẩn sản lượng và ép rate busters/chiselers tuân theo. Bẫy: tưởng money incentive là chính. Khóa: áp lực norms mạnh hơn động cơ tiền bạc." },
        { id: "b", text: "Nominal group technique", isCorrect: false, rationale: "Cơ chế: NGT là kỹ thuật ra quyết định bằng viết ý và xếp hạng độc lập. Bẫy: group làm việc cùng nhau. Khóa: đây là norms, không phải decision technique." },
        { id: "c", text: "Social exchange", isCorrect: false, rationale: "Cơ chế: social exchange là lợi ích-chi phí quan hệ. Bẫy: tuân thủ norms có thể giữ lợi ích xã hội. Khóa: Hawthorne nhấn chuẩn mực sản lượng." },
        { id: "d", text: "Surface-level diversity", isCorrect: false, rationale: "Cơ chế: surface diversity là tuổi/giới/chủng tộc. Bẫy: worker differences có thể tồn tại. Khóa: stem hỏi pressure not to over/underproduce." },
        { id: "e", text: "Group polarization", isCorrect: false, rationale: "Cơ chế: polarization là lập trường cực hơn sau thảo luận. Bẫy: nhóm ép về một hướng. Khóa: không phải extreme shift mà là production norm." },
      ],
      difficulty: "intermediate",
      conceptTested: "Norms and Hawthorne Studies",
      takeaway: "Hawthorne cho thấy group norms có thể kiểm soát behavior rất mạnh, kể cả khi tiền thưởng kéo hướng khác.",
    },
    {
      id: "q10",
      stem: "In Asch's line-judgment study, about one-third of participants conformed to an obviously wrong group answer. What does this demonstrate?",
      options: [
        { id: "a", text: "Conformity pressure can override clear personal evidence", isCorrect: true, rationale: "Cơ chế: Asch cho thấy khoảng 1/3 người theo đáp án sai khi group nhất trí sai. Bẫy: tưởng conformity chỉ xảy ra khi thông tin mơ hồ. Khóa: mắt thấy rõ vẫn có thể bị sức ép nhóm kéo." },
        { id: "b", text: "Brainstorming always produces more ideas than individuals working alone", isCorrect: false, rationale: "Cơ chế: brainstorming còn bị production blocking. Bẫy: cùng là group effect. Khóa: Asch là conformity, không phải creativity." },
        { id: "c", text: "High-status people always violate norms without consequences", isCorrect: false, rationale: "Cơ chế: status cao có idiosyncrasy credit, nhưng không phải Asch. Bẫy: conformity liên quan norms/status. Khóa: study kiểm áp lực majority." },
        { id: "d", text: "Social loafing disappears in large groups", isCorrect: false, rationale: "Cơ chế: size lớn thường làm social loafing dễ hơn. Bẫy: group size trong Asch có thể ảnh hưởng pressure. Khóa: không phải loafing." },
        { id: "e", text: "Role conflict improves performance", isCorrect: false, rationale: "Cơ chế: role conflict gây căng thẳng/bất mãn. Bẫy: conflict có thể làm người ta nghĩ kỹ hơn. Khóa: Asch không nói role conflict." },
      ],
      difficulty: "basic",
      conceptTested: "Asch conformity study",
      takeaway: "Asch cho thấy conformity là sức ép thật: khoảng 1/3 người có thể phủ nhận bằng chứng trước mắt để hòa theo nhóm.",
    },
    {
      id: "q11",
      stem: "An employee intentionally spreads false rumors to damage a coworker's reputation. Which category of deviant workplace behavior fits best?",
      options: [
        { id: "a", text: "Political deviance", isCorrect: true, rationale: "Cơ chế: political deviance gồm gossip/rumors/blaming nhằm gây hại xã hội-chính trị trong tổ chức. Bẫy: gây hại cá nhân nên dễ chọn personal aggression. Khóa: rumors/reputation = political." },
        { id: "b", text: "Production deviance", isCorrect: false, rationale: "Cơ chế: production deviance là rời sớm, làm chậm, lãng phí thời gian. Bẫy: rumors làm giảm productivity gián tiếp. Khóa: hành vi trực tiếp là rumor." },
        { id: "c", text: "Property deviance", isCorrect: false, rationale: "Cơ chế: property deviance là phá hoại/ăn cắp tài sản. Bẫy: reputation nghe như tài sản vô hình. Khóa: Exhibit 10-3 phân rumors vào political." },
        { id: "d", text: "Personal aggression", isCorrect: false, rationale: "Cơ chế: personal aggression là harassment, verbal abuse, violence trực tiếp. Bẫy: victim là coworker. Khóa: false rumors thường là political deviance." },
        { id: "e", text: "Social loafing", isCorrect: false, rationale: "Cơ chế: social loafing là giảm effort trong nhóm. Bẫy: deviance và loafing đều làm hại nhóm. Khóa: stem là intentional rumor." },
      ],
      difficulty: "advanced",
      conceptTested: "Deviant workplace behavior",
      takeaway: "Deviant workplace behavior có nhiều loại; rumors/blaming thuộc political deviance, không phải mọi hành vi hại người đều là personal aggression.",
    },
    {
      id: "q12",
      stem: "According to status characteristics theory, which set lists the three main sources of status?",
      options: [
        { id: "a", text: "Power over others, ability to contribute, and personal characteristics", isCorrect: true, rationale: "Cơ chế: đây là ba nguồn status trong status characteristics theory. Bẫy: dễ nhầm với pay/title/seniority cụ thể. Khóa: power, contribution, personal characteristics." },
        { id: "b", text: "Forming, storming, and norming", isCorrect: false, rationale: "Cơ chế: đó là ba giai đoạn đầu của 5-stage model. Bẫy: cùng Topic 07. Khóa: status theory không phải group development." },
        { id: "c", text: "Security, affiliation, and goal achievement", isCorrect: false, rationale: "Cơ chế: đây là reasons people join groups. Bẫy: status cũng là reason join. Khóa: nguồn status khác động cơ gia nhập." },
        { id: "d", text: "Production, property, and political deviance", isCorrect: false, rationale: "Cơ chế: đó là categories deviant workplace behavior. Bẫy: deviance có thể ảnh hưởng status. Khóa: không phải sources of status." },
        { id: "e", text: "Brainstorming, interacting groups, and nominal group technique", isCorrect: false, rationale: "Cơ chế: đây là decision techniques. Bẫy: decision influence có thể tạo status. Khóa: status characteristics theory có ba nguồn riêng." },
      ],
      difficulty: "basic",
      conceptTested: "Status characteristics theory",
      takeaway: "Status characteristics theory: status đến từ power over others, ability to contribute, và personal characteristics được nhóm coi trọng.",
    },
    {
      id: "q13",
      stem: "A high-status member dominates discussion, while lower-status members with useful information stay silent. What is the main OB risk?",
      options: [
        { id: "a", text: "Status differences can distort group interaction and reduce decision quality", isCorrect: true, rationale: "Cơ chế: status cao thường nói nhiều/quyết đoán hơn, có thể bóp nghẹt ý tưởng status thấp. Bẫy: dominance có thể nhìn như leadership tốt. Khóa: useful information bị im lặng là loss of decision quality." },
        { id: "b", text: "Social loafing always disappears when one person dominates", isCorrect: false, rationale: "Cơ chế: dominance không loại bỏ loafing; có thể còn làm người khác rút lui. Bẫy: một người làm nhiều nên tưởng không ai loaf. Khóa: risk chính là status/interaction." },
        { id: "c", text: "The group has reached adjourning", isCorrect: false, rationale: "Cơ chế: adjourning là chuẩn bị giải tán. Bẫy: silence có thể xảy ra cuối meeting. Khóa: stem nói dynamics trong discussion." },
        { id: "d", text: "The group is using nominal group technique correctly", isCorrect: false, rationale: "Cơ chế: NGT cho từng người viết/xếp hạng độc lập để giảm dominance. Bẫy: discussion vẫn có trong NGT. Khóa: lower-status silence là vấn đề NGT muốn giảm." },
        { id: "e", text: "The group has no norms", isCorrect: false, rationale: "Cơ chế: có thể có norms im lặng theo status. Bẫy: không ai phản biện nghe như thiếu norms. Khóa: status interaction là trọng tâm." },
      ],
      difficulty: "intermediate",
      conceptTested: "Status and group interaction",
      takeaway: "Status không chỉ là danh tiếng; nó phân phối airtime và có thể làm mất thông tin quan trọng trong thảo luận.",
    },
    {
      id: "q14",
      stem: "People pull harder when alone than when their individual effort is hidden inside a larger group. Which concept best explains this?",
      options: [
        { id: "a", text: "Social loafing and the Ringelmann effect", isCorrect: true, rationale: "Cơ chế: social loafing là giảm effort khi làm tập thể; Ringelmann cho thấy lực theo đầu người giảm khi nhóm kéo dây lớn hơn. Bẫy: tưởng coordination loss là toàn bộ câu chuyện. Khóa: effort cá nhân bị ẩn trong nhóm." },
        { id: "b", text: "Deep-level diversity", isCorrect: false, rationale: "Cơ chế: deep diversity là khác biệt values/personality/attitudes. Bẫy: nhóm lớn có thể đa dạng. Khóa: stem là effort giảm." },
        { id: "c", text: "Psychological contract", isCorrect: false, rationale: "Cơ chế: psychological contract là kỳ vọng employee-employer. Bẫy: effort thấp có thể do contract bị vi phạm. Khóa: individual effort hidden trong group là loafing." },
        { id: "d", text: "Groupthink", isCorrect: false, rationale: "Cơ chế: groupthink là đồng thuận lấn át đánh giá phương án. Bẫy: nhóm cùng làm tệ. Khóa: không có decision making." },
        { id: "e", text: "Ingroup favoritism", isCorrect: false, rationale: "Cơ chế: ingroup favoritism là thiên vị nhóm mình. Bẫy: group identity có thể ảnh hưởng effort. Khóa: Ringelmann/loafing mới đúng." },
      ],
      difficulty: "basic",
      conceptTested: "Social loafing",
      takeaway: "Social loafing tăng khi đóng góp cá nhân khó đo và trách nhiệm bị phân tán.",
    },
    {
      id: "q15",
      stem: "Which action is most likely to reduce social loafing?",
      options: [
        { id: "a", text: "Make individual contributions identifiable and link group rewards to those contributions", isCorrect: true, rationale: "Cơ chế: đo được đóng góp và gắn reward với đóng góp riêng làm giảm dispersion of responsibility. Bẫy: thưởng nhóm chung có thể chưa đủ. Khóa: identifiable contribution." },
        { id: "b", text: "Increase group size so each person feels less visible", isCorrect: false, rationale: "Cơ chế: size lớn thường làm loafing dễ hơn. Bẫy: nhóm lớn có nhiều nguồn lực hơn. Khóa: less visible là điều cần tránh." },
        { id: "c", text: "Remove all goals so members feel no pressure", isCorrect: false, rationale: "Cơ chế: clear group goals là cách giảm loafing. Bẫy: giảm pressure nghe giúp morale. Khóa: thiếu mục tiêu làm trách nhiệm mơ hồ hơn." },
        { id: "d", text: "Avoid peer evaluation because it creates accountability", isCorrect: false, rationale: "Cơ chế: peer evaluation chính là một cách tăng accountability. Bẫy: sợ xung đột trong nhóm. Khóa: accountability giảm loafing." },
        { id: "e", text: "Reward only the group total regardless of personal contribution", isCorrect: false, rationale: "Cơ chế: nếu chỉ thưởng tổng nhóm, free riding dễ tăng. Bẫy: reward group có thể tăng cohesiveness. Khóa: cần nối với contribution cá nhân khi muốn chống loafing." },
      ],
      difficulty: "intermediate",
      conceptTested: "Preventing social loafing",
      takeaway: "Chống social loafing bằng mục tiêu rõ, accountability, peer evaluation, thành viên có động lực, và reward gắn với đóng góp cá nhân.",
    },
    {
      id: "q16",
      stem: "When will cohesiveness produce the highest productivity?",
      options: [
        { id: "a", text: "When cohesiveness is high and performance norms are high", isCorrect: true, rationale: "Cơ chế: Exhibit 10-4 cho năng suất cao nhất khi nhóm gắn kết quanh chuẩn năng suất cao. Bẫy: nghĩ cohesiveness tự nó luôn tốt. Khóa: cohesiveness khuếch đại norms." },
        { id: "b", text: "When cohesiveness is high and performance norms are low", isCorrect: false, rationale: "Cơ chế: đây là năng suất thấp nhất vì nhóm gắn kết bảo vệ chuẩn thấp. Bẫy: high cohesiveness nghe tích cực. Khóa: norms thấp kéo cả nhóm xuống." },
        { id: "c", text: "When cohesiveness is low and performance norms are low", isCorrect: false, rationale: "Cơ chế: năng suất thấp đến trung bình. Bẫy: ít gắn kết có thể ít áp lực xấu. Khóa: thiếu cả gắn kết và chuẩn cao." },
        { id: "d", text: "Whenever the group is physically isolated", isCorrect: false, rationale: "Cơ chế: isolation có thể tăng cohesiveness, nhưng chỉ hữu ích nếu performance norms cao. Bẫy: đây là một cách tăng cohesiveness. Khóa: điều kiện quyết định là norms." },
        { id: "e", text: "Whenever group size is above twelve", isCorrect: false, rationale: "Cơ chế: size lớn có thể giúp input đa dạng nhưng không đảm bảo productivity. Bẫy: large groups tốt cho problem solving. Khóa: cohesiveness × norms mới là model ở câu hỏi." },
      ],
      difficulty: "basic",
      conceptTested: "Cohesiveness and performance norms",
      takeaway: "Cohesiveness là bộ khuếch đại: chuẩn cao thì năng suất cao nhất, chuẩn thấp thì năng suất thấp nhất.",
    },
    {
      id: "q17",
      stem: "A group initially splits into subgroups because age and department align, but later benefits from different viewpoints after members learn each other's values. Which concepts are involved?",
      options: [
        { id: "a", text: "Faultlines, surface-level diversity, and later deep-level understanding", isCorrect: true, rationale: "Cơ chế: age + department tạo faultline theo surface cues; theo thời gian deep-level values lộ ra và giúp ra quyết định tốt hơn. Bẫy: chỉ nhìn conflict sớm rồi kết luận diversity hại. Khóa: diversity có tác động hai pha." },
        { id: "b", text: "Only social loafing", isCorrect: false, rationale: "Cơ chế: social loafing là giảm effort khi làm nhóm. Bẫy: subgroup conflict có thể làm effort thấp. Khóa: stem nói đường nứt và diversity." },
        { id: "c", text: "Only status characteristics theory", isCorrect: false, rationale: "Cơ chế: status sources khác faultlines/diversity. Bẫy: department/age có thể tạo status. Khóa: từ khóa subgroups by shared characteristics là faultlines." },
        { id: "d", text: "Groupthink caused by too little diversity", isCorrect: false, rationale: "Cơ chế: groupthink là đồng thuận quá mức; stem nói có subgroups và viewpoints khác nhau. Bẫy: later benefits from viewpoints liên quan decision quality. Khóa: không phải too little diversity." },
        { id: "e", text: "Psychological contract and role conflict", isCorrect: false, rationale: "Cơ chế: psychological contract là employee-employer expectation; role conflict là kỳ vọng vai trò mâu thuẫn. Bẫy: subgroup membership có thể gây role conflict. Khóa: stem trực tiếp là diversity/faultlines." },
      ],
      difficulty: "advanced",
      conceptTested: "Diversity and faultlines",
      takeaway: "Diversity thường gây friction sớm nhưng có thể nâng chất lượng quyết định về lâu dài nếu nhóm vượt qua faultlines.",
    },
    {
      id: "q18",
      stem: "Which statement best summarizes group versus individual decision making?",
      options: [
        { id: "a", text: "Groups usually bring more information and acceptance, but take more time and face conformity and ambiguous responsibility", isCorrect: true, rationale: "Cơ chế: đây là trade-off chính của group decision making. Bẫy: chọn nhóm như mặc định tốt hơn. Khóa: effectiveness vs efficiency phải cân." },
        { id: "b", text: "Groups are always faster and cheaper than individuals", isCorrect: false, rationale: "Cơ chế: cá nhân gần như luôn efficient hơn. Bẫy: nhiều người có vẻ chia việc nhanh. Khóa: group ngốn họp/phối hợp." },
        { id: "c", text: "Groups always outperform the best individual decision maker", isCorrect: false, rationale: "Cơ chế: nhóm thường hơn cá nhân trung bình, nhưng hiếm vượt cá nhân giỏi nhất. Bẫy: wisdom of crowds bị tuyệt đối hóa. Khóa: không có always." },
        { id: "d", text: "Individuals create more acceptance and legitimacy than groups", isCorrect: false, rationale: "Cơ chế: nhóm thường tăng acceptance/legitimacy vì có tham gia. Bẫy: leader cá nhân có thể rất uy tín. Khóa: general comparison trong R&J." },
        { id: "e", text: "Groups avoid conformity pressure by definition", isCorrect: false, rationale: "Cơ chế: conformity pressure là nhược điểm lớn của nhóm. Bẫy: nhiều người có diversity nên tưởng chống conformity. Khóa: diversity không tự động loại áp lực." },
      ],
      difficulty: "intermediate",
      conceptTested: "Group versus individual decision making",
      takeaway: "Nhóm mạnh về thông tin/acceptance nhưng yếu về thời gian, conformity pressure và ambiguous responsibility.",
    },
    {
      id: "q19",
      stem: "A team suppresses dissent to preserve unanimity and ignores safety warnings. In another case, members become more extreme after discussion. Which concepts match these two cases?",
      options: [
        { id: "a", text: "Groupthink; groupshift or group polarization", isCorrect: true, rationale: "Cơ chế: suppress dissent/unanimity là groupthink; extreme after discussion là groupshift/polarization. Bẫy: cả hai đều là group decision traps nên dễ gộp. Khóa: đồng thuận mù vs cực đoan hóa." },
        { id: "b", text: "Social loafing; role perception", isCorrect: false, rationale: "Cơ chế: social loafing là giảm effort; role perception là mình hiểu vai. Bẫy: ignoring warnings có thể do ai đó không làm vai trò. Khóa: symptoms là decision bias." },
        { id: "c", text: "Punctuated-equilibrium; forming", isCorrect: false, rationale: "Cơ chế: đó là development models. Bẫy: discussion diễn ra theo thời gian. Khóa: stem nói decision traps." },
        { id: "d", text: "Status inequity; Hawthorne effect", isCorrect: false, rationale: "Cơ chế: status inequity và norms có thể góp phần, nhưng không gọi đúng hiện tượng. Bẫy: dissent bị đè có thể do status. Khóa: unanimity pressure = groupthink." },
        { id: "e", text: "Deep-level diversity; production blocking", isCorrect: false, rationale: "Cơ chế: deep diversity là values/personality; production blocking là brainstorming bottleneck. Bẫy: discussion và ý tưởng bị chặn. Khóa: extreme shift là groupshift." },
      ],
      difficulty: "advanced",
      conceptTested: "Groupthink and groupshift",
      takeaway: "Groupthink là đồng thuận mù; groupshift/group polarization là lập trường cực hơn sau thảo luận.",
    },
    {
      id: "q20",
      stem: "Which description best fits nominal group technique (NGT)?",
      options: [
        { id: "a", text: "Members independently write ideas, present them in turn, discuss for clarification, and then privately rank them", isCorrect: true, rationale: "Cơ chế: NGT hạn chế thảo luận ban đầu để giữ tư duy độc lập, rồi xếp hạng độc lập. Bẫy: có meeting nên nhầm interacting group. Khóa: write first + round-robin + private ranking." },
        { id: "b", text: "Members talk freely face-to-face with normal verbal and nonverbal interaction", isCorrect: false, rationale: "Cơ chế: đó là interacting group. Bẫy: NGT cũng có họp chính thức. Khóa: NGT giới hạn thảo luận và bắt đầu bằng viết độc lập." },
        { id: "c", text: "Members shout ideas simultaneously, and criticism is encouraged immediately", isCorrect: false, rationale: "Cơ chế: brainstorming trì hoãn phê phán; simultaneous talk còn gây production blocking. Bẫy: nhiều ý tưởng nghe brainstorming. Khóa: NGT có trình tự kiểm soát." },
        { id: "d", text: "The highest-status member chooses the final answer before discussion", isCorrect: false, rationale: "Cơ chế: NGT dùng ranking độc lập để giảm dominance. Bẫy: thực tế nhóm hay bị status chi phối. Khóa: NGT chống bó buộc tư duy độc lập." },
        { id: "e", text: "The group avoids all written ideas to maximize spontaneity", isCorrect: false, rationale: "Cơ chế: NGT bắt đầu bằng viết ý tưởng. Bẫy: spontaneity nghe giống creativity. Khóa: independent writing là dấu hiệu chính." },
      ],
      difficulty: "basic",
      conceptTested: "Nominal group technique",
      takeaway: "NGT thường vượt brainstorming vì giữ độc lập nhận thức trước khi nhóm thảo luận và xếp hạng.",
    },
    {
      id: "q21",
      stem: "A gender-diverse project group adopts strong political-correctness norms for interaction, and members then offer more unusual ideas. Which explanation best fits the evidence?",
      options: [
        { id: "a", text: "Clear PC norms can increase creativity by reducing uncertainty about cross-gender interaction", isCorrect: true, rationale: "Cơ chế: strong PC norms làm rõ kỳ vọng tương tác, giảm uncertainty và giải phóng việc nêu ý tưởng. Bẫy: trực giác cho rằng mọi norm chặt đều bóp creativity. Khóa: gender-diverse group + reduced uncertainty." },
        { id: "b", text: "Any strong norm necessarily reduces creativity", isCorrect: false, rationale: "Cơ chế: finding trong sách cho kết quả ngược ở strong PC norms. Bẫy: rule rigidity thường gắn conformity. Khóa: tác động của norm phụ thuộc nội dung và context." },
        { id: "c", text: "The group became creative because it removed all interaction standards", isCorrect: false, rationale: "Cơ chế: case nói nhóm thiết lập strong norms, không loại bỏ standards. Bẫy: freedom thường được gắn với creativity. Khóa: clarity, không phải normlessness, giảm uncertainty." },
        { id: "d", text: "Political correctness works only by increasing status differences", isCorrect: false, rationale: "Cơ chế: mechanism được nêu là uncertainty reduction, không phải status hierarchy. Bẫy: gender dynamics có thể liên quan status. Khóa: clear interaction expectations." },
        { id: "e", text: "Positive norms guarantee positive outcomes in every group", isCorrect: false, rationale: "Cơ chế: positive norms cần yếu tố đi kèm như group extraversion và social identity. Bẫy: gọi là positive nên dễ tuyệt đối hóa. Khóa: norms interact with group context." },
      ],
      difficulty: "advanced",
      conceptTested: "PC norms and group creativity",
      takeaway: "Norm chặt không luôn bóp creativity; trong nhóm gender-diverse, PC norms rõ có thể giảm uncertainty và mở không gian cho ý tưởng.",
    },
    {
      id: "q22",
      stem: "A candidate is judged negatively after briefly standing beside a stigmatized stranger at an event, even though the association was random. What is this effect?",
      options: [
        { id: "a", text: "Stigma by association", isCorrect: true, rationale: "Cơ chế: status/stigma của người được liên kết lan sang cách người khác đánh giá candidate dù association ngắn và ngẫu nhiên. Bẫy: candidate không thuộc stigmatized category nên hiện tượng có vẻ vô lý. Khóa: negative judgment through association." },
        { id: "b", text: "Stereotype threat", isCorrect: false, rationale: "Cơ chế: stereotype threat là người thuộc nhóm bị định kiến lo mình xác nhận stereotype, không phải observer lây stigma qua liên kết. Bẫy: cả hai đều liên quan stereotype. Khóa: association effect khác performance anxiety." },
        { id: "c", text: "Social loafing", isCorrect: false, rationale: "Cơ chế: social loafing là giảm effort trong group task. Bẫy: hành vi xảy ra trong bối cảnh xã hội. Khóa: không có collective effort hay dispersion of responsibility." },
        { id: "d", text: "Status inequity based on contribution", isCorrect: false, rationale: "Cơ chế: status inequity là rank không tương xứng đóng góp. Bẫy: candidate bị hạ status. Khóa: nguyên nhân là người đứng cạnh, không phải contribution." },
        { id: "e", text: "Deep-level diversity", isCorrect: false, rationale: "Cơ chế: deep-level diversity nói values/personality bộc lộ theo thời gian. Bẫy: đánh giá người khác cũng có thể dựa identity. Khóa: random link with stigma mới là cue quyết định." },
      ],
      difficulty: "intermediate",
      conceptTested: "Stigma by association",
      takeaway: "Stigma by association cho thấy status có thể lan qua một liên kết ngắn và ngẫu nhiên; nó khác stereotype threat ở cơ chế.",
    },
  ],
  status: "ready",
  source:
    "Robbins & Judge, Organizational Behavior — Chapter 10 'Basics of Group Behavior' (pp.182-199); Slide 'OB-Topic 7-Group properties' (Dr Lan Anh, IM2017, HCMUT).",
};

const topic08: Chapter = {
  slug: "topic-08",
  order: 8,
  title: "Topic 08 — Conflict and Collaboration",
  bigIdea:
    "Conflict không phải 'sự cố' cần dập tắt mà là một PROCESS tự nhiên trong mọi nhóm — và KHÔNG phải lúc nào cũng xấu. Đúng theo interactionist view (Robbins & Judge) và triết lý 'conflict & collaboration = hai mặt một đồng xu' (Dr Lan Anh): điều quyết định không phải CÓ conflict hay không, mà là LOẠI conflict (task vs relationship vs process), MỨC ĐỘ (đường cong U ngược — quá ít gây trì trệ, quá nhiều gây hỗn loạn, vừa đủ tạo performance), và CÁCH con người phản ứng. Nhà quản lý đọc conflict qua 5 giai đoạn, chọn conflict-handling intention phù hợp, dùng negotiation để giải quyết, và cuối cùng chuyển hóa conflict thành COLLABORATION — nơi khác biệt trở thành sáng tạo thay vì phá hoại.",
  bigIdeaPillars: [
    {
      label: "Conflict là process, không phải lúc nào cũng xấu",
      body: "Conflict = process bắt đầu khi một bên perceives bên kia đã/sắp negatively affect điều mình cares about (R&J p256). 3 types theo tác động: task (vừa phải → tốt), relationship (hầu như luôn dysfunctional), process (về delegation/roles). 3 loci: dyadic, intragroup, intergroup. Functional vs dysfunctional; inverted-U curve (A quá ít → trì trệ, B tối ưu → performance cao, C quá nhiều → hỗn loạn). Tư duy tiến hóa: traditional (né tránh) → human relations (tự nhiên) → interactionist (khuyến khích mức vừa đủ).",
    },
    {
      label: "Conflict Process — 5 giai đoạn, can thiệp ở intentions",
      body: "Stage I potential opposition (communication, structure, personal variables) → Stage II cognition & personalization (perceived conflict vs felt conflict; framing zero-sum vs win-win) → Stage III intentions = 5 conflict-handling styles trên trục assertiveness × cooperativeness (competing, collaborating, avoiding, accommodating, compromising) → Stage IV behavior (dynamic escalation, conflict-intensity continuum) → Stage V outcomes (functional/dysfunctional). Openness + collaborating gắn với performance cao; avoiding + competing gắn với performance thấp.",
    },
    {
      label: "Negotiation — công cụ giải quyết",
      body: "Negotiation = process 2+ bên quyết định phân bổ nguồn lực khan hiếm (R&J p265). Distributive (win-lose, fixed pie, focus positions) vs Integrative (win-win, expand the pie, focus interests) — Exhibit 14-4. BATNA = Best Alternative To a Negotiated Agreement (ngưỡng thấp nhất chấp nhận). 5-step process: preparation & planning → ground rules → clarification & justification → bargaining & problem solving → closure & implementation. Bị ảnh hưởng bởi individual differences (personality/mood/culture/gender), reputation & relationships. Third parties: mediator, arbitrator, conciliator.",
    },
    {
      label: "Từ Conflict sang Collaboration (thực hành)",
      body: "'Hai mặt đồng xu': quản trị để biến conflict thành collaboration (slide). Nhận diện causes of conflict (Myers-Briggs 2022). Khung thực hành: SCARF (Status/Certainty/Autonomy/Relatedness/Fairness — Away threat vs Toward reward, David Rock); 4 Triggers gây phần lớn team conflict (communication differences, opaque performance standards, unreasonable time constraints, unclear expectations) + 4 remedies (HBR); Johari Window cho empathy; promote healthy conflict; tránh cạm bẫy collaboration overload & 'New Groupthink'.",
    },
  ],
  learningObjectives: [
    "Định nghĩa conflict và phân biệt functional vs dysfunctional conflict (R&J p256-257).",
    "Mô tả 3 types of conflict (task, relationship, process) và 3 loci of conflict (dyadic, intragroup, intergroup).",
    "Giải thích quan hệ conflict-performance qua đường cong U ngược (Exhibit 14-1) và 3 views (traditional/human relations/interactionist).",
    "Trình bày 5 giai đoạn của conflict process (Exhibit 14-2) và các nguồn ở Stage I (communication, structure, personal variables).",
    "Phân biệt perceived conflict vs felt conflict (Stage II) và vai trò của framing/emotions.",
    "So sánh 5 conflict-handling intentions (competing, collaborating, avoiding, accommodating, compromising) trên trục assertiveness × cooperativeness (Exhibit 14-3).",
    "Giải thích Stage IV behavior (dynamic escalation / conflict-intensity continuum), Stage V outcomes và cách managing conflict.",
    "Contrast distributive vs integrative bargaining (Exhibit 14-4) và giải thích fixed pie & BATNA.",
    "Áp dụng 5 bước của negotiation process (Exhibit 14-6) và nêu ảnh hưởng của individual differences + reputation/relationships.",
    "Đánh giá vai trò của 3 third-party roles: mediator, arbitrator, conciliator.",
    "Vận dụng các khung chuyển conflict → collaboration (SCARF, 4 triggers + remedies, Johari, healthy conflict; tránh collaboration overload/New Groupthink).",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "Conflict & Collaboration: (A) bản chất conflict (types/loci/mức độ), (B) conflict process 5 giai đoạn, (C) negotiation giải quyết, (D) chuyển hóa sang collaboration.",
    nodes: [
      {
        id: "cf",
        label: "Conflict & Collaboration",
        group: "concept",
        sectionId: "s1",
        detail: "Conflict là process; quản trị đúng → collaboration & performance.",
      },
      {
        id: "g_nat",
        label: "A. Bản chất conflict",
        group: "concept",
        parent: "cf",
        sectionId: "s1",
        detail: "Types, loci, functional/dysfunctional, inverted-U, 3 views.",
      },
      {
        id: "g_proc",
        label: "B. Conflict process (5 stages)",
        group: "concept",
        parent: "cf",
        sectionId: "s4",
        detail: "Potential opposition → cognition → intentions → behavior → outcomes.",
      },
      {
        id: "g_neg",
        label: "C. Negotiation",
        group: "concept",
        parent: "cf",
        sectionId: "s8",
        detail: "Distributive/integrative, BATNA, 5 steps, third parties.",
      },
      {
        id: "g_collab",
        label: "D. Sang collaboration",
        group: "concept",
        parent: "cf",
        sectionId: "s11",
        detail: "SCARF, 4 triggers, Johari, healthy conflict.",
      },
      {
        id: "t_type",
        label: "Types + loci",
        group: "term",
        parent: "g_nat",
        sectionId: "s2",
        detail: "Task/relationship/process conflict và dyadic/intragroup/intergroup loci.",
      },
      {
        id: "t_level",
        label: "Inverted-U + 3 views",
        group: "term",
        parent: "g_nat",
        sectionId: "s3",
        detail: "Mức conflict tối ưu và ba quan điểm traditional/human relations/interactionist.",
      },
      {
        id: "t_stage",
        label: "Stage I-II",
        group: "term",
        parent: "g_proc",
        sectionId: "s4",
        detail: "Potential opposition và cognition/personalization.",
      },
      {
        id: "t_intent",
        label: "Stage III: 5 intentions",
        group: "term",
        parent: "g_proc",
        sectionId: "s6",
        detail: "Competing, collaborating, avoiding, accommodating, compromising.",
      },
      {
        id: "t_behav",
        label: "Stage IV-V",
        group: "term",
        parent: "g_proc",
        sectionId: "s7",
        detail: "Behavior, escalation, outcomes và managing conflict.",
      },
      {
        id: "t_barg",
        label: "Distributive vs integrative",
        group: "term",
        parent: "g_neg",
        sectionId: "s8",
        detail: "Hai logic bargaining: fixed pie/win-lose vs expand pie/win-win.",
      },
      {
        id: "t_negproc",
        label: "5-step process + BATNA",
        group: "term",
        parent: "g_neg",
        sectionId: "s9",
        detail: "Quy trình đàm phán 5 bước và ngưỡng BATNA.",
      },
      {
        id: "t_third",
        label: "Mediator/arbitrator/conciliator",
        group: "term",
        parent: "g_neg",
        sectionId: "s10",
        detail: "Ba vai trò third-party khác nhau về quyền áp đặt và kênh liên lạc.",
      },
      {
        id: "t_scarf",
        label: "SCARF + 4 triggers",
        group: "term",
        parent: "g_collab",
        sectionId: "s11",
        detail: "Status, Certainty, Autonomy, Relatedness, Fairness và 4 trigger xung đột nhóm.",
      },
      {
        id: "t_health",
        label: "Healthy conflict / overload",
        group: "term",
        parent: "g_collab",
        sectionId: "s11",
        detail: "Healthy conflict, Johari Window, collaboration overload và New Groupthink.",
      },
    ],
    edges: [
      { from: "cf", to: "g_nat", label: "bản chất" },
      { from: "cf", to: "g_proc", label: "process" },
      { from: "cf", to: "g_neg", label: "negotiation" },
      { from: "cf", to: "g_collab", label: "collab" },
      { from: "g_nat", to: "t_type", label: "types" },
      { from: "g_nat", to: "t_level", label: "mức độ" },
      { from: "g_proc", to: "t_stage", label: "stage I-II" },
      { from: "g_proc", to: "t_intent", label: "intentions" },
      { from: "g_proc", to: "t_behav", label: "behavior" },
      { from: "g_neg", to: "t_barg", label: "bargaining" },
      { from: "g_neg", to: "t_negproc", label: "5 bước" },
      { from: "g_neg", to: "t_third", label: "third party" },
      { from: "g_collab", to: "t_scarf", label: "SCARF" },
      { from: "g_collab", to: "t_health", label: "healthy" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "Conflict là gì + 3 views",
      blocks: [
        calloutBlock(
          "key",
          "Conflict theo Robbins & Judge (p256)",
          "Conflict = a process that begins when one party perceives that another party has negatively affected, or is about to negatively affect, something that the first party cares about. Nhấn: conflict là PERCEPTION về khác biệt/đối lập — không ai nhận ra thì coi như chưa có conflict trong nghĩa OB.",
        ),
        comparisonBlock(
          "3 Transitions in Conflict Thought (slide 11; R&J bối cảnh)",
          ["Quan điểm", "Nội dung", "Hàm ý"],
          [
            {
              label: "Traditional view",
              cells: [
                "Conflict là có hại, phải tránh; là dấu hiệu trục trặc của nhóm.",
                "Dập tắt mọi conflict → destructive khi vấn đề bị nén.",
              ],
            },
            {
              label: "Human relations view",
              cells: [
                "Conflict tự nhiên & không thể tránh trong mọi nhóm; có thể functional hoặc dysfunctional.",
                "Chấp nhận conflict như một phần tất yếu.",
              ],
            },
            {
              label: "Interactionist view",
              cells: [
                "Khuyến khích một mức conflict TỐI THIỂU để nhóm không trì trệ, tự phê, đổi mới.",
                "Nhà quản lý chủ động duy trì conflict vừa đủ → constructive.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Causes of conflict (slide 2 — Myers-Briggs 2022)",
          "Nhóm nguyên nhân: relational (~23%), organisational (roles/processes/org + poor communication + inadequate resources ≈ 44%), managerial (high workload, line management/top leadership). Conflict đến từ nhiều tầng, không chỉ do 'tính cách'.",
        ),
      ],
      keyTerms: [
        { term: "Conflict", definition: "Process bắt đầu khi một bên perceives bên kia negatively affect điều mình cares about." },
        { term: "Traditional view of conflict", definition: "Quan điểm xem conflict là có hại và cần tránh." },
        { term: "Human relations view of conflict", definition: "Quan điểm xem conflict là tự nhiên, không thể tránh, có thể tốt hoặc xấu." },
        { term: "Interactionist view of conflict", definition: "Quan điểm khuyến khích mức conflict vừa đủ để tránh trì trệ và tăng đổi mới." },
      ],
    },
    {
      id: "s2",
      heading: "Types & Loci of conflict",
      blocks: [
        comparisonBlock(
          "3 types of conflict (R&J p258-259)",
          ["Loại", "Bản chất", "Ghi chú performance"],
          [
            {
              label: "Task conflict",
              cells: [
                "Bất đồng về nội dung & mục tiêu công việc.",
                "Mức VỪA PHẢI có thể functional; quá cao thì hại.",
              ],
            },
            {
              label: "Relationship conflict",
              cells: [
                "Xung đột dựa trên quan hệ giữa các cá nhân: cảm xúc, cá nhân hóa.",
                "Gần như LUÔN dysfunctional — giảm hiểu biết lẫn nhau và cản hoàn thành việc.",
              ],
            },
            {
              label: "Process conflict",
              cells: [
                "Bất đồng về CÁCH làm việc — delegation & roles, ai làm gì, phân công thế nào.",
                "Dễ cá nhân hóa nhanh → chuyển thành relationship conflict.",
              ],
            },
          ],
        ),
        comparisonBlock(
          "3 loci of conflict (R&J p259)",
          ["Locus", "Nội dung"],
          [
            {
              label: "Dyadic conflict",
              cells: ["Conflict giữa HAI người."],
            },
            {
              label: "Intragroup conflict",
              cells: ["Conflict BÊN TRONG một nhóm/đội."],
            },
            {
              label: "Intergroup conflict",
              cells: ["Conflict GIỮA các nhóm/đội; dễ xảy ra khi các nhóm cạnh tranh thắng-thua."],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Kết hợp type × locus",
          "Hiểu một conflict cần biết cả LOẠI (task/relationship/process) lẫn NƠI xảy ra (dyadic/intragroup/intergroup) mới quản trị đúng.",
        ),
      ],
      keyTerms: [
        { term: "Task conflict", definition: "Bất đồng về nội dung và mục tiêu công việc." },
        { term: "Relationship conflict", definition: "Conflict dựa trên quan hệ/cảm xúc giữa cá nhân; thường dysfunctional." },
        { term: "Process conflict", definition: "Bất đồng về cách làm việc, delegation, roles." },
        { term: "Dyadic conflict", definition: "Conflict giữa hai người." },
        { term: "Intragroup conflict", definition: "Conflict bên trong một nhóm." },
        { term: "Intergroup conflict", definition: "Conflict giữa các nhóm." },
      ],
    },
    {
      id: "s3",
      heading: "Functional vs Dysfunctional + đường cong U ngược",
      blocks: [
        calloutBlock(
          "key",
          "Functional vs Dysfunctional (R&J p257)",
          "Functional conflict = hỗ trợ mục tiêu nhóm, cải thiện performance (constructive). Dysfunctional conflict = cản trở performance (destructive).",
        ),
        comparisonBlock(
          "Conflict & Unit Performance — inverted-U (Exhibit 14-1; slide 14)",
          ["Tình huống", "Mức conflict", "Loại", "Kết quả đơn vị"],
          [
            {
              label: "A",
              cells: [
                "Thấp/không",
                "Dysfunctional",
                "Thờ ơ, trì trệ, không đổi mới, thiếu ý tưởng → performance THẤP.",
              ],
            },
            {
              label: "B",
              cells: [
                "Tối ưu",
                "Functional",
                "Sống động, tự phê, đổi mới → performance CAO.",
              ],
            },
            {
              label: "C",
              cells: [
                "Cao",
                "Dysfunctional",
                "Hỗn loạn, thiếu hợp tác, phá vỡ → performance THẤP.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Thông điệp U ngược",
          "Mục tiêu KHÔNG phải triệt tiêu conflict mà giữ ở mức tối ưu (điểm B) — vừa đủ để chống trì trệ, chưa tới mức phá hoại.",
        ),
      ],
      keyTerms: [
        { term: "Functional conflict", definition: "Conflict hỗ trợ mục tiêu nhóm và cải thiện performance." },
        { term: "Dysfunctional conflict", definition: "Conflict cản trở performance của nhóm/đơn vị." },
      ],
    },
    {
      id: "s4",
      heading: "Conflict Process tổng quan + Stage I",
      blocks: [
        calloutBlock(
          "key",
          "Conflict process 5 giai đoạn (Exhibit 14-2, R&J p259)",
          "(I) potential opposition or incompatibility → (II) cognition & personalization → (III) intentions → (IV) behavior → (V) outcomes.",
        ),
        flowBlock(
          "s4",
          "Conflict Process — 5 stages (Exhibit 14-2)",
          "horizontal",
          [
            {
              id: "s_i",
              label: "I. Potential opposition",
              group: "concept",
              detail: "Nguồn tiềm tàng: communication, structure, personal variables.",
            },
            {
              id: "s_ii",
              label: "II. Cognition & personalization",
              group: "concept",
              detail: "Các bên nhận ra và cảm thấy conflict; framing bắt đầu định hình giải pháp.",
            },
            {
              id: "s_iii",
              label: "III. Intentions",
              group: "concept",
              detail: "Chọn conflict-handling style theo assertiveness × cooperativeness.",
            },
            {
              id: "s_iv",
              label: "IV. Behavior",
              group: "concept",
              detail: "Hành vi hiện ra bên ngoài và có thể leo thang.",
            },
            {
              id: "s_v",
              label: "V. Outcomes",
              group: "concept",
              detail: "Kết quả functional hoặc dysfunctional.",
            },
          ],
          [
            { from: "s_i", to: "s_ii", label: "nhận thức" },
            { from: "s_ii", to: "s_iii", label: "chọn cách" },
            { from: "s_iii", to: "s_iv", label: "hành vi" },
            { from: "s_iv", to: "s_v", label: "kết quả" },
          ],
          "Conflict diễn ra tuần tự qua 5 giai đoạn; nhà quản lý can thiệp mạnh nhất ở Stage III (chọn intention).",
        ),
        comparisonBlock(
          "Stage I — 3 nguồn tạo potential opposition (R&J p260)",
          ["Nguồn", "Nội dung"],
          [
            {
              label: "Communication",
              cells: ["Hiểu lầm, quá ít/quá nhiều thông tin, nhiễu ngữ nghĩa (semantic difficulties)."],
            },
            {
              label: "Structure",
              cells: ["Quy mô nhóm, chuyên môn hóa, mơ hồ trách nhiệm, tranh giành nguồn lực, phong cách lãnh đạo, hệ thống thưởng."],
            },
            {
              label: "Personal variables",
              cells: ["Khác biệt tính cách, cảm xúc, giá trị giữa các cá nhân."],
            },
          ],
        ),
      ],
      keyTerms: [
        { term: "Conflict process", definition: "Chuỗi 5 stage: potential opposition → cognition/personalization → intentions → behavior → outcomes." },
      ],
    },
    {
      id: "s5",
      heading: "Stage II: Cognition & Personalization",
      blocks: [
        comparisonBlock(
          "Perceived vs Felt conflict (R&J p261)",
          ["Khái niệm", "Nội dung"],
          [
            {
              label: "Perceived conflict",
              cells: ["NHẬN THỨC của một/nhiều bên rằng có điều kiện tạo cơ hội cho conflict — mới ở mức 'biết có'."],
            },
            {
              label: "Felt conflict",
              cells: ["CẢM XÚC liên đới: lo lắng, căng thẳng, bực bội, thù địch — khi conflict đã được cá nhân hóa."],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Framing & emotions quyết định",
          "Ở Stage II các bên định nghĩa conflict 'về cái gì' → khoanh vùng giải pháp khả dĩ. Framing zero-sum (lương là chiếc bánh cố định) làm giảm hợp tác; framing win-win mở ra giải pháp. Cảm xúc tiêu cực → đơn giản hóa vấn đề, mất tin tưởng; cảm xúc tích cực → nhìn rộng, sáng tạo.",
        ),
      ],
      keyTerms: [
        { term: "Perceived conflict", definition: "Nhận thức rằng điều kiện conflict đang tồn tại." },
        { term: "Felt conflict", definition: "Cảm xúc căng thẳng/bực bội/thù địch khi conflict được cá nhân hóa." },
      ],
    },
    {
      id: "s6",
      heading: "Stage III: Intentions — 5 conflict-handling styles",
      blocks: [
        calloutBlock(
          "key",
          "Intentions (R&J p261)",
          "Intentions là quyết định hành động theo một cách nhất định; nằm giữa perception/emotion và behavior. Xác định qua 2 trục: assertiveness (mức thỏa mãn lợi ích của MÌNH) × cooperativeness (mức thỏa mãn lợi ích của NGƯỜI KHÁC).",
        ),
        comparisonBlock(
          "5 conflict-handling intentions (Exhibit 14-3, R&J p261-262)",
          ["Style", "Vị trí (assertive × cooperative)", "Bản chất"],
          [
            {
              label: "Competing",
              cells: [
                "Assertive + Uncooperative",
                "Thỏa mãn lợi ích của mình bất kể tác động lên người khác; hay dùng khi nguồn lực khan hiếm.",
              ],
            },
            {
              label: "Collaborating",
              cells: [
                "Assertive + Cooperative",
                "Muốn thỏa mãn ĐẦY ĐỦ lợi ích mọi bên; làm rõ khác biệt để tìm win-win.",
              ],
            },
            {
              label: "Avoiding",
              cells: [
                "Unassertive + Uncooperative",
                "Rút lui/né tránh hoặc kìm nén conflict; lờ đi, tránh mặt.",
              ],
            },
            {
              label: "Accommodating",
              cells: [
                "Unassertive + Cooperative",
                "Đặt lợi ích người khác trên lợi ích mình để xoa dịu, giữ quan hệ.",
              ],
            },
            {
              label: "Compromising",
              cells: [
                "Mid-range cả hai",
                "Không ai thắng/thua hoàn toàn; mỗi bên nhường một phần.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Bằng chứng (R&J p262)",
          "Openness + collaborating gắn với performance nhóm CAO; avoiding + competing gắn với performance THẤP — không chỉ loại/độ conflict mà CÁCH phản ứng quyết định.",
        ),
      ],
      keyTerms: [
        { term: "Intentions", definition: "Quyết định hành động theo một cách nhất định trong conflict." },
        { term: "Competing", definition: "Assertive + uncooperative; theo đuổi lợi ích mình." },
        { term: "Collaborating", definition: "Assertive + cooperative; tìm giải pháp win-win." },
        { term: "Avoiding", definition: "Unassertive + uncooperative; né hoặc rút khỏi conflict." },
        { term: "Accommodating", definition: "Unassertive + cooperative; nhường để giữ quan hệ/lợi ích bên kia." },
        { term: "Compromising", definition: "Mỗi bên nhường một phần; không ai thắng/thua hoàn toàn." },
      ],
    },
    {
      id: "s7",
      heading: "Stage IV Behavior + Stage V Outcomes + Managing conflict",
      blocks: [
        calloutBlock(
          "key",
          "Stage IV Behavior (R&J p262-263)",
          "Conflict là quá trình tương tác động (demand → phản ứng → leo thang). Exhibit 14-3 dynamic escalation: differing perceptions → verbal disputes/negative moods/protective behaviors → overt attacks. Conflict-intensity continuum: từ no conflict → minor disagreements → overt questioning → ... → annihilation; đỉnh cao gần như luôn dysfunctional.",
        ),
        comparisonBlock(
          "Stage V Outcomes — Functional vs Dysfunctional (R&J p263-264)",
          ["Loại kết quả", "Nội dung"],
          [
            {
              label: "Functional outcomes",
              cells: ["Cải thiện chất lượng quyết định, kích thích sáng tạo, khơi tò mò, xả căng thẳng, tự đánh giá & đổi mới; là ANTIDOTE cho groupthink."],
            },
            {
              label: "Dysfunctional outcomes",
              cells: ["Giảm giao tiếp, giảm cohesiveness, giảm satisfaction & trust; cực đoan → tê liệt, đe dọa sự tồn tại của nhóm."],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Managing conflict + cultural influences (R&J p264-265)",
          "(1) nhận ra khi nào thực sự bất đồng (nhiều 'conflict' chỉ do khác từ ngữ — semantic); (2) thảo luận cởi mở tập trung interests không positions; (3) nhấn shared interests. Cultural: văn hóa collectivist thích collaboration/né đối đầu, individualist đối đầu trực tiếp.",
        ),
      ],
      keyTerms: [
        { term: "Conflict management", definition: "Nhận diện, định khung và can thiệp để conflict tạo functional thay vì dysfunctional outcomes." },
      ],
    },
    {
      id: "s8",
      heading: "Negotiation: Distributive vs Integrative bargaining",
      blocks: [
        calloutBlock(
          "key",
          "Negotiation (R&J p265)",
          "Negotiation = a process in which two or more parties exchange goods or services and attempt to agree on the exchange rate for them. Nói ngắn: bargaining để phân bổ nguồn lực khan hiếm.",
        ),
        comparisonBlock(
          "Distributive vs Integrative bargaining (Exhibit 14-4, R&J p266)",
          ["Đặc điểm", "Distributive", "Integrative"],
          [
            {
              label: "Goal",
              cells: [
                "Giành càng nhiều phần bánh càng tốt.",
                "Mở rộng chiếc bánh để cả hai cùng thỏa mãn.",
              ],
            },
            {
              label: "Motivation",
              cells: ["Win-lose.", "Win-win."],
            },
            {
              label: "Focus",
              cells: [
                "Positions: 'Tôi không thể vượt quá điểm này'.",
                "Interests: 'Vì sao vấn đề này quan trọng với bạn?'.",
              ],
            },
            {
              label: "Interests",
              cells: ["Đối lập nhau.", "Tương thích (congruent)."],
            },
            {
              label: "Information sharing",
              cells: [
                "Thấp; chia sẻ nhiều dễ giúp đối phương lợi dụng.",
                "Cao; giúp tìm cách thỏa mãn lợi ích hai bên.",
              ],
            },
            {
              label: "Duration of relationship",
              cells: ["Ngắn hạn.", "Dài hạn."],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Fixed pie & ví dụ quả cam",
          "Distributive giả định fixed pie (zero-sum) với target point & resistance point; vùng chồng lấn = settlement zone. Ví dụ hai chị em tranh quả cam: nếu chỉ chia đôi (distributive) thì bỏ lỡ win-win — một người cần nước ép, người kia cần vỏ để làm bánh (integrative). **First offer (sách, mục Distributive Bargaining):** trong distributive bargaining nên RA GIÁ TRƯỚC và ra giá aggressive — first offer thể hiện power và tận dụng anchoring bias (đã học ở Topic 02): người ta neo vào thông tin đầu và điều chỉnh không đủ; rất nhiều nghiên cứu đàm phán cho thấy anchor ưu ái mạnh người đặt nó. **Settlement range (Exhibit 14-5):** mỗi bên có target point (muốn đạt) và resistance point (mức tối thiểu chấp nhận trước khi bỏ đàm phán); khoảng giữa 2 điểm là aspiration range của mỗi bên — chừng nào 2 aspiration ranges còn CHỒNG LẤN thì tồn tại settlement range nơi kỳ vọng cả hai bên đều thỏa được.",
        ),
      ],
      keyTerms: [
        { term: "Negotiation", definition: "Process hai hoặc nhiều bên trao đổi và cố đạt thỏa thuận về tỉ lệ trao đổi/phân bổ nguồn lực." },
        { term: "Distributive bargaining", definition: "Bargaining win-lose trên giả định fixed pie." },
        { term: "Integrative bargaining", definition: "Bargaining win-win bằng cách mở rộng pie và tập trung interests." },
        { term: "Fixed pie", definition: "Giả định nguồn lực cố định, phần người này tăng thì phần người kia giảm." },
        { term: "settlement range", definition: "Vùng chồng lấn giữa aspiration ranges của hai bên đàm phán, nơi tồn tại thỏa thuận khả thi (Exhibit 14-5)." },
      ],
    },
    {
      id: "s9",
      heading: "Negotiation process 5 bước + individual differences + social context",
      blocks: [
        flowBlock(
          "s9",
          "Negotiation Process — 5 steps (Exhibit 14-6)",
          "horizontal",
          [
            {
              id: "n1",
              label: "Preparation & planning",
              group: "concept",
              detail: "Xác định mục tiêu, interests, BATNA và thông tin về bên kia.",
            },
            {
              id: "n2",
              label: "Ground rules",
              group: "concept",
              detail: "Thống nhất ai tham gia, ở đâu, giới hạn, quy trình và thời gian.",
            },
            {
              id: "n3",
              label: "Clarification & justification",
              group: "concept",
              detail: "Trình bày, giải thích, làm rõ lập trường và lợi ích.",
            },
            {
              id: "n4",
              label: "Bargaining & problem solving",
              group: "concept",
              detail: "Trao đổi nhượng bộ, tìm option và xử lý khác biệt.",
            },
            {
              id: "n5",
              label: "Closure & implementation",
              group: "concept",
              detail: "Chốt thỏa thuận, viết cam kết và triển khai.",
            },
          ],
          [
            { from: "n1", to: "n2", label: "luật chơi" },
            { from: "n2", to: "n3", label: "làm rõ" },
            { from: "n3", to: "n4", label: "mặc cả" },
            { from: "n4", to: "n5", label: "chốt" },
          ],
          "5 bước đàm phán; chuẩn bị (gồm xác định BATNA) là bước quan trọng nhất.",
        ),
        calloutBlock(
          "key",
          "BATNA (R&J p268)",
          "Best Alternative To a Negotiated Agreement — giá trị thấp nhất chấp nhận được cho một thỏa thuận; offer nào cao hơn BATNA đều tốt hơn bế tắc. Xác định & củng cố BATNA TRƯỚC khi vào đàm phán.",
        ),
        comparisonBlock(
          "Yếu tố ảnh hưởng hiệu quả đàm phán (R&J p269-272)",
          ["Nhóm yếu tố", "Nội dung"],
          [
            {
              label: "Individual differences",
              cells: ["Personality (Big Five — ví dụ tính dễ chịu thấp có thể lợi cho distributive), mood/emotions (giận dữ vs tích cực), culture, gender (khác biệt rõ khi điều khoản mơ hồ)."],
            },
            {
              label: "Reputation",
              cells: ["Cách người khác nghĩ/nói về bạn; danh tiếng đáng tin (competence + integrity) mở ra chiến lược integrative."],
            },
            {
              label: "Relationships",
              cells: ["Đàm phán lặp lại xây trust → nghĩ cho cả đối tác & quan hệ → dễ integrative và mở rộng lựa chọn."],
            },
          ],
        ),
        comparisonBlock(
          "Individual differences trong negotiation (sách, mục Individual Differences)",
          ["Yếu tố", "Ảnh hưởng"],
          [
            {
              label: "Personality",
              cells: [
                "Quan hệ với outcome YẾU: agreeableness cao không hề 'dễ bị ăn thịt' như tưởng; self-efficacy là biến cá nhân dự đoán ổn định nhất (tự tin → giữ claim mạnh, ít lùi khỏi position, tự tin có thể áp đảo đối phương).",
              ],
            },
            {
              label: "Moods/emotions",
              cells: [
                "Anger chỉ có lợi khi mình có power NGANG TRỞ LÊN đối phương (ít power hơn mà giận → đối phương chơi rắn \"hardball\"); anger GIẢ (surface acting) vô dụng, anger THẬT (deep acting) mới ép được nhượng bộ; lịch sử hay giận → bị coi là \"tough\" → được nhượng bộ nhiều hơn. Disappointment làm đối phương nhượng bộ thêm. Anxiety → dùng deception nhiều hơn, phản hồi/thoát đàm phán quá nhanh → outcome kém. Thể hiện cảm xúc KHÓ ĐOÁN (dương↔âm thất thường) moi được nhiều nhượng bộ vì đối phương mất cảm giác kiểm soát.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        { term: "BATNA", definition: "Best Alternative To a Negotiated Agreement; phương án thay thế tốt nhất nếu không đạt thỏa thuận." },
      ],
    },
    {
      id: "s10",
      heading: "Third-party negotiations",
      blocks: [
        comparisonBlock(
          "3 third-party roles (R&J p272-273)",
          ["Vai trò", "Quyền hạn", "Đặc điểm"],
          [
            {
              label: "Mediator",
              cells: [
                "Không có quyền áp đặt",
                "Bên thứ ba TRUNG LẬP, dùng lý lẽ/thuyết phục/gợi ý phương án; hiệu quả khi conflict mức vừa & được xem là trung lập.",
              ],
            },
            {
              label: "Arbitrator",
              cells: [
                "CÓ quyền áp đặt thỏa thuận",
                "Có thể tự nguyện hoặc bắt buộc; luôn dẫn tới một dàn xếp; nếu 'nặng tay' khiến một bên thấy bị đè bẹp → conflict tái phát.",
              ],
            },
            {
              label: "Conciliator",
              cells: [
                "Không áp đặt",
                "Bên thứ ba đáng tin tạo KÊNH liên lạc phi chính thức giữa hai bên; thường kèm fact-finding, diễn giải thông điệp, thuyết phục.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Chọn third party",
          "Mediator giữ quyền quyết định ở hai bên; arbitrator đảm bảo có kết quả nhưng đánh đổi sự hài lòng; conciliator hữu ích khi hai bên còn khó ngồi lại trực tiếp.",
        ),
      ],
      keyTerms: [
        { term: "Mediator", definition: "Third party trung lập, hỗ trợ thuyết phục/gợi ý nhưng không áp đặt." },
        { term: "Arbitrator", definition: "Third party có quyền áp đặt settlement." },
        { term: "Conciliator", definition: "Third party đáng tin tạo kênh liên lạc phi chính thức giữa các bên." },
      ],
    },
    {
      id: "s11",
      heading: "Từ Conflict sang Collaboration (khung thực hành — slide)",
      blocks: [
        calloutBlock(
          "key",
          "Hai mặt đồng xu (slide)",
          "Conflict & collaboration là hai mặt của cùng một đồng xu — mục tiêu quản trị là chuyển năng lượng conflict thành collaboration mang lại values & creativity cho nhóm.",
        ),
        comparisonBlock(
          "SCARF model (David Rock, 2008 — slide 22)",
          ["Yếu tố", "Nội dung (Away threat ↔ Toward reward)"],
          [
            {
              label: "Status",
              cells: ["Vị thế tương đối; bị hạ thấp → phòng thủ."],
            },
            {
              label: "Certainty",
              cells: ["Khả năng dự đoán; mơ hồ → đe dọa."],
            },
            {
              label: "Autonomy",
              cells: ["Quyền tự chủ; bị kiểm soát → phản kháng."],
            },
            {
              label: "Relatedness",
              cells: ["Cảm giác thuộc về/an toàn với người khác."],
            },
            {
              label: "Fairness",
              cells: ["Cảm nhận công bằng; bất công → kích conflict."],
            },
          ],
        ),
        comparisonBlock(
          "4 Triggers of team conflict + remedies (HBR, Laker & Pereira 2022 — slide 21)",
          ["Trigger", "Remedy"],
          [
            {
              label: "Communication differences",
              cells: ["Thiết lập kênh giao tiếp rõ ràng."],
            },
            {
              label: "Opaque performance standards",
              cells: ["Minh bạch kỳ vọng về hiệu suất."],
            },
            {
              label: "Unreasonable time constraints",
              cells: ["Quản lý kỳ vọng về thời gian."],
            },
            {
              label: "Unclear expectations",
              cells: ["Làm rõ kỳ vọng về task & vai trò."],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Công cụ & cạm bẫy collaboration (slide 38-41)",
          "Johari Window để tăng empathy ('seek first to understand' — Covey); promote healthy conflict (an toàn tâm lý, đa dạng góc nhìn, devil's advocate). CẠM BẪY: collaboration overload (quá nhiều họp/kênh → kiệt sức) và 'New Groupthink' (hợp tác quá đà bóp nghẹt sáng tạo cá nhân) — hợp tác cần liều lượng, giống conflict.",
        ),
        calloutBlock(
          "key",
          "So what — kiến thức này đổi hành động của bạn",
          "Câu hỏi đúng không phải \"có conflict không\" mà \"loại gì, mức nào\". Hành động: gặp xung đột, phân loại task/relationship/process trước rồi mới chọn 1 trong 5 handling intentions một cách CÓ Ý THỨC (đừng auto-avoid); vào đàm phán, xác định BATNA và thử integrative trước khi chia bánh distributive; và đừng tự hào vì nhóm \"êm\" — quá êm có thể là thiếu functional conflict.",
        ),
      ],
      keyTerms: [
        { term: "SCARF model", definition: "Khung Status, Certainty, Autonomy, Relatedness, Fairness để đọc threat/reward xã hội." },
        { term: "Johari Window", definition: "Công cụ tăng self-awareness và empathy qua vùng known/unknown giữa self và others." },
        { term: "Collaboration overload", definition: "Tình trạng hợp tác quá nhiều làm giảm năng lượng, tập trung và hiệu quả." },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "Which statement best matches Robbins and Judge's definition of conflict?",
      options: [
        { id: "a", text: "A process that begins when one party perceives that another party has negatively affected, or is about to negatively affect, something the first party cares about", isCorrect: true, rationale: "Cơ chế: định nghĩa R&J nhấn process + perceives + negatively affect + cares about. Bẫy: conflict không cần đã có thiệt hại khách quan; perception đủ để process bắt đầu. Khóa: tìm đủ bốn dấu hiệu process/perception/negative effect/care." },
        { id: "b", text: "Any difference of opinion between two people, even when neither side notices it", isCorrect: false, rationale: "Cơ chế: khác ý chưa thành conflict nếu không bên nào perceives nó. Bẫy: thấy 'difference' rồi chọn vội. Khóa: conflict trong OB cần perception." },
        { id: "c", text: "Only open aggression that has already harmed group performance", isCorrect: false, rationale: "Cơ chế: aggression là biểu hiện ở Stage IV, không phải toàn bộ định nghĩa. Bẫy: conflict thường dễ thấy nhất khi bùng nổ. Khóa: conflict bắt đầu sớm hơn behavior công khai." },
        { id: "d", text: "A personality problem caused by difficult people", isCorrect: false, rationale: "Cơ chế: personal variables chỉ là một nguồn Stage I; conflict còn do communication và structure. Bẫy: quy hết về tính cách. Khóa: conflict là process nhiều nguồn." },
        { id: "e", text: "A formal negotiation over scarce resources", isCorrect: false, rationale: "Cơ chế: negotiation là công cụ giải quyết conflict/resource allocation, không phải định nghĩa conflict. Bẫy: nhiều conflict dẫn tới bargaining. Khóa: conflict rộng hơn negotiation." },
      ],
      difficulty: "basic",
      conceptTested: "Definition of conflict",
      takeaway: "Conflict trong R&J bắt đầu từ perception về tác động tiêu cực lên điều một bên quan tâm, không đợi đến lúc bùng nổ công khai.",
    },
    {
      id: "q02",
      stem: "Which view argues that some minimum level of conflict should be encouraged so a group does not become static or apathetic?",
      options: [
        { id: "a", text: "Interactionist view of conflict", isCorrect: true, rationale: "Cơ chế: interactionist view chủ động khuyến khích mức conflict vừa đủ để nhóm tự phê, đổi mới và tránh trì trệ. Bẫy: human relations cũng thừa nhận conflict tự nhiên nhưng không nhấn 'encourage'. Khóa: encourage minimum conflict = interactionist." },
        { id: "b", text: "Traditional view of conflict", isCorrect: false, rationale: "Cơ chế: traditional view xem conflict là có hại và cần tránh. Bẫy: nghe 'minimum' tưởng càng ít càng tốt. Khóa: traditional dập conflict, không khuyến khích." },
        { id: "c", text: "Human relations view of conflict", isCorrect: false, rationale: "Cơ chế: human relations view chấp nhận conflict là tự nhiên/không thể tránh. Bẫy: acceptance khác với encouragement. Khóa: khuyến khích mức tối thiểu thuộc interactionist." },
        { id: "d", text: "Distributive bargaining view", isCorrect: false, rationale: "Cơ chế: distributive bargaining là kiểu đàm phán win-lose, không phải view về conflict thought. Bẫy: có chữ bargaining/conflict. Khóa: câu hỏi về transitions in conflict thought." },
        { id: "e", text: "Social exchange view", isCorrect: false, rationale: "Cơ chế: social exchange thuộc động lực quan hệ/nhóm, không phải 3 views conflict. Bẫy: nghe như lý thuyết xã hội. Khóa: chỉ traditional, human relations, interactionist là ba views ở đây." },
      ],
      difficulty: "basic",
      conceptTested: "Three views of conflict",
      takeaway: "Interactionist view không cổ vũ hỗn loạn; nó cổ vũ mức conflict vừa đủ để nhóm không tự mãn và kém đổi mới.",
    },
    {
      id: "q03",
      stem: "A team argues about who should complete which part of a project, and the argument quickly becomes personal. Which conflict type is the starting point?",
      options: [
        { id: "a", text: "Process conflict", isCorrect: true, rationale: "Cơ chế: process conflict là bất đồng về delegation, roles, cách làm việc. Bẫy: vì stem nói 'becomes personal' nên dễ chọn relationship conflict. Khóa: hỏi starting point; ai làm phần nào = process." },
        { id: "b", text: "Relationship conflict", isCorrect: false, rationale: "Cơ chế: relationship conflict là cảm xúc/cá nhân hóa giữa người với người. Bẫy: conflict đã chuyển màu cá nhân. Khóa: nguồn ban đầu là phân công công việc." },
        { id: "c", text: "Task conflict", isCorrect: false, rationale: "Cơ chế: task conflict là bất đồng về nội dung/mục tiêu công việc. Bẫy: dự án là task nên tưởng task conflict. Khóa: ai làm gì/cách phân công = process." },
        { id: "d", text: "Intergroup conflict", isCorrect: false, rationale: "Cơ chế: intergroup conflict là locus giữa nhóm với nhóm, không phải type. Bẫy: một team có thể gồm nhiều subgroup. Khóa: câu hỏi hỏi conflict type." },
        { id: "e", text: "Functional conflict", isCorrect: false, rationale: "Cơ chế: functional/dysfunctional là tác động lên performance, không phải type task/relationship/process. Bẫy: conflict về project có thể functional nếu vừa phải. Khóa: phân công roles là process conflict." },
      ],
      difficulty: "intermediate",
      conceptTested: "Types of conflict",
      takeaway: "Process conflict bắt đầu từ cách làm/ai làm gì, nhưng rất dễ trượt thành relationship conflict nếu bị cá nhân hóa.",
    },
    {
      id: "q04",
      stem: "Conflict between two departments competing for budget is best classified as which locus of conflict?",
      options: [
        { id: "a", text: "Intergroup conflict", isCorrect: true, rationale: "Cơ chế: intergroup conflict xảy ra giữa các nhóm/đội/phòng ban. Bẫy: cạnh tranh budget có thể là process/resource issue, nhưng câu hỏi hỏi locus. Khóa: two departments = between groups." },
        { id: "b", text: "Dyadic conflict", isCorrect: false, rationale: "Cơ chế: dyadic là giữa hai cá nhân. Bẫy: 'two' departments nghe giống dyad. Khóa: đơn vị là departments, không phải persons." },
        { id: "c", text: "Intragroup conflict", isCorrect: false, rationale: "Cơ chế: intragroup là bên trong một nhóm. Bẫy: mỗi department nội bộ cũng có thể xung đột. Khóa: stem nói between departments." },
        { id: "d", text: "Relationship conflict", isCorrect: false, rationale: "Cơ chế: relationship là type cảm xúc/cá nhân hóa, không phải locus. Bẫy: phòng ban có thể ghét nhau. Khóa: locus hỏi nơi xảy ra." },
        { id: "e", text: "Felt conflict", isCorrect: false, rationale: "Cơ chế: felt conflict thuộc Stage II cảm xúc, không phải locus. Bẫy: budget conflict có thể gây bực bội. Khóa: between groups = intergroup." },
      ],
      difficulty: "basic",
      conceptTested: "Loci of conflict",
      takeaway: "Locus trả lời conflict xảy ra ở đâu: dyadic giữa hai người, intragroup trong nhóm, intergroup giữa các nhóm.",
    },
    {
      id: "q05",
      stem: "In the inverted-U model of conflict and performance, which point is associated with the highest unit performance?",
      options: [
        { id: "a", text: "Point B: an optimal level of functional conflict", isCorrect: true, rationale: "Cơ chế: điểm B là mức conflict tối ưu, đủ kích thích tự phê và đổi mới nhưng chưa phá hoại. Bẫy: nghĩ conflict càng ít càng tốt nên chọn A. Khóa: inverted-U = quá ít và quá nhiều đều thấp, vừa đủ mới cao." },
        { id: "b", text: "Point A: no conflict and complete calm", isCorrect: false, rationale: "Cơ chế: quá ít conflict gây thờ ơ, trì trệ, thiếu đổi mới. Bẫy: calm nghe tích cực. Khóa: A vẫn dysfunctional vì quá thấp." },
        { id: "c", text: "Point C: maximum conflict and intense competition", isCorrect: false, rationale: "Cơ chế: quá nhiều conflict gây hỗn loạn, thiếu hợp tác, performance thấp. Bẫy: competition có thể kích thích effort. Khóa: C là dysfunctional." },
        { id: "d", text: "Any point with relationship conflict", isCorrect: false, rationale: "Cơ chế: relationship conflict hầu như luôn dysfunctional, không phải nguồn performance cao. Bẫy: cảm xúc mạnh có vẻ tạo năng lượng. Khóa: B thường là task conflict vừa phải, không relationship conflict." },
        { id: "e", text: "The model says conflict and performance are unrelated", isCorrect: false, rationale: "Cơ chế: inverted-U mô tả quan hệ phi tuyến giữa conflict và performance. Bẫy: vì không phải tuyến tính nên tưởng không liên quan. Khóa: có quan hệ, nhưng dạng U ngược." },
      ],
      difficulty: "basic",
      conceptTested: "Inverted-U conflict-performance model",
      takeaway: "Đường cong U ngược cho thấy mục tiêu không phải xóa sạch conflict mà giữ ở mức tối ưu — quá ít cũng tệ như quá nhiều.",
    },
    {
      id: "q06",
      stem: "Which outcome best illustrates functional conflict?",
      options: [
        { id: "a", text: "A disagreement improves decision quality by surfacing hidden assumptions and new alternatives", isCorrect: true, rationale: "Cơ chế: functional conflict hỗ trợ mục tiêu nhóm, cải thiện decision quality và creativity. Bẫy: disagreement nghe tiêu cực. Khóa: cải thiện performance = functional." },
        { id: "b", text: "Team members stop sharing information and trust declines", isCorrect: false, rationale: "Cơ chế: giảm communication/trust là dysfunctional outcome. Bẫy: vẫn là kết quả của conflict. Khóa: functional phải hỗ trợ mục tiêu nhóm." },
        { id: "c", text: "The group becomes paralyzed and cannot act", isCorrect: false, rationale: "Cơ chế: tê liệt là dysfunctional, nhất là conflict quá cao. Bẫy: paralysis có thể đến sau tranh luận dài. Khóa: cản performance = dysfunctional." },
        { id: "d", text: "People avoid each other to preserve surface harmony", isCorrect: false, rationale: "Cơ chế: avoiding có thể che conflict nhưng không tự tạo functional outcome. Bẫy: hòa khí bề mặt nghe tốt. Khóa: né tránh thường làm vấn đề không được xử lý." },
        { id: "e", text: "A manager punishes every disagreement immediately", isCorrect: false, rationale: "Cơ chế: dập mọi disagreement gần với traditional view và có thể làm nhóm trì trệ. Bẫy: manager kiểm soát conflict nghe an toàn. Khóa: functional conflict cần được khai thác, không bị triệt tiêu." },
      ],
      difficulty: "intermediate",
      conceptTested: "Functional versus dysfunctional conflict",
      takeaway: "Functional conflict được nhận ra qua tác động: nó giúp nhóm học, quyết định tốt hơn và đổi mới, chứ không chỉ vì nó 'êm'.",
    },
    {
      id: "q07",
      stem: "What is the correct order of the five stages in the conflict process?",
      options: [
        { id: "a", text: "Potential opposition or incompatibility → cognition and personalization → intentions → behavior → outcomes", isCorrect: true, rationale: "Cơ chế: Exhibit 14-2 đi từ điều kiện tiềm tàng, nhận thức/cảm xúc, intention, hành vi, rồi kết quả. Bẫy: đảo intentions và behavior vì ta thường thấy hành vi trước. Khóa: intention nằm giữa perception/emotion và behavior." },
        { id: "b", text: "Behavior → intentions → cognition and personalization → outcomes → potential opposition", isCorrect: false, rationale: "Cơ chế: hành vi không phải stage đầu; nó xuất hiện sau intention. Bẫy: người ngoài thường chỉ thấy behavior. Khóa: Stage I là potential opposition." },
        { id: "c", text: "Cognition and personalization → potential opposition → behavior → intentions → outcomes", isCorrect: false, rationale: "Cơ chế: điều kiện tiềm tàng đến trước nhận thức/cảm xúc. Bẫy: người trong cuộc nhận ra cognition trước khi truy nguồn. Khóa: model process bắt đầu từ Stage I." },
        { id: "d", text: "Intentions → potential opposition → outcomes → behavior → cognition", isCorrect: false, rationale: "Cơ chế: intentions không tự sinh nếu chưa có perceived/felt conflict. Bẫy: focus vào decision style. Khóa: Stage III chỉ đến sau Stage II." },
        { id: "e", text: "Outcomes → behavior → intentions → cognition → potential opposition", isCorrect: false, rationale: "Cơ chế: đây là thứ tự ngược của logic process. Bẫy: after-action review đi từ outcome ngược về cause. Khóa: câu hỏi hỏi process forward." },
      ],
      difficulty: "basic",
      conceptTested: "Conflict process stages",
      takeaway: "Conflict process: potential opposition → cognition/personalization → intentions → behavior → outcomes.",
    },
    {
      id: "q08",
      stem: "Which set lists the three main sources of potential opposition in Stage I?",
      options: [
        { id: "a", text: "Communication, structure, and personal variables", isCorrect: true, rationale: "Cơ chế: Stage I của R&J gom nguồn conflict vào communication, structure, personal variables. Bẫy: dễ liệt kê symptoms ở stage sau. Khóa: ba nguồn Stage I = C-S-P." },
        { id: "b", text: "Perceived conflict, felt conflict, and intentions", isCorrect: false, rationale: "Cơ chế: perceived/felt thuộc Stage II, intentions thuộc Stage III. Bẫy: đều nằm trong process conflict. Khóa: câu hỏi hỏi Stage I sources." },
        { id: "c", text: "Mediator, arbitrator, and conciliator", isCorrect: false, rationale: "Cơ chế: đây là third-party roles trong negotiation. Bẫy: họ có thể can thiệp conflict. Khóa: không phải nguồn potential opposition." },
        { id: "d", text: "BATNA, target point, and resistance point", isCorrect: false, rationale: "Cơ chế: đây là khái niệm bargaining/negotiation, nhất là distributive bargaining. Bẫy: nguồn lực khan hiếm có thể gây conflict. Khóa: Stage I sources rộng hơn." },
        { id: "e", text: "Status, autonomy, and fairness only", isCorrect: false, rationale: "Cơ chế: đây là một phần SCARF slide, dùng đọc threat/reward xã hội. Bẫy: các yếu tố này có thể kích conflict. Khóa: R&J Stage I là communication/structure/personal variables." },
      ],
      difficulty: "basic",
      conceptTested: "Stage I sources",
      takeaway: "Stage I tìm nguồn gốc tiềm tàng: communication, structure, personal variables.",
    },
    {
      id: "q09",
      stem: "A manager realizes two teams have incompatible goals but does not feel worried or angry yet. Which stage-II concept is this?",
      options: [
        { id: "a", text: "Perceived conflict", isCorrect: true, rationale: "Cơ chế: perceived conflict là nhận thức rằng điều kiện conflict tồn tại, chưa nhất thiết có cảm xúc. Bẫy: thấy 'conflict' rồi chọn felt. Khóa: realize/notice nhưng no emotion = perceived." },
        { id: "b", text: "Felt conflict", isCorrect: false, rationale: "Cơ chế: felt conflict có lo lắng, căng thẳng, bực bội, thù địch. Bẫy: incompatibility có thể tạo cảm xúc sau đó. Khóa: stem nói chưa worried/angry." },
        { id: "c", text: "Competing", isCorrect: false, rationale: "Cơ chế: competing là intention ở Stage III. Bẫy: incompatible goals có thể dẫn tới competing. Khóa: chưa chọn hành động." },
        { id: "d", text: "Functional outcome", isCorrect: false, rationale: "Cơ chế: outcome thuộc Stage V, chưa đến kết quả. Bẫy: nhận ra sớm có thể giúp functional. Khóa: câu hỏi hỏi Stage II." },
        { id: "e", text: "BATNA", isCorrect: false, rationale: "Cơ chế: BATNA thuộc negotiation, không phải cognition/personalization. Bẫy: teams có thể phải đàm phán. Khóa: đây là perceived conflict." },
      ],
      difficulty: "basic",
      conceptTested: "Perceived versus felt conflict",
      takeaway: "Perceived conflict = biết có vấn đề; felt conflict = conflict đã gắn cảm xúc và bị cá nhân hóa.",
    },
    {
      id: "q10",
      stem: "A negotiator frames salary as a fixed pie: every dollar the employee gains is a dollar the company loses. What is the likely effect?",
      options: [
        { id: "a", text: "It reduces cooperation by pushing the parties toward zero-sum thinking", isCorrect: true, rationale: "Cơ chế: zero-sum framing thu hẹp vùng giải pháp và làm các bên phòng thủ. Bẫy: fixed pie đôi khi đúng trong distributive bargaining, nhưng framing này giảm khả năng integrative. Khóa: fixed pie = less cooperation." },
        { id: "b", text: "It automatically creates integrative bargaining", isCorrect: false, rationale: "Cơ chế: integrative bargaining cần focus interests và expand pie, không phải đóng khung zero-sum. Bẫy: đang nói negotiation nên nhầm sang integrative. Khóa: fixed pie đối nghịch expand pie." },
        { id: "c", text: "It eliminates perceived conflict", isCorrect: false, rationale: "Cơ chế: framing fixed pie thường làm conflict rõ hơn, không xóa perception. Bẫy: rõ luật chơi có vẻ giảm mơ hồ. Khóa: zero-sum làm tăng đối lập interests." },
        { id: "d", text: "It guarantees positive emotions and trust", isCorrect: false, rationale: "Cơ chế: zero-sum thường gây phòng thủ, mất trust. Bẫy: clarity nghe có lợi cho trust. Khóa: win-lose framing không tạo trust." },
        { id: "e", text: "It turns relationship conflict into dyadic conflict", isCorrect: false, rationale: "Cơ chế: relationship là type, dyadic là locus; không phải chuyển đổi cùng trục. Bẫy: salary negotiation thường là hai người. Khóa: effect chính là zero-sum cooperation giảm." },
      ],
      difficulty: "intermediate",
      conceptTested: "Framing and emotions",
      takeaway: "Framing quyết định vùng giải pháp: zero-sum làm hẹp hợp tác, win-win mở đường cho integrative options.",
    },
    {
      id: "q11",
      stem: "Which conflict-handling intention is high in assertiveness and low in cooperativeness?",
      options: [
        { id: "a", text: "Competing", isCorrect: true, rationale: "Cơ chế: competing = assertive + uncooperative, theo đuổi lợi ích mình. Bẫy: assertive nghe giống collaborating vì cả hai đều assertive. Khóa: low cooperativeness tách competing khỏi collaborating." },
        { id: "b", text: "Collaborating", isCorrect: false, rationale: "Cơ chế: collaborating = assertive + cooperative. Bẫy: cũng cao assertiveness. Khóa: collaborating vẫn cố thỏa mãn bên kia." },
        { id: "c", text: "Avoiding", isCorrect: false, rationale: "Cơ chế: avoiding = unassertive + uncooperative. Bẫy: cũng low cooperative. Khóa: competing cao assertive." },
        { id: "d", text: "Accommodating", isCorrect: false, rationale: "Cơ chế: accommodating = unassertive + cooperative. Bẫy: có thể nhìn như 'nhường'. Khóa: không cao assertiveness." },
        { id: "e", text: "Compromising", isCorrect: false, rationale: "Cơ chế: compromising ở mid-range cả assertiveness và cooperativeness. Bẫy: tranh chấp nguồn lực có thể dẫn đến compromise. Khóa: high/low rõ ràng = competing." },
      ],
      difficulty: "basic",
      conceptTested: "Conflict-handling intentions",
      takeaway: "Map 5 styles bằng hai trục: assertiveness cho lợi ích mình, cooperativeness cho lợi ích người khác.",
    },
    {
      id: "q12",
      stem: "Two departments both have legitimate interests and want a solution that fully satisfies both sides. Which intention best fits this goal?",
      options: [
        { id: "a", text: "Collaborating", isCorrect: true, rationale: "Cơ chế: collaborating tìm giải pháp win-win, thỏa mãn đầy đủ lợi ích mọi bên. Bẫy: compromise nghe hòa bình nhưng chỉ mỗi bên nhường một phần. Khóa: fully satisfies both sides = collaborating." },
        { id: "b", text: "Compromising", isCorrect: false, rationale: "Cơ chế: compromising mỗi bên nhường một phần, không tối đa hóa lợi ích cả hai. Bẫy: nó thường được xem là công bằng. Khóa: full satisfaction không phải compromise." },
        { id: "c", text: "Avoiding", isCorrect: false, rationale: "Cơ chế: avoiding né conflict, không giải quyết interests. Bẫy: tránh đối đầu có vẻ giữ hòa khí. Khóa: muốn solution thì không tránh." },
        { id: "d", text: "Accommodating", isCorrect: false, rationale: "Cơ chế: accommodating đặt lợi ích người khác trên mình, không thỏa mãn đầy đủ cả hai. Bẫy: cooperative cao. Khóa: thiếu assertiveness cho lợi ích mình." },
        { id: "e", text: "Competing", isCorrect: false, rationale: "Cơ chế: competing ưu tiên lợi ích mình bất kể bên kia. Bẫy: có legitimate interests nên mỗi bên có thể muốn thắng. Khóa: both sides fully satisfied là win-win." },
      ],
      difficulty: "intermediate",
      conceptTested: "Choosing conflict-handling intentions",
      takeaway: "Collaborating phù hợp khi các bên cần học interests của nhau để tạo win-win, không chỉ chia đôi khác biệt.",
    },
    {
      id: "q13",
      stem: "Which outcome is most likely to be functional rather than dysfunctional?",
      options: [
        { id: "a", text: "Conflict acts as an antidote to groupthink by encouraging critical evaluation", isCorrect: true, rationale: "Cơ chế: R&J xem functional conflict có thể cải thiện quyết định và chống groupthink. Bẫy: groupthink nghe thuộc Topic 07 nhưng liên hệ trực tiếp Stage V. Khóa: critical evaluation cải thiện decision quality." },
        { id: "b", text: "Communication drops and members avoid sharing information", isCorrect: false, rationale: "Cơ chế: giảm communication là dysfunctional outcome. Bẫy: ít nói có thể trông yên ổn. Khóa: performance và trust giảm." },
        { id: "c", text: "Cohesiveness and trust decline sharply", isCorrect: false, rationale: "Cơ chế: giảm cohesiveness/trust là dysfunctional. Bẫy: conflict có thể làm lộ vấn đề thật. Khóa: decline sharply là dấu hiệu phá hoại." },
        { id: "d", text: "The group becomes paralyzed by hostility", isCorrect: false, rationale: "Cơ chế: hostility làm tê liệt nhóm là dysfunctional, thường ở conflict intensity cao. Bẫy: intensity cao có vẻ 'nhiều năng lượng'. Khóa: paralyzed = performance bị cản." },
        { id: "e", text: "Members focus on personal attacks instead of the issue", isCorrect: false, rationale: "Cơ chế: cá nhân hóa là relationship conflict, hầu như dysfunctional. Bẫy: attack có thể bộc lộ cảm xúc thật. Khóa: personal attacks làm lệch khỏi problem solving." },
      ],
      difficulty: "intermediate",
      conceptTested: "Stage V outcomes",
      takeaway: "Functional outcome của conflict là chất lượng quyết định, sáng tạo và tự đánh giá tăng; dysfunctional outcome là trust, communication và cohesiveness giảm.",
    },
    {
      id: "q14",
      stem: "A manager discovers that a heated dispute is mostly caused by different meanings attached to the same term. What should the manager do first?",
      options: [
        { id: "a", text: "Clarify the semantic misunderstanding before treating it as a deep substantive conflict", isCorrect: true, rationale: "Cơ chế: managing conflict bắt đầu bằng nhận ra khi nào thật sự bất đồng; nhiều conflict chỉ do semantic differences. Bẫy: thấy tranh cãi nóng thì nhảy ngay vào arbitration. Khóa: khác từ ngữ cần clarify trước." },
        { id: "b", text: "Force a win-lose decision immediately", isCorrect: false, rationale: "Cơ chế: ép win-lose có thể làm conflict leo thang khi nguồn gốc chỉ là hiểu lầm. Bẫy: quyết nhanh nghe hiệu quả. Khóa: semantic misunderstanding cần làm rõ." },
        { id: "c", text: "Tell everyone to avoid the topic permanently", isCorrect: false, rationale: "Cơ chế: avoiding không xử lý gốc và có thể giữ vấn đề âm ỉ. Bẫy: tránh chủ đề có thể giảm căng thẳng tức thời. Khóa: manager cần clarify interests/meaning." },
        { id: "d", text: "Assume it is relationship conflict and separate the people", isCorrect: false, rationale: "Cơ chế: relationship conflict là cá nhân hóa; stem nói khác nghĩa từ. Bẫy: heated dispute dễ nhìn như cá nhân. Khóa: chẩn đoán nguồn trước khi can thiệp." },
        { id: "e", text: "Ignore shared interests because positions are all that matter", isCorrect: false, rationale: "Cơ chế: R&J khuyên tập trung interests và shared interests. Bẫy: positions là thứ các bên nói to nhất. Khóa: conflict management tốt đi dưới positions." },
      ],
      difficulty: "intermediate",
      conceptTested: "Managing conflict",
      takeaway: "Quản trị conflict bắt đầu bằng chẩn đoán: nếu nguồn là semantic, làm rõ nghĩa trước; nếu là interests thật, chuyển sang đối thoại cởi mở.",
    },
    {
      id: "q15",
      stem: "In this chapter, negotiation is best understood as a process in which parties attempt to do what?",
      options: [
        { id: "a", text: "Exchange goods or services and agree on the exchange rate or allocation of scarce resources", isCorrect: true, rationale: "Cơ chế: R&J định nghĩa negotiation/bargaining là process 2+ bên trao đổi goods/services và thống nhất exchange rate; practical lens là phân bổ nguồn lực khan hiếm. Bẫy: negotiation không chỉ là nói chuyện cho vui. Khóa: exchange/allocation/scarce resources." },
        { id: "b", text: "Eliminate all disagreement before it becomes visible", isCorrect: false, rationale: "Cơ chế: negotiation giải quyết/điều phối interests, không triệt tiêu mọi disagreement. Bẫy: đàm phán nghe như làm hòa. Khóa: negotiation liên quan exchange/allocation." },
        { id: "c", text: "Maximize relationship conflict to increase creativity", isCorrect: false, rationale: "Cơ chế: relationship conflict hầu như dysfunctional. Bẫy: interactionist view ủng hộ conflict vừa đủ nhưng không phải loại relationship. Khóa: negotiation không nhằm tăng relationship conflict." },
        { id: "d", text: "Let a mediator impose a binding settlement", isCorrect: false, rationale: "Cơ chế: mediator không áp đặt; arbitrator mới có quyền áp đặt. Bẫy: third party roles đều trong negotiation. Khóa: definition chung không phải one role." },
        { id: "e", text: "Choose a personality type for every party", isCorrect: false, rationale: "Cơ chế: personality là individual difference ảnh hưởng negotiation, không phải mục tiêu negotiation. Bẫy: personality có thể dự đoán behavior. Khóa: mục tiêu là agreement over exchange/allocation." },
      ],
      difficulty: "basic",
      conceptTested: "Definition of negotiation",
      takeaway: "Negotiation là bargaining để đạt thỏa thuận về trao đổi/phân bổ nguồn lực, thường dưới điều kiện khan hiếm và khác interests.",
    },
    {
      id: "q16",
      stem: "Which statement correctly contrasts distributive and integrative bargaining?",
      options: [
        { id: "a", text: "Distributive bargaining is win-lose and position-focused; integrative bargaining is win-win and interest-focused", isCorrect: true, rationale: "Cơ chế: Exhibit 14-4 tách distributive = fixed pie/positions/win-lose, integrative = expand pie/interests/win-win. Bẫy: cả hai đều là negotiation nên dễ lẫn. Khóa: positions vs interests." },
        { id: "b", text: "Distributive bargaining requires high information sharing; integrative bargaining requires low information sharing", isCorrect: false, rationale: "Cơ chế: ngược lại; integrative cần chia sẻ thông tin cao để tìm options. Bẫy: thông tin nhiều có thể bị lợi dụng trong distributive. Khóa: high info sharing thuộc integrative." },
        { id: "c", text: "Distributive bargaining focuses on long-term relationships; integrative bargaining focuses only on short-term wins", isCorrect: false, rationale: "Cơ chế: distributive thường ngắn hạn; integrative hợp với quan hệ dài hạn. Bẫy: win-win nghe có thể chậm nên tưởng không practical. Khóa: duration relationship trong Exhibit 14-4." },
        { id: "d", text: "Both approaches assume a fixed pie", isCorrect: false, rationale: "Cơ chế: fixed pie là giả định distributive; integrative cố expand pie. Bẫy: nguồn lực ban đầu có thể khan hiếm. Khóa: integrative tìm interests để mở rộng lựa chọn." },
        { id: "e", text: "Integrative bargaining means one party accommodates and gives up everything", isCorrect: false, rationale: "Cơ chế: accommodating là conflict-handling intention, không phải integrative bargaining. Bẫy: win-win bị hiểu thành nhường. Khóa: integrative thỏa mãn cả hai bằng creative options." },
      ],
      difficulty: "intermediate",
      conceptTested: "Distributive versus integrative bargaining",
      takeaway: "Distributive chia chiếc bánh cố định; integrative hỏi interests để mở rộng chiếc bánh.",
    },
    {
      id: "q17",
      stem: "What does BATNA refer to in negotiation?",
      options: [
        { id: "a", text: "The best alternative to a negotiated agreement, used as a threshold for accepting or rejecting offers", isCorrect: true, rationale: "Cơ chế: BATNA là phương án thay thế tốt nhất nếu không đạt thỏa thuận; offer tốt hơn BATNA thì đáng cân nhắc. Bẫy: nhầm BATNA với target point mong muốn. Khóa: alternative if no agreement." },
        { id: "b", text: "The most aggressive opening demand a party can make", isCorrect: false, rationale: "Cơ chế: opening demand là tactic/anchor, không phải BATNA. Bẫy: cả hai đều chuẩn bị trước negotiation. Khóa: BATNA nằm ngoài thỏa thuận hiện tại." },
        { id: "c", text: "The emotional intensity of a conflict", isCorrect: false, rationale: "Cơ chế: intensity thuộc Stage IV behavior, không phải negotiation threshold. Bẫy: BATNA có thể giảm lo lắng. Khóa: best alternative, not emotion." },
        { id: "d", text: "The third party who imposes a settlement", isCorrect: false, rationale: "Cơ chế: third party có quyền áp đặt là arbitrator. Bẫy: BATNA và arbitrator đều ở phần negotiation. Khóa: BATNA là phương án thay thế." },
        { id: "e", text: "The final written agreement after closure", isCorrect: false, rationale: "Cơ chế: final agreement thuộc closure & implementation; BATNA được xác định trước khi vào đàm phán. Bẫy: đều liên quan kết thúc/bế tắc. Khóa: BATNA dùng để quyết định có nhận offer không." },
      ],
      difficulty: "basic",
      conceptTested: "BATNA",
      takeaway: "BATNA là sàn ra quyết định: thỏa thuận kém hơn BATNA thì không nên nhận; tốt hơn BATNA thì hơn bế tắc.",
    },
    {
      id: "q18",
      stem: "Which sequence correctly describes the five-step negotiation process?",
      options: [
        { id: "a", text: "Preparation and planning → definition of ground rules → clarification and justification → bargaining and problem solving → closure and implementation", isCorrect: true, rationale: "Cơ chế: Exhibit 14-6 đi từ chuẩn bị, luật chơi, làm rõ, mặc cả/giải quyết vấn đề, rồi chốt/triển khai. Bẫy: nhảy thẳng vào bargaining vì đó là phần dễ thấy nhất. Khóa: preparation comes first." },
        { id: "b", text: "Bargaining and problem solving → preparation and planning → closure and implementation → ground rules → clarification", isCorrect: false, rationale: "Cơ chế: bargaining không nên xảy ra trước preparation/ground rules. Bẫy: trong thực tế nhiều người làm vậy. Khóa: quy trình chuẩn bắt đầu bằng preparation." },
        { id: "c", text: "Ground rules → closure → preparation → behavior → outcomes", isCorrect: false, rationale: "Cơ chế: behavior/outcomes là conflict process, không phải negotiation process. Bẫy: cả hai đều có process stages. Khóa: negotiation có 5 bước riêng Exhibit 14-6." },
        { id: "d", text: "Clarification → felt conflict → BATNA → arbitrator → implementation", isCorrect: false, rationale: "Cơ chế: trộn Stage II, BATNA và third-party role, không phải sequence chuẩn. Bẫy: các thuật ngữ đều trong topic. Khóa: chọn sequence đủ 5 bước negotiation." },
        { id: "e", text: "Closure and implementation → bargaining → ground rules → preparation → justification", isCorrect: false, rationale: "Cơ chế: closure là cuối, không phải đầu. Bẫy: có thể review từ kết quả ngược lại. Khóa: forward process bắt đầu bằng preparation." },
      ],
      difficulty: "basic",
      conceptTested: "Negotiation process",
      takeaway: "Đàm phán tốt bắt đầu trước bàn họp: preparation & planning, đặc biệt xác định BATNA, là nền của toàn bộ process.",
    },
    {
      id: "q19",
      stem: "Which third-party role has the authority to impose an agreement on the parties?",
      options: [
        { id: "a", text: "Arbitrator", isCorrect: true, rationale: "Cơ chế: arbitrator có quyền áp đặt settlement, tự nguyện hoặc bắt buộc. Bẫy: mediator cũng can thiệp mạnh bằng thuyết phục. Khóa: impose agreement = arbitrator." },
        { id: "b", text: "Mediator", isCorrect: false, rationale: "Cơ chế: mediator trung lập, gợi ý/thuyết phục nhưng không áp đặt. Bẫy: mediator phổ biến trong hòa giải. Khóa: no authority to impose." },
        { id: "c", text: "Conciliator", isCorrect: false, rationale: "Cơ chế: conciliator tạo kênh liên lạc phi chính thức, không áp đặt. Bẫy: có vẻ là bên thứ ba đáng tin nên có quyền. Khóa: channel builder, not decision imposer." },
        { id: "d", text: "Collaborator", isCorrect: false, rationale: "Cơ chế: collaborating là intention của các bên, không phải third-party role. Bẫy: tên nghe giống collaboration topic. Khóa: third-party role trong R&J là mediator/arbitrator/conciliator." },
        { id: "e", text: "BATNA", isCorrect: false, rationale: "Cơ chế: BATNA là alternative, không phải người/role. Bẫy: BATNA có sức ép trong negotiation. Khóa: authority to impose thuộc arbitrator." },
      ],
      difficulty: "basic",
      conceptTested: "Third-party negotiations",
      takeaway: "Mediator giúp thuyết phục, conciliator mở kênh liên lạc, arbitrator mới có quyền áp đặt thỏa thuận.",
    },
    {
      id: "q20",
      stem: "Which action best turns conflict into healthier collaboration while avoiding collaboration overload?",
      options: [
        { id: "a", text: "Use SCARF and clear expectations to identify threat triggers, invite dissent safely, and limit unnecessary meetings or channels", isCorrect: true, rationale: "Cơ chế: SCARF đọc threat/reward; 4 triggers/remedies làm rõ communication, standards, time, expectations; healthy conflict cần an toàn tâm lý; overload cần giảm họp/kênh dư. Bẫy: collaboration không có nghĩa là họp càng nhiều càng tốt. Khóa: healthy conflict + right dose of collaboration." },
        { id: "b", text: "Suppress all disagreement so the team appears aligned", isCorrect: false, rationale: "Cơ chế: dập bất đồng tạo surface harmony và dễ groupthink/New Groupthink. Bẫy: alignment nhìn giống collaboration. Khóa: healthy conflict cần dissent an toàn." },
        { id: "c", text: "Add more meetings and shared channels whenever conflict appears", isCorrect: false, rationale: "Cơ chế: thêm quá nhiều collaboration tạo overload, kiệt sức và giảm sáng tạo cá nhân. Bẫy: hợp tác nhiều nghe tích cực. Khóa: collaboration cần liều lượng." },
        { id: "d", text: "Rely only on status hierarchy to settle every disagreement", isCorrect: false, rationale: "Cơ chế: status threat có thể làm người khác phòng thủ; áp hierarchy không chuyển conflict thành collaboration. Bẫy: authority giải quyết nhanh. Khóa: SCARF/Fairness/Autonomy bị ảnh hưởng." },
        { id: "e", text: "Avoid empathy tools because conflict should stay purely task-based", isCorrect: false, rationale: "Cơ chế: Johari Window/empathy giúp hiểu vùng mù và giảm cá nhân hóa. Bẫy: task conflict vừa phải tốt, nhưng con người vẫn cần empathy để không trượt thành relationship conflict. Khóa: collaboration cần hiểu nhau." },
      ],
      difficulty: "advanced",
      conceptTested: "Conflict to collaboration",
      takeaway: "Chuyển conflict thành collaboration không phải thêm tương tác vô hạn; đó là đọc trigger, tạo an toàn cho dissent, làm rõ kỳ vọng và giữ collaboration đúng liều.",
    },
    {
      id: "q21",
      stem: "A candidate is entering a distributive salary negotiation and has reliable market data supporting a high demand. What should she do to use anchoring strategically?",
      options: [
        { id: "a", text: "Make an aggressive first offer to establish a favorable anchor", isCorrect: true, rationale: "Cơ chế: first offer thể hiện power và neo cuộc thương lượng quanh con số có lợi vì đối phương thường adjust không đủ. Bẫy: aggressive dễ bị hiểu là phá quan hệ. Khóa: trong distributive bargaining, credible aggressive first offer tạo anchor." },
        { id: "b", text: "Wait silently for the employer's first offer so the employer sets the anchor", isCorrect: false, rationale: "Cơ chế: để bên kia ra giá trước trao cho họ lợi thế anchoring. Bẫy: nghe first offer có vẻ giúp thu thập information. Khóa: spec sách khuyên chủ động RA GIÁ TRƯỚC trong distributive bargaining." },
        { id: "c", text: "Reveal her resistance point before making any demand", isCorrect: false, rationale: "Cơ chế: resistance point là mức tối thiểu trước khi bỏ đàm phán; tiết lộ nó làm yếu bargaining position. Bẫy: transparency thường hữu ích trong integrative negotiation. Khóa: resistance point không phải first offer." },
        { id: "d", text: "Display fake anger because surface acting reliably forces concessions", isCorrect: false, rationale: "Cơ chế: anger GIẢ/surface acting vô dụng; emotion còn phụ thuộc relative power. Bẫy: toughness có thể tạo nhượng bộ. Khóa: tactic được hỏi là anchoring bằng first offer, không phải emotion display." },
        { id: "e", text: "Use her BATNA as the opening salary even if it is only her fallback", isCorrect: false, rationale: "Cơ chế: BATNA là alternative nếu không thỏa thuận, không đồng nghĩa aggressive target/first offer. Bẫy: BATNA là con số chuẩn bị trước negotiation. Khóa: opening anchor nên dựa trên demand/market support, không tiết lộ fallback." },
      ],
      difficulty: "intermediate",
      conceptTested: "First offer and anchoring in distributive bargaining",
      takeaway: "Trong distributive bargaining, một first offer aggressive nhưng có cơ sở giúp đặt anchor có lợi; đừng nhường anchor cho đối phương.",
    },
  ],
  status: "ready",
  source:
    "Robbins & Judge, Organizational Behavior — Chapter 14 'Conflict in Organizations' (pp.256-273); Slide 'OB-Topic 8-Conflict and Collaboration' (Dr Lan Anh, IM2017, HCMUT); bổ sung slide: Myers-Briggs (2022), SCARF (David Rock, 2008), HBR '4 Triggers Cause the Majority of Team Conflicts' (Laker & Pereira, 2022).",
};

const topic09: Chapter = {
  slug: "topic-09",
  order: 9,
  title: "Topic 09 — Team Lifecycle and Team Effectiveness",
  bigIdea:
    "Một team không phải chỉ là group đông người hơn — điểm khác biệt cốt lõi là POSITIVE SYNERGY: team tạo ra kết quả LỚN HƠN tổng đóng góp cá nhân nhờ phối hợp, trong khi work group chỉ là phép cộng (Robbins & Judge). Nhưng 'gọi là team' không tự động khiến nó hiệu quả: hiệu quả đến từ CONTEXT + COMPOSITION + PROCESS (mô hình R&J Exhibit 11-3), được vun đắp qua một VÒNG ĐỜI (forming → storming → norming → performing → adjourning), và đứng trên nền tảng TRUST & PSYCHOLOGICAL SAFETY. Nhà quản lý giỏi biết chọn đúng loại team, nuôi nó qua các giai đoạn, tối ưu ba nhóm yếu tố — và biết khi nào KHÔNG nên dùng team.",
  bigIdeaPillars: [
    {
      label: "Team ≠ Group: synergy là điểm khác biệt",
      body: "Work group = chia sẻ thông tin, không có synergy, performance = tổng inputs. Work team = positive synergy qua phối hợp, performance > tổng (R&J p201). 5 types: problem-solving, self-managed work teams, cross-functional, virtual teams, multiteam systems. Và 3 tests 'khi nào KHÔNG dùng team': công việc có cần >1 người & nhiều góc nhìn không, có common purpose không, các thành viên có interdependent không.",
    },
    {
      label: "Team Lifecycle — đội tiến hóa qua thời gian",
      body: "Tuckman 5 stages (slide): forming (định hướng, bất định) → storming (tranh giành status, xung đột kiểm soát) → norming (hình thành chuẩn chung & cohesion) → performing (cơ cấu ổn định, dồn sức thực thi) → adjourning (giải tán với nhóm tạm thời). GRPI (Goals-Roles-Processes-Interpersonal) làm khung chẩn đoán; 'team of all stars vs all-star team' — ngôi sao rời rạc chưa phải đội mạnh.",
    },
    {
      label: "Team Effectiveness Model: Context + Composition + Process",
      body: "Mô hình R&J (Exhibit 11-3). CONTEXT: adequate resources, leadership & structure, climate of trust, performance evaluation & reward systems. COMPOSITION: abilities, personality (conscientiousness/openness/emotional stability, tránh disagreeable), allocating 9 roles (Exhibit 11-4), diversity (organizational demography), size (two-pizza, 5-9), member preferences. PROCESS: common purpose & reflexivity, specific goals, team efficacy, mental models, conflict levels (task tốt, relationship xấu), social loafing.",
    },
    {
      label: "Nền tảng: Trust & Psychological Safety",
      body: "Team hiệu quả cao đứng trên niềm tin (slide). Google Aristotle project — 5 factors: psychological safety (#1), dependability, structure & clarity, meaning, impact. 4 Stages of Psychological Safety (Tim Clark): inclusion → learner → contributor → challenger. Lencioni 5 Dysfunctions: absence of trust → fear of conflict → lack of commitment → avoidance of accountability → inattention to results. 5 behaviors of high-trust team + Bezos' 6 Meeting Rules.",
    },
  ],
  learningObjectives: [
    "Phân biệt work group và work team qua khái niệm positive synergy (R&J p201).",
    "So sánh 5 types of teams: problem-solving, self-managed, cross-functional, virtual, multiteam systems.",
    "Mô tả team lifecycle theo Tuckman (forming/storming/norming/performing/adjourning) và khung GRPI.",
    "Trình bày Team Effectiveness Model (Exhibit 11-3): 3 nhóm Context, Composition, Process.",
    "Giải thích 4 yếu tố Context (adequate resources, leadership & structure, climate of trust, reward systems).",
    "Phân tích các yếu tố Composition: abilities, personality, allocating 9 roles (Exhibit 11-4), diversity, size (two-pizza), preferences.",
    "Giải thích các biến Process: common purpose, specific goals, team efficacy, mental models, conflict levels, social loafing.",
    "Vận dụng khung trust & psychological safety: Google Aristotle 5 factors, 4 Stages of Psychological Safety (Clark), Lencioni 5 Dysfunctions.",
    "Giải thích cách turning individuals into team players (selecting, training, rewarding) và các hành vi của high-trust team.",
    "Áp dụng 3 tests để quyết định khi nào KHÔNG nên dùng team (complexity, common purpose, interdependence).",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "Teams: (A) team ≠ group (synergy, 5 types), (B) lifecycle Tuckman, (C) effectiveness model (context/composition/process), (D) nền tảng trust & psychological safety.",
    nodes: [
      {
        id: "tm",
        label: "Teams",
        group: "concept",
        sectionId: "s1",
        detail: "Team = group + positive synergy; hiệu quả cần context/composition/process.",
      },
      {
        id: "g_diff",
        label: "A. Team ≠ Group",
        group: "concept",
        parent: "tm",
        sectionId: "s1",
        detail: "Synergy, 5 types, when NOT teams.",
      },
      {
        id: "g_life",
        label: "B. Team lifecycle",
        group: "concept",
        parent: "tm",
        sectionId: "s3",
        detail: "Tuckman 5 stages, GRPI.",
      },
      {
        id: "g_eff",
        label: "C. Effectiveness model",
        group: "concept",
        parent: "tm",
        sectionId: "s4",
        detail: "Context + Composition + Process.",
      },
      {
        id: "g_trust",
        label: "D. Trust & psychological safety",
        group: "concept",
        parent: "tm",
        sectionId: "s7",
        detail: "Aristotle 5, 4 stages, Lencioni.",
      },
      {
        id: "t_synergy",
        label: "Work group vs team",
        group: "term",
        parent: "g_diff",
        sectionId: "s1",
        detail: "Work group chia sẻ thông tin; work team tạo positive synergy.",
      },
      {
        id: "t_types",
        label: "5 types of teams",
        group: "term",
        parent: "g_diff",
        sectionId: "s2",
        detail: "Problem-solving, self-managed, cross-functional, virtual, multiteam systems.",
      },
      {
        id: "t_tuckman",
        label: "Tuckman + GRPI",
        group: "term",
        parent: "g_life",
        sectionId: "s3",
        detail: "Forming, storming, norming, performing, adjourning; GRPI để chẩn đoán.",
      },
      {
        id: "t_ctx",
        label: "Context (4)",
        group: "term",
        parent: "g_eff",
        sectionId: "s4",
        detail: "Resources, leadership/structure, trust, evaluation/reward.",
      },
      {
        id: "t_comp",
        label: "Composition (9 roles)",
        group: "term",
        parent: "g_eff",
        sectionId: "s5",
        detail: "Abilities, personality, roles, diversity, size, preferences.",
      },
      {
        id: "t_proc",
        label: "Process",
        group: "term",
        parent: "g_eff",
        sectionId: "s6",
        detail: "Purpose, goals, efficacy, mental models, conflict, social loafing.",
      },
      {
        id: "t_safety",
        label: "Aristotle / 4 stages / Lencioni",
        group: "term",
        parent: "g_trust",
        sectionId: "s7",
        detail: "Psychological safety, Clark's 4 stages, Lencioni dysfunctions.",
      },
      {
        id: "t_htrust",
        label: "High-trust behaviors + Bezos rules",
        group: "term",
        parent: "g_trust",
        sectionId: "s8",
        detail: "5 behaviors of high-trust team và 6 meeting rules.",
      },
      {
        id: "t_player",
        label: "Team players + when NOT teams",
        group: "term",
        parent: "g_diff",
        sectionId: "s9",
        detail: "Selecting/training/rewarding và 3 tests khi không nên dùng team.",
      },
    ],
    edges: [
      { from: "tm", to: "g_diff", label: "khác biệt" },
      { from: "tm", to: "g_life", label: "lifecycle" },
      { from: "tm", to: "g_eff", label: "hiệu quả" },
      { from: "tm", to: "g_trust", label: "trust" },
      { from: "g_diff", to: "t_synergy", label: "synergy" },
      { from: "g_diff", to: "t_types", label: "types" },
      { from: "g_diff", to: "t_player", label: "team player" },
      { from: "g_life", to: "t_tuckman", label: "tuckman" },
      { from: "g_eff", to: "t_ctx", label: "context" },
      { from: "g_eff", to: "t_comp", label: "composition" },
      { from: "g_eff", to: "t_proc", label: "process" },
      { from: "g_trust", to: "t_safety", label: "safety" },
      { from: "g_trust", to: "t_htrust", label: "high-trust" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "Team vs Group: positive synergy",
      blocks: [
        calloutBlock(
          "key",
          "Work group vs Work team (R&J p201)",
          "Work group = nhóm tương tác chủ yếu để CHIA SẺ thông tin & ra quyết định giúp mỗi thành viên làm tốt phần của mình; KHÔNG có positive synergy → performance = TỔNG đóng góp. Work team = phối hợp tạo POSITIVE SYNERGY → performance LỚN HƠN tổng inputs.",
        ),
        comparisonBlock(
          "Work Group vs Work Team (R&J p201)",
          ["Tiêu chí", "Work group", "Work team"],
          [
            {
              label: "Mục tiêu",
              cells: ["Chia sẻ thông tin.", "Hiệu suất tập thể (collective performance)."],
            },
            {
              label: "Synergy",
              cells: ["Trung tính / không có.", "Dương (positive)."],
            },
            {
              label: "Trách nhiệm",
              cells: ["Cá nhân.", "Cá nhân + lẫn nhau (mutual)."],
            },
            {
              label: "Kỹ năng",
              cells: ["Ngẫu nhiên/đa dạng.", "Bổ trợ nhau (complementary)."],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Vì sao teams phổ biến (R&J p200)",
          "Teams linh hoạt, phản ứng nhanh, dễ lắp ráp/giải tán, dân chủ hóa tổ chức, tăng involvement, tạo tư duy hợp tác. Nhưng team KHÔNG mặc nhiên hiệu quả — có thể sa vào fads & herd mentality.",
        ),
      ],
      keyTerms: [
        { term: "Work group", definition: "Nhóm tương tác chủ yếu để chia sẻ thông tin và giúp từng thành viên làm tốt phần việc cá nhân." },
        { term: "Work team", definition: "Nhóm phối hợp để tạo collective performance qua positive synergy." },
        { term: "Synergy", definition: "Hiệu ứng phối hợp khiến kết quả tập thể lớn hơn, bằng hoặc nhỏ hơn tổng inputs cá nhân." },
      ],
    },
    {
      id: "s2",
      heading: "5 types of teams",
      blocks: [
        comparisonBlock(
          "5 types of teams (R&J p202-205)",
          ["Loại", "Nội dung"],
          [
            {
              label: "Problem-solving team",
              cells: ["5-12 người cùng phòng ban gặp gỡ vài giờ/tuần bàn cách cải thiện chất lượng/hiệu quả/môi trường; chỉ đề xuất, ít quyền thực thi."],
            },
            {
              label: "Self-managed work team",
              cells: ["10-15 người tự đảm nhận nhiều việc của quản lý như lập kế hoạch, phân công, kiểm soát; tự chủ cao."],
            },
            {
              label: "Cross-functional team",
              cells: ["Thành viên cùng cấp nhưng khác lĩnh vực, cùng hoàn thành một nhiệm vụ; mạnh về đa dạng góc nhìn, nhưng tốn thời gian xây trust."],
            },
            {
              label: "Virtual team",
              cells: ["Dùng công nghệ để kết nối thành viên phân tán về địa lý; cần trust, giám sát tiến độ, công khai thành quả để không 'vô hình'."],
            },
            {
              label: "Multiteam system",
              cells: ["'Team của các team' — tập hợp nhiều team phụ thuộc nhau cùng superordinate goal; cần boundary spanners & lãnh đạo điều phối."],
            },
          ],
        ),
      ],
      keyTerms: [
        { term: "Problem-solving team", definition: "Team đề xuất cách cải thiện chất lượng/hiệu quả nhưng ít quyền thực thi." },
        { term: "Self-managed work team", definition: "Team tự đảm nhận nhiều chức năng quản lý và vận hành công việc." },
        { term: "Cross-functional team", definition: "Team gồm thành viên cùng cấp từ nhiều lĩnh vực khác nhau." },
        { term: "Virtual team", definition: "Team kết nối qua công nghệ khi thành viên phân tán địa lý." },
        { term: "Multiteam system", definition: "Hệ thống nhiều team phụ thuộc nhau cùng theo một superordinate goal." },
      ],
    },
    {
      id: "s3",
      heading: "Team Lifecycle: Tuckman 5 stages + GRPI",
      blocks: [
        flowBlock(
          "s3",
          "Team lifecycle — Tuckman 5 stages (slide 11)",
          "horizontal",
          [
            {
              id: "f1",
              label: "Forming",
              group: "concept",
              detail: "Đội mới hình thành; bất định về mục đích, cấu trúc, lãnh đạo.",
            },
            {
              id: "f2",
              label: "Storming",
              group: "concept",
              detail: "Xung đột về status, kiểm soát, định hướng nhóm.",
            },
            {
              id: "f3",
              label: "Norming",
              group: "concept",
              detail: "Hình thành chuẩn chung, quan hệ gần gũi và cohesion.",
            },
            {
              id: "f4",
              label: "Performing",
              group: "concept",
              detail: "Cơ cấu ổn định; năng lượng dồn vào thực thi nhiệm vụ.",
            },
            {
              id: "f5",
              label: "Adjourning",
              group: "concept",
              detail: "Nhóm tạm thời kết thúc, wrap-up và chuẩn bị giải tán.",
            },
          ],
          [
            { from: "f1", to: "f2", label: "xung đột" },
            { from: "f2", to: "f3", label: "chuẩn hóa" },
            { from: "f3", to: "f4", label: "thực thi" },
            { from: "f4", to: "f5", label: "kết thúc" },
          ],
          "Đội tiến hóa qua 5 giai đoạn; nhiều đội mắc kẹt ở storming nếu không xây được norms & trust.",
        ),
        comparisonBlock(
          "5 giai đoạn Tuckman (slide 11)",
          ["Giai đoạn", "Nội dung"],
          [
            {
              label: "Forming",
              cells: ["Bất định về mục đích, cơ cấu, lãnh đạo; thành viên thăm dò."],
            },
            {
              label: "Storming",
              cells: ["Tranh giành status & kiểm soát, xung đột về định hướng nhóm."],
            },
            {
              label: "Norming",
              cells: ["Hình thành quan hệ gần gũi, chuẩn mực chung & cohesion."],
            },
            {
              label: "Performing",
              cells: ["Cơ cấu ổn định & được chấp nhận; năng lượng dồn vào hoàn thành nhiệm vụ."],
            },
            {
              label: "Adjourning",
              cells: ["Với nhóm tạm thời: kết thúc & chuẩn bị giải tán; chú trọng wrap-up."],
            },
          ],
        ),
        calloutBlock(
          "note",
          "GRPI & 'all-star team' (slide)",
          "Khung chẩn đoán GRPI: Goals (mục tiêu rõ) → Roles (vai trò) → Processes (quy trình) → Interpersonal (quan hệ). Bài học: một 'team of all stars' (các ngôi sao rời rạc) chưa chắc mạnh bằng 'all-star team' (đội biết phối hợp).",
        ),
      ],
      keyTerms: [
        { term: "Forming", definition: "Giai đoạn đội hình thành, còn bất định về mục đích/cấu trúc/lãnh đạo." },
        { term: "Storming", definition: "Giai đoạn xung đột, tranh giành status và kiểm soát." },
        { term: "Norming", definition: "Giai đoạn hình thành chuẩn mực chung, cohesion và quan hệ gần gũi." },
        { term: "Performing", definition: "Giai đoạn đội vận hành ổn định và tập trung hoàn thành nhiệm vụ." },
        { term: "Adjourning", definition: "Giai đoạn kết thúc/giải tán ở nhóm tạm thời." },
        { term: "GRPI model", definition: "Khung Goals-Roles-Processes-Interpersonal để chẩn đoán team." },
      ],
    },
    {
      id: "s4",
      heading: "Team Effectiveness Model + Context",
      blocks: [
        calloutBlock(
          "key",
          "Team Effectiveness Model (Exhibit 11-3, R&J p205)",
          "Hiệu quả đội tổng hợp từ 3 nhóm yếu tố — Context (bối cảnh), Composition (thành phần), Process (quy trình vận hành).",
        ),
        flowBlock(
          "s4",
          "Team Effectiveness Model (Exhibit 11-3)",
          "tree",
          [
            {
              id: "eff",
              label: "Team effectiveness",
              group: "concept",
              detail: "Hiệu quả đội được tạo bởi bối cảnh, thành phần và quy trình.",
            },
            {
              id: "ctx",
              label: "Context",
              group: "concept",
              parent: "eff",
              detail: "Resources, leadership/structure, trust, evaluation/reward.",
            },
            {
              id: "comp",
              label: "Composition",
              group: "concept",
              parent: "eff",
              detail: "Abilities, personality, roles, diversity, size, preferences.",
            },
            {
              id: "proc",
              label: "Process",
              group: "concept",
              parent: "eff",
              detail: "Purpose, goals, efficacy, mental models, conflict, social loafing.",
            },
          ],
          [
            { from: "eff", to: "ctx", label: "context" },
            { from: "eff", to: "comp", label: "composition" },
            { from: "eff", to: "proc", label: "process" },
          ],
          "Ba nhóm yếu tố cùng quyết định team effectiveness.",
        ),
        comparisonBlock(
          "Context — 4 yếu tố bối cảnh (R&J p206-207)",
          ["Yếu tố", "Nội dung"],
          [
            {
              label: "Adequate resources",
              cells: ["Thông tin kịp thời, thiết bị, nhân sự đủ, khích lệ, hỗ trợ hành chính — thiếu nguồn lực trực tiếp giảm khả năng đội đạt mục tiêu."],
            },
            {
              label: "Leadership & structure",
              cells: ["Thống nhất ai làm gì, chia tải công bằng; self-managed team tự hấp thụ vai trò quản lý; multiteam cần leader-facilitator."],
            },
            {
              label: "Climate of trust",
              cells: ["Nền tảng: thành viên tin nhau & tin lãnh đạo → hợp tác, bớt giám sát, sẵn sàng chấp nhận rủi ro."],
            },
            {
              label: "Performance evaluation & reward",
              cells: ["Đánh giá & thưởng theo NHÓM (group-based appraisal, profit/gainsharing, small-group incentives) để phản ánh đóng góp tập thể."],
            },
          ],
        ),
      ],
      keyTerms: [
        { term: "Team effectiveness", definition: "Mức đội đạt performance qua context, composition và process." },
        { term: "Climate of trust", definition: "Bầu khí thành viên tin nhau và tin lãnh đạo, làm tăng hợp tác và giảm nhu cầu giám sát." },
      ],
    },
    {
      id: "s5",
      heading: "Composition (thành phần đội)",
      blocks: [
        comparisonBlock(
          "Composition — các yếu tố (R&J p207-210)",
          ["Yếu tố", "Nội dung"],
          [
            {
              label: "Abilities of members",
              cells: ["Cần cân bằng: kỹ năng chuyên môn, giải quyết vấn đề & ra quyết định, kỹ năng liên cá nhân."],
            },
            {
              label: "Personality",
              cells: ["Conscientiousness & openness cao → đội tốt hơn; emotional stability giúp xử lý conflict; một thành viên rất disagreeable có thể kéo cả đội xuống."],
            },
            {
              label: "Allocating roles",
              cells: ["Đặt người giỏi/kinh nghiệm nhất vào vai trò cốt lõi; đội thành công phân đủ 9 vai (Exhibit 11-4)."],
            },
            {
              label: "Diversity",
              cells: ["Organizational demography (tuổi/giới/chủng tộc/thâm niên): diversity bề mặt tác động hỗn hợp/ngắn hạn tiêu cực; diversity về chức năng/chuyên môn tích cực; khác biệt văn hóa cản trở ngắn hạn rồi dịu đi."],
            },
            {
              label: "Size of teams",
              cells: ["Nhỏ tốt hơn — two-pizza rule (Bezos); lý tưởng 5-9; đội quá lớn → social loafing, khó phối hợp."],
            },
            {
              label: "Member preferences",
              cells: ["Không phải ai cũng thích làm việc nhóm; ép người thích làm một mình vào đội → giảm tinh thần & sự hài lòng."],
            },
          ],
        ),
        comparisonBlock(
          "9 Team Member Roles (Exhibit 11-4, R&J p209)",
          ["Vai trò", "Đóng góp"],
          [
            {
              label: "Creator",
              cells: ["Khởi xướng ý tưởng sáng tạo."],
            },
            {
              label: "Promoter",
              cells: ["Cổ vũ ý tưởng sau khi được nêu."],
            },
            {
              label: "Assessor",
              cells: ["Phân tích sâu sắc các phương án."],
            },
            {
              label: "Organizer",
              cells: ["Cung cấp cấu trúc."],
            },
            {
              label: "Producer",
              cells: ["Định hướng & theo đến cùng (follow-through)."],
            },
            {
              label: "Controller",
              cells: ["Xem xét chi tiết & thực thi quy tắc."],
            },
            {
              label: "Maintainer",
              cells: ["Bảo vệ đội trước 'trận chiến' bên ngoài (fights external battles)."],
            },
            {
              label: "Adviser",
              cells: ["Khuyến khích tìm thêm thông tin."],
            },
            {
              label: "Linker",
              cells: ["Điều phối & tích hợp (coordinates and integrates)."],
            },
          ],
        ),
      ],
      keyTerms: [
        { term: "Organizational demography", definition: "Mức độ thành viên chia sẻ các thuộc tính nhân khẩu học như tuổi, giới, chủng tộc, thâm niên." },
        { term: "Team roles", definition: "Các vai trò bổ trợ mà đội cần phân bổ để vận hành hiệu quả." },
      ],
    },
    {
      id: "s6",
      heading: "Process (quy trình vận hành)",
      blocks: [
        comparisonBlock(
          "Process — các biến (R&J p210-212)",
          ["Biến", "Nội dung"],
          [
            {
              label: "Common plan & purpose",
              cells: ["Mục đích chung, có reflexivity (đội phản tư & điều chỉnh kế hoạch khi cần)."],
            },
            {
              label: "Specific goals",
              cells: ["Mục tiêu cụ thể, khó, khả thi → nâng performance & truyền năng lượng."],
            },
            {
              label: "Team efficacy",
              cells: ["Niềm tin tập thể rằng đội CÓ THỂ thành công → nỗ lực & kiên trì cao hơn."],
            },
            {
              label: "Team identity / cohesion / mental models",
              cells: ["Cảm giác thuộc về đội; gắn kết; shared mental models (hiểu chung về nhiệm vụ & cách phối hợp)."],
            },
            {
              label: "Conflict levels",
              cells: ["Task conflict mức vừa → tốt cho đội; relationship conflict → gần như luôn hại (liên hệ Topic 08)."],
            },
            {
              label: "Social loafing",
              cells: ["Đội hiệu quả buộc trách nhiệm cá nhân rõ ràng để chống 'ăn theo' (liên hệ Topic 07)."],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Process gắn với group properties",
          "Nhiều biến process như cohesion, norms, social loafing, conflict đã học ở Topic 07-08 — ở cấp team chúng được chủ động thiết kế thay vì để tự phát.",
        ),
      ],
      keyTerms: [
        { term: "Reflexivity", definition: "Khả năng đội phản tư về mục tiêu/kế hoạch và điều chỉnh khi cần." },
        { term: "Team efficacy", definition: "Niềm tin tập thể rằng đội có thể thành công." },
        { term: "Mental models", definition: "Hiểu chung của thành viên về nhiệm vụ, tình huống và cách phối hợp." },
      ],
    },
    {
      id: "s7",
      heading: "Trust & Psychological Safety",
      blocks: [
        calloutBlock(
          "key",
          "Psychological safety là nền tảng (slide 18 — Google Aristotle)",
          "Dự án Aristotle của Google (nghiên cứu 180+ đội) tìm ra 5 yếu tố đội hiệu quả, trong đó psychological safety (an toàn để nêu ý kiến/mắc lỗi không sợ bị phạt) là quan trọng NHẤT.",
        ),
        comparisonBlock(
          "Google Aristotle — 5 factors (slide 18)",
          ["Yếu tố", "Nội dung"],
          [
            {
              label: "Psychological safety",
              cells: ["An toàn để chấp nhận rủi ro, nêu ý kiến, thừa nhận sai sót mà không sợ bị đánh giá."],
            },
            {
              label: "Dependability",
              cells: ["Thành viên hoàn thành phần việc đúng chất lượng & đúng hạn."],
            },
            {
              label: "Structure & clarity",
              cells: ["Vai trò, kế hoạch, mục tiêu rõ ràng."],
            },
            {
              label: "Meaning",
              cells: ["Công việc có ý nghĩa cá nhân với thành viên."],
            },
            {
              label: "Impact",
              cells: ["Thành viên tin việc mình làm tạo ra thay đổi/ý nghĩa."],
            },
          ],
        ),
        comparisonBlock(
          "4 Stages of Psychological Safety (Tim R. Clark — slide 19)",
          ["Giai đoạn", "Nội dung"],
          [
            {
              label: "Inclusion safety",
              cells: ["An toàn để được chấp nhận & thuộc về nhóm."],
            },
            {
              label: "Learner safety",
              cells: ["An toàn để học hỏi, đặt câu hỏi, mắc lỗi."],
            },
            {
              label: "Contributor safety",
              cells: ["An toàn để đóng góp bằng năng lực của mình."],
            },
            {
              label: "Challenger safety",
              cells: ["An toàn để thách thức hiện trạng, đề xuất thay đổi."],
            },
          ],
        ),
        comparisonBlock(
          "Lencioni — 5 Dysfunctions of a Team (slide 15)",
          ["Rối loạn (từ đáy tháp)", "Biểu hiện"],
          [
            {
              label: "Absence of trust",
              cells: ["Không dám bộc lộ điểm yếu → thiếu nền tảng."],
            },
            {
              label: "Fear of conflict",
              cells: ["Né tránh tranh luận thẳng thắn → hòa khí giả tạo."],
            },
            {
              label: "Lack of commitment",
              cells: ["Thiếu cam kết vì không được tranh luận → mơ hồ."],
            },
            {
              label: "Avoidance of accountability",
              cells: ["Không dám nhắc nhau chịu trách nhiệm."],
            },
            {
              label: "Inattention to results",
              cells: ["Đặt cái tôi/lợi ích cá nhân trên kết quả chung."],
            },
          ],
        ),
      ],
      keyTerms: [
        { term: "Psychological safety", definition: "An toàn tâm lý để nêu ý kiến, học hỏi, thừa nhận lỗi và thách thức hiện trạng mà không sợ bị phạt." },
        { term: "Lencioni's five dysfunctions", definition: "Absence of trust → fear of conflict → lack of commitment → avoidance of accountability → inattention to results." },
      ],
    },
    {
      id: "s8",
      heading: "High-trust behaviors & Bezos' Meeting Rules",
      blocks: [
        comparisonBlock(
          "5 behaviors of a high-trust team (slide 30)",
          ["Hành vi", "Nội dung"],
          [
            {
              label: "Consistent follow-through",
              cells: ["Làm đúng điều đã nói → xây độ tin cậy."],
            },
            {
              label: "Transparent communication",
              cells: ["Rõ ràng, tôn trọng, trung thực; xây rhythms như daily huddles, weekly meetings, quarterly off-sites tạo không gian đối thoại."],
            },
            {
              label: "Ownership & accountability",
              cells: ["Quan tâm, hỗ trợ, thẳng thắn khi có lỗi, chủ động, bám mục tiêu chung."],
            },
            {
              label: "Constructive feedback",
              cells: ["Phản hồi kịp thời giúp mọi người tiến bộ — 'We can disagree well!'."],
            },
            {
              label: "Vulnerability",
              cells: ["Dám thừa nhận sai & xin giúp: 'It's my fault! And I need help!' → kết nối qua hỗ trợ hai chiều."],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Jeff Bezos' 6 Meeting Rules (slide 31)",
          "(1) Two-pizza rule (đội nhỏ); (2) No PowerPoint — dùng narrative memo; (3) Start with silence (15-20' đọc memo); (4) Leave an empty chair (đại diện khách hàng); (5) Encourage disagreement, then commit; (6) End with clear ownership. → công cụ thực tế để họp hiệu quả & xây trust.",
        ),
      ],
      keyTerms: [
        { term: "High-trust team", definition: "Team có follow-through, communication minh bạch, ownership/accountability, feedback xây dựng và vulnerability." },
      ],
    },
    {
      id: "s9",
      heading: "Turning individuals into team players + When NOT to use teams",
      blocks: [
        comparisonBlock(
          "Turning individuals into team players (R&J p212-213)",
          ["Đòn bẩy", "Nội dung"],
          [
            {
              label: "Selecting",
              cells: ["Tuyển người có kỹ năng liên cá nhân để làm team player, không chỉ kỹ thuật."],
            },
            {
              label: "Training",
              cells: ["Đào tạo kỹ năng làm việc nhóm cho người quen làm cá nhân."],
            },
            {
              label: "Rewarding",
              cells: ["Thưởng cho nỗ lực HỢP TÁC thay vì chỉ thành tích cá nhân."],
            },
          ],
        ),
        calloutBlock(
          "key",
          "Beware! Teams aren't always the answer — 3 tests (R&J p214)",
          "Teamwork tốn thời gian & nguồn lực hơn; chỉ dùng team khi lợi ích vượt chi phí. 3 câu hỏi: (1) công việc có làm TỐT HƠN bởi >1 người & cần nhiều góc nhìn không? (2) có tạo COMMON PURPOSE/goals vượt tổng mục tiêu cá nhân không? (3) các thành viên có INTERDEPENDENT không — thành công của mỗi người phụ thuộc người khác, như bóng đá vs bơi lội?",
        ),
        calloutBlock(
          "note",
          "Implications for managers (R&J p215)",
          "Đội hiệu quả có đủ nguồn lực + lãnh đạo + climate of trust + reward theo nhóm; nhỏ gọn, đúng vai; tin vào năng lực đội, chung kế hoạch & mental model. Đừng mặc định luôn cần team.",
        ),
        calloutBlock(
          "key",
          "So what — kiến thức này đổi hành động của bạn",
          "\"Gọi là team\" không tự tạo positive synergy. Hành động: trước khi lập team, hỏi \"việc này có thật sự cần team không?\" (đủ phức tạp? có common purpose? có interdependence?) — nếu không, để cá nhân làm nhanh hơn; khi team trục trặc, chẩn đoán theo đúng thứ tự model: Context → Composition → Process; và muốn người ta nói thật thì xây psychological safety trước khi đòi hỏi ý kiến thẳng.",
        ),
      ],
      keyTerms: [
        { term: "Team player", definition: "Người có kỹ năng và động lực hợp tác, phối hợp, chịu trách nhiệm trong team." },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "Unit A members share updates and then complete separate quotas. Unit B combines complementary skills, shares accountability, and produces a launch none of its members could deliver alone. Why is Unit B a work team rather than merely a work group?",
      options: [
        { id: "a", text: "Unit B creates positive synergy, so collective performance exceeds the sum of individual inputs", isCorrect: true, rationale: "Cơ chế: complementary skills + mutual accountability tạo output không ai làm riêng được, tức positive synergy. Bẫy: chỉ thấy members cùng làm một launch. Khóa: collective performance > sum of individual inputs = work team." },
        { id: "b", text: "Unit B is a team simply because its members exchange information", isCorrect: false, rationale: "Cơ chế: Unit A cũng exchange information nhưng vẫn hoàn thành separate quotas. Bẫy: mọi interaction dễ được gọi là teamwork. Khóa: information sharing alone mô tả work group, chưa đủ positive synergy." },
        { id: "c", text: "Unit B is a team because all members must report to the same manager", isCorrect: false, rationale: "Cơ chế: stem không nêu reporting line; cùng manager chỉ có thể tạo command group. Bẫy: formal structure thường được gắn nhãn team. Khóa: team được phân biệt bằng synergy/accountability, không phải org chart." },
        { id: "d", text: "Unit A is the stronger team because individual accountability prevents coordination costs", isCorrect: false, rationale: "Cơ chế: separate individual quotas và thiếu collective output làm Unit A gần work group hơn. Bẫy: individual accountability có thể giúp performance. Khóa: team cần mutual accountability và coordinated output." },
        { id: "e", text: "Unit B is a team because it has more people than Unit A", isCorrect: false, rationale: "Cơ chế: stem không cho size và size không phải tiêu chí cốt lõi. Bẫy: team thường được hình dung là group lớn. Khóa: khác biệt nằm ở positive synergy, không nằm ở headcount." },
      ],
      difficulty: "basic",
      conceptTested: "Work group versus work team",
      takeaway: "Team không phải group đông hơn; team tạo positive synergy và collective performance vượt tổng đóng góp cá nhân.",
    },
    {
      id: "q02",
      stem: "Which statement best captures why teams became popular while also preserving the main warning?",
      options: [
        { id: "a", text: "Teams can be flexible and responsive, but they are not automatically effective and may become a management fad", isCorrect: true, rationale: "Cơ chế: R&J nói teams linh hoạt, phản ứng nhanh và tăng involvement, nhưng cảnh báo fads/herd mentality. Bẫy: tuyệt đối hóa team như giải pháp luôn đúng. Khóa: popular does not mean automatically effective." },
        { id: "b", text: "Teams are always faster and cheaper than individual work", isCorrect: false, rationale: "Cơ chế: teamwork thường tốn thời gian và nguồn lực hơn. Bẫy: nhiều người có vẻ chia việc nhanh hơn. Khóa: teams cần coordination cost." },
        { id: "c", text: "Teams eliminate the need for leadership and structure", isCorrect: false, rationale: "Cơ chế: leadership & structure là context factor quan trọng. Bẫy: self-managed nghe như không cần structure. Khóa: tự quản vẫn cần phân vai và phối hợp." },
        { id: "d", text: "Teams work because individual accountability disappears", isCorrect: false, rationale: "Cơ chế: team hiệu quả cần cả individual và mutual accountability; mất trách nhiệm cá nhân dễ gây social loafing. Bẫy: nghĩ team là chia đều trách nhiệm. Khóa: accountability không được biến mất." },
        { id: "e", text: "Teams are effective whenever members like each other", isCorrect: false, rationale: "Cơ chế: thích nhau chưa đủ; cần context, composition, process. Bẫy: quan hệ tốt có vẻ là teamwork. Khóa: effectiveness model rộng hơn liking." },
      ],
      difficulty: "intermediate",
      conceptTested: "Why teams are popular and the warning",
      takeaway: "Teams phổ biến vì linh hoạt và tăng involvement, nhưng dùng team như phong trào có thể tốn chi phí mà không tạo hiệu quả.",
    },
    {
      id: "q03",
      stem: "A group of 10 employees takes over scheduling, assigning work, and monitoring its own performance. Which team type is this?",
      options: [
        { id: "a", text: "Self-managed work team", isCorrect: true, rationale: "Cơ chế: self-managed work team tự đảm nhận nhiều việc của quản lý như lập kế hoạch, phân công, kiểm soát. Bẫy: số người 10 có thể gợi problem-solving team. Khóa: taking over management tasks = self-managed." },
        { id: "b", text: "Problem-solving team", isCorrect: false, rationale: "Cơ chế: problem-solving team chủ yếu đề xuất cải thiện, ít quyền thực thi. Bẫy: cùng phòng ban và quy mô nhỏ. Khóa: quyền tự quản phân công/monitoring thuộc self-managed." },
        { id: "c", text: "Cross-functional team", isCorrect: false, rationale: "Cơ chế: cross-functional gồm người từ nhiều lĩnh vực cùng cấp. Bẫy: team này cũng có thể tự phối hợp. Khóa: stem nhấn tự quản lý." },
        { id: "d", text: "Virtual team", isCorrect: false, rationale: "Cơ chế: virtual team dựa vào công nghệ để kết nối thành viên phân tán. Bẫy: scheduling có thể dùng công nghệ. Khóa: không có dấu hiệu phân tán địa lý." },
        { id: "e", text: "Multiteam system", isCorrect: false, rationale: "Cơ chế: multiteam system là team của các team. Bẫy: self-managed có thể liên quan nhiều nhóm nhỏ. Khóa: stem chỉ nói một team." },
      ],
      difficulty: "basic",
      conceptTested: "Types of teams",
      takeaway: "Self-managed work team khác problem-solving team ở quyền thực thi và tự đảm nhận chức năng quản lý.",
    },
    {
      id: "q04",
      stem: "Which description best fits a multiteam system rather than a virtual team?",
      options: [
        { id: "a", text: "Multiple interdependent teams coordinate toward a superordinate goal", isCorrect: true, rationale: "Cơ chế: multiteam system là team của các team phụ thuộc nhau vì một mục tiêu cấp cao. Bẫy: virtual team cũng cần coordination. Khóa: multiple teams + superordinate goal." },
        { id: "b", text: "Members are geographically dispersed and rely mainly on technology", isCorrect: false, rationale: "Cơ chế: đây là virtual team. Bẫy: multiteam cũng có thể dùng công nghệ. Khóa: phân tán địa lý là dấu hiệu virtual." },
        { id: "c", text: "Five employees meet weekly to suggest quality improvements but cannot implement them", isCorrect: false, rationale: "Cơ chế: đây là problem-solving team. Bẫy: weekly meeting nghe như coordination. Khóa: chỉ đề xuất, ít quyền thực thi." },
        { id: "d", text: "Members from different functions at the same level solve one task", isCorrect: false, rationale: "Cơ chế: đây là cross-functional team. Bẫy: khác chức năng có vẻ nhiều team. Khóa: vẫn là một team." },
        { id: "e", text: "One team eliminates leadership and structure entirely", isCorrect: false, rationale: "Cơ chế: không loại team nào hiệu quả bằng cách xóa hoàn toàn leadership/structure. Bẫy: self-managed bị hiểu sai là không cần structure. Khóa: multiteam càng cần điều phối." },
      ],
      difficulty: "intermediate",
      conceptTested: "Multiteam systems and virtual teams",
      takeaway: "Virtual team nói về cách kết nối người phân tán; multiteam system nói về nhiều team phụ thuộc nhau cùng mục tiêu lớn.",
    },
    {
      id: "q05",
      stem: "What is the correct order of Tuckman's five stages of team development?",
      options: [
        { id: "a", text: "Forming → storming → norming → performing → adjourning", isCorrect: true, rationale: "Cơ chế: Tuckman đi từ hình thành, xung đột, tạo chuẩn, thực thi, rồi giải tán. Bẫy: đảo storming/norming vì muốn nhóm có norms trước mới xung đột. Khóa: storming đến trước norming." },
        { id: "b", text: "Forming → norming → storming → performing → adjourning", isCorrect: false, rationale: "Cơ chế: norming chỉ đến sau khi nhóm xử lý storming. Bẫy: thứ tự này nghe êm đẹp hơn. Khóa: conflict kiểm soát/status là stage sớm." },
        { id: "c", text: "Storming → forming → norming → performing → adjourning", isCorrect: false, rationale: "Cơ chế: đội phải forming trước khi storming. Bẫy: nhiều team cảm thấy xung đột xuất hiện rất sớm. Khóa: bất định ban đầu là forming." },
        { id: "d", text: "Forming → storming → performing → norming → adjourning", isCorrect: false, rationale: "Cơ chế: performing cần norms và cấu trúc được chấp nhận. Bẫy: team muốn nhảy thẳng vào execution. Khóa: norming là cầu nối sang performing." },
        { id: "e", text: "Adjourning → forming → storming → norming → performing", isCorrect: false, rationale: "Cơ chế: adjourning là cuối với nhóm tạm thời. Bẫy: có thể nghĩ project bắt đầu bằng closure của team cũ. Khóa: Tuckman forward sequence bắt đầu bằng forming." },
      ],
      difficulty: "basic",
      conceptTested: "Tuckman stages",
      takeaway: "Tuckman: forming → storming → norming → performing → adjourning; team thường phải đi qua xung đột trước khi có chuẩn vận hành.",
    },
    {
      id: "q06",
      stem: "A team argues over control, status, and direction. Which Tuckman stage does this most clearly indicate?",
      options: [
        { id: "a", text: "Storming", isCorrect: true, rationale: "Cơ chế: storming là tranh giành status/kiểm soát và conflict về định hướng. Bẫy: thấy team đang làm việc nên tưởng performing. Khóa: control/status conflict = storming." },
        { id: "b", text: "Forming", isCorrect: false, rationale: "Cơ chế: forming là thăm dò và bất định ban đầu, chưa phải tranh giành mạnh. Bẫy: direction chưa rõ cũng có ở forming. Khóa: arguing over control là storming." },
        { id: "c", text: "Norming", isCorrect: false, rationale: "Cơ chế: norming hình thành chuẩn chung và cohesion. Bẫy: tranh luận có thể dẫn tới norms. Khóa: hiện tượng trong stem là conflict, chưa phải norms." },
        { id: "d", text: "Performing", isCorrect: false, rationale: "Cơ chế: performing tập trung vào hoàn thành nhiệm vụ với cấu trúc ổn định. Bẫy: high activity dễ nhầm performing. Khóa: status/control conflict chưa ổn định." },
        { id: "e", text: "Adjourning", isCorrect: false, rationale: "Cơ chế: adjourning là wrap-up/giải tán nhóm tạm thời. Bẫy: conflict cuối project cũng có thể xảy ra. Khóa: status/control là signature của storming." },
      ],
      difficulty: "basic",
      conceptTested: "Recognizing Tuckman stages",
      takeaway: "Storming không phải lỗi bất thường; đó là giai đoạn đội phải xử lý quyền lực, vai trò và định hướng.",
    },
    {
      id: "q07",
      stem: "Which three categories make up Robbins and Judge's Team Effectiveness Model?",
      options: [
        { id: "a", text: "Context, composition, and process", isCorrect: true, rationale: "Cơ chế: Exhibit 11-3 gom team effectiveness vào context, composition, process. Bẫy: nhiều khung slide như GRPI cũng có ba/bốn nhóm khác. Khóa: R&J model = context-composition-process." },
        { id: "b", text: "Forming, storming, and norming", isCorrect: false, rationale: "Cơ chế: đây là ba stage đầu của Tuckman, không phải effectiveness model. Bẫy: đều là team framework. Khóa: câu hỏi hỏi Exhibit 11-3." },
        { id: "c", text: "Goals, roles, and interpersonal relationships only", isCorrect: false, rationale: "Cơ chế: đây là phần của GRPI, thiếu processes và không phải R&J model. Bẫy: GRPI dùng chẩn đoán team. Khóa: Team Effectiveness Model có context/composition/process." },
        { id: "d", text: "Psychological safety, dependability, and meaning", isCorrect: false, rationale: "Cơ chế: đây là một phần Google Aristotle factors. Bẫy: cũng nói đội hiệu quả. Khóa: R&J chia ba nhóm rộng hơn." },
        { id: "e", text: "Selecting, training, and rewarding", isCorrect: false, rationale: "Cơ chế: đây là cách turning individuals into team players. Bẫy: cũng là managerial levers. Khóa: không phải model ba nhóm Exhibit 11-3." },
      ],
      difficulty: "basic",
      conceptTested: "Team Effectiveness Model",
      takeaway: "Team effectiveness trong R&J được đọc qua ba lớp: context bên ngoài, composition của đội, và process vận hành.",
    },
    {
      id: "q08",
      stem: "Which option lists the four context factors in the Team Effectiveness Model?",
      options: [
        { id: "a", text: "Adequate resources, leadership and structure, climate of trust, and performance evaluation and reward systems", isCorrect: true, rationale: "Cơ chế: bốn context factors của R&J là resources, leadership/structure, trust, evaluation/reward. Bẫy: dễ trộn với composition như abilities/personality. Khóa: context = điều kiện bối cảnh hỗ trợ team." },
        { id: "b", text: "Abilities, personality, roles, and member preferences", isCorrect: false, rationale: "Cơ chế: đây là composition factors. Bẫy: cũng ảnh hưởng effectiveness. Khóa: hỏi context, không hỏi thành phần." },
        { id: "c", text: "Common purpose, specific goals, team efficacy, and mental models", isCorrect: false, rationale: "Cơ chế: đây là process variables. Bẫy: đều là yếu tố hiệu quả. Khóa: context nằm quanh team, process là cách vận hành." },
        { id: "d", text: "Psychological safety, meaning, impact, and dependability", isCorrect: false, rationale: "Cơ chế: đây là Google Aristotle factors từ slide. Bẫy: psychological safety liên quan trust. Khóa: R&J context có climate of trust và reward systems." },
        { id: "e", text: "Forming, storming, norming, and performing", isCorrect: false, rationale: "Cơ chế: đây là Tuckman stages, không phải context factors. Bẫy: team lifecycle cũng ảnh hưởng hiệu quả. Khóa: context factors là resources/leadership/trust/reward." },
      ],
      difficulty: "basic",
      conceptTested: "Context factors",
      takeaway: "Context tốt cung cấp nguồn lực, cấu trúc/lãnh đạo, trust và hệ thống đánh giá-thưởng phù hợp với đóng góp tập thể.",
    },
    {
      id: "q09",
      stem: "Why should performance evaluation and rewards often include a team-based component?",
      options: [
        { id: "a", text: "Because team output depends on collective contribution and mutual accountability", isCorrect: true, rationale: "Cơ chế: nếu team tạo collective performance, reward phải phản ánh đóng góp tập thể qua group-based appraisal hoặc gainsharing. Bẫy: chỉ thưởng cá nhân có vẻ công bằng hơn. Khóa: team output cần mutual accountability." },
        { id: "b", text: "Because individual accountability should disappear in teams", isCorrect: false, rationale: "Cơ chế: team cần cả trách nhiệm cá nhân và trách nhiệm lẫn nhau. Bẫy: team-based reward bị hiểu thành xóa cá nhân. Khóa: xóa accountability dễ tạo social loafing." },
        { id: "c", text: "Because rewards cannot affect cooperation", isCorrect: false, rationale: "Cơ chế: reward system định hướng hành vi hợp tác hay cá nhân. Bẫy: nghĩ trust chỉ đến từ cảm xúc. Khóa: incentives là context factor." },
        { id: "d", text: "Because teams never need individual performance data", isCorrect: false, rationale: "Cơ chế: vẫn cần dữ liệu cá nhân để chống social loafing và phân vai. Bẫy: team-based component không có nghĩa bỏ individual data. Khóa: cân bằng cá nhân + tập thể." },
        { id: "e", text: "Because self-managed teams have no goals", isCorrect: false, rationale: "Cơ chế: self-managed teams vẫn cần goals và reward rõ. Bẫy: tự quản nghe như tự định tất cả. Khóa: reward theo nhóm phản ánh output chung, không phải thiếu goal." },
      ],
      difficulty: "intermediate",
      conceptTested: "Team-based rewards",
      takeaway: "Reward theo nhóm giúp align incentive với positive synergy, nhưng không được xóa trách nhiệm cá nhân.",
    },
    {
      id: "q10",
      stem: "Which composition choice is most consistent with effective team design?",
      options: [
        { id: "a", text: "Keep the team small enough for coordination and avoid letting one highly disagreeable member dominate the climate", isCorrect: true, rationale: "Cơ chế: R&J khuyên team nhỏ, thường 5-9/two-pizza; personality xấu như very disagreeable có thể kéo cả đội xuống. Bẫy: thêm người giỏi càng nhiều càng tốt. Khóa: composition phải tối ưu coordination và personality fit." },
        { id: "b", text: "Make the team as large as possible to maximize headcount", isCorrect: false, rationale: "Cơ chế: team quá lớn tăng coordination cost và social loafing. Bẫy: nhiều người có vẻ nhiều nguồn lực. Khóa: nhỏ thường tốt hơn." },
        { id: "c", text: "Ignore interpersonal skills if technical skills are strong", isCorrect: false, rationale: "Cơ chế: team cần technical, problem-solving/decision, và interpersonal skills. Bẫy: chuyên môn có vẻ quan trọng nhất. Khóa: team thất bại nếu thiếu phối hợp." },
        { id: "d", text: "Select only people who prefer working alone", isCorrect: false, rationale: "Cơ chế: member preferences là composition factor; ép người không thích team có thể giảm morale/satisfaction. Bẫy: người làm độc lập có thể rất giỏi. Khóa: team player preference matters." },
        { id: "e", text: "Use surface-level diversity as the only criterion for team composition", isCorrect: false, rationale: "Cơ chế: diversity bề mặt có tác động hỗn hợp; cần abilities, personality, roles, size, preferences. Bẫy: diversity quan trọng nhưng không đủ. Khóa: composition là hệ nhiều yếu tố." },
      ],
      difficulty: "intermediate",
      conceptTested: "Composition: personality and size",
      takeaway: "Composition tốt không phải gom thật nhiều người giỏi; đó là đội nhỏ đủ phối hợp, đúng năng lực, đúng personality, đúng preference.",
    },
    {
      id: "q11",
      stem: "Which team role coordinates and integrates the work of others?",
      options: [
        { id: "a", text: "Linker", isCorrect: true, rationale: "Cơ chế: linker coordinates and integrates, nối các phần của team. Bẫy: organizer cũng cung cấp cấu trúc nên dễ nhầm. Khóa: coordinate/integrate = linker." },
        { id: "b", text: "Creator", isCorrect: false, rationale: "Cơ chế: creator khởi xướng ý tưởng sáng tạo. Bẫy: ý tưởng mới có thể kết nối người khác. Khóa: creator không phải vai điều phối chính." },
        { id: "c", text: "Maintainer", isCorrect: false, rationale: "Cơ chế: maintainer fights external battles, bảo vệ đội trước bên ngoài. Bẫy: maintain nghe như giữ team vận hành. Khóa: external battles khác integrate." },
        { id: "d", text: "Controller", isCorrect: false, rationale: "Cơ chế: controller xem xét chi tiết và thực thi quy tắc. Bẫy: kiểm soát nghe như điều phối. Khóa: detail/rules khác coordination." },
        { id: "e", text: "Adviser", isCorrect: false, rationale: "Cơ chế: adviser khuyến khích tìm thêm thông tin. Bẫy: thông tin giúp tích hợp. Khóa: adviser không phải linker." },
      ],
      difficulty: "basic",
      conceptTested: "Nine team roles",
      takeaway: "Trong 9 roles, linker là vai điều phối và tích hợp; creator tạo ý tưởng, maintainer bảo vệ đội, controller giữ chi tiết/quy tắc.",
    },
    {
      id: "q12",
      stem: "Which statement best reflects the chapter's treatment of diversity in team composition?",
      options: [
        { id: "a", text: "Surface-level demographic diversity can have mixed short-term effects, while functional expertise diversity can be beneficial", isCorrect: true, rationale: "Cơ chế: organizational demography có tác động hỗn hợp/ngắn hạn tiêu cực; diversity chức năng/chuyên môn thường tích cực hơn cho information and perspectives. Bẫy: diversity luôn tốt hoặc luôn xấu. Khóa: loại diversity và timeframe quan trọng." },
        { id: "b", text: "All forms of diversity always reduce team performance", isCorrect: false, rationale: "Cơ chế: chức năng/chuyên môn diversity có thể tăng góc nhìn và chất lượng quyết định. Bẫy: conflict ban đầu làm diversity trông xấu. Khóa: không có always." },
        { id: "c", text: "Demographic similarity guarantees positive synergy", isCorrect: false, rationale: "Cơ chế: similarity có thể giảm friction nhưng không bảo đảm synergy. Bẫy: giống nhau dễ trust nhanh. Khóa: synergy cần composition/process/context." },
        { id: "d", text: "Cultural differences never become easier over time", isCorrect: false, rationale: "Cơ chế: khác biệt văn hóa có thể cản trở ngắn hạn rồi dịu đi. Bẫy: short-term friction dễ bị kéo dài thành kết luận vĩnh viễn. Khóa: time matters." },
        { id: "e", text: "Diversity belongs only to process, not composition", isCorrect: false, rationale: "Cơ chế: diversity/organizational demography nằm trong composition. Bẫy: diversity ảnh hưởng process nên tưởng thuộc process. Khóa: model placement là composition." },
      ],
      difficulty: "advanced",
      conceptTested: "Diversity and organizational demography",
      takeaway: "Diversity cần đọc theo loại và thời gian: bề mặt có thể gây friction ngắn hạn, chuyên môn/chức năng có thể giúp đội xử lý vấn đề tốt hơn.",
    },
    {
      id: "q13",
      stem: "A team periodically reflects on its purpose and adjusts its plan based on what it learns. Which process variable is this?",
      options: [
        { id: "a", text: "Reflexivity within a common plan and purpose", isCorrect: true, rationale: "Cơ chế: reflexivity là đội phản tư và điều chỉnh kế hoạch trong common purpose. Bẫy: nghe giống team efficacy vì đội tự tin học được. Khóa: reflect and adjust plan = reflexivity." },
        { id: "b", text: "Organizational demography", isCorrect: false, rationale: "Cơ chế: organizational demography thuộc composition, nói về đặc điểm nhân khẩu học. Bẫy: team members khác nhau có thể phản tư tốt hơn. Khóa: stem nói process vận hành." },
        { id: "c", text: "Climate of trust", isCorrect: false, rationale: "Cơ chế: trust là context factor hỗ trợ phản tư, nhưng không phải hành vi reflect/adjust. Bẫy: cần trust để nói thật. Khóa: variable trực tiếp là reflexivity." },
        { id: "d", text: "Two-pizza rule", isCorrect: false, rationale: "Cơ chế: two-pizza nói size of teams trong composition. Bẫy: team nhỏ dễ reflect. Khóa: không phải size." },
        { id: "e", text: "Problem-solving team type", isCorrect: false, rationale: "Cơ chế: đó là type of team, không phải process variable. Bẫy: phản tư có thể dùng để solve problems. Khóa: process variable là reflexivity." },
      ],
      difficulty: "intermediate",
      conceptTested: "Process variables",
      takeaway: "Reflexivity là năng lực đội dừng lại, nhìn lại mục đích/kế hoạch và điều chỉnh, không chỉ chạy theo kế hoạch cũ.",
    },
    {
      id: "q14",
      stem: "Which statement correctly handles conflict and social loafing as team process issues?",
      options: [
        { id: "a", text: "Moderate task conflict can help, relationship conflict usually harms, and clear individual accountability helps prevent social loafing", isCorrect: true, rationale: "Cơ chế: process tốt dùng task conflict vừa phải, tránh relationship conflict và thiết kế accountability để chống ăn theo. Bẫy: nghĩ mọi conflict đều xấu hoặc team reward xóa trách nhiệm cá nhân. Khóa: type of conflict + accountability." },
        { id: "b", text: "All conflict should be eliminated from effective teams", isCorrect: false, rationale: "Cơ chế: task conflict vừa phải có thể tốt. Bẫy: hòa khí trông như teamwork. Khóa: loại conflict quan trọng." },
        { id: "c", text: "Relationship conflict is the best source of creativity", isCorrect: false, rationale: "Cơ chế: relationship conflict gần như luôn hại. Bẫy: cảm xúc mạnh có vẻ tạo năng lượng. Khóa: creativity đến từ task debate an toàn hơn." },
        { id: "d", text: "Social loafing is solved by making individual contributions invisible", isCorrect: false, rationale: "Cơ chế: invisibility làm loafing dễ hơn; cần accountability rõ. Bẫy: ẩn danh có thể giảm pressure. Khóa: contribution identifiable." },
        { id: "e", text: "Conflict and loafing are composition variables only", isCorrect: false, rationale: "Cơ chế: conflict levels và social loafing thuộc process trong model. Bẫy: personality/size cũng ảnh hưởng chúng. Khóa: placement trong Exhibit 11-3 là process." },
      ],
      difficulty: "intermediate",
      conceptTested: "Conflict and social loafing in process",
      takeaway: "Team process tốt không xóa mọi conflict; nó giữ task conflict ở mức hữu ích, chặn relationship conflict và thiết kế accountability để tránh social loafing.",
    },
    {
      id: "q15",
      stem: "In Google's Project Aristotle, which factor was identified as the most important for effective teams?",
      options: [
        { id: "a", text: "Psychological safety", isCorrect: true, rationale: "Cơ chế: slide nhấn psychological safety là yếu tố quan trọng nhất trong Aristotle. Bẫy: dependability và structure cũng rất quan trọng. Khóa: #1 factor = psychological safety." },
        { id: "b", text: "Team size above fifteen", isCorrect: false, rationale: "Cơ chế: team nhỏ thường tốt hơn; size lớn không phải Aristotle factor quan trọng nhất. Bẫy: nhiều người có vẻ nhiều năng lực. Khóa: safety, not headcount." },
        { id: "c", text: "Absence of conflict", isCorrect: false, rationale: "Cơ chế: psychological safety cho phép disagree safely; không phải xóa conflict. Bẫy: an toàn bị hiểu thành yên lặng. Khóa: safety = speak up, not silence." },
        { id: "d", text: "PowerPoint-based meetings", isCorrect: false, rationale: "Cơ chế: Bezos rules còn nói no PowerPoint, dùng narrative memo. Bẫy: meeting format có thể ảnh hưởng clarity. Khóa: Aristotle #1 là psychological safety." },
        { id: "e", text: "Only individual technical skill", isCorrect: false, rationale: "Cơ chế: technical skill quan trọng nhưng Aristotle factors nhấn team climate/process. Bẫy: team performance thường bị quy về talent. Khóa: psychological safety là nền." },
      ],
      difficulty: "basic",
      conceptTested: "Psychological safety and Aristotle",
      takeaway: "Psychological safety là nền để thành viên nói thật, hỏi, thừa nhận lỗi và phản biện mà không sợ bị phạt.",
    },
    {
      id: "q16",
      stem: "Which sequence best matches Lencioni's five dysfunctions from the base upward?",
      options: [
        { id: "a", text: "Absence of trust → fear of conflict → lack of commitment → avoidance of accountability → inattention to results", isCorrect: true, rationale: "Cơ chế: Lencioni xây tháp từ thiếu trust, sợ conflict, thiếu commitment, né accountability, rồi không chú ý results. Bẫy: đảo conflict và trust vì conflict dễ thấy hơn. Khóa: đáy tháp là absence of trust." },
        { id: "b", text: "Fear of conflict → absence of trust → lack of commitment → inattention to results → accountability", isCorrect: false, rationale: "Cơ chế: fear of conflict xuất phát từ absence of trust, không phải nền đầu tiên. Bẫy: conflict là triệu chứng dễ thấy. Khóa: trust là đáy." },
        { id: "c", text: "Inclusion safety → learner safety → contributor safety → challenger safety → results", isCorrect: false, rationale: "Cơ chế: bốn safety đầu là Tim Clark, không phải Lencioni. Bẫy: đều là trust/safety framework. Khóa: Lencioni dùng dysfunctions." },
        { id: "d", text: "Dependability → meaning → impact → structure → psychological safety", isCorrect: false, rationale: "Cơ chế: đây là trộn Google Aristotle factors và đảo trọng tâm. Bẫy: cùng section s7. Khóa: câu hỏi hỏi Lencioni." },
        { id: "e", text: "Forming → storming → norming → performing → adjourning", isCorrect: false, rationale: "Cơ chế: đây là Tuckman lifecycle. Bẫy: cũng là sequence 5 bước. Khóa: Lencioni sequence bắt đầu absence of trust." },
      ],
      difficulty: "intermediate",
      conceptTested: "Lencioni and psychological safety frameworks",
      takeaway: "Lencioni đặt trust ở đáy: thiếu trust làm đội sợ conflict, thiếu commitment, né accountability và cuối cùng quên results.",
    },
    {
      id: "q17",
      stem: "Which practice best reflects both high-trust team behavior and Bezos-style meeting discipline?",
      options: [
        { id: "a", text: "Encourage disagreement, then commit, and end with clear ownership", isCorrect: true, rationale: "Cơ chế: high-trust team biết disagree well; Bezos rules khuyến khích disagreement rồi commit và kết thúc bằng ownership rõ. Bẫy: trust bị hiểu là không bất đồng. Khóa: disagree well + clear ownership." },
        { id: "b", text: "Avoid all disagreement to preserve harmony", isCorrect: false, rationale: "Cơ chế: né disagreement tạo fear of conflict/hòa khí giả. Bẫy: harmony trông như trust. Khóa: trust cho phép conflict lành mạnh." },
        { id: "c", text: "Use PowerPoint as the required format for every meeting", isCorrect: false, rationale: "Cơ chế: Bezos rule nói no PowerPoint, dùng narrative memo và đọc im lặng. Bẫy: slide có vẻ rõ ràng. Khóa: narrative memo, not PowerPoint." },
        { id: "d", text: "Invite as many people as possible to every meeting", isCorrect: false, rationale: "Cơ chế: two-pizza rule giữ meeting/team nhỏ. Bẫy: nhiều người có vẻ inclusive. Khóa: meeting effective cần size hợp lý." },
        { id: "e", text: "Hide mistakes so the team stays confident", isCorrect: false, rationale: "Cơ chế: vulnerability là dám nhận lỗi và xin giúp. Bẫy: confidence giả tạo có vẻ bảo vệ morale. Khóa: high trust cần honesty." },
      ],
      difficulty: "intermediate",
      conceptTested: "High-trust behaviors and Bezos rules",
      takeaway: "High-trust team không né bất đồng; họ disagree well, commit sau khi quyết, và kết thúc bằng ownership rõ.",
    },
    {
      id: "q18",
      stem: "When should a manager be most skeptical about using a team?",
      options: [
        { id: "a", text: "When the task does not require multiple perspectives, lacks a common purpose, and has little interdependence among members", isCorrect: true, rationale: "Cơ chế: R&J nêu 3 tests: complexity/multiple perspectives, common purpose, interdependence. Bẫy: team nghe hiện đại nên tưởng luôn tốt hơn. Khóa: nếu không cần phụ thuộc lẫn nhau, team có thể chỉ thêm chi phí." },
        { id: "b", text: "Whenever the task is complex and members depend on each other", isCorrect: false, rationale: "Cơ chế: complexity và interdependence là lý do nên cân nhắc team. Bẫy: phức tạp cũng tạo coordination cost. Khóa: test hỏi lợi ích team có vượt chi phí không." },
        { id: "c", text: "Whenever members can form a common purpose", isCorrect: false, rationale: "Cơ chế: common purpose là một điều kiện ủng hộ team. Bẫy: common purpose chưa đủ một mình. Khóa: skeptical khi thiếu common purpose." },
        { id: "d", text: "Whenever psychological safety is important", isCorrect: false, rationale: "Cơ chế: psychological safety quan trọng cho effective teams; không phải lý do tránh team. Bẫy: xây safety tốn công. Khóa: nếu dùng team thì safety càng cần." },
        { id: "e", text: "Whenever the team is small enough for the two-pizza rule", isCorrect: false, rationale: "Cơ chế: size nhỏ thường hỗ trợ team effectiveness. Bẫy: nhỏ không tự bảo đảm cần team. Khóa: skeptical dựa trên task tests, không chỉ size." },
      ],
      difficulty: "advanced",
      conceptTested: "When not to use teams",
      takeaway: "Team không phải luôn là câu trả lời — nếu công việc không cần phụ thuộc lẫn nhau thì cá nhân làm có khi tốt và rẻ hơn.",
    },
  ],
  status: "ready",
  source:
    "Robbins & Judge, Organizational Behavior — Chapter 11 'From Groups to Teams' (pp.200-215); Slide 'OB-Topic 9-Team lifecycle and Team effectiveness' (Dr Lan Anh, IM2017, HCMUT); bổ sung slide: Tuckman (team stages), Google re:Work Project Aristotle, Tim R. Clark '4 Stages of Psychological Safety', Patrick Lencioni 'The Five Dysfunctions of a Team', Jeff Bezos' meeting rules.",
};

const topic10: Chapter = {
  slug: "topic-10",
  order: 10,
  title: "Topic 10 — Leadership and Followership",
  bigIdea:
    "Lãnh đạo = năng lực ẢNH HƯỞNG một nhóm hướng tới tầm nhìn — không phải chức vụ, không phải quyền lực formal. Lịch sử tư tưởng lãnh đạo là hành trình dịch trọng tâm khỏi 'cá nhân anh hùng': từ leader CÓ tố chất gì (Trait) → LÀM hành vi gì (Behavioral) → hiệu quả TÙY tình huống nào (Contingency) → KIẾN TẠO ý nghĩa, giá trị, cảm hứng ra sao (Contemporary). Và vì ảnh hưởng là HAI CHIỀU, followership chính là 'nửa còn lại của câu chuyện' — không có follower giỏi thì không có leader giỏi. Leadership bền vững đứng trên đạo đức, niềm tin và sự làm gương.",
  bigIdeaPillars: [
    {
      label: "Ảnh hưởng, không phải chức vụ",
      body: "Leadership là năng lực influence một nhóm hướng tới tầm nhìn (R&J p217) — khác management (quản trị trật tự & ổn định; Phil Dourado: hai mode khác nhau nhưng cùng cần cho tổ chức). 'Leadership is influence — nothing more, nothing less' (Maxwell). Nguồn quyền lực: institutional/formal (outside-in) vs personal/informal (inside-out); 6 bases (French & Raven: legitimate, reward, coercive, expert, referent, informational) + relationship power (Blanchard). Aristotle: chinh phục MIND bằng logic, HEART bằng emotion, RESPECT bằng knowledge.",
    },
    {
      label: "4 lăng kính 'What makes a leader?'",
      body: "Trait (1900s — leader bẩm sinh; Great Man; nhưng traits chỉ dự đoán emergence tốt hơn là phân biệt effective/ineffective) → Behavioral (1950s — học được; Ohio: initiating structure & consideration; Michigan; Managerial Grid) → Contingency (1960s — tùy tình huống; Fiedler LPC, Situational Leadership Hersey-Blanchard/Blanchard S1-S4, Path-Goal) → Contemporary (1980s+ — kiến tạo ý nghĩa: Full-range Transactional↔Transformational 4 I's, Charismatic, Servant, Authentic, Emotional, Agile). Mỗi lăng kính bổ sung nhau; trọng tâm dịch từ 'con người leader' sang 'quan hệ + bối cảnh'.",
    },
    {
      label: "Nửa còn lại: Followership",
      body: "Ảnh hưởng 2 chiều → follower KHÔNG thụ động (leader + follower cùng kiến tạo — 'Leadership is Half the Story'). LMX: leader phân ingroup/outgroup → self-fulfilling prophecy (R&J p222). Kelley 5 followership types (2 trục: chủ động-thụ động × tư duy phản biện-lệ thuộc): Sheep, Yes People, Alienated, Star/Effective, Pragmatist. Effective followership cần COURAGE (Chaleff). What followers want: trust, compassion, stability, hope. '≈90% thành công tổ chức đến từ follower.'",
    },
    {
      label: "Leader 'tốt': đạo đức - niềm tin - làm gương",
      body: "Leadership KHÔNG value-free (R&J p230): ethical leadership (socialized charismatic — other-centered, role-model đạo đức → nhiều OCB, ít conflict); servant leadership (vượt tư lợi, phục vụ để follower phát triển); authentic leadership (George: purpose/values/relationships/self-discipline/heart). TRUST là nền tảng: integrity + benevolence + ability; mất niềm tin do LỪA DỐI thì gần như không lấy lại. Mentoring nuôi leader kế cận. Thách thức: attribution theory (leadership đôi khi chỉ là quy gán) & substitutes/neutralizers (có lúc leadership bị thay thế/vô hiệu).",
    },
  ],
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
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "Leadership: (A) ảnh hưởng & quyền lực, (B) 4 lăng kính 'what makes a leader', (C) followership — nửa còn lại, (D) leader tốt: đạo đức/niềm tin + thách thức.",
    nodes: [
      {
        id: "ld",
        label: "Leadership",
        group: "concept",
        sectionId: "s1",
        detail: "Ảnh hưởng nhóm tới tầm nhìn; leader & follower + bối cảnh kiến tạo lẫn nhau.",
      },
      {
        id: "g_inf",
        label: "A. Ảnh hưởng & quyền lực",
        group: "concept",
        parent: "ld",
        sectionId: "s1",
        detail: "Leadership vs management; nguồn quyền lực.",
      },
      {
        id: "g_lens",
        label: "B. 4 lăng kính leader",
        group: "concept",
        parent: "ld",
        sectionId: "s3",
        detail: "Trait → Behavioral → Contingency → Contemporary.",
      },
      {
        id: "g_fol",
        label: "C. Followership",
        group: "concept",
        parent: "ld",
        sectionId: "s9",
        detail: "LMX, Kelley 5 types, courage, what followers want.",
      },
      {
        id: "g_good",
        label: "D. Leader tốt & thách thức",
        group: "concept",
        parent: "ld",
        sectionId: "s8",
        detail: "Ethical/servant/authentic, trust, mentoring, challenges.",
      },
      {
        id: "t_lvm",
        label: "Leadership vs management",
        group: "term",
        parent: "g_inf",
        sectionId: "s1",
        detail: "Leadership hướng thay đổi/tầm nhìn; management giữ trật tự/vận hành.",
      },
      {
        id: "t_power",
        label: "Power: 2 sources, 6 bases",
        group: "term",
        parent: "g_inf",
        sectionId: "s2",
        detail: "Formal vs personal power; legitimate, reward, coercive, expert, referent, informational.",
      },
      {
        id: "t_trait",
        label: "Trait approach",
        group: "term",
        parent: "g_lens",
        sectionId: "s3",
        detail: "Traits dự đoán leadership emergence tốt hơn effectiveness.",
      },
      {
        id: "t_behav",
        label: "Behavioral approach",
        group: "term",
        parent: "g_lens",
        sectionId: "s4",
        detail: "Leader làm gì: initiating structure, consideration, production/employee orientation.",
      },
      {
        id: "t_cont",
        label: "Contingency approach",
        group: "term",
        parent: "g_lens",
        sectionId: "s5",
        detail: "Hiệu quả tùy fit giữa leader, follower và situation.",
      },
      {
        id: "t_charis",
        label: "Charismatic + contemporary map",
        group: "term",
        parent: "g_lens",
        sectionId: "s6",
        detail: "Charismatic, authentic, emotional, agile và các nhóm contemporary.",
      },
      {
        id: "t_trans",
        label: "Transactional vs Transformational",
        group: "term",
        parent: "g_lens",
        sectionId: "s7",
        detail: "Full-range model từ laissez-faire tới transformational 4 I's.",
      },
      {
        id: "t_lmx",
        label: "LMX ingroup/outgroup",
        group: "term",
        parent: "g_fol",
        sectionId: "s9",
        detail: "Leader-member exchange tạo ingroup/outgroup và self-fulfilling prophecy.",
      },
      {
        id: "t_kelley",
        label: "Kelley 5 followership types",
        group: "term",
        parent: "g_fol",
        sectionId: "s9",
        detail: "Sheep, Yes People, Alienated, Star/Effective, Pragmatist.",
      },
      {
        id: "t_esa",
        label: "Ethical/Servant/Authentic",
        group: "term",
        parent: "g_good",
        sectionId: "s8",
        detail: "Ba dạng value-based leadership với nền đạo đức và phát triển follower.",
      },
      {
        id: "t_trust",
        label: "Trust & mentoring",
        group: "term",
        parent: "g_good",
        sectionId: "s10",
        detail: "Integrity, benevolence, ability; mentoring career + psychosocial.",
      },
      {
        id: "t_chal",
        label: "Attribution + substitutes/neutralizers",
        group: "term",
        parent: "g_good",
        sectionId: "s11",
        detail: "Leadership có thể bị quy gán, thay thế hoặc vô hiệu hóa.",
      },
    ],
    edges: [
      { from: "ld", to: "g_inf", label: "ảnh hưởng" },
      { from: "ld", to: "g_lens", label: "lăng kính" },
      { from: "ld", to: "g_fol", label: "followership" },
      { from: "ld", to: "g_good", label: "leader tốt" },
      { from: "g_inf", to: "t_lvm", label: "vs mgmt" },
      { from: "g_inf", to: "t_power", label: "power" },
      { from: "g_lens", to: "t_trait", label: "trait" },
      { from: "g_lens", to: "t_behav", label: "behavioral" },
      { from: "g_lens", to: "t_cont", label: "contingency" },
      { from: "g_lens", to: "t_charis", label: "charisma" },
      { from: "g_lens", to: "t_trans", label: "trans" },
      { from: "g_fol", to: "t_lmx", label: "lmx" },
      { from: "g_fol", to: "t_kelley", label: "kelley" },
      { from: "g_good", to: "t_esa", label: "e/s/a" },
      { from: "g_good", to: "t_trust", label: "trust" },
      { from: "g_good", to: "t_chal", label: "challenges" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "Nature of leadership: influence, not position",
      blocks: [
        calloutBlock(
          "key",
          "Leadership là gì? (R&J p217)",
          "Leadership = năng lực ẢNH HƯỞNG một nhóm hướng tới đạt được tầm nhìn/tập mục tiêu. Không phải chức danh: nonsanctioned leadership (ảnh hưởng nảy sinh NGOÀI cơ cấu formal) đôi khi quan trọng hơn ảnh hưởng formal. Bản chất = vision + influence + inspiration, bắt đầu từ chính mình: leadership begins in you.",
        ),
        comparisonBlock(
          "Leadership vs Management (slide 9)",
          ["Tiêu chí", "Leadership", "Management"],
          [
            {
              label: "Trọng tâm",
              cells: ["Thay đổi, tầm nhìn, phát triển.", "Trật tự, ổn định, vận hành đúng."],
            },
            {
              label: "Cách làm",
              cells: ["Truyền cảm hứng, tạo hướng đi, gắn kết con người.", "Lập kế hoạch, tổ chức, kiểm soát, giải quyết vấn đề."],
            },
            {
              label: "Câu hỏi",
              cells: ['"Điều gì đúng nên làm?" (do the right things).', '"Làm sao cho đúng?" (do things right).'],
            },
            {
              label: "Quan hệ",
              cells: ["Hai chức năng bổ trợ — quản trị & lãnh đạo cùng cần cho thành công; một người có thể vừa manager vừa leader.", "(bổ trợ, không loại trừ nhau)."],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Nature of leadership (slide 6-8)",
          "Các định nghĩa nền: Drucker (làm đúng việc & khiến người khác tin cậy); Grace Hopper (leadership is a two-way street, loyalty up and loyalty down); Maxwell (leadership is influence — nothing more, nothing less). Thông điệp slide: ai cũng có thể là leader ở vị trí của mình.",
        ),
      ],
      keyTerms: [
        { term: "Leadership", definition: "Khả năng ảnh hưởng một nhóm hướng tới tầm nhìn hoặc mục tiêu." },
        { term: "Nonsanctioned leadership", definition: "Ảnh hưởng lãnh đạo nảy sinh ngoài cơ cấu quyền lực formal." },
        { term: "Management", definition: "Chức năng tạo trật tự, ổn định, kế hoạch, tổ chức và kiểm soát." },
      ],
    },
    {
      id: "s2",
      heading: "Power & influence: nguồn sức mạnh của leader",
      blocks: [
        calloutBlock(
          "key",
          "Power = năng lực influence người khác & sự kiện (slide 42)",
          "Hai nguồn: Institutional/Formal power (đến từ vị trí, outside-in) và Personal/Informal power (đến từ con người/quan hệ, inside-out). Leader mạnh dựa nhiều vào personal power.",
        ),
        comparisonBlock(
          "6 bases of power (French & Raven — slide 43)",
          ["Base", "Nội dung"],
          [
            { label: "Legitimate", cells: ["Quyền lực từ vị trí/chức danh chính thức trong tổ chức."] },
            { label: "Reward", cells: ["Khả năng ban thưởng như lương, thăng tiến, khen."] },
            { label: "Coercive", cells: ["Khả năng trừng phạt/ép buộc, dựa trên sợ hãi."] },
            { label: "Expert", cells: ["Uy tín từ chuyên môn, kỹ năng, tri thức."] },
            { label: "Referent", cells: ["Sức hút cá nhân, được ngưỡng mộ & muốn noi theo."] },
            { label: "Informational", cells: ["Kiểm soát thông tin mà người khác cần."] },
          ],
        ),
        calloutBlock(
          "note",
          "Relationship power & 3 appeals (slide 44-45)",
          "Blanchard bổ sung relationship power: quyền lực từ chất lượng mối quan hệ. Ba cách gây ảnh hưởng: logical appeal (lý lẽ), emotional appeal (cảm xúc/giá trị), cooperative appeal (cùng hợp tác). Aristotle: chinh phục MIND bằng LOGIC, HEART bằng EMOTION, RESPECT bằng KNOWLEDGE.",
        ),
      ],
      keyTerms: [
        { term: "Formal power", definition: "Quyền lực đến từ vị trí/chức danh trong tổ chức." },
        { term: "Personal power", definition: "Quyền lực đến từ con người, chuyên môn, sức hút và quan hệ." },
        { term: "Referent power", definition: "Quyền lực từ sự ngưỡng mộ và mong muốn noi theo." },
        { term: "Expert power", definition: "Quyền lực từ chuyên môn và năng lực được công nhận." },
      ],
    },
    {
      id: "s3",
      heading: "Evolution of leadership thinking + Trait approach",
      blocks: [
        flowBlock(
          "s3",
          "4 lăng kính 'What makes a leader?' (slide 10-21)",
          "horizontal",
          [
            { id: "a1", label: "Trait (1900s)", group: "concept", detail: "Leader được nhìn qua tố chất/phẩm chất cá nhân." },
            { id: "a2", label: "Behavioral (1950s)", group: "concept", detail: "Leader được nhìn qua hành vi có thể học/đào tạo." },
            { id: "a3", label: "Contingency (1960s)", group: "concept", detail: "Hiệu quả lãnh đạo tùy fit với tình huống." },
            { id: "a4", label: "Contemporary (1980s+)", group: "concept", detail: "Leader kiến tạo ý nghĩa, giá trị, cảm hứng và quan hệ." },
          ],
          [
            { from: "a1", to: "a2", label: "hành vi" },
            { from: "a2", to: "a3", label: "tình huống" },
            { from: "a3", to: "a4", label: "ý nghĩa" },
          ],
          "Trọng tâm dịch dần từ tố chất cá nhân → hành vi → tình huống → kiến tạo ý nghĩa & quan hệ.",
        ),
        calloutBlock(
          "key",
          "Trait theories (R&J p217)",
          "Trait theories xét phẩm chất & đặc điểm cá nhân phân biệt leader với non-leader. Hai kết luận hiện đại: (1) traits dự đoán leadership — Big Five (extraversion mạnh nhất), EI; (2) traits dự đoán sự XUẤT HIỆN (emergence) & vẻ ngoài leadership TỐT HƠN là phân biệt leader hiệu quả vs không hiệu quả. Có tố chất chưa đảm bảo lãnh đạo giỏi.",
        ),
        calloutBlock(
          "note",
          "Emotional leadership (slide 24)",
          "Nhánh trait hiện đại nhấn EI (Goleman): leader hiệu quả có self-awareness, self-regulation, motivation, empathy, social skills → kết nối đội, giữ bình tĩnh dưới áp lực, biến thách thức thành cơ hội. **Dark-Side traits & leadership (sách, mục Trait Theories):** điểm normative (GIỮA thang) trên các Dark-Side traits (Machiavellianism, narcissism, psychopathy) là TỐI ƯU cho leadership — cả điểm thấp lẫn cao đều gắn với lãnh đạo kém hiệu quả; éo le là emotional stability cao có thể làm hành vi kém hiệu quả nặng thêm, còn Dark-Side cao + emotional stability cao lại giúp EMERGENCE (nổi lên thành leader) chứ không giúp effectiveness. Self-awareness + self-regulation giúp leader kiểm soát tác động của Dark-Side traits.",
        ),
      ],
      keyTerms: [
        { term: "Trait theories of leadership", definition: "Cách tiếp cận tìm phẩm chất cá nhân phân biệt leader với non-leader." },
        { term: "Leadership emergence", definition: "Việc một người được nhìn nhận/xuất hiện như leader." },
        { term: "Emotional intelligence", definition: "Năng lực nhận biết, điều chỉnh cảm xúc bản thân và hiểu cảm xúc người khác." },
      ],
    },
    {
      id: "s4",
      heading: "Behavioral approaches",
      blocks: [
        calloutBlock(
          "key",
          "Behavioral theories (R&J p218)",
          "Nếu HÀNH VI phân biệt leader thì có thể ĐÀO TẠO ra leader, khác trait — bẩm sinh. Trọng tâm: leader LÀM GÌ.",
        ),
        comparisonBlock(
          "Ohio State & Michigan studies (R&J p218)",
          ["Nghiên cứu", "Chiều 1", "Chiều 2"],
          [
            {
              label: "Ohio State",
              cells: [
                "Initiating structure — định hình vai trò & nhiệm vụ hướng tới mục tiêu (task-oriented).",
                "Consideration — quan hệ dựa trên tin tưởng, tôn trọng cảm xúc nhân viên (people-oriented).",
              ],
            },
            {
              label: "Michigan",
              cells: [
                "Production-oriented — nhấn khía cạnh kỹ thuật/nhiệm vụ.",
                "Employee-oriented — nhấn quan hệ liên cá nhân & nhu cầu nhân viên.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Managerial Grid (Blake & Mouton — slide 13)",
          "Lưới 2 trục concern for people × concern for production → định vị phong cách (ví dụ 9,9 = team management). Hàm ý: leader tốt cân cả hai mối quan tâm. **Khác biệt văn hóa — GLOBE (sách, mục Cultural Differences):** nghiên cứu GLOBE (18,000 leaders, 825 tổ chức, 62 nước) cho thấy preference với 2 chiều hành vi khác nhau theo nước: Brazil chuộng consideration (không thích leader tự quyết một mình); Pháp nhìn leader kiểu bureaucratic hơn → initiating structure (task-oriented) hợp, consideration cao có thể phản tác dụng; Trung Quốc cần CẢ HAI (văn hóa lịch sự, không vị kỷ NHƯNG performance orientation cao).",
        ),
      ],
      keyTerms: [
        { term: "Initiating structure", definition: "Hành vi leader định hình vai trò, nhiệm vụ và mục tiêu." },
        { term: "Consideration", definition: "Hành vi leader quan tâm, tôn trọng và xây trust với nhân viên." },
        { term: "Managerial grid", definition: "Khung concern for people × concern for production để đọc phong cách lãnh đạo." },
      ],
    },
    {
      id: "s5",
      heading: "Contingency approaches",
      blocks: [
        calloutBlock(
          "key",
          "Câu hỏi contingency (slide 14)",
          "Không có phong cách tốt nhất tuyệt đối — hiệu quả TÙY tình huống. Ba yếu tố tương tác: Leader × Followers × Situation. Câu hỏi quản trị: đổi tổ chức/tình huống cho hợp leader hay đổi hành vi leader cho hợp tình huống?",
        ),
        comparisonBlock(
          "Các mô hình contingency (R&J p220-222)",
          ["Mô hình", "Nội dung"],
          [
            {
              label: "Fiedler model",
              cells: ["Hiệu quả = khớp giữa phong cách leader (đo bằng LPC — least preferred coworker) và situational favorableness (leader-member relations, task structure, position power). Phong cách khá cố định → nên đổi tình huống cho hợp leader."],
            },
            {
              label: "Situational Leadership",
              cells: ["Điều chỉnh phong cách theo readiness/độ trưởng thành của follower. Blanchard SLII: S1 Directing, S2 Coaching, S3 Supporting, S4 Delegating — dịch theo năng lực & cam kết của cấp dưới."],
            },
            {
              label: "Path-Goal theory",
              cells: ["Leader 'dọn đường' tới mục tiêu: chọn hành vi directive/supportive/participative/achievement tùy đặc điểm follower & môi trường để tăng động lực."],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Summary: 3 nền tảng approach (slide 19)",
          "Trait — leadership bẩm sinh, phải nhận diện leader qua tố chất. Behavioral — leadership là kỹ năng, phải dạy hành vi đúng. Contingency — leadership còn tùy môi trường leader tồn tại. Ba cách bổ sung nhau. **Leader-participation model (sách, mục Contingency Theories):** contingency theory thứ 4 — CÁCH leader ra quyết định quan trọng ngang NỘI DUNG quyết định; leader phải điều chỉnh MỨC ĐỘ THAM GIA của cấp dưới vào việc ra quyết định theo task structure (routine / nonroutine / ở giữa). Giới hạn: model chỉ khuyến nghị loại quyết định nào nên participative, không phủ hết hành vi lãnh đạo.",
        ),
      ],
      keyTerms: [
        { term: "Fiedler model", definition: "Mô hình fit giữa leader style (LPC) và situational favorableness." },
        { term: "Situational leadership", definition: "Phong cách lãnh đạo điều chỉnh theo readiness/năng lực-cam kết của follower." },
        { term: "Path-goal theory", definition: "Leader dọn đường tới mục tiêu bằng cách chọn hành vi phù hợp follower và môi trường." },
        { term: "leader-participation model", definition: "Contingency theory gắn hành vi leader với mức độ participation của cấp dưới trong decision making, điều chỉnh theo task structure (sách)." },
      ],
    },
    {
      id: "s6",
      heading: "Contemporary theories map + Charismatic leadership",
      blocks: [
        comparisonBlock(
          "Contemporary leadership — nhóm theo era (slide 21)",
          ["Nhóm (era)", "Các dạng"],
          [
            { label: "Full-range (từ 1970s)", cells: ["Charismatic, Transactional, Transformational."] },
            { label: "Value-based & role-model (từ 1980s)", cells: ["Servant, Value-based, Authentic."] },
            { label: "Inspirational (từ 1990s)", cells: ["Visionary, Emotional, Shared, Followership."] },
            { label: "Resilient (từ 2000s, mạnh sau Covid)", cells: ["Inclusive, Mindful, Agile."] },
          ],
        ),
        calloutBlock(
          "key",
          "Charismatic leadership (House — R&J p224)",
          "Follower quy cho leader năng lực anh hùng khi quan sát hành vi. 4 đặc điểm: vision & articulation, personal risk, sensitivity to followers' needs, unconventional behavior. Mặt tối: charisma có thể phục vụ mục đích tư lợi/độc hại → cần checks & balances.",
        ),
        calloutBlock(
          "note",
          "Authentic, Emotional, Agile (slide 26-30)",
          "Authentic (George: hiểu purpose, sống theo values, quan hệ tin cậy, self-discipline, hành động từ trái tim). Gartner 3 components: Authentic + Empathetic + Adaptive. Agile tạo môi trường cho self-managing team. HBR 6 styles (Goleman): coercive, authoritative, pacesetting, affiliative, democratic, coaching — situation matters.",
        ),
      ],
      keyTerms: [
        { term: "Charismatic leadership", definition: "Leadership được follower quy năng lực phi thường qua vision, risk, sensitivity và unconventional behavior." },
        { term: "Authentic leadership", definition: "Leadership dựa trên hiểu bản thân, purpose, values, trust và self-discipline." },
        { term: "Visionary leadership", definition: "Leadership tạo và truyền đạt tầm nhìn hấp dẫn về tương lai." },
      ],
    },
    {
      id: "s7",
      heading: "Transactional vs Transformational + Full-range model",
      blocks: [
        calloutBlock(
          "key",
          "Transactional vs Transformational (Exhibit 12-4, R&J p226)",
          "Transactional dẫn dắt bằng trao đổi rõ vai trò & phần thưởng; Transformational truyền cảm hứng để follower vượt lên tư lợi vì lợi ích tổ chức, có tác động phi thường. Transformational builds on transactional — leader giỏi làm CẢ HAI; chỉ transactional thì thường chỉ tầm trung. → Mắt xích môn học: transformational leadership tạo hiệu ứng THÔNG QUA motivation của cấp dưới — nâng self-efficacy và ý nghĩa mục tiêu (goal-setting, Topic 06); còn quản trị bất đồng trong nhóm khi dẫn dắt là kỹ năng của Topic 08 (conflict).",
        ),
        comparisonBlock(
          "Transactional vs Transformational (Exhibit 12-4)",
          ["Loại", "Thành tố", "Nội dung"],
          [
            { label: "Transactional", cells: ["Contingent Reward", "Trao đổi thưởng theo nỗ lực, ghi nhận thành tích."] },
            { label: "Transactional", cells: ["Management by Exception (active)", "Theo dõi sai lệch, sửa ngay."] },
            { label: "Transactional", cells: ["Management by Exception (passive)", "Chỉ can thiệp khi tiêu chuẩn không đạt."] },
            { label: "Transactional", cells: ["Laissez-faire", "Buông bỏ trách nhiệm, né ra quyết định."] },
            { label: "Transformational", cells: ["Idealized Influence (Charisma)", "Tạo tầm nhìn & sứ mệnh, gieo niềm tự hào, được tôn trọng & tin."] },
            { label: "Transformational", cells: ["Inspirational Motivation", "Truyền kỳ vọng cao, dùng biểu tượng, diễn đạt mục đích giản dị."] },
            { label: "Transformational", cells: ["Intellectual Stimulation", "Khuyến khích trí tuệ, tư duy lại vấn đề cũ."] },
            { label: "Transformational", cells: ["Individualized Consideration", "Quan tâm từng cá nhân, kèm cặp, tư vấn."] },
          ],
        ),
        flowBlock(
          "s7",
          "Full-range leadership model (Exhibit 12-5)",
          "horizontal",
          [
            { id: "r1", label: "Laissez-faire", group: "concept", detail: "Passive/kém hiệu quả nhất; né trách nhiệm và quyết định." },
            { id: "r2", label: "Mgmt by exception", group: "concept", detail: "Can thiệp dựa trên sai lệch, active hoặc passive." },
            { id: "r3", label: "Contingent reward", group: "concept", detail: "Trao đổi rõ reward theo effort/performance." },
            { id: "r4", label: "Transformational (4 I's)", group: "concept", detail: "Idealized influence, inspirational motivation, intellectual stimulation, individualized consideration." },
          ],
          [
            { from: "r1", to: "r2", label: "sửa lỗi" },
            { from: "r2", to: "r3", label: "trao đổi" },
            { from: "r3", to: "r4", label: "cảm hứng" },
          ],
          "Từ passive/kém hiệu quả (laissez-faire) đến hiệu quả nhất (4 I's của transformational).",
        ),
      ],
      keyTerms: [
        { term: "Transactional leadership", definition: "Leadership dựa trên trao đổi vai trò, nỗ lực và phần thưởng." },
        { term: "Transformational leadership", definition: "Leadership truyền cảm hứng để follower vượt tư lợi và đổi mới." },
        { term: "Full-range leadership model", definition: "Dải leadership từ laissez-faire tới transformational 4 I's." },
      ],
    },
    {
      id: "s8",
      heading: "Value-based leadership: Ethical, Servant, Authentic",
      blocks: [
        calloutBlock(
          "key",
          "Leadership KHÔNG value-free (R&J p230)",
          "Đánh giá leader phải xét cả means (cách đạt mục tiêu) lẫn content (mục tiêu). Top leader tạo ethical culture & kỳ vọng cấp dưới hành xử theo. Socialized charismatic leadership = truyền giá trị other-centered và làm gương đạo đức → nhiều OCB, giảm interpersonal conflict.",
        ),
        comparisonBlock(
          "Ba dạng value-based leadership (R&J p230-231)",
          ["Dạng", "Nội dung"],
          [
            {
              label: "Ethical leadership",
              cells: ["Đặt chuẩn đạo đức cao, làm gương, thưởng cho liêm chính, tránh lạm quyền; giao thoa với authentic qua công bằng và thông tin trung thực."],
            },
            {
              label: "Servant leadership",
              cells: ["Vượt tư lợi, tập trung cơ hội giúp follower phát triển; listening, empathizing, persuading, stewardship, developing potential; neg-corr với narcissism; tăng commitment, self-efficacy, justice, OCB, team potency."],
            },
            {
              label: "Authentic leadership",
              cells: ["Biết mình là ai, sống theo giá trị công khai; George 5 đặc điểm: understand purpose, strong values, trusting relationships, self-discipline, act from the heart."],
            },
          ],
        ),
      ],
      keyTerms: [
        { term: "Ethical leadership", definition: "Leadership đặt chuẩn đạo đức, làm gương và xây ethical culture." },
        { term: "Socialized charismatic leadership", definition: "Charisma other-centered, dùng ảnh hưởng để phục vụ tập thể và giá trị đạo đức." },
        { term: "Servant leadership", definition: "Leadership vượt tư lợi, phục vụ để follower phát triển." },
      ],
    },
    {
      id: "s9",
      heading: "Followership: the other half",
      blocks: [
        calloutBlock(
          "key",
          "Followership — nửa còn lại (slide 54-55)",
          "Follower tồn tại chừng nào có leader; leadership được KIẾN TẠO bởi leader + follower cùng nhau. Followership = năng lực của follower đưa tầm nhìn của leader vào thực tế. '≈90% thành công tổ chức đến từ follower' (Kelley). Effective followership cần COURAGE (Chaleff): dám nhận trách nhiệm, phục vụ, thách thức, tham gia chuyển hóa, hành động đạo đức, dám rời đi.",
        ),
        comparisonBlock(
          "Kelley — 5 followership styles (slide 56-57)",
          ["Kiểu", "Nội dung"],
          [
            { label: "Sheep (Passive follower)", cells: ["Thụ động + tư duy lệ thuộc/không phản biện; chờ được dẫn dắt."] },
            { label: "Yes People (Conformist)", cells: ["Chủ động NHƯNG lệ thuộc, không phản biện; luôn đồng ý cấp trên."] },
            { label: "Alienated", cells: ["Tư duy độc lập/phản biện NHƯNG thụ động; hoài nghi, hay chỉ trích ngoài lề."] },
            { label: "Star / Effective (Exemplary)", cells: ["Vừa chủ động vừa tư duy độc lập/phản biện; đóng góp & dám nói thật — lý tưởng."] },
            { label: "Pragmatist", cells: ["'Survivor' ở giữa, tùy tình thế mà nghiêng — giữ an toàn, ít cam kết rõ ràng."] },
          ],
        ),
        comparisonBlock(
          "What followers want (slide 40) & LMX (R&J p222)",
          ["Khía cạnh", "Nội dung", "Ghi chú"],
          [
            {
              label: "What followers want",
              cells: ["Trust, Compassion, Stability, Hope.", "Leader thất bại truyền HOPE/TRUST → follower lo sợ, kháng cự."],
            },
            {
              label: "LMX ingroup vs outgroup",
              cells: ["Ingroup: được tin, nhiều thời gian & đặc quyền; Outgroup: ít chú ý.", "Phân loại sớm & ổn định → self-fulfilling prophecy; phân biệt mạnh gây bất công & phản ứng tiêu cực."],
            },
          ],
        ),
      ],
      keyTerms: [
        { term: "Followership", definition: "Năng lực follower đưa tầm nhìn của leader vào thực tế và đồng kiến tạo leadership." },
        { term: "Leader-member exchange (LMX)", definition: "Lý thuyết leader hình thành quan hệ khác nhau với ingroup/outgroup." },
        { term: "Ingroup", definition: "Nhóm follower được leader tin, chú ý và trao cơ hội hơn." },
        { term: "Outgroup", definition: "Nhóm follower nhận ít chú ý và ít đặc quyền hơn trong LMX." },
      ],
    },
    {
      id: "s10",
      heading: "Trust & Mentoring",
      blocks: [
        calloutBlock(
          "key",
          "Trust — nền tảng của lãnh đạo tích cực (R&J p231)",
          "Ta tin leader qua thời gian bằng cách quan sát hành vi. Ba dimensions: integrity (trung thực, nhất quán), benevolence (đặt lợi ích ta lên trước), ability (năng lực chuyên môn). Trust propensity: xu hướng tin người, gắn agreeableness; self-esteem thấp → ít tin.",
        ),
        comparisonBlock(
          "Regaining trust — theo loại vi phạm (R&J p233)",
          ["Tình huống", "Cách xử lý"],
          [
            {
              label: "Vi phạm về ABILITY",
              cells: ["Xin lỗi & thừa nhận 'lẽ ra phải làm tốt hơn' thường hiệu quả; niềm tin có thể khôi phục."],
            },
            {
              label: "Vi phạm về INTEGRITY",
              cells: ["Xin lỗi ÍT tác dụng; cần chuỗi hành vi đáng tin nhất quán để phục hồi."],
            },
            {
              label: "Dùng DECEPTION",
              cells: ["Niềm tin gần như KHÔNG BAO GIỜ trở lại — kể cả sau xin lỗi/hứa hẹn."],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Mentoring (R&J p233)",
          "Mentor = nhân sự kỳ cựu bảo trợ & hỗ trợ một protégé. Hai chức năng: career functions (huấn luyện, tạo cơ hội) & psychosocial functions (tư vấn, làm gương, tăng tự tin). Nghiên cứu: lợi ích chủ yếu tâm lý hơn thành tích khách quan → mentoring nuôi leader kế cận nhưng không phải điều kiện đủ cho thành công sự nghiệp.",
        ),
      ],
      keyTerms: [
        { term: "Trust", definition: "Niềm tin dựa trên integrity, benevolence và ability quan sát qua thời gian." },
        { term: "Trust propensity", definition: "Xu hướng cá nhân tin tưởng người khác." },
        { term: "Mentor", definition: "Người kỳ cựu bảo trợ, huấn luyện và hỗ trợ protégé." },
      ],
    },
    {
      id: "s11",
      heading: "Challenges to leadership + Building leadership",
      blocks: [
        calloutBlock(
          "key",
          "Challenges: leadership có thể bị THỔI PHỒNG (R&J p233)",
          "Jim Collins: thời xưa mọi điều không hiểu đều gán cho Chúa; nay gán cho 'leadership'. Nhiều thành/bại của tổ chức do yếu tố NGOÀI leader.",
        ),
        comparisonBlock(
          "Substitutes vs Neutralizers of leadership (Exhibit 12-7, Kerr & Jermier)",
          ["Yếu tố", "Substitute (thay thế nhu cầu leader)", "Neutralizer (vô hiệu hóa hành vi leader)"],
          [
            { label: "Kinh nghiệm/đào tạo", cells: ["Thay thế leadership định hướng nhiệm vụ.", "(không phải neutralizer chính)."] },
            { label: "Công việc có cấu trúc cao & tự phản hồi", cells: ["Thay thế nhu cầu chỉ dẫn.", "(không phải neutralizer chính)."] },
            { label: "Công việc tự thân thỏa mãn", cells: ["Thay thế leadership quan hệ.", "(không phải neutralizer chính)."] },
            { label: "Thờ ơ với phần thưởng", cells: ["(không phải substitute chính).", "Vô hiệu cả task- lẫn relationship-oriented leadership."] },
          ],
        ),
        calloutBlock(
          "note",
          "Attribution theory of leadership (R&J p233)",
          "Leadership phần nào là quy gán — ta gán cho leader trí tuệ, tính cách hướng ngoại, kỹ năng nói, quyết đoán. Perception của follower ảnh hưởng mạnh tới hiệu quả; đôi khi ta romanticize leadership. Dáng vẻ/appearance của leader cũng quan trọng như thành tích thật.",
        ),
        calloutBlock(
          "key",
          "Building LEADERSHIP is about... (synthesis, slide 63)",
          "Ba trục tổng kết: (1) Leader-Follower Exchange → Benefits; (2) Role Model → Inspiration; (3) Influence → Power. Bắt đầu từ self-leadership (Lead your organization → your people → yourself) & Fundamental 4: self-awareness, communication, influence, learning agility.",
        ),
        calloutBlock(
          "key",
          "So what — kiến thức này đổi hành động của bạn",
          "Leadership = influence, không phải chức vụ — nên bạn không cần đợi bổ nhiệm mới bắt đầu lãnh đạo, và có chức chưa chắc đã lead. Hành động: phát triển mình theo đúng hành trình lý thuyết — biết trait mình có, luyện behavior (initiating structure + consideration), đọc tình huống trước khi chọn style (contingency); và làm một courageous follower — nửa còn lại của lãnh đạo là biết theo ai, theo thế nào.",
        ),
      ],
      keyTerms: [
        { term: "Attribution theory of leadership", definition: "Quan điểm leadership phần nào là kết quả follower quy gán phẩm chất/kết quả cho leader." },
        { term: "Substitutes for leadership", definition: "Yếu tố làm giảm hoặc thay thế nhu cầu leader trong một số hành vi." },
        { term: "Self-leadership", definition: "Năng lực lãnh đạo chính mình trước khi lãnh đạo người khác/tổ chức." },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "Without a formal title, Lan persuades a cross-functional group to adopt a new service vision and work toward a shared target. What is Lan demonstrating?",
      options: [
        { id: "a", text: "Leadership: influencing a group toward a vision or set of goals", isCorrect: true, rationale: "Cơ chế: Lan tạo influence, hướng một group tới service vision và shared target dù không có title. Bẫy: tưởng phải được bổ nhiệm mới là leader. Khóa: influence toward vision/goals là cốt lõi leadership." },
        { id: "b", text: "Formal managerial authority to issue orders", isCorrect: false, rationale: "Cơ chế: Lan không có formal title hay quyền ra lệnh. Bẫy: người khác làm theo nên dễ suy ra authority. Khóa: nonsanctioned influence vẫn là leadership." },
        { id: "c", text: "Management through planning and control to preserve stability", isCorrect: false, rationale: "Cơ chế: stem nhấn vision và persuasion, không phải schedule/control. Bẫy: cross-functional initiative vẫn cần management. Khóa: direction/influence là leadership; order/consistency là management." },
        { id: "d", text: "A fixed personality trait that Lan was born with", isCorrect: false, rationale: "Cơ chế: hành vi influence trong case không chứng minh leadership là trait bất biến. Bẫy: natural persuasion gợi Great Man/Trait view. Khóa: leadership còn có behavioral và contingency components có thể phát triển." },
        { id: "e", text: "Reward power that makes the group comply", isCorrect: false, rationale: "Cơ chế: không có reward nào được trao; group theo vision qua persuasion. Bẫy: mọi influence dễ bị quy về incentive. Khóa: reward power chỉ là một power base, không phải định nghĩa leadership." },
      ],
      difficulty: "basic",
      conceptTested: "Definition of leadership",
      takeaway: "Leadership bắt đầu từ influence hướng tới vision/goals, không bắt đầu từ ghế chức vụ.",
    },
    {
      id: "q02",
      stem: "Minh sets direction and rallies employees around a new product vision, while An builds the schedule, budget, and controls needed to deliver it reliably. Which interpretation best fits the case?",
      options: [
        { id: "a", text: "Minh provides leadership by choosing the right direction; An provides management by executing it correctly", isCorrect: true, rationale: "Cơ chế: vision/rallying tương ứng doing the right things; schedule/budget/control tương ứng doing things right. Bẫy: coi hai người cạnh tranh vai trò. Khóa: leadership và management bổ trợ nhau." },
        { id: "b", text: "An's strong management makes Minh's leadership unnecessary", isCorrect: false, rationale: "Cơ chế: controls không tự tạo product direction hay commitment với vision. Bẫy: reliable delivery có vẻ là toàn bộ thành công. Khóa: management không thay thế leadership." },
        { id: "c", text: "An is leading because budgets and controls are forms of charisma", isCorrect: false, rationale: "Cơ chế: budget/control là chức năng management, không phải charisma. Bẫy: manager có thể đồng thời là leader. Khóa: hành vi cụ thể trong stem mới quyết định chức năng." },
        { id: "d", text: "Minh and An are performing exactly the same organizational function", isCorrect: false, rationale: "Cơ chế: một bên tạo direction/inspiration, bên kia tạo order/consistency. Bẫy: cả hai cùng phục vụ một product. Khóa: shared goal không làm hai functions đồng nhất." },
        { id: "e", text: "Minh is managing because leadership mainly means following procedures efficiently", isCorrect: false, rationale: "Cơ chế: Minh đang thách thức hiện trạng bằng vision, không chỉ theo procedure. Bẫy: rallying employees vẫn là công việc trong tổ chức. Khóa: efficiency/procedure gần management; vision/change gần leadership." },
      ],
      difficulty: "basic",
      conceptTested: "Leadership versus management",
      takeaway: "Leadership và management đều cần: một bên tạo hướng đi, một bên giữ hệ thống vận hành đúng.",
    },
    {
      id: "q03",
      stem: "Director An can approve budgets because of her title, while engineer Lan has no formal authority but colleagues follow her technical judgment and trust her. Which distinction best explains their influence?",
      options: [
        { id: "a", text: "An has formal power from position; Lan has personal power from expertise and relationships", isCorrect: true, rationale: "Cơ chế: budget approval đến từ title, còn technical judgment/trust đến từ expert và referent sources. Bẫy: cả hai đều tạo compliance nên dễ gom chung. Khóa: position = formal; person/expertise/relationship = personal." },
        { id: "b", text: "An has personal power from her title; Lan has formal power from colleagues' trust", isCorrect: false, rationale: "Cơ chế: đáp án đảo nguồn power của cả hai. Bẫy: title gắn với cá nhân An và trust tồn tại trong formal organization. Khóa: nguồn gốc, không phải nơi sử dụng, quyết định loại power." },
        { id: "c", text: "Lan's personal power is coercive because colleagues follow her advice", isCorrect: false, rationale: "Cơ chế: không có threat/punishment; influence đến từ expertise và trust. Bẫy: việc người khác làm theo có thể trông như bị ép. Khóa: coercive cần khả năng trừng phạt." },
        { id: "d", text: "An's formal power is irrelevant because only personal power can affect decisions", isCorrect: false, rationale: "Cơ chế: quyền approve budget rõ ràng ảnh hưởng quyết định. Bẫy: personal power thường bền hơn nên dễ tuyệt đối hóa. Khóa: formal power vẫn có tác dụng nhưng không phải nguồn duy nhất." },
        { id: "e", text: "Neither person has power because influence and power are unrelated", isCorrect: false, rationale: "Cơ chế: cả quyền phê duyệt lẫn expert trust đều tạo capacity to influence. Bẫy: influence nghe tự nguyện hơn power. Khóa: power chính là năng lực tác động người khác/sự kiện." },
      ],
      difficulty: "basic",
      conceptTested: "Sources of power",
      takeaway: "Leader có thể có quyền vì chức vụ, nhưng influence bền thường đến từ chuyên môn, uy tín và quan hệ.",
    },
    {
      id: "q04",
      stem: "A leader is followed because employees admire her and want to be like her. Which power base is this?",
      options: [
        { id: "a", text: "Referent power", isCorrect: true, rationale: "Cơ chế: referent power đến từ sức hút cá nhân, được ngưỡng mộ và muốn noi theo. Bẫy: admiration có thể đi cùng expertise. Khóa: admire/be like her = referent." },
        { id: "b", text: "Expert power", isCorrect: false, rationale: "Cơ chế: expert power đến từ tri thức/kỹ năng chuyên môn. Bẫy: người giỏi thường được ngưỡng mộ. Khóa: stem không nói expertise." },
        { id: "c", text: "Legitimate power", isCorrect: false, rationale: "Cơ chế: legitimate power đến từ chức danh/vị trí. Bẫy: leader có thể có chức vụ. Khóa: admiration không phải formal title." },
        { id: "d", text: "Coercive power", isCorrect: false, rationale: "Cơ chế: coercive dựa trên trừng phạt/sợ hãi. Bẫy: người có sức hút cũng có thể gây áp lực. Khóa: admired khác fear." },
        { id: "e", text: "Informational power", isCorrect: false, rationale: "Cơ chế: informational power là kiểm soát thông tin người khác cần. Bẫy: admired leader có thể nắm thông tin. Khóa: muốn noi theo = referent." },
      ],
      difficulty: "basic",
      conceptTested: "Bases of power",
      takeaway: "Expert power làm người khác tin vì năng lực; referent power làm người khác đi theo vì ngưỡng mộ.",
    },
    {
      id: "q05",
      stem: "What is the main modern conclusion about trait theories of leadership?",
      options: [
        { id: "a", text: "Traits predict leadership emergence better than they distinguish effective from ineffective leaders", isCorrect: true, rationale: "Cơ chế: traits giúp dự đoán ai trông/xuất hiện như leader, nhưng yếu hơn khi phân biệt hiệu quả thật. Bẫy: nghĩ có trait là chắc chắn giỏi. Khóa: emergence versus effectiveness." },
        { id: "b", text: "Traits perfectly determine leadership effectiveness", isCorrect: false, rationale: "Cơ chế: trait không đủ; behavior, situation, follower và ethics đều quan trọng. Bẫy: Great Man logic. Khóa: không có perfectly." },
        { id: "c", text: "Traits have no relationship to leadership at all", isCorrect: false, rationale: "Cơ chế: Big Five và EI vẫn dự đoán leadership ở mức nào đó. Bẫy: phản ứng quá đà với giới hạn trait. Khóa: có liên quan nhưng không đủ." },
        { id: "d", text: "Traits matter only after followers become effective", isCorrect: false, rationale: "Cơ chế: traits là đặc điểm leader, không phụ thuộc thứ tự follower effective trước. Bẫy: topic có followership. Khóa: câu hỏi về trait approach." },
        { id: "e", text: "Traits replace the need for trust and ethics", isCorrect: false, rationale: "Cơ chế: leadership bền cần trust/ethics; traits không thay thế. Bẫy: tố chất tốt nghe như đạo đức tốt. Khóa: trait khác moral foundation." },
      ],
      difficulty: "intermediate",
      conceptTested: "Trait theories",
      takeaway: "Trait giúp giải thích vì sao ai đó được nhìn như leader, nhưng hiệu quả lãnh đạo cần hành vi, bối cảnh, follower và giá trị.",
    },
    {
      id: "q06",
      stem: "Which set best matches Goleman's emotional intelligence components for leaders?",
      options: [
        { id: "a", text: "Self-awareness, self-regulation, motivation, empathy, and social skills", isCorrect: true, rationale: "Cơ chế: EI theo Goleman gồm 5 thành tố này, giúp leader kết nối và tự điều chỉnh. Bẫy: trộn với Big Five hoặc power bases. Khóa: self + others + social skills." },
        { id: "b", text: "Legitimate, reward, coercive, expert, and referent power", isCorrect: false, rationale: "Cơ chế: đây là power bases, không phải EI. Bẫy: đều là nguồn influence. Khóa: EI là năng lực cảm xúc." },
        { id: "c", text: "Forming, storming, norming, performing, and adjourning", isCorrect: false, rationale: "Cơ chế: đây là Tuckman team lifecycle. Bẫy: leader dùng EI qua các stage. Khóa: không phải emotional intelligence." },
        { id: "d", text: "Initiating structure, consideration, LPC, and position power", isCorrect: false, rationale: "Cơ chế: đây là behavioral/contingency terms. Bẫy: consideration có yếu tố cảm xúc. Khóa: EI có 5 thành tố riêng." },
        { id: "e", text: "Integrity, benevolence, and ability", isCorrect: false, rationale: "Cơ chế: đây là trust dimensions. Bẫy: empathy/benevolence gần nghĩa. Khóa: trust dimensions không phải EI components." },
      ],
      difficulty: "basic",
      conceptTested: "Emotional intelligence",
      takeaway: "EI giúp leader hiểu mình, giữ mình, hiểu người và kết nối xã hội trong áp lực.",
    },
    {
      id: "q07",
      stem: "In the Ohio State studies, which dimension describes defining roles and structuring work toward goals?",
      options: [
        { id: "a", text: "Initiating structure", isCorrect: true, rationale: "Cơ chế: initiating structure là định vai trò/nhiệm vụ để đạt mục tiêu. Bẫy: consideration cũng là Ohio dimension. Khóa: structuring work = initiating structure." },
        { id: "b", text: "Consideration", isCorrect: false, rationale: "Cơ chế: consideration là quan hệ tin tưởng, tôn trọng cảm xúc. Bẫy: leader quan tâm vẫn có thể tổ chức tốt. Khóa: role/task structure khác relationship." },
        { id: "c", text: "Referent power", isCorrect: false, rationale: "Cơ chế: referent là power base, không phải Ohio dimension. Bẫy: leader có sức hút có thể định hướng. Khóa: Ohio gồm initiating structure/consideration." },
        { id: "d", text: "Laissez-faire", isCorrect: false, rationale: "Cơ chế: laissez-faire là buông bỏ trong full-range model. Bẫy: thiếu structure là đối lập. Khóa: câu hỏi hỏi dimension tích cực structuring." },
        { id: "e", text: "LMX", isCorrect: false, rationale: "Cơ chế: LMX là quan hệ leader-member ingroup/outgroup. Bẫy: role definition có thể khác trong ingroup. Khóa: không phải Ohio State term." },
      ],
      difficulty: "basic",
      conceptTested: "Behavioral theories: Ohio dimensions",
      takeaway: "Ohio State tách task behavior (initiating structure) và people behavior (consideration).",
    },
    {
      id: "q08",
      stem: "The Managerial Grid is built around which two concerns?",
      options: [
        { id: "a", text: "Concern for people and concern for production", isCorrect: true, rationale: "Cơ chế: Blake & Mouton dùng hai trục people × production. Bẫy: nhầm với Ohio/Michigan labels. Khóa: grid = people/production." },
        { id: "b", text: "Formal power and personal power", isCorrect: false, rationale: "Cơ chế: đây là hai nguồn power. Bẫy: leader style có thể dựa vào power. Khóa: không phải Managerial Grid." },
        { id: "c", text: "Ingroup and outgroup", isCorrect: false, rationale: "Cơ chế: đây là LMX. Bẫy: concern for people thấp có thể tạo outgroup. Khóa: grid không nói LMX." },
        { id: "d", text: "Integrity and ability", isCorrect: false, rationale: "Cơ chế: đây là trust dimensions. Bẫy: leader tốt cần cả trust. Khóa: grid là people/production." },
        { id: "e", text: "Leader traits and follower traits", isCorrect: false, rationale: "Cơ chế: trait approach khác behavioral grid. Bẫy: người và production nghe như đặc điểm. Khóa: managerial grid là behavioral style." },
      ],
      difficulty: "basic",
      conceptTested: "Managerial Grid and Michigan",
      takeaway: "Managerial Grid nhắc leader đừng chọn một cực: hiệu quả cần quan tâm cả con người lẫn sản xuất/nhiệm vụ.",
    },
    {
      id: "q09",
      stem: "Which statement best captures the contingency approach to leadership?",
      options: [
        { id: "a", text: "Leadership effectiveness depends on the fit among leader, followers, and situation", isCorrect: true, rationale: "Cơ chế: contingency nói 'it depends'; không có style tốt nhất tuyệt đối. Bẫy: tìm một phong cách vạn năng. Khóa: fit with situation." },
        { id: "b", text: "One leadership style is best in all situations", isCorrect: false, rationale: "Cơ chế: đây là điều contingency phản bác. Bẫy: muốn công thức dễ nhớ. Khóa: no universal best style." },
        { id: "c", text: "Only traits matter, not situation", isCorrect: false, rationale: "Cơ chế: đây là trait-only logic. Bẫy: traits vẫn có vai trò. Khóa: contingency thêm bối cảnh." },
        { id: "d", text: "Followers should never influence leader behavior", isCorrect: false, rationale: "Cơ chế: readiness/follower characteristics là biến chính trong situational/path-goal. Bẫy: leader-centric thinking. Khóa: followers matter." },
        { id: "e", text: "Leadership is irrelevant because substitutes always exist", isCorrect: false, rationale: "Cơ chế: substitutes có thể giảm nhu cầu leadership trong vài tình huống, không luôn luôn. Bẫy: challenges section. Khóa: contingency không phủ nhận leadership." },
      ],
      difficulty: "intermediate",
      conceptTested: "Contingency logic",
      takeaway: "Contingency dạy một câu khó nhưng thật: phong cách đúng phụ thuộc leader, follower và situation.",
    },
    {
      id: "q10",
      stem: "In Fiedler's model, what is the practical implication if a leader's style is relatively fixed?",
      options: [
        { id: "a", text: "Match the leader to a suitable situation or change the situation to fit the leader", isCorrect: true, rationale: "Cơ chế: Fiedler đo style bằng LPC và xem style khá cố định; nên match style với situational favorableness. Bẫy: nghĩ chỉ cần train leader đổi style. Khóa: fixed style → change situation/match." },
        { id: "b", text: "Ignore leader-member relations, task structure, and position power", isCorrect: false, rationale: "Cơ chế: ba yếu tố này tạo situational favorableness. Bẫy: chỉ nhìn LPC. Khóa: situation has three components." },
        { id: "c", text: "Use only transformational leadership in every case", isCorrect: false, rationale: "Cơ chế: transformational thuộc contemporary/full-range, không phải Fiedler logic. Bẫy: transformational nghe tốt. Khóa: Fiedler is contingency matching." },
        { id: "d", text: "Base leadership entirely on referent power", isCorrect: false, rationale: "Cơ chế: referent power là power base, không phải Fiedler model. Bẫy: leader-member relations có yếu tố thích/tin. Khóa: Fiedler dùng LPC + favorableness." },
        { id: "e", text: "Remove followers from the model", isCorrect: false, rationale: "Cơ chế: leader-member relations là một yếu tố chính. Bẫy: model tên Fiedler tập trung leader. Khóa: followers vẫn nằm trong situation." },
      ],
      difficulty: "advanced",
      conceptTested: "Fiedler and LPC",
      takeaway: "Fiedler không nói leader luôn đổi style; ông nhấn match style cố định với mức thuận lợi của tình huống.",
    },
    {
      id: "q11",
      stem: "In Situational Leadership II, which style best matches high competence and high commitment followers?",
      options: [
        { id: "a", text: "S4 Delegating", isCorrect: true, rationale: "Cơ chế: khi follower có năng lực và cam kết cao, leader nên giao quyền/delegating. Bẫy: leader vẫn muốn chỉ đạo để chắc chắn. Khóa: high competence + high commitment = delegating." },
        { id: "b", text: "S1 Directing", isCorrect: false, rationale: "Cơ chế: directing phù hợp khi cần chỉ dẫn cao, follower chưa đủ năng lực. Bẫy: directive tạo cảm giác kiểm soát. Khóa: high-high không cần S1." },
        { id: "c", text: "S2 Coaching", isCorrect: false, rationale: "Cơ chế: coaching cần direction + support, thường khi follower còn học. Bẫy: coaching nghe luôn tích cực. Khóa: follower đã high competence/commitment." },
        { id: "d", text: "S3 Supporting", isCorrect: false, rationale: "Cơ chế: supporting giảm direction, tăng support khi commitment/năng lực chưa cân. Bẫy: support vẫn tốt. Khóa: style tối ưu là delegating." },
        { id: "e", text: "Laissez-faire", isCorrect: false, rationale: "Cơ chế: delegating là trao quyền có trách nhiệm; laissez-faire là né trách nhiệm. Bẫy: cả hai đều ít can thiệp. Khóa: delegating không phải bỏ mặc." },
      ],
      difficulty: "intermediate",
      conceptTested: "Situational Leadership S1-S4",
      takeaway: "Delegating khác laissez-faire: một bên là trao quyền cho người sẵn sàng, một bên là bỏ trách nhiệm.",
    },
    {
      id: "q12",
      stem: "Which statement correctly describes transformational leadership?",
      options: [
        { id: "a", text: "It inspires followers to transcend self-interest and builds on transactional leadership", isCorrect: true, rationale: "Cơ chế: transformational dùng 4 I's để follower vượt tư lợi vì tổ chức và builds on transactional. Bẫy: nghĩ transformational thay thế hoàn toàn transactional. Khóa: inspires + builds on." },
        { id: "b", text: "It is only contingent reward and role clarification", isCorrect: false, rationale: "Cơ chế: contingent reward/role clarification thuộc transactional. Bẫy: cả hai đều trong full-range. Khóa: transformational có 4 I's." },
        { id: "c", text: "It means leaders avoid all decisions", isCorrect: false, rationale: "Cơ chế: né quyết định là laissez-faire. Bẫy: empowerment bị hiểu sai thành không quyết. Khóa: transformational chủ động truyền cảm hứng." },
        { id: "d", text: "It depends only on coercive power", isCorrect: false, rationale: "Cơ chế: coercive power trái với cảm hứng/idealized influence. Bẫy: influence có thể dùng power. Khóa: transformational dựa vào vision, stimulation, consideration." },
        { id: "e", text: "It removes the need for ethics", isCorrect: false, rationale: "Cơ chế: charisma/transformational có dark side nếu thiếu ethical checks. Bẫy: kết quả cao nghe như đủ. Khóa: leadership không value-free." },
      ],
      difficulty: "intermediate",
      conceptTested: "Transactional versus transformational leadership",
      takeaway: "Transformational không bỏ transactional; nó xây trên nền trao đổi rõ ràng rồi nâng follower bằng tầm nhìn và 4 I's.",
    },
    {
      id: "q13",
      stem: "In the full-range leadership model, which behavior is generally least effective?",
      options: [
        { id: "a", text: "Laissez-faire", isCorrect: true, rationale: "Cơ chế: full-range đặt laissez-faire ở cực passive/kém hiệu quả nhất. Bẫy: ít can thiệp đôi khi giống trao quyền. Khóa: laissez-faire = bỏ trách nhiệm." },
        { id: "b", text: "Contingent reward", isCorrect: false, rationale: "Cơ chế: contingent reward là transactional tích cực hơn management by exception/laissez-faire. Bẫy: reward có thể tầm trung. Khóa: least effective là laissez-faire." },
        { id: "c", text: "Inspirational motivation", isCorrect: false, rationale: "Cơ chế: inspirational motivation thuộc transformational, hiệu quả cao hơn. Bẫy: nghe trừu tượng. Khóa: 4 I's ở cực cao." },
        { id: "d", text: "Idealized influence", isCorrect: false, rationale: "Cơ chế: idealized influence/charisma thuộc transformational. Bẫy: charisma có dark side nếu thiếu ethics. Khóa: không phải least effective trong model." },
        { id: "e", text: "Individualized consideration", isCorrect: false, rationale: "Cơ chế: individualized consideration là transformational, quan tâm từng follower. Bẫy: có vẻ mềm. Khóa: full-range đánh giá cao 4 I's." },
      ],
      difficulty: "basic",
      conceptTested: "Full-range leadership model",
      takeaway: "Ít can thiệp không luôn là trao quyền; laissez-faire là bỏ mặc, còn delegating là trao quyền có trách nhiệm.",
    },
    {
      id: "q14",
      stem: "Which set best matches House's characteristics of charismatic leadership?",
      options: [
        { id: "a", text: "Vision and articulation, personal risk, sensitivity to followers' needs, and unconventional behavior", isCorrect: true, rationale: "Cơ chế: R&J/House nêu bốn đặc điểm này. Bẫy: charisma thường bị hiểu chỉ là nói hay. Khóa: vision + risk + sensitivity + unconventional." },
        { id: "b", text: "LPC, task structure, position power, and leader-member relations", isCorrect: false, rationale: "Cơ chế: đây là Fiedler model. Bẫy: leader-member relations cũng liên quan charisma. Khóa: không phải House." },
        { id: "c", text: "Legitimate, reward, coercive, and informational power only", isCorrect: false, rationale: "Cơ chế: đây là power bases. Bẫy: charismatic leader có influence. Khóa: charisma là behavior perception, không phải bases." },
        { id: "d", text: "Inclusion, learner, contributor, and challenger safety", isCorrect: false, rationale: "Cơ chế: đây là psychological safety stages từ Topic 09. Bẫy: charismatic leader có thể tạo safety. Khóa: không thuộc House." },
        { id: "e", text: "Sheep, Yes People, Alienated, Star, and Pragmatist", isCorrect: false, rationale: "Cơ chế: đây là Kelley followership types. Bẫy: charisma phụ thuộc follower attribution. Khóa: question asks leader characteristics." },
      ],
      difficulty: "basic",
      conceptTested: "Charismatic leadership",
      takeaway: "Charisma không chỉ là sức hút; nó gồm vision rõ, dám rủi ro, nhạy với follower và hành vi khác thường.",
    },
    {
      id: "q15",
      stem: "Which description best fits socialized charismatic leadership?",
      options: [
        { id: "a", text: "Other-centered values and ethical role modeling that increase OCB and reduce interpersonal conflict", isCorrect: true, rationale: "Cơ chế: socialized charismatic leadership dùng charisma vì giá trị other-centered và làm gương đạo đức. Bẫy: charismatic có thể tối nếu tư lợi. Khóa: other-centered + ethical role model." },
        { id: "b", text: "Using charisma mainly for personal gain", isCorrect: false, rationale: "Cơ chế: đó là dark side/personalized charisma, không phải socialized. Bẫy: đều là charismatic. Khóa: socialized = vì người khác/tập thể." },
        { id: "c", text: "Avoiding values because leadership is value-free", isCorrect: false, rationale: "Cơ chế: R&J nhấn leadership không value-free. Bẫy: muốn tách ethics khỏi performance. Khóa: means and content matter." },
        { id: "d", text: "Punishing all dissent to create obedience", isCorrect: false, rationale: "Cơ chế: ethical/socialized leadership không dựa vào cưỡng ép mù. Bẫy: leader mạnh có thể kiểm soát dissent. Khóa: role model đạo đức tạo OCB." },
        { id: "e", text: "Replacing ethics with contingent reward", isCorrect: false, rationale: "Cơ chế: contingent reward là transactional; không thay thế ethical culture. Bẫy: reward có thể củng cố đạo đức nếu đúng. Khóa: socialized charisma trọng tâm values." },
      ],
      difficulty: "intermediate",
      conceptTested: "Ethical and socialized charismatic leadership",
      takeaway: "Charisma chỉ bền khi được socialized: dùng ảnh hưởng để phục vụ giá trị chung, không phục vụ cái tôi leader.",
    },
    {
      id: "q16",
      stem: "A team leader listens closely, removes obstacles, gives credit away, and coaches junior employees until they can make decisions independently. Which leadership approach is most evident?",
      options: [
        { id: "a", text: "Servant leadership that places follower growth beyond the leader's self-interest", isCorrect: true, rationale: "Cơ chế: listening, obstacle removal, shared credit và coaching đều làm follower trưởng thành/tự chủ. Bẫy: leader phục vụ dễ bị hiểu là không dẫn dắt. Khóa: service for follower development là servant leadership." },
        { id: "b", text: "Narcissistic charismatic leadership that keeps attention on the leader", isCorrect: false, rationale: "Cơ chế: giving credit away giảm spotlight và trái với narcissistic self-focus. Bẫy: leader có ảnh hưởng mạnh vẫn có thể charismatic. Khóa: case ưu tiên follower, không ưu tiên cái tôi." },
        { id: "c", text: "Coercive leadership that secures obedience through punishment", isCorrect: false, rationale: "Cơ chế: không có threat hay punishment; leader dùng support/coaching. Bẫy: removing obstacles có thể đi kèm authority. Khóa: coercion tạo sợ hãi, servant tạo growth." },
        { id: "d", text: "Dependency-based leadership that prevents followers from developing", isCorrect: false, rationale: "Cơ chế: leader chủ ý giúp juniors quyết định độc lập, ngược với dependency. Bẫy: coaching ban đầu tạo quan hệ phụ thuộc. Khóa: outcome tự chủ xác nhận follower development." },
        { id: "e", text: "Laissez-faire leadership that withdraws from follower decisions", isCorrect: false, rationale: "Cơ chế: leader tích cực lắng nghe, hỗ trợ và coaching chứ không né trách nhiệm. Bẫy: trao quyền độc lập dễ bị nhầm với bỏ mặc. Khóa: empowerment có support ≠ laissez-faire." },
      ],
      difficulty: "basic",
      conceptTested: "Servant leadership",
      takeaway: "Servant leader không yếu; họ dùng quyền lực để làm follower lớn lên, không làm follower phụ thuộc vào mình.",
    },
    {
      id: "q17",
      stem: "In LMX theory, what is a major risk of early ingroup and outgroup categorization?",
      options: [
        { id: "a", text: "It can become a self-fulfilling prophecy and create perceptions of unfairness", isCorrect: true, rationale: "Cơ chế: leader phân ingroup/outgroup sớm, ổn định; người được tin nhận cơ hội hơn và càng perform, outgroup bị ít chú ý. Bẫy: ingroup có thể có hiệu quả ngắn hạn. Khóa: self-fulfilling prophecy + fairness risk." },
        { id: "b", text: "It guarantees all followers receive equal attention", isCorrect: false, rationale: "Cơ chế: LMX chính là quan hệ khác nhau với follower. Bẫy: leader có thể nghĩ mình công bằng. Khóa: ingroup/outgroup tạo khác biệt." },
        { id: "c", text: "It eliminates the need for trust", isCorrect: false, rationale: "Cơ chế: LMX chất lượng cao dựa trên trust. Bẫy: phân nhóm có vẻ là quản trị hiệu quả. Khóa: trust vẫn là nền." },
        { id: "d", text: "It prevents any performance difference", isCorrect: false, rationale: "Cơ chế: self-fulfilling prophecy có thể khuếch đại performance difference. Bẫy: phân loại để quản lý nghe như kiểm soát. Khóa: opportunity khác nhau tạo kết quả khác." },
        { id: "e", text: "It means followers no longer influence leadership", isCorrect: false, rationale: "Cơ chế: LMX là quan hệ hai chiều leader-follower. Bẫy: leader phân loại nghe một chiều. Khóa: exchange vẫn hai chiều." },
      ],
      difficulty: "intermediate",
      conceptTested: "LMX ingroup/outgroup",
      takeaway: "LMX nhắc rằng sự thiên vị nhỏ ban đầu có thể thành vòng lặp tự củng cố, làm người trong càng mạnh và người ngoài càng bị bỏ xa.",
    },
    {
      id: "q18",
      stem: "In Kelley's followership model, which follower is both active and an independent critical thinker?",
      options: [
        { id: "a", text: "Star or Effective follower", isCorrect: true, rationale: "Cơ chế: Star/Effective vừa chủ động vừa tư duy độc lập/phản biện. Bẫy: Yes People cũng chủ động nhưng thiếu phản biện. Khóa: active + critical = Star." },
        { id: "b", text: "Yes People", isCorrect: false, rationale: "Cơ chế: Yes People chủ động nhưng lệ thuộc/không phản biện. Bẫy: họ có vẻ supportive. Khóa: thiếu independent critical thinking." },
        { id: "c", text: "Sheep", isCorrect: false, rationale: "Cơ chế: Sheep thụ động và lệ thuộc. Bẫy: họ dễ quản lý nên tưởng tốt. Khóa: không chủ động." },
        { id: "d", text: "Alienated", isCorrect: false, rationale: "Cơ chế: Alienated có tư duy phản biện nhưng thụ động/hoài nghi ngoài lề. Bẫy: critical thinking đúng một nửa. Khóa: thiếu active engagement." },
        { id: "e", text: "Pragmatist", isCorrect: false, rationale: "Cơ chế: Pragmatist ở giữa, tùy tình thế, giữ an toàn. Bẫy: linh hoạt có vẻ lý tưởng. Khóa: không phải active + independent rõ ràng." },
      ],
      difficulty: "basic",
      conceptTested: "Kelley followership types",
      takeaway: "Follower lý tưởng (Star) vừa chủ động vừa dám tư duy phản biện — không phải người luôn 'dạ vâng' (Yes People).",
    },
    {
      id: "q19",
      stem: "Which trust violation is hardest to repair according to the chapter?",
      options: [
        { id: "a", text: "Deception or an integrity violation involving dishonesty", isCorrect: true, rationale: "Cơ chế: ability violation có thể xin lỗi và sửa; integrity/deception làm niềm tin gần như không trở lại. Bẫy: lỗi năng lực gây thiệt hại lớn cũng nghiêm trọng. Khóa: dishonesty attacks integrity." },
        { id: "b", text: "A skill mistake openly admitted as an ability failure", isCorrect: false, rationale: "Cơ chế: ability violation thường dễ repair hơn bằng xin lỗi và cải thiện. Bẫy: lỗi kỹ năng có thể visible. Khóa: hard to repair là deception/integrity." },
        { id: "c", text: "A lack of technical training that is corrected", isCorrect: false, rationale: "Cơ chế: thiếu training thuộc ability, có thể sửa. Bẫy: technical failure ảnh hưởng output. Khóa: integrity nặng hơn ability." },
        { id: "d", text: "A follower's low trust propensity", isCorrect: false, rationale: "Cơ chế: trust propensity là xu hướng cá nhân tin người, không phải violation của leader. Bẫy: người khó tin làm repair khó hơn. Khóa: câu hỏi hỏi loại vi phạm." },
        { id: "e", text: "A mentor offering psychosocial support", isCorrect: false, rationale: "Cơ chế: mentoring là hỗ trợ, không phải trust violation. Bẫy: mentor có thể vi phạm trust nếu lừa dối, nhưng stem không nói vậy. Khóa: deception/integrity." },
      ],
      difficulty: "intermediate",
      conceptTested: "Trust dimensions and regaining trust",
      takeaway: "Trust có ba chân: integrity, benevolence, ability; gãy ability còn sửa được, gãy integrity vì lừa dối thì rất khó cứu.",
    },
    {
      id: "q20",
      stem: "Which example is a neutralizer rather than a substitute for leadership?",
      options: [
        { id: "a", text: "Followers are indifferent to organizational rewards, making both task- and relationship-oriented leadership less effective", isCorrect: true, rationale: "Cơ chế: indifference to rewards vô hiệu hóa hành vi leader, nên là neutralizer. Bẫy: kinh nghiệm/công việc cấu trúc cao là substitutes. Khóa: neutralizer blocks leader influence." },
        { id: "b", text: "Employees are highly trained, replacing the need for task direction", isCorrect: false, rationale: "Cơ chế: training/experience là substitute cho task-oriented leadership. Bẫy: cũng làm leader ít cần can thiệp. Khóa: substitute replaces need; neutralizer blocks effect." },
        { id: "c", text: "A job is highly structured and gives direct feedback", isCorrect: false, rationale: "Cơ chế: công việc cấu trúc cao/tự phản hồi thay thế nhu cầu chỉ dẫn. Bẫy: cũng giảm influence của leader. Khóa: đây là substitute." },
        { id: "d", text: "The work itself is intrinsically satisfying", isCorrect: false, rationale: "Cơ chế: công việc tự thỏa mãn có thể substitute relationship-oriented leadership. Bẫy: motivation độc lập với leader. Khóa: substitute, not neutralizer." },
        { id: "e", text: "Followers attribute success to the leader after good results", isCorrect: false, rationale: "Cơ chế: đây là attribution theory/romanticizing leadership. Bẫy: challenge to leadership cùng section. Khóa: không phải substitute/neutralizer example." },
      ],
      difficulty: "advanced",
      conceptTested: "Attribution and substitutes-neutralizers",
      takeaway: "Substitute làm leader bớt cần thiết; neutralizer làm hành vi leader khó phát huy tác dụng dù leader có cố.",
    },
    {
      id: "q21",
      stem: "A manager changes how much employees participate in a decision depending on whether the task is routine, nonroutine, or somewhere in between. Which leadership model is she applying?",
      options: [
        { id: "a", text: "Leader-participation model", isCorrect: true, rationale: "Cơ chế: model điều chỉnh mức subordinate participation trong decision making theo task structure. Bẫy: participative cũng là một behavior trong path-goal theory. Khóa: participation level + routine/nonroutine task là dấu hiệu riêng của leader-participation model." },
        { id: "b", text: "Path-goal theory", isCorrect: false, rationale: "Cơ chế: path-goal chọn directive/supportive/participative/achievement behavior để dọn đường tới goal theo follower/environment. Bẫy: có participative behavior nên rất gần. Khóa: câu hỏi tập trung loại decision và task structure, không motivation path." },
        { id: "c", text: "Situational Leadership II", isCorrect: false, rationale: "Cơ chế: SLII điều chỉnh Directing/Coaching/Supporting/Delegating theo competence và commitment của follower. Bẫy: cả hai đều yêu cầu leader linh hoạt. Khóa: readiness của follower khác task structure của decision." },
        { id: "d", text: "Fiedler's contingency model", isCorrect: false, rationale: "Cơ chế: Fiedler fit fixed leader style với leader-member relations, task structure và position power. Bẫy: task structure xuất hiện trong cả hai model. Khóa: Fiedler không khuyến nghị mức participation cho từng decision." },
        { id: "e", text: "Leader-member exchange theory", isCorrect: false, rationale: "Cơ chế: LMX giải thích chất lượng quan hệ ingroup/outgroup giữa leader và từng follower. Bẫy: participation có thể khác giữa ingroup/outgroup. Khóa: LMX không phân loại decision theo routine/nonroutine." },
      ],
      difficulty: "intermediate",
      conceptTested: "Leader-participation model",
      takeaway: "Leader-participation model hỏi cấp dưới nên tham gia decision đến đâu dựa trên task structure; nó không thay thế toàn bộ theory về leadership behavior.",
    },
  ],
  status: "ready",
  source:
    "Robbins & Judge, Organizational Behavior — Chapter 12 'Characteristics of Leaders' (pp.216-236); Slide 'OB-Topic 10-Leadership Followership' (Dr Lan Anh, IM2017, HCMUT); bổ sung slide: Hurwitz & Hurwitz 'Leadership is Half the Story', Ken Blanchard Situational Leadership II & relationship power, Robert Kelley 'In Praise of Followers' (5 followership types), Ira Chaleff 'The Courageous Follower', Bill George (authentic leadership), Daniel Goleman (EI & 6 leadership styles), Center for Creative Leadership (Fundamental 4).",
};

const topic11: Chapter = {
  slug: "topic-11",
  order: 11,
  title: "Topic 11 — Organizational Culture",
  bigIdea:
    "Văn hóa tổ chức là hệ Ý NGHĨA CHUNG (shared meaning) phân biệt tổ chức này với tổ chức khác — 'cách mọi người ở đây tin và hành xử cùng nhau'. Phần lớn nó VÔ HÌNH (giả định ngầm, giá trị) nhưng lại lái hành vi mạnh hơn cả quy định formal. Văn hóa vừa là TÀI SẢN (gắn kết, bản sắc, giảm turnover) vừa có thể là GÁNH NẶNG (cản trở thay đổi, đa dạng, M&A). Nó không tự nhiên mà có: bắt nguồn từ NHÀ SÁNG LẬP, được duy trì qua selection - top management - socialization, và truyền cho nhân viên qua stories/rituals/symbols/language. Vì văn hóa thay đổi CHẬM NHẤT, định hình nó (ethical/positive culture; culture ADD thay vì culture fit) là một thách thức LÃNH ĐẠO, không phải kỹ thuật.",
  bigIdeaPillars: [
    {
      label: "Văn hóa = shared meaning, phần lớn vô hình",
      body: "Org culture = hệ ý nghĩa chung members nắm giữ, phân biệt org khỏi org khác (R&J p296). 7 primary characteristics: innovation & risk taking, attention to detail, outcome orientation, people orientation, team orientation, aggressiveness, stability. Văn hóa là thuật ngữ MÔ TẢ (descriptive), khác job satisfaction. Iceberg: visible aspects (strategies, structure, policies) vs hidden aspects (attitudes, norms, assumptions). Schein 3 layers (slide): Observable Artifacts → Espoused Values → Basic Underlying Assumptions (nguồn cội của giá trị & hành động). Dominant culture vs subcultures; strong vs weak (core values intensely held & widely shared).",
    },
    {
      label: "Văn hóa LÀM GÌ: tài sản & gánh nặng",
      body: "5 functions (R&J p298): (1) boundary-defining, (2) truyền bản sắc, (3) tạo commitment vượt tư lợi, (4) enhances stability — social glue, (5) sense-making & control định hình hành vi. Văn hóa tạo organizational climate (shared perceptions về org & môi trường) → gắn với job satisfaction, customer satisfaction, financial performance. Nhưng cũng là LIABILITY: institutionalization (org sống vì chính nó), barriers to change, barriers to diversity, barriers to M&A, toxicity. Ethical dimension: ethical work climate (EWC).",
    },
    {
      label: "Hình thành & duy trì thế nào",
      body: "Ultimate source = FOUNDERS (Exhibit 16-4: founders' philosophy → selection → top management + socialization → culture). Culture begins 3 cách: founders tuyển & giữ người cùng chí hướng, socialize/indoctrinate nhân viên, và làm role model. Keeping alive = 3 lực: Selection (tuyển người values khớp), Top management (lời nói & hành vi lãnh đạo), Socialization — 3 stages (Exhibit 16-2): prearrival → encounter → metamorphosis → outcomes (productivity/commitment/turnover). Nhân viên HỌC văn hóa qua: stories, rituals, material symbols, language.",
    },
    {
      label: "Định hình 'văn hóa đúng' — thách thức lãnh đạo",
      body: "Creating ethical culture (visibly reward ethical/punish unethical, protective mechanisms — ethical counselors/ombudspeople, bắt đầu từ top). Positive culture: building on employee strengths, rewarding more than punishing, encouraging vitality & growth. Spiritual culture (workplace spirituality). Culture FIT vs culture ADD: fit dễ thành cloning → mất lợi thế diversity; nên hướng culture add. Person-job fit vs person-organization fit. Can culture be changed? Văn hóa đổi CHẬM NHẤT (Westerman) → là leadership challenge, không phải kỹ thuật (bắc cầu Topic 12).",
    },
  ],
  learningObjectives: [
    "Định nghĩa organizational culture là hệ shared meaning và liệt kê 7 primary characteristics (R&J).",
    "Phân biệt các tầng văn hóa: visible/hidden aspects (iceberg) và Schein 3 layers (artifacts/espoused values/basic assumptions).",
    "Phân biệt dominant culture vs subcultures, strong vs weak cultures, và culture vs formalization.",
    "Trình bày 5 functions của văn hóa và cách văn hóa tạo organizational climate.",
    "Giải thích ethical dimension of culture (ethical work climate) và khi nào văn hóa là asset.",
    "Phân tích khi nào văn hóa là liability: institutionalization, barriers to change/diversity/M&A.",
    "Mô tả cách văn hóa hình thành từ founders (Exhibit 16-4) và 3 lực duy trì: selection, top management, socialization.",
    "Giải thích 3 stages of socialization (prearrival/encounter/metamorphosis) và cách nhân viên học văn hóa (stories/rituals/symbols/language).",
    "So sánh cách tạo ethical culture, positive culture và spiritual culture.",
    "Vận dụng culture fit vs culture add, P-O fit và lý do văn hóa đổi chậm nhất là thách thức lãnh đạo.",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "Organizational culture: (A) shared meaning & các tầng, (B) văn hóa làm gì (asset/liability), (C) hình thành & duy trì, (D) định hình văn hóa đúng — thách thức lãnh đạo.",
    nodes: [
      {
        id: "oc",
        label: "Organizational culture",
        group: "concept",
        sectionId: "s1",
        detail: "Hệ shared meaning phân biệt org; phần lớn vô hình, lái hành vi mạnh hơn quy định formal.",
      },
      {
        id: "g_what",
        label: "A. Shared meaning & tầng",
        group: "concept",
        parent: "oc",
        sectionId: "s1",
        detail: "7 characteristics; iceberg; Schein 3 layers; strong/weak.",
      },
      {
        id: "g_do",
        label: "B. Văn hóa làm gì",
        group: "concept",
        parent: "oc",
        sectionId: "s4",
        detail: "5 functions, climate; asset vs liability.",
      },
      {
        id: "g_form",
        label: "C. Hình thành & duy trì",
        group: "concept",
        parent: "oc",
        sectionId: "s7",
        detail: "Founders → selection/top mgmt/socialization; learn qua stories/rituals/symbols/language.",
      },
      {
        id: "g_shape",
        label: "D. Định hình văn hóa đúng",
        group: "concept",
        parent: "oc",
        sectionId: "s10",
        detail: "Ethical/positive/spiritual; culture fit vs add; leadership challenge.",
      },
      {
        id: "t_char",
        label: "7 characteristics",
        group: "term",
        parent: "g_what",
        sectionId: "s1",
        detail: "Innovation, detail, outcome, people, team, aggressiveness, stability.",
      },
      {
        id: "t_layer",
        label: "Iceberg + Schein 3 layers",
        group: "term",
        parent: "g_what",
        sectionId: "s2",
        detail: "Visible/hidden; artifacts, espoused values, basic assumptions.",
      },
      {
        id: "t_strong",
        label: "Dominant/sub, strong/weak",
        group: "term",
        parent: "g_what",
        sectionId: "s3",
        detail: "Dominant culture, subcultures, core values, strong culture.",
      },
      {
        id: "t_func",
        label: "5 functions + climate",
        group: "term",
        parent: "g_do",
        sectionId: "s4",
        detail: "Boundary, identity, commitment, stability, sense-making/control; organizational climate.",
      },
      {
        id: "t_ethic",
        label: "Ethical dimension (EWC)",
        group: "term",
        parent: "g_do",
        sectionId: "s5",
        detail: "Ethical work climate, ECT/ECI, instrumental/caring/rules categories.",
      },
      {
        id: "t_liab",
        label: "Asset vs liability",
        group: "term",
        parent: "g_do",
        sectionId: "s6",
        detail: "Culture can drive performance or become institutionalized, toxic, anti-change.",
      },
      {
        id: "t_begin",
        label: "Founders + how cultures form",
        group: "term",
        parent: "g_form",
        sectionId: "s7",
        detail: "Founders' philosophy shapes selection, top management, socialization, culture.",
      },
      {
        id: "t_alive",
        label: "Selection/top mgmt/socialization",
        group: "term",
        parent: "g_form",
        sectionId: "s8",
        detail: "Three forces keep culture alive and move newcomers into fit.",
      },
      {
        id: "t_learn",
        label: "Stories/rituals/symbols/language",
        group: "term",
        parent: "g_form",
        sectionId: "s9",
        detail: "Four channels employees use to learn culture.",
      },
      {
        id: "t_eps",
        label: "Ethical/Positive/Spiritual culture",
        group: "term",
        parent: "g_shape",
        sectionId: "s10",
        detail: "Three cultures leaders deliberately create through example, rewards, meaning.",
      },
      {
        id: "t_fit",
        label: "Culture fit vs add + change",
        group: "term",
        parent: "g_shape",
        sectionId: "s11",
        detail: "Fit can clone; add protects diversity; culture change is leadership challenge.",
      },
    ],
    edges: [
      { from: "oc", to: "g_what", label: "shared" },
      { from: "oc", to: "g_do", label: "làm gì" },
      { from: "oc", to: "g_form", label: "hình thành" },
      { from: "oc", to: "g_shape", label: "định hình" },
      { from: "g_what", to: "t_char", label: "chars" },
      { from: "g_what", to: "t_layer", label: "tầng" },
      { from: "g_what", to: "t_strong", label: "strong" },
      { from: "g_do", to: "t_func", label: "functions" },
      { from: "g_do", to: "t_ethic", label: "ethical" },
      { from: "g_do", to: "t_liab", label: "liability" },
      { from: "g_form", to: "t_begin", label: "founders" },
      { from: "g_form", to: "t_alive", label: "duy trì" },
      { from: "g_form", to: "t_learn", label: "học" },
      { from: "g_shape", to: "t_eps", label: "e/p/s" },
      { from: "g_shape", to: "t_fit", label: "fit/add" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "What is organizational culture?",
      blocks: [
        calloutBlock(
          "key",
          "Định nghĩa (R&J p296)",
          "Organizational culture = hệ ý nghĩa chung (system of shared meaning) members nắm giữ, phân biệt tổ chức này với tổ chức khác. Là thuật ngữ MÔ TẢ (descriptive) — cách nhân viên NHÌN NHẬN văn hóa, khác job satisfaction (mức HÀI LÒNG). Slide: culture is about how people here believe and behave together.",
        ),
        comparisonBlock(
          "7 Primary Characteristics of Culture (R&J p296)",
          ["Đặc điểm", "Nội dung"],
          [
            { label: "Innovation & risk taking", cells: ["Mức độ khuyến khích nhân viên đổi mới & dám chấp nhận rủi ro."] },
            { label: "Attention to detail", cells: ["Mức độ kỳ vọng nhân viên tỉ mỉ, phân tích, chú ý chi tiết."] },
            { label: "Outcome orientation", cells: ["Quản lý tập trung vào KẾT QUẢ hơn là kỹ thuật/quy trình."] },
            { label: "People orientation", cells: ["Quyết định cân nhắc tác động lên CON NGƯỜI trong tổ chức."] },
            { label: "Team orientation", cells: ["Công việc tổ chức quanh ĐỘI NHÓM hơn cá nhân."] },
            { label: "Aggressiveness", cells: ["Mức độ nhân viên quyết liệt, cạnh tranh, thay vì dễ dãi."] },
            { label: "Stability", cells: ["Mức độ hoạt động nhấn giữ NGUYÊN TRẠNG hơn là tăng trưởng."] },
          ],
        ),
      ],
      keyTerms: [
        { term: "Organizational culture", definition: "System of shared meaning held by members that distinguishes one organization from others." },
        { term: "Culture as descriptive", definition: "Văn hóa mô tả cách nhân viên nhìn nhận tổ chức, khác với mức hài lòng như job satisfaction." },
      ],
    },
    {
      id: "s2",
      heading: "Các tầng văn hóa: iceberg + Schein 3 layers",
      blocks: [
        calloutBlock(
          "note",
          "Iceberg — visible vs hidden (slide 12)",
          "Visible aspects như strategies, objectives, policies & procedures, structure, technology, formal authority, chains of command chỉ là phần NỔI. Phần CHÌM — attitudes, perceptions, group norms, informal interactions, conflicts — mới quyết định phần lớn hành vi.",
        ),
        flowBlock(
          "s2",
          "Schein — 3 Layers of Organizational Culture (slide 14)",
          "horizontal",
          [
            { id: "l1", label: "Observable Artifacts", group: "concept", detail: "Cấu trúc/quy trình hữu hình, quan sát được nhưng khó giải mã ý nghĩa." },
            { id: "l2", label: "Espoused Values", group: "concept", detail: "Giá trị, chiến lược, mục tiêu, triết lý tổ chức công khai tuyên bố." },
            { id: "l3", label: "Basic Underlying Assumptions", group: "concept", detail: "Niềm tin/tri giác/cảm xúc vô thức, mặc nhiên; nguồn cội hành động." },
          ],
          [
            { from: "l1", to: "l2", label: "sâu hơn" },
            { from: "l2", to: "l3", label: "gốc rễ" },
          ],
          "Từ bề mặt quan sát được (artifacts) → giá trị tuyên bố (espoused values) → giả định ngầm vô thức (nguồn cội của giá trị & hành động, Schein 2004).",
        ),
        comparisonBlock(
          "3 Layers (Schein 2004)",
          ["Tầng", "Nội dung"],
          [
            { label: "Observable Artifacts", cells: ["Cấu trúc & quy trình hữu hình, quan sát được nhưng KHÓ giải mã ý nghĩa."] },
            { label: "Espoused Values", cells: ["Chiến lược, mục tiêu, triết lý — lý lẽ tổ chức công khai tuyên bố."] },
            { label: "Basic Underlying Assumptions", cells: ["Niềm tin, tri giác, suy nghĩ, cảm xúc VÔ THỨC, mặc nhiên — nguồn cội tối hậu của giá trị & hành động."] },
          ],
        ),
      ],
      keyTerms: [
        { term: "Observable artifacts", definition: "Biểu hiện hữu hình của văn hóa có thể quan sát nhưng khó giải mã." },
        { term: "Espoused values", definition: "Giá trị, mục tiêu, triết lý tổ chức công khai tuyên bố." },
        { term: "Basic underlying assumptions", definition: "Giả định ngầm vô thức chi phối cách thành viên nhìn thế giới và hành động." },
      ],
    },
    {
      id: "s3",
      heading: "Dominant culture, subcultures, strong vs weak",
      blocks: [
        comparisonBlock(
          "Dominant culture vs Subcultures (R&J p297)",
          ["Khái niệm", "Nội dung"],
          [
            { label: "Dominant culture", cells: ["Hệ core values được ĐA SỐ thành viên chia sẻ — tạo personality chung của tổ chức."] },
            { label: "Subcultures", cells: ["Miniculture trong tổ chức lớn, hình thành theo phòng ban/vị trí địa lý; gồm core values chung + giá trị riêng của nhóm."] },
            { label: "Core values", cells: ["Giá trị chủ đạo được chấp nhận rộng khắp tổ chức."] },
          ],
        ),
        calloutBlock(
          "key",
          "Strong vs Weak & Culture vs Formalization (R&J p298)",
          "Strong culture = core values được nắm giữ MÃNH LIỆT (intensely held) & chia sẻ RỘNG RÃI (widely shared) → ảnh hưởng hành vi mạnh, tăng cohesiveness/loyalty/commitment, GIẢM turnover. Culture vs formalization: strong culture & high formalization là hai con đường tới cùng đích (predictability) — văn hóa mạnh thì càng ít cần quy định formal.",
        ),
      ],
      keyTerms: [
        { term: "Dominant culture", definition: "Core values được đa số thành viên tổ chức chia sẻ." },
        { term: "Subcultures", definition: "Miniculture theo phòng ban/địa lý, kết hợp core values chung và giá trị riêng." },
        { term: "Strong culture", definition: "Core values được nắm giữ mạnh và chia sẻ rộng." },
      ],
    },
    {
      id: "s4",
      heading: "What cultures do: 5 functions + climate",
      blocks: [
        comparisonBlock(
          "5 Functions of Culture (R&J p298)",
          ["Chức năng", "Nội dung"],
          [
            { label: "Boundary-defining", cells: ["Tạo ranh giới phân biệt tổ chức này với tổ chức khác."] },
            { label: "Sense of identity", cells: ["Truyền bản sắc chung cho thành viên."] },
            { label: "Commitment", cells: ["Tạo cam kết với điều gì đó LỚN HƠN tư lợi cá nhân."] },
            { label: "Stability (social glue)", cells: ["Chất keo xã hội giữ tổ chức gắn kết, cung cấp chuẩn nói & làm."] },
            { label: "Sense-making & control", cells: ["Cơ chế tạo nghĩa & kiểm soát định hình thái độ, hành vi nhân viên. (sách) Nghịch lý: xu hướng phi tập trung làm culture QUAN TRỌNG hơn bao giờ hết (thay control chính thức) nhưng cũng KHÓ xây hơn — team có thể trung thành với team hơn tổ chức; virtual orgs thiếu face-to-face nên khó lập norms chung → cần leader giao tiếp thường xuyên về mục tiêu chung."] },
          ],
        ),
        calloutBlock(
          "note",
          "Culture creates climate (R&J p299)",
          "Organizational climate = shared perceptions thành viên có về tổ chức & môi trường làm việc, như team spirit cấp tổ chức. Positive climate gắn với job satisfaction, involvement, commitment, customer satisfaction & financial performance. Dimensions: innovation, safety, justice, diversity, customer service. (sách) Meta-analysis hàng chục mẫu: psychological climate quan hệ mạnh với satisfaction/involvement/commitment/motivation; các climate TƯƠNG TÁC nhau (climate trao quyền chỉ bật performance khi đi kèm climate personal accountability); safety climate làm giảm số chấn thương ghi nhận.",
        ),
      ],
      keyTerms: [
        { term: "Functions of culture", definition: "Các chức năng boundary, identity, commitment, stability, sense-making/control của văn hóa." },
        { term: "Organizational climate", definition: "Shared perceptions về tổ chức và môi trường làm việc." },
      ],
    },
    {
      id: "s5",
      heading: "Ethical dimension of culture",
      blocks: [
        calloutBlock(
          "key",
          "Ethical work climate — EWC (R&J p299)",
          "Văn hóa KHÔNG trung tính về đạo đức. Ethical work climate (EWC) = quan niệm chung về đúng/sai, phản ánh giá trị thật & định hình ra quyết định đạo đức của thành viên. Đo bằng ethical climate theory (ECT) & ethical climate index (ECI).",
        ),
        comparisonBlock(
          "5 ethical climate categories phổ biến (R&J p300)",
          ["Category", "Nội dung"],
          [
            { label: "Instrumental", cells: ["Ra quyết định dựa trên TƯ LỢI (egoistic); gắn với job satisfaction THẤP."] },
            { label: "Caring", cells: ["Vì lợi ích của SỐ ĐÔNG stakeholders như nhân viên, khách hàng, nhà cung cấp."] },
            { label: "Independence", cells: ["Mỗi cá nhân dựa vào chuẩn đạo đức CÁ NHÂN của mình."] },
            { label: "Law & code", cells: ["Tuân theo chuẩn đạo đức BÊN NGOÀI như bộ quy tắc nghề nghiệp, luật."] },
            { label: "Rules", cells: ["Tuân theo kỳ vọng NỘI BỘ chuẩn hóa như sổ tay/chính sách tổ chức."] },
          ],
        ),
        calloutBlock(
          "note",
          "ECT outcomes chi tiết (sách)",
          "Instrumental: −job satisfaction, +turnover intentions, +workplace bullying, +deviance; Caring/Rules: +satisfaction; Caring/Independence/Rules/Law-and-code: giảm turnover intentions, bullying, dysfunctional behavior. Ethical cultures nhìn dài hạn, cân bằng quyền của nhiều stakeholders.",
        ),
      ],
      keyTerms: [
        { term: "Ethical work climate", definition: "Shared conceptions of right and wrong behavior in the workplace." },
        { term: "Ethical climate theory", definition: "Khung phân loại climate đạo đức như instrumental, caring, independence, law/code, rules." },
      ],
    },
    {
      id: "s6",
      heading: "Culture as asset vs liability",
      blocks: [
        calloutBlock(
          "key",
          "Asset vs Liability (R&J p301-302)",
          "Văn hóa mạnh là TÀI SẢN — tạo môi trường đạo đức tích cực, nuôi đổi mới, đóng góp bottom line. Nhưng cũng có thể là GÁNH NẶNG khi các khía cạnh dysfunctional lan xuống toàn tổ chức, tạo toxic culture và cost of bad culture.",
        ),
        comparisonBlock(
          "Culture as a Liability — 4 rào cản (R&J p302-303)",
          ["Rào cản", "Nội dung"],
          [
            { label: "Institutionalization", cells: ["Tổ chức sống vì chính nó, tách khỏi mục tiêu gốc → hành vi/thói quen không bị chất vấn → bóp nghẹt đổi mới."] },
            { label: "Barriers to change", cells: ["Khi shared values không còn khớp hiệu quả tổ chức, nhất là môi trường biến động nhanh, tính nhất quán trở thành lực cản."] },
            { label: "Barriers to diversity", cells: ["Ép người mới đồng hóa (assimilate) → triệt tiêu lợi thế đa dạng; văn hóa mạnh có thể dung túng định kiến."] },
            { label: "Barriers to acquisitions & mergers", cells: ["Culture clash là yếu tố hàng đầu khiến M&A thất bại, hơn cả tài chính/sản phẩm."] },
          ],
        ),
      ],
      keyTerms: [
        { term: "Institutionalization", definition: "Khi tổ chức được coi trọng vì chính nó và mục tiêu ban đầu bị lu mờ." },
        { term: "Culture as a liability", definition: "Khi văn hóa trở thành rào cản thay đổi, diversity, M&A hoặc nuôi dysfunctional behavior." },
      ],
    },
    {
      id: "s6b",
      heading: "Culture, sustainability & innovation (sách Ch.16)",
      blocks: [
        calloutBlock(
          "key",
          "Culture & sustainability (sách)",
          "Sustainability = practices duy trì được RẤT lâu vì tools/structures hỗ trợ không bị chính process phá hỏng; gốc environmental movement + social sustainability (hệ xã hội ảnh hưởng và bị ảnh hưởng bởi tổ chức theo thời gian); muốn business bền vững thật phải xây văn hóa dài hạn và ĐƯA VALUES VÀO THỰC HÀNH — cần \"sustainable system for creating sustainability\"; nghiên cứu tiết kiệm năng lượng: lấy group feedback giảm tiêu thụ hơn hẳn phát tài liệu tuyên truyền → nói chuyện + gắn value vào culture mới đổi hành vi.",
        ),
        calloutBlock(
          "insight",
          "Văn hóa innovative (sách)",
          "Đặc trưng: open, unconventional, collaborative, vision-driven, accelerating; start-up innovative \"by definition\" (nhỏ, agile, phải giải bài toán để sống); công ty lâu năm vẫn giữ được innovation NHỜ culture (mở, chịu trách nhiệm công khai với thất bại; hoặc \"culture of caring\" thúc phát triển thuốc hiếm dù xác suất thành công thấp).",
        ),
      ],
      keyTerms: [
        {
          term: "Sustainability",
          definition:
            "Practices duy trì được rất lâu vì tools/structures hỗ trợ không bị chính process phá hỏng.",
        },
      ],
    },
    {
      id: "s7",
      heading: "Cách văn hóa hình thành",
      blocks: [
        calloutBlock(
          "key",
          "How a culture begins (R&J p304, slide 24)",
          "Nguồn cội tối hậu = FOUNDERS. Culture bắt đầu theo 3 cách: (1) founders tuyển & GIỮ người nghĩ/cảm giống mình; (2) indoctrinate & socialize nhân viên theo cách của mình; (3) hành vi founders = role model khuyến khích nhân viên đồng nhất với họ. Slide cũng nhấn leaders/managers là nhóm định hình culture rất mạnh.",
        ),
        flowBlock(
          "s7",
          "How Organizational Cultures Form (Exhibit 16-4)",
          "horizontal",
          [
            { id: "f1", label: "Philosophy of founders", group: "concept", detail: "Triết lý nhà sáng lập là nguồn cội ban đầu của văn hóa." },
            { id: "f2", label: "Selection criteria", group: "concept", detail: "Tuyển/giữ người phù hợp giá trị và định hướng của founders." },
            { id: "f3", label: "Top management + Socialization", group: "concept", detail: "Lãnh đạo làm mẫu và socialization biến giá trị thành hành vi." },
            { id: "f4", label: "Organizational culture", group: "concept", detail: "Shared meaning được duy trì và truyền lại trong tổ chức." },
          ],
          [
            { from: "f1", to: "f2", label: "lọc" },
            { from: "f2", to: "f3", label: "dẫn" },
            { from: "f3", to: "f4", label: "thành" },
          ],
          "Triết lý sáng lập → chọn lọc → top management & socialization → văn hóa tổ chức.",
        ),
      ],
      keyTerms: [
        { term: "Founders", definition: "Nhà sáng lập, nguồn cội tối hậu của văn hóa tổ chức ban đầu." },
        { term: "Culture formation", definition: "Quá trình triết lý founders đi qua selection, top management và socialization để thành culture." },
      ],
    },
    {
      id: "s8",
      heading: "Keeping culture alive",
      blocks: [
        calloutBlock(
          "key",
          "3 lực duy trì văn hóa (R&J p304)",
          "Selection (tuyển người có values khớp — two-way street: ứng viên thấy lệch cũng tự rút), Top management (lời nói & hành vi lãnh đạo lập chuẩn: risk taking, tự do, trang phục, thưởng phạt), Socialization (giúp người mới thích nghi văn hóa).",
        ),
        flowBlock(
          "s8",
          "Socialization Model — 3 stages (Exhibit 16-2)",
          "horizontal",
          [
            { id: "s_pre", label: "Prearrival", group: "concept", detail: "Nhân viên mang values/thái độ/kỳ vọng trước khi gia nhập." },
            { id: "s_enc", label: "Encounter", group: "concept", detail: "Đối mặt kỳ vọng với thực tế tổ chức." },
            { id: "s_meta", label: "Metamorphosis", group: "concept", detail: "Điều chỉnh để hòa nhập vai trò, nhóm và values." },
            { id: "s_out", label: "Outcomes", group: "concept", detail: "Productivity, commitment, giảm turnover nếu socialization tốt." },
          ],
          [
            { from: "s_pre", to: "s_enc", label: "vào org" },
            { from: "s_enc", to: "s_meta", label: "thích nghi" },
            { from: "s_meta", to: "s_out", label: "kết quả" },
          ],
          "Prearrival → encounter → metamorphosis → outcomes: productivity, commitment, giảm turnover.",
        ),
        comparisonBlock(
          "3 stages of socialization (R&J p305)",
          ["Giai đoạn", "Nội dung"],
          [
            { label: "Prearrival stage", cells: ["Kỳ học TRƯỚC khi gia nhập; mang sẵn values/thái độ/kỳ vọng."] },
            { label: "Encounter stage", cells: ["Bước vào tổ chức, đối mặt khả năng kỳ vọng ≠ thực tế; lệch nhiều có thể vỡ mộng & rời đi."] },
            { label: "Metamorphosis stage", cells: ["Biến đổi để hòa nhập: nắm kỹ năng/vai trò, điều chỉnh theo chuẩn & giá trị nhóm."] },
          ],
        ),
        comparisonBlock(
          "Entry socialization options (sách, Exhibit 16-3)",
          ["Cặp lựa chọn", "Nội dung"],
          [
            {
              label: "Formal ↔ Informal",
              cells: [
                "Tách riêng đào tạo tân binh vs ném thẳng vào việc.",
              ],
            },
            {
              label: "Individual ↔ Collective",
              cells: ["Từng người vs cả lứa như boot camp."],
            },
            {
              label: "Fixed ↔ Variable",
              cells: [
                "Lịch chuyển giai đoạn chuẩn hóa — probation 8–10 năm \"associate\" ở hãng kế toán/luật vs không báo trước — thăng khi 'sẵn sàng'.",
              ],
            },
            {
              label: "Serial ↔ Random",
              cells: ["Có role model mentor/apprentice vs tự bơi."],
            },
            {
              label: "Investiture ↔ Divestiture",
              cells: [
                "Xác nhận phẩm chất sẵn có của tân binh vs 'lột' đặc điểm cũ như pledge hội sinh viên.",
              ],
            },
          ],
        ),
        calloutBlock(
          "key",
          "Hai bundle socialization (sách)",
          "Institutional (formal+collective+fixed+serial+divestiture) → tân binh bị chuẩn hóa hành vi, P-O fit & commitment cao; cảnh sát, cứu hỏa. Individual (informal+individual+variable+random+investiture) → role innovation; R&D, quảng cáo, làm phim.",
        ),
        calloutBlock(
          "note",
          "Honeymoon–hangover (sách)",
          "Đo attitudes nhiều thời điểm cho thấy satisfaction GIẢM trong giai đoạn điều chỉnh đầu (kỳ vọng lý tưởng chạm thực tế); social support từ supervisor/coworker bị rút dần sau vài tuần ('business as usual'); role conflict/overload tăng dần — ai tăng nhiều nhất thì commitment/satisfaction giảm mạnh nhất.",
        ),
      ],
      keyTerms: [
        { term: "Socialization", definition: "Quá trình giúp nhân viên mới thích nghi với văn hóa tổ chức." },
        { term: "Prearrival stage", definition: "Giai đoạn trước khi gia nhập, khi cá nhân đã có values và kỳ vọng." },
        { term: "Metamorphosis stage", definition: "Giai đoạn người mới điều chỉnh để hòa nhập với vai trò, nhóm và văn hóa." },
      ],
    },
    {
      id: "s9",
      heading: "How employees learn culture",
      blocks: [
        comparisonBlock(
          "4 kênh truyền văn hóa (R&J p307)",
          ["Kênh", "Nội dung"],
          [
            { label: "Stories", cells: ["Chuyện kể về founders, phá lệ, thành công từ tay trắng, ứng phó sai lầm; neo hiện tại vào quá khứ và hợp thức hóa thực hành hiện tại."] },
            { label: "Rituals", cells: ["Chuỗi hoạt động lặp lại thể hiện & củng cố giá trị cốt lõi — mục tiêu/con người nào quan trọng, cái nào có thể bỏ."] },
            { label: "Material symbols", cells: ["Biểu tượng vật chất như trụ sở, xe, kích thước phòng, perks, trang phục → truyền tải mức bình đẳng và hành vi phù hợp."] },
            { label: "Language", cells: ["Ngôn ngữ/thuật ngữ riêng, jargon, acronym → thành viên dùng để xác nhận mình thuộc về văn hóa."] },
          ],
        ),
        calloutBlock(
          "note",
          "Từ văn hóa → organizational climate (slide 25)",
          "Qua 4 kênh này, nhân viên hình thành shared perceptions (organizational climate) về tổ chức & môi trường làm việc.",
        ),
      ],
      keyTerms: [
        { term: "Stories", definition: "Chuyện kể truyền giá trị, lịch sử và chuẩn hành vi của tổ chức." },
        { term: "Rituals", definition: "Hoạt động lặp lại củng cố giá trị cốt lõi." },
        { term: "Material symbols", definition: "Biểu tượng vật chất truyền tín hiệu về văn hóa." },
        { term: "Language", definition: "Jargon/thuật ngữ riêng giúp thành viên nhận diện thuộc về văn hóa." },
      ],
    },
    {
      id: "s10",
      heading: "Creating ethical / positive / spiritual culture",
      blocks: [
        comparisonBlock(
          "Ba loại văn hóa cần chủ động tạo (R&J p308-311)",
          ["Loại", "Cách tạo"],
          [
            {
              label: "Ethical culture",
              cells: ["Lãnh đạo làm gương (top-down); visibly REWARD hành vi đạo đức & PUNISH vi phạm; đánh giá cả means lẫn ends; protective mechanisms như ethical counselors, ombudspeople, ethical officers để báo cáo không sợ trả đũa. (sách) Values của top management là predictor tốt của ethical behavior nhân viên (áp lực từ leader → tăng ý định unethical ở auditors), NHƯNG ethical culture cũng chảy BOTTOM-UP: nhân viên có ethical values giống department được đề bạt nhiều hơn."],
            },
            {
              label: "Positive culture",
              cells: ["Building on employee strengths; rewarding more than punishing (catching employees doing something right); encouraging vitality & growth. Lưu ý outside context: không phải cure-all. (sách) Giới hạn: không phải văn hóa quốc gia nào cũng chuộng positivity như Mỹ; đẩy quá mức thành ép buộc — 'social orthodoxy of positiveness' có thể stigmatize người không khớp khuôn."],
            },
            {
              label: "Spiritual culture",
              cells: ["Workplace spirituality: công việc có Ý NGHĨA trong cộng đồng; org tâm linh có benevolence, strong sense of purpose, trust & respect, open-mindedness. (sách) Cách đạt: hỗ trợ work–life balance; giúp nhân viên thấy purpose (group counseling/OD); corporate chaplains (gây tranh cãi). 3 phê phán: nền tảng khoa học mỏng (định nghĩa quá rộng); có thể làm nhân viên khó chịu nếu thành áp đặt tôn giáo; tương thích lợi nhuận? — evidence hạn chế nói CÓ (tổ chức cho nhân viên phát triển spiritual outperform; +creativity, +satisfaction, +commitment)."],
            },
          ],
        ),
      ],
      keyTerms: [
        { term: "Ethical culture", definition: "Văn hóa chủ động thưởng hành vi đạo đức, phạt vi phạm và bảo vệ cơ chế báo cáo." },
        { term: "Positive organizational culture", definition: "Văn hóa xây trên strengths, reward hơn punish, khuyến khích vitality & growth." },
        { term: "Workplace spirituality", definition: "Sự thừa nhận đời sống nội tâm được nuôi dưỡng bởi công việc có ý nghĩa trong cộng đồng." },
      ],
    },
    {
      id: "s11",
      heading: "Culture fit vs add + change",
      blocks: [
        comparisonBlock(
          "Culture fit vs Culture add (slide 46)",
          ["Khía cạnh", "Culture fit", "Culture add"],
          [
            { label: "Ý tưởng", cells: ['Tuyển người "hợp gu" văn hóa hiện có.', "Tuyển người MỞ RỘNG/bổ sung văn hóa."] },
            { label: "Rủi ro/lợi ích", cells: ["Dễ thành CLONING → triệt tiêu diversity.", "Kết nối đội đa dạng thành khối gắn kết → giải quyết vấn đề tốt hơn."] },
            { label: "Liên hệ", cells: ["Person-organization fit hữu ích nhưng quá mức gây đồng nhất.", "Ưu tiên khi cần đổi mới & đa dạng."] },
          ],
        ),
        calloutBlock(
          "key",
          "Can culture be changed? — leadership challenge (slide 47-48)",
          "Đổi văn hóa cần role của top management (cam kết & hỗ trợ) + employees (thực thi) + training/mentoring + formulate value statements + reward hành vi + stories. Nhưng First Law of Digital Innovation (Westerman): công nghệ đổi nhanh, tổ chức đổi chậm hơn, văn hóa tổ chức đổi CHẬM NHẤT → đây KHÔNG phải thách thức công nghệ mà là thách thức LÃNH ĐẠO.",
        ),
        calloutBlock(
          "note",
          "Organizational culture trong bối cảnh toàn cầu (sách, cuối Ch.16)",
          "Org culture mạnh tới mức thường vượt biên giới, nhưng không được bỏ qua national culture; manager Mỹ cần culturally sensitive (nói nhỏ, chậm, nghe nhiều, tránh bàn tôn giáo/chính trị); ethics cọ xát national culture: worldview Mỹ coi bribery/nepotism/thiên vị quan hệ là rất unethical + đề cao profit maximization, trong khi manager ở developing economies xem quyết định đạo đức EMBEDDED trong môi trường xã hội — giúp đỡ gia đình/bạn bè có thể là TRÁCH NHIỆM đạo đức; đa quốc gia phải quyết có chuẩn hóa văn hóa tổ chức xuyên nước hay không.",
        ),
        calloutBlock(
          "key",
          "So what — kiến thức này đổi hành động của bạn",
          "Văn hóa vô hình nhưng lái hành vi mạnh hơn quy định formal. Hành động: vào tổ chức mới, đọc culture qua stories/rituals/symbols/language thay vì chỉ đọc handbook; trước khi nhận offer, cân culture fit vs culture add; nếu bạn là quản lý — văn hóa sống qua selection, top management, socialization, nghĩa là hành vi hằng ngày của chính bạn là \"bài giảng văn hóa\" mạnh nhất, không phải poster giá trị trên tường. → Mắt xích môn học: văn hóa là \"phần mềm nền\" mà leadership (Topic 10) viết ra và change management (Topic 12) phải viết lại — culture đổi chậm nhất chính là lý do đổi mới tổ chức khó nhất.",
        ),
      ],
      keyTerms: [
        { term: "Culture fit", definition: "Mức độ cá nhân khớp với values/văn hóa hiện có của tổ chức." },
        { term: "Culture add", definition: "Cách tuyển/chọn người bổ sung và mở rộng văn hóa thay vì nhân bản hiện trạng." },
        { term: "Person-organization fit", definition: "Độ khớp giữa values cá nhân và values tổ chức." },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "Across two branches, newcomers quickly learn the same unwritten assumptions about serving customers and making decisions, and those patterns distinguish the company from competitors. What are they encountering?",
      options: [
        { id: "a", text: "Organizational culture: a shared-meaning system that distinguishes the company", isCorrect: true, rationale: "Cơ chế: assumptions được members ở nhiều branch chia sẻ và tạo pattern riêng so với competitors. Bẫy: unwritten nên dễ coi là informal habits rời rạc. Khóa: shared meaning + distinguishes = organizational culture." },
        { id: "b", text: "Job satisfaction with pay and supervision", isCorrect: false, rationale: "Cơ chế: stem mô tả how work is understood, không đánh giá employees thích pay/supervision đến đâu. Bẫy: cả culture và satisfaction đều được members cảm nhận. Khóa: culture descriptive; satisfaction evaluative." },
        { id: "c", text: "Only formal policies in the employee handbook", isCorrect: false, rationale: "Cơ chế: các assumptions trong case là unwritten và học qua socialization. Bẫy: customer service/decision rules có thể được viết thành policy. Khóa: artifacts/policies chỉ là phần nổi của culture." },
        { id: "d", text: "A temporary mood shared during one branch meeting", isCorrect: false, rationale: "Cơ chế: pattern lặp qua branches và newcomers, không phải affect nhất thời. Bẫy: một trải nghiệm chung có thể tạo cảm giác tập thể. Khóa: durability/shared assumptions khác mood." },
        { id: "e", text: "The CEO's individual personality and nothing else", isCorrect: false, rationale: "Cơ chế: leader có thể khởi tạo culture nhưng case cho thấy members cùng giữ meaning. Bẫy: assumptions thường phản ánh founder. Khóa: culture là collective system, không phải personality của một người." },
      ],
      difficulty: "basic",
      conceptTested: "Definition of organizational culture",
      takeaway: "Organizational culture là shared meaning mô tả cách tổ chức vận hành, không phải mức nhân viên hài lòng.",
    },
    {
      id: "q02",
      stem: "A company evaluates managers mainly by final results rather than the techniques they use. Which cultural characteristic is emphasized?",
      options: [
        { id: "a", text: "Outcome orientation", isCorrect: true, rationale: "Cơ chế: outcome orientation tập trung vào kết quả hơn kỹ thuật/quy trình. Bẫy: attention to detail cũng liên quan cách làm. Khóa: final results là outcome." },
        { id: "b", text: "People orientation", isCorrect: false, rationale: "Cơ chế: people orientation cân nhắc tác động lên con người. Bẫy: managers là people. Khóa: stem nói results over techniques." },
        { id: "c", text: "Team orientation", isCorrect: false, rationale: "Cơ chế: team orientation tổ chức việc quanh đội nhóm. Bẫy: manager đánh giá team. Khóa: không có team design." },
        { id: "d", text: "Stability", isCorrect: false, rationale: "Cơ chế: stability nhấn giữ nguyên trạng. Bẫy: kết quả ổn định nghe giống stability. Khóa: outcome focus khác status quo." },
        { id: "e", text: "Aggressiveness", isCorrect: false, rationale: "Cơ chế: aggressiveness là cạnh tranh/quyết liệt. Bẫy: theo kết quả có thể khiến cạnh tranh. Khóa: characteristic trực tiếp là outcome orientation." },
      ],
      difficulty: "basic",
      conceptTested: "Seven primary characteristics",
      takeaway: "7 characteristics giúp đọc văn hóa qua điều tổ chức thật sự nhấn mạnh: kết quả, con người, đội nhóm, rủi ro, chi tiết, cạnh tranh hay ổn định.",
    },
    {
      id: "q03",
      stem: "In the culture iceberg metaphor, which elements are most likely to drive much of behavior while remaining hidden?",
      options: [
        { id: "a", text: "Attitudes, perceptions, group norms, informal interactions, and assumptions", isCorrect: true, rationale: "Cơ chế: phần chìm gồm attitudes, norms, assumptions và interactions không formal; chúng lái hành vi mạnh. Bẫy: visible artifacts dễ thấy nên tưởng quan trọng nhất. Khóa: hidden aspects drive behavior." },
        { id: "b", text: "Office layout, formal authority, and chains of command only", isCorrect: false, rationale: "Cơ chế: đây là visible aspects/phần nổi. Bẫy: visible dễ quan sát. Khóa: câu hỏi hỏi hidden." },
        { id: "c", text: "Only written strategies and objectives", isCorrect: false, rationale: "Cơ chế: strategies/objectives là phần visible. Bẫy: chiến lược có vẻ quyết định hành vi. Khóa: iceberg nhấn phần chìm." },
        { id: "d", text: "Only technology and official procedures", isCorrect: false, rationale: "Cơ chế: technology/procedures là visible. Bẫy: công nghệ/quy trình ảnh hưởng behavior nhưng không phải hidden culture. Khóa: hidden = assumptions/norms." },
        { id: "e", text: "Only compensation formulas", isCorrect: false, rationale: "Cơ chế: reward systems có thể ảnh hưởng culture nhưng không phải phần hidden được nêu. Bẫy: incentive mạnh. Khóa: iceberg hidden là meanings and assumptions." },
      ],
      difficulty: "intermediate",
      conceptTested: "Iceberg visible and hidden aspects",
      takeaway: "Đọc culture không dừng ở sơ đồ tổ chức hay policy; phần chìm như assumptions và norms mới thường lái hành vi.",
    },
    {
      id: "q04",
      stem: "In Schein's model, which layer is deepest and acts as the ultimate source of values and action?",
      options: [
        { id: "a", text: "Basic underlying assumptions", isCorrect: true, rationale: "Cơ chế: basic underlying assumptions là tầng sâu nhất, vô thức/mặc nhiên và là nguồn cội của giá trị/hành động. Bẫy: espoused values nghe như values gốc. Khóa: deepest = assumptions." },
        { id: "b", text: "Observable artifacts", isCorrect: false, rationale: "Cơ chế: artifacts ở bề mặt, quan sát được nhưng khó giải mã. Bẫy: nhìn thấy nên tưởng căn bản. Khóa: artifacts không sâu nhất." },
        { id: "c", text: "Espoused values", isCorrect: false, rationale: "Cơ chế: espoused values là điều tổ chức tuyên bố; sâu hơn artifacts nhưng chưa phải gốc rễ. Bẫy: values nghe cốt lõi. Khóa: assumptions mới deepest." },
        { id: "d", text: "Material symbols", isCorrect: false, rationale: "Cơ chế: material symbols là kênh truyền văn hóa/artifacts. Bẫy: symbols mang meaning. Khóa: không phải layer sâu nhất." },
        { id: "e", text: "Formalization", isCorrect: false, rationale: "Cơ chế: formalization là mức quy định/rules, không phải layer trong Schein. Bẫy: formal rules có thể phản ánh values. Khóa: Schein has three layers." },
      ],
      difficulty: "basic",
      conceptTested: "Schein three layers",
      takeaway: "Schein nhắc rằng điều tổ chức tuyên bố chưa chắc là gốc; giả định ngầm mới là tầng sâu nhất.",
    },
    {
      id: "q05",
      stem: "A sales office has its own rituals and values while still sharing the company's core values. What is this called?",
      options: [
        { id: "a", text: "A subculture", isCorrect: true, rationale: "Cơ chế: subculture là miniculture theo phòng ban/địa lý, gồm core values chung + giá trị riêng. Bẫy: thấy company core values nên chọn dominant culture. Khóa: riêng của sales office = subculture." },
        { id: "b", text: "The dominant culture", isCorrect: false, rationale: "Cơ chế: dominant culture là hệ core values đa số chia sẻ toàn tổ chức. Bẫy: vẫn có core values chung. Khóa: local rituals/values là subculture." },
        { id: "c", text: "Institutionalization", isCorrect: false, rationale: "Cơ chế: institutionalization là tổ chức sống vì chính nó. Bẫy: rituals có thể bị institutionalized. Khóa: mô tả nhóm nhỏ trong org." },
        { id: "d", text: "Ethical climate", isCorrect: false, rationale: "Cơ chế: ethical climate là shared view of right/wrong. Bẫy: values có thể đạo đức. Khóa: sales office miniculture là subculture." },
        { id: "e", text: "Culture add", isCorrect: false, rationale: "Cơ chế: culture add là tuyển người bổ sung văn hóa. Bẫy: subculture có thể thêm đa dạng. Khóa: không nói tuyển dụng." },
      ],
      difficulty: "basic",
      conceptTested: "Dominant culture and subcultures",
      takeaway: "Subculture không phủ định dominant culture; nó thêm màu riêng của bộ phận/địa lý lên core values chung.",
    },
    {
      id: "q06",
      stem: "Which statement best describes a strong culture?",
      options: [
        { id: "a", text: "Core values are intensely held and widely shared, reducing the need for many formal rules", isCorrect: true, rationale: "Cơ chế: strong culture = intensely held + widely shared; nó tạo predictability như formalization. Bẫy: nghĩ mạnh nghĩa nhiều rules hơn. Khóa: strong culture can substitute for formal rules." },
        { id: "b", text: "Employees have no shared values and need more procedures", isCorrect: false, rationale: "Cơ chế: đó là weak culture/formalization cao hơn. Bẫy: rules tạo cảm giác mạnh. Khóa: shared values mới là strong culture." },
        { id: "c", text: "Only top managers understand the values", isCorrect: false, rationale: "Cơ chế: strong culture cần widely shared. Bẫy: top management định hình culture. Khóa: nếu chỉ top hiểu thì chưa strong." },
        { id: "d", text: "Subcultures are illegal", isCorrect: false, rationale: "Cơ chế: subcultures bình thường trong tổ chức lớn. Bẫy: dominant culture mạnh có thể kiểm soát subculture. Khóa: không phải định nghĩa strong culture." },
        { id: "e", text: "Culture is identical to job satisfaction", isCorrect: false, rationale: "Cơ chế: culture descriptive, job satisfaction evaluative. Bẫy: strong culture có thể ảnh hưởng satisfaction. Khóa: không đồng nhất." },
      ],
      difficulty: "intermediate",
      conceptTested: "Strong culture and formalization",
      takeaway: "Văn hóa mạnh làm hành vi predictable bằng shared values, không nhất thiết bằng thêm rules.",
    },
    {
      id: "q07",
      stem: "Which option is one of the five functions of organizational culture?",
      options: [
        { id: "a", text: "It creates a sense of identity for members", isCorrect: true, rationale: "Cơ chế: one function is conveying a sense of identity. Bẫy: nhiều lựa chọn có vẻ tích cực nhưng không thuộc 5 functions. Khóa: identity is explicit function." },
        { id: "b", text: "It guarantees every merger will succeed", isCorrect: false, rationale: "Cơ chế: culture clash can make M&A fail. Bẫy: strong shared culture có thể help integration. Khóa: không guarantee." },
        { id: "c", text: "It eliminates the need for socialization", isCorrect: false, rationale: "Cơ chế: culture is maintained through socialization. Bẫy: strong culture có vẻ tự động. Khóa: socialization still needed." },
        { id: "d", text: "It makes all subcultures disappear", isCorrect: false, rationale: "Cơ chế: subcultures can exist within dominant culture. Bẫy: strong culture có core values chung. Khóa: not a function." },
        { id: "e", text: "It replaces ethical decision making with self-interest", isCorrect: false, rationale: "Cơ chế: instrumental climate is one ethical category, not a function. Bẫy: some cultures do this badly. Khóa: not among five functions." },
      ],
      difficulty: "basic",
      conceptTested: "Functions of culture",
      takeaway: "Culture vừa phân ranh, tạo identity, tạo commitment, làm social glue, vừa giúp sense-making/control.",
    },
    {
      id: "q08",
      stem: "Across departments, employees consistently report that it feels safe to speak up and that management supports experimentation. What does this shared perception most directly represent?",
      options: [
        { id: "a", text: "Organizational climate, because members share perceptions of the work environment", isCorrect: true, rationale: "Cơ chế: nhiều department cùng cảm nhận psychological safety và support for experimentation. Bẫy: các cảm nhận này có thể bắt nguồn từ culture sâu. Khóa: shared perceptions about work environment = climate." },
        { id: "b", text: "The founder's personal philosophy, even though no founder is mentioned", isCorrect: false, rationale: "Cơ chế: founder philosophy có thể định hình culture nhưng không phải shared perception đang được đo. Bẫy: support for experimentation thường đến từ founder values. Khóa: climate nằm ở collective experience hiện tại." },
        { id: "c", text: "One employee's job satisfaction", isCorrect: false, rationale: "Cơ chế: case nói employees across departments, không phải một evaluative satisfaction score. Bẫy: feeling safe có thể làm satisfaction tăng. Khóa: shared/descriptive = climate; individual/evaluative = satisfaction." },
        { id: "d", text: "A visible office artifact such as an open-plan layout", isCorrect: false, rationale: "Cơ chế: stem không nêu physical symbol; nó nêu perception về speaking up và support. Bẫy: layout có thể phát tín hiệu openness. Khóa: artifact có thể ảnh hưởng climate nhưng không phải climate itself." },
        { id: "e", text: "An instrumental ethical climate driven by self-interest", isCorrect: false, rationale: "Cơ chế: psychological safety/experimentation không cho thấy decisions dựa trên self-interest. Bẫy: ethical climate là một subtype của climate. Khóa: muốn chọn instrumental phải có criterion egoism/self-interest." },
      ],
      difficulty: "basic",
      conceptTested: "Organizational climate",
      takeaway: "Climate là 'cảm nhận chung' về môi trường làm việc; culture là hệ ý nghĩa sâu hơn tạo ra cảm nhận đó.",
    },
    {
      id: "q09",
      stem: "An ethical climate where decisions are driven mainly by self-interest is called what?",
      options: [
        { id: "a", text: "Instrumental climate", isCorrect: true, rationale: "Cơ chế: instrumental climate is egoistic/self-interest based and links to lower satisfaction. Bẫy: independence also relies on individual standards. Khóa: self-interest = instrumental." },
        { id: "b", text: "Caring climate", isCorrect: false, rationale: "Cơ chế: caring focuses on stakeholders' collective interests. Bẫy: caring is another EWC category. Khóa: not self-interest." },
        { id: "c", text: "Law and code climate", isCorrect: false, rationale: "Cơ chế: law/code follows external professional/legal standards. Bẫy: laws can constrain self-interest. Khóa: not egoistic." },
        { id: "d", text: "Rules climate", isCorrect: false, rationale: "Cơ chế: rules follows internal standardized expectations. Bẫy: self-interest can hide behind rules. Khóa: not the category." },
        { id: "e", text: "Positive culture", isCorrect: false, rationale: "Cơ chế: positive culture builds strengths/reward/growth; not an EWC category. Bẫy: positive sounds ethical. Khóa: EWC self-interest = instrumental." },
      ],
      difficulty: "basic",
      conceptTested: "Ethical work climate",
      takeaway: "Ethical work climate cho biết tổ chức định nghĩa đúng-sai thế nào; instrumental climate đặt tư lợi lên trước.",
    },
    {
      id: "q10",
      stem: "When is organizational culture most clearly an asset?",
      options: [
        { id: "a", text: "When it supports ethical behavior, innovation, commitment, and performance", isCorrect: true, rationale: "Cơ chế: culture is an asset when it builds ethical climate, innovation, commitment and bottom-line outcomes. Bẫy: culture mạnh không luôn tốt. Khóa: asset = functional outcomes." },
        { id: "b", text: "When it blocks all change in a dynamic environment", isCorrect: false, rationale: "Cơ chế: blocking change is liability. Bẫy: consistency can feel safe. Khóa: mismatch with environment turns culture into barrier." },
        { id: "c", text: "When it forces every newcomer to erase differences", isCorrect: false, rationale: "Cơ chế: forced assimilation can create barrier to diversity. Bẫy: fit can help socialization. Khóa: erase differences is liability." },
        { id: "d", text: "When it causes culture clash in mergers", isCorrect: false, rationale: "Cơ chế: culture clash is barrier to M&A, a liability. Bẫy: strong culture may protect identity. Khóa: M&A failure risk." },
        { id: "e", text: "When the organization is valued only for itself", isCorrect: false, rationale: "Cơ chế: that is institutionalization. Bẫy: pride in organization can be positive. Khóa: valued for itself beyond purpose is liability." },
      ],
      difficulty: "intermediate",
      conceptTested: "Culture as asset",
      takeaway: "Văn hóa mạnh chỉ là tài sản khi giá trị của nó còn phục vụ ethical behavior, innovation và performance.",
    },
    {
      id: "q11",
      stem: "What does institutionalization mean as a cultural liability?",
      options: [
        { id: "a", text: "The organization becomes valued for itself, and old habits are no longer questioned", isCorrect: true, rationale: "Cơ chế: institutionalization xảy ra khi tổ chức sống vì chính nó, tách khỏi mục tiêu gốc và bóp nghẹt đổi mới. Bẫy: institutional sounds legitimate. Khóa: valued for itself + no questioning." },
        { id: "b", text: "The organization creates a healthy ethical climate", isCorrect: false, rationale: "Cơ chế: ethical climate can be an asset, not institutionalization. Bẫy: institution có thể có ethics. Khóa: liability is self-serving inertia." },
        { id: "c", text: "Employees learn culture through stories", isCorrect: false, rationale: "Cơ chế: stories are learning channel. Bẫy: stories can reinforce institutionalization. Khóa: definition asks valued for itself." },
        { id: "d", text: "Founders clarify an original mission", isCorrect: false, rationale: "Cơ chế: founders can start culture; institutionalization is losing sight of mission. Bẫy: both involve origins. Khóa: not founding." },
        { id: "e", text: "Newcomers successfully complete metamorphosis", isCorrect: false, rationale: "Cơ chế: metamorphosis is socialization stage. Bẫy: adapting can reinforce old culture. Khóa: not liability definition." },
      ],
      difficulty: "intermediate",
      conceptTested: "Institutionalization",
      takeaway: "Institutionalization là khi tổ chức quên 'vì sao tồn tại' và chỉ bảo vệ chính thói quen/tồn tại của mình.",
    },
    {
      id: "q12",
      stem: "Which situation best illustrates culture as a barrier to diversity or mergers?",
      options: [
        { id: "a", text: "A strong culture forces newcomers to assimilate and rejects different perspectives during an acquisition", isCorrect: true, rationale: "Cơ chế: ép assimilate triệt tiêu diversity; culture clash là rào cản M&A. Bẫy: strong culture có thể tăng cohesion. Khóa: rejects difference during acquisition = liability." },
        { id: "b", text: "Employees use common language to feel included", isCorrect: false, rationale: "Cơ chế: language is a channel for learning culture. Bẫy: common language can exclude outsiders if overdone. Khóa: stem asks barrier example." },
        { id: "c", text: "A caring ethical climate considers stakeholders", isCorrect: false, rationale: "Cơ chế: caring climate supports ethical decisions. Bẫy: stakeholders can include diversity. Khóa: not barrier." },
        { id: "d", text: "A company hires people who add missing viewpoints", isCorrect: false, rationale: "Cơ chế: that is culture add and helps diversity. Bẫy: it changes culture. Khóa: opposite of barrier." },
        { id: "e", text: "Top managers model ethical behavior", isCorrect: false, rationale: "Cơ chế: top management modeling supports ethical culture. Bẫy: leaders can also impose culture badly. Khóa: not diversity/M&A barrier." },
      ],
      difficulty: "intermediate",
      conceptTested: "Barriers to diversity and M&A",
      takeaway: "Culture becomes costly when 'fit' means assimilation and culture clash blocks learning from difference.",
    },
    {
      id: "q13",
      stem: "According to the chapter, what is the ultimate source of an organization's culture?",
      options: [
        { id: "a", text: "The founders", isCorrect: true, rationale: "Cơ chế: R&J nói founders là ultimate source; họ tuyển người giống mình, socialize và làm role model. Bẫy: top management duy trì culture nhưng không nhất thiết là nguồn đầu. Khóa: ultimate source = founders." },
        { id: "b", text: "Only the newest employees", isCorrect: false, rationale: "Cơ chế: newcomers học và có thể bổ sung culture, nhưng không là ultimate source ban đầu. Bẫy: socialization tập trung newcomers. Khóa: founders start culture." },
        { id: "c", text: "Only material symbols", isCorrect: false, rationale: "Cơ chế: symbols transmit culture. Bẫy: symbols visible. Khóa: not source." },
        { id: "d", text: "Only external law", isCorrect: false, rationale: "Cơ chế: law/code can shape ethical climate, not ultimate source. Bẫy: law constrains behavior. Khóa: founders." },
        { id: "e", text: "Random chance with no human role", isCorrect: false, rationale: "Cơ chế: founders/top management/socialization shape culture. Bẫy: culture can evolve informally. Khóa: source is human agency." },
      ],
      difficulty: "basic",
      conceptTested: "How a culture begins",
      takeaway: "Founders không chỉ viết vision; họ tuyển, dạy và làm mẫu cho cách tổ chức sẽ tin và hành xử.",
    },
    {
      id: "q14",
      stem: "Which sequence best matches Exhibit 16-4 on how cultures form?",
      options: [
        { id: "a", text: "Founders' philosophy → selection criteria → top management and socialization → organizational culture", isCorrect: true, rationale: "Cơ chế: Exhibit 16-4 đi từ philosophy of founders qua selection, rồi top management/socialization thành culture. Bẫy: đảo socialization lên trước founders. Khóa: founders begin the chain." },
        { id: "b", text: "Socialization → founders' philosophy → turnover → material symbols", isCorrect: false, rationale: "Cơ chế: socialization không đi trước founders; turnover là outcome, symbols là learning channel. Bẫy: đều trong chapter. Khóa: wrong sequence." },
        { id: "c", text: "Job satisfaction → ethical climate → founders → culture", isCorrect: false, rationale: "Cơ chế: job satisfaction khác culture; ethical climate là dimension. Bẫy: satisfaction can reflect climate. Khóa: not Exhibit 16-4." },
        { id: "d", text: "Language → rituals → stories → founder philosophy", isCorrect: false, rationale: "Cơ chế: language/rituals/stories are learning channels, not formation sequence. Bẫy: they transmit culture. Khóa: not how cultures form diagram." },
        { id: "e", text: "Culture add → culture fit → encounter → prearrival", isCorrect: false, rationale: "Cơ chế: trộn culture fit/add và socialization stages, lại đảo prearrival. Bẫy: same topic. Khóa: Exhibit 16-4 has founders-selection-top mgmt/socialization-culture." },
      ],
      difficulty: "basic",
      conceptTested: "How cultures form",
      takeaway: "Văn hóa hình thành có dòng lịch sử: founders đặt triết lý, selection lọc người, lãnh đạo và socialization biến nó thành hệ shared meaning.",
    },
    {
      id: "q15",
      stem: "Which three forces keep an organizational culture alive?",
      options: [
        { id: "a", text: "Selection, top management, and socialization", isCorrect: true, rationale: "Cơ chế: R&J nêu ba lực duy trì culture là selection, top management, socialization. Bẫy: stories/rituals/symbols/language là cách học culture. Khóa: keeping alive = three forces." },
        { id: "b", text: "Stories, rituals, and material symbols only", isCorrect: false, rationale: "Cơ chế: đây là channels employees learn culture. Bẫy: chúng truyền culture. Khóa: not three forces keeping alive." },
        { id: "c", text: "Innovation, stability, and aggressiveness", isCorrect: false, rationale: "Cơ chế: đây là primary characteristics. Bẫy: characteristics describe culture. Khóa: not maintenance forces." },
        { id: "d", text: "Instrumental, caring, and rules climates", isCorrect: false, rationale: "Cơ chế: đây là ethical climate categories. Bẫy: climate can sustain culture. Khóa: not the three forces." },
        { id: "e", text: "Prearrival, encounter, and turnover", isCorrect: false, rationale: "Cơ chế: prearrival/encounter are socialization stages; turnover is outcome. Bẫy: close to socialization. Khóa: missing selection/top management." },
      ],
      difficulty: "basic",
      conceptTested: "Keeping culture alive",
      takeaway: "Văn hóa sống tiếp qua người được chọn, lãnh đạo làm mẫu, và socialization biến người mới thành người trong cuộc.",
    },
    {
      id: "q16",
      stem: "In the socialization model, which stage involves newcomers confronting expectations versus organizational reality?",
      options: [
        { id: "a", text: "Encounter", isCorrect: true, rationale: "Cơ chế: encounter stage là lúc người mới đối mặt kỳ vọng với thực tế. Bẫy: prearrival cũng có expectations. Khóa: confronting reality = encounter." },
        { id: "b", text: "Prearrival", isCorrect: false, rationale: "Cơ chế: prearrival là trước khi gia nhập, mang values/kỳ vọng. Bẫy: có expectations. Khóa: chưa gặp thực tế org." },
        { id: "c", text: "Metamorphosis", isCorrect: false, rationale: "Cơ chế: metamorphosis là điều chỉnh/hòa nhập sau encounter. Bẫy: người mới thay đổi vì thấy thực tế. Khóa: confrontation happens in encounter." },
        { id: "d", text: "Outcome orientation", isCorrect: false, rationale: "Cơ chế: outcome orientation là cultural characteristic. Bẫy: socialization has outcomes. Khóa: not a stage." },
        { id: "e", text: "Institutionalization", isCorrect: false, rationale: "Cơ chế: institutionalization là liability. Bẫy: socialization có thể institutionalize habits. Khóa: not socialization stage." },
      ],
      difficulty: "basic",
      conceptTested: "Socialization stages",
      takeaway: "Encounter là khoảnh khắc 'vỡ mộng hoặc hòa hợp': kỳ vọng trước khi vào gặp thực tế văn hóa.",
    },
    {
      id: "q17",
      stem: "Large executive offices, reserved parking spaces, and casual dress codes are examples of which way employees learn culture?",
      options: [
        { id: "a", text: "Material symbols", isCorrect: true, rationale: "Cơ chế: material symbols gồm office layout, room size, perks, dress code; chúng truyền tín hiệu về quyền lực/bình đẳng/risk. Bẫy: rituals cũng visible. Khóa: physical objects/perks = material symbols." },
        { id: "b", text: "Stories", isCorrect: false, rationale: "Cơ chế: stories là chuyện kể về founders, success, mistakes. Bẫy: offices can have stories behind them. Khóa: stem nói physical symbols." },
        { id: "c", text: "Language", isCorrect: false, rationale: "Cơ chế: language là jargon/acronyms. Bẫy: casual dress code có thể gọi bằng jargon. Khóa: not words." },
        { id: "d", text: "Rituals", isCorrect: false, rationale: "Cơ chế: rituals là repeated activities. Bẫy: reserved parking repeated daily. Khóa: object/status signal = symbol." },
        { id: "e", text: "Prearrival", isCorrect: false, rationale: "Cơ chế: prearrival is socialization stage. Bẫy: candidates may see office before joining. Khóa: channel is material symbols." },
      ],
      difficulty: "basic",
      conceptTested: "How employees learn culture",
      takeaway: "Văn hóa được học không chỉ qua lời nói; vật chất, phòng ốc, perks và dress code cũng nói rất to.",
    },
    {
      id: "q18",
      stem: "Which practice best illustrates a positive organizational culture?",
      options: [
        { id: "a", text: "Building on employee strengths, rewarding more than punishing, and encouraging vitality and growth", isCorrect: true, rationale: "Cơ chế: positive culture theo R&J gồm strengths, reward more than punish, vitality/growth. Bẫy: positive không có nghĩa bỏ discipline. Khóa: strengths + reward + growth." },
        { id: "b", text: "Punishing every mistake more visibly than any success", isCorrect: false, rationale: "Cơ chế: positive culture reward more than punish. Bẫy: punishment có thể kiểm soát nhanh. Khóa: opposite emphasis." },
        { id: "c", text: "Treating work as meaningless but profitable", isCorrect: false, rationale: "Cơ chế: meaning relates to positive/spiritual culture. Bẫy: profit can be outcome. Khóa: positive includes vitality and growth." },
        { id: "d", text: "Forcing all newcomers to copy existing employees exactly", isCorrect: false, rationale: "Cơ chế: forced cloning undermines diversity/culture add. Bẫy: socialization teaches norms. Khóa: positive culture does not mean sameness." },
        { id: "e", text: "Using instrumental self-interest as the only ethical climate", isCorrect: false, rationale: "Cơ chế: instrumental climate is self-interest and links to low satisfaction. Bẫy: self-interest can drive performance short-term. Khóa: not positive culture." },
      ],
      difficulty: "intermediate",
      conceptTested: "Positive culture",
      takeaway: "Positive culture không phải vui vẻ hời hợt; nó thiết kế môi trường để strengths, growth và recognition kéo hành vi tốt lên.",
    },
    {
      id: "q19",
      stem: "Which statement best combines ethical culture and workplace spirituality?",
      options: [
        { id: "a", text: "Ethical culture uses visible rewards, punishments, and protective mechanisms; workplace spirituality emphasizes meaningful work in community", isCorrect: true, rationale: "Cơ chế: ethical culture cần top-down role model, reward/punish, ombuds/protective mechanisms; spirituality nhấn meaningful work/community. Bẫy: spirituality không đồng nghĩa tôn giáo bắt buộc. Khóa: ethics mechanisms + meaningful community." },
        { id: "b", text: "Ethical culture means ignoring means if ends are profitable", isCorrect: false, rationale: "Cơ chế: ethical culture đánh giá cả means lẫn ends. Bẫy: outcome orientation có thể lấn át ethics. Khóa: means matter." },
        { id: "c", text: "Workplace spirituality requires everyone to share one religion", isCorrect: false, rationale: "Cơ chế: workplace spirituality nói inner life/meaning/community, không bắt buộc tôn giáo. Bẫy: từ spirituality dễ gây nhầm. Khóa: meaningful work, not one religion." },
        { id: "d", text: "Protective mechanisms make ethical culture unnecessary", isCorrect: false, rationale: "Cơ chế: protective mechanisms là một phần tạo ethical culture, không thay thế toàn bộ. Bẫy: hotline/ombuds visible. Khóa: cần leader role model và reward/punish." },
        { id: "e", text: "Positive culture and ethical culture cannot coexist", isCorrect: false, rationale: "Cơ chế: các dạng culture có thể bổ trợ. Bẫy: ethical có punishment, positive reward hơn punish. Khóa: không loại trừ." },
      ],
      difficulty: "intermediate",
      conceptTested: "Ethical and spiritual culture",
      takeaway: "Ethical culture cần cơ chế bảo vệ và thưởng-phạt rõ; spiritual culture nhấn công việc có ý nghĩa và cộng đồng, không phải áp đặt tôn giáo.",
    },
    {
      id: "q20",
      stem: "Why is culture add often safer than relying only on culture fit?",
      options: [
        { id: "a", text: "Culture add preserves diversity by hiring people who expand the culture rather than simply cloning it", isCorrect: true, rationale: "Cơ chế: culture fit quá mức dễ thành cloning; culture add giữ diversity và thêm góc nhìn. Bẫy: fit vẫn hữu ích khi values thật sự khớp. Khóa: add expands, fit can clone." },
        { id: "b", text: "Culture fit always guarantees innovation", isCorrect: false, rationale: "Cơ chế: fit quá mức có thể giảm diversity và đổi mới. Bẫy: fit giúp phối hợp. Khóa: not always." },
        { id: "c", text: "Culture add means ignoring person-organization values completely", isCorrect: false, rationale: "Cơ chế: culture add không bỏ values; nó tránh đồng nhất hình thức/góc nhìn. Bẫy: add nghe như không cần fit. Khóa: bổ sung văn hóa, không phá values cốt lõi." },
        { id: "d", text: "Culture change is mainly a technology installation problem", isCorrect: false, rationale: "Cơ chế: Westerman nói culture change là leadership challenge, không phải technological challenge. Bẫy: digital innovation thường bắt đầu từ tech. Khóa: culture đổi chậm nhất." },
        { id: "e", text: "Culture add requires no leadership support", isCorrect: false, rationale: "Cơ chế: định hình culture cần top management, employees, training, rewards, stories. Bẫy: tuyển người đa dạng có vẻ đủ. Khóa: leadership sustains change." },
      ],
      difficulty: "advanced",
      conceptTested: "Culture fit versus culture add and change",
      takeaway: "'Culture fit' quá mức biến tuyển dụng thành nhân bản; 'culture add' giữ lợi thế đa dạng mà vẫn xây gắn kết.",
    },
    {
      id: "q21",
      stem: "A fire department trains each incoming class together on a fixed schedule, assigns experienced mentors, and strips away old habits. A film studio instead lets each newcomer learn informally and improvise a role. Which comparison is correct?",
      options: [
        { id: "a", text: "The fire department uses an institutional bundle that favors P-O fit and commitment; the studio uses an individual bundle that favors role innovation", isCorrect: true, rationale: "Cơ chế: formal+collective+fixed+serial+divestiture tạo institutional socialization, còn informal+individual+variable+random+investiture hỗ trợ role innovation. Bẫy: creative studio vẫn có thể cần strong culture. Khóa: standardized bundle versus individualized bundle." },
        { id: "b", text: "The fire department uses an individual bundle, while the studio uses an institutional bundle", isCorrect: false, rationale: "Cơ chế: đáp án đảo hai bundle theo các cues training class/fixed/mentor và informal/improvise. Bẫy: fire trainees là individuals còn studio là organization. Khóa: classify socialization options, không classify legal entity." },
        { id: "c", text: "Both organizations use identical socialization because both have newcomers", isCorrect: false, rationale: "Cơ chế: newcomers có thể được socialized bằng option bundles rất khác nhau. Bẫy: outcome chung là học culture. Khóa: process configuration quyết định standardization hay innovation." },
        { id: "d", text: "Divestiture confirms and preserves the newcomer's existing qualities", isCorrect: false, rationale: "Cơ chế: divestiture 'lột' đặc điểm cũ; investiture mới xác nhận phẩm chất sẵn có. Bẫy: tiền tố invest nghe như đầu tư để thay đổi. Khóa: investiture confirms, divestiture strips." },
        { id: "e", text: "Serial socialization means newcomers receive no role model", isCorrect: false, rationale: "Cơ chế: serial dùng role model/mentor; random mới để người mới tự bơi. Bẫy: serial nghe như từng người tự đi theo chuỗi. Khóa: mentor cue = serial." },
      ],
      difficulty: "advanced",
      conceptTested: "Institutional versus individual socialization bundles",
      takeaway: "Institutional socialization chuẩn hóa hành vi và tăng P-O fit/commitment; individual socialization mở chỗ cho role innovation. Investiture xác nhận, divestiture tháo bỏ đặc điểm cũ.",
    },
  ],
  status: "ready",
  source:
    "Robbins & Judge, Organizational Behavior — Chapter 16 'Creating and Maintaining Organizational Culture' (pp.295-314); Slide 'OB-Topic 11-Organizational culture' (Dr Lan Anh, IM2017, HCMUT); bổ sung slide: Edgar H. Schein 'Organizational Culture and Leadership' (3 layers), MIT Sloan 'Big 9 Cultural Values' & Toxic Culture, SHRM 2022 Global Culture Research, Blue C 2021 (khảo sát VHDN Việt Nam), Quantum Workplace 2022, George Westerman 'First Law of Digital Innovation' (MIT Sloan Management Review).",
};

const topic12: Chapter = {
  slug: "topic-12",
  order: 12,
  title: "Topic 12 — Organizational Change and Work Stress",
  bigIdea:
    "Thay đổi và stress là HAI THỰC TẠI KHÔNG THỂ TRÁNH của đời sống tổ chức — và chúng gắn nhau: thay đổi gây stress. 'All management is change management.' Con người KHÁNG CỰ thay đổi là điều TỰ NHIÊN (thói quen, sợ bất định, đe dọa lợi ích), nên lãnh đạo thay đổi = vừa TĂNG lực đẩy vừa GIẢM lực cản (Lewin), qua quy trình bài bản (Kotter, action research, OD). Mặt còn lại là stress: bản thân stress không xấu — có challenge stressor (thúc đẩy) & hindrance stressor (cản trở), quan hệ stress–hiệu suất là chữ U ngược. Quản trị tốt biến distress thành eustress — biến áp lực thành bản lĩnh, và bắt đầu từ chính mình.",
  bigIdeaPillars: [
    {
      label: "Vì sao thay đổi & vì sao kháng cự",
      body:
        "Forces for change — 6 dimensions (R&J p316): changing nature of workforce, technology, economic shocks, competition, social trends, world politics; 'change or die'. Change có thể reactionary hoặc planned (qua change agents). Resistance là TỰ NHIÊN (Exhibit 17-1): individual sources (habit, security, economic factors, fear of the unknown, selective information processing) + organizational sources (structural inertia, limited focus of change, group inertia, threat to expertise, threat to established power). Maurer 3 levels (slide): I don't get it → I don't like it → I don't like you.",
    },
    {
      label: "Lãnh đạo thay đổi: giảm lực cản, theo quy trình",
      body:
        "Overcoming resistance — 8 tactics (R&J p317): communication, participation, building support & commitment, developing positive relationships, implementing changes fairly, manipulation & cooptation, selecting people who accept change, coercion. 4 approaches to managing change: Lewin 3-step (unfreezing → movement → refreezing; tăng driving forces / giảm restraining forces), Kotter 8-step, action research (diagnosis→analysis→feedback→action→evaluation), OD (team building, intergroup development, appreciative inquiry). Creating a culture for change: managing paradox, innovative culture, learning organization.",
    },
    {
      label: "Stress là con dao hai lưỡi",
      body:
        "Stress = dynamic condition khi cá nhân đối mặt opportunity/demand/resource mà kết quả vừa uncertain vừa important (R&J p327). Không phải luôn xấu: challenge stressors (workload, deadline — thúc đẩy) khác hindrance stressors (red tape, office politics — cản trở). Demands–resources model. Potential sources: environmental (kinh tế/chính trị/công nghệ), organizational (task/role/interpersonal demands — role conflict/overload/ambiguity), personal (family, economic) — stressors ADDITIVE. Quan hệ stress–performance là INVERTED-U (slide): quá ít = chán, tối ưu = đỉnh, quá nhiều = kiệt sức. Consequences: physiological, psychological, behavioral.",
    },
    {
      label: "Quản trị stress & thay đổi — bắt đầu từ chính mình",
      body:
        "Individual approaches (R&J p332): time-management, physical exercise, relaxation techniques, social support networks. Organizational approaches: selection & placement, training, realistic goal-setting, redesign of jobs, employee involvement, organizational communication, sabbaticals, wellness programs. Slide D > CS = SR (Thornton): khi Demands vượt Coping Skills → Stress Reaction ⇒ 3 cách: REDUCE demands / INCREASE coping skills / MONITOR reactions. 'Start from self' — biến áp lực thành bản lĩnh (eustress).",
    },
  ],
  learningObjectives: [
    "Phân biệt forces for change (6 dimensions) và reactionary vs planned change.",
    "Nhận diện individual sources và organizational sources của resistance to change (Exhibit 17-1).",
    "Trình bày 8 tactics để overcome resistance to change.",
    "Giải thích Lewin's 3-step model (unfreezing/movement/refreezing) và driving vs restraining forces.",
    "Mô tả Kotter's 8-step plan và action research như các approach quản trị thay đổi.",
    "Giải thích các OD interventions và 3 cách creating a culture for change.",
    "Định nghĩa stress và phân biệt challenge vs hindrance stressors (demands–resources model).",
    "Phân loại potential sources of stress: environmental, organizational, personal (và tính additive).",
    "Giải thích quan hệ inverted-U giữa stress và performance (eustress vs distress).",
    "Nhận diện consequences của stress: physiological, psychological, behavioral symptoms.",
    "So sánh individual approaches và organizational approaches để managing stress (gồm D>CS=SR).",
  ],
  knowledgeMap: {
    engine: "flow",
    title: "Bản đồ Topic 12 — Change & Work Stress",
    layout: "tree",
    collapsible: true,
    caption:
      "Change & Stress: (A) vì sao thay đổi & kháng cự, (B) lãnh đạo thay đổi (approaches), (C) stress con dao hai lưỡi, (D) quản trị stress & thay đổi từ chính mình.",
    nodes: [
      { id: "oc", label: "Change & Work Stress", group: "concept", sectionId: "s1", detail: "Thay đổi & stress là 2 thực tại gắn nhau; thay đổi gây stress." },
      { id: "g_force", label: "A. Thay đổi & kháng cự", group: "concept", parent: "oc", sectionId: "s1", detail: "Forces for change; resistance là tự nhiên." },
      { id: "g_lead", label: "B. Lãnh đạo thay đổi", group: "concept", parent: "oc", sectionId: "s3", detail: "8 tactics; Lewin/Kotter/action research/OD." },
      { id: "g_stress", label: "C. Stress hai lưỡi", group: "concept", parent: "oc", sectionId: "s7", detail: "Challenge/hindrance; sources; inverted-U; consequences." },
      { id: "g_manage", label: "D. Quản trị từ chính mình", group: "concept", parent: "oc", sectionId: "s10", detail: "Individual & organizational approaches; D>CS=SR." },
      { id: "t_forces", label: "Forces for change (6)", group: "term", parent: "g_force", sectionId: "s1", detail: "6 lực thay đổi chính theo R&J p316." },
      { id: "t_resist", label: "Resistance sources", group: "term", parent: "g_force", sectionId: "s2", detail: "Nguồn kháng cự cấp cá nhân và tổ chức." },
      { id: "t_over", label: "Overcoming — 8 tactics", group: "term", parent: "g_lead", sectionId: "s3", detail: "8 cách giảm resistance, từ communication đến coercion." },
      { id: "t_lewin", label: "Lewin 3-step", group: "term", parent: "g_lead", sectionId: "s4", detail: "Unfreezing, movement, refreezing và lực đẩy/lực cản." },
      { id: "t_kotter", label: "Kotter 8-step + action research", group: "term", parent: "g_lead", sectionId: "s5", detail: "Quy trình thay đổi theo bước và quy trình dựa trên dữ liệu." },
      { id: "t_od", label: "OD + culture for change", group: "term", parent: "g_lead", sectionId: "s6", detail: "OD interventions và văn hóa sẵn sàng đổi mới/học tập." },
      { id: "t_what", label: "What is stress (challenge/hindrance)", group: "term", parent: "g_stress", sectionId: "s7", detail: "Stress là dynamic condition; phân biệt challenge và hindrance." },
      { id: "t_src", label: "Sources of stress", group: "term", parent: "g_stress", sectionId: "s8", detail: "Environmental, organizational, personal factors; additive stressors." },
      { id: "t_conseq", label: "Inverted-U + consequences", group: "term", parent: "g_stress", sectionId: "s9", detail: "Stress tối ưu giúp hiệu suất; quá ít/quá nhiều đều hại." },
      { id: "t_ind", label: "Individual + org approaches", group: "term", parent: "g_manage", sectionId: "s10", detail: "Hai nhóm cách quản trị stress." },
      { id: "t_self", label: "D>CS=SR + start from self", group: "term", parent: "g_manage", sectionId: "s11", detail: "Giảm demands, tăng coping skills, theo dõi stress reactions." },
    ],
    edges: [
      { from: "oc", to: "g_force", label: "thay đổi" },
      { from: "oc", to: "g_lead", label: "lãnh đạo" },
      { from: "oc", to: "g_stress", label: "stress" },
      { from: "oc", to: "g_manage", label: "quản trị" },
      { from: "g_force", to: "t_forces", label: "forces" },
      { from: "g_force", to: "t_resist", label: "resistance" },
      { from: "g_lead", to: "t_over", label: "8 tactics" },
      { from: "g_lead", to: "t_lewin", label: "lewin" },
      { from: "g_lead", to: "t_kotter", label: "kotter" },
      { from: "g_lead", to: "t_od", label: "od" },
      { from: "g_stress", to: "t_what", label: "what" },
      { from: "g_stress", to: "t_src", label: "sources" },
      { from: "g_stress", to: "t_conseq", label: "consequences" },
      { from: "g_manage", to: "t_ind", label: "approaches" },
      { from: "g_manage", to: "t_self", label: "self" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "Forces for change + planned change",
      blocks: [
        calloutBlock(
          "key",
          "'Change or die' (R&J p316)",
          "Thay đổi là hằng số. Change có thể reactionary (phản ứng bị động) hoặc planned (chủ động, có mục tiêu) — planned change do change agents dẫn dắt để cải thiện năng lực thích ứng & thay đổi hành vi nhân viên. Slide gọi đúng tinh thần này là 'All management is change management' (Schaffer, HBR 2017): mọi mục tiêu quản trị như tăng doanh số, M&A, chính sách mới, giảm chi phí đều đòi thay đổi hành vi.",
        ),
        comparisonBlock("6 Forces for Change (R&J p316)", ["Lực", "Nội dung"], [
          { label: "Changing nature of workforce", cells: ["Đa văn hóa, thay đổi nhân khẩu, nhập cư, outsourcing."] },
          { label: "Technology", cells: ["Công nghệ liên tục thay đổi công việc & tổ chức (tự động hóa, AI)."] },
          { label: "Economic shocks", cells: ["Cú sốc kinh tế như suy thoái hoặc biến động thị trường tài chính."] },
          { label: "Competition", cells: ["Cạnh tranh toàn cầu → cần nhanh, linh hoạt, ra sản phẩm mới."] },
          { label: "Social trends", cells: ["Xu hướng xã hội thay đổi: tiêu dùng, mạng xã hội, lối sống."] },
          { label: "World politics", cells: ["Biến động chính trị thế giới: chiến tranh, chính sách, đại dịch."] },
        ]),
      ],
      keyTerms: [
        { term: "Change", definition: "Sự dịch chuyển trong cấu trúc, công nghệ, con người, quy trình hoặc hành vi tổ chức." },
        { term: "Planned change", definition: "Thay đổi có chủ đích, có mục tiêu và thường do change agents dẫn dắt." },
        { term: "Change agents", definition: "Người hoặc nhóm chịu trách nhiệm khởi xướng và triển khai thay đổi." },
      ],
    },
    {
      id: "s2",
      heading: "Resistance to change: sources",
      blocks: [
        calloutBlock(
          "key",
          "Kháng cự là TỰ NHIÊN (Exhibit 17-1, R&J p318)",
          "Resistance = hành vi nhằm bôi xấu, trì hoãn, ngăn cản việc triển khai thay đổi. Không phải lúc nào cũng xấu: nó tạo ổn định và buộc thảo luận kỹ. Slide bổ sung Maurer 3 levels: 'I don't get it' (không hiểu) → 'I don't like it' (phản ứng cảm xúc) → 'I don't like you' (thiếu tin tưởng).",
        ),
        comparisonBlock("Sources of Resistance (Exhibit 17-1)", ["Nguồn", "Individual sources", "Organizational sources"], [
          { label: "1", cells: ["Habit — dựa vào thói quen/phản xạ quen thuộc.", "Structural inertia — cơ chế tuyển chọn & quy định tạo ổn định, chống thay đổi."] },
          { label: "2", cells: ["Security — sợ mất cảm giác an toàn.", "Limited focus of change — đổi một hệ con bị hệ lớn vô hiệu hóa."] },
          { label: "3", cells: ["Economic factors — sợ giảm thu nhập hoặc không đáp ứng chuẩn mới.", "Group inertia — chuẩn mực nhóm níu giữ dù cá nhân muốn đổi."] },
          { label: "4", cells: ["Fear of the unknown — bất định thay cho cái đã biết.", "Threat to expertise — đe dọa chuyên môn của nhóm chuyên trách."] },
          { label: "5", cells: ["Selective information processing — chỉ nghe cái củng cố nhận thức cũ.", "Threat to established power relationships — tái phân bổ quyền lực đe dọa quan hệ quyền lực cũ."] },
        ]),
        comparisonBlock(
          "4 dạng kháng cự (sách)",
          ["Dạng", "Biểu hiện", "Độ khó xử lý"],
          [
            {
              label: "Overt + Immediate",
              cells: [
                "Than phiền, work slowdown, dọa đình công.",
                "DỄ xử nhất vì thấy ngay.",
              ],
            },
            {
              label: "Implicit",
              cells: [
                "Mất loyalty/motivation, tăng lỗi, tăng absence.",
                "Tinh vi, khó nhận diện đúng bản chất.",
              ],
            },
            {
              label: "Deferred",
              cells: [
                "Phản ứng nổ ra sau hàng tuần/tháng/NĂM; một thay đổi nhỏ có thể thành 'giọt nước tràn ly' vì resistance các đợt trước bị tích lại.",
                "Làm mờ link giữa change và reaction; kháng cự DỒN TOA.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        { term: "Resistance to change", definition: "Phản ứng làm chậm, làm lệch hoặc ngăn triển khai thay đổi." },
        { term: "Structural inertia", definition: "Sức ì từ cấu trúc, quy trình và hệ thống chính thức của tổ chức." },
        { term: "Selective information processing", definition: "Khuynh hướng lọc thông tin theo niềm tin cũ để né dữ kiện trái ý." },
      ],
    },
    {
      id: "s3",
      heading: "Overcoming resistance: 8 tactics",
      blocks: [
        comparisonBlock("8 Tactics to Overcome Resistance (R&J p317-320)", ["Tactic", "Nội dung"], [
          { label: "Communication", cells: ["Truyền đạt lý do & lợi ích thay đổi → giảm lo âu, tăng cam kết."] },
          { label: "Participation", cells: ["Cho người bị ảnh hưởng tham gia ra quyết định → khó kháng cự điều mình góp phần tạo ra."] },
          { label: "Building support & commitment", cells: ["Tư vấn, đào tạo kỹ năng mới, nghỉ phép ngắn → giảm sợ hãi, tăng cam kết cảm xúc."] },
          { label: "Developing positive relationships", cells: ["Nhân viên tin người quản lý & thấy được hỗ trợ → dễ chấp nhận thay đổi."] },
          { label: "Implementing changes fairly", cells: ["Triển khai công bằng (procedural justice) → giảm cảm giác bị đối xử bất công."] },
          { label: "Manipulation & cooptation", cells: ["Bóp méo thông tin hoặc 'mua chuộc' người dẫn đầu phản kháng — hiệu quả ngắn hạn, rủi ro mất niềm tin."] },
          { label: "Selecting people who accept change", cells: ["Tuyển người cởi mở với thay đổi, openness và self-efficacy cao."] },
          { label: "Coercion", cells: ["Ép buộc bằng đe dọa trực tiếp — chỉ dùng khi cấp bách, dễ phản tác dụng."] },
        ]),
      ],
      keyTerms: [
        { term: "Participation", definition: "Cho người bị ảnh hưởng tham gia thiết kế hoặc quyết định thay đổi." },
        { term: "Procedural justice", definition: "Cảm nhận quy trình ra quyết định và triển khai là công bằng." },
        { term: "Cooptation", definition: "Lôi kéo người phản kháng vào vai trò đại diện để giảm chống đối, nhưng dễ bị xem là thao túng." },
      ],
    },
    {
      id: "s4",
      heading: "Lewin's Three-Step Model",
      blocks: [
        flowBlock(
          "s4",
          "Lewin's Three-Step Model (Exhibit 17-2)",
          "horizontal",
          [
            { id: "l_unfreezing", label: "Unfreezing", detail: "Phá vỡ trạng thái cân bằng cũ; làm người ta thấy cần thay đổi." },
            { id: "l_movement", label: "Movement", detail: "Dịch chuyển tới trạng thái mới bằng hành vi, quy trình, cấu trúc mới. (sách) Vào giai đoạn movement phải giữ MOMENTUM: tổ chức 'build up' lâu rồi mới đổi làm kém hơn tổ chức vào và đi qua movement NHANH." },
            { id: "l_refreezing", label: "Refreezing", detail: "Cố định trạng thái mới để thay đổi bền vững." },
          ],
          [
            { from: "l_unfreezing", to: "l_movement", label: "dịch chuyển" },
            { from: "l_movement", to: "l_refreezing", label: "cố định" },
          ],
          "Unfreezing (phá vỡ nguyên trạng) → movement (dịch tới trạng thái mới) → refreezing (cố định để bền vững).",
        ),
        calloutBlock(
          "key",
          "Driving vs Restraining forces (Exhibit 17-3, R&J p320)",
          "Status quo là trạng thái cân bằng. Unfreezing đạt được bằng 1 trong 3 cách: tăng driving forces, giảm restraining forces, hoặc kết hợp cả hai. Doanh nghiệp từng thành công thường có restraining forces mạnh vì người ta hoài nghi nhu cầu đổi. Không refreezing → thay đổi ngắn ngủi, quay về cũ.",
        ),
      ],
      keyTerms: [
        { term: "Unfreezing", definition: "Làm yếu trạng thái hiện tại để tổ chức sẵn sàng thay đổi." },
        { term: "Movement", definition: "Giai đoạn chuyển sang hành vi hoặc trạng thái mới." },
        { term: "Refreezing", definition: "Neo thay đổi mới vào hệ thống để không quay lại thói quen cũ." },
        { term: "Driving forces", definition: "Lực đẩy rời khỏi status quo." },
        { term: "Restraining forces", definition: "Lực cản níu tổ chức ở status quo." },
      ],
    },
    {
      id: "s5",
      heading: "Kotter's 8-Step Plan + Action Research",
      blocks: [
        comparisonBlock("Kotter's 8-Step Plan (Exhibit 17-4)", ["Bước", "Nội dung"], [
          { label: "1. Sense of urgency", cells: ["Tạo lý do cấp bách, thuyết phục vì sao cần thay đổi."] },
          { label: "2. Coalition", cells: ["Lập liên minh đủ quyền lực để dẫn dắt thay đổi."] },
          { label: "3. New vision", cells: ["Tạo tầm nhìn mới & chiến lược đạt tầm nhìn."] },
          { label: "4. Communicate vision", cells: ["Truyền tầm nhìn ra toàn tổ chức."] },
          { label: "5. Empower & remove barriers", cells: ["Trao quyền hành động, gỡ rào cản, khuyến khích risk taking."] },
          { label: "6. Short-term wins", cells: ["Tạo & tưởng thưởng thắng lợi ngắn hạn để duy trì động lực."] },
          { label: "7. Consolidate", cells: ["Củng cố cải tiến, điều chỉnh, đẩy tiếp thay đổi lớn hơn."] },
          { label: "8. Reinforce (anchor)", cells: ["Neo thay đổi vào văn hóa bằng cách gắn hành vi mới với thành công tổ chức."] },
        ]),
        calloutBlock(
          "note",
          "Kotter ↔ Lewin & Action Research (R&J p321-322)",
          "Kotter chi tiết hóa Lewin: bước 1-4 = unfreezing, 5-7 = movement, 8 = refreezing. Action research là quy trình đổi dựa trên dữ liệu: diagnosis → analysis → feedback → action → evaluation; giảm resistance vì nhân viên tham gia và vấn đề được dữ liệu xác nhận.",
        ),
      ],
      keyTerms: [
        { term: "Kotter's eight-step plan", definition: "Lộ trình thay đổi 8 bước từ urgency đến neo thay đổi vào văn hóa." },
        { term: "Action research", definition: "Approach thay đổi dựa trên dữ liệu, phản hồi và tham gia của người bị ảnh hưởng." },
      ],
    },
    {
      id: "s6",
      heading: "Organizational Development + Creating a Culture for Change",
      blocks: [
        comparisonBlock("OD interventions (R&J p322-323)", ["Kỹ thuật", "Nội dung"], [
          { label: "Sensitivity training / survey feedback", cells: ["Nâng nhận thức về hành vi bản thân; khảo sát thái độ rồi phản hồi để cải thiện."] },
          { label: "Process consultation", cells: ["Tư vấn giúp client tự nhìn ra và giải quyết vấn đề quy trình, không làm hộ."] },
          { label: "Team building", cells: ["Tương tác cao trong nhóm để tăng trust & openness, cải thiện phối hợp."] },
          { label: "Intergroup development", cells: ["Đổi thái độ, định kiến, tri giác giữa các nhóm để giảm dysfunctional intergroup conflict."] },
          { label: "Appreciative inquiry (AI)", cells: ["Tập trung điểm mạnh & thành công; 4 bước: discovery → dreaming → design → destiny."] },
        ]),
        calloutBlock(
          "key",
          "Creating a culture for change (R&J p323)",
          "Không chỉ thích ứng mà chủ động ôm lấy thay đổi qua 3 cách: managing paradox (không có trạng thái tối ưu cuối cùng, phải cân bằng động các căng thẳng), stimulating an innovative culture (khuyến khích thử nghiệm, chấp nhận thất bại), creating a learning organization (tổ chức học tập, sửa lỗi hệ thống). (sách) Đo mức cam kết learning-organization bằng DLOQ (Dimensions of the Learning Organization Questionnaire). Manager biến công ty thành learning organization bằng: establish strategy (cam kết công khai với change/innovation/continuous improvement), redesign structure (làm phẳng, gộp phòng ban, tăng cross-functional teams), reshape culture (thưởng risk-taking + dám nhận sai, khuyến khích FUNCTIONAL CONFLICT).",
        ),
      ],
      keyTerms: [
        { term: "Organizational development", definition: "Tập hợp interventions nhằm cải thiện hiệu quả tổ chức và sức khỏe con người trong tổ chức." },
        { term: "Appreciative inquiry", definition: "OD approach tập trung điểm mạnh và câu chuyện thành công thay vì chỉ đào sâu vấn đề." },
        { term: "Learning organization", definition: "Tổ chức liên tục học, chia sẻ tri thức và cải thiện hệ thống." },
      ],
    },
    {
      id: "s6b",
      heading: "Culture for change: innovation & idea champions (sách Ch.17)",
      blocks: [
        calloutBlock(
          "note",
          "Innovation = loại change chuyên biệt (sách)",
          "Ý tưởng mới áp vào khởi tạo/cải thiện product, process, service — mọi innovation đều là change, không phải change nào cũng là innovation (từ cải tiến tăng dần tới đột phá radical).",
        ),
        comparisonBlock(
          "4 nguồn structural của innovation (sách)",
          ["Nguồn", "Cơ chế"],
          [
            {
              label: "Organic structures",
              cells: [
                "Ít vertical differentiation/formalization/centralization → linh hoạt, dễ hấp thu innovation.",
              ],
            },
            {
              label: "Long tenure in management",
              cells: ["Legitimacy + biết cách hoàn thành việc."],
            },
            {
              label: "Slack resources",
              cells: [
                "Đủ dư để mua/phát triển innovation, chịu được thất bại.",
              ],
            },
            {
              label: "High interunit communication",
              cells: [
                "Committee, task force, cross-functional teams.",
              ],
            },
            {
              label: "Context thưởng & job security",
              cells: [
                "Tổ chức innovative thưởng CẢ thành công LẪN thất bại — thưởng cho 'absence of failures' thay vì 'presence of successes' là giết risk taking; job security cao để không sợ sai khi thử.",
              ],
            },
          ],
        ),
        calloutBlock(
          "key",
          "Idea champions (sách)",
          "Người chủ động, nhiệt thành promote ý tưởng, build support, vượt kháng cự, bảo đảm implement; đặc điểm: self-confidence rất cao, persistence, energy, chấp nhận rủi ro; giống transformational leader; cần decision-making discretion. Khác biệt văn hóa khi championing: collectivist → thích appeal cross-functional support; high power-distance → làm chặt với authority TRƯỚC khi bắt đầu; high uncertainty avoidance → phát triển innovation TRONG rules/procedures của tổ chức.",
        ),
      ],
      keyTerms: [
        {
          term: "Innovation",
          definition:
            "Ý tưởng mới áp vào khởi tạo hoặc cải thiện product, process hay service.",
        },
        {
          term: "Idea champions",
          definition:
            "Người chủ động promote ý tưởng, build support, vượt kháng cự và bảo đảm implement.",
        },
      ],
    },
    {
      id: "s7",
      heading: "What is stress? Challenge vs hindrance + demands-resources",
      blocks: [
        calloutBlock(
          "key",
          "Định nghĩa stress + Demands–Resources (R&J p327)",
          "Stress = dynamic condition khi cá nhân đối mặt với opportunity/demand/resource liên quan điều mình mong muốn, mà kết quả vừa uncertain vừa important. Stress thường bị nhìn tiêu cực nhưng có mặt tích cực khi áp lực vừa phải thúc đẩy hiệu suất. Demands = trách nhiệm, áp lực, nghĩa vụ, bất định cá nhân đối mặt; Resources = những thứ trong tầm kiểm soát giúp giải quyết demands. Stress cao khi demands vượt resources. → Mắt xích môn học: stress response về bản chất là emotion kéo dài (Topic 04) và nếu không quản trị sẽ bào mòn job attitudes/satisfaction (Topic 05) — vì thế quản trị change không tách rời quản trị cảm xúc và thái độ.",
        ),
        comparisonBlock("Challenge vs Hindrance stressors (R&J p327)", ["Loại", "Bản chất", "Tác động"], [
          { label: "Challenge stressors", cells: ["Gắn với workload, áp lực hoàn thành, deadline.", "Thúc đẩy — cải thiện hiệu suất trong môi trường có hỗ trợ; ít strain hơn."] },
          { label: "Hindrance stressors", cells: ["Red tape, office politics, mơ hồ trách nhiệm.", "Cản trở mục tiêu — giảm hiệu suất ở mọi môi trường."] },
        ]),
        calloutBlock(
          "key",
          "Allostasis — không có trạng thái cân bằng lý tưởng (sách)",
          "Nghiên cứu sớm nhìn stress kiểu HOMEOSTATIC (demands khớp resources là xong); nay rõ là không có single ideal state — mô hình ALLOSTATIC: demands đổi, resources đổi, cách xử lý mất cân bằng cũng đổi; qua allostasis ta tìm ổn định bằng cách THAY ĐỔI hành vi/thái độ; tất cả phụ thuộc allostatic load — tác động tích lũy của stressors so với resources đang có: load vừa phải + tự tin + support → dám chịu strain và huy động coping tốt hơn; load quá lớn/kéo dài → triệu chứng tâm-sinh lý.",
        ),
      ],
      keyTerms: [
        { term: "Stress", definition: "Dynamic condition khi kết quả quan trọng nhưng không chắc chắn trong bối cảnh demand/resource/opportunity." },
        { term: "Challenge stressors", definition: "Áp lực có thể thúc đẩy trưởng thành và hiệu suất nếu có nguồn lực phù hợp." },
        { term: "Hindrance stressors", definition: "Áp lực cản trở mục tiêu và làm giảm hiệu suất." },
        { term: "Demands", definition: "Trách nhiệm, áp lực, nghĩa vụ hoặc bất định cá nhân phải đối mặt." },
        { term: "Resources", definition: "Điều cá nhân kiểm soát hoặc tiếp cận được để xử lý demands." },
        {
          term: "Allostasis",
          definition:
            "Quá trình tìm ổn định bằng cách thay đổi hành vi hoặc thái độ khi demands và resources biến động.",
        },
        {
          term: "Allostatic load",
          definition:
            "Tác động tích lũy của stressors so với resources đang có.",
        },
      ],
    },
    {
      id: "s8",
      heading: "Potential sources of stress",
      blocks: [
        flowBlock(
          "s8",
          "Potential Sources of Stress (R&J p328-330)",
          "tree",
          [
            { id: "src", label: "Potential sources", detail: "Ba nhóm nguồn stress tác động cộng dồn qua individual differences." },
            { id: "env", label: "Environmental factors", parent: "src", detail: "Bất định kinh tế, chính trị, công nghệ." },
            { id: "org", label: "Organizational factors", parent: "src", detail: "Task demands, role demands, interpersonal demands." },
            { id: "per", label: "Personal factors", parent: "src", detail: "Gia đình, tài chính cá nhân, work-life conflict." },
          ],
          [
            { from: "src", to: "env", label: "environment" },
            { from: "src", to: "org", label: "organization" },
            { from: "src", to: "per", label: "personal" },
          ],
          "Ba nhóm nguồn stress; tác động cộng dồn (additive) qua individual differences → experienced stress.",
        ),
        comparisonBlock("3 nhóm sources of stress (R&J p329-330)", ["Nhóm", "Nội dung"], [
          { label: "Environmental factors", cells: ["Bất định kinh tế, chính trị, công nghệ — làm kỹ năng/kinh nghiệm lỗi thời nhanh."] },
          { label: "Organizational factors", cells: ["Task demands, role demands (role conflict, overload, ambiguity), interpersonal demands (xung đột, bắt nạt, quấy rối). (sách) Mistreatment (bully, incivility, harassment) kích hoạt cortisol — hormone trong chuỗi stress reaction."] },
          { label: "Personal factors", cells: ["Vấn đề gia đình, work–life conflict, khó khăn tài chính cá nhân."] },
        ]),
        comparisonBlock(
          "4 biến điều tiết stress theo cá nhân (sách)",
          ["Biến", "Cơ chế"],
          [
            {
              label: "Perception",
              cells: [
                "Stress nằm ở DIỄN GIẢI, không phải điều kiện khách quan — cùng layoff: người sợ mất việc, người thấy cơ hội severance khởi nghiệp; nối Topic 02.",
              ],
            },
            {
              label: "Job experience",
              cells: [
                "2 cơ chế: selective withdrawal — ai stress nhiều đã nghỉ, người ở lại vốn kháng stress tốt; coping mechanisms tích lũy theo thời gian.",
              ],
            },
            {
              label: "Social support",
              cells: [
                "Buffer được ghi nhận TỐT NHẤT trong tài liệu stress.",
              ],
            },
            {
              label: "Personality traits",
              cells: [
                "Neuroticism → tự TÌM THẤY nhiều stressor hơn trong môi trường + chọn avoidance coping thay vì giải quyết.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Stressors are ADDITIVE (R&J p330)",
          "Stress tích lũy: mỗi stressor cộng thêm vào mức nền; một stressor lẻ có thể nhỏ nhưng cộng vào nền cao thì quá tải. Cần đánh giá tổng các nguồn, không chỉ từng cái. Slide bổ sung technostress: techno-burden, techno-insecurity, techno-complexity, techno-addiction, techno-intrusion.",
        ),
      ],
      keyTerms: [
        { term: "Role conflict", definition: "Các kỳ vọng vai trò mâu thuẫn nhau." },
        { term: "Role overload", definition: "Yêu cầu vai trò vượt quá thời gian, năng lực hoặc nguồn lực." },
        { term: "Role ambiguity", definition: "Không rõ trách nhiệm, kỳ vọng hoặc tiêu chuẩn hoàn thành." },
        { term: "Stressors are additive", definition: "Nhiều nguồn stress cộng dồn thành mức căng thẳng tổng." },
      ],
    },
    {
      id: "s9",
      heading: "Inverted-U + consequences of stress",
      blocks: [
        calloutBlock(
          "key",
          "Inverted-U: stress ↔ performance (slide 26, R&J 2015)",
          "Quan hệ áp lực–hiệu suất là chữ U ngược: quá ít stress → chán/uể oải; vùng optimum stress → hiệu suất đỉnh; quá nhiều → lo âu, kiệt sức. Eustress là áp lực tích cực; distress đi từ fatigue → exhaustion → burnout.",
        ),
        comparisonBlock("Eustress vs Distress", ["Loại", "Bản chất", "Tác động"], [
          { label: "Eustress", cells: ["Áp lực tích cực, vừa đủ, có ý nghĩa và thường đi kèm resources phù hợp.", "Tăng tập trung, năng lượng và performance trong vùng optimum stress."] },
          { label: "Distress", cells: ["Áp lực vượt ngưỡng chịu đựng hoặc kéo dài, demands vượt coping/resources.", "Gây fatigue, exhaustion, burnout và kéo performance xuống sau đỉnh inverted-U."] },
        ]),
        comparisonBlock("Consequences of Stress — 3 nhóm symptom (Exhibit 17-7, R&J p331)", ["Nhóm", "Biểu hiện"], [
          { label: "Physiological", cells: ["Thay đổi chuyển hóa, tăng nhịp tim/huyết áp, đau đầu, bệnh mạch vành, tăng sickness absence."] },
          { label: "Psychological", cells: ["Job dissatisfaction, căng thẳng, lo âu, cáu gắt, chán nản, trì hoãn."] },
          { label: "Behavioral", cells: ["Giảm năng suất, tăng absence & turnover, thay đổi ăn uống/hút thuốc/rượu, nói nhanh, bồn chồn, rối loạn giấc ngủ."] },
        ]),
        calloutBlock(
          "note",
          "Consequences mở rộng (sách)",
          "Physiological: UK long-term study — job strain gắn coronary heart disease; Đan Mạch — burnout cấp work-unit gắn sickness absence cao hơn. Psychological: người EXTERNAL locus of control được tăng job control lại TĂNG stress/exhaustion (không phải ai cũng hợp autonomy).",
        ),
      ],
      keyTerms: [
        { term: "Eustress", definition: "Mức stress tích cực giúp kích hoạt năng lượng và hiệu suất." },
        { term: "Distress", definition: "Stress vượt ngưỡng gây hại, dẫn tới mệt mỏi, kiệt sức hoặc burnout." },
        { term: "Burnout", definition: "Trạng thái kiệt quệ kéo dài về cảm xúc, năng lượng và hiệu quả công việc." },
      ],
    },
    {
      id: "s10",
      heading: "Managing stress: individual + organizational approaches",
      blocks: [
        comparisonBlock("Managing Stress — 2 nhóm approach (R&J p332-333)", ["Nhóm", "Individual approaches", "Organizational approaches"], [
          { label: "1", cells: ["Time-management techniques: ưu tiên việc quan trọng, giảm trì hoãn.", "Selection & placement + training: đặt đúng người, huấn luyện đối phó."] },
          { label: "2", cells: ["Physical exercise: aerobic giúp giảm phản ứng sinh lý của stress.", "Realistic goal-setting: mục tiêu rõ, khả thi."] },
          { label: "3", cells: ["Relaxation techniques: thiền, thở, nghỉ ngơi.", "Redesign of jobs: tăng autonomy, feedback, giảm quá tải."] },
          { label: "4", cells: ["Social support networks: bạn bè, đồng nghiệp, gia đình.", "Employee involvement + communication + sabbaticals + wellness programs."] },
        ]),
      ],
      keyTerms: [
        { term: "Time management", definition: "Kỹ thuật sắp xếp ưu tiên, lịch và năng lượng để giảm quá tải." },
        { term: "Social support", definition: "Nguồn hỗ trợ cảm xúc, thông tin và thực tế từ người khác." },
        { term: "Wellness programs", definition: "Chương trình tổ chức hỗ trợ sức khỏe thể chất/tinh thần và phòng ngừa stress." },
      ],
    },
    {
      id: "s11",
      heading: "Quản trị từ chính mình: D>CS=SR + change–stress link",
      blocks: [
        calloutBlock(
          "key",
          "D > CS = SR (Thornton 2023, slide 30)",
          "Đây là công thức khái niệm, không phải calc/formula block: khi Demands vượt Coping Skills → Stress Reaction. Ba đòn bẩy quản trị stress: (1) reduce demands, (2) increase coping skills, (3) monitor stress reactions. Nó khớp demands–resources model của R&J. Change tại nơi làm việc gắn với employee stress, distrust & intent to quit; vì vậy quản trị thay đổi tốt cũng là giảm stress. Thông điệp khép môn: trước khi đòi người khác thay đổi, bạn đã thay đổi chính mình chưa? — quản trị thay đổi & stress bắt đầu từ self-leadership, biến áp lực thành bản lĩnh (eustress).",
        ),
        calloutBlock(
          "note",
          "Giảm stress của thay đổi — bằng chứng sách (sách)",
          "Transformational leaders định hình affect tập thể → nhân viên giữ commitment với change, không coi nó là stressful; xây positive change orientation TRƯỚC khi lên kế hoạch: tăng self-efficacy (role clarification + thưởng liên tục), tăng perceived control + thái độ tích cực (cho tham gia từ khâu planning tới áp dụng); thêm: tăng lượng communication, đánh giá và bồi psychological resilience qua social support, huấn luyện emotional self-regulation.",
        ),
        calloutBlock(
          "key",
          "So what — kiến thức này đổi hành động của bạn",
          "Change và stress không phải hai chương rời: mọi thay đổi bạn khởi xướng đều bơm demands vào người khác, nên quản trị thay đổi giỏi cũng là quản trị stress. Hành động: khi đẩy một thay đổi, đọc trước 3 tầng kháng cự (Maurer) và giảm demands/tăng coping thay vì chỉ ép tiến độ; với chính mình, dùng D>CS=SR như bảng đèn — thấy demands vượt coping thì can thiệp sớm ở một trong ba đòn bẩy, biến áp lực thành eustress trước khi trượt sang distress/burnout.",
        ),
      ],
      keyTerms: [
        { term: "Coping skills", definition: "Năng lực nhận diện, điều chỉnh và xử lý demands/stressors." },
        { term: "Self-management", definition: "Tự quản trị hành vi, năng lượng, cảm xúc và phản ứng trước áp lực." },
        { term: "Eustress", definition: "Áp lực được chuyển hóa thành năng lượng tích cực và trưởng thành." },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "A manufacturer begins redesigning jobs after AI-enabled equipment makes its old workflow obsolete. Which force for change is most directly driving the response?",
      options: [
        { id: "a", text: "Technology", isCorrect: true, rationale: "Cơ chế: AI-enabled equipment làm workflow cũ lỗi thời và buộc redesign jobs, đúng technology force. Bẫy: coi thiết bị chỉ là công cụ nội bộ, không phải áp lực change. Khóa: technology là một trong sáu forces for change." },
        { id: "b", text: "Job satisfaction", isCorrect: false, rationale: "Cơ chế: satisfaction có thể đổi sau redesign nhưng không phải trigger được nêu. Bẫy: nhân viên có thể không hài lòng với workflow cũ. Khóa: outcome/attitude khác force buộc tổ chức thay đổi." },
        { id: "c", text: "Emotional intelligence", isCorrect: false, rationale: "Cơ chế: EI có thể giúp manager triển khai change nhưng không làm workflow lỗi thời. Bẫy: change agents cần quản trị emotion. Khóa: capability cá nhân ≠ environmental force." },
        { id: "d", text: "Equity sensitivity", isCorrect: false, rationale: "Cơ chế: equity sensitivity ảnh hưởng phản ứng với fairness, không phải nguyên nhân AI xuất hiện. Bẫy: job redesign có thể đổi input/outcome. Khóa: fairness perception khác technology pressure." },
        { id: "e", text: "Instrumental ethical climate", isCorrect: false, rationale: "Cơ chế: case không nói self-interest hay ethical criterion. Bẫy: culture có thể hỗ trợ/cản change. Khóa: climate không nằm trong sáu forces được tình huống kích hoạt." },
      ],
      difficulty: "basic",
      conceptTested: "Forces for change",
      takeaway: "Forces for change gồm workforce, technology, economic shocks, competition, social trends và world politics; đó là các áp lực khiến tổ chức không thể đứng yên.",
    },
    {
      id: "q02",
      stem: "Six months before a new regulation takes effect, a hospital sets a safety target, appoints change agents, and launches a phased redesign of its procedures. What type of change is this?",
      options: [
        { id: "a", text: "Planned change because it is intentional, goal-oriented, and led by change agents", isCorrect: true, rationale: "Cơ chế: target, appointed agents và phased redesign trước deadline thể hiện intentionality + goal orientation. Bẫy: regulation là lực bên ngoài nên tưởng mọi phản ứng đều reactionary. Khóa: chủ động thiết kế response = planned change." },
        { id: "b", text: "Reactionary change because the hospital waits for a crisis before acting", isCorrect: false, rationale: "Cơ chế: hospital hành động trước khi regulation có hiệu lực và trước crisis. Bẫy: external mandate có vẻ ép tổ chức phản ứng. Khóa: timing và kế hoạch cho thấy chủ động." },
        { id: "c", text: "Resistance to change because employees may dislike the new procedures", isCorrect: false, rationale: "Cơ chế: stem chưa nêu employee resistance; resistance là response, không phải loại change. Bẫy: procedure redesign thường gặp phản kháng. Khóa: classify theo intentionality, không theo mức thích/ghét." },
        { id: "d", text: "A cultural ritual that preserves the current safety norms", isCorrect: false, rationale: "Cơ chế: phased redesign nhằm thay procedures, không chỉ reinforce trạng thái cũ. Bẫy: safety practices có thể trở thành ritual. Khóa: planned change dịch chuyển system." },
        { id: "e", text: "An individual stress-coping strategy", isCorrect: false, rationale: "Cơ chế: target/agents/procedures đều ở organizational level. Bẫy: regulation và redesign có thể gây stress cho staff. Khóa: coping cá nhân khác planned organizational change." },
      ],
      difficulty: "basic",
      conceptTested: "Planned versus reactionary change",
      takeaway: "Planned change khác reactionary change ở điểm nó chủ động, có mục tiêu và có người dẫn dắt; không phải chỉ đợi khủng hoảng ép phải đổi.",
    },
    {
      id: "q03",
      stem: "During a software rollout, Lan clings to her familiar routine, worries about job security and the unknown, and ignores evidence that the system will help. What is the main source of resistance in this case?",
      options: [
        { id: "a", text: "Individual resistance through habit, security concerns, fear of the unknown, and selective processing", isCorrect: true, rationale: "Cơ chế: từng cue trong stem map trực tiếp vào habit/security/fear/selective information processing. Bẫy: rollout là organizational event nên dễ chọn nguồn tổ chức. Khóa: cơ chế nằm trong cognition và routine của Lan." },
        { id: "b", text: "Organizational resistance through structural inertia and threat to expertise", isCorrect: false, rationale: "Cơ chế: case không nêu rules, group norms hay power/expertise bị đe dọa ở cấp hệ thống. Bẫy: software mới thường làm đổi expertise. Khóa: evidence hiện tại chỉ nằm ở phản ứng cá nhân Lan." },
        { id: "c", text: "A force for change created by world politics", isCorrect: false, rationale: "Cơ chế: world politics không xuất hiện và force for change khác source resisting change. Bẫy: rollout có thể bắt nguồn từ external force. Khóa: câu hỏi hỏi vì sao Lan chống lại, không hỏi vì sao tổ chức đổi." },
        { id: "d", text: "Technology and competition as external forces for change", isCorrect: false, rationale: "Cơ chế: technology có thể kích hoạt rollout nhưng không giải thích selective denial của Lan. Bẫy: software làm đáp án technology rất hấp dẫn. Khóa: trigger of change ≠ source of resistance." },
        { id: "e", text: "Role conflict, overload, and ambiguity as stress demands", isCorrect: false, rationale: "Cơ chế: stem không nói incompatible roles, excessive workload hay unclear expectations. Bẫy: fear và insecurity gây stress. Khóa: emotional strain không tự biến thành role demands." },
      ],
      difficulty: "intermediate",
      conceptTested: "Individual resistance sources",
      takeaway: "Individual resistance thường đến từ thói quen, an toàn, tiền bạc, sợ cái chưa biết và lọc thông tin theo niềm tin cũ.",
    },
    {
      id: "q04",
      stem: "Employees support a new cross-functional process, but legacy approval rules and department norms repeatedly pull work back to the old system. What best explains the resistance?",
      options: [
        { id: "a", text: "Organizational resistance through structural inertia and group inertia", isCorrect: true, rationale: "Cơ chế: approval rules là structural inertia và department norms là group inertia dù employees ủng hộ. Bẫy: mọi resistance cuối cùng đều biểu hiện qua người. Khóa: system/norms kéo lùi = organizational source." },
        { id: "b", text: "Challenge stressors that motivate employees to improve performance", isCorrect: false, rationale: "Cơ chế: rules/norms đang block progress chứ không tạo meaningful challenge. Bẫy: cross-functional work có thể là stretch assignment. Khóa: hindering inertia thuộc resistance, không phải challenge stressor." },
        { id: "c", text: "Individual resistance based on fear of the unknown", isCorrect: false, rationale: "Cơ chế: employees explicitly support process; barrier nằm ở legacy system và department norms. Bẫy: người thực thi vẫn tuân theo nếp cũ. Khóa: location of cause phân biệt individual và organizational." },
        { id: "d", text: "An organizational-development intervention", isCorrect: false, rationale: "Cơ chế: OD intervention được dùng để thay đổi system; legacy rules đang cản thay đổi. Bẫy: cross-functional process nghe như một intervention. Khóa: intervention là giải pháp, inertia là source of resistance." },
        { id: "e", text: "Behavioral symptoms of stress such as withdrawal", isCorrect: false, rationale: "Cơ chế: case không nêu absence, turnover hay coping behavior. Bẫy: work bị kéo lùi có thể giống withdrawal. Khóa: process blockage ở structure/group khác stress consequence." },
      ],
      difficulty: "basic",
      conceptTested: "Organizational resistance sources",
      takeaway: "Resistance không chỉ nằm trong đầu từng người; hệ thống, nhóm, chuyên môn và quyền lực cũ cũng tạo sức ì rất mạnh.",
    },
    {
      id: "q05",
      stem: "Maurer's three levels of resistance progress from:",
      options: [
        { id: "a", text: "I don't get it, to I don't like it, to I don't like you", isCorrect: true, rationale: "Cơ chế: Maurer tách resistance thành hiểu biết, cảm xúc và niềm tin với người dẫn dắt. Bẫy: dễ nghĩ resistance chỉ là thiếu thông tin. Khóa: cognition → emotion → trust." },
        { id: "b", text: "Unfreezing, movement, and refreezing", isCorrect: false, rationale: "Cơ chế: đây là Lewin's 3-step model. Bẫy: cũng có 3 bước. Khóa: Lewin là process change, Maurer là levels of resistance." },
        { id: "c", text: "Diagnosis, analysis, and feedback", isCorrect: false, rationale: "Cơ chế: đây là phần đầu của action research. Bẫy: action research cũng xử lý resistance. Khóa: Maurer dùng câu nói 'I don't...'." },
        { id: "d", text: "Discovery, dreaming, and design", isCorrect: false, rationale: "Cơ chế: đây là appreciative inquiry. Bẫy: cùng nằm trong OD/change. Khóa: AI tập trung điểm mạnh, không phải resistance levels." },
        { id: "e", text: "Physiological, psychological, and behavioral", isCorrect: false, rationale: "Cơ chế: đây là ba nhóm consequences of stress. Bẫy: resistance có thể đi kèm stress. Khóa: Maurer không phân loại triệu chứng stress." },
      ],
      difficulty: "basic",
      conceptTested: "Maurer's three levels of resistance",
      takeaway: "Kháng cự không chỉ là 'không hiểu'; có tầng cảm xúc và tầng thiếu tin tưởng, nên chỉ giải thích thêm đôi khi chưa đủ.",
    },
    {
      id: "q06",
      stem: "Why does participation often reduce resistance to change?",
      options: [
        { id: "a", text: "People are less likely to resist a decision they helped create", isCorrect: true, rationale: "Cơ chế: participation tạo ownership và voice nên giảm kháng cự. Bẫy: participation không đảm bảo mọi ý kiến được chọn. Khóa: involvement increases commitment." },
        { id: "b", text: "It hides information from employees until the change is complete", isCorrect: false, rationale: "Cơ chế: che giấu thông tin là trái với communication và dễ tăng nghi ngờ. Bẫy: đôi khi quản lý nghĩ nói ít sẽ tránh phản ứng. Khóa: participation cần minh bạch hơn, không ít hơn." },
        { id: "c", text: "It is the same as coercion", isCorrect: false, rationale: "Cơ chế: coercion ép bằng đe dọa; participation mời tham gia. Bẫy: cả hai đều là tactics. Khóa: voluntary voice vs threat." },
        { id: "d", text: "It removes the need for any change agent", isCorrect: false, rationale: "Cơ chế: change agent vẫn cần thiết để dẫn dắt và tích hợp input. Bẫy: participation nghe như tự quản hoàn toàn. Khóa: involvement supports change agent, not replaces." },
        { id: "e", text: "It makes all restraining forces disappear automatically", isCorrect: false, rationale: "Cơ chế: participation giảm một số lực cản nhưng không xóa mọi lợi ích/structure cũ. Bẫy: tactic hiệu quả dễ bị thần thánh hóa. Khóa: participation is one tactic, not magic." },
      ],
      difficulty: "intermediate",
      conceptTested: "Overcoming resistance through participation",
      takeaway: "Participation giảm resistance vì người bị ảnh hưởng có tiếng nói và thấy mình đồng sở hữu thay đổi, nhưng vẫn cần truyền thông, hỗ trợ và công bằng.",
    },
    {
      id: "q07",
      stem: "Which tactic may work quickly but risks long-term loss of trust if employees feel used?",
      options: [
        { id: "a", text: "Manipulation and cooptation", isCorrect: true, rationale: "Cơ chế: manipulation/cooptation có thể vô hiệu hóa phản kháng nhanh nhưng rủi ro bị xem là lừa hoặc mua chuộc. Bẫy: nó vẫn là một tactic được liệt kê. Khóa: short-term effectiveness, long-term trust risk." },
        { id: "b", text: "Developing positive relationships", isCorrect: false, rationale: "Cơ chế: positive relationships xây niềm tin, không phá niềm tin. Bẫy: quan hệ tốt cũng có thể bị dùng sai. Khóa: relationship tactic aims at trust." },
        { id: "c", text: "Implementing changes fairly", isCorrect: false, rationale: "Cơ chế: fairness giảm cảm giác bị xử tệ. Bẫy: procedural justice vẫn có thể không làm ai vui. Khóa: fair process protects legitimacy." },
        { id: "d", text: "Building support and commitment", isCorrect: false, rationale: "Cơ chế: support/commitment dùng đào tạo, tư vấn, hỗ trợ. Bẫy: có thể tốn thời gian. Khóa: not the trust-damaging shortcut in the stem." },
        { id: "e", text: "Selecting people who accept change", isCorrect: false, rationale: "Cơ chế: selection giảm resistance từ đầu bằng person fit với change. Bẫy: nếu cực đoan có thể làm culture cloning. Khóa: stem nói tactic ngắn hạn gây mất tin." },
      ],
      difficulty: "intermediate",
      conceptTested: "Risks of manipulation and cooptation",
      takeaway: "Manipulation/cooptation là đường tắt nguy hiểm: có thể làm yên phản kháng trước mắt nhưng phá niềm tin cho lần thay đổi sau.",
    },
    {
      id: "q08",
      stem: "What is the correct sequence in Lewin's three-step model?",
      options: [
        { id: "a", text: "Unfreezing → movement → refreezing", isCorrect: true, rationale: "Cơ chế: Lewin bắt đầu bằng phá status quo, chuyển sang trạng thái mới, rồi neo lại. Bẫy: người học hay bỏ refreezing. Khóa: unfreeze, move, refreeze." },
        { id: "b", text: "Movement → unfreezing → refreezing", isCorrect: false, rationale: "Cơ chế: không thể move bền nếu chưa unfreeze lực cản/status quo. Bẫy: nhiều tổ chức lao vào hành động trước. Khóa: readiness before movement." },
        { id: "c", text: "Refreezing → movement → unfreezing", isCorrect: false, rationale: "Cơ chế: refreezing là bước cuối để cố định trạng thái mới. Bẫy: ổn định nghe như khởi đầu an toàn. Khóa: stabilize after change, not before." },
        { id: "d", text: "Diagnosis → analysis → feedback", isCorrect: false, rationale: "Cơ chế: đây là action research, không phải Lewin. Bẫy: cùng là approach quản trị change. Khóa: diagnosis belongs to data-driven research." },
        { id: "e", text: "Urgency → coalition → anchor", isCorrect: false, rationale: "Cơ chế: đây là các mốc trong Kotter. Bẫy: Kotter chi tiết hóa Lewin. Khóa: Lewin có 3 nhãn đơn giản hơn." },
      ],
      difficulty: "basic",
      conceptTested: "Lewin's three-step model",
      takeaway: "Lewin nhắc rằng change không chỉ là hành động mới; phải phá trạng thái cũ và neo trạng thái mới thì thay đổi mới bền.",
    },
    {
      id: "q09",
      stem: "According to Lewin, unfreezing the status quo can be achieved by:",
      options: [
        { id: "a", text: "Increasing driving forces, decreasing restraining forces, or doing both", isCorrect: true, rationale: "Cơ chế: status quo là cân bằng lực; unfreezing là làm lệch cân bằng đó. Bẫy: nhiều người chỉ nghĩ tăng pressure. Khóa: reduce restraints is often cleaner than only pushing harder." },
        { id: "b", text: "Only increasing restraining forces", isCorrect: false, rationale: "Cơ chế: tăng restraining forces giữ nguyên trạng mạnh hơn. Bẫy: restrain nghe như kiểm soát thay đổi. Khóa: restraining forces oppose change." },
        { id: "c", text: "Refreezing before employees understand the reason for change", isCorrect: false, rationale: "Cơ chế: refreezing là sau movement. Bẫy: muốn ổn định sớm để giảm lo âu. Khóa: freeze after movement, not before readiness." },
        { id: "d", text: "Eliminating all conflict permanently", isCorrect: false, rationale: "Cơ chế: change không yêu cầu xóa mọi conflict; conflict có thể cung cấp thông tin. Bẫy: resistance bị xem là luôn xấu. Khóa: manage forces, not erase all tension." },
        { id: "e", text: "Using only coercion as the standard method", isCorrect: false, rationale: "Cơ chế: coercion là một tactic rủi ro, không phải nguyên lý Lewin. Bẫy: force nghe giống driving forces. Khóa: driving force không đồng nghĩa ép buộc." },
      ],
      difficulty: "intermediate",
      conceptTested: "Driving and restraining forces",
      takeaway: "Unfreezing là quản trị cân bằng lực: đôi khi giảm lực cản còn hiệu quả hơn cứ đẩy mạnh thông điệp thay đổi.",
    },
    {
      id: "q10",
      stem: "In Kotter's eight-step plan, the first and last broad moves are best captured as:",
      options: [
        { id: "a", text: "Establish urgency, then anchor the changes in the culture", isCorrect: true, rationale: "Cơ chế: Kotter mở bằng urgency và kết bằng reinforcing/anchoring change into culture. Bẫy: coalition rất sớm nhưng không phải bước đầu. Khóa: urgency starts, culture anchors." },
        { id: "b", text: "Begin with rewards, then remove all conflict", isCorrect: false, rationale: "Cơ chế: rewards có thể hỗ trợ short-term wins nhưng không phải bước đầu; xóa conflict không phải bước cuối. Bẫy: reward dễ thấy trong change. Khóa: Kotter is urgency-to-culture." },
        { id: "c", text: "Start with refreezing, then create a coalition", isCorrect: false, rationale: "Cơ chế: refreezing/anchoring là cuối, coalition là bước 2. Bẫy: trộn Lewin và Kotter. Khóa: coalition comes after urgency." },
        { id: "d", text: "Diagnose, then evaluate", isCorrect: false, rationale: "Cơ chế: đây là action research sequence. Bẫy: action research cũng là approach quản trị change. Khóa: Kotter has eight leadership steps." },
        { id: "e", text: "Dream, design, then destiny", isCorrect: false, rationale: "Cơ chế: đây là appreciative inquiry. Bẫy: AI cũng trong OD. Khóa: Kotter không bắt đầu bằng discovery/dreaming." },
      ],
      difficulty: "basic",
      conceptTested: "Kotter's eight-step plan",
      takeaway: "Kotter bắt đầu bằng cảm giác cấp bách và kết thúc bằng neo thay đổi vào văn hóa; nếu không neo, tổ chức dễ quay về cũ.",
    },
    {
      id: "q11",
      stem: "Which sequence best represents action research?",
      options: [
        { id: "a", text: "Diagnosis → analysis → feedback → action → evaluation", isCorrect: true, rationale: "Cơ chế: action research là change dựa trên dữ liệu và vòng phản hồi. Bẫy: dễ nhầm với Kotter vì cũng có steps. Khóa: diagnosis and evaluation signal research logic." },
        { id: "b", text: "Unfreezing → movement → refreezing", isCorrect: false, rationale: "Cơ chế: đây là Lewin's model. Bẫy: action research cũng giúp unfreeze qua dữ liệu. Khóa: Lewin is three-step force model." },
        { id: "c", text: "Urgency → coalition → vision → communication", isCorrect: false, rationale: "Cơ chế: đây là phần đầu Kotter. Bẫy: cả hai đều có communication/feedback. Khóa: Kotter is leadership plan, not research cycle." },
        { id: "d", text: "Discovery → dreaming → design → destiny", isCorrect: false, rationale: "Cơ chế: đây là appreciative inquiry. Bẫy: AI cũng là intervention change. Khóa: AI focuses on strengths, action research starts with diagnosis." },
        { id: "e", text: "Demand → coping skill → stress reaction", isCorrect: false, rationale: "Cơ chế: đây là D>CS=SR stress lens. Bẫy: stress và change gắn nhau. Khóa: action research uses organizational data steps." },
      ],
      difficulty: "basic",
      conceptTested: "Action research",
      takeaway: "Action research biến change thành quy trình học bằng dữ liệu: chẩn đoán, phân tích, phản hồi, hành động và đánh giá.",
    },
    {
      id: "q12",
      stem: "Appreciative inquiry differs from many problem-centered interventions because it:",
      options: [
        { id: "a", text: "Focuses on strengths and successes through discovery, dreaming, design, and destiny", isCorrect: true, rationale: "Cơ chế: appreciative inquiry tìm điểm mạnh/thành công rồi thiết kế tương lai từ đó. Bẫy: AI dễ bị nhầm với artificial intelligence. Khóa: in OD, AI = appreciative inquiry." },
        { id: "b", text: "Begins by threatening employees with penalties", isCorrect: false, rationale: "Cơ chế: đe dọa thuộc coercion, không phải AI. Bẫy: áp lực có thể thúc thay đổi ngắn hạn. Khóa: AI is positive and participative." },
        { id: "c", text: "Rejects any form of employee participation", isCorrect: false, rationale: "Cơ chế: AI thường rất participative. Bẫy: expert consultants đôi khi làm người học nghĩ OD là top-down. Khóa: AI asks people to tell and build on best experiences." },
        { id: "d", text: "Uses only financial ratios to diagnose culture", isCorrect: false, rationale: "Cơ chế: AI không chỉ dùng số tài chính; nó dùng câu chuyện/điểm mạnh. Bẫy: diagnosis có thể có data. Khóa: strengths narrative is central." },
        { id: "e", text: "Eliminates the need for a learning organization", isCorrect: false, rationale: "Cơ chế: AI có thể hỗ trợ learning organization. Bẫy: một intervention nghe như đủ. Khóa: intervention không thay thế culture for change." },
      ],
      difficulty: "intermediate",
      conceptTested: "Organizational development and appreciative inquiry",
      takeaway: "Appreciative inquiry đổi câu hỏi từ 'vấn đề là gì?' sang 'khi nào chúng ta từng làm tốt nhất, và làm sao nhân rộng điều đó?'.",
    },
    {
      id: "q13",
      stem: "A learning organization and an innovative culture are most closely tied to:",
      options: [
        { id: "a", text: "Creating a culture for change", isCorrect: true, rationale: "Cơ chế: R&J xem learning organization, innovative culture và managing paradox là cách tạo culture for change. Bẫy: Topic 11 cũng nói culture. Khóa: ở Topic 12, culture is a change capability." },
        { id: "b", text: "Selective information processing", isCorrect: false, rationale: "Cơ chế: selective processing là nguồn resistance cá nhân. Bẫy: learning organization xử lý lỗi nhận thức này. Khóa: one resists learning; the other builds learning." },
        { id: "c", text: "Role ambiguity", isCorrect: false, rationale: "Cơ chế: role ambiguity là organizational stressor. Bẫy: learning org có thể giảm ambiguity. Khóa: source of stress is not culture for change." },
        { id: "d", text: "Physiological symptoms of stress", isCorrect: false, rationale: "Cơ chế: symptoms là consequence of stress. Bẫy: innovation pressure có thể tạo stress. Khóa: learning/innovation culture is change infrastructure." },
        { id: "e", text: "Manipulation and cooptation", isCorrect: false, rationale: "Cơ chế: manipulation/cooptation là tactic vượt resistance, rủi ro mất niềm tin. Bẫy: có thể tạo thay đổi nhanh. Khóa: culture for change cần học và trust, không phải lừa." },
      ],
      difficulty: "intermediate",
      conceptTested: "Creating a culture for change",
      takeaway: "Culture for change không chỉ là phản ứng nhanh; nó là năng lực học, thử nghiệm, chịu nghịch lý và đổi mới liên tục.",
    },
    {
      id: "q14",
      stem: "An analyst feels energized by a demanding deadline because she has adequate support, but red tape blocks access to the data and drains her effort. Which interpretation is most accurate?",
      options: [
        { id: "a", text: "The deadline is a challenge stressor, while the red tape is a hindrance stressor", isCorrect: true, rationale: "Cơ chế: deadline có support nên thúc đẩy achievement; red tape chặn goal progress và làm cạn effort. Bẫy: cả hai đều tạo pressure. Khóa: challenge pushes toward goal; hindrance blocks it." },
        { id: "b", text: "The deadline is a hindrance, while the red tape is a motivating challenge", isCorrect: false, rationale: "Cơ chế: đáp án đảo tác động được stem mô tả. Bẫy: deadline có vẻ cản thời gian còn bureaucracy có thể là problem to solve. Khóa: classify theo chức năng thực tế đối với goal." },
        { id: "c", text: "The deadline is personal stress, while red tape is world-politics stress", isCorrect: false, rationale: "Cơ chế: challenge/hindrance là type theo tác động, không phải taxonomy nguồn personal/world politics. Bẫy: cùng Topic 12 có nhiều cách phân loại stressors. Khóa: source category khác functional type." },
        { id: "d", text: "Both pressures are coercion tactics used by a change agent", isCorrect: false, rationale: "Cơ chế: không có threat hay change agent; deadline và red tape là work conditions. Bẫy: mọi pressure dễ bị gọi là coercion. Khóa: coercion là tactic dùng force, không phải stressor classification." },
        { id: "e", text: "Both pressures should improve performance because all stress is motivating", isCorrect: false, rationale: "Cơ chế: red tape đang drain effort và cản access. Bẫy: áp dụng inverted-U để kết luận mọi stress vừa phải đều tốt. Khóa: hindrance stressors thường làm giảm performance dù mức áp lực không cực đoan." },
      ],
      difficulty: "basic",
      conceptTested: "Challenge versus hindrance stressors",
      takeaway: "Stress không phải một màu: áp lực có ý nghĩa và có nguồn lực hỗ trợ có thể thành challenge, còn red tape/politics thường là hindrance.",
    },
    {
      id: "q15",
      stem: "In the demands-resources model, resources are best understood as:",
      options: [
        { id: "a", text: "Things within a person's control or access that help resolve demands", isCorrect: true, rationale: "Cơ chế: resources giúp cá nhân xử lý demands và giảm stress reaction. Bẫy: resources không chỉ là tiền. Khóa: resources help meet demands." },
        { id: "b", text: "Any source of uncertainty regardless of control", isCorrect: false, rationale: "Cơ chế: uncertainty thường làm tăng demands hoặc stressors. Bẫy: nguồn lực cũng có thể giảm bất định. Khóa: uncertainty is not automatically a resource." },
        { id: "c", text: "Only organizational politics", isCorrect: false, rationale: "Cơ chế: politics thường là hindrance stressor. Bẫy: politics tạo nguồn lực quyền lực cho vài người. Khóa: model uses resources as coping capacity, not office games." },
        { id: "d", text: "Only physical exercise", isCorrect: false, rationale: "Cơ chế: exercise là một individual approach, không phải toàn bộ resources. Bẫy: exercise là nguồn lực sức khỏe. Khóa: resource category is broader." },
        { id: "e", text: "The final step in Kotter's plan", isCorrect: false, rationale: "Cơ chế: final step là anchor change in culture. Bẫy: Kotter và stress đều thuộc topic. Khóa: resources belongs to stress model." },
      ],
      difficulty: "intermediate",
      conceptTested: "Demands-resources model",
      takeaway: "Stress tăng khi demands vượt resources; quản trị stress nghĩa là vừa giảm yêu cầu bất hợp lý vừa tăng nguồn lực đối phó.",
    },
    {
      id: "q16",
      stem: "Role ambiguity, role overload, and role conflict are examples of:",
      options: [
        { id: "a", text: "Organizational factors, specifically role demands, as sources of stress", isCorrect: true, rationale: "Cơ chế: role demands là một phần organizational factors trong sources of stress. Bẫy: chúng xảy ra với cá nhân nên dễ gọi là personal. Khóa: role design/expectation belongs to organization." },
        { id: "b", text: "Individual sources of resistance to change", isCorrect: false, rationale: "Cơ chế: resistance individual là habit, security, economic factors, fear, selective processing. Bẫy: overload có thể làm người ta kháng cự. Khóa: role demands are stress sources." },
        { id: "c", text: "World politics", isCorrect: false, rationale: "Cơ chế: world politics là force for change/environmental pressure, không phải role demands. Bẫy: politics trong tổ chức có thể stress. Khóa: role ambiguity is inside the organization." },
        { id: "d", text: "Appreciative inquiry stages", isCorrect: false, rationale: "Cơ chế: AI stages là discovery/dreaming/design/destiny. Bẫy: role clarity có thể cải thiện qua OD. Khóa: not AI." },
        { id: "e", text: "Physiological symptoms", isCorrect: false, rationale: "Cơ chế: physiological symptoms là kết quả như huyết áp, đau đầu. Bẫy: role overload có thể dẫn tới symptoms. Khóa: source precedes consequence." },
      ],
      difficulty: "basic",
      conceptTested: "Sources of stress and role demands",
      takeaway: "Role conflict, overload và ambiguity là nguồn stress thuộc thiết kế/điều phối tổ chức, không chỉ là vấn đề cá nhân chịu đựng kém.",
    },
    {
      id: "q17",
      stem: "The idea that stressors are additive means that:",
      options: [
        { id: "a", text: "Each stressor adds to a person's overall stress level, so small stressors can become overload together", isCorrect: true, rationale: "Cơ chế: additive nghĩa là stress tích lũy trên mức nền. Bẫy: dễ đánh giá từng stressor riêng lẻ và bỏ tổng tải. Khóa: total load matters." },
        { id: "b", text: "One stressor cancels another stressor out automatically", isCorrect: false, rationale: "Cơ chế: additive là cộng dồn, không triệt tiêu. Bẫy: đôi khi người ta nghĩ stress ở nhà và công việc tách biệt. Khóa: cumulative, not canceling." },
        { id: "c", text: "Only organizational stressors matter", isCorrect: false, rationale: "Cơ chế: sources gồm environmental, organizational, personal. Bẫy: OB class thường tập trung công việc. Khóa: personal and environmental also add." },
        { id: "d", text: "Technostress is unrelated to work stress", isCorrect: false, rationale: "Cơ chế: technostress là slide-add source liên quan công nghệ, có thể cộng vào stress. Bẫy: công nghệ có vẻ là tool trung tính. Khóa: technology can be a stressor." },
        { id: "e", text: "Stress can only come from one source at a time", isCorrect: false, rationale: "Cơ chế: câu này phủ nhận additive logic. Bẫy: phân loại theo nhóm có thể làm tưởng là chọn một. Khóa: categories can stack." },
      ],
      difficulty: "intermediate",
      conceptTested: "Stressors are additive",
      takeaway: "Đừng hỏi 'stressor nào là thủ phạm duy nhất'; stress thường là tổng tải của nhiều nguồn nhỏ cộng dồn.",
    },
    {
      id: "q18",
      stem: "The inverted-U relationship between stress and performance suggests that:",
      options: [
        { id: "a", text: "Too little and too much stress can both reduce performance, while an optimal level can support high performance", isCorrect: true, rationale: "Cơ chế: inverted-U có vùng optimum stress; quá ít gây chán, quá nhiều gây kiệt sức. Bẫy: nghĩ stress càng ít càng tốt. Khóa: optimum, not zero." },
        { id: "b", text: "Performance always improves as stress increases", isCorrect: false, rationale: "Cơ chế: sau ngưỡng tối ưu, stress làm performance giảm. Bẫy: challenge stressor có thể tốt nên dễ tổng quát hóa. Khóa: curve turns downward." },
        { id: "c", text: "Stress has no relationship with performance", isCorrect: false, rationale: "Cơ chế: slide mô tả quan hệ stress-performance rõ ràng. Bẫy: hiệu suất còn phụ thuộc nhiều yếu tố. Khóa: not deterministic, but related." },
        { id: "d", text: "Only distress improves performance", isCorrect: false, rationale: "Cơ chế: eustress mới là áp lực tích cực; distress gây hại. Bẫy: distress nghe như intense pressure. Khóa: positive pressure is eustress." },
        { id: "e", text: "Burnout is the optimum zone", isCorrect: false, rationale: "Cơ chế: burnout là hậu quả của distress cao kéo dài. Bẫy: người học có thể nhầm 'làm hết sức' với đỉnh hiệu suất. Khóa: burnout is beyond the peak." },
      ],
      difficulty: "basic",
      conceptTested: "Inverted-U stress-performance relationship",
      takeaway: "Stress không phải càng ít càng tốt: quá ít gây chán, đúng mức thành eustress giúp hiệu suất, vượt ngưỡng mới thành distress.",
    },
    {
      id: "q19",
      stem: "Headaches and high blood pressure are best classified as which consequence of stress?",
      options: [
        { id: "a", text: "Physiological symptoms", isCorrect: true, rationale: "Cơ chế: headaches, blood pressure, heart rate và metabolic changes là physiological symptoms. Bẫy: đau đầu cũng làm tâm lý khó chịu. Khóa: body-system signs = physiological." },
        { id: "b", text: "Psychological symptoms", isCorrect: false, rationale: "Cơ chế: psychological symptoms là anxiety, irritability, dissatisfaction, procrastination. Bẫy: stress symptoms thường đi kèm nhau. Khóa: headache and blood pressure are bodily." },
        { id: "c", text: "Behavioral symptoms", isCorrect: false, rationale: "Cơ chế: behavioral symptoms là absence, turnover, eating/smoking/sleep changes. Bẫy: health problems can change behavior. Khóa: symptom named is physiological." },
        { id: "d", text: "Organizational sources", isCorrect: false, rationale: "Cơ chế: sources là nguyên nhân; symptoms là hậu quả. Bẫy: organizational factors có thể gây ra triệu chứng này. Khóa: classify consequence, not source." },
        { id: "e", text: "Challenge stressors", isCorrect: false, rationale: "Cơ chế: challenge stressors là loại nguồn áp lực có thể thúc đẩy. Bẫy: challenge quá mức có thể gây symptom. Khóa: headaches are consequences, not stressor type." },
      ],
      difficulty: "basic",
      conceptTested: "Consequences of stress",
      takeaway: "Consequences of stress chia 3 nhóm: physiological là dấu hiệu cơ thể, psychological là cảm xúc/nhận thức, behavioral là hành vi quan sát được.",
    },
    {
      id: "q20",
      stem: "Which action best fits the D > CS = SR idea for managing stress?",
      options: [
        { id: "a", text: "Reduce demands, increase coping skills, and monitor stress reactions", isCorrect: true, rationale: "Cơ chế: D > CS = SR nghĩa là demands vượt coping skills thì tạo stress reaction; can thiệp vào demands, coping hoặc reaction. Bẫy: đây là công thức khái niệm, không phải phép tính. Khóa: reduce, increase, monitor." },
        { id: "b", text: "Increase demands while removing all coping resources", isCorrect: false, rationale: "Cơ chế: cách này làm D càng vượt CS nên stress reaction tăng. Bẫy: áp lực đôi khi tạo challenge, nhưng không thể bỏ resources. Khóa: challenge needs support." },
        { id: "c", text: "Treat stress as always harmful and avoid all challenge", isCorrect: false, rationale: "Cơ chế: stress có eustress/challenge side; tránh mọi challenge làm mất optimum performance. Bẫy: distress thật sự có hại. Khóa: manage stress, do not erase growth pressure." },
        { id: "d", text: "Use only coercion to make people adapt faster", isCorrect: false, rationale: "Cơ chế: coercion là tactic change rủi ro, không phải stress management framework. Bẫy: change và stress gắn nhau. Khóa: forcing can increase demands and distrust." },
        { id: "e", text: "Ignore employee involvement and communication", isCorrect: false, rationale: "Cơ chế: involvement và communication là organizational approaches giúp giảm stress/resistance. Bẫy: nhanh gọn có vẻ hiệu quả. Khóa: silence increases uncertainty." },
      ],
      difficulty: "advanced",
      conceptTested: "Managing stress and D>CS=SR",
      takeaway: "D>CS=SR chốt môn rất gọn: khi yêu cầu vượt kỹ năng đối phó, hãy giảm demands, tăng coping skills và theo dõi phản ứng của chính mình.",
    },
    {
      id: "q21",
      stem: "An idea champion works in a high-power-distance culture. Which approach is most likely to fit the cultural pattern described in the chapter?",
      options: [
        { id: "a", text: "Work closely with authority before beginning the championing effort", isCorrect: true, rationale: "Cơ chế: high power-distance làm authority approval trở thành bước quan trọng trước khi champion bắt đầu. Bẫy: champions có self-confidence cao nên dễ hình dung họ tự lao đi. Khóa: power distance → coordinate with authority first." },
        { id: "b", text: "Act alone and avoid all cross-functional support because the culture is collectivist", isCorrect: false, rationale: "Cơ chế: collectivist champions lại thích appeal cross-functional support. Bẫy: champion thường được kể như heroic individual. Khóa: collectivism kéo về coalition, không solo action." },
        { id: "c", text: "Ignore organizational rules because high uncertainty avoidance rewards ambiguity", isCorrect: false, rationale: "Cơ chế: high uncertainty avoidance khiến champion phát triển innovation TRONG rules/procedures. Bẫy: innovation thường gắn rule breaking. Khóa: uncertainty avoidance seeks structure." },
        { id: "d", text: "Wait passively for someone else to promote the idea", isCorrect: false, rationale: "Cơ chế: idea champion phải chủ động, nhiệt thành build support và vượt resistance. Bẫy: tôn trọng authority bị nhầm thành thụ động. Khóa: coordinate first vẫn đi cùng proactive championing." },
        { id: "e", text: "Remove all decision-making discretion from the champion", isCorrect: false, rationale: "Cơ chế: champions cần decision-making discretion để đưa idea qua resistance tới implementation. Bẫy: high power-distance gợi centralized control. Khóa: authority alignment không đồng nghĩa zero discretion." },
      ],
      difficulty: "advanced",
      conceptTested: "Idea champions and cultural context",
      takeaway: "Idea champion vẫn chủ động nhưng phải đọc culture: high power-distance đòi làm với authority trước; collectivism chuộng cross-functional support; uncertainty avoidance chuộng rules.",
    },
    {
      id: "q22",
      stem: "A team faces changing demands and resources, repeatedly adjusts its behavior, and remains stable until cumulative strain overwhelms its support. Which concept best explains this pattern?",
      options: [
        { id: "a", text: "Allostasis, with outcomes depending on cumulative allostatic load", isCorrect: true, rationale: "Cơ chế: allostasis tìm stability bằng cách thay đổi khi demands/resources đổi; allostatic load là tác động tích lũy so với resources. Bẫy: stability dễ gợi quay về một trạng thái cố định. Khóa: stability through change + cumulative load." },
        { id: "b", text: "Homeostasis as a return to one fixed ideal balance", isCorrect: false, rationale: "Cơ chế: mô hình mới bác ý tưởng có single ideal state cố định cho mọi bối cảnh. Bẫy: cân bằng là cách mô tả stress quen thuộc. Khóa: demands/resources và response cùng biến động." },
        { id: "c", text: "Allostatic load means each stressor automatically cancels the previous one", isCorrect: false, rationale: "Cơ chế: load là tác động tích lũy, không phải triệt tiêu. Bẫy: adaptation nghe như reset về zero. Khóa: prolonged/high load tạo triệu chứng tâm-sinh lý." },
        { id: "d", text: "Allostasis requires avoiding every challenge stressor", isCorrect: false, rationale: "Cơ chế: load vừa phải cùng confidence/support có thể giúp huy động coping. Bẫy: stress thường bị nhìn hoàn toàn tiêu cực. Khóa: mục tiêu là adaptive change, không xóa mọi demand." },
        { id: "e", text: "The pattern is only a form of deferred resistance to change", isCorrect: false, rationale: "Cơ chế: deferred resistance nói reaction xuất hiện muộn; stem nhấn stress adaptation và cumulative strain. Bẫy: cả hai đều có delay và accumulation. Khóa: resources, coping và load chỉ về allostasis." },
      ],
      difficulty: "advanced",
      conceptTested: "Allostasis and allostatic load",
      takeaway: "Allostasis không tìm một cân bằng cố định; nó tạo ổn định bằng điều chỉnh hành vi/thái độ, còn allostatic load quyết định hệ có chịu nổi hay không.",
    },
  ],
  status: "ready",
  source:
    "Robbins & Judge, Organizational Behavior — Chapter 17 'Organizational Change' (pp.315-335); Slide 'OB-Topic 12-Organizational Change and Workstress' (Dr Lan Anh, IM2017, HCMUT); bổ sung slide: Robert H. Schaffer 'All Management Is Change Management' (HBR 2017), Kurt Lewin (3-step), John Kotter (8-step), Rick Maurer '3 Levels of Resistance', Spencer Johnson 'Who Moved My Cheese?', Spectrum Assessments (8 change readiness factors), Cooper et al. (2002) & Lazarus & Folkman (1984) (stress), MetLife (holistic well-being), Simon Thornton 2023 (D>CS=SR).",
};

export const organizationalBehaviorCourseMap: CourseMapDiagram = {
  engine: "flow",
  layout: "tree",
  collapsible: true,
  caption:
    "Khung 3 cấp theo Basic OB Model (Robbins & Judge, 2019) — sơ đồ do người soạn tổng hợp, không phải trích nguyên văn sách. Bấm chip để xem bản chất topic và mở trang topic.",
  nodes: [
    {
      id: "ob-root",
      label: "Organizational Behavior",
      group: "purpose",
      detail:
        "Nghiên cứu HỆ THỐNG hành vi con người ở 3 cấp — cá nhân → nhóm → tổ chức — để cải thiện organizational effectiveness (Robbins & Judge, 2019).",
    },
    {
      id: "lv-found",
      label: "Nền tảng",
      group: "purpose",
      detail:
        "Khung của cả môn: OB là gì, Basic OB Model (Inputs → Processes → Outcomes), 4 objectives",
      parent: "ob-root",
    },
    {
      id: "lv-ind",
      label: "Individual level",
      group: "lo",
      detail:
        "Con người mang gì vào tổ chức và nó thành hành vi thế nào (T1–T6)",
      parent: "ob-root",
    },
    {
      id: "lv-grp",
      label: "Group level",
      group: "concept",
      detail:
        "Khi cá nhân làm việc cùng nhau: nhóm, xung đột, team, dẫn dắt (T7–T10)",
      parent: "ob-root",
    },
    {
      id: "lv-org",
      label: "Organizational level",
      group: "term",
      detail: "Tầng tổ chức: văn hóa và thay đổi (T11–T12)",
      parent: "ob-root",
    },
    {
      id: "t00",
      label: "T0 · Introduction to OB",
      group: "purpose",
      detail: topic00.bigIdea,
      parent: "lv-found",
      href: "/organizational-behavior/topic-00",
    },
    {
      id: "t01",
      label: "T1 · Personality & Learning Styles",
      group: "lo",
      detail: topic01.bigIdea,
      parent: "lv-ind",
      href: "/organizational-behavior/topic-01",
    },
    {
      id: "t02",
      label: "T2 · Perception & Common Biases",
      group: "lo",
      detail: topic02.bigIdea,
      parent: "lv-ind",
      href: "/organizational-behavior/topic-02",
    },
    {
      id: "t03",
      label: "T3 · Personal Values & Valuing Diversity",
      group: "lo",
      detail: topic03.bigIdea,
      parent: "lv-ind",
      href: "/organizational-behavior/topic-03",
    },
    {
      id: "t04",
      label: "T4 · Emotions & Moods",
      group: "lo",
      detail: topic04.bigIdea,
      parent: "lv-ind",
      href: "/organizational-behavior/topic-04",
    },
    {
      id: "t05",
      label: "T5 · Attitudes & Issues of Dissonance",
      group: "lo",
      detail: topic05.bigIdea,
      parent: "lv-ind",
      href: "/organizational-behavior/topic-05",
    },
    {
      id: "t06",
      label: "T6 · Motivation",
      group: "lo",
      detail: topic06.bigIdea,
      parent: "lv-ind",
      href: "/organizational-behavior/topic-06",
    },
    {
      id: "t07",
      label: "T7 · Group Properties",
      group: "concept",
      detail: topic07.bigIdea,
      parent: "lv-grp",
      href: "/organizational-behavior/topic-07",
    },
    {
      id: "t08",
      label: "T8 · Conflict and Collaboration",
      group: "concept",
      detail: topic08.bigIdea,
      parent: "lv-grp",
      href: "/organizational-behavior/topic-08",
    },
    {
      id: "t09",
      label: "T9 · Team Lifecycle and Team Effectiveness",
      group: "concept",
      detail: topic09.bigIdea,
      parent: "lv-grp",
      href: "/organizational-behavior/topic-09",
    },
    {
      id: "t10",
      label: "T10 · Leadership and Followership",
      group: "concept",
      detail: topic10.bigIdea,
      parent: "lv-grp",
      href: "/organizational-behavior/topic-10",
    },
    {
      id: "t11",
      label: "T11 · Organizational Culture",
      group: "term",
      detail: topic11.bigIdea,
      parent: "lv-org",
      href: "/organizational-behavior/topic-11",
    },
    {
      id: "t12",
      label: "T12 · Organizational Change and Work Stress",
      group: "term",
      detail: topic12.bigIdea,
      parent: "lv-org",
      href: "/organizational-behavior/topic-12",
    },
  ],
};

export const organizationalBehaviorCourseThreads: CourseThread[] = [
  {
    title: "Từ nhận thức đến hành động",
    description:
      "Góc nhìn liên hệ: vì sao học T1→T6 theo thứ tự đó — mỗi topic là một mắt xích từ 'con người mang gì vào' đến hành vi.",
    diagram: {
      engine: "flow",
      layout: "horizontal",
      caption:
        "Góc nhìn liên hệ (lens) tổng hợp từ nội dung các topic — không phải trích nguyên văn sách. Đọc như chuỗi từ input cá nhân qua perception, attitude, motivation đến behavior/performance.",
      nodes: [
        {
          id: "th1-input",
          label: "Cá nhân mang gì vào (T1·T3·T4)",
          detail:
            "Personality (T1), values (T3), emotions & moods (T4) là input cá nhân — chúng định hình cách ta nhìn và phản ứng.",
        },
        {
          id: "th1-perc",
          label: "Perception (T2)",
          detail:
            "Ta hành xử theo thực tại-được-diễn-giải, không phải thực tại — input cá nhân đi qua bộ lọc perception.",
        },
        {
          id: "th1-att",
          label: "Attitudes (T5)",
          detail:
            "Perception nuôi cognitive component của attitude; attitude là đánh giá +/− về đối tượng.",
        },
        {
          id: "th1-mot",
          label: "Motivation (T6)",
          detail:
            "Attitude và nhu cầu chuyển thành intensity–direction–persistence của nỗ lực.",
        },
        {
          id: "th1-beh",
          label: "Behavior & Performance",
          detail:
            "Đầu ra ở cấp cá nhân trong Basic OB Model: task performance, OCB, withdrawal.",
        },
      ],
      edges: [
        { from: "th1-input", to: "th1-perc", label: "định hình" },
        { from: "th1-perc", to: "th1-att", label: "nuôi" },
        { from: "th1-att", to: "th1-mot", label: "chuyển thành nỗ lực" },
        { from: "th1-mot", to: "th1-beh", label: "thúc đẩy" },
      ],
    },
  },
  {
    title: "Từ cá nhân đến đội nhóm",
    description:
      "Góc nhìn liên hệ: khác biệt cá nhân không mất đi khi vào nhóm — chúng trở thành động lực học của nhóm.",
    diagram: {
      engine: "flow",
      layout: "horizontal",
      caption:
        "Góc nhìn liên hệ (lens) tổng hợp từ nội dung các topic — không phải trích nguyên văn sách. Đọc như đường đi từ deep-level diversity đến group properties, conflict, rồi team effectiveness.",
      nodes: [
        {
          id: "th2-diff",
          label: "Khác biệt cá nhân (T1·T3)",
          detail:
            "Personality + values = deep-level diversity mà mỗi người mang vào nhóm.",
        },
        {
          id: "th2-grp",
          label: "Group Properties (T7)",
          detail:
            "Vào nhóm, khác biệt bị ràng bởi roles, norms, status, size, cohesiveness.",
        },
        {
          id: "th2-conf",
          label: "Conflict & Collaboration (T8)",
          detail:
            "Khác biệt + tương tác sinh perceived incompatibility; xử lý xung đột quyết định nhóm vỡ hay lớn.",
        },
        {
          id: "th2-team",
          label: "Team Effectiveness (T9)",
          detail:
            "Nhóm xử lý tốt khác biệt & xung đột mới thành team hiệu quả qua lifecycle.",
        },
      ],
      edges: [
        { from: "th2-diff", to: "th2-grp", label: "gia nhập" },
        { from: "th2-grp", to: "th2-conf", label: "va chạm" },
        { from: "th2-conf", to: "th2-team", label: "xử lý tốt →" },
      ],
    },
  },
  {
    title: "Dẫn dắt",
    description:
      "Góc nhìn liên hệ: leadership (T10) không đứng riêng — nó là đòn bẩy tác động vào ba topic đã học.",
    diagram: {
      engine: "flow",
      layout: "tree",
      caption:
        "Góc nhìn liên hệ (lens) tổng hợp từ nội dung các topic — không phải trích nguyên văn sách. Đọc leadership như đòn bẩy tác động vào motivation, conflict và team.",
      nodes: [
        {
          id: "th3-lead",
          label: "Leadership & Followership (T10)",
          detail:
            "Ảnh hưởng người khác hướng về mục tiêu; hiệu quả tùy contingency + followership.",
        },
        {
          id: "th3-mot",
          label: "Motivation (T6)",
          parent: "th3-lead",
          detail:
            "Leader tác động intensity–direction–persistence của nỗ lực người theo.",
        },
        {
          id: "th3-conf",
          label: "Conflict (T8)",
          parent: "th3-lead",
          detail:
            "Leader điều phối xung đột: giữ functional, chặn dysfunctional.",
        },
        {
          id: "th3-team",
          label: "Team (T9)",
          parent: "th3-lead",
          detail:
            "Leader dựng điều kiện team hiệu quả: context, composition, process.",
        },
      ],
      edges: [
        { from: "th3-lead", to: "th3-mot", label: "truyền động lực" },
        { from: "th3-lead", to: "th3-conf", label: "điều phối" },
        { from: "th3-lead", to: "th3-team", label: "tạo điều kiện" },
      ],
    },
  },
  {
    title: "Tổ chức vận động",
    description:
      "Góc nhìn liên hệ: vòng khép của môn — tầng tổ chức dội ngược về cảm xúc & thái độ của từng cá nhân.",
    diagram: {
      engine: "flow",
      layout: "horizontal",
      caption:
        "Góc nhìn liên hệ (lens) tổng hợp từ nội dung các topic — không phải trích nguyên văn sách. Đọc như vòng khép từ culture qua change/stress rồi quay về emotions & attitudes.",
      nodes: [
        {
          id: "th4-cult",
          label: "Culture (T11)",
          detail:
            "Hệ giá trị chung định hình hành vi — vừa là chất keo vừa là quán tính của tổ chức.",
        },
        {
          id: "th4-chg",
          label: "Change (T12)",
          detail:
            "Thay đổi tổ chức phải vượt qua quán tính văn hóa và resistance.",
        },
        {
          id: "th4-str",
          label: "Work Stress (T12)",
          detail: "Thay đổi là nguồn stressor lớn với cá nhân.",
        },
        {
          id: "th4-ind",
          label: "Emotions & Attitudes (T4·T5)",
          detail:
            "Stress dội về affect và job attitudes — vòng quay lại cấp cá nhân.",
        },
      ],
      edges: [
        { from: "th4-cult", to: "th4-chg", label: "quán tính" },
        { from: "th4-chg", to: "th4-str", label: "gây" },
        { from: "th4-str", to: "th4-ind", label: "dội về cá nhân" },
      ],
    },
  },
];

export const organizationalBehaviorMiniCases: MiniCase[] = [
  {
    id: "case-01",
    title: "Nhân viên mới của phòng Kế hoạch",
    thread: "Từ nhận thức đến hành động",
    topics: [
      { slug: "topic-01", order: 1 },
      { slug: "topic-02", order: 2 },
      { slug: "topic-05", order: 5 },
      { slug: "topic-06", order: 6 },
    ],
    scenario:
      "Hân vào phòng Kế hoạch của một công ty sản xuất được ba tháng. Ngày đầu đi làm, xe hỏng giữa đường khiến cô đến trễ 40 phút — trưởng phòng Tùng nhớ mãi chuyện đó. Hân ít nói trong các buổi họp đông người nhưng phần việc nào nhận cô cũng nộp đúng hạn, số liệu kỹ và sạch. Tùng thì quen đánh giá nhân viên qua sự sôi nổi khi họp; anh kết luận Hân \"thiếu nhiệt huyết, không chủ động\", và từ đó chỉ giao cho cô việc nhập liệu đơn giản, còn các phân tích quan trọng giao cho người khác dù Hân từng đề nghị được thử. Gần đây Hân bắt đầu thấy việc mình làm \"chẳng để làm gì\", thôi không đề nghị nữa, và âm thầm cập nhật CV.",
    sourceNote:
      "Tình huống mô phỏng — khái niệm phân tích lấy từ nội dung T1/T2/T5/T6 đã đối chiếu sách.",
    questions: [
      {
        id: "q1",
        prompt:
          "Đánh giá \"thiếu nhiệt huyết, không chủ động\" của Tùng về Hân đang mắc những lỗi perception/attribution nào (T2)?",
        analysis:
          "Ấn tượng đầu (đi trễ ngày đầu) chi phối đánh giá về sau — đúng bẫy employment interview/first impression của T2. Tùng quy hành vi đi trễ cho nguyên nhân internal (con người Hân) trong khi nguyên nhân là external (xe hỏng) — fundamental attribution error. Việc lấy \"sôi nổi khi họp\" làm thước đo duy nhất là selective perception + halo ngược: một đặc điểm (ít nói) phủ bóng lên toàn bộ năng lực; bằng chứng ngược (nộp đúng hạn, số liệu kỹ) bị bỏ qua.",
        trap:
          "Chỉ gọi tên 1 lỗi rồi dừng — đề tự luận ăn điểm ở việc chỉ ra NHIỀU lỗi cùng vận hành và móc từng lỗi vào chi tiết cụ thể của tình huống.",
      },
      {
        id: "q2",
        prompt:
          "Phân tích chuỗi từ perception của Tùng đến attitude và motivation của Hân (T5, T6): vì sao Hân từ \"đề nghị được thử\" chuyển sang \"âm thầm cập nhật CV\"?",
        analysis:
          "Perception của Tùng thành quyết định giao việc → với Hân đó là chuỗi sự kiện tiêu cực lặp lại. Attitude của Hân đủ 3 thành phần: cognitive (\"việc mình làm chẳng để làm gì\"), affective (chán nản), behavioral (ngừng đề nghị, cập nhật CV). Theo expectancy theory (T6), mắt xích effort→performance→reward của Hân đứt: cô tin rằng cố gắng thêm cũng không được giao việc quan trọng, nên intensity giảm là hệ quả hợp lý, không phải \"lười\". Hành vi hiện tại của Hân nằm ở ô Neglect/chuẩn bị Exit trong khung EVLN (T5) — im lặng, rút lui thay vì lên tiếng.",
        trap:
          "Đổ cho \"Hân hết động lực\" như một trạng thái tự nhiên — bỏ mất điểm mấu chốt: motivation là process bị bóp từ phía thiết kế công việc và đánh giá của sếp, không phải trait của Hân.",
      },
      {
        id: "q3",
        prompt:
          "Personality của Hân có \"sai\" so với công việc không? Dùng T1 để đề xuất cách Tùng nên nhìn và giao việc lại.",
        analysis:
          "Không có personality \"sai\" — chỉ có fit. Hân biểu hiện introversion + conscientiousness cao (nộp đúng hạn, số liệu kỹ) — đúng profile dự báo hiệu suất tốt cho việc phân tích. Personality chỉ bộc lộ tùy tình huống: họp đông người là tình huống bất lợi cho Hân, nhưng không đại diện cho năng lực phân tích. Tùng nên (1) tách kênh đánh giá khỏi biểu hiện khi họp, (2) giao thử một phân tích quan trọng có deadline và tiêu chí rõ, (3) tạo kênh đóng góp phù hợp (viết trước, họp nhóm nhỏ) — person-job fit là điều chỉnh việc và bối cảnh, không phải đòi Hân đổi tính.",
        trap:
          "Kết luận \"Hân hướng nội nên không hợp làm việc nhóm\" — lặp lại đúng lỗi dán nhãn mà T1 cảnh báo.",
      },
    ],
  },
  {
    id: "case-02",
    title: "Nhóm đồ án bốn người",
    thread: "Từ cá nhân đến đội nhóm",
    topics: [
      { slug: "topic-07", order: 7 },
      { slug: "topic-08", order: 8 },
      { slug: "topic-09", order: 9 },
    ],
    scenario:
      "Nhóm đồ án môn Quản lý sản xuất có bốn thành viên: Vy (nhóm trưởng, học giỏi, quen làm hết phần khó), Khang (năng nổ phát biểu nhưng hay nộp trễ), Thảo (cẩn thận, ít nói), và Duy (mới chuyển lớp, chưa quen ai). Ba tuần đầu mọi thứ \"êm\": họp nhanh, không ai phản đối ai, Vy chia việc và tự gánh phần tổng hợp. Đến tuần thứ tư, Vy phát hiện phần của Khang làm sơ sài; cô sửa lại toàn bộ mà không nói với Khang. Khang biết được, cho rằng Vy \"chơi trội\", và bắt đầu chỉ trích các quyết định của Vy trong nhóm chat — kể cả những quyết định hợp lý. Thảo im lặng rút khỏi các buổi họp; Duy nói với bạn khác: \"nhóm này 4 người nhưng thật ra chỉ có 2 người làm.\" Buổi họp gần nhất kết thúc bằng tranh cãi tay đôi Vy–Khang, ba người còn lại không ai lên tiếng.",
    sourceNote:
      "Tình huống mô phỏng — khái niệm phân tích lấy từ nội dung T7/T8/T9 đã đối chiếu sách.",
    questions: [
      {
        id: "q1",
        prompt:
          "Ba tuần đầu nhóm \"êm\" có phải dấu hiệu nhóm đang vận hành tốt không? Dùng các khái niệm của T7 và T8 để đánh giá.",
        analysis:
          "\"Êm\" ≠ tốt: nhóm chưa từng có functional conflict (T8 — nhóm quá êm có thể đang né tranh luận nhiệm vụ); câu nói của Duy là dấu hiệu social loafing (T7 — nhóm 4 người nhưng đóng góp không đều, không có accountability cá nhân); Vy \"quen làm hết phần khó\" là role tự gán chưa được nhóm thống nhất → xung đột vai trò ngầm.",
        trap:
          "Trả lời \"nhóm tốt vì không cãi nhau\" — nhầm cohesiveness bề mặt với hiệu quả.",
      },
      {
        id: "q2",
        prompt:
          "Xung đột Vy–Khang thuộc loại nào, và cách mỗi người đang xử lý rơi vào intention nào trong 5 kiểu? Cách nào phù hợp hơn cho tình huống này?",
        analysis:
          "Khởi đầu là task conflict (chất lượng phần việc của Khang) nhưng đã chuyển hóa thành relationship conflict (chỉ trích cá nhân, \"chơi trội\") — điểm mấu chốt của T8: task conflict xử lý kém sẽ lây sang quan hệ. Vy đang avoiding (sửa bài không nói), Khang đang competing (công kích); tình huống cần collaborating — nói thẳng vấn đề chất lượng, tách người khỏi việc.",
        trap:
          "Chỉ phân loại xung đột mà không nhận ra sự chuyển hóa task → relationship.",
      },
      {
        id: "q3",
        prompt:
          "Nếu bạn là Vy, dùng khung của T9 (Team Effectiveness), bạn sẽ sửa nhóm này từ đâu?",
        analysis:
          "Chẩn đoán theo đúng thứ tự model T9: Context (chưa có chuẩn đánh giá đóng góp cá nhân → sửa trước), Composition (vai trò chưa khớp năng lực từng người), Process (thiếu psychological safety — Thảo im lặng, Duy chỉ dám nói sau lưng; common purpose chưa được thống nhất lại).",
        trap:
          "Nhảy ngay vào \"họp giảng hòa\" (Process) trong khi gốc nằm ở Context.",
      },
    ],
  },
  {
    id: "case-03",
    title: "Kỹ sư giỏi nhất lên làm trưởng phòng",
    thread: "Dẫn dắt",
    topics: [
      { slug: "topic-10", order: 10 },
      { slug: "topic-06", order: 6 },
      { slug: "topic-08", order: 8 },
      { slug: "topic-09", order: 9 },
    ],
    scenario:
      "Minh là kỹ sư giỏi nhất phòng R&D của một công ty cơ khí và vừa được bổ nhiệm trưởng phòng. Tin rằng \"mình giỏi nhất nên mình quyết là đúng\", Minh duyệt từng bản vẽ, sửa từng chi tiết, yêu cầu mọi thứ làm theo cách của mình. Khi hai kỹ sư senior tranh luận gay gắt về hai hướng thiết kế cho sản phẩm mới, Minh cắt ngang: \"Không cãi nữa, làm theo phương án A, tôi chịu trách nhiệm.\" Vài tháng sau, phòng yên ắng hẳn: không ai tranh luận, các bản thiết kế nộp lên đều \"an toàn\" và na ná nhau, hai kỹ sư trẻ được đánh giá tiềm năng nhất lần lượt xin chuyển bộ phận, một người nói thẳng khi phỏng vấn nghỉ: \"Ở đây làm đúng ý sếp quan trọng hơn làm đúng.\"",
    sourceNote:
      "Tình huống mô phỏng — khái niệm phân tích lấy từ nội dung T10/T6/T8/T9 đã đối chiếu sách.",
    questions: [
      {
        id: "q1",
        prompt:
          "Minh đang dựa vào những nguồn quyền lực nào, và vì sao \"giỏi nhất phòng\" không tự động biến Minh thành leader (T10)?",
        analysis:
          "Minh dựa vào formal authority của chức vụ và expertise cá nhân — nhưng leadership = năng lực ẢNH HƯỞNG hướng tới tầm nhìn, không phải chức vụ. Chuyên môn giỏi tạo uy tín ban đầu, song cách dùng nó (duyệt từng chi tiết, áp cách của mình) triệt tiêu influence thật: người giỏi rời đi, người ở lại tuân thủ chứ không tin theo. Đây đúng bài học mở đầu T10: vị trí cho quyền ra lệnh, không cho được sự đi theo.",
        trap:
          "Đồng nhất \"leader giỏi chuyên môn\" với \"leader hiệu quả\" — trait/năng lực chỉ là một phần, hiệu quả nằm ở hành vi và tình huống.",
      },
      {
        id: "q2",
        prompt:
          "Soi phong cách của Minh bằng behavioral approach (initiating structure / consideration) và góc nhìn contingency (T10): lệch ở đâu, nên điều chỉnh thế nào?",
        analysis:
          "Minh cực cao về initiating structure (kiểm soát quy trình, chuẩn hóa theo ý mình) và gần như bằng không về consideration (không lắng nghe, không tin cấp dưới) — mất cân bằng mà behavioral approach cảnh báo. Theo contingency, phong cách phải tùy tình huống: R&D gồm kỹ sư senior giàu kinh nghiệm là bối cảnh follower trưởng thành cao — càng cần trao quyền, giảm chỉ đạo chi tiết; micromanage chỉ phù hợp (nếu có) với nhân sự mới việc. Minh đang dùng một style cho mọi người, mọi việc.",
        trap:
          "Kết luận \"Minh nên bớt khó tính\" chung chung — không dùng đúng cặp trục initiating structure/consideration và không gắn với đặc điểm tình huống R&D.",
      },
      {
        id: "q3",
        prompt:
          "Lệnh \"không cãi nữa\" và sự yên ắng của phòng nói gì theo T8/T9? Minh cần làm gì để truyền lại động lực (T6)?",
        analysis:
          "Tranh luận giữa hai senior về hướng thiết kế là functional (task) conflict — thứ nuôi sáng tạo của R&D; dập nó khiến phòng rơi vào trạng thái thiếu xung đột chức năng: bản vẽ \"an toàn, na ná nhau\". Câu nói lúc nghỉ việc (\"làm đúng ý sếp quan trọng hơn làm đúng\") là chỉ dấu psychological safety đã mất (T9). Về T6: expectancy đứt ở chỗ nỗ lực sáng tạo không dẫn tới ghi nhận (mọi thứ bị sửa theo ý sếp); Minh cần chuyển sang đặt goal rõ + feedback thay vì kiểm soát từng bước, khôi phục tranh luận kỹ thuật có cấu trúc (ví dụ chỉ định người phản biện), và gắn ghi nhận với chất lượng giải pháp, không phải mức độ giống ý mình.",
        trap:
          "Xem \"phòng yên ắng, không cãi nhau\" là thành tích quản lý — chính là dysfunctional ở mức xung đột QUÁ THẤP trên đường cong U ngược.",
      },
    ],
  },
  {
    id: "case-04",
    title: "Công ty gia đình chuyển mình",
    thread: "Tổ chức vận động",
    topics: [
      { slug: "topic-11", order: 11 },
      { slug: "topic-12", order: 12 },
      { slug: "topic-04", order: 4 },
      { slug: "topic-05", order: 5 },
    ],
    scenario:
      "Song Long là công ty logistics gia đình 25 năm tuổi. Văn hóa ở đây in đậm dấu ấn ông Long — nhà sáng lập: trung thành được trọng hơn hiệu suất, mọi quyết định lớn nhỏ đều \"hỏi ý chú Long\", nhân viên phần lớn do người quen giới thiệu và được dạy \"cách của Song Long\" từ ngày đầu. Khi con gái ông — Trang, du học về — lên CEO, cô triển khai hệ thống ERP, chuẩn hóa quy trình và tuyển giám đốc vận hành từ bên ngoài. Các trưởng bộ phận lâu năm phản ứng: người trì hoãn nhập liệu, người nói riêng với ông Long rằng \"con bé làm mất chất Song Long\". Trang đáp lại bằng cách siết deadline chuyển đổi. Ba tháng sau, đơn nghỉ ốm tăng vọt, hai quản lý kho lâu năm nộp đơn nghỉ, nhân viên trẻ thì than \"mắc kẹt giữa hai phe\".",
    sourceNote:
      "Tình huống mô phỏng; motif \"văn hóa mang dấu ấn nhà sáng lập\" lấy từ ví dụ thật trong sách (Ch.16: văn hóa hình thành từ founder qua tuyển người cùng kiểu, socialization và hành vi làm gương — như Hyundai/Chung Ju-Yung, Microsoft/Bill Gates).",
    questions: [
      {
        id: "q1",
        prompt:
          "Văn hóa Song Long đã hình thành và được \"giữ sống\" bằng những cơ chế nào (T11)? Vì sao chính nó giờ thành lực cản?",
        analysis:
          "Đúng ba cơ chế sách mô tả: văn hóa khởi từ founder (ông Long tuyển người nghĩ giống mình — người quen giới thiệu; socialization — dạy \"cách của Song Long\" từ ngày đầu; hành vi làm gương — mọi thứ \"hỏi ý chú Long\"). Nó được giữ sống qua selection, top management và socialization. Văn hóa từng là tài sản (gắn kết, bản sắc) nay thành liability: giá trị \"trung thành > hiệu suất\" và thói quen xin ý kiến một người khiến tổ chức không hấp thụ nổi quy trình chuẩn hóa — đúng ca \"văn hóa thành rào cản thay đổi\" của T11.",
        trap:
          "Mô tả văn hóa như \"không khí chung chung\" — đề ăn điểm khi chỉ ra CƠ CHẾ cụ thể (selection/socialization/hành vi lãnh đạo) đang tái sản xuất văn hóa mỗi ngày.",
      },
      {
        id: "q2",
        prompt:
          "Phân tích các nguồn kháng cự thay đổi ở Song Long và đề xuất cách vượt kháng cự có khung (T12: nguồn kháng cự, tactics, Lewin/Kotter).",
        analysis:
          "Nguồn kháng cự đủ cả cá nhân lẫn tổ chức: habit (quy trình cũ 25 năm), sợ bất định (ERP xa lạ), đe dọa lợi ích và quan hệ quyền lực (trưởng bộ phận mất vị thế \"cánh tay chú Long\"), và kháng cự nhóm có tổ chức (nói riêng với founder). Trang mắc lỗi kinh điển: chỉ TĂNG lực đẩy (siết deadline) mà không GIẢM lực cản. Theo Lewin, cô chưa unfreeze — chưa tạo cảm nhận cần thay đổi — đã ép move. Tactics phù hợp: communication & education (vì sao ERP sống còn), participation (kéo trưởng bộ phận vào thiết kế quy trình), và quan trọng nhất — liên minh với ông Long làm người bảo trợ thay đổi (Kotter: dựng guiding coalition trước, tạo short-term wins thay vì áp đặt toàn diện).",
        trap:
          "Liệt kê đủ 8 tactics như trả bài — đề tình huống đòi CHỌN tactics khớp với từng nguồn kháng cự cụ thể trong case.",
      },
      {
        id: "q3",
        prompt:
          "Giải thích làn sóng nghỉ ốm/nghỉ việc bằng chuỗi change → stress → cá nhân (T12, T4, T5) và đề xuất hai hướng quản stress cho Song Long.",
        analysis:
          "Thay đổi tổ chức là stressor lớn: mơ hồ vai trò (\"mắc kẹt giữa hai phe\"), tăng demand (deadline chuyển đổi) trong khi resources (đào tạo, hỗ trợ) không tăng — stress kiểu hindrance chiếm ưu thế. Stress dội về cá nhân đúng chuỗi Thread 4: affect tiêu cực (T4) → job attitudes xấu đi (T5) → hành vi withdrawal: nghỉ ốm (triệu chứng thể chất + absenteeism) và Exit (hai quản lý kho) theo khung EVLN. Hai hướng quản: organizational approach — truyền thông rõ lộ trình, đào tạo ERP, thiết kế lại vai trò để giảm mơ hồ, tăng participation; individual approach — hỗ trợ quản lý thời gian, mạng hỗ trợ xã hội trong giai đoạn chuyển đổi.",
        trap:
          "Xử lý nghỉ việc như vấn đề nhân sự rời rạc (\"tuyển bù\") — bỏ qua việc nó là TRIỆU CHỨNG của chuỗi change→stress chưa được quản.",
      },
    ],
  },
];

export const organizationalBehaviorChapters: Chapter[] = [
  topic00,
  topic01,
  topic02,
  topic03,
  topic04,
  topic05,
  topic06,
  topic07,
  topic08,
  topic09,
  topic10,
  topic11,
  topic12,
];
