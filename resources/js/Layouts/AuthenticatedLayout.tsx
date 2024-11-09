import { useState, PropsWithChildren, ReactNode } from "react";
import ApplicationLogo from "@/Components/UI/ApplicationLogo";
import Dropdown from "@/Components/Forms/Dropdown";
import NavLink from "@/Components/Buttons/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { User } from "@/types";
import Sidebar from "@/Components/UI/Sidebar";
import { AlignJustify } from "lucide-react";

export default function Authenticated({
  user,
  header,
  children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="min-h-screen w-full bg-gray-100">
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
                          {user.name}
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
            <div className="pt-2 pb-3 space-y-1">
              <ResponsiveNavLink
                href={route("dashboard")}
                active={route().current("dashboard")}
              >
                Dashboard
              </ResponsiveNavLink>
            </div>

            <div className="pt-4 pb-1 border-t border-gray-200">
              <div className="px-4">
                <div className="font-medium text-base text-gray-800">
                  {user.name}
                </div>
                <div className="font-medium text-sm text-gray-500">
                  {user.email}
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

        {/* {header && (
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {header}
          </div>
        </header>
      )} */}

        <main>{children}</main>
      </div>
    </div>
  );
}
