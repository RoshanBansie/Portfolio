// Data
import projects from "@/data/projects";

// Types
import type { Project } from "@/app/types";

// Icons
import { FaArrowLeft } from "react-icons/fa";

// Components
import Link from "next/link";
import ImageUI from "@/components/widgets/imageui/ImageUI";
import DownloadBtn from "@/components/widgets/downloadbtn/DownloadBtn";
import ArrowLink from "@/components/widgets/arrowlink/ArrowLink";
import "./page.css"

type PageProps = {
    params: Promise<{slug: string}>
}

export default async function Page({params}: PageProps) {
    const { slug } = await params
    const filtered: Project[] = projects.filter(project => {
        return project.title.toLowerCase() === slug.toLowerCase()
    })
    const {title, description, image, content}: Project = filtered[0]

    function getParagaphs() {
        const parsJSX = content.map((par, i) => {
            const { title, text } = par
            return (
                <section className="project-par" key={"par-" + i}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </section>
            )
        })
        return parsJSX
    }

    return (
        <main>
            <article className="project-page">
                <Link href="./" className="backlink">
                    <FaArrowLeft className="left-arrow" />
                    Back to projects
                </Link>
                <section className="project-page-header">
                    <div className="description">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                    <div className="project-action-btns">
                        <ArrowLink innerText="Visit" dst="https://notify.roshanbansie.nl" />
                        <DownloadBtn innerText="Readme" src="" style="primary" />
                    </div>
                </section>
                <ImageUI
                    src={image.src}
                    width="100%"
                    height="500px"
                    alt={image.alt}
                    originalHeight={image.height}
                    originalWidth={image.width}
                    className="project-page-img"
                />
                {getParagaphs()}
            </article>
        </main>
    )
}