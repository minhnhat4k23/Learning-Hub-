import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllChapters, getChapterBySlug } from "@/content/chapters";
import QuizPlayer from "@/app/components/QuizPlayer";

export function generateStaticParams() {
  return getAllChapters().map((c) => ({ slug: c.slug }));
}

export default async function ChapterDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  if (!chapter || chapter.status === "placeholder") notFound();

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="mx-auto max-w-3xl">
        <Link href="/chapters" className="text-sm text-zinc-500 hover:underline">
          ← Các chương
        </Link>

        <span className="mt-6 block text-xs text-zinc-400">
          Chương {chapter.order}
        </span>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">
          {chapter.title}
        </h1>

        {/* Bản chất chương — điểm chốt */}
        <div className="mt-6 rounded-2xl border-l-4 border-zinc-900 bg-white p-5 dark:border-white dark:bg-zinc-900">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
            Bản chất chương
          </p>
          <p className="mt-2 leading-7">{chapter.bigIdea}</p>
        </div>

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

        {/* Lý thuyết */}
        <section className="mt-10 space-y-8">
          {chapter.sections.map((s) => (
            <div key={s.id}>
              <h2 className="text-xl font-semibold">{s.heading}</h2>
              {s.body.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="mt-3 leading-7 text-zinc-700 dark:text-zinc-300"
                >
                  {para}
                </p>
              ))}
              {s.keyTerms && s.keyTerms.length > 0 && (
                <dl className="mt-4 space-y-2 rounded-xl bg-zinc-100 p-4 text-sm dark:bg-zinc-900">
                  {s.keyTerms.map((t) => (
                    <div key={t.term}>
                      <dt className="font-semibold">{t.term}</dt>
                      <dd className="text-zinc-600 dark:text-zinc-400">
                        {t.definition}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
              {s.examples && s.examples.length > 0 && (
                <div className="mt-4 space-y-3">
                  {s.examples.map((ex) => (
                    <div
                      key={ex.title}
                      className="rounded-xl border border-zinc-200 p-4 text-sm dark:border-zinc-800"
                    >
                      <p className="font-semibold">{ex.title}</p>
                      <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                        {ex.body}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Quiz */}
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-semibold">Câu hỏi củng cố</h2>
          <QuizPlayer questions={chapter.questions} />
        </section>

        {chapter.source && (
          <p className="mt-10 border-t border-zinc-200 pt-4 text-xs text-zinc-400 dark:border-zinc-800">
            Nguồn: {chapter.source}
          </p>
        )}
      </div>
    </main>
  );
}
