import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import GalleryDivider from "../Components/GalleryDivider";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head title="Contact" />
      <Navbar />
      <Hero
        title="Contact"
        imageUrl="images/contact-hero.jpg"
        imagePositionClass="lg:bg-[center_bottom_-8rem]"
      />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Contact</h1>
        <p>Hier komt het contact overzicht...</p>
      </div>
      <GalleryDivider />
      <Footer />
    </div>
  );
}
