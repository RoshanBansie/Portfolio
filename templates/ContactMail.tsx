import { Section, Text } from "@react-email/components"
import type { ContactFormData } from "@/app/types"

export default function ContactMail({fullName, email, subject, message}: ContactFormData) {
    return (
        <Section style={{textAlign: "center", padding: "5rem 2rem"}}>
            <Text
                style={{
                    fontSize: 12,
                    padding: "0.5rem 1rem",
                    border: "1px solid #1a1a1a",
                    backgroundColor: "transparent",
                    color: "#696969",
                    margin: "2rem auto",
                    borderRadius: 20,
                    width: "fit-content"
                }}
            >
            Contact form
            </Text>
            <Text
                style={{
                    fontSize: 40,
                    color: "#ededed",
                    margin: "1rem 0",
                    fontWeight: "bold"
                }}
            >
            {subject}
            </Text>
            <p
                style={{
                    color: "#696969",
                    maxWidth: "40rem",
                    margin: "0 auto"
                }}
            >
           {message}
            </p>
            <div style={{display: "inline-flex", margin: "1rem auto"}}>
                    <p
                        style={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontWeight: 600,
                        color: '#ededed',
                        }}
                    >
                        {fullName}
                    </p>
                    <span style={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        margin: "0 8px"
                    }}>
                        •
                    </span>
                    <p
                        style={{
                            margin: 0,
                            fontSize: '14px',
                            lineHeight: '20px',
                        }}
                    >
                        {email}
                    </p>
            </div>
        </Section>
    )
}