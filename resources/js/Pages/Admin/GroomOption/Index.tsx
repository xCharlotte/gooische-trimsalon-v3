import { Head, router, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import OptionsLayout from "@/Components/UI/OptionsLayout";

export default function Index() {
  const { groomOptions } = usePage().props;

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
        onSuccess: () => console.log("TRIMOPTIE toegevoegd!"),
      }
    );
  };

  const handleDeleteGroomOption = (id: number) => {
    router.delete(route("groomoptions.destroy", id));
  };

  return (
    <AuthenticatedLayout>
      <Head title="Trimopties" />

      <OptionsLayout
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
