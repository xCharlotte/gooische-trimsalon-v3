import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import GalleryDivider from "../Components/GalleryDivider";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head title="Tarieven" />
      <Navbar />
      <Hero
        title="Tarieven"
        imageUrl="images/pricing-hero.jpg"
        imagePositionClass="lg:bg-[center_top_-22rem]"
      />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Prijzen</h1>
        <p>Hier komen de prijzen...</p>
      </div>
      <GalleryDivider />
      <Footer />
    </div>
  );
}
