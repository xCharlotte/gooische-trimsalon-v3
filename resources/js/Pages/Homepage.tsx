import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import { Head } from "@inertiajs/react";

export default function () {
  return (
    <>
      <Head title="Home" />
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}
