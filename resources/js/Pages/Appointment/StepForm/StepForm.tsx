import { useState } from "react";
import { router } from "@inertiajs/react";
import AnimalForm from "./AnimalForm";
import DatePickerForm from "./DatePickerForm";
import ClientForm from "./ClientForm";
import Swal from "sweetalert2";
import { useStepFormStore } from "@/stores/useStepFormStore";
import { FormData } from "@/types/formData";

export type StepFormProps = {
  species: { id: number; name: string }[];
  groomOptions: { id: number; name: string }[];
  closedDays: { id: number; date: string }[];
  momentsByDate: { [date: string]: string[] };
};

export default function StepForm({
  species,
  groomOptions,
  closedDays,
  momentsByDate,
}: StepFormProps) {
  const [fade, setFade] = useState(true);
  const { step, formData, nextStep, prevStep, updateFormData, resetForm } =
    useStepFormStore();

  const steps = [
    { label: "Afspraak gegevens" },
    { label: "Huisdier gegevens" },
    { label: "Klantgegevens" },
  ];

  const handleSubmit = (mergedData: FormData) => {
    router.post(route("appointment.post"), mergedData, {
      preserveScroll: true,
      onSuccess: () => {
        Swal.fire({
          title: "Bedankt voor je afspraak!",
          html: `Er is een bevestigingsmail verstuurd naar het opgegeven e-mailadres. 
            <br><br><span style="font-size:0.8em; color:gray;">(Check ook je spamfolder.)</span>`,
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          setFade(false);
          setTimeout(() => {
            resetForm();
            setFade(true);
          }, 300);
        });
      },
      onError: () => {
        Swal.fire({
          title: "Fout!",
          text: "Er ging iets mis, probeer het opnieuw.",
          icon: "error",
          confirmButtonText: "OK",
        });
      },
    });
  };

  const renderStepForm = () => {
    switch (step) {
      case 1:
        return (
          <DatePickerForm
            onNext={nextStep}
            formData={formData}
            updateFormData={updateFormData}
            closedDays={closedDays}
            momentsByDate={momentsByDate}
          />
        );
      case 2:
        return (
          <AnimalForm
            onNext={nextStep}
            onPrevious={prevStep}
            formData={formData}
            updateFormData={updateFormData}
            species={species}
            groomOptions={groomOptions}
          />
        );
      case 3:
        return (
          <ClientForm
            onPrevious={prevStep}
            onSubmit={handleSubmit}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div
        className={`transition-opacity duration-300 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center justify-center py-12">
          <nav className="w-full max-w-4xl relative" aria-label="Voortgang">
            <ul className="flex items-center w-full relative" role="list">
              {steps.map((item, index) => {
                const isActive = step > index;
                const isCompleted = step >= index + 1;

                return (
                  <li
                    key={index}
                    className="flex flex-col items-center w-1/3 relative"
                    tabIndex={0}
                  >
                    {/* Line rendering logic */}
                    {index === 0 && (
                      <div
                        className={`absolute top-5 left-1/2 w-1/2 h-0.5 ${
                          step > 1 ? "bg-primary" : "bg-gray-400"
                        }`}
                      />
                    )}
                    {index === 1 && (
                      <>
                        {/* Left half of the line */}
                        <div
                          className={`absolute top-5 left-0 w-1/2 h-0.5 ${
                            step > 1 ? "bg-primary" : "bg-gray-400"
                          }`}
                        />
                        {/* Right half of the line */}
                        <div
                          className={`absolute top-5 left-1/2 w-1/2 h-0.5 ${
                            step > 2 ? "bg-primary" : "bg-gray-400"
                          }`}
                        />
                      </>
                    )}
                    {index === 2 && (
                      <div
                        className={`absolute top-5 right-1/2 w-1/2 h-0.5 ${
                          isCompleted ? "bg-primary" : "bg-gray-400"
                        }`}
                      />
                    )}

                    {/* Circle rendering logic */}
                    <div
                      className={`w-10 h-10 flex items-center justify-center font-bold rounded-full z-10 ${
                        isActive
                          ? "bg-primary text-white"
                          : "bg-gray-500 text-white"
                      }`}
                    >
                      {index + 1}
                    </div>

                    {/* Label */}
                    <p className="mt-2 text-sm text-gray-900">{item.label}</p>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="flex items-center justify-center p-6 w-full pb-20">
          <div className="bg-white shadow-lg rounded-2xl w-full max-w-4xl p-8">
            <div className="p-4">{renderStepForm()}</div>
          </div>
        </div>
      </div>
    </>
  );
}
