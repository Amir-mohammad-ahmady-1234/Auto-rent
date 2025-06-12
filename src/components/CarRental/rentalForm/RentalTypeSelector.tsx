type RentalTypeSelectorProps = {
  value: string;
  onChange: (type: string) => void;
};

const rentalTypes = [
  'اجاره خودرو با راننده',
  'اجاره خودرو بی راننده',
  'اجاره ماشین عروس',
];

const RentalTypeSelector = ({ value, onChange }: RentalTypeSelectorProps) => {
  return (
    <div className="flex flex-wrap justify-start gap-2">
      {rentalTypes.map((type) => (
        <button
          key={type}
          type="button"
          onClick={() => onChange(type)}
          className={`rounded-full border px-3 py-2 text-sm transition-all duration-200 ${
            value === type
              ? 'border-blue-600 bg-blue-600 text-white shadow-sm'
              : 'border-gray-300 bg-white text-gray-800 hover:bg-gray-100'
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default RentalTypeSelector;
