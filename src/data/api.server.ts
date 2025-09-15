import 'server-only';
import { ARTICLES } from "@/data/articles";
import { listStoredArticles } from "@/data/store";
import type { Article } from "@/types/content";

export async function getAllArticlesAsync(): Promise<Article[]> {
  const dynamic = await listStoredArticles();
  const merged = [...dynamic, ...ARTICLES];
  return merged.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}


