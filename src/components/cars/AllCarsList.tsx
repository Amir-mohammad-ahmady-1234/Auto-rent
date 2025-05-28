import { useContext } from "react";
import Car from "../../features/rentCar/Car";
import { CarsContext } from "../../context/cars/CarsContext";

const AllCarsList = () => {
  const { cars } = useContext(CarsContext);

  return (
    <section className="overflow-y-auto">
      <div className="mt-6 px-4 font-[Estedad-FD] sm:px-2 md:max-w-full">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {cars.map((carDetails) => (
            <Car carDetails={carDetails} key={carDetails.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCarsList;
