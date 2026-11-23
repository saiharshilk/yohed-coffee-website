/** Illustrated kraft coffee bag with a tibeb-band label. */
export function CoffeeBag({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 400" className={className} role="img" aria-labelledby="bag-title">
      <title id="bag-title">Illustration: a bag of YOHED COFFEE roasted beans with a woven tibeb label</title>
      <defs>
        <pattern id="bag-tibeb" width="24" height="16" patternUnits="userSpaceOnUse">
          <rect width="24" height="16" fill="var(--cotton)" />
          <rect width="24" height="2" fill="var(--gold)" />
          <rect y="14" width="24" height="2" fill="var(--gold)" />
          <path d="M6 3 L11 8 L6 13 L1 8 Z" fill="var(--emerald)" />
          <path d="M6 6 L8 8 L6 10 L4 8 Z" fill="var(--tibeb-red)" />
          <path d="M16 5h2v2h2v2h-2v2h-2v-2h-2v-2h2z" fill="var(--tibeb-red)" />
        </pattern>
      </defs>
      <ellipse cx="160" cy="386" rx="120" ry="10" fill="var(--bean)" opacity="0.15" />
      {/* bag body */}
      <path d="M58 60 L262 60 L276 372 C 276 378, 272 382, 266 382 L54 382 C 48 382, 44 378, 44 372 Z" fill="#c9a27a" />
      <path d="M58 60 L262 60 L276 372 C 276 378, 272 382, 266 382 L54 382 C 48 382, 44 378, 44 372 Z" fill="none" stroke="var(--bean)" strokeWidth="3" strokeLinejoin="round" />
      {/* folded top */}
      <path d="M50 26 L270 26 L262 60 L58 60 Z" fill="#b38a62" stroke="var(--bean)" strokeWidth="3" strokeLinejoin="round" />
      <path d="M70 43 L250 43" stroke="var(--bean)" strokeWidth="2" strokeDasharray="4 6" opacity="0.5" />
      {/* side gusset shading */}
      <path d="M58 60 L44 372" stroke="#a77e56" strokeWidth="10" opacity="0.5" />
      <path d="M262 60 L276 372" stroke="#a77e56" strokeWidth="10" opacity="0.5" />
      {/* label */}
      <rect x="82" y="110" width="156" height="210" rx="4" fill="var(--cotton)" stroke="var(--bean)" strokeWidth="2" />
      <rect x="82" y="118" width="156" height="16" fill="url(#bag-tibeb)" />
      <rect x="82" y="296" width="156" height="16" fill="url(#bag-tibeb)" />
      <text x="160" y="196" textAnchor="middle" fontFamily="var(--font-geez)" fontSize="46" fill="var(--clay)" lang="am">ቡና</text>
      <text x="160" y="232" textAnchor="middle" fontFamily="var(--font-sans)" fontWeight="700" fontSize="16" letterSpacing="3" fill="var(--bean)">YOHED COFFEE</text>
      <text x="160" y="256" textAnchor="middle" fontFamily="var(--font-display)" fontStyle="italic" fontSize="15" fill="var(--bean-soft)">roasted Ethiopian beans</text>
      <text x="160" y="278" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fill="var(--bean-soft)">City Heights · San Diego</text>
      {/* spilled beans */}
      {[
        [300, 372, 30],
        [286, 388, -20],
        [24, 380, 70],
      ].map(([x, y, r], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${r})`}>
          <ellipse rx="11" ry="8" fill="var(--bean)" />
          <path d="M-9 0 C -3 -3, 3 3, 9 0" stroke="var(--bean-soft)" strokeWidth="1.5" fill="none" />
        </g>
      ))}
    </svg>
  );
}
