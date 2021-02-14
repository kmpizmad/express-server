import express, { Application } from 'express';
import { ServerConfiguration } from '../types';
import { requestLogger } from './middlewares';
import { logger } from './vendors';

export { port } from './constants';
export { default as vendors } from './vendors';
export { default as routers } from './routes';

export const createServer = (
  configuration?: ServerConfiguration
): Application => {
  const server: Application = express();

  if (configuration) {
    configuration.middlewares.forEach(middleware => server.use(middleware));
    configuration.routes.forEach(route =>
      route.errorHandler
        ? server.use(route.handler, requestLogger)
        : server.use(route.uri, route.handler, requestLogger)
    );
  }

  return server;
};

export const startServer = (
  server: Application,
  port: string | number
): void => {
  server.listen(port, () => {
    logger.info('Server is listening on port ' + port);
  });
};
