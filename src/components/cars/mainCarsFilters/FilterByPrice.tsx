import { formatNumber } from '../../../utils/formatNumber.1';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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
  // Convert to numbers for RangeSlider
  const min = Number(inputValue);
  const max = Number(maxPrice);

  // Handler for RangeSlider
  const handleChange = ([newMin, newMax]: [number, number]) => {
    // Simulate input event for compatibility
    onMinPriceChange({
      target: { value: String(newMin) },
    } as React.ChangeEvent<HTMLInputElement>);
    onMaxPriceChange({
      target: { value: String(newMax) },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div>
      <h3 className="mb-2 text-sm font-bold">قیمت اجاره خودرو</h3>
      <div className="mb-2 flex items-center justify-between text-xs text-gray-600">
        <span>از {formatNumber(min)} تومان</span>
        <span>تا {formatNumber(max)} تومان</span>
      </div>
      <div className="px-2">
        <Slider
          range
          min={0}
          max={60000000}
          step={100000}
          value={[min, max]}
          onChange={handleChange}
          trackStyle={{ backgroundColor: '#2563eb', height: 8 }}
          handleStyle={[
            {
              borderColor: '#2563eb',
              height: 28,
              width: 28,
              marginTop: -10,
              backgroundColor: '#fff',
              boxShadow: '0 2px 6px #aaa',
            },
            {
              borderColor: '#2563eb',
              height: 28,
              width: 28,
              marginTop: -10,
              backgroundColor: '#fff',
              boxShadow: '0 2px 6px #aaa',
            },
          ]}
          railStyle={{ backgroundColor: '#e5e7eb', height: 8 }}
        />
      </div>
    </div>
  );
};

export default FilterByPrice;
