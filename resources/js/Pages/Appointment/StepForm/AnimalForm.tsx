import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formValidationSchema } from "./hooks/formValidationSchema";
import InputLabel from "@/Components/Forms/InputLabel";
import SelectInput from "@/Components/Forms/SelectInput";
import TextArea from "@/Components/Forms/TextArea";
import TextInput from "@/Components/Forms/TextInput";
import { FormData } from "@/types/formData";
import { useEffect } from "react";

export type AnimalFormProps = {
  onNext: (data: any) => void;
  onPrevious: (data: any) => void;
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  species: { id: number; name: string }[];
  groomOptions: { id: number; name: string }[];
};

export default function AnimalForm({
  onNext,
  onPrevious,
  formData,
  updateFormData,
  species,
  groomOptions,
}: AnimalFormProps) {
  const { animalFormSchema } = formValidationSchema();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(animalFormSchema),
    defaultValues: formData.animalDetails,
  });

  // Set default value for species_id based on the selected moment
  useEffect(() => {
    if (formData.moment === "10:00 - 12:00") {
      const hond = species.find((type) => type.name.toLowerCase() === "hond");
      if (hond) {
        setValue("species_id", hond.id.toString());
        updateFormData({
          animalDetails: {
            ...formData.animalDetails,
            species_id: hond.id.toString(),
          },
        });
      } else {
        setValue("species_id", "");
        updateFormData({
          animalDetails: {
            ...formData.animalDetails,
            species_id: "",
          },
        });
      }
    }
  }, [formData.moment, species, updateFormData]);

  const onSubmit = (data: any) => {
    updateFormData({ animalDetails: data });
    onNext(data);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-2xl uppercase font-bold text-gray-700">
          Huisdier gegevens
        </h2>
        <p className="text-gray-700">Vertel ons meer over je huisdier?</p>
      </div>

      <div className="space-y-2">
        <InputLabel
          htmlFor="species_id"
          className="text-gray-700 font-semibold"
        >
          Diersoort
        </InputLabel>
        <SelectInput
          id="species_id"
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
          {...register("species_id")}
        >
          {formData.moment === "10:00 - 12:00" ? (
            <>
              {species
                .filter((type) => type.name.toLowerCase() === "hond")
                .map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
            </>
          ) : (
            <>
              <option disabled value="">
                Kies een dier
              </option>
              {species.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </>
          )}
        </SelectInput>
        {errors.species_id && (
          <p className="text-red-500">{errors.species_id.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <InputLabel htmlFor="name" className="text-gray-700 font-semibold">
          Naam
        </InputLabel>
        <TextInput
          id="name"
          placeholder="Hoe heet je huisdier?"
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
          {...register("name")}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <InputLabel htmlFor="breed" className="text-gray-700 font-semibold">
          Ras
        </InputLabel>
        <TextInput
          id="breed"
          placeholder="Om welk ras gaat het?"
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
          {...register("breed")}
        />
        {errors.breed && <p className="text-red-500">{errors.breed.message}</p>}
      </div>

      <div className="space-y-2">
        <InputLabel
          htmlFor="groom_option_id"
          className="text-gray-700 font-semibold"
        >
          Trimoptie
        </InputLabel>
        <SelectInput
          id="groom_option_id"
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
          {...register("groom_option_id")}
        >
          <option disabled value="">
            Kies een trimoptie
          </option>
          {groomOptions.map((option, index) => (
            <option key={index} value={option.id}>
              {option.name}
            </option>
          ))}
        </SelectInput>
        {errors.groom_option_id && (
          <p className="text-red-500">{errors.groom_option_id.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <InputLabel
          htmlFor="animal_remarks"
          className="text-gray-700 font-semibold"
        >
          Opmerkingen (optioneel)
        </InputLabel>
        <TextArea
          id="animal_remarks"
          placeholder="Moet ik nog iets weten over je huisdier? (optioneel)"
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
          {...register("animal_remarks")}
        />
      </div>

      <div className="flex justify-between">
        <button
          className="bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600 transition"
          type="button"
          onClick={onPrevious}
        >
          Vorige
        </button>
        <button
          className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
          type="submit"
        >
          Volgende
        </button>
      </div>
    </form>
  );
}
