import { Router } from 'express';
import auth from '../middleware/auth';
import activity from '../controllers/activity.controller';

const router = Router();

router.get('/', [auth], activity.findRecent);

export default router;
