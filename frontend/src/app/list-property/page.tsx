import type { Metadata } from "next";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { EnquiryForm } from "@/components/home/EnquiryForm";

export const metadata: Metadata = {
    title: "List Your Property — NIVA Kerala Stays",
    description: "Partner with NIVA to bring thoughtful hospitality to distinctive homes, heritage villas, and backwater retreats across Kerala.",
};

const hostBenefits = [
    {
        title: "Curated Guest Experience",
        description: "We attract respectful travelers who value slow living, cultural immersion, and mindful travel. Full concierge care, screening, and guest communication are managed by NIVA.",
    },
    {
        title: "Transparent Revenue Sharing",
        description: "Equitable earnings model with clear monthly statements, automated direct payouts, zero lock-in clauses, and reserved dates for your personal family vacations.",
    },
    {
        title: "Dedicated On-Ground Care",
        description: "Our local Kerala hosting team oversees professional housekeeping, styling, routine property maintenance, and 24/7 guest assistance.",
    },
];

const onboardingSteps = [
    {
        number: "01",
        title: "Connect & Share Details",
        description: "Fill out the simple partnership enquiry form below or speak directly with our Kerala hosting team about your home and your vision.",
    },
    {
        number: "02",
        title: "On-Site Visit & Staging",
        description: "We arrange an on-site visit to inspect amenities, discuss revenue potential, and conduct editorial photography and styling guidance.",
    },
    {
        number: "03",
        title: "Welcome Discerning Guests",
        description: "Your home goes live within the curated NIVA collection, backed by end-to-end guest concierge, marketing, and reliable payouts.",
    },
];

export default function ListPropertyPage() {
    return (
        <>
            <a className="skip-link" href="#main-content">Skip to content</a>
            <Navbar />

            {/* Subpage Hero matching all other pages */}
            <div className="subpage-hero">
                <div className="content-wrap">
                    <p className="eyebrow">HOST WITH NIVA · KERALA</p>
                    <h1>Your Home. A New Chapter.</h1>
                    <p className="subtitle">
                        We partner with discerning home owners to bring thoughtful hospitality to distinctive properties across God’s Own Country.
                    </p>
                </div>
            </div>

            <main id="main-content" className="subpage-container content-wrap" style={{ paddingTop: "40px" }}>
                {/* 2-Column Main Section: Left Story & Host Benefits, Right Form */}
                <div className="enquiry-section" style={{ paddingBlock: 0, alignItems: "start" }}>
                    <div>
                        <p className="eyebrow">LET’S START A CONVERSATION</p>
                        <h2>
                            Every good stay<br />
                            starts with a hello.
                        </h2>
                        <p style={{ color: "var(--muted)", fontSize: "13.5px", lineHeight: "1.6", marginBottom: "20px" }}>
                            Whether you own a heritage nalukettu, a cliffside ocean pavilion, or a tranquil backwater plantation home — let’s explore how NIVA can celebrate your property while generating sustainable returns.
                        </p>

                        {/* 3 Host Advantage Cards */}
                        <div className="host-benefits-grid">
                            {hostBenefits.map((b, i) => (
                                <div key={i} className="host-benefit-card">
                                    <span className="host-benefit-icon" aria-hidden="true">✳</span>
                                    <div>
                                        <h4>{b.title}</h4>
                                        <p>{b.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Direct Host Hotline */}
                        <div className="host-contact-strip">
                            <p style={{ margin: "0 0 4px", fontWeight: 600, color: "var(--forest)" }}>
                                Prefer to talk directly?
                            </p>
                            <p style={{ margin: 0, color: "var(--ink)", lineHeight: "1.5" }}>
                                Host Partnerships Hotline:{" "}
                                <a href="tel:+919847054321" style={{ color: "var(--forest)", fontWeight: 600, textDecoration: "underline" }}>
                                    +91 98470 54321
                                </a>
                                <br />
                                Email:{" "}
                                <a href="mailto:hello@nivastays.com" style={{ color: "var(--forest)", fontWeight: 600, textDecoration: "underline" }}>
                                    hello@nivastays.com
                                </a>
                                {" "}· Mon – Sat, 9:00 AM – 7:00 PM IST
                            </p>
                        </div>
                    </div>

                    {/* Property Partnership Enquiry Form */}
                    <div id="enquiry">
                        <EnquiryForm />
                    </div>
                </div>

                {/* How It Works: 3 Steps */}
                <div style={{ marginTop: "64px", borderTop: "1px solid var(--line)", paddingTop: "48px" }}>
                    <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 32px" }}>
                        <p className="eyebrow" style={{ marginBottom: "6px" }}>HOW PARTNERSHIP WORKS</p>
                        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "28px", color: "var(--forest)", margin: 0 }}>
                            Simple, Transparent Onboarding
                        </h2>
                    </div>

                    <div className="host-steps-grid">
                        {onboardingSteps.map((step) => (
                            <div key={step.number} className="host-step-card">
                                <span className="host-step-number">{step.number}</span>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Host Assurance / FAQ strip */}
                <div className="host-assurance-card">
                    <div>
                        <p className="eyebrow" style={{ color: "#d2d8ce", letterSpacing: "2px", marginBottom: "8px" }}>
                            HOST ASSURANCE
                        </p>
                        <h3 style={{ fontFamily: "Georgia, serif", fontSize: "24px", color: "#fff", marginBottom: "10px" }}>
                            Full Flexibility for Your Family
                        </h3>
                        <p style={{ fontSize: "13px", color: "#d1d9cd", lineHeight: "1.6", margin: 0 }}>
                            Your home remains your sanctuary. Reserve dates for yourself, family, or friends anytime throughout the year with zero booking blackout restrictions or penalty fees.
                        </p>
                    </div>

                    <div style={{ textAlign: "right" }}>
                        <a
                            href="#enquiry"
                            className="button light"
                            style={{ display: "inline-flex" }}
                        >
                            Start Your Enquiry ↗
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
