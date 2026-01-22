import Link from "next/link"
import ImageUI from "@/components/widgets/imageui/ImageUI"
import "./projects.css"

type ProjectCard = {
    title: string,
    description: string,
    tags: string[],
    image: {
        src: string,
        width: number,
        height: number,
        alt: string,
    },
    link: string
}

export default function Projects() {

    const projects: ProjectCard[] = [
        {
            title: "Notify",
            description: 
            `Upload, store and view all your warranties in one place 
            so you never have to lose them again.`,
            tags: ["React.js", "Typescript", "Node.js", "Express.js", "SQL"],
            image: {
                src: "/assets/notify.png",
                width: 1497,
                height: 898,
                alt: "Notify website image"
            },
            link: "/pages/projects/notify"
        }
    ]
    
    function getProjectCard(project: ProjectCard) {
        const {title, description, tags, image, link} = project
        const {src, width, height, alt} = image
        return (
            <div className="project-card" key={"project-"+title}>
                <ImageUI
                    src={src}
                    originalWidth={width}
                    originalHeight={height}
                    height="20rem"
                    width="100%"
                    alt={alt}
                    className="project-card-image"
                />
                <div className="project-description">
                    <div className="project-tags-container">
                        {tags.map(tag => (
                            <div className="project-tag" key={"tag-"+tag}>
                                <h5>{tag}</h5>
                            </div>
                        ))}
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <button className="primary-button">
                        <Link href={link}>Read more</Link>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <section className="projects-section">
            <h2>Projects<span>I've been working on lately</span></h2>
            <div className="projects-container">
                {projects.map(project => getProjectCard(project))}
            </div>
        </section>
    )
}