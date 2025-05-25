import React from 'react';

export const AboutNetwork: React.FC = () => {
  return (
    <div className="mt-5 flex w-full max-w-[1220px] flex-col items-stretch justify-center rounded-2xl bg-white px-6 py-6 max-md:max-w-full max-md:px-5">
      <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
        <div className="text-right font-['Estedad-FD_,_-apple-system,_Roboto,_Helvetica,_sans-serif'] text-2xl leading-[34px] font-bold text-[#353535] max-md:max-w-full">
          شبکه نمایندگان و شرکتهای اجاره خودروی همکار
        </div>

        <div className="mt-1 flex w-full flex-wrap items-center justify-end gap-[-3px] max-md:max-w-full">
          <div className="my-auto flex h-px w-[1135px] min-w-[240px] flex-1 flex-shrink rounded bg-[#D7D7D7]" />
          <div className="my-auto flex h-[3px] w-10 flex-shrink-0 rounded-lg bg-[#FDB713]" />
        </div>
      </div>

      <div className="mt-3 text-right font-['Estedad-FD_,_-apple-system,_Roboto,_Helvetica,_sans-serif'] text-sm leading-[25px] font-normal text-[#353535] capitalize max-md:max-w-full">
        اتورنت دارای شبکه ای شامل ایستگاه های داخل شهری و فرودگاهی می باشد که
        این ایستگاه ها توسط نمایندگان و شرکای تجاری نگهداری و مدیریت می‌گردند،
        افرادی که علاقمند به سرمایه‌گذاری و همکاری با ناواران می‌باشند می‌توانند
        بصورت نمایندگی یا همکار تجاری فعالیت نمایند ، در هر صورت این اشخاص می
        بایست دوره های آموزش را طبق استاندارد بین‌المللی گذرانده و تحت استاندارد
        و کیفیت مورد نیاز ناواران شروع به فعالیت نمایند.دارا بودن سرمایه مورد
        نیاز جهت خرید حداقل تعداد خودروهای صفر کیلومتر در محدوده تحت پوشش و قبل
        از هرچیز اهمیت به اصل خدمت به هموطنان و رضایت مشتریان از شرایط اصلی
        اعطای نمایندگی می بانمایندگان دارای اپلیکیشن موبایل و سیستم آنلاین مرتبط
        با سامانه مدیریت مرکزی می باشند، و تمامی امور رزرو و محاسبات مرتبط بصورت
        خودکار انجام پذیرفته و نمایندگان از پشتیبانی کامل شرکت مرکزی در تمامی
        مراحل برخوردار خواهند بود.
      </div>
    </div>
  );
};
