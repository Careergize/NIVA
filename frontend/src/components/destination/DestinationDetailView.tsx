"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { DestinationDetail, RoomStay } from "@/lib/domain";

import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { DestinationHero } from "@/components/destination/DestinationHero";
import { DestinationFilterBar } from "@/components/destination/DestinationFilterBar";
import { RoomStayCard } from "@/components/destination/RoomStayCard";
import { BookingModal } from "@/components/destination/BookingModal";

interface DestinationDetailViewProps {
    destination: DestinationDetail;
    otherDestinations: { name: string; slug: string }[];
}

export function DestinationDetailView({
    destination,
    otherDestinations,
}: DestinationDetailViewProps) {
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

    // Filtering logic
    const filteredStays = destination.stays.filter((stay) => {
        if (guestsFilter !== "all" && stay.guests < Number(guestsFilter)) {
            return false;
        }
        if (
            typeFilter !== "all" &&
            !stay.type.toLowerCase().includes(typeFilter.toLowerCase()) &&
            !stay.name.toLowerCase().includes(typeFilter.toLowerCase())
        ) {
            return false;
        }
        if (priceFilter === "under-6000" && stay.price >= 6000) return false;
        if (priceFilter === "6000-8500" && (stay.price < 6000 || stay.price > 8500)) return false;
        if (priceFilter === "above-8500" && stay.price <= 8500) return false;
        return true;
    });

    const handleResetFilters = () => {
        setGuestsFilter("all");
        setTypeFilter("all");
        setPriceFilter("all");
    };

    return (
        <>
            <a className="skip-link" href="#destination-main">Skip to content</a>
            <Navbar />

            <main id="destination-main" className="destination-page">
                {/* Hero Banner with Dynamic Destination Title */}
                <DestinationHero destination={destination} />

                <div className="content-wrap destination-content-container">
                    {/* Floating Search & Filter Bar */}
                    <DestinationFilterBar
                        checkIn={checkIn}
                        setCheckIn={setCheckIn}
                        checkOut={checkOut}
                        setCheckOut={setCheckOut}
                        guestsFilter={guestsFilter}
                        setGuestsFilter={setGuestsFilter}
                        typeFilter={typeFilter}
                        setTypeFilter={setTypeFilter}
                        priceFilter={priceFilter}
                        setPriceFilter={setPriceFilter}
                        onReset={handleResetFilters}
                    />

                    {/* Results Header */}
                    <div className="destination-results-header">
                        <div>
                            <p className="eyebrow" style={{ marginBottom: "6px" }}>CURATED HOSPITALITY</p>
                            <h2>Distinctive Stays in {destination.name}</h2>
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
                                    onBook={(selected) => setSelectedStay(selected)}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="empty-state" style={{ margin: "40px 0" }}>
                            <h3>No stays match your current filters</h3>
                            <p>Try clearing your guest count or room type filters to view all stays in {destination.name}.</p>
                            <button
                                type="button"
                                onClick={handleResetFilters}
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
                            {otherDestinations.map((d) => (
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
                <BookingModal
                    stay={selectedStay}
                    checkIn={checkIn}
                    checkOut={checkOut}
                    onClose={() => setSelectedStay(null)}
                />
            )}

            <Footer />
        </>
    );
}

export default DestinationDetailView;

