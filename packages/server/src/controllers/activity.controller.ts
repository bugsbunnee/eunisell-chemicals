import type { Request, Response } from 'express';
import { activityRepository } from '../repositories/activity.repository';

class ActivityController {
  async findRecent(req: Request, res: Response) {
    const limit = Math.min(50, parseInt(req.query.limit as string) || 10);
    const category = req.query.category as string | undefined;

    const data = await activityRepository.findRecent({ limit, category });
    return res.json(data);
  }
}

export default new ActivityController();
