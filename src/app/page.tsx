import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Origin } from "@/components/sections/Origin";
import { Ceremony } from "@/components/sections/Ceremony";
import { Menu } from "@/components/sections/Menu";
import { Beans } from "@/components/sections/Beans";
import { Reviews } from "@/components/sections/Reviews";
import { Space } from "@/components/sections/Space";
import { Visit } from "@/components/sections/Visit";
import { Footer } from "@/components/sections/Footer";
import { JsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="main">
        <Hero />
        <Origin />
        <Ceremony />
        <Menu />
        <Beans />
        <Reviews />
        <Space />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
