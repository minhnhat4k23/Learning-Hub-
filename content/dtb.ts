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
          "horizontal",
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
          "tree",
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
              parent: "s5-is",
              detail:
                "Technology cung cấp tools để xử lý, lưu trữ và truyền data.",
            },
            {
              id: "s5-people",
              label: "People",
              group: "term",
              parent: "s5-is",
              detail:
                "People dùng và diễn giải information để làm việc trong organization.",
            },
            {
              id: "s5-org",
              label: "Organizations",
              group: "term",
              parent: "s5-is",
              detail:
                "Organizations đặt mục tiêu, quy trình, cấu trúc và bối cảnh sử dụng IS.",
            },
          ],
          [
            { from: "s5-is", to: "s5-tech", label: "gồm" },
            { from: "s5-is", to: "s5-people", label: "gồm" },
            { from: "s5-is", to: "s5-org", label: "gồm" },
          ],
          "Information System được tạo bởi 3 chiều: People, Organizations và Technology — thiếu một chiều thì chưa thành IS.",
        ),
        calloutBlock(
          "insight",
          "Ba chiều gắn kết, không rời rạc",
          "Một hệ thống chỉ thành IS khi technology được gắn với people và organization để tạo information hữu ích. Ba chiều tương tác nhau: technology là công cụ cho people, people vận hành organization, còn organization định hướng technology cần dùng.",
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
          "horizontal",
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
          "horizontal",
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
          "insight",
          "Bẫy Carr & the future",
          "Không phải cứ đầu tư IT là có competitive advantage; khi technology trở thành infrastructural, lợi thế đến từ cách quản trị và sử dụng. Nhìn về tương lai: IT càng modular càng dễ innovate — công ty 'lý tưởng' hoài nghi IT, ưu tiên cái rẻ, có sẵn over-the-counter, open source, có thể outsource; lợi thế dài hạn nằm ở basic good management, không ở việc sở hữu IT đắt tiền.",
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

const topic02: Chapter = {
  slug: "topic-02",
  order: 2,
  title: "Topic 02 — Computer Hardware & Software",
  bigIdea:
    "Bạn — future business manager — không chế tạo máy tính, nhưng bạn quyết định mua/nâng cấp (câu hỏi $20,000 cho phòng ban). Hardware + Software + Data chính là mặt Technology của five-component IS ở Topic 01. Hiểu HW (Moore's Law: faster–cheaper–smaller–greater capacity) và SW (từ machine language → OS → applications, và các cách phân phối software) giúp bạn ra quyết định đầu tư IT tốt hơn: biết cái gì đáng tiền, cái gì sắp lỗi thời, cái gì 'free' mà vẫn có chi phí ẩn.",
  learningObjectives: [
    "Đặt Hardware/Software/Data trong ICT framework và nối lại với five-component IS (Topic 01).",
    "Diễn giải brief history + Moore's Law và hệ quả kinh tế (faster, cheaper, smaller, greater capacity; cost of data processing → ~0).",
    "Phân loại secondary storage (HDD / SSD / optical) theo các tiêu chí: capacity, cost, access speed, interface, media, portability, removability.",
    "Mô tả system unit: CPU = control unit + ALU; machine cycle; cache (L1/L2/L3); bus — và 4 yếu tố quyết định performance.",
    "Phân biệt memory: RAM vs ROM, volatile vs non-volatile, EEPROM; đơn vị lưu trữ (bit/byte, KB/MB/GB/TB).",
    "Nhận diện input / output / communications devices chính.",
    "Phân biệt machine / assembly / high-level language; compiler vs interpreter.",
    "Giải thích OS là gì + các chức năng (UI: GUI vs CLI; manage programs; manage memory/virtual memory; coordinate tasks; tools) và types of OS (desktop / server / mobile).",
    "Phân loại programs & apps + các hình thức phân phối software (retail / custom / freeware / shareware / open source / public domain / web app); nhận diện productivity, graphics/media, communications apps, security & system tools.",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "5 nhóm chủ đề (Hardware + Software); bấm từng chip để mở chi tiết và nhảy tới phần học.",
    nodes: [
      {
        id: "hwsw",
        label: "Hardware & Software",
        group: "concept",
        sectionId: "s0",
        detail:
          "HW + SW + Data = mặt Technology của five-component IS; bạn ra quyết định đầu tư IT (câu hỏi $20,000).",
      },

      {
        id: "g-found",
        label: "Nền tảng & lịch sử",
        group: "concept",
        sectionId: "s0",
        parent: "hwsw",
        detail: "ICT framework, lịch sử, Moore's Law.",
      },
      {
        id: "g-core",
        label: "Lưu trữ & xử lý",
        group: "concept",
        sectionId: "s3",
        parent: "hwsw",
        detail: "Secondary storage, CPU, memory, performance.",
      },
      {
        id: "g-io",
        label: "Nhập / Xuất",
        group: "concept",
        sectionId: "s7",
        parent: "hwsw",
        detail: "Input, output, communications devices.",
      },
      {
        id: "g-sys",
        label: "Ngôn ngữ & hệ điều hành",
        group: "concept",
        sectionId: "s9",
        parent: "hwsw",
        detail: "Computer language, compiler/interpreter, OS.",
      },
      {
        id: "g-app",
        label: "Phần mềm ứng dụng",
        group: "concept",
        sectionId: "s12",
        parent: "hwsw",
        detail: "Phân phối software, loại ứng dụng, security tools.",
      },

      {
        id: "c-ict",
        label: "ICT framework",
        group: "term",
        parent: "g-found",
        sectionId: "s0",
        detail: "HW + SW + Data = mặt Technology của five-component IS.",
      },
      {
        id: "c-hist",
        label: "History & Moore's Law",
        group: "term",
        parent: "g-found",
        sectionId: "s1",
        detail:
          "ENIAC 1946; transistor gấp đôi mỗi 24 tháng; cost of data processing → 0.",
      },
      {
        id: "c-hwmap",
        label: "Bức tranh phần cứng",
        group: "term",
        parent: "g-found",
        sectionId: "s2",
        detail: "4 nhóm chức năng: nhập, xử lý, xuất, lưu/truyền.",
      },

      {
        id: "c-storage",
        label: "Secondary storage",
        group: "term",
        parent: "g-core",
        sectionId: "s3",
        detail: "HDD / SSD / optical; EEPROM; các tiêu chí đánh giá.",
      },
      {
        id: "c-cpu",
        label: "System unit / CPU",
        group: "term",
        parent: "g-core",
        sectionId: "s4",
        detail: "Control unit + ALU; machine cycle; cache L1/L2/L3.",
      },
      {
        id: "c-mem",
        label: "Memory",
        group: "term",
        parent: "g-core",
        sectionId: "s5",
        detail: "RAM/ROM; volatile/non-volatile; bit/byte.",
      },
      {
        id: "c-perf",
        label: "Performance",
        group: "term",
        parent: "g-core",
        sectionId: "s6",
        detail: "4 yếu tố: processor, RAM, bus, cache.",
      },

      {
        id: "c-in",
        label: "Input devices",
        group: "term",
        parent: "g-io",
        sectionId: "s7",
        detail: "Keyboard, pointing, scanners OCR/OMR/RFID/MICR.",
      },
      {
        id: "c-out",
        label: "Output & comms",
        group: "term",
        parent: "g-io",
        sectionId: "s8",
        detail: "Display, printer; modem, router, NIC.",
      },

      {
        id: "c-lang",
        label: "Computer language",
        group: "term",
        parent: "g-sys",
        sectionId: "s9",
        detail: "Machine → assembly → HLL.",
      },
      {
        id: "c-comp",
        label: "Compiler vs Interpreter",
        group: "term",
        parent: "g-sys",
        sectionId: "s9b",
        detail: "Dịch trước (compiler) vs dịch từng dòng (interpreter).",
      },
      {
        id: "c-os",
        label: "Operating systems",
        group: "term",
        parent: "g-sys",
        sectionId: "s10",
        detail: "Chức năng OS; GUI/CLI; virtual memory/paging.",
      },
      {
        id: "c-ostypes",
        label: "Types of OS",
        group: "term",
        parent: "g-sys",
        sectionId: "s11",
        detail: "Desktop / server / mobile; open vs proprietary.",
      },

      {
        id: "c-dist",
        label: "Programs & distribution",
        group: "term",
        parent: "g-app",
        sectionId: "s12",
        detail:
          "Retail/custom/freeware/shareware/open source/public domain.",
      },
      {
        id: "c-cat",
        label: "App categories",
        group: "term",
        parent: "g-app",
        sectionId: "s13",
        detail: "Productivity / graphics & media / communications.",
      },
      {
        id: "c-sec",
        label: "Security & tools",
        group: "term",
        parent: "g-app",
        sectionId: "s14",
        detail: "Firewall, antivirus; disk/file/system tools.",
      },
      {
        id: "c-syn",
        label: "Tổng kết: câu hỏi $20,000",
        group: "concept",
        parent: "g-app",
        sectionId: "s15",
        detail: "HW + SW + Data + Network = quyết định đầu tư IT.",
      },
    ],
    edges: [
      { from: "hwsw", to: "g-found" },
      { from: "hwsw", to: "g-core" },
      { from: "hwsw", to: "g-io" },
      { from: "hwsw", to: "g-sys" },
      { from: "hwsw", to: "g-app" },
      { from: "g-found", to: "c-ict" },
      { from: "g-found", to: "c-hist" },
      { from: "g-found", to: "c-hwmap" },
      { from: "g-core", to: "c-storage" },
      { from: "g-core", to: "c-cpu" },
      { from: "g-core", to: "c-mem" },
      { from: "g-core", to: "c-perf" },
      { from: "g-io", to: "c-in" },
      { from: "g-io", to: "c-out" },
      { from: "g-sys", to: "c-lang" },
      { from: "g-sys", to: "c-comp" },
      { from: "g-sys", to: "c-os" },
      { from: "g-sys", to: "c-ostypes" },
      { from: "g-app", to: "c-dist" },
      { from: "g-app", to: "c-cat" },
      { from: "g-app", to: "c-sec" },
      { from: "g-app", to: "c-syn" },
    ],
  },
  sections: [
    {
      id: "s0",
      heading: "ICT framework & câu hỏi $20,000",
      blocks: [
        comparisonBlock(
          "ICT framework — 3 mảnh",
          ["", "Hardware", "Software", "Data"],
          [
            {
              label: "Định nghĩa",
              cells: [
                "Thiết bị hữu hình: input, output, secondary storage, processing, communications devices",
                "Chỉ thị bảo hardware làm gì",
                "Số/thông tin mà software dẫn dắt máy tác động lên",
              ],
            },
            {
              label: "Ví dụ",
              cells: [
                "Keyboard, CPU, HDD, modem",
                "OS, Word, Chrome",
                "File văn bản, database record, ảnh",
              ],
            },
            {
              label: "Communications layer",
              cells: [
                "Cable, modem, network card, router",
                "Chỉ thị cho thiết bị truyền",
                "Thông tin truyền giữa các máy",
              ],
            },
          ],
        ),
        calloutBlock(
          "key",
          "Nối lại với Topic 01",
          "HW/SW/Data chính là mặt Technology của five-component IS (Hardware – Software – Data – People – Procedures). Là business manager, bạn không lắp máy — nhưng bạn quyết định chi $20,000 cho phòng ban: mua gì, nâng cấp gì, và khi nào. Hiểu ICT framework = biết đặt câu hỏi đúng trước khi ký hợp đồng.",
        ),
      ],
      keyTerms: [
        {
          term: "Hardware",
          definition:
            "Thiết bị vật lý hữu hình của hệ thống máy tính: input, output, secondary storage, processing và communications devices.",
        },
        {
          term: "Software",
          definition:
            "Tập hợp chỉ thị (instructions) bảo phần cứng thực hiện các tác vụ cụ thể.",
        },
        {
          term: "Data",
          definition:
            "Số liệu/thông tin thô mà hệ thống máy tính tiếp nhận, xử lý và lưu trữ.",
        },
        {
          term: "ICT framework",
          definition:
            "Khung phân loại công nghệ thông tin gồm Hardware, Software và Data (cùng communications layer).",
        },
      ],
    },
    {
      id: "s1",
      heading: "Brief history & Moore's Law",
      blocks: [
        flowBlock(
          "s1",
          "Từ mainframe đến hậu-2010",
          "horizontal",
          [
            {
              id: "s1_main",
              label: "Mainframe",
              group: "concept",
              detail:
                "1950s: ENIAC (Feb 1946, ~17,000 vacuum tubes, ~30 tons, 150 kW), UNIVAC I (~1955), IBM mainframe (1957).",
            },
            {
              id: "s1_pc",
              label: "Rise of PC",
              group: "concept",
              detail: "1960s–1980s: máy tính cá nhân; xử lý phân tán.",
            },
            {
              id: "s1_cs",
              label: "Client/Server",
              group: "concept",
              detail: "1990s: client (máy trạm) + server kết nối mạng.",
            },
            {
              id: "s1_hosted",
              label: "Hosted",
              group: "concept",
              detail: "2000s: dịch vụ đặt thuê, cloud đầu tiên.",
            },
            {
              id: "s1_beyond",
              label: "Beyond 2010",
              group: "concept",
              detail: "Cloud, mobile, IoT; điện toán phân tán toàn cầu.",
            },
          ],
          [
            { from: "s1_main", to: "s1_pc" },
            { from: "s1_pc", to: "s1_cs" },
            { from: "s1_cs", to: "s1_hosted" },
            { from: "s1_hosted", to: "s1_beyond" },
          ],
          "Chuỗi eras phản ánh Moore's Law: mỗi giai đoạn máy nhỏ hơn, rẻ hơn, mạnh hơn.",
        ),
        calloutBlock(
          "insight",
          "Moore's Law & ý nghĩa kinh tế",
          "Số transistor trên chip gấp đôi mỗi 24 tháng → bốn hệ quả: faster/more powerful · greater capacity · smaller/more efficient · cheaper. Hệ quả business quan trọng nhất: cost of data processing tiến gần 0. Giới hạn tương lai: kích thước nguyên tử, quản lý nhiệt. Minh chứng: Samsung đạt tiến trình 3 nm (January 2019).",
        ),
      ],
      keyTerms: [
        {
          term: "ENIAC",
          definition:
            "Electronic Numerical Integrator and Computer — máy tính điện tử đầu tiên, vận hành lần đầu February 1946; ~17,000 vacuum tubes, ~1,800 sq ft, ~30 tons, 150 kW, 5,000 cycles/second.",
        },
        {
          term: "Moore's Law",
          definition:
            "Quan sát của Gordon Moore (1965): số transistor trên chip gấp đôi khoảng mỗi 24 tháng, dẫn đến tăng hiệu năng và giảm chi phí liên tục.",
        },
        {
          term: "transistor",
          definition:
            "Linh kiện bán dẫn siêu nhỏ dùng để khuếch đại/chuyển đổi tín hiệu điện; nền tảng của mọi chip hiện đại.",
        },
      ],
      examples: [
        {
          title: "ENIAC (1946)",
          body: "Máy tính điện tử đầu tiên chạy thực tế vào February 1946: sử dụng ~17,000 vacuum tubes, chiếm ~1,800 square feet (~167 m²), nặng ~30 tons, tiêu thụ 150 kW điện, tốc độ ~5,000 cycles/second.",
          meaning:
            "ENIAC là điểm khởi đầu của kỷ nguyên máy tính điện tử; mọi tiến bộ sau đó đều quy về xu hướng Moore's Law.",
        },
      ],
    },
    {
      id: "s2",
      heading: "Computer hardware: bức tranh tổng",
      blocks: [
        flowBlock(
          "s2",
          "Sơ đồ phần cứng cơ bản",
          "horizontal",
          [
            {
              id: "s2_input",
              label: "Input devices",
              group: "concept",
              detail:
                "Keyboard, mouse, scanner, microphone — chuyển dữ liệu/lệnh vào system unit.",
            },
            {
              id: "s2_cpu",
              label: "System unit (CPU)",
              group: "concept",
              detail:
                "Trung tâm xử lý: nhận dữ liệu từ input, xử lý theo SW, gửi kết quả ra output/storage.",
            },
            {
              id: "s2_output",
              label: "Output devices",
              group: "concept",
              detail: "Monitor, printer, speaker — trình bày kết quả xử lý.",
            },
            {
              id: "s2_storage",
              label: "Secondary storage",
              group: "concept",
              detail: "HDD, SSD, optical — lưu dữ liệu lâu dài (non-volatile).",
            },
            {
              id: "s2_network",
              label: "Network/Comms",
              group: "concept",
              detail:
                "Modem, router, NIC — kết nối với máy khác và Internet.",
            },
          ],
          [
            { from: "s2_input", to: "s2_cpu", label: "nhập" },
            { from: "s2_cpu", to: "s2_output", label: "xuất" },
            { from: "s2_cpu", to: "s2_storage", label: "lưu/đọc" },
            { from: "s2_cpu", to: "s2_network", label: "truyền" },
          ],
          "Mọi thiết bị phần cứng thuộc 1 trong 4 nhóm chức năng: nhập, xử lý, xuất, lưu/truyền.",
        ),
      ],
      keyTerms: [
        {
          term: "system unit",
          definition:
            "Vỏ máy chứa các thành phần xử lý chính: motherboard, CPU, RAM, power supply.",
        },
        {
          term: "peripheral",
          definition:
            "Thiết bị ngoại vi kết nối với system unit: keyboard, mouse, monitor, printer, v.v.",
        },
      ],
    },
    {
      id: "s3",
      heading: "Secondary storage: HDD vs SSD vs Optical",
      blocks: [
        comparisonBlock(
          "So sánh thiết bị lưu trữ thứ cấp",
          ["Tiêu chí", "HDD", "SSD", "Optical (CD/DVD/Blu-ray)"],
          [
            {
              label: "Cơ chế",
              cells: [
                "Đĩa kim loại quay, đầu đọc từ; dữ liệu = binary polarity",
                "EEPROM flash, không bộ phận chuyển động",
                "Phản xạ ánh sáng laser đọc vết pit/land",
              ],
            },
            {
              label: "Tốc độ truy cập",
              cells: [
                "Chậm hơn SSD (bộ phận cơ học)",
                "Nhanh nhất",
                "Chậm nhất",
              ],
            },
            {
              label: "Chi phí/GB",
              cells: [
                "Rẻ nhất",
                "Đắt hơn HDD",
                "Rẻ, nhưng dung lượng mỗi đĩa thấp",
              ],
            },
            {
              label: "Độ bền (va đập)",
              cells: [
                "Dễ hỏng (đầu đọc cơ học)",
                "Bền, không bộ phận chuyển động",
                "Dễ trầy xước",
              ],
            },
            {
              label: "Dung lượng điển hình",
              cells: ["500 GB – 4 TB", "[CẦN NGUỒN]", "[CẦN NGUỒN]"],
            },
            {
              label: "Tính di động",
              cells: [
                "Có (external HDD)",
                "Có (USB flash, external SSD)",
                "Có (đĩa rời)",
              ],
            },
            {
              label: "Interface",
              cells: ["SATA, USB", "SATA, NVMe, USB", "SATA, USB (external)"],
            },
          ],
        ),
        calloutBlock(
          "note",
          "EEPROM — nền tảng SSD/USB flash",
          "EEPROM (Electrically Erasable Programmable Read-Only Memory) là loại non-volatile memory có thể xoá và ghi lại bằng điện. SSD và USB flash drive đều xây trên EEPROM. SSHD (Solid State Hybrid Drive) = ổ kết hợp HDD + SSD cache nhỏ — cân bằng giữa giá và tốc độ.",
        ),
      ],
      keyTerms: [
        {
          term: "HDD",
          definition:
            "Hard Disk Drive — ổ đĩa cứng dùng đĩa kim loại quay và đầu đọc từ để lưu dữ liệu.",
        },
        {
          term: "SSD",
          definition:
            "Solid State Drive — ổ lưu trữ dùng EEPROM flash, không bộ phận chuyển động; nhanh hơn và bền hơn HDD khi va đập.",
        },
        {
          term: "optical drive",
          definition:
            "Ổ đĩa quang đọc/ghi dữ liệu bằng tia laser trên đĩa CD/DVD/Blu-ray.",
        },
        {
          term: "EEPROM",
          definition:
            "Electrically Erasable Programmable ROM — non-volatile memory có thể xoá và ghi lại bằng tín hiệu điện; nền tảng của SSD và USB flash.",
        },
        {
          term: "SSHD",
          definition:
            "Solid State Hybrid Drive — ổ kết hợp HDD (lưu trữ lớn) + SSD cache nhỏ (tăng tốc truy cập dữ liệu thường dùng).",
        },
      ],
    },
    {
      id: "s4",
      heading: "System unit: CPU, machine cycle, cache",
      blocks: [
        flowBlock(
          "s4",
          "Machine cycle",
          "horizontal",
          [
            {
              id: "s4_fetch",
              label: "Fetch",
              group: "concept",
              detail:
                "Control unit lấy instruction từ RAM (hoặc cache) vào register.",
            },
            {
              id: "s4_decode",
              label: "Decode",
              group: "concept",
              detail:
                "Control unit giải mã instruction để xác định tác vụ cần thực hiện.",
            },
            {
              id: "s4_execute",
              label: "Execute",
              group: "concept",
              detail:
                "ALU thực hiện phép tính/so sánh; hoặc control unit điều phối tác vụ khác.",
            },
            {
              id: "s4_store",
              label: "Store",
              group: "concept",
              detail:
                "Kết quả ghi lại vào RAM hoặc register; chu kỳ tiếp theo bắt đầu.",
            },
          ],
          [
            { from: "s4_fetch", to: "s4_decode" },
            { from: "s4_decode", to: "s4_execute" },
            { from: "s4_execute", to: "s4_store" },
          ],
          "Fetch → Decode → Execute → Store: một machine cycle hoàn chỉnh. CPU thực hiện hàng tỷ chu kỳ mỗi giây.",
        ),
        calloutBlock(
          "key",
          "Cache & độ trễ",
          "Cache là bộ nhớ nhỏ, cực nhanh nằm ngay trong/gần CPU — giảm thời gian chờ khi fetch instruction/data so với RAM. Đa cấp: L1 (nhỏ nhất, nhanh nhất, gần core nhất), L2, L3. Fetch từ L3 lâu gấp ~10 lần so với L1. Mục tiêu: giữ data 'hot' ở L1 để CPU không phải chờ RAM.",
        ),
      ],
      keyTerms: [
        {
          term: "CPU",
          definition:
            "Central Processing Unit — bộ xử lý trung tâm; gồm control unit và ALU.",
        },
        {
          term: "control unit",
          definition:
            "Thành phần của CPU điều phối hầu hết các hoạt động: fetch, decode, điều phối execute và store.",
        },
        {
          term: "ALU",
          definition:
            "Arithmetic/Logic Unit — thực hiện phép toán số học (cộng/trừ/nhân/chia) và phép so sánh logic.",
        },
        {
          term: "machine cycle",
          definition:
            "Một vòng lặp cơ bản của CPU: Fetch → Decode → Execute → Store.",
        },
        {
          term: "cache",
          definition:
            "Bộ nhớ nhỏ, tốc độ cao gắn trong/gần CPU; lưu tạm instruction và data hay dùng để giảm độ trễ truy cập RAM.",
        },
        {
          term: "bus",
          definition:
            "Đường dẫn dữ liệu nội bộ kết nối CPU, RAM, và các thiết bị; tốc độ và độ rộng bus ảnh hưởng performance.",
        },
      ],
    },
    {
      id: "s5",
      heading: "Memory & đơn vị lưu trữ",
      blocks: [
        comparisonBlock(
          "Phân loại memory",
          ["Tiêu chí", "RAM", "ROM", "EEPROM"],
          [
            {
              label: "Volatile / Non-volatile",
              cells: [
                "Volatile (dynamic) — mất dữ liệu khi mất điện",
                "Non-volatile (static) — giữ dữ liệu khi mất điện",
                "Non-volatile — giữ dữ liệu khi mất điện",
              ],
            },
            {
              label: "Ghi lại được?",
              cells: [
                "Có (read/write tự do)",
                "Không (chỉ đọc)",
                "Có (xoá/ghi bằng điện)",
              ],
            },
            {
              label: "Vai trò",
              cells: [
                "Bộ nhớ làm việc chính; chứa OS, apps, data đang chạy. Điển hình 4–8 GB.",
                "Chứa firmware, boot instructions (BIOS/UEFI); nhà sản xuất ghi sẵn.",
                "Flash drive, SSD; lưu trữ lâu dài có thể ghi lại.",
              ],
            },
          ],
        ),
        calloutBlock(
          "trap",
          "Static/Dynamic ≠ trực giác",
          "Dễ nhầm: 'Static RAM' (SRAM) ≠ non-volatile. Static ở đây chỉ nghĩa là không cần refresh liên tục — SRAM vẫn volatile (mất khi mất điện). 'Dynamic RAM' (DRAM) cần refresh liên tục. Non-volatile mới = giữ khi mất điện (ROM, EEPROM). RAM 4–8 GB điển hình; byte = 8 bit; KB (thousands) / MB (millions) / GB (billions) / TB (trillions).",
        ),
      ],
      keyTerms: [
        {
          term: "RAM",
          definition:
            "Random Access Memory — bộ nhớ làm việc chính, volatile; nội dung bị xoá khi tắt máy.",
        },
        {
          term: "ROM",
          definition:
            "Read-Only Memory — bộ nhớ chỉ đọc, non-volatile; chứa firmware được nhà sản xuất ghi sẵn.",
        },
        {
          term: "volatile",
          definition:
            "Tính chất mất dữ liệu khi mất nguồn điện (đặc trưng của RAM).",
        },
        {
          term: "non-volatile",
          definition:
            "Tính chất giữ dữ liệu khi mất nguồn điện (ROM, EEPROM, HDD, SSD).",
        },
        {
          term: "bit",
          definition: "Đơn vị thông tin nhỏ nhất: giá trị 0 hoặc 1.",
        },
        {
          term: "byte",
          definition:
            "Nhóm 8 bit; đơn vị lưu trữ cơ bản. 1 KB ≈ 1,000 bytes; 1 MB ≈ 1,000,000 bytes; 1 GB ≈ 1 tỷ bytes; 1 TB ≈ 1 nghìn tỷ bytes.",
        },
      ],
    },
    {
      id: "s6",
      heading: "Yếu tố quyết định performance",
      blocks: [
        flowBlock(
          "s6",
          "4 yếu tố performance",
          "horizontal",
          [
            {
              id: "s6_hub",
              label: "System performance",
              group: "concept",
              detail:
                "Tổng thể hiệu năng hệ thống — bị chi phối bởi 4 yếu tố phần cứng.",
            },
            {
              id: "s6_proc",
              label: "Processor speed",
              group: "concept",
              detail:
                "Clock speed (GHz) — số chu kỳ máy/giây; cao hơn = nhanh hơn nhưng sinh nhiệt nhiều hơn.",
            },
            {
              id: "s6_ram",
              label: "RAM speed & capacity",
              group: "concept",
              detail:
                "Nhiều RAM → chứa được nhiều apps đồng thời; RAM nhanh → CPU không phải chờ.",
            },
            {
              id: "s6_bus",
              label: "Bus speed & width",
              group: "concept",
              detail:
                "Bus rộng (bits/lần) và nhanh (MHz) → truyền nhiều dữ liệu hơn mỗi chu kỳ.",
            },
            {
              id: "s6_cache",
              label: "Cache capacity & speed",
              group: "concept",
              detail:
                "Cache lớn hơn = ít phải đọc RAM hơn; giảm bottleneck giữa CPU và RAM.",
            },
          ],
          [
            { from: "s6_hub", to: "s6_proc" },
            { from: "s6_hub", to: "s6_ram" },
            { from: "s6_hub", to: "s6_bus" },
            { from: "s6_hub", to: "s6_cache" },
          ],
        ),
        calloutBlock(
          "insight",
          "Tradeoffs — 'other things are never equal'",
          "Thiết kế/chọn mua máy tính là bài toán đánh đổi: CPU nhanh hơn → sinh nhiệt nhiều hơn; RAM nhiều hơn → tiêu điện hơn; bus rộng hơn → bo mạch phức tạp hơn. Hiểu 4 yếu tố này giúp bạn đặt câu hỏi đúng khi phê duyệt ngân sách IT: 'Bottleneck của chúng ta nằm ở đâu?'",
        ),
      ],
      keyTerms: [
        {
          term: "clock speed",
          definition:
            "Tốc độ xung nhịp của CPU (Hz/GHz) — số machine cycles thực hiện được mỗi giây.",
        },
        {
          term: "bus",
          definition:
            "Đường dẫn dữ liệu kết nối các thành phần; đặc trưng bởi tốc độ và độ rộng (số bit truyền mỗi lần).",
        },
        {
          term: "cache",
          definition:
            "Bộ nhớ siêu nhanh gần CPU; L1/L2/L3; tăng dung lượng cache giảm thời gian chờ RAM.",
        },
      ],
    },
    {
      id: "s7",
      heading: "Input devices",
      blocks: [
        flowBlock(
          "s7",
          "Các nhóm input device",
          "horizontal",
          [
            {
              id: "s7_hub",
              label: "Input",
              group: "concept",
              detail:
                "Thiết bị nhập chuyển dữ liệu/lệnh từ người dùng hoặc môi trường vào system unit.",
            },
            {
              id: "s7_key",
              label: "Keyboard",
              group: "concept",
              detail:
                "Ergonomic keyboard giảm chấn thương; nhập ký tự và lệnh.",
            },
            {
              id: "s7_point",
              label: "Pointing / Touch",
              group: "concept",
              detail:
                "Mouse, touchpad, trackball; touch screen, pen/stylus, graphics tablet.",
            },
            {
              id: "s7_motion",
              label: "Motion/Voice/Video",
              group: "concept",
              detail:
                "Gesture recognition, speech recognition, webcam, videoconference camera.",
            },
            {
              id: "s7_scan",
              label: "Scanners & readers",
              group: "concept",
              detail:
                "Flatbed scanner, OCR (text), OMR (bubbles), bar code/QR, RFID (radio), magstripe, MICR (ngân hàng).",
            },
          ],
          [
            { from: "s7_hub", to: "s7_key" },
            { from: "s7_hub", to: "s7_point" },
            { from: "s7_hub", to: "s7_motion" },
            { from: "s7_hub", to: "s7_scan" },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "input",
          definition:
            "Dữ liệu hoặc lệnh nhập vào máy tính từ người dùng hoặc thiết bị ngoại vi.",
        },
        {
          term: "OCR",
          definition:
            "Optical Character Recognition — nhận dạng ký tự in/viết bằng ánh sáng quét.",
        },
        {
          term: "OMR",
          definition:
            "Optical Mark Recognition — đọc dấu chì/mực trên phiếu trắc nghiệm, phiếu điều tra.",
        },
        {
          term: "RFID",
          definition:
            "Radio Frequency Identification — nhận diện đối tượng qua sóng radio không tiếp xúc; dùng trong logistics, thẻ từ.",
        },
        {
          term: "MICR",
          definition:
            "Magnetic Ink Character Recognition — đọc ký tự mực từ tính; dùng trên séc ngân hàng.",
        },
        {
          term: "voice recognition",
          definition:
            "Công nghệ nhận dạng giọng nói chuyển âm thanh thành văn bản hoặc lệnh.",
        },
      ],
    },
    {
      id: "s8",
      heading: "Output & communications devices",
      blocks: [
        comparisonBlock(
          "Output & Communications devices",
          ["", "Output", "Communications"],
          [
            {
              label: "Thiết bị chính",
              cells: [
                "Display/monitor (LCD); printers (non-impact: ink-jet, photo, laser, all-in-one, plotter; impact); speakers",
                "Broadband modem (cable/DSL), wireless modem, WAP, router, NIC, hub, switch",
              ],
            },
            {
              label: "Chỉ số chất lượng",
              cells: [
                "Display: resolution, response time, refresh rate, contrast ratio, brightness",
                "Modem: bandwidth (Mbps); router: wired/wireless",
              ],
            },
            {
              label: "Ghi chú",
              cells: [
                "Non-impact printer: không tiếp xúc giấy khi in (laser, ink-jet). Impact: tiếp xúc vật lý (đầu kim).",
                "Chi tiết giao thức mạng → Topic 03. Ở đây chỉ nhận diện thiết bị.",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "non-impact printer",
          definition:
            "Máy in không tiếp xúc trực tiếp với giấy: ink-jet, laser, photo printer.",
        },
        {
          term: "modem",
          definition:
            "Thiết bị chuyển đổi tín hiệu số ↔ analog để truyền qua đường dây cáp/điện thoại.",
        },
        {
          term: "WAP",
          definition:
            "Wireless Access Point — thiết bị phát Wi-Fi, kết nối thiết bị không dây vào mạng có dây.",
        },
        {
          term: "router",
          definition:
            "Thiết bị định tuyến gói tin giữa các mạng; wireless router = WAP + router.",
        },
        {
          term: "network card",
          definition:
            "NIC (Network Interface Card) — card mạng cho phép máy tính kết nối vào LAN.",
        },
        {
          term: "hub",
          definition:
            "Thiết bị đơn giản gửi tín hiệu ra mọi cổng (broadcast); kém hiệu quả hơn switch.",
        },
        {
          term: "switch",
          definition:
            "Thiết bị chuyển mạch thông minh: gửi gói tin đúng cổng đích (unicast); hiệu quả hơn hub.",
        },
      ],
    },
    {
      id: "s9",
      heading: "Computer language: ML → Assembly → HLL",
      blocks: [
        flowBlock(
          "s9",
          "Các cấp ngôn ngữ & dịch",
          "horizontal",
          [
            {
              id: "s9_ml",
              label: "Machine language",
              group: "concept",
              detail:
                "Chuỗi bit 0/1; CPU thực thi trực tiếp. ~100–200 loại instruction trên máy hiện đại.",
            },
            {
              id: "s9_asm",
              label: "Assembly language",
              group: "concept",
              detail:
                "Mnemonics gần tiếng Anh (ADD, MOV); cần Assembler dịch sang machine language. Phụ thuộc platform.",
            },
            {
              id: "s9_hll",
              label: "High-level language",
              group: "concept",
              detail:
                "Python, Java, C, COBOL — đọc gần ngôn ngữ người. Cần Compiler hoặc Interpreter.",
            },
          ],
          [
            { from: "s9_ml", to: "s9_asm", label: "assembler" },
            { from: "s9_asm", to: "s9_hll", label: "compiler/interp." },
          ],
          "Chiều mũi tên = trừu tượng hoá tăng dần; cạnh ghi công cụ dịch.",
        ),
      ],
      keyTerms: [
        {
          term: "machine language",
          definition:
            "Ngôn ngữ máy — tập hợp bit 0/1 mà CPU thực thi trực tiếp; duy nhất hardware hiểu.",
        },
        {
          term: "instruction set",
          definition:
            "Tập các loại lệnh cơ bản mà một CPU có thể thực hiện; máy hiện đại có ~100–200 loại instruction.",
        },
        {
          term: "assembly language",
          definition:
            "Ngôn ngữ cấp thấp dùng từ gợi nhớ (mnemonics) thay cho bit; cần assembler dịch sang machine language.",
        },
        {
          term: "HLL",
          definition:
            "High-Level Language — ngôn ngữ lập trình gần ngôn ngữ người (Python, Java, C); cần compiler hoặc interpreter.",
        },
      ],
    },
    {
      id: "s9b",
      heading: "Compiler vs Interpreter",
      blocks: [
        comparisonBlock(
          "Compiler vs Interpreter",
          ["Tiêu chí", "Compiler", "Interpreter"],
          [
            {
              label: "Cơ chế",
              cells: [
                "Dịch toàn bộ source code (HLL) → object code một lần trước khi chạy",
                "Dịch và chạy từng dòng tại thời điểm thực thi; cần interpreter ở runtime",
              ],
            },
            {
              label: "Output",
              cells: [
                "File thực thi độc lập — chạy không cần compiler",
                "Không tạo file độc lập — phải có interpreter mỗi lần chạy",
              ],
            },
            {
              label: "Tốc độ",
              cells: [
                "Chạy nhanh hơn (đã dịch trước)",
                "Chậm hơn (dịch lại mỗi lần)",
              ],
            },
            {
              label: "Ví dụ",
              cells: ["C, C++, Go", "Python (script mode), Ruby"],
            },
          ],
        ),
        calloutBlock(
          "key",
          "Compiler hay interpreter — ảnh hưởng gì tới business?",
          "Phần mềm compiled (C/C++/Go) chạy nhanh và phân phối dưới dạng file thực thi — không lộ source code, bảo vệ tài sản trí tuệ. Phần mềm interpreted (Python/Ruby/JavaScript) dễ sửa nhanh và chạy đa nền tảng, nhưng cần runtime/interpreter cài sẵn ở máy đích. Chọn ngôn ngữ = đánh đổi giữa tốc độ thực thi · bảo mật mã nguồn · tốc độ phát triển.",
        ),
      ],
      keyTerms: [
        {
          term: "compiler",
          definition:
            "Chương trình dịch toàn bộ source code (HLL) thành object code (machine code) trước khi thực thi.",
        },
        {
          term: "interpreter",
          definition:
            "Chương trình dịch và thực thi source code từng dòng tại runtime; cần có mặt mỗi khi chương trình chạy.",
        },
        {
          term: "source code",
          definition:
            "Code do lập trình viên viết ở ngôn ngữ cấp cao trước khi được compiler/interpreter xử lý.",
        },
        {
          term: "object code",
          definition:
            "Machine code do compiler tạo ra từ source code; có thể thực thi trực tiếp hoặc link thêm thư viện.",
        },
      ],
    },
    {
      id: "s10",
      heading: "OS là gì & các chức năng",
      blocks: [
        flowBlock(
          "s10",
          "Chức năng của OS",
          "horizontal",
          [
            {
              id: "s10_hub",
              label: "Operating System",
              group: "concept",
              detail:
                "Phần mềm hệ thống điều phối toàn bộ phần cứng và phần mềm; nền tảng cho mọi ứng dụng.",
            },
            {
              id: "s10_boot",
              label: "Start / shutdown",
              group: "concept",
              detail:
                "Khởi động và tắt máy an toàn; quản lý sleep/hibernate.",
            },
            {
              id: "s10_ui",
              label: "User interface",
              group: "concept",
              detail:
                "GUI (menu, icon, cửa sổ) hoặc CLI (gõ lệnh); cầu nối người dùng ↔ phần cứng.",
            },
            {
              id: "s10_prog",
              label: "Manage programs",
              group: "concept",
              detail:
                "Single/multi tasking; foreground/background processes; single/multi user.",
            },
            {
              id: "s10_mem",
              label: "Manage memory",
              group: "concept",
              detail:
                "Cấp phát RAM cho apps; virtual memory (paging: swap RAM ↔ storage).",
            },
            {
              id: "s10_coord",
              label: "Coordinate tasks",
              group: "concept",
              detail:
                "Lập lịch CPU, quản lý I/O, điều phối device drivers.",
            },
            {
              id: "s10_tools",
              label: "Tools & admin",
              group: "concept",
              detail:
                "Performance monitor, file management, Internet setup, device config, update.",
            },
          ],
          [
            { from: "s10_hub", to: "s10_boot" },
            { from: "s10_hub", to: "s10_ui" },
            { from: "s10_hub", to: "s10_prog" },
            { from: "s10_hub", to: "s10_mem" },
            { from: "s10_hub", to: "s10_coord" },
            { from: "s10_hub", to: "s10_tools" },
          ],
        ),
        calloutBlock(
          "key",
          "GUI vs CLI & virtual memory",
          "GUI (Graphical User Interface): điều khiển bằng icon, menu, cửa sổ — thân thiện, ít đường cong học. CLI (Command-Line Interface): gõ lệnh từ bàn phím — mạnh hơn, linh hoạt cho admin. Virtual memory: phần storage đóng vai RAM phụ — khi RAM đầy, OS tự swap (paging) data ít dùng ra HDD/SSD; cho phép chạy nhiều app hơn RAM vật lý.",
        ),
      ],
      keyTerms: [
        {
          term: "operating system",
          definition:
            "Phần mềm hệ thống quản lý toàn bộ tài nguyên máy tính và cung cấp nền tảng cho ứng dụng.",
        },
        {
          term: "user interface",
          definition:
            "Cơ chế tương tác giữa người dùng và máy tính: GUI hoặc CLI.",
        },
        {
          term: "GUI",
          definition:
            "Graphical User Interface — giao diện đồ hoạ dùng icon, menu, cửa sổ, con trỏ chuột.",
        },
        {
          term: "command-line interface",
          definition:
            "CLI — giao diện dòng lệnh; người dùng gõ lệnh text để điều khiển OS.",
        },
        {
          term: "multitasking",
          definition:
            "Khả năng OS chạy nhiều programs/tasks đồng thời (hoặc gần đồng thời bằng time-slicing).",
        },
        {
          term: "virtual memory",
          definition:
            "Kỹ thuật mở rộng RAM ảo bằng cách dùng một phần secondary storage làm RAM phụ.",
        },
        {
          term: "paging",
          definition:
            "Trong virtual memory: quá trình swap các 'trang' dữ liệu giữa RAM và storage khi cần.",
        },
        {
          term: "performance monitor",
          definition:
            "Tool của OS theo dõi CPU, RAM, disk, network usage theo thời gian thực.",
        },
        {
          term: "user account",
          definition:
            "Hồ sơ người dùng với username/password; OS quản lý quyền truy cập tài nguyên theo account.",
        },
      ],
    },
    {
      id: "s11",
      heading: "Types of OS: desktop / server / mobile",
      blocks: [
        comparisonBlock(
          "Phân loại OS",
          ["Tiêu chí", "Desktop", "Server", "Mobile"],
          [
            {
              label: "Hệ điều hành",
              cells: [
                "Windows, Mac OS (OS X), UNIX, Linux, Chrome OS",
                "Windows Server, macOS Server, UNIX, Linux",
                "Android (Google), iOS (Apple), Windows Phone (Microsoft)",
              ],
            },
            {
              label: "Đặc điểm",
              cells: [
                "Chạy trên PC/laptop; hỗ trợ single/multi user",
                "Hỗ trợ nhiều user đồng thời; quản lý mạng, user accounts, quyền truy cập",
                "Cài sẵn trên firmware thiết bị di động; tối ưu touch, pin, kết nối di động",
              ],
            },
            {
              label: "Open source?",
              cells: [
                "Linux, Chrome OS = open source; Windows, Mac OS = proprietary",
                "Linux = open source; UNIX, Windows Server = proprietary",
                "Android = open source (Linux-based); iOS, Windows Phone = proprietary",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Mở (open source) vs đóng (proprietary)",
          "Open source (Linux, Android): source code công khai, ai cũng có thể xem/sửa/phân phối lại — cộng đồng cùng phát triển, chi phí license thường 0. Proprietary (Windows, iOS): source code bí mật, bản quyền thuộc công ty — mua license mới dùng. UNIX phát triển đầu thập niên 1970s; Linux là UNIX-based.",
        ),
      ],
      keyTerms: [
        {
          term: "desktop OS",
          definition:
            "Hệ điều hành dành cho PC/laptop: Windows, Mac OS (OS X), Linux, Chrome OS.",
        },
        {
          term: "server OS",
          definition:
            "Hệ điều hành tối ưu để chạy trên máy chủ, quản lý mạng và nhiều user đồng thời.",
        },
        {
          term: "mobile OS",
          definition:
            "Hệ điều hành dành cho thiết bị di động (smartphone/tablet): Android, iOS, Windows Phone.",
        },
        {
          term: "open source",
          definition:
            "Phần mềm có source code công khai, cho phép xem, sửa và phân phối lại.",
        },
        {
          term: "proprietary",
          definition:
            "Phần mềm có source code bí mật, bản quyền thuộc về công ty phát triển.",
        },
        {
          term: "firmware",
          definition:
            "Phần mềm nhúng cố định trên chip hardware (ROM/flash); mobile OS thường cài qua firmware.",
        },
      ],
    },
    {
      id: "s12",
      heading: "Programs & apps + phân phối software",
      blocks: [
        flowBlock(
          "s12",
          "Các hình thức phân phối software",
          "horizontal",
          [
            {
              id: "s12_hub",
              label: "Software distribution",
              group: "concept",
              detail:
                "Cách nhà phát triển đưa phần mềm đến người dùng — ảnh hưởng giá, quyền sở hữu, tùy chỉnh.",
            },
            {
              id: "s12_retail",
              label: "Retail",
              group: "concept",
              detail:
                "Mua đóng hộp/tải về; trả tiền license; bản quyền thuộc hãng.",
            },
            {
              id: "s12_custom",
              label: "Custom",
              group: "concept",
              detail:
                "Đặt làm riêng cho tổ chức; đắt nhưng khớp hoàn toàn nhu cầu.",
            },
            {
              id: "s12_web",
              label: "Web/Mobile app",
              group: "concept",
              detail:
                "Web app chạy trên browser; mobile app cài từ store; mobile web app = web tối ưu mobile.",
            },
            {
              id: "s12_share",
              label: "Shareware",
              group: "concept",
              detail:
                "Dùng thử miễn phí có giới hạn thời gian/tính năng; trả tiền để mở khoá.",
            },
            {
              id: "s12_free",
              label: "Freeware",
              group: "concept",
              detail: "Miễn phí sử dụng; KHÔNG được sửa source code.",
            },
            {
              id: "s12_oss",
              label: "Open source",
              group: "concept",
              detail:
                "Miễn phí + được xem/sửa/phân phối lại source code (Linux, Firefox).",
            },
            {
              id: "s12_pd",
              label: "Public domain",
              group: "concept",
              detail:
                "Tác giả hiến tặng toàn bộ quyền; tự do sửa/dùng/phân phối.",
            },
          ],
          [
            { from: "s12_hub", to: "s12_retail" },
            { from: "s12_hub", to: "s12_custom" },
            { from: "s12_hub", to: "s12_web" },
            { from: "s12_hub", to: "s12_share" },
            { from: "s12_hub", to: "s12_free" },
            { from: "s12_hub", to: "s12_oss" },
            { from: "s12_hub", to: "s12_pd" },
          ],
        ),
        calloutBlock(
          "insight",
          "'Free' không miễn phí hoàn toàn",
          "Freeware = miễn phí dùng nhưng KHÔNG cho sửa code (VLC, Zoom free tier). Open source ≠ miễn phí bắt buộc — nhưng cho sửa/phân phối lại code (Linux, LibreOffice). Public domain = tự do tuyệt đối kể cả bán lại. Phân biệt: Program (bất kỳ tập lệnh) → Application (program giải quyết vấn đề end-user) → System software (OS + utilities, không phải ứng dụng end-user).",
        ),
      ],
      keyTerms: [
        {
          term: "program",
          definition:
            "Bộ chỉ thị (instructions) để máy tính thực hiện một tác vụ.",
        },
        {
          term: "application",
          definition:
            "Chương trình giải quyết nhu cầu cụ thể của người dùng cuối.",
        },
        {
          term: "system software",
          definition:
            "Phần mềm quản lý tài nguyên máy tính (OS, utilities); khác với application software.",
        },
        {
          term: "retail software",
          definition: "Phần mềm bán thương mại, có license phí.",
        },
        {
          term: "custom software",
          definition:
            "Phần mềm đặt lập trình riêng theo yêu cầu tổ chức.",
        },
        {
          term: "shareware",
          definition:
            "Phần mềm dùng thử miễn phí có thời hạn/tính năng giới hạn; cần trả tiền để sử dụng đầy đủ.",
        },
        {
          term: "freeware",
          definition:
            "Phần mềm miễn phí sử dụng; không cho phép sửa source code.",
        },
        {
          term: "open source software",
          definition:
            "Phần mềm cho phép xem, sửa và phân phối lại source code.",
        },
        {
          term: "public domain software",
          definition:
            "Phần mềm tác giả từ bỏ toàn bộ bản quyền; tự do sử dụng, sửa, phân phối.",
        },
        {
          term: "web app",
          definition:
            "Ứng dụng chạy trên trình duyệt web, không cần cài đặt.",
        },
      ],
    },
    {
      id: "s13",
      heading: "Loại ứng dụng: productivity / graphics / communications",
      blocks: [
        comparisonBlock(
          "Phân loại ứng dụng phổ biến",
          ["", "Productivity", "Graphics & Media", "Communications"],
          [
            {
              label: "Ứng dụng tiêu biểu",
              cells: [
                "Word processing, presentation, spreadsheet, database, note taking, calendar/contact, project management, accounting, personal finance, legal, tax, document management, enterprise computing",
                "CAD, desktop publishing (DTP), paint/image editing, photo editing, video/audio editing, multimedia & website authoring, media player, disc burning",
                "Email, web browsing, chat, blog, VoIP/Internet phone, instant/mobile messaging, videoconference, web feeds, file transfer",
              ],
            },
            {
              label: "Mục đích",
              cells: [
                "Tăng năng suất công việc văn phòng và quản lý doanh nghiệp",
                "Tạo/chỉnh sửa nội dung số: đồ hoạ, âm thanh, video",
                "Kết nối và trao đổi thông tin giữa người với người",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "productivity application",
          definition:
            "Phần mềm tăng hiệu suất công việc: word, spreadsheet, presentation, database, v.v.",
        },
        {
          term: "software suite",
          definition:
            "Gói ứng dụng đóng gói chung (Microsoft 365, Google Workspace) — mua 1 lần được nhiều app.",
        },
        {
          term: "CAD",
          definition:
            "Computer-Aided Design — phần mềm thiết kế kỹ thuật/kiến trúc; cho phép xoay 3D, xem từ mọi góc.",
        },
        {
          term: "website authoring",
          definition:
            "Phần mềm tạo trang web đầy đủ tính năng (graphics, video, audio, animation) mà không cần lập trình từ đầu.",
        },
        {
          term: "project management",
          definition:
            "Phần mềm lên kế hoạch, lịch trình, theo dõi, phân tích sự kiện–nguồn lực–chi phí của dự án.",
        },
        {
          term: "spreadsheet",
          definition:
            "Phần mềm bảng tính (Excel, Google Sheets) — phân tích số liệu, xây dựng mô hình tài chính.",
        },
      ],
    },
    {
      id: "s14",
      heading: "Security & system tools",
      blocks: [
        comparisonBlock(
          "Công cụ bảo mật & hệ thống",
          ["", "Security tools", "File/Disk/System tools"],
          [
            {
              label: "Công cụ",
              cells: [
                "Personal firewall, antivirus, spyware remover, adware remover, anti-spam, web filtering, phishing filter, pop-up/pop-under blocker",
                "File manager, search tool, image viewer, uninstaller, disk cleanup, disk defragmenter, screen saver, file compression, PC maintenance, backup & restore",
              ],
            },
            {
              label: "Mục đích",
              cells: [
                "Bảo vệ máy tính & dữ liệu khỏi mối đe doạ an ninh",
                "Quản lý, tối ưu và duy trì hệ thống",
              ],
            },
          ],
        ),
        calloutBlock(
          "realworld",
          "Spyware vs Adware",
          "Spyware: phần mềm lén cài vào máy, thu thập thông tin người dùng (mật khẩu, thói quen duyệt web) và gửi ra ngoài mà không được phép. Adware: tự động hiển thị quảng cáo banner/pop-up — phiền nhưng ít nguy hiểm hơn spyware. Cả hai cần có spyware remover / adware remover chạy định kỳ.",
        ),
      ],
      keyTerms: [
        {
          term: "firewall",
          definition:
            "Phần mềm/phần cứng lọc lưu lượng mạng, chặn truy cập trái phép vào/ra máy tính.",
        },
        {
          term: "antivirus",
          definition:
            "Phần mềm phát hiện và loại bỏ virus, malware khỏi hệ thống.",
        },
        {
          term: "spyware",
          definition:
            "Phần mềm gián điệp lén thu thập thông tin người dùng và gửi cho bên thứ ba.",
        },
        {
          term: "adware",
          definition:
            "Phần mềm tự động hiển thị quảng cáo không mong muốn trên màn hình.",
        },
        {
          term: "disk defragmenter",
          definition:
            "Công cụ sắp xếp lại các phần dữ liệu phân mảnh trên HDD để tăng tốc truy cập.",
        },
        {
          term: "backup/restore tool",
          definition:
            "Công cụ sao lưu định kỳ và khôi phục dữ liệu khi cần.",
        },
      ],
    },
    {
      id: "s15",
      heading: "Tổng kết Part 2: quay lại câu hỏi $20,000",
      blocks: [
        calloutBlock(
          "realworld",
          "'Upgrade problem' — quyết định của YOU",
          "Khi mua laptop/desktop cho phòng ban, bạn cân nhắc: brand/model · processor speed & type · RAM capacity · HDD/SSD capacity & speed · cache · display quality (resolution, size) · Wi-Fi/Bluetooth/camera/fingerprint · input devices · output ports · network card. Kết hợp HW (input/process/output/storage) + SW (OS + applications) + Data + Network = quyết định đầu tư IT toàn diện. Cost of data processing tiến gần 0 (Moore's Law) → câu hỏi không còn là 'có mua được không' mà là 'mua gì phù hợp nhất với nhu cầu business'.",
        ),
        flowBlock(
          "s15",
          "IT decision = HW + SW + Data + Network",
          "horizontal",
          [
            {
              id: "s15_hw",
              label: "Hardware",
              group: "concept",
              detail: "Input/output/processing/storage devices — nền tảng vật lý.",
            },
            {
              id: "s15_sw",
              label: "Software",
              group: "concept",
              detail: "OS + applications — điều phối và thực thi tác vụ.",
            },
            {
              id: "s15_data",
              label: "Data",
              group: "concept",
              detail:
                "Tài sản số của tổ chức — cần lưu trữ, bảo mật, truy cập.",
            },
            {
              id: "s15_net",
              label: "Network",
              group: "concept",
              detail: "Kết nối HW+SW+Data với nhau và với Internet.",
            },
            {
              id: "s15_it",
              label: "IT decision",
              group: "concept",
              detail:
                "Quyết định đầu tư IT tổng thể: mua gì, bao nhiêu, khi nào nâng cấp.",
            },
          ],
          [
            { from: "s15_hw", to: "s15_it" },
            { from: "s15_sw", to: "s15_it" },
            { from: "s15_data", to: "s15_it" },
            { from: "s15_net", to: "s15_it" },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "upgrade problem",
          definition:
            "Quyết định khi nào nên nâng cấp hoặc thay thế hệ thống IT dựa trên cân nhắc chi phí, hiệu năng và nhu cầu business.",
        },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "Which of the following is a small piece of semiconducting material, usually silicon, on which integrated circuits are etched?",
      options: [
        {
          id: "a",
          text: "system unit",
          isCorrect: false,
          rationale:
            "Bẫy system unit: system unit là cả khối vỏ máy chứa bo mạch chủ, CPU, RAM, nguồn — không phải một mảnh bán dẫn nhỏ. Khoá: computer chip mới là mảnh silicon siêu nhỏ mang mạch tích hợp.",
        },
        {
          id: "b",
          text: "computer port",
          isCorrect: false,
          rationale:
            "Bẫy port: port là cổng kết nối (USB, HDMI...) trên vỏ máy để cắm thiết bị ngoại vi — điểm giao tiếp vật lý, không phải vật liệu bán dẫn.",
        },
        {
          id: "c",
          text: "computer chip",
          isCorrect: true,
          rationale:
            "Cơ chế: computer chip (hay microchip) là mảnh vật liệu bán dẫn (thường là silicon) siêu nhỏ, trên đó khắc các mạch tích hợp (integrated circuits) gồm hàng tỷ transistor. Toàn bộ CPU, RAM, GPU đều là dạng chip.",
        },
        {
          id: "d",
          text: "mainboard",
          isCorrect: false,
          rationale:
            "Bẫy mainboard: mainboard (motherboard) là bo mạch chủ — tấm PCB lớn kết nối và chứa nhiều chip. Mainboard chứa chip, không phải là chip.",
        },
      ],
      difficulty: "basic",
      conceptTested:
        "Định nghĩa computer chip (microchip) là mảnh bán dẫn silicon mang mạch tích hợp.",
      takeaway:
        "Computer chip = mảnh silicon siêu nhỏ có mạch tích hợp. System unit = vỏ máy. Port = cổng cắm. Mainboard = bo mạch chủ chứa chip.",
    },
    {
      id: "q02",
      stem: "Which of the following is the component of the processor that directs and coordinates most of the operations in the computer?",
      options: [
        {
          id: "a",
          text: "control unit",
          isCorrect: true,
          rationale:
            "Cơ chế: control unit là thành phần của CPU chịu trách nhiệm fetch instruction, decode, điều phối execute và store — 'đạo diễn' mọi hoạt động trong máy tính. ALU mới là nơi thực thi phép tính; control unit chỉ điều phối.",
        },
        {
          id: "b",
          text: "concatenation unit",
          isCorrect: false,
          rationale:
            "Bẫy concatenation unit: tên bịa — không có thành phần nào gọi là 'concatenation unit' trong kiến trúc CPU chuẩn. Hai thành phần thật: control unit + ALU.",
        },
        {
          id: "c",
          text: "compression unit",
          isCorrect: false,
          rationale:
            "Bẫy compression unit: tên bịa, không tồn tại trong CPU. Compression là tác vụ do software thực hiện.",
        },
        {
          id: "d",
          text: "micro unit",
          isCorrect: false,
          rationale:
            "Bẫy micro unit: tên bịa. 'Micro' trong 'microprocessor' chỉ kích thước nhỏ, không phải tên một đơn vị chức năng.",
        },
      ],
      difficulty: "basic",
      conceptTested:
        "Control unit là thành phần điều phối hoạt động CPU, phân biệt với ALU (thực thi tính toán).",
      takeaway:
        "CPU = control unit (điều phối) + ALU (tính toán/so sánh). Control unit: fetch → decode → điều phối execute → store.",
    },
    {
      id: "q03",
      stem: "...a type of nonvolatile memory that can be erased electronically and rewritten. What did your instructor call this memory?",
      options: [
        {
          id: "a",
          text: "perm-memory",
          isCorrect: false,
          rationale:
            "Bẫy perm-memory: tên bịa. Không có loại bộ nhớ nào gọi là 'perm-memory' trong lý thuyết máy tính chuẩn.",
        },
        {
          id: "b",
          text: "firewire",
          isCorrect: false,
          rationale:
            "Bẫy Firewire: FireWire (IEEE 1394) là chuẩn giao diện kết nối thiết bị ngoại vi tốc độ cao — không liên quan đến loại bộ nhớ.",
        },
        {
          id: "c",
          text: "EM-ROM",
          isCorrect: false,
          rationale:
            "Bẫy EM-ROM: tên bịa, không tồn tại. Các loại ROM thật: ROM, PROM, EPROM, EEPROM (= flash memory).",
        },
        {
          id: "d",
          text: "flash memory",
          isCorrect: true,
          rationale:
            "Cơ chế: flash memory = EEPROM (Electrically Erasable Programmable ROM) — non-volatile (giữ dữ liệu khi mất điện), có thể xoá và ghi lại bằng tín hiệu điện. Nền tảng của SSD và USB flash drive.",
        },
      ],
      difficulty: "intermediate",
      conceptTested:
        "Flash memory = EEPROM: non-volatile, xoá/ghi lại bằng điện; nền tảng SSD và USB.",
      takeaway:
        "Flash memory = EEPROM = non-volatile + xoá-ghi bằng điện. ROM thường không ghi lại được. Firewire là chuẩn cổng kết nối, không phải bộ nhớ.",
    },
    {
      id: "q04",
      stem: "Which of the following is true of SSDs compared to traditional hard disks?",
      options: [
        {
          id: "a",
          text: "lower storage capacities",
          isCorrect: false,
          rationale:
            "Bẫy dung lượng: SSD hiện đại có dung lượng tương đương HDD; nhược điểm thật của SSD là giá/GB cao hơn, không phải dung lượng thấp hơn.",
        },
        {
          id: "b",
          text: "generate more heat",
          isCorrect: false,
          rationale:
            "Bẫy nhiệt: SSD không có bộ phận cơ học quay → toả ít nhiệt hơn HDD. Nói 'more heat' là sai chiều.",
        },
        {
          id: "c",
          text: "faster transfer rates",
          isCorrect: true,
          rationale:
            "Cơ chế: SSD dùng EEPROM flash, không bộ phận chuyển động → không phải chờ đĩa quay và đầu đọc di chuyển như HDD → tốc độ đọc/ghi (transfer rate) nhanh hơn rõ rệt.",
        },
        {
          id: "d",
          text: "shorter life",
          isCorrect: false,
          rationale:
            "Bẫy tuổi thọ: SSD bền hơn HDD ở va đập vật lý (không bộ phận cơ học). SSD có giới hạn chu kỳ ghi (write endurance) nhưng trong dùng thông thường bền hơn HDD.",
        },
      ],
      difficulty: "intermediate",
      conceptTested:
        "So sánh SSD vs HDD: SSD nhanh hơn, mát hơn, bền hơn khi va đập; nhược điểm là giá/GB cao.",
      takeaway:
        "SSD nhanh hơn HDD vì không bộ phận cơ học. SSD mát hơn, bền hơn (va đập). Điểm yếu thực sự: giá/GB cao hơn HDD.",
    },
    {
      id: "q05",
      stem: "When you use hardware, in which gesture do you quickly touch and release one finger one time?",
      options: [
        {
          id: "a",
          text: "tap",
          isCorrect: true,
          rationale:
            "Cơ chế: tap = chạm nhanh và thả ngón tay một lần — tương đương single click chuột. Đây là gesture cơ bản nhất của touch interface.",
        },
        {
          id: "b",
          text: "stretch",
          isCorrect: false,
          rationale:
            "Bẫy stretch: stretch (pinch-to-zoom) là cử chỉ dùng 2 ngón để phóng to/thu nhỏ — không phải chạm một lần.",
        },
        {
          id: "c",
          text: "swipe",
          isCorrect: false,
          rationale:
            "Bẫy swipe: swipe = vuốt nhanh theo một hướng — có chuyển động ngang, khác tap.",
        },
        {
          id: "d",
          text: "slide",
          isCorrect: false,
          rationale:
            "Bẫy slide: slide = kéo chậm theo hướng — dùng để di chuyển đối tượng. Khác với tap (nhấn-thả nhanh, không di chuyển).",
        },
      ],
      difficulty: "basic",
      conceptTested: "Phân biệt các touch gesture: tap, swipe, slide, stretch.",
      takeaway:
        "Tap = chạm nhanh + thả 1 lần. Swipe = vuốt nhanh. Slide = kéo chậm. Stretch = 2 ngón phóng to/thu nhỏ.",
    },
    {
      id: "q06",
      stem: "Which one is the key point you can infer from Moore's Law as a future business professional?",
      options: [
        {
          id: "a",
          text: "You care how fast of a computer your company can buy for $1,000",
          isCorrect: false,
          rationale:
            "Bẫy tốc độ/giá cố định: câu này đảo trục — Moore's Law nói cùng một mức giá thì năng lực tăng dần (chi phí xử lý/đơn vị giảm). Hệ quả sâu hơn là cost of data processing tiến gần 0.",
        },
        {
          id: "b",
          text: "IT development is slow",
          isCorrect: false,
          rationale:
            "Bẫy sai chiều: Moore's Law nói ngược lại — IT phát triển theo hàm mũ (exponential), không phải chậm.",
        },
        {
          id: "c",
          text: "The cost of data processing is approaching zero",
          isCorrect: true,
          rationale:
            "Cơ chế: Moore's Law → transistor gấp đôi mỗi 24 tháng → cùng giá mua được máy mạnh gấp đôi → chi phí xử lý mỗi đơn vị dữ liệu liên tục giảm → tiến dần về 0. Hệ quả business quan trọng nhất: mọi doanh nghiệp đều có thể xử lý lượng lớn dữ liệu với chi phí tối thiểu.",
        },
      ],
      difficulty: "intermediate",
      conceptTested:
        "Hệ quả kinh tế của Moore's Law: cost of data processing tiến về 0.",
      takeaway:
        "Hệ quả Moore's Law quan trọng nhất cho business: cost of data processing → 0. Lý do AI, big data, cloud đều trở nên phổ cập.",
    },
    {
      id: "q07",
      stem: "Which language needs an interpreter to be able to run on the computer?",
      options: [
        {
          id: "a",
          text: "Machine language",
          isCorrect: false,
          rationale:
            "Bẫy machine language: machine language chạy trực tiếp trên CPU, không cần dịch — đây là ngôn ngữ native của hardware.",
        },
        {
          id: "b",
          text: "Compilers",
          isCorrect: false,
          rationale:
            "Bẫy compiler: compiler là chương trình dịch (software tool), không phải một ngôn ngữ lập trình.",
        },
        {
          id: "c",
          text: "High level language",
          isCorrect: true,
          rationale:
            "Cơ chế: High-level language (Python, JavaScript script mode...) cần được dịch sang machine code để CPU hiểu. Có thể dùng compiler (dịch trước) hoặc interpreter (dịch từng dòng khi chạy). Câu hỏi hỏi loại cần 'interpreter' → HLL là câu trả lời đúng.",
        },
        {
          id: "d",
          text: "Assembly language",
          isCorrect: false,
          rationale:
            "Bẫy assembly: assembly language cần assembler (không phải interpreter) dịch sang machine code. Assembler và interpreter là hai loại công cụ dịch khác nhau.",
        },
      ],
      difficulty: "intermediate",
      conceptTested:
        "HLL cần compiler hoặc interpreter; assembly cần assembler; machine language chạy trực tiếp.",
      takeaway:
        "Machine language → chạy trực tiếp. Assembly → cần assembler. HLL → cần compiler hoặc interpreter.",
    },
    {
      id: "q08",
      stem: "In virtual memory, what is the term for the process of swapping items between memory and storage?",
      options: [
        {
          id: "a",
          text: "paging",
          isCorrect: true,
          rationale:
            "Cơ chế: paging là quá trình OS chia RAM thành các 'trang' (pages) và swap các trang ít dùng ra secondary storage khi RAM đầy, rồi load lại khi cần. Đây là cơ chế cốt lõi của virtual memory.",
        },
        {
          id: "b",
          text: "spacing",
          isCorrect: false,
          rationale:
            "Bẫy spacing: 'spacing' không phải thuật ngữ trong quản lý bộ nhớ. Nghe giống 'paging' nhưng sai hoàn toàn.",
        },
        {
          id: "c",
          text: "writing",
          isCorrect: false,
          rationale:
            "Bẫy writing: 'writing' chỉ thao tác ghi dữ liệu chung — không đặc trưng cho virtual memory.",
        },
        {
          id: "d",
          text: "reading",
          isCorrect: false,
          rationale:
            "Bẫy reading: chỉ thao tác đọc chung, không mô tả đúng cơ chế swap trong virtual memory.",
        },
      ],
      difficulty: "intermediate",
      conceptTested:
        "Paging = cơ chế swap trang giữa RAM và storage trong virtual memory.",
      takeaway:
        "Virtual memory dùng secondary storage như RAM phụ. Paging = swap pages giữa RAM ↔ storage. Khi RAM đầy → OS page out → page in khi cần.",
    },
    {
      id: "q09",
      stem: "Which of the following kinds of operating systems allow only one user to run one program or app at a time?",
      options: [
        {
          id: "a",
          text: "single user/single indexing",
          isCorrect: false,
          rationale:
            "Bẫy single indexing: tên bịa — 'indexing' không phải thuật ngữ phân loại OS.",
        },
        {
          id: "b",
          text: "single user/single tasking",
          isCorrect: true,
          rationale:
            "Cơ chế: single user = chỉ một người dùng; single tasking = chỉ một chương trình chạy tại một thời điểm (MS-DOS). Khi muốn chạy app khác, phải đóng app đang mở.",
        },
        {
          id: "c",
          text: "single user/single throttle",
          isCorrect: false,
          rationale:
            "Bẫy single throttle: tên bịa — 'throttle' trong IT là giảm tốc độ để kiểm soát tài nguyên, không phải khái niệm phân loại OS.",
        },
        {
          id: "d",
          text: "single user/single function",
          isCorrect: false,
          rationale:
            "Bẫy single function: tên bịa. Embedded systems có thể gọi là single-function nhưng không phải phân loại OS chuẩn.",
        },
      ],
      difficulty: "basic",
      conceptTested:
        "Phân loại OS theo số user/task: single user/single tasking vs multi-user/multitasking.",
      takeaway:
        "Single user/single tasking = 1 người + 1 app tại một thời điểm (MS-DOS). Multi-tasking = nhiều app đồng thời (Windows, macOS).",
    },
    {
      id: "q10",
      stem: "Which of the following is NOT a desktop operating system?",
      options: [
        {
          id: "a",
          text: "Mac OS",
          isCorrect: false,
          rationale:
            "Mac OS (OS X / macOS) là desktop OS của Apple — chạy trên Mac/MacBook, không phải mobile.",
        },
        {
          id: "b",
          text: "MS Windows",
          isCorrect: false,
          rationale:
            "MS Windows là desktop OS phổ biến nhất — chạy trên PC/laptop.",
        },
        {
          id: "c",
          text: "Chrome OS",
          isCorrect: false,
          rationale:
            "Bẫy Chrome OS: Chrome OS là desktop OS của Google, chạy trên Chromebook — dù cloud-centric nhưng vẫn là desktop OS.",
        },
        {
          id: "d",
          text: "Google Android",
          isCorrect: true,
          rationale:
            "Cơ chế: Android là mobile OS — thiết kế cho smartphone và tablet, chạy trên firmware thiết bị di động. Android dựa trên Linux nhưng không phải desktop OS. Chrome OS mới là desktop OS của Google.",
        },
      ],
      difficulty: "basic",
      conceptTested:
        "Phân biệt desktop OS (Windows, macOS, Linux, Chrome OS) vs mobile OS (Android, iOS).",
      takeaway:
        "Desktop: Windows, macOS, Linux, Chrome OS. Mobile: Android (Google), iOS (Apple), Windows Phone. Android ≠ desktop dù cùng Google phát triển như Chrome OS.",
    },
    {
      id: "q11",
      stem: "Linux is an operating system... code is provided for use, modification, and redistribution. What kind of software is this?",
      options: [
        {
          id: "a",
          text: "open source",
          isCorrect: true,
          rationale:
            "Cơ chế: open source = source code công khai, cho phép dùng, sửa và phân phối lại. Linux là ví dụ điển hình — bất kỳ ai cũng có thể đọc, fork, và phân phối lại (Ubuntu, Fedora, Android đều dựa trên Linux).",
        },
        {
          id: "b",
          text: "upgradable",
          isCorrect: false,
          rationale:
            "Bẫy upgradable: mọi phần mềm đều có thể nâng cấp — không phải đặc điểm phân loại phân phối software.",
        },
        {
          id: "c",
          text: "client/server",
          isCorrect: false,
          rationale:
            "Bẫy client/server: đây là kiến trúc mạng (client gửi request, server phản hồi) — không liên quan đến cách phân phối/cấp phép software.",
        },
        {
          id: "d",
          text: "multitasking",
          isCorrect: false,
          rationale:
            "Bẫy multitasking: đây là tính năng của OS — không phải loại phân phối software.",
        },
      ],
      difficulty: "basic",
      conceptTested:
        "Open source software = source code cho phép dùng, sửa, phân phối lại; Linux là ví dụ điển hình.",
      takeaway:
        "Open source = use + modify + redistribute source code. Linux, Android = open source. Phân biệt với freeware (miễn phí nhưng KHÔNG cho sửa code).",
    },
    {
      id: "q12",
      stem: "A spreadsheet program would be an example of:",
      options: [
        {
          id: "a",
          text: "personal interest application",
          isCorrect: false,
          rationale:
            "Bẫy personal interest: personal interest apps = game, hobby, giải trí — không phải công cụ làm việc như spreadsheet.",
        },
        {
          id: "b",
          text: "firmware",
          isCorrect: false,
          rationale:
            "Bẫy firmware: firmware là phần mềm nhúng trong chip hardware (BIOS, OS điện thoại) — không phải ứng dụng văn phòng.",
        },
        {
          id: "c",
          text: "productivity application",
          isCorrect: true,
          rationale:
            "Cơ chế: productivity application = phần mềm tăng hiệu suất công việc, gồm word processing, spreadsheet, presentation, database, project management... Spreadsheet (Excel, Google Sheets) là công cụ phân tích số liệu điển hình.",
        },
        {
          id: "d",
          text: "system software",
          isCorrect: false,
          rationale:
            "Bẫy system software: system software = OS và utilities quản lý tài nguyên máy — không phải ứng dụng end-user. Spreadsheet là application software.",
        },
      ],
      difficulty: "basic",
      conceptTested:
        "Phân loại ứng dụng: spreadsheet thuộc productivity application.",
      takeaway:
        "Productivity apps: Word, Excel, PowerPoint, database, project management. System software: OS, utilities. Firmware: phần mềm nhúng chip.",
    },
    {
      id: "q13",
      stem: "Which of the following programs allow designers to rotate designs of 3-D objects to view them from any angle?",
      options: [
        {
          id: "a",
          text: "CAD",
          isCorrect: true,
          rationale:
            "Cơ chế: CAD (Computer-Aided Design) là phần mềm thiết kế 3D dùng trong kỹ thuật/kiến trúc — cho phép xây mô hình 3D, xoay góc nhìn 360°, kiểm tra tỉ lệ và xuất bản vẽ. AutoCAD, SolidWorks là ví dụ điển hình.",
        },
        {
          id: "b",
          text: "DTP",
          isCorrect: false,
          rationale:
            "Bẫy DTP: Desktop Publishing = phần mềm làm báo/tạp chí/tài liệu in — bố cục 2D trang in, không phải mô hình 3D.",
        },
        {
          id: "c",
          text: "DTM",
          isCorrect: false,
          rationale:
            "Bẫy DTM: tên bịa — không có loại phần mềm thiết kế nào gọi là 'DTM' trong phân loại chuẩn.",
        },
        {
          id: "d",
          text: "CAM",
          isCorrect: false,
          rationale:
            "Bẫy CAM: Computer-Aided Manufacturing = phần mềm điều khiển máy CNC/sản xuất — không phải thiết kế/xoay mô hình 3D.",
        },
      ],
      difficulty: "intermediate",
      conceptTested:
        "CAD (Computer-Aided Design) = phần mềm thiết kế 3D cho phép xoay góc nhìn bất kỳ.",
      takeaway:
        "CAD = thiết kế 3D (kỹ thuật, kiến trúc). DTP = dàn trang 2D (báo, sách). CAM = sản xuất tự động. DTM = không tồn tại.",
    },
    {
      id: "q14",
      stem: "What kind of software helps users of all skill levels create web pages that include graphics, video, audio, animation, and other special effects?",
      options: [
        {
          id: "a",
          text: "website management",
          isCorrect: false,
          rationale:
            "Bẫy website management: quản lý website tập trung vào hosting, domain, analytics — không phải tạo nội dung trang web.",
        },
        {
          id: "b",
          text: "website publishing",
          isCorrect: false,
          rationale:
            "Bẫy website publishing: publishing nhấn mạnh việc đưa trang lên server — không phải quá trình tạo/thiết kế.",
        },
        {
          id: "c",
          text: "website editing",
          isCorrect: false,
          rationale:
            "Bẫy website editing: editing chỉ chỉnh sửa nội dung hiện có. Authoring rộng hơn: tạo toàn bộ trang mới với multimedia.",
        },
        {
          id: "d",
          text: "website authoring",
          isCorrect: true,
          rationale:
            "Cơ chế: website authoring software (Adobe Dreamweaver, WordPress visual editor...) cho phép người dùng mọi trình độ tạo trang web đầy đủ tính năng — text, graphics, video, audio, animation, special effects — mà không cần lập trình từ đầu.",
        },
      ],
      difficulty: "intermediate",
      conceptTested:
        "Website authoring software = tạo trang web đầy đủ multimedia; phân biệt với editing/publishing/management.",
      takeaway:
        "Authoring = tạo trang web (graphics + video + audio + animation). Editing = chỉnh nội dung. Publishing = đưa lên server. Management = quản trị hosting/analytics.",
    },
    {
      id: "q15",
      stem: "Which type of software has no restrictions from the copyright holder regarding modifications of the software's internal instructions and its redistribution?",
      options: [
        {
          id: "a",
          text: "shareware",
          isCorrect: false,
          rationale:
            "Bẫy shareware: shareware cho dùng thử nhưng có giới hạn — bản quyền vẫn thuộc hãng, không được sửa code hay phân phối lại.",
        },
        {
          id: "b",
          text: "custom software",
          isCorrect: false,
          rationale:
            "Bẫy custom software: phần mềm đặt làm riêng — quyền sửa/phân phối tuỳ hợp đồng, không mặc định tự do hoàn toàn.",
        },
        {
          id: "c",
          text: "open source software",
          isCorrect: true,
          rationale:
            "Cơ chế: open source = không giới hạn từ copyright holder về (1) sửa internal instructions (source code) và (2) phân phối lại. Đây là định nghĩa phân biệt open source với freeware (miễn phí nhưng không cho sửa code).",
        },
        {
          id: "d",
          text: "system software",
          isCorrect: false,
          rationale:
            "Bẫy system software: đây là loại phần mềm (OS + utilities), không phải cách phân phối/cấp phép. System software có thể là proprietary (Windows) hoặc open source (Linux).",
        },
      ],
      difficulty: "intermediate",
      conceptTested:
        "Open source = không giới hạn sửa code + phân phối lại; phân biệt với freeware.",
      takeaway:
        "Open source: sửa code + phân phối lại tự do. Freeware: miễn phí nhưng KHÔNG sửa code. Shareware: dùng thử có hạn. Public domain: tự do tuyệt đối.",
    },
    {
      id: "q16",
      stem: "Which of the following are you, as a marketing manager, most likely to use to schedule the processes required in a new advertising campaign you are running?",
      options: [
        {
          id: "a",
          text: "calendar management",
          isCorrect: false,
          rationale:
            "Bẫy calendar management: calendar chỉ ghi lịch hẹn/cuộc họp — không đủ để quản lý toàn bộ quy trình/nguồn lực/chi phí của một campaign.",
        },
        {
          id: "b",
          text: "personal finance",
          isCorrect: false,
          rationale:
            "Bẫy personal finance: phần mềm tài chính cá nhân dùng để quản lý thu chi cá nhân — không phải công cụ điều phối campaign quảng cáo.",
        },
        {
          id: "c",
          text: "software suite",
          isCorrect: false,
          rationale:
            "Bẫy software suite: suite là gói nhiều app — quá rộng và không đặc trưng cho bài toán lập lịch quy trình campaign.",
        },
        {
          id: "d",
          text: "project management",
          isCorrect: true,
          rationale:
            "Cơ chế: project management software (MS Project, Asana, Trello, Monday.com...) dùng để plan, schedule, track và analyze events–resources–costs của một dự án. Campaign quảng cáo có nhiều tasks, deadline, người phụ trách, ngân sách → bài toán project management điển hình.",
        },
      ],
      difficulty: "basic",
      conceptTested:
        "Project management software = lập kế hoạch, lịch trình, theo dõi sự kiện–nguồn lực–chi phí.",
      takeaway:
        "Project management: plan + schedule + track + analyze tasks/resources/costs. Khác calendar (chỉ lịch hẹn), personal finance (thu chi cá nhân), software suite (gói app chung).",
    },
  ],
  status: "ready",
  source:
    "Digital Technology in Business slides Topic 02-1 (Hardware, 95 slides) + Topic 02-2 (Software, 86 slides) + quiz-digi.pdf (QUIZ 2 Software + QUIZ 3 Hardware).",
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
  if (order === 1) return topic01;
  if (order === 2) return topic02;
  return createPlaceholderTopic(order);
});
