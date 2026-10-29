import React from "react";

interface SectionHeadingProps {
    eyebrow: string;
    title: string;
    children?: React.ReactNode;
}

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
    return (
        <div className="section-heading">
            <div>
                <p className="eyebrow">{eyebrow}</p>
                <h2>{title}</h2>
            </div>
            {children}
        </div>
    );
}

export default SectionHeading;

