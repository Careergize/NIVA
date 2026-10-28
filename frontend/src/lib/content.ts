import type { Destination, Experience, Property } from "./domain";
export const brand = { name: "NIVA", tagline: "Stays beyond the ordinary.", email: null, phone: null, socialUrls: [], enquiryEndpoint: null };
export const properties: Property[] = [
    {
        id: "authentic-village-stay",
        name: "Authentic Kerala Village Stay",
        category: "VILLAGE STAY",
        tag: "HERITAGE",
        location: "Fort Kochi",
        type: "Heritage home",
        guests: 4,
        price: 6500,
        mood: "Immersive slow living rooted in tradition.",
        image: "/images/village-stay.jpg",
        inclusions: [
            "Traditional Kerala house",
            "Home-cooked breakfast",
            "Village walking tour",
            "Kerala cooking session",
            "Local cultural activities",
        ],
    },
    {
        id: "coastal-kerala-retreat",
        name: "Coastal Kerala Retreat",
        category: "COASTAL",
        tag: "RETREAT",
        location: "Kumarakom",
        type: "Villa",
        guests: 2,
        price: 8500,
        mood: "Where backwaters meet the shoreline.",
        image: "/images/coastal-retreat.jpg",
        inclusions: [
            "Private coastal accommodation",
            "Fishing village visit",
            "Local seafood cooking experience",
            "Backwater boat ride through a licensed operator",
            "Sunset activities",
        ],
    },
    {
        id: "kerala-workation",
        name: "Kerala Workation",
        category: "WORKATION",
        tag: "EXTENDED STAY",
        location: "Wayanad",
        type: "Cottage",
        guests: 2,
        price: 5500,
        mood: "Productivity immersed in calm green landscapes.",
        image: "/images/workation.jpg",
        inclusions: [
            "Comfortable accommodation",
            "Reliable high-speed internet",
            "Dedicated workspace",
            "Local food",
            "Weekend cultural experiences",
        ],
    },
];
export const destinations: Destination[] = [{ name: "Varkala", description: "Cliffside days & ocean air", image: "/images/varkala-beach.jpg" }, { name: "Poovar", description: "Where the river meets the sea", image: "/images/poovar-canoe.jpg" }, { name: "Wayanad", description: "Into the green", image: "/images/wayanad.jpg" }, { name: "Fort Kochi", description: "Stories on every street", image: "/images/fort-kochi.jpg" }, { name: "Kumarakom", description: "Life along the backwaters", image: "/images/kumarakom.jpg" }];
export const experiences: Experience[] = [{ name: "A taste of home", category: "Kerala cooking", description: "An introduction to local ingredients, family recipes and the joy of a shared table." }, { name: "Take the slower road", category: "Village walks", description: "Discover the everyday rhythms that make a place feel alive." }, { name: "Follow the water", category: "Backwaters", description: "See Kerala from a different perspective, close to its waterways." }, { name: "Rooted in the hills", category: "Plantation visits", description: "Explore the landscapes behind your morning cup." }];
