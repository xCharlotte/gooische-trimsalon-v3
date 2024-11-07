import ApplicationLogo from "@/Components/UI/ApplicationLogo";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <ApplicationLogo className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
          <h1 className="text-lg md:text-xl lg:text-2xl text-white font-medium pl-2 md:pl-4">
            Gooische Trimsalon
          </h1>
        </div>

        {/* Hamburger Icon voor Mobiele Versie */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 text-white"
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
          } md:flex md:items-center md:space-x-2 lg:space-x-6`}
        >
          <a
            href="#"
            className="block py-2 px-4 text-white hover:bg-blue-700 rounded"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-white hover:bg-blue-700 rounded"
          >
            Afspraak maken
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-white hover:bg-blue-700 rounded"
          >
            Nieuws
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-white hover:bg-blue-700 rounded"
          >
            Tarieven
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-white hover:bg-blue-700 rounded"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
