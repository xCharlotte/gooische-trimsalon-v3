import InputLabel from "@/Components/Forms/InputLabel";
import TextArea from "@/Components/Forms/TextArea";
import TextInput from "@/Components/Forms/TextInput";

export type ClientFormProps = {
  onPrevious: () => void;
  onSubmit: (data: any) => void;
  formData: any;
  setData: any;
};

export default function ClientForm({
  onPrevious,
  onSubmit,
  formData,
  setData,
}: ClientFormProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-2xl uppercase font-bold text-gray-700">
          Contactgegevens
        </h2>
        <p className="text-gray-700">Waar kan ik je bereiken?</p>
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex flex-col w-full gap-y-2">
          <InputLabel
            htmlFor="first_name"
            className="text-gray-700 font-semibold"
          >
            Voornaam
          </InputLabel>
          <TextInput
            id="first_name"
            type="text"
            placeholder="Voornaam"
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            value={formData.clientDetails.first_name}
            onChange={(e) =>
              setData((prevData) => ({
                ...prevData,
                clientDetails: {
                  ...prevData.clientDetails,
                  first_name: e.target.value,
                },
              }))
            }
          />
        </div>
        <div className="flex flex-col w-full gap-y-2">
          <InputLabel
            htmlFor="last_name"
            className="text-gray-700 font-semibold"
          >
            Achternaam
          </InputLabel>
          <TextInput
            id="last_name"
            type="text"
            placeholder="Achternaam"
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            value={formData.clientDetails.last_name}
            onChange={(e) =>
              setData((prevData) => ({
                ...prevData,
                clientDetails: {
                  ...prevData.clientDetails,
                  last_name: e.target.value,
                },
              }))
            }
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col gap-y-2">
          <InputLabel
            htmlFor="house_number"
            className="text-gray-700 font-semibold"
          >
            E-mail
          </InputLabel>
          <TextInput
            id="email"
            type="email"
            placeholder="E-mail"
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            value={formData.clientDetails.email}
            onChange={(e) =>
              setData((prevData) => ({
                ...prevData,
                clientDetails: {
                  ...prevData.clientDetails,
                  email: e.target.value,
                },
              }))
            }
          />
        </div>
      </div>

      <div className="flex flex-row gap-x-4">
        <div className="flex flex-col w-3/5 gap-y-2">
          <InputLabel htmlFor="street" className="text-gray-700 font-semibold">
            Straatnaam
          </InputLabel>
          <TextInput
            id="street"
            type="text"
            placeholder="Adres"
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            value={formData.clientDetails.street}
            onChange={(e) =>
              setData((prevData) => ({
                ...prevData,
                clientDetails: {
                  ...prevData.clientDetails,
                  street: e.target.value,
                },
              }))
            }
          />
        </div>
        <div className="flex flex-col w-1/5 gap-y-2">
          <InputLabel
            htmlFor="house_number"
            className="text-gray-700 font-semibold"
          >
            Huisnummer
          </InputLabel>
          <TextInput
            id="house_number"
            type="text"
            placeholder="Nr."
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
            value={formData.clientDetails.house_number}
            onChange={(e) =>
              setData((prevData) => ({
                ...prevData,
                clientDetails: {
                  ...prevData.clientDetails,
                  house_number: e.target.value,
                },
              }))
            }
          />
        </div>
        <div className="flex flex-col w-1/5 gap-y-2">
          <InputLabel
            htmlFor="house_number_suffix"
            className="text-gray-700 font-semibold"
          >
            Toevoeging
          </InputLabel>
          <TextInput
            id="house_number_suffix"
            type="text"
            placeholder="Toevoeging"
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
            value={formData.clientDetails.house_number_suffix}
            onChange={(e) =>
              setData((prevData) => ({
                ...prevData,
                clientDetails: {
                  ...prevData.clientDetails,
                  house_number_suffix: e.target.value,
                },
              }))
            }
          />
        </div>
      </div>

      <div className="flex flex-row gap-x-4">
        <div className="flex flex-col w-full gap-y-2">
          <InputLabel
            htmlFor="postal_code"
            className="text-gray-700 font-semibold"
          >
            Postcode
          </InputLabel>
          <TextInput
            id="postal_code"
            type="text"
            placeholder="Postcode"
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            value={formData.clientDetails.postal_code}
            onChange={(e) =>
              setData((prevData) => ({
                ...prevData,
                clientDetails: {
                  ...prevData.clientDetails,
                  postal_code: e.target.value,
                },
              }))
            }
          />
        </div>
        <div className="flex flex-col w-full gap-y-2">
          <InputLabel htmlFor="city" className="text-gray-700 font-semibold">
            Woonplaats
          </InputLabel>
          <TextInput
            id="city"
            type="text"
            placeholder="Woonplaats"
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            value={formData.clientDetails.city}
            onChange={(e) =>
              setData((prevData) => ({
                ...prevData,
                clientDetails: {
                  ...prevData.clientDetails,
                  city: e.target.value,
                },
              }))
            }
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col gap-y-2">
          <InputLabel htmlFor="phone" className="text-gray-700 font-semibold">
            Telefoon
          </InputLabel>
          <TextInput
            id="phone"
            type="text"
            placeholder="Telefoon"
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            value={formData.clientDetails.phone}
            onChange={(e) =>
              setData((prevData) => ({
                ...prevData,
                clientDetails: {
                  ...prevData.clientDetails,
                  phone: e.target.value,
                },
              }))
            }
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <InputLabel
            htmlFor="client_remarks"
            className="text-gray-700 font-semibold"
          >
            Opmerkingen (optioneel)
          </InputLabel>
          <TextArea
            id="client_remarks"
            placeholder="Moet ik nog iets weten? (optioneel)"
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            value={formData.clientDetails.client_remarks}
            onChange={(e) =>
              setData((prevData: any) => ({
                ...prevData,
                clientDetails: {
                  ...prevData.clientDetails,
                  client_remarks: e.target.value,
                },
              }))
            }
          />
        </div>
      </div>

      <div className="flex justify-between">
        <button
          className="bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600 transition"
          onClick={onPrevious}
        >
          Vorige
        </button>
        <button
          className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition"
          onClick={() => onSubmit(formData)}
        >
          Verstuur
        </button>
      </div>
    </div>
  );
}
