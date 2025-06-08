import React from "react";

export default function About() {
  return (
    <section className="py-8 md:py-14 lg:py-28 px-4 sm:px-6 lg:px-8 bg-neutral-100">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Tekst links */}
        <div>
          <p className="uppercase text-xs font-bold">Over ons</p>
          <h2 className="text-4xl font-bold text-primary.dark mb-6">
            Over Gooische Trimsalon
          </h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Mijn naam is Marja en eigenaresse van de Gooische Trimsalon te
            Hilversum. Sinds 2006 werk ik in de dierenbranche, sinds 2012 als
            trimster. In 2007 behaalde ik mijn diploma homeophatie voor dieren,
            in 2012 mijn trim diploma. In het bijzonder heb ik me al die jaren
            verdiept in voeding voor honden en katten. Het is een voorrecht om
            met dieren, hier uit Hilversum en daarbuiten, te mogen werken. Ik
            heb ervaring met verschillende soorten rassen en vachten.
            <br />
            <br />
            Als homeophatisch therapeut heb ik ook veel met probleem vachten
            (huidklachten) te maken. Ook getraumatiseerde honden zijn van harte
            welkom. <br /> <br />
            Gooische Trimsalon in Hilversum richt zich ook op natuurlijke
            producten voor honden en katten. Onder andere shampoos en
            conditioners kunnen in de trimsalon gekocht worden.
          </p>
        </div>

        {/* Foto rechts */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="/images/trimsalon.jpg"
            alt="Ons team aan het werk in de trimsalon"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
