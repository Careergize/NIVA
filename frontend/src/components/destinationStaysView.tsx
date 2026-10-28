"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer } from "./ui";
import type { DestinationDetail, RoomStay } from "@/lib/domain";

export default function DestinationStaysView({
    destination,
    otherDestinations,
}: {
    destination: DestinationDetail;
    otherDestinations: { name: string; slug: string }[];
}) {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [destination.slug]);

    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guestsFilter, setGuestsFilter] = useState("all");
    const [typeFilter, setTypeFilter] = useState("all");
    const [priceFilter, setPriceFilter] = useState("all");

    // Booking modal state
    const [selectedStay, setSelectedStay] = useState<RoomStay | null>(null);
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [guestName, setGuestName] = useState("");
    const [guestEmail, setGuestEmail] = useState("");

    // Filtering logic
    const filteredStays = destination.stays.filter(stay => {
        if (guestsFilter !== "all" && stay.guests < Number(guestsFilter)) {
            return false;
        }
        if (typeFilter !== "all" && !stay.type.toLowerCase().includes(typeFilter.toLowerCase()) && !stay.name.toLowerCase().includes(typeFilter.toLowerCase())) {
            return false;
        }
        if (priceFilter === "under-6000" && stay.price >= 6000) return false;
        if (priceFilter === "6000-8500" && (stay.price < 6000 || stay.price > 8500)) return false;
        if (priceFilter === "above-8500" && stay.price <= 8500) return false;
        return true;
    });

    const handleOpenBooking = (stay: RoomStay) => {
        setSelectedStay(stay);
        setBookingSuccess(false);
    };

    const handleConfirmBooking = (e: React.FormEvent) => {
        e.preventDefault();
        setBookingSuccess(true);
    };

    return (
        <>
            <a className="skip-link" href="#destination-main">Skip to content</a>
            <Navbar />

            <main id="destination-main" className="destination-page">
                {/* Hero Banner with Dynamic Destination Title */}
                <section className="destination-hero" aria-labelledby="destination-heading">
                    <Image
                        src={destination.heroImage}
                        alt={`Scenic view of ${destination.name}`}
                        fill
                        priority
                        sizes="100vw"
                        className="destination-hero-img"
                    />
                    <div className="destination-hero-shade" />

                    <div className="destination-hero-content">
                        <Link href="/#destinations" className="destination-back-btn">
                            ← Back to all destinations
                        </Link>
                        <p className="eyebrow" style={{ color: "#d2d8ce", letterSpacing: "2.5px" }}>
                            THE NIVA COLLECTION · {destination.name.toUpperCase()}
                        </p>
                        <h1 id="destination-heading">{destination.title}</h1>
                        <p className="destination-hero-subtitle">{destination.subtitle}</p>
                    </div>
                </section>

                <div className="content-wrap destination-content-container">
                    {/* Floating Search & Filter Bar (Matching Second Image Reference) */}
                    <div className="destination-search-card">
                        <form
                            className="destination-search-grid"
                            onSubmit={(e) => e.preventDefault()}
                            suppressHydrationWarning
                        >
                            <label className="search-field">
                                <span>CHECK-IN</span>
                                <input
                                    type="date"
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                    aria-label="Check-in date"
                                    suppressHydrationWarning
                                />
                            </label>

                            <label className="search-field">
                                <span>CHECK-OUT</span>
                                <input
                                    type="date"
                                    value={checkOut}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                    aria-label="Check-out date"
                                    suppressHydrationWarning
                                />
                            </label>

                            <label className="search-field">
                                <span>GUESTS</span>
                                <select
                                    value={guestsFilter}
                                    onChange={(e) => setGuestsFilter(e.target.value)}
                                    aria-label="Filter by guest capacity"
                                    suppressHydrationWarning
                                >
                                    <option value="all">Any Guests</option>
                                    <option value="1">1+ Guest</option>
                                    <option value="2">2+ Guests</option>
                                    <option value="3">3+ Guests</option>
                                    <option value="4">4+ Guests</option>
                                </select>
                            </label>

                            <label className="search-field">
                                <span>ROOM TYPE</span>
                                <select
                                    value={typeFilter}
                                    onChange={(e) => setTypeFilter(e.target.value)}
                                    aria-label="Filter by room type"
                                    suppressHydrationWarning
                                >
                                    <option value="all">All Room Types</option>
                                    <option value="Villa">Villas</option>
                                    <option value="Suite">Suites</option>
                                    <option value="Room">Standard Rooms</option>
                                    <option value="Cottage">Cottages & Chalets</option>
                                    <option value="Studio">Studios</option>
                                </select>
                            </label>

                            <label className="search-field">
                                <span>RATES</span>
                                <select
                                    value={priceFilter}
                                    onChange={(e) => setPriceFilter(e.target.value)}
                                    aria-label="Filter by price rate"
                                    suppressHydrationWarning
                                >
                                    <option value="all">All Rates</option>
                                    <option value="under-6000">Under ₹6,000</option>
                                    <option value="6000-8500">₹6,000 - ₹8,500</option>
                                    <option value="above-8500">Above ₹8,500</option>
                                </select>
                            </label>

                            <button
                                type="button"
                                className="button destination-submit-btn"
                                onClick={() => {
                                    setGuestsFilter("all");
                                    setTypeFilter("all");
                                    setPriceFilter("all");
                                }}
                                suppressHydrationWarning
                            >
                                Reset <span>↺</span>
                            </button>
                        </form>
                    </div>

                    {/* Results Overview */}
                    <div className="destination-results-header">
                        <div>
                            <p className="eyebrow" style={{ marginBottom: "6px" }}>CURATED HOSPITALITY</p>
                            <h2>Distinctive Stays in {destination.name}</h2>
                        </div>
                        <p className="destination-count-badge">
                            {filteredStays.length} {filteredStays.length === 1 ? "stay available" : "stays available"}
                        </p>
                    </div>

                    {/* 3-Column Stays Grid (Matching Second Image Layout & NIVA Theme) */}
                    {filteredStays.length > 0 ? (
                        <div className="destination-stays-grid">
                            {filteredStays.map((stay) => (
                                <article key={stay.id} className="room-card">
                                    {/* Image Container with Price Badge */}
                                    <div className="room-card-image-wrap">
                                        <Image
                                            src={stay.image}
                                            alt={stay.name}
                                            fill
                                            sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                                            className="room-card-image"
                                        />
                                        <div className="room-card-gradient" />
                                        <div className="room-price-badge">
                                            From <strong>₹{stay.price.toLocaleString("en-IN")}</strong> <small>/ night</small>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="room-card-body">
                                        <p className="room-card-type">{stay.type.toUpperCase()}</p>
                                        <h3 className="room-card-title">{stay.name}</h3>
                                        <p className="room-card-desc">{stay.description}</p>

                                        {/* Specs Row with Icons (Guests, Beds, Size) */}
                                        <div className="room-specs-row">
                                            <span className="spec-item" title="Capacity">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="9" cy="7" r="4"></circle>
                                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                                </svg>
                                                {stay.guests} {stay.guests === 1 ? "Guest" : "Guests"}
                                            </span>

                                            <span className="spec-item" title="Bedding">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                    <path d="M2 4v16"></path>
                                                    <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
                                                    <path d="M2 17h20"></path>
                                                    <path d="M6 8v9"></path>
                                                </svg>
                                                {stay.beds}
                                            </span>

                                            <span className="spec-item" title="Room Dimensions">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                                    <line x1="3" y1="9" x2="21" y2="9"></line>
                                                    <line x1="9" y1="21" x2="9" y2="9"></line>
                                                </svg>
                                                {stay.size}
                                            </span>
                                        </div>

                                        {/* Features Badges */}
                                        <div className="room-features-pills">
                                            {stay.features.slice(0, 3).map((f, i) => (
                                                <span key={i} className="feature-pill">
                                                    <span style={{ color: "var(--gold)" }}>✳</span> {f}
                                                </span>
                                            ))}
                                        </div>

                                        {/* BOOK NOW Button */}
                                        <button
                                            type="button"
                                            className="room-book-btn"
                                            onClick={() => handleOpenBooking(stay)}
                                            suppressHydrationWarning
                                        >
                                            Book Now <span>↗</span>
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="empty-state" style={{ margin: "40px 0" }}>
                            <h3>No stays match your current filters</h3>
                            <p>Try clearing your guest count or room type filters to view all stays in {destination.name}.</p>
                            <button
                                type="button"
                                onClick={() => {
                                    setGuestsFilter("all");
                                    setTypeFilter("all");
                                    setPriceFilter("all");
                                }}
                                suppressHydrationWarning
                            >
                                Show all {destination.name} stays ↗
                            </button>
                        </div>
                    )}

                    {/* Explore Other Destinations Section */}
                    <div className="other-destinations-section">
                        <p className="eyebrow">CONTINUE YOUR JOURNEY</p>
                        <h3>Explore Other Kerala Destinations</h3>
                        <div className="destination-chips-wrap">
                            {otherDestinations.map(d => (
                                <Link
                                    key={d.slug}
                                    href={`/destinations/${d.slug}`}
                                    className={`destination-chip ${d.slug === destination.slug ? "active" : ""}`}
                                >
                                    {d.name} <span>↗</span>
                                </Link>
                            ))}
                            <Link href="/#destinations" className="destination-chip">
                                Home Overview <span>↗</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            {/* Interactive Booking Modal */}
            {selectedStay && (
                <div className="modal-backdrop" onClick={() => setSelectedStay(null)}>
                    <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            className="modal-close-btn"
                            onClick={() => setSelectedStay(null)}
                            aria-label="Close modal"
                            suppressHydrationWarning
                        >
                            ✕
                        </button>

                        {!bookingSuccess ? (
                            <>
                                <p className="eyebrow" style={{ color: "var(--gold)", marginBottom: "8px" }}>
                                    PRE-LAUNCH RESERVATION PREVIEW
                                </p>
                                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "24px", color: "var(--forest)", marginBottom: "4px" }}>
                                    {selectedStay.name}
                                </h3>
                                <p style={{ fontSize: "12px", color: "var(--muted)", marginBottom: "18px" }}>
                                    {selectedStay.destinationName}, Kerala · {selectedStay.type}
                                </p>

                                <div className="modal-stay-preview">
                                    <div className="modal-image-wrap">
                                        <Image
                                            src={selectedStay.image}
                                            alt={selectedStay.name}
                                            fill
                                            sizes="120px"
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="modal-stay-info">
                                        <p style={{ margin: 0, fontSize: "13px", fontWeight: "600", color: "var(--forest)" }}>
                                            ₹{selectedStay.price.toLocaleString("en-IN")} <small style={{ fontWeight: 400, color: "var(--muted)" }}>/ night</small>
                                        </p>
                                        <p style={{ margin: "4px 0", fontSize: "11px", color: "var(--ink)" }}>
                                            {selectedStay.beds} · {selectedStay.baths}
                                        </p>
                                        <p style={{ margin: 0, fontSize: "10.5px", color: "var(--muted)" }}>
                                            Includes daily artisan breakfast & local host support
                                        </p>
                                    </div>
                                </div>

                                <form onSubmit={handleConfirmBooking} className="modal-form" suppressHydrationWarning>
                                    <div className="modal-form-grid">
                                        <label>
                                            Preferred Arrival
                                            <input
                                                type="date"
                                                required
                                                defaultValue={checkIn || "2026-11-15"}
                                                suppressHydrationWarning
                                            />
                                        </label>
                                        <label>
                                            Departure
                                            <input
                                                type="date"
                                                required
                                                defaultValue={checkOut || "2026-11-18"}
                                                suppressHydrationWarning
                                            />
                                        </label>
                                    </div>

                                    <label>
                                        Your Full Name
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. Maya Mohan"
                                            value={guestName}
                                            onChange={(e) => setGuestName(e.target.value)}
                                            suppressHydrationWarning
                                        />
                                    </label>

                                    <label>
                                        Email Address
                                        <input
                                            type="email"
                                            required
                                            placeholder="e.g. maya@example.com"
                                            value={guestEmail}
                                            onChange={(e) => setGuestEmail(e.target.value)}
                                            suppressHydrationWarning
                                        />
                                    </label>

                                    <div className="modal-price-calc">
                                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--muted)", marginBottom: "4px" }}>
                                            <span>₹{selectedStay.price.toLocaleString("en-IN")} × 3 nights</span>
                                            <span>₹{(selectedStay.price * 3).toLocaleString("en-IN")}</span>
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--muted)", marginBottom: "8px" }}>
                                            <span>Illustrative Taxes & Service</span>
                                            <span>₹0</span>
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", fontWeight: "600", color: "var(--forest)", borderTop: "1px solid var(--line)", paddingTop: "8px" }}>
                                            <span>Estimated Total</span>
                                            <span>₹{(selectedStay.price * 3).toLocaleString("en-IN")}</span>
                                        </div>
                                    </div>

                                    <button type="submit" className="button modal-submit-btn" suppressHydrationWarning>
                                        Confirm Reservation Request ↗
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="modal-success-state">
                                <span className="botanical" style={{ fontSize: "36px", color: "var(--gold)", margin: "0 auto 12px" }}>
                                    ✳
                                </span>
                                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "24px", color: "var(--forest)", marginBottom: "10px" }}>
                                    Reservation Request Received
                                </h3>
                                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.6", marginBottom: "20px" }}>
                                    Thank you, <strong>{guestName || "traveler"}</strong>. Your booking interest for <strong>{selectedStay.name}</strong> in {selectedStay.destinationName} has been logged in this preview.
                                    Availability confirmation will be sent to <strong>{guestEmail || "your email"}</strong> before launch.
                                </p>
                                <button
                                    type="button"
                                    className="button"
                                    style={{ width: "100%", justifyContent: "center" }}
                                    onClick={() => setSelectedStay(null)}
                                    suppressHydrationWarning
                                >
                                    Back to Stays ↗
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}
