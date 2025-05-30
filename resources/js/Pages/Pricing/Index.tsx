import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head title="Tarieven" />
      <Navbar />
      <Hero />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Prijzen</h1>
        <p>Hier komen de prijzen...</p>
      </div>
      <Footer />
    </div>
  );
}
