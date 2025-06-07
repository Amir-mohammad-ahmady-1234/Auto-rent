import { formatNumber } from '../../../utils/formatNumber.1';

const FilterByPrice = ({
  inputValue,
  onFilteredCars,
}: {
  inputValue: string;
  onFilteredCars: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <h3 className="mb-2 text-sm font-bold">قیمت اجاره خودرو</h3>
      <div className="mb-2 flex items-center justify-between text-xs text-gray-600">
        <span>از {formatNumber(inputValue)} تومان</span>
        <span>تا ۶۰٬۰۰۰٬۰۰۰ تومان</span>
      </div>
      <input
        type="range"
        min="0"
        max="60000000"
        step={100_000}
        className="w-full accent-blue-500"
        value={inputValue}
        onChange={onFilteredCars}
      />
    </div>
  );
};

export default FilterByPrice;
