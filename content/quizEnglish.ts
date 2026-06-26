import type { Chapter } from "./types";

type EnglishQuizQuestion = {
  stem: string;
  options: string[];
};

const englishQuizBySlug: Record<string, EnglishQuizQuestion[]> = {
  "cost-concepts": [
    {
      stem: "How should the salary of a salesperson working in a manufacturer's showroom be classified?",
      options: [
        "Period cost (selling cost).",
        "Product cost, because the company is a manufacturer.",
        "Direct labor.",
        "Manufacturing overhead.",
      ],
    },
    {
      stem: "Which item is a period cost, not a product cost, for a manufacturing company?",
      options: [
        "Depreciation on factory equipment.",
        "Property tax on the corporate headquarters.",
        "Direct materials cost.",
        "Factory lighting.",
      ],
    },
    {
      stem: "When activity increases within the relevant range, fixed cost per unit will:",
      options: ["Decrease.", "Stay the same because it is fixed cost.", "Increase.", "Change in direct proportion to activity."],
    },
    {
      stem: "Which cost varies with the number of ice cream cones sold at a Baskin & Robbins store?",
      options: [
        "The cost of ice cream and napkins given to customers.",
        "Store lighting.",
        "Store manager salary.",
        "Store rent.",
      ],
    },
    {
      stem: "Direct labor belongs to which cost group?",
      options: [
        "Both prime cost and conversion cost.",
        "Prime cost only.",
        "Conversion cost only.",
        "Neither group, because it is a period cost.",
      ],
    },
    {
      stem: "Consider the salary of a factory supervisor. Which statement is correct?",
      options: [
        "It is an indirect cost of individual products, but a direct cost of the production department.",
        "It is always an indirect cost.",
        "It is always a direct cost.",
        "It is a period cost.",
      ],
    },
    {
      stem: "Building rent shared by production, sales, and accounting is best described, from the viewpoint of each department, as:",
      options: [
        "A common cost: an indirect cost that supports multiple cost objects at the same time.",
        "A direct cost of each department.",
        "A differential cost.",
        "A sunk cost.",
      ],
    },
    {
      stem: "A utility bill has a fixed monthly charge of 40 and a variable charge of 0.03 per kWh. If 2,000 kWh are used in a month, what is the total bill?",
      options: ["100 (= 40 + 0.03 x 2,000).", "60 (= 0.03 x 2,000).", "40.", "80 (= 0.04 x 2,000)."],
    },
    {
      stem: "Your car can currently be sold for 5,000. Is that 5,000 a sunk cost?",
      options: [
        "No. It is not a sunk cost.",
        "Yes, because it relates to a car you already bought.",
        "Yes, because the car is used.",
        "It cannot be determined without knowing the original purchase price.",
      ],
    },
    {
      stem: "A pho shop owner uses their own house as the shop location, which could be rented out for 15 million VND per month, and manages the shop personally, giving up another job worth 10 million VND per month. When evaluating whether the shop is truly profitable, how should these two amounts be treated?",
      options: [
        "As opportunity costs that should be subtracted, even though they do not appear in the accounting records.",
        "Ignored because no cash is paid and no invoice exists.",
        "As sunk costs.",
        "As product costs of a bowl of pho.",
      ],
    },
    {
      stem: "Sales are 100,000; COGS is 70,000, including 60,000 of variable costs; selling and administrative expenses are 20,000 and entirely fixed. What is contribution margin?",
      options: [
        "40,000 (= sales minus total variable costs of 60,000).",
        "30,000 (= sales minus COGS).",
        "10,000 (= net operating income).",
        "80,000 (= sales minus fixed costs of 20,000).",
      ],
    },
    {
      stem: "Which fixed cost is discretionary, meaning it can be reduced in the short term by a management decision?",
      options: [
        "This year's advertising budget.",
        "Depreciation on a factory that has already been built.",
        "Rent under a 10-year lease.",
        "Property tax on the factory.",
      ],
    },
    {
      stem: "You are considering taking a train instead of driving for a trip. How should the train ticket be treated in this decision?",
      options: [
        "As a relevant or differential cost if it is incurred only under the train option.",
        "As irrelevant because the ticket has not been bought and is not in the records.",
        "As a sunk cost because the trip was already planned.",
        "As always irrelevant because travel is personal and not a manufacturing cost.",
      ],
    },
  ],
  "job-order-costing": [
    {
      stem: "Which business is least suited to job-order costing?",
      options: [
        "A shipyard that builds ships to customer order.",
        "A movie studio that produces individual films.",
        "An oil refinery that continuously produces homogeneous gasoline.",
        "A construction company that builds large projects.",
      ],
    },
    {
      stem: "In job-order costing, which cost must be allocated rather than traced directly to a job?",
      options: ["Direct materials.", "Direct labor.", "Manufacturing overhead.", "Both direct materials and direct labor."],
    },
    {
      stem: "When is the predetermined overhead rate established?",
      options: [
        "Before the period begins, using estimated amounts.",
        "At the end of the period, after actual overhead is known.",
        "Whenever a job is completed.",
        "When annual financial statements are prepared.",
      ],
    },
    {
      stem: "Estimated activity is 160,000 DLH; fixed MOH is 200,000; variable MOH is 2.75 per DLH. What is the POHR per DLH?",
      options: ["4.00 per DLH.", "1.25 per DLH.", "2.75 per DLH.", "4,640,000."],
    },
    {
      stem: "The POHR is 4 per DLH. Job A-143 uses 8 actual DLH. How much overhead is applied to the job?",
      options: ["32.", "640,000.", "The actual overhead caused by the job.", "4."],
    },
    {
      stem: "Job WR53 uses 200 of direct materials and 10 DLH at 15 per hour. Estimated total overhead is 760,000 and estimated DLH is 20,000. What cost is assigned to Job WR53?",
      options: ["730.", "200.", "350.", "380."],
    },
    {
      stem: "Job A-143 has total cost of 268 and produces 2 completed units. What is the unit product cost?",
      options: ["134.", "268.", "536.", "It cannot be determined without knowing the selling price."],
    },
    {
      stem: "Why should an ideal allocation base be a cost driver?",
      options: [
        "Because a cost driver causes overhead, allocating by it makes job costs more accurate.",
        "Because DLH is always the only overhead cost driver.",
        "Because every allocation base gives the same result.",
        "So that overhead no longer has to be estimated.",
      ],
    },
    {
      stem: "Why are multiple departmental overhead rates often more accurate than one plantwide rate?",
      options: [
        "Because each department can use its own cost driver, such as machine-hours in Milling and labor-hours in Assembly.",
        "Because they always produce lower total cost.",
        "Because a plantwide rate cannot compute unit cost.",
        "Because multiple rates eliminate the need for estimates.",
      ],
    },
    {
      stem: "Job 407 has direct materials of 1,170 and direct labor of 350. Applied overhead is Milling: 90 MH x 8.50, and Assembly: 20 DLH x 10. With a 75% markup on total cost, what is the selling price?",
      options: ["4,348.75.", "1,863.75.", "2,485.", "4,243.75."],
    },
    {
      stem: "At year-end, applied overhead is less than actual overhead incurred. What is the result?",
      options: [
        "Overhead is underapplied, so COGS increases and net operating income decreases.",
        "Overhead is overapplied, so COGS decreases.",
        "COGS is unaffected because a POHR was used.",
        "Underapplied overhead decreases COGS and increases net operating income.",
      ],
    },
    {
      stem: "A job has been completed but not yet sold. Where is the job's cost reported?",
      options: [
        "Finished Goods on the balance sheet.",
        "Work in Process.",
        "Cost of Goods Sold.",
        "As an expense immediately in the current period.",
      ],
    },
    {
      stem: "When moving from a plantwide rate to ABC with batch-level and product-level activities, how does overhead often shift?",
      options: [
        "From high-volume products to low-volume products.",
        "From low-volume products to high-volume products.",
        "It does not change because total manufacturing overhead remains $1,520,000.",
        "It changes only if total manufacturing overhead changes.",
      ],
    },
  ],
  "job-order-cost-flows": [
    {
      stem: "When does underapplied or overapplied overhead occur?",
      options: [
        "When applied MOH, computed as POHR x actual activity, differs from actual MOH.",
        "Only when the POHR was computed incorrectly at the start of the period.",
        "Only when the company forgets to apply overhead to jobs.",
        "When direct materials differ from direct labor.",
      ],
    },
    {
      stem: "Beginning RM is 32,000; purchases are 276,000; ending RM is 28,000. What is direct materials used?",
      options: ["280,000.", "276,000.", "308,000.", "2,000."],
    },
    {
      stem: "DM used is 280,000, DL is 375,000, and MOH applied is 180,000. What is total manufacturing cost?",
      options: ["835,000.", "555,000.", "655,000.", "760,000."],
    },
    {
      stem: "Beginning WIP is 125,000, total manufacturing cost is 835,000, and ending WIP is 200,000. What is COGM?",
      options: ["760,000.", "960,000.", "1,160,000.", "835,000."],
    },
    {
      stem: "Beginning Finished Goods is 130,000, COGM is 760,000, and ending Finished Goods is 150,000. What is COGS?",
      options: ["740,000.", "760,000.", "780,000.", "890,000."],
    },
    {
      stem: "Tiger has actual MOH of 1,210,000, POHR of $4/MH, and actual activity of 290,000 MH. What is the result?",
      options: ["50,000 underapplied.", "50,000 overapplied.", "60,000 underapplied.", "No underapplied or overapplied overhead."],
    },
    {
      stem: "How does overapplied overhead affect net operating income when it is closed to COGS?",
      options: [
        "It increases net operating income because COGS decreases.",
        "It decreases net operating income because COGS increases.",
        "It does not change net operating income.",
        "It only increases Work in Process.",
      ],
    },
    {
      stem: "When indirect materials are issued from inventory, which account is debited?",
      options: ["Manufacturing Overhead.", "Work in Process.", "Raw Materials.", "Finished Goods."],
    },
    {
      stem: "When a job is completed, costs are transferred from where to where?",
      options: [
        "Work in Process to Finished Goods.",
        "Work in Process to Cost of Goods Sold.",
        "Finished Goods to Cost of Goods Sold.",
        "Raw Materials to Work in Process.",
      ],
    },
    {
      stem: "What are the two main ways to dispose of underapplied or overapplied overhead?",
      options: [
        "Close it to COGS or allocate it among WIP, Finished Goods, and COGS.",
        "Only close it to COGS.",
        "Record it directly as a separate period expense.",
        "Always keep it in Manufacturing Overhead for the next period.",
      ],
    },
    {
      stem: "Which costs are included in product cost under absorption costing?",
      options: [
        "DM + DL + both variable and fixed MOH.",
        "Variable costs only.",
        "DM + DL only.",
        "Selling and administrative costs plus MOH.",
      ],
    },
  ],
  "cost-volume-profit": [
    {
      stem: "How is contribution margin defined?",
      options: ["Sales - variable expenses.", "Sales - COGS.", "Sales - fixed expenses.", "Sales - all expenses."],
    },
    {
      stem: "What does a 40% CM ratio mean?",
      options: [
        "Each $1 of sales leaves $0.40 to cover fixed expenses and profit.",
        "$0.40 is net profit for each $1 of sales.",
        "$0.40 is variable cost for each $1 of sales.",
        "40% of sales is fixed cost.",
      ],
    },
    {
      stem: "What is the break-even point?",
      options: [
        "The sales level where profit equals zero, so total CM equals total fixed expenses.",
        "The sales level where CM equals zero.",
        "The sales level where sales equal variable cost.",
        "The sales level where fixed cost equals variable cost.",
      ],
    },
    {
      stem: "Coffee Klatch sells coffee for $1.49 per cup and has variable cost of $0.36 per cup. What is the CM ratio?",
      options: ["0.758.", "0.242.", "1.319.", "4.139."],
    },
    {
      stem: "Coffee Klatch has fixed expenses of $1,300 and a CM ratio of 0.758. What are break-even dollar sales?",
      options: ["$1,715.", "$1,300.", "$1,788.", "$3,129."],
    },
    {
      stem: "Coffee Klatch has fixed expenses of $1,300 and unit CM of $1.13. How many cups must it sell to break even?",
      options: ["1,150 cups.", "872 cups.", "1,200 cups.", "3,611 cups."],
    },
    {
      stem: "Coffee Klatch wants target profit of $2,500, has fixed expenses of $1,300, and unit CM of $1.13. How many cups must it sell?",
      options: ["3,363 cups.", "2,212 cups.", "1,150 cups.", "4,200 cups."],
    },
    {
      stem: "Coffee Klatch sells 2,100 cups per month and breaks even at 1,150 cups. What is the margin of safety in units?",
      options: ["950 cups.", "3,250 cups.", "1,150 cups.", "2,100 cups."],
    },
    {
      stem: "Coffee Klatch has contribution margin of $2,373 and NOI of $1,073. What is the degree of operating leverage?",
      options: ["2.21.", "0.45.", "0.34.", "2.92."],
    },
    {
      stem: "With DOL of 2.21, if sales increase by 20%, by what percentage is NOI expected to increase?",
      options: ["44.2%.", "20%.", "22.1%.", "30%."],
    },
    {
      stem: "RBC increases advertising by $10,000 to raise sales from 500 to 540 units. Unit CM is $200. How does NOI change?",
      options: ["NOI decreases by $2,000.", "NOI increases by $8,000.", "NOI increases by $10,000.", "NOI is unchanged."],
    },
    {
      stem: "In the target profit formula, what should the numerator be?",
      options: ["Target profit + fixed expenses.", "Target profit only.", "Target profit - fixed expenses.", "Fixed expenses only."],
    },
    {
      stem: "If the sales mix shifts toward a product with a lower CM ratio, with all else unchanged, what happens to break-even sales?",
      options: ["They increase.", "They decrease.", "They stay the same.", "They depend only on fixed cost."],
    },
    {
      stem: "Why can it be better to pay sales commissions based on contribution margin rather than sales dollars?",
      options: [
        "It discourages pushing high-sales products with low CM and aligns sales incentives with company profit.",
        "Because contribution margin is easier to compute than sales.",
        "Because the law requires commissions to be based on contribution margin.",
        "To reduce fixed cost.",
      ],
    },
    {
      stem: "Brentline Hospital has high activity of 8,000 patient-days with cost of $9,800 and low activity of 5,000 patient-days with cost of $7,400. What variable cost per patient-day does the high-low method estimate?",
      options: ["$0.80 per patient-day.", "$1.225 per patient-day.", "$0.75 per patient-day.", "$1.96 per patient-day."],
    },
    {
      stem: "How does the high-low method choose its two periods?",
      options: [
        "The periods with the highest and lowest activity.",
        "The periods with the highest and lowest cost.",
        "The two most recent periods.",
        "The two periods closest to average cost.",
      ],
    },
    {
      stem: "In Brentline's least-squares regression, what does R-squared of about 0.90 mean?",
      options: [
        "About 90% of the variation in cost is explained by activity.",
        "The model's error is 90%.",
        "Variable cost is 90% of total cost.",
        "The regression line is exactly correct for 90% of the periods.",
      ],
    },
  ],
  "master-budget": [
    {
      stem: "What is the starting point of the master budget?",
      options: ["The sales budget based on the sales forecast.", "The production budget.", "The cash budget.", "The budgeted balance sheet."],
    },
    {
      stem: "What are the two main purposes of budgeting?",
      options: ["Planning and control.", "Planning and pricing.", "Control and taxation.", "Forecasting and auditing."],
    },
    {
      stem: "Royal collects 70% in the month of sale and 30% in the following month. Accounts receivable on March 31 is $30,000. What are total cash collections for April through June?",
      options: ["$940,000.", "$700,000.", "$220,000.", "$190,000."],
    },
    {
      stem: "Royal wants ending inventory equal to 20% of next month's sales. May sales are 50,000 units, June sales are 30,000 units, and May beginning inventory is 10,000 units. What is May production?",
      options: ["46,000 units.", "56,000 units.", "62,000 units.", "52,000 units."],
    },
    {
      stem: "Royal needs 5 lb of materials per unit, May production is 46,000 units, desired ending materials are 14,500 lb, and beginning materials are 23,000 lb. How many pounds should Royal purchase in May?",
      options: ["221,500 lb.", "230,000 lb.", "240,000 lb.", "211,500 lb."],
    },
    {
      stem: "Which formula correctly states the production budget?",
      options: [
        "Sales + desired ending inventory - beginning inventory.",
        "Sales - desired ending inventory + beginning inventory.",
        "Sales only.",
        "Sales + beginning inventory - desired ending inventory.",
      ],
    },
    {
      stem: "Which budget does a merchandising company prepare instead of a production budget?",
      options: ["Merchandise purchases budget.", "Sales budget.", "Cash budget.", "No budget is needed."],
    },
    {
      stem: "What are the four main sections of a cash budget?",
      options: [
        "Receipts, disbursements, excess or deficiency, and financing.",
        "Receipts, disbursements, and income statement.",
        "Receipts and disbursements only.",
        "Five sections including taxes.",
      ],
    },
    {
      stem: "When computing cash disbursements for MOH or selling and administrative costs, how should depreciation be handled?",
      options: [
        "Subtract it because it is noncash.",
        "Add it because it is an expense.",
        "Leave it unchanged because it is in the budget.",
        "Double it to reflect asset wear and tear.",
      ],
    },
    {
      stem: "What is budgetary slack?",
      options: [
        "Intentionally setting budget targets that are easier to achieve so performance looks better.",
        "The unused budget left at the end of the period.",
        "An objective forecasting error.",
        "A minimum cash reserve.",
      ],
    },
    {
      stem: "What is a continuous, or perpetual, budget?",
      options: [
        "A rolling 12-month budget that adds a new month or quarter as the current period ends.",
        "A fixed one-year budget with no new period added.",
        "A budget that is never revised.",
        "A budget used only for cash.",
      ],
    },
    {
      stem: "What is a key advantage of a self-imposed budget?",
      options: [
        "More accurate estimates and stronger motivation because the people closest to operations participate.",
        "It is always faster than a top-down budget.",
        "It completely eliminates budgetary slack.",
        "It requires no approval by upper management.",
      ],
    },
    {
      stem: "Royal borrows $48,000 on a 16% line of credit on April 1 and repays it on June 30. How much interest is paid?",
      options: ["$1,920.", "$7,680.", "$960.", "$2,560."],
    },
  ],
  "flexible-budgets": [
    {
      stem: "A static planning budget is prepared for how many activity levels?",
      options: ["One planned activity level.", "Every level in the relevant range.", "Two activity levels.", "The actual activity level."],
    },
    {
      stem: "What does a flexible budget show?",
      options: [
        "What revenue and costs should have been, given the actual activity level.",
        "Original planned revenue at the planned activity level.",
        "Actual costs incurred.",
        "The cash budget for the period.",
      ],
    },
    {
      stem: "Larry's wages and salaries equal $5,000 fixed plus $30 per lawn. What is flexible budget wages for 600 lawns?",
      options: ["$23,000.", "$18,000.", "$20,000.", "$25,000."],
    },
    {
      stem: "What causes an activity variance?",
      options: [
        "Only the difference between actual activity and planned activity.",
        "A change in input prices.",
        "Poor cost control.",
        "An accounting error.",
      ],
    },
    {
      stem: "What is the activity variance?",
      options: ["Flexible budget - planning budget.", "Actual results - planning budget.", "Actual results - flexible budget.", "Planning budget - actual results."],
    },
    {
      stem: "What is the spending variance?",
      options: [
        "Actual cost - flexible budget cost.",
        "Actual cost - planning budget cost.",
        "Flexible budget cost - planning budget cost.",
        "Actual cost - standard price.",
      ],
    },
    {
      stem: "For a cost, when is a spending variance favorable?",
      options: [
        "When actual cost is lower than flexible budget cost.",
        "When actual cost is higher than flexible budget cost.",
        "When actual cost equals the planning budget.",
        "When activity increases.",
      ],
    },
    {
      stem: "Why should cost control not be evaluated using a static budget variance when actual activity differs from planned activity?",
      options: [
        "Because it mixes the effect of activity level with the effect of cost control.",
        "Because static budgets are always wrong.",
        "Because revenue is missing.",
        "Because taxes are not included.",
      ],
    },
    {
      stem: "In a three-column performance report, the difference between Flexible Budget and Actual is what type of variance?",
      options: ["Revenue and spending variance.", "Activity variance.", "Sales mix variance.", "Volume variance."],
    },
    {
      stem: "What is different about a performance report for a cost center?",
      options: [
        "It has no revenue or net operating income variance, only spending variances.",
        "It has no spending variance.",
        "It is identical to a profit center report.",
        "It has only activity variance.",
      ],
    },
    {
      stem: "Larry's activity and revenue increase by 10%. Why can NOI increase by more than 10%?",
      options: [
        "Because fixed costs stay the same, so the extra contribution margin flows into profit.",
        "Because selling price increases.",
        "Because variable cost decreases.",
        "Because taxes decrease.",
      ],
    },
    {
      stem: "Larry has actual revenue of $43,000 and flexible budget revenue of $41,250 at 550 lawns. What is the revenue variance?",
      options: ["$1,750 Favorable.", "$1,750 Unfavorable.", "$41,250 Favorable.", "$43,000 Unfavorable."],
    },
  ],
  "standard-costs": [
    {
      stem: "What is the price variance formula?",
      options: ["AQ(AP - SP).", "SP(AQ - SQ).", "AP(AQ - SQ).", "AQ(SP - SQ)."],
    },
    {
      stem: "How is standard quantity allowed (SQ) computed?",
      options: [
        "Actual output x standard quantity per unit.",
        "Actual quantity purchased.",
        "Actual quantity used.",
        "Planned output x standard quantity per unit.",
      ],
    },
    {
      stem: "Hanson used 1,700 lb, SQ is 1,500 lb, and SP is $4 per lb. What is the materials quantity variance?",
      options: ["$800 U.", "$800 F.", "$170 U.", "$170 F."],
    },
    {
      stem: "Hanson has 1,700 lb, AP of $3.90 per lb, and SP of $4.00 per lb. What is the materials price variance?",
      options: ["$170 F.", "$170 U.", "$800 U.", "$800 F."],
    },
    {
      stem: "Hanson has AH of 1,550 hours, AR of $12.20 per hour, and SR of $12.00 per hour. What is the labor rate variance?",
      options: ["$310 U.", "$310 F.", "$600 U.", "$300 U."],
    },
    {
      stem: "Hanson has SR of $12 per hour, AH of 1,550 hours, and SH of 1,500 hours. What is the labor efficiency variance?",
      options: ["$600 U.", "$600 F.", "$590 U.", "$310 U."],
    },
    {
      stem: "Hanson has variable overhead SR of $3 per hour, AH of 1,550 hours, and SH of 1,500 hours. What is the VOH efficiency variance?",
      options: ["$150 U.", "$150 F.", "$465 U.", "$435 U."],
    },
    {
      stem: "Who is usually primarily responsible for the materials price variance?",
      options: ["Purchasing manager.", "Production manager.", "Maintenance manager.", "Sales manager."],
    },
    {
      stem: "When the quantity purchased differs from the quantity used, which quantity is used for the price variance?",
      options: [
        "The entire quantity purchased.",
        "The quantity used.",
        "Standard quantity.",
        "The smaller of purchased and used.",
      ],
    },
    {
      stem: "For a cost, what does a favorable variance mean about actual cost compared with standard or budget?",
      options: [
        "Actual is lower than standard or budget.",
        "Actual is higher than standard or budget.",
        "Actual equals standard or budget.",
        "It cannot be determined without planned output.",
      ],
    },
    {
      stem: "Why should price standards and quantity standards be separated?",
      options: [
        "Because responsibility differs, such as purchasing vs. production, and purchase and use can occur at different times.",
        "To make the report look better.",
        "Because the law requires it.",
        "Because prices always change.",
      ],
    },
    {
      stem: "Appendix 10A: MicroDrive has actual fixed OH of $308,000 and budgeted fixed OH of $300,000. What is the budget variance?",
      options: ["$8,000 U.", "$8,000 F.", "$60,000 U.", "$68,000 U."],
    },
    {
      stem: "Appendix 10A: What does the fixed overhead volume variance not measure?",
      options: [
        "It does not measure cost control; it reflects actual activity compared with the denominator activity.",
        "Direct materials waste.",
        "Labor efficiency.",
        "Input price.",
      ],
    },
  ],
  "differential-analysis": [
    {
      stem: "In differential analysis, which cost is always irrelevant?",
      options: ["Sunk cost.", "Opportunity cost.", "Differential cost.", "Avoidable cost."],
    },
    {
      stem: "What does differential analysis focus on?",
      options: [
        "Future costs and benefits that differ between alternatives.",
        "All costs already recorded in the accounting system.",
        "Past costs.",
        "Average cost per unit.",
      ],
    },
    {
      stem: "Lovell would lose CM of $300,000 if it drops digital watches and can avoid only $260,000 of fixed cost. Should it keep or drop the segment?",
      options: [
        "Keep it, because dropping it would reduce profit by $40,000.",
        "Drop it because it currently shows a $100,000 loss.",
        "Drop it because it saves $400,000 of fixed cost.",
        "It cannot be determined without sales.",
      ],
    },
    {
      stem: "Essex has avoidable cost of $340,000 to make a part and an outside purchase price of $500,000. Should Essex make or buy?",
      options: ["Make it, with a $160,000 advantage.", "Buy it because the outside price is cheaper.", "The two choices are equal.", "Buy it because unit cost of $30 is greater than $25."],
    },
    {
      stem: "Jet has a special order for 3,000 units at $10 each, variable cost of $8 per unit, and idle capacity. Should it accept?",
      options: [
        "Accept; profit increases by $6,000.",
        "Reject because $10 is below the normal $20 price.",
        "Reject because the price is below full cost.",
        "The two choices are equal.",
      ],
    },
    {
      stem: "Northern Optical has variable production cost of $10 per unit and needs a $50,000 logo machine for 10,000 units. Fixed production cost of $18 and variable selling cost of $1 are irrelevant. What is the price floor?",
      options: ["$15.", "$10.", "$29.", "$50."],
    },
    {
      stem: "Ensign has Product 1 with CM of $24 per unit and 1 minute per unit, and Product 2 with CM of $15 per unit and 0.5 minute per unit. Which product should be prioritized?",
      options: ["Product 2, because $30 per minute is greater than $24 per minute.", "Product 1, because CM per unit is higher.", "They are equal.", "It cannot be determined."],
    },
    {
      stem: "When a constrained resource exists, what should be maximized?",
      options: [
        "Total contribution margin, based on CM per unit of the constrained resource.",
        "CM per unit of product.",
        "Revenue.",
        "Accounting profit per product.",
      ],
    },
    {
      stem: "A sawmill can earn $10 of incremental revenue by processing sawdust further, but the incremental processing cost is $20. What should it do?",
      options: [
        "Sell at split-off because further processing reduces profit by $10.",
        "Process further.",
        "Either choice is equal.",
        "It depends on joint cost.",
      ],
    },
    {
      stem: "In a sell-or-process-further decision, what is the joint cost incurred before split-off?",
      options: [
        "Irrelevant, because it has been incurred regardless of whether the product is sold or processed further.",
        "Relevant and must be allocated.",
        "A differential cost.",
        "An opportunity cost.",
      ],
    },
    {
      stem: "What is an opportunity cost?",
      options: [
        "The benefit forgone from the alternative not chosen.",
        "A cost already paid in cash.",
        "A cost recorded in the accounting records.",
        "An allocated fixed cost.",
      ],
    },
    {
      stem: "Why can common allocated fixed cost mislead an add/drop segment decision?",
      options: [
        "Because it is not avoidable but is allocated to make a segment look unprofitable; dropping the segment does not eliminate it.",
        "Because it is variable cost.",
        "Because it is always a sunk cost.",
        "Because it is always relevant.",
      ],
    },
    {
      stem: "Appendix 13A: Ritter has a 50% markup on unit product cost of $20. What is the selling price?",
      options: ["$30.", "$20.", "$25.", "$40."],
    },
  ],
};

export function applyEnglishQuizOverrides(chapters: Chapter[]): Chapter[] {
  return chapters.map((chapter) => {
    const overrides = englishQuizBySlug[chapter.slug];
    if (!overrides) return chapter;

    return {
      ...chapter,
      questions: chapter.questions.map((question, questionIndex) => {
        const override = overrides[questionIndex];
        if (!override) return question;

        return {
          ...question,
          stem: override.stem,
          options: question.options.map((option, optionIndex) => ({
            ...option,
            text: override.options[optionIndex] ?? option.text,
          })),
        };
      }),
    };
  });
}
