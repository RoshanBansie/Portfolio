import { FiGithub } from "react-icons/fi"
import DownloadBtn from "@/components/widgets/downloadbtn/DownloadBtn"
import Link from "next/link"
import "./hero.css"

export default function Hero() {

    return (
        <section className="hero">
          <h1>Turning your designs into a great UX</h1>
          <p>
            I'm Roshan Bansie, Computer Science student developing modern full-stack apps that solve everyday problems
            focusing on the optimal UX.
          </p>
          <div className="hero-buttons">
            <DownloadBtn innerText="Resume" src="" style="primary" />
            <button className="secondary-button">
                <Link href="https://github.com/RoshanBansie" target="_blank" className="github-link">
                    <FiGithub style={{fontSize: "20px", marginRight: "8px"}} />
                    Github
                </Link>
            </button>
          </div>
        </section>
    )
}   