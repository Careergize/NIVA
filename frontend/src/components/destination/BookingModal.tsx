"use client";

import { useState } from "react";
import Image from "next/image";
import type { RoomStay } from "@/lib/domain";

interface BookingModalProps {
    stay: RoomStay;
    checkIn: string;
    checkOut: string;
    onClose: () => void;
}

export function BookingModal({ stay, checkIn, checkOut, onClose }: BookingModalProps) {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [guestName, setGuestName] = useState("");
    const [guestEmail, setGuestEmail] = useState("");

    const handleConfirmBooking = (e: React.FormEvent) => {
        e.preventDefault();
        setBookingSuccess(true);
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                <button
                    type="button"
                    className="modal-close-btn"
                    onClick={onClose}
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
                            {stay.name}
                        </h3>
                        <p style={{ fontSize: "12px", color: "var(--muted)", marginBottom: "18px" }}>
                            {stay.destinationName}, Kerala · {stay.type}
                        </p>

                        <div className="modal-stay-preview">
                            <div className="modal-image-wrap">
                                <Image
                                    src={stay.image}
                                    alt={stay.name}
                                    fill
                                    sizes="120px"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <div className="modal-stay-info">
                                <p style={{ margin: 0, fontSize: "13px", fontWeight: "600", color: "var(--forest)" }}>
                                    ₹{stay.price.toLocaleString("en-IN")} <small style={{ fontWeight: 400, color: "var(--muted)" }}>/ night</small>
                                </p>
                                <p style={{ margin: "4px 0", fontSize: "11px", color: "var(--ink)" }}>
                                    {stay.beds} · {stay.baths}
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
                                    <span>₹{stay.price.toLocaleString("en-IN")} × 3 nights</span>
                                    <span>₹{(stay.price * 3).toLocaleString("en-IN")}</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--muted)", marginBottom: "8px" }}>
                                    <span>Illustrative Taxes & Service</span>
                                    <span>₹0</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", fontWeight: "600", color: "var(--forest)", borderTop: "1px solid var(--line)", paddingTop: "8px" }}>
                                    <span>Estimated Total</span>
                                    <span>₹{(stay.price * 3).toLocaleString("en-IN")}</span>
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
                            Thank you, <strong>{guestName || "traveler"}</strong>. Your booking interest for <strong>{stay.name}</strong> in {stay.destinationName} has been logged in this preview.
                            Availability confirmation will be sent to <strong>{guestEmail || "your email"}</strong> before launch.
                        </p>
                        <button
                            type="button"
                            className="button"
                            style={{ width: "100%", justifyContent: "center" }}
                            onClick={onClose}
                            suppressHydrationWarning
                        >
                            Back to Stays ↗
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BookingModal;

