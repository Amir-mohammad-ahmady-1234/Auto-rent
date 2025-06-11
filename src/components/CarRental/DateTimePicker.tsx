import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { useRef, useEffect } from 'react';
import './DateTimePicker.css';

type DateTimePickerProps = {
  deliveryDate: Date | null;
  returnDate: Date | null;
  setDeliveryDate: (date: Date | null) => void;
  setReturnDate: (date: Date | null) => void;
  deliveryTime: string | null;
  returnTime: string | null;
  setDeliveryTime: (time: string | null) => void;
  setReturnTime: (time: string | null) => void;
};

const DateTimePicker = ({
  deliveryDate,
  returnDate,
  setDeliveryDate,
  setReturnDate,
  deliveryTime,
  returnTime,
  setDeliveryTime,
  setReturnTime,
}: DateTimePickerProps) => {
  const deliveryTimeRef = useRef<HTMLDivElement | null>(null);
  const returnTimeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Make the input inside TimePicker readonly
    if (deliveryTimeRef.current) {
      const input = deliveryTimeRef.current.querySelector('input');
      if (input) input.readOnly = true;
    }
    if (returnTimeRef.current) {
      const input = returnTimeRef.current.querySelector('input');
      if (input) input.readOnly = true;
    }
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm text-gray-600">
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
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span>انتخاب تاریخ و زمان تحویل و بازگشت خودرو</span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            تاریخ تحویل
          </label>
          <DatePicker
            selected={deliveryDate}
            onChange={(date) => setDeliveryDate(date)}
            className="form-input"
            dateFormat="yyyy/MM/dd"
            calendarClassName="rtl"
            placeholderText="انتخاب تاریخ"
          />
        </div>
        <div ref={deliveryTimeRef}>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            ساعت تحویل
          </label>
          <TimePicker
            onChange={(value) => setDeliveryTime(value)}
            value={deliveryTime}
            className="form-input ltr-time-picker"
            clockIcon={null}
            disableClock
            format="HH:mm"
            clearIcon={null}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            تاریخ بازگشت
          </label>
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            className="form-input"
            dateFormat="yyyy/MM/dd"
            calendarClassName="rtl"
            placeholderText="انتخاب تاریخ"
          />
        </div>
        <div ref={returnTimeRef}>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            ساعت بازگشت
          </label>
          <TimePicker
            onChange={(value) => setReturnTime(value)}
            value={returnTime}
            className="form-input ltr-time-picker"
            clockIcon={null}
            disableClock
            format="HH:mm"
            clearIcon={null}
          />
        </div>
      </div>

      <div className="rounded-lg bg-yellow-50 p-3 text-sm text-yellow-700">
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
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          حداقل زمان رزرو ۲۴ ساعت می‌باشد
        </p>
      </div>
    </div>
  );
};

export default DateTimePicker;
