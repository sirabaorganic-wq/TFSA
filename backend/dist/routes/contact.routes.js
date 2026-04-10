"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contact_controller_1 = require("../controllers/contact.controller");
const validate_middleware_1 = require("../middleware/validate.middleware");
const rateLimit_middleware_1 = require("../middleware/rateLimit.middleware");
const router = (0, express_1.Router)();
// POST /api/contact
router.post('/', rateLimit_middleware_1.contactRateLimiter, (0, validate_middleware_1.validateRequest)(validate_middleware_1.contactSchema), contact_controller_1.submitContactForm);
exports.default = router;
