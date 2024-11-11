import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index() {
  return (
    <>
      <AuthenticatedLayout>
        <Head title="Blog" />
        Haloooo blog
      </AuthenticatedLayout>
    </>
  );
}
