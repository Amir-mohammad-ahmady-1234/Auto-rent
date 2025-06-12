import { Controller } from 'react-hook-form';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import type { DateTimePickerProps } from '../../../../types/DatePickerProps';

const TimePickerForm = ({ control, errors }: DateTimePickerProps) => {
  return (
    <>
      <Controller
        name="deliveryTime"
        control={control}
        render={({ field: { value, onChange } }) => (
          <div dir="ltr">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              ساعت تحویل
            </label>
            <TimePicker
              value={value}
              onChange={onChange}
              className={`form-input w-full ${errors.deliveryTime?.message ? 'border-red-500' : ''}`}
              clockIcon={null}
              disableClock
              format="HH:mm"
              clearIcon={null}
            />
            {errors.deliveryTime?.message && (
              <p className="mt-1 text-sm text-red-500">
                {errors.deliveryTime.message}
              </p>
            )}
          </div>
        )}
      />

      <Controller
        name="returnTime"
        control={control}
        render={({ field: { value, onChange } }) => (
          <div dir="ltr">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              ساعت بازگشت
            </label>
            <TimePicker
              value={value}
              onChange={onChange}
              className={`form-input w-full ${errors.returnTime?.message ? 'border-red-500' : ''}`}
              clockIcon={null}
              disableClock
              format="HH:mm"
              clearIcon={null}
            />
            {errors.returnTime?.message && (
              <p className="mt-1 text-sm text-red-500">
                {errors.returnTime.message}
              </p>
            )}
          </div>
        )}
      />
    </>
  );
};

export default TimePickerForm;
