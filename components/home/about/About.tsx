import "./about.css"

export default function About() {

    const philosopyPoints = [
        {
            oneLiner:  "Extend code with meaningful comments",
            explanation: "Provide sufficient comments to explain my code and design choices"
        },
        {
            oneLiner: "Write dynamic code",
            explanation: 
            `Avoid DRY and static code so the software can feed on 
            different input with minimal code changes`
        },
        {
            oneLiner: "Create functional components with minimal dependencies",
            explanation: 
            `Create funcional components with minimal dependencies 
            with other components to facilitate changing the source code in the future`
        },
        {
            oneLiner: "A keen eye for creating modern looking UI",
            explanation: "Making the UI of a software modern looking by implementing the newest design trends"
        },
        {
            oneLiner: "Value UX as much as a good looking UI",
            explanation: 
            `A great UX is as important as a good looking UI 
            to make the website more accesible for everyone. 
            This includes adding loading states, error messages, skeleton loaders and many more techniques.`
        }
    ]

    const workflowSteps = [
        {
            headline: "List requirements",
            explanation: "Analyse the problem statement and list all functionalities"
        },
        {
            headline: "Design pages and database",
            explanation: 
            `Analyze which pages need to be created by dividing the requirements over webpages
            and design an UI for these pages. Also create an EER for the database if applicable`
        },
        {
            headline: "Translate design to code",
            explanation:
            `Implementing the EER into an existing database and
            writing code to develop the webpages`
        },
        {
            headline: "Testing",
            explanation: "Test whether the code satisfies the requirements along with edge cases and security vulnerabilities."
        },
        {
            headline: "Deploy",
            explanation: "Deploy the code on my domain(s) and make the database go live."
        }
    ]

    return (
        <section className="about">
            <div className="philosophy-container">
                <div className="philosopy-section-header">
                    <h2>My development philosopy</h2>
                </div>
                <ul className="oneliners-container">
                    {philosopyPoints.map(item => {
                        const { oneLiner, explanation } = item
                        return (
                            <li key={oneLiner}>
                                <h3>{oneLiner}</h3>
                                <p>{explanation}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>  
            <div className="workflow-container">
                <div className="workflow-section-header">
                    <h2>My workflow</h2>
                    <p>
                        It is tempting to head straight to your favorite IDE when being given
                        a task to create an app or functionality.
                        However, from my experience I have learned that this approach will lead to 
                        a longer development time due to impulsive changes over time. Instead,
                        I have developed the workflow as described below.
                    </p>
                </div>
                <ul className="workflow-visual">
                    {workflowSteps.map((step, i) => {
                        const { headline, explanation } = step
                        return (
                            <li>
                                <div className="step-container">
                                    <h3>{headline}</h3>
                                    <p>{explanation}</p>
                                </div>
                                {i < workflowSteps.length-1 ? <div className="workflow-line"></div> : null}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}