import { Head } from "@inertiajs/react";
import Hero from "../Components/Hero";
import AppLayout from "@/Layouts/AppLayout";

export type BlogData = {
  blog: {
    id: number;
    title: string;
    content: string;
    image: string;
    category: string;
    created_at: string;
  };
};

export default function Show({ blog }: BlogData) {
  return (
    <>
      <Head title={blog.title} />
      <AppLayout
        hero={
          <Hero
            title={blog.title}
            imageUrl={blog.image}
            imagePositionClass="lg:bg-[center_top_-16rem]"
          />
        }
      >
        <section className="py-8 md:py-14 lg:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto flex flex-col gap-12">
            <div className="flex flex-col items-center">
              <h1 className="text-2xl text center font-bold mb-4">
                {blog.title}
              </h1>
              <p className="text-gray-700">
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              </p>
            </div>
          </div>
        </section>
      </AppLayout>
    </>
  );
}
