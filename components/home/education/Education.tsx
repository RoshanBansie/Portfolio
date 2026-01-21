import { JSX } from "react"
import "./education.css"

type EducationObj = {
    institute: string,
    milestones: {
        type: string,
        start: number,
        end: number | string,
        skills: string[]
    }[]
}

// Component that displays the education section on the homepage.
// Creates a timeline of my educational milestones given by an array of objects
// containing the milestones.
// Returns the JSX of the education section.
// All the data needed to generate the JSX is within this component.
export default function Education() {

    const education: EducationObj[] = [
        {
            institute: "University of Amsterdam",
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
            institute: "Scrimba",
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
            institute: "Het Baken Trinitas Gymnasium",
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
    function getEducationBlock(educationBlock: EducationObj, key: number): null | JSX.Element {
        const {institute, milestones} = educationBlock
        if (milestones.length < 1) {
            return null
        }
        return milestones.length == 1 ? (
            // Educational milestone doesn't have submilestones within one institute.
            <div className="education-subcontainer" key={"milestone-" + key}>
                <h3>{institute}</h3>
                <h4>{milestones[0].type}</h4>
                <p>{milestones[0].start + "-" + milestones[0].end}</p>
                <ul>
                    {milestones[0].skills.map(skill => (
                        <li>{skill}</li>
                    ))}
                </ul>
            </div>
        ) : (
            // Educational milestone has submilestones within one institute so group them togehter.
            <div className="education-container" key={"milestone-" + key}>
                <h3>{institute}</h3>
                <div className="education-group">
                    {milestones.map((milestone, i) => {
                        const {type, start, end, skills} = milestone
                        return (
                            <div className="education-subcontainer" key={"milestone-" + i}>
                                <h4>{type}</h4>
                                <p>{start + "-" + end}</p>
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
        )
    }

    return (
        <section className="education-section">
            <h2>Education</h2>
            <div className="education-content">
               {education.map((educationBlock, i) => getEducationBlock(educationBlock, i))}
            </div>
        </section>
    )
}