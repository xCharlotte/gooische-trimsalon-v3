import NavLink from "@/Components/Buttons/NavLink";
import ApplicationLogo from "@/Components/UI/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Sidebar() {
  return (
    <div className="min-h-screen w-1/6 bg-white border-r border-gray-100 p-4">
      <div className="flex space-x-2 flex-row items-center pb-5">
        <Link href="/">
          <ApplicationLogo className="w-16" />
        </Link>
        <p className="uppercase text-xs font-medium">Admin dashboard</p>
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
          active={route().current("blogs.index")}
        >
          Blog
        </NavLink>
      </div>
    </div>
  );
}
