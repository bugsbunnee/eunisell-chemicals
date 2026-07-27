import { HttpStatusCode } from 'axios';
import submissionService from '../services/submission.service';

import type { Request, Response } from 'express';
import type { ICreateApplication } from '../infrastructure/schemas';

class ApplicationController {
  async create(req: Request, res: Response) {
    const application = req.body as ICreateApplication;

    await submissionService.sendSubmissionMail({
      subject: `New Job Application: ${application.firstName} ${application.lastName} — ${application.jobTitle}`,
      heading: 'Job Application Received',
      subtitle: 'A new application has been submitted through the careers portal.',
      fields: [
        { label: 'Position', value: application.jobTitle },
        { label: 'First Name', value: application.firstName },
        { label: 'Last Name', value: application.lastName },
        { label: 'Email', value: application.email },
        { label: 'Phone', value: application.phone },
        { label: 'Experience', value: `${application.experience} Years` },
      ],
      message: { label: 'Professional Motivation', value: application.motivation },
    });

    res.status(HttpStatusCode.Created).json({ message: 'Application received.' });
  }
}

export default new ApplicationController();
