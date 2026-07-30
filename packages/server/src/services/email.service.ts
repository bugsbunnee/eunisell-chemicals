import { Resend, type CreateEmailOptions } from 'resend';

type SendMailOptions = Omit<CreateEmailOptions, 'from'>;

class EmailService {
  private resend: Resend;

  constructor() {
    this.resend = new Resend(Bun.env.RESEND_API_KEY);
  }

  sendMail(options: SendMailOptions) {
    const updatedOptions = {
      ...options,
      from: `${Bun.env.EMAIL_NAME} <${Bun.env.EMAIL_USER}>`,
    } as CreateEmailOptions;

    return this.resend.emails.send(updatedOptions);
  }
}

export default new EmailService();
