import { Head, router, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import OptionsLayout from "@/Components/UI/OptionsLayout";

export default function Index() {
  const { closedDays } = usePage().props;

  const columnLabels = {
    date: "Gesloten dagen",
  };

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleAddClosedDay = (value: string | Date) => {
    const date = value instanceof Date ? formatDate(value) : value;

    router.post(
      route("closed_days.store"),
      { date },
      {
        onSuccess: () => console.log("Gesloten dag toegevoegd!"),
      }
    );
  };

  const handleDeleteClosedDay = (id: number) => {
    router.delete(route("closed_days.destroy", id));
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
      />
    </AuthenticatedLayout>
  );
}
