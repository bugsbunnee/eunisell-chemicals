import { Router } from 'express';
import auth from '../middleware/auth.js';
import activity from '../controllers/activity.controller.js';

const router = Router();

router.get('/', [auth], activity.findRecent);

export default router;
