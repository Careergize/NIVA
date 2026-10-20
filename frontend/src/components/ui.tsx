"use client";
import { useState } from "react";
import Image from "next/image";
import { brand, destinations } from "@/lib/content";
import { validateEnquiry } from "@/lib/domain";
import type { Destination, Experience, Property, StayFilters } from "@/lib/domain";
export function Navbar() {
    const [open, setOpen] = useState(false);
    return <header className="navbar"><a className="wordmark" href="#" aria-label="NIVA home">NIVA<span>STAYS · EXPERIENCES · BELONGING</span></a><button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? "Close −" : "Menu +"}</button><nav id="main-nav" className={open ? "nav-links open" : "nav-links"} aria-label="Main navigation">{[["Stays", "#stays"], ["Experiences", "#experiences"], ["Our story", "#story"], ["List your property", "#hosts"]].map(([name, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{name}{href === "#hosts" && <span aria-hidden="true"> ↗</span>}</a>)}</nav></header>;
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
    onSearch: (filters: StayFilters) => void;
}) { const [location, setLocation] = useState(""); const [guests, setGuests] = useState(1); const [date, setDate] = useState(""); return <form className="search-bar" onSubmit={e => { e.preventDefault(); onSearch({ location, guests }); document.getElementById("stays")?.scrollIntoView({ behavior: "smooth" }); }}><label><span>WHERE TO?</span><select value={location} onChange={e => setLocation(e.target.value)}><option value="">Somewhere in Kerala</option>{destinations.map(d => <option key={d.name}>{d.name}</option>)}</select></label><label><span>WHEN?</span><input aria-label="Preferred arrival date, availability is not checked" type="date" value={date} onChange={e => setDate(e.target.value)}/></label><label><span>WITH WHO?</span><select value={guests} onChange={e => setGuests(Number(e.target.value))}>{[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>)}</select></label><button className="button" type="submit">Explore stays <span aria-hidden="true">↗</span></button><p className="search-note">Explore sample stays. Dates express your preference; availability is not live.</p></form>; }
export function PropertyCard({ property }: {
    property: Property;
}) { return <article className="property-card"><div className={`property-art ${property.image}`} role="img" aria-label={`Illustrative placeholder for ${property.type.toLowerCase()}`}><span className="sample-badge">SAMPLE STAY</span><span className="art-window"/><small>ILLUSTRATION · PHOTO TO COME</small></div><p className="card-meta">{property.location} <span>· {property.type}</span></p><h3>{property.name}</h3><p>{property.mood}</p><div className="card-bottom"><span>Illustrative ₹{property.price.toLocaleString("en-IN")} <small>/ night</small></span><span>Up to {property.guests} guests</span></div></article>; }
export function DestinationCard({ destination, index, onSelect }: {
    destination: Destination;
    index: number;
    onSelect: () => void;
}) { return <button className={`destination destination-${index}`} onClick={onSelect}><span className="destination-number">0{index + 1}</span><span><strong>{destination.name}</strong><small>{destination.description}</small></span><span aria-hidden="true">↗</span></button>; }
export function ExperienceCard({ experience, index }: {
    experience: Experience;
    index: number;
}) { return <article className="experience-card"><span className="experience-number">0{index + 1}</span><p className="eyebrow">{experience.category}</p><h3>{experience.name}</h3><p>{experience.description}</p></article>; }
export function EnquiryForm() { const [errors, setErrors] = useState<Record<string, string>>({}); const [preview, setPreview] = useState(false); return <form className="enquiry-form" noValidate onSubmit={e => { e.preventDefault(); const data = new FormData(e.currentTarget); const result = validateEnquiry({ name: String(data.get("name") || ""), email: String(data.get("email") || ""), message: String(data.get("message") || "") }); setErrors(result); setPreview(!Object.values(result).some(Boolean)); }}><p className="eyebrow">DEMO ENQUIRY FORM</p><p>This preview does not send or store enquiries. Contact details will be added before launch.</p>{[{ key: "name", label: "Your name", type: "text" }, { key: "email", label: "Email address", type: "email" }, { key: "message", label: "Tell us about your property", type: "textarea" }].map(field => <label key={field.key}>{field.label}{field.type === "textarea" ? <textarea name={field.key} required minLength={10} aria-invalid={!!errors[field.key]} aria-describedby={`${field.key}-error`} onChange={() => setPreview(false)}/> : <input name={field.key} type={field.type} autoComplete={field.key} required aria-invalid={!!errors[field.key]} aria-describedby={`${field.key}-error`} onChange={() => setPreview(false)}/>}<span className="field-error" id={`${field.key}-error`}>{errors[field.key]}</span></label>)}<button className="button" type="submit">Check demo enquiry <span aria-hidden="true">↗</span></button><div role="status">{preview && "Your demo enquiry passes validation. Nothing has been sent or saved."}</div></form>; }
export function Footer() { return <footer><div className="footer-top"><a className="wordmark" href="#">{brand.name}</a><p>{brand.tagline}</p><a href="#enquiry">Contact & enquiries ↗</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} NIVA · Kerala, India</span><span>Pre-launch preview · Sample inventory</span><details><summary>Privacy & terms</summary><p>Demo form content is validated only in your browser and is not submitted or stored by this site. No booking or payment service is offered in this preview. Full policies will be published before launch.</p></details><a href="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944" target="_blank" rel="noreferrer">Photography source ↗</a></div></footer>; }
