import Footer from "@/Pages/Components/Footer";
import GalleryDivider from "@/Pages/Components/GalleryDivider";
import Navbar from "@/Pages/Components/Navbar";

export type AppLayoutProps = {
  children: React.ReactNode;
  hero?: React.ReactNode;
};
export default function AppLayout({ children, hero }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-20">
        {hero && hero}
        <main className="flex-grow">{children}</main>
        <GalleryDivider />
        <Footer />
      </div>
    </div>
  );
}
