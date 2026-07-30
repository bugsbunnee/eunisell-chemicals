import { Router } from 'express';
import { createSubscriptionSchema } from '../infrastructure/schemas';

import subscription from '../controllers/subscription.controller';
import validate from '../middleware/validate';

const router = Router();

router.post('/', [validate(createSubscriptionSchema)], subscription.create);

export default router;
