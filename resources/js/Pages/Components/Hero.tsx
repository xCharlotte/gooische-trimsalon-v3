export default function Hero() {
  return (
    <section className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white bg-hero-bg object-cover">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-3xl px-6 md:px-12">
        <h1 className="text-4xl font-bold md:text-6xl mb-4">
          Gooische Trimsalon
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Heeft u ook zo veel last van honden haar in huis? Maak snel een
          afspraak voor een trimbeurt!
        </p>
        <a
          href="#appointment"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
        >
          Maak Afspraak
        </a>
      </div>
    </section>
  );
}
