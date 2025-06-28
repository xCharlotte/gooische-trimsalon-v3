import { formatDate } from "@/lib/dateFormatter";
import { Link, router } from "@inertiajs/react";

export type CardType = {
  className?: string;
  title: string;
  image?: string;
  text: string;
  category?: string;
  createdAt?: string;
  url: string;
};

export default function Card({
  className,
  title,
  image,
  text,
  category,
  createdAt,
  url,
}: CardType) {
  return (
    <Link href={url}>
      <div
        className={`bg-white shadow rounded-lg overflow-hidden border border-gray-200 ${className}`}
      >
        <figure className="aspect-[364/224] overflow-hidden w-full">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out hover:scale-110"
            />
          )}
        </figure>
        <div className="p-4">
          {category && (
            <span className="text-sm text-gray-500 mb-2 block">{category}</span>
          )}
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          {createdAt && (
            <time className="text-sm text-gray-500 mb-2 block">
              {new Date(createdAt).toLocaleDateString("nl-NL", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          )}
          <div dangerouslySetInnerHTML={{ __html: text }} />
          <a
            href="#"
            className="text-primary hover:text-primary-dark mt-4 inline-block"
            aria-label={`Lees meer over ${title}`}
          >
            Lees meer
          </a>
        </div>
      </div>
    </Link>
  );
}
