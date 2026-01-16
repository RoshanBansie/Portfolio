"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import Skeleton from "../layout/skeleton/Skeleton"
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

    const [isLoading, setIsLoading] = React.useState({})

    // Adds the loading state of a specific image identified
    // by the given key.
    function addLoadingState(key: string) {
        if (!Object.keys(isLoading).includes(key)) {
            return
        }
        setIsLoading(prev => {
            return {
                ...prev,
                [key]: true
            }
        })
    }

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
        addLoadingState(src)
        return (
            <div className="project-card" key={"project-"+title}>
                {isLoading && <Skeleton type="image" />}
                <Image 
                    src={src}
                    width={width}
                    height={height}
                    alt={alt}
                    style={{opacity: isLoading ? "0" : "100", height: isLoading ? "0" : "20rem"}}
                    onLoadingComplete={() => setIsLoading(false)}
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