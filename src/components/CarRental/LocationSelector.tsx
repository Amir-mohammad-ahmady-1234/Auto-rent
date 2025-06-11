import {
  Controller,
  type Control,
  type FieldErrors,
  type FieldValues,
  type Path, 
} from 'react-hook-form';

type LocationSelectorProps<TFieldValues extends FieldValues = FieldValues> = {
  control: Control<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
};

const locations = ['تهران - فرودگاه امام', 'تهران - دفتر مرکزی'];

const LocationSelector = <TFieldValues extends FieldValues = FieldValues>({
  control,
  errors,
}: LocationSelectorProps<TFieldValues>) => {
  const fields: { label: string; name: Path<TFieldValues> }[] = [
    { label: 'محل تحویل خودرو', name: 'pickupLocation' as Path<TFieldValues> },
    { label: 'محل بازگشت خودرو', name: 'returnLocation' as Path<TFieldValues> },
  ];

  return (
    <>
      {fields.map(({ label, name }) => (
        <div key={String(name)} className="mb-4 flex flex-col">
          <label
            htmlFor={String(name)}
            className="mb-1 text-sm font-medium text-gray-700"
          >
            {label}
          </label>
          <Controller
            name={name}
            control={control}
            rules={{ required: `${label} را انتخاب کنید` }}
            render={({ field }) => (
              <select
                {...field}
                id={String(name)}
                className={`w-full rounded-lg border px-4 py-2 text-sm focus:ring-2 focus:outline-none ${
                  errors[name]
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-blue-500'
                }`}
              >
                <option value="">-- انتخاب کنید --</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            )}
          />
          {errors[name] && typeof errors[name]?.message === 'string' && (
            <p className="mt-1 text-xs text-red-600">{errors[name]?.message}</p>
          )}
        </div>
      ))}
    </>
  );
};

export default LocationSelector;
