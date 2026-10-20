import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "NIVA — Stays beyond the ordinary", description: "A Kerala-first hospitality brand. Discover our vision for thoughtful stays, local experiences and property partnerships." };
export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) { return <html lang="en"><body>{children}</body></html>; }
