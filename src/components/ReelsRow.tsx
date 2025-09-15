"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { getAllVideos } from "@/data/api";
import VideoModal from "@/components/VideoModal";
import LocalizedText from "@/components/LocalizedText";

export default function ReelsRow() {
  const videos = getAllVideos().slice(0, 10);
  if (videos.length === 0) return null;
  const [open, setOpen] = useState<{ yt?: string; title: string } | null>(null);
  const [hover, setHover] = useState<string | null>(null);
  return (
    <section className="mt-8">
      <div className="flex items-baseline justify-between mb-3">
        <h2 className="headline text-xl font-bold"><LocalizedText id="videoReels" /></h2>
        <Link href="/videos" className="text-sm hover:underline"><LocalizedText id="seeAll" /></Link>
      </div>
      <div className="flex gap-3 overflow-x-auto no-scrollbar py-1">
        {videos.map(({ article, media }, idx) => {
          const yt = media.youtubeId;
          const thumb = yt ? `https://img.youtube.com/vi/${yt}/hqdefault.jpg` : undefined;
          return (
            <div key={`${article.id}-${idx}`} className="shrink-0 w-[180px] sm:w-[220px]">
              <button
                className="relative aspect-[9/16] w-full rounded-lg overflow-hidden bg-black/10 dark:bg-white/10 group"
                onMouseEnter={() => setHover(yt ?? null)}
                onMouseLeave={() => setHover((prev) => (prev === yt ? null : prev))}
                onClick={() => yt && setOpen({ yt, title: article.title })}
                aria-label={`Play ${article.title}`}
              >
                {thumb && (
                  <Image src={thumb} alt={article.title} fill className="object-cover" />
                )}
                {yt && hover === yt && (
                  <iframe
                    className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity"
                    src={`https://www.youtube.com/embed/${yt}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${yt}`}
                    title={article.title}
                    allow="autoplay; encrypted-media; picture-in-picture"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-white text-xs line-clamp-3">
                  {article.title}
                </div>
              </button>
            </div>
          );
        })}
      </div>
      {open && (
        <VideoModal youtubeId={open.yt} title={open.title} onClose={() => setOpen(null)} />
      )}
    </section>
  );
}


