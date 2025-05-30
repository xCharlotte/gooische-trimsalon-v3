import { Link } from "@inertiajs/react";

export type HeroProps = {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  buttonText?: string;
  buttonLink?: string;
};

export default function Hero({
  title,
  subtitle,
  imageUrl,
  buttonText,
  buttonLink,
}: HeroProps) {
  return (
    <section
      className="h-[60vh] relative bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative max-w-5xl w-full mx-auto px-4">
        <div className="w-full md:w-1/2 lg:w-1/2 text-left text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
            {title}
          </h1>
          <p className="mb-8 text-lg md:text-xl drop-shadow-md">{subtitle}</p>
          {buttonText && (
            <Link
              href={buttonLink || "/"}
              className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
