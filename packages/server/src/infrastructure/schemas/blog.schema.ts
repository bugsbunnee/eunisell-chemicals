import z from 'zod';

export const BLOG_STATUSES = ['PUBLISHED', 'IN_REVIEW', 'DRAFT', 'SCHEDULED', 'ARCHIVED'] as const;
export const BLOG_CATEGORIES = ['Technical Bulletin', 'Industry Insights', 'Company Updates'] as const;

export const createBlogPostSchema = z.object({
  slug: z.string().min(2),
  title: z.string().min(2),
  topic: z.string().min(1),
  category: z.enum(BLOG_CATEGORIES),
  authorName: z.string().min(1),
  authorInitials: z.string().min(1).max(3),
  status: z.enum(BLOG_STATUSES).optional(),
  featured: z.boolean().optional(),
});

export const updateBlogPostSchema = createBlogPostSchema.partial();

export const blogQuerySchema = z.object({
  search: z.string().optional(),
  status: z.enum(BLOG_STATUSES).optional(),
  category: z.string().optional(),
});

export type ICreateBlogPost = z.infer<typeof createBlogPostSchema>;
export type IUpdateBlogPost = z.infer<typeof updateBlogPostSchema>;
export type IBlogQuery = z.infer<typeof blogQuerySchema>;
