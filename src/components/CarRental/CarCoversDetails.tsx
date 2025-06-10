import React from 'react';
import InsuranceRadio from './InsuranceRadio';

const CarCoversDetails: React.FC = () => {
  return (
    <div
      dir="rtl"
      className="mx-auto max-w-[704px] rounded-2xl bg-white px-4 py-6 sm:px-6 md:px-8 lg:px-10"
    >
      {/* Title */}
      <div className="font-IRANYekan text-right text-3xl font-bold text-[#353535]">
        پوشش‌ها
      </div>
      <div dir="ltr" className="mt-1 flex items-center justify-end">
        <div className="h-px flex-1 bg-[#D7D7D7]" />
        <div className="mx-1 h-[4px] w-10 rounded-lg bg-[#FDB713]" />
      </div>

      {/* Divider */}
      <div className="my-6 h-px w-full bg-[#EDEDED]" />

      {/* Header with Radios */}
      <div className="font-IRANYekan mb-4 grid grid-cols-3 items-center text-sm font-semibold text-black">
        <div className="text-right"></div>

        <InsuranceRadio />
      </div>

      {/* Table */}
      <div className="font-IRANYekan flex flex-col gap-4 text-sm text-black">
        {[
          { full: '32,045,275', basic: '0', label: 'قیمت' },
          { full: '250,000,000', basic: '250,000,000', label: 'ودیعه' },
          {
            full: '50,000,000',
            basic: '250,000,000',
            label: 'حداکثر تعهد خسارت جزیی',
          },
          {
            full: '500,000,000',
            basic: '1,500,000,000',
            label: 'حداکثر تعهد خسارت کلی',
          },
          {
            full: 'اخذ نمی گردد',
            basic: 'بطور کامل',
            label: 'اخذ افت خودرو در زمان تصادف',
          },
        ].map((item, index) => (
          <div key={index} className="grid grid-cols-3 items-center">
            <div className="text-right font-semibold">{item.label}</div>
            <div className="text-center">{item.basic}</div>
            <div className="text-center">{item.full}</div>
          </div>
        ))}

        {/* Last Row - Car Sleep */}
        <div className="grid grid-cols-3 items-start text-xs leading-[22px]">
          <div className="text-right text-sm leading-[25px] font-semibold">
            خواب خودرو
          </div>
          <div className="text-center">
            تمام روزهای خواب <br /> به قیمت اجاره
          </div>
          <div className="text-center">
            نصف قیمت اجاره <br /> حداکثر بمدت 30 روز
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCoversDetails;
