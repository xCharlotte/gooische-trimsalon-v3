import { Head, router } from "@inertiajs/react";
import Hero from "../Components/Hero";
import Card from "@/Components/UI/Card";
import Pagination from "@/Components/UI/Pagination";
import AppLayout from "@/Layouts/AppLayout";

export type BlogData = {
  id: number;
  title: string;
  slug: string;
  content: string;
  image: string;
  category: string;
  created_at: string;
}[];

export type BlogType = {
  blogs: {
    data: BlogData;
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
};

export default function Index({ blogs }: BlogType) {
  const handlePageChange = (page: number) => {
    router.get(
      route("blog.index"),
      { page },
      {
        preserveScroll: false,
        onSuccess: () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
      }
    );
  };

  console.log("Blogs data:", blogs);
  return (
    <>
      <Head title="Nieuws" />
      <AppLayout
        hero={
          <Hero
            title="Nieuwsberichten"
            imageUrl="images/news-hero.jpg"
            imagePositionClass="lg:bg-[center_top_-16rem]"
          />
        }
      >
        <section className="py-8 md:py-14 lg:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto flex flex-col gap-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {blogs.data.length > 0 ? (
                blogs.data.map((blog) => (
                  <Card
                    key={blog.id}
                    title={blog.title}
                    text={blog.content}
                    image={blog.image}
                    category={blog.category}
                    createdAt={blog.created_at}
                    url={`/nieuws/${blog.slug}`}
                  />
                ))
              ) : (
                <p className="text-gray-500">Geen nieuwsberichten gevonden.</p>
              )}
            </div>
            <Pagination
              currentPage={blogs.current_page}
              lastPage={blogs.last_page}
              onPageChange={handlePageChange}
              showTotal={false}
            />
          </div>
        </section>
      </AppLayout>
    </>
  );
}
