import _ from 'lodash';
import prisma from '../../prisma';

import type { IRegister } from '../infrastructure/utils/schema';

export const authRepository = {
  getAdminByEmail(email: string) {
    return prisma.admin.findUnique({ where: { email } });
  },

  createAdmin(data: Omit<IRegister, 'confirmPassword'>) {
    return prisma.admin.create({ data });
  },
};
