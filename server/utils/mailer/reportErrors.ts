import { options, transporter } from '.';
import { url } from '../../constants';

export const reportTo: string = process.env.REPORT_TO || '';

export const reportErrors = async (to: string, errorCount: number) =>
  transporter.sendMail({
    from: options.host,
    to: to,
    subject: 'New Errors Occured',
    html: `
        <h2>You have ${errorCount} new errors on ${url}</h2>
    `,
  });
