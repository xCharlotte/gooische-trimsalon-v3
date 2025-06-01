import React from "react";

export default function About() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral.100">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Tekst links */}
        <div>
          <h2 className="text-4xl font-bold text-primary.dark mb-6">
            Over Gooische Trimsalon
          </h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Bij Gooische Trimsalon staan kwaliteit en liefde voor dieren
            centraal. Onze ervaren trimsters zorgen ervoor dat jouw hond of kat
            er niet alleen netjes uitziet, maar zich ook fijn voelt. We nemen de
            tijd om naar jou en je huisdier te luisteren, zodat we altijd het
            beste advies en de beste verzorging kunnen bieden.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Met jarenlange ervaring en veel passie streven we ernaar om van
            iedere trimbeurt een positieve ervaring te maken, zodat jouw trouwe
            vriend altijd met een grote glimlach naar huis gaat.
          </p>
        </div>

        {/* Foto rechts */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="/images/over-ons.jpg"
            alt="Ons team aan het werk in de trimsalon"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
