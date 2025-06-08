import { FaDog, FaBath, FaSmile } from "react-icons/fa";

const steps = [
  {
    title: "Kennismaking & Intake",
    description:
      "We bespreken de wensen, het ras en de vacht van je hond. Zo zorgen we voor een veilige en persoonlijke aanpak.",
    icon: <FaDog className="text-secondary text-3xl" />,
  },
  {
    title: "Behandeling op maat",
    description:
      "Van wassen tot knippen of scheren – alles afgestemd op het ras, het seizoen en jouw voorkeuren.",
    icon: <FaBath className="text-secondary text-3xl" />,
  },
  {
    title: "Happy hond mee naar huis",
    description:
      "Je hond ziet er weer stralend uit en voelt zich fris en comfortabel. Klaar om te pronken in 't Gooi",
    icon: <FaSmile className="text-secondary text-3xl" />,
  },
];

export default function Process() {
  return (
    // NOTE: No padding top top needed here to make it belong to the introduction section
    <section className="pb-8 md:pb-14 lg:pb-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Onze werkwijze</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                {step.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
