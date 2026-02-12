"use client"

import React from "react"
import Link from "next/link"
import ImageUI from "@/components/widgets/imageui/ImageUI"
import "./projects.css"
import type { ProjectCard } from "@/app/types"


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