import type { TCar } from '../../types/CarType';

import PriceBox from './PriceBox';
import RentalTypeSelector from './RentalTypeSelector';
import LocationSelector from './LocationSelector';
import DateTimePicker from './DateTimePicker';
import InsuranceSelector from './InsuranceSelector';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { schema, type SchemaFormValues } from '../../zodSchema/rentSchema';

type CarReservationBoxProps = {
  carInfo: TCar;
};

const CarReservationBox = ({ carInfo }: CarReservationBoxProps) => {
  const { dailyPrice, monthlyPrice } = carInfo;

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SchemaFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      rentalType: 'اجاره خودرو با راننده',
      deliveryTime: '10:00',
      returnTime: '07:00',
      deliveryDate: new Date(),
      returnDate: new Date(),
      deliveryLocation: 'انتخاب کنید',
      returnLocation: 'انتخاب کنید',
    },
    mode: 'onSubmit',
  });

  const onSubmit = async (data: SchemaFormValues) => {
    try {
      // Validate the data using schema
      const validatedData = schema.parse(data);

      // Log the validated form data
      console.log('Form Data:', {
        ...validatedData,
        deliveryDate: validatedData.deliveryDate?.toISOString(),
        returnDate: validatedData.returnDate?.toISOString(),
      });

      // Here you can add your API call or other logic
      // const response = await submitReservation(validatedData);
      // console.log('API Response:', response);
    } catch (error) {
      console.error('Validation Error:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card font-vazir w-full max-w-[496px] space-y-6"
    >
      <div className="border-b border-gray-100 pb-4">
        <h3 className="text-xl font-bold text-gray-900">رزرو خودرو</h3>
        <p className="mt-1 text-sm text-gray-500">
          اطلاعات رزرو خودرو را وارد کنید
        </p>
      </div>

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

      <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-700">
        <p className="flex items-center gap-2">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          پس از ثبت درخواست، کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت
        </p>
      </div>
    </form>
  );
};

export default CarReservationBox;
