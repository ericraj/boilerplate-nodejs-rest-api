import { check } from 'express-validator';

export const idValidator = [check('id', 'is not an integer').isInt()];

export const userValidator = [
  check(['phone', 'website'], 'is not a string').isString().optional(),
];

export const createUserValidator = [
  ...userValidator,
  check(['name', 'email'])
    .notEmpty()
    .withMessage('is required')
    .isString()
    .withMessage('is not a string'),
  check('email', 'is not a valid email').isEmail(),
];

export const updateUserValidator = [
  ...idValidator,
  ...userValidator,
  check('email', 'is not a valid email').isEmail().optional(),
  check('name')
    .isString()
    .withMessage('is not a string')
    .not()
    .isEmpty()
    .withMessage('empty string is not valid')
    .optional(),
];

export const paginationQueryParamsValidator = [
  check(['take', 'skip'], 'is not an integer').isInt().optional(),
];
