import { Router } from 'express';
import { submitContactForm } from '../controllers/contact.controller';
import { validateRequest, contactSchema } from '../middleware/validate.middleware';
import { contactRateLimiter } from '../middleware/rateLimit.middleware';

const router = Router();

// POST /api/contact
router.post(
  '/',
  contactRateLimiter,
  validateRequest(contactSchema),
  submitContactForm
);

export default router;
