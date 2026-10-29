import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

export const metadata: Metadata = {
    title: "Our Story — NIVA Kerala Hospitality",
    description: "Learn about NIVA's philosophy of slow travel, Kerala heritage homes, and community-rooted hospitality.",
};

const storyPillars = [
    {
        number: "01",
        title: "Homes with Memory",
        description: "We don't build generic concrete boxes. We partner with distinctive heritage bungalows, coastal pavilions, and hill retreats that carry Kerala's architectural soul — from traditional teak rafters and cool laterite stone to open courtyard nalukettus.",
        mobileDescription: "Distinctive heritage bungalows and villas that carry Kerala's authentic architectural soul.",
    },
    {
        number: "02",
        title: "A Slower Rhythm",
        description: "Modern travel is often a race against checklists. NIVA is an invitation to pause. To watch the morning mist rise over Vembanad Lake, sip fresh ginger chai on a verandah, and let days unfold without urgency.",
        mobileDescription: "An invitation to pause, watch the mist rise over calm waters, and let days unfold without urgency.",
    },
    {
        number: "03",
        title: "Community & Fair Stewardship",
        description: "True hospitality enriches everyone it touches. Our revenue-sharing model empowers local home owners, while our experiences directly sustain village artisans, canoe navigators, and family cooks.",
        mobileDescription: "Fair revenue-sharing that directly empowers native homeowners, artisans, and family cooks.",
    },
    {
        number: "04",
        title: "A Sense of Belonging",
        description: "When you stay with NIVA, you aren't just a guest in a room number. You are welcomed into the neighborhood, connected to the land, and invited into the living stories of God’s Own Country.",
        mobileDescription: "Thoughtful hosting that welcomes you into the neighborhood and connects you to the land.",
    },
];

export default function StoryPage() {
    return (
        <>
            <a className="skip-link" href="#story-main">Skip to content</a>
            <Navbar />

            <div className="subpage-hero">
                <div className="content-wrap">
                    <p className="eyebrow">THE NIVA WAY</p>
                    <h1>A Sense of Place.<br /><em>A Sense of Belonging.</em></h1>
                    <p className="subtitle">
                        NIVA was born from a simple conviction: travel feels richest when it feels personal, unhurried, and deeply rooted in the land.
                    </p>
                </div>
            </div>

            <main id="story-main" className="subpage-container content-wrap">
                {/* Introduction & Narrative */}
                <div className="story-intro-grid">
                    <div>
                        <p className="eyebrow" style={{ color: "var(--gold)", marginBottom: "8px" }}>OUR GENESIS</p>
                        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "28px", color: "var(--forest)", marginBottom: "16px", lineHeight: "1.3" }}>
                            Why We Are Building NIVA in Kerala
                        </h2>

                        {/* Desktop: Full Detailed Narrative */}
                        <div className="desktop-story-text">
                            <p style={{ fontSize: "14px", color: "var(--ink)", lineHeight: "1.7", marginBottom: "14px" }}>
                                Across the winding backwaters, spice-scented hills, and coastal cliffs of Kerala exist hundreds of breathtaking homes. Many have stood for generations, shaped by local artisans using sustainable timber, clay, and stone.
                            </p>
                            <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.7", marginBottom: "14px" }}>
                                Yet mainstream travel has increasingly pushed hospitality toward mass commercialization — standardized rooms, sterile interactions, and disconnected itineraries.
                            </p>
                            <p style={{ fontSize: "14px", color: "var(--ink)", lineHeight: "1.7", marginBottom: "20px" }}>
                                NIVA is our quiet alternative. We curate and manage intimate properties with deep character, pairing them with warm, thoughtful hosting and unhurried cultural experiences.
                            </p>
                        </div>

                        {/* Mobile: Clean, Breathable, Concise Summary */}
                        <div className="mobile-story-text">
                            <p style={{ fontSize: "13.5px", color: "var(--ink)", lineHeight: "1.6", marginBottom: "12px" }}>
                                Across Kerala exist hundreds of breathtaking homes shaped by generations of local craft. NIVA is our quiet alternative to mass, commercialized tourism.
                            </p>
                            <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.55", marginBottom: "18px" }}>
                                We curate distinctive heritage properties with deep character, pairing them with warm, thoughtful hosting and unhurried living.
                            </p>
                        </div>

                        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                            <Link href="/stays" className="button">
                                Explore Stays ↗
                            </Link>
                            <Link href="/list-property" className="button light">
                                Partner with Us ↗
                            </Link>
                        </div>
                    </div>

                    <div className="story-intro-image">
                        <Image
                            src="/images/kerala.jpg"
                            alt="Serene Kerala backwater scenery"
                            fill
                            sizes="(max-width: 700px) 100vw, 45vw"
                            style={{ objectFit: "cover" }}
                            priority
                        />
                        <div style={{ position: "absolute", bottom: "16px", left: "16px", background: "#fffdf9", padding: "8px 14px", borderRadius: "4px", fontSize: "10px", letterSpacing: "1.2px", color: "var(--forest)", fontWeight: 600 }}>
                            ROOTED HERE · OPEN TO THE WORLD
                        </div>
                    </div>
                </div>

                {/* The 4 Pillars of NIVA */}
                <div style={{ marginTop: "72px" }}>
                    <div style={{ textAlign: "center", maxWidth: "620px", margin: "0 auto 40px" }}>
                        <p className="eyebrow" style={{ marginBottom: "6px" }}>OUR GUIDING VALUES</p>
                        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "30px", color: "var(--forest)" }}>
                            Four Pillars of Thoughtful Hosting
                        </h2>
                    </div>

                    <div className="story-pillars-grid">
                        {storyPillars.map((pillar) => (
                            <div
                                key={pillar.number}
                                style={{
                                    border: "1px solid var(--line)",
                                    background: "#fffdf9",
                                    borderRadius: "8px",
                                    padding: "28px",
                                    boxShadow: "0 4px 18px rgba(32, 63, 52, 0.04)",
                                }}
                            >
                                <span style={{ fontFamily: "Georgia, serif", fontSize: "28px", color: "var(--gold)", display: "block", marginBottom: "12px" }}>
                                    {pillar.number}
                                </span>
                                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "20px", color: "var(--forest)", marginBottom: "10px" }}>
                                    {pillar.title}
                                </h3>

                                {/* Desktop Text */}
                                <p className="desktop-story-text" style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.65", margin: 0 }}>
                                    {pillar.description}
                                </p>

                                {/* Mobile Concise Text */}
                                <p className="mobile-story-text" style={{ fontSize: "12.5px", color: "var(--muted)", lineHeight: "1.55", margin: 0 }}>
                                    {pillar.mobileDescription}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Host Partnership Callout */}
                <div className="story-cta-card">
                    <div>
                        <p className="eyebrow" style={{ color: "#d2d8ce", letterSpacing: "2px", marginBottom: "8px" }}>
                            PROPERTY OWNERS & HOSTS
                        </p>
                        <h3 style={{ fontFamily: "Georgia, serif", fontSize: "28px", color: "#fff", marginBottom: "12px", lineHeight: "1.25" }}>
                            Have a Special Home in Kerala?<br />
                            <em>Let’s write the next chapter together.</em>
                        </h3>

                        {/* Desktop Description */}
                        <p className="desktop-story-text" style={{ fontSize: "13.5px", color: "#d1d9cd", lineHeight: "1.6", margin: 0 }}>
                            We partner with discerning home owners across Kerala through respectful property management, transparent revenue sharing, and meticulous guest care.
                        </p>

                        {/* Mobile Description */}
                        <p className="mobile-story-text" style={{ fontSize: "12.5px", color: "#d1d9cd", lineHeight: "1.5", margin: 0 }}>
                            Partner with NIVA through respectful property management, transparent revenue sharing, and dedicated on-ground care.
                        </p>
                    </div>

                    <div className="story-cta-btn-wrap">
                        <Link href="/list-property" className="button light" style={{ display: "inline-flex" }}>
                            List Your Property with NIVA ↗
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
