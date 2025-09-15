"use client";

import Image from "next/image";
import Link from "next/link";
import { getFeaturedArticles } from "@/data/api";
import { useLocale } from "@/context/LocaleContext";
import { STRINGS } from "@/i18n/strings";

export default function FeaturedCarousel() {
  const { locale } = useLocale();
  const t = STRINGS[locale];
  const featured = getFeaturedArticles(4);
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {featured.map((a) => (
        <Link
          key={a.id}
          href={`/article/${a.slug}`}
          className="relative rounded overflow-hidden group"
        >
          {a.featuredMedia?.type === "image" && a.featuredMedia.url && (
            <div className="aspect-[16/9]">
              <Image
                src={a.featuredMedia.url}
                alt={a.featuredMedia.alt ?? a.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <h2 className="absolute bottom-3 left-4 right-4 text-white text-lg md:text-xl font-semibold drop-shadow">
            {a.title}
          </h2>
          {a.isFactChecked && (
            <div
              className="absolute top-2 left-2 text-emerald-300 text-xs bg-black/50 px-2 py-1 rounded"
              title={t.verifiedTooltip}
            >
              {t.verifiedLabel}
            </div>
          )}
        </Link>
      ))}
    </section>
  );
}


