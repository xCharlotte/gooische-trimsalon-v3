import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import { Head } from "@inertiajs/react";
import StepForm from "../Components/StepForm/StepForm";

interface AppointmentProps {
  species: { id: number; name: string }[];
  groomOptions: { id: number; name: string }[];
}

export default function Index({ species, groomOptions }: AppointmentProps) {
  return (
    <>
      <Head title="Afspraak" />
      <Navbar />
      <Hero />
      <StepForm species={species} groomOptions={groomOptions} />
      <Footer />
    </>
  );
}
