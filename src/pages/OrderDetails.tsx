import { useNavigate } from 'react-router-dom';
import StepManagement from '../ui/StepManagement';
import { useEffect } from 'react';
import { useStep } from '../context/handleReserveSteps/useStep';

const OrderDetails = () => {
  const navigate = useNavigate();
  const { currentStep } = useStep();

  useEffect(
    function () {
      if (currentStep === 1) navigate('/rent');
    },
    [currentStep, navigate]
  );

  return (
    <>
      <StepManagement />

      <section className="mx-auto my-10 max-w-3xl px-4">
        <div className="rounded-md border border-green-300 bg-green-100 p-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <span className="text-lg font-medium text-green-700">
              پرداخت با موفقیت انجام شد.
            </span>
            <svg
              className="h-10 w-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="mt-4 text-gray-700">
            خودروی شما آماده تحویل می‌باشد. کارشناسان ما در سریع‌ترین زمان ممکن
            جهت پیگیری سفارش با شما تماس خواهند گرفت.
          </p>
        </div>

        <div className="mt-6 rounded-md border bg-white p-4 shadow-sm">
          <h2 className="mb-4 text-center text-lg font-semibold">
            جزئیات سفارش
          </h2>
          <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-3">
            <div>
              <p className="text-gray-500">خودرو</p>
              <p className="font-medium">بنز S500</p>
            </div>
            <div>
              <p className="text-gray-500">محل تحویل</p>
              <p className="font-medium">تحویل در محل تهران</p>
            </div>
            <div>
              <p className="text-gray-500">محل</p>
              <p className="font-medium">تهران</p>
            </div>
            <div>
              <p className="text-gray-500">تاریخ تحویل</p>
              <p className="font-medium">1404/01/10</p>
            </div>
            <div>
              <p className="text-gray-500">تاریخ بازگشت</p>
              <p className="font-medium">1404/01/28</p>
            </div>
            <div>
              <p className="text-gray-500">محل بازگشت</p>
              <p className="font-medium">تحویل در محل بازگشت</p>
            </div>
            <div className="col-span-2 sm:col-span-3">
              <p className="text-gray-500">راننده</p>
              <p className="font-medium">پارکنده</p>
            </div>
          </div>

          <button className="mt-6 w-full rounded-md bg-blue-600 py-2 text-white transition hover:bg-blue-700">
            پیگیری سفارش
          </button>
        </div>
      </section>
    </>
  );
};

export default OrderDetails;
