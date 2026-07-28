import { Resend, type CreateEmailOptions } from 'resend';

class EmailService {
  private resend: Resend;

  constructor() {
    this.resend = new Resend(Bun.env.RESEND_API_KEY);
  }

  sendMail(options: CreateEmailOptions) {
    return this.resend.emails.send(options);
  }
}

export default new EmailService();
