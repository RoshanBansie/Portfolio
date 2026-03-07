import React from 'react';
import { Resend } from 'resend';
import ContactMail from '@/templates/ContactMail';
import { render } from '@react-email/components';
import type { ContactFormData } from '@/app/types';

export async function POST(req: Request) {
  const { fullName, email, subject, message }: ContactFormData = await req.json()
  if (!fullName || !email || !subject || !message) {
    throw new Error("One of the input field data is undefined")
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const DOMAIN = process.env.DOMAIN
  const EMAIL = process.env.EMAIL
  
  const resend = new Resend(RESEND_API_KEY)
  try {
    const sender = `Contact <info@${DOMAIN}>`
    const emailHtml = await render(React.createElement(ContactMail, {
        fullName, email, subject, message
    }))
    const { data, error } = await resend.emails.send({
      from: sender,
      to: [EMAIL!],
      subject: subject,
      html: emailHtml,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}