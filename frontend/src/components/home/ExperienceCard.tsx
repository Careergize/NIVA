import type { Experience } from "@/lib/domain";

interface ExperienceCardProps {
    experience: Experience;
    index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
    return (
        <article className="experience-card">
            <span className="experience-number">0{index + 1}</span>
            <p className="eyebrow">{experience.category}</p>
            <h3>{experience.name}</h3>
            <p>{experience.description}</p>
        </article>
    );
}

export default ExperienceCard;

