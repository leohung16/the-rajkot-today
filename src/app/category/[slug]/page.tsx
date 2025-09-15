import { notFound } from "next/navigation";
import ArticleCard from "@/components/ArticleCard";
import { getArticlesByCategory, getCategoryBySlug } from "@/data/api";
import type { CategorySlug } from "@/types/content";
import type { Metadata } from "next";

interface Params {
  params: Promise<{ slug: CategorySlug }>;
  searchParams: Promise<{ page?: string }>;
}

export default async function CategoryPage({ params, searchParams }: Params) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const category = getCategoryBySlug(resolvedParams.slug);
  if (!category) return notFound();

  const page = Number(resolvedSearchParams.page ?? "1");
  const { items, total, pageSize } = getArticlesByCategory(resolvedParams.slug, page, 10);
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-4">{category.name}</h1>
      {category.description && (
        <p className="text-black/70 dark:text-white/70 mb-6">{category.description}</p>
      )}

      <div className="grid gap-6">
        {items.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>

      {totalPages > 1 && (
        <nav className="flex items-center gap-3 mt-8">
          <a
            aria-disabled={page <= 1}
            className={`px-3 py-1 rounded border ${
              page <= 1 ? "pointer-events-none opacity-50" : "hover:bg-black/5 dark:hover:bg-white/10"
            }`}
            href={`?page=${page - 1}`}
          >
            Previous
          </a>
          <span className="text-sm">
            Page {page} of {totalPages}
          </span>
          <a
            aria-disabled={page >= totalPages}
            className={`px-3 py-1 rounded border ${
              page >= totalPages
                ? "pointer-events-none opacity-50"
                : "hover:bg-black/5 dark:hover:bg-white/10"
            }`}
            href={`?page=${page + 1}`}
          >
            Next
          </a>
        </nav>
      )}
    </div>
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const resolvedParams = await params;
  const category = getCategoryBySlug(resolvedParams.slug);
  if (!category) return {};
  const title = `${category.name}`;
  const description = category.description || `${category.name} from The Rajkot Today`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}


