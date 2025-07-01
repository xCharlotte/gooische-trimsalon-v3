import { Head } from "@inertiajs/react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import GalleryDivider from "./Components/GalleryDivider";
import Footer from "./Components/Footer";

export default function PrivacyStatement() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head title="Privacyverklaring" />
      <Navbar />

      <section className="py-28 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">
            Privacyverklaring
          </h1>
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="font-semibold text-lg">1. Inleiding</h2>
              <p>
                Bij Gooische Trimsalon hechten wij veel waarde aan jouw privacy
                en de bescherming van je persoonsgegevens. In deze
                privacyverklaring leggen wij uit welke gegevens wij verzamelen,
                waarom wij dat doen en wat jouw rechten zijn.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg">
                2. Welke gegevens verzamelen wij?
              </h2>
              <p>
                Wanneer je een afspraak maakt via onze website of op een andere
                manier contact met ons opneemt, verwerken wij de volgende
                persoonsgegevens:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>Naam</li>
                <li>E-mailadres</li>
                <li>Telefoonnummer</li>
                <li>Adres (indien van toepassing)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-lg">
                3. Waarom verwerken wij deze gegevens?
              </h2>
              <p>
                Wij gebruiken jouw gegevens uitsluitend voor de volgende
                doeleinden:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>Het beheren van afspraken</li>
                <li>Het versturen van bevestigingen en herinneringen</li>
                <li>Communicatie over wijzigingen of no-shows</li>
                <li>Het versturen van betalingsherinneringen (indien nodig)</li>
                <li>Klantgeschiedenis raadplegen bij terugkerende afspraken</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-lg">
                4. Hoe lang bewaren wij jouw gegevens?
              </h2>
              <p>
                Jouw gegevens worden maximaal 1 jaar bewaard na je laatste
                afspraak. Dit doen wij zodat wij jou beter van dienst kunnen
                zijn bij toekomstige afspraken en voor het geval wij contact met
                je moeten opnemen over openstaande betalingen of gemiste
                afspraken.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg">
                5. Delen wij jouw gegevens met derden?
              </h2>
              <p>
                Nee. Wij delen jouw gegevens niet met derden, tenzij dit
                wettelijk verplicht is (bijvoorbeeld bij fraude of een
                gerechtelijk bevel).
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg">6. Beveiliging</h2>
              <p>
                Wij nemen passende technische en organisatorische maatregelen om
                je gegevens te beschermen tegen verlies, misbruik of onbevoegde
                toegang.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg">7. Jouw rechten</h2>
              <p>
                Je hebt het recht om jouw persoonsgegevens in te zien, te
                corrigeren of te laten verwijderen. Ook kun je bezwaar maken
                tegen het gebruik van jouw gegevens of verzoeken om
                gegevensoverdraagbaarheid. Neem hiervoor contact met ons op via
                het contactformulier op de website.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg">
                8. Wijzigingen in deze privacyverklaring
              </h2>
              <p>
                Wij behouden ons het recht voor om deze privacyverklaring aan te
                passen. De meest recente versie is altijd terug te vinden op
                onze website. Deze verklaring is voor het laatst bijgewerkt op
                29 juni 2025.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg">9. Vragen of klachten</h2>
              <p>
                Heb je vragen over deze privacyverklaring of wil je gebruik
                maken van je rechten? Neem dan contact met ons op. Kom je er met
                ons niet uit, dan kun je een klacht indienen bij de Autoriteit
                Persoonsgegevens.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GalleryDivider />
      <Footer />
    </div>
  );
}
