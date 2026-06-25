import type { Chapter } from "./types";

// Nội dung Chương 1 bám sát slide gốc của môn (Garrison/Noreen/Brewer,
// Managerial Accounting 17e, Chapter 1) + case study Phở của giảng viên.
// Spec đối chiếu: docs/specs/chapter-a-cost-concepts.md.
// Thêm chương mới = thêm 1 object vào mảng này, KHÔNG cần sửa UI.

export const chapters: Chapter[] = [
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
            title: "Lợi nhuận kế toán vs kinh tế",
            body: "Doanh thu 150tr − chi phí trên sổ (30+3+9+1,5+0,6+5+3+9+6+3 = 70,1tr) = lợi nhuận kế toán ≈ 79,9tr. Trừ opportunity cost 15tr + 10tr = 25tr.",
            meaning: "Lợi nhuận kinh tế ≈ 79,9 − 25 = 54,9tr — đây mới là cái lời thật sau khi tính cả cơ hội bị bỏ lỡ.",
            implication: "Bỏ quên 25tr opportunity cost khiến ta tưởng lời ~79,9tr (lạc quan quá mức). Quán vẫn đáng làm vì 54,9tr > 0; nếu con số này âm thì nên cho thuê nhà + đi làm thay vì mở quán."
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
          { term: "Base distortion", definition: "Sai lệch giá job do allocation base không phản ánh đúng driver overhead." },
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
];

export function getAllChapters(): Chapter[] {
  return [...chapters].sort((a, b) => a.order - b.order);
}

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find((c) => c.slug === slug);
}
