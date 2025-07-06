import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Naam is verplicht"),
  email: z
    .string()
    .email("Ongeldig e-mailadres")
    .min(1, "E-mailadres is verplicht"),
  phone: z
    .string()
    .min(1, "Telefoonnummer is verplicht")
    .regex(
      /^(\+31|0)[1-9][0-9]{8}$/,
      "Voer een geldig telefoonnummer in, beginnend met +31 of 0"
    ),
  contactMessage: z.string().min(1, "Bericht is verplicht"),
  company: z.string().max(0).optional(), // honeypot
});
