
import { NextResponse } from 'next/server';
import { z } from 'zod';

// ============================================
// 1. VALIDATION SCHEMAS
// ============================================

const emailSchema = z
  .string()
  .trim()
  .email('Invalid email address')
  .max(254);

const partnerSchema = z.object({
  formType: z.literal('partner'),
  organizationName: z.string().trim().min(1).max(200),
  contactPerson: z.string().trim().min(1).max(100),
  email: emailSchema,
  phone: z.string().trim().min(5).max(30),
  partnershipType: z.string().trim().min(1).max(100),
  message: z.string().trim().min(1).max(5000),
});

const joinSchema = z.object({
  formType: z.literal('join'),
  fullName: z.string().trim().min(1).max(100),
  email: emailSchema,
  phone: z.string().trim().min(5).max(30),
  interestArea: z.string().trim().min(1).max(100),
  location: z.string().trim().min(1).max(200),
  resumeLink: z
    .string()
    .trim()
    .url('Invalid resume URL')
    .max(2048),
  message: z.string().trim().min(1).max(5000),
});

const formSchema = z.discriminatedUnion('formType', [
  partnerSchema,
  joinSchema,
]);

type FormData = z.infer<typeof formSchema>;

// ============================================
// 2. HTML ESCAPING
// ============================================

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ============================================
// 3. SAFE URL VALIDATION
// ============================================

function getSafeUrl(value: string): string | null {
  try {
    const url = new URL(value);

    if (!['http:', 'https:'].includes(url.protocol)) {
      return null;
    }

    return escapeHtml(url.toString());
  } catch {
    return null;
  }
}

// ============================================
// 4. POST API ROUTE
// ============================================

export async function POST(request: Request) {
  try {
    // ----------------------------------------
    // Parse request body
    // ----------------------------------------

    const body: unknown = await request.json();

    // ----------------------------------------
    // Validate form data
    // ----------------------------------------

    const result = formSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: 'Invalid form data',
          details: result.error.flatten(),
        },
        { status: 400 }
      );
    }

    const data: FormData = result.data;

    // ----------------------------------------
    // Check Resend API key
    // ----------------------------------------

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL ;

    if (!resendApiKey) {
      console.error('RESEND_API_KEY environment variable is missing');

      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    let subject = '';
    let html = '';
    let replyTo = '';

    // ========================================
    // 5. PARTNER FORM
    // ========================================

    if (data.formType === 'partner') {
      const organizationName = escapeHtml(data.organizationName);
      const contactPerson = escapeHtml(data.contactPerson);
      const email = escapeHtml(data.email);
      const phone = escapeHtml(data.phone);
      const partnershipType = escapeHtml(data.partnershipType);
      const message = escapeHtml(data.message);

      subject = `New Partnership Enquiry from ${data.organizationName}`;

      replyTo = data.email;

      html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Partnership Enquiry</title>
</head>
<body>
  <h3>New Partnership Enquiry</h3>

  <p>
    <strong>Organization Name:</strong>
    ${organizationName}
  </p>

  <p>
    <strong>Contact Person:</strong>
    ${contactPerson}
  </p>

  <p>
    <strong>Email:</strong>
    ${email}
  </p>

  <p>
    <strong>Phone:</strong>
    ${phone}
  </p>

  <p>
    <strong>Types of Partnership:</strong>
    ${partnershipType}
  </p>

  <p><strong>Message:</strong></p>
  <p>${message.replace(/\n/g, '<br>')}</p>
</body>
</html>
      `.trim();
    }

    // ========================================
    // 6. JOIN FORM
    // ========================================

    else if (data.formType === 'join') {
      const fullName = escapeHtml(data.fullName);
      const email = escapeHtml(data.email);
      const phone = escapeHtml(data.phone);
      const interestArea = escapeHtml(data.interestArea);
      const location = escapeHtml(data.location);
      const message = escapeHtml(data.message);

      const safeResumeUrl = getSafeUrl(data.resumeLink);

      subject = `New Team Application from ${data.fullName}`;

      replyTo = data.email;

      html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Team Application</title>
</head>
<body>
  <h3>New Team Application</h3>

  <p>
    <strong>Full Name:</strong>
    ${fullName}
  </p>

  <p>
    <strong>Email:</strong>
    ${email}
  </p>

  <p>
    <strong>Phone:</strong>
    ${phone}
  </p>

  <p>
    <strong>Area of Interest:</strong>
    ${interestArea}
  </p>

  <p>
    <strong>Current Location:</strong>
    ${location}
  </p>

  <p>
    <strong>Resume Link:</strong>
    ${
      safeResumeUrl
        ? `<a href="${safeResumeUrl}" target="_blank" rel="noopener noreferrer">View Resume</a>`
        : 'Invalid or missing URL'
    }
  </p>

  <p><strong>Message:</strong></p>
  <p>${message.replace(/\n/g, '<br>')}</p>
</body>
</html>
      `.trim();
    }

    // ========================================
    // 7. SEND EMAIL VIA RESEND API
    // ========================================

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Roots Foundation <onboarding@resend.dev>',
        to: [toEmail],
        reply_to: replyTo,
        subject,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      console.error('Resend API error:', errorData);

      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // ========================================
    // 8. SUCCESS RESPONSE
    // ========================================

    return NextResponse.json(
      {
        message: 'Email sent successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    return NextResponse.json(
      {
        error: 'Failed to send email',
      },
      { status: 500 }
    );
  }
}