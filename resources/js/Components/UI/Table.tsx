import { Eye, SquarePen, Trash2 } from "lucide-react";

// Table data differs per page, so we use a generic type for flexibility
export type TableProps<T> = {
  columns: string[];
  columnLabels: { [key: string]: string };
  data: T[] | T;
  onEdit?: (row: T) => void;
  onShow?: (row: T) => void;
  onDelete: (row: T) => void;
  onRowClick?: (row: T) => void;
  className?: string;
};

export default function Table<T>({
  columns,
  columnLabels,
  data,
  onEdit,
  onShow,
  onDelete,
  onRowClick,
  className,
}: TableProps<T>) {
  const rowDataArray = Array.isArray(data) ? data : [data];

  return (
    <div className={`flex justify-center py-6 ${className}`}>
      <div className="relative overflow-x-auto w-full">
        <table className="min-w-full">
          <thead className="bg-heavy-black">
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="px-2 py-2 text-left text-xs font-bold text-white tracking-wide uppercase"
                >
                  {columnLabels[col] || col}
                </th>
              ))}
              <th
                scope="col-sm-2"
                className="px-2 py-2 text-right text-xs font-bold text-white tracking-wide uppercase"
              ></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rowDataArray.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="px-4 py-6 text-center text-gray-500 text-sm"
                >
                  Geen data aanwezig
                </td>
              </tr>
            ) : (
              rowDataArray.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="hover:bg-gray-50 transition duration-200 ease-in-out cursor-pointer"
                  onClick={() => onRowClick && onRowClick(row)}
                >
                  {columns.map((col) => (
                    <td
                      key={col}
                      className="px-2 py-2 whitespace-nowrap text-sm text-gray-700"
                    >
                      {col === "image" ? (
                        <img
                          src={(row as any)[col]}
                          alt={`${row.title} afbeelding`}
                          className="w-12 h-12 object-cover rounded-full"
                        />
                      ) : (
                        (row as any)[col]
                      )}
                    </td>
                  ))}

                  <td className="px-2 py-2 text-right text-xs font-bold">
                    <div className="flex justify-end items-center h-full">
                      {onShow && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onShow(row);
                          }}
                          className="flex items-center px-2 py-1 text-gray-500 hover:underline mr-2"
                          aria-label={`show ${row.title}`}
                        >
                          <span>
                            <Eye className="w-4 pr-1" />
                          </span>
                          Toon
                        </button>
                      )}
                      {onEdit && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onEdit(row);
                          }}
                          className="flex items-center px-2 py-1 text-orange-500 hover:underline mr-2"
                          aria-label={`Edit ${row.title}`}
                        >
                          <span>
                            <SquarePen className="w-4 pr-1" />
                          </span>
                          Bewerk
                        </button>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDelete(row);
                        }}
                        className="flex items-center px-2 py-1 text-red-500 hover:underline"
                        aria-label={`Delete ${row.title}`}
                      >
                        <span>
                          <Trash2 className="w-4 pr-1" />
                        </span>
                        Verwijder
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
