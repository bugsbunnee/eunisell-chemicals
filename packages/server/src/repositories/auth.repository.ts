import prisma from '../../prisma';

export const authRepository = {
  getAdminByEmail(email: string) {
    return prisma.admin.findUnique({ where: { email } });
  },
};
