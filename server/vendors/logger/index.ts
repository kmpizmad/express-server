import { join } from 'path';
import { createLogger, format, Logger, transports } from 'winston';
import { today } from '../../constants';

const logsFolder = (filename: string) => join('logs', today, filename + '.log');

const logger: Logger = createLogger({
  transports: [
    new transports.File({
      level: 'info',
      filename: logsFolder('info-logs'),
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.File({
      level: 'error',
      filename: logsFolder('error-logs'),
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

const consoleTransport =
  process.env.NODE_ENV === 'development'
    ? new transports.Console({
        level: 'debug',
        format: format.combine(format.colorize(), format.simple()),
      })
    : null;

if (!!consoleTransport) {
  logger.add(consoleTransport);
}

export default logger;
