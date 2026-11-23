"use client";

import { useEffect, useState } from "react";
import { openStatus, type OpenStatus as S } from "@/lib/hours";

/** Live open/closed pill in America/Los_Angeles time. Renders a neutral line until mounted (static HTML). */
export function OpenStatus({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<S | null>(null);
  useEffect(() => {
    const tick = () => setStatus(openStatus());
    tick();
    const t = setInterval(tick, 60_000);
    return () => clearInterval(t);
  }, []);
  return (
    <span className={`inline-flex items-center gap-2 ${className}`} aria-live="polite">
      <span
        aria-hidden="true"
        className={`h-2 w-2 shrink-0 rounded-full ${status?.open ? "bg-[#7fc49b]" : status ? "bg-gold" : "bg-cotton/40"}`}
      />
      <span className="truncate">{status ? status.text : "Open daily from 7 AM"}</span>
    </span>
  );
}
