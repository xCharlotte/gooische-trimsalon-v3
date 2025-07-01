import Navbar from "@/Pages/Components/Navbar";
import Footer from "@/Pages/Components/Footer";
import Hero from "@/Pages/Components/Hero";
import { Head } from "@inertiajs/react";
import StepForm from "@/Pages/Appointment/StepForm/StepForm";
import GalleryDivider from "../Components/GalleryDivider";

interface AppointmentProps {
  species: { id: number; name: string }[];
  groomOptions: { id: number; name: string }[];
  closedDays: { id: number; date: string }[];
  momentsByDate: any;
}

export default function Index({
  species,
  groomOptions,
  closedDays,
  momentsByDate,
}: AppointmentProps) {
  return (
    <>
      <Head title="Afspraak" />
      <Navbar />
      <Hero
        title="Afspraak maken"
        imageUrl="images/afspraak.png"
        imagePositionClass="lg:bg-[center_top_-12rem]"
      />
      <div className="flex flex-row justify-center w-full bg-secondary py-2">
        <span className="text-white uppercase text center font-semibold text-sm">
          <u>Let op:</u> Voor honden met een pluk vacht en honden boven de 30 KG
          geldt een klantenstop.
        </span>
      </div>
      <StepForm
        species={species}
        groomOptions={groomOptions}
        closedDays={closedDays}
        momentsByDate={momentsByDate}
      />
      <div className="flex flex-row justify-center -mt-20 py-16">
        <p>
          Als er nog plaats is, gelieve een afspraak maken 1 dag van tevoren.
        </p>
      </div>
      <GalleryDivider />
      <Footer />
    </>
  );
}
