"use client";

import { Fragment, useEffect, useId, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Compass, Sparkles, X } from "lucide-react";

type BigIdeaCard = {
  kind: "core" | "pillar";
  label: string;
  body: string;
};

const badges = ["①", "②", "③", "④"];

function teaser(value: string, limit = 90) {
  if (value.length <= limit) return value;
  const cut = value.lastIndexOf(" ", limit);
  const end = cut > 0 ? cut : limit;
  return `${value.slice(0, end).trimEnd()}…`;
}

const toBullets = (value: string) =>
  value
    .split(/(?<=[.!?])\s+(?=[A-ZĐÀ-Ỹ"“(])/)
    .map((item) => item.trim())
    .filter(Boolean);

export default function BigIdeaModel({
  bigIdea,
  pillars,
}: {
  bigIdea: string;
  pillars: { label: string; body: string }[];
}) {
  const [active, setActive] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const cards: BigIdeaCard[] = [
    { kind: "core", label: "Ý cốt lõi", body: bigIdea },
    ...pillars.map((pillar) => ({
      kind: "pillar" as const,
      label: pillar.label,
      body: pillar.body,
    })),
  ];
  const activeCard = active === null ? null : cards[active];

  useEffect(() => {
    if (active === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [active]);

  useEffect(() => {
    if (active === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [active]);

  useEffect(() => {
    if (active !== null) closeButtonRef.current?.focus();
  }, [active]);

  return (
    <div className="rounded-2xl border-l-4 border-zinc-900 bg-white p-6 dark:border-white dark:bg-zinc-900">
      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        Bản chất chương
      </p>

      <div className="mt-4 flex justify-center">
        <button
          type="button"
          aria-haspopup="dialog"
          onClick={() => setActive(0)}
          className="group w-full max-w-2xl rounded-2xl border border-zinc-900 bg-zinc-950 p-5 text-left text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 dark:border-white dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-zinc-300 dark:text-zinc-600">
            <Compass aria-hidden className="h-4 w-4" />
            Ý cốt lõi
          </span>
          <span className="mt-3 block break-words text-lg font-semibold leading-7 [overflow-wrap:anywhere]">
            {teaser(bigIdea, 150)}
          </span>
          <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-zinc-300 group-hover:text-white dark:text-zinc-600 dark:group-hover:text-zinc-950">
            Mở chi tiết
            <Sparkles aria-hidden className="h-4 w-4" />
          </span>
        </button>
      </div>

      {pillars.length > 0 && (
        <div className="mt-5 overflow-x-auto pb-1">
          <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-stretch">
            {pillars.map((pillar, index) => (
              <Fragment key={pillar.label}>
                <button
                  type="button"
                  aria-haspopup="dialog"
                  onClick={() => setActive(index + 1)}
                  className="group min-w-0 flex-1 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-left transition hover:border-zinc-400 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
                >
                  <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-zinc-900 px-2 text-xs font-semibold text-white dark:bg-white dark:text-zinc-900">
                    {badges[index] ?? index + 1}
                  </span>
                  <span className="mt-3 block break-words text-sm font-semibold leading-5 text-zinc-950 [overflow-wrap:anywhere] dark:text-zinc-100">
                    {pillar.label}
                  </span>
                  <span className="mt-2 block break-words text-sm leading-6 text-zinc-600 [overflow-wrap:anywhere] dark:text-zinc-400">
                    {teaser(pillar.body)}
                  </span>
                </button>

                {index < pillars.length - 1 && (
                  <div className="flex items-center justify-center text-zinc-400 dark:text-zinc-600">
                    <ArrowDown aria-hidden className="h-5 w-5 sm:hidden" />
                    <ArrowRight
                      aria-hidden
                      className="hidden h-5 w-5 shrink-0 sm:block"
                    />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      )}

      {activeCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            data-bigidea-modal="panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative max-h-[80vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-900"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              data-bigidea-modal="close"
              ref={closeButtonRef}
              aria-label="Đóng"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              <X aria-hidden className="h-4 w-4" />
            </button>

            <div className="pr-10">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                {activeCard.kind === "core"
                  ? "Ý cốt lõi"
                  : `Trụ ${badges[(active ?? 1) - 1] ?? active}`}
              </p>
              <h2
                id={titleId}
                className="mt-2 break-words text-xl font-semibold text-zinc-950 [overflow-wrap:anywhere] dark:text-zinc-100"
              >
                {activeCard.label}
              </h2>
            </div>

            <ul className="mt-3 list-disc space-y-2 pl-5">
              {toBullets(activeCard.body).map((bullet, index) => (
                <li
                  key={`${activeCard.label}-${index}`}
                  className="break-words leading-7 text-zinc-700 [overflow-wrap:anywhere] dark:text-zinc-300"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
