import { notFound } from "next/navigation";
import Image from "next/image";
import { getArticleBySlug, getCategoryBySlug } from "@/data/api";
import ShareButtons from "@/components/ShareButtons";
import AdSlot from "@/components/AdSlot";
import type { Metadata } from "next";
import { STRINGS } from "@/i18n/strings";
import Script from "next/script";
import { siteConfig } from "@/config/site";

interface Params {
  params: Promise<{ slug: string }>;
}

export default async function ArticleDetailPage({ params }: Params) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);
  if (!article) return notFound();

  const date = new Date(article.publishedAt).toLocaleString();

  return (
    <article className="py-8">
      <h1 className="text-3xl font-bold leading-tight mb-2 flex items-center gap-2">
        {article.title}
        {article.isFactChecked && (
          <span
            className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 text-sm"
            title={STRINGS.gu.verifiedTooltip}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53-1.546-1.546a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.732-5.328Z" clipRule="evenodd"/></svg>
            {STRINGS.gu.verifiedLabel}
          </span>
        )}
      </h1>
      <div className="text-sm text-black/60 dark:text-white/60 mb-6">
        <span>By {article.author.name}</span>
        <span className="mx-2">•</span>
        <time dateTime={article.publishedAt}>{date}</time>
      </div>

      {article.featuredMedia?.type === "image" && article.featuredMedia.url && (
        <div className="relative aspect-[16/9] mb-6 rounded overflow-hidden">
          <Image
            src={article.featuredMedia.url}
            alt={article.featuredMedia.alt ?? article.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="prose max-w-none dark:prose-invert">
        <p>{article.content}</p>
        <div className="my-6">
          <AdSlot id="article_inline_1" width={336} height={280} />
        </div>
      </div>

      {article.gallery && article.gallery.length > 0 && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {article.gallery.map((m, i) => (
            <div key={i} className="relative aspect-[16/9] rounded overflow-hidden">
              {m.type === "image" && (
                <Image src={m.url} alt={m.alt ?? article.title} fill className="object-cover" />
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 flex items-center justify-between">
        <ShareButtons title={article.title} />
      </div>

      <div id="comments" className="mt-10">
        <div className="mb-6">
          <AdSlot id="article_bottom" width={728} height={90} />
        </div>
        {/* Disqus embed (replace shortname and config for production) */}
        <div className="text-sm text-black/60 dark:text-white/60">
          Comments powered by Disqus (placeholder)
        </div>
      </div>

      {/* JSON-LD: Breadcrumb and NewsArticle */}
      {(() => {
        const base = siteConfig.siteUrl.replace(/\/$/, "");
        const category = getCategoryBySlug(article.category);
        const articleUrl = `${base}/article/${article.slug}`;
        const breadcrumb = {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: base },
            category ? { '@type': 'ListItem', position: 2, name: category.name, item: `${base}/category/${category.slug}` } : undefined,
            { '@type': 'ListItem', position: 3, name: article.title, item: articleUrl }
          ].filter(Boolean),
        } as any;
        const news = {
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: article.title,
          description: article.summary,
          image: article.featuredMedia?.type === 'image' && article.featuredMedia.url ? [article.featuredMedia.url] : undefined,
          datePublished: article.publishedAt,
          dateModified: article.updatedAt ?? article.publishedAt,
          author: { '@type': 'Person', name: article.author.name },
          publisher: { '@type': 'Organization', name: siteConfig.brandName },
          mainEntityOfPage: articleUrl,
        } as any;
        return (
          <>
            <Script id="breadcrumb-jsonld" type="application/ld+json" strategy="afterInteractive">{JSON.stringify(breadcrumb)}</Script>
            <Script id="newsarticle-jsonld" type="application/ld+json" strategy="afterInteractive">{JSON.stringify(news)}</Script>
          </>
        );
      })()}
    </article>
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);
  if (!article) return {};
  const title = article.title;
  const description = article.summary;
  const ogImage =
    article.featuredMedia?.type === "image" && article.featuredMedia.url
      ? article.featuredMedia.url
      : "/og-default.svg";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
      type: "article",
      authors: [article.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}


