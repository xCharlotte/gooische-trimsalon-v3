import { FaQuoteLeft } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  text: string;
  avatarUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sanne",
    text: "De beste trimsalon in Hilversum! Mijn hond is altijd weer zo blij na een bezoek.",
    avatarUrl: "/images/testimonials/sanne.jpg",
  },
  {
    id: 2,
    name: "Jeroen",
    text: "Professioneel en vriendelijk. Ik kan ze zeker aanraden!",
    avatarUrl: "/images/testimonials/jeroen.jpg",
  },
  {
    id: 3,
    name: "Marijke",
    text: "Altijd netjes en zorgzaam. Mijn kat wordt er ook goed geholpen.",
    avatarUrl: "/images/testimonials/marijke.jpg",
  },
  {
    id: 4,
    name: "Tom",
    text: "Perfecte service en een fijne sfeer. Mijn hond voelt zich er thuis.",
    avatarUrl: "/images/testimonials/tom.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-tertiary-light py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Wat onze klanten zeggen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map(({ id, name, text, avatarUrl }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <FaQuoteLeft className="text-secondary text-3xl mb-4" />
              <p className="text-neutral-700 mb-4 flex-grow">{text}</p>
              {avatarUrl && (
                <img
                  src={avatarUrl}
                  alt={`Foto van ${name}`}
                  className="w-16 h-16 rounded-full object-cover mb-2"
                />
              )}
              <p className="text-primary-dark font-semibold">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
