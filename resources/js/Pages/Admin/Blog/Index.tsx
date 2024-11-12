import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Table from "@/Components/UI/Table";
import data from "./Data/TableData.json";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";

export default function ReusableTable({ blogs }: any) {
  const columns = ["image", "title", "category", "created_at"];

  console.log("blogg", blogs);

  const handleEdit = (row) => {
    console.log("Edit:", row);
  };

  const handleDelete = (row) => {
    console.log("Delete:", row);
  };

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

            <div className="bg-white overflow-hidden rounded-lg p-5">
              <Table
                columns={columns}
                data={blogs.data}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </>
  );
}
