import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  return res.status(200).json({
    name: 'Boilerplate Node.js REST API',
    message: 'Welcome !',
    status: 'OK',
    currentVersion: 'v1',
    baseUrl: '/api/v1',
  });
});

export default router;
