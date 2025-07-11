import InputLabel from "@/Components/Forms/InputLabel";
import TextInput from "@/Components/Forms/TextInput";
import Flatpicker from "@/Components/UI/Flatpicker";
import { formValidationSchema } from "./hooks/formValidationSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData } from "@/types/formData";

export type DatePickerFormProps = {
  onNext: (data: FormData) => void;
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  closedDays: { id: number; date: string }[];
  momentsByDate: { [date: string]: string[] };
};

export default function DatePickerForm({
  onNext,
  formData,
  updateFormData,
  closedDays,
  momentsByDate,
}: DatePickerFormProps) {
  const { appointmentFormSchema } = formValidationSchema();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: formData,
  });

  const getFullyBookedFromMoments = (momentsByDate: {
    [date: string]: string[];
  }) => {
    return Object.entries(momentsByDate)
      .filter(([date, moments]) => {
        // Get the days of the week
        const dayOfWeek = new Date(date).getDay();

        // Check is day of the week is Saturday
        if (dayOfWeek === 6) {
          // Saturday has only one moment availablem, and therefore this day is fully booked
          return moments.includes("10:00 - 12:00");
        }

        // else check for the other days which have two moments available
        return (
          moments.includes("10:00 - 12:00") && moments.includes("19:00 - 20:00")
        );
      })
      .map(([date]) => date);
  };

  const fullyBookedDates = getFullyBookedFromMoments(momentsByDate);

  const disabledDates = [
    ...closedDays.map((item) => item.date),
    ...fullyBookedDates,
  ];

  const isMomentDisabled = (moment: string) => {
    const unavailableMoments = momentsByDate[formData.date] || [];
    return unavailableMoments.includes(moment);
  };

  const isMomentVisible = (moment: string) => {
    const isSaturday = formData.date && new Date(formData.date).getDay() === 6;

    // Do not show moment on saturdays
    if (isSaturday && moment === "19:00 - 20:00") {
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-2xl uppercase font-bold text-gray-700">
          Datum & Tijdstip
        </h2>
        <p className="text-gray-700">Wanneer wil je langskomen?</p>
      </div>

      <Flatpicker
        value={formData.date}
        onChange={(selectedDate) => {
          setValue("date", selectedDate, { shouldValidate: true });
          updateFormData({ date: selectedDate });
        }}
        placeholder="Kies een datum"
        disabledDates={disabledDates}
        className="mb-4 w-full p-2 border rounded"
      />
      {errors.date && (
        <p className="text-red-500 text-sm">{errors.date.message}</p>
      )}

      {formData.date && (
        <div className="space-y-4">
          <p className="text-gray-700">Kies een tijd*</p>
          <div className="space-y-2">
            {isMomentVisible("10:00 - 12:00") && (
              <InputLabel className="flex items-center space-x-2">
                <TextInput
                  id="moment"
                  type="radio"
                  {...register("moment")}
                  value="10:00 - 12:00"
                  disabled={isMomentDisabled("10:00 - 12:00")}
                  checked={formData.moment === "10:00 - 12:00"}
                  onChange={() => {
                    setValue("moment", "10:00 - 12:00");
                    updateFormData({ moment: "10:00 - 12:00" });
                  }}
                  className="form-radio text-blue-500"
                />
                <span
                  className={`text-gray-700 ${
                    isMomentDisabled("10:00 - 12:00")
                      ? "line-through text-gray-400"
                      : ""
                  }`}
                >
                  10:00 - 12:00 uur (alleen honden)
                </span>
              </InputLabel>
            )}

            {isMomentVisible("19:00 - 20:00") && (
              <InputLabel className="flex items-center space-x-2">
                <TextInput
                  id="moment"
                  type="radio"
                  {...register("moment")}
                  value="19:00 - 20:00"
                  disabled={isMomentDisabled("19:00 - 20:00")}
                  checked={formData.moment === "19:00 - 20:00"}
                  onChange={() => {
                    setValue("moment", "19:00 - 20:00");
                    updateFormData({ moment: "19:00 - 20:00" });
                  }}
                  className="form-radio text-blue-500"
                />
                <span
                  className={`text-gray-700 ${
                    isMomentDisabled("19:00 - 20:00")
                      ? "line-through text-gray-400"
                      : ""
                  }`}
                >
                  19:00 - 20:00 uur (alleen katten & kleine hondjes met een
                  schofthoogte van 30cm)
                </span>
              </InputLabel>
            )}
          </div>
          {errors.moment && (
            <p className="text-red-500 text-sm">{errors.moment.message}</p>
          )}
        </div>
      )}

      <button
        className="bg-primary text-white p-3 rounded-lg w-full hover:bg-primary-dark transition"
        type="submit"
      >
        Volgende
      </button>
    </form>
  );
}
