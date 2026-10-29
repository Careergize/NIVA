import React from "react";

interface CTAProps {
    href: string;
    children: React.ReactNode;
    light?: boolean;
}

export function CTA({ href, children, light = false }: CTAProps) {
    return (
        <a className={`button ${light ? "light" : ""}`} href={href}>
            {children}
            <span aria-hidden="true">↗</span>
        </a>
    );
}

export default CTA;

