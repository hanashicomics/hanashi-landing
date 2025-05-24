import "../src/assets/styles/Home.css"
import {Link} from "react-router-dom";
import Footer from "./components/Footer.jsx";

export default function Home(){
    return (
        <>
            <div className="landing">
                <header className="landing-header">
                    <h1>All Your Stories, Anywhere, Anytime</h1>
                    <p>Capture, build, and organize your stories on the go — whether you&#39;re brainstorming a new world or outlining your next masterpiece.</p>
                    <a href={"https://hanashi.website/signup"} className="get-started-button">Get Started</a>

                </header>

                <section className="features">
                    <div className="feature">
                        <h2>Quick & Easy Story Planning</h2>
                        <p>Write arcs, chapters, characters, and locations — all in one place.</p>
                    </div>
                    <div className="feature">
                        <h2>Work From Anywhere</h2>
                        <p>Responsive design lets you access your stories from any device — phone, tablet, or desktop.</p>
                    </div>
                    <div className="feature">
                        <h2>Effortless Navigation</h2>
                        <p>Easily switch between your stories, arcs, chapters, characters and locations.</p>
                    </div>
                </section>

                <section className="newsletter">
                    <h2>Stay in the Loop</h2>
                    <p>Get tips, updates, and exclusive content delivered straight to your inbox.</p>
                    <a
                        href="https://newsletter.page/hanashii"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="newsletter-button"
                    >
                        Join the Newsletter
                    </a>
                </section>

            </div>
            <Footer />
        </>
    )
}