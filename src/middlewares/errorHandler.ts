import { Prisma } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  // TODO : logger
  console.error(err);

  if (err.name === 'ValidatorError') err.status = 400;

  if (err.name === 'NotFoundError') err.status = 404;

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2025') (err as any).status = 404;

    if (err.code === 'P2002') {
      (err as any).status = 400;
      const { target } = err.meta;
      const fields: string[] = target ? (target as any) : [];
      if (fields.length) {
        err.message = `${fields.join(', ')} already used`;
      }
    }
  }

  res.status(err?.status || 500).json({
    status: 'FAILED',
    data: { error: err?.meta?.cause || err?.message || err },
  });
};
