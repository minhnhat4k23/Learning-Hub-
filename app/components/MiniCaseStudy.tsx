"use client";

import { useState } from "react";
import Link from "next/link";
import type { MiniCase } from "@/content/types";

type MiniCaseStudyProps = {
  subjectId: string;
  cases: MiniCase[];
};

export default function MiniCaseStudy({
  subjectId,
  cases,
}: MiniCaseStudyProps) {
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>(
    {},
  );

  const toggleQuestion = (key: string) => {
    setOpenQuestions((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  return (
    <div className="space-y-5">
      {cases.map((miniCase) => (
        <article
          key={miniCase.id}
          className="min-w-0 rounded-2xl border border-zinc-200 bg-white px-5 py-5 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <h2 className="min-w-0 break-words text-lg font-semibold">
              {miniCase.title}
            </h2>
            <span className="max-w-full break-words rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
              {miniCase.thread}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {miniCase.topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/${subjectId}/${topic.slug}`}
                className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
              >
                T{topic.order}
              </Link>
            ))}
          </div>

          <p className="mt-5 break-words text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
            {miniCase.scenario}
          </p>
          <p className="mt-2 break-words text-xs italic leading-5 text-zinc-500 dark:text-zinc-400">
            {miniCase.sourceNote}
          </p>

          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900 dark:border-amber-900/70 dark:bg-amber-950/40 dark:text-amber-100">
            Tự viết phân tích ra giấy trước khi mở khung — đây là dạng đề tự
            luận.
          </div>

          <div className="mt-5 divide-y divide-zinc-200 dark:divide-zinc-800">
            {miniCase.questions.map((question) => {
              const questionKey = `${miniCase.id}:${question.id}`;
              const isOpen = Boolean(openQuestions[questionKey]);
              const panelId = `analysis-${miniCase.id}-${question.id}`;

              return (
                <section key={question.id} className="min-w-0 py-5 first:pt-0 last:pb-0">
                  <h3 className="break-words text-sm font-medium leading-6">
                    {question.prompt}
                  </h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleQuestion(questionKey)}
                    className="mt-3 text-left text-sm font-medium text-emerald-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-emerald-300"
                  >
                    {isOpen ? "Thu gọn" : "Mở khung phân tích chuyên gia"}
                  </button>

                  {isOpen && (
                    <div
                      id={panelId}
                      className="mt-3 min-w-0 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 dark:border-emerald-900/70 dark:bg-emerald-950/40"
                    >
                      <p className="break-words text-sm leading-6 text-emerald-950 dark:text-emerald-100">
                        {question.analysis}
                      </p>
                      <p className="mt-3 break-words text-sm italic leading-6 text-rose-700 dark:text-rose-300">
                        Bẫy thường gặp: {question.trap}
                      </p>
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </article>
      ))}
    </div>
  );
}
