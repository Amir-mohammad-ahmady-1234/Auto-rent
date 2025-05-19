import CarCard from './CarCard';
import CarsListHeader from './CarsListHeader';

const carsData = [
  {
    id: 1,
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/f1037e973ebe648dc07b71753ab7369b8f69641e?placeholderIfAbsent=true',
    title: 'اجاره جنسیس کوپه',
    model: '2016',
    dailyPrice: '8,500,000',
    monthlyPrice: '8,500,000',
    deposit: '80 میلیون تومان',
  },
  {
    id: 2,
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/6cae8afd917916381bfeaaa1dda381a68fba179a?placeholderIfAbsent=true',
    title: 'اجاره تویوتا لندکروز در تهران 2013',
    model: '2016',
    dailyPrice: '8,500,000',
    monthlyPrice: '8,500,000',
    deposit: '80 میلیون تومان',
  },
  {
    id: 3,
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/731eb47892c68cbe0f98db2a99f3e70dbce3c849?placeholderIfAbsent=true',
    title: 'اجاره بنز E350 سدان',
    model: '2016',
    dailyPrice: '8,500,000',
    monthlyPrice: '8,500,000',
    deposit: '80 میلیون تومان',
  },
  {
    id: 4,
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/ffba8986276e49fc0ae371097249c9e82bfb81d4?placeholderIfAbsent=true',
    title: 'اجاره بنز sl کروک',
    model: '2016',
    dailyPrice: '8,500,000',
    monthlyPrice: '8,500,000',
    deposit: '80 میلیون تومان',
  },
  {
    id: 5,
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/8cc4239ad44c5478d4813729c8021c52b6820cc9?placeholderIfAbsent=true',
    title: 'اجاره هیوندای توسان 2014',
    model: '2016',
    dailyPrice: '8,500,000',
    monthlyPrice: '8,500,000',
    deposit: '80 میلیون تومان',
  },
  {
    id: 6,
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/3c56450bb8c48444d02b6ce9e8b7913720447eb9?placeholderIfAbsent=true',
    title: 'اجاره بی ام و 528',
    model: '2016',
    dailyPrice: '8,500,000',
    monthlyPrice: '8,500,000',
    deposit: '80 میلیون تومان',
  },
];

const CarsList = () => {
  return (
    <>
      <CarsListHeader />
      <div className="mt-6 px-4 font-[Estedad-FD] sm:px-2 md:max-w-full">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {carsData.map((car) => (
            <CarCard
              key={car.id}
              image={car.image}
              title={car.title}
              model={car.model}
              dailyPrice={car.dailyPrice}
              monthlyPrice={car.monthlyPrice}
              deposit={car.deposit}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CarsList;
