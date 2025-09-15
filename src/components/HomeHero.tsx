import Image from "next/image";
import Link from "next/link";
import { getLatestArticles } from "@/data/api";

export default function HomeHero() {
  const lead = getLatestArticles(1)[0];
  const side = getLatestArticles(5).slice(1, 5);

  return (
    <section className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        {lead && (
          <Link href={`/article/${lead.slug}`} className="block">
            <div className="relative aspect-[16/9] rounded overflow-hidden">
              {lead.featuredMedia?.type === "image" && lead.featuredMedia.url && (
                <Image src={lead.featuredMedia.url} alt={lead.title} fill className="object-cover" priority />
              )}
            </div>
            <h2 className="headline text-2xl sm:text-3xl font-bold mt-3">{lead.title}</h2>
            <p className="text-sm text-black/70 dark:text-white/70 mt-1 line-clamp-2">{lead.summary}</p>
          </Link>
        )}
      </div>
      <div className="grid gap-4">
        {side.map((a) => (
          <Link key={a.id} href={`/article/${a.slug}`} className="block">
            <h3 className="headline text-lg font-semibold leading-snug hover:underline">{a.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}


