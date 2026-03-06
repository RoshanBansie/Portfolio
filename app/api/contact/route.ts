import { Resend } from 'resend';
import ContactMail from '@/templates/ContactMail';
import type { ContactFormData } from '@/app/types';

const resend = new Resend(process.env.RESEND_API_KEY)
const EMAIL = process.env.EMAIL

export async function POST(req: Request) {
  try {
    // Receive formData.
    const { fullName, email, subject, message }: ContactFormData = await req.json()
    if (!fullName || !email || !subject || !message) {
      throw new Error("One of the input field data is undefined")
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: `Contact <${EMAIL}>`,
      to: [EMAIL!],
      subject: subject,
      replyTo: email,
      react: ContactMail({
        fullName: fullName,
        email: email,
        subject: subject,
        message: message
      }),
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }
    return Response.json(data)
  
  } catch (error) {
    console.log(error)
    return Response.json({ error }, { status: 500 })
  }
}