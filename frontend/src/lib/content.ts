import type { Destination, Experience, Property } from "./domain";
export const brand = { name: "NIVA", tagline: "Stays beyond the ordinary.", email: null, phone: null, socialUrls: [], enquiryEndpoint: null };
export const properties: Property[] = [
    { id: "backwater-house", name: "The Backwater House", location: "Kumarakom", type: "Villa", guests: 6, price: 8500, mood: "Slow mornings. Water at your doorstep.", image: "water" },
    { id: "forest-cottage", name: "A Little Forest Hideaway", location: "Wayanad", type: "Cottage", guests: 2, price: 5500, mood: "A quiet corner in the canopy.", image: "forest" },
    { id: "courtyard-home", name: "The Courtyard Home", location: "Fort Kochi", type: "Heritage home", guests: 4, price: 6500, mood: "Old-world character. A new perspective.", image: "home" },
];
export const destinations: Destination[] = [{ name: "Varkala", description: "Cliffside days & ocean air" }, { name: "Poovar", description: "Where the river meets the sea" }, { name: "Wayanad", description: "Into the green" }, { name: "Fort Kochi", description: "Stories on every street" }, { name: "Kumarakom", description: "Life along the backwaters" }];
export const experiences: Experience[] = [{ name: "A taste of home", category: "Kerala cooking", description: "An introduction to local ingredients, family recipes and the joy of a shared table." }, { name: "Take the slower road", category: "Village walks", description: "Discover the everyday rhythms that make a place feel alive." }, { name: "Follow the water", category: "Backwaters", description: "See Kerala from a different perspective, close to its waterways." }, { name: "Rooted in the hills", category: "Plantation visits", description: "Explore the landscapes behind your morning cup." }];
