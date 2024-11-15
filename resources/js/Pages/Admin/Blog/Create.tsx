import { useState } from "react";
import TextInput from "@/Components/Forms/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import SecondaryButton from "@/Components/Buttons/SecondaryButton";

export default function Create() {
  const [values, setValues] = useState({
    title: "",
    category: "",
    content: "",
    slug: "",
  });

  function handleChange(e: any) {
    const key = e.target.id;
    const value = e.target.value;
    setValues({ ...values, [key]: value });
  }

  function handleOnSubmit(e: any) {
    e.preventDefault();
    // Send the form data to the server
    router.post("/admin/blogs", values);
  }
  return (
    <AuthenticatedLayout>
      <Head title="Blog" />
      <div className="py-12">
        <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden rounded-lg p-5">
            <form onSubmit={handleOnSubmit}>
              <TextInput
                id="title"
                value={values.title}
                placeholder="Titel"
                onChange={handleChange}
              />
              <TextInput
                id="category"
                value={values.category}
                placeholder="Categorie"
                onChange={handleChange}
              />
              <TextInput
                id="content"
                value={values.content}
                placeholder="Content"
                onChange={handleChange}
              />
              <TextInput
                id="slug"
                value={values.slug}
                placeholder="Slug"
                onChange={handleChange}
              />
              <SecondaryButton type="submit">Opslaan</SecondaryButton>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
