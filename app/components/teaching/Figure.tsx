import type { Figure as FigureData } from "@/content/types";

export default function FigureBlock({ figure }: { figure: FigureData }) {
  return (
    <figure className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
      {figure.src && !figure.placeholder ? (
        // Figure sources are content-defined and may not have stable dimensions or hosts.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={figure.src}
          alt={figure.alt ?? figure.caption}
          className="w-full rounded-xl object-cover"
        />
      ) : (
        <div className="flex min-h-40 items-center justify-center rounded-xl border-2 border-dashed border-zinc-300 bg-zinc-50 px-6 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400">
          [Hình minh họa - chờ ảnh thật]
        </div>
      )}
      <figcaption className="mt-3 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
        {figure.caption}
      </figcaption>
    </figure>
  );
}
