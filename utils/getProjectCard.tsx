    import type { ProjectCard } from "@/app/types"
    import ImageUI from "@/components/widgets/imageui/ImageUI"
    import Link from "next/link"
    

    // Returns the UI-card for the projects.
    // Takes in an object of type ProjectCard
    export default function getProjectCard(project: ProjectCard) {
        const {title, description, tags, image, link} = project
        const {src, width, height, alt} = image
        return (
            <div className="project-card" key={"project-"+title}>
                <ImageUI
                    src={src}
                    originalWidth={width}
                    originalHeight={height}
                    height="25rem"
                    width="100%"
                    alt={alt}
                    className="project-card-image-desktop"
                />
                <ImageUI
                    src={src}
                    originalWidth={width}
                    originalHeight={height}
                    height="15rem"
                    width="100%"
                    alt={alt}
                    className="project-card-image-mobile"
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