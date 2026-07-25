import { Resend } from 'resend';

export interface SendContactEmailParams {
  name: string;
  email: string;
  message: string;
}

export interface SendContactEmailResult {
  success: boolean;
  error?: string;
}

/**
 * Helper to initialize Resend SDK instance using process.env.RESEND_API_KEY
 */
function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not defined in environment variables.');
  }
  return new Resend(apiKey);
}

/**
 * Helper to resolve a valid Resend 'from' address.
 * Resend does NOT allow sending from unverified public webmail domains like @gmail.com, @yahoo.com, @outlook.com.
 * If a public webmail domain is passed in RESEND_FROM_EMAIL or if unconfigured, fallback to 'onboarding@resend.dev'.
 */
function getFromEmail(): string {
  const envFrom = (process.env.RESEND_FROM_EMAIL || '').trim();
  if (!envFrom) {
    return 'onboarding@resend.dev';
  }

  // Extract email if formatted as "Name <email@domain.com>"
  const match = envFrom.match(/<([^>]+)>/) || [null, envFrom];
  const actualEmail = match[1] || envFrom;

  const publicWebmailDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com', 'aol.com'];
  const domain = actualEmail.split('@')[1]?.toLowerCase();

  if (domain && publicWebmailDomains.includes(domain)) {
    return 'onboarding@resend.dev';
  }

  return envFrom;
}

export async function sendContactEmails(
  params: SendContactEmailParams
): Promise<SendContactEmailResult> {
  const toEmail = process.env.CONTACT_TO_EMAIL;
  if (!toEmail) {
    throw new Error('CONTACT_TO_EMAIL is not defined in environment variables.');
  }

  const resend = getResendClient();
  const timestamp = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'medium',
    timeZone: 'UTC',
  });

  const fromEmail = getFromEmail();

  // 1. Notification Email to Owner
  const notificationSubject = `New Portfolio Contact from ${params.name}`;
  const notificationText = `New Contact Form Submission:

Name: ${params.name}
Email: ${params.email}
Timestamp: ${timestamp} UTC

Message:
${params.message}`;

  const notificationHtml = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px;">
      <h2 style="color: #0f172a; margin-top: 0;">New Portfolio Contact</h2>
      <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
      <p><strong>Name:</strong> ${params.name}</p>
      <p><strong>Email:</strong> <a href="mailto:${params.email}">${params.email}</a></p>
      <p><strong>Timestamp:</strong> ${timestamp} UTC</p>
      <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-radius: 6px; border-left: 4px solid #06b6d4;">
        <h4 style="margin: 0 0 8px 0; color: #0f172a;">Message:</h4>
        <p style="margin: 0; whitespace: pre-wrap;">${params.message}</p>
      </div>
    </div>
  `;

  // 2. Auto Reply to Visitor
  const autoReplySubject = 'Thank you for contacting Manohar';
  const autoReplyText = `Hi ${params.name},

Thank you for contacting me through my portfolio.

I have received your message and will get back to you as soon as possible.

Regards,
Manohar`;

  const autoReplyHtml = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px;">
      <p>Hi ${params.name},</p>
      <p>Thank you for contacting me through my portfolio.</p>
      <p>I have received your message and will get back to you as soon as possible.</p>
      <p style="margin-top: 24px;">Regards,<br /><strong>Manohar</strong></p>
    </div>
  `;

  try {
    // Send Notification Email to Owner
    const notificationResponse = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: [toEmail],
      replyTo: params.email,
      subject: notificationSubject,
      text: notificationText,
      html: notificationHtml,
    });

    if (notificationResponse.error) {
      console.error('Error sending notification email:', notificationResponse.error);
      return {
        success: false,
        error: notificationResponse.error.message || 'Failed to send notification email.',
      };
    }

    // Try sending Auto Reply Email to visitor
    try {
      const autoReplyResponse = await resend.emails.send({
        from: `Manohar <${fromEmail}>`,
        to: [params.email],
        subject: autoReplySubject,
        text: autoReplyText,
        html: autoReplyHtml,
      });

      if (autoReplyResponse.error) {
        console.warn('Auto-reply warning (Resend domain restriction):', autoReplyResponse.error.message);
      }
    } catch (autoReplyErr) {
      console.warn('Auto-reply non-critical error:', autoReplyErr);
    }

    return { success: true };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Failed to send email via Resend.';
    console.error('Resend integration error:', err);
    return {
      success: false,
      error: errorMessage,
    };
  }
}
