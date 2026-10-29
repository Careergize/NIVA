import Image from "next/image";
import type { Property } from "@/lib/domain";

interface PropertyCardProps {
    property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
    const [cat, tag] = property.category && property.tag
        ? [property.category, property.tag]
        : property.category?.includes("·")
            ? property.category.split("·").map((s) => s.trim())
            : property.tag?.includes("·")
                ? property.tag.split("·").map((s) => s.trim())
                : [property.category ?? property.location, property.tag ?? property.type];

    return (
        <article className="property-card">
            <div className="property-art">
                <span className="sample-badge">SAMPLE STAY</span>
                {property.image && (
                    <>
                        <Image
                            src={property.image}
                            alt={property.name}
                            fill
                            sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                            className="property-card-img"
                        />
                        <div className="property-card-shade" />
                    </>
                )}
            </div>

            <div className="property-card-content">
                <p className="card-meta">
                    {cat} <span>·</span> {tag}
                </p>
                <h3>{property.name}</h3>
                <p className="card-mood">{property.mood}</p>

                {property.inclusions && property.inclusions.length > 0 && (
                    <div className="card-inclusions-wrap">
                        <div className="inclusions-label">Package Inclusions</div>
                        <ul className="card-inclusions">
                            {property.inclusions.map((item, idx) => (
                                <li key={idx}>
                                    <span className="bullet" aria-hidden="true">✳</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="card-bottom">
                    <span>
                        Illustrative <strong>₹{property.price.toLocaleString("en-IN")}</strong> <small>/ night</small>
                    </span>
                    <span className="guests-badge">Up to {property.guests} guests</span>
                </div>
            </div>
        </article>
    );
}

export default PropertyCard;

