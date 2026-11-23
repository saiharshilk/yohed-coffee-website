"use client";

import { m, useReducedMotion } from "framer-motion";
import { useId } from "react";

type Variant = "thin" | "wide";

/**
 * Tibeb: the woven geometric band from the hem of a habesha kemis or netela.
 * Drawn as a repeating SVG pattern. On first view it "weaves" in left to right.
 */
export function Tibeb({
  variant = "wide",
  className = "",
  animate = true,
}: {
  variant?: Variant;
  className?: string;
  animate?: boolean;
}) {
  const id = useId().replace(/:/g, "");
  const reduce = useReducedMotion();
  const h = variant === "wide" ? 32 : 12;
  const still = !animate || reduce;

  return (
    // The observer watches the outer box; the clip lives on the inner one
    // (an element clipped to zero width never counts as "in view").
    <m.div
      aria-hidden="true"
      className={`w-full overflow-hidden ${className}`}
      style={{ height: h }}
      initial={still ? false : "hidden"}
      whileInView={still ? undefined : "shown"}
      viewport={{ once: true, amount: 0.5 }}
    >
      <m.div
        className="h-full w-full"
        variants={{
          hidden: { clipPath: "inset(0 100% 0 0)" },
          shown: { clipPath: "inset(0 0% 0 0)", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
        }}
      >
      <svg width="100%" height={h} xmlns="http://www.w3.org/2000/svg" focusable="false">
        <defs>
          {variant === "wide" ? (
            <pattern id={id} width="48" height="32" patternUnits="userSpaceOnUse">
              <rect width="48" height="32" fill="var(--cotton)" />
              <rect y="0" width="48" height="3" fill="var(--gold)" />
              <rect y="29" width="48" height="3" fill="var(--gold)" />
              <rect y="5" width="48" height="1.5" fill="var(--clay)" />
              <rect y="25.5" width="48" height="1.5" fill="var(--clay)" />
              {/* diamond: emerald with red heart */}
              <path d="M12 8 L20 16 L12 24 L4 16 Z" fill="var(--emerald)" />
              <path d="M12 12 L16 16 L12 20 L8 16 Z" fill="var(--tibeb-red)" />
              <rect x="11" y="15" width="2" height="2" fill="var(--gold)" />
              {/* stepped cross */}
              <path d="M34 10h4v4h4v4h-4v4h-4v-4h-4v-4h4z" fill="var(--tibeb-red)" />
              <rect x="35" y="15" width="2" height="2" fill="var(--gold)" />
              {/* small gold teeth between motifs */}
              <path d="M24 9 L26 12 L24 15 L22 12 Z M24 17 L26 20 L24 23 L22 20 Z" fill="var(--gold)" />
              <path d="M0 9 L2 12 L0 15 Z M48 9 L46 12 L48 15 Z M0 17 L2 20 L0 23 Z M48 17 L46 20 L48 23 Z" fill="var(--gold)" />
            </pattern>
          ) : (
            <pattern id={id} width="24" height="12" patternUnits="userSpaceOnUse">
              <rect width="24" height="12" fill="var(--cotton)" />
              <path d="M0 10 L6 2 L12 10 L18 2 L24 10" fill="none" stroke="var(--gold)" strokeWidth="2" />
              <path d="M6 7 L8 9.5 L6 12 L4 9.5 Z" fill="var(--emerald)" />
              <path d="M18 7 L20 9.5 L18 12 L16 9.5 Z" fill="var(--tibeb-red)" />
              <rect x="11" y="0" width="2" height="2" fill="var(--clay)" />
              <rect x="23" y="0" width="2" height="2" fill="var(--clay)" />
            </pattern>
          )}
        </defs>
        <rect width="100%" height={h} fill={`url(#${id})`} />
      </svg>
      </m.div>
    </m.div>
  );
}
