import Link from "next/link";
import Image from "next/image";
import { Article, MediaAsset } from "@/types/content";

interface Props {
  article: Article;
  media: MediaAsset; // expects type === 'video'
}

export default function VideoCard({ article, media }: Props) {
  const yt = media.youtubeId;
  const thumb = yt ? `https://img.youtube.com/vi/${yt}/hqdefault.jpg` : undefined;
  return (
    <article className="group">
      <Link href={`/article/${article.slug}`} className="block">
        <div className="relative aspect-video rounded overflow-hidden">
          {thumb ? (
            <Image src={thumb} alt={media.alt ?? article.title} fill className="object-cover" />
          ) : (
            <div className="w-full h-full grid place-items-center bg-black/10 dark:bg-white/10">
              <span className="text-sm">Video</span>
            </div>
          )}
          <div className="absolute inset-0 grid place-items-center">
            <div className="h-12 w-12 rounded-full bg-black/70 text-white grid place-items-center">
              ▶
            </div>
          </div>
        </div>
        <h3 className="mt-2 text-base font-semibold group-hover:underline">{article.title}</h3>
        <p className="text-sm text-black/70 dark:text-white/70 line-clamp-2">{article.summary}</p>
      </Link>
    </article>
  );
}


