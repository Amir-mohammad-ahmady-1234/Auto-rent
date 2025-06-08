import { formatNumber } from '../../../utils/formatNumber.1';

const FilterByPrice = ({
  inputValue,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
}: {
  inputValue: string;
  maxPrice: string;
  onMinPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMaxPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <h3 className="mb-2 text-sm font-bold">قیمت اجاره خودرو</h3>
      <div className="mb-2 flex items-center justify-between text-xs text-gray-600">
        <span>از {formatNumber(inputValue)} تومان</span>
        <span>تا {formatNumber(maxPrice)} تومان</span>
      </div>
      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-xs text-gray-600">حداقل قیمت</label>
          <input
            type="range"
            min="0"
            max="60000000"
            step={100_000}
            className="w-full accent-blue-500"
            value={inputValue}
            onChange={onMinPriceChange}
          />
        </div>
        <div>
          <label className="mb-1 block text-xs text-gray-600">
            حداکثر قیمت
          </label>
          <input
            type="range"
            min="0"
            max="60000000"
            step={100_000}
            className="w-full accent-blue-500"
            value={maxPrice}
            onChange={onMaxPriceChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterByPrice;
