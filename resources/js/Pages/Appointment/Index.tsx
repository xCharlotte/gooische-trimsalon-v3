import Hero from "@/Pages/Components/Hero";
import { Head } from "@inertiajs/react";
import StepForm from "@/Pages/Appointment/StepForm/StepForm";
import AppLayout from "@/Layouts/AppLayout";

export type AppointmentProps = {
  species: { id: number; name: string }[];
  groomOptions: { id: number; name: string }[];
  closedDays: { id: number; date: string }[];
  momentsByDate: any;
};

export default function Index({
  species,
  groomOptions,
  closedDays,
  momentsByDate,
}: AppointmentProps) {
  return (
    <>
      <Head title="Afspraak" />
      <AppLayout
        hero={
          <Hero
            title="Afspraak maken"
            imageUrl="images/afspraak.png"
            imagePositionClass="lg:bg-[center_top_-12rem]"
          />
        }
      >
        <div className="flex flex-row justify-center w-full bg-secondary py-2 z-10">
          <span className="text-white uppercase text center font-semibold text-xs sm:text-sm px-4">
            <u>
              <b>Let op:</b>
            </u>{" "}
            Voor honden met een pluk vacht en honden boven de <b>30 KG</b> geldt
            een klantenstop.
          </span>
        </div>
        <StepForm
          species={species}
          groomOptions={groomOptions}
          closedDays={closedDays}
          momentsByDate={momentsByDate}
        />
        <div className="flex flex-row justify-center text-center text-sm sm:text-base -mt-20 py-16 px-4 sm:px-0">
          <p>
            Als er nog plaats is, gelieve een afspraak maken 1 dag van tevoren.
          </p>
        </div>
      </AppLayout>
    </>
  );
}
