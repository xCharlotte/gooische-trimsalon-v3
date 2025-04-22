import { z } from "zod";

export const animalFormSchema = z.object({
  species_id: z.string().min(1, "Diersoort is verplicht"),
  name: z.string().min(2, "Naam is verplicht"),
  breed: z.string().min(2, "Ras is verplicht"),
  groom_option_id: z.string().min(1, "Trimoptie is verplicht"),
  animal_remarks: z.string().optional(),
});

export const clientFormSchema = z.object({
  first_name: z.string().min(2, "Voornaam is verplicht"),
  last_name: z.string().min(2, "Achternaam is verplicht"),
  street: z.string().min(2, "Straatnaam is verplicht"),
  house_number: z.string().min(1, "Huisnummer is verplicht"),
  house_number_suffix: z.string().optional(),
  postal_code: z
    .string()
    .min(1, "Postcode is verplicht")
    .regex(
      /^\d{4}[A-Za-z]{2}$/,
      "Postcode is ongeldig. Gebruik het formaat 1234AB."
    ),
  city: z.string().min(2, "Woonplaats is verplicht"),
  email: z
    .string()
    .min(1, "E-mailadres is verplicht")
    .email("Ongeldig e-mailadres"),
  phone: z
    .string()
    .min(1, "Telefoonnummer is verplicht")
    .regex(
      /^(\+31|0)[1-9][0-9]{8}$/,
      "Voer een geldig telefoonnummer in, beginnend met +31 of 0"
    ),
  client_remarks: z.string().optional(),
  terms_accepted: z.literal(true, {
    errorMap: () => ({
      message: "Je moet akkoord gaan met de algemene voorwaarden",
    }),
  }),
});

export const appointmentFormSchema = z.object({
  date: z.string().min(1, "Datum is verplicht"),
  moment: z.string().min(1, "Tijdstip is verplicht"),
});

export const formValidationSchema = () => {
  return {
    animalFormSchema,
    clientFormSchema,
    appointmentFormSchema,
  };
};
