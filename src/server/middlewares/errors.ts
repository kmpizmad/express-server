import { NotFoundHandler, ErrorHandler, Message } from '../types';
import { requestLogger, setLogging } from './logger';

export const notFoundHandler: NotFoundHandler = async (req, _, next) => {
  const err: Message<'Error'> = {
    name: 'Not Found',
    message: 'Not found endpoint: ' + req.originalUrl,
    code: 1044,
    type: 'ERR_NOT_FOUND',
    stack: new Error().stack,
  };

  next(err);
};

export const errorHandler: ErrorHandler = async (err, req, res, next) => {
  res.json(err);
  setLogging(
    { req, res, next },
    { level: 'error', value: JSON.stringify(err) }
  );
  next();
};

export default [
  { uri: '', handlers: [notFoundHandler, requestLogger], errorHandler: true },
  { uri: '', handlers: [errorHandler, requestLogger], errorHandler: true },
];
