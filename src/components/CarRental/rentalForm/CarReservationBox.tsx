import PriceBox from './PriceBox';
import RentalTypeSelector from './RentalTypeSelector';
import LocationSelector from './LocationSelector';
import DateTimePicker from './dateAndTimepicker/DateTimePicker';
import InsuranceSelector from './InsuranceSelector';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import {
  defaultValues,
  schema,
  type SchemaFormValues,
} from '../../../zodSchema/rentSchema';
import { useContext } from 'react';
import { FilterInputContext } from '../../../context/filtersInputContext/filterInputContext';
import TitleForm from './TitleForm';
import FormFooter from './FormFooter';
import type { MainCarType } from '../../../types/MainCarType';
import { useAuth } from '../../../context/Auth/useAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const CarReservationBox = ({ carInfo }: MainCarType) => {
  const { selectedInsurance } = useContext(FilterInputContext);
  const { dailyPrice, monthlyPrice } = carInfo;

  const navigate = useNavigate();

  const { phone } = useAuth();

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
      dailyPrice,
      monthlyPrice,
      phone,
    };

    console.log(finalData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card font-vazir w-full max-w-[496px] space-y-6"
    >
      <TitleForm />

      <PriceBox dailyPrice={dailyPrice} monthlyPrice={monthlyPrice} />

      <div className="space-y-4">
        <Controller
          name="rentalType"
          control={control}
          render={({ field }) => (
            <div>
              <RentalTypeSelector {...field} />
              {errors.rentalType && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.rentalType.message}
                </p>
              )}
            </div>
          )}
        />
        <LocationSelector<SchemaFormValues> control={control} errors={errors} />
      </div>

      <div className="rounded-lg bg-gray-50 p-4">
        <DateTimePicker control={control} errors={errors} />
      </div>

      <InsuranceSelector />

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full text-base disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? 'در حال ثبت...' : 'ثبت درخواست'}
      </button>

      <FormFooter />
    </form>
  );
};

export default CarReservationBox;
