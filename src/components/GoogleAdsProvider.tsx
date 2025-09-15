"use client";

import Script from "next/script";

export default function GoogleAdsProvider() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  if (!client) return null;
  return (
    <Script
      id="adsbygoogle-loader"
      strategy="afterInteractive"
      async
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
    />
  );
}


