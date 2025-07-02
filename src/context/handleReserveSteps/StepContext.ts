import { createContext } from 'react';

export const StepContext = createContext<null | {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}>(null);
