import { Router } from 'express';

import auth from '../middleware/auth';
import career from '../controllers/career.controller';
import paginate from '../middleware/paginate';

const router = Router();

router.get('/stats', [auth], career.stats);
router.get('/activity', [auth], career.activity);
router.get('/slug/:slug', career.findBySlug);
router.get('/', [paginate], career.findAll);
router.get('/:id', career.findById);
router.post('/', [auth], career.create);
router.put('/:id', [auth], career.update);
router.delete('/:id', [auth], career.remove);

export default router;
