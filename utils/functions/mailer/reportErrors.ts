import { url } from '../../../src/server/constants';
import { createTransporter } from './createTransporter';

export const reportErrors = async (
  to: string,
  errorCount: number
): Promise<any> => {
  const { transporter, options } = createTransporter();

  transporter.sendMail({
    from: options.host,
    to: to,
    subject: 'New Errors Occured',
    html: `
        <h2>You have ${errorCount} new errors on ${url}</h2>
    `,
  });
};
