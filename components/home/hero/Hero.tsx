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
          <h1>Hey, my name is Roshan</h1>
          <p>
            Computer Science student developing full-stack apps that solve everyday problems
            using React.js, Typescript, Next.js, Express.js, Node.js and SQL. 
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