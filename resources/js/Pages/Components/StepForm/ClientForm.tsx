import InputLabel from "@/Components/Forms/InputLabel";
import TextArea from "@/Components/Forms/TextArea";
import TextInput from "@/Components/Forms/TextInput";
import { useState } from "react";

export default function ClientForm({
  onPrevious,
  onSubmit,
  formData,
}: {
  onPrevious: () => void;
  onSubmit: (data: any) => void;
  formData: any;
}) {
  const [clientDetails, setClientDetails] = useState({
    first_name: formData.clientDetails?.first_name || "",
    last_name: formData.clientDetails?.last_name || "",
    address: formData.clientDetails?.address || "",
    house_number: formData.clientDetails?.house_number || "",
    house_number_suffix: formData.clientDetails?.house_number_suffix || "",
    postal_code: formData.clientDetails?.postal_code || "",
    city: formData.clientDetails?.city || "",
    email: formData.clientDetails?.email || "",
    phone: formData.clientDetails?.phone || "",
    client_remarks: formData.clientDetails?.client_remarks || "",
  });

  const handleSubmit = () => {
    onSubmit({ ...formData, clientDetails });
  };

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
            type="text"
            placeholder="Voornaam"
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            value={clientDetails.first_name}
            onChange={(e) =>
              setClientDetails({ ...clientDetails, first_name: e.target.value })
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
            type="text"
            placeholder="Achternaam"
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            value={clientDetails.last_name}
            onChange={(e) =>
              setClientDetails({ ...clientDetails, last_name: e.target.value })
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
            type="email"
            placeholder="E-mail"
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            value={clientDetails.email}
            onChange={(e) =>
              setClientDetails({ ...clientDetails, email: e.target.value })
            }
          />
        </div>
      </div>

      <div className="flex flex-row gap-x-4">
        <div className="flex flex-col w-3/5 gap-y-2">
          <InputLabel htmlFor="address" className="text-gray-700 font-semibold">
            Straatnaam
          </InputLabel>
          <TextInput
            type="text"
            placeholder="Adres"
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            value={clientDetails.address}
            onChange={(e) =>
              setClientDetails({ ...clientDetails, address: e.target.value })
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
            type="text"
            placeholder="Nr."
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
            value={clientDetails.house_number}
            onChange={(e) =>
              setClientDetails({
                ...clientDetails,
                house_number: e.target.value,
              })
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
            type="text"
            placeholder="Toevoeging"
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
            value={clientDetails.house_number_suffix}
            onChange={(e) =>
              setClientDetails({
                ...clientDetails,
                house_number_suffix: e.target.value,
              })
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
            type="text"
            placeholder="Postcode"
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            value={clientDetails.postal_code}
            onChange={(e) =>
              setClientDetails({
                ...clientDetails,
                postal_code: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col w-full gap-y-2">
          <InputLabel htmlFor="city" className="text-gray-700 font-semibold">
            Woonplaats
          </InputLabel>
          <TextInput
            type="text"
            placeholder="Woonplaats"
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            value={clientDetails.city}
            onChange={(e) =>
              setClientDetails({ ...clientDetails, city: e.target.value })
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
            type="text"
            placeholder="Telefoon"
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            value={clientDetails.phone}
            onChange={(e) =>
              setClientDetails({ ...clientDetails, phone: e.target.value })
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
            value={clientDetails.client_remarks}
            onChange={(e) =>
              setClientDetails({
                ...clientDetails,
                client_remarks: e.target.value,
              })
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
          onClick={handleSubmit}
        >
          Verstuur
        </button>
      </div>
    </div>
  );
}
