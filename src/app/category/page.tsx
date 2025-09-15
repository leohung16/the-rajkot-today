import Link from "next/link";
import { getAllCategories } from "@/data/api";

export const metadata = {
  title: "Categories | The Rajkot Today",
};

export default function CategoriesIndexPage() {
  const categories = getAllCategories();
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6">Categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/category/${c.slug}`}
            className="border border-black/10 dark:border-white/10 rounded p-4 hover:shadow"
          >
            <div className="text-base font-semibold">{c.name}</div>
            {c.description && (
              <p className="text-sm text-black/60 dark:text-white/60 mt-1">{c.description}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}


