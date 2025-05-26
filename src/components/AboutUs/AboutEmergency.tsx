import React from 'react';

export const AboutEmergency: React.FC = () => {
  return (
    <div className="font-iransans mt-[22px] flex w-full max-w-[1220px] flex-col items-stretch justify-start max-md:max-w-full">
      {/* Emergency Banner */}
      <div className="relative flex h-[529px] w-full flex-col items-start justify-start overflow-hidden rounded-2xl text-center text-white max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8e38359bab7f44c0f5ffad25f913fdf8c9cbcd7?placeholderIfAbsent=true"
          className="aspect-[2.3] w-full self-stretch object-contain object-center max-md:max-w-full"
          alt="Emergency Services"
        />

        <div className="absolute right-[-4px] bottom-0 left-0 z-0 flex h-[696px] min-h-[529px] w-full bg-[rgba(12,12,12,0.7)]" />

        <div className="absolute bottom-[114px] left-1/2 z-0 h-[75px] w-[937px] -translate-x-1/2 text-sm leading-[25px] font-normal text-white max-md:max-w-full">
          شبکه تحت پوشش اتورنت که با سرمایه‌گذاری و همکاری شرکای تجاری در خدمت
          مشتریان قرار گرفته است شامل 2000 نقطه در سراسر کشور ایــران و مناطق
          آزاد تجاری مـی‌باشد که باعث شده سرعت امداد رسانی در هر نقطه ایران به
          کمتر از 30 دقیقه کاهش یابد، امدادگران و خودروهای امدادی همگی مجهز به
          تجهیزات جهت رفع معایب و تعمیرات ساده بوده و بسیاری از مشکلات در همین
          مرحله به سادگی رفع می گردند.
        </div>

        <div className="absolute bottom-[205px] left-1/2 z-0 h-[45px] w-[1172px] -translate-x-1/2 text-[32px] leading-[1.4] font-bold text-white max-md:max-w-full">
          شبکه امدادی و تعمیرات خودرو
        </div>
      </div>

      {/* Service Cards */}
      <div className="flex flex-wrap items-start justify-start gap-6 self-center max-md:max-w-full">
        {/* Service Card 1 */}
        <div className="flex min-h-[142px] w-[494px] min-w-[240px] items-center justify-start gap-x-14 gap-y-10 max-md:max-w-full">
          <div className="my-auto flex w-[494px] min-w-[240px] flex-col items-stretch justify-center overflow-hidden rounded-2xl border border-[#C2C2C2] bg-white px-6 py-3 max-md:max-w-full max-md:px-5">
            <div className="font-iranyekan gap-1 self-center border-b-2 border-[#FDB713] text-center text-base font-bold text-[#0C0C0C]">
              ارائه خودرو جایگزین
            </div>

            <div className="mt-[10px] text-justify text-xs leading-[140%] font-normal text-[#0c0c0c] max-md:max-w-full">
              <span className="text-sm leading-[25px] text-[#353535]">
                با توجه به تعداد خودرو های موجود در اتورنت امکان ارائه خودروی
                جایگزین در خرابی ها و تعمیرات طولانی مدت که بصورت امدادی برطرف
                نگردند ، در هر نقطه از ایران میسر می باشد
              </span>
              <span className="text-base leading-[22px] font-bold text-[#353535]">
                .
              </span>
            </div>
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="flex w-[494px] min-w-[240px] items-center justify-start gap-x-14 gap-y-10 text-[#0C0C0C] max-md:max-w-full">
          <div className="my-auto flex w-[494px] min-w-[240px] flex-col items-stretch justify-center overflow-hidden rounded-2xl border border-[#C2C2C2] bg-white px-6 py-3 max-md:max-w-full max-md:px-5">
            <div className="font-iranyekan gap-1 self-center border-b-2 border-[#FDB713] text-center text-base font-bold text-[#0C0C0C]">
              خدمات شبانه روزی
            </div>

            <div className="mt-[10px] text-justify text-xs font-normal text-[#0C0C0C] max-md:max-w-full">
              اتورنت در تــمامی بخش‌های اصـلی از جـمله مرکز تماس مشتریان و خدمات
              امدادی بصورت دائمی تمامی روزهای هفته و 24 ساعته فعال است، بیشتر
              ایستگاه های کاری تحویل خودرو نیز بصورت 24 ساعته می‌باشند ، فقط
              واحد اداری و فروش اجاره های بلند مدت در ساعات اداری و روزهای اداری
              فعال می باشند.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
