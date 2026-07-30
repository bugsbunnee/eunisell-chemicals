import type { Admin } from '../../prisma/generated/client';
import type { Pagination } from '../infrastructure/utils/entities';

export type {};

declare global {
  namespace Express {
    interface Request {
      admin?: Admin;
      pagination: Pagination;
    }
  }
}
