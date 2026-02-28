"use client"

import getProjectCard from "@/utils/getProjectCard"
import { Project } from "@/app/types"
import { motion } from "motion/react"
import "./projects.css"

type ProjectsSectionProps = {
    projects: Project[]
}

export default function Projects({projects}: ProjectsSectionProps) {

    return (
        <section className="projects-section" id="projects">
            <motion.div 
                className="projects-section-header"
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 1}}
                viewport={{once: true}}
            >
                <h2>Explore what I've been up to lately </h2>
                <p>
                    Below are my projects listed that showcase my experience
                    in fullstack webdevelopment so far
                </p>
            </motion.div>
            <motion.div 
                className="projects-container"
                initial={{opacity: 0, x: -40}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.5, delay: 0.5}}
                viewport={{once: true}}
            >
                {projects.map(project => getProjectCard(project))}
            </motion.div>
        </section>
    )
}