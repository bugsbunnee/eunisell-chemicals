import dayjs from 'dayjs';
import prisma from '../../prisma/index.js';

import type { Pagination } from '../infrastructure/utils/entities.js';
import type { ICareerQuery, ICreateCareerOpening, IUpdateCareerOpening } from '../infrastructure/schemas/index.js';

export const careerRepository = {
  create(data: ICreateCareerOpening) {
    return prisma.careerOpening.create({ data });
  },

  async findAll({ skip, limit }: Pagination, filters: ICareerQuery) {
    const where = {
      ...(filters.status && { status: filters.status }),
      ...(filters.dept && { department: filters.dept }),
      ...(filters.jobType && { jobType: filters.jobType }),
      ...(filters.level && { level: filters.level }),
      ...(filters.featured && { featured: filters.featured === 'yes' }),
      ...(filters.search && {
        OR: [{ title: { contains: filters.search, mode: 'insensitive' as const } }, { department: { contains: filters.search, mode: 'insensitive' as const } }],
      }),
    };

    const [data, total] = await Promise.all([prisma.careerOpening.findMany({ where, skip, take: limit, orderBy: { updatedAt: 'desc' } }), prisma.careerOpening.count({ where })]);

    return { data, total };
  },

  async stats() {
    const [open, draft, closed, featured] = await Promise.all([
      prisma.careerOpening.count({ where: { status: 'OPEN' } }),
      prisma.careerOpening.count({ where: { status: 'DRAFT' } }),
      prisma.careerOpening.count({ where: { status: 'CLOSED' } }),
      prisma.careerOpening.count({ where: { featured: true } }),
    ]);

    return { open, draft, closed, featured };
  },

  closingSoon(withinDays = 7) {
    const now = dayjs();

    return prisma.careerOpening.count({ where: { status: 'OPEN', deadline: { gte: now.toDate(), lte: now.add(withinDays, 'day').toDate() } } });
  },

  findById(id: string) {
    return prisma.careerOpening.findUnique({ where: { id } });
  },

  findBySlug(slug: string) {
    return prisma.careerOpening.findUnique({ where: { slug } });
  },

  update(id: string, data: IUpdateCareerOpening) {
    return prisma.careerOpening.update({ where: { id }, data });
  },

  remove(id: string) {
    return prisma.careerOpening.delete({ where: { id } });
  },
};
