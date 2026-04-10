"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitContactForm = void 0;
const mail_service_1 = require("../services/mail.service");
const submitContactForm = async (req, res, next) => {
    try {
        const data = req.body;
        // Send the notification email to business inbox
        await mail_service_1.mailService.sendContactEmail(data);
        // Optionally send the auto-responder (disabled by default or wrapped in a toggle)
        // Uncomment the following line to enable auto-responders immediately:
        // await mailService.sendAutoReply(data.email, data.name);
        res.status(200).json({ success: true, message: 'Assessment request submitted successfully.' });
    }
    catch (error) {
        next(error);
    }
};
exports.submitContactForm = submitContactForm;
