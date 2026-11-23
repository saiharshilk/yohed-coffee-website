/** Soft incense / steam curls. Animated with CSS so it costs no JS; off under reduced motion. */
export function SmokeCurls({ color = "currentColor", className = "" }: { color?: string; className?: string }) {
  return (
    <g className={className} fill="none" stroke={color} strokeLinecap="round" strokeWidth="3">
      <path className="smoke" d="M0 0 C -10 -14, 10 -24, 0 -38 S -8 -60, 2 -74" />
      <path className="smoke smoke-2" d="M10 -4 C 22 -18, 2 -30, 14 -44 S 22 -62, 12 -78" opacity="0.8" />
      <path className="smoke smoke-3" d="M-10 -2 C -22 -16, -2 -28, -14 -42 S -20 -58, -10 -72" opacity="0.7" />
    </g>
  );
}
