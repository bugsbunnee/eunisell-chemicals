import { Router } from 'express';
import { createApplicationSchema, updateApplicationStatusSchema } from '../infrastructure/schemas';

import auth from '../middleware/auth';
import application from '../controllers/application.controller';
import validate from '../middleware/validate';

const router = Router();

router.get('/stats', [auth], application.stats);
router.post('/', [validate(createApplicationSchema)], application.create);
router.patch('/:id/status', [auth, validate(updateApplicationStatusSchema)], application.updateStatus);

export default router;
