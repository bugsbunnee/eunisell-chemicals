import { Router } from 'express';
import { authSchema, registerSchema } from '../infrastructure/schemas';

import auth from '../controllers/auth.controller';
import validate from '../middleware/validate';

const router = Router();

router.post('/login', [validate(authSchema, 'body')], auth.login);
router.post('/register', [validate(registerSchema, 'body')], auth.register);

export default router;
