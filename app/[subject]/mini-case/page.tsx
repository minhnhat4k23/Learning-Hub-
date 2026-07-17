import Link from "next/link";
import { notFound } from "next/navigation";
import MiniCaseStudy from "@/app/components/MiniCaseStudy";
import { getAllSubjects, getSubject } from "@/content/subjects";

export function generateStaticParams() {
  return getAllSubjects().map((subject) => ({ subject: subject.id }));
}

export default async function MiniCasePage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: subjectId } = await params;
  const subject = getSubject(subjectId);
  if (!subject || !subject.miniCases?.length) notFound();

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
          Mini-case tổng hợp
        </h1>
        <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          Mỗi case buộc dùng nhiều khái niệm từ nhiều topic cùng lúc — luyện đúng
          dạng đề tự luận/tình huống.
        </p>

        <div className="mt-8">
          <MiniCaseStudy subjectId={subject.id} cases={subject.miniCases} />
        </div>
      </div>
    </main>
  );
}
