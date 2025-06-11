import React from 'react';

const AboutCarComponent: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h3 className="text-xl font-semibold text-yellow-600 mb-4">درباره خودرو</h3>
      <p className="text-gray-700 leading-relaxed">
        این خودرویی قدرتمند و شیک با طراحی مدرن و امکانات پیشرفته است که تجربه‌ای بی‌نظیر از رانندگی را برای شما به ارمغان می‌آورد. موتور قدرتمند آن با گشتاور بالا و سیستم تعلیق پیشرفته، راحتی و ایمنی را در هر سفر تضمین می‌کند. این خودرو با طراحی داخلی لوکس و تکنولوژی‌های به‌روز، انتخابی ایده‌آل برای سفرهای طولانی و کوتاه است.
      </p>
    </div>
  );
};

export default AboutCarComponent;