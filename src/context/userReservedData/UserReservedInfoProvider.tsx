import type React from 'react';
import { UserReservedInfoContext } from './UserReservedInfoContext';
import { useForm } from 'react-hook-form';
import type { FormTypes } from '../../types/UserInfoFormType';
import { useStep } from '../handleReserveSteps/useStep';
import { useState } from 'react';

const UserReservedInfoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>();

  const { currentStep, setCurrentStep } = useStep();
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  const onSubmit = (data: FormTypes) => {
    setIsRulesOpen(true);
    setCurrentStep(3);
    console.log(data);
  };

  return (
    <UserReservedInfoContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        onSubmit,
        currentStep,
        isRulesOpen,
        setCurrentStep,
        setIsRulesOpen,
      }}
    >
      {children}
    </UserReservedInfoContext.Provider>
  );
};

export default UserReservedInfoProvider;
