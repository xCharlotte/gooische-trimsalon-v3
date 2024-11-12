import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index() {
  return (
    <>
      <AuthenticatedLayout>
        <Head title="Blog" />

        <div className="py-12">
          <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
            <div className="flex justify-end pb-4">
              <Link href={route("blogs.create")}>
                <PrimaryButton>Nieuw artikel</PrimaryButton>
              </Link>
            </div>
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-5">
              <div
                role="table"
                aria-label="Product list table"
                className="relative overflow-x-auto shadow-md sm:rounded-lg"
              >
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3"
                        aria-label="Product name"
                      >
                        Titel
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3"
                        aria-label="Category"
                      >
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3" aria-label="Price">
                        Content
                      </th>
                      <th scope="col" className="px-6 py-3" aria-label="Action">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td className="px-6 py-4">Silver</td>
                      <td className="px-6 py-4">Laptop</td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-gray-50 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Microsoft Surface Pro
                      </th>
                      <td className="px-6 py-4">White</td>
                      <td className="px-6 py-4">Laptop PC</td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Magic Mouse 2
                      </th>
                      <td className="px-6 py-4">Black</td>
                      <td className="px-6 py-4">Accessories</td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-gray-50 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Google Pixel Phone
                      </th>
                      <td className="px-6 py-4">Gray</td>
                      <td className="px-6 py-4">Phone</td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Apple Watch 5
                      </th>
                      <td className="px-6 py-4">Red</td>
                      <td className="px-6 py-4">Wearables</td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </>
  );
}
