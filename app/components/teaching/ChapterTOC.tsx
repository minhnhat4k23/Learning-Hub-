import type { Section } from "@/content/types";

export default function ChapterTOC({ sections }: { sections: Section[] }) {
  return (
    <aside className="hidden lg:block">
      <nav
        aria-label="Mục lục chương"
        className="sticky top-8 rounded-2xl border border-zinc-200 bg-white p-4 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
          Mục lục
        </p>
        <ol className="mt-3 space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="block rounded-lg px-3 py-2 leading-5 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
              >
                {section.heading}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}
