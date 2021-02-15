import { createClient } from 'redis';

const port: string | number = process.env.REDIS_PORT || 6379;

export const redis = createClient(parseInt(port.toString()));
