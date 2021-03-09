import { CorsOptions } from 'cors';

export const scanPeriod: number = 1000 * 60;
export const port: string | number = process.env.PORT || 8080;
export const url: string = (process.env.BASE_URL || 'http://localhost:') + port;
export const corsOptions: CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: process.env.CORS_ORIGIN || '*',
  preflightContinue: false,
};
