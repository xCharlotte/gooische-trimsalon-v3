import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import { Head } from "@inertiajs/react";
import StepForm from "../Components/StepForm/StepForm";

interface AppointmentProps {
  species: { id: number; name: string }[];
  groomOptions: { id: number; name: string }[];
  closedDays: { id: number; date: string }[];
  momentsByDate: any;
  fullyBookedDates: any;
}

export default function Index({
  species,
  groomOptions,
  closedDays,
  momentsByDate,
  fullyBookedDates,
}: AppointmentProps) {
  return (
    <>
      <Head title="Afspraak" />
      <Navbar />
      <Hero />
      <StepForm
        species={species}
        groomOptions={groomOptions}
        closedDays={closedDays}
        momentsByDate={momentsByDate}
        fullyBookedDates={fullyBookedDates}
      />
      <Footer />
    </>
  );
}
