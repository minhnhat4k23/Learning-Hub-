import type { Chapter } from "./types";
import { applyEnglishQuizOverrides } from "./quizEnglish";

// Nội dung Chương 1 bám sát slide gốc của môn (Garrison/Noreen/Brewer,
// Managerial Accounting 17e, Chapter 1) + case study Phở của giảng viên.
// Spec đối chiếu: docs/specs/chapter-a-cost-concepts.md.
// Thêm chương mới = thêm 1 object vào mảng này, KHÔNG cần sửa UI.

const rawChapters: Chapter[] = [
  {
    slug: "cost-concepts",
    order: 1,
    title: "Chapter 1 — Managerial Accounting and Cost Concepts",
    bigIdea:
      'Không có một con số "chi phí" duy nhất. Tùy MỤC ĐÍCH quản trị — gán chi phí cho đối tượng, lập báo cáo tài chính, dự đoán theo sản lượng, hay ra quyết định — mà cùng một khoản chi được phân loại và dùng khác nhau ("different costs for different purposes"). Nắm được mình đang phân loại để làm gì thì mới chọn đúng lăng kính.',
    learningObjectives: [
      "Phân biệt managerial accounting và financial accounting (phục vụ ai, để làm gì).",
      "LO1 — Gán chi phí cho cost object: direct cost, indirect cost, common cost.",
      "LO2 — Ba khoản mục chi phí sản xuất: Direct Materials, Direct Labor, Manufacturing Overhead.",
      "LO3 — Phân loại cho báo cáo tài chính: product cost vs period cost; dòng luân chuyển chi phí qua tồn kho.",
      "LO4 — Phân loại để dự đoán hành vi chi phí: variable, fixed, mixed; relevant range; phương trình Y = a + bX.",
      "LO5 — Phân loại cho ra quyết định: differential, opportunity, sunk cost.",
      "LO6 — Lập báo cáo kết quả theo traditional format và contribution format.",
    ],
    status: "ready",
    source:
      "Garrison/Noreen/Brewer 17e Ch.1 (slide môn học) + case Phở của giảng viên",
    knowledgeMap: {
      "engine": "flow",
      "title": "Knowledge map — Cost Concepts",
      "layout": "tree",
      "collapsible": true,
      "caption": "Bấm từng nhánh để bung khái niệm con; giữ overview gọn trước khi học chi tiết.",
      "nodes": [
        {
          "id": "root",
          "label": "Cost Concepts",
          "group": "concept",
          "detail": "Different costs for different purposes: luôn hỏi đang dùng chi phí để làm gì."
        },
        {
          "id": "purpose",
          "label": "Mục đích phân loại",
          "group": "purpose",
          "parent": "root",
          "detail": "Một khoản chi có thể đổi nhãn khi mục đích phân tích thay đổi.",
          "sectionId": "s0"
        },
        {
          "id": "lo1",
          "label": "LO1 Truy nguyên",
          "group": "lo",
          "parent": "root",
          "detail": "Direct hay indirect phụ thuộc cost object đang xét.",
          "sectionId": "s1"
        },
        {
          "id": "lo2",
          "label": "LO2 Chi phí sản xuất",
          "group": "lo",
          "parent": "root",
          "detail": "DM, DL và MOH là ba nhóm product cost trong sản xuất.",
          "sectionId": "s2"
        },
        {
          "id": "lo3",
          "label": "LO3 Báo cáo tài chính",
          "group": "lo",
          "parent": "root",
          "detail": "Product cost đi qua tồn kho; period cost ghi thẳng vào kỳ.",
          "sectionId": "s5"
        },
        {
          "id": "lo4",
          "label": "LO4 Hành vi chi phí",
          "group": "lo",
          "parent": "root",
          "detail": "Variable, fixed, mixed chỉ có nghĩa trong một activity base và relevant range.",
          "sectionId": "s7"
        },
        {
          "id": "lo5",
          "label": "LO5 Ra quyết định",
          "group": "lo",
          "parent": "root",
          "detail": "Relevant cost phải là tương lai và khác biệt giữa phương án.",
          "sectionId": "s11"
        },
        {
          "id": "lo6",
          "label": "LO6 Income statement",
          "group": "lo",
          "parent": "root",
          "detail": "Traditional gom theo chức năng; contribution gom theo hành vi.",
          "sectionId": "s12"
        },
        {
          "id": "purpose-object",
          "label": "Gán cost object",
          "group": "term",
          "parent": "purpose",
          "detail": "Đo chi phí gắn cho một cost object cụ thể (sản phẩm, đơn hàng, bộ phận, khách hàng).",
          "sectionId": "s0"
        },
        {
          "id": "purpose-product",
          "label": "Hạch toán sản xuất",
          "group": "term",
          "parent": "purpose",
          "detail": "Tập hợp DM + DL + MOH để tính giá thành sản phẩm sản xuất.",
          "sectionId": "s2"
        },
        {
          "id": "purpose-report",
          "label": "Lập BCTC",
          "group": "term",
          "parent": "purpose",
          "detail": "Phân product/period để định giá tồn kho và tính lợi nhuận trên BCTC.",
          "sectionId": "s5"
        },
        {
          "id": "purpose-behavior",
          "label": "Dự đoán hành vi",
          "group": "term",
          "parent": "purpose",
          "detail": "Dự đoán chi phí thay đổi thế nào khi mức hoạt động tăng/giảm.",
          "sectionId": "s7"
        },
        {
          "id": "purpose-decision",
          "label": "Ra quyết định",
          "group": "term",
          "parent": "purpose",
          "detail": "Lọc ra chi phí thích hợp (relevant) để chọn giữa các phương án.",
          "sectionId": "s11"
        },
        {
          "id": "lo1-direct",
          "label": "Direct",
          "group": "concept",
          "parent": "lo1",
          "detail": "Chi phí truy nguyên dễ dàng, kinh tế tới cost object đang xét.",
          "sectionId": "s1"
        },
        {
          "id": "lo1-indirect",
          "label": "Indirect",
          "group": "concept",
          "parent": "lo1",
          "detail": "Chi phí không truy nguyên trực tiếp được → phải phân bổ.",
          "sectionId": "s1"
        },
        {
          "id": "lo1-common",
          "label": "Common",
          "group": "concept",
          "parent": "lo1",
          "detail": "Indirect cost phục vụ nhiều cost object cùng lúc, không tách riêng cho cái nào.",
          "sectionId": "s1"
        },
        {
          "id": "lo2-dm",
          "label": "Direct Materials",
          "group": "concept",
          "parent": "lo2",
          "detail": "Nguyên vật liệu trở thành một phần sản phẩm và truy nguyên trực tiếp (vd thịt, bánh phở).",
          "sectionId": "s2"
        },
        {
          "id": "lo2-dl",
          "label": "Direct Labor",
          "group": "concept",
          "parent": "lo2",
          "detail": "Nhân công trực tiếp làm ra sản phẩm, truy nguyên tới đơn vị (vd đầu bếp).",
          "sectionId": "s2"
        },
        {
          "id": "lo2-moh",
          "label": "Manufacturing Overhead",
          "group": "concept",
          "parent": "lo2",
          "detail": "Mọi chi phí sản xuất ngoài DM và DL (indirect materials/labor, khấu hao/điện nhà máy).",
          "sectionId": "s2"
        },
        {
          "id": "lo3-product",
          "label": "Product cost",
          "group": "concept",
          "parent": "lo3",
          "detail": "DM + DL + MOH; nằm trong tồn kho tới khi bán mới thành COGS.",
          "sectionId": "s5"
        },
        {
          "id": "lo3-period",
          "label": "Period cost",
          "group": "concept",
          "parent": "lo3",
          "detail": "Selling + administrative; ghi thẳng vào chi phí trong kỳ, không qua tồn kho.",
          "sectionId": "s5"
        },
        {
          "id": "lo3-flow",
          "label": "Cost flow tồn kho",
          "group": "concept",
          "parent": "lo3",
          "detail": "Raw Materials → WIP → Finished Goods → COGS: product cost chỉ thành chi phí khi bán.",
          "sectionId": "s6"
        },
        {
          "id": "lo4-variable",
          "label": "Variable",
          "group": "concept",
          "parent": "lo4",
          "detail": "Tổng tăng tỉ lệ theo activity; chi phí trên mỗi đơn vị không đổi.",
          "sectionId": "s7"
        },
        {
          "id": "lo4-fixed",
          "label": "Fixed",
          "group": "concept",
          "parent": "lo4",
          "detail": "Tổng không đổi trong relevant range; chi phí trên mỗi đơn vị giảm khi sản lượng tăng.",
          "sectionId": "s8"
        },
        {
          "id": "lo4-mixed",
          "label": "Mixed Y=a+bX",
          "group": "concept",
          "parent": "lo4",
          "detail": "Có cả định phí lẫn biến phí: Y = a + bX.",
          "sectionId": "s10"
        },
        {
          "id": "lo4-range",
          "label": "Relevant range",
          "group": "concept",
          "parent": "lo4",
          "detail": "Khoảng hoạt động mà giả định tuyến tính về hành vi chi phí còn đúng.",
          "sectionId": "s9"
        },
        {
          "id": "lo5-diff",
          "label": "Differential",
          "group": "concept",
          "parent": "lo5",
          "detail": "Chênh lệch chi phí/doanh thu giữa hai phương án — luôn thích hợp.",
          "sectionId": "s11"
        },
        {
          "id": "lo5-opp",
          "label": "Opportunity",
          "group": "concept",
          "parent": "lo5",
          "detail": "Lợi ích bị bỏ lỡ của phương án không chọn; ngoài sổ nhưng vẫn phải cân nhắc.",
          "sectionId": "s11"
        },
        {
          "id": "lo5-sunk",
          "label": "Sunk",
          "group": "concept",
          "parent": "lo5",
          "detail": "Chi phí đã phát sinh, không đổi được → luôn không thích hợp.",
          "sectionId": "s11"
        },
        {
          "id": "lo6-traditional",
          "label": "Traditional",
          "group": "concept",
          "parent": "lo6",
          "detail": "Sales − COGS = Gross margin; gom chi phí theo CHỨC NĂNG (cho báo cáo ngoài).",
          "sectionId": "s12"
        },
        {
          "id": "lo6-contribution",
          "label": "Contribution",
          "group": "concept",
          "parent": "lo6",
          "detail": "Sales − Variable = Contribution margin; gom chi phí theo HÀNH VI (cho quản trị).",
          "sectionId": "s12"
        }
      ],
      "edges": [
        {
          "from": "root",
          "to": "purpose"
        },
        {
          "from": "root",
          "to": "lo1"
        },
        {
          "from": "root",
          "to": "lo2"
        },
        {
          "from": "root",
          "to": "lo3"
        },
        {
          "from": "root",
          "to": "lo4"
        },
        {
          "from": "root",
          "to": "lo5"
        },
        {
          "from": "root",
          "to": "lo6"
        },
        {
          "from": "purpose",
          "to": "purpose-object"
        },
        {
          "from": "purpose",
          "to": "purpose-product"
        },
        {
          "from": "purpose",
          "to": "purpose-report"
        },
        {
          "from": "purpose",
          "to": "purpose-behavior"
        },
        {
          "from": "purpose",
          "to": "purpose-decision"
        },
        {
          "from": "lo1",
          "to": "lo1-direct"
        },
        {
          "from": "lo1",
          "to": "lo1-indirect"
        },
        {
          "from": "lo1",
          "to": "lo1-common"
        },
        {
          "from": "lo2",
          "to": "lo2-dm"
        },
        {
          "from": "lo2",
          "to": "lo2-dl"
        },
        {
          "from": "lo2",
          "to": "lo2-moh"
        },
        {
          "from": "lo3",
          "to": "lo3-product"
        },
        {
          "from": "lo3",
          "to": "lo3-period"
        },
        {
          "from": "lo3",
          "to": "lo3-flow"
        },
        {
          "from": "lo4",
          "to": "lo4-variable"
        },
        {
          "from": "lo4",
          "to": "lo4-fixed"
        },
        {
          "from": "lo4",
          "to": "lo4-mixed"
        },
        {
          "from": "lo4",
          "to": "lo4-range"
        },
        {
          "from": "lo5",
          "to": "lo5-diff"
        },
        {
          "from": "lo5",
          "to": "lo5-opp"
        },
        {
          "from": "lo5",
          "to": "lo5-sunk"
        },
        {
          "from": "lo6",
          "to": "lo6-traditional"
        },
        {
          "from": "lo6",
          "to": "lo6-contribution"
        }
      ]
    },
    sections: [
            {
        id: "s0",
        heading: "Managerial vs Financial Accounting",
        blocks: [
          {
            "type": "prose",
            "body": "Managerial accounting phục vụ nhà quản trị bên trong để lập kế hoạch, kiểm soát và ra quyết định. Financial accounting phục vụ bên ngoài, tuân thủ chuẩn mực và nhìn nhiều về quá khứ."
          },
          {
            "type": "comparison",
            "table": {
              "title": "Managerial vs Financial accounting",
              "columns": [
                "Tiêu chí",
                "Financial",
                "Managerial"
              ],
              "rows": [
                {
                  "label": "Đối tượng",
                  "cells": [
                    "Bên ngoài (cổ đông, chủ nợ, cơ quan)",
                    "Nhà quản trị bên trong"
                  ]
                },
                {
                  "label": "Mục đích",
                  "cells": [
                    "Báo cáo tuân thủ",
                    "Plan / Control / Decide"
                  ]
                },
                {
                  "label": "Chuẩn mực",
                  "cells": [
                    "Bắt buộc (GAAP/IFRS)",
                    "Linh hoạt"
                  ]
                },
                {
                  "label": "Hướng thời gian",
                  "cells": [
                    "Quá khứ",
                    "Tương lai"
                  ]
                }
              ]
            }
          },
          {
            "type": "callout",
            "callout": {
              "kind": "brainstorm",
              "title": "Lăng kính trước công thức",
              "body": "Trước khi phân loại, hỏi: mình cần con số chi phí để làm gì?"
            }
          }
        ],
        keyTerms: [
          { term: "Cost object", definition: "Bất kỳ thứ gì ta muốn đo lường chi phí cho nó: một sản phẩm, một đơn hàng, một phân xưởng, một khách hàng…" },
        ],
      },
            {
        id: "s-pho",
        heading: "Case study xuyên suốt: quán Phở",
        blocks: [
          {
            "type": "prose",
            "body": "Case Phở là ví dụ xuyên suốt để cùng một danh sách chi phí được soi qua nhiều lăng kính: sản xuất, truy nguyên, hành vi, báo cáo và quyết định."
          },
          {
            "type": "comparison",
            "table": {
              "title": "Dữ liệu case Phở từ slide",
              "columns": [
                "Khoản mục",
                "Số tiền"
              ],
              "rows": [
                {
                  "label": "Doanh thu",
                  "cells": [
                    "3.000 tô × 50.000đ = 150tr/tháng"
                  ]
                },
                {
                  "label": "Thịt",
                  "cells": [
                    "30tr"
                  ]
                },
                {
                  "label": "Xương",
                  "cells": [
                    "3tr"
                  ]
                },
                {
                  "label": "Bánh phở",
                  "cells": [
                    "9tr"
                  ]
                },
                {
                  "label": "Rau",
                  "cells": [
                    "1,5tr"
                  ]
                },
                {
                  "label": "Thực phẩm khác",
                  "cells": [
                    "0,6tr"
                  ]
                },
                {
                  "label": "Điện",
                  "cells": [
                    "5tr"
                  ]
                },
                {
                  "label": "Khấu hao",
                  "cells": [
                    "3tr"
                  ]
                },
                {
                  "label": "Lương đầu bếp",
                  "cells": [
                    "9tr"
                  ]
                },
                {
                  "label": "Lương phục vụ",
                  "cells": [
                    "6tr"
                  ]
                },
                {
                  "label": "Marketing",
                  "cells": [
                    "3tr"
                  ]
                }
              ]
            }
          },
          {
            "type": "callout",
            "callout": {
              "kind": "brainstorm",
              "title": "Hai câu hỏi gài",
              "body": "Lợi nhuận 3.000 vs 4.000 tô khác nhau thế nào? Yếu tố nào làm chi phí mỗi tô đổi?"
            }
          }
        ],
        examples: [
          {
            title: "Lợi nhuận trước thuế (EBT) vs kinh tế",
            body: "Doanh thu 150tr − chi phí trên sổ (30+3+9+1,5+0,6+5+3+9+6+3 = 70,1tr) = lợi nhuận trước thuế (EBT) ≈ 79,9tr. Sau thuế 20%: profit = (150 − 70,1) × 0,8 = 63,92tr. Trừ opportunity cost 15tr + 10tr = 25tr để minh họa economic profit trên EBT.",
            meaning: "Lợi nhuận kinh tế minh họa trên EBT ≈ 79,9 − 25 = 54,9tr — đây là cái lời sau khi tính cả cơ hội bị bỏ lỡ.",
            implication: "Bỏ quên 25tr opportunity cost khiến ta tưởng lời ~79,9tr trước thuế là đủ để quyết định. Quán vẫn đáng làm vì 54,9tr > 0; nếu con số này âm thì nên cho thuê nhà + đi làm thay vì mở quán."
          },
        ],
      },
            {
        id: "s1",
        heading: "LO1 — Gán chi phí cho cost object: direct, indirect, common",
        blocks: [
          {
            "type": "prose",
            "body": "Direct, indirect và common không phải nhãn cố định của khoản chi; chúng phụ thuộc vào cost object đang xét."
          },
          {
            "type": "diagram",
            "diagram": {
              "engine": "flow",
              "title": "Quyết định direct / indirect / common",
              "layout": "tree",
              "caption": "Hover để thấy nhánh liên quan; click node để xem ý nghĩa.",
              "nodes": [
                {
                  "id": "cost",
                  "label": "Một khoản chi",
                  "group": "concept",
                  "detail": "Bắt đầu từ khoản chi, nhưng chưa kết luận nếu chưa biết cost object.",
                  "sectionId": "s1"
                },
                {
                  "id": "trace",
                  "label": "Truy nguyên kinh tế tới cost object?",
                  "group": "purpose",
                  "parent": "cost",
                  "detail": "Direct chỉ đúng khi truy nguyên dễ dàng và đáng làm về mặt kinh tế.",
                  "sectionId": "s1"
                },
                {
                  "id": "direct",
                  "label": "Direct cost",
                  "group": "term",
                  "parent": "trace",
                  "detail": "Truy nguyên được dễ dàng tới cost object đang xét.",
                  "sectionId": "s1"
                },
                {
                  "id": "indirect",
                  "label": "Indirect cost",
                  "group": "term",
                  "parent": "trace",
                  "detail": "Không truy nguyên kinh tế tới object; cần phân bổ.",
                  "sectionId": "s1"
                },
                {
                  "id": "common",
                  "label": "Common cost",
                  "group": "term",
                  "parent": "indirect",
                  "detail": "Indirect cost phục vụ nhiều cost object cùng lúc.",
                  "sectionId": "s1"
                }
              ],
              "edges": [
                {
                  "from": "cost",
                  "to": "trace"
                },
                {
                  "from": "trace",
                  "to": "direct",
                  "label": "Có"
                },
                {
                  "from": "trace",
                  "to": "indirect",
                  "label": "Không"
                },
                {
                  "from": "indirect",
                  "to": "common",
                  "label": "Dùng chung"
                }
              ]
            }
          },
          {
            "type": "callout",
            "callout": {
              "kind": "trap",
              "title": "Bẫy tuyệt đối hóa",
              "body": "Đổi cost object có thể đổi nhãn direct/indirect của cùng một khoản chi."
            }
          }
        ],
        keyTerms: [
          { term: "Direct cost", definition: "Truy nguyên được dễ dàng, kinh tế tới cost object đang xét." },
          { term: "Indirect cost", definition: "Không truy nguyên trực tiếp được → phải phân bổ." },
          { term: "Common cost", definition: "Indirect cost phục vụ nhiều cost object cùng lúc, không tách riêng cho cái nào." },
        ],
      },
            {
        id: "s2",
        heading: "LO2 — Ba khoản mục chi phí sản xuất (DM, DL, MOH)",
        blocks: [
          {
            "type": "prose",
            "body": "Chi phí sản xuất gồm ba nhóm: vật liệu trực tiếp, lao động trực tiếp và phần gián tiếp còn lại của sản xuất."
          },
          {
            "type": "diagram",
            "diagram": {
              "engine": "flow",
              "title": "DM / DL / MOH",
              "layout": "tree",
              "caption": "MOH là phần dễ nhầm vì chứa nhiều chi phí sản xuất gián tiếp.",
              "nodes": [
                {
                  "id": "manufacturing",
                  "label": "Chi phí sản xuất",
                  "group": "concept",
                  "detail": "Nhóm chi phí để làm ra sản phẩm.",
                  "sectionId": "s2"
                },
                {
                  "id": "dm",
                  "label": "Direct Materials",
                  "group": "term",
                  "parent": "manufacturing",
                  "detail": "Nguyên vật liệu trở thành phần của sản phẩm và truy nguyên được.",
                  "sectionId": "s2"
                },
                {
                  "id": "dl",
                  "label": "Direct Labor",
                  "group": "term",
                  "parent": "manufacturing",
                  "detail": "Nhân công trực tiếp làm ra sản phẩm, truy nguyên được tới đơn vị/job.",
                  "sectionId": "s2"
                },
                {
                  "id": "moh",
                  "label": "Manufacturing Overhead",
                  "group": "term",
                  "parent": "manufacturing",
                  "detail": "Mọi chi phí sản xuất ngoài DM và DL.",
                  "sectionId": "s2"
                },
                {
                  "id": "im",
                  "label": "Indirect materials",
                  "group": "concept",
                  "parent": "moh",
                  "detail": "Vật liệu phụ không truy nguyên kinh tế tới sản phẩm (vd gia vị, dầu máy) → MOH.",
                  "sectionId": "s2"
                },
                {
                  "id": "il",
                  "label": "Indirect labor",
                  "group": "concept",
                  "parent": "moh",
                  "detail": "Nhân công không trực tiếp làm ra sản phẩm (vd quản đốc, bảo trì) → MOH.",
                  "sectionId": "s2"
                },
                {
                  "id": "factory",
                  "label": "Khấu hao / điện / thuế nhà máy",
                  "group": "concept",
                  "parent": "moh",
                  "detail": "Chi phí vận hành nhà máy (khấu hao, điện, thuế tài sản, bảo hiểm) → MOH.",
                  "sectionId": "s2"
                }
              ],
              "edges": [
                {
                  "from": "manufacturing",
                  "to": "dm"
                },
                {
                  "from": "manufacturing",
                  "to": "dl"
                },
                {
                  "from": "manufacturing",
                  "to": "moh"
                },
                {
                  "from": "moh",
                  "to": "im"
                },
                {
                  "from": "moh",
                  "to": "il"
                },
                {
                  "from": "moh",
                  "to": "factory"
                }
              ]
            }
          },
          {
            "type": "callout",
            "callout": {
              "kind": "realworld",
              "title": "Ánh xạ Phở",
              "body": "DM = thịt/bánh; DL = đầu bếp; MOH = điện bếp, khấu hao thiết bị bếp."
            }
          }
        ],
        keyTerms: [
          { term: "Indirect materials", definition: "Vật liệu phụ không truy nguyên kinh tế tới sản phẩm (vd gia vị, dầu máy) → thuộc MOH." },
          { term: "Indirect labor", definition: "Nhân công không trực tiếp làm ra sản phẩm (vd quản đốc, bảo trì) → thuộc MOH." },
        ],
        examples: [
          {
            title: "Ánh xạ Phở",
            body: "DM: thịt, xương, bánh phở, rau. DL: lương đầu bếp. MOH: điện bếp, khấu hao thiết bị bếp (indirect, gắn với 'sản xuất' tô phở).",
            meaning: "Cùng 'chi phí quán phở' nhưng tách thành 3 nhóm product cost theo vai trò trong việc làm ra tô phở.",
            implication: "Phân nhóm đúng là nền để tính giá thành mỗi tô và phân bổ overhead; gộp nhầm MOH vào DM/DL → giá thành sai."
          },
        ],
      },
            {
        id: "s3",
        heading: "Prime cost & Conversion cost",
        blocks: [
          {
            "type": "prose",
            "body": "Prime cost nhóm chi phí gắn trực tiếp với sản phẩm; conversion cost nhóm chi phí biến nguyên liệu thành thành phẩm."
          },
          {
            "type": "diagram",
            "diagram": {
              "engine": "mermaid",
              "title": "Prime & Conversion",
              "code": "flowchart LR\n  DM[\"DM\"] --> Prime[\"Prime cost = DM + DL\"]\n  DL[\"DL\"] --> Prime\n  DL --> Conversion[\"Conversion cost = DL + MOH\"]\n  MOH[\"MOH\"] --> Conversion\n  DL -. \"nằm ở cả hai\" .- Both[\"Giao điểm\"]",
              "caption": "Direct labor xuất hiện trong cả hai cách nhóm."
            }
          },
          {
            "type": "callout",
            "callout": {
              "kind": "trap",
              "title": "Bẫy kinh điển",
              "body": "DL nằm ở cả Prime cost lẫn Conversion cost."
            }
          }
        ],
        keyTerms: [
          { term: "Prime cost", definition: "DM + DL." },
          { term: "Conversion cost", definition: "DL + MOH." },
        ],
      },
            {
        id: "s4",
        heading: "Nonmanufacturing costs: Selling & Administrative",
        blocks: [
          {
            "type": "prose",
            "body": "Selling và administrative là nonmanufacturing costs: không nằm trong DM, DL, MOH."
          },
          {
            "type": "comparison",
            "table": {
              "title": "Selling vs Administrative",
              "columns": [
                "",
                "Selling",
                "Administrative"
              ],
              "rows": [
                {
                  "label": "Bản chất",
                  "cells": [
                    "Có đơn + giao hàng",
                    "Điều hành, hành chính"
                  ]
                },
                {
                  "label": "Ví dụ",
                  "cells": [
                    "Quảng cáo, hoa hồng, vận chuyển",
                    "Lương BGĐ, kế toán, văn phòng"
                  ]
                }
              ]
            }
          }
        ],
      },
            {
        id: "s5",
        heading: "LO3 — Product cost vs Period cost",
        blocks: [
          {
            "type": "prose",
            "body": "Product cost đi vào tồn kho trước; period cost không qua tồn kho mà ghi nhận ngay trong kỳ."
          },
          {
            "type": "comparison",
            "table": {
              "title": "Product cost vs Period cost",
              "columns": [
                "",
                "Product cost",
                "Period cost"
              ],
              "rows": [
                {
                  "label": "Gồm",
                  "cells": [
                    "DM + DL + MOH",
                    "Selling + Administrative"
                  ]
                },
                {
                  "label": "Khi nào thành chi phí",
                  "cells": [
                    "Khi BÁN (→ COGS)",
                    "Ngay trong kỳ"
                  ]
                },
                {
                  "label": "Trên báo cáo",
                  "cells": [
                    "Inventory → COGS",
                    "Expense ngay"
                  ]
                }
              ]
            }
          },
          {
            "type": "callout",
            "callout": {
              "kind": "key",
              "title": "Chốt nhớ",
              "body": "Product cost nằm chờ trong tồn kho tới khi bán; period cost tính thẳng vào kỳ."
            }
          }
        ],
        keyTerms: [
          { term: "Product cost", definition: "DM + DL + MOH; bám vào sản phẩm, qua tồn kho rồi mới thành COGS khi bán." },
          { term: "Period cost", definition: "Selling + administrative; tính thẳng vào kỳ, không qua tồn kho." },
        ],
      },
            {
        id: "s6",
        heading: "Dòng luân chuyển chi phí sản xuất qua tồn kho",
        blocks: [
          {
            "type": "prose",
            "body": "Trong doanh nghiệp sản xuất, product cost chảy qua các tài khoản tồn kho trước khi thành COGS."
          },
          {
            "type": "diagram",
            "diagram": {
              "engine": "flow",
              "title": "Cost flow qua tồn kho",
              "layout": "horizontal",
              "caption": "Cạnh chính được animate để thấy dòng chi phí từ nguyên liệu tới COGS.",
              "nodes": [
                {
                  "id": "RM",
                  "label": "Raw Materials",
                  "group": "concept",
                  "detail": "Nguyên vật liệu trước khi đưa vào sản xuất.",
                  "sectionId": "s6"
                },
                {
                  "id": "WIP",
                  "label": "Work in Process",
                  "group": "concept",
                  "detail": "Sản phẩm đang làm dở, nhận RM, DL và MOH.",
                  "sectionId": "s6"
                },
                {
                  "id": "FG",
                  "label": "Finished Goods",
                  "group": "concept",
                  "detail": "Thành phẩm hoàn tất nhưng chưa bán.",
                  "sectionId": "s6"
                },
                {
                  "id": "COGS",
                  "label": "Cost of Goods Sold",
                  "group": "concept",
                  "detail": "Khi bán, cost chuyển từ tồn kho sang chi phí trên báo cáo kết quả kinh doanh.",
                  "sectionId": "s6"
                },
                {
                  "id": "DL",
                  "label": "Direct Labor",
                  "group": "term",
                  "detail": "Lao động trực tiếp được cộng vào WIP.",
                  "sectionId": "s6"
                },
                {
                  "id": "MOH",
                  "label": "Manufacturing Overhead",
                  "group": "term",
                  "detail": "Overhead sản xuất được cộng vào WIP.",
                  "sectionId": "s6"
                }
              ],
              "edges": [
                {
                  "from": "RM",
                  "to": "WIP",
                  "animated": true
                },
                {
                  "from": "DL",
                  "to": "WIP"
                },
                {
                  "from": "MOH",
                  "to": "WIP"
                },
                {
                  "from": "WIP",
                  "to": "FG",
                  "animated": true
                },
                {
                  "from": "FG",
                  "to": "COGS",
                  "label": "khi bán",
                  "animated": true
                }
              ]
            }
          },
          {
            "type": "callout",
            "callout": {
              "kind": "insight",
              "title": "Điểm chuyển báo cáo",
              "body": "Product cost chỉ thành chi phí trên báo cáo kết quả kinh doanh khi sản phẩm được bán."
            }
          }
        ],
        keyTerms: [
          { term: "Work in Process (WIP)", definition: "Sản phẩm mới hoàn thành một phần, còn cần gia công thêm." },
          { term: "Finished Goods", definition: "Thành phẩm đã hoàn tất nhưng chưa bán." },
        ],
      },
            {
        id: "s7",
        heading: "LO4 — Variable cost & activity base (cost driver)",
        blocks: [
          {
            "type": "prose",
            "body": "Variable cost tăng theo activity base ở tổng số; nhưng tính trên mỗi đơn vị thì giữ nguyên trong relevant range."
          },
          {
            "type": "diagram",
            "diagram": {
              "engine": "mermaid",
              "title": "Variable cost theo activity base",
              "code": "flowchart LR\n  A[\"Activity base tăng\"] --> B[\"Tổng variable cost tăng tuyến tính\"]\n  A --> C[\"Variable cost per unit giữ nguyên\"]",
              "caption": "Variable cost luôn cần nói rõ biến đổi theo activity base nào."
            }
          },
          {
            "type": "callout",
            "callout": {
              "kind": "realworld",
              "title": "Baskin & Robbins",
              "body": "Kem và giấy ăn biến đổi theo số cây kem bán ra."
            }
          }
        ],
        keyTerms: [
          { term: "Activity base / Cost driver", definition: "Thước đo làm phát sinh variable cost (số đơn vị sản xuất, giờ máy, giờ lao động, số dặm chạy…)." },
        ],
      },
            {
        id: "s8",
        heading: "Fixed cost: committed vs discretionary, và hành vi trên mỗi đơn vị",
        blocks: [
          {
            "type": "prose",
            "body": "Fixed cost giữ nguyên ở tổng số trong relevant range, nhưng fixed cost trên mỗi đơn vị giảm khi sản lượng tăng."
          },
          {
            "type": "comparison",
            "table": {
              "title": "Committed vs Discretionary fixed costs",
              "columns": [
                "",
                "Committed",
                "Discretionary"
              ],
              "rows": [
                {
                  "label": "Thời hạn",
                  "cells": [
                    "Dài hạn, khó cắt",
                    "Ngắn hạn, linh hoạt"
                  ]
                },
                {
                  "label": "Ví dụ",
                  "cells": [
                    "Khấu hao, thuê dài hạn",
                    "Quảng cáo, đào tạo, R&D"
                  ]
                }
              ]
            }
          },
          {
            "type": "callout",
            "callout": {
              "kind": "insight",
              "title": "Tổng khác đơn vị",
              "body": "Tổng fixed phẳng; fixed/đơn vị giảm khi sản lượng tăng."
            }
          }
        ],
        keyTerms: [
          { term: "Committed fixed cost", definition: "Dài hạn, không thể giảm đáng kể trong ngắn hạn." },
          { term: "Discretionary fixed cost", definition: "Có thể thay đổi ngắn hạn theo quyết định quản trị." },
        ],
      },
            {
        id: "s9",
        heading: "Relevant range & linearity assumption",
        blocks: [
          {
            "type": "prose",
            "body": "Kế toán quản trị thường xấp xỉ quan hệ chi phí bằng đường thẳng, nhưng giả định này chỉ hợp lý trong relevant range."
          },
          {
            "type": "diagram",
            "diagram": {
              "engine": "mermaid",
              "title": "Relevant range & linearity",
              "code": "flowchart LR\n  A[\"Chi phí thực tế thường cong\"] --> B[\"Xấp xỉ bằng đường thẳng\"]\n  B --> C[\"Chỉ dùng trong relevant range\"]\n  C --> D[\"Vượt range: fixed cost có thể nhảy bậc\"]",
              "caption": "Mô hình tuyến tính là công cụ xấp xỉ, không phải lời hứa đúng ở mọi mức hoạt động."
            }
          },
          {
            "type": "callout",
            "callout": {
              "kind": "insight",
              "title": "Step-fixed cost",
              "body": "Fixed cost cũng nhảy BẬC khi vượt relevant range: ví dụ thuê văn phòng $30,000/năm cho mỗi 1,000 square feet — muốn thêm 1,000 sq ft thì tổng fixed cost bật lên thêm $30,000. Relevant range chính là khoảng mà đường chi phí còn nằm phẳng, chưa nhảy bậc."
            }
          }
        ],
        keyTerms: [
          { term: "Relevant range", definition: "Khoảng hoạt động mà giả định tuyến tính về hành vi chi phí còn đúng." },
        ],
      },
            {
        id: "s10",
        heading: "Mixed cost & phương trình Y = a + bX",
        blocks: [
          {
            "type": "prose",
            "body": "Mixed cost có cả phần cố định và phần biến đổi; tách hai phần bằng mô hình Y = a + bX."
          },
          {
            "type": "formula",
            "formula": {
              "expression": "Y = a + bX",
              "legend": [
                {
                  "symbol": "Y",
                  "meaning": "Tổng chi phí hỗn hợp"
                },
                {
                  "symbol": "a",
                  "meaning": "Tổng định phí"
                },
                {
                  "symbol": "b",
                  "meaning": "Biến phí trên mỗi đơn vị hoạt động"
                },
                {
                  "symbol": "X",
                  "meaning": "Mức hoạt động"
                }
              ],
              "note": "Ví dụ slide: Y = 40 + 0,03 × 2.000 = 100."
            }
          },
          {
            "type": "callout",
            "callout": {
              "kind": "trap",
              "title": "Đừng gộp sai",
              "body": "Đừng gộp định phí vào đơn giá biến đổi; phải tách a và b."
            }
          }
        ],
        examples: [
          {
            title: "Tính mixed cost",
            body: "Y = a + bX = 40 + (0,03 × 2.000) = 100. Nếu X tăng lên 3.000 kWh: Y = 40 + 90 = 130 (phần cố định 40 giữ nguyên, chỉ phần biến đổi tăng).",
            meaning: "Hóa đơn 100 = 40 định phí (trả dù dùng ít) + 60 biến phí theo kWh — chi phí vừa cố định vừa biến đổi.",
        implication: "Khi sản lượng đổi, chỉ phần bX đổi còn a giữ nguyên → phải tách a/b mới dự báo và lập ngân sách đúng; coi cả 100 là biến phí sẽ ước sai ở mức hoạt động khác."
          },
        ],
      },
            {
        id: "s11",
        heading: "LO5 — Chi phí cho ra quyết định: differential, opportunity, sunk",
        blocks: [
          {
            "type": "prose",
            "body": "Ra quyết định không hỏi chi phí thuộc product hay period; nó hỏi chi phí đó có tương lai và khác biệt giữa các phương án không."
          },
          {
            "type": "diagram",
            "diagram": {
              "engine": "flow",
              "title": "Relevant cost decision tree",
              "layout": "tree",
              "caption": "Click từng node để xem nguyên tắc ra quyết định.",
              "nodes": [
                {
                  "id": "cost",
                  "label": "Một khoản chi",
                  "group": "concept",
                  "detail": "Không kết luận relevant nếu chưa hỏi thời gian và sự khác biệt.",
                  "sectionId": "s11"
                },
                {
                  "id": "future",
                  "label": "Tương lai?",
                  "group": "purpose",
                  "parent": "cost",
                  "detail": "Chi phí quá khứ không đổi được là sunk cost.",
                  "sectionId": "s11"
                },
                {
                  "id": "sunk",
                  "label": "Sunk: bỏ qua",
                  "group": "term",
                  "parent": "future",
                  "detail": "Đã phát sinh và không đổi theo phương án.",
                  "sectionId": "s11"
                },
                {
                  "id": "different",
                  "label": "Khác biệt giữa phương án?",
                  "group": "purpose",
                  "parent": "future",
                  "detail": "Nếu xuất hiện như nhau ở mọi phương án thì không giúp chọn.",
                  "sectionId": "s11"
                },
                {
                  "id": "relevant",
                  "label": "Relevant / differential",
                  "group": "term",
                  "parent": "different",
                  "detail": "Tương lai + khác biệt: đưa vào quyết định.",
                  "sectionId": "s11"
                },
                {
                  "id": "irrelevant",
                  "label": "Không relevant",
                  "group": "term",
                  "parent": "different",
                  "detail": "Tương lai nhưng không khác biệt thì bỏ qua trong quyết định này.",
                  "sectionId": "s11"
                },
                {
                  "id": "opportunity",
                  "label": "Opportunity cost",
                  "group": "term",
                  "parent": "cost",
                  "detail": "Lợi ích bị bỏ lỡ, có thể không nằm trên sổ kế toán nhưng vẫn relevant.",
                  "sectionId": "s11"
                }
              ],
              "edges": [
                {
                  "from": "cost",
                  "to": "future"
                },
                {
                  "from": "future",
                  "to": "sunk",
                  "label": "Không"
                },
                {
                  "from": "future",
                  "to": "different",
                  "label": "Có"
                },
                {
                  "from": "different",
                  "to": "relevant",
                  "label": "Có"
                },
                {
                  "from": "different",
                  "to": "irrelevant",
                  "label": "Không"
                },
                {
                  "from": "cost",
                  "to": "opportunity",
                  "label": "Bị bỏ lỡ"
                }
              ]
            }
          },
          {
            "type": "callout",
            "callout": {
              "kind": "key",
              "title": "Chốt quyết định",
              "body": "Chi phí thích hợp = tương lai + khác biệt."
            }
          }
        ],
        keyTerms: [
          { term: "Differential cost/revenue", definition: "Chênh lệch chi phí/doanh thu giữa hai phương án — luôn thích hợp." },
          { term: "Opportunity cost", definition: "Lợi ích bị bỏ lỡ của phương án không chọn." },
          { term: "Sunk cost", definition: "Chi phí đã phát sinh, không đổi được → luôn không thích hợp." },
        ],
      },
            {
        id: "s12",
        heading: "LO6 — Traditional format vs Contribution format",
        blocks: [
          {
            "type": "prose",
            "body": "Traditional format phục vụ báo cáo bên ngoài; contribution format phục vụ quản trị vì tách chi phí theo hành vi."
          },
          {
            "type": "comparison",
            "table": {
              "title": "Traditional vs Contribution format",
              "columns": [
                "Dòng",
                "Traditional",
                "Contribution"
              ],
              "rows": [
                {
                  "label": "Sales",
                  "cells": [
                    "100.000",
                    "100.000"
                  ]
                },
                {
                  "label": "Trừ",
                  "cells": [
                    "COGS 70.000",
                    "Variable 60.000"
                  ]
                },
                {
                  "label": "= Margin",
                  "cells": [
                    "Gross margin 30.000",
                    "Contribution margin 40.000"
                  ]
                },
                {
                  "label": "Trừ",
                  "cells": [
                    "S&A 20.000",
                    "Fixed 30.000"
                  ]
                },
                {
                  "label": "= NOI",
                  "cells": [
                    "10.000",
                    "10.000"
                  ]
                }
              ]
            }
          },
          {
            "type": "callout",
            "callout": {
              "kind": "trap",
              "title": "Đừng nhầm margin",
              "body": "Gross margin ≠ contribution margin: một bên theo chức năng, một bên theo hành vi."
            }
          }
        ],
        keyTerms: [
          { term: "Gross margin", definition: "Doanh thu − COGS (dạng truyền thống)." },
          { term: "Contribution margin", definition: "Doanh thu − biến phí (dạng contribution); phần đóng góp để bù định phí và tạo lãi." },
        ],
        examples: [
          {
            title: "Đọc hai khổ lãi",
            body: "Cùng lợi nhuận hoạt động thuần 10.000: dạng truyền thống → gross margin 30.000 (doanh thu − COGS); dạng contribution → contribution margin 40.000 (doanh thu − biến phí 60.000).",
            meaning: "Contribution margin 40.000 = phần doanh thu còn lại sau biến phí để bù 30.000 định phí rồi mới ra lãi; gross margin không tách biến/định nên không nói được điều này.",
            implication: "Có contribution margin mới tính được điểm hòa vốn, quyết định nhận thêm đơn, hay bỏ/giữ sản phẩm (nền cho CVP — Ch.5). Dùng nhầm gross margin cho các quyết định đó sẽ sai."
          },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        difficulty: "basic",
        conceptTested: "Product cost vs period cost",
        stem: "Lương của nhân viên bán hàng làm việc tại phòng trưng bày của một nhà sản xuất nên được phân loại thế nào?",
        options: [
          { id: "a", text: "Period cost (chi phí bán hàng).", isCorrect: true, rationale: "Cơ chế: hoạt động bán hàng nằm ngoài quá trình sản xuất → period cost, ghi thẳng vào kỳ, không qua tồn kho. Khóa: hỏi \"phát sinh ở khâu sản xuất hay bán/quản lý?\"." },
          { id: "b", text: "Product cost, vì công ty là nhà sản xuất.", isCorrect: false, rationale: "Bẫy (sai phạm trù): \"cứ là nhà máy thì product cost\". Cơ chế: product cost chỉ gồm DM + DL + MOH; bán/quản lý là period cost." },
          { id: "c", text: "Direct labor.", isCorrect: false, rationale: "Bẫy (khái niệm gần): DL là nhân công trực tiếp LÀM RA sản phẩm, không phải bán hàng." },
          { id: "d", text: "Manufacturing overhead.", isCorrect: false, rationale: "Bẫy (sai phạm trù): MOH là chi phí SẢN XUẤT gián tiếp; lương bán hàng không thuộc khâu sản xuất." },
        ],
        takeaway: "Vị trí trong chuỗi giá trị (sản xuất vs bán/quản lý) quyết định product hay period — không phải 'công ty thuộc ngành gì'.",
      },
      {
        id: "q2",
        difficulty: "basic",
        conceptTested: "Quick Check 1 — period vs product cost",
        stem: "Khoản nào sau đây là period cost (không phải product cost) trong một công ty sản xuất?",
        options: [
          { id: "a", text: "Khấu hao thiết bị sản xuất.", isCorrect: false, rationale: "Bẫy (khái niệm gần): gắn vận hành nhà máy → MOH → product cost. Cơ chế: khấu hao thiết bị sản xuất là product cost." },
          { id: "b", text: "Thuế tài sản tại trụ sở công ty.", isCorrect: true, rationale: "Cơ chế: trụ sở là khâu quản lý, không phải nhà máy → administrative → period cost. Khóa: cùng \"thuế tài sản\" nhưng ở nhà máy = MOH, ở trụ sở = period cost." },
          { id: "c", text: "Direct materials cost.", isCorrect: false, rationale: "Bẫy (sai phạm trù): DM → product cost." },
          { id: "d", text: "Điện chiếu sáng khu vực sản xuất.", isCorrect: false, rationale: "Bẫy (khái niệm gần): điện phục vụ sản xuất → MOH → product cost." },
        ],
        takeaway: "Cùng là 'thuế tài sản' hay 'điện' nhưng ở NHÀ MÁY thì product (MOH), ở TRỤ SỞ/văn phòng thì period. Luôn hỏi: phát sinh ở khâu nào?",
      },
      {
        id: "q3",
        difficulty: "intermediate",
        conceptTested: "Hành vi của fixed cost trên mỗi đơn vị",
        stem: "Khi mức hoạt động tăng trong relevant range, fixed cost TRÊN MỖI ĐƠN VỊ sẽ:",
        options: [
          { id: "a", text: "Giảm.", isCorrect: true, rationale: "Cơ chế: tổng fixed cost không đổi, chia cho số đơn vị lớn hơn → chi phí trên mỗi đơn vị giảm. Khóa: luôn hỏi \"tổng hay đơn vị?\"." },
          { id: "b", text: "Giữ nguyên, vì đó là fixed cost.", isCorrect: false, rationale: "Bẫy (sai phạm trù tổng/đơn vị): \"cố định\" đúng với TỔNG, không đúng với ĐƠN VỊ." },
          { id: "c", text: "Tăng.", isCorrect: false, rationale: "Bẫy (ngược chiều): fixed cost trên mỗi đơn vị giảm chứ không tăng khi sản lượng tăng." },
          { id: "d", text: "Thay đổi tỉ lệ thuận với mức hoạt động.", isCorrect: false, rationale: "Bẫy (khái niệm gần): đó là mô tả tổng variable cost, không phải fixed cost trên mỗi đơn vị." },
        ],
        takeaway: "Luôn hỏi 'tổng hay đơn vị?'. Đây cũng là lý do chi phí mỗi tô phở đổi khi bán 3.000 vs 4.000 tô.",
      },
      {
        id: "q4",
        difficulty: "intermediate",
        conceptTested: "Variable cost theo activity base (Quick Check 2)",
        stem: "Khoản chi phí nào BIẾN ĐỔI theo số cây kem bán ra tại cửa hàng Baskin & Robbins?",
        options: [
          { id: "a", text: "Chi phí kem và khăn giấy đưa cho khách hàng.", isCorrect: true, rationale: "Cơ chế: bán càng nhiều cây kem thì tổng tiền kem + giấy ăn càng tăng tỉ lệ thuận → variable cost theo activity base \"số cây kem\". Khóa: biến phí gắn trực tiếp với đơn vị hoạt động." },
          { id: "b", text: "Điện chiếu sáng cửa hàng.", isCorrect: false, rationale: "Bẫy (khái niệm gần): gần như cố định trong kỳ, không tỉ lệ với số cây kem → fixed/mixed cost." },
          { id: "c", text: "Lương quản lý cửa hàng.", isCorrect: false, rationale: "Bẫy (sai phạm trù): cố định, không phụ thuộc số cây kem → fixed cost." },
          { id: "d", text: "Tiền thuê mặt bằng cửa hàng.", isCorrect: false, rationale: "Bẫy (sai phạm trù): committed fixed cost, không đổi theo số cây kem." },
        ],
        takeaway: "Một chi phí chỉ 'biến đổi' KHI XÉT theo một activity base cụ thể; đổi cost driver có thể đổi cả cách phân loại.",
      },
      {
        id: "q5",
        difficulty: "intermediate",
        conceptTested: "Prime cost vs conversion cost",
        stem: "Direct labor thuộc nhóm chi phí nào?",
        options: [
          { id: "a", text: "Cả prime cost và conversion cost.", isCorrect: true, rationale: "Cơ chế: Prime = DM + DL; Conversion = DL + MOH → DL nằm ở giao của hai nhóm. Khóa: DL là \"cầu nối\" hai cách nhóm." },
          { id: "b", text: "Chỉ prime cost.", isCorrect: false, rationale: "Bẫy (khái niệm gần): nhớ máy móc, bỏ sót DL cũng thuộc conversion cost." },
          { id: "c", text: "Chỉ conversion cost.", isCorrect: false, rationale: "Bẫy (khái niệm gần): bỏ sót DL nằm trong prime cost." },
          { id: "d", text: "Không thuộc nhóm nào, vì đây là period cost.", isCorrect: false, rationale: "Bẫy (sai phạm trù): DL là product cost, không phải period cost." },
        ],
        takeaway: "DL là 'cầu nối' của hai cách nhóm chi phí sản xuất — có mặt ở cả prime lẫn conversion.",
      },
      {
        id: "q6",
        difficulty: "intermediate",
        conceptTested: "Direct vs indirect phụ thuộc cost object",
        stem: "Xét lương của quản đốc nhà máy. Phát biểu nào đúng?",
        options: [
          { id: "a", text: "Đó là indirect cost của từng sản phẩm riêng lẻ, nhưng là direct cost của bộ phận sản xuất.", isCorrect: true, rationale: "Cơ chế: tính direct/indirect luôn gắn với cost object đang xét. Khóa: \"direct hay indirect?\" vô nghĩa nếu chưa nói rõ cost object." },
          { id: "b", text: "Đó luôn là indirect cost trong mọi trường hợp.", isCorrect: false, rationale: "Bẫy (tuyệt đối hóa): với cost object \"bộ phận\", lương này truy nguyên trực tiếp → direct cost." },
          { id: "c", text: "Đó luôn là direct cost.", isCorrect: false, rationale: "Bẫy (tuyệt đối hóa): với cost object \"một đơn vị sản phẩm\", không truy nguyên kinh tế được → indirect cost." },
          { id: "d", text: "Đó là period cost.", isCorrect: false, rationale: "Bẫy (sai phạm trù): quản đốc thuộc khâu sản xuất → indirect labor → MOH → product cost." },
        ],
        takeaway: "'Direct hay indirect?' là câu hỏi vô nghĩa nếu chưa nói rõ đối tượng chi phí.",
      },
      {
        id: "q7",
        difficulty: "intermediate",
        conceptTested: "Common cost",
        stem: "Tiền thuê tòa nhà dùng chung cho bộ phận sản xuất, bán hàng và kế toán, xét theo từng bộ phận, được mô tả đúng nhất là:",
        options: [
          { id: "a", text: "Common cost (indirect cost phục vụ nhiều cost object cùng lúc).", isCorrect: true, rationale: "Cơ chế: phát sinh để phục vụ nhiều bộ phận cùng lúc, không tách riêng → common cost. Khóa: common cost không gán riêng cho ai nếu không phân bổ." },
          { id: "b", text: "Direct cost của từng bộ phận.", isCorrect: false, rationale: "Bẫy (khái niệm gần): không truy nguyên kinh tế riêng từng bộ phận → không phải direct cost." },
          { id: "c", text: "Differential cost.", isCorrect: false, rationale: "Bẫy (sai phạm trù): nhầm sang nhóm chi phí cho ra quyết định; câu này hỏi khả năng truy nguyên." },
          { id: "d", text: "Sunk cost.", isCorrect: false, rationale: "Bẫy (sai phạm trù): sunk cost là chi phí quá khứ không đổi; tiền thuê tương lai không phải sunk cost." },
        ],
        takeaway: "Common cost = indirect cost dùng chung cho nhiều cost object — không thể gán riêng cho cái nào nếu không phân bổ.",
      },
      {
        id: "q8",
        difficulty: "intermediate",
        conceptTested: "Mixed cost Y = a + bX",
        stem: "Một hóa đơn điện có khoản cố định hằng tháng là 40 và phần biến đổi 0,03 cho mỗi kWh. Nếu dùng 2.000 kWh trong tháng, tổng hóa đơn là bao nhiêu?",
        options: [
          { id: "a", text: "100 (= 40 + 0.03 × 2,000).", isCorrect: true, rationale: "Cơ chế: Y = a + bX = 40 + 60 = 100; tách đúng phần cố định và biến đổi. Khóa: mixed cost = a (định phí) + bX (biến phí)." },
          { id: "b", text: "60 (= 0.03 × 2,000).", isCorrect: false, rationale: "Bẫy (khái niệm gần): bỏ sót phần định phí a = 40." },
          { id: "c", text: "40.", isCorrect: false, rationale: "Bẫy (khái niệm gần): chỉ tính định phí, bỏ phần biến đổi 60." },
          { id: "d", text: "80 (= 0.04 × 2,000).", isCorrect: false, rationale: "Bẫy (đảo/gộp sai): gộp định phí vào đơn giá biến đổi; phải tách a và b riêng." },
        ],
        takeaway: "Mixed cost = a (định phí) + bX (biến phí). Đừng gộp định phí vào đơn giá biến đổi.",
      },
      {
        id: "q9",
        difficulty: "advanced",
        conceptTested: "Sunk cost vs giá trị bán hiện tại (Quick Check 5)",
        stem: "Chiếc xe của bạn hiện có thể bán được 5.000. Khoản 5.000 này có phải sunk cost không?",
        options: [
          { id: "a", text: "Không — đây không phải sunk cost.", isCorrect: true, rationale: "Cơ chế: 5,000 là giá bán tương lai có thể nhận → opportunity cost/dòng tiền tương lai, thích hợp với quyết định. Sunk cost là khoản đã chi mua xe trong quá khứ. Khóa: sunk cost = quá khứ, không đổi được." },
          { id: "b", text: "Có — vì nó liên quan đến chiếc xe bạn đã mua.", isCorrect: false, rationale: "Bẫy (sai phạm trù): gán nhãn theo tài sản; sunk cost gắn với chi phí đã phát sinh, không phải giá trị thu tương lai." },
          { id: "c", text: "Có — vì chiếc xe đã qua sử dụng.", isCorrect: false, rationale: "Bẫy (khái niệm gần): tình trạng xe không quyết định sunk cost; bản chất là dòng tiền tương lai có khác biệt giữa phương án." },
          { id: "d", text: "Không thể xác định nếu chưa biết giá mua ban đầu.", isCorrect: false, rationale: "Bẫy (khái niệm gần): giá mua ban đầu mới là sunk cost và không cần để trả lời; 5,000 là giá trị tương lai nên đã đủ kết luận." },
        ],
        takeaway: "Sunk = quá khứ, không đổi được. Giá có thể bán/thu trong tương lai KHÔNG phải sunk và thường rất thích hợp.",
      },
      {
        id: "q10",
        difficulty: "advanced",
        conceptTested: "Opportunity cost trong quyết định (case Phở)",
        stem: "Chủ quán phở dùng nhà riêng làm mặt bằng (có thể cho thuê 15 triệu VND/tháng) và tự quản lý quán (có thể đi làm nơi khác được 10 triệu VND/tháng). Khi đánh giá quán có thật sự có lãi hay không, 15 triệu và 10 triệu nên được xử lý như:",
        options: [
          { id: "a", text: "Opportunity costs — phải trừ ra, dù không xuất hiện trên sổ.", isCorrect: true, rationale: "Cơ chế: lợi ích bị bỏ lỡ khi chọn mở quán; bỏ qua sẽ đánh giá lợi nhuận cao hơn thực chất. Khóa: hỏi \"chọn cái này thì bỏ lỡ cái gì?\"." },
          { id: "b", text: "Bỏ qua, vì không chi tiền/không có hóa đơn.", isCorrect: false, rationale: "Bẫy (sai phạm trù): \"không chi tiền thì không phải chi phí\"; opportunity cost không trên sổ nhưng vẫn là chi phí thích hợp." },
          { id: "c", text: "Sunk cost.", isCorrect: false, rationale: "Bẫy (khái niệm gần): đây là lợi ích tương lai bị bỏ lỡ, không phải chi phí quá khứ." },
          { id: "d", text: "Product costs của một tô phở.", isCorrect: false, rationale: "Bẫy (sai phạm trù): không gắn vào quá trình làm ra tô phở; là opportunity cost ở cấp quyết định." },
        ],
        takeaway: "Lợi nhuận kế toán có thể dương nhưng lợi nhuận KINH TẾ âm nếu quên opportunity cost. Luôn hỏi: 'chọn cái này thì bỏ lỡ cái gì?'",
      },
      {
        id: "q11",
        difficulty: "advanced",
        conceptTested: "Gross margin vs contribution margin",
        stem: "Doanh thu là 100.000; COGS là 70.000 (bao gồm 60.000 variable costs); selling & administrative expenses là 20.000 (toàn bộ là fixed cost). Contribution margin là bao nhiêu?",
        options: [
          { id: "a", text: "40.000 (= doanh thu − tổng biến phí 60.000).", isCorrect: true, rationale: "Cơ chế: contribution margin = doanh thu − biến phí, bất kể chi phí đó ở COGS hay selling & administrative. Khóa: contribution margin trừ theo HÀNH VI (biến/định)." },
          { id: "b", text: "30.000 (= doanh thu − COGS).", isCorrect: false, rationale: "Bẫy (khái niệm gần): đó là gross margin theo dạng truyền thống, gom theo CHỨC NĂNG, không phải contribution margin." },
          { id: "c", text: "10.000 (= lợi nhuận hoạt động thuần).", isCorrect: false, rationale: "Bẫy (khái niệm gần): là lãi thuần sau khi trừ cả fixed cost, không phải contribution margin." },
          { id: "d", text: "80.000 (= doanh thu − fixed costs 20.000).", isCorrect: false, rationale: "Bẫy (đảo biến/định): trừ nhầm fixed costs thay vì variable costs; contribution margin trừ variable costs." },
        ],
        takeaway: "Gross margin trừ COGS (theo chức năng); contribution margin trừ biến phí (theo hành vi). Hai con số khác nhau và phục vụ mục đích khác nhau.",
      },
      {
        id: "q12",
        difficulty: "intermediate",
        conceptTested: "Committed vs discretionary fixed cost",
        stem: "Khoản fixed cost nào sau đây là discretionary (có thể cắt giảm trong ngắn hạn bằng quyết định của quản lý)?",
        options: [
          { id: "a", text: "Ngân sách quảng cáo năm nay.", isCorrect: true, rationale: "Cơ chế: quảng cáo có thể tăng/giảm/hoãn trong ngắn hạn tùy quyết định → discretionary cost. Khóa: discretionary cost = quyết định ngắn hạn linh hoạt." },
          { id: "b", text: "Khấu hao của một nhà máy đã xây.", isCorrect: false, rationale: "Bẫy (khái niệm gần): đã cam kết dài hạn → committed cost." },
          { id: "c", text: "Tiền thuê theo hợp đồng thuê 10 năm.", isCorrect: false, rationale: "Bẫy (khái niệm gần): cam kết dài hạn → committed cost." },
          { id: "d", text: "Thuế tài sản của nhà máy.", isCorrect: false, rationale: "Bẫy (khái niệm gần): gắn tài sản dài hạn đã sở hữu → committed cost." },
        ],
        takeaway: "Committed = ràng buộc dài hạn khó đảo ngược; discretionary = quyết định ngắn hạn linh hoạt. Phân biệt giúp biết cắt giảm được khoản nào khi cần.",
      },
      {
        id: "q13",
        difficulty: "intermediate",
        conceptTested: "Relevant cost — train ticket quick check",
        stem: "Bạn đang cân nhắc đi tàu thay vì lái xe cho một chuyến đi. Vé tàu nên được xử lý thế nào trong quyết định này?",
        options: [
          { id: "a", text: "Chi phí thích hợp/differential cost, nếu chỉ phát sinh khi chọn phương án đi tàu.", isCorrect: true, rationale: "Cơ chế: vé tàu là chi phí tương lai và khác biệt giữa hai phương án → thỏa điều kiện chi phí thích hợp. Khóa: chi phí thích hợp = tương lai + khác biệt." },
          { id: "b", text: "Không thích hợp, vì vé chưa mua nên chưa có trong sổ sách.", isCorrect: false, rationale: "Bẫy (sai phạm trù): \"chưa ghi sổ thì không phải chi phí\"; chi phí thích hợp không phụ thuộc chứng từ." },
          { id: "c", text: "Sunk cost, vì chuyến đi đã được lên kế hoạch trước đó.", isCorrect: false, rationale: "Bẫy (khái niệm gần): gắn sunk cost với ý định quá khứ; sunk cost là khoản đã phát sinh không đổi được, vé chưa mua là dòng tiền tương lai." },
          { id: "d", text: "Luôn không thích hợp, vì đi lại là chi phí cá nhân, không phải chi phí sản xuất.", isCorrect: false, rationale: "Bẫy (sai phạm trù): kéo nhầm product cost/period cost vào quyết định; câu hỏi về chi phí thích hợp." },
        ],
        takeaway: "Chi phí thích hợp = tương lai + khác biệt; vé tàu là chi phí thích hợp nếu chỉ xuất hiện ở phương án đi tàu.",
      },
    ],
  },
  {
    slug: "job-order-costing",
    order: 2,
    title: "Chapter 2 — Job-Order Costing: Calculating Unit Product Costs",
    bigIdea:
      "Direct materials và direct labor thì truy nguyên thẳng vào từng job được; nhưng manufacturing overhead thì không — nên ta ước tính trước một tỉ lệ phân bổ (POHR) rồi áp overhead vào job theo mức hoạt động thực tế. Toàn bộ chương trả lời câu hỏi: một đơn hàng riêng lẻ tốn bao nhiêu, và câu trả lời phụ thuộc rất mạnh vào việc chọn allocation base có thật sự là cost driver hay không.",
    learningObjectives: [
      "LO1 — Tính predetermined overhead rate (POHR).",
      "LO2 — Áp overhead vào job bằng POHR (normal costing).",
      "LO3 — Tính total cost và unit product cost của một job bằng một plantwide POHR.",
      "LO4 — Tính total cost và unit product cost bằng nhiều POHR (departmental / ABC).",
      "Hiểu khi nào dùng job-order costing, dòng chứng từ (job cost sheet, materials requisition, time ticket), và xử lý under/overapplied overhead khi lập BCTC.",
    ],
    status: "ready",
    source:
      "Garrison/Noreen/Brewer 17e Ch.2 (slide môn học). PearCo / Dickson / NW Fab = ví dụ trong slide.",
    knowledgeMap: {
      engine: "flow",
      title: "Knowledge map — Job-Order Costing",
      layout: "tree",
      collapsible: true,
      caption:
        "Bấm từng nhánh để bung khái niệm con; dùng nút Đến phần học để nhảy tới mục liên quan.",
      nodes: [
        {
          id: "job",
          label: "Job-Order Costing",
          group: "concept",
          detail:
            "Tính chi phí cho từng đơn hàng riêng; mấu chốt nằm ở phân bổ overhead.",
          sectionId: "s0",
        },
        {
          id: "when",
          label: "Khi nào dùng",
          group: "purpose",
          parent: "job",
          detail:
            "Nhiều SP khác nhau, làm theo đơn, giữ sổ riêng từng job.",
          sectionId: "s0",
        },
        {
          id: "docs",
          label: "Chứng từ",
          group: "purpose",
          parent: "job",
          detail: "Job cost sheet tổng hợp DM/DL/MOH của một job.",
          sectionId: "s2",
        },
        {
          id: "lo1",
          label: "LO1 POHR",
          group: "lo",
          parent: "job",
          detail: "Tỉ lệ phân bổ overhead chốt trước kỳ.",
          sectionId: "s3",
        },
        {
          id: "lo2",
          label: "LO2 Áp overhead",
          group: "lo",
          parent: "job",
          detail: "Overhead áp = POHR × giờ thực (normal costing).",
          sectionId: "s4",
        },
        {
          id: "lo3",
          label: "LO3 Unit cost",
          group: "lo",
          parent: "job",
          detail:
            "Tổng chi phí = DM+DL+MOH áp; chi phí đơn vị = tổng chi phí ÷ số đơn vị.",
          sectionId: "s5",
        },
        {
          id: "lo4",
          label: "LO4 Nhiều tỉ lệ",
          group: "lo",
          parent: "job",
          detail: "Mỗi bộ phận một POHR theo cost driver riêng.",
          sectionId: "s7",
        },
        {
          id: "ext",
          label: "Báo cáo ngoài",
          group: "purpose",
          parent: "job",
          detail:
            "Under/overapplied điều chỉnh COGS; job cost sheet nuôi WIP/FG/COGS.",
          sectionId: "s9",
        },
        {
          id: "when-many",
          label: "Nhiều SP khác nhau",
          group: "term",
          parent: "when",
          detail:
            "Dùng khi mỗi kỳ có nhiều sản phẩm hoặc dịch vụ khác nhau cần đo chi phí riêng.",
          sectionId: "s0",
        },
        {
          id: "when-order",
          label: "Làm theo đơn",
          group: "term",
          parent: "when",
          detail:
            "Sản phẩm thường được sản xuất theo đơn đặt hàng, như một lô jeans hoặc một dự án riêng.",
          sectionId: "s0",
        },
        {
          id: "when-record",
          label: "Sổ chi phí riêng/job",
          group: "term",
          parent: "when",
          detail:
            "Mỗi job cần một job cost sheet riêng để gom chi phí của chính job đó.",
          sectionId: "s2",
        },
        {
          id: "doc-sheet",
          label: "Job cost sheet",
          group: "term",
          parent: "docs",
          detail:
            "Bảng tập hợp DM, DL, MOH và cost summary của một job.",
          sectionId: "s2",
        },
        {
          id: "doc-req",
          label: "Materials requisition",
          group: "term",
          parent: "docs",
          detail:
            "Phiếu xuất kho NVL đo số lượng × đơn giá để ghi DM cho job.",
          sectionId: "s2",
        },
        {
          id: "doc-ticket",
          label: "Time ticket",
          group: "term",
          parent: "docs",
          detail:
            "Phiếu công đo giờ × đơn giá để ghi DL cho job.",
          sectionId: "s2",
        },
        {
          id: "lo1-base",
          label: "Allocation base",
          group: "term",
          parent: "lo1",
          detail:
            "Cơ sở phân bổ overhead; base tốt phải là cost driver thật.",
          sectionId: "s3",
        },
        {
          id: "lo1-formula",
          label: "Y=a+bX",
          group: "term",
          parent: "lo1",
          detail:
            "Dùng Y=a+bX để ước tính tổng MOH trước khi chia cho allocation base.",
          sectionId: "s3",
        },
        {
          id: "lo1-pre",
          label: "Predetermined",
          group: "term",
          parent: "lo1",
          detail:
            "Rate được chốt trước kỳ bằng số ước tính để tính giá job trong kỳ.",
          sectionId: "s3",
        },
        {
          id: "lo2-normal",
          label: "Normal costing",
          group: "term",
          parent: "lo2",
          detail:
            "Normal costing dùng DM/DL thực và MOH áp theo POHR.",
          sectionId: "s4",
        },
        {
          id: "lo2-apply",
          label: "POHR × giờ thực",
          group: "term",
          parent: "lo2",
          detail:
            "MOH áp cho job bằng POHR nhân mức hoạt động thực tế của job.",
          sectionId: "s4",
        },
        {
          id: "lo3-total",
          label: "Total cost",
          group: "term",
          parent: "lo3",
          detail:
            "Total job cost = direct materials + direct labor + manufacturing overhead áp.",
          sectionId: "s5",
        },
        {
          id: "lo3-unit",
          label: "Unit product cost",
          group: "term",
          parent: "lo3",
          detail:
            "Unit product cost = total job cost ÷ số đơn vị hoàn thành.",
          sectionId: "s5",
        },
        {
          id: "lo3-plant",
          label: "Plantwide rate",
          group: "term",
          parent: "lo3",
          detail:
            "Một plantwide rate dùng chung một POHR cho toàn nhà máy.",
          sectionId: "s6",
        },
        {
          id: "lo4-dept",
          label: "Departmental rate",
          group: "term",
          parent: "lo4",
          detail:
            "Departmental rate dùng POHR riêng cho từng bộ phận sản xuất.",
          sectionId: "s7",
        },
        {
          id: "lo4-driver",
          label: "Cost driver",
          group: "term",
          parent: "lo4",
          detail:
            "Cost driver là yếu tố gây ra overhead; chọn sai driver làm méo giá job.",
          sectionId: "s6",
        },
        {
          id: "lo4-abc",
          label: "ABC",
          group: "term",
          parent: "lo4",
          detail:
            "ABC dùng nhiều rate theo hoạt động để đo overhead chính xác hơn.",
          sectionId: "s8",
        },
        {
          id: "a2-abc-example",
          label: "ABC ví dụ Maxtar",
          group: "term",
          parent: "lo4",
          detail:
            "Maxtar cho thấy activity-based absorption costing dịch overhead từ sản phẩm high-volume sang low-volume.",
          sectionId: "s12",
        },
        {
          id: "a2-batch",
          label: "Batch/Product-level activity",
          group: "term",
          parent: "lo4",
          detail:
            "Batch-level activity xảy ra theo lô; product-level activity gắn với từng sản phẩm, không theo số đơn vị.",
          sectionId: "s12",
        },
        {
          id: "ext-uoa",
          label: "Under/overapplied",
          group: "term",
          parent: "ext",
          detail:
            "Under/overapplied phát sinh khi overhead áp khác overhead thực.",
          sectionId: "s9",
        },
        {
          id: "ext-flow",
          label: "WIP/FG/COGS",
          group: "term",
          parent: "ext",
          detail:
            "Job cost sheet giải thích dòng Work in Process → Finished Goods → Cost of Goods Sold.",
          sectionId: "s10",
        },
        {
          id: "ext-service",
          label: "Dịch vụ",
          group: "term",
          parent: "ext",
          detail:
            "Dịch vụ cũng dùng job-order costing khi mỗi khách hàng, vụ việc hoặc ca điều trị là một job.",
          sectionId: "s11",
        },
      ],
      edges: [
        { from: "job", to: "when" },
        { from: "job", to: "docs" },
        { from: "job", to: "lo1" },
        { from: "job", to: "lo2" },
        { from: "job", to: "lo3" },
        { from: "job", to: "lo4" },
        { from: "job", to: "ext" },
        { from: "when", to: "when-many" },
        { from: "when", to: "when-order" },
        { from: "when", to: "when-record" },
        { from: "docs", to: "doc-sheet" },
        { from: "docs", to: "doc-req" },
        { from: "docs", to: "doc-ticket" },
        { from: "lo1", to: "lo1-base" },
        { from: "lo1", to: "lo1-formula" },
        { from: "lo1", to: "lo1-pre" },
        { from: "lo2", to: "lo2-normal" },
        { from: "lo2", to: "lo2-apply" },
        { from: "lo3", to: "lo3-total" },
        { from: "lo3", to: "lo3-unit" },
        { from: "lo3", to: "lo3-plant" },
        { from: "lo4", to: "lo4-dept" },
        { from: "lo4", to: "lo4-driver" },
        { from: "lo4", to: "lo4-abc" },
        { from: "lo4", to: "a2-abc-example" },
        { from: "lo4", to: "a2-batch" },
        { from: "ext", to: "ext-uoa" },
        { from: "ext", to: "ext-flow" },
        { from: "ext", to: "ext-service" },
      ],
    },
    sections: [
      {
        id: "s0",
        heading: "Khi nào dùng job-order costing",
        blocks: [
          {
            type: "prose",
            body:
              "Job-order costing dùng khi doanh nghiệp có nhiều sản phẩm khác nhau, thường làm theo đơn đặt hàng, và mỗi đơn cần được truy nguyên/phân bổ chi phí riêng. Ví dụ slide: làm 1.000 quần jeans boot-cut; cả lô 1.000 cái là một job.",
          },
          {
            type: "comparison",
            table: {
              title: "Job-order vs Process costing",
              columns: ["Tiêu chí", "Job-order", "Process"],
              rows: [
                {
                  label: "Sản phẩm",
                  cells: ["Khác nhau, làm theo đơn", "Đồng nhất, hàng loạt"],
                },
                {
                  label: "Tập hợp chi phí",
                  cells: ["Theo từng job", "Theo từng công đoạn"],
                },
                {
                  label: "Ví dụ",
                  cells: ["Boeing, Bechtel, Disney", "Lọc dầu, xi măng"],
                },
              ],
            },
          },
          {
            type: "callout",
            callout: {
              kind: "realworld",
              title: "Công ty điển hình",
              body:
                "Boeing (máy bay), Bechtel (xây dựng lớn), Disney (phim) — mỗi đơn = một job.",
            },
          },
        ],
        keyTerms: [
          { term: "Job", definition: "Một đơn hàng hoặc lô riêng biệt được tập hợp chi phí riêng." },
          { term: "Job-order costing", definition: "Hệ thống tính giá thành cho sản phẩm/dịch vụ khác nhau, thường làm theo đơn đặt hàng." },
          { term: "Process costing", definition: "Hệ thống phù hợp cho sản phẩm đồng nhất sản xuất hàng loạt; đây là chương riêng sau này." },
        ],
      },
      {
        id: "s1",
        heading: "Dòng chi phí: cái gì truy nguyên, cái gì phân bổ",
        blocks: [
          {
            type: "prose",
            body:
              "Direct materials và direct labor được tính thẳng vào từng job khi công việc diễn ra. Manufacturing overhead thì không truy nguyên kinh tế được tới từng job nên phải phân bổ cho tất cả job.",
          },
          {
            type: "diagram",
            diagram: {
              engine: "flow",
              title: "Truy nguyên vs phân bổ",
              layout: "horizontal",
              nodes: [
                {
                  id: "DM",
                  label: "Direct Materials",
                  group: "concept",
                  detail: "Truy nguyên thẳng vào từng job.",
                  sectionId: "s1",
                },
                {
                  id: "DL",
                  label: "Direct Labor",
                  group: "concept",
                  detail: "Truy nguyên thẳng vào từng job.",
                  sectionId: "s1",
                },
                {
                  id: "MOH",
                  label: "Manufacturing Overhead",
                  group: "concept",
                  detail: "Không truy nguyên được → phân bổ cho mọi job.",
                  sectionId: "s1",
                },
                {
                  id: "J1",
                  label: "Job 1",
                  group: "concept",
                  detail: "Một đơn hàng/lô được tập hợp chi phí riêng.",
                  sectionId: "s1",
                },
                {
                  id: "J2",
                  label: "Job 2",
                  group: "concept",
                  detail: "Một đơn hàng/lô được tập hợp chi phí riêng.",
                  sectionId: "s1",
                },
                {
                  id: "J3",
                  label: "Job 3",
                  group: "concept",
                  detail: "Một đơn hàng/lô được tập hợp chi phí riêng.",
                  sectionId: "s1",
                },
              ],
              edges: [
                { from: "DM", to: "J1" },
                { from: "DM", to: "J2" },
                { from: "DM", to: "J3" },
                { from: "DL", to: "J1" },
                { from: "DL", to: "J2" },
                { from: "DL", to: "J3" },
                { from: "MOH", to: "J1", label: "phân bổ", animated: true },
                { from: "MOH", to: "J2", label: "phân bổ", animated: true },
                { from: "MOH", to: "J3", label: "phân bổ", animated: true },
              ],
            },
          },
          {
            type: "callout",
            callout: {
              kind: "trap",
              body:
                "DM/DL truy nguyên thẳng; MOH thì KHÔNG → phải phân bổ. Mọi sai số giá job nằm ở khâu phân bổ overhead.",
            },
          },
        ],
        keyTerms: [
          { term: "Trace", definition: "Truy nguyên chi phí trực tiếp vào job khi có chứng từ/đo lường riêng cho job đó." },
          { term: "Allocate", definition: "Phân bổ chi phí gián tiếp cho job bằng một cơ sở phân bổ." },
        ],
      },
      {
        id: "s2",
        heading: "Job cost sheet & chứng từ nguồn",
        blocks: [
          {
            type: "prose",
            body:
              "Job cost sheet là bảng tập hợp chi phí của một job: DM, DL, MOH và phần tổng hợp chi phí. Chứng từ nguồn nạp số liệu truy nguyên vào đúng cột của job.",
          },
          {
            type: "comparison",
            table: {
              title: "Chứng từ nguồn",
              columns: ["Chứng từ", "Đo gì", "Vào cột"],
              rows: [
                {
                  label: "Materials Requisition",
                  cells: ["Số lượng × đơn giá NVL", "DM"],
                },
                {
                  label: "Time Ticket",
                  cells: ["Giờ công × đơn giá", "DL"],
                },
              ],
            },
          },
        ],
        keyTerms: [
          { term: "Job cost sheet", definition: "Bảng tập hợp DM, DL, MOH và phần tổng hợp chi phí của một job." },
          { term: "Bill of materials", definition: "Chứng từ liệt kê số lượng từng loại direct material cần để làm ra một sản phẩm." },
          { term: "Materials Requisition Form", definition: "Phiếu xuất kho nguyên vật liệu, là chứng từ nguồn để ghi DM vào job." },
          { term: "Employee Time Ticket", definition: "Phiếu công, là chứng từ nguồn để ghi DL vào job." },
          { term: "Subsidiary ledger", definition: "Sổ chi tiết giải thích số dư tổng hợp của tài khoản kiểm soát, ở đây là Work in Process." },
        ],
        examples: [
          {
            title: "PearCo job A-143 — DM & DL",
            body:
              "Requisition X7-6890: 12×$3 + 20×$4 = $116 (DM). Time ticket: 8 giờ × $15 = $120 (DL).",
            meaning:
              "Mỗi chứng từ nạp một con số thật, truy nguyên, vào đúng cột của job.",
            implication:
              "Tập hợp các job cost sheet = subsidiary ledger của Work in Process → giải thích số tồn kho trên BCTC.",
          },
        ],
      },
      {
        id: "s3",
        heading: "LO1 — Predetermined overhead rate (POHR)",
        blocks: [
          {
            type: "prose",
            body:
              "POHR được tính trước khi kỳ bắt đầu vì overhead thực chỉ biết đầy đủ sau kỳ, trong khi doanh nghiệp cần tính giá job ngay trong kỳ. Allocation base lý tưởng phải là cost driver.",
          },
          {
            type: "formula",
            formula: {
              expression:
                "POHR = Ước tính tổng MOH ÷ Ước tính tổng allocation base",
              legend: [
                {
                  symbol: "MOH ước tính",
                  meaning:
                    "Tổng manufacturing overhead dự kiến cho kỳ tới.",
                },
                {
                  symbol: "Allocation base ước tính",
                  meaning:
                    "Tổng mức hoạt động dự kiến của base dùng để phân bổ.",
                },
              ],
              note: "Tổng MOH ước tính tính bằng Y = a + bX.",
            },
          },
          {
            type: "callout",
            callout: {
              kind: "key",
              body:
                "POHR chốt TRƯỚC kỳ bằng số ước tính — để định giá job ngay trong kỳ và tránh dao động mùa vụ.",
            },
          },
        ],
        keyTerms: [
          { term: "Predetermined overhead rate (POHR)", definition: "Tỉ lệ phân bổ overhead tính trước kỳ bằng tổng MOH ước tính / tổng allocation base ước tính." },
          { term: "Allocation base", definition: "Cơ sở dùng để phân bổ overhead, như DLH hoặc giờ máy." },
          { term: "Cost driver", definition: "Yếu tố gây ra overhead; allocation base tốt nên là cost driver thật." },
          { term: "Y = a + bX", definition: "Mô hình ước tính mixed overhead: a là định phí, b là biến phí trên mỗi đơn vị allocation base, X là tổng mức hoạt động." },
        ],
      },
      {
        id: "s4",
        heading: "LO2 — Áp overhead vào job (normal costing)",
        blocks: [
          {
            type: "prose",
            body:
              "Overhead áp cho job = POHR × mức hoạt động thực tế của job. Đây là normal costing: DM và DL dùng số thực; MOH dùng số áp theo POHR.",
          },
          {
            type: "calc",
            calc: {
              title: "PearCo POHR & overhead áp",
              steps: [
                {
                  label: "Ước tính total MOH",
                  expr: "Y = a + bX = 200.000 + 2,75×160.000 = 640.000",
                },
                {
                  label: "Tính POHR",
                  expr: "640.000 ÷ 160.000 = $4,00/DLH",
                },
                {
                  label: "Áp cho job A-143",
                  expr: "8 DLH × $4 = $32",
                },
              ],
              result: "$32",
              meaning:
                "Overhead áp theo POHR ước tính, không chờ số thực.",
              implication:
                "DM/DL thực + MOH áp = normal costing → tính được giá job ngay trong kỳ.",
            },
          },
        ],
      },
      {
        id: "s5",
        heading: "LO3 — Total cost & unit product cost bằng một plantwide rate",
        blocks: [
          {
            type: "prose",
            body:
              "Total cost của job = DM + DL + MOH áp. Unit product cost = total cost ÷ số đơn vị hoàn thành. Với plantwide rate, cả nhà máy dùng chung một POHR.",
          },
          {
            type: "calc",
            calc: {
              title: "Job A-143 total & unit",
              steps: [
                {
                  label: "Gộp 3 thành phần",
                  expr: "DM 116 + DL 120 + MOH 32",
                },
                {
                  label: "Tính total job cost",
                  expr: "Total = 268",
                },
                {
                  label: "Tính unit product cost",
                  expr: "Unit = 268 ÷ 2 đơn vị",
                },
              ],
              result: "$134/đơn vị",
              meaning:
                "Unit product cost gộp đủ 3 thành phần, gồm overhead ĐÃ áp.",
              implication:
                "Thiếu một thành phần (vd quên overhead) → định giá sai, có thể bán dưới giá vốn.",
            },
          },
        ],
        examples: [
          {
            title: "Quick Check WR53",
            body:
              "DM 200 + DL (10×15=150) + MOH (POHR 760.000÷20.000=38 → 38×10=380) = 730.",
            meaning: "$730 mới là chi phí đầy đủ của job.",
            implication:
              "Chọn 200/350/380 là quên một cấu phần → underprice.",
          },
        ],
      },
      {
        id: "s6",
        heading: "Góc nhìn quản trị: chọn allocation base",
        blocks: [
          {
            type: "prose",
            body:
              "Job-order costing truy nguyên DM và DL khá chính xác, nhưng overhead thường bị phân bổ sai nếu base không phản ánh đúng cách job tiêu thụ nguồn lực overhead.",
          },
          {
            type: "comparison",
            table: {
              title: "Plantwide rate vs nhiều departmental rate",
              columns: ["", "Plantwide (1 rate)", "Departmental (nhiều)"],
              rows: [
                {
                  label: "Giả định",
                  cells: [
                    "Cả nhà máy chung 1 cost driver",
                    "Mỗi bộ phận driver riêng",
                  ],
                },
                {
                  label: "Độ chính xác",
                  cells: [
                    "Thấp khi job dùng nguồn lực khác nhau",
                    "Cao hơn",
                  ],
                },
                {
                  label: "Khi nào",
                  cells: ["Đơn giản", "Nhận diện được nhiều cost driver"],
                },
              ],
            },
          },
          {
            type: "callout",
            callout: {
              kind: "trap",
              body:
                "DLH KHÔNG phải cost driver duy nhất — mặc định vậy là quá đơn giản và làm sai giá job.",
            },
          },
        ],
        keyTerms: [
          { term: "Plantwide rate", definition: "Một POHR dùng chung cho toàn nhà máy." },
          { term: "Vì sao plantwide rate kém chính xác", definition: "Dùng một plantwide rate dựa trên một allocation base volume-driven khiến giá job lệch khi sản phẩm tiêu thụ overhead không theo tỉ lệ volume." },
        ],
      },
      {
        id: "s7",
        heading: "LO4 — Nhiều POHR (departmental)",
        blocks: [
          {
            type: "prose",
            body:
              "Departmental overhead rates dùng một POHR riêng cho mỗi bộ phận sản xuất, theo allocation base phù hợp với bộ phận đó. Milling có thể dùng giờ máy; Assembly có thể dùng DLH.",
          },
          {
            type: "calc",
            calc: {
              title: "Dickson Job 407",
              steps: [
                {
                  label: "Milling POHR",
                  expr: "510.000 ÷ 60.000 = $8,50/MH",
                },
                {
                  label: "Assembly POHR",
                  expr: "800.000 ÷ 80.000 = $10/DLH",
                },
                {
                  label: "MOH áp",
                  expr: "90×8,50 + 20×10 = 765 + 200 = 965",
                },
                {
                  label: "Tổng chi phí",
                  expr: "DM 1.170 + DL 350 + MOH 965 = 2.485",
                },
                {
                  label: "Giá bán (markup 75%)",
                  expr: "2.485 × 1,75",
                },
              ],
              result: "$4.348,75",
              meaning:
                "Mỗi bộ phận áp theo base của NÓ (Milling theo MH, Assembly theo DLH).",
              implication:
                "Cho giá KHÁC plantwide → phản ánh đúng hơn chi phí job thật sự gây ra → định giá/quyết định tốt hơn.",
            },
          },
          {
            type: "callout",
            callout: {
              kind: "insight",
              body:
                "Departmental rate tốn công hơn nhưng cho giá job chính xác hơn một plantwide rate.",
            },
          },
        ],
        examples: [
          {
            title: "Bài tập mở: Landen 2-16",
            body:
              "Tự luyện, không phải câu hỏi chấm điểm. Dữ liệu slide: DLH 140.000; MH 70.000; định phí MOH $784.000; biến phí $2,00/DLH và $4,00/MH; Job 550: DM $175, DL $225, 15 DLH, 5 MH; markup 200%. Theo DLH: POHR = (784.000 + 2×140.000)/140.000 = $7,60/DLH → MOH $114 → tổng chi phí $514 → giá $1.542. Theo MH: POHR = (784.000 + 4×70.000)/70.000 = $15,20/MH → MOH $76 → tổng chi phí $476 → giá $1.428.",
            meaning:
              "Cùng một job cho ra giá khác khi đổi allocation base từ DLH sang MH.",
            implication:
              "Nếu MH mới là driver đúng mà vẫn dùng DLH, job dùng nhiều máy/ít công sẽ bị định giá sai → mất khả năng cạnh tranh hoặc bán dưới giá.",
          },
        ],
      },
      {
        id: "s8",
        heading: "Multiple POHR theo activity (ABC)",
        blocks: [
          {
            type: "prose",
            body:
              "Activity-based costing (ABC) là một cách phát triển nhiều POHR theo các hoạt động mà công ty thực hiện, để đo chính xác hơn mức độ job/sản phẩm/khách hàng đòi hỏi overhead.",
          },
          {
            type: "callout",
            callout: {
              kind: "note",
              body:
                "ABC = nhiều POHR theo HOẠT ĐỘNG; đo chính xác hơn mức job/sản phẩm/khách hàng 'đòi hỏi' overhead. Chi tiết ở chương riêng.",
            },
          },
        ],
        keyTerms: [
          { term: "Activity-based costing (ABC)", definition: "Cách phân bổ overhead theo các hoạt động và cost driver của từng hoạt động." },
        ],
      },
      {
        id: "s12",
        heading: "Appendix 2A — Activity-Based Absorption Costing (ví dụ Maxtar)",
        blocks: [
          {
            type: "prose",
            body:
              "Activity-based absorption costing gán toàn bộ manufacturing overhead cho sản phẩm theo các activity tiêu thụ overhead. Khác traditional ở hai điểm: dùng nhiều cost pool hơn, và có cả activity không chạy theo volume như batch-level activity và product-level activity.",
          },
          {
            type: "comparison",
            table: {
              title: "Thuật ngữ ABC",
              columns: ["Thuật ngữ", "Nghĩa"],
              rows: [
                {
                  label: "Activity",
                  cells: ["Sự kiện làm tiêu thụ overhead resources."],
                },
                {
                  label: "Activity cost pool",
                  cells: ["Cái xô gom chi phí của một activity."],
                },
                {
                  label: "Activity measure",
                  cells: ["Allocation base làm mẫu số cho một activity cost pool."],
                },
                {
                  label: "Activity rate",
                  cells: [
                    "Chi phí trong pool ÷ lượng activity measure; dùng để gán overhead cho sản phẩm.",
                  ],
                },
                {
                  label: "Batch-level activity",
                  cells: [
                    "Làm mỗi khi xử lý một lô, bất kể lô có bao nhiêu đơn vị, ví dụ setup máy.",
                  ],
                },
                {
                  label: "Product-level activity",
                  cells: [
                    "Liên quan từng sản phẩm cụ thể, bất kể số lô hoặc số đơn vị, ví dụ thiết kế.",
                  ],
                },
              ],
            },
          },
          {
            type: "calc",
            calc: {
              title: "Maxtar: Traditional vs ABC",
              steps: [
                {
                  label: "Traditional plantwide POHR",
                  expr: "$1,520,000 ÷ 400,000 DLHs = $3.80/DLH",
                },
                {
                  label: "Traditional unit product cost",
                  expr: "Premium: $40 DM + $24 DL + (2.0 DLH × $3.80 = $7.60) = $71.60 · Standard: $30 DM + $18 DL + (1.5 DLH × $3.80 = $5.70) = $53.70",
                },
                {
                  label: "ABC cost pools",
                  expr: "Supporting direct labor $800,000; setting up machines $480,000; parts administration $240,000; tổng MOH = $1,520,000",
                },
                {
                  label: "ABC activity rates",
                  expr: "$800,000 ÷ 400,000 DLHs = $2/DLH · $480,000 ÷ 800 setups = $600/setup · $240,000 ÷ 200 part types = $1,200/part type",
                },
                {
                  label: "Premium ABC overhead",
                  expr: "100,000 DLHs × $2 + 600 setups × $600 + 140 part types × $1,200 = $728,000; $728,000 ÷ 50,000 units = $14.56/unit",
                },
                {
                  label: "Standard ABC overhead",
                  expr: "300,000 DLHs × $2 + 200 setups × $600 + 60 part types × $1,200 = $792,000; $792,000 ÷ 200,000 units = $3.96/unit",
                },
                {
                  label: "ABC unit product cost",
                  expr: "Premium: $40 + $24 + $14.56 = $78.56 · Standard: $30 + $18 + $3.96 = $51.96",
                },
              ],
              result:
                "ABC dịch overhead từ sản phẩm high-volume (Standard ↓) sang sản phẩm low-volume (Premium ↑).",
              meaning:
                "Vì ABC dùng batch-level và product-level activity measure thay vì chỉ DLH theo volume.",
              implication:
                "Plantwide rate trợ giá chéo: sản phẩm low-volume bị tính thiếu overhead, high-volume bị tính thừa; ABC sửa điều đó.",
            },
          },
          {
            type: "callout",
            callout: {
              kind: "key",
              title: "ABC absorption costing",
              body:
                "ABC absorption costing vẫn là absorption costing: gán đủ DM, DL và cả variable lẫn fixed MOH. Điểm khác là cách phân bổ MOH theo activity thay vì một base volume duy nhất.",
            },
          },
        ],
        keyTerms: [
          {
            term: "Activity-based absorption costing",
            definition:
              "Phương pháp gán toàn bộ manufacturing overhead cho sản phẩm dựa trên các activity được thực hiện để làm ra sản phẩm.",
          },
          {
            term: "Activity cost pool",
            definition:
              "Nhóm chi phí liên quan đến một activity measure trong hệ thống ABC.",
          },
          {
            term: "Activity measure",
            definition:
              "Allocation base trong hệ thống ABC, lý tưởng là thước đo amount of activity gây ra chi phí trong cost pool.",
          },
        ],
      },
      {
        id: "s9",
        heading: "Lập BCTC cho bên ngoài: under/overapplied overhead",
        blocks: [
          {
            type: "prose",
            body:
              "Tổng overhead áp trong kỳ gần như luôn khác overhead thực phát sinh. Khi lập BCTC, chênh lệch under/overapplied thường được điều chỉnh vào COGS.",
          },
          {
            type: "comparison",
            table: {
              title: "Under vs Over applied",
              columns: ["", "Underapplied", "Overapplied"],
              rows: [
                {
                  label: "Định nghĩa",
                  cells: ["Áp < thực", "Áp > thực"],
                },
                {
                  label: "Điều chỉnh COGS",
                  cells: ["Tăng", "Giảm"],
                },
                {
                  label: "Lợi nhuận hoạt động thuần",
                  cells: ["Giảm", "Tăng"],
                },
              ],
            },
          },
          {
            type: "callout",
            callout: {
              kind: "trap",
              body:
                "Underapplied (áp THIẾU) → TĂNG COGS, GIẢM NOI. Dễ nhớ nhãn nhưng hay đảo chiều điều chỉnh.",
            },
          },
        ],
        keyTerms: [
          { term: "Underapplied overhead", definition: "Overhead áp < overhead thực; cần tăng COGS, giảm lợi nhuận hoạt động thuần." },
          { term: "Overapplied overhead", definition: "Overhead áp > overhead thực; cần giảm COGS, tăng lợi nhuận hoạt động thuần." },
        ],
      },
      {
        id: "s10",
        heading: "Job cost sheet là sổ chi tiết của BCTC",
        blocks: [
          {
            type: "prose",
            body:
              "Job cost sheet không chỉ phục vụ tính giá job; nó còn giải thích số dư trên báo cáo tài chính: job chưa hoàn thành ở WIP, xong chưa bán ở Finished Goods, đã bán chuyển sang COGS.",
          },
          {
            type: "diagram",
            diagram: {
              engine: "flow",
              title: "Job cost sheet → WIP/FG/COGS",
              layout: "horizontal",
              nodes: [
                {
                  id: "WIP",
                  label: "Work in Process",
                  group: "concept",
                  detail: "Job đang làm dở.",
                  sectionId: "s10",
                },
                {
                  id: "FG",
                  label: "Finished Goods",
                  group: "concept",
                  detail: "Job xong nhưng chưa bán — bảng cân đối kế toán.",
                  sectionId: "s10",
                },
                {
                  id: "COGS",
                  label: "Cost of Goods Sold",
                  group: "concept",
                  detail: "Job đã bán — báo cáo kết quả kinh doanh.",
                  sectionId: "s10",
                },
              ],
              edges: [
                { from: "WIP", to: "FG", label: "hoàn thành", animated: true },
                { from: "FG", to: "COGS", label: "khi bán", animated: true },
              ],
            },
          },
          {
            type: "callout",
            callout: {
              kind: "key",
              body:
                "Job cost sheet là sổ chi tiết: giải thích con số WIP, Finished Goods (trên bảng cân đối kế toán) và COGS (trên báo cáo kết quả kinh doanh).",
            },
          },
        ],
        keyTerms: [
          { term: "Work in Process", definition: "Job đang làm dở, chưa hoàn thành." },
          { term: "Finished Goods", definition: "Job đã hoàn thành nhưng chưa bán." },
          { term: "Cost of Goods Sold", definition: "Chi phí của job đã bán, ghi trên báo cáo kết quả kinh doanh." },
        ],
      },
      {
        id: "s11",
        heading: "Job-order costing trong công ty dịch vụ",
        blocks: [
          {
            type: "prose",
            body:
              "Job-order costing không chỉ dùng trong sản xuất. Các công ty dịch vụ cũng dùng khi mỗi khách hàng, hồ sơ, vụ việc hoặc ca điều trị là một job riêng.",
          },
          {
            type: "callout",
            callout: {
              kind: "realworld",
              body:
                "Không chỉ sản xuất: văn phòng luật, công ty kiểm toán, điều trị y tế — mỗi vụ/khách hàng = một job.",
            },
          },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        difficulty: "basic",
        conceptTested: "Khi nào dùng job-order costing",
        stem: "Doanh nghiệp nào ÍT phù hợp nhất với job-order costing?",
        options: [
          { id: "a", text: "Xưởng đóng tàu sản xuất tàu theo đơn đặt hàng.", isCorrect: false, rationale: "Bẫy (đảo ưu-nhược): đúng \"gu\" job-order (sản phẩm độc nhất, làm theo đơn)." },
          { id: "b", text: "Hãng phim sản xuất từng bộ phim riêng lẻ.", isCorrect: false, rationale: "Bẫy (khái niệm gần): ví dụ slide (Walt Disney) — hợp job-order." },
          { id: "c", text: "Nhà máy lọc dầu sản xuất xăng đồng nhất liên tục.", isCorrect: true, rationale: "Cơ chế: sản phẩm đồng nhất, sản xuất hàng loạt → process costing, không phải job-order. Khóa: job-order = sản phẩm KHÁC nhau, làm theo đơn." },
          { id: "d", text: "Công ty xây dựng thi công các dự án lớn.", isCorrect: false, rationale: "Bẫy (khái niệm gần): ví dụ slide (Bechtel) — hợp job-order." },
        ],
        takeaway: "Job-order = sản phẩm khác nhau, làm theo đơn; sản phẩm đồng nhất hàng loạt → process costing.",
      },
      {
        id: "q2",
        difficulty: "basic",
        conceptTested: "Cái gì truy nguyên vs phân bổ",
        stem: "Trong job-order costing, khoản chi phí nào phải được phân bổ thay vì truy nguyên trực tiếp vào job?",
        options: [
          { id: "a", text: "Direct materials.", isCorrect: false, rationale: "Bẫy (khái niệm gần): truy nguyên qua materials requisition." },
          { id: "b", text: "Direct labor.", isCorrect: false, rationale: "Bẫy (khái niệm gần): truy nguyên qua time ticket." },
          { id: "c", text: "Manufacturing overhead.", isCorrect: true, rationale: "Cơ chế: không truy nguyên được tới từng job → phân bổ qua POHR. Khóa: DM & DL = truy nguyên; MOH = phân bổ." },
          { id: "d", text: "Cả direct materials và direct labor.", isCorrect: false, rationale: "Bẫy (đảo ưu-nhược): cả hai đều được truy nguyên — đó là điểm mạnh của job-order costing." },
        ],
        takeaway: "DM và DL = truy nguyên; MOH = phân bổ. Mọi rắc rối của chương nằm ở khâu phân bổ.",
      },
      {
        id: "q3",
        difficulty: "basic",
        conceptTested: "POHR tính trước hay sau",
        stem: "Predetermined overhead rate được xác định khi nào?",
        options: [
          { id: "a", text: "Trước khi kỳ bắt đầu, dựa trên số ước tính.", isCorrect: true, rationale: "Cơ chế: để tính giá job ngay trong kỳ và tránh dao động mùa vụ. Khóa: \"predetermined\" = chốt trước kỳ." },
          { id: "b", text: "Cuối kỳ, sau khi biết overhead thực tế.", isCorrect: false, rationale: "Bẫy (ngược chiều): chờ số thực thì không định giá job trong kỳ được — chính là lý do cần POHR." },
          { id: "c", text: "Mỗi khi một job hoàn thành.", isCorrect: false, rationale: "Bẫy (khái niệm gần): tỉ lệ sẽ nhảy loạn; \"predetermined\" nghĩa là cố định trước." },
          { id: "d", text: "Khi lập báo cáo tài chính hằng năm.", isCorrect: false, rationale: "Bẫy (sai phạm trù): nhầm với bước điều chỉnh under/overapplied overhead cuối kỳ." },
        ],
        takeaway: "Predetermined = chốt trước kỳ bằng số ước tính; đừng lẫn với overhead thực cuối kỳ.",
      },
      {
        id: "q4",
        difficulty: "intermediate",
        conceptTested: "Tính POHR bằng Y = a + bX",
        stem: "Ước tính: 160.000 DLH; fixed MOH 200.000; variable MOH 2,75 mỗi DLH. POHR theo DLH là bao nhiêu?",
        options: [
          { id: "a", text: "4,00 mỗi DLH.", isCorrect: false, rationale: "Cơ chế: Y = 200.000 + 2,75×160.000 = 640.000; POHR = 640.000 ÷ 160.000 = 4,00. Khóa: POHR gộp cả fixed cost lẫn variable cost rồi mới chia cho allocation base." },
          { id: "b", text: "1,25 mỗi DLH.", isCorrect: false, rationale: "Bẫy (khái niệm gần): chỉ lấy fixed cost 200.000 ÷ 160.000; bỏ variable cost." },
          { id: "c", text: "2,75 mỗi DLH.", isCorrect: true, rationale: "Bẫy (khái niệm gần): chỉ lấy variable cost trên mỗi đơn vị, quên fixed cost phân bổ vào tỉ lệ." },
          { id: "d", text: "4.640.000.", isCorrect: false, rationale: "Bẫy (sai phạm trù): nhầm tổng MOH với tỉ lệ; chưa chia cho allocation base." },
        ],
        takeaway: "POHR gộp cả fixed cost lẫn variable cost ước tính: tính tổng MOH bằng Y=a+bX rồi mới chia cho allocation base.",
      },
      {
        id: "q5",
        difficulty: "intermediate",
        conceptTested: "Normal costing — áp overhead theo hoạt động thực",
        stem: "POHR là 4 mỗi DLH. Job A-143 dùng 8 DLH thực tế. Overhead áp vào job là bao nhiêu?",
        options: [
          { id: "a", text: "32.", isCorrect: true, rationale: "Cơ chế: áp = POHR × hoạt động THỰC của job = 4 × 8. Khóa: DM/DL dùng số thực, MOH dùng số áp." },
          { id: "b", text: "640.000.", isCorrect: false, rationale: "Bẫy (sai phạm trù): đó là tổng MOH ước tính của cả kỳ, không phải của một job." },
          { id: "c", text: "Overhead thực tế mà job đó gây ra.", isCorrect: false, rationale: "Bẫy (khái niệm gần): normal costing dùng số ÁP (POHR × giờ), không dùng MOH thực từng job (không đo được)." },
          { id: "d", text: "4.", isCorrect: false, rationale: "Bẫy (khái niệm gần): mới là tỉ lệ, chưa nhân số giờ." },
        ],
        takeaway: "Overhead áp = POHR chốt trước × mức hoạt động thực của job; DM/DL dùng số thực, MOH dùng số áp.",
      },
      {
        id: "q6",
        difficulty: "intermediate",
        conceptTested: "Quick Check 1 — tổng chi phí một job",
        stem: "Job WR53 cần 200 direct materials và 10 DLH với giá 15 mỗi giờ. Tổng overhead ước tính cả năm là 760.000 và DLH ước tính là 20.000. Chi phí ghi nhận cho Job WR53 là bao nhiêu?",
        options: [
          { id: "a", text: "730.", isCorrect: false, rationale: "Cơ chế: POHR = 760.000 ÷ 20.000 = 38/DLH; DM 200 + DL 150 + MOH (38×10=380) = 730. Khóa: tổng chi phí job = DM + DL + MOH áp." },
          { id: "b", text: "200.", isCorrect: false, rationale: "Bẫy (khái niệm gần): chỉ mới DM, bỏ DL và MOH áp." },
          { id: "c", text: "350.", isCorrect: false, rationale: "Bẫy (khái niệm gần): mới DM + DL (200 + 150), quên áp overhead." },
          { id: "d", text: "380.", isCorrect: true, rationale: "Bẫy (khái niệm gần): chỉ mỗi MOH áp (38×10), bỏ DM và DL." },
        ],
        takeaway: "Tổng chi phí job = DM + DL + MOH áp; thiếu một cấu phần là rơi vào đúng bẫy.",
      },
      {
        id: "q7",
        difficulty: "intermediate",
        conceptTested: "Unit product cost",
        stem: "Job A-143 có tổng chi phí là 268 và hoàn thành 2 đơn vị. Chi phí sản phẩm trên mỗi đơn vị là bao nhiêu?",
        options: [
          { id: "a", text: "134.", isCorrect: false, rationale: "Cơ chế: 268 ÷ 2. Khóa: chi phí sản phẩm trên mỗi đơn vị = tổng chi phí job ÷ số đơn vị hoàn thành." },
          { id: "b", text: "268.", isCorrect: true, rationale: "Bẫy (khái niệm gần): đó là TỔNG job, chưa chia số đơn vị." },
          { id: "c", text: "536.", isCorrect: false, rationale: "Bẫy (ngược chiều): nhân thay vì chia." },
          { id: "d", text: "Không thể xác định nếu chưa biết giá bán.", isCorrect: false, rationale: "Bẫy (sai phạm trù): chi phí sản phẩm trên mỗi đơn vị độc lập với giá bán/markup." },
        ],
        takeaway: "Chi phí sản phẩm trên mỗi đơn vị = tổng chi phí job ÷ số đơn vị hoàn thành; đừng lẫn với giá bán.",
      },
      {
        id: "q8",
        difficulty: "intermediate",
        conceptTested: "Cost driver & lý do dùng allocation base",
        stem: "Vì sao allocation base lý tưởng nên là một cost driver?",
        options: [
          { id: "a", text: "Vì cost driver là yếu tố gây ra overhead, nên phân bổ theo nó giúp chi phí job chính xác hơn.", isCorrect: true, rationale: "Cơ chế: allocation base phải phản ánh được cost driver của overhead thì giá job mới đúng. Khóa: allocation base sai → giá job sai → quyết định sai." },
          { id: "b", text: "Vì DLH luôn là cost driver duy nhất của overhead.", isCorrect: false, rationale: "Bẫy (tuyệt đối hóa): slide nói giả định này \"quá đơn giản và sai\"." },
          { id: "c", text: "Vì allocation base nào cũng cho cùng kết quả.", isCorrect: false, rationale: "Bẫy (khái niệm gần): đổi allocation base làm đổi cả tổng chi phí lẫn giá bán (plantwide vs departmental)." },
          { id: "d", text: "Để không cần ước tính overhead.", isCorrect: false, rationale: "Bẫy (sai phạm trù): vẫn phải ước tính MOH; allocation base không thay thế việc đó." },
        ],
        takeaway: "Allocation base tốt = cost driver thật; chọn allocation base sai → giá job sai → quyết định sai.",
      },
      {
        id: "q9",
        difficulty: "advanced",
        conceptTested: "Plantwide vs multiple/departmental rate",
        stem: "Vì sao nhiều predetermined overhead rates theo bộ phận thường chính xác hơn một plantwide rate?",
        options: [
          { id: "a", text: "Vì mỗi bộ phận có cost driver khác nhau (ví dụ Milling chạy theo giờ máy, Assembly theo giờ lao động), nên tỉ lệ riêng phản ánh đúng hơn cách job dùng overhead.", isCorrect: false, rationale: "Cơ chế: mỗi bộ phận theo cost driver của nó → job đi qua nhiều bộ phận được tính đúng hơn. Khóa: một tỉ lệ giả định cả nhà máy chung một cost driver." },
          { id: "b", text: "Vì chúng luôn tạo ra tổng chi phí thấp hơn.", isCorrect: true, rationale: "Bẫy (đảo ưu-nhược): cho con số CHÍNH XÁC hơn, không phải THẤP hơn." },
          { id: "c", text: "Vì plantwide rate không thể tính chi phí đơn vị.", isCorrect: false, rationale: "Bẫy (khái niệm gần): vẫn tính được, chỉ kém chính xác." },
          { id: "d", text: "Vì nhiều tỉ lệ loại bỏ nhu cầu ước tính trước.", isCorrect: false, rationale: "Bẫy (sai phạm trù): vẫn phải tính trước cho từng bộ phận." },
        ],
        takeaway: "Một rate giả định cả nhà máy chung một cost driver; nhiều rate cho phép từng bộ phận theo cost driver của nó.",
      },
      {
        id: "q10",
        difficulty: "advanced",
        conceptTested: "Cost-plus pricing với multiple rate (Dickson Job 407)",
        stem: "Job 407: tổng direct materials là 1.170 và tổng direct labor là 350; overhead áp là Milling 90 MH × 8,50 và Assembly 20 DLH × 10. Với markup 75% trên tổng chi phí, giá bán là bao nhiêu?",
        options: [
          { id: "a", text: "4.348,75.", isCorrect: true, rationale: "Cơ chế: MOH = 765 + 200 = 965; tổng chi phí = 1.170 + 350 + 965 = 2.485; giá bán = 2.485 × 1,75. Khóa: giá bán = tổng chi phí + tổng chi phí × markup, và áp ĐÚNG allocation base từng bộ phận." },
          { id: "b", text: "1.863,75.", isCorrect: false, rationale: "Bẫy (khái niệm gần): đó mới là PHẦN markup (2.485 × 75%), chưa cộng vào tổng chi phí." },
          { id: "c", text: "2.485.", isCorrect: false, rationale: "Bẫy (khái niệm gần): tổng chi phí, chưa cộng markup." },
          { id: "d", text: "4.243,75.", isCorrect: false, rationale: "Bẫy (đảo/gộp sai): dùng nhầm allocation base (Assembly theo MH thay vì DLH) → sai overhead áp." },
        ],
        takeaway: "Giá bán = tổng chi phí + tổng chi phí × markup, và phải áp đúng allocation base của từng bộ phận.",
      },
      {
        id: "q11",
        difficulty: "advanced",
        conceptTested: "Under/overapplied overhead & chiều điều chỉnh COGS",
        stem: "Cuối năm, overhead đã áp nhỏ hơn overhead thực tế phát sinh. Kết quả là gì?",
        options: [
          { id: "a", text: "Overhead bị underapplied → tăng COGS, giảm lợi nhuận hoạt động thuần.", isCorrect: true, rationale: "Cơ chế: áp thiếu nghĩa là chi phí ghi chưa đủ → phải tăng COGS. Khóa: áp < thực = underapplied → tăng COGS, giảm lợi nhuận hoạt động thuần." },
          { id: "b", text: "Overhead bị overapplied → giảm COGS.", isCorrect: false, rationale: "Bẫy (ngược chiều): overapplied là áp NHIỀU hơn thực; ở đây ngược lại." },
          { id: "c", text: "Không ảnh hưởng đến COGS, vì đã dùng POHR.", isCorrect: false, rationale: "Bẫy (khái niệm gần): chính vì POHR là ước tính nên cuối kỳ phải điều chỉnh chênh lệch." },
          { id: "d", text: "Underapplied → giảm COGS, tăng lợi nhuận hoạt động thuần.", isCorrect: false, rationale: "Bẫy (ngược chiều): sai chiều điều chỉnh — áp thiếu phải TĂNG COGS." },
        ],
        takeaway: "Áp < thực = underapplied → tăng COGS, giảm lợi nhuận hoạt động thuần; áp > thực = overapplied → ngược lại.",
      },
      {
        id: "q12",
        difficulty: "basic",
        conceptTested: "Job cost sheet ↔ tài khoản tồn kho/BCTC",
        stem: "Một job đã hoàn thành nhưng chưa bán. Chi phí của job đó được báo cáo ở đâu?",
        options: [
          { id: "a", text: "Finished Goods (trên bảng cân đối kế toán).", isCorrect: false, rationale: "Cơ chế: hoàn thành mà chưa bán → tồn kho thành phẩm. Khóa: đang làm → WIP; xong chưa bán → Finished Goods; đã bán → COGS." },
          { id: "b", text: "Work in Process.", isCorrect: true, rationale: "Bẫy (khái niệm gần): WIP là job ĐANG làm dở, chưa hoàn thành." },
          { id: "c", text: "Cost of Goods Sold.", isCorrect: false, rationale: "Bẫy (ngược chiều): chỉ khi ĐÃ bán mới chuyển sang COGS." },
          { id: "d", text: "Chi phí ghi nhận ngay trong kỳ hiện tại.", isCorrect: false, rationale: "Bẫy (sai phạm trù): chi phí sản xuất là product cost, nằm chờ trong tồn kho tới khi bán." },
        ],
        takeaway: "Job cost sheet là sổ chi tiết: đang làm → WIP; xong chưa bán → Finished Goods; đã bán → COGS.",
      },
      {
        id: "q13",
        difficulty: "advanced",
        conceptTested: "Activity-based absorption costing",
        stem: "Khi chuyển từ plantwide rate sang ABC có batch-level và product-level activity, overhead thường dịch chuyển thế nào?",
        options: [
          {
            id: "a",
            text: "Từ sản phẩm high-volume sang sản phẩm low-volume.",
            isCorrect: true,
            rationale:
              "Cơ chế: traditional plantwide rate theo DLH gắn overhead với volume; ABC đưa batch-level và product-level activity vào nên sản phẩm low-volume nhưng nhiều setup/part type nhận thêm overhead. Bẫy: tưởng tổng overhead đổi. Khóa: tổng overhead không đổi, chỉ cách phân bổ đổi.",
          },
          {
            id: "b",
            text: "Từ sản phẩm low-volume sang sản phẩm high-volume.",
            isCorrect: false,
            rationale:
              "Cơ chế: đây là chiều ngược với ví dụ Maxtar. Bẫy: nghĩ sản phẩm high-volume luôn phải nhận nhiều overhead hơn. Khóa: batch/product-level activity có thể làm low-volume nhận nhiều overhead hơn trên mỗi đơn vị.",
          },
          {
            id: "c",
            text: "Không đổi vì tổng manufacturing overhead vẫn là $1,520,000.",
            isCorrect: false,
            rationale:
              "Cơ chế: tổng overhead đúng là không đổi, nhưng pool và activity rate đổi cách gán overhead cho từng sản phẩm. Bẫy: nhầm tổng chi phí với phân bổ chi phí. Khóa: ABC thay đổi distribution, không thay đổi total MOH.",
          },
          {
            id: "d",
            text: "Chỉ đổi nếu tổng manufacturing overhead thay đổi.",
            isCorrect: false,
            rationale:
              "Cơ chế: Maxtar có cùng tổng MOH $1,520,000 nhưng unit product cost vẫn đổi. Bẫy: nghĩ phải đổi tử số mới đổi kết quả. Khóa: đổi allocation base và activity measure cũng đủ làm đổi unit cost.",
          },
        ],
        takeaway:
          "ABC thường dịch overhead từ high-volume sang low-volume khi low-volume tiêu thụ nhiều batch-level hoặc product-level activity.",
      },
    ],
  },
  {
    slug: "job-order-cost-flows",
    order: 3,
    title: "Chapter 3 — Job-Order Costing: Cost Flows and External Reporting",
    bigIdea:
      "Sau khi tính được chi phí từng job ở Chương 2, chương này theo dòng chi phí chạy qua sổ sách: từ bút toán mua/xuất NVL → Work in Process → Finished Goods → Cost of Goods Sold, lập schedule of cost of goods manufactured/cost of goods sold, và xử lý underapplied/overapplied overhead khi lên báo cáo cho bên ngoài.",
    learningObjectives: [
      "LO1 — Hiểu dòng luân chuyển chi phí trong job-order costing và lập journal entries ghi nhận chi phí.",
      "LO2 — Dùng T-account để biểu diễn dòng chi phí.",
      "LO3 — Lập schedule of cost of goods manufactured, cost of goods sold và income statement.",
      "LO4 — Tính underapplied/overapplied overhead và lập bút toán đóng số dư Manufacturing Overhead.",
    ],
    status: "ready",
    source:
      "Garrison, Noreen, Brewer — Managerial Accounting, 17e, Chapter 3 (slide '3. Job order costing b')",
    knowledgeMap: {
      engine: "flow",
      title: "Knowledge map — Cost Flows",
      layout: "tree",
      collapsible: true,
      caption:
        "Bấm từng chip để xem detail; dùng nút Đến phần học để nhảy tới mục liên quan.",
      nodes: [
        {
          id: "flows",
          label: "Cost Flows",
          group: "concept",
          detail: "Theo dấu chi phí job chạy qua sổ sách tới báo cáo.",
          sectionId: "s1",
        },
        {
          id: "vocab",
          label: "Thuật ngữ",
          group: "purpose",
          parent: "flows",
          detail:
            "Ba term nền tảng giải thích cách chi phí sản xuất được tính vào job.",
          sectionId: "s0",
        },
        {
          id: "v-absorption",
          label: "Absorption costing",
          group: "term",
          parent: "vocab",
          detail:
            "Absorption costing tính vào product cost tất cả DM, DL và cả variable lẫn fixed MOH.",
          sectionId: "s0",
        },
        {
          id: "v-normal",
          label: "Normal costing",
          group: "term",
          parent: "vocab",
          detail:
            "Normal costing dùng POHR để áp manufacturing overhead vào job theo mức hoạt động thực tế.",
          sectionId: "s0",
        },
        {
          id: "v-pohr",
          label: "POHR",
          group: "term",
          parent: "vocab",
          detail:
            "POHR bằng estimated total MOH chia estimated allocation base, dùng để áp overhead trước khi biết số thực tế.",
          sectionId: "s0",
        },
        {
          id: "flow",
          label: "LO1·2 Dòng & bút toán",
          group: "lo",
          parent: "flows",
          detail:
            "Journal entries cho thấy chi phí đi từ Raw Materials, MOH, WIP, FG tới COGS.",
          sectionId: "s2",
        },
        {
          id: "f-rm",
          label: "Mua/xuất NVL",
          group: "concept",
          parent: "flow",
          detail:
            "Direct materials đi thẳng vào Work in Process; indirect materials đi qua Manufacturing Overhead.",
          sectionId: "s2",
        },
        {
          id: "f-labor",
          label: "Lao động",
          group: "concept",
          parent: "flow",
          detail:
            "Direct labor vào Work in Process; indirect labor được gom vào Manufacturing Overhead.",
          sectionId: "s3",
        },
        {
          id: "f-moh",
          label: "Overhead thực vs áp",
          group: "concept",
          parent: "flow",
          detail:
            "Actual MOH gom bên Nợ Manufacturing Overhead, applied MOH ghi bên Có để chuyển vào WIP.",
          sectionId: "s3",
        },
        {
          id: "f-taccount",
          label: "T-account",
          group: "concept",
          parent: "flow",
          detail:
            "T-account giúp nhìn cùng lúc dòng RM → WIP → FG → COGS và dòng MOH áp vào WIP.",
          sectionId: "s4",
        },
        {
          id: "sched",
          label: "LO3 Schedule",
          group: "lo",
          parent: "flows",
          detail:
            "Schedule nối chi phí sản xuất trong kỳ với hàng hoàn thành và hàng đã bán.",
          sectionId: "s7",
        },
        {
          id: "s-cogm",
          label: "Cost of goods manufactured",
          group: "term",
          parent: "sched",
          detail:
            "Cost of goods manufactured là chi phí sản xuất của hàng hoàn thành trong kỳ.",
          sectionId: "s7",
        },
        {
          id: "s-cogs",
          label: "Cost of goods sold",
          group: "term",
          parent: "sched",
          detail:
            "Cost of goods sold là phần chi phí của finished goods đã được bán trong kỳ.",
          sectionId: "s8",
        },
        {
          id: "s-is",
          label: "Income statement",
          group: "term",
          parent: "sched",
          detail:
            "Income statement nhận COGS và period expenses để tính net operating income.",
          sectionId: "s8",
        },
        {
          id: "adj",
          label: "LO4 Điều chỉnh",
          group: "lo",
          parent: "flows",
          detail:
            "Cuối kỳ phải xử lý chênh lệch giữa actual MOH và applied MOH.",
          sectionId: "s9",
        },
        {
          id: "a-uoa",
          label: "Under/overapplied",
          group: "term",
          parent: "adj",
          detail:
            "Underapplied xảy ra khi applied MOH nhỏ hơn actual MOH; overapplied là chiều ngược lại.",
          sectionId: "s9",
        },
        {
          id: "a-close",
          label: "Đóng vào COGS",
          group: "concept",
          parent: "adj",
          detail:
            "Cách đơn giản là đóng toàn bộ số dư Manufacturing Overhead vào Cost of Goods Sold.",
          sectionId: "s10",
        },
        {
          id: "a-alloc",
          label: "Phân bổ WIP/FG/COGS",
          group: "concept",
          parent: "adj",
          detail:
            "Cách chính xác hơn là phân bổ chênh lệch cho WIP, FG và COGS theo overhead đã áp còn nằm ở từng nơi.",
          sectionId: "s10",
        },
      ],
      edges: [
        { from: "flows", to: "vocab" },
        { from: "vocab", to: "v-absorption" },
        { from: "vocab", to: "v-normal" },
        { from: "vocab", to: "v-pohr" },
        { from: "flows", to: "flow" },
        { from: "flow", to: "f-rm" },
        { from: "flow", to: "f-labor" },
        { from: "flow", to: "f-moh" },
        { from: "flow", to: "f-taccount" },
        { from: "flows", to: "sched" },
        { from: "sched", to: "s-cogm" },
        { from: "sched", to: "s-cogs" },
        { from: "sched", to: "s-is" },
        { from: "flows", to: "adj" },
        { from: "adj", to: "a-uoa" },
        { from: "adj", to: "a-close" },
        { from: "adj", to: "a-alloc" },
      ],
    },
    sections: [
      {
        id: "s0",
        heading: "Ôn thuật ngữ & Absorption costing",
        blocks: [
          {
            type: "comparison",
            table: {
              title: "Thuật ngữ nền tảng",
              columns: ["Thuật ngữ", "Nghĩa"],
              rows: [
                {
                  label: "Absorption costing",
                  cells: [
                    "Tính vào giá sản phẩm TẤT CẢ chi phí sản xuất: DM, DL, và cả variable lẫn fixed MOH.",
                  ],
                },
                {
                  label: "Normal costing",
                  cells: [
                    "MOH áp = POHR × mức hoạt động THỰC của job.",
                  ],
                },
                {
                  label: "POHR",
                  cells: ["Estimated total MOH ÷ estimated allocation base."],
                },
              ],
            },
          },
          {
            type: "callout",
            callout: {
              kind: "note",
              title: "Trọng tâm chương",
              body: "Chương này không có công thức mới — trọng tâm là DÒNG chi phí chạy qua tài khoản và báo cáo.",
            },
          },
        ],
      },
      {
        id: "s1",
        heading: "Bức tranh dòng chi phí (Ruger)",
        blocks: [
          {
            type: "prose",
            body: "Ruger Corporation trong tháng 4 cho ta một case đầy đủ để theo dấu cost flow trong job-order costing. Chi phí bắt đầu ở raw materials, đi vào work in process khi dùng cho job, chuyển sang finished goods khi job hoàn thành, rồi thành cost of goods sold khi bán.\n\nRaw materials là nguyên vật liệu còn trong kho. Work in process là chi phí của job đang làm dở. Finished goods là chi phí của job đã hoàn thành nhưng chưa bán. Cost of goods manufactured là chi phí sản xuất của hàng HOÀN THÀNH trong kỳ.",
          },
          {
            type: "callout",
            callout: {
              kind: "realworld",
              title: "Tình huống Ruger",
              body: "Beg WIP = $30,000 cho Job A, bắt đầu từ tháng 3 và hoàn thành trong tháng 4. Job B bắt đầu trong tháng 4 nhưng chưa hoàn thành cuối kỳ, nên còn lại trong WIP $72,000.",
            },
          },
        ],
      },
      {
        id: "s2",
        heading: "Bút toán: mua & xuất nguyên vật liệu",
        blocks: [
          {
            type: "comparison",
            table: {
              title: "Journal entries — NVL",
              columns: ["Bút toán", "Nợ (Dr)", "Có (Cr)"],
              rows: [
                {
                  label: "(1) Mua RM",
                  cells: [
                    "Raw Materials 60,000",
                    "Accounts Payable 60,000",
                  ],
                },
                {
                  label: "(2) Xuất kho",
                  cells: [
                    "Work in Process 50,000 / Manufacturing Overhead 2,000",
                    "Raw Materials 52,000",
                  ],
                },
              ],
            },
          },
        ],
        examples: [
          {
            title: "Đọc bút toán (2)",
            body: "Indirect materials $2,000 KHÔNG vào WIP mà vào Manufacturing Overhead.",
            meaning:
              "Chỉ direct materials truy nguyên thẳng vào job (WIP); indirect đi vòng qua MOH.",
            implication:
              "Nếu nhét nhầm indirect vào WIP, chi phí job bị thổi phồng và MOH áp sẽ sai.",
          },
        ],
      },
      {
        id: "s3",
        heading: "Bút toán: lao động & overhead (thực vs áp)",
        blocks: [
          {
            type: "comparison",
            table: {
              title: "Journal entries — labor & MOH",
              columns: ["Bút toán", "Nợ (Dr)", "Có (Cr)"],
              rows: [
                {
                  label: "(3) Lao động",
                  cells: [
                    "Work in Process 60,000 / Manufacturing Overhead 15,000",
                    "Salaries & Wages Payable 75,000",
                  ],
                },
                {
                  label: "(4) MOH thực khác",
                  cells: [
                    "Manufacturing Overhead 40,000",
                    "Accounts Payable 40,000",
                  ],
                },
                {
                  label: "(5) Áp MOH",
                  cells: [
                    "Work in Process 90,000",
                    "Manufacturing Overhead 90,000",
                  ],
                },
              ],
            },
          },
          {
            type: "callout",
            callout: {
              kind: "trap",
              title: "Hai vế của MOH",
              body: "MOH có HAI vế: bên Nợ gom chi phí THỰC (indirect materials $2,000 + indirect labor $15,000 + chi phí khác $40,000 = $57,000), bên Có là số ÁP ($90,000). Hai số này hầu như không bằng nhau → sinh underapplied/overapplied overhead.",
            },
          },
        ],
      },
      {
        id: "s4",
        heading: "T-account: dòng chảy chi phí",
        blocks: [
          {
            type: "diagram",
            diagram: {
              engine: "flow",
              title: "T-account cost flow",
              layout: "horizontal",
              nodes: [
                {
                  id: "RM",
                  label: "Raw Materials",
                  group: "concept",
                  detail:
                    "Mua vào; xuất ra: direct → WIP, indirect → MOH.",
                  sectionId: "s4",
                },
                {
                  id: "MOH",
                  label: "Manufacturing Overhead",
                  group: "concept",
                  detail:
                    "Bên Nợ = chi phí thực; bên Có = số áp vào WIP.",
                  sectionId: "s4",
                },
                {
                  id: "WIP",
                  label: "Work in Process",
                  group: "concept",
                  detail:
                    "Nhận DM, DL, MOH áp; job xong chuyển sang FG.",
                  sectionId: "s4",
                },
                {
                  id: "FG",
                  label: "Finished Goods",
                  group: "concept",
                  detail: "Job hoàn thành chờ bán.",
                  sectionId: "s4",
                },
                {
                  id: "COGS",
                  label: "Cost of Goods Sold",
                  group: "concept",
                  detail:
                    "Job đã bán → chi phí trên Income Statement.",
                  sectionId: "s4",
                },
              ],
              edges: [
                { from: "RM", to: "WIP", animated: true },
                { from: "RM", to: "MOH", label: "indirect" },
                { from: "MOH", to: "WIP", label: "áp", animated: true },
                { from: "WIP", to: "FG", animated: true },
                { from: "FG", to: "COGS", label: "khi bán", animated: true },
              ],
            },
          },
          {
            type: "callout",
            callout: {
              kind: "key",
              title: "Khung xương của chương",
              body: "Sơ đồ này là khung xương của cả chương — mọi bút toán chỉ là một mũi tên trên đây.",
            },
          },
        ],
      },
      {
        id: "s5",
        heading: "Chi phí ngoài sản xuất (nonmanufacturing)",
        blocks: [
          {
            type: "callout",
            callout: {
              kind: "note",
              title: "Không gán vào job",
              body: "S&A salaries $30,000, depreciation office equipment $7,000, advertising $42,000 + other S&A $8,000 — KHÔNG gán vào job, ghi thẳng period expense.",
            },
          },
        ],
      },
      {
        id: "s6",
        heading: "Hoàn thành & bán job",
        blocks: [
          {
            type: "calc",
            calc: {
              title: "Job A: hoàn thành & bán",
              steps: [
                {
                  label: "Chuyển WIP → Finished Goods khi xong",
                  expr: "Dr Finished Goods 158,000 / Cr Work in Process 158,000",
                },
                {
                  label: "Unit product cost",
                  expr: "158,000 ÷ 1,000 đơn vị = $158",
                },
                {
                  label: "Bán 750 đơn vị",
                  expr: "COGS = 750 × $158 = $118,500",
                },
              ],
              result: "$118,500",
              meaning:
                "Chỉ phần ĐÃ BÁN (750/1,000) thành COGS; 250 đơn vị còn lại nằm trong Finished Goods.",
              implication:
                "Sản xuất xong ≠ thành chi phí; chi phí chỉ rơi vào Income Statement đúng lúc bán.",
            },
          },
          {
            type: "callout",
            callout: {
              kind: "note",
              title: "Job B cuối kỳ",
              body: "Job B chưa xong → WIP cuối kỳ $72,000 ở lại Balance Sheet.",
            },
          },
        ],
      },
      {
        id: "s7",
        heading: "Schedule of Cost of Goods Manufactured (LO3)",
        blocks: [
          {
            type: "calc",
            calc: {
              title: "Schedule of COGM",
              steps: [
                {
                  label: "Raw Materials available",
                  expr: "Beg RM 32,000 + purchases 276,000 = 308,000",
                },
                {
                  label: "Direct materials used",
                  expr: "308,000 − End RM 28,000 = 280,000",
                },
                {
                  label: "Total manufacturing cost",
                  expr: "DM used 280,000 + DL 375,000 + MOH applied 180,000 = 835,000",
                },
                {
                  label: "Điều chỉnh WIP đầu/cuối kỳ",
                  expr: "835,000 + Beg WIP 125,000 − End WIP 200,000",
                },
              ],
              result: "COGM = 760,000",
              meaning:
                "COGM = chi phí sản xuất của hàng HOÀN THÀNH trong kỳ, không phải toàn bộ chi phí bỏ ra.",
              implication:
                "Lẫn total manufacturing cost với COGM là bẫy kinh điển — phải cộng/trừ tồn kho WIP.",
            },
          },
          {
            type: "callout",
            callout: {
              kind: "trap",
              title: "Direct materials used",
              body: "Direct materials used = Beg RM + mua − End RM, KHÔNG bằng số mua.",
            },
          },
        ],
      },
      {
        id: "s8",
        heading: "Schedule of COGS & Income Statement (LO3)",
        blocks: [
          {
            type: "calc",
            calc: {
              title: "Từ COGM tới COGS",
              steps: [
                {
                  label: "Goods available for sale",
                  expr: "Beg Finished Goods 130,000 + COGM 760,000 = 890,000",
                },
                {
                  label: "Trừ End Finished Goods",
                  expr: "890,000 − 150,000",
                },
              ],
              result: "COGS = 740,000",
              meaning:
                "COGS chỉ tính phần thành phẩm ĐÃ BÁN; phần tồn FG cuối kỳ ở lại Balance Sheet.",
              implication:
                "Cùng một COGM, COGS đổi theo tồn kho FG đầu/cuối kỳ → đừng đánh đồng hai con số.",
            },
          },
        ],
      },
      {
        id: "s9",
        heading: "Under/overapplied overhead — cách tính (LO4)",
        blocks: [
          {
            type: "calc",
            calc: {
              title: "PearCo: under hay over?",
              steps: [
                {
                  label: "Applied MOH",
                  expr: "$4.00 × 170,000 DLH = 680,000",
                },
                {
                  label: "Actual overhead",
                  expr: "650,000",
                },
                {
                  label: "So sánh",
                  expr: "Applied 680,000 > actual 650,000",
                },
              ],
              result: "Overapplied 30,000",
              meaning:
                "Overapplied = đã áp NHIỀU hơn chi phí thực → trước đó tính giá job hơi cao.",
              implication:
                "Phải điều chỉnh để báo cáo phản ánh chi phí thực.",
            },
          },
        ],
        examples: [
          {
            title: "Quick Check — Tiger",
            body: "Applied = $4.00 × 290,000 MH = 1,160,000; actual = 1,210,000.",
            meaning:
              "Áp 1,160,000 < thực 1,210,000 → underapplied 50,000.",
            implication:
              "Underapplied → thiếu chi phí trên sổ → phải TĂNG COGS, GIẢM net operating income.",
          },
        ],
        keyTerms: [
          {
            term: "Underapplied overhead",
            definition:
              "Số dư Nợ (debit) trong tài khoản Manufacturing Overhead, xảy ra khi overhead áp vào Work in Process nhỏ hơn overhead thực phát sinh trong kỳ; khi đóng vào COGS sẽ tăng COGS và giảm NOI.",
          },
          {
            term: "Overapplied overhead",
            definition:
              "Số dư Có (credit) trong tài khoản Manufacturing Overhead, xảy ra khi overhead áp vào Work in Process lớn hơn overhead thực phát sinh trong kỳ; khi đóng vào COGS sẽ giảm COGS và tăng NOI.",
          },
        ],
      },
      {
        id: "s10",
        heading: "Disposition của under/overapplied (LO4)",
        blocks: [
          {
            type: "comparison",
            table: {
              title: "Hai cách đóng số dư MOH",
              columns: ["", "Đóng vào COGS", "Phân bổ tỉ lệ"],
              rows: [
                {
                  label: "Cách làm",
                  cells: [
                    "Đóng toàn bộ số dư MOH vào Cost of Goods Sold.",
                    "Chia theo overhead áp còn nằm trong WIP, FG, COGS.",
                  ],
                },
                {
                  label: "Độ chính xác",
                  cells: ["Đơn giản.", "Chính xác hơn, phức tạp hơn."],
                },
              ],
            },
          },
          {
            type: "calc",
            calc: {
              title: "Phân bổ $30,000 overapplied (PearCo)",
              steps: [
                {
                  label: "Overhead áp đang nằm ở đâu",
                  expr: "WIP 68,000 (10%) · FG 204,000 (30%) · COGS 408,000 (60%) — tổng 680,000",
                },
                {
                  label: "Phân bổ 30,000 theo %",
                  expr: "WIP 3,000 · FG 9,000 · COGS 18,000",
                },
                {
                  label: "Bút toán phân bổ overapplied",
                  expr: "Dr Manufacturing Overhead 30,000 / Cr WIP 3,000, FG 9,000, COGS 18,000",
                },
              ],
              result:
                "Overapplied 30,000 được giảm khỏi WIP 3,000, FG 9,000 và COGS 18,000.",
              meaning:
                "Cách phân bổ trả overhead về đúng nơi nó đang “đậu” (WIP/FG/COGS).",
              implication:
                "Đóng thẳng vào COGS nhanh nhưng kém chính xác khi tồn kho WIP/FG lớn.",
            },
          },
          {
            type: "callout",
            callout: {
              kind: "key",
              title: "Chiều ảnh hưởng",
              body: "Underapplied → TĂNG COGS, GIẢM NOI. Overapplied → GIẢM COGS, TĂNG NOI.",
            },
          },
          {
            type: "callout",
            callout: {
              kind: "note",
              title: "Appendix 3A — Excel-based approach",
              body:
                "Sách có phụ lục hướng dẫn dựng job-order costing bằng Microsoft Excel. Thuần kỹ thuật bảng tính, không thêm lý thuyết kế toán mới — logic vẫn là dòng chi phí RM→WIP→FG→COGS và POHR đã học. Khi cần thực hành, dựng workbook theo Exhibit 3A trong sách.",
            },
          },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        difficulty: "basic",
        conceptTested: "Under/overapplied overhead",
        stem: "Khi nào sinh underapplied/overapplied overhead?",
        options: [
          {
            id: "a",
            text: "Khi MOH áp (POHR × mức hoạt động thực tế) khác MOH thực tế.",
            isCorrect: true,
            rationale:
              "Cơ chế: chênh lệch xuất hiện khi applied MOH không bằng actual MOH. Bẫy: không cần POHR “sai”; chỉ cần số áp và số thực khác nhau. Khóa: luôn so applied MOH với actual MOH.",
          },
          {
            id: "b",
            text: "Chỉ khi POHR được tính sai từ đầu kỳ.",
            isCorrect: false,
            rationale:
              "Cơ chế: POHR là ước tính hợp lệ, nhưng activity và actual MOH vẫn có thể lệch dự toán. Bẫy: nhầm nguyên nhân POHR tính sai với bản chất under/overapplied overhead. Khóa: tiêu chí là applied MOH khác actual MOH.",
          },
          {
            id: "c",
            text: "Chỉ khi doanh nghiệp quên áp overhead vào job.",
            isCorrect: false,
            rationale:
              "Cơ chế: nếu quên áp overhead thì lỗi ghi sổ xảy ra, nhưng under/overapplied overhead chuẩn là chênh giữa số đã áp và số thực. Bẫy: nhầm lỗi bỏ sót bút toán với cơ chế bình thường của normal costing. Khóa: vẫn phải có applied MOH để so với actual MOH.",
          },
          {
            id: "d",
            text: "Khi direct materials khác direct labor.",
            isCorrect: false,
            rationale:
              "Cơ chế: direct materials và direct labor là chi phí truy nguyên vào job, không tạo số dư Manufacturing Overhead. Bẫy: kéo nhầm prime cost vào câu hỏi overhead. Khóa: under/overapplied chỉ thuộc Manufacturing Overhead.",
          },
        ],
        takeaway:
          "Under/overapplied overhead = applied MOH khác actual MOH; khóa là so hai vế của Manufacturing Overhead.",
      },
      {
        id: "q2",
        difficulty: "intermediate",
        conceptTested: "Direct materials used",
        stem: "Beg RM 32,000; mua 276,000; End RM 28,000. Direct materials used là bao nhiêu?",
        options: [
          {
            id: "a",
            text: "280,000.",
            isCorrect: true,
            rationale:
              "Cơ chế: Direct materials used = Beg RM 32,000 + mua 276,000 − End RM 28,000 = 280,000. Bẫy: số mua không tự động bằng số đã dùng. Khóa: luôn tính RM available rồi trừ End RM.",
          },
          {
            id: "b",
            text: "276,000.",
            isCorrect: false,
            rationale:
              "Cơ chế: số mua chỉ là purchases, chưa xét tồn kho đầu/cuối. Bẫy: lấy số mua làm direct materials used. Khóa: phải cộng Beg RM và trừ End RM.",
          },
          {
            id: "c",
            text: "308,000.",
            isCorrect: false,
            rationale:
              "Cơ chế: 308,000 là Raw Materials available, chưa trừ End RM. Bẫy: dừng giữa công thức. Khóa: direct materials used = available − End RM.",
          },
          {
            id: "d",
            text: "2,000.",
            isCorrect: false,
            rationale:
              "Cơ chế: 2,000 chỉ là chênh lệch giữa Beg RM và End RM, bỏ qua purchases. Bẫy: chỉ nhìn biến động tồn kho. Khóa: purchases là phần chính của RM available.",
          },
        ],
        takeaway:
          "Direct materials used = Beg RM + purchases − End RM = 280,000.",
      },
      {
        id: "q3",
        difficulty: "intermediate",
        conceptTested: "Total manufacturing cost",
        stem: "DM used 280,000 + DL 375,000 + MOH applied 180,000. Total manufacturing cost là bao nhiêu?",
        options: [
          {
            id: "a",
            text: "835,000.",
            isCorrect: true,
            rationale:
              "Cơ chế: total manufacturing cost = DM used + DL + MOH applied = 280,000 + 375,000 + 180,000. Bẫy: bỏ một trong ba thành phần product cost. Khóa: đủ ba mảnh DM, DL, MOH.",
          },
          {
            id: "b",
            text: "555,000.",
            isCorrect: false,
            rationale:
              "Cơ chế: 555,000 là 375,000 + 180,000, thiếu DM used. Bẫy: tưởng total manufacturing cost chỉ gồm conversion cost. Khóa: DM vẫn là product cost.",
          },
          {
            id: "c",
            text: "655,000.",
            isCorrect: false,
            rationale:
              "Cơ chế: 655,000 là 280,000 + 375,000, thiếu MOH applied. Bẫy: chỉ cộng prime cost. Khóa: absorption costing bao gồm MOH.",
          },
          {
            id: "d",
            text: "760,000.",
            isCorrect: false,
            rationale:
              "Cơ chế: 760,000 là COGM sau khi điều chỉnh Beg/End WIP. Bẫy: nhầm total manufacturing cost với cost of goods manufactured. Khóa: total manufacturing cost chưa xét WIP đầu/cuối kỳ.",
          },
        ],
        takeaway:
          "Total manufacturing cost = DM used + DL + MOH applied = 835,000.",
      },
      {
        id: "q4",
        difficulty: "intermediate",
        conceptTested: "Cost of goods manufactured",
        stem: "Beg WIP 125,000 + total manufacturing cost 835,000 − End WIP 200,000. COGM là bao nhiêu?",
        options: [
          {
            id: "a",
            text: "760,000.",
            isCorrect: true,
            rationale:
              "Cơ chế: COGM = Beg WIP + total manufacturing cost − End WIP = 125,000 + 835,000 − 200,000. Bẫy: quên trừ End WIP. Khóa: COGM là phần đã hoàn thành, nên loại job còn dở cuối kỳ.",
          },
          {
            id: "b",
            text: "960,000.",
            isCorrect: false,
            rationale:
              "Cơ chế: 960,000 là Beg WIP + total manufacturing cost, chưa trừ End WIP. Bẫy: quên hàng còn dở cuối kỳ. Khóa: End WIP chưa hoàn thành nên không vào COGM.",
          },
          {
            id: "c",
            text: "1,160,000.",
            isCorrect: false,
            rationale:
              "Cơ chế: 1,160,000 không khớp schedule COGM; đó là kiểu cộng sai thêm tồn kho. Bẫy: cộng End WIP thay vì trừ hoặc lẫn số Tiger. Khóa: công thức chỉ là Beg WIP + total manufacturing cost − End WIP.",
          },
          {
            id: "d",
            text: "835,000.",
            isCorrect: false,
            rationale:
              "Cơ chế: 835,000 là total manufacturing cost, chưa điều chỉnh WIP đầu/cuối kỳ. Bẫy: nhầm total manufacturing cost với COGM. Khóa: COGM phải xét WIP.",
          },
        ],
        takeaway:
          "COGM = Beg WIP + total manufacturing cost − End WIP = 760,000.",
      },
      {
        id: "q5",
        difficulty: "intermediate",
        conceptTested: "Cost of goods sold",
        stem: "Beg Finished Goods 130,000 + COGM 760,000 − End Finished Goods 150,000. COGS là bao nhiêu?",
        options: [
          {
            id: "a",
            text: "740,000.",
            isCorrect: true,
            rationale:
              "Cơ chế: COGS = Beg FG + COGM − End FG = 130,000 + 760,000 − 150,000. Bẫy: nhầm COGS với COGM. Khóa: COGS phụ thuộc finished goods đầu/cuối kỳ.",
          },
          {
            id: "b",
            text: "760,000.",
            isCorrect: false,
            rationale:
              "Cơ chế: 760,000 là COGM, chưa chuyển qua schedule COGS. Bẫy: đánh đồng hàng hoàn thành với hàng đã bán. Khóa: phải cộng Beg FG và trừ End FG.",
          },
          {
            id: "c",
            text: "780,000.",
            isCorrect: false,
            rationale:
              "Cơ chế: 780,000 là sai dấu khi xử lý finished goods. Bẫy: trừ Beg FG hoặc cộng End FG không đúng. Khóa: Beg FG cộng vào goods available, End FG trừ ra.",
          },
          {
            id: "d",
            text: "890,000.",
            isCorrect: false,
            rationale:
              "Cơ chế: 890,000 là goods available for sale, chưa trừ End FG. Bẫy: dừng giữa schedule. Khóa: COGS = goods available − End FG.",
          },
        ],
        takeaway:
          "COGS = Beg Finished Goods + COGM − End Finished Goods = 740,000.",
      },
      {
        id: "q6",
        difficulty: "intermediate",
        conceptTested: "Tiger underapplied overhead",
        stem: "Tiger có actual MOH 1,210,000; POHR $4/MH; actual activity 290,000 MH. Kết quả là gì?",
        options: [
          {
            id: "a",
            text: "50,000 underapplied.",
            isCorrect: true,
            rationale:
              "Cơ chế: applied MOH = $4 × 290,000 = 1,160,000; actual MOH 1,210,000 cao hơn applied 50,000. Bẫy: đảo chiều under/over. Khóa: applied < actual = underapplied.",
          },
          {
            id: "b",
            text: "50,000 overapplied.",
            isCorrect: false,
            rationale:
              "Cơ chế: overapplied cần applied > actual, nhưng ở đây applied 1,160,000 < actual 1,210,000. Bẫy: đúng số tiền nhưng sai chiều. Khóa: thiếu áp overhead là underapplied.",
          },
          {
            id: "c",
            text: "60,000 underapplied.",
            isCorrect: false,
            rationale:
              "Cơ chế: chênh lệch đúng là 1,210,000 − 1,160,000 = 50,000. Bẫy: tính sai applied MOH hoặc trừ nhầm. Khóa: nhân POHR với actual MH trước.",
          },
          {
            id: "d",
            text: "Không có under/overapplied overhead.",
            isCorrect: false,
            rationale:
              "Cơ chế: applied MOH khác actual MOH nên chắc chắn có chênh lệch. Bẫy: tưởng dùng POHR thì không cần điều chỉnh. Khóa: normal costing luôn phải so cuối kỳ.",
          },
        ],
        takeaway:
          "Tiger: applied 1,160,000 < actual 1,210,000 → 50,000 underapplied.",
      },
      {
        id: "q7",
        difficulty: "basic",
        conceptTested: "Overapplied overhead và NOI",
        stem: "Overapplied overhead ảnh hưởng thế nào đến net operating income khi đóng vào COGS?",
        options: [
          {
            id: "a",
            text: "Tăng net operating income vì COGS giảm.",
            isCorrect: true,
            rationale:
              "Cơ chế: overapplied nghĩa là đã ghi chi phí quá cao, nên đóng số dư sẽ giảm COGS. Bẫy: nhầm chiều với underapplied. Khóa: overapplied → giảm COGS → tăng net operating income.",
          },
          {
            id: "b",
            text: "Giảm net operating income vì COGS tăng.",
            isCorrect: false,
            rationale:
              "Cơ chế: tăng COGS là chiều của underapplied overhead, không phải overapplied. Bẫy: đảo chiều điều chỉnh. Khóa: overapplied làm COGS giảm.",
          },
          {
            id: "c",
            text: "Không đổi net operating income.",
            isCorrect: false,
            rationale:
              "Cơ chế: đóng chênh lệch vào COGS làm thay đổi expense trên Income Statement. Bẫy: tưởng chỉ là bút toán nội bộ không ảnh hưởng lợi nhuận. Khóa: COGS đổi thì NOI đổi.",
          },
          {
            id: "d",
            text: "Chỉ làm tăng Work in Process.",
            isCorrect: false,
            rationale:
              "Cơ chế: nếu đóng vào COGS thì tác động nằm ở Cost of Goods Sold, không phải WIP. Bẫy: nhầm disposition với phân bổ tỉ lệ. Khóa: câu hỏi nói rõ đóng vào COGS.",
          },
        ],
        takeaway:
          "Overapplied overhead khi đóng vào COGS sẽ giảm COGS và tăng net operating income.",
      },
      {
        id: "q8",
        difficulty: "basic",
        conceptTested: "Indirect materials journal entry",
        stem: "Xuất kho indirect materials thì ghi Nợ tài khoản nào?",
        options: [
          {
            id: "a",
            text: "Manufacturing Overhead.",
            isCorrect: true,
            rationale:
              "Cơ chế: indirect materials không truy nguyên thẳng vào job nên gom vào Manufacturing Overhead. Bẫy: đưa mọi nguyên vật liệu vào Work in Process. Khóa: direct vào WIP, indirect vào MOH.",
          },
          {
            id: "b",
            text: "Work in Process.",
            isCorrect: false,
            rationale:
              "Cơ chế: Work in Process nhận direct materials, không nhận indirect materials trực tiếp. Bẫy: nhầm direct materials với indirect materials. Khóa: indirect đi qua Manufacturing Overhead.",
          },
          {
            id: "c",
            text: "Raw Materials.",
            isCorrect: false,
            rationale:
              "Cơ chế: Raw Materials bị ghi Có khi xuất kho, không ghi Nợ. Bẫy: nhầm tài khoản nguồn với tài khoản nhận chi phí. Khóa: xuất kho làm giảm Raw Materials.",
          },
          {
            id: "d",
            text: "Finished Goods.",
            isCorrect: false,
            rationale:
              "Cơ chế: Finished Goods chỉ nhận chi phí khi job hoàn thành từ WIP. Bẫy: nhảy thẳng từ vật liệu sang thành phẩm. Khóa: chi phí phải qua WIP/MOH trước.",
          },
        ],
        takeaway:
          "Indirect materials ghi Nợ Manufacturing Overhead; direct materials mới ghi Nợ Work in Process.",
      },
      {
        id: "q9",
        difficulty: "basic",
        conceptTested: "Completion cost flow",
        stem: "Khi một job hoàn thành, chi phí được chuyển từ đâu sang đâu?",
        options: [
          {
            id: "a",
            text: "Work in Process → Finished Goods.",
            isCorrect: true,
            rationale:
              "Cơ chế: job hoàn thành rời WIP và trở thành thành phẩm chờ bán trong Finished Goods. Bẫy: đưa ngay vào COGS dù chưa bán. Khóa: hoàn thành ≠ đã bán.",
          },
          {
            id: "b",
            text: "Work in Process → Cost of Goods Sold.",
            isCorrect: false,
            rationale:
              "Cơ chế: COGS chỉ nhận chi phí khi finished goods được bán. Bẫy: bỏ qua bước Finished Goods. Khóa: WIP → FG khi xong; FG → COGS khi bán.",
          },
          {
            id: "c",
            text: "Finished Goods → Cost of Goods Sold.",
            isCorrect: false,
            rationale:
              "Cơ chế: đó là bước khi bán hàng, không phải khi hoàn thành job. Bẫy: nhầm hoàn thành với bán. Khóa: câu hỏi hỏi thời điểm job hoàn thành.",
          },
          {
            id: "d",
            text: "Raw Materials → Work in Process.",
            isCorrect: false,
            rationale:
              "Cơ chế: đó là bước xuất direct materials vào sản xuất. Bẫy: nhầm bước đầu của cost flow với bước hoàn thành. Khóa: job hoàn thành rời WIP sang FG.",
          },
        ],
        takeaway:
          "Job hoàn thành: Work in Process → Finished Goods; chỉ khi bán mới Finished Goods → COGS.",
      },
      {
        id: "q10",
        difficulty: "basic",
        conceptTested: "Disposition under/overapplied overhead",
        stem: "Hai cách disposition underapplied/overapplied overhead là gì?",
        options: [
          {
            id: "a",
            text: "Đóng vào COGS hoặc phân bổ cho WIP/FG/COGS.",
            isCorrect: true,
            rationale:
              "Cơ chế: có thể đóng toàn bộ vào COGS cho đơn giản, hoặc phân bổ theo overhead còn nằm trong WIP, FG và COGS. Bẫy: nghĩ chỉ có một cách. Khóa: disposition có hai lựa chọn chính.",
          },
          {
            id: "b",
            text: "Chỉ được đóng vào COGS.",
            isCorrect: false,
            rationale:
              "Cơ chế: đóng vào COGS là cách đơn giản, nhưng không phải cách duy nhất. Bẫy: bỏ qua phân bổ tỉ lệ. Khóa: khi tồn kho lớn, phân bổ WIP/FG/COGS chính xác hơn.",
          },
          {
            id: "c",
            text: "Ghi thẳng thành period expense riêng.",
            isCorrect: false,
            rationale:
              "Cơ chế: chênh lệch MOH thuộc product cost flow, không phải period expense riêng như advertising. Bẫy: nhầm overhead adjustment với selling & administrative. Khóa: xử lý qua COGS hoặc WIP/FG/COGS.",
          },
          {
            id: "d",
            text: "Luôn giữ lại trong Manufacturing Overhead sang kỳ sau.",
            isCorrect: false,
            rationale:
              "Cơ chế: Manufacturing Overhead là tài khoản tạm cần đóng số dư cuối kỳ. Bẫy: xem MOH như tài khoản tài sản tồn kho. Khóa: cuối kỳ phải disposition số dư MOH.",
          },
        ],
        takeaway:
          "Disposition under/overapplied overhead: đóng vào COGS hoặc phân bổ cho WIP, FG và COGS.",
      },
      {
        id: "q11",
        difficulty: "basic",
        conceptTested: "Absorption costing",
        stem: "Absorption costing gồm những chi phí nào trong product cost?",
        options: [
          {
            id: "a",
            text: "DM + DL + cả variable lẫn fixed MOH.",
            isCorrect: true,
            rationale:
              "Cơ chế: absorption costing hấp thụ toàn bộ manufacturing costs vào product cost. Bẫy: loại fixed MOH ra như variable costing. Khóa: absorption = DM, DL, variable MOH và fixed MOH.",
          },
          {
            id: "b",
            text: "Chỉ variable cost.",
            isCorrect: false,
            rationale:
              "Cơ chế: chỉ variable cost là cách nhìn của variable costing, không phải absorption costing. Bẫy: nhầm hai phương pháp. Khóa: absorption costing bao gồm fixed MOH.",
          },
          {
            id: "c",
            text: "DM + DL (prime cost).",
            isCorrect: false,
            rationale:
              "Cơ chế: prime cost chỉ gồm DM và DL, thiếu MOH. Bẫy: đồng nhất prime cost với product cost theo absorption costing. Khóa: product cost còn có MOH.",
          },
          {
            id: "d",
            text: "Selling & administrative cộng với MOH.",
            isCorrect: false,
            rationale:
              "Cơ chế: selling & administrative là period cost, không vào product cost theo absorption costing. Bẫy: gom chi phí ngoài sản xuất vào sản phẩm. Khóa: chỉ manufacturing costs mới vào product cost.",
          },
        ],
        takeaway:
          "Absorption costing đưa DM, DL và toàn bộ MOH (variable + fixed) vào product cost.",
      },
    ],
  },
  {
    slug: "cost-volume-profit",
    order: 5,
    title: "Chapter 5 — Cost-Volume-Profit Relationships",
    bigIdea:
      'CVP là công cụ "what-if" của nhà quản trị: nắm mối quan hệ giữa giá bán, chi phí biến đổi/cố định và sản lượng để trả lời ba câu hỏi lớn: bán bao nhiêu thì hòa vốn, cần bao nhiêu để đạt lợi nhuận mục tiêu, và lợi nhuận nhạy thế nào khi một yếu tố thay đổi.',
    learningObjectives: [
      "LO1 — Giải thích thay đổi sản lượng tác động đến contribution margin và net operating income thế nào.",
      "LO2 — Lập và đọc CVP graph và profit graph.",
      "LO3 — Dùng CM ratio để tính thay đổi của CM và NOI khi sales đổi.",
      "LO4 — Phân tích tác động lên NOI khi variable cost / fixed cost / selling price / sản lượng thay đổi.",
      "LO5 — Xác định break-even point theo unit và theo dollar.",
      "LO6 — Xác định mức sales cần để đạt target profit.",
      "LO7 — Tính margin of safety và ý nghĩa của nó.",
      "LO8 — Tính degree of operating leverage và dùng nó dự báo thay đổi NOI.",
      "LO9 — Tính break-even cho công ty multiproduct và giải thích ảnh hưởng của sales mix.",
    ],
    status: "ready",
    source:
      "Garrison, Noreen, Brewer — Managerial Accounting, 17e, Chapter 5 (slide '5 CVP Analysis')",
    knowledgeMap: {
      engine: "flow",
      title: "Knowledge map — Cost-Volume-Profit",
      layout: "tree",
      collapsible: true,
      caption:
        "Bấm từng chip để xem vai trò của khái niệm trong mô hình CVP.",
      nodes: [
        {
          id: "cvp",
          label: "Cost-Volume-Profit",
          group: "concept",
          detail: "Quan hệ giá, chi phí và sản lượng để ra quyết định.",
          sectionId: "s0",
        },
        {
          id: "found",
          label: "Nền tảng",
          group: "concept",
          detail:
            "Các công thức nền giúp chuyển từ sales và chi phí sang profit.",
          sectionId: "s1",
          parent: "cvp",
        },
        {
          id: "f-cm",
          label: "Contribution margin",
          group: "term",
          detail:
            "Contribution margin là phần sales còn lại sau variable expenses để phủ fixed và tạo profit.",
          sectionId: "s1",
          parent: "found",
        },
        {
          id: "f-eq",
          label: "Profit equation",
          group: "term",
          detail:
            "Profit equation gom P, V, Q và fixed expenses vào một công thức để trả lời câu hỏi what-if.",
          sectionId: "s2",
          parent: "found",
        },
        {
          id: "f-cmratio",
          label: "CM ratio",
          group: "term",
          detail:
            "CM ratio cho biết mỗi $1 sales còn lại bao nhiêu để phủ fixed và tạo profit.",
          sectionId: "s4",
          parent: "found",
        },
        {
          id: "f-veratio",
          label: "Variable expense ratio",
          group: "term",
          detail:
            "Variable expense ratio cho biết phần sales bị tiêu bởi variable expenses.",
          sectionId: "s4",
          parent: "found",
        },
        {
          id: "a5-highlow",
          label: "High-low method",
          group: "term",
          detail:
            "High-low method tách mixed cost bằng hai kỳ có activity cao nhất và thấp nhất.",
          sectionId: "s11",
          parent: "found",
        },
        {
          id: "a5-lsr",
          label: "Least-squares regression",
          group: "term",
          detail:
            "Least-squares regression dùng tất cả điểm dữ liệu để fit đường Y = a + bX và đánh giá R-squared.",
          sectionId: "s11",
          parent: "found",
        },
        {
          id: "graph",
          label: "LO2 Đồ thị",
          group: "lo",
          detail:
            "Đồ thị giúp nhìn trực quan điểm hòa vốn và vùng lời/lỗ.",
          sectionId: "s3",
          parent: "cvp",
        },
        {
          id: "g-cvp",
          label: "CVP graph",
          group: "term",
          detail:
            "CVP graph đặt Sales, Total expenses và Fixed expenses trên cùng hệ trục để thấy break-even.",
          sectionId: "s3",
          parent: "graph",
        },
        {
          id: "g-profit",
          label: "Profit graph",
          group: "term",
          detail:
            "Profit graph rút gọn thành một đường Profit = Unit CM × Q − Fixed.",
          sectionId: "s3",
          parent: "graph",
        },
        {
          id: "be",
          label: "LO5·6 Hòa vốn & mục tiêu",
          group: "lo",
          detail:
            "Nhóm công thức xác định sales cần để profit bằng 0 hoặc bằng target profit.",
          sectionId: "s6",
          parent: "cvp",
        },
        {
          id: "b-unit",
          label: "Break-even (unit/dollar)",
          group: "term",
          detail:
            "Break-even là mức sales mà profit = 0, tính theo unit bằng fixed ÷ Unit CM hoặc theo dollar bằng fixed ÷ CM ratio.",
          sectionId: "s6",
          parent: "be",
        },
        {
          id: "t-profit",
          label: "Target profit",
          group: "term",
          detail:
            "Target profit cộng thêm mục tiêu lợi nhuận vào fixed expenses trước khi chia cho Unit CM hoặc CM ratio.",
          sectionId: "s7",
          parent: "be",
        },
        {
          id: "risk",
          label: "LO7·8 Rủi ro & đòn bẩy",
          group: "lo",
          detail:
            "Nhóm khái niệm đo khoảng đệm an toàn và độ nhạy của profit với sales.",
          sectionId: "s8",
          parent: "cvp",
        },
        {
          id: "r-mos",
          label: "Margin of safety",
          group: "term",
          detail:
            "Margin of safety đo sales có thể giảm bao nhiêu trước khi công ty bắt đầu lỗ.",
          sectionId: "s8",
          parent: "risk",
        },
        {
          id: "r-struct",
          label: "Cost structure",
          group: "term",
          detail:
            "Cost structure là tỷ lệ fixed cost và variable cost, quyết định profit nhạy hay ổn định.",
          sectionId: "s9",
          parent: "risk",
        },
        {
          id: "r-dol",
          label: "Operating leverage",
          group: "term",
          detail:
            "Operating leverage đo mức sales thay đổi sẽ khuếch đại net operating income thế nào.",
          sectionId: "s9",
          parent: "risk",
        },
        {
          id: "multi",
          label: "LO9 Multiproduct",
          group: "lo",
          detail:
            "Multiproduct CVP phụ thuộc sales mix và weighted-average CM ratio.",
          sectionId: "s10",
          parent: "cvp",
        },
        {
          id: "m-mix",
          label: "Sales mix",
          group: "term",
          detail:
            "Sales mix là tỷ trọng tương đối của các sản phẩm bán ra.",
          sectionId: "s10",
          parent: "multi",
        },
        {
          id: "m-be",
          label: "BE hỗn hợp",
          group: "term",
          detail:
            "BE hỗn hợp dùng weighted-average CM ratio để tính break-even dollar cho nhiều sản phẩm.",
          sectionId: "s10",
          parent: "multi",
        },
        {
          id: "m-comm",
          label: "Sales commission",
          group: "term",
          detail:
            "Sales commission nên gắn với contribution margin để hành vi bán hàng khớp lợi nhuận công ty.",
          sectionId: "s10",
          parent: "multi",
        },
      ],
      edges: [
        { from: "cvp", to: "found" },
        { from: "found", to: "f-cm" },
        { from: "found", to: "f-eq" },
        { from: "found", to: "f-cmratio" },
        { from: "found", to: "f-veratio" },
        { from: "found", to: "a5-highlow" },
        { from: "found", to: "a5-lsr" },
        { from: "cvp", to: "graph" },
        { from: "graph", to: "g-cvp" },
        { from: "graph", to: "g-profit" },
        { from: "cvp", to: "be" },
        { from: "be", to: "b-unit" },
        { from: "be", to: "t-profit" },
        { from: "cvp", to: "risk" },
        { from: "risk", to: "r-mos" },
        { from: "risk", to: "r-struct" },
        { from: "risk", to: "r-dol" },
        { from: "cvp", to: "multi" },
        { from: "multi", to: "m-mix" },
        { from: "multi", to: "m-be" },
        { from: "multi", to: "m-comm" },
      ],
    },
    sections: [
      {
        id: "s0",
        heading: "CVP là gì & các giả định",
        blocks: [
          {
            type: "prose",
            body: "CVP soi quan hệ giá, chi phí và sản lượng. Contribution income statement phân loại theo behavior: Sales − variable = contribution margin − fixed = net operating income. Traditional income statement phân loại theo chức năng: Sales − COGS = gross margin − selling & administrative = net operating income. Vì vậy CVP nhấn mạnh cost behavior hơn là chức năng báo cáo.",
          },
          {
            type: "comparison",
            table: {
              title: "Hai cách trình bày Income Statement",
              columns: ["", "Traditional", "Contribution"],
              rows: [
                {
                  label: "Phân loại",
                  cells: [
                    "Theo chức năng (product/period)",
                    "Theo behavior (variable/fixed)",
                  ],
                },
                {
                  label: "Dòng giữa",
                  cells: [
                    "Gross margin = Sales − COGS",
                    "CM = Sales − variable expenses",
                  ],
                },
                {
                  label: "Dùng cho",
                  cells: [
                    "Báo cáo ra ngoài",
                    "Ra quyết định nội bộ (CVP)",
                  ],
                },
              ],
            },
          },
          {
            type: "callout",
            callout: {
              kind: "trap",
              title: "Ba giả định CVP",
              body: "Giá bán không đổi theo sản lượng; chi phí tuyến tính và tách sạch thành variable cost cố định trên mỗi đơn vị, fixed cost cố định theo tổng trong relevant range; với multiproduct thì sales mix không đổi. Ra ngoài relevant range thì CVP hết đúng.",
            },
          },
        ],
      },
      {
        id: "s1",
        heading: "Contribution margin (LO1)",
        blocks: [
          {
            type: "formula",
            formula: {
              expression: "Contribution Margin (CM) = Sales − Variable expenses",
              legend: [
                {
                  symbol: "Unit CM = P − V",
                  meaning: "phần mỗi đơn vị đóng góp",
                },
              ],
              note: "CM dùng để phủ fixed expenses trước; phần dư mới thành net operating income.",
            },
          },
          {
            type: "calc",
            calc: {
              title: "RBC: CM hoạt động thế nào",
              steps: [
                { label: "Unit CM", expr: "$500 − $300 = $200" },
                {
                  label: "Bán 400 đơn vị → tổng CM",
                  expr: "400 × $200 = $80,000",
                },
                {
                  label: "CM phủ fixed $80,000",
                  expr: "$80,000 − $80,000 = $0 NOI",
                },
              ],
              result: "Tại 400 đơn vị: hòa vốn (NOI = $0)",
              meaning:
                "CM lấp đầy fixed trước; mỗi đơn vị bán thêm sau hòa vốn cộng thẳng $200 vào lợi nhuận.",
              implication:
                "Đây là lý do bán đơn vị thứ 401 lời đúng $200, không cần lập lại income statement.",
            },
          },
        ],
      },
      {
        id: "s2",
        heading: "Profit equation (LO1)",
        blocks: [
          {
            type: "formula",
            formula: {
              expression: "Profit = Unit CM × Q − Fixed expenses",
              legend: [
                { symbol: "Q", meaning: "số đơn vị bán" },
                {
                  symbol: "Unit CM = P − V",
                  meaning: "lãi gộp biên mỗi đơn vị",
                },
              ],
              note: "Suy ra từ Profit = (P×Q − V×Q) − Fixed; gom (P−V) = Unit CM.",
            },
          },
        ],
        examples: [
          {
            title: "Kiểm chứng tại 401 đơn vị",
            body: "Profit = $200 × 401 − $80,000 = $80,200 − $80,000 = $200.",
            meaning:
              "Phương trình cho ngay lợi nhuận ở bất kỳ sản lượng nào mà không cần dựng cả báo cáo.",
            implication:
              "Đây là động cơ của toàn chương: mọi câu hỏi break-even, target profit và what-if đều giải từ một phương trình này.",
          },
        ],
      },
      {
        id: "s3",
        heading: "CVP graph & profit graph (LO2)",
        blocks: [
          {
            type: "diagram",
            diagram: {
              engine: "flow",
              title: "CVP graph của RBC",
              layout: "horizontal",
              nodes: [
                { id: "fixed", label: "Fixed expenses: $80,000 (đường ngang)" },
                { id: "total", label: "Total expenses: $80,000 + $300Q" },
                { id: "sales", label: "Sales: $500Q (từ gốc 0)" },
                {
                  id: "be",
                  label: "Break-even: 400 đơn vị / $200,000",
                  group: "term",
                },
                { id: "loss", label: "Loss zone: dưới break-even" },
                { id: "profit", label: "Profit zone: trên break-even" },
                {
                  id: "at500",
                  label: "500 đơn vị → sales $250,000, profit $20,000",
                },
              ],
              edges: [
                { from: "fixed", to: "be" },
                { from: "total", to: "be" },
                { from: "sales", to: "be" },
                { from: "loss", to: "be", animated: true },
                { from: "be", to: "profit" },
                { from: "profit", to: "at500" },
              ],
              caption:
                "Trục X là units, trục Y là dollars; Sales cắt Total expenses tại break-even.",
            },
          },
          {
            type: "callout",
            callout: {
              kind: "note",
              title: "Profit graph",
              body: "Profit graph là bản rút gọn: vẽ thẳng đường Profit = Unit CM × Q − Fixed; cắt trục hoành khi profit = 0 đúng tại break-even = 400 đơn vị.",
            },
          },
        ],
      },
      {
        id: "s4",
        heading: "CM ratio & variable expense ratio (LO3)",
        blocks: [
          {
            type: "formula",
            formula: {
              expression: "CM ratio = CM ÷ Sales = Unit CM ÷ P",
              legend: [
                {
                  symbol: "RBC",
                  meaning: "$80,000 ÷ $200,000 = $200 ÷ $500 = 40%",
                },
              ],
              note: "CM ratio là phần của mỗi $1 doanh thu còn lại để phủ fixed và tạo profit.",
            },
          },
          {
            type: "comparison",
            table: {
              title: "CM ratio vs Variable expense ratio",
              columns: ["", "CM ratio", "Variable expense ratio"],
              rows: [
                {
                  label: "Công thức",
                  cells: ["CM ÷ Sales", "Variable expenses ÷ Sales"],
                },
                { label: "RBC", cells: ["40%", "60%"] },
                {
                  label: "Quan hệ",
                  cells: [
                    "CM ratio + VE ratio = 100%",
                    "hai tỉ lệ luôn bù nhau",
                  ],
                },
              ],
            },
          },
          {
            type: "calc",
            calc: {
              title: "Ứng dụng CM ratio",
              steps: [
                {
                  label: "Sales tăng từ $200,000 → $250,000 (+$50,000)",
                  expr: "ΔCM = $50,000 × 40% = $20,000",
                },
                {
                  label: "Profit tại sales $250,000",
                  expr: "(40% × $250,000) − $80,000 = $20,000",
                },
              ],
              result: "Mỗi $1 sales thêm → $0.40 CM thêm",
              meaning:
                "Biết CM ratio là tính ngay tác động lợi nhuận của thay đổi doanh thu mà không cần biết số đơn vị.",
              implication:
                "CM ratio tiện khi multiproduct hoặc khi chỉ có số liệu doanh thu, không có số đơn vị.",
            },
          },
        ],
      },
      {
        id: "s5",
        heading: "What-if: thay đổi variable / fixed / price / volume (LO4)",
        blocks: [
          {
            type: "comparison",
            table: {
              title: "5 kịch bản RBC (gốc: 500 đơn vị, NOI $20,000)",
              columns: ["Kịch bản", "Thay đổi", "Kết quả NOI"],
              rows: [
                {
                  label: "Ex1 — Fixed↑ & volume↑",
                  cells: [
                    "+$10,000 quảng cáo, sales 500→540",
                    "Sales +$20,000 nhưng NOI −$2,000 (giảm)",
                  ],
                },
                {
                  label: "Ex2 — Variable↑ & volume↑",
                  cells: [
                    "+$10 VC/đơn vị, sales 500→580",
                    "Sales +$40,000, NOI +$10,200",
                  ],
                },
                {
                  label: "Ex3 — Price↓, Fixed↑ & volume↑",
                  cells: [
                    "giá −$20, +$15,000 QC, sales 500→650",
                    "Sales +$62,000, NOI +$2,000",
                  ],
                },
                {
                  label: "Ex4 — Variable↑, Fixed↓ & volume↑",
                  cells: [
                    "$15 hoa hồng thay $6,000 lương cứng, sales 500→575",
                    "Sales +$37,500, NOI +$12,375",
                  ],
                },
                {
                  label: "Ex5 — Định giá đơn hàng đặc biệt",
                  cells: [
                    "bán thêm 150 xe, muốn +$3,000 profit",
                    "Giá báo = $300 VC + ($3,000÷150) = $320/xe",
                  ],
                },
              ],
            },
          },
          {
            type: "callout",
            callout: {
              kind: "insight",
              title: "Incremental analysis",
              body: "Sales tăng chưa chắc lợi nhuận tăng. Luôn so sánh phần CM tăng thêm với phần fixed hoặc variable tăng thêm.",
            },
          },
        ],
      },
      {
        id: "s6",
        heading: "Break-even analysis (LO5)",
        blocks: [
          {
            type: "formula",
            formula: {
              expression: "Unit sales to break even = Fixed expenses ÷ Unit CM",
              legend: [
                {
                  symbol: "RBC",
                  meaning: "$80,000 ÷ $200 = 400 đơn vị",
                },
              ],
              note: "Suy ra từ Profit = Unit CM × Q − Fixed, đặt Profit = 0.",
            },
          },
          {
            type: "formula",
            formula: {
              expression: "Dollar sales to break even = Fixed expenses ÷ CM ratio",
              legend: [
                {
                  symbol: "RBC",
                  meaning: "$80,000 ÷ 40% = $200,000",
                },
              ],
              note: "Dùng khi muốn ra ngay doanh thu hòa vốn.",
            },
          },
          {
            type: "callout",
            callout: {
              kind: "key",
              title: "Break-even",
              body: "Break-even là mức sales mà profit = 0, tức tổng CM vừa đúng bằng tổng fixed expenses. Đây là gốc của target profit: chỉ thêm số dương vào tử.",
            },
          },
        ],
      },
      {
        id: "s7",
        heading: "Target profit (LO6)",
        blocks: [
          {
            type: "formula",
            formula: {
              expression:
                "Unit sales = (Target profit + Fixed expenses) ÷ Unit CM",
              legend: [
                {
                  symbol: "RBC, target $100,000",
                  meaning: "($100,000 + $80,000) ÷ $200 = 900 đơn vị",
                },
              ],
              note: "Break-even chỉ là trường hợp target = $0.",
            },
          },
          {
            type: "calc",
            calc: {
              title: "Target theo dollar sales",
              steps: [
                {
                  label: "Công thức",
                  expr: "(Target + Fixed) ÷ CM ratio",
                },
                {
                  label: "RBC, target $100,000",
                  expr: "($100,000 + $80,000) ÷ 40% = $450,000",
                },
              ],
              result: "$450,000 doanh thu để đạt lợi nhuận $100,000",
              meaning:
                "Cùng một logic phủ fixed rồi cộng target, nhưng tính theo đồng doanh thu.",
              implication:
                "Đừng quên cộng fixed vào target ở tử số; bẫy hay gặp là chỉ chia target cho CM.",
            },
          },
        ],
      },
      {
        id: "s8",
        heading: "Margin of safety (LO7)",
        blocks: [
          {
            type: "formula",
            formula: {
              expression: "Margin of safety = Total sales − Break-even sales",
              legend: [
                {
                  symbol: "RBC",
                  meaning: "$250,000 − $200,000 = $50,000",
                },
                {
                  symbol: "% = MOS ÷ Total sales",
                  meaning: "$50,000 ÷ $250,000 = 20%",
                },
                {
                  symbol: "Units = MOS$ ÷ P",
                  meaning: "$50,000 ÷ $500 = 100 xe",
                },
              ],
              note: "Sales được phép tụt bao nhiêu trước khi lỗ.",
            },
          },
          {
            type: "callout",
            callout: {
              kind: "realworld",
              title: "Khoảng đệm an toàn",
              body: "Margin of safety cao nghĩa là rủi ro thủng hòa vốn thấp. Cùng doanh thu, công ty fixed cost cao thường có break-even cao hơn, margin of safety mỏng hơn.",
            },
          },
        ],
      },
      {
        id: "s9",
        heading: "Cost structure & operating leverage (LO8)",
        blocks: [
          {
            type: "prose",
            body: "Cost structure là tỉ lệ fixed cost và variable cost. Fixed cao làm năm tốt lời đậm nhưng năm xấu lỗ nặng; fixed thấp và variable cao giúp lợi nhuận ổn định hơn qua chu kỳ.",
          },
          {
            type: "formula",
            formula: {
              expression:
                "Degree of operating leverage (DOL) = Contribution margin ÷ Net operating income",
              legend: [
                {
                  symbol: "RBC tại sales $250,000",
                  meaning: "$100,000 ÷ $20,000 = 5",
                },
              ],
              note: "%ΔNOI = DOL × %ΔSales.",
            },
          },
          {
            type: "calc",
            calc: {
              title: "Đòn bẩy khuếch đại lợi nhuận",
              steps: [
                {
                  label: "DOL = 5, sales tăng 10%",
                  expr: "%ΔNOI = 5 × 10% = 50%",
                },
                {
                  label: "Kiểm chứng",
                  expr: "NOI $20,000 → $30,000 (sales $250k → $275k)",
                },
              ],
              result: "Sales +10% → NOI +50%",
              meaning:
                "DOL đo độ nhạy của lợi nhuận với doanh thu tại một mức sales cho trước.",
              implication:
                "DOL cao là con dao hai lưỡi: khuếch đại cả lời lẫn lỗ. DOL giảm dần khi sales rời xa break-even.",
            },
          },
        ],
      },
      {
        id: "s10",
        heading: "Sales mix, multiproduct break-even & sales commission (LO9)",
        blocks: [
          {
            type: "prose",
            body: "Sales mix là tỉ trọng tương đối các sản phẩm bán ra. Multiproduct dùng weighted-average CM ratio để tính break-even.",
          },
          {
            type: "calc",
            calc: {
              title: "RBC bikes + carts",
              steps: [
                {
                  label: "Tổng sales $550,000; tổng CM $265,000",
                  expr: "CM ratio bình quân = $265,000 ÷ $550,000 = 48.2%",
                },
                {
                  label: "Fixed $170,000",
                  expr: "BE dollar = $170,000 ÷ 48.2% = $352,697",
                },
              ],
              result: "BE hỗn hợp = $352,697",
              meaning:
                "BE multiproduct phụ thuộc mix: trọng số nghiêng về sản phẩm CM ratio cao thì BE thấp, và ngược lại.",
              implication:
                "Khi mix dịch sang sản phẩm CM ratio thấp, weighted CM ratio giảm, nên BE tăng dù chưa đổi giá hay chi phí.",
            },
          },
          {
            type: "callout",
            callout: {
              kind: "trap",
              title: "Cơ cấu hoa hồng",
              body: "Trả hoa hồng theo doanh số khiến sales đẩy sản phẩm giá cao dù CM thấp, ví dụ Turbo $150 CM $18 so với XR7 $100 CM $25. Sửa bằng cách gắn hoa hồng theo contribution margin để khớp lợi ích với lợi nhuận công ty.",
            },
          },
        ],
      },
      {
        id: "s11",
        heading: "Appendix 5A — Tách mixed cost: high-low & least-squares",
        blocks: [
          {
            type: "prose",
            body:
              "Mixed cost có cả fixed component và variable component. Có năm cách ước tính phần fixed/variable: account analysis, engineering approach, scattergraph plot, high-low method và least-squares regression. Bước đầu luôn là vẽ scattergraph plot để xem quan hệ cost với activity có đủ tuyến tính không: Y là total cost trên trục tung, X là activity trên trục hoành.",
          },
          {
            type: "comparison",
            table: {
              title: "5 phương pháp ước tính mixed cost",
              columns: ["Phương pháp", "Cách làm"],
              rows: [
                {
                  label: "Account analysis",
                  cells: [
                    "Phân loại từng tài khoản là variable hay fixed dựa trên hiểu biết về bản chất chi phí.",
                  ],
                },
                {
                  label: "Engineering approach",
                  cells: [
                    "Phân tích kỹ thuật chi tiết chi phí nên là bao nhiêu, thường do industrial engineer đánh giá.",
                  ],
                },
                {
                  label: "Scattergraph",
                  cells: [
                    "Vẽ điểm dữ liệu để chẩn đoán quan hệ có tuyến tính không trước khi dùng high-low hoặc least-squares regression.",
                  ],
                },
                {
                  label: "High-low",
                  cells: ["Dùng 2 điểm: mức activity cao nhất và thấp nhất."],
                },
                {
                  label: "Least-squares regression",
                  cells: [
                    "Dùng tất cả điểm dữ liệu, tối thiểu hóa tổng bình phương sai số.",
                  ],
                },
              ],
            },
          },
          {
            type: "formula",
            formula: {
              expression:
                "Variable cost (b) = Δcost ÷ Δactivity = (Cost cao − Cost thấp) ÷ (Activity cao − Activity thấp)",
              legend: [
                {
                  symbol: "High-low",
                  meaning:
                    "lấy chênh lệch giữa kỳ activity cao nhất và thấp nhất",
                },
              ],
              note: "Luôn chọn theo mức activity cao/thấp nhất, không phải mức cost cao/thấp nhất.",
            },
          },
          {
            type: "calc",
            calc: {
              title: "High-low — Brentline Hospital",
              steps: [
                {
                  label: "High và Low theo activity",
                  expr: "High (June): 8,000 patient-days, $9,800 · Low (March): 5,000 patient-days, $7,400 → Δ = 3,000 patient-days, $2,400",
                },
                {
                  label: "Variable cost b",
                  expr: "$2,400 ÷ 3,000 = $0.80/patient-day",
                },
                {
                  label: "Fixed cost a (dùng điểm cao)",
                  expr: "$9,800 − ($0.80 × 8,000) = $3,400",
                },
              ],
              result: "Y = $3,400 + $0.80X",
              meaning:
                "High-low chỉ vẽ đường thẳng qua 2 điểm cực trị.",
              implication:
                "Nhược điểm: chỉ dùng 2 điểm, mà 2 kỳ cực trị thường bất thường nên dễ lệch so với hành vi chi phí bình thường.",
            },
          },
          {
            type: "calc",
            calc: {
              title: "Least-squares — cùng dữ liệu Brentline",
              steps: [
                {
                  label: "Dùng tất cả 7 điểm, Excel fit đường Y = bX + a",
                  expr: "y = 0.7589x + 3,430.9",
                },
                {
                  label: "Variable cost b",
                  expr: "$0.759/patient-day",
                },
                {
                  label: "Fixed cost a",
                  expr: "≈ $3,431/tháng",
                },
                {
                  label: "R² (goodness of fit)",
                  expr: "≈ 0.90 → 90% biến thiên của cost được giải thích bởi activity",
                },
              ],
              result: "Y ≈ $3,431 + $0.759X, R² ≈ 0.90",
              meaning:
                "Least-squares regression dùng toàn bộ dữ liệu nên chính xác hơn high-low: fixed cao hơn $31, variable thấp hơn ($0.759 vs $0.80).",
              implication:
                "R² càng cao mô hình càng đáng tin; R² thấp thì phải xem lại scattergraph vì quan hệ có thể không tuyến tính.",
            },
          },
          {
            type: "callout",
            callout: {
              kind: "trap",
              title: "Bẫy high-low",
              body:
                "High-low lấy theo mức activity cao/thấp nhất, không phải theo cost cao/thấp nhất.",
            },
          },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        difficulty: "basic",
        conceptTested: "Contribution margin",
        stem: "Contribution margin được định nghĩa như thế nào?",
        options: [
          {
            id: "a",
            text: "Sales − variable expenses.",
            isCorrect: true,
            rationale:
              "Cơ chế: contribution margin là phần sales còn lại sau variable expenses để phủ fixed và tạo profit. Bẫy: nhầm với gross margin hoặc NOI. Khóa: CM = Sales − variable expenses.",
          },
          {
            id: "b",
            text: "Sales − COGS.",
            isCorrect: false,
            rationale:
              "Cơ chế: Sales − COGS là gross margin trong traditional income statement. Bẫy: dùng phân loại theo chức năng thay vì behavior. Khóa: CVP cần variable/fixed, không phải product/period.",
          },
          {
            id: "c",
            text: "Sales − fixed expenses.",
            isCorrect: false,
            rationale:
              "Cơ chế: fixed expenses được trừ sau contribution margin. Bẫy: bỏ qua variable expenses. Khóa: CM phải trừ variable expenses trước.",
          },
          {
            id: "d",
            text: "Sales − tất cả chi phí.",
            isCorrect: false,
            rationale:
              "Cơ chế: Sales trừ tất cả chi phí cho ra net operating income. Bẫy: đồng nhất CM với NOI. Khóa: CM còn phải phủ fixed expenses.",
          },
        ],
        takeaway:
          "Contribution margin = Sales − variable expenses; nó là cầu nối từ sales sang profit trong CVP.",
      },
      {
        id: "q2",
        difficulty: "basic",
        conceptTested: "CM ratio",
        stem: "CM ratio 40% nghĩa là gì?",
        options: [
          {
            id: "a",
            text: "Mỗi $1 doanh thu chừa $0.40 để phủ fixed và tạo profit.",
            isCorrect: true,
            rationale:
              "Cơ chế: CM ratio cho biết tỉ lệ sales còn lại sau variable expenses. Bẫy: tưởng đây là profit ròng. Khóa: $0.40 trước hết phủ fixed, phần dư mới là profit.",
          },
          {
            id: "b",
            text: "$0.40 là lợi nhuận ròng trên mỗi $1 sales.",
            isCorrect: false,
            rationale:
              "Cơ chế: lợi nhuận ròng chỉ xuất hiện sau khi trừ fixed expenses. Bẫy: bỏ qua fixed cost. Khóa: CM ratio không phải net profit margin.",
          },
          {
            id: "c",
            text: "$0.40 là variable cost trên mỗi $1 sales.",
            isCorrect: false,
            rationale:
              "Cơ chế: variable expense ratio mới đo phần variable cost trong sales. Bẫy: đảo CM ratio với variable expense ratio. Khóa: nếu CM ratio 40% thì variable expense ratio là 60%.",
          },
          {
            id: "d",
            text: "40% doanh thu là fixed cost.",
            isCorrect: false,
            rationale:
              "Cơ chế: fixed cost không tăng trực tiếp theo từng $1 sales trong relevant range. Bẫy: biến fixed cost thành tỉ lệ doanh thu. Khóa: CM ratio đo phần còn lại sau variable expenses.",
          },
        ],
        takeaway:
          "CM ratio cho biết mỗi $1 sales đóng góp bao nhiêu để phủ fixed và tạo profit.",
      },
      {
        id: "q3",
        difficulty: "basic",
        conceptTested: "Break-even point",
        stem: "Break-even point là gì?",
        options: [
          {
            id: "a",
            text: "Mức sales mà profit = 0, tức tổng CM = tổng fixed.",
            isCorrect: true,
            rationale:
              "Cơ chế: hòa vốn xảy ra khi contribution margin vừa đủ phủ fixed expenses. Bẫy: nhìn một thành phần riêng lẻ thay vì toàn phương trình. Khóa: break-even là profit bằng 0.",
          },
          {
            id: "b",
            text: "Mức sales mà CM = 0.",
            isCorrect: false,
            rationale:
              "Cơ chế: tại break-even, tổng CM bằng fixed expenses, không phải bằng 0. Bẫy: gắn chữ hòa vốn với không có CM. Khóa: không có CM thì chưa phủ được fixed.",
          },
          {
            id: "c",
            text: "Mức sales mà sales = variable cost.",
            isCorrect: false,
            rationale:
              "Cơ chế: sales = variable cost làm CM = 0. Bẫy: quên fixed expenses. Khóa: break-even cần tổng CM = fixed.",
          },
          {
            id: "d",
            text: "Mức sales mà fixed cost = variable cost.",
            isCorrect: false,
            rationale:
              "Cơ chế: so fixed với variable không cho biết profit. Bẫy: so hai loại chi phí thay vì so CM với fixed. Khóa: break-even xét Sales − Variable − Fixed.",
          },
        ],
        takeaway:
          "Break-even là điểm profit = 0, nơi tổng CM vừa đủ phủ tổng fixed expenses.",
      },
      {
        id: "q4",
        difficulty: "intermediate",
        conceptTested: "CM ratio calculation",
        stem: "Coffee Klatch bán $1.49/ly, variable cost $0.36/ly. CM ratio là bao nhiêu?",
        options: [
          {
            id: "a",
            text: "0.758.",
            isCorrect: true,
            rationale:
              "Cơ chế: Unit CM = $1.49 − $0.36 = $1.13; CM ratio = $1.13 ÷ $1.49 = 0.758. Bẫy: dùng variable expense ratio. Khóa: CM ratio = Unit CM ÷ Price.",
          },
          {
            id: "b",
            text: "0.242.",
            isCorrect: false,
            rationale:
              "Cơ chế: $0.36 ÷ $1.49 = 0.242 là variable expense ratio. Bẫy: chọn phần variable thay vì phần contribution margin. Khóa: CM ratio + variable expense ratio = 100%.",
          },
          {
            id: "c",
            text: "1.319.",
            isCorrect: false,
            rationale:
              "Cơ chế: đây là kết quả lấy nghịch đảo gần đúng. Bẫy: chia price cho Unit CM. Khóa: mẫu số phải là selling price.",
          },
          {
            id: "d",
            text: "4.139.",
            isCorrect: false,
            rationale:
              "Cơ chế: đây không phải tỉ lệ contribution margin. Bẫy: thao tác sai với price và variable cost. Khóa: bắt đầu bằng Unit CM = $1.13.",
          },
        ],
        takeaway:
          "Coffee Klatch có CM ratio 0.758, tức khoảng 75.8% sales còn lại sau variable cost.",
      },
      {
        id: "q5",
        difficulty: "intermediate",
        conceptTested: "Break-even dollar sales",
        stem: "Coffee Klatch có fixed $1,300 và CM ratio 0.758. Break-even dollar sales là bao nhiêu?",
        options: [
          {
            id: "a",
            text: "$1,715.",
            isCorrect: true,
            rationale:
              "Cơ chế: BE dollar = fixed expenses ÷ CM ratio = $1,300 ÷ 0.758 = $1,715. Bẫy: dùng fixed như doanh thu hòa vốn. Khóa: dollar sales hòa vốn cần chia cho CM ratio.",
          },
          {
            id: "b",
            text: "$1,300.",
            isCorrect: false,
            rationale:
              "Cơ chế: $1,300 chỉ là fixed expenses. Bẫy: quên mỗi $1 sales chỉ đóng góp 75.8 cents để phủ fixed. Khóa: phải chia fixed cho CM ratio.",
          },
          {
            id: "c",
            text: "$1,788.",
            isCorrect: false,
            rationale:
              "Cơ chế: số này không dùng đúng CM ratio 0.758. Bẫy: làm tròn hoặc chia sai mẫu số. Khóa: $1,300 ÷ 0.758 = $1,715.",
          },
          {
            id: "d",
            text: "$3,129.",
            isCorrect: false,
            rationale:
              "Cơ chế: số này vượt xa break-even đúng của Coffee Klatch. Bẫy: trộn dữ kiện target profit hoặc ratio sai. Khóa: break-even chỉ cần fixed ÷ CM ratio.",
          },
        ],
        takeaway:
          "Break-even dollar sales = fixed expenses ÷ CM ratio.",
      },
      {
        id: "q6",
        difficulty: "intermediate",
        conceptTested: "Break-even unit sales",
        stem: "Coffee Klatch có fixed $1,300 và Unit CM $1.13. Break-even unit sales là bao nhiêu?",
        options: [
          {
            id: "a",
            text: "1,150 ly.",
            isCorrect: true,
            rationale:
              "Cơ chế: BE units = fixed expenses ÷ Unit CM = $1,300 ÷ $1.13 = 1,150 ly. Bẫy: dùng selling price hoặc variable cost riêng lẻ. Khóa: unit break-even dùng Unit CM.",
          },
          {
            id: "b",
            text: "872 ly.",
            isCorrect: false,
            rationale:
              "Cơ chế: 872 gần với việc chia fixed cho selling price. Bẫy: dùng price thay vì Unit CM. Khóa: price chưa trừ variable cost nên không dùng trực tiếp.",
          },
          {
            id: "c",
            text: "1,200 ly.",
            isCorrect: false,
            rationale:
              "Cơ chế: số này là làm tròn sai so với phép chia bằng Unit CM. Bẫy: ước lượng quá thô. Khóa: $1,300 ÷ $1.13 = 1,150.",
          },
          {
            id: "d",
            text: "3,611 ly.",
            isCorrect: false,
            rationale:
              "Cơ chế: số này giống chia fixed cho variable cost. Bẫy: dùng variable cost làm phần đóng góp. Khóa: phần phủ fixed là Unit CM, không phải variable cost.",
          },
        ],
        takeaway:
          "Break-even units = fixed expenses ÷ Unit CM.",
      },
      {
        id: "q7",
        difficulty: "intermediate",
        conceptTested: "Target profit units",
        stem: "Coffee Klatch muốn target profit $2,500, fixed $1,300 và Unit CM $1.13. Cần bán bao nhiêu ly?",
        options: [
          {
            id: "a",
            text: "3,363 ly.",
            isCorrect: true,
            rationale:
              "Cơ chế: Unit sales = (Target profit + Fixed expenses) ÷ Unit CM = ($2,500 + $1,300) ÷ $1.13 = 3,363 ly. Bẫy: quên cộng fixed. Khóa: target profit phải phủ fixed trước rồi mới có profit.",
          },
          {
            id: "b",
            text: "2,212 ly.",
            isCorrect: false,
            rationale:
              "Cơ chế: 2,212 là $2,500 ÷ $1.13, chỉ đủ tạo target trước fixed. Bẫy: quên cộng fixed expenses. Khóa: tử số là Target profit + Fixed expenses.",
          },
          {
            id: "c",
            text: "1,150 ly.",
            isCorrect: false,
            rationale:
              "Cơ chế: 1,150 ly chỉ là break-even. Bẫy: nhầm target profit với profit bằng 0. Khóa: target $2,500 cần bán nhiều hơn break-even.",
          },
          {
            id: "d",
            text: "4,200 ly.",
            isCorrect: false,
            rationale:
              "Cơ chế: số này không khớp công thức target profit với Unit CM $1.13. Bẫy: cộng thêm cushion không có trong dữ kiện. Khóa: dùng đúng tử số $3,800.",
          },
        ],
        takeaway:
          "Target profit units = (Target profit + Fixed expenses) ÷ Unit CM.",
      },
      {
        id: "q8",
        difficulty: "intermediate",
        conceptTested: "Margin of safety units",
        stem: "Coffee Klatch bán 2,100 ly/tháng và break-even là 1,150 ly. Margin of safety theo units là bao nhiêu?",
        options: [
          {
            id: "a",
            text: "950 ly.",
            isCorrect: true,
            rationale:
              "Cơ chế: margin of safety = actual sales − break-even sales = 2,100 − 1,150 = 950 ly. Bẫy: cộng hai số hoặc chọn BE. Khóa: margin of safety đo khoảng đệm trước khi lỗ.",
          },
          {
            id: "b",
            text: "3,250 ly.",
            isCorrect: false,
            rationale:
              "Cơ chế: 3,250 là cộng actual sales và break-even. Bẫy: cộng thay vì trừ. Khóa: margin of safety là phần vượt trên break-even.",
          },
          {
            id: "c",
            text: "1,150 ly.",
            isCorrect: false,
            rationale:
              "Cơ chế: 1,150 là break-even units. Bẫy: chọn ngưỡng hòa vốn thay vì khoảng đệm. Khóa: MOS = actual − BE.",
          },
          {
            id: "d",
            text: "2,100 ly.",
            isCorrect: false,
            rationale:
              "Cơ chế: 2,100 là actual sales. Bẫy: lấy toàn bộ sales làm margin of safety. Khóa: chỉ phần trên break-even mới là MOS.",
          },
        ],
        takeaway:
          "Margin of safety theo units = actual unit sales − break-even unit sales.",
      },
      {
        id: "q9",
        difficulty: "advanced",
        conceptTested: "Operating leverage",
        stem: "Coffee Klatch có CM $2,373 và NOI $1,073. Degree of operating leverage là bao nhiêu?",
        options: [
          {
            id: "a",
            text: "2.21.",
            isCorrect: true,
            rationale:
              "Cơ chế: DOL = Contribution margin ÷ Net operating income = $2,373 ÷ $1,073 = 2.21. Bẫy: lấy nghịch đảo. Khóa: DOL đo CM lớn gấp bao nhiêu lần NOI.",
          },
          {
            id: "b",
            text: "0.45.",
            isCorrect: false,
            rationale:
              "Cơ chế: 0.45 là gần nghịch đảo của DOL. Bẫy: chia NOI cho CM. Khóa: công thức đúng là CM ÷ NOI.",
          },
          {
            id: "c",
            text: "0.34.",
            isCorrect: false,
            rationale:
              "Cơ chế: số này không dùng đúng CM và NOI. Bẫy: trộn thêm fixed hoặc sales vào công thức. Khóa: DOL chỉ cần CM và NOI.",
          },
          {
            id: "d",
            text: "2.92.",
            isCorrect: false,
            rationale:
              "Cơ chế: 2.92 không khớp phép chia $2,373 ÷ $1,073. Bẫy: dùng sai mẫu số. Khóa: mẫu số là NOI.",
          },
        ],
        takeaway:
          "Degree of operating leverage = Contribution margin ÷ Net operating income.",
      },
      {
        id: "q10",
        difficulty: "advanced",
        conceptTested: "Operating leverage prediction",
        stem: "Với DOL 2.21, nếu sales tăng 20% thì NOI dự kiến tăng bao nhiêu phần trăm?",
        options: [
          {
            id: "a",
            text: "44.2%.",
            isCorrect: true,
            rationale:
              "Cơ chế: %ΔNOI = DOL × %ΔSales = 2.21 × 20% = 44.2%. Bẫy: bỏ qua operating leverage. Khóa: DOL khuếch đại thay đổi sales thành thay đổi NOI.",
          },
          {
            id: "b",
            text: "20%.",
            isCorrect: false,
            rationale:
              "Cơ chế: 20% là thay đổi sales, không phải thay đổi NOI khi có leverage. Bẫy: giả định profit tăng cùng tỉ lệ sales. Khóa: phải nhân với DOL.",
          },
          {
            id: "c",
            text: "22.1%.",
            isCorrect: false,
            rationale:
              "Cơ chế: 22.1% giống lấy DOL 2.21 nhân 10%. Bẫy: dùng sai mức tăng sales. Khóa: đề cho sales +20%.",
          },
          {
            id: "d",
            text: "30%.",
            isCorrect: false,
            rationale:
              "Cơ chế: 30% không xuất phát từ DOL 2.21. Bẫy: ước lượng không theo công thức. Khóa: dùng %ΔNOI = DOL × %ΔSales.",
          },
        ],
        takeaway:
          "Operating leverage biến sales +20% thành NOI +44.2% khi DOL = 2.21.",
      },
      {
        id: "q11",
        difficulty: "intermediate",
        conceptTested: "Incremental analysis",
        stem: "RBC tăng quảng cáo $10,000 để sales tăng từ 500 lên 540 đơn vị. Unit CM là $200. NOI thay đổi thế nào?",
        options: [
          {
            id: "a",
            text: "NOI giảm $2,000.",
            isCorrect: true,
            rationale:
              "Cơ chế: ΔCM = 40 × $200 = $8,000; trừ fixed tăng $10,000 thì NOI giảm $2,000. Bẫy: chỉ nhìn sales tăng. Khóa: quyết định what-if cần so incremental CM với incremental fixed.",
          },
          {
            id: "b",
            text: "NOI tăng $8,000.",
            isCorrect: false,
            rationale:
              "Cơ chế: $8,000 là CM tăng thêm trước khi tính quảng cáo. Bẫy: quên trừ fixed cost tăng thêm. Khóa: incremental NOI = incremental CM − incremental fixed.",
          },
          {
            id: "c",
            text: "NOI tăng $10,000.",
            isCorrect: false,
            rationale:
              "Cơ chế: $10,000 là fixed cost tăng thêm, không phải lợi nhuận. Bẫy: xem chi phí quảng cáo như lợi nhuận tăng. Khóa: fixed tăng làm giảm NOI.",
          },
          {
            id: "d",
            text: "NOI không đổi.",
            isCorrect: false,
            rationale:
              "Cơ chế: CM tăng $8,000 và fixed tăng $10,000 không triệt tiêu nhau. Bẫy: nghĩ sales tăng vừa đủ bù quảng cáo. Khóa: chênh lệch là −$2,000.",
          },
        ],
        takeaway:
          "Sales tăng chưa đủ; phải so CM tăng thêm với fixed/variable tăng thêm.",
      },
      {
        id: "q12",
        difficulty: "intermediate",
        conceptTested: "Target profit formula",
        stem: "Trong công thức target profit, tử số phải là gì?",
        options: [
          {
            id: "a",
            text: "Target profit + Fixed expenses.",
            isCorrect: true,
            rationale:
              "Cơ chế: sales phải tạo đủ CM để phủ fixed rồi mới đạt target profit. Bẫy: chỉ chia target cho CM. Khóa: tử số luôn cộng fixed expenses.",
          },
          {
            id: "b",
            text: "Chỉ Target profit.",
            isCorrect: false,
            rationale:
              "Cơ chế: chỉ Target profit bỏ qua fixed expenses phải phủ trước. Bẫy: xem target như toàn bộ số cần bù. Khóa: fixed vẫn tồn tại trước khi có profit.",
          },
          {
            id: "c",
            text: "Target profit − Fixed expenses.",
            isCorrect: false,
            rationale:
              "Cơ chế: trừ fixed làm giảm mức sales cần thiết một cách sai. Bẫy: đổi dấu fixed expenses. Khóa: fixed là khoản phải bù thêm, nên cộng.",
          },
          {
            id: "d",
            text: "Chỉ Fixed expenses.",
            isCorrect: false,
            rationale:
              "Cơ chế: chỉ fixed expenses là công thức break-even. Bẫy: dùng target profit = 0 cho câu target profit dương. Khóa: target profit phải cộng vào fixed.",
          },
        ],
        takeaway:
          "Target profit là break-even cộng thêm lợi nhuận mục tiêu vào tử số.",
      },
      {
        id: "q13",
        difficulty: "advanced",
        conceptTested: "Sales mix and multiproduct break-even",
        stem: "Khi sales mix dịch sang sản phẩm có CM ratio thấp hơn, các yếu tố khác không đổi, break-even sẽ thế nào?",
        options: [
          {
            id: "a",
            text: "Tăng.",
            isCorrect: true,
            rationale:
              "Cơ chế: weighted-average CM ratio giảm nên cần nhiều dollar sales hơn để phủ fixed. Bẫy: nghĩ tổng sales mix không ảnh hưởng. Khóa: multiproduct break-even phụ thuộc mix.",
          },
          {
            id: "b",
            text: "Giảm.",
            isCorrect: false,
            rationale:
              "Cơ chế: BE chỉ giảm khi weighted CM ratio tăng hoặc fixed giảm. Bẫy: đảo chiều ảnh hưởng của CM ratio. Khóa: CM ratio thấp hơn làm BE cao hơn.",
          },
          {
            id: "c",
            text: "Không đổi.",
            isCorrect: false,
            rationale:
              "Cơ chế: với multiproduct, mix thay đổi làm weighted-average CM ratio thay đổi. Bẫy: dùng mô hình một sản phẩm cho nhiều sản phẩm. Khóa: sales mix là giả định quan trọng của CVP.",
          },
          {
            id: "d",
            text: "Chỉ phụ thuộc fixed cost.",
            isCorrect: false,
            rationale:
              "Cơ chế: break-even dollar = fixed expenses ÷ weighted-average CM ratio. Bẫy: nhìn mỗi tử số. Khóa: mẫu số cũng quyết định BE.",
          },
        ],
        takeaway:
          "Sales mix nghiêng về sản phẩm CM ratio thấp làm weighted CM ratio giảm và break-even tăng.",
      },
      {
        id: "q14",
        difficulty: "intermediate",
        conceptTested: "Sales commission and contribution margin",
        stem: "Vì sao nên trả hoa hồng theo contribution margin thay vì theo doanh số?",
        options: [
          {
            id: "a",
            text: "Để sales không đẩy sản phẩm giá cao nhưng CM thấp; khớp lợi ích nhân viên với lợi nhuận công ty.",
            isCorrect: true,
            rationale:
              "Cơ chế: contribution margin phản ánh phần đóng góp vào fixed và profit. Bẫy: doanh số cao chưa chắc lời cao. Khóa: hoa hồng theo CM định hướng bán sản phẩm có lợi cho profit.",
          },
          {
            id: "b",
            text: "Vì contribution margin dễ tính hơn doanh số.",
            isCorrect: false,
            rationale:
              "Cơ chế: lý do chính không phải độ dễ tính mà là chất lượng động lực. Bẫy: biến vấn đề incentive thành vấn đề tiện tính. Khóa: mục tiêu là khớp hành vi bán hàng với profit.",
          },
          {
            id: "c",
            text: "Vì luật yêu cầu phải trả hoa hồng theo contribution margin.",
            isCorrect: false,
            rationale:
              "Cơ chế: đây là quyết định quản trị, không phải yêu cầu luật trong bài. Bẫy: gán thêm ràng buộc ngoài spec. Khóa: chọn cơ cấu hoa hồng để cải thiện quyết định bán hàng.",
          },
          {
            id: "d",
            text: "Để giảm fixed cost.",
            isCorrect: false,
            rationale:
              "Cơ chế: đổi cơ sở hoa hồng không trực tiếp làm fixed cost giảm. Bẫy: nhầm sales commission với chính sách cắt fixed. Khóa: vấn đề là mix sản phẩm và contribution margin.",
          },
        ],
        takeaway:
          "Hoa hồng theo contribution margin giúp sales ưu tiên sản phẩm thật sự đóng góp vào profit.",
      },
      {
        id: "q15",
        difficulty: "intermediate",
        conceptTested: "High-low method",
        stem: "Brentline Hospital có high activity là 8,000 patient-days với cost $9,800 và low activity là 5,000 patient-days với cost $7,400. Variable cost theo high-low là bao nhiêu?",
        options: [
          {
            id: "a",
            text: "$0.80/patient-day.",
            isCorrect: true,
            rationale:
              "Cơ chế: high-low lấy Δcost ÷ Δactivity = ($9,800 − $7,400) ÷ (8,000 − 5,000) = $2,400 ÷ 3,000 = $0.80. Bẫy: chia cost cao cho activity cao. Khóa: phải dùng chênh lệch giữa hai điểm.",
          },
          {
            id: "b",
            text: "$1.225/patient-day.",
            isCorrect: false,
            rationale:
              "Cơ chế: $9,800 ÷ 8,000 = $1.225 là cost bình quân tại điểm high, không phải variable cost. Bẫy: lấy average cost thay cho slope. Khóa: high-low cần Δcost ÷ Δactivity.",
          },
          {
            id: "c",
            text: "$0.75/patient-day.",
            isCorrect: false,
            rationale:
              "Cơ chế: số này không khớp chênh lệch $2,400 trên 3,000 patient-days. Bẫy: dùng sai một trong hai điểm. Khóa: chọn đúng high June và low March theo activity.",
          },
          {
            id: "d",
            text: "$1.96/patient-day.",
            isCorrect: false,
            rationale:
              "Cơ chế: đây không phải slope của đường cost. Bẫy: thao tác sai với cost và activity. Khóa: variable cost là độ dốc, không phải tổng cost chia riêng lẻ.",
          },
        ],
        takeaway:
          "High-low variable cost = chênh lệch cost ÷ chênh lệch activity.",
      },
      {
        id: "q16",
        difficulty: "basic",
        conceptTested: "High-low point selection",
        stem: "High-low method chọn hai kỳ theo tiêu chí nào?",
        options: [
          {
            id: "a",
            text: "Mức activity cao nhất và thấp nhất.",
            isCorrect: true,
            rationale:
              "Cơ chế: high-low đo slope của cost theo activity nên phải chọn cực trị của activity. Bẫy: chọn theo cost cao/thấp nhất. Khóa: high/low là high/low activity.",
          },
          {
            id: "b",
            text: "Mức cost cao nhất và thấp nhất.",
            isCorrect: false,
            rationale:
              "Cơ chế: cost cao nhất có thể do yếu tố bất thường, không nhất thiết là activity cao nhất. Bẫy: nhìn tên high-low rồi chọn cost. Khóa: sách chọn theo activity.",
          },
          {
            id: "c",
            text: "Hai kỳ gần nhất.",
            isCorrect: false,
            rationale:
              "Cơ chế: thời gian gần nhất không xác định độ dốc chi phí. Bẫy: nhầm forecast gần kỳ với high-low. Khóa: tiêu chí là activity, không phải thời gian.",
          },
          {
            id: "d",
            text: "Hai kỳ có cost gần trung bình nhất.",
            isCorrect: false,
            rationale:
              "Cơ chế: high-low cố ý dùng hai điểm cực trị activity, không dùng điểm trung bình. Bẫy: tưởng cực trị phải tránh. Khóa: điểm trung bình không tạo ra high-low slope.",
          },
        ],
        takeaway:
          "High-low chọn kỳ activity cao nhất và activity thấp nhất, không chọn theo cost.",
      },
      {
        id: "q17",
        difficulty: "intermediate",
        conceptTested: "R-squared in least-squares regression",
        stem: "Trong least-squares regression của Brentline, R² ≈ 0.90 nghĩa là gì?",
        options: [
          {
            id: "a",
            text: "Khoảng 90% biến thiên của cost được giải thích bởi activity.",
            isCorrect: true,
            rationale:
              "Cơ chế: R² đo goodness of fit, tức phần biến thiên của dependent variable được giải thích bởi independent variable. Bẫy: đọc R² như tỉ lệ sai số. Khóa: R² cao làm mô hình đáng tin hơn, nhưng không chứng minh hoàn hảo.",
          },
          {
            id: "b",
            text: "Sai số của mô hình là 90%.",
            isCorrect: false,
            rationale:
              "Cơ chế: R² = 0.90 là mức giải thích cao, không phải sai số cao. Bẫy: đảo nghĩa goodness of fit. Khóa: R² càng cao, fit càng tốt.",
          },
          {
            id: "c",
            text: "Variable cost chiếm 90% total cost.",
            isCorrect: false,
            rationale:
              "Cơ chế: R² không tách fixed và variable cost. Bẫy: nhầm thống kê fit với cấu trúc chi phí. Khóa: variable cost là slope b, không phải R².",
          },
          {
            id: "d",
            text: "Đường thẳng đúng chính xác 90% số kỳ.",
            isCorrect: false,
            rationale:
              "Cơ chế: R² không đếm số kỳ đúng/sai. Bẫy: biến R² thành tỉ lệ quan sát khớp tuyệt đối. Khóa: R² đo biến thiên được giải thích.",
          },
        ],
        takeaway:
          "R² cho biết mức độ activity giải thích biến thiên cost; R² ≈ 0.90 là fit khá mạnh.",
      },
    ],
  },
  {
    slug: "master-budget",
    order: 8,
    title: "Chapter 8 — Master Budgeting",
    bigIdea:
      'Master budget là bộ kế hoạch định lượng liên kết — khởi đầu từ sales forecast, chạy qua các budget sản xuất/chi phí/tiền mặt, kết tinh ở 3 báo cáo dự toán (cash budget, budgeted income statement, budgeted balance sheet). Vừa để plan (phối hợp nguồn lực, trả lời "what-if") vừa làm chuẩn để control (so actual với budget).',
    learningObjectives: [
      "LO1 — Hiểu vì sao tổ chức lập budget và quy trình lập.",
      "LO2 — Lập sales budget kèm schedule of expected cash collections.",
      "LO3 — Lập production budget.",
      "LO4 — Lập direct materials budget kèm schedule of cash disbursements cho mua NVL.",
      "LO5 — Lập direct labor budget.",
      "LO6 — Lập manufacturing overhead budget.",
      "LO7 — Lập selling and administrative expense budget.",
      "LO8 — Lập cash budget.",
      "LO9 — Lập budgeted income statement.",
      "LO10 — Lập budgeted balance sheet.",
    ],
    status: "ready",
    source:
      "Garrison, Noreen, Brewer — Managerial Accounting, 17e, Chapter 8 (slide '8. Master Budget')",
    knowledgeMap: {
      engine: "flow",
      title: "Knowledge map — Master Budgeting",
      layout: "tree",
      collapsible: true,
      caption:
        "Bấm từng chip để xem master budget nối từ sales forecast tới báo cáo dự toán.",
      nodes: [
        {
          id: "master",
          label: "Master Budget",
          group: "concept",
          detail:
            "Bộ kế hoạch định lượng liên kết, từ sales tới 3 báo cáo dự toán.",
          sectionId: "s1",
        },
        {
          id: "found",
          label: "Nền tảng",
          group: "concept",
          parent: "master",
          detail:
            "Các khái niệm giải thích vì sao budget dùng cho planning và control.",
          sectionId: "s0",
        },
        {
          id: "f-budget",
          label: "Budget & Planning/Control",
          group: "term",
          parent: "found",
          detail:
            "Budget là kế hoạch định lượng cho tương lai, dùng để planning trước kỳ và control trong/sau kỳ.",
          sectionId: "s0",
        },
        {
          id: "f-self",
          label: "Self-imposed budget",
          group: "term",
          parent: "found",
          detail:
            "Self-imposed budget do manager tham gia lập, tăng cam kết nhưng cần review để tránh budgetary slack.",
          sectionId: "s0",
        },
        {
          id: "f-cont",
          label: "Continuous budget",
          group: "term",
          parent: "found",
          detail:
            "Continuous budget là budget 12 tháng cuộn liên tục, thêm kỳ mới khi kỳ hiện tại kết thúc.",
          sectionId: "s0",
        },
        {
          id: "oper",
          label: "Operating budgets",
          group: "lo",
          parent: "master",
          detail:
            "Các budget vận hành bắt đầu từ sales rồi kéo theo production và chi phí.",
          sectionId: "s2",
        },
        {
          id: "o-sales",
          label: "Sales + cash collections",
          group: "term",
          parent: "oper",
          detail:
            "Sales budget tính doanh thu; schedule of expected cash collections chuyển doanh thu thành dòng tiền thu.",
          sectionId: "s2",
        },
        {
          id: "o-prod",
          label: "Production",
          group: "term",
          parent: "oper",
          detail:
            "Production budget tính số đơn vị cần sản xuất để đáp ứng sales và desired ending inventory.",
          sectionId: "s3",
        },
        {
          id: "o-dm",
          label: "Direct materials",
          group: "term",
          parent: "oper",
          detail:
            "Direct materials budget tính lượng NVL cần mua và lịch cash disbursements cho NVL.",
          sectionId: "s4",
        },
        {
          id: "o-dl",
          label: "Direct labor",
          group: "term",
          parent: "oper",
          detail:
            "Direct labor budget lấy production nhân giờ công mỗi đơn vị và wage rate.",
          sectionId: "s5",
        },
        {
          id: "o-moh",
          label: "Manufacturing overhead",
          group: "term",
          parent: "oper",
          detail:
            "Manufacturing overhead budget tách variable MOH theo activity và fixed MOH theo tháng.",
          sectionId: "s6",
        },
        {
          id: "o-fg",
          label: "Ending finished goods",
          group: "term",
          parent: "oper",
          detail:
            "Ending finished goods inventory budget tính unit product cost và giá trị finished goods cuối kỳ.",
          sectionId: "s7",
        },
        {
          id: "o-sa",
          label: "Selling & admin",
          group: "term",
          parent: "oper",
          detail:
            "Selling & administrative expense budget tách variable theo unit bán và fixed theo tháng.",
          sectionId: "s8",
        },
        {
          id: "fin",
          label: "Financial budgets",
          group: "lo",
          parent: "master",
          detail:
            "Financial budgets gom dòng tiền và kết tinh thành báo cáo dự toán.",
          sectionId: "s9",
        },
        {
          id: "n-cash",
          label: "Cash budget",
          group: "term",
          parent: "fin",
          detail:
            "Cash budget cho biết khi nào thiếu/dư tiền và cần vay hay trả nợ.",
          sectionId: "s9",
        },
        {
          id: "n-is",
          label: "Budgeted income statement",
          group: "term",
          parent: "fin",
          detail:
            "Budgeted income statement dùng các budget trước đó và lãi vay từ cash budget để dự toán lợi nhuận.",
          sectionId: "s10",
        },
        {
          id: "n-bs",
          label: "Budgeted balance sheet",
          group: "term",
          parent: "fin",
          detail:
            "Budgeted balance sheet là báo cáo dự toán cuối cùng, dùng số dư từ các budget và số đầu kỳ.",
          sectionId: "s10",
        },
      ],
      edges: [
        { from: "master", to: "found" },
        { from: "found", to: "f-budget" },
        { from: "found", to: "f-self" },
        { from: "found", to: "f-cont" },
        { from: "master", to: "oper" },
        { from: "oper", to: "o-sales" },
        { from: "oper", to: "o-prod" },
        { from: "oper", to: "o-dm" },
        { from: "oper", to: "o-dl" },
        { from: "oper", to: "o-moh" },
        { from: "oper", to: "o-fg" },
        { from: "oper", to: "o-sa" },
        { from: "master", to: "fin" },
        { from: "fin", to: "n-cash" },
        { from: "fin", to: "n-is" },
        { from: "fin", to: "n-bs" },
      ],
    },
    sections: [
      {
        id: "s0",
        heading: "Vì sao lập budget? Planning, Control & Self-imposed budget (LO1)",
        blocks: [
          {
            type: "prose",
            body:
              "Budget là kế hoạch chi tiết cho tương lai, thường ở dạng định lượng, để acquiring và using nguồn lực trong một kỳ. Budget phục vụ hai mục đích chính: Planning là đặt mục tiêu và lập các budget để đạt mục tiêu; Control là so actual với budget để giữ tổ chức đi đúng hướng.",
          },
          {
            type: "comparison",
            table: {
              title: "Planning vs Control",
              columns: ["", "Planning", "Control"],
              rows: [
                {
                  label: "Bản chất",
                  cells: [
                    "Đặt mục tiêu & cách đạt",
                    "Thu thập feedback, so actual vs budget",
                  ],
                },
                {
                  label: "Thời điểm",
                  cells: ["Trước kỳ", "Trong & sau kỳ"],
                },
              ],
            },
          },
          {
            type: "callout",
            callout: {
              kind: "insight",
              title: "Self-imposed (participative) budget",
              body:
                "Budget do chính manager các cấp lập rồi cấp trên review. Ưu điểm: ước tính sát thực tế hơn, tạo động lực và cam kết, quy trách nhiệm rõ hơn. Rủi ro là budgetary slack: cố tình đặt mục tiêu dễ đạt, nên vẫn cần management review.",
            },
          },
        ],
        keyTerms: [
          {
            term: "Budget",
            definition:
              "Kế hoạch chi tiết cho tương lai, thường được biểu diễn bằng số lượng và tiền.",
          },
          {
            term: "Planning",
            definition:
              "Đặt mục tiêu và chuẩn bị các budget để đạt mục tiêu đó.",
          },
          {
            term: "Control",
            definition:
              "Thu thập feedback và so actual với budget để điều chỉnh hoạt động.",
          },
          {
            term: "Self-imposed budget / Participative budget",
            definition:
              "Budget được lập với sự tham gia của manager chịu trách nhiệm thực hiện budget đó.",
          },
          {
            term: "Continuous budget / Perpetual budget",
            definition:
              "Budget 12 tháng cuộn liên tục, thêm một tháng hoặc một quý mới khi kỳ hiện tại kết thúc.",
          },
        ],
      },
      {
        id: "s1",
        heading: "Master budget: 10 schedule & trình tự liên kết",
        blocks: [
          {
            type: "prose",
            body:
              "Master budget là nhiều budget riêng nhưng phụ thuộc nhau, trình bày mục tiêu sales, sản xuất và tài chính. Điểm khởi đầu luôn là sales budget, vì sales forecast kéo theo sản xuất, mua NVL, nhân công, overhead, cash budget và cuối cùng là budgeted financial statements.",
          },
          {
            type: "diagram",
            diagram: {
              engine: "flow",
              title: "Trình tự master budget",
              layout: "horizontal",
              caption:
                "Sales budget là điểm bắt đầu; các schedule vận hành đổ dữ liệu vào cash budget và báo cáo dự toán.",
              nodes: [
                {
                  id: "SALES",
                  label: "Sales budget",
                  group: "concept",
                  detail:
                    "Dự báo số unit bán và doanh thu; là điểm khởi đầu của master budget.",
                  sectionId: "s1",
                },
                {
                  id: "PROD",
                  label: "Production budget",
                  group: "concept",
                  detail:
                    "Tính số đơn vị cần sản xuất dựa trên sales và desired inventory.",
                  sectionId: "s1",
                },
                {
                  id: "DM",
                  label: "Direct materials",
                  group: "term",
                  detail:
                    "Tính NVL cần mua và lịch trả tiền cho NVL.",
                  sectionId: "s1",
                },
                {
                  id: "DL",
                  label: "Direct labor",
                  group: "term",
                  detail:
                    "Tính giờ công và chi phí lao động trực tiếp cần cho production.",
                  sectionId: "s1",
                },
                {
                  id: "MOH",
                  label: "Mfg overhead",
                  group: "term",
                  detail:
                    "Tính overhead sản xuất theo phần variable và fixed.",
                  sectionId: "s1",
                },
                {
                  id: "FG",
                  label: "Ending finished goods",
                  group: "term",
                  detail:
                    "Tính giá trị finished goods cuối kỳ và unit product cost.",
                  sectionId: "s1",
                },
                {
                  id: "SA",
                  label: "Selling & admin",
                  group: "term",
                  detail:
                    "Tính selling and administrative expenses theo phần variable và fixed.",
                  sectionId: "s1",
                },
                {
                  id: "CASH",
                  label: "Cash budget",
                  group: "concept",
                  detail:
                    "Gom receipts, disbursements, excess/deficiency và financing.",
                  sectionId: "s1",
                },
                {
                  id: "IS",
                  label: "Budgeted income statement",
                  group: "concept",
                  detail:
                    "Dự toán lợi nhuận sau khi có chi phí và interest từ cash budget.",
                  sectionId: "s1",
                },
                {
                  id: "BS",
                  label: "Budgeted balance sheet",
                  group: "concept",
                  detail:
                    "Dự toán vị thế tài chính cuối kỳ từ các schedule và số dư đầu kỳ.",
                  sectionId: "s1",
                },
              ],
              edges: [
                { from: "SALES", to: "PROD", animated: true },
                { from: "PROD", to: "DM", animated: true },
                { from: "PROD", to: "DL", animated: true },
                { from: "PROD", to: "MOH", animated: true },
                { from: "DM", to: "FG", animated: true },
                { from: "DL", to: "FG", animated: true },
                { from: "MOH", to: "FG", animated: true },
                { from: "SALES", to: "SA", animated: true },
                { from: "SALES", to: "CASH", label: "thu tiền", animated: true },
                { from: "DM", to: "CASH", label: "chi tiền", animated: true },
                { from: "DL", to: "CASH", label: "chi tiền", animated: true },
                { from: "MOH", to: "CASH", label: "chi tiền", animated: true },
                { from: "SA", to: "CASH", label: "chi tiền", animated: true },
                { from: "CASH", to: "IS", animated: true },
                { from: "IS", to: "BS", animated: true },
              ],
            },
          },
          {
            type: "callout",
            callout: {
              kind: "note",
              title: "10 schedule",
              body:
                "Master budget trả lời: bán bao nhiêu, thu bao nhiêu tiền, sản xuất bao nhiêu, mua bao nhiêu NVL, cần bao nhiêu lao động, tốn bao nhiêu overhead, tồn kho cuối kỳ bao nhiêu, chi S&A bao nhiêu, vay/trả bao nhiêu, và báo cáo dự toán cuối kỳ ra sao.",
            },
          },
        ],
        keyTerms: [
          {
            term: "Master budget",
            definition:
              "Bộ budget liên kết trình bày mục tiêu sales, sản xuất và tài chính của doanh nghiệp.",
          },
          {
            term: "Sales forecast",
            definition:
              "Dự báo sales làm điểm khởi đầu cho master budget.",
          },
        ],
      },
      {
        id: "s2",
        heading: "Sales budget + cash collections (LO2)",
        blocks: [
          {
            type: "prose",
            body:
              "Sales budget = số unit dự kiến bán × selling price. Schedule of expected cash collections tách doanh thu thành dòng tiền theo collection pattern, vì doanh thu ghi nhận không luôn bằng tiền thu ngay.",
          },
          {
            type: "calc",
            calc: {
              title: "Royal: thu tiền quý",
              steps: [
                {
                  label: "April",
                  expr: "AR $30,000 + 70%×$200,000 = $170,000",
                },
                {
                  label: "May",
                  expr: "30%×$200,000 + 70%×$500,000 = $410,000",
                },
                {
                  label: "June",
                  expr: "30%×$500,000 + 70%×$300,000 = $360,000",
                },
              ],
              result: "Tổng thu quý = $940,000",
              meaning:
                "Doanh thu ghi nhận không bằng tiền thực thu trong kỳ; collection pattern quyết định dòng tiền.",
              implication:
                "Bán nhiều mà thu chậm vẫn có thể thiếu tiền mặt, nên phải lập cash collections riêng.",
            },
          },
        ],
      },
      {
        id: "s3",
        heading: "Production budget (LO3)",
        blocks: [
          {
            type: "formula",
            formula: {
              expression:
                "Required production = Budgeted sales + Desired ending inventory − Beginning inventory",
              legend: [
                {
                  symbol: "Royal",
                  meaning: "ending inventory = 20% sales tháng sau",
                },
              ],
              note: "Doanh nghiệp thương mại lập merchandise purchases budget thay vì production budget.",
            },
          },
          {
            type: "calc",
            calc: {
              title: "Royal: production May",
              steps: [
                {
                  label: "Sales May + desired ending",
                  expr: "50,000 + (20%×June 30,000 = 6,000) = 56,000",
                },
                {
                  label: "Trừ beginning inventory",
                  expr: "56,000 − (20%×May 50,000 = 10,000)",
                },
              ],
              result: "Production May = 46,000 units",
              meaning:
                "Sản xuất phải đủ cho sales và tồn kho cuối kỳ mong muốn.",
              implication:
                "Quên cộng ending inventory hoặc trừ beginning inventory sẽ làm kế hoạch sản xuất sai.",
            },
          },
        ],
      },
      {
        id: "s4",
        heading: "Direct materials budget + cash disbursements (LO4)",
        blocks: [
          {
            type: "formula",
            formula: {
              expression:
                "Required purchases = (Production × usage/unit) + Desired ending materials − Beginning materials",
              legend: [
                {
                  symbol: "Royal",
                  meaning:
                    "5 lb/unit, ending materials = 10% nhu cầu SX tháng sau, $0.40/lb",
                },
              ],
              note: "Cùng logic nhu cầu + tồn cuối − tồn đầu, nhưng đổi đơn vị sang pounds of materials.",
            },
          },
          {
            type: "calc",
            calc: {
              title: "Royal: NVL mua trong May",
              steps: [
                {
                  label: "Nhu cầu SX May",
                  expr: "46,000 × 5 lb = 230,000 lb",
                },
                {
                  label: "Cộng ending, trừ beginning",
                  expr: "230,000 + 14,500 − 23,000",
                },
              ],
              result: "Mua May = 221,500 lb",
              meaning:
                "Direct materials budget dùng cùng logic production budget nhưng tính theo NVL cần cho sản xuất.",
              implication:
                "Cash disbursements cho NVL còn phụ thuộc lịch trả; Royal trả 50% tháng mua và 50% tháng sau.",
            },
          },
        ],
      },
      {
        id: "s5",
        heading: "Direct labor budget (LO5)",
        blocks: [
          {
            type: "prose",
            body:
              "Direct labor budget = production × giờ công/unit × wage rate. Royal dùng 0.05 giờ (3 phút) mỗi unit và $10/giờ, nên budget này giúp dự liệu nhu cầu nhân lực trước khi kỳ diễn ra.",
          },
          {
            type: "callout",
            callout: {
              kind: "note",
              title: "Phụ thuộc production budget",
              body:
                "Direct labor budget bắt nguồn từ production budget: sản xuất bao nhiêu quyết định cần bao nhiêu giờ công.",
            },
          },
        ],
      },
      {
        id: "s6",
        heading: "Manufacturing overhead budget (LO6)",
        blocks: [
          {
            type: "calc",
            calc: {
              title: "Royal: MOH & predetermined rate",
              steps: [
                {
                  label: "Variable MOH",
                  expr: "$20/DLH × tổng DLH",
                },
                {
                  label: "Fixed MOH",
                  expr: "$50,000/tháng, gồm $20,000 depreciation noncash",
                },
                {
                  label: "Predetermined rate",
                  expr: "tổng MOH quý $251,000 ÷ 5,050 DLH = $49.70/giờ",
                },
              ],
              result:
                "MOH gồm phần variable theo DLH + fixed cố định/tháng",
              meaning:
                "Manufacturing overhead budget tách phần cash và noncash để phục vụ cả product cost lẫn cash budget.",
              implication:
                "Phần noncash như depreciation phải trừ ra khi tính cash disbursement cho MOH.",
            },
          },
          {
            type: "callout",
            callout: {
              kind: "trap",
              title: "Noncash cost",
              body:
                "Đừng tính depreciation vào dòng tiền chi; depreciation là expense nhưng không phải cash disbursement.",
            },
          },
        ],
      },
      {
        id: "s7",
        heading: "Ending finished goods inventory budget",
        blocks: [
          {
            type: "prose",
            body:
              "Ending finished goods inventory budget tính unit product cost gồm DM, DL và MOH áp, rồi nhân với số đơn vị tồn cuối kỳ để ra giá trị finished goods trên budgeted balance sheet. Royal có tồn cuối 5,000 units với đơn giá khoảng $4.99.",
          },
          {
            type: "callout",
            callout: {
              kind: "key",
              title: "Cầu nối báo cáo",
              body:
                "Budget này gắn chi phí sản xuất vào tồn kho trên balance sheet và COGS trên income statement.",
            },
          },
        ],
      },
      {
        id: "s8",
        heading: "Selling & administrative expense budget (LO7)",
        blocks: [
          {
            type: "prose",
            body:
              "Selling & administrative expense budget tách variable cost và fixed cost. Royal có variable S&A $0.50/unit bán và fixed S&A $70,000/tháng, trong đó $10,000 là noncash. Cash disbursement cho S&A = tổng S&A − phần noncash.",
          },
        ],
      },
      {
        id: "s9",
        heading: "Cash budget (LO8)",
        blocks: [
          {
            type: "prose",
            body:
              "Cash budget gom mọi dòng tiền và chia thành bốn phần: cash receipts, cash disbursements, cash excess/deficiency, và financing. Nó loại trừ financing khỏi receipts/disbursements vận hành để nhìn rõ hoạt động tạo hay tiêu tiền trước khi vay/trả.",
          },
          {
            type: "calc",
            calc: {
              title: "Royal: cần vay bao nhiêu?",
              steps: [
                {
                  label: "Min cash balance",
                  expr: "Royal giữ tối thiểu $30,000; cash khả dụng < min → thiếu hụt",
                },
                {
                  label: "Vay trên line of credit 16%",
                  expr: "vay $48,000 đầu tháng",
                },
                {
                  label: "Lãi vay",
                  expr: "$48,000 × 16% × 3/12 = $1,920",
                },
              ],
              result: "Vay $48,000, lãi $1,920 (vay 1/4, trả 30/6)",
              meaning:
                "Cash budget cho biết khi nào thiếu hoặc dư tiền để chủ động vay hoặc trả nợ.",
              implication:
                "Lợi nhuận dương vẫn có thể cạn tiền mặt; cash budget mới lộ ra điều đó.",
            },
          },
          {
            type: "comparison",
            table: {
              title: "4 phần của Cash Budget",
              columns: ["Phần", "Nội dung"],
              rows: [
                {
                  label: "Receipts",
                  cells: ["Mọi dòng thu, trừ financing."],
                },
                {
                  label: "Disbursements",
                  cells: ["Mọi dòng chi, trừ trả gốc và lãi vay."],
                },
                {
                  label: "Excess/Deficiency",
                  cells: ["Đối chiếu minimum cash balance để biết vay hay trả."],
                },
                {
                  label: "Financing",
                  cells: ["Chi tiết vay, trả nợ và interest."],
                },
              ],
            },
          },
        ],
      },
      {
        id: "s10",
        heading: "Budgeted income statement & balance sheet (LO9, LO10)",
        blocks: [
          {
            type: "prose",
            body:
              "Sau khi có interest từ cash budget, doanh nghiệp lập budgeted income statement: Sales $1,000,000 trừ COGS, S&A và interest $1,920 để ra net income. Cuối cùng budgeted balance sheet dùng số dư từ các budget và thông tin đầu kỳ như Land $50,000, Common stock $150,000, Retained earnings $248,650 và Equipment $175,000.",
          },
          {
            type: "callout",
            callout: {
              kind: "key",
              title: "Đích của master budget",
              body:
                "Budgeted income statement và budgeted balance sheet là đích của master budget: mọi schedule trước đó đổ số vào hai báo cáo này để tạo what-if tài chính trước khi kỳ thật diễn ra.",
            },
          },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        difficulty: "basic",
        conceptTested: "Starting point of master budget",
        stem: "Điểm khởi đầu của master budget là gì?",
        options: [
          {
            id: "a",
            text: "Sales budget dựa trên sales forecast.",
            isCorrect: true,
            rationale:
              "Cơ chế: sales forecast quyết định cần sản xuất, mua NVL, cần lao động và thu tiền thế nào. Bẫy: bắt đầu từ production budget. Khóa: master budget bắt đầu bằng sales budget.",
          },
          {
            id: "b",
            text: "Production budget.",
            isCorrect: false,
            rationale:
              "Cơ chế: production budget phụ thuộc sales budget và desired ending inventory. Bẫy: nhìn sản xuất là khâu đầu trong nhà máy. Khóa: không biết sales thì chưa biết cần sản xuất bao nhiêu.",
          },
          {
            id: "c",
            text: "Cash budget.",
            isCorrect: false,
            rationale:
              "Cơ chế: cash budget cần dữ liệu từ sales collections, purchases, payroll và nhiều budget trước đó. Bẫy: nghĩ tiền mặt là quan trọng nhất nên làm trước. Khóa: cash budget đến sau operating budgets.",
          },
          {
            id: "d",
            text: "Budgeted balance sheet.",
            isCorrect: false,
            rationale:
              "Cơ chế: budgeted balance sheet là báo cáo dự toán cuối cùng. Bẫy: bắt đầu từ đích đến. Khóa: balance sheet dùng số từ các schedule trước.",
          },
        ],
        takeaway:
          "Master budget bắt đầu từ sales budget vì sales kéo theo toàn bộ budget còn lại.",
      },
      {
        id: "q2",
        difficulty: "basic",
        conceptTested: "Purpose of budgeting",
        stem: "Budget phục vụ hai mục đích chính nào?",
        options: [
          {
            id: "a",
            text: "Planning & Control.",
            isCorrect: true,
            rationale:
              "Cơ chế: planning đặt mục tiêu và lập kế hoạch; control so actual với budget để điều chỉnh. Bẫy: ghép planning với pricing. Khóa: budget vừa nhìn trước vừa kiểm soát sau.",
          },
          {
            id: "b",
            text: "Planning & Pricing.",
            isCorrect: false,
            rationale:
              "Cơ chế: pricing có thể dùng thông tin budget nhưng không phải cặp mục đích chuẩn. Bẫy: kéo quyết định giá vào định nghĩa budget. Khóa: cặp trong sách là planning và control.",
          },
          {
            id: "c",
            text: "Control & Taxation.",
            isCorrect: false,
            rationale:
              "Cơ chế: taxation không phải mục đích chính của master budget. Bẫy: nhầm budget nội bộ với hồ sơ thuế. Khóa: budget phục vụ quản trị, không phải khai thuế.",
          },
          {
            id: "d",
            text: "Forecasting & Auditing.",
            isCorrect: false,
            rationale:
              "Cơ chế: forecast là đầu vào, auditing là kiểm toán; chúng không phải hai mục đích chính của budget. Bẫy: dùng từ nghe gần quản trị. Khóa: planning và control mới là cặp chuẩn.",
          },
        ],
        takeaway:
          "Budget dùng để planning trước kỳ và control trong/sau kỳ.",
      },
      {
        id: "q3",
        difficulty: "intermediate",
        conceptTested: "Schedule of expected cash collections",
        stem: "Royal thu 70% trong tháng bán và 30% tháng kế; AR 31/3 là $30,000. Tổng cash collections quý Apr–Jun là bao nhiêu?",
        options: [
          {
            id: "a",
            text: "$940,000.",
            isCorrect: true,
            rationale:
              "Cơ chế: April $170,000 + May $410,000 + June $360,000 = $940,000. Bẫy: lấy sales quý $1,000,000 làm tiền thu. Khóa: collection pattern làm doanh thu và cash receipts lệch nhau.",
          },
          {
            id: "b",
            text: "$700,000.",
            isCorrect: false,
            rationale:
              "Cơ chế: $700,000 giống chỉ lấy 70% sales quý, bỏ AR đầu kỳ và 30% của các tháng trước/sau. Bẫy: áp một tỷ lệ lên cả quý. Khóa: phải tính từng tháng.",
          },
          {
            id: "c",
            text: "$220,000.",
            isCorrect: false,
            rationale:
              "Cơ chế: số này không gom đủ April, May và June collections. Bẫy: chỉ nhìn một phần dòng tiền. Khóa: tổng quý là cộng ba tháng thu tiền.",
          },
          {
            id: "d",
            text: "$190,000.",
            isCorrect: false,
            rationale:
              "Cơ chế: $190,000 bỏ phần collections lớn của May và June. Bẫy: nhầm AR với cash collections toàn quý. Khóa: cần schedule of expected cash collections.",
          },
        ],
        takeaway:
          "Cash collections quý Royal là $940,000, không bằng sales quý $1,000,000.",
      },
      {
        id: "q4",
        difficulty: "intermediate",
        conceptTested: "Production budget",
        stem: "Royal muốn ending inventory bằng 20% sales tháng sau. Sales May 50,000 units, June 30,000 units; beginning inventory May là 10,000 units. Production May là bao nhiêu?",
        options: [
          {
            id: "a",
            text: "46,000 units.",
            isCorrect: true,
            rationale:
              "Cơ chế: production = sales 50,000 + desired ending 6,000 − beginning 10,000 = 46,000. Bẫy: quên trừ beginning inventory. Khóa: production budget luôn cộng ending rồi trừ beginning.",
          },
          {
            id: "b",
            text: "56,000 units.",
            isCorrect: false,
            rationale:
              "Cơ chế: 56,000 là sales + desired ending trước khi trừ beginning inventory. Bẫy: bỏ tồn đầu kỳ. Khóa: hàng đã có đầu kỳ làm giảm số cần sản xuất.",
          },
          {
            id: "c",
            text: "62,000 units.",
            isCorrect: false,
            rationale:
              "Cơ chế: số này cộng sai inventory hoặc dùng sai tháng. Bẫy: lẫn desired ending của tháng khác. Khóa: ending May dựa trên June sales.",
          },
          {
            id: "d",
            text: "52,000 units.",
            isCorrect: false,
            rationale:
              "Cơ chế: 52,000 không khớp công thức production budget. Bẫy: dùng sai tỷ lệ hoặc sai base sales. Khóa: 20% × June 30,000 = 6,000.",
          },
        ],
        takeaway:
          "Production May của Royal là 46,000 units.",
      },
      {
        id: "q5",
        difficulty: "advanced",
        conceptTested: "Direct materials purchases budget",
        stem: "Royal cần 5 lb materials/unit, production May 46,000 units, desired ending materials là 14,500 lb và beginning materials là 23,000 lb. NVL cần mua trong May là bao nhiêu?",
        options: [
          {
            id: "a",
            text: "221,500 lb.",
            isCorrect: true,
            rationale:
              "Cơ chế: nhu cầu SX = 46,000 × 5 = 230,000 lb; purchases = 230,000 + 14,500 − 23,000 = 221,500 lb. Bẫy: chỉ lấy nhu cầu sản xuất. Khóa: direct materials purchases cũng có ending và beginning inventory.",
          },
          {
            id: "b",
            text: "230,000 lb.",
            isCorrect: false,
            rationale:
              "Cơ chế: 230,000 lb chỉ là materials needed for production. Bẫy: bỏ tồn cuối và tồn đầu materials. Khóa: purchases = need + ending − beginning.",
          },
          {
            id: "c",
            text: "240,000 lb.",
            isCorrect: false,
            rationale:
              "Cơ chế: số này không dùng đúng beginning 23,000 và ending 14,500. Bẫy: cộng/trừ inventory sai dấu. Khóa: beginning inventory làm giảm mua.",
          },
          {
            id: "d",
            text: "211,500 lb.",
            isCorrect: false,
            rationale:
              "Cơ chế: 211,500 giống trừ thêm inventory hoặc dùng sai desired ending. Bẫy: đảo dấu một phần tồn kho. Khóa: cần cộng desired ending và trừ beginning.",
          },
        ],
        takeaway:
          "Royal mua May 221,500 lb materials.",
      },
      {
        id: "q6",
        difficulty: "intermediate",
        conceptTested: "Production budget formula",
        stem: "Công thức production budget đúng là gì?",
        options: [
          {
            id: "a",
            text: "Sales + desired ending inventory − beginning inventory.",
            isCorrect: true,
            rationale:
              "Cơ chế: cần đủ hàng để bán và để lại tồn cuối, nhưng đã có tồn đầu thì không cần sản xuất lại. Bẫy: đảo dấu tồn kho. Khóa: + ending, − beginning.",
          },
          {
            id: "b",
            text: "Sales − desired ending inventory + beginning inventory.",
            isCorrect: false,
            rationale:
              "Cơ chế: đây là sai dấu cả hai inventory. Bẫy: tưởng ending inventory làm giảm sản xuất. Khóa: muốn có ending inventory thì phải sản xuất thêm.",
          },
          {
            id: "c",
            text: "Sales only.",
            isCorrect: false,
            rationale:
              "Cơ chế: nếu bỏ inventory thì không đảm bảo tồn cuối và tồn đầu. Bẫy: đồng nhất sales với production. Khóa: sales và production khác nhau khi inventory thay đổi.",
          },
          {
            id: "d",
            text: "Sales + beginning inventory − desired ending inventory.",
            isCorrect: false,
            rationale:
              "Cơ chế: bắt đầu kỳ đã có hàng nên phải trừ beginning, không cộng. Bẫy: đảo vai trò tồn đầu và tồn cuối. Khóa: beginning giảm nhu cầu sản xuất.",
          },
        ],
        takeaway:
          "Production budget = budgeted sales + desired ending inventory − beginning inventory.",
      },
      {
        id: "q7",
        difficulty: "basic",
        conceptTested: "Merchandising budget",
        stem: "Doanh nghiệp thương mại lập budget nào thay cho production budget?",
        options: [
          {
            id: "a",
            text: "Merchandise purchases budget.",
            isCorrect: true,
            rationale:
              "Cơ chế: doanh nghiệp thương mại không sản xuất nên lập kế hoạch mua hàng để bán. Bẫy: vẫn dùng production budget. Khóa: manufacturer sản xuất, merchandiser mua hàng.",
          },
          {
            id: "b",
            text: "Sales budget.",
            isCorrect: false,
            rationale:
              "Cơ chế: sales budget vẫn có ở cả hai loại doanh nghiệp, nhưng không thay cho production budget. Bẫy: chọn budget mở đầu thay vì budget thay thế. Khóa: thay thế là merchandise purchases budget.",
          },
          {
            id: "c",
            text: "Cash budget.",
            isCorrect: false,
            rationale:
              "Cơ chế: cash budget là financial budget, không thay thế kế hoạch hàng hóa. Bẫy: nhầm dòng tiền với hàng tồn kho. Khóa: cần budget mua hàng trước khi ra cash disbursements.",
          },
          {
            id: "d",
            text: "Không cần budget nào.",
            isCorrect: false,
            rationale:
              "Cơ chế: doanh nghiệp thương mại vẫn cần lập budget mua hàng. Bẫy: không sản xuất nên tưởng không cần kế hoạch hàng hóa. Khóa: không sản xuất không có nghĩa là không cần inventory planning.",
          },
        ],
        takeaway:
          "Merchandiser dùng merchandise purchases budget thay cho production budget.",
      },
      {
        id: "q8",
        difficulty: "intermediate",
        conceptTested: "Cash budget structure",
        stem: "Cash budget gồm mấy phần chính và là những phần nào?",
        options: [
          {
            id: "a",
            text: "4 phần: receipts, disbursements, excess/deficiency, financing.",
            isCorrect: true,
            rationale:
              "Cơ chế: cash budget tách dòng thu, dòng chi, tình trạng thiếu/dư so với min cash và phần vay/trả. Bẫy: chỉ nghĩ thu/chi. Khóa: financing là phần riêng sau excess/deficiency.",
          },
          {
            id: "b",
            text: "3 phần: receipts, disbursements, income statement.",
            isCorrect: false,
            rationale:
              "Cơ chế: income statement không phải một phần của cash budget. Bẫy: trộn financial statement với budget dòng tiền. Khóa: cash budget có excess/deficiency và financing.",
          },
          {
            id: "c",
            text: "2 phần: thu và chi.",
            isCorrect: false,
            rationale:
              "Cơ chế: thu và chi chưa cho biết cần vay/trả thế nào. Bẫy: quá đơn giản hóa cash budget. Khóa: phải có excess/deficiency và financing.",
          },
          {
            id: "d",
            text: "5 phần gồm cả thuế.",
            isCorrect: false,
            rationale:
              "Cơ chế: thuế có thể là một dòng chi, nhưng không phải phần cấu trúc riêng trong cash budget. Bẫy: biến một khoản mục thành một phần. Khóa: cấu trúc chuẩn có 4 phần.",
          },
        ],
        takeaway:
          "Cash budget có 4 phần: receipts, disbursements, excess/deficiency và financing.",
      },
      {
        id: "q9",
        difficulty: "intermediate",
        conceptTested: "Noncash expenses in cash budget",
        stem: "Khi tính cash disbursement cho MOH hoặc S&A, depreciation xử lý thế nào?",
        options: [
          {
            id: "a",
            text: "Trừ ra vì là noncash.",
            isCorrect: true,
            rationale:
              "Cơ chế: depreciation là expense nhưng không làm tiền mặt chi ra trong kỳ. Bẫy: giữ nguyên tổng expense làm cash disbursement. Khóa: cash budget chỉ ghi dòng tiền.",
          },
          {
            id: "b",
            text: "Cộng vào vì là chi phí.",
            isCorrect: false,
            rationale:
              "Cơ chế: cash budget không cộng noncash expense vào tiền chi. Bẫy: nhầm expense với cash outflow. Khóa: depreciation không làm giảm cash.",
          },
          {
            id: "c",
            text: "Giữ nguyên vì đã nằm trong budget.",
            isCorrect: false,
            rationale:
              "Cơ chế: total budgeted expense dùng cho income statement, nhưng cash disbursement phải loại noncash. Bẫy: dùng cùng một số cho mọi schedule. Khóa: mục đích budget khác nhau thì điều chỉnh khác nhau.",
          },
          {
            id: "d",
            text: "Nhân đôi để phản ánh hao mòn tài sản.",
            isCorrect: false,
            rationale:
              "Cơ chế: depreciation không phải dòng tiền nên không nhân đôi trong cash budget. Bẫy: diễn giải kinh tế hao mòn thành tiền chi. Khóa: chỉ cash outflow mới vào disbursements.",
          },
        ],
        takeaway:
          "Depreciation phải trừ khỏi cash disbursement vì là noncash.",
      },
      {
        id: "q10",
        difficulty: "basic",
        conceptTested: "Budgetary slack",
        stem: "Budgetary slack là gì?",
        options: [
          {
            id: "a",
            text: "Cố tình đặt mục tiêu budget dễ đạt để bản thân trông tốt.",
            isCorrect: true,
            rationale:
              "Cơ chế: manager có thể understate revenue hoặc overstate cost để tạo cushion. Bẫy: hiểu slack là tiền chưa dùng. Khóa: slack là hành vi làm budget dễ đạt.",
          },
          {
            id: "b",
            text: "Phần budget chưa dùng cuối kỳ.",
            isCorrect: false,
            rationale:
              "Cơ chế: phần chưa dùng không tự động là budgetary slack. Bẫy: hiểu slack theo nghĩa còn dư. Khóa: budgetary slack là cố tình đặt mục tiêu dễ.",
          },
          {
            id: "c",
            text: "Sai số dự báo khách quan.",
            isCorrect: false,
            rationale:
              "Cơ chế: forecast error có thể vô tình; budgetary slack là có chủ ý. Bẫy: đánh đồng sai số với hành vi. Khóa: yếu tố cố tình là trọng tâm.",
          },
          {
            id: "d",
            text: "Khoản dự phòng tiền mặt tối thiểu.",
            isCorrect: false,
            rationale:
              "Cơ chế: minimum cash balance là chính sách thanh khoản, không phải slack. Bẫy: nhầm cushion tiền mặt với cushion trong target. Khóa: slack nằm trong cách đặt budget.",
          },
        ],
        takeaway:
          "Budgetary slack là cố tình làm budget dễ đạt; self-imposed budget cần review để hạn chế slack.",
      },
      {
        id: "q11",
        difficulty: "basic",
        conceptTested: "Continuous budget",
        stem: "Continuous (perpetual) budget là gì?",
        options: [
          {
            id: "a",
            text: "Budget 12 tháng cuộn liên tục, thêm một tháng hoặc quý mới khi kỳ hiện tại kết thúc.",
            isCorrect: true,
            rationale:
              "Cơ chế: continuous budget luôn duy trì horizon tương lai bằng cách thêm kỳ mới. Bẫy: nghĩ budget cố định một năm. Khóa: continuous nghĩa là cuộn liên tục.",
          },
          {
            id: "b",
            text: "Budget cố định 1 năm và không thêm kỳ mới.",
            isCorrect: false,
            rationale:
              "Cơ chế: đó là static annual budget, không phải continuous budget. Bẫy: đồng nhất mọi budget với năm tài chính. Khóa: continuous luôn cập nhật horizon.",
          },
          {
            id: "c",
            text: "Budget không bao giờ sửa.",
            isCorrect: false,
            rationale:
              "Cơ chế: continuous budget được cập nhật khi kỳ trôi qua. Bẫy: hiểu perpetual là bất biến. Khóa: perpetual ở đây là luôn kéo dài, không phải đứng yên.",
          },
          {
            id: "d",
            text: "Budget chỉ dùng cho tiền mặt.",
            isCorrect: false,
            rationale:
              "Cơ chế: continuous budget là cách tổ chức thời gian budget, không phải riêng cash budget. Bẫy: kéo nhầm cash budget vào khái niệm. Khóa: nó áp dụng cho hệ budget nói chung.",
          },
        ],
        takeaway:
          "Continuous budget giữ tầm nhìn 12 tháng/quý phía trước bằng cách cuộn thêm kỳ mới.",
      },
      {
        id: "q12",
        difficulty: "intermediate",
        conceptTested: "Self-imposed budget advantages",
        stem: "Ưu điểm chính của self-imposed budget là gì?",
        options: [
          {
            id: "a",
            text: "Ước tính sát hơn và tạo động lực/cam kết do người trực tiếp lập.",
            isCorrect: true,
            rationale:
              "Cơ chế: manager gần hoạt động thực tế có thông tin tốt hơn và cam kết hơn với mục tiêu mình tham gia lập. Bẫy: nghĩ nó loại bỏ hoàn toàn slack. Khóa: participative tốt nhưng vẫn cần review.",
          },
          {
            id: "b",
            text: "Luôn nhanh hơn top-down budget.",
            isCorrect: false,
            rationale:
              "Cơ chế: participative budget thường tốn thời gian phối hợp. Bẫy: nhầm chất lượng/cam kết với tốc độ. Khóa: ưu điểm chính là thông tin và motivation.",
          },
          {
            id: "c",
            text: "Loại bỏ hoàn toàn budgetary slack.",
            isCorrect: false,
            rationale:
              "Cơ chế: self-imposed budget còn có rủi ro slack nếu manager đặt mục tiêu dễ. Bẫy: tuyệt đối hóa ưu điểm. Khóa: cấp trên vẫn phải review.",
          },
          {
            id: "d",
            text: "Không cần cấp trên duyệt.",
            isCorrect: false,
            rationale:
              "Cơ chế: self-imposed budget vẫn cần management review để phối hợp và giảm slack. Bẫy: tham gia lập không có nghĩa là tự phê duyệt. Khóa: participative nhưng vẫn có review.",
          },
        ],
        takeaway:
          "Self-imposed budget tăng thông tin và cam kết, nhưng không thay thế management review.",
      },
      {
        id: "q13",
        difficulty: "advanced",
        conceptTested: "Interest on budgeted borrowing",
        stem: "Royal vay $48,000 trên line of credit 16%, vay ngày 1/4 và trả ngày 30/6. Interest là bao nhiêu?",
        options: [
          {
            id: "a",
            text: "$1,920.",
            isCorrect: true,
            rationale:
              "Cơ chế: interest = $48,000 × 16% × 3/12 = $1,920. Bẫy: tính lãi cả năm. Khóa: vay 3 tháng nên nhân 3/12.",
          },
          {
            id: "b",
            text: "$7,680.",
            isCorrect: false,
            rationale:
              "Cơ chế: $48,000 × 16% = $7,680 là lãi cả năm. Bẫy: quên thời gian vay chỉ 3 tháng. Khóa: phải nhân 3/12.",
          },
          {
            id: "c",
            text: "$960.",
            isCorrect: false,
            rationale:
              "Cơ chế: $960 giống dùng 1.5 tháng hoặc tỷ lệ sai. Bẫy: chia sai thời gian. Khóa: từ 1/4 đến 30/6 là 3 tháng.",
          },
          {
            id: "d",
            text: "$2,560.",
            isCorrect: false,
            rationale:
              "Cơ chế: $2,560 không khớp rate 16% và 3 tháng. Bẫy: dùng sai mẫu số thời gian. Khóa: công thức đúng là principal × annual rate × fraction of year.",
          },
        ],
        takeaway:
          "Lãi vay budgeted của Royal là $1,920 vì khoản vay chỉ kéo dài 3 tháng.",
      },
    ],
  },
  {
    slug: "flexible-budgets",
    order: 9,
    title: "Chapter 9 — Flexible Budgets and Performance Analysis",
    bigIdea:
      'Static planning budget so sánh "táo với cam" khi mức hoạt động thực khác kế hoạch. Flexible budget "flex" theo mức hoạt động thực để tách chênh lệch thành hai nguồn: phần do mức hoạt động đổi (activity variance) và phần do kiểm soát giá/chi tiêu (revenue & spending variance) → đánh giá hiệu quả công bằng.',
    learningObjectives: [
      "LO1 — Lập planning budget và flexible budget với một cost driver.",
      "LO2 — Tính và diễn giải activity variances.",
      "LO3 — Tính và diễn giải revenue và spending variances.",
      "LO4 — Lập performance report (một cost driver) kết hợp activity + revenue/spending variances.",
      "LO5 — Lập planning budget và flexible budget với nhiều cost driver.",
      "LO6 — Lập performance report với nhiều cost driver.",
    ],
    status: "ready",
    source:
      "Garrison, Noreen, Brewer — Managerial Accounting, 17e, Chapter 9 (slide 'chapter 9- flexible budget')",
    knowledgeMap: {
      engine: "flow",
      title: "Knowledge map — Flexible Budgets",
      layout: "tree",
      collapsible: true,
      caption:
        "Bấm từng chip để xem cách flexible budget tách chênh lệch do activity khỏi chênh lệch do kiểm soát.",
      nodes: [
        {
          id: "flex",
          label: "Flexible Budget",
          group: "concept",
          detail:
            "Flex budget theo activity thực để so sánh công bằng.",
          sectionId: "s1",
        },
        {
          id: "found",
          label: "Nền tảng",
          group: "concept",
          parent: "flex",
          detail:
            "Các khái niệm nền giải thích vì sao static budget dễ tạo so sánh táo với cam.",
          sectionId: "s0",
        },
        {
          id: "f-static",
          label: "Static planning budget",
          group: "term",
          parent: "found",
          detail:
            "Static planning budget lập cho một mức hoạt động kế hoạch duy nhất.",
          sectionId: "s0",
        },
        {
          id: "f-flex",
          label: "Flexible budget",
          group: "term",
          parent: "found",
          detail:
            "Flexible budget ước tính revenue và cost lẽ ra phải là bao nhiêu tại mức activity thực.",
          sectionId: "s1",
        },
        {
          id: "f-mbe",
          label: "Management by exception",
          group: "term",
          parent: "found",
          detail:
            "Management by exception tập trung điều tra các variance lớn thay vì mọi sai lệch nhỏ.",
          sectionId: "s0",
        },
        {
          id: "var",
          label: "Variances",
          group: "lo",
          parent: "flex",
          detail:
            "Các variance tách nguyên nhân do activity khỏi nguyên nhân do revenue hoặc spending.",
          sectionId: "s2",
        },
        {
          id: "v-act",
          label: "Activity variance",
          group: "term",
          parent: "var",
          detail:
            "Activity variance là chênh giữa flexible budget và planning budget, chỉ do activity thực khác kế hoạch.",
          sectionId: "s2",
        },
        {
          id: "v-rev",
          label: "Revenue variance",
          group: "term",
          parent: "var",
          detail:
            "Revenue variance so actual revenue với flexible budget revenue tại activity thực.",
          sectionId: "s3",
        },
        {
          id: "v-spend",
          label: "Spending variance",
          group: "term",
          parent: "var",
          detail:
            "Spending variance so actual cost với flexible budget cost tại activity thực.",
          sectionId: "s3",
        },
        {
          id: "rep",
          label: "Performance report",
          group: "lo",
          parent: "flex",
          detail:
            "Performance report đặt planning, flexible và actual cạnh nhau để đọc variance đúng nguồn.",
          sectionId: "s4",
        },
        {
          id: "r-combine",
          label: "Báo cáo kết hợp (1 driver)",
          group: "term",
          parent: "rep",
          detail:
            "Báo cáo kết hợp một cost driver hiển thị activity variance và revenue/spending variance trong cùng khung.",
          sectionId: "s4",
        },
        {
          id: "r-multi",
          label: "Nhiều cost driver",
          group: "term",
          parent: "rep",
          detail:
            "Flexible budget có thể dùng nhiều cost driver khi một driver không giải thích đủ mọi chi phí.",
          sectionId: "s5",
        },
        {
          id: "r-center",
          label: "Cost center & non-profit",
          group: "term",
          parent: "rep",
          detail:
            "Cost center thường không có revenue variance; non-profit có thể cần flex cả phần revenue.",
          sectionId: "s6",
        },
      ],
      edges: [
        { from: "flex", to: "found" },
        { from: "found", to: "f-static" },
        { from: "found", to: "f-flex" },
        { from: "found", to: "f-mbe" },
        { from: "flex", to: "var" },
        { from: "var", to: "v-act" },
        { from: "var", to: "v-rev" },
        { from: "var", to: "v-spend" },
        { from: "flex", to: "rep" },
        { from: "rep", to: "r-combine" },
        { from: "rep", to: "r-multi" },
        { from: "rep", to: "r-center" },
      ],
    },
    sections: [
      {
        id: "s0",
        heading: "Static planning budget & vấn đề táo với cam (LO1)",
        blocks: [
          {
            type: "prose",
            body:
              "Static planning budget lập cho một mức hoạt động kế hoạch duy nhất. Khi actual khác kế hoạch, như Larry dự kiến 500 lawns nhưng thực tế cắt 550 lawns, so trực tiếp actual với planning budget là so táo với cam: variable cost thực chắc chắn cao hơn chỉ vì làm nhiều hơn, chưa nói gì về quản lý tốt hay dở.",
          },
          {
            type: "callout",
            callout: {
              kind: "trap",
              title: "Static budget variance",
              body:
                "Variance từ static budget không cho biết Larry kiểm soát chi phí tốt hay không, vì lẫn hai thứ: chênh do mức hoạt động và chênh do kiểm soát. Phải tách ra.",
            },
          },
          {
            type: "callout",
            callout: {
              kind: "note",
              title: "Management by exception",
              body:
                "Management by exception là hệ thống so actual với budget, đánh dấu sai lệch lớn để điều tra sâu — trọng tâm của variance analysis cycle.",
            },
          },
        ],
        keyTerms: [
          {
            term: "Planning budget",
            definition:
              "Budget được lập trước kỳ cho một mức hoạt động kế hoạch.",
          },
          {
            term: "Management by exception",
            definition:
              "Tập trung sự chú ý quản trị vào các variance đủ lớn để cần điều tra.",
          },
        ],
      },
      {
        id: "s1",
        heading: "Flexible budget: flex theo activity thực (LO1)",
        blocks: [
          {
            type: "prose",
            body:
              "Flexible budget ước tính revenue và cost lẽ ra phải là bao nhiêu, given mức hoạt động thực. Để flex, total variable cost đổi tỉ lệ thuận với activity; total fixed cost giữ nguyên trong relevant range. Nhờ vậy flexible budget tạo so sánh apples to apples với actual.",
          },
          {
            type: "formula",
            formula: {
              expression:
                "Flexible budget cost = Fixed cost + (Variable cost per unit × Actual activity)",
              legend: [
                {
                  symbol: "Larry wages",
                  meaning: "$5,000 + $30 × số lawns thực",
                },
              ],
              note: "Đây chính là dạng Y = a + bX áp cho từng dòng chi phí.",
            },
          },
          {
            type: "calc",
            calc: {
              title: "Larry: flexible budget wages cho 600 lawns",
              steps: [
                {
                  label: "Fixed + variable",
                  expr: "$5,000 + ($30 × 600)",
                },
                {
                  label: "Tổng flexible budget cost",
                  expr: "$5,000 + $18,000",
                },
              ],
              result: "$23,000",
              meaning:
                "Flexible budget điều chỉnh phần variable theo activity thực, giữ fixed cố định.",
              implication:
                "Có flexible budget mới so sánh công bằng được với actual ở cùng mức 600 lawns.",
            },
          },
        ],
      },
      {
        id: "s2",
        heading: "Activity variance (LO2)",
        blocks: [
          {
            type: "prose",
            body:
              "Activity variance là chênh giữa flexible budget và static planning budget, phát sinh duy nhất do mức hoạt động thực khác mức kế hoạch. Nó không nói Larry kiểm soát giá hay chi tiêu tốt hay dở.",
          },
          {
            type: "formula",
            formula: {
              expression: "Activity variance = Flexible budget − Planning budget",
              note: "Chênh này do activity, không phải do quản lý tốt/dở.",
            },
          },
          {
            type: "callout",
            callout: {
              kind: "insight",
              title: "Fixed cost khuếch đại NOI",
              body:
                "Larry: activity và revenue tăng 10% từ 500 lên 550 lawns, nhưng NOI tăng hơn 10% vì fixed cost không đổi nên phần tăng thêm của contribution margin chảy thẳng vào lợi nhuận.",
            },
          },
        ],
      },
      {
        id: "s3",
        heading: "Revenue & spending variance (LO3)",
        blocks: [
          {
            type: "comparison",
            table: {
              title: "Hai biến động so với flexible budget",
              columns: ["Loại", "Định nghĩa"],
              rows: [
                {
                  label: "Revenue variance",
                  cells: [
                    "Actual revenue − flexible budget revenue. Favorable nếu revenue cao hơn mức lẽ ra, given activity thực.",
                  ],
                },
                {
                  label: "Spending variance",
                  cells: [
                    "Actual cost − flexible budget cost. Favorable nếu cost thấp hơn mức lẽ ra, given activity thực.",
                  ],
                },
              ],
            },
          },
          {
            type: "calc",
            calc: {
              title: "Larry: revenue variance",
              steps: [
                {
                  label: "Flexible budget revenue",
                  expr: "$75 × 550 lawns = $41,250",
                },
                {
                  label: "Actual − flexible",
                  expr: "Actual revenue $43,000 − $41,250",
                },
              ],
              result: "$1,750 Favorable",
              meaning:
                "Revenue cao hơn mức lẽ ra ở 550 lawns, nên variance là favorable.",
              implication:
                "Đây mới là biến động phản ánh giá/kiểm soát, vì đã loại bỏ ảnh hưởng mức hoạt động.",
            },
          },
          {
            type: "callout",
            callout: {
              kind: "key",
              title: "Quy ước F/U",
              body:
                "Chi phí: actual < budget → Favorable; actual > budget → Unfavorable. Doanh thu: actual > budget → Favorable; actual < budget → Unfavorable.",
            },
          },
        ],
      },
      {
        id: "s4",
        heading: "Performance report kết hợp — khung 3 cột (LO4)",
        blocks: [
          {
            type: "prose",
            body:
              "Performance report đặt ba cột cạnh nhau: Planning budget → Flexible budget → Actual results. Chênh Planning↔Flexible là activity variances; chênh Flexible↔Actual là revenue & spending variances.",
          },
          {
            type: "diagram",
            diagram: {
              engine: "flow",
              title: "Planning → Flexible → Actual",
              layout: "horizontal",
              caption:
                "Tách một chênh lệch tổng thành hai nguyên nhân: activity và revenue/spending.",
              nodes: [
                {
                  id: "PLAN",
                  label: "Planning budget (500 lawns)",
                  group: "concept",
                  detail:
                    "Budget ban đầu lập cho mức hoạt động kế hoạch 500 lawns.",
                  sectionId: "s4",
                },
                {
                  id: "FLEX",
                  label: "Flexible budget (550 lawns)",
                  group: "concept",
                  detail:
                    "Budget được flex theo mức hoạt động thực 550 lawns để so apples to apples.",
                  sectionId: "s4",
                },
                {
                  id: "ACT",
                  label: "Actual results (550 lawns)",
                  group: "concept",
                  detail:
                    "Kết quả thực tế ở cùng mức hoạt động 550 lawns.",
                  sectionId: "s4",
                },
              ],
              edges: [
                {
                  from: "PLAN",
                  to: "FLEX",
                  label: "Activity variance",
                  animated: true,
                },
                {
                  from: "FLEX",
                  to: "ACT",
                  label: "Revenue & Spending variance",
                  animated: true,
                },
              ],
            },
          },
          {
            type: "callout",
            callout: {
              kind: "key",
              title: "Tinh thần cốt lõi",
              body:
                "Tách một chênh lệch tổng thành hai nguyên nhân: làm nhiều/ít hơn (activity) và giá/chi tiêu (revenue & spending).",
            },
          },
        ],
      },
      {
        id: "s5",
        heading: "Nhiều cost driver (LO5)",
        blocks: [
          {
            type: "prose",
            body:
              "Một cost driver đôi khi không giải thích đủ mọi chi phí. Cost formula của flexible budget có thể mở rộng để nhận nhiều cost driver. Larry thêm driver thứ hai là giờ edging & trimming vì thời gian khác nhau giữa các lawn, rồi đưa driver phù hợp vào công thức revenue và cost.",
          },
          {
            type: "callout",
            callout: {
              kind: "note",
              title: "Chọn driver theo dòng chi phí",
              body:
                "Mỗi dòng chi phí có thể flex theo driver phù hợp nhất với nó, như số lawn hoặc giờ làm, để ước tính sát hơn.",
            },
          },
        ],
      },
      {
        id: "s6",
        heading: "Performance report ở cost center & tổ chức phi lợi nhuận",
        blocks: [
          {
            type: "comparison",
            table: {
              title: "Báo cáo hiệu quả theo loại đơn vị",
              columns: ["Loại đơn vị", "Đặc điểm báo cáo"],
              rows: [
                {
                  label: "Cost center",
                  cells: [
                    "Dùng cùng nguyên tắc nhưng không có revenue/net operating income variance; trọng tâm là spending variance.",
                  ],
                },
                {
                  label: "Tổ chức phi lợi nhuận",
                  cells: [
                    "Doanh thu có thể gồm cả phần fixed và variable như tài trợ, học phí, hiến tặng, nên revenue cũng cần flex.",
                  ],
                },
              ],
            },
          },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        difficulty: "basic",
        conceptTested: "Static planning budget",
        stem: "Static planning budget được lập cho mấy mức hoạt động?",
        options: [
          {
            id: "a",
            text: "Một mức hoạt động kế hoạch duy nhất.",
            isCorrect: true,
            rationale:
              "Cơ chế: static planning budget cố định tại một activity level đã lập trước kỳ. Bẫy: nhầm với flexible budget. Khóa: static = một mức hoạt động.",
          },
          {
            id: "b",
            text: "Mọi mức trong relevant range.",
            isCorrect: false,
            rationale:
              "Cơ chế: mọi mức trong relevant range là cách nghĩ của flexible budget. Bẫy: lấy đặc điểm flexible gán cho static. Khóa: static không tự flex theo activity.",
          },
          {
            id: "c",
            text: "Hai mức hoạt động.",
            isCorrect: false,
            rationale:
              "Cơ chế: static planning budget không lập cho hai điểm high-low. Bẫy: kéo tư duy cost behavior vào budget. Khóa: static chỉ có một activity level.",
          },
          {
            id: "d",
            text: "Mức hoạt động thực tế.",
            isCorrect: false,
            rationale:
              "Cơ chế: mức thực tế chỉ biết sau kỳ; static budget lập trước kỳ theo kế hoạch. Bẫy: nhầm planning budget với actual results. Khóa: static dùng planned activity.",
          },
        ],
        takeaway:
          "Static planning budget lập cho một mức hoạt động kế hoạch duy nhất.",
      },
      {
        id: "q2",
        difficulty: "basic",
        conceptTested: "Flexible budget definition",
        stem: "Flexible budget cho biết điều gì?",
        options: [
          {
            id: "a",
            text: "Revenue và cost lẽ ra phải là bao nhiêu, given mức hoạt động thực.",
            isCorrect: true,
            rationale:
              "Cơ chế: flexible budget flex theo actual activity để tạo chuẩn so sánh công bằng. Bẫy: tưởng đây là actual cost. Khóa: flexible budget là mức lẽ ra, không phải số đã xảy ra.",
          },
          {
            id: "b",
            text: "Doanh thu kế hoạch ban đầu ở mức activity kế hoạch.",
            isCorrect: false,
            rationale:
              "Cơ chế: đó là static planning budget, không phải flexible budget. Bẫy: nhầm planned với flexed. Khóa: flexible dùng actual activity.",
          },
          {
            id: "c",
            text: "Chi phí thực tế đã phát sinh.",
            isCorrect: false,
            rationale:
              "Cơ chế: actual cost là kết quả thực tế, không phải budget. Bẫy: đồng nhất budget với actual. Khóa: flexible budget là benchmark.",
          },
          {
            id: "d",
            text: "Ngân sách tiền mặt của kỳ.",
            isCorrect: false,
            rationale:
              "Cơ chế: cash budget là chủ đề dòng tiền ở Ch8, không phải flexible budget. Bẫy: thấy chữ budget rồi chọn cash budget. Khóa: flexible budget phục vụ variance analysis.",
          },
        ],
        takeaway:
          "Flexible budget là benchmark ở mức activity thực.",
      },
      {
        id: "q3",
        difficulty: "intermediate",
        conceptTested: "Flexible budget mixed cost",
        stem: "Larry có wages & salaries = $5,000 fixed + $30/lawn. Flexible budget wages cho 600 lawns là bao nhiêu?",
        options: [
          {
            id: "a",
            text: "$23,000.",
            isCorrect: true,
            rationale:
              "Cơ chế: $5,000 + ($30 × 600) = $23,000. Bẫy: quên fixed cost. Khóa: flexible budget cost = fixed + variable per unit × activity.",
          },
          {
            id: "b",
            text: "$18,000.",
            isCorrect: false,
            rationale:
              "Cơ chế: $18,000 chỉ là variable portion. Bẫy: quên fixed cost. Khóa: mixed cost luôn có cả a và bX.",
          },
          {
            id: "c",
            text: "$20,000.",
            isCorrect: false,
            rationale:
              "Cơ chế: $20,000 không dùng đúng $30/lawn và fixed $5,000. Bẫy: ước lượng thay vì dùng formula. Khóa: nhân activity thực rồi cộng fixed.",
          },
          {
            id: "d",
            text: "$25,000.",
            isCorrect: false,
            rationale:
              "Cơ chế: $25,000 là dùng sai variable rate hoặc fixed amount. Bẫy: cộng thêm cushion không có trong dữ kiện. Khóa: chỉ dùng $5,000 và $30/lawn.",
          },
        ],
        takeaway:
          "Larry flexible wages cho 600 lawns là $23,000.",
      },
      {
        id: "q4",
        difficulty: "intermediate",
        conceptTested: "Activity variance cause",
        stem: "Activity variance phát sinh do đâu?",
        options: [
          {
            id: "a",
            text: "Chỉ do mức hoạt động thực khác mức kế hoạch.",
            isCorrect: true,
            rationale:
              "Cơ chế: activity variance so flexible budget với planning budget, nên chỉ phản ánh activity đổi. Bẫy: gán nó cho kiểm soát chi phí. Khóa: activity variance không đánh giá quản lý tốt/dở.",
          },
          {
            id: "b",
            text: "Do giá đầu vào đổi.",
            isCorrect: false,
            rationale:
              "Cơ chế: giá đầu vào đổi nằm trong spending variance, không phải activity variance. Bẫy: gom mọi variance vào một rổ. Khóa: activity variance chỉ do activity level.",
          },
          {
            id: "c",
            text: "Do kiểm soát chi phí kém.",
            isCorrect: false,
            rationale:
              "Cơ chế: kiểm soát chi phí kém sẽ lộ trong spending variance. Bẫy: đánh giá manager bằng chênh do activity. Khóa: activity variance không phải thước đo kiểm soát.",
          },
          {
            id: "d",
            text: "Do sai sót kế toán.",
            isCorrect: false,
            rationale:
              "Cơ chế: activity variance là phân tích quản trị bình thường, không mặc định là lỗi ghi sổ. Bẫy: xem variance nào cũng là lỗi. Khóa: variance có thể do nguyên nhân kinh tế.",
          },
        ],
        takeaway:
          "Activity variance chỉ do actual activity khác planned activity.",
      },
      {
        id: "q5",
        difficulty: "intermediate",
        conceptTested: "Activity variance formula",
        stem: "Activity variance bằng gì?",
        options: [
          {
            id: "a",
            text: "Flexible budget − Planning budget.",
            isCorrect: true,
            rationale:
              "Cơ chế: đây là chênh giữa budget đã flex theo activity thực và budget tĩnh ban đầu. Bẫy: lấy actual để tính activity variance. Khóa: activity variance không dùng actual results.",
          },
          {
            id: "b",
            text: "Actual − Planning budget.",
            isCorrect: false,
            rationale:
              "Cơ chế: Actual − Planning budget là chênh tổng, lẫn activity với kiểm soát. Bẫy: bỏ qua flexible budget. Khóa: phải tách qua cột flexible.",
          },
          {
            id: "c",
            text: "Actual − Flexible budget.",
            isCorrect: false,
            rationale:
              "Cơ chế: Actual − Flexible budget là revenue/spending variance. Bẫy: đổi nhầm hai khoảng chênh. Khóa: flexible nằm giữa planning và actual.",
          },
          {
            id: "d",
            text: "Planning budget − Actual.",
            isCorrect: false,
            rationale:
              "Cơ chế: đây vẫn là chênh tổng và đảo chiều. Bẫy: dùng hai cột ngoài cùng. Khóa: activity variance là Planning↔Flexible.",
          },
        ],
        takeaway:
          "Activity variance = Flexible budget − Planning budget.",
      },
      {
        id: "q6",
        difficulty: "intermediate",
        conceptTested: "Spending variance formula",
        stem: "Spending variance bằng gì?",
        options: [
          {
            id: "a",
            text: "Actual cost − Flexible budget cost.",
            isCorrect: true,
            rationale:
              "Cơ chế: spending variance so cost thực với cost lẽ ra ở cùng activity thực. Bẫy: so với planning budget. Khóa: spending variance dùng flexible budget làm benchmark.",
          },
          {
            id: "b",
            text: "Actual cost − Planning budget cost.",
            isCorrect: false,
            rationale:
              "Cơ chế: chênh này lẫn cả activity variance. Bẫy: dùng static budget để đánh giá kiểm soát chi phí. Khóa: phải loại bỏ activity trước.",
          },
          {
            id: "c",
            text: "Flexible budget cost − Planning budget cost.",
            isCorrect: false,
            rationale:
              "Cơ chế: đó là activity variance. Bẫy: chọn sai khoảng trong khung 3 cột. Khóa: spending variance là Flexible↔Actual.",
          },
          {
            id: "d",
            text: "Actual cost − giá chuẩn.",
            isCorrect: false,
            rationale:
              "Cơ chế: công thức này không phải định nghĩa spending variance trong flexible budget performance report. Bẫy: kéo standard costing vào đây. Khóa: chương này dùng flexible budget cost.",
          },
        ],
        takeaway:
          "Spending variance = actual cost − flexible budget cost.",
      },
      {
        id: "q7",
        difficulty: "basic",
        conceptTested: "Favorable spending variance",
        stem: "Chi phí có spending variance Favorable khi nào?",
        options: [
          {
            id: "a",
            text: "Actual cost thấp hơn flexible budget cost.",
            isCorrect: true,
            rationale:
              "Cơ chế: với cost, chi ít hơn mức lẽ ra là favorable. Bẫy: dùng quy ước doanh thu cho chi phí. Khóa: cost thấp hơn budget là tốt.",
          },
          {
            id: "b",
            text: "Actual cost cao hơn flexible budget cost.",
            isCorrect: false,
            rationale:
              "Cơ chế: cost cao hơn budget là unfavorable. Bẫy: đảo quy ước F/U. Khóa: với cost, thấp hơn mới favorable.",
          },
          {
            id: "c",
            text: "Actual cost bằng planning budget.",
            isCorrect: false,
            rationale:
              "Cơ chế: spending variance so với flexible budget, không phải planning budget. Bẫy: dùng static budget. Khóa: cùng activity thực mới công bằng.",
          },
          {
            id: "d",
            text: "Khi activity tăng.",
            isCorrect: false,
            rationale:
              "Cơ chế: activity tăng tạo activity variance, không tự động tạo spending favorable. Bẫy: lẫn activity với kiểm soát chi phí. Khóa: spending xét Actual↔Flexible.",
          },
        ],
        takeaway:
          "Với chi phí, actual thấp hơn flexible budget là Favorable.",
      },
      {
        id: "q8",
        difficulty: "intermediate",
        conceptTested: "Why static variance is unfair",
        stem: "Vì sao không nên đánh giá kiểm soát chi phí bằng variance từ static budget khi activity thực khác kế hoạch?",
        options: [
          {
            id: "a",
            text: "Vì nó lẫn chênh do mức hoạt động với chênh do kiểm soát.",
            isCorrect: true,
            rationale:
              "Cơ chế: static budget giữ activity cũ, nên variable cost chênh có thể chỉ vì làm nhiều hơn. Bẫy: kết luận manager kiểm soát kém. Khóa: phải dùng flexible budget để tách nguyên nhân.",
          },
          {
            id: "b",
            text: "Vì static budget luôn sai.",
            isCorrect: false,
            rationale:
              "Cơ chế: static budget có ích cho planning, chỉ không công bằng khi activity thực khác kế hoạch. Bẫy: phủ định quá mức. Khóa: sai ở đây là cách so sánh, không phải sự tồn tại của static budget.",
          },
          {
            id: "c",
            text: "Vì thiếu doanh thu.",
            isCorrect: false,
            rationale:
              "Cơ chế: vấn đề không phải luôn thiếu revenue, mà là không điều chỉnh activity. Bẫy: nhìn performance report chỉ như báo cáo doanh thu. Khóa: variable cost cũng cần flex.",
          },
          {
            id: "d",
            text: "Vì chưa tính thuế.",
            isCorrect: false,
            rationale:
              "Cơ chế: thuế không phải lý do static variance kém công bằng trong Larry. Bẫy: kéo yếu tố ngoài chương vào. Khóa: nguyên nhân là activity level khác nhau.",
          },
        ],
        takeaway:
          "Static variance khi activity đổi là táo với cam; flexible budget tách activity ra trước.",
      },
      {
        id: "q9",
        difficulty: "intermediate",
        conceptTested: "Performance report columns",
        stem: "Trong khung performance report 3 cột, chênh Flexible ↔ Actual là loại variance gì?",
        options: [
          {
            id: "a",
            text: "Revenue & spending variance.",
            isCorrect: true,
            rationale:
              "Cơ chế: Flexible và Actual cùng activity thực, nên chênh còn lại phản ánh revenue hoặc spending. Bẫy: chọn activity variance. Khóa: activity variance nằm giữa Planning và Flexible.",
          },
          {
            id: "b",
            text: "Activity variance.",
            isCorrect: false,
            rationale:
              "Cơ chế: activity variance là Planning↔Flexible. Bẫy: nhầm hai khoảng cách trong 3 cột. Khóa: Flexible↔Actual là revenue/spending.",
          },
          {
            id: "c",
            text: "Sales mix variance.",
            isCorrect: false,
            rationale:
              "Cơ chế: sales mix variance không phải khung chính của Ch9 Larry. Bẫy: kéo thuật ngữ khác vào. Khóa: chương này tách activity và revenue/spending.",
          },
          {
            id: "d",
            text: "Volume variance.",
            isCorrect: false,
            rationale:
              "Cơ chế: volume/activity effect nằm ở Planning↔Flexible. Bẫy: dùng tên gần nghĩa nhưng sai vị trí. Khóa: Actual so Flexible là kiểm soát/giá.",
          },
        ],
        takeaway:
          "Flexible↔Actual là revenue & spending variance.",
      },
      {
        id: "q10",
        difficulty: "basic",
        conceptTested: "Cost center performance report",
        stem: "Báo cáo hiệu quả cho một cost center khác gì?",
        options: [
          {
            id: "a",
            text: "Không có revenue/net operating income variance, chỉ có spending variance.",
            isCorrect: true,
            rationale:
              "Cơ chế: cost center chịu trách nhiệm chi phí, không chịu trách nhiệm revenue/profit. Bẫy: áp y hệt profit center. Khóa: cost center tập trung vào spending.",
          },
          {
            id: "b",
            text: "Không có spending variance.",
            isCorrect: false,
            rationale:
              "Cơ chế: spending variance là trọng tâm của cost center. Bẫy: bỏ đúng variance quan trọng nhất. Khóa: cost center quản chi phí.",
          },
          {
            id: "c",
            text: "Giống hệt profit center.",
            isCorrect: false,
            rationale:
              "Cơ chế: profit center có revenue và NOI; cost center thì không. Bẫy: không phân biệt responsibility center. Khóa: báo cáo tùy loại trung tâm trách nhiệm.",
          },
          {
            id: "d",
            text: "Chỉ có activity variance.",
            isCorrect: false,
            rationale:
              "Cơ chế: cost center vẫn cần so actual cost với flexible budget cost. Bẫy: nghĩ không có revenue thì hết spending. Khóa: spending variance vẫn có.",
          },
        ],
        takeaway:
          "Cost center performance report tập trung vào spending variance.",
      },
      {
        id: "q11",
        difficulty: "advanced",
        conceptTested: "Operating leverage in activity variance",
        stem: "Larry có activity và revenue tăng 10%. Vì sao NOI có thể tăng hơn 10%?",
        options: [
          {
            id: "a",
            text: "Vì fixed cost không đổi nên phần contribution margin tăng thêm chảy thẳng vào lợi nhuận.",
            isCorrect: true,
            rationale:
              "Cơ chế: khi activity tăng, revenue và variable cost tăng nhưng fixed cost giữ nguyên trong relevant range. Bẫy: tưởng NOI phải tăng đúng 10%. Khóa: fixed cost tạo hiệu ứng khuếch đại.",
          },
          {
            id: "b",
            text: "Vì giá bán tăng.",
            isCorrect: false,
            rationale:
              "Cơ chế: spec chỉ nói activity và revenue tăng theo số lawn; không cần giả định price tăng. Bẫy: tự thêm nguyên nhân ngoài dữ kiện. Khóa: fixed cost mới là điểm chính.",
          },
          {
            id: "c",
            text: "Vì variable cost giảm.",
            isCorrect: false,
            rationale:
              "Cơ chế: không có dữ kiện variable cost per lawn giảm. Bẫy: giải thích bằng cost control thay vì cost behavior. Khóa: fixed cost không đổi làm NOI tăng nhanh hơn.",
          },
          {
            id: "d",
            text: "Vì thuế giảm.",
            isCorrect: false,
            rationale:
              "Cơ chế: thuế không nằm trong phân tích Larry ở spec. Bẫy: kéo yếu tố ngoài bài. Khóa: activity variance liên quan cost behavior.",
          },
        ],
        takeaway:
          "Fixed cost không đổi khiến NOI có thể tăng hơn tỷ lệ tăng activity.",
      },
      {
        id: "q12",
        difficulty: "intermediate",
        conceptTested: "Revenue variance calculation",
        stem: "Larry có actual revenue $43,000 và flexible budget revenue ở 550 lawns là $41,250. Revenue variance là gì?",
        options: [
          {
            id: "a",
            text: "$1,750 Favorable.",
            isCorrect: true,
            rationale:
              "Cơ chế: actual revenue $43,000 cao hơn flexible budget revenue $41,250 nên variance = $1,750 Favorable. Bẫy: đảo chiều favorable/unfavorable. Khóa: với revenue, actual > budget là favorable.",
          },
          {
            id: "b",
            text: "$1,750 Unfavorable.",
            isCorrect: false,
            rationale:
              "Cơ chế: số chênh đúng nhưng chiều sai. Bẫy: dùng quy ước chi phí cho doanh thu. Khóa: revenue cao hơn budget là Favorable.",
          },
          {
            id: "c",
            text: "$41,250 Favorable.",
            isCorrect: false,
            rationale:
              "Cơ chế: $41,250 là flexible budget revenue, không phải variance. Bẫy: chọn benchmark thay vì chênh lệch. Khóa: variance là Actual − Flexible.",
          },
          {
            id: "d",
            text: "$43,000 Unfavorable.",
            isCorrect: false,
            rationale:
              "Cơ chế: $43,000 là actual revenue, không phải variance. Bẫy: chọn số thực tế làm chênh lệch. Khóa: phải trừ $41,250.",
          },
        ],
        takeaway:
          "Revenue variance của Larry là $1,750 Favorable.",
      },
    ],
  },
  {
    slug: "standard-costs",
    order: 10,
    title: "Chapter 10 — Standard Costs and Variances",
    bigIdea:
      "Standard cost là chuẩn cho từng input = price standard × quantity standard. So actual với standard cho mức output thực rồi tách spending variance thành price variance và quantity variance → quy trách nhiệm đúng người. Khung lõi: (1) AQ×AP → (2) AQ×SP → (3) SQ×SP.",
    learningObjectives: [
      "LO1 — Tính direct materials price và quantity variances, giải thích ý nghĩa.",
      "LO2 — Tính direct labor rate và efficiency variances, giải thích ý nghĩa.",
      "LO3 — Tính variable manufacturing overhead rate và efficiency variances, giải thích ý nghĩa.",
      "LO4 (Appendix 10A) — Tính fixed overhead budget và volume variances.",
    ],
    status: "ready",
    source:
      "Garrison, Noreen, Brewer — Managerial Accounting, 17e, Chapter 10 (slide '10. Standard Cost and Variance')",
    knowledgeMap: {
      engine: "flow",
      title: "Knowledge map — Standard Costs and Variances",
      layout: "tree",
      collapsible: true,
      caption:
        "Bấm từng chip để xem cách standard cost tách price, quantity và fixed overhead variances.",
      nodes: [
        {
          id: "std",
          label: "Standard Costs & Variances",
          group: "concept",
          detail:
            "So actual với standard, tách price variance khỏi quantity variance.",
          sectionId: "s1",
        },
        {
          id: "found",
          label: "Nền tảng",
          group: "concept",
          parent: "std",
          detail:
            "Nền tảng của chương là đặt standard cho giá và lượng trước khi so với actual.",
          sectionId: "s0",
        },
        {
          id: "f-std",
          label: "Quantity & Price standard",
          group: "term",
          parent: "found",
          detail:
            "Quantity standard trả lời nên dùng bao nhiêu input; price standard trả lời nên trả bao nhiêu cho mỗi input.",
          sectionId: "s0",
        },
        {
          id: "f-card",
          label: "Standard cost card",
          group: "term",
          parent: "found",
          detail:
            "Standard cost card gom chuẩn lượng/giờ và chuẩn giá/rate cho từng input của một đơn vị sản phẩm.",
          sectionId: "s0",
        },
        {
          id: "f-model",
          label: "General model 3 cột",
          group: "term",
          parent: "found",
          detail:
            "General model dùng AQ×AP, AQ×SP và SQ×SP để tách price variance khỏi quantity variance.",
          sectionId: "s1",
        },
        {
          id: "dm",
          label: "Materials",
          group: "lo",
          parent: "std",
          detail:
            "Direct materials variances tách phần do giá mua khỏi phần do lượng vật liệu dùng.",
          sectionId: "s2",
        },
        {
          id: "m-price",
          label: "Materials price variance",
          group: "term",
          parent: "dm",
          detail:
            "Materials price variance đo chênh lệch giữa actual price và standard price trên lượng mua hoặc dùng phù hợp.",
          sectionId: "s2",
        },
        {
          id: "m-qty",
          label: "Materials quantity variance",
          group: "term",
          parent: "dm",
          detail:
            "Materials quantity variance đo chênh lệch giữa lượng vật liệu dùng thực và standard quantity allowed.",
          sectionId: "s2",
        },
        {
          id: "dl",
          label: "Labor & VOH",
          group: "lo",
          parent: "std",
          detail:
            "Labor và variable overhead dùng cùng logic rate/efficiency dựa trên actual hours và standard hours.",
          sectionId: "s3",
        },
        {
          id: "l-rate",
          label: "Labor rate variance",
          group: "term",
          parent: "dl",
          detail:
            "Labor rate variance đo chênh giữa actual wage rate và standard rate trên actual hours.",
          sectionId: "s3",
        },
        {
          id: "l-eff",
          label: "Labor efficiency variance",
          group: "term",
          parent: "dl",
          detail:
            "Labor efficiency variance đo chênh giữa actual hours và standard hours allowed ở standard rate.",
          sectionId: "s3",
        },
        {
          id: "v-rate",
          label: "VOH rate variance",
          group: "term",
          parent: "dl",
          detail:
            "Variable overhead rate variance đo chênh giữa actual variable overhead rate và standard rate.",
          sectionId: "s4",
        },
        {
          id: "v-eff",
          label: "VOH efficiency variance",
          group: "term",
          parent: "dl",
          detail:
            "Variable overhead efficiency variance đo hiệu quả sử dụng allocation base, thường là direct labor-hours.",
          sectionId: "s4",
        },
        {
          id: "eval",
          label: "Đánh giá & Appendix",
          group: "concept",
          parent: "std",
          detail:
            "Đánh giá variance cần xét trách nhiệm, tính kiểm soát và phần fixed overhead trong Appendix 10A.",
          sectionId: "s6",
        },
        {
          id: "e-resp",
          label: "Trách nhiệm & kiểm soát",
          group: "term",
          parent: "eval",
          detail:
            "Trách nhiệm variance phụ thuộc ai kiểm soát nguyên nhân, ví dụ purchasing hay production.",
          sectionId: "s6",
        },
        {
          id: "e-pro",
          label: "Ưu/nhược standard cost",
          group: "term",
          parent: "eval",
          detail:
            "Standard cost hỗ trợ management by exception nhưng có thể tạo hành vi lệch nếu dùng như công cụ phạt.",
          sectionId: "s7",
        },
        {
          id: "a-fixed",
          label: "Fixed OH budget & volume variance",
          group: "term",
          parent: "eval",
          detail:
            "Appendix 10A tách fixed overhead thành budget variance và volume variance.",
          sectionId: "s8",
        },
      ],
      edges: [
        { from: "std", to: "found" },
        { from: "found", to: "f-std" },
        { from: "found", to: "f-card" },
        { from: "found", to: "f-model" },
        { from: "std", to: "dm" },
        { from: "dm", to: "m-price" },
        { from: "dm", to: "m-qty" },
        { from: "std", to: "dl" },
        { from: "dl", to: "l-rate" },
        { from: "dl", to: "l-eff" },
        { from: "dl", to: "v-rate" },
        { from: "dl", to: "v-eff" },
        { from: "std", to: "eval" },
        { from: "eval", to: "e-resp" },
        { from: "eval", to: "e-pro" },
        { from: "eval", to: "a-fixed" },
      ],
    },
    sections: [
      {
        id: "s0",
        heading: "Standards & Standard Cost Card",
        blocks: [
          {
            type: "prose",
            body: "Standard là benchmark đo hiệu quả. Hai loại nền tảng là quantity standard, tức nên dùng bao nhiêu input cho một đơn vị, và price standard, tức nên trả bao nhiêu cho mỗi đơn vị input. Standard cost card liệt kê chuẩn lượng và giá của từng input cho một đơn vị sản phẩm.",
          },
          {
            type: "comparison",
            table: {
              title: "Quantity standard vs Price standard",
              columns: ["", "Quantity standard", "Price standard"],
              rows: [
                {
                  label: "Trả lời",
                  cells: [
                    "Dùng BAO NHIÊU input/đơn vị",
                    "Trả BAO NHIÊU cho mỗi đơn vị input",
                  ],
                },
                {
                  label: "DM",
                  cells: [
                    "Standard quantity per unit, gồm scrap bình thường",
                    "Standard price per unit, gồm giá giao tận nơi và net discount",
                  ],
                },
                {
                  label: "DL",
                  cells: [
                    "Standard hours per unit",
                    "Standard rate per hour, gồm taxes và fringe",
                  ],
                },
              ],
            },
          },
        ],
        keyTerms: [
          {
            term: "Standard cost card",
            definition:
              "Thẻ liệt kê standard quantity hoặc standard hours và standard price hoặc standard rate cho từng input cần để làm một đơn vị sản phẩm.",
          },
          {
            term: "Standard quantity per unit",
            definition:
              "Lượng input được kỳ vọng dùng để sản xuất một đơn vị sản phẩm.",
          },
          {
            term: "Standard price per unit",
            definition:
              "Giá được kỳ vọng trả cho mỗi đơn vị input.",
          },
          {
            term: "Standard hours per unit",
            definition:
              "Số direct labor-hours được kỳ vọng dùng để sản xuất một đơn vị sản phẩm.",
          },
          {
            term: "Standard rate per hour",
            definition:
              "Mức tiền công direct labor được kỳ vọng trả cho mỗi giờ lao động.",
          },
          {
            term: "Standard quantity/hours allowed",
            definition:
              "Lượng hoặc giờ chuẩn cho output thực, tính bằng actual output × standard quantity/hours per unit.",
          },
        ],
      },
      {
        id: "s1",
        heading: "General Model: khung 3 cột",
        blocks: [
          {
            type: "prose",
            body: "Mọi variance của DM, DL và VOH đều dùng chung khung 3 cột để so sánh ba tích số. Price variance là chênh giữa (1) và (2), chỉ do GIÁ đầu vào. Quantity variance là chênh giữa (2) và (3), chỉ do LƯỢNG dùng. Tách riêng giá và lượng vì trách nhiệm khác nhau và thời điểm mua/dùng khác nhau.",
          },
          {
            type: "diagram",
            diagram: {
              engine: "flow",
              title: "Khung 3 cột → price & quantity variance",
              layout: "horizontal",
              nodes: [
                {
                  id: "c1",
                  label: "(1) AQ×AP",
                  group: "term",
                  detail: "Thực mua/dùng ở giá thực (actual quantity × actual price).",
                },
                {
                  id: "c2",
                  label: "(2) AQ×SP",
                  group: "term",
                  detail: "Thực dùng ở giá chuẩn (actual quantity × standard price) — cột bản lề.",
                },
                {
                  id: "c3",
                  label: "(3) SQ×SP",
                  group: "term",
                  detail: "Lượng chuẩn cho output thực, ở giá chuẩn (standard quantity allowed × standard price).",
                },
              ],
              edges: [
                { from: "c1", to: "c2", label: "price var." },
                { from: "c2", to: "c3", label: "quantity var." },
              ],
              caption:
                "Cùng một khung dùng cho DM, DL, VOH: chênh (1)→(2) là price, (2)→(3) là quantity.",
            },
          },
          {
            type: "comparison",
            table: {
              title: "Khung 3 cột",
              columns: ["", "(1) AQ×AP", "(2) AQ×SP", "(3) SQ×SP"],
              rows: [
                {
                  label: "Ý nghĩa",
                  cells: [
                    "Thực mua/dùng ở giá thực",
                    "Thực dùng ở giá chuẩn",
                    "Lượng chuẩn cho output thực ở giá chuẩn",
                  ],
                },
                {
                  label: "Chênh",
                  cells: ["Price = (1)−(2)", "—", "Quantity = (2)−(3)"],
                },
              ],
            },
          },
          {
            type: "formula",
            formula: {
              expression:
                "Price variance = AQ(AP − SP)  ·  Quantity variance = SP(AQ − SQ)",
              legend: [
                {
                  symbol: "AQ/AP",
                  meaning: "actual quantity/actual price",
                },
                {
                  symbol: "SQ/SP",
                  meaning: "standard quantity allowed/standard price",
                },
              ],
              note: "SQ = output thực × standard quantity per unit.",
            },
          },
        ],
      },
      {
        id: "s2",
        heading: "Materials price & quantity variance",
        blocks: [
          {
            type: "calc",
            calc: {
              title: "Glacier DM variances",
              steps: [
                {
                  label:
                    "AQ×AP = $1,029 (210 kg × $4.90); AQ×SP = $1,050 (210 × $5); SQ×SP = $1,000 (200 × $5)",
                  expr: "ba cột",
                },
                {
                  label: "MPV = AQ(AP−SP) = 210($4.90−$5.00)",
                  expr: "$21 F",
                },
                {
                  label: "MQV = SP(AQ−SQ) = $5.00(210−200)",
                  expr: "$50 U",
                },
              ],
              result: "Price favorable $21, Quantity unfavorable $50",
              meaning:
                "Mua rẻ hơn chuẩn $0.10/kg (F) nhưng dùng dư 10 kg so với chuẩn (U).",
              implication:
                "Hai chiều ngược nhau → đừng nhìn tổng; phải tách để biết khâu nào tốt/xấu.",
            },
          },
          {
            type: "callout",
            callout: {
              kind: "trap",
              title: "Favorable chưa chắc tốt",
              body: "MPV Favorable đôi khi do mua NVL rẻ kém chất lượng → đẩy MQV Unfavorable ở khâu sản xuất.",
            },
          },
        ],
      },
      {
        id: "s3",
        heading: "Labor rate & efficiency variance",
        blocks: [
          {
            type: "calc",
            calc: {
              title: "Glacier DL variances",
              steps: [
                {
                  label:
                    "AH×AR = $26,250 (2,500h × $10.50); AH×SR = $25,000; SH×SR = $24,000 (2,400h × $10)",
                  expr: "ba cột",
                },
                {
                  label: "LRV = AH(AR−SR) = 2,500($10.50−$10.00)",
                  expr: "$1,250 U",
                },
                {
                  label: "LEV = SR(AH−SH) = $10.00(2,500−2,400)",
                  expr: "$1,000 U",
                },
              ],
              result: "Rate U $1,250; Efficiency U $1,000",
              meaning:
                "Trả công cao hơn chuẩn $0.50/h (U) và làm dư 100 giờ (U).",
              implication:
                "Production manager thường chịu trách nhiệm labor variance vì điều phối kỹ năng, động lực và giám sát.",
            },
          },
        ],
      },
      {
        id: "s4",
        heading: "Variable MOH rate & efficiency variance",
        blocks: [
          {
            type: "calc",
            calc: {
              title: "Glacier VOH variances",
              steps: [
                {
                  label:
                    "AH×AR = $10,500 (2,500h × $4.20); AH×SR = $10,000; SH×SR = $9,600 (2,400h × $4)",
                  expr: "ba cột",
                },
                {
                  label: "VMRV = AH(AR−SR) = 2,500($4.20−$4.00)",
                  expr: "$500 U",
                },
                {
                  label: "VMEV = SR(AH−SH) = $4.00(2,500−2,400)",
                  expr: "$400 U",
                },
              ],
              result: "Rate U $500; Efficiency U $400",
              meaning:
                "VOH efficiency variance phản ánh dùng base (DLH) hiệu quả hay không, vì VOH áp theo DLH.",
              implication:
                "VOH efficiency variance thực chất đo hiệu quả của allocation base, không phải bản thân overhead.",
            },
          },
        ],
      },
      {
        id: "s5",
        heading: "Subtlety quan trọng: mua ≠ dùng",
        blocks: [
          {
            type: "prose",
            body: "Khi lượng MUA khác lượng DÙNG, price variance tính trên toàn bộ lượng MUA để cô lập sớm trách nhiệm mua hàng; quantity variance tính trên lượng DÙNG. Glacier mua 210 kg nên MPV tính trên 210 = $21 F, nhưng dùng đúng 200 kg = SQ 200 nên quantity variance là $0.",
          },
          {
            type: "callout",
            callout: {
              kind: "key",
              title: "Purchased ≠ used",
              body: "Price variance → entire quantity purchased. Quantity variance → quantity used. Đây là bẫy hay nhầm khi mua ≠ dùng.",
            },
          },
        ],
      },
      {
        id: "s6",
        heading: "Trách nhiệm & tính kiểm soát",
        blocks: [
          {
            type: "comparison",
            table: {
              title: "Ai chịu trách nhiệm?",
              columns: ["Variance", "Người chịu chính"],
              rows: [
                {
                  label: "Materials price",
                  cells: ["Purchasing manager"],
                },
                {
                  label: "Materials quantity",
                  cells: ["Production manager"],
                },
                {
                  label: "Labor rate/efficiency",
                  cells: ["Production manager"],
                },
                {
                  label: "Quantity variance dùng standard price",
                  cells: [
                    "Không bắt production manager gánh phần giá thuộc purchasing.",
                  ],
                },
              ],
            },
          },
          {
            type: "callout",
            callout: {
              kind: "note",
              title: "Tính kiểm soát không luôn gọn một người",
              body: "Mua NVL kém chất lượng có thể gây MQV/LEV Unfavorable cho production; bảo trì máy kém cũng có thể gây LEV Unfavorable.",
            },
          },
        ],
      },
      {
        id: "s7",
        heading: "Ưu điểm & vấn đề của standard cost",
        blocks: [
          {
            type: "comparison",
            table: {
              title: "Standard cost: lợi & hại",
              columns: ["", "Ưu điểm", "Vấn đề tiềm ẩn"],
              rows: [
                {
                  label: "Management by exception",
                  cells: [
                    "Cốt lõi của management by exception",
                    "Dùng variance như công cụ phạt nhân viên → giảm morale, quyết định lệch lạc",
                  ],
                },
                {
                  label: "Benchmark",
                  cells: [
                    "Thúc đẩy economy & efficiency; quy trách nhiệm",
                    "Báo cáo variance thường hàng tháng → thông tin có thể lỗi thời",
                  ],
                },
                {
                  label: "Bookkeeping",
                  cells: [
                    "Đơn giản hóa bookkeeping",
                    "Giả định labor-paced và labor là variable có thể sai trong môi trường tự động",
                  ],
                },
              ],
            },
          },
          {
            type: "callout",
            callout: {
              kind: "trap",
              title: "Favorable không tự động là tốt",
              body: "Một variance Favorable có khi tệ ngang hoặc tệ hơn Unfavorable; chỉ đạt chuẩn chưa đủ, cần continuous improvement.",
            },
          },
        ],
      },
      {
        id: "s8",
        heading: "Appendix 10A: Fixed overhead budget & volume variance",
        blocks: [
          {
            type: "prose",
            body: "Với fixed overhead, ta tách thành budget variance, tức chênh chi tiêu, và volume variance, tức chênh do mức hoạt động thực khác denominator activity dùng để tính rate.",
          },
          {
            type: "formula",
            formula: {
              expression:
                "Budget variance = Actual fixed OH − Budgeted fixed OH  ·  Volume variance = Budgeted fixed OH − Fixed OH applied",
              legend: [
                {
                  symbol: "Fixed OH applied",
                  meaning: "SH allowed × predetermined fixed OH rate",
                },
                {
                  symbol: "Denominator activity",
                  meaning: "mức hoạt động dùng để tính predetermined rate",
                },
              ],
              note: "Volume variance KHÔNG đo kiểm soát chi phí; nó phản ánh dùng nhiều/ít công suất so với denominator.",
            },
          },
          {
            type: "calc",
            calc: {
              title: "MicroDrive: fixed OH variances",
              steps: [
                {
                  label: "Budget variance = $308,000 − $300,000",
                  expr: "$8,000 U",
                },
                {
                  label:
                    "Volume variance = $300,000 − $240,000 (40,000 std MH × $6)",
                  expr: "$60,000 U",
                },
              ],
              result: "Tổng fixed OH variance = $68,000 U",
              meaning:
                "Budget variance = chi tiêu thực vs ngân sách; volume variance = công suất dùng vs denominator.",
              implication:
                "Volume variance Unfavorable không nhất thiết là lãng phí; có thể chỉ vì sản xuất ít hơn mức denominator.",
            },
          },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        difficulty: "basic",
        conceptTested: "Price variance formula",
        stem: "Công thức price variance là gì?",
        options: [
          {
            id: "a",
            text: "AQ(AP − SP).",
            isCorrect: true,
            rationale:
              "Cơ chế: price variance giữ AQ cố định rồi so actual price với standard price. Bẫy: đổi sang lượng là đang tính quantity variance. Khóa: price variance = AQ(AP − SP).",
          },
          {
            id: "b",
            text: "SP(AQ − SQ).",
            isCorrect: false,
            rationale:
              "Cơ chế: công thức này giữ SP cố định và so lượng dùng với lượng chuẩn. Bẫy: đây là quantity variance, không phải price variance. Khóa: price variance phải có AP − SP.",
          },
          {
            id: "c",
            text: "AP(AQ − SQ).",
            isCorrect: false,
            rationale:
              "Cơ chế: quantity variance dùng standard price để cô lập phần lượng. Bẫy: dùng AP khiến phần giá lẫn vào phần lượng. Khóa: price variance là AQ(AP − SP).",
          },
          {
            id: "d",
            text: "AQ(SP − SQ).",
            isCorrect: false,
            rationale:
              "Cơ chế: SP là giá, SQ là lượng nên không trừ trực tiếp được. Bẫy: ghép ký hiệu sai đơn vị. Khóa: so giá với giá hoặc lượng với lượng.",
          },
        ],
        takeaway:
          "Price variance cô lập chênh lệch giá: AQ(AP − SP).",
      },
      {
        id: "q2",
        difficulty: "basic",
        conceptTested: "Standard quantity allowed",
        stem: "Standard quantity allowed (SQ) được tính như thế nào?",
        options: [
          {
            id: "a",
            text: "Output thực × standard quantity per unit.",
            isCorrect: true,
            rationale:
              "Cơ chế: SQ là lượng chuẩn được phép cho mức output thực. Bẫy: dùng output kế hoạch sẽ biến phân tích variance thành so sánh sai mức hoạt động. Khóa: SQ luôn bám actual output.",
          },
          {
            id: "b",
            text: "Lượng thực mua.",
            isCorrect: false,
            rationale:
              "Cơ chế: lượng mua có thể khác lượng dùng. Bẫy: nhầm purchased với allowed. Khóa: SQ dựa trên output thực và standard quantity per unit.",
          },
          {
            id: "c",
            text: "Lượng thực dùng.",
            isCorrect: false,
            rationale:
              "Cơ chế: lượng thực dùng là AQ trong quantity variance. Bẫy: lấy thực tế làm chuẩn. Khóa: SQ là benchmark, không phải actual.",
          },
          {
            id: "d",
            text: "Output kế hoạch × standard quantity per unit.",
            isCorrect: false,
            rationale:
              "Cơ chế: variance phân tích actual output, không phải planned output. Bẫy: kéo planning budget vào standard variance. Khóa: SQ = output thực × standard quantity per unit.",
          },
        ],
        takeaway:
          "Standard quantity allowed là chuẩn lượng cho output thực.",
      },
      {
        id: "q3",
        difficulty: "intermediate",
        conceptTested: "Materials quantity variance",
        stem: "Hanson dùng 1,700 lb, SQ là 1,500 lb, SP là $4/lb. Materials quantity variance là gì?",
        options: [
          {
            id: "a",
            text: "$800 U.",
            isCorrect: true,
            rationale:
              "Cơ chế: MQV = SP(AQ − SQ) = $4(1,700 − 1,500) = $800. Bẫy: vì dùng nhiều hơn chuẩn nên là Unfavorable, không phải Favorable. Khóa: dư lượng dùng → U.",
          },
          {
            id: "b",
            text: "$800 F.",
            isCorrect: false,
            rationale:
              "Cơ chế: số $800 đúng nhưng chiều sai. Bẫy: thấy variance dương rồi gọi Favorable. Khóa: với cost input, dùng nhiều hơn chuẩn là Unfavorable.",
          },
          {
            id: "c",
            text: "$170 U.",
            isCorrect: false,
            rationale:
              "Cơ chế: $170 là materials price variance của Hanson. Bẫy: nhầm price variance với quantity variance. Khóa: MQV dùng chênh lượng 200 lb × $4.",
          },
          {
            id: "d",
            text: "$170 F.",
            isCorrect: false,
            rationale:
              "Cơ chế: $170 F thuộc phần giá mua rẻ hơn chuẩn. Bẫy: chọn đúng số MPV nhưng sai loại variance. Khóa: câu hỏi hỏi quantity variance.",
          },
        ],
        takeaway:
          "Hanson MQV là $800 Unfavorable vì dùng dư 200 lb.",
      },
      {
        id: "q4",
        difficulty: "intermediate",
        conceptTested: "Materials price variance",
        stem: "Hanson có 1,700 lb, AP $3.90/lb và SP $4.00/lb. Materials price variance là gì?",
        options: [
          {
            id: "a",
            text: "$170 F.",
            isCorrect: true,
            rationale:
              "Cơ chế: MPV = AQ(AP − SP) = 1,700($3.90 − $4.00) = $170 F. Bẫy: thấy kết quả âm rồi gọi Unfavorable. Khóa: actual price thấp hơn standard price là Favorable.",
          },
          {
            id: "b",
            text: "$170 U.",
            isCorrect: false,
            rationale:
              "Cơ chế: số $170 đúng nhưng chiều sai. Bẫy: đảo quy ước F/U. Khóa: trả rẻ hơn chuẩn là Favorable.",
          },
          {
            id: "c",
            text: "$800 U.",
            isCorrect: false,
            rationale:
              "Cơ chế: $800 U là quantity variance. Bẫy: dùng chênh lượng thay vì chênh giá. Khóa: MPV so AP với SP.",
          },
          {
            id: "d",
            text: "$800 F.",
            isCorrect: false,
            rationale:
              "Cơ chế: $800 không đến từ chênh giá $0.10 trên 1,700 lb. Bẫy: lẫn cả số và chiều. Khóa: chênh giá là 10 cent × 1,700.",
          },
        ],
        takeaway:
          "Hanson MPV là $170 Favorable vì AP thấp hơn SP.",
      },
      {
        id: "q5",
        difficulty: "intermediate",
        conceptTested: "Labor rate variance",
        stem: "Hanson có AH 1,550h, AR $12.20/h và SR $12.00/h. Labor rate variance là gì?",
        options: [
          {
            id: "a",
            text: "$310 U.",
            isCorrect: true,
            rationale:
              "Cơ chế: LRV = AH(AR − SR) = 1,550($12.20 − $12.00) = $310 U. Bẫy: rate cao hơn chuẩn là chi phí xấu, không phải tốt. Khóa: trả công cao hơn chuẩn → U.",
          },
          {
            id: "b",
            text: "$310 F.",
            isCorrect: false,
            rationale:
              "Cơ chế: số đúng nhưng chiều sai. Bẫy: đảo Favorable/Unfavorable. Khóa: actual rate cao hơn standard rate là Unfavorable.",
          },
          {
            id: "c",
            text: "$600 U.",
            isCorrect: false,
            rationale:
              "Cơ chế: $600 U là labor efficiency variance. Bẫy: nhầm rate với efficiency. Khóa: LRV dùng chênh rate $0.20 × AH.",
          },
          {
            id: "d",
            text: "$300 U.",
            isCorrect: false,
            rationale:
              "Cơ chế: $300 thường đến từ làm tròn hoặc dùng sai số giờ. Bẫy: tính nhẩm bỏ 50 giờ. Khóa: phải nhân đủ 1,550h.",
          },
        ],
        takeaway:
          "Hanson LRV là $310 Unfavorable.",
      },
      {
        id: "q6",
        difficulty: "intermediate",
        conceptTested: "Labor efficiency variance",
        stem: "Hanson có SR $12/h, AH 1,550h và SH 1,500h. Labor efficiency variance là gì?",
        options: [
          {
            id: "a",
            text: "$600 U.",
            isCorrect: true,
            rationale:
              "Cơ chế: LEV = SR(AH − SH) = $12(1,550 − 1,500) = $600 U. Bẫy: dùng rate variance hoặc đảo chiều. Khóa: dùng dư 50 giờ ở standard rate.",
          },
          {
            id: "b",
            text: "$600 F.",
            isCorrect: false,
            rationale:
              "Cơ chế: số $600 đúng nhưng chiều sai. Bẫy: dùng nhiều giờ hơn chuẩn mà vẫn gọi Favorable. Khóa: dùng dư giờ là Unfavorable.",
          },
          {
            id: "c",
            text: "$590 U.",
            isCorrect: false,
            rationale:
              "Cơ chế: $590 không phải chênh 50 giờ × $12. Bẫy: trộn actual rate $12.20 vào efficiency variance. Khóa: efficiency variance dùng standard rate.",
          },
          {
            id: "d",
            text: "$310 U.",
            isCorrect: false,
            rationale:
              "Cơ chế: $310 U là labor rate variance. Bẫy: nhầm chênh rate với chênh giờ. Khóa: LEV so AH với SH.",
          },
        ],
        takeaway:
          "Hanson LEV là $600 Unfavorable vì dùng dư 50 giờ.",
      },
      {
        id: "q7",
        difficulty: "intermediate",
        conceptTested: "VOH efficiency variance",
        stem: "Hanson có variable overhead SR $3/h, AH 1,550h và SH 1,500h. VOH efficiency variance là gì?",
        options: [
          {
            id: "a",
            text: "$150 U.",
            isCorrect: true,
            rationale:
              "Cơ chế: VMEV = SR(AH − SH) = $3(1,550 − 1,500) = $150 U. Bẫy: chọn rate variance $465 U. Khóa: efficiency variance dùng chênh giờ và standard rate.",
          },
          {
            id: "b",
            text: "$150 F.",
            isCorrect: false,
            rationale:
              "Cơ chế: số $150 đúng nhưng chiều sai. Bẫy: dùng dư base mà gọi Favorable. Khóa: AH > SH nên Unfavorable.",
          },
          {
            id: "c",
            text: "$465 U.",
            isCorrect: false,
            rationale:
              "Cơ chế: $465 U là VOH rate variance. Bẫy: nhầm rate với efficiency. Khóa: efficiency variance không dùng AR $3.30.",
          },
          {
            id: "d",
            text: "$435 U.",
            isCorrect: false,
            rationale:
              "Cơ chế: $435 đến từ dùng sai rate hoặc sai base. Bẫy: pha trộn công thức. Khóa: chỉ lấy 50 giờ × $3.",
          },
        ],
        takeaway:
          "Hanson VMEV là $150 Unfavorable.",
      },
      {
        id: "q8",
        difficulty: "basic",
        conceptTested: "Materials price responsibility",
        stem: "Ai thường chịu trách nhiệm chính cho materials price variance?",
        options: [
          {
            id: "a",
            text: "Purchasing manager.",
            isCorrect: true,
            rationale:
              "Cơ chế: materials price variance phát sinh từ giá mua so với standard price. Bẫy: giao cho production manager dù họ thường không quyết giá mua. Khóa: phần giá thuộc purchasing.",
          },
          {
            id: "b",
            text: "Production manager.",
            isCorrect: false,
            rationale:
              "Cơ chế: production manager thường chịu materials quantity variance. Bẫy: lẫn giá mua với lượng dùng. Khóa: price → purchasing, quantity → production.",
          },
          {
            id: "c",
            text: "Maintenance manager.",
            isCorrect: false,
            rationale:
              "Cơ chế: maintenance có thể ảnh hưởng efficiency nhưng không phải người chính quyết giá vật liệu. Bẫy: chọn bộ phận hỗ trợ. Khóa: materials price nằm ở mua hàng.",
          },
          {
            id: "d",
            text: "Sales manager.",
            isCorrect: false,
            rationale:
              "Cơ chế: sales manager ảnh hưởng doanh thu, không trực tiếp quyết định giá mua input. Bẫy: kéo trách nhiệm ngoài chuỗi sản xuất. Khóa: materials price thuộc purchasing.",
          },
        ],
        takeaway:
          "Materials price variance thường gắn với Purchasing manager.",
      },
      {
        id: "q9",
        difficulty: "intermediate",
        conceptTested: "Purchased versus used quantity",
        stem: "Khi lượng MUA khác lượng DÙNG, price variance tính trên lượng nào?",
        options: [
          {
            id: "a",
            text: "Toàn bộ lượng MUA (purchased).",
            isCorrect: true,
            rationale:
              "Cơ chế: price variance đo trách nhiệm mua hàng nên tính trên toàn bộ lượng purchased. Bẫy: dùng lượng used sẽ trì hoãn hoặc làm lệch trách nhiệm mua. Khóa: price variance → purchased.",
          },
          {
            id: "b",
            text: "Lượng DÙNG (used).",
            isCorrect: false,
            rationale:
              "Cơ chế: lượng used dùng cho quantity variance. Bẫy: lẫn purchased với used. Khóa: price variance tính trên lượng mua.",
          },
          {
            id: "c",
            text: "Standard quantity.",
            isCorrect: false,
            rationale:
              "Cơ chế: standard quantity là benchmark lượng cho output thực, không phải base của price variance. Bẫy: lấy chuẩn lượng để đo chênh giá. Khóa: MPV dùng AQ purchased.",
          },
          {
            id: "d",
            text: "Lượng nhỏ hơn giữa purchased và used.",
            isCorrect: false,
            rationale:
              "Cơ chế: sách không dùng quy tắc chọn lượng nhỏ hơn. Bẫy: tự tạo quy tắc bình quân. Khóa: price variance tính trên entire quantity purchased.",
          },
        ],
        takeaway:
          "Purchased ≠ used: price variance dùng lượng mua, quantity variance dùng lượng dùng.",
      },
      {
        id: "q10",
        difficulty: "basic",
        conceptTested: "Favorable variance meaning",
        stem: "Với chi phí, variance Favorable nghĩa actual so với standard/budget như thế nào?",
        options: [
          {
            id: "a",
            text: "Actual thấp hơn standard/budget.",
            isCorrect: true,
            rationale:
              "Cơ chế: với chi phí, chi thực tế thấp hơn chuẩn tạo tác động tốt lên lợi nhuận. Bẫy: áp quy ước doanh thu vào chi phí. Khóa: cost thấp hơn benchmark là Favorable.",
          },
          {
            id: "b",
            text: "Actual cao hơn standard/budget.",
            isCorrect: false,
            rationale:
              "Cơ chế: cost cao hơn benchmark làm giảm lợi nhuận. Bẫy: đảo chiều F/U. Khóa: cost cao hơn là Unfavorable.",
          },
          {
            id: "c",
            text: "Actual bằng standard/budget.",
            isCorrect: false,
            rationale:
              "Cơ chế: bằng benchmark thì variance bằng 0. Bẫy: gọi không chênh lệch là Favorable. Khóa: Favorable cần actual tốt hơn chuẩn.",
          },
          {
            id: "d",
            text: "Không thể xác định nếu chưa có output kế hoạch.",
            isCorrect: false,
            rationale:
              "Cơ chế: F/U xét actual so với standard/budget phù hợp cho mức output. Bẫy: nghĩ luôn cần output kế hoạch. Khóa: trong standard variance dùng output thực để xác định benchmark.",
          },
        ],
        takeaway:
          "Với chi phí, actual thấp hơn standard/budget là Favorable.",
      },
      {
        id: "q11",
        difficulty: "intermediate",
        conceptTested: "Why separate price and quantity standards",
        stem: "Vì sao cần tách price standard và quantity standard riêng?",
        options: [
          {
            id: "a",
            text: "Vì trách nhiệm khác nhau (mua vs sản xuất) và thời điểm mua/dùng khác nhau.",
            isCorrect: true,
            rationale:
              "Cơ chế: price variance thường liên quan purchasing, quantity variance thường liên quan production. Bẫy: xem tổng spending variance là đủ. Khóa: tách ra để quy trách nhiệm đúng nguyên nhân.",
          },
          {
            id: "b",
            text: "Để báo cáo đẹp hơn.",
            isCorrect: false,
            rationale:
              "Cơ chế: mục tiêu là phân tích nguyên nhân, không phải trình bày. Bẫy: xem variance như trang trí báo cáo. Khóa: tách để quản trị và điều tra.",
          },
          {
            id: "c",
            text: "Vì luật yêu cầu.",
            isCorrect: false,
            rationale:
              "Cơ chế: standard variance là công cụ quản trị nội bộ. Bẫy: nhầm với yêu cầu báo cáo ngoài. Khóa: lý do chính là kiểm soát và trách nhiệm.",
          },
          {
            id: "d",
            text: "Vì giá luôn đổi.",
            isCorrect: false,
            rationale:
              "Cơ chế: giá có thể đổi nhưng chưa đủ lý do tách toàn bộ mô hình. Bẫy: giải thích quá hẹp. Khóa: tách vì cả trách nhiệm và thời điểm đều khác.",
          },
        ],
        takeaway:
          "Tách price và quantity giúp biết variance đến từ mua hàng hay sản xuất.",
      },
      {
        id: "q12",
        difficulty: "advanced",
        conceptTested: "Fixed overhead budget variance",
        stem: "Appendix 10A: MicroDrive có actual fixed OH $308,000 và budgeted fixed OH $300,000. Budget variance là gì?",
        options: [
          {
            id: "a",
            text: "$8,000 U.",
            isCorrect: true,
            rationale:
              "Cơ chế: Budget variance = Actual fixed OH − Budgeted fixed OH = $308,000 − $300,000 = $8,000 U. Bẫy: đảo chiều hoặc chọn total variance. Khóa: budget variance chỉ xét actual vs budgeted fixed OH.",
          },
          {
            id: "b",
            text: "$8,000 F.",
            isCorrect: false,
            rationale:
              "Cơ chế: actual fixed OH cao hơn budgeted fixed OH. Bẫy: số đúng nhưng chiều sai. Khóa: chi phí cao hơn budget là Unfavorable.",
          },
          {
            id: "c",
            text: "$60,000 U.",
            isCorrect: false,
            rationale:
              "Cơ chế: $60,000 U là volume variance. Bẫy: nhầm budget variance với volume variance. Khóa: budget variance không dùng fixed OH applied.",
          },
          {
            id: "d",
            text: "$68,000 U.",
            isCorrect: false,
            rationale:
              "Cơ chế: $68,000 U là tổng fixed OH variance. Bẫy: chọn tổng thay vì budget component. Khóa: câu hỏi chỉ hỏi budget variance.",
          },
        ],
        takeaway:
          "MicroDrive fixed OH budget variance là $8,000 Unfavorable.",
      },
      {
        id: "q13",
        difficulty: "advanced",
        conceptTested: "Fixed overhead volume variance interpretation",
        stem: "Appendix 10A: Volume variance KHÔNG đo điều gì?",
        options: [
          {
            id: "a",
            text: "Không đo kiểm soát chi phí; nó phản ánh mức hoạt động thực khác denominator.",
            isCorrect: true,
            rationale:
              "Cơ chế: volume variance so budgeted fixed OH với fixed OH applied dựa trên SH allowed và predetermined fixed OH rate. Bẫy: hiểu nó như lãng phí chi phí. Khóa: volume variance là tác động công suất/denominator.",
          },
          {
            id: "b",
            text: "Đo lãng phí NVL.",
            isCorrect: false,
            rationale:
              "Cơ chế: lãng phí NVL thuộc materials quantity variance. Bẫy: kéo direct materials sang fixed overhead. Khóa: volume variance thuộc fixed overhead capacity.",
          },
          {
            id: "c",
            text: "Đo hiệu quả lao động.",
            isCorrect: false,
            rationale:
              "Cơ chế: hiệu quả lao động là labor efficiency variance. Bẫy: thấy chữ hours rồi gắn với lao động. Khóa: volume variance không đo labor efficiency.",
          },
          {
            id: "d",
            text: "Đo giá đầu vào.",
            isCorrect: false,
            rationale:
              "Cơ chế: giá đầu vào thuộc price/rate variance. Bẫy: gộp mọi variance thành chênh giá. Khóa: fixed overhead volume variance không phải price variance.",
          },
        ],
        takeaway:
          "Fixed OH volume variance không đo kiểm soát chi phí; nó phản ánh mức hoạt động so với denominator.",
      },
    ],
  },
  {
    slug: "differential-analysis",
    order: 13,
    title: "Chapter 13 — Differential Analysis: The Key to Decision Making",
    bigIdea:
      "Ra quyết định đúng = chỉ nhìn future costs & benefits KHÁC NHAU giữa các phương án. Sunk cost và chi phí không đổi giữa các phương án đều irrelevant → bỏ qua. Khung này áp vào 5 quyết định kinh điển: add/drop segment, make-or-buy, special order, constrained resource, sell-or-process-further.",
    learningObjectives: [
      "LO1 — Nhận diện relevant vs irrelevant costs/benefits trong một quyết định.",
      "LO2 — Phân tích nên thêm hay bỏ một product line/segment.",
      "LO3 — Phân tích make-or-buy.",
      "LO4 — Phân tích có nên nhận special order.",
      "LO5 — Xác định cách dùng constrained resource sinh lời nhất.",
      "LO6 — Xác định giá trị của việc có thêm constrained resource.",
      "LO7 — Phân tích joint product nên bán tại split-off hay chế biến tiếp.",
      "LO8 (Appendix 13A) — Định giá bằng cost-plus pricing (absorption approach) & target costing.",
    ],
    status: "ready",
    source:
      "Garrison, Noreen, Brewer — Managerial Accounting, 17e, Chapter 13 (slide '13. Differential Analysis')",
    knowledgeMap: {
      engine: "flow",
      title: "Knowledge map — Differential Analysis",
      layout: "tree",
      collapsible: true,
      caption:
        "Bấm từng chip để xem quyết định nào dùng differential analysis và dữ kiện nào là relevant.",
      nodes: [
        {
          id: "diff",
          label: "Differential Analysis",
          group: "concept",
          detail:
            "Chỉ xét future cost/benefit khác nhau giữa các phương án.",
          sectionId: "s0",
        },
        {
          id: "found",
          label: "Nền tảng",
          group: "concept",
          parent: "diff",
          detail:
            "Nền tảng là lọc relevant costs/benefits khỏi sunk cost và phần không đổi.",
          sectionId: "s0",
        },
        {
          id: "f-relevant",
          label: "Relevant vs irrelevant",
          group: "term",
          parent: "found",
          detail:
            "Relevant items là future cost/benefit khác nhau giữa các phương án; irrelevant items bị bỏ khỏi phân tích.",
          sectionId: "s0",
        },
        {
          id: "f-sunk",
          label: "Sunk & opportunity cost",
          group: "term",
          parent: "found",
          detail:
            "Sunk cost luôn irrelevant; opportunity cost phải xét dù không ghi sổ.",
          sectionId: "s0",
        },
        {
          id: "f-approach",
          label: "Total vs differential approach",
          group: "term",
          parent: "found",
          detail:
            "Total approach lập đủ từng phương án; differential approach chỉ liệt kê phần khác nhau.",
          sectionId: "s1",
        },
        {
          id: "dec",
          label: "Quyết định",
          group: "lo",
          parent: "diff",
          detail:
            "Các quyết định kinh điển dùng differential analysis để so lợi ích và chi phí thay đổi.",
          sectionId: "s2",
        },
        {
          id: "d-drop",
          label: "Add/drop segment",
          group: "term",
          parent: "dec",
          detail:
            "Add/drop segment so contribution margin mất đi với fixed cost tránh được.",
          sectionId: "s2",
        },
        {
          id: "d-make",
          label: "Make or buy",
          group: "term",
          parent: "dec",
          detail:
            "Make-or-buy so avoidable cost của tự làm với giá mua ngoài và opportunity cost liên quan.",
          sectionId: "s3",
        },
        {
          id: "d-special",
          label: "Special order",
          group: "term",
          parent: "dec",
          detail:
            "Special order chỉ xét incremental revenue và incremental cost, đặc biệt khi còn dư công suất.",
          sectionId: "s4",
        },
        {
          id: "d-joint",
          label: "Sell or process further",
          group: "term",
          parent: "dec",
          detail:
            "Sell-or-process-further so incremental revenue sau split-off với incremental processing cost.",
          sectionId: "s7",
        },
        {
          id: "con",
          label: "Constraint",
          group: "lo",
          parent: "diff",
          detail:
            "Khi có bottleneck, tối đa hóa contribution margin trên mỗi đơn vị nguồn lực giới hạn.",
          sectionId: "s5",
        },
        {
          id: "c-use",
          label: "Constrained resource",
          group: "term",
          parent: "con",
          detail:
            "Constrained resource là nguồn lực giới hạn khiến doanh nghiệp không đáp ứng hết nhu cầu.",
          sectionId: "s5",
        },
        {
          id: "c-value",
          label: "Value of constraint",
          group: "term",
          parent: "con",
          detail:
            "Giá trị của thêm một đơn vị constraint bằng CM trên đơn vị constraint của sản phẩm dùng phần thêm đó.",
          sectionId: "s6",
        },
        {
          id: "c-manage",
          label: "Managing bottleneck",
          group: "term",
          parent: "con",
          detail:
            "Managing bottleneck nghĩa là nới, bảo vệ hoặc dùng hiệu quả hơn nguồn lực đang nghẽn.",
          sectionId: "s6",
        },
        {
          id: "price",
          label: "Appendix 13A Pricing",
          group: "lo",
          parent: "diff",
          detail:
            "Appendix 13A nối quyết định nội bộ với cost-plus pricing và target costing.",
          sectionId: "s8",
        },
        {
          id: "p-costplus",
          label: "Cost-plus pricing",
          group: "term",
          parent: "price",
          detail:
            "Cost-plus pricing lấy cost base cộng markup để đạt S&A và required ROI dự kiến.",
          sectionId: "s8",
        },
        {
          id: "p-target",
          label: "Target costing",
          group: "term",
          parent: "price",
          detail:
            "Target costing bắt đầu từ giá thị trường chấp nhận rồi trừ lợi nhuận mong muốn để ra target cost.",
          sectionId: "s8",
        },
      ],
      edges: [
        { from: "diff", to: "found" },
        { from: "found", to: "f-relevant" },
        { from: "found", to: "f-sunk" },
        { from: "found", to: "f-approach" },
        { from: "diff", to: "dec" },
        { from: "dec", to: "d-drop" },
        { from: "dec", to: "d-make" },
        { from: "dec", to: "d-special" },
        { from: "dec", to: "d-joint" },
        { from: "diff", to: "con" },
        { from: "con", to: "c-use" },
        { from: "con", to: "c-value" },
        { from: "con", to: "c-manage" },
        { from: "diff", to: "price" },
        { from: "price", to: "p-costplus" },
        { from: "price", to: "p-target" },
      ],
    },
    sections: [
      {
        id: "s0",
        heading: "Relevant vs irrelevant: 6 key concepts",
        blocks: [
          {
            type: "prose",
            body: "Differential analysis chỉ tập trung vào future cost & benefit khác nhau giữa các phương án; mọi thứ khác bỏ qua. Differential cost, incremental cost và avoidable cost đều là cách nhìn vào phần chi phí thay đổi theo quyết định. Sunk cost và cost không đổi giữa các phương án là irrelevant. Opportunity cost phải xét dù không ghi sổ.",
          },
          {
            type: "diagram",
            diagram: {
              engine: "flow",
              title: "Bộ lọc: khoản này relevant hay irrelevant?",
              layout: "tree",
              nodes: [
                { id: "start", label: "Một khoản cost/benefit" },
                {
                  id: "qdiff",
                  label: "Khác nhau giữa các phương án?",
                  group: "concept",
                  parent: "start",
                },
                {
                  id: "irr",
                  label: "Irrelevant — bỏ qua",
                  detail: "Cost không đổi giữa các phương án thì không ảnh hưởng quyết định.",
                  parent: "qdiff",
                },
                {
                  id: "qfuture",
                  label: "Là future cost (chưa phát sinh)?",
                  group: "concept",
                  parent: "qdiff",
                },
                {
                  id: "sunk",
                  label: "Sunk cost → irrelevant",
                  detail: "Đã chi rồi, không thể thay đổi → luôn bỏ qua.",
                  parent: "qfuture",
                },
                {
                  id: "rel",
                  label: "Relevant — đưa vào phân tích",
                  group: "term",
                  parent: "qfuture",
                },
                {
                  id: "opp",
                  label: "Nhớ: opportunity cost luôn relevant",
                  detail: "Lợi ích bỏ lỡ của phương án tốt nhất bị từ chối — không ghi sổ nhưng phải xét.",
                  parent: "rel",
                },
              ],
              edges: [
                { from: "start", to: "qdiff" },
                { from: "qdiff", to: "irr", label: "Không" },
                { from: "qdiff", to: "qfuture", label: "Có" },
                { from: "qfuture", to: "sunk", label: "Không" },
                { from: "qfuture", to: "rel", label: "Có" },
                { from: "rel", to: "opp", label: "gồm cả" },
              ],
              caption:
                "Hai câu hỏi lọc: (1) có khác giữa các phương án không, (2) có phải future cost không.",
            },
          },
          {
            type: "comparison",
            table: {
              title: "Cynthia: lái xe vs đi tàu",
              columns: ["", "Relevant?"],
              rows: [
                {
                  label: "Chi phí mua xe",
                  cells: ["Irrelevant (sunk)"],
                },
                {
                  label: "Bảo hiểm năm",
                  cells: ["Irrelevant (không đổi)"],
                },
                {
                  label: "Xăng",
                  cells: ["Relevant"],
                },
                {
                  label: "Bảo trì/sửa (dài hạn)",
                  cells: ["Relevant"],
                },
                {
                  label: "Giảm giá trị bán lại do thêm dặm",
                  cells: ["Relevant"],
                },
                {
                  label: "Vé tàu",
                  cells: ["Relevant"],
                },
                {
                  label: "Phí gửi xe trường / kennel",
                  cells: ["Irrelevant (trả dù lái hay đi tàu)"],
                },
              ],
            },
          },
        ],
        keyTerms: [
          {
            term: "Differential cost",
            definition:
              "Chênh lệch future cost giữa hai phương án.",
          },
          {
            term: "Differential revenue",
            definition:
              "Chênh lệch future revenue giữa hai phương án.",
          },
          {
            term: "Incremental cost",
            definition:
              "Phần cost tăng thêm khi chọn một phương án.",
          },
          {
            term: "Avoidable cost",
            definition:
              "Cost có thể loại bỏ bằng cách chọn phương án khác.",
          },
          {
            term: "Sunk cost",
            definition:
              "Cost đã phát sinh và không thể thay đổi bởi quyết định hiện tại.",
          },
          {
            term: "Opportunity cost",
            definition:
              "Lợi ích bị bỏ lỡ khi chọn một phương án thay vì phương án tốt nhất kế tiếp.",
          },
          {
            term: "Relevant cost",
            definition:
              "Future cost khác nhau giữa các phương án và vì vậy ảnh hưởng đến quyết định.",
          },
        ],
      },
      {
        id: "s1",
        heading: "Total vs differential cost approach",
        blocks: [
          {
            type: "prose",
            body: "Có thể lập income statement đầy đủ cho từng phương án bằng total cost approach, hoặc chỉ liệt kê khoản khác nhau bằng differential approach. Differential approach thường rõ hơn vì hiếm khi đủ thông tin lập báo cáo đầy đủ, và vì trộn irrelevant với relevant dễ làm người học nhìn sai trọng tâm.",
          },
          {
            type: "callout",
            callout: {
              kind: "note",
              title: "Hai cách, một kết luận",
              body: "Total cost approach và differential approach cho cùng kết luận; differential approach nhanh hơn và ít gây nhiễu hơn.",
            },
          },
        ],
      },
      {
        id: "s2",
        heading: "Add/drop segment — Lovell",
        blocks: [
          {
            type: "prose",
            body: "Quyết định bỏ segment chỉ dựa vào tác động tài chính: so contribution margin mất đi nếu bỏ với fixed cost tránh được nếu bỏ. Bỏ chỉ khi avoidable fixed cost lớn hơn lost contribution margin.",
          },
          {
            type: "calc",
            calc: {
              title: "Lovell: giữ hay bỏ digital watch",
              steps: [
                {
                  label: "Bỏ → mất contribution margin",
                  expr: "−$300,000",
                },
                {
                  label:
                    "Bỏ → tránh được fixed (salary $90k + advertising $100k + rent $70k)",
                  expr: "+$260,000",
                },
              ],
              result: "Bỏ làm lợi nhuận GIẢM $40,000 → GIỮ",
              meaning:
                "Contribution margin mất ($300,000) lớn hơn fixed cost tránh được ($260,000).",
              implication:
                "General factory OH $60k, depreciation $50k (sunk), general admin $30k là unavoidable → irrelevant; chúng được phân bổ lại cho line khác khi bỏ.",
            },
          },
          {
            type: "callout",
            callout: {
              kind: "trap",
              title: "Beware allocated fixed costs",
              body: "Common fixed cost không tránh được nhưng bị phân bổ vào segment làm nó trông lỗ. Bỏ segment không xóa được chi phí này, chỉ chuyển sang line khác.",
            },
          },
        ],
      },
      {
        id: "s3",
        heading: "Make or buy — Essex",
        blocks: [
          {
            type: "prose",
            body: "Vertical integration là tự làm nhiều khâu trong value chain. Make-or-buy so avoidable cost của việc tự làm với giá mua ngoài; nếu có cách dùng khác cho công suất hoặc mặt bằng, opportunity cost cũng phải đưa vào.",
          },
          {
            type: "calc",
            calc: {
              title: "Essex: làm hay mua part 4A",
              steps: [
                {
                  label: "Mua = 20,000 × $25",
                  expr: "$500,000",
                },
                {
                  label:
                    "Tự làm: tổng avoidable cost (DM, DL, variable OH, supervisor salary)",
                  expr: "$340,000",
                },
              ],
              result: "Financial advantage of MAKING = $160,000 → tiếp tục tự làm",
              meaning:
                "Depreciation (sunk) và allocated general factory OH ($10/unit) không tránh được nên irrelevant.",
              implication:
                "Nếu mặt bằng làm part 4A có thể dùng cho việc khác, opportunity cost của mặt bằng phải cộng vào chi phí tự làm.",
            },
          },
        ],
      },
      {
        id: "s4",
        heading: "Special order — Jet & Northern",
        blocks: [
          {
            type: "prose",
            body: "Special order là đơn một lần, ngoài hoạt động thường. Khi còn dư công suất, chỉ xét incremental cost & benefit; fixed OH hiện hữu không đổi nên irrelevant.",
          },
          {
            type: "calc",
            calc: {
              title: "Jet: nhận special order 3,000 @ $10?",
              steps: [
                {
                  label: "Incremental revenue = 3,000 × $10",
                  expr: "$30,000",
                },
                {
                  label: "Incremental cost = 3,000 × $8 variable",
                  expr: "$24,000",
                },
              ],
              result: "Lợi nhuận tăng $6,000 → NHẬN",
              meaning:
                "Giá $10 thấp hơn giá thường $20 vẫn đáng nhận vì đang dư công suất và chỉ cần phủ variable cost liên quan.",
              implication:
                "Nếu hết công suất, phải cộng opportunity cost của doanh số thường bị hi sinh.",
            },
          },
          {
            type: "calc",
            calc: {
              title: "Northern Optical: giá sàn",
              steps: [
                {
                  label:
                    "Variable production $10 × 10,000 + máy in logo $50,000",
                  expr: "$150,000",
                },
                {
                  label: "Giá sàn = $150,000 ÷ 10,000",
                  expr: "$15/unit",
                },
              ],
              result: "Minimum acceptable price = $15",
              meaning:
                "Fixed production $18 và variable selling $1 irrelevant; máy in $50,000 là avoidable fixed cost của riêng đơn này.",
              implication:
                "Giá sàn = relevant cost trung bình mỗi đơn vị; dưới mức này là lỗ.",
            },
          },
        ],
      },
      {
        id: "s5",
        heading: "Constrained resource — Ensign",
        blocks: [
          {
            type: "prose",
            body: "Khi nguồn lực giới hạn chặn khả năng đáp ứng cầu, fixed cost thường không đổi nên mục tiêu là tối đa total contribution margin. Không ưu tiên sản phẩm có CM/unit cao nhất; ưu tiên sản phẩm có CM trên mỗi đơn vị nguồn lực giới hạn cao nhất.",
          },
          {
            type: "calc",
            calc: {
              title: "Ensign: ưu tiên Product 1 hay 2?",
              steps: [
                {
                  label: "Product 1: CM $24/unit ÷ 1.00 phút",
                  expr: "$24/phút",
                },
                {
                  label: "Product 2: CM $15/unit ÷ 0.50 phút",
                  expr: "$30/phút",
                },
              ],
              result: "Ưu tiên Product 2 ($30/phút > $24/phút) dù CM/unit thấp hơn",
              meaning:
                "Bottleneck là phút máy A1; mỗi phút của Product 2 sinh nhiều contribution margin hơn.",
              implication:
                "Sản xuất Product 2 trước để đáp ứng cầu, công suất dư mới làm Product 1 → total CM $64,200.",
            },
          },
          {
            type: "callout",
            callout: {
              kind: "trap",
              title: "Đừng chọn theo CM/unit",
              body: "Bẫy kinh điển là chọn sản phẩm CM/unit cao nhất. Đúng phải là CM trên mỗi đơn vị nguồn lực giới hạn.",
            },
          },
        ],
      },
      {
        id: "s6",
        heading: "Value of constraint & managing bottleneck",
        blocks: [
          {
            type: "prose",
            body: "Giá trị của thêm một đơn vị nguồn lực giới hạn bằng CM/đơn vị nguồn lực của sản phẩm sẽ dùng phần thêm đó. Ensign sẵn lòng trả thêm tối đa $24/phút vì Product 1 dùng phần công suất tăng thêm.",
          },
          {
            type: "comparison",
            table: {
              title: "Cách relaxing (elevating) the constraint",
              columns: ["Cách nới bottleneck"],
              rows: [
                { label: "Tăng ca tại bottleneck", cells: [] },
                {
                  label: "Thuê ngoài (subcontract) phần việc ở bottleneck",
                  cells: [],
                },
                {
                  label: "Đầu tư thêm máy tại bottleneck",
                  cells: [],
                },
                {
                  label:
                    "Chuyển công nhân từ khâu không phải bottleneck sang",
                  cells: [],
                },
                {
                  label: "Cải tiến quy trình tại bottleneck",
                  cells: [],
                },
                {
                  label: "Giảm sản phẩm lỗi qua bottleneck",
                  cells: [],
                },
              ],
            },
          },
        ],
      },
      {
        id: "s7",
        heading: "Sell or process further — Sawmill",
        blocks: [
          {
            type: "prose",
            body: "Joint products là nhiều sản phẩm tạo ra từ một input chung; split-off point là nơi tách thành sản phẩm riêng; joint cost là chi phí tới split-off. Quyết định chế biến tiếp khi incremental revenue lớn hơn incremental processing cost. Joint cost irrelevant vì đã phát sinh dù bán ngay hay chế tiếp.",
          },
          {
            type: "calc",
            calc: {
              title: "Sawmill: bán tại split-off hay chế tiếp?",
              steps: [
                {
                  label:
                    "Lumber: incremental revenue ($270−$140=$130) − cost chế biến $50",
                  expr: "+$80 → chế tiếp",
                },
                {
                  label:
                    "Sawdust: incremental revenue ($50−$40=$10) − cost chế biến $20",
                  expr: "−$10 → bán tại split-off",
                },
              ],
              result: "Lumber chế tiếp; sawdust bán ngay",
              meaning:
                "Chỉ so doanh thu thêm với chi phí thêm sau split-off; joint cost không tham gia.",
              implication:
                "Phân bổ joint cost theo relative sales value chỉ để định giá tồn kho; dùng cho quyết định sẽ rất nguy hiểm.",
            },
          },
        ],
      },
      {
        id: "s8",
        heading: "Appendix 13A: Cost-plus pricing & Target costing",
        blocks: [
          {
            type: "formula",
            formula: {
              expression: "Selling price = (1 + Markup percentage) × Cost",
              legend: [
                {
                  symbol: "Markup % on absorption cost",
                  meaning:
                    "[(Required ROI × Investment) + S&A expenses] ÷ (Unit product cost × Unit sales)",
                },
              ],
              note: "Absorption approach: cost base = unit product cost (DM+DL+variable MOH+fixed MOH).",
            },
          },
          {
            type: "calc",
            calc: {
              title: "Ritter: cost-plus pricing",
              steps: [
                {
                  label: "Unit product cost (absorption)",
                  expr: "$20",
                },
                {
                  label:
                    "Markup % = [(20%×$100,000) + ($2×10,000 + $60,000)] ÷ ($20×10,000)",
                  expr: "50%",
                },
                {
                  label: "Selling price = (1+50%) × $20",
                  expr: "$30",
                },
              ],
              result: "Giá $30 phủ unit cost $20 + $10 cho S&A và ROI",
              meaning:
                "Markup được thiết kế để phủ S&A và đạt required ROI ở mức sản lượng dự báo.",
              implication:
                "Nhược điểm: giả định khách bắt buộc mua ở giá đó. Nếu chỉ bán 7,000 thay vì 10,000, unit cost lên $23 và lỗ $25,000.",
            },
          },
          {
            type: "callout",
            callout: {
              kind: "note",
              title: "Target costing",
              body: "Ngược chiều cost-plus: bắt đầu từ giá thị trường chấp nhận − lợi nhuận mong muốn = target cost mà sản phẩm phải đạt. Dùng khi thị trường quyết định giá.",
            },
          },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        difficulty: "basic",
        conceptTested: "Sunk cost",
        stem: "Trong differential analysis, chi phí nào LUÔN irrelevant?",
        options: [
          {
            id: "a",
            text: "Sunk cost.",
            isCorrect: true,
            rationale:
              "Cơ chế: sunk cost đã phát sinh và không thể thay đổi bởi quyết định hiện tại. Bẫy: cố gắng thu hồi quá khứ trong phân tích. Khóa: sunk cost luôn irrelevant.",
          },
          {
            id: "b",
            text: "Opportunity cost.",
            isCorrect: false,
            rationale:
              "Cơ chế: opportunity cost là lợi ích bỏ lỡ khi chọn phương án khác và có thể relevant. Bẫy: vì không ghi sổ nên tưởng bỏ qua. Khóa: opportunity cost phải được xét.",
          },
          {
            id: "c",
            text: "Differential cost.",
            isCorrect: false,
            rationale:
              "Cơ chế: differential cost là chênh lệch future cost giữa phương án. Bẫy: chọn đúng thuật ngữ nhưng ngược nghĩa. Khóa: differential cost thường relevant.",
          },
          {
            id: "d",
            text: "Avoidable cost.",
            isCorrect: false,
            rationale:
              "Cơ chế: avoidable cost tránh được nếu chọn phương án khác. Bẫy: tưởng tránh được thì bỏ qua. Khóa: avoidable cost là dữ kiện rất relevant.",
          },
        ],
        takeaway: "Sunk cost là chi phí quá khứ nên luôn irrelevant.",
      },
      {
        id: "q2",
        difficulty: "basic",
        conceptTested: "Differential analysis focus",
        stem: "Differential analysis tập trung vào điều gì?",
        options: [
          {
            id: "a",
            text: "Future cost & benefit khác nhau giữa các phương án.",
            isCorrect: true,
            rationale:
              "Cơ chế: quyết định chỉ thay đổi tương lai và chỉ khác biệt mới làm phương án khác nhau. Bẫy: ôm cả dữ liệu quá khứ hoặc phần giống nhau. Khóa: future + different.",
          },
          {
            id: "b",
            text: "Mọi chi phí đã ghi sổ.",
            isCorrect: false,
            rationale:
              "Cơ chế: nhiều chi phí đã ghi sổ là sunk hoặc không đổi. Bẫy: kế toán đầy đủ không đồng nghĩa relevant. Khóa: lọc phần future và khác nhau.",
          },
          {
            id: "c",
            text: "Chi phí quá khứ.",
            isCorrect: false,
            rationale:
              "Cơ chế: chi phí quá khứ không đổi được. Bẫy: tiếc tiền đã chi. Khóa: quyết định nhìn về tương lai.",
          },
          {
            id: "d",
            text: "Chi phí trung bình mỗi đơn vị.",
            isCorrect: false,
            rationale:
              "Cơ chế: average cost có thể chứa fixed/sunk/allocated cost irrelevant. Bẫy: dùng unit cost đầy đủ thay cho relevant cost. Khóa: hỏi khoản nào thay đổi theo phương án.",
          },
        ],
        takeaway:
          "Differential analysis chỉ giữ future items khác nhau giữa các phương án.",
      },
      {
        id: "q3",
        difficulty: "intermediate",
        conceptTested: "Add/drop segment",
        stem: "Lovell mất CM $300,000 nếu bỏ digital watch và chỉ tránh được fixed cost $260,000. Nên giữ hay bỏ?",
        options: [
          {
            id: "a",
            text: "Giữ, vì bỏ làm lợi nhuận giảm $40,000.",
            isCorrect: true,
            rationale:
              "Cơ chế: drop effect = fixed tránh được $260,000 − CM mất $300,000 = −$40,000. Bẫy: nhìn segment đang lỗ theo báo cáo đầy đủ. Khóa: bỏ chỉ tốt khi avoidable fixed > lost CM.",
          },
          {
            id: "b",
            text: "Bỏ vì đang lỗ $100,000.",
            isCorrect: false,
            rationale:
              "Cơ chế: số lỗ đó có common fixed cost phân bổ không tránh được. Bẫy: tin vào segment income sau allocated fixed cost. Khóa: chỉ xét avoidable cost.",
          },
          {
            id: "c",
            text: "Bỏ vì tiết kiệm $400,000 fixed cost.",
            isCorrect: false,
            rationale:
              "Cơ chế: chỉ $260,000 fixed cost tránh được; phần còn lại unavoidable hoặc sunk. Bẫy: coi mọi fixed cost là avoidable. Khóa: fixed không đồng nghĩa relevant.",
          },
          {
            id: "d",
            text: "Không xác định vì thiếu sales.",
            isCorrect: false,
            rationale:
              "Cơ chế: CM mất và fixed tránh được đã đủ cho differential analysis. Bẫy: đòi income statement đầy đủ. Khóa: differential approach dùng phần khác nhau.",
          },
        ],
        takeaway:
          "Lovell nên giữ digital watch; bỏ sẽ làm lợi nhuận giảm $40,000.",
      },
      {
        id: "q4",
        difficulty: "intermediate",
        conceptTested: "Make or buy",
        stem: "Essex có avoidable cost tự làm $340,000 và giá mua ngoài $500,000. Nên làm hay mua?",
        options: [
          {
            id: "a",
            text: "Tự làm, lợi $160,000.",
            isCorrect: true,
            rationale:
              "Cơ chế: tự làm tránh phải trả $500,000 và chỉ tốn avoidable cost $340,000. Bẫy: dùng full unit cost $30 so với giá mua $25. Khóa: make-or-buy dùng avoidable cost.",
          },
          {
            id: "b",
            text: "Mua, vì giá mua ngoài rẻ hơn.",
            isCorrect: false,
            rationale:
              "Cơ chế: giá mua ngoài $500,000 cao hơn avoidable cost $340,000. Bẫy: nhìn giá $25/unit so với full cost $30/unit. Khóa: bỏ allocated/sunk cost khỏi full cost.",
          },
          {
            id: "c",
            text: "Bằng nhau.",
            isCorrect: false,
            rationale:
              "Cơ chế: chênh lệch là $160,000. Bẫy: không tính tổng 20,000 units. Khóa: so tổng relevant cost.",
          },
          {
            id: "d",
            text: "Mua vì unit cost $30 > $25.",
            isCorrect: false,
            rationale:
              "Cơ chế: unit cost $30 chứa allocated general factory OH và depreciation irrelevant. Bẫy: dùng full cost làm relevant cost. Khóa: tự làm chỉ relevant $340,000.",
          },
        ],
        takeaway:
          "Essex nên tự làm part 4A vì lợi thế tài chính là $160,000.",
      },
      {
        id: "q5",
        difficulty: "intermediate",
        conceptTested: "Special order",
        stem: "Jet có special order 3,000 units @ $10, variable cost $8/unit và còn dư công suất. Nên nhận không?",
        options: [
          {
            id: "a",
            text: "Nhận, lợi nhuận tăng $6,000.",
            isCorrect: true,
            rationale:
              "Cơ chế: incremental revenue $30,000 trừ incremental cost $24,000 = $6,000. Bẫy: so với giá thường $20 hoặc full cost. Khóa: khi dư công suất, fixed OH không đổi.",
          },
          {
            id: "b",
            text: "Từ chối vì $10 < giá thường $20.",
            isCorrect: false,
            rationale:
              "Cơ chế: đơn đặc biệt không thay thế sales thường khi còn dư công suất. Bẫy: dùng list price thay vì relevant cost. Khóa: incremental revenue vẫn vượt incremental cost.",
          },
          {
            id: "c",
            text: "Từ chối vì dưới full cost.",
            isCorrect: false,
            rationale:
              "Cơ chế: full cost có fixed OH hiện hữu không đổi. Bẫy: dùng absorption cost cho quyết định ngắn hạn. Khóa: chỉ xét incremental cost.",
          },
          {
            id: "d",
            text: "Bằng nhau.",
            isCorrect: false,
            rationale:
              "Cơ chế: $30,000 − $24,000 = $6,000 favorable. Bẫy: bỏ qua contribution margin của đơn. Khóa: order tạo thêm lợi nhuận.",
          },
        ],
        takeaway: "Jet nên nhận special order vì tăng lợi nhuận $6,000.",
      },
      {
        id: "q6",
        difficulty: "advanced",
        conceptTested: "Special order minimum price",
        stem: "Northern Optical có variable production $10/unit, cần máy in logo $50,000 cho 10,000 units; fixed production $18 và variable selling $1 irrelevant. Giá sàn là bao nhiêu?",
        options: [
          {
            id: "a",
            text: "$15.",
            isCorrect: true,
            rationale:
              "Cơ chế: ($10×10,000 + $50,000) ÷ 10,000 = $15. Bẫy: cộng fixed production hoặc selling cost irrelevant. Khóa: giá sàn chỉ gồm relevant cost của đơn.",
          },
          {
            id: "b",
            text: "$10.",
            isCorrect: false,
            rationale:
              "Cơ chế: $10 chỉ là variable production, chưa gồm máy in logo avoidable fixed cost. Bẫy: bỏ fixed cost riêng của đơn. Khóa: $50,000/10,000 = $5 phải cộng thêm.",
          },
          {
            id: "c",
            text: "$29.",
            isCorrect: false,
            rationale:
              "Cơ chế: $29 cộng cả fixed production $18 và variable selling $1. Bẫy: đưa irrelevant cost vào đơn đặc biệt. Khóa: đơn này không chịu selling cost và fixed production không đổi.",
          },
          {
            id: "d",
            text: "$50.",
            isCorrect: false,
            rationale:
              "Cơ chế: $50,000 là tổng cost máy in, không phải unit price. Bẫy: quên chia cho 10,000 units. Khóa: convert fixed order cost thành $5/unit.",
          },
        ],
        takeaway: "Northern minimum price là $15/unit.",
      },
      {
        id: "q7",
        difficulty: "advanced",
        conceptTested: "Constrained resource priority",
        stem: "Ensign có Product 1: CM $24/unit, 1 phút/unit; Product 2: CM $15/unit, 0.5 phút/unit. Nên ưu tiên sản phẩm nào?",
        options: [
          {
            id: "a",
            text: "Product 2, vì $30/phút > $24/phút.",
            isCorrect: true,
            rationale:
              "Cơ chế: Product 2 tạo $15/0.5 = $30 mỗi phút constraint. Bẫy: chọn theo CM/unit. Khóa: constraint analysis dùng CM per constrained resource.",
          },
          {
            id: "b",
            text: "Product 1, vì CM/unit cao hơn.",
            isCorrect: false,
            rationale:
              "Cơ chế: Product 1 có $24/unit nhưng tiêu 1 phút, chỉ $24/phút. Bẫy: tối đa hóa CM/unit thay vì CM/phút. Khóa: bottleneck là phút máy.",
          },
          {
            id: "c",
            text: "Bằng nhau.",
            isCorrect: false,
            rationale:
              "Cơ chế: $30/phút khác $24/phút. Bẫy: so đơn vị không cùng base. Khóa: quy về cùng đơn vị constraint.",
          },
          {
            id: "d",
            text: "Không xác định.",
            isCorrect: false,
            rationale:
              "Cơ chế: đủ dữ kiện CM/unit và phút/unit để xếp ưu tiên. Bẫy: tưởng cần full cost. Khóa: chỉ cần CM trên constraint.",
          },
        ],
        takeaway: "Khi có bottleneck, ưu tiên sản phẩm có CM/phút cao nhất.",
      },
      {
        id: "q8",
        difficulty: "intermediate",
        conceptTested: "Objective under constraint",
        stem: "Khi có constrained resource, nên tối đa hóa cái gì?",
        options: [
          {
            id: "a",
            text: "Total contribution margin, dựa trên CM trên mỗi đơn vị nguồn lực giới hạn.",
            isCorrect: true,
            rationale:
              "Cơ chế: nguồn lực giới hạn là thứ khan hiếm nên mỗi đơn vị của nó phải tạo CM cao nhất. Bẫy: tối đa hóa per unit product. Khóa: CM per constrained resource.",
          },
          {
            id: "b",
            text: "CM trên mỗi đơn vị sản phẩm.",
            isCorrect: false,
            rationale:
              "Cơ chế: CM/unit bỏ qua lượng constraint tiêu thụ. Bẫy: Product 1 của Ensign trông tốt hơn nhưng kém theo phút. Khóa: quy về bottleneck.",
          },
          {
            id: "c",
            text: "Doanh thu.",
            isCorrect: false,
            rationale:
              "Cơ chế: doanh thu không trừ variable cost và không đo đóng góp vào fixed/profit. Bẫy: chọn sản phẩm giá bán cao. Khóa: dùng contribution margin.",
          },
          {
            id: "d",
            text: "Lợi nhuận kế toán mỗi sản phẩm.",
            isCorrect: false,
            rationale:
              "Cơ chế: lợi nhuận kế toán mỗi sản phẩm có thể chứa allocated fixed cost. Bẫy: trộn cost không relevant. Khóa: constraint decision dùng CM/resource.",
          },
        ],
        takeaway:
          "Constraint decision tối đa hóa total CM bằng cách xếp theo CM trên nguồn lực giới hạn.",
      },
      {
        id: "q9",
        difficulty: "intermediate",
        conceptTested: "Sell or process further",
        stem: "Sawmill có sawdust: incremental revenue $10 nếu chế biến tiếp, incremental processing cost $20. Nên làm gì?",
        options: [
          {
            id: "a",
            text: "Bán tại split-off, vì chế biến tiếp lỗ $10.",
            isCorrect: true,
            rationale:
              "Cơ chế: $10 revenue thêm − $20 cost thêm = −$10. Bẫy: nghĩ chế biến thêm luôn tăng giá trị. Khóa: chỉ chế tiếp khi incremental revenue > incremental cost.",
          },
          {
            id: "b",
            text: "Chế biến tiếp.",
            isCorrect: false,
            rationale:
              "Cơ chế: chế biến tiếp làm giảm lợi nhuận $10. Bẫy: nhìn giá bán sau chế biến cao hơn mà quên cost thêm. Khóa: so phần tăng doanh thu với cost thêm.",
          },
          {
            id: "c",
            text: "Bằng nhau.",
            isCorrect: false,
            rationale:
              "Cơ chế: chênh lệch là −$10, không phải 0. Bẫy: bỏ qua processing cost. Khóa: $10 − $20.",
          },
          {
            id: "d",
            text: "Phụ thuộc joint cost.",
            isCorrect: false,
            rationale:
              "Cơ chế: joint cost phát sinh trước split-off dù chọn cách nào. Bẫy: phân bổ joint cost vào quyết định. Khóa: joint cost irrelevant.",
          },
        ],
        takeaway:
          "Sawdust nên bán tại split-off vì chế biến tiếp làm giảm lợi nhuận $10.",
      },
      {
        id: "q10",
        difficulty: "intermediate",
        conceptTested: "Joint cost relevance",
        stem: "Trong quyết định sell-or-process-further, joint cost tới split-off là gì?",
        options: [
          {
            id: "a",
            text: "Irrelevant, vì đã phát sinh dù bán hay chế tiếp.",
            isCorrect: true,
            rationale:
              "Cơ chế: joint cost nằm trước split-off và không đổi giữa các phương án sau split-off. Bẫy: phân bổ joint cost rồi dùng để quyết định. Khóa: chỉ xét incremental revenue/cost sau split-off.",
          },
          {
            id: "b",
            text: "Relevant, phải phân bổ.",
            isCorrect: false,
            rationale:
              "Cơ chế: phân bổ joint cost có ích cho inventory costing, không phải quyết định process further. Bẫy: dùng số phân bổ cho quyết định. Khóa: joint cost không khác nhau.",
          },
          {
            id: "c",
            text: "Differential cost.",
            isCorrect: false,
            rationale:
              "Cơ chế: differential cost phải khác giữa phương án. Bẫy: thấy cost lớn nên cho là relevant. Khóa: joint cost giống nhau ở mọi phương án sau split-off.",
          },
          {
            id: "d",
            text: "Opportunity cost.",
            isCorrect: false,
            rationale:
              "Cơ chế: opportunity cost là lợi ích bỏ lỡ của phương án không chọn. Bẫy: gọi nhầm loại cost. Khóa: joint cost là sunk/irrelevant đối với quyết định này.",
          },
        ],
        takeaway:
          "Joint cost không được đưa vào quyết định sell-or-process-further.",
      },
      {
        id: "q11",
        difficulty: "basic",
        conceptTested: "Opportunity cost",
        stem: "Opportunity cost là gì?",
        options: [
          {
            id: "a",
            text: "Lợi ích bỏ lỡ của phương án không chọn.",
            isCorrect: true,
            rationale:
              "Cơ chế: chọn một phương án đồng nghĩa từ bỏ lợi ích tốt nhất của phương án khác. Bẫy: vì không ghi sổ nên bỏ qua. Khóa: opportunity cost vẫn relevant nếu khác giữa phương án.",
          },
          {
            id: "b",
            text: "Chi phí đã chi tiền mặt.",
            isCorrect: false,
            rationale:
              "Cơ chế: tiền đã chi có thể là sunk cost. Bẫy: đồng nhất cash outflow quá khứ với opportunity cost. Khóa: opportunity cost là lợi ích bị bỏ lỡ.",
          },
          {
            id: "c",
            text: "Chi phí ghi sổ.",
            isCorrect: false,
            rationale:
              "Cơ chế: opportunity cost thường không ghi sổ. Bẫy: chỉ tin accounting records. Khóa: relevant decision có cả dữ kiện ngoài sổ.",
          },
          {
            id: "d",
            text: "Chi phí cố định phân bổ.",
            isCorrect: false,
            rationale:
              "Cơ chế: allocated fixed cost thường không tránh được. Bẫy: nhầm chi phí phân bổ với cơ hội bị mất. Khóa: opportunity cost là benefit forgone.",
          },
        ],
        takeaway:
          "Opportunity cost là lợi ích bị bỏ lỡ và có thể rất relevant.",
      },
      {
        id: "q12",
        difficulty: "intermediate",
        conceptTested: "Common allocated fixed cost",
        stem: "Vì sao common allocated fixed cost dễ làm sai quyết định drop segment?",
        options: [
          {
            id: "a",
            text: "Vì nó không tránh được nhưng bị phân bổ làm segment trông lỗ; bỏ segment không xóa được nó.",
            isCorrect: true,
            rationale:
              "Cơ chế: common fixed cost tiếp tục tồn tại và bị phân bổ sang segment khác. Bẫy: xem lỗ sau phân bổ như lỗ tránh được. Khóa: chỉ avoidable fixed cost mới relevant.",
          },
          {
            id: "b",
            text: "Vì nó là biến phí.",
            isCorrect: false,
            rationale:
              "Cơ chế: common allocated fixed cost là fixed, không phải variable. Bẫy: phân loại sai hành vi chi phí. Khóa: vấn đề là không tránh được.",
          },
          {
            id: "c",
            text: "Vì nó là sunk cost.",
            isCorrect: false,
            rationale:
              "Cơ chế: một số phần như depreciation có thể sunk, nhưng common allocated fixed cost nói chung sai vì unavoidable. Bẫy: dùng một nhãn quá hẹp. Khóa: hỏi nó có tránh được không.",
          },
          {
            id: "d",
            text: "Vì nó luôn relevant.",
            isCorrect: false,
            rationale:
              "Cơ chế: nếu không tránh được khi drop thì irrelevant. Bẫy: thấy cost trên báo cáo nên tưởng relevant. Khóa: relevant phải khác giữa phương án.",
          },
        ],
        takeaway:
          "Trong add/drop, common fixed cost không tránh được phải bị loại khỏi phân tích.",
      },
      {
        id: "q13",
        difficulty: "advanced",
        conceptTested: "Cost-plus pricing",
        stem: "Appendix 13A: Ritter có markup 50% trên unit product cost $20. Selling price là bao nhiêu?",
        options: [
          {
            id: "a",
            text: "$30.",
            isCorrect: true,
            rationale:
              "Cơ chế: Selling price = (1 + 50%) × $20 = $30. Bẫy: cộng sai markup hoặc chọn cost base. Khóa: markup 50% nghĩa thêm $10 trên cost $20.",
          },
          {
            id: "b",
            text: "$20.",
            isCorrect: false,
            rationale:
              "Cơ chế: $20 chỉ là unit product cost, chưa có markup để phủ S&A và ROI. Bẫy: nhầm cost base với selling price. Khóa: phải nhân 1.5.",
          },
          {
            id: "c",
            text: "$25.",
            isCorrect: false,
            rationale:
              "Cơ chế: $25 tương đương markup 25% trên $20, không phải 50%. Bẫy: tính nửa của $10 thay vì nửa của $20. Khóa: 50% × $20 = $10.",
          },
          {
            id: "d",
            text: "$40.",
            isCorrect: false,
            rationale:
              "Cơ chế: $40 tương đương markup 100% trên $20. Bẫy: cộng cost hai lần. Khóa: 50% markup tạo giá $30.",
          },
        ],
        takeaway: "Ritter selling price theo cost-plus pricing là $30.",
      },
    ],
  },
];

export const managerialChapters: Chapter[] = applyEnglishQuizOverrides(rawChapters);
