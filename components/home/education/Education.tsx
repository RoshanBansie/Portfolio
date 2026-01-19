import "./education.css"

export default function Education() {
    return (
        <section className="education-section">
            <h2>Education</h2>
            <div className="education-content">

                <div className="education-container">
                    <h3>University of Amsterdam</h3>
                    <div className="education-group">
                        <div className="education-subcontainer">
                            <h4>Bachelor Informatica</h4>
                            <p>2024-present</p>
                            <ul>
                                <li>
                                    Learned Javascript, React.js, Typescript, Next.js, Node.js and Express.js
                                </li>
                            </ul>
                        </div>
                        <div className="education-subcontainer">
                            <h4>Bachelor Biologie</h4>
                            <p>2023-2024</p>
                            <ul>
                                <li>
                                    Learned Javascript, React.js, Typescript, Next.js, Node.js and Express.js
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="education-subcontainer">
                    <h3>Scrimba</h3>
                    <h4>Online courses</h4>
                    <p>2024-present</p>
                    <ul>
                        <li>
                            Learned Javascript, React.js, Typescript, Next.js, Node.js and Express.js
                        </li>
                    </ul>
                </div>
                <div className="education-subcontainer">
                    <h3>Het Baken Trinitas Gymnasium</h3>
                    <h4>High school</h4>
                    <p>2017-2023</p>
                    <ul>
                        <li>
                            Learned and trained to utilize basic knowledge in unknown and new situations.
                        </li>
                        <li>
                            Learned basic scientific concepts and algebra.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}