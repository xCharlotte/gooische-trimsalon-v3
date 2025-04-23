// Table data differs per page, so we use a generic type for flexibility
export type TableProps<T> = {
  columns: string[];
  columnLabels: { [key: string]: string };
  data: T[] | T;
  onEdit?: (row: T) => void;
  onDelete: (row: T) => void;
  onRowClick?: (row: T) => void;
  className?: string;
};

export default function Table<T>({
  columns,
  columnLabels,
  data,
  onEdit,
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
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rowDataArray.map((row, rowIndex) => (
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

                <td className="px-2 py-2 text-right text-sm">
                  {onEdit && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onEdit(row);
                      }}
                      className="px-3 py-1 font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
                      aria-label={`Edit ${row.title}`}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(row);
                    }}
                    className="px-3 py-1 font-medium text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    aria-label={`Delete ${row.title}`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
