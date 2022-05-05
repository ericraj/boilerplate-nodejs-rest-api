import { PrismaClient } from '@prisma/client';
import users from '@src/fixtures/users';

const seedUsers = async (prisma: PrismaClient) => {
  await Promise.all(
    users.map(async (user) => {
      const existUser = await prisma.user.findUnique({
        where: { id: user.id },
      });

      if (!existUser) {
        await prisma.user.create({
          data: {
            id: user.id,
            name: user.name,
            username: user.username,
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
