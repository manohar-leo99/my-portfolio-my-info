import { NextRequest, NextResponse } from 'next/server';
import { validateContactForm } from '@/lib/validation';
import { checkRateLimit } from '@/lib/rate-limit';
import { sendContactEmails } from '@/lib/resend';

export async function POST(request: NextRequest) {
  try {
    // 1. IP Rate Limiting
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = (forwardedFor ? forwardedFor.split(',')[0] : realIp) || '127.0.0.1';

    const rateLimit = checkRateLimit(clientIp, { limit: 5, windowMs: 15 * 60 * 1000 });
    if (!rateLimit.isAllowed) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many contact requests from your IP address. Please try again later.',
        },
        { status: 429 }
      );
    }

    // 2. Parse JSON Request Body
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { success: false, error: 'Invalid request body format.' },
        { status: 400 }
      );
    }

    // 3. Honeypot Check (Spam Protection)
    if (body.honeypot && String(body.honeypot).trim() !== '') {
      // Reject bot submission silently or with bad request
      return NextResponse.json(
        { success: false, error: 'Submission rejected.' },
        { status: 400 }
      );
    }

    // 4. Validate and Sanitize Form Inputs
    const validation = validateContactForm(body);
    if (!validation.isValid || !validation.sanitizedData) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed.',
          details: validation.errors,
        },
        { status: 400 }
      );
    }

    // 5. Send Emails via Resend
    const result = await sendContactEmails(validation.sanitizedData);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error || 'Failed to send message. Please try again later.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully!',
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('API /api/contact unexpected error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
