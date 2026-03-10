// Libraries
import React from 'react';
import { Resend } from 'resend';
import { render } from '@react-email/components';

// Templates
import ContactMail from '@/templates/ContactMail';

// Types
import type { ContactFormData } from '@/app/types';

// Middleware
import { rateLimiter } from '@/middleware/rateLimiter';

export async function POST(req: Request, res: Response) {
  
  // Parse request
  const { fullName, email, subject, message }: ContactFormData = await req.json()
  if (!fullName || !email || !subject || !message) {
    throw new Error(
      "One of the input field data is undefined",
      {cause: 400}
    )
  }
  
  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const DOMAIN = process.env.DOMAIN
  const EMAIL = process.env.EMAIL

  // Rate limiter
  try {
    const ip: string = req.headers.get("x-forwarded-for") ?? "unknown"
    await rateLimiter.consume(ip)
  } catch(error) {
    return Response.json({error: "Too many requests"}, {status: 429})
  }
  
  try {
    // CORS
    if (req.method !== "POST") {
      throw new Error("Method not allowed", {cause: 405})
    }

    // Email sender
    const resend = new Resend(RESEND_API_KEY)
    const sender = `Contact Portfolio <info@${DOMAIN}>`
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
      throw new Error(error.message, {cause: 500})
    }
    return Response.json(
      {message: "Succesfully sent email"},
      {status: 200})

  } catch (error) {
    if (error instanceof Error) {
  
      const statusCode: number =
        typeof error.cause === "number" && Number.isInteger(error.cause)
        ? error.cause 
        : 500
      return Response.json({error: error.message}, {status: statusCode})
    } else {
      return Response.json({error: "Something went wrong"}, {status: 500})
    }
  }
}