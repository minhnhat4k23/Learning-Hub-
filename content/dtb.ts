import type { Block, CalloutKind, Chapter, FlowEdge, FlowNode } from "./types";

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

const formulaBlock = (
  expression: string,
  legend?: { symbol: string; meaning: string }[],
  note?: string,
): Block => ({
  type: "formula",
  formula: { expression, legend, note },
});

const topic01: Chapter = {
  slug: "topic-01",
  order: 1,
  title: "Topic 01 — Introduction to CBIS",
  bigIdea:
    'Trong digital age, mọi doanh nghiệp đang trở thành một information business — thắng hay thua phụ thuộc vào ai biến data thành quyết định tốt hơn, nhanh hơn. IS (Information System) không phải phần mềm hay máy móc — nó là sự kết hợp People + Organizations + Technology; IT chỉ là phần công cụ: "You can buy IT, but you cannot buy an IS." Hiểu framework này, bạn có được một chiếc kính để đọc bất kỳ xu hướng digital nào (AI, cloud, e-commerce…) đều xoay quanh cùng một câu hỏi: nó giúp doanh nghiệp xử lý thông tin và ra quyết định tốt hơn như thế nào?',
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
                "7 inputs: Money, Manpower, Materials, Machinery/technology/infrastructure, Managerial skills, Time, Knowledge/information.",
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
        {
          term: "7 resources of an organization",
          definition:
            "Money, Manpower, Materials, Machinery/technology/infrastructure, Managerial skills, Time, Knowledge/information — 7 inputs mà organization chuyển đổi thành outputs.",
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
        flowBlock(
          "s8-pyramid",
          "5-level information pyramid",
          "horizontal",
          [
            {
              id: "s8p-data",
              label: "Data",
              group: "term",
              detail: "Raw facts chưa có context/meaning.",
            },
            {
              id: "s8p-info",
              label: "Information",
              group: "term",
              detail:
                "Data được xử lý hoặc đặt trong meaningful context.",
            },
            {
              id: "s8p-intel",
              label: "Intelligence",
              group: "term",
              detail:
                "Information được phân tích và diễn giải theo mục đích.",
            },
            {
              id: "s8p-know",
              label: "Knowledge",
              group: "term",
              detail:
                "Intelligence được hấp thụ và gắn vào kinh nghiệm người dùng.",
            },
            {
              id: "s8p-wis",
              label: "Wisdom",
              group: "term",
              detail:
                "Knowledge được vận dụng khôn ngoan trong quyết định.",
            },
          ],
          [
            { from: "s8p-data", to: "s8p-info" },
            { from: "s8p-info", to: "s8p-intel" },
            { from: "s8p-intel", to: "s8p-know" },
            { from: "s8p-know", to: "s8p-wis" },
          ],
          "Cùng một thứ có thể leo lên nhiều tầng khi có thêm context và người xử lý.",
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
          "Số transistor trên chip tăng gấp đôi mỗi 18–24 tháng → processing power tăng, cost giảm đều đặn. Đây là lực đẩy cho mọi làn sóng digital: laser printers, GUI, cell phones, email, Internet — đều chỉ khả thi khi Moore's Law hạ đủ chi phí. Điểm cần rút ra cho business: cost of data processing is approaching zero.",
        ),
      ],
      keyTerms: [
        {
          term: "Moore's Law",
          definition:
            "Observation that the number of transistors on an integrated circuit doubles roughly every 18–24 months, driving cost/performance improvement. Hệ quả: enabled laser printers, GUI, cell phones, email, và Internet.",
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
    "Moore's Law là xu hướng technology quan trọng nhất một business manager cần nhận ra: máy tính ngày càng nhanh hơn, nhỏ hơn, rẻ hơn — đều đặn theo chu kỳ. Đây không phải trivia kỹ thuật — nó lý giải tại sao cloud storage gần như miễn phí, tại sao AI đột nhiên khả thi với mọi startup, và tại sao thiết bị bạn mua hôm nay sẽ lỗi thời trong vài năm. Hardware + Software + Data là mặt Technology của five-component IS (Topic 01). Biết chúng vận hành thế nào giúp bạn ra quyết định đầu tư IT sáng suốt: cái gì nên mua ngay, cái gì nên chờ (giá sẽ giảm), cái gì nên thuê (cloud) thay vì sở hữu.",
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
        {
          term: "Track",
          definition:
            "Vòng tròn đồng tâm trên bề mặt đĩa HDD; dữ liệu được ghi theo từng track.",
        },
        {
          term: "Sector",
          definition:
            "Đơn vị nhỏ nhất của track trên HDD; mỗi sector thường lưu 512 bytes hoặc 4 KB.",
        },
        {
          term: "Cylinder",
          definition:
            "Tập hợp các track cùng vị trí bán kính trên tất cả các đĩa (platter); khái niệm dùng trong địa chỉ hóa dữ liệu HDD.",
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
            {
              id: "s9_oo",
              label: "OO / Visual Language",
              group: "term",
              detail:
                "Object-Oriented (OO) + Visual languages — tầng cao hơn HLL; OO: Python, Java, C++; Visual/4GL: Visual Basic, RAD tools; gần với tư duy người hơn, productivity cao hơn.",
            },
          ],
          [
            { from: "s9_ml", to: "s9_asm", label: "cao hơn" },
            { from: "s9_asm", to: "s9_hll", label: "cao hơn" },
            { from: "s9_hll", to: "s9_oo", label: "cao hơn" },
          ],
          "Chiều mũi tên = tầng trừu tượng tăng dần; công cụ dịch được giải thích trong callout.",
        ),
        calloutBlock(
          "note",
          "Assembler và Compiler dịch từ cao → thấp",
          "Flowchart trên thể hiện tầng trừu tượng (thấp → cao). Còn về chiều thực thi: Assembler dịch Assembly → machine code; Compiler dịch HLL → assembly hoặc machine code. Interpreter không tạo file riêng — nó đọc và chạy HLL trực tiếp từng dòng.",
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
        {
          term: "Object-Oriented (OO) language",
          definition:
            "Ngôn ngữ lập trình tổ chức code theo objects và classes; ví dụ: Python, Java, C++.",
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
                "Lập lịch CPU, quản lý I/O, điều phối device drivers; Plug and Play giúp OS tự nhận thiết bị mới.",
            },
            {
              id: "s10_tools",
              label: "Tools & admin",
              group: "concept",
              detail:
                "Performance monitor, file management, Internet setup, device config, network connections, security settings, update.",
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
          "GUI (Graphical User Interface): điều khiển bằng icon, menu, cửa sổ — thân thiện, ít đường cong học. CLI (Command-Line Interface): gõ lệnh từ bàn phím — mạnh hơn, linh hoạt cho admin. Virtual memory: phần storage đóng vai RAM phụ — khi RAM đầy, OS tự swap (paging) data ít dùng ra HDD/SSD. OS còn quản lý devices thông qua device drivers; Plug and Play cho phép cắm-và-dùng ngay mà không cần cài thủ công. Ngoài 5 chức năng cốt lõi, OS còn quản lý network connections (thiết lập kết nối, chia sẻ file/printer) và security (user accounts, passwords, permissions, firewall cơ bản).",
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
        {
          term: "Sleep",
          definition:
            "Chế độ năng lượng thấp: RAM giữ nguyên dữ liệu, máy tiêu thụ điện ít; resume rất nhanh nhưng cần điện liên tục.",
        },
        {
          term: "Hibernate",
          definition:
            "Chế độ tắt hoàn toàn: RAM được dump ra disk trước khi tắt; không tiêu thụ điện; resume chậm hơn Sleep nhưng an toàn khi pin cạn.",
        },
        {
          term: "Device driver",
          definition:
            "Phần mềm dịch lệnh OS thành tín hiệu hardware cụ thể; mỗi thiết bị cần driver riêng.",
        },
        {
          term: "Plug and Play (PnP)",
          definition:
            "Tính năng OS tự động nhận diện và cài driver khi người dùng cắm thiết bị mới vào máy.",
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
        comparisonBlock(
          "4 ways to obtain software",
          ["Cách", "Đặc điểm", "Ví dụ"],
          [
            {
              label: "Prepackaged / Retail",
              cells: [
                "Mua hộp / download; off-the-shelf; chi phí thấp nhưng ít tùy chỉnh",
                "Microsoft Office, Adobe Photoshop",
              ],
            },
            {
              label: "Custom-developed",
              cells: [
                "Thuê developer hoặc team nội bộ viết riêng; tốn kém + mất thời gian nhưng fit 100% nhu cầu",
                "Hệ thống ERP nội bộ của tập đoàn lớn",
              ],
            },
            {
              label: "Open source",
              cells: [
                "Miễn phí source code; tùy chỉnh được; cần kỹ năng kỹ thuật; chi phí ẩn = support/training",
                "Linux, LibreOffice, MySQL",
              ],
            },
            {
              label: "Software as a Service (SaaS)",
              cells: [
                "Thuê dùng qua cloud; trả theo tháng/năm; vendor lo cập nhật; cần Internet",
                "Google Workspace, Salesforce, Dropbox",
              ],
            },
          ],
        ),
        flowBlock(
          "s12-workflow",
          "Software workflow cơ bản",
          "horizontal",
          [
            {
              id: "wf-create",
              label: "Create",
              group: "concept",
              detail: "Tạo document/file mới.",
            },
            {
              id: "wf-edit",
              label: "Edit",
              group: "concept",
              detail: "Sửa nội dung đã tạo.",
            },
            {
              id: "wf-format",
              label: "Format",
              group: "concept",
              detail: "Định dạng: font, màu, layout.",
            },
            {
              id: "wf-save",
              label: "Save",
              group: "concept",
              detail:
                "Lưu lên disk/cloud để tồn tại sau khi tắt máy.",
            },
            {
              id: "wf-dist",
              label: "Distribute / Print",
              group: "concept",
              detail: "Chia sẻ qua email, cloud, in ấn.",
            },
          ],
          [
            { from: "wf-create", to: "wf-edit" },
            { from: "wf-edit", to: "wf-format" },
            { from: "wf-format", to: "wf-save" },
            { from: "wf-save", to: "wf-dist" },
          ],
          "Workflow này áp dụng cho hầu hết mọi phần mềm: word processor, spreadsheet, presentation.",
        ),
        calloutBlock(
          "insight",
          "'Free' không miễn phí hoàn toàn",
          "Freeware = miễn phí dùng nhưng KHÔNG cho sửa code (VLC, Zoom free tier). Open source ≠ miễn phí bắt buộc — nhưng cho sửa/phân phối lại code (Linux, LibreOffice). Public domain = tự do tuyệt đối kể cả bán lại. Phân biệt: Program (bất kỳ tập lệnh) → Application (program giải quyết vấn đề end-user) → System software (OS + utilities, không phải ứng dụng end-user).",
        ),
        calloutBlock(
          "insight",
          "Free/Open Source Software (F/OSS) movement",
          "F/OSS = phần mềm có source code công khai; người dùng có thể dùng, sửa và phân phối. Phong trào bắt đầu với Richard Stallman (FSF) và GNU Project; GPL là license phổ biến nhất. Ý nghĩa business: Linux, MySQL, Firefox, LibreOffice đều là F/OSS; 'miễn phí' về tiền không có nghĩa là miễn phí về support/training chi phí.",
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
        {
          term: "SaaS (Software as a Service)",
          definition:
            "Mô hình dùng phần mềm qua cloud, trả phí định kỳ; vendor quản lý hạ tầng và cập nhật.",
        },
        {
          term: "F/OSS",
          definition:
            "Free/Open Source Software — phần mềm có source code công khai, ai cũng có thể dùng, sửa, phân phối theo điều khoản license (vd. GPL).",
        },
        {
          term: "GPL",
          definition:
            "GNU General Public License — license F/OSS phổ biến nhất; yêu cầu derivative works cũng phải open source.",
        },
      ],
    },
    {
      id: "s13",
      heading: "Loại ứng dụng: 4 nhóm chính (productivity / graphics & media / communications / personal interest)",
      blocks: [
        comparisonBlock(
          "Phân loại ứng dụng phổ biến",
          ["", "Productivity", "Graphics & Media", "Communications", "Personal Interest"],
          [
            {
              label: "Ứng dụng tiêu biểu",
              cells: [
                "Word processing, presentation, spreadsheet, database, note taking, calendar/contact, project management, accounting, personal finance, legal, tax, document management, enterprise computing",
                "CAD, desktop publishing (DTP), paint/image editing, photo editing, video/audio editing, multimedia & website authoring, media player, disc burning",
                "Email, web browsing, chat, blog, VoIP/Internet phone, instant/mobile messaging, videoconference, web feeds, file transfer",
                "Games, quản lý tài chính cá nhân, thiết kế nhà, phần mềm du lịch",
              ],
            },
            {
              label: "Mục đích",
              cells: [
                "Tăng năng suất công việc văn phòng và quản lý doanh nghiệp",
                "Tạo/chỉnh sửa nội dung số: đồ hoạ, âm thanh, video",
                "Kết nối và trao đổi thông tin giữa người với người",
                "Phục vụ nhu cầu cá nhân thay vì quy trình tổ chức",
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
        {
          term: "personal interest application",
          definition:
            "Nhóm application phục vụ nhu cầu cá nhân như games, financial management, home design, travel software.",
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
      stem: "A small business needs accounting software but has limited IT staff. Which method of obtaining software offers the LOWEST upfront cost while avoiding the need to manage servers?",
      difficulty: "intermediate",
      conceptTested: "4 ways to obtain software — SaaS vs retail vs custom",
      takeaway:
        "SaaS = pay-as-you-go, không cần server riêng; retail/custom đòi upfront và infrastructure.",
      options: [
        {
          id: "a",
          text: "Purchase a prepackaged retail license",
          isCorrect: false,
          rationale:
            "Cơ chế: retail license trả một lần; có thể phù hợp nhưng vẫn cần cài đặt và maintain trên máy riêng. Bẫy: 'mua một lần' nghe có vẻ rẻ hơn. Khóa: SaaS không cần server/installation.",
        },
        {
          id: "b",
          text: "Commission custom-developed software",
          isCorrect: false,
          rationale:
            "Cơ chế: custom development là cách tốn kém nhất — cả thời gian lẫn tiền. Bẫy: 'đúng nhu cầu' nghe hấp dẫn. Khóa: small business với limited IT staff không phù hợp.",
        },
        {
          id: "c",
          text: "Subscribe to a cloud-based SaaS solution",
          isCorrect: true,
          rationale:
            "Cơ chế: SaaS = Software as a Service — trả phí định kỳ, vendor lo server/update/backup; upfront thấp, không cần IT infrastructure. Bẫy: 'thuê mãi' tưởng đắt về dài hạn. Khóa: lowest upfront + no server management = SaaS.",
        },
        {
          id: "d",
          text: "Download and deploy an open source package",
          isCorrect: false,
          rationale:
            "Cơ chế: open source miễn phí license nhưng cần kỹ năng cài đặt, configure và maintain — đòi IT staff. Bẫy: 'miễn phí' nghe như lowest cost. Khóa: limited IT staff không support được open source deployment.",
        },
      ],
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

const topic03: Chapter = {
  slug: "topic-03",
  order: 3,
  title: "Topic 03 — Computer Network, Internet & Web",
  bigIdea:
    "Trước đây, muốn dùng máy tính bạn phải đến tận nơi — Internet và networks đã xóa ràng buộc khoảng cách đó: thông tin và năng lực tính toán giờ chạm tới được từ bất cứ đâu. Ngay từ ARPANET (1969), mục tiêu đã rất 'business': cho người ở các vị trí khác nhau chia sẻ thông tin và làm việc chung. Một network mang lại các lợi ích sách nêu rõ — facilitate communications, share hardware/data/software, transfer funds — đó là lý do mọi doanh nghiệp đều nối mạng. Nhưng sự tiện lợi ấy nằm trên hạ tầng nhiều tầng: kiểu kết nối (cable/DSL/fiber/wireless), loại network (LAN→WAN), chuẩn giao tiếp (TCP/IP, Wi-Fi) và transmission media. Hiểu các tầng này, bạn — future manager — chọn đúng giải pháp kết nối và cân được bandwidth–chi phí–độ tin cậy thay vì phó mặc cho IT.",
  learningObjectives: [
    "Thuật lại evolution của Internet: vấn đề khoảng cách → modem (analog↔digital) → ARPANET 1969 (2 mục tiêu) → hàng triệu host ngày nay.",
    "Phân biệt các broadband connection: wired (cable / DSL / FTTP) vs wireless (Wi-Fi / mobile broadband / fixed wireless / satellite); giải thích ISP, bandwidth, hot spot.",
    "Giải thích quan hệ IP address ↔ domain name và vai trò DNS server.",
    "Mô tả WWW (webpage / website / web server / Web 2.0), phát minh của Tim Berners-Lee và nguyên lý client-server + http/html; nhận diện thành phần URL.",
    "Phân biệt browser / web app / cloud storage; soạn search text hiệu quả (search engine vs subject directory, search operators).",
    "Nêu các loại website và quy trình web publishing 5 bước.",
    "Giải thích web dùng graphics / animation / audio / video / VR; nhận diện media formats và plug-in.",
    "Giải thích cách email / email list / IM / chat / online discussion / VoIP / FTP hoạt động; nêu netiquette.",
    "Mô tả mô hình communications (sending → media → receiving) và 5 advantages của một network.",
    "Phân biệt LAN / WLAN / MAN / WAN / PAN và client-server vs peer-to-peer; vai trò communications software.",
    "Phân biệt các network standards/protocols, communications lines, communications devices, và physical vs wireless transmission media (kèm bandwidth & latency).",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "3 tầng: (A) chạm tới từ bất cứ đâu, (B) vì sao nối mạng, (C) hạ tầng để chọn giải pháp. Bấm từng node để mở chi tiết và nhảy tới phần học.",
    nodes: [
      {
        id: "net",
        label: "Network, Internet & Web",
        group: "concept",
        sectionId: "s1",
        detail:
          "Internet/networks xóa ràng buộc khoảng cách; manager chọn đúng hạ tầng kết nối.",
      },
      {
        id: "g_reach",
        label: "A. Chạm tới từ bất cứ đâu",
        group: "concept",
        parent: "net",
        sectionId: "s1",
        detail:
          "Internet & Web — tầng người dùng tiếp cận: connect, web, media, services.",
      },
      {
        id: "g_why",
        label: "B. Vì sao nối mạng",
        group: "concept",
        parent: "net",
        sectionId: "s10",
        detail:
          "Mô hình truyền tin + 5 advantages của network + loại network.",
      },
      {
        id: "g_infra",
        label: "C. Hạ tầng nhiều tầng",
        group: "concept",
        parent: "net",
        sectionId: "s14",
        detail:
          "Standards, lines, devices, transmission media — manager chọn giải pháp.",
      },
      {
        id: "t_evo",
        label: "Evolution & ARPANET",
        group: "term",
        parent: "g_reach",
        sectionId: "s1",
        detail:
          "Khoảng cách → modem → ARPANET 1969 (share + resilient) → triệu host.",
      },
      {
        id: "t_connect",
        label: "Connecting & bandwidth",
        group: "term",
        parent: "g_reach",
        sectionId: "s2",
        detail: "Wired vs wireless, ISP, hot spot, Mbps/Gbps.",
      },
      {
        id: "t_addr",
        label: "IP / domain / DNS",
        group: "term",
        parent: "g_reach",
        sectionId: "s3",
        detail: "IP định danh, domain dạng chữ, DNS dịch domain → IP.",
      },
      {
        id: "t_web",
        label: "WWW & browser",
        group: "term",
        parent: "g_reach",
        sectionId: "s4",
        detail:
          "Berners-Lee 1990, client-server, http/html, URL, web app.",
      },
      {
        id: "t_sites",
        label: "Website & media",
        group: "term",
        parent: "g_reach",
        sectionId: "s6",
        detail: "Loại website, web publishing, graphics/audio/video/VR.",
      },
      {
        id: "t_services",
        label: "Internet services & netiquette",
        group: "term",
        parent: "g_reach",
        sectionId: "s8",
        detail: "Email/IM/chat/VoIP/FTP + code ứng xử mạng.",
      },
      {
        id: "t_model",
        label: "Mô hình truyền + advantages",
        group: "term",
        parent: "g_why",
        sectionId: "s10",
        detail: "sending→media→receiving; 5 lợi ích network.",
      },
      {
        id: "t_types",
        label: "LAN / MAN / WAN / PAN",
        group: "term",
        parent: "g_why",
        sectionId: "s11",
        detail: "Phân loại network theo phạm vi địa lý.",
      },
      {
        id: "t_arch",
        label: "Client/server vs P2P",
        group: "term",
        parent: "g_why",
        sectionId: "s12",
        detail: "2 kiểu network architecture.",
      },
      {
        id: "t_std",
        label: "Standards & protocols",
        group: "term",
        parent: "g_infra",
        sectionId: "s14",
        detail: "Ethernet, TCP/IP, Wi-Fi, Bluetooth, RFID/NFC…",
      },
      {
        id: "t_lines",
        label: "Communications lines",
        group: "term",
        parent: "g_infra",
        sectionId: "s15",
        detail: "Dedicated, cable, DSL/ADSL, ISDN, FTTP, T-carrier, ATM.",
      },
      {
        id: "t_dev",
        label: "Communications devices",
        group: "term",
        parent: "g_infra",
        sectionId: "s16",
        detail: "Modem, WAP, router, network card, hub/switch.",
      },
      {
        id: "t_media",
        label: "Transmission media",
        group: "term",
        parent: "g_infra",
        sectionId: "s17",
        detail:
          "Physical (twisted/coax/fiber) + wireless (radio/microwave/satellite/GPS).",
      },
    ],
    edges: [
      { from: "net", to: "g_reach" },
      { from: "net", to: "g_why" },
      { from: "net", to: "g_infra" },
      { from: "g_reach", to: "t_evo" },
      { from: "g_reach", to: "t_connect" },
      { from: "g_reach", to: "t_addr" },
      { from: "g_reach", to: "t_web" },
      { from: "g_reach", to: "t_sites" },
      { from: "g_reach", to: "t_services" },
      { from: "g_why", to: "t_model" },
      { from: "g_why", to: "t_types" },
      { from: "g_why", to: "t_arch" },
      { from: "g_infra", to: "t_std" },
      { from: "g_infra", to: "t_lines" },
      { from: "g_infra", to: "t_dev" },
      { from: "g_infra", to: "t_media" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "Evolution: từ phải đến tận máy → ARPANET → today",
      blocks: [
        flowBlock(
          "s1",
          "Vì sao có Internet",
          "horizontal",
          [
            {
              id: "s1_far",
              label: "Phải đến tận máy",
              group: "concept",
              detail:
                "50 năm trước (trước 1969): mọi mainframe buộc input/output đặt sát máy (cùng phòng). Bất tiện → cần dùng máy từ xa.",
            },
            {
              id: "s1_phone",
              label: "Mạng điện thoại analog",
              group: "concept",
              detail:
                "Đã có sẵn telephone network nhưng là analog, chỉ tải tín hiệu thoại. Ý tưởng: dùng mạng analog này để truyền dữ liệu (digital)?",
            },
            {
              id: "s1_modem",
              label: "Modem",
              group: "concept",
              detail:
                "Modulator/demodulator: chuyển digital ↔ analog để gửi qua đường điện thoại. Modulation (digital→analog) khi gửi, demodulation khi nhận.",
            },
            {
              id: "s1_arpa",
              label: "ARPANET 1969",
              group: "concept",
              detail:
                "Mạng đầu tiên hoạt động. 2 mục tiêu: (1) nhà khoa học ở các vị trí khác nhau chia sẻ thông tin & làm việc chung; (2) vẫn chạy kể cả khi một phần mạng bị phá hủy.",
            },
            {
              id: "s1_today",
              label: "Today",
              group: "concept",
              detail:
                "1984: >1.000 host; nay: hàng triệu host kết nối — Internet = tập hợp toàn cầu các network nối doanh nghiệp, chính phủ, trường học, cá nhân.",
            },
          ],
          [
            { from: "s1_far", to: "s1_phone", label: "bất tiện" },
            { from: "s1_phone", to: "s1_modem", label: "cần modem" },
            { from: "s1_modem", to: "s1_arpa", label: "ra đời" },
            { from: "s1_arpa", to: "s1_today", label: "phát triển" },
          ],
          "Internet sinh ra để giải bài toán khoảng cách — và 2 mục tiêu gốc của ARPANET vẫn định nghĩa nó hôm nay.",
        ),
        calloutBlock(
          "note",
          "Analog vs Digital — và vai trò modem",
          "Analog: liên tục theo thời gian & giá trị (như kim đồng hồ quét). Digital: rời rạc (đồng hồ số). Modem bắc cầu giữa máy tính (digital) và đường truyền analog cũ.",
        ),
      ],
      keyTerms: [
        {
          term: "Internet",
          definition:
            "Tập hợp toàn cầu các network nối doanh nghiệp, chính phủ, trường học và cá nhân.",
        },
        {
          term: "ARPANET",
          definition:
            "Mạng đầu tiên hoạt động năm 1969; mục tiêu là chia sẻ thông tin/làm việc chung và tiếp tục chạy nếu một phần mạng bị phá hủy.",
        },
        {
          term: "modem (modulation/demodulation)",
          definition:
            "Thiết bị chuyển digital ↔ analog: modulation khi gửi, demodulation khi nhận.",
        },
      ],
    },
    {
      id: "s2",
      heading: "Connecting to the Internet",
      blocks: [
        comparisonBlock(
          "Wired vs Wireless connection",
          ["Tiêu chí", "Wired", "Wireless"],
          [
            {
              label: "Ví dụ dịch vụ",
              cells: [
                "Cable Internet, DSL (digital subscriber line), Fiber to the Premises (FTTP)",
                "Wi-Fi (802.11), mobile broadband, fixed wireless, satellite Internet",
              ],
            },
            {
              label: "Cách nối",
              cells: [
                "Cáp/dây nối vật lý vào communications device",
                "Dùng wireless modem / thiết bị thu phát; không cần dây",
              ],
            },
            {
              label: "Đặc điểm",
              cells: [
                "Ổn định, thường nhanh & rẻ trên mỗi Mbps",
                "Cơ động, phủ nơi khó kéo cáp; phụ thuộc sóng/khoảng cách",
              ],
            },
          ],
        ),
        calloutBlock(
          "key",
          "ISP, hot spot & bandwidth",
          "ISP (Internet service provider): doanh nghiệp bán quyền truy cập Internet (miễn phí hoặc trả phí). Hot spot: mạng không dây cấp Internet cho thiết bị di động. Bandwidth: lượng dữ liệu chạy qua mạng — đo bằng Mbps (triệu bit/s) hoặc Gbps (tỷ bit/s).",
        ),
      ],
      keyTerms: [
        {
          term: "ISP",
          definition:
            "Internet service provider — doanh nghiệp bán quyền truy cập Internet.",
        },
        {
          term: "bandwidth",
          definition:
            "Lượng dữ liệu truyền qua mạng trong một đơn vị thời gian, thường đo bằng Mbps hoặc Gbps.",
        },
        {
          term: "hot spot",
          definition:
            "Mạng không dây cung cấp Internet cho thiết bị di động trong một khu vực.",
        },
        {
          term: "DSL",
          definition:
            "Digital subscriber line — kết nối Internet tốc độ cao qua đường điện thoại.",
        },
        {
          term: "FTTP",
          definition:
            "Fiber to the Premises — cáp quang kéo tới tận nhà/văn phòng.",
        },
      ],
    },
    {
      id: "s3",
      heading: "IP → domain → DNS",
      blocks: [
        flowBlock(
          "s3",
          "Phân giải tên miền",
          "horizontal",
          [
            {
              id: "s3_domain",
              label: "Domain name",
              group: "term",
              detail:
                "Tên dạng chữ dễ nhớ (vd hcmut.edu.vn) tương ứng một IP address.",
            },
            {
              id: "s3_dns",
              label: "DNS server",
              group: "term",
              detail:
                "Dịch domain name → IP address tương ứng.",
            },
            {
              id: "s3_ip",
              label: "IP address",
              group: "term",
              detail:
                "Dãy số định danh duy nhất mỗi máy/thiết bị nối Internet; máy dùng số này để tìm nhau.",
            },
          ],
          [
            { from: "s3_domain", to: "s3_dns", label: "tra cứu" },
            { from: "s3_dns", to: "s3_ip", label: "trả về IP" },
          ],
          "Người nhớ tên chữ; máy định tuyến bằng số — DNS là cầu nối giữa hai thế giới.",
        ),
      ],
      keyTerms: [
        {
          term: "IP address",
          definition:
            "Dãy số định danh duy nhất mỗi máy/thiết bị nối Internet.",
        },
        {
          term: "domain name",
          definition:
            "Tên dạng chữ dễ nhớ tương ứng với một IP address.",
        },
        {
          term: "DNS server",
          definition:
            "Máy chủ dịch domain name thành IP address.",
        },
      ],
    },
    {
      id: "s4",
      heading: "WWW & phát minh của Tim Berners-Lee",
      blocks: [
        flowBlock(
          "s4",
          "Web hoạt động: client-server",
          "horizontal",
          [
            {
              id: "s4_browser",
              label: "Web browser (client)",
              group: "term",
              detail:
                "Chương trình client chính; gửi request và hiển thị trang theo mã html nhận về.",
            },
            {
              id: "s4_req",
              label: "HTTP request",
              group: "term",
              detail:
                "Trình duyệt yêu cầu một webpage qua giao thức http (hypertext transport protocol).",
            },
            {
              id: "s4_server",
              label: "Web server",
              group: "term",
              detail:
                "Máy tính 'phục vụ' webpage để đáp ứng request từ browser.",
            },
            {
              id: "s4_page",
              label: "Webpage (html)",
              group: "term",
              detail:
                "Tài liệu điện tử viết bằng html; có hypertext (link nhúng nối các tài liệu) + multimedia.",
            },
          ],
          [
            { from: "s4_browser", to: "s4_req", label: "gửi" },
            { from: "s4_req", to: "s4_server", label: "phục vụ" },
            { from: "s4_server", to: "s4_page", label: "trả html" },
            { from: "s4_page", to: "s4_browser", label: "hiển thị" },
          ],
          "Tim Berners-Lee phát minh WWW năm 1990 tại CERN — dựa trên client-server, hypertext, multimedia và các chuẩn http/html.",
        ),
        calloutBlock(
          "insight",
          "WWW ≠ Internet",
          "Internet là hạ tầng mạng vật lý toàn cầu; WWW là tập hợp các tài liệu điện tử (webpage) chạy TRÊN Internet. Web 2.0 = các website cho phép người dùng chia sẻ thông tin cá nhân, sửa nội dung, và chạy app qua trình duyệt.",
        ),
      ],
      keyTerms: [
        {
          term: "World Wide Web (WWW)",
          definition:
            "Tập hợp các tài liệu điện tử liên kết với nhau và chạy trên Internet.",
        },
        {
          term: "website",
          definition:
            "Tập hợp webpage liên quan được lưu trên web server.",
        },
        {
          term: "web server",
          definition:
            "Máy tính phục vụ webpage khi browser gửi request.",
        },
        {
          term: "Web 2.0",
          definition:
            "Website cho phép người dùng chia sẻ thông tin, chỉnh sửa nội dung và chạy ứng dụng qua browser.",
        },
        {
          term: "hypertext",
          definition:
            "Text chứa link nhúng để nối tới tài liệu hoặc vị trí khác.",
        },
        {
          term: "HTML",
          definition:
            "Hypertext Markup Language — ngôn ngữ đánh dấu để tạo webpage.",
        },
        {
          term: "HTTP",
          definition:
            "Hypertext Transport Protocol — giao thức browser dùng để yêu cầu webpage.",
        },
      ],
    },
    {
      id: "s5",
      heading: "Browser, URL, web app & cloud storage",
      blocks: [
        comparisonBlock(
          "Trình duyệt & ứng dụng web",
          ["Khái niệm", "Là gì", "Ghi chú"],
          [
            {
              label: "Browser",
              cells: [
                "Ứng dụng truy cập & xem webpage",
                "Hỗ trợ tabbed browsing; home page = trang đầu website hiển thị",
              ],
            },
            {
              label: "Web address (URL)",
              cells: [
                "Địa chỉ duy nhất của một webpage",
                "Gồm protocol + domain + đường dẫn",
              ],
            },
            {
              label: "Web app",
              cells: [
                "Ứng dụng lưu trên web server, truy cập qua browser",
                "Nhà cung cấp thường cho cloud storage để lưu dữ liệu người dùng",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "browser",
          definition:
            "Ứng dụng dùng để truy cập và xem webpage.",
        },
        {
          term: "home page",
          definition:
            "Trang đầu tiên hoặc trang chính của một website.",
        },
        {
          term: "URL (web address)",
          definition:
            "Địa chỉ duy nhất của webpage, gồm protocol, domain và đường dẫn.",
        },
        {
          term: "web app",
          definition:
            "Ứng dụng lưu trên web server và được truy cập qua browser.",
        },
        {
          term: "cloud storage",
          definition:
            "Dịch vụ lưu dữ liệu trên server của nhà cung cấp để truy cập qua Internet.",
        },
      ],
    },
    {
      id: "s6",
      heading: "Types of websites + web publishing",
      blocks: [
        flowBlock(
          "s6",
          "Web publishing — 5 bước",
          "horizontal",
          [
            {
              id: "s6_plan",
              label: "Plan",
              group: "concept",
              detail: "Xác định mục tiêu, audience, nội dung và phạm vi website.",
            },
            {
              id: "s6_design",
              label: "Design",
              group: "concept",
              detail: "Thiết kế cấu trúc trang, navigation và trải nghiệm người dùng.",
            },
            {
              id: "s6_create",
              label: "Create",
              group: "concept",
              detail: "Tạo webpage, nội dung và media cần thiết.",
            },
            {
              id: "s6_host",
              label: "Host",
              group: "concept",
              detail: "Đưa website lên web server/hosting để người dùng truy cập.",
            },
            {
              id: "s6_maintain",
              label: "Maintain",
              group: "concept",
              detail: "Cập nhật nội dung, sửa lỗi và theo dõi hoạt động website.",
            },
          ],
          [
            { from: "s6_plan", to: "s6_design" },
            { from: "s6_design", to: "s6_create" },
            { from: "s6_create", to: "s6_host" },
            { from: "s6_host", to: "s6_maintain" },
          ],
          "Quy trình tạo & duy trì website.",
        ),
        calloutBlock(
          "note",
          "Cách tìm thông tin: search engine vs subject directory",
          "Search engine: phần mềm tìm website/ảnh/video/tin/bản đồ theo truy vấn. " +
            "Subject directory: phân loại webpage theo nhóm chủ đề (sports, shopping…). " +
            "Search operators giúp tinh chỉnh truy vấn để ra kết quả sát hơn.",
        ),
        comparisonBlock(
          "Các loại website (22 loại, gom 5 nhóm)",
          ["Nhóm", "Các loại website tiêu biểu", "Mục đích chính"],
          [
            {
              label: "Tìm & tổ chức thông tin",
              cells: [
                "Search engine, subject directory, portal, content aggregation, bookmarking",
                "Tìm, gom và tổ chức thông tin để truy cập nhanh",
              ],
            },
            {
              label: "Mạng xã hội & cộng tác",
              cells: [
                "Online social network, media sharing, wiki & collaboration, blog",
                "Kết nối, chia sẻ và cùng tạo nội dung",
              ],
            },
            {
              label: "Tin tức & tri thức",
              cells: [
                "Informational/research, news & mass media, educational, science, health & fitness",
                "Cung cấp thông tin, kiến thức, tin tức",
              ],
            },
            {
              label: "Kinh doanh & giao dịch",
              cells: [
                "Business/gov/org, e-commerce, retail & auctions, banking & finance, careers & employment",
                "Phục vụ hoạt động kinh doanh và giao dịch",
              ],
            },
            {
              label: "Tiện ích & giải trí",
              cells: [
                "Entertainment, travel & tourism, mapping, website creation & management",
                "Giải trí và hỗ trợ tiện ích đời sống",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "search engine",
          definition:
            "Phần mềm tìm website, ảnh, video, tin tức hoặc bản đồ theo chủ đề/truy vấn.",
        },
        {
          term: "subject directory",
          definition:
            "Danh mục phân loại webpage theo nhóm chủ đề.",
        },
        {
          term: "search operator",
          definition:
            "Ký hiệu/từ khóa giúp tinh chỉnh truy vấn tìm kiếm.",
        },
        {
          term: "online social network",
          definition:
            "Website cho phép người dùng kết nối, chia sẻ thông tin cá nhân và nội dung.",
        },
        {
          term: "e-commerce website",
          definition:
            "Website hỗ trợ mua bán hàng hóa/dịch vụ trực tuyến.",
        },
        {
          term: "portal",
          definition:
            "Website gom nhiều dịch vụ/nội dung thành một điểm truy cập.",
        },
      ],
    },
    {
      id: "s7",
      heading: "Digital media on the web",
      blocks: [
        comparisonBlock(
          "Các dạng digital media",
          ["Loại media", "Mô tả", "Định dạng / ghi chú"],
          [
            {
              label: "Graphic",
              cells: [
                "Biểu diễn trực quan thông tin phi văn bản",
                "BMP, GIF, JPEG, PNG, TIFF",
              ],
            },
            {
              label: "Infographic",
              cells: [
                "Trình bày dữ liệu/thông tin để truyền đạt nhanh, đơn giản hóa khái niệm",
                "Dạng đặc biệt của graphic",
              ],
            },
            {
              label: "Animation",
              cells: [
                "Tạo cảm giác chuyển động bằng chuỗi ảnh tĩnh nối tiếp",
                "—",
              ],
            },
            {
              label: "Audio",
              cells: [
                "Nhạc, giọng nói, âm thanh",
                "Nén để giảm dung lượng; nghe qua media player",
              ],
            },
            {
              label: "Video / VR",
              cells: [
                "Video = ảnh hiển thị chuyển động; VR mô phỏng môi trường 3D",
                "Cần băng thông cao",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Plug-in / add-on",
          "Chương trình mở rộng khả năng của trình duyệt (vd phát một định dạng media đặc thù).",
        ),
      ],
      keyTerms: [
        {
          term: "multimedia",
          definition:
            "Sự kết hợp text, graphic, animation, audio, video hoặc VR trên webpage.",
        },
        {
          term: "graphic",
          definition:
            "Biểu diễn trực quan thông tin phi văn bản.",
        },
        {
          term: "infographic",
          definition:
            "Graphic trình bày dữ liệu/thông tin nhanh và đơn giản hóa khái niệm.",
        },
        {
          term: "animation",
          definition:
            "Chuỗi ảnh tĩnh nối tiếp tạo cảm giác chuyển động.",
        },
        {
          term: "virtual reality (VR)",
          definition:
            "Môi trường 3D mô phỏng để người dùng tương tác.",
        },
        {
          term: "plug-in (add-on)",
          definition:
            "Chương trình mở rộng khả năng của browser.",
        },
        {
          term: "media player",
          definition:
            "Phần mềm phát audio/video.",
        },
      ],
    },
    {
      id: "s8",
      heading: "Other Internet services",
      blocks: [
        comparisonBlock(
          "Dịch vụ Internet ngoài Web",
          ["Dịch vụ", "Chức năng"],
          [
            {
              label: "Email",
              cells: [
                "Gửi/nhận tin nhắn & file qua mạng; email program: tạo, gửi, nhận, chuyển tiếp, lưu, in, xóa",
              ],
            },
            {
              label: "Email list",
              cells: [
                "Nhóm địa chỉ email để gửi hàng loạt một thông điệp",
              ],
            },
            {
              label: "Instant messaging (IM)",
              cells: [
                "Báo khi liên hệ online, rồi trao đổi tin/file hoặc vào phòng chat riêng",
              ],
            },
            {
              label: "Chat / chat room",
              cells: [
                "Hội thoại gõ phím real-time với nhiều người; chat room = nơi cho phép chat đồng thời",
              ],
            },
            {
              label: "Online discussion",
              cells: ["Khu vực thảo luận viết về một chủ đề"],
            },
            {
              label: "VoIP",
              cells: [
                "Voice over IP — nói chuyện với người khác qua kết nối Internet",
              ],
            },
            {
              label: "FTP",
              cells: [
                "File Transfer Protocol — chuẩn cho upload/download file giữa các máy; FTP server cho phép up/download",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "email",
          definition:
            "Dịch vụ gửi/nhận tin nhắn và file qua mạng.",
        },
        {
          term: "email list",
          definition:
            "Nhóm địa chỉ email dùng để gửi một thông điệp cho nhiều người.",
        },
        {
          term: "instant messaging",
          definition:
            "Dịch vụ báo khi liên hệ online và cho phép trao đổi tin/file real-time.",
        },
        {
          term: "chat room",
          definition:
            "Không gian cho nhiều người chat đồng thời.",
        },
        {
          term: "VoIP",
          definition:
            "Voice over IP — gọi thoại qua kết nối Internet.",
        },
        {
          term: "FTP",
          definition:
            "File Transfer Protocol — chuẩn upload/download file giữa các máy.",
        },
        {
          term: "FTP server",
          definition:
            "Máy chủ cho phép người dùng upload/download file qua FTP.",
        },
      ],
    },
    {
      id: "s9",
      heading: "Netiquette",
      blocks: [
        calloutBlock(
          "key",
          "Netiquette = code of acceptable Internet behavior",
          "Bộ quy tắc ứng xử được chấp nhận khi giao tiếp trên Internet — lịch sự, tôn trọng, không spam/quấy rối. Trong môi trường business, netiquette kém làm tổn hại uy tín cá nhân và tổ chức.",
        ),
      ],
      keyTerms: [
        {
          term: "netiquette",
          definition:
            "Code of acceptable Internet behavior — quy tắc ứng xử được chấp nhận khi giao tiếp trên Internet.",
        },
      ],
    },
    {
      id: "s10",
      heading: "Mô hình truyền tin + advantages of a network",
      blocks: [
        flowBlock(
          "s10",
          "Mô hình truyền dữ liệu",
          "horizontal",
          [
            {
              id: "s10_send",
              label: "Sending device",
              group: "term",
              detail:
                "Thiết bị khởi tạo và gửi data/instructions/information.",
            },
            {
              id: "s10_media",
              label: "Transmission media",
              group: "term",
              detail: "Đường truyền mang tín hiệu giữa hai đầu.",
            },
            {
              id: "s10_recv",
              label: "Receiving device",
              group: "term",
              detail: "Thiết bị nhận dữ liệu ở đầu kia.",
            },
          ],
          [
            { from: "s10_send", to: "s10_media", label: "tín hiệu" },
            { from: "s10_media", to: "s10_recv", label: "tới đích" },
          ],
          "Digital communications = quá trình ≥2 máy/thiết bị truyền data, instructions, information.",
        ),
        calloutBlock(
          "key",
          "5 advantages của một network (vì sao doanh nghiệp nối mạng)",
          "Sách liệt kê thẳng 5 lợi ích: (1) Facilitate communications — trao đổi nhanh; (2) Share hardware — dùng chung máy in, ổ lưu trữ; (3) Share data & information — truy cập dữ liệu chung; (4) Share software — cài/dùng chung phần mềm; (5) Transfer funds — chuyển tiền điện tử. Đây chính là 'business why' của toàn bộ Part 3.2.",
        ),
      ],
      keyTerms: [
        {
          term: "digital communications",
          definition:
            "Quá trình ít nhất hai máy/thiết bị truyền data, instructions và information.",
        },
        {
          term: "network",
          definition:
            "Tập hợp máy tính/thiết bị kết nối với nhau qua communications devices và transmission media.",
        },
        {
          term: "transmission media (sending/receiving device)",
          definition:
            "Transmission media mang tín hiệu; sending device gửi dữ liệu, receiving device nhận dữ liệu.",
        },
      ],
    },
    {
      id: "s11",
      heading: "LAN / MAN / WAN / PAN",
      blocks: [
        comparisonBlock(
          "Phân loại network theo phạm vi",
          ["Loại", "Phạm vi", "Ghi chú"],
          [
            {
              label: "LAN",
              cells: [
                "Khu vực địa lý giới hạn (1 tòa nhà/văn phòng)",
                "WLAN = LAN không dùng dây vật lý",
              ],
            },
            {
              label: "MAN",
              cells: [
                "Quy mô đô thị",
                "Nối nhiều LAN trong một thành phố",
              ],
            },
            {
              label: "WAN",
              cells: [
                "Khu vực địa lý rộng lớn",
                "Có thể trải nhiều thành phố/quốc gia",
              ],
            },
            {
              label: "PAN",
              cells: [
                "Không gian làm việc cá nhân",
                "Nối thiết bị quanh một người, có dây & không dây",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "LAN",
          definition:
            "Local Area Network — network trong khu vực địa lý giới hạn.",
        },
        {
          term: "WLAN",
          definition:
            "Wireless LAN — LAN không dùng dây vật lý.",
        },
        {
          term: "MAN",
          definition:
            "Metropolitan Area Network — network quy mô đô thị.",
        },
        {
          term: "WAN",
          definition:
            "Wide Area Network — network phủ khu vực địa lý rộng lớn.",
        },
        {
          term: "PAN",
          definition:
            "Personal Area Network — network quanh không gian làm việc cá nhân.",
        },
      ],
    },
    {
      id: "s12",
      heading: "Client/server vs Peer-to-peer",
      blocks: [
        comparisonBlock(
          "Network architecture",
          ["Tiêu chí", "Client/server", "Peer-to-peer (P2P)"],
          [
            {
              label: "Vai trò máy",
              cells: [
                "Có server trung tâm phục vụ các client",
                "Các máy ngang hàng, vừa cấp vừa dùng tài nguyên",
              ],
            },
            {
              label: "Quản lý",
              cells: [
                "Tập trung, dễ kiểm soát & bảo mật",
                "Phân tán, đơn giản, ít chi phí server",
              ],
            },
            {
              label: "Phù hợp",
              cells: [
                "Tổ chức cần kiểm soát, dữ liệu chung lớn",
                "Nhóm nhỏ, chia sẻ trực tiếp",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "client/server network",
          definition:
            "Network có server trung tâm phục vụ các client.",
        },
        {
          term: "peer-to-peer network",
          definition:
            "Network trong đó các máy ngang hàng vừa cấp vừa dùng tài nguyên.",
        },
        {
          term: "network architecture",
          definition:
            "Cách các máy/thiết bị trong network được tổ chức và chia vai trò.",
        },
      ],
    },
    {
      id: "s13",
      heading: "Communications software",
      blocks: [
        calloutBlock(
          "note",
          "3 việc của communications software",
          "Programs/apps giúp: (1) thiết lập kết nối tới máy/thiết bị/mạng khác; (2) quản lý việc truyền data, instructions, information; (3) cung cấp giao diện để người dùng giao tiếp với nhau.",
        ),
      ],
      keyTerms: [
        {
          term: "communications software",
          definition:
            "Programs/apps giúp thiết lập kết nối, quản lý truyền dữ liệu và cung cấp giao diện giao tiếp.",
        },
      ],
    },
    {
      id: "s14",
      heading: "Network communications standards & protocols",
      blocks: [
        comparisonBlock(
          "Chuẩn & giao thức mạng",
          ["Standard/Protocol", "Đặc trưng"],
          [
            {
              label: "Ethernet",
              cells: [
                "Không có máy trung tâm điều khiển; mỗi node tự quyết khi nào truyền",
              ],
            },
            {
              label: "Token ring",
              cells: [
                "Các máy chia sẻ/chuyền một tín hiệu đặc biệt (token) để được phép truyền",
              ],
            },
            {
              label: "TCP/IP",
              cells: [
                "Định nghĩa cách định tuyến message (data) từ đầu này tới đầu kia của mạng",
              ],
            },
            {
              label: "Wi-Fi",
              cells: [
                "Mọi mạng theo chuẩn 802.11 — quy định 2 thiết bị không dây giao tiếp qua sóng",
              ],
            },
            {
              label: "LTE",
              cells: [
                "Chuẩn truyền tế bào tốc độ cao bằng broadcast radio cho mobile",
              ],
            },
            {
              label: "Bluetooth / UWB",
              cells: [
                "Sóng radio tầm ngắn truyền dữ liệu giữa thiết bị; UWB tốc độ cao hơn",
              ],
            },
            {
              label: "IrDA / RFID / NFC",
              cells: [
                "IrDA: hồng ngoại. RFID: sóng radio đọc tag gắn vật/người/động vật. NFC: dựa trên RFID, tầm rất gần",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "Ethernet",
          definition:
            "Chuẩn mạng trong đó không có máy trung tâm điều khiển; mỗi node tự quyết khi nào truyền.",
        },
        {
          term: "TCP/IP",
          definition:
            "Giao thức định nghĩa cách định tuyến message từ đầu này tới đầu kia của mạng.",
        },
        {
          term: "Wi-Fi (802.11)",
          definition:
            "Chuẩn mạng không dây cho phép thiết bị giao tiếp qua sóng radio.",
        },
        {
          term: "Bluetooth",
          definition:
            "Chuẩn sóng radio tầm ngắn để truyền dữ liệu giữa thiết bị.",
        },
        {
          term: "RFID",
          definition:
            "Radio Frequency Identification — dùng sóng radio đọc tag gắn trên vật/người/động vật.",
        },
        {
          term: "NFC",
          definition:
            "Near Field Communication — công nghệ dựa trên RFID cho giao tiếp tầm rất gần.",
        },
      ],
    },
    {
      id: "s15",
      heading: "Communications lines",
      blocks: [
        comparisonBlock(
          "Communications lines",
          ["Đường truyền", "Đặc điểm"],
          [
            {
              label: "Dedicated line",
              cells: ["Kết nối luôn-bật giữa hai điểm cố định"],
            },
            {
              label: "Cable / FTTP",
              cells: [
                "Cable Internet qua mạng cáp; FTTP = cáp quang tới tận nơi",
              ],
            },
            {
              label: "DSL / ADSL",
              cells: [
                "DSL trên đường điện thoại; ADSL có tốc độ tải xuống nhanh hơn tải lên",
              ],
            },
            {
              label: "ISDN",
              cells: [
                "Đường số truyền thoại+dữ liệu trên dây điện thoại đồng",
              ],
            },
            {
              label: "T-carrier / ATM",
              cells: [
                "T-carrier: đường thuê tốc độ cao; ATM: chuẩn chuyển mạch gói tốc độ cao",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "dedicated line",
          definition:
            "Kết nối luôn-bật giữa hai điểm cố định.",
        },
        {
          term: "DSL",
          definition:
            "Digital subscriber line — kết nối tốc độ cao trên đường điện thoại.",
        },
        {
          term: "ADSL",
          definition:
            "Asymmetric DSL — DSL có tốc độ tải xuống nhanh hơn tải lên.",
        },
        {
          term: "ISDN",
          definition:
            "Integrated Services Digital Network — đường số truyền thoại và dữ liệu trên dây điện thoại đồng.",
        },
        {
          term: "T-carrier",
          definition:
            "Đường thuê tốc độ cao.",
        },
        {
          term: "ATM",
          definition:
            "Asynchronous Transfer Mode — chuẩn chuyển mạch gói tốc độ cao.",
        },
      ],
    },
    {
      id: "s16",
      heading: "Communications devices",
      blocks: [
        flowBlock(
          "s16",
          "Thiết bị nối mạng tại gia/văn phòng",
          "horizontal",
          [
            {
              id: "s16_modem",
              label: "Broadband modem",
              group: "term",
              detail:
                "Gửi/nhận dữ liệu tới đường số (cable modem / DSL modem); wireless modem dùng mạng nhà mạng để nối Internet không dây.",
            },
            {
              id: "s16_router",
              label: "Router",
              group: "term",
              detail:
                "Nối nhiều máy/router và truyền dữ liệu tới đúng đích trên mạng; biến thể: wireless/broadband router.",
            },
            {
              id: "s16_wap",
              label: "Wireless access point (WAP)",
              group: "term",
              detail:
                "Điểm trung tâm cho thiết bị truyền dữ liệu không dây với nhau hoặc tới mạng có dây.",
            },
            {
              id: "s16_switch",
              label: "Hub / Switch",
              group: "term",
              detail: "Điểm tập trung cáp trong mạng.",
            },
            {
              id: "s16_nic",
              label: "Network card",
              group: "term",
              detail:
                "Cho máy/thiết bị chưa có sẵn năng lực mạng truy cập được mạng.",
            },
          ],
          [
            { from: "s16_modem", to: "s16_router", label: "vào mạng" },
            { from: "s16_router", to: "s16_wap", label: "phát Wi-Fi" },
            { from: "s16_router", to: "s16_switch", label: "nối có dây" },
            { from: "s16_switch", to: "s16_nic", label: "tới máy" },
          ],
          "Đường đi điển hình: Internet → modem → router → (WAP không dây / switch có dây) → thiết bị.",
        ),
      ],
      keyTerms: [
        {
          term: "broadband modem",
          definition:
            "Modem gửi/nhận dữ liệu tới đường số như cable hoặc DSL.",
        },
        {
          term: "wireless modem",
          definition:
            "Modem dùng mạng nhà mạng để nối Internet không dây.",
        },
        {
          term: "wireless access point (WAP)",
          definition:
            "Điểm trung tâm cho thiết bị không dây truyền dữ liệu với nhau hoặc tới mạng có dây.",
        },
        {
          term: "router",
          definition:
            "Thiết bị nối nhiều máy/router và truyền dữ liệu tới đúng đích trên mạng.",
        },
        {
          term: "network card",
          definition:
            "Thiết bị/adapter cho máy truy cập network.",
        },
        {
          term: "hub/switch",
          definition:
            "Điểm tập trung cáp trong mạng.",
        },
      ],
    },
    {
      id: "s17",
      heading: "Transmission media (physical + wireless)",
      blocks: [
        calloutBlock(
          "key",
          "Bandwidth & Latency",
          "Transmission media mang ≥1 tín hiệu; broadband media truyền nhiều tín hiệu cùng lúc. Bandwidth = lượng dữ liệu truyền được. Latency = thời gian tín hiệu đi từ điểm này tới điểm khác — độ trễ, càng thấp càng tốt.",
        ),
        comparisonBlock(
          "Physical transmission media",
          ["Loại cáp", "Đặc điểm"],
          [
            {
              label: "Twisted-pair",
              cells: [
                "Cặp dây đồng xoắn; rẻ, phổ biến (điện thoại, Ethernet)",
              ],
            },
            {
              label: "Coaxial",
              cells: [
                "Dây đồng có lớp chắn; chống nhiễu tốt hơn twisted-pair",
              ],
            },
            {
              label: "Fiber-optic",
              cells: [
                "Sợi thủy tinh truyền ánh sáng; băng thông rất cao, chống nhiễu, đường dài",
              ],
            },
          ],
        ),
        comparisonBlock(
          "Wireless transmission media",
          ["Loại", "Đặc điểm"],
          [
            {
              label: "Broadcast radio",
              cells: [
                "Phát tín hiệu radio qua không khí trên khoảng cách dài",
              ],
            },
            {
              label: "Cellular radio",
              cells: [
                "Dạng broadcast radio cho mobile communications",
              ],
            },
            {
              label: "Microwave",
              cells: [
                "Sóng radio truyền tốc độ cao theo đường thẳng (line-of-sight)",
              ],
            },
            {
              label: "Communications satellite",
              cells: [
                "Trạm vũ trụ nhận sóng microwave từ trạm mặt đất, khuếch đại & phát lại trên vùng rộng",
              ],
            },
            {
              label: "GPS",
              cells: [
                "Hệ định vị: receiver mặt đất phân tích tín hiệu vệ tinh để xác định vị trí địa lý",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "bandwidth",
          definition:
            "Lượng dữ liệu truyền được qua transmission media trong một đơn vị thời gian.",
        },
        {
          term: "latency",
          definition:
            "Thời gian tín hiệu đi từ điểm này tới điểm khác.",
        },
        {
          term: "twisted-pair cable",
          definition:
            "Cặp dây đồng xoắn; rẻ và phổ biến.",
        },
        {
          term: "coaxial cable",
          definition:
            "Dây đồng có lớp chắn chống nhiễu tốt hơn twisted-pair.",
        },
        {
          term: "fiber-optic cable",
          definition:
            "Sợi thủy tinh truyền ánh sáng; băng thông cao, chống nhiễu, truyền xa.",
        },
        {
          term: "microwave",
          definition:
            "Sóng radio truyền tốc độ cao theo đường thẳng.",
        },
        {
          term: "communications satellite",
          definition:
            "Trạm vũ trụ nhận, khuếch đại và phát lại tín hiệu microwave.",
        },
        {
          term: "GPS",
          definition:
            "Hệ định vị dùng tín hiệu vệ tinh để xác định vị trí địa lý.",
        },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "Which pair best describes ARPANET's two original goals?",
      options: [
        {
          id: "a",
          text: "To share information across locations and keep working if part of the network was destroyed",
          isCorrect: true,
          rationale:
            "Đúng. ARPANET 1969 có 2 mục tiêu gốc: giúp nhà khoa học ở các vị trí khác nhau chia sẻ thông tin/làm việc chung, và mạng vẫn hoạt động nếu một phần bị phá hủy.",
        },
        {
          id: "b",
          text: "To let scientists share information, but only when all network nodes were available",
          isCorrect: false,
          rationale:
            "Bẫy chỉ lấy một nửa ý. ARPANET không chỉ phục vụ chia sẻ thông tin; mục tiêu resilience là mạng vẫn chạy dù một phần bị phá hủy.",
        },
        {
          id: "c",
          text: "To create the World Wide Web and make web pages searchable",
          isCorrect: false,
          rationale:
            "Bẫy timeline. WWW do Tim Berners-Lee phát minh năm 1990, muộn hơn ARPANET 1969; search engine cũng không phải mục tiêu gốc của ARPANET.",
        },
        {
          id: "d",
          text: "To replace telephone networks and eliminate analog communication",
          isCorrect: false,
          rationale:
            "Bẫy modem/analog. ARPANET không nhằm xóa mạng điện thoại; modem chỉ là cách bắc cầu digital data qua đường analog cũ.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Mục tiêu gốc của ARPANET",
      takeaway:
        "ARPANET = share information across locations + keep functioning if part of the network is destroyed.",
    },
    {
      id: "q02",
      stem: "What does a DNS server do?",
      options: [
        {
          id: "a",
          text: "It translates a domain name into its IP address",
          isCorrect: true,
          rationale:
            "Đúng. Người dùng nhớ domain name dạng chữ; máy cần IP address dạng số. DNS server là cầu nối dịch domain → IP.",
        },
        {
          id: "b",
          text: "It translates an IP address into a browser tab",
          isCorrect: false,
          rationale:
            "Bẫy gán nhầm cho browser. Browser hiển thị webpage; DNS không tạo tab hay giao diện, nó chỉ phân giải tên miền sang địa chỉ IP.",
        },
        {
          id: "c",
          text: "It gives every web page a domain name",
          isCorrect: false,
          rationale:
            "Bẫy cấp phát. DNS server không tự đặt tên cho webpage; nó tra cứu domain name đã đăng ký và trả về IP tương ứng.",
        },
        {
          id: "d",
          text: "It converts analog telephone signals into digital computer data",
          isCorrect: false,
          rationale:
            "Bẫy lẫn với modem. Modem xử lý digital ↔ analog; DNS xử lý domain name ↔ IP address.",
        },
      ],
      difficulty: "basic",
      conceptTested: "IP address, domain name và DNS server",
      takeaway:
        "Domain name là tên chữ dễ nhớ; IP address là số máy dùng để định tuyến; DNS dịch domain name thành IP address.",
    },
    {
      id: "q03",
      stem: "Which statement best distinguishes the World Wide Web from the Internet?",
      options: [
        {
          id: "a",
          text: "The Web is a collection of web pages that runs on the Internet; the Internet is the global network infrastructure",
          isCorrect: true,
          rationale:
            "Đúng. Internet là hạ tầng mạng toàn cầu; WWW là lớp tài liệu điện tử/webpage chạy trên hạ tầng đó.",
        },
        {
          id: "b",
          text: "The Web and the Internet are exactly the same thing",
          isCorrect: false,
          rationale:
            "Bẫy đồng nhất thuật ngữ. Web chạy trên Internet nhưng không phải Internet; Internet còn chở email, FTP, VoIP và nhiều dịch vụ khác.",
        },
        {
          id: "c",
          text: "Tim Berners-Lee invented the Internet in 1969",
          isCorrect: false,
          rationale:
            "Bẫy timeline và người phát minh. Tim Berners-Lee phát minh WWW năm 1990 tại CERN; ARPANET hoạt động từ 1969.",
        },
        {
          id: "d",
          text: "The Internet is a set of HTML documents, while the Web is the physical cables",
          isCorrect: false,
          rationale:
            "Bẫy đảo vai trò. HTML/webpage thuộc WWW; hạ tầng network/cable/standards thuộc Internet.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "WWW vs Internet",
      takeaway:
        "Internet = hạ tầng network; WWW = webpage/website chạy trên Internet bằng client-server, HTTP và HTML.",
    },
    {
      id: "q04",
      stem: "Which option is NOT one of the five advantages of a network listed in the chapter?",
      options: [
        {
          id: "a",
          text: "Facilitating communications",
          isCorrect: false,
          rationale:
            "Đây là một advantage thật. Network giúp trao đổi nhanh giữa người và thiết bị.",
        },
        {
          id: "b",
          text: "Sharing hardware, data, information, and software",
          isCorrect: false,
          rationale:
            "Đây là nhóm advantage thật: share hardware, share data & information, và share software đều nằm trong danh sách.",
        },
        {
          id: "c",
          text: "Transferring funds electronically",
          isCorrect: false,
          rationale:
            "Đây là advantage thật trong slide: network hỗ trợ transfer funds.",
        },
        {
          id: "d",
          text: "Eliminating the need for software",
          isCorrect: true,
          rationale:
            "Đúng vì đây KHÔNG nằm trong 5 advantages. Network có thể share software, nhưng không loại bỏ nhu cầu dùng software.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "5 advantages của một network",
      takeaway:
        "5 advantages: facilitate communications, share hardware, share data & information, share software, transfer funds.",
    },
    {
      id: "q05",
      stem: "A company connects offices across several countries. Which network type best fits this situation?",
      options: [
        {
          id: "a",
          text: "LAN",
          isCorrect: false,
          rationale:
            "Bẫy phạm vi nhỏ. LAN giới hạn trong một khu vực như văn phòng/tòa nhà; không phủ nhiều quốc gia.",
        },
        {
          id: "b",
          text: "WLAN",
          isCorrect: false,
          rationale:
            "Bẫy wireless. WLAN chỉ là LAN không dây; nó vẫn là phạm vi local, không phải phân loại cho nhiều quốc gia.",
        },
        {
          id: "c",
          text: "MAN",
          isCorrect: false,
          rationale:
            "Bẫy quy mô đô thị. MAN nối nhiều LAN trong một thành phố, không phải nhiều quốc gia.",
        },
        {
          id: "d",
          text: "WAN",
          isCorrect: true,
          rationale:
            "Đúng. WAN phủ khu vực địa lý rộng lớn, có thể trải nhiều thành phố/quốc gia.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "LAN vs MAN vs WAN vs PAN",
      takeaway:
        "LAN = local; WLAN = LAN không dây; MAN = đô thị; WAN = vùng rộng/nhiều thành phố/quốc gia; PAN = quanh một người.",
    },
    {
      id: "q06",
      stem: "Which statement correctly matches Ethernet and TCP/IP?",
      options: [
        {
          id: "a",
          text: "Ethernet controls access without a central computer; TCP/IP defines how messages are routed end-to-end",
          isCorrect: true,
          rationale:
            "Đúng. Ethernet là chuẩn network không có máy trung tâm điều khiển quyền truyền; TCP/IP định nghĩa cách định tuyến message qua mạng.",
        },
        {
          id: "b",
          text: "Ethernet defines end-to-end Internet routing; TCP/IP only controls when a node may transmit",
          isCorrect: false,
          rationale:
            "Bẫy đảo vai trò. Định tuyến end-to-end là TCP/IP; cơ chế không có máy trung tâm điều khiển quyền truyền thuộc Ethernet.",
        },
        {
          id: "c",
          text: "Ethernet is a wireless 802.11 standard; TCP/IP is a short-range radio technology",
          isCorrect: false,
          rationale:
            "Bẫy lẫn chuẩn. Wi-Fi là 802.11; Bluetooth/UWB là radio tầm ngắn. Ethernet và TCP/IP là các chuẩn/giao thức khác.",
        },
        {
          id: "d",
          text: "Ethernet and TCP/IP are both types of physical transmission media",
          isCorrect: false,
          rationale:
            "Bẫy tầng hạ tầng. Physical media là twisted-pair, coaxial, fiber-optic; Ethernet/TCP/IP là standard/protocol.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Ethernet vs TCP/IP",
      takeaway:
        "Ethernet nói về cách node truyền trong network; TCP/IP nói về cách message được định tuyến từ đầu này tới đầu kia.",
    },
    {
      id: "q07",
      stem: "Which device forwards data to the correct destination across a network and may connect multiple networks?",
      options: [
        {
          id: "a",
          text: "Router",
          isCorrect: true,
          rationale:
            "Đúng. Router nối nhiều máy/router và truyền dữ liệu tới đúng đích trên mạng; wireless/broadband router là biến thể thường gặp.",
        },
        {
          id: "b",
          text: "Broadband modem",
          isCorrect: false,
          rationale:
            "Bẫy thiết bị vào Internet. Modem gửi/nhận dữ liệu tới đường số hoặc chuyển đổi tín hiệu; nó không phải thiết bị chính để định tuyến tới đúng đích trong network.",
        },
        {
          id: "c",
          text: "Hub or switch",
          isCorrect: false,
          rationale:
            "Bẫy điểm tập trung cáp. Hub/switch là điểm tập trung trong mạng, nhưng vai trò định tuyến giữa nhiều mạng thuộc router.",
        },
        {
          id: "d",
          text: "Network card",
          isCorrect: false,
          rationale:
            "Bẫy thiết bị truy cập. Network card giúp một máy tham gia network; nó không điều phối đường đi cho nhiều thiết bị.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Router vs hub/switch vs modem",
      takeaway:
        "Modem nối tới đường dịch vụ; router đưa dữ liệu tới đúng đích; hub/switch tập trung cáp; network card cho máy truy cập mạng.",
    },
    {
      id: "q08",
      stem: "A business needs a long-distance connection with very high bandwidth and strong resistance to interference. Which transmission medium is the best fit?",
      options: [
        {
          id: "a",
          text: "Twisted-pair cable",
          isCorrect: false,
          rationale:
            "Bẫy chi phí thấp. Twisted-pair rẻ và phổ biến, nhưng không phải lựa chọn tốt nhất cho băng thông rất cao, đường dài và chống nhiễu mạnh.",
        },
        {
          id: "b",
          text: "Coaxial cable",
          isCorrect: false,
          rationale:
            "Bẫy chống nhiễu vừa phải. Coaxial chống nhiễu tốt hơn twisted-pair, nhưng fiber-optic vượt trội về bandwidth và khoảng cách.",
        },
        {
          id: "c",
          text: "Fiber-optic cable",
          isCorrect: true,
          rationale:
            "Đúng. Fiber-optic truyền bằng ánh sáng, băng thông rất cao, chống nhiễu tốt và phù hợp đường dài.",
        },
        {
          id: "d",
          text: "Communications satellite",
          isCorrect: false,
          rationale:
            "Bẫy phủ rộng. Satellite phủ vùng rộng nhưng thường có latency cao; tình huống nhấn mạnh bandwidth cao + chống nhiễu + đường dài nên fiber-optic phù hợp hơn.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "Chọn transmission media theo tình huống business",
      takeaway:
        "Manager chọn media bằng lens bandwidth–chi phí–độ tin cậy/latency. Fiber-optic mạnh cho băng thông cao, chống nhiễu và truyền xa.",
    },
    {
      id: "q09",
      stem: "Which statement correctly describes the World Wide Web and client-server web communication?",
      options: [
        {
          id: "a",
          text: "Tim Berners-Lee invented the World Wide Web in 1990 at CERN; web browsing uses a client-server model with browsers, HTTP, and HTML",
          isCorrect: true,
          rationale:
            "Đúng. Berners-Lee phát minh WWW, không phải toàn bộ Internet; browser là client, web dùng HTTP để truyền và HTML để mô tả trang.",
        },
        {
          id: "b",
          text: "Tim Berners-Lee invented the entire Internet in 1990",
          isCorrect: false,
          rationale:
            "Bẫy gán sai phát minh. Ông phát minh World Wide Web; Internet là hạ tầng mạng rộng hơn và có lịch sử trước WWW.",
        },
        {
          id: "c",
          text: "HTTP and HTML are the same thing",
          isCorrect: false,
          rationale:
            "Bẫy đồng nhất acronym. HTTP là protocol truyền request/response; HTML là markup language mô tả nội dung web page.",
        },
        {
          id: "d",
          text: "A browser is a server that stores every website's database",
          isCorrect: false,
          rationale:
            "Bẫy đảo client-server. Browser là client gửi request; server mới phản hồi và phục vụ tài nguyên web.",
        },
      ],
      difficulty: "basic",
      conceptTested: "WWW invention and client-server web",
      takeaway:
        "Berners-Lee phát minh WWW tại CERN năm 1990; web chạy client-server với browser, HTTP và HTML.",
    },
    {
      id: "q10",
      stem: "Which Internet service matching is correct?",
      options: [
        {
          id: "a",
          text: "VoIP supports voice calls over the Internet; FTP uploads/downloads files; an email list sends messages to many recipients",
          isCorrect: true,
          rationale:
            "Đúng. VoIP là voice over Internet, FTP là file transfer, email list dùng để gửi cùng nội dung tới nhiều người.",
        },
        {
          id: "b",
          text: "VoIP is mainly for uploading files, while FTP is mainly for voice calls",
          isCorrect: false,
          rationale:
            "Bẫy đảo dịch vụ. VoIP xử lý thoại; FTP xử lý upload/download file.",
        },
        {
          id: "c",
          text: "Instant messaging is the same service as FTP",
          isCorrect: false,
          rationale:
            "Bẫy đồng nhất. IM là nhắn tin thời gian gần thực; FTP là giao thức chuyển file.",
        },
        {
          id: "d",
          text: "An email list can only send one-to-one private chat messages",
          isCorrect: false,
          rationale:
            "Bẫy thu hẹp. Email list phục vụ gửi hàng loạt tới một nhóm người nhận.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Internet service matching",
      takeaway:
        "VoIP = thoại qua Internet; FTP = upload/download file; email list = gửi hàng loạt.",
    },
    {
      id: "q11",
      stem: "Which statement best distinguishes bandwidth from latency?",
      options: [
        {
          id: "a",
          text: "Bandwidth is how much data can be transmitted; latency is the delay or time for a signal to travel, and lower latency is better",
          isCorrect: true,
          rationale:
            "Đúng. Bandwidth đo lượng dữ liệu truyền được; latency đo độ trễ/tốc độ phản hồi, nên càng thấp càng tốt.",
        },
        {
          id: "b",
          text: "Bandwidth is the delay in signal travel time",
          isCorrect: false,
          rationale:
            "Bẫy nhầm định nghĩa. Độ trễ là latency; bandwidth là capacity/lượng dữ liệu có thể truyền.",
        },
        {
          id: "c",
          text: "Higher latency is always better for real-time communication",
          isCorrect: false,
          rationale:
            "Bẫy chiều tốt-xấu. Real-time communication cần latency thấp để phản hồi nhanh.",
        },
        {
          id: "d",
          text: "Latency and bandwidth are always identical measurements",
          isCorrect: false,
          rationale:
            "Bẫy đồng nhất. Một đường truyền có thể bandwidth cao nhưng latency vẫn cao; hai khái niệm đo hai mặt khác nhau.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Bandwidth vs Latency",
      takeaway:
        "Bandwidth là capacity dữ liệu; latency là độ trễ. Kết nối tốt cần đủ bandwidth và latency thấp.",
    },
  ],
  status: "ready",
  source:
    "Digital Technology in Business — Topic 03 Network Internet WWW.pdf (Part 3.1 & 3.2).",
};

const topic04: Chapter = {
  slug: "topic-04",
  order: 4,
  title: "Topic 04 — MS Word: Tài liệu dài chuyên nghiệp",
  bigIdea:
    "Một tài liệu chuyên nghiệp dài — luận văn, báo cáo, đề án — không phải 'gõ chữ' mà là 'dựng cấu trúc'. Điều phân biệt tài liệu nghiệp dư với chuyên nghiệp là cấu trúc đó có được tự động hoá hay không: section breaks cho phép định dạng khác nhau giữa các phần; multilevel headings tự sinh Table of Contents; captions tự sinh List of Figures/Tables; header/footer và số trang (i, ii, iii… hay 1, 2, 3…) khác nhau theo từng section. Khi bạn để Word quản lý cấu trúc thay vì căn tay, tài liệu vừa đẹp – nhất quán – đáng tin, vừa sửa một chỗ là cập nhật toàn bộ. Đây là practical skill dùng suốt đời — từ bài tập, khoá luận tới mọi business report sau này; vì tài liệu kém làm lu mờ cả ý tưởng tốt.",
  learningObjectives: [
    "Nhận diện các cấu phần của một tài liệu dài (cover, sections/chapters, headings, TOC, list of figures/tables, references, appendices) và vì sao cần quản lý cấu trúc.",
    "Thuật lại 8 key steps để dựng một tài liệu dài chuyên nghiệp trong Word.",
    "Dùng section breaks (Layout > Breaks) để áp layout/format khác nhau cho từng phần tài liệu.",
    "Dùng multilevel list / heading (Home > Paragraph > Multilevel list) để tạo outline nhiều cấp.",
    "Tự sinh Table of Contents từ headings (References > Table of Contents) và cập nhật khi nội dung đổi.",
    "Tạo List of Figures/Tables theo 2 bước: chèn captions → sinh danh mục.",
    "Đặt header/footer khác nhau giữa các section; chèn số trang dạng i, ii, iii… hoặc 1, 2, 3… (Insert > Page Number > Format Page Numbers).",
    "Chèn trang landscape giữa các trang portrait; tạo in-text citations, bibliography và mail merge.",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "Tài liệu dài chuyên nghiệp = dựng cấu trúc → tự sinh danh mục → trình bày & hoàn thiện. Bấm node để mở chi tiết và nhảy tới phần học.",
    nodes: [
      {
        id: "doc",
        label: "MS Word — tài liệu dài",
        group: "concept",
        sectionId: "s1",
        detail:
          "Tài liệu chuyên nghiệp = cấu trúc tự động hoá, không căn tay.",
      },
      {
        id: "g_struct",
        label: "A. Dựng cấu trúc",
        group: "concept",
        parent: "doc",
        sectionId: "s3",
        detail: "Outline → section breaks → multilevel headings.",
      },
      {
        id: "g_auto",
        label: "B. Tự sinh danh mục",
        group: "concept",
        parent: "doc",
        sectionId: "s6",
        detail: "Table of Contents + List of Figures/Tables tự cập nhật.",
      },
      {
        id: "g_finish",
        label: "C. Trình bày & hoàn thiện",
        group: "concept",
        parent: "doc",
        sectionId: "s8",
        detail:
          "Header/footer theo section, số trang, landscape, citations & mail merge.",
      },
      {
        id: "t_outline",
        label: "Outline",
        group: "term",
        parent: "g_struct",
        sectionId: "s3",
        detail: "Phác cấu trúc trước khi viết.",
      },
      {
        id: "t_section",
        label: "Section breaks",
        group: "term",
        parent: "g_struct",
        sectionId: "s4",
        detail: "Layout > Breaks; format khác nhau theo phần.",
      },
      {
        id: "t_heading",
        label: "Multilevel headings",
        group: "term",
        parent: "g_struct",
        sectionId: "s5",
        detail:
          "Home > Paragraph > Multilevel list; outline nhiều cấp.",
      },
      {
        id: "t_toc",
        label: "Table of Contents",
        group: "term",
        parent: "g_auto",
        sectionId: "s6",
        detail: "References > TOC; sinh tự động từ headings.",
      },
      {
        id: "t_figlist",
        label: "List of Figures/Tables",
        group: "term",
        parent: "g_auto",
        sectionId: "s7",
        detail: "Caption trước → sinh danh mục sau.",
      },
      {
        id: "t_hf",
        label: "Headers/Footers theo section",
        group: "term",
        parent: "g_finish",
        sectionId: "s8",
        detail: "Insert > Header > Edit Header.",
      },
      {
        id: "t_page",
        label: "Page numbering",
        group: "term",
        parent: "g_finish",
        sectionId: "s9",
        detail:
          "i, ii, iii… hoặc 1, 2, 3… (Format Page Numbers).",
      },
      {
        id: "t_land",
        label: "Landscape trong portrait",
        group: "term",
        parent: "g_finish",
        sectionId: "s10",
        detail: "Chèn trang ngang giữa trang dọc.",
      },
      {
        id: "t_cite",
        label: "Citations & Mail merge",
        group: "term",
        parent: "g_finish",
        sectionId: "s11",
        detail: "In-text citation, bibliography, mail merge.",
      },
    ],
    edges: [
      { from: "doc", to: "g_struct" },
      { from: "doc", to: "g_auto" },
      { from: "doc", to: "g_finish" },
      { from: "g_struct", to: "t_outline" },
      { from: "g_struct", to: "t_section" },
      { from: "g_struct", to: "t_heading" },
      { from: "g_auto", to: "t_toc" },
      { from: "g_auto", to: "t_figlist" },
      { from: "g_finish", to: "t_hf" },
      { from: "g_finish", to: "t_page" },
      { from: "g_finish", to: "t_land" },
      { from: "g_finish", to: "t_cite" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "Tài liệu dài là gì + neo lens",
      blocks: [
        calloutBlock(
          "key",
          "Nghiệp dư gõ chữ — chuyên nghiệp dựng cấu trúc",
          "Một tài liệu dài (bachelor thesis, assignment report, novel) khác bài viết ngắn ở chỗ nó có cấu trúc nhiều phần. Người chuyên nghiệp không căn tay từng dòng — họ để Word tự quản cấu trúc để sửa một chỗ là cập nhật toàn bộ. *(diễn giải sư phạm; slide nêu loại tài liệu + cấu phần.)*",
        ),
        comparisonBlock(
          "Cấu phần của một tài liệu dài",
          ["Cấu phần", "Vai trò"],
          [
            {
              label: "Cover page",
              cells: ["Trang bìa: tiêu đề, tác giả, thông tin định danh"],
            },
            {
              label: "Sections / chapters",
              cells: ["Chia tài liệu thành các phần/chương lớn"],
            },
            {
              label: "Headings / subheadings",
              cells: ["Tiêu đề các cấp giúp người đọc quét nhanh nội dung"],
            },
            {
              label: "Table of Contents",
              cells: ["Mục lục — dẫn đường tới từng phần"],
            },
            {
              label: "List of figures / tables",
              cells: ["Danh mục hình/bảng kèm số trang"],
            },
            {
              label: "References",
              cells: ["Tài liệu tham khảo / trích dẫn"],
            },
            {
              label: "Appendices",
              cells: ["Phụ lục — nội dung bổ trợ"],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "long document",
          definition:
            "Tài liệu có nhiều phần/chương và cần cấu trúc để quản lý nhất quán.",
        },
        {
          term: "section",
          definition:
            "Một phần của tài liệu có thể được áp layout/format riêng.",
        },
        {
          term: "appendix",
          definition:
            "Phụ lục — phần bổ sung tài liệu, thường đặt cuối file.",
        },
      ],
    },
    {
      id: "s2",
      heading: "8 Key steps to remember",
      blocks: [
        flowBlock(
          "s2",
          "8 bước dựng tài liệu dài",
          "horizontal",
          [
            {
              id: "s2_outline",
              label: "1. Prepare outline",
              group: "concept",
              detail: "Phác cấu trúc tài liệu trước khi viết.",
            },
            {
              id: "s2_section",
              label: "2. Section breaks",
              group: "concept",
              detail: "Tạo các section để format khác nhau từng phần.",
            },
            {
              id: "s2_heading",
              label: "3. Add headings",
              group: "concept",
              detail: "Gắn multilevel headings cho các cấp tiêu đề.",
            },
            {
              id: "s2_toc",
              label: "4. Build TOC",
              group: "concept",
              detail: "Sinh Table of Contents tự động từ headings.",
            },
            {
              id: "s2_figlist",
              label: "5. List of figures/tables",
              group: "concept",
              detail: "Sinh danh mục hình/bảng từ captions.",
            },
            {
              id: "s2_hf",
              label: "6. Headers/footers theo section",
              group: "concept",
              detail: "Đặt header/footer khác nhau giữa các section.",
            },
            {
              id: "s2_page",
              label: "7. Page numbers",
              group: "concept",
              detail: "Đánh số i, ii, iii… hoặc 1, 2, 3…",
            },
            {
              id: "s2_land",
              label: "8. Landscape page",
              group: "concept",
              detail: "Chèn trang ngang giữa các trang dọc.",
            },
          ],
          [
            { from: "s2_outline", to: "s2_section" },
            { from: "s2_section", to: "s2_heading" },
            { from: "s2_heading", to: "s2_toc" },
            { from: "s2_toc", to: "s2_figlist" },
            { from: "s2_figlist", to: "s2_hf" },
            { from: "s2_hf", to: "s2_page" },
            { from: "s2_page", to: "s2_land" },
          ],
          "Slide nhấn 8 bước này (lặp lại 2 lần) — đây là quy trình chuẩn của tài liệu dài.",
        ),
      ],
    },
    {
      id: "s3",
      heading: "Prepare the outline",
      blocks: [
        calloutBlock(
          "note",
          "Bước 1 — Prepare the outline",
          "Phác trước cấu trúc (các phần/chương, thứ tự, ý chính) trước khi gõ nội dung. Outline tốt là bộ khung để gắn headings và sinh TOC về sau.",
        ),
      ],
      keyTerms: [
        {
          term: "outline",
          definition:
            "Bộ khung cấu trúc của tài liệu: phần/chương, thứ tự và ý chính.",
        },
      ],
    },
    {
      id: "s4",
      heading: "Section breaks",
      blocks: [
        calloutBlock(
          "key",
          "Bước 2 — Section breaks (Layout > Breaks > Section Breaks)",
          "Sections cho phép đặt page layout & formatting RIÊNG cho từng phần tài liệu (vd phần đầu đánh số i, ii, iii; phần thân 1, 2, 3; chèn một trang landscape). Không có section break thì mọi thay đổi định dạng sẽ áp cho cả tài liệu.",
        ),
        calloutBlock(
          "trap",
          "Section break ≠ Page break",
          "Page break chỉ sang trang mới nhưng vẫn CÙNG một section (cùng header/footer, cùng kiểu số trang). Muốn format khác nhau giữa các phần thì phải dùng SECTION break.",
        ),
      ],
      keyTerms: [
        {
          term: "section break",
          definition:
            "Break chia tài liệu thành các section để áp layout/format khác nhau.",
        },
        {
          term: "page break",
          definition:
            "Break chỉ đưa nội dung sang trang mới nhưng vẫn giữ cùng section.",
        },
      ],
    },
    {
      id: "s5",
      heading: "Add headings (multilevel list)",
      blocks: [
        calloutBlock(
          "key",
          "Bước 3 — Add headings (Home > Paragraph > Multilevel list)",
          "Headings làm nội dung nổi bật và giúp người đọc quét tài liệu. Multilevel list tạo outline nhiều cấp (1 → 1.1 → 1.1.1). Có thể chọn mẫu sẵn hoặc 'Define New Multilevel List…'. *Quan trọng:* TOC và đánh số mục dựa vào heading styles này.",
        ),
      ],
      keyTerms: [
        {
          term: "multilevel list",
          definition:
            "Danh sách nhiều cấp dùng để tạo outline như 1, 1.1, 1.1.1.",
        },
        {
          term: "heading style",
          definition:
            "Style gắn cho tiêu đề để Word nhận diện cấu trúc và sinh TOC.",
        },
      ],
    },
    {
      id: "s6",
      heading: "Table of Contents",
      blocks: [
        flowBlock(
          "s6",
          "TOC sinh tự động từ headings",
          "horizontal",
          [
            {
              id: "s6_head",
              label: "Heading styles",
              group: "term",
              detail:
                "Các tiêu đề đã gắn multilevel heading ở bước 3.",
            },
            {
              id: "s6_toc",
              label: "Table of Contents",
              group: "term",
              detail:
                "References > Table of Contents > Custom Table of Contents… — Word quét headings và sinh mục lục kèm số trang.",
            },
            {
              id: "s6_update",
              label: "Update field",
              group: "term",
              detail:
                "Khi nội dung/số trang đổi, chỉ cần Update field để TOC cập nhật, không sửa tay.",
            },
          ],
          [
            { from: "s6_head", to: "s6_toc", label: "quét" },
            { from: "s6_toc", to: "s6_update", label: "cập nhật" },
          ],
          "TOC là sản phẩm tự động của headings — đây là lý do phải gắn heading styles đúng.",
        ),
      ],
      keyTerms: [
        {
          term: "Table of Contents (TOC)",
          definition:
            "Mục lục tự động sinh từ heading styles, có thể update khi nội dung đổi.",
        },
      ],
    },
    {
      id: "s7",
      heading: "List of Figures / Tables",
      blocks: [
        flowBlock(
          "s7",
          "List of Figures/Tables — 2 bước",
          "horizontal",
          [
            {
              id: "s7_caption",
              label: "1. Insert captions",
              group: "concept",
              detail:
                "Chèn caption cho TẤT CẢ hình/bảng trong tài liệu (References > Insert Caption).",
            },
            {
              id: "s7_list",
              label: "2. Create list",
              group: "concept",
              detail: "Sinh danh mục hình/bảng từ các caption đã chèn.",
            },
          ],
          [{ from: "s7_caption", to: "s7_list", label: "rồi mới" }],
          "Thứ tự bắt buộc: có caption trước → mới sinh được danh mục.",
        ),
      ],
      keyTerms: [
        {
          term: "caption",
          definition:
            "Nhãn/mô tả gắn với hình hoặc bảng để Word nhận diện khi sinh danh mục.",
        },
        {
          term: "List of Figures",
          definition:
            "Danh mục hình được sinh từ caption của các hình.",
        },
        {
          term: "List of Tables",
          definition:
            "Danh mục bảng được sinh từ caption của các bảng.",
        },
      ],
    },
    {
      id: "s8",
      heading: "Headers/footers differently between sections",
      blocks: [
        calloutBlock(
          "key",
          "Bước 6 — Header/footer khác nhau theo section (Insert > Header > Edit Header)",
          "Mỗi section có thể có header/footer riêng — vd phần đầu để 'Lời mở đầu', phần thân để tên chương. Điều kiện: đã chia section breaks ở bước 2 (và bỏ liên kết 'Link to Previous' nếu muốn khác hẳn).",
        ),
      ],
      keyTerms: [
        {
          term: "header",
          definition:
            "Vùng nội dung ở đầu trang, có thể khác nhau giữa các section.",
        },
        {
          term: "footer",
          definition:
            "Vùng nội dung ở cuối trang, có thể chứa số trang và khác nhau giữa các section.",
        },
      ],
    },
    {
      id: "s9",
      heading: "Page numbering (i, ii, iii / 1, 2, 3)",
      blocks: [
        calloutBlock(
          "note",
          "Bước 7 — Page number (Insert > Page Number > Format Page Numbers)",
          "Chèn số trang ở bottom/top of page; vào 'Format Page Numbers' để chọn kiểu số.",
        ),
        comparisonBlock(
          "Hai kiểu đánh số trang",
          ["Kiểu số", "Thường dùng cho"],
          [
            {
              label: "i, ii, iii… (La Mã thường)",
              cells: [
                "Phần đầu tài liệu: mục lục, lời mở đầu, danh mục hình/bảng *(quy ước phổ biến)*",
              ],
            },
            {
              label: "1, 2, 3… (Ả Rập)",
              cells: [
                "Phần thân chính của tài liệu *(quy ước phổ biến)*",
              ],
            },
          ],
        ),
        calloutBlock(
          "trap",
          "Muốn 2 kiểu số trong cùng file → cần section break",
          "Đổi kiểu số trang giữa phần đầu và phần thân chỉ làm được khi hai phần nằm ở hai section khác nhau.",
        ),
      ],
      keyTerms: [
        {
          term: "page number format",
          definition:
            "Thiết lập kiểu đánh số trang, ví dụ i, ii, iii… hoặc 1, 2, 3…",
        },
      ],
    },
    {
      id: "s10",
      heading: "Landscape page trong portrait",
      blocks: [
        calloutBlock(
          "note",
          "Bước 8 — Chèn trang landscape giữa các trang portrait",
          "Khi có bảng/hình rộng, chèn một trang xoay ngang (landscape) giữa các trang dọc (portrait). Thực hiện được nhờ tách section quanh trang đó rồi đổi orientation cho riêng section ấy.",
        ),
      ],
      keyTerms: [
        {
          term: "landscape orientation",
          definition:
            "Trang xoay ngang, thường dùng cho bảng/hình rộng.",
        },
        {
          term: "portrait orientation",
          definition:
            "Trang xoay dọc, kiểu mặc định cho phần lớn tài liệu.",
        },
      ],
    },
    {
      id: "s11",
      heading: "Citations & Mail merge",
      blocks: [
        calloutBlock(
          "key",
          "Citations & Mail merge",
          "(1) In-text citations: chèn trích dẫn trong bài (References > Insert Citation). (2) Insert Bibliography: sinh danh mục tài liệu tham khảo từ các citation. (3) Mail merge: trộn một mẫu văn bản với danh sách dữ liệu (vd gửi cùng một thư cho nhiều người, tự điền tên/địa chỉ khác nhau).",
        ),
      ],
      keyTerms: [
        {
          term: "in-text citation",
          definition:
            "Trích dẫn đặt trong nội dung bài viết, thường tạo qua References > Insert Citation.",
        },
        {
          term: "bibliography",
          definition:
            "Danh mục tài liệu tham khảo được sinh từ các citation.",
        },
        {
          term: "mail merge",
          definition:
            "Trộn một mẫu văn bản với danh sách dữ liệu để tạo nhiều bản cá nhân hoá.",
        },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "Which statement best explains the difference between a section break and a page break in Word?",
      options: [
        {
          id: "a",
          text: "A section break lets different parts use different formatting or layout; a page break only starts a new page within the same section",
          isCorrect: true,
          rationale:
            "Đúng. Section break tạo vùng format/layout riêng; page break chỉ đẩy nội dung sang trang mới nhưng vẫn cùng header/footer và kiểu số trang.",
        },
        {
          id: "b",
          text: "A page break lets you use different page numbering styles, while a section break only changes the cursor position",
          isCorrect: false,
          rationale:
            "Bẫy đảo vai trò. Muốn đổi kiểu số trang giữa các phần phải dùng section break; page break không tạo section mới.",
        },
        {
          id: "c",
          text: "Both breaks always create a new section with independent headers and footers",
          isCorrect: false,
          rationale:
            "Bẫy đồng nhất. Page break không tạo section độc lập; nó chỉ sang trang mới trong cùng section.",
        },
        {
          id: "d",
          text: "A section break is only for inserting images; a page break is only for tables",
          isCorrect: false,
          rationale:
            "Bẫy thao tác giả. Section break và page break quản lý cấu trúc/layout trang, không phải công cụ riêng cho ảnh hay bảng.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Section break vs Page break",
      takeaway:
        "Page break = sang trang mới. Section break = chia vùng để định dạng khác nhau giữa các phần tài liệu.",
    },
    {
      id: "q02",
      stem: "In a long Word document, what is the proper source for an automatic Table of Contents?",
      options: [
        {
          id: "a",
          text: "Manually typed chapter titles and page numbers",
          isCorrect: false,
          rationale:
            "Bẫy căn tay. Gõ tay mục lục nhìn có vẻ nhanh nhưng không tự cập nhật khi nội dung hoặc số trang đổi.",
        },
        {
          id: "b",
          text: "Page breaks inserted before every chapter",
          isCorrect: false,
          rationale:
            "Bẫy nhầm break với structure. Page break chỉ sang trang; TOC không sinh từ page breaks.",
        },
        {
          id: "c",
          text: "Heading styles created with multilevel headings",
          isCorrect: true,
          rationale:
            "Đúng. Word quét heading styles/multilevel headings để sinh Table of Contents và số trang tương ứng.",
        },
        {
          id: "d",
          text: "The bibliography entries at the end of the document",
          isCorrect: false,
          rationale:
            "Bẫy nhầm danh mục. Bibliography phục vụ tài liệu tham khảo; TOC sinh từ headings trong nội dung.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "TOC sinh từ heading styles",
      takeaway:
        "Muốn TOC tự động, trước hết phải gắn heading styles đúng cho các cấp tiêu đề.",
    },
    {
      id: "q03",
      stem: "What must you do before creating a List of Figures or List of Tables?",
      options: [
        {
          id: "a",
          text: "Insert captions for all figures or tables first",
          isCorrect: true,
          rationale:
            "Đúng. Word cần captions làm dữ liệu nguồn; có caption trước thì mới sinh List of Figures/Tables được.",
        },
        {
          id: "b",
          text: "Create the list first, then add captions later",
          isCorrect: false,
          rationale:
            "Bẫy sai thứ tự. Nếu chưa có captions, Word không có gì để gom vào danh mục.",
        },
        {
          id: "c",
          text: "Convert every figure into a page break",
          isCorrect: false,
          rationale:
            "Bẫy break. Page break không mô tả hình/bảng và không phải nguồn cho danh mục hình/bảng.",
        },
        {
          id: "d",
          text: "Type the figure numbers manually in the Table of Contents",
          isCorrect: false,
          rationale:
            "Bẫy thủ công. List of Figures/Tables không nên gõ tay; nó sinh từ captions để cập nhật nhất quán.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Caption trước khi sinh List of Figures/Tables",
      takeaway:
        "Quy trình đúng: References > Insert Caption cho hình/bảng trước, sau đó mới tạo List of Figures/Tables.",
    },
    {
      id: "q04",
      stem: "You need front matter numbered i, ii, iii and the main body numbered 1, 2, 3 in the same Word file. What is required?",
      options: [
        {
          id: "a",
          text: "Insert a section break between the front matter and the main body",
          isCorrect: true,
          rationale:
            "Đúng. Hai kiểu page number format trong cùng file cần hai section khác nhau để Word áp format riêng.",
        },
        {
          id: "b",
          text: "Insert only a page break before the main body",
          isCorrect: false,
          rationale:
            "Bẫy page break. Page break chỉ sang trang mới, vẫn cùng section nên không đủ để đổi kiểu số trang độc lập.",
        },
        {
          id: "c",
          text: "Use Mail Merge to change the numbering style",
          isCorrect: false,
          rationale:
            "Bẫy công cụ khác. Mail merge dùng để cá nhân hoá tài liệu từ dữ liệu, không quản lý page numbering.",
        },
        {
          id: "d",
          text: "Create the Table of Contents before inserting any headings",
          isCorrect: false,
          rationale:
            "Bẫy lẫn quy trình. TOC liên quan headings; bài toán này là page number format giữa các section.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Page numbering khác nhau cần section break",
      takeaway:
        "Muốn phần đầu dùng i, ii, iii… và phần thân dùng 1, 2, 3… thì phải chia section rồi format page numbers riêng.",
    },
    {
      id: "q05",
      stem: "What enables different headers or footers in different parts of the same Word document?",
      options: [
        {
          id: "a",
          text: "Section breaks, and disabling Link to Previous when needed",
          isCorrect: true,
          rationale:
            "Đúng. Header/footer khác nhau theo section; nếu muốn section sau khác hẳn section trước thì cần bỏ Link to Previous.",
        },
        {
          id: "b",
          text: "Using the same header style for the entire document",
          isCorrect: false,
          rationale:
            "Bẫy toàn file. Dùng cùng header style làm header/footer giống nhau, không giải quyết nhu cầu khác nhau giữa sections.",
        },
        {
          id: "c",
          text: "Typing the header text into the first paragraph of each page",
          isCorrect: false,
          rationale:
            "Bẫy căn tay. Gõ vào từng trang không phải header/footer thật và rất dễ lệch khi nội dung thay đổi.",
        },
        {
          id: "d",
          text: "Inserting a bibliography before the header",
          isCorrect: false,
          rationale:
            "Bẫy nhầm chức năng. Bibliography phục vụ tài liệu tham khảo, không điều khiển header/footer.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Header/footer khác nhau giữa sections",
      takeaway:
        "Header/footer chuyên nghiệp dựa vào section breaks và Link to Previous, không gõ tay trên từng trang.",
    },
    {
      id: "q06",
      stem: "What is Mail Merge used for?",
      options: [
        {
          id: "a",
          text: "Combining one document template with a data list to create many personalized documents",
          isCorrect: true,
          rationale:
            "Đúng. Mail merge trộn mẫu văn bản với danh sách dữ liệu để tạo nhiều bản cá nhân hoá như thư có tên/địa chỉ khác nhau.",
        },
        {
          id: "b",
          text: "Generating a bibliography from in-text citations",
          isCorrect: false,
          rationale:
            "Bẫy bibliography. Bibliography sinh từ citations; mail merge dùng cho cá nhân hoá hàng loạt.",
        },
        {
          id: "c",
          text: "Inserting captions for all figures and tables",
          isCorrect: false,
          rationale:
            "Bẫy caption. Captions phục vụ List of Figures/Tables, không phải mail merge.",
        },
        {
          id: "d",
          text: "Changing a portrait page into a landscape page",
          isCorrect: false,
          rationale:
            "Bẫy layout. Landscape page cần section/orientation; mail merge không đổi orientation.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Mail merge",
      takeaway:
        "Mail merge = một mẫu + danh sách dữ liệu → nhiều tài liệu cá nhân hoá.",
    },
    {
      id: "q07",
      stem: "What is the best reason to use multilevel headings in a long Word document?",
      options: [
        {
          id: "a",
          text: "They create a structured multi-level outline and provide the basis for an automatic table of contents",
          isCorrect: true,
          rationale:
            "Đúng. Multilevel headings tạo outline nhiều cấp và là nguồn để Word sinh Table of Contents tự động.",
        },
        {
          id: "b",
          text: "They only make selected text bold and larger",
          isCorrect: false,
          rationale:
            "Bẫy hình thức. Heading không chỉ là in đậm; nó mang cấu trúc tài liệu để Word hiểu cấp mục.",
        },
        {
          id: "c",
          text: "They are unrelated to creating a table of contents",
          isCorrect: false,
          rationale:
            "Bẫy tách sai chức năng. TOC tự động phụ thuộc vào heading levels trong document.",
        },
        {
          id: "d",
          text: "They replace the need for sections, citations, and page numbers",
          isCorrect: false,
          rationale:
            "Bẫy phóng đại. Headings giúp outline/TOC, nhưng không thay thế section breaks, citations hay page numbering.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Multilevel headings and TOC",
      takeaway:
        "Headings tạo cấu trúc nhiều cấp cho tài liệu dài và là nền để sinh TOC tự động.",
    },
    {
      id: "q08",
      stem: "After adding new headings and pages to a Word document, how should you update an existing table of contents?",
      options: [
        {
          id: "a",
          text: "Use Update Field to refresh the table of contents",
          isCorrect: true,
          rationale:
            "Đúng. TOC là field tự động; khi nội dung đổi, dùng Update Field để cập nhật headings/số trang.",
        },
        {
          id: "b",
          text: "Delete the table of contents and type all entries manually",
          isCorrect: false,
          rationale:
            "Bẫy làm thủ công. Gõ tay dễ sai và mất lợi ích của TOC tự động.",
        },
        {
          id: "c",
          text: "Manually edit only the page numbers in the table",
          isCorrect: false,
          rationale:
            "Bẫy sửa số trang tay. Khi document đổi tiếp, số trang lại lệch; Update Field mới là thao tác đúng.",
        },
        {
          id: "d",
          text: "Run Mail Merge to rebuild the table of contents",
          isCorrect: false,
          rationale:
            "Bẫy nhầm công cụ. Mail Merge tạo nhiều tài liệu cá nhân hoá, không cập nhật TOC.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Updating a table of contents",
      takeaway:
        "TOC tự động cần Update Field khi headings hoặc số trang thay đổi.",
    },
    {
      id: "q09",
      stem: "How can you make one page landscape in the middle of a portrait Word document?",
      options: [
        {
          id: "a",
          text: "Insert section breaks around that page, then change orientation for that section only",
          isCorrect: true,
          rationale:
            "Đúng. Orientation là thiết lập theo section; muốn chỉ một trang landscape thì phải tách section quanh trang đó.",
        },
        {
          id: "b",
          text: "Insert only a page break before the page",
          isCorrect: false,
          rationale:
            "Bẫy page break. Page break chỉ ngắt trang, không tạo vùng layout riêng để đổi orientation.",
        },
        {
          id: "c",
          text: "Change the orientation setting without section breaks, because it will affect only the current paragraph",
          isCorrect: false,
          rationale:
            "Bẫy phạm vi. Nếu không tách section đúng, orientation có thể áp cho phần lớn hoặc toàn document.",
        },
        {
          id: "d",
          text: "Use Insert Bibliography to rotate the page",
          isCorrect: false,
          rationale:
            "Bẫy không liên quan. Bibliography sinh danh mục tham khảo, không điều khiển page orientation.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Landscape page with section breaks",
      takeaway:
        "Muốn landscape ở giữa portrait document: section break trước/sau trang đó, rồi đổi orientation cho section riêng.",
    },
    {
      id: "q10",
      stem: "How does Word generate a bibliography from sources used in a document?",
      options: [
        {
          id: "a",
          text: "Insert in-text citations first, then use Insert Bibliography to generate the reference list from those citations",
          isCorrect: true,
          rationale:
            "Đúng. Bibliography lấy dữ liệu từ citation/source đã chèn trong document.",
        },
        {
          id: "b",
          text: "Type the bibliography manually because citations cannot feed a bibliography",
          isCorrect: false,
          rationale:
            "Bẫy thủ công. Word có thể sinh Bibliography từ citations, tránh gõ tay dễ sai format.",
        },
        {
          id: "c",
          text: "Use Mail Merge to generate references from recipient names",
          isCorrect: false,
          rationale:
            "Bẫy nhầm chức năng. Mail Merge dùng data list để cá nhân hoá tài liệu, không sinh references.",
        },
        {
          id: "d",
          text: "Create multilevel headings only; Word will infer all sources automatically",
          isCorrect: false,
          rationale:
            "Bẫy heading/citation. Headings phục vụ cấu trúc và TOC; bibliography cần citations/sources.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Citations and Bibliography",
      takeaway:
        "Chèn in-text citations trước, rồi Insert Bibliography để sinh danh mục tham khảo từ các citation đó.",
    },
  ],
  status: "ready",
  source:
    "Digital Technology in Business — Topic 04 MS Word.pdf (Part 4-1: Word Processing).",
};

const topic05: Chapter = {
  slug: "topic-05",
  order: 5,
  title: "Topic 05 — MS Excel: Dữ liệu & Mô hình hoá quyết định",
  bigIdea:
    "Excel không phải bảng tính để 'điền số' — nó là công cụ mô hình hoá quyết định. Một workbook có thể chứa cả triệu dòng dữ liệu (2²⁰ hàng × 2¹⁴ cột), nhưng giá trị thật của Excel với business manager nằm ở hai việc: (1) tổ chức & tóm tắt dữ liệu thực — sort, filter, PivotTable, Vlookup, subtotal — để thấy bức tranh ẩn trong một danh sách; và (2) mô hình hoá một bài toán kinh doanh rồi đặt câu hỏi 'what-if': giá nào thì hoà vốn? cấu hình nào tối đa lợi nhuận (Solver)? lợi nhuận nhạy thế nào nếu chi phí tăng 10% (sensitivity analysis)? kịch bản lạc quan so với bi quan ra sao (scenario)? Kỹ năng biến số liệu thành quyết định này là thứ mọi vị trí quản lý đều cần — bạn thử nghiệm quyết định trên mô hình trước khi mạo hiểm tiền thật.",
  learningObjectives: [
    "Mô tả lịch sử & key features của Excel (workbook nhiều sheet; 2²⁰ hàng × 2¹⁴ cột; cell chứa text/number/date/time/function/formula; macro).",
    "Dùng các phím tắt navigation/selection & editing thông dụng để thao tác nhanh.",
    "Tổ chức multidimensional data trong một list: Freeze, Find/Replace, Sort, Filter, Advanced/Custom Filter, Conditional Formatting, Subtotals.",
    "Dùng PivotTable & PivotChart để tóm tắt dữ liệu theo nhiều chiều (rows/columns, sum/average, lọc theo điều kiện).",
    "Dùng Vlookup để tra cứu giá trị từ một bảng khác (vd tính cost sau discount).",
    "Dùng array formula (TRANSPOSE, SUMPRODUCT, SUM dạng mảng) và phím Ctrl+Shift+Enter; hiểu ràng buộc 'không xoá một ô lẻ trong mảng'.",
    "Mô hình hoá một bài toán kinh doanh thành spreadsheet (P = R − C) và chọn đúng công cụ phân tích.",
    "Dùng Solver để tối ưu (maximize profit / đạt mục tiêu) với bài toán nhiều biến.",
    "Dùng what-if analysis & sensitivity analysis để tìm breakeven, target profit, độ nhạy theo P/p, P/F, P/v.",
    "Dùng Scenario Manager để lưu các kịch bản (normal / favorite / unfavorite).",
    "Dùng financial functions (FV/PV) để mô hình hoá kế hoạch tiết kiệm/đầu tư.",
    "Bật Developer tab, tạo macro + command button, và lock/protect spreadsheet (chỉ chừa ô nhập liệu).",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "Excel = nền tảng → làm chủ dữ liệu (list) → mô hình hoá quyết định. Bấm node để mở chi tiết và nhảy tới phần học.",
    nodes: [
      {
        id: "xl",
        label: "MS Excel",
        group: "concept",
        sectionId: "s1",
        detail: "Công cụ mô hình hoá quyết định, không phải bảng điền số.",
      },
      {
        id: "g_base",
        label: "A. Nền tảng & thao tác",
        group: "concept",
        parent: "xl",
        sectionId: "s1",
        detail: "Lịch sử, key features, shortcuts, array formula.",
      },
      {
        id: "g_data",
        label: "B. Làm chủ dữ liệu (list)",
        group: "concept",
        parent: "xl",
        sectionId: "s3",
        detail:
          "Sort/Filter, Conditional Formatting, Subtotal, PivotTable, Vlookup.",
      },
      {
        id: "g_model",
        label: "C. Mô hình hoá quyết định",
        group: "concept",
        parent: "xl",
        sectionId: "s9",
        detail:
          "Solver, what-if, sensitivity, scenario, financial functions, macro & protection.",
      },
      {
        id: "t_feat",
        label: "History & features",
        group: "term",
        parent: "g_base",
        sectionId: "s1",
        detail: "Lotus→Excel; 2²⁰×2¹⁴; cell chứa gì.",
      },
      {
        id: "t_short",
        label: "Shortcuts",
        group: "term",
        parent: "g_base",
        sectionId: "s2",
        detail: "Navigation/selection + editing.",
      },
      {
        id: "t_array",
        label: "Array formula",
        group: "term",
        parent: "g_base",
        sectionId: "s8",
        detail: "TRANSPOSE, SUMPRODUCT, Ctrl+Shift+Enter.",
      },
      {
        id: "t_sortfilter",
        label: "Sort & Filter",
        group: "term",
        parent: "g_data",
        sectionId: "s4",
        detail: "Sort, Filter, Advanced/Custom Filter.",
      },
      {
        id: "t_cfsub",
        label: "Cond. Format & Subtotal",
        group: "term",
        parent: "g_data",
        sectionId: "s5",
        detail: "Tô màu theo điều kiện; subtotal (sort trước).",
      },
      {
        id: "t_pivot",
        label: "PivotTable & Chart",
        group: "term",
        parent: "g_data",
        sectionId: "s6",
        detail: "Tóm tắt theo rows/cols, sum/avg.",
      },
      {
        id: "t_vlookup",
        label: "Vlookup",
        group: "term",
        parent: "g_data",
        sectionId: "s7",
        detail: "Tra cứu giá trị từ bảng khác.",
      },
      {
        id: "t_solver",
        label: "Solver / Optimization",
        group: "term",
        parent: "g_model",
        sectionId: "s10",
        detail: "Tối đa profit, nhiều biến/ràng buộc.",
      },
      {
        id: "t_whatif",
        label: "What-if & Sensitivity",
        group: "term",
        parent: "g_model",
        sectionId: "s11",
        detail: "Breakeven, target profit, độ nhạy.",
      },
      {
        id: "t_scenario",
        label: "Scenario",
        group: "term",
        parent: "g_model",
        sectionId: "s12",
        detail: "Lưu normal/favorite/unfavorite.",
      },
      {
        id: "t_fin",
        label: "Financial functions",
        group: "term",
        parent: "g_model",
        sectionId: "s13",
        detail: "FV/PV cho kế hoạch tiết kiệm.",
      },
      {
        id: "t_macro",
        label: "Macro & Protection",
        group: "term",
        parent: "g_model",
        sectionId: "s14",
        detail: "Developer tab, command button, lock cells.",
      },
    ],
    edges: [
      { from: "xl", to: "g_base" },
      { from: "xl", to: "g_data" },
      { from: "xl", to: "g_model" },
      { from: "g_base", to: "t_feat" },
      { from: "g_base", to: "t_short" },
      { from: "g_base", to: "t_array" },
      { from: "g_data", to: "t_sortfilter" },
      { from: "g_data", to: "t_cfsub" },
      { from: "g_data", to: "t_pivot" },
      { from: "g_data", to: "t_vlookup" },
      { from: "g_model", to: "t_solver" },
      { from: "g_model", to: "t_whatif" },
      { from: "g_model", to: "t_scenario" },
      { from: "g_model", to: "t_fin" },
      { from: "g_model", to: "t_macro" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "Excel là gì + lịch sử + key features",
      blocks: [
        calloutBlock(
          "key",
          "Excel = công cụ mô hình hoá quyết định",
          "Không phải bảng để 'điền số'. Hai việc tạo giá trị: (1) tổ chức & tóm tắt dữ liệu thực trong một list; (2) mô hình hoá bài toán kinh doanh rồi hỏi 'what-if'. *(neo bigIdea)*",
        ),
        flowBlock(
          "s1",
          "Lịch sử Excel",
          "horizontal",
          [
            {
              id: "s1_lotus",
              label: "~1982 Lotus 1-2-3",
              group: "term",
              detail: "Trên hệ MS-DOS, tiền thân bảng tính phổ biến.",
            },
            {
              id: "s1_v2",
              label: "1987 Excel v2.0",
              group: "term",
              detail: "Microsoft ra Excel cho Windows.",
            },
            {
              id: "s1_v5",
              label: "1993 Excel v5.0",
              group: "term",
              detail:
                "Tích hợp VBA (Visual Basic for Applications) — nền tảng macro.",
            },
            {
              id: "s1_now",
              label: "Excel 2019 / 365 / 2021",
              group: "term",
              detail: "Các phiên bản hiện hành.",
            },
          ],
          [
            { from: "s1_lotus", to: "s1_v2" },
            { from: "s1_v2", to: "s1_v5" },
            { from: "s1_v5", to: "s1_now" },
          ],
          "Từ Lotus tới Excel 365 — VBA (1993) mở đường cho automation/macro.",
        ),
        comparisonBlock(
          "Key features của một workbook",
          ["Đặc điểm", "Chi tiết"],
          [
            {
              label: "Workbook & sheets",
              cells: ["Một file (book) có nhiều sheet/tab (đặt màu được)"],
            },
            {
              label: "Kích thước mỗi sheet",
              cells: ["1.048.576 hàng (2²⁰) × 16.384 cột (2¹⁴)"],
            },
            {
              label: "Nội dung một cell",
              cells: ["Text, number, date, time, function, formula…"],
            },
            {
              label: "Khả năng",
              cells: ["Modeling, tools, formatting; programming bằng Macro"],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "workbook",
          definition:
            "File Excel, có thể chứa nhiều worksheet/sheet.",
        },
        {
          term: "worksheet",
          definition:
            "Một sheet/tab trong workbook, gồm hàng, cột và cells.",
        },
        {
          term: "cell",
          definition:
            "Ô trong worksheet; có thể chứa text, number, date, time, function hoặc formula.",
        },
        {
          term: "VBA",
          definition:
            "Visual Basic for Applications — nền tảng lập trình macro trong Excel.",
        },
        {
          term: "macro",
          definition:
            "Chuỗi thao tác được ghi/lập trình để tự động hoá công việc.",
        },
      ],
    },
    {
      id: "s2",
      heading: "Useful shortcuts",
      blocks: [
        calloutBlock(
          "note",
          "Mẹo",
          "Slide liệt kê shortcut thông dụng (có thể tìm thêm trên Internet). Hai nhóm: di chuyển/chọn và chỉnh sửa.",
        ),
        comparisonBlock(
          "Shortcuts — Navigation & Selection",
          ["Phím tắt", "Tác dụng"],
          [
            {
              label: "Alt + Tab",
              cells: ["Chuyển giữa các ứng dụng đang mở trên taskbar"],
            },
            {
              label: "Ctrl + Page Down / Page Up",
              cells: ["Sang sheet phải / sheet trái"],
            },
            {
              label: "Alt + A / Alt + W / Alt + M",
              cells: ["Vào tab Data / View / Formula"],
            },
            {
              label: "Ctrl + Arrow",
              cells: ["Tới ô ngoài cùng (trái/phải/trên/dưới) của vùng"],
            },
            {
              label: "Ctrl + Shift + Arrow",
              cells: ["Chọn cả hàng/cột từ ô hiện tại"],
            },
            {
              label: "Ctrl + Home / Ctrl + End",
              cells: ["Về A1 / tới ô dưới-phải cùng của vùng"],
            },
            {
              label: "Shift + Space / Ctrl + Space",
              cells: ["Chọn cả hàng / cả cột"],
            },
            {
              label: "Ctrl + A",
              cells: ["Chọn tất cả các ô"],
            },
          ],
        ),
        comparisonBlock(
          "Shortcuts — Editing",
          ["Phím tắt", "Tác dụng"],
          [
            {
              label: "Alt + Enter",
              cells: ["Xuống dòng mới trong một cell"],
            },
            {
              label: "Shift + Enter / Tab / Shift + Tab",
              cells: ["Nhập xong và chuyển ô trên / phải / trái"],
            },
            {
              label: "Ctrl + Shift + Enter",
              cells: ["Nhập array formula"],
            },
            {
              label: "F2 / F4",
              cells: ["Sửa ô / lặp lại lệnh vừa làm"],
            },
            {
              label: "Shift + F2 / Shift + F10 + M",
              cells: ["Thêm comment / xoá comment"],
            },
            {
              label: "Shift + F9",
              cells: ["Tính lại worksheet hiện tại"],
            },
            {
              label: "Ctrl + H / Ctrl + Shift + L",
              cells: ["Find & Replace / bật Filter"],
            },
            {
              label: "Ctrl + C, Ctrl + V / Alt + E + S (Paste Special)",
              cells: ["Copy–paste / dán đặc biệt"],
            },
            {
              label: "` (apostrophe)",
              cells: ["Nhập text bắt đầu bằng số 0"],
            },
          ],
        ),
      ],
    },
    {
      id: "s3",
      heading: "Multidimensional data trong một list",
      blocks: [
        calloutBlock(
          "key",
          "Dữ liệu nhiều chiều thường nằm trong một list",
          "Để 'đọc' được một danh sách lớn, Excel cho 9 công cụ: Freeze, Find & Replace, Sort, Filter, Advanced Filter, Conditional Formatting, Subtotals, PivotTable, Vlookup. Bài tập mẫu dùng file `Customer.xlsx`.",
        ),
        flowBlock(
          "s3",
          "Từ list thô → insight",
          "horizontal",
          [
            {
              id: "s3_freeze",
              label: "Freeze / Find",
              group: "concept",
              detail: "Cố định tiêu đề; tìm & thay thế nhanh.",
            },
            {
              id: "s3_sortfilter",
              label: "Sort / Filter",
              group: "concept",
              detail: "Sắp xếp & lọc theo điều kiện.",
            },
            {
              id: "s3_summ",
              label: "Conditional Format / Subtotal",
              group: "concept",
              detail:
                "Tô màu theo điều kiện; cộng/trung bình theo nhóm.",
            },
            {
              id: "s3_pivot",
              label: "PivotTable / Vlookup",
              group: "concept",
              detail: "Tóm tắt nhiều chiều; tra cứu chéo bảng.",
            },
          ],
          [
            { from: "s3_freeze", to: "s3_sortfilter", label: "lọc" },
            { from: "s3_sortfilter", to: "s3_summ", label: "tóm tắt" },
            { from: "s3_summ", to: "s3_pivot", label: "tổng hợp" },
          ],
          "Chuỗi công cụ biến một list thô thành thông tin ra quyết định.",
        ),
      ],
      keyTerms: [
        {
          term: "list",
          definition:
            "Bảng dữ liệu dạng danh sách, thường gồm nhiều dòng records và nhiều cột fields.",
        },
        {
          term: "Freeze Panes",
          definition:
            "Cố định hàng/cột tiêu đề để vẫn thấy khi cuộn danh sách lớn.",
        },
      ],
    },
    {
      id: "s4",
      heading: "Sort, Filter, Advanced/Custom Filter",
      blocks: [
        comparisonBlock(
          "3 cấp lọc dữ liệu",
          ["Công cụ", "Dùng khi"],
          [
            {
              label: "Sort",
              cells: [
                "Sắp xếp theo một/nhiều cột (vd State tăng dần, rồi City giảm dần)",
              ],
            },
            {
              label: "Filter",
              cells: ["Lọc nhanh theo giá trị một cột (vd khách ở New Jersey)"],
            },
            {
              label: "Custom Filter",
              cells: [
                "Điều kiện AND/OR trên cùng cột (vd order date trước 31/12/1996 hoặc sau 15/02/1998)",
              ],
            },
            {
              label: "Advanced Filter",
              cells: [
                "Điều kiện phức hợp nhiều cột bằng criteria range (vd name chứa 'do' và ở Brooklyn, hoặc name chứa 'do' và cost > $60)",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "Sort",
          definition:
            "Sắp xếp dữ liệu theo một hoặc nhiều cột.",
        },
        {
          term: "Filter",
          definition:
            "Lọc nhanh records theo giá trị/điều kiện.",
        },
        {
          term: "Custom Filter",
          definition:
            "Lọc với điều kiện AND/OR trên cùng một cột.",
        },
        {
          term: "Advanced Filter",
          definition:
            "Lọc bằng criteria range để biểu diễn điều kiện phức hợp nhiều cột.",
        },
        {
          term: "criteria range",
          definition:
            "Vùng ô chứa tiêu đề field và điều kiện dùng cho Advanced Filter.",
        },
      ],
    },
    {
      id: "s5",
      heading: "Conditional Formatting + Subtotals",
      blocks: [
        calloutBlock(
          "key",
          "Conditional Formatting",
          "Tự tô định dạng theo điều kiện — vd cột Cost ≥ $100 tô đỏ. Giúp 'nhìn' bất thường mà không cần đọc từng dòng.",
        ),
        calloutBlock(
          "trap",
          "Subtotal: phải SORT trước",
          "Subtotal cộng/trung bình theo từng nhóm (sum cost theo mỗi state, average cost theo mỗi city). BẮT BUỘC sort cột nhóm trước, nếu không nhóm bị vỡ và kết quả sai.",
        ),
      ],
      keyTerms: [
        {
          term: "Conditional Formatting",
          definition:
            "Tự áp định dạng khi ô thoả điều kiện.",
        },
        {
          term: "Subtotal",
          definition:
            "Tính tổng/trung bình theo từng nhóm; cần sort cột nhóm trước.",
        },
      ],
    },
    {
      id: "s6",
      heading: "PivotTable & PivotChart",
      blocks: [
        calloutBlock(
          "key",
          "PivotTable — tóm tắt nhiều chiều",
          "Kéo–thả field vào rows/columns/values để tổng hợp (vd sum cost theo state×city: cột = states, hàng = cities). Đổi sum↔average dễ dàng; lọc theo điều kiện (vd chỉ orders năm 1998). PivotChart = biểu đồ sinh từ PivotTable.",
        ),
      ],
      keyTerms: [
        {
          term: "PivotTable",
          definition:
            "Bảng tóm tắt dữ liệu nhiều chiều bằng cách kéo field vào rows/columns/values.",
        },
        {
          term: "PivotChart",
          definition:
            "Biểu đồ sinh từ PivotTable.",
        },
      ],
    },
    {
      id: "s7",
      heading: "Vlookup",
      blocks: [
        calloutBlock(
          "key",
          "Vlookup — tra cứu chéo bảng",
          "Dò một giá trị (vd customer name) trong bảng khác để lấy thông tin tương ứng (vd discount), rồi tính cost sau discount. Dùng khi dữ liệu nằm rải ở nhiều sheet/bảng.",
        ),
      ],
      keyTerms: [
        {
          term: "Vlookup",
          definition:
            "Function tra cứu một giá trị trong bảng khác để lấy thông tin tương ứng.",
        },
      ],
    },
    {
      id: "s8",
      heading: "Array formula",
      blocks: [
        calloutBlock(
          "key",
          "Array formula (Ctrl+Shift+Enter)",
          "Công thức tính trên cả một mảng. Ví dụ slide: `=TRANSPOSE(A1:B7)` để xoay vùng dọc thành ngang; tính tổng commission bằng `=SUMPRODUCT(A2:A7,B2:B7)` (ENTER) hoặc `=SUM(A2:A7*B2:B7)` rồi Ctrl+Shift+Enter.",
        ),
        calloutBlock(
          "trap",
          "Không xoá một ô lẻ trong mảng",
          "Một array calculation là một khối — không thể xoá riêng một cell, phải xoá cả mảng.",
        ),
      ],
      keyTerms: [
        {
          term: "array formula",
          definition:
            "Công thức thao tác trên cả một mảng giá trị; trong Excel cổ điển nhập bằng Ctrl+Shift+Enter.",
        },
        {
          term: "TRANSPOSE",
          definition:
            "Function xoay vùng dữ liệu từ dọc sang ngang hoặc ngược lại.",
        },
        {
          term: "SUMPRODUCT",
          definition:
            "Function nhân các phần tử tương ứng trong mảng rồi cộng tổng.",
        },
      ],
    },
    {
      id: "s9",
      heading: "Mô hình hoá một bài toán kinh doanh",
      blocks: [
        calloutBlock(
          "key",
          "Biến bài toán kinh doanh thành spreadsheet",
          "Bước chung: đặt biến quyết định (vd giá r, chi phí ad A, salesforce S) → viết quan hệ (demand, revenue, cost) → mô hình hoá profit. Có mô hình rồi mới chọn công cụ: tối ưu → Solver; hỏi 'what-if/breakeven' → what-if & sensitivity; nhiều kịch bản → Scenario.",
        ),
        formulaBlock(
          "P = R − C = (r − v) × X − F",
          [
            {
              symbol: "P",
              meaning:
                "Profit — lợi nhuận (output thường cần phân tích/tối ưu)",
            },
            { symbol: "R", meaning: "Revenue — doanh thu" },
            { symbol: "C", meaning: "Total cost — tổng chi phí" },
            {
              symbol: "r",
              meaning:
                "Unit price; v = variable unit cost; F = fixed cost",
            },
          ],
        ),
        calloutBlock(
          "note",
          "3 application problem của slide",
          "(1) Solver tối ưu lợi nhuận với hàm cầu nhiều biến; (2) what-if + sensitivity + scenario cho bài demand q=500−10p; (3) financial functions + macro + protection cho bài kế hoạch tiết kiệm.",
        ),
      ],
      keyTerms: [
        {
          term: "business model",
          definition:
            "Mô hình spreadsheet biểu diễn biến, quan hệ doanh thu/chi phí và kết quả quyết định.",
        },
        {
          term: "decision variable",
          definition:
            "Biến mà người ra quyết định có thể điều chỉnh trong mô hình.",
        },
        {
          term: "profit (P = R − C)",
          definition:
            "Lợi nhuận bằng revenue trừ cost; trong mô hình thường là output cần phân tích/tối ưu.",
        },
      ],
    },
    {
      id: "s10",
      heading: "Solver / Optimization",
      blocks: [
        calloutBlock(
          "key",
          "Solver — tìm cấu hình tối ưu",
          "Bài toán dùng hàm cầu nhiều biến; fixed cost $80.000, variable unit cost $25. Solver tìm r, A, S để giải các mục tiêu tối ưu/đạt mục tiêu của mô hình.",
        ),
        formulaBlock(
          "X = 200000 × r^(−1.5) × A^(0.1) × S^(0.3)",
          [
            { symbol: "X", meaning: "Demand — số sản phẩm bán được" },
            { symbol: "r", meaning: "Unit price — đơn giá" },
            { symbol: "A", meaning: "Advertising cost — chi phí quảng cáo" },
            { symbol: "S", meaning: "Salesforce cost — chi phí bán hàng" },
          ],
          "Các số mũ −1.5, 0.1, 0.3 là elasticities của từng biến.",
        ),
        formulaBlock(
          "P = (r − 25) × X − 80000 − A − S",
          [
            {
              symbol: "P",
              meaning: "Profit — lợi nhuận (cần tối đa hoá)",
            },
            {
              symbol: "25",
              meaning:
                "Variable unit cost — chi phí biến đổi/đơn vị ($25)",
            },
            {
              symbol: "80000",
              meaning: "Fixed cost — định phí ($80,000)",
            },
          ],
          "Solver tìm r, A, S để: (a) tối đa P; (b) đạt P = $2,000,000; (c) tìm A khi cố định S = $1,050,000 và r = $75. Lý thuyết tương đương: Lagrange multiplier cho hàm 3 biến.",
        ),
        calloutBlock(
          "note",
          "Solver làm gì",
          "Đặt Target cell (profit), chọn maximize/value, khai báo changing cells (biến) + constraints (ràng buộc) → Solver dò nghiệm. *(Không điền đáp án số ở đây — sinh viên tự chạy Solver trên file.)*",
        ),
      ],
      keyTerms: [
        {
          term: "Solver",
          definition:
            "Công cụ tối ưu trong Excel: tìm giá trị biến để đạt objective dưới các constraints.",
        },
        {
          term: "objective/target cell",
          definition:
            "Ô chứa kết quả cần tối ưu hoặc đặt mục tiêu.",
        },
        {
          term: "constraint",
          definition:
            "Ràng buộc giới hạn giá trị biến hoặc kết quả trong mô hình.",
        },
        {
          term: "elasticity",
          definition:
            "Độ co giãn thể hiện mức phản ứng của demand theo biến như price, advertising hoặc salesforce.",
        },
      ],
    },
    {
      id: "s11",
      heading: "What-if & Sensitivity analysis",
      blocks: [
        calloutBlock(
          "key",
          "Mô hình demand tuyến tính",
          "Lập mô hình demand tuyến tính, total cost và profit để hỏi breakeven / target profit. Các giá trị slide cho: F=2000, v=10, p=25.",
        ),
        formulaBlock(
          "q = 500 − 10p",
          [
            { symbol: "q", meaning: "Demand — số sản phẩm bán" },
            { symbol: "p", meaning: "Unit price — đơn giá" },
          ],
        ),
        formulaBlock(
          "C = F + v × q",
          [
            { symbol: "C", meaning: "Total cost — tổng chi phí" },
            { symbol: "F", meaning: "Fixed cost = 2000" },
            { symbol: "v", meaning: "Unit cost = 10 / sản phẩm" },
          ],
        ),
        formulaBlock(
          "P = TR − C",
          [
            { symbol: "TR", meaning: "Total revenue = p × q" },
            { symbol: "P", meaning: "Profit — lợi nhuận" },
          ],
          "Câu hỏi: (b) p nào để breakeven (P = 0)? (c) p nào để P = 1000?",
        ),
        calloutBlock(
          "key",
          "Sensitivity analysis",
          "Đo độ nhạy của lợi nhuận theo % thay đổi của: giá bán (P/p), fixed cost (P/F), unit cost (P/v) → biết yếu tố nào ảnh hưởng lợi nhuận mạnh nhất để ưu tiên kiểm soát.",
        ),
      ],
      keyTerms: [
        {
          term: "what-if analysis",
          definition:
            "Phân tích điều gì xảy ra với output khi input thay đổi.",
        },
        {
          term: "sensitivity analysis",
          definition:
            "Đo output nhạy thế nào với thay đổi của từng input.",
        },
        {
          term: "breakeven",
          definition:
            "Điểm hoà vốn, nơi profit bằng 0.",
        },
      ],
    },
    {
      id: "s12",
      heading: "Scenario Manager",
      blocks: [
        calloutBlock(
          "key",
          "Scenario — lưu nhiều kịch bản",
          "Optimistic: p=30, F=1500, v=8. Pessimistic: p=20, F=2500, v=12. Dùng Scenario Manager lưu 3 tình huống và đặt tên `normal` / `favorite` / `unfavorite` để so sánh nhanh; vẽ graph TR–C–P theo p từ 0→60 (bước 10).",
        ),
      ],
      keyTerms: [
        {
          term: "Scenario Manager",
          definition:
            "Công cụ lưu nhiều bộ input để so sánh các kịch bản.",
        },
        {
          term: "scenario",
          definition:
            "Một bộ giả định/input cụ thể trong mô hình.",
        },
      ],
    },
    {
      id: "s13",
      heading: "Financial functions FV/PV",
      blocks: [
        calloutBlock(
          "key",
          "Financial functions — FV & PV",
          "Bài toán tiết kiệm: mỗi tháng trích một % lương (≤20%) gửi tiết kiệm để sau này rút. Lập mô hình tính future value (FV) và present value (PV) cho các kỳ 5, 10, 15, 20, 25, 30 năm; vẽ chart FV theo số năm.",
        ),
      ],
      keyTerms: [
        {
          term: "FV (future value)",
          definition:
            "Giá trị tương lai của dòng tiền/khoản tiết kiệm.",
        },
        {
          term: "PV (present value)",
          definition:
            "Giá trị hiện tại của dòng tiền/khoản tiền tương lai.",
        },
        {
          term: "financial function",
          definition:
            "Function Excel dùng để mô hình hoá bài toán tài chính như FV/PV.",
        },
      ],
    },
    {
      id: "s14",
      heading: "Macro, Developer tab & Spreadsheet protection",
      blocks: [
        calloutBlock(
          "note",
          "Bật Developer tab & Macro (menu path đúng slide)",
          "Excel 2016/365: File > Excel Options > Customize Ribbon > tick Developer. Macro (Excel 2007): menu Tools > Macro hoặc View > Macro.",
        ),
        calloutBlock(
          "key",
          "Macro + command button + protection",
          'Tạo macro "Delete all data entry and do it again" để xoá dữ liệu trong B2:B4 rồi gắn vào một command button. Lock & protect mọi ô TRỪ ô nhập liệu B2:B4 (right-click > Format Cells… bỏ/đặt khoá, rồi Protect Sheet).',
        ),
      ],
      keyTerms: [
        {
          term: "Developer tab",
          definition:
            "Tab Excel dùng cho macro, controls và các công cụ phát triển.",
        },
        {
          term: "macro",
          definition:
            "Chuỗi thao tác tự động hoá trong Excel.",
        },
        {
          term: "command button",
          definition:
            "Nút lệnh có thể gắn macro để chạy thao tác tự động.",
        },
        {
          term: "cell lock",
          definition:
            "Thiết lập khoá ô; có hiệu lực khi Protect Sheet.",
        },
        {
          term: "Protect Sheet",
          definition:
            "Tính năng bảo vệ worksheet để giới hạn chỉnh sửa.",
        },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "Which statement correctly describes an Excel worksheet and cell content?",
      options: [
        {
          id: "a",
          text: "A worksheet has 1,048,576 rows and 16,384 columns, and a cell can contain text, numbers, dates, times, functions, or formulas",
          isCorrect: true,
          rationale:
            "Đúng. Slide nêu mỗi sheet có 2²⁰ hàng × 2¹⁴ cột; cell không chỉ chứa số mà còn có text/date/time/function/formula.",
        },
        {
          id: "b",
          text: "A worksheet has only 65,536 rows, and cells can contain numbers only",
          isCorrect: false,
          rationale:
            "Bẫy phiên bản/suy nghĩ cũ. Spec slide dùng 1.048.576 hàng × 16.384 cột; cell có nhiều loại nội dung, không chỉ number.",
        },
        {
          id: "c",
          text: "A workbook can contain only one worksheet, but each cell can contain multiple worksheets",
          isCorrect: false,
          rationale:
            "Bẫy đảo cấu trúc. Workbook là file có nhiều worksheet; cell là ô trong worksheet.",
        },
        {
          id: "d",
          text: "Excel cells are used only for charts, not for formulas",
          isCorrect: false,
          rationale:
            "Bẫy sai bản chất. Formula/function trong cell là lõi của spreadsheet modeling.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Worksheet capacity / cell content",
      takeaway:
        "Workbook gồm nhiều sheets; mỗi sheet rất lớn; cell có thể chứa text, number, date, time, function hoặc formula.",
    },
    {
      id: "q02",
      stem: "Before using Subtotal to summarize costs by State, what should you do first?",
      options: [
        {
          id: "a",
          text: "Sort the data by State",
          isCorrect: true,
          rationale:
            "Đúng. Subtotal gom theo nhóm liền kề, nên phải sort cột nhóm trước để records cùng State đứng cạnh nhau.",
        },
        {
          id: "b",
          text: "Apply Conditional Formatting to all cost cells",
          isCorrect: false,
          rationale:
            "Bẫy công cụ nhìn dữ liệu. Conditional Formatting giúp tô màu theo điều kiện, không bảo đảm nhóm subtotal đúng.",
        },
        {
          id: "c",
          text: "Run Vlookup on every customer name",
          isCorrect: false,
          rationale:
            "Bẫy tra cứu. Vlookup lấy thông tin từ bảng khác, không chuẩn bị nhóm cho Subtotal.",
        },
        {
          id: "d",
          text: "Create a PivotChart first",
          isCorrect: false,
          rationale:
            "Bẫy thứ tự/công cụ. PivotChart là biểu đồ từ PivotTable; Subtotal cần dữ liệu đã sort theo cột nhóm.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Subtotal cần sort trước",
      takeaway:
        "Subtotal theo nhóm chỉ đáng tin khi dữ liệu đã được sort theo field nhóm.",
    },
    {
      id: "q03",
      stem: "What is a PivotTable mainly used for?",
      options: [
        {
          id: "a",
          text: "Summarizing data across rows and columns, such as sum or average by State and City",
          isCorrect: true,
          rationale:
            "Đúng. PivotTable tóm tắt dữ liệu nhiều chiều bằng rows/columns/values và có thể đổi sum↔average.",
        },
        {
          id: "b",
          text: "Looking up a discount from another table based on a customer name",
          isCorrect: false,
          rationale:
            "Bẫy Vlookup. Tra cứu một giá trị từ bảng khác là vai trò của Vlookup, không phải PivotTable.",
        },
        {
          id: "c",
          text: "Filtering records with a criteria range only",
          isCorrect: false,
          rationale:
            "Bẫy Advanced Filter. Criteria range thuộc Advanced Filter; PivotTable dùng để tổng hợp nhiều chiều.",
        },
        {
          id: "d",
          text: "Locking every cell in the worksheet",
          isCorrect: false,
          rationale:
            "Bẫy protection. Lock/protect worksheet thuộc spreadsheet protection, không phải PivotTable.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "PivotTable",
      takeaway:
        "PivotTable = tóm tắt list lớn theo nhiều chiều; Vlookup = tra cứu chéo bảng; Advanced Filter = lọc phức hợp.",
    },
    {
      id: "q04",
      stem: "When should you use Vlookup?",
      options: [
        {
          id: "a",
          text: "When you need to find a matching value in another table and return related information",
          isCorrect: true,
          rationale:
            "Đúng. Vlookup dò một giá trị như customer name trong bảng khác để lấy thông tin liên quan như discount.",
        },
        {
          id: "b",
          text: "When you need to sort a list from A to Z",
          isCorrect: false,
          rationale:
            "Bẫy thao tác danh sách. Sort sắp xếp dữ liệu; Vlookup tra cứu dữ liệu ở bảng khác.",
        },
        {
          id: "c",
          text: "When you need to summarize data by dragging fields into rows and columns",
          isCorrect: false,
          rationale:
            "Bẫy PivotTable. Kéo field vào rows/columns/values là cách dùng PivotTable.",
        },
        {
          id: "d",
          text: "When you need to save optimistic and pessimistic cases",
          isCorrect: false,
          rationale:
            "Bẫy Scenario Manager. Lưu nhiều tình huống input là Scenario Manager, không phải Vlookup.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Vlookup",
      takeaway:
        "Vlookup hữu ích khi dữ liệu nằm rải ở nhiều sheet/bảng và cần lấy giá trị tương ứng.",
    },
    {
      id: "q05",
      stem: "Which statement is correct about classic Excel array formulas?",
      options: [
        {
          id: "a",
          text: "They are entered with Ctrl+Shift+Enter, and you cannot delete just one cell from the array result",
          isCorrect: true,
          rationale:
            "Đúng. Slide nhấn Ctrl+Shift+Enter cho array formula cổ điển và không xoá riêng một ô lẻ trong mảng.",
        },
        {
          id: "b",
          text: "They are entered with Enter only, and each cell in the array can be deleted independently",
          isCorrect: false,
          rationale:
            "Bẫy thao tác thường. ENTER đơn lẻ không phải commit array formula cổ điển; array calculation là một khối.",
        },
        {
          id: "c",
          text: "They are used only for PivotCharts",
          isCorrect: false,
          rationale:
            "Bẫy gán sai. Array formula có thể dùng TRANSPOSE, SUMPRODUCT/SUM dạng mảng; không chỉ liên quan PivotChart.",
        },
        {
          id: "d",
          text: "They require Scenario Manager before any formula can be entered",
          isCorrect: false,
          rationale:
            "Bẫy công cụ. Scenario Manager lưu kịch bản input; không phải điều kiện để nhập array formula.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Array formula commit",
      takeaway:
        "Array formula cổ điển dùng Ctrl+Shift+Enter và phải quản lý cả vùng kết quả như một khối.",
    },
    {
      id: "q06",
      stem: "Which Excel tool is designed to optimize profit when a model has multiple changing cells and constraints?",
      options: [
        {
          id: "a",
          text: "Solver",
          isCorrect: true,
          rationale:
            "Đúng. Solver tối ưu objective/target cell bằng cách thay đổi nhiều biến và xét constraints.",
        },
        {
          id: "b",
          text: "Scenario Manager",
          isCorrect: false,
          rationale:
            "Bẫy kịch bản. Scenario Manager lưu/so sánh nhiều bộ input; nó không tự tìm cấu hình tối ưu.",
        },
        {
          id: "c",
          text: "Conditional Formatting",
          isCorrect: false,
          rationale:
            "Bẫy hiển thị. Conditional Formatting chỉ tô định dạng theo điều kiện, không tối ưu profit.",
        },
        {
          id: "d",
          text: "Filter",
          isCorrect: false,
          rationale:
            "Bẫy list tool. Filter lọc records; bài toán tối ưu nhiều biến/ràng buộc cần Solver.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "Solver / Optimization",
      takeaway:
        "Tối ưu profit nhiều biến/ràng buộc → Solver; lưu kịch bản → Scenario Manager; tô màu → Conditional Formatting.",
    },
    {
      id: "q07",
      stem: "You want to save normal, optimistic, and pessimistic input cases for quick comparison. Which tool should you use?",
      options: [
        {
          id: "a",
          text: "Scenario Manager",
          isCorrect: true,
          rationale:
            "Đúng. Scenario Manager lưu nhiều bộ input như normal/favorite/unfavorite để so sánh nhanh.",
        },
        {
          id: "b",
          text: "Solver",
          isCorrect: false,
          rationale:
            "Bẫy tối ưu. Solver tìm nghiệm tối ưu; nó không phải công cụ lưu ba kịch bản cố định để so sánh.",
        },
        {
          id: "c",
          text: "Subtotal",
          isCorrect: false,
          rationale:
            "Bẫy dữ liệu list. Subtotal tổng hợp theo nhóm sau khi sort, không lưu kịch bản input.",
        },
        {
          id: "d",
          text: "Sensitivity analysis",
          isCorrect: false,
          rationale:
            "Bẫy gần nghĩa. Sensitivity analysis đo độ nhạy của output theo input; Scenario Manager mới là nơi lưu kịch bản.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Scenario Manager",
      takeaway:
        "Scenario Manager dùng để lưu và so sánh nhiều kịch bản input; sensitivity analysis dùng để đo độ nhạy.",
    },
    {
      id: "q08",
      stem: "You want to protect a spreadsheet while still allowing users to type in B2:B4. What should you do?",
      options: [
        {
          id: "a",
          text: "Unlock B2:B4, keep other cells locked, then Protect Sheet",
          isCorrect: true,
          rationale:
            "Đúng. Muốn người dùng nhập B2:B4 thì phải bỏ khoá vùng nhập liệu trước, sau đó Protect Sheet để các ô khác vẫn được bảo vệ.",
        },
        {
          id: "b",
          text: "Lock every cell and then Protect Sheet",
          isCorrect: false,
          rationale:
            "Bẫy quá tay. Nếu lock tất cả rồi protect, B2:B4 cũng không nhập được.",
        },
        {
          id: "c",
          text: "Protect Sheet first, then use Vlookup on B2:B4",
          isCorrect: false,
          rationale:
            "Bẫy không liên quan. Vlookup không mở khoá ô; thứ tự đúng là unlock vùng nhập liệu rồi protect.",
        },
        {
          id: "d",
          text: "Create a PivotTable from B2:B4",
          isCorrect: false,
          rationale:
            "Bẫy công cụ. PivotTable tóm tắt dữ liệu, không điều khiển quyền nhập liệu trong worksheet.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Spreadsheet protection",
      takeaway:
        "Spreadsheet protection đúng cách: chỉ unlock input cells, còn lại lock và Protect Sheet.",
    },
    {
      id: "q09",
      stem: "What is Conditional Formatting used for in Excel?",
      options: [
        {
          id: "a",
          text: "Automatically applying formatting when a condition is met, such as highlighting Cost >= $100 in red",
          isCorrect: true,
          rationale:
            "Đúng. Conditional Formatting tự tô định dạng theo điều kiện để thấy bất thường hoặc điểm cần chú ý nhanh hơn.",
        },
        {
          id: "b",
          text: "Hiding rows that do not match a selected criterion",
          isCorrect: false,
          rationale:
            "Bẫy Filter. Lọc ẩn/hiện dòng theo điều kiện là Filter; Conditional Formatting vẫn giữ dòng nhưng đổi định dạng.",
        },
        {
          id: "c",
          text: "Reordering rows from smallest to largest",
          isCorrect: false,
          rationale:
            "Bẫy Sort. Sắp xếp thứ tự là Sort, không phải Conditional Formatting.",
        },
        {
          id: "d",
          text: "Protecting formulas so users cannot edit them",
          isCorrect: false,
          rationale:
            "Bẫy protection. Bảo vệ ô/formula dùng lock + Protect Sheet, không phải Conditional Formatting.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Conditional Formatting",
      takeaway:
        "Conditional Formatting giúp thấy pattern/bất thường bằng định dạng tự động theo điều kiện.",
    },
    {
      id: "q10",
      stem: "Which statement correctly describes TRANSPOSE as an array formula in Excel?",
      options: [
        {
          id: "a",
          text: "=TRANSPOSE(range) converts vertical data to horizontal data or the reverse, and in this topic it is entered with Ctrl+Shift+Enter",
          isCorrect: true,
          rationale:
            "Đúng. TRANSPOSE xoay vùng dọc↔ngang; với array formula trong topic này cần Ctrl+Shift+Enter.",
        },
        {
          id: "b",
          text: "TRANSPOSE only copies values without changing their orientation",
          isCorrect: false,
          rationale:
            "Bẫy copy thường. TRANSPOSE đổi hướng vùng dữ liệu, không chỉ copy nguyên trạng.",
        },
        {
          id: "c",
          text: "Pressing Enter is always enough for the array behavior described here",
          isCorrect: false,
          rationale:
            "Bẫy thao tác nhập. Spec của topic nhấn Ctrl+Shift+Enter cho array formula.",
        },
        {
          id: "d",
          text: "TRANSPOSE is the same tool as Scenario Manager",
          isCorrect: false,
          rationale:
            "Bẫy lẫn công cụ. TRANSPOSE là function xoay dữ liệu; Scenario Manager lưu các bộ input/kịch bản.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "TRANSPOSE and array formulas",
      takeaway:
        "TRANSPOSE xoay vùng dữ liệu; array formula trong topic này nhập bằng Ctrl+Shift+Enter.",
    },
    {
      id: "q11",
      stem: "Which statement best distinguishes sensitivity analysis from Scenario Manager and Solver?",
      options: [
        {
          id: "a",
          text: "Sensitivity analysis measures how profit changes with inputs such as P/p, P/F, or P/v; Scenario Manager saves cases and Solver optimizes",
          isCorrect: true,
          rationale:
            "Đúng. Sensitivity analysis đo độ nhạy output theo input; Scenario Manager lưu kịch bản; Solver tìm phương án tối ưu.",
        },
        {
          id: "b",
          text: "Sensitivity analysis is mainly used to save named input cases like normal, optimistic, and pessimistic",
          isCorrect: false,
          rationale:
            "Bẫy Scenario Manager. Lưu các kịch bản input là nhiệm vụ của Scenario Manager, không phải sensitivity analysis.",
        },
        {
          id: "c",
          text: "Sensitivity analysis is the same as Solver because both always maximize profit automatically",
          isCorrect: false,
          rationale:
            "Bẫy tối ưu. Solver tối ưu theo objective/constraints; sensitivity analysis đo output thay đổi thế nào khi input thay đổi.",
        },
        {
          id: "d",
          text: "Sensitivity analysis is a formatting tool for coloring high costs",
          isCorrect: false,
          rationale:
            "Bẫy Conditional Formatting. Tô màu theo điều kiện là formatting; sensitivity analysis là phân tích mô hình.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Sensitivity vs Scenario vs Solver",
      takeaway:
        "Sensitivity đo độ nhạy; Scenario lưu kịch bản; Solver tối ưu mô hình.",
    },
  ],
  status: "ready",
  source:
    "Digital Technology in Business — Topic 05 MSExcel slides.pdf (Part 5: Applications - MS Excel).",
};

const topic06: Chapter = {
  slug: "topic-06",
  order: 6,
  title: "Topic 06 — Database Management",
  bigIdea:
    "Dữ liệu rải rác trong các file riêng lẻ — mỗi chương trình một file — là cơn ác mộng của doanh nghiệp: cùng một thông tin bị lặp ở nhiều nơi (data redundancy) rồi mâu thuẫn nhau (inconsistency), không ai biết con số nào đúng. Database ra đời để giải đúng bài toán đó: tổ chức dữ liệu thành các bảng có quan hệ (relational model — primary key định danh, foreign key nối các bảng) kèm metadata mô tả cấu trúc, được một DBMS quản lý và truy cập qua forms / reports / queries / SQL. Kết quả: dữ liệu dùng chung, nhất quán, không trùng lặp — và chỉ khi đó 'data' mới trở thành 'information' đáng tin để ra quyết định. Là future manager, bạn không tự code database, nhưng hiểu cấu trúc này để đặt đúng yêu cầu với IT team và đọc được báo cáo sinh ra từ đâu.",
  learningObjectives: [
    "Phân biệt data / information / database; nêu vai trò biến data → information.",
    "Mô tả hierarchy of data: bit → byte → field (attribute) → record → file/table → database.",
    "Giải thích problems in the file environment: data redundancy & inconsistency, và vì sao cần database.",
    "Nêu các lợi ích của database approach (redundancy reduced, inconsistency avoided, shared data, security…).",
    "Giải thích một database gồm tables + relationships + metadata (không chỉ là nhóm bảng).",
    "Phân biệt primary key vs foreign key và cách relational model biểu diễn quan hệ giữa các bảng.",
    "Định nghĩa metadata và vai trò của nó.",
    "Mô tả database applications: forms, reports, query forms.",
    "Giải thích DBMS và các tool (query language, query by example, form, report writer); vai trò của SQL.",
    "Phân biệt personal vs enterprise DBMS; nhận diện các DBMS products (DB2, Access, SQL Server, Oracle, MySQL).",
    "Nêu trách nhiệm của database administration (DBA).",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "Nền tảng dữ liệu → vì sao cần database (file problem) → cấu trúc & vận hành. Bấm node để mở chi tiết và nhảy tới phần học.",
    nodes: [
      {
        id: "db",
        label: "Database Management",
        group: "concept",
        sectionId: "s1",
        detail:
          "File rời rạc gây trùng lặp/mâu thuẫn; database tổ chức dữ liệu có quan hệ để biến data → information.",
      },
      {
        id: "g_found",
        label: "A. Nền tảng dữ liệu",
        group: "concept",
        parent: "db",
        sectionId: "s1",
        detail: "Data/Information/Database; hierarchy of data.",
      },
      {
        id: "g_why",
        label: "B. Vì sao cần database",
        group: "concept",
        parent: "db",
        sectionId: "s3",
        detail:
          "File environment problems + lợi ích database approach.",
      },
      {
        id: "g_struct",
        label: "C. Cấu trúc & vận hành",
        group: "concept",
        parent: "db",
        sectionId: "s5",
        detail:
          "Relational model, keys, metadata, DBMS, applications, admin.",
      },
      {
        id: "t_dii",
        label: "Data / Info / Database",
        group: "term",
        parent: "g_found",
        sectionId: "s1",
        detail:
          "Data thô → information có ý nghĩa; database tổ chức để dùng.",
      },
      {
        id: "t_hier",
        label: "Hierarchy of data",
        group: "term",
        parent: "g_found",
        sectionId: "s2",
        detail: "bit→byte→field→record→file→database.",
      },
      {
        id: "t_fileprob",
        label: "File environment problems",
        group: "term",
        parent: "g_why",
        sectionId: "s3",
        detail: "Redundancy & inconsistency.",
      },
      {
        id: "t_adv",
        label: "Advantages of database",
        group: "term",
        parent: "g_why",
        sectionId: "s4",
        detail: "Redundancy↓, inconsistency tránh, shared, security.",
      },
      {
        id: "t_whatdb",
        label: "What is a database",
        group: "term",
        parent: "g_struct",
        sectionId: "s5",
        detail: "Tables + relationships + metadata.",
      },
      {
        id: "t_keys",
        label: "Primary & Foreign key",
        group: "term",
        parent: "g_struct",
        sectionId: "s6",
        detail: "PK định danh; FK nối bảng (relational).",
      },
      {
        id: "t_meta",
        label: "Metadata",
        group: "term",
        parent: "g_struct",
        sectionId: "s7",
        detail: "Dữ liệu mô tả dữ liệu.",
      },
      {
        id: "t_app",
        label: "Database applications",
        group: "term",
        parent: "g_struct",
        sectionId: "s8",
        detail: "Forms, reports, query forms.",
      },
      {
        id: "t_dbms",
        label: "DBMS & SQL",
        group: "term",
        parent: "g_struct",
        sectionId: "s9",
        detail: "Query language, QBE, form, report writer; SQL.",
      },
      {
        id: "t_type",
        label: "Personal vs Enterprise",
        group: "term",
        parent: "g_struct",
        sectionId: "s10",
        detail: "Access vs DB2/SQL Server/Oracle.",
      },
      {
        id: "t_prod",
        label: "DBMS products",
        group: "term",
        parent: "g_struct",
        sectionId: "s11",
        detail: "DB2, Access, SQL Server, Oracle, MySQL.",
      },
      {
        id: "t_dba",
        label: "Database administration",
        group: "term",
        parent: "g_struct",
        sectionId: "s12",
        detail: "Quản lý, bảo vệ, tối đa availability.",
      },
    ],
    edges: [
      { from: "db", to: "g_found" },
      { from: "db", to: "g_why" },
      { from: "db", to: "g_struct" },
      { from: "g_found", to: "t_dii" },
      { from: "g_found", to: "t_hier" },
      { from: "g_why", to: "t_fileprob" },
      { from: "g_why", to: "t_adv" },
      { from: "g_struct", to: "t_whatdb" },
      { from: "g_struct", to: "t_keys" },
      { from: "g_struct", to: "t_meta" },
      { from: "g_struct", to: "t_app" },
      { from: "g_struct", to: "t_dbms" },
      { from: "g_struct", to: "t_type" },
      { from: "g_struct", to: "t_prod" },
      { from: "g_struct", to: "t_dba" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "Data / Information / Database",
      blocks: [
        comparisonBlock(
          "3 khái niệm nền",
          ["Khái niệm", "Định nghĩa", "Đặc điểm / ví dụ"],
          [
            {
              label: "Data",
              cells: [
                "Tập các mục CHƯA xử lý",
                "Text, numbers, images, audio, video",
              ],
            },
            {
              label: "Information",
              cells: [
                "Data đã xử lý",
                "Organized, meaningful, useful — dùng để ra quyết định",
              ],
            },
            {
              label: "Database",
              cells: [
                "Tập dữ liệu được tổ chức",
                "Cho phép access, retrieve, use dữ liệu đó",
              ],
            },
          ],
        ),
        calloutBlock(
          "key",
          "Data → Information",
          "Mục tiêu cuối là biến data thô thành information đáng tin. Database là cách tổ chức để bước biến đổi đó nhanh, nhất quán, chia sẻ được.",
        ),
      ],
      keyTerms: [
        {
          term: "data",
          definition:
            "Tập các mục chưa xử lý: text, numbers, images, audio, video.",
        },
        {
          term: "information",
          definition:
            "Data đã xử lý, organized/meaningful/useful để ra quyết định.",
        },
        {
          term: "database",
          definition:
            "Tập dữ liệu được tổ chức để access, retrieve và use.",
        },
      ],
    },
    {
      id: "s2",
      heading: "Hierarchy of data",
      blocks: [
        flowBlock(
          "s2",
          "Hierarchy of data (nhỏ → lớn)",
          "horizontal",
          [
            {
              id: "s2_bit",
              label: "Bit",
              group: "concept",
              detail: "Đơn vị nhỏ nhất: 0/1.",
            },
            {
              id: "s2_byte",
              label: "Byte (character)",
              group: "concept",
              detail: "8 bit = 1 ký tự (vd 'A', 's', '6').",
            },
            {
              id: "s2_field",
              label: "Field (attribute / column)",
              group: "concept",
              detail:
                "Nhóm byte mang một thuộc tính (vd LastName).",
            },
            {
              id: "s2_record",
              label: "Record (row)",
              group: "concept",
              detail:
                "Nhóm field mô tả một entity (vd một employee).",
            },
            {
              id: "s2_file",
              label: "File / Table",
              group: "concept",
              detail:
                "Nhóm record cùng loại (vd Employee Table).",
            },
            {
              id: "s2_db",
              label: "Database",
              group: "concept",
              detail: "Nhiều file/bảng + quan hệ + metadata.",
            },
          ],
          [
            { from: "s2_bit", to: "s2_byte", label: "8 bit" },
            { from: "s2_byte", to: "s2_field", label: "nhóm byte" },
            { from: "s2_field", to: "s2_record", label: "nhóm field" },
            { from: "s2_record", to: "s2_file", label: "nhóm record" },
            { from: "s2_file", to: "s2_db", label: "+ quan hệ" },
          ],
          "Từ bit nhỏ nhất tới database lớn nhất — mỗi tầng gộp tầng dưới.",
        ),
      ],
      keyTerms: [
        {
          term: "bit",
          definition: "Đơn vị dữ liệu nhỏ nhất, có giá trị 0 hoặc 1.",
        },
        {
          term: "byte",
          definition: "8 bit; thường biểu diễn một character.",
        },
        {
          term: "field (attribute)",
          definition:
            "Nhóm byte biểu diễn một thuộc tính của entity, như LastName.",
        },
        {
          term: "record",
          definition:
            "Nhóm fields mô tả một entity cụ thể.",
        },
        {
          term: "file",
          definition:
            "Nhóm records cùng loại; trong relational model thường là table.",
        },
        {
          term: "key field",
          definition:
            "Field dùng để định danh hoặc tìm record.",
        },
        {
          term: "entity",
          definition:
            "Đối tượng mà database lưu dữ liệu về nó, như employee hoặc customer.",
        },
      ],
    },
    {
      id: "s3",
      heading: "Problems in the file environment",
      blocks: [
        flowBlock(
          "s3",
          "File rời rạc → trùng lặp & mâu thuẫn",
          "horizontal",
          [
            {
              id: "s3_files",
              label: "File riêng cho từng chương trình",
              group: "concept",
              detail:
                "Employees File, Customers File, Orders File — mỗi program quản một file riêng.",
            },
            {
              id: "s3_redundant",
              label: "Data redundancy",
              group: "concept",
              detail:
                "Cùng một thông tin (vd company name, employee name) bị lặp ở nhiều file.",
            },
            {
              id: "s3_incons",
              label: "Inconsistency",
              group: "concept",
              detail:
                "Sửa ở file này, quên file kia → các bản sao mâu thuẫn, không biết con số nào đúng.",
            },
            {
              id: "s3_dbms",
              label: "DBMS gom về 1 database",
              group: "concept",
              detail:
                "Tập trung dữ liệu, mỗi dữ kiện lưu một chỗ → các program dùng chung.",
            },
          ],
          [
            { from: "s3_files", to: "s3_redundant", label: "lặp" },
            { from: "s3_redundant", to: "s3_incons", label: "mâu thuẫn" },
            { from: "s3_incons", to: "s3_dbms", label: "giải pháp" },
          ],
          "Đây là bài toán gốc database sinh ra để giải.",
        ),
      ],
      keyTerms: [
        {
          term: "file environment",
          definition:
            "Môi trường mỗi program quản dữ liệu trong file riêng.",
        },
        {
          term: "data redundancy",
          definition:
            "Cùng một dữ liệu bị lưu lặp ở nhiều nơi.",
        },
        {
          term: "data inconsistency",
          definition:
            "Các bản sao dữ liệu mâu thuẫn nhau vì cập nhật không đồng bộ.",
        },
      ],
    },
    {
      id: "s4",
      heading: "Advantages of the database approach",
      blocks: [
        calloutBlock(
          "key",
          "9 lợi ích của database (slide 'Importance of the Database')",
          "Compactness; Speed; Less drudgery (đỡ việc thủ công nhàm); Currency (dữ liệu cập nhật); Redundancy reduced; Inconsistency avoided; Shared data; Standardization; Security.",
        ),
      ],
      keyTerms: [
        {
          term: "shared data",
          definition:
            "Dữ liệu được nhiều program/user dùng chung thay vì lưu rời rạc.",
        },
        {
          term: "standardization",
          definition:
            "Chuẩn hoá cách lưu, đặt tên và diễn giải dữ liệu trong tổ chức.",
        },
      ],
    },
    {
      id: "s5",
      heading: "What is a database",
      blocks: [
        calloutBlock(
          "key",
          "Database ≠ chỉ là nhóm bảng",
          "Một database gồm: (1) tables/files, (2) relationships giữa các hàng trong bảng, và (3) metadata mô tả cấu trúc database. Thiếu quan hệ + metadata thì chỉ là tập bảng rời.",
        ),
      ],
      keyTerms: [
        {
          term: "relationship",
          definition:
            "Quan hệ giữa rows/tables, thường biểu diễn qua common fields và keys.",
        },
        {
          term: "metadata",
          definition:
            "Data mô tả data; là một phần của database.",
        },
      ],
    },
    {
      id: "s6",
      heading: "Relational model: Primary key & Foreign key",
      blocks: [
        comparisonBlock(
          "Primary key vs Foreign key",
          ["Tiêu chí", "Primary key", "Foreign key"],
          [
            {
              label: "Vai trò",
              cells: [
                "Định danh DUY NHẤT một hàng trong bảng",
                "Tham chiếu tới primary key của bảng khác để nối quan hệ",
              ],
            },
            {
              label: "Vị trí",
              cells: [
                "Trong chính bảng đó",
                "Là cột 'common field' xuất hiện ở bảng liên quan",
              ],
            },
            {
              label: "Ví dụ",
              cells: [
                "EmployeeID trong Employees Table",
                "EmployeeID trong Orders Table (trỏ về Employees)",
              ],
            },
          ],
        ),
        flowBlock(
          "s6",
          "PK nối FK giữa hai bảng",
          "horizontal",
          [
            {
              id: "s6_pk",
              label: "Employees.EmployeeID (PK)",
              group: "term",
              detail: "Primary key định danh mỗi nhân viên.",
            },
            {
              id: "s6_fk",
              label: "Orders.EmployeeID (FK)",
              group: "term",
              detail:
                "Foreign key trong bảng Orders trỏ về Employees.",
            },
          ],
          [{ from: "s6_pk", to: "s6_fk", label: "common field" }],
          "Relational database mang dữ liệu dạng bảng và dùng foreign key để biểu diễn quan hệ.",
        ),
      ],
      keyTerms: [
        {
          term: "relational database",
          definition:
            "Database biểu diễn dữ liệu bằng các tables có quan hệ với nhau.",
        },
        {
          term: "primary key",
          definition:
            "Field định danh duy nhất một row trong table.",
        },
        {
          term: "foreign key",
          definition:
            "Field tham chiếu primary key của table khác để nối quan hệ.",
        },
        {
          term: "common field",
          definition:
            "Field chung xuất hiện ở các table liên quan để kết nối dữ liệu.",
        },
      ],
    },
    {
      id: "s7",
      heading: "Metadata",
      blocks: [
        calloutBlock(
          "key",
          "Metadata = data mô tả data",
          "Metadata làm database dễ dùng và LUÔN là một phần của database. Ví dụ: Field Name, Data Type, Description của mỗi cột (vd data type của CustomerID, OrderDate).",
        ),
      ],
      keyTerms: [
        {
          term: "metadata",
          definition:
            "Data mô tả cấu trúc và ý nghĩa của data trong database.",
        },
        {
          term: "data type",
          definition:
            "Kiểu dữ liệu của field, như text, number, date.",
        },
      ],
    },
    {
      id: "s8",
      heading: "Database applications",
      blocks: [
        comparisonBlock(
          "3 thành phần của database application",
          ["Thành phần", "Công dụng"],
          [
            {
              label: "Forms (data entry forms)",
              cells: [
                "Đọc, chèn, sửa, xoá dữ liệu (read/insert/modify/delete)",
              ],
            },
            {
              label: "Reports",
              cells: [
                "Trình bày dữ liệu trong ngữ cảnh có cấu trúc (vd Student Report)",
              ],
            },
            {
              label: "Query forms",
              cells: [
                "Giúp người dùng nhanh chóng tìm câu trả lời cho câu hỏi",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Vì sao cần application",
          "Bản thân database chưa hữu ích — phải có forms/reports/queries/application programs để biến dữ liệu thành information cho người dùng.",
        ),
      ],
      keyTerms: [
        {
          term: "form",
          definition:
            "Giao diện để đọc, nhập, sửa hoặc xoá dữ liệu.",
        },
        {
          term: "report",
          definition:
            "Trình bày dữ liệu trong ngữ cảnh có cấu trúc.",
        },
        {
          term: "query form",
          definition:
            "Giao diện giúp người dùng đặt câu hỏi/tìm dữ liệu nhanh.",
        },
        {
          term: "database application",
          definition:
            "Ứng dụng gồm forms, reports, queries hoặc programs để người dùng khai thác database.",
        },
      ],
    },
    {
      id: "s9",
      heading: "DBMS & các tool + SQL",
      blocks: [
        calloutBlock(
          "key",
          "DBMS cung cấp tool để truy xuất & bảo trì dữ liệu",
          "Query language; Query by example (QBE — giao diện đồ hoạ hỗ trợ tìm dữ liệu); Form; Report writer.",
        ),
        calloutBlock(
          "key",
          "Query & SQL",
          "Query = yêu cầu dữ liệu cụ thể từ database. Query language = các câu lệnh kiểu tiếng Anh để chỉ định dữ liệu cần display/print/store/update/delete. SQL (Structured Query Language) là query language phổ biến để quản lý, cập nhật, truy xuất dữ liệu.",
        ),
      ],
      keyTerms: [
        {
          term: "DBMS",
          definition:
            "Database Management System — software dùng để tạo, xử lý và quản trị database.",
        },
        {
          term: "query",
          definition:
            "Yêu cầu dữ liệu cụ thể từ database.",
        },
        {
          term: "query language",
          definition:
            "Ngôn ngữ dùng để chỉ định dữ liệu cần display/print/store/update/delete.",
        },
        {
          term: "query by example (QBE)",
          definition:
            "Giao diện đồ hoạ hỗ trợ người dùng tìm dữ liệu theo mẫu/điều kiện.",
        },
        {
          term: "SQL",
          definition:
            "Structured Query Language — query language phổ biến để quản lý, cập nhật và truy xuất dữ liệu.",
        },
        {
          term: "report writer",
          definition:
            "Tool tạo reports từ dữ liệu trong database.",
        },
      ],
    },
    {
      id: "s10",
      heading: "Personal vs Enterprise DBMS",
      blocks: [
        comparisonBlock(
          "Personal vs Enterprise DBMS",
          ["Tiêu chí", "Personal DBMS", "Enterprise DBMS"],
          [
            {
              label: "Quy mô ứng dụng",
              cells: [
                "Nhỏ, đơn giản; cá nhân/nhóm nhỏ",
                "Lớn, nhiều ứng dụng cho tổ chức/workgroup",
              ],
            },
            {
              label: "Số user",
              cells: ["< 100 user", "Hàng nghìn user"],
            },
            {
              label: "Vận hành",
              cells: ["Đơn giản", "24/7"],
            },
            {
              label: "Sản phẩm tiêu biểu",
              cells: [
                "Microsoft Access (vừa là DBMS vừa là công cụ phát triển app)",
                "DB2, SQL Server, Oracle",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "personal DBMS",
          definition:
            "DBMS cho ứng dụng nhỏ, đơn giản, thường dưới 100 users.",
        },
        {
          term: "enterprise DBMS",
          definition:
            "DBMS cho tổ chức/workgroup lớn, hàng nghìn users, vận hành 24/7.",
        },
      ],
    },
    {
      id: "s11",
      heading: "DBMS products",
      blocks: [
        comparisonBlock(
          "Một số DBMS phổ biến",
          ["Sản phẩm", "Nhà cung cấp / đặc điểm"],
          [
            { label: "DB2", cells: ["IBM"] },
            { label: "Access", cells: ["Microsoft — cho personal computer"] },
            { label: "SQL Server", cells: ["Microsoft — cho hệ thống lớn"] },
            { label: "Oracle", cells: ["Oracle Corporation"] },
            { label: "MySQL", cells: ["Open-source, license-free"] },
          ],
        ),
        calloutBlock(
          "trap",
          "DBMS ≠ database",
          "DBMS là PHẦN MỀM dùng để tạo/xử lý/quản trị database; database là tập bảng + quan hệ + metadata. Hai khái niệm khác nhau, đừng lẫn.",
        ),
      ],
      keyTerms: [
        {
          term: "DBMS product",
          definition:
            "Sản phẩm phần mềm DBMS như DB2, Access, SQL Server, Oracle, MySQL.",
        },
        {
          term: "MySQL",
          definition:
            "DBMS open-source, license-free.",
        },
        {
          term: "open-source",
          definition:
            "Phần mềm có source code mở theo điều kiện license.",
        },
      ],
    },
    {
      id: "s12",
      heading: "Database administration",
      blocks: [
        calloutBlock(
          "key",
          "Database administration",
          "Database là tài nguyên quan trọng; càng chạm nhiều chức năng business thì lợi ích lẫn rủi ro càng tăng. DBA quản lý việc phát triển, vận hành, bảo trì database; nhiệm vụ chính là BẢO VỆ database và TỐI ĐA availability cho người dùng được phép (authorized use).",
        ),
      ],
      keyTerms: [
        {
          term: "database administration",
          definition:
            "Hoạt động quản lý phát triển, vận hành, bảo trì và bảo vệ database.",
        },
        {
          term: "DBA",
          definition:
            "Database administrator — người/nhóm chịu trách nhiệm quản trị database.",
        },
        {
          term: "authorized use",
          definition:
            "Việc truy cập/sử dụng database bởi người dùng được cấp quyền.",
        },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "Which statement best distinguishes data from information?",
      options: [
        {
          id: "a",
          text: "Data are unprocessed items; information is processed data that is organized, meaningful, and useful",
          isCorrect: true,
          rationale:
            "Đúng. Data là các mục chưa xử lý; information là data đã xử lý để có ý nghĩa và dùng được cho quyết định.",
        },
        {
          id: "b",
          text: "Information is raw items; data is always organized and useful",
          isCorrect: false,
          rationale:
            "Bẫy đảo khái niệm. Organized/meaningful/useful là đặc điểm của information, không phải data thô.",
        },
        {
          id: "c",
          text: "Data and information mean exactly the same thing in database management",
          isCorrect: false,
          rationale:
            "Bẫy đồng nhất. Topic này nhấn mục tiêu biến data thành information đáng tin.",
        },
        {
          id: "d",
          text: "Data can only be numbers, while information can only be text",
          isCorrect: false,
          rationale:
            "Bẫy loại dữ liệu. Data có thể là text, numbers, images, audio, video; phân biệt chính nằm ở xử lý và ý nghĩa.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Data vs Information",
      takeaway:
        "Data = raw/unprocessed; information = processed, organized, meaningful, useful.",
    },
    {
      id: "q02",
      stem: "Which order correctly shows the hierarchy of data from smallest to largest?",
      options: [
        {
          id: "a",
          text: "bit → byte → field → record → file/table → database",
          isCorrect: true,
          rationale:
            "Đúng. Mỗi tầng gộp tầng nhỏ hơn: bits thành byte, bytes thành field, fields thành record, records thành file/table.",
        },
        {
          id: "b",
          text: "byte → bit → record → field → database → file/table",
          isCorrect: false,
          rationale:
            "Bẫy đảo thứ tự. Bit nhỏ hơn byte; field nhỏ hơn record; database lớn hơn file/table.",
        },
        {
          id: "c",
          text: "field → byte → bit → file/table → record → database",
          isCorrect: false,
          rationale:
            "Bẫy field/byte. Field được tạo từ bytes, không đứng trước byte.",
        },
        {
          id: "d",
          text: "database → file/table → record → field → byte → bit",
          isCorrect: false,
          rationale:
            "Bẫy chiều ngược. Đây là lớn → nhỏ, còn câu hỏi yêu cầu nhỏ → lớn.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Hierarchy of data order",
      takeaway:
        "Hierarchy chuẩn: bit < byte < field < record < file/table < database.",
    },
    {
      id: "q03",
      stem: "What is the main problem with a traditional file environment?",
      options: [
        {
          id: "a",
          text: "Data redundancy and data inconsistency across separate files",
          isCorrect: true,
          rationale:
            "Đúng. Mỗi program giữ file riêng làm cùng dữ liệu bị lặp; cập nhật không đồng bộ dẫn tới inconsistency.",
        },
        {
          id: "b",
          text: "Files are always more secure than databases",
          isCorrect: false,
          rationale:
            "Bẫy kết luận sai. Topic không nói file environment an toàn hơn; database approach còn có lợi ích security.",
        },
        {
          id: "c",
          text: "A file environment prevents any data from being duplicated",
          isCorrect: false,
          rationale:
            "Bẫy ngược cơ chế. Vấn đề chính của file environment chính là data redundancy.",
        },
        {
          id: "d",
          text: "A file environment automatically creates relationships and metadata",
          isCorrect: false,
          rationale:
            "Bẫy database feature. Relationships + metadata là phần của database, không tự có trong file rời rạc.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Problems in the file environment",
      takeaway:
        "File rời rạc gây redundancy và inconsistency; database approach sinh ra để giảm hai vấn đề này.",
    },
    {
      id: "q04",
      stem: "According to the chapter, what does a database include?",
      options: [
        {
          id: "a",
          text: "Tables/files, relationships among rows or tables, and metadata",
          isCorrect: true,
          rationale:
            "Đúng. Database không chỉ là nhóm bảng; nó gồm dữ liệu, quan hệ và metadata mô tả cấu trúc.",
        },
        {
          id: "b",
          text: "Only a set of unrelated tables",
          isCorrect: false,
          rationale:
            "Bẫy thiếu quan hệ. Nếu chỉ có bảng rời, chưa đủ ý database theo slide.",
        },
        {
          id: "c",
          text: "Only the DBMS software installed on a computer",
          isCorrect: false,
          rationale:
            "Bẫy DBMS vs database. DBMS là phần mềm quản trị; database là dữ liệu + relationships + metadata.",
        },
        {
          id: "d",
          text: "Only backup copies of records",
          isCorrect: false,
          rationale:
            "Bẫy backup. Backup không phải định nghĩa database; database tổ chức dữ liệu để access/retrieve/use.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "What is a database",
      takeaway:
        "Database = tables/files + relationships + metadata.",
    },
    {
      id: "q05",
      stem: "Which statement correctly describes primary keys and foreign keys?",
      options: [
        {
          id: "a",
          text: "A primary key uniquely identifies a row; a foreign key refers to a primary key in another table to create a relationship",
          isCorrect: true,
          rationale:
            "Đúng. Primary key định danh row trong bảng; foreign key là common field trỏ về primary key ở bảng khác.",
        },
        {
          id: "b",
          text: "A foreign key uniquely identifies every row in its own table, while a primary key only formats reports",
          isCorrect: false,
          rationale:
            "Bẫy đảo vai trò. Định danh duy nhất là primary key; report formatting không phải vai trò của primary key.",
        },
        {
          id: "c",
          text: "Primary keys and foreign keys are unrelated to relational databases",
          isCorrect: false,
          rationale:
            "Bẫy phủ nhận. Relational database dùng keys/common fields để biểu diễn relationships.",
        },
        {
          id: "d",
          text: "A primary key is a query language, and a foreign key is a DBMS product",
          isCorrect: false,
          rationale:
            "Bẫy lẫn thuật ngữ. Query language là SQL/QBE context; DBMS product là DB2/Access/Oracle/MySQL.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Primary key vs Foreign key",
      takeaway:
        "PK định danh duy nhất; FK nối bảng bằng cách tham chiếu PK của bảng khác.",
    },
    {
      id: "q06",
      stem: "What is metadata in a database?",
      options: [
        {
          id: "a",
          text: "Data that describes data, such as field name, data type, and description",
          isCorrect: true,
          rationale:
            "Đúng. Metadata mô tả cấu trúc và ý nghĩa của data; ví dụ Field Name, Data Type, Description.",
        },
        {
          id: "b",
          text: "The main customer orders stored as records",
          isCorrect: false,
          rationale:
            "Bẫy dữ liệu chính. Customer orders là data/records; metadata mô tả data đó.",
        },
        {
          id: "c",
          text: "A backup file that replaces the DBMS",
          isCorrect: false,
          rationale:
            "Bẫy backup/DBMS. Metadata không phải backup và không thay thế DBMS.",
        },
        {
          id: "d",
          text: "A report that prints all rows in a table",
          isCorrect: false,
          rationale:
            "Bẫy report. Report trình bày dữ liệu; metadata mô tả cấu trúc dữ liệu.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Metadata",
      takeaway:
        "Metadata = data about data; database luôn bao gồm metadata.",
    },
    {
      id: "q07",
      stem: "Which statement best describes SQL and queries?",
      options: [
        {
          id: "a",
          text: "A query requests specific data from a database; SQL is a query language used to manage, update, and retrieve data",
          isCorrect: true,
          rationale:
            "Đúng. Query là yêu cầu dữ liệu cụ thể; SQL là Structured Query Language để truy xuất/quản lý/cập nhật dữ liệu.",
        },
        {
          id: "b",
          text: "SQL is a DBMS product like Oracle or Access",
          isCorrect: false,
          rationale:
            "Bẫy product. Oracle/Access là DBMS products; SQL là query language.",
        },
        {
          id: "c",
          text: "Queries can only draw forms and cannot retrieve data",
          isCorrect: false,
          rationale:
            "Bẫy form. Query dùng để yêu cầu/truy xuất dữ liệu; form là thành phần khác của database application.",
        },
        {
          id: "d",
          text: "SQL is the same thing as metadata",
          isCorrect: false,
          rationale:
            "Bẫy đồng nhất. Metadata mô tả data; SQL là language dùng để làm việc với database.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "SQL / query language",
      takeaway:
        "Query = yêu cầu dữ liệu; SQL = query language phổ biến để quản lý, cập nhật, truy xuất dữ liệu.",
    },
    {
      id: "q08",
      stem: "Which statement correctly distinguishes a DBMS from a database and personal from enterprise DBMS?",
      options: [
        {
          id: "a",
          text: "A DBMS is software for creating and managing databases; Access is personal, while Oracle/DB2/SQL Server are enterprise examples",
          isCorrect: true,
          rationale:
            "Đúng. DBMS là phần mềm; database là dữ liệu + relationships + metadata. Access thường là personal DBMS; Oracle/DB2/SQL Server là enterprise examples.",
        },
        {
          id: "b",
          text: "A database is the same as a DBMS, and Access is designed for thousands of 24/7 enterprise users",
          isCorrect: false,
          rationale:
            "Bẫy kép. Database ≠ DBMS; Access thuộc personal DBMS, không phải ví dụ enterprise cho hàng nghìn users.",
        },
        {
          id: "c",
          text: "Oracle and DB2 are personal DBMS products for fewer than 100 users only",
          isCorrect: false,
          rationale:
            "Bẫy đảo phân loại. Oracle/DB2 thuộc enterprise DBMS; personal DBMS ví dụ Access.",
        },
        {
          id: "d",
          text: "A DBMS is only a report, and a database is only SQL",
          isCorrect: false,
          rationale:
            "Bẫy lẫn khái niệm. Report là output/application component; SQL là query language; DBMS là software quản trị database.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "DBMS vs database / Personal vs Enterprise",
      takeaway:
        "DBMS là software quản trị; database là data structure. Personal: Access; Enterprise: DB2, SQL Server, Oracle.",
    },
    {
      id: "q09",
      stem: "Which option lists advantages of the database approach?",
      options: [
        {
          id: "a",
          text: "Reduced redundancy, avoided inconsistency, shared data, and improved security",
          isCorrect: true,
          rationale:
            "Đúng. Database approach giảm dữ liệu lặp, tránh inconsistency, hỗ trợ shared data và security.",
        },
        {
          id: "b",
          text: "More duplicated data and more inconsistency across separate files",
          isCorrect: false,
          rationale:
            "Bẫy ngược lợi ích. Duplicated data và inconsistency là vấn đề của file environment mà database approach cần giảm.",
        },
        {
          id: "c",
          text: "Only a backup location for old files",
          isCorrect: false,
          rationale:
            "Bẫy thu hẹp. Database không chỉ để backup; nó tổ chức, chia sẻ, bảo vệ và quản lý dữ liệu vận hành.",
        },
        {
          id: "d",
          text: "A way to remove all metadata from data storage",
          isCorrect: false,
          rationale:
            "Bẫy sai cấu trúc. Database có metadata để mô tả cấu trúc dữ liệu, không loại bỏ metadata.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Advantages of database approach",
      takeaway:
        "Database approach sinh ra để giảm redundancy/inconsistency và hỗ trợ shared data, security, chuẩn hoá.",
    },
    {
      id: "q10",
      stem: "Which statement correctly matches database application components?",
      options: [
        {
          id: "a",
          text: "Forms read, insert, modify, and delete data; reports present structured output; query forms help users quickly answer questions",
          isCorrect: true,
          rationale:
            "Đúng. Forms dùng để thao tác dữ liệu; reports trình bày output; query forms giúp hỏi/lấy câu trả lời nhanh.",
        },
        {
          id: "b",
          text: "Reports are mainly used to insert and edit records in the database",
          isCorrect: false,
          rationale:
            "Bẫy gán nhầm. Reports là output có cấu trúc; form mới là nơi đọc/chèn/sửa/xoá dữ liệu.",
        },
        {
          id: "c",
          text: "Forms are only used for printing final summaries",
          isCorrect: false,
          rationale:
            "Bẫy đảo form/report. Printing summaries gần với report hơn; forms phục vụ tương tác với dữ liệu.",
        },
        {
          id: "d",
          text: "Query forms cannot retrieve answers from a database",
          isCorrect: false,
          rationale:
            "Bẫy phủ định vai trò. Query forms được thiết kế để giúp user tìm câu trả lời từ database.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Database application components",
      takeaway:
        "Forms thao tác dữ liệu; reports trình bày; query forms giúp truy vấn nhanh.",
    },
    {
      id: "q11",
      stem: "Which statement best distinguishes Query by Example from SQL?",
      options: [
        {
          id: "a",
          text: "QBE is a graphical interface for retrieving data; SQL is an English-like query language",
          isCorrect: true,
          rationale:
            "Đúng. QBE hỗ trợ truy vấn bằng giao diện đồ hoạ; SQL là ngôn ngữ query dạng câu lệnh.",
        },
        {
          id: "b",
          text: "QBE and SQL are exactly the same thing",
          isCorrect: false,
          rationale:
            "Bẫy đồng nhất. Cả hai liên quan query, nhưng QBE là graphical interface còn SQL là language.",
        },
        {
          id: "c",
          text: "QBE always requires users to type full English-like commands",
          isCorrect: false,
          rationale:
            "Bẫy gán vai trò SQL cho QBE. Gõ câu lệnh là đặc trưng của SQL hơn là QBE.",
        },
        {
          id: "d",
          text: "SQL is only a report writer and cannot retrieve data",
          isCorrect: false,
          rationale:
            "Bẫy sai công cụ. SQL là query language dùng để quản lý/cập nhật/truy xuất dữ liệu; report writer là tool khác.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "QBE vs SQL",
      takeaway:
        "QBE = giao diện đồ hoạ để query; SQL = query language dạng câu lệnh kiểu tiếng Anh.",
    },
  ],
  status: "ready",
  source: "Digital Technology in Business — Topic 06 Database Mgt.pdf.",
};

const topic07: Chapter = {
  slug: "topic-07",
  order: 7,
  title: "Topic 07 — E-Commerce & Supply Chain Systems",
  bigIdea:
    "Digital channels đã thay đổi tận gốc cách doanh nghiệp mua, bán và hợp tác — không chỉ là 'bán hàng online'. E-commerce bao trùm cả quy trình: phát triển, marketing, bán, giao, chăm sóc và thanh toán trên một thị trường toàn cầu kết nối. Web 2.0 biến khách hàng từ người ĐỌC thụ động (Web 1.0) thành người THAM GIA — chia sẻ, cộng tác — nên cộng đồng và social network trở thành kênh marketing cốt lõi (Web 3.0 đẩy tiếp tới machine-to-machine, cá nhân hoá thông minh). Đồng thời, information systems làm cả supply chain (Supplier → Manufacturer → Distributor → Retailer → Customer) minh bạch và phối hợp: chia sẻ dữ liệu để giảm bullwhip effect, tích hợp SRM–CRM. Là future manager, bạn không còn bị giới hạn địa lý — nhưng phải chọn đúng business model (B2C/B2B/C2C, marketplace, subscription, freemium…) và hiểu hạ tầng (three-tier architecture, digital supply chain) để cạnh tranh thay vì bị bỏ lại.",
  learningObjectives: [
    "Giải thích e-commerce là cả quy trình online (không chỉ mua/bán); phân biệt e-commerce vs e-business.",
    "Phân biệt các category: B2C, B2B, C2C, B2G và cho ví dụ.",
    "Nêu các e-commerce success factors (customer value proposition, performance & service, look & feel, personal attention, community, security).",
    "Nhận diện các business model types (manufacturer, retailer, marketplace, subscription, freemium, aggregator, advertisement, crowdsourcing, blockchain…).",
    "Mô tả three-tier architecture của e-commerce (user / server / database tier).",
    "Phân biệt Web 1.0 / 2.0 / 3.0 và giải thích vì sao Web 2.0 quan trọng với business.",
    "Giải thích IS nâng cao supply chain performance (minh bạch, chia sẻ dữ liệu, giảm bullwhip effect).",
    "Nêu 3 IS trong supply chain management (SRM, inventory, CRM); vai trò MRP/ERP và tích hợp SRM–CRM.",
    "Giải thích nhu cầu interorganizational data exchange.",
    "Nêu các e-commerce trends và các process trong essential e-commerce process architecture (gồm electronic payment / EFT).",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "6 Study Questions gom 3 nhánh: thương mại điện tử (Q1–Q2), Web evolution (Q3), supply chain & data (Q4–Q6). Bấm node để mở chi tiết và nhảy tới phần học.",
    nodes: [
      {
        id: "ec",
        label: "E-Commerce & Supply Chain",
        group: "concept",
        sectionId: "s1",
        detail:
          "Digital channels đổi cách mua–bán–hợp tác; chọn đúng business model + hiểu hạ tầng.",
      },
      {
        id: "g_ec",
        label: "A. Thương mại điện tử (Q1–Q2)",
        group: "concept",
        parent: "ec",
        sectionId: "s1",
        detail:
          "E-commerce, categories, success factors, business models, three-tier tech.",
      },
      {
        id: "g_web",
        label: "B. Web evolution (Q3)",
        group: "concept",
        parent: "ec",
        sectionId: "s6",
        detail: "Web 1.0 → 2.0 → 3.0; vì sao Web 2.0 quan trọng.",
      },
      {
        id: "g_sc",
        label: "C. Supply chain & data (Q4–Q6)",
        group: "concept",
        parent: "ec",
        sectionId: "s7",
        detail: "Supply chain + IS, SRM/CRM, data exchange, trends.",
      },
      {
        id: "t_ecdef",
        label: "E-commerce là gì",
        group: "term",
        parent: "g_ec",
        sectionId: "s1",
        detail: "Cả quy trình online; e-commerce vs e-business.",
      },
      {
        id: "t_cat",
        label: "Categories B2C/B2B/C2C",
        group: "term",
        parent: "g_ec",
        sectionId: "s2",
        detail: "Bên giao dịch + ví dụ.",
      },
      {
        id: "t_succ",
        label: "Success factors",
        group: "term",
        parent: "g_ec",
        sectionId: "s3",
        detail: "Value proposition, service, community, security.",
      },
      {
        id: "t_model",
        label: "Business models",
        group: "term",
        parent: "g_ec",
        sectionId: "s4",
        detail: "Retailer, marketplace, subscription, freemium…",
      },
      {
        id: "t_tier",
        label: "Three-tier architecture",
        group: "term",
        parent: "g_ec",
        sectionId: "s5",
        detail: "User → server → database tier.",
      },
      {
        id: "t_web",
        label: "Web 1.0 / 2.0 / 3.0",
        group: "term",
        parent: "g_web",
        sectionId: "s6",
        detail: "Readable → writable → executable.",
      },
      {
        id: "t_scperf",
        label: "Supply chain + IS",
        group: "term",
        parent: "g_sc",
        sectionId: "s7",
        detail: "Minh bạch, chia sẻ dữ liệu, bullwhip effect.",
      },
      {
        id: "t_srm",
        label: "SRM / Inventory / CRM",
        group: "term",
        parent: "g_sc",
        sectionId: "s8",
        detail: "3 IS trong SCM; MRP/ERP; SRM–CRM integration.",
      },
      {
        id: "t_exch",
        label: "Data exchange",
        group: "term",
        parent: "g_sc",
        sectionId: "s9",
        detail: "Interorganizational message exchange.",
      },
      {
        id: "t_trend",
        label: "Trends & process",
        group: "term",
        parent: "g_sc",
        sectionId: "s10",
        detail: "Social/mobile; process architecture + payment.",
      },
    ],
    edges: [
      { from: "ec", to: "g_ec" },
      { from: "ec", to: "g_web" },
      { from: "ec", to: "g_sc" },
      { from: "g_ec", to: "t_ecdef" },
      { from: "g_ec", to: "t_cat" },
      { from: "g_ec", to: "t_succ" },
      { from: "g_ec", to: "t_model" },
      { from: "g_ec", to: "t_tier" },
      { from: "g_web", to: "t_web" },
      { from: "g_sc", to: "t_scperf" },
      { from: "g_sc", to: "t_srm" },
      { from: "g_sc", to: "t_exch" },
      { from: "g_sc", to: "t_trend" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "E-commerce là gì",
      blocks: [
        calloutBlock(
          "key",
          "E-commerce > mua/bán",
          "Electronic commerce KHÔNG chỉ là bán/mua sản phẩm. Nó bao trùm CẢ quy trình online: developing, marketing, selling, delivering, servicing, và paying cho sản phẩm/dịch vụ — giao dịch trên internetworked global marketplace với mạng lưới đối tác toàn cầu.",
        ),
        calloutBlock(
          "trap",
          "E-commerce vs E-business",
          "E-commerce = bán/mua online (giao dịch với khách). E-business = làm MỌI thứ online: bán, mua, sản xuất, vận hành… E-business rộng hơn e-commerce.",
        ),
      ],
      keyTerms: [
        {
          term: "e-commerce",
          definition:
            "Quy trình developing, marketing, selling, delivering, servicing và paying cho sản phẩm/dịch vụ qua môi trường online.",
        },
        {
          term: "e-business",
          definition:
            "Phạm vi rộng hơn e-commerce: dùng digital channels cho nhiều hoạt động kinh doanh, vận hành, mua, bán và sản xuất.",
        },
        {
          term: "internetworked global marketplace",
          definition:
            "Thị trường toàn cầu được kết nối bằng mạng, nơi doanh nghiệp có thể giao dịch với khách hàng và đối tác vượt giới hạn địa lý.",
        },
      ],
    },
    {
      id: "s2",
      heading: "Categories of e-commerce",
      blocks: [
        comparisonBlock(
          "Các loại e-commerce",
          ["Loại", "Bên giao dịch", "Ví dụ"],
          [
            {
              label: "B2C",
              cells: [
                "Business → Consumer: doanh nghiệp bán cho người tiêu dùng",
                "Shopee, Tiki",
              ],
            },
            {
              label: "B2B",
              cells: [
                "Business ↔ Business: marketplace & link trực tiếp giữa các doanh nghiệp",
                "Intel bán chip cho Dell",
              ],
            },
            {
              label: "C2C",
              cells: [
                "Consumer ↔ Consumer: đấu giá/mua bán giữa người dùng",
                "eBay, Chợ Tốt",
              ],
            },
            {
              label: "B2G",
              cells: [
                "Business → Government",
                "Cung cấp phần mềm cho cơ quan nhà nước",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "B2C",
          definition: "Business-to-Consumer: doanh nghiệp bán cho người tiêu dùng.",
        },
        {
          term: "B2B",
          definition: "Business-to-Business: giao dịch giữa các doanh nghiệp.",
        },
        {
          term: "C2C",
          definition: "Consumer-to-Consumer: người dùng mua/bán với nhau.",
        },
        {
          term: "B2G",
          definition: "Business-to-Government: doanh nghiệp giao dịch với cơ quan nhà nước.",
        },
      ],
    },
    {
      id: "s3",
      heading: "E-commerce success factors",
      blocks: [
        calloutBlock(
          "key",
          "Yếu tố thành công của e-commerce",
          "Customer value proposition: Selection & Value (sản phẩm hấp dẫn, giá cạnh tranh, bảo đảm, hỗ trợ sau bán); Performance & Service (điều hướng/mua nhanh, giao hàng kịp); Look & Feel (giao diện đẹp, catalog đa phương tiện); Advertising & Incentives (quảng cáo/khuyến mãi nhắm đúng, affiliate); Personal Attention (recommendation cá nhân hoá); Community Relationships (social network/cộng đồng); Security & Reliability (bảo mật giao dịch, giao hàng tin cậy).",
        ),
      ],
      keyTerms: [
        {
          term: "customer value proposition",
          definition:
            "Lý do khách hàng chọn kênh e-commerce: selection, value, dịch vụ, trải nghiệm, tin cậy và bảo mật.",
        },
        {
          term: "recommendation system",
          definition:
            "Hệ thống gợi ý cá nhân hoá dựa trên hành vi/sở thích để tăng personal attention.",
        },
        {
          term: "affiliate",
          definition:
            "Cơ chế quảng bá/khuyến mãi qua đối tác giới thiệu khách hàng hoặc traffic.",
        },
      ],
    },
    {
      id: "s4",
      heading: "Business model types",
      blocks: [
        comparisonBlock(
          "Các business model điển hình",
          ["Mô hình", "Bản chất / ví dụ"],
          [
            {
              label: "Manufacturer",
              cells: ["Nhà sản xuất bán trực tiếp (Ford, 3M, General Electric)"],
            },
            {
              label: "Distributor",
              cells: ["Mua từ nhà sản xuất rồi phân phối (auto dealerships)"],
            },
            {
              label: "Retailer",
              cells: ["Bán lẻ trực tiếp cho người dùng (Amazon)"],
            },
            {
              label: "Franchise",
              cells: ["Nhượng quyền (McDonald's, Pizza Hut)"],
            },
            {
              label: "Brick-and-mortar",
              cells: ["Cửa hàng truyền thống, giao dịch face-to-face"],
            },
            {
              label: "eCommerce",
              cells: ["Web-store trên Internet"],
            },
            {
              label: "Freemium",
              cells: ["Miễn phí cơ bản, trả phí nâng cao (Dropbox, YouTube)"],
            },
            {
              label: "Subscription",
              cells: ["Thuê bao định kỳ (Netflix)"],
            },
            {
              label: "Aggregator",
              cells: ["Gom nhà cung cấp dịch vụ vào một nền tảng (Uber, Airbnb)"],
            },
            {
              label: "Marketplace",
              cells: ["Sàn để nhiều bên mua–bán (Amazon, Alibaba)"],
            },
            {
              label: "Advertisement",
              cells: ["Nội dung miễn phí, kiếm tiền từ quảng cáo (YouTube, Forbes)"],
            },
            {
              label: "Crowdsourcing",
              cells: ["Cộng đồng cùng đóng góp nội dung (Wikipedia, Duolingo)"],
            },
            {
              label: "Blockchain",
              cells: [
                "Giao dịch minh bạch, không cần trung gian (ví dụ blockchain-based)",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "business model",
          definition: "Cách doanh nghiệp tạo, phân phối và thu giá trị từ thị trường.",
        },
        {
          term: "freemium",
          definition: "Miễn phí bản cơ bản, thu tiền tính năng/gói nâng cao.",
        },
        {
          term: "subscription",
          definition: "Khách hàng trả phí định kỳ để dùng sản phẩm/dịch vụ.",
        },
        {
          term: "aggregator",
          definition: "Nền tảng gom nhiều nhà cung cấp dịch vụ cho khách lựa chọn.",
        },
        {
          term: "marketplace",
          definition: "Sàn kết nối nhiều người mua và người bán.",
        },
        {
          term: "crowdsourcing",
          definition: "Dựa vào cộng đồng để đóng góp nội dung, ý tưởng hoặc lao động.",
        },
      ],
    },
    {
      id: "s5",
      heading: "Three-tier architecture",
      blocks: [
        flowBlock(
          "s5",
          "Three-tier architecture",
          "horizontal",
          [
            {
              id: "s5_user",
              label: "User tier (client)",
              group: "concept",
              detail:
                "PC + browser; gửi & xử lý web page. Trang viết bằng HTML, truyền qua HTTP.",
            },
            {
              id: "s5_server",
              label: "Server tier",
              group: "concept",
              detail:
                "Web server + application programs quản lý HTTP traffic giữa web server và user; trung gian giữa client và database.",
            },
            {
              id: "s5_db",
              label: "Database tier",
              group: "concept",
              detail:
                "Máy chạy DBMS, xử lý SQL request để lấy & lưu dữ liệu.",
            },
          ],
          [
            { from: "s5_user", to: "s5_server", label: "HTTP request" },
            { from: "s5_server", to: "s5_db", label: "SQL" },
            { from: "s5_db", to: "s5_user", label: "kết quả" },
          ],
          "Mỗi tier ứng với một lớp máy tính; tách bạch trình bày – xử lý – lưu trữ giúp hệ thống an toàn & dễ mở rộng.",
        ),
      ],
      keyTerms: [
        {
          term: "three-tier architecture",
          definition:
            "Kiến trúc tách user tier, server tier và database tier.",
        },
        {
          term: "user tier",
          definition: "Lớp client/browser nơi người dùng tương tác với web page.",
        },
        {
          term: "server tier",
          definition:
            "Lớp web server/application programs xử lý HTTP traffic và logic trung gian.",
        },
        {
          term: "database tier",
          definition: "Lớp DBMS xử lý SQL request và lưu/lấy dữ liệu.",
        },
        {
          term: "HTTP",
          definition: "Giao thức truyền web page/request giữa browser và web server.",
        },
        {
          term: "HTML",
          definition: "Ngôn ngữ đánh dấu dùng để mô tả nội dung web page.",
        },
      ],
    },
    {
      id: "s6",
      heading: "Web 1.0 / 2.0 / 3.0",
      blocks: [
        comparisonBlock(
          "Web 1.0 vs 2.0 vs 3.0",
          ["Tiêu chí", "Web 1.0", "Web 2.0", "Web 3.0"],
          [
            {
              label: "Bản chất",
              cells: [
                "'Readable' — flat data",
                "'Writable' — interactive data",
                "'Executable' — dynamic apps, machine-to-machine",
              ],
            },
            {
              label: "Tương tác",
              cells: [
                "Ít tương tác giữa site & user",
                "Tương tác user↔site; khuyến khích participation, collaboration, sharing",
                "Máy hiểu thông tin như người, tự sinh/phân phối nội dung cá nhân hoá",
              ],
            },
            {
              label: "Trọng tâm",
              cells: [
                "Company focus, read-only",
                "Community focus, read-write (blogs/wikis)",
                "Individual focus, smart applications (semantic web)",
              ],
            },
            {
              label: "Ví dụ",
              cells: [
                "Britannica Online, portals",
                "YouTube, Facebook, Wikipedia",
                "ChatGPT, Spotify recommendation",
              ],
            },
          ],
        ),
        calloutBlock(
          "key",
          "Vì sao Web 2.0 quan trọng với business",
          "Web 2.0 biến khách hàng thành người tham gia (tạo nội dung, chia sẻ, đánh giá) → social network trở thành nền tảng marketing cộng đồng, là kênh tiếp cận và xây lòng tin khách hàng. (Web 2.0 đã gặp lần đầu ở Topic 03 — phần WWW; ở đây ta đặt nó trong mạch tiến hoá Web 1.0 → 2.0 → 3.0.)",
        ),
      ],
      keyTerms: [
        {
          term: "Web 1.0",
          definition: "Readable/read-only web: người dùng chủ yếu đọc nội dung.",
        },
        {
          term: "Web 2.0",
          definition:
            "Writable/read-write web: participation, collaboration, sharing qua blogs, wikis, social network.",
        },
        {
          term: "Web 3.0",
          definition:
            "Executable web: dynamic apps, machine-to-machine và smart applications.",
        },
        {
          term: "semantic web",
          definition: "Web nơi máy có thể hiểu và xử lý ý nghĩa thông tin tốt hơn.",
        },
      ],
    },
    {
      id: "s7",
      heading: "Supply chain performance + IS",
      blocks: [
        flowBlock(
          "s7",
          "Networked supply chain",
          "horizontal",
          [
            {
              id: "s7_sup",
              label: "Supplier",
              group: "concept",
              detail: "Nhà cung cấp nguyên liệu.",
            },
            {
              id: "s7_man",
              label: "Manufacturer",
              group: "concept",
              detail: "Nhà sản xuất.",
            },
            {
              id: "s7_dist",
              label: "Distributor",
              group: "concept",
              detail: "Nhà phân phối.",
            },
            {
              id: "s7_ret",
              label: "Retailer",
              group: "concept",
              detail: "Nhà bán lẻ.",
            },
            {
              id: "s7_cus",
              label: "Customer",
              group: "concept",
              detail: "Khách hàng cuối.",
            },
          ],
          [
            { from: "s7_sup", to: "s7_man", label: "hàng & dữ liệu" },
            { from: "s7_man", to: "s7_dist", label: "hàng & dữ liệu" },
            { from: "s7_dist", to: "s7_ret", label: "hàng & dữ liệu" },
            { from: "s7_ret", to: "s7_cus", label: "hàng & dữ liệu" },
          ],
          "IS kết nối cả chuỗi: chia sẻ dữ liệu giúp minh bạch & phối hợp.",
        ),
        calloutBlock(
          "key",
          "IS nâng supply chain performance",
          "Information systems tăng minh bạch & độ chính xác qua chia sẻ dữ liệu, giúp lập kế hoạch/dự báo tốt hơn, giảm chi phí & lãng phí, và giảm bullwhip effect (dao động đơn hàng khuếch đại khi đi ngược chuỗi do thiếu thông tin chung).",
        ),
      ],
      keyTerms: [
        {
          term: "supply chain",
          definition:
            "Chuỗi Supplier → Manufacturer → Distributor → Retailer → Customer, nơi hàng hoá và dữ liệu cùng di chuyển.",
        },
        {
          term: "bullwhip effect",
          definition:
            "Dao động đơn hàng bị khuếch đại khi đi ngược chuỗi do thiếu chia sẻ thông tin chung.",
        },
      ],
    },
    {
      id: "s8",
      heading: "SRM / Inventory / CRM",
      blocks: [
        comparisonBlock(
          "3 IS trong supply chain management",
          ["Hệ thống", "Vai trò"],
          [
            {
              label: "Supplier Relationship Management (SRM)",
              cells: [
                "Giúp làm việc hiệu quả với nhà cung cấp (đặt hàng, đàm phán), tìm nguồn cung",
              ],
            },
            {
              label: "Inventory",
              cells: ["Kiểm soát tồn kho, biết khi nào cần nhập thêm"],
            },
            {
              label: "Customer Relationship Management (CRM)",
              cells: [
                "Chăm sóc khách hàng (với nhà phân phối/bán lẻ là khách)",
              ],
            },
          ],
        ),
        calloutBlock(
          "key",
          "ERP, MRP & tích hợp SRM–CRM",
          "MRP (Material Resource Planning) và ERP (Enterprise Resource Planning) hỗ trợ lập kế hoạch nguồn lực. Tích hợp SRM–CRM: nối CRM của mình với SRM của khách để tự động hoá mua lặp lại — SRM kiểm tra inventory, xác định món cần, và tạo order tự động.",
        ),
      ],
      keyTerms: [
        {
          term: "SRM",
          definition:
            "Supplier Relationship Management: hệ thống hỗ trợ làm việc với nhà cung cấp.",
        },
        {
          term: "CRM",
          definition:
            "Customer Relationship Management: hệ thống chăm sóc và quản lý quan hệ khách hàng.",
        },
        {
          term: "inventory system",
          definition: "Hệ thống kiểm soát tồn kho và nhu cầu nhập thêm.",
        },
        {
          term: "MRP",
          definition: "Material Resource Planning: hỗ trợ lập kế hoạch nguyên vật liệu/nguồn lực.",
        },
        {
          term: "ERP",
          definition: "Enterprise Resource Planning: hệ thống tích hợp lập kế hoạch nguồn lực doanh nghiệp.",
        },
      ],
    },
    {
      id: "s9",
      heading: "Interorganizational data exchange",
      blocks: [
        calloutBlock(
          "key",
          "Trao đổi dữ liệu giữa các tổ chức",
          "Doanh nghiệp phải giao tiếp với doanh nghiệp khác để mua nguyên liệu, bán sản phẩm, hay vận hành chung — nên cần interorganizational message exchange (trao đổi thông điệp/dữ liệu liên tổ chức) một cách chuẩn hoá và đáng tin.",
        ),
      ],
      keyTerms: [
        {
          term: "interorganizational message exchange",
          definition:
            "Trao đổi thông điệp/dữ liệu giữa các tổ chức để phối hợp mua, bán và vận hành.",
        },
      ],
    },
    {
      id: "s10",
      heading: "E-commerce trends",
      blocks: [
        calloutBlock(
          "realworld",
          "E-commerce trends",
          "Ba hướng lớn: social network, mobile network, virtual world. Top trends: social media chi phối quyết định mua; thị trường quảng cáo đắt đỏ hơn; direct-to-consumer brands lên ngôi nhờ social media; video & rich media giúp khám phá sản phẩm; mobile shopping tăng tốc.",
        ),
      ],
      keyTerms: [
        {
          term: "social network",
          definition:
            "Kênh cộng đồng nơi người dùng chia sẻ, đánh giá và ảnh hưởng quyết định mua.",
        },
        {
          term: "mobile network",
          definition:
            "Môi trường mua sắm/giao dịch trên thiết bị di động và kết nối di động.",
        },
        {
          term: "virtual world",
          definition:
            "Không gian số nơi trải nghiệm, tương tác và giao dịch có thể diễn ra trong môi trường ảo.",
        },
      ],
    },
    {
      id: "s11",
      heading: "Essential e-commerce process architecture",
      blocks: [
        comparisonBlock(
          "Essential e-commerce process architecture",
          ["Process", "Vai trò"],
          [
            {
              label: "Access control & security",
              cells: [
                "Thiết lập tin cậy & truy cập an toàn: xác thực, phân quyền, bảo mật",
              ],
            },
            {
              label: "Profiling & personalizing",
              cells: [
                "Xây profile sở thích để cá nhân hoá nội dung/quảng cáo (one-to-one marketing)",
              ],
            },
            {
              label: "Search management",
              cells: ["Giúp khách tìm đúng sản phẩm/dịch vụ"],
            },
            {
              label: "Content & catalog management",
              cells: [
                "Quản lý nội dung & catalog; hỗ trợ self-service & mass-customization (vd Dell)",
              ],
            },
            {
              label: "Workflow management",
              cells: [
                "Phối hợp công việc có cấu trúc giữa các nhân sự/bên",
              ],
            },
            {
              label: "Event notification",
              cells: [
                "E-commerce là event-driven; giám sát & thông báo sự kiện (truy cập, thanh toán, giao hàng)",
              ],
            },
            {
              label: "Collaboration & trading",
              cells: [
                "Hỗ trợ cộng tác & giao dịch giữa khách/nhà cung cấp/stakeholder",
              ],
            },
            {
              label: "Electronic payment",
              cells: [
                "Shopping cart, credit card, và Electronic Funds Transfer (EFT)",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "one-to-one marketing",
          definition:
            "Cá nhân hoá nội dung/quảng cáo theo profile và sở thích từng khách hàng.",
        },
        {
          term: "mass customization",
          definition:
            "Cho phép cá nhân hoá ở quy mô lớn nhờ catalog/process số.",
        },
        {
          term: "EFT (electronic funds transfer)",
          definition:
            "Chuyển tiền điện tử giữa ngân hàng, doanh nghiệp và khách hàng.",
        },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "Which statement best distinguishes e-commerce from e-business?",
      options: [
        {
          id: "a",
          text: "E-commerce focuses on online buying and selling transactions, while e-business covers broader online business activities",
          isCorrect: true,
          rationale:
            "Đúng. E-commerce là phần giao dịch mua/bán online; e-business rộng hơn, gồm cả mua, bán, sản xuất và vận hành online.",
        },
        {
          id: "b",
          text: "E-commerce and e-business mean exactly the same thing",
          isCorrect: false,
          rationale:
            "Bẫy đồng nhất khái niệm. Slide tách e-commerce khỏi e-business: e-business bao trùm nhiều hoạt động hơn.",
        },
        {
          id: "c",
          text: "E-commerce only means having a company website",
          isCorrect: false,
          rationale:
            "Bẫy thu hẹp quá mức. E-commerce bao trùm developing, marketing, selling, delivering, servicing và paying, không chỉ có website.",
        },
        {
          id: "d",
          text: "E-business only refers to customer-facing online sales",
          isCorrect: false,
          rationale:
            "Bẫy đảo phạm vi. Customer-facing online sales là trọng tâm của e-commerce; e-business còn gồm vận hành và sản xuất.",
        },
      ],
      difficulty: "basic",
      conceptTested: "E-commerce vs e-business",
      takeaway:
        "E-commerce là mua/bán online; e-business là mọi hoạt động kinh doanh online rộng hơn.",
    },
    {
      id: "q02",
      stem: "Which category matching is correct?",
      options: [
        {
          id: "a",
          text: "Intel selling chips to Dell is B2B; Shopee selling to consumers is B2C; eBay auctions between users are C2C",
          isCorrect: true,
          rationale:
            "Đúng. B2B là business với business, B2C là business với consumer, C2C là consumer với consumer.",
        },
        {
          id: "b",
          text: "Intel selling chips to Dell is B2C because Dell eventually sells to consumers",
          isCorrect: false,
          rationale:
            "Bẫy nhìn khách cuối. Category dựa trên hai bên trực tiếp trong giao dịch; Intel và Dell đều là business nên là B2B.",
        },
        {
          id: "c",
          text: "Shopee selling to individual shoppers is B2B because Shopee is a platform",
          isCorrect: false,
          rationale:
            "Bẫy nhầm platform với bên mua. Khi doanh nghiệp bán cho người tiêu dùng, bản chất là B2C.",
        },
        {
          id: "d",
          text: "eBay auctions between individual users are B2G",
          isCorrect: false,
          rationale:
            "Bẫy sai category. C2C là người dùng với người dùng; B2G là doanh nghiệp với government.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "E-commerce categories",
      takeaway:
        "Nhìn hai bên trực tiếp giao dịch: Business, Consumer hay Government.",
    },
    {
      id: "q03",
      stem: "In three-tier e-commerce architecture, what does the database tier do?",
      options: [
        {
          id: "a",
          text: "It runs the DBMS and processes SQL requests to retrieve and store data",
          isCorrect: true,
          rationale:
            "Đúng. Database tier là máy/lớp chạy DBMS, xử lý SQL request để lấy và lưu dữ liệu.",
        },
        {
          id: "b",
          text: "It is the user's browser that displays HTML pages",
          isCorrect: false,
          rationale:
            "Bẫy gán nhầm tier. Browser/HTML nằm ở user tier, không phải database tier.",
        },
        {
          id: "c",
          text: "It only manages HTTP traffic between the user and web server",
          isCorrect: false,
          rationale:
            "Bẫy server tier. Quản lý HTTP traffic là vai trò server/application tier.",
        },
        {
          id: "d",
          text: "It replaces the need for server-side application programs",
          isCorrect: false,
          rationale:
            "Bẫy bỏ mất tầng trung gian. Three-tier tách user, server và database; database tier không thay server tier.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Three-tier architecture",
      takeaway:
        "User tier hiển thị/tương tác; server tier xử lý traffic/logic; database tier chạy DBMS và SQL.",
    },
    {
      id: "q04",
      stem: "Which statement correctly describes Web 1.0, Web 2.0, and Web 3.0?",
      options: [
        {
          id: "a",
          text: "Web 1.0 is readable/read-only, Web 2.0 is writable and community-based, and Web 3.0 is executable and machine-to-machine",
          isCorrect: true,
          rationale:
            "Đúng. Đây là trục readable → writable → executable trong spec.",
        },
        {
          id: "b",
          text: "Web 2.0 is mainly read-only, while Web 1.0 is based on user-generated wikis",
          isCorrect: false,
          rationale:
            "Bẫy đảo thế hệ. Read-only/company focus là Web 1.0; wikis/blogs/collaboration là Web 2.0.",
        },
        {
          id: "c",
          text: "Web 3.0 means there is no personalization or smart application logic",
          isCorrect: false,
          rationale:
            "Bẫy phủ định trọng tâm. Web 3.0 hướng tới smart applications, semantic web và cá nhân hoá thông minh.",
        },
        {
          id: "d",
          text: "All three web generations have the same level of user participation",
          isCorrect: false,
          rationale:
            "Bẫy bỏ qua khác biệt cốt lõi. Web 2.0 tăng participation, collaboration và sharing so với Web 1.0.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Web 1.0 vs Web 2.0 vs Web 3.0",
      takeaway:
        "Web evolution: readable → writable/community → executable/machine-to-machine.",
    },
    {
      id: "q05",
      stem: "How can information systems improve supply chain performance?",
      options: [
        {
          id: "a",
          text: "By sharing data across the chain, improving visibility and reducing the bullwhip effect and waste",
          isCorrect: true,
          rationale:
            "Đúng. IS tăng minh bạch, giúp dự báo/lập kế hoạch tốt hơn và giảm bullwhip effect do thiếu thông tin chung.",
        },
        {
          id: "b",
          text: "By preventing organizations from sharing information with suppliers and customers",
          isCorrect: false,
          rationale:
            "Bẫy ngược cơ chế. Supply chain performance tăng nhờ chia sẻ dữ liệu, không phải khóa dữ liệu lại.",
        },
        {
          id: "c",
          text: "By increasing order fluctuation as it moves upstream",
          isCorrect: false,
          rationale:
            "Bẫy lấy vấn đề làm mục tiêu. Bullwhip effect là dao động bị khuếch đại; IS giúp giảm nó.",
        },
        {
          id: "d",
          text: "By focusing only on physical shipments and ignoring data",
          isCorrect: false,
          rationale:
            "Bẫy nhìn supply chain chỉ là hàng hoá. Topic nhấn mạnh cả hàng và dữ liệu cùng chạy trong chuỗi.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Supply chain performance and bullwhip effect",
      takeaway:
        "IS giúp supply chain minh bạch hơn, phối hợp tốt hơn và giảm bullwhip effect.",
    },
    {
      id: "q06",
      stem: "Which set lists the three information systems used in supply chain management in this topic?",
      options: [
        {
          id: "a",
          text: "Supplier Relationship Management, Inventory, and Customer Relationship Management",
          isCorrect: true,
          rationale:
            "Đúng. Ba hệ thống trong spec là SRM, Inventory và CRM.",
        },
        {
          id: "b",
          text: "Email, word processing, and presentation software",
          isCorrect: false,
          rationale:
            "Bẫy công cụ văn phòng. Đây không phải bộ 3 IS chuyên cho supply chain management trong topic.",
        },
        {
          id: "c",
          text: "Only Customer Relationship Management",
          isCorrect: false,
          rationale:
            "Bẫy chỉ nhìn phía khách hàng. Supply chain còn cần SRM với nhà cung cấp và inventory để kiểm soát tồn kho.",
        },
        {
          id: "d",
          text: "Search management, content management, and electronic payment",
          isCorrect: false,
          rationale:
            "Bẫy lẫn sang e-commerce process architecture. Bộ này thuộc quy trình e-commerce, không phải 3 IS trong SCM.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "SCM information systems",
      takeaway:
        "Bộ 3 SCM IS: SRM làm với supplier, Inventory kiểm soát tồn kho, CRM làm với customer.",
    },
    {
      id: "q07",
      stem: "Which business model matching is correct?",
      options: [
        {
          id: "a",
          text: "Netflix is subscription; Uber/Airbnb are aggregator; Dropbox/YouTube can use freemium",
          isCorrect: true,
          rationale:
            "Đúng. Subscription thu phí định kỳ; aggregator gom nhà cung cấp; freemium miễn phí cơ bản và trả phí nâng cao.",
        },
        {
          id: "b",
          text: "Netflix is freemium because users pay every month",
          isCorrect: false,
          rationale:
            "Bẫy đảo model. Trả phí định kỳ là subscription; freemium cần có gói cơ bản miễn phí và nâng cấp trả tiền.",
        },
        {
          id: "c",
          text: "Uber and Airbnb are brick-and-mortar models",
          isCorrect: false,
          rationale:
            "Bẫy nhầm offline với platform. Uber/Airbnb là aggregator, không phải cửa hàng giao dịch face-to-face.",
        },
        {
          id: "d",
          text: "Dropbox is a franchise because it offers cloud storage",
          isCorrect: false,
          rationale:
            "Bẫy ví dụ không liên quan. Franchise là nhượng quyền; Dropbox/YouTube nằm trong nhóm freemium theo spec.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Business model matching",
      takeaway:
        "Nhìn cách tạo doanh thu: subscription định kỳ, aggregator gom nguồn cung, freemium miễn phí cơ bản + trả phí nâng cao.",
    },
    {
      id: "q08",
      stem: "What is the role of EFT in e-commerce payment processes?",
      options: [
        {
          id: "a",
          text: "EFT electronically transfers money or credit among banks, businesses, and customers as part of web payment processes",
          isCorrect: true,
          rationale:
            "Đúng. EFT là Electronic Funds Transfer, nằm trong electronic payment cùng shopping cart và credit card.",
        },
        {
          id: "b",
          text: "EFT means paying only with physical cash at delivery",
          isCorrect: false,
          rationale:
            "Bẫy ngược khái niệm. EFT là chuyển tiền điện tử, không phải tiền mặt.",
        },
        {
          id: "c",
          text: "A shopping cart is a physical warehouse for inventory storage",
          isCorrect: false,
          rationale:
            "Bẫy hiểu literal. Shopping cart trong e-commerce là phần quy trình thanh toán/web payment, không phải kho hàng.",
        },
        {
          id: "d",
          text: "Electronic payment is unrelated to e-commerce process architecture",
          isCorrect: false,
          rationale:
            "Bẫy bỏ sót process. Electronic payment là một process trong essential e-commerce process architecture.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Electronic payment and EFT",
      takeaway:
        "Electronic payment gồm shopping cart, credit card và EFT; EFT là chuyển tiền điện tử.",
    },
    {
      id: "q09",
      stem: "Which option is an e-commerce success factor from this topic?",
      options: [
        {
          id: "a",
          text: "Security and reliability, supported by strong service and a usable look and feel",
          isCorrect: true,
          rationale:
            "Đúng. Security & Reliability, Performance & Service, Look & Feel đều nằm trong nhóm success factors của e-commerce.",
        },
        {
          id: "b",
          text: "The lowest possible price is always the only success factor",
          isCorrect: false,
          rationale:
            "Bẫy tuyệt đối hoá giá. Price/value quan trọng, nhưng topic liệt kê nhiều factors khác như service, interface, community và security.",
        },
        {
          id: "c",
          text: "Avoiding personal attention and recommendations",
          isCorrect: false,
          rationale:
            "Bẫy ngược factor. Personal Attention và recommendation cá nhân hoá là một success factor, không phải thứ cần tránh.",
        },
        {
          id: "d",
          text: "Removing community relationships and social interaction",
          isCorrect: false,
          rationale:
            "Bẫy bỏ Web 2.0/social. Community Relationships là một yếu tố thành công của e-commerce.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "E-commerce success factors",
      takeaway:
        "E-commerce thành công không chỉ nhờ giá: value, service, look & feel, personal attention, community, security đều quan trọng.",
    },
    {
      id: "q10",
      stem: "What is the purpose of SRM-CRM integration in the supply chain example?",
      options: [
        {
          id: "a",
          text: "Connecting your CRM with the customer's SRM so repeat purchasing can be automated through inventory checks, need identification, and order creation",
          isCorrect: true,
          rationale:
            "Đúng. Spec mô tả tích hợp SRM–CRM để tự động hoá mua lặp lại: SRM kiểm inventory, xác định món cần và tạo order.",
        },
        {
          id: "b",
          text: "Sending the same email marketing message to every customer",
          isCorrect: false,
          rationale:
            "Bẫy marketing email. Tích hợp SRM–CRM trong topic này nói về tự động hoá mua lặp lại trong supply chain, không phải gửi email hàng loạt.",
        },
        {
          id: "c",
          text: "Replacing inventory systems so stock levels no longer need to be checked",
          isCorrect: false,
          rationale:
            "Bẫy bỏ inventory. Cơ chế này vẫn dựa vào kiểm tra inventory để biết cần mua gì.",
        },
        {
          id: "d",
          text: "Preventing suppliers and customers from exchanging data",
          isCorrect: false,
          rationale:
            "Bẫy ngược tích hợp. SRM–CRM integration cần trao đổi dữ liệu giữa các bên để phối hợp tốt hơn.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "SRM-CRM integration",
      takeaway:
        "SRM–CRM integration nối hệ thống hai bên để tự động hoá reorder dựa trên inventory và nhu cầu.",
    },
    {
      id: "q11",
      stem: "What does profiling and personalizing enable in e-commerce process architecture?",
      options: [
        {
          id: "a",
          text: "Building customer profiles from behavior to personalize content and ads for one-to-one marketing",
          isCorrect: true,
          rationale:
            "Đúng. Profiling & personalizing xây profile sở thích/hành vi để cá nhân hoá nội dung/quảng cáo.",
        },
        {
          id: "b",
          text: "Blocking all users from accessing the site",
          isCorrect: false,
          rationale:
            "Bẫy access control. Chặn/cho phép truy cập thuộc access control & security; profiling dùng để cá nhân hoá.",
        },
        {
          id: "c",
          text: "Sending the exact same advertisement to every customer",
          isCorrect: false,
          rationale:
            "Bẫy ngược one-to-one marketing. One-to-one nhấn cá nhân hoá, không phải cùng một thông điệp cho tất cả.",
        },
        {
          id: "d",
          text: "Replacing catalog management so products no longer need to be organized",
          isCorrect: false,
          rationale:
            "Bẫy lẫn process. Catalog management vẫn cần để quản lý nội dung/catalog và hỗ trợ mass customization.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Profiling and personalizing / one-to-one marketing",
      takeaway:
        "Profiling xây customer profile; personalizing dùng profile đó cho one-to-one marketing và trải nghiệm cá nhân hoá.",
    },
  ],
  status: "ready",
  source: "Digital Technology in Business — Topic 07 E-com and SC.pdf.",
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
  if (order === 3) return topic03;
  if (order === 4) return topic04;
  if (order === 5) return topic05;
  if (order === 6) return topic06;
  if (order === 7) return topic07;
  return createPlaceholderTopic(order);
});
