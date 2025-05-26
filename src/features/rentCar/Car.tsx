import type { TCar } from '../../types/CarType';
import { toPersianNumbers } from '../../utils/toPersianNumbers';

interface Prop {
  carDetails: TCar;
}


const Car = ({ carDetails }: Prop) => {
  const { dailyPrice, deposit, id, image, model, monthlyPrice, title } =
    carDetails;

  return (
    <div
      dir="rtl"
      className="font-iransans flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white shadow-sm transition-all hover:shadow-md"
      key={id}
    >
      {/* تصویر خودرو */}
      <div className="flex h-[180px] w-full items-center justify-center bg-[#F9F9F9] p-4 sm:h-[200px] md:h-[220px]">
        <img
          src={image}
          className="h-auto max-h-[160px] w-auto max-w-[280px] object-contain object-center sm:max-h-[180px] md:max-h-[200px]"
          alt={title}
        />
      </div>

      {/* مشخصات خودرو */}
      <div className="flex flex-1 flex-col p-4">
        {/* عنوان و مدل */}
        <div className="mb-4">
          <h3 className="font-iranyekan text-base font-bold text-[#0C0C0C] sm:text-lg">
            {title}
          </h3>
          <div className="mt-2 flex items-center text-sm text-[#494949]">
            <span className="font-iransans">مدل: </span>
            <span className="font-iransans ml-2">{toPersianNumbers(model)}</span>
          </div>
        </div>

        {/* قیمت‌ها */}
        <div className="space-y-2">
          {/* قیمت روزانه */}
          <div className="flex items-center justify-between rounded-lg bg-[#F3F3F3] p-2.5 sm:p-3">
            <div className="flex items-center gap-2">
              <span className="font-iransans text-xs text-[#494949] sm:text-sm">
                روزانه
              </span>
              <span className="font-iransans text-xs text-[#212121] sm:text-sm">
                از ۱ تا ۳۰ روز:
              </span>
            </div>
            <span className="font-iranyekan text-sm font-extrabold text-[#194BF0] sm:text-base">
              {toPersianNumbers(dailyPrice)}
            </span>
          </div>

          {/* قیمت ماهانه */}
          <div className="flex items-center justify-between rounded-lg bg-[#F3F3F3] p-2.5 sm:p-3">
            <div className="flex items-center gap-2">
              <span className="font-iransans text-xs text-[#494949] sm:text-sm">
                ماهانه
              </span>
              <span className="font-iransans text-xs text-[#212121] sm:text-sm">
                از ۱ تا ۳۰ روز:
              </span>
            </div>
            <span className="font-iranyekan text-sm font-extrabold text-[#194BF0] sm:text-base">
              {toPersianNumbers(monthlyPrice)}
            </span>
          </div>
        </div>

        {/* مبلغ ضمانت */}
        <div className="mt-4 flex items-center justify-between rounded-lg border border-[#E5E5E5] p-2.5 sm:p-3">
          <span className="font-iransans">مبلغ ضمانت:</span>
          <span className="font-iranyekan text-sm font-extrabold text-[#212121] sm:text-base">
            {toPersianNumbers(deposit)} تومان
          </span>
        </div>

        {/* دکمه رزرو */}
        <button className="font-iranyekan mt-4 w-full rounded-lg bg-[#194BF0] py-2.5 text-center text-sm font-extrabold text-white transition-colors hover:bg-[#1539C0] sm:py-3">
          درخواست رزرو
        </button>
      </div>
    </div>
  );
};

export default Car;
