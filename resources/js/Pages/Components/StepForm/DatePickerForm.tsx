import InputLabel from "@/Components/Forms/InputLabel";
import TextInput from "@/Components/Forms/TextInput";
import FlatpickerComponent from "@/Components/UI/Flatpicker";
import { useState } from "react";

export default function DatePickerForm({
  onNext,
  formData,
}: {
  onNext: (data: any) => void;
  formData: any;
}) {
  const [date, setDate] = useState<Date | undefined>(
    formData.date || undefined
  );
  const [time, setTime] = useState(formData.time || "");

  const handleNext = () => {
    if (date && time) {
      onNext({ date, time });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-2xl uppercase font-bold text-gray-700">
          Datum & Tijdstip
        </h2>
        <p className="text-gray-700">Wanneer wil je langskomen?</p>
      </div>

      <FlatpickerComponent
        value={date}
        onChange={setDate}
        placeholder="Kies een datum"
        disabledDates={[]}
        className="mb-4 w-full p-2 border rounded"
      />

      {date && (
        <div className="space-y-4">
          <p className="text-gray-700">Kies een tijd*</p>
          <div className="space-y-2">
            <InputLabel className="flex items-center space-x-2">
              <TextInput
                type="radio"
                name="time"
                value="10:00 - 12:00"
                checked={time === "10:00 - 12:00"}
                onChange={() => setTime("10:00 - 12:00")}
                className="form-radio text-blue-500"
              />
              <span className="text-gray-700">
                10:00 - 12:00 uur (alleen honden)
              </span>
            </InputLabel>
            <InputLabel className="flex items-center space-x-2">
              <TextInput
                type="radio"
                name="time"
                value="19:00 - 20:00"
                checked={time === "19:00 - 20:00"}
                onChange={() => setTime("19:00 - 20:00")}
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
        disabled={!date || !time}
        type="button"
      >
        Volgende
      </button>
    </div>
  );
}
