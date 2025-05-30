import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head title="Nieuws" />
      <Navbar />
      <Hero />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Nieuws</h1>
        <p>Hier komt het nieuws...</p>
      </div>
      <Footer />
    </div>
  );
}
