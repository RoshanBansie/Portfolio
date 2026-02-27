import "./page.css"
import getProjectCard from "@/utils/getProjectCard"
import projects from "@/data/projects"

export default function Page() {
    return (
        <main className="projects-page">
            <section className="projects-page-header">
                <h2>Projects</h2>
                <p>
                    Explore what projects I've been working on
                    and read more about the technologies being used,
                    design choices and skills I've learned.
                </p>
            </section>
            <section className="projects-content">
                {projects.map(project => getProjectCard(project))}
            </section>
        </main>
    )
}