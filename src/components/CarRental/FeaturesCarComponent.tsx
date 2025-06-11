import React from 'react';
import { FaUtensilSpoon } from 'react-icons/fa';
import { IoEllipsisHorizontalCircleSharp } from 'react-icons/io5';

const FeaturesCarComponent: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-4 text-xl font-semibold text-yellow-600">امکانات</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span>🔄</span>
          <span>کنترل اقلیم دو منطقه‌ای</span>
        </div>
        <div className="flex items-center gap-3">
          <span>🎢</span>
          <span>PRE-SAFE Brake</span>
        </div>
        <div className="flex items-center gap-3">
          <span>📸</span>
          <span>دوربین 360 درجه</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCarComponent;
