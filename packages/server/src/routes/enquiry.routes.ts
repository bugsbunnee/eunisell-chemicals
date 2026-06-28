import { Router } from 'express';
import { createEnquirySchema, enquiryQuerySchema } from '../infrastructure/schemas';

import auth from '../middleware/auth';
import enquiry from '../controllers/enquiry.controller';
import validate from '../middleware/validate';
import paginate from '../middleware/paginate';

const router = Router();

router.post('/', [validate(createEnquirySchema)], enquiry.create);
router.get('/stats', [auth], enquiry.stats);
router.get('/', [auth, paginate, validate(enquiryQuerySchema, 'query')], enquiry.findAll);
router.get('/:id', [auth], enquiry.findById);
router.delete('/:id', [auth], enquiry.remove);

export default router;
