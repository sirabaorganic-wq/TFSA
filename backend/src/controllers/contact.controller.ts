import { Request, Response, NextFunction } from 'express';
import { mailService } from '../services/mail.service';

export const submitContactForm = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = req.body;

    // Send the notification email to business inbox
    await mailService.sendContactEmail(data);

    // Optionally send the auto-responder (disabled by default or wrapped in a toggle)
    // Uncomment the following line to enable auto-responders immediately:
    // await mailService.sendAutoReply(data.email, data.name);

    res.status(200).json({ success: true, message: 'Assessment request submitted successfully.' });
  } catch (error) {
    next(error);
  }
};
