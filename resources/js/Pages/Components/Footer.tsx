import { Link } from "@inertiajs/react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100 text-gray-700 py-10 mt-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          {/* Contactgegevens */}
          <div>
            <h2 className="font-bold text-lg mb-4">Gooische Trimsalon</h2>
            <p>Van Linschotenlaan 242</p>
            <p>1212 GA Hilversum</p>
            <p className="mt-2">
              <a
                href="tel:+31623349398"
                className="hover:underline focus:outline focus:outline-2 focus:outline-[#3A53A5]"
              >
                +31 6 23349398
              </a>
            </p>
            <p>
              <a
                href="mailto:info@gooisetrimsalon.nl"
                className="hover:underline focus:outline focus:outline-2 focus:outline-[#3A53A5]"
              >
                info@gooischetrimsalon.nl
              </a>
            </p>
            <div className="mt-10 text-sm text-gray-600">
              <p>BTW-nummer: 88646476B02</p>
              <p>KvK-nummer: 77062965</p>
            </div>
          </div>

          {/* Nieuws */}
          <div>
            <h2 className="font-bold text-lg mb-4">Laatste Nieuws</h2>
            <ul className="space-y-2">
              <li>Nieuwe openingstijden vanaf volgende maand</li>
              <li>Hoe u uw hond thuis kunt verzorgen</li>
              <li>Tips voor de winterverzorging van uw huisdier</li>
            </ul>
          </div>

          {/* Openingstijden */}
          <div>
            <h2 className="font-bold text-lg mb-4">Openingstijden</h2>
            <ul className="space-y-2">
              <li>Maandag - Vrijdag: 09:00 - 18:00</li>
              <li>Zaterdag: 10:00 - 16:00</li>
              <li>Zondag: Gesloten</li>
            </ul>
          </div>

          {/* Social media */}
          <div>
            <h2 className="font-bold text-lg mb-4">Volg ons</h2>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-[#3A53A5]"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-[#3A53A5]"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#3A53A5] text-white py-4 text-center text-sm">
        © 2024 Gooische Trimsalon. Alle rechten voorbehouden.
      </div>
    </>
  );
}
