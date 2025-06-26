import React from 'react';
import '../assets/styles/PrivacyPolicy.css';

export default function PrivacyPolicy() {
    return (
        <div className="privacy-container">
            <h1>Privacy Policy</h1>
            <p>Last updated: June 26, 2025</p>

            <section>
                <h2>1. Introduction</h2>
                <p>Hanashi ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our application.</p>
            </section>

            <section>
                <h2>2. Information We Collect</h2>
                <p>We may collect information that you provide directly to us such as your name, email address, and story content. We may also collect usage data like IP address and browser type for analytics purposes.</p>
            </section>

            <section>
                <h2>3. How We Use Your Information</h2>
                <ul>
                    <li>To provide and maintain the service</li>
                    <li>To notify you about changes</li>
                    <li>To offer customer support</li>
                    <li>To monitor usage and improve features</li>
                </ul>
            </section>

            <section>
                <h2>4. Sharing Your Data</h2>
                <p>We do not sell or share your personal information with third parties except to comply with legal obligations or protect our rights.</p>
            </section>

            <section>
                <h2>5. Security</h2>
                <p>We implement appropriate security measures to protect your data, but no system is completely secure. Use Hanashi at your own discretion.</p>
            </section>

            <section>
                <h2>6. Your Rights</h2>
                <p>You have the right to access, update, or delete your personal data. Contact us for assistance.</p>
            </section>

            <section>
                <h2>7. Changes to This Policy</h2>
                <p>We may update this policy from time to time. The updated version will be posted on this page with a new effective date.</p>
            </section>

            <section>
                <h2>8. Contact Us</h2>
                {/*<p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@hanashi.website">support@hanashi.website</a>.</p>*/}
                <p>If you have any questions about this Privacy Policy, please contact us via message on our <a href="https://x.com/hanashi_dev" target="_blank" rel="noopener noreferrer" aria-label="Twitter">twitter page</a>.</p>
            </section>
        </div>
    );
}
