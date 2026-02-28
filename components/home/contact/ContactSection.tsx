"use client"

import "./contact.css"

// Components
import ContactForm from "./ContactForm"
import Link from "next/link"

// Icons
import { FiGithub } from "react-icons/fi"
import { FaLinkedinIn } from "react-icons/fa"
import { TbMail } from "react-icons/tb"

// Libraries
import { motion } from "motion/react"

export default function ContactSection() {
    return (
        <section className="section-container" id="contact">
            <motion.div 
                className="contact-section-header"
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.5}}
                viewport={{once: true}}
            >
                <h2>Lets get in touch</h2>
                <p>
                    Use the contact form to the right for further inquiries.
                    Also, feel free to connect with me via LinkedIn to track my progression
                    and milestones in webdevelopment.
                </p>
            </motion.div>
            <div className="contact-content">
                <ContactForm />
                <ul className="contact-socials">
                    <li>
                        <h4>Email me</h4>
                        <p>Send me an email for further inquiries</p>
                        <div className="social-container">
                            <TbMail className="icon" />
                            <h5>roshan_b@outlook.com</h5>
                        </div>
                    </li>
                    <li>
                        <h4>Connect with me</h4>
                        <p>Follow my progression as a webdeveloper</p>
                        <div className="social-container">
                            <Link 
                                href="https://github.com/RoshanBansie" target="_blank"
                                style={{fontSize: "20px"}}
                            >
                                <FiGithub />
                            </Link>
                            <Link 
                                href="https://linkedin.com/in/roshan-bansie-94a825301" target="_blank"
                                style={{fontSize: "20px"}}
                            >
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}