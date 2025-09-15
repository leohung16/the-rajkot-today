import { getAllCategories, searchArticles } from "@/data/api";
import type { CategorySlug } from "@/types/content";
import ArticleCard from "@/components/ArticleCard";

export const metadata = {
  title: "Search | The Rajkot Today",
};

interface SearchParams {
  q?: string;
  category?: string;
  from?: string;
  to?: string;
}

export default async function SearchPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const categories = getAllCategories();
  const resolvedSearchParams = await searchParams;
  const { q, category, from, to } = resolvedSearchParams;

  const categorySlug = (category as CategorySlug) || undefined;
  const hasFilters = Boolean(q || categorySlug || from || to);
  const results = hasFilters
    ? searchArticles({ query: q, category: categorySlug, from, to })
    : [];

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-4">Search</h1>
      <form method="get" className="grid gap-3 md:grid-cols-6 md:items-end border p-4 rounded mb-6">
        <div className="md:col-span-2">
          <label className="block text-sm mb-1">Keyword</label>
          <input
            type="text"
            name="q"
            defaultValue={q ?? ""}
            placeholder="Search news..."
            className="w-full border rounded px-3 py-2 bg-transparent"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Category</label>
          <select name="category" defaultValue={category ?? ""} className="w-full border rounded px-3 py-2 bg-transparent">
            <option value="">All</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">From</label>
          <input type="date" name="from" defaultValue={from ?? ""} className="w-full border rounded px-3 py-2 bg-transparent" />
        </div>
        <div>
          <label className="block text-sm mb-1">To</label>
          <input type="date" name="to" defaultValue={to ?? ""} className="w-full border rounded px-3 py-2 bg-transparent" />
        </div>
        <div>
          <button className="inline-flex items-center justify-center rounded border px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10">Search</button>
        </div>
      </form>

      {hasFilters && (
        <div>
          <div className="text-sm text-black/70 dark:text-white/70 mb-4">{results.length} result(s)</div>
          <div className="grid gap-6">
            {results.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
            {results.length === 0 && <div className="text-sm">No results found.</div>}
          </div>
        </div>
      )}
    </div>
  );
}


