import { Prisma, PrismaClient, User } from '@prisma/client';
import { PaginationResult } from '@src/types';

const prisma = new PrismaClient();

export const getManyUser = async (
  args?: Prisma.UserFindManyArgs,
): Promise<PaginationResult<User>> => {
  const { take, skip } = args;
  const [count, rows] = await prisma.$transaction([
    prisma.user.count(),
    prisma.user.findMany({
      take: take ? Number(take) : 20,
      skip: skip ? Number(skip) : 0,
    }),
  ]);

  return { count, rows };
};

export const getOneUser = async (id: number) => {
  return prisma.user.findUnique({ where: { id }, rejectOnNotFound: true });
};

export const getUserByEmail = async (email: string) => {
  return prisma.user.findUnique({ where: { email }, rejectOnNotFound: true });
};

export const createNewUser = async (data: Prisma.UserCreateInput) => {
  return prisma.user.create({ data });
};

export const updateOneUser = async (
  id: number,
  data: Prisma.UserUpdateInput,
) => {
  return prisma.user.update({ where: { id }, data });
};

export const deleteOneUser = async (id: number) => {
  return prisma.user.delete({ where: { id } });
};
