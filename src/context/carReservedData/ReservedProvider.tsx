import { zodResolver } from '@hookform/resolvers/zod';
import {
  defaultValues,
  schema,
  type SchemaFormValues,
} from '../../zodSchema/rentSchema';
import { ReservedContext } from './ReservedContext';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../Auth/useAuth';
import { useContext, useState } from 'react';
import { FilterInputContext } from '../filtersInputContext/filterInputContext';
import { useStep } from '../handleReserveSteps/useStep';

export const ReserveProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();
  const { phone } = useAuth();
  const [formInfo, setFormInfo] = useState<null | SchemaFormValues>(null);

  const { selectedInsurance } = useContext(FilterInputContext);
  const { setCurrentStep } = useStep();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SchemaFormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
    mode: 'onSubmit',
  });

  const onSubmit = (data: SchemaFormValues) => {
    if (!phone) {
      toast.error('ابتدا به حساب خود وارد شوید');
      navigate('/login');
      return;
    }

    const finalData = {
      ...data,
      insurance: selectedInsurance,
      phone,
    };

    setFormInfo(finalData);
    setCurrentStep(2);
    // console.log(finalData.deliveryDate.format()); for get date
  };

  return (
    <ReservedContext.Provider
      value={{
        handleSubmit,
        control,
        errors,
        isSubmitting,
        onSubmit,
        formInfo,
        setFormInfo,
      }}
    >
      {children}
    </ReservedContext.Provider>
  );
};
