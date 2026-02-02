"use client"

import React from "react"
import { HiDownload } from "react-icons/hi"
import { MdFileDownloadDone } from "react-icons/md"
import { FiGithub } from "react-icons/fi"
import Link from "next/link"
import "./hero.css"

export default function Hero() {

    const [hasDownloaded, setHasDownloaded] = React.useState<boolean>(false)

    return (
        <section className="hero">
          <h1>Turning your designs into a great UX</h1>
          <p>
            I'm Roshan Bansie, Computer Science student developing modern full-stack apps that solve everyday problems
            focusing on the optimal UX.
          </p>
          <div className="hero-buttons">
            <button className="primary-button" onClick={() => setHasDownloaded(true)}>
                {
                    hasDownloaded ? <MdFileDownloadDone className="hero-btn-icon" /> 
                    : <HiDownload className="hero-btn-icon" />
                }
                Resume
            </button>
            <button className="secondary-button">
                <Link href="https://github.com/RoshanBansie" target="_blank" className="github-link">
                    <FiGithub className="hero-btn-icon" />
                    Github
                </Link>
            </button>
          </div>
        </section>
    )
}   