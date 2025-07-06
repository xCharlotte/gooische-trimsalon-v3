import { Head } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

export default function TermsAndConditions() {
  return (
    <>
      <Head title="Algemene voorwaarden" />
      <AppLayout>
        <section className="pt-8 pb-12 lg:pt-20 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-xl lg:text-3xl font-bold mb-8 text-gray-800">
              Algemene voorwaarden
            </h1>
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div>
                <h2 className="font-semibold text-lg">1. Toepasselijkheid</h2>
                <p>
                  Deze algemene voorwaarden zijn van toepassing op alle
                  diensten, offertes en overeenkomsten van Gooische Trimsalon.
                  Afwijkingen zijn alleen geldig als deze schriftelijk zijn
                  overeengekomen. Bij tegenstrijdige voorwaarden prevaleren deze
                  voorwaarden boven die van de klant.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">
                  2. Offertes en prijzen
                </h2>
                <p>
                  Offertes en prijsopgaven zijn vrijblijvend en gebaseerd op de
                  prijzen op het moment van uitbrengen. Eventuele extra
                  werkzaamheden die niet in de offerte zijn opgenomen, worden
                  apart in rekening gebracht. Als kosten stijgen binnen 4
                  maanden na het sluiten van de overeenkomst, mag de klant
                  kosteloos annuleren.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">3. Overeenkomst</h2>
                <p>
                  Een overeenkomst komt tot stand zodra een afspraak mondeling
                  of schriftelijk is bevestigd. Vanaf dat moment is deze
                  bindend.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">4. Dienstverlening</h2>
                <p>
                  De dienstverlening vindt plaats in de trimsalon op het
                  afgesproken tijdstip. De klant is verantwoordelijk voor het
                  brengen en ophalen van het dier. De trimsalon mag een afspraak
                  weigeren als er twijfels zijn over de betalingscapaciteit van
                  de klant.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">5. Overmacht</h2>
                <p>
                  In geval van overmacht (bijvoorbeeld ziekte, uitval van
                  apparatuur, leveringsproblemen) wordt de uitvoering van de
                  dienst uitgesteld. Duurt dit langer dan 21 dagen, dan mogen
                  beide partijen de overeenkomst ontbinden. Reeds geleverde
                  diensten worden wel gefactureerd.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">6. Aansprakelijkheid</h2>
                <p>
                  Gooische Trimsalon is niet aansprakelijk voor indirecte schade
                  of gevolgschade. Bij schade aan het dier is de
                  aansprakelijkheid beperkt tot de kosten van noodzakelijke
                  veterinaire zorg, met een maximum gelijk aan de aanschafwaarde
                  van het dier. Schade dient aantoonbaar en direct gevolg te
                  zijn van nalatig handelen.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">7. Garantie</h2>
                <p>
                  Indien een behandeling ondeugdelijk is uitgevoerd, wordt deze
                  kosteloos hersteld. Dit geldt alleen als de klacht binnen 24
                  uur na de behandeling is gemeld.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">
                  8. Klachten en terugbetaling
                </h2>
                <p>
                  Klachten moeten persoonlijk worden gemeld binnen 24 uur na de
                  behandeling. Het dier moet binnen die termijn worden
                  teruggebracht voor inspectie. Alleen in dat geval kan worden
                  gekeken naar compensatie of kosteloos herstel.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">9. Betaling</h2>
                <p>
                  Betaling dient direct na afloop van de behandeling contant of
                  via pin te worden voldaan, tenzij anders is overeengekomen.
                  Niet of te laat geannuleerde afspraken worden als volgt in
                  rekening gebracht:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Gratis bij annulering 48 uur of langer vooraf</li>
                  <li>50% bij annulering tussen 24 en 48 uur vooraf</li>
                  <li>100% bij annulering binnen 24 uur</li>
                </ul>
                <p className="mt-2">
                  Bij te late betaling wordt 2% rente per maand gerekend. Na één
                  herinnering en één aanmaning volgen incassokosten van 15% van
                  het openstaande bedrag met een minimum van €30.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">10. Geschillen</h2>
                <p>
                  Op alle overeenkomsten is Nederlands recht van toepassing.
                  Geschillen worden voorgelegd aan de bevoegde rechter in het
                  arrondissement van de trimsalon.
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-lg">11. Persoonsgegevens</h2>
                <p>
                  Voor de uitvoering van onze dienstverlening verwerken wij
                  persoonsgegevens van klanten. Hoe wij met deze gegevens
                  omgaan, staat beschreven in onze{" "}
                  <a
                    href="/privacyverklaring"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    privacyverklaring
                  </a>
                  . Door gebruik te maken van onze diensten, gaat u akkoord met
                  deze verwerking.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AppLayout>
    </>
  );
}
