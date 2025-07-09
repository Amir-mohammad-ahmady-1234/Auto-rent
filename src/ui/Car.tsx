import { Link } from 'react-router-dom';
import type { TCar } from '../types/CarType';
import { formatNumber } from '../utils/formatNumber.1';
import { toPersianNumbers } from '../utils/toPersianNumbers';
import { getCarFullDetails } from '../services/apiDeposit';
import { useQuery } from '@tanstack/react-query';
import FullPageLoading from './FullPageLoading';

interface Prop {
  carDetails: TCar;
}

const Car = ({ carDetails }: Prop) => {
  const { dailyPrice, id, image, model, monthlyPrice, title, brand } =
    carDetails;

  const {
    data: priceItems,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['carDetails', id],
    queryFn: () => getCarFullDetails(id),
  });

  if (isLoading) return <FullPageLoading />;

  const { deposit_amount } = priceItems;

  if (error) throw new Error('can not fetch car deposit data.');

  return (
    <div
      dir="rtl"
      className="font-iransans flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white shadow-sm transition-all hover:shadow-md"
      key={id}
    >
      <div className="flex h-[180px] w-full items-center justify-center bg-[#F9F9F9] p-4 sm:h-[200px] md:h-[220px]">
        <img
          src={image}
          className="h-auto max-h-[160px] w-auto max-w-[280px] object-contain object-center sm:max-h-[180px] md:max-h-[200px]"
          alt={title}
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-4">
          <h3 className="font-iranyekan text-base font-bold text-[#0C0C0C] sm:text-lg">
            {title}
          </h3>
          <div className="mt-2 flex items-center text-sm text-[#494949]">
            <span className="font-iransans">مدل: </span>
            <span className="font-iransans ml-2">
              {toPersianNumbers(model)}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-lg bg-[#F3F3F3] p-2.5 sm:p-3">
            <div className="flex items-center gap-2">
              <span className="font-iransans text-xs text-[#494949] sm:text-sm">
                روزانه
              </span>
              <span className="font-iransans text-xs text-[#212121] sm:text-sm">
                از ۱ تا ۳ روز:
              </span>
            </div>
            <span className="font-iranyekan text-sm font-extrabold text-[#194BF0] sm:text-base">
              {formatNumber(dailyPrice)}
            </span>
          </div>

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
              {formatNumber(monthlyPrice)}
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-lg border border-[#E5E5E5] p-2.5 sm:p-3">
          <span className="font-iransans">مبلغ ضمانت:</span>
          <span className="font-iranyekan text-sm font-extrabold text-[#212121] sm:text-base">
            {formatNumber(deposit_amount)} تومان
          </span>
        </div>

        <Link to={`/rent/chose_car_info/${brand}`}>
          <button className="font-iranyekan mt-4 w-full cursor-pointer rounded-lg bg-[#194BF0] py-2.5 text-center text-sm font-extrabold text-white transition-colors hover:bg-[#1539C0] sm:py-3">
            درخواست رزرو
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Car;
