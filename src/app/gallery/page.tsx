import Image from "next/image";
import Link from "next/link";
import { getAllGalleryImages } from "@/data/api";

export const metadata = {
  title: "Gallery | The Rajkot Today",
};

export default function GalleryPage() {
  const items = getAllGalleryImages();
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6">Photo Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map(({ article, media }, idx) => (
          <Link key={`${article.id}-${idx}`} href={`/article/${article.slug}`} className="block group">
            <div className="relative aspect-square rounded overflow-hidden">
              <Image src={media.url} alt={media.alt ?? article.title} fill className="object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="mt-2 text-sm line-clamp-2">{article.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}


