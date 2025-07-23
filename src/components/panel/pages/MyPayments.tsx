import { useGetReservedCars } from '../../../hooks/useGetReservedCars';
import FullPageLoading from '../../../ui/FullPageLoading';
import { formatNumber } from '../../../utils/formatNumber.1';
import { Error } from '../components/Error';

const MyPayments = () => {
  const { reservations: payments, error, isLoading } = useGetReservedCars();

  if (isLoading) return <FullPageLoading />;

  if (error)
    return (
      <Error message="خطا در دریافت مشخصات پرداخت. اتصال خود را برسی کرده و مجددا تلاش کنید." />
    );

  if ((payments?.length ?? 0) < 1)
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="rounded-2xl bg-gray-300 p-8 text-gray-600">
          پرداختی از شما ثبت نشده است , با رزرو یک ماشین پرداخت جدیدی را ثبت
          کنید.
        </p>
      </div>
    );

  return (
    <div className="p-4">
      {/* Title */}
      <h2 className="text-right text-xl font-bold">پرداخت‌های من</h2>

      {/* Divider */}
      <div className="mt-2 border-b border-gray-300"></div>

      {/* Payments List */}
      <div className="mt-4 space-y-4">
        {payments?.map((payment) => (
          <div
            key={payment.id}
            className="flex flex-col items-center justify-between space-y-4 rounded-lg border p-4 shadow-sm md:flex-row md:space-y-0"
          >
            {/* Right Side - Car Image + Details */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src={payment.cars.image}
                alt={payment.cars.title}
                className="ml-10 h-20 w-30 rounded-md object-cover"
              />
              <div className="text-right">
                <p className="font-semibold">{payment.cars.title}</p>
                <p className="text-sm text-gray-600">
                  مدل: {payment.cars.model}
                </p>
                <p className="text-sm text-gray-600">
                  مدت اجاره: {payment.rentalDays} روز
                </p>
              </div>
            </div>

            {/* Left Side - Payment Info */}
            <div className="space-y-1 text-right">
              <p className="font-medium text-green-600">پرداخت موفق</p>
              <p className="text-sm text-gray-700">
                تاریخ ثبت رزرو: {payment.deliveryDate}
              </p>
              <p className="text-sm text-gray-700">
                هزینه کل: {formatNumber(payment.totalAmount)}
              </p>
              <p className="text-sm text-gray-700">شرکت: اتو رنت گسترش</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPayments;
