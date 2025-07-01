import { Head } from "@inertiajs/react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import GalleryDivider from "./Components/GalleryDivider";
import Footer from "./Components/Footer";

export default function Cookies() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head title="Cookieverklaring" />
      <Navbar />

      <section className="py-28 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">
            Cookieverklaring
          </h1>
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="font-semibold text-lg">1. Algemeen</h2>
              <p>
                Op de website van Gooische Trimsalon maken wij gebruik van
                cookies. Een cookie is een klein tekstbestand dat bij het bezoek
                aan een website op jouw apparaat wordt geplaatst. Cookies zorgen
                ervoor dat de website naar behoren functioneert en kunnen ook
                worden gebruikt voor analytische doeleinden.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg">
                2. Soorten cookies die wij gebruiken
              </h2>
              <p className="mb-2">
                Wij maken onderscheid tussen noodzakelijke en analytische
                cookies. Tracking cookies van derden kunnen ook aanwezig zijn,
                bijvoorbeeld via ingesloten content.
              </p>

              <h3 className="font-medium mt-4">2.1 Noodzakelijke cookies</h3>
              <p>Deze zijn essentieel voor het functioneren van de site.</p>

              <h3 className="font-medium mt-4">2.2 Analytische cookies</h3>
              <p>
                Deze cookies helpen ons inzicht te krijgen in het gebruik van de
                website.
              </p>

              <h4 className="font-medium mt-2">Google Analytics</h4>
              <p>
                Via Google Analytics verzamelen wij geanonimiseerde gegevens
                over surfgedrag, zoals paginaweergaves en klikgedrag. Deze data
                wordt opgeslagen op servers in de VS. Wij hebben Google geen
                toestemming gegeven om de informatie voor andere diensten te
                gebruiken.
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Cookies: _gat, _gid, _ga
              </p>

              <h4 className="font-medium mt-2">Hotjar</h4>
              <p>
                Wij gebruiken Hotjar om het gedrag van bezoekers te analyseren
                via heatmaps en sessie-opnames. Hiermee verbeteren wij de
                gebruiksvriendelijkheid van onze website. Data wordt max. 365
                dagen bewaard.
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Cookie: _hjIncludedInSample
              </p>

              <h3 className="font-medium mt-4">
                2.3 Tracking cookies van derden
              </h3>
              <p>
                Externe diensten zoals YouTube kunnen tracking cookies plaatsen.
                Wij hebben hier geen invloed op.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg">
                3. Cookies verwijderen of uitschakelen
              </h2>
              <p>
                Je kunt cookies verwijderen of uitschakelen via je
                browserinstellingen. Houd er rekening mee dat sommige onderdelen
                van de website mogelijk niet goed functioneren als je dit doet.
                Meer informatie vind je op de website van de Consumentenbond.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg">4. Wijzigingen</h2>
              <p>
                Wij behouden ons het recht voor deze verklaring te wijzigen.
                Deze versie is voor het laatst bijgewerkt op 25 mei 2018.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg">5. Toepasselijk recht</h2>
              <p>
                Op deze cookieverklaring is het Nederlands recht van toepassing.
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
