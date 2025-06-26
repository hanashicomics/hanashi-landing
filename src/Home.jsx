import "../src/assets/styles/Home.css"
import {Link} from "react-router-dom";
import Footer from "./components/Footer.jsx";

export default function Home(){
    return (
        <>
            <div className="landing">
                <header className="landing-header">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>All Your Stories, Anywhere, Anytime</h1>
                            <p>Capture, build, and organize your stories on the go — whether you're brainstorming a new world or outlining your next masterpiece.</p>
                            <a href="https://hanashi.website/signup" className="get-started-button">Get Started</a>
                        </div>
                        <img src="src/assets/img/android.png" alt="Hero Preview" className="hero-image" />
                    </div>
                </header>


                {/*<section className="features">*/}
                {/*    <div className="feature">*/}
                {/*        <h2>Quick & Easy Story Planning</h2>*/}
                {/*        <p>Write arcs, chapters, characters, and locations — all in one place.</p>*/}
                {/*    </div>*/}
                {/*    <div className="feature">*/}
                {/*        <h2>Work From Anywhere</h2>*/}
                {/*        <p>Responsive design lets you access your stories from any device — phone, tablet, or desktop.</p>*/}
                {/*    </div>*/}
                {/*    <div className="feature">*/}
                {/*        <h2>Effortless Navigation</h2>*/}
                {/*        <p>Easily switch between your stories, arcs, chapters, characters and locations.</p>*/}
                {/*    </div>*/}
                {/*</section>*/}

                {/*<section className="feature-highlight">*/}
                {/*    <div className="feature-row">*/}
                {/*        <img src="" alt="Create Story" className="feature-image-pc" />*/}
                {/*        <div className="feature-text">*/}
                {/*            <h2>Create Stories</h2>*/}
                {/*            <p>Tailor your writing space with story-building tools.</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="feature-row">*/}
                {/*        <div className="feature-text">*/}
                {/*            <img src="" alt="View Stories" className="feature-image" />*/}
                {/*            <h2>All Your Stories, Safely Stored</h2>*/}
                {/*            <p>Never lose your progress. Your stories are automatically saved and backed up in the cloud.</p>*/}
                {/*        </div>*/}

                {/*    </div>*/}

                {/*    <div className="feature-row">*/}
                {/*        <img src="" alt="Create Character" className="feature-image" />*/}
                {/*        <div className="feature-text">*/}
                {/*            <h2>Create Characters</h2>*/}
                {/*            <p>Design and bring your characters to life with detailed profiles and unique backstories to*/}
                {/*                make them unforgettable.</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}

                <section className="features">
                    <div className="feature">
                        <i className="fa-solid fa-pen-nib feature-icon"></i>
                        <h2>Quick & Easy Story Planning</h2>
                        <p>Write arcs, chapters, characters, and locations — all in one place.</p>
                    </div>
                    <div className="feature">
                        <i className="fa-solid fa-laptop feature-icon"></i>
                        <h2>Work From Anywhere</h2>
                        <p>Responsive design lets you access your stories from any device — phone, tablet, or desktop.</p>
                    </div>
                    <div className="feature">
                        <i className="fa-solid fa-compass feature-icon"></i>
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