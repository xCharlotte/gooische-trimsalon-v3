import ApplicationLogo from "@/Components/UI/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen px-4 flex flex-col justify-center items-center pt-6 sm:pt-0 bg-login-bg object-fit bg-cover">
      <div className="flex flex-row items-center">
        <Link href="/">
          <ApplicationLogo className="w-auto h-24 fill-current text-gray-500" />
        </Link>
        <div className="flex flex-col">
          <h1 className="text-2xl text-gray-800 font-medium sm:text-2xl">
            Gooische Trimsalon
          </h1>
          <p className="font-light">Log in om naar het dashboard te gaan</p>
        </div>
      </div>

      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden rounded-lg">
        {children}
      </div>
    </div>
  );
}
