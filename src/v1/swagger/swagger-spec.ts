const swaggerSpec = {
  openapi: '3.0.0',
  info: {
    title: 'Boilerplate Node.js REST API',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://127.0.0.1:3002/api/v1',
      description: 'Dev server',
    },
    {
      url: 'https://boilerplate-nodejs-rest-api.herokuapp.com/api/v1',
      description: 'Prod server',
    },
  ],
  paths: {
    '/users': {
      get: {
        summary: 'Get all users.',
        operationId: 'getAllUsers',
        tags: ['users'],
        parameters: [
          { $ref: '#/components/parameters/takeParam' },
          { $ref: '#/components/parameters/skipParam' },
        ],
        responses: {
          '200': {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: { type: 'string', example: 'OK' },
                    data: {
                      type: 'object',
                      properties: {
                        count: { type: 'integer' },
                        rows: {
                          type: 'array',
                          items: {
                            type: 'object',
                            $ref: '#/components/schemas/User',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      User: {
        allOf: [
          { $ref: '#/components/schemas/BaseModel' },
          {
            type: 'object',
            required: ['id', 'name', 'email'],
            properties: {
              id: { type: 'number' },
              name: { type: 'string' },
              email: { type: 'string' },
              phone: { type: 'string' },
              website: { type: 'string' },
            },
          },
        ],
      },
      BaseModel: {
        type: 'object',
        required: ['id'],
        properties: {
          id: { type: 'number', format: 'int32' },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
        },
      },
    },
    parameters: {
      takeParam: {
        name: 'take',
        in: 'query',
        description: 'Maximum number of items to return.',
        schema: { type: 'integer', format: 'int32', minimum: 1, default: 20 },
      },
      skipParam: {
        name: 'skip',
        in: 'query',
        description: 'Number of items to skip before returning the results.',
        schema: { type: 'integer', format: 'int32', minimum: 0, default: 0 },
      },
    },
  },
};

export default swaggerSpec;
