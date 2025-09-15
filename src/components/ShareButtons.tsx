"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

interface Props {
  title: string;
}

export default function ShareButtons({ title }: Props) {
  const pathname = usePathname();
  const [origin, setOrigin] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  const url = useMemo(() => {
    const base = process.env.NEXT_PUBLIC_SITE_URL || origin || "";
    return `${base}${pathname ?? ""}`;
  }, [origin, pathname]);

  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-3">
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm underline"
      >
        Share on X
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm underline"
      >
        Facebook
      </a>
      <a
        href={`https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm underline"
      >
        WhatsApp
      </a>
    </div>
  );
}


