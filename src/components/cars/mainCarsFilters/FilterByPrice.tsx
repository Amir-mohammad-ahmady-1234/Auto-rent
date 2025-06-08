import { formatNumber } from '../../../utils/formatNumber.1';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const FilterByPrice = ({
  min,
  max,
  onRangeChange,
}: {
  min: number;
  max: number;
  onRangeChange: (range: [number, number]) => void;
}) => {
  const handleSliderChange = (value: number | number[]) => {
    if (!Array.isArray(value) || value.length !== 2) return;
    onRangeChange([value[0], value[1]]);
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
          onChange={handleSliderChange}
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
