import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import GalleryDivider from "../Components/GalleryDivider";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head title="Contact" />
      <Navbar />
      <Hero
        title="Contact"
        imageUrl="/images/contact-hero.jpg"
        imagePositionClass="lg:bg-[center_bottom_-8rem]"
      />

      <section className="py-8 md:py-14 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Neem contact op
            </h2>
            <p className="text-gray-600 mb-6">
              Heb je vragen over onze trimsalon, een behandeling of iets anders?
              Laat gerust een berichtje achter, dan nemen we zo snel mogelijk
              contact met je op.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>
                <strong>Adres:</strong> Van Linschotenlaan 242, 1212 GA
                Hilversum
              </li>
              <li>
                <strong>Telefoon: </strong>
                <a
                  href="tel:+31623349398"
                  className="hover:underline focus-visible:outline focus:outline-2 focus-visible:outline-primary"
                >
                  +31 6 23349398
                </a>
              </li>
              <li>
                <strong>E-mail: </strong>
                <a
                  href="mailto:info@gooisetrimsalon.nl"
                  className="hover:underline focus-visible:outline focus:outline-2 focus:outline-primary"
                >
                  info@gooischetrimsalon.nl
                </a>
              </li>
            </ul>
            <ul>
              <li className="mt-6">
                <p>
                  <b>BTW-nummer:</b> 88646476B02
                </p>
              </li>
              <li>
                <p>
                  <b>KvK-nummer:</b> 77062965
                </p>
              </li>
            </ul>
          </div>

          <form className="space-y-6 bg-white p-6 rounded-2xl shadow-md">
            {/* hidden input is used to prevent spam bots from submitting the form */}
            <div className="hidden">
              <label htmlFor="company"></label>
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="off"
                tabIndex={-1}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Naam *
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                E-mailadres *
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Telefoonnummer *
              </label>
              <input
                type="tel"
                name="phone"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bericht *
              </label>
              <textarea
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-white bg-primary hover:bg-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Verstuur bericht
              </button>
            </div>
          </form>
        </div>
      </section>

      <GalleryDivider />
      <Footer />
    </div>
  );
}
