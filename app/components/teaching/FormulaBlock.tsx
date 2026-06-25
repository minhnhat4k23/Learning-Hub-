import type { Formula } from "@/content/types";

export default function FormulaBlock({ formula }: { formula: Formula }) {
  return (
    <div className="max-w-2xl rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
      <p className="font-mono text-2xl font-semibold tracking-normal text-zinc-950 dark:text-zinc-50">
        {formula.expression}
      </p>
      {formula.legend && formula.legend.length > 0 && (
        <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
          {formula.legend.map((item) => (
            <div key={item.symbol} className="rounded-lg bg-zinc-100 p-3 dark:bg-zinc-900">
              <dt className="font-mono font-semibold">{item.symbol}</dt>
              <dd className="mt-1 text-zinc-600 dark:text-zinc-400">
                {item.meaning}
              </dd>
            </div>
          ))}
        </dl>
      )}
      {formula.note && (
        <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {formula.note}
        </p>
      )}
    </div>
  );
}
