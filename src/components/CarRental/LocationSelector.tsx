const locations = ['تهران - فرودگاه امام', 'تهران - دفتر مرکزی'];

const LocationSelector = () => {
  return (
    <>
      {['محل تحویل خودرو', 'محل بازگشت خودرو'].map((label, idx) => (
        <select
          key={idx}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>{label}</option>
          {locations.map((loc, index) => (
            <option key={index}>{loc}</option>
          ))}
        </select>
      ))}
    </>
  );
};

export default LocationSelector;
