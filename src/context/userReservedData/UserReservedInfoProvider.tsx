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

  const [userReservedInfo, setUserReservedInfo] = useState<FormTypes | null>(
    null
  );

  const { currentStep, setCurrentStep } = useStep();
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  const onSubmit = (data: FormTypes) => {
    setUserReservedInfo(data);
    setIsRulesOpen(true);
    setCurrentStep(3);
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
        userReservedInfo,
        setUserReservedInfo,
      }}
    >
      {children}
    </UserReservedInfoContext.Provider>
  );
};

export default UserReservedInfoProvider;
