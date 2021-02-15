import 'dotenv/config';
import { createServer, startServer, vendors, routers, port } from './server';
import { errorHandlers } from './server/middlewares';

startServer(
  createServer({
    middlewares: [...vendors /*, middlewares */],
    routes: [...routers, ...errorHandlers],
  }),
  port
);
