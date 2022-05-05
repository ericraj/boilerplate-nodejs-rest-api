import { check } from 'express-validator';

export const emailValidator = [
  check('email', 'email is required').notEmpty(),
  check('email', 'email is not valid').isEmail(),
];

export const userIdValidator = [
  check('userId', 'userId is not a number').isNumeric(),
];

export const newUserValidator = [
  ...emailValidator,
  check('name', 'name is required').notEmpty(),
];

export const updateUserValidator = [...userIdValidator, ...emailValidator];
