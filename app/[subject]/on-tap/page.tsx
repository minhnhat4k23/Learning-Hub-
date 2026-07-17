import Link from "next/link";
import { notFound } from "next/navigation";
import CumulativeQuiz from "@/app/components/CumulativeQuiz";
import { getAllSubjects, getSubject, getSubjectChapters } from "@/content/subjects";

export function generateStaticParams() {
  return getAllSubjects().map((subject) => ({ subject: subject.id }));
}

export default async function CumulativeQuizPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: subjectId } = await params;
  const subject = getSubject(subjectId);
  if (!subject) notFound();

  const topics = getSubjectChapters(subjectId)
    .filter(
      (chapter) =>
        chapter.status !== "placeholder" && chapter.questions.length > 0,
    )
    .map((chapter) => ({
      slug: chapter.slug,
      order: chapter.order,
      title: chapter.title,
      questions: chapter.questions,
    }));

  if (topics.length < 2) notFound();

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="mx-auto max-w-3xl">
        <Link
          href={`/${subject.id}`}
          className="text-sm text-zinc-500 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
        >
          ← {subject.title}
        </Link>

        <h1 className="mt-8 text-3xl font-semibold tracking-tight">
          Ôn tập tổng hợp
        </h1>
        <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          Trộn câu hỏi từ {topics.length} topic theo kiểu interleaved — luyện nhận
          diện khái niệm khi không biết nó thuộc topic nào.
        </p>

        <div className="mt-8">
          <CumulativeQuiz subjectId={subject.id} topics={topics} />
        </div>
      </div>
    </main>
  );
}
