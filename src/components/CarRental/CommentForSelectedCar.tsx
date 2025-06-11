import React from 'react';

const CommentForSelectedCar: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-md rounded-lg bg-white p-4 shadow-md">
      <div className="mb-4 flex items-center justify-between border-b pb-2">
        <h3 className="text-xl font-semibold text-yellow-600">نظرات</h3>
        <span className="text-sm text-yellow-500">4.7 ★</span>
      </div>
      <div className="space-y-4">
        <div className="flex items-start space-x-7">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb77c204054c70f00fa38010cdf7b8aaa0dc7df7?placeholderIfAbsent=true"
            alt="User"
            className="mr-3 h-10 w-10"
          />
          <div>
            <p className="text-sm text-gray-700">
              این خودرو عملکرد فوق‌العاده‌ای داره و تجربه رانندگی لذت‌بخشی رو
              ارائه می‌ده. پیشنهاد می‌کنم حتماً امتحانش کنید!
            </p>
            <p className="mt-1 text-xs text-gray-500">
              کاربر نمونه - 2 روز پیش
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentForSelectedCar;
