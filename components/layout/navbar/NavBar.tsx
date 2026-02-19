"use client"

import React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import ToggleLink from "./ToggleLink"
import "./navbar.css"
import Menu from "@/components/widgets/menu/Menu"
import Switch from "@/components/widgets/switch/Switch"

export default function Navbar() {

    const [open, setOpen] = React.useState<boolean>(false)

    function handleToggle() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <header>
            <div className="nav-container">
                <div className="nav-inner">
                    <div>
                        <Link href="." className="logo">Roshan Bansie</Link>
                        <motion.ul
                            className="toggle-menu"
                            animate={{height: open ? "100vh" : "0"}}
                            transition={{duration: 0.5, ease: "easeInOut"}}
                            style={{overflow: "hidden"}}
                        >
                            <ToggleLink path="/" toggleMenu={handleToggle}>Home</ToggleLink>
                            <ToggleLink path="/projects" toggleMenu={handleToggle}>Projects</ToggleLink>
                            <ToggleLink path="#techstack" toggleMenu={handleToggle}>Techstack</ToggleLink>
                            <ToggleLink path="#about-me" toggleMenu={handleToggle}>About me</ToggleLink>
                            <ToggleLink path="#education" toggleMenu={handleToggle}>Education</ToggleLink>
                            <ToggleLink path="#contact" toggleMenu={handleToggle}>Contact</ToggleLink>
                            <Switch />
                        </motion.ul>
                    </div>
                    <nav className="nav-menu">
                        <ul>
                            <Link className="navlink" href="/projects">Projects</Link>
                            <Link className="navlink" href="#techstack">Techstack</Link>
                            <Link className="navlink" href="#about-me">About me</Link>
                            <Link className="navlink" href="#education">Education</Link>
                        </ul>
                    </nav>
                    <div className="nav-btns">
                        <button className="primary-button">
                            <Link className="navbtn-links" href="#contact">Contact</Link>
                        </button>
                    </div>
                    <div className="toggle-menu-btn" onClick={handleToggle}>
                        <Menu open={open} handleToggle={handleToggle} />
                    </div>
                </div>
            </div>
        </header>
    )
}