import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { formatDateToLongNL } from "@/lib/dateFormatter";
import { AppointmentData } from "@/types/AppointmentData";

export default function Dashboard({
  auth,
  appointments,
  animalsPerMonth,
}: PageProps & {
  appointments: AppointmentData[];
  animalsPerMonth: Record<string, number>;
}) {
  const stats = Object.entries(animalsPerMonth).map(([name, count]) => {
    let emoji = "🐰";
    if (name.toLowerCase().includes("kat")) emoji = "🐱";
    if (name.toLowerCase().includes("hond")) emoji = "🐶";

    return {
      emoji,
      label: name.charAt(0).toUpperCase() + name.slice(1),
      count,
    };
  });

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Goedemorgen";
    if (hour < 18) return "Goedemiddag";
    return "Goedenavond";
  };

  const isPastAppointment = (date: string) => {
    const appointmentDate = new Date(date);
    const today = new Date();
    return appointmentDate < today;
  };

  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <div className="bg-white overflow-hidden shadow rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-900">
              {getGreeting()} {auth.user.name}!
            </h1>
            <p className="text-gray-600">
              Alles wat je vandaag nodig hebt op een rij.
            </p>
          </div>

          {/* Animal Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((item) => (
              <div
                key={item.label}
                className="bg-white overflow-hidden shadow rounded-lg p-6 flex items-center justify-between"
              >
                <div className="text-4xl">{item.emoji}</div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{item.count}</div>
                  <div className="text-gray-500">{item.label} deze maand</div>
                </div>
              </div>
            ))}
          </div>

          {/* Weekly Appointments */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Afspraken deze week</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4">Datum</th>
                      <th className="text-left py-2 px-4">Tijd</th>
                      <th className="text-left py-2 px-4">Eigenaar</th>
                      <th className="text-left py-2 px-4">Dier</th>
                      <th className="text-left py-2 px-4">Trimoptie</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((appt, index) => (
                      <tr
                        key={index}
                        className={`border-b hover:bg-gray-50 ${
                          isPastAppointment(appt.date)
                            ? "line-through text-gray-500"
                            : ""
                        }`}
                      >
                        <td className="py-2 px-4">
                          {formatDateToLongNL(appt.date)}
                        </td>
                        <td className="py-2 px-4">{appt.moment}</td>
                        <td className="py-2 px-4">
                          {appt.client.first_name} {appt.client.last_name}
                        </td>
                        <td className="py-2 px-4">
                          {appt.animal.name} (
                          {appt.species_groom_option.species.name})
                        </td>
                        <td className="py-2 px-4">
                          {appt.species_groom_option.groom_option.name}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {appointments.length === 0 && (
                  <p className="text-gray-500 mt-4">
                    Geen afspraken deze week.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
