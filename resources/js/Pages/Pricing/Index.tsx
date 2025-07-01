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
        imagePositionClass="lg:bg-[center_top_-20rem]"
      />

      <section className="py-8 md:py-14 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Tarieven Katten</h2>
            <p className="italic mb-4">(m.i.v. juni 2024)</p>
            <p className="mb-4">
              Voor katten werken we met <strong>vaste prijzen</strong>.
            </p>
            <p className="mb-4">
              Kittens zijn tot en met een leeftijd van <strong>16 weken</strong>{" "}
              welkom voor een <strong>gratis kennismaking</strong> met de
              trimsalon. Dit is heel goed voor de socialisatieperiode.
            </p>

            <h3 className="font-semibold mt-6">Langharen</h3>
            <p className="mb-2">
              Plukken / Ontwollen / Scheren – <strong>€ 50,00</strong>
            </p>

            <h3 className="font-semibold mt-6">Kortharen</h3>
            <p className="mb-2">
              Trimmen – <strong>€ 40,00</strong>
            </p>

            <h3 className="font-semibold mt-6">Vervilting bij katten</h3>
            <p className="mb-2">
              De eerste keer dat u uw kat vervilt bij ons aanbiedt zal deze van
              het vilt worden verlost tegen het{" "}
              <strong>reguliere tarief</strong> (zie hierboven), ongeacht het
              aantal benodigde sessies. U krijgt daarbij ook{" "}
              <strong>gratis vachtverzorgingsadvies</strong>.
            </p>
            <p className="mb-2">
              Iedere volgende keer dat u uw kat vervilt aanbiedt, geldt er een{" "}
              <strong>toeslag van minimaal 50%</strong> boven op de reguliere
              prijs. Iedere benodigde sessie wordt dan{" "}
              <strong>apart in rekening gebracht</strong>. De exacte hoogte van
              de toeslag is afhankelijk van de ernst van de vervilting.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Tarieven Honden</h2>
            <p className="italic mb-4">(m.i.v. juni 2024)</p>

            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>
                Meerprijs bij klitten / niet verzorgde vachten:{" "}
                <strong>€ 20,- p.u.</strong>
              </li>
              <li>
                Meerprijs bij gedragsproblemen: <strong>€ 20,- p.u.</strong>
              </li>
              <li>
                Meerprijs bij vlooien: <strong>€ 10,-</strong>
              </li>
            </ul>

            <p className="mb-4">
              Puppies tot en met <strong>16 weken</strong> zijn welkom voor een{" "}
              <strong>kennismaking</strong> met de trimsalon. De prijs voor een
              puppybehandeling is <strong>€ 45,-</strong>.
            </p>

            <p className="mb-4">
              Het <strong>standaard uurtarief</strong> voor honden is{" "}
              <strong>€ 45,00 per uur</strong>, en geldt alleen voor goed
              onderhouden vachten.
            </p>

            <p className="mb-4">
              We werken met <strong>vanaf-prijzen</strong> om u zoveel mogelijk
              duidelijkheid te geven. Onderstaand overzicht is niet uitputtend
              en wordt regelmatig aangevuld.
            </p>

            <p className="mb-4 font-semibold">
              Voor honden met een plukvacht en honden boven de 30 KG geldt een
              klantenstop.
            </p>

            <p className="mb-4">
              <strong>Let op:</strong> telefonische prijsafspraken zijn{" "}
              <u>niet bindend</u>. Zonder de hond gezien te hebben, kunnen we
              alleen een indicatie geven.
            </p>

            <h3 className="font-semibold mt-6">Gebitsbehandeling</h3>
            <p className="mb-2">
              v.a. <strong>€ 45,-</strong>
            </p>

            <h3 className="font-semibold mt-6">Ruibehandeling</h3>
            <ul className="list-disc ml-6 space-y-1 mb-4">
              <li>
                Kleine hond (schofthoogte tot 30 cm): <strong>€ 70,-</strong>
              </li>
              <li>
                Middelgrote hond (30 – 50 cm): <strong>€ 80,-</strong>
              </li>
              <li>
                Grote hond (50 – 60 cm): <strong>€ 90,-</strong>
              </li>
              <li>
                Vanaf 60 cm: <strong>€ 100,-</strong>
              </li>
            </ul>

            <h3 className="font-semibold mt-6">Voorbeeldprijzen per ras</h3>
            <ul className="space-y-1 mb-4">
              <li>
                Chihuahua, korthaar – <strong>€ 50,00</strong>
              </li>
              <li>
                Chihuahua, langhaar – <strong>€ 60,00</strong>
              </li>
              <li>
                Jack Russel, gladhaar – <strong>€ 60,00</strong>
              </li>
              <li>
                Jack Russel, ruwhaar / broken coat – <strong>€ 70,00</strong>
              </li>
              <li>
                Shih tzu, Maltezer – <strong>€ 65,00</strong>
              </li>
              <li>
                Teckel, kaninchen/dwerg – <strong>€ 65,00</strong>
              </li>
              <li>
                Teckel, standaard – <strong>€ 60,00</strong>
              </li>
              <li>
                Rassen klein / midden / groot –{" "}
                <strong>€ 65,00 / 75,00 / 85,00</strong>
              </li>
              <li>
                Doodles, mini (tot 30 cm) – <strong>€ 75,00</strong>
              </li>
              <li>
                Doodles, medium (30–50 cm) – <strong>€ 85,00</strong>
              </li>
              <li>
                Doodles, groot (50–60 cm) – <strong>€ 95,00</strong>
              </li>
              <li>
                Doodles (hoger dan 60 cm) – <strong>€ 110,00</strong>
              </li>
              <li>
                Yorkshire Terriër – <strong>€ 65,00</strong>
              </li>
              <li>
                Cavalier King Charles Spaniël – <strong>€ 75,00</strong>
              </li>
              <li>
                Poedels & andere krullenbollen – <em>(zie Doodles)</em>
              </li>
              <li>
                Tibetaanse Terriër – <strong>€ 80,00</strong>
              </li>
            </ul>

            <h3 className="font-semibold mt-6">
              Wassen honden (exclusief ruibehandeling)
            </h3>
            <ul className="space-y-1 mb-2">
              <li>
                Korthaar klein / middel / groot –{" "}
                <strong>€ 32,55 / 42,55 / 52,55</strong>
              </li>
              <li>
                Langhaar klein / middel / groot –{" "}
                <strong>€ 37,55 / 47,55 / 57,55</strong>
              </li>
            </ul>

            <p className="text-sm italic">
              NB: Ieder jaar worden de prijzen aangepast.
            </p>
          </div>
        </div>
      </section>

      <GalleryDivider />
      <Footer />
    </div>
  );
}
