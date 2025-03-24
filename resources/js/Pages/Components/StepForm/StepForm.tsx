import { useEffect, useState } from "react";
import AnimalForm from "./AnimalForm";
import DatePickerForm from "./DatePickerForm";
import ClientForm from "./ClientForm";
import Swal from "sweetalert2";
import { useForm } from "@inertiajs/react";
import { formDefaults } from "./data/formDefault";

export type StepFormProps = {
  species: { id: number; name: string }[];
  groomOptions: { id: number; name: string }[];
  closedDays: { id: number; date: string }[];
};

export default function StepForm({
  species,
  groomOptions,
  closedDays,
}: StepFormProps) {
  const [step, setStep] = useState(1);
  const [fade, setFade] = useState(true);
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const { data, setData, post } = useForm(formDefaults);

  const steps = [
    { label: "Afspraak gegevens" },
    { label: "Huisdier gegevens" },
    { label: "Klantgegevens" },
  ];

  useEffect(() => {
    console.log("!!!!!!!!!! formData in StepForm:", data);
    if (shouldSubmit) {
      onSubmitHandler();
      setShouldSubmit(false);
    }
  }, [data]);

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrevious = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    setShouldSubmit(true);
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    post(route("appointment.post"), {
      data: data,
      preserveScroll: true,
      onSuccess: () => {
        Swal.fire({
          title: "Succes!",
          text: "Je afspraak is succesvol aangemaakt!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          setFade(false);
          setTimeout(() => {
            setData(formDefaults);
            setStep(1);
            setFade(true);
          }, 300);
        });
      },
      onError: (errors) => {
        console.log("Swal errors", errors);

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
            onNext={handleNext}
            formData={data}
            setData={setData}
            closedDays={closedDays}
          />
        );
      case 2:
        return (
          <AnimalForm
            onNext={handleNext}
            onPrevious={handlePrevious}
            formData={data}
            setData={setData}
            species={species}
            groomOptions={groomOptions}
          />
        );
      case 3:
        return (
          <ClientForm
            onPrevious={handlePrevious}
            onSubmit={onSubmitHandler}
            formData={data}
            setData={setData}
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
      </div>
    </>
  );
}
