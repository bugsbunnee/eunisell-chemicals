import { Router } from 'express';
import { createSubscriptionSchema } from '../infrastructure/schemas/index.js';

import subscription from '../controllers/subscription.controller.js';
import validate from '../middleware/validate.js';

const router = Router();

router.post('/', [validate(createSubscriptionSchema)], subscription.create);

export default router;
