import NavLink from "@/Components/Buttons/NavLink";
import ApplicationLogo from "@/Components/UI/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Sidebar() {
  return (
    <div className="h-full lg:w-[240px] md:w-1/6 bg-heavy-black text-white border-r border-gray-100 p-4">
      <div className="flex flex-col justify-center items-center gap-y-3">
        <div className="flex">
          <Link href="/">
            <ApplicationLogo className="w-24" />
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm font-medium">Gooische Trimsalon</p>
          <p className="text-xs font-medium text-gray-500">Admin dashboard</p>
        </div>
      </div>
      <div className="flex flex-col space-y-1 py-5">
        <NavLink
          href={route("dashboard")}
          active={route().current("dashboard")}
        >
          Dashboard
        </NavLink>
        <NavLink
          href={route("blogs.index")}
          active={[
            "blogs.index",
            "blogs.create",
            "blogs.update",
            "blogs.edit",
          ].some((r) => route().current(r))}
        >
          Blog
        </NavLink>
      </div>
    </div>
  );
}
