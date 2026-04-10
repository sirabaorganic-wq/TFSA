"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mail_config_1 = require("./config/mail.config");
const contact_routes_1 = __importDefault(require("./routes/contact.routes"));
const error_middleware_1 = require("./middleware/error.middleware");
const mail_service_1 = require("./services/mail.service");
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: mail_config_1.config.frontendUrl,
    optionsSuccessStatus: 200
}));
// Routes
app.use('/api/contact', contact_routes_1.default);
// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'TFSA Backend is running' });
});
// Error handling middleware
app.use(error_middleware_1.errorHandler);
// Start server
app.listen(mail_config_1.config.port, async () => {
    console.log(`🚀 Server running on port ${mail_config_1.config.port}`);
    // Verify email transporter on startup
    console.log('Verifying SMTP connection...');
    await mail_service_1.mailService.verifyConnection();
});
