import Sidebar from "@/Components/UI/Sidebar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

export type BlogProps = {
  auth: PageProps;
};
export default function Index({ auth }: any) {
  return (
    <>
      <AuthenticatedLayout
        user={auth.user} // TODO: FIX THIS!! Needs to be dynamic from AuthenticatedLayout
        header={
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Blog
          </h2>
        }
      >
        Haloooo blog
      </AuthenticatedLayout>
    </>
  );
}
