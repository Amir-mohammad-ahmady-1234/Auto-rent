import { type InputHTMLAttributes } from 'react';

interface RentalDaysInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RentalDaysInput = ({
  value,
  onChange,
  ...rest
}: RentalDaysInputProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <label
        htmlFor="rentalDays"
        className="text-sm font-semibold text-gray-700"
      >
        تعداد روز اجاره
      </label>
      <input
        type="number"
        id="rentalDays"
        min={1}
        placeholder="مثلا ۳"
        value={value}
        onChange={onChange}
        className="focus:border-primary focus:ring-primary/20 w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-base shadow-sm transition outline-none focus:ring-2"
        {...rest}
      />
    </div>
  );
};

export default RentalDaysInput;
