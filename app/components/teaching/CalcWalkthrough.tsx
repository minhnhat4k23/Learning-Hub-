import type { CalcWalkthrough as CalcWalkthroughData } from "@/content/types";

export default function CalcWalkthrough({
  calc,
}: {
  calc: CalcWalkthroughData;
}) {
  return (
    <div className="max-w-2xl rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
      {calc.title && <p className="text-sm font-semibold">{calc.title}</p>}
      <ol className="mt-4 space-y-3">
        {calc.steps.map((step, index) => (
          <li key={`${step.label}-${index}`} className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-xs font-semibold text-white dark:bg-zinc-100 dark:text-zinc-900">
              {index + 1}
            </span>
            <div>
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {step.label}
              </p>
              <p className="mt-1 rounded-lg bg-zinc-100 px-3 py-2 font-mono text-sm text-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
                {step.expr}
              </p>
              {step.note && (
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  {step.note}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
      {calc.result && (
        <p className="mt-5 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-100">
          {calc.result}
        </p>
      )}
      {(calc.meaning || calc.implication) && (
        <div className="mt-4 space-y-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {calc.meaning && (
            <p>
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                Ý nghĩa:
              </span>{" "}
              {calc.meaning}
            </p>
          )}
          {calc.implication && (
            <p>
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                Dẫn tới:
              </span>{" "}
              {calc.implication}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
