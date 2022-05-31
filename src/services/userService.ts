import { Prisma, PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllUsers = async (
  args?: Prisma.UserFindManyArgs,
): Promise<User[]> => {
  try {
    return prisma.user.findMany({ ...args });
  } catch (error) {
    throw error;
  }
};

export const getOneUser = async (id: number) => {
  try {
    return prisma.user.findUnique({ where: { id }, rejectOnNotFound: true });
  } catch (error) {
    throw error;
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    return prisma.user.findUnique({ where: { email }, rejectOnNotFound: true });
  } catch (error) {
    throw error;
  }
};

export const createNewUser = async (data: Prisma.UserCreateInput) => {
  try {
    return prisma.user.create({ data });
  } catch (error: any) {
    throw error;
  }
};

export const updateOneUser = async (
  id: number,
  data: Prisma.UserUpdateInput,
) => {
  try {
    console.log('data', data);
    return prisma.user.update({ where: { id }, data });
  } catch (error: any) {
    throw error;
  }
};

export const deleteOneUser = async (id: number) => {
  try {
    return prisma.user.delete({ where: { id } });
  } catch (error) {
    throw error;
  }
};
