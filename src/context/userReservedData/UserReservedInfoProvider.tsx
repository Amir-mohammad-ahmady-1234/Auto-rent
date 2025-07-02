import type React from 'react';
import { UserReservedInfoContext } from './UserReservedInfoContext';
import { useForm } from 'react-hook-form';
import type { FormTypes } from '../../types/UserInfoFormType';

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

  const onSubmit = (data: FormTypes) => {
    console.log(data);
  };

  return (
    <UserReservedInfoContext.Provider
      value={{ register, handleSubmit, errors, onSubmit }}
    >
      {children}
    </UserReservedInfoContext.Provider>
  );
};

export default UserReservedInfoProvider;
