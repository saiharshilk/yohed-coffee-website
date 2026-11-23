import { links, reviews, reviewsCopy, business } from "@/content/site";
import { SiniCupShape } from "../motifs/Sini";
import { Tibeb } from "../motifs/Tibeb";

function TibebFrame({ children }: { children: React.ReactNode }) {
  // Like the hem of a netela: woven bands top and bottom, a gold selvedge either side.
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[18px] border-x-4 border-gold bg-cotton shadow-[0_1px_0_rgb(42_26_18/0.08)]">
      <Tibeb />
      <div className="flex-1 p-7 sm:p-9">{children}</div>
      <Tibeb variant="thin" animate={false} />
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-title">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 id="reviews-title" className="font-display text-[clamp(2.6rem,5.4vw,4.6rem)] leading-none text-bean">
            {reviewsCopy.title.en}
          </h2>
          <p className="text-lg text-bean-soft">
            <span className="font-display text-4xl text-bean">{business.rating.value}★</span> from {business.rating.count} Google reviews
          </p>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-6">
          {reviews.map((r, i) => (
            <li key={r.name} className={i === 0 ? "md:col-span-6" : "md:col-span-3"}>
              <TibebFrame>
                <figure className="flex h-full flex-col">
                  <svg viewBox="-56 -12 112 96" className="h-9 w-10" aria-hidden="true" focusable="false">
                    <SiniCupShape />
                  </svg>
                  <blockquote className={`mt-4 font-display leading-snug text-bean ${i === 0 ? "text-[clamp(1.5rem,2.6vw,2.15rem)]" : "text-[1.5rem]"}`}>
                    <p>“{r.text}”</p>
                  </blockquote>
                  <figcaption className="mt-6 text-[15px] text-bean-soft">
                    <span className="font-semibold text-bean">{r.name}</span> · Google review
                  </figcaption>
                </figure>
              </TibebFrame>
            </li>
          ))}
        </ul>
        <a
          href={links.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-full border-2 border-bean px-6 py-3 text-[15px] font-semibold text-bean transition-colors hover:bg-bean hover:text-cotton"
        >
          {reviewsCopy.cta.en}
          <span className="sr-only"> (opens Google Maps)</span>
        </a>
      </div>
    </section>
  );
}
