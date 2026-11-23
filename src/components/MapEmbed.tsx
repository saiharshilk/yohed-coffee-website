"use client";

import { useEffect, useRef, useState } from "react";
import { links, business } from "@/content/site";

/** Google Maps iframe, only requested when the Visit section nears the viewport. */
export function MapEmbed() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="relative min-h-[360px] overflow-hidden rounded-[28px] bg-cotton-deep ring-1 ring-bean/10 md:min-h-full">
      {show ? (
        <iframe
          title={`Map showing ${business.name} at ${business.address.street}`}
          src={links.mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center p-6 text-center text-bean-soft">
          <p>Map loading…</p>
        </div>
      )}
    </div>
  );
}
