import { Router } from 'express';
import { authSchema, registerSchema } from '../infrastructure/schemas';

import auth from '../controllers/auth.controller.ts';
import validate from '../middleware/validate.ts';

const router = Router();

router.post('/login', [validate(authSchema, 'body')], auth.login);
router.post('/register', [validate(registerSchema, 'body')], auth.register);

export default router;
