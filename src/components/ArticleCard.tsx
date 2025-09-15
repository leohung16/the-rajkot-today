"use client";

import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types/content";
import { getCategoryName } from "@/data/categories";
import { useLocale } from "@/context/LocaleContext";
import { STRINGS } from "@/i18n/strings";

interface Props {
  article: Article;
}

export default function ArticleCard({ article }: Props) {
  const { locale } = useLocale();
  const t = STRINGS[locale];
  const categoryName = getCategoryName(article.category);
  const date = new Date(article.publishedAt).toLocaleDateString();

  return (
    <article className="group grid grid-cols-1 sm:grid-cols-4 gap-4">
      {article.featuredMedia?.type === "image" && article.featuredMedia.url ? (
        <Link href={`/article/${article.slug}`} className="col-span-1 sm:col-span-1 block aspect-[16/9] relative overflow-hidden rounded">
          <Image
            src={article.featuredMedia.url}
            alt={article.featuredMedia.alt ?? article.title}
            fill
            sizes="(max-width: 640px) 100vw, 240px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={false}
          />
        </Link>
      ) : (
        <div className="col-span-1 sm:col-span-1 hidden sm:block" />
      )}
      <div className="col-span-1 sm:col-span-3">
        <div className="flex flex-wrap items-center gap-2 text-xs text-black/60 dark:text-white/60 mb-2">
          <Link href={`/category/${article.category}`} className="uppercase tracking-wide hover:underline">
            {categoryName}
          </Link>
          <span>•</span>
          <time dateTime={article.publishedAt}>{date}</time>
          {article.isFactChecked && (
            <span
              className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400"
              title={t.verifiedTooltip}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53-1.546-1.546a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.732-5.328Z" clipRule="evenodd"/></svg>
              {t.verifiedLabel}
            </span>
          )}
        </div>
        <h3 className="text-lg sm:text-xl font-bold leading-tight mb-2">
          <Link href={`/article/${article.slug}`} className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
            {article.title}
          </Link>
        </h3>
        <p className="text-sm sm:text-base text-black/70 dark:text-white/70 leading-relaxed line-clamp-2 font-medium">{article.summary}</p>
      </div>
    </article>
  );
}


