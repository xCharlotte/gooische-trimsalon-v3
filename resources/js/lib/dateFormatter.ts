// Format ISO 8601 (YYYY-MM-DDT23:00:00.000Z) to MySQL format (YYYY-MM-DD)
export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Returns Y-m-d format for Flatpickr
export const formatDateForFlatpickr = (date: string) => {
  const [day, month, year] = date.split("-");
  return `${year}-${month}-${day}`;
};
