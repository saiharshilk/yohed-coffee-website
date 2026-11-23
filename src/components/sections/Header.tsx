import { business, links, nav } from "@/content/site";
import { OpenStatus } from "../OpenStatus";
import { Tibeb } from "../motifs/Tibeb";

export function Header() {
  return (
    <header className="contents">
      <div className="on-dark sticky top-0 z-40 bg-bean text-cotton">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 h-11 px-4 text-[12.5px] sm:px-6 sm:text-[13px]">
          <OpenStatus className="min-w-0 truncate" />
          <div className="flex shrink-0 items-center gap-2 whitespace-nowrap sm:gap-4">
            <a href={`tel:${business.phone.tel}`} className="hidden underline-offset-4 hover:underline sm:inline">
              {business.phone.display}
            </a>
            <a href={`tel:${business.phone.tel}`} className="rounded-full px-2 py-1 underline underline-offset-4 sm:hidden">
              Call
            </a>
            <a
              href={links.orderOnlineUrl}
              className="rounded-full bg-gold px-3 py-1.5 sm:px-3.5 font-semibold text-bean transition-colors hover:bg-cotton"
            >
              Order online
            </a>
          </div>
        </div>
      </div>
      <div className="z-30 border-b border-bean/10 bg-cotton md:sticky md:top-11">
        <nav aria-label="Main" className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3 sm:px-6">
          <a href="#top" className="group inline-flex flex-col" aria-label="YOHED COFFEE, back to top">
            <span className="font-sans text-[19px] font-extrabold tracking-[0.22em] text-bean">{business.name}</span>
            <Tibeb variant="thin" className="mt-1 !h-[8px] opacity-90" animate={false} />
          </a>
          <ul className="no-scrollbar -mx-1 flex w-full gap-1 overflow-x-auto text-[15px] sm:w-auto sm:gap-2">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="block rounded-full px-3 py-1.5 text-bean-soft transition-colors hover:bg-bean/5 hover:text-bean">
                  {n.label.en}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
