import { useState } from 'react';
import { StepContext } from './StepContext';

export function StepProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <StepContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </StepContext.Provider>
  );
}
