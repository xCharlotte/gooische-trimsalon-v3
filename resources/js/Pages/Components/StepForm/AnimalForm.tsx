import InputLabel from "@/Components/Forms/InputLabel";
import SelectInput from "@/Components/Forms/SelectInput";
import TextArea from "@/Components/Forms/TextArea";
import TextInput from "@/Components/Forms/TextInput";
import { useState } from "react";

export type AnimalFormProps = {
  onNext: (data: any) => void;
  onPrevious: () => void;
  formData: any;
  species: { id: number; name: string }[];
  groomOptions: { id: number; name: string }[];
};

export default function AnimalForm({
  onNext,
  onPrevious,
  formData,
  species,
  groomOptions,
}: AnimalFormProps) {
  const [animalDetails, setAnimalDetails] = useState({
    name: formData.animalDetails?.name || "",
    breed: formData.animalDetails?.breed || "",
    animal_remarks: formData.animalDetails?.animal_remarks || "",
  });

  const handleNext = () => {
    onNext({ animalDetails });
  };

  console.log(species);

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-2xl uppercase font-bold text-gray-700">
          Huisdier gegevens
        </h2>
        <p className="text-gray-700">Vertel ons meer over je huisdier?</p>
      </div>

      <div className="space-y-2">
        <InputLabel
          htmlFor="animalType"
          className="text-gray-700 font-semibold"
        >
          Diersoort
        </InputLabel>
        <SelectInput
          id="animalType"
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
          defaultValue=""
        >
          <option disabled value="">
            Kies een dier
          </option>
          {species.map((type, index) => (
            <option key={index} value={type.id}>
              {type.name}
            </option>
          ))}
        </SelectInput>
      </div>

      <div className="space-y-2">
        <InputLabel
          htmlFor="animalName"
          className="text-gray-700 font-semibold"
        >
          Naam
        </InputLabel>
        <TextInput
          id="animalName"
          placeholder="Hoe heet je huisdier?"
          value={animalDetails.name}
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
          onChange={(e) =>
            setAnimalDetails({ ...animalDetails, name: e.target.value })
          }
        />
      </div>

      <div className="space-y-2">
        <InputLabel
          htmlFor="animalBreed"
          className="text-gray-700 font-semibold"
        >
          Ras
        </InputLabel>
        <TextInput
          type="text"
          id="animalBreed"
          placeholder="Om welk ras gaat het?"
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
          value={animalDetails.breed}
          onChange={(e) =>
            setAnimalDetails({ ...animalDetails, breed: e.target.value })
          }
        />
      </div>

      <div className="space-y-2">
        <InputLabel
          htmlFor="groomOption"
          className="text-gray-700 font-semibold"
        >
          Trimoptie
        </InputLabel>
        <SelectInput
          id="groomOption"
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
          defaultValue=""
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
          value={animalDetails.animal_remarks}
          onChange={(e) =>
            setAnimalDetails({
              ...animalDetails,
              animal_remarks: e.target.value,
            })
          }
        />
      </div>

      <div className="flex justify-between">
        <button
          className="bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600 transition"
          onClick={onPrevious}
        >
          Vorige
        </button>
        <button
          className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
          onClick={handleNext}
        >
          Volgende
        </button>
      </div>
    </div>
  );
}
