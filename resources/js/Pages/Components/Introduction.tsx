import { PawPrint, Scissors, Sparkles } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="py-8 md:py-14 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Welkom bij
            <br />
            <span className="whitespace-nowrap text-4xl text-tertiary">
              Gooische Trimsalon
            </span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Bij Gooische Trimsalon draait alles om rust, liefde en aandacht voor
            jouw huisdier. Of je nu een speelse pup hebt of een chille senior
            kat — wij zorgen dat ze er stralend en verzorgd uitzien. Met
            natuurlijke producten, een kalme sfeer en jarenlange ervaring voel
            je meteen: hier zit het goed.
          </p>

          <div className="flex flex-col space-y-4 text-sm text-gray-700">
            <div className="flex flex-row gap-2">
              <Sparkles className="text-secondary" />
              Professionele verzorging op maat
            </div>
            <div className="flex flex-row gap-2">
              <PawPrint className="text-secondary" />
              Rustige, diervriendelijke aanpak
            </div>
            <div className="flex flex-row gap-2">
              <Scissors className="text-secondary" />
              Strak geknipt, fris naar huis
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src="images/owner.jpg"
            alt="Grooming in progress"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
