"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { brand, destinations } from "@/lib/content";
import { validateEnquiry } from "@/lib/domain";
import type { Destination, Experience, Property, StayFilters } from "@/lib/domain";
export function Navbar() {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <header className="navbar">
            <a className="wordmark" href="/" aria-label="NIVA home">
                NIVA<span>STAYS · EXPERIENCES · BELONGING</span>
            </a>
            <button
                type="button"
                className="menu-toggle"
                aria-expanded={open}
                aria-controls="main-nav"
                aria-label={open ? "Close navigation menu" : "Open navigation menu"}
                onClick={() => setOpen(!open)}
                suppressHydrationWarning
            >
                <span>{open ? "Close" : "Menu"}</span>
                <span className="menu-toggle-icon" aria-hidden="true">{open ? "✕" : "☰"}</span>
            </button>
            {open && <div className="nav-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />}
            <nav id="main-nav" className={`nav-links ${open ? "open" : ""}`} aria-label="Main navigation">
                {[["Stays", "/#stays"], ["Destinations", "/#destinations"], ["Experiences", "/#experiences"], ["Our story", "/#story"], ["List your property", "/#hosts"]].map(([name, href]) => (
                    <a
                        key={href}
                        href={href}
                        className={href.includes("hosts") ? "nav-cta-link" : ""}
                        onClick={() => setOpen(false)}
                    >
                        {name}{href.includes("hosts") && <span aria-hidden="true"> ↗</span>}
                    </a>
                ))}
            </nav>
        </header>
    );
}
export function SectionHeading({ eyebrow, title, children }: {
    eyebrow: string;
    title: string;
    children?: React.ReactNode;
}) { return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{children}</div>; }
export function CTA({ href, children, light = false }: {
    href: string;
    children: React.ReactNode;
    light?: boolean;
}) { return <a className={`button ${light ? "light" : ""}`} href={href}>{children}<span aria-hidden="true">↗</span></a>; }
export function Hero() { return <section className="hero" aria-labelledby="hero-heading"><Image src="/images/kerala.jpg" alt="A houseboat on palm-lined Kerala backwaters" fill priority sizes="100vw" className="hero-image"/><div className="hero-shade"/><div className="hero-content"><p className="eyebrow">A LITTLE CLOSER TO KERALA</p><h1 id="hero-heading">Stay somewhere.<br /><em>Feel everything.</em></h1><p>Thoughtful stays. Local stories. A slower kind of travel.</p><a className="hero-link" href="#stays">Find your somewhere <span aria-hidden="true">↗</span></a></div><div className="hero-bottom"><span>KERALA, INDIA</span><span>9.5916° N &nbsp; 76.5222° E</span><a href="#discover">A little further down ↓</a></div></section>; }
export function SearchBar({ onSearch }: {
    onSearch?: (filters: StayFilters) => void;
}) {
    const router = useRouter();
    const [location, setLocation] = useState("");
    const [guests, setGuests] = useState(1);
    const [date, setDate] = useState("");
    return <form className="search-bar" suppressHydrationWarning onSubmit={e => {
        e.preventDefault();
        if (location) {
            const slug = location.toLowerCase().replace(/\s+/g, "-");
            router.push(`/destinations/${slug}`);
        } else if (onSearch) {
            onSearch({ location, guests });
            document.getElementById("stays")?.scrollIntoView({ behavior: "smooth" });
        }
    }}><label><span>WHERE TO?</span><select value={location} suppressHydrationWarning onChange={e => setLocation(e.target.value)}><option value="">Somewhere in Kerala</option>{destinations.map(d => <option key={d.name}>{d.name}</option>)}</select></label><label><span>WHEN?</span><input aria-label="Preferred arrival date, availability is not checked" type="date" value={date} suppressHydrationWarning onChange={e => setDate(e.target.value)}/></label><label><span>WITH WHO?</span><select value={guests} suppressHydrationWarning onChange={e => setGuests(Number(e.target.value))}>{[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>)}</select></label><button className="button" type="submit" suppressHydrationWarning>Explore stays <span aria-hidden="true">↗</span></button></form>; }
export function PropertyCard({ property }: {
    property: Property;
}) {
    const [cat, tag] = property.category && property.tag
        ? [property.category, property.tag]
        : property.category?.includes("·")
            ? property.category.split("·").map(s => s.trim())
            : property.tag?.includes("·")
                ? property.tag.split("·").map(s => s.trim())
                : [property.category ?? property.location, property.tag ?? property.type];

    const isPhoto = property.image?.startsWith("/") || property.image?.includes(".");

    return (
        <article className="property-card">
            <div className={`property-art ${isPhoto ? "has-photo" : property.image}`} role="img" aria-label={isPhoto ? `Photograph of ${property.name}` : `Illustrative placeholder for ${(property.category || property.type || property.name).toLowerCase()}`}>
                {isPhoto ? (
                    <>
                        <Image
                            src={property.image}
                            alt={property.name}
                            fill
                            sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                            className="property-card-img"
                        />
                        <div className="property-card-shade" />
                        <span className="sample-badge">SAMPLE STAY</span>
                    </>
                ) : (
                    <>
                        <span className="sample-badge">SAMPLE STAY</span>
                        <span className="art-window"/>
                        <small>ILLUSTRATION · PHOTO TO COME</small>
                    </>
                )}
            </div>
            <div className="property-card-content">
                <p className="card-meta">{cat}{tag ? <> <span>· {tag}</span></> : null}</p>
                <h3>{property.name}</h3>
                <p className="card-mood">{property.mood}</p>
                {property.inclusions && property.inclusions.length > 0 && (
                    <div className="card-inclusions-wrap">
                        <p className="inclusions-label">Package Inclusions</p>
                        <ul className="card-inclusions">
                            {property.inclusions.map((item, idx) => (
                                <li key={idx}>
                                    <span className="bullet" aria-hidden="true">✳</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="card-bottom">
                    <span>Illustrative <strong>₹{property.price.toLocaleString("en-IN")}</strong> <small>/ night</small></span>
                    <span className="guests-badge">Up to {property.guests} guests</span>
                </div>
            </div>
        </article>
    );
}
export function DestinationCard({ destination, index, onSelect }: {
    destination: Destination;
    index: number;
    onSelect?: () => void;
}) {
    const slug = destination.name.toLowerCase().replace(/\s+/g, "-");
    const href = `/destinations/${slug}`;
    return (
        <Link
            href={href}
            className={`destination destination-${index} destination-${slug} ${destination.image ? "has-image" : ""}`}
            onClick={() => {
                if (onSelect) onSelect();
            }}
        >
            {destination.image && (
                <>
                    <Image
                        src={destination.image}
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
            <span className="destination-info"><strong>{destination.name}</strong><small>{destination.description}</small></span>
            <span aria-hidden="true">↗</span>
        </Link>
    );
}
export function ExperienceCard({ experience, index }: {
    experience: Experience;
    index: number;
}) { return <article className="experience-card"><span className="experience-number">0{index + 1}</span><p className="eyebrow">{experience.category}</p><h3>{experience.name}</h3><p>{experience.description}</p></article>; }
export function EnquiryForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const result = validateEnquiry({ name, email, message });
        setErrors(result);
        if (!Object.values(result).some(Boolean)) {
            setSubmitted(true);
        }
    };

    if (submitted) {
        return (
            <div className="enquiry-form enquiry-success" role="status">
                <span className="botanical" aria-hidden="true">✳</span>
                <h3>Thank You for Reaching Out</h3>
                <p>
                    Thank you, <strong>{name}</strong>. Your enquiry regarding your property {location ? `in ${location}` : "in Kerala"} has been received. Our hospitality team will review your details and reach out to <strong>{email}</strong> shortly.
                </p>
                <button
                    type="button"
                    className="button"
                    style={{ margin: "0 auto", padding: "11px 22px" }}
                    onClick={() => {
                        setSubmitted(false);
                        setName("");
                        setEmail("");
                        setLocation("");
                        setMessage("");
                        setErrors({});
                    }}
                    suppressHydrationWarning
                >
                    Send another enquiry ↺
                </button>
            </div>
        );
    }

    return (
        <form className="enquiry-form" suppressHydrationWarning noValidate onSubmit={handleSubmit}>
            <p className="eyebrow">PROPERTY PARTNERSHIP ENQUIRY</p>
            <p>Interested in joining the NIVA collection or exploring property management? Tell us about your home below.</p>

            <label>
                Your name
                <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="e.g. Maya Mohan"
                    value={name}
                    onChange={e => { setName(e.target.value); setErrors(prev => ({ ...prev, name: "" })); }}
                    suppressHydrationWarning
                    aria-invalid={!!errors.name}
                    aria-describedby="name-error"
                />
                <span className="field-error" id="name-error">{errors.name}</span>
            </label>

            <label>
                Email address
                <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="e.g. maya@example.com"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: "" })); }}
                    suppressHydrationWarning
                    aria-invalid={!!errors.email}
                    aria-describedby="email-error"
                />
                <span className="field-error" id="email-error">{errors.email}</span>
            </label>

            <label>
                Property location
                <input
                    name="location"
                    type="text"
                    placeholder="e.g. Fort Kochi, Wayanad, Varkala..."
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    suppressHydrationWarning
                />
            </label>

            <label>
                Tell us about your property
                <textarea
                    name="message"
                    required
                    minLength={10}
                    placeholder="Briefly describe your home, number of rooms, and the kind of partnership you envision..."
                    value={message}
                    onChange={e => { setMessage(e.target.value); setErrors(prev => ({ ...prev, message: "" })); }}
                    suppressHydrationWarning
                    aria-invalid={!!errors.message}
                    aria-describedby="message-error"
                />
                <span className="field-error" id="message-error">{errors.message}</span>
            </label>

            <button className="button" type="submit" suppressHydrationWarning>
                Submit Enquiry <span aria-hidden="true">↗</span>
            </button>
        </form>
    );
}
export function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <a className="wordmark" href="#">{brand.name}</a>
                <p>{brand.tagline}</p>
                <a href="#enquiry">Contact & enquiries ↗</a>
            </div>
            <div className="footer-bottom">
                <span suppressHydrationWarning>© {new Date().getFullYear()} NIVA · Kerala, India</span>
                <details>
                    <summary>Contact us</summary>
                    <p>
                        Email: <a href="mailto:hello@nivastays.com">hello@nivastays.com</a><br />
                        Guest Support: <a href="tel:+919847012345">+91 98470 12345</a><br />
                        Host Partnerships: <a href="tel:+919847054321">+91 98470 54321</a><br />
                        Hours: Mon – Sat, 9:00 AM – 7:00 PM IST
                    </p>
                </details>
                <details>
                    <summary>Privacy & terms</summary>
                    <p>Demo form content is validated only in your browser and is not submitted or stored by this site. No booking or payment service is offered in this preview. Full policies will be published before launch.</p>
                </details>
                <a href="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944" target="_blank" rel="noreferrer">
                    Photography source ↗
                </a>
            </div>
        </footer>
    );
}
