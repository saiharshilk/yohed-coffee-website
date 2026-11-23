import { origin } from "@/content/site";
import { BeanRow } from "../motifs/BeanRow";
import { Journey } from "./Journey";
import { Tibeb } from "../motifs/Tibeb";

export function Origin() {
  return (
    <section id="origin" aria-labelledby="origin-title" className="relative">
      <Tibeb />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1.15fr] md:py-28">
        <div>
          <h2 id="origin-title" className="font-display text-[clamp(2.4rem,4.8vw,4rem)] leading-[1.02] text-bean">
            {origin.title.en}
          </h2>
          {origin.body.map((p) => (
            <p key={p.en} className="mt-6 max-w-[52ch] text-lg leading-relaxed text-bean-soft">
              {p.en}
            </p>
          ))}
          <BeanRow className="mt-8 h-10 w-64" />
          <aside aria-labelledby="kaldi-title" className="mt-10 max-w-[52ch] border-l-4 border-gold pl-5">
            <h3 id="kaldi-title" className="font-display text-2xl text-bean">
              {origin.legendLabel.en}
              <span className="ml-3 rounded-full bg-green-bean/25 px-2.5 py-0.5 align-middle font-sans text-xs font-semibold text-green-ink">
                Legend
              </span>
            </h3>
            <p className="mt-3 font-display text-[1.3rem] italic leading-snug text-bean-soft">{origin.legend.en}</p>
          </aside>
        </div>
        <Journey />
      </div>
    </section>
  );
}
