import { userService } from '@src/services';
import { dataFormatter, errorFormatter } from '@src/utils';
import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { take, skip } = req.query;
  try {
    validationResult(req).throw();
    const allUsers = await userService.getAllUsers({
      take: take ? Number(take) : undefined,
      skip: take ? Number(skip) : undefined,
    });
    return dataFormatter(res, allUsers);
  } catch (err) {
    next(errorFormatter(err));
  }
};

export const getOneUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    validationResult(req).throw();
    const user = await userService.getOneUser(Number(req.params.id));
    return dataFormatter(res, user);
  } catch (err) {
    next(errorFormatter(err));
  }
};

export const createNewUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    validationResult(req).throw();
    const createdUser = await userService.createNewUser(req.body);
    return dataFormatter(res, createdUser, 201);
  } catch (err) {
    next(errorFormatter(err));
  }
};

export const updateOneUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    console.log('req.body', req.body);
    validationResult(req).throw();

    const updatedUser = await userService.updateOneUser(
      Number(req.params.id),
      req.body,
    );
    return dataFormatter(res, updatedUser);
  } catch (err) {
    next(errorFormatter(err));
  }
};

export const deleteOneUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    validationResult(req).throw();
    await userService.deleteOneUser(Number(req.params.id));
    return dataFormatter(res, null, 204);
  } catch (err) {
    next(errorFormatter(err));
  }
};
