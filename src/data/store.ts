import { promises as fs } from "fs";
import path from "path";
import type { Article, CategorySlug, Author, MediaAsset } from "@/types/content";

const STORE_FILE = path.join(process.cwd(), "src", "data", "articles.store.json");

type StoredArticle = Article;

async function ensureStore(): Promise<void> {
  try {
    await fs.access(STORE_FILE);
  } catch {
    await fs.mkdir(path.dirname(STORE_FILE), { recursive: true });
    await fs.writeFile(STORE_FILE, JSON.stringify({ articles: [] }, null, 2), "utf-8");
  }
}

export async function readStore(): Promise<{ articles: StoredArticle[] }> {
  await ensureStore();
  const raw = await fs.readFile(STORE_FILE, "utf-8");
  try {
    return JSON.parse(raw);
  } catch {
    return { articles: [] };
  }
}

export async function writeStore(store: { articles: StoredArticle[] }): Promise<void> {
  await fs.writeFile(STORE_FILE, JSON.stringify(store, null, 2), "utf-8");
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function listStoredArticles(): Promise<Article[]> {
  const { articles } = await readStore();
  return articles ?? [];
}

export async function addArticle(input: {
  title: string;
  summary: string;
  content: string;
  category: CategorySlug;
  imageUrl?: string;
  imageAlt?: string;
  isFeatured?: boolean;
  isTrending?: boolean;
  isFactChecked?: boolean;
}): Promise<Article> {
  const { articles } = await readStore();
  const now = new Date().toISOString();
  const id = String(Date.now());
  const slugBase = slugify(input.title);

  // Ensure unique slug
  let slug = slugBase;
  let counter = 2;
  const existingSlugs = new Set(articles.map((a) => a.slug));
  while (existingSlugs.has(slug)) {
    slug = `${slugBase}-${counter++}`;
  }

  const author: Author = { id: "admin", name: "Admin" };
  let featuredMedia: MediaAsset | undefined;
  if (input.imageUrl) {
    featuredMedia = { type: "image", url: input.imageUrl, alt: input.imageAlt ?? input.title, width: 1200, height: 630 };
  }

  const article: Article = {
    id,
    slug,
    title: input.title,
    summary: input.summary,
    content: input.content,
    category: input.category,
    featuredMedia,
    author,
    publishedAt: now,
    isFeatured: !!input.isFeatured,
    isTrending: !!input.isTrending,
    isFactChecked: !!input.isFactChecked,
  };

  articles.unshift(article);
  await writeStore({ articles });
  return article;
}

export async function deleteArticle(id: string): Promise<boolean> {
  const { articles } = await readStore();
  const next = articles.filter((a) => a.id !== id);
  const changed = next.length !== articles.length;
  if (changed) await writeStore({ articles: next });
  return changed;
}


