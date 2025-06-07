const FilterByBrand = ({
  selectedBrands,
  onCheckboxChange,
}: {
  selectedBrands: string[];
  onCheckboxChange: (brand: string) => void;
}) => {
  return (
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
                onChange={() => onCheckboxChange(brand)}
                readOnly
              />
              <label htmlFor={`brand-${i}`}>اجاره {brand}</label>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default FilterByBrand;
