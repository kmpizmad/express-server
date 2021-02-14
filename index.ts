import 'dotenv/config';
import { createServer, startServer, vendors, routers, port } from './server';
import { notFoundHandler, errorHandler } from './server/middlewares';

startServer(
  createServer({
    middlewares: [...vendors /*, middlewares */],
    routes: [
      ...routers,
      { uri: '', handler: notFoundHandler, errorHandler: true },
      { uri: '', handler: errorHandler, errorHandler: true },
    ],
  }),
  port
);
