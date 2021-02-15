import { join } from 'path';
import { createLogger, format, Logger } from 'winston';
import { Console, File } from 'winston/lib/winston/transports';
import { today } from '../../constants';
import { nodeEnvIs } from '../../utils';

export const logsFolder = (filename: string) =>
  join('logs', today, filename + '.log');

const transports = nodeEnvIs('dev')
  ? [
      new Console({
        level: 'debug',
        format: format.combine(format.colorize(), format.simple()),
      }),
    ]
  : nodeEnvIs('prod')
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
