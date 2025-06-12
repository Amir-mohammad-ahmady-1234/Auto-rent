import 'react-datepicker/dist/react-datepicker.css';

import 'react-time-picker/dist/TimePicker.css';

import type { DateTimePickerProps } from '../../../../types/DatePickerProps';
import DatePickerForm from './DatePicker';
import TimePickerForm from './TimePicker';

const DateTimePicker = ({ control, errors }: DateTimePickerProps) => {
  return (
    <div className="space-y-4">
      {/* ... عنوان و استایل ها ... */}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <DatePickerForm control={control} errors={errors} />
        <TimePickerForm control={control} errors={errors} />
      </div>
    </div>
  );
};

export default DateTimePicker;
