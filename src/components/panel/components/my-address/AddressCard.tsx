import { HiOutlineDotsVertical } from 'react-icons/hi';

interface AddressCardProps {
  returnLocation: string;
  adress: string;
  userPhone: string;
  name: string;
  email: string;
  nationalCode: string;
}

export function AddressCard({
  returnLocation,
  adress,
  userPhone,
  name,
  email,
  nationalCode,
}: AddressCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      {/* توضیحات راست */}
      <div className="flex-1 pr-4 text-right">
        <p className="text-sm font-medium text-gray-900">
          {returnLocation} - {adress}
        </p>
        <p className="text-xs text-gray-500">ایمیل: {email}</p>
        <p className="text-xs text-gray-500">کد ملی: {nationalCode}</p>
        <p className="text-xs text-gray-500">موبایل: {userPhone}</p>
        <p className="text-xs text-gray-500">گیرنده: {name}</p>
      </div>

      {/* عکس و دکمه سمت چپ */}
      <div className="flex flex-col items-end space-y-3 space-x-2 rtl:space-x-reverse">
        <button className="text-gray-400 hover:text-gray-600">
          <HiOutlineDotsVertical className="h-5 w-5" />
        </button>
        <div className="h-20 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
          <img
            src="/images/Map of Tehran Streetscape.png"
            alt="Tehran Map"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
