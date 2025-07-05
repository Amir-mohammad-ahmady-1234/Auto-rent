import { createContext } from 'react';
import type { FormTypes } from '../../types/UserInfoFormType';
import type {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

type UserReservedInfoContextType = {
  register: UseFormRegister<FormTypes>;
  handleSubmit: UseFormHandleSubmit<FormTypes>;
  errors: FieldErrors<FormTypes>;
  onSubmit: SubmitHandler<FormTypes>;
  currentStep: number;
  isRulesOpen: boolean;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setIsRulesOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserReservedInfoContext =
  createContext<UserReservedInfoContextType>({
    register: () => {
      throw new Error('register is not implemented');
    },
    handleSubmit: () => {
      throw new Error('handleSubmit is not implemented');
    },
    errors: {},
    onSubmit: () => {
      throw new Error('onSubmit is not implemented');
    },
    currentStep: 0,
    isRulesOpen: false,
    setCurrentStep: () => {
      throw new Error('setCurrentStep is not implemented');
    },
    setIsRulesOpen: () => {
      throw new Error('setIsRulesOpen is not implemented');
    },
  });
