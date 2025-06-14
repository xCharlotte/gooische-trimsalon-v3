import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import GalleryDivider from "../Components/GalleryDivider";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head title="Nieuws" />
      <Navbar />
      <Hero
        title="Nieuwsberichten"
        imageUrl="images/news-hero.jpg"
        imagePositionClass="lg:bg-[center_top_-16rem]"
      />
      <section className="py-8 md:py-14 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <p>Hier komt het nieuws...</p>
        </div>
      </section>
      <GalleryDivider />
      <Footer />
    </div>
  );
}
