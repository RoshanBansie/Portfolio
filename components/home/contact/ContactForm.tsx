"use client"

import React from "react"
import "./contact.css"
import Link from "next/link"
import { MdOutlineArrowOutward } from "react-icons/md"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import type { ContactFormData } from "@/app/types"
import { FaCheck } from "react-icons/fa6"
import sendMail from "@/utils/sendMail"
import Spinner from "@/components/widgets/spinner/Spinner"
import { 
    validateName,
    validateEmail,
    validateSubject,
    validateMessage
 } from "../../../utils/FormValidation"

export default function ContactForm() {
    const [formData, setFormData] = React.useState<ContactFormData>({
        fullName: "",
        email: "",
        message: "",
        subject: "",
        company: ""
    })
    const [error, setError] = React.useState<string>("")
    const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false)
    const [submitSucces, setSubmitSucces] = React.useState<boolean>(false)

    function resetForm() {
        setFormData({
            fullName: "",
            email: "",
            subject: "",
            message: "",
            company: ""
        })
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = e.target
        const sanitizedValue: string = value.replace( /[&<>"'/]/ig, "")

        setFormData(prev => {
            return {
                ...prev,
                [name]: sanitizedValue
            }
        })
    }

    // Turns the button text to a check to let the user
    // know the email has been sent correctly.
    // After 2 seconds, the button text will fall back to 'Send'.
    function toggleSubmitSucces() {
        setSubmitSucces(true)
        setTimeout(() => {
            setSubmitSucces(false)
        }, 2000)
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setError("")
        try {
            // Check completion
            for (const [key, value] of Object.entries(formData)) {
                // Silent return if honeypot is filled
                if (key === "company" && value) {
                    return
                }  
                if (key !== "company" && !value) {
                    throw new Error(`Please fill in the ${key} field`)
                }
            }

            // Validate user input
            validateName(formData.fullName)
            validateEmail(formData.email)
            validateSubject(formData.subject)
            validateMessage(formData.message)

            setIsSubmitted(true)
            await sendMail(formData)
            setIsSubmitted(false)
            toggleSubmitSucces()
            resetForm()

        } catch(e) {
            e instanceof Error && setError(e.message)
        }
        isSubmitted && setIsSubmitted(false)
    }

    return (
        <section className="contact-container">
            <div className="contact-section-header">
                <h2>Lets get in touch</h2>
                <p>
                    Use the contact form to the right for further inquiries.
                    Also, feel free to connect with me via LinkedIn to track my progression
                    and milestones in webdevelopment.
                </p>
                <button className="secondary-button">
                    <Link href="www.linkedin.com/in/roshan-bansie-94a825301" target="_blank">
                        LinkedIn
                        <MdOutlineArrowOutward />
                    </Link>
                </button>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="credentials-container">
                    <label>
                        Full name
                        <input
                            required
                            type="text"
                            name="fullName"
                            id="full-name"
                            placeholder="John Doe"
                            autoComplete="name"
                            aria-label="Full name"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Email
                        <input
                            required
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@mail.com"
                            autoComplete="email"
                            aria-label="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <label htmlFor="subject">Subject</label>
                <input
                    required
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject of your message"
                    aria-label="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                />
                <label htmlFor="message">Message</label>
                <textarea
                    required
                    name="message"
                    id="message"
                    placeholder="Type your message here"
                    aria-label="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    minLength={50}
                    maxLength={2000}
                />
                <input
                    name="company"
                    id="company"
                />
                <button type="submit" className="primary-button">
                    {isSubmitted && !submitSucces ? <Spinner /> : null}
                    {submitSucces ? <FaCheck /> : null}
                    {!isSubmitted && !submitSucces ? "Send" : null}
                </button>
                {error ? (
                        <div className="error-container">
                            <AiOutlineExclamationCircle className="error-icon" />
                            <h5>{error}</h5>
                        </div>
                    ) : null
                }
            </form>
        </section>
    )
}