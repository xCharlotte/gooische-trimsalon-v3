import { Link, usePage } from "@inertiajs/react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  componentName: string;
  onClick?: () => void;
};

export default function NavLinkFrontend({
  href,
  children,
  componentName,
  onClick,
}: NavLinkProps) {
  const { component } = usePage();

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block text-gray-700 hover:text-primary focus:outline focus:outline-2 focus:outline-primary px-2 ${
        component === componentName ? "font-semibold text-primary" : ""
      }`}
    >
      {children}
    </Link>
  );
}
