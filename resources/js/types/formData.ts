// Data for the appointment form on the frontend
export type FormData = {
  date: string;
  moment: string;
  animalDetails: {
    species_id: string;
    name: string;
    breed: string;
    groom_option_id: string;
    animal_remarks: string;
  };
  clientDetails: {
    first_name: string;
    last_name: string;
    street: string;
    house_number: string;
    house_number_suffix?: string;
    postal_code: string;
    city: string;
    email: string;
    phone: string;
    client_remarks?: string;
    terms_accepted: boolean;
  };
};
