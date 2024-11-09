import NavLink from "@/Components/Buttons/NavLink";
import ApplicationLogo from "@/Components/UI/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Sidebar() {
  return (
    <div className="min-h-screen w-1/6 bg-gray-50 p-4">
      <div className="flex space-x-2 flex-row items-center pb-5">
        <Link href="/">
          <ApplicationLogo className="w-16 h-16" />
        </Link>
        <p className="uppercase text-xs font-medium">Admin dashboard</p>
      </div>
      <div className="py-5">
        <NavLink
          href={route("dashboard")}
          active={route().current("dashboard")}
        >
          Dashboard
        </NavLink>
      </div>
    </div>
  );
}
