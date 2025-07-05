import { Controller } from 'react-hook-form';
import type { DateTimePickerProps } from '../../../../types/DatePickerProps';

import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';

const DatePickerForm = ({ control, errors }: DateTimePickerProps) => {
  return (
    <>
      <Controller
        name="deliveryDate"
        control={control}
        render={({ field: { value, onChange } }) => (
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              تاریخ تحویل
            </label>
            <DatePicker
              calendar={persian}
              value={value}
              onChange={onChange}
              locale={persian_fa}
              calendarPosition="bottom-right"
            />
            {typeof errors.deliveryDate?.message === 'string' && (
              <p className="mt-1 text-sm text-red-500">
                {errors.deliveryDate.message}
              </p>
            )}
          </div>
        )}
      />
      <Controller
        name="returnDate"
        control={control}
        render={({ field: { value, onChange } }) => (
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              تاریخ بازگشت
            </label>
            <DatePicker
              calendar={persian}
              value={value}
              onChange={onChange}
              locale={persian_fa}
              calendarPosition="bottom-right"
            />
            {typeof errors.returnDate?.message === 'string' && (
              <p className="mt-1 text-sm text-red-500">
                {errors.returnDate.message}
              </p>
            )}
          </div>
        )}
      />
    </>
  );
};

export default DatePickerForm;
