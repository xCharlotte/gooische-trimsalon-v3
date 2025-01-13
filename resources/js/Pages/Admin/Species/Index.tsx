import { usePage, router, Head } from "@inertiajs/react";
import OptionsLayout from "@/Components/UI/OptionsLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Index() {
  const { species } = usePage().props;

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
        onSuccess: () => console.log("Diersoort toegevoegd!"),
      }
    );
  };

  const handleDeleteSpecies = (id: number) => {
    router.delete(route("species.destroy", id));
  };

  return (
    <AuthenticatedLayout>
      <Head title="Dieren" />

      <OptionsLayout
        title="Diersoorten Beheren"
        placeholder="Voer een diersoort in"
        type="text"
        tableTitle="Huidige Diersoorten"
        columnNames={["name"]}
        data={species}
        onSubmit={handleAddSpecies}
        onDelete={handleDeleteSpecies}
        columnLabels={columnLabels}
      />
    </AuthenticatedLayout>
  );
}
