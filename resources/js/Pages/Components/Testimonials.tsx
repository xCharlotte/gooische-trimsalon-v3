import { FaQuoteLeft } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  breed: string;
  text: string;
  avatarUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Miep",
    breed: "Cavalier King Charles x Chichuahua",
    text: "Miep zat onder de klitten en Marja heeft goed werk afgeleverd. Ze zag er weer prachtig uit en haar vacht hebben wij wat korter laten scheren ivm de hitte deze zomer.",
    avatarUrl: "/images/testimonials/miep.jpg",
  },
  {
    id: 2,
    name: "Droppie",
    breed: "Maltezer",
    text: "Droppie, werd door Marja altijd liefdevol en geduldig behandeld, ondanks zijn trauma’s. Hij kwam steeds ontspannen en blij terug.",
    avatarUrl: "/images/testimonials/droppie.jpg",
  },
  {
    id: 3,
    name: "Bobby",
    breed: "Noorse Boskat",
    text: "Altijd netjes en zorgzaam. Mijn kat wordt er ook goed geholpen. We zijn heel blij met de trimsalon.",
    avatarUrl: "/images/testimonials/forest-cat.jpg",
  },
  {
    id: 4,
    name: "Fender",
    breed: "Komondor",
    text: "Perfecte service en een fijne sfeer. Mijn hond voelt zich er thuis. Marja is een echte professional en weet precies wat mijn hond nodig heeft.",
    avatarUrl: "/images/testimonials/groom-dog.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-brown-default py-8 md:py-14 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase text-xs font-bold text-center">Klantreview</p>
        <h2 className="text-2xl lg:text-4xl font-bold mb-12 text-center">
          Wat onze klanten zeggen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {testimonials.map(({ id, name, breed, text, avatarUrl }) => (
            <div
              key={id}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col"
            >
              <p className="text-neutral-700 mb-4 text-sm flex-grow">{text}</p>
              <div className="flex items-center gap-4">
                {avatarUrl && (
                  <img
                    src={avatarUrl}
                    alt={`Foto van ${name}`}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}
                <div className="text-left">
                  <p className="text-primary-dark font-semibold">{name}</p>
                  <p className="text-neutral-500 text-sm">{breed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
