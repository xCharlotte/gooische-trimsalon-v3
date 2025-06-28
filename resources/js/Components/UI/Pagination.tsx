import { ChevronRight, ChevronLeft } from "lucide-react";

export type PaginationProps = {
  currentPage: number;
  lastPage: number;
  total?: number;
  perPage?: number;
  totalOnPage?: number;
  showTotal?: boolean;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  lastPage,
  total,
  perPage,
  onPageChange,
  totalOnPage,
  showTotal,
}: PaginationProps) {
  const pages = [...Array(lastPage)].map((element, i) => i + 1);

  return (
    <div
      className={`${
        showTotal
          ? "flex justify-between items-center mt-2 px-0 md:px-5"
          : "flex justify-center"
      }`}
    >
      {showTotal && (
        <div className="text-sm text-gray-700">
          {totalOnPage} van {total}
        </div>
      )}
      <div className="flex space-x-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 rounded hover:text-gray-900 disabled:opacity-50 text-sm"
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
                ? "bg-primary text-white"
                : "hover:bg-primary-dark"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === lastPage}
          className="px-2 py-1 rounded hover:text-gray-900 disabled:opacity-50 text-sm"
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
