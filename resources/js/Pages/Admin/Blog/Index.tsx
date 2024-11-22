import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import Table from "@/Components/UI/Table";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import Pagination from "@/Components/UI/Pagination";

export type BlogData = {
  id: number;
  title: string;
  image: string;
  category: string;
  created_at: string;
};

export type BlogType = {
  blogs: {
    data: BlogData | BlogData[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
};

export default function Index({ blogs }: BlogType) {
  const columns = ["image", "title", "category", "created_at"];

  const columnLabels = {
    image: "Afbeelding",
    title: "Titel",
    category: "Categorie",
    created_at: "Aangemaakt op",
  };

  console.log("blogg", blogs);

  const handleRowClick = (blog: BlogData) => {
    router.get(route("blogs.edit", { blog: blog.id })); // Navigeren naar detailpagina
  };

  const handleEdit = (blog: BlogData) => {
    router.get(route("blogs.edit", { blog: blog.id }));
  };

  const handleDelete = (blog: BlogData) => {
    if (confirm("Are you sure you want to delete?")) {
      router.delete(route("blogs.destroy", { blog: blog.id }));
    }
  };

  const handlePageChange = (page: number) => {
    router.get(route("blogs.index"), { page });
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
                columnLabels={columnLabels}
                data={blogs.data}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onRowClick={handleRowClick}
              />

              <Pagination
                currentPage={blogs.current_page}
                lastPage={blogs.last_page}
                total={blogs.total}
                perPage={blogs.per_page}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </>
  );
}
