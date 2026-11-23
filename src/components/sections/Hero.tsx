import { hero, links, photos, geez } from "@/content/site";
import { ImageSlot } from "../ImageSlot";
import { JebenaPour } from "../motifs/Jebena";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 pb-16 pt-8 sm:px-6 md:grid-cols-[1.1fr_1fr] md:gap-10 md:pb-24 md:pt-14">
        <div className="hero-rise">
          <p className="flex items-baseline gap-4">
            <span lang="am" className="font-geez text-[clamp(6.5rem,24vw,15rem)] font-semibold leading-[0.9] text-clay">
              {geez.buna.am}
            </span>
            <span className="max-w-[9rem] text-sm leading-snug text-bean-soft">
              <em className="font-display text-lg not-italic text-bean">buna</em>
              <br />
              Amharic for coffee
            </span>
          </p>
          <h1 id="hero-title" className="mt-6 max-w-[14ch] font-display text-[clamp(2.75rem,6.4vw,5.25rem)] leading-[0.98] tracking-[-0.01em] text-bean">
            {hero.headline.en}
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-bean-soft">{hero.subline.en}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="rounded-full bg-clay px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-bean">
              {hero.ctaMenu.en}
            </a>
            <a
              href={links.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-bean px-6 py-3 text-[15px] font-semibold text-bean transition-colors hover:bg-bean hover:text-cotton"
            >
              {hero.ctaDirections.en}
              <span className="sr-only"> (opens Google Maps)</span>
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2 text-[13px]" aria-label="Highlights">
            {hero.badges.map((b) => (
              <li key={b.en} className="rounded-full border border-bean/15 bg-cotton-deep/70 px-3 py-1.5 font-medium text-bean">
                {b.en}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-[520px]">
          <ImageSlot
            slot={photos.heroPour}
            priority
            className="w-full"
            fallback={<JebenaPour className="h-full w-full" />}
          />
        </div>
      </div>
    </section>
  );
}
