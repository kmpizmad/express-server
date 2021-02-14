import { Controller, ControllerType, Logging } from '../../../types';
import { logger } from '../../vendors';

export const requestLogger: Controller = async (req, res, next) => {
  const { level, value } = (req as any)['logging'];
  logger.log(level, value);
};

export const setLogging = (request: ControllerType, log: Logging) => {
  const { req, res } = request;

  if (!log.value) {
    log.value = [req.ip, req.method, req.originalUrl, res.statusCode].join(' ');
  }

  Object.defineProperty(req, 'logging', {
    value: log,
    writable: false,
  });
};
