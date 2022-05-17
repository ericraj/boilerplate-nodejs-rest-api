import { userService } from '@src/services';
import { NewUser } from '@src/types/user';
import { formatData } from '@src/utils';
import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { take, skip } = req.query;
  try {
    const allUsers = await userService.getAllUsers({
      take: take ? Number(take) : undefined,
      skip: take ? Number(skip) : undefined,
    });
    return formatData(res, allUsers);
  } catch (err) {
    next(err);
  }
};

export const getOneUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { userId } = req.params;
  try {
    validationResult(req).throw();
    const user = await userService.getOneUser(Number(userId));
    return formatData(res, user);
  } catch (err) {
    next(err);
  }
};

export const createNewUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const newUser: NewUser = req.body;
  try {
    validationResult(req).throw();
    const createdUser = await userService.createNewUser(newUser);
    return formatData(res, createdUser, 201);
  } catch (err) {
    next(err);
  }
};

export const updateOneUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { userId } = req.params;
  try {
    validationResult(req).throw();
    const updatedUser = await userService.updateOneUser(
      Number(userId),
      req.body,
    );
    return formatData(res, updatedUser);
  } catch (err) {
    next(err);
  }
};

export const deleteOneUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { userId } = req.params;
  try {
    validationResult(req).throw();
    await userService.deleteOneUser(Number(userId));
    return formatData(res, null, 204);
  } catch (err) {
    next(err);
  }
};
