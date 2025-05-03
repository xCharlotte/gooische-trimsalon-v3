import InputLabel from "@/Components/Forms/InputLabel";
import TextArea from "@/Components/Forms/TextArea";
import TextInput from "@/Components/Forms/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formValidationSchema } from "./hooks/formValidationSchema";
import { FormData } from "@/types/formData";
import Checkbox from "@/Components/Forms/Checkbox";

export type ClientFormProps = {
  onPrevious: () => void;
  onSubmit: (data: FormData) => void;
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
};

export default function ClientForm({
  onPrevious,
  onSubmit,
  formData,
  updateFormData,
}: ClientFormProps) {
  const { clientFormSchema } = formValidationSchema();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // @ts-ignore
    resolver: zodResolver(clientFormSchema),
    defaultValues: formData.clientDetails,
  });

  const onSubmitHandler = (data: any) => {
    const mergedData = {
      ...formData,
      clientDetails: data,
    };

    updateFormData({ clientDetails: data });
    onSubmit(mergedData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-6">
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
            placeholder="Voornaam"
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            {...register("first_name")}
          />
          {errors.first_name && (
            <p className="text-red-500">{errors.first_name.message}</p>
          )}
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
            placeholder="Achternaam"
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            {...register("last_name")}
          />
          {errors.last_name && (
            <p className="text-red-500">{errors.last_name.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col gap-y-2">
          <InputLabel htmlFor="E-mail" className="text-gray-700 font-semibold">
            E-mail
          </InputLabel>
          <TextInput
            id="email"
            type="email"
            placeholder="E-mail"
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-row gap-x-4">
        <div className="flex flex-col w-3/5 gap-y-2">
          <InputLabel htmlFor="street" className="text-gray-700 font-semibold">
            Straatnaam
          </InputLabel>
          <TextInput
            id="street"
            placeholder="Adres"
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            {...register("street")}
          />
          {errors.street && (
            <p className="text-red-500">{errors.street.message}</p>
          )}
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
            placeholder="Nr."
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
            {...register("house_number")}
          />
          {errors.house_number && (
            <p className="text-red-500">{errors.house_number.message}</p>
          )}
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
            placeholder="Toevoeging"
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
            {...register("house_number_suffix")}
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
            placeholder="Postcode"
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            {...register("postal_code")}
          />
          {errors.postal_code && (
            <p className="text-red-500">{errors.postal_code.message}</p>
          )}
        </div>
        <div className="flex flex-col w-full gap-y-2">
          <InputLabel htmlFor="city" className="text-gray-700 font-semibold">
            Woonplaats
          </InputLabel>
          <TextInput
            id="city"
            placeholder="Woonplaats"
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            {...register("city")}
          />
          {errors.city && <p className="text-red-500">{errors.city.message}</p>}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col gap-y-2">
          <InputLabel htmlFor="phone" className="text-gray-700 font-semibold">
            Telefoon
          </InputLabel>
          <TextInput
            id="phone"
            placeholder="Telefoon"
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
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
            {...register("client_remarks")}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="terms_accepted" {...register("terms_accepted")} />
          <label htmlFor="terms_accepted" className="text-gray-700">
            Ik ga akkoord met de{" "}
            <a
              href="/algemene-voorwaarden"
              target="_blank"
              className="underline text-blue-600"
            >
              algemene voorwaarden
            </a>
          </label>
        </div>
        {errors.terms_accepted && (
          <p className="text-red-500">
            {errors.terms_accepted.message as string}
          </p>
        )}
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
          type="submit"
        >
          Verstuur
        </button>
      </div>
    </form>
  );
}
