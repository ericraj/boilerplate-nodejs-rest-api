import { Response } from 'express';

export const formatData = (res: Response, data: any, statusCode?: number) => {
  return res.status(statusCode || 200).json({ status: 'OK', data });
};

export const formatError = (res: Response, err: any) => {
  return res.status(err?.status || 500).json({
    status: 'FAILED',
    data: { error: err?.meta?.cause || err?.message || err },
  });
};
