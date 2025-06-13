import type { MainCarType } from '../../types/MainCarType';

const FeaturesCarComponent = ({ carInfo }: MainCarType) => {
  const { features } = carInfo;
  return (
    <div className="mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-4 text-xl font-semibold text-yellow-600">امکانات</h3>
      <div className="space-y-3">
        {features.map(({ icon, title }) => (
          <div className="flex items-center gap-3">
            <span>{icon}</span>
            <span>{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesCarComponent;
