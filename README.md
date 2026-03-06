This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL!;

type ContactFormData = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  company?: string; // honeypot
};

const RATE_LIMIT = new Map<string, number>();

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for") ??
      "unknown";

    const lastRequest = RATE_LIMIT.get(ip);

    if (lastRequest && Date.now() - lastRequest < 10000) {
      return Response.json(
        { error: "Too many requests" },
        { status: 429 }
      );
    }

    RATE_LIMIT.set(ip, Date.now());

    const body: ContactFormData = await req.json();

    const { fullName, email, subject, message, company } = body;

    // Honeypot spam check
    if (company) {
      return Response.json({ ok: true });
    }

    // Basic validation
    if (!fullName || !email || !subject || !message) {
      return Response.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Website Contact <contact@yourdomain.com>",
      to: [CONTACT_EMAIL],
      subject: `Contact Form: ${subject}`,
      reply_to: email,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return Response.json(
        { error: "Email failed" },
        { status: 500 }
      );
    }

    return Response.json({ success: true });

  } catch (err) {
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
