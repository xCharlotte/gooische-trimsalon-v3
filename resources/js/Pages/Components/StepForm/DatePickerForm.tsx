import InputLabel from "@/Components/Forms/InputLabel";
import TextInput from "@/Components/Forms/TextInput";
import Flatpicker from "@/Components/UI/Flatpicker";
import { formatDateForFlatpickr } from "@/lib/dateFormatter";
import { useState } from "react";

export type DatePickerFormProps = {
  onNext: (data: any) => void;
  formData: any;
  closedDays: { id: number; date: string }[];
};

export default function DatePickerForm({
  onNext,
  formData,
  closedDays,
}: DatePickerFormProps) {
  const [date, setDate] = useState<Date | undefined>(
    formData.date || undefined
  );
  const [moment, setMoment] = useState(formData.moment || "");

  const handleNext = () => {
    if (date && moment) {
      onNext({ date, moment });
    }
  };

  const disabledDates = closedDays.map((item) =>
    formatDateForFlatpickr(item.date)
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-2xl uppercase font-bold text-gray-700">
          Datum & Tijdstip
        </h2>
        <p className="text-gray-700">Wanneer wil je langskomen?</p>
      </div>

      <Flatpicker
        value={date}
        onChange={setDate}
        placeholder="Kies een datum"
        disabledDates={disabledDates}
        className="mb-4 w-full p-2 border rounded"
      />

      {date && (
        <div className="space-y-4">
          <p className="text-gray-700">Kies een tijd*</p>
          <div className="space-y-2">
            <InputLabel className="flex items-center space-x-2">
              <TextInput
                id="moment"
                type="radio"
                name="moment"
                value="10:00 - 12:00"
                checked={moment === "10:00 - 12:00"}
                onChange={() => setMoment("10:00 - 12:00")}
                className="form-radio text-blue-500"
              />
              <span className="text-gray-700">
                10:00 - 12:00 uur (alleen honden)
              </span>
            </InputLabel>
            <InputLabel className="flex items-center space-x-2">
              <TextInput
                id="moment"
                type="radio"
                name="moment"
                value="19:00 - 20:00"
                checked={moment === "19:00 - 20:00"}
                onChange={() => setMoment("19:00 - 20:00")}
                className="form-radio text-blue-500"
              />
              <span className="text-gray-700">
                19:00 - 20:00 uur (alleen katten & kleine hondjes met een
                schofthoogte van 30cm)
              </span>
            </InputLabel>
          </div>
        </div>
      )}

      <button
        className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600 transition"
        onClick={handleNext}
        disabled={!date || !moment}
        type="button"
      >
        Volgende
      </button>
    </div>
  );
}
