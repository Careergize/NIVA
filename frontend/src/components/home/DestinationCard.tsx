import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/lib/domain";

interface DestinationCardProps {
    destination: Destination;
    index: number;
    onSelect?: () => void;
}

export function DestinationCard({ destination, index, onSelect }: DestinationCardProps) {
    const slug = destination.name.toLowerCase().replace(/\s+/g, "-");
    const href = `/destinations/${slug}`;

    return (
        <Link
            href={href}
            className={`destination destination-${index} destination-${slug} ${destination.image ? "has-image" : ""}`}
            onClick={() => {
                if (onSelect) onSelect();
            }}
        >
            {destination.image && (
                <>
                    <Image
                        src={destination.image}
                        alt=""
                        aria-hidden="true"
                        fill
                        sizes="(max-width: 700px) 50vw, (max-width: 1000px) 33vw, 20vw"
                        className="destination-img"
                    />
                    <div className="destination-shade" />
                </>
            )}
            <span className="destination-number">0{index + 1}</span>
            <span className="destination-info">
                <strong>{destination.name}</strong>
                <small>{destination.description}</small>
            </span>
            <span className="destination-arrow" aria-hidden="true">↗</span>
        </Link>
    );
}

export default DestinationCard;

