import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Instrument_Serif, Noto_Serif_Ethiopic } from "next/font/google";
import "./globals.css";
import { isDemo, seo, siteUrl } from "@/content/site";
import { asset } from "@/lib/asset";
import { MotionProvider } from "@/components/MotionProvider";

const display = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

// Only a handful of Ge'ez words are used; one weight keeps the download small.
const ethiopic = Noto_Serif_Ethiopic({
  variable: "--font-ethiopic",
  subsets: ["ethiopic"],
  weight: "600",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  robots: isDemo ? { index: false, follow: false } : { index: true, follow: true },
  icons: { icon: asset("/favicon.svg") },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${siteUrl}/`,
    siteName: "YOHED COFFEE",
    type: "website",
    images: [{ url: `${siteUrl}${seo.ogImage}`, width: 1200, height: 630, alt: "YOHED COFFEE, Ethiopian coffee in City Heights" }],
  },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description, images: [`${siteUrl}${seo.ogImage}`] },
};

export const viewport: Viewport = { themeColor: "#2A1A12" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${ethiopic.variable} antialiased`}>
      <body>
        <a href="#main" className="sr-only z-50 rounded-full bg-bean px-4 py-2 text-cotton focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
