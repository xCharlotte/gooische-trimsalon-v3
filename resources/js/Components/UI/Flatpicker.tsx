import Flatpickr from "react-flatpickr";
import { Dutch } from "flatpickr/dist/l10n/nl.js";
import "flatpickr/dist/flatpickr.min.css";

export type FlatpickerProps = {
  value: string | undefined;
  onChange: (date: string) => void;
  placeholder?: string;
  disabledDates?: string[];
  minDate?: string;
  maxDate?: string;
  className?: string;
};

export default function Flatpicker({
  value,
  onChange,
  placeholder = "Selecteer een datum",
  disabledDates = [],
  minDate = "today",
  maxDate,
  className = "",
}: FlatpickerProps) {
  return (
    <Flatpickr
      value={value || undefined}
      // onChange={(date) => onChange(date[0])}
      onChange={(dates) => {
        if (dates[0]) {
          const formattedDate = dates[0].toISOString().split("T")[0]; // YYYY-MM-DD formaat
          onChange(formattedDate);
        }
      }}
      options={{
        minDate,
        maxDate,
        altInput: true,
        altFormat: "l j F, Y",
        dateFormat: "Y-m-d",
        locale: Dutch,
        disable: disabledDates,
      }}
      placeholder={placeholder}
      className={`p-2 border rounded ${className}`}
    />
  );
}
