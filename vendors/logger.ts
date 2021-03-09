import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { createLogger, format, Logger } from 'winston';
import { Console, File } from 'winston/lib/winston/transports';
import { today } from '../src/constants';

export const logsFolder = (filename: string): string => {
  const path: string = join('logs', today);
  const file: string = filename + '.log';

  if (!existsSync(path)) {
    mkdirSync(path, { recursive: true });
  }

  return join(path, file);
};

const transports =
  process.env.NODE_ENV === 'development'
    ? [
      new Console({
        level: 'debug',
        format: format.combine(format.colorize(), format.simple()),
      }),
    ]
    : process.env.NODE_ENV === 'production'
      ? [
        new File({
          level: 'info',
          filename: logsFolder('info'),
          format: format.combine(format.timestamp(), format.json()),
        }),
        new File({
          level: 'error',
          filename: logsFolder('error'),
          format: format.combine(format.timestamp(), format.json()),
        }),
      ]
      : [];

const logger: Logger = createLogger({
  transports,
});

export { logger };
