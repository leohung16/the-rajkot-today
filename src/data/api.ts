import { ARTICLES } from "@/data/articles";
import { CATEGORIES } from "@/data/categories";
import { Article, Category, CategorySlug, MediaAsset, PaginatedResult } from "@/types/content";

export function getAllCategories(): Category[] {
  return CATEGORIES;
}

export function getCategoryBySlug(slug: CategorySlug): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getAllArticles(): Article[] {
  return [...ARTICLES].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

// server-side variant moved to api.server.ts to avoid fs in client bundles

export function getLatestArticles(limit = 6): Article[] {
  return getAllArticles().slice(0, limit);
}

export function getTrendingArticles(limit = 5): Article[] {
  return getAllArticles().filter((a) => a.isTrending).slice(0, limit);
}

export function getFeaturedArticles(limit = 4): Article[] {
  return getAllArticles().filter((a) => a.isFeatured).slice(0, limit);
}

export function getArticlesByCategory(
  category: CategorySlug,
  page = 1,
  pageSize = 10
): PaginatedResult<Article> {
  const all = getAllArticles().filter((a) => a.category === category);
  const start = (page - 1) * pageSize;
  const items = all.slice(start, start + pageSize);
  return { items, total: all.length, page, pageSize };
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}

export function searchArticles(params: {
  query?: string;
  category?: CategorySlug;
  from?: string; // ISO
  to?: string; // ISO
}): Article[] {
  const { query, category, from, to } = params;
  const fromTime = from ? new Date(from).getTime() : undefined;
  const toTime = to ? new Date(to).getTime() : undefined;

  return getAllArticles().filter((a) => {
    if (category && a.category !== category) return false;
    if (fromTime && new Date(a.publishedAt).getTime() < fromTime) return false;
    if (toTime && new Date(a.publishedAt).getTime() > toTime) return false;
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.content.toLowerCase().includes(q) ||
      (a.tags ?? []).some((t) => t.toLowerCase().includes(q))
    );
  });
}

export function getAllGalleryImages(): { article: Article; media: MediaAsset }[] {
  const results: { article: Article; media: MediaAsset }[] = [];
  for (const article of getAllArticles()) {
    for (const media of article.gallery ?? []) {
      if (media.type === "image") {
        results.push({ article, media });
      }
    }
  }
  return results;
}

export function getAllVideos(): { article: Article; media: MediaAsset }[] {
  const results: { article: Article; media: MediaAsset }[] = [];
  for (const article of getAllArticles()) {
    if (article.featuredMedia && article.featuredMedia.type === "video") {
      results.push({ article, media: article.featuredMedia });
    }
    for (const media of article.gallery ?? []) {
      if (media.type === "video") {
        results.push({ article, media });
      }
    }
  }
  return results;
}


