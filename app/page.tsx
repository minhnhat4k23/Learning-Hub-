import Link from "next/link";
import { getAllChapters } from "@/content/chapters";

export default function Home() {
  const chapters = getAllChapters();
  const ready = chapters.filter((c) => c.status !== "placeholder");

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-20 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-14">
        <section className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Managerial Accounting
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Hiểu bản chất từng chương, không học vẹt.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            Mỗi chương bắt đầu từ &quot;bản chất&quot;, đi qua lý thuyết cốt lõi,
            và kết bằng bộ câu hỏi bẫy — chọn sai vẫn được giải thích sâu vì sao
            sai. Học để tư duy, không chỉ để nhớ.
          </p>
          <div className="flex gap-3">
            <Link
              href="/chapters"
              className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus-visible:ring-offset-zinc-950"
            >
              Bắt đầu học
            </Link>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-zinc-500">
            Các chương ({ready.length} sẵn sàng / {chapters.length})
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {chapters.map((c) => {
              const placeholder = c.status === "placeholder";
              const card = (
                <article
                  className={`flex h-full flex-col rounded-3xl border p-6 ${
                    placeholder
                      ? "border-dashed border-zinc-300 opacity-60 dark:border-zinc-700"
                      : "border-zinc-200 bg-white hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900"
                  }`}
                >
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">Chương {c.order}</span>
                  <h3 className="mt-1 text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-zinc-600 dark:text-zinc-300">
                    {c.bigIdea}
                  </p>
                  {placeholder && (
                    <span className="mt-auto pt-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      Chờ nội dung
                    </span>
                  )}
                </article>
              );
              return placeholder ? (
                <div key={c.slug}>{card}</div>
              ) : (
                <Link
                  key={c.slug}
                  href={`/chapters/${c.slug}`}
                  className="rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
                >
                  {card}
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
