import { useState } from "react";
import AnimalForm from "./AnimalForm";
import DatePickerForm from "./DatePickerForm";
import ClientForm from "./ClientForm";
import Swal from "sweetalert2";

export type StepFormProps = {
  species: { id: number; name: string }[];
  groomOptions: { id: number; name: string }[];
};

export default function StepForm({ species, groomOptions }: StepFormProps) {
  const [step, setStep] = useState(1);
  const steps = [
    { label: "Afspraak gegevens" },
    { label: "Huisdier gegevens" },
    { label: "Klantgegevens" },
  ];
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    animalDetails: {},
    clientDetails: {},
  });

  const handleNext = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    console.log("FORMDATATA", formData);
    fetch("/api/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        Swal.fire({
          title: "Succes!",
          text: "Je afspraak is succesvol aangemaakt. Een bevestiging is naar je e-mail verstuurd.",
          icon: "success",
          confirmButtonText: "OK",
        });
      });
  };

  const renderStepForm = () => {
    switch (step) {
      case 1:
        return <DatePickerForm onNext={handleNext} formData={formData} />;
      case 2:
        return (
          <AnimalForm
            onNext={handleNext}
            onPrevious={handlePrevious}
            formData={formData}
            species={species}
            groomOptions={groomOptions}
          />
        );
      case 3:
        return (
          <ClientForm
            onPrevious={handlePrevious}
            onSubmit={handleSubmit}
            formData={formData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
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
                        step > 1 ? "bg-blue-500" : "bg-gray-400"
                      }`}
                    />
                  )}
                  {index === 1 && (
                    <>
                      {/* Left half of the line */}
                      <div
                        className={`absolute top-5 left-0 w-1/2 h-0.5 ${
                          step > 1 ? "bg-blue-500" : "bg-gray-400"
                        }`}
                      />
                      {/* Right half of the line */}
                      <div
                        className={`absolute top-5 left-1/2 w-1/2 h-0.5 ${
                          step > 2 ? "bg-blue-500" : "bg-gray-400"
                        }`}
                      />
                    </>
                  )}
                  {index === 2 && (
                    <div
                      className={`absolute top-5 right-1/2 w-1/2 h-0.5 ${
                        isCompleted ? "bg-blue-500" : "bg-gray-400"
                      }`}
                    />
                  )}

                  {/* Circle rendering logic */}
                  <div
                    className={`w-10 h-10 flex items-center justify-center font-bold rounded-full z-10 ${
                      isActive
                        ? "bg-blue-500 text-white"
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
    </>
  );
}
