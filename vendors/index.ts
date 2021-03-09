// Vendor middlewares
import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import { corsOptions } from '../src/server/constants';

export { logger, logsFolder } from './logger';
export default [
  cors(corsOptions),
  helmet(),
  express.json(),
  express.urlencoded({ extended: true }),
];
