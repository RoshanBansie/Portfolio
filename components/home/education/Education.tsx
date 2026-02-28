"use client"

import { JSX } from "react"
import { motion } from "motion/react"
import ImageUI from "@/components/widgets/imageui/ImageUI"
import type { MilestonesObj } from "@/app/types"
import "./education.css"

// Component that displays the education section on the homepage.
// Creates a timeline of my educational milestones given by an array of objects
// containing the milestones.
// Returns the JSX of the education section.
// All the data needed to generate the JSX is within this component.
export default function Education() {

    const education: MilestonesObj[] = [
        {
            institute: "Scrimba",
            image: {
                src: "/assets/scrimba-logo.png",
                width: 800,
                height: 800,
                alt: "Scrimba logo"

            },
            milestones: [
                {
                    type: "Online courses",
                    start: 2024,
                    end: "present",
                    skills: [" Learned Javascript, React.js, Typescript, Next.js, Node.js and Express.js"]
                }
            ]
        },
        {
            institute: "University of Amsterdam",
             image: {
                src: "/assets/uva-logo.png",
                width: 1936,
                height: 1936,
                alt: "UvA logo"
            },
            milestones: [
                {
                    type: "Bachelor Informatica",
                    start: 2024,
                    end: "present",
                    skills: [
                        "Learned C, Python and SQL",
                        "Datastructures and algorithms",
                        "Designing relational databases",
                        "Networks and Network Security",
                    ]
                },
                {
                    type: "Bachelor Biologie",
                    start: 2023,
                    end: 2024,
                    skills: [
                        "Introduction to basic statistics and using R to perform analytical tests and create graphs",
                    ]
                }
            ]
        },
        {
            institute: "Het Baken Trinitas Gymnasium",
            image: {
                src: "/assets/trinitas-logo.png",
                width: 232,
                height: 218,
                alt: "Trinitas logo"
            },
            milestones: [
                {
                    type: "Highschool",
                    start: 2017,
                    end: 2023,
                    skills: [
                        "Learned and trained to utilize basic knowledge in unknown and new situations.",
                        "Learned basic scientific concepts and algebra."
                    ]
                }
            ]
        }
    ]

    // Returns JSX element of a single educational milestone on the timeline.
    // The key is used to distinguish different milestones from each other.
    // Returns null on error.
    function getMilestoneBlock(milestoneBlock: MilestonesObj, key: number): null | JSX.Element {
        const { institute, image, milestones } = milestoneBlock
        const { src, width, height, alt } = image

        if (milestones.length < 1) {
            return null
        }

        return (
            // Educational milestone has submilestones within one institute so group them togehter.
            <div className="milestone-container" key={"milestone-" + key}>
                <ImageUI
                    src={src}
                    originalWidth={width}
                    originalHeight={height}
                    alt={alt}
                    width="50px"
                    height="50px"
                    className="institute-logo"
                />
                <div className="milestone-content">
                    <h4>{institute}</h4>
                    <div className={milestones.length > 1 ? "milestone-group" : ""}>
                        {milestones.map((milestone, i) => {
                            const {type, start, end, skills} = milestone
                            return (
                                <div className="milestone-subcontainer" key={"milestone-" + i}>
                                    <h4>{type}</h4>
                                    <p className="milestone-period">{start + "-" + end}</p>
                                    <ul>
                                        {skills.map((skill, i) => (
                                            <li key={"skill-" + i}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className="education-section" id="education">
            <motion.div 
                className="education-section-header"
                initial={{opacity: 0, x: -40}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.5, delay: 0.5}}
                viewport={{once: true}}
            >
                <h2>Educational milestones I've achieved</h2>
                <p>
                    To the right are the scholar institutes that I have attended and online courses
                    that I've completed so far.
                </p>
            </motion.div>
            <motion.div 
                className="education-content"
                initial={{opacity: 0, x: 40}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.5, delay: 0.5}}
                viewport={{once: true}}
            >
               {education.map((milestoneBlock, i) => getMilestoneBlock(milestoneBlock, i))}
            </motion.div>
        </section>
    )
}