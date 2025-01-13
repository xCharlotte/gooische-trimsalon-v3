import { useState } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import TextInput from "../Forms/TextInput";
import Table from "./Table";

export type OptionsLayoutProps = {
  title: string;
  placeholder: string;
  type: string;
  tableTitle: string;
  columnNames: string[];
  columnLabels: {
    [key: string]: string;
  };
  data: any;
};

export default function OptionsLayout({
  title,
  placeholder,
  type,
  tableTitle,
  columnNames,
  columnLabels,
  data,
  onSubmit,
  onDelete,
}: OptionsLayoutProps & {
  onSubmit: (value: string | Date) => void;
  onDelete: (id: number) => void;
}) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSubmit(type === "date" ? new Date(inputValue) : inputValue);
      setInputValue("");
    }
  };

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
              <TextInput
                id="input"
                type={type}
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
                className="mb-4 w-full max-w-md"
              />
              <PrimaryButton className="w-full max-w-md" type="submit">
                Opslaan
              </PrimaryButton>
            </form>

            <hr className="w-5/6 mt-10 pb-10" />

            <h2 className="text-lg font-semibold">{tableTitle}</h2>
            <Table
              columns={columnNames}
              columnLabels={columnLabels}
              data={data}
              onDelete={(row) => onDelete(row.id)}
              className="w-2/5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
