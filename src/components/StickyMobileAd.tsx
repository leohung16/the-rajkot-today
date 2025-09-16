"use client";

import { useState } from "react";
import AdSlot from "@/components/AdSlot";

export default function StickyMobileAd() {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="mx-auto max-w-6xl px-2 pb-1.5">
        <div className="relative rounded-t bg-white/95 dark:bg-black/70 backdrop-blur border border-black/10 dark:border-white/10 p-1.5 flex items-center justify-center shadow-lg">
          <button
            className="absolute -top-3 right-2 text-[11px] rounded bg-black text-white px-2 py-0.5 dark:bg-white dark:text-black opacity-80"
            onClick={() => setHidden(true)}
            aria-label="Close ad"
          >
            ✕
          </button>
          <AdSlot id="mobile_sticky" width={320} height={50} />
        </div>
      </div>
    </div>
  );
}


