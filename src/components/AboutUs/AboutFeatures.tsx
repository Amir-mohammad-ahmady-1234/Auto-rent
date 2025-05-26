import React from 'react';

import icon from '../../assets/aboutPageLogos/icon.png';
import icon2 from '../../assets/aboutPageLogos/icon2.png';
import icon3 from '../../assets/aboutPageLogos/icon3.png';

export const AboutFeatures: React.FC = () => {
  return (
    <div className="mt-6 flex w-full max-w-[1222px] flex-wrap items-center justify-center gap-6 max-md:max-w-full">
      {/* Feature Card 1 */}
      <div className="my-auto flex min-w-[240px] flex-1 flex-shrink basis-0 flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white px-6 py-4 max-md:px-5">
        <div className="flex w-[264px] max-w-full flex-col items-center justify-start">
          <div>
            <img src={icon3} alt="box icon" />
          </div>

          <div className="font-iranyekan mt-2 text-right text-base leading-[1.4] font-bold text-[#414141]">
            قیمت مناسب
          </div>

          <div className="font-iransans mt-2 text-center text-xs leading-[22px] font-normal text-[#757575]">
            هدف ما، ارائه بهترین خدمات با مناسب ترین قیمت ممکن است.
          </div>
        </div>
      </div>

      {/* Feature Card 2 */}
      <div className="my-auto flex min-w-[240px] flex-1 flex-shrink basis-0 flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white px-6 py-4 max-md:px-5">
        <div className="flex w-[264px] max-w-full flex-col items-center justify-start">
          <div>
            <img src={icon2} alt="watch number icon" />
          </div>

          <div className="font-iranyekan mt-2 text-right text-base leading-[1.4] font-bold text-[#414141]">
            پشتیبانی 24 ساعته
          </div>

          <div className="font-iransans mt-2 text-center text-xs leading-[22px] font-normal text-[#757575]">
            کارشناسان ما در هر زمان و مکان، پاسخگوی سوالات شما خواهند بود.
          </div>
        </div>
      </div>

      {/* Feature Card 3 */}
      <div className="my-auto flex min-w-[240px] flex-1 flex-shrink basis-0 flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white px-6 py-4 max-md:px-5">
        <div className="flex w-[264px] max-w-full flex-col items-center justify-start">
          <div>
            <img src={icon} alt="cart icon" />
          </div>

          <div className="font-iranyekan mt-2 text-right text-base leading-[1.4] font-bold text-[#414141]">
            تحویل در محل
          </div>

          <div className="font-iransans mt-2 text-center text-xs leading-[22px] font-normal text-[#757575]">
            تحویل خودرو در زمان و مکان تعیین شده توسط شما خواهد بود.
          </div>
        </div>
      </div>
    </div>
  );
};
