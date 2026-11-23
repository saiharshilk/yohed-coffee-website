import { business, links, visit } from "@/content/site";
import { HoursTable } from "../HoursTable";
import { MapEmbed } from "../MapEmbed";

export function Visit() {
  const a = business.address;
  return (
    <section id="visit" aria-labelledby="visit-title">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1.1fr] md:py-28">
        <div>
          <h2 id="visit-title" className="font-display text-[clamp(2.6rem,5.4vw,4.6rem)] leading-none text-bean">
            {visit.title.en}
          </h2>
          <address className="mt-8 not-italic">
            <p className="font-display text-3xl leading-tight text-bean">{a.street}</p>
            <p className="mt-1 text-lg text-bean-soft">
              {a.neighborhood}, {a.city}, {a.region} {a.postalCode}
            </p>
            <p className="mt-4">
              <a href={`tel:${business.phone.tel}`} className="text-xl font-semibold text-clay-ink underline decoration-2 underline-offset-4">
                {business.phone.display}
              </a>
            </p>
          </address>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Ways to visit">
            {visit.chips.map((c) => (
              <li key={c.en} className="rounded-full bg-green-bean/25 px-3.5 py-1.5 text-sm font-semibold text-green-ink">
                {c.en}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[15px] text-bean-soft">{visit.delivery.en}</p>

          <HoursTable />

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={links.directionsUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-clay px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-bean">
              {visit.directionsLabel.en}
              <span className="sr-only"> (opens Google Maps)</span>
            </a>
            <a href={`tel:${business.phone.tel}`} className="rounded-full border-2 border-bean px-6 py-3 text-[15px] font-semibold text-bean transition-colors hover:bg-bean hover:text-cotton">
              {visit.callLabel.en}
            </a>
            <a href={links.orderOnlineUrl} className="rounded-full border-2 border-bean px-6 py-3 text-[15px] font-semibold text-bean transition-colors hover:bg-bean hover:text-cotton">
              {visit.orderLabel.en}
            </a>
          </div>
        </div>
        <MapEmbed />
      </div>
    </section>
  );
}
