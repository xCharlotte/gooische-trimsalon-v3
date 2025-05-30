import NavLink from "@/Components/Buttons/NavLinkAdmin";
import ApplicationLogo from "@/Components/UI/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Sidebar() {
  return (
    <div className="h-full lg:w-[240px] bg-heavy-black text-white border-r border-gray-100 p-4">
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
          href={route("appointments.index")}
          active={[
            "appointments.index",
            "appointments.update",
            "appointments.edit",
          ].some((r) => route().current(r))}
        >
          Afsprakenoverzicht
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
          Blogposts
        </NavLink>

        <div className="block py-5">
          <div className="border-t border-gray-700" />
        </div>

        <div className="flex flex-col space-y-1">
          <h3 className="text-xs font-semibold text-gray-400 uppercase px-4">
            Opties
          </h3>
          <NavLink
            href={route("species.index")}
            active={["species.index"].some((r) => route().current(r))}
          >
            Dieren
          </NavLink>
          <NavLink
            href={route("groomoptions.index")}
            active={["groomoptions.index"].some((r) => route().current(r))}
          >
            Trimopties
          </NavLink>
          <NavLink
            href={route("closed_days.index")}
            active={["closed_days.index"].some((r) => route().current(r))}
          >
            Gesloten dagen
          </NavLink>
        </div>
      </div>
    </div>
  );
}
