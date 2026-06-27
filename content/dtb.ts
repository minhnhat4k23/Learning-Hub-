import type { Block, CalloutKind, Chapter, FlowEdge, FlowNode } from "./types";

type FlowLayout = "tree" | "horizontal" | "radial";
type FlowGroup = NonNullable<FlowNode["group"]>;
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

const topic01: Chapter = {
  slug: "topic-01",
  order: 1,
  title: "Topic 01 — Introduction to CBIS",
  bigIdea:
    'IT/IS không phải mục tiêu — nó tồn tại để giúp doanh nghiệp đạt goals (profit, sustainable, competitive advantage). Một Information System là sự gắn kết của People + Organizations + Technology để biến data thành information phục vụ ra quyết định; IT chỉ là công cụ, còn giá trị thật nằm ở con người (YOU) và cách quản trị: "you can buy IT, but you cannot buy an IS".',
  learningObjectives: [
    "Giải thích vì sao doanh nghiệp dùng IT/IS và vai trò của nó với goals/strategy.",
    "Định nghĩa Information System và mô tả 5 components: Hardware, Software, Data, Procedures, People.",
    "Dùng 5-component framework như công cụ để hiểu/đánh giá một Information System mới.",
    "Phân biệt Software vs Procedures và vì sao People (YOU) là thành phần quan trọng nhất.",
    "Phân biệt data vs information; nêu characteristics of good information.",
    "Phân biệt Information Technology (IT) vs Information System (IS) và chiều nhân quả IT drives IS.",
    "Diễn giải Moore's Law và hệ quả kinh tế cho doanh nghiệp; quan điểm Carr (2005) về proprietary vs infrastructural technology.",
    "Nhận diện các loại computers/mobile devices và 5 nhóm technology users.",
  ],
  knowledgeMap: {
    engine: "flow",
    title: "Knowledge map — Introduction to CBIS",
    layout: "tree",
    collapsible: true,
    caption:
      "Mặc định hiện 8 nhánh cấp 1; bấm từng chip để mở các ý cấp 2.",
    nodes: [
      {
        id: "cbis",
        label: "Introduction to CBIS",
        group: "concept",
        detail:
          "CBIS nhìn Information System như People + Organizations + Technology để biến data thành information; IT chỉ là công cụ.",
        sectionId: "s5",
      },
      {
        id: "why",
        label: "Vì sao & vai trò IT/IS",
        group: "purpose",
        parent: "cbis",
        detail:
          "IT/IS giúp doanh nghiệp đạt goals, expand and compete, rồi hỗ trợ efficiency, decisions và collaboration.",
        sectionId: "s1",
      },
      {
        id: "why-vital",
        label: "Vital component",
        group: "purpose",
        parent: "why",
        detail:
          "IT/IS là vital component của doanh nghiệp thành công, không phải phụ kiện trang trí.",
        sectionId: "s1",
      },
      {
        id: "why-goals",
        label: "Achieve goals",
        group: "purpose",
        parent: "why",
        detail:
          "Doanh nghiệp dùng IT/IS để expand, compete và đạt goals như profit, sustainability, competitive advantage.",
        sectionId: "s1",
      },
      {
        id: "why-role",
        label: "Efficiency, decisions, collaboration",
        group: "purpose",
        parent: "why",
        detail:
          "IS/IT cải thiện efficiency/effectiveness, hỗ trợ managerial decision making và workgroup collaboration.",
        sectionId: "s4",
      },
      {
        id: "is",
        label: "IS là gì",
        group: "concept",
        parent: "cbis",
        detail:
          "Information System là application of IT to support people working in organizations.",
        sectionId: "s5",
      },
      {
        id: "is-tech",
        label: "Technology",
        group: "term",
        parent: "is",
        detail:
          "Technology là một mảnh của IS và không thể tách khỏi People và Organizations.",
        sectionId: "s5",
      },
      {
        id: "is-people",
        label: "People",
        group: "term",
        parent: "is",
        detail:
          "People làm việc trong tổ chức và biến thông tin của IS thành giá trị.",
        sectionId: "s5",
      },
      {
        id: "is-org",
        label: "Organizations",
        group: "term",
        parent: "is",
        detail:
          "Organizations là bối cảnh nơi IS hỗ trợ con người làm việc.",
        sectionId: "s5",
      },
      {
        id: "comp",
        label: "5 Components",
        group: "concept",
        parent: "cbis",
        detail:
          "IS được cụ thể hóa thành Hardware, Software, Data, Procedures và People.",
        sectionId: "s6",
      },
      {
        id: "comp-hw",
        label: "Hardware",
        group: "term",
        parent: "comp",
        detail:
          "Hardware là thiết bị vật lý trong hệ thống thông tin.",
        sectionId: "s6",
      },
      {
        id: "comp-sw",
        label: "Software",
        group: "term",
        parent: "comp",
        detail:
          "Software là instructions cho hardware, tức chỉ dẫn dành cho máy.",
        sectionId: "s6",
      },
      {
        id: "comp-data",
        label: "Data",
        group: "term",
        parent: "comp",
        detail:
          "Data là nguyên liệu thô để hệ thống xử lý thành information.",
        sectionId: "s6",
      },
      {
        id: "comp-proc",
        label: "Procedures",
        group: "term",
        parent: "comp",
        detail:
          "Procedures là instructions cho con người trong hệ thống.",
        sectionId: "s6",
      },
      {
        id: "comp-people",
        label: "People",
        group: "term",
        parent: "comp",
        detail:
          "People là thành phần quan trọng nhất vì con người suy nghĩ, đánh giá và hành động.",
        sectionId: "s6",
      },
      {
        id: "comp-newis",
        label: "Hiểu IS mới",
        group: "concept",
        parent: "comp",
        detail:
          "Dùng 5-component framework như checklist (hardware/software/data/procedures/people) để hiểu một IS mới.",
        sectionId: "s7b",
      },
      {
        id: "info",
        label: "Data → Information",
        group: "concept",
        parent: "cbis",
        detail:
          "Information là data được xử lý hoặc đặt trong ngữ cảnh có nghĩa.",
        sectionId: "s8",
      },
      {
        id: "info-ladder",
        label: "Information ladder",
        group: "concept",
        parent: "info",
        detail:
          "Data có thể trở thành information, intelligence, knowledge rồi wisdom khi ngữ cảnh và hiểu biết tăng lên.",
        sectionId: "s8",
      },
      {
        id: "info-relative",
        label: "Relative to user",
        group: "concept",
        parent: "info",
        detail:
          "One user's information is another user's data: cùng một thứ có thể là đầu ra của người này và đầu vào của người khác.",
        sectionId: "s8",
      },
      {
        id: "info-good",
        label: "Good information",
        group: "concept",
        parent: "info",
        detail:
          "Good information phải accurate, timely, relevant, just sufficient và worth its cost.",
        sectionId: "s9",
      },
      {
        id: "itis",
        label: "IT vs IS",
        group: "concept",
        parent: "cbis",
        detail:
          "IT là tools còn IS là hệ thống xã hội-kỹ thuật dùng tools đó để tạo giá trị.",
        sectionId: "s10",
      },
      {
        id: "itis-buy",
        label: "Buy IT, not IS",
        group: "concept",
        parent: "itis",
        detail:
          "Bạn có thể mua IT, nhưng không thể mua trọn một IS vì IS phụ thuộc People, Procedures và Organization.",
        sectionId: "s10",
      },
      {
        id: "itis-drive",
        label: "IT drives IS",
        group: "concept",
        parent: "itis",
        detail:
          "Chiều nhân quả trong slide: Information Technology drives development of Information Systems.",
        sectionId: "s10",
      },
      {
        id: "moore",
        label: "Moore's Law",
        group: "concept",
        parent: "cbis",
        detail:
          "Số transistor trên chip tăng theo thời gian, làm cost/performance của data processing giảm mạnh.",
        sectionId: "s11",
      },
      {
        id: "moore-era",
        label: "5 eras",
        group: "concept",
        parent: "moore",
        detail:
          "Các era đi từ mainframe, PC, client/server, enterprise đến cloud/mobile computing.",
        sectionId: "s11",
      },
      {
        id: "moore-cost",
        label: "Cost approaches zero",
        group: "concept",
        parent: "moore",
        detail:
          "Điểm cần rút ra cho business: cost of data processing is approaching zero.",
        sectionId: "s11",
      },
      {
        id: "carr",
        label: "Carr's view",
        group: "concept",
        parent: "cbis",
        detail:
          "Carr phân biệt proprietary technology và infrastructural technology để đánh giá lợi thế cạnh tranh.",
        sectionId: "s13",
      },
      {
        id: "carr-prop",
        label: "Proprietary technology",
        group: "term",
        parent: "carr",
        detail:
          "Proprietary technology có thể tạo advantage vì công ty sở hữu hoặc kiểm soát riêng.",
        sectionId: "s13",
      },
      {
        id: "carr-infra",
        label: "Infrastructural technology",
        group: "term",
        parent: "carr",
        detail:
          "Infrastructural technology trở thành hạ tầng chung nên khó tạo advantage bền vững nếu ai cũng mua được.",
        sectionId: "s13",
      },
      {
        id: "dev",
        label: "Devices & users",
        group: "concept",
        parent: "cbis",
        detail:
          "CBIS còn cần nhận diện computers, mobile devices, cloud computing và nhóm technology users.",
        sectionId: "s14",
      },
      {
        id: "dev-flow",
        label: "Input → Processing → Output",
        group: "concept",
        parent: "dev",
        detail:
          "Máy tính nhận input data, xử lý theo processing và tạo output information.",
        sectionId: "s14",
      },
      {
        id: "dev-users",
        label: "5 user categories",
        group: "concept",
        parent: "dev",
        detail:
          "Technology users có thể được phân thành Home, Small office/home office, Mobile, Power và Enterprise users.",
        sectionId: "s14",
      },
    ],
    edges: [
      { from: "cbis", to: "why" },
      { from: "why", to: "why-vital" },
      { from: "why", to: "why-goals" },
      { from: "why", to: "why-role" },
      { from: "cbis", to: "is" },
      { from: "is", to: "is-tech" },
      { from: "is", to: "is-people" },
      { from: "is", to: "is-org" },
      { from: "cbis", to: "comp" },
      { from: "comp", to: "comp-hw" },
      { from: "comp", to: "comp-sw" },
      { from: "comp", to: "comp-data" },
      { from: "comp", to: "comp-proc" },
      { from: "comp", to: "comp-people" },
      { from: "comp", to: "comp-newis" },
      { from: "cbis", to: "info" },
      { from: "info", to: "info-ladder" },
      { from: "info", to: "info-relative" },
      { from: "info", to: "info-good" },
      { from: "cbis", to: "itis" },
      { from: "itis", to: "itis-buy" },
      { from: "itis", to: "itis-drive" },
      { from: "cbis", to: "moore" },
      { from: "moore", to: "moore-era" },
      { from: "moore", to: "moore-cost" },
      { from: "cbis", to: "carr" },
      { from: "carr", to: "carr-prop" },
      { from: "carr", to: "carr-infra" },
      { from: "cbis", to: "dev" },
      { from: "dev", to: "dev-flow" },
      { from: "dev", to: "dev-users" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "Why IT/IS matters in business",
      blocks: [
        flowBlock(
          "s1",
          "IT/IS as a business enabler",
          "horizontal",
          [
            {
              id: "s1-it",
              label: "IT/IS",
              group: "concept",
              detail:
                "IT/IS là hạ tầng và hệ thống giúp doanh nghiệp vận hành có mục tiêu.",
            },
            {
              id: "s1-vital",
              label: "Vital component",
              group: "purpose",
              detail:
                "IT/IS là thành phần sống còn của successful businesses.",
            },
            {
              id: "s1-expand",
              label: "Expand & compete",
              group: "purpose",
              detail:
                "IT/IS giúp tổ chức mở rộng hoạt động và cạnh tranh hiệu quả hơn.",
            },
            {
              id: "s1-goals",
              label: "Achieve goals",
              group: "purpose",
              detail:
                "Mục tiêu cuối cùng vẫn là business goals như profit, sustainability và competitive advantage.",
            },
          ],
          [
            { from: "s1-it", to: "s1-vital" },
            { from: "s1-it", to: "s1-expand" },
            { from: "s1-it", to: "s1-goals" },
          ],
          "IT/IS là means để đạt goals, không phải ends.",
        ),
        calloutBlock(
          "key",
          "Mục tiêu môn",
          "Informed consumer: hiểu IT/IS đủ để phối hợp với chuyên gia, đặt câu hỏi đúng và ra quyết định quản trị khôn ngoan.",
        ),
      ],
      keyTerms: [
        {
          term: "Information Technology (IT)",
          definition:
            "Công nghệ phần cứng, phần mềm và mạng dùng để xử lý, lưu trữ, truyền dữ liệu.",
        },
        {
          term: "Information System (IS)",
          definition:
            "Hệ thống kết hợp People, Organizations và Technology để tạo information phục vụ công việc.",
        },
      ],
      examples: [
        {
          title: "Informed consumer",
          body:
            "Một manager không cần tự viết code, nhưng phải hiểu IS đủ để nêu yêu cầu, đánh giá phương án và làm việc với technical specialists.",
          meaning:
            "Giá trị của môn học nằm ở năng lực dùng IT/IS để ra quyết định kinh doanh.",
        },
      ],
    },
    {
      id: "s2",
      heading: "Organization as a conversion mechanism",
      blocks: [
        flowBlock(
          "s2",
          "Organization converts resources into outputs",
          "horizontal",
          [
            {
              id: "s2-inputs",
              label: "Inputs: 7 resources",
              group: "concept",
              detail:
                "Inputs gồm money, materials, machines, people, management, information và time.",
            },
            {
              id: "s2-org",
              label: "Organization",
              group: "concept",
              detail:
                "Organization là conversion mechanism biến resources thành outputs.",
            },
            {
              id: "s2-outputs",
              label: "Outputs",
              group: "concept",
              detail:
                "Outputs là goods/services và kết quả hoạt động của tổ chức.",
            },
            {
              id: "s2-goals",
              label: "Goals: profit + advantage",
              group: "purpose",
              detail:
                "Doanh nghiệp đo thành công bằng goals như profit và competitive advantage.",
            },
          ],
          [
            { from: "s2-inputs", to: "s2-org" },
            { from: "s2-org", to: "s2-outputs" },
            { from: "s2-org", to: "s2-goals" },
          ],
          "Information là một resource trong conversion mechanism.",
        ),
        calloutBlock(
          "insight",
          "Information là resource",
          "Information không đứng ngoài business process; nó là một input giúp organization chuyển đổi tài nguyên thành output và goals.",
        ),
      ],
      keyTerms: [
        {
          term: "Organization",
          definition:
            "Một cơ chế chuyển đổi resources thành outputs để đạt goals.",
        },
        {
          term: "Competitive advantage",
          definition:
            "Lợi thế giúp doanh nghiệp tạo giá trị tốt hơn đối thủ trong một bối cảnh cạnh tranh.",
        },
      ],
      examples: [
        {
          title: "Knowledge/information as input",
          body:
            "Cùng một máy móc và nhân sự, doanh nghiệp có information tốt hơn có thể lập kế hoạch, kiểm soát và phục vụ khách hàng tốt hơn.",
          implication:
            "Information là tài nguyên quản trị, không chỉ là báo cáo sau cùng.",
        },
      ],
    },
    {
      id: "s3",
      heading: "Management functions supported by IS",
      blocks: [
        flowBlock(
          "s3",
          "Management functions",
          "radial",
          [
            {
              id: "s3-management",
              label: "Management",
              group: "concept",
              detail:
                "Management dùng information để điều phối tổ chức và đạt goals.",
            },
            {
              id: "s3-planning",
              label: "Planning",
              group: "purpose",
              detail:
                "Planning cần information về mục tiêu, nguồn lực và môi trường.",
            },
            {
              id: "s3-leading",
              label: "Leading",
              group: "purpose",
              detail:
                "Leading cần communication và feedback để hướng đội nhóm.",
            },
            {
              id: "s3-organizing",
              label: "Organizing",
              group: "purpose",
              detail:
                "Organizing dùng information để phân bổ người, việc và resources.",
            },
            {
              id: "s3-coordinating",
              label: "Coordinating",
              group: "purpose",
              detail:
                "Coordinating cần shared information giữa các bộ phận.",
            },
            {
              id: "s3-communicating",
              label: "Communicating",
              group: "purpose",
              detail:
                "Communicating là luồng trao đổi giúp information đi đúng người.",
            },
            {
              id: "s3-controlling",
              label: "Controlling",
              group: "purpose",
              detail:
                "Controlling so sánh kết quả thực tế với kế hoạch để điều chỉnh.",
            },
            {
              id: "s3-reporting",
              label: "Reporting",
              group: "purpose",
              detail:
                "Reporting đóng gói information để người quản lý hiểu tình hình.",
            },
          ],
          [
            { from: "s3-management", to: "s3-planning" },
            { from: "s3-management", to: "s3-leading" },
            { from: "s3-management", to: "s3-organizing" },
            { from: "s3-management", to: "s3-coordinating" },
            { from: "s3-management", to: "s3-communicating" },
            { from: "s3-management", to: "s3-controlling" },
            { from: "s3-management", to: "s3-reporting" },
          ],
          "IS hỗ trợ các chức năng quản trị bằng cách tạo, truyền và trình bày information.",
        ),
        calloutBlock(
          "note",
          "IS hỗ trợ quản trị",
          "IS hỗ trợ trực tiếp planning, controlling, reporting và collaboration giữa các nhóm làm việc.",
        ),
      ],
      keyTerms: [
        {
          term: "Management",
          definition:
            "Quá trình planning, organizing, leading, coordinating, communicating, controlling và reporting.",
        },
      ],
    },
    {
      id: "s4",
      heading: "How organizations use IS/IT",
      blocks: [
        flowBlock(
          "s4",
          "IS/IT uses and strategy",
          "horizontal",
          [
            {
              id: "s4-isit",
              label: "IS/IT",
              group: "concept",
              detail:
                "IS/IT là công cụ tổ chức dùng để vận hành và cạnh tranh.",
            },
            {
              id: "s4-uses",
              label: "3 uses",
              group: "concept",
              detail:
                "Ba use chính: improve efficiency/effectiveness, support decision making, enable collaboration.",
            },
            {
              id: "s4-strategy",
              label: "Strategies",
              group: "purpose",
              detail:
                "IS/IT phải gắn với business strategies thay vì chạy theo công nghệ mới.",
            },
            {
              id: "s4-goals",
              label: "Goals",
              group: "purpose",
              detail:
                "Strategies cuối cùng phải phục vụ goals của organization.",
            },
          ],
          [
            { from: "s4-isit", to: "s4-uses" },
            { from: "s4-uses", to: "s4-strategy" },
            { from: "s4-strategy", to: "s4-goals" },
          ],
          "IT/IS tạo giá trị khi nó đi qua use case và strategy để đến business goals.",
        ),
        calloutBlock(
          "trap",
          "Bẫy mục tiêu",
          "Mua IT mới nhất ≠ mục tiêu; IT/IS là means, không phải ends.",
        ),
      ],
      examples: [
        {
          title: "Decision support",
          body:
            "Dashboard bán hàng chỉ có ý nghĩa khi manager dùng nó để quyết định tồn kho, khuyến mãi hoặc phân bổ nhân sự.",
          meaning:
            "Cùng là IT, giá trị nằm ở quyết định và hành động mà nó hỗ trợ.",
        },
      ],
    },
    {
      id: "s5",
      heading: "Information System = People + Organizations + Technology",
      blocks: [
        flowBlock(
          "s5",
          "Three dimensions of IS",
          "radial",
          [
            {
              id: "s5-is",
              label: "Information System",
              group: "concept",
              detail:
                "Information System là application of IT to support people working in organizations.",
            },
            {
              id: "s5-tech",
              label: "Technology",
              group: "term",
              detail:
                "Technology cung cấp tools để xử lý, lưu trữ và truyền data.",
            },
            {
              id: "s5-people",
              label: "People",
              group: "term",
              detail:
                "People dùng và diễn giải information để làm việc trong organization.",
            },
            {
              id: "s5-org",
              label: "Organizations",
              group: "term",
              detail:
                "Organizations đặt mục tiêu, quy trình, cấu trúc và bối cảnh sử dụng IS.",
            },
          ],
          [
            { from: "s5-is", to: "s5-tech" },
            { from: "s5-is", to: "s5-people" },
            { from: "s5-is", to: "s5-org" },
            { from: "s5-tech", to: "s5-people" },
            { from: "s5-people", to: "s5-org" },
            { from: "s5-org", to: "s5-tech" },
          ],
          "IS = application of IT to support people working in organizations.",
        ),
        calloutBlock(
          "insight",
          "IS không chỉ là technology",
          "Một hệ thống chỉ thành IS khi technology được gắn với people và organization để tạo information hữu ích.",
        ),
      ],
      keyTerms: [
        {
          term: "Information System",
          definition:
            "Application of information technology to support people working in organizations.",
        },
      ],
    },
    {
      id: "s6",
      heading: "The five components of an Information System",
      blocks: [
        flowBlock(
          "s6",
          "Five components",
          "horizontal",
          [
            {
              id: "s6-hardware",
              label: "Hardware",
              group: "term",
              detail:
                "Hardware là thiết bị vật lý của hệ thống.",
            },
            {
              id: "s6-software",
              label: "Software",
              group: "term",
              detail:
                "Software là instructions for hardware, tức chỉ dẫn cho máy.",
            },
            {
              id: "s6-data",
              label: "Data",
              group: "term",
              detail:
                "Data là nguyên liệu được lưu trữ và xử lý.",
            },
            {
              id: "s6-procedures",
              label: "Procedures",
              group: "term",
              detail:
                "Procedures là instructions for people, tức chỉ dẫn cho con người.",
            },
            {
              id: "s6-people",
              label: "People",
              group: "term",
              detail:
                "People là thành phần quan trọng nhất vì con người suy nghĩ và hành động.",
            },
          ],
          [
            { from: "s6-hardware", to: "s6-software" },
            { from: "s6-software", to: "s6-data" },
            { from: "s6-data", to: "s6-procedures" },
            { from: "s6-procedures", to: "s6-people" },
          ],
          "Năm components cùng tạo nên Information System; thiếu people/procedures thì chỉ còn technology rời rạc.",
        ),
        calloutBlock(
          "trap",
          "Bẫy chủ lực",
          "Procedures (chỉ dẫn cho người) ≠ Software (chỉ dẫn cho máy) — bẫy q1.",
        ),
      ],
      keyTerms: [
        {
          term: "Software",
          definition:
            "Instructions for hardware; máy làm theo software.",
        },
        {
          term: "Procedures",
          definition:
            "Instructions for people; con người làm theo procedures trong hệ thống.",
        },
        {
          term: "People",
          definition:
            "Thành phần quan trọng nhất của IS vì con người có judgment, context và responsibility.",
        },
      ],
      examples: [
        {
          title: "Same word, different target",
          body:
            "Software và Procedures đều là instructions, nhưng Software nói với máy, còn Procedures nói với người.",
          meaning:
            "Đây là bẫy phân loại quan trọng nhất của Topic 01.",
        },
      ],
    },
    {
      id: "s7",
      heading: "Low-tech and high-tech Information Systems",
      blocks: [
        comparisonBlock("Low-tech vs High-tech IS", ["", "Low-tech", "High-tech"], [
          {
            label: "Ví dụ",
            cells: ["Email + danh bạ", "Customer support system"],
          },
          {
            label: "Việc máy gánh thay người",
            cells: ["Ít", "Nhiều"],
          },
          {
            label: "Điểm chung",
            cells: [
              "Vẫn là IS nếu hỗ trợ people in organizations",
              "Vẫn là IS nếu hỗ trợ people in organizations",
            ],
          },
        ]),
        calloutBlock(
          "insight",
          "Technology level không quyết định bản chất IS",
          "Low-tech hay high-tech đều có thể là IS; khác nhau ở mức độ automation và complexity, không phải ở mục tiêu phục vụ people/organization.",
        ),
      ],
      examples: [
        {
          title: "Customer support",
          body:
            "Danh bạ khách hàng thủ công và hệ thống support tự động đều có thể hỗ trợ cùng một quy trình chăm sóc khách hàng.",
          implication:
            "Đừng đánh đồng 'high-tech hơn' với 'tốt hơn' nếu không xét business need.",
        },
      ],
    },
    {
      id: "s7b",
      heading: "Using the framework to understand a new IS",
      blocks: [
        comparisonBlock(
          "Five components → câu hỏi trọng tâm khi triển khai một IS mới",
          ["Focus area", "Câu hỏi cần trả lời"],
          [
            {
              label: "Hardware needs",
              cells: ["Cần hardware nào?"],
            },
            {
              label: "Programs to license",
              cells: ["Software/programs nào phải mua hoặc license?"],
            },
            {
              label: "Databases & data",
              cells: ["Data/databases nào phải tạo?"],
            },
            {
              label: "Procedures",
              cells: ["Procedures nào phải tạo mới hoặc chỉnh sửa?"],
            },
            {
              label: "Network/System admin",
              cells: ["Quản trị network/hệ thống ra sao?"],
            },
            {
              label: "Organization impact",
              cells: ["Tác động tới people/tổ chức thế nào, cần đào tạo gì?"],
            },
          ],
        ),
        calloutBlock(
          "key",
          "Framework như một checklist",
          "Khi gặp một Information System mới, đi qua 5 components như bộ câu hỏi để hiểu nhanh hệ thống — thay vì sa vào từng chi tiết kỹ thuật rời rạc.",
        ),
      ],
    },
    {
      id: "s8",
      heading: "Data, information, and context",
      blocks: [
        flowBlock(
          "s8",
          "Data and information are relative",
          "horizontal",
          [
            {
              id: "s8-dept",
              label: "Department: daily activity data",
              group: "concept",
              detail:
                "Ở cấp phòng ban, dữ liệu hoạt động hằng ngày có thể là raw data.",
            },
            {
              id: "s8-company",
              label: "Company: GL data / FS information",
              group: "concept",
              detail:
                "Ở cấp công ty, general ledger có thể là data còn financial statements là information.",
            },
            {
              id: "s8-investor",
              label: "Investor: FS data",
              group: "concept",
              detail:
                "Với investor, financial statements lại có thể là data đầu vào cho phân tích.",
            },
          ],
          [
            { from: "s8-dept", to: "s8-company" },
            { from: "s8-company", to: "s8-investor" },
          ],
          "One user's information is another user's data.",
        ),
        calloutBlock(
          "insight",
          "Thang ý nghĩa",
          "Data → information → intelligence → knowledge → wisdom. Cùng một thứ có thể đổi vai theo user và context.",
        ),
      ],
      keyTerms: [
        {
          term: "Information",
          definition:
            "Data được xử lý hoặc đặt trong meaningful context để người dùng hiểu và hành động.",
        },
        {
          term: "Data",
          definition:
            "Facts thô, chưa nhất thiết có ý nghĩa cho một người dùng cụ thể.",
        },
      ],
      examples: [
        {
          title: "Phòng ban → công ty → investor",
          body:
            "Daily transactions là data cho phòng kế toán; financial statements là information cho công ty; nhưng với investor, financial statements lại là data để phân tích đầu tư.",
          meaning:
            "Data/information phụ thuộc user và decision context.",
        },
      ],
    },
    {
      id: "s9",
      heading: "Characteristics of good information",
      blocks: [
        flowBlock(
          "s9",
          "Good information",
          "radial",
          [
            {
              id: "s9-good",
              label: "Good information",
              group: "concept",
              detail:
                "Good information hữu ích cho decision making chứ không chỉ nhiều hoặc đẹp.",
            },
            {
              id: "s9-accurate",
              label: "Accurate",
              group: "term",
              detail:
                "Accurate nghĩa là đúng và không misleading.",
            },
            {
              id: "s9-timely",
              label: "Timely",
              group: "term",
              detail:
                "Timely nghĩa là đến đúng lúc để còn ra quyết định.",
            },
            {
              id: "s9-relevant",
              label: "Relevant",
              group: "term",
              detail:
                "Relevant nghĩa là liên quan đến context, subject và decision.",
            },
            {
              id: "s9-sufficient",
              label: "Just sufficient",
              group: "term",
              detail:
                "Just sufficient nghĩa là đủ dùng, không thiếu và không overload.",
            },
            {
              id: "s9-cost",
              label: "Worth its cost",
              group: "term",
              detail:
                "Worth its cost nghĩa là lợi ích của information phải xứng đáng với chi phí tạo ra nó.",
            },
          ],
          [
            { from: "s9-good", to: "s9-accurate" },
            { from: "s9-good", to: "s9-timely" },
            { from: "s9-good", to: "s9-relevant" },
            { from: "s9-good", to: "s9-sufficient" },
            { from: "s9-good", to: "s9-cost" },
          ],
          "Good information = accurate + timely + relevant + just sufficient + worth its cost.",
        ),
        calloutBlock(
          "trap",
          "Bẫy overload",
          '"Càng nhiều thông tin càng tốt" = sai vì vi phạm just sufficient và worth its cost.',
        ),
      ],
      keyTerms: [
        {
          term: "Information overload",
          definition:
            "Tình trạng có quá nhiều information khiến người dùng khó lọc, hiểu và quyết định.",
        },
      ],
    },
    {
      id: "s10",
      heading: "Information Technology vs Information System",
      blocks: [
        comparisonBlock("IT vs IS", ["Tiêu chí", "Information Technology", "Information System"], [
          {
            label: "Gồm",
            cells: [
              "Hardware, software, networks, databases và tools",
              "IT + People + Procedures + Data + Organization context",
            ],
          },
          {
            label: "Mua được?",
            cells: [
              "Có thể mua technology",
              "Không thể mua trọn IS vì cần people/procedures/organization",
            ],
          },
          {
            label: "Nhân quả",
            cells: [
              "IT drives development of IS",
              "IS dùng IT để hỗ trợ people working in organizations",
            ],
          },
        ]),
        calloutBlock(
          "trap",
          "Buy IT, not IS",
          "Bạn có thể buy Information Technology, nhưng không thể buy an Information System như một món hàng hoàn chỉnh.",
        ),
      ],
      keyTerms: [
        {
          term: "IT drives IS",
          definition:
            "Information Technology drives the development of new Information Systems, không phải ngược lại.",
        },
      ],
    },
    {
      id: "s11",
      heading: "Moore's Law and eras of computing",
      blocks: [
        flowBlock(
          "s11",
          "Five eras of computing",
          "horizontal",
          [
            {
              id: "s11-era1",
              label: "Era 1: Mainframe",
              group: "concept",
              detail:
                "Mainframe era tập trung computing power ở hệ thống lớn.",
            },
            {
              id: "s11-era2",
              label: "Era 2: PC",
              group: "concept",
              detail:
                "Personal computer đưa computing đến từng cá nhân.",
            },
            {
              id: "s11-era3",
              label: "Era 3: Client/server",
              group: "concept",
              detail:
                "Client/server chia việc giữa máy người dùng và server.",
            },
            {
              id: "s11-era4",
              label: "Era 4: Enterprise",
              group: "concept",
              detail:
                "Enterprise computing kết nối dữ liệu và quy trình toàn doanh nghiệp.",
            },
            {
              id: "s11-era5",
              label: "Era 5: Cloud",
              group: "concept",
              detail:
                "Cloud/mobile computing làm computing linh hoạt và phổ biến hơn.",
            },
          ],
          [
            { from: "s11-era1", to: "s11-era2" },
            { from: "s11-era2", to: "s11-era3" },
            { from: "s11-era3", to: "s11-era4" },
            { from: "s11-era4", to: "s11-era5" },
          ],
          "Các era cho thấy computing ngày càng rẻ, phổ biến và gắn với business operations.",
        ),
        calloutBlock(
          "key",
          "Moore's Law",
          "Điểm cần rút ra cho business: cost/performance của data processing giảm mạnh; the cost of data processing is approaching zero.",
        ),
      ],
      keyTerms: [
        {
          term: "Moore's Law",
          definition:
            "Observation that transistor density on integrated circuits increases over time, driving cost/performance improvement.",
        },
      ],
      examples: [
        {
          title: "Cost/performance",
          body:
            "Nếu cùng một mức tiền mua được processing power ngày càng lớn, doanh nghiệp có thể xử lý nhiều data hơn với chi phí thấp hơn.",
          implication:
            "Business professional cần chú ý chi phí xử lý data giảm, không chỉ tốc độ máy cụ thể.",
        },
      ],
    },
    {
      id: "s12",
      heading: "Technological issues today",
      blocks: [
        flowBlock(
          "s12",
          "Current technology issues",
          "radial",
          [
            {
              id: "s12-issues",
              label: "Technological issues today",
              group: "concept",
              detail:
                "Công nghệ mạnh hơn nhưng kéo theo vấn đề quản trị mới.",
            },
            {
              id: "s12-size",
              label: "Size",
              group: "term",
              detail:
                "Thiết bị nhỏ hơn làm mobility và ubiquity tăng.",
            },
            {
              id: "s12-storage",
              label: "Storage",
              group: "term",
              detail:
                "Storage lớn hơn làm doanh nghiệp giữ và phân tích nhiều data hơn.",
            },
            {
              id: "s12-mobility",
              label: "Mobility",
              group: "term",
              detail:
                "Mobility cho phép làm việc ở nhiều nơi và nhiều thiết bị.",
            },
            {
              id: "s12-compat",
              label: "Compatibility",
              group: "term",
              detail:
                "Compatibility quyết định các hệ thống có kết nối và trao đổi data được hay không.",
            },
            {
              id: "s12-obsolete",
              label: "Rapid obsolescence",
              group: "term",
              detail:
                "Rapid obsolescence làm công nghệ nhanh lỗi thời và khó quản trị đầu tư.",
            },
            {
              id: "s12-info-overload",
              label: "Information overload",
              group: "term",
              detail:
                "Information overload khiến decision maker bị ngợp bởi lượng thông tin.",
            },
            {
              id: "s12-capacity",
              label: "Capacity overload",
              group: "term",
              detail:
                "Capacity overload xảy ra khi khả năng xử lý/đường truyền không theo kịp nhu cầu.",
            },
            {
              id: "s12-cost",
              label: "Cost/performance decline",
              group: "term",
              detail:
                "Cost/performance decline nghĩa là chi phí cho một đơn vị năng lực xử lý giảm theo thời gian.",
            },
          ],
          [
            { from: "s12-issues", to: "s12-size" },
            { from: "s12-issues", to: "s12-storage" },
            { from: "s12-issues", to: "s12-mobility" },
            { from: "s12-issues", to: "s12-compat" },
            { from: "s12-issues", to: "s12-obsolete" },
            { from: "s12-issues", to: "s12-info-overload" },
            { from: "s12-issues", to: "s12-capacity" },
            { from: "s12-issues", to: "s12-cost" },
          ],
          "Các issues này giải thích vì sao IT decision luôn là management decision.",
        ),
        calloutBlock(
          "note",
          "Technology tạo cả năng lực lẫn vấn đề",
          "Khi storage, mobility và processing tăng, nhà quản trị đồng thời phải xử lý compatibility, obsolescence, overload và cost/performance.",
        ),
      ],
      examples: [
        {
          title: "Information overload",
          body:
            "Một manager có thể có hàng trăm báo cáo và dashboard nhưng vẫn khó quyết định nếu information không relevant và just sufficient.",
          meaning:
            "Nhiều data không tự động tạo decision quality.",
        },
      ],
    },
    {
      id: "s13",
      heading: "Carr's view: proprietary vs infrastructural technology",
      blocks: [
        flowBlock(
          "s13",
          "Carr's argument (2005)",
          "horizontal",
          [
            {
              id: "carr-ubi",
              label: "IT ubiquitous & prerequisite",
              group: "concept",
              detail:
                "Theo Carr: IT có mặt khắp nơi, là dominant capital expenditure và prerequisite for survival, có thể boost productivity.",
            },
            {
              id: "carr-infra",
              label: "Becomes infrastructural",
              group: "concept",
              detail:
                "Khi mọi doanh nghiệp đều mua/dùng được, IT trở thành infrastructural technology (commodity).",
            },
            {
              id: "carr-noadv",
              label: "No lasting advantage alone",
              group: "concept",
              detail:
                "Bản thân IT phổ cập không tạo superior profitability hay differentiation bền vững.",
            },
            {
              id: "carr-mgmt",
              label: "Advantage from management",
              group: "concept",
              detail:
                "Lợi thế tương lai đến từ basic good management và cách dùng IT khôn ngoan, không từ việc sở hữu IT đắt tiền.",
            },
          ],
          [
            { from: "carr-ubi", to: "carr-infra", label: "phổ cập" },
            { from: "carr-infra", to: "carr-noadv", label: "commodity" },
            { from: "carr-noadv", to: "carr-mgmt", label: "quản trị" },
          ],
          "Carr: IT là điều kiện cần (prerequisite) nhưng khi đã infrastructural thì không còn là điều kiện đủ cho competitive advantage.",
        ),
        comparisonBlock(
          "Proprietary vs Infrastructural Technology",
          ["Tiêu chí", "Proprietary technology", "Infrastructural technology"],
          [
            {
              label: "Đặc điểm",
              cells: [
                "Doanh nghiệp sở hữu/kiểm soát riêng, khó bắt chước",
                "Phổ biến như hạ tầng chung, nhiều doanh nghiệp có thể tiếp cận",
              ],
            },
            {
              label: "Ví dụ",
              cells: [
                "Một hệ thống riêng tạo năng lực độc đáo",
                "Điện, đường sắt, Internet hoặc IT commodity khi đã phổ cập",
              ],
            },
            {
              label: "Lợi thế cạnh tranh",
              cells: [
                "Có thể tạo advantage khi còn độc quyền hoặc khác biệt",
                "Ít tạo advantage bền vững nếu ai cũng mua và dùng được",
              ],
            },
          ],
        ),
        calloutBlock(
          "trap",
          "Bẫy Carr",
          "Không phải cứ đầu tư IT là có competitive advantage; khi technology trở thành infrastructural, lợi thế đến từ cách quản trị và sử dụng.",
        ),
        calloutBlock(
          "insight",
          "The future theo Carr",
          "IT càng modular thì càng dễ innovate. Công ty 'lý tưởng' giữ thái độ hoài nghi với IT — ưu tiên cái rẻ, có sẵn over-the-counter, open source, và có thể outsource. Lợi thế dài hạn nằm ở basic good management, không ở việc sở hữu IT đắt tiền.",
        ),
      ],
      keyTerms: [
        {
          term: "Proprietary technology",
          definition:
            "Technology do doanh nghiệp sở hữu hoặc kiểm soát riêng, có thể tạo advantage nếu khó sao chép.",
        },
        {
          term: "Infrastructural technology",
          definition:
            "Technology phổ cập như hạ tầng chung; giá trị cạnh tranh riêng thường giảm khi mọi đối thủ đều tiếp cận được.",
        },
      ],
    },
    {
      id: "s14",
      heading: "Computers, mobile devices, and technology users",
      blocks: [
        flowBlock(
          "s14",
          "Computer processing model",
          "horizontal",
          [
            {
              id: "s14-input",
              label: "Input: data",
              group: "concept",
              detail:
                "Input là data đưa vào computer hoặc system.",
            },
            {
              id: "s14-processing",
              label: "Processing",
              group: "concept",
              detail:
                "Processing là thao tác tính toán, sắp xếp, nhóm, so sánh hoặc xử lý tương tự.",
            },
            {
              id: "s14-output",
              label: "Output: information",
              group: "concept",
              detail:
                "Output là information có nghĩa hơn cho người dùng.",
            },
            {
              id: "s14-users",
              label: "Technology users",
              group: "term",
              detail:
                "Users gồm Home, Small office/home office, Mobile, Power và Enterprise users.",
            },
          ],
          [
            { from: "s14-input", to: "s14-processing" },
            { from: "s14-processing", to: "s14-output" },
            { from: "s14-output", to: "s14-users" },
          ],
          "Input → Processing → Output là mô hình nền để hiểu computer và mobile devices.",
        ),
        calloutBlock(
          "note",
          "Devices và users",
          "Mobile user là nhóm hay di chuyển: sales reps, real estate agents, insurance agents, meter readers, package delivery people, journalists, consultants và students.",
        ),
      ],
      keyTerms: [
        {
          term: "Terminal",
          definition:
            "Thiết bị nhập/xuất dùng để truy cập computer system.",
        },
        {
          term: "Cloud computing",
          definition:
            "Mô hình dùng computing resources qua network thay vì chỉ dựa vào máy cục bộ.",
        },
        {
          term: "Mobile user",
          definition:
            "Người dùng công nghệ khi di chuyển, ví dụ sales reps, real estate agents, consultants và students.",
        },
      ],
      examples: [
        {
          title: "Mobile user",
          body:
            "Sales reps, real estate agents, insurance agents, meter readers, package delivery people, journalists, consultants và students là ví dụ Mobile users.",
          meaning:
            "Điểm nhận diện là công việc/học tập di chuyển và cần technology ở nhiều nơi.",
        },
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      stem: "In the five components of an information system, which one contains the instructions for people in the human side of the system?",
      difficulty: "intermediate",
      conceptTested:
        "Procedures vs Software (instructions cho người vs cho máy)",
      takeaway:
        "Hai bộ chỉ dẫn trong một IS: Software điều khiển máy, Procedures hướng dẫn người.",
      options: [
        {
          id: "a",
          text: "Software",
          isCorrect: false,
          rationale:
            'Cơ chế: Software cũng là "instructions" nhưng dành cho hardware (máy), không phải cho người. Bẫy: thấy chữ instructions nên vội chọn Software. Khóa: Software = chỉ dẫn cho máy.',
        },
        {
          id: "b",
          text: "People",
          isCorrect: false,
          rationale:
            "Cơ chế: People là người vận hành, nhập liệu, dùng và đánh giá information. Bẫy: câu hỏi nói human side nên dễ chọn People. Khóa: People là chủ thể, không phải bộ instructions.",
        },
        {
          id: "c",
          text: "Data",
          isCorrect: false,
          rationale:
            "Cơ chế: Data là raw facts/material để xử lý. Bẫy: data nằm trong IS nhưng không hướng dẫn hành động. Khóa: Data không phải instructions.",
        },
        {
          id: "d",
          text: "Hardware",
          isCorrect: false,
          rationale:
            "Cơ chế: Hardware là thiết bị vật lý. Bẫy: nghĩ instructions được lưu trong máy nên chọn Hardware. Khóa: Hardware chứa/chạy software nhưng không phải instructions cho người.",
        },
        {
          id: "e",
          text: "Procedures",
          isCorrect: true,
          rationale:
            "Cơ chế: Procedures là instructions for people trong human side của IS. Bẫy được gài giữa Procedures và Software. Khóa: Procedures hướng dẫn người; Software hướng dẫn máy.",
        },
      ],
    },
    {
      id: "q2",
      stem: "Information is defined as:",
      difficulty: "basic",
      conceptTested:
        "Definition of information: meaningful context, processed data, knowledge derived from data",
      takeaway:
        "Information có thể được nhìn như data đã xử lý, data đặt trong meaningful context, hoặc knowledge derived from data.",
      options: [
        {
          id: "a",
          text: "knowledge derived from data",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là một định nghĩa đúng nhưng chưa đầy đủ so với các lựa chọn. Bẫy: chọn một mệnh đề đúng đơn lẻ. Khóa: câu hỏi có đáp án tổng hợp bao trùm.",
        },
        {
          id: "b",
          text: "data presented in a meaningful context",
          isCorrect: false,
          rationale:
            "Cơ chế: meaningful context là một cách định nghĩa information. Bẫy: dừng ở một mô tả đúng. Khóa: còn có các mô tả đúng khác trong câu.",
        },
        {
          id: "c",
          text: "data processed by summing, ordering, averaging, grouping, comparing, or other similar operations",
          isCorrect: false,
          rationale:
            "Cơ chế: xử lý data bằng summing, ordering, averaging, grouping, comparing có thể tạo information. Bẫy: đây vẫn chỉ là một phần. Khóa: chọn đáp án bao gồm tất cả mô tả đúng.",
        },
        {
          id: "d",
          text: "all of the above are correct",
          isCorrect: true,
          rationale:
            "Cơ chế: cả ba mô tả đều đúng với information. Bẫy: thấy nhiều định nghĩa tưởng mâu thuẫn. Khóa: information là data được xử lý/đặt trong context để tạo knowledge hữu ích.",
        },
      ],
    },
    {
      id: "q3",
      stem: "Select the CORRECT statement:",
      difficulty: "intermediate",
      conceptTested: "IT vs IS; buy IT, not IS; change resistance",
      takeaway:
        "Bạn có thể mua IT, nhưng IS còn gồm people, procedures và organization nên không thể mua như một sản phẩm đóng gói.",
      options: [
        {
          id: "a",
          text: "For a new information system, there's no employees' resistance to change, and you do not need to manage employees as they use the new system",
          isCorrect: false,
          rationale:
            "Cơ chế: IS gắn với people và procedures nên triển khai hệ thống mới thường có resistance to change. Bẫy: xem IS như technology thuần túy. Khóa: quản trị con người là một phần của IS.",
        },
        {
          id: "b",
          text: "Information system drives the development of new information technology",
          isCorrect: false,
          rationale:
            "Cơ chế: slide nhấn mạnh chiều ngược lại: IT drives development of IS. Bẫy: đảo chiều nhân quả. Khóa: technology mở ra khả năng cho systems mới.",
        },
        {
          id: "c",
          text: "You can buy information technology and can buy an information system",
          isCorrect: false,
          rationale:
            "Cơ chế: mua được IT tools nhưng không mua được toàn bộ IS vì IS gồm people, procedures và organization. Bẫy: đồng nhất IS với IT. Khóa: buy IT, build/manage IS.",
        },
        {
          id: "d",
          text: "You cannot buy an information system, but you can buy information technology",
          isCorrect: true,
          rationale:
            "Cơ chế: Information Technology là tools có thể mua; Information System là tổ hợp technology + people + procedures + organization. Bẫy: tưởng mua software là mua xong IS. Khóa: IS phải được triển khai và vận hành trong tổ chức.",
        },
      ],
    },
    {
      id: "q4",
      stem: "Which one is the key point you can infer from Moore's Law as a future business professional?",
      difficulty: "intermediate",
      conceptTested: "Moore's Law and business implication",
      takeaway:
        "Điểm business từ Moore's Law là cost/performance của data processing giảm mạnh; câu cần nhớ là cost of data processing is approaching zero.",
      options: [
        {
          id: "a",
          text: "You care how fast of a computer your company can buy for $1,000",
          isCorrect: false,
          rationale:
            "Cơ chế: tốc độ máy ở một mức giá là biểu hiện kỹ thuật, nhưng chưa phải key business point. Bẫy: nhìn Moore's Law như câu chuyện mua máy. Khóa: hãy nhìn cost of data processing.",
        },
        {
          id: "b",
          text: "IT development is slow",
          isCorrect: false,
          rationale:
            "Cơ chế: Moore's Law gợi ý tốc độ phát triển nhanh của chip/computing. Bẫy: đảo ngược ý chính. Khóa: computing capacity tăng nhanh theo thời gian.",
        },
        {
          id: "c",
          text: "The cost of data processing is approaching zero",
          isCorrect: true,
          rationale:
            "Cơ chế: khi computing power tăng và cost/performance giảm, xử lý data rẻ đi rất mạnh. Bẫy: bị hút vào thông số kỹ thuật. Khóa: implication cho business là chi phí xử lý data tiến gần zero.",
        },
        {
          id: "d",
          text: "Moore's Law guarantees superior profit from any IT investment",
          isCorrect: false,
          rationale:
            "Cơ chế: rẻ hơn không đồng nghĩa mọi khoản đầu tư IT sinh superior profit. Bẫy: biến xu hướng công nghệ thành bảo đảm kinh doanh. Khóa: advantage còn phụ thuộc strategy, people và execution.",
        },
      ],
    },
    {
      id: "q5",
      stem: "People use various technologies at home, at work, and at school. They can be classified in five categories. Examples of ________ users are sales reps, real estate agents, insurance agents, meter readers, package delivery people, journalists, consultants, and students.",
      difficulty: "basic",
      conceptTested: "Technology user categories",
      takeaway:
        "Mobile users được nhận diện bằng đặc điểm di chuyển và dùng technology ở nhiều nơi.",
      options: [
        {
          id: "a",
          text: "Mobile",
          isCorrect: true,
          rationale:
            "Cơ chế: sales reps, real estate agents, delivery people, journalists, consultants và students đều thường làm việc/học tập khi di chuyển. Bẫy: nhìn nghề nghiệp riêng lẻ thay vì pattern mobility. Khóa: nhóm này là Mobile users.",
        },
        {
          id: "b",
          text: "Home",
          isCorrect: false,
          rationale:
            "Cơ chế: Home users chủ yếu dùng technology tại nhà. Bẫy: students có thể học ở nhà nên dễ chọn Home. Khóa: danh sách nhấn mạnh mobility của công việc/học tập.",
        },
        {
          id: "c",
          text: "Enterprise",
          isCorrect: false,
          rationale:
            "Cơ chế: Enterprise users dùng systems quy mô tổ chức lớn. Bẫy: thấy sales/agents thuộc doanh nghiệp nên chọn Enterprise. Khóa: ví dụ tập trung vào người dùng di chuyển.",
        },
        {
          id: "d",
          text: "Power",
          isCorrect: false,
          rationale:
            "Cơ chế: Power users cần năng lực computing mạnh cho công việc chuyên sâu. Bẫy: consultants/journalists có thể dùng nhiều công cụ. Khóa: danh sách của slide là Mobile users.",
        },
      ],
    },
    {
      id: "q6",
      stem: "Which statement best captures the relationship between data and information?",
      difficulty: "intermediate",
      conceptTested: "Data vs information depends on user and context",
      takeaway:
        "Data/information không cố định tuyệt đối; nó phụ thuộc user, context và decision need.",
      options: [
        {
          id: "a",
          text: "Data and information are always the same thing for every user.",
          isCorrect: false,
          rationale:
            "Cơ chế: cùng một file có thể là information với người này nhưng là data cho người khác. Bẫy: xem data/information là nhãn cố định. Khóa: context và user quyết định vai trò.",
        },
        {
          id: "b",
          text: "Information is data presented in a meaningful context for a user.",
          isCorrect: true,
          rationale:
            "Cơ chế: information là data có context/meaning cho người dùng. Bẫy: bỏ qua người dùng và mục đích quyết định. Khóa: meaningful context biến data thành information.",
        },
        {
          id: "c",
          text: "Raw facts automatically become information once stored in a database.",
          isCorrect: false,
          rationale:
            "Cơ chế: lưu trữ không tự tạo meaning. Bẫy: đồng nhất database với information. Khóa: cần processing hoặc context có nghĩa.",
        },
        {
          id: "d",
          text: "Information becomes useful only when it is as detailed as possible.",
          isCorrect: false,
          rationale:
            "Cơ chế: good information phải just sufficient, không phải càng nhiều càng tốt. Bẫy: nhầm detail với usefulness. Khóa: information overload làm giảm chất lượng quyết định.",
        },
      ],
    },
    {
      id: "q7",
      stem: "A manager receives hundreds of reports, many of which are unrelated to the decision being made. Which characteristic of good information is most clearly violated?",
      difficulty: "intermediate",
      conceptTested: "Good information: relevance and just sufficient",
      takeaway:
        "Good information phải relevant và just sufficient; quá nhiều thông tin không liên quan tạo overload.",
      options: [
        {
          id: "a",
          text: "Timely",
          isCorrect: false,
          rationale:
            "Cơ chế: Timely nói về đúng lúc. Bẫy: thấy manager cần quyết định nên nghĩ đến thời gian. Khóa: đề nhấn mạnh nhiều báo cáo không liên quan.",
        },
        {
          id: "b",
          text: "Relevant and just sufficient",
          isCorrect: true,
          rationale:
            "Cơ chế: reports không liên quan vi phạm relevance; hàng trăm reports còn vi phạm just sufficient. Bẫy: tưởng nhiều information là tốt. Khóa: good information phải đúng nội dung và vừa đủ.",
        },
        {
          id: "c",
          text: "Accurate",
          isCorrect: false,
          rationale:
            "Cơ chế: Accurate nói về đúng/sai của nội dung. Bẫy: báo cáo nhiều có thể có sai sót nhưng đề không nói sai. Khóa: vấn đề là unrelated và overload.",
        },
        {
          id: "d",
          text: "Worth its cost only",
          isCorrect: false,
          rationale:
            "Cơ chế: overload có thể làm information không worth its cost, nhưng dấu hiệu trực tiếp là relevance và sufficiency. Bẫy: chọn hệ quả xa hơn. Khóa: đọc đúng triệu chứng trong đề.",
        },
      ],
    },
    {
      id: "q8",
      stem: "A company buys a powerful software package but employees do not follow any shared procedures and managers do not change how work is coordinated. What is the best diagnosis?",
      difficulty: "advanced",
      conceptTested: "Information System requires technology, people, procedures, and organization",
      takeaway:
        "Mua software mới chỉ là mua IT; IS cần procedures, people và organization thay đổi cùng nó.",
      options: [
        {
          id: "a",
          text: "The company has successfully bought a complete information system.",
          isCorrect: false,
          rationale:
            "Cơ chế: mua software chưa đủ tạo IS hoàn chỉnh. Bẫy: đồng nhất software với IS. Khóa: IS cần people, procedures và organizational fit.",
        },
        {
          id: "b",
          text: "The company bought IT, but it has not yet built an effective IS.",
          isCorrect: true,
          rationale:
            "Cơ chế: software package là IT; shared procedures và coordination mới làm nó thành IS hữu hiệu. Bẫy: tưởng triển khai tool là xong. Khóa: buy IT, build/manage IS.",
        },
        {
          id: "c",
          text: "Procedures are unnecessary when software is powerful enough.",
          isCorrect: false,
          rationale:
            "Cơ chế: Procedures là instructions cho người và không bị thay thế hoàn toàn bởi software. Bẫy: tin technology tự giải quyết human side. Khóa: software cho máy, procedures cho người.",
        },
        {
          id: "d",
          text: "The only missing component is hardware.",
          isCorrect: false,
          rationale:
            "Cơ chế: đề không nói thiếu thiết bị vật lý. Bẫy: nghĩ system problem luôn là thiếu hardware. Khóa: thiếu ở human/organizational side.",
        },
      ],
    },
    {
      id: "q9",
      stem: "According to Carr's distinction, why might a widely available technology fail to create a lasting competitive advantage by itself?",
      difficulty: "advanced",
      conceptTested: "Carr: proprietary vs infrastructural technology",
      takeaway:
        "Infrastructural technology dễ trở thành commodity; advantage bền hơn thường đến từ cách tổ chức dùng và quản trị nó.",
      options: [
        {
          id: "a",
          text: "Because infrastructural technology can be accessed by many competitors.",
          isCorrect: true,
          rationale:
            "Cơ chế: khi technology trở thành infrastructural, nhiều đối thủ có thể mua/dùng nó. Bẫy: nghĩ technology mạnh tự động tạo advantage. Khóa: phổ cập làm advantage từ bản thân technology giảm.",
        },
        {
          id: "b",
          text: "Because all information technology is useless for business strategy.",
          isCorrect: false,
          rationale:
            "Cơ chế: Carr không nói IT vô dụng; ông phân biệt nguồn advantage. Bẫy: cực đoan hóa quan điểm. Khóa: IT vẫn quan trọng nhưng không phải mọi IT đều tạo advantage riêng.",
        },
        {
          id: "c",
          text: "Because proprietary technology is always cheaper than infrastructural technology.",
          isCorrect: false,
          rationale:
            "Cơ chế: proprietary/infrastructural không được phân biệt bằng rẻ hay đắt. Bẫy: kéo về cost. Khóa: phân biệt nằm ở mức độ kiểm soát riêng và phổ cập.",
        },
        {
          id: "d",
          text: "Because Moore's Law stopped affecting business computing.",
          isCorrect: false,
          rationale:
            "Cơ chế: Moore's Law liên quan cost/performance, không phải lý do chính trong Carr distinction. Bẫy: trộn hai khái niệm. Khóa: Carr tập trung vào commodity/infrastructure.",
        },
      ],
    },
    {
      id: "q10",
      stem: "Which pair correctly matches the two instruction-based components in the five-component framework?",
      difficulty: "intermediate",
      conceptTested: "Software vs Procedures",
      takeaway:
        "Software và Procedures đều là instructions, nhưng target khác nhau: machine vs human.",
      options: [
        {
          id: "a",
          text: "Software instructs people; procedures instruct hardware.",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là đảo ngược target. Bẫy: nhớ có hai loại instructions nhưng nhầm hướng. Khóa: Software → hardware; Procedures → people.",
        },
        {
          id: "b",
          text: "Software instructs hardware; procedures instruct people.",
          isCorrect: true,
          rationale:
            "Cơ chế: đúng mapping của five components. Bẫy: chữ instructions làm người học chọn Software cho mọi loại instructions. Khóa: tách target của instructions.",
        },
        {
          id: "c",
          text: "Data instructs hardware; people instruct procedures.",
          isCorrect: false,
          rationale:
            "Cơ chế: Data là raw material, không phải instruction set. Bẫy: nhìn thấy data đi vào máy nên tưởng data chỉ dẫn máy. Khóa: software/procedures mới là instruction-based components.",
        },
        {
          id: "d",
          text: "Hardware instructs software; data instructs people.",
          isCorrect: false,
          rationale:
            "Cơ chế: Hardware là vật lý, software mới chứa instructions cho hardware. Bẫy: đảo vai trò vật chứa và chỉ dẫn. Khóa: phân biệt component và chức năng.",
        },
      ],
    },
    {
      id: "q11",
      stem: "In the basic computer processing model, what is the usual sequence?",
      difficulty: "basic",
      conceptTested: "Input, processing, output",
      takeaway:
        "Mô hình nền của computer là Input data → Processing → Output information.",
      options: [
        {
          id: "a",
          text: "Input data, processing, output information",
          isCorrect: true,
          rationale:
            "Cơ chế: computer nhận data, xử lý, rồi tạo output có ý nghĩa hơn. Bẫy: nhớ rời rạc các thuật ngữ nhưng đảo thứ tự. Khóa: Input → Processing → Output.",
        },
        {
          id: "b",
          text: "Processing, input data, output information",
          isCorrect: false,
          rationale:
            "Cơ chế: Processing cần input trước. Bẫy: đặt hành động xử lý lên đầu. Khóa: phải có data đầu vào rồi mới processing.",
        },
        {
          id: "c",
          text: "Output information, input data, processing",
          isCorrect: false,
          rationale:
            "Cơ chế: Output không thể có trước input và processing. Bẫy: đọc theo sản phẩm mong muốn thay vì quy trình. Khóa: output là kết quả cuối.",
        },
        {
          id: "d",
          text: "Input procedures, output hardware, processing people",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là trộn component với processing model. Bẫy: lấy five components thay cho input-processing-output. Khóa: model này nói data → processing → information.",
        },
      ],
    },
  ],
  status: "ready",
  source:
    "Digital Technology in Business slides Topic 01 (Introduction to CBIS) + quiz-digi.pdf.",
};

const createPlaceholderTopic = (order: number): Chapter => {
  const topicNumber = String(order).padStart(2, "0");

  return {
    slug: `topic-${topicNumber}`,
    order,
    title: `Topic ${topicNumber}`,
    bigIdea:
      "Placeholder topic for Digital Technology in Business. Nội dung sẽ được soạn sau khi có spec chi tiết từ slide Topic 01-08 và quiz-digi.pdf.",
    learningObjectives: [],
    sections: [],
    questions: [],
    status: "placeholder",
    source: "Digital Technology in Business slides Topic 01-08 + quiz-digi.pdf",
  };
};

export const dtbChapters: Chapter[] = Array.from({ length: 8 }, (_, index) => {
  const order = index + 1;
  return order === 1 ? topic01 : createPlaceholderTopic(order);
});
