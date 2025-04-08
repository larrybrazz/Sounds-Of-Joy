import { Navbar } from "@/components/navbar";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { About } from "@/components/about";
import { Schedule } from "@/components/schedule";
import { Speakers } from "@/components/speakers";
import { Gallery } from "@/components/gallery";
import { Contact } from "@/components/contact";
import { Hotel } from "@/components/hotel";
import { LiveChat } from "@/components/chat";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlideshow />
      <Speakers />
      <Gallery />
      <Schedule />
      <About />
      <Contact />
      <Hotel />
      <LiveChat />
      <Footer />
    </>
  );
}
