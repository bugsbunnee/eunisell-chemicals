import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export interface Option {
  label: string;
  value: string;
}

export interface ArticleTakeawayCard {
  Icon: LucideIcon;
  title: string;
  body: string;
}

export interface ArticleRelatedResource {
  category: string;
  title: string;
  body: string;
}

export interface ArticleDetail {
  breadcrumb: { label: string; href: string };
  type: string;
  tags: string[];
  title: string;
  excerpt: string;
  author: { name: string; avatarSrc: string };
  date: string;
  readTime: string;
  featuredImage: string;
  featuredCaption?: { label: string; quote: string };
  content: ReactNode;
  resourceDetails: { type: string; sector: string; subject: string };
  relatedSolution?: { title: string; description: string; href: string };
  takeawaysTitle?: string;
  takeaways: ArticleTakeawayCard[];
  relatedResources: ArticleRelatedResource[];
}
