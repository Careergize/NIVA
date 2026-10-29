import Link from "next/link";
import { brand } from "@/lib/content";

export function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <Link className="wordmark" href="/">
                    {brand.name}
                </Link>
                <p>{brand.tagline}</p>
                <Link href="/list-property">List your property ↗</Link>
            </div>

            <div className="footer-bottom">
                <span suppressHydrationWarning>
                    © {new Date().getFullYear()} NIVA · Kerala, India
                </span>

                <details>
                    <summary>Contact us</summary>
                    <p>
                        Email: <a href="mailto:hello@nivastays.com">hello@nivastays.com</a><br />
                        Guest Support: <a href="tel:+919847012345">+91 98470 12345</a><br />
                        Host Partnerships: <a href="tel:+919847054321">+91 98470 54321</a><br />
                        Hours: Mon – Sat, 9:00 AM – 7:00 PM IST
                    </p>
                </details>

                <details>
                    <summary>Privacy & terms</summary>
                    <p>
                        Demo form content is validated only in your browser and is not submitted or stored by this site.
                        No booking or payment service is offered in this preview. Full policies will be published before launch.
                    </p>
                </details>

                <a
                    href="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944"
                    target="_blank"
                    rel="noreferrer"
                >
                    Photography source ↗
                </a>
            </div>
        </footer>
    );
}

export default Footer;
