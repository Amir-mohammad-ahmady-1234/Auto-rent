import type { MainCarType } from '../../types/MainCarType';

const MoreCarDetails = ({ carInfo }: MainCarType) => {
  const { details } = carInfo;

  return (
    <div className="mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
      <h3 className="mb-6 text-2xl font-bold text-yellow-600">مشخصات خودرو</h3>
      <div className="grid grid-cols-2 gap-6 text-gray-800">
        {details.map(({ title, icon, descriptionWithIcon }) => (
          <div key={title} className="flex flex-col items-start space-y-1">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 text-lg text-yellow-600">
                {icon}
              </div>
              <span className="text-base font-semibold">{title}</span>
            </div>
            <p className="pr-10 text-sm text-gray-500">{descriptionWithIcon}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreCarDetails;
