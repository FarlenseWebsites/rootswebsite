
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
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
// 4. SMTP TRANSPORTER
// ============================================

const smtpPort = Number(process.env.SMTP_PORT) || 587;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: smtpPort,
  secure:
    process.env.SMTP_SECURE === 'true' ||
    smtpPort === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ============================================
// 5. POST API ROUTE
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
    // Common email configuration
    // ----------------------------------------

    const from = process.env.SMTP_FROM || process.env.SMTP_USER;
    const to = process.env.SMTP_TO || process.env.SMTP_USER;

    if (!from || !to || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP environment variables are missing');

      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    let subject = '';
    let text = '';
    let html = '';
    let replyTo = '';

    // ========================================
    // 6. PARTNER FORM
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

      text = `
New Partnership Enquiry

Organization Name: ${data.organizationName}
Contact Person: ${data.contactPerson}
Email: ${data.email}
Phone: ${data.phone}
Types of Partnership: ${data.partnershipType}
Message: ${data.message}
      `.trim();

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
    // 7. JOIN FORM
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

      text = `
New Team Application

Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Area of Interest: ${data.interestArea}
Current Location: ${data.location}
Resume Link: ${data.resumeLink}
Message: ${data.message}
      `.trim();

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
    // 8. SEND EMAIL
    // ========================================

    const mailOptions = {
      from,
      to,
      replyTo,
      subject,
      text,
      html,
    };

    await transporter.sendMail(mailOptions);

    // ========================================
    // 9. SUCCESS RESPONSE
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