import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export enum PartnerCategory {
  All = 'all',
  Chemical = 'chemical',
  Oilfield = 'oilfield',
  Industrial = 'industrial',
  Technical = 'technical',
}

export interface Action {
  label: string;
  icon: LucideIcon;
  iconColor: string;
  onPress: () => void;
}

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

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface PaginatedApiResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface IndustryBadge {
  initials: string;
  bg: string;
  text: string;
}

export interface StatusConfig {
  label: string;
  bg: string;
  border: string;
  text: string;
}

export interface CmsRow {
  id: string;
  title: string;
  slug: string;
  thumbnail: string;
  categoryMain: string;
  categorySub: string;
  industries: IndustryBadge[];
  completedSections: number;
  totalSections: number;
  completionPct: number;
  status: string;
  featured: boolean;
}

export interface StatPillar {
  label: string;
  value: string;
  borderColor: string;
}

export interface HealthItem {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  description: string;
}

export interface ActivityItem {
  time: string;
  text: string;
  link: string;
  dotColor: string;
}

export interface SystemTool {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
}

export interface CmsFilter {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}
