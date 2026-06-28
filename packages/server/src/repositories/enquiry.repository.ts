import prisma from '../../prisma';

import type { EnquiryPriority, EnquiryStatus } from '../../prisma/generated/client';
import type { Pagination } from '../infrastructure/utils/entities';
import type { ICreateEnquiry, IEnquiryQuery, IUpdateEnquiry } from '../infrastructure/schemas';

export const enquiryRepository = {
  create(data: ICreateEnquiry) {
    return prisma.enquiry.create({ data });
  },

  async findAll({ skip, limit }: Pagination, filters: IEnquiryQuery) {
    const where = {
      ...(filters.status && { status: filters.status as EnquiryStatus }),
      ...(filters.priority && { priority: filters.priority as EnquiryPriority }),
      ...(filters.enquiryType && { enquiryType: filters.enquiryType }),
      ...(filters.search && {
        OR: [
          { fullName: { contains: filters.search, mode: 'insensitive' as const } },
          { email: { contains: filters.search, mode: 'insensitive' as const } },
          { enquiryType: { contains: filters.search, mode: 'insensitive' as const } },
        ],
      }),
    };

    const [data, total] = await Promise.all([prisma.enquiry.findMany({ where, skip, take: limit, orderBy: { createdAt: 'desc' } }), prisma.enquiry.count({ where })]);

    return { data, total };
  },

  async findStats() {
    const [total, urgent, byType] = await Promise.all([
      prisma.enquiry.count(),
      prisma.enquiry.count({ where: { priority: 'URGENT' } }),
      prisma.enquiry.groupBy({ by: ['enquiryType'], _count: { id: true } }),
    ]);

    const type = Object.fromEntries(byType.map((t) => [t.enquiryType, t._count.id]));

    return {
      total,
      urgent,
      consultation: type['Consultation'] ?? 0,
      product: type['Product Enquiry'] ?? 0,
      technical: type['Technical Support'] ?? 0,
      laboratory: type['Lab Services'] ?? 0,
      emergency: type['Emergency Support'] ?? 0,
    };
  },

  findById(id: string) {
    return prisma.enquiry.findUnique({ where: { id } });
  },

  update(id: string, data: IUpdateEnquiry) {
    return prisma.enquiry.update({ where: { id }, data: data as { status?: EnquiryStatus; priority?: EnquiryPriority } });
  },

  remove(id: string) {
    return prisma.enquiry.delete({ where: { id } });
  },
};
