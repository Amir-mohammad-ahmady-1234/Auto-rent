import { formatNumber } from "../../utils/formatNumber.1";

type PriceBoxProps = {
  dailyPrice: string;
  monthlyPrice: string;
};

const PriceBox = ({ dailyPrice, monthlyPrice }: PriceBoxProps) => {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-blue-500 p-4 text-center">
      <div className="flex-1">
        <div className="mb-1 text-xs text-gray-500">ماهانه</div>
        <div className="text-lg font-bold text-blue-700">
          {formatNumber(monthlyPrice)}
        </div>
      </div>
      <div className="flex-1 border-r border-gray-300 pr-3">
        <div className="mb-1 text-xs text-gray-500">از ۱ تا ۳ روز</div>
        <div className="text-lg font-bold text-blue-700">
          {formatNumber(dailyPrice)}
        </div>
      </div>
    </div>
  );
};

export default PriceBox;
