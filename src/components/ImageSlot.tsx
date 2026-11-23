"use client";

import { useState } from "react";
import { asset } from "@/lib/asset";
import type { PhotoSlot } from "@/content/site";

/**
 * A photo slot. Renders /images/<file> (through asset() so the basePath is applied)
 * once `ready` is true in site.ts; otherwise, or if the file fails to load,
 * shows the illustrated fallback.
 */
export function ImageSlot({
  slot,
  fallback,
  className = "",
  priority = false,
}: {
  slot: PhotoSlot;
  fallback: React.ReactNode;
  className?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const showPhoto = slot.ready && !failed;
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: slot.ratio }}>
      {showPhoto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={asset(`/images/${slot.file}`)}
          alt={slot.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0">{fallback}</div>
      )}
    </div>
  );
}
