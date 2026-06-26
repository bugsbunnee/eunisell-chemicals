import { Router } from 'express';
import { authSchema } from '../infrastructure/utils/schema.ts';

import auth from '../controllers/auth.controller.ts';
import validate from '../middleware/validate.ts';

const router = Router();

router.post('/login', [validate(authSchema, 'body')], auth.login);

export default router;
