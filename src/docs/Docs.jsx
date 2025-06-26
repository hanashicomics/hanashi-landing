import React from 'react';
import '../assets/styles/Docs.css';
import {Link} from "react-router-dom";

export default function Docs() {
    return (
        <div className="docs-container">
            <h1>Hanashi Documentation</h1>
            <p className="subtitle">Learn how to get started, create stories, and manage your writing environment.</p>

            <section>
                <h2>Getting Started</h2>
                <ul>
                    <li><a href="#create-account">Creating an Account</a></li>
                    <li><a href="#dashboard-overview">Dashboard Overview</a></li>
                    <li><a href="#responsive-access">Accessing on Different Devices</a></li>
                </ul>
            </section>

            <section>
                <h2>Writing Tools</h2>
                <ul>
                    <li><a href="#create-story">Creating a Story</a></li>
                    <li><a href="#chapters">Managing Chapters</a></li>
                    <li><a href="#characters">Building Characters</a></li>
                    <li><a href="#locations">Defining Locations</a></li>
                </ul>
            </section>

            <section>
                <h2>Saving & Sync</h2>
                <p>All your progress and data is stored locally in your browser's localstorage. For paid users, theirs is saved automatically in the cloud you can access your stories on mobile or desktop.</p>
                <p>Free Users: Clearing localstorage can cause your stories to be deleted. As such, make sure to backup your stories regularly by exporting. Hanashi will not be held responsible for any data loss caused by browsers storage clearing.</p>
            </section>

            <section>
                <h2>Support</h2>
                <p>If you need help, visit our <Link to="/faq">FAQ</Link> or contact us via message on our <a href="https://x.com/hanashi_dev" target="_blank" rel="noopener noreferrer" aria-label="Twitter">twitter page</a>.</p>
            </section>
        </div>
    );
}
