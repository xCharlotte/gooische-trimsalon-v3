import { useState } from "react";
import { Head, router, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TextInput from "@/Components/Forms/TextInput";

const Index = () => {
  const { closedDays } = usePage().props;
  const [name, setName] = useState("");

  const columns = ["Gesloten dag"];

  const columnLabels = {
    closedDay: "Gesloten dag",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.post(
      route("closed_days.store"),
      { name },
      {
        onSuccess: () => setName(""),
      }
    );
  };

  const handleDelete = (id) => {
    router.delete(route("closed_days.destroy", id));
  };

  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <>
      <AuthenticatedLayout>
        <Head title="Gesloten dagen" />

        <div className="bg-neutral min-h-screen p-6 font-sans">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-primary mb-6">
              Gesloten dagen
            </h1>

            <form onSubmit={handleSubmit} className="mb-8">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-dark mb-2"
              >
                Voeg een gesloten dag toe
              </label>
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <label htmlFor="date" className="mb-2 text-sm text-gray-700">
                    Select a date
                  </label>
                  <TextInput
                    id="date"
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="w-full"
                  />
                  {selectedDate && (
                    <p className="mt-2 text-sm text-gray-600">
                      Selected date: {selectedDate}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white font-semibold px-6 py-2 rounded-lg hover:bg-primary-dark transition"
                >
                  Add
                </button>
              </div>
            </form>

            <div className="bg-neutral rounded-lg shadow-inner p-6">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                Lijst van gesloten dagen
              </h2>
              <ul className="divide-y divide-gray-200">
                {closedDays.length > 0 ? (
                  closedDays.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center py-4"
                    >
                      <span className="text-dark text-lg">{item.name}</span>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-secondary font-medium hover:text-secondary-dark transition"
                      >
                        Delete
                      </button>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500">
                    Geen gesloten datum gevonden..
                  </p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </>
  );
};

export default Index;
