import { createReadStream } from 'fs';
import { scanPeriod } from '../../../src/server';
import redis from '../../../src/redis-server';
import { logger, logsFolder } from '../../../vendors';
import { reportErrors } from '../mailer';

export const logScanner = (): void => {
  const fileStream = createReadStream(logsFolder('error'));

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
            reportErrors(process.env.REPORT_TO || '', diff);
          }
        }
      });
      redis.setex('errorCount', scanPeriod, count.toString());
    });
};
