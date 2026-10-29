import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { destinations } from "@/lib/content";
import { destinationsData } from "@/lib/destinationStays";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

export const metadata: Metadata = {
    title: "Destinations — NIVA Kerala Stays",
    description: "Explore 5 iconic Kerala destinations: Varkala, Poovar, Wayanad, Fort Kochi, and Kumarakom.",
};

const destinationGuides = [
    {
        slug: "varkala",
        name: "Varkala",
        badge: "COASTAL CLIFFS & ARABIAN SEA",
        overview: "A coastal wonder where dramatic red laterite cliffs plunge directly into the Arabian Sea. Renowned for its laid-back cliffside cafes, natural mineral springs, and golden sunsets that stretch into the horizon.",
        highlights: ["Sunset walks on the North Cliff", "Ayurvedic mineral spring baths", "Surfing & beach yoga pauses", "Fresh ocean catch grilled locally"],
        bestSeason: "October to March",
    },
    {
        slug: "poovar",
        name: "Poovar",
        badge: "RIVER, ESTUARY & GOLDEN BEACH",
        overview: "An untouched natural sanctuary tucked near the southern tip of Kerala where the Neyyar River, calm backwaters, and the open sea meet across a pristine spit of golden sand.",
        highlights: ["Non-motorized country canoe rides", "Mangrove bird-watching trails", "Secluded estuary pavilions", "Sunset over the sand bar"],
        bestSeason: "September to April",
    },
    {
        slug: "wayanad",
        name: "Wayanad",
        badge: "MISTY HIGHLANDS & RAINFOREST",
        overview: "Set in the cloud-draped Western Ghats, Wayanad is Kerala’s green heart. Ancient spice hills, cascading waterfalls, aromatic coffee plantations, and cool mountain air make it ideal for slow pauses.",
        highlights: ["Cardamom & pepper plantation walks", "Edakkal prehistoric cave explorations", "Banasura Sagar reservoir trails", "Organic farm-to-table hill dining"],
        bestSeason: "Year-round (lush monsoons in June-Aug)",
    },
    {
        slug: "fort-kochi",
        name: "Fort Kochi",
        badge: "SPICE HERITAGE & ART CULTURE",
        overview: "A timeless historic seaside enclave steeped in Portuguese, Dutch, and British merchant history. Quaint cobblestone streets, contemporary art galleries, ancient synagogues, and iconic Chinese fishing nets.",
        highlights: ["Heritage architecture & bicycle trails", "Kochi-Muziris art discovery", "Kathakali and classical dance centres", "Old spice warehouse boutique cafes"],
        bestSeason: "October to April",
    },
    {
        slug: "kumarakom",
        name: "Kumarakom",
        badge: "TRANQUIL BACKWATERS & LAGOONS",
        overview: "A cluster of peaceful islands set upon Vembanad Lake, the largest freshwater lake in Kerala. Famed for its lush mangrove bird sanctuary, lotus-filled canals, and traditional slow backwater living.",
        highlights: ["Quiet houseboat & shikhara journeys", "Kumarakom Bird Sanctuary walks", "Village toddy tapping & coir making", "Karimeen fish preparation lessons"],
        bestSeason: "September to March",
    },
];

export default function DestinationsPage() {
    return (
        <>
            <a className="skip-link" href="#destinations-main">Skip to content</a>
            <Navbar />

            <div className="subpage-hero">
                <div className="content-wrap">
                    <p className="eyebrow">ONE STATE · A WORLD OF FEELING</p>
                    <h1>Destinations of Kerala</h1>
                    <p className="subtitle">
                        From quiet lagoons and misty rainforest peaks to dramatic red laterite cliffs and historic spice lanes. Discover the places where NIVA comes alive.
                    </p>
                </div>
            </div>

            <main id="destinations-main" className="subpage-container content-wrap">
                {/* 5 Destination Cards Showcase */}
                <div style={{ marginTop: "40px", marginBottom: "60px" }}>
                    <div className="destination-grid">
                        {destinations.map((d, index) => {
                            const slug = d.name.toLowerCase().replace(/\s+/g, "-");
                            const stayCount = destinationsData[slug]?.stays.length || 0;
                            return (
                                <Link
                                    key={d.name}
                                    href={`/destinations/${slug}`}
                                    className={`destination destination-${index} destination-${slug} ${d.image ? "has-image" : ""}`}
                                >
                                    {d.image && (
                                        <>
                                            <Image
                                                src={d.image}
                                                alt=""
                                                aria-hidden="true"
                                                fill
                                                sizes="(max-width: 700px) 50vw, (max-width: 1000px) 33vw, 20vw"
                                                className="destination-img"
                                            />
                                            <div className="destination-shade" />
                                        </>
                                    )}
                                    <span className="destination-number">0{index + 1}</span>
                                    <span className="destination-info">
                                        <strong>{d.name}</strong>
                                        <small>{d.description} · {stayCount} stays</small>
                                    </span>
                                    <span className="destination-arrow" aria-hidden="true">↗</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* In-depth Destination Travel Guide */}
                <div className="destinations-detailed-guide">
                    <p className="eyebrow" style={{ marginBottom: "8px" }}>CURATED REGIONAL GUIDES</p>
                    <h2 style={{ fontFamily: "Georgia, serif", fontSize: "28px", color: "var(--forest)", marginBottom: "32px" }}>
                        Choose Your Kerala Landscape
                    </h2>

                    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                        {destinationGuides.map((guide, idx) => {
                            const stayCount = destinationsData[guide.slug]?.stays.length || 0;
                            return (
                                <article
                                    key={guide.slug}
                                    style={{
                                        border: "1px solid var(--line)",
                                        background: "#fffdf9",
                                        borderRadius: "8px",
                                        padding: "32px",
                                        boxShadow: "0 4px 18px rgba(32, 63, 52, 0.04)",
                                    }}
                                >
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "16px" }}>
                                        <div>
                                            <p className="eyebrow" style={{ color: "var(--gold)", marginBottom: "6px" }}>
                                                0{idx + 1} · {guide.badge}
                                            </p>
                                            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "26px", color: "var(--forest)", margin: 0 }}>
                                                {guide.name}
                                            </h3>
                                        </div>

                                        <Link
                                            href={`/destinations/${guide.slug}`}
                                            className="button"
                                            style={{ padding: "8px 18px", fontSize: "11px" }}
                                        >
                                            View {stayCount} Stays in {guide.name} <span>↗</span>
                                        </Link>
                                    </div>

                                    <p style={{ fontSize: "14px", color: "var(--ink)", lineHeight: "1.7", marginBottom: "20px" }}>
                                        {guide.overview}
                                    </p>

                                    <div className="destination-guide-specs">
                                        <div>
                                            <h4 style={{ fontSize: "11px", letterSpacing: "1.2px", textTransform: "uppercase", color: "var(--forest)", marginBottom: "8px" }}>
                                                Signature Highlights
                                            </h4>
                                            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "12.5px", color: "var(--muted)", display: "flex", flexDirection: "column", gap: "6px" }}>
                                                {guide.highlights.map((h, i) => (
                                                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
                                                        <span style={{ color: "var(--gold)" }}>✳</span>
                                                        <span>{h}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 style={{ fontSize: "11px", letterSpacing: "1.2px", textTransform: "uppercase", color: "var(--forest)", marginBottom: "8px" }}>
                                                Best Time to Visit
                                            </h4>
                                            <p style={{ fontSize: "12.5px", color: "var(--muted)", margin: "0 0 16px" }}>
                                                {guide.bestSeason}
                                            </p>

                                            <h4 style={{ fontSize: "11px", letterSpacing: "1.2px", textTransform: "uppercase", color: "var(--forest)", marginBottom: "8px" }}>
                                                NIVA Accommodations
                                            </h4>
                                            <p style={{ fontSize: "12.5px", color: "var(--muted)", margin: 0 }}>
                                                {stayCount} curated stays including villas, suites & cottages.
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Banner */}
                <div className="destination-cta-card">
                    <p className="eyebrow" style={{ color: "#d2d8ce", letterSpacing: "2px", marginBottom: "8px" }}>READY TO EXPLORE?</p>
                    <h3 style={{ fontFamily: "Georgia, serif", fontSize: "26px", color: "#fff", marginBottom: "12px" }}>
                        Find Your Somewhere in Kerala
                    </h3>
                    <p style={{ fontSize: "13.5px", color: "#d1d9cd", maxWidth: "560px", margin: "0 auto 24px", lineHeight: "1.6" }}>
                        Browse our complete inventory of illustrative stays across all 5 destinations and plan your tranquil escape.
                    </p>
                    <Link href="/stays" className="button light" style={{ display: "inline-flex" }}>
                        Browse All Stays ↗
                    </Link>
                </div>
            </main>

            <Footer />
        </>
    );
}

