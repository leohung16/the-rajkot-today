"use client";

import { useState } from "react";
import AdSlot from "@/components/AdSlot";

export default function StickyMobileAd() {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="mx-auto max-w-6xl px-2 pb-2">
        <div className="relative rounded-t bg-white/90 dark:bg-black/70 backdrop-blur border border-black/10 dark:border-white/10 p-2 flex items-center justify-center">
          <button
            className="absolute -top-3 right-2 text-xs rounded bg-black text-white px-2 py-0.5 dark:bg-white dark:text-black"
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


