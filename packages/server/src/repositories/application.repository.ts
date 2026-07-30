import dayjs from 'dayjs';
import prisma from '../../prisma';

import type { ApplicationStatus } from '../../prisma/generated/client';
import type { ICreateApplication } from '../infrastructure/schemas';

export const applicationRepository = {
  create(data: ICreateApplication) {
    return prisma.application.create({ data });
  },

  findById(id: string) {
    return prisma.application.findUnique({ where: { id } });
  },

  updateStatus(id: string, status: ApplicationStatus) {
    return prisma.application.update({ where: { id }, data: { status } });
  },

  async stats() {
    const [total, shortlisted, reviewed, rejected, newCount] = await Promise.all([
      prisma.application.count(),
      prisma.application.count({ where: { status: 'SHORTLISTED' } }),
      prisma.application.count({ where: { status: 'REVIEWED' } }),
      prisma.application.count({ where: { status: 'REJECTED' } }),
      prisma.application.count({ where: { status: 'NEW' } }),
    ]);

    return {
      total,
      shortlisted,
      reviewed,
      new: newCount,
      pending: total - shortlisted - rejected,
    };
  },

  async recentActivity() {
    const now = dayjs();
    const weekAgo = now.subtract(7, 'day');
    const twoWeeksAgo = now.subtract(14, 'day');

    const [newThisWeek, previousWeek, mostApplied] = await Promise.all([
      prisma.application.count({ where: { createdAt: { gte: weekAgo.toDate() } } }),
      prisma.application.count({ where: { createdAt: { gte: twoWeeksAgo.toDate(), lt: weekAgo.toDate() } } }),
      prisma.application.groupBy({
        by: ['jobTitle'],
        _count: { jobTitle: true },
        orderBy: { _count: { jobTitle: 'desc' } },
        take: 1,
      }),
    ]);

    const trendPct = previousWeek === 0 ? (newThisWeek > 0 ? 100 : 0) : Math.round(((newThisWeek - previousWeek) / previousWeek) * 100);

    return {
      newThisWeek,
      trendPct,
      mostAppliedRole: mostApplied[0] ? { title: mostApplied[0].jobTitle, count: mostApplied[0]._count.jobTitle } : null,
    };
  },
};
