import type { TCar } from '../../types/CarType';

interface Prop {
  carDetails: TCar;
}
const Car = ({ carDetails }: Prop) => {
  const { dailyPrice, deposit, id, image, model, monthlyPrice, title } =
    carDetails;
  return (
    <div
      className="w-full rounded-2xl border border-[#D7D7D7] bg-white p-4"
      key={id}
    >
      <div className="flex w-full flex-col items-stretch justify-center border-b border-[#D7D7D7] pb-3">
        <img
          src={image}
          className="aspect-[1.56] min-h-[225px] w-full max-w-[350px] self-center object-contain object-center sm:min-h-[180px]"
          alt={title}
        />
        <div className="mt-2 w-full text-right">
          <div className="w-full">
            <div className="-webkit-box-orient-vertical -webkit-line-clamp-1 text-overflow-ellipsis text-base leading-[1.4] font-bold text-[#0C0C0C] sm:text-sm">
              {title}
            </div>
            <div className="mt-2 flex w-full items-center justify-end gap-[3px] text-xs leading-[22px] font-normal whitespace-nowrap capitalize md:whitespace-normal">
              <div className="flex-basis-0 my-auto flex-1 flex-shrink self-stretch text-[#494949]">
                {model}
              </div>
              <div className="my-auto gap-[3px] self-stretch text-[#868686] md:whitespace-normal">
                مدل:
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 flex w-full items-start justify-start gap-2 overflow-hidden rounded-lg bg-[#F3F3F3] px-2 py-2 text-xs leading-[22px] font-normal">
          <div className="text-[#494949] capitalize">روزانه</div>
          <div className="flex-basis-0 flex-1 flex-shrink text-right text-base font-bold text-[#194BF0] sm:text-sm">
            {dailyPrice}
          </div>
          <div className="text-right text-[#212121] capitalize">
            از ۱ تا 30 روز:
          </div>
        </div>
        <div className="mt-2 flex w-full items-start justify-start gap-2 overflow-hidden rounded-lg bg-[#F3F3F3] px-2 py-2 text-xs leading-[22px] font-normal">
          <div className="text-[#494949] capitalize">ماهانه</div>
          <div className="flex-basis-0 flex-1 flex-shrink text-right text-base font-bold text-[#194BF0] sm:text-sm">
            {monthlyPrice}
          </div>
          <div className="text-right text-[#212121] capitalize">
            از ۱ تا 30 روز:
          </div>
        </div>
      </div>
      <div className="mt-2 w-full px-[1px] text-xs text-[#212121]">
        <div className="flex w-full items-start justify-between gap-[40px_100px]">
          <div className="font-bold text-[#212121]">{deposit}</div>
          <div className="text-right font-medium text-[#212121]">
            مبلغ ضمانت:
          </div>
        </div>
      </div>
      <div className="mt-2 min-h-10 w-full gap-2 self-stretch overflow-hidden rounded-lg bg-[#194BF0] px-4 py-2 text-center text-sm leading-[25px] font-semibold text-white capitalize">
        درخواست رزرو
      </div>
    </div>
  );
};

export default Car;
