import type { MainCarType } from '../../types/MainCarType';

const AboutCarComponent = ({ carInfo }: MainCarType) => {
  return (
    <div className="mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-4 text-xl font-semibold text-yellow-600">
        درباره خودرو
      </h3>
      <p className="leading-relaxed text-gray-700">{carInfo.about}</p>
    </div>
  );
};

export default AboutCarComponent;
