import React from 'react';
import { DataField } from './DataField';

// Interfaces
interface ReservationData {
  car: string;
  deliveryDate: string;
  deliveryLocation: string;
  driver?: string;
  returnDate: string;
  returnLocation: string;
  coverage: string;
  location1: string;
  location2: string;
}

interface ReserveInfoProps {
  data?: ReservationData;
}

// Main component
const ReserveInfo: React.FC<ReserveInfoProps> = ({ data }) => {
  const defaultData: ReservationData = {
    car: 'بنز s500',
    deliveryDate: '1403/02/10',
    deliveryLocation: 'تحویل در محل تهران',
    returnDate: '1403/02/28',
    returnLocation: 'تحویل در محل بازگشت',
    coverage: 'بدون پوشش',
    location1: 'تهران',
    location2: 'تهران',
  };

  const reservationData = data || defaultData;

  const rows = [
    { label: 'خودرو', value: reservationData.car },
    { label: 'تاریخ تحویل', value: reservationData.deliveryDate },
    { label: 'محل تحویل', value: reservationData.deliveryLocation },

    { label: 'با راننده', value: reservationData.driver || 'بدون راننده' },
    { label: 'تاریخ بازگشت', value: reservationData.returnDate },
    { label: 'محل بازگشت', value: reservationData.returnLocation },

    { label: 'پوشش', value: reservationData.coverage },
    { label: 'محل', value: reservationData.location1 },
    { label: 'محل', value: reservationData.location2 },
  ];

  return (
    <div
      dir="ltr"
      className="mx-auto w-full max-w-5xl rounded-xl bg-white p-8 shadow-lg sm:p-4"
    >
      {/* Header */}
      <div className="mb-8 flex flex-col items-end">
        <h2 className="text-2xl font-bold text-[#353535] sm:text-xl">
          اطلاعات رزرو
        </h2>
        <div className="mt-2 flex w-32 items-center justify-end">
          <div className="h-[3px] w-full rounded bg-[#FDB713]" />
        </div>
      </div>

      {/* Data Rows */}
      <div className="space-y-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {rows.map((field, i) => (
            <DataField key={i} label={field.label} value={field.value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReserveInfo;
