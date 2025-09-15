export type CategorySlug =
  | "rajkot"
  | "politics"
  | "business"
  | "sports"
  | "entertainment"
  | "technology"
  | "opinion"
  | "health"
  | "education"
  | "lifestyle"
  | "world"
  | "crime";

export interface Category {
  slug: CategorySlug;
  name: string;
  description?: string;
}

export interface MediaAsset {
  type: "image" | "video";
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  youtubeId?: string;
}

export interface Author {
  id: string;
  name: string;
  avatarUrl?: string;
  bio?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: CategorySlug;
  tags?: string[];
  featuredMedia?: MediaAsset;
  gallery?: MediaAsset[];
  author: Author;
  publishedAt: string; // ISO date string
  updatedAt?: string; // ISO date string
  isFeatured?: boolean;
  isTrending?: boolean;
  isFactChecked?: boolean;
}

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}


