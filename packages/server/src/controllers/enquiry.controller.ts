import { HttpStatusCode } from 'axios';
import { enquiryRepository } from '../repositories/enquiry.repository';
import { enquiryQuerySchema } from '../infrastructure/schemas';

import type { Request, Response } from 'express';
import enquiryService from '../services/enquiry.service';
import { ActivityAction, ActivityCategory, activityRepository } from '../repositories/activity.repository';

class EnquiryController {
  async create(req: Request, res: Response) {
    const enquiry = await enquiryRepository.create(req.body);

    await Promise.all([
      enquiryService.sendEnquiryMail(enquiry),

      activityRepository.recordActivity({
        action: ActivityAction.NewEnquiry,
        category: ActivityCategory.Enquiry,
        adminId: '',
        description: 'New enquiry submitted by user ' + enquiry.fullName,
      }),
    ]);

    res.status(HttpStatusCode.Created).json(enquiry);
  }

  async stats(_req: Request, res: Response) {
    const data = await enquiryRepository.findStats();
    return res.json(data);
  }

  async findAll(req: Request, res: Response) {
    const query = enquiryQuerySchema.parse(req.query);

    const { data, total } = await enquiryRepository.findAll(req.pagination, query);
    const { page, limit } = req.pagination;

    return res.json({
      data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params as { id: string };

    const enquiry = await enquiryRepository.findById(id);
    if (!enquiry) return res.status(HttpStatusCode.NotFound).json({ error: 'Enquiry not found' });

    return res.json(enquiry);
  }

  async remove(req: Request, res: Response) {
    const params = req.params as { id: string };
    const existing = await enquiryRepository.findById(params.id);

    if (!existing) return res.status(HttpStatusCode.NotFound).json({ error: 'Enquiry not found' });
    await enquiryRepository.remove(params.id);

    return res.status(HttpStatusCode.NoContent).send();
  }
}

export default new EnquiryController();
