import { Head, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import OptionsLayout from "@/Components/UI/OptionsLayout";
import { ToastError, ToastSuccess } from "@/Components/Notify/Toast";
import { ConfirmModal } from "@/Components/Notify/ConfirmModal";

export type GroomOptionsRowData = {
  groomOptions: {
    id: number;
    name: string;
  };
};

export default function Index({ groomOptions }: GroomOptionsRowData) {
  const columnLabels = {
    name: "Naam",
  };

  const handleAddGroomOptions = (value: string | Date) => {
    // Can either be of type string or date
    const name = typeof value === "string" ? value : value.toISOString();
    router.post(
      route("groomoptions.store"),
      { name },
      {
        onSuccess: () => {
          ToastSuccess("Trimoptie toegevoegd!");
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

  const handleDeleteGroomOption = async (id: number) => {
    const result = await ConfirmModal({
      title: "Weet je het zeker?",
      text: "Deze actie kan niet ongedaan gemaakt worden.",
      confirmText: "Ja, verwijderen",
      cancelText: "Annuleren",
    });

    if (result.isConfirmed) {
      router.delete(route("groomoptions.destroy", id), {
        onSuccess: () => {
          ToastSuccess("Trimoptie succesvol verwijderd!");
        },
        onError: () => {
          ToastError("error", "Er is iets misgegaan bij het verwijderen.");
        },
      });
    }
  };

  return (
    <AuthenticatedLayout>
      <Head title="Trimopties" />

      <OptionsLayout<GroomOptionsRowData>
        title="Trimopties Beheren"
        placeholder="Voer een trimoptie in"
        type="text"
        tableTitle="Huidige Trimopties"
        columnNames={["name"]}
        columnLabels={columnLabels}
        data={groomOptions}
        onSubmit={handleAddGroomOptions}
        onDelete={handleDeleteGroomOption}
        emptyMessage="Geen trimopties gevonden."
      />
    </AuthenticatedLayout>
  );
}
