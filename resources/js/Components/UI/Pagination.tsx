import { ChevronRight, ChevronLeft } from "lucide-react";

export type PaginationProps = {
  currentPage: number;
  lastPage: number;
  total: number;
  perPage: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  lastPage,
  total,
  perPage,
  onPageChange,
}: PaginationProps) {
  const pages = [...Array(lastPage)].map((element, i) => i + 1);

  return (
    <div className="flex justify-between items-center mt-2 px-5">
      <div className="text-sm text-gray-700">
        {perPage} van {total}
      </div>
      <div className="flex space-x-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 rounded hover:text-gray-300 disabled:opacity-50 text-sm"
        >
          <span className="flex flex-row gap-x-1 items-center">
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Vorige</span>
          </span>
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded-full text-sm ${
              page === currentPage
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-300"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === lastPage}
          className="px-2 py-1 rounded hover:text-gray-300 disabled:opacity-50 text-sm"
        >
          <span className="flex flex-row gap-x-1 items-center">
            <span className="hidden sm:inline">Volgende</span>
            <ChevronRight className="w-4 h-4" />
          </span>
        </button>
      </div>
    </div>
  );
}
