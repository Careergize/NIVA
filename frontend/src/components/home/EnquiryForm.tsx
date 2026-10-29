"use client";

import { useState } from "react";
import { validateEnquiry } from "@/lib/domain";

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
                    We’ve received your partnership interest, <strong>{name}</strong>
                    {location ? ` for your property in ${location}` : ""}. Our Kerala hosting team will review
                    your details and write to <strong>{email}</strong> shortly.
                </p>
                <button
                    type="button"
                    className="button light"
                    style={{ margin: "10px auto 0", display: "inline-flex" }}
                    onClick={() => {
                        setSubmitted(false);
                        setName("");
                        setEmail("");
                        setLocation("");
                        setMessage("");
                    }}
                    suppressHydrationWarning
                >
                    Send another enquiry ↺
                </button>
            </div>
        );
    }

    return (
        <form className="enquiry-form" onSubmit={handleSubmit} noValidate suppressHydrationWarning>
            <p className="eyebrow">PROPERTY PARTNERSHIP ENQUIRY</p>
            <p>
                Interested in joining the NIVA collection or exploring property management? Tell us about your home below.
            </p>

            <label>
                Your name
                <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="e.g. Maya Mohan"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        setErrors((prev) => ({ ...prev, name: "" }));
                    }}
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
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setErrors((prev) => ({ ...prev, email: "" }));
                    }}
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
                    onChange={(e) => setLocation(e.target.value)}
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
                    onChange={(e) => {
                        setMessage(e.target.value);
                        setErrors((prev) => ({ ...prev, message: "" }));
                    }}
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

export default EnquiryForm;

