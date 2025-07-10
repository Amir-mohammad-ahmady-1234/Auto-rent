import { useStep } from '../../../context/handleReserveSteps/useStep';
import { useDepositPrice } from '../../../context/price deposit/useDepositPrice';
import { formatNumber } from '../../../utils/formatNumber.1';
import toast from 'react-hot-toast';

const PayAllManyBtn = ({ isRulsAccept }: { isRulsAccept: boolean }) => {
  const { totalAmount } = useDepositPrice();
  const { setCurrentStep } = useStep();

  function handlePay() {
    toast.success('پرداخت شما با موفقیت انجام شد.', {
      duration: 3000,
    });

    setCurrentStep(5);
  }

  return (
    <>
      {/* Gray payment summary box */}
      <div
        dir="rtl"
        className="mx-auto mt-2 flex w-full max-w-5xl flex-col items-center justify-between rounded-xl bg-[#E5E5E5] p-6 sm:flex-row"
      >
        <div
          dir="rtl"
          className="flex flex-col sm:flex-row sm:items-center sm:space-x-2"
        >
          <span className="mb-2 text-xl font-bold text-[#353535] sm:mb-0">
            مبلغ قابل پرداخت:
          </span>
          <span className="text-2xl font-bold text-[#353535]">
            {formatNumber(totalAmount)} تومان
          </span>
        </div>

        <button
          onClick={handlePay}
          disabled={!isRulsAccept}
          className={`mt-4 cursor-pointer rounded-lg px-12 py-2 text-white transition duration-200 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none sm:mt-0 ${
            isRulsAccept
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'cursor-not-allowed bg-gray-400'
          }`}
        >
          پرداخت
        </button>
      </div>
    </>
  );
};

export default PayAllManyBtn;
