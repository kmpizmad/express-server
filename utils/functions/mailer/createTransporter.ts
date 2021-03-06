import { createTransport } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { logger } from '../../../vendors';

export const createTransporter = (): {
  transporter: Mail;
  options: SMTPTransport.Options;
} => {
  const host = process.env.MAILER_HOST;
  const port = process.env.MAILER_PORT;
  const secure = process.env.MAILER_SECURITY;
  const auth = {
    user: process.env.MAILER_ACCOUNT,
    pass: process.env.MAILER_ACCOUNT_PASSWORD,
  };

  if (!(!!host && !!port && !!secure && !!auth.user && !!auth.pass)) {
    logger.error('Missing mailer credentials!');
    throw new Error();
  }

  const options: SMTPTransport.Options = {
    host: host,
    port: parseInt(port),
    secure: /^\s*(true|1|on|yes|y)\s*$/i.test(secure),
    auth: {
      user: auth.user,
      pass: auth.pass,
    },
  };

  const transporter: Mail = createTransport(options);

  return { transporter, options };
};
