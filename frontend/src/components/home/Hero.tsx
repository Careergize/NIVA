import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section className="hero" aria-labelledby="hero-heading">
            <Image
                src="/images/kerala.jpg"
                alt="A houseboat on palm-lined Kerala backwaters"
                fill
                priority
                sizes="100vw"
                className="hero-image"
            />
            <div className="hero-shade" />

            <div className="hero-content">
                <p className="eyebrow">A LITTLE CLOSER TO KERALA</p>
                <h1 id="hero-heading">
                    Stay somewhere.<br />
                    <em>Feel everything.</em>
                </h1>
                <p>Thoughtful stays. Local stories. A slower kind of travel.</p>
                <Link className="hero-link" href="/stays">
                    Find your somewhere <span aria-hidden="true">↗</span>
                </Link>
            </div>

            <div className="hero-bottom">
                <span>KERALA, INDIA</span>
                <span>9.5916° N &nbsp; 76.5222° E</span>
                <a href="#discover">A little further down ↓</a>
            </div>
        </section>
    );
}

export default Hero;
