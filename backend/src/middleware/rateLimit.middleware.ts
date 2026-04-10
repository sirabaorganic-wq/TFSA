import rateLimit from 'express-rate-limit';

// Limit each IP to 5 requests per 15 minutes for contact forms
export const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 5, 
  message: {
    success: false,
    error: 'Too many requests from this IP, please try again after 15 minutes'
  },
  standardHeaders: true, 
  legacyHeaders: false, 
});
