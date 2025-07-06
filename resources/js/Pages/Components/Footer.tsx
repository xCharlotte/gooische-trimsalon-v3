import { Link } from "@inertiajs/react";
import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="text-gray-700 px-6 py-10 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3 text-sm">
          {/* Contact & socials */}
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-2">
              <h2 className="font-semibold text-base">Gooische Trimsalon</h2>
              <div className="flex flex-col space-y-5">
                <div className="flex flex-col">
                  <p className="hover:underline">
                    <Mail className="inline mr-1 w-3 h-3" />
                    <a
                      href="mailto:info@gooisetrimsalon.nl"
                      className="focus-visible:outline focus:outline-2 focus:outline-primary"
                    >
                      info@gooischetrimsalon.nl
                    </a>
                  </p>
                  <p className="mt-2 hover:underline">
                    <Phone className="inline mr-1 w-3 h-3" />
                    <a
                      href="tel:+31623349398"
                      className="focus-visible:outline focus:outline-2 focus-visible:outline-primary"
                    >
                      +31 6 23349398
                    </a>
                  </p>
                </div>
                <div className="mt-6 text-sm text-gray-600 space-y-1">
                  <p>BTW-nummer: 88646476B02</p>
                  <p>KvK-nummer: 77062965</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex space-x-4 text-xl text-gray-600">
              <a
                href="https://www.facebook.com/gooischvoedingscentrum"
                aria-label="Facebook"
                target="_blank"
                className="hover:text-primary transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/gooischetrimsalon"
                aria-label="Instagram"
                target="_blank"
                className="hover:text-primary transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* News */}
          <div>
            <h2 className="font-semibold text-base mb-3">Laatste Nieuws</h2>
            <ul className="space-y-2">
              <li>Nieuwe openingstijden vanaf volgende maand</li>
              <li>Hoe u uw hond thuis kunt verzorgen</li>
              <li>Tips voor de winterverzorging van uw huisdier</li>
            </ul>
          </div>

          {/* Opening hours */}
          <div>
            <h2 className="font-semibold text-base mb-3">Openingstijden</h2>
            <ul className="space-y-2">
              <li>Maandag: Gesloten</li>
              <li>Dinsdag t/m zaterdag: 10:00 - 12:00 / 19:00 - 20:00</li>
              <li>Zondag: Gesloten</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* All rights reserver and terms & condition links */}
      <div className="border-t border-gray-200 text-sm text-gray-600 px-6 md:px-12 lg:px-24 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between md:items-center gap-2 md:gap-0">
          <div>
            © {new Date().getFullYear()} Gooische Trimsalon. Alle rechten
            voorbehouden.
          </div>
          <div className="flex space-x-4">
            <Link
              href="/algemene-voorwaarden"
              className="hover:underline hover:text-primary transition"
            >
              Algemene voorwaarden
            </Link>
            <Link
              href="/privacyverklaring"
              className="hover:underline hover:text-primary transition"
            >
              Privacy verklaring
            </Link>
            <Link
              href="/cookies"
              className="hover:underline hover:text-primary transition"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
