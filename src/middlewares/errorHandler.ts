import { NextFunction, Request, Response } from 'express';

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.error(err);

  res.status(err?.status || 500).json({
    status: 'FAILED',
    data: { error: err?.meta?.cause || err?.message || err },
  });
};
