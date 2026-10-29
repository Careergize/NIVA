import type { Metadata } from "next";
import { destinationsData, getAllStays } from "@/lib/destinationStays";
import { StaysPageView } from "@/components/stays/StaysPageView";

export const metadata: Metadata = {
    title: "Curated Kerala Stays — The NIVA Collection",
    description: "Explore intimate cliffside villas, heritage village stays, and backwater retreats across Kerala, India.",
};

export default function StaysPage() {
    const allStays = getAllStays();
    const destinationsList = Object.values(destinationsData).map((d) => ({
        name: d.name,
        slug: d.slug,
    }));

    return (
        <StaysPageView
            initialStays={allStays}
            destinationsList={destinationsList}
        />
    );
}
