"use client";

interface DestinationFilterBarProps {
    checkIn: string;
    setCheckIn: (val: string) => void;
    checkOut: string;
    setCheckOut: (val: string) => void;
    guestsFilter: string;
    setGuestsFilter: (val: string) => void;
    typeFilter: string;
    setTypeFilter: (val: string) => void;
    priceFilter: string;
    setPriceFilter: (val: string) => void;
    onReset: () => void;
}

export function DestinationFilterBar({
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    guestsFilter,
    setGuestsFilter,
    typeFilter,
    setTypeFilter,
    priceFilter,
    setPriceFilter,
    onReset,
}: DestinationFilterBarProps) {
    return (
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
                    onClick={onReset}
                    suppressHydrationWarning
                >
                    Reset <span>↺</span>
                </button>
            </form>
        </div>
    );
}

export default DestinationFilterBar;

