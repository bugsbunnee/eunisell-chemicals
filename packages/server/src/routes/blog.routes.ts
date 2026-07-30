import { Router } from 'express';

import auth from '../middleware/auth.js';
import blog from '../controllers/blog.controller.js';
import paginate from '../middleware/paginate.js';

const router = Router();

router.get('/stats', [auth], blog.stats);
router.get('/', [paginate], blog.findAll);
router.get('/:id', blog.findById);
router.post('/', [auth], blog.create);
router.put('/:id', [auth], blog.update);
router.delete('/:id', [auth], blog.remove);

export default router;
