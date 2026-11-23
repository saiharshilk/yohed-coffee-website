import { SiniCupShape } from "./Sini";
import { SmokeCurls } from "./Smoke";
import { CoffeeBag } from "./CoffeeBag";
import { BeanRow } from "./BeanRow";

/** Illustrated fallbacks for gallery photo slots, so the page looks finished with zero photos. */
export type ArtKind = "counter" | "art" | "patio" | "pour" | "beans" | "bag";

function Frame({ children, bg = "var(--cotton-deep)", label }: { children: React.ReactNode; bg?: string; label: string }) {
  return (
    <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" className="h-full w-full" role="img" aria-label={label}>
      <rect width="400" height="400" fill={bg} />
      {children}
    </svg>
  );
}

export function GalleryArt({ kind, label }: { kind: ArtKind; label: string }) {
  switch (kind) {
    case "counter":
      return (
        <Frame label={label} bg="#efe2cc">
          {/* shelf with jars of beans */}
          <rect x="40" y="120" width="320" height="6" fill="var(--bean)" />
          {[70, 130, 190].map((x, i) => (
            <g key={x}>
              <rect x={x} y="68" width="40" height="52" rx="6" fill="var(--cotton)" stroke="var(--bean)" strokeWidth="2.5" />
              <rect x={x + 4} y="86" width="32" height="30" rx="3" fill={["var(--green-bean)", "#7a4a2e", "var(--bean)"][i]} />
            </g>
          ))}
          <circle cx="300" cy="96" r="22" fill="var(--clay)" />
          <rect x="294" y="56" width="12" height="30" fill="var(--clay)" />
          {/* counter */}
          <rect x="0" y="250" width="400" height="150" fill="var(--bean)" />
          <rect x="0" y="242" width="400" height="12" fill="#5a3a28" />
          <rect x="0" y="268" width="400" height="10" fill="var(--gold)" opacity="0.9" />
          <path d="M0 272 L10 268 L20 276 L30 268 L40 276 L50 268 L60 276 L70 268 L80 276 L90 268 L100 276 L110 268 L120 276 L130 268 L140 276 L150 268 L160 276 L170 268 L180 276 L190 268 L200 276 L210 268 L220 276 L230 268 L240 276 L250 268 L260 276 L270 268 L280 276 L290 268 L300 276 L310 268 L320 276 L330 268 L340 276 L350 268 L360 276 L370 268 L380 276 L390 268 L400 276" stroke="var(--emerald)" strokeWidth="2" fill="none" />
          <g transform="translate(120 196) scale(0.6)"><SiniCupShape /></g>
          <g transform="translate(200 196) scale(0.6)"><SiniCupShape /></g>
          <g transform="translate(280 196) scale(0.6)"><SiniCupShape /></g>
        </Frame>
      );
    case "art":
      return (
        <Frame label={label} bg="var(--clay)">
          <rect x="70" y="60" width="260" height="280" fill="var(--cotton)" />
          <rect x="84" y="74" width="232" height="252" fill="var(--bean)" />
          <circle cx="200" cy="170" r="60" fill="var(--gold)" />
          <path d="M84 326 C 140 250, 260 250, 316 326 Z" fill="var(--green-ink)" />
          <path d="M120 326 L 200 220 L 280 326 Z" fill="var(--clay)" opacity="0.85" />
          {/* tibeb frame band */}
          {Array.from({ length: 13 }).map((_, i) => (
            <path key={i} d={`M${86 + i * 18} 80 l9 9 l-9 9 l-9 -9 z`} fill={i % 2 ? "var(--emerald)" : "var(--tibeb-red)"} />
          ))}
        </Frame>
      );
    case "patio":
      return (
        <Frame label={label} bg="#f3e6cf">
          <rect x="0" y="290" width="400" height="110" fill="#d9c4a2" />
          <path d="M0 300 h400" stroke="var(--bean)" strokeWidth="2" opacity="0.3" />
          {/* umbrella */}
          <path d="M80 140 C 120 80, 260 80, 300 140 Z" fill="var(--clay)" />
          <path d="M80 140 L300 140" stroke="var(--bean)" strokeWidth="3" />
          <path d="M120 140 L130 150 L140 140 L150 150 L160 140 L170 150 L180 140 L190 150 L200 140 L210 150 L220 140 L230 150 L240 140 L250 150 L260 140" fill="none" stroke="var(--gold)" strokeWidth="2.5" />
          <rect x="187" y="100" width="6" height="200" fill="var(--bean)" />
          {/* table + chairs */}
          <ellipse cx="190" cy="250" rx="70" ry="10" fill="var(--bean)" />
          <rect x="186" y="250" width="8" height="50" fill="var(--bean)" />
          <path d="M90 300 L96 220 L130 220 M100 260 h40 L136 300" stroke="var(--bean)" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M290 300 L284 220 L250 220 M280 260 h-40 L244 300" stroke="var(--bean)" strokeWidth="5" fill="none" strokeLinecap="round" />
          <g transform="translate(170 228) scale(0.28)"><SiniCupShape /></g>
          <g transform="translate(212 228) scale(0.28)"><SiniCupShape /></g>
          {/* sun */}
          <circle cx="340" cy="60" r="26" fill="var(--gold)" />
        </Frame>
      );
    case "pour":
      return (
        <Frame label={label} bg="var(--bean)">
          <path d="M196 0 C 200 80, 198 160, 200 236" stroke="#6b3f26" strokeWidth="9" fill="none" strokeLinecap="round" />
          <path className="pour-stream" d="M196 0 C 200 80, 198 160, 200 236" stroke="#a9744c" strokeWidth="3" fill="none" strokeLinecap="round" />
          <g transform="translate(200 240) scale(1.4)"><SiniCupShape body="var(--cotton)" outline="var(--cotton)" /></g>
          <g transform="translate(270 220)" opacity="0.5"><SmokeCurls color="var(--cotton)" /></g>
        </Frame>
      );
    case "beans":
      return (
        <Frame label={label} bg="var(--cotton-deep)">
          {Array.from({ length: 42 }).map((_, i) => {
            const x = 30 + (i % 7) * 56 + ((Math.floor(i / 7) % 2) * 28);
            const y = 40 + Math.floor(i / 7) * 60;
            const shade = ["var(--green-bean)", "#a9864f", "#7a4a2e", "var(--bean)", "var(--bean)", "#4a2c1c"][i % 6];
            return (
              <g key={i} transform={`translate(${x} ${y}) rotate(${(i * 37) % 180})`}>
                <ellipse rx="20" ry="14" fill={shade} />
                <path d="M-16 3 C -5 -6, 5 6, 16 -3" stroke="var(--cotton)" strokeWidth="2" fill="none" opacity="0.5" />
              </g>
            );
          })}
        </Frame>
      );
    case "bag":
      return <CoffeeBag className="h-full w-full" />;
  }
}

export { BeanRow };
