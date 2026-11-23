/**
 * ALL website content lives in this file.
 *
 * Strings are bilingual-ready: { en, am? }. `am` is Amharic. Only fill `am` with
 * text confirmed by the family; never machine-translate. An Amharic toggle can
 * later read `am` and fall back to `en`.
 *
 * Search for "TODO" to find everything that still needs the owner's confirmation.
 */

export type L = { en: string; am?: string };

/* ------------------------------------------------------------------ */
/* Flags                                                               */
/* ------------------------------------------------------------------ */

/** true while this is a pitch/demo: adds noindex,nofollow and the "concept site" footer line. */
export const isDemo = true;

/** Prices stay hidden until the family confirms them. Flip to true once every item has a real `price`. */
export const showPrices = false;

/* ------------------------------------------------------------------ */
/* Business                                                            */
/* ------------------------------------------------------------------ */

export const business = {
  name: "YOHED COFFEE",
  // TODO: ask the owner how "Yohed" is spelled in Amharic. Do not guess.
  nameAm: undefined as string | undefined,
  tagline: { en: "Family-owned Ethiopian coffee · City Heights" } as L,
  established: 2018, // TODO: confirm with the family
  address: {
    street: "4160 University Ave",
    city: "San Diego",
    region: "CA",
    postalCode: "92105",
    neighborhood: "City Heights",
    country: "US",
  },
  phone: { display: "(619) 310-5711", tel: "+16193105711" },
  rating: { value: 4.8, count: 120, source: "Google" },
  priceRange: "$1–10 per person",
  services: ["Dine-in", "Takeout", "No-contact delivery"],
  // Decoded from Plus Code PVXV+WW San Diego (8544PVXV+WW) with open-location-code.
  // TODO: confirm the pin with the owner.
  geo: { latitude: 32.74981, longitude: -117.10519 },
};

export const links = {
  // TODO: replace with the real online ordering link once the family shares it.
  orderOnlineUrl: "#visit",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=YOHED+COFFEE%2C+4160+University+Ave%2C+San+Diego%2C+CA+92105",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=YOHED+COFFEE%2C+4160+University+Ave%2C+San+Diego%2C+CA+92105",
  mapEmbedUrl:
    "https://www.google.com/maps?q=YOHED+COFFEE,+4160+University+Ave,+San+Diego,+CA+92105&output=embed",
};

/** Public URL of the deployed site (used for Open Graph + JSON-LD). */
export const siteUrl = "https://saiharshilk.github.io/yohed-coffee-website";

/* ------------------------------------------------------------------ */
/* Hours (America/Los_Angeles)                                         */
/* ------------------------------------------------------------------ */

// TODO: confirm with the family. Source is a third-party listing.
// Times are 24h "HH:MM". day: 0 = Sunday … 6 = Saturday.
export const timeZone = "America/Los_Angeles";

export type DayHours = { day: number; label: string; open: string; close: string } ;

export const hours: DayHours[] = [
  { day: 1, label: "Monday", open: "07:00", close: "18:00" },
  { day: 2, label: "Tuesday", open: "07:00", close: "16:30" },
  { day: 3, label: "Wednesday", open: "07:00", close: "18:00" },
  { day: 4, label: "Thursday", open: "07:00", close: "18:00" },
  { day: 5, label: "Friday", open: "07:00", close: "18:00" },
  { day: 6, label: "Saturday", open: "07:00", close: "18:00" },
  { day: 0, label: "Sunday", open: "07:00", close: "13:00" },
];

/* ------------------------------------------------------------------ */
/* Ethiopic accent words (only these; all verified common words)        */
/* ------------------------------------------------------------------ */

export const geez = {
  buna: { am: "ቡና", translit: "buna", en: "coffee" },
  abol: { am: "አቦል", translit: "Abol", en: "the first round" },
  tona: { am: "ቶና", translit: "Tona", en: "the second round" },
  bereka: { am: "በረካ", translit: "Bereka", en: "the third round, “the blessing”" },
};

/* ------------------------------------------------------------------ */
/* Copy                                                                */
/* ------------------------------------------------------------------ */

export const nav: { label: L; href: string }[] = [
  { label: { en: "Coffee" }, href: "#menu" },
  { label: { en: "Ceremony" }, href: "#ceremony" },
  { label: { en: "Food" }, href: "#food" },
  { label: { en: "Beans" }, href: "#beans" },
  { label: { en: "Visit" }, href: "#visit" },
];

export const hero = {
  headline: { en: "Ethiopian coffee, poured with care." } as L,
  subline: {
    en: "Freshly roasted Ethiopian beans, homemade pastries and real hospitality, on University Ave in City Heights.",
  } as L,
  ctaMenu: { en: "See the menu" } as L,
  ctaDirections: { en: "Get directions" } as L,
  badges: [
    { en: "4.8★ · 120 Google reviews" },
    { en: "Family-owned" },
    { en: "Beans to take home" },
  ] as L[],
};

export const origin = {
  title: { en: "From the birthplace of coffee" } as L,
  body: [
    {
      en: "Coffee’s story starts in Ethiopia. The arabica plant grows wild in the forests of the southwest, and Ethiopians have been roasting, brewing and sharing it for centuries.",
    },
  ] as L[],
  legendLabel: { en: "The legend of Kaldi" } as L,
  legend: {
    en: "As the story is told, a goat herder named Kaldi noticed his goats dancing with energy after eating red cherries from a shrub. He tried them himself, and that was the start of coffee. It’s a legend, not history, but Ethiopians have told it for generations.",
  } as L,
  journeyFrom: { en: "Ethiopia" } as L,
  journeyTo: { en: "4160 University Ave" } as L,
  journeyToSub: { en: "City Heights, San Diego" } as L,
  // TODO: ask the owner which regions the beans come from (e.g. Yirgacheffe, Sidamo, Harar)
  // and add them here. Do not invent sourcing claims.
  regions: [] as L[],
};

export const ceremony = {
  title: { en: "The coffee ceremony" } as L,
  intro: {
    en: "In Ethiopia, coffee is something you make together. Green beans are roasted in a pan right in front of the guests, ground, and brewed in a jebena, a round clay pot with a long neck. Incense often burns beside it.",
  } as L,
  rounds: [
    {
      key: "abol" as const,
      body: { en: "The first pour, and the strongest." } as L,
    },
    {
      key: "tona" as const,
      body: { en: "The second pour. The same grounds are brewed again, a little lighter." } as L,
    },
    {
      key: "bereka" as const,
      body: { en: "The third pour, “the blessing.” Gentlest of the three." } as L,
    },
  ],
  closing: {
    en: "Three rounds take time, and that’s the point. Coffee is a reason to sit down, talk and share.",
  } as L,
  // TODO: ask the owner whether Yohed hosts ceremonies. If yes, set hostsCeremonies = true
  // and fill the schedule; the "Join a ceremony" block appears automatically.
  hostsCeremonies: false,
  schedule: [] as { when: L; note?: L }[],
};

/* ------------------------------------------------------------------ */
/* Menu (seed items only; never invent items or descriptions)          */
/* ------------------------------------------------------------------ */

export type MenuItem = { name: L; description?: L; price?: string };
export type MenuCategory = { id: string; label: L; items: MenuItem[]; note?: L };

export const menu: MenuCategory[] = [
  {
    id: "coffee",
    label: { en: "Coffee" },
    items: [
      { name: { en: "Ethiopian Coffee" } },
      { name: { en: "Regular Coffee with Cream" }, description: { en: "Frothy" } },
      { name: { en: "Macchiato" } },
      { name: { en: "Americano" } },
      { name: { en: "Latte" } },
      { name: { en: "Vanilla Latte" } },
      { name: { en: "Cappuccino" } },
      { name: { en: "Iced Coffee" } },
    ],
  },
  {
    id: "tea",
    label: { en: "Tea" },
    // TODO: add the rest of the teas
    items: [{ name: { en: "Peanut Tea" } }, { name: { en: "Matcha Latte" } }],
    note: { en: "More teas at the counter." },
  },
  {
    id: "pastries",
    label: { en: "Pastries & Snacks" },
    // TODO: list the homemade pastries by name
    items: [
      { name: { en: "Sambusa" } },
      { name: { en: "Baklava" } },
      { name: { en: "Cake" } },
      { name: { en: "Homemade Pastries" } },
    ],
  },
  {
    id: "food",
    label: { en: "Ethiopian Food" },
    // TODO: add the other Ethiopian dishes
    items: [{ name: { en: "Dulet" } }],
    note: { en: "Ask at the counter about today’s food." },
  },
  {
    id: "beans",
    label: { en: "Beans" },
    // TODO: bag sizes
    items: [{ name: { en: "Freshly roasted Ethiopian coffee beans" } }],
  },
];

export const menuCopy = {
  title: { en: "The menu" } as L,
  priceNote: {
    en: "Friendly prices: most people spend between $1 and $10. Ask at the counter for today’s prices.",
  } as L,
};

/* ------------------------------------------------------------------ */
/* Beans                                                               */
/* ------------------------------------------------------------------ */

export const beans = {
  title: { en: "Take some home" } as L,
  body: {
    en: "The same freshly roasted Ethiopian beans we brew behind the counter, bagged for your kitchen.",
  } as L,
  cta: { en: "Ask at the counter" } as L,
  // TODO: online bean sales later
  ctaNote: { en: "Available in the shop for now." } as L,
};

/* ------------------------------------------------------------------ */
/* Reviews: real Google reviews, quoted exactly. Do not edit.          */
/* ------------------------------------------------------------------ */

export const reviews: { name: string; text: string }[] = [
  {
    name: "Mia",
    text: "Come support this biz! I stopped in yesterday and was amazed at the prices, the fact that the coffee comes straight from the original source of coffee in Ethiopia, and the owner is undoubtedly a bright kind hearted man who truly cares about his customers. Beautiful vibes in the cafe, and cool ethnic art.",
  },
  {
    name: "Adam",
    text: "Good coffee and Dawit, the owner, is really nice. Update: the food is also delicious and authentic. Highly recommend the dulet.",
  },
  {
    name: "Briar",
    text: "YOHED COFFEE has a nice, easygoing feel to it. The coffee was good and had a nice flavor without being too strong.",
  },
];

export const reviewsCopy = {
  title: { en: "What neighbors say" } as L,
  cta: { en: "Read all reviews on Google" } as L,
};

/* ------------------------------------------------------------------ */
/* Space / gallery                                                     */
/* ------------------------------------------------------------------ */

export const space = {
  title: { en: "Stay a while" } as L,
  caption: { en: "Stay a while: indoor seating and a patio on University Ave." } as L,
};

/* ------------------------------------------------------------------ */
/* Photo slots. Drop a file in /public/images and flip `ready` to true. */
/* Until then the illustrated fallback shows (no 404 requests).        */
/* ------------------------------------------------------------------ */

export type PhotoSlot = { file: string; ratio: string; alt: string; ready: boolean };

export const photos = {
  heroPour: { file: "hero-pour.jpg", ratio: "4/5", alt: "Coffee poured from a clay jebena into a small cup", ready: false },
  beansBag: { file: "beans-bag.jpg", ratio: "4/5", alt: "A bag of freshly roasted Ethiopian coffee beans", ready: false },
  spaceCounter: { file: "space-counter.jpg", ratio: "4/3", alt: "The counter at YOHED COFFEE", ready: false },
  spaceArt: { file: "space-art.jpg", ratio: "3/4", alt: "Ethiopian art on the cafe walls", ready: false },
  spacePatio: { file: "space-patio.jpg", ratio: "16/10", alt: "The outdoor patio on University Ave", ready: false },
  spacePour: { file: "space-pour.jpg", ratio: "1/1", alt: "Coffee being poured into a sini cup", ready: false },
  spaceBeans: { file: "space-beans.jpg", ratio: "1/1", alt: "Roasted Ethiopian coffee beans", ready: false },
} satisfies Record<string, PhotoSlot>;

/* ------------------------------------------------------------------ */
/* Visit / footer                                                      */
/* ------------------------------------------------------------------ */

export const visit = {
  title: { en: "Come by" } as L,
  chips: [{ en: "Dine-in" }, { en: "Takeout" }, { en: "Patio" }, { en: "Beans to go" }] as L[],
  delivery: { en: "No-contact delivery available." } as L,
  orderLabel: { en: "Order online" } as L,
  callLabel: { en: "Call" } as L,
  directionsLabel: { en: "Directions" } as L,
};

export const footer = {
  credit: { en: "Website concept by Sai Konchada" } as L,
  demoLine: { en: "Concept site · not affiliated with YOHED COFFEE · built as a proposal" } as L,
};

export const seo = {
  title: "YOHED COFFEE | Ethiopian Coffee House in City Heights, San Diego",
  description:
    "Family-owned Ethiopian coffee house on University Ave in City Heights, San Diego. Freshly roasted Ethiopian beans, espresso drinks, teas, homemade pastries and Ethiopian food. 4.8★ on Google.",
  ogImage: "/og.png",
};
