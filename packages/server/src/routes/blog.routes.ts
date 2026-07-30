import { Router } from 'express';

import auth from '../middleware/auth';
import blog from '../controllers/blog.controller';
import paginate from '../middleware/paginate';

const router = Router();

router.get('/stats', [auth], blog.stats);
router.get('/', [paginate], blog.findAll);
router.get('/:id', blog.findById);
router.post('/', [auth], blog.create);
router.put('/:id', [auth], blog.update);
router.delete('/:id', [auth], blog.remove);

export default router;
