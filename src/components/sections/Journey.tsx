"use client";

import { m, useReducedMotion } from "framer-motion";
import { origin, geez } from "@/content/site";

/**
 * A gentle line drawn from Ethiopia to San Diego. Abstract on purpose:
 * a horizon of latitude lines, two places, and the path between them.
 */
export function Journey() {
  const reduce = useReducedMotion();
  const draw = reduce
    ? {}
    : {
        initial: { pathLength: 0 },
        whileInView: { pathLength: 1 },
        viewport: { once: true, amount: 0.5 },
        transition: { duration: 2.4, ease: [0.33, 1, 0.68, 1] as const },
      };
  return (
    <figure className="relative rounded-[28px] bg-bean p-6 text-cotton sm:p-10">
      <svg viewBox="0 0 560 360" className="h-auto w-full" role="img" aria-labelledby="journey-title">
        <title id="journey-title">A line drawn from Ethiopia to 4160 University Ave in City Heights, San Diego</title>
        {/* latitude lines */}
        {[60, 120, 180, 240, 300].map((y) => (
          <path key={y} d={`M0 ${y} H560`} stroke="var(--cotton)" strokeOpacity="0.08" />
        ))}
        {/* Ethiopia (east, right) */}
        <g transform="translate(470 250)">
          <circle r="34" fill="var(--clay)" opacity="0.25" />
          <circle r="9" fill="var(--clay)" />
          <text y="66" textAnchor="middle" fontFamily="var(--font-geez)" fontSize="30" fill="var(--gold)" lang="am">
            {geez.buna.am}
          </text>
        </g>
        {/* San Diego (west, left) */}
        <g transform="translate(90 120)">
          <circle r="26" fill="var(--gold)" opacity="0.2" />
          <circle r="7" fill="var(--gold)" />
        </g>
        <m.path
          d="M470 250 C 420 60, 200 20, 90 120"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1 0"
          {...draw}
        />
        <path d="M470 250 C 420 60, 200 20, 90 120" fill="none" stroke="var(--cotton)" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 7" />
      </svg>
      <figcaption className="mt-2 grid grid-cols-2 gap-6 text-sm">
        <div>
          <p className="font-display text-2xl text-gold">{origin.journeyTo.en}</p>
          <p className="mt-1 text-cotton/80">{origin.journeyToSub.en}</p>
        </div>
        <div className="text-right">
          <p className="font-display text-2xl text-cotton">{origin.journeyFrom.en}</p>
          <p className="mt-1 text-cotton/80">Where coffee began</p>
        </div>
      </figcaption>
    </figure>
  );
}
