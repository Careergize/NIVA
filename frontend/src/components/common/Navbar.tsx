"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname() || "";

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

    // Close menu when route changes
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    const navLinks = [
        { label: "Stays", href: "/stays" },
        { label: "Destinations", href: "/destinations" },
        { label: "Experiences", href: "/experiences" },
        { label: "Our story", href: "/story" },
        { label: "List your property", href: "/list-property", isCTA: true },
    ];

    return (
        <header className="navbar">
            <Link href="/" className="wordmark" aria-label="NIVA home">
                NIVA<span>STAYS · EXPERIENCES · BELONGING</span>
            </Link>

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

            {open && (
                <div
                    className="nav-backdrop"
                    onClick={() => setOpen(false)}
                    aria-hidden="true"
                />
            )}

            <nav id="main-nav" className={`nav-links ${open ? "open" : ""}`} aria-label="Main navigation">
                {navLinks.map(({ label, href, isCTA }) => {
                    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`${isCTA ? "nav-cta-link" : ""} ${isActive ? "active" : ""}`}
                            onClick={() => setOpen(false)}
                        >
                            {label}
                            {isCTA && <span aria-hidden="true"> ↗</span>}
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
}

export default Navbar;
