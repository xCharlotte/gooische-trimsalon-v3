import { router, Head } from "@inertiajs/react";
import OptionsLayout from "@/Components/UI/OptionsLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ToastError, ToastSuccess } from "@/Components/Notify/Toast";
import { ConfirmModal } from "@/Components/Notify/ConfirmModal";

export type SpeciesRowData = {
  species: {
    id: number;
    name: string;
  };
};

export default function Index({ species }: SpeciesRowData) {
  const columnLabels = {
    name: "Naam",
  };

  const handleAddSpecies = (value: string | Date) => {
    // Can either be of type string or date
    const name = typeof value === "string" ? value : value.toISOString();
    router.post(
      route("species.store"),
      { name },
      {
        onSuccess: () => {
          ToastSuccess("Diersoort toegevoegd!");
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

  const handleDeleteSpecies = async (id: number) => {
    const result = await ConfirmModal({
      title: "Weet je het zeker?",
      text: "Deze actie kan niet ongedaan gemaakt worden.",
      confirmText: "Ja, verwijderen",
      cancelText: "Annuleren",
    });

    if (result.isConfirmed) {
      router.delete(route("species.destroy", id), {
        onSuccess: () => {
          ToastSuccess("Diersoort succesvol verwijderd!");
        },
        onError: () => {
          ToastError("error", "Er is iets misgegaan bij het verwijderen.");
        },
      });
    }
  };

  return (
    <AuthenticatedLayout>
      <Head title="Dieren" />

      <OptionsLayout<SpeciesRowData>
        title="Diersoorten Beheren"
        placeholder="Voer een diersoort in"
        type="text"
        tableTitle="Huidige Diersoorten"
        columnNames={["name"]}
        columnLabels={columnLabels}
        data={species}
        onSubmit={handleAddSpecies}
        onDelete={handleDeleteSpecies}
        emptyMessage="Geen diersoorten gevonden."
      />
    </AuthenticatedLayout>
  );
}
