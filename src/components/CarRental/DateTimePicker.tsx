import { Controller, type Control, type FieldErrors } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

import type { SchemaFormValues } from '../../zodSchema/rentSchema';

type DateTimePickerProps = {
  control: Control<SchemaFormValues>;
  errors: FieldErrors<SchemaFormValues>;
};

const DateTimePicker = ({ control, errors }: DateTimePickerProps) => {
  return (
    <div className="space-y-4">
      {/* ... عنوان و استایل ها ... */}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                className={`form-input w-full ${errors.deliveryDate ? 'border-red-500' : ''}`}
                dateFormat="yyyy/MM/dd"
                calendarClassName="rtl"
                placeholderText="انتخاب تاریخ"
                minDate={new Date()}
              />
              {errors.deliveryDate && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.deliveryDate.message}
                </p>
              )}
            </div>
          )}
        />

        <Controller
          name="deliveryTime"
          control={control}
          render={({ field: { value, onChange } }) => (
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                ساعت تحویل
              </label>
              <TimePicker
                value={value}
                onChange={onChange}
                className={`form-input w-full ${errors.deliveryTime ? 'border-red-500' : ''}`}
                clockIcon={null}
                disableClock
                format="HH:mm"
                clearIcon={null}
              />
              {errors.deliveryTime && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.deliveryTime.message}
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
                className={`form-input w-full ${errors.returnDate ? 'border-red-500' : ''}`}
                dateFormat="yyyy/MM/dd"
                calendarClassName="rtl"
                placeholderText="انتخاب تاریخ"
                minDate={new Date()}
              />
              {errors.returnDate && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.returnDate.message}
                </p>
              )}
            </div>
          )}
        />

        <Controller
          name="returnTime"
          control={control}
          render={({ field: { value, onChange } }) => (
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                ساعت بازگشت
              </label>
              <TimePicker
                value={value}
                onChange={onChange}
                className={`form-input w-full ${errors.returnTime ? 'border-red-500' : ''}`}
                clockIcon={null}
                disableClock
                format="HH:mm"
                clearIcon={null}
              />
              {errors.returnTime && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.returnTime.message}
                </p>
              )}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default DateTimePicker;
