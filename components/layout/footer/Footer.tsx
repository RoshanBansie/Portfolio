import Link from "next/link"
import { FiGithub } from "react-icons/fi"
import { FaLinkedinIn } from "react-icons/fa"
import { MdOutlineArrowOutward } from "react-icons/md"
import "./footer.css"

export default function Footer() {
    return (
        <footer>
            <div className="footer-left">
                <h4>Roshan Bansie</h4>
                <p>roshan_b@outlook.com</p>
                <div className="socials-container">
                    <Link href="https://github.com/RoshanBansie" target="_blank" className="social-icon">
                        <FiGithub />
                    </Link>
                    <Link href="https://linkedin.com/in/roshan-bansie-94a825301" target="_blank" className="social-icon">
                        <FaLinkedinIn />
                    </Link>
                </div>
            </div>
            <div className="footer-right">
                <ul className="project-list">
                <h4>Projects</h4>
                    <li>
                        <Link href="https://notify.roshanbansie.nl" target="_blank" className="arrow-link">
                        Notify
                        <MdOutlineArrowOutward className="arrow-topright" />
                        </Link>
                    </li>
                </ul>
                <ul className="navigation-list">
                <h4>Navigation</h4>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                     <li>
                        <Link href="#techstack">Techstack</Link>
                    </li>
                    <li>
                        <Link href="#about-me">About me</Link>
                    </li>
                    <li>
                        <Link href="#education">Education</Link>
                    </li>
                    <li>
                        <Link href="#contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}