"use client";

import { useState } from "react";
import Link from "next/link";
import type { RoomStay } from "@/lib/domain";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { RoomStayCard } from "@/components/destination/RoomStayCard";
import { BookingModal } from "@/components/destination/BookingModal";

interface StaysPageViewProps {
    initialStays: RoomStay[];
    destinationsList: { name: string; slug: string }[];
}

export function StaysPageView({ initialStays, destinationsList }: StaysPageViewProps) {
    const [selectedDestination, setSelectedDestination] = useState("all");
    const [selectedType, setSelectedType] = useState("all");
    const [guestsFilter, setGuestsFilter] = useState("all");
    const [priceFilter, setPriceFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedStay, setSelectedStay] = useState<RoomStay | null>(null);

    const filteredStays = initialStays.filter((stay) => {
        if (selectedDestination !== "all" && stay.destinationSlug !== selectedDestination) {
            return false;
        }
        if (guestsFilter !== "all" && stay.guests < Number(guestsFilter)) {
            return false;
        }
        if (
            selectedType !== "all" &&
            !stay.type.toLowerCase().includes(selectedType.toLowerCase()) &&
            !stay.name.toLowerCase().includes(selectedType.toLowerCase())
        ) {
            return false;
        }
        if (priceFilter === "under-6000" && stay.price >= 6000) return false;
        if (priceFilter === "6000-8500" && (stay.price < 6000 || stay.price > 8500)) return false;
        if (priceFilter === "above-8500" && stay.price <= 8500) return false;

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase().trim();
            const matchesName = stay.name.toLowerCase().includes(query);
            const matchesDest = stay.destinationName.toLowerCase().includes(query);
            const matchesDesc = stay.description.toLowerCase().includes(query);
            const matchesFeatures = stay.features.some((f) => f.toLowerCase().includes(query));
            if (!matchesName && !matchesDest && !matchesDesc && !matchesFeatures) {
                return false;
            }
        }

        return true;
    });

    const handleReset = () => {
        setSelectedDestination("all");
        setSelectedType("all");
        setGuestsFilter("all");
        setPriceFilter("all");
        setSearchQuery("");
    };

    return (
        <>
            <a className="skip-link" href="#stays-main">Skip to content</a>
            <Navbar />

            <div className="subpage-hero">
                <div className="content-wrap">
                    <p className="eyebrow">THE NIVA COLLECTION · KERALA, INDIA</p>
                    <h1>Curated Stays Across Kerala</h1>
                    <p className="subtitle">
                        Discover intimate cliffside villas, backwater retreats, forest cottages, and heritage bungalows — each thoughtfully rooted in its local landscape.
                    </p>
                </div>
            </div>

            <main id="stays-main" className="subpage-container content-wrap">
                {/* Search & Filter Bar */}
                <div className="destination-search-card" style={{ marginTop: "32px", marginBottom: "36px" }}>
                    <form className="destination-search-grid" onSubmit={(e) => e.preventDefault()} suppressHydrationWarning>
                        <label className="search-field">
                            <span>DESTINATION</span>
                            <select
                                value={selectedDestination}
                                onChange={(e) => setSelectedDestination(e.target.value)}
                                aria-label="Filter by destination"
                                suppressHydrationWarning
                            >
                                <option value="all">All Destinations</option>
                                {destinationsList.map((d) => (
                                    <option key={d.slug} value={d.slug}>
                                        {d.name}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="search-field">
                            <span>ROOM TYPE</span>
                            <select
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                aria-label="Filter by room type"
                                suppressHydrationWarning
                            >
                                <option value="all">All Room Types</option>
                                <option value="Villa">Villas</option>
                                <option value="Suite">Suites</option>
                                <option value="Cottage">Cottages & Chalets</option>
                                <option value="Room">Standard Rooms</option>
                                <option value="Pavilion">Pavilions</option>
                                <option value="Studio">Studios</option>
                            </select>
                        </label>

                        <label className="search-field">
                            <span>GUESTS</span>
                            <select
                                value={guestsFilter}
                                onChange={(e) => setGuestsFilter(e.target.value)}
                                aria-label="Filter by guest count"
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

                        <label className="search-field">
                            <span>KEYWORD SEARCH</span>
                            <input
                                type="text"
                                placeholder="e.g. pool, cliff, lake, Wi-Fi..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                aria-label="Search stays by keyword"
                                suppressHydrationWarning
                            />
                        </label>

                        <button
                            type="button"
                            className="button destination-submit-btn"
                            onClick={handleReset}
                            suppressHydrationWarning
                        >
                            Reset <span>↺</span>
                        </button>
                    </form>
                </div>

                {/* Results Header */}
                <div className="destination-results-header" style={{ marginBottom: "28px" }}>
                    <div>
                        <p className="eyebrow" style={{ marginBottom: "6px" }}>EXPLORE THE COLLECTION</p>
                        <h2>
                            {selectedDestination !== "all"
                                ? `Stays in ${destinationsList.find((d) => d.slug === selectedDestination)?.name || selectedDestination}`
                                : "All Kerala Stays"}
                        </h2>
                    </div>
                    <p className="destination-count-badge">
                        {filteredStays.length} {filteredStays.length === 1 ? "stay available" : "stays available"}
                    </p>
                </div>

                {/* Stays Grid */}
                {filteredStays.length > 0 ? (
                    <div className="destination-stays-grid">
                        {filteredStays.map((stay) => (
                            <RoomStayCard
                                key={stay.id}
                                stay={stay}
                                onBook={(s) => setSelectedStay(s)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="empty-state" style={{ margin: "50px 0" }}>
                        <h3>No stays match your search</h3>
                        <p>Try clearing your filters or keyword query to see all available Kerala stays.</p>
                        <button type="button" onClick={handleReset} suppressHydrationWarning>
                            Show all stays ↗
                        </button>
                    </div>
                )}

                {/* Destination Quick Navigation */}
                <div className="other-destinations-section" style={{ marginTop: "60px" }}>
                    <p className="eyebrow">BROWSE BY LOCATION</p>
                    <h3>Explore Destination Stays Specifically</h3>
                    <div className="destination-chips-wrap">
                        {destinationsList.map((d) => (
                            <Link
                                key={d.slug}
                                href={`/destinations/${d.slug}`}
                                className="destination-chip"
                            >
                                {d.name} Stays <span>↗</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            {/* Interactive Booking Modal */}
            {selectedStay && (
                <BookingModal
                    stay={selectedStay}
                    checkIn=""
                    checkOut=""
                    onClose={() => setSelectedStay(null)}
                />
            )}

            <Footer />
        </>
    );
}

export default StaysPageView;

