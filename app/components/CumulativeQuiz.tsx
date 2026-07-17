"use client";

import Link from "next/link";
import { useState } from "react";
import type { Question } from "@/content/types";

type Topic = {
  slug: string;
  order: number;
  title: string;
  questions: Question[];
};

type Props = {
  subjectId: string;
  topics: Topic[];
};

type SessionItem = {
  question: Question;
  topicSlug: string;
  topicOrder: number;
  topicTitle: string;
};

type AnswerRecord = {
  item: SessionItem;
  isCorrect: boolean;
};

type SessionSize = 10 | 20 | 40 | "all";
type Stage = "setup" | "quiz" | "results";

const difficultyLabel: Record<Question["difficulty"], string> = {
  basic: "Basic",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

const sessionSizes: { value: SessionSize; label: string }[] = [
  { value: 10, label: "10" },
  { value: 20, label: "20" },
  { value: 40, label: "40" },
  { value: "all", label: "Tất cả" },
];

const primaryButtonClass =
  "cursor-pointer rounded-full bg-zinc-950 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus-visible:ring-offset-zinc-900";

function shuffle<T>(items: T[]): T[] {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [
      shuffled[swapIndex],
      shuffled[index],
    ];
  }
  return shuffled;
}

function roundRobin<T>(pools: T[][], limit: number): T[] {
  const cursors = pools.map(() => 0);
  const result: T[] = [];

  while (result.length < limit) {
    let added = false;
    for (let poolIndex = 0; poolIndex < pools.length; poolIndex += 1) {
      if (result.length >= limit) break;
      const item = pools[poolIndex][cursors[poolIndex]];
      if (item === undefined) continue;
      result.push(item);
      cursors[poolIndex] += 1;
      added = true;
    }
    if (!added) break;
  }

  return result;
}

function drawSession(selectedTopics: Topic[], limit: number): SessionItem[] {
  const pools = selectedTopics.map((topic) =>
    shuffle(topic.questions).map((question) => ({
      question,
      topicSlug: topic.slug,
      topicOrder: topic.order,
      topicTitle: topic.title,
    })),
  );
  return roundRobin(pools, limit);
}

export default function CumulativeQuiz({ subjectId, topics }: Props) {
  const [stage, setStage] = useState<Stage>("setup");
  const [selectedTopicSlugs, setSelectedTopicSlugs] = useState<string[]>(() =>
    topics.map((topic) => topic.slug),
  );
  const [sessionSize, setSessionSize] = useState<SessionSize>(20);
  const [session, setSession] = useState<SessionItem[]>([]);
  const [index, setIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  const unitLabel = subjectId === "managerial-accounting" ? "Chương" : "Topic";

  function beginSession(items: SessionItem[]) {
    if (items.length === 0) return;
    setSession(items);
    setIndex(0);
    setSelectedOptionId(null);
    setAnswers([]);
    setStage("quiz");
  }

  function startQuiz() {
    const selectedTopics = topics.filter((topic) =>
      selectedTopicSlugs.includes(topic.slug),
    );
    const available = selectedTopics.reduce(
      (total, topic) => total + topic.questions.length,
      0,
    );
    const limit = sessionSize === "all" ? available : Math.min(sessionSize, available);
    beginSession(drawSession(selectedTopics, limit));
  }

  function toggleTopic(slug: string) {
    setSelectedTopicSlugs((current) =>
      current.includes(slug)
        ? current.filter((topicSlug) => topicSlug !== slug)
        : [...current, slug],
    );
  }

  function choose(optionId: string) {
    if (selectedOptionId !== null) return;
    const item = session[index];
    const option = item.question.options.find((candidate) => candidate.id === optionId);
    setSelectedOptionId(optionId);
    setAnswers((current) => [
      ...current,
      { item, isCorrect: option?.isCorrect === true },
    ]);
  }

  function next() {
    if (index + 1 >= session.length) {
      setStage("results");
      return;
    }
    setIndex((current) => current + 1);
    setSelectedOptionId(null);
  }

  function retryWrong() {
    const wrongItems = answers
      .filter((answer) => !answer.isCorrect)
      .map((answer) => answer.item);
    const pools = topics
      .map((topic) =>
        shuffle(wrongItems.filter((item) => item.topicSlug === topic.slug)),
      )
      .filter((pool) => pool.length > 0);
    beginSession(roundRobin(pools, wrongItems.length));
  }

  function newSession() {
    setStage("setup");
    setSession([]);
    setIndex(0);
    setSelectedOptionId(null);
    setAnswers([]);
  }

  if (stage === "results") {
    const score = answers.filter((answer) => answer.isCorrect).length;
    const wrongAnswers = answers.filter((answer) => !answer.isCorrect);
    const breakdown = Array.from(
      answers.reduce(
        (byTopic, answer) => {
          const key = answer.item.topicSlug;
          const current = byTopic.get(key) ?? {
            slug: key,
            order: answer.item.topicOrder,
            title: answer.item.topicTitle,
            correct: 0,
            total: 0,
          };
          current.total += 1;
          if (answer.isCorrect) current.correct += 1;
          byTopic.set(key, current);
          return byTopic;
        },
        new Map<
          string,
          {
            slug: string;
            order: number;
            title: string;
            correct: number;
            total: number;
          }
        >(),
      ).values(),
    ).sort((a, b) => a.order - b.order);

    return (
      <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold">Kết quả ôn tập</h2>
        <p className="mt-2 text-4xl font-bold">
          {score}/{session.length}
        </p>

        <div className="mt-6">
          <h3 className="text-sm font-semibold">Breakdown theo {unitLabel.toLowerCase()}</h3>
          <div className="mt-2 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full table-fixed text-left text-sm">
              <thead className="bg-zinc-50 text-xs text-zinc-500 dark:bg-zinc-950/60 dark:text-zinc-400">
                <tr>
                  <th scope="col" className="w-3/4 px-3 py-2 font-medium">
                    Nguồn
                  </th>
                  <th scope="col" className="px-3 py-2 text-right font-medium">
                    Điểm
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                {breakdown.map((row) => {
                  const percentage = Math.round((row.correct / row.total) * 100);
                  return (
                    <tr
                      key={row.slug}
                      className={
                        percentage < 60
                          ? "bg-rose-50 dark:bg-rose-950/30"
                          : undefined
                      }
                    >
                      <td className="break-words px-3 py-2.5 align-top">
                        <span className="font-medium">{row.title}</span>
                      </td>
                      <td className="px-3 py-2.5 text-right align-top font-medium">
                        {row.correct}/{row.total} ({percentage}%)
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {wrongAnswers.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-semibold">Câu cần làm lại</h3>
            <ul className="mt-2 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
              {wrongAnswers.map(({ item }) => (
                <li
                  key={`${item.topicSlug}:${item.question.id}`}
                  className="min-w-0 py-3"
                >
                  <p className="truncate text-sm font-medium">{item.question.stem}</p>
                  {item.question.takeaway && (
                    <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                      {item.question.takeaway}
                    </p>
                  )}
                  <Link
                    href={`/${subjectId}/${item.topicSlug}`}
                    className="mt-1 inline-block text-xs font-medium text-zinc-600 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:text-zinc-300"
                  >
                    Mở {unitLabel} {item.topicOrder}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          {wrongAnswers.length > 0 && (
            <button type="button" onClick={retryWrong} className={primaryButtonClass}>
              Làm lại các câu sai
            </button>
          )}
          <button
            type="button"
            onClick={newSession}
            className="cursor-pointer rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium transition-colors hover:border-zinc-500 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-500 dark:hover:bg-zinc-800"
          >
            Phiên mới
          </button>
        </div>
      </div>
    );
  }

  if (stage === "quiz") {
    const item = session[index];
    const question = item.question;
    const revealed = selectedOptionId !== null;

    return (
      <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-500">
          <span>
            Câu {index + 1}/{session.length}
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-zinc-100 px-2 py-0.5 dark:bg-zinc-800">
              {difficultyLabel[question.difficulty]}
            </span>
            <Link
              href={`/${subjectId}/${item.topicSlug}`}
              className="rounded-full bg-zinc-100 px-2 py-0.5 font-medium text-zinc-600 hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              {unitLabel} {item.topicOrder}
            </Link>
          </div>
        </div>

        <p className="mt-3 text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          {question.conceptTested}
        </p>
        <h2 className="mt-1 text-lg font-medium leading-7">{question.stem}</h2>

        <ul className="mt-4 space-y-2">
          {question.options.map((option) => {
            const isPicked = selectedOptionId === option.id;
            let tone =
              "border-zinc-200 hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-500";
            if (revealed) {
              if (option.isCorrect) {
                tone = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40";
              } else if (isPicked) {
                tone = "border-rose-500 bg-rose-50 dark:bg-rose-950/40";
              } else {
                tone = "border-zinc-200 opacity-70 dark:border-zinc-800";
              }
            }

            return (
              <li key={option.id}>
                <button
                  type="button"
                  onClick={() => choose(option.id)}
                  disabled={revealed}
                  className={`w-full cursor-pointer rounded-xl border px-4 py-3 text-left text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 disabled:cursor-default ${tone}`}
                >
                  <span className="font-medium">{option.id.toUpperCase()}.</span>{" "}
                  {option.text}
                  {revealed && (
                    <span className="mt-2 block text-xs leading-5 text-zinc-600 dark:text-zinc-300">
                      {option.isCorrect ? "✓ " : "✗ "}
                      {option.rationale}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {revealed && question.takeaway && (
          <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm dark:border-amber-700 dark:bg-amber-950/30">
            <span className="font-semibold">Takeaway: </span>
            {question.takeaway}
          </div>
        )}

        {revealed && (
          <button type="button" onClick={next} className={`mt-4 ${primaryButtonClass}`}>
            {index + 1 >= session.length ? "Xem kết quả" : "Câu tiếp theo"}
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <fieldset>
        <legend className="text-sm font-semibold">Chọn nội dung ôn tập</legend>
        <ul className="mt-3 space-y-2">
          {topics.map((topic) => {
            const checked = selectedTopicSlugs.includes(topic.slug);
            return (
              <li key={topic.slug}>
                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-zinc-200 px-4 py-3 text-sm transition-colors hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-500">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleTopic(topic.slug)}
                    className="mt-0.5 size-4 shrink-0 cursor-pointer accent-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:accent-white"
                  />
                  <span className="min-w-0 leading-5">
                    <span className="font-medium">{topic.title}</span>{" "}
                    <span className="text-zinc-500 dark:text-zinc-400">
                      ({topic.questions.length} câu)
                    </span>
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold">Cỡ phiên</legend>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {sessionSizes.map((size) => (
            <label key={size.label} className="cursor-pointer">
              <input
                type="radio"
                name="session-size"
                value={size.value}
                checked={sessionSize === size.value}
                onChange={() => setSessionSize(size.value)}
                className="peer sr-only"
              />
              <span className="block rounded-full border border-zinc-300 px-4 py-2 text-center text-sm font-medium transition-colors hover:border-zinc-500 peer-checked:border-zinc-950 peer-checked:bg-zinc-950 peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-zinc-400 peer-focus-visible:ring-offset-2 dark:border-zinc-700 dark:hover:border-zinc-500 dark:peer-checked:border-white dark:peer-checked:bg-white dark:peer-checked:text-zinc-950 dark:peer-focus-visible:ring-offset-zinc-900">
                {size.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <button
        type="button"
        onClick={startQuiz}
        disabled={selectedTopicSlugs.length === 0}
        className={`mt-6 ${primaryButtonClass}`}
      >
        Bắt đầu ôn
      </button>
    </div>
  );
}
