import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

export const metadata: Metadata = {
    title: "Curated Experiences — NIVA Kerala",
    description: "Immerse yourself in authentic Kerala experiences: culinary workshops, slow village walks, country canoe trails, and spice hill visits.",
};

const fullExperiences = [
    {
        number: "01",
        category: "CULINARY HERITAGE",
        title: "A Taste of Home",
        subtitle: "Kerala Family Cooking & Shared Table",
        duration: "3 - 4 hours",
        location: "Fort Kochi & Kumarakom",
        description: "Step into a home kitchen fragrant with roasted coconut, curry leaves, and freshly ground peppercorns. Cook family recipes in traditional earthen cookware (chatty) and enjoy a leisurely sadya feast served on fresh banana leaves.",
        highlights: [
            "Market visit to handpick local spices and seasonal produce",
            "Clay pot cooking techniques and coconut milk extraction",
            "Banana leaf feast etiquette and traditional pairing notes",
            "Recipe book of heirloom family dishes to take home",
        ],
    },
    {
        number: "02",
        category: "SLOW LIVING",
        title: "Take the Slower Road",
        subtitle: "Guided Village Walks & Artisan Crafts",
        duration: "2 - 3 hours",
        location: "Kumarakom & Poovar",
        description: "Wander through tranquil riverside paths shaded by breadfruit and jackfruit trees. Meet master artisans engaged in ancient village crafts — from handloom weaving and coir yarn spinning to sustainable clay pottery.",
        highlights: [
            "Gentle walking trails through sleepy village lanes",
            "Live demonstration by local coir artisans and weavers",
            "Fresh tender coconut tasting plucked from the tree",
            "Conversations with community elders on local folklore",
        ],
    },
    {
        number: "03",
        category: "WATERWAYS",
        title: "Follow the Water",
        subtitle: "Country Canoe Exploration in Silent Canals",
        duration: "2 hours",
        location: "Kumarakom & Poovar Estuary",
        description: "Trade noisy motorized boats for the rhythmic dip of a wooden oar. Glide along narrow, lotus-choked waterways where Kingfishers dart across the water and village life unfolds along the embankments.",
        highlights: [
            "Non-motorized, zero-emission wooden canoe journey",
            "Access to quiet shallow canals inaccessible to large houseboats",
            "Guided bird-watching with native species checklist",
            "Early morning mist or golden twilight departures",
        ],
    },
    {
        number: "04",
        category: "HIGHLANDS & AGRO-ECOLOGY",
        title: "Rooted in the Hills",
        subtitle: "Organic Spice & Tea Plantation Trails",
        duration: "3 hours",
        location: "Wayanad Hills",
        description: "Walk under the canopy of rainforest giants intertwined with wild pepper vines, green cardamom shrubs, and coffee bushes. Learn the journey of spices from flower to harvest directly from small-scale growers.",
        highlights: [
            "Sensory spice smelling and tasting tour in organic groves",
            "History of Wayanad’s ancient spice trading routes",
            "Fresh mountain herbal tea brewing session",
            "Panoramic lookout points over misty valleys",
        ],
    },
    {
        number: "05",
        category: "CULTURAL EXPRESSIONS",
        title: "Living Traditions",
        subtitle: "Kathakali Mudras & Kerala Classical Arts",
        duration: "2 hours",
        location: "Fort Kochi",
        description: "Experience the profound drama of Kerala’s classical art forms. Witness the elaborate facial make-up ritual (Chutti) using mineral pigments, understand hand mudras (gestures), and enjoy an intimate performance.",
        highlights: [
            "Behind-the-scenes access to artist preparation and make-up",
            "Deciphering the 24 basic mudras with the master performer",
            "Intimate, acoustic live performance in a heritage courtyard",
            "Q&A on the epic narratives of the Mahabharata & Ramayana",
        ],
    },
    {
        number: "06",
        category: "COASTAL RHYTHMS",
        title: "Ocean Air & Laterite Paths",
        subtitle: "Varkala Cliffside Geology & Sunset Trail",
        duration: "2 hours",
        location: "Varkala",
        description: "Trace the rim of Varkala's dramatic geological formations where tertiary laterite cliffs meet the Arabian Sea. Conclude with a peaceful sunset contemplation and natural coconut hydration.",
        highlights: [
            "Geological storytelling about the unique Varkala formation",
            "Visit to quiet freshwater springs cascading toward the beach",
            "Sunset viewing from secluded cliff lookouts",
            "Local herbal refreshment prepared by coastal hosts",
        ],
    },
];

export default function ExperiencesPage() {
    return (
        <>
            <a className="skip-link" href="#experiences-main">Skip to content</a>
            <Navbar />

            <div className="subpage-hero">
                <div className="content-wrap">
                    <p className="eyebrow">GO BEYOND THE CHECK-IN</p>
                    <h1>Experiences Rooted in Kerala</h1>
                    <p className="subtitle">
                        Travel becomes transformative when it is felt. Discover authentic encounters curated with local hosts, master home chefs, and native artisans across Kerala.
                    </p>
                </div>
            </div>

            <main id="experiences-main" className="subpage-container content-wrap">
                {/* Experiences Grid */}
                <div className="experiences-page-grid">
                    {fullExperiences.map((exp) => (
                        <article
                            key={exp.number}
                            style={{
                                border: "1px solid var(--line)",
                                background: "#fffdf9",
                                borderRadius: "8px",
                                padding: "28px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                boxShadow: "0 4px 18px rgba(32, 63, 52, 0.04)",
                            }}
                        >
                            <div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "12px" }}>
                                    <span style={{ fontFamily: "Georgia, serif", fontSize: "28px", color: "var(--gold)" }}>
                                        {exp.number}
                                    </span>
                                    <span style={{ fontSize: "10.5px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "1px" }}>
                                        {exp.duration} · {exp.location}
                                    </span>
                                </div>

                                <p className="eyebrow" style={{ color: "var(--forest)", marginBottom: "6px" }}>
                                    {exp.category}
                                </p>
                                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: "var(--forest)", marginBottom: "4px" }}>
                                    {exp.title}
                                </h3>
                                <p style={{ fontSize: "12px", color: "var(--muted)", fontStyle: "italic", marginBottom: "14px" }}>
                                    {exp.subtitle}
                                </p>
                                <p style={{ fontSize: "13px", color: "var(--ink)", lineHeight: "1.6", marginBottom: "18px" }}>
                                    {exp.description}
                                </p>

                                <div style={{ borderTop: "1px solid var(--line)", paddingTop: "14px", marginTop: "14px" }}>
                                    <p style={{ fontSize: "10.5px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--forest)", fontWeight: 600, marginBottom: "8px" }}>
                                        Experience Inclusions
                                    </p>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "12px", color: "var(--muted)", display: "flex", flexDirection: "column", gap: "6px" }}>
                                        {exp.highlights.map((h, i) => (
                                            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
                                                <span style={{ color: "var(--gold)" }}>✳</span>
                                                <span>{h}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div style={{ marginTop: "24px", paddingTop: "14px", borderTop: "1px solid #f0eee6" }}>
                                <Link
                                    href="/stays"
                                    className="text-link"
                                    style={{ fontSize: "11.5px", fontWeight: 500, color: "var(--forest)" }}
                                >
                                    Pair with a NIVA stay ↗
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* The NIVA Experience Philosophy */}
                <div
                    style={{
                        marginTop: "60px",
                        background: "#eeeae0",
                        padding: "36px",
                        borderRadius: "8px",
                        border: "1px solid #dcd7ca",
                    }}
                >
                    <p className="eyebrow" style={{ marginBottom: "6px" }}>THE NIVA PHILOSOPHY</p>
                    <h3 style={{ fontFamily: "Georgia, serif", fontSize: "24px", color: "var(--forest)", marginBottom: "12px" }}>
                        How We Approach Experiences
                    </h3>
                    <div className="experiences-philosophy-grid">
                        <div>
                            <h4 style={{ fontSize: "14px", color: "var(--forest)", marginBottom: "6px" }}>
                                ✳ 100% Host-Led
                            </h4>
                            <p style={{ fontSize: "12.5px", color: "var(--muted)", lineHeight: "1.55", margin: 0 }}>
                                Experiences are led by native homeowners, local fishermen, artisans, and family cooks who share their own living traditions.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: "14px", color: "var(--forest)", marginBottom: "6px" }}>
                                ✳ Intimate Group Sizes
                            </h4>
                            <p style={{ fontSize: "12.5px", color: "var(--muted)", lineHeight: "1.55", margin: 0 }}>
                                We strictly limit participant sizes to 2 to 6 guests to preserve conversational intimacy and protect local community privacy.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: "14px", color: "var(--forest)", marginBottom: "6px" }}>
                                ✳ Environmental Care
                            </h4>
                            <p style={{ fontSize: "12.5px", color: "var(--muted)", lineHeight: "1.55", margin: 0 }}>
                                From zero motorized pollution on backwater trails to organic farming practices, our activities protect Kerala’s delicate nature.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to action */}
                <div style={{ marginTop: "50px", textAlign: "center" }}>
                    <p className="eyebrow" style={{ marginBottom: "8px" }}>READY FOR AN IMMERSIVE PAUSE?</p>
                    <h3 style={{ fontFamily: "Georgia, serif", fontSize: "26px", color: "var(--forest)", marginBottom: "12px" }}>
                        Begin with a Thoughtful Stay
                    </h3>
                    <p style={{ fontSize: "13.5px", color: "var(--muted)", maxWidth: "520px", margin: "0 auto 20px" }}>
                        Every experience is designed to be paired seamlessly with your stay at a NIVA home across Kerala.
                    </p>
                    <Link href="/stays" className="button" style={{ display: "inline-flex" }}>
                        Explore All Stays ↗
                    </Link>
                </div>
            </main>

            <Footer />
        </>
    );
}

