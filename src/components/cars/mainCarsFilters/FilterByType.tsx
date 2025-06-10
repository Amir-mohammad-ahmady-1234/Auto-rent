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
        ].map((type) => (
          <li
            key={type}
            onClick={() => onRadioTypeChange(type)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                onRadioTypeChange(type);
              }
            }}
            role="radio"
            aria-checked={selectedCarType === type}
            className={`flex cursor-pointer items-center gap-3 rounded border px-3 py-2 select-none ${
              selectedCarType === type
                ? 'border-blue-700 bg-blue-500 text-white'
                : 'border-gray-300 bg-white hover:bg-gray-100'
            }`}
          >
            {/* دایره رادیو */}
            <div
              className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                selectedCarType === type
                  ? 'border-blue-700 bg-blue-500'
                  : 'border-gray-400 bg-white'
              }`}
            >
              {/* دایره داخلی که وقتی انتخاب شده سفیده */}
              {selectedCarType === type && (
                <div className="h-2.5 w-2.5 rounded-full bg-white" />
              )}
            </div>

            <span>اجاره خودرو {type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterByType;
