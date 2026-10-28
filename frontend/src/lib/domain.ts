export interface Property {
    id: string;
    name: string;
    location: string;
    type: "Villa" | "Cottage" | "Heritage home" | string;
    guests: number;
    price: number;
    mood: string;
    image: string;
    category?: string;
    tag?: string;
    inclusions?: string[];
}
export interface Experience {
    name: string;
    category: string;
    description: string;
}
export interface Destination {
    name: string;
    description: string;
    image?: string;
}
export interface RoomStay {
    id: string;
    name: string;
    destinationSlug: string;
    destinationName: string;
    type: string;
    price: number;
    guests: number;
    beds: string;
    baths: string;
    size: string;
    image: string;
    features: string[];
    description: string;
}
export interface DestinationDetail {
    slug: string;
    name: string;
    title: string;
    subtitle: string;
    heroImage: string;
    stays: RoomStay[];
}
export interface Enquiry {
    name: string;
    email: string;
    message: string;
}
export interface StayFilters {
    location?: string;
    guests?: number;
}
export function filterProperties(properties: Property[], filters: StayFilters = {}) {
    const location = filters.location?.trim().toLowerCase() ?? "";
    const minimumGuests = Number.isFinite(filters.guests) ? Math.max(0, Number(filters.guests)) : 1;
    return properties.filter(property => {
        const matchesLocation = !location || property.location.trim().toLowerCase() === location;
        const matchesGuests = property.guests >= minimumGuests;
        return matchesLocation && matchesGuests;
    });
}
export function validateEnquiry(value: Partial<Enquiry> = {}) {
    const name = (value.name ?? "").trim();
    const email = (value.email ?? "").trim();
    const message = (value.message ?? "").trim();
    return {
        name: name ? "" : "Enter your name.",
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Enter a valid email address.",
        message: message.length >= 10 ? "" : "Please add at least 10 characters.",
    };
}
