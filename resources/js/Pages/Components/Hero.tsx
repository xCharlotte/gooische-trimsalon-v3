import { Link } from "@inertiajs/react";

export default function Hero() {
  return (
    <section
      className="h-[60vh] relative bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative container mx-auto px-4">
        <div className="w-full md:w-1/2 lg:w-1/2 text-left text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
            Laat jouw huisdier stralen!
          </h1>
          <p className="mb-8 text-lg md:text-xl drop-shadow-md">
            Plan vandaag nog een afspraak bij Gooische Trimsalon.
          </p>
          <Link
            href="/afspraak"
            className="inline-block bg-[#3A53A5] hover:bg-[#2c3e90] text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
          >
            Maak een afspraak
          </Link>
        </div>
      </div>
    </section>
  );
}
