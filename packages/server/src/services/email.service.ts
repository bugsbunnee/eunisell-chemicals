import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
}

class EmailService {
  private readonly transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo, SMTPTransport.Options>;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: Bun.env.EMAIL_HOST,
      port: Number(Bun.env.EMAIL_PORT) || 587,
      secure: Bun.env.EMAIL_SECURE === 'true',
      auth: {
        user: Bun.env.EMAIL_USER,
        pass: Bun.env.EMAIL_PASS,
      },
    });
  }

  sendMail(options: MailOptions) {
    return this.transporter.sendMail(options);
  }
}

export default new EmailService();
