import { PrismaClient } from '@prisma/client';
import seedUsers from './users';

const prisma = new PrismaClient();

const main = async () => {
  // Seed users
  await seedUsers(prisma);
};

main()
  .catch((e) => {
    console.log(`error :>>`, e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
