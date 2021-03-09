import { config } from 'dotenv';
import { envPath } from './constants';
import { createServer, startServer, vendors, routers, port } from './server';
import { errorHandlers } from './server/middlewares';

// Load environment variables
config({ path: envPath });

startServer(
  createServer({
    middlewares: [...vendors /* , middlewares */],
    routes: [...routers, ...errorHandlers],
  }),
  port
);
