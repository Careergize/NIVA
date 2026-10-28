import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDestinationData, destinationsData, getAllDestinationSlugs } from "@/lib/destinationStays";
import DestinationStaysView from "@/components/destinationStaysView";

export function generateStaticParams() {
    return getAllDestinationSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const destination = getDestinationData(slug);
    if (!destination) {
        return { title: "Destinations — NIVA" };
    }
    return {
        title: `${destination.title} — NIVA Kerala Stays`,
        description: destination.subtitle,
    };
}

export default async function DestinationPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const destination = getDestinationData(slug);

    if (!destination) {
        notFound();
    }

    const otherDestinations = Object.values(destinationsData).map(d => ({
        name: d.name,
        slug: d.slug,
    }));

    return (
        <DestinationStaysView
            destination={destination}
            otherDestinations={otherDestinations}
        />
    );
}
