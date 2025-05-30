import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  changePrice,
  filterBrand,
  filterCarType,
} from '../cars/filterCarsSlice';
import { formatNumber } from '../../utils/formatNumber.1';

function FilterCars() {
  const [inputValue, setInputValue] = useState<string>('0');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCarType, setSelectedCarType] = useState<string>('');

  const dispatch = useDispatch();

  function handleFilteredCars(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);

    dispatch(changePrice(e.target.value));
  }

  const handleCheckboxChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleRadioTypeChange = (type: string) => {
    if (selectedCarType === type) {
      setSelectedCarType('');
    } else {
      setSelectedCarType(type);
    }
  };

  useEffect(() => {
    dispatch(filterBrand(selectedBrands));
  }, [selectedBrands, dispatch]);

  useEffect(() => {
    dispatch(filterCarType(selectedCarType));
  }, [selectedCarType, dispatch]);

  return (
    <>
      {/* قیمت اجاره خودرو */}
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
          onChange={handleFilteredCars}
        />
      </div>

      {/* برند خودرو */}
      <div>
        <h3 className="mb-2 text-sm font-bold">برند خودرو</h3>
        <ul className="space-y-1 text-sm">
          {['بنز', 'بی ام و', 'پژو', 'پورشه', 'کیا', 'هیوندای'].map(
            (brand, i) => (
              <li key={i} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`brand-${i}`}
                  className="accent-blue-500"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleCheckboxChange(brand)}
                  readOnly
                />
                <label htmlFor={`brand-${i}`}>اجاره {brand}</label>
              </li>
            )
          )}
        </ul>
      </div>

      {/* نوع اجاره */}
      <div>
        <h3 className="mb-2 text-sm font-bold">اجاره خودرو بر اساس نیاز شما</h3>
        <ul className="space-y-2 text-sm">
          {[
            'با راننده',
            'بدون راننده',
            'ایرانی',
            'لوکس',
            'تشریفات',
            'ماشین عروس',
          ].map((type, i) => (
            <li key={i} className="flex items-center gap-2">
              <input
                type="radio"
                name="rentType"
                id={`rent-${i}`}
                className="accent-blue-500"
                checked={selectedCarType === type}
                onClick={() => handleRadioTypeChange(type)}
              />
              <label htmlFor={`rent-${i}`}>اجاره خودور {type}</label>
            </li>
          ))}
        </ul>
      </div>

      {/* بیمه */}
      {/* <div>
        <h3 className="mb-2 text-sm font-bold">بیمه</h3>
        <div className="flex items-center gap-4 text-sm">
          <label className="flex items-center gap-2">
            <input type="radio" name="insurance" className="accent-blue-500" />
            بیمه پایه
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="insurance" className="accent-blue-500" />
            بیمه کامل
          </label>
        </div>
      </div> */}
    </>
  );
}

export default FilterCars;
