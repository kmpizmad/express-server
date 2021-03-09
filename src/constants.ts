import { join } from 'path';

export const envName =
  process.env.NODE_ENV === 'development' ? '.env.dev' : '.env';
export const envPath = join(process.cwd(), 'environments', envName);
export const today: string = new Date().toISOString().slice(0, 10);
