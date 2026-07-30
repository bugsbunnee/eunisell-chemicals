import { HttpStatusCode } from 'axios';
import submissionService from '../services/submission.service.js';

import type { Request, Response } from 'express';
import type { ICreateSubscription } from '../infrastructure/schemas/index.js';

class SubscriptionController {
  async create(req: Request, res: Response) {
    const subscription = req.body as ICreateSubscription;

    await submissionService.sendSubmissionMail({
      subject: `New Newsletter Subscription: ${subscription.email}`,
      heading: 'Newsletter Subscription',
      subtitle: 'A new subscriber has joined the mailing list through the website.',
      fields: [
        { label: 'Email', value: subscription.email },
        { label: 'Industry', value: subscription.industry },
        { label: 'Interest', value: subscription.interest },
      ],
    });

    res.status(HttpStatusCode.Created).json({ message: 'Subscription received' });
  }
}

export default new SubscriptionController();
