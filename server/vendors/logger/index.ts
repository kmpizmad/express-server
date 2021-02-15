import { join } from 'path';
import { createLogger, format, Logger } from 'winston';
import { Console, File } from 'winston/lib/winston/transports';
import { today } from '../../constants';

const logsFolder = (filename: string) => join('logs', today, filename + '.log');

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
          filename: logsFolder('info-logs'),
          format: format.combine(format.timestamp(), format.json()),
        }),
        new File({
          level: 'error',
          filename: logsFolder('error-logs'),
          format: format.combine(format.timestamp(), format.json()),
        }),
      ]
    : [];

const logger: Logger = createLogger({
  transports,
});

export default logger;
