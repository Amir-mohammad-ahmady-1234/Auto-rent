const FilterByType = ({
  selectedCarType,
  onRadioTypeChange,
}: {
  selectedCarType: string;
  onRadioTypeChange: (type: string) => void;
}) => {
  return (
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
              onClick={() => onRadioTypeChange(type)}
              readOnly
            />
            <label htmlFor={`rent-${i}`}>اجاره خودور {type}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterByType;
