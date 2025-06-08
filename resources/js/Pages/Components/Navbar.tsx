import ApplicationLogo from "@/Components/UI/ApplicationLogo";
import { useState } from "react";
import NavLinkFrontend from "@/Components/Buttons/NavLinkFrontend";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center">
        {/* Logo + Naam */}
        <div className="flex items-center">
          <ApplicationLogo className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
          <h1 className="text-lg md:text-xl lg:text-2xl text-[#3A53A5] font-medium pl-2 md:pl-4">
            Gooische Trimsalon
          </h1>
        </div>

        {/* Hamburger icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <svg
              className="w-6 h-6 text-[#3A53A5]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <NavLinkFrontend href="/" componentName="Homepage">
            Home
          </NavLinkFrontend>
          <NavLinkFrontend href="/afspraak" componentName="Appointment/Index">
            Afspraak maken
          </NavLinkFrontend>
          <NavLinkFrontend href="/nieuws" componentName="Blog/Index">
            Nieuws
          </NavLinkFrontend>
          <NavLinkFrontend href="/tarieven" componentName="Pricing/Index">
            Tarieven
          </NavLinkFrontend>
          <NavLinkFrontend href="/contact" componentName="Contact/Index">
            Contact
          </NavLinkFrontend>
        </div>
      </div>

      {/* Mobiel overlay + menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-end">
          <div className="w-4/5 max-w-xs bg-white h-full shadow-lg px-6 py-6 flex flex-col gap-6 animate-slide-in-right">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-[#3A53A5]">
                Gooische Trimsalon
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl text-gray-500"
              >
                &times;
              </button>
            </div>

            <nav className="flex flex-col space-y-4 text-base text-gray-700">
              <NavLinkFrontend
                href="/"
                onClick={() => setIsOpen(false)}
                componentName="Homepage"
              >
                Home
              </NavLinkFrontend>
              <NavLinkFrontend
                href="/afspraak"
                onClick={() => setIsOpen(false)}
                componentName="Appointment/Index"
              >
                Afspraak maken
              </NavLinkFrontend>
              <NavLinkFrontend
                href="/nieuws"
                onClick={() => setIsOpen(false)}
                componentName="Blog/Index"
              >
                Nieuws
              </NavLinkFrontend>
              <NavLinkFrontend
                href="/tarieven"
                onClick={() => setIsOpen(false)}
                componentName="Pricing/Index"
              >
                Tarieven
              </NavLinkFrontend>
              <NavLinkFrontend
                href="/contact"
                onClick={() => setIsOpen(false)}
                componentName="Contact/Index"
              >
                Contact
              </NavLinkFrontend>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}
