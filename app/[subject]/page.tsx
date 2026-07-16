import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSubjects, getSubject, getSubjectChapters } from "@/content/subjects";
import FlowDiagram from "@/app/components/teaching/FlowDiagram";
import KnowledgeMapGrouped from "@/app/components/teaching/KnowledgeMapGrouped";

export function generateStaticParams() {
  return getAllSubjects().map((subject) => ({ subject: subject.id }));
}

const statusLabel: Record<string, string> = {
  ready: "Hoàn thiện",
  draft: "Đang soạn",
  placeholder: "Chờ nội dung",
};

export default async function SubjectChapterList({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: subjectId } = await params;
  const subject = getSubject(subjectId);
  if (!subject) notFound();

  const chapters = getSubjectChapters(subjectId);
  const ready = chapters.filter((chapter) => chapter.status !== "placeholder").length;
  const courseMap = subject.courseMap;
  const courseThreads = subject.courseThreads;

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-zinc-500 hover:underline">
          ← Chọn môn
        </Link>
        <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          {ready}/{chapters.length} ready
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{subject.title}</h1>
        {subject.subtitle && (
          <p className="mt-2 text-sm leading-6 text-zinc-500">{subject.subtitle}</p>
        )}
      </div>

      {courseMap && (
        <section className="mx-auto mt-10 max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Bản đồ môn học
          </p>
          <div className="mt-4">
            <KnowledgeMapGrouped diagram={courseMap} />
          </div>
        </section>
      )}

      {courseThreads && courseThreads.length > 0 && (
        <section className="mx-auto mt-10 max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Chuỗi khái niệm
          </p>
          <div className="mt-4 space-y-5">
            {courseThreads.map((thread) => (
              <article key={thread.title} className="space-y-2">
                <div>
                  <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {thread.title}
                  </h2>
                  {thread.description && (
                    <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                      {thread.description}
                    </p>
                  )}
                </div>
                <FlowDiagram diagram={thread.diagram} />
              </article>
            ))}
          </div>
        </section>
      )}

      <div className="mx-auto max-w-3xl">
        <ul className="mt-8 space-y-3">
          {chapters.map((chapter) => {
            const placeholder = chapter.status === "placeholder";
            const inner = (
              <div
                className={`flex items-center justify-between gap-4 rounded-2xl border px-5 py-4 ${
                  placeholder
                    ? "border-dashed border-zinc-300 opacity-60 dark:border-zinc-700"
                    : "border-zinc-200 bg-white hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900"
                }`}
              >
                <div className="min-w-0">
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {subject.id === "managerial-accounting" ? "Chương" : "Topic"} {chapter.order}
                  </span>
                  <h2 className="text-base font-semibold">{chapter.title}</h2>
                </div>
                <span className="shrink-0 rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                  {statusLabel[chapter.status]}
                </span>
              </div>
            );

            return placeholder ? (
              <li key={chapter.slug}>{inner}</li>
            ) : (
              <li key={chapter.slug}>
                <Link
                  href={`/${subject.id}/${chapter.slug}`}
                  className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
                >
                  {inner}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
