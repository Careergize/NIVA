import Image from "next/image";
import type { RoomStay } from "@/lib/domain";

interface RoomStayCardProps {
    stay: RoomStay;
    onBook: (stay: RoomStay) => void;
}

export function RoomStayCard({ stay, onBook }: RoomStayCardProps) {
    return (
        <article className="room-card">
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
                    onClick={() => onBook(stay)}
                    suppressHydrationWarning
                >
                    Book Now <span>↗</span>
                </button>
            </div>
        </article>
    );
}

export default RoomStayCard;

