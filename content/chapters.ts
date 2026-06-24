import type { Chapter } from "./types";

// Nội dung chương A lấy từ docs/specs/chapter-a-cost-concepts.md.
// Chương khác để placeholder cho tới khi có sách/slide. Thêm chương mới =
// thêm 1 object vào mảng này, KHÔNG cần sửa UI.

export const chapters: Chapter[] = [
  {
    slug: "cost-concepts",
    order: 1,
    title: "Cost Concepts & Classifications",
    bigIdea:
      'Không có một con số "chi phí" duy nhất. Tùy mục đích — lập báo cáo, dự đoán, hay ra quyết định — mà cùng một khoản chi được phân loại và sử dụng khác nhau ("different costs for different purposes").',
    learningObjectives: [
      "Giải thích vì sao chi phí được phân loại theo nhiều cách khác nhau.",
      "Phân biệt product cost và period cost; xác định 3 thành phần product cost (DM, DL, MOH).",
      "Phân biệt cost behavior: variable, fixed, mixed — và khái niệm relevant range.",
      "Phân biệt chi phí theo khả năng truy nguyên: direct vs indirect.",
      "Nhận diện chi phí cho ra quyết định: differential, opportunity, sunk.",
    ],
    status: "draft",
    source:
      "Khung Garrison/Noreen/Brewer — Managerial Accounting; sẽ chuẩn hoá theo giáo trình khi có tài liệu.",
    sections: [
      {
        id: "s1",
        heading: "Vì sao phải phân loại chi phí?",
        body:
          "Cùng một khoản chi phục vụ ba câu hỏi khác nhau: (a) Định giá tồn kho & tính lợi nhuận → cần product/period; (b) Dự đoán chi phí khi sản lượng đổi → cần cost behavior; (c) Chọn phương án → cần relevant cost.\n\nMột cách phân loại 'đúng' cho mục đích này có thể 'vô dụng' cho mục đích khác. Vì thế phải nắm nhiều lăng kính phân loại cùng lúc.",
      },
      {
        id: "s2",
        heading: "Phân loại theo chức năng (cho báo cáo tài chính)",
        body:
          "Product cost (inventoriable): gắn vào sản phẩm, nằm trong tồn kho cho tới khi bán → khi đó thành COGS. Gồm Direct Materials (DM), Direct Labor (DL) và Manufacturing Overhead (MOH).\n\nPeriod cost: chi phí ngoài sản xuất (selling & administrative) → ghi nhận vào kỳ phát sinh, KHÔNG qua tồn kho.",
        keyTerms: [
          { term: "Direct Materials (DM)", definition: "Nguyên vật liệu truy nguyên trực tiếp vào sản phẩm." },
          { term: "Direct Labor (DL)", definition: "Nhân công trực tiếp làm ra sản phẩm, truy nguyên được." },
          { term: "Manufacturing Overhead (MOH)", definition: "Mọi chi phí sản xuất gián tiếp: indirect materials, indirect labor, khấu hao nhà xưởng, điện xưởng…" },
          { term: "Prime cost", definition: "DM + DL." },
          { term: "Conversion cost", definition: "DL + MOH. Lưu ý: DL nằm ở cả prime lẫn conversion." },
        ],
      },
      {
        id: "s3",
        heading: "Phân loại theo hành vi (cost behavior)",
        body:
          "Variable cost: tổng thay đổi tỉ lệ với mức hoạt động; đơn vị không đổi.\n\nFixed cost: tổng không đổi trong relevant range; đơn vị GIẢM khi sản lượng tăng (điểm hay gây nhầm).\n\nMixed (semi-variable) cost: có cả phần cố định và biến đổi (vd hóa đơn điện có phí thuê bao + theo kWh).",
        keyTerms: [
          { term: "Relevant range", definition: "Khoảng hoạt động mà giả định về hành vi chi phí còn đúng." },
        ],
      },
      {
        id: "s4",
        heading: "Phân loại theo khả năng truy nguyên",
        body:
          "Direct cost: truy nguyên được tới một đối tượng chi phí (cost object) một cách kinh tế.\n\nIndirect cost: không/khó truy nguyên trực tiếp → phải phân bổ. Một chi phí là direct hay indirect TÙY theo cost object đang xét.",
      },
      {
        id: "s5",
        heading: "Phân loại cho ra quyết định",
        body:
          "Differential (incremental) cost: chênh lệch chi phí giữa các phương án — thứ duy nhất đáng quan tâm khi chọn.\n\nOpportunity cost: lợi ích bị bỏ lỡ của phương án không chọn.\n\nSunk cost: đã chi, không đổi → luôn không thích hợp với quyết định hiện tại.",
      },
    ],
    questions: [
      {
        id: "q1",
        difficulty: "basic",
        conceptTested: "Product cost vs period cost",
        stem: "Lương nhân viên bán hàng tại showroom của một nhà máy nên được phân loại là:",
        options: [
          { id: "a", text: "Period cost (chi phí bán hàng).", isCorrect: true, rationale: "Đúng. Hoạt động bán hàng nằm ngoài quá trình sản xuất → ghi nhận ngay vào kỳ, không qua tồn kho." },
          { id: "b", text: "Product cost, vì công ty là nhà sản xuất.", isCorrect: false, rationale: "Bẫy 'cứ là nhà máy thì là product cost'. Product cost chỉ gồm chi phí sản xuất; bán hàng/quản lý là period." },
          { id: "c", text: "Direct labor.", isCorrect: false, rationale: "Nhầm khái niệm. DL là nhân công trực tiếp làm ra sản phẩm, không phải bán hàng." },
          { id: "d", text: "Manufacturing overhead.", isCorrect: false, rationale: "MOH là chi phí sản xuất gián tiếp; lương bán hàng không thuộc khâu sản xuất." },
        ],
        takeaway: "Vị trí trong chuỗi giá trị (sản xuất vs bán/quản lý) quyết định product hay period — không phải 'công ty thuộc ngành gì'.",
      },
      {
        id: "q2",
        difficulty: "intermediate",
        conceptTested: "Hành vi của fixed cost trên mỗi đơn vị",
        stem: "Khi sản lượng tăng trong relevant range, chi phí cố định TRÊN MỖI ĐƠN VỊ sẽ:",
        options: [
          { id: "a", text: "Giảm dần.", isCorrect: true, rationale: "Đúng. Tổng fixed không đổi, chia cho số đơn vị lớn hơn → đơn vị giảm." },
          { id: "b", text: "Không đổi, vì là chi phí cố định.", isCorrect: false, rationale: "Bẫy kinh điển. 'Cố định' đúng với TỔNG, không đúng với ĐƠN VỊ. Trộn hai góc nhìn là lỗi phổ biến nhất." },
          { id: "c", text: "Tăng dần.", isCorrect: false, rationale: "Ngược bản chất; không có khoản nào cố định mà đơn vị tăng theo sản lượng." },
          { id: "d", text: "Thay đổi tỉ lệ thuận với sản lượng.", isCorrect: false, rationale: "Đó là mô tả của variable cost tổng, không phải fixed cost đơn vị." },
        ],
        takeaway: "Luôn hỏi 'tổng hay đơn vị?' trước khi nói chi phí cố định/biến đổi.",
      },
      {
        id: "q3",
        difficulty: "intermediate",
        conceptTested: "Prime cost vs conversion cost",
        stem: "Direct Labor (nhân công trực tiếp) thuộc nhóm nào?",
        options: [
          { id: "a", text: "Cả prime cost lẫn conversion cost.", isCorrect: true, rationale: "Đúng. Prime = DM + DL; Conversion = DL + MOH → DL nằm ở giao của hai nhóm." },
          { id: "b", text: "Chỉ prime cost.", isCorrect: false, rationale: "Bẫy nhớ máy móc. Bỏ sót việc DL cũng là một phần của conversion cost." },
          { id: "c", text: "Chỉ conversion cost.", isCorrect: false, rationale: "Bỏ sót việc DL nằm trong prime cost." },
          { id: "d", text: "Không thuộc nhóm nào, vì là period cost.", isCorrect: false, rationale: "DL là product cost (chi phí sản xuất), không phải period." },
        ],
        takeaway: "DL là 'cầu nối': prime nhấn nguyên liệu + nhân công, conversion nhấn công sức biến nguyên liệu thành sản phẩm — DL có mặt ở cả hai.",
      },
      {
        id: "q4",
        difficulty: "intermediate",
        conceptTested: "Direct vs indirect phụ thuộc cost object",
        stem: "Lương quản đốc phân xưởng. Phát biểu nào đúng?",
        options: [
          { id: "a", text: "Là indirect cost đối với từng sản phẩm, nhưng direct cost đối với phân xưởng đó.", isCorrect: true, rationale: "Đúng. Tính direct/indirect luôn gắn với cost object đang xét." },
          { id: "b", text: "Luôn là indirect cost trong mọi trường hợp.", isCorrect: false, rationale: "Bẫy tuyệt đối hóa. Đối với cost object 'phân xưởng', lương này truy nguyên trực tiếp → direct." },
          { id: "c", text: "Luôn là direct cost.", isCorrect: false, rationale: "Với cost object 'một đơn vị sản phẩm', không thể truy nguyên kinh tế → indirect." },
          { id: "d", text: "Là period cost.", isCorrect: false, rationale: "Quản đốc thuộc khâu sản xuất → là MOH (product cost)." },
        ],
        takeaway: "'Direct hay indirect?' là câu hỏi vô nghĩa nếu chưa nói rõ đối tượng chi phí.",
      },
      {
        id: "q5",
        difficulty: "advanced",
        conceptTested: "Relevant cost trong quyết định",
        stem: "Doanh nghiệp cân nhắc dùng một mặt bằng đang để trống (đã trả tiền thuê cả năm) cho dự án mới. Yếu tố nào THÍCH HỢP với quyết định?",
        options: [
          { id: "a", text: "Opportunity cost của mặt bằng (vd khoản cho thuê lại bị bỏ lỡ) nếu có.", isCorrect: true, rationale: "Đúng. Lợi ích thay thế bị mất là chi phí thực của việc dùng mặt bằng, dù không xuất hiện trên sổ." },
          { id: "b", text: "Tiền thuê cả năm đã trả.", isCorrect: false, rationale: "Bẫy 'tiếc của'. Đó là sunk cost, không đổi dù chọn phương án nào → không thích hợp." },
          { id: "c", text: "Khấu hao đã trích của tài sản cũ trong kho.", isCorrect: false, rationale: "Cũng là chi phí quá khứ, không khác biệt giữa các phương án." },
          { id: "d", text: "Giá gốc lịch sử của mặt bằng.", isCorrect: false, rationale: "Số liệu quá khứ, không phải dòng tiền tương lai khác biệt." },
        ],
        takeaway: "Chi phí thích hợp = tương lai + khác biệt giữa phương án. Sunk cost và khấu hao quá khứ bị loại; opportunity cost dù vô hình lại rất thích hợp.",
      },
    ],
  },
  {
    slug: "placeholder-chuong-2",
    order: 2,
    title: "Chương 2 — (chờ nội dung)",
    bigIdea: "Sẽ cập nhật khi có sách/slide.",
    learningObjectives: [],
    sections: [],
    questions: [],
    status: "placeholder",
  },
  {
    slug: "placeholder-chuong-3",
    order: 3,
    title: "Chương 3 — (chờ nội dung)",
    bigIdea: "Sẽ cập nhật khi có sách/slide.",
    learningObjectives: [],
    sections: [],
    questions: [],
    status: "placeholder",
  },
];

export function getAllChapters(): Chapter[] {
  return [...chapters].sort((a, b) => a.order - b.order);
}

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find((c) => c.slug === slug);
}
