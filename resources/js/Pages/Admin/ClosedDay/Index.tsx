import { Head, router, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import OptionsLayout from "@/Components/UI/OptionsLayout";
import { formatDate } from "@/lib/dateFormatter";
import { ToastError, ToastSuccess } from "@/Components/Notify/Toast";
import { ConfirmModal } from "@/Components/Notify/ConfirmModal";

export type ClosedDaysProps = {
  closedDays: { id: number; date: string }[];
};

export default function Index() {
  const { closedDays = [] } = usePage().props as unknown as {
    closedDays: { id: number; date: string }[];
  };

  const columnLabels = {
    date: "Gesloten dagen",
  };

  const handleAddClosedDay = (value: string | Date) => {
    const date = value instanceof Date ? formatDate(value) : value;

    router.post(
      route("closed_days.store"),
      { date },
      {
        onSuccess: () => {
          ToastSuccess("Gesloten dag toegevoegd!");
        },
        onError: () => {
          ToastError(
            "Error!",
            "Er is iets mis gegaan. Neem contact op met de admin!"
          );
        },
      }
    );
  };

  const handleDeleteClosedDay = async (id: number) => {
    const result = await ConfirmModal({
      title: "Weet je het zeker?",
      text: "Deze actie kan niet ongedaan gemaakt worden.",
      confirmText: "Ja, verwijderen",
      cancelText: "Annuleren",
    });

    if (result.isConfirmed) {
      router.delete(route("closed_days.destroy", id), {
        onSuccess: () => {
          ToastSuccess("Vrije dag succesvol verwijderd!");
        },
        onError: () => {
          ToastError("error", "Er is iets misgegaan bij het verwijderen.");
        },
      });
    }
  };

  return (
    <AuthenticatedLayout>
      <Head title="Gesloten dagen" />

      <OptionsLayout
        title="Gesloten dagen beheren"
        placeholder="Selecteer een datum"
        type="date"
        tableTitle="Lijst van gesloten dagen"
        columnNames={["date"]}
        columnLabels={columnLabels}
        data={closedDays}
        emptyMessage="Geen gesloten dagen gevonden."
        onSubmit={handleAddClosedDay}
        onDelete={handleDeleteClosedDay}
        closedDays={closedDays}
      />
    </AuthenticatedLayout>
  );
}
