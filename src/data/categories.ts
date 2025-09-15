import { Category } from "@/types/content";

export const CATEGORIES: Category[] = [
  { slug: "rajkot", name: "Local", description: "Updates from Rajkot city" },
  { slug: "politics", name: "Politics", description: "Political news and analysis" },
  { slug: "business", name: "Business", description: "Economic updates and business news" },
  { slug: "sports", name: "Sports", description: "Sports news and updates" },
  { slug: "entertainment", name: "Entertainment", description: "Movies, music, and entertainment news" },
  { slug: "technology", name: "Tech", description: "Tech news and innovations" },
  { slug: "opinion", name: "Opinion", description: "Editorial opinions and analysis" },
  { slug: "health", name: "Health", description: "Health news and wellness tips" },
  { slug: "education", name: "Education", description: "Educational news and updates" },
  { slug: "lifestyle", name: "Lifestyle", description: "Lifestyle and culture news" },
  { slug: "world", name: "World", description: "International news and events" },
  { slug: "crime", name: "Crime", description: "Crime reports and safety updates" },
];

export function getCategoryName(slug: string): string {
  return CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
}


