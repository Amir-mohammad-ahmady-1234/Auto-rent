function FilterCars() {
  return (
    <>
      {/* قیمت اجاره خودرو */}
      <div>
        <h3 className="mb-2 text-sm font-bold">قیمت اجاره خودرو</h3>
        <div className="mb-2 flex items-center justify-between text-xs text-gray-600">
          <span>۶۰٬۰۰۰٬۰۰۰ تومان</span>
          <span>از</span>
          <span>۰ تومان</span>
        </div>
        <input
          type="range"
          min="0"
          max="60000000"
          className="w-full accent-blue-500"
        />
      </div>

      {/* برند خودرو */}
      <div>
        <h3 className="mb-2 text-sm font-bold">برند خودرو</h3>
        <ul className="space-y-1 text-sm">
          {[
            'اجاره بنز',
            'اجاره بی ام و',
            'اجاره پژو',
            'اجاره پورشه',
            'اجاره کیا',
            'اجاره هیوندای',
          ].map((brand, i) => (
            <li key={i} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`brand-${i}`}
                className="accent-blue-500"
              />
              <label htmlFor={`brand-${i}`}>{brand}</label>
            </li>
          ))}
        </ul>
      </div>

      {/* نوع اجاره */}
      <div>
        <h3 className="mb-2 text-sm font-bold">اجاره خودرو بر اساس نیاز شما</h3>
        <ul className="space-y-2 text-sm">
          {[
            'اجاره خودرو با راننده',
            'اجاره خودرو بدون راننده',
            'اجاره خودرو ایرانی',
            'اجاره خودرو لوکس',
            'اجاره خودرو تشریفات',
            'اجاره ماشین عروس',
          ].map((option, i) => (
            <li key={i} className="flex items-center gap-2">
              <input
                type="radio"
                name="rentType"
                id={`rent-${i}`}
                className="accent-blue-500"
              />
              <label htmlFor={`rent-${i}`}>{option}</label>
            </li>
          ))}
        </ul>
      </div>

      {/* بیمه */}
      <div>
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
      </div>
    </>
  );
}

export default FilterCars;
