import type { ComparisonTable as ComparisonTableData } from "@/content/types";

export default function ComparisonTable({
  table,
}: {
  table: ComparisonTableData;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      {table.title && (
        <p className="border-b border-zinc-200 px-4 py-3 text-sm font-semibold dark:border-zinc-800">
          {table.title}
        </p>
      )}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
          <thead className="bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
            <tr>
              {table.columns.map((column) => (
                <th key={column} className="px-4 py-3 font-semibold">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, index) => (
              <tr
                key={`${row.label}-${index}`}
                className={
                  index % 2 === 0
                    ? "bg-white dark:bg-zinc-950"
                    : "bg-zinc-50 dark:bg-zinc-900/60"
                }
              >
                <th className="w-1/4 px-4 py-3 font-semibold text-zinc-900 dark:text-zinc-100">
                  {row.label}
                </th>
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={`${row.label}-${cellIndex}`}
                    className="px-4 py-3 leading-6 text-zinc-700 dark:text-zinc-300"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
