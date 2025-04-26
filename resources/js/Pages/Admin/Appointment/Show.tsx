import { formatDateToDMY } from "@/lib/dateFormatter";
import { AppointmentData } from "@/types/AppointmentData";

type ShowProps = {
  appointment: AppointmentData;
};

export default function Show({ appointment }: ShowProps) {
  return (
    <div className="space-y-10 bg-[#F7F7F7] p-6 rounded-2xl">
      <h2 className="text-2xl font-bold text-[#3A53A5]">Afspraakdetails</h2>

      <Section title="Afspraak" icon="📅">
        <InfoRow label="Datum">{formatDateToDMY(appointment.date)}</InfoRow>
        <InfoRow label="Tijdstip">{appointment.moment}</InfoRow>
        {appointment.client.client_remarks && (
          <InfoRow label="Opmerking klant">
            {appointment.client.client_remarks}
          </InfoRow>
        )}
      </Section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Section title="Huisdier" icon="🐾">
          <InfoRow label="Diersoort">
            {appointment.species_groom_option.species.name}
          </InfoRow>
          <InfoRow label="Naam">{appointment.animal.name}</InfoRow>
          <InfoRow label="Ras">{appointment.animal.breed}</InfoRow>
          <InfoRow label="Trimoptie">
            {appointment.species_groom_option.groom_option.name}
          </InfoRow>
          {appointment.animal.animal_remarks && (
            <InfoRow label="Opmerking dier">
              {appointment.animal.animal_remarks}
            </InfoRow>
          )}
        </Section>

        <Section title="Klant" icon="👤">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <InfoRow label="Naam">
                {appointment.client.first_name} {appointment.client.last_name}
              </InfoRow>
              <InfoRow label="Email">{appointment.client.email}</InfoRow>
              <InfoRow label="Telefoonnummer">
                {appointment.client.phone}
              </InfoRow>
            </div>

            <div className="space-y-4">
              <InfoRow label="Adres">
                {appointment.client.street} {appointment.client.house_number}
                {appointment.client.house_number_suffix &&
                  ` ${appointment.client.house_number_suffix}`}
              </InfoRow>
              <InfoRow label="Postcode & Woonplaats">
                {appointment.client.postal_code} {appointment.client.city}
              </InfoRow>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300 hover:border-[#A1D8A1]">
      <h3 className="text-lg font-semibold text-[#3A53A5] flex items-center gap-2 mb-4">
        {icon && <span>{icon}</span>}
        {title}
      </h3>
      <dl className="space-y-4">{children}</dl>
    </div>
  );
}

function InfoRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <dt className="text-sm font-medium text-[#333333]">{label}</dt>
      <dd className="text-base text-gray-800">{children}</dd>
    </div>
  );
}
