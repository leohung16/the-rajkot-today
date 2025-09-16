"use client";

import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import { useLocale } from "@/context/LocaleContext";
import { STRINGS } from "@/i18n/strings";

export default function Navbar() {
  const { locale } = useLocale();
  const t = STRINGS[locale];
  return (
    <header className="border-b border-black/10 dark:border-white/10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center group" aria-label="The Rajkot Today">
              <div className="flex flex-col">
                <div className="flex items-center whitespace-nowrap leading-none">
                  <span className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">The Rajkot</span>
                  <span className="ml-1.5 sm:ml-3 text-[10px] sm:text-xs font-bold uppercase text-white bg-red-600 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-sm">Today</span>
                </div>
                <div className="text-[8px] sm:text-[10px] text-gray-600 dark:text-gray-400 font-medium tracking-wide uppercase mt-0.5 sm:mt-1.5 whitespace-nowrap">
                  Your Trusted News Source
                </div>
              </div>
            </Link>
          </div>
          <nav className="hidden lg:flex flex-wrap items-center gap-2 text-base font-semibold max-w-5xl">
            {CATEGORIES.map((c) => (
              <Link 
                key={c.slug} 
                href={`/category/${c.slug}`} 
                className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all duration-200 whitespace-nowrap relative group"
              >
                <span className="relative z-10">{STRINGS[locale][`cat.${c.slug}`] ?? c.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/search" className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {t.search}
            </Link>
            <Link href="/about" className="text-sm hover:underline hidden sm:inline">
              {t.about}
            </Link>
            <Link href="/contact" className="text-sm hover:underline hidden sm:inline">
              {t.contact}
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:hidden border-t border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-3 py-2">
          <div className="flex flex-wrap gap-x-1.5 gap-y-1.5 text-[13px]">
            {CATEGORIES.map((c) => (
              <Link 
                key={c.slug} 
                href={`/category/${c.slug}`} 
                className="px-2.5 py-1.5 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                {STRINGS[locale][`cat.${c.slug}`] ?? c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}


