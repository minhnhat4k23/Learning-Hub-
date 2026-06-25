import {
  Brain,
  Globe2,
  KeyRound,
  Lightbulb,
  NotebookPen,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";
import type { Callout as CalloutData, CalloutKind } from "@/content/types";

const tokens: Record<
  CalloutKind,
  {
    label: string;
    Icon: LucideIcon;
    classes: string;
    iconClasses: string;
    titleClasses: string;
  }
> = {
  insight: {
    label: "Insight",
    Icon: Lightbulb,
    classes:
      "border-indigo-400 bg-white text-zinc-800 dark:bg-zinc-950 dark:text-zinc-200",
    iconClasses: "bg-zinc-100 text-indigo-700 dark:bg-zinc-900 dark:text-indigo-300",
    titleClasses: "text-indigo-700 dark:text-indigo-300",
  },
  trap: {
    label: "Bẫy",
    Icon: TriangleAlert,
    classes:
      "border-rose-400 bg-rose-50/70 text-zinc-800 dark:bg-rose-950/20 dark:text-zinc-200",
    iconClasses: "bg-white text-rose-700 dark:bg-zinc-950 dark:text-rose-300",
    titleClasses: "text-rose-700 dark:text-rose-300",
  },
  key: {
    label: "Chốt nhớ",
    Icon: KeyRound,
    classes:
      "border-amber-400 bg-amber-50/70 text-zinc-800 dark:bg-amber-950/20 dark:text-zinc-200",
    iconClasses: "bg-white text-amber-700 dark:bg-zinc-950 dark:text-amber-300",
    titleClasses: "text-amber-700 dark:text-amber-300",
  },
  brainstorm: {
    label: "Tư duy",
    Icon: Brain,
    classes:
      "border-violet-400 bg-white text-zinc-800 dark:bg-zinc-950 dark:text-zinc-200",
    iconClasses: "bg-zinc-100 text-violet-700 dark:bg-zinc-900 dark:text-violet-300",
    titleClasses: "text-violet-700 dark:text-violet-300",
  },
  realworld: {
    label: "Thực tế",
    Icon: Globe2,
    classes:
      "border-emerald-400 bg-white text-zinc-800 dark:bg-zinc-950 dark:text-zinc-200",
    iconClasses:
      "bg-zinc-100 text-emerald-700 dark:bg-zinc-900 dark:text-emerald-300",
    titleClasses: "text-emerald-700 dark:text-emerald-300",
  },
  note: {
    label: "Ghi chú",
    Icon: NotebookPen,
    classes:
      "border-zinc-300 bg-white text-zinc-800 dark:bg-zinc-950 dark:text-zinc-200",
    iconClasses: "bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300",
    titleClasses: "text-zinc-700 dark:text-zinc-300",
  },
};

export default function Callout({ callout }: { callout: CalloutData }) {
  const token = tokens[callout.kind];
  const Icon = token.Icon;

  return (
    <aside
      data-callout-kind={callout.kind}
      className={`max-w-2xl rounded-xl border border-l-[3px] p-4 ${token.classes}`}
    >
      <div className="flex gap-3">
        <span
          aria-hidden="true"
          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${token.iconClasses}`}
        >
          <Icon className="h-4 w-4" />
        </span>
        <div>
          <p className={`text-sm font-semibold ${token.titleClasses}`}>
            {callout.title ?? token.label}
          </p>
          <p className="mt-1 whitespace-pre-line text-sm leading-6">
            {callout.body}
          </p>
        </div>
      </div>
    </aside>
  );
}
