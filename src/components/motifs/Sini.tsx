/** A handle-less sini cup, drawn in code. `fill` 0..1 controls the coffee level when used statically. */
export function SiniCupShape({
  coffee = "#3b2014",
  showCoffee = true,
  rim = "var(--gold)",
  body = "var(--cotton)",
  outline = "var(--bean)",
}: {
  coffee?: string;
  showCoffee?: boolean;
  rim?: string;
  body?: string;
  outline?: string;
}) {
  // Local coords: cup 100 wide, 70 tall, top at y=0, centered on x=0.
  return (
    <g>
      <ellipse cx="0" cy="78" rx="62" ry="9" fill={outline} opacity="0.12" />
      <path d="M-50 0 C -48 40, -32 66, -22 70 L 22 70 C 32 66, 48 40, 50 0 Z" fill={body} stroke={outline} strokeWidth="3" strokeLinejoin="round" />
      {/* little woven band around the cup */}
      <path d="M-46.5 22 L 46.5 22" stroke="var(--clay)" strokeWidth="3" />
      <path d="M-44 28 L-38 34 L-32 28 L-26 34 L-20 28 L-14 34 L-8 28 L-2 34 L4 28 L10 34 L16 28 L22 34 L28 28 L34 34 L40 28" fill="none" stroke={rim} strokeWidth="2" />
      <ellipse cx="0" cy="0" rx="50" ry="8" fill={body} stroke={outline} strokeWidth="3" />
      {showCoffee && <ellipse cx="0" cy="1.5" rx="44" ry="5.5" fill={coffee} />}
      <path d="M-22 70 L 22 70 L 18 76 L -18 76 Z" fill={outline} />
    </g>
  );
}
