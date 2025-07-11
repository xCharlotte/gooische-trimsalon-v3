import { useState, useEffect } from "react";
import TextInput from "@/Components/Forms/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, usePage } from "@inertiajs/react";
import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import TextEditor from "@/Components/Forms/TextEditor";
import { ToastError, ToastSuccess } from "@/Components/Notify/Toast";

export default function Create() {
  const [formValue, setFormValue] = useState({
    title: "",
    category: "",
    content: "",
    slug: "",
    image: null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (formValue.title) {
      const slug = formValue.title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
      setFormValue((prev) => ({ ...prev, slug }));
    }
  }, [formValue.title]);

  function handleChange(e: any, key?: string) {
    if (key) {
      setFormValue({ ...formValue, [key]: e });
    } else {
      const key = e.target.id;
      const value = e.target.value;
      setFormValue({ ...formValue, [key]: value });
    }
  }

  function handleImageChange(e: any) {
    const file = e.target.files[0];
    if (file) {
      setFormValue({ ...formValue, image: file });
      setImagePreview(URL.createObjectURL(file)); // Create a temporary preview URL
    }
  }

  function handleOnSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", formValue.title);
    formData.append("slug", formValue.slug);
    formData.append("category", formValue.category);
    formData.append("content", formValue.content);

    if (formValue.image) {
      formData.append("image", formValue.image);
    }

    router.post("/admin/blogs", formData, {
      onSuccess: () => {
        setErrors({});
        ToastSuccess("Blog bericht aangemaakt!");
        router.visit(route("blogs.index"));
      },
      onError: (errors) => {
        setErrors(errors);
        ToastError(
          "Error!",
          "Er is iets misgegaan. Check de errors of neem anders contact op met Charlotte!"
        );
      },
    });
  }

  return (
    <AuthenticatedLayout>
      <Head title="Nieuwe Blog" />
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-md rounded-lg p-8 space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Nieuw Blog bericht
            </h1>
            <p className="text-gray-600">
              Vul de onderstaande velden in om een nieuw artikel aan te maken.
            </p>

            {Object.keys(errors).length > 0 && (
              <div className="mb-4 p-4 border border-red-400 bg-red-100 text-red-700 rounded">
                <ul className="list-disc list-inside">
                  {Object.entries(errors).map(([field, message]) => (
                    <li key={field}>
                      <strong>{field}:</strong> {message}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <form onSubmit={handleOnSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Titel
                </label>
                <TextInput
                  id="title"
                  name="title"
                  value={formValue.title}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="slug"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Slug
                </label>
                <TextInput
                  id="slug"
                  name="slug"
                  value={formValue.slug}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Categorie
                </label>
                <TextInput
                  id="category"
                  name="category"
                  value={formValue.category}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Content
                </label>
                <TextEditor
                  id="content"
                  value={formValue.content}
                  onChange={(content) => handleChange(content, "content")}
                />
              </div>

              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Afbeelding Uploaden
                </label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-lg file:border-0
                    file:text-sm file:font-semibold
                    file:bg-indigo-50 file:text-primary
                    hover:file:bg-primary-dark"
                />
                {imagePreview && (
                  <div className="mt-4">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full max-h-64 object-cover rounded-md shadow-md"
                    />
                  </div>
                )}
              </div>

              <div className="flex justify-end">
                <SecondaryButton
                  type="submit"
                  className="bg-primary text-white hover:bg-primary-dark transition-colors px-6 py-2 rounded-lg shadow-md"
                >
                  Opslaan
                </SecondaryButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
