import { create } from "zustand";
import { formDefaults } from "@/Pages/Appointment/StepForm/data/formDefault";

export type FormData = typeof formDefaults;

type StepFormStore = {
  step: number;
  formData: FormData;
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (newData: Partial<FormData>) => void;
  resetForm: () => void;
};

export const useStepFormStore = create<StepFormStore>((set) => ({
  step: 1,
  formData: formDefaults,
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  updateFormData: (newData) =>
    set((state) => ({
      formData: { ...state.formData, ...newData },
    })),
  resetForm: () => set({ step: 1, formData: formDefaults }),
}));
