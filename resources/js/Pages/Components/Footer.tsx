import { Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/UI/ApplicationLogo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo en Adres */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <ApplicationLogo className="w-auto h-16 text-white" />
            </Link>
            <p className="text-sm leading-relaxed">
              Gooische Trimsalon
              <br />
              Hoofdstraat 123
              <br />
              1234 AB Plaatsnaam
              <br />
              Nederland
            </p>
            <p className="mt-2 text-sm">
              Telefoon:{" "}
              <a href="tel:+31612345678" className="hover:text-white">
                +31 6 12345678
              </a>
              <br />
              E-mail:{" "}
              <a
                href="mailto:info@gooisetrimsalon.nl"
                className="hover:text-white"
              >
                info@gooisetrimsalon.nl
              </a>
            </p>
          </div>

          {/* Laatste Nieuwsberichten */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Laatste Nieuws
            </h2>
            <ul className="text-sm space-y-3">
              <li>
                <a href="#" className="hover:text-white">
                  Nieuwe openingstijden vanaf volgende maand
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Hoe u uw hond thuis kunt verzorgen
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Tips voor de winterverzorging van uw huisdier
                </a>
              </li>
            </ul>
          </div>

          {/* Openingstijden */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Openingstijden
            </h2>
            <ul className="text-sm space-y-2">
              <li>Maandag - Vrijdag: 09:00 - 18:00</li>
              <li>Zaterdag: 10:00 - 16:00</li>
              <li>Zondag: Gesloten</li>
            </ul>
          </div>

          {/* Sociale Media */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Volg ons</h2>
            <p className="text-sm">Volg ons voor de laatste updates:</p>
            <div className="mt-4 flex space-x-3">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © 2024 Gooische Trimsalon. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}
