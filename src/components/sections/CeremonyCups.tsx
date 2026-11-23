"use client";

import { m, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

const COFFEE = ["#2b160c", "#5a3420", "#8a5a38"]; // Abol, Tona, Bereka: each pour a little lighter
const INTERIOR = "M-46 4 C -44 40, -30 64, -21 67 L 21 67 C 30 64, 44 40, 46 4 Z";

function Cup({ progress, index, color, label }: { progress: MotionValue<number>; index: number; color: string; label: string }) {
  // Each cup fills in its own third of the scroll range.
  const start = index / 3;
  const level = useTransform(progress, [start, start + 0.3], [70, 5], { clamp: true });
  const steam = useTransform(progress, [start + 0.22, start + 0.33], [0, 0.55], { clamp: true });
  const id = `cup-interior-${index}`;
  return (
    <svg viewBox="-70 -70 140 160" className="h-auto w-full max-w-[220px]" role="img" aria-label={label}>
      <defs>
        <clipPath id={id}>
          <path d={INTERIOR} />
        </clipPath>
      </defs>
      <m.g style={{ opacity: steam }} fill="none" stroke="var(--cotton)" strokeWidth="2.5" strokeLinecap="round">
        <path className="smoke" d="M-10 -8 C -18 -22, -2 -30, -10 -46" />
        <path className="smoke smoke-2" d="M10 -8 C 2 -22, 18 -30, 10 -48" />
      </m.g>
      <ellipse cx="0" cy="84" rx="62" ry="7" fill="#000" opacity="0.3" />
      <path d="M-50 0 C -48 40, -32 66, -22 70 L 22 70 C 32 66, 48 40, 50 0 Z" fill="var(--cotton)" />
      <g clipPath={`url(#${id})`}>
        <m.rect x="-60" width="120" height="80" fill={color} y={level} />
      </g>
      <path d="M-50 0 C -48 40, -32 66, -22 70 L 22 70 C 32 66, 48 40, 50 0" fill="none" stroke="var(--gold)" strokeWidth="2.5" />
      <ellipse cx="0" cy="0" rx="50" ry="7" fill="none" stroke="var(--gold)" strokeWidth="2.5" />
      <path d="M-22 70 L 22 70 L 18 78 L -18 78 Z" fill="var(--gold)" />
    </svg>
  );
}

export function CeremonyCups({ rounds }: { rounds: { am: string; translit: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.35"] });
  const full = useTransform(scrollYProgress, () => 1);
  const progress = reduce ? full : scrollYProgress;
  return (
    <div ref={ref} className="mt-16 grid grid-cols-3 items-end gap-3 sm:gap-8">
      {rounds.map((r, i) => (
        <div key={r.translit} className="flex flex-col items-center">
          <Cup progress={progress} index={i} color={COFFEE[i]} label={`${r.translit} cup`} />
        </div>
      ))}
    </div>
  );
}
