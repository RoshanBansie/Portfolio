"use client"

import { motion } from "motion/react"
import getProjectCard from "@/utils/getProjectCard"
import projects from "@/data/projects"
import "./page.css"

export default function Page() {
    return (
        <section className="projects-page">
            <motion.section 
                className="projects-page-header"
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
            >
                <h2>Projects</h2>
                <p>
                    Explore what projects I've been working on
                    and read more about the technologies being used,
                    design choices and skills I've learned.
                </p>
            </motion.section>
            <section className="projects-content">
                {projects.map((project, i) => {
                    return (
                        <motion.div
                            key={"project-animation-"+i}
                            initial={{opacity: 0, y: 40}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: i*0.2+0.5}}
                            viewport={{once: true}}
                        >
                            {getProjectCard(project)}
                        </motion.div>
                    )
                })}
            </section>
        </section>
    )
}