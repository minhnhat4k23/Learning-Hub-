import Link from "next/link";

export default function SiteNav() {
  return (
    <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Managerial Accounting
          <span className="ml-2 text-xs font-normal text-zinc-500">học theo bản chất</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white">
            Trang chủ
          </Link>
          <Link href="/chapters" className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white">
            Các chương
          </Link>
        </div>
      </nav>
    </header>
  );
}
