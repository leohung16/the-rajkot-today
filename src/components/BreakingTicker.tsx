"use client";

import Link from "next/link";
import { getLatestArticles } from "@/data/api";
import { useLocale } from "@/context/LocaleContext";
import { STRINGS } from "@/i18n/strings";

export default function BreakingTicker() {
  const { locale } = useLocale();
  const t = STRINGS[locale];
  const items = getLatestArticles(10);
  const loop = [...items, ...items];
  return (
    <div className="my-4 border-y border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 py-3">
      <div className="flex items-center gap-3 mb-2 px-4 sm:px-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
          <span className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400">LIVE</span>
        </div>
        <div className="text-xs uppercase tracking-wide text-black/60 dark:text-white/60 font-semibold">{t.breaking}</div>
      </div>
      <div className="marquee">
        <div className="marquee__track">
          {loop.map((a, idx) => (
            <Link key={`${a.id}-${idx}`} href={`/article/${a.slug}`} className="hover:underline text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors">
              {a.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


