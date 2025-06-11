import React from 'react';

const MoreCarDetails: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-4 text-xl font-semibold text-yellow-600">مشخصات</h3>
      <div className="grid grid-cols-2 gap-4 text-gray-700">
        <div className="flex items-center">
          <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200">
            <span className="text-xs">⛽</span>
          </span>
          <span>مصرف سوخت</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200">
            <span className="text-xs">🚗</span>
          </span>
          <span>نوع بدنه</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200">
            <span className="text-xs">⚙️</span>
          </span>
          <span>گیربکس</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200">
            <span className="text-xs">📞</span>
          </span>
          <span>پشتیبانی</span>
        </div>
      </div>
    </div>
  );
};

export default MoreCarDetails;
