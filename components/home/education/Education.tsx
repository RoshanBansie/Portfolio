"use client"

// Libraries
import React from "react"
import { motion } from "motion/react"

// Icons
import { FaChevronDown } from "react-icons/fa"

// Types
import { JSX } from "react"
import type { MilestonesObj } from "@/app/types"

// Styling
import "./education.css"

type collapsableObj = {
    [key: string]: boolean
}

// Component that displays the education section on the homepage.
// Creates a timeline of my educational milestones given by an array of objects
// containing the milestones.
// Returns the JSX of the education section.
// All the data needed to generate the JSX is within this component.
export default function Education() {

    const [open, setOpen] = React.useState<collapsableObj>({})

    const education: MilestonesObj[] = [
        {
            milestone: "Online courses",
            institute: "Scrimba",
            start: 2024,
            end: "present",
            description: " Learned Javascript, React.js, Typescript, Next.js, Node.js and Express.js",
            image: {
                src: "/assets/scrimba-logo.png",
                width: 800,
                height: 800,
                alt: "Scrimba logo"

            }
        },
        {
            milestone: "Bachelor Informatica",
            institute: "University of Amsterdam",
            start: 2024,
            end: "present",
            description:
            `
            In the aforementioned courses, I gained experience working on software
            in a team and learned about key concepts related to programming languages,
            different network layers and their relevant protocols, designing EER diagrams, and implementing 3NF database schemas.
            `,
            relevantCourses: [
                "Inleiding programmeren",
                "Datastructuren en algoritmes",
                "Webtechnologie",
                "Programmeertalen",
                "Networks and Networks Security",
                "Moderne Databases"
            ],
            image: {
                src: "/assets/uva-logo.png",
                width: 1936,
                height: 1936,
                alt: "UvA logo"
            }
        },
        {
            milestone: "Bachelor Biologie",
            institute: "University of Amsterdam",
            start: 2023,
            end: 2024,
            description: "Introduction to basic statistics and using R to perform analytical tests and create graphs",
            image: {
                src: "/assets/uva-logo.png",
                width: 1936,
                height: 1936,
                alt: "UvA logo"
            }
        },
        {
            milestone: "Highschool",
            institute: "Het Baken Trinitas Gymnasium",
            start: 2017,
            end: 2023,
            description:
            `
            Learned and trained to utilize basic knowledge in unknown and new situations and also
            learned basic scientific concepts and algebra.
            `
            ,
            image: {
                src: "/assets/trinitas-logo.png",
                width: 232,
                height: 218,
                alt: "Trinitas logo"
            }
        }
    ]

    // Returns whether a certain collapsable is open or not.
    function getToggleStatus(id: string): boolean {
        return open[id] ?? false
    }

    // Toggles the open state or close state of collapsable.
    function toggleCollapse(id: string): void {
        setOpen(prev => {
            return {
                ...prev,
                [id]: !prev[id]
            }
        })
    }

    // Returns JSX element of a single educational milestone on the timeline.
    // The key is used to distinguish different milestones from each other.
    // Returns null on error.
    function getMilestoneBlock(milestoneBlock: MilestonesObj, key: number): null | JSX.Element {
        const { milestone, institute, start, end, description } = milestoneBlock 

        return (
            // Educational milestone has submilestones within one institute so group them togehter.
            <div className="milestone-container" key={"milestone-" + key}>
                <div className="milestone-header">
                    <FaChevronDown 
                        onClick={() => toggleCollapse(milestone)} 
                        style={{
                            transform: `rotate(${getToggleStatus(milestone) ? 180 : 0}deg)`,
                            transition: "0.3s ease-in-out"
                        }}
                    />
                    <h4>{milestone}</h4>
                </div>
                <motion.div
                    className="milestone-collapsable"
                    initial={false}
                    animate={{
                        height: getToggleStatus(milestone) ? "auto" : "0",
                        marginTop: getToggleStatus(milestone) ? "1rem" : 0
                    }}
                    transition={{duration: 0.25, ease: "easeInOut"}}
                    style={{overflow: "hidden"}}
                >
                    <h5>{institute}</h5>
                    <p>{start + "-" + end}</p>
                    {milestoneBlock.relevantCourses ? (
                        <div className="milestone-relevant-courses">
                            <h5>Relevant courses</h5>
                            <ul>
                                {milestoneBlock.relevantCourses.map(course => (
                                    <li key={course}>{course}</li>
                                ))}
                            </ul>
                        </div>
                    ): null}
                    <div className="milestone-description">
                        <h5>Main activities</h5>
                        <p>{description}</p>
                    </div>
                </motion.div>
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