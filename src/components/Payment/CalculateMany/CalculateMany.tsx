import { PriceRow } from './PriceRow';
import { useQuery } from '@tanstack/react-query';
import { getCarFullDetails } from '../../../services/apiDeposit';
import type { TCar } from '../../../types/CarType';
import FullPageLoading from '../../../ui/FullPageLoading';
import { useDepositPrice } from '../../../context/price deposit/useDepositPrice';
import { useReservedInfo } from '../../../context/carReservedData/useReserved';

const CalculateMany = ({ mainCar }: { mainCar: TCar }) => {
  const { id } = mainCar;
  const { convertToPriceItems } = useDepositPrice();
  const { formInfo } = useReservedInfo();
  const { setTotalAmount } = useDepositPrice();

  const {
    data: priceItems,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['carDetails', id],
    queryFn: () => getCarFullDetails(id),
  });

  if (isLoading) return <FullPageLoading />;

  if (error || !priceItems)
    return <p className="text-red-600">{error?.message}</p>;

  if (!formInfo) return;
  const { rentalDays } = formInfo;

  const pricesArray = convertToPriceItems(
    priceItems,
    rentalDays,
    setTotalAmount
  );

  return (
    <div
      dir="ltr"
      className="flex w-full flex-col overflow-x-auto rounded-r-2xl border-dashed border-[#AEAEAE] bg-white p-5 md:p-8 lg:min-h-[350px] lg:border-l"
    >
      {/* Header Section */}
      <div className="flex w-full flex-col items-stretch justify-center">
        <h2 className="text-right text-2xl leading-[34px] font-bold text-[#353535] md:text-xl">
          محاسبه قیمت
        </h2>

        {/* Progress Bar */}
        <div className="mt-1 flex w-full flex-wrap items-center justify-end gap-[-3px]">
          <div className="h-px min-w-[240px] flex-1 rounded bg-[#D7D7D7]" />
          <div className="h-[3px] w-[93px] rounded-lg bg-[#FDB713]" />
        </div>
      </div>

      <div className="mt-1 w-full text-xs leading-[22px] text-[#353535]">
        {pricesArray.map((item, index) => (
          <PriceRow
            key={index}
            label={item.label}
            amount={item.amount}
            isFirst={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

// Individual price row component
export interface PriceRowProps {
  label: string;
  amount: string | number;
  isFirst?: boolean;
}

export default CalculateMany;
