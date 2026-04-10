"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = exports.contactSchema = void 0;
const zod_1 = require("zod");
exports.contactSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Name is required').max(100),
        email: zod_1.z.string().email('Invalid email address'),
        company: zod_1.z.string().min(1, 'Company is required'),
        market: zod_1.z.string().min(1, 'Market is required'),
        stage: zod_1.z.string().min(1, 'Business stage is required'),
        goal: zod_1.z.string().min(1, 'Goal is required')
    })
});
const validateRequest = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
            });
            return next();
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
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
exports.validateRequest = validateRequest;
