import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { formType, ...fields } = data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true' || Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let subject = '';
    let text = '';
    let html = '';

    if (formType === 'partner') {
      subject = `New Partnership Enquiry from ${fields.organizationName}`;
      text = `
Organization Name: ${fields.organizationName}
Contact Person: ${fields.contactPerson}
Email: ${fields.email}
Phone: ${fields.phone}
Types of Partnership: ${fields.partnershipType}
Message: ${fields.message}
      `;
      html = `
        <h3>New Partnership Enquiry</h3>
        <p><strong>Organization Name:</strong> ${fields.organizationName}</p>
        <p><strong>Contact Person:</strong> ${fields.contactPerson}</p>
        <p><strong>Email:</strong> ${fields.email}</p>
        <p><strong>Phone:</strong> ${fields.phone}</p>
        <p><strong>Types of Partnership:</strong> ${fields.partnershipType}</p>
        <p><strong>Message:</strong></p>
        <p>${fields.message}</p>
      `;
    } else if (formType === 'join') {
      subject = `New Team Application from ${fields.fullName}`;
      text = `
Full Name: ${fields.fullName}
Email: ${fields.email}
Phone: ${fields.phone}
Area of Interest: ${fields.interestArea}
Current Location: ${fields.location}
Resume Link: ${fields.resumeLink}
Message: ${fields.message}
      `;
      html = `
        <h3>New Team Application</h3>
        <p><strong>Full Name:</strong> ${fields.fullName}</p>
        <p><strong>Email:</strong> ${fields.email}</p>
        <p><strong>Phone:</strong> ${fields.phone}</p>
        <p><strong>Area of Interest:</strong> ${fields.interestArea}</p>
        <p><strong>Current Location:</strong> ${fields.location}</p>
        <p><strong>Resume Link:</strong> <a href="${fields.resumeLink}">${fields.resumeLink}</a></p>
        <p><strong>Message:</strong></p>
        <p>${fields.message}</p>
      `;
    } else {
      return NextResponse.json({ error: 'Invalid form type' }, { status: 400 });
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || process.env.SMTP_USER, // Fallback to user if TO is not set
      replyTo: fields.email,
      subject,
      text,
      html,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
