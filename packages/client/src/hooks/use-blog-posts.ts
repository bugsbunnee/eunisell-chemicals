import { useQuery } from '@tanstack/react-query';

import dayjs from '../lib/dayjs';
import http from '../services/http';
import useBlogAdminStore from '../store/blog-admin';
import type { PaginatedApiResponse } from '../lib/entities';

export type BlogStatus = 'PUBLISHED' | 'IN_REVIEW' | 'DRAFT' | 'SCHEDULED' | 'ARCHIVED';

export interface BlogPost {
  id: string;
  title: string;
  topic: string;
  category: string;
  authorName: string;
  authorInitials: string;
  status: BlogStatus;
  featured: boolean;
  updatedAt: string;
  lastUpdated: string;
}

export interface BlogStats {
  total: number;
  published: number;
  drafts: number;
  inReview: number;
  scheduled: number;
  archived: number;
  categoryBreakdown: {
    technical: number;
    insights: number;
    updates: number;
  };
}

interface RawBlogPost extends Omit<BlogPost, 'lastUpdated'> {
  updatedAt: string;
}

function mapPost(raw: RawBlogPost): BlogPost {
  return { ...raw, lastUpdated: dayjs(raw.updatedAt).fromNow() };
}

export const useBlogStats = () => {
  return useQuery({
    queryKey: ['blog-stats'],
    queryFn: () => http.get<BlogStats>('/api/v1/blog/stats').then((r) => r.data),
  });
};

export const useBlogPosts = () => {
  const query = useBlogAdminStore((s) => s.query);

  return useQuery({
    queryKey: ['blog-posts', query],
    queryFn: () => http.get<PaginatedApiResponse<RawBlogPost>>('/api/v1/blog', { params: query }).then((r) => ({ data: r.data.data.map(mapPost), meta: r.data.meta })),
  });
};
