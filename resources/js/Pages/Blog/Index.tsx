import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import GalleryDivider from "../Components/GalleryDivider";
import Card from "@/Components/UI/Card";

export type BlogType = {
  blogs: {
    id: number;
    title: string;
    content: string;
    image: string;
    category: string;
    created_at: string;
  }[];
};

export default function Index({ blogs }: BlogType) {
  console.log("Blogs data:", blogs);
  return (
    <div className="flex flex-col min-h-screen">
      <Head title="Nieuws" />
      <Navbar />
      <Hero
        title="Nieuwsberichten"
        imageUrl="images/news-hero.jpg"
        imagePositionClass="lg:bg-[center_top_-16rem]"
      />
      <section className="py-8 md:py-14 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <Card
                  key={blog.id}
                  title={blog.title}
                  text={blog.content}
                  image={blog.image}
                  category={blog.category}
                  createdAt={blog.created_at}
                />
              ))
            ) : (
              <p className="text-gray-500">Geen nieuwsberichten gevonden.</p>
            )}
          </div>
        </div>
      </section>
      <GalleryDivider />
      <Footer />
    </div>
  );
}
