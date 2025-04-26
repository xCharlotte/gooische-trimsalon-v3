// Appointment data for the backend admin panel view section
export type AppointmentData = {
  id: number;
  date: string;
  moment: string;
  animal: {
    id: number;
    name: string;
    breed: string;
    animal_remarks: string | null;
  };
  client: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    street: string;
    postal_code: string;
    house_number: string;
    house_number_suffix: string | null;
    city: string;
    client_remarks: string | null;
  };
  species_groom_option: {
    id: number;
    species: {
      id: number;
      name: string;
    };
    groom_option: {
      id: number;
      name: string;
    };
  };
};
