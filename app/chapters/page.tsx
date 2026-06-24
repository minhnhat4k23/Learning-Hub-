import Link from "next/link";
import { getAllChapters } from "@/content/chapters";

export const metadata = { title: "Các chương — Managerial Accounting" };

const statusLabel: Record<string, string> = {
  ready: "Hoàn thiện",
  draft: "Đang soạn",
  placeholder: "Chờ nội dung",
};

export default function ChapterList() {
  const chapters = getAllChapters();

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">Các chương</h1>
        <p className="mt-2 text-sm text-zinc-500">
          Lộ trình đi từ đo lường chi phí → ra quyết định → kiểm soát hiệu quả.
        </p>

        <ul className="mt-8 space-y-3">
          {chapters.map((c) => {
            const placeholder = c.status === "placeholder";
            const inner = (
              <div
                className={`flex items-center justify-between rounded-2xl border px-5 py-4 ${
                  placeholder
                    ? "border-dashed border-zinc-300 opacity-60 dark:border-zinc-700"
                    : "border-zinc-200 bg-white hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900"
                }`}
              >
                <div>
                  <span className="text-xs text-zinc-400">Chương {c.order}</span>
                  <h2 className="text-base font-semibold">{c.title}</h2>
                </div>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                  {statusLabel[c.status]}
                </span>
              </div>
            );
            return placeholder ? (
              <li key={c.slug}>{inner}</li>
            ) : (
              <li key={c.slug}>
                <Link href={`/chapters/${c.slug}`}>{inner}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
