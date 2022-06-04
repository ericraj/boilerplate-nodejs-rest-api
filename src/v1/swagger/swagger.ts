import { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger-spec';

const swaggerDocs = (app: Application) => {
  app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default swaggerDocs;
