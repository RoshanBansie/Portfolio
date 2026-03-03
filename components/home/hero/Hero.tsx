"use client"

import { FiGithub } from "react-icons/fi"
import { motion } from "motion/react"
import DownloadBtn from "@/components/widgets/downloadbtn/DownloadBtn"
import Link from "next/link"
import "./hero.css"

export default function Hero() {

    return (
        <section className="hero">
          <motion.h1
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
          >
            Turning your designs into a great UX
          </motion.h1>
          <motion.p
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.2}}
            viewport={{once: true}}
          >
            I'm Roshan Bansie, Computer Science student developing modern full-stack apps that solve everyday problems
            focusing on the optimal UX.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.4}}
            viewport={{once: true}}
          >
            <DownloadBtn innerText="Resume" src="/resume.pdf" style="primary" />
            <button className="secondary-button">
                <Link href="https://github.com/RoshanBansie" target="_blank" className="github-link">
                    <FiGithub style={{fontSize: "20px", marginRight: "8px"}} />
                    Github
                </Link>
            </button>
          </motion.div>
        </section>
    )
}   