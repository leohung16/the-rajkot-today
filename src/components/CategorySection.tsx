import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { getArticlesByCategory } from "@/data/api";
import type { CategorySlug } from "@/types/content";
import LocalizedText from "@/components/LocalizedText";

interface Props {
  slug: CategorySlug;
  title: string;
}

export default function CategorySection({ slug, title }: Props) {
  const { items } = getArticlesByCategory(slug, 1, 4);
  if (items.length === 0) return null;
  return (
    <section className="mt-10">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="headline text-xl font-bold">{title}</h2>
        <Link href={`/category/${slug}`} className="text-sm hover:underline"><LocalizedText id="seeAll" /></Link>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>
    </section>
  );
}


