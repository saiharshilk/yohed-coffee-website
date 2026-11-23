"use client";

import { useEffect, useRef, useState } from "react";
import { menu, menuCopy, showPrices } from "@/content/site";
import { Tibeb } from "../motifs/Tibeb";

export function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  // Nav "Food" links to #food: open the Ethiopian Food tab. "Coffee" (#menu) opens Coffee.
  useEffect(() => {
    const sync = () => {
      if (location.hash === "#food") setActive("food");
      else if (location.hash === "#menu") setActive("coffee");
      else if (location.hash === "#beans-menu") setActive("beans");
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % menu.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + menu.length) % menu.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = menu.length - 1;
    else return;
    e.preventDefault();
    setActive(menu[next].id);
    tabs.current[next]?.focus();
  };

  // Keep the active tab visible in the horizontally scrolling row on phones.
  useEffect(() => {
    const el = tabs.current[menu.findIndex((c) => c.id === active)];
    const row = el?.parentElement;
    if (!el || !row) return;
    const left = el.offsetLeft - row.offsetLeft - 16;
    if (left < row.scrollLeft || el.offsetLeft + el.offsetWidth > row.scrollLeft + row.clientWidth) {
      row.scrollTo({ left, behavior: "smooth" });
    }
  }, [active]);

  const current = menu.find((c) => c.id === active)!;

  return (
    <section id="menu" aria-labelledby="menu-title" className="relative">
      <span id="food" className="absolute top-0" aria-hidden="true" />
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 id="menu-title" className="font-display text-[clamp(2.6rem,5.4vw,4.6rem)] leading-none text-bean">
            {menuCopy.title.en}
          </h2>
          <p className="max-w-[40ch] text-[15px] leading-relaxed text-bean-soft md:text-right">{menuCopy.priceNote.en}</p>
        </div>

        <div role="tablist" aria-label="Menu categories" className="no-scrollbar -mx-4 mt-10 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
          {menu.map((c, i) => {
            const selected = c.id === active;
            return (
              <button
                key={c.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={selected}
                aria-controls={`panel-${c.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(c.id)}
                onKeyDown={(e) => onKey(e, i)}
                className={`shrink-0 rounded-full border-2 px-4 py-2 text-[15px] font-semibold transition-colors ${
                  selected ? "border-bean bg-bean text-cotton" : "border-bean/20 text-bean hover:border-bean"
                }`}
              >
                {c.label.en}
              </button>
            );
          })}
        </div>

        <div className="mt-8 rounded-[22px] bg-cotton-deep/70 ring-1 ring-bean/10">
          <Tibeb variant="thin" className="rounded-t-[22px]" />
          <div role="tabpanel" id={`panel-${current.id}`} aria-labelledby={`tab-${current.id}`} tabIndex={0} className="px-6 py-8 sm:px-10 sm:py-10">
            <ul className="grid gap-x-12 sm:grid-cols-2">
              {current.items.map((item) => (
                <li key={item.name.en} className="flex items-baseline gap-4 border-b border-dashed border-bean/20 py-4">
                  <span className="flex-1">
                    <span className="font-display text-[1.6rem] leading-tight text-bean">{item.name.en}</span>
                    {item.description?.en && <span className="mt-0.5 block text-sm text-bean-soft">{item.description.en}</span>}
                  </span>
                  {showPrices && item.price && <span className="font-semibold tabular-nums text-clay-ink">{item.price}</span>}
                </li>
              ))}
            </ul>
            {current.note && <p className="mt-6 text-[15px] italic text-bean-soft">{current.note.en}</p>}
          </div>
          <Tibeb variant="thin" className="rounded-b-[22px]" animate={false} />
        </div>
      </div>
    </section>
  );
}
