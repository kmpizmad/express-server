import { createClient, RedisClient } from 'redis';
import { port } from './constants';

const redis: RedisClient = createClient(parseInt(port.toString()));

export default redis;
