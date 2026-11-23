import { ceremony, geez } from "@/content/site";
import { Tibeb } from "../motifs/Tibeb";
import { CeremonyCups } from "./CeremonyCups";
import { SmokeCurls } from "../motifs/Smoke";

const ordinal = ["First", "Second", "Third"];

export function Ceremony() {
  const rounds = ceremony.rounds.map((r) => ({ ...r, word: geez[r.key] }));
  return (
    <section id="ceremony" aria-labelledby="ceremony-title" className="on-dark relative bg-bean text-cotton">
      <Tibeb />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-end">
          <div>
            <h2 id="ceremony-title" className="font-display text-[clamp(2.6rem,5.4vw,4.6rem)] leading-[1] text-cotton">
              {ceremony.title.en}
            </h2>
            <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-cotton/85">{ceremony.intro.en}</p>
          </div>
          <svg viewBox="-60 -90 120 100" className="hidden h-40 w-40 justify-self-end md:block" aria-hidden="true" focusable="false">
            <g opacity="0.6"><SmokeCurls color="var(--cotton)" /></g>
            <path d="M-18 0 L18 0 L12 10 L-12 10 Z" fill="var(--gold)" />
          </svg>
        </div>

        <CeremonyCups rounds={rounds.map((r) => ({ am: r.word.am, translit: r.word.translit }))} />

        <ol className="mt-4 grid gap-10 md:grid-cols-3 md:gap-8">
          {rounds.map((r, i) => (
            <li key={r.key} className="border-t border-cotton/20 pt-6">
              <p className="text-sm text-gold">{ordinal[i]} round</p>
              <h3 className="mt-2 flex items-baseline gap-3">
                <span lang="am" className="font-geez text-4xl font-semibold text-cotton">
                  {r.word.am}
                </span>
                <span className="font-display text-2xl italic text-cotton/90">{r.word.translit}</span>
              </h3>
              <p className="mt-3 max-w-[34ch] leading-relaxed text-cotton/80">{r.body.en}</p>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-20 max-w-[40ch] text-center font-display text-[clamp(1.6rem,3vw,2.25rem)] leading-snug text-cotton">
          {ceremony.closing.en}
        </p>

        {ceremony.hostsCeremonies && (
          <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-gold/40 p-8">
            <h3 className="font-display text-3xl">Join a ceremony</h3>
            <ul className="mt-4 space-y-2 text-cotton/85">
              {ceremony.schedule.map((s) => (
                <li key={s.when.en}>
                  {s.when.en}
                  {s.note ? ` · ${s.note.en}` : ""}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Tibeb />
    </section>
  );
}
