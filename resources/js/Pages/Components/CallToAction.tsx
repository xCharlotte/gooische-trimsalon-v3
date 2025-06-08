import { Link, router } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="max-w-7xl mx-auto rounded-xl bg-tertiary my-8 md:my-14 lg:my-28 py-12 px-28">
      <div className="flex flex-row justify-evenly space-x-32">
        <div className="">
          <h2 className="text-3xl font-bold text-white mb-4">
            Klaar voor een frisse look voor je huisdier?
          </h2>
        </div>
        <div className="flex flex-col">
          <p className="text-white mb-8">
            Maak vandaag nog een afspraak bij Gooische Trimsalon en geef je
            trouwe vriend de verzorging die hij verdient.
          </p>
          <Link
            href="/afspraak"
            className="self-start flex flex-row items-center border border-1 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            Maak een afspraak
            <ChevronRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
