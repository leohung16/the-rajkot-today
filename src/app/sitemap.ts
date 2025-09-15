import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllArticles } from "@/data/api";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const items: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/gallery`, lastModified: new Date() },
    { url: `${base}/videos`, lastModified: new Date() },
  ];
  for (const a of getAllArticles()) {
    items.push({ url: `${base}/article/${a.slug}`, lastModified: new Date(a.updatedAt ?? a.publishedAt) });
  }
  return items;
}


