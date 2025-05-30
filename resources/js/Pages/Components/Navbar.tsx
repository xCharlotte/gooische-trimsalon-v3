import ApplicationLogo from "@/Components/UI/ApplicationLogo";
import { useState } from "react";
import NavLinkFrontend from "@/Components/Buttons/NavLinkFrontend";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <ApplicationLogo className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
          <h1 className="text-lg md:text-xl lg:text-2xl text-[#3A53A5] font-medium pl-2 md:pl-4">
            Gooische Trimsalon
          </h1>
        </div>

        {/* Hamburger Icon voor Mobiele Versie */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 space-y-2 md:space-y-0 mt-4 md:mt-0`}
        >
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
    </nav>
  );
}
