import { useEffect, useState } from "react";
import { Head, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Table from "@/Components/UI/Table";
import Pagination from "@/Components/UI/Pagination";
import Search from "@/Components/UI/Search";
import { ConfirmModal } from "@/Components/Notify/ConfirmModal";
import { ToastError, ToastSuccess } from "@/Components/Notify/Toast";
import { formatDateToDMY } from "@/lib/dateFormatter";
import Show from "@/Pages/Admin/Appointment/Show";
import { AppointmentData } from "@/types/AppointmentData";

export type MappedAppointmentRow = {
  id: number;
  full_name: string;
  animal_name: string;
  groom_option: string;
  species: string;
  date: string;
  moment: string;
};

export type AppointmentType = {
  appointments: {
    data: AppointmentData | AppointmentData[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
};

export default function Index({ appointments }: AppointmentType) {
  const [selectedAppointment, setSelectedAppointment] =
    useState<AppointmentData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mappedAppointments = (
    Array.isArray(appointments.data) ? appointments.data : [appointments.data]
  ).map((appointment) => ({
    id: appointment.id,
    full_name: `${appointment.client.first_name} ${appointment.client.last_name}`,
    animal_name: appointment.animal?.name,
    groom_option: appointment.species_groom_option?.groom_option?.name,
    species: appointment.species_groom_option?.species?.name,
    date: formatDateToDMY(appointment.date),
    moment: appointment.moment,
  }));

  const columns = [
    "full_name",
    "animal_name",
    "species",
    "groom_option",
    "date",
    "moment",
  ];
  const [loading, setLoading] = useState(false);

  const columnLabels = {
    full_name: "Klantnaam",
    animal_name: "Naam dier",
    species: "Soort",
    groom_option: "Trimoptie",
    date: "Datum",
    moment: "Tijdstip",
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  const handleRowClick = (appointment: MappedAppointmentRow) => {
    handleShow(appointment);
  };

  const handleShow = (appointment: MappedAppointmentRow) => {
    const fullAppointment = (
      Array.isArray(appointments.data) ? appointments.data : [appointments.data]
    ).find((a) => a.id === appointment.id);

    if (fullAppointment) {
      setSelectedAppointment(fullAppointment);
      setIsModalOpen(true);
    }
  };

  const handleDelete = async (appointment: MappedAppointmentRow) => {
    const result = await ConfirmModal({
      title: "Weet je het zeker?",
      text: "Deze actie kan niet ongedaan gemaakt worden.",
      confirmText: "Ja, verwijderen",
      cancelText: "Annuleren",
    });

    if (result.isConfirmed) {
      router.delete(
        route("appointments.destroy", { appointment: appointment.id }),
        {
          onSuccess: () => {
            ToastSuccess("Afspraak succesvol verwijderd!");
          },
          onError: () => {
            ToastError("error", "Er is iets misgegaan bij het verwijderen.");
          },
          preserveScroll: true,
        }
      );
    }
  };

  const handlePageChange = (page: number) => {
    router.get(route("appointments.index"), { page }, { preserveScroll: true });
  };

  const handleSearch = (query: string) => {
    router.get(
      route("appointments.index"),
      { search: query },
      { replace: true, preserveState: true, onFinish: () => setLoading(false) }
    );
  };

  return (
    <>
      <AuthenticatedLayout>
        <Head title="Afspraken" />

        {isModalOpen && selectedAppointment && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="bg-[#F7F7F7] rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto p-6 relative transform transition-all duration-300 scale-95 animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-lg"
              >
                ✕
              </button>

              <Show appointment={selectedAppointment} />
            </div>
          </div>
        )}

        <div className="py-12 px-4 sm:px-0">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-4">
            <div className="bg-white overflow-hidden rounded-lg p-4 md:p-8 shadow-lg">
              <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                <h1 className="font-medium text-2xl md:text-4xl">
                  Afsprakenoverzicht
                </h1>
                <div className="flex flex-col gap-2 w-full md:flex-row justify-end md:gap-2">
                  <div className="flex-shrink-0 w-full md:w-3/6">
                    <Search onSearch={handleSearch} width="min-w-full" />
                  </div>
                </div>
              </div>
              <Table<MappedAppointmentRow>
                columns={columns}
                columnLabels={columnLabels}
                data={mappedAppointments}
                onShow={handleShow}
                onDelete={handleDelete}
                onRowClick={handleRowClick}
              />

              <Pagination
                currentPage={appointments.current_page}
                lastPage={appointments.last_page}
                total={appointments.total}
                perPage={appointments.per_page}
                onPageChange={handlePageChange}
                totalOnPage={mappedAppointments.length}
              />
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </>
  );
}
