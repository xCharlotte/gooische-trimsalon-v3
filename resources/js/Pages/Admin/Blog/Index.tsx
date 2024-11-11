import Sidebar from "@/Components/UI/Sidebar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export type BlogProps = {
  auth: PageProps;
};
export default function Index({ auth }: any) {
  return (
    <>
      <AuthenticatedLayout>
        <Head title="Blog" />
        Haloooo blog
      </AuthenticatedLayout>
    </>
  );
}
