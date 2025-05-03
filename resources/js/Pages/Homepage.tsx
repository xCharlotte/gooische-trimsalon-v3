import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import { Head } from "@inertiajs/react";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head title="Home" />
      <Navbar />
      <Hero />

      {/* Content */}
      <main className="flex-grow container mx-auto p-6">
        {/* Hier komt later jouw content... */}
      </main>

      <Footer />
    </div>
  );
}
