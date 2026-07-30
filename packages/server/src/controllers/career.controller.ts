import { HttpStatusCode } from 'axios';

import type { Request, Response } from 'express';

import { careerQuerySchema, createCareerOpeningSchema, updateCareerOpeningSchema } from '../infrastructure/schemas';
import { careerRepository } from '../repositories/career.repository';
import { applicationRepository } from '../repositories/application.repository';
import { ActivityAction, ActivityCategory, activityRepository } from '../repositories/activity.repository';

class CareerController {
  async create(req: Request, res: Response) {
    const data = createCareerOpeningSchema.parse(req.body);
    const opening = await careerRepository.create(data);

    await activityRepository.recordActivity({
      action: ActivityAction.NewCareerOpening,
      category: ActivityCategory.Careers,
      adminId: req.admin?.id,
      description: `Created career opening "${opening.title}"`,
    });

    return res.status(HttpStatusCode.Created).json(opening);
  }

  async findAll(req: Request, res: Response) {
    const filters = careerQuerySchema.parse(req.query);
    const { data, total } = await careerRepository.findAll(req.pagination, filters);
    const { page, limit } = req.pagination;

    return res.json({
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    });
  }

  async stats(_: Request, res: Response) {
    const data = await careerRepository.stats();
    return res.json(data);
  }

  async activity(_: Request, res: Response) {
    const [{ draft: draftsAwaitingPublish }, rolesClosingSoon, { newThisWeek, trendPct, mostAppliedRole }] = await Promise.all([
      careerRepository.stats(),
      careerRepository.closingSoon(),
      applicationRepository.recentActivity(),
    ]);

    return res.json({ newApplicationsThisWeek: newThisWeek, applicationsTrendPct: trendPct, mostAppliedRole, rolesClosingSoon, draftsAwaitingPublish });
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params as { id: string };
    const opening = await careerRepository.findById(id);

    if (!opening) return res.status(HttpStatusCode.NotFound).json({ error: 'Career opening not found' });

    return res.json(opening);
  }

  async findBySlug(req: Request, res: Response) {
    const { slug } = req.params as { slug: string };

    const opening = await careerRepository.findBySlug(slug);
    if (!opening) return res.status(HttpStatusCode.NotFound).json({ error: 'Career opening not found' });

    return res.json(opening);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params as { id: string };
    const data = updateCareerOpeningSchema.parse(req.body);

    const existing = await careerRepository.findById(id);
    if (!existing) return res.status(HttpStatusCode.NotFound).json({ error: 'Career opening not found' });

    const opening = await careerRepository.update(id, data);

    await activityRepository.recordActivity({
      action: ActivityAction.UpdateCareerOpening,
      category: ActivityCategory.Careers,
      adminId: req.admin?.id,
      description: `Updated career opening "${opening.title}"`,
    });

    return res.json(opening);
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params as { id: string };

    const existing = await careerRepository.findById(id);
    if (!existing) return res.status(HttpStatusCode.NotFound).json({ error: 'Career opening not found' });

    await careerRepository.remove(id);

    await activityRepository.recordActivity({
      action: ActivityAction.DeleteCareerOpening,
      category: ActivityCategory.Careers,
      adminId: req.admin?.id,
      description: `Deleted career opening "${existing.title}"`,
    });

    return res.status(HttpStatusCode.NoContent).send();
  }
}

export default new CareerController();
