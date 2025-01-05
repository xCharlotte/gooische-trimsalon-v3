import { useState } from "react";
import { Head, router, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Index = () => {
  const { groomOptions } = usePage().props;
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.post(
      route("groomOptions.store"),
      { name },
      {
        onSuccess: () => setName(""),
      }
    );
  };

  const handleDelete = (id) => {
    router.delete(route("groomOptions.destroy", id));
  };

  return (
    <>
      <AuthenticatedLayout>
        <Head title="Trimopties" />

        <div className="bg-neutral min-h-screen p-6 font-sans">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-primary mb-6">Trimopties</h1>

            <form onSubmit={handleSubmit} className="mb-8">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-dark mb-2"
              >
                Voeg een trimoptie toe
              </label>
              <div className="flex items-center gap-4">
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Voeg trimoptie toe"
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-dark focus:outline-none focus:ring-2 focus:ring-primary-light"
                  required
                />
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
                Lijst van trimopties
              </h2>
              <ul className="divide-y divide-gray-200">
                {groomOptions.length > 0 ? (
                  groomOptions.map((item) => (
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
                    Geen trimopties gevoegd. Voeg een trimoptie toe.
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
