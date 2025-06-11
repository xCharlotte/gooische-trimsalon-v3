import { Link, InertiaLinkProps } from "@inertiajs/react";

export default function ResponsiveNavLink({
  active = false,
  className = "",
  children,
  ...props
}: InertiaLinkProps & { active?: boolean }) {
  return (
    <Link
      {...props}
      className={`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${
        active
          ? "border-primary text-primary bg-indigo-50 focus-visible:text-primary focus-visible:bg-primary focus-visible:border-primary"
          : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus-visible:text-gray-800 focus-visible:bg-gray-50 focus-visible:border-gray-300"
      } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
    >
      {children}
    </Link>
  );
}
