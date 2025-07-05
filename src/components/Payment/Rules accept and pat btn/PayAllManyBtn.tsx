const PayAllManyBtn = ({ isRulsAccept }: { isRulsAccept: boolean }) => {
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
            ۴۵,۵۸۴,۰۰۰ تومان
          </span>
        </div>

        <button
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
