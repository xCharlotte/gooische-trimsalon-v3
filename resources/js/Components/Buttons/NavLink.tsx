import { Link, InertiaLinkProps } from "@inertiajs/react";

export default function NavLink({
  active = false,
  className = "",
  children,
  ...props
}: InertiaLinkProps & { active: boolean }) {
  return (
    <Link
      {...props}
      className={
        "relative inline-flex items-center px-4 py-2 text-base font-medium leading-5 transition duration-150 ease-in-out hover:bg-gray-100 hover:rounded-md focus:outline-none " +
        (active ? "bg-gray-100 rounded-md text-indigo-600" : "text-gray-600") +
        " " +
        className
      }
    >
      {children}
    </Link>
  );
}
