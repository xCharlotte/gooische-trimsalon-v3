import { useState, useEffect } from "react";
import TextInput from "@/Components/Forms/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import TextEditor from "@/Components/Forms/TextEditor";

export type BlogType = {
  blog: {
    id: number;
    title: string;
    category: string;
    content: string;
    slug: string;
    image: string;
  };
};

export default function Edit({ blog }: BlogType) {
  const [values, setValues] = useState({
    title: blog.title || "",
    category: blog.category || "",
    content: blog.content || "",
    slug: blog.slug || "",
    image: blog.image || null,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (values.title) {
      const slug = values.title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
      setValues((prev) => ({ ...prev, slug }));
    }
  }, [values.title]);

  useEffect(() => {
    if (blog.image) {
      setImagePreview(blog.image);
    }
  }, [blog.image]);

  function handleChange(e: any, key?: string) {
    if (key) {
      setValues({ ...values, [key]: e });
    } else {
      const key = e.target.id;
      const value = e.target.value;
      setValues({ ...values, [key]: value });
    }
  }

  function handleImageChange(e: any) {
    const file = e.target.files[0];

    if (file) {
      setValues({ ...values, image: file });
      setImagePreview(URL.createObjectURL(file));
    } else if (blog.image) {
      setImagePreview(blog.image);
    }
  }

  function handleOnSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData();

    for (const key in values) {
      formData.append(key, values[key]);
    }

    router.put(`/admin/blogs/${blog.id}`, formData);
  }

  return (
    <AuthenticatedLayout>
      <Head title="Nieuwe Blog" />
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-md rounded-lg p-8 space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Bewerk: {blog.title}
            </h1>
            <p className="text-gray-600">
              Pas de velden hieronder aan om het artikel te bewerken.
            </p>

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
                  value={values.title}
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
                  value={values.slug}
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
                  value={values.category}
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
                  value={values.content}
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
                    file:bg-indigo-50 file:text-indigo-700
                    hover:file:bg-indigo-100"
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
                  className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors px-6 py-2 rounded-lg shadow-md"
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
