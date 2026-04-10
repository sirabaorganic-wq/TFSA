import dotenv from 'dotenv';
import path from 'path';

// Load .env.local if present, else .env
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

export const config = {
  port: process.env.PORT || 5000,
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
  mail: {
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '465', 10),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER || '',
      pass: process.env.EMAIL_PASS || '',
    },
    from: process.env.EMAIL_FROM || '',
    to: process.env.EMAIL_TO || '',
  }
};
