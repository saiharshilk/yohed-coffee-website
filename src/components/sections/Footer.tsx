import { business, footer, geez, hours, isDemo } from "@/content/site";
import { formatTime } from "@/lib/hours";
import { Tibeb } from "../motifs/Tibeb";

export function Footer() {
  const a = business.address;
  return (
    <footer className="on-dark bg-bean text-cotton">
      <Tibeb />
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <p className="font-sans text-[clamp(2.4rem,9vw,7.5rem)] font-extrabold leading-none tracking-[0.12em]">{business.name}</p>
          <p lang="am" className="font-geez text-[clamp(3rem,9vw,7rem)] font-semibold leading-none text-clay">
            {geez.buna.am}
          </p>
        </div>
        <p className="mt-6 font-display text-2xl italic text-cotton/90">{business.tagline.en}</p>

        <div className="mt-12 grid gap-10 border-t border-cotton/15 pt-10 text-[15px] sm:grid-cols-3">
          <div>
            <h2 className="text-sm text-gold">Find us</h2>
            <p className="mt-2 leading-relaxed">
              {a.street}
              <br />
              {a.city}, {a.region} {a.postalCode}
            </p>
          </div>
          <div>
            <h2 className="text-sm text-gold">Call</h2>
            <a href={`tel:${business.phone.tel}`} className="mt-2 inline-block underline underline-offset-4">
              {business.phone.display}
            </a>
          </div>
          <div>
            <h2 className="text-sm text-gold">Hours</h2>
            <ul className="mt-2 space-y-0.5 tabular-nums">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 sm:max-w-[16rem]">
                  <span>{h.label.slice(0, 3)}</span>
                  <span>
                    {formatTime(h.open)} – {formatTime(h.close)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-1 text-[13px] text-cotton/70 sm:flex-row sm:justify-between">
          <p>{footer.credit.en}</p>
          {isDemo && <p>{footer.demoLine.en}</p>}
        </div>
      </div>
    </footer>
  );
}
