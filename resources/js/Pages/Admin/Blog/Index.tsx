import { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Table from "@/Components/UI/Table";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import Pagination from "@/Components/UI/Pagination";
import Search from "@/Components/UI/Search";
import { ConfirmModal } from "@/Components/Notify/ConfirmModal";
import { ToastError, ToastSuccess } from "@/Components/Notify/Toast";

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
  const [loading, setLoading] = useState(false);

  const columnLabels = {
    image: "Afbeelding",
    title: "Titel",
    category: "Categorie",
    created_at: "Aangemaakt op",
  };

  const handleRowClick = (blog: BlogData) => {
    router.get(route("blogs.edit", { blog: blog.id }));
  };

  const handleEdit = (blog: BlogData) => {
    router.get(route("blogs.edit", { blog: blog.id }));
  };

  const handleDelete = async (blog: BlogData) => {
    const result = await ConfirmModal({
      title: "Weet je het zeker?",
      text: "Deze actie kan niet ongedaan gemaakt worden.",
      confirmText: "Ja, verwijderen",
      cancelText: "Annuleren",
    });

    if (result.isConfirmed) {
      router.delete(route("blogs.destroy", { blog: blog.id }), {
        onSuccess: () => {
          ToastSuccess("Blogpost succesvol verwijderd!");
        },
        onError: () => {
          ToastError("error", "Er is iets misgegaan bij het verwijderen.");
        },
        preserveScroll: true,
      });
    }
  };

  const handlePageChange = (page: number) => {
    router.get(route("blogs.index"), { page }, { preserveScroll: true });
  };

  const handleSearch = (query: string) => {
    router.get(
      route("blogs.index"),
      { search: query },
      { replace: true, preserveState: true, onFinish: () => setLoading(false) }
    );
  };

  return (
    <>
      <AuthenticatedLayout>
        <Head title="Blog" />

        <div className="py-4">
          <div className="max-w-8xl mx-auto sm:px-6 lg:px-4">
            <div className="bg-white overflow-hidden rounded-lg p-4 md:p-8 shadow-lg">
              <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
                <h1 className="font-medium text-2xl md:text-4xl">Blogposts</h1>
                <div className="flex flex-col gap-2 w-full md:flex-row md:gap-2 md:items-center md:w-auto">
                  <div className="flex-shrink-0 w-full md:w-auto">
                    <Search onSearch={handleSearch} width="min-w-full" />
                  </div>
                  <div className="flex-shrink-0 w-full md:w-auto">
                    <Link href={route("blogs.create")}>
                      <PrimaryButton className="w-full md:w-auto">
                        Nieuw artikel
                      </PrimaryButton>
                    </Link>
                  </div>
                </div>
              </div>
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
