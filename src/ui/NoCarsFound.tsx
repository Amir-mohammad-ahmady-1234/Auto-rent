import noCarsImage from '../assets/no-cars-found.png';

const NoCarsFound = () => {
  return (
    <div className="flex min-h-[10vh] flex-col items-center justify-center px-4 text-center">
      <img src={noCarsImage} alt="No cars found" className="mb-6 h-auto w-96" />
      <h2 className="mb-2 text-xl font-semibold text-gray-700">
        هیچ خودرویی یافت نشد!
      </h2>
      <p className="text-sm text-gray-500">
        .موردی با فیلترهای انتخابی شما پیدا نشد. لطفاً فیلترها را تغییر دهید و
        اتصال خود را برسی کنید و سپس دوباره امتحان کنید
      </p>
    </div>
  );
};

export default NoCarsFound;
