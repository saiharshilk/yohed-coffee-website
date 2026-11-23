"use client";

import { useSyncExternalStore } from "react";
import { hours } from "@/content/site";
import { formatTime, shopNow } from "@/lib/hours";

export function HoursTable() {
  // Client-only: the static HTML has no "today"; the browser fills it in after load.
  const today = useSyncExternalStore(
    () => () => {},
    () => shopNow().day,
    () => null
  );
  return (
    <table className="mt-8 w-full max-w-md text-[15px]">
      <caption className="mb-2 text-left font-display text-2xl text-bean">Hours</caption>
      <tbody>
        {hours.map((h) => {
          const isToday = h.day === today;
          return (
            <tr key={h.day} className={isToday ? "bg-gold/30 font-semibold" : ""} aria-current={isToday ? "date" : undefined}>
              <th scope="row" className="rounded-l-lg py-2 pl-3 text-left font-normal">
                {h.label}
                {isToday && <span className="ml-2 text-xs font-semibold text-clay-ink">Today</span>}
              </th>
              <td className="rounded-r-lg py-2 pr-3 text-right tabular-nums">
                {formatTime(h.open)} – {formatTime(h.close)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
