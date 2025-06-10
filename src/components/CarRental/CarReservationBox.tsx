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
    <div className="font-vazir w-full max-w-[496px] space-y-6 rounded-2xl border border-gray-200 bg-white p-6 text-right shadow-xl">
      <PriceBox dailyPrice={dailyPrice} monthlyPrice={monthlyPrice} />

      <RentalTypeSelector rentalType={rentalType} onSelect={setRentalType} />

      <LocationSelector />

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

      <InsuranceSelector />

      <button className="w-full rounded-xl bg-blue-600 py-3 text-sm font-bold text-white transition hover:bg-blue-700">
        ثبت درخواست
      </button>
    </div>
  );
};

export default CarReservationBox;
