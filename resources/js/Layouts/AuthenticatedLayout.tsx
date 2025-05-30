import { useState, PropsWithChildren, ReactNode } from "react";
import Dropdown from "@/Components/Forms/Dropdown";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { PageProps } from "@/types";
import Sidebar from "@/Components/UI/Sidebar";
import { AlignJustify } from "lucide-react";
import { usePage } from "@inertiajs/react";
import NavLink from "@/Components/Buttons/NavLinkAdmin";

export default function Authenticated({ children }: PropsWithChildren) {
  const { auth } = usePage<PageProps>().props;
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row">
      <div className="hidden sm:block">
        <Sidebar />
      </div>
      <div className="min-h-screen w-full bg-[#F3F1F1]">
        <nav className="bg-white border-b border-gray-100">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end h-16">
              <div className="hidden sm:flex sm:items-center sm:ms-6">
                <div className="ms-3 relative">
                  <Dropdown>
                    <Dropdown.Trigger>
                      <span className="inline-flex rounded-md">
                        <button
                          type="button"
                          onClick={toggleDropdown}
                          className="inline-flex items-center px-2 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                        >
                          {auth.user.name}
                        </button>
                      </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                      <Dropdown.Link href={route("profile.edit")}>
                        Profiel
                      </Dropdown.Link>
                      <Dropdown.Link
                        href={route("logout")}
                        method="post"
                        as="button"
                      >
                        Loguit
                      </Dropdown.Link>
                    </Dropdown.Content>
                  </Dropdown>
                </div>
              </div>

              <div className="-me-2 flex items-center sm:hidden">
                <button
                  onClick={() =>
                    setShowingNavigationDropdown(
                      (previousState) => !previousState
                    )
                  }
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                  <AlignJustify />
                </button>
              </div>
            </div>
          </div>

          <div
            className={
              (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden"
            }
          >
            <div className="sm:hidden">
              <div className="flex flex-col space-y-1 py-5">
                <NavLink
                  href={route("dashboard")}
                  active={route().current("dashboard")}
                >
                  Dashboard
                </NavLink>
                <NavLink
                  href={route("appointments.index")}
                  active={route().current("appointments.index")}
                >
                  Afsprakenoverzicht
                </NavLink>
                <NavLink
                  href={route("blogs.index")}
                  active={route().current("blogs.index")}
                >
                  Blog
                </NavLink>
              </div>
            </div>
            <div className="pt-4 pb-1 border-t border-gray-200">
              <div className="px-4">
                <div className="font-medium text-base text-gray-800">
                  {auth.user.name}
                </div>
                <div className="font-medium text-sm text-gray-500">
                  {auth.user.email}
                </div>
              </div>

              <div className="mt-3 space-y-1">
                <ResponsiveNavLink href={route("profile.edit")}>
                  Profiel
                </ResponsiveNavLink>
                <ResponsiveNavLink
                  method="post"
                  href={route("logout")}
                  as="button"
                >
                  Loguit
                </ResponsiveNavLink>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </div>
    </div>
  );
}
