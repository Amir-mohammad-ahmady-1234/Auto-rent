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
    });
