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
        imagePositionClass="lg:bg-[center_top_-14rem]"
      />
      <StepForm
        species={species}
        groomOptions={groomOptions}
        closedDays={closedDays}
        momentsByDate={momentsByDate}
      />
      <GalleryDivider />
      <Footer />
    </>
  );
}
