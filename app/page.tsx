import Link from "next/link";
import { getAllSubjects } from "@/content/subjects";

export default function Home() {
  const subjects = getAllSubjects();

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-20 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-14">
        <section className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Learning Hub
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Chọn môn học, rồi đi theo từng topic.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            Mỗi môn có lộ trình chương riêng, không trộn nội dung. Thêm môn mới
            chỉ cần thêm module dữ liệu và đăng ký vào subject registry.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-zinc-500">
            Môn học ({subjects.length})
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {subjects.map((subject) => {
              const ready = subject.chapters.filter((c) => c.status !== "placeholder").length;

              return (
                <Link
                  key={subject.id}
                  href={`/${subject.id}`}
                  className="rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
                >
                <article
                    className="flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-6 hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900"
                >
                    <span className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                      {ready}/{subject.chapters.length} ready
                    </span>
                    <h3 className="mt-2 text-xl font-semibold">{subject.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-zinc-600 dark:text-zinc-300">
                      {subject.subtitle}
                  </p>
                    <span className="mt-auto pt-5 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      Open subject
                    </span>
                </article>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
