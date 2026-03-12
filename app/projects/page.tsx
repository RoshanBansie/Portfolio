import { motion } from "motion/react"
import ProjectCard from "@/components/widgets/projectcard/ProjectCard"
import projects from "@/data/projects"
import "./page.css"

export default function Page() {
    return (
        <section className="projects-page">
            <section className="projects-page-header">
                <h2>Projects</h2>
                <p>
                    Explore what projects I've been working on
                    and read more about the technologies being used,
                    design choices and skills I've learned.
                </p>
            </section>
            <section className="projects-content">
                {projects.map((project, i) => {
                    return (
                        <div
                            className="project-card-animation-container"
                            key={"project-animation-"+i}
                        >
                            {ProjectCard(project)}
                        </div>
                    )
                })}
            </section>
        </section>
    )
}