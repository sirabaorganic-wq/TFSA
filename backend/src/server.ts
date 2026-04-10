import express from 'express';
import cors from 'cors';
import { config } from './config/mail.config';
import contactRoutes from './routes/contact.routes';
import { errorHandler } from './middleware/error.middleware';
import { mailService } from './services/mail.service';

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: config.frontendUrl,
  optionsSuccessStatus: 200
}));

// Routes
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'TFSA Backend is running' });
});

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(config.port, async () => {
  console.log(`🚀 Server running on port ${config.port}`);
  
  // Verify email transporter on startup
  console.log('Verifying SMTP connection...');
  await mailService.verifyConnection();
});
