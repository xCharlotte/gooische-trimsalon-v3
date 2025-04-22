import { useState } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import TextInput from "../Forms/TextInput";
import Table from "./Table";
import Flatpicker from "@/Components/UI/Flatpicker";

export type OptionsLayoutProps = {
  title: string;
  placeholder: string;
  type: string;
  tableTitle: string;
  columnNames: string[];
  columnLabels: { [key: string]: string };
  data: any;
  emptyMessage: string;
  closedDays: { id: number; date: string }[];
};

export default function OptionsLayout({
  title,
  placeholder,
  type,
  tableTitle,
  columnNames,
  columnLabels,
  data,
  emptyMessage,
  onSubmit,
  onDelete,
  closedDays = [],
}: OptionsLayoutProps & {
  onSubmit: (value: string | Date) => void;
  onDelete: (id: number) => void;
}) {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === "date" && selectedDate) {
      onSubmit(selectedDate);
      setSelectedDate(undefined);
    } else if (inputValue.trim()) {
      onSubmit(inputValue);
      setInputValue("");
    }
  };

  const disabledDates = closedDays.map((item) => item.date);

  return (
    <div className="py-4">
      <div className="max-w-8xl mx-auto sm:px-6 lg:px-4">
        <div className="bg-white overflow-hidden rounded-lg p-4 md:p-8 shadow-lg">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold mb-4">{title}</h1>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col items-center mb-6"
            >
              {type === "date" ? (
                <Flatpicker
                  value={selectedDate}
                  onChange={setSelectedDate}
                  placeholder={placeholder}
                  disabledDates={disabledDates}
                  className="mb-4 w-full max-w-md"
                />
              ) : (
                <TextInput
                  id="input"
                  type={type}
                  placeholder={placeholder}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  required
                  className="mb-4 w-full max-w-md"
                />
              )}

              <PrimaryButton className="w-full max-w-md" type="submit">
                Opslaan
              </PrimaryButton>
            </form>

            <hr className="w-5/6 mt-10 pb-10" />

            <h2 className="text-lg font-semibold">{tableTitle}</h2>
            {data.length > 0 ? (
              <Table
                columns={columnNames}
                columnLabels={columnLabels}
                data={data}
                onDelete={(row) => onDelete(row.id)}
                className="w-2/5"
              />
            ) : (
              <p className="text-gray-500 mt-4">{emptyMessage}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
