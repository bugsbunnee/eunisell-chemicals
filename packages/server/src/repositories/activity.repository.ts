import prisma from '../../prisma';

export enum ActivityAction {
  Login = 'login',
  NewEnquiry = 'new-enquiry',
}

export enum ActivityCategory {
  Auth = 'auth',
  Enquiry = 'enquiry',
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
};
