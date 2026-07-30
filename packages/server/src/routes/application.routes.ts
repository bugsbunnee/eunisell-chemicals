import { Router } from 'express';
import { createApplicationSchema, updateApplicationStatusSchema } from '../infrastructure/schemas/index.js';

import auth from '../middleware/auth.js';
import application from '../controllers/application.controller.js';
import validate from '../middleware/validate.js';

const router = Router();

router.get('/stats', [auth], application.stats);
router.post('/', [validate(createApplicationSchema)], application.create);
router.patch('/:id/status', [auth, validate(updateApplicationStatusSchema)], application.updateStatus);

export default router;
