export type ContactFormData = {
    fullName: string,
    email: string,
    message: string,
    subject: string,
    company: string
}

export type MilestonesObj = {
    institute: string,
    image: {
        src: string,
        width: number,
        height: number,
        alt: string
    }
    milestones: {
        type: string,
        start: number,
        end: number | string,
        skills: string[]
    }[]
}

export type ProjectCard = {
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

export type NavLinkProps = {
    path: string,
    children: React.ReactNode
}

export type SkeletonProps = {
    type: string,
    width?: string, // String so the user can specify the unit as well.
    height?: string
}

export type ImageUIProps = {
    src: string,
    originalHeight: number,
    originalWidth: number,
    height: string,
    width: string,
    alt: string,
    className?: string,
}

export type SkillsObj = {
    area: string,
    skill: string,
    logo?: {
        src: string,
        initHeight: number,
        initWidth: number
    }
}

export type PhilosophyPoint = {
    headline: string,
    explanation: string
}

export type WorkflowStep = {
    headline: string,
    explanation: string
}
