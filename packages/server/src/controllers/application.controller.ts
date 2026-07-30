import { HttpStatusCode } from 'axios';
import { applicationRepository } from '../repositories/application.repository.js';
import { ActivityAction, ActivityCategory, activityRepository } from '../repositories/activity.repository.js';

import submissionService from '../services/submission.service.js';

import type { Request, Response } from 'express';
import type { ICreateApplication, IUpdateApplicationStatus } from '../infrastructure/schemas/index.js';

class ApplicationController {
  async create(req: Request, res: Response) {
    const application = req.body as ICreateApplication;

    await Promise.all([
      applicationRepository.create(application),

      submissionService.sendSubmissionMail({
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
      }),
    ]);

    res.status(HttpStatusCode.Created).json({ message: 'Application received.' });
  }

  async stats(_: Request, res: Response) {
    const data = await applicationRepository.stats();
    return res.json(data);
  }

  async updateStatus(req: Request, res: Response) {
    const { id } = req.params as { id: string };
    const { status } = req.body as IUpdateApplicationStatus;

    const existing = await applicationRepository.findById(id);
    if (!existing) return res.status(HttpStatusCode.NotFound).json({ error: 'Application not found' });

    const application = await applicationRepository.updateStatus(id, status);

    await activityRepository.recordActivity({
      action: ActivityAction.UpdateApplicationStatus,
      category: ActivityCategory.Applications,
      adminId: req.admin?.id,
      description: `Moved application from ${application.firstName} ${application.lastName} to ${status}`,
    });

    return res.json(application);
  }
}

export default new ApplicationController();
