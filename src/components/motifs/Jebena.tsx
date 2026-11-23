import { SiniCupShape } from "./Sini";
import { SmokeCurls } from "./Smoke";

/**
 * Hero illustration: a clay jebena tipped forward, pouring into a sini cup,
 * with an incense burner sending up smoke. Pure SVG, no images.
 */
export function JebenaPour({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 440 540" className={className} role="img" aria-labelledby="jebena-title">
      <title id="jebena-title">Illustration: a clay jebena pouring coffee into a small sini cup, with incense smoke rising</title>

      {/* warm backdrop disc */}
      <circle cx="230" cy="270" r="200" fill="var(--cotton-deep)" />
      <circle cx="230" cy="270" r="200" fill="none" stroke="var(--gold)" strokeWidth="2" strokeDasharray="2 8" />

      {/* steam above the cup */}
      <g transform="translate(345 380)" opacity="0.6">
        <SmokeCurls color="var(--bean-soft)" />
      </g>

      {/* the pour */}
      <path d="M339 178 C 345 230, 342 300, 344 392" fill="none" stroke="#3b2014" strokeWidth="6" strokeLinecap="round" />
      <path className="pour-stream" d="M339 178 C 345 230, 342 300, 344 392" fill="none" stroke="#8a5a38" strokeWidth="2" strokeLinecap="round" />

      {/* jebena, tipped 40° */}
      <g transform="translate(160 200) rotate(40)">
        {/* handle */}
        <path d="M-14 -168 C -70 -170, -96 -110, -74 -52" fill="none" stroke="var(--clay)" strokeWidth="13" strokeLinecap="round" />
        <path d="M-14 -168 C -70 -170, -96 -110, -74 -52" fill="none" stroke="var(--bean)" strokeWidth="2" strokeLinecap="round" opacity="0.25" />
        {/* spout */}
        <path d="M58 -48 C 92 -62, 112 -92, 130 -124 L 140 -116 C 120 -76, 100 -40, 66 -22 Z" fill="var(--clay)" />
        {/* neck */}
        <path d="M-16 -82 L -14 -188 C -14 -196, 14 -196, 14 -188 L 16 -82 Z" fill="var(--clay)" />
        {/* woven straw stopper */}
        <rect x="-18" y="-212" width="36" height="24" rx="6" fill="var(--gold)" />
        <path d="M-18 -204 h36 M-18 -196 h36" stroke="var(--bean)" strokeWidth="1.5" opacity="0.4" />
        <path d="M-12 -212 v24 M-4 -212 v24 M4 -212 v24 M12 -212 v24" stroke="var(--bean)" strokeWidth="1" opacity="0.3" />
        {/* body */}
        <ellipse cx="0" cy="0" rx="96" ry="90" fill="var(--clay)" />
        {/* light & shadow */}
        <path d="M-60 -50 C -30 -80, 20 -84, 50 -66" fill="none" stroke="#d27a4d" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
        <path d="M-90 20 C -70 80, 40 100, 88 30" fill="none" stroke="var(--bean)" strokeWidth="10" strokeLinecap="round" opacity="0.15" />
        {/* incised band around the belly */}
        <path d="M-92 -6 C -40 14, 40 14, 92 -6" fill="none" stroke="var(--gold)" strokeWidth="3" />
        <path d="M-88 6 L-80 14 L-72 8 L-64 16 L-56 10 L-48 18 L-40 12 L-32 20 L-24 14 L-16 20 L-8 14 L0 20 L8 14 L16 20 L24 14 L32 20 L40 12 L48 18 L56 10 L64 16 L72 8 L80 14 L88 6" fill="none" stroke="var(--cotton)" strokeWidth="2" opacity="0.85" />
        {/* foot */}
        <ellipse cx="0" cy="86" rx="40" ry="8" fill="#8e3f1e" />
      </g>

      {/* sini cup */}
      <g transform="translate(344 394)">
        <SiniCupShape />
      </g>

      {/* incense burner (small clay censer) with smoke */}
      <g transform="translate(92 430)">
        <g opacity="0.55">
          <g transform="translate(0 -28)">
            <SmokeCurls color="var(--green-ink)" />
          </g>
        </g>
        <path d="M-26 -28 L 26 -28 C 24 -8, 14 0, 0 0 C -14 0, -24 -8, -26 -28 Z" fill="var(--bean)" />
        <rect x="-6" y="0" width="12" height="18" fill="var(--bean)" />
        <ellipse cx="0" cy="22" rx="24" ry="6" fill="var(--bean)" />
        <circle cx="-6" cy="-30" r="4" fill="var(--gold)" />
        <circle cx="5" cy="-31" r="3" fill="var(--tibeb-red)" opacity="0.8" />
      </g>

      {/* a few roasted beans on the table */}
      {[
        [210, 500, 20],
        [236, 508, -30],
        [258, 498, 60],
      ].map(([x, y, r], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${r})`}>
          <ellipse rx="10" ry="7" fill="var(--bean)" />
          <path d="M-8 0 C -3 -3, 3 3, 8 0" stroke="var(--bean-soft)" strokeWidth="1.5" fill="none" />
        </g>
      ))}
    </svg>
  );
}
