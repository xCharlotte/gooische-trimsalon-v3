import ApplicationLogo from "@/Components/UI/ApplicationLogo";
import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
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
          <Link
            href="/"
            className="block text-gray-700 hover:text-[#3A53A5] focus:outline focus:outline-2 focus:outline-[#3A53A5] px-2"
          >
            Home
          </Link>
          <Link
            href="/afspraak"
            className="block text-gray-700 hover:text-[#3A53A5] focus:outline focus:outline-2 focus:outline-[#3A53A5] px-2"
          >
            Afspraak maken
          </Link>
          <Link
            href="/nieuws"
            className="block text-gray-700 hover:text-[#3A53A5] focus:outline focus:outline-2 focus:outline-[#3A53A5] px-2"
          >
            Nieuws
          </Link>
          <Link
            href="/tarieven"
            className="block text-gray-700 hover:text-[#3A53A5] focus:outline focus:outline-2 focus:outline-[#3A53A5] px-2"
          >
            Tarieven
          </Link>
          <Link
            href="/contact"
            className="block text-gray-700 hover:text-[#3A53A5] font-semibold focus:outline focus:outline-2 focus:outline-[#3A53A5] px-2"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
