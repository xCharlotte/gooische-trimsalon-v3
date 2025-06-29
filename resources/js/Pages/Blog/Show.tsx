import { Head } from "@inertiajs/react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import GalleryDivider from "../Components/GalleryDivider";

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
    <div className="flex flex-col min-h-screen">
      <Head title={blog.title} />
      <Navbar />
      <Hero
        title={blog.title}
        imageUrl={blog.image}
        imagePositionClass="lg:bg-[center_top_-16rem]"
      />
      <section className="py-8 md:py-14 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-700">
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </p>
          </div>
        </div>
      </section>
      <GalleryDivider />
      <Footer />
    </div>
  );
}
