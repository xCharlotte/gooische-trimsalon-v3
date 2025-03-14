import InputLabel from "@/Components/Forms/InputLabel";
import SelectInput from "@/Components/Forms/SelectInput";
import TextArea from "@/Components/Forms/TextArea";
import TextInput from "@/Components/Forms/TextInput";

export type AnimalFormProps = {
  onNext: (data: any) => void;
  onPrevious: () => void;
  formData: any;
  setData: any;
  species: { id: number; name: string }[];
  groomOptions: { id: number; name: string }[];
};

export default function AnimalForm({
  onNext,
  onPrevious,
  formData,
  setData,
  species,
  groomOptions,
}: AnimalFormProps) {
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
          htmlFor="species_id"
          className="text-gray-700 font-semibold"
        >
          Diersoort
        </InputLabel>
        <SelectInput
          id="species_id"
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
          defaultValue=""
          onChange={(e) =>
            setData("animalDetails", {
              ...formData.animalDetails,
              species_id: e.target.value,
            })
          }
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
        <InputLabel htmlFor="name" className="text-gray-700 font-semibold">
          Naam
        </InputLabel>
        <TextInput
          id="name"
          placeholder="Hoe heet je huisdier?"
          value={formData.animalDetails.name}
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
          onChange={(e) =>
            setData("animalDetails", {
              ...formData.animalDetails,
              name: e.target.value,
            })
          }
        />
      </div>

      <div className="space-y-2">
        <InputLabel htmlFor="breed" className="text-gray-700 font-semibold">
          Ras
        </InputLabel>
        <TextInput
          type="text"
          id="breed"
          placeholder="Om welk ras gaat het?"
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
          value={formData.animalDetails.breed}
          onChange={(e) =>
            setData("animalDetails", {
              ...formData.animalDetails,
              breed: e.target.value,
            })
          }
        />
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
          defaultValue=""
          onChange={(e) =>
            setData("animalDetails", {
              ...formData.animalDetails,
              groom_option_id: e.target.value,
            })
          }
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
          value={formData.animalDetails.animal_remarks}
          onChange={(e) =>
            setData("animalDetails", {
              ...formData.animalDetails,
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
          onClick={() => onNext(formData)}
        >
          Volgende
        </button>
      </div>
    </div>
  );
}
