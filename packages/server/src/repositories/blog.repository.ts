import prisma from '../../prisma';

import type { BlogStatus } from '../../prisma/generated/client';
import type { Pagination } from '../infrastructure/utils/entities';
import type { IBlogQuery, ICreateBlogPost, IUpdateBlogPost } from '../infrastructure/schemas';

export const blogRepository = {
  create(data: ICreateBlogPost) {
    return prisma.blogPost.create({ data });
  },

  async findAll({ skip, limit }: Pagination, filters: IBlogQuery) {
    const where = {
      ...(filters.status && { status: filters.status as BlogStatus }),
      ...(filters.category && { category: filters.category }),
      ...(filters.search && {
        OR: [
          { title: { contains: filters.search, mode: 'insensitive' as const } },
          { authorName: { contains: filters.search, mode: 'insensitive' as const } },
          { topic: { contains: filters.search, mode: 'insensitive' as const } },
        ],
      }),
    };

    const [data, total] = await Promise.all([prisma.blogPost.findMany({ where, skip, take: limit, orderBy: { updatedAt: 'desc' } }), prisma.blogPost.count({ where })]);

    return { data, total };
  },

  async stats() {
    const [total, published, drafts, inReview, scheduled, archived, technical, insights, updates] = await Promise.all([
      prisma.blogPost.count(),
      prisma.blogPost.count({ where: { status: 'PUBLISHED' } }),
      prisma.blogPost.count({ where: { status: 'DRAFT' } }),
      prisma.blogPost.count({ where: { status: 'IN_REVIEW' } }),
      prisma.blogPost.count({ where: { status: 'SCHEDULED' } }),
      prisma.blogPost.count({ where: { status: 'ARCHIVED' } }),
      prisma.blogPost.count({ where: { category: 'Technical Bulletin' } }),
      prisma.blogPost.count({ where: { category: 'Industry Insights' } }),
      prisma.blogPost.count({ where: { category: 'Company Updates' } }),
    ]);

    return {
      total,
      published,
      drafts,
      inReview,
      scheduled,
      archived,
      categoryBreakdown: { technical, insights, updates },
    };
  },

  findById(id: string) {
    return prisma.blogPost.findUnique({ where: { id } });
  },

  update(id: string, data: IUpdateBlogPost) {
    return prisma.blogPost.update({ where: { id }, data });
  },

  remove(id: string) {
    return prisma.blogPost.delete({ where: { id } });
  },
};
