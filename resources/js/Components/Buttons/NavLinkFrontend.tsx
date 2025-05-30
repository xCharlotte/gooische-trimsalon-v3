import { Link, usePage } from "@inertiajs/react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  componentName: string;
};

export default function NavLinkFrontend({
  href,
  children,
  componentName,
}: NavLinkProps) {
  const { component } = usePage();

  return (
    <Link
      href={href}
      className={`block text-gray-700 hover:text-[#3A53A5] focus:outline focus:outline-2 focus:outline-[#3A53A5] px-2 ${
        component === componentName ? "font-semibold" : ""
      }`}
    >
      {children}
    </Link>
  );
}
