import React from 'react';
import EnquiryEmail from '../infrastructure/emails/enquiry.js';
import emailService from './email.service.js';

import { render } from '@react-email/components';
import { EMAILS } from '../infrastructure/utils/constants.js';

import type { Enquiry } from '../../prisma/generated/client.js';

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
      dashboardUrl: `${process.env.DASHBOARD_URL ?? 'http://localhost:3000'}/enquiries`,
    });

    const html = await render(element);

    await emailService.sendMail({
      to: EMAILS.ADMIN,
      subject: `New Enquiry: ${enquiry.fullName} — ${enquiry.company}`,
      html,
    });
  }
}

export default new EnquiryService();
