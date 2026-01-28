import type { ContactFormData } from "@/components/home/contact/ContactForm";

export default async function sendMail({fullName, email, subject, message}:ContactFormData) {
    try {
        const res = await fetch("https://contact.roshanbansie.nl", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fullName: fullName,
                email: email,
                subject: subject,
                message: message
            })
        })
        const data = res.json()

        if (!res.ok) {
            const errorMessage = data ? data.message : "Something went wrong, please try again later."
            throw new Error(errorMessage)
        }
        return data

    } catch(e) {
        if (e instanceof Error) {
            if (e.message.includes("Failed to fetch")) {
                throw new Error("Network error")
            } else {
                throw new Error(e.message)
            }
        }
    }
}