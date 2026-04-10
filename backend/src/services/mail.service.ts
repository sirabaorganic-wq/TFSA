import nodemailer from 'nodemailer';
import { config } from '../config/mail.config';

class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: config.mail.host,
      port: config.mail.port,
      secure: config.mail.secure,
      auth: config.mail.auth,
    });
  }

  public async verifyConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      console.log('✅ SMTP connection verified successfully.');
      return true;
    } catch (error) {
      console.error('❌ SMTP connection verification failed:', error);
      return false;
    }
  }

  public async sendContactEmail(data: any): Promise<void> {
    const htmlContent = `
      <h2>New Strategic Consultation Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Current Market:</strong> ${data.market}</p>
      <p><strong>Business Stage:</strong> ${data.stage}</p>
      <p><strong>Primary Goal:</strong> <br/>${data.goal}</p>
      <hr />
      <p><small>Submitted at: ${new Date().toISOString()}</small></p>
    `;

    await this.transporter.sendMail({
      from: config.mail.from,
      to: config.mail.to,
      subject: `New India Entry Assessment: ${data.company} - ${data.name}`,
      html: htmlContent,
      replyTo: data.email,
    });
  }

  public async sendAutoReply(email: string, name: string): Promise<void> {
    const htmlContent = `
      <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #B68817;">Request Received</h2>
        <p>Dear ${name},</p>
        <p>Thank you for submitting your India Entry Assessment request to TFSA Global.</p>
        <p>Our team has received your details and we are currently evaluating your structural alignment. We will review your submission within the next 48 hours.</p>
        <p>If viable, we will schedule a Phase 1 Consultation to map out the architectural gaps in your expansion model.</p>
        <p>Best regards,<br/>TFSA Global Team</p>
        <br/>
        <p style="font-size: 0.8em; color: #777;">This is an automated message, please do not reply directly to this email.</p>
      </div>
    `;

    await this.transporter.sendMail({
      from: config.mail.from,
      to: email,
      subject: 'TFSA Global: India Entry Assessment Received',
      html: htmlContent,
    });
  }
}

export const mailService = new MailService();
