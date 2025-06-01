import { router } from "@inertiajs/react";

export default function CallToAction() {
  return (
    <section className="bg-black py-12 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        Klaar voor een frisse look voor je huisdier?
      </h2>
      <p className="text-white mb-8 max-w-xl mx-auto">
        Maak vandaag nog een afspraak bij Gooische Trimsalon en geef je trouwe
        vriend de verzorging die hij verdient.
      </p>
      <button
        onClick={() => router.visit("/afspraak")}
        className="inline-block bg-primary hover:bg-primary-light text-white font-semibold py-3 px-8 rounded-full"
      >
        Maak afspraak
      </button>
    </section>
  );
}
