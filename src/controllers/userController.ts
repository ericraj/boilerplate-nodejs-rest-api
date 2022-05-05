import { userService } from '@src/services';
import { Request, Response } from 'express';

export const getAllUsers = async (_req: Request, res: Response) => {
  const allUsers = await userService.getAllUsers();
  res.json(allUsers);
};

export const getOneUser = async (_req: Request, res: Response) => {
  const user = await userService.getOneUser();
  res.json(user);
};

export const createNewUser = async (_req: Request, res: Response) => {
  const createdUser = await userService.createNewUser();
  res.json(createdUser);
};

export const updateOneUser = async (_req: Request, res: Response) => {
  const updatedUser = await userService.updateOneUser();
  res.json(updatedUser);
};

export const deleteOneUser = async (_req: Request, res: Response) => {
  await userService.deleteOneUser();
  res.json({ message: 'Delete an existing user' });
};
