import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../prisma/generated/client.ts';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: Bun.env.DATABASE_URL }),
});

export default prisma;
