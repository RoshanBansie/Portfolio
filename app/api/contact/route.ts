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
    async function send(sender, receiver, replyTo, subject, content) {
        const {data, error} = await resend.emails.send({
            from: sender,
            to: receiver,
            replyTo: replyTo,
            subject: subject,
            html: content
        })
        
        if (error) {
            console.error(error)
            return Response.json({ error }, { status: 500 })
        }
    }

    try {
        const sender = `Contact <info@${DOMAIN}>`
        const emailHtml = await render(React.createElement(ContactMail, {
            fullName, email, subject, message
        }))
        await send(sender, [EMAIL], email, subject, emailHtml)
  
    } catch(error) {
      if (error instanceof Error) {
        console.error(`Contact mailer: ${error}`)
        return Response.json({ error }, { status: 500 })
      }
    }
}