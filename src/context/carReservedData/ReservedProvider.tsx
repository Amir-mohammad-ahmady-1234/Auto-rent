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
import { useContext } from 'react';
import { FilterInputContext } from '../filtersInputContext/filterInputContext';

export const ReserveProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();
  const { phone } = useAuth();
  const { selectedInsurance } = useContext(FilterInputContext);

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

    console.log(finalData);
  };

  return (
    <ReservedContext.Provider
      value={{ handleSubmit, control, errors, isSubmitting, onSubmit }}
    >
      {children}
    </ReservedContext.Provider>
  );
};
