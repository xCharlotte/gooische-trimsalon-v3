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
        "relative inline-flex items-center px-4 py-2 text-base font-medium leading-5 transition duration-150 ease-in-out hover:bg-primary-light hover:rounded-md focus:outline-none " +
        (active ? "bg-primary-light rounded-md text-neutral" : "text-neutral") +
        " " +
        className
      }
    >
      {children}
    </Link>
  );
}
