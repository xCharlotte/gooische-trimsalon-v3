export default function Table({
  columns,
  columnLabels,
  data,
  onEdit,
  onDelete,
}: any) {
  return (
    <div className="bg-white overflow-hiddens rounded-lg p-5">
      <div
        role="table"
        aria-label="Blog posts table"
        className="relative overflow-x-auto shadow-md sm:rounded-lg"
      >
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="px-6 py-3"
                  aria-label={col}
                >
                  {columnLabels[col] || col}
                </th>
              ))}
              <th scope="col" className="px-6 py-3" aria-label="Actions">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={
                  rowIndex % 2 === 0
                    ? "bg-white border-b"
                    : "bg-gray-50 border-b"
                }
              >
                {columns.map((col) => (
                  <td
                    key={col}
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {col === "image" ? (
                      <img
                        src={row[col]}
                        alt={`${row.title} afbeelding`}
                        className="w-12 object-cover rounded"
                      />
                    ) : (
                      row[col]
                    )}
                  </td>
                ))}
                <td className="px-6 py-4">
                  <button
                    onClick={() => onEdit(row)}
                    className="font-medium text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
                    aria-label={`Edit ${row.title}`}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(row)}
                    className="font-medium text-red-600 hover:underline focus:outline-none focus:ring-2 focus:ring-red-500"
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
