export interface Property {
    id: string;
    name: string;
    location: string;
    type: "Villa" | "Cottage" | "Heritage home";
    guests: number;
    price: number;
    mood: string;
    image: string;
}
export interface Experience {
    name: string;
    category: string;
    description: string;
}
export interface Destination {
    name: string;
    description: string;
}
export interface Enquiry {
    name: string;
    email: string;
    message: string;
}
export interface StayFilters {
    location: string;
    guests: number;
}
export function filterProperties(properties: Property[], filters: StayFilters) { return properties.filter(p => (!filters.location || p.location === filters.location) && p.guests >= filters.guests); }
export function validateEnquiry(value: Enquiry) { return { name: value.name.trim() ? "" : "Enter your name.", email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email) ? "" : "Enter a valid email address.", message: value.message.trim().length >= 10 ? "" : "Please add at least 10 characters." }; }
