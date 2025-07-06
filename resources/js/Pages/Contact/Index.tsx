import { Head, router } from "@inertiajs/react";
import InputLabel from "@/Components/Forms/InputLabel";
import TextInput from "@/Components/Forms/TextInput";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import GalleryDivider from "../Components/GalleryDivider";
import Swal from "sweetalert2";
import TextArea from "@/Components/Forms/TextArea";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "./hooks/contactFormValidationSchema";
import { z } from "zod";

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await router.post(route("contact.send"), data, {
        preserveScroll: true,
        onSuccess: () => {
          Swal.fire({
            title: "Succes!",
            text: "Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => reset());
        },
        onError: () => {
          Swal.fire({
            title: "Fout!",
            text: "Er ging iets mis, probeer het opnieuw.",
            icon: "error",
            confirmButtonText: "OK",
          });
        },
      });
    } catch (e) {
      console.error("Post request failed", e);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head title="Contact" />
      <Navbar />
      <Hero
        title="Contact"
        imageUrl="/images/contact-hero.jpg"
        imagePositionClass="lg:bg-[center_bottom_-8rem]"
      />

      <section className="py-8 md:py-14 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Neem contact op
            </h2>
            <p className="text-gray-600 mb-6">
              Heb je vragen over onze trimsalon, een behandeling of iets anders?
              Laat gerust een berichtje achter, dan nemen we zo snel mogelijk
              contact met je op.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>
                <strong>Adres:</strong> Van Linschotenlaan 242, 1212 GA
                Hilversum
              </li>
              <li>
                <strong>Telefoon: </strong>
                <a
                  href="tel:+31623349398"
                  className="hover:underline focus-visible:outline focus:outline-2 focus-visible:outline-primary"
                >
                  +31 6 23349398
                </a>
              </li>
              <li>
                <strong>E-mail: </strong>
                <a
                  href="mailto:info@gooisetrimsalon.nl"
                  className="hover:underline focus-visible:outline focus:outline-2 focus:outline-primary"
                >
                  info@gooischetrimsalon.nl
                </a>
              </li>
            </ul>
            <ul>
              <li className="mt-6">
                <p>
                  <b>BTW-nummer:</b> 88646476B02
                </p>
              </li>
              <li>
                <p>
                  <b>KvK-nummer:</b> 77062965
                </p>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 bg-white p-6 rounded-2xl shadow-md"
          >
            {/* Honeypot veld (onzichtbaar) */}
            <div className="hidden">
              <InputLabel htmlFor="company" />
              <TextInput
                id="company"
                autoComplete="off"
                tabIndex={-1}
                {...register("company")}
              />
            </div>

            <div>
              <InputLabel
                htmlFor="name"
                className="text-gray-700 font-semibold"
              >
                Naam *
              </InputLabel>
              <TextInput
                id="name"
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-primary"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <InputLabel
                htmlFor="email"
                className="text-gray-700 font-semibold"
              >
                E-mailadres *
              </InputLabel>
              <TextInput
                id="email"
                type="email"
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-primary"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <InputLabel
                htmlFor="phone"
                className="text-gray-700 font-semibold"
              >
                Telefoonnummer *
              </InputLabel>
              <TextInput
                id="phone"
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-primary"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <InputLabel
                htmlFor="contactMessage"
                className="text-gray-700 font-semibold"
              >
                Bericht *
              </InputLabel>

              {/* Use Controller because React Hook Form can't properly handle custom controlled components like textarea with Zod validation otherwise. */}
              <Controller
                name="contactMessage"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextArea
                    id="contactMessage"
                    rows={4}
                    className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-primary"
                    {...field}
                  />
                )}
              />
              {errors.contactMessage && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.contactMessage.message}
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-white bg-primary hover:bg-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Verstuur bericht
              </button>
            </div>
          </form>
        </div>
      </section>

      <GalleryDivider />
      <Footer />
    </div>
  );
}
