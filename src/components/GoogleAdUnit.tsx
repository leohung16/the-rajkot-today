"use client";

import { useEffect } from "react";
import AdSlot from "@/components/AdSlot";

type Props = {
  slot: string; // your AdSense slot id, e.g. 1234567890
  width: number;
  height: number;
  format?: string; // e.g. "auto"
  responsive?: boolean;
};

export default function GoogleAdUnit({ slot, width, height, format, responsive }: Props) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, [slot]);

  if (!client || !slot) {
    return <AdSlot id={`placeholder_${slot || "no-slot"}`} width={width} height={height} />;
  }

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "inline-block", width, height }}
      data-ad-client={client}
      data-ad-slot={slot}
      {...(format ? { "data-ad-format": format } : {})}
      {...(responsive ? { "data-full-width-responsive": "true" } : {})}
    />
  );
}


