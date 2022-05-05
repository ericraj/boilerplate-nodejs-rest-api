import { PrismaClient } from '@prisma/client';
import users from '@src/fixtures/users';

const seedUsers = async (prisma: PrismaClient) => {
  await Promise.all(
    users.map(async (user) => {
      const existUser = await prisma.user.findUnique({
        where: { email: user.email },
      });

      if (!existUser) {
        await prisma.user.create({
          data: {
            name: user.name,
            email: user.email,
            phone: user.phone,
            website: user.website,
          },
        });

        console.log(`User ${user.name} is seeded`);
      }
    }),
  );
};

export default seedUsers;
