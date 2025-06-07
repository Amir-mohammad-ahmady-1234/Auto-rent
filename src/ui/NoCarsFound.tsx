import noCarsImage from '../assets/no-cars-found.png';

const NoCarsFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[10vh] text-center px-4">
      <img
        src={noCarsImage}
        alt="No cars found"
        className="w-96 h-auto mb-6"
      />
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        هیچ خودرویی یافت نشد!
      </h2>
      <p className="text-gray-500 text-sm">
        .موردی با فیلترهای انتخابی شما پیدا نشد. لطفاً فیلترها را تغییر دهید و دوباره امتحان کنید
      </p>
    </div>
  );
};

export default NoCarsFound;
