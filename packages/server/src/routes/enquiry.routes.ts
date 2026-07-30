import { Router } from 'express';
import { createEnquirySchema, enquiryQuerySchema } from '../infrastructure/schemas/index.js';

import auth from '../middleware/auth.js';
import enquiry from '../controllers/enquiry.controller.js';
import validate from '../middleware/validate.js';
import paginate from '../middleware/paginate.js';

const router = Router();

router.post('/', [validate(createEnquirySchema)], enquiry.create);
router.get('/stats', [auth], enquiry.stats);
router.get('/', [auth, paginate, validate(enquiryQuerySchema, 'query')], enquiry.findAll);
router.get('/:id', [auth], enquiry.findById);
router.delete('/:id', [auth], enquiry.remove);

export default router;
