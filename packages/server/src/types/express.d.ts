import type { Admin } from '../../prisma/generated/client';

export type {};

declare global {
  namespace Express {
    interface Request {
      admin?: Admin;
    }
  }
}
