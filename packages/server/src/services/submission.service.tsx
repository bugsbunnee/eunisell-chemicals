import React from 'react';
import SubmissionEmail, { type SubmissionField } from '../infrastructure/emails/submission';
import emailService from './email.service';

import { render } from '@react-email/components';
import { ADMIN_EMAIL } from '../infrastructure/utils/constants';

interface Submission {
  subject: string;
  heading: string;
  subtitle: string;
  fields: SubmissionField[];
  message?: SubmissionField;
}

class SubmissionService {
  async sendSubmissionMail({ subject, ...content }: Submission) {
    const html = await render(React.createElement(SubmissionEmail, content));

    await emailService.sendMail({
      from: Bun.env.EMAIL_USER!,
      to: ADMIN_EMAIL,
      subject,
      html,
    });
  }
}

export default new SubmissionService();
