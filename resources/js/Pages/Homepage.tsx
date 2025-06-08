import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import { Head } from "@inertiajs/react";
import Footer from "./Components/Footer";
import Introduction from "./Components/Introduction";
import Process from "./Components/Process";
import Testimonials from "./Components/Testimonials";
import About from "./Components/About";
import CallToAction from "./Components/CallToAction";
import GalleryDivider from "./Components/GalleryDivider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head title="Home" />
      <Navbar />
      {/* Spacer for fixed navbar height */}
      <div className="h-[66px] lg:h-[96px]"></div>
      <Hero
        title="Laat jouw huisdier stralen"
        subtitle="Plan vandaag nog een afspraak bij Gooische Trimsalon."
        imageUrl="/images/hero-bg.png"
        buttonLink="/afspraak"
        buttonText="Maak een afspraak"
      />
      {/* Content */}
      <main className="flex-grow mt-6">
        <Introduction />
        <Process />
        <Testimonials />
        <About />
        <CallToAction />
        <GalleryDivider />
      </main>
      <Footer />
    </div>
  );
}
