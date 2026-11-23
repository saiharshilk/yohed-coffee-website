import { beans, photos } from "@/content/site";
import { ImageSlot } from "../ImageSlot";
import { CoffeeBag } from "../motifs/CoffeeBag";
import { BeanRow } from "../motifs/BeanRow";

export function Beans() {
  return (
    <section id="beans" aria-labelledby="beans-title" className="bg-clay text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-24">
        <div className="order-2 md:order-1">
          <h2 id="beans-title" className="font-display text-[clamp(2.6rem,5.4vw,4.6rem)] leading-none">
            {beans.title.en}
          </h2>
          <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-white">{beans.body.en}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#visit" className="rounded-full bg-cotton px-6 py-3.5 text-[15px] font-semibold text-bean transition-colors hover:bg-bean hover:text-cotton">
              {beans.cta.en}
            </a>
            <span className="text-[15px] text-white">{beans.ctaNote.en}</span>
          </div>
          <div className="mt-10 inline-block rounded-full bg-cotton/95 px-4 py-2">
            <BeanRow className="h-8 w-56" />
          </div>
        </div>
        <div className="order-1 mx-auto w-full max-w-[380px] md:order-2">
          <ImageSlot slot={photos.beansBag} fallback={<CoffeeBag className="h-full w-full" />} />
        </div>
      </div>
    </section>
  );
}
