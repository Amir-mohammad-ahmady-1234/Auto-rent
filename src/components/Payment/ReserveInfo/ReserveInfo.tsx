import { DataField } from './DataField';
import FullPageLoading from '../../../ui/FullPageLoading';
import { DateObject } from 'react-multi-date-picker';

export interface CarData {
  title: string;
}

export interface FormInfo {
  rentalType: string;
  deliveryTime: string;
  returnTime: string;
  deliveryDate: DateObject;
  returnDate: DateObject;
  pickupLocation: string;
  returnLocation: string;
}

interface ReserveInfoProps {
  data: [CarData, FormInfo];
}

const ReserveInfo = ({ data }: ReserveInfoProps) => {
  if (!data) return <FullPageLoading />;
  console.log(data);
  const carData = data[0];
  const formInfo = data[1];

  const { title } = carData;
  const {
    rentalType,
    deliveryTime,
    returnTime,
    deliveryDate,
    returnDate,
    pickupLocation,
    returnLocation,
  } = formInfo;

  const rows = [
    { label: 'ساعت تحویل', value: deliveryTime },
    { label: 'تاریخ تحویل', value: deliveryDate.format() },
    { label: 'خودرو', value: title },

    { label: 'ساعت برگشت', value: returnTime },
    { label: 'تاریخ بازگشت', value: returnDate.format() },
    { label: 'محل تحویل', value: pickupLocation },

    {
      label: 'مناسب ماشین عروس',
      value: rentalType?.includes('ماشین عروس') ? 'بله' : 'خیر',
    },
    {
      label: 'با راننده',
      value: rentalType?.includes('با راننده') ? 'با راننده' : 'بدون راننده',
    },
    { label: 'محل بازگشت', value: returnLocation },
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
