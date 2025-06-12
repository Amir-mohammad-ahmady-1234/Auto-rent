import { Controller } from 'react-hook-form';
import type { DateTimePickerProps } from '../../../../types/DatePickerProps';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerForm = ({ control, errors }: DateTimePickerProps) => {
  console.log(errors.deliveryDate?.message);
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
              selected={value}
              onChange={onChange}
              className={`form-input w-full ${errors.deliveryDate?.message ? 'border-red-500' : ''}`}
              dateFormat="yyyy/MM/dd"
              calendarClassName="rtl"
              placeholderText="انتخاب تاریخ"
              minDate={new Date()}
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
              selected={value}
              onChange={onChange}
              className={`form-input w-full ${errors.returnDate?.message ? 'border-red-500' : ''}`}
              dateFormat="yyyy/MM/dd"
              calendarClassName="rtl"
              placeholderText="انتخاب تاریخ"
              minDate={new Date()}
            />
            {typeof errors.returnDate?.message ===  'string' && (
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
