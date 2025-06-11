import { useState } from 'react';
import type { TCar } from '../../types/CarType';

import PriceBox from './PriceBox';
import RentalTypeSelector from './RentalTypeSelector';
import LocationSelector from './LocationSelector';
import DateTimePicker from './DateTimePicker';
import InsuranceSelector from './InsuranceSelector';

type CarReservationBoxProps = {
  carInfo: TCar;
};

const CarReservationBox = ({ carInfo }: CarReservationBoxProps) => {
  const [rentalType, setRentalType] = useState<string>('اجاره خودرو با راننده');
  const [deliveryDate, setDeliveryDate] = useState<Date | null>(new Date());
  const [returnDate, setReturnDate] = useState<Date | null>(new Date());
  const [deliveryTime, setDeliveryTime] = useState<string | null>('10:00');
  const [returnTime, setReturnTime] = useState<string | null>('07:00');

  const { dailyPrice, monthlyPrice } = carInfo;

  const isValidTime = (value: string | null) => {
    if (!value) return false;
    // Only allow 00:00 to 23:59
    return /^([01]\d|2[0-3]):([0-5]\d)$/.test(value);
  };

  const handleDeliveryTimeChange = (value: string | null) => {
    if (isValidTime(value)) {
      setDeliveryTime(value);
    }
  };

  const handleReturnTimeChange = (value: string | null) => {
    if (isValidTime(value)) {
      setReturnTime(value);
    }
  };

  return (
    <div className="card font-vazir w-full max-w-[496px] space-y-6">
      <div className="border-b border-gray-100 pb-4">
        <h3 className="text-xl font-bold text-gray-900">رزرو خودرو</h3>
        <p className="mt-1 text-sm text-gray-500">
          اطلاعات رزرو خودرو را وارد کنید
        </p>
      </div>

      <PriceBox dailyPrice={dailyPrice} monthlyPrice={monthlyPrice} />

      <div className="space-y-4">
        <RentalTypeSelector rentalType={rentalType} onSelect={setRentalType} />
        <LocationSelector />
      </div>

      <div className="rounded-lg bg-gray-50 p-4">
        <DateTimePicker
          deliveryDate={deliveryDate}
          returnDate={returnDate}
          setDeliveryDate={setDeliveryDate}
          setReturnDate={setReturnDate}
          deliveryTime={deliveryTime}
          returnTime={returnTime}
          setDeliveryTime={handleDeliveryTimeChange}
          setReturnTime={handleReturnTimeChange}
        />
      </div>

      <InsuranceSelector />

      <button className="btn btn-primary w-full text-base">ثبت درخواست</button>

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
    </div>
  );
};

export default CarReservationBox;
