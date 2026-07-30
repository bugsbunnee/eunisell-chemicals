import React from 'react';
import SubmissionEmail, { type SubmissionField } from '../infrastructure/emails/submission.js';
import emailService from './email.service.js';

import { render } from '@react-email/components';
import { EMAILS } from '../infrastructure/utils/constants.js';

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
      to: EMAILS.HR,
      subject,
      html,
    });
  }
}

export default new SubmissionService();
