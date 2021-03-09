import express, { Application } from 'express';
import { Server } from 'http';
import { ServerConfiguration } from './types';
import { scanPeriod } from './constants';
import { logScanner } from '../../utils/functions/log-scanner';
import { logger } from '../../vendors';

export { port, corsOptions, url, scanPeriod } from './constants';
export { default as vendors } from '../../vendors';
export { default as routers } from './routes';

export const createServer = (
  configuration?: ServerConfiguration
): Application => {
  const server: Application = express();

  if (configuration) {
    if (configuration.middlewares.length > 0) {
      configuration.middlewares.forEach(middleware => server.use(middleware));
    }
    if (configuration.routes.length > 0) {
      configuration.routes.forEach(route =>
        route.errorHandler
          ? server.use(...route.handlers)
          : server.use(route.uri, ...route.handlers)
      );
    }
  }

  return server;
};

export const startServer = (
  server: Application,
  port: string | number
): Server => {
  if (process.env.NODE_ENV == 'production') {
    setInterval(logScanner, scanPeriod);
  }

  return server.listen(port, () => {
    logger.info('Server is listening on port ' + port);
  });
};
