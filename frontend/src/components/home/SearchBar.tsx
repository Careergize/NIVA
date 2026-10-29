"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { destinations } from "@/lib/content";
import type { StayFilters } from "@/lib/domain";

interface SearchBarProps {
    onSearch?: (filters: StayFilters) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
    const router = useRouter();
    const [location, setLocation] = useState("");
    const [guests, setGuests] = useState(1);
    const [date, setDate] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (location) {
            const slug = location.toLowerCase().replace(/\s+/g, "-");
            router.push(`/destinations/${slug}`);
        } else {
            router.push(`/stays`);
        }
    };

    return (
        <form className="search-bar" suppressHydrationWarning onSubmit={handleSubmit}>
            <label>
                <span>WHERE TO?</span>
                <select
                    value={location}
                    suppressHydrationWarning
                    onChange={(e) => setLocation(e.target.value)}
                >
                    <option value="">Somewhere in Kerala</option>
                    {destinations.map((d) => (
                        <option key={d.name} value={d.name}>
                            {d.name}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                <span>WHEN?</span>
                <input
                    aria-label="Preferred arrival date, availability is not checked"
                    type="date"
                    value={date}
                    suppressHydrationWarning
                    onChange={(e) => setDate(e.target.value)}
                />
            </label>

            <label>
                <span>WITH WHO?</span>
                <select
                    value={guests}
                    suppressHydrationWarning
                    onChange={(e) => setGuests(Number(e.target.value))}
                >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                            {n} {n === 1 ? "guest" : "guests"}
                        </option>
                    ))}
                </select>
            </label>

            <button className="button" type="submit" suppressHydrationWarning>
                Explore stays <span aria-hidden="true">↗</span>
            </button>
        </form>
    );
}

export default SearchBar;

