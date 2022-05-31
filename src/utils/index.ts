import { Response } from 'express';

export const dataFormatter = (res: Response, data: any, status?: number) => {
  return res.status(status || 200).json({ status: 'OK', data });
};

export const errorFormatter = (error: any) => {
  if (error.array) {
    return { name: 'ValidatorError', details: error.array() };
  }

  return error;
};
