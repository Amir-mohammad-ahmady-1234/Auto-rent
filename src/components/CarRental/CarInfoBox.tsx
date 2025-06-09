import React from 'react';
import {
  FaStar,
  FaStarHalfAlt,
  FaUserFriends,
  FaSuitcase,
  FaBirthdayCake,
} from 'react-icons/fa';
import type { TCar } from '../../types/CarType';

type CarInfoBoxProps = {
  carInfo: TCar;
};

const CarInfoBox = ({ carInfo }: CarInfoBoxProps) => {
  return (
    <div
      dir="ltr"
      className="mx-auto flex w-full max-w-3xl flex-col gap-3 rounded-xl bg-white p-3 shadow sm:gap-4 sm:p-4"
    >
      {/* Top Row: Rating + Title */}
      <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
        <div className="flex text-xl text-yellow-400">
          {[...Array(Math.floor(carInfo.rate))].map((_, i) => (
            <FaStar key={i} />
          ))}
          {carInfo.rate - Math.floor(carInfo.rate) >= 0.5 && <FaStarHalfAlt />}
        </div>
        <h2 className="text-base font-bold text-gray-800 sm:text-xl lg:text-2xl">
          {carInfo.brand + ' ' + carInfo.model}
        </h2>
      </div>

      {/* Divider */}
      <hr className="border-gray-300" />

      {/* Info Badges */}
      <div className="flex flex-wrap justify-end gap-3 text-sm sm:text-base">
        <Badge
          icon={<FaUserFriends />}
          text={`تعداد سرنشین: ${carInfo.maxPassenger} نفر`}
        />
        <Badge
          icon={<FaSuitcase />}
          text={`چمدان: ${carInfo.maxBag} چمدان بزرگ`}
        />
        <Badge
          icon={<FaBirthdayCake />}
          text={`حداقل سن راننده: ${carInfo.minDriverAge} سال`}
        />
      </div>
    </div>
  );
};

type BadgeProps = {
  icon: React.ReactNode;
  text: string;
};

const Badge: React.FC<BadgeProps> = ({ icon, text }) => (
  <div className="flex cursor-pointer flex-row-reverse items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700 transition-all duration-200 hover:bg-yellow-100 hover:shadow-md sm:gap-2 sm:px-3 sm:py-1.5 sm:text-sm">
    <span className="text-lg text-gray-600">{icon}</span>
    <span>{text}</span>
  </div>
);

export default CarInfoBox;
