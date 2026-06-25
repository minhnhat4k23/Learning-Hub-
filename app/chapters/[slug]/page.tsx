import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllChapters, getChapterBySlug } from "@/content/chapters";
import QuizPlayer from "@/app/components/QuizPlayer";
import BlockRenderer from "@/app/components/teaching/BlockRenderer";
import ChapterRail from "@/app/components/teaching/ChapterRail";
import KnowledgeMap from "@/app/components/teaching/KnowledgeMap";
import type { Section } from "@/content/types";

export function generateStaticParams() {
  return getAllChapters().map((c) => ({ slug: c.slug }));
}

function SectionBody({ section }: { section: Section }) {
  if (section.blocks && section.blocks.length > 0) {
    return <BlockRenderer blocks={section.blocks} />;
  }

  if (!section.body) return null;

  return (
    <>
      {section.body.split("\n\n").map((para, i) => (
        <p
          key={i}
          className="mt-3 max-w-2xl leading-8 text-zinc-700 dark:text-zinc-300"
        >
          {para}
        </p>
      ))}
    </>
  );
}

export default async function ChapterDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  if (!chapter || chapter.status === "placeholder") notFound();

  const navChapters = getAllChapters()
    .filter((c) => c.status !== "placeholder")
    .map((c) => ({ order: c.order, slug: c.slug, title: c.title }));
  const navSections = chapter.sections.map((s) => ({
    id: s.id,
    heading: s.heading,
  }));

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="lg:flex lg:items-start">
          <ChapterRail
            chapters={navChapters}
            currentSlug={slug}
            sections={navSections}
          />

          <article className="min-w-0 max-w-4xl lg:flex-1">
            <Link
              href="/chapters"
              className="text-sm text-zinc-500 hover:underline"
            >
              ← Các chương
            </Link>

            <span className="mt-6 block text-xs text-zinc-400">
              Chương {chapter.order}
            </span>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
              {chapter.title}
            </h1>

            <div className="mt-6 rounded-2xl border-l-4 border-zinc-900 bg-white p-6 dark:border-white dark:bg-zinc-900">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                Bản chất chương
              </p>
              <p className="mt-3 text-lg leading-8 text-zinc-800 dark:text-zinc-200">
                {chapter.bigIdea}
              </p>
            </div>

            {chapter.knowledgeMap && (
              <KnowledgeMap diagram={chapter.knowledgeMap} />
            )}

            {chapter.learningObjectives.length > 0 && (
              <section className="mt-8">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                  Mục tiêu học
                </h2>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  {chapter.learningObjectives.map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>
              </section>
            )}

            <section className="mt-12 space-y-16">
              {chapter.sections.map((s) => (
                <section key={s.id} className="space-y-4">
                  <h2
                    id={s.id}
                    className="scroll-mt-24 text-2xl font-semibold tracking-tight"
                  >
                    <a
                      href={`#${s.id}`}
                      className="hover:text-zinc-600 dark:hover:text-zinc-300"
                    >
                      {s.heading}
                    </a>
                  </h2>

                  <SectionBody section={s} />

                  {s.keyTerms && s.keyTerms.length > 0 && (
                    <dl className="max-w-2xl space-y-3 border-l border-zinc-200 pl-4 text-sm dark:border-zinc-800">
                      {s.keyTerms.map((t) => (
                        <div key={t.term}>
                          <dt className="font-semibold text-zinc-900 dark:text-zinc-100">
                            {t.term}
                          </dt>
                          <dd className="text-zinc-600 dark:text-zinc-400">
                            {t.definition}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  {s.examples && s.examples.length > 0 && (
                    <div className="space-y-3">
                      {s.examples.map((ex) => (
                        <div
                          key={ex.title}
                          className="max-w-2xl rounded-xl border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-zinc-950"
                        >
                          <p className="font-semibold">{ex.title}</p>
                          <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                            {ex.body}
                          </p>
                          {(ex.meaning || ex.implication) && (
                            <div className="mt-3 space-y-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                              {ex.meaning && (
                                <p>
                                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                                    Ý nghĩa:
                                  </span>{" "}
                                  {ex.meaning}
                                </p>
                              )}
                              {ex.implication && (
                                <p>
                                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                                    Dẫn tới:
                                  </span>{" "}
                                  {ex.implication}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </section>

            <section className="mt-12">
              <h2 className="mb-4 text-xl font-semibold">
                Câu hỏi củng cố
              </h2>
              <QuizPlayer questions={chapter.questions} />
            </section>

            {chapter.source && (
              <p className="mt-10 border-t border-zinc-200 pt-4 text-xs text-zinc-400 dark:border-zinc-800">
                Nguồn: {chapter.source}
              </p>
            )}
          </article>
        </div>
      </div>
    </main>
  );
}
