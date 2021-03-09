import { requestLogger } from '../middlewares';
import testRouter from './testEndpoint';

export default [
  {
    uri: '/test',
    handlers: [testRouter, requestLogger],
    errorHandler: false,
  },
];
