import Image from "next/image";
import Link from "next/link";
import type { DestinationDetail } from "@/lib/domain";

interface DestinationHeroProps {
    destination: DestinationDetail;
}

export function DestinationHero({ destination }: DestinationHeroProps) {
    return (
        <section className="destination-hero" aria-labelledby="destination-heading">
            <Image
                src={destination.heroImage}
                alt={`Scenic view of ${destination.name}`}
                fill
                priority
                sizes="100vw"
                className="destination-hero-img"
            />
            <div className="destination-hero-shade" />

            <div className="destination-hero-content">
                <Link href="/#destinations" className="destination-back-btn">
                    ← Back to all destinations
                </Link>
                <p className="eyebrow" style={{ color: "#d2d8ce", letterSpacing: "2.5px" }}>
                    THE NIVA COLLECTION · {destination.name.toUpperCase()}
                </p>
                <h1 id="destination-heading">{destination.title}</h1>
                <p className="destination-hero-subtitle">{destination.subtitle}</p>
            </div>
        </section>
    );
}

export default DestinationHero;

