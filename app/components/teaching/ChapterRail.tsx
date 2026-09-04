"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { PanelLeftClose, PanelLeftOpen, X } from "lucide-react";

type NavChapter = { order: number; slug: string; title: string };
type NavSection = { id: string; heading: string };

const CHAPTER_RAIL_STORAGE_KEY = "chapterRailOpen";
const CHAPTER_RAIL_CHANGE_EVENT = "chapterRailOpenChange";

function subscribeToChapterRail(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(CHAPTER_RAIL_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(CHAPTER_RAIL_CHANGE_EVENT, onStoreChange);
  };
}

function getChapterRailSnapshot() {
  return localStorage.getItem(CHAPTER_RAIL_STORAGE_KEY) !== "0";
}

function getServerChapterRailSnapshot() {
  return true;
}

export default function ChapterRail({
  chapters,
  currentSlug,
  sections,
  subjectId,
}: {
  chapters: NavChapter[];
  currentSlug: string;
  sections: NavSection[];
  subjectId: string;
}) {
  const open = useSyncExternalStore(
    subscribeToChapterRail,
    getChapterRailSnapshot,
    getServerChapterRailSnapshot,
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  const setOpen = (nextOpen: boolean) => {
    localStorage.setItem(CHAPTER_RAIL_STORAGE_KEY, nextOpen ? "1" : "0");
    window.dispatchEvent(new Event(CHAPTER_RAIL_CHANGE_EVENT));
  };

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const panel = (
    <nav aria-label="Điều hướng chương" className="space-y-6 text-sm">
      <div>
        <p className="px-3 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Các chương
        </p>
        <ol className="mt-2 space-y-1">
          {chapters.map((c) => {
            const active = c.slug === currentSlug;
            return (
              <li key={c.slug}>
                <Link
                  href={`/${subjectId}/${c.slug}`}
                  onClick={() => setMobileOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-[44px] items-center gap-2 rounded-lg px-3 py-2 leading-5 ${
                    active
                      ? "bg-zinc-900 font-medium text-white dark:bg-white dark:text-zinc-900"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
                  }`}
                >
                  <span
                    className={`shrink-0 text-xs ${
                      active
                        ? "text-white/70 dark:text-zinc-900/70"
                        : "text-zinc-500 dark:text-zinc-400"
                    }`}
                  >
                    {c.order}
                  </span>
                  <span className="min-w-0 truncate">{c.title}</span>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>

      <div>
        <p className="px-3 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Mục lục
        </p>
        <ol className="mt-2 space-y-1">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2 leading-5 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
              >
                {s.heading}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );

  return (
    <>
      {/* Mobile: nút mở drawer */}
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="mb-6 inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm hover:border-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 lg:hidden"
      >
        <PanelLeftOpen className="h-5 w-5" aria-hidden />
        Chương & mục lục
      </button>

      {/* Mobile: overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-200 motion-reduce:transition-none lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile: drawer trượt từ trái */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Điều hướng chương"
        className={`fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] overflow-y-auto bg-white p-4 shadow-xl transition-transform duration-200 motion-reduce:transition-none dark:bg-zinc-950 lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-2 flex justify-end">
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Đóng"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:hover:bg-zinc-900"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        {panel}
      </div>

      {/* Desktop: cột trong luồng (chỉ khi mở) */}
      <div
        className={`hidden shrink-0 lg:mr-10 lg:w-64 ${open ? "lg:block" : "lg:hidden"}`}
      >
        <div className="sticky top-8 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mb-2 flex justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Thu gọn thanh điều hướng"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:hover:bg-zinc-900"
            >
              <PanelLeftClose className="h-5 w-5" aria-hidden />
            </button>
          </div>
          {panel}
        </div>
      </div>

      {/* Desktop: nút hiện lại khi đã thu gọn */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Hiện thanh điều hướng"
          className="fixed left-3 top-24 z-30 hidden h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 shadow-sm hover:border-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 lg:flex"
        >
          <PanelLeftOpen className="h-5 w-5" aria-hidden />
        </button>
      )}
    </>
  );
}
