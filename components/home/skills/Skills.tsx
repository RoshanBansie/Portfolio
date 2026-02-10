"use client"

import React from "react"
import { FaCode } from "react-icons/fa6"
import type { SkillsObj } from "@/app/types"
import type { JSX } from "react"
import ImageUI from "@/components/widgets/imageui/ImageUI"
import "./skills.css"

export default function Skills() {
    const viewOptions: string[] = ["all", "frontend", "backend", "tools"]
    const [view, setView] = React.useState<string>("all")
    const skills: SkillsObj[] = [
        {
            area: "frontend",
            skill: "HTML",
            logo: {
                src: "/assets/html_logo.png",
                initHeight: 500,
                initWidth: 500
            }
        },
        {
            area: "frontend",
            skill: "CSS",
            logo: {
                src: "/assets/css_logo.webp",
                initHeight: 256,
                initWidth: 256
            }
        },
        {
            area: "frontend",
            skill: "javascript",
            logo: {
                src: "/assets/javascript_logo.png",
                initHeight: 1025,
                initWidth: 1025
            }
        },
        {
            area: "frontend",
            skill: "react",
            logo: {
                src: "/assets/react_logo.png",
                initHeight: 3417,
                initWidth: 3849
            }
        },
        {
            area: "frontend",
            skill: "typescript",
            logo: {
                src: "/assets/typescript_logo.png",
                initHeight: 960,
                initWidth: 960
            }
        },
        {
            area: "frontend",
            skill: "nextjs",
            logo: {
                src: "/assets/nextjs_logo.png",
                initHeight: 320,
                initWidth: 320
            }
        },
        {
            area: "backend",
            skill: "nodejs",
            logo: {
                src: "/assets/nodejs_logo.png",
                initHeight: 512,
                initWidth: 512
            }
        },
        {
            area: "backend",
            skill: "expressjs",
            logo: {
                src: "/assets/expressjs_logo.webp",
                initHeight: 621,
                initWidth: 621
            }
        },
        {
            area: "backend",
            skill: "postgre SQL",
            logo: {
                src: "/assets/postgresql_logo.png",
                initHeight: 990,
                initWidth: 960
            }
        },
        {
            area: "tools",
            skill: "firebase",
            logo: {
                src: "/assets/firebase_logo.png",
                initHeight: 364,
                initWidth: 364
            }
        },
        {
            area: "tools",
            skill: "supabase",
            logo: {
                src: "/assets/supabase_logo.jpg",
                initHeight: 225,
                initWidth: 225
            }
        },
        {
            area: "tools",
            skill: "resend",
            logo: {
                src: "/assets/resend_logo.png",
                initHeight: 1800,
                initWidth: 1800
            }
        },
    ]

    // Returns a JSX element that displays the language/library/tool
    // along with its logo.
    function getSkillCard({skill, logo}: SkillsObj): JSX.Element {
        return (
            <div className="skill-card">
                {logo ? (
                    <ImageUI
                        src={logo.src}
                        width="25px"
                        height="25px"
                        alt={skill + "-logo"}
                        originalWidth={logo.initWidth}
                        originalHeight={logo.initHeight}
                    />
                ): 
                <FaCode style={{height: "25px", width: "25px"}} />
                }
                <h5>{skill}</h5>
            </div>
        )
    }

    return (
        <section className="skills" id="techstack">
            <div className="skills-section-header">
                <h2>Skills I have learned along the way</h2>
                <p>
                    In the past few years I have been developing skills
                    on different areas like the front-end, backend-end and utilizing third-party
                    tools.
                </p>
            </div>
            <div className="skills-nav">
                {viewOptions.map(option => (
                    <button 
                        className={
                            view.toLocaleLowerCase() === option.toLocaleLowerCase() ? "view-button-active"
                            : "view-button-inactive"
                        }
                        onClick={() => setView(option)}
                        key={option}
                    >
                    {option}
                    </button>
                ))}
            </div>
            <div className="skills-content">
                {skills.map((skill, i) => {
                    const area: string = skill.area.toLowerCase()
                    const currentView: string = view.toLocaleLowerCase()

                   return area === currentView || currentView === "all" ? (
                    <div key={"skill-" + i}>
                        {getSkillCard(skill)}
                    </div>
                   ) : null
                })}
            </div>
        </section>
    )
}