"use client";

import Image from "next/image";

type Props = {
  id: string;
  width?: number;
  height?: number;
  href?: string;
  imageSrc?: string; // optional override creative
};

const sizeToCreative: Record<string, { src: string; alt: string }> = {
  "970x250": { src: "/ads/placeholder-970x250.svg", alt: "Leaderboard 970x250" },
  "728x90": { src: "/ads/placeholder-728x90.svg", alt: "Leaderboard 728x90" },
  "300x250": { src: "/ads/placeholder-300x250.svg", alt: "Medium Rectangle 300x250" },
  "336x280": { src: "/ads/placeholder-336x280.svg", alt: "Large Rectangle 336x280" },
  "300x600": { src: "/ads/placeholder-300x600.svg", alt: "Half Page 300x600" },
  "320x50": { src: "/ads/placeholder-320x50.svg", alt: "Mobile Banner 320x50" },
};

export default function AdSlot({ id, width, height, href = "#", imageSrc }: Props) {
  const w = width ?? 300;
  const h = height ?? 250;
  const key = `${w}x${h}`;
  const creative = imageSrc
    ? { src: imageSrc, alt: `Ad ${id}` }
    : sizeToCreative[key] ?? { src: "/ads/placeholder-300x250.svg", alt: `Ad ${id}` };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-ad-slot={id}
      className="block rounded-lg overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
      style={{ 
        width: w, 
        height: h,
        maxWidth: '100%',
        aspectRatio: `${w}/${h}`
      }}
      aria-label={`Advertisement ${id}`}
    >
      <Image 
        src={creative.src} 
        alt={creative.alt} 
        width={w} 
        height={h}
        className="w-full h-full object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </a>
  );
}


