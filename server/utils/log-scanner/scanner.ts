import { createReadStream } from 'fs';
import { scanPeriod } from '../../constants';
import { redis } from '../../redis';
import { logger, logsFolder } from '../../vendors';
import { reportErrors, reportTo } from '../mailer';

export const scanner = () => {
  const fileStream = createReadStream(logsFolder('error-logs'));

  let count: number = 0;
  fileStream
    .on('data', chunk => {
      for (let i = 0; i < chunk.length; ++i) {
        if (chunk[i] == 10) count++;
      }
    })
    .on('end', () => {
      redis.get('errorCount', (err, data) => {
        if (err) {
          logger.error('LogScanner failed');
        } else {
          if (data !== null) {
            const diff: number = count - parseInt(data);
            reportErrors(reportTo, diff);
          }
        }
      });
      redis.setex('errorCount', scanPeriod, count.toString());
    });
};
