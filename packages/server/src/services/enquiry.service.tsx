import React from 'react';
import EnquiryEmail from '../infrastructure/emails/enquiry';
import emailService from './email.service';

import { render } from '@react-email/components';
import { ADMIN_EMAIL } from '../infrastructure/utils/constants';

import type { Enquiry } from '../../prisma/generated/client';

class EnquiryService {
  async sendEnquiryMail(enquiry: Enquiry) {
    const element = React.createElement(EnquiryEmail, {
      fullName: enquiry.fullName,
      company: enquiry.company,
      jobTitle: enquiry.jobTitle ?? undefined,
      email: enquiry.email,
      phone: enquiry.phone,
      country: enquiry.country,
      industry: enquiry.industry,
      enquiryType: enquiry.enquiryType,
      solutionArea: enquiry.solutionArea,
      message: enquiry.message,
      referenceId: enquiry.id,
      dashboardUrl: `${Bun.env.DASHBOARD_URL ?? 'http://localhost:3000'}/enquiries`,
    });

    const html = await render(element);

    await emailService.sendMail({
      from: Bun.env.EMAIL_USER!,
      to: ADMIN_EMAIL,
      subject: `New Enquiry: ${enquiry.fullName} — ${enquiry.company}`,
      html,
    });
  }
}

export default new EnquiryService();
