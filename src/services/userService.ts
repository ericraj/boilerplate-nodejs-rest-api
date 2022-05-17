import { Prisma, PrismaClient, User } from '@prisma/client';
import { NewUser } from '@src/types/user';

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

export const getOneUser = async (userId: number) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    return user;
  } catch (error) {
    throw error;
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    return prisma.user.findUnique({ where: { email } });
  } catch (error) {
    throw error;
  }
};

export const createNewUser = async (newUser: NewUser) => {
  const existUser = await getUserByEmail(newUser.email);
  if (existUser) {
    throw {
      status: 400,
      message: `User with email '${newUser.email}' already exists`,
    };
  }

  try {
    return prisma.user.create({ data: { ...newUser } });
  } catch (error: any) {
    throw error;
  }
};

export const updateOneUser = async (userId: number, data: Partial<NewUser>) => {
  if (data.email) {
    const existUser = await getUserByEmail(data.email);
    if (existUser && existUser.id !== userId) {
      throw {
        status: 400,
        message: `User with email '${data.email}' already exists`,
      };
    }
  }

  try {
    return prisma.user.update({ where: { id: userId }, data });
  } catch (error: any) {
    throw error;
  }
};

export const deleteOneUser = async (userId: number) => {
  try {
    const deletedUser = await prisma.user.delete({ where: { id: userId } });
    return deletedUser;
  } catch (error) {
    throw error;
  }
};
