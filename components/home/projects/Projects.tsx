"use client"

import getProjectCard from "@/utils/getProjectCard"
import { Project } from "@/app/types"
import "./projects.css"

type ProjectsSectionProps = {
    projects: Project[]
}

export default function Projects({projects}: ProjectsSectionProps) {

    return (
        <section className="projects-section" id="projects">
            <div className="projects-section-header">
                <h2>Explore what I've been up to lately </h2>
                <p>
                    Below are my projects listed that showcase my experience
                    in fullstack webdevelopment so far
                </p>
            </div>
            <div className="projects-container">
                {projects.map(project => getProjectCard(project))}
            </div>
        </section>
    )
}