    import type { Project } from "@/app/types"
    import ImageUI from "@/components/widgets/imageui/ImageUI"
    import Link from "next/link"
    

    // Returns the UI-card for the projects.
    // Takes in an object of type ProjectCard
    export default function getProjectCard(project: Project) {
        const {title, description, tags, image, link} = project
        const {src, width, height, alt} = image
        return (
            <div className="project-card" key={"project-"+title}>
                <div className="project-card-img-container">
                    <Link href={link} >
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
                    </Link>
                </div>
                <div className="project-description">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="project-tags-container">
                        {tags.map(tag => (
                            <div className="project-tag" key={"tag-"+tag}>
                                <h5>{tag}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }