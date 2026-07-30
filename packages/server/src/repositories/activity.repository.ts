import prisma from '../../prisma/index.js';

export enum ActivityAction {
  Login = 'login',
  NewEnquiry = 'new-enquiry',
  NewBlogPost = 'new-blog-post',
  UpdateBlogPost = 'update-blog-post',
  DeleteBlogPost = 'delete-blog-post',
  NewCareerOpening = 'new-career-opening',
  UpdateCareerOpening = 'update-career-opening',
  DeleteCareerOpening = 'delete-career-opening',
  UpdateApplicationStatus = 'update-application-status',
}

export enum ActivityCategory {
  Auth = 'auth',
  Enquiry = 'enquiry',
  Blog = 'blog',
  Careers = 'careers',
  Applications = 'applications',
}

export interface ActivityData {
  adminId?: string | null;
  category: ActivityCategory;
  action: ActivityAction;
  description: string;
}

export const activityRepository = {
  async recordActivity(data: ActivityData) {
    return prisma.activityLog.create({
      data: {
        adminId: data.adminId || null,
        action: data.action,
        category: data.category,
        description: data.description,
      },
    });
  },

  findRecent({ limit = 10, category }: { limit?: number; category?: string } = {}) {
    return prisma.activityLog.findMany({
      where: category ? { category } : undefined,
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  },
};
