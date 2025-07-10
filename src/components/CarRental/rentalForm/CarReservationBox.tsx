import PriceBox from './PriceBox';
import RentalTypeSelector from './RentalTypeSelector';
import LocationSelector from './LocationSelector';
import DateTimePicker from './dateAndTimepicker/DateTimePicker';
import InsuranceSelector from './InsuranceSelector';

import { Controller } from 'react-hook-form';
import { type SchemaFormValues } from '../../../zodSchema/rentSchema';
import TitleForm from './TitleForm';
import FormFooter from '../../../ui/FormFooter';
import type { MainCarType } from '../../../types/MainCarType';
import { useReservedInfo } from '../../../context/carReservedData/useReserved';
import RentalDaysInput from './RentalDaysInput';

const CarReservationBox = ({ carInfo }: MainCarType) => {
  const { dailyPrice, monthlyPrice } = carInfo;
  const { handleSubmit, control, errors, isSubmitting, onSubmit } =
    useReservedInfo();

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

        <Controller
          name="rentalDays"
          control={control}
          defaultValue={1}
          rules={{
            required: 'تعداد روز اجاره الزامی است',
            min: { value: 1, message: 'حداقل یک روز' },
          }}
          render={({ field }) => (
            <div>
              <RentalDaysInput {...field} />
              {errors.rentalDays && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.rentalDays.message}
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

      <FormFooter
        text={
          'پس از ثبت درخواست، کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت'
        }
      />
    </form>
  );
};

export default CarReservationBox;
