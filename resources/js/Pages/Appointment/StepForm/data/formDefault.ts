import { FormData } from "@/types/formData";

export const formDefaults: FormData = {
  date: "",
  moment: "",
  animalDetails: {
    species_id: "",
    name: "",
    breed: "",
    groom_option_id: "",
    animal_remarks: "",
  },
  clientDetails: {
    first_name: "",
    last_name: "",
    street: "",
    house_number: "",
    house_number_suffix: "",
    postal_code: "",
    city: "",
    email: "",
    phone: "",
    client_remarks: "",
    terms_accepted: false,
  },
};
