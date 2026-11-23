import { photos, space } from "@/content/site";
import { ImageSlot } from "../ImageSlot";
import { GalleryArt } from "../motifs/GalleryArt";

export function Space() {
  return (
    <section id="space" aria-labelledby="space-title" className="bg-cotton-deep/60">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <h2 id="space-title" className="font-display text-[clamp(2.6rem,5.4vw,4.6rem)] leading-none text-bean">
          {space.title.en}
        </h2>
        <figure className="mt-12">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
            <ImageSlot slot={photos.spaceCounter} className="col-span-2 rounded-2xl md:col-span-7" fallback={<GalleryArt kind="counter" label="Illustration of the counter" />} />
            <ImageSlot slot={photos.spaceArt} className="col-span-1 rounded-2xl md:col-span-5 md:row-span-2 md:aspect-auto!" fallback={<GalleryArt kind="art" label="Illustration of art on the walls" />} />
            <ImageSlot slot={photos.spacePour} className="col-span-1 aspect-[3/4]! rounded-2xl md:col-span-3 md:aspect-auto!" fallback={<GalleryArt kind="pour" label="Illustration of coffee being poured" />} />
            <ImageSlot slot={photos.spaceBeans} className="col-span-1 aspect-square! rounded-2xl md:col-span-4 md:aspect-[4/3]!" fallback={<GalleryArt kind="beans" label="Illustration of roasted beans" />} />
            <ImageSlot slot={photos.spacePatio} className="col-span-1 aspect-square! rounded-2xl md:col-span-12 md:aspect-[16/5]!" fallback={<GalleryArt kind="patio" label="Illustration of the patio" />} />
          </div>
          <figcaption className="mt-6 max-w-[50ch] font-display text-2xl italic text-bean-soft">{space.caption.en}</figcaption>
        </figure>
      </div>
    </section>
  );
}
