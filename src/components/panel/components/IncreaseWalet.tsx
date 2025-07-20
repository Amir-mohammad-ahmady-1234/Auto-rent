import { useState } from "react";

const IncreaseWalet = () => {
  const quickAmounts = [100000, 200000, 300000];

  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');

  const handleQuickSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    setSelectedAmount(null);
  };

  const handleIncrease = () => {
    const amount = selectedAmount ?? Number(customAmount);
    if (!amount) return;
    // call API to increase credit
    console.log('افزایش اعتبار به مقدار:', amount);
  };

  return (
    <>
      <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex gap-4">
          {quickAmounts.map((amount) => (
            <button
              key={amount}
              onClick={() => handleQuickSelect(amount)}
              className={`rounded border px-4 py-2 text-sm ${selectedAmount === amount ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'} hover:bg-blue-100`}
            >
              {amount.toLocaleString()} تومان
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="مبلغ موردنظر خود را وارد کنید..."
          value={customAmount}
          onChange={handleCustomChange}
          className="flex-1 rounded border px-4 py-2 text-sm text-gray-700 focus:outline-none"
        />
      </div>
      <button
        onClick={handleIncrease}
        className="w-full rounded bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        افزایش اعتبار
      </button>
    </>
  );
};

export default IncreaseWalet;
