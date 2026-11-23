/** Coffee cherry → green bean → roasting → roasted. A small sequence drawn in code. */
const stages = [
  { fill: "var(--tibeb-red)", kind: "cherry" },
  { fill: "var(--green-bean)", kind: "bean" },
  { fill: "#a9864f", kind: "bean" },
  { fill: "#7a4a2e", kind: "bean" },
  { fill: "var(--bean)", kind: "bean" },
] as const;

export function BeanRow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 40" className={className} aria-hidden="true" focusable="false">
      {stages.map((s, i) => (
        <g key={i} transform={`translate(${30 + i * 60} 20)`}>
          {s.kind === "cherry" ? (
            <>
              <circle r="12" fill={s.fill} />
              <circle cx="-4" cy="-4" r="3" fill="#fff" opacity="0.35" />
              <path d="M0 -12 C 2 -18, 8 -20, 12 -18" stroke="var(--green-ink)" strokeWidth="2" fill="none" />
            </>
          ) : (
            <>
              <ellipse rx="13" ry="10" fill={s.fill} transform="rotate(-20)" />
              <path d="M-10 3 C -3 -4, 3 4, 10 -3" stroke="var(--cotton)" strokeWidth="1.6" fill="none" opacity="0.6" />
            </>
          )}
          {i < stages.length - 1 && <path d="M20 0 h20" stroke="var(--gold)" strokeWidth="1.5" strokeDasharray="2 4" />}
        </g>
      ))}
    </svg>
  );
}
