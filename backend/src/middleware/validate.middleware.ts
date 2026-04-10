import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export const contactSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required').max(100),
    email: z.string().email('Invalid email address'),
    company: z.string().min(1, 'Company is required'),
    market: z.string().min(1, 'Market is required'),
    stage: z.string().min(1, 'Business stage is required'),
    goal: z.string().min(1, 'Goal is required')
  })
});

export const validateRequest = (schema: z.ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          error: 'Validation failed',
          details: error.issues
        });
      }
      return next(error);
    }
  };
};
