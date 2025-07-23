import { HiPlusCircle } from 'react-icons/hi';
import { AddressCard } from '../components/my-address/AddressCard';
import { useGetReservedCars } from '../../../hooks/useGetReservedCars';
import FullPageLoading from '../../../ui/FullPageLoading';
import { Error } from '../components/Error';

function MyAddress() {
  const { reservations: addresses, error, isLoading } = useGetReservedCars();

  if (isLoading) return <FullPageLoading />;

  if ((addresses?.length ?? 0) < 1)
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="rounded-2xl bg-gray-300 p-8 text-gray-600">
          ادرسی از شما ثبت نشده است , با رزرو یک ماشین ادرس جدیدی را ثبت کنید.
        </p>
      </div>
    );

  if (error)
    return (
      <Error message="خطا در دریافت ماشین های اجاره شده ی شما. لطا دوباره تلاس کنید" />
    );

  return (
    <div className="space-y-4 rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">آدرس‌های من</h2>
        <button className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800">
          ثبت آدرس جدید <HiPlusCircle className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-4">
        {addresses?.map((addr, index) => <AddressCard key={index} {...addr} />)}
      </div>
    </div>
  );
}

export default MyAddress;
