import { Router } from 'express';
import { createApplicationSchema } from '../infrastructure/schemas';

import application from '../controllers/application.controller';
import validate from '../middleware/validate';

const router = Router();

router.post('/', [validate(createApplicationSchema)], application.create);

export default router;
