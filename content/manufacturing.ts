import type { Block, CalloutKind, Chapter, FlowEdge, FlowNode } from "./types";

// Manufacturing Systems — 8 chương theo slide (Chapter 1-8).
// Nguồn: ebook Groover (Automation, Production Systems & CIM 4e) làm primary,
// slides Chapter 1-8 hỗ trợ, test-exams cho quiz/đề. bigIdea tổng hợp slide + ebook.

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
): Block => ({ type: "formula", formula: { expression, legend, note } });

const calcBlock = (
  title: string,
  steps: { label: string; expr: string; note?: string }[],
  result?: string,
  meaning?: string,
  implication?: string,
): Block => ({
  type: "calc",
  calc: { title, steps, result, meaning, implication },
});

const topic01: Chapter = {
  slug: "topic-01",
  order: 1,
  title: "Topic 01 — Introduction to Manufacturing System",
  bigIdea:
    "Đọc bất kỳ nhà máy nào qua 3 câu hỏi: nó là hệ thống KIỂU GÌ, KHỎE đến đâu, và tự động hóa Ở ĐÂU là đáng?",
  bigIdeaPillars: [
    {
      label: "Khung",
      body: "Production system = facilities (chạm sản phẩm) + support systems (điều phối thông tin) — Groover Fig 1.1.",
    },
    {
      label: "Phân loại",
      body: "Ngành (manufacturing/service/process), loại sản xuất (jobbing/batch/mass), 5 functions + 4 info-processing functions.",
    },
    {
      label: "Đo lường",
      body: "Sức khỏe hệ thống bằng chỉ số 1.7: MLT, Rp, Ca, U, WIP.",
    },
    {
      label: "Automation có điều kiện",
      body: "USA Principle (Understand → Simplify trước); chọn fixed/programmable/flexible theo volume × variety.",
    },
  ],
  learningObjectives: [
    "Mô tả production system = facilities + manufacturing support systems (Groover Fig 1.1) và phân biệt phần 'chạm sản phẩm' vs phần 'điều phối thông tin'.",
    "Phân loại manufacturing industries: manufacturing vs service vs process industry; discrete vs continuous; và 3 lớp basic producer → converter → fabricator.",
    "Phân biệt 3 loại hình sản xuất jobbing / batch / mass theo volume, production rate, worker skills, equipment, plant layout và process-focus vs product-focus.",
    "Liệt kê 5 functions in manufacturing (processing với 4 nhánh, assembly, material handling, inspection & test, process control).",
    "Mô tả 4 information-processing functions (business functions với 3 kiểu hợp đồng, product design, production planning, production control) và nối chúng với manufacturing support systems của Groover.",
    "Phân biệt 3 categories of manufacturing systems theo mức tham gia của con người (manual / worker-machine / automated) và đối chiếu Humans vs Machines (Groover Table 1.1).",
    "Tính Manufacturing Lead Time (MLT) cho các trường hợp tổng quát, đồng nhất, jobbing, mass, flow line.",
    "Tính production rate (Rp), capacity (Ca) cho đơn/đa sản phẩm, utilization (U) và availability (A = (MTBF − MTTR)/MTBF).",
    "Tính WIP, số máy đang chạy thực (Nm), tỉ số WIPR và TIPR; giải thích ý nghĩa 'mỗi máy 1 WIP' là lý tưởng.",
    "Phân biệt fixed / programmable / flexible automation theo trục volume × variety (Groover Fig 1.5).",
    "Giải thích USA Principle (Understand → Simplify → Automate) và 10 strategies for automation & process improvement.",
    "Giải thích Automation Migration Strategy (3 phases) và nêu reasons for automating / advanced manufacturing characteristics; lập luận khi nào manual labor được ưu tiên hơn automation.",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "3 câu hỏi của một future manager: (A) Nó là hệ thống kiểu gì? (B) Nó khỏe đến đâu? (C) Tự động hóa ở đâu là đáng? Bấm node để mở chi tiết và nhảy tới phần học.",
    nodes: [
      {
        id: "ms",
        label: "Manufacturing System",
        group: "concept",
        sectionId: "s1",
        detail:
          "Production system = facilities + support; đo bằng chỉ số; cải tiến bằng automation có điều kiện.",
      },
      {
        id: "g_what",
        label: "A. Hệ thống kiểu gì?",
        group: "concept",
        parent: "ms",
        sectionId: "s1",
        detail:
          "Khung production system + phân loại ngành, loại hình SX, functions, tổ chức thông tin, mức tự động hóa.",
      },
      {
        id: "g_measure",
        label: "B. Khỏe đến đâu?",
        group: "concept",
        parent: "ms",
        sectionId: "s7",
        detail: "Bộ chỉ số định lượng 1.7: MLT, Rp, Ca, U, WIP.",
      },
      {
        id: "g_improve",
        label: "C. Tự động hóa ở đâu là đáng?",
        group: "concept",
        parent: "ms",
        sectionId: "s12",
        detail:
          "fixed/programmable/flexible theo volume×variety; USA Principle; 10 strategies; migration; manual vẫn cần.",
      },
      {
        id: "t_prodsys",
        label: "Production system (facilities + support)",
        group: "term",
        parent: "g_what",
        sectionId: "s1",
        detail:
          "Facilities chạm sản phẩm; support systems điều phối thông tin (Groover Fig 1.1).",
      },
      {
        id: "t_industries",
        label: "Phân loại industries",
        group: "term",
        parent: "g_what",
        sectionId: "s2",
        detail:
          "Manufacturing vs service vs process; discrete vs continuous; basic producer→converter→fabricator.",
      },
      {
        id: "t_types",
        label: "Jobbing / Batch / Mass",
        group: "term",
        parent: "g_what",
        sectionId: "s3",
        detail: "3 loại hình SX theo volume; process-focus vs product-focus.",
      },
      {
        id: "t_funcs",
        label: "5 functions in manufacturing",
        group: "term",
        parent: "g_what",
        sectionId: "s4",
        detail:
          "Processing, assembly, material handling, inspection & test, process control.",
      },
      {
        id: "t_info",
        label: "4 information-processing functions",
        group: "term",
        parent: "g_what",
        sectionId: "s5",
        detail:
          "Business functions, product design, production planning, production control.",
      },
      {
        id: "t_human",
        label: "Mức tham gia của con người",
        group: "term",
        parent: "g_what",
        sectionId: "s6",
        detail: "Manual / worker-machine / automated + Humans vs Machines.",
      },
      {
        id: "t_mlt",
        label: "MLT — Manufacturing Lead Time",
        group: "term",
        parent: "g_measure",
        sectionId: "s7",
        detail: "Tổng thời gian một lô đi qua các work station.",
      },
      {
        id: "t_rp",
        label: "Rp — Production rate",
        group: "term",
        parent: "g_measure",
        sectionId: "s8",
        detail: "Số sản phẩm/giờ; gắn defect rate q.",
      },
      {
        id: "t_ca",
        label: "Ca — Capacity",
        group: "term",
        parent: "g_measure",
        sectionId: "s9",
        detail: "Ca = W×S×H×Rp; đơn & đa sản phẩm; cân với demand.",
      },
      {
        id: "t_u",
        label: "U — Utilization & Availability",
        group: "term",
        parent: "g_measure",
        sectionId: "s10",
        detail: "U = output thực/capacity; A = (MTBF − MTTR)/MTBF.",
      },
      {
        id: "t_wip",
        label: "WIP, Nm, WIPR, TIPR",
        group: "term",
        parent: "g_measure",
        sectionId: "s11",
        detail: "Hàng dở dang & tỉ số lý tưởng 1:1.",
      },
      {
        id: "t_auto3",
        label: "Fixed / Programmable / Flexible",
        group: "term",
        parent: "g_improve",
        sectionId: "s12",
        detail: "3 loại automation theo volume × variety (Groover Fig 1.5).",
      },
      {
        id: "t_usa",
        label: "USA Principle + 10 strategies",
        group: "term",
        parent: "g_improve",
        sectionId: "s13",
        detail: "Understand → Simplify → Automate; 10 chiến lược cải tiến.",
      },
      {
        id: "t_migrate",
        label: "Migration + manual labor",
        group: "term",
        parent: "g_improve",
        sectionId: "s14",
        detail: "3 phases; reasons for automating; khi nào manual thắng.",
      },
    ],
    edges: [
      { from: "ms", to: "g_what" },
      { from: "ms", to: "g_measure" },
      { from: "ms", to: "g_improve" },
      { from: "g_what", to: "t_prodsys" },
      { from: "g_what", to: "t_industries" },
      { from: "g_what", to: "t_types" },
      { from: "g_what", to: "t_funcs" },
      { from: "g_what", to: "t_info" },
      { from: "g_what", to: "t_human" },
      { from: "g_measure", to: "t_mlt" },
      { from: "g_measure", to: "t_rp" },
      { from: "g_measure", to: "t_ca" },
      { from: "g_measure", to: "t_u" },
      { from: "g_measure", to: "t_wip" },
      { from: "g_improve", to: "t_auto3" },
      { from: "g_improve", to: "t_usa" },
      { from: "g_improve", to: "t_migrate" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "Production system = Facilities + Support",
      blocks: [
        flowBlock(
          "s1",
          "Một nhà máy là một hệ thống",
          "tree",
          [
            {
              id: "s1_sys",
              label: "Production system",
              group: "concept",
              detail:
                "Tập hợp người + thiết bị + thủ tục tổ chức để thực hiện manufacturing operations của doanh nghiệp (Groover §1.1).",
            },
            {
              id: "s1_fac",
              label: "Facilities",
              group: "term",
              parent: "s1_sys",
              detail:
                "Phần vật lý: factory, máy & tooling, material handling, inspection equipment, plant layout. Các manufacturing systems trong facilities 'CHẠM' vào sản phẩm.",
            },
            {
              id: "s1_sup",
              label: "Manufacturing support systems",
              group: "term",
              parent: "s1_sys",
              detail:
                "Người + thủ tục để quản lý sản xuất, giải bài toán kỹ thuật & logistics; KHÔNG chạm sản phẩm mà plan & control tiến độ. Gồm product design + business functions.",
            },
          ],
          [
            { from: "s1_sys", to: "s1_fac" },
            { from: "s1_sys", to: "s1_sup" },
          ],
          "Cả Topic 01 treo vào khung này: phần CHẠM sản phẩm (facilities) và phần ĐIỀU PHỐI THÔNG TIN (support).",
        ),
        calloutBlock(
          "key",
          "Vì sao khung này quan trọng",
          "Blue-collar (direct labor) vận hành facilities; white-collar (professional staff) lo support systems. Mỗi khái niệm phía sau (loại hình SX, functions, info-processing, chỉ số, automation) đều rơi vào một trong hai nhánh — nhớ khung thì không học vẹt.",
        ),
      ],
      keyTerms: [
        {
          term: "production system",
          definition:
            "Tập hợp people, equipment và procedures được tổ chức để thực hiện manufacturing operations.",
        },
        {
          term: "facilities",
          definition:
            "Phần vật lý của production system: factory, machines, tooling, material handling, inspection equipment và plant layout.",
        },
        {
          term: "manufacturing support systems",
          definition:
            "Người và thủ tục quản lý, thiết kế, planning và control; điều phối thông tin nhưng không chạm trực tiếp sản phẩm.",
        },
        {
          term: "plant layout",
          definition:
            "Cách bố trí thiết bị, work stations và dòng di chuyển trong factory.",
        },
        {
          term: "manufacturing system",
          definition:
            "Phần trong facilities thực hiện operations lên sản phẩm hoặc vật liệu.",
        },
      ],
    },
    {
      id: "s2",
      heading: "Phân loại manufacturing industries",
      blocks: [
        comparisonBlock(
          "Manufacturing vs Process industry",
          ["Tiêu chí", "Manufacturing", "Process industry"],
          [
            {
              label: "Sản phẩm đầu ra",
              cells: [
                "Discrete items — đếm được (cars, mobile, TV, clothes)",
                "Continuous items — liên tục (liquid, pure water, beverage, beer, milk)",
              ],
            },
            {
              label: "Bản chất chế biến",
              cells: [
                "Lắp ráp/gia công vật rời rạc",
                "Chế biến dòng vật chất liên tục (petro, paint processing)",
              ],
            },
            {
              label: "Ví dụ công ty",
              cells: [
                "General Motors, Toyota (car); Boeing (aerospace)",
                "Coca-Cola, Pepsi (beverage); Du Pont (chemicals)",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Manufacturing vs Service",
          "Khác biệt cốt lõi: manufacturing tạo outcome TANGIBLE (sờ được), service tạo outcome INTANGIBLE. Nhiều ngành lai (Foods vừa SX vừa dịch vụ). Cả hai đều tạo value cho khách hàng.",
        ),
        flowBlock(
          "s2",
          "3 lớp trong chuỗi sản xuất",
          "horizontal",
          [
            {
              id: "s2_basic",
              label: "Basic producer",
              group: "term",
              detail:
                "Biến natural resources → raw materials cho các firm khác (vd Yarn Co.: input tằm tơ → output sợi).",
            },
            {
              id: "s2_conv",
              label: "Converter",
              group: "term",
              detail:
                "Mắt xích trung gian: tạo semi-products/components (vd Textile Co.: sợi → vải; Tire/Plastic Co.).",
            },
            {
              id: "s2_fab",
              label: "Fabricator",
              group: "term",
              detail:
                "Lắp ráp thành final products ra thị trường (vd Garment Co.: vải+nút+chỉ → áo; Honda: linh kiện → xe).",
            },
          ],
          [
            { from: "s2_basic", to: "s2_conv", label: "raw → semi" },
            { from: "s2_conv", to: "s2_fab", label: "semi → final" },
          ],
          "Một sản phẩm cuối đi qua 3 lớp; một firm có thể đứng ở bất kỳ lớp nào.",
        ),
      ],
      keyTerms: [
        {
          term: "manufacturing industry",
          definition:
            "Ngành tạo tangible outcome, thường là discrete items có thể đếm được.",
        },
        {
          term: "process industry",
          definition:
            "Ngành xử lý continuous items như liquid, beverage, chemicals hoặc paint processing.",
        },
        {
          term: "discrete vs continuous items",
          definition:
            "Discrete items đếm từng cái; continuous items là dòng vật chất liên tục.",
        },
        {
          term: "basic producer",
          definition: "Firm biến natural resources thành raw materials.",
        },
        {
          term: "converter",
          definition: "Firm biến raw/semi material thành semi-products hoặc components.",
        },
        {
          term: "fabricator",
          definition: "Firm lắp ráp components thành final products cho thị trường.",
        },
      ],
    },
    {
      id: "s3",
      heading: "Types of production: Jobbing / Batch / Mass",
      blocks: [
        comparisonBlock(
          "Ba loại hình sản xuất",
          ["Tiêu chí", "Jobbing / Project", "Batch", "Mass"],
          [
            {
              label: "Volume/quantity",
              cells: [
                "Rất nhỏ (very small)",
                "Nhỏ–vừa (small)",
                "Lớn (large)",
              ],
            },
            {
              label: "Production rate",
              cells: ["Thấp", "Trung bình", "Cao"],
            },
            {
              label: "Worker skills",
              cells: [
                "Cao, multi-functional",
                "Trung bình",
                "Thấp, single-functional",
              ],
            },
            {
              label: "Equipment",
              cells: [
                "General-purpose, đa năng",
                "Linh hoạt, theo lô",
                "Special, single-functional cho từng việc",
              ],
            },
            {
              label: "Special tools",
              cells: ["Ít", "Vừa", "Nhiều, chuyên dụng"],
            },
            {
              label: "Plant layout — focus",
              cells: [
                "Process focus (gom theo loại công đoạn)",
                "Trung gian",
                "Product focus (xếp theo dòng sản phẩm)",
              ],
            },
            {
              label: "Ví dụ / demand",
              cells: [
                "1 sản phẩm/lần — máy bay; demand rất thấp",
                "Mỗi lô số lượng định trước; demand theo đợt",
                "Mass customization; demand cao, đều",
              ],
            },
          ],
        ),
        calloutBlock(
          "insight",
          "Trục xuyên suốt",
          "Đi từ jobbing → mass là đi theo trục VOLUME tăng dần: volume cao kéo theo rate cao, skill thấp đi, equipment chuyên dụng hơn, layout chuyển từ process-focus sang product-focus. Nhớ một trục, suy ra cả bảng.",
        ),
      ],
      keyTerms: [
        {
          term: "jobbing/project production",
          definition:
            "Sản xuất volume rất nhỏ, thường một sản phẩm/lần, dùng skill cao và general-purpose equipment.",
        },
        {
          term: "batch production",
          definition:
            "Sản xuất theo lô số lượng định trước, volume nhỏ–vừa và equipment linh hoạt.",
        },
        {
          term: "mass production",
          definition:
            "Sản xuất volume lớn, rate cao, skill thấp hơn và equipment chuyên dụng.",
        },
        {
          term: "mass customization",
          definition:
            "Tạo nhiều biến thể cho khách nhưng vẫn vận hành với logic volume cao.",
        },
        {
          term: "process focus",
          definition: "Layout gom theo loại công đoạn/quy trình.",
        },
        {
          term: "product focus",
          definition: "Layout xếp theo dòng chảy của một sản phẩm.",
        },
        {
          term: "plant layout",
          definition:
            "Bố trí không gian và thiết bị trong nhà máy để phục vụ dòng sản xuất.",
        },
      ],
    },
    {
      id: "s4",
      heading: "Functions in manufacturing",
      blocks: [
        flowBlock(
          "s4",
          "5 functions: từ raw materials → items",
          "horizontal",
          [
            {
              id: "s4_proc",
              label: "1. Processing",
              group: "concept",
              detail:
                "Biến đổi vật liệu. 4 nhánh: (a) basic processes; (b) secondary processes; (c) operations enhancing physical properties; (d) finishing operations.",
            },
            {
              id: "s4_asm",
              label: "2. Assembly",
              group: "concept",
              detail: "Joining/combine các components thành final product.",
            },
            {
              id: "s4_mh",
              label: "3. Material handling",
              group: "concept",
              detail:
                "Di chuyển & lưu trữ vật liệu/linh kiện cho công đoạn kế; đảm bảo sẵn sàng cho production planning.",
            },
            {
              id: "s4_insp",
              label: "4. Inspection & test",
              group: "concept",
              detail:
                "Phần của quality control; xác nhận sản phẩm đạt chuẩn cho khách.",
            },
            {
              id: "s4_ctrl",
              label: "5. Process control",
              group: "concept",
              detail:
                "Điều tiết từng job & assembly, và quản lý hoạt động ở cấp nhà máy (plant-level).",
            },
          ],
          [
            { from: "s4_proc", to: "s4_asm", label: "ghép" },
            { from: "s4_asm", to: "s4_insp", label: "kiểm" },
            { from: "s4_proc", to: "s4_mh", label: "phục vụ" },
            { from: "s4_proc", to: "s4_ctrl", label: "giám sát" },
          ],
          "Processing & assembly trực tiếp biến đổi sản phẩm; material handling, inspection, process control hỗ trợ và giám sát toàn tuyến.",
        ),
      ],
      keyTerms: [
        {
          term: "processing",
          definition: "Nhóm operations biến đổi vật liệu thành hình dạng/tính chất mong muốn.",
        },
        {
          term: "basic/secondary processes",
          definition:
            "Basic tạo hình dạng ban đầu; secondary đưa chi tiết tới hình học cuối.",
        },
        {
          term: "finishing operations",
          definition:
            "Operations làm nhẵn/đẹp hoặc tăng sức hấp dẫn bề mặt sản phẩm.",
        },
        {
          term: "assembly",
          definition: "Joining/combine components thành final product.",
        },
        {
          term: "material handling",
          definition:
            "Di chuyển và lưu trữ material/parts trong nhà máy.",
        },
        {
          term: "inspection and test",
          definition:
            "Kiểm tra sản phẩm có đạt chuẩn chất lượng hay không.",
        },
        {
          term: "process control",
          definition:
            "Điều tiết operations ở cấp process/job và cấp nhà máy.",
        },
      ],
    },
    {
      id: "s5",
      heading: "Organization & information processing",
      blocks: [
        flowBlock(
          "s5",
          "Dòng thông tin: order → product",
          "horizontal",
          [
            {
              id: "s5_biz",
              label: "1. Business functions",
              group: "concept",
              detail:
                "Giao tiếp với khách: sales/marketing, forecasting, order entry, billing. 3 kiểu hợp đồng: make to order, make to stock, forecasting demand.",
            },
            {
              id: "s5_design",
              label: "2. Product design",
              group: "concept",
              detail:
                "Bản vẽ thiết kế, đặc tính sản phẩm & yêu cầu vật liệu; nếu khách cấp thiết kế thì phòng design không tham gia.",
            },
            {
              id: "s5_plan",
              label: "3. Production planning",
              group: "concept",
              detail:
                "Process planning, master schedule, MRP, capacity planning — dựa trên thiết kế cuối + yêu cầu công nghệ.",
            },
            {
              id: "s5_ctrl",
              label: "4. Production control",
              group: "concept",
              detail:
                "Shop floor control, inventory control, quality control — giám sát SX thực thi đúng kế hoạch.",
            },
          ],
          [
            { from: "s5_biz", to: "s5_design", label: "đơn hàng" },
            { from: "s5_design", to: "s5_plan", label: "thiết kế" },
            { from: "s5_plan", to: "s5_ctrl", label: "kế hoạch" },
          ],
          "Đây chính là 4 manufacturing support functions của Groover (Fig 1.3) — phần ĐIỀU PHỐI THÔNG TIN, không chạm sản phẩm.",
        ),
        calloutBlock(
          "note",
          "3 dạng production order",
          "Mọi đơn sản xuất rơi vào 1 trong 3: làm theo spec của khách (make to order) / khách mua sản phẩm sẵn có của hãng (make to stock) / lệnh nội bộ dựa trên forecast. Phân biệt 3 cái này quyết định cách hoạch định.",
        ),
      ],
      keyTerms: [
        {
          term: "business functions",
          definition:
            "Sales/marketing, forecasting, order entry, billing và giao tiếp với customer.",
        },
        {
          term: "make to order",
          definition: "Sản xuất theo spec/order cụ thể của khách hàng.",
        },
        {
          term: "make to stock",
          definition:
            "Sản xuất để tồn kho, khách mua từ sản phẩm sẵn có.",
        },
        {
          term: "forecasting",
          definition:
            "Dự báo demand để tạo internal production order.",
        },
        {
          term: "product design",
          definition:
            "Thiết kế sản phẩm, bản vẽ, đặc tính và yêu cầu vật liệu.",
        },
        {
          term: "production planning",
          definition:
            "Process planning, master schedule, MRP và capacity planning.",
        },
        {
          term: "master production schedule",
          definition:
            "Kế hoạch chính cho sản xuất: sản phẩm gì, bao nhiêu, khi nào.",
        },
        {
          term: "material requirements planning (MRP)",
          definition:
            "Hoạch định nhu cầu vật liệu để đáp ứng production schedule.",
        },
        {
          term: "capacity planning",
          definition:
            "Hoạch định năng lực máy/trạm/shift để đáp ứng demand.",
        },
        {
          term: "production control",
          definition:
            "Giám sát shop floor, inventory và quality để thực thi kế hoạch.",
        },
        {
          term: "shop floor control",
          definition:
            "Control hoạt động thực tế tại xưởng sản xuất.",
        },
        {
          term: "inventory control",
          definition: "Control tồn kho materials, WIP và finished goods.",
        },
        {
          term: "quality control",
          definition: "Control chất lượng để sản phẩm đạt chuẩn.",
        },
      ],
    },
    {
      id: "s6",
      heading: "3 categories theo mức tham gia của con người",
      blocks: [
        comparisonBlock(
          "Manual / Worker-machine / Automated",
          ["Loại", "Con người làm gì", "Ví dụ"],
          [
            {
              label: "Manual work system",
              cells: [
                "≥1 công nhân thao tác, KHÔNG có powered tool (chỉ hand tools)",
                "Thợ dũa cạnh chi tiết; inspector dùng micrometer",
              ],
            },
            {
              label: "Worker-machine system",
              cells: [
                "Công nhân vận hành powered equipment; kết hợp điểm mạnh người + máy",
                "Thợ tiện engine lathe; thợ + robot trong cell hàn",
              ],
            },
            {
              label: "Automated system",
              cells: [
                "Máy thực hiện process không cần con người trực tiếp; semi- vs fully-automated",
                "Máy ép nhựa chạy tự động, công nhân gom hàng định kỳ",
              ],
            },
          ],
        ),
        comparisonBlock(
          "Humans vs Machines — điểm mạnh (Groover Table 1.1)",
          ["Bên", "Mạnh ở"],
          [
            {
              label: "Humans",
              cells: [
                "Cảm nhận kích thích bất ngờ; nghĩ giải pháp mới; xử lý vấn đề trừu tượng; thích ứng thay đổi; học từ kinh nghiệm; quyết định với dữ liệu thiếu",
              ],
            },
            {
              label: "Machines",
              cells: [
                "Lặp lại nhất quán; lưu/truy hồi lượng lớn dữ liệu; làm nhiều việc song song; lực & công suất lớn; tính toán & quyết định thường quy nhanh",
              ],
            },
          ],
        ),
        calloutBlock(
          "insight",
          "Semi- vs fully-automated",
          "Semiautomated: máy làm một phần chu kỳ dưới program control, công nhân lo phần còn lại (load/unload) mỗi chu kỳ. Fully automated: chạy dài hơn một chu kỳ mà KHÔNG cần người mỗi chu kỳ. Đây là cầu nối sang tầng C (mức tự động hóa).",
        ),
      ],
      keyTerms: [
        {
          term: "manual work system",
          definition:
            "Hệ thống có công nhân thao tác trực tiếp, không dùng powered tool.",
        },
        {
          term: "worker-machine system",
          definition:
            "Hệ thống công nhân vận hành powered equipment, kết hợp điểm mạnh người và máy.",
        },
        {
          term: "automated system",
          definition:
            "Hệ thống máy thực hiện process không cần con người trực tiếp trong từng chu kỳ.",
        },
        {
          term: "semiautomated",
          definition:
            "Máy làm một phần chu kỳ, công nhân vẫn load/unload hoặc can thiệp mỗi chu kỳ.",
        },
        {
          term: "fully automated",
          definition:
            "Hệ thống chạy dài hơn một work cycle mà không cần người mỗi chu kỳ.",
        },
      ],
    },
    {
      id: "s7",
      heading: "Manufacturing Lead Time (MLT)",
      blocks: [
        formulaBlock(
          "TMLT = Σ (Ts + Q × Tp + Tn)i ,  i = 1 … m",
          [
            { symbol: "m", meaning: "Số máy sản phẩm đi qua" },
            { symbol: "Q", meaning: "Số sản phẩm/lô (batch)" },
            { symbol: "Ts", meaning: "setup time/máy" },
            { symbol: "Tp", meaning: "unit processing time" },
            { symbol: "Tn", meaning: "non-operating time" },
          ],
          "MLT = tổng thời gian một work unit đi qua tất cả machine/work station, gồm setup + gia công + thời gian không vận hành. Công thức tổng quát cộng dồn thời gian tại từng máy.",
        ),
        formulaBlock(
          "Đồng nhất: TMLT = n × (Ts + Q × Tp + Tn)   |   Jobbing (Q=1): TMLT = n × (Ts + Tp + Tn)   |   Mass (1 máy): TMLT = Q × Tp (hoặc Tp cho 1 item)   |   Flow line: TMLT = Q × (Tt + max[Tp]i)",
          undefined,
          "n = số work station. Flow line chọn WS có max unit processing time làm nút cổ chai; Tt = transfer time.",
        ),
        calcBlock(
          "Ví dụ: đơn 50 sản phẩm, 8 WS",
          [
            {
              label: "Thay số (công thức đồng nhất)",
              expr: "TMLT = 8 × (3 + 50 × 0.1 + 7)",
              note: "Ts=3h, Q=50, Tp=6min=0.1h, Tn=7h",
            },
            {
              label: "Tính trong ngoặc",
              expr: "= 8 × (3 + 5 + 7) = 8 × 15",
            },
            { label: "Kết quả giờ", expr: "= 120 (giờ)" },
            {
              label: "Đổi ra ngày (1 shift = 7h/ngày)",
              expr: "120 ÷ 7 = 17.14 (ngày)",
            },
          ],
          "TMLT = 120 giờ ≈ 17.14 ngày",
          "Một lô 50 sản phẩm mất ~17 ngày để hoàn tất qua 8 trạm.",
          "MLT dài → vốn nằm trong hàng dở (WIP) lâu → giảm MLT là mục tiêu cải tiến (xem tầng C). VERIFIED slide 43/59.",
        ),
      ],
      keyTerms: [
        {
          term: "manufacturing lead time (MLT)",
          definition:
            "Tổng thời gian một work unit/lô đi qua các machine/work station.",
        },
        {
          term: "setup time (Ts)",
          definition: "Thời gian chuẩn bị/setup tại một machine/work station.",
        },
        {
          term: "unit processing time (Tp)",
          definition: "Thời gian xử lý một đơn vị sản phẩm.",
        },
        {
          term: "non-operating time (Tn)",
          definition:
            "Thời gian không vận hành trực tiếp như chờ, vận chuyển, queue.",
        },
        {
          term: "batch quantity (Q)",
          definition: "Số sản phẩm trong một lô.",
        },
      ],
    },
    {
      id: "s8",
      heading: "Production rate (Rp)",
      blocks: [
        formulaBlock(
          "Batch: (Tb)k = (Ts + Q × Tp)k   →   (Tp) = (Tb)m ÷ Q   →   Rp = 1 ÷ (Tp) = Q ÷ (Tb)m",
          [
            { symbol: "(Tb)", meaning: "Thời gian xử lý cả lô tại 1 WS" },
            { symbol: "Rp", meaning: "Số sản phẩm/giờ" },
          ],
          "Có defect rate q: thay Q bằng Q ÷ (1 − q): (Tb)m = (Ts + Q × Tp ÷ (1 − q))m.",
        ),
        formulaBlock(
          "Jobbing (Q=1): Rp = 1 ÷ (Ts + Tp)m   |   Mass: Rp = 1 ÷ Tp",
          undefined,
          "Mass production bỏ qua setup vì chạy liên tục một sản phẩm.",
        ),
        calloutBlock(
          "note",
          "Defect rate",
          "Nếu tỉ lệ phế phẩm là q, muốn ra đủ Q sản phẩm tốt phải làm Q ÷ (1 − q) sản phẩm — kéo dài thời gian lô và giảm Rp thực.",
        ),
      ],
      keyTerms: [
        {
          term: "production rate (Rp)",
          definition: "Số sản phẩm tốt tạo ra trên một đơn vị thời gian.",
        },
        {
          term: "batch processing time (Tb)",
          definition: "Thời gian xử lý cả lô tại một work station.",
        },
        {
          term: "defect rate (q)",
          definition:
            "Tỉ lệ sản phẩm lỗi; q càng cao thì phải sản xuất nhiều hơn để đủ sản phẩm tốt.",
        },
      ],
    },
    {
      id: "s9",
      heading: "Capacity (Ca)",
      blocks: [
        formulaBlock(
          "Ca = W × S × H × Rp   |   N máy/dòng: Ca = (W × S × H × Rp) ÷ N   |   Đa SP: Cai = (W ÷ N)i × S × H × Rpi",
          [
            { symbol: "W", meaning: "Số WS (máy) trong nhà máy" },
            { symbol: "S", meaning: "Số shift trong kỳ" },
            { symbol: "H", meaning: "Giờ/shift" },
            { symbol: "Rp", meaning: "Productivity (sản phẩm/giờ)" },
            { symbol: "N", meaning: "Số máy/dòng" },
          ],
          "(W ÷ N) = số dây chuyền trong nhà máy.",
        ),
        formulaBlock(
          "W × S × H = D × N ÷ Rp",
          undefined,
          "3 yếu tố (W, S, H) quyết định khả năng đáp ứng demand D mỗi tuần. Đa SP: vế phải là tổng nhu cầu; mỗi SP i: Wi × S × H = Di × Ni ÷ Rpi.",
        ),
        calcBlock(
          "Ví dụ: 6 máy lathe",
          [
            {
              label: "Thay số",
              expr: "Ca = 6 × 10 × 6.4 × 17",
              note: "W=6, S=10 shift/tuần, H=6.4h, Rp=17 item/h",
            },
            { label: "Kết quả", expr: "= 6 528 (item/tuần)" },
          ],
          "Ca = 6 528 item/tuần",
          "Công suất tối đa lý thuyết của nhà máy mỗi tuần.",
          "VERIFIED slide 50/59.",
        ),
        calcBlock(
          "Ví dụ đa SP: cần bao nhiêu WS?",
          [
            {
              label: "Giờ cần cho từng item (D ÷ Rp)",
              expr: "item1: 600÷10=60h; item2: 1000÷20=50h; item3: 2200÷40=55h",
            },
            { label: "Tổng giờ cần", expr: "60 + 50 + 55 = 165 (h)" },
            {
              label: "Giờ khả dụng mỗi WS",
              expr: "S × H = 10 × 6.5 = 65 (h)",
            },
            {
              label: "Số WS tối thiểu",
              expr: "165 ÷ 65 = 2.54 → làm tròn lên 3",
            },
          ],
          "Cần tối thiểu 3 WS",
          "Làm tròn LÊN vì không thể có 2.54 trạm.",
          "Capacity planning trả lời câu hỏi đầu tư bao nhiêu máy/trạm để đủ đáp ứng demand. VERIFIED slide 55–56/59.",
        ),
      ],
      keyTerms: [
        {
          term: "capacity (Ca)",
          definition: "Công suất tối đa có thể sản xuất trong một kỳ.",
        },
        {
          term: "number of work stations (W)",
          definition: "Số máy/trạm có thể thực hiện công việc.",
        },
        {
          term: "shifts (S)",
          definition: "Số ca làm việc trong kỳ.",
        },
        {
          term: "hours per shift (H)",
          definition: "Số giờ vận hành trong mỗi ca.",
        },
        {
          term: "number of lines (W ÷ N)",
          definition: "Số dây chuyền tương đương trong nhà máy.",
        },
      ],
    },
    {
      id: "s10",
      heading: "Utilization (U) & Availability (A)",
      blocks: [
        formulaBlock(
          "U = [thời gian vận hành] ÷ [thời gian khả dụng] = [sản lượng thực] ÷ [capacity]",
          undefined,
          "U ∈ [0, 1]; cho biết dùng hết bao nhiêu phần công suất.",
        ),
        formulaBlock(
          "A = (MTBF − MTTR) ÷ MTBF  (%)",
          [
            {
              symbol: "MTBF",
              meaning: "Mean Time Between Failures (thời gian trung bình giữa 2 lần hỏng)",
            },
            {
              symbol: "MTTR",
              meaning: "Mean Time To Repair (thời gian sửa trung bình)",
            },
          ],
          "A cao = máy ít hỏng/sửa nhanh = đáng tin cậy.",
        ),
        calcBlock(
          "Ví dụ utilization một dây chuyền",
          [
            {
              label: "Capacity",
              expr: "Ca = 65 × 20 = 1 300 (unit/tuần)",
              note: "65h/tuần, 20 unit/h",
            },
            {
              label: "Utilization",
              expr: "U = 1000 ÷ 1300 = 76.92 %",
              note: "tuần này chỉ làm 1 000 unit",
            },
            {
              label: "Thời gian vận hành thực",
              expr: "TR = 1000 ÷ 20 = 50 (h)",
            },
          ],
          "U = 76.92 %, TR = 50 h",
          "Dây chuyền chỉ dùng ~77% công suất; còn lại là idle time.",
          "U thấp → đang lãng phí công suất; là tín hiệu để cải tiến hoặc nhận thêm đơn. VERIFIED slide 58–59/59.",
        ),
      ],
      keyTerms: [
        {
          term: "utilization (U)",
          definition: "Tỉ lệ công suất/thời gian khả dụng được dùng thực tế.",
        },
        {
          term: "availability (A)",
          definition: "Độ sẵn sàng máy dựa trên MTBF và MTTR.",
        },
        {
          term: "MTBF",
          definition: "Mean Time Between Failures — thời gian trung bình giữa hai lần hỏng.",
        },
        {
          term: "MTTR",
          definition: "Mean Time To Repair — thời gian sửa trung bình.",
        },
        {
          term: "idle time",
          definition: "Thời gian năng lực có sẵn nhưng không được dùng để sản xuất.",
        },
      ],
    },
    {
      id: "s11",
      heading: "WIP, Nm, WIPR, TIPR",
      blocks: [
        formulaBlock(
          "WIP = (Ca × U) × TMLT ÷ (S × H)   |   Nm = W × U × Q × Tp ÷ (Ts + Q × Tp)   |   WIPR = WIP ÷ Nm   |   TIPR = TMLT ÷ (N × Tp)",
          [
            { symbol: "WIP", meaning: "Số sản phẩm đang dở trong nhà máy" },
            { symbol: "Nm", meaning: "Số máy đang chạy thực" },
            { symbol: "WIPR", meaning: "WIP ratio" },
            { symbol: "TIPR", meaning: "time-in-process ratio" },
          ],
          "WIPR lý tưởng = 1:1 (mỗi máy 1 WIP một thời điểm); TIPR lý tưởng = 1 nhưng thực tế khó.",
        ),
        calloutBlock(
          "key",
          "Đọc các tỉ số",
          "WIP cao + TMLT dài = vốn kẹt trong hàng dở. WIPR và TIPR đo mức 'lý tưởng' của dòng chảy: càng gần 1:1 càng tinh gọn. Đây là cầu nối tự nhiên sang tầng C — automation/strategies nhằm kéo WIP & MLT xuống.",
        ),
      ],
      keyTerms: [
        {
          term: "work-in-process (WIP)",
          definition: "Số sản phẩm đang dở trong nhà máy.",
        },
        {
          term: "number of operating machines (Nm)",
          definition: "Số máy đang chạy thực tế tại một thời điểm/kỳ.",
        },
        {
          term: "WIP ratio (WIPR)",
          definition: "Tỉ số WIP so với số máy đang chạy thực.",
        },
        {
          term: "time-in-process ratio (TIPR)",
          definition: "Tỉ số thời gian trong process so với processing time lý tưởng.",
        },
      ],
    },
    {
      id: "s12",
      heading: "Fixed / Programmable / Flexible automation",
      blocks: [
        comparisonBlock(
          "3 loại automation",
          ["Tiêu chí", "Fixed", "Programmable", "Flexible"],
          [
            {
              label: "Trình tự thao tác",
              cells: [
                "Cố định bởi cấu hình thiết bị",
                "Đổi được bằng program",
                "Đổi gần như không mất thời gian",
              ],
            },
            {
              label: "Đầu tư",
              cells: [
                "Rất cao, custom-engineered",
                "Cao, general-purpose",
                "Rất cao, custom-engineered",
              ],
            },
            {
              label: "Production rate",
              cells: ["Cao", "Thấp hơn fixed", "Trung bình"],
            },
            {
              label: "Variety / linh hoạt",
              cells: [
                "Thấp — không đổi sản phẩm",
                "Cao — theo lô (batch)",
                "Cao — chạy mix không cần đổi lô",
              ],
            },
            {
              label: "Phù hợp",
              cells: [
                "Volume rất lớn (transfer line)",
                "Low–medium volume, batch (NC, robot, PLC)",
                "Medium volume, mix sản phẩm (FMS)",
              ],
            },
          ],
        ),
        calloutBlock(
          "insight",
          "Trục volume × variety (Groover Fig 1.5)",
          "Volume cao + variety thấp → fixed. Volume thấp–vừa + variety cao → programmable. Vùng giữa, cần mix liên tục → flexible. Chọn sai loại = đầu tư sai: fixed cho sản phẩm hay đổi sẽ chết cứng; programmable cho volume khổng lồ sẽ chậm.",
        ),
      ],
      keyTerms: [
        {
          term: "fixed automation",
          definition:
            "Automation có trình tự thao tác cố định, phù hợp volume rất lớn và variety thấp.",
        },
        {
          term: "programmable automation",
          definition:
            "Automation đổi được bằng program, phù hợp batch và low–medium volume.",
        },
        {
          term: "flexible automation",
          definition:
            "Automation có thể đổi giữa sản phẩm gần như không mất thời gian, phù hợp mix sản phẩm.",
        },
        {
          term: "product variety",
          definition: "Mức đa dạng của sản phẩm/biến thể cần sản xuất.",
        },
        {
          term: "production quantity",
          definition: "Số lượng/volume sản phẩm cần sản xuất.",
        },
      ],
    },
    {
      id: "s13",
      heading: "USA Principle + 10 strategies",
      blocks: [
        flowBlock(
          "s13",
          "USA Principle",
          "horizontal",
          [
            {
              id: "s13_u",
              label: "Understand",
              group: "concept",
              detail:
                "Hiểu kỹ process hiện tại: input/output, từng bước, giá trị gia tăng, công đoạn trước–sau. Dùng operation chart / flow process chart.",
            },
            {
              id: "s13_s",
              label: "Simplify",
              group: "concept",
              detail:
                "Tìm cách đơn giản hóa: bước nào thừa? gộp/loại được không? Có khi tới đây đã đủ, KHÔNG cần automation.",
            },
            {
              id: "s13_a",
              label: "Automate",
              group: "concept",
              detail:
                "Chỉ sau khi đã đơn giản hóa mới cân nhắc tự động hóa, dùng 10 strategies / migration.",
            },
          ],
          [
            { from: "s13_u", to: "s13_s", label: "rồi mới" },
            { from: "s13_s", to: "s13_a", label: "rồi mới" },
          ],
          "Triết lý cốt lõi của Groover: tự động hóa là bước CUỐI, không phải phản xạ đầu tiên.",
        ),
        comparisonBlock(
          "10 strategies for automation & process improvement",
          ["#", "Strategy", "Ý chính"],
          [
            {
              label: "1",
              cells: [
                "Specialization of operations",
                "Thiết bị chuyên dụng làm 1 việc hiệu quả nhất",
              ],
            },
            {
              label: "2",
              cells: [
                "Combined operations",
                "Gộp nhiều công đoạn vào 1 máy → giảm số máy, setup, MLT",
              ],
            },
            {
              label: "3",
              cells: [
                "Simultaneous operations",
                "Làm nhiều thao tác cùng lúc trên 1 chi tiết",
              ],
            },
            {
              label: "4",
              cells: [
                "Integration of operations",
                "Liên kết nhiều WS thành 1 cơ cấu, tự chuyển chi tiết",
              ],
            },
            {
              label: "5",
              cells: [
                "Increased flexibility",
                "Dùng programmable/flexible automation để 1 thiết bị làm nhiều SP",
              ],
            },
            {
              label: "6",
              cells: [
                "Improved material handling & storage",
                "Tự động hóa vận chuyển/lưu kho → giảm WIP, MLT, labor",
              ],
            },
            {
              label: "7",
              cells: [
                "On-line inspection",
                "Kiểm tra ngay trong quá trình → sửa kịp, giảm scrap",
              ],
            },
            {
              label: "8",
              cells: [
                "Process control & optimization",
                "Điều khiển từng process chạy hiệu quả hơn",
              ],
            },
            {
              label: "9",
              cells: [
                "Plant operations control",
                "Điều phối toàn nhà máy; cần networking nội bộ",
              ],
            },
            {
              label: "10",
              cells: [
                "Computer-integrated manufacturing (CIM)",
                "Dùng computer/databases/networks tích hợp toàn doanh nghiệp",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "10 chiến lược không loại trừ nhau",
          "Một dự án cải tiến thường áp nhiều chiến lược cùng lúc. Đây là checklist khi soi một nhà máy: chỗ nào gộp được? kiểm online được? tích hợp được? CIM (chiến lược 10) là mức cao nhất — dùng computer/CAD/CAM tích hợp toàn doanh nghiệp.",
        ),
      ],
      keyTerms: [
        {
          term: "USA Principle",
          definition: "Understand → Simplify → Automate.",
        },
        {
          term: "understand/simplify/automate",
          definition:
            "Ba bước cải tiến: hiểu process, đơn giản hóa, rồi mới cân nhắc automation.",
        },
        {
          term: "ten strategies for automation",
          definition:
            "Checklist 10 chiến lược automation & process improvement của Groover.",
        },
        {
          term: "combined operations",
          definition: "Gộp nhiều công đoạn vào một máy/process.",
        },
        {
          term: "integration of operations",
          definition: "Liên kết nhiều work stations thành một cơ cấu tích hợp.",
        },
        {
          term: "on-line inspection",
          definition: "Kiểm tra ngay trong quá trình sản xuất.",
        },
        {
          term: "computer-integrated manufacturing (CIM)",
          definition:
            "Dùng computer/databases/networks tích hợp hoạt động toàn doanh nghiệp sản xuất.",
        },
        {
          term: "CAD",
          definition: "Computer-aided design.",
        },
        {
          term: "CAM",
          definition: "Computer-aided manufacturing.",
        },
      ],
    },
    {
      id: "s14",
      heading: "Automation Migration Strategy + reasons + manual",
      blocks: [
        flowBlock(
          "s14",
          "Automation Migration Strategy — 3 phases",
          "horizontal",
          [
            {
              id: "s14_p1",
              label: "Phase 1 — Manual",
              group: "concept",
              detail:
                "Single-station manned cells chạy độc lập. Tooling rẻ & nhanh → ra sản phẩm mới sớm khi demand chưa chắc.",
            },
            {
              id: "s14_p2",
              label: "Phase 2 — Automated cells",
              group: "concept",
              detail:
                "Khi demand tăng & justify được, tự động hóa từng trạm; vẫn chuyển hàng giữa trạm bằng tay.",
            },
            {
              id: "s14_p3",
              label: "Phase 3 — Integrated",
              group: "concept",
              detail:
                "Khi chắc chắn SX mass nhiều năm, tích hợp các trạm tự động + tự chuyển hàng → giảm labor, tăng rate.",
            },
          ],
          [
            { from: "s14_p1", to: "s14_p2", label: "demand tăng" },
            { from: "s14_p2", to: "s14_p3", label: "chắc chắn mass" },
          ],
          "Tăng dần mức tự động hóa theo vòng đời sản phẩm — tránh cam kết vốn lớn từ đầu khi demand còn rủi ro (Groover Fig 1.6).",
        ),
        comparisonBlock(
          "Reasons for automating vs Khi nào manual thắng",
          ["Khía cạnh", "Lý do nên automate", "Khi nào manual được ưu tiên"],
          [
            {
              label: "Năng suất & chi phí",
              cells: [
                "Tăng labor productivity, giảm unit cost, bù labor shortage",
                "Khi thiếu vốn đầu tư; lương thấp khiến automation khó justify",
              ],
            },
            {
              label: "Sản phẩm",
              cells: [
                "Chất lượng đồng đều hơn; làm được việc bất khả thi bằng tay",
                "Sản phẩm tùy biến/độc nhất; vòng đời ngắn; cần linh hoạt",
              ],
            },
            {
              label: "Vận hành",
              cells: [
                "Giảm MLT & WIP; an toàn hơn; tránh 'chi phí của việc không tự động hóa'",
                "Demand lên/xuống thất thường; cần giảm rủi ro khi SP mới chưa chắc thành công",
              ],
            },
          ],
        ),
        calloutBlock(
          "key",
          "Chốt lens",
          "Automation không phải lúc nào cũng là câu trả lời đúng (Groover §1.3). Con người vẫn thiết yếu: maintenance, programming, engineering, plant management. Future manager giỏi là người biết DỪNG ở Simplify khi đủ, chọn đúng loại automation theo volume × variety, và migrate đúng nhịp vòng đời.",
        ),
      ],
      keyTerms: [
        {
          term: "automation migration strategy",
          definition:
            "Chiến lược tăng dần mức automation theo vòng đời sản phẩm qua 3 phases.",
        },
        {
          term: "reasons for automating",
          definition:
            "Các lý do nên automate như tăng productivity, giảm unit cost, tăng quality, giảm MLT/WIP và an toàn hơn.",
        },
        {
          term: "advanced manufacturing characteristics",
          definition:
            "Đặc tính manufacturing hiện đại hướng tới tích hợp, chất lượng, linh hoạt và kiểm soát tốt hơn.",
        },
        {
          term: "manual labor",
          definition:
            "Lao động thủ công vẫn được ưu tiên khi sản phẩm tùy biến, vòng đời ngắn, demand rủi ro hoặc thiếu vốn.",
        },
        {
          term: "USA Principle",
          definition:
            "Understand → Simplify → Automate; automation là bước sau cùng.",
        },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "Which statement best describes a production system in Groover's framework?",
      options: [
        {
          id: "a",
          text: "Product design is part of facilities because it physically touches and machines the product",
          isCorrect: false,
          rationale:
            "Cơ chế: product design tạo thông tin thiết kế, thuộc manufacturing support systems. Bẫy: thấy thiết kế liên quan sản phẩm nên gán vào facilities. Khóa: facilities mới là phần chạm sản phẩm; design chỉ điều phối thông tin.",
        },
        {
          id: "b",
          text: "Manufacturing support systems directly perform processing operations on the workpiece",
          isCorrect: false,
          rationale:
            "Cơ chế: processing operations nằm trong facilities/manufacturing systems. Bẫy: chữ support dễ bị hiểu là hỗ trợ trực tiếp trên workpiece. Khóa: support systems plan and control, không gia công.",
        },
        {
          id: "c",
          text: "A production system combines facilities and manufacturing support systems; support systems plan and control but do not touch the product directly",
          isCorrect: true,
          rationale:
            "Cơ chế: Groover tách production system thành facilities + manufacturing support systems. Bẫy: học rời từng phần sẽ quên nhánh thông tin. Khóa: facilities chạm sản phẩm, support systems điều phối plan/control.",
        },
        {
          id: "d",
          text: "A production system consists only of machines, tooling, and plant layout",
          isCorrect: false,
          rationale:
            "Cơ chế: machines, tooling, plant layout chỉ là facilities. Bẫy: nhìn nhà máy bằng phần vật lý nên bỏ qua information-processing functions. Khóa: production system còn có support systems.",
        },
        {
          id: "e",
          text: "Customers are the third main internal component of the production system, alongside facilities and support systems",
          isCorrect: false,
          rationale:
            "Cơ chế: customers tạo demand/order nhưng không phải thành phần nội bộ chính trong khung Groover Fig 1.1. Bẫy: vì business functions giao tiếp với customer nên thêm customer vào cấu trúc. Khóa: khung chính là facilities + support systems.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Facilities vs support systems",
      takeaway:
        "Production system = facilities chạm sản phẩm + manufacturing support systems điều phối thông tin.",
    },
    {
      id: "q02",
      stem: "Which statement correctly identifies a fabricator in the manufacturing chain?",
      options: [
        {
          id: "a",
          text: "A fabricator converts natural resources into raw materials",
          isCorrect: false,
          rationale:
            "Cơ chế: natural resources → raw materials là vai trò của basic producer. Bẫy: chữ fabricate nghe như tạo từ đầu. Khóa: fabricator đứng cuối chuỗi, không đứng đầu.",
        },
        {
          id: "b",
          text: "A fabricator only distributes finished goods wholesale without changing the product",
          isCorrect: false,
          rationale:
            "Cơ chế: fabricator có manufacturing/assembly activity để tạo final product. Bẫy: nhầm fabricator với distributor. Khóa: fabricator lắp ráp hoặc chế tạo final products.",
        },
        {
          id: "c",
          text: "A fabricator extracts natural resources such as ore, timber, or crude oil",
          isCorrect: false,
          rationale:
            "Cơ chế: extraction/natural resources thuộc đầu chuỗi trước basic producer. Bẫy: kéo fabricator về khâu tài nguyên thô. Khóa: fabricator không khai thác tài nguyên.",
        },
        {
          id: "d",
          text: "A fabricator assembles final products for the market, such as Honda assembling vehicles",
          isCorrect: true,
          rationale:
            "Cơ chế: fabricator dùng components/semi-products để tạo final products ra thị trường. Bẫy: nhầm với converter vì cả hai đều chế biến. Khóa: converter tạo semi-products; fabricator tạo sản phẩm cuối.",
        },
        {
          id: "e",
          text: "A fabricator mainly turns raw materials into semi-products for other firms",
          isCorrect: false,
          rationale:
            "Cơ chế: semi-products/components là vai trò converter. Bẫy: thấy có biến đổi vật liệu nên gọi chung là fabricator. Khóa: fabricator = final products, converter = semi-products.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Basic producer / converter / fabricator",
      takeaway:
        "Basic producer tạo raw materials; converter tạo semi-products/components; fabricator lắp final products.",
    },
    {
      id: "q03",
      stem: "Which description best matches mass production?",
      options: [
        {
          id: "a",
          text: "Very small volume, highly skilled multi-functional workers, general-purpose equipment, and process-focused layout",
          isCorrect: false,
          rationale:
            "Cơ chế: mô tả này là jobbing/project production. Bẫy: lấy đặc điểm linh hoạt gán cho mass. Khóa: mass đi theo volume cao và equipment chuyên dụng.",
        },
        {
          id: "b",
          text: "Large volume, high production rate, lower worker skill, single-functional equipment, and product-focused layout",
          isCorrect: true,
          rationale:
            "Cơ chế: mass production nằm ở đầu volume cao của trục jobbing → batch → mass. Bẫy: chỉ nhớ mass là nhiều mà quên layout/equipment. Khóa: high volume kéo theo product-focus và single-functional equipment.",
        },
        {
          id: "c",
          text: "Process-focused layout is the defining layout of mass production",
          isCorrect: false,
          rationale:
            "Cơ chế: process-focus gom theo loại công đoạn, phù hợp jobbing hơn. Bẫy: nhầm process-focus với efficient process. Khóa: mass dùng product-focus theo dòng sản phẩm.",
        },
        {
          id: "d",
          text: "Batch production always has the highest production rate among the three types",
          isCorrect: false,
          rationale:
            "Cơ chế: production rate tăng dần khi đi tới mass. Bẫy: batch nghe có vẻ sản xuất nhiều nên tưởng rate cao nhất. Khóa: mass mới là high production rate.",
        },
        {
          id: "e",
          text: "Jobbing production has the largest volume and lowest worker skill requirement",
          isCorrect: false,
          rationale:
            "Cơ chế: jobbing là very small volume và worker skill cao. Bẫy: đảo toàn bộ trục volume/skill. Khóa: jobbing = low volume, high skill; mass = high volume, lower skill.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Jobbing vs Batch vs Mass",
      takeaway:
        "Mass production = volume/rate cao, skill thấp hơn, equipment chuyên dụng, product-focus layout.",
    },
    {
      id: "q04",
      stem: "Which statement correctly describes a fully automated system?",
      options: [
        {
          id: "a",
          text: "A semiautomated system is fully automated because a machine performs part of the cycle",
          isCorrect: false,
          rationale:
            "Cơ chế: semiautomated vẫn cần worker cho phần còn lại mỗi cycle, như load/unload. Bẫy: thấy machine control nên gọi full. Khóa: fully automated không cần người mỗi chu kỳ.",
        },
        {
          id: "b",
          text: "Any worker-machine system is automatically classified as an automated system",
          isCorrect: false,
          rationale:
            "Cơ chế: worker-machine system là category riêng, người vận hành powered equipment. Bẫy: có máy thì tưởng automated. Khóa: automated system giảm/loại can thiệp trực tiếp trong process.",
        },
        {
          id: "c",
          text: "Manual work systems use powered tools, while worker-machine systems use only hand tools",
          isCorrect: false,
          rationale:
            "Cơ chế: manual work system dùng hand tools, không powered tool; worker-machine dùng powered equipment. Bẫy: đảo định nghĩa hai category. Khóa: powered equipment đẩy hệ thống sang worker-machine.",
        },
        {
          id: "d",
          text: "An automated system never needs people for maintenance, programming, engineering, or management",
          isCorrect: false,
          rationale:
            "Cơ chế: automated system có thể không cần người mỗi cycle nhưng vẫn cần human support. Bẫy: hiểu automation là xóa con người hoàn toàn. Khóa: people vẫn cần cho maintenance/programming/management.",
        },
        {
          id: "e",
          text: "It can operate for longer than one work cycle without a human worker needed each cycle",
          isCorrect: true,
          rationale:
            "Cơ chế: fully automated chạy qua nhiều hơn một work cycle mà không cần worker can thiệp mỗi cycle. Bẫy: lẫn với semiautomated vì cả hai đều có machine control. Khóa: tiêu chí là mức can thiệp của người theo từng chu kỳ.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Three categories by human participation",
      takeaway:
        "Fully automated = chạy dài hơn một work cycle mà không cần người mỗi chu kỳ; nhưng con người vẫn cần ở vai trò support.",
    },
    {
      id: "q05",
      stem: "Which automation type best fits low-to-medium volume batch production using NC machines, robots, or PLCs?",
      options: [
        {
          id: "a",
          text: "Fixed automation, because transfer lines are best for high-variety products",
          isCorrect: false,
          rationale:
            "Cơ chế: fixed automation phù hợp very high volume, low variety. Bẫy: transfer line nghe mạnh nên gán cho high variety. Khóa: fixed chết cứng nếu sản phẩm đổi thường xuyên.",
        },
        {
          id: "b",
          text: "Programmable automation",
          isCorrect: true,
          rationale:
            "Cơ chế: programmable automation đổi được bằng program và phù hợp batch, low–medium volume. Bẫy: dễ lẫn với flexible vì cả hai đều đổi sản phẩm được. Khóa: programmable thường đổi theo lô, không phải mix liên tục.",
        },
        {
          id: "c",
          text: "Flexible automation is identical to programmable automation, so there is no practical distinction",
          isCorrect: false,
          rationale:
            "Cơ chế: flexible automation đổi sản phẩm gần như không mất thời gian và chạy mix. Bẫy: thấy đều dùng program nên đồng nhất. Khóa: programmable theo batch; flexible cho mix liên tục.",
        },
        {
          id: "d",
          text: "Fixed automation for low volume, because custom-engineered equipment is cheapest when demand is uncertain",
          isCorrect: false,
          rationale:
            "Cơ chế: fixed automation đầu tư rất cao, cần volume lớn để justify. Bẫy: nghĩ custom-engineered là linh hoạt. Khóa: demand thấp/không chắc không hợp fixed.",
        },
        {
          id: "e",
          text: "Flexible automation for one single mass product with no product variety",
          isCorrect: false,
          rationale:
            "Cơ chế: flexible automation có giá trị khi cần mix/variety. Bẫy: nghe flexible là tốt nhất cho mọi tình huống. Khóa: one mass product phù hợp fixed hơn nếu volume đủ lớn.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Three types of automation by volume × variety",
      takeaway:
        "Fixed = high volume/low variety; programmable = batch low–medium volume; flexible = mix sản phẩm đổi nhanh.",
    },
    {
      id: "q06",
      stem: "An order of 50 items is processed through 8 identical work stations. Per station: setup time Ts = 3 h, unit processing time Tp = 6 min, non-operating time Tn = 7 h. One shift = 7 h/day. What is the manufacturing lead time in hours?",
      options: [
        {
          id: "a",
          text: "15 hours",
          isCorrect: false,
          rationale:
            "Cơ chế: 15 = 3 + 50×0.1 + 7 là thời gian tại một work station. Bẫy: quên nhân n = 8. Khóa: MLT của cả order phải đi qua tất cả work stations.",
        },
        {
          id: "b",
          text: "64 hours",
          isCorrect: false,
          rationale:
            "Cơ chế: 64 = 8×(3+5) khi bỏ Tn. Bẫy: quên non-operating time như chờ/queue/di chuyển. Khóa: công thức MLT gồm Ts + Q×Tp + Tn.",
        },
        {
          id: "c",
          text: "96 hours",
          isCorrect: false,
          rationale:
            "Cơ chế: 96 = 8×(5+7) khi bỏ Ts. Bẫy: quên setup time ở mỗi station. Khóa: batch qua station nào cũng chịu setup nếu công thức cho Ts.",
        },
        {
          id: "d",
          text: "120 hours",
          isCorrect: true,
          rationale:
            "Cơ chế: đổi 6 min = 0.1 h, nên Q×Tp = 50×0.1 = 5h; TMLT = 8×(3+5+7) = 120h. Bẫy: sai một bước sẽ ra số đẹp khác. Khóa: đổi đơn vị rồi nhân số WS.",
        },
        {
          id: "e",
          text: "2480 hours",
          isCorrect: false,
          rationale:
            "Cơ chế: 2480 = 8×(3+50×6+7) khi dùng Tp = 6h. Bẫy: quên đổi 6 minutes sang 0.1 hours. Khóa: thống nhất đơn vị trước khi tính.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Manufacturing Lead Time",
      takeaway:
        "TMLT = n × (Ts + Q × Tp + Tn); nhớ đổi phút → giờ và nhân số work stations.",
    },
    {
      id: "q07",
      stem: "Given MLT = 120 hours and one shift = 7 h/day, how many working days does the order take?",
      options: [
        {
          id: "a",
          text: "5.00 days",
          isCorrect: false,
          rationale:
            "Cơ chế: 5.00 = 120÷24. Bẫy: chia theo 24h calendar day thay vì working day. Khóa: stem cho one shift = 7 h/day, nên dùng 7.",
        },
        {
          id: "b",
          text: "8.57 days",
          isCorrect: false,
          rationale:
            "Cơ chế: 8.57 = 120÷14. Bẫy: tự thêm 2 shifts/day dù stem chỉ cho one shift = 7h/day. Khóa: chỉ dùng dữ liệu đã cho.",
        },
        {
          id: "c",
          text: "17.14 days",
          isCorrect: true,
          rationale:
            "Cơ chế: working days = 120÷7 = 17.14. Bẫy: giữ giờ hoặc chia theo ngày lịch. Khóa: quy đổi qua giờ làm việc/ngày và ghi rõ đơn vị.",
        },
        {
          id: "d",
          text: "120 days",
          isCorrect: false,
          rationale:
            "Cơ chế: 120 là số hours, không phải days. Bẫy: quên đổi đơn vị. Khóa: kết quả phải là working days.",
        },
        {
          id: "e",
          text: "840 days",
          isCorrect: false,
          rationale:
            "Cơ chế: 840 = 120×7. Bẫy: nhân thay vì chia khi đổi từ hours sang days. Khóa: hours ÷ hours/day = days.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "MLT unit conversion",
      takeaway:
        "Quy đổi MLT sang working days bằng tổng giờ ÷ giờ làm việc mỗi ngày; luôn kèm đơn vị.",
    },
    {
      id: "q08",
      stem: "This long MLT most directly increases which managerial concern?",
      options: [
        {
          id: "a",
          text: "Production rate automatically increases because jobs stay longer in the factory",
          isCorrect: false,
          rationale:
            "Cơ chế: MLT dài không tự làm Rp tăng; nó thường báo dòng chảy chậm. Bẫy: nghĩ nhiều thời gian trong xưởng nghĩa là sản xuất nhiều hơn. Khóa: rate đo output/time, không phải time spent.",
        },
        {
          id: "b",
          text: "Maximum capacity automatically increases because each item spends more time in the system",
          isCorrect: false,
          rationale:
            "Cơ chế: capacity phụ thuộc W, S, H, Rp. Bẫy: lẫn thời gian nằm trong hệ thống với năng lực tối đa. Khóa: MLT dài không làm Ca tăng.",
        },
        {
          id: "c",
          text: "Setup time is automatically reduced because the order is larger",
          isCorrect: false,
          rationale:
            "Cơ chế: stem không cho thay đổi Ts; MLT dài còn bao gồm Ts, processing và Tn. Bẫy: suy diễn batch lớn sẽ làm setup biến mất. Khóa: setup time chỉ giảm khi process cải tiến.",
        },
        {
          id: "d",
          text: "Utilization automatically becomes 100% because the order takes many days",
          isCorrect: false,
          rationale:
            "Cơ chế: utilization = actual output ÷ capacity, không suy ra trực tiếp từ MLT. Bẫy: thấy hệ thống bận lâu nên nghĩ full utilization. Khóa: U cần dữ liệu output/capacity.",
        },
        {
          id: "e",
          text: "Work-in-process inventory and capital tied up in unfinished goods",
          isCorrect: true,
          rationale:
            "Cơ chế: MLT dài nghĩa là hàng nằm trong hệ thống lâu hơn, làm WIP và vốn kẹt trong hàng dở tăng. Bẫy: nhìn MLT như chỉ số thời gian đơn thuần. Khóa: giảm MLT là đòn bẩy giảm WIP.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "MLT decision link to WIP",
      takeaway:
        "MLT dài kéo WIP và vốn kẹt trong hàng dở lên; vì vậy giảm MLT là mục tiêu cải tiến vận hành.",
    },
    {
      id: "q09",
      stem: "A factory has 6 lathes; it runs 10 shifts/week at 6.4 h/shift; each machine's productivity is 17 items/h. Weekly capacity?",
      options: [
        {
          id: "a",
          text: "1020 items/week",
          isCorrect: false,
          rationale:
            "Cơ chế: 1020 = 6×10×17. Bẫy: quên H = 6.4 h/shift. Khóa: Ca cần đủ W × S × H × Rp.",
        },
        {
          id: "b",
          text: "652.8 items/week",
          isCorrect: false,
          rationale:
            "Cơ chế: 652.8 = 6×6.4×17. Bẫy: quên S = 10 shifts/week. Khóa: capacity theo tuần phải nhân số shifts trong tuần.",
        },
        {
          id: "c",
          text: "1088 items/week",
          isCorrect: false,
          rationale:
            "Cơ chế: 1088 = 10×6.4×17. Bẫy: quên W = 6 máy. Khóa: toàn factory capacity phải nhân số machines/work stations.",
        },
        {
          id: "d",
          text: "6528 items/week",
          isCorrect: true,
          rationale:
            "Cơ chế: Ca = W×S×H×Rp = 6×10×6.4×17 = 6528 items/week. Bẫy: bỏ một thừa số sẽ ra distractor đẹp. Khóa: đủ 4 thừa số.",
        },
        {
          id: "e",
          text: "6630 items/week",
          isCorrect: false,
          rationale:
            "Cơ chế: 6630 dùng nhầm H = 6.5 thay vì 6.4. Bẫy: lấy số từ ví dụ capacity đa sản phẩm sang ví dụ lathe. Khóa: giữ đúng số VERIFIED của từng bài.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Capacity",
      takeaway:
        "Ca = W × S × H × Rp; capacity sai thường do quên một thừa số hoặc dùng nhầm dữ liệu.",
    },
    {
      id: "q10",
      stem: "A line's weekly capacity is 1300 units; this week it produced 1000 units. Utilization?",
      options: [
        {
          id: "a",
          text: "23.08%",
          isCorrect: false,
          rationale:
            "Cơ chế: 23.08% = 300÷1300 là idle share, không phải utilization. Bẫy: tính phần chưa dùng rồi gọi là U. Khóa: U đo phần đã dùng.",
        },
        {
          id: "b",
          text: "76.92%",
          isCorrect: true,
          rationale:
            "Cơ chế: U = actual output ÷ capacity = 1000÷1300 = 76.92%. Bẫy: đảo tử/mẫu hoặc nhầm với idle rate. Khóa: U nằm trong [0,1] nếu output không vượt capacity.",
        },
        {
          id: "c",
          text: "130%",
          isCorrect: false,
          rationale:
            "Cơ chế: 130% = 1300÷1000. Bẫy: đảo tử/mẫu. Khóa: denominator là capacity, numerator là sản lượng thực.",
        },
        {
          id: "d",
          text: "15.38%",
          isCorrect: false,
          rationale:
            "Cơ chế: 15.38% đến từ chia nhầm cho 65 giờ. Bẫy: lẫn output units với hours. Khóa: utilization theo output/capacity cùng đơn vị units.",
        },
        {
          id: "e",
          text: "100%",
          isCorrect: false,
          rationale:
            "Cơ chế: 100% chỉ khi output = capacity. Bẫy: giả định dây chuyền luôn chạy hết công suất. Khóa: dữ liệu cho thấy output 1000 < capacity 1300.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Utilization",
      takeaway:
        "U = sản lượng thực ÷ capacity, nằm trong [0,1] khi chưa vượt công suất.",
    },
    {
      id: "q11",
      stem: "If utilization is 76.92%, what is the best managerial interpretation?",
      options: [
        {
          id: "a",
          text: "The line is over capacity, so the manager must buy another machine immediately",
          isCorrect: false,
          rationale:
            "Cơ chế: U dưới 100% nghĩa là chưa vượt capacity. Bẫy: đọc 76.92% như quá tải. Khóa: đầu tư thêm máy chưa được justify từ U này.",
        },
        {
          id: "b",
          text: "The line is already full, so overtime is required before accepting any extra order",
          isCorrect: false,
          rationale:
            "Cơ chế: full utilization gần 100%, còn đây là 76.92%. Bẫy: nghĩ có sản xuất là full. Khóa: còn khoảng 23% capacity nhàn rỗi trước khi cân nhắc overtime.",
        },
        {
          id: "c",
          text: "The line has about 23% idle capacity, so the manager can investigate idle time or consider accepting more work before adding machines",
          isCorrect: true,
          rationale:
            "Cơ chế: idle share ≈ 100% − 76.92% = 23.08%. Bẫy: chỉ tính U mà không dùng nó để ra decision. Khóa: ưu tiên khai thác capacity hiện có trước khi đầu tư.",
        },
        {
          id: "d",
          text: "Machine availability is low because utilization and availability are the same measure",
          isCorrect: false,
          rationale:
            "Cơ chế: availability dùng MTBF/MTTR, còn utilization dùng output/capacity. Bẫy: lẫn U với A. Khóa: muốn kết luận A thấp phải có failure/repair data.",
        },
        {
          id: "e",
          text: "The data must be wrong because utilization must always equal 100%",
          isCorrect: false,
          rationale:
            "Cơ chế: utilization là chỉ số đo mức dùng capacity thực tế, có thể thấp hơn 100%. Bẫy: nghĩ capacity thiết kế luôn được dùng hết. Khóa: U thấp là tín hiệu quản trị, không phải lỗi dữ liệu mặc định.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "Utilization decision",
      takeaway:
        "U = 76.92% cho thấy còn khoảng 23.08% capacity nhàn rỗi; hãy truy nguyên idle time/nhận thêm việc trước khi mua máy.",
    },
    {
      id: "q12",
      stem: "According to the USA Principle, when might a manager choose not to automate yet?",
      options: [
        {
          id: "a",
          text: "Automation should be the first step before understanding the current process",
          isCorrect: false,
          rationale:
            "Cơ chế: USA Principle bắt đầu bằng Understand. Bẫy: phản xạ automate ngay vì nghĩ technology luôn giải quyết vấn đề. Khóa: chưa hiểu process thì tự động hóa chỉ làm lỗi chạy nhanh hơn.",
        },
        {
          id: "b",
          text: "Automation is always cheaper than manual labor in every situation",
          isCorrect: false,
          rationale:
            "Cơ chế: automation cần vốn, setup, maintenance và chỉ justify trong điều kiện phù hợp. Bẫy: tuyệt đối hóa unit cost thấp. Khóa: thiếu vốn, lương thấp, demand rủi ro có thể ưu tiên manual.",
        },
        {
          id: "c",
          text: "Every task should be automated if a machine can technically do it",
          isCorrect: false,
          rationale:
            "Cơ chế: technical feasibility không đủ; còn phải xét volume, variety, life cycle và economics. Bẫy: coi 'làm được' là 'nên làm'. Khóa: automation là decision có điều kiện.",
        },
        {
          id: "d",
          text: "Manual labor is always less efficient and should never be preferred",
          isCorrect: false,
          rationale:
            "Cơ chế: manual labor có lợi khi sản phẩm tùy biến, vòng đời ngắn, demand thất thường hoặc thiếu vốn. Bẫy: đánh đồng manual với lạc hậu. Khóa: người quản trị chọn system fit, không chọn khẩu hiệu.",
        },
        {
          id: "e",
          text: "After understanding and simplifying the process, simplification may be enough; manual labor can be preferred for customized products, short life cycles, unstable demand, or limited capital",
          isCorrect: true,
          rationale:
            "Cơ chế: USA = Understand → Simplify → Automate; có khi dừng ở Simplify là đủ. Bẫy: nghĩ automation là mục tiêu tự thân. Khóa: automation chỉ là đòn bẩy có điều kiện theo volume, variety và business risk.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "USA Principle / when NOT to automate",
      takeaway:
        "Automation là đòn bẩy CÓ ĐIỀU KIỆN, không phải mục tiêu tự thân: Understand → Simplify → Automate.",
    },
  ],
  status: "ready",
  source:
    "Manufacturing Systems — Groover, Automation, Production Systems & CIM, 4e (Pearson, 2015), Chapter 1 (p.1–18) + slide 'Chapter 1 Introduction' (mục 1.1–1.7).",
};

const topic02: Chapter = {
  slug: "topic-02",
  order: 2,
  title: "Topic 02 — Organization Planning in Factory",
  bigIdea:
    "Không có cấu trúc tổ chức lý tưởng cố định — tổ chức tốt là RELEVANT + DYNAMIC, tạo team-work để đạt orders với chi phí thấp nhất.",
  bigIdeaPillars: [
    {
      label: "Mục tiêu",
      body: "Tạo môi trường team-work hoàn thành orders ở lowest cost — không phải vẽ sơ đồ đẹp.",
    },
    {
      label: "Tiến trình design",
      body: "Xác định functions → nhóm work-elements → mô tả jobs → gán người.",
    },
    {
      label: "Principles",
      body: "Span of control 4–8, ít cấp quản lý, phân biệt authority vs responsibility.",
    },
    {
      label: "Chọn structure",
      body: "Theo quy mô/dự án: direct → direct + consultation → matrix → informal.",
    },
  ],
  learningObjectives: [
    "Giải thích mục tiêu của organization in factory (team-work đạt orders với lowest cost) và hai tính chất 'relevant' + 'dynamic'.",
    "Mô tả tiến trình organization design (functions → group work-elements → describe jobs → assign individuals) và 2 view-points (cân nhắc mọi yếu tố vs tập trung flexibility).",
    "Giải thích organization chart và các advantages của nó.",
    "Áp dụng span of control (4–8 subordinators) và 4 yếu tố quyết định số subordinators (managerial level, regular problems, ability, monitoring).",
    "Giải thích nguyên tắc managerial levels (nên ~4 cấp; subordinate principle ưu tiên).",
    "Phân biệt 6 cơ sở job division (functions, process, equipment, location, items, customers).",
    "Phân biệt responsibility vs authority; formal (appointed) vs informal authority.",
    "Giải thích recruitment (internal/external) và vai trò training.",
    "Phân biệt 4 loại organization structure: direct; direct + consultation (consultant/control/service/operations); matrix (light vs heavy); informal.",
    "Giải thích organization planning: 2 view-points (dynamic; functions do industrial engineers phát triển) và 5 advantages (continuity, internal promote, job description, long-term planning, stability).",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "3 câu hỏi khi đọc/thiết kế một tổ chức: (A) Tổ chức để làm gì? (B) Thiết kế theo nguyên tắc nào? (C) Chọn & giữ cấu trúc nào? Bấm node để mở chi tiết và nhảy tới phần học.",
    nodes: [
      {
        id: "org",
        label: "Organization in Factory",
        group: "concept",
        sectionId: "s1",
        detail:
          "Thiết kế tổ chức con người: relevant + dynamic, team-work đạt orders với chi phí thấp nhất.",
      },
      {
        id: "g_why",
        label: "A. Tổ chức để làm gì?",
        group: "concept",
        parent: "org",
        sectionId: "s1",
        detail:
          "Mục tiêu team-work/lowest cost, tiến trình design, organization chart.",
      },
      {
        id: "g_rules",
        label: "B. Thiết kế theo nguyên tắc nào?",
        group: "concept",
        parent: "org",
        sectionId: "s4",
        detail:
          "Span of control, managerial levels, job division, authority/responsibility, recruitment.",
      },
      {
        id: "g_form",
        label: "C. Chọn & giữ cấu trúc nào?",
        group: "concept",
        parent: "org",
        sectionId: "s9",
        detail: "4 structures + organization planning (dynamic).",
      },
      {
        id: "t_goal",
        label: "Mục tiêu & tính chất tổ chức",
        group: "term",
        parent: "g_why",
        sectionId: "s1",
        detail:
          "Team-work đạt orders lowest cost; 'relevant' + 'dynamic'; giảm conflict, tăng phối hợp.",
      },
      {
        id: "t_design",
        label: "Organization design (4 bước)",
        group: "term",
        parent: "g_why",
        sectionId: "s2",
        detail:
          "Functions → group work-elements → describe jobs → assign; 2 view-points.",
      },
      {
        id: "t_chart",
        label: "Organization chart",
        group: "term",
        parent: "g_why",
        sectionId: "s3",
        detail:
          "Sơ đồ tổ chức + advantages (quản lý trực tiếp, positions, training, quan hệ công việc).",
      },
      {
        id: "t_span",
        label: "Span of control (4–8)",
        group: "term",
        parent: "g_rules",
        sectionId: "s4",
        detail:
          "Số subordinators/quản lý; 4 yếu tố: managerial level, regular problems, ability, monitoring.",
      },
      {
        id: "t_levels",
        label: "Managerial levels (~4)",
        group: "term",
        parent: "g_rules",
        sectionId: "s5",
        detail: "Không cần nhiều cấp; subordinate principle ưu tiên.",
      },
      {
        id: "t_jobdiv",
        label: "Job division (6 cơ sở)",
        group: "term",
        parent: "g_rules",
        sectionId: "s6",
        detail: "Functions, process, equipment, location, items, customers.",
      },
      {
        id: "t_auth",
        label: "Authority vs Responsibility",
        group: "term",
        parent: "g_rules",
        sectionId: "s7",
        detail:
          "Responsibility = nghĩa vụ; authority = quyền; formal (appointed) vs informal.",
      },
      {
        id: "t_recruit",
        label: "Recruitment & training",
        group: "term",
        parent: "g_rules",
        sectionId: "s8",
        detail: "Internal/external recruitment; training.",
      },
      {
        id: "t_struct",
        label: "4 organization structures",
        group: "term",
        parent: "g_form",
        sectionId: "s9",
        detail: "Direct → direct+consultation → matrix → informal.",
      },
      {
        id: "t_consult",
        label: "Consultation groups",
        group: "term",
        parent: "g_form",
        sectionId: "s10",
        detail: "Consultant / control / service / operations group.",
      },
      {
        id: "t_matrix",
        label: "Matrix (light vs heavy)",
        group: "term",
        parent: "g_form",
        sectionId: "s11",
        detail:
          "Functional × project; quyền lực nghiêng functional (light) hay project (heavy).",
      },
      {
        id: "t_informal",
        label: "Informal structure",
        group: "term",
        parent: "g_form",
        sectionId: "s12",
        detail:
          "Quan hệ phi chính thức, không hiện trên chart nhưng ảnh hưởng vận hành.",
      },
      {
        id: "t_plan",
        label: "Organization planning",
        group: "term",
        parent: "g_form",
        sectionId: "s13",
        detail: "Dynamic, luôn cập nhật; 5 advantages.",
      },
    ],
    edges: [
      { from: "org", to: "g_why" },
      { from: "org", to: "g_rules" },
      { from: "org", to: "g_form" },
      { from: "g_why", to: "t_goal" },
      { from: "g_why", to: "t_design" },
      { from: "g_why", to: "t_chart" },
      { from: "g_rules", to: "t_span" },
      { from: "g_rules", to: "t_levels" },
      { from: "g_rules", to: "t_jobdiv" },
      { from: "g_rules", to: "t_auth" },
      { from: "g_rules", to: "t_recruit" },
      { from: "g_form", to: "t_struct" },
      { from: "g_form", to: "t_consult" },
      { from: "g_form", to: "t_matrix" },
      { from: "g_form", to: "t_informal" },
      { from: "g_form", to: "t_plan" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "Mục tiêu & tính chất của tổ chức",
      blocks: [
        flowBlock(
          "s1",
          "Vì sao cần tổ chức",
          "horizontal",
          [
            {
              id: "s1_ind",
              label: "Cá nhân rời rạc",
              group: "concept",
              detail:
                "Nhiều người, nhiều máy trong workshop; nếu không tổ chức → conflict, chồng chéo, lãng phí.",
            },
            {
              id: "s1_team",
              label: "Team-work",
              group: "concept",
              detail:
                "Tổ chức để mọi individual link – share – co-operate, cùng hướng về goals công ty (slide 2/28).",
            },
            {
              id: "s1_goal",
              label: "Đạt orders — lowest cost",
              group: "concept",
              detail:
                "Mục tiêu của organization in factory: thiết lập môi trường team-work để hoàn thành orders với chi phí THẤP NHẤT (slide 3–4/28).",
            },
          ],
          [
            { from: "s1_ind", to: "s1_team", label: "tổ chức" },
            { from: "s1_team", to: "s1_goal", label: "hướng tới" },
          ],
          "Tổ chức không phải mục tiêu tự thân — nó tồn tại để team-work đạt orders với chi phí thấp nhất.",
        ),
        calloutBlock(
          "key",
          "'Relevant' + 'Dynamic' — linh hồn cả chương",
          "Slide nhấn: KHÔNG có cấu trúc tổ chức 'lý tưởng cố định'. Tổ chức tốt là 'relevant' (phù hợp thực tế) và 'dynamic' (luôn cập nhật). Trend tổ chức tốt: (1) giảm 'arising troubles' trong quản lý; (2) có risk/kế hoạch dự phòng; (3) đáp ứng yêu cầu một cách 'relevant'; (4) giảm conflicts (khi ai cũng biết mình phải làm gì); (5) hỗ trợ teamwork & làm việc hiệu quả trong mức chi phí cho phép (slide 3/28).",
        ),
      ],
      keyTerms: [
        {
          term: "organization in factory",
          definition:
            "Tổ chức con người trong nhà máy để phối hợp công việc hướng tới goals.",
        },
        {
          term: "team-work",
          definition:
            "Môi trường để individuals link, share, co-operate và cùng hoàn thành orders.",
        },
        {
          term: "relevant organization",
          definition: "Tổ chức phù hợp với yêu cầu và thực tế vận hành.",
        },
        {
          term: "dynamic organization",
          definition: "Tổ chức luôn được cập nhật khi thực tế thay đổi.",
        },
        {
          term: "organization goals",
          definition:
            "Mục tiêu thiết lập team-work để hoàn thành orders với lowest cost.",
        },
      ],
    },
    {
      id: "s2",
      heading: "Organization design",
      blocks: [
        flowBlock(
          "s2",
          "Tiến trình thiết kế tổ chức",
          "horizontal",
          [
            {
              id: "s2_func",
              label: "Determine functions",
              group: "concept",
              detail:
                "Xác định các functions cần có để đạt mọi goals của công ty (dựa trên strategy, mission, vision + org goals).",
            },
            {
              id: "s2_group",
              label: "Group & integrate",
              group: "concept",
              detail:
                "Nhóm các work-elements, tích hợp functions thành bộ phận.",
            },
            {
              id: "s2_desc",
              label: "Describe jobs",
              group: "concept",
              detail:
                "Thiết kế & mô tả mọi job để giao cho nhân viên (job description).",
            },
            {
              id: "s2_assign",
              label: "Assign individuals",
              group: "concept",
              detail:
                "Gán từng người vào job và xác định function tương ứng.",
            },
          ],
          [
            { from: "s2_func", to: "s2_group", label: "nhóm" },
            { from: "s2_group", to: "s2_desc", label: "mô tả" },
            { from: "s2_desc", to: "s2_assign", label: "gán người" },
          ],
          "Thiết kế tổ chức đi từ FUNCTIONS (việc cần làm) tới NGƯỜI cụ thể — không đi ngược (slide 5–6/28).",
        ),
        comparisonBlock(
          "2 view-points trong organization design",
          ["View-point", "Nội dung", "Đánh giá"],
          [
            {
              label: "Cân nhắc mọi yếu tố",
              cells: [
                "Xem xét kỹ mọi impact factor khi thiết kế",
                "Lý tưởng nhưng KHÓ áp dụng trong thực tế",
              ],
            },
            {
              label: "Tập trung flexibility",
              cells: [
                "Chấp nhận cấu trúc non-stable, ưu tiên khả năng linh hoạt",
                "Thực tế hơn — mục tiêu là tổ chức 'relevant', tìm & train người phù hợp",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Design đáp ứng 2 nhóm yêu cầu",
          "Slide chia yêu cầu thiết kế thành: (1) organization requests — bám mission/vision & org goals của công ty; (2) operational requests — sau khi phân tích manufacturing requirements, để vận hành nhà máy hằng ngày/tuần/tháng (short–medium term). Cộng thêm các yếu tố khác: customers, products, wages… (slide 5/28).",
        ),
      ],
      keyTerms: [
        {
          term: "organization design",
          definition:
            "Tiến trình xác định functions, nhóm work-elements, mô tả jobs và gán individuals.",
        },
        {
          term: "functions",
          definition: "Các việc/chức năng cần có để đạt goals của công ty.",
        },
        {
          term: "work-elements",
          definition: "Các phần việc được nhóm và tích hợp thành bộ phận/job.",
        },
        {
          term: "job description",
          definition: "Mô tả job để giao và quản lý trách nhiệm của nhân viên.",
        },
        {
          term: "organization requests",
          definition: "Yêu cầu bám mission, vision và organization goals.",
        },
        {
          term: "operational requests",
          definition:
            "Yêu cầu vận hành sau khi phân tích manufacturing requirements.",
        },
      ],
    },
    {
      id: "s3",
      heading: "Organization chart & advantages",
      blocks: [
        comparisonBlock(
          "Advantages của organization chart",
          ["#", "Lợi ích"],
          [
            {
              label: "1",
              cells: [
                "Thể hiện trực tiếp cấp quản lý → kiểm tra nhanh functional responsibilities",
              ],
            },
            {
              label: "2",
              cells: [
                "Cung cấp thông tin về positions và số người phụ trách từng function",
              ],
            },
            {
              label: "3",
              cells: ["Dùng cho training programs và planning"],
            },
            {
              label: "4",
              cells: [
                "Thể hiện mọi work relationship và xác nhận các managers (supervisors, technicians, production managers…)",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Organization chart là gì",
          "Sơ đồ trình bày cấu trúc tổ chức trong vận hành: cho thấy ai làm gì, mọi quan hệ giữa functions và/hoặc positions/individuals (slide 8/28).",
        ),
      ],
      keyTerms: [
        {
          term: "organization chart",
          definition:
            "Sơ đồ trình bày cấu trúc, positions, functions và work relationships.",
        },
        {
          term: "functional responsibilities",
          definition: "Trách nhiệm theo từng function trong tổ chức.",
        },
        {
          term: "positions",
          definition: "Các vị trí/cấp bậc trong organization chart.",
        },
        {
          term: "work relationship",
          definition: "Quan hệ công việc giữa functions, positions hoặc individuals.",
        },
      ],
    },
    {
      id: "s4",
      heading: "Span of control",
      blocks: [
        calloutBlock(
          "key",
          "Span of control = số subordinators/quản lý",
          "Nguyên tắc cơ bản của human resource: số người báo cáo cho CÙNG một manager nên trong khoảng 4 đến 8 (slide 10–11/28). Đây là 'subordinate principle'.",
        ),
        comparisonBlock(
          "4 yếu tố quyết định số subordinators",
          ["Yếu tố", "Ảnh hưởng tới số subordinators"],
          [
            {
              label: "Managerial level",
              cells: [
                "Cấp càng cao → càng ÍT người báo cáo; cấp thấp → nhiều hơn",
              ],
            },
            {
              label: "Regular problems",
              cells: [
                "Vấn đề lặp lại/phổ biến → nghiêng về cấp quản lý thấp (low level)",
              ],
            },
            {
              label: "Ability of subordinators",
              cells: [
                "Cấp dưới càng giỏi/tự chủ được việc → TĂNG số subordinators",
              ],
            },
            {
              label: "Monitoring",
              cells: [
                "Nếu giám sát quan trọng → GIẢM số subordinators (và ngược lại)",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "span of control",
          definition: "Số subordinators báo cáo cho cùng một manager.",
        },
        {
          term: "subordinate",
          definition: "Người cấp dưới báo cáo cho manager.",
        },
        {
          term: "subordinate principle",
          definition: "Nguyên tắc ưu tiên kiểm soát số subordinators phù hợp.",
        },
      ],
    },
    {
      id: "s5",
      heading: "Managerial levels",
      blocks: [
        calloutBlock(
          "insight",
          "Ít cấp quản lý",
          "Không cần nhiều managerial levels — nên khoảng 4 cấp (slide 13/28). Khi cân nhắc, subordinate principle được ưu tiên cao hơn các nguyên tắc khác: thà điều chỉnh span of control còn hơn đẻ thêm tầng quản lý làm tổ chức chậm & cồng kềnh.",
        ),
      ],
      keyTerms: [
        {
          term: "managerial levels",
          definition: "Các tầng/cấp quản lý trong cấu trúc tổ chức.",
        },
        {
          term: "flat organization",
          definition: "Tổ chức ít cấp quản lý, tránh cồng kềnh không cần thiết.",
        },
      ],
    },
    {
      id: "s6",
      heading: "Job division",
      blocks: [
        comparisonBlock(
          "6 cơ sở phân chia công việc",
          ["Cơ sở", "Chia việc theo"],
          [
            {
              label: "Functions",
              cells: ["Theo các chức năng cụ thể (sales, production, finance…)"],
            },
            {
              label: "Process",
              cells: [
                "Theo process/teams/groups của các professional tasks → tăng productivity, dễ quản lý & control",
              ],
            },
            {
              label: "Equipment",
              cells: [
                "Theo thiết bị/process, dùng cell layout hoặc group technology layout",
              ],
            },
            {
              label: "Location",
              cells: ["Theo vị trí địa lý cụ thể"],
            },
            {
              label: "Items",
              cells: ["Theo family of items (nhóm sản phẩm)"],
            },
            {
              label: "Customers",
              cells: ["Theo khách hàng — nội địa (domestic) hay xuất khẩu (export)"],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "job division",
          definition: "Cách phân chia công việc trong tổ chức.",
        },
        {
          term: "function-based division",
          definition: "Chia việc theo functions như sales, production, finance.",
        },
        {
          term: "process-based division",
          definition: "Chia việc theo process/teams/groups của professional tasks.",
        },
        {
          term: "group technology layout",
          definition: "Cách tổ chức theo nhóm thiết bị/process có liên hệ.",
        },
        {
          term: "family of items",
          definition: "Nhóm sản phẩm dùng làm cơ sở job division.",
        },
      ],
    },
    {
      id: "s7",
      heading: "Responsibility vs Authority",
      blocks: [
        comparisonBlock(
          "Responsibility vs Authority",
          ["Tiêu chí", "Responsibility", "Authority"],
          [
            {
              label: "Bản chất",
              cells: [
                "Nghĩa vụ hoàn thành task/job được giao",
                "Quyền quyết định & điều hành để hoàn thành việc",
              ],
            },
            {
              label: "Cách trao",
              cells: [
                "Được ASSIGNED (giao)",
                "Được APPOINTED (bổ nhiệm)",
              ],
            },
            {
              label: "Thuộc về",
              cells: [
                "Thuộc về employees (cấp dưới)",
                "Gắn với vị trí quản lý; có hỗ trợ từ cấp dưới",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Formal vs Informal authority",
          "Authority có 2 dạng: formal/appointed (được bổ nhiệm chính thức) và informal (từ knowledge, kinh nghiệm, uy tín/goodwill). Ngoài ra có decision-making authority. Lưu ý: responsibility được giao, authority được bổ nhiệm — hai cái phải đi đôi thì việc mới chạy (slide 16–17/28).",
        ),
      ],
      keyTerms: [
        {
          term: "responsibility",
          definition: "Nghĩa vụ hoàn thành task/job được giao.",
        },
        {
          term: "authority",
          definition: "Quyền quyết định và điều hành để hoàn thành việc.",
        },
        {
          term: "formal (appointed) authority",
          definition: "Authority được bổ nhiệm chính thức.",
        },
        {
          term: "informal authority",
          definition:
            "Authority đến từ knowledge, kinh nghiệm, uy tín/goodwill.",
        },
        {
          term: "decision-making authority",
          definition: "Quyền ra quyết định trong phạm vi công việc.",
        },
      ],
    },
    {
      id: "s8",
      heading: "Recruitment & training",
      blocks: [
        calloutBlock(
          "note",
          "Tuyển dụng & đào tạo",
          "Recruitment có thể từ internal (nội bộ) và/hoặc external (bên ngoài). Đi kèm là training để người mới/được điều chuyển đủ năng lực đảm nhận job (slide 18/28).",
        ),
      ],
      keyTerms: [
        {
          term: "recruitment",
          definition: "Tuyển người phù hợp cho job trong tổ chức.",
        },
        {
          term: "internal recruitment",
          definition: "Tuyển/chuyển người từ nội bộ tổ chức.",
        },
        {
          term: "external recruitment",
          definition: "Tuyển người từ bên ngoài tổ chức.",
        },
        {
          term: "training",
          definition: "Đào tạo để người được giao job đủ năng lực đảm nhận.",
        },
      ],
    },
    {
      id: "s9",
      heading: "Bốn organization structures",
      blocks: [
        comparisonBlock(
          "4 loại organization structure",
          ["Cấu trúc", "Đặc điểm", "Phù hợp"],
          [
            {
              label: "Direct",
              cells: [
                "Đơn giản nhất, các đường quản lý dọc (vertical lines)",
                "Start-up/công ty nhỏ; nhưng cứng, khó thay đổi/linh hoạt",
              ],
            },
            {
              label: "Direct + Consultation",
              cells: [
                "Thêm các consultants (báo cáo lên top managers)",
                "Hầu hết công ty; là cấu trúc phổ biến hiện nay",
              ],
            },
            {
              label: "Matrix",
              cells: [
                "Song song functional manager + project manager; cross-function",
                "Dự án chạy chéo phòng ban (construction, software…)",
              ],
            },
            {
              label: "Informal",
              cells: [
                "Quan hệ phi chính thức, không hiện trên chart",
                "Luôn tồn tại song song; cần xét ảnh hưởng tới vận hành",
              ],
            },
          ],
        ),
        calloutBlock(
          "insight",
          "Tiến hóa cấu trúc",
          "Đi từ direct (nhỏ, cứng) → thêm consultation (phổ biến, linh hoạt hơn) → matrix (khi có dự án chéo phòng ban). Informal KHÔNG phải một lựa chọn thay thế — nó tồn tại song song mọi cấu trúc chính thức.",
        ),
      ],
      keyTerms: [
        {
          term: "direct structure",
          definition: "Cấu trúc đơn giản với đường quản lý dọc.",
        },
        {
          term: "direct structure with consultation",
          definition: "Direct structure có thêm các consultation groups hỗ trợ.",
        },
        {
          term: "matrix structure",
          definition:
            "Cấu trúc có quản lý theo functional manager và project manager.",
        },
        {
          term: "informal structure",
          definition: "Cấu trúc quan hệ phi chính thức song song với chart.",
        },
      ],
    },
    {
      id: "s10",
      heading: "Consultation groups",
      blocks: [
        flowBlock(
          "s10",
          "Top manager & 4 nhóm tư vấn",
          "horizontal",
          [
            {
              id: "s10_top",
              label: "Top managers",
              group: "concept",
              detail:
                "Ra quyết định cuối; các consultation group hỗ trợ, báo cáo lên.",
            },
            {
              id: "s10_cons",
              label: "Consultant group",
              group: "concept",
              detail:
                "Ít quyền, gồm chuyên gia tư vấn decision-making cho top managers.",
            },
            {
              id: "s10_ctrl",
              label: "Control group",
              group: "concept",
              detail:
                "Personnel, credit, budget, accountant, audit — CÓ authority trong functions cụ thể của mình.",
            },
            {
              id: "s10_serv",
              label: "Service group",
              group: "concept",
              detail:
                "Lo các việc cụ thể: building, purchasing, transportation, maintenance, insurance, technical, research.",
            },
            {
              id: "s10_ops",
              label: "Operations group",
              group: "concept",
              detail:
                "Chuyên gia vận hành, góp ý cho production planning/activities → Operations Department.",
            },
          ],
          [
            { from: "s10_top", to: "s10_cons", label: "tư vấn" },
            { from: "s10_top", to: "s10_ctrl", label: "kiểm soát" },
            { from: "s10_top", to: "s10_serv", label: "dịch vụ" },
            { from: "s10_top", to: "s10_ops", label: "vận hành" },
          ],
          "4 nhóm tư vấn khác nhau ở QUYỀN: consultant chỉ tư vấn; control có authority trong function riêng (slide 21–22/28).",
        ),
      ],
      keyTerms: [
        {
          term: "consultant group",
          definition:
            "Nhóm chuyên gia tư vấn decision-making cho top managers, ít quyền.",
        },
        {
          term: "control group",
          definition:
            "Nhóm có authority trong functions cụ thể như personnel, budget, audit.",
        },
        {
          term: "service group",
          definition:
            "Nhóm lo các service cụ thể như purchasing, transportation, maintenance.",
        },
        {
          term: "operations group",
          definition:
            "Nhóm chuyên gia vận hành góp ý cho production planning/activities.",
        },
      ],
    },
    {
      id: "s11",
      heading: "Matrix structure",
      blocks: [
        flowBlock(
          "s11",
          "Matrix: hai chiều quản lý",
          "horizontal",
          [
            {
              id: "s11_func",
              label: "Functional manager",
              group: "concept",
              detail:
                "Quản lý theo chức năng/phòng ban (kỹ thuật, sản xuất…).",
            },
            {
              id: "s11_emp",
              label: "Employee / work-element",
              group: "concept",
              detail:
                "Một người/việc chịu SỰ QUẢN LÝ KÉP: vừa theo function vừa theo project.",
            },
            {
              id: "s11_proj",
              label: "Project manager",
              group: "concept",
              detail:
                "Quản lý theo dự án, chạy chéo (cross) các functions.",
            },
          ],
          [
            { from: "s11_func", to: "s11_emp", label: "function" },
            { from: "s11_proj", to: "s11_emp", label: "project" },
          ],
          "Đặc trưng matrix = cross-function, cross-responsibility, cross-management (slide 23/28).",
        ),
        comparisonBlock(
          "Light vs Heavy matrix",
          ["Loại matrix", "Quyền lực chính nằm ở", "Phù hợp"],
          [
            {
              label: "Light matrix",
              cells: ["Functional manager", "Dự án nhỏ (functional-based)"],
            },
            {
              label: "Heavy matrix",
              cells: [
                "Project manager",
                "Dự án lớn, trọng tâm là sản phẩm/dự án (project-based)",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "matrix structure",
          definition:
            "Cấu trúc cross-function/cross-management giữa function và project.",
        },
        {
          term: "light matrix",
          definition: "Matrix mà quyền lực chính nằm ở functional manager.",
        },
        {
          term: "heavy matrix",
          definition: "Matrix mà quyền lực chính nằm ở project manager.",
        },
        {
          term: "cross-function",
          definition: "Cách làm việc chạy chéo qua nhiều functions.",
        },
        {
          term: "project manager",
          definition: "Người quản lý theo dự án trong matrix structure.",
        },
      ],
    },
    {
      id: "s12",
      heading: "Informal structure",
      blocks: [
        calloutBlock(
          "key",
          "Cấu trúc phi chính thức",
          "Informal structure dựa trên quan hệ trong công việc & quản lý, KHÔNG hiện trên organization chart. Ở đây authority là informal (đối lập formal/appointed). Nó luôn tồn tại song song cấu trúc chính thức; nhà quản lý phải xét ảnh hưởng của nó tới operations & production activities (slide 24/28).",
        ),
      ],
      keyTerms: [
        {
          term: "informal structure",
          definition:
            "Cấu trúc quan hệ phi chính thức không hiện trên organization chart.",
        },
        {
          term: "informal authority",
          definition:
            "Authority phát sinh từ quan hệ, knowledge, kinh nghiệm hoặc uy tín.",
        },
      ],
    },
    {
      id: "s13",
      heading: "Organization planning",
      blocks: [
        flowBlock(
          "s13",
          "Tổ chức là động",
          "horizontal",
          [
            {
              id: "s13_design",
              label: "Design structure",
              group: "concept",
              detail:
                "Thiết kế cấu trúc 'ideal'/'relevant' hoặc gần đúng.",
            },
            {
              id: "s13_impl",
              label: "Implement & update",
              group: "concept",
              detail:
                "Tổ chức là DYNAMIC — sau khi thiết kế phải triển khai thực tế và LIÊN TỤC cập nhật (slide 25/28).",
            },
            {
              id: "s13_func",
              label: "Develop functions",
              group: "concept",
              detail:
                "Tổ chức KHÔNG tự đạt target — nhà máy phải phát triển các functions để đạt target; đây là trách nhiệm của industrial engineers (slide 26/28).",
            },
          ],
          [
            { from: "s13_design", to: "s13_impl", label: "triển khai" },
            { from: "s13_impl", to: "s13_func", label: "phát triển" },
          ],
          "2 quan điểm: tổ chức là động & luôn cập nhật; và tổ chức chỉ là khung — con người phát triển functions mới đạt target.",
        ),
        calloutBlock(
          "note",
          "Mục đích planning",
          "Organization planning nhằm: (1) thiết kế cấu trúc 'ideal'/'relevant' hoặc gần đúng; (2) điều hòa/harmonize các quan hệ công việc giữa các phòng ban để giảm xung đột.",
        ),
      ],
      keyTerms: [
        {
          term: "organization planning",
          definition:
            "Thiết kế, triển khai và cập nhật cấu trúc tổ chức cho phù hợp thực tế.",
        },
        {
          term: "dynamic structure",
          definition: "Cấu trúc tổ chức luôn được cập nhật sau khi triển khai.",
        },
        {
          term: "industrial engineers",
          definition:
            "Người phát triển các functions để tổ chức đạt target vận hành.",
        },
      ],
    },
    {
      id: "s14",
      heading: "Advantages of organization planning",
      blocks: [
        comparisonBlock(
          "5 lợi ích của organization planning",
          ["Lợi ích", "Ý nghĩa"],
          [
            {
              label: "Continuity",
              cells: [
                "Dữ liệu tổ chức giúp manager lên kế hoạch thay thế nhân sự khi cần",
              ],
            },
            {
              label: "Internal promote",
              cells: [
                "Khi cấu trúc thay đổi, ưu tiên xét đề bạt nội bộ cho vị trí mới",
              ],
            },
            {
              label: "Detailed job description",
              cells: [
                "Nghiên cứu rõ jobs & responsibilities → đúng người hoàn thành đúng việc hiệu quả",
              ],
            },
            {
              label: "Long-term planning",
              cells: [
                "Cấu trúc nên được cập nhật theo kế hoạch dài hạn; chú ý các vấn đề nhân sự đặc thù",
              ],
            },
            {
              label: "Stability",
              cells: [
                "Sự ổn định của nhà máy phụ thuộc tính linh hoạt & động của tổ chức; planning tốt → an toàn cho tương lai",
              ],
            },
          ],
        ),
        calloutBlock(
          "key",
          "Chốt lens",
          "Nghịch lý cốt lõi của chương: STABILITY của nhà máy lại đến từ tính DYNAMIC & flexible của tổ chức. Một org tốt không phải org 'đóng khung hoàn hảo' mà là org liên tục được cập nhật cho 'relevant' — đúng tinh thần Lens của Topic 02.",
        ),
      ],
      keyTerms: [
        {
          term: "continuity",
          definition: "Lợi ích planning giúp chuẩn bị thay thế nhân sự khi cần.",
        },
        {
          term: "internal promotion",
          definition: "Ưu tiên xét đề bạt nội bộ khi cấu trúc thay đổi.",
        },
        {
          term: "long-term planning",
          definition: "Cập nhật cấu trúc theo kế hoạch dài hạn.",
        },
        {
          term: "organizational stability",
          definition:
            "Sự ổn định đến từ cấu trúc linh hoạt, dynamic và được planning tốt.",
        },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "What is the main goal of organization in a factory?",
      options: [
        {
          id: "a",
          text: "To maximize the number of managerial levels so every worker has many supervisors",
          isCorrect: false,
          rationale:
            "Cơ chế: slide khuyến nghị ít managerial levels, không tối đa hóa cấp quản lý. Bẫy: tưởng tổ chức càng nhiều tầng càng kiểm soát tốt. Khóa: organization nhằm tạo team-work để đạt orders với lowest cost.",
        },
        {
          id: "b",
          text: "To establish a team-work environment so orders are completed at the lowest cost",
          isCorrect: true,
          rationale:
            "Cơ chế: mục tiêu của organization in factory là tạo môi trường team-work để hoàn thành orders với chi phí thấp nhất. Bẫy: chỉ nhìn organization như sơ đồ reporting. Khóa: chart/cấu trúc chỉ là công cụ phục vụ goal này.",
        },
        {
          id: "c",
          text: "To completely eliminate every possible conflict forever",
          isCorrect: false,
          rationale:
            "Cơ chế: tổ chức tốt giảm conflicts và arising troubles, không hứa loại bỏ hoàn toàn. Bẫy: tuyệt đối hóa mục tiêu conflict reduction. Khóa: từ khóa đúng là reduce conflicts và improve co-operation.",
        },
        {
          id: "d",
          text: "To freeze the organization structure permanently after it is designed once",
          isCorrect: false,
          rationale:
            "Cơ chế: slide nhấn organization phải dynamic và luôn cập nhật. Bẫy: xem design như bản vẽ cố định mãi mãi. Khóa: relevant + dynamic mới là lens chính.",
        },
        {
          id: "e",
          text: "To increase headcount regardless of factory orders or operating cost",
          isCorrect: false,
          rationale:
            "Cơ chế: organization phục vụ orders và lowest cost, không phải tăng số người tự thân. Bẫy: nhầm quy mô nhân sự với hiệu quả tổ chức. Khóa: đo bằng phối hợp và cost, không bằng headcount.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Goal of organization in factory",
      takeaway:
        "Organization in factory tồn tại để tạo team-work, hoàn thành orders với chi phí thấp nhất.",
    },
    {
      id: "q02",
      stem: "Which statement best captures a 'relevant' and 'dynamic' organization?",
      options: [
        {
          id: "a",
          text: "There is one ideal structure that remains optimal for every factory forever",
          isCorrect: false,
          rationale:
            "Cơ chế: slide nói KHÔNG có cấu trúc lý tưởng cố định. Bẫy: tìm một best practice vĩnh viễn. Khóa: structure phải relevant với thực tế từng thời điểm.",
        },
        {
          id: "b",
          text: "A good organization is the most complex structure with the largest number of departments",
          isCorrect: false,
          rationale:
            "Cơ chế: relevant nghĩa là phù hợp yêu cầu, không phải phức tạp nhất. Bẫy: đồng nhất complexity với sophistication. Khóa: tổ chức tốt giảm trouble/conflict trong mức cost cho phép.",
        },
        {
          id: "c",
          text: "Dynamic means continuously replacing people, even when functions and needs have not changed",
          isCorrect: false,
          rationale:
            "Cơ chế: dynamic là cập nhật cấu trúc/functions theo thực tế, không phải thay người liên tục. Bẫy: hiểu 'động' thành biến động nhân sự. Khóa: cập nhật để giữ relevant.",
        },
        {
          id: "d",
          text: "A good organization fits the current reality and is continuously updated when conditions change",
          isCorrect: true,
          rationale:
            "Cơ chế: relevant = phù hợp thực tế; dynamic = luôn được cập nhật. Bẫy: tách hai từ này thành hai tiêu chí rời. Khóa: chúng đi cùng nhau để structure phục vụ operations.",
        },
        {
          id: "e",
          text: "A good organization never changes once the organization chart has been approved",
          isCorrect: false,
          rationale:
            "Cơ chế: chart chỉ là biểu diễn hiện tại, không khóa tổ chức vĩnh viễn. Bẫy: coi chart approved là endpoint. Khóa: organization planning yêu cầu implement & update.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Relevant and dynamic organization",
      takeaway:
        "Không có cấu trúc lý tưởng cố định; organization tốt phải relevant và dynamic.",
    },
    {
      id: "q03",
      stem: "Which sequence matches the organization design process in the slides?",
      options: [
        {
          id: "a",
          text: "Assign individuals → describe jobs → group work-elements → determine functions",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là thứ tự ngược, bắt đầu bằng người trước khi biết functions. Bẫy: phản xạ chọn người quen trước rồi mới chia việc. Khóa: design đi từ việc cần làm tới người cụ thể.",
        },
        {
          id: "b",
          text: "Determine functions → group work-elements → describe jobs → assign individuals",
          isCorrect: true,
          rationale:
            "Cơ chế: slide đưa sequence functions → group work-elements → describe jobs → assign individuals. Bẫy: học từng bước rời nên đảo jobs và functions. Khóa: functions là điểm xuất phát.",
        },
        {
          id: "c",
          text: "Buy equipment → assign individuals → determine functions → describe jobs",
          isCorrect: false,
          rationale:
            "Cơ chế: equipment không phải bước mở đầu trong organization design của slide. Bẫy: kéo tư duy process/equipment vào chương organization. Khóa: Topic 02 bắt đầu từ functions và work-elements.",
        },
        {
          id: "d",
          text: "Describe jobs → assign individuals → determine functions → group work-elements",
          isCorrect: false,
          rationale:
            "Cơ chế: không thể describe job đúng trước khi xác định functions/work-elements. Bẫy: thấy job description quen thuộc nên đặt lên đầu. Khóa: job description đến sau grouping.",
        },
        {
          id: "e",
          text: "Determine functions → assign individuals → group work-elements → describe jobs",
          isCorrect: false,
          rationale:
            "Cơ chế: assign individuals phải sau khi jobs đã được mô tả. Bẫy: chen bước gán người quá sớm. Khóa: nhóm việc và mô tả job trước, rồi mới gán người.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Organization design sequence",
      takeaway:
        "Organization design đi từ functions đến work-elements, job descriptions, rồi mới assign individuals.",
    },
    {
      id: "q04",
      stem: "Which statement correctly compares the two viewpoints in organization design?",
      options: [
        {
          id: "a",
          text: "Considering every factor is ideal but difficult to apply; focusing on flexibility is more practical",
          isCorrect: true,
          rationale:
            "Cơ chế: slide nêu view-point cân nhắc mọi yếu tố là lý tưởng nhưng khó áp dụng; flexibility thực tế hơn. Bẫy: nghĩ càng đủ yếu tố càng dễ triển khai. Khóa: relevant organization cần flexible.",
        },
        {
          id: "b",
          text: "Considering every factor is the easiest and most stable method in practice",
          isCorrect: false,
          rationale:
            "Cơ chế: chính slide nói cách này khó áp dụng trong thực tế. Bẫy: đồng nhất đầy đủ phân tích với dễ triển khai. Khóa: thực tế vận hành thường cần flexibility.",
        },
        {
          id: "c",
          text: "Focusing on flexibility means there is no plan and no organization requests",
          isCorrect: false,
          rationale:
            "Cơ chế: flexibility vẫn bám organization requests và operational requests. Bẫy: hiểu flexible là tùy tiện. Khóa: flexible là cách giữ structure relevant, không phải bỏ plan.",
        },
        {
          id: "d",
          text: "Both viewpoints reject mission, vision, and organization goals",
          isCorrect: false,
          rationale:
            "Cơ chế: organization requests vẫn bám mission/vision và org goals. Bẫy: tách design method khỏi mục tiêu công ty. Khóa: design luôn phục vụ goals.",
        },
        {
          id: "e",
          text: "The flexibility viewpoint requires a permanently fixed structure",
          isCorrect: false,
          rationale:
            "Cơ chế: flexibility chấp nhận non-stable structure để phù hợp thực tế. Bẫy: đảo nghĩa flexibility. Khóa: dynamic/relevant nghĩa là có thể cập nhật.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Two viewpoints in organization design",
      takeaway:
        "View-point thực tế hơn là giữ flexibility để organization luôn relevant.",
    },
    {
      id: "q05",
      stem: "What is the main purpose of an organization chart?",
      options: [
        {
          id: "a",
          text: "To calculate wages and replace all job descriptions",
          isCorrect: false,
          rationale:
            "Cơ chế: chart không được slide định nghĩa như công cụ tính lương hay thay job description. Bẫy: thấy chart có positions nên kéo sang payroll. Khóa: chart thể hiện structure và relationships.",
        },
        {
          id: "b",
          text: "To list machines and plant layouts used in the factory",
          isCorrect: false,
          rationale:
            "Cơ chế: machines/layout thuộc phần production system/facilities, không phải mục tiêu org chart. Bẫy: lẫn factory organization với physical layout. Khóa: chart là về people/functions/positions.",
        },
        {
          id: "c",
          text: "To satisfy a legal requirement regardless of management use",
          isCorrect: false,
          rationale:
            "Cơ chế: spec không nêu chart như nghĩa vụ pháp lý. Bẫy: xem chart như giấy tờ hành chính. Khóa: slide nêu lợi ích quản lý, training và planning.",
        },
        {
          id: "d",
          text: "To show the structure and relationships among functions or positions, supporting management, training, and planning",
          isCorrect: true,
          rationale:
            "Cơ chế: organization chart cho thấy structure, functions/positions/individuals và work relationships. Bẫy: chỉ nhớ hình cây mà quên tác dụng training/planning. Khóa: chart là công cụ đọc trách nhiệm và quan hệ.",
        },
        {
          id: "e",
          text: "To eliminate the need for supervisors, technicians, and production managers",
          isCorrect: false,
          rationale:
            "Cơ chế: chart xác nhận managers như supervisors/technicians/production managers, không loại bỏ họ. Bẫy: nghĩ minh bạch chart làm mất vai trò quản lý. Khóa: chart giúp xác định responsibility.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Organization chart purpose",
      takeaway:
        "Organization chart biểu diễn structure, positions/functions và work relationships để hỗ trợ management/training/planning.",
    },
    {
      id: "q06",
      stem: "According to the subordinate principle, how many subordinators should generally report to the same manager?",
      options: [
        {
          id: "a",
          text: "1–2 subordinators",
          isCorrect: false,
          rationale:
            "Cơ chế: 1–2 thấp hơn khoảng slide nêu, dễ tạo nhiều cấp quản lý không cần thiết. Bẫy: tưởng quản lý ít người thì luôn tốt. Khóa: span of control nên khoảng 4–8.",
        },
        {
          id: "b",
          text: "Exactly the same as the number of managerial levels",
          isCorrect: false,
          rationale:
            "Cơ chế: span of control và managerial levels là hai khái niệm khác nhau. Bẫy: lấy số cấp quản lý để làm số subordinators. Khóa: span là số người báo cáo cho cùng manager.",
        },
        {
          id: "c",
          text: "No limit; one manager can supervise any number of subordinators",
          isCorrect: false,
          rationale:
            "Cơ chế: slide đặt range vì monitoring và ability có giới hạn. Bẫy: xem manager như không có capacity constraint. Khóa: quá rộng thì giám sát yếu.",
        },
        {
          id: "d",
          text: "10–20 subordinators",
          isCorrect: false,
          rationale:
            "Cơ chế: 10–20 vượt khoảng 4–8 của slide. Bẫy: lấy số lớn vì muốn ít managerial levels. Khóa: ít cấp vẫn phải giữ span phù hợp.",
        },
        {
          id: "e",
          text: "4–8 subordinators",
          isCorrect: true,
          rationale:
            "Cơ chế: subordinate principle nêu số subordinators cùng một manager nên trong khoảng 4 đến 8. Bẫy: học lệch sang số managerial levels. Khóa: nhớ range 4–8 cho span of control.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Span of control range",
      takeaway:
        "Span of control theo slide: khoảng 4–8 subordinators cho cùng một manager.",
    },
    {
      id: "q07",
      stem: "Which statement correctly describes factors affecting the number of subordinators?",
      options: [
        {
          id: "a",
          text: "Higher subordinate ability can increase the number of subordinators, while more important monitoring tends to reduce it",
          isCorrect: true,
          rationale:
            "Cơ chế: cấp dưới càng giỏi/tự chủ thì manager có thể quản nhiều hơn; monitoring càng quan trọng thì phải giảm số. Bẫy: chỉ nhớ một chiều mà quên trade-off. Khóa: ability tăng span, monitoring giảm span.",
        },
        {
          id: "b",
          text: "Higher subordinate ability always reduces the number of subordinators",
          isCorrect: false,
          rationale:
            "Cơ chế: ability cao giúp tăng số subordinators vì ít cần can thiệp. Bẫy: đảo chiều ability. Khóa: người tự chủ giúp manager quản span rộng hơn.",
        },
        {
          id: "c",
          text: "More important monitoring should increase the number of subordinators",
          isCorrect: false,
          rationale:
            "Cơ chế: monitoring quan trọng thì manager cần ít người hơn để theo sát. Bẫy: nghĩ nhiều việc giám sát thì cần gom nhiều người cho một manager. Khóa: monitoring cao làm span hẹp lại.",
        },
        {
          id: "d",
          text: "Higher managerial levels usually have more direct subordinators than lower levels",
          isCorrect: false,
          rationale:
            "Cơ chế: cấp càng cao thường càng ít người báo cáo trực tiếp. Bẫy: thấy cấp cao quyền lớn nên nghĩ quản nhiều người hơn. Khóa: strategic level cần span hẹp hơn.",
        },
        {
          id: "e",
          text: "The number of subordinators is unrelated to ability, monitoring, managerial level, or regular problems",
          isCorrect: false,
          rationale:
            "Cơ chế: slide liệt kê đúng bốn yếu tố này. Bẫy: xem range 4–8 như con số cứng không cần bối cảnh. Khóa: range phải điều chỉnh theo factors.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Factors affecting span of control",
      takeaway:
        "Span of control phụ thuộc managerial level, regular problems, subordinate ability và monitoring.",
    },
    {
      id: "q08",
      stem: "Which is a valid basis for job division in the slides?",
      options: [
        {
          id: "a",
          text: "Logo color of each department",
          isCorrect: false,
          rationale:
            "Cơ chế: logo color không nằm trong 6 cơ sở job division. Bẫy: chọn đặc điểm dễ nhìn nhưng không liên quan work design. Khóa: bám functions/process/equipment/location/items/customers.",
        },
        {
          id: "b",
          text: "Employee seniority, regardless of function or process",
          isCorrect: false,
          rationale:
            "Cơ chế: seniority không được spec nêu là basis job division. Bẫy: kéo HR promotion logic sang job division. Khóa: chia việc theo cơ sở của công việc/thị trường, không theo tuổi nghề.",
        },
        {
          id: "c",
          text: "Family of items or customers such as domestic and export customers",
          isCorrect: true,
          rationale:
            "Cơ chế: items và customers đều là hai cơ sở hợp lệ trong 6 cơ sở. Bẫy: nghĩ chỉ functions mới được dùng để chia việc. Khóa: slide cho cả family of items và domestic/export customers.",
        },
        {
          id: "d",
          text: "Random seating order in the workshop",
          isCorrect: false,
          rationale:
            "Cơ chế: seating order ngẫu nhiên không phải cơ sở tổ chức job. Bẫy: nhầm physical arrangement tạm thời với organization design. Khóa: basis phải giúp quản lý work-elements.",
        },
        {
          id: "e",
          text: "Alphabetical order of employee names",
          isCorrect: false,
          rationale:
            "Cơ chế: alphabetical order không phản ánh functions, process, equipment, location, items hay customers. Bẫy: dùng tiêu chí hành chính thay cho tiêu chí công việc. Khóa: job division phải bám logic vận hành.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Bases of job division",
      takeaway:
        "6 cơ sở job division: functions, process, equipment, location, items, customers.",
    },
    {
      id: "q09",
      stem: "Which statement correctly distinguishes responsibility and authority?",
      options: [
        {
          id: "a",
          text: "Responsibility is appointed to managers, while authority is assigned to employees",
          isCorrect: false,
          rationale:
            "Cơ chế: câu này đảo định nghĩa. Bẫy: nhớ hai động từ assigned/appointed nhưng ghép sai. Khóa: responsibility được assigned; authority được appointed.",
        },
        {
          id: "b",
          text: "Responsibility is the assigned obligation to complete a task, while authority is the appointed right to decide and direct work",
          isCorrect: true,
          rationale:
            "Cơ chế: responsibility = nghĩa vụ hoàn thành task/job được giao; authority = quyền quyết định/điều hành được bổ nhiệm. Bẫy: coi hai khái niệm là một. Khóa: nghĩa vụ và quyền phải đi đôi.",
        },
        {
          id: "c",
          text: "Only formal authority exists; informal authority is not part of factory organization",
          isCorrect: false,
          rationale:
            "Cơ chế: slide nêu formal/appointed và informal authority. Bẫy: chỉ nhìn organization chart nên bỏ quan hệ phi chính thức. Khóa: informal authority đến từ knowledge, experience, goodwill.",
        },
        {
          id: "d",
          text: "Authority always belongs only to subordinators, not to management positions",
          isCorrect: false,
          rationale:
            "Cơ chế: authority gắn với vị trí quản lý và có hỗ trợ từ cấp dưới. Bẫy: lẫn 'support from subordinates' với 'authority belongs to subordinates'. Khóa: authority là quyền điều hành.",
        },
        {
          id: "e",
          text: "Responsibility and authority do not need to match for work to run well",
          isCorrect: false,
          rationale:
            "Cơ chế: trách nhiệm và quyền phải đi đôi thì job mới chạy. Bẫy: giao nghĩa vụ mà không trao quyền. Khóa: assigned responsibility cần appointed authority phù hợp.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Responsibility vs authority",
      takeaway:
        "Responsibility là nghĩa vụ được assigned; authority là quyền được appointed, gồm formal và informal.",
    },
    {
      id: "q10",
      stem: "A small start-up has few employees and simple reporting relationships. Which formal organization structure best fits this situation?",
      options: [
        {
          id: "a",
          text: "Matrix structure, because every small firm must have both project and functional managers",
          isCorrect: false,
          rationale:
            "Cơ chế: matrix dùng khi có dự án chéo phòng ban và quản lý kép. Bẫy: nghe matrix hiện đại nên chọn cho mọi công ty. Khóa: start-up nhỏ, reporting đơn giản hợp direct hơn.",
        },
        {
          id: "b",
          text: "Informal structure as the main designed structure",
          isCorrect: false,
          rationale:
            "Cơ chế: informal structure luôn tồn tại song song nhưng không phải lựa chọn thiết kế formal chính. Bẫy: công ty nhỏ có quan hệ thân nên gọi informal là structure chính. Khóa: formal design phù hợp là direct.",
        },
        {
          id: "c",
          text: "Direct structure",
          isCorrect: true,
          rationale:
            "Cơ chế: direct structure đơn giản nhất, phù hợp start-up/công ty nhỏ với vertical lines rõ. Bẫy: thấy direct cứng nên bỏ qua bối cảnh nhỏ. Khóa: size nhỏ và reporting đơn giản → direct.",
        },
        {
          id: "d",
          text: "Heavy matrix, because the project manager should dominate from day one",
          isCorrect: false,
          rationale:
            "Cơ chế: heavy matrix dành cho dự án lớn, project-based. Bẫy: áp quyền project manager cho bối cảnh chưa có dự án chéo lớn. Khóa: không dùng matrix khi reporting đơn giản.",
        },
        {
          id: "e",
          text: "Direct structure with consultation, because every tiny firm must add consultant, control, service, and operations groups",
          isCorrect: false,
          rationale:
            "Cơ chế: direct + consultation phổ biến ở hầu hết công ty nhưng có thể thừa cho start-up rất nhỏ. Bẫy: lấy cấu trúc phổ biến áp máy móc. Khóa: chọn structure theo quy mô và nhu cầu.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Choosing organization structure",
      takeaway:
        "Start-up nhỏ, ít nhân sự và reporting đơn giản thường hợp direct structure.",
    },
    {
      id: "q11",
      stem: "Which statement correctly distinguishes light and heavy matrix structures?",
      options: [
        {
          id: "a",
          text: "Light matrix gives the main power to the project manager; heavy matrix gives it to the functional manager",
          isCorrect: false,
          rationale:
            "Cơ chế: câu này đảo light/heavy. Bẫy: nghe 'heavy' tưởng functional hierarchy nặng hơn. Khóa: heavy matrix nghiêng quyền về project manager.",
        },
        {
          id: "b",
          text: "A matrix structure has only one manager, so light and heavy matrix are identical",
          isCorrect: false,
          rationale:
            "Cơ chế: matrix có quản lý kép theo functional và project. Bẫy: kéo tư duy direct structure vào matrix. Khóa: khác biệt light/heavy nằm ở quyền lực chính nghiêng về bên nào.",
        },
        {
          id: "c",
          text: "Matrix means there is no functional manager",
          isCorrect: false,
          rationale:
            "Cơ chế: functional manager là một chiều quản lý trong matrix. Bẫy: thấy project manager nổi bật nên xóa functional manager. Khóa: matrix = functional × project.",
        },
        {
          id: "d",
          text: "Light matrix keeps the main power with the functional manager for smaller projects; heavy matrix shifts it to the project manager for larger projects",
          isCorrect: true,
          rationale:
            "Cơ chế: light matrix functional-based; heavy matrix project-based. Bẫy: nhớ tên nhưng không gắn với quyền lực chính. Khóa: light → functional manager; heavy → project manager.",
        },
        {
          id: "e",
          text: "Heavy matrix is simply another name for informal authority",
          isCorrect: false,
          rationale:
            "Cơ chế: heavy matrix là formal matrix structure, không phải informal authority. Bẫy: chữ heavy làm người học nghĩ quyền không chính thức mạnh. Khóa: informal structure là mục riêng và không hiện trên chart.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "Light vs heavy matrix",
      takeaway:
        "Light matrix nghiêng quyền về functional manager; heavy matrix nghiêng quyền về project manager.",
    },
    {
      id: "q12",
      stem: "Which managerial action best reflects organization planning as a dynamic process?",
      options: [
        {
          id: "a",
          text: "Design the chart once and keep it fixed even when factory conditions change",
          isCorrect: false,
          rationale:
            "Cơ chế: organization planning xem structure là dynamic và phải update. Bẫy: coi chart là bản đóng khung. Khóa: stability đến từ flexible/dynamic organization.",
        },
        {
          id: "b",
          text: "Assume the organization automatically reaches targets without developing functions",
          isCorrect: false,
          rationale:
            "Cơ chế: tổ chức không tự đạt target; industrial engineers phải phát triển functions. Bẫy: tin rằng structure tự tạo performance. Khóa: con người phải phát triển functions để đạt target.",
        },
        {
          id: "c",
          text: "Eliminate all informal relationships because informal structure can never coexist with formal structure",
          isCorrect: false,
          rationale:
            "Cơ chế: informal structure luôn tồn tại song song và cần xét ảnh hưởng tới operations. Bẫy: nghĩ informal luôn phải bị xóa. Khóa: manager phải hiểu tác động của informal authority.",
        },
        {
          id: "d",
          text: "Continuously update the structure, develop functions through industrial engineers, and use flexibility to maintain stability",
          isCorrect: true,
          rationale:
            "Cơ chế: đây là đúng lens organization planning: dynamic update + develop functions + stability từ flexibility. Bẫy: tách planning khỏi triển khai thực tế. Khóa: org tốt = relevant + dynamic.",
        },
        {
          id: "e",
          text: "Define stability as never changing the organization under any condition",
          isCorrect: false,
          rationale:
            "Cơ chế: stability của nhà máy phụ thuộc tính linh hoạt & động của tổ chức. Bẫy: hiểu stability là bất động. Khóa: ổn định dài hạn đến từ khả năng cập nhật.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "Organization planning and dynamic structure",
      takeaway:
        "Organization tốt là relevant + dynamic: liên tục cập nhật structure, phát triển functions và giữ stability bằng flexibility.",
    },
  ],
  status: "ready",
  source:
    "Manufacturing Systems — slide 'Chapter 2 Organization Planning in Factory' (mục 2.1–2.4, 28 trang). Ebook Groover KHÔNG cover chủ đề organizational design (đã kiểm full-text); topic slide-only.",
};

const topic03: Chapter = {
  slug: "topic-03",
  order: 3,
  title: "Topic 03 — Process Design & Planning",
  bigIdea:
    "Thiết kế quy trình = trả lời 'làm ra sản phẩm BẰNG CÁCH NÀO?' — ở tầm hệ thống lẫn từng chi tiết.",
  bigIdeaPillars: [
    {
      label: "Tầng hệ thống",
      body: "Chọn LOẠI process trên phổ manual → mechanized → automated theo volume/quality/cost.",
    },
    {
      label: "Tầng chi tiết",
      body: "Lập process plan cho part: sequence (basic→secondary→enhance→finishing), route sheet, make-or-buy.",
    },
    {
      label: "Tự động hóa lập KH",
      body: "CAPP — retrieval (variant) vs generative.",
    },
    {
      label: "Tích hợp sớm",
      body: "Concurrent engineering / DFM — ~70% chi phí vòng đời quyết ở khâu design.",
    },
  ],
  learningObjectives: [
    "Phân biệt production process = processing (value activity) vs support activities (non-value nhưng cần); nêu các thành phần của manufacturing system.",
    "Liệt kê 5 bước implementation của process design và 4 impact factors (volume, item structure/standardization, quality, equipment).",
    "Phân biệt 3 process styles: manual / mechanized / automated theo phổ đánh đổi flexibility ↔ productivity ↔ cost; định nghĩa các automation term (NC/CNC/DNC/PLC/FMS/CAD/CAM).",
    "Mô tả processes in service: distribution/transportation (containerization), warehousing, POS, banking (MICR, ATM, e-banking).",
    "Định nghĩa process planning và scope của nó; giải thích route sheet dùng để làm gì (Groover 24.1).",
    "Mô tả processing sequence chuẩn cho một part: basic → secondary → property-enhancing → finishing; phân biệt net shape / near net shape.",
    "Giải thích process planning cho assemblies (quy mô → phương pháp; precedence; line balancing).",
    "Áp dụng make-or-buy decision: nêu các yếu tố và tính chi phí ẩn khi mua gây idle equipment (Example 24.1).",
    "Phân biệt CAPP retrieval (variant) vs generative; nêu benefits của CAPP.",
    "Giải thích concurrent engineering (vs traditional 'wall') và các elements (DFM/A, design for quality/cost/life cycle); nêu vài DFM/A guidelines.",
    "Giải thích advanced manufacturing planning (corporate-level, planning cho future products 2–10 năm).",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "'Làm ra sản phẩm bằng cách nào?' ở 3 tầng: (A) chọn LOẠI process ở tầm hệ thống; (B) lập process plan cho từng part; (C) tự động hóa & tích hợp chính việc lập kế hoạch. Bấm node để mở chi tiết.",
    nodes: [
      {
        id: "proc",
        label: "Process Design & Planning",
        group: "concept",
        sectionId: "s1",
        detail:
          "Làm ra sản phẩm bằng cách nào — ở tầm hệ thống lẫn từng part; khớp năng lực với yêu cầu ở chi phí thấp nhất.",
      },
      {
        id: "g_system",
        label: "A. Chọn LOẠI process (hệ thống)",
        group: "concept",
        parent: "proc",
        sectionId: "s1",
        detail:
          "Production process, 5 bước design, phân loại manual/mechanized/automated, processes in service.",
      },
      {
        id: "g_part",
        label: "B. Lập process plan cho part",
        group: "concept",
        parent: "proc",
        sectionId: "s5",
        detail:
          "Process planning, route sheet, processing sequence, assemblies, make-or-buy.",
      },
      {
        id: "g_auto",
        label: "C. Tự động hóa & tích hợp lập KH",
        group: "concept",
        parent: "proc",
        sectionId: "s9",
        detail:
          "CAPP, concurrent engineering/DFM, advanced manufacturing planning.",
      },
      {
        id: "t_prodproc",
        label: "Production process (value + support)",
        group: "term",
        parent: "g_system",
        sectionId: "s1",
        detail: "Processing = value; support activities = non-value nhưng cần.",
      },
      {
        id: "t_steps",
        label: "5 bước design + impact factors",
        group: "term",
        parent: "g_system",
        sectionId: "s2",
        detail:
          "Feasibility → selection → equipment → layout → planning; volume/structure/quality/equipment.",
      },
      {
        id: "t_class",
        label: "Manual / Mechanized / Automated",
        group: "term",
        parent: "g_system",
        sectionId: "s3",
        detail:
          "Phổ đánh đổi flexibility ↔ productivity ↔ cost; NC/CNC/DNC/PLC/FMS/CAD/CAM.",
      },
      {
        id: "t_service",
        label: "Processes in service",
        group: "term",
        parent: "g_system",
        sectionId: "s4",
        detail:
          "Distribution, warehousing, POS, banking (MICR/ATM/e-banking).",
      },
      {
        id: "t_planning",
        label: "Process planning + route sheet",
        group: "term",
        parent: "g_part",
        sectionId: "s5",
        detail: "Chọn process + sequence cho một part; ghi trên route sheet.",
      },
      {
        id: "t_sequence",
        label: "Processing sequence",
        group: "term",
        parent: "g_part",
        sectionId: "s6",
        detail:
          "Basic → secondary → property-enhancing → finishing; net/near-net shape.",
      },
      {
        id: "t_assembly",
        label: "Planning cho assemblies",
        group: "term",
        parent: "g_part",
        sectionId: "s7",
        detail: "Quy mô → phương pháp; precedence; line balancing.",
      },
      {
        id: "t_makebuy",
        label: "Make-or-buy decision",
        group: "term",
        parent: "g_part",
        sectionId: "s8",
        detail: "Cost là yếu tố chính; coi chừng idle-equipment cost ẩn.",
      },
      {
        id: "t_capp",
        label: "CAPP (retrieval / generative)",
        group: "term",
        parent: "g_auto",
        sectionId: "s9",
        detail: "Tự động hóa lập route sheet; variant vs generative.",
      },
      {
        id: "t_concurrent",
        label: "Concurrent engineering / DFM",
        group: "term",
        parent: "g_auto",
        sectionId: "s10",
        detail:
          "Phá 'bức tường' design–manufacturing; DFM/A, DFQ, DFC, DFLC.",
      },
      {
        id: "t_advanced",
        label: "Advanced manufacturing planning",
        group: "term",
        parent: "g_auto",
        sectionId: "s12",
        detail:
          "Corporate-level, planning cho future products 2–10 năm.",
      },
    ],
    edges: [
      { from: "proc", to: "g_system" },
      { from: "proc", to: "g_part" },
      { from: "proc", to: "g_auto" },
      { from: "g_system", to: "t_prodproc" },
      { from: "g_system", to: "t_steps" },
      { from: "g_system", to: "t_class" },
      { from: "g_system", to: "t_service" },
      { from: "g_part", to: "t_planning" },
      { from: "g_part", to: "t_sequence" },
      { from: "g_part", to: "t_assembly" },
      { from: "g_part", to: "t_makebuy" },
      { from: "g_auto", to: "t_capp" },
      { from: "g_auto", to: "t_concurrent" },
      { from: "g_auto", to: "t_advanced" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "Production process = Processing + Support activities",
      blocks: [
        flowBlock(
          "s1",
          "Manufacturing system & production process",
          "tree",
          [
            {
              id: "s1_sys",
              label: "Manufacturing system",
              group: "concept",
              detail:
                "Gồm: factory (layout, workshop); stages trong production process (processes, technologies, sequencing); production lines (machines, facilities); management & implementation (HMR).",
            },
            {
              id: "s1_value",
              label: "Processing (value activity)",
              group: "concept",
              parent: "s1_sys",
              detail:
                "Tạo hình/thân sản phẩm — thêm function cho sản phẩm. Đây là hoạt động TẠO GIÁ TRỊ.",
            },
            {
              id: "s1_support",
              label: "Support activities (non-value)",
              group: "concept",
              parent: "s1_sys",
              detail:
                "Maintenance & corrective, quality control, power supply, tools control & supply, materials/components transportation. Cần nhưng KHÔNG trực tiếp tạo giá trị.",
            },
          ],
          [
            { from: "s1_sys", to: "s1_value" },
            { from: "s1_sys", to: "s1_support" },
          ],
          "Production process = mọi work elements; tách rõ phần TẠO GIÁ TRỊ (processing) và phần HỖ TRỢ (non-value-added nhưng cần).",
        ),
        calloutBlock(
          "key",
          "Vì sao tách value/non-value",
          "Đây là nền tư duy lean: chỉ processing mới thêm giá trị cho khách; support activities là chi phí cần thiết phải quản để không phình. Nhìn quy trình bằng lăng kính value/non-value giúp future manager biết chỗ nào tối ưu được (slide 3.1).",
        ),
      ],
      keyTerms: [
        {
          term: "production process",
          definition:
            "Tập hợp work elements biến input thành output trong manufacturing system.",
        },
        {
          term: "processing",
          definition: "Value activity tạo hình/thêm function cho sản phẩm.",
        },
        {
          term: "support activities",
          definition:
            "Hoạt động cần thiết nhưng non-value như maintenance, QC, power supply, tools supply và transportation.",
        },
        {
          term: "manufacturing system",
          definition:
            "Hệ thống gồm factory, stages/processes, production lines, machines/facilities và management implementation.",
        },
        {
          term: "value/non-value activity",
          definition:
            "Cách tách hoạt động trực tiếp tạo giá trị khỏi hoạt động hỗ trợ cần kiểm soát chi phí.",
        },
      ],
    },
    {
      id: "s2",
      heading: "Process design: 5 bước + impact factors",
      blocks: [
        flowBlock(
          "s2",
          "5 bước implementation của process design",
          "horizontal",
          [
            {
              id: "s2_fin",
              label: "Financial feasibility",
              group: "concept",
              detail: "Kiểm tra tính khả thi tài chính cho các items.",
            },
            {
              id: "s2_sel",
              label: "Process selection",
              group: "concept",
              detail: "Chọn process trong mức relevant cost.",
            },
            {
              id: "s2_equip",
              label: "Equipment/machine",
              group: "concept",
              detail: "Chọn & đầu tư thiết bị/máy.",
            },
            {
              id: "s2_layout",
              label: "Facilities layout",
              group: "concept",
              detail: "Bố trí mặt bằng trong nhà máy.",
            },
            {
              id: "s2_plan",
              label: "Planning",
              group: "concept",
              detail: "Lập kế hoạch inventory, máy móc, nhân lực.",
            },
          ],
          [
            { from: "s2_fin", to: "s2_sel", label: "chọn" },
            { from: "s2_sel", to: "s2_equip", label: "đầu tư" },
            { from: "s2_equip", to: "s2_layout", label: "bố trí" },
            { from: "s2_layout", to: "s2_plan", label: "lập KH" },
          ],
          "Thiết kế quy trình đi theo thứ tự: khả thi tài chính trước, rồi mới chọn process, thiết bị, layout, và lập kế hoạch nguồn lực (slide 3.2).",
        ),
        comparisonBlock(
          "4 impact factors khi thiết kế process",
          ["Yếu tố", "Ảnh hưởng đến lựa chọn process"],
          [
            {
              label: "Quantity/volume",
              cells: [
                "Volume lớn → nghiêng về mechanized/automated; volume nhỏ → manual",
              ],
            },
            {
              label: "Item structure & standardization",
              cells: [
                "Sản phẩm chuẩn hóa cao → dễ tự động hóa; đa dạng/tùy biến → manual linh hoạt",
              ],
            },
            {
              label: "Quality of item",
              cells: [
                "Yêu cầu chất lượng cao/ổn định → máy móc cho consistency",
              ],
            },
            {
              label: "Equipment requirements",
              cells: [
                "Quyết định năng suất, độ chính xác và chi phí đầu tư",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "process design",
          definition:
            "Thiết kế cách sản phẩm được tạo ra qua feasibility, process, equipment, layout và planning.",
        },
        {
          term: "financial feasibility",
          definition: "Bước kiểm tra tính khả thi tài chính trước khi chọn process.",
        },
        {
          term: "process selection",
          definition: "Bước chọn process phù hợp trong relevant cost.",
        },
        {
          term: "facilities layout",
          definition: "Bố trí mặt bằng nhà máy sau khi chọn equipment/process.",
        },
        {
          term: "impact factors",
          definition:
            "Các yếu tố volume, standardization, quality và equipment chi phối lựa chọn process.",
        },
      ],
    },
    {
      id: "s3",
      heading: "Process classification: Manual / Mechanized / Automated",
      blocks: [
        comparisonBlock(
          "3 process styles (phổ đánh đổi)",
          ["Loại process", "Đặc điểm", "Ưu điểm", "Nhược điểm"],
          [
            {
              label: "Manual process",
              cells: [
                "Dùng nhiều employees để sản xuất",
                "Linh hoạt cao (SX phức tạp/đa dạng, vd construction)",
                "Năng suất thấp, phụ thuộc worker",
              ],
            },
            {
              label: "Mechanized process",
              cells: [
                "Dùng advanced machines & tools thay workers",
                "Năng suất cao hơn",
                "Chi phí lớn, cần kỹ thuật",
              ],
            },
            {
              label: "Automated process",
              cells: [
                "Dùng automated equipment (Robotics, NC, PLC, FMS, CAD/CAM, CNC, DNC…)",
                "High volume & reliability",
                "Đầu tư rất lớn, cần chuẩn hóa",
              ],
            },
          ],
        ),
        calloutBlock(
          "insight",
          "Phổ đánh đổi flexibility ↔ productivity ↔ cost",
          "Đi từ manual → mechanized → automated: năng suất & độ ổn định TĂNG, nhưng vốn đầu tư & yêu cầu chuẩn hóa cũng tăng, còn tính linh hoạt GIẢM. Không có mức 'tốt nhất' — chọn mức khớp volume/quality/cost (nối với Topic 01: fixed/programmable/flexible automation).",
        ),
        comparisonBlock(
          "Định nghĩa các automation term (chuẩn Groover)",
          ["Term", "Nghĩa"],
          [
            {
              label: "NC",
              cells: [
                "Numerical Control — điều khiển máy bằng chương trình lệnh số hóa",
              ],
            },
            {
              label: "CNC",
              cells: [
                "Computer Numerical Control — NC dùng máy tính chuyên dụng gắn tại máy",
              ],
            },
            {
              label: "DNC",
              cells: [
                "Distributed/Direct Numerical Control — nhiều máy NC nối & điều khiển bởi máy tính trung tâm",
              ],
            },
            {
              label: "PLC",
              cells: [
                "Programmable Logic Controller — bộ điều khiển logic lập trình được (discrete control)",
              ],
            },
            {
              label: "FMS",
              cells: [
                "Flexible Manufacturing System — hệ thống tự động sản xuất nhiều loại part, đổi nhanh",
              ],
            },
            {
              label: "CAD / CAM",
              cells: [
                "Computer-Aided Design / Manufacturing — máy tính hỗ trợ thiết kế / hỗ trợ manufacturing engineering (process planning, NC programming)",
              ],
            },
            {
              label: "Robotics",
              cells: [
                "Industrial robots thực hiện processing/assembly/material handling",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "manual process",
          definition:
            "Process dùng nhiều employees, linh hoạt nhưng năng suất thấp hơn.",
        },
        {
          term: "mechanized process",
          definition: "Process dùng advanced machines/tools thay workers.",
        },
        {
          term: "automated process",
          definition:
            "Process dùng automated equipment để đạt high volume/reliability.",
        },
        {
          term: "NC",
          definition: "Numerical Control — điều khiển máy bằng chương trình số hóa.",
        },
        {
          term: "CNC",
          definition: "Computer Numerical Control — NC dùng máy tính tại máy.",
        },
        {
          term: "DNC",
          definition:
            "Distributed/Direct Numerical Control — nhiều máy NC nối với máy tính trung tâm.",
        },
        {
          term: "PLC",
          definition: "Programmable Logic Controller cho discrete control.",
        },
        {
          term: "FMS",
          definition:
            "Flexible Manufacturing System sản xuất nhiều loại part và đổi nhanh.",
        },
        {
          term: "CAD",
          definition: "Computer-Aided Design — máy tính hỗ trợ thiết kế.",
        },
        {
          term: "CAM",
          definition:
            "Computer-Aided Manufacturing — máy tính hỗ trợ manufacturing engineering.",
        },
      ],
    },
    {
      id: "s4",
      heading: "Processes in service",
      blocks: [
        comparisonBlock(
          "Processes in service",
          ["Hệ thống dịch vụ", "Đặc điểm"],
          [
            {
              label: "Distribution & transportation",
              cells: [
                "Dùng containers (containerization) & reservation systems (vd đặt vé máy bay)",
              ],
            },
            {
              label: "Warehousing",
              cells: ["Hệ thống kho — lưu trữ hàng tạm trước khi phân phối"],
            },
            {
              label: "Point of sale (POS)",
              cells: [
                "Hệ thống bán hàng tại điểm giao dịch; ngày càng phổ biến",
              ],
            },
            {
              label: "Banking — check clearing",
              cells: [
                "Dùng MICR (magnetic-ink character recognition) đọc mã tài khoản; quy trình nhận dạng phức tạp; hard-copy vẫn cần để quản lý",
              ],
            },
            {
              label: "Banking — ATM / e-banking",
              cells: [
                "Giao dịch tự động qua ATM card + password, không cần nhân viên; rút tiền/thanh toán mọi nơi; e-banking ngày càng phổ biến",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Process design không chỉ cho manufacturing",
          "Tư duy thiết kế quy trình (biến input → output hiệu quả) áp cho cả dịch vụ. Nhiều dịch vụ hiện đại (POS, ATM, e-banking) chính là process được tự động hóa để tăng tốc & giảm phụ thuộc con người (slide 3.4).",
        ),
      ],
      keyTerms: [
        {
          term: "distribution & transportation",
          definition:
            "Dịch vụ phân phối/vận tải dùng process như containerization và reservation systems.",
        },
        {
          term: "containerization",
          definition: "Dùng containers để chuẩn hóa vận chuyển/phân phối.",
        },
        {
          term: "warehousing",
          definition: "Process kho lưu trữ hàng tạm trước khi phân phối.",
        },
        {
          term: "point of sale (POS)",
          definition: "Process bán hàng tại điểm giao dịch.",
        },
        {
          term: "MICR",
          definition:
            "Magnetic-ink character recognition dùng trong banking check clearing.",
        },
        {
          term: "ATM",
          definition:
            "Automated Teller Machine cho giao dịch tự động bằng card/password.",
        },
        {
          term: "e-banking",
          definition: "Banking process thực hiện qua kênh điện tử.",
        },
      ],
    },
    {
      id: "s5",
      heading: "Process planning & route sheet",
      blocks: [
        calloutBlock(
          "key",
          "Process planning là gì",
          "Process planning = xác định các manufacturing/assembly process PHÙ HỢP NHẤT và TRÌNH TỰ thực hiện để làm ra một part/product theo đúng design specs. Do manufacturing engineers (còn gọi industrial/production/process engineers) làm, dựa trên năng lực thiết bị hiện có (Groover p.704).",
        ),
        comparisonBlock(
          "Scope của process planning (các quyết định)",
          ["Quyết định", "Nội dung"],
          [
            {
              label: "Interpretation of design drawings",
              cells: [
                "Phân tích material, dimensions, tolerances, surface finish",
              ],
            },
            {
              label: "Choice of processes & sequence",
              cells: ["Chọn process nào & thứ tự; mô tả các bước"],
            },
            {
              label: "Choice of equipment",
              cells: ["Ưu tiên thiết bị sẵn có; nếu không thì mua/đầu tư"],
            },
            {
              label: "Choice of tooling",
              cells: ["Tools, dies, molds, fixtures, gages cho từng bước"],
            },
            {
              label: "Analysis of methods",
              cells: ["Bố trí nơi làm việc, thao tác cho manual operations"],
            },
            {
              label: "Work standards",
              cells: ["Đặt time standard cho từng operation"],
            },
            {
              label: "Cutting tools & conditions",
              cells: ["Chọn dao cắt & thông số cho machining"],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Route sheet",
          "Kết quả process planning ghi trên route sheet (operation sheet): liệt kê MỌI operation theo đúng thứ tự, mô tả ngắn, máy cụ thể, và tooling. Gọi 'route sheet' vì nó định nghĩa 'lộ trình' part phải đi qua trong nhà máy — là bản đối ứng của engineering drawing (một cho design, một cho manufacturing) (Groover p.705).",
        ),
      ],
      keyTerms: [
        {
          term: "process planning",
          definition:
            "Xác định process và sequence phù hợp để làm part/product theo design specs.",
        },
        {
          term: "manufacturing engineer",
          definition:
            "Người lập process plan, còn gọi industrial/production/process engineer.",
        },
        {
          term: "route sheet",
          definition:
            "Tài liệu liệt kê operation, sequence, machine và tooling cho part.",
        },
        {
          term: "operation sheet",
          definition: "Tên khác của route sheet trong process planning.",
        },
        {
          term: "tooling",
          definition:
            "Tools, dies, molds, fixtures và gages dùng trong từng operation.",
        },
      ],
    },
    {
      id: "s6",
      heading: "Processing sequence chuẩn cho một part",
      blocks: [
        flowBlock(
          "s6",
          "Trình tự gia công một part",
          "horizontal",
          [
            {
              id: "s6_basic",
              label: "Basic process",
              group: "concept",
              detail:
                "Tạo geometry ban đầu (casting, molding, rolling). Part thường tới nhà máy đã xong basic process.",
            },
            {
              id: "s6_sec",
              label: "Secondary processes",
              group: "concept",
              detail:
                "Biến geometry ban đầu → geometry cuối (vd machining sau casting; stamping sau rolling).",
            },
            {
              id: "s6_prop",
              label: "Property-enhancing",
              group: "concept",
              detail:
                "Cải thiện tính chất cơ/lý, KHÔNG đổi geometry (vd heat treatment). KHÔNG phải part nào cũng cần.",
            },
            {
              id: "s6_fin",
              label: "Finishing",
              group: "concept",
              detail:
                "Phủ bề mặt (electroplating, painting) — đẹp/chống ăn mòn. Nhiều part không cần.",
            },
          ],
          [
            { from: "s6_basic", to: "s6_sec", label: "định hình" },
            { from: "s6_sec", to: "s6_prop", label: "tính chất" },
            { from: "s6_prop", to: "s6_fin", label: "hoàn thiện" },
          ],
          "Trình tự điển hình. Property-enhancing & finishing là tùy chọn (nhiều part bỏ qua) (Groover Fig 24.2).",
        ),
        calloutBlock(
          "note",
          "Net shape / Near net shape",
          "Operation không cần gia công thứ cấp tiếp theo gọi net shape (vd plastic injection molding). Cần rất ít gia công thêm gọi near net shape (vd một số impression die forging). Càng gần net shape càng ít bước → rẻ hơn (Groover p.706).",
        ),
      ],
      keyTerms: [
        {
          term: "basic process",
          definition: "Process tạo geometry ban đầu của part.",
        },
        {
          term: "secondary process",
          definition: "Process biến geometry ban đầu thành geometry cuối.",
        },
        {
          term: "property-enhancing operation",
          definition: "Operation cải thiện tính chất nhưng không đổi geometry.",
        },
        {
          term: "finishing operation",
          definition: "Operation phủ/hoàn thiện bề mặt như painting/electroplating.",
        },
        {
          term: "net shape",
          definition: "Operation tạo part không cần gia công thứ cấp tiếp theo.",
        },
        {
          term: "near net shape",
          definition: "Operation tạo part chỉ cần rất ít gia công thêm.",
        },
      ],
    },
    {
      id: "s7",
      heading: "Process planning cho assemblies",
      blocks: [
        comparisonBlock(
          "Chọn phương pháp assembly theo quy mô",
          ["Quy mô sản xuất", "Phương pháp assembly"],
          [
            {
              label: "Số lượng nhỏ",
              cells: ["Assembly tại workstation đơn — 1 worker/team làm mọi task"],
            },
            {
              label: "Sản phẩm phức tạp, medium–high volume",
              cells: ["Manual assembly lines (Chương 15)"],
            },
            {
              label: "Sản phẩm đơn giản (~chục components), volume lớn",
              cells: ["Automated assembly systems"],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Precedence & line balancing",
          "Assembly luôn có precedence order (thứ tự bắt buộc), biểu diễn bằng precedence diagram. Với assembly line, process planning = phân bổ work elements vào từng station — gọi là line balancing (sẽ học kỹ ở các chương sau) (Groover p.707).",
        ),
      ],
      keyTerms: [
        {
          term: "assembly",
          definition: "Quá trình ghép components thành product/subassembly.",
        },
        {
          term: "precedence order",
          definition: "Thứ tự bắt buộc giữa các assembly tasks.",
        },
        {
          term: "precedence diagram",
          definition: "Sơ đồ biểu diễn precedence order.",
        },
        {
          term: "line balancing",
          definition: "Phân bổ work elements vào từng station trên assembly line.",
        },
        {
          term: "automated assembly system",
          definition: "Assembly system tự động cho sản phẩm đơn giản, volume lớn.",
        },
      ],
    },
    {
      id: "s8",
      heading: "Make-or-buy decision",
      blocks: [
        calloutBlock(
          "key",
          "Make hay Buy?",
          "Câu hỏi cốt lõi trong process planning: part này TỰ LÀM hay MUA ngoài? Nếu công ty không có thiết bị/năng lực → phải mua. Nếu làm được cả hai thì cost là yếu tố quan trọng nhất — nhưng phải tính cả chi phí ẩn (Groover p.708).",
        ),
        calcBlock(
          "Example 24.1 — bẫy chi phí ẩn khi mua",
          [
            {
              label: "Quote mua ngoài",
              expr: "$20 / unit (100 units)",
            },
            {
              label: "Chi phí tự làm (in-house)",
              expr: "$28 = raw $8 + labor $6 + overhead $9 (150%) + equip fixed $5",
            },
            {
              label: "Nhìn thô",
              expr: "$20 < $28 → tưởng nên MUA",
            },
            {
              label: "Nhưng fixed cost & overhead vẫn chịu dù máy idle",
              expr: "chi phí thực khi mua = $20 + $5 + $9 = $34",
            },
          ],
          "Chi phí mua thực = $34 > $28 tự làm",
          "$5 equipment fixed + $9 overhead là chi phí đã cam kết, không biến mất khi part được mua ngoài.",
          "Chỉ nên MUA nếu máy đó dùng làm việc khác có lợi hơn quote; nếu không, mua gây idle → tốn hơn tự làm (Groover p.709).",
        ),
        comparisonBlock(
          "Các yếu tố make-or-buy",
          ["Yếu tố", "Ảnh hưởng"],
          [
            {
              label: "Cost comparison",
              cells: [
                "Quan trọng nhất — nhưng phải tính chi phí ẩn (idle)",
              ],
            },
            {
              label: "Process có sẵn in-house?",
              cells: ["Không có năng lực → phải mua"],
            },
            {
              label: "Production quantity & product life",
              cells: ["Số lượng lớn & vòng đời dài → nghiêng MAKE; ít → BUY"],
            },
            {
              label: "Standard item?",
              cells: ["Hàng tiêu chuẩn (bolts, screws) → mua từ nhà cung cấp chuyên"],
            },
            {
              label: "Supplier reliability / alternative source",
              cells: [
                "Cần nguồn dự phòng & giao đúng hạn; peak demand có thể mua bổ sung",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "make-or-buy decision",
          definition: "Quyết định tự làm in-house hay mua ngoài một part.",
        },
        {
          term: "in-house production",
          definition: "Tự sản xuất part bằng năng lực/thiết bị của công ty.",
        },
        {
          term: "idle capacity cost",
          definition:
            "Chi phí ẩn khi mua ngoài làm thiết bị in-house nhàn rỗi nhưng fixed/overhead vẫn chịu.",
        },
        {
          term: "standard item",
          definition:
            "Item tiêu chuẩn như bolts/screws thường nên mua từ supplier chuyên.",
        },
      ],
    },
    {
      id: "s9",
      heading: "CAPP: Retrieval vs Generative",
      blocks: [
        comparisonBlock(
          "Hai kiểu CAPP",
          ["Kiểu CAPP", "Cách hoạt động", "Cơ sở"],
          [
            {
              label: "Retrieval (variant)",
              cells: [
                "Lưu sẵn route sheet chuẩn theo mã part; part mới → lấy plan mẫu rồi SỬA",
                "Dựa group technology (GT) code + part families",
              ],
            },
            {
              label: "Generative",
              cells: [
                "TẠO MỚI process plan từ đầu bằng logic như người lập kế hoạch",
                "Expert system: knowledge base + inference engine",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Vì sao cần CAPP & lợi ích",
          "Lập kế hoạch thủ công phụ thuộc kinh nghiệm từng người → plan không nhất quán; thợ lành nghề dần nghỉ hưu. CAPP giúp: chuẩn hóa & hợp lý hóa plan, tăng năng suất người lập, giảm lead time, route sheet dễ đọc, tích hợp với chương trình khác (cost, work standards) (Groover p.709–710).",
        ),
      ],
      keyTerms: [
        {
          term: "CAPP",
          definition: "Computer-Aided Process Planning — máy tính hỗ trợ lập process plan.",
        },
        {
          term: "retrieval (variant) CAPP",
          definition: "Lấy route sheet mẫu theo GT code rồi sửa cho part mới.",
        },
        {
          term: "generative CAPP",
          definition:
            "Tạo process plan mới bằng knowledge base và inference engine.",
        },
        {
          term: "group technology code",
          definition: "Mã GT dùng để nhận diện part family cho retrieval CAPP.",
        },
        {
          term: "expert system",
          definition:
            "Hệ thống tri thức mô phỏng logic người lập kế hoạch.",
        },
        {
          term: "inference engine",
          definition:
            "Bộ suy luận dùng knowledge base để tạo quyết định/process plan.",
        },
      ],
    },
    {
      id: "s10",
      heading: "Concurrent Engineering & DFM",
      blocks: [
        flowBlock(
          "s10",
          "Traditional 'wall' vs Concurrent engineering",
          "horizontal",
          [
            {
              id: "s10_trad",
              label: "Traditional (sequential)",
              group: "concept",
              detail:
                "Design engineering làm xong mới 'ném qua tường' cho manufacturing; ít cơ hội góp ý → thời gian ra thị trường dài.",
            },
            {
              id: "s10_wall",
              label: "'Bức tường'",
              group: "concept",
              detail:
                "Rào cản giữa design và manufacturing: thiết kế xong mới bắt đầu process planning.",
            },
            {
              id: "s10_conc",
              label: "Concurrent engineering",
              group: "concept",
              detail:
                "Manufacturing (và quality, vendors, khách) tham gia SỚM trong chu kỳ phát triển → rút ngắn thời gian ra thị trường.",
            },
          ],
          [
            { from: "s10_trad", to: "s10_wall", label: "tạo rào" },
            { from: "s10_wall", to: "s10_conc", label: "phá rào" },
          ],
          "Concurrent engineering phá 'bức tường' bằng cách tích hợp sớm design & manufacturing (Groover Fig 24.4).",
        ),
        calloutBlock(
          "key",
          "Elements & vì sao quan trọng",
          "Concurrent engineering gồm: (1) design for manufacturing & assembly (DFM/A), (2) design for quality, (3) design for cost (DFC), (4) design for life cycle (DFLC). Lý do cấp thiết: ~70% chi phí vòng đời sản phẩm bị quyết ngay ở khâu product design — quyết sai từ đầu thì manufacturing engineer khó cứu (Groover p.712–713).",
        ),
      ],
      keyTerms: [
        {
          term: "concurrent engineering",
          definition:
            "Cách tích hợp design và manufacturing sớm trong chu kỳ phát triển.",
        },
        {
          term: "design for manufacturing and assembly (DFM/A)",
          definition:
            "Thiết kế sản phẩm để dễ chế tạo và lắp ráp.",
        },
        {
          term: "design for quality",
          definition: "Thiết kế để đạt chất lượng ổn định.",
        },
        {
          term: "design for cost (DFC)",
          definition: "Thiết kế để kiểm soát chi phí toàn diện.",
        },
        {
          term: "design for life cycle",
          definition:
            "Thiết kế xét delivery, reliability, maintainability, serviceability và upgradeability.",
        },
      ],
    },
    {
      id: "s11",
      heading: "DFM/A guidelines",
      blocks: [
        comparisonBlock(
          "Một số DFM/A design guidelines",
          ["Guideline", "Lợi ích"],
          [
            {
              label: "Minimize số parts",
              cells: ["Ít part phải mua, giảm chi phí đặt hàng & lắp ráp"],
            },
            {
              label: "Dùng standard/commercial components",
              cells: [
                "Giảm công thiết kế; kiểm soát tồn kho tốt hơn; chiết khấu số lượng",
              ],
            },
            {
              label: "Dùng common parts across product lines",
              cells: ["Áp group technology; phát triển manufacturing cells"],
            },
            {
              label: "Design for ease of fabrication",
              cells: [
                "Dùng net/near-net shape; đơn giản geometry; tránh bề mặt mịn quá mức cần",
              ],
            },
            {
              label: "Tolerances trong process capability",
              cells: [
                "Tránh dung sai chặt hơn năng lực process → khỏi gia công thêm/scrap",
              ],
            },
            {
              label: "Modular design",
              cells: [
                "Mỗi subassembly 5–15 parts → dễ bảo trì, dễ lắp tự động, giảm tồn kho",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Design for cost & life cycle",
          "DFC mở rộng ra ngoài manufacturing: gồm cả inspection, purchasing, distribution, inventory, overhead. DFLC xét sản phẩm sau khi sản xuất: delivery, reliability, maintainability, serviceability, upgradeability — nhiều khách (vd chính phủ) tính cả life-cycle cost khi mua (Groover p.715–716).",
        ),
      ],
      keyTerms: [
        {
          term: "DFM/A guidelines",
          definition:
            "Các hướng dẫn thiết kế để part/product dễ manufacture và assemble.",
        },
        {
          term: "modular design",
          definition: "Thiết kế subassembly 5–15 parts để dễ bảo trì/lắp tự động.",
        },
        {
          term: "standard components",
          definition: "Components thương mại/chuẩn giúp giảm thiết kế và inventory.",
        },
        {
          term: "process capability",
          definition:
            "Năng lực process phải phù hợp tolerance để tránh gia công thêm/scrap.",
        },
      ],
    },
    {
      id: "s12",
      heading: "Advanced manufacturing planning",
      blocks: [
        calloutBlock(
          "key",
          "Hoạch định cho tương lai",
          "Advanced manufacturing planning = hoạt động ở corporate-level, khác process planning: nó lo cho các sản phẩm trong kế hoạch DÀI HẠN (tương lai 2–10 năm), chưa được thiết kế. Làm việc với sales/marketing/design để dự báo sản phẩm tương lai → xác định production resources/technologies/facilities cần có; so sánh thiết bị hiện tại với nhu cầu tương lai để quyết đầu tư công nghệ/nhà xưởng mới (Groover p.716).",
        ),
      ],
      keyTerms: [
        {
          term: "advanced manufacturing planning",
          definition:
            "Corporate-level planning cho future products trong 2–10 năm.",
        },
        {
          term: "corporate-level planning",
          definition:
            "Hoạch định cấp công ty về resources, technologies và facilities tương lai.",
        },
        {
          term: "technology forecasting",
          definition:
            "Dự báo công nghệ cần có để phục vụ sản phẩm tương lai.",
        },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "Which statement correctly distinguishes value and support activities in a production process?",
      options: [
        {
          id: "a",
          text: "Transportation and quality control are always the main value-adding activities because they happen inside the factory",
          isCorrect: false,
          rationale:
            "Cơ chế: transportation và quality control thuộc support activities; chúng cần nhưng không trực tiếp tạo function/hình dạng sản phẩm. Bẫy: thấy hoạt động nằm trong factory nên gọi value-added. Khóa: value activity chính là processing.",
        },
        {
          id: "b",
          text: "Processing is the value activity that creates the product form/function; maintenance, QC, power, tools supply, and transportation are support activities",
          isCorrect: true,
          rationale:
            "Cơ chế: processing tạo giá trị trực tiếp; support activities cần để hệ thống chạy nhưng non-value. Bẫy: bỏ qua support vì non-value. Khóa: non-value không có nghĩa là vô ích, mà là chi phí cần quản.",
        },
        {
          id: "c",
          text: "Support activities are useless and should be removed completely from every factory",
          isCorrect: false,
          rationale:
            "Cơ chế: support activities non-value nhưng cần thiết, như maintenance/QC/power. Bẫy: nghe non-value rồi muốn xóa hết. Khóa: mục tiêu là quản và tối ưu, không phải loại bỏ mù quáng.",
        },
        {
          id: "d",
          text: "Processing is non-value because machines, not customers, perform it",
          isCorrect: false,
          rationale:
            "Cơ chế: value được xét theo việc thêm function/hình dạng cho sản phẩm, không theo ai làm. Bẫy: nhầm người thực hiện với giá trị tạo ra. Khóa: processing là phần tạo giá trị.",
        },
        {
          id: "e",
          text: "Only paperwork is value-added because it defines the process plan",
          isCorrect: false,
          rationale:
            "Cơ chế: planning/route sheet hướng dẫn manufacturing nhưng không trực tiếp biến đổi sản phẩm. Bẫy: thấy kế hoạch quan trọng nên gọi value-added. Khóa: value-added nằm ở processing.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Value vs support activities",
      takeaway:
        "Processing tạo giá trị; support activities non-value nhưng cần và phải được quản chặt.",
    },
    {
      id: "q02",
      stem: "Which sequence matches the implementation steps of process design?",
      options: [
        {
          id: "a",
          text: "Equipment purchase → facilities layout → financial feasibility → process selection → planning",
          isCorrect: false,
          rationale:
            "Cơ chế: mua equipment trước feasibility là đảo thứ tự. Bẫy: bắt đầu từ máy vì process design nghe như chọn máy. Khóa: phải kiểm financial feasibility trước.",
        },
        {
          id: "b",
          text: "Facilities layout → equipment selection → financial feasibility → planning → process selection",
          isCorrect: false,
          rationale:
            "Cơ chế: layout chỉ hợp lý sau khi biết process và equipment. Bẫy: vẽ mặt bằng trước khi biết cách sản xuất. Khóa: process selection đứng trước equipment/layout.",
        },
        {
          id: "c",
          text: "Planning → facilities layout → equipment → process selection → financial feasibility",
          isCorrect: false,
          rationale:
            "Cơ chế: đây gần như thứ tự ngược. Bẫy: lấy planning làm điểm bắt đầu vì nó quen thuộc. Khóa: planning nguồn lực đến sau khi đã chọn process/equipment/layout.",
        },
        {
          id: "d",
          text: "Financial feasibility → process selection → equipment/machine → facilities layout → planning",
          isCorrect: true,
          rationale:
            "Cơ chế: đúng sequence slide 3.2. Bẫy: bỏ qua bước feasibility hoặc đưa layout lên trước. Khóa: tiền khả thi trước, rồi mới chọn process và resources.",
        },
        {
          id: "e",
          text: "Process selection → financial feasibility → planning → equipment/machine → facilities layout",
          isCorrect: false,
          rationale:
            "Cơ chế: feasibility phải kiểm trước process selection; planning không đứng trước equipment/layout. Bẫy: chọn process theo ý thích rồi mới xem tiền. Khóa: design phải đi theo logic cost trước.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Process design steps",
      takeaway:
        "Process design implementation: financial feasibility → process selection → equipment → facilities layout → planning.",
    },
    {
      id: "q03",
      stem: "Which statement best describes the tradeoff among manual, mechanized, and automated processes?",
      options: [
        {
          id: "a",
          text: "Manual is flexible but lower-productivity; automated fits high volume and reliability but requires high investment and standardization",
          isCorrect: true,
          rationale:
            "Cơ chế: đi manual → mechanized → automated thì productivity/reliability tăng, cost/standardization tăng, flexibility giảm. Bẫy: chọn mức tự động hóa như luôn tốt nhất. Khóa: chọn process theo fit với volume, quality và cost.",
        },
        {
          id: "b",
          text: "Automated processes are always best because they are the most flexible for any product variety",
          isCorrect: false,
          rationale:
            "Cơ chế: automated thường cần chuẩn hóa và vốn lớn; flexibility không tự động cao. Bẫy: tuyệt đối hóa automation. Khóa: high variety/low volume có thể hợp manual hơn.",
        },
        {
          id: "c",
          text: "Manual processes have no advantage and should be eliminated whenever possible",
          isCorrect: false,
          rationale:
            "Cơ chế: manual có lợi thế flexibility cho sản phẩm phức tạp/đa dạng. Bẫy: đồng nhất manual với lạc hậu. Khóa: process tốt là process phù hợp.",
        },
        {
          id: "d",
          text: "Mechanized process means no machines are used; only human employees perform the work",
          isCorrect: false,
          rationale:
            "Cơ chế: mechanized dùng advanced machines/tools thay workers. Bẫy: đảo manual với mechanized. Khóa: manual dùng nhiều employees; mechanized dùng máy nhiều hơn.",
        },
        {
          id: "e",
          text: "Automated processes require the lowest investment because robots replace all planning",
          isCorrect: false,
          rationale:
            "Cơ chế: automated process đòi hỏi đầu tư lớn và vẫn cần planning. Bẫy: nghĩ thay worker là giảm mọi cost ngay. Khóa: phải xét relevant cost và standardization.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Manual vs mechanized vs automated tradeoff",
      takeaway:
        "Không có process style tốt nhất tuyệt đối; process phải khớp volume, quality, cost và flexibility.",
    },
    {
      id: "q04",
      stem: "Which definition of an automation term is correct?",
      options: [
        {
          id: "a",
          text: "DNC means a single NC machine with a dedicated computer attached at the machine",
          isCorrect: false,
          rationale:
            "Cơ chế: mô tả này là CNC, không phải DNC. Bẫy: lẫn chữ Computer/Direct/Distributed. Khóa: DNC nối nhiều máy NC với máy tính trung tâm.",
        },
        {
          id: "b",
          text: "FMS is a design software used only for drawing product geometry",
          isCorrect: false,
          rationale:
            "Cơ chế: FMS là Flexible Manufacturing System, không phải CAD software. Bẫy: thấy flexible và system rồi gán cho design software. Khóa: FMS là hệ thống sản xuất tự động nhiều loại part.",
        },
        {
          id: "c",
          text: "CNC means Computer Numerical Control: NC using a dedicated computer at the machine",
          isCorrect: true,
          rationale:
            "Cơ chế: CNC là NC có máy tính chuyên dụng tại máy. Bẫy: đảo CNC với DNC. Khóa: CNC local computer; DNC central computer/network.",
        },
        {
          id: "d",
          text: "PLC is a CAD tool for drawing parts in three dimensions",
          isCorrect: false,
          rationale:
            "Cơ chế: PLC là Programmable Logic Controller cho discrete control. Bẫy: gán mọi chữ programmable/computer vào CAD. Khóa: CAD thiết kế; PLC điều khiển logic.",
        },
        {
          id: "e",
          text: "CAM stands for Computer-Aided Marketing",
          isCorrect: false,
          rationale:
            "Cơ chế: trong manufacturing, CAM là Computer-Aided Manufacturing. Bẫy: đoán acronym theo nghĩa business. Khóa: CAM hỗ trợ manufacturing engineering như process planning/NC programming.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Automation term definitions",
      takeaway:
        "CNC = Computer Numerical Control; DNC = nhiều máy NC nối trung tâm; PLC = logic controller; FMS/CAD/CAM có vai trò riêng.",
    },
    {
      id: "q05",
      stem: "In the service-process examples, where is MICR used?",
      options: [
        {
          id: "a",
          text: "Container handling in distribution and transportation",
          isCorrect: false,
          rationale:
            "Cơ chế: containerization thuộc distribution/transportation, không phải MICR. Bẫy: thấy đều là process service nên gán lẫn. Khóa: MICR nằm trong banking check clearing.",
        },
        {
          id: "b",
          text: "Point-of-sale barcode scanning only",
          isCorrect: false,
          rationale:
            "Cơ chế: POS là hệ thống bán hàng tại điểm giao dịch; MICR không phải POS. Bẫy: nhầm mọi nhận dạng tự động với POS. Khóa: MICR đọc ký tự mực từ trên check.",
        },
        {
          id: "c",
          text: "ATM cash withdrawal with card and password",
          isCorrect: false,
          rationale:
            "Cơ chế: ATM là banking automation khác, không phải check clearing bằng MICR. Bẫy: thấy đều trong banking nên đồng nhất. Khóa: ATM giao dịch tự động; MICR xử lý checks.",
        },
        {
          id: "d",
          text: "Warehouse storage and retrieval only",
          isCorrect: false,
          rationale:
            "Cơ chế: warehousing là process lưu trữ/phân phối, spec không gắn MICR vào kho. Bẫy: gán công nghệ nhận dạng vào kho dù slide đặt ở banking. Khóa: bám ví dụ slide.",
        },
        {
          id: "e",
          text: "Banking check clearing using magnetic-ink character recognition",
          isCorrect: true,
          rationale:
            "Cơ chế: MICR = magnetic-ink character recognition dùng đọc mã tài khoản trong check clearing. Bẫy: lẫn MICR với ATM/e-banking. Khóa: MICR thuộc banking check clearing.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Processes in service / MICR",
      takeaway:
        "MICR dùng trong banking check clearing; ATM/e-banking là các process banking khác.",
    },
    {
      id: "q06",
      stem: "Which statement correctly defines process planning and route sheets?",
      options: [
        {
          id: "a",
          text: "Process planning is corporate-level forecasting for products 2–10 years in the future",
          isCorrect: false,
          rationale:
            "Cơ chế: đó là advanced manufacturing planning, không phải process planning cho part hiện tại. Bẫy: lẫn hai tầng planning. Khóa: process planning chọn process/sequence cho part cụ thể.",
        },
        {
          id: "b",
          text: "Process planning determines suitable processes and their sequence for a part; the result is recorded on a route sheet",
          isCorrect: true,
          rationale:
            "Cơ chế: Groover định nghĩa process planning là chọn manufacturing/assembly processes và sequence; route sheet ghi operation, máy, tooling. Bẫy: coi route sheet chỉ là bản vẽ design. Khóa: drawing nói sản phẩm là gì; route sheet nói làm như thế nào.",
        },
        {
          id: "c",
          text: "A route sheet is the same as an engineering drawing and contains only product geometry",
          isCorrect: false,
          rationale:
            "Cơ chế: route sheet là bản manufacturing route, không phải engineering drawing. Bẫy: thấy đều là tài liệu kỹ thuật nên đồng nhất. Khóa: route sheet chứa operations/sequence/machine/tooling.",
        },
        {
          id: "d",
          text: "Process planning ignores existing equipment because every new part always requires new machines",
          isCorrect: false,
          rationale:
            "Cơ chế: planner ưu tiên equipment sẵn có nếu phù hợp. Bẫy: nghĩ part mới luôn kéo theo đầu tư mới. Khóa: lựa chọn equipment là một scope của process planning.",
        },
        {
          id: "e",
          text: "Route sheets are used only by sales to quote customers, not by manufacturing",
          isCorrect: false,
          rationale:
            "Cơ chế: route sheet định nghĩa lộ trình part trong nhà máy cho manufacturing. Bẫy: thấy có cost/time nên kéo sang sales. Khóa: route sheet phục vụ operations.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Process planning definition / route sheet",
      takeaway:
        "Process planning trả lời part được làm bằng process nào, theo thứ tự nào; route sheet ghi lộ trình manufacturing.",
    },
    {
      id: "q07",
      stem: "Which processing sequence is the typical order for a part?",
      options: [
        {
          id: "a",
          text: "Finishing → property-enhancing → secondary → basic",
          isCorrect: false,
          rationale:
            "Cơ chế: finishing thường ở cuối, không mở đầu. Bẫy: nhìn bề mặt sản phẩm trước nên kéo finishing lên đầu. Khóa: basic tạo geometry ban đầu trước.",
        },
        {
          id: "b",
          text: "Secondary → basic → finishing → property-enhancing",
          isCorrect: false,
          rationale:
            "Cơ chế: secondary biến geometry ban đầu, nên không thể trước basic. Bẫy: nhớ secondary là quan trọng nên đặt đầu. Khóa: basic → secondary.",
        },
        {
          id: "c",
          text: "Every part must go through all four steps, including property-enhancing and finishing",
          isCorrect: false,
          rationale:
            "Cơ chế: property-enhancing và finishing là tùy chọn, nhiều part bỏ qua. Bẫy: xem sequence điển hình như bắt buộc tuyệt đối. Khóa: route sheet phụ thuộc part/design specs.",
        },
        {
          id: "d",
          text: "Basic → secondary → property-enhancing → finishing, with the last two optional for many parts",
          isCorrect: true,
          rationale:
            "Cơ chế: đúng sequence Groover Fig 24.2; property-enhancing và finishing không phải lúc nào cũng cần. Bẫy: quên tính optional. Khóa: basic tạo ban đầu, secondary tạo cuối, rồi mới tăng tính chất/bề mặt nếu cần.",
        },
        {
          id: "e",
          text: "Property-enhancing must always change the geometry before secondary processing",
          isCorrect: false,
          rationale:
            "Cơ chế: property-enhancing cải thiện tính chất cơ/lý, không đổi geometry. Bẫy: chữ operation làm tưởng luôn cắt/gia công hình dạng. Khóa: geometry do basic/secondary xử lý.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Processing sequence order",
      takeaway:
        "Sequence điển hình: basic → secondary → property-enhancing → finishing; hai bước cuối là optional.",
    },
    {
      id: "q08",
      stem: "A supplier quotes $20/unit for 100 units. In-house cost is $28/unit: raw $8 + labor $6 + overhead $9 + equipment fixed $5. If buying causes the equipment to be idle, what is the real cost per unit of buying?",
      options: [
        {
          id: "a",
          text: "$20/unit",
          isCorrect: false,
          rationale:
            "Cơ chế: $20 chỉ là supplier quote. Bẫy: nhìn quote thấp hơn $28 rồi kết luận buy. Khóa: idle equipment làm fixed cost và overhead vẫn chịu.",
        },
        {
          id: "b",
          text: "$28/unit",
          isCorrect: false,
          rationale:
            "Cơ chế: $28 là chi phí tự làm in-house, không phải chi phí mua thực khi equipment idle. Bẫy: lấy số in-house làm đáp án buy. Khóa: chi phí mua thực phải cộng quote với chi phí cam kết còn lại.",
        },
        {
          id: "c",
          text: "$34/unit",
          isCorrect: true,
          rationale:
            "Cơ chế: real buy cost = $20 quote + $5 equipment fixed + $9 overhead = $34. Bẫy: tưởng fixed/overhead biến mất khi mua ngoài. Khóa: nếu equipment idle, committed costs vẫn ở lại.",
        },
        {
          id: "d",
          text: "$25/unit",
          isCorrect: false,
          rationale:
            "Cơ chế: $25 = $20 + $5, chỉ cộng equipment fixed mà bỏ overhead $9. Bẫy: nhớ có idle cost nhưng thiếu overhead. Khóa: Example 24.1 phải cộng cả $5 và $9.",
        },
        {
          id: "e",
          text: "$29/unit",
          isCorrect: false,
          rationale:
            "Cơ chế: $29 = $20 + $9, chỉ cộng overhead mà bỏ equipment fixed $5. Bẫy: nhớ overhead vẫn chịu nhưng quên fixed equipment. Khóa: fixed + overhead cùng không biến mất.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "Make-or-buy hidden cost",
      takeaway:
        "Quote $20 không đủ: nếu mua làm máy idle, real cost = $20 + $5 + $9 = $34, cao hơn $28 tự làm.",
    },
    {
      id: "q09",
      stem: "Which statement correctly distinguishes retrieval (variant) CAPP from generative CAPP?",
      options: [
        {
          id: "a",
          text: "Retrieval CAPP retrieves a standard route sheet using a GT code and modifies it; generative CAPP creates a new plan using a knowledge base and inference engine",
          isCorrect: true,
          rationale:
            "Cơ chế: retrieval/variant dựa plan mẫu và GT code; generative tạo plan mới bằng expert-system logic. Bẫy: nhầm cả hai vì đều dùng computer. Khóa: retrieval = lấy rồi sửa; generative = sinh mới.",
        },
        {
          id: "b",
          text: "Generative CAPP only copies old route sheets, while retrieval CAPP creates plans from scratch",
          isCorrect: false,
          rationale:
            "Cơ chế: câu này đảo hai loại. Bẫy: nghe generative nhưng hiểu thành copy. Khóa: generative mới là tạo từ đầu.",
        },
        {
          id: "c",
          text: "Retrieval CAPP does not use part families or group technology codes",
          isCorrect: false,
          rationale:
            "Cơ chế: retrieval CAPP dựa GT code và part families. Bẫy: bỏ nền tảng variant system. Khóa: GT code giúp tìm plan mẫu.",
        },
        {
          id: "d",
          text: "CAPP is only useful for payroll and never affects route sheets",
          isCorrect: false,
          rationale:
            "Cơ chế: CAPP trực tiếp tạo/chuẩn hóa route sheet. Bẫy: kéo computer system sang admin/payroll. Khóa: CAPP = Computer-Aided Process Planning.",
        },
        {
          id: "e",
          text: "Both retrieval and generative CAPP eliminate the need for any manufacturing knowledge",
          isCorrect: false,
          rationale:
            "Cơ chế: generative cần knowledge base; retrieval cần plan families. Bẫy: nghĩ automation xóa knowledge. Khóa: CAPP đóng gói/chuẩn hóa knowledge, không làm nó biến mất.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "CAPP retrieval vs generative",
      takeaway:
        "Retrieval CAPP lấy plan mẫu theo GT code rồi sửa; generative CAPP sinh plan mới từ knowledge base/inference engine.",
    },
    {
      id: "q10",
      stem: "What is the main idea of concurrent engineering compared with the traditional 'wall' approach?",
      options: [
        {
          id: "a",
          text: "Design must finish completely before manufacturing is allowed to give any feedback",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là traditional sequential wall, không phải concurrent engineering. Bẫy: xem handoff tuần tự là kỷ luật tốt. Khóa: concurrent phá wall bằng involvement sớm.",
        },
        {
          id: "b",
          text: "The wall between design and manufacturing is useful because it prevents manufacturability feedback",
          isCorrect: false,
          rationale:
            "Cơ chế: wall là vấn đề làm time-to-market dài và giảm cơ hội góp ý. Bẫy: nghĩ tách phòng ban giúp chuyên môn hóa là đủ. Khóa: manufacturing cần tham gia sớm.",
        },
        {
          id: "c",
          text: "Concurrent engineering means the same sequential process is simply done faster with no cross-functional input",
          isCorrect: false,
          rationale:
            "Cơ chế: concurrent không chỉ tăng tốc tuần tự; nó tích hợp functions sớm. Bẫy: hiểu concurrent như speed-up schedule. Khóa: bản chất là cross-functional early involvement.",
        },
        {
          id: "d",
          text: "Manufacturing, quality, vendors, and customers can participate early in product development to reduce time-to-market",
          isCorrect: true,
          rationale:
            "Cơ chế: concurrent engineering đưa manufacturing và stakeholders vào sớm để phá wall. Bẫy: chỉ nhìn nó như meeting nhiều hơn. Khóa: mục tiêu là manufacturability tốt hơn và time-to-market ngắn hơn.",
        },
        {
          id: "e",
          text: "Concurrent engineering forbids design for manufacturing and assembly",
          isCorrect: false,
          rationale:
            "Cơ chế: DFM/A là một element của concurrent engineering. Bẫy: đảo hoàn toàn nội dung. Khóa: concurrent engineering bao gồm DFM/A, DFQ, DFC, DFLC.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Concurrent engineering vs traditional",
      takeaway:
        "Concurrent engineering phá 'wall' bằng cách đưa manufacturing/stakeholders vào sớm để giảm time-to-market.",
    },
    {
      id: "q11",
      stem: "Which statement best reflects the DFM/A insight from Groover?",
      options: [
        {
          id: "a",
          text: "Most product life-cycle cost is decided after production starts, so early design choices matter little",
          isCorrect: false,
          rationale:
            "Cơ chế: Groover nêu khoảng 70% life-cycle cost bị quyết ở product design. Bẫy: tưởng manufacturing stage mới quyết định phần lớn cost. Khóa: DFM/A phải vào sớm.",
        },
        {
          id: "b",
          text: "The best guideline is to make every surface as smooth as possible, regardless of functional need",
          isCorrect: false,
          rationale:
            "Cơ chế: DFM/A khuyên tránh surface finish quá mức cần thiết. Bẫy: nghĩ chất lượng cao nhất luôn tốt nhất. Khóa: over-spec làm tăng cost/gia công.",
        },
        {
          id: "c",
          text: "Modular design should avoid any standard components because standardization prevents assembly",
          isCorrect: false,
          rationale:
            "Cơ chế: guideline khuyến khích standard/commercial components và common parts. Bẫy: nghĩ tiêu chuẩn hóa làm mất linh hoạt. Khóa: standardization giúp cost và inventory.",
        },
        {
          id: "d",
          text: "Tolerances should always be tighter than process capability to guarantee quality",
          isCorrect: false,
          rationale:
            "Cơ chế: tolerance vượt process capability gây gia công thêm/scrap. Bẫy: đồng nhất tighter tolerance với tốt hơn. Khóa: tolerance phải trong capability.",
        },
        {
          id: "e",
          text: "About 70% of life-cycle cost is committed in product design, so DFM/A should be integrated early; modular subassemblies often target 5–15 parts",
          isCorrect: true,
          rationale:
            "Cơ chế: đúng insight Groover: cost bị khóa sớm ở design, nên DFM/A phải xuất hiện sớm; modular 5–15 parts là guideline. Bẫy: nhớ guideline nhưng quên lý do kinh tế. Khóa: design quyết định manufacturability và cost.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "DFM/A insight",
      takeaway:
        "DFM/A phải tham gia sớm vì design quyết định phần lớn life-cycle cost; guideline như modular 5–15 parts giúp giảm cost/lắp ráp.",
    },
    {
      id: "q12",
      stem: "Which statement correctly describes advanced manufacturing planning?",
      options: [
        {
          id: "a",
          text: "It is the route sheet for a current part already released to production",
          isCorrect: false,
          rationale:
            "Cơ chế: route sheet thuộc process planning cho part hiện tại. Bẫy: lẫn process planning với advanced manufacturing planning. Khóa: advanced planning nhìn tương lai 2–10 năm.",
        },
        {
          id: "b",
          text: "It is short-term inventory planning for this week's production schedule only",
          isCorrect: false,
          rationale:
            "Cơ chế: đây gần production/logistics planning ngắn hạn, không phải corporate-level future planning. Bẫy: thấy chữ planning nên chọn schedule. Khóa: advanced planning là dài hạn.",
        },
        {
          id: "c",
          text: "It is corporate-level planning for future products 2–10 years ahead, identifying needed technologies, resources, and facilities",
          isCorrect: true,
          rationale:
            "Cơ chế: Groover mô tả advanced manufacturing planning ở corporate level cho sản phẩm tương lai chưa thiết kế. Bẫy: kéo nó xuống part/process hiện tại. Khóa: horizon 2–10 năm và technology/facilities investment.",
        },
        {
          id: "d",
          text: "It ignores sales, marketing, and design because manufacturing plans alone",
          isCorrect: false,
          rationale:
            "Cơ chế: advanced manufacturing planning làm việc với sales/marketing/design để dự báo sản phẩm tương lai. Bẫy: xem manufacturing như silo. Khóa: future products cần cross-functional input.",
        },
        {
          id: "e",
          text: "It is the same as MICR check clearing in banking services",
          isCorrect: false,
          rationale:
            "Cơ chế: MICR là service process example, không phải manufacturing planning. Bẫy: lấy khái niệm tầng service lẫn với Groover Ch.24. Khóa: advanced manufacturing planning là corporate-level technology forecasting.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Advanced manufacturing planning",
      takeaway:
        "Advanced manufacturing planning nhìn trước 2–10 năm để chuẩn bị technologies, resources và facilities cho future products.",
    },
  ],
  status: "ready",
  source:
    "Manufacturing Systems — slide 'Chapter 3 Process Design' (mục 3.1–3.4) + ebook Groover, Automation, Production Systems & CIM 4e, Chapter 24 'Process Planning and Concurrent Engineering' (p.703–718). Định nghĩa automation term (NC/CNC/DNC/PLC/FMS/CAD/CAM) chuẩn hóa theo Groover.",
};

const topic04: Chapter = {
  slug: "topic-04",
  order: 4,
  title: "Topic 04 — Jobbing & Batch Production System",
  bigIdea:
    "Volume thấp → quản DÒNG CHẢY, không quản máy: cân đối và điều phối công việc quan trọng hơn tăng tốc từng máy.",
  bigIdeaPillars: [
    {
      label: "Định vị",
      body: "Đầu thấp của phổ variety↔quantity: job shop (Q=1–100) & batch (100–10.000); plant layout tương ứng.",
    },
    {
      label: "Vận hành",
      body: "Chu trình PPC: routing → scheduling → dispatching → (batch thêm) expediting.",
    },
    {
      label: "Công cụ",
      body: "Progress review: block system, production clearance list (PCL), inventory status report.",
    },
    {
      label: "Insight",
      body: "~95% thời gian của một part là chờ/di chuyển (Groover Fig 2.4) → dồn sức cắt non-value time.",
    },
  ],
  learningObjectives: [
    "Định vị jobbing và batch trên phổ variety↔quantity (Groover Fig 2.5): quan hệ nghịch biến, hard vs soft variety.",
    "Nêu 3 dải production quantity (low 1–100 = job shop; medium 100–10.000 = batch; high >10.000 = mass) và loại plant tương ứng.",
    "Phân biệt 4 plant layout types (fixed-position, process, cellular, product) và layout nào hợp jobbing/batch.",
    "Giải thích insight 'dòng chảy': ~95% thời gian một part là chờ/di chuyển (Fig 2.4) → vì sao PPC là trọng tâm ở volume thấp; định nghĩa setup/changeover time.",
    "Mô tả đặc điểm jobbing/project: Q=1, non-standardised, make-to-order (MTO), low-cycle, long MLT (nhược điểm chính), unit cost cao, thiết bị multi-function + thợ tay nghề cao.",
    "Mô tả chu trình PPC của jobbing: routing → scheduling → dispatching; và progress review method (job shop).",
    "Mô tả đặc điểm batch: lô nhỏ chuẩn hóa, lặp lại theo demand, MLT nhỏ hơn jobbing, MTS/MTO, core in-line + phần còn lại outsource, compromise giữa jobbing & mass (liên hệ JIT).",
    "Mô tả chu trình PPC của batch: routing → scheduling → dispatching → expediting; công cụ SOP, bar chart/production control chart.",
    "Phân biệt các progress review methods của batch: block system, production clearance list (PCL), inventory status report, vai trò expediter.",
    "So sánh jobbing vs batch vs mass theo volume, variety, standardization, layout, unit cost, MLT, equipment.",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "Volume thấp → quản DÒNG CHẢY, không quản máy: (A) định vị jobbing/batch trên phổ variety↔quantity; (B) vận hành jobbing (PPC); (C) vận hành batch (PPC + progress review). Bấm node để mở chi tiết.",
    nodes: [
      {
        id: "jb",
        label: "Jobbing & Batch Production",
        group: "concept",
        sectionId: "s1",
        detail:
          "Đầu thấp của phổ variety↔quantity; lợi thế đến từ điều phối dòng chảy, không phải tự động hóa.",
      },
      {
        id: "g_pos",
        label: "A. Định vị (variety↔quantity)",
        group: "concept",
        parent: "jb",
        sectionId: "s1",
        detail:
          "Dải production quantity, plant layout, insight 95% thời gian chờ (Groover §2.3).",
      },
      {
        id: "g_job",
        label: "B. Jobbing/Project vận hành",
        group: "concept",
        parent: "jb",
        sectionId: "s4",
        detail:
          "Đặc điểm Q=1/MTO, MLT/cost, PPC, progress review (slide 4.1).",
      },
      {
        id: "g_batch",
        label: "C. Batch vận hành",
        group: "concept",
        parent: "jb",
        sectionId: "s8",
        detail:
          "Lô chuẩn hóa, PPC + expediting, progress review methods (slide 4.2).",
      },
      {
        id: "t_spectrum",
        label: "Phổ variety↔quantity + 3 dải",
        group: "term",
        parent: "g_pos",
        sectionId: "s1",
        detail:
          "Low(1–100)=job shop, medium(100–10k)=batch, high(>10k)=mass; nghịch biến.",
      },
      {
        id: "t_layout",
        label: "4 plant layout types",
        group: "term",
        parent: "g_pos",
        sectionId: "s2",
        detail: "Fixed-position / process / cellular / product.",
      },
      {
        id: "t_flow",
        label: "Insight dòng chảy (95% chờ)",
        group: "term",
        parent: "g_pos",
        sectionId: "s3",
        detail:
          "~95% thời gian part là chờ/di chuyển; setup/changeover time.",
      },
      {
        id: "t_job_char",
        label: "Đặc điểm jobbing",
        group: "term",
        parent: "g_job",
        sectionId: "s4",
        detail: "Q=1, non-standard, MTO, low-cycle.",
      },
      {
        id: "t_job_cost",
        label: "MLT, unit cost, equipment/skills",
        group: "term",
        parent: "g_job",
        sectionId: "s5",
        detail:
          "Long MLT = nhược điểm chính; unit cost cao; multi-function + thợ giỏi.",
      },
      {
        id: "t_job_ppc",
        label: "PPC jobbing",
        group: "term",
        parent: "g_job",
        sectionId: "s6",
        detail: "Routing → scheduling → dispatching.",
      },
      {
        id: "t_job_review",
        label: "Progress review (job shop)",
        group: "term",
        parent: "g_job",
        sectionId: "s7",
        detail: "Realistic vs planning, WIP, bottleneck, make-or-buy info.",
      },
      {
        id: "t_batch_char",
        label: "Đặc điểm batch",
        group: "term",
        parent: "g_batch",
        sectionId: "s8",
        detail:
          "Lô nhỏ chuẩn hóa, lặp lại, MTS/MTO, compromise jobbing↔mass, JIT.",
      },
      {
        id: "t_batch_ppc",
        label: "PPC batch",
        group: "term",
        parent: "g_batch",
        sectionId: "s9",
        detail: "Routing → scheduling → dispatching → expediting; SOP.",
      },
      {
        id: "t_batch_review",
        label: "Progress review methods",
        group: "term",
        parent: "g_batch",
        sectionId: "s10",
        detail: "Block system, PCL, inventory status report, expediter.",
      },
      {
        id: "t_compare",
        label: "Jobbing vs Batch vs Mass",
        group: "term",
        parent: "jb",
        sectionId: "s11",
        detail:
          "So sánh tổng: volume, variety, layout, cost, MLT (cầu nối Topic 5).",
      },
    ],
    edges: [
      { from: "jb", to: "g_pos" },
      { from: "jb", to: "g_job" },
      { from: "jb", to: "g_batch" },
      { from: "jb", to: "t_compare" },
      { from: "g_pos", to: "t_spectrum" },
      { from: "g_pos", to: "t_layout" },
      { from: "g_pos", to: "t_flow" },
      { from: "g_job", to: "t_job_char" },
      { from: "g_job", to: "t_job_cost" },
      { from: "g_job", to: "t_job_ppc" },
      { from: "g_job", to: "t_job_review" },
      { from: "g_batch", to: "t_batch_char" },
      { from: "g_batch", to: "t_batch_ppc" },
      { from: "g_batch", to: "t_batch_review" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "Phổ variety↔quantity & 3 dải production quantity",
      blocks: [
        comparisonBlock(
          "3 dải production quantity → loại plant",
          ["Dải", "Q / năm", "Loại plant", "Đặc trưng"],
          [
            {
              label: "Low production",
              cells: [
                "1 – 100 units",
                "Job shop (≈ jobbing/project)",
                "Thiết bị general-purpose, thợ tay nghề cao, max flexibility",
              ],
            },
            {
              label: "Medium production",
              cells: [
                "100 – 10.000 units",
                "Batch production (hard variety) / cellular (soft variety)",
                "Chia sẻ thiết bị giữa nhiều sản phẩm; có setup time",
              ],
            },
            {
              label: "High production",
              cells: [
                "10.000 – hàng triệu units",
                "Mass production (Topic 5)",
                "Thiết bị dedicated, high demand rate",
              ],
            },
          ],
        ),
        calloutBlock(
          "key",
          "Nghịch biến variety ↔ quantity",
          "Groover Fig 2.5: variety cao thì quantity thấp và ngược lại — nhà máy thường 'ngồi' trong dải chéo đó. Jobbing/batch nằm ở đầu variety cao / quantity thấp. Phân biệt hard variety (khác biệt lớn, ít common parts — vd xe hơi vs xe tải) và soft variety (khác biệt nhỏ, nhiều common parts — vd các model xe cùng dây chuyền) (Groover p.33–34).",
        ),
      ],
      keyTerms: [
        {
          term: "production quantity",
          definition: "Số lượng sản phẩm sản xuất mỗi năm, chia low/medium/high.",
        },
        {
          term: "product variety",
          definition:
            "Mức đa dạng sản phẩm; variety cao thường đi với quantity thấp.",
        },
        {
          term: "job shop",
          definition:
            "Plant low production 1–100 units, general-purpose equipment, high flexibility.",
        },
        {
          term: "hard variety",
          definition:
            "Variety khác biệt lớn, ít common parts giữa các sản phẩm.",
        },
        {
          term: "soft variety",
          definition:
            "Variety khác biệt nhỏ, nhiều common parts giữa các model.",
        },
      ],
    },
    {
      id: "s2",
      heading: "Plant layout types",
      blocks: [
        comparisonBlock(
          "4 plant layout types (Groover Fig 2.6)",
          ["Layout", "Bố trí", "Hợp với"],
          [
            {
              label: "Fixed-position layout",
              cells: [
                "Sản phẩm đứng yên một chỗ; đưa thợ & thiết bị tới sản phẩm",
                "Sản phẩm lớn/nặng: tàu, máy bay, đầu máy xe lửa (jobbing/project)",
              ],
            },
            {
              label: "Process layout",
              cells: [
                "Thiết bị nhóm theo chức năng (khu tiện, khu phay…); part đi qua các khu theo route riêng",
                "Job shop & batch — linh hoạt nhiều operation sequence",
              ],
            },
            {
              label: "Cellular layout",
              cells: [
                "Nhóm máy thành cell làm một họ part tương tự (group technology)",
                "Batch soft-variety (medium) — giảm changeover (Topic 6)",
              ],
            },
            {
              label: "Product layout",
              cells: [
                "Thiết bị xếp theo trình tự sản phẩm (dây chuyền)",
                "Mass production (Topic 5)",
              ],
            },
          ],
        ),
        calloutBlock(
          "insight",
          "Layout phản ánh vị trí trên phổ",
          "Đi từ jobbing → batch → mass, layout dịch từ fixed-position/process (linh hoạt, in-process inventory cao) sang product (hiệu quả, dòng thẳng). Process layout linh hoạt nhưng phải di chuyển part nhiều → tồn kho trong chuyền cao (Groover p.34–35).",
        ),
      ],
      keyTerms: [
        {
          term: "fixed-position layout",
          definition:
            "Layout giữ sản phẩm đứng yên, đưa người và thiết bị tới sản phẩm.",
        },
        {
          term: "process layout",
          definition:
            "Layout nhóm thiết bị theo chức năng, part đi theo route riêng.",
        },
        {
          term: "cellular layout",
          definition:
            "Layout nhóm máy thành cell để làm một họ part tương tự.",
        },
        {
          term: "product layout",
          definition:
            "Layout xếp thiết bị theo trình tự sản phẩm, phù hợp mass production.",
        },
      ],
    },
    {
      id: "s3",
      heading: "Insight dòng chảy: 95% thời gian là chờ",
      blocks: [
        comparisonBlock(
          "Một part 'tiêu' thời gian ở đâu (batch machine shop)",
          ["Thành phần thời gian", "Tỷ lệ (Groover Fig 2.4)"],
          [
            {
              label: "Moving & waiting (chờ/di chuyển, tồn kho tạm)",
              cells: ["~95% tổng thời gian trong nhà máy"],
            },
            {
              label: "Time on machine (trên máy)",
              cells: ["~5% tổng thời gian"],
            },
            {
              label: "Trong đó cutting (thực sự gia công)",
              cells: ["~30% của 5% ≈ 1.5% tổng"],
            },
            {
              label: "Trong đó loading/positioning/gaging (nonprocessing)",
              cells: ["~70% của 5% ≈ 3.5% tổng"],
            },
          ],
        ),
        calloutBlock(
          "key",
          "Vì sao PPC là trọng tâm ở volume thấp",
          "Nếu chỉ ~1.5% thời gian là thực sự cắt gọt, thì đầu tư vào máy nhanh hơn giúp ích rất ít; nút thắt nằm ở dòng chảy — chờ đợi, di chuyển, xếp lịch. Đó là lý do jobbing/batch dồn sức vào Production Planning & Control để cắt non-value time, chứ không phải tự động hóa (Groover Fig 2.4, p.32). Setup/changeover time trong batch là thời gian đổi tooling & lập trình lại máy sau mỗi lô, cũng là non-value time cần kiểm soát (Groover p.35).",
        ),
      ],
      keyTerms: [
        {
          term: "manufacturing lead time (MLT)",
          definition:
            "Tổng thời gian một part/order nằm trong nhà máy từ bắt đầu tới hoàn thành.",
        },
        {
          term: "non-value-added time",
          definition:
            "Thời gian không trực tiếp tạo giá trị như chờ, di chuyển, setup.",
        },
        {
          term: "setup time",
          definition: "Thời gian chuẩn bị/đổi máy cho batch hoặc job mới.",
        },
        {
          term: "changeover time",
          definition:
            "Thời gian đổi tooling/lập trình từ lô này sang lô khác.",
        },
      ],
    },
    {
      id: "s4",
      heading: "Jobbing là gì & đặc điểm cốt lõi",
      blocks: [
        comparisonBlock(
          "Đặc điểm jobbing/project",
          ["Đặc điểm", "Nội dung"],
          [
            {
              label: "Volume",
              cells: [
                "Rất thấp, Q = 1 (một sản phẩm/đơn) → đến mức 'project'; không áp cho hệ thống khác",
              ],
            },
            {
              label: "Item",
              cells: [
                "Non-standardised — làm theo yêu cầu riêng của khách (customization)",
              ],
            },
            {
              label: "Order type",
              cells: [
                "Make-to-order (MTO); low-cycle — lâu mới lặp lại đơn giống/tương tự",
              ],
            },
            {
              label: "Ví dụ",
              cells: [
                "Construction, nghiên cứu, sản xuất linh kiện sửa chữa, máy bay, thiết bị đài TV, trạm không lưu, thủy điện, lò phản ứng, máy đo địa chấn, trang sức đắt tiền, spare parts",
              ],
            },
          ],
        ),
        calloutBlock(
          "key",
          "Bản chất jobbing",
          "Jobbing đáp ứng nhu cầu ĐẶC THÙ của một khách, mỗi đơn gần như một 'dự án' riêng. Vì thế hệ thống jobbing đòi hỏi con người (quản lý, thợ, phần mềm) chuyên nghiệp hơn hệ thống khác (slide 1–5/39).",
        ),
      ],
      keyTerms: [
        {
          term: "jobbing",
          definition: "Sản xuất Q=1/non-standardised theo đơn khách riêng.",
        },
        {
          term: "project production",
          definition: "Dạng jobbing cực thấp volume, mỗi đơn gần như một dự án.",
        },
        {
          term: "make-to-order (MTO)",
          definition: "Sản xuất sau khi có đơn đặt hàng cụ thể.",
        },
        {
          term: "non-standardised item",
          definition: "Item không chuẩn hóa, thiết kế theo yêu cầu riêng.",
        },
        {
          term: "customization",
          definition: "Mức tùy biến theo nhu cầu từng khách hàng.",
        },
      ],
    },
    {
      id: "s5",
      heading: "MLT, unit cost, equipment & skills",
      blocks: [
        comparisonBlock(
          "Ba hệ quả của Q=1",
          ["Khía cạnh", "Trong jobbing"],
          [
            {
              label: "Manufacturing lead time",
              cells: [
                "MLT dài — nhược điểm CHÍNH; lập kế hoạch SX & vật tư theo từng đơn → cycle time dài. Quản lý phải cắt non-value time (vd cổng check-out sân bay mở/đóng theo nhu cầu để giảm chờ)",
              ],
            },
            {
              label: "Unit cost",
              cells: [
                "Rất cao (gồm cả opportunity cost). Ví dụ: đồng hồ $50–$60/chiếc trong jobbing so với $15 ở mass (slide 8/39)",
              ],
            },
            {
              label: "Equipment & worker skills",
              cells: [
                "Máy/dụng cụ multi-function (gắn thêm attachments); cần thợ tay nghề cao & am hiểu → đẩy unit cost lên",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Đánh đổi cốt lõi",
          "Jobbing đổi EFFICIENCY lấy FLEXIBILITY: linh hoạt tối đa để làm bất cứ gì khách cần, nhưng trả giá bằng MLT dài và unit cost cao (slide 6–9/39).",
        ),
      ],
      keyTerms: [
        {
          term: "manufacturing lead time (MLT)",
          definition: "Thời gian hoàn thành một đơn/part trong nhà máy.",
        },
        {
          term: "unit cost",
          definition: "Chi phí trên mỗi đơn vị sản phẩm.",
        },
        {
          term: "opportunity cost",
          definition:
            "Chi phí cơ hội phát sinh khi nguồn lực bị dùng cho đơn tùy biến.",
        },
        {
          term: "multi-function equipment",
          definition: "Thiết bị đa năng có thể gắn attachments làm nhiều việc.",
        },
        {
          term: "skilled worker",
          definition: "Thợ tay nghề cao, am hiểu để xử lý công việc tùy biến.",
        },
      ],
    },
    {
      id: "s6",
      heading: "PPC của jobbing: Routing → Scheduling → Dispatching",
      blocks: [
        flowBlock(
          "s6",
          "Chu trình PPC jobbing",
          "horizontal",
          [
            {
              id: "s6_route",
              label: "Routing",
              group: "concept",
              detail:
                "Xác định work flow của WIP theo yêu cầu work-element; tài liệu: bill of materials (BOM), job cards, process sheets, tools requisitions, specifications. Route có thể bị điều chỉnh bởi production manager nếu cần.",
            },
            {
              id: "s6_sched",
              label: "Scheduling",
              group: "concept",
              detail:
                "Dựa standard time ước lượng processing time cho mọi work element; gửi thời điểm bắt đầu tới từng workstation; quyết định số planned orders & thứ tự ưu tiên. Phải rõ ràng & cụ thể.",
            },
            {
              id: "s6_disp",
              label: "Dispatching",
              group: "concept",
              detail:
                "Người điều phối gửi job cards/process sheets tới workstation; gửi BOM, tools & equipment requisitions; điều vật tư/WIP từ kho tới workstation & gửi kế hoạch tới máy tương ứng.",
            },
          ],
          [
            { from: "s6_route", to: "s6_sched", label: "ước lịch" },
            { from: "s6_sched", to: "s6_disp", label: "điều phối" },
          ],
          "Ba bước lập & tung kế hoạch cho từng đơn jobbing (slide 10–16/39).",
        ),
      ],
      keyTerms: [
        {
          term: "routing",
          definition: "Xác định route/work flow của WIP qua các workstations.",
        },
        {
          term: "scheduling",
          definition: "Lập lịch thời điểm và thứ tự ưu tiên cho work elements.",
        },
        {
          term: "dispatching",
          definition: "Tung job cards, process sheets, vật tư và lệnh tới workstation.",
        },
        {
          term: "bill of materials (BOM)",
          definition: "Danh sách vật tư/components cần cho job.",
        },
        {
          term: "job card",
          definition: "Phiếu công việc dùng để điều phối từng job.",
        },
        {
          term: "process sheet",
          definition: "Tài liệu mô tả bước process cho job/work element.",
        },
      ],
    },
    {
      id: "s7",
      heading: "Progress review method (job shop)",
      blocks: [
        comparisonBlock(
          "Thông tin theo dõi tiến độ (job shop)",
          ["Thông tin review", "Ý nghĩa quản lý"],
          [
            {
              label: "Realistic vs production planning",
              cells: ["So thực tế với kế hoạch để phát hiện lệch"],
            },
            {
              label: "WIP status & vị trí trong nhà máy",
              cells: ["Biết bán thành phẩm đang ở đâu, tới đâu"],
            },
            {
              label: "Bottleneck positions",
              cells: ["Chỉ ra nút thắt để can thiệp"],
            },
            {
              label: "WIP data tại mỗi máy & tools requisitions tại mỗi workstation",
              cells: ["Chi tiết để điều tiết nguồn lực"],
            },
            {
              label: "Make-or-buy support",
              cells: ["Cung cấp thông tin năng lực để quyết tự làm hay mua"],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Mục tiêu review",
          "Progress review nhằm cải thiện chuyển giao thông tin trong quản lý, giảm paperwork & tránh delay thông tin, cung cấp thông tin năng lực nhà máy (slide 17–18/39).",
        ),
      ],
      keyTerms: [
        {
          term: "progress review",
          definition: "Theo dõi thực tế so với kế hoạch để phát hiện lệch tiến độ.",
        },
        {
          term: "work-in-process (WIP)",
          definition: "Hàng đang xử lý/dở dang trong nhà máy.",
        },
        {
          term: "bottleneck",
          definition: "Vị trí nút thắt làm chậm dòng chảy sản xuất.",
        },
        {
          term: "make-or-buy decision",
          definition: "Quyết định tự làm hay mua ngoài dựa trên năng lực/cost.",
        },
      ],
    },
    {
      id: "s8",
      heading: "Batch là gì & đặc điểm",
      blocks: [
        comparisonBlock(
          "Đặc điểm batch production",
          ["Đặc điểm", "Nội dung"],
          [
            {
              label: "Định vị",
              cells: [
                "Compromise giữa jobbing & mass; nhắm small market segments (nhu cầu nhỏ nhưng ổn định); đáp ứng dao động cầu",
              ],
            },
            {
              label: "Volume & lot",
              cells: [
                "Low-volume theo lô nhỏ (small lot sizes), nhưng cao hơn jobbing; lặp lại theo demand & lot size",
              ],
            },
            {
              label: "Standardization",
              cells: [
                "Items chuẩn hóa cho từng lô; đổi ít giữa lô này–lô kia (high standardization batch-to-batch), vd đổi màu xe máy",
              ],
            },
            {
              label: "MLT",
              cells: ["Nhỏ hơn jobbing"],
            },
            {
              label: "Order type",
              cells: [
                "MTS hoặc MTO tùy cách sản xuất; tăng/giảm số lô theo cầu thị trường (xe máy, quần áo, thực phẩm)",
              ],
            },
            {
              label: "Sourcing",
              cells: [
                "Sản xuất core components lô lớn (in-line, giảm chi phí vận hành); phần còn lại có thể order từ nhà cung cấp ngoài",
              ],
            },
          ],
        ),
        calloutBlock(
          "insight",
          "Batch = linh hoạt hơn mass, ổn định hơn jobbing",
          "Batch làm 'đúng cái cần, đúng lượng cần' cho từng phân khúc → giảm rủi ro tồn kho/ế so với mass, mà vẫn rẻ hơn jobbing nhờ chuẩn hóa lô. Tư duy này là gốc của Just-in-time (JIT) kiểu Nhật (slide 19–22/39).",
        ),
      ],
      keyTerms: [
        {
          term: "batch production",
          definition: "Sản xuất theo lô nhỏ/medium, chuẩn hóa trong từng lô.",
        },
        {
          term: "lot size",
          definition: "Kích thước lô sản xuất.",
        },
        {
          term: "make-to-stock (MTS)",
          definition: "Sản xuất để tồn kho trước khi có đơn cụ thể.",
        },
        {
          term: "standardization",
          definition: "Mức chuẩn hóa item/process trong lô.",
        },
        {
          term: "just-in-time (JIT)",
          definition:
            "Tư duy làm đúng cái cần, đúng lượng cần, giảm tồn kho.",
        },
      ],
    },
    {
      id: "s9",
      heading: "PPC của batch: Routing → Scheduling → Dispatching → Expediting",
      blocks: [
        flowBlock(
          "s9",
          "Chu trình PPC batch",
          "horizontal",
          [
            {
              id: "s9_route",
              label: "Routing",
              group: "concept",
              detail:
                "Dựa yêu cầu khách và/hoặc thuộc tính item (như jobbing); core components làm trên production lines để giảm operational cost.",
            },
            {
              id: "s9_sched",
              label: "Scheduling",
              group: "concept",
              detail:
                "Chuẩn bị bảng cho từng lô; gửi kế hoạch (gồm processing time) theo standard operating procedure (SOP); work flow giữa các workstation được tự động hóa; job cards/process sheets sẵn ít nhất 1 ngày trước.",
            },
            {
              id: "s9_disp",
              label: "Dispatching",
              group: "concept",
              detail:
                "Nhận kế hoạch từ SOP; chuẩn bị tools & tài liệu, gửi BOM tới kho ≥1 ngày trước; đảm bảo đủ vật tư; workstation trước chuẩn bị WIP cho workstation sau; dùng màu phân loại vật tư theo ngày; kiểm bằng bar chart / production control chart.",
            },
            {
              id: "s9_exp",
              label: "Expediting",
              group: "concept",
              detail:
                "Hỗ trợ dispatcher rà tiến độ; nhắc supervisor việc bị quên; xử lý task trễ; lập lịch cho task khẩn bằng red tags; giao task khẩn tới đúng workstation.",
            },
          ],
          [
            { from: "s9_route", to: "s9_sched", label: "ước lịch" },
            { from: "s9_sched", to: "s9_disp", label: "điều phối" },
            { from: "s9_disp", to: "s9_exp", label: "thúc đẩy" },
          ],
          "Batch thêm bước Expediting (thúc đẩy) so với jobbing, để bám tiến độ nhiều lô song song (slide 23–32/39).",
        ),
      ],
      keyTerms: [
        {
          term: "standard operating procedure (SOP)",
          definition: "Quy trình thao tác chuẩn dùng để gửi và thực hiện kế hoạch.",
        },
        {
          term: "expediting",
          definition: "Thúc đẩy/rà tiến độ để xử lý task trễ hoặc khẩn.",
        },
        {
          term: "red tag",
          definition: "Nhãn đỏ đánh dấu task khẩn, ưu tiên cao.",
        },
        {
          term: "production control chart",
          definition: "Biểu đồ kiểm soát tiến độ production.",
        },
        {
          term: "bar chart",
          definition: "Biểu đồ thanh dùng để theo dõi/lập lịch production.",
        },
      ],
    },
    {
      id: "s10",
      heading: "Progress review methods của batch",
      blocks: [
        comparisonBlock(
          "4 công cụ theo dõi tiến độ batch",
          ["Phương pháp", "Cách hoạt động"],
          [
            {
              label: "a. Block system",
              cells: [
                "Gộp job cards & specifications cùng ngày thành nhóm; mỗi nhóm một màu (7 màu cho 7 ngày, đỏ = khẩn); task khẩn do quản lý cấp cao giao, red-tag ưu tiên cao",
              ],
            },
            {
              label: "b. Production clearance list (PCL)",
              cells: [
                "Liệt kê mọi task cùng ngày, mỗi ngày một màu; worker gạch task khi xong; foreman kiểm PCL định kỳ, xóa task đã xong & trả về phòng SX; dispatcher đối chiếu với danh sách expediter",
              ],
            },
            {
              label: "c. Inventory status report",
              cells: [
                "Báo cáo tồn kho: số raw materials được cấp, số bán thành phẩm đang xử lý, số finished goods (FG), số WIP",
              ],
            },
            {
              label: "d. Vai trò expediter",
              cells: [
                "Hỗ trợ dispatcher quản & kiểm soát mọi task trong production process",
              ],
            },
          ],
        ),
        comparisonBlock(
          "Inventory status report — cấu trúc (ví dụ minh họa)",
          ["Line", "Supplied", "Processing", "Finished goods", "WIP"],
          [
            { label: "A", cells: ["1.000", "1.000", "1.500", "500"] },
            { label: "B", cells: ["3.000", "0", "0", "0"] },
            { label: "C", cells: ["2.000", "2.000", "4.000", "2.000"] },
            { label: "D", cells: ["5.000", "3.000", "4.500", "1.500"] },
          ],
        ),
        calloutBlock(
          "note",
          "Đọc bảng thế nào",
          "Inventory status report cho quản lý thấy nhanh: bao nhiêu vật tư đã cấp, bao nhiêu đang chạy, bao nhiêu đã thành phẩm, bao nhiêu còn dở dang (WIP) theo từng line. Số trong bảng là ví dụ minh họa cấu trúc, không phải số gốc slide (slide 37–39/39).",
        ),
      ],
      keyTerms: [
        {
          term: "block system",
          definition:
            "Progress review method nhóm job cards/specifications theo ngày/màu.",
        },
        {
          term: "production clearance list (PCL)",
          definition:
            "Danh sách task theo ngày để worker gạch khi xong và foreman/dispatcher đối chiếu.",
        },
        {
          term: "inventory status report",
          definition:
            "Báo cáo Supplied, Processing, Finished goods và WIP theo line.",
        },
        {
          term: "finished goods (FG)",
          definition: "Sản phẩm đã hoàn thành.",
        },
        {
          term: "expediter",
          definition: "Người hỗ trợ dispatcher rà và thúc đẩy tiến độ task.",
        },
      ],
    },
    {
      id: "s11",
      heading: "Jobbing vs Batch vs Mass",
      blocks: [
        comparisonBlock(
          "So sánh 3 hệ thống",
          ["Tiêu chí", "Jobbing", "Batch", "Mass (Topic 5)"],
          [
            {
              label: "Production quantity",
              cells: ["1 – 100 (Q=1/đơn)", "100 – 10.000 (theo lô)", "10.000 – hàng triệu"],
            },
            {
              label: "Product variety",
              cells: ["Rất cao (hard)", "Trung bình", "Rất thấp"],
            },
            {
              label: "Standardization",
              cells: ["Non-standardised", "Chuẩn hóa theo lô", "Chuẩn hóa cao"],
            },
            {
              label: "Plant layout",
              cells: ["Fixed-position / process", "Process / cellular", "Product (dây chuyền)"],
            },
            {
              label: "Unit cost",
              cells: ["Cao nhất", "Trung bình", "Thấp nhất"],
            },
            {
              label: "MLT",
              cells: ["Dài nhất", "Ngắn hơn jobbing", "Ngắn nhất"],
            },
            {
              label: "Equipment",
              cells: ["Multi-function + thợ giỏi", "Chia sẻ giữa lô, có setup", "Dedicated"],
            },
          ],
        ),
        calloutBlock(
          "key",
          "Trục xuyên suốt",
          "Ba hệ thống là ba điểm trên cùng một trục variety↔quantity. Chọn hệ thống = chọn điểm đánh đổi flexibility ↔ efficiency phù hợp thị trường. Topic 5 sẽ đi sâu đầu 'mass' của trục này (slide + Groover §2.3).",
        ),
      ],
      keyTerms: [
        {
          term: "jobbing",
          definition: "Đầu volume thấp/variety cao của phổ production.",
        },
        {
          term: "batch production",
          definition: "Sản xuất theo lô medium quantity, standardization theo lô.",
        },
        {
          term: "mass production",
          definition: "Đầu high quantity/low variety của phổ production.",
        },
        {
          term: "flexibility–efficiency tradeoff",
          definition:
            "Đánh đổi giữa linh hoạt/customization và hiệu quả/chuẩn hóa.",
        },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "What is the relationship between product variety and production quantity in Groover's framework?",
      options: [
        {
          id: "a",
          text: "Product variety and production quantity usually increase together; jobbing is high-volume and high-variety",
          isCorrect: false,
          rationale:
            "Cơ chế: Groover mô tả quan hệ nghịch biến giữa variety và quantity. Bẫy: nghĩ thị trường càng đa dạng thì nhà máy càng sản xuất nhiều từng loại. Khóa: jobbing nằm ở high variety/low volume.",
        },
        {
          id: "b",
          text: "High product variety usually means low production quantity; jobbing sits at the high-variety, low-volume end",
          isCorrect: true,
          rationale:
            "Cơ chế: phổ variety↔quantity là trục nghịch biến; jobbing/batch ở đầu volume thấp hơn. Bẫy: học tên hệ thống rời khỏi trục. Khóa: luôn định vị bằng Q và variety trước.",
        },
        {
          id: "c",
          text: "Jobbing is low-variety because every order uses a fixed product design",
          isCorrect: false,
          rationale:
            "Cơ chế: jobbing làm non-standardised/customized orders. Bẫy: thấy Q=1 nên tưởng một loại sản phẩm cố định. Khóa: Q thấp thường đi với variety cao.",
        },
        {
          id: "d",
          text: "Mass production has the highest variety because it produces the most units",
          isCorrect: false,
          rationale:
            "Cơ chế: mass production có quantity cao nhưng variety thấp. Bẫy: đồng nhất số lượng lớn với nhiều loại. Khóa: quantity và variety kéo ngược nhau.",
        },
        {
          id: "e",
          text: "Batch production is always Q=1 and therefore identical to project production",
          isCorrect: false,
          rationale:
            "Cơ chế: batch ở medium quantity 100–10.000 theo lô, không phải Q=1. Bẫy: thấy batch linh hoạt hơn mass rồi kéo về jobbing. Khóa: batch là compromise giữa jobbing và mass.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Variety-quantity inverse relationship",
      takeaway:
        "Variety cao thường đi với quantity thấp; jobbing nằm ở high-variety/low-volume.",
    },
    {
      id: "q02",
      stem: "Which description best matches a job shop in low production?",
      options: [
        {
          id: "a",
          text: "Dedicated equipment, low worker skill, and millions of identical units per year",
          isCorrect: false,
          rationale:
            "Cơ chế: mô tả này nghiêng về mass production. Bẫy: gán dedicated equipment cho mọi plant. Khóa: job shop dùng general-purpose equipment và thợ tay nghề cao.",
        },
        {
          id: "b",
          text: "1–100 units per year, general-purpose equipment, skilled workers, and maximum flexibility",
          isCorrect: true,
          rationale:
            "Cơ chế: low production = 1–100 units/năm, job shop cần flexibility tối đa. Bẫy: quên dải quantity nên nhầm sang batch. Khóa: Q thấp + flexibility cao = job shop/jobbing.",
        },
        {
          id: "c",
          text: "100–10,000 standardized units per year with planned lot changeovers",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là medium production/batch. Bẫy: thấy quantity không quá cao rồi gọi job shop. Khóa: batch là theo lô, job shop là low Q.",
        },
        {
          id: "d",
          text: "A product layout with a fixed conveyor line for a single product",
          isCorrect: false,
          rationale:
            "Cơ chế: product layout phù hợp mass/high production. Bẫy: lấy dây chuyền làm hình ảnh mặc định của nhà máy. Khóa: job shop thường fixed-position/process layout.",
        },
        {
          id: "e",
          text: "A system designed mainly for make-to-stock inventory of standard products",
          isCorrect: false,
          rationale:
            "Cơ chế: jobbing chủ yếu make-to-order và non-standardised. Bẫy: lẫn MTS của batch/mass với job shop. Khóa: job shop phục vụ đơn tùy biến.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Job shop / low production",
      takeaway:
        "Job shop low production: 1–100 units, equipment đa năng, skilled workers, max flexibility.",
    },
    {
      id: "q03",
      stem: "Which plant-layout match is correct?",
      options: [
        {
          id: "a",
          text: "Product layout is best for jobbing because the product stays fixed and workers move to it",
          isCorrect: false,
          rationale:
            "Cơ chế: product layout là dây chuyền theo trình tự sản phẩm, phù hợp mass. Bẫy: đảo product layout với fixed-position layout. Khóa: sản phẩm đứng yên là fixed-position.",
        },
        {
          id: "b",
          text: "Fixed-position layout is mainly for small identical parts moving through a conveyor line",
          isCorrect: false,
          rationale:
            "Cơ chế: conveyor line là product layout, không phải fixed-position. Bẫy: nghe fixed rồi tưởng line cố định. Khóa: fixed-position cố định sản phẩm lớn/nặng.",
        },
        {
          id: "c",
          text: "Process layout groups equipment by function and is irrelevant to job shop or batch",
          isCorrect: false,
          rationale:
            "Cơ chế: process layout rất hợp job shop/batch vì linh hoạt nhiều route. Bẫy: bỏ qua route riêng của từng part. Khóa: process layout = nhóm theo chức năng.",
        },
        {
          id: "d",
          text: "Cellular layout belongs only to mass production and never to batch",
          isCorrect: false,
          rationale:
            "Cơ chế: cellular layout dùng cho batch soft-variety/group technology. Bẫy: thấy cell có vẻ chuyên môn hóa nên đẩy sang mass. Khóa: cellular là cầu giữa process và product layout.",
        },
        {
          id: "e",
          text: "Fixed-position fits large project products; process layout fits job shop and batch routes",
          isCorrect: true,
          rationale:
            "Cơ chế: fixed-position giữ sản phẩm lớn/nặng tại chỗ; process layout nhóm máy theo chức năng cho route linh hoạt. Bẫy: học layout theo tên mà không gắn với flow. Khóa: layout phản ánh vị trí trên phổ variety↔quantity.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Plant layout matching",
      takeaway:
        "Jobbing/project thường fixed-position hoặc process layout; batch thường process/cellular.",
    },
    {
      id: "q04",
      stem: "What is the managerial meaning of the '~95% waiting/moving' insight in a batch machine shop?",
      options: [
        {
          id: "a",
          text: "Most time is cutting, so buying faster cutting machines is always the main improvement",
          isCorrect: false,
          rationale:
            "Cơ chế: cutting chỉ khoảng 1.5% tổng thời gian theo Fig 2.4. Bẫy: nhìn manufacturing như chỉ có machining. Khóa: phần lớn nằm ở chờ/di chuyển.",
        },
        {
          id: "b",
          text: "Automation should be installed immediately because waiting time proves machines are too slow",
          isCorrect: false,
          rationale:
            "Cơ chế: waiting/moving là vấn đề flow và scheduling, không tự chứng minh máy chậm. Bẫy: phản xạ automate trước khi quản dòng chảy. Khóa: PPC mới là trọng tâm ở volume thấp.",
        },
        {
          id: "c",
          text: "Most time is waiting or moving, so PPC and flow coordination can matter more than machine speed",
          isCorrect: true,
          rationale:
            "Cơ chế: ~95% time là waiting/moving, nghĩa là non-value time chi phối MLT. Bẫy: tối ưu phần 5% trên máy mà quên 95% ngoài máy. Khóa: điều phối routing/scheduling/dispatching để giảm MLT.",
        },
        {
          id: "d",
          text: "Waiting time is value-added because customers pay for WIP to wait in the shop",
          isCorrect: false,
          rationale:
            "Cơ chế: waiting/moving là non-value-added time. Bẫy: tưởng cứ nằm trong nhà máy là tạo giá trị. Khóa: khách trả cho sản phẩm hoàn tất, không trả cho chờ.",
        },
        {
          id: "e",
          text: "PPC is unnecessary because only the operator at each machine controls flow",
          isCorrect: false,
          rationale:
            "Cơ chế: flow qua nhiều workstations cần routing, scheduling, dispatching, review. Bẫy: giao toàn bộ dòng chảy cho từng máy lẻ. Khóa: PPC điều phối toàn hệ thống.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "95% waiting/moving insight",
      takeaway:
        "Ở jobbing/batch, lợi thế đến từ cắt waiting/moving time bằng PPC, không chỉ tăng tốc máy.",
    },
    {
      id: "q05",
      stem: "Which set of characteristics best describes jobbing production?",
      options: [
        {
          id: "a",
          text: "Q=1, non-standardised, make-to-order, long MLT, high unit cost",
          isCorrect: true,
          rationale:
            "Cơ chế: jobbing/project phục vụ đơn tùy biến, Q rất thấp, MTO và MLT dài. Bẫy: chỉ nhớ flexibility mà quên cost/MLT. Khóa: jobbing đổi efficiency lấy customization.",
        },
        {
          id: "b",
          text: "High-volume make-to-stock, dedicated equipment, and the shortest MLT",
          isCorrect: false,
          rationale:
            "Cơ chế: đây nghiêng về mass production. Bẫy: gán MTS/dedicated equipment cho mọi hệ thống sản xuất. Khóa: jobbing là MTO và general-purpose/multi-function.",
        },
        {
          id: "c",
          text: "Standardized lots of 100–10,000 units with planned changeover",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là batch production. Bẫy: thấy low/medium volume rồi gọi chung jobbing. Khóa: batch có lot và repeat demand; jobbing là Q=1/custom.",
        },
        {
          id: "d",
          text: "Low unit cost because the factory avoids conveyor lines",
          isCorrect: false,
          rationale:
            "Cơ chế: jobbing unit cost cao vì thợ giỏi, equipment đa năng, planning riêng. Bẫy: nghĩ không đầu tư dây chuyền thì rẻ. Khóa: thiếu scale làm cost/chiếc cao.",
        },
        {
          id: "e",
          text: "Non-standardised items with very short lead time as the main advantage",
          isCorrect: false,
          rationale:
            "Cơ chế: non-standardised đúng nhưng MLT dài là nhược điểm chính. Bẫy: chỉ nhớ customization rồi suy ra nhanh. Khóa: jobbing linh hoạt nhưng chậm.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Jobbing characteristics",
      takeaway:
        "Jobbing = Q=1/custom/MTO, MLT dài, unit cost cao, đổi lại flexibility tối đa.",
    },
    {
      id: "q06",
      stem: "A watch costs $50–$60 per unit in jobbing but $15 per unit in mass production. What best explains this difference?",
      options: [
        {
          id: "a",
          text: "Jobbing is cheaper because it avoids dedicated production lines",
          isCorrect: false,
          rationale:
            "Cơ chế: jobbing không có scale, cần planning riêng, thợ giỏi và equipment đa năng nên unit cost cao. Bẫy: thấy không mua dây chuyền nên tưởng rẻ. Khóa: cost/chiếc phụ thuộc volume và efficiency.",
        },
        {
          id: "b",
          text: "$15 is the jobbing cost because jobbing uses skilled labor more efficiently than mass production",
          isCorrect: false,
          rationale:
            "Cơ chế: ví dụ slide gán $15 cho mass, $50–$60 cho jobbing. Bẫy: đảo số vì nghĩ skilled labor luôn hiệu quả hơn. Khóa: skilled labor tăng flexibility nhưng cost/chiếc cao.",
        },
        {
          id: "c",
          text: "Mass production has higher variety, so it must be more expensive",
          isCorrect: false,
          rationale:
            "Cơ chế: mass production variety thấp và quantity cao. Bẫy: dùng variety sai chiều. Khóa: standardization và volume kéo unit cost xuống.",
        },
        {
          id: "d",
          text: "Jobbing has volume near one, multi-function equipment, skilled workers, and opportunity cost, so cost per unit is high",
          isCorrect: true,
          rationale:
            "Cơ chế: Q=1 làm mất economies of scale; multi-function equipment và skilled workers làm cost cao. Bẫy: chỉ nhìn giá máy mà quên opportunity cost/MLT. Khóa: flexibility có giá.",
        },
        {
          id: "e",
          text: "The difference exists only because mass production has longer MLT",
          isCorrect: false,
          rationale:
            "Cơ chế: mass thường có MLT ngắn hơn nhờ flow chuẩn hóa. Bẫy: đảo MLT giữa các hệ thống. Khóa: jobbing chậm và đắt; mass nhanh và rẻ khi demand đủ lớn.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Unit cost tradeoff",
      takeaway:
        "Jobbing unit cost cao vì Q thấp, equipment đa năng, skilled labor và opportunity cost.",
    },
    {
      id: "q07",
      stem: "Which sequence matches PPC for jobbing production?",
      options: [
        {
          id: "a",
          text: "Dispatching → scheduling → routing",
          isCorrect: false,
          rationale:
            "Cơ chế: dispatching là tung lệnh sau khi đã có route và schedule. Bẫy: nghĩ gửi job card trước rồi mới lập lịch. Khóa: phải biết route trước khi schedule/dispatch.",
        },
        {
          id: "b",
          text: "Routing → scheduling → dispatching",
          isCorrect: true,
          rationale:
            "Cơ chế: jobbing PPC đi từ xác định route, lập lịch, rồi tung lệnh/vật tư tới workstation. Bẫy: học từng từ rời nên đảo thứ tự. Khóa: route định flow, schedule định thời gian, dispatching thực thi.",
        },
        {
          id: "c",
          text: "Scheduling → routing → dispatching",
          isCorrect: false,
          rationale:
            "Cơ chế: không thể schedule chuẩn khi chưa biết route/workstations. Bẫy: đặt calendar trước process path. Khóa: routing là nền của scheduling.",
        },
        {
          id: "d",
          text: "Expediting → routing → dispatching",
          isCorrect: false,
          rationale:
            "Cơ chế: expediting là bước thêm trọng tâm ở batch, sau dispatching. Bẫy: kéo batch PPC vào jobbing. Khóa: jobbing core sequence là routing/scheduling/dispatching.",
        },
        {
          id: "e",
          text: "Progress review → dispatching → routing",
          isCorrect: false,
          rationale:
            "Cơ chế: progress review theo dõi sau khi kế hoạch được triển khai. Bẫy: dùng review làm bước mở đầu. Khóa: review kiểm soát, không thay thế routing.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Jobbing PPC sequence",
      takeaway:
        "Jobbing PPC: routing xác định flow, scheduling lập lịch, dispatching tung lệnh và vật tư.",
    },
    {
      id: "q08",
      stem: "Which statement best describes batch production and setup/changeover time?",
      options: [
        {
          id: "a",
          text: "Batch production is Q=1 project work with no repeated demand",
          isCorrect: false,
          rationale:
            "Cơ chế: Q=1/project là jobbing, không phải batch. Bẫy: lẫn volume thấp với medium lot. Khóa: batch lặp lại theo demand và lot size.",
        },
        {
          id: "b",
          text: "Batch production has no setup or changeover time because all lots are identical forever",
          isCorrect: false,
          rationale:
            "Cơ chế: batch phải đổi tooling/lập trình giữa lô, nên setup/changeover là nhược điểm. Bẫy: thấy chuẩn hóa theo lô rồi tưởng mọi lô giống hệt. Khóa: chuẩn hóa trong lô, nhưng giữa lô vẫn có đổi.",
        },
        {
          id: "c",
          text: "Batch production is always high-volume mass production with dedicated equipment",
          isCorrect: false,
          rationale:
            "Cơ chế: batch là medium quantity, thường dùng shared/process/cellular equipment. Bẫy: thấy lô nhiều sản phẩm nên kéo sang mass. Khóa: mass mới dedicated/high volume.",
        },
        {
          id: "d",
          text: "Setup time is value-added cutting time and should be maximized",
          isCorrect: false,
          rationale:
            "Cơ chế: setup/changeover là non-value time bị mất khi đổi lô. Bẫy: coi mọi thời gian máy bận là value-added. Khóa: setup cần giảm.",
        },
        {
          id: "e",
          text: "Batch makes standardized lots around medium quantity; changeover time is the lost time when switching to the next lot",
          isCorrect: true,
          rationale:
            "Cơ chế: batch sản xuất theo lô chuẩn hóa 100–10.000 và phải changeover giữa lô. Bẫy: quên setup time. Khóa: batch hiệu quả hơn jobbing nhưng chịu chi phí đổi lô.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Batch production and setup/changeover",
      takeaway:
        "Batch = medium quantity theo lô chuẩn hóa; setup/changeover time là nhược điểm cần quản.",
    },
    {
      id: "q09",
      stem: "Which statement correctly compares batch production with jobbing and mass production?",
      options: [
        {
          id: "a",
          text: "Batch is identical to jobbing because both always produce Q=1 customized products",
          isCorrect: false,
          rationale:
            "Cơ chế: batch có lot size và standardization theo lô; jobbing Q=1/custom. Bẫy: lẫn vì cả hai không phải mass. Khóa: batch là compromise.",
        },
        {
          id: "b",
          text: "Batch is less flexible than mass production because mass can change models more easily",
          isCorrect: false,
          rationale:
            "Cơ chế: mass thường standardization cao và ít variety hơn batch. Bẫy: thấy mass có dây chuyền hiện đại nên tưởng flexible hơn. Khóa: batch linh hoạt hơn mass.",
        },
        {
          id: "c",
          text: "Batch has smaller MLT than jobbing, standardized lots, repeated demand, and works as a compromise between jobbing and mass",
          isCorrect: true,
          rationale:
            "Cơ chế: batch giảm MLT/cost so với jobbing nhờ lô chuẩn hóa, nhưng giữ linh hoạt hơn mass. Bẫy: bỏ chữ compromise. Khóa: batch đứng giữa trục flexibility–efficiency.",
        },
        {
          id: "d",
          text: "Batch has the highest unit cost because it uses the most skilled workers for every single custom unit",
          isCorrect: false,
          rationale:
            "Cơ chế: highest unit cost là jobbing; batch chuẩn hóa theo lô nên thấp hơn. Bẫy: kéo đặc điểm jobbing sang batch. Khóa: lot standardization làm batch rẻ hơn.",
        },
        {
          id: "e",
          text: "Batch cannot be make-to-stock or make-to-order under any condition",
          isCorrect: false,
          rationale:
            "Cơ chế: spec nêu batch có thể MTS hoặc MTO tùy cách sản xuất. Bẫy: tuyệt đối hóa order type. Khóa: batch linh hoạt theo demand và lot size.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Batch vs jobbing",
      takeaway:
        "Batch là điểm giữa: chuẩn hóa theo lô, MLT/cost thấp hơn jobbing, linh hoạt hơn mass.",
    },
    {
      id: "q10",
      stem: "What is the role of expediting in batch PPC?",
      options: [
        {
          id: "a",
          text: "It supports the dispatcher by checking progress, reminding supervisors, handling late tasks, and using red tags for urgent work",
          isCorrect: true,
          rationale:
            "Cơ chế: expediting là bước thúc đẩy tiến độ trong batch, đặc biệt khi nhiều lô song song. Bẫy: xem expediting như routing. Khóa: expediter hỗ trợ dispatcher kiểm soát thực thi.",
        },
        {
          id: "b",
          text: "It is the first step that defines the process route before customer requirements are known",
          isCorrect: false,
          rationale:
            "Cơ chế: routing mới là bước xác định route; expediting đến sau dispatching. Bẫy: kéo expediting lên đầu vì nghe 'khẩn'. Khóa: expediting xử lý tiến độ thực thi.",
        },
        {
          id: "c",
          text: "It replaces inventory status reports and means no progress review is needed",
          isCorrect: false,
          rationale:
            "Cơ chế: expediting là vai trò hỗ trợ, còn inventory status report vẫn là công cụ review. Bẫy: nghĩ có người thúc là không cần dữ liệu. Khóa: expediter cần thông tin để can thiệp.",
        },
        {
          id: "d",
          text: "It is another name for bill of materials",
          isCorrect: false,
          rationale:
            "Cơ chế: BOM là danh sách vật tư; expediting là thúc tiến độ. Bẫy: trộn tài liệu với hoạt động quản lý. Khóa: BOM support routing/dispatching, không phải expediting.",
        },
        {
          id: "e",
          text: "It only decides lot size and never interacts with workstation supervisors",
          isCorrect: false,
          rationale:
            "Cơ chế: expediter nhắc supervisor và xử lý task trễ/khẩn. Bẫy: gán nó cho quyết định planning đầu kỳ. Khóa: expediting là follow-up trong vận hành.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Batch PPC and expediting",
      takeaway:
        "Batch PPC thêm expediting để bám tiến độ nhiều lô, xử lý task trễ/khẩn bằng phối hợp với dispatcher/supervisor.",
    },
    {
      id: "q11",
      stem: "Which statement correctly matches a batch progress-review method with its meaning?",
      options: [
        {
          id: "a",
          text: "PCL is the bill of materials used only to list purchased components",
          isCorrect: false,
          rationale:
            "Cơ chế: PCL là production clearance list liệt kê tasks để gạch khi xong. Bẫy: nhầm PCL với BOM. Khóa: PCL theo dõi tiến độ task.",
        },
        {
          id: "b",
          text: "Inventory status report is a red tag used only for emergency jobs",
          isCorrect: false,
          rationale:
            "Cơ chế: red tag thuộc block/urgent task; inventory report báo supplied/processing/FG/WIP. Bẫy: trộn nhãn màu với báo cáo tồn kho. Khóa: report là bảng trạng thái.",
        },
        {
          id: "c",
          text: "Block system means no color or grouping is used; jobs are handled randomly",
          isCorrect: false,
          rationale:
            "Cơ chế: block system nhóm job cards/specifications theo ngày và màu. Bẫy: hiểu block như chặn thông tin. Khóa: block giúp gom và ưu tiên.",
        },
        {
          id: "d",
          text: "Block system groups job cards by day/color; PCL lists tasks to mark complete; inventory status report tracks supplied, processing, FG, and WIP",
          isCorrect: true,
          rationale:
            "Cơ chế: câu này khớp ba công cụ progress review của batch. Bẫy: chỉ nhớ tên viết tắt mà không gắn output quản lý. Khóa: mỗi công cụ trả lời một câu hỏi tiến độ khác nhau.",
        },
        {
          id: "e",
          text: "Finished goods are the same as WIP because both are unfinished items",
          isCorrect: false,
          rationale:
            "Cơ chế: finished goods đã hoàn thành, WIP còn dở dang. Bẫy: gộp mọi tồn kho vào một loại. Khóa: inventory report tách FG và WIP để quản lý trạng thái.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Batch progress review methods",
      takeaway:
        "Block system, PCL và inventory status report là ba cách khác nhau để bám tiến độ batch.",
    },
    {
      id: "q12",
      stem: "A factory receives one customized order for a large non-standard machine, with very high variety and quantity near one. How should this situation be classified?",
      options: [
        {
          id: "a",
          text: "Batch production, because any customer order is automatically a batch",
          isCorrect: false,
          rationale:
            "Cơ chế: batch cần lot/repeated demand, thường medium quantity. Bẫy: thấy 'order' rồi gọi batch. Khóa: Q near one + non-standard = jobbing/project.",
        },
        {
          id: "b",
          text: "Jobbing/project production, because quantity is near one and variety/customization is high",
          isCorrect: true,
          rationale:
            "Cơ chế: scenario khớp jobbing/project: Q=1, customized, non-standard. Bẫy: chọn theo tên sản phẩm thay vì Q/variety. Khóa: phân loại bằng quantity + variety.",
        },
        {
          id: "c",
          text: "Mass production, because large machines must use product layout",
          isCorrect: false,
          rationale:
            "Cơ chế: size lớn không đồng nghĩa mass; Q và variety mới quyết định. Bẫy: thấy machine lớn nên nghĩ dây chuyền lớn. Khóa: mass cần high quantity/low variety.",
        },
        {
          id: "d",
          text: "High-volume cellular production, because all non-standard products use cells",
          isCorrect: false,
          rationale:
            "Cơ chế: cellular phù hợp batch soft-variety, không phải mọi sản phẩm non-standard. Bẫy: gán layout theo cảm tính. Khóa: project lớn thường fixed-position/job shop.",
        },
        {
          id: "e",
          text: "Make-to-stock production, because the product is made before any customer order",
          isCorrect: false,
          rationale:
            "Cơ chế: stem nói nhận một customized order, tức make-to-order. Bẫy: bỏ qua order trigger. Khóa: MTO là dấu hiệu jobbing.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "Classifying jobbing/batch/mass by scenario",
      takeaway:
        "Phân loại hệ thống bằng Q + variety: Q≈1/customized → jobbing/project; lot medium → batch; high Q/low variety → mass.",
    },
  ],
  status: "ready",
  source:
    "Manufacturing Systems — slide 'Chapter 4 Jobbing and Batch' (lecturer Le Phuoc Luong, 39 slide) cho tầng vận hành PPC + ebook Groover, Automation, Production Systems & CIM 4e, §2.3 'Production Facilities' (p.33–36) và Fig 2.4 (p.32) cho tầng định vị (variety↔quantity, dải production quantity, plant layout, setup time).",
};

const topic05: Chapter = {
  slug: "topic-05",
  order: 5,
  title: "Topic 05 — Mass Production System",
  bigIdea:
    "Mass = CÂN BẰNG CHUYỀN, không điều phối đơn: trạm chậm nhất (bottleneck) quyết định nhịp của cả dây chuyền.",
  bigIdeaPillars: [
    {
      label: "Định vị",
      body: "High volume / low variety; dedicated equipment; flow-line (product) layout; single-model → mixed-model.",
    },
    {
      label: "Nền tảng",
      body: "Interchangeable parts + division of labor + standardization → economies of scale.",
    },
    {
      label: "Bài toán",
      body: "Line balancing: Tc = T ÷ Q, Nmin = Σti ÷ Tc, balance loss L% = (N×Tc − Σti) ÷ (N×Tc).",
    },
    {
      label: "Điều kiện",
      body: "Mass demand + demand stability — thiếu cầu lớn & ổn định thì dây chuyền dedicated là canh bạc.",
    },
  ],
  learningObjectives: [
    "Định vị mass production ở đầu high-volume/low-variety; phân biệt quantity production vs flow-line production và product layout (Groover §2.3.3).",
    "Giải thích 3 nền tảng lịch sử: division of labor (Adam Smith), interchangeable parts, standardization → economies of scale.",
    "Nêu 4 nguyên tắc flow-line production: workflow, interchangeable parts, minimum distance moved, division of operation.",
    "Nêu prerequisites của mass & flow-line production: mass demand + demand stability (+ line balancing, equipment reliability, materials handling, product design).",
    "Phân loại production line: transfer/assembly lines; single-model, multi-model, mixed-model (Table 5.1).",
    "Định nghĩa các thuật ngữ line balancing: total work content, cycle time Tc, service time, bottleneck, balance delay/loss.",
    "Áp dụng công thức line balancing: Tc = T ÷ Q, Nmin = Σti ÷ Tc, TTB, dj, balance loss L%; và bản Groover đầy đủ (Ts = Tc − Tr, Eb = Twc ÷ (w×Ts), Eb + d = 1).",
    "Phân biệt 2 loại bài toán line balancing (given Tc → min stations; given N → min Tc).",
    "Áp dụng heuristic Kilbridge–Wester để cân chuyền và tính balance loss (worked example 21 elements, L% = 0.69%).",
    "Phân biệt ranked positional weights & largest candidate rule; giải thích cycle time modification.",
    "Nêu improvement/support techniques cho LB và các quy tắc bố trí quality inspection trên flow line.",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "Mass = cân bằng chuyền: (A) định vị & nền tảng (vì sao mass rẻ), (B) line balancing cơ bản (công thức), (C) thuật toán & worked example. Bấm node để mở chi tiết.",
    nodes: [
      {
        id: "mass",
        label: "Mass Production",
        group: "concept",
        sectionId: "s1",
        detail:
          "High volume/low variety; lợi thế đến từ chuẩn hóa + cân bằng chuyền.",
      },
      {
        id: "g_base",
        label: "A. Định vị & nền tảng",
        group: "concept",
        parent: "mass",
        sectionId: "s1",
        detail:
          "Quantity vs flow-line, history, 4 nguyên tắc, prerequisites, classification.",
      },
      {
        id: "g_lb",
        label: "B. Line balancing cơ bản",
        group: "concept",
        parent: "mass",
        sectionId: "s6",
        detail:
          "Terminologies + công thức Tc/Nmin/L% + 2 loại bài toán.",
      },
      {
        id: "g_algo",
        label: "C. Thuật toán & worked example",
        group: "concept",
        parent: "mass",
        sectionId: "s9",
        detail: "Kilbridge–Wester, RPW, largest candidate, QI location.",
      },
      {
        id: "t_pos",
        label: "Định vị: quantity vs flow-line",
        group: "term",
        parent: "g_base",
        sectionId: "s1",
        detail: "High volume/low variety; single/mixed-model; product layout.",
      },
      {
        id: "t_history",
        label: "Nền tảng lịch sử",
        group: "term",
        parent: "g_base",
        sectionId: "s2",
        detail:
          "Division of labor + interchangeable parts + standardization → economies of scale.",
      },
      {
        id: "t_principles",
        label: "4 nguyên tắc flow-line",
        group: "term",
        parent: "g_base",
        sectionId: "s3",
        detail:
          "Workflow, interchangeable, min distance, division of operation.",
      },
      {
        id: "t_prereq",
        label: "Prerequisites",
        group: "term",
        parent: "g_base",
        sectionId: "s4",
        detail: "Mass demand + demand stability + reliability/handling/design.",
      },
      {
        id: "t_class",
        label: "Classification (Table 5.1)",
        group: "term",
        parent: "g_base",
        sectionId: "s5",
        detail: "Transfer/assembly; single/multi/mixed-model.",
      },
      {
        id: "t_terms",
        label: "Terminologies LB",
        group: "term",
        parent: "g_lb",
        sectionId: "s6",
        detail:
          "Total work content, cycle time, service time, bottleneck, balance loss.",
      },
      {
        id: "t_formula",
        label: "Công thức cốt lõi",
        group: "term",
        parent: "g_lb",
        sectionId: "s7",
        detail:
          "Tc = T÷Q, Nmin = Σti÷Tc, L% = (N×Tc−Σti)÷(N×Tc).",
      },
      {
        id: "t_two",
        label: "2 loại bài toán LB",
        group: "term",
        parent: "g_lb",
        sectionId: "s8",
        detail: "Given Tc → min stations; given N → min Tc.",
      },
      {
        id: "t_kw",
        label: "Kilbridge–Wester",
        group: "term",
        parent: "g_algo",
        sectionId: "s9",
        detail: "Heuristic cột; worked example 21 elements, L% = 0.69%.",
      },
      {
        id: "t_rpw",
        label: "RPW & largest candidate",
        group: "term",
        parent: "g_algo",
        sectionId: "s10",
        detail: "Ranked positional weights; largest candidate; cycle time modification.",
      },
      {
        id: "t_improve",
        label: "Improvement & QI location",
        group: "term",
        parent: "g_algo",
        sectionId: "s11",
        detail: "Kỹ thuật cải thiện LB + vị trí quality inspection.",
      },
    ],
    edges: [
      { from: "mass", to: "g_base" },
      { from: "mass", to: "g_lb" },
      { from: "mass", to: "g_algo" },
      { from: "g_base", to: "t_pos" },
      { from: "g_base", to: "t_history" },
      { from: "g_base", to: "t_principles" },
      { from: "g_base", to: "t_prereq" },
      { from: "g_base", to: "t_class" },
      { from: "g_lb", to: "t_terms" },
      { from: "g_lb", to: "t_formula" },
      { from: "g_lb", to: "t_two" },
      { from: "g_algo", to: "t_kw" },
      { from: "g_algo", to: "t_rpw" },
      { from: "g_algo", to: "t_improve" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "Mass = high volume/low variety",
      blocks: [
        comparisonBlock("Hai dạng mass production (Groover §2.3.3)", [
          "Dạng",
          "Cách làm",
          "Ví dụ / layout",
        ], [
          {
            label: "Quantity production",
            cells: [
              "Mass production một loại part trên máy đơn (stamping press + special tooling)",
              "Process layout hoặc máy chuyên; part rời",
            ],
          },
          {
            label: "Flow-line production",
            cells: [
              "Nhiều workstation nối tiếp; part di chuyển qua chuỗi để hoàn thành",
              "Product layout (dây chuyền) — vd assembly line ô tô, đồ gia dụng",
            ],
          },
        ]),
        calloutBlock(
          "key",
          "Định vị mass",
          "Mass ngồi ở đầu CAO của phổ variety↔quantity (Q > 10.000, variety thấp): thiết bị dedicated, demand rate cao (Groover Fig 2.7). Pure flow-line = single-model line (mọi sản phẩm giống hệt); thêm biến thể option/trim = mixed-model line (soft variety — vd ô tô hiện đại) (Groover p.36–37).",
        ),
      ],
      keyTerms: [
        { term: "mass production", definition: "Sản xuất high volume / low variety bằng thiết bị dedicated và quy trình tiêu chuẩn hóa." },
        { term: "quantity production", definition: "Mass production một loại part trên máy đơn hoặc thiết bị chuyên." },
        { term: "flow-line production", definition: "Production line gồm nhiều workstation nối tiếp, part đi qua chuỗi để hoàn thành." },
        { term: "product layout", definition: "Layout theo trình tự sản phẩm đi qua các operation trên dây chuyền." },
        { term: "single-model / mixed-model line", definition: "Single-model làm một item; mixed-model cho nhiều biến thể chạy trên cùng line." },
      ],
    },
    {
      id: "s2",
      heading: "Nền tảng lịch sử: vì sao mass rẻ",
      blocks: [
        comparisonBlock("Ba trụ làm nên mass production", [
          "Trụ",
          "Nội dung",
          "Bằng chứng lịch sử",
        ], [
          {
            label: "Division of labor",
            cells: [
              "Chia nhỏ việc, mỗi người làm một tác vụ chuyên biệt (Adam Smith, 'Wealth of Nations', 1746)",
              "Thợ chung + huấn luyện: 48.000 kim/ngày; làm riêng, không huấn luyện: < 20 kim/ngày",
            ],
          },
          {
            label: "Interchangeable parts",
            cells: [
              "Component chuẩn hóa, độ tin cậy cao → lắp lẫn nhau được",
              "North (1813): hợp đồng 20.000 súng, mọi part interchangeable",
            ],
          },
          {
            label: "Standardization → economies of scale",
            cells: [
              "Chuẩn hóa + volume lớn → chi phí/đơn vị giảm mạnh",
              "American system: Eli Terry đạt 10.000 đồng hồ/năm → $15/chiếc (trước $50–60)",
            ],
          },
        ]),
        calloutBlock(
          "insight",
          "Móc nối Topic 4",
          "$50–60 → $15 chính là ví dụ đồng hồ ở Topic 4: đây là mặt định lượng của 'economies of scale'. Interchangeable parts là điều kiện KỸ THUẬT để cân bằng chuyền — không lắp lẫn được thì không chia việc thành trạm được (slide 11–15/81).",
        ),
      ],
      keyTerms: [
        { term: "division of labor", definition: "Chia process thành các task chuyên biệt để tăng năng suất qua chuyên môn hóa." },
        { term: "interchangeable parts", definition: "Các component đủ chuẩn để thay thế/lắp lẫn mà không cần chỉnh riêng từng chiếc." },
        { term: "standardization", definition: "Chuẩn hóa thiết kế, part và quy trình để lặp lại ở volume lớn." },
        { term: "economies of scale", definition: "Chi phí đơn vị giảm khi volume tăng nhờ phân bổ fixed cost và học tập quy trình." },
        { term: "American system of manufacture", definition: "Hệ thống sản xuất dựa trên interchangeable parts và mechanization." },
      ],
    },
    {
      id: "s3",
      heading: "4 nguyên tắc flow-line production",
      blocks: [
        comparisonBlock("4 nguyên tắc flow-line (slide 5.2)", [
          "Nguyên tắc",
          "Nội dung",
        ], [
          {
            label: "1. Principle of workflow",
            cells: [
              "Workflow/materials/WIP chảy mượt & liên tục; giảm non-operative motions; các operation diễn ra song song — phụ thuộc line balancing",
            ],
          },
          {
            label: "2. Interchangeable parts",
            cells: [
              "Component chuẩn (standard set specifications) để lắp lẫn — nền của bài toán line balancing",
            ],
          },
          {
            label: "3. Minimum distance moved",
            cells: [
              "Cắt giảm di chuyển; tối đa hóa dùng không gian/layout; tập trung vào vị trí giữa các workstation liên tiếp",
            ],
          },
          {
            label: "4. Division of operation",
            cells: [
              "Chia process thành các work element; không bắt buộc nhưng là yếu tố quan trọng khi thiết kế chuyền; phụ thuộc technology & cấu trúc item",
            ],
          },
        ]),
      ],
      keyTerms: [
        { term: "workflow", definition: "Dòng materials/WIP qua các workstation theo trình tự liên tục." },
        { term: "interchangeable parts", definition: "Part chuẩn hóa để lắp lẫn được trên line." },
        { term: "minimum distance moved", definition: "Nguyên tắc giảm khoảng cách di chuyển giữa các workstation." },
        { term: "division of operation", definition: "Chia operation thành work elements để phân bổ vào workstation." },
      ],
    },
    {
      id: "s4",
      heading: "Prerequisites của mass & flow-line",
      blocks: [
        flowBlock(
          "s4",
          "Điều kiện tiên quyết để chọn mass",
          "tree",
          [
            {
              id: "s4_root",
              label: "Prerequisites",
              group: "concept",
              detail: "Điều kiện để áp dụng mass & flow-line production.",
            },
            {
              id: "s4_demand",
              label: "Mass demand",
              group: "term",
              parent: "s4_root",
              detail: "Phải có nhu cầu lớn — nền của high volume.",
            },
            {
              id: "s4_stable",
              label: "Demand stability",
              group: "term",
              parent: "s4_root",
              detail:
                "Nhu cầu ổn định — dây chuyền dedicated không chịu được cầu dao động mạnh.",
            },
            {
              id: "s4_other",
              label: "Điều kiện khác",
              group: "term",
              parent: "s4_root",
              detail:
                "Line balancing (phát hiện bottleneck), equipment reliability, materials handling, product design.",
            },
          ],
          [
            { from: "s4_root", to: "s4_demand" },
            { from: "s4_root", to: "s4_stable" },
            { from: "s4_root", to: "s4_other" },
          ],
          "Hai điều kiện quyết định là mass demand + demand stability; phần còn lại là điều kiện hỗ trợ (slide 5.3).",
        ),
        calloutBlock(
          "note",
          "Vì sao stability quan trọng",
          "Bất kỳ trì hoãn nào trong chuyển giao materials/WIP đều làm gián đoạn cả chuyền. Line balancing là yếu tố quan trọng để phát hiện bottleneck; chọn loại chuyền phụ thuộc loại item, tính khả thi sản xuất & kinh tế (slide 9/81).",
        ),
      ],
      keyTerms: [
        { term: "mass demand", definition: "Nhu cầu đủ lớn để justify dây chuyền high-volume dedicated." },
        { term: "demand stability", definition: "Nhu cầu ổn định để line không bị dư/thiếu công suất." },
        { term: "equipment reliability", definition: "Độ tin cậy thiết bị đủ cao để tránh dừng cả line." },
        { term: "materials handling", definition: "Hệ thống di chuyển materials/WIP giữa workstation." },
        { term: "bottleneck", definition: "Workstation chậm nhất, quyết định nhịp của line." },
      ],
    },
    {
      id: "s5",
      heading: "Classification of production lines",
      blocks: [
        comparisonBlock("Phân loại chuyền (Table 5.1)", [
          "Loại chuyền",
          "Item",
          "Volume/Work flow",
          "Equipment & jobs assignment",
        ], [
          {
            label: "Automation — single item",
            cells: ["Single item (1)", "None changing / regular work flow", "Unchanged"],
          },
          {
            label: "Automation — multi item",
            cells: ["Multi-item (>1)", "Batch changing / batch work flow", "Batch"],
          },
          {
            label: "Manual assembly — single item",
            cells: ["Single item (1)", "None / job characteristics", "Unchanged"],
          },
          {
            label: "Manual assembly — multi item",
            cells: ["Multi-item (>1)", "Batch / job characteristics", "Batch"],
          },
          {
            label: "Manual assembly — mixed item",
            cells: ["Mixed-item (>1)", "Continuous", "Batch"],
          },
        ]),
        calloutBlock(
          "note",
          "Single/Multi/Mixed-model",
          "Single-model: chỉ 1 item. Multi-model: nhiều item tương tự, mỗi loại làm theo lô (lô lớn ≈ single-model, lô nhỏ ≈ mixed-model). Mixed-model: nhiều loại item chạy đồng thời trên cùng chuyền (slide 16/81).",
        ),
      ],
      keyTerms: [
        { term: "transfer line", definition: "Production line tự động để chuyển và xử lý part qua các station." },
        { term: "assembly line", definition: "Line lắp ráp, thường manual hoặc semi-automated." },
        { term: "single-model line", definition: "Line sản xuất một item duy nhất." },
        { term: "multi-model line", definition: "Line sản xuất nhiều item theo từng batch." },
        { term: "mixed-model line", definition: "Line sản xuất nhiều item/variant đan xen trong dòng liên tục." },
      ],
    },
    {
      id: "s6",
      heading: "Terminologies của line balancing",
      blocks: [
        comparisonBlock("Thuật ngữ line balancing", [
          "Thuật ngữ",
          "Nghĩa",
        ], [
          {
            label: "Total work content (Twc)",
            cells: [
              "Tổng công việc của sản phẩm = productive work + non-productive work; = Σ thời gian các work element (Groover Eq 15.11)",
            ],
          },
          {
            label: "Work element (ti / Tek)",
            cells: [
              "Đơn vị công việc nhỏ nhất hợp lý, không chia nhỏ hơn được (minimum rational work element)",
            ],
          },
          {
            label: "Service/processing time (Tsi)",
            cells: [
              "Thời gian một workstation hoàn thành các job được gán cho nó",
            ],
          },
          {
            label: "Cycle time (Tc)",
            cells: [
              "Thời gian tối đa cho phép ở BẤT KỲ workstation nào — nhịp của chuyền",
            ],
          },
          {
            label: "Bottleneck",
            cells: [
              "Trạm có service time lớn nhất (Max Tsi) → quyết định cycle time của cả chuyền",
            ],
          },
          {
            label: "Balance delay / balance loss",
            cells: [
              "Chênh giữa tổng thời gian thực tế và cycle time ở các trạm — phần thời gian mất do cân chuyền không hoàn hảo",
            ],
          },
        ]),
        calloutBlock(
          "key",
          "Bottleneck = nhịp chuyền",
          "Vì mọi trạm chạy đồng bộ theo cùng cycle time, trạm chậm nhất (bottleneck) áp đặt nhịp cho cả chuyền; các trạm nhanh hơn sẽ có idle time. Mục tiêu line design: làm service time các trạm gần bằng nhau (Groover p.401).",
        ),
      ],
      keyTerms: [
        { term: "total work content", definition: "Tổng thời gian work element cần để hoàn thành một product." },
        { term: "minimum rational work element", definition: "Đơn vị công việc nhỏ nhất hợp lý trong line balancing." },
        { term: "service time", definition: "Thời gian workstation thực hiện các work element được gán." },
        { term: "cycle time", definition: "Nhịp tối đa cho phép ở mỗi workstation." },
        { term: "bottleneck", definition: "Workstation có service time lớn nhất." },
        { term: "balance delay", definition: "Phần thời gian mất/idle do phân bổ work không cân bằng." },
      ],
    },
    {
      id: "s7",
      heading: "Công thức cốt lõi",
      blocks: [
        formulaBlock(
          "Tc = T ÷ Q",
          [
            { symbol: "Tc", meaning: "cycle time (nhịp chuyền)" },
            { symbol: "T", meaning: "tổng thời gian cần để sản xuất Q đơn vị" },
            { symbol: "Q", meaning: "số đơn vị (sản lượng mục tiêu)" },
          ],
          "Notation slide (exam-facing). Bản Groover đầy đủ: Tc = 60 × E ÷ Rp (E = uptime efficiency, Rp = production rate).",
        ),
        formulaBlock(
          "Nmin = Σti ÷ Tc  (làm tròn LÊN)",
          [
            { symbol: "Nmin", meaning: "số workstation lý thuyết tối thiểu" },
            { symbol: "Σti", meaning: "total work content = tổng thời gian work element" },
          ],
          "Groover Eq 15.7: w* = MinInt ≥ Twc ÷ Ts. Luôn làm tròn LÊN vì không thể có nửa trạm.",
        ),
        formulaBlock(
          "L% = (N × Tc − Σti) ÷ (N × Tc) × 100",
          [
            { symbol: "L%", meaning: "balance loss (% thời gian mất do cân chuyền)" },
            { symbol: "N", meaning: "số workstation thực tế" },
            { symbol: "D = N×Tc − Σti", meaning: "total balance delay" },
          ],
          "Tương đương balance delay Groover Eq 15.15: d = (w×Ts − Twc) ÷ (w×Ts); và Eb + d = 1 (Eb = balance efficiency). Slide bỏ repositioning time nên Ts = Tc.",
        ),
        calcBlock(
          "Groover Example 15.1 — đọc công thức qua số thật",
          [
            { label: "Total work content", expr: "Twc = Σ Tek = 4.0 min" },
            {
              label: "Production rate (100.000 units/năm; 50 wk × 5 shift × 7.5 hr)",
              expr: "Rp = 100000 ÷ (50 × 5 × 7.5) = 53.33 units/hr",
            },
            {
              label: "Cycle time (uptime E = 0.96)",
              expr: "Tc = 60 × 0.96 ÷ 53.33 = 1.08 min",
            },
            {
              label: "Số trạm lý thuyết",
              expr: "w* = 4.0 ÷ 1.08 = 3.7 → làm tròn lên = 4 workers",
            },
            {
              label: "Service time cân chuyền (Tr = 0.08)",
              expr: "Ts = Tc − Tr = 1.08 − 0.08 = 1.00 min",
            },
          ],
          "Cần tối thiểu 4 trạm; cân chuyền về Ts = 1.00 min/trạm",
          "Nmin cho biết sàn số trạm; bottleneck ≤ Ts thì chuyền đạt Tc.",
          "Slide dùng phiên bản gọn Tc = T ÷ Q (bỏ E, Tr); Groover thêm uptime & repositioning cho sát thực tế (Groover p.403–404).",
        ),
      ],
      keyTerms: [
        { term: "cycle time (Tc)", definition: "Nhịp sản xuất cho phép để đạt output mục tiêu." },
        { term: "theoretical minimum stations", definition: "Số station tối thiểu theo Twc/Tc trước ràng buộc precedence." },
        { term: "balance loss", definition: "Tỷ lệ idle/lost time do cân chuyền chưa hoàn hảo." },
        { term: "balance efficiency (Eb)", definition: "Tỷ lệ thời gian station được dùng cho work content hữu ích." },
        { term: "repositioning time (Tr)", definition: "Thời gian chuyển/định vị lại giữa cycles." },
      ],
    },
    {
      id: "s8",
      heading: "Hai loại bài toán line balancing",
      blocks: [
        comparisonBlock("2 loại bài toán LB (slide 5.7)", [
          "Loại",
          "Cho trước",
          "Mục tiêu",
        ], [
          {
            label: "Loại 1",
            cells: [
              "Cycle time TC",
              "Gán work elements để TỐI THIỂU số workstation & balance loss; phân bổ balance delay đều nhất có thể",
            ],
          },
          {
            label: "Loại 2",
            cells: [
              "Số workstation N",
              "Gán work elements để TỐI THIỂU cycle time (tối đa output/utilization máy)",
            ],
          },
        ]),
        calloutBlock(
          "note",
          "Ràng buộc chung",
          "Cả hai bài toán đều phải thỏa: (1) tổng thời gian work element gán cho một trạm ≤ Tc (Σ Tek ≤ Ts), và (2) tuân precedence constraints (thứ tự bắt buộc, biểu diễn bằng precedence diagram) (Groover Eq 15.18).",
        ),
      ],
      keyTerms: [
        { term: "line balancing problem", definition: "Bài toán gán work elements vào workstation theo cycle time và precedence." },
        { term: "precedence constraint", definition: "Ràng buộc thứ tự: việc trước phải hoàn thành trước việc sau." },
        { term: "precedence diagram", definition: "Sơ đồ biểu diễn thứ tự phụ thuộc giữa work elements." },
        { term: "utilization", definition: "Mức sử dụng năng lực station/line so với khả năng sẵn có." },
      ],
    },
    {
      id: "s9",
      heading: "Kilbridge–Wester method",
      blocks: [
        calloutBlock(
          "key",
          "Ý tưởng Kilbridge–Wester",
          "Heuristic (Jackson 1956 / Kilbridge & Wester): xếp work element vào các CỘT theo precedence diagram, rồi lần lượt gán các job (ưu tiên job cột trước, dùng movable jobs) vào từng workstation sao cho tổng ≤ TC, tối thiểu số trạm. Áp cho bài toán nhỏ; bài lớn cần phần mềm (slide 30–34/81).",
        ),
        calcBlock(
          "Worked example — cân chuyền 21 work elements (TC = 36)",
          [
            {
              label: "Dữ liệu",
              expr: "21 work elements, tổng Σti = 143, cycle time cho trước TC = 36",
            },
            {
              label: "Gán theo cột (Kilbridge–Wester)",
              expr: "Station 1 = 35, Station 2 = 36, Station 3 = 36, Station 4 = 36 (phần còn lại)",
            },
            { label: "Số trạm đạt được", expr: "N = 4 workstations" },
            {
              label: "Balance loss",
              expr: "L% = (4 × 36 − 143) ÷ (4 × 36) × 100 = (144 − 143) ÷ 144 × 100",
            },
          ],
          "L% = 0.69%",
          "Chỉ 0.69% thời gian bị mất — cân chuyền gần như hoàn hảo với TC = 36.",
          "N nhỏ nhất + balance loss nhỏ nhất đi cùng nhau khi cho trước TC (slide 35–48/81).",
        ),
      ],
      keyTerms: [
        { term: "Kilbridge–Wester method", definition: "Heuristic gán work elements theo cột precedence để cân chuyền." },
        { term: "column", definition: "Nhóm work elements cùng cấp precedence trong Kilbridge–Wester." },
        { term: "movable job", definition: "Job có thể chuyển sang cột/trạm sau nếu vẫn thỏa precedence và cycle time." },
        { term: "cumulative time", definition: "Tổng thời gian các job đã gán cho workstation." },
      ],
    },
    {
      id: "s10",
      heading: "Ranked positional weights & largest candidate rule",
      blocks: [
        comparisonBlock("Hai heuristic khác", [
          "Heuristic",
          "Quy tắc gán",
          "Nguồn / ghi chú",
        ], [
          {
            label: "Ranked positional weights (RPW)",
            cells: [
              "Tính positional weight mỗi job = thời gian của nó + tổng thời gian các job đứng sau (theo precedence); gán theo weight giảm dần, thỏa precedence & ≤ Tc",
              "Helgeson & Birnie (1961), General Electric; nhanh & khá chính xác",
            ],
          },
          {
            label: "Largest candidate rule",
            cells: [
              "Bắt đầu WS1, luôn chọn job có processing time LỚN NHẤT trong tập job khả thi (thỏa precedence, ≤ remain time)",
              "Nhanh cho bài nhỏ; bài lớn dễ kẹt local optimum",
            ],
          },
        ]),
        calcBlock(
          "Example — RPW/largest candidate (TC = 0.55)",
          [
            { label: "Dữ liệu", expr: "11 work elements, Σ = 1.97, cycle time TC = 0.55" },
            { label: "Kết quả gán", expr: "N = 4 workstations" },
            { label: "Balance loss", expr: "L = 10.4%  (TC = 0.55)" },
            {
              label: "Cycle time modification",
              expr: "WS chậm nhất chỉ 0.53 → giảm TC còn 0.53 → L = 7%",
            },
          ],
          "L giảm 10.4% → 7% khi siết TC về 0.53",
          "Giảm cycle time về đúng bottleneck cắt bớt idle time.",
          "Giảm TC tiếp thì số workstation tăng — có giới hạn đánh đổi (slide 55–74/81).",
        ),
      ],
      keyTerms: [
        { term: "ranked positional weights", definition: "Heuristic xếp job theo positional weight giảm dần." },
        { term: "positional weight", definition: "Thời gian job cộng tổng thời gian các successor trong precedence diagram." },
        { term: "largest candidate rule", definition: "Heuristic ưu tiên job khả thi có processing time lớn nhất." },
        { term: "cycle time modification", definition: "Điều chỉnh cycle time về bottleneck thực tế để giảm idle time." },
      ],
    },
    {
      id: "s11",
      heading: "Improvement & support techniques",
      blocks: [
        comparisonBlock("Kỹ thuật cải thiện & hỗ trợ LB (slide 5.7)", [
          "Nhóm",
          "Kỹ thuật",
        ], [
          {
            label: "Improvement",
            cells: [
              "Improved work methods (giảm processing time); changed machining speeds (transfer lines); increased operator performance ở bottleneck; diversion of excess items; movement of workers",
            ],
          },
          {
            label: "Support",
            cells: [
              "Parallel workstations / thêm workers (overtime, thêm trạm giống nhau, thêm thợ ở bottleneck); xử lý khi cycle time < processing time; division of work elements (tách 1 element ra 2 trạm để giảm WS time)",
            ],
          },
        ]),
        calloutBlock(
          "note",
          "Nguyên tắc đánh đổi",
          "Số workstation tối thiểu ≈ balance loss tối thiểu. Muốn tăng output (giảm Tc) thường phải thêm trạm/thợ; muốn giảm chi phí thì siết balance loss. Longer-processing-time job nên gán trước job ngắn (job ngắn linh hoạt hơn khi cân) (slide 49–78/81).",
        ),
      ],
      keyTerms: [
        { term: "parallel workstations", definition: "Bố trí nhiều station song song cho cùng operation để xử lý bottleneck." },
        { term: "division of work elements", definition: "Tách work element để phân bổ qua nhiều station khi khả thi." },
        { term: "improved work methods", definition: "Cải thiện phương pháp thao tác để giảm processing time." },
        { term: "operator performance", definition: "Hiệu suất thao tác của worker tại workstation." },
      ],
    },
    {
      id: "s12",
      heading: "Location of quality inspection in flow lines",
      blocks: [
        comparisonBlock("Đặt quality inspection (QI) ở đâu trên chuyền", [
          "Đặt QI",
          "Lý do",
        ], [
          {
            label: "Trước WS có operational cost cao",
            cells: ["Tránh dồn chi phí cao lên phôi lỗi"],
          },
          {
            label: "Trước chuỗi WS khó kiểm/khó control",
            cells: ["Chặn lỗi trước khi khó phát hiện"],
          },
          {
            label: "Sau WS có tỷ lệ lỗi cao",
            cells: ["Bắt lỗi ngay tại nguồn phát sinh"],
          },
          {
            label: "Trước WS mà lỗi trước đó khó phát hiện (painting/assembly)",
            cells: ["Lỗi bị che sau khi sơn/lắp"],
          },
          {
            label: "Trước WS mà phôi lỗi không thể rework",
            cells: ["Tránh mất trắng phôi"],
          },
          {
            label: "Trước điểm chuyển giao trách nhiệm sang stage sau",
            cells: ["Chốt chất lượng trước khi bàn giao"],
          },
        ]),
        calloutBlock(
          "insight",
          "QI = chốt chặn dòng lỗi",
          "Trên flow line, một phôi lỗi trôi xuống trạm sau sẽ cộng dồn chi phí. Đặt QI đúng chỗ (trước WS đắt, trước điểm khó kiểm, sau WS hay lỗi) là cách rẻ nhất để chặn lỗi lan — liên hệ tư duy 'chặn non-value sớm' (slide 79–81/81).",
        ),
      ],
      keyTerms: [
        { term: "quality inspection", definition: "Hoạt động kiểm tra để phát hiện defect tại vị trí phù hợp trên line." },
        { term: "defective rate", definition: "Tỷ lệ sản phẩm/part lỗi phát sinh tại workstation hoặc stage." },
        { term: "rework", definition: "Sửa lại part lỗi để đưa về trạng thái chấp nhận được." },
        { term: "responsibility transfer", definition: "Điểm bàn giao trách nhiệm chất lượng sang stage/đơn vị tiếp theo." },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "Which statement correctly distinguishes quantity production from flow-line production?",
      options: [
        {
          id: "a",
          text: "Quantity production always uses a product layout with many sequential workstations",
          isCorrect: false,
          rationale:
            "Cơ chế: product layout nhiều workstation nối tiếp là dấu hiệu của flow-line production. Bẫy: gán layout dây chuyền cho mọi mass production. Khóa: quantity production có thể là một máy/special tooling làm một part.",
        },
        {
          id: "b",
          text: "Flow-line production means making one part on a single machine without sequential stations",
          isCorrect: false,
          rationale:
            "Cơ chế: single machine mass output mô tả quantity production. Bẫy: đảo nghĩa flow-line và quantity production. Khóa: flow-line cần chuỗi workstation.",
        },
        {
          id: "c",
          text: "Flow-line production uses multiple sequential workstations in a product layout; quantity production may mass-produce one part on a single machine",
          isCorrect: true,
          rationale:
            "Cơ chế: đây là đúng phân biệt trong Groover §2.3.3. Bẫy: chỉ nhìn volume cao mà bỏ cấu trúc dòng chảy. Khóa: flow-line = product layout nối tiếp; quantity = một part volume lớn, có thể trên máy đơn.",
        },
        {
          id: "d",
          text: "Quantity production is low-volume custom production, while flow-line production is jobbing",
          isCorrect: false,
          rationale:
            "Cơ chế: low-volume/custom là jobbing, không phải quantity production. Bẫy: trộn lại phổ variety↔quantity từ Topic 4. Khóa: cả hai dạng ở đây đều thuộc mass/high-volume.",
        },
        {
          id: "e",
          text: "Flow-line production cannot be used for assembly lines",
          isCorrect: false,
          rationale:
            "Cơ chế: assembly line là ví dụ điển hình của flow-line production. Bẫy: nghĩ flow-line chỉ là machining/transfer line. Khóa: flow-line có thể là processing hoặc assembly.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Quantity vs flow-line production",
      takeaway:
        "Mass production có hai dạng: quantity production trên máy/thiết bị chuyên và flow-line production qua nhiều workstation theo product layout.",
    },
    {
      id: "q02",
      stem: "Which combination best explains why mass production can reduce unit cost?",
      options: [
        {
          id: "a",
          text: "Fast machines alone, even if every part is unique and non-interchangeable",
          isCorrect: false,
          rationale:
            "Cơ chế: máy nhanh không đủ nếu part không chuẩn và không lắp lẫn. Bẫy: coi mass rẻ chỉ nhờ machine speed. Khóa: cần standardization + interchangeable parts để line ổn định.",
        },
        {
          id: "b",
          text: "Interchangeable parts, division of labor, and standardization leading to economies of scale",
          isCorrect: true,
          rationale:
            "Cơ chế: ba trụ này cho phép chia việc, lặp lại, giảm setup/variation và trải fixed cost trên volume lớn. Bẫy: nhớ từng trụ rời rạc nhưng không nối với economies of scale. Khóa: mass rẻ vì hệ thống chuẩn hóa ở volume lớn.",
        },
        {
          id: "c",
          text: "High variety, high customization, and frequent route changes",
          isCorrect: false,
          rationale:
            "Cơ chế: high variety/frequent changes làm tăng setup và điều phối, gần jobbing/batch hơn. Bẫy: nghĩ nhiều lựa chọn luôn tạo lợi thế. Khóa: mass cần low variety hoặc soft variety được kiểm soát.",
        },
        {
          id: "d",
          text: "Keeping every worker capable of performing every possible task",
          isCorrect: false,
          rationale:
            "Cơ chế: mass dựa vào division of labor, không phải worker làm mọi việc. Bẫy: lấy flexibility của job shop áp vào flow line. Khóa: chuyên môn hóa giúp tăng năng suất.",
        },
        {
          id: "e",
          text: "Avoiding standardization so each station can decide its own specifications",
          isCorrect: false,
          rationale:
            "Cơ chế: station tự đặt specification phá interchangeable parts và flow. Bẫy: nhầm local autonomy với efficiency. Khóa: standardization là nền của economies of scale.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Foundations of mass production",
      takeaway:
        "Mass production rẻ vì chuẩn hóa hệ thống: interchangeable parts + division of labor + standardization tạo economies of scale.",
    },
    {
      id: "q03",
      stem: "Adam Smith's needle example compares about 48,000 pins per day by trained workers working together with fewer than 20 pins per day individually. What concept does this mainly illustrate?",
      options: [
        {
          id: "a",
          text: "Interchangeable parts, because all needles are mechanically identical",
          isCorrect: false,
          rationale:
            "Cơ chế: interchangeable parts nói về component lắp lẫn; ví dụ kim ở đây nhấn vào chia việc và training. Bẫy: thấy sản phẩm giống nhau rồi gán sang interchangeable. Khóa: dấu hiệu chính là workers working together with specialized tasks.",
        },
        {
          id: "b",
          text: "Demand stability, because the example proves demand never changes",
          isCorrect: false,
          rationale:
            "Cơ chế: ví dụ không nói về demand over time. Bẫy: kéo prerequisite của mass vào ví dụ năng suất. Khóa: 48.000 vs <20 là productivity effect của division of labor.",
        },
        {
          id: "c",
          text: "Cycle time modification, because the bottleneck station was reduced to 0.53",
          isCorrect: false,
          rationale:
            "Cơ chế: 0.53 thuộc example RPW/cycle time modification, không liên quan Adam Smith. Bẫy: nhớ số nhưng gắn sai nguồn. Khóa: số kim là history foundation, không phải line balancing formula.",
        },
        {
          id: "d",
          text: "Division of labor and training can dramatically increase productivity",
          isCorrect: true,
          rationale:
            "Cơ chế: chia nhỏ task + huấn luyện làm worker chuyên môn hóa, năng suất tăng vọt. Bẫy: nghĩ do máy móc tự động. Khóa: ví dụ Adam Smith minh họa division of labor trước khi nói automation.",
        },
        {
          id: "e",
          text: "Quality inspection should always be placed only at the end of the line",
          isCorrect: false,
          rationale:
            "Cơ chế: QI location là quyết định chặn lỗi trên flow line, không phải ví dụ kim. Bẫy: gán mọi ví dụ lịch sử cho kiểm soát chất lượng. Khóa: đọc đúng khái niệm được minh họa.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Adam Smith needle example and division of labor",
      takeaway:
        "Ví dụ 48.000 vs <20 kim/ngày minh họa division of labor + training, không phải interchangeable parts hay machinery.",
    },
    {
      id: "q04",
      stem: "Which list contains the four principles of flow-line production from the topic?",
      options: [
        {
          id: "a",
          text: "Workflow, interchangeable parts, minimum distance moved, and division of operation",
          isCorrect: true,
          rationale:
            "Cơ chế: đây là đúng bốn nguyên tắc flow-line theo slide 5.2. Bẫy: nhớ từng từ nhưng thêm inventory hoặc bỏ interchangeable parts. Khóa: flow line cần dòng chảy, part chuẩn, di chuyển ngắn và chia operation.",
        },
        {
          id: "b",
          text: "Maximize inventory, maximize distance moved, random routing, and unique parts",
          isCorrect: false,
          rationale:
            "Cơ chế: các yếu tố này phá flow và tăng non-operative motion. Bẫy: nghĩ nhiều inventory giúp line an toàn. Khóa: nguyên tắc là minimum distance và interchangeable parts.",
        },
        {
          id: "c",
          text: "Workflow, custom parts, long queues, and jobbing flexibility",
          isCorrect: false,
          rationale:
            "Cơ chế: custom parts/long queues thuộc môi trường variety cao, không phải mass flow-line. Bẫy: trộn logic Topic 4 với Topic 5. Khóa: flow-line dựa vào standardization.",
        },
        {
          id: "d",
          text: "Division of operation only; the other three are optional and unrelated",
          isCorrect: false,
          rationale:
            "Cơ chế: division of operation quan trọng nhưng không đứng một mình. Bẫy: lấy một principle làm toàn bộ hệ thống. Khóa: flow-line là bộ nguyên tắc phối hợp.",
        },
        {
          id: "e",
          text: "Quality inspection, outsourcing, make-or-buy, and route sheets",
          isCorrect: false,
          rationale:
            "Cơ chế: route sheets/make-or-buy thuộc process planning; QI là support decision. Bẫy: gom mọi khái niệm manufacturing vào flow-line principles. Khóa: danh sách đúng nằm ở workflow/interchangeable/min distance/division.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Four principles of flow-line production",
      takeaway:
        "Bốn nguyên tắc flow-line là workflow, interchangeable parts, minimum distance moved và division of operation.",
    },
    {
      id: "q05",
      stem: "A firm is considering a dedicated mass-production line. Which prerequisites matter most before committing?",
      options: [
        {
          id: "a",
          text: "High-skill craft labor and maximum product variety",
          isCorrect: false,
          rationale:
            "Cơ chế: high-skill craft labor/high variety hợp jobbing hơn. Bẫy: lấy năng lực thợ làm prerequisite chính. Khóa: mass line cần demand lớn và ổn định.",
        },
        {
          id: "b",
          text: "A beautiful organization chart and many managerial levels",
          isCorrect: false,
          rationale:
            "Cơ chế: organization chart không justify dây chuyền dedicated. Bẫy: kéo Topic 2 vào quyết định line. Khóa: prerequisite của mass nằm ở market demand và stability.",
        },
        {
          id: "c",
          text: "Mass demand and demand stability, supported by line balancing, equipment reliability, materials handling, and product design",
          isCorrect: true,
          rationale:
            "Cơ chế: cầu lớn trả fixed/dedicated cost; cầu ổn định giữ line không bị nhàn rỗi hoặc quá tải. Bẫy: bỏ demand stability. Khóa: support factors chỉ có nghĩa khi hai điều kiện demand đạt.",
        },
        {
          id: "d",
          text: "Low demand and unstable demand, because a dedicated line is easiest to change",
          isCorrect: false,
          rationale:
            "Cơ chế: dedicated line khó đổi và tốn fixed cost. Bẫy: nghĩ mass line luôn linh hoạt. Khóa: thiếu cầu lớn/ổn định thì mass là canh bạc.",
        },
        {
          id: "e",
          text: "A decision to eliminate line balancing because it only applies to job shops",
          isCorrect: false,
          rationale:
            "Cơ chế: line balancing là trung tâm của flow-line/mass. Bẫy: nhầm line balancing với dispatching job shop. Khóa: mass quản bottleneck bằng cân chuyền.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Prerequisites for mass and flow-line production",
      takeaway:
        "Điều kiện quyết định của mass production là mass demand + demand stability; các yếu tố kỹ thuật hỗ trợ không thay thế được hai điều kiện này.",
    },
    {
      id: "q06",
      stem: "In a balanced production line, what does the bottleneck station determine?",
      options: [
        {
          id: "a",
          text: "The average processing time across all stations",
          isCorrect: false,
          rationale:
            "Cơ chế: average không quyết định nhịp nếu một station chậm hơn. Bẫy: lấy trung bình để làm cycle time. Khóa: line chạy theo station chậm nhất.",
        },
        {
          id: "b",
          text: "The fastest station, which forces all other stations to speed up",
          isCorrect: false,
          rationale:
            "Cơ chế: bottleneck là station chậm nhất, không phải nhanh nhất. Bẫy: đọc 'bottle' như điểm đẩy nhanh. Khóa: bottleneck hạn chế throughput.",
        },
        {
          id: "c",
          text: "Only the quality inspection location, not the production rate",
          isCorrect: false,
          rationale:
            "Cơ chế: QI location là quyết định riêng; bottleneck tác động trực tiếp cycle time/throughput. Bẫy: tách bottleneck khỏi nhịp chuyền. Khóa: station chậm nhất đặt giới hạn output.",
        },
        {
          id: "d",
          text: "The cycle time of the whole line; faster stations will have idle time",
          isCorrect: true,
          rationale:
            "Cơ chế: mọi station đồng bộ theo cycle time, nên station có service time lớn nhất áp đặt nhịp. Bẫy: nghĩ station nhanh bù được station chậm. Khóa: bottleneck quyết định line pace.",
        },
        {
          id: "e",
          text: "The number of product variants allowed in a mixed-model line",
          isCorrect: false,
          rationale:
            "Cơ chế: variants là vấn đề model mix/standardization; bottleneck là service-time constraint. Bẫy: trộn mixed-model với line balancing. Khóa: bottleneck là thời gian, không phải variety count.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Bottleneck and cycle time",
      takeaway:
        "Bottleneck là trạm có service time lớn nhất và quyết định cycle time của cả dây chuyền.",
    },
    {
      id: "q07",
      stem: "A line must produce Q units within available production time T. Which formula gives the required cycle time?",
      options: [
        {
          id: "a",
          text: "Tc = Q ÷ T",
          isCorrect: false,
          rationale:
            "Cơ chế: Q ÷ T là production rate dạng units/time, không phải cycle time. Bẫy: đảo mẫu số. Khóa: cycle time là time/unit nên T ÷ Q.",
        },
        {
          id: "b",
          text: "Tc = T × Q",
          isCorrect: false,
          rationale:
            "Cơ chế: nhân T với Q phóng đại thời gian, không cho nhịp mỗi unit. Bẫy: thấy hai biến thì nhân. Khóa: chia tổng thời gian cho số units.",
        },
        {
          id: "c",
          text: "Tc = T − Q",
          isCorrect: false,
          rationale:
            "Cơ chế: T và Q khác đơn vị nên không trừ trực tiếp. Bẫy: dùng thao tác số học không xét meaning. Khóa: Tc là thời gian trên mỗi unit.",
        },
        {
          id: "d",
          text: "Tc = T ÷ Q",
          isCorrect: true,
          rationale:
            "Cơ chế: cycle time = available time per required unit. Bẫy: nhầm với production rate Q ÷ T. Khóa: Tc là nhịp, không phải tổng thời gian.",
        },
        {
          id: "e",
          text: "Tc = T ÷ (Q × N)",
          isCorrect: false,
          rationale:
            "Cơ chế: N dùng trong balance loss/số station, không nằm trong notation slide Tc = T ÷ Q. Bẫy: nhét số station vào mọi công thức line balancing. Khóa: trước hết tính nhịp yêu cầu của line.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "Cycle time formula",
      takeaway:
        "Tc là nhịp thời gian cho mỗi unit: Tc = T ÷ Q.",
    },
    {
      id: "q08",
      stem: "A Kilbridge-Wester example has N = 4 stations, TC = 36, and total work content Σti = 143. What is the balance loss?",
      options: [
        {
          id: "a",
          text: "0.69%, computed as (4×36 − 143) ÷ (4×36) × 100",
          isCorrect: true,
          rationale:
            "Cơ chế: total available station time = 4×36 = 144; idle/loss = 144−143 = 1; 1÷144×100 = 0.69%. Bẫy: tính efficiency thay vì loss. Khóa: balance loss là phần thời gian trống so với N×TC.",
        },
        {
          id: "b",
          text: "99.3%, computed as 143 ÷ 144 × 100",
          isCorrect: false,
          rationale:
            "Cơ chế: 143÷144 là balance efficiency, không phải loss. Bẫy: chọn phần được dùng rồi gọi là loss. Khóa: loss = 1 − efficiency.",
        },
        {
          id: "c",
          text: "1%, because 144 − 143 = 1",
          isCorrect: false,
          rationale:
            "Cơ chế: 1 là thời gian idle tuyệt đối, chưa chia cho total available station time. Bẫy: quên mẫu số N×TC. Khóa: L% phải là tỷ lệ phần trăm.",
        },
        {
          id: "d",
          text: "3.97%, computed as 143 ÷ 36",
          isCorrect: false,
          rationale:
            "Cơ chế: 143÷36 cho xấp xỉ số station lý thuyết, không phải balance loss. Bẫy: dùng công thức Nmin cho câu L%. Khóa: L% dùng N×TC ở mẫu.",
        },
        {
          id: "e",
          text: "100.7%, computed as 4×36 ÷ 143 × 100",
          isCorrect: false,
          rationale:
            "Cơ chế: phép này so available time với work content và có thể vượt 100%, không phải loss. Bẫy: đảo tỷ lệ. Khóa: loss đo idle phần trên tổng available.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "Balance loss calculation",
      takeaway:
        "Balance loss = (N×TC − Σti) ÷ (N×TC) × 100; với 4, 36, 143 thì L% = 0.69%.",
    },
    {
      id: "q09",
      stem: "Groover Example 15.1 has total work content Twc = 4.0 min and cycle time Tc = 1.08 min. What is the theoretical minimum number of workers/stations?",
      options: [
        {
          id: "a",
          text: "3, because 3.7 should be rounded down",
          isCorrect: false,
          rationale:
            "Cơ chế: làm tròn xuống sẽ thiếu capacity vì 3 stations không chứa đủ Twc trong Tc. Bẫy: dùng rounding thường. Khóa: Nmin luôn làm tròn LÊN.",
        },
        {
          id: "b",
          text: "3.7, because fractional stations are allowed",
          isCorrect: false,
          rationale:
            "Cơ chế: 3.7 là kết quả tính lý thuyết trước rounding; thực tế không có 0.7 station. Bẫy: dừng ở phép chia. Khóa: phải chuyển thành integer feasible.",
        },
        {
          id: "c",
          text: "0.27, computed as 1.08 ÷ 4.0",
          isCorrect: false,
          rationale:
            "Cơ chế: đảo công thức tạo tỷ lệ không phải số station. Bẫy: dùng Tc ÷ Twc. Khóa: Nmin = Twc ÷ Tc.",
        },
        {
          id: "d",
          text: "4.32, computed as 4 × 1.08",
          isCorrect: false,
          rationale:
            "Cơ chế: nhân station giả định với Tc không trả lời số station tối thiểu. Bẫy: thấy 4 trong Twc rồi nhân. Khóa: chia Twc cho cycle time.",
        },
        {
          id: "e",
          text: "4, because 4.0 ÷ 1.08 = 3.7 and the result must be rounded up",
          isCorrect: true,
          rationale:
            "Cơ chế: Nmin = Twc ÷ Tc = 3.7, làm tròn lên thành 4 để đủ capacity. Bẫy: chọn 3 hoặc 3.7. Khóa: line balancing cần số station nguyên và feasible.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "Theoretical minimum stations",
      takeaway:
        "Nmin = Twc ÷ Tc và luôn làm tròn lên: 3.7 → 4.",
    },
    {
      id: "q10",
      stem: "Which statement correctly describes the two types of line balancing problems?",
      options: [
        {
          id: "a",
          text: "Given Tc, minimize the number of workstations; given N, minimize Tc to maximize output/utilization",
          isCorrect: true,
          rationale:
            "Cơ chế: Loại 1 giữ cycle time và tìm số station/cân delay; Loại 2 giữ số station và tìm cycle time nhỏ nhất. Bẫy: đảo mục tiêu. Khóa: xem biến nào được cho trước.",
        },
        {
          id: "b",
          text: "Given Tc, maximize the number of workstations; given N, maximize Tc",
          isCorrect: false,
          rationale:
            "Cơ chế: tăng station hoặc tăng Tc thường làm tăng cost/giảm output, trái mục tiêu. Bẫy: nghĩ nhiều station luôn tốt. Khóa: line balancing tối ưu trade-off capacity và idle time.",
        },
        {
          id: "c",
          text: "Both types always minimize Tc, regardless of what is given",
          isCorrect: false,
          rationale:
            "Cơ chế: nếu Tc đã cho thì mục tiêu không phải minimize Tc mà là gán work với ít station/loss. Bẫy: gom hai bài toán thành một. Khóa: given variable quyết định objective.",
        },
        {
          id: "d",
          text: "Both types ignore precedence constraints once the arithmetic is correct",
          isCorrect: false,
          rationale:
            "Cơ chế: precedence constraints luôn phải thỏa; số học đúng nhưng sai thứ tự vẫn infeasible. Bẫy: chỉ tính Σ time. Khóa: LB = time constraint + precedence constraint.",
        },
        {
          id: "e",
          text: "Given N, the goal is to maximize balance loss so bottlenecks are easier to see",
          isCorrect: false,
          rationale:
            "Cơ chế: balance loss là phần thời gian mất, cần giảm chứ không tăng. Bẫy: nghĩ bottleneck càng rõ càng tốt. Khóa: mục tiêu là cân service time và giảm idle.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Two types of line balancing problems",
      takeaway:
        "Loại bài toán line balancing phụ thuộc biến cho trước: Tc → min stations/loss; N → min Tc/max output.",
    },
    {
      id: "q11",
      stem: "Which statement correctly describes RPW and the largest candidate rule?",
      options: [
        {
          id: "a",
          text: "RPW assigns the shortest available job first and ignores all successors",
          isCorrect: false,
          rationale:
            "Cơ chế: RPW dùng positional weight = job time + successors, không chọn job ngắn nhất đơn thuần. Bẫy: nhầm RPW với shortest processing time. Khóa: successors là phần cốt lõi của positional weight.",
        },
        {
          id: "b",
          text: "RPW ranks jobs by positional weight; largest candidate chooses the longest feasible job, and both must obey precedence and remaining time",
          isCorrect: true,
          rationale:
            "Cơ chế: RPW dùng positional weight = thời gian job + successors; largest candidate ưu tiên processing time lớn nhất trong tập job khả thi. Bẫy: nghĩ heuristic chỉ là chọn job dài/ngắn mà bỏ precedence. Khóa: cả hai đều phải thỏa precedence và ≤ remain time.",
        },
        {
          id: "c",
          text: "Both heuristics are valid only when there are no precedence constraints",
          isCorrect: false,
          rationale:
            "Cơ chế: chính precedence diagram là input quan trọng của LB heuristics. Bẫy: thấy constraint phức tạp nên tưởng heuristic bỏ qua. Khóa: heuristic là cách xử lý precedence hiệu quả.",
        },
        {
          id: "d",
          text: "RPW means random positional work, so jobs are assigned randomly",
          isCorrect: false,
          rationale:
            "Cơ chế: RPW là ranked positional weights, có ranking rõ ràng. Bẫy: đoán acronym. Khóa: weight giảm dần định hướng thứ tự gán.",
        },
        {
          id: "e",
          text: "Largest candidate rule is the same as quality inspection placement",
          isCorrect: false,
          rationale:
            "Cơ chế: largest candidate là heuristic gán work elements; QI placement là nơi đặt kiểm tra chất lượng. Bẫy: trộn thuật toán cân chuyền với kiểm soát lỗi. Khóa: phân biệt line balancing và quality inspection.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "RPW and largest candidate rule",
      takeaway:
        "RPW dùng positional weight; largest candidate ưu tiên job dài nhất khả thi; cả hai vẫn phải thỏa precedence và cycle time.",
    },
    {
      id: "q12",
      stem: "Where should quality inspection be placed on a flow line according to the topic?",
      options: [
        {
          id: "a",
          text: "Only at the very end of the line, regardless of cost or defect source",
          isCorrect: false,
          rationale:
            "Cơ chế: nếu chờ đến cuối line, defect có thể cộng dồn cost qua nhiều workstation. Bẫy: nghĩ final inspection là đủ cho mọi trường hợp. Khóa: QI phải chặn lỗi trước điểm đắt/khó kiểm hoặc sau nguồn lỗi.",
        },
        {
          id: "b",
          text: "Never before expensive operations, because inspection always increases balance loss",
          isCorrect: false,
          rationale:
            "Cơ chế: QI trước operation cost cao giúp tránh đổ chi phí vào phôi lỗi. Bẫy: chỉ nhìn inspection như idle/loss. Khóa: mục tiêu là giảm cost lỗi lan xuống line.",
        },
        {
          id: "c",
          text: "Before high-operational-cost workstations, before hard-to-inspect stages, or after high-defect-rate workstations",
          isCorrect: true,
          rationale:
            "Cơ chế: đây là logic QI location trong flow lines: chặn lỗi trước khi chi phí tăng hoặc lỗi bị che, và bắt lỗi ngay sau nguồn phát sinh. Bẫy: đặt QI theo thói quen cuối chuyền. Khóa: QI là chốt chặn dòng lỗi.",
        },
        {
          id: "d",
          text: "Only before the first workstation, because defects cannot occur later",
          isCorrect: false,
          rationale:
            "Cơ chế: defect có thể phát sinh tại bất kỳ workstation nào, nhất là station có defective rate cao. Bẫy: coi lỗi chỉ đến từ incoming material. Khóa: QI có thể đặt sau WS hay lỗi.",
        },
        {
          id: "e",
          text: "Only after painting and assembly, because those stages make defects easier to see",
          isCorrect: false,
          rationale:
            "Cơ chế: painting/assembly có thể che lỗi trước đó, nên cần inspect trước khi lỗi bị che. Bẫy: đảo logic 'trước' thành 'sau'. Khóa: đặt QI trước điểm khó phát hiện.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Quality inspection location in flow lines",
      takeaway:
        "QI trên flow line nên đặt để chặn lỗi trước operation đắt/khó kiểm, sau nguồn lỗi cao, hoặc trước điểm bàn giao trách nhiệm.",
    },
  ],
  status: "ready",
  source:
    "Manufacturing Systems — slide 'Chapter 5 Mass Production' (Dr. Le Phuoc Luong, 81 slide) cho notation exam-facing + worked example + history/principles/QI + ebook Groover, Automation, Production Systems & CIM 4e, §2.3.3 (p.36–37, Fig 2.7) và Ch.15 'Manual Assembly Lines' (p.398–407, Eq 15.2/15.7/15.11/15.14/15.15) cho định nghĩa & công thức line balancing chuẩn.",
};

const topic06: Chapter = {
  slug: "topic-06",
  order: 6,
  title: "Topic 06 — Group Technology",
  bigIdea:
    "Nhìn ra cái GIỐNG NHAU giữa các part → gom thành family → thiết kế & sản xuất một lần, hưởng lợi thế quy mô dù volume mỗi part thấp.",
  bigIdeaPillars: [
    {
      label: "Triết lý",
      body: "Gom part chia sẻ đặc điểm hình học/quy trình thành part family → tái dùng thiết kế & bố trí máy; economies of scale ngay ở medium production.",
    },
    {
      label: "Nhận diện family",
      body: "Visual inspection / classification & coding (Opitz) / production flow analysis (PFA từ route sheets).",
    },
    {
      label: "Mã hóa",
      body: "Design vs manufacturing attributes; hierarchical (monocode) vs chain-type (polycode).",
    },
    {
      label: "Bố trí cell",
      body: "Composite part → machine cell (single / group-manual U-shaped / group semi-integrated); cầu nối batch → gần mass.",
    },
  ],
  learningObjectives: [
    "Giải thích triết lý group technology: gom part thành family để tái dùng thiết kế & sản xuất, hưởng economies of scale dù volume mỗi part thấp.",
    "Phân biệt 2 kiểu part family (same shape/diff production; diff shape/same production) và 3 cách nhận diện: visual inspection, classification & coding, production flow analysis (PFA).",
    "Nêu lợi ích của classification & coding và 3 cơ sở coding (design / manufacturing / both attributes).",
    "Phân biệt 2 cấu trúc coding: hierarchical (monocode) vs chain-type (polycode); giải thích Opitz system (form code + supplementary code + extension).",
    "Áp dụng Opitz để mã hóa một part đơn giản (worked example → 15100).",
    "Giải thích composite part concept và cách một machine cell sản xuất cả family bằng cách bỏ operation cho feature không có.",
    "Phân biệt các loại machine cell (single-machine / group-machine manual / group semi-integrated; + Groover: flexible manufacturing cell → Topic 7).",
    "Nêu benefits & limitations của group technology.",
    "(Nâng cao — Groover §18.4) Giải thích rank-order clustering trên part-machine incidence matrix và ý tưởng Hollier method để sắp máy trong cell.",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "Group Technology = nhìn ra cái giống nhau để tái dùng: (A) triết lý & part family, (B) classification & coding (Opitz), (C) machine cell design; + node §18.4 là kiến thức THÊM trong sách. Bấm node để mở chi tiết.",
    nodes: [
      {
        id: "gt",
        label: "Group Technology",
        group: "concept",
        sectionId: "s1",
        detail:
          "Gom part thành family → tái dùng thiết kế & sản xuất; economies of scale dù volume thấp.",
      },
      {
        id: "g_phil",
        label: "A. Triết lý & part family",
        group: "concept",
        parent: "gt",
        sectionId: "s1",
        detail: "Philosophy + 2 kiểu family + 3 cách nhận diện.",
      },
      {
        id: "g_code",
        label: "B. Classification & coding",
        group: "concept",
        parent: "gt",
        sectionId: "s3",
        detail: "Advantages, attribute basis, cấu trúc coding, Opitz.",
      },
      {
        id: "g_cell",
        label: "C. Machine cell design",
        group: "concept",
        parent: "gt",
        sectionId: "s6",
        detail: "Composite part, loại cell, benefits/limitations.",
      },
      {
        id: "t_phil",
        label: "Triết lý GT",
        group: "term",
        parent: "g_phil",
        sectionId: "s1",
        detail: "Part family → tái dùng; integrating design & manufacturing.",
      },
      {
        id: "t_family",
        label: "Part family + 3 cách nhận diện",
        group: "term",
        parent: "g_phil",
        sectionId: "s2",
        detail: "Visual inspection / classification & coding / PFA.",
      },
      {
        id: "t_cc",
        label: "C&C advantages + attributes",
        group: "term",
        parent: "g_code",
        sectionId: "s3",
        detail: "Design / manufacturing / both attributes.",
      },
      {
        id: "t_struct",
        label: "Coding structures",
        group: "term",
        parent: "g_code",
        sectionId: "s4",
        detail: "Hierarchical (monocode) vs chain-type (polycode); Opitz.",
      },
      {
        id: "t_opitz",
        label: "Opitz worked example",
        group: "term",
        parent: "g_code",
        sectionId: "s5",
        detail: "Form code → 15100.",
      },
      {
        id: "t_composite",
        label: "Composite part concept",
        group: "term",
        parent: "g_cell",
        sectionId: "s6",
        detail: "Part giả định chứa mọi feature của family.",
      },
      {
        id: "t_celltypes",
        label: "Types of machine cell",
        group: "term",
        parent: "g_cell",
        sectionId: "s7",
        detail: "Single / group-manual / group semi-integrated (+ FMS → Topic 7).",
      },
      {
        id: "t_benefit",
        label: "Benefits & limitations",
        group: "term",
        parent: "g_cell",
        sectionId: "s8",
        detail:
          "Lợi ích thiết kế/setup/utilization; hạn chế chi phí C&C & đổi hệ.",
      },
      {
        id: "t_roc",
        label: "§18.4 Rank-order clustering (THÊM)",
        group: "term",
        parent: "gt",
        sectionId: "s9",
        detail:
          "KIẾN THỨC THÊM TRONG SÁCH: part-machine incidence matrix → diagonalized blocks; Hollier.",
      },
    ],
    edges: [
      { from: "gt", to: "g_phil" },
      { from: "gt", to: "g_code" },
      { from: "gt", to: "g_cell" },
      { from: "gt", to: "t_roc" },
      { from: "g_phil", to: "t_phil" },
      { from: "g_phil", to: "t_family" },
      { from: "g_code", to: "t_cc" },
      { from: "g_code", to: "t_struct" },
      { from: "g_code", to: "t_opitz" },
      { from: "g_cell", to: "t_composite" },
      { from: "g_cell", to: "t_celltypes" },
      { from: "g_cell", to: "t_benefit" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "Triết lý Group Technology",
      blocks: [
        flowBlock(
          "s1",
          "Mạch tư duy GT",
          "horizontal",
          [
            {
              id: "s1_parts",
              label: "Nhiều part khác nhau",
              group: "concept",
              detail:
                "Nhu cầu thay đổi nhanh, nhiều part được thiết kế cùng lúc.",
            },
            {
              id: "s1_family",
              label: "Part family",
              group: "term",
              detail:
                "Gom các part chia sẻ đặc điểm hình học/quy trình thành một họ.",
            },
            {
              id: "s1_composite",
              label: "Composite part",
              group: "term",
              detail: "Part giả định đại diện mọi feature của family.",
            },
            {
              id: "s1_cell",
              label: "Machine cell",
              group: "term",
              detail: "Bố trí máy để làm cả family → tái dùng.",
            },
            {
              id: "s1_scale",
              label: "Economies of scale",
              group: "concept",
              detail: "Hưởng lợi thế quy mô dù volume mỗi part thấp.",
            },
          ],
          [
            { from: "s1_parts", to: "s1_family", label: "gom" },
            { from: "s1_family", to: "s1_composite", label: "đại diện" },
            { from: "s1_family", to: "s1_cell", label: "bố trí" },
            { from: "s1_cell", to: "s1_scale", label: "tái dùng" },
          ],
          "GT biến 'nhiều part rời' thành 'một họ tái dùng được' (slide 6.1).",
        ),
        calloutBlock(
          "key",
          "Vì sao GT quan trọng",
          "Triết lý (philosophy): xác định & gom các item cùng specifications thành family để lấy lợi thế trong DESIGN và PRODUCTION. GT tích hợp design & manufacturing; là cầu nối biến batch (Topic 4: volume vừa, variety cao) tiến gần hiệu quả mass, nhờ tái dùng thay vì làm lại từ đầu (slide 6.1, Groover §18.1).",
        ),
      ],
      keyTerms: [
        { term: "group technology", definition: "Triết lý gom các part/item có điểm giống nhau thành family để khai thác lợi thế thiết kế và sản xuất." },
        { term: "part family", definition: "Nhóm part có đặc điểm design hoặc manufacturing tương tự nhau." },
        { term: "composite part", definition: "Part giả định chứa toàn bộ feature/operation đại diện cho một family." },
        { term: "machine cell", definition: "Nhóm máy được bố trí để sản xuất một hoặc nhiều part family." },
        { term: "economies of scale", definition: "Lợi thế chi phí khi tái dùng thiết kế/quy trình và tăng tính lặp lại trong sản xuất." },
      ],
    },
    {
      id: "s2",
      heading: "Part family & 3 cách nhận diện",
      blocks: [
        comparisonBlock("Hai kiểu part family", [
          "Kiểu",
          "Ý nghĩa",
        ], [
          {
            label: "Same shape, different production",
            cells: [
              "Hình dạng giống nhau nhưng yêu cầu sản xuất khác (vd độ chính xác, vật liệu khác)",
            ],
          },
          {
            label: "Different shape, same production",
            cells: [
              "Hình dạng khác nhau nhưng cùng quy trình/nguồn lực sản xuất",
            ],
          },
        ]),
        comparisonBlock("3 cách nhận diện part family", [
          "Cách",
          "Cách làm",
          "Đánh đổi",
        ], [
          {
            label: "Visual inspection",
            cells: [
              "Dùng phán đoán, nhìn part hoặc ảnh part để gom nhóm",
              "Dễ & nhanh, nhưng có thể thiếu chính xác",
            ],
          },
          {
            label: "Classification & coding",
            cells: [
              "Nhận diện điểm giống/khác rồi gán mã theo coding scheme",
              "Chính xác & hệ thống, nhưng tốn chi phí xây hệ mã",
            ],
          },
          {
            label: "Production flow analysis (PFA)",
            cells: [
              "Dùng thông tin trên route sheets để phân nhóm part theo dòng gia công",
              "Bám dữ liệu thực tế; không cần thiết kế mã",
            ],
          },
        ]),
      ],
      keyTerms: [
        { term: "part family", definition: "Nhóm part tương tự về hình dạng hoặc quy trình sản xuất." },
        { term: "visual inspection", definition: "Nhận diện family bằng quan sát trực quan và kinh nghiệm." },
        { term: "classification and coding", definition: "Gán mã cho part dựa trên attributes để nhận diện giống/khác." },
        { term: "production flow analysis (PFA)", definition: "Phân tích route sheets để gom part theo dòng gia công." },
        { term: "route sheet", definition: "Tài liệu ghi sequence operation/machine cho một part." },
      ],
    },
    {
      id: "s3",
      heading: "Advantages & cơ sở coding",
      blocks: [
        comparisonBlock("Lợi ích của classification & coding", [
          "Nhóm lợi ích",
          "Cụ thể",
        ], [
          {
            label: "Thiết kế",
            cells: [
              "Xác định part family & gom máy dễ; giảm việc thiết kế trùng; cải thiện & nhất quán specifications",
            ],
          },
          {
            label: "Quy trình",
            cells: [
              "Process design & planning nhanh; áp dụng NC programs dễ; hỗ trợ set-up → giảm setup time & flow time",
            ],
          },
          {
            label: "Quản lý",
            cells: [
              "Ước lượng equipment/work elements & production cost chính xác; scheduling tốt hơn; tăng utilization máy/tool/người",
            ],
          },
        ]),
        comparisonBlock("3 cơ sở coding", [
          "Cơ sở",
          "Nội dung",
        ], [
          {
            label: "Design attributes",
            cells: ["Hình dạng, kích thước, dung sai, vật liệu…"],
          },
          {
            label: "Manufacturing attributes",
            cells: ["Process, sequence, tooling, thời gian gia công…"],
          },
          {
            label: "Both",
            cells: [
              "Kết hợp cả design & manufacturing — phổ biến nhất trong thực tế",
            ],
          },
        ]),
      ],
      keyTerms: [
        { term: "design attributes", definition: "Thuộc tính hình học/kỹ thuật của part như shape, dimensions, tolerances, material." },
        { term: "manufacturing attributes", definition: "Thuộc tính quy trình như operation sequence, tooling, processing time." },
        { term: "setup time", definition: "Thời gian chuẩn bị/đổi setup trước khi gia công." },
        { term: "flow time", definition: "Thời gian part đi qua hệ thống sản xuất." },
        { term: "utilization", definition: "Mức sử dụng machine/tool/worker so với capacity sẵn có." },
      ],
    },
    {
      id: "s4",
      heading: "Cấu trúc coding + Opitz system",
      blocks: [
        comparisonBlock("2 cấu trúc mã (coding structures)", [
          "Cấu trúc",
          "Cách hoạt động",
          "Đặc điểm",
        ], [
          {
            label: "Hierarchical (monocode)",
            cells: [
              "Giá trị mỗi vị trí PHỤ THUỘC vị trí đứng trước",
              "Nén nhiều thông tin trong ít ký tự; tập trung vào một đặc tính",
            ],
          },
          {
            label: "Chain-type (polycode)",
            cells: [
              "Mỗi vị trí CỐ ĐỊNH & độc lập, mang một nghĩa riêng",
              "Chứa nhiều thông tin hơn; dùng cho đa dạng shape",
            ],
          },
          {
            label: "Mixed",
            cells: ["Kết hợp cả hai", "Phổ biến trong thực tế"],
          },
        ]),
        flowBlock(
          "s4",
          "Cấu trúc Opitz code",
          "horizontal",
          [
            {
              id: "s4_form",
              label: "Form code (12345)",
              group: "term",
              detail: "5 số đầu — design information (hình dạng, tỷ lệ, lỗ…).",
            },
            {
              id: "s4_supp",
              label: "Supplementary code (6789)",
              group: "term",
              detail: "4 số — dimension, material, accuracy…",
            },
            {
              id: "s4_ext",
              label: "Extension (ABCD)",
              group: "term",
              detail:
                "4 ký tự — process type & sequencing; tùy từng công ty.",
            },
          ],
          [
            { from: "s4_form", to: "s4_supp", label: "bổ sung" },
            { from: "s4_supp", to: "s4_ext", label: "mở rộng" },
          ],
          "Opitz (H. Opitz, Aachen) — một trong các hệ C&C đầu tiên & nổi tiếng. Ngoài ra có Multi-class (Organization for Industrial Research, tới 30 vị trí, cấu trúc hierarchical/tree) (slide 6.3.3–6.3.4).",
        ),
      ],
      keyTerms: [
        { term: "hierarchical structure (monocode)", definition: "Cấu trúc mã trong đó ý nghĩa một vị trí phụ thuộc vị trí trước." },
        { term: "chain-type structure (polycode)", definition: "Cấu trúc mã trong đó mỗi vị trí có ý nghĩa cố định và độc lập." },
        { term: "Opitz system", definition: "Hệ classification & coding nổi tiếng gồm form code, supplementary code và extension." },
        { term: "form code", definition: "5 số đầu trong Opitz, chứa design information." },
        { term: "supplementary code", definition: "4 số tiếp theo trong Opitz, chứa dimension/material/accuracy." },
        { term: "extension", definition: "Phần mở rộng tùy công ty, thường cho process type và sequencing." },
        { term: "Multi-class", definition: "Hệ coding nhiều vị trí, cấu trúc hierarchical/tree." },
      ],
    },
    {
      id: "s5",
      heading: "Opitz worked example",
      blocks: [
        calcBlock(
          "Mã hóa Opitz cho một part (form code)",
          [
            {
              label: "Vị trí 1 — L/D ratio",
              expr: "L/D = 1.5 → positional number 1 = 1",
            },
            {
              label: "Vị trí 2 — gia công & bolt",
              expr: "both size processing & one size bolt → số 2 = 5",
            },
            {
              label: "Vị trí 3 — lỗ",
              expr: "through hole → số 3 = 1",
            },
            {
              label: "Vị trí 4, 5 — mặt",
              expr: "không gia công mặt (none-processing on face) → số 4 = 0, số 5 = 0",
            },
          ],
          "Opitz code = 15100",
          "Form code 5 số nắm gọn hình học chính của part.",
          "Part khác cùng family sẽ có code gần giống → dễ gom nhóm & tái dùng process plan (slide 17–20/31).",
        ),
      ],
      keyTerms: [
        { term: "Opitz coding", definition: "Cách mã hóa part bằng Opitz system để biểu diễn attributes." },
        { term: "form code", definition: "5 chữ số đầu trong Opitz, mô tả hình dạng và đặc điểm thiết kế chính." },
        { term: "length/diameter ratio", definition: "Tỷ lệ L/D dùng để phân loại hình học part dạng tròn/xoay." },
        { term: "positional number", definition: "Giá trị ở một vị trí cụ thể trong code." },
      ],
    },
    {
      id: "s6",
      heading: "Composite part concept",
      blocks: [
        calloutBlock(
          "key",
          "Composite part là gì",
          "Composite part = một part GIẢ ĐỊNH (hypothetical) chứa TẤT CẢ design & manufacturing attributes của family. Mỗi part thật chỉ có một số feature; nhưng nếu thiết kế cell làm được composite part thì cell làm được MỌI thành viên family — chỉ cần BỎ operation ứng với feature part đó không có (Groover p.507).",
        ),
        comparisonBlock("Ví dụ composite part (Table 18.5) — feature → operation", [
          "Design feature",
          "Manufacturing operation",
        ], [
          { label: "External cylinder", cells: ["Turning"] },
          { label: "Cylinder face", cells: ["Facing"] },
          {
            label: "Cylindrical step / smooth surface",
            cells: ["External cylindrical grinding"],
          },
          { label: "Axial hole", cells: ["Drilling"] },
          { label: "Counterbore", cells: ["Counterboring"] },
          { label: "Internal threads", cells: ["Tapping"] },
        ]),
        calloutBlock(
          "note",
          "Từ composite part → cell",
          "Production cell cho family = tập máy đủ làm composite part (7 operations ở ví dụ Groover Fig 18.5). Trong thực tế số attribute > 7 và phải chừa dung sai cho biến thể kích thước/hình dạng trong family (Groover p.508).",
        ),
      ],
      keyTerms: [
        { term: "composite part", definition: "Part giả định chứa tất cả design và manufacturing attributes của một part family." },
        { term: "hypothetical part", definition: "Part không nhất thiết tồn tại thật, dùng để đại diện family." },
        { term: "design attribute", definition: "Feature hình học/kỹ thuật của part." },
        { term: "manufacturing operation", definition: "Operation cần để tạo feature của part." },
        { term: "machine cell", definition: "Tập máy đủ năng lực làm family dựa trên composite part." },
      ],
    },
    {
      id: "s7",
      heading: "Types of machine cell",
      blocks: [
        comparisonBlock("Các loại machine cell", [
          "Loại cell",
          "Đặc điểm",
          "Material handling",
        ], [
          {
            label: "a. Single-machine cell",
            cells: [
              "1 máy + fixtures/tooling; làm một (hoặc vài) family part; một loại process (turning, milling…)",
              "Setup đơn giản; năng suất thấp",
            ],
          },
          {
            label: "b. Group-machine cell — manual handling",
            cells: [
              "Nhiều máy phối hợp làm ≥1 family; thường layout chữ U",
              "Operator tự chuyển WIP; linh hoạt, rẻ, không cần conveyor",
            ],
          },
          {
            label: "c. Group-machine cell — semi-integrated handling",
            cells: [
              "Nhiều máy đặt hai bên conveyor",
              "Dùng conveyor chuyển material/WIP (semi-integrated)",
            ],
          },
          {
            label: "d. Flexible manufacturing cell / FMS (Groover, → Topic 7)",
            cells: [
              "Cell/hệ tự động linh hoạt",
              "Tự động hóa cao — học kỹ ở Topic 7",
            ],
          },
        ]),
        calloutBlock(
          "note",
          "Assembly cell vs part cell + key machine",
          "Groover phân biệt assembly cells (làm subassembly) vs part cells (gia công part). Layout chữ U ở group-machine manual cho phép worker đa năng di chuyển dễ, đổi model nhanh, kiểm soát WIP trực quan (Groover p.508–509). Loại (d) FMS thuộc Topic 7.",
        ),
      ],
      keyTerms: [
        { term: "single-machine cell", definition: "Cell một máy với fixtures/tooling để làm một hoặc vài part family." },
        { term: "group-machine cell", definition: "Cell gồm nhiều máy được bố trí để làm một hoặc nhiều family." },
        { term: "manual handling", definition: "Material/WIP được operator chuyển thủ công giữa máy." },
        { term: "semi-integrated handling", definition: "Material/WIP được chuyển bằng conveyor hoặc cơ cấu bán tích hợp." },
        { term: "U-shaped layout", definition: "Bố trí cell dạng chữ U giúp worker di chuyển và quan sát dễ." },
        { term: "key machine", definition: "Máy trung tâm/quan trọng trong cell, ảnh hưởng cách bố trí các máy khác." },
      ],
    },
    {
      id: "s8",
      heading: "Benefits & limitations của GT",
      blocks: [
        comparisonBlock("Benefits của GT (slide 6.5.2)", [
          "Khía cạnh",
          "Lợi ích",
        ], [
          {
            label: "Product design",
            cells: [
              "Sửa/tái dùng design attributes → giảm design job & time → giảm cost",
            ],
          },
          {
            label: "Attachment/tooling",
            cells: [
              "Attachment chuẩn hóa dùng cho cả family (vd đồ gá khoan lỗ) → nhanh & chính xác",
            ],
          },
          {
            label: "Process planning",
            cells: [
              "Áp automated process planning; product standardization → giảm operation cost",
            ],
          },
          {
            label: "Employee satisfaction",
            cells: [
              "Thợ dễ hoàn thành việc trên cùng nhóm attribute, biết rõ mình làm gì",
            ],
          },
        ]),
        calloutBlock(
          "note",
          "Limitations (slide 6.5.1)",
          "GT không miễn phí: (1) classification & coding thường xây riêng cho từng công ty; (2) chi phí C&C cao; (3) máy đã đặt cố định trong cell → khó xoay khi demand đổi; (4) rắc rối khi thay đổi hệ thống. → GT hợp khi có nhóm part ổn định, lặp lại (slide 29–31/31).",
        ),
      ],
      keyTerms: [
        { term: "design standardization", definition: "Chuẩn hóa design attributes để tái dùng thiết kế." },
        { term: "standardized attachment", definition: "Attachment/tooling chuẩn dùng chung cho một part family." },
        { term: "automated process planning", definition: "Tự động hóa lập process plan nhờ dữ liệu part family/code." },
        { term: "employee satisfaction", definition: "Mức hài lòng của worker khi công việc rõ ràng, lặp lại vừa đủ và kiểm soát tốt hơn." },
        { term: "classification cost", definition: "Chi phí xây dựng/duy trì hệ classification & coding." },
      ],
    },
    {
      id: "s9",
      heading: "[NÂNG CAO] Rank-order clustering & Hollier method",
      blocks: [
        calloutBlock(
          "note",
          "⚠ Kiến thức THÊM trong sách — không có trong slide",
          "Phần này thuộc Groover §18.4 (Analysis of Cellular Manufacturing), KHÔNG có trong slide/đề chương này. Đưa vào để mở rộng; người học coi là tham khảo nâng cao, không bắt buộc thuộc.",
        ),
        calloutBlock(
          "key",
          "Rank-order clustering giải gì",
          "Bài toán: với một part-machine incidence matrix (hàng = máy, cột = part, ô = 1 nếu part cần máy đó), làm sao gom máy & part thành các cell? Rank-order clustering (King) sắp lại hàng/cột để đưa các số 1 về các KHỐI CHÉO (diagonalized blocks) — mỗi khối = một part-machine group (một cell) (Groover p.513).",
        ),
        calcBlock(
          "Cách đọc hàng thành số nhị phân (Example 18.1)",
          [
            {
              label: "Đọc mỗi hàng trái→phải như số nhị phân",
              expr: "hàng 100100010",
            },
            {
              label: "Đổi ra thập phân",
              expr: "1×2^8 + 1×2^5 + 1×2^1 = 256 + 32 + 2 = 290",
            },
            {
              label: "Xếp hàng theo giá trị giảm dần, rồi làm tương tự cho cột; lặp tới khi ổn định",
              expr: "reorder rows ↓ → reorder columns ↓ → lặp",
            },
          ],
          "Ma trận gom về 3 part-machine groups (3 cell)",
          "Các số 1 dồn về khối chéo → mỗi khối là một family + nhóm máy tương ứng.",
          "Trường hợp lý tưởng: 3 nhóm tách rời hoàn toàn. Thực tế có part 'lạc' cần xử lý riêng (Groover p.513–515).",
        ),
        calloutBlock(
          "note",
          "Hollier method (sắp máy trong cell)",
          "Sau khi có part-machine groups, Hollier method dùng from-to chart để sắp THỨ TỰ máy trong cell sao cho dòng chảy xuôi, ít backtracking nhất (Groover §18.4.2, Example 18.2). Cũng là kiến thức nâng cao.",
        ),
      ],
      keyTerms: [
        { term: "rank-order clustering", definition: "Thuật toán sắp lại hàng/cột của part-machine incidence matrix để tìm part-machine groups." },
        { term: "part-machine incidence matrix", definition: "Ma trận hàng = machine, cột = part, ô = 1 nếu part cần machine đó." },
        { term: "diagonalized block", definition: "Khối số 1 nằm gần đường chéo sau khi reorder, đại diện một part-machine group." },
        { term: "Hollier method", definition: "Phương pháp dùng from-to chart để sắp thứ tự máy trong cell." },
        { term: "from-to chart", definition: "Bảng lượng di chuyển giữa các máy/điểm để tối ưu dòng chảy layout." },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "What is the core philosophy of Group Technology?",
      options: [
        {
          id: "a",
          text: "Increase the volume of every individual part until each one becomes a mass-production item",
          isCorrect: false,
          rationale:
            "Cơ chế: GT không cần biến từng part thành high-volume item; nó gom similarity để tái dùng. Bẫy: hiểu economies of scale là phải tăng volume từng mã part. Khóa: scale đến từ part family, không chỉ từ một part riêng lẻ.",
        },
        {
          id: "b",
          text: "Group parts with similar design or manufacturing characteristics into families to reuse design and production advantages",
          isCorrect: true,
          rationale:
            "Cơ chế: GT nhận ra cái giống nhau giữa parts, tạo part family và machine cell để tái dùng design/process. Bẫy: học GT như một layout trick. Khóa: triết lý chính là similarity → family → reuse → economies of scale.",
        },
        {
          id: "c",
          text: "Use only one large product line for all parts, regardless of part differences",
          isCorrect: false,
          rationale:
            "Cơ chế: GT gom theo family, không ép mọi part vào một line duy nhất. Bẫy: nhầm GT với mass flow-line. Khóa: GT phù hợp medium variety/medium production hơn.",
        },
        {
          id: "d",
          text: "Eliminate all classification systems so designers can work independently",
          isCorrect: false,
          rationale:
            "Cơ chế: classification & coding là một công cụ quan trọng để nhận diện family. Bẫy: nghĩ độc lập thiết kế giúp nhanh hơn. Khóa: GT giảm trùng lặp bằng dữ liệu chung.",
        },
        {
          id: "e",
          text: "Separate design and manufacturing so each department optimizes alone",
          isCorrect: false,
          rationale:
            "Cơ chế: GT tích hợp design & manufacturing quanh part family. Bẫy: tối ưu cục bộ từng phòng ban. Khóa: lợi ích GT đến từ nối design attributes với manufacturing attributes.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Group Technology philosophy",
      takeaway:
        "GT nhìn ra similarity giữa parts để tạo part family, tái dùng design/production và hưởng economies of scale dù volume từng part thấp.",
    },
    {
      id: "q02",
      stem: "Which statement correctly describes the two types of part families?",
      options: [
        {
          id: "a",
          text: "A part family must have both identical shape and identical production requirements",
          isCorrect: false,
          rationale:
            "Cơ chế: family có thể giống shape nhưng khác production, hoặc khác shape nhưng cùng production. Bẫy: đặt điều kiện quá chặt. Khóa: similarity có thể nằm ở design hoặc manufacturing.",
        },
        {
          id: "b",
          text: "Part families are based only on color and customer name",
          isCorrect: false,
          rationale:
            "Cơ chế: GT dùng design/manufacturing attributes, không dùng nhãn thương mại tùy tiện. Bẫy: gom nhóm theo thông tin không tác động process. Khóa: family phải giúp tái dùng design hoặc production.",
        },
        {
          id: "c",
          text: "Part families are possible only in pure mass production",
          isCorrect: false,
          rationale:
            "Cơ chế: GT đặc biệt hữu ích ở medium production, nơi mỗi part không đủ volume như mass. Bẫy: nghĩ family chỉ dành cho dây chuyền dedicated. Khóa: GT là cầu nối batch → gần mass.",
        },
        {
          id: "d",
          text: "A family may have same shape with different production requirements, or different shapes with the same production requirements",
          isCorrect: true,
          rationale:
            "Cơ chế: đây là đúng hai kiểu family trong slide. Bẫy: chỉ nhìn hình dạng và bỏ route/process. Khóa: family có thể được nhận diện theo design similarity hoặc production similarity.",
        },
        {
          id: "e",
          text: "A family is simply a random list of parts assigned to the same manager",
          isCorrect: false,
          rationale:
            "Cơ chế: random assignment không tạo lợi ích tái dùng. Bẫy: hiểu family như nhóm hành chính. Khóa: part family phải có similarity kỹ thuật.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Part family types",
      takeaway:
        "Part family không bắt buộc giống mọi thứ; điểm giống có thể là shape hoặc production process.",
    },
    {
      id: "q03",
      stem: "Which set lists the three main methods for identifying part families?",
      options: [
        {
          id: "a",
          text: "Final inspection, outsourcing analysis, and product costing",
          isCorrect: false,
          rationale:
            "Cơ chế: các hoạt động này không phải ba cách nhận diện family trong GT. Bẫy: gom mọi công cụ manufacturing vào GT. Khóa: nhớ đúng bộ visual inspection / C&C / PFA.",
        },
        {
          id: "b",
          text: "Only classification and coding; visual inspection and PFA are not valid methods",
          isCorrect: false,
          rationale:
            "Cơ chế: classification & coding là một cách, nhưng visual inspection và PFA cũng được nêu rõ. Bẫy: coi cách hệ thống nhất là cách duy nhất. Khóa: có 3 mức từ trực quan đến dữ liệu route.",
        },
        {
          id: "c",
          text: "Visual inspection, classification and coding, and production flow analysis using route sheets",
          isCorrect: true,
          rationale:
            "Cơ chế: đây là đúng ba cách nhận diện family. Bẫy: nghĩ PFA dùng bản vẽ thiết kế. Khóa: PFA dựa route sheets và dòng gia công.",
        },
        {
          id: "d",
          text: "Line balancing, Hollier method, and final assembly inspection",
          isCorrect: false,
          rationale:
            "Cơ chế: line balancing thuộc mass line; Hollier là nâng cao để sắp máy sau khi có group; QI không nhận diện family. Bẫy: trộn Topic 5 và §18.4 vào core family identification. Khóa: family identification có bộ ba riêng.",
        },
        {
          id: "e",
          text: "Market segmentation, brand coding, and sales forecasting",
          isCorrect: false,
          rationale:
            "Cơ chế: GT phân nhóm theo design/manufacturing, không theo marketing. Bẫy: thấy chữ group rồi kéo sang khách hàng. Khóa: part family là nhóm kỹ thuật.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Part family identification methods",
      takeaway:
        "Ba cách nhận diện part family là visual inspection, classification & coding, và PFA dùng route sheets.",
    },
    {
      id: "q04",
      stem: "What kinds of attributes can be used in a part classification and coding system?",
      options: [
        {
          id: "a",
          text: "Only supplier names, because coding is a purchasing tool",
          isCorrect: false,
          rationale:
            "Cơ chế: supplier name không phải cơ sở chính của C&C. Bẫy: nhầm mã quản trị mua hàng với mã kỹ thuật GT. Khóa: coding phải mô tả design/manufacturing attributes.",
        },
        {
          id: "b",
          text: "Only part color and warehouse shelf location",
          isCorrect: false,
          rationale:
            "Cơ chế: color/shelf không đủ để tái dùng process plan hoặc cell design. Bẫy: dùng thuộc tính dễ thấy nhưng không có ý nghĩa sản xuất. Khóa: attributes phải liên quan shape/process.",
        },
        {
          id: "c",
          text: "Only design attributes; manufacturing attributes cannot be coded",
          isCorrect: false,
          rationale:
            "Cơ chế: manufacturing attributes như process, sequence, tooling có thể được mã hóa. Bẫy: nghĩ coding chỉ là hình học. Khóa: C&C có thể dựa design, manufacturing hoặc cả hai.",
        },
        {
          id: "d",
          text: "Only manufacturing attributes; design attributes are never useful",
          isCorrect: false,
          rationale:
            "Cơ chế: design attributes như shape/dimensions/tolerances là nền của nhiều hệ code. Bẫy: kéo GT hoàn toàn về shop floor. Khóa: GT nối cả design và manufacturing.",
        },
        {
          id: "e",
          text: "Design attributes, manufacturing attributes, or both",
          isCorrect: true,
          rationale:
            "Cơ chế: slide nêu ba cơ sở coding: design, manufacturing, hoặc kết hợp. Bẫy: tuyệt đối hóa một phía. Khóa: hệ C&C mạnh thường dùng both để phục vụ design và production.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Coding attributes",
      takeaway:
        "Classification & coding có thể dựa design attributes, manufacturing attributes, hoặc kết hợp cả hai.",
    },
    {
      id: "q05",
      stem: "Which statement correctly distinguishes hierarchical (monocode) from chain-type (polycode) coding?",
      options: [
        {
          id: "a",
          text: "Hierarchical coding has dependent positions; chain-type coding has fixed independent positions",
          isCorrect: true,
          rationale:
            "Cơ chế: monocode phụ thuộc vị trí trước; polycode mỗi vị trí mang nghĩa cố định độc lập. Bẫy: đảo hai cấu trúc vì đều là chuỗi ký tự. Khóa: dependency là dấu hiệu của hierarchical.",
        },
        {
          id: "b",
          text: "Chain-type coding means every position depends on the previous one",
          isCorrect: false,
          rationale:
            "Cơ chế: dependency thuộc hierarchical, không phải chain-type. Bẫy: chữ chain khiến tưởng nghĩa nối phụ thuộc. Khóa: chain-type/polycode có vị trí cố định.",
        },
        {
          id: "c",
          text: "Hierarchical coding cannot compress information",
          isCorrect: false,
          rationale:
            "Cơ chế: hierarchical có thể nén nhiều thông tin trong ít ký tự nhờ phụ thuộc ngữ cảnh. Bẫy: nghĩ phụ thuộc làm mã dài hơn. Khóa: monocode thường compact.",
        },
        {
          id: "d",
          text: "Both coding structures are impossible to mix in real systems",
          isCorrect: false,
          rationale:
            "Cơ chế: mixed structures phổ biến trong thực tế. Bẫy: coi hai loại như loại trừ tuyệt đối. Khóa: nhiều hệ code kết hợp monocode và polycode.",
        },
        {
          id: "e",
          text: "Hierarchical and chain-type are names for visual inspection methods",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là coding structures, không phải visual inspection. Bẫy: trộn cách nhận diện family với cấu trúc mã. Khóa: visual inspection không tạo code vị trí.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Hierarchical vs chain-type coding",
      takeaway:
        "Hierarchical/monocode phụ thuộc vị trí trước; chain-type/polycode có các vị trí cố định và độc lập.",
    },
    {
      id: "q06",
      stem: "What is the correct structure of the Opitz coding system?",
      options: [
        {
          id: "a",
          text: "12345 is a process extension, 6789 is a design form code, and ABCD is material only",
          isCorrect: false,
          rationale:
            "Cơ chế: câu này đảo vai trò các phần của Opitz. Bẫy: nhớ ký tự nhưng không nhớ meaning. Khóa: 12345 là form/design; 6789 là supplementary; ABCD là extension process tùy công ty.",
        },
        {
          id: "b",
          text: "The form code is only for process sequencing, not design information",
          isCorrect: false,
          rationale:
            "Cơ chế: form code chứa design information như shape và lỗ. Bẫy: kéo toàn bộ Opitz về manufacturing. Khóa: Opitz bắt đầu từ form code design.",
        },
        {
          id: "c",
          text: "The extension must be exactly the same for every company",
          isCorrect: false,
          rationale:
            "Cơ chế: extension ABCD tùy công ty, thường cho process type/sequencing. Bẫy: nghĩ mọi vị trí Opitz đều chuẩn hóa cứng. Khóa: extension là phần company-specific.",
        },
        {
          id: "d",
          text: "Opitz has no supplementary code",
          isCorrect: false,
          rationale:
            "Cơ chế: Opitz có supplementary code 6789 cho dimension/material/accuracy. Bẫy: chỉ nhớ 5 số đầu. Khóa: form code chưa phải toàn bộ Opitz.",
        },
        {
          id: "e",
          text: "12345 is the form code for design information, 6789 is supplementary, and ABCD is an extension for process type and sequencing",
          isCorrect: true,
          rationale:
            "Cơ chế: đây là cấu trúc Opitz đúng theo slide/Groover. Bẫy: đảo form code với extension. Khóa: đọc Opitz theo ba lớp: design → supplementary → company/process extension.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Opitz system structure",
      takeaway:
        "Opitz gồm 12345 form code, 6789 supplementary code và ABCD extension tùy công ty.",
    },
    {
      id: "q07",
      stem: "An Opitz worked example gives L/D = 1.5 → position 1 = 1; size processing and one size bolt → position 2 = 5; through hole → position 3 = 1; no face processing → positions 4 and 5 = 0,0. What is the form code?",
      options: [
        {
          id: "a",
          text: "11500",
          isCorrect: false,
          rationale:
            "Cơ chế: 11500 đảo vị trí 2 và 3. Bẫy: nhớ các chữ số nhưng quên thứ tự positional number. Khóa: đọc lần lượt vị trí 1→5.",
        },
        {
          id: "b",
          text: "151",
          isCorrect: false,
          rationale:
            "Cơ chế: form code có 5 vị trí, không được bỏ hai số 0 cuối. Bẫy: xem 0 là không quan trọng. Khóa: 0 vẫn là positional number có nghĩa.",
        },
        {
          id: "c",
          text: "15100",
          isCorrect: true,
          rationale:
            "Cơ chế: ghép vị trí 1=1, 2=5, 3=1, 4=0, 5=0 thành 15100. Bẫy: đảo thứ tự hoặc bỏ số 0. Khóa: Opitz code đọc theo đúng vị trí.",
        },
        {
          id: "d",
          text: "51001",
          isCorrect: false,
          rationale:
            "Cơ chế: 51001 không theo thứ tự các vị trí đã cho. Bẫy: ghép số theo cảm tính. Khóa: vị trí đầu tiên luôn đến từ L/D ratio trong example này.",
        },
        {
          id: "e",
          text: "00151",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là đảo ngược thứ tự form code. Bẫy: đọc từ phải sang trái. Khóa: Opitz form code ghi từ vị trí 1 đến vị trí 5.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "Opitz coding worked example",
      takeaway:
        "Worked example Opitz cho form code = 15100; hai số 0 cuối vẫn phải giữ vì là vị trí 4 và 5.",
    },
    {
      id: "q08",
      stem: "What is the composite part concept in Group Technology?",
      options: [
        {
          id: "a",
          text: "A real part that every customer must buy before the family can be produced",
          isCorrect: false,
          rationale:
            "Cơ chế: composite part là hypothetical, không nhất thiết là part thật. Bẫy: đọc composite như một sản phẩm vật lý bắt buộc. Khóa: nó là model đại diện cho family.",
        },
        {
          id: "b",
          text: "A hypothetical part containing all design and manufacturing attributes of a family; real members skip operations for features they do not have",
          isCorrect: true,
          rationale:
            "Cơ chế: nếu cell làm được composite part thì làm được mọi member bằng cách bỏ operation thừa. Bẫy: nghĩ từng part phải có đủ mọi feature. Khóa: composite part dùng để thiết kế cell đủ năng lực.",
        },
        {
          id: "c",
          text: "A code used only for supplier payment",
          isCorrect: false,
          rationale:
            "Cơ chế: composite part liên quan design features và manufacturing operations, không phải accounting/payment. Bẫy: lẫn part representative với administrative code. Khóa: nó phục vụ machine cell design.",
        },
        {
          id: "d",
          text: "A final inspection checklist at the end of a mass line",
          isCorrect: false,
          rationale:
            "Cơ chế: final inspection thuộc quality control; composite part thuộc GT/cell design. Bẫy: kéo Topic 5 QI vào Topic 6. Khóa: composite part trả lời cell cần làm được feature nào.",
        },
        {
          id: "e",
          text: "A route sheet that ignores all design features",
          isCorrect: false,
          rationale:
            "Cơ chế: composite part tích hợp cả design và manufacturing attributes. Bẫy: bỏ design features. Khóa: chính design features quyết định operation trong cell.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Composite part concept",
      takeaway:
        "Composite part là part giả định chứa mọi feature của family; cell làm được composite part thì làm được từng member bằng cách bỏ operation không cần.",
    },
    {
      id: "q09",
      stem: "Which option correctly matches machine cell types with material handling?",
      options: [
        {
          id: "a",
          text: "A single-machine cell is automatically the same as an FMS",
          isCorrect: false,
          rationale:
            "Cơ chế: single-machine cell có thể chỉ là một máy với fixture/tooling, không tự động thành FMS. Bẫy: thấy chữ cell rồi gán automation cao. Khóa: FMS là mức tự động linh hoạt cao hơn, nối Topic 7.",
        },
        {
          id: "b",
          text: "Group-machine manual cells must use conveyors for every part move",
          isCorrect: false,
          rationale:
            "Cơ chế: manual handling nghĩa là operator tự chuyển WIP; conveyor thuộc semi-integrated handling. Bẫy: gán conveyor cho mọi multi-machine cell. Khóa: phân biệt manual vs semi-integrated.",
        },
        {
          id: "c",
          text: "Semi-integrated handling means no material movement is planned",
          isCorrect: false,
          rationale:
            "Cơ chế: semi-integrated handling dùng conveyor/cơ cấu chuyển WIP. Bẫy: hiểu semi-integrated như bỏ qua handling. Khóa: handling vẫn có, chỉ được tích hợp một phần.",
        },
        {
          id: "d",
          text: "U-shaped layout is unrelated to group-machine manual cells",
          isCorrect: false,
          rationale:
            "Cơ chế: group-machine manual cell thường dùng layout chữ U để worker di chuyển dễ. Bẫy: xem U-shape chỉ là trang trí layout. Khóa: U-shape hỗ trợ manual handling và visual control.",
        },
        {
          id: "e",
          text: "Single-machine cells use one machine; group-machine manual cells often use U-shaped layouts with operator handling; group semi-integrated cells use conveyors",
          isCorrect: true,
          rationale:
            "Cơ chế: câu này khớp phân loại trong slide/Groover. Bẫy: lẫn manual với conveyor hoặc single-machine với FMS. Khóa: loại cell đọc theo số máy và cách material handling.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Machine cell types",
      takeaway:
        "Types of machine cell được phân biệt bằng số máy và material handling: single, group-manual, group semi-integrated, và FMS học tiếp ở Topic 7.",
    },
    {
      id: "q10",
      stem: "Which statement best captures both benefits and limitations of Group Technology?",
      options: [
        {
          id: "a",
          text: "GT can reduce duplicate design work and support standardized tooling/process planning, but C&C can be costly and fixed cells can be hard to change when demand shifts",
          isCorrect: true,
          rationale:
            "Cơ chế: GT tạo lợi ích design, attachment/tooling, process planning và utilization, nhưng có chi phí C&C và rủi ro khi cell đã cố định. Bẫy: chỉ nhìn mặt tốt. Khóa: GT hợp khi part families ổn định và lặp lại.",
        },
        {
          id: "b",
          text: "GT has no limitations once a coding system exists",
          isCorrect: false,
          rationale:
            "Cơ chế: coding system vẫn tốn chi phí xây/duy trì và cell vẫn khó xoay khi demand đổi. Bẫy: xem C&C như giải pháp miễn phí. Khóa: GT là trade-off, không phải magic.",
        },
        {
          id: "c",
          text: "GT only increases employee dissatisfaction because workers never understand their tasks",
          isCorrect: false,
          rationale:
            "Cơ chế: slide nêu employee satisfaction có thể tăng vì worker làm nhóm attribute quen thuộc. Bẫy: đảo benefit thành limitation. Khóa: clarity trong cell có thể giúp worker hiểu việc.",
        },
        {
          id: "d",
          text: "GT always works best when every order is completely unique and never repeats",
          isCorrect: false,
          rationale:
            "Cơ chế: GT cần part family ổn định/lặp lại để justify C&C/cell. Bẫy: nghĩ GT xử lý mọi variety cực đoan. Khóa: nếu không có similarity ổn định, GT khó phát huy.",
        },
        {
          id: "e",
          text: "GT eliminates the need for process planning entirely",
          isCorrect: false,
          rationale:
            "Cơ chế: GT hỗ trợ/automate process planning, không xóa nhu cầu lập kế hoạch. Bẫy: hiểu support tool thành replacement tuyệt đối. Khóa: family/code làm planning nhanh và nhất quán hơn.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Benefits and limitations of Group Technology",
      takeaway:
        "GT có lợi ích lớn về design/process/cell utilization, nhưng C&C và cell redesign có chi phí nên cần part families ổn định.",
    },
    {
      id: "q11",
      stem: "In Groover §18.4, what does rank-order clustering do with a part-machine incidence matrix?",
      options: [
        {
          id: "a",
          text: "It assigns Opitz codes to individual parts based on L/D ratio",
          isCorrect: false,
          rationale:
            "Cơ chế: Opitz coding là C&C part code; rank-order clustering là phân tích matrix để tạo part-machine groups. Bẫy: nhầm hai công cụ đều thuộc GT. Khóa: ROC không tạo form code 15100.",
        },
        {
          id: "b",
          text: "It performs line balancing by minimizing cycle time in a mass production line",
          isCorrect: false,
          rationale:
            "Cơ chế: line balancing thuộc Topic 5; ROC thuộc cellular manufacturing analysis. Bẫy: thấy matrix/algorithm rồi kéo về mass line. Khóa: ROC gom máy và part, không cân station.",
        },
        {
          id: "c",
          text: "It inspects final products at the end of a flow line",
          isCorrect: false,
          rationale:
            "Cơ chế: final inspection là quality control, không phải matrix clustering. Bẫy: trộn QI với cellular analysis. Khóa: ROC làm việc trên part-machine incidence matrix.",
        },
        {
          id: "d",
          text: "It reorders rows and columns so the 1s form diagonalized blocks, each representing a part-machine group",
          isCorrect: true,
          rationale:
            "Cơ chế: ROC sắp lại hàng/cột để dồn số 1 về khối chéo; mỗi block là một candidate cell. Bẫy: nghĩ nó chỉ đọc mã part. Khóa: output là part-machine groups.",
        },
        {
          id: "e",
          text: "It removes all machines that have more than one operation",
          isCorrect: false,
          rationale:
            "Cơ chế: ROC không loại máy theo số operation; nó reorder matrix. Bẫy: hiểu clustering thành cắt bỏ dữ liệu. Khóa: mục tiêu là phát hiện block/cell structure.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "Rank-order clustering (nâng cao §18.4)",
      takeaway:
        "Rank-order clustering là kiến thức THÊM trong sách: reorder part-machine incidence matrix để tạo diagonalized blocks/part-machine groups.",
    },
    {
      id: "q12",
      stem: "In Groover §18.4, how is the row 100100010 read in rank-order clustering, and what is Hollier method used for?",
      options: [
        {
          id: "a",
          text: "100100010 is read as 10 + 10 + 10 = 30, and Hollier assigns Opitz form codes",
          isCorrect: false,
          rationale:
            "Cơ chế: hàng được đọc như số nhị phân theo powers of two, không cộng các cụm chữ số. Bẫy: đọc binary như decimal chunks. Khóa: 100100010 = 2^8 + 2^5 + 2^1.",
        },
        {
          id: "b",
          text: "100100010 is read as 2^7 + 2^4 + 2^0 = 145, and Hollier is for final inspection",
          isCorrect: false,
          rationale:
            "Cơ chế: vị trí trái nhất trong ví dụ là 2^8, không phải 2^7; Hollier không phải QI. Bẫy: lệch một bậc lũy thừa và nhầm chức năng. Khóa: giữ đúng indexing ví dụ Groover.",
        },
        {
          id: "c",
          text: "100100010 is read as 2^8 + 2^5 + 2^1 = 290, and Hollier arranges machines in a cell to reduce backtracking",
          isCorrect: true,
          rationale:
            "Cơ chế: 256 + 32 + 2 = 290; Hollier dùng from-to chart để sắp thứ tự máy trong cell. Bẫy: nhầm ROC/Hollier với Opitz hoặc line balancing. Khóa: cả hai thuộc kiến thức nâng cao §18.4 về cellular analysis.",
        },
        {
          id: "d",
          text: "100100010 is the Opitz code for the worked example, and Hollier chooses the L/D ratio",
          isCorrect: false,
          rationale:
            "Cơ chế: worked example Opitz là 15100; 100100010 là row trong incidence matrix. Bẫy: nhầm hai ví dụ số. Khóa: q07 là Opitz, q12 là ROC/Hollier.",
        },
        {
          id: "e",
          text: "100100010 is ignored because rank-order clustering does not use binary values",
          isCorrect: false,
          rationale:
            "Cơ chế: ROC đọc hàng/cột như binary rank để reorder. Bẫy: bỏ bước tính rank. Khóa: binary value là cơ chế sắp thứ tự trong thuật toán.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "Binary reading and Hollier method (nâng cao §18.4)",
      takeaway:
        "Kiến thức THÊM §18.4: hàng 100100010 đọc thành 290; Hollier dùng from-to chart để sắp máy trong cell, giảm backtracking.",
    },
  ],
  status: "ready",
  source:
    "Manufacturing Systems — slide 'Chapter 6 Group technology' (lecturer Đặng Võ Hùng, 31 slide) cho Opitz worked example + advantages/benefits + cell types + ebook Groover, Automation, Production Systems & CIM 4e, Chapter 18 'Group Technology and Cellular Manufacturing' (p.503–516) cho định nghĩa chuẩn + composite part + §18.4 rank-order clustering/Hollier (đánh dấu kiến thức nâng cao).",
};

const topic07: Chapter = {
  slug: "topic-07",
  order: 7,
  title: "Topic 07 — Flexible Manufacturing Systems (FMS)",
  bigIdea:
    "FMS = tự động hóa mà VẪN linh hoạt: gộp năng suất của mass với khả năng đổi sản phẩm của batch, nhờ CNC + material handling tự động + computer control trên nền group technology.",
  bigIdeaPillars: [
    {
      label: "Nền tảng",
      body: "FMS dựa trên group technology (part family) + CNC + DNC — 'FMS relies on the principles of group technology' (Groover p.533).",
    },
    {
      label: "3 thành phần",
      body: "Processing stations (CNC) + automated material handling & storage + distributed computer control system (+ human).",
    },
    {
      label: "Phổ linh hoạt",
      body: "Theo số máy: single-machine cell → FMC (2–3) → FMS (4+). Theo mức độ: dedicated ↔ random-order.",
    },
    {
      label: "Điều khiển & lợi ích",
      body: "8 computer functions, 6 data files; utilization ↑ (tới 80% vs 50% batch), WIP ↓, MLT ↓.",
    },
  ],
  learningObjectives: [
    "Định nghĩa FMS như một highly automated GT machine cell và giải thích vì sao gọi là 'flexible automated' (linh hoạt so với transfer line, tự động so với manned cell).",
    "Nêu 4 tests of flexibility (part-variety, schedule-change, error-recovery, new-part) và giải thích test nào quan trọng nhất.",
    "Liệt kê 3 thành phần của FMS: processing stations (CNC), automated material handling & storage, computer control system; và vai trò con người.",
    "Phân loại FMS theo số máy (single-machine cell / FMC 2–3 máy / FMS 4+ máy) và theo mức linh hoạt (dedicated vs random-order).",
    "Nêu 5 functions của handling system và 5 layout configurations (in-line, loop, ladder, open-field, robot-centered cell).",
    "Liệt kê 8 computer functions và 6 FMS data files; giải thích các system reports (utilization, production, status, tool).",
    "Nêu 5 benefits của FMS (utilization tới 80% vs 50% batch, giảm WIP, giảm MLT, linh hoạt scheduling, tăng labour productivity).",
    "(Nâng cao — Groover §19.4) Giải thích bottleneck model: workload WLi, bottleneck station (WLi/si lớn nhất), max production rate Rp* = s* ÷ WL*.",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "FMS = tự động hóa mà vẫn linh hoạt: (A) định vị & thành phần, (B) material handling & 5 layout, (C) computer control & benefits; + node §19.4 bottleneck model là kiến thức THÊM trong sách. Bấm node để mở chi tiết.",
    nodes: [
      {
        id: "fms",
        label: "Flexible Manufacturing System",
        group: "concept",
        sectionId: "s1",
        detail:
          "Highly automated GT cell: CNC + material handling tự động + computer control; flexible + automated.",
      },
      {
        id: "g_def",
        label: "A. Định vị & thành phần",
        group: "concept",
        parent: "fms",
        sectionId: "s1",
        detail: "Định nghĩa, 4 flexibility tests, 3 components, types.",
      },
      {
        id: "g_mh",
        label: "B. Material handling & layout",
        group: "concept",
        parent: "fms",
        sectionId: "s5",
        detail: "5 functions + 5 layout configurations.",
      },
      {
        id: "g_cc",
        label: "C. Computer control & benefits",
        group: "concept",
        parent: "fms",
        sectionId: "s7",
        detail: "8 functions, 6 data files, reports, benefits.",
      },
      {
        id: "t_def",
        label: "FMS là gì (flexible automated)",
        group: "term",
        parent: "g_def",
        sectionId: "s1",
        detail:
          "GT cell tự động; flexible vs transfer line, automated vs manned cell.",
      },
      {
        id: "t_flex",
        label: "4 tests of flexibility",
        group: "term",
        parent: "g_def",
        sectionId: "s2",
        detail: "Part-variety / schedule-change / error-recovery / new-part.",
      },
      {
        id: "t_comp",
        label: "3 components",
        group: "term",
        parent: "g_def",
        sectionId: "s3",
        detail: "Processing stations (CNC) / material handling / computer control.",
      },
      {
        id: "t_types",
        label: "Types of FMS",
        group: "term",
        parent: "g_def",
        sectionId: "s4",
        detail: "Single-machine/FMC/FMS; dedicated vs random-order.",
      },
      {
        id: "t_func",
        label: "5 handling functions",
        group: "term",
        parent: "g_mh",
        sectionId: "s5",
        detail:
          "Independent movement, variety config, temporary storage, load/unload access, computer compatible.",
      },
      {
        id: "t_layout",
        label: "5 layout configurations",
        group: "term",
        parent: "g_mh",
        sectionId: "s6",
        detail: "In-line / loop / ladder / open-field / robot-centered.",
      },
      {
        id: "t_cfunc",
        label: "8 computer functions",
        group: "term",
        parent: "g_cc",
        sectionId: "s7",
        detail:
          "Workstation/instruction/production/traffic/shuttle/monitoring/tool/reporting.",
      },
      {
        id: "t_data",
        label: "6 data files + reports",
        group: "term",
        parent: "g_cc",
        sectionId: "s8",
        detail:
          "Part program/routing/production/pallet/tool files + utilization/production/status reports.",
      },
      {
        id: "t_benefit",
        label: "5 FMS benefits",
        group: "term",
        parent: "g_cc",
        sectionId: "s9",
        detail:
          "Utilization ↑ (80% vs 50%), WIP ↓, MLT ↓, scheduling flexibility, labour productivity ↑.",
      },
      {
        id: "t_bottleneck",
        label: "§19.4 Bottleneck model (THÊM)",
        group: "term",
        parent: "fms",
        sectionId: "s10",
        detail:
          "KIẾN THỨC THÊM TRONG SÁCH: WLi, bottleneck station, Rp* = s* ÷ WL*.",
      },
    ],
    edges: [
      { from: "fms", to: "g_def" },
      { from: "fms", to: "g_mh" },
      { from: "fms", to: "g_cc" },
      { from: "fms", to: "t_bottleneck" },
      { from: "g_def", to: "t_def" },
      { from: "g_def", to: "t_flex" },
      { from: "g_def", to: "t_comp" },
      { from: "g_def", to: "t_types" },
      { from: "g_mh", to: "t_func" },
      { from: "g_mh", to: "t_layout" },
      { from: "g_cc", to: "t_cfunc" },
      { from: "g_cc", to: "t_data" },
      { from: "g_cc", to: "t_benefit" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "FMS là gì",
      blocks: [
        flowBlock(
          "s1",
          "Vì sao FMS = 'flexible automated'",
          "horizontal",
          [
            {
              id: "s1_manual",
              label: "Manned GT cell",
              group: "term",
              detail: "Linh hoạt (người điều chỉnh) NHƯNG không tự động.",
            },
            {
              id: "s1_transfer",
              label: "Transfer line",
              group: "term",
              detail: "Tự động cao NHƯNG cứng (một loại sản phẩm).",
            },
            {
              id: "s1_fms",
              label: "FMS",
              group: "concept",
              detail: "Vừa flexible vừa automated — chỗ giao của hai thế giới.",
            },
            {
              id: "s1_gt",
              label: "Group technology",
              group: "term",
              detail: "Nền tảng: chỉ linh hoạt trong phạm vi một part family.",
            },
          ],
          [
            { from: "s1_manual", to: "s1_fms", label: "automation" },
            { from: "s1_transfer", to: "s1_fms", label: "flexibility" },
            { from: "s1_gt", to: "s1_fms", label: "nền tảng" },
          ],
          "Groover: 'a more appropriate term would be flexible AUTOMATED manufacturing system' (p.533).",
        ),
        calloutBlock(
          "key",
          "Định nghĩa FMS",
          "FMS = một highly automated group technology machine cell, gồm một/nhiều processing stations (thường là CNC machine tools), nối bởi automated material handling & storage system, điều khiển bởi distributed computer system. Gọi là 'flexible' vì xử lý được NHIỀU part styles CÙNG LÚC ở các workstation, và có thể điều chỉnh mix + quantity theo demand (Groover p.533). Lưu ý: không hệ nào flexible hoàn toàn — FMS chỉ linh hoạt trong một part family / limited range of families.",
        ),
        calloutBlock(
          "insight",
          "Góc nhìn future manager",
          "Định vị FMS trên hành trình automation: nối Topic 1 (fixed → programmable → flexible automation) và Topic 6 (machine cell → FMS). Giá trị cốt lõi nằm ở HỆ ĐIỀU KHIỂN MÁY TÍNH điều phối cả máy lẫn dòng vật liệu — đó là thứ biến 'nhiều máy CNC rời' thành 'một hệ linh hoạt'.",
        ),
      ],
      keyTerms: [
        { term: "flexible manufacturing system (FMS)", definition: "Highly automated GT machine cell có CNC, automated material handling và computer control để xử lý nhiều part styles trong một family." },
        { term: "flexible automation", definition: "Automation cho phép đổi part mix/quantity trong phạm vi đã thiết kế." },
        { term: "CNC", definition: "Computer numerical control dùng máy tính điều khiển machine tool theo chương trình." },
        { term: "DNC (direct numerical control)", definition: "Hệ phân phối chương trình/điều khiển từ computer trung tâm tới nhiều máy CNC." },
        { term: "distributed computer control", definition: "Hệ computer control phân tán điều phối workstation, handling và dữ liệu sản xuất." },
        { term: "group technology", definition: "Nền tảng part family giúp FMS linh hoạt trong phạm vi xác định." },
      ],
    },
    {
      id: "s2",
      heading: "4 tests of flexibility",
      blocks: [
        comparisonBlock("4 tests of flexibility (Groover p.534–535)", [
          "Test",
          "Câu hỏi kiểm tra",
          "Tên khác",
        ], [
          {
            label: "1. Part-variety test",
            cells: [
              "Hệ có xử lý được nhiều part/product styles ở chế độ mixed-model (không theo lô) không?",
              "machine/production flexibility",
            ],
          },
          {
            label: "2. Schedule-change test",
            cells: [
              "Hệ có dễ chấp nhận thay đổi lịch sản xuất (part mix / số lượng) không?",
              "mix/volume flexibility",
            ],
          },
          {
            label: "3. Error-recovery test",
            cells: [
              "Hệ có phục hồi 'mượt' khi máy hỏng, không dừng toàn bộ sản xuất không?",
              "routing flexibility",
            ],
          },
          {
            label: "4. New-part test",
            cells: [
              "Có dễ đưa part design mới vào part mix hiện có (nếu thuộc part family) không?",
              "product flexibility",
            ],
          },
        ]),
        calloutBlock(
          "note",
          "Test nào quan trọng nhất",
          "Quan trọng nhất là (1) & (2). Test (3) chỉ áp dụng cho hệ nhiều máy — với single-machine, máy hỏng là sản xuất dừng. Test (4) chỉ có nghĩa khi part mới nằm trong part family đã thiết kế (Groover p.535). → 'flexible' là một mức độ, không phải có/không tuyệt đối.",
        ),
      ],
      keyTerms: [
        { term: "part-variety test", definition: "Kiểm tra hệ có xử lý nhiều part styles ở mixed-model mode không." },
        { term: "schedule-change test", definition: "Kiểm tra hệ có dễ đổi part mix/quantity/schedule không." },
        { term: "error-recovery test", definition: "Kiểm tra hệ có phục hồi khi máy hỏng nhờ routing flexibility không." },
        { term: "new-part test", definition: "Kiểm tra hệ có đưa part design mới thuộc family vào mix không." },
        { term: "mixed-model", definition: "Nhiều part styles chạy đan xen, không chỉ theo batch riêng biệt." },
      ],
    },
    {
      id: "s3",
      heading: "3 thành phần của FMS",
      blocks: [
        flowBlock(
          "s3",
          "3 thành phần FMS",
          "horizontal",
          [
            {
              id: "s3_proc",
              label: "Processing stations",
              group: "term",
              detail: "Thường là CNC: gia công, bảo trì, inspection, testing.",
            },
            {
              id: "s3_mh",
              label: "Material handling & storage",
              group: "term",
              detail:
                "Tự động chuyển & lưu WIP giữa các trạm; pallets/fixtures.",
            },
            {
              id: "s3_cc",
              label: "Computer control system",
              group: "term",
              detail: "Điều phối work elements ở mỗi trạm + material handling.",
            },
          ],
          [
            { from: "s3_proc", to: "s3_mh", label: "nối" },
            { from: "s3_mh", to: "s3_cc", label: "điều khiển" },
          ],
          "Groover: 4 components = workstations + handling + computer + con người (slide 7.1).",
        ),
        calloutBlock(
          "note",
          "Vai trò con người trong FMS",
          "Dù tự động hóa cao, con người vẫn cần cho: load/unload part, quản lý & giám sát hệ, xử lý sự cố, lập & sửa NC programs. Human = enabler of flexibility, không bị loại bỏ hoàn toàn (slide 5/26).",
        ),
      ],
      keyTerms: [
        { term: "processing station", definition: "Workstation xử lý part, thường là CNC machine tool hoặc station phụ trợ." },
        { term: "material handling and storage system", definition: "Hệ chuyển/lưu WIP tự động giữa các station." },
        { term: "computer control system", definition: "Hệ computer điều phối máy, handling, instructions và dữ liệu FMS." },
        { term: "pallet", definition: "Thiết bị gá/đỡ part để vận chuyển và định vị trong FMS." },
        { term: "fixture", definition: "Đồ gá giữ part đúng vị trí khi gia công." },
        { term: "human role", definition: "Vai trò con người trong load/unload, giám sát, troubleshooting và NC programming." },
      ],
    },
    {
      id: "s4",
      heading: "Types of FMS",
      blocks: [
        comparisonBlock("Phân loại theo SỐ MÁY (Groover p.536–537)", [
          "Loại",
          "Số máy",
          "Flexibility tests thỏa",
        ], [
          {
            label: "Single-machine cell",
            cells: [
              "1 CNC + parts-storage",
              "3/4 tests (thiếu error-recovery vì 1 máy hỏng là dừng)",
            ],
          },
          {
            label: "Flexible manufacturing cell (FMC)",
            cells: ["2–3 processing stations", "Cả 4 tests"],
          },
          {
            label: "Flexible manufacturing system (FMS)",
            cells: [
              "4+ processing stations + trạm phụ trợ (wash, inspection)",
              "Cả 4 tests; computer control phức tạp hơn",
            ],
          },
        ]),
        comparisonBlock("Phân loại theo MỨC LINH HOẠT (slide 7/26)", [
          "Loại",
          "Đặc điểm",
        ], [
          {
            label: "Dedicated FMS",
            cells: [
              "Tập trung ít item, máy xác định, ít thay đổi, hiệu quả cao — ít linh hoạt hơn",
            ],
          },
          {
            label: "Random-order FMS",
            cells: [
              "Nhiều part families, kế hoạch sản xuất đổi hằng ngày, cần computer control mạnh — LINH HOẠT hơn dedicated",
            ],
          },
        ]),
        calloutBlock(
          "insight",
          "Đọc Chart 7.1",
          "Trên trục flexibility × volume: NC machine → dedicated FMS → random-order FMS → automated manufacturing system. Càng lên cao volume, càng xuống thấp flexibility. FMS lấp khoảng giữa mà transfer line (high volume, low flexibility) và standalone CNC (low volume, high flexibility) bỏ trống (slide 8/26).",
        ),
      ],
      keyTerms: [
        { term: "single-machine cell", definition: "Một CNC machine với parts storage, thỏa 3/4 flexibility tests." },
        { term: "flexible manufacturing cell (FMC)", definition: "Cell 2–3 processing stations, thỏa 4 flexibility tests." },
        { term: "flexible manufacturing system (FMS)", definition: "System 4+ processing stations, thường có station phụ trợ và computer control phức tạp hơn." },
        { term: "dedicated FMS", definition: "FMS tập trung ít item/family, hiệu quả cao nhưng linh hoạt thấp hơn." },
        { term: "random-order FMS", definition: "FMS linh hoạt hơn, xử lý nhiều family và schedule/mix thay đổi thường xuyên." },
      ],
    },
    {
      id: "s5",
      heading: "5 functions của handling system",
      blocks: [
        comparisonBlock("5 functions của handling system (slide 7.2.1)", [
          "Function",
          "Nội dung",
        ], [
          {
            label: "Independent movement of workparts",
            cells: [
              "Chuyển part giữa các WS độc lập, cho nhiều processing sequence (trạm bận thì đi trạm khác)",
            ],
          },
          {
            label: "Handle a variety of workpart configurations",
            cells: ["Dùng pallets/fixtures để xử lý nhiều loại/hình dạng part"],
          },
          {
            label: "Temporary storage (buffers)",
            cells: ["Cho phép hàng chờ nhỏ trước mỗi trạm → giảm nghẽn"],
          },
          {
            label: "Convenient access for load/unload",
            cells: ["Dễ nạp & tháo workpart — function chính của handling"],
          },
          {
            label: "Compatible with computer control",
            cells: ["Handling phải khớp với hệ điều khiển máy tính của FMS"],
          },
        ]),
      ],
      keyTerms: [
        { term: "independent movement", definition: "Khả năng chuyển part tới station phù hợp mà không bị khóa vào một đường duy nhất." },
        { term: "workpart configuration", definition: "Hình dạng/kích cỡ/cách gá khác nhau của workpart." },
        { term: "temporary storage", definition: "Buffer tạm trước/giữa station để giảm nghẽn." },
        { term: "buffer", definition: "Vị trí lưu WIP tạm trong hệ." },
        { term: "load/unload", definition: "Nạp phôi vào và tháo part ra khỏi pallet/fixture/station." },
        { term: "computer compatibility", definition: "Khả năng handling system nhận lệnh/phản hồi với computer control." },
      ],
    },
    {
      id: "s6",
      heading: "5 layout configurations",
      blocks: [
        comparisonBlock("5 layout configurations (slide 7.2.2 + Groover)", [
          "Layout",
          "Bố trí",
          "Đặc điểm / đánh đổi",
        ], [
          {
            label: "In-line",
            cells: [
              "Máy & handling xếp thẳng hàng, part đi một chiều",
              "Đơn giản, dòng rõ; kém linh hoạt, dễ tạo bottleneck (có thể thêm bi-directional để tăng routing flexibility)",
            ],
          },
          {
            label: "Loop",
            cells: [
              "Trạm xếp thành vòng, part chạy quanh loop",
              "Linh hoạt hơn in-line (dừng & chuyển tới trạm bất kỳ); load/unload ở một đầu",
            ],
          },
          {
            label: "Ladder",
            cells: [
              "Loop có thêm 'rungs' (thanh ngang) đặt trạm",
              "Tăng số đường đi giữa các máy, giảm quãng đường & nghẽn, bỏ được secondary handling",
            ],
          },
          {
            label: "Open-field",
            cells: [
              "Nhiều loop + ladder + sidings kết hợp",
              "Cho part family lớn; phức tạp thiết kế & điều khiển",
            ],
          },
          {
            label: "Robot-centered cell",
            cells: [
              "1+ robot làm material handling trung tâm",
              "Đơn giản, robot cấp phôi cho máy quanh nó; giới hạn bởi tầm với robot",
            ],
          },
        ]),
      ],
      keyTerms: [
        { term: "in-line layout", definition: "Layout máy theo hàng thẳng, thường dòng đi một chiều." },
        { term: "loop layout", definition: "Layout máy quanh vòng vận chuyển." },
        { term: "ladder layout", definition: "Loop có các nhánh ngang/rungs để tăng lựa chọn đường đi." },
        { term: "open-field layout", definition: "Layout phức hợp nhiều loop/ladder/sidings cho family lớn." },
        { term: "robot-centered cell", definition: "Cell dùng robot trung tâm cấp phôi/chuyển part giữa máy." },
        { term: "routing flexibility", definition: "Khả năng chọn route khác khi station bận/hỏng." },
      ],
    },
    {
      id: "s7",
      heading: "8 computer functions",
      blocks: [
        comparisonBlock("8 computer functions (slide 7.3.1)", [
          "Function",
          "Nội dung",
        ], [
          {
            label: "Control of each workstation",
            cells: ["CNC điều khiển từng trạm (fully automated FMS)"],
          },
          {
            label: "Distribution of control instructions",
            cells: ["Tải chương trình từ central control xuống máy (DNC)"],
          },
          {
            label: "Production control",
            cells: ["Quản lý rate of output & part mix mỗi batch"],
          },
          {
            label: "Traffic control",
            cells: ["Điều phối dòng WIP giữa các workstation"],
          },
          {
            label: "Shuttle control",
            cells: [
              "Điều tiết secondary part-handling tại mỗi máy, phối với primary handling",
            ],
          },
          {
            label: "Work handling system monitoring",
            cells: ["Giám sát vị trí xe/pallet vận chuyển"],
          },
          {
            label: "Tool control",
            cells: [
              "Kiểm tool sẵn sàng cho WIP + theo dõi tool-life để thay",
            ],
          },
          {
            label: "System performance monitoring & reporting",
            cells: ["Xuất báo cáo hiệu năng phục vụ quản lý"],
          },
        ]),
      ],
      keyTerms: [
        { term: "workstation control", definition: "Điều khiển hoạt động từng workstation/CNC." },
        { term: "DNC distribution", definition: "Phân phối chương trình điều khiển từ central computer tới machines." },
        { term: "production control", definition: "Điều phối output rate và part mix." },
        { term: "traffic control", definition: "Điều phối movement của WIP qua handling system." },
        { term: "shuttle control", definition: "Điều khiển secondary handling tại từng workstation." },
        { term: "tool control", definition: "Quản lý availability và thay tool." },
        { term: "tool-life monitoring", definition: "Theo dõi thời gian sử dụng tool để thay trước khi vượt standard." },
      ],
    },
    {
      id: "s8",
      heading: "6 FMS data files + system reports",
      blocks: [
        comparisonBlock("6 FMS data files (slide 7.3.2)", [
          "Data file",
          "Lưu gì",
        ], [
          {
            label: "Part program files",
            cells: ["Chương trình NC cho từng workpart xử lý trong hệ"],
          },
          {
            label: "Routing files",
            cells: ["Trình tự công việc & danh sách WS mỗi part đi qua"],
          },
          {
            label: "Part production files",
            cells: ["Thông số sản xuất để làm item (production control)"],
          },
          {
            label: "Pallet reference files",
            cells: [
              "Thông tin pallet & item gắn với từng pallet (định danh duy nhất)",
            ],
          },
          {
            label: "Station tool files",
            cells: ["Thông tin máy & tool tại mỗi trạm"],
          },
          {
            label: "Tool life files",
            cells: ["Thời gian dùng tool để thay khi vượt standard time"],
          },
        ]),
        comparisonBlock("System reports (slide 7.3.3)", [
          "Report",
          "Nội dung",
        ], [
          {
            label: "Utilization reports",
            cells: ["Utilization từng WS + trung bình toàn FMS"],
          },
          {
            label: "Production reports",
            cells: ["Sản lượng part (ngày/tuần) + so actual vs plan"],
          },
          {
            label: "Status reports",
            cells: [
              "Trạng thái hiện tại: số WIP, utilization, tool, attachment",
            ],
          },
          {
            label: "Tool reports",
            cells: ["Dữ liệu tool & attachment để chuẩn bị cho ca sau"],
          },
        ]),
      ],
      keyTerms: [
        { term: "part program file", definition: "File chứa NC program cho workpart." },
        { term: "routing file", definition: "File chứa route/sequence workstation của part." },
        { term: "pallet reference file", definition: "File định danh pallet và part gắn với pallet." },
        { term: "tool life file", definition: "File theo dõi thời gian dùng tool." },
        { term: "utilization report", definition: "Report utilization từng workstation và toàn hệ." },
        { term: "status report", definition: "Report trạng thái WIP, utilization, tool và attachment." },
      ],
    },
    {
      id: "s9",
      heading: "5 FMS benefits",
      blocks: [
        comparisonBlock("5 benefits của FMS (slide 7.4)", [
          "Benefit",
          "Cơ chế",
        ], [
          {
            label: "Higher machine utilization",
            cells: ["Computer-based control → utilization tới ~80% (vs ~50% batch)"],
          },
          {
            label: "Reduced work-in-process",
            cells: ["Nhiều part chạy song song dưới điều khiển máy tính → ít WIP hơn batch"],
          },
          {
            label: "Lower manufacturing lead time (MLT)",
            cells: ["Giảm WIP + CAM giảm processing time → giao hàng nhanh"],
          },
          {
            label: "Greater flexibility in scheduling",
            cells: ["CAM + programs đổi kế hoạch nhanh → đáp ứng rush/special orders"],
          },
          {
            label: "Higher labour productivity",
            cells: ["CAM + máy tự động → ít công nhân → năng suất lao động cao"],
          },
        ]),
        calloutBlock(
          "insight",
          "Vì sao utilization là con số 'bán' FMS",
          "80% vs 50% là lập luận đầu tư điển hình: FMS đắt, nhưng nếu nâng utilization từ nửa lên bốn phần năm thì cùng số máy tạo ra nhiều output hơn hẳn — future manager dùng chính chỉ số này để justify capital cho FMS (slide 26/27). Đây là góc nhìn định hướng, con số 80%/50% là của slide.",
        ),
      ],
      keyTerms: [
        { term: "machine utilization", definition: "Tỷ lệ thời gian machine được dùng hữu ích so với available time." },
        { term: "work-in-process (WIP)", definition: "Hàng đang xử lý/dở dang trong hệ." },
        { term: "manufacturing lead time (MLT)", definition: "Thời gian từ khi part/order vào hệ tới khi hoàn thành." },
        { term: "production scheduling", definition: "Lập lịch part mix, quantity và sequence sản xuất." },
        { term: "labour productivity", definition: "Output trên một đơn vị lao động." },
      ],
    },
    {
      id: "s10",
      heading: "[NÂNG CAO] Bottleneck model",
      blocks: [
        calloutBlock(
          "note",
          "⚠ Kiến thức THÊM trong sách — không có trong slide",
          "Phần này thuộc Groover §19.4 (Analysis of FMS), KHÔNG có trong slide/đề chương này. Đưa vào để mở rộng; người học coi là tham khảo nâng cao, không bắt buộc thuộc.",
        ),
        calloutBlock(
          "key",
          "Bottleneck model giải gì",
          "Bottleneck model (Solberg) là deterministic model cho ước lượng SỚM năng lực FMS. Ý tưởng: với product mix cố định, output của hệ bị chặn trên bởi TRẠM NGHẼN (bottleneck) — trạm có workload trên mỗi server cao nhất. Đơn giản, trực quan; nhưng vì bỏ qua queue nên thường ƯỚC LƯỢNG CAO hơn thực tế (Groover p.550–552).",
        ),
        formulaBlock(
          "WLi = Σ (Tcijk × fijk × pj)   |   bottleneck = max(WLi ÷ si)   |   Rp* = s* ÷ WL*",
          [
            { symbol: "WLi", meaning: "workload trung bình trạm i (min/part)" },
            { symbol: "Tcijk", meaning: "processing cycle time thao tác k, part j, trạm i" },
            { symbol: "fijk", meaning: "operation frequency" },
            { symbol: "pj", meaning: "part-mix fraction của part j (Σpj = 1)" },
            { symbol: "si", meaning: "số server (máy giống nhau) tại trạm i" },
            { symbol: "s* , WL*", meaning: "server & workload của bottleneck station" },
            { symbol: "Rp*", meaning: "max production rate toàn hệ (pc/min)" },
          ],
          "Rpj* = pj × Rp* (rate từng part); Ui = (WLi ÷ si) × Rp*; utilization của bottleneck = 100% (Groover p.552–553, Eq 19.2/19.5/19.7).",
        ),
        calcBlock(
          "Ví dụ minh họa cách tìm bottleneck (số minh họa)",
          [
            {
              label: "Trạm 1 (load/unload, s1=1)",
              expr: "WL1 ÷ s1 = 6 ÷ 1 = 6 min/server",
              note: "số minh họa để hiểu công thức",
            },
            {
              label: "Trạm 2 (milling, s2=2)",
              expr: "WL2 ÷ s2 = 15 ÷ 2 = 7.5 min/server",
            },
            {
              label: "So sánh → chọn max",
              expr: "max(6, 7.5) = 7.5 → bottleneck = Trạm 2",
            },
            {
              label: "Max production rate",
              expr: "Rp* = s* ÷ WL* = 2 ÷ 15 ≈ 0.133 part/min",
            },
          ],
          "Bottleneck = Trạm 2; Rp* ≈ 0.133 part/min (≈ 8 part/giờ)",
          "Trạm có WL/server lớn nhất chặn throughput của cả hệ.",
          "Muốn tăng output: thêm server cho bottleneck hoặc giảm workload trạm đó. Số ở đây là minh họa cho công thức, KHÔNG phải Example 19.4 của sách.",
        ),
      ],
      keyTerms: [
        { term: "bottleneck model", definition: "Deterministic model ước lượng năng lực FMS dựa trên workload và bottleneck station." },
        { term: "workload (WL)", definition: "Thời gian xử lý trung bình mà một station phải thực hiện cho product mix." },
        { term: "server", definition: "Máy/resource giống nhau tại một station." },
        { term: "part-mix fraction", definition: "Tỷ trọng của từng part trong product mix." },
        { term: "maximum production rate (Rp*)", definition: "Output rate tối đa của FMS bị chặn bởi bottleneck." },
        { term: "bottleneck station", definition: "Station có workload trên mỗi server lớn nhất." },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "Which statement best defines an FMS as a 'flexible automated' manufacturing system?",
      options: [
        {
          id: "a",
          text: "Any factory that owns at least one CNC machine is automatically an FMS",
          isCorrect: false,
          rationale:
            "Cơ chế: CNC là processing station, nhưng FMS còn cần automated handling, storage và computer control tích hợp. Bẫy: đồng nhất một máy CNC với cả system. Khóa: FMS là system, không phải máy rời.",
        },
        {
          id: "b",
          text: "An FMS is infinitely flexible and can make any possible part without limits",
          isCorrect: false,
          rationale:
            "Cơ chế: FMS chỉ linh hoạt trong một part family hoặc limited range of families. Bẫy: hiểu flexible là vô hạn. Khóa: flexibility luôn có phạm vi thiết kế.",
        },
        {
          id: "c",
          text: "An FMS is a manual GT cell with no computer control",
          isCorrect: false,
          rationale:
            "Cơ chế: manual GT cell linh hoạt nhưng thiếu automation/computer control. Bẫy: chỉ nhớ nền GT mà bỏ automated side. Khóa: FMS = flexible + automated.",
        },
        {
          id: "d",
          text: "An FMS is a highly automated GT cell with CNC stations, automated handling/storage, and computer control; it is flexible versus transfer lines and automated versus manned cells",
          isCorrect: true,
          rationale:
            "Cơ chế: câu này khớp định nghĩa Groover: FMS dựa GT, có CNC/handling/computer control, vừa flexible vừa automated. Bẫy: tách rời flexibility và automation. Khóa: FMS nằm giữa transfer line cứng và manned cell thủ công.",
        },
        {
          id: "e",
          text: "An FMS is a transfer line dedicated to only one product forever",
          isCorrect: false,
          rationale:
            "Cơ chế: transfer line tự động cao nhưng cứng; FMS thêm flexibility trong part family. Bẫy: thấy automated nên kéo về fixed automation. Khóa: flexible phân biệt FMS với transfer line.",
        },
      ],
      difficulty: "basic",
      conceptTested: "FMS definition and flexible automated meaning",
      takeaway:
        "FMS là highly automated GT cell: CNC + automated handling/storage + computer control, linh hoạt có giới hạn trong part family.",
    },
    {
      id: "q02",
      stem: "Why is group technology the foundation of FMS flexibility?",
      options: [
        {
          id: "a",
          text: "Because FMS can produce any unrelated part without considering families",
          isCorrect: false,
          rationale:
            "Cơ chế: FMS không linh hoạt vô hạn; nó cần part family để giới hạn variety hợp lý. Bẫy: nghĩ computer control giải quyết mọi khác biệt part. Khóa: flexibility nằm trong family đã thiết kế.",
        },
        {
          id: "b",
          text: "Because group technology groups similar parts into families, so the FMS can reuse machines, tools, programs, and handling logic within that family",
          isCorrect: true,
          rationale:
            "Cơ chế: GT tạo phạm vi similarity để FMS tự động hóa mà vẫn đổi mix được. Bẫy: xem GT chỉ là Topic 6 tách rời. Khóa: FMS relies on principles of group technology.",
        },
        {
          id: "c",
          text: "Because GT eliminates CNC programs and makes computer control unnecessary",
          isCorrect: false,
          rationale:
            "Cơ chế: GT hỗ trợ tổ chức family; CNC/DNC/computer control vẫn là lõi FMS. Bẫy: biến nền tảng thành thay thế. Khóa: GT + automation mới tạo FMS.",
        },
        {
          id: "d",
          text: "Because GT requires all parts to have identical geometry",
          isCorrect: false,
          rationale:
            "Cơ chế: part family có similarity, không nhất thiết identical. Bẫy: đặt điều kiện quá cứng. Khóa: FMS xử lý limited range, không một part duy nhất.",
        },
        {
          id: "e",
          text: "Because GT is only useful for high-volume transfer lines",
          isCorrect: false,
          rationale:
            "Cơ chế: GT đặc biệt hữu ích ở medium production/part families. Bẫy: nhầm GT với mass dedicated line. Khóa: FMS cầu nối batch và mass.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Group technology foundation of FMS",
      takeaway:
        "FMS linh hoạt vì GT giới hạn variety thành part family có thể tái dùng machines, tools, programs và handling logic.",
    },
    {
      id: "q03",
      stem: "Which set correctly lists the four tests of flexibility in FMS?",
      options: [
        {
          id: "a",
          text: "Utilization, WIP, lead time, and labor productivity",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là benefits/metrics, không phải flexibility tests. Bẫy: lấy output outcomes làm test. Khóa: tests hỏi hệ có đổi part/schedule/recover/add part được không.",
        },
        {
          id: "b",
          text: "Tool-life, pallet reference, routing file, and production report",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là data files/reports, không phải tests. Bẫy: trộn computer control với flexibility. Khóa: tests nằm ở part-variety/schedule/error/new-part.",
        },
        {
          id: "c",
          text: "Error-recovery is always the most important test, and a single-machine cell satisfies all four tests",
          isCorrect: false,
          rationale:
            "Cơ chế: quan trọng nhất là part-variety và schedule-change; single-machine không thỏa error-recovery vì máy hỏng là dừng. Bẫy: tuyệt đối hóa routing flexibility. Khóa: số máy ảnh hưởng test 3.",
        },
        {
          id: "d",
          text: "Part-variety, schedule-change, error-recovery, and new-part tests; the first two are most important",
          isCorrect: true,
          rationale:
            "Cơ chế: đây là đúng bộ 4 tests của Groover và nhấn đúng priority. Bẫy: nhớ đủ tên nhưng không biết test nào chính. Khóa: FMS được đánh giá trước hết bằng khả năng đổi variety và schedule.",
        },
        {
          id: "e",
          text: "In-line, loop, ladder, and open-field tests",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là layout configurations, không phải flexibility tests. Bẫy: thấy layout ảnh hưởng flexibility nên gọi là test. Khóa: layout là thiết kế handling, tests là tiêu chí năng lực.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Four flexibility tests",
      takeaway:
        "4 tests là part-variety, schedule-change, error-recovery, new-part; quan trọng nhất là hai test đầu.",
    },
    {
      id: "q04",
      stem: "Which components must be integrated for a manufacturing system to function as an FMS?",
      options: [
        {
          id: "a",
          text: "Processing stations only; material handling and computer control are optional decorations",
          isCorrect: false,
          rationale:
            "Cơ chế: processing stations rời không tạo FMS nếu thiếu handling/computer control. Bẫy: nhìn FMS như tập máy CNC. Khóa: integration mới tạo system.",
        },
        {
          id: "b",
          text: "Workers are completely eliminated, so no human role remains",
          isCorrect: false,
          rationale:
            "Cơ chế: human vẫn cần cho load/unload, giám sát, troubleshooting và NC programs. Bẫy: hiểu automation là xóa người. Khóa: con người enable flexibility.",
        },
        {
          id: "c",
          text: "Only automated material handling, because the machines can be manual",
          isCorrect: false,
          rationale:
            "Cơ chế: FMS cần processing stations tự động như CNC, không chỉ conveyor. Bẫy: đánh đồng FMS với handling system. Khóa: station + handling + control phải nối nhau.",
        },
        {
          id: "d",
          text: "Only production reports and tool-life files",
          isCorrect: false,
          rationale:
            "Cơ chế: reports/data files hỗ trợ computer control nhưng không đủ cấu thành FMS. Bẫy: lấy thông tin quản lý thay cho physical/control components. Khóa: FMS có cả máy, handling, computer và human.",
        },
        {
          id: "e",
          text: "Processing stations (usually CNC), automated material handling/storage, computer control, and human support",
          isCorrect: true,
          rationale:
            "Cơ chế: đây là đúng cấu trúc FMS trong slide/Groover. Bẫy: bỏ computer control hoặc con người. Khóa: FMS là hệ tích hợp, không phải từng thành phần rời.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "FMS components",
      takeaway:
        "FMS cần processing stations, automated handling/storage, computer control và human support phối hợp thành một hệ.",
    },
    {
      id: "q05",
      stem: "A cell has three CNC processing stations connected by automated handling and computer control. How should it be classified by machine count?",
      options: [
        {
          id: "a",
          text: "Single-machine cell, because it is still one cell",
          isCorrect: false,
          rationale:
            "Cơ chế: classification theo số processing stations, không theo số cell. Bẫy: thấy one cell rồi gọi single-machine. Khóa: three stations rơi vào FMC.",
        },
        {
          id: "b",
          text: "Flexible manufacturing cell (FMC), because FMC has 2–3 processing stations",
          isCorrect: true,
          rationale:
            "Cơ chế: Groover phân FMC = 2–3 processing stations. Bẫy: gọi mọi hệ flexible là FMS. Khóa: FMS theo ngưỡng số máy là 4+.",
        },
        {
          id: "c",
          text: "Flexible manufacturing system (FMS), because FMS starts at 2 machines",
          isCorrect: false,
          rationale:
            "Cơ chế: FMS theo số máy là 4+; 2–3 là FMC. Bẫy: hạ ngưỡng FMS. Khóa: nhớ 1 / 2–3 / 4+.",
        },
        {
          id: "d",
          text: "Dedicated transfer line, because all CNC cells are dedicated",
          isCorrect: false,
          rationale:
            "Cơ chế: CNC cell có thể flexible; dedicated/random-order là phân loại theo mức linh hoạt, không chỉ machine count. Bẫy: trộn hai tiêu chí phân loại. Khóa: câu hỏi hỏi machine count.",
        },
        {
          id: "e",
          text: "Robot-centered layout, because any three-machine cell must use a robot",
          isCorrect: false,
          rationale:
            "Cơ chế: số máy không quyết định layout robot-centered. Bẫy: suy diễn layout từ count. Khóa: 3 CNC stations = FMC nếu xét số máy.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "FMC vs FMS by machine count",
      takeaway:
        "Phân loại theo số máy: 1 = single-machine cell, 2–3 = FMC, 4+ = FMS.",
    },
    {
      id: "q06",
      stem: "Which statement correctly distinguishes dedicated FMS from random-order FMS?",
      options: [
        {
          id: "a",
          text: "Dedicated FMS is more flexible because it focuses on fewer items",
          isCorrect: false,
          rationale:
            "Cơ chế: dedicated tập trung ít item nên hiệu quả cao nhưng linh hoạt thấp hơn. Bẫy: nhầm focus với flexibility. Khóa: random-order linh hoạt hơn.",
        },
        {
          id: "b",
          text: "Random-order FMS cannot change the daily production plan",
          isCorrect: false,
          rationale:
            "Cơ chế: random-order chính là loại có kế hoạch đổi hằng ngày và nhiều family hơn. Bẫy: đảo nghĩa random-order. Khóa: random-order cần computer control mạnh.",
        },
        {
          id: "c",
          text: "Dedicated and random-order FMS are identical; the names only describe layout color",
          isCorrect: false,
          rationale:
            "Cơ chế: chúng khác nhau về số part family, mức đổi schedule và flexibility/efficiency. Bẫy: coi thuật ngữ là nhãn hình thức. Khóa: đây là phân loại chiến lược vận hành.",
        },
        {
          id: "d",
          text: "Random-order FMS is more flexible: it can handle more part families and daily schedule changes; dedicated FMS focuses on fewer items for efficiency",
          isCorrect: true,
          rationale:
            "Cơ chế: câu này khớp phân loại theo mức linh hoạt. Bẫy: tưởng dedicated luôn tốt hơn vì hiệu quả cao. Khóa: dedicated = efficiency focus; random-order = flexibility focus.",
        },
        {
          id: "e",
          text: "Dedicated FMS must always have more machines than random-order FMS",
          isCorrect: false,
          rationale:
            "Cơ chế: dedicated/random-order không được định nghĩa bằng số máy. Bẫy: trộn machine-count classification với flexibility classification. Khóa: hai trục phân loại khác nhau.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Dedicated vs random-order FMS",
      takeaway:
        "Random-order FMS linh hoạt hơn dedicated FMS, đổi part mix/schedule dễ hơn nhưng cần computer control mạnh hơn.",
    },
    {
      id: "q07",
      stem: "Which option lists core functions of the FMS material handling system?",
      options: [
        {
          id: "a",
          text: "Independent movement, handling varied workpart configurations, temporary storage, load/unload access, and compatibility with computer control",
          isCorrect: true,
          rationale:
            "Cơ chế: đây là đúng 5 functions của handling system. Bẫy: nghĩ handling chỉ là conveyor một chiều. Khóa: FMS handling phải vừa chuyển, vừa buffer, vừa giao tiếp computer.",
        },
        {
          id: "b",
          text: "Only straight-line movement from the first station to the last station",
          isCorrect: false,
          rationale:
            "Cơ chế: FMS cần independent movement để xử lý route khác nhau và tránh station bận. Bẫy: kéo logic transfer line vào FMS. Khóa: handling phải hỗ trợ flexibility.",
        },
        {
          id: "c",
          text: "Only final inspection and tool-life reporting",
          isCorrect: false,
          rationale:
            "Cơ chế: tool-life/reporting thuộc computer functions/data, không phải handling functions cốt lõi. Bẫy: trộn control information với physical movement. Khóa: handling xử lý workpart movement/storage/load-unload.",
        },
        {
          id: "d",
          text: "Only manual carrying by operators",
          isCorrect: false,
          rationale:
            "Cơ chế: FMS dùng automated material handling & storage; manual carrying không đủ. Bẫy: lấy manned GT cell áp vào FMS. Khóa: automated handling là thành phần FMS.",
        },
        {
          id: "e",
          text: "Only production scheduling and demand forecasting",
          isCorrect: false,
          rationale:
            "Cơ chế: scheduling/forecasting là planning/control, không phải handling function. Bẫy: nhầm chức năng quản lý với vật lý. Khóa: handling trả lời part di chuyển/lưu/nạp như thế nào.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Material handling functions",
      takeaway:
        "FMS handling phải hỗ trợ movement độc lập, nhiều workpart configurations, buffers, load/unload và computer compatibility.",
    },
    {
      id: "q08",
      stem: "Which statement correctly describes FMS layout configurations?",
      options: [
        {
          id: "a",
          text: "In-line layout is always the most flexible layout",
          isCorrect: false,
          rationale:
            "Cơ chế: in-line đơn giản nhưng thường kém linh hoạt hơn loop/ladder/open-field. Bẫy: thấy dòng rõ nên nghĩ tốt nhất. Khóa: flexibility cần nhiều route.",
        },
        {
          id: "b",
          text: "Ladder layout is just a loop with no extra routing choices",
          isCorrect: false,
          rationale:
            "Cơ chế: ladder thêm rungs để tăng đường đi giữa machines. Bẫy: đồng nhất ladder với loop. Khóa: ladder giảm quãng đường/nghẽn bằng extra paths.",
        },
        {
          id: "c",
          text: "Robot-centered cell is unlimited because robot reach does not matter",
          isCorrect: false,
          rationale:
            "Cơ chế: robot-centered bị giới hạn bởi tầm với và bố trí máy quanh robot. Bẫy: nghĩ robot là linh hoạt vô hạn. Khóa: physical reach vẫn là constraint.",
        },
        {
          id: "d",
          text: "Open-field layout is always simpler than in-line layout",
          isCorrect: false,
          rationale:
            "Cơ chế: open-field kết hợp nhiều loop/ladder/sidings, phức tạp hơn. Bẫy: nghe open nên tưởng dễ. Khóa: open-field cho family lớn nhưng control phức tạp.",
        },
        {
          id: "e",
          text: "The five common configurations are in-line, loop, ladder, open-field, and robot-centered; ladder adds rungs to increase routing choices",
          isCorrect: true,
          rationale:
            "Cơ chế: câu này nêu đúng 5 layout và đúng insight của ladder. Bẫy: nhầm ladder với loop hoặc coi in-line linh hoạt nhất. Khóa: layout quyết định routing flexibility.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "FMS layout configurations",
      takeaway:
        "5 layout FMS là in-line, loop, ladder, open-field, robot-centered; ladder tăng đường đi để giảm nghẽn và quãng đường.",
    },
    {
      id: "q09",
      stem: "Which statement correctly matches FMS computer functions and data files?",
      options: [
        {
          id: "a",
          text: "Traffic control manages WIP movement; tool control includes tool-life monitoring; data files can include pallet reference and tool life files",
          isCorrect: true,
          rationale:
            "Cơ chế: traffic control điều phối WIP/handling; tool control theo dõi availability/tool-life; data files có pallet reference và tool life. Bẫy: gộp tất cả vào production control. Khóa: computer control có nhiều function/file riêng.",
        },
        {
          id: "b",
          text: "Production control and traffic control are the same function",
          isCorrect: false,
          rationale:
            "Cơ chế: production control quản output/part mix; traffic control quản dòng WIP. Bẫy: đều là control nên gộp lại. Khóa: một cái điều phối sản xuất, một cái điều phối movement.",
        },
        {
          id: "c",
          text: "Tool-life files are unnecessary because tools never wear in FMS",
          isCorrect: false,
          rationale:
            "Cơ chế: tool wear vẫn xảy ra; tool-life monitoring giúp thay đúng lúc. Bẫy: nghĩ automation loại bỏ hao mòn vật lý. Khóa: FMS càng cần dữ liệu tool-life.",
        },
        {
          id: "d",
          text: "Pallet reference files store only customer names",
          isCorrect: false,
          rationale:
            "Cơ chế: pallet reference files định danh pallet và part/item gắn với pallet. Bẫy: nhầm reference file với CRM. Khóa: pallet data phục vụ tracking trong hệ.",
        },
        {
          id: "e",
          text: "DNC means workers manually rewrite programs at each machine every time",
          isCorrect: false,
          rationale:
            "Cơ chế: DNC phân phối instructions từ central control xuống machines. Bẫy: đảo automation thành thủ công. Khóa: DNC là chức năng computer distribution.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Computer functions and FMS data files",
      takeaway:
        "Computer control của FMS tách rõ production, traffic, tool control và các data files như routing, pallet reference, tool life.",
    },
    {
      id: "q10",
      stem: "Which statement correctly summarizes the main benefits of FMS?",
      options: [
        {
          id: "a",
          text: "FMS usually increases WIP and manufacturing lead time because computer control slows every move",
          isCorrect: false,
          rationale:
            "Cơ chế: slide nêu FMS giảm WIP và MLT nhờ điều phối tốt hơn. Bẫy: nghĩ hệ phức tạp thì chắc chậm. Khóa: control + handling giảm chờ và tồn dở.",
        },
        {
          id: "b",
          text: "FMS reduces utilization from 80% to 50% compared with batch production",
          isCorrect: false,
          rationale:
            "Cơ chế: con số đúng là FMS có thể tới ~80% so với ~50% batch. Bẫy: đảo chiều số. Khóa: utilization là lập luận đầu tư chính.",
        },
        {
          id: "c",
          text: "FMS has no effect on scheduling flexibility or labor productivity",
          isCorrect: false,
          rationale:
            "Cơ chế: FMS tăng scheduling flexibility và labour productivity nhờ CAM/program control và automation. Bẫy: chỉ nhìn machine utilization. Khóa: benefits gồm cả schedule và labour.",
        },
        {
          id: "d",
          text: "FMS eliminates the need for any capital justification because it is always cheaper than batch",
          isCorrect: false,
          rationale:
            "Cơ chế: FMS đắt, cần justify bằng utilization/WIP/MLT/productivity. Bẫy: nghĩ benefit tự động nghĩa là cost thấp. Khóa: phải đánh đổi investment với output.",
        },
        {
          id: "e",
          text: "FMS can raise utilization to about 80% versus about 50% in batch, reduce WIP and MLT, improve scheduling flexibility, and increase labor productivity",
          isCorrect: true,
          rationale:
            "Cơ chế: đây là đúng 5 benefits theo slide 7.4. Bẫy: đảo 80/50 hoặc bỏ WIP/MLT. Khóa: FMS tạo giá trị bằng utilization + flow + flexibility.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "FMS benefits",
      takeaway:
        "FMS justify bằng utilization cao hơn, WIP/MLT thấp hơn, schedule linh hoạt hơn và labour productivity cao hơn.",
    },
    {
      id: "q11",
      stem: "In Groover §19.4, what identifies the bottleneck station in the FMS bottleneck model?",
      options: [
        {
          id: "a",
          text: "The station with the largest number of machines, regardless of workload",
          isCorrect: false,
          rationale:
            "Cơ chế: bottleneck xét workload trên mỗi server, không phải số máy tuyệt đối. Bẫy: thấy nhiều máy thì nghĩ nghẽn. Khóa: station nhiều máy có thể không nghẽn nếu WL/server thấp.",
        },
        {
          id: "b",
          text: "The station with the smallest queue in a stochastic simulation",
          isCorrect: false,
          rationale:
            "Cơ chế: bottleneck model này deterministic và bỏ qua queue; không phải simulation queue. Bẫy: kéo queueing simulation vào công thức đơn giản. Khóa: dùng WLi ÷ si.",
        },
        {
          id: "c",
          text: "The station with the highest workload per server (WLi ÷ si), which limits the maximum output rate",
          isCorrect: true,
          rationale:
            "Cơ chế: bottleneck = max(WLi ÷ si); trạm này chặn throughput và có utilization 100% tại Rp*. Bẫy: chọn station nhiều máy hoặc total WL lớn mà quên chia server. Khóa: workload per server mới quyết định nghẽn.",
        },
        {
          id: "d",
          text: "The station chosen by the operator as most important, independent of data",
          isCorrect: false,
          rationale:
            "Cơ chế: bottleneck model dùng dữ liệu workload/server. Bẫy: biến analysis thành judgement chủ quan. Khóa: dùng công thức để xác định station nghẽn.",
        },
        {
          id: "e",
          text: "A station that always gives perfectly exact real-world output because the model includes every queue",
          isCorrect: false,
          rationale:
            "Cơ chế: model deterministic bỏ qua queue nên thường ước lượng cao hơn thực tế. Bẫy: tin công thức đơn giản là chính xác tuyệt đối. Khóa: đây là early estimate, không phải simulation đầy đủ.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "Bottleneck model concept (nâng cao §19.4)",
      takeaway:
        "Kiến thức THÊM §19.4: bottleneck station là trạm có WLi ÷ si lớn nhất, và nó chặn max production rate.",
    },
    {
      id: "q12",
      stem: "In the illustrative bottleneck model, the bottleneck station has s* = 2 servers and WL* = 15 min/part. What is the maximum production rate Rp*?",
      options: [
        {
          id: "a",
          text: "Rp* = 15 ÷ 2 = 7.5 part/min",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là đảo công thức; WL* ÷ s* là workload per server, không phải production rate. Bẫy: lấy số lớn hơn nghe tốt hơn. Khóa: Rp* = s* ÷ WL*.",
        },
        {
          id: "b",
          text: "Rp* = 2 ÷ 15 ≈ 0.133 part/min",
          isCorrect: true,
          rationale:
            "Cơ chế: Eq 19.5 dùng server của bottleneck chia workload bottleneck: 2 ÷ 15 ≈ 0.133 part/min. Bẫy: đảo tử/mẫu hoặc quên bottleneck station. Khóa: production rate bị giới hạn bởi trạm nghẽn.",
        },
        {
          id: "c",
          text: "Rp* = 2 × 15 = 30 part/min",
          isCorrect: false,
          rationale:
            "Cơ chế: nhân server và workload không tạo rate; workload là min/part nên phải chia. Bẫy: thấy hai số thì nhân. Khóa: units của rate là part/min.",
        },
        {
          id: "d",
          text: "Rp* = 15 − 2 = 13 part/min",
          isCorrect: false,
          rationale:
            "Cơ chế: trừ workload và server không có ý nghĩa đơn vị. Bẫy: thao tác số học không xét meaning. Khóa: dùng công thức s* ÷ WL*.",
        },
        {
          id: "e",
          text: "Rp* cannot be estimated unless this is exactly Example 19.4 from the book",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là số minh họa để hiểu công thức, không mạo danh Example 19.4; vẫn tính được theo model. Bẫy: nhầm academic honesty với không được tính. Khóa: ghi rõ nguồn/số minh họa nhưng vẫn áp dụng công thức.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "Rp* formula application (nâng cao §19.4)",
      takeaway:
        "Kiến thức THÊM §19.4: với bottleneck s* = 2 và WL* = 15, Rp* = 2 ÷ 15 ≈ 0.133 part/min.",
    },
  ],
  status: "ready",
  source:
    "Manufacturing Systems — slide 'Chapter 7 Flexible manufacturing' (lecturer Đặng Võ Hùng, 27 slide) cho elements/types/handling/layouts/computer functions/data files/benefits + ebook Groover, Automation, Production Systems & CIM 4e, Chapter 19 'Flexible Manufacturing Cells and Systems' (p.533–554) cho định nghĩa chuẩn + 4 flexibility tests + single-machine cell/FMC/FMS + §19.4 bottleneck model (đánh dấu kiến thức nâng cao).",
};

const topic08: Chapter = {
  slug: "topic-08",
  order: 8,
  title: "Topic 08 — Production Costs Management & Control",
  bigIdea:
    "Quản chi phí sản xuất = một VÒNG KIỂM SOÁT (kế hoạch → thực tế → so sánh → điều chỉnh); muốn kiểm soát được thì phải TÍNH ĐÚNG giá thành mỗi đơn vị — gồm direct cost, overhead phân bổ, và cả phần dở dang (WIP).",
  bigIdeaPillars: [
    {
      label: "Vòng kiểm soát",
      body: "4 elements: detailed planning → actual performance → comparison → adjustment; yêu cầu simple/effective/flexible + data đúng & cập nhật.",
    },
    {
      label: "Tính unit cost",
      body: "Direct material (từ BOM) + direct labour + overhead phân bổ (theo labour cost / working hours / machine hours). Nền phân loại: Groover §3.2.",
    },
    {
      label: "Định giá đơn vị",
      body: "Weighted method (cùng nhóm → quy về standard item) vs ratio method (khác nhóm → actual ÷ planning).",
    },
    {
      label: "Định giá WIP",
      body: "3 cách: materials-only / percentage of completion (equivalent units) / theo stage.",
    },
  ],
  learningObjectives: [
    "Giải thích cost control như một vòng kiểm soát 4 bước (detailed operation planning → actual performance → comparison → adjustment) và nêu yêu cầu của control process.",
    "Nêu các khía cạnh của production & labour control (lợi ích/sự cần thiết, triển khai, đào tạo, đánh giá + đãi ngộ) và các nguyên nhân khiến control thất bại.",
    "Phân loại chi phí sản xuất theo Groover §3.2: fixed vs variable (TC = Cf + Cv×Q); direct labour, material, overhead (factory vs corporate).",
    "Tính unit cost gồm direct cost (materials từ BOM + labour) và overhead phân bổ theo cơ sở hợp lý (working hours, machine hours, labour cost).",
    "Áp dụng weighted method (equivalent exchange) để định giá các item cùng nhóm.",
    "Áp dụng ratio method (actual ÷ planning) để định giá các item khác nhóm.",
    "Tính giá trị WIP và giá thành item theo 3 cách: materials consideration, percentage of completion, và actual stages consideration.",
  ],
  knowledgeMap: {
    engine: "flow",
    layout: "tree",
    collapsible: true,
    caption:
      "Quản chi phí = vòng kiểm soát + tính đúng giá thành: (A) vòng kiểm soát, (B) tính unit cost, (C) định giá đơn vị, (D) định giá WIP. Bấm node để mở chi tiết.",
    nodes: [
      {
        id: "cost",
        label: "Costs Management & Control",
        group: "concept",
        sectionId: "s1",
        detail:
          "Vòng kiểm soát chi phí + cách tính giá thành đơn vị (kể cả WIP).",
      },
      {
        id: "g_ctrl",
        label: "A. Vòng kiểm soát",
        group: "concept",
        parent: "cost",
        sectionId: "s1",
        detail: "Control loop 4 bước + production/labour control.",
      },
      {
        id: "g_unit",
        label: "B. Tính unit cost",
        group: "concept",
        parent: "cost",
        sectionId: "s3",
        detail: "Phân loại chi phí + overhead allocation.",
      },
      {
        id: "g_price",
        label: "C. Định giá đơn vị",
        group: "concept",
        parent: "cost",
        sectionId: "s5",
        detail: "Weighted method vs ratio method.",
      },
      {
        id: "g_wip",
        label: "D. Định giá WIP",
        group: "concept",
        parent: "cost",
        sectionId: "s7",
        detail: "3 cách tính giá trị dở dang.",
      },
      {
        id: "t_loop",
        label: "Control loop 4 bước",
        group: "term",
        parent: "g_ctrl",
        sectionId: "s1",
        detail: "Planning → actual → comparison → adjustment.",
      },
      {
        id: "t_ctrl",
        label: "Production & labour control",
        group: "term",
        parent: "g_ctrl",
        sectionId: "s2",
        detail:
          "Lợi ích, triển khai, đào tạo, đánh giá; nguyên nhân thất bại.",
      },
      {
        id: "t_classify",
        label: "Phân loại chi phí (Groover §3.2)",
        group: "term",
        parent: "g_unit",
        sectionId: "s3",
        detail:
          "Fixed/variable (TC=Cf+Cv×Q); direct labour/material/overhead.",
      },
      {
        id: "t_overhead",
        label: "Overhead allocation",
        group: "term",
        parent: "g_unit",
        sectionId: "s4",
        detail: "Phân bổ theo working hours / machine hours / labour cost.",
      },
      {
        id: "t_weighted",
        label: "Weighted method",
        group: "term",
        parent: "g_price",
        sectionId: "s5",
        detail: "Cùng nhóm → quy về standard item (equivalent exchange).",
      },
      {
        id: "t_ratio",
        label: "Ratio method",
        group: "term",
        parent: "g_price",
        sectionId: "s6",
        detail: "Khác nhóm → actual ÷ planning.",
      },
      {
        id: "t_wip_mat",
        label: "WIP — materials consideration",
        group: "term",
        parent: "g_wip",
        sectionId: "s7",
        detail: "WIP gánh materials; labour/overhead dồn cho items.",
      },
      {
        id: "t_wip_pct",
        label: "WIP — percentage of completion",
        group: "term",
        parent: "g_wip",
        sectionId: "s8",
        detail:
          "Quy WIP về equivalent units; materials 100%, labour/oh theo % hoàn thành.",
      },
      {
        id: "t_wip_stage",
        label: "WIP — actual stages",
        group: "term",
        parent: "g_wip",
        sectionId: "s9",
        detail: "WIP theo từng stage, chuyển cost stage trước sang sau.",
      },
    ],
    edges: [
      { from: "cost", to: "g_ctrl" },
      { from: "cost", to: "g_unit" },
      { from: "cost", to: "g_price" },
      { from: "cost", to: "g_wip" },
      { from: "g_ctrl", to: "t_loop" },
      { from: "g_ctrl", to: "t_ctrl" },
      { from: "g_unit", to: "t_classify" },
      { from: "g_unit", to: "t_overhead" },
      { from: "g_price", to: "t_weighted" },
      { from: "g_price", to: "t_ratio" },
      { from: "g_wip", to: "t_wip_mat" },
      { from: "g_wip", to: "t_wip_pct" },
      { from: "g_wip", to: "t_wip_stage" },
    ],
  },
  sections: [
    {
      id: "s1",
      heading: "Vòng kiểm soát chi phí",
      blocks: [
        flowBlock(
          "s1",
          "Control loop 4 bước",
          "horizontal",
          [
            {
              id: "s1_plan",
              label: "1. Detailed operation planning",
              group: "concept",
              detail:
                "Lập kế hoạch chi tiết: policies/rules, long-term (>5 năm), mid & short-term (<1 năm).",
            },
            {
              id: "s1_actual",
              label: "2. Actual performance",
              group: "concept",
              detail:
                "Ghi nhận thực tế: actual output, actual cost; cập nhật cùng tham số với plan.",
            },
            {
              id: "s1_compare",
              label: "3. Comparison & evaluation",
              group: "concept",
              detail:
                "So sánh thực tế vs kế hoạch; đánh giá tính khả thi của phần còn lại.",
            },
            {
              id: "s1_adjust",
              label: "4. Adjustment",
              group: "concept",
              detail:
                "Điều chỉnh/cập nhật phần kế hoạch còn lại để đạt target & budget gốc.",
            },
          ],
          [
            { from: "s1_plan", to: "s1_actual", label: "thực thi" },
            { from: "s1_actual", to: "s1_compare", label: "đo" },
            { from: "s1_compare", to: "s1_adjust", label: "đánh giá" },
            { from: "s1_adjust", to: "s1_plan", label: "lặp" },
          ],
          "Slide 8.1: cost management là một vòng lặp plan-do-compare-adjust (slide 1-8/54).",
        ),
        calloutBlock(
          "key",
          "4 essential elements của control system",
          "(1) Detailed operation planning; (2) Actual/realistic performance; (3) Comparison & evaluation; (4) Adjustment. Đây là bộ khung của mọi control process — không riêng chi phí (slide 2-8/54).",
        ),
        calloutBlock(
          "note",
          "Yêu cầu của control process",
          "Control tốt phải: simple + effective + flexible; dùng data đúng & cập nhật; tập trung vào các factor/parameter trọng yếu; được lập kế hoạch & điều chỉnh (slide 9/54).",
        ),
      ],
      keyTerms: [
        {
          term: "cost control",
          definition:
            "Quá trình lập plan, đo actual, so sánh và điều chỉnh để giữ cost theo target.",
        },
        {
          term: "operation planning",
          definition:
            "Kế hoạch chi tiết làm nền để đo và điều chỉnh hoạt động sản xuất.",
        },
        {
          term: "actual performance",
          definition:
            "Kết quả thực tế dùng để so sánh với plan trong control loop.",
        },
        {
          term: "adjustment",
          definition:
            "Hành động cập nhật phần plan còn lại sau khi so sánh actual với target.",
        },
      ],
    },
    {
      id: "s2",
      heading: "Production & labour control",
      blocks: [
        comparisonBlock(
          "Các khía cạnh của production & labour control (slide 8.1.2)",
          ["Khía cạnh", "Nội dung"],
          [
            {
              label: "Advantages & necessity",
              cells: [
                "Xác nhận control process là cần thiết; nhắc & xác định human responsibility trong kiểm soát.",
              ],
            },
            {
              label: "Implementation",
              cells: [
                "Hợp tác của toàn bộ nhân sự là chìa khóa để control thành công.",
              ],
            },
            {
              label: "Staff training",
              cells: [
                "Chương trình đào tạo rất quan trọng & phải duy trì thường xuyên.",
              ],
            },
            {
              label: "Evaluation & compensation",
              cells: [
                "Đánh giá kết quả & đãi ngộ cho control staff, lặp lại theo chu kỳ ngắn→dài hạn.",
              ],
            },
          ],
        ),
        calloutBlock(
          "note",
          "Nguyên nhân control thất bại",
          "(1) Operators: thiếu năng lực, sai thao tác; (2) Operations data: input data (costs, standard time, auditing data) không chính xác. → 'rác vào, rác ra': kiểm soát chỉ tốt khi dữ liệu & con người đáng tin (slide 15/54).",
        ),
      ],
      keyTerms: [
        {
          term: "production control",
          definition:
            "Hoạt động kiểm soát việc sản xuất theo plan, performance và adjustment.",
        },
        {
          term: "labour control",
          definition:
            "Kiểm soát khía cạnh con người: responsibility, training, evaluation và compensation.",
        },
        {
          term: "human responsibility",
          definition:
            "Trách nhiệm của operator/control staff trong việc giữ control process vận hành đúng.",
        },
      ],
    },
    {
      id: "s3",
      heading: "Phân loại chi phí",
      blocks: [
        comparisonBlock(
          "Fixed vs Variable cost (Groover §3.2.1)",
          ["Loại", "Đặc điểm", "Ví dụ"],
          [
            {
              label: "Fixed cost",
              cells: [
                "Không đổi theo mức sản lượng (tính theo năm).",
                "Nhà xưởng, thiết bị, bảo hiểm, thuế tài sản.",
              ],
            },
            {
              label: "Variable cost",
              cells: [
                "Biến đổi tỷ lệ với sản lượng.",
                "Direct labour, raw materials, điện chạy máy.",
              ],
            },
          ],
        ),
        formulaBlock(
          "TC = Cf + Cv × Q",
          [
            { symbol: "TC", meaning: "total annual cost ($/yr)" },
            { symbol: "Cf", meaning: "fixed annual cost ($/yr)" },
            { symbol: "Cv", meaning: "variable cost ($/pc)" },
            { symbol: "Q", meaning: "annual quantity (pc/yr)" },
          ],
          "Groover Eq 3.25. Khi so manual vs automated: automation có Cf cao/Cv thấp → lợi ở sản lượng lớn; manual lợi ở sản lượng nhỏ. Giao nhau = break-even point (Groover p.60).",
        ),
        comparisonBlock(
          "Direct labour / Material / Overhead (Groover §3.2.2)",
          ["Loại chi phí", "Nội dung"],
          [
            {
              label: "Direct labour",
              cells: [
                "Lương + phúc lợi của công nhân vận hành & gia công/lắp ráp — variable cost.",
              ],
            },
            {
              label: "Material",
              cells: [
                "Chi phí raw materials làm ra sản phẩm — variable cost.",
              ],
            },
            {
              label: "Factory overhead",
              cells: [
                "Chi phí vận hành nhà máy ngoài direct labour/material (giám sát, bảo trì, khấu hao, điện...) — thường fixed.",
              ],
            },
            {
              label: "Corporate overhead",
              cells: [
                "Chi phí không liên quan trực tiếp sản xuất (điều hành, sales/marketing, kế toán, R&D...).",
              ],
            },
          ],
        ),
      ],
      keyTerms: [
        {
          term: "fixed cost",
          definition:
            "Chi phí không đổi theo output trong phạm vi sản lượng đang xét.",
        },
        {
          term: "variable cost",
          definition: "Chi phí biến đổi tỷ lệ với quantity Q.",
        },
        {
          term: "factory overhead",
          definition:
            "Chi phí vận hành nhà máy ngoài direct labour và material.",
        },
        {
          term: "corporate overhead",
          definition:
            "Chi phí doanh nghiệp không gắn trực tiếp với hoạt động sản xuất.",
        },
      ],
    },
    {
      id: "s4",
      heading: "Unit cost & overhead allocation",
      blocks: [
        calloutBlock(
          "key",
          "Unit cost gồm gì",
          "Giá thành đơn vị = direct cost + overhead phân bổ. Direct: materials (dựa Bill of Materials — BOM) + direct labour (công nhân liên quan). Overhead: tính cho TẤT CẢ item rồi PHÂN BỔ về từng loại theo một cơ sở hợp lý (slide 8.2).",
        ),
        comparisonBlock(
          "Cơ sở phân bổ overhead (slide 17/54 + Groover p.62)",
          ["Cơ sở", "Ghi chú"],
          [
            {
              label: "Involved working hours",
              cells: [
                "Phân bổ theo giờ công liên quan — dùng trong ví dụ slide.",
              ],
            },
            {
              label: "Machine hours",
              cells: ["Theo số giờ máy."],
            },
            {
              label: "Involved labour cost",
              cells: [
                "Theo chi phí lao động — phổ biến nhất theo Groover.",
              ],
            },
            {
              label: "Number of staff / raw materials",
              cells: [
                "Theo số nhân sự hoặc lượng nguyên liệu mỗi item.",
              ],
            },
          ],
        ),
        calcBlock(
          "Ví dụ: phân bổ overhead theo working hours",
          [
            {
              label: "Dữ kiện",
              expr: "Overhead tháng = $20,000; A cần 400h, B cần 600h → tổng 1,000h",
            },
            {
              label: "Overhead cho A",
              expr: "(400 ÷ 1,000) × 20,000 = $8,000",
            },
            {
              label: "Overhead cho B",
              expr: "(600 ÷ 1,000) × 20,000 = $12,000",
            },
          ],
          "A gánh $8,000; B gánh $12,000",
          "Overhead chia theo tỷ lệ giờ công mỗi item chiếm.",
          "Chọn cơ sở phân bổ khác (machine hours...) sẽ ra con số khác → phải chọn cơ sở phản ánh đúng mức tiêu thụ nguồn lực (slide 18/54).",
        ),
      ],
      keyTerms: [
        {
          term: "unit cost",
          definition:
            "Giá thành một đơn vị sản phẩm sau khi cộng direct cost và phần overhead phân bổ.",
        },
        {
          term: "bill of materials (BOM)",
          definition:
            "Danh sách vật liệu dùng để xác định direct material cost.",
        },
        {
          term: "overhead allocation",
          definition:
            "Phân bổ overhead chung về từng item bằng allocation base hợp lý.",
        },
      ],
    },
    {
      id: "s5",
      heading: "Weighted method",
      blocks: [
        calloutBlock(
          "key",
          "Khi nào dùng weighted method",
          "Dùng cho các item CÙNG NHÓM, so sánh với nhau để gán WEIGHT (dựa kinh nghiệm hoặc mức đóng góp lợi ích). Chọn một item làm standard (weight = 1.0), quy tất cả về 'standard units' (equivalent exchange), rồi chia tổng chi phí (slide 8.3.1).",
        ),
        calcBlock(
          "Ví dụ weighted method",
          [
            {
              label: "Quy về standard units",
              expr: "A: 2,000×1.0=2,000 | B: 1,500×1.2=1,800 | C: 1,000×1.5=1,500 | D: 2,000×0.8=1,600 → tổng 6,900",
            },
            {
              label: "Đơn giá standard (item A)",
              expr: "28,980,000 ÷ 6,900 = 4,200 VN",
            },
            {
              label: "Giá từng item = 4,200 × weight",
              expr: "B=5,040 | C=6,300 | D=3,360",
            },
            {
              label: "Kiểm tra",
              expr: "A:4,200×2,000 + B:5,040×1,500 + C:6,300×1,000 + D:3,360×2,000 = 28,980,000 VN",
            },
          ],
          "Giá đơn vị: A=4,200, B=5,040, C=6,300, D=3,360 VN",
          "Weight biến các item khác nhau về cùng một 'chuẩn' để chia chi phí công bằng.",
          "Tổng khớp lại đúng chi phí gốc → phương pháp bảo toàn tổng (slide 20-24/54).",
        ),
      ],
      keyTerms: [
        {
          term: "weighted method",
          definition:
            "Phương pháp dùng weight để quy các item cùng nhóm về standard units.",
        },
        {
          term: "equivalent exchange",
          definition:
            "Quy đổi sản lượng thực tế thành sản lượng tương đương theo weight.",
        },
        {
          term: "standard item",
          definition:
            "Item được chọn làm chuẩn với weight = 1.0.",
        },
      ],
    },
    {
      id: "s6",
      heading: "Ratio method",
      blocks: [
        calloutBlock(
          "key",
          "Khi nào dùng ratio method",
          "Dùng cho item KHÁC NHÓM (không xác định được weight chung). Dựa trên planning cost và actual cost để tìm RATIO, rồi nhân ratio với giá kế hoạch → giá thực tế mỗi item (slide 8.3.2).",
        ),
        calcBlock(
          "Ví dụ ratio method",
          [
            {
              label: "Tổng giá kế hoạch (planning)",
              expr: "A:2,250×1,200 + B:4,500×900 + C:1,500×1,500 = 9,000,000 VN",
            },
            {
              label: "Ratio = actual ÷ planning",
              expr: "8,640,000 ÷ 9,000,000 × 100% = 96%",
            },
            {
              label: "Giá thực tế = giá kế hoạch × 96%",
              expr: "A=2,160 | B=4,320 | C=1,440 VN",
            },
          ],
          "Ratio = 96%; giá thực tế A=2,160, B=4,320, C=1,440 VN",
          "Actual thấp hơn plan 4% → mọi giá co lại theo cùng tỷ lệ.",
          "Khác weighted: ratio không cần quy đổi standard, chỉ scale theo tỷ lệ actual/plan (slide 26-30/54).",
        ),
      ],
      keyTerms: [
        {
          term: "ratio method",
          definition:
            "Phương pháp lấy actual cost chia planning cost rồi scale giá kế hoạch.",
        },
        {
          term: "planning cost",
          definition: "Chi phí kế hoạch dùng làm mốc so sánh.",
        },
        {
          term: "actual cost",
          definition: "Chi phí thực tế phát sinh.",
        },
      ],
    },
    {
      id: "s7",
      heading: "WIP: materials consideration",
      blocks: [
        calloutBlock(
          "key",
          "Cách 1 — materials consideration",
          "WIP được tính giá trị dựa trên MATERIALS đã dùng cho nó; còn labour cost & overhead cost thì dồn (allocate) cho FINISHED ITEMS. Tức WIP chỉ 'gánh' nguyên liệu (slide 8.4.1).",
        ),
        calcBlock(
          "Ví dụ WIP materials consideration",
          [
            {
              label: "Materials/unit (item + WIP)",
              expr: "5,000,000 ÷ (1,600 + 400) = 2,500 VN",
            },
            {
              label: "Giá trị WIP",
              expr: "2,500 × 400 = 1,000,000 VN",
            },
            {
              label: "Giá trị items",
              expr: "7,400,000 − 1,000,000 = 6,400,000 VN",
            },
            {
              label: "Giá thành item",
              expr: "6,400,000 ÷ 1,600 = 4,000 VN",
            },
          ],
          "WIP = 1,000,000 VN; giá thành item = 4,000 VN",
          "WIP nhẹ (chỉ materials) → giá items cao hơn.",
          "WIP giảm → giá items tăng → lợi nhuận thấp; WIP tăng → giá items giảm → lợi nhuận cao (slide 31/54).",
        ),
      ],
      keyTerms: [
        {
          term: "work-in-process (WIP)",
          definition:
            "Sản phẩm dở dang đang nằm trong quá trình sản xuất.",
        },
        {
          term: "materials consideration",
          definition:
            "Cách tính WIP chỉ gánh phần materials đã dùng.",
        },
        {
          term: "finished item",
          definition:
            "Sản phẩm hoàn thành, gánh phần labour và overhead trong cách materials consideration.",
        },
      ],
    },
    {
      id: "s8",
      heading: "WIP: percentage of completion",
      blocks: [
        calloutBlock(
          "key",
          "Cách 2 — percentage of completion",
          "Quy WIP về EQUIVALENT final items theo % hoàn thành. Lưu ý: MATERIALS phân bổ 100% cho WIP (đã có đủ nguyên liệu), còn LABOUR & OVERHEAD chỉ tính theo % completion (slide 8.4.2).",
        ),
        calcBlock(
          "Ví dụ WIP % completion (1,200 items + 400 WIP @50%)",
          [
            {
              label: "Materials/unit (WIP tính đủ)",
              expr: "6,400,000 ÷ (1,200 + 400) = 4,000 VN",
            },
            {
              label: "Quy WIP về equivalent units",
              expr: "400 × 50% = 200 units (cho labour & overhead)",
            },
            {
              label: "Labour/unit",
              expr: "2,800,000 ÷ (1,200 + 200) = 2,000 VN",
            },
            {
              label: "Overhead/unit",
              expr: "1,400,000 ÷ (1,200 + 200) = 1,000 VN",
            },
            {
              label: "Giá thành item & WIP",
              expr: "item = 4,000+2,000+1,000 = 7,000 VN; WIP/unit = 4,000 + 2,000×50% + 1,000×50% = 5,500 → WIP = 5,500×400 = 2,200,000 VN",
            },
          ],
          "Giá item = 7,000 VN; WIP = 2,200,000 VN",
          "Materials đủ cho WIP, nhưng công & overhead chỉ tính nửa vì mới xong 50%.",
          "Đây là ý tưởng equivalent units của process costing — WIP dở dang không gánh đủ conversion cost (slide 38-42/54).",
        ),
      ],
      keyTerms: [
        {
          term: "percentage of completion",
          definition:
            "Tỷ lệ hoàn thành dùng để quy WIP về equivalent units.",
        },
        {
          term: "equivalent units",
          definition:
            "Số đơn vị hoàn thành tương đương để phân bổ labour và overhead.",
        },
        {
          term: "conversion cost",
          definition:
            "Labour + overhead, phần không phải materials trong ví dụ WIP.",
        },
      ],
    },
    {
      id: "s9",
      heading: "WIP: actual stages consideration",
      blocks: [
        calloutBlock(
          "key",
          "Cách 3 — actual stages consideration",
          "Khi sản phẩm qua nhiều STAGE, tính giá trị WIP theo chi phí lũy kế đến stage mà nó đang nằm: WIP ở stage sau đã 'mang theo' (transfer) toàn bộ chi phí của stage trước. Tổng giá trị items = tổng actual cost − tổng WIP (slide 8.4.3).",
        ),
        calcBlock(
          "Ví dụ WIP theo stage (3 stages)",
          [
            {
              label: "Chi phí lũy kế mỗi unit",
              expr: "Stage 1 = 4,500 | Stage 2 = 5,400 | Stage 3 = 6,300 VN",
            },
            {
              label: "WIP mỗi stage",
              expr: "S1: 100×3,750=375,000 (chỉ materials) | S2: 150×4,500=675,000 | S3: 200×5,400=1,080,000",
            },
            {
              label: "Tổng WIP",
              expr: "375,000 + 675,000 + 1,080,000 = 2,130,000 VN",
            },
            {
              label: "Giá trị items & giá thành",
              expr: "items = 7,935,000 − 2,130,000 = 5,805,000; giá thành = 5,805,000 ÷ 900 = 6,450 VN",
            },
          ],
          "Tổng WIP = 2,130,000 VN; giá thành item = 6,450 VN",
          "WIP càng ở stage sau càng đắt vì cộng dồn chi phí stage trước (transfer cost).",
          "Cách này sát thực tế dòng gia công nhiều công đoạn; WIP ở stage dùng chi phí lũy kế của stage ngay trước (slide 50-54/54).",
        ),
      ],
      keyTerms: [
        {
          term: "stage",
          definition:
            "Công đoạn sản xuất trong chuỗi tính cost theo actual stages consideration.",
        },
        {
          term: "transfer cost",
          definition:
            "Chi phí stage trước được chuyển sang stage sau.",
        },
        {
          term: "cumulative cost",
          definition:
            "Chi phí lũy kế đến stage mà WIP đang nằm.",
        },
      ],
    },
  ],
  questions: [
    {
      id: "q01",
      stem: "Which sequence best represents the four essential elements of a production cost control system?",
      options: [
        {
          id: "a",
          text: "Actual performance → detailed operation planning → adjustment → comparison and evaluation",
          isCorrect: false,
          rationale:
            "Cơ chế: control loop cần plan trước để có chuẩn so sánh actual. Bẫy: đặt actual performance lên đầu làm mất baseline. Khóa: detailed operation planning là điểm xuất phát.",
        },
        {
          id: "b",
          text: "Detailed operation planning → actual performance → comparison and evaluation → adjustment",
          isCorrect: true,
          rationale:
            "Cơ chế: slide 8.1 đi từ plan, đo actual, so sánh/evaluate, rồi adjustment. Bẫy: bỏ adjustment thì control chỉ là báo cáo. Khóa: control là vòng lặp plan-do-compare-adjust.",
        },
        {
          id: "c",
          text: "Detailed operation planning → adjustment → actual performance → comparison and evaluation",
          isCorrect: false,
          rationale:
            "Cơ chế: adjustment chỉ có ý nghĩa sau khi đã so sánh actual với plan. Bẫy: chỉnh trước khi đo. Khóa: actual performance và comparison phải đi trước adjustment.",
        },
        {
          id: "d",
          text: "Comparison and evaluation → adjustment → detailed operation planning → actual performance",
          isCorrect: false,
          rationale:
            "Cơ chế: comparison cần hai dữ liệu là plan và actual. Bẫy: mở đầu bằng so sánh khi chưa có cái để so. Khóa: plan và actual là input của comparison.",
        },
        {
          id: "e",
          text: "Detailed operation planning → actual performance → final reporting, with no adjustment loop",
          isCorrect: false,
          rationale:
            "Cơ chế: final reporting không thay thế adjustment. Bẫy: xem control như báo cáo cuối kỳ. Khóa: adjustment biến đo lường thành control process.",
        },
      ],
      difficulty: "basic",
      conceptTested: "Control loop 4 elements",
      takeaway:
        "Cost control là vòng lặp: planning → actual performance → comparison/evaluation → adjustment.",
    },
    {
      id: "q02",
      stem: "Which statement best describes why a production control process succeeds or fails?",
      options: [
        {
          id: "a",
          text: "It succeeds mainly when the accounting software is expensive enough",
          isCorrect: false,
          rationale:
            "Cơ chế: slide nhấn simple/effective/flexible, đúng data và con người. Bẫy: đồng nhất control với phần mềm. Khóa: tool không cứu được input data sai và operator yếu.",
        },
        {
          id: "b",
          text: "It fails only when the budget target is too ambitious",
          isCorrect: false,
          rationale:
            "Cơ chế: target khó có thể gây áp lực, nhưng spec nêu failures do operators và operations data. Bẫy: quy lỗi hết cho budget. Khóa: kiểm soát cần năng lực con người và data đáng tin.",
        },
        {
          id: "c",
          text: "It should be complex and rigid so people cannot change it",
          isCorrect: false,
          rationale:
            "Cơ chế: control tốt phải simple, effective, flexible. Bẫy: tưởng rigid là kiểm soát chặt. Khóa: flexible giúp adjustment theo thực tế.",
        },
        {
          id: "d",
          text: "It must be simple, effective, flexible, and based on accurate updated data; failure often comes from weak operators or wrong input data",
          isCorrect: true,
          rationale:
            "Cơ chế: đây là đúng yêu cầu control process và nguyên nhân unsuccessful. Bẫy: chỉ nhìn system mà bỏ people/data. Khóa: control = process + people + accurate data.",
        },
        {
          id: "e",
          text: "It succeeds when operators are excluded from responsibility",
          isCorrect: false,
          rationale:
            "Cơ chế: production & labour control nhấn human responsibility. Bẫy: muốn loại con người khỏi control. Khóa: operator responsibility là phần của control.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Control process requirements and failure causes",
      takeaway:
        "Control thất bại thường không phải vì thiếu công thức, mà vì people/data không đáng tin.",
    },
    {
      id: "q03",
      stem: "Under Groover's manufacturing cost classification, which statement is correct?",
      options: [
        {
          id: "a",
          text: "Fixed cost varies directly with output, while variable cost stays constant",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là đảo định nghĩa. Bẫy: thấy chữ variable/fixed nhưng gán ngược. Khóa: fixed không đổi theo Q; variable tỷ lệ với Q.",
        },
        {
          id: "b",
          text: "Direct labour and raw materials are normally variable costs, and TC = Cf + Cv × Q",
          isCorrect: true,
          rationale:
            "Cơ chế: direct labour/material biến đổi theo output; total cost gồm fixed annual cost cộng variable cost per piece nhân quantity. Bẫy: coi labour luôn fixed. Khóa: dùng TC = Cf + Cv × Q.",
        },
        {
          id: "c",
          text: "Factory building and equipment insurance are variable costs because they are paid every year",
          isCorrect: false,
          rationale:
            "Cơ chế: trả hằng năm không làm chi phí thành variable; tiêu chí là thay đổi theo output. Bẫy: nhầm thời điểm trả tiền với behavior. Khóa: building/insurance là fixed trong ví dụ.",
        },
        {
          id: "d",
          text: "TC = Q ÷ (Cf + Cv), so quantity is divided by total cost",
          isCorrect: false,
          rationale:
            "Cơ chế: công thức bị đảo và sai đơn vị. Bẫy: thao tác đại số không kiểm tra meaning. Khóa: TC = Cf + Cv × Q.",
        },
        {
          id: "e",
          text: "All overhead is variable because it supports production volume",
          isCorrect: false,
          rationale:
            "Cơ chế: factory overhead thường được mô tả là fixed trong nền Groover. Bẫy: nghe 'supports production' nên tưởng chạy theo mỗi unit. Khóa: phân biệt overhead với variable direct cost.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Fixed vs variable cost and total cost formula",
      takeaway:
        "Fixed/variable được phân loại theo behavior với Q, không theo tên tài khoản hay thời điểm trả tiền.",
    },
    {
      id: "q04",
      stem: "Which classification is most accurate for direct and overhead manufacturing costs?",
      options: [
        {
          id: "a",
          text: "Corporate overhead is the same as factory overhead because both are overhead",
          isCorrect: false,
          rationale:
            "Cơ chế: factory overhead gắn với vận hành nhà máy; corporate overhead là chi phí doanh nghiệp không trực tiếp sản xuất. Bẫy: thấy cùng chữ overhead rồi gộp. Khóa: hỏi location/function của cost.",
        },
        {
          id: "b",
          text: "Factory overhead is direct material because it is used inside the factory",
          isCorrect: false,
          rationale:
            "Cơ chế: direct material đi vào sản phẩm; factory overhead là supervision, maintenance, depreciation, utilities... Bẫy: dùng địa điểm 'factory' để suy ra direct. Khóa: direct nghĩa là trace được vào product.",
        },
        {
          id: "c",
          text: "Direct labour and material are direct variable costs; factory overhead includes supervision, maintenance, depreciation, and utilities; corporate overhead is not directly tied to production",
          isCorrect: true,
          rationale:
            "Cơ chế: statement này giữ đúng ba lớp direct labour/material, factory overhead, corporate overhead. Bẫy: nhầm corporate overhead vào cost nhà máy. Khóa: direct traceability và factory/corporate boundary.",
        },
        {
          id: "d",
          text: "Sales and marketing costs are direct labour costs when the product sells well",
          isCorrect: false,
          rationale:
            "Cơ chế: sales/marketing thuộc corporate overhead trong mô tả, không thành direct labour theo kết quả bán hàng. Bẫy: gắn outcome với classification. Khóa: classification dựa vào bản chất chi phí.",
        },
        {
          id: "e",
          text: "Depreciation is always a direct labour cost because workers use the machine",
          isCorrect: false,
          rationale:
            "Cơ chế: depreciation là factory overhead trong ví dụ. Bẫy: suy từ người dùng máy sang labour. Khóa: labour là wages/benefits của worker, không phải hao mòn thiết bị.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Direct cost vs factory/corporate overhead",
      takeaway:
        "Đừng gộp mọi overhead vào một nhóm: factory overhead khác corporate overhead, và direct khác overhead.",
    },
    {
      id: "q05",
      stem: "A factory has $20,000 monthly overhead. Product A uses 400 working hours and product B uses 600 working hours. If overhead is allocated by working hours, what are the overhead amounts for A and B?",
      options: [
        {
          id: "a",
          text: "A = $10,000; B = $10,000",
          isCorrect: false,
          rationale:
            "Cơ chế: chia đều bỏ qua allocation base là working hours. Bẫy: thấy hai product thì chia đôi. Khóa: dùng tỷ lệ giờ công 400/1,000 và 600/1,000.",
        },
        {
          id: "b",
          text: "A = $12,000; B = $8,000",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là đảo A/B. Bẫy: product ít giờ lại nhận overhead nhiều hơn. Khóa: B dùng 600h nên nhận phần lớn hơn.",
        },
        {
          id: "c",
          text: "A = $8,000; B = $12,000",
          isCorrect: true,
          rationale:
            "Cơ chế: total hours = 1,000; A = (400÷1,000)×20,000 = $8,000; B = (600÷1,000)×20,000 = $12,000. Bẫy: chia đều hoặc đảo tỷ lệ. Khóa: overhead allocation theo working hours.",
        },
        {
          id: "d",
          text: "A = $400; B = $600",
          isCorrect: false,
          rationale:
            "Cơ chế: đây chỉ là số giờ, không phải dollars overhead. Bẫy: quên nhân tổng overhead. Khóa: hours là base, cost phải ra bằng tiền.",
        },
        {
          id: "e",
          text: "A = $20,000; B = $20,000",
          isCorrect: false,
          rationale:
            "Cơ chế: gán toàn bộ overhead cho từng product làm tổng bị nhân đôi. Bẫy: tưởng mỗi product đều nhận full overhead. Khóa: tổng phân bổ phải bằng $20,000.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "Overhead allocation by working hours",
      takeaway:
        "Overhead allocation luôn đi theo allocation base; tổng phân bổ phải khớp overhead gốc.",
    },
    {
      id: "q06",
      stem: "When should weighted method and ratio method be used in unit price calculation?",
      options: [
        {
          id: "a",
          text: "Weighted method is for items in the same group; ratio method is for items in different groups using actual cost divided by planning cost",
          isCorrect: true,
          rationale:
            "Cơ chế: weighted quy cùng nhóm về standard units bằng weight; ratio scale item khác nhóm bằng actual ÷ planning. Bẫy: đảo hai phương pháp. Khóa: same group → weight; different groups → ratio.",
        },
        {
          id: "b",
          text: "Weighted method is for items in different groups, while ratio method requires common weights",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là đảo điều kiện dùng. Bẫy: nghe 'ratio' tưởng cần weight. Khóa: ratio không cần weight chung.",
        },
        {
          id: "c",
          text: "Both methods are used only when all items have identical planned prices",
          isCorrect: false,
          rationale:
            "Cơ chế: weighted và ratio xử lý khác biệt giữa item, không yêu cầu giá giống nhau. Bẫy: tưởng định giá chỉ khi đã đồng nhất. Khóa: phương pháp tạo ra cơ sở so sánh/scale.",
        },
        {
          id: "d",
          text: "Weighted method ignores total cost; ratio method ignores actual cost",
          isCorrect: false,
          rationale:
            "Cơ chế: weighted chia total cost; ratio bắt đầu từ actual cost và planning cost. Bẫy: bỏ input chính của phương pháp. Khóa: mỗi method đều bảo toàn hoặc scale theo cost.",
        },
        {
          id: "e",
          text: "Ratio method is for WIP valuation, not unit pricing",
          isCorrect: false,
          rationale:
            "Cơ chế: ratio method thuộc định giá đơn vị trong slide 8.3.2. Bẫy: nhầm sang phần WIP 8.4. Khóa: WIP có ba cách riêng ở sections s7-s9.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Weighted method vs ratio method use cases",
      takeaway:
        "Cùng nhóm thì dùng weight/standard unit; khác nhóm thì dùng actual/planning ratio.",
    },
    {
      id: "q07",
      stem: "In the weighted method example, total cost is 28,980,000 VN and total standard units are 6,900. What is the standard unit price, and what is product B's unit price if B has weight 1.2?",
      options: [
        {
          id: "a",
          text: "Standard price = 4,200 VN; B = 5,040 VN",
          isCorrect: true,
          rationale:
            "Cơ chế: 28,980,000 ÷ 6,900 = 4,200; B = 4,200×1.2 = 5,040. Bẫy: chia cho output thô thay vì standard units. Khóa: weighted method luôn chia theo equivalent standard units.",
        },
        {
          id: "b",
          text: "Standard price = 4,200 VN; B = 4,200 VN",
          isCorrect: false,
          rationale:
            "Cơ chế: 4,200 là giá standard item A, chưa nhân weight của B. Bẫy: quên weight 1.2. Khóa: unit price của item = standard price × weight.",
        },
        {
          id: "c",
          text: "Standard price = 5,040 VN; B = 4,200 VN",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là đảo standard price và B price. Bẫy: thấy 5,040 là số nổi bật rồi gán cho standard. Khóa: standard item có weight 1.0 nên là 4,200.",
        },
        {
          id: "d",
          text: "Standard price = 6,900 VN; B = 8,280 VN",
          isCorrect: false,
          rationale:
            "Cơ chế: 6,900 là standard units, không phải unit price. Bẫy: lấy denominator làm price. Khóa: price phải lấy total cost chia standard units.",
        },
        {
          id: "e",
          text: "Standard price cannot be computed because the items have different weights",
          isCorrect: false,
          rationale:
            "Cơ chế: weighted method tồn tại chính để xử lý different weights trong cùng nhóm. Bẫy: tưởng khác weight thì không tính được. Khóa: quy đổi về standard units rồi tính.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "Weighted method calculation",
      takeaway:
        "Weighted method: total cost ÷ standard units trước, rồi nhân weight từng item.",
    },
    {
      id: "q08",
      stem: "In the ratio method example, actual cost is 8,640,000 VN and planning cost is 9,000,000 VN. If product A's planned unit price is 2,250 VN, what are the ratio and A's actual unit price?",
      options: [
        {
          id: "a",
          text: "Ratio = 104.17%; A = 2,344 VN",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là planning ÷ actual, đảo chiều ratio. Bẫy: lấy số lớn chia số nhỏ để ra trên 100%. Khóa: ratio = actual ÷ planning.",
        },
        {
          id: "b",
          text: "Ratio = 96%; A = 2,250 VN",
          isCorrect: false,
          rationale:
            "Cơ chế: ratio đúng nhưng chưa nhân vào giá kế hoạch. Bẫy: dừng ở planning price. Khóa: actual price = planned price × ratio.",
        },
        {
          id: "c",
          text: "Ratio = 96%; A = 2,160 VN",
          isCorrect: true,
          rationale:
            "Cơ chế: 8,640,000 ÷ 9,000,000 = 96%; A = 2,250×96% = 2,160 VN. Bẫy: đảo ratio hoặc quên scale price. Khóa: actual thấp hơn plan 4%.",
        },
        {
          id: "d",
          text: "Ratio = 4%; A = 90 VN",
          isCorrect: false,
          rationale:
            "Cơ chế: 4% là phần chênh lệch, không phải ratio để định giá. Bẫy: lấy 100% − 96% rồi nhân. Khóa: price scale theo 96%, không theo 4%.",
        },
        {
          id: "e",
          text: "Ratio cannot be used because product A is not the standard item",
          isCorrect: false,
          rationale:
            "Cơ chế: standard item là logic của weighted method, không phải ratio method. Bẫy: trộn hai phương pháp. Khóa: ratio method dùng actual/planning cho item khác nhóm.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "Ratio method calculation",
      takeaway:
        "Ratio method scale giá kế hoạch bằng actual ÷ planning; trong ví dụ này là 96%.",
    },
    {
      id: "q09",
      stem: "Under the WIP materials consideration example, materials cost is 5,000,000 VN, with 1,600 finished items and 400 WIP units. Total cost is 7,400,000 VN. What is the finished item unit cost?",
      options: [
        {
          id: "a",
          text: "2,500 VN",
          isCorrect: false,
          rationale:
            "Cơ chế: 2,500 là materials per unit for items + WIP, chưa phải finished item unit cost. Bẫy: dừng ở bước material/unit. Khóa: phải trừ WIP rồi chia finished items.",
        },
        {
          id: "b",
          text: "3,700 VN",
          isCorrect: false,
          rationale:
            "Cơ chế: đây là lấy total cost chia toàn bộ 2,000 units, tức cho WIP gánh cả labour/overhead. Bẫy: bỏ rule materials consideration. Khóa: WIP chỉ gánh materials.",
        },
        {
          id: "c",
          text: "4,000 VN",
          isCorrect: true,
          rationale:
            "Cơ chế: material/unit = 5,000,000 ÷ 2,000 = 2,500; WIP = 2,500×400 = 1,000,000; finished item cost = 6,400,000 ÷ 1,600 = 4,000 VN. Bẫy: cho WIP gánh cả labour/overhead. Khóa: materials consideration dồn labour/overhead cho finished items.",
        },
        {
          id: "d",
          text: "1,000,000 VN",
          isCorrect: false,
          rationale:
            "Cơ chế: 1,000,000 VN là total WIP value, không phải unit cost. Bẫy: nhầm total value với unit price. Khóa: câu hỏi hỏi finished item unit cost.",
        },
        {
          id: "e",
          text: "6,400,000 VN",
          isCorrect: false,
          rationale:
            "Cơ chế: 6,400,000 VN là tổng giá trị finished items sau khi trừ WIP. Bẫy: quên chia cho 1,600 items. Khóa: unit cost cần bước cuối cùng.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "WIP materials consideration calculation",
      takeaway:
        "Materials consideration: WIP chỉ gánh materials; finished items gánh phần cost còn lại.",
    },
    {
      id: "q10",
      stem: "In the WIP percentage-of-completion example, 400 WIP units are 50% complete. Which treatment gives the correct finished item unit cost?",
      options: [
        {
          id: "a",
          text: "Apply 50% completion to materials, labour, and overhead; finished item cost = 5,500 VN",
          isCorrect: false,
          rationale:
            "Cơ chế: materials được phân bổ 100% cho WIP trong ví dụ, chỉ labour/overhead theo % completion. Bẫy: áp 50% cho tất cả. Khóa: materials khác conversion cost.",
        },
        {
          id: "b",
          text: "Allocate materials 100% to WIP, convert labour and overhead by 400×50%=200 equivalent units; finished item cost = 7,000 VN",
          isCorrect: true,
          rationale:
            "Cơ chế: materials/unit = 4,000; labour/unit = 2,000; overhead/unit = 1,000; item = 7,000 VN. Bẫy: quên equivalent units cho conversion cost. Khóa: WIP % completion áp cho labour/overhead.",
        },
        {
          id: "c",
          text: "Treat WIP as 400 fully finished units for labour and overhead; finished item cost = 6,250 VN",
          isCorrect: false,
          rationale:
            "Cơ chế: labour/overhead chỉ tính trên 200 equivalent units, không phải 400 full units. Bẫy: coi WIP hoàn thành đủ. Khóa: 50% completion tạo 200 equivalent units.",
        },
        {
          id: "d",
          text: "Ignore WIP and divide all costs by 1,200 finished items; finished item cost = 8,833 VN",
          isCorrect: false,
          rationale:
            "Cơ chế: bỏ WIP làm finished item gánh quá nhiều cost. Bẫy: coi dở dang không có giá trị. Khóa: WIP có materials và một phần conversion cost.",
        },
        {
          id: "e",
          text: "Use the ratio method because percentage of completion is only for unit pricing",
          isCorrect: false,
          rationale:
            "Cơ chế: percentage of completion là một cách WIP costing, không phải ratio method. Bẫy: trộn phần định giá đơn vị với WIP. Khóa: dùng equivalent units cho WIP.",
        },
      ],
      difficulty: "advanced",
      conceptTested: "WIP percentage of completion and equivalent units",
      takeaway:
        "Trong % completion, materials có thể tính đủ cho WIP, còn labour/overhead đi theo equivalent units.",
    },
    {
      id: "q11",
      stem: "What is the key idea of WIP actual stages consideration?",
      options: [
        {
          id: "a",
          text: "Every WIP unit receives the same cost no matter which stage it is in",
          isCorrect: false,
          rationale:
            "Cơ chế: actual stages consideration phân biệt WIP theo stage. Bẫy: dùng bình quân đơn giản. Khóa: stage sau mang nhiều cumulative cost hơn.",
        },
        {
          id: "b",
          text: "WIP in a later stage carries transferred cost from previous stages; finished item value equals total actual cost minus total WIP",
          isCorrect: true,
          rationale:
            "Cơ chế: WIP ở stage sau đã mang theo transfer cost; tổng finished items = total actual cost − total WIP. Bẫy: bỏ transfer cost. Khóa: theo dõi cumulative cost theo stage.",
        },
        {
          id: "c",
          text: "Only raw materials are assigned to every WIP unit regardless of stage",
          isCorrect: false,
          rationale:
            "Cơ chế: đó là materials consideration, không phải actual stages. Bẫy: nhầm ba cách tính WIP. Khóa: stage method dùng chi phí lũy kế theo công đoạn.",
        },
        {
          id: "d",
          text: "WIP is ignored because only finished items can carry manufacturing cost",
          isCorrect: false,
          rationale:
            "Cơ chế: WIP luôn có giá trị trong cả ba cách. Bẫy: coi dở dang là chưa có cost. Khóa: đã dùng nguồn lực thì phải có cost.",
        },
        {
          id: "e",
          text: "The ratio actual ÷ planning is applied to each stage",
          isCorrect: false,
          rationale:
            "Cơ chế: actual ÷ planning là ratio method ở unit pricing, không phải stage WIP. Bẫy: thấy nhiều stage rồi tưởng scale ratio. Khóa: stage WIP dựa trên cumulative/transfer cost.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "WIP actual stages consideration",
      takeaway:
        "Actual stages consideration hỏi WIP đang ở stage nào, vì stage sau đã mang cost của stage trước.",
    },
    {
      id: "q12",
      stem: "Why does WIP costing matter for production cost management?",
      options: [
        {
          id: "a",
          text: "It does not affect finished item cost or profit reporting",
          isCorrect: false,
          rationale:
            "Cơ chế: WIP value thay đổi phần cost còn lại cho finished items. Bẫy: xem WIP chỉ là thông tin phụ. Khóa: WIP ảnh hưởng unit cost và reported profit.",
        },
        {
          id: "b",
          text: "Higher WIP value can reduce the cost assigned to finished items and raise reported profit, so the WIP method must be applied consistently",
          isCorrect: true,
          rationale:
            "Cơ chế: total cost được chia giữa WIP và finished items; WIP tăng thì cost của finished items giảm. Bẫy: tưởng chỉ cần tính gần đúng. Khóa: method nhất quán để tránh méo unit cost/profit.",
        },
        {
          id: "c",
          text: "WIP costing matters only in service industries, not manufacturing",
          isCorrect: false,
          rationale:
            "Cơ chế: slide đang xử lý manufacturing WIP. Bẫy: hiểu WIP như service queue. Khóa: WIP là sản phẩm dở dang trong production.",
        },
        {
          id: "d",
          text: "Lower WIP value always increases reported profit",
          isCorrect: false,
          rationale:
            "Cơ chế: WIP giảm thì cost assigned to finished items tăng, profit giảm nếu revenue giữ nguyên. Bẫy: đảo chiều quan hệ. Khóa: WIP value và finished item cost đi ngược nhau.",
        },
        {
          id: "e",
          text: "The chosen WIP method matters only for cash payment timing",
          isCorrect: false,
          rationale:
            "Cơ chế: WIP method phân bổ manufacturing cost, không chỉ thời điểm trả tiền. Bẫy: trộn cash flow với cost assignment. Khóa: câu hỏi là unit cost và profit reporting.",
        },
      ],
      difficulty: "intermediate",
      conceptTested: "Managerial meaning of WIP costing",
      takeaway:
        "WIP costing là vấn đề quản trị: nó quyết định cost còn lại cho finished items và ảnh hưởng profit báo cáo.",
    },
  ],
  status: "ready",
  source:
    "Manufacturing Systems — slide 'Chapter 8 Costs Management' (lecturer Đặng Võ Hùng, 54 slide) cho control system + production/labour control + weighted method + ratio method + WIP cost computing (3 cách) với worked examples + ebook Groover, Automation, Production Systems & CIM 4e, §3.2 'Manufacturing Costs' (p.59-63) cho phân loại chi phí (fixed/variable, direct labour/material/overhead, phân bổ overhead).",
};

const chapterTitles: Record<number, string> = {
  1: "Introduction",
  2: "Organization in Factory",
  3: "Process Design",
  4: "Jobbing and Batch",
  5: "Mass Production",
  6: "Group Technology",
  7: "Flexible Manufacturing",
  8: "Costs Management",
};

const createPlaceholderChapter = (order: number): Chapter => {
  const num = String(order).padStart(2, "0");
  const name = chapterTitles[order] ?? "";

  return {
    slug: `topic-${num}`,
    order,
    title: name ? `Topic ${num} — ${name}` : `Topic ${num}`,
    bigIdea:
      "Placeholder chương Manufacturing Systems. Nội dung sẽ được soạn từ ebook Groover (Automation, Production Systems & CIM 4e) làm primary + slides Chapter 1-8 hỗ trợ + test-exams.",
    learningObjectives: [],
    sections: [],
    questions: [],
    status: "placeholder",
    source:
      "Manufacturing Systems — ebook Groover (Automation, Production Systems & CIM 4e) primary + slides Chapter 1-8 support + test-exams.",
  };
};

export const manufacturingChapters: Chapter[] = Array.from(
  { length: 8 },
  (_, index) => {
    const order = index + 1;
    if (order === 1) return topic01;
    if (order === 2) return topic02;
    if (order === 3) return topic03;
    if (order === 4) return topic04;
    if (order === 5) return topic05;
    if (order === 6) return topic06;
    if (order === 7) return topic07;
    if (order === 8) return topic08;
    return createPlaceholderChapter(order);
  },
);
