import { hours, timeZone } from "@/content/site";

const DAY_INDEX: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

/** Current weekday (0=Sun) and minutes since midnight in the shop's time zone. */
export function shopNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "0";
  return { day: DAY_INDEX[get("weekday")] ?? 0, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

const toMin = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

export function formatTime(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${h12} ${suffix}` : `${h12}:${String(m).padStart(2, "0")} ${suffix}`;
}

export type OpenStatus = { open: boolean; text: string };

export function openStatus(date = new Date()): OpenStatus {
  const { day, minutes } = shopNow(date);
  const today = hours.find((h) => h.day === day);
  if (today && minutes >= toMin(today.open) && minutes < toMin(today.close)) {
    return { open: true, text: `Open now · until ${formatTime(today.close)}` };
  }
  if (today && minutes < toMin(today.open)) {
    return { open: false, text: `Closed · opens ${formatTime(today.open)}` };
  }
  for (let i = 1; i <= 7; i++) {
    const next = hours.find((h) => h.day === (day + i) % 7);
    if (next) {
      const when = i === 1 ? "tomorrow" : next.label;
      return { open: false, text: `Closed · opens ${when} ${formatTime(next.open)}` };
    }
  }
  return { open: false, text: "Closed" };
}
