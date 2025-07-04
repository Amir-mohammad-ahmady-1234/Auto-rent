import React from 'react';

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

// Checkmark icon component
const CheckmarkIcon: React.FC = () => (
  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-gray-50 p-2 shadow-sm">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.58 15.58C10.38 15.58 10.19 15.5 10.05 15.36L7.22 12.53C6.93 12.24 6.93 11.76 7.22 11.47C7.51 11.18 7.99 11.18 8.28 11.47L10.58 13.77L15.72 8.63C16.01 8.34 16.49 8.34 16.78 8.63C17.07 8.92 17.07 9.4 16.78 9.69L11.11 15.36C10.97 15.5 10.78 15.58 10.58 15.58Z"
        fill="#16A34A"
      />
    </svg>
  </div>
);

// Data field component
interface DataFieldProps {
  label: string;
  value: string;
}

const DataField: React.FC<DataFieldProps> = ({ label, value }) => (
  <div className="font-iransans flex items-center justify-end gap-4 text-sm text-gray-700">
    <div className="flex flex-col gap-0.5 text-right">
      <span className="font-semibold text-[#353535]">{label}</span>
      <span className="text-xs text-[#727272]">{value}</span>
    </div>
    <CheckmarkIcon />
  </div>
);

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
