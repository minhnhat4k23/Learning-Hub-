"use client";

import { useState } from "react";
import type { Question } from "@/content/types";

type Props = { questions: Question[] };

const difficultyLabel: Record<Question["difficulty"], string> = {
  basic: "Basic",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export default function QuizPlayer({ questions }: Props) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (questions.length === 0) {
    return <p className="text-sm text-zinc-500">This chapter does not have questions yet.</p>;
  }

  const q = questions[index];
  const revealed = selected !== null;

  function choose(optionId: string) {
    if (revealed) return;
    setSelected(optionId);
    const opt = q.options.find((o) => o.id === optionId);
    if (opt?.isCorrect) setScore((s) => s + 1);
  }

  function next() {
    if (index + 1 >= questions.length) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h3 className="text-lg font-semibold">Question Set Complete</h3>
        <p className="mt-2 text-3xl font-bold">
          {score}/{questions.length}
        </p>
        <p className="mt-1 text-sm text-zinc-500">
          You answered {score} of {questions.length} correctly.
        </p>
        <button
          onClick={restart}
          className="mt-4 cursor-pointer rounded-full bg-zinc-950 px-5 py-2 text-sm font-medium text-white hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus-visible:ring-offset-zinc-900"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <span>
          Question {index + 1}/{questions.length}
        </span>
        <span className="rounded-full bg-zinc-100 px-2 py-0.5 dark:bg-zinc-800">
          {difficultyLabel[q.difficulty]}
        </span>
      </div>

      <p className="mt-3 text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        {q.conceptTested}
      </p>
      <h3 className="mt-1 text-lg font-medium leading-7">{q.stem}</h3>

      <ul className="mt-4 space-y-2">
        {q.options.map((opt) => {
          const isPicked = selected === opt.id;
          let tone =
            "border-zinc-200 hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-500";
          if (revealed) {
            if (opt.isCorrect) {
              tone = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40";
            } else if (isPicked) {
              tone = "border-rose-500 bg-rose-50 dark:bg-rose-950/40";
            } else {
              tone = "border-zinc-200 opacity-70 dark:border-zinc-800";
            }
          }
          return (
            <li key={opt.id}>
              <button
                onClick={() => choose(opt.id)}
                disabled={revealed}
                className={`w-full cursor-pointer rounded-xl border px-4 py-3 text-left text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 disabled:cursor-default ${tone}`}
              >
                <span className="font-medium">{opt.id.toUpperCase()}.</span>{" "}
                {opt.text}
                {revealed && (
                  <span className="mt-2 block text-xs leading-5 text-zinc-600 dark:text-zinc-300">
                    {opt.isCorrect ? "✓ " : "✗ "}
                    {opt.rationale}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      {revealed && q.takeaway && (
        <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm dark:border-amber-700 dark:bg-amber-950/30">
          <span className="font-semibold">Takeaway: </span>
          {q.takeaway}
        </div>
      )}

      {revealed && (
        <button
          onClick={next}
          className="mt-4 cursor-pointer rounded-full bg-zinc-950 px-5 py-2 text-sm font-medium text-white hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus-visible:ring-offset-zinc-900"
        >
          {index + 1 >= questions.length ? "See Results" : "Next Question"}
        </button>
      )}
    </div>
  );
}
