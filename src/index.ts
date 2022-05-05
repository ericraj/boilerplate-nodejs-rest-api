import v1UserRouter from '@src/v1/routes/userRoutes';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application } from 'express';
import http from 'http';
import { AddressInfo } from 'net';

dotenv.config();

const PORT = process.env.PORT || 3000;

export const createServer = (): Application => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(express.json());

  app.use('/api/v1/users', v1UserRouter);

  return app;
};

const startServer = async () => {
  const app = createServer();
  const server = http.createServer(app).listen({ port: PORT }, () => {
    const addressInfo = server.address() as AddressInfo;
    console.log(
      `🚀 API is listening on http://${addressInfo.address}:${addressInfo.port}`,
    );
  });
};

startServer();
