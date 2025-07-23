import { useNavigate } from 'react-router-dom';

interface DetailsPropsTypes {
  title: string;
  pickupLocation: string;
  returnLocation: string;
  rentalType: string;
  deliveryDate: string;
  returnDate: string;
}

const DetailsOfOrder = ({
  title,
  pickupLocation,
  returnLocation,
  rentalType,
  deliveryDate,
  returnDate,
}: DetailsPropsTypes) => {
  const navigate = useNavigate();

  function handleOrderTracking() {
    navigate('/panel/my_reserved');
  }

  return (
    <div className="mx-auto my-12 max-w-4xl px-4 text-right" dir="rtl">
      {/* Banner */}
      <div className="flex items-center justify-center space-x-3 rounded-lg border border-green-200 bg-green-50 p-4">
        <svg
          className="h-6 w-6 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="font-medium text-green-800">
          پرداخت شما با موفقیت انجام شد.
        </span>
      </div>

      {/* Subtext */}
      <p className="mt-4 text-center text-gray-700">
        خودروی شما آماده تحویل می‌باشد، کارشناسان ما در سریع‌ترین زمان ممکن جهت
        پیگیری سفارش با شما تماس خواهند گرفت.
      </p>

      {/* Order Details Card */}
      <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-center text-lg font-semibold">جزئیات سفارش</h2>
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 text-center sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm text-gray-500">خودرو</p>
            <p className="mt-1 font-medium">{title}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">محل تحویل</p>
            <p className="mt-1 font-medium">{pickupLocation}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">محل بازگشت</p>
            <p className="mt-1 font-medium">{returnLocation}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">مناسب ماشین عروس</p>
            <p className="mt-1 font-medium">
              {rentalType?.includes('ماشین عروس') ? 'بله' : 'خیر'}
            </p>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-sm text-gray-500">راننده</p>
            <p className="mt-1 font-medium">
              {rentalType?.includes('با راننده') ? 'با راننده' : 'بدون راننده'}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">تاریخ تحویل</p>
            <p className="mt-1 font-medium">{deliveryDate}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">تاریخ بازگشت</p>
            <p className="mt-1 font-medium">{returnDate}</p>
          </div>
        </div>

        <button
          onClick={handleOrderTracking}
          className="mt-8 w-full cursor-pointer rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700"
        >
          پیگیری سفارش
        </button>
      </div>
    </div>
  );
};

export default DetailsOfOrder;
