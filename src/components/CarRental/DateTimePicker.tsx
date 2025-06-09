import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { useRef, useEffect } from 'react';
import './DateTimePicker.css'

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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div>
        <label className="mb-1 block text-sm font-medium">تاریخ تحویل</label>
        <DatePicker
          selected={deliveryDate}
          onChange={(date) => setDeliveryDate(date)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm"
          dateFormat="yyyy/MM/dd"
          calendarClassName="rtl"
        />
      </div>
      <div ref={deliveryTimeRef}>
        <label className="mb-1 block text-sm font-medium">ساعت تحویل</label>
        <TimePicker
          onChange={(value) => setDeliveryTime(value)}
          value={deliveryTime}
          className="ltr-time-picker w-full text-sm"
          clockIcon={null}
          disableClock
          format="HH:mm"
          clearIcon={null}
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">تاریخ بازگشت</label>
        <DatePicker
          selected={returnDate}
          onChange={(date) => setReturnDate(date)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm"
          dateFormat="yyyy/MM/dd"
          calendarClassName="rtl"
        />
      </div>
      <div ref={returnTimeRef}>
        <label className="mb-1 block text-sm font-medium">ساعت بازگشت</label>
        <TimePicker
          onChange={(value) => setReturnTime(value)}
          value={returnTime}
          className="ltr-time-picker w-full text-sm"
          clockIcon={null}
          disableClock
          format="HH:mm"
          clearIcon={null}
        />
      </div>
    </div>
  );
};

export default DateTimePicker;
